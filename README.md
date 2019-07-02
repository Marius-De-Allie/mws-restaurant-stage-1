# Restaurant Reviews web application/site

## Table of Contents

- [Introduction](#introduction)
- [Instructions](#instructions)
- [Contributing](#contributing)

## Introduction
  This application is a fully responsive and accessible **Restaurant reviews website** that uses service worker(s) to cache site resources so that it is available when offline.
  The application's purpose is to allow the end user to read user reviews on restaurants within a certain geographic area on any device ranging from desktop computer to a mobile phone, the application/site is also designed to be fully accessible, i.e. allow users that may be experiencing physical or mental impairments (temporary or permanent) to make full use of the site and not be limited in how they use the site and what they can do with the site, by doing this it also improves overall site usability/accessibility in general for non impaired users.
  Accessibility is achieved through the use of HTML semantic elements on all pages of the site/app, as well as ARIA attributes where native semantic elements may fall short of providing fully accessible content.
  The application/site is also setup to work well in situations where network connectivity may not be the most robust and reliable, by using an offline first model for loading site/app resources, whereby service worker(s) are employed to cache site resources for use in this scenarios where connectivity maybe limited or non-existent.
  The app provides an interface for the user to view a list of several restaurants within a certain geographic area, the user can then view more details such as reviews, address, etc, on any of the listed restaurants.
  - The application/Website consists of two pages:
    1. a Homepage (index.html), that has an overview of all the restaurants in the area with general info related to each restaurant, a map displaying the location of all restaurants in the list displayed as markers on the map.
    2. a restaurant info page (restaurant.html), that provides more details on the selected restaurant. Info provided is the detailed address of the restaurant, location of the restaurant on the map, several user reviews on the specific restaurant.

## Instructions

### How to run/use the Restaurant reviews application/website
- Application may be downloaded from [my GitHub repository](https://github.com/Marius-De-Allie/mws-restaurant-stage-1)
- Once downloaded, ensure compressed file's contents are extracted to one folder.

- The application consists of the following files:
  - index.html - the main/home page of the restaurant reviews site contains the core html of the homepage, providing baseline page content and structure, i.e. head, body, header, main, section, article, and footer elements are all included.
  - restaurant.html - the restaurant details(secondary) page of the restaurant reviews site/app. Contains the core html of the restaurant details/info page, providing baseline page content and structure, i.e. head, body, header, main, section, footer and script elements are all included.
  - js/main.js - JavaScript file used to dynamically insert the restaurants general info (names, addresses, etc) and map element into the DOM of the index.html(home) page.
  - js/restaurant_info.js - JavaScript file used to dynamically insert the restaurants detail info (names, addresses, reviews) and detailed map element into the DOM of the restaurant.html(secondary) page.
  - js/DBHelper.js - file that acts as the 'middle man' or controller in connecting the data/model found in the restaurant.json file and what is outputted to the user via the DOM(view), through DOM manipulation and interactive elements in the main.js and restaurant_info.js files
  - css/styles.css - CSS style sheet used to style all elements of the application/site, i.e. both pages (home and restaurant details), also site's responsive design is implemented in this file, including media queries and breakpoints for both pages of site/application.
  - images - directory contains all source image files used for the restaurants depicted on the site/application.
  - data/restaurant.json - contains data objects that are supplied to the site, such as restaurant names, addresses, cuisine type, reviews, etc, for each restaurant.
  - sw.js - service worker file, used for the implementation of site/application resource caching, so that site content is available even when network connectivity is not reliable or unavailable.
  All images, both html pages, json file, all 3 JavaScript files are cached.
- In order to launch the restaurant reviews app/site you need to setup a simple HTTP server to serve up the site files on your local computer. You can get the server up and running using python and some simple tools built into python. Please follow the steps below to configure the http server.
  1. In a terminal, check the version of Python you have: `python -V`. If you have Python 2.x, spin up the server with `python -m SimpleHTTPServer 8000` (or some other port, if port 8000 is already in use.) For Python 3.x, you can use `python3 -m http.server 8000`. If you don't have Python installed, navigate to Python's [website](https://www.python.org/) to download and install the software.
  * Note -  For Windows systems, Python 3.x is installed as `python` by default. To start a Python 3.x server, you can simply enter `python -m http.server 8000`.
  2. With your server running, visit the site: `http://localhost:8000` via your web browser to view the restaurant reviews site (_the homepage/index.html will be loaded first_)
#### Navigating restaurant reviews application/website.
- Once on home page of restaurant reviews site/app, you may navigate list of restaurants via markers on map or via restaurant list located on lower half of the page.
- Restaurant list results may be filtered by neighborhood where restaurant is located or by type of cuisine served by restaurant via two drop down menus under map.
- Access restaurant details/more info page via the view details button listed under each restaurant listing, this will redirect to the restaurant details page (secondary page) which contains restaurant map view, address and name details and reviews for that restaurant.
- You may navigate back to the home page from the restaurant details page by clicking on the home link located in the breadcrumb menu at the top left hand portion of the restaurant details page.

## Contributing

All the starter code for the restaurant reviews app was provided by [Udacity](https://github.com/udacity/mws-restaurant-stage-1).
