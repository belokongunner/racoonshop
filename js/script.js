var shop = {};

var cartlength;
var sizechoozen = "...";
var thisclass="", thistype="", thisbrand="";
var sum = 0;
var jumbo = {};
var barn = new Barn(localStorage);
var cart = barn.get('cart');

function r (w){
    k=0;
    for(var i in w){
        k++
    }
    return k
}



$(document).ready(function() {

    barn.set('key', 'val');
    console.log(barn.get('key'));

    $("body").on('cartcreate', function () {
        cartlength = r(barn.get('cart'));
    $('#cart').html('<i class="fa fa-shopping-cart fa-lg"></i> '+'Товаров в корзине: '+cartlength);
    });

    $('#row').prepend('<div class="col-md-3" id="sidebar" style="height: 600px;"><div class="list-group">' +
        '<a href="#" class="list-group-item" id="cart"><i class="fa fa-shopping-cart fa-lg"></i> Товаров в корзине: 0</a>'+
        '<a href="#" class="list-group-item" id="contact"><i class="fa fa-phone fa-lg"></i> Контакты</a>'+
        '<a href="http://vk.com/enotshopua" class="list-group-item" target="_blank"><i class="fa fa-vk fa-lg"></i> Мы Вконтакте</a>' +
        ' </div> </div>');
    $("body").trigger('cartcreate');

    $.getJSON('http://sandbox.web-manufacture.net/maxkrass1/json/jumbo.json',function(result){
        $.each(result, function (index, val) {
            jumbo[index] = result[index];
        });
        $('#row').append($("<div/>",{class:"col-md-9", id:"jumbo"}));
        $('#jumbo').append($("<div/>",{class: "carousel slide well", id: "myCarousel", "data-ride":"carousel"}));
        $('#myCarousel').append($("<ol/>",{class: "carousel-indicators"}));
        $('.carousel-indicators').append($("<li/>",{"data-slide-to":"0","data-target":"#myCarousel",class: "active"}));
        $('.carousel-indicators').append($("<li/>",{"data-slide-to":"1","data-target":"#myCarousel"}));
        $('.carousel-indicators').append($("<li/>",{"data-slide-to":"2","data-target":"#myCarousel"}));
        $('.carousel-indicators').append($("<li/>",{"data-slide-to":"3","data-target":"#myCarousel"}));
        $('#myCarousel').append($("<div/>",{class:"carousel-inner", "role":"listbox"}));
        $('.carousel-inner').append($("<div/>",{class: "item active", id: "item1"}));
        $('#item1').append($("<img/>", {class: "img-responsive", src:jumbo.jumbo1.imgsrc, alt:jumbo.jumbo1.heading, style:"max-height: 440px; margin: 0 auto"}));
        $('#item1').append($("<div/>",{class: "carousel-caption", id: "citem1"}));
        $('#citem1').append($("<h3/>",{text:jumbo.jumbo1.heading}));
        $('#citem1').append($("<p/>",{text:jumbo.jumbo1.description}));
        $('.carousel-inner').append($("<div/>",{class: "item", id: "item2"}));
        $('#item2').append($("<img/>", {class: "img-responsive", src:jumbo.jumbo2.imgsrc, alt:jumbo.jumbo2.heading, style:"max-height: 440px; margin: 0 auto"}));
        $('#item2').append($("<div/>",{class: "carousel-caption", id: "citem2"}));
        $('#citem2').append($("<h3/>",{text:jumbo.jumbo2.heading}));
        $('#citem2').append($("<p/>",{text:jumbo.jumbo2.description}));
        $('.carousel-inner').append($("<div/>",{class: "item", id: "item3"}));
        $('#item3').append($("<img/>", {class: "img-responsive", src:jumbo.jumbo3.imgsrc, alt:jumbo.jumbo3.heading, style:"max-height: 440px; margin: 0 auto"}));
        $('#item3').append($("<div/>",{class: "carousel-caption", id: "citem3"}));
        $('#citem3').append($("<h3/>",{text:jumbo.jumbo3.heading}));
        $('#citem3').append($("<p/>",{text:jumbo.jumbo3.description}));
        $('.carousel-inner').append($("<div/>",{class: "item", id: "item4"}));
        $('#item4').append($("<img/>", {class: "img-responsive", src:jumbo.jumbo4.imgsrc, alt:jumbo.jumbo4.heading, style:"max-height: 440px; margin: 0 auto"}));
        $('#item4').append($("<div/>",{class: "carousel-caption", id: "citem4"}));
        $('#citem4').append($("<h3/>",{text:jumbo.jumbo4.heading}));
        $('#citem4').append($("<p/>",{text:jumbo.jumbo4.description}));
        $('#myCarousel').append($("<a/>", {class: "left carousel-control",href:"#myCarousel","role":"button","data-slide":"prev",id:"lcc" }));
        $('#lcc').append($("<span/>",{class: "glyphicon glyphicon-chevron-left", "aria-hidden":"true"}));
        $('#lcc').append($("<span/>",{class: "sr-only", text: "Previous"}));
        $('#myCarousel').append($("<a/>", {class: "right carousel-control",href:"#myCarousel","role":"button","data-slide":"next", id:"rcc" }));
        $('#rcc').append($("<span/>",{class: "glyphicon glyphicon-chevron-right", "aria-hidden":"true"}));
        $('#rcc').append($("<span/>",{class: "sr-only", text: "Next"}));
        $('#jumbo').after('<div class="col-md-9" id="content"></div>');
    });

    $(function () {
        $("#slider-range").slider({
            range: true,
            min: 0,
            max: 2000,
            values: [0, 2000],
            slide: function (event, ui) {
                $("#amount").val("₴" + ui.values[0] + " - ₴" + ui.values[1]);
            }
        });
        $("#amount").val("₴ " + $("#slider-range").slider("values", 0) +
            " - ₴ " + $("#slider-range").slider("values", 1));
    });


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


    $.getJSON('http://sandbox.web-manufacture.net/maxkrass1/json/men.json',function(result){
            $.each(result, function (index, val) {
                shop[index] = result[index];
            });
        $.getJSON('http://sandbox.web-manufacture.net/maxkrass1/json/top.json',function(ind){
            $.each(ind.top, function (i,v) {
                otobraz(v,shop[v])
            });
        });
    });


    function otobraz(index, val){
        $('#content').append($("<div/>", {"id": index, class: "digit well col-sm-6"}));
        $('#' + index).append($("<a/>", {class: "col-sm-6 thumbnail", href: "#", id: 'a'+index}));
        $('#a' + index).append($("<img/>", {class: "img-responsive", id: index, src: val.imgsrc[0]}));
        $('#a' + index).after($("<div/>", {class: "col-sm-6", id: index + "info"}));
        $('div#' + index + "info").append($("<h3/>", {class:"pull-left", text: val.heading}));
        $('div#' + index + "info").append($("<h3/>", {class: "pull-right", text: val.price + "грн."}));
        $('div#' + index + "info").append($("<div/>",{class:"clearfix"}));
    }


    function otobraztovar(index,val) {
        $('#content').children().remove();
        $('#jumbo').children().remove();
        $('#content').append($("<div/>", {"id": index, class: "well col-md-12"}));
        $('#'+index).append($("<div/>",{class:"col-md-5 zoom-grid"}));
        $('#'+index).append($("<div/>",{class:"col-md-7 dress-info"}));
        $('.col-md-5,.zoomgrid').append($("<div/>",{class:"flexslider"}));
        $('.flexslider').append($("<ul/>",{class:"slides"}));
        val.imgsrc.forEach(function(item,i){
            $('.slides').append($("<li/>",{"data-thumb":item, id:"img"+i}));
            $('#img'+i).append($("<div/>",{class:"thumb-image",id:"timg"+i}));
            $('#timg'+i).append($("<img/>",{class:"img-responsive",src: item,"data-imagezoom":"true", alt:""}))
        });
        $('.col-md-7,.dress-info').append($("<div/>",{class:"dress-name"}));
        $('.dress-name').append($("<h3/>",{class:"pull-left", text:val.heading}));
        $('.dress-name').append($("<h3/>",{class:"pull-right", text:val.price+"₴"}));
        $('.dress-name').append($("<div/>",{class:"clearfix"}));
        $('.dress-name').append($("<p/>",{text:val.description}));
        $('.col-md-7,.dress-info').append($("<div/>",{class:"span span1 dress-fabricant"}));
        $('.dress-fabricant').append($("<p/>",{class:"pull-left", text:"ПРОИЗВОДИТЕЛЬ"}));
        $('.dress-fabricant').append($("<p/>",{class:"pull-right", text:val.fabricant}));
        $('.dress-fabricant').append($("<div/>",{class:"clearfix"}));
        $('.col-md-7,.dress-info').append($("<div/>",{class:"span span2 dress-color"}));
        $('.dress-color').append($("<p/>",{class:"pull-left", text:"ЦВЕТ"}));
        $('.dress-color').append($("<p/>",{class:"pull-right", text:val.color}));
        $('.dress-color').append($("<div/>",{class:"clearfix"}));
        $('.col-md-7,.dress-info').append($("<div/>",{class:"span span3 dress-articul"}));
        $('.dress-articul').append($("<p/>",{class:"pull-left", text:"АРТИКУЛ"}));
        $('.dress-articul').append($("<p/>",{class:"pull-right", text:val.article}));
        $('.dress-articul').append($("<div/>",{class:"clearfix"}));
        $('.col-md-7,.dress-info').append($("<div/>",{class:"span span3 dress-size"}));
        $('.dress-size').append($("<p/>",{class:"pull-left", text:"РАЗМЕР"}));
        $('.dress-size').append($("<p/>",{class:"pull-right size"}));
        $('.size').append($("<span/>",{class:"selection-box"}));
        $('.selection-box').append($("<select/>",{class:"domains valid",name:"domains"}));
        $('.domains').append($("<option/>",{"text":"..."}));
        val.size.forEach(function(item,i){
            $('.domains').append($("<option/>",{"text":item}));
        });
        $('.dress-size').append($("<div/>",{class:"clearfix"}));
        $('.col-md-7,.dress-info').append($("<input/>",{type:"submit", value:"Добавить в корзину",class:"addtocart", id: index}));
        $("body").trigger('afterCreateImg');
    }

    function displaycart(ind,vale){
        $('#content').append($("<div/>",{class: "col-md-12 well",id: ind}));
        $('#' + ind).append($("<a/>", {class: "col-md-3 thumbnail", href: "#", id: 'a'+ind}));
        $('#' + ind).append($("<a/>", {class: "close", href:"#", id:ind+"close" }));
        $('#'+ind+'close').append($("<i/>", {class: "fa fa-times" }));
        $('#' + ind).append($("<div/>",{class: "col-md-9",id: ind+"info"}));
        $('#a' + ind).append($("<img/>", {class: "img-responsive", id: ind, src: vale.imgsrc[0]}));
        $('div#' + ind + "info").append($("<h3/>", {class: "leading pull-left",text: vale.heading}));
        $('div#' + ind + "info").append($("<h3/>", {class: "leading pull-right", text: vale.price + "грн."}));
        $('div#' + ind + "info").append($("<div/>",{class:"clearfix"}));
        $('div#' + ind + "info").append($("<p/>",{class:"pull-left", text:"Размер"}));
        $('div#' + ind + "info").append($("<p/>",{class:"pull-right", text: vale.size}));
        $('div#' + ind + "info").append($("<div/>",{class:"clearfix"}));
        $('div#' + ind + "info").append($("<p/>",{class:"pull-left", text:"Артикул"}));
        $('div#' + ind + "info").append($("<p/>",{class:"pull-right", text: vale.article}));
        $('div#' + ind + "info").append($("<div/>",{class:"clearfix"}));
    }

    function parclick(thisclas,thistype,thisbrand) {
        $('#content').children().remove();
        $('#jumbo').children().remove();
        if (thisclas=="" && thistype=="" && thisbrand == "") {
            $.each(shop, function (index, val) {
                if (val.price < $("#slider-range").slider("values", 1) && val.price > $("#slider-range").slider("values", 0)) {
                    otobraz(index, val);
                }
            })
        }
        if (thisclas=="men" && thistype=="" && thisbrand == "") {
            $.each(shop, function (index, val) {
                if (val.class=="м" && val.price < $("#slider-range").slider("values", 1) && val.price > $("#slider-range").slider("values", 0)) {
                    otobraz(index, val);
                }
            })
        }
        if (thisclas=="men" && thistype=="jacket" && thisbrand == "") {
            $.each(shop, function (index, val) {
                if (val.type=="куртка" && val.class=="м" && val.price < $("#slider-range").slider("values", 1) && val.price > $("#slider-range").slider("values", 0)) {
                    otobraz(index, val);
                }
            })
        }
        if (thisclas=="men" && thistype=="downjacket" && thisbrand == "") {
            $.each(shop, function (index, val) {
                if (val.type=="пуховик" && val.class=="м" && val.price < $("#slider-range").slider("values", 1) && val.price > $("#slider-range").slider("values", 0)) {
                    otobraz(index, val);
                }
            })
        }
        if (thisclas=="men" && thistype=="vest" && thisbrand == "") {
            $.each(shop, function (index, val) {
                if (val.type=="жилет" && val.class=="м" && val.price < $("#slider-range").slider("values", 1) && val.price > $("#slider-range").slider("values", 0)) {
                    otobraz(index, val);
                }
            })
        }
        if (thisclas=="women" && thistype=="" && thisbrand == "") {
            $.each(shop, function (index, val) {
                if (val.class=="ж" && val.price < $("#slider-range").slider("values", 1) && val.price > $("#slider-range").slider("values", 0)) {
                    otobraz(index, val);
                }
            })
        }
        if (thisclas=="women" && thistype=="jacket" && thisbrand == "") {
            $.each(shop, function (index, val) {
                if (val.type=="куртка" && val.class=="ж" && val.price < $("#slider-range").slider("values", 1) && val.price > $("#slider-range").slider("values", 0)) {
                    otobraz(index, val);
                }
            })
        }
        if (thisclas=="women" && thistype=="downjacket" && thisbrand == "") {
            $.each(shop, function (index, val) {
                if (val.type=="пуховик" && val.class=="ж" && val.price < $("#slider-range").slider("values", 1) && val.price > $("#slider-range").slider("values", 0)) {
                    otobraz(index, val);
                }
            })
        }
        if (thisclas=="women" && thistype=="vest" && thisbrand == "") {
            $.each(shop, function (index, val) {
                if (val.type=="жилет" && val.class=="ж" && val.price < $("#slider-range").slider("values", 1) && val.price > $("#slider-range").slider("values", 0)) {
                    otobraz(index, val);
                }
            })
        }
    }

    $('.paragraph').click(function(){
        if(this.id=="men"){thisclass="men"; thistype=""; thisbrand=""}
        if(this.id=="menjacket"){ thisclass="men"; thistype="jacket"; thisbrand=""}
        if(this.id=="menvest"){ thisclass="men"; thistype="vest"; thisbrand=""}
        if(this.id=="mendownjacket"){ thisclass="men"; thistype="downjacket"; thisbrand=""}
        if(this.id=="women"){ thisclass="women"; thistype=""; thisbrand=""}
        if(this.id=="womenjacket"){ thisclass="women"; thistype="jacket"; thisbrand=""}
        if(this.id=="womenvest"){ thisclass="women"; thistype="vest"; thisbrand=""}
        if(this.id=="womendownjacket"){ thisclass="women"; thistype="downjacket"; thisbrand=""}
        parclick(thisclass,thistype,thisbrand);
    });

    $("body").on("mouseup", ".ui-slider-handle", function () {
        parclick(thisclass,thistype,thisbrand);
    });

    $("body").on("click", "#contact", function () {
        $('#content').children().remove();
        $('#jumbo').children().remove();
        $('#content').append($("<div/>",{id:"h2",class: "contact-info"}));
        $('#h2').append($("<h2/>",{text: "Мы находимся здесь:"}));
        $('#content').append($("<div/>",{class: "contact-map"}));
        $('.contact-map').append($("<iframe/>",{src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2564.4512499" +
        "78552!2d36.30109991527974!3d50.00289682739316!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4127a0ab2860a" +
        "77f%3A0xf5a52e4a8a5a6186!2z0KLQpiDCq9CR0LDRgNCw0LHQsNGI0L7QstC-wrs!5e0!3m2!1sru!2sin!4v1457439375328",style:"border:0"}));
        $('#content').append($("<div/>",{class: "contact-form"}));
        $('.contact-form').append($("<div/>",{id:"h3",class: "contact-info"}));
        $('#h3').append($("<h3/>",{text: "Свяжитесь с нами:"}));
        $('#h3').append($("<form/>",{id:"otzv"}));
        $('#otzv').append($("<div/>",{class: "contact-left"}));
        $('#otzv').append($("<div/>",{class: "contact-right"}));
        $('#otzv').append($("<div/>",{class:"clearfix"}));
        $('#otzv').append($("<input/>",{type:"submit", value:"Отправить",id:"submitotz"}));
        $('.contact-left').append($("<input/>",{type:"text",placeholder:"Имя",id:"otzcustomername"}));
        $('#otzcustomername').prop('required',true);
        $('.contact-left').append($("<input/>",{type:"text",placeholder:"E-mail",id:"otzcustomermail"}));
        $('#otzcustomermail').prop('required',true);
        $('.contact-left').append($("<input/>",{type:"text",placeholder:"Тема",id:"otztheme"}));
        $('#otztheme').prop('required',true);
        $('.contact-right').append($("<textarea/>",{type:"text",placeholder:"Пишите здесь",id:"otztext"}));
        $('#otztext').prop('required',true);
    });

    $("body").on("click", "#submitotz", function () {
        var otz = {};
        var otzyv = {};
        var date = new Date();
        otz.name = $("#otzcustomername").val();
        otz.mail = $("#otzcustomermail").val();
        otz.theme = $("#otztheme").val();
        otz.text = $("#otztext").val();
        otz.time = date.toLocaleString("ru");
        $.get('http://sandbox.web-manufacture.net/maxkrass1/json/otzyv.json', function (result) {
            if (otz.name !=""&&otz.mail !=""&&otz.theme !=""&&otz.text !="") {
                $.each(result, function (index, val) {
                    otzyv[index] = result[index];
                });
                otzyv["otzyv" + (Object.keys(otzyv).length + 1)] = otz;
                $.post('http://sandbox.web-manufacture.net/maxkrass1/json/otzyv.json', JSON.stringify(otzyv));
            }
        });
    });

    $("body").on("click", ".digit", function () {
        var index = this.id;
        var val = shop[this.id];
        var vax = new Constr(val);
        otobraztovar (index, vax);
        });

    $("body").on('change', '[name="domains"]', function () {
        sizechoozen = $(this).val();
    });

    $("body").on("click", ".addtocart", function () {
        var index = this.id;
        if (sizechoozen=="...")
            {$(".dress-info").append('<div class="alert alert-danger" style="margin: 20px 0;"><a href="#" class="close" data-dismiss="alert">×</a>' +
            '<strong>Внимание!</strong> Вы не выбрали размер.</div>');
            }
        else
            {cart[index] = new Constr(shop[index]);
                cart[index].size = sizechoozen;
                barn.set('cart', cart);
                cartlength = r(barn.get('cart'));
                $('#cart').html('<i class="fa fa-shopping-cart fa-lg"></i> '+'Товаров в корзине: '+cartlength);
                parclick(thisclass,thistype,thisbrand)
            }
        sizechoozen = "...";
    });



    $("body").on("click", "#cart", function () {
        $('#content').children().remove();
        $('#jumbo').children().remove();
        sum = 0;
        $.each(cart, function (index, val) {
            displaycart(index,val);
            sum = sum + val.price
        });
        $('#content').append($("<div/>",{class: "col-xs-12 well", id:"feedback6"}));
        $('#feedback6').append($("<h3/>",{class: "leading", text: "К оплате: " + sum +"грн."}));
        $('#content').append($("<form/>",{class: "col-xs-12 well", id:"feedback"}));
        $('#feedback').append($("<div/>",{class: "col-md-4", id:"feedback1"}));
        $('#feedback1').append($("<div/>",{class: "input-group", id:"icustomer"}));
        $('#icustomer').append($("<span/>",{class: "input-group-addon",id:"addon1"}));
        $('#addon1').append($("<i/>",{class:"fa fa-user"}));
        $('#icustomer').append($("<input/>",{class: "form-control",type:"text",placeholder:"Введите Имя и Фамилию",id:"customername"}));
        $('#customername').prop('required',true);
        $('#feedback').append($("<div/>",{class: "col-md-4", id:"feedback2"}));
        $('#feedback2').append($("<div/>",{class: "input-group", id:"iemail"}));
        $('#iemail').append($("<span/>",{class: "input-group-addon",id:"addon2"}));
        $('#addon2').append($("<i/>",{class:"fa fa-at", style:"width: 11px"}));
        $('#iemail').append($("<input/>",{class: "form-control",type:"text",placeholder:"Введите E-mail",id:"customermail"}));
        $('#customermail').prop('required',true);
        $('#feedback').append($("<div/>",{class: "col-md-4", id:"feedback3"}));
        $('#feedback3').append($("<div/>",{class: "input-group", id:"iphone"}));
        $('#iphone').append($("<span/>",{class: "input-group-addon",id:"addon3"}));
        $('#addon3').append($("<i/>",{class:"fa fa-phone"}));
        $('#iphone').append($("<input/>",{class: "form-control",type:"text",placeholder:"Введите номер телефона",id:"customerphone"}));
        $('#customerphone').prop('required',true);
        $('#feedback').append($("<div/>",{class:"clearfix"}));

        $('#feedback').append($("<div/>",{class: "col-md-12", id:"feedback7"}));
        $('#feedback7').append($("<div/>",{class: "input-group", id:"iadress"}));
        $('#iadress').append($("<span/>",{class: "input-group-addon",id:"addon7"}));
        $('#addon7').append($("<i/>",{class:"fa fa-home"}));
        $('#iadress').append($("<input/>",{class: "form-control",type:"text",placeholder:"Введите адрес доставки",id:"customeradress"}));
        $('#customeradress').prop('required',true);
        $('#feedback').append($("<div/>",{class:"clearfix"}));

        $('#feedback').append($("<div/>",{class: "col-md-4", id:"feedback4"}));
        $('#feedback4').append($("<div/>",{class: "input-group", id:"paycard"}));
        $('#paycard').append($("<span/>",{class: "input-group-addon",id:"addon4"}));
        $('#paycard').append($("<span/>",{class: "form-control input-group-addon",id:"addont4"}));
        $('#addon4').append($("<input/>",{type:"radio", id:"karta", name:"radio"}));
        $('#karta').prop('required',true);
        $('#addont4').append($("<i/>",{class:"fa fa-credit-card", style:"margin: 0 3px;"}));
        $('#addont4').append($("<label/>",{for: "karta",text:"Оплата картой",style:"margin-right: 20px;"}));
        $('#feedback').append($("<div/>",{class: "col-md-4", id:"feedback5"}));
        $('#feedback5').append($("<div/>",{class: "input-group", id:"paycash"}));
        $('#paycash').append($("<span/>",{class: "input-group-addon",id:"addon5"}));
        $('#paycash').append($("<span/>",{class: "form-control input-group-addon",id:"addont5"}));
        $('#addon5').append($("<input/>",{type:"radio", id:"nalozhka", name:"radio"}));
        $('#nalozhka').prop('required',true);
        $('#addont5').append($("<i/>",{class:"fa fa-truck", style:"margin: 0 3px;"}));
        $('#addont5').append($("<label/>",{for: "nalozhka",text:"Наложенный платёж",style:"margin-right: 20px;"}));
        $('#feedback').append($("<input/>",{type:"submit", value:"Купить",class:"buy", id:"submit"}));

    });

    $("body").on("click", ".well>.close", function () {
        var closingproduct = ($(this).closest(".well").attr("id"));
        if (cartlength=0){}
        else{
            sum = sum - cart[closingproduct].price;
            delete cart[closingproduct];
            barn.set('cart', cart);
            $('#feedback6 h3').text("К оплате: " + sum +"грн.");
            cartlength = Object.keys(cart).length;
            $('#cart').html('<i class="fa fa-shopping-cart fa-lg"></i> '+'Товаров в корзине: '+cartlength);
            $('#'+closingproduct).remove();
        }
    });


    $("body").on("click", "#submit", function () {
        var zakaz = {};
        var zakazy = {};
        var date = new Date();
        $.each(cart, function (i, v) {
            zakaz[i] = new Constr(v);
        });
        zakaz.time = date.toLocaleString("ru");
        zakaz.name = $("#customername").val();
        zakaz.mail = $("#customermail").val();
        zakaz.phone = $("#customerphone").val();
        zakaz.adress = $("#customeradress").val();
        zakaz.pay = $("input[name=radio]:checked").attr('id');
        zakaz.summa = sum;
        $.get('http://sandbox.web-manufacture.net/maxkrass1/json/zakazy.json', function (result) {
            $.each(result, function (index, val) {
                zakazy[index] = result[index];
            });
            if(zakaz.name != "" && zakaz.mail != "" &&  zakaz.phone != "" && zakaz.adress != "") {
            zakazy["zakaz"+(Object.keys(zakazy).length+1)]=zakaz;
            $.post('http://sandbox.web-manufacture.net/maxkrass1/json/zakazy.json',JSON.stringify(zakazy),function(){
                $(".container").append('<div class="col-xs-offset-3 col-xs-9 alert alert-success" style="margin-top: 20px">' +
                    '<a href="#" class="close" data-dismiss="alert">×</a>' +
                    '<strong>Спасибо!</strong> Ваш заказ обрабатывается, мы с вами свяжемся.</div>');});
            console.log(zakazy);
            console.log(zakaz);
            }
        });
    });


    $("body").on("submit","form", function (e) {
        e.preventDefault();
    });


    $("body").on('afterCreateImg', function() {
        $('.flexslider').flexslider({
            animation: "slide",
            controlNav: "thumbnails"
        });
    });

    $(document).on('keyup','#search', function() {
        var filter = $('#search').val();
        $('#content').children().remove();
        $('#jumbo').children().remove();
        $.each(shop,(function(i,v){
            if((v.heading).search(new RegExp(filter, "i")) < 0){}
            else{otobraz(i,v);}
        }));
    });


});
