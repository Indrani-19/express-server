const express = require("express");
const app = express();

app.get("/", function(request , response) {
    response.send("hello");
});
app.get("/about", function(request, response) {
    response.send("My name is Indrani Inapakolla , Loves to code and Read Books.");
});

app.get("/contact", function(request, response) {
    response.send("Contact me at : indhrani1999@gmail.com");
});

app.get("/hobbies", function(request, response) {
    response.send("Painting ");
}); 
app.listen(80, function(){
    console.log("server started on port 80");
});

