const EventEmitter = require("events");

class EventHelper extends EventEmitter{
    triggerEvent(logs){
        this.emit("log recorded",{currentlog: logs})
    }
}

module.exports = EventHelper;