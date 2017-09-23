console.log( 'js' );

// angular module
var myApp = angular.module( 'myApp', [] );

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
    };
});