var Profile = require("./profile.js");
var render = require("./render.js");

var commonHeader = {'Content-Type': 'text/html'};

//Handling HTTP route GET / and POST /
function home(request, response) {
    //check for GET & if URL == "/" i.e checking for root page
    if (request.url === "/") {          
        //display the search form
        response.writeHead(200, commonHeader);
        render.view("header", {}, response);
        render.view("search", {}, response);
        render.view("footer", {}, response);     
        response.end(); 
    }
    //if POST &  url =="/"
    //redirect to /:username
    
}

//Handling HTTP Route GET/:username
function user(request, response) {
    //Check url = /.... 
    var username = request.url.replace("/", "");
    if(username.length > 0) {
        response.writeHead(200, commonHeader);  
        render.view("header", {}, response);

        //get the Json from Treehouse website
        var studentProfile = new Profile(username);

        studentProfile.on("end", function (profileJSON) {
            var values = {
                avatarURL: profileJSON.gravatar_url,
                username: profileJSON.profile_name,
                badges: profileJSON.badges.length,
                javascriptPoints: profileJSON.points.JavaScript

            }
            render.view("profile", values, response);
            render.view("footer", {}, response);
            response.end();


        });
        // If an error occurs
        studentProfile.on("error", function(error){
            //show the error
            render.view("error", {errorMessage: error.message}, response);
            render.view("search", {}, response);
            render.view("footer", {}, response);
            response.end();
        

        

        });

    }
}


module.exports.home = home;
module.exports.user = user;

