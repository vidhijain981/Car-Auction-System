logls = {
    web3:null,
    i:0,
    ref:0,
    privateKey:null,
  web3Provider: null,
  contracts: {},
  account: '0x0',
  hasVoted: false,
  flag:0,
    init: function() {
    
    return logls.initWeb3();
  },

  initWeb3: function() {
    console.log("2");
      ethereum.enable();
      //from google
     web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:7545'));
      console.log(web3);
      logls.web3Provider = new Web3.providers.HttpProvider('http://localhost:7545');
      //logls.web3 = new Web3(logls.web3Provider);
      //web3.eth.defaultAccount=web3.eth.accounts[0];
      //console.log(web3.eth.defaultAccount);
     
    return logls.initContract();
  },

  initContract: function() {
    console.log("3");
    $.getJSON("Auction.json", function(auction) {
            
      // Instantiate a new truffle contract from the artifact
      logls.contracts.Auction = TruffleContract(auction);
      // Connect provider to interact with contract
      logls.contracts.Auction.setProvider(logls.web3Provider);

      return logls.render();
    });
  },

  render: function() {
  } ,
 
login: function() {
if(window.event.target.value=="login")
{
                      var string1 = removeSpaces(document.getElementById('mainCaptcha').value);
                      var string2 = removeSpaces(document.getElementById('txtInput').value);
                      console.log(string1);
                      console.log(string2);
                      if (string1 == string2){
                        //// window.location.assign("index.html");
                      }
                      else{        
                        alert("enter Captcha correctly");
                      //location.reload(true);
                      window.location.assign("indexs.html");
                      }
                  
                  function removeSpaces(string){
                    return string.split(' ').join('');
                  } 
                  console.log("1");
    var username =document.getElementById('user').value;
    var password =document.getElementById('pass').value;
    //var passwordHash = require('password-hash');
console.log("2");
    //password= passwordHash.generate(password.value);
    //fetch the data from contract
    
    console.log("3");
var flag2=0;
    logls.contracts.Auction.deployed().then(function(instance) {
      auctionInstance = instance;
      console.log("4");
      return auctionInstance.SellerCount();
    }).then(function(SellerCount) {
      console.log("5");
      for (var i = 1; i <= SellerCount; i++) {
        console.log("6");
        auctionInstance.sellers(i).then(function(sellers) {
      logls.ref++;
          var name = sellers[1];
      var id=sellers[0];
          var pass = sellers[2];
           var hash=sellers[5];
          var salt=sellers[4];
           console.log(salt);
          console.log(pass);
          console.log(password);
            var crypto = require('crypto');
var genRandomString = function(length){
    return crypto.randomBytes(Math.ceil(length/2))
            .toString('hex') /** convert to hexadecimal format */
            .slice(0,length);   /** return required number of characters */
};
 
var sha512 = function(password, salt){
    var hash = crypto.createHmac('sha512', salt); /** Hashing algorithm sha512 */
    hash.update(password);
    var value = hash.digest('hex');
    return {
        salt:salt,
        passwordHash:value
    };
};      console.log(password);
          var data = sha512(password, salt);
          console.log(data.passwordHash);
          console.log(hash);


          if (data.passwordHash==hash && name==username) {
             console.log("n f");
             sessionStorage.setItem("loggedseller", name);
             sessionStorage.setItem("loggedsellerid",id );
             sessionStorage.setItem("seller","1" );
              sessionStorage.setItem("buyer","0" );
              
             flag2=1;
             window.location.assign("index.html");
           //   alert("welcome");  
           // window.location.assign("index.html");
            

          }
          else
            { 
              if(logls.ref==SellerCount)
            {if(flag2==1)
              {alert("welcome");  

           window.location.assign("index.html");}
             else
              {
              alert("enter correctly");
              window.location.assign("indexs.html");
            }}

            }
                                    });
      }
      
    }) 

   } 

    
else if(window.event.target.value=="register")
    {

      var verbs, nouns, adjectives, adverbs, preposition;
            nouns = ["bird", "clock", "boy", "plastic", "duck", "teacher", "old lady", "professor", "hamster", "dog"];
            verbs = ["kicked", "ran", "flew", "dodged", "sliced", "rolled", "died", "breathed", "slept", "killed"];
            adjectives = ["beautiful", "lazy", "professional", "lovely", "dumb", "rough", "soft", "hot", "vibrating", "slimy"];
            adverbs = ["slowly", "elegantly", "precisely", "quickly", "sadly", "humbly", "proudly", "shockingly", "calmly", "passionately"];
            preposition = ["down", "into", "up", "on", "upon", "below", "above", "through", "across", "towards"];

            // function randGen() {
            //   return Math.floor(Math.random() * 5);
            // }

            function sentence() {
              var rand1 = Math.floor(Math.random() * 10);
              var rand2 = Math.floor(Math.random() * 10);
              var rand3 = Math.floor(Math.random() * 10);
              var rand4 = Math.floor(Math.random() * 10);
              var rand5 = Math.floor(Math.random() * 10);
              var rand6 = Math.floor(Math.random() * 10);
              //                var randCol = [rand1,rand2,rand3,rand4,rand5];
              //                var i = randGen();
              var content = "The " + adjectives[rand1] + " " + nouns[rand2] + " " + adverbs[rand3] + " " + verbs[rand4] + " because some " + nouns[rand1] + " " + adverbs[rand1] + " " + verbs[rand1] + " " + preposition[rand1] + " a " + adjectives[rand2] + " " + nouns[rand5] + " which, became a " + adjectives[rand3] + " " + adjectives[rand4] + " " + nouns[rand6];

              return content;
            };

  var SN = require('sync-node');
var pn = SN.createQueue();
  pn.pushJob(function(){

    
    return new Promise(function (resolve, reject) {
        setTimeout(function() {
            // alert("register me");
  // logls.flag=0;
  // alert(logls.flag);
   var username =document.getElementById('userr');
   
  logls.contracts.Auction.deployed().then(function(instance) {
      auctionInstance = instance;
      return auctionInstance.SellerCount();}).then(function(SellerCount) {
        // alert("SellerCount");
      // alert(SellerCount);
      var valueToBeReturned = 0;
      console.log("valueToBeReturned");
console.log(valueToBeReturned);
   if (SellerCount==0) {resolve(valueToBeReturned);}
       for ( var  j = 1; j <= SellerCount; j++) {
        
        auctionInstance.sellers(j).then(function(sellers) {
          // alert("for me");
          logls.i++;
          console.log(logls.i);
          var name = sellers[1];
          // alert(name);
          if (name==username.value)
           {
            // alert(username.value);
            //alert("username exists retry registering with different username ");
              valueToBeReturned=1;
               console.log("valueToBeReturned");
console.log(valueToBeReturned);
console.log("before f");
console.log("i nd SellerCount");
console.log(logls.i);
console.log(SellerCount);
if (logls.i==SellerCount) {
              resolve(valueToBeReturned);
              console.log("valueres");
             console.log("valueToBeReturned");
console.log(valueToBeReturned);
            }
            console.log("after f");
              
            }
            else
            {console.log("n else");
              console.log("before f");
if (logls.i==SellerCount) {
              resolve(valueToBeReturned);
              console.log("valueres");
             console.log("valueToBeReturned");
console.log(valueToBeReturned);
            }
            console.log("after f");

            }
            
            });} 

    })


        }, 5000);

    })
});   
    pn.pushJob(function(res){
    setTimeout(function()
      {if(res==0){
        console.log("res");
        console.log(res);
        logls.contracts.Auction.deployed().then(function(instance) {
      auctionInstance = instance;
      return auctionInstance.SellerCount();}).then(function(SellerCount) {
        var password =document.getElementById('passr').value;
      
   // alert(password); 
    
         var crypto = require('crypto');
var genRandomString = function(length){
    return crypto.randomBytes(Math.ceil(length/2))
            .toString('hex') /** convert to hexadecimal format */
            .slice(0,length);   /** return required number of characters */
};

var sha512 = function(password, salt){
    var hash = crypto.createHmac('sha512', salt); /** Hashing algorithm sha512 */
    hash.update(password);
    var value = hash.digest('hex');
    return {
        salt:salt,
        passwordHash:value
    };
};
  var passwordData; 
function saltHashPassword(userpassword) {
    var salt = genRandomString(16); /** Gives us salt of length 16 */
    passwordData = sha512(userpassword, salt);
   // return new Promise(function(fullfil,reject))
    console.log('UserPassword = '+userpassword);
    console.log('Passwordhash = '+passwordData.passwordHash);
    console.log('nSalt = '+passwordData.salt);
// var combine='MYPASSWORD'
// var data = sha512(combine, salt);

// if(data.passwordHash==passwordData.passwordHash)
//   {
//     alert("same hash");
//   }
 }
//console.log(password);
saltHashPassword(password);

    //var passphrase =document.getElementById('passphraser');
    var username =document.getElementById('userr');
        
                  // alert("n logls.flag for");
       const bip39 = require('bip39');
     const hdkey = require('ethereumjs-wallet/hdkey');
  const mnemonic = "item measure vicious sting powder slab volume charge pilot story ceiling month";   
   const hdPath = "m/44'/60'/0'/0/0";
      var index=9;
    const hdwallet = hdkey.fromMasterSeed(bip39.mnemonicToSeed(mnemonic));
    const node = hdwallet.derivePath(hdPath + String(index));
   const stripHexPrefix = require('strip-hex-prefix');
   var passphrase=sentence();
   console.log(passphrase); 
   //document.getElementById('passphraser').innerHTML=passphrase;

   logls.account= node.getWallet().getAddressString(),
    logls.privateKey= node.getWallet().getPrivateKeyString(),
   logls.privateKey=stripHexPrefix(logls.privateKey);
   // 'publicKey': node.getWallet().getPublicKeyString()
//logls.privateKey="prvat";
     // logls.account=web3.eth.accounts[SellerCount];
       // alert("n logls.flag for");
       console.log(logls.account);
 
       console.log("bd");
        console.log(passwordData.salt);
 console.log(passwordData.passwordHash);
 console.log(password);
 console.log(username.value);
  //console.log(logl.account);
  console.log(logls.privateKey);
  return auctionInstance.addSeller(username.value,password,passphrase,passwordData.salt,passwordData.passwordHash,{ from: logls.account,gas:3000000 });

}).then(function(result){
  console.log("n re");
  alert("successfully registered plss login");
  window.location.assign("indexs.html");
}).catch(function(error){console.log("there s an erroe");
console.log(error);});

}
else
{console.log("n else");
  
  alert("retry");
  window.location.assign("indexs.html");
}
   },5000);
      
   });
   }
 //
 else if(window.event.target.value=="reset")
    {var user =document.getElementById('user2');
    var passphrase =document.getElementById('passphrase2');
//fetch the data from contract
    logls.contracts.Auction.deployed().then(function(instance) {
      auctionInstance = instance;
      return auctionInstance.SellerCount();
    }).then(function(SellerCount) {
      var flag1=0;
      var flag2=0;
      if(SellerCount==0)
      {
        alert("no such account details exists");
        window.location.assign("indexs.html");
      }
      for (var i = 1; i <= SellerCount; i++) {
        
        auctionInstance.sellers(i).then(function(sellers) {
        //  var id = bidders[0];
          var name = sellers[1];
         // var add = bidders[2];
          //var pass = bidders[3];
           var passphra = sellers[3];
           flag1++;
           
           console.log(name);
           console.log(passphra);
           console.log(user.value);
           console.log(passphrase.value);
           if (user.value==name && passphrase.value==passphra) 
           {  
            alert("welcome");
            flag1=1;
flag2=1;
           window.location.assign("index.html");
           }
           else
           {
            if(flag1==SellerCount)
            {if(flag2==0)
              {alert("no such credentials found");
              window.location.assign("indexs.html");}
              else 
                           { window.location.assign("index.html");
           }

            }
            }

                       });
      }
      

    }) 
}
}
   },
  $(function() {
  $(window).load(function() {
    logls.init();
  });
});
