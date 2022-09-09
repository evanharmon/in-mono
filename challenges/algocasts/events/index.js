// https://github.com/StephenGrider/AlgoCasts/tree/master/exercises/events
// --- Directions
// Create an 'eventing' library out of the
// Events class.  The Events class should
// have methods 'on', 'trigger', and 'off'.

class Events {
  constructor() {
    this.events = {} // object prop with array of callbacks
  }
  // Register an event handler
  on(eventName, callback) {
    if (this.events[eventName]) {
      this.events[eventName].push(callback)
    } else {
      this.events[eventName] = [callback]
    }
  }
  // Trigger all callbacks associated
  // with a given eventName
  trigger(eventName) {
    if (!this.events[eventName]) return
    for (let fn of this.events[eventName]) fn()
  }
  // Remove all event handlers associated
  // with the given eventName
  off(eventName) {
    // if (!this.events[eventName]) return
    // this.events[eventName] = []
    // improvement otherwise events object has old event names
    delete this.events[eventName]
  }
}

// debugger
// const events = new Events()
// const cb1 = () => console.log(`clicked`)
// const cb2 = () => console.log(`again`)
// events.on('click', cb1)
// events.on('click', cb2)
// events.trigger('click')
// events.off('click')
// debugger

export default Events
