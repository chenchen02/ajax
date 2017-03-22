
    $(document).ready(function(){
        $(".input3").click(function(){

$.ajax({  
     
    type:"POST",//请求方式  
    url:"music.txt",//请求路径
    dataType: "json",//数据格式  
    success: function(){
   
        alert("success");
    } ,
    error:function(){
        alert("error");
    }
})  

           
        });
    });
