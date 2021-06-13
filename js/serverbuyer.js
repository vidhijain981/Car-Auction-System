var http = require('http');
var formidable = require('formidable');
var fs = require('fs');
var url=require('url');
var NodeSession = require('node-session');
 session = new NodeSession({secret: 'Q3UBzdH9GEfiRCTKbi5MTPyChpzXLsTD'});
http.createServer(function (req, res) {
    if (req.url == '/fileupload') {
    var form = new formidable.IncomingForm();
    form.parse(req, function (err, fields, files) {
     
      var oldpath1 = files.doctoupload.path;


var newpath1=fields.docpath;
       
     

      fs.rename(oldpath1, newpath1, function (err) {
        if (err) throw err;
        else
          res.writeHead(301, { "Location": "http://localhost:3000/bid.html"});
        
return res.end();

      });
 });
  } else {
    var querstring=url.parse(req.url,true).query;
session.startSession(req, res, function(){
  
 

  if (querstring.path) {
    console.log(querstring.path);
  console.log("querstring.path");
    req.session.put('key',querstring.path);
}

  });

    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write('<style>');
    res.write('#container1 {display: grid;height: 100%;position: absolute;left: 0;top: 0;z-index: -1;transition: all .6s;opacity: .6;filter: blur(.5px);}   ');
  res.write('.cl1 {width: 100%;height: 100%;margin: auto;}');
  res.write('input[type=file] {width:20%}');
    res.write('</style>');
     res.write('<body>');

     res.write('<div id="container1" style="margin:center">');
     res.write('<img class="cl1" src="https://r.hswstatic.com/w_907/gif/what-is-blockchain-technology.jpg" style="width:1350px">');
       res.write('</div>');
    res.write('<form action="fileupload" method="post" enctype="multipart/form-data">');
    res.write('<b>Choose RFP</b><input type="file" name="doctoupload"  accept="application/pdf"><br>');
    // res.write('');
      res.write('<input type="hidden" name="docpath" value="'+querstring.docpath+'"><br>');
    
    res.write('<input type="submit">');
    res.write('</form>');
    res.write('</body>');
    return res.end();
  }
}).listen(8089); 