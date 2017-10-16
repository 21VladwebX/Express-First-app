var express = require('express'),
    bodyParser = require('body-parser'),
    app = express();

var post = [
  {
    title: "My first post.",
    content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique quod temporibus modi, necessitatibus porro eligendi autem sint obcaecati nulla. Unde recusandae, aliquam quia quasi, repellat quibusdam earum odio libero veniam!"
  },
  {
    title: "My 2 post.",
    content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique quod temporibus modi, necessitatibus porro eligendi autem sint obcaecati nulla. Unde recusandae, aliquam quia quasi, repellat quibusdam earum odio libero veniam!"
  },
  {
    title: "My 3 post.",
    content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique quod temporibus modi, necessitatibus porro eligendi autem sint obcaecati nulla. Unde recusandae, aliquam quia quasi, repellat quibusdam earum odio libero veniam!"
  }


]


app.use(bodyParser.urlencoded( { extend: true} ) );
app.use(bodyParser.json() );



app.get("/",function(req,res){
  res.render("index.ejs",{ post: post } );
} );

app.get("/post/:id", function (req, res){
  var id = req.params.id;
  res.render( "post.ejs", {post: post[ id -1 ] })
} );

app.get("/write", function(req,res) {
  res.render( "write.ejs" )

} );
app.post("/write", function(req,res){
  var title = req.body.title, //отбирает по имени тега name= title
      content = req.body.content;


  post.push( {
    title: title,
    content: content
  })

  res.redirect("/");
} );
app.listen(3000,function(){
  console.log("work on port 3000");
} );
