let selected_tile = null;
let selected_tile_label = null;
let tiles = null;

$(document).ready(function () {
  selected_tile_label = document.getElementById("selected_tile_label");
  tiles = Array.from(document.getElementsByClassName("rummi_tile"));
  tiles.forEach(function (item, index, array) {
    item.setAttribute("onclick", "tile_on_click(this)")
  });
});

function tile_on_click(tile) {
  if (selected_tile == null) {
    if (!tile.textContent.trim() == "") {
      // String not empty or blank
      selected_tile = tile;
      showSelectedTile(tile);
    }
  } else if (selected_tile == tile) {
    selected_tile = null
    invisibleSelectedTile()
  } else {

    if (tile.textContent.trim() == "") {
      let sf = selected_tile.getAttribute("name").split("*")
      let c = tile.getAttribute("name").split("*")
      let redirectTo = "/moveTile/" + getColLetter(sf[1]) + sf[0] + "->"
          + getColLetter(c[1]) + c[0];
      console.log("redirect to " + redirectTo);
      window.location.replace(redirectTo);
    } else {
      selected_tile = tile;
      showSelectedTile(tile);
    }
  }
}

function getColLetter(col) {
  return String.fromCharCode(64 + parseInt(col));
}

function showSelectedTile(tile) {
  let split = tile.getAttribute("name").split("*");
  selected_tile_label.textContent = tile.textContent.trim() + " @ " +
      getColLetter(split[1]) + split[0];
  selected_tile_label.classList.remove("invisible")
}

function invisibleSelectedTile(text) {
  selected_tile_label.classList.add("invisible")
}