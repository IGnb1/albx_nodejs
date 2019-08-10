

$(function () {
    let pageSize = 2;
    let pageNum = 1;
    function init(search) {
        $.ajax({
            url: '/getAllPost',
            data: {
                pageSize,
                pageNum,
                ...search
            },
            success(res) {
                // console.log(res)
                if (res.code === 200) {
                    let html = template('postTemplate', res.data);
                    $('tbody').html(html)
                    setPage(Math.ceil(res.data.cou / pageSize));
                }
            }
        })
    }
    init();

    //bootstrap分类插件
    function setPage(total) {
        $('.pagination').bootstrapPaginator({
            bootstrapMajorVersion: 3,
            currentPage: pageNum,
            totalPages: total,
            onPageClicked(event, originalEvent, type, page) {
                // console.log(type,page)
                pageNum = page
                init();
            }
        })
    }

    //分类数据
    $.ajax({
        url: '/getAllCate',
        success(res) {
            console.log(res)
            let html = `<option value="all">所有分类</option>`;
            for (let i = 0; i < res.data.length; i++) {
                html += `<option value="${res.data[i].id}">${res.data[i].name}</option>`
            }
            $('.cateSelector').html(html)
        }
    })

    //筛选请求
    $('.btn-search').on('click', function () {
        let obj = {
            cate: $('.cateSelector').val(),
            statu: $('.statuSelector').val()
        }
        console.log(obj.cate,obj.statu)
        init(obj)
    })
})
