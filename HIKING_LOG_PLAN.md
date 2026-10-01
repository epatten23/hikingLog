# Hiking Log

## Project Idea

Hiking Log will be a small JavaScript application for keeping a personal record of hikes. It should be quick to use after a hike, work in a regular web browser, and keep the information on the user's device.

## Screen Sketch

```text
Hiking Log

Add a hike
Trail name: [____________]
Date:       [__________]
Miles:      [____]
Elevation:  [____]
Hours:      [____]
[Add hike]

Your hikes
- Mount Si - 2026-09-14 - 7.5 miles - 3150 feet gained - 4 hours
```

This is a text sketch. The app uses the browser's default page styles; there is no CSS.

## What It Should Do

- Add a hike with its name, date, distance, elevation gain, and duration.
- Show saved hikes in a simple list.
- Save entries in the browser with `localStorage`, so they remain after the page is closed on the same device and browser.

Browser storage is local to one browser profile; it does not automatically sync to another device.

## Confirmed Choices

- Keep the interface very basic, with no CSS and beginner-level JavaScript.
- Use miles and feet.
- Save hikes in this browser with `localStorage`; there is no account or device syncing.
- Each hike has a trail name, date, distance, elevation gain, and duration. Notes and summary totals are not included.
- The first version only adds hikes, lists them, and saves them.

## A Hike's Data

A saved hike could be represented in JavaScript like this:

```js
{
  name: "Mount Si",
  date: "2026-09-14",
  distance: 7.5,
  elevation: 3150,
  duration: 3.5
}
```

The `distance` value is measured in miles, `elevation` in feet, and `duration` in hours.

## Current Project Status

The working app is `index.html` with its JavaScript in `hiking.js`. It adds hikes, displays the list, and saves it in this browser. The original `practiceindex.html` and `practiceformulas.js` remain unchanged as a separate greeting exercise.

## Understanding the App Code

This section explains the current app in plain language. Blank lines in the source are spacing for readability; they do not run as code.

### `index.html`

- `<!DOCTYPE html>` tells the browser this is a modern HTML page.
- `<html lang="en">` starts the page and identifies its language for browsers and assistive technology.
- `<head>` contains page setup. The character-set line enables standard text, and the viewport line makes the page fit phone screens.
- `<title>Hiking Log</title>` sets the browser-tab title.
- `<script src="hiking.js" defer></script>` loads the JavaScript. `defer` waits until the HTML has been parsed before running the script.
- `<body>` contains everything a person sees: the headings, form, and hike list.
- `<form id="hike-form">` groups the fields. Each `<label for="...">` is connected to an input with the same `id`.
- The five inputs collect the trail name, date, miles, elevation gain in feet, and duration in hours. `required` asks the browser to make sure each field has a value. `min` and `step` restrict numeric input.
- `<button type="submit">` submits the form.
- `<ul id="hike-list">` is where JavaScript adds the saved hikes.
- Closing tags such as `</form>`, `</body>`, and `</html>` end the elements they match.

### `hiking.js`

- `const hikeForm` and `const hikeList` find the form and list in the HTML. Their ID strings must match the HTML IDs.
- `let hikes` loads the saved text from `localStorage`. `JSON.parse` turns the text into an array. `|| "[]"` uses an empty array when nothing has been saved yet.
- `showHikes()` clears the visible list. The `for...of` loop handles each hike in the array. `document.createElement("li")` makes a list item; `textContent` fills it with the hike details; `appendChild` adds it to the page.
- `addHike(event)` runs when the form is submitted. `preventDefault()` stops the browser from refreshing the page.
- The `hike` object reads the five form fields. `.value` gets what the user typed, `.trim()` removes extra spaces from the trail name, and `Number(...)` converts number fields from text into numbers.
- `hikes.push(hike)` adds the new hike to the array. `JSON.stringify` turns the array into text, and `localStorage.setItem` saves it in this browser.
- `showHikes()` redraws the list with the new item. `hikeForm.reset()` clears the fields.
- `addEventListener("submit", addHike)` tells the browser to call `addHike` when the form is submitted. The last `showHikes()` displays saved hikes when the page first opens.

