App = {
  web3Provider: null,
  contracts: {},
  account: '0x0',
  hasVoted: false,
  docpath:null,
  sellid:0,
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
 
          if(name==seller[1]&&seller[7]=="yes")
          {
            console.log("hello");
            // auctionInstance.addResult(seller[4],);
      // auctionInstance.updateProduct(seller[4], {from:"0x6a5F9adc21Fa3747ceDBA229BD324EFcfC5635c8",gas:3000000 });
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
      var there=seller[7];
      console.log(name);
            if(there=="no")
{
  console.log("do nothing");
}
else{
          var id = seller[4];
          console.log(id);

          var name = seller[1];
          console.log(name);
          var amount = seller[3];
          var product = seller[2];

            var time=seller[5];
            var mg = seller[4];
  var para1="color1 para"+j;

    var div1s=document.createElement('div');
  div1s.className="colt";


   document.getElementById('sellerResults').appendChild(div1s);


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
  p1.id=para1;
  p1.className=para1;
  // asize.appendChild("time left");
  asize.appendChild(p1);
  // p1.innerHTML+='<i class="fa fa-trash-o" aria-hidden="true"></i>';
  // console.log(para1);
  // console.log(id);
    fun(time,para1,name);

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

var txt=document.createElement('span');
txt.id="txt";
txt.className="txt";
txt.innerHTML=name;
addtocart.appendChild(txt);

 var sellerOption = "<option value='" + id + "' >" + name + "</ option>";
          sellerSelect.append(sellerOption);

j++;
          $("#content").show();
     

       } });
      }
            
            })
    
     
  } ,
