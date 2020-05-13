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

  
  //make app name whatever you want your twitter source label to be, 32 character max
  T.post( 'statuses/update', { status: 'Phone and computer broke...' }, function( err, data, response ) {
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
