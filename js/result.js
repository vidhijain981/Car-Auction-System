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
      result.web3Provider = new Web3.providers.HttpProvider('http://localhost:7545');
     
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
      return auctionInstance.FinalResultCount();
    }).then(function(ResultCount) {

if (ResultCount==0) {
       console.log("ResultCount 0");
      }
       else
       {      

             for (var i = 1; i <= ResultCount; i++) {
                  auctionInstance.finalresults(i).then(function(result) {
                                  var sellerId=result[0];
                                  var prodname=result[1];
                                  var proddesc=result[2];
                                  var prodamt=result[3];
                                  var prodId=result[4];
                                  var prodTime=result[5];
                                  var resId=result[6];
                                  console.log(sellerId);
                                  console.log(prodname); 
                              



    var div1s=document.createElement('div');
  div1s.className="colt";


   document.getElementById('result').appendChild(div1s);


var cont=document.createElement('div');
  cont.id="container  page-wrapper";
  cont.className="container  page-wrapper";
   div1s.appendChild(cont); 


var pageinner=document.createElement('div');
  pageinner.id="page-inner";
  pageinner.className="page-inner";
   cont.appendChild(pageinner); 




var roww=document.createElement('div');
  roww.id="row";
  roww.className="row";
   pageinner.appendChild(roww); 




var wrapper=document.createElement('div');
  wrapper.id="el-wrapper";
  wrapper.className="el-wrapper";
   roww.appendChild(wrapper);


var boxup=document.createElement('div');
  boxup.id="box-up";
  boxup.className="box-up";
   wrapper.appendChild(boxup);


 
var img=document.createElement('img');
  img.id="img";
  img.className="img";
  img.src="js/images/pro"+result[4]+".png";
   boxup.appendChild(img);



var imginfo=document.createElement('div');
  imginfo.id="img-info";
  imginfo.className="img-info";
   boxup.appendChild(imginfo);



var infoinner=document.createElement('div');
  infoinner.id="info-inner";
  infoinner.className="info-inner";
   imginfo.appendChild(infoinner);




var span=document.createElement('span');
  span.id="p-company";
  span.className="p-company";
    span.innerHTML=prodname;
   infoinner.appendChild(span);


var span1=document.createElement('span');
  span1.id="p-name";
  span1.className="p-name";
    span1.innerHTML="amount : "+ prodamt;
   infoinner.appendChild(span1);


var asize=document.createElement('div');
  asize.id="a-size";
  asize.className="a-size";
   imginfo.appendChild(asize);

// var icon=document.createElement('i');
// i.className="access_alarm";
// asize.appendChild(i);
// asize.appendChild('<i class="fa fa-trash-o" aria-hidden="true"></i>');

   var p1=document.createElement('h2');
  p1.id="para";
  p1.className="para";
  // asize.appendChild("time left");
  asize.appendChild(p1);
  // p1.innerHTML+='<i class="fa fa-trash-o" aria-hidden="true"></i>';
  // console.log(para1);
  // console.log(id);
    fun(time,para,name);

// var size=document.createElement('span');
// size.className="size";
// size.innerHTML=" !"
// p1.appendChild(size);



var boxdown=document.createElement('div');
  boxdown.id="box-down";
  boxdown.className="box-down";
   wrapper.appendChild(boxdown);




var hbg=document.createElement('div');
  hbg.id="h-bg";
  hbg.className="h-bg";
   boxdown.appendChild(hbg);



var hbginner=document.createElement('div');
  hbginner.id="h-bg-inner";
  hbginner.className="h-bg-inner";
   hbg.appendChild(hbginner);



var a=document.createElement('a');
  a.id="cart";
  a.href="#";
 a.className="cart";
   boxdown.appendChild(a);



var spanprice=document.createElement('span');
  spanprice.id="price";
  spanprice.className="price";
  spanprice.innerHTML="$"+amount;
a.appendChild(spanprice);


var addtocart=document.createElement('span');
  addtocart.id="add-to-cart";
  addtocart.className="add-to-cart";
  a.appendChild(addtocart);

var txt=document.createElement('span');
txt.id="txt";
txt.className="txt";
txt.innerHTML=name;
addtocart.appendChild(txt);














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
