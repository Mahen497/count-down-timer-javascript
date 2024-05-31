# Countdown Timer

This JavaScript code creates a countdown timer with pause, resume, restart, and customizable duration functionalities.

## Features

- Start, pause, resume, and restart the countdown timer.
- Customize the duration using dropdown menus for hours, minutes, and seconds.

## How it Works

### ContTimer Class

This class represents the countdown timer and provides methods to control its behavior.

- `constructor(timeDuration, timeUpdate, timeComplete)`: Initializes the timer with the initial duration, a callback function to update the display of remaining time, and a callback function to execute when the timer completes.

  - `start()`: Starts the timer by setting up an interval function that decrements the time duration every second and updates the display. If the duration reaches 0, it stops the timer and executes the complete callback function.

  - `pause()`: Pauses the timer by stopping the interval.

  - `resume()`: Resumes the timer by restarting the interval.

  - `stop()`: Stops the timer by clearing the interval.

  - `restartTimer()`: Resets the timer to its initial duration, updates the display, and restarts the timer.

  - `updateTime()`: Formats the remaining time and updates the display.

### Event Listeners

Three event listeners are set up for buttons to control the timer:

- Pause Button: Pauses the timer and disables itself while enabling the resume button.
- Resume Button: Resumes the timer and disables itself while enabling the pause button.
- Restart Button: Restarts the timer.

### Dropdown Selection

Three dropdowns allow users to set the timer duration:

- Hours Dropdown
- Minutes Dropdown
- Seconds Dropdown

## Usage

1. Include the JavaScript code in your project.
2. Add HTML elements for the timer display, buttons, and dropdowns.
3. Initialize the timer and event listeners.
