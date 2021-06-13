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
      var sellerResults = $("#sellerResultss");
      sellerResults.empty();
var sellerResults1 = $("#sellerResultsout");
      sellerResults1.empty();
      var sellerSelect = $('#sellerSelects');
      sellerSelect.empty();
var j=1;
      for (var i = 1; i <= SellerCount; i++) {
        auctionInstance.products(i).then(function(seller) {
          var id = seller[4];
          var name = seller[1];
          var amount = seller[3];
          var product = seller[2];
var image="images/image1.jpg";
var tabledata=$("#tabledata");
tabledata.empty();
//var hello="hello"+j;
          // Render candidate Result
          var deadline = new Date("apr 7, 2019 14:6:25").getTime(); 
          var now = new Date().getTime();
          var t = deadline - now;
          var days = Math.floor(t / (1000 * 60 * 60 * 24)); 
          var hours = Math.floor((t%(1000 * 60 * 60 * 24))/(1000 * 60 * 60)); 
          var minutes = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60)); 
          var seconds = Math.floor((t % (1000 * 60)) / 1000); 
//document.getElementById("smalltext").value ="hello world";

  //var sellerTemplate = "<td> <img src="+image+".jpg width=200 height=150/>"+"<br/> Id" + id + "<br/> Name:" + name + "<br/>Amount:" + amount + "<br/> Product name:" + product + "</td>";
         var sellerTemplate = "<td> <img src="+image+".jpg width=200 height=150/>"+"<br/> Id" + id + "<br/> Name:" + name + "<br/>Amount:" + amount + "<br/>Product name:" + product + "" ;
      // var sellertemplate="<img src="+image+".jpg width=200 height=150/>"+"<br/> Id" + id + "<br/> Name:" + name + "<br/>Amount:" + amount + "<br/>Product name:" + product + "<br/>";
        //var sellerTemplate="<td><div id='hello'>hhello</div></td>";
          sellerResults.append(sellerTemplate);
          
var x = setInterval(function() { 

var now = new Date().getTime(); 
var t = deadline - now; 
var days = Math.floor(t / (1000 * 60 * 60 * 24)); 
var hours = Math.floor((t%(1000 * 60 * 60 * 24))/(1000 * 60 * 60)); 
var minutes = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60)); 
var seconds = Math.floor((t % (1000 * 60)) / 1000); 
      
     var hello="<div id='contents' > <h1>Countdown Clock</h1> <div id='clockdiv'> <div> <span class='days' id='day'>"+days+"</span> <div class='smalltext'>Days</div> </div> <div> <span class='hours' id='hour'>"+hours+"</span> <div class='smalltext'>Hours</div> </div> <div> <span class='minutes' id='minute'>"+days+"</span> <div class='smalltext'>Minutes</div> </div> <div> <span class='second' id='second'>"+seconds+"</span> <div class='smalltext'>Seconds</div> </div> </div></td>";
         // sellerResults1.append(sellerTemplate);
     
     sellerResults.append(hello); 
    
if (t < 0) { 
    clearInterval(x); 
 
     var hello="<div id='contents' > <h1>Countdown Clock</h1> <div id='clockdiv'> <div> <span class='days' id='day'>"+days+"</span> <div class='smalltext'>Days</div> </div> <div> <span class='hours' id='hour'>"+hours+"</span> <div class='smalltext'>Hours</div> </div> <div> <span class='minutes' id='minute'>"+days+"</span> <div class='smalltext'>Minutes</div> </div> <div> <span class='second' id='second'>"+seconds+"</span> <div class='smalltext'>Seconds</div> </div> </div></td>";
         // sellerResults1.append(sellerTemplate);
     sellerResults.append(hello);
 } 
}, 1000); 

// document.getElementById("hello").innerHTML+="chysgycsjnhcikshnck";
          j++;
// var deadline = new Date("apr 7, 2019 14:6:25").getTime(); 
// //console.log(deadline);
// var x = setInterval(function() { 

// var now = new Date().getTime(); 
// var t = deadline - now; 
// var days = Math.floor(t / (1000 * 60 * 60 * 24)); 
// var hours = Math.floor((t%(1000 * 60 * 60 * 24))/(1000 * 60 * 60)); 
// var minutes = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60)); 
// var seconds = Math.floor((t % (1000 * 60)) / 1000); 
// //document.getElementById("smalltext").value ="hello world";

// document.getElementById(hello).innerHTML ="days" ; 
// document.getElementById("hour").innerHTML =hours; 
// document.getElementById("minute").innerHTML = minutes;
// //console.log("hello"); 
// document.getElementById("second").innerHTML =seconds; 
// if (t < 0) { 
//     clearInterval(x); 
//     document.getElementById(hello).innerHTML = "TIME UP"; 
//     document.getElementById("day").innerHTML ='0'; 
//     document.getElementById("hour").innerHTML ='0'; 
//     document.getElementById("minute").innerHTML ='0' ; 
//     document.getElementById("second").innerHTML = '0'; } 
// }, 1000); 
          // Render candidate ballot option
       //   var sellerOption = "<option value='" + id + "' >" + name + "</ option>";
         // sellerSelect.append(sellerOption);
          $("#contents").show();

        });
      }})
     } ,

};

