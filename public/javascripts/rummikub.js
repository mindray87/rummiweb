
let selected_tile = null;

let tiles = document.getElementsByClassName("rummi_tile");
for (let tile of tiles) {
  tile.onclick = tile_on_click(tile)
}

function tile_on_click(tile){
  if (selected_tile == null){
    selected_tile = tile
  }
}