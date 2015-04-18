# New York Times Bestseller List

> It's hard to find a good book! Use our tool for searching the New York Times best seller. See the most popular books in each category, and sort by date. Select a book to read more about it's author and details. See ratings that other users have submitted. Create an account to submit ratings of your own. Visit the 'ratings' page and view the top rating books, as well and finding and following specific users. This project serves as a demonstration of rapid app development using the MEAN Stack. Developed for the final project of CS4550 Web Development.

## Demo

[Play with the Demo](http://nyt-books.herokuapp.com/ ) or
[Watch the Video Walkthrough](https://www.youtube.com/watch?v=jF4i1K63SDQ )

## Features

> A high level overview of functionality.

**Home Page** - The starting point of our app is a list of available top selling books. You may start a search here by first *selecting the category of Best Sellers* you are interested in. Then *select the year and the month* and wait for the loading gear to disappear for final results to appear. Title and description of book will appear on hover. Clicking a book result will display a modal containing more *details about the book*. This modal contains a list of ratings that other users have submitted for that book. Selecting a user brings you to their profile page. In addition, logged in users may *submit their own 1-5 star ratings* for the given book.

**Signup** - In the right side of the menu, you have the ability to sign up for a profile by entering your Name, Email and Password and selecting one of four famous authors as your *profile picture*. Once successfully signed-up, you will be automatically logged in and may access your profile from the top menu where it says "Hello [name]".

**Login/Logout** - After being Authenticated, users may view their profile. You may select Logout from the menu to end your session.

**Profile** - The profile page shows the details for a given user. You will find details such as name, and profile image. In addition, this page shows a *list of ratings that the given user has created for books*. If you are viewing your own profile page, then you have the ability to delete any ratings that you have previously submitted. On any user but yourself, you may select to 'follow' a user, upon where that user will be *added to a list of users that you are currently following*.

**Settings** - By clicking on the settings page, represented by the gear icon in the menu, you will be brought to where you may change your password. On this page, you may *manage your ratings* that you have previously created. Deleting one of your ratings removes it from the database. In addition, the settings page shows a *list of users you have chosen to follow*. You may also choose to remove users from your following list.

**Ratings** - Available from the top navigation menu, the 'ratings' page shows a list of ratings created by users. *Browse the ratings, and find the most popular books, and the most active users*.  Here, you may click on the User link to be navigated to the user who provided that rating for more information about them. 

# Development

### Get Dependencies

Grab Node dependencies with `npm install` 

Grab Front End dependencies with `bower install`

### Build & Development

> Note: Deploying requires permission to deploy to our Heroku staging server.

Run `mongod` to start your database

Run `grunt serve` to build the project and start a local server

Run `grunt buildcontrol:heroku` to deploy to heroku.

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

- [Getting Started with Node.js on Heroku](https://devcenter.heroku.com/articles/getting-started-with-nodejs)
- [Heroku Node.js Support](https://devcenter.heroku.com/articles/nodejs-support)
- [Node.js on Heroku](https://devcenter.heroku.com/categories/nodejs)
- [Best Practices for Node.js Development](https://devcenter.heroku.com/articles/node-best-practices)
