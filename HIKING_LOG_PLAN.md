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