pwa_73x7_3d170r
## Table of Contents
## 1. Introduction
## 2. User Story
## 3. Acceptance Criteria
## 4. Installation
## 5. Usage
## 6. Contributing
## 7. License

## 1. Introduction
pwa_73x7_3d170r is a progressive web application (PWA) that functions as a text editor. It allows developers to create notes or code snippets with or without an internet connection and reliably retrieve them for later use. The application features a client-server folder structure, uses IndexedDB for local storage, and can be installed on the desktop for easy access.

## 2. User Story
AS A developer,
I WANT to create notes or code snippets with or without an internet connection,
SO THAT I can reliably retrieve them for later use.

## 3. Acceptance Criteria
GIVEN a text editor web application,
WHEN I open my application in my editor,
THEN I should see a client-server folder structure.
WHEN I run `npm run start` from the root directory,
THEN my application should start up the backend and serve the client.
WHEN I run the text editor application from my terminal,
THEN my JavaScript files have been bundled using webpack.
WHEN I run my webpack plugins,
THEN I have a generated HTML file, service worker, and a manifest file.
WHEN I use next-gen JavaScript in my application,
THEN the text editor still functions in the browser without errors.
WHEN I open the text editor,
THEN IndexedDB has immediately created a database storage.
WHEN I enter content and subsequently click off of the DOM window,
THEN the content in the text editor has been saved with IndexedDB.
WHEN I reopen the text editor after closing it,
THEN the content in the text editor has been retrieved from our IndexedDB.
WHEN I click on the Install button,
THEN my web application downloads as an icon on my desktop.
WHEN I load my web application,
THEN I should have a registered service worker using Workbox.
WHEN I register a service worker,
THEN my static assets are pre-cached upon loading along with subsequent pages and static assets.
WHEN I deploy to Render,
THEN I should have proper build scripts for a webpack application.


## 4. Installation
To set up the development environment for `pwa_73x7_3d170r`, follow these steps:

- Clone the repository to your local machine.
- Navigate to the root directory of the project in your terminal.
- Run `npm install` to install all dependencies for both client and server.
- Use `npm run start` to start the server and serve the client.
- File structure:
.
├── client
│   ├── node_modules
│   ├── src
│   │   ├── css
│   │   │   └── style.css
│   │   ├── images
│   │   │   ├── logo.png
│   │   │   ├── pwa1(96).png
│   │   │   └── pwa2(512).png
│   │   └── js
│   │       ├── database.js
│   │       ├── editor.js
│   │       ├── header.js
│   │       ├── index.js
│   │       └── install.js
│   ├── .eslintrc
│   ├── .gitignore
│   ├── favicon.ico
│   ├── index.html
│   ├── manifest.json
│   ├── package-lock.json
│   ├── package.json
│   ├── src-sw.js
│   └── webpack.config.js
├── server
│   ├── node_modules
│   ├── routes
│   │   └── htmlRoutes.js
│   ├── package-lock.json
│   ├── package.json
│   └── server.js
├── .gitignore
├── .npmrc
├── package-lock.json
├── package.json
└── README.md


## 5. Usage
After installation, the application can be accessed at `localhost:3000` by default. The app allows for creating and saving text snippets or code, which are


