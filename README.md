# New York Times Books

It's hard to find a good book! NYT-Books will help you find the most popular books in a specific category in a specific point in time. You can get a quick glance at how users have rated a certain book and even offer your own rating. 

# Demo

App can be viewed online at: http://nyt-books.herokuapp.com/ 

Video demo available at: https://www.youtube.com/watch?v=jF4i1K63SDQ 

# Development

`npm install` and `bower install` if the grunt task doesn't do it for you automatically

## Build & development

Run `mongod` to start your database

Run `grunt` for building and `grunt serve` for preview.

Run `grunt buildcontrol:heroku` to deploy to heroku
(not sure if this will work, if you didn't deploy the initialize app)

## Testing

Running `grunt test` will run the unit tests with karma.

## Features

Home Page - Starting point from which you are able to access all other pages. You may start a search here by first selecting the category of Best Sellers you are interested in. Then select the year and the month and wait for the loading gear to disappear for final results to appear. Title and description of book will appear on hover. Clicking a book result will display a modal containing more details about the book.

Signup - In the right side of the menu, you have the ability to sign up for a profile by entering your Name, Email and Password and selecting one of four famous authors as your profile picture. Once successfully signed-up, you will be automatically logged in and may access your profile from the top menu where it says "Hello _____".

Login/Logout - Being a logged in user allows you to be able to view your profile. It also allows you to rate books from the details modal of a book result. This rating, which is out of 5 stars, persists through to your profile. You may select Logout from the menu to end your session.

Profile - The profile page contains your personal information. You will find your name, profile picture and a list of all the ratings you have submitted. You have the ability to delete any ratings from this page and it will delete them from the entire app. 

Settings - By clicking on the settings page, represented by the gear icon in the menu, you will be brought to where you may change your password and manage your ratings. 

Ratings - This is a top rated list where you will find all the ratings submitted by users. Here, you may click on the User link to be navigated to the user who provided that rating for more information about them. 

