$(function () {
    $('.btnlogin').on('click', function () {
        console.log($('.login-wrap').serialize())
        $.ajax({
            type: 'post',
            url: 'http://127.0.0.1:3000/login',
            data: $('.login-wrap').serialize(),
            success(res) {
                // console.log(res)
                if(res.code === 200){
                    location.href = '/'
                }
            }
        })
    })
})