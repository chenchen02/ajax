﻿
    $(document).ready(function(){
        $(".input3").click(function(){

            $.ajax({
                type: "get",
                url: "music.txt",

                dataType:"json",
                success:function(data){
                    $.each(data,function(infoIndex,info) {
                        if ($(".input1").val() == info["username"]) {

                    window.location.href="http://www.baidu.com";

                    }



                    })


                }
            })

           
        });
    });
