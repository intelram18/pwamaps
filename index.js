var _beforeInstallPrompt;

if ( "onbeforeinstallprompt" in window ) {

	window.addEventListener( "beforeinstallprompt", beforeInstallPrompt );

}

function beforeInstallPrompt( evt ) {

	evt.preventDefault();

	_beforeInstallPrompt = evt;

}

return _beforeInstallPrompt.prompt()
   .then( function ( evt ) {

      // Wait for the user to respond to the prompt
      return _beforeInstallPrompt.userChoice;

   } )
   .then( function ( choiceResult ) {

      //do stuff here
   } )
   .catch( function ( err ) {

      if ( err.message.indexOf( "user gesture" ) > -1 ) {
         //recycle, but make sure there is a user gesture involved
      } else if ( err.message.indexOf( "The app is already installed" ) > -1 ) {
         //the app is installed, no need to prompt, but you may need to log or update state values
      } else {
         return err;
      }

   } );