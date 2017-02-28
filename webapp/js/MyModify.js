/**
 * Created by Poirot on 2016/5/31.
 */

$("#myButton").on("click", function() {
  // alert("test");
  // var dialog = document.getElementsByClassName("myDiv")[0];
  // dialog.style.position = "absolute";
  // dialog.style.top = "50%";
  // dialog.style.left= "50%";
  // dialog.style.transformOrigin = "translate:(-50%,-50%)";

  // $("#test").append("<ul")
  $(".mydataset-selector-container").removeClass("hide");


  alert("test");
  $("#testDialog").dialog({
    autoOpen: true,
    position: {
      my: "left top",
      at: "left top"
    },
    draggable: true,
    buttons: [
      {
        text: "OK",
        click: function() {
          console.log("OK");
          $(this).dialog("close")
        }
      },
      {
        text: "Cancel",
        click: function() {
          console.log("clicked !!!");
          $(this).dialog("close");
        }
      }]
  });

  initUL();
});

initUL = function() {

  // var _this = this;

  $(".myDiv").empty();


  $(".myul").empty();
  $(".dataset-selector option").each(function(ele, obj) {
    $(".myul").append($("<li />").html($(obj).html()));
  });


  $(".myul li").unbind().on("click", function() {
    // var val = $(this).text();
    var val = $.trim($(this).text());
    console.log(val);

    var sel = $(".selectpicker").get(0);
    console.log(sel.length);
    for(var i = 0; i < sel.length; i++) {
      console.log(i + " : " + sel[i].value + " : " + val + ";");
      if(sel[i].value == val) {
        console.log(true);
        sel[i].selected = true;
        $(".selectpicker").trigger("change");
      }
    }

    // by YX
    // $('.dataset-selector .selectpicker').selectpicker('val', val);
    // var index = $(".dataset-selector select").get(0).selectedIndex;
    // $(".dataset-selector option").each(function(ele,obj){
    //
    //     if($(obj).html() == val){
    //         $(".dataset-selector select").get(0).options[index].selected = false;
    //         $(".dataset-selector select").get(0).selectedIndex = $(this).index();
    //         $(obj).get(0).selected = true;
    //         var ss = $(".dropdown-menu li:nth-child("+(ele+1)+")");
    //         console.log(ss);
    //         ss.addClass("selected").siblings().removeClass("selected");
    //         ss.trigger("click");
    //
    //         // _this.model.selectedDatasetName = $(obj).html();
    //         //$(obj).get(0).selected = true;
    //
    //     }
    // });

    //console.log($(".dataset-selector select").get(0).selectedIndex);
    //$(".dataset-selector select").find("option[text='"+val+"']").attr("selected",true);
  });


  $(".myDiv").append($(".myul"));

  $(".myDiv").dialog({
    title: "Select Database",
    resizable: true,
    buttons: [{
      text: "OK", click: function() {
        alert("OK")
      }
    },
      {
        text: "Cancel", click: function() {
        $(this).dialog("close")
      }
      }]
  });
}




