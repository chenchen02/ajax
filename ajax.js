
    $(document).ready(function(){
        $(".input3").click(function(){

$.ajax({

url:"music.txt",dataType: "json",async:false,

success: function(jsondata){
            output(jsondata);
        }

});
  

           
        });
    });
