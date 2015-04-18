'use strict';

// Main Controller
angular.module('nytBooksApp')
.controller('MainCtrl', function ($scope, $http, $timeout, $location, BestSellers, Ratings, Auth) {

    $scope.error = null,
    $scope.loading = true;
    $scope.rating = 0;
    
    // Settings for API (Default)
    $scope.query = {
      category : "hardcover-fiction",
      year: "2015",
      month: "01",
    }

    // Available Categories
    $scope.categories = [];

    // List of Best Sellers
    $scope.books = [];

    // Used to display/not display features 
    $scope.isLoggedIn = Auth.isLoggedIn();

    // Lists favorites for a user
    $scope.favorites = $scope.isLoggedIn ? Auth.getFavorites() : []

    $scope.selected = -1;

    // Select a specific book
    $scope.select = function(index){
      $scope.isLoggedIn = Auth.isLoggedIn();

      $scope.rating = 0;

      $scope.selected = index;

      $scope.selectedBook = $scope.books[index]
      console.log($scope.selectedBook);

      $scope.loadRatings();
      
      $('#myModal').modal({show : true});
    }

    // Loads ratings for selected book
    $scope.loadRatings = function(){

        var query = { isbn13 : $scope.selectedBook.primary_isbn13};

        Ratings.search(query,function(ratings){
          $scope.ratings = ratings;
        })
    }

    // Load all books matching the search query
    $scope.loadBooks = function(query){

      $scope.error = null;

      $scope.loading = true;

      query['date'] = query.year + '-' + query.month + '-01';

      BestSellers.get(query, function(resp){
        $scope.books = resp;

        $timeout(function(){
          $scope.loading = false;  
        }, 200);

        if ($scope.books.length < 1){
          $scope.error = "No Result Found."
        }
        
      }, function(resp){
        $scope.error = resp;
        $scope.loading = false;
      })
    }

    // Give a rating to a book
    $scope.rate = function(rating){

      $scope.rating = rating;

      var userId = Auth.getCurrentUser()._id;

      if (!userId) {
        alert("login");
      } else {
        
        console.log(rating);

        Ratings.create({
          rating : rating,
          book : $scope.selectedBook.title,
          isbn13 : $scope.selectedBook.primary_isbn13,
          user : userId,

        }, function(){

          $scope.loadRatings();

        }, function(){})
      }
    }

    // links to profile of user who submitted rating
    $scope.goToProfile = function(userID){
      $('#myModal').modal({show : false});
      $location.path("/profile/" + userID)
    }

    BestSellers.categories(function(resp){
      $scope.categories = resp;
    },function(resp){
      $scope.error = resp;
    })

    $scope.loadBooks($scope.query);

})