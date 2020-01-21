function connectWebSocket() {
  var websocket = new WebSocket("ws://localhost:9000/websocket");
  websocket.setTimeout

  websocket.onopen = function(event) {
    console.log("Connected to Websocket");
  }

  websocket.onclose = function () {
    console.log('Connection with Websocket Closed!');
  };

  websocket.onerror = function (error) {
    console.log('Error in Websocket Occured: ' + error);
  };

  websocket.onmessage = function (e) {
    console.log("Websocket message received.")
    if (typeof e.data === "string") {
      let json = JSON.parse(e.data);
      resetTiles();
      loadRack(json)
      loadField(json)
    }
  };
}