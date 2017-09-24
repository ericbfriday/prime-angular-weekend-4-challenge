console.log( 'js' );

// angular module
var myApp = angular.module( 'myApp', [] );

// Dataset
var photoGallery = [
{url: 'images/Wedding2.jpg',
title: 'Mawwiage!',
text: 'Mawwiage. Mawwiage is what bwings us togethew today. Mawwiage, that bwessed awwangement, that dweam within a dweam. And wove, twue wove, wiww fowwow you fowevah and evah… So tweasuwe youw wove.',
picVisible: true,
textVisible: false,
wuvs: 0
},

{url: 'images/bicycle1.jpg',
title: 'RAGBRAI!',
text: 'I love riding my bicycle, and where better to ride than across the glorious state of Iowa? I was representing team Reddit with pride.',
picVisible: true,
textVisible: false,
wuvs: 0
},

{url: 'images/debate1.jpg',
title: 'Obviously I was pretty cool back then...',
text: 'This is our high school debate team getting ready for a tournament. I loved debating, and I had some great classmates to do it with.',
picVisible: true,
textVisible: false,
wuvs: 0
},

{url: 'images/hiking2.jpg',
title: 'Hiking with Lucy',
text: 'I love hiking and I love my dog. She is pretty awesome. Here she is hiking on a chilly fall day. She even carries some of her own food!',
picVisible: true,
textVisible: false,
wuvs: 0
},

{url: 'images/rockclimbing2.jpg',
title: 'Rock Climbing',
text: 'I spent two glorious months camped out behind a pizza parlor in rural Kentucky so I could rock climb every single day. Here is an action shot.',
picVisible: true,
textVisible: false,
wuvs: 0
},

{url: 'images/hiking1.jpg',
title: 'My first 14er!',
text: 'As a last "hurrah!" before Prime, I went out as visited my friend in Colorado. We got to spend one epic morning climbing Mt. Sherman. It\'s over 14,000 feet in elevation, and it provided breathtaking views that justified the hike up.',
picVisible: true,
textVisible: false,
wuvs: 0
},
];

console.log('Logging photoGallery -> ', photoGallery);

// myApp controller
myApp.controller( 'PictureController', function( $http ) {
    console.log('NG working');
    var vm = this;
    vm.gallery = photoGallery;

    vm.toggle = function(pic) {
        console.log('Toggling! -> ' + pic.picVisible + ' ' + pic.textVisible);
        pic.picVisible = !pic.picVisible;
        pic.textVisible = !pic.textVisible;
    };


    // .then( function( response ){
    //    console.log('in then of showText of PC -> ', + response);
        
    // }); // end showText

    // vm.getPictures = function() {
    //     console.log('In getPictures');
    //             // $http GET
    //     $http({
    //         type: 'GET',
    //         url: '/pictures'
    //     }).then( function( response ){
    //         console.log('response from server in getPictures -> ', response);
    //         vm.pictures = response.data;
            
    //     });
    // }; // end vm.getPictures

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