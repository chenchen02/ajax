
    $(document).ready(function(){
        $(".input3").click(function(){

$.ajax({

url:"music.txt",data: "json",async:false,

success: function(resultData){
         $.each(resultData,function(i,item){
        alert(item.firstName);
    })
        }

});
  

           
        });
    });
