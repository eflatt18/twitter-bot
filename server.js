const express = require( 'express' ),
      app = express(),   
      Twit = require( 'twit' ),
      config = {
        twitter: {
          consumer_key: process.env.TWITTER_CONSUMER_KEY,
          consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
          access_token: process.env.TWITTER_ACCESS_TOKEN,
          access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET
        }
      },
      T = new Twit( config.twitter );

app.use( express.static( 'public' ) );



app.all( `/${process.env.BOT_ENDPOINT}`, function( req, res ){

  
  
  T.post( 'statuses/update', { status: 'You are stuck in the 20th century if you are still tweeting from an iphone' }, function( err, data, response ) {
    if ( err ){
      console.log( 'error!', err );
      res.sendStatus( 500 );
    }
    else{
      res.sendStatus( 200 );
    }
  } );
} );

let listener = app.listen( process.env.PORT, function(){
  console.log( 'Your bot is running on port ' + listener.address().port );
} );
