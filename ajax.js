
    $(document).ready(function(){
        $('.input3').click(function(){
            $.ajax({
                type:"GET",
                url:"music.txt", //路径
                dataType:"json",
                success:function(data){

              $('.input1').val()==data.user);

                };
            });
           
        });
    });
