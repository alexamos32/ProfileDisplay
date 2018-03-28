var Profile = require("./profile.js");

//Handling HTTP route GET / and POST /
function home(request, response) {
    //check for GET & if URL == "/" i.e checking for root page
    if (request.url === "/") {          
        //display the search form
        response.writeHead(200, {'Content-Type' : 'text/plain'});
        response.write("Header\n");
        response.write("Search\n");
        response.end('Footer\n');      
    }
    //if POST &  url =="/"
    //redirect to /:username
    
}

//Handling HTTP Route GET/:username
function user(request, response) {
    //Check url = /.... 
    var username = request.url.replace("/", "");
    if(username.length > 0) {
        response.writeHead(200, {'Content-Type': 'text/plain'});  
        response.write("Header\n");

        //get the Json from Treehouse website
        var studentProfile = new Profile(username);

        studentProfile.on("end", function (profileJson) {
            var values = {
                avatarURL: profileJSON.gravatar_url,
                username: profileJSON.profile_name,
                badges: profileJSON.length,
                javascriptPoints: profileJson.points.javaScript

            }
        })
    }
}
