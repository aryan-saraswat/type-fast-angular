#Type fast!
To run the project, you need the backend repository (Spring boot application) that's responsible for generating random words and sending them to the frontend. The backend repository can be found [here](https://github.com/aryan-saraswat/type-fast-backend). Clone the backend repository and run it, it will be available by default on port 8080.

Test if the backend started by sending a POST request to http://localhost:8080/get-words with the body
`{
    "numberOfWords": 7
}`

If everything went well, you should see 7 random five-letter words every time you send the request.

# TypeFastAngular

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 18.0.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
