function fun {
	// body...

	alert("n jquery");
   var myText = $('#myText').val();
   console.log('Textarea: '+myText);
   var url ="localhost/save.php";
   $.post(url, myText, function(data){
   console.log('response from the callback function: '+ data); 
   }).fail(function(jqXHR){
     alert(jqXHR.status +' '+jqXHR.statusText+ ' $.post failed!');
  });    
}