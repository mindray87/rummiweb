
let selected_tile = null;
let selected_tile_label = null;
let tiles = null;

function on_doc_ready(){
  console.log( "Document is ready, filling grid" );

  selected_tile_label = document.getElementById("selected_tile_label");
  tiles = document.getElementsByClassName("rummi_tile");
  for (let tile of tiles) {
    tile.onclick = tile_on_click(tile);
  }

}

function tile_on_click(tile){
    console.log("clicked" + tile.textContent)
  selected_tile_label = tile.href
}