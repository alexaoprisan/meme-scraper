## This creates a cli (Command Line Interface) application that scrapes the current version of this website:

memegen-link-examples-upleveled.netlify.app

It saves the first 10 images into a folder called "memes".

## TODO

- [x] Create a Node.js CLI application
  - [x] Add `.gitignore` file with the content from cheatsheet
  - [x] Add "memes" folder to `.gitignore`
- [x] Create a directory named "memes"
- [x] Research for libraries
  - [x] Avoid libraries that do multiple steps
- [x] Connect to the current version of the website https://memegen-link-examples-upleveled.netlify.app/
  - [x ] Avoid any caching?
- [ x] Download HTML string from the website and save in a variable
- [ x] Search inside HTML string for `<img src="..." />` and extract to array of URLs (strings)
  - [ x] Maybe inside of the `<section id="images">`?
- [ ] Extract first 10 URLs from array
- [ ] Loop over array of first 10 URLs and:
  - [ ] Download the image data (string)
  - [ ] Generate path in the "memes" folder (eg. `./memes/03.jpg`)
    - [ ] 1-10
    - [ ] double digits
    - [ ] `.jpg`
  - [ ] Create an empty file with the path
  - [ ] Put the image data into the file
- [ ] Test it multiple times
- [ ] Set up the test
