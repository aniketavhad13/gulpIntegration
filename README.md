Installation

To run the downloaded file one has to put the following steps one by one:-
1. npm install 
2. npm install -g gulp 
3. gulp build 
4. gulp start 
and after going through the above commands one has to run in browser http://localhost:3000  


1)the gulpFile.js has the configuration of gulp.

2) the src folder has js folder where the main.js file is present there i have created a intercepter
  which has an authorisation header where a sample text is included in 
  which i have checked whether the request authorisation has same with response authorisation or not.
  For that i have printed a console where i have printed request authorisation
  and response authorisation as well. 
  For cross verification you have to open the network and find the request and
  response headers for main.js
  
3) For internationalizaton i have used date,currency and number,and for that 
 i have included india's locale.js file. 
 
4) For controller i have created HomeCtrl.js which is under src/js/contollers


