# 0x0B. Implement an app with React



### Our movie app is a React-based web application that leverages API integration to provide users with a seamless movie browsing experience. Using React components such as Authentication, Dashboard, MovieCard, and more, the app allows users to explore and discover movies from a vast collection. With features like search, filters, and personalized sections for managing favorite movies and creating a watch later list, our app makes it easy for users to find and interact with their preferred films. By integrating an API, we ensure that the app stays up to date with the latest movie information and provides users with accurate and comprehensive movie data.

### The main components we created for the app include:

##### * Authentication: This component handles the authentication process, allowing users to sign in or sign up. It utilizes forms for user input and makes API requests to the server for authentication.

##### * Dashboard: The Dashboard component serves as the main interface of the app once the user is authenticated. It displays the user's username and provides navigation to different pages within the app.

##### * HomePage: This page displays a collection of movies based on various filters such as genre, release year, and sorting options. Users can scroll through the movie list, view movie details, and interact with the movies by adding them to favorites or watch later.

##### * Favorites: The Favorites page shows a list of movies that the user has marked as favorites. It retrieves the user's favorite movies from the server and displays them using the MovieCard component.

##### * WatchLater: The WatchLater page displays movies that the user has added to their watch later list. Similar to the Favorites page, it retrieves the watch later movies from the server and renders them using the MovieCard component.

##### * MovieCard: This component represents a single movie card. It displays information about the movie, such as title, synopsis, and genres. Users can interact with the movie card by favoriting it or adding it to their watch later list.

##### * Filter: The Filter component allows users to filter movies based on various criteria, including minimum and maximum release year, genre, and sorting options. It includes input fields and select options to customize the filter settings.

##### * SearchBar: This component provides a search functionality where users can enter a title and search for specific movies. It communicates with the server to retrieve matching movies and display the results.

#### These components work together to create a seamless and user-friendly movie browsing experience. Users can authenticate, explore movies, manage their favorite and watch later lists, and easily navigate between different sections of the app.

# Resources:

* [React Hooks](https://react.dev/reference/react)
* [React Font Awesome](https://fontawesome.com/v6/docs/web/use-with/react/)
* [React Router](https://reactrouter.com/en/main)
* [axios](https://github.com/axios/axios)
* [ES6](https://www.w3schools.com/js/js_es6.asp)
* [JWT Authentication](https://jwt.io/introduction)




# Learning Objectives

* Manage state and props in a react component
* Use React hooks to achieve certain behavior
* Implement a design with JSX and CSS (React)
* Implement a frontend app with React


# Requirements
* Class components are not allowed
* A README.md file, at the root of the folder of the project, is mandatory
* Try to use ES6 features

#### Setting up the backend

```
Installing docker
This link has all the steps needed for installing docker depending on your system.
Installing docker-compose
Official documentation for installing docker-compose
Make sure that docker is running before proceeding
Cloning and running the backend server

Clone this repository on your local machine
cd into the repository folder and run the following commands:
docker-compose build --no-cache --force-rm
docker-compose up
After running the above command you should get an output similar to this indicating that the backend and db are running. 
Notes

You’ll be adding the base url before each API route mentioned in the tasks: http://localhost:8000/

The repository contains detailed information about each route in the API

This project is 100% manualy reviewed, there is no specific name for the repository



```


### Made by [Jaafar Fares](https://github.com/jaafarfares) for [Holberton School](https://www.holbertonschool.com/)
