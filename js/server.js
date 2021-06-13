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
      var oldpath = files.filetoupload.path;
      var oldpath1 = files.doctoupload.path;

var newpath1=fields.docpath;
       //var newpath="D:/auct1/auc
        var newpath =fields.path;
       //var newpath="D:/auct1/auct/pro1.png";
console.log(newpath);     

      fs.rename(oldpath, newpath, function (err) {
        if (err) throw err;
        
        else
          fs.rename(oldpath1, newpath1, function (err) {
            if (err) throw err;
            else
          res.writeHead(301, { "Location": "http://localhost:3000"});
        
return res.end();
});
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
    // res.write('<link rel="stylesheet" type="text/css" href="css/file.css" >');
    res.write('<style>');
    res.write('#container1 {display: grid;height: 100%;position: absolute;left: 0;top: 0;z-index: -1;transition: all .6s;opacity: .6;filter: blur(.5px);}   ');
  res.write('.cl1 {width: 100%;height: 100%;margin: auto;}');
  res.write('input[type=file] {width:20%}');
    res.write('</style>'); 

  // res.write('<body background="https://images.pexels.com/photos/1509428/pexels-photo-1509428.jpeg"  style="background-size: 100% 100% ; -webkit-filter: blur(5px);">');
     res.write('<body>');
    // res.write('<div class="container" style="margin:center">');
     res.write('<div id="container1" style="margin:center">');
     res.write('<img class="cl1" src="https://r.hswstatic.com/w_907/gif/what-is-blockchain-technology.jpg" style="width:1350px">');
       res.write('</div>');
       // res.write('<div class="container2" style="margin:center">');
    res.write('<form class="form"  action="fileupload" method="post" enctype="multipart/form-data" style="padding-top: 210px;padding-left: 410px;">');
    // res.write('<div class="file-upload-wrapper" data-text="Select your file!">');
    res.write('<b>Choose Image File </b><input type="file"  name="filetoupload"   type="file" class="file-upload-field" value="" size="60"><br>');
     // res.write('</div>');
     // res.write('</div>');
     res.write('<input type="hidden" style="width:20%" name="path" value="'+querstring.path+'"><br>');
     res.write('<b>Choose RFQ </b><input type="file" name="doctoupload"><br>');
      res.write('<input type="hidden" name="docpath" value="'+querstring.docpath+'"><br>');
    
    res.write('<input type="submit" style="background-color: #ffc40c;">');
     res.write('</div>');
    res.write('</form>');
    res.write('</body>');
    
     // res.write('<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js" ></script><script src="js/upload1.js"></script>')
     // res.write('');
    return res.end();
  }
}).listen(8086); 