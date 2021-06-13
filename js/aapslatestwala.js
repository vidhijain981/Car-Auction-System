apps = {
  //console.log("hello"),
  web3Provider: null,
  contracts: {},
  account: '0x0',
    init: function() {
    console.log("hfdj");
    return apps.initWeb3();
  },

  initWeb3: function() {
    console.log("2");
    // TODO: refactor conditional
    if (typeof web3 !== 'undefined') {
      // If a web3 instance is already provided by Meta Mask.
      apps.web3Provider = web3.currentProvider;
      web3 = new Web3(web3.currentProvider);
    } else {
      // Specify default instance if no web3 instance provided
      ethereum.enable();
      apps.web3Provider = new Web3.providers.HttpProvider('http://localhost:7545');
      web3 = new Web3(apps.web3Provider);
      Provider.enable();
      web3.enable();
      apps.web3Provider.enable();
    }
    return apps.initContract();
  },

  initContract: function() {
    console.log("3");
    $.getJSON("Auction.json", function(auction) {
      // Instantiate a new truffle contract from the artifact
      apps.contracts.Auction = TruffleContract(auction);
      // Connect provider to interact with contract
      apps.contracts.Auction.setProvider(apps.web3Provider);

      return apps.render();
    });
  },

  render: function() {
    console.log("4");
    var auctionInstance;
    //var loader = $("#loader");
    var content = $("#contents");

    //loader.show();
    content.show();

    // Load account data
    web3.eth.getCoinbase(function(err, account) {
      if (err === null) {
        apps.account = account;
        $("#accountAddresss").html("Your Account: " + account);
      }
    });

    // Load contract data
    apps.contracts.Auction.deployed().then(function(instance) {
      auctionInstance = instance;
      return auctionInstance.ProductCount();
    }).then(function(SellerCount) {
//       var sellerResults = $("#sellerResultss");
//       sellerResults.empty();
// var sellerResults1 = $("#sellerResultsout");
//       sellerResults1.empty();
      var sellerSelect = $('#sellerSelects');
      sellerSelect.empty();
var j=1;
  function fun(mytimer,par,name){
var deadline = new Date(mytimer).getTime(); 
//console.log(par);
var x = setInterval(function() { 

var now = new Date().getTime(); 
var t = deadline - now; 
var days = Math.floor(t / (1000 * 60 * 60 * 24)); 
var hours = Math.floor((t%(1000 * 60 * 60 * 24))/(1000 * 60 * 60)); 
var minutes = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60)); 
var seconds = Math.floor((t % (1000 * 60)) / 1000); 
document.getElementById(par).innerHTML =days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";
  

if (t < 0) { 
    clearInterval(x); 
   // alert(x);
    document.getElementById(par).innerHTML ="   0 0  0 0";
  for (var f = 1; f <= SellerCount; f++) {
      auctionInstance.products(f).then(function(seller) {
  
          if(name==seller[1])
          {//alert("in if matched");
            console.log("hello");
     //  return auctionInstance.updateProduct(seller[4], {from:"0x1a2a05C4525c0B7497164b9BF8023F0269d0D39b",gas:3000000 });
          }
          else
          {
            console.log("go");
          }
         
      });
    }

 } 
}, 1000); 
}
      for (var i = 1; i <= SellerCount; i++) {
        auctionInstance.products(i).then(function(seller) {
              if(seller[1]=="")
{
  console.log("do nothing");
}
else{
          var id = seller[4];
          var name = seller[1];
          var amount = seller[3];
          var product = seller[2];
          var time=seller[5];
//var image="images/image1.jpg";
//var tabledata=$("#tabledata");
//tabledata.empty();
var  insidecol="forcss"+j;
  var para="color para"+j;
  var paara="color1 para"+j;
  //var para1="color para1"+j;
  var div1=document.createElement('div');
  div1.id="col-lg-4 about-in text-center";
  div1.className="col-lg-4 about-in text-center";

  var div1a=document.createElement('div');
  div1a.id="col-lg-4 about-in text-center";
  div1a.className="col-lg-4 about-in text-center";
  
   document.getElementById('sellerResultss').appendChild(div1);
  // document.getElementById('sellerResults').appendChild(div1s);
  document.getElementById('sellerResultsout').appendChild(div1a);

 var card=document.createElement('div');
 card.id="card";
 card.className="card";
 div1.appendChild(card); 

var cardbody=document.createElement('div');
cardbody.id="card-body";
cardbody.className="card-body";
card.appendChild(cardbody)

//for printing id
  var htag1=document.createElement('h4');
  htag1.id="h4";
  htag1.className="my-4";
  htag1.innerHTML="Id : "+ id;
  cardbody.appendChild(htag1)

 //for printing name
 var htag2=document.createElement('h4');
  htag2.id="h4";
  htag2.className="my-4";
  htag2.innerHTML="name : "+ name;
  cardbody.appendChild(htag2)

 //for printing price
 var htag3=document.createElement('h4');
  htag3.id="h4";
  htag3.className="my-4";
  htag3.innerHTML="Amount : "+ amount;
  cardbody.appendChild(htag3)

//for printing product name
var htag4=document.createElement('h4');
  htag4.id="h4";
  htag4.className="my-4";
  htag4.innerHTML="Product name : "+ product;
  cardbody.appendChild(htag4)

// for css under this there will be a p tag 
  var div2=document.createElement('div');
  div2.id=insidecol;
  div2.className=insidecol;
  cardbody.appendChild(div2);
  //this tag is for displaying timer
  var p=document.createElement('h2');
  p.id=para;
  p.className=para;
  div2.appendChild(p);
  console.log(para);
    fun(time,para,name);


var carda=document.createElement('div');
 carda.id="card";
 carda.className="card";
 div1a.appendChild(carda); 

var cardbodya=document.createElement('div');
cardbodya.id="card-body";
cardbodya.className="card-body";
carda.appendChild(cardbodya)

//for printing id
  var htag1a=document.createElement('h4');
  htag1a.id="h4";
  htag1a.className="my-4";
  htag1a.innerHTML="Id : "+ id;
  cardbodya.appendChild(htag1a)

 //for printing name
 var htag2a=document.createElement('h4');
  htag2a.id="h4";
  htag2a.className="my-4";
  htag2a.innerHTML="name : "+ name;
  cardbodya.appendChild(htag2a)

 //for printing price
 var htag3a=document.createElement('h4');
  htag3a.id="h4";
  htag3a.className="my-4";
  htag3a.innerHTML="Amount : "+ amount;
  cardbodya.appendChild(htag3a)

//for printing product name
var htag4a=document.createElement('h4');
  htag4a.id="h4";
  htag4a.className="my-4";
  htag4a.innerHTML="Product name : "+ product;
  cardbodya.appendChild(htag4a)

// for css under this there will be a p tag 
  var div2a=document.createElement('div');
  div2a.id=insidecol;
  div2a.className=insidecol;
  cardbodya.appendChild(div2a);
  //this tag is for displaying timer
  var pa=document.createElement('h2');
  pa.id=paara;
  pa.className=paara;
  div2a.appendChild(pa);
  console.log(para);
    fun(time,paara,name);


j++;
//         var sellerTemplate = "<td> <img src="+image+".jpg width=200 height=150/>"+"<br/> Id" + id + "<br/> Name:" + name + "<br/>Amount:" + amount + "<br/>Product name:" + product + "" ;
         // sellerResults.append(sellerTemplate);
          
          // Render candidate ballot option
       //   var sellerOption = "<option value='" + id + "' >" + name + "</ option>";
         // sellerSelect.append(sellerOption);
          $("#contents").show();
       //   $("#contentout")show();
}
        });
      }})
     } ,

};

$(function() {
  $(window).load(function() {
    apps.init();
  });
});
