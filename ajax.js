
    $(document).ready(function(){
        $(".input3").click(function(){

            $.get("music.txt", function(){
                alert("success");
            });

           
        });
    });
