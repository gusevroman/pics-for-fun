
# React application with dynamic image loading and routing.

## API for receiving pictures:
https://api.giphy.com/v1/gifs/random

## Basic:
The application will consist of 2 pages:
    • Home - displays an image and a button "Load new image", when you click on which, a new image is loaded. When the application is loaded for the first time - the image is loaded without pressing the button;
    • History - displays all uploaded pictures from the main page (picture, download time and picture name). On the History page, added pagination and the ability to delete a previously uploaded picture.

## Stack used:
    • [React];
    • [Redux] (https://redux.js.org/);
    • [React-router] (https://reacttraining.com/react-router/web);
    • [Redux-Saga] (https://redux-saga.js.org/)
    • [Redux-logger] (https://github.com/LogRocket/redux-logger)


## Goal:
Store the received data in Redux.
Redux-Saga is used for all asynchronous requests.
Error handling is provided.
Using the logging log using Redux-logger.
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).


## ## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
