package controllers


import de.htwg.se.rummi.aview.Tui
import de.htwg.se.rummi.Const
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

  var selectedField : String = ""
  val tui = new Tui(controller)

  def index = Action {
    Ok(tui.gridToHtmlString).as("text/html")
  }

  def input(command: String) = Action {
    val c = command.replace("-%3E", "->")
    tui.processInputLine(c)
    println(c)
    println("isValidField: " + controller.isValidField)
    Redirect("/")
  }

  def select(field: String) = Action {

    if (selectedField.isEmpty) {
      selectedField = field
      println("set selectedField")
    } else if (selectedField == field){
      selectedField = ""
      println("reset selectedField")
    } else {
      val sf = selectedField.split("\\*")
      val c = field.split("\\*")
      val a = ('A' to ('A' + Const.GRID_COLS - 1).toChar).toList
      selectedField = ""
      println("redirect to /input/" + a(sf(1).toInt - 1) + sf(0) + "->" + a(c(1).toInt - 1) + c(0))
      tui.processInputLine(a(sf(1).toInt - 1) + sf(0) + "->" + a(c(1).toInt - 1) + c(0))
    }
    Redirect("/")
  }

  def game = Action {
    Ok(views.html.index(controller))
  }

  def rules = Action {
    Ok(views.html.rules())
  }

}
