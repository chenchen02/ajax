
    $(document).ready(function(){
        $(".input3").click(function(){


  htmlobj=$.ajax({url:"music.txt",async:false});
  alert(htmlobj.responseText);

           
        });
    });
