const formidable = require('formidable');
const path = require('path')

function uploadImg(req, res) {
    let form = new formidable.IncomingForm();
    form.encoding = 'utf-8';
    form.uploadDir = __dirname + '/../uploads';
    form.keepExtensions = true;
    // console.log(form)
    form.parse(req, (err, fields, files) => {
        if (err) {
            res.json({ code: 400, msg: '数据上传失败' })
        } else {
            // console.log(files)
            let img = path.basename(files.pic.path);
            // console.log(img)
            res.json({
                code: 200,
                msg: '数据上传成功',
                img
            })
        }
    })

}
let controller = {
    uploadImg
}
module.exports = controller;