$(function(){
    let str = location.href
    let index = str.indexOf('?');
    // console.log(index)
    let router = '';
    if(index == -1){//路由里没有参数
        router = str.substring(str.lastIndexOf('/')+1);
    }else{//有参数
        router = str.substring(str.lastIndexOf('/')+1,str.indexOf('?'));
    }
    // console.log(router)
    if(router == 'posts' || router == 'post-add' || router == 'categories'){
        $('#menu-posts').addClass('in').attr('aria-expanded',true);
        $('#menu-posts').parents().find('.collapsed').removeClass('collapsed')
    }
    // let li = $(`li`).attr('data-id',router);
    // li.addClass('active')
    // console.log($(`li[data-id=${router}]`))
    $(`li[data-id=${router}]`).addClass('active')
})