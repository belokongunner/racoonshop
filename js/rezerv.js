 $('#men').click(function(){
  $('#content').children().remove();
  $('#jumbo').children().remove();
  history.pushState(stateObj, "page 2", "men.html");
  $.getJSON('json/men.json',{}, function(result){
   $.each(result, function (index, val) {
    source = result[index];
    if (source.price<$( "#slider-range" ).slider( "values",1)&&source.price>$( "#slider-range" ).slider( "values",0)){
     $('#content').append($("<div/>", {"id": eval('"' + index + '"'), class: "well col-md-6"}));
     $('#' + eval('"' + index + '"')).append($("<a/>", {class: "col-md-6 thumbnail", href:"bla.html", id: eval('"' + index + '"')}))
     $('a#' + eval('"' + index + '"')).append($("<img/>", {class: "img-responsive", id: eval('"' + index + '"'), src: source.imgsrc}));
     $('a#' + eval('"' + index + '"')).after($("<div/>", {class:"col-md-6", id:(eval('"' + index + '"')+"info")}));
     $('div#' + (eval('"' + index + '"')+"info")).append($("<h3/>", {text: source.heading}));
     $('div#' + (eval('"' + index + '"')+"info")).append($("<p/>", {text: source.description}));
     $('div#' + (eval('"' + index + '"')+"info")).append($("<h3/>", {class: "leading pull-right", text: source.price + "грн."}));
    }
   })
  })
 });



 $('#menjacket').click(function(){
  $('#content').children().remove();
  $('#jumbo').children().remove();
  $.getJSON('json/men.json',{}, function(result){
   $.each(result,function(index,val){
    source=result[index];
    console.log(source.type);
    if(source.type=="jacket"&&source.price<$( "#slider-range" ).slider( "values",1)&&source.price>$( "#slider-range" ).slider( "values",0)) {
     $('#content').append($("<div/>", {"id": eval('"' + index + '"'), class: "well col-md-6"}));
     $('#' + eval('"' + index + '"')).append($("<a/>", {class: "col-md-6 thumbnail", href:"bla.html", id: eval('"' + index + '"')}))
     $('a#' + eval('"' + index + '"')).append($("<img/>", {class: "img-responsive", id: eval('"' + index + '"'), src: source.imgsrc}));
     $('a#' + eval('"' + index + '"')).after($("<div/>", {class:"col-md-6", id:(eval('"' + index + '"')+"info")}));
     $('div#' + (eval('"' + index + '"')+"info")).append($("<h3/>", {text: source.heading}));
     $('div#' + (eval('"' + index + '"')+"info")).append($("<p/>", {text: source.description}));
     $('div#' + (eval('"' + index + '"')+"info")).append($("<h3/>", {class: "leading pull-right", text: source.price + "грн."}));
    }
   });
  })
 });
 $('#menpullover').click(function(){
  $('#content').children().remove();
  $('#jumbo').children().remove();
  $.getJSON('json/men.json',{}, function(result){
   $.each(result,function(index,val){
    source=result[index];
    console.log(source.type);
    if(source.type=="pullover"&&source.price<$( "#slider-range" ).slider( "values",1)&&source.price>$( "#slider-range" ).slider( "values",0)) {
     $('#content').append($("<div/>", {"id": eval('"' + index + '"'), class: "well col-md-6"}));
     $('#' + eval('"' + index + '"')).append($("<a/>", {class: "col-md-6 thumbnail", href:"bla.html", id: eval('"' + index + '"')}))
     $('a#' + eval('"' + index + '"')).append($("<img/>", {class: "img-responsive", id: eval('"' + index + '"'), src: source.imgsrc}));
     $('a#' + eval('"' + index + '"')).after($("<div/>", {class:"col-md-6", id:(eval('"' + index + '"')+"info")}));
     $('div#' + (eval('"' + index + '"')+"info")).append($("<h3/>", {text: source.heading}));
     $('div#' + (eval('"' + index + '"')+"info")).append($("<p/>", {text: source.description}));
     $('div#' + (eval('"' + index + '"')+"info")).append($("<h3/>", {class: "leading pull-right", text: source.price + "грн."}));
    }
   });
  })
 });
 $('#mentshirt').click(function(){
  $('#content').children().remove();
  $('#jumbo').children().remove();
  $.getJSON('json/men.json',{}, function(result){
   $.each(result,function(index,val){
    source=result[index];
    console.log(source.type);
    if(source.type=="tshirt"&&source.price<$( "#slider-range" ).slider( "values",1)&&source.price>$( "#slider-range" ).slider( "values",0)) {
     $('#content').append($("<div/>", {"id": eval('"' + index + '"'), class: "well col-md-6"}));
     $('#' + eval('"' + index + '"')).append($("<a/>", {class: "col-md-6 thumbnail", href:"bla.html", id: eval('"' + index + '"')}))
     $('a#' + eval('"' + index + '"')).append($("<img/>", {class: "img-responsive", id: eval('"' + index + '"'), src: source.imgsrc}));
     $('a#' + eval('"' + index + '"')).after($("<div/>", {class:"col-md-6", id:(eval('"' + index + '"')+"info")}));
     $('div#' + (eval('"' + index + '"')+"info")).append($("<h3/>", {text: source.heading}));
     $('div#' + (eval('"' + index + '"')+"info")).append($("<p/>", {text: source.description}));
     $('div#' + (eval('"' + index + '"')+"info")).append($("<h3/>", {class: "leading pull-right", text: source.price + "грн."}));
    }
   });
  })
 });
 $('#women').click(function(){
  $('#content').children().remove();
  $('#jumbo').children().remove();
  $.getJSON('json/women.json',{}, function(result){
   $.each(result,function(index,val){
    source=result[index];
    $('#content').append($("<div/>",{"id":eval('"'+index+'"'), class:"well"}));
    $('#'+eval('"'+index+'"')).append($("<img/>",{class:"img-responsive","id":eval('"'+index+'"'), src: source.imgsrc}));
    $('img#'+eval('"'+index+'"')).after($("<p/>",{text: source.description}));
    $('img#'+eval('"'+index+'"')).after($("<h3/>",{text: source.heading}));
    $('img#'+eval('"'+index+'"')).after($("<h3/>",{ class: "leading pull-right",text: source.price+"грн."}));
   });
  })
 });
 $('#children').click(function(){
  $('#content').children().remove();
  $('#jumbo').children().remove();
  $.getJSON('json/children.json',{}, function(result){
   $.each(result,function(index,val){
    source=result[index];
    $('#content').append($("<div/>",{"id":eval('"'+index+'"'), class:"well"}));
    $('#'+eval('"'+index+'"')).append($("<img/>",{class:"img-responsive","id":eval('"'+index+'"'), src: source.imgsrc}));
    $('img#'+eval('"'+index+'"')).after($("<p/>",{text: source.description}));
    $('img#'+eval('"'+index+'"')).after($("<h3/>",{text: source.heading}));
    $('img#'+eval('"'+index+'"')).after($("<h3/>",{ class: "leading pull-right",text: source.price+"грн."}));
   });
  })
 });






 $('#men').click(function(){
  $('#content').children().remove();
  $('#jumbo').children().remove();
  history.pushState(stateObj, "page 2", "men.html");
  $.getJSON('json/men.json',{}, function(result){
   $.each(result, function (index, val) {
    source = result[index];
    if (source.price<$( "#slider-range" ).slider( "values",1)&&source.price>$( "#slider-range" ).slider( "values",0)){
     $('#content').append($("<div/>", {"id": eval('"' + index + '"'), class: "well col-md-6"}));
     $('#' + eval('"' + index + '"')).append($("<a/>", {class: "col-md-6 thumbnail", href:"bla.html", id: eval('"' + index + '"')}))
     $('a#' + eval('"' + index + '"')).append($("<img/>", {class: "img-responsive", id: eval('"' + index + '"'), src: source.imgsrc}));
     $('a#' + eval('"' + index + '"')).after($("<div/>", {class:"col-md-6", id:(eval('"' + index + '"')+"info")}));
     $('div#' + (eval('"' + index + '"')+"info")).append($("<h3/>", {text: source.heading}));
     $('div#' + (eval('"' + index + '"')+"info")).append($("<p/>", {text: source.description}));
     $('div#' + (eval('"' + index + '"')+"info")).append($("<h3/>", {class: "leading pull-right", text: source.price + "грн."}));
    }
   })
  })
 });


 $('#menjacket').click(function () {
  $('#content').children().remove();
  $('#jumbo').children().remove();
  $.getJSON('json/men.json', {}, function (result) {
   $.each(result, function (index, val) {
    source = result[index];
    console.log(source.type);
    if (source.type == "jacket" && source.price < $("#slider-range").slider("values", 1) && source.price > $("#slider-range").slider("values", 0)) {
     $('#content').append($("<div/>", {"id": eval('"' + index + '"'), class: "well col-md-6"}));
     $('#' + eval('"' + index + '"')).append($("<a/>", {
      class: "col-md-6 thumbnail",
      href: "bla.html",
      id: eval('"' + index + '"')
     }))
     $('a#' + eval('"' + index + '"')).append($("<img/>", {
      class: "img-responsive",
      id: eval('"' + index + '"'),
      src: source.imgsrc
     }));
     $('a#' + eval('"' + index + '"')).after($("<div/>", {
      class: "col-md-6",
      id: (eval('"' + index + '"') + "info")
     }));
     $('div#' + (eval('"' + index + '"') + "info")).append($("<h3/>", {text: source.heading}));
     $('div#' + (eval('"' + index + '"') + "info")).append($("<p/>", {text: source.description}));
     $('div#' + (eval('"' + index + '"') + "info")).append($("<h3/>", {
      class: "leading pull-right",
      text: source.price + "грн."
     }));
    }
   });
  })
 });
 $('#menpullover').click(function () {
  $('#content').children().remove();
  $('#jumbo').children().remove();
  $.getJSON('json/men.json', {}, function (result) {
   $.each(result, function (index, val) {
    source = result[index];
    console.log(source.type);
    if (source.type == "pullover" && source.price < $("#slider-range").slider("values", 1) && source.price > $("#slider-range").slider("values", 0)) {
     $('#content').append($("<div/>", {"id": eval('"' + index + '"'), class: "well col-md-6"}));
     $('#' + eval('"' + index + '"')).append($("<a/>", {
      class: "col-md-6 thumbnail",
      href: "bla.html",
      id: eval('"' + index + '"')
     }))
     $('a#' + eval('"' + index + '"')).append($("<img/>", {
      class: "img-responsive",
      id: eval('"' + index + '"'),
      src: source.imgsrc
     }));
     $('a#' + eval('"' + index + '"')).after($("<div/>", {
      class: "col-md-6",
      id: (eval('"' + index + '"') + "info")
     }));
     $('div#' + (eval('"' + index + '"') + "info")).append($("<h3/>", {text: source.heading}));
     $('div#' + (eval('"' + index + '"') + "info")).append($("<p/>", {text: source.description}));
     $('div#' + (eval('"' + index + '"') + "info")).append($("<h3/>", {
      class: "leading pull-right",
      text: source.price + "грн."
     }));
    }
   });
  })
 });
 $('#mentshirt').click(function () {
  $('#content').children().remove();
  $('#jumbo').children().remove();
  $.getJSON('json/men.json', {}, function (result) {
   $.each(result, function (index, val) {
    source = result[index];
    console.log(source.type);
    s
    if (source.type == "tshirt" && source.price < $("#slider-range").slider("values", 1) && source.price > $("#slider-range").slider("values", 0)) {
     $('#content').append($("<div/>", {"id": eval('"' + index + '"'), class: "well col-md-6"}));
     $('#' + eval('"' + index + '"')).append($("<a/>", {
      class: "col-md-6 thumbnail",
      href: "bla.html",
      id: eval('"' + index + '"')
     }))
     $('a#' + eval('"' + index + '"')).append($("<img/>", {
      class: "img-responsive",
      id: eval('"' + index + '"'),
      src: source.imgsrc
     }));
     $('a#' + eval('"' + index + '"')).after($("<div/>", {
      class: "col-md-6",
      id: (eval('"' + index + '"') + "info")
     }));
     $('div#' + (eval('"' + index + '"') + "info")).append($("<h3/>", {text: source.heading}));
     $('div#' + (eval('"' + index + '"') + "info")).append($("<p/>", {text: source.description}));
     $('div#' + (eval('"' + index + '"') + "info")).append($("<h3/>", {
      class: "leading pull-right",
      text: source.price + "грн."
     }));
    }
   });
  })
 });
 $('#women').click(function(){
  $('#content').children().remove();
  $('#jumbo').children().remove();
  $.getJSON('json/women.json',{}, function(result){
   $.each(result,function(index,val){
    source=result[index];
    $('#content').append($("<div/>",{"id":eval('"'+index+'"'), class:"well"}));
    $('#'+eval('"'+index+'"')).append($("<img/>",{class:"img-responsive","id":eval('"'+index+'"'), src: source.imgsrc}));
    $('img#'+eval('"'+index+'"')).after($("<p/>",{text: source.description}));
    $('img#'+eval('"'+index+'"')).after($("<h3/>",{text: source.heading}));
    $('img#'+eval('"'+index+'"')).after($("<h3/>",{ class: "leading pull-right",text: source.price+"грн."}));
   });
  })
 });
 $('#children').click(function(){
  $('#content').children().remove();
  $('#jumbo').children().remove();
  $.getJSON('json/children.json',{}, function(result){
   $.each(result,function(index,val){
    source=result[index];
    $('#content').append($("<div/>",{"id":eval('"'+index+'"'), class:"well"}));
    $('#'+eval('"'+index+'"')).append($("<img/>",{class:"img-responsive","id":eval('"'+index+'"'), src: source.imgsrc}));
    $('img#'+eval('"'+index+'"')).after($("<p/>",{text: source.description}));
    $('img#'+eval('"'+index+'"')).after($("<h3/>",{text: source.heading}));
    $('img#'+eval('"'+index+'"')).after($("<h3/>",{ class: "leading pull-right",text: source.price+"грн."}));
   });
  })
 });