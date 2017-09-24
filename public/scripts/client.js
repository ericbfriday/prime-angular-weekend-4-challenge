console.log( 'js' );

// angular module
var myApp = angular.module( 'myApp', [] );

// myApp controller
myApp.controller( 'PictureController', function( $http ) {
    console.log('NG working');
    var vm = this;

    vm.pictures = [];

    vm.getPictures = function() {
        console.log('In getPictures');
                // $http GET
        $http({
            type: 'GET',
            url: '/pictures'
        }).then( function( response ){
            console.log('response from server in getPictures -> ', response);
            vm.pictures = response.data;
            
        });
    }; // end vm.getPictures

    vm.likes = function() {
        console.log('In vm.likes');

        $http({
            type: 'POST',
            url: '/likes'
        }).then( function( response) {
            console.log('response from server in likes -> ', response);
            vm.likes = response.data;
        });
    }; // end vm.likes function
});