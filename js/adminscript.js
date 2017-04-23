var shop = {};
var sexchoozen = "...";
var typechoozen = "...";
var brandchoozen = "...";
var jumbo = {};



$(document).ready(function() {
    function Constr (pro){
        this.class = pro.class;
        this.type = pro.type;
        this.brand = pro.brand;
        this.heading = pro.heading;
        this.description = pro.description;
        this.price = pro.price;
        this.fabricant = pro.fabricant;
        this.color = pro.color;
        this.size = pro.size;
        this.article = pro.article;
        this.imgsrc = pro.imgsrc;
    }
    $("body").on('change', '.domainssex', function () {sexchoozen = $(this).val();});
    $("body").on('change', '.domainstype', function () {typechoozen = $(this).val();});
    $("body").on('change', '.domainsbrand', function () {brandchoozen = $(this).val();});
    $("body").on("click", "#loginsubmit", function () {
        login = $("#1").val();
        password = $("#3").val();
        if (login == "Racoon24" && password == "passWORD") {
            document.getElementById("signup").style.display = "none";
            document.getElementById("cont").style.display = "block";
        }
        else{$("body").append('<div class="alert alert-danger" style="width: 404px; margin: 20px 455px;"><a href="#" class="close" data-dismiss="alert">×</a>' +
            '<strong>Внимание!</strong> Неправильный логин или пароль.</div>');}
    });
    $("body").on("submit","form", function (e) {
        e.preventDefault();
    });

    $.getJSON('http://sandbox.web-manufacture.net/maxkrass1/json/men.json',function(result){
        $.each(result, function (index, val) {
            shop[index] = result[index];
        });
        $("body").on("click", "#addsubmit", function () {
            var addprod = {};
            if (sexchoozen=="...")
            {$("#add").prepend('<div class="alert alert-danger" style="margin: 20px 0;"><a href="#" class="close" data-dismiss="alert">×</a>' +
                '<strong>Внимание!</strong> Пол не выбран.</div>');}
            else
            {addprod.class = sexchoozen;
                if (typechoozen=="...")
                {$("#add").prepend('<div class="alert alert-danger" style="margin: 20px 0;"><a href="#" class="close" data-dismiss="alert">×</a>' +
                    '<strong>Внимание!</strong> Тип не выбран.</div>');}
                else
                {addprod.type = typechoozen;
                    if (brandchoozen=="...")
                    {$("#add").prepend('<div class="alert alert-danger" style="margin: 20px 0;"><a href="#" class="close" data-dismiss="alert">×</a>' +
                        '<strong>Внимание!</strong> Бренд не выбран.</div>');}
                    else
                    {addprod.brand = brandchoozen;}
                }
                addprod.heading = $("#heading").val();
                addprod.description = $("#description").val();
                addprod.price = Number($("#price").val());
                addprod.fabricant = $("#fabricant").val();
                addprod.color = $("#color").val();
                addprod.size = $("#size").val().toUpperCase().split(',');
                addprod.article = $("#articul").val();
                imgnum = Number($("#imgnum").val());
                addprod.imgsrc = [];
                for (i=0; i<imgnum; i++){
                    addprod.imgsrc[i] = 'images/'+addprod.article+'-'+(i+1)+'.jpg'
                }
                shop[addprod.article] = addprod;
                console.log(shop);
                $.post('http://sandbox.web-manufacture.net/maxkrass1/json/men.json',JSON.stringify(shop));
            }
        });
        $("body").on("click", "#delsubmit", function () {
            delprod = $("#del").val();
            delete shop[delprod];
            console.log(shop);
            $.post('http://sandbox.web-manufacture.net/maxkrass1/json/men.json',JSON.stringify(shop));
        });


        $.getJSON('http://sandbox.web-manufacture.net/maxkrass1/json/zakazy.json',function(result){
            var zakazy = {};
            $.each(result, function (index,value) {
                zakazy[index] = result[index];
                $('#orders').append($("<div/>",{class: "col-md-6 well",id: index}));
                $('#' + index).append($("<a/>", {class: "close", href:"#", id:index+"close" }));
                $('#' + index+"close").append($("<i/>", {class: "fa fa-times" }));
                $('#' + index).append($("<div/>",{class:"clearfix"}));
                $('#' + index).append($("<p/>",{class:"pull-left", text:"Имя"}));
                $('#' + index).append($("<p/>",{class:"pull-right", text: value.name}));
                $('#' + index).append($("<div/>",{class:"clearfix"}));
                $('#' + index).append($("<p/>",{class:"pull-left", text:"Телефон"}));
                $('#' + index).append($("<p/>",{class:"pull-right", text: value.phone}));
                $('#' + index).append($("<div/>",{class:"clearfix"}));
                $('#' + index).append($("<p/>",{class:"pull-left", text:"Почта"}));
                $('#' + index).append($("<p/>",{class:"pull-right", text: value.mail}));
                $('#' + index).append($("<div/>",{class:"clearfix"}));
                $('#' + index).append($("<p/>",{class:"pull-left", text:"Адрес"}));
                $('#' + index).append($("<p/>",{class:"pull-right", text: value.adress}));
                $('#' + index).append($("<div/>",{class:"clearfix"}));
                $('#' + index).append($("<p/>",{class:"pull-left", text:"Способ оплаты"}));
                $('#' + index).append($("<p/>",{class:"pull-right", text: value.pay}));
                $('#' + index).append($("<div/>",{class:"clearfix"}));
                $('#' + index).append($("<p/>",{class:"pull-left", text:"Дата заказа"}));
                $('#' + index).append($("<p/>",{class:"pull-right", text: value.time}));
                $('#' + index).append($("<div/>",{class:"clearfix"}));
                $('#' + index).append($("<p/>",{class:"pull-left", text:"Сумма"}));
                $('#' + index).append($("<p/>",{class:"pull-right", text: value.summa}));
                $('#' + index).append($("<div/>",{class:"clearfix", html:"&nbsp"}));
                $.each(value, function(i,v){
                   if (typeof v == "object"){
                       $('#' + index).append($("<div/>",{class:"clearfix", html:"&nbsp"}));
                       $('#' + index).append($("<p/>",{class:"pull-left", text: "Артикул: "+v.article}));
                       $('#' + index).append($("<p/>",{class:"pull-right", text: "Размер: "+v.size}));
                   }
                });
            });
            $("body").on("click", ".close", function () {
                var closingproduct = ($(this).closest(".well").attr("id"));
                delete zakazy[closingproduct];
                $('#'+closingproduct).remove();
                $.post('http://sandbox.web-manufacture.net/maxkrass1/json/zakazy.json',JSON.stringify(zakazy));
                console.log(zakazy)
            });

            console.log(zakazy)
        });

        $.getJSON('http://sandbox.web-manufacture.net/maxkrass1/json/otzyv.json',function(result){
            var otzyv = {};
            $.each(result, function (index,value) {
                otzyv[index] = result[index];
                $('#messages').append($("<div/>",{class: "col-md-12 well",id: index}));
                $('#' + index).append($("<a/>", {class: "close closemsg", href:"#", id:index+"close" }));
                $('#' + index+"close").append($("<i/>", {class: "fa fa-times" }));
                $('#' + index).append($("<div/>",{class:"clearfix"}));
                $('#' + index).append($("<p/>",{class:"pull-left", text:"Имя"}));
                $('#' + index).append($("<p/>",{class:"pull-right", text: value.name}));
                $('#' + index).append($("<div/>",{class:"clearfix"}));
                $('#' + index).append($("<p/>",{class:"pull-left", text:"Почта"}));
                $('#' + index).append($("<p/>",{class:"pull-right", text: value.mail}));
                $('#' + index).append($("<div/>",{class:"clearfix"}));
                $('#' + index).append($("<p/>",{class:"pull-left", text:"Тема"}));
                $('#' + index).append($("<p/>",{class:"pull-right", text: value.theme}));
                $('#' + index).append($("<div/>",{class:"clearfix"}));
                $('#' + index).append($("<p/>",{class:"pull-left", text:"Время"}));
                $('#' + index).append($("<p/>",{class:"pull-right", text: value.time}));
                $('#' + index).append($("<div/>",{class:"clearfix"}));
                $('#' + index).append($("<div/>",{class:"pull-left", text:"Сообщение"}));
                $('#' + index).append($("<div/>",{class:"clearfix"}));
                $('#' + index).append($("<div/>",{class:"well", text: value.text}));
            });

            $("body").on("click", ".closemsg", function () {
                var closingmessage = ($(this).closest(".well").attr("id"));
                delete otzyv[closingmessage];
                $('#'+closingmessage).remove();
                $.post('http://sandbox.web-manufacture.net/maxkrass1/json/otzyv.json',JSON.stringify(otzyv));
                console.log(otzyv)
            });
        });

        $.getJSON('http://sandbox.web-manufacture.net/maxkrass1/json/jumbo.json',function(result) {

            $.each(result, function (index, val) {
                jumbo[index] = result[index];
            });
            console.log(jumbo);
            $("body").on("click", "#jumbosubmit", function () {
                if ($("#jumbo1head").val()=="" || $("#jumbo1desc").val()=="") {}
                else{
                    jumbo.jumbo1.heading = $("#jumbo1head").val();
                    jumbo.jumbo1.description = $("#jumbo1desc").val();
                }
                if ($("#jumbo2head").val()=="" || $("#jumbo2desc").val()=="") {}
                else {
                    jumbo.jumbo2.heading = $("#jumbo2head").val();
                    jumbo.jumbo2.description = $("#jumbo2desc").val();
                }
                if ($("#jumbo3head").val()=="" || $("#jumbo3desc").val()=="") {}
                else {
                    jumbo.jumbo3.heading = $("#jumbo3head").val();
                    jumbo.jumbo3.description = $("#jumbo3desc").val();
                }
                if ($("#jumbo4head").val()=="" || $("#jumbo4desc").val()=="") {}
                else {
                    jumbo.jumbo4.heading = $("#jumbo4head").val();
                    jumbo.jumbo4.description = $("#jumbo4desc").val();
                }
                $.post('http://sandbox.web-manufacture.net/maxkrass1/json/jumbo.json',JSON.stringify(jumbo));
                console.log(jumbo);
            })
        });
    });
});