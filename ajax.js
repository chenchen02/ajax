
    $(document).ready(function(){
        $(".input3").click(function(){

$.ajax({

url:"music.txt",data: "json",async:false,

success: function(jsondata){
            alert(jsondata);
        }

});
  

           
        });
    });
