$(function () {
    //初始化
    function init() {
        $.ajax({
            url: '/getAllCate',
            success(res) {
                console.log(res);
                let html = template('temp', res)
                $('tbody').html(html)
            }
        })
    }
    init();

    $('tbody').on('click', '.btnedit', function () {
        let data = $(this).data();
        // console.log(data)
        $('#name').val(data.name);
        $('#slug').val(data.slug);
        $('.btnAdd').hide();
        $('.btnEdit').show();
        $('form > h2').text('编辑分类数据');
        $('#id').val(data.id)
    })
    //添加目录
    $('.btnAdd').on('click', function () {
        let data = $('form').serialize();
        $.ajax({
            type: 'post',
            url: '/addCate',
            data: data,
            datatype: 'json',
            success(res) {
                if (res.code === 200) {
                    $('.alert-danger').fadeIn(500).delay(3000).fadeOut(500);
                    $('.alert-danger > span').text(res.msg);
                    $('#name').val('');
                    $('#slug').val('');
                    init();
                }
            }
        })
    })

    //编辑目录
    $('.btnEdit').on('click', function () {
        let data = $('form').serialize();
        $.ajax({
            type: 'post',
            url: '/editCate',
            data,
            success(res) {
                console.log(res)
                if (res.code === 200) {
                    $('.alert-danger').fadeIn(500).delay(3000).fadeOut(500);
                    $('.alert-danger > span').text(res.msg);
                    $('#id').val('');
                    $('#name').val('');
                    $('#slug').val('');
                    $('form > h2').text('添加分类数据');
                    $('.btnEdit').hide();
                    $('.btnAdd').show();
                    init();
                }
            }
        })
    })
})