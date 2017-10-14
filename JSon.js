
$(document).ready(function(){
$("#action_btn").on('click',function(){

  $.ajaxSetup({cache:false});

  $.getJSON("http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1&callback=",function(data){

      console.log(data[0]);
       $("#quote").html(data[0].content);
       $("#author").html(data[0].title);
  });

});
});
