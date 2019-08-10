$(function () {
    $('#feature').on('change', function () {
        let file = this.files[0]
        // console.log(file)
        let fd = new FormData();
        fd.append('pic', file);
        $.ajax({
            type: 'post',
            url: '/uploadImg',
            data: fd,
            success(res) {
                console.log(res)
                if (res.code === 200) {
                    $('.thumbnail').attr('src', '../../uploads/' + res.img).show();
                    $('#hid').val(res.img)
                } else {
                    $('.alert-danger > span').text(res.msg).fadeIn(400).delay(3000).fadeOut(400);
                }
            },
            contentType: false,
            processData: false,
            dataType: 'json'
        })
    })
    //分类数据
    $.ajax({
        url: '/getAllCate',
        success(res) {
            // console.log(res)
            let html = `<option value="all">所有分类</option>`;
            for (let i = 0; i < res.data.length; i++) {
                html += `<option value="${res.data[i].id}">${res.data[i].name}</option>`
            }
            $('#category').html(html)
        }
    })

    CKEDITOR.replace('content')
    let id = getId(location.search).id;
    //保存&&编辑
    $('.btnsave').on('click', function () {
        CKEDITOR.instances.content.updateElement()
        let data = $('form').serialize();
        // console.log(data)
        if(id){
            opt('/editPostById',data)
        }else{
            opt('/addPost',data)
        }
    })
    function opt(url,data) {
        $.ajax({
            type: 'post',
            url: url,
            data,
            success(res) {
                console.log(res);
                if (res.code === 200) {
                    location.href = '/admin/posts'
                } else {
                    $('.alert-danger > span').text(res.msg).fadeIn(400).delay(3000).fadeOut(400);
                }
            }
        })
    }

    // console.log(id)

    if (id) {
        $.ajax({
            url: '/getPostById',
            data: { id },
            success(res) {
                console.log(res);
                if (res.code === 200) {
                    $('#title').val(res.data.title);
                    $('#content').text(res.data.content);
                    $('#slug').val(res.data.slug);
                    $('.thumbnail').attr('src', '/uploads/' + res.data.feature).show();
                    $('#category').val(res.data.category_id);
                    $('#status').val(res.data.status);
                    //日期
                    $('#created').val(res.data.created);
                    //隐藏域
                    $('[name=feature]').val(res.data.feature);
                    $('[name=id]').val(res.data.id);
                }
            }
        })
    }
})