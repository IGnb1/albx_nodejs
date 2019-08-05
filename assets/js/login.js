$(function () {
    $('.btnlogin').on('click', function () {
        console.log($('.login-wrap').serialize())
        $.ajax({
            type: 'post',
            url: 'http://127.0.0.1:3000/login',
            data: $('.login-wrap').serialize(),
            success(res) {
                if(res.code === 400){
                    $('.alert-danger').fadeIn(500).show().text(res.msg);
                }else{
                    location.href = '/admin'
                }
            }
        })
    })
})