bidconf:function()
{var sellerResults = $("#sellerResultss");
sellerResults.hide();
var addpro=$("#addproduct");
addpro.hide();
document.getElementById('bdcf').innerHTML="";
// alert("k");
  console.log("b1");
  App.contracts.Auction.deployed().then(function(instance) {
      auctionInstance = instance;
      console.log("b2");
      return auctionInstance.ResultCount();
    }).then(function(ResultCount) {
console.log("b3");
if (ResultCount==0) {
  console.log("b4");
       console.log("ResultCount 0");
      }
       else
       { console.log("b5");    
        sessionStorage.setItem("there","no");
     sessionStorage.setItem("productkaCount",0);

             for (var i = 1; i <= ResultCount; i++) {
              console.log("b6");
              // alert("jk");
                  auctionInstance.results(i).then(function(result) {
                                  if(result[0]==sessionStorage.getItem('loggedsellerid')&&result[8]=="yes")
                                  { console.log("b7");
                                    sessionStorage.setItem("there","yes");
                                  var sellerId=result[0];
                                  var prodname=result[1];
                                  var proddesc=result[2];
                                  
                                  var prodId=result[4];
                                  var prodTime=result[5];
                                  var resId=result[6];
                                  var Count=sessionStorage.getItem("productkaCount");
                                  Count++;
                                  sessionStorage.setItem("productkaCount",Count);
                                  var productkaid="productkaid"+sessionStorage.getItem("productkaCount");
                                  sessionStorage.setItem(productkaid,prodId);
                                  var productkaname="productkaname"+sessionStorage.getItem("productkaCount");
                                  sessionStorage.setItem(productkaname,prodname);
                                  var res="resId"+sessionStorage.getItem("productkaCount");
                                  sessionStorage.setItem(res,resId);

                                   }})}}
                  return auctionInstance.BidCount();}).then(function(BidCount){
                      if(sessionStorage.getItem("there")=="yes")
                      {
                         console.log("b8");
                         sessionStorage.setItem("procount",1);
                        for(var j=1;j<=sessionStorage.getItem("productkaCount");j++)
                        {
                   var productkaid="productkaid"+j;
                   var productkaname="productkaname"+j;
// document.write("\nproductkaid "+sessionStorage.getItem(productkaid));
// document.write("\nproductkaname "+sessionStorage.getItem(productkaname));

// gui part start*************************




var content=document.createElement('div');
content.id="content";
content.className="content";
content.innerHTML=sessionStorage.getItem(productkaid);

document.getElementById('bdcf').appendChild(content);
//document.getElementById('content').innerHTML="";

 var tablename="table"+j;
var table=document.createElement('table');
table.id=tablename;
// table.className=tablename;
table.border="5";
table.cellpadding="100px";
//table.cellspacing="100px"
//document.getElementById('content').innerHTML="";
content.appendChild(table);
//document.getElementById('table').innerHTML="";

// gui part end*****************

var l=0;

                           console.log("b9");
             for (var i = 1; i <= BidCount; i++) {

               console.log("b10");
               var productkaid=0;
               var resId=0;
               var res=0;
                  auctionInstance.bids(i).then(function(result) {
                    if(l==BidCount)
                    {//alert(BidCount);
                      //alert("ff");
                      l=1;}
                  else
                  {//alert("else");
                    l++;}

 
//alert(l);
if(l==1)
{
productkaid="productkaid"+sessionStorage.getItem("procount");


resId="resId"+sessionStorage.getItem("procount");
var add=sessionStorage.getItem("procount");

add++;
sessionStorage.setItem("procount",add)
}
res=sessionStorage.getItem(resId);

//alert(productkaid);
//alert(resId);

if(result[0]==sessionStorage.getItem(productkaid)&&result[1]==sessionStorage.getItem("loggedsellerid"))
{// console.log("b11");
  var bidId=result[2];

  var prodamt=result[3];
   var filename=result[4];  
   // uint prodId;
   //  uint sellerId;
   //  uint bidId;
   //  uint prodamt;
   //  string filename;
   //   // var conti="container  page-wrapper wra"+l;
     //        console.log(conti);
     //          var cont=document.createElement("div");
     //           cont.id="cont";
     //           cont.className="cont";
     //           cont.innerHTML=bidId;
     //           document.getElementById(conti).appendChild(cont);

              var count=sessionStorage.getItem("procount");
             count--;
             tablee="table"+count;
            
             var tr=document.createElement("tr");
             tr.id="tr1";
             tr.className="tr1";
             document.getElementById(tablee).appendChild(tr);


             
            var td1=document.createElement("td");
             td1.id="td2";
             td1.className="td2";
             td1.innerHTML="BID ID: "+bidId;
             
             tr.appendChild(td1);



             var td2=document.createElement("td");
             td2.id="td2";
             td2.className="td2";
             td2.innerHTML="BUYER ID: "+result[5];

             tr.appendChild(td2);

            
            var td3=document.createElement("td");
             td3.id="td3";
             td3.className="td3";
             td3.innerHTML="AMOUNT: "+prodamt;
             tr.appendChild(td3);
            
             

             var td4=document.createElement("td");
             td4.id="td4";
             td4.className="td4";
             tr.appendChild(td4);
             





              var aa1 = document.createElement('a');
              var linkText = document.createTextNode("View RFP");
              aa1.appendChild(linkText);
              aa1.title = "my title text";
              aa1.href = "#";
              aa1.id="txt";
              aa1.className="txt";
              td4.appendChild(aa1);
              aa1.onclick=function(){ window.open('js/docsbuyer/'+filename, '_blank', 'fullscreen=yes');
               return false;
               }
 

            

             
             
            var td5=document.createElement("td");
             td5.id="td3";
             td5.className="td3";
             // td5.innerHTML=prodamt;
             tr.appendChild(td5);

             


            

            var but=document.createElement("button");
             but.id="butt"+l;
             but.className="butt"+l;
             but.value=bidId;
             but.onclick = function(){ 
             sessionStorage.setItem("l",l);
              App.confirmit(); };
               td5.appendChild(but);

               var text=document.createElement("p");
               text.id="text";
                text.className="text";
                text.innerHTML="Confirm it";
                document.getElementById("butt"+l).appendChild(text);
                var input = document.createElement("input");



  input.setAttribute("type", "hidden");

input.setAttribute("id", "hd"+l);

input.setAttribute("value", res);

//append to form element that you want .

document.getElementById("bdcf").appendChild(input);


                       
}
    
                                  })}}

                      } 
                        else
                        {console.log("no res");}
                  })
                              

},
confirmit:function()
{var l=sessionStorage.getItem("l");
  var buttom=document.getElementById("butt"+l).value;
var res=document.getElementById("hd"+l).value;

//var res=buttom.getAttribute("data");
//var bb=buttom.value;
  // console.log("hello");    
    // document.write("hello "+bb);
  // document.write("hello"+res);
   alert(buttom);
  // alert(res);
App.contracts.Auction.deployed().then(function(instance)
{
  auctionInstance=instance;
  return auctionInstance.addFinalResult(res,buttom,{ from:"0xCc8Aebaab0042F0c21c8F9177a14e428b4cB67fe",gas:3000000 });
})


// addFinalResult(res,bb,{ from:"0x1a2a05C4525c0B7497164b9BF8023F0269d0D39b",gas:3000000 });
},
result:function()
{App.contracts.Auction.deployed().then(function(instance) {
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
        var prodId=result[3];
       var prodTime=result[4];
       var resId=result[5];
       // alert(resId);

        var bidId=result[6];
        // alert(bidId);
        var FinalResultId=result[7];



        // gui part start*******************************************




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
  img.src="js/images/pro"+result[3]+".png";
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
    span1.innerHTML="resid : "+ resId;
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
  p1.innerHTML="prodid:"+prodId;
  asize.appendChild(p1);
  // p1.innerHTML+='<i class="fa fa-trash-o" aria-hidden="true"></i>';
  // console.log(para1);
  // console.log(id);
    // fun(time,para,name);

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
  spanprice.innerHTML="bid id:"+bidId;
a.appendChild(spanprice);


var addtocart=document.createElement('span');
  addtocart.id="add-to-cart";
  addtocart.className="add-to-cart";
  a.appendChild(addtocart);

var txt=document.createElement('span');
txt.id="txt";
txt.className="txt";
txt.innerHTML="name"+FinalResultId;
addtocart.appendChild(txt);












        // ******************************************gui part end
                   
})}}})


},
bidNow: function() 
  {
     var prodId = $('#sellerSelect').val();
     sessionStorage.setItem("prodId",prodId);
     App.contracts.Auction.deployed().then(function(instance) {
      auctionInstance = instance;
      return auctionInstance.ProductCount();
    }).then(function(ProductCount) {
      var j=1;
      for (var i = 1; i <= ProductCount; i++) {
        auctionInstance.products(i).then(function(sellers) {
          if(sellers[4]==prodId)
            {
              App.sel=sellers[0];
              // alert("App.sellid");
// alert(App.sel);
            }

j++;
        })
      }
      return auctionInstance.BidCount();
    }).then(function(bidCount)
    {bidCount++;
      App.docpath="C:/auct1/auct/src/js/docsbuyer/pro"+prodId+"sell"+App.sel+"bid"+bidCount+".pdf";
     // alert(App.docpath);
     sessionStorage.setItem("filename","pro"+prodId+"sell"+App.sel+"bid"+bidCount+".pdf");
    window.location.assign("http://localhost:8089?docpath="+App.docpath);
  })

     
  return false;
  }
};

$(function() {
  $(window).load(function() {
    App.init();
  });
});
