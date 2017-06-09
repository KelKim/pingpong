function play(input){
  var out=[];
  for(var i=1 ; i <=input; i++);
  if((i%15)==0){
    out.push("pingpong");
  }else if((i%5)==0) {
    out.push("pong");
  }else if ((i%3)==0) {
    out.push("ping");
  }else {
    out.push(i);
  }
  return out;
}
$(document).ready(function(){
  $("form#kelvin").submit(function(event){
    $("#Userinput").empty();
    var input=parseInt($("input#number").val());
    var out =play(input);
    out.forEach(function(rump){
      $("userinput").append("<li>"+rump+"<li>");
      event.preventDefault();
    });
  });
});
