/**
 * Created by hui.chen on 3/6/17.
 */
$("#confirm").click(function() {
  console.log("confirm");
  $("#mainForm").removeClass("hidden");
//    $("#targetButton").addClass("hidden");
});

var updateConcept = function() {
  $.post('http://localhost:15100/updateConcept', function(scopesResult) {
    console.log(scopesResult);
    var scopes = JSON.parse(scopesResult).scopes;
    $("#concept").empty();
    for (var i = 0; i < scopes.length; i++) {
      console.log(scopes[i]);
      var option = $("<option>").val(scopes[i]).text(scopes[i]);
      $("#concept").append(option);
    }
  });
};


var updateScope = function() {
  $.post('http://localhost:15100/updateScope', function(scopesResult) {
    console.log(scopesResult);
    var scopes = JSON.parse(scopesResult).scopes;
    // var testSelect = document.getElementById("scope");
    $("#scope").empty();
    for (var i = 0; i < scopes.length; i++) {
      console.log(scopes[i]);
//        var op1 = new Option(scopes[i], scopes[i], true, true);
//        testSelect.options.add(op1);
      var option = $("<option>").val(scopes[i]).text(scopes[i]);
      $("#scope").append(option);
    }
  });
};
var init = function() {
  updateScope();
  updateConcept();
};

init();

$("#concept").click(function() {
  updateConcept();
});

$("#scope").click(function() {
  updateScope();
});

var id = 1;
var resultId = 1;
$("#deduce").click(function() {
  var deduceParams = $('#formID').serialize();
  deduceParams = deduceParams + "&id=" + id;
  console.log(deduceParams);
  $.post('http://localhost:15100/deduce', deduceParams, function() {

  });
});

var buffer = [];
var times = [];

function processTime(t) {
  var date = new Date();
  date.setTime(t);
  return date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
}

var links = buffer.map(function(item, i) {
  return {
    source: i,
    target: i + 1
  };
});

option = {
  title: {
    text: '道路拥堵状态'
  },
  xAxis: {
    type: 'category',
    data: times,
    splitLine: {
      show: false
    }
  },
  yAxis: {
//            type: 'value',
////            boundaryGap: [0, '100%'],
//            splitLine: {
//                show: false
//            }
  },
//        series: [{
//            name: '数据',
//            type: 'line',
//            showSymbol: false,
//            hoverAnimation: false,
//            data: buffer
//        }]
  series: [
    {
      type: 'graph',
      layout: 'none',
      coordinateSystem: 'cartesian2d',
      symbolSize: 30,
      label: {
        normal: {
          show: false
        }
      },
      edgeSymbol: ['circle', 'arrow'],
      edgeSymbolSize: [4, 10],
      data: buffer,
      links: links,
      lineStyle: {
        normal: {
          color: '#2f4554'
        }
      }
    }
  ]
};

var timer = null;

$("#results").click(function(e) {
  e.preventDefault();
  buffer = [];
  times = [];

  // 基于准备好的dom，初始化echarts实例
  var myChart = echarts.init(document.getElementById('main'));

  // 使用刚指定的配置项和数据显示图表。
  myChart.setOption(option);

  var params = {};
  params["id"] = resultId;

  timer = setInterval(function() {
    $.post('http://localhost:15100/data', params, function(result) {
      if(result["value"] == null) {
        clearTimeout(timer);
      }
      buffer.push(result["value"]);
      times.push(processTime(result["time"]));
    });

    var links = buffer.map(function(item, i) {
      return {
        source: i,
        target: i + 1
      };
    });
    if(buffer.length > 7) {
      buffer.shift();
      times.shift();
      links.pop();
    }

    myChart.setOption({
      xAxis: {
        data: times
      },
      series: [{
        links: links,
        data: buffer
      }]
    });
  }, 2000);

});

$("#stop_results").click(function(e) {
  e.preventDefault();
  clearInterval(timer);
});
