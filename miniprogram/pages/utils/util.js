const db = wx.cloud.database()

function seach(seac){
  if (seac) {
    return new db.collection('splb1').where({
      //使用正则查询，在collection"gucci"中模糊搜索
      title: db.RegExp({
        regexp: seac,
        //从搜索栏中获取的search作为规则进行匹配。
        options: 'i',
        //大小写不区分value
      })
    }).get({}).then(res=>{
      return res.data;
    })
  }
}
module.exports = {
  seach,
}