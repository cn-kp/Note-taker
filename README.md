# Note-taker

## Deployment
* [GitHub Repository](https://github.com/cn-kp/Note-taker)

## Description

This program is created for user's to write and store notes in a database. When a new note is made and the save icon is clicked, the server will write the saved note into a JSON file, containing all exisiting notes. When the appropriate url is passsed, all the notes will be displayed. 

When a get request is made to http://localhost:3001/api/notes, it will display a JSON array containing all the notes, each with a unique identifier.

When a delete request is made to http://localhost:3001/api/notes/:id, it will delete the corresponding note from the database

## Third Party Libraries

Express.js
JavaScript
FS module

## Installation

To install this program all you need is a text editior. I would recommend Visual Studio Code. then download or clone the repository of the program

## Demonstration


https://user-images.githubusercontent.com/63453130/154885247-337852a4-63cc-4bbc-a261-74c1630af531.mp4



https://user-images.githubusercontent.com/63453130/154885268-3d779feb-8b6d-4965-a492-ff653bcf2cd4.mp4




## Credits

This application was created by kevin with the help of TA's
