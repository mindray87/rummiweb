let selected_tile = null;
let selected_tile_label = null;


$(document).ready(function () {

  $.get( "/game", function( data ) {
    $('#content').html( data );
    onload();
    loadJson();
  });
});

function onload() {
  selected_tile_label = $("#selected_tile_label");

  $("#sortBtn").click(function () {
    command("sort");
  });

  $("#finishBtn").click(function () {
    command("finish");
  });

  $("#drawBtn").click(function () {
    command("draw");
  });

  $(".rummi_tile").each(function (index, item) {
    $(item).click(function () {
      tile_on_click(this);
    });
  });

  $("#rulesBtn").click(function () {
    console.log("Rules Btn clicked.");
    $.get( "/rules", function( data ) {
      $('#content').html( data );
      onload();
    });
  });

  $("#gameBtn").click(function () {
    console.log("Game Btn clicked.");
    $.get( "/game", function( data ) {
      $('#content').html( data );
      onload();
      loadJson();
    });
  });

  $("#playerInfo").click(function () {

  });
}

function tile_on_click(t) {
  let tile = $(t);
  if (selected_tile == null) {
    if (!tile.text().trim() == "") {
      // String not empty or blank
      selected_tile = tile;
      showSelectedTile(tile);
    }
  } else if (selected_tile == tile) {
    selected_tile = null
    invisibleSelectedTile()
  } else {

    if (tile.text().trim() == "") {
      let sf = selected_tile.attr("id").split("*");
      let c = tile.attr("id").split("*");
      moveTile(getColLetter(sf[1]) + sf[0], getColLetter(c[1]) + c[0]);
      console.log("moveTile " + getColLetter(sf[1]) + sf[0] + "->"
          + getColLetter(c[1]) + c[0]);
      selected_tile.html("");
      loadJson();
      selected_tile = null
      invisibleSelectedTile()
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
  let split = tile.attr("id").split("*");
  selected_tile_label.text(tile.text().trim() + " @ " +
      getColLetter(split[1]) + split[0]);
  selected_tile_label.removeClass("invisible")
}

function invisibleSelectedTile(text) {
  selected_tile_label.addClass("invisible")
}

function moveTile(from, to) {
  $.get("/moveTile/" + from + "->" + to, function () {
  })
}

function loadJson() {
  $.ajax({
    method: "GET",
    url: "/json",
    dataType: "json",

    success: function (data) {
      loadRack(data);
      loadField(data);
      getActivePlayer(data);
    }
  });
}

function getActivePlayer(json) {
  $("#playerInfo").textContent = json.players[json.activePlayerIndex].name;
}

function command(command) {
  $(".rummi_tile").each(function (index, item) {
    $(item).text("");
  });
  $.get("/command/" + command);
  loadJson();
}

function loadRack(json) {
  activePlayer = json.players[json.activePlayerIndex].name;
  let rack = json.racks.find(function (element) {
    return element.player == activePlayer;
  });

  rack.grid.tiles.forEach(function (item) {
    let x = item.x + 8;
    let y = item.y;
    let color = item.tile.color;
    let tile = $("#" + x + "\\*" + y);
    let span = '<span style="color: ' + color + '">' + item.tile.number
        + '</span>';
    tile.html(span);
  });
}

function loadField(json) {
  json.field.tiles.forEach(function (item) {
    let x = item.x;
    let y = item.y;
    let color = item.tile.color;
    let tile = $("#" + x + "\\*" + y);
    let span = '<span style="color: ' + color + '">' + item.tile.number
        + '</span>';
    tile.html(span);
  });
}