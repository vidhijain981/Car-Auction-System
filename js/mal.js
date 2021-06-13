var nodemailer = require('nodemailer');
var http = require('http');
http.createServer(function (req, res) {
var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'vidhijain981@gmail.com',
    pass: 'rashiismad'
  }
});

var mailOptions = {
  from: 'vidhijain981@gmail.com',
  to: 'vidhijain981@gmail.com',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {console.log("Email send"+info)
  res.writeHead(301, { "Location": "http://localhost:3000"});
 res.end();
  }
});


}).listen(8082); 