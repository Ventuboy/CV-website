var express=require("express"),
	app=express();

app.set("view engine", "ejs");

app.use(express.static(__dirname + "/public"));

app.get("/", function(req,res){
	res.render("home");
})

app.get("/resume", function(req,res){
	res.render("resume");
})

app.get("/experiences", function(req,res){
	res.render("experiences");
})

app.get("/about", function(req,res){
	res.render("about");
})

app.listen(process.env.PORT, process.env.IP);

// app.listen(3000, function() { 
//   console.log('Server listening on port 3000'); 
// });