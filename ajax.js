
    $(document).ready(function(){
        $(".input3").click(function(){

$.ajax({       
    type:"POST",//请求方式  
    url:"music.txt",//请求路径
    dataType: "json",//数据格式  
    success: function(cvvd){//成功处理函数
    //遍历返回json数据，i为数据号，item当前数据
        alert(ccvd);//弹出每一个project
    //多多注意括号，没有;结束符
    } ,
    error:function(){
        alert("error");
    }
})  

           
        });
    });
