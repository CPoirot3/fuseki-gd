/**
 * Created by hui.chen on 3/6/17.
 */
$("#confirm").click(function() {
  console.log("confirm");
  console.log($("#scope").val());
  $("#scope2").val($("#scope").val().split("#")[1]);
  $("#mainForm").removeClass("hidden");
//    $("#targetButton").addClass("hidden");
});

$("#incidentSelect").click(function() {
  $("#incidentParams").removeClass("hidden");
});

$("#paramsDefineButton").click(function(e) {
  e.preventDefault();
  $("#paramsDefineDiv").removeClass("hidden");
  $("#paramsDefineButton").addClass("hidden");
})

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

// $("#concept").click(function() {
//   updateConcept();
// });
//
// $("#scope").click(function() {
//   updateScope();
// });

// $("#scope2").click(function() {
//   updateScope();
// });


var resultId = 1;
$("#deduce").click(function() {
  var deduceParams = $('#formID').serialize();
  var mapParams = $('#modal-form').serialize();
  deduceParams = deduceParams + "&" + mapParams+ "&id=" + resultId;
  console.log(deduceParams);

  $.post('http://localhost:15100/deduce', deduceParams, function() {
    console.log("deduce send successful");
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
  },
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

buffer = [];
times = [];
var params = {};
var myChart = null;


var getResult = function() {
  $.post('http://localhost:15100/data', params, function(result) {
    if(result["value"] == null) {
      // resultId++;
      clearTimeout(timer);
      return;
    } else {
      buffer.push(result["value"]);
      times.push(processTime(result["time"]));
    }
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
};

$("#results").click(function(e) {
  e.preventDefault();
  myChart = echarts.init(document.getElementById('main'));
  myChart.setOption(option);

  params["id"] = resultId;
  timer = setInterval(getResult, 1000);
});

var stop = true;
$("#stop_results").click(function(e) {

  e.preventDefault();
  params["id"] = resultId;
  if(stop) {
    $("#stop_results").text("继续");
    if (timer) {
      clearInterval(timer);
    }
  } else {
    $("#stop_results").text("停止展示");
    timer = setInterval(getResult, 1000);
  }
  stop = !stop;
});

