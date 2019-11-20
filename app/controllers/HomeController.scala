package controllers


import akka.actor._
import de.htwg.se.rummi.controller._
import javax.inject._
import play.api.libs.json.Json
import play.api.libs.streams.ActorFlow
import play.api.mvc._

import scala.swing.Reactor

/**
 * This controller creates an `Action` to handle HTTP requests to the
 * application's home page.
 */
@Singleton
class HomeController @Inject()(cc: ControllerComponents) extends AbstractController(cc) {

  val controller = new de.htwg.se.rummi.controller.Controller("p1" :: "p2" :: Nil)
  controller.initGame()

  def moveTile(command: String) = Action {
    val c = command.split("-%3E")
    controller.moveTile(c(0), c(1))
    println(c)
    Redirect("/")
  }

  def command(command: String) = Action {
    command match {
      case "save" => controller.save()
      case "sort" => controller.sortRack()
      case "finish" => controller.switchPlayer()
      case "draw" => controller.draw()
      case _ => Results.NotFound
    }
    Redirect("/")
  }

  def json() = Action {
    Ok(Json.parse(controller.save()))
  }

  def game = Action {
    Ok(views.html.index(controller))
  }

  def rules = Action {
    Ok(views.html.rules())
  }

  def socket = WebSocket.accept[String, String] { request =>
      ActorFlow.actorRef { out =>
        println("Connect receive")
        RummikubWeSocketActorFactory.create(out)
      }
  }

  object RummikubWeSocketActorFactory {
    def create(out: ActorRef) = {
      Props(new RummikubWebSocketActor(out))
    }
  }

  class RummikubWebSocketActor(out: ActorRef) extends Actor with Reactor {
    listenTo(controller)

    def receive = {
      case msg: String =>
        out ! (controller.save())
        println("Sent Json to Client" + msg)
    }

    reactions += {
      case event: PlayerSwitchedEvent => sendJsonToClient
      case event: ValidStateChangedEvent => sendJsonToClient
      case event: FieldChangedEvent => sendJsonToClient
      case event: GameStateChanged => sendJsonToClient
      case event: WinEvent => sendJsonToClient
    }

    def sendJsonToClient = {
      println("Received event from Controller")
      out ! (controller.save())
    }
  }
}