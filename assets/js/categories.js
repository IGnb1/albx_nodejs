$(function(){
    $.ajax({
        url:'/getAllCate',
        success(res){
            console.log(res);
            let html = template('temp',res)
            $('tbody').html(html)
        }
    })
    $('tbody').on('click','.btnedit',function(){
        let data = $(this).data();
        // console.log(data)
        $('#name').val(data.name);
        $('#slug').val(data.slug);
        $('.btnAdd').hide();
        $('.btnEdit').show();
        $('form > h2').text('编辑分类数据');
    })
})