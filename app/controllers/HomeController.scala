package controllers

import de.htwg.se.rummi.aview.Tui
import javax.inject._
import play.api.mvc._

/**
 * This controller creates an `Action` to handle HTTP requests to the
 * application's home page.
 */
@Singleton
class HomeController @Inject()(cc: ControllerComponents) extends AbstractController(cc) {

  val controller = new de.htwg.se.rummi.controller.Controller("p1" :: "p2" :: Nil)
  controller.initGame()

  val tui = new Tui(controller)

  def index = Action {
    Ok(tui.gridToHtmlString).as("text/html")
  }

}
