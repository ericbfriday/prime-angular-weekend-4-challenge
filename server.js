// requires
var express = require( 'express' );
var bodyParser = require( 'body-parser' );
var app = express();
var index  = require( './routes/index' );

app.use( express.static( 'public' ) );
app.use( bodyParser.json() );
app.use( '/', index );

// globals
var port = 5318;

// spin up server
app.listen( port, function(){
    console.log( 'server up on:', port );
}); // end spin up