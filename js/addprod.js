prod = {
    web3:null,
    path:null,
  privateKey:null,
  web3Provider: null,
  contracts: {},
  account: '0x0',
  hasVoted: false,
  flag:0,
  docpath:null,  
    init: function() {
    
    return prod.initWeb3();
  },

  initWeb3: function() {
    console.log("2");
      ethereum.enable();
      //from google
     web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:7545'));
      console.log(web3);
      prod.web3Provider = new Web3.providers.HttpProvider('http://localhost:7545');
     
    return prod.initContract();
  },

  initContract: function() {
    console.log("3");
    $.getJSON("Auction.json", function(auction) {
            
      // Instantiate a new truffle contract from the artifact
      prod.contracts.Auction = TruffleContract(auction);
      // Connect provider to interact with contract
      prod.contracts.Auction.setProvider(prod.web3Provider);

      return prod.render();
    });
  },

  render: function() {
  } ,
 
addprod: function() {
    var prodname =document.getElementById('pn');
    var proddesc =document.getElementById('pd');
    var prodprice =document.getElementById('amount');
    var time =document.getElementById('timee');
console.log("2");
    prod.contracts.Auction.deployed().then(function(instance) {
      auctionInstance = instance;
      return auctionInstance.ProductCount();}).then(function(ProductCount)
      {
       //       alert("n logl.flag for");
       
   var account= "0xCc8Aebaab0042F0c21c8F9177a14e428b4cB67fe";
   
       //alert("n logl.flag for");
       
       console.log("bd");
       var id=sessionStorage.getItem("loggedsellerid");
      // alert(ProductCount); 

console.log(prodname);
console.log(proddesc);
console.log(prodprice);
console.log(time);
ProductCount++;
// alert("ProductCount"+ProductCount);

prod.path="C:/auct1/auct/src/js/images/pro"+ProductCount+".png";
prod.docpath="C:/auct1/auct/src/js/docs/pro"+ProductCount+".pdf";
  return auctionInstance.addProduct(id,prodname.value,proddesc.value,prodprice.value,time.value,prod.path, { from: account,gas:3000000 });

}).then(function(result){
  console.log("n re");
  window.location.assign("http://localhost:8086?path="+prod.path+"&docpath="+prod.docpath);
}).catch(function(error){console.log("there s an erroe");
// alert(error);
}
);

    // console.log("3");
  }

  },           
    $(function() {
  $(window).load(function() {
    prod.init();
  });
});