// Define a class called Logger that takes the name of a file in its constructor and provides a method for writing messages to that file.
// Don’t worry about the actual file I/O operations. Just define the class with the right members.

class Logger {
    constructor(public logFile: string) {

    }

    writeMessage(message: string): void {
        console.log(message)
    }
}