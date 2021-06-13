result = {
    web3:null,
  privateKey:null,
  web3Provider: null,
  contracts: {},
  account: '0x0',
  hasVoted: false,
  flag:0,
    init: function() {
    console.log("1111");
    return result.initWeb3();
  },

  initWeb3: function() {
    console.log("2");
      ethereum.enable();
      //from google
     web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:7545'));
      console.log(web3);
      prod.web3Provider = new Web3.providers.HttpProvider('http://localhost:7545');
     
    return result.initContract();
  },

  initContract: function() {
    console.log("3");
    $.getJSON("Auction.json", function(auction) {
      // Instantiate a new truffle contract from the artifact
      App.contracts.Auction = TruffleContract(auction);
      // Connect provider to interact with contract
      App.contracts.Auction.setProvider(App.web3Provider);

      return result.render();
    });
  },
  render: function() {
    var auctionInstance;
    console.log("render");
       web3.eth.getCoinbase(function(err, account) {
      if (err === null) {
        App.account = account;
        //$("#accountAddress").html("Your Account: " + account);

      }
    });
 console.log("hello");

       App.contracts.Auction.deployed().then(function(instance) {
      auctionInstance = instance;
      return auctionInstance.ResultCount();
    }).then(function(ResultCount) {

if (ResultCount==0) {
       console.log("ResultCount 0");
      }
       else
       {      

             for (var i = 1; i <= ResultCount; i++) {
                  auctionInstance.results(i).then(function(result) {
                                  var sellerId=result[0];
                                  var prodname=result[1];
                                  var proddesc=result[2];
                                  var prodamt=result[3];
                                  var prodId=result[4];
                                  var prodTime=result[5];
                                  var resId=result[6];
                                  console.log(sellerId);
                                  console.log(prodname); 
                                  var div1s=document.createElement('h1');
                                  div1s.id="col-lg-4 about-in text-center";
                                  div1s.className="col-lg-4 about-in ";
                                  document.getElementById('resultShow').appendChild(div1s);


                                  var card1=document.createElement('div');
                                  card1.id="card";
                                  card1.className="card";
                                  div1s.appendChild(card1); 


                                  var cardbody1=document.createElement('div');
                                  cardbody1.id="card-body";
                                  cardbody1.className="card-body";
                                  card1.appendChild(cardbody1)


                                   var htag11=document.createElement('h4');
                                    htag11.id="h4";
                                    htag11.className="my-4";
                                    htag11.innerHTML="Id : "+ sellerId;
                                    cardbody1.appendChild(htag11)

                                      //for printing name
                                    var htag21=document.createElement('h4');
                                    htag21.id="h4";
                                    htag21.className="my-4";
                                    htag21.innerHTML="name : "+ prodname;
                                    cardbody1.appendChild(htag21)

                                      //for printing price
                                    var htag31=document.createElement('h4');
                                    htag31.id="h4";
                                    htag31.className="my-4";
                                    htag31.innerHTML="Amount : "+ proddesc;
                                    cardbody1.appendChild(htag31)

                                      //for printing product name
                                    var htag41=document.createElement('h4');
                                    htag41.id="h4";
                                    htag41.className="my-4";
                                    htag41.innerHTML="Product name : "+ prodamt;
                                    cardbody1.appendChild(htag41)

                                     var htag51=document.createElement('h4');
                                    htag51.id="h4";
                                    htag51.className="my-4";
                                    htag51.innerHTML="Product Time : "+ prodTime;
                                    cardbody1.appendChild(htag51)

                                     var htag61=document.createElement('h4');
                                    htag61.id="h4";
                                    htag61.className="my-4";
                                    htag61.innerHTML="Product name : "+ resId;
                                    cardbody1.appendChild(htag61)
                  });
              }

       }


})

  },
   },           
    $(function() {
  $(window).load(function() {
    result.init();
  });
});
