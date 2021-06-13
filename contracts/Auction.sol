pragma solidity ^0.4.2;

contract Auction {
    // Model a Candidate
    struct Seller 
    { 
        uint id ;
        string name;
        string pass;
    string passphrase;
    string salt;
    string hash;
    }
    struct Product
    {
        uint sellerId;
        string prodname;
        string proddesc;
        uint prodamt;
        uint prodId;
        string prodTime;
        string prodpath;
        string there;
    }
    struct Buyer
    {uint id;
    string name;
    address add;
    string pass;
    string salt;
    string hash;
    string passphrase;
    string privateKey;
    }
    struct Result
    {uint sellerId;
        string prodname;
        string proddesc;
        uint prodamt;
        uint prodId;
        string prodTime;
        uint resId;
        string prodpath;
        string there;

    }
    struct FinalResult
    {uint sellerId;
        string prodname;
        string proddesc;
        uint prodId;
        string prodTime;
        uint resId;
        uint bidId;
        uint FinalResultId;

    }

   struct Bid
   {uint prodId;
    uint sellerId;
    uint bidId;
    uint prodamt;
    string filename;
    uint buyerId;
   }
    mapping(uint => FinalResult) public finalresults;
    mapping(uint => Product) public products;
    mapping(uint => Bid) public bids;
    mapping(uint => Seller) public sellers;
    mapping(uint => Buyer) public bidder;
     mapping(uint => Result) public results;
    // Store Candidates Count
    uint public SellerCount;
    uint public ProductCount;
    uint public BuyerCount;
    uint public ResultCount;
    uint public BidCount;
uint public FinalResultCount;
    constructor () public {
      }

    function addSeller (string _name,string pass,string passphrase,string _salt,string _hash) public {
        SellerCount ++;
        sellers[SellerCount] = Seller(SellerCount, _name,pass,passphrase,_salt,_hash);
    }
    function addProduct (uint sellid,string _name,string desc,uint amt,string time,string prodpath) public {
        ProductCount ++;
        products[ProductCount] = Product(sellid, _name,desc,amt,ProductCount,time,prodpath,"yes");
    }
      function updateProduct (uint prodId) public {
       require(prodId > 0 && prodId <= ProductCount);
        ResultCount ++;
        results[ResultCount] = Result(products[prodId].sellerId,products[prodId].prodname,products[prodId].proddesc,products[prodId].prodamt,products[prodId].prodId,products[prodId].prodTime,ResultCount,products[prodId].prodpath,"yes");
       
        products[prodId].there="no";
        

    }

    function bid (uint productId,uint bidamt,string filename,uint buyerId) public 
    {
    require(productId > 0 && productId <= ProductCount);
    BidCount++;
    bids[BidCount] = Bid(productId,products[productId].sellerId,BidCount,bidamt,filename,buyerId);
    }
    function addBidder(string _name,string _pass,string _salt,string _hash,address _add,string _passphrase,string privateKey) public
    { BuyerCount++;
        bidder[BuyerCount]=Buyer(BuyerCount,_name,_add,_pass,_salt,_hash,_passphrase,privateKey);  
    }
 function addFinalResult (uint resId,uint bide) public {
       require(resId > 0 && resId <= ResultCount);
        FinalResultCount ++;
        finalresults[ResultCount] = FinalResult(results[resId].sellerId,results[resId].prodname,results[resId].proddesc,results[resId].prodId,results[resId].prodTime,results[resId].resId,bide,FinalResultCount);



        results[resId].there="no";
       

    }    
}
