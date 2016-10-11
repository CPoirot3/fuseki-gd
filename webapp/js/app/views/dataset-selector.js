/**
 * Reusable component that encapsulates selecting a dataset to work on in a given page.
 * Takes the FusekiServer as a model, and populates a select control to choose one of the
 * current datasets. If the dataset changes, this view will update the `selectedDatasetName`
 * on the model, and trigger the event `dataset.changed`.
 **/

define(
    function (require) {
        "use strict";

        var Marionette = require("marionette"),
            Backbone = require("backbone"),
            _ = require("underscore"),
            fui = require("app/fui"),
            sprintf = require("sprintf"),
            datasetSelectorTemplate = require("plugins/text!app/templates/dataset-selector.tpl");


        var DatasetSelectorView = Backbone.Marionette.ItemView.extend({

            initialize: function () {
                this.listenTo(this.model, "change", this.render, this);

                // $("#myButton").button({text:"zzz", modal: true}).click(function () {
                //     console.log("haha");
                //     console.log($(".myDiv").html());
                //     $(".myDiv").removeClass("hide");
                //
                //     $(".myDiv").dialog({
                //         title: "Select Database",
                //         modal: true,
                //         resizable: true,
                //         buttons: [
                //             {
                //                 text: "OK",
                //                 click: function() {
                //                     $(".myDiv").dialog("close");
                //                     initMyDiv();
                //                     console.log($(".myDiv").html());
                //                 }
                //             },
                //             {
                //                 text: "Cancel",
                //                 click: function() {
                //                     initMyDiv();
                //                     $(".myDiv").dialog("close");
                //                 }
                //             }]
                //     });
                //
                //     $(".myDiv").addClass("hide");
                // });


                // $(".myDiv").empty();
                // $(".myul").empty();
                // $(".dataset-selector option").each(function(ele,obj){
                //     // $(".myul").append($("<li />").html($(obj).html().slice(1)));
                //     // alert(obj.text.slice(1));
                //     $(".myul").append($("<li />").html(obj.text.slice(1)));
                // });
                //
                // $(".myul li").unbind().on("click",function(){
                //     // var val = $(this).text();
                //     var val = "/" + $.trim($(this).text());
                //     console.log(val);
                //
                //     var sel = $(".selectpicker").get(0);
                //     console.log(sel.length);
                //     for (var i = 0; i < sel.length; i++) {
                //         console.log(i + " : " + sel[i].value + " : " + val  + ";");
                //         if (sel[i].value == val) {
                //             console.log(true);
                //             sel[i].selected = true;
                //             $(".selectpicker").trigger("change");
                //         }
                //     }
                //
                //     // by YX
                //     // $('.dataset-selector .selectpicker').selectpicker('val', val);
                //     // var index = $(".dataset-selector select").get(0).selectedIndex;
                //     // $(".dataset-selector option").each(function(ele,obj){
                //     //
                //     //     if($(obj).html() == val){
                //     //         $(".dataset-selector select").get(0).options[index].selected = false;
                //     //         $(".dataset-selector select").get(0).selectedIndex = $(this).index();
                //     //         $(obj).get(0).selected = true;
                //     //         var ss = $(".dropdown-menu li:nth-child("+(ele+1)+")");
                //     //         console.log(ss);
                //     //         ss.addClass("selected").siblings().removeClass("selected");
                //     //         ss.trigger("click");
                //     //
                //     //         // _this.model.selectedDatasetName = $(obj).html();
                //     //         //$(obj).get(0).selected = true;
                //     //
                //     //     }
                //     // });
                //
                //     //console.log($(".dataset-selector select").get(0).selectedIndex);
                //     //$(".dataset-selector select").find("option[text='"+val+"']").attr("selected",true);
                // });
                // $(".myul").menu();
                // $(".myDiv").append($(".myul"));
                // $(".myDiv").addClass("hide");
            },

            template: _.template(datasetSelectorTemplate),

            el: ".mydataset-selector-container",
            // el: ".dataset-selector-container",
            ui: {
                select: ".dataset-selector select"
            },

            events: {
                "change .dataset-selector select": "onChangeDataset",
                //"click .myul":"changeUL"
            },

            /**
             * After rendering, set up the dataset picker and notify the rest of the
             * app if the default dataset name is known.
             */
            onRender: function () {
                var selector = $('.selectpicker');
                selector.selectpicker('refresh');
                if (selector.val()) {
                    this.unHideDatasetElements();
                    this.onChangeDataset();
                }
                this.initMyDiv();
            },

            initMyDiv : function () {
                // alert("test");
                $(".myul").empty();
                var arrs = $(".dataset-selector option");
                console.log(arrs.length);
                var range = Math.ceil(arrs.length / 3 );
                console.log(range);
                var count = 0;
                for (var i = 0 ; i < Math.max(range, 1); i++) {
                    if (count * range + i < arrs.length) {
                        $(".myul0").append($("<li />").html(arrs[count * range + i].text.slice(1)));
                    }
                }
                count++;
                for (var i = 0 ; i < Math.max(range, 1); i++) {
                    if (count * range + i < arrs.length) {
                        $(".myul1").append($("<li />").html(arrs[count * range + i].text.slice(1)));
                    }
                }
                count++;
                for (var i = 0 ; i < Math.max(range, 1); i++) {
                    if (count * range + i < arrs.length) {
                        $(".myul2").append($("<li />").html(arrs[count * range + i].text.slice(1)));
                    }
                }
                
                // $(".dataset-selector option").each(function(ele,obj){
                //     // $(".myul").append($("<li />").html($(obj).html().slice(1)));
                //     // alert(obj.text.slice(1));
                //     console.log(ele);
                //     $(".myul").append($("<li />").html(obj.text.slice(1)));
                // });

                
                
                $(".myul li").unbind().on("click",function(){
                    // var val = $(this).text();
                    var val = "/" + $.trim($(this).text());
                    console.log(val);

                    var sel = $(".selectpicker").get(0);
                    console.log(sel.length);
                    for (var i = 0; i < sel.length; i++) {
                        console.log(i + " : " + sel[i].value + " : " + val  + ";");
                        if (sel[i].value == val) {
                            console.log(true);
                            sel[i].selected = true;
                            $(".selectpicker").trigger("change");
                        }
                    }
                });
                $(".myul0").menu();
                $(".myul1").menu();
                $(".myul2").menu();
                // $(".myDiv0").append($(".myul0"));
                // $(".myDiv1").append($(".myul1"));
                // $(".myDiv0").append($(".myul2"));
                // $(".myDiv").menu();
                $(".containDiv").accordion({
                    active: 1
                });
                // console.log($(".myDiv").html());
            },

            changeUL:function(e){
                var val = $(e).html();
                console.log("ul"+val);
            },

            /**
             * Respond to a change in the dataset name selection by updating
             * the underlying model. TODO: should also update the application
             * URL.
             */
            onChangeDataset: function (e) {

                var newDatasetName = this.ui.select.val();
                // alert(newDatasetName);
                this.model.set("selectedDatasetName", newDatasetName);
                this.notifyDatasetName(newDatasetName);

            },

            /**
             * Ensure that elements that should be visible when a dataset is known
             * are not hidden, and vice-versa.
             */
            unHideDatasetElements: function () {
                $(".no-dataset").addClass("hidden");
                $(".with-dataset").removeClass("hidden");
            },

            /** Trigger an event to notify other components that the dataset
             *  name has been selected.
             */
            notifyDatasetName: function (dsName) {
                fui.vent.trigger("dataset.changed", dsName || this.ui.select.val());
            }
        });

        return DatasetSelectorView;
    }
);



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