To follow the main flow, submit the form and read `addHike` from top to bottom. Then look at how it calls `showHikes` and saves the array in `localStorage`.

## Retired Starter Example Reference

The rest of this section describes the original name-greeting practice files. It is kept as a reference, but it is not part of the hiking app. The app entry point is now `index.html`, not `practiceindex.html`.

### Original `practiceindex.html`, Line by Line

The blank lines in the source separate related parts of the page; they do not create visible content by themselves.

```html
<!DOCTYPE html>
```
Declares that this document uses modern HTML5.

```html
<html lang="en">
```
Starts the HTML document. `lang="en"` tells browsers and assistive technology that the page's language is English.

```html
  <head>
```
Starts the head section, which contains page information rather than the main visible content.

```html
    <meta charset="UTF-8" />
```
Sets the character encoding to UTF-8 so the page can represent common text and symbols correctly.

```html
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
```
Tells mobile browsers to size the page to the device's screen instead of rendering it as a zoomed-out desktop page.

```html
    <title>Example Functions</title>
```
Sets the page title shown in the browser tab.

```html
  </head>
```
Ends the head section.

```html
  <body>
```
Starts the body, where the visible page content goes.

```html
    <h1>Example Functions</h1>
```
Shows the main heading. It currently says “Example Functions” because this is starter content.

```html
    <label for="nameInput">Enter your name:</label>
```
Displays a label for the name field. The `for` value connects it to the input whose `id` is `nameInput`; clicking the label focuses that input.

```html
    <input id="nameInput" type="text" placeholder="Type here" />
```
Creates a one-line text box. JavaScript can find it by its `nameInput` ID. The placeholder is a hint shown while the box is empty.

```html
    <button onclick="showUserName()">Show Name</button>
```
Creates a button. When clicked, its `onclick` handler calls the `showUserName` function from the JavaScript file.

```html
    <p id="output"></p>
```
Creates an initially empty paragraph. The JavaScript finds it by the `output` ID and puts the greeting or validation message there.

```html
    <script src="practiceformulas.js"></script>
```
Loads the JavaScript file named `practiceformulas.js`. Because this script is near the end of the body, the page elements above it have already been parsed when the browser loads the script.

```html
  </body>
```
Ends the visible page content.

```html
</html>
```
Ends the HTML document.

### Original `practiceformulas.js`, Line by Line

```js
function displayOutput(message) {
```
Declares a function named `displayOutput` with one parameter, `message`. A parameter is a value the caller gives to a function. This function is not currently used by the page.

```js
  console.log(message);
```
Writes the value of `message` to the browser's developer console. It does not put the value on the page.

```js
}
```
Ends the `displayOutput` function.

```js
function showUserName() {
```
Declares the function that runs when the page's button is clicked.

```js
  const input = document.getElementById("nameInput");
```
Finds the HTML element whose ID is `nameInput` and stores it in the constant named `input`. `const` means this variable cannot be reassigned to a different value.

```js
  const output = document.getElementById("output");
```
Finds the output paragraph and stores that element in the constant named `output`.

```js
  const name = input.value.trim();
```
Reads the text entered in the input. `trim()` removes spaces from the beginning and end, so a field containing only spaces counts as empty.

```js
  if (name) {
```
Checks whether `name` is non-empty. In JavaScript, an empty string is treated as false in this condition.

```js
    output.textContent = `Hello, ${name}!`;
```
For a non-empty name, puts a greeting in the output paragraph. The backticks create a template string, and `${name}` inserts the user's name. `textContent` inserts plain text rather than interpreting the value as HTML.

```js
  } else {
```
Starts the alternative branch, which runs when the name is empty after trimming.

```js
    output.textContent = "Please enter a name.";
```
Shows a message asking the user to enter a name.

```js
  }
```
Ends the `if` / `else` decision.

```js
}
```
Ends the `showUserName` function.

```js
// Example usage:
```
A comment for people reading the code. JavaScript ignores it when running the program.

```js
// showUserName();
```
An example function call, also commented out, so it does not run automatically. The button in the HTML calls the function when clicked instead.

## Next Build Step

Possible later additions include editing or deleting hikes. The current version leaves those out to keep the code small.