# SolidabisKoodihaaste2021

# General information

## Technologies and development environments
Used technologies are Angular, JavaScript/TypeScript and SCSS.

The development was done on Windows 10 using Visual Studio Code.

## Set up
You can see below in the Angular guide section how to set up the environment locally. You need Angular CLI installed for that.

## Software
The software in itself is fairly simple.

First, it will get all necessary data from "api". There was no reason to build a backend for the app, as it would have been only a couple of api end points where the data would've been fetched. So, I just mocked it based on the data that was given in the assignment.

Second, the user can make selections for the car type and the input properties - speeds and distance. Based on these, the software will calculate the travel times and fuel consumptions for the given speeds and the distance.

Most of the components in the application are for display purposes. The calculation logic is handled in calculation-results.component.ts.

# Angular guide

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.20.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Angular CLI Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
