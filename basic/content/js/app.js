var Finder;
(function (Finder) {
    var Register = (function () {
        function Register() {

        }
        return Register;
    }());
    Register.FinderLocator = angular.module('Finder', []);

    Finder.FinderLocator = Register;
 
    Register.FinderLocator.controller("finderController", function () { return new Finder.FinderController(); });


})(Finder || (Finder = {}));


var clientId = 'YOUR CLIENT ID';
var apiKey = 'YOUR API KEY';
var scopes = 'https://www.googleapis.com/auth/webmasters';

function auth() {
    console.log('hi');
    // Set the API key.
    gapi.client.setApiKey(apiKey);

    // Start the auth process using our client ID & the required scopes.
    gapi.auth2.init({
        client_id: clientId,
        scope: scopes
    })
    .then(function () {
        // We're authenticated, let's go...
        // Load the webmasters API, then query the API
        gapi.client.load('webmasters', 'v3')
          .then(retrieveSearchesByQuery);
    });
}

// Load the API client and auth library
gapi.load('client:auth2', auth);