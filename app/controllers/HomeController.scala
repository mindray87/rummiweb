package controllers


import de.htwg.se.rummi.aview.Tui
import javax.inject._
import play.api.libs.json.Json
import play.api.mvc._

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

  def json() = Action{
    Ok(Json.parse(controller.save()))
  }

  def game = Action {
    Ok(views.html.game(controller))
  }

  def main = Action {
    Ok(views.html.index("Rummikub"))
  }

  def rules = Action {
    Ok(views.html.rules())
  }
}
