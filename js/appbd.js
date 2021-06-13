App = {
  //console.log("hello"),
  web3Provider: null,
  contracts: {},
  account: '0x0',
  hasVoted: false,
  docpath:null,
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

      return App.bid();
    });
  },

  
bid:function()
{
  var bidamt = prompt("enter your quotation:");
    App.contracts.Auction.deployed().then(function(instance) {
      App.prodId=sessionStorage.getItem("prodId");
 var filename=sessionStorage.getItem("filename");
      return instance.bid(App.prodId,bidamt,filename,sessionStorage.getItem("loggedsellerid"),{from: sessionStorage.getItem("account") });
    }).then(function(result) {
            alert("res");
            window.location.assign("../index.html");

      
    }).catch(function(err){
      alert(err);
    });
    }
}

  

$(function() {
  $(window).load(function() {
    App.init();
  });
});
