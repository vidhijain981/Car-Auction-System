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
  function fun(mytimer,par,name,flag,id){
  //alert(id);  
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
  
          if(name==seller[1]&&seller[7]=="yes"&&flag=="0")
          {//alert("in if matched");
        

            console.log("hello");
            
            //if (sessionStorage.getItem(id)==null) {
              sessionStorage.setItem(id,"yes");
              // alert(sessionStorage.getItem(id));
       return auctionInstance.updateProduct(seller[4], {from:"0xCc8Aebaab0042F0c21c8F9177a14e428b4cB67fe",gas:3000000 });
          }//}
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
              if(seller[7]=="no")
{
  console.log("do nothing");
}
else{
          var id = seller[4];
          var name = seller[1];
          var amount = seller[3];
          var product = seller[2];
          var time=seller[5];
           
           var mg = seller[4];
           
//var image="images/image1.jpg";
//var tabledata=$("#tabledata");
//tabledata.empty();
// var  insidecol="forcss"+j;
  var para="color para"+j;
  var paara="color1 para"+j;







    var div1s=document.createElement('div');
  div1s.className="colt";


   document.getElementById('sellerResultss').appendChild(div1s);


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
  img.src="js/images/pro"+mg+".png";
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
    span.innerHTML=name;
   infoinner.appendChild(span);


var span1=document.createElement('span');
  span1.id="p-name";
  span1.className="p-name";
    span1.innerHTML="name : "+ name;
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
  p1.id=para;
  p1.className=para;
  // asize.appendChild("time left");
  asize.appendChild(p1);
  // p1.innerHTML+='<i class="fa fa-trash-o" aria-hidden="true"></i>';
  // console.log(para1);
  // console.log(id);
    fun(time,para,name,"0",seller[4]);

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
  spanprice.innerHTML=amount;
a.appendChild(spanprice);


var addtocart=document.createElement('span');
  addtocart.id="add-to-cart";
  addtocart.className="add-to-cart";
  a.appendChild(addtocart);

// var txt=document.createElement('span');
// txt.id="txt";
// txt.className="txt";
// txt.innerHTML=name;
// addtocart.appendChild(txt);




var aa1 = document.createElement('a');
var linkText = document.createTextNode("View RFQ");
aa1.appendChild(linkText);
aa1.title = "my title text";
aa1.href = "#";
aa1.id="txt";
aa1.className="txt";
document.getElementById("add-to-cart").appendChild(aa1);
aa1.onclick=function(){ window.open('js/docs/pro'+id+'.pdf', '_blank', 'fullscreen=yes');
 return false;
 }











///sellerresults







    var div1ss=document.createElement('div');
  div1ss.className="colt";


   document.getElementById('sellerResultsout').appendChild(div1ss);


var cont1=document.createElement('div');
  cont1.id="container  page-wrapper";
  cont1.className="container  page-wrapper";
   div1ss.appendChild(cont1); 


var pageinner1=document.createElement('div');
  pageinner1.id="page-inner";
  pageinner1.className="page-inner";
   cont1.appendChild(pageinner1); 




var roww1=document.createElement('div');
  roww1.id="row";
  roww1.className="row";
   pageinner1.appendChild(roww1); 




var wrapper1=document.createElement('div');
  wrapper1.id="el-wrapper";
  wrapper1.className="el-wrapper";
   roww1.appendChild(wrapper1);


var boxup1=document.createElement('div');
  boxup1.id="box-up";
  boxup1.className="box-up";
   wrapper1.appendChild(boxup1);


 
var img1=document.createElement('img');
  img1.id="img";
  img1.className="img";
  img1.src="js/images/pro"+mg+".png";
   boxup1.appendChild(img1);



var imginfo1=document.createElement('div');
  imginfo1.id="img-info";
  imginfo1.className="img-info";
   boxup1.appendChild(imginfo1);



var infoinner1=document.createElement('div');
  infoinner1.id="info-inner";
  infoinner1.className="info-inner";
   imginfo1.appendChild(infoinner1);




var span1=document.createElement('span');
  span1.id="p-company";
  span1.className="p-company";
    span1.innerHTML=name;
   infoinner1.appendChild(span1);


var span11=document.createElement('span');
  span11.id="p-name";
  span1.className="p-name";
    span11.innerHTML="name : "+ name;
   infoinner1.appendChild(span11);


var asize1=document.createElement('div');
  asize1.id="a-size";
  asize1.className="a-size";
   imginfo1.appendChild(asize1);

// var icon=document.createElement('i');
// i.className="access_alarm";
// asize.appendChild(i);
// asize.appendChild('<i class="fa fa-trash-o" aria-hidden="true"></i>');

   var p11=document.createElement('h2');
  p11.id=paara;
  p11.className=paara;
  // asize.appendChild("time left");
  asize1.appendChild(p11);
  // p1.innerHTML+='<i class="fa fa-trash-o" aria-hidden="true"></i>';
  // console.log(para1);
  // console.log(id);
    fun(time,paara,name,"1",seller[4]);

// var size=document.createElement('span');
// size.className="size";
// size.innerHTML=" !"
// p1.appendChild(size);



var boxdown1=document.createElement('div');
  boxdown1.id="box-down";
  boxdown1.className="box-down";
   wrapper1.appendChild(boxdown1);




var hbg1=document.createElement('div');
  hbg1.id="h-bg";
  hbg1.className="h-bg";
   boxdown1.appendChild(hbg1);



var hbginner1=document.createElement('div');
  hbginner1.id="h-bg-inner";
  hbginner1.className="h-bg-inner";
   hbg1.appendChild(hbginner1);



var a1=document.createElement('a');
  a1.id="cart";
  a1.href="#";
 a1.className="cart";
   boxdown1.appendChild(a1);



var spanprice1=document.createElement('span');
  spanprice1.id="price";
  spanprice1.className="price";
  spanprice1.innerHTML=amount;
a1.appendChild(spanprice1);


var addtocart1=document.createElement('span');
  addtocart1.id="add-to-cart";
  addtocart1.className="add-to-cart";
  a1.appendChild(addtocart1);

var txt1=document.createElement('span');
txt1.id="txt";
txt1.className="txt";
txt1.innerHTML=name;
addtocart1.appendChild(txt1);

// var aa = document.createElement('a');
// var linkText = document.createTextNode("my title text");
// aa.appendChild(linkText);
// aa.title = "my title text";
// aa.href = "#";
// aa.id="txt";
// aa.className="txt";
// aa.onclick=function(){ window.open('js/docs/pro0.pdf', '_blank', 'fullscreen=yes');
//  return false;
//  }
// addtocart1.appendChild(aa);







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
