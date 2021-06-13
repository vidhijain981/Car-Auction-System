App = {
  //console.log("hello"),
  web3Provider: null,
  contracts: {},
  account: '0x0',
  hasVoted: false,
    init: function() {
    console.log("hfdj");
    return App.initWeb3();
  },
 

  initWeb3: function() {
    console.log("2");
    // TODO: refactor conditional
    if (typeof web3 !== 'undefined') {
      // If a web3 instance is already provided by Meta Mask.
      App.web3Provider = web3.currentProvider;
      web3 = new Web3(web3.currentProvider);
    } else {
      // Specify default instance if no web3 instance provided
      ethereum.enable();
      App.web3Provider = new Web3.providers.HttpProvider('http://localhost:7545');
      web3 = new Web3(App.web3Provider);
      Provider.enable();
      web3.enable();
      App.web3Provider.enable();
    }
    return App.initContract();
  },

  initContract: function() {
    console.log("3");
    $.getJSON("Auction.json", function(auction) {
      // Instantiate a new truffle contract from the artifact
      App.contracts.Auction = TruffleContract(auction);
      // Connect provider to interact with contract
      App.contracts.Auction.setProvider(App.web3Provider);

      return App.render();
    });
  },

  render: function() {
    console.log("4");
    var auctionInstance;
    //var loader = $("#loader");
    var content = $("#content");

    //loader.show();
    content.show();

    // Load account data
    web3.eth.getCoinbase(function(err, account) {
      if (err === null) {
        App.account = account;
        $("#accountAddress").html("Your Account: " + account);
      }
    });

    // Load contract data
    App.contracts.Auction.deployed().then(function(instance) {
      auctionInstance = instance;
      return auctionInstance.ProductCount();
    }).then(function(SellerCount) {
      if (SellerCount==0) {
        document.getElementById("bdbutton").style.display="none";
      }
      else
        {document.getElementById("addproduct").style.display="block";
      }
      var sellerResults = $("#sellerResults");
      sellerResults.empty();

      var sellerSelect = $('#sellerSelect');
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
          {
            console.log("hello");
            // auctionInstance.addResult(seller[4],);
       auctionInstance.updateProduct(seller[4], {from:"0x1a2a05C4525c0B7497164b9BF8023F0269d0D39b",gas:3000000 });
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
      //    j++;
      var name=seller[1];
      console.log(name);
            if(name=="")
{
  console.log("do nothing");
}
else{
          var id = seller[4];
          console.log(id);

          //var name = seller[1];
          var amount = seller[3];
          var product = seller[2];
            var time=seller[5];
            var para1="color1 para"+j;
            var  insidecol="forcss"+j;
  var div1s=document.createElement('h1');
  div1s.id="col-lg-4 about-in text-center";
  div1s.className="col-lg-4 about-in text-center";

  //alert("before append aoo");
  document.getElementById('sellerResults').appendChild(div1s);
  //document.getElementById('contento ').appendChild(div1ss);  

 var card1=document.createElement('div');
 card1.id="card";
 card1.className="card";
 div1s.appendChild(card1); 


var cardbody1=document.createElement('div');
cardbody1.id="card-body";
cardbody1.className="card-body";
card1.appendChild(cardbody1)

//for printing id
  var htag11=document.createElement('h4');
  htag11.id="h4";
  htag11.className="my-4";
  htag11.innerHTML="Id : "+ id;
  cardbody1.appendChild(htag11)

 //for printing name
 var htag21=document.createElement('h4');
  htag21.id="h4";
  htag21.className="my-4";
  htag21.innerHTML="name : "+ name;
  cardbody1.appendChild(htag21)

 //for printing price
 var htag31=document.createElement('h4');
  htag31.id="h4";
  htag31.className="my-4";
  htag31.innerHTML="Amount : "+ amount;
  cardbody1.appendChild(htag31)

//for printing product name
var htag41=document.createElement('h4');
  htag41.id="h4";
  htag41.className="my-4";
  htag41.innerHTML="Product name : "+ product;
  cardbody1.appendChild(htag41)

// for css under this there will be a p tag 
  var div21=document.createElement('div');
  div21.id=insidecol;
  div21.className=insidecol;
  cardbody1.appendChild(div21);
  //this tag is for displaying timer
  var p1=document.createElement('h2');
  p1.id=para1;
  p1.className=para1;
  div21.appendChild(p1);
  console.log(para1);
  console.log(id);
    fun(time,para1,name);
 var sellerOption = "<option value='" + id + "' >" + name + "</ option>";
          sellerSelect.append(sellerOption);

j++;
          $("#content").show();
     

       } });
      }
            
            })
    
     
  } ,



  bidNow: function() {
    var bidamt = prompt("enter your increase:");
  
    var prodId = $('#sellerSelect').val();
    //alert(App.account);
    App.contracts.Auction.deployed().then(function(instance) {
      return instance.bid(prodId,bidamt, { from: sessionStorage.getItem("account") });
    }).then(function(result) {
      // Wait for votes to update
     // alert("res me");
      $("#content").show();
      //$("#loader").show();
    }).catch(function(err) {
      //alert("res me");
      //alert(err);
    });
  }
};

$(function() {
  $(window).load(function() {
    App.init();
  });
});
