// 入口函数
// 给退出按钮注册点击事件
// 定义一个user对象 
// logout属性 属性值为函数 
// 函数内发送请求  地址 /admin/logout  参数  回调函数  
// 成功 退出到登陆页面 login.html    location.href=地址


$(function() {

    var user = {
        logout: function() {
            $.post("http://localhost:8000/admin/logout",
                function(res) {
                    console.log(res);

                    if (res.code === 200) {
                        window.location.href = "./login.html"
                    }


                }


            )
        }
    };




    $("#out").click(function() {
        user.logout();

    })


});