$(function() {
  $(window).load(function() {
    apps.init();
  });
});




























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
      var sellerResults = $("#sellerResultss");
      sellerResults.empty();
var sellerResults1 = $("#sellerResultsout");
      sellerResults1.empty();
      var sellerSelect = $('#sellerSelects');
      sellerSelect.empty();
var j=1;
      for (var i = 1; i <= SellerCount; i++) {
        auctionInstance.products(i).then(function(seller) {
          var id = seller[4];
          var name = seller[1];
          var amount = seller[3];
          var product = seller[2];
var image="images/image1.jpg";
var tabledata=$("#tabledata");
tabledata.empty();
//var hello="hello"+j;
          // Render candidate Result
          var deadline = new Date("apr 7, 2019 14:6:25").getTime(); 
          var now = new Date().getTime();
          var t = deadline - now;
          var days = Math.floor(t / (1000 * 60 * 60 * 24)); 
          var hours = Math.floor((t%(1000 * 60 * 60 * 24))/(1000 * 60 * 60)); 
          var minutes = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60)); 
          var seconds = Math.floor((t % (1000 * 60)) / 1000); 
//document.getElementById("smalltext").value ="hello world";

  //var sellerTemplate = "<td> <img src="+image+".jpg width=200 height=150/>"+"<br/> Id" + id + "<br/> Name:" + name + "<br/>Amount:" + amount + "<br/> Product name:" + product + "</td>";
         var sellerTemplate = "<td> <img src="+image+".jpg width=200 height=150/>"+"<br/> Id" + id + "<br/> Name:" + name + "<br/>Amount:" + amount + "<br/>Product name:" + product + "" ;
      // var sellertemplate="<img src="+image+".jpg width=200 height=150/>"+"<br/> Id" + id + "<br/> Name:" + name + "<br/>Amount:" + amount + "<br/>Product name:" + product + "<br/>";
        //var sellerTemplate="<td><div id='hello'>hhello</div></td>";
          sellerResults.append(sellerTemplate);
          
var x = setInterval(function() { 

var now = new Date().getTime(); 
var t = deadline - now; 
var days = Math.floor(t / (1000 * 60 * 60 * 24)); 
var hours = Math.floor((t%(1000 * 60 * 60 * 24))/(1000 * 60 * 60)); 
var minutes = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60)); 
var seconds = Math.floor((t % (1000 * 60)) / 1000); 
      
     var hello="<div id='contents' > <h1>Countdown Clock</h1> <div id='clockdiv'> <div> <span class='days' id='day'>"+days+"</span> <div class='smalltext'>Days</div> </div> <div> <span class='hours' id='hour'>"+hours+"</span> <div class='smalltext'>Hours</div> </div> <div> <span class='minutes' id='minute'>"+days+"</span> <div class='smalltext'>Minutes</div> </div> <div> <span class='second' id='second'>"+seconds+"</span> <div class='smalltext'>Seconds</div> </div> </div></td>";
         // sellerResults1.append(sellerTemplate);
     
     sellerResults.append(hello); 
    
if (t < 0) { 
    clearInterval(x); 
 
     var hello="<div id='contents' > <h1>Countdown Clock</h1> <div id='clockdiv'> <div> <span class='days' id='day'>"+days+"</span> <div class='smalltext'>Days</div> </div> <div> <span class='hours' id='hour'>"+hours+"</span> <div class='smalltext'>Hours</div> </div> <div> <span class='minutes' id='minute'>"+days+"</span> <div class='smalltext'>Minutes</div> </div> <div> <span class='second' id='second'>"+seconds+"</span> <div class='smalltext'>Seconds</div> </div> </div></td>";
         // sellerResults1.append(sellerTemplate);
     sellerResults.append(hello);
 } 
}, 1000); 

// document.getElementById("hello").innerHTML+="chysgycsjnhcikshnck";
          j++;
// var deadline = new Date("apr 7, 2019 14:6:25").getTime(); 
// //console.log(deadline);
// var x = setInterval(function() { 

// var now = new Date().getTime(); 
// var t = deadline - now; 
// var days = Math.floor(t / (1000 * 60 * 60 * 24)); 
// var hours = Math.floor((t%(1000 * 60 * 60 * 24))/(1000 * 60 * 60)); 
// var minutes = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60)); 
// var seconds = Math.floor((t % (1000 * 60)) / 1000); 
// //document.getElementById("smalltext").value ="hello world";

// document.getElementById(hello).innerHTML ="days" ; 
// document.getElementById("hour").innerHTML =hours; 
// document.getElementById("minute").innerHTML = minutes;
// //console.log("hello"); 
// document.getElementById("second").innerHTML =seconds; 
// if (t < 0) { 
//     clearInterval(x); 
//     document.getElementById(hello).innerHTML = "TIME UP"; 
//     document.getElementById("day").innerHTML ='0'; 
//     document.getElementById("hour").innerHTML ='0'; 
//     document.getElementById("minute").innerHTML ='0' ; 
//     document.getElementById("second").innerHTML = '0'; } 
// }, 1000); 
          // Render candidate ballot option
       //   var sellerOption = "<option value='" + id + "' >" + name + "</ option>";
         // sellerSelect.append(sellerOption);
          $("#contents").show();

        });
      }})
     } ,

};

$(function() {
  $(window).load(function() {
    apps.init();
  });
});
