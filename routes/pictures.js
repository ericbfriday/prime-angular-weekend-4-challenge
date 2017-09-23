var express = require( 'express' );
var router = express.Router();

// var pictures = [];

router.get( '/', function( req, res ){
    console.log( '/pictures get hit' );
    res.send( pictures );
}); // end base url

router.post( '/', function( req, res ){
    console.log( 'in /pictures post:', req.body );
    res.sendStatus( 200 );
}); //end post router

module.exports = router;