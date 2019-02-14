var url = 'http://8.tag5.cn/controller/index.php';

function myPost (obj) {
  $.ajax({
    type: "POST",
    url: url,
    dataType: "json",
    data: obj.data,
    success: obj.successFn,
  });
}

function myGet (obj) {
  $.ajax({
    type: "GET",
    url: obj.url,
    dataType: "json",
    data: obj.data,
    success: obj.successFn,
  });
}
function getAccessToken(){
  $.ajax({
    type: "GET",
    url: "https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid=wx39190f186cd2c4ff&secret=01b01c021b008c0d23a7ea0d89976d43",
    dataType: "json",
    success: function(data){
      console.log(data);
    },
  });
}