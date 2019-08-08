

$(function () {
    let pageNum = 1;
    $.ajax({
        url: '/getAllPost',
        data: {
            pageSize: 2,
            pageNum: 1
        },
        success(res) {
            if (res.code === 200) {
                let html = template('postTemplate', res.data);
                $('tbody').html(html)
            }
        }
    })
    $('.pull-right > li > a').each((i, e) => {
        if (!isNaN(+e.text)) {
            $(e).on('click', function () {
                pageNum = this.text;
                $.ajax({
                    url: '/getAllPost',
                    data: {
                        pageSize: 2,
                        pageNum: this.text
                    },
                    success(res) {
                        console.log(res);
                        if (res.code === 200) {
                            let html = template('postTemplate', res.data);
                            $('tbody').html(html)
                        }
                    }
                })
            })
        } else if (isNaN(+e.text)) {
            if (e.text === '上一页') {
                $(e).on('click', function () {
                    $.ajax({
                        url: '/getAllPost',
                        data: {
                            pageSize: 2,
                            pageNum: --pageNum
                        },
                        success(res) {
                            console.log(res);
                            if (res.code === 200) {
                                let html = template('postTemplate', res.data);
                                $('tbody').html(html)
                            }
                        }
                    })
                })
            } else {
                $(e).on('click', function () {
                    $.ajax({
                        url: '/getAllPost',
                        data: {
                            pageSize: 2,
                            pageNum: ++pageNum
                        },
                        success(res) {
                            console.log(res);
                            if (res.code === 200) {
                                let html = template('postTemplate', res.data);
                                $('tbody').html(html)
                            }
                        }
                    })
                })
            }
        }
    })
})