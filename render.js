var fs = require("fs");

//replaces the specified keys in the HTML files with the values given
function insertValues(values, content) {
    for (var key in values) {
        content =  content.replace("{{" + key + "}}", values [key]);
    }
    return content
}

//Reads from the template file, inserts values, and prints out the response
function view(templateName, values, response) {
    var fileContents = fs.readFileSync('./views/' + templateName + '.html', {encoding: "utf8"});
    
    fileContents = insertValues(values, fileContents);
    response.write(fileContents);  
}



module.exports.view = view;
