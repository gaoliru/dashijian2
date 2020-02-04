$(function() {
    $("#btnLogin").click(function() {


        var myName = $("#myName").val().trim();
        var password = $("#myPassword").val().trim();
        // console.log(myName, password);
        if (myName.length === 0 || password.length === 0) {
            alert("不能为空");
            return;
        }
        user.login(myName, password);
    });
    var user = {
        login: function(myName, password) {


            $.post("http://localhost:8000/admin/login", {
                    user_name: myName,
                    password: password

                },
                function(res) {

                    console.log(res);
                    if (res.code === 200) {
                        location.href = "./index.html";
                    } else {
                        alert(res.msg);

                    }

                }
            )

        }
    }

})