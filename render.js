var fs = require("fs");


//Reads from the template file, inserts values, and prints out the response
function view(templateName, values, response) {
    var fileContents = fs.readFileSync('./views/' + templateName + '.html');
    
    fileContents = insertValues(values, fileContents);
    response.write(fileContents);  
}

function insertValues(values, content) {
    for (const key in values) {
        
    }
}


module.exports.view = view;
