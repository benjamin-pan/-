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