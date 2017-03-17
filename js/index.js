$(document).ready(function(){
  
  var $numkey=$(".key a span");
  var $numkey2=$(".key a");
  var $monitor=$(".monitor");
  var expr="";
  $numkey.click(function(key){
    var monval=$monitor.text();
    var keyval=$(this).text();
    var res;
    // console.log(monval);
    if(monval==0){
      expr=keyval;
      $monitor.text(keyval);
    }else if(keyval=="="){
      res=eval(expr);
      $monitor.text(res);
      expr="";}
    else if(keyval=="ac"){
      $monitor.text(0);
    }else if(keyval=="ce"){
      $monitor.text(0);
    }else{
      expr+=keyval;
      $monitor.text(expr);
    }
  })
  
  
})