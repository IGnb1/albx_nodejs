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
        // console.log(1)
        let data = $('form').serialize();
        // console.log(data)
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

    //删除目录
    $('tbody').on('click', '.btndel', function () {
        if (!confirm('确定要删除吗？')) {
            return;
        }
        let id = $(this).data('id')
        // console.log(data)
        $.ajax({
            type: 'post',
            url: '/delCateById',
            data: { id },
            success(res) {
                if (res.code === 200) {
                    $('.alert-danger').fadeIn(500).delay(3000).fadeOut(500);
                    $('.alert-danger > span').text(res.msg);
                    init();
                }
            }
        })
    })

    //全选
    $('.chkAll').on('click', function () {
        let statu = $(this).prop('checked')
        // console.log(statu)
        $('.chkbox').prop('checked', statu)
        // console.log($('.chkbox:checked').length,$('.chkbox').length);
        if ($('.chkbox:checked').length > 1) {
            $('.delAny').show(500);
        } else {
            $('.delAny').hide(500);
        }
    })
    //多选
    $('tbody').on('click', '.chkbox', function () {
        // console.log($('.chkbox').length , $('.chkbox:checked').length)
        $('.chkAll').prop('checked', $('.chkbox').length == $('.chkbox:checked').length)
        if ($('.chkbox:checked').length > 1) {
            $('.delAny').show(500);
        } else {
            $('.delAny').hide(500);
        }
    })
    //批量删除
    $('.delAny').on('click', function () {
        if (!confirm('确定删除吗？')) return;
        let arr = [];
        $('.chkbox:checked').each((i, e) => {
            arr.push($(e).data('id'))
        })
        let obj = arr.join(',')
        // console.log(obj)
        $.ajax({
            type: 'post',
            url: '/delAnyCateById',
            data: { obj },
            success(res) {
                if (res.code === 200) {
                    $('.alert-danger').fadeIn(500).delay(3000).fadeOut(500);
                    $('.alert-danger > span').text(res.msg);
                    $('.delAny').hide();
                    init();
                }
            }
        })
    })
})