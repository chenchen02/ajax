
    $(document).ready(function(){
        $(".input3").click(function(){

            $.ajax({
                type: "get",
                url: "music.txt",

                dataType:"json",
                success:function(data){
                    $.each(data,function(infoIndex,info){

                        alert(info["firstName"]);



                    })


                }
            })

           
        });
    });
