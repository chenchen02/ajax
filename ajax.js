
    $(document).ready(function(){
        $('#button').click(function(){
            $.ajax({
                type:"GET",
                url:"music.txt", //路径
                dataType:"json",
                success:function(data){
                var music="<h2>";
                //i表示在data中的索引位置，n表示包含的信息的对象
                $.each(data,function(i,n){
                    //获取对象中属性为optionsValue的值
                    music+="<div>"+n["optionValue"]+"</div>";
                });
                music+="</h2>";
                    $('#result').append(music);
                }
            });
            return false;
        });
    });
