// Interfaces
// An interface is a way to define a contract on a function with respect to the arguments and their type.

// We use interfaces to define the shape of objects.

// Calendar
// GoogleCalendar
// ICalendar
// OutlookCalendar

abstract class Calendar {
	// Base class
	constructor(public name: string) {}

	abstract addEvent(): void;
	abstract removeEvent(): void;
}

// The implementation depends on the calendar service

class GoogleCalendar extends Calendar {
	constructor(name: string) {
		super(name);
	}

	override addEvent(): void {
		console.log('Adding event to Google Calendar');
	}

	override removeEvent(): void {
		console.log('Removing event from Google Calendar');
	}
}

interface ICalendar {
	name: string;
	addEvent: () => void;
	removeEvent: () => void;
}

// Shall we use an interface or an abstract class?
// Use an abstract class when you want to provide a default implementation for a base class.
// Use an interface when you want to define a contract on a function with respect to the arguments and their type.

// If we have some logic, or some algorithms that are common to all the classes, then we should use an abstract class.

// If we just want to define a contract, then we should use an interface.

interface ICalendarCloud extends ICalendar {
	sync: () => void;
}

class GoogleCalendar2 implements ICalendarCloud {
	constructor(public name: string) {}

	addEvent = () => console.log('Adding event to Google Calendar');
	removeEvent = () => console.log('Removing event from Google Calendar');
	sync = () => console.log('Syncing Google Calendar');
}
