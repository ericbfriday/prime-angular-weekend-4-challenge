var express = require( 'express' );
var router = express.Router();

var photoGallery = [
    {url: 'images/Wedding2.jpg',
    title: 'Mawwiage!',
    text: 'Mawwiage. Mawwiage is what bwings us togethew today. Mawwiage, that bwessed awwangement, that dweam within a dweam. And wove, twue wove, wiww fowwow you fowevah and evah… So tweasuwe youw wove.',
    picVisible: true,
    textVisible: false,
    wuvs: 0
    },
    
    {url: 'images/bicycle1.JPG',
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
    
    {url: 'images/hiking2.JPG',
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
    text: 'As a last "hurrah!" before Prime, I went out and visited my friend in Colorado. We got to spend one epic morning climbing Mt. Sherman. It\'s over 14,000 feet in elevation, and it provided breathtaking views that justified the hike up.',
    picVisible: true,
    textVisible: false,
    wuvs: 0
    },
    ];

// console.log('Logging photoGallery -> ', photoGallery);

router.get( '/', function( req, res ){
    console.log( '/router get hit' );
    res.send( photoGallery );
}); // end base url

// router.post( '/', function( req, res ){
//     console.log( 'in /router post:', req.body );
//     res.sendStatus( 200 );
// }); //end post router

module.exports = router;