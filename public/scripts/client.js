console.log( 'js' );

// angular module
var myApp = angular.module( 'myApp', [] );

// myApp controller
myApp.controller( 'PictureController', function( $http ) {
    console.log('NG working');
    var vm = this;
    vm.pictures = [];
    // vm.gallery = photoGallery; <-- remnant of having logic on client side

    vm.getPictures = function() {
        console.log('In getPictures');
        $http({
            type: 'GET',
            url: '/router'
        }).then( function( response ){
            console.log('response from server in getPictures -> ', response);
            vm.pictures = response.data;
            console.log('vm.pictures -> ', vm.pictures);
        });
    }; // end vm.getPictures

    vm.toggle = function(pic) {
        console.log('Toggling! -> ' + pic.picVisible + ' ' + pic.textVisible);
        pic.picVisible = !pic.picVisible;
        pic.textVisible = !pic.textVisible;
    }; // end vm.toggle

    // vm.likes = function() {
    //     console.log('In vm.likes');

    //     $http({
    //         type: 'POST',
    //         url: '/likes'
    //     }).then( function( response) {
    //         console.log('response from server in likes -> ', response);
    //         vm.likes = response.data;
    //     });
    // }; // end vm.likes function
});