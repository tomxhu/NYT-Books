# New York Times Books

> It's hard to find a good book! Use our tool for searching the New York Times best seller. See the most popular books in each category, and sort by date. Select a book to read more about it's author and details, as well as see the ratings from other users. Create an account to submit ratings of your own. Visit the /ratings page and view the top rating books, as well and finding and following specific users who have creating ratings.

# Demo

[Play with the Demo](http://nyt-books.herokuapp.com/ ) or
[Watch the Video Walkthrough](https://www.youtube.com/watch?v=jF4i1K63SDQ )

# Features

> A high level overview of functionality.

Home Page - Starting point from which you are able to access all other pages. You may start a search here by first selecting the category of Best Sellers you are interested in. Then select the year and the month and wait for the loading gear to disappear for final results to appear. Title and description of book will appear on hover. Clicking a book result will display a modal containing more details about the book.

Signup - In the right side of the menu, you have the ability to sign up for a profile by entering your Name, Email and Password and selecting one of four famous authors as your profile picture. Once successfully signed-up, you will be automatically logged in and may access your profile from the top menu where it says "Hello _____".

Login/Logout - Being a logged in user allows you to be able to view your profile. It also allows you to rate books from the details modal of a book result. This rating, which is out of 5 stars, persists through to your profile. You may select Logout from the menu to end your session.

Profile - The profile page contains your personal information. You will find your name, profile picture and a list of all the ratings you have submitted. You have the ability to delete any ratings from this page and it will delete them from the entire app. 

Settings - By clicking on the settings page, represented by the gear icon in the menu, you will be brought to where you may change your password and manage your ratings. 

Ratings - This is a top rated list where you will find all the ratings submitted by users. Here, you may click on the User link to be navigated to the user who provided that rating for more information about them. 

### Routes

### API

# Running Locally

### Get Dependencies

Grab Node dependencies with `npm install` 
Grab Front End dependencies with `bower install`

### Build & Development

Run `mongod` to start your database

Run `grunt serve` to build the project and start a local server

Run `grunt buildcontrol:heroku` to deploy to heroku.

> Note: This requires permission to deploy to our Heroku staging server.

# Testing

Running `grunt test` will run the unit tests with karma.

## Authors

- [Pragathi Sanshi](https://github.com/pragsanshi)
- [Tommy Hu](https://github.com/tomxhu)
- [Alex Johnson](https://github.com/alexjohnson505)

## Special Thanks

> Tutorials, Resources, and Dependencies. 

- [Yeoman Scaffolding](http://yeoman.io/)
- [DaftMonk's Yeoman Boilerplate](https://github.com/DaftMonk/generator-angular-fullstack)
- [Node.js](http://nodejs.org/)
- [FontAwesome's Icon Library](http://fortawesome.github.io/Font-Awesome/)
- [Bootstrap](http://getbootstrap.com/)
- [Underscore.js](http://underscorejs.org/)

> Backend Resources

For more information about using Node.js on Heroku, see these Dev Center articles:

- [Getting Started with Node.js on Heroku](https://devcenter.heroku.com/articles/getting-started-with-nodejs)
- [Heroku Node.js Support](https://devcenter.heroku.com/articles/nodejs-support)
- [Node.js on Heroku](https://devcenter.heroku.com/categories/nodejs)
- [Best Practices for Node.js Development](https://devcenter.heroku.com/articles/node-best-practices)
