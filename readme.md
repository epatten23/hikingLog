# Overview

For this project, I wanted to learn JavaScript. Most of my pervious work has been in Python so I was curious about how a different language handles functions, data input and display, and excpetions.

This application is a hiking log that runs in the browser. The user enters a hike name, date, distance, elevation gain, and duration. The app then saves it and displays the complete list at the bottom of the page, grouped by year and month. The infomration persists using local storage. The form validates, making sure every field is complete before allowing the user to save the hike.

I wanted to learn JavaScript but also wanted to create an application that is functional and I would want to use in the future. I am an avid hiker so creating a hiking log was a good option for me to get hands on experience in JavaScript as well as create a program I would come back to and use. 

[Software Demo Video](http://youtube.link.goes.here)


# Development Environment

I developed this software in Visual Studio Code, used Git for version control and published it to GitHub. 

This program is writteno in JavaScript and runs in the browser with HTML and CSS. It uses a local API to sotre the hikes between sessions. For the hike date, I used Day.js, a date library which parses dates in the local time and formats them corectly so I can group them recursvely into years and months. 


# Useful Websites

- [MDN Web Docs - Array.prototype.map()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map)
- [MDN Web Docs - try...catch](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/try...catch)
- [MDN Web Docs - Window.localStorage](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage)
- [Day.js Documentation](https://day.js.org/docs/en/display/format)


# Future Work

If I were to spend more time on this project, I would improve it by:
- Adding the ability to edit and delete already logged hikes
- Display summary statistics (total amount of hikes, distance hikes, evelation gained, hours hiked)
- Give each input box a validation to give a specific error message instead of a generic message for all of the input boxes. 
- Add filtering so the user can search for a hike based on any of the hike properties. 


# AI Disclosure

# AI Disclosure

I used Claude (Anthropic) as a learning and reference tool while building this project. It helped me write some pseudocode for the project and then explained the different functions I would need step by step. I had not written JavaScript before, so I used it mainly to understand syntax I was unfamiliar with: arrow functions, `map`, `throw`/`try`/`catch`, and recursion in JavaScript. The explanations were given on unrelated example data (numbers, a list of books), and I wrote the code for my hiking log myself.

I also used it to review my code and explain my errors. For the third-party library, I was given the Day.js CDN script tag and a list of its format strings, and I chose which two to use and how to fit them into my existing grouping function.

I did not accept suggestions without understanding them. I wanted to use a third-party library and went to AI for suggestions and ideas. I chose to use Day.js after understanding the implementation. Another change suggested by AI was to execute the addHike inside the try block, making sure everything was validated before allowing the hike to be added. I considered how annoying this might be if I just wanted to leave out one piece of information, but decided it would be best to ensure data consistency.  

What I learned: I learned the syntax of JavaScript, which is similar to other programming languages I'm familiar with, but just different enough that there were syntax errors I wouldn't have caught without AI. I learned how to use arrow functions in JavaScript, which was super helpful as AI gave me examples and I was able to implement them into my project.