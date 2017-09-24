var express = require( 'express' );
var router = express.Router();

// var likes = [];

router.get( '/', function( req, res ){
    console.log( '/likes get hit' );
    res.send( likes );
}); // end base url

router.post( '/', function( req, res ){
    console.log( 'in /likes post:', req.body );
    res.sendStatus( 200 );
}); //end post router

module.exports = router;