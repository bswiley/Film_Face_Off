# Film Face Off

## Description

- This project was created to provide users with a way to discover new movies related to movies they already enjoy.
- Provides the user with 8 similar movies and allows them to vote on which movie they would prefer.
- The winning movie is saved to local storage, the title and trailer are displayed on the final page.
- Working on this project was something of a rush. At first it did not seem like it would be all that challenging, but as it grew in size and complexity and the skills needed to develop it increased in number we quickly saw how a project of this nature could become difficult to create. Over the course of the project we not only became very familiar with APIs, but also with Foundation, and collaborating through GitHub. While the final product needs some work yet, we are very happy with the progress we've made and the things we've learned along the way. All four of us are very excited to continue development over the coming weeks.

## Table of Contents (Optional)

- [Usage](#usage)
- [Credits](#credits)
- [License](#license)
- [Features](#features)

## Usage

To start the application, go to (https://francisjung.github.io/Film_Face_Off/).

![Screenshot 1 of App](https://raw.githubusercontent.com/Francisjung/JS_Quiz_FJ/main/assets/h4-screenshot.PNG)

When the page is opened the user is prompted by a form to enter information about movies they might enjoy or be curious about. At the moment the Genre drop down has been finished.

![Screenshot 2 of quiz](https://raw.githubusercontent.com/Francisjung/JS_Quiz_FJ/main/assets/h4%20screenshot%202.PNG)

The user will be prompted with two movie titles, descriptions, and posters. They may pick whichever movie seems more appealing, which sends it to the next of the bracket. 


When the user has chosen a winner for each matchup a winner is chosen. The winner is then displayed on the final page.



## Credits
This project was developed by Francis Jung (https://github.com/Francisjung), Brian Wiley (https://github.com/bswiley), John Quaranta (https://github.com/JohnnyQ40), and Colin Laukka (https://github.com/claukka).

This project was made using the TMDB API (https://developers.themoviedb.org/3), the YouTube API (https://developers.google.com/youtube/v3), and the Foundation Libraries (https://get.foundation/). 

Thanks to the hard work the contributors listed above this project was made possible. Through their continued effort we hope to make it even better in the future!

## License

MIT License

Copyright (c) [2023] [Francis Jung]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

## Features

- Allows the user to select preferences on movies they would like to see.
- Selects 8 movies from the TMDB database, displays them on screen sequentially.
- The user is able to select their favorite (or least favorite) movie from the two, the selected movie will go to the next round.
- After all 8 movies have been tested, the winner is selected. A trailer is displayed using the YouTube API.