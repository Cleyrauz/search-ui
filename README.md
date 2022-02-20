# Awesome Search App

A simple React frontend app for an awesome search app.

## Running the app

You can run the app - locally with Node, or in your IDE.

**Prerequisites**
These instructions assume you have the following installed:

- Node 16.14.0

Installation instructions for the above are readily available online.

## How to run the application?

In the project directory, run:

### `npm install`

This will generate all the files required for the project execution.

Now you need to run:

### `npm start`

This command will run the app.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser. Now enjoy : )

Try searching for something on the search box, followed by clicking the search button.

## How to run the application tests?

You can also run all the available tests in the application by executing:

But first you need to disable the option to reseat the mocks on the react-script directory:
Open in the project the folder node_modules -> react-scripts -> scripts -> utils

Open the file called: createJestConfig

and edit line 68 with attribute: resetMocks=true to be resetMocks=false and save the file

Now you can execute all the test from the project by running:

### `npm test`
