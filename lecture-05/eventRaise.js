const EventEmitter = require('events');

class EventRaiser extends EventEmitter {
    raiseAnEvent() {
        console.log('Event bellRing will be raised now!');
        // raise an event
        setTimeout(() => {
            this.emit('bellRing', 'tiffin started!'); // multiple parameter can also be given here. in case of multiple parameter, it's recommended to pass as an object.
        }, 2000);
    }
}

module.exports = EventRaiser;
