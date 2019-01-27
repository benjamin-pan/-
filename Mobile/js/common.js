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
    type: "POST",
    url: obj.url,
    dataType: "json",
    data: obj.data,
    success: obj.successFn,
  });
}