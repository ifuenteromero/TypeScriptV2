"use strict";
class Calendar {
    constructor(name) {
        this.name = name;
    }
}
class GoogleCalendar extends Calendar {
    constructor(name) {
        super(name);
    }
    addEvent() {
        console.log('Adding event to Google Calendar');
    }
    removeEvent() {
        console.log('Removing event from Google Calendar');
    }
}
class GoogleCalendar2 {
    constructor(name) {
        this.name = name;
        this.addEvent = () => console.log('Adding event to Google Calendar');
        this.removeEvent = () => console.log('Removing event from Google Calendar');
        this.sync = () => console.log('Syncing Google Calendar');
    }
}
//# sourceMappingURL=16-Interfaces.js.map