## Marvel Tracker
Marvel Tracker is a Netflix clone which allows a user to sign-up, sign-in and view current Marvel films. When a user clicks on a movie, they are redirected to a "Learn More" popup, which includes the movie poster, a synopsis of the film, release date and movie rating. 

This project was a week long paired project and created by David Cisneros and Joshua Lavarine.

![giphy](https://user-images.githubusercontent.com/40274984/55083557-59ce6f00-5069-11e9-9dec-3bca035b4a62.gif)

## Set-up when cloning this repository
1) mkdir Movie-Tracker-Main
### Installing the backend:
2) In your browser, navigate to https://github.com/turingschool-examples/movie-tracker
3) Follow repository instructions to download and install the backend
4) Register for The Movie DB API Key (https://www.themoviedb.org/documentation/api)
### Installing the frontend:
4) cd Movie-Tracker-Main
5) git clone git@github.com:DevelopingDavid/Movie-tracker-frontend.git
6) cd Movie-tracker-frontend
7) npm install
8) npm start
### Adding your The Movie DB API Key
9) Navigate in your text editor to src/containers/App/App.js
10) Add your api key to the empty string on line 14 

## Tech / Frameworks Used
- ReactJS
- Redux
- React Router
- SASS
- JSX
- fetch API
- localStorage
- Testing with Enzyme & Jest

## What we learned
We learned how to effectively implement Redux and React-Router into our ReactJS application. Understanding how all parts of Redux (including Actions, Action Creators, Reducers, Dispatch, and State) tie into the Redux store. By successfully implementing Redux, we were able to remove the necessity for "prop drilling." Implementing React-Router enabled us to turn our single page React app into a more robust multi-page application. 

## Challenges faced
Testing the front-end is notoriously difficult and this project did not prove the exception. Testing asyncronous code adds another layer of difficulty to the testing suite. 

Another challenge faced was understanding the process of Redux and how all the pieces communicate with each other. 


## "Wins"
We are both very pleased with overall feel of the application. The Marvel films are bold and our design equally catches the eye. And although this is previously mentioned in the "What we learned" section, understanding Redux more completely and implementing React-Router was a big win and learning goal for this project. 

## Future Implementations
In future, I would like to expand my current dataset. Currently there are five "pioneers" with five questions and answers relating to each. I would like to have more questions and more "pioneers," which would make the experience more enriching for users.

I would also like to create a button that would allow users to reset the question bank without having to complete the entire quiz.

Additionally, I would like to add a total score, which would add up all of the individual round scores. 

## Tools Used
[VSCode](https://code.visualstudio.com/)  

## Credits

https://github.com/turingschool-examples/movie-tracker
