$(function() {

    //搜索切换
    (function() {
        var aLi = $('#menu li');
        var oText = $('#search form').find('.text');
        var arrText = [
            '例如：荷棠鱼坊烧鱼 或 樱花日本料理',
            '例如：昌平区育新站龙旗广场2号楼609室',
            '例如：万达影院双人情侣券',
            '例如：东莞出事了，大老虎是谁？',
            '例如：北京初春降雪，天气变幻莫测'
        ];
        var iNow = 0;
        oText.val(arrText[iNow]);
        aLi.each(function(index) {
            $(this).click(function() {
                aLi.attr('class', 'gradient');
                $(this).attr('class', 'active');
                iNow = index;
                oText.val(arrText[iNow]);
            })
        })
        oText.focus(function() {
            if ($(this).val() == arrText[iNow]) {
                $(this).val('');
            }
        });
        oText.blur(function() {
            if ($(this).val() == '') {
                $(this).val(arrText[iNow]);
            }
        });



    })();
    //update
    (function() {
        var arrData = [{
            'name': '萱萱',
            'time': 4,
            'title': '那些灿烂华美的瞬间'
        }, {
            'name': '畅畅',
            'time': 5,
            'title': '广东3天抓获涉黄疑犯'
        }, {
            'name': '萱萱',
            'time': 6,
            'title': '国台办回应王郁琦'
        }, {
            'name': '畅畅',
            'time': 7,
            'title': '那些灿烂华美的瞬间'
        }, {
            'name': '萱萱',
            'time': 8,
            'title': '那些灿烂华美的瞬间'
        }, {
            'name': '畅畅',
            'time': 9,
            'title': '广东3天抓获涉黄疑犯#'
        }, {
            'name': '萱萱',
            'time': 10,
            'title': '国台办回应王郁琦'
        }, {
            'name': '畅畅',
            'time': 11,
            'title': '那些灿烂华美的瞬间'
        }];
        var oUl = $('.update ul');
        var iH = oUl.find('li').height();
        var str = '';
        for (var i = 0; i < arrData.length; i++) {
            str += '<li><a href="#"><strong>' + arrData[i].name + '</strong><span>' + arrData[i].time + '分钟前</span>写了一篇新文章：' + arrData[i].title + '</a></li>'
        }
        $(str).appendTo(oUl);
        // oUl.animate({'top':-iH},3000)

        var disY = 0;
        var i = 0;
        var oS = $('#updateUpBtn');
        var oX = $('#updateDownBtn');

        oX.click(function() {
            i++;
            if (i == 8) {
                i = 0;
            };
            disY = -30 * i + 'px';
            oUl.animate({
                'top': disY
            }, 700);
        });
        oS.click(function() {
            i--;
            if (i == -1) {
                i = 7;
            }
            disY = -30 * i + 'px';
            oUl.animate({
                'top': disY
            }, 700);
        })


        setInterval(function tab1() {
            i++;
            if (i == 8) {
                i = 0
            }
            disY = -30 * i + 'px';
            oUl.animate({
                'top': disY
            }, 700);

        }, 2650);
    })();
    //选项卡切换
    (function() {
       fnTab( $('.tabNav1'), $('.tabCon1'), 'click' );
		fnTab( $('.tabNav2'), $('.tabCon2'), 'click' );
		fnTab( $('.tabNav3'), $('.tabCon3'), 'mouseover' );
		fnTab( $('.tabNav4'), $('.tabCon4'), 'mouseover' );


        function fnTab(oNav, aCon, sEvent) {
            var aElem = oNav.children();
            aCon.hide().eq(0).show();

            aElem.each(function(index) {
                $(this).on(sEvent, function() {

                    $(this).addClass('active').siblings().removeClass('active');
                    $(this).removeClass('gradient').siblings().addClass('gradient');
                     aElem.find('a').attr('class','triangle_down_gray')
                    $(this).find('a').attr('class', 'triangle_down_red');


                    aCon.hide().eq(index).show();

                })



            })
        }

    })();
    // 自动播放的焦点图
    (function() {
 var aUl = $('#recommend ul li');
 var aOl = $('#recommend ol li');var i =0;
 var oP = $('#recommend').find('p');
 var arr = [ '爸爸去哪儿啦~', '人像摄影中的光影感', '娇柔妩媚、美艳大方' ];
 aUl.eq(0).fadeIn().siblings().fadeOut();
aOl.each(function(index){
    $(this).click(function(){
        $(this).addClass('active').siblings().removeClass('active');
        aUl.eq(index).fadeIn().siblings().fadeOut();
        oP.html(arr[index]);
    });
})

setInterval(function(){
i++;if(i==3){i=0};
aOl.eq(i).addClass('active').siblings().removeClass('active');
 aUl.eq(i).fadeIn().siblings().fadeOut();
 oP.html(arr[i]);
},2400)




    })();
    //日历提示说明
   (function (){
        var aSpan = $('.calendar h3 span');
        var aImg = $('.calendar .img');
        var oPrompt = $('.tody_info');
        var oImg = oPrompt.find('img');
        var oStrong = oPrompt.find('strong');
        var oP = oPrompt.find('p');
        
        aImg.hover(function (){
            var iTop = $(this).parent().position().top - 30;
            var iLeft = $(this).parent().position().left + 55;
            var index = $(this).parent().index()%aSpan.size();
            
            // console.log( $(this).parent().index()%aSpan.size() );
            oPrompt.show().css({ 'left': iLeft, 'top': iTop });
            oP.text($(this).attr('info'));
            oImg.attr('src', $(this).attr('src'));
            oStrong.text( aSpan.eq(index).text() );
            console.log()
            
        }, function (){
            oPrompt.hide();
        });
    })();

    //BBS高亮显示
    (function() {
        $('#bbs ol li').mouseover(function() {
            $(this).addClass('active').siblings().removeClass('active');
        })


    })();
    // HOT鼠标提示效果
    (function() {
        var arr = [
            '',
            '用户1<br />人气1',
            '用户名：性感宝贝<br />区域：朝阳CBD<br />人气：124987',
            '用户3<br />人气3',
            '用户4<br />人气4',
            '用户5<br />人气5',
            '用户6<br />人气6',
            '用户7<br />人气7',
            '用户8<br />人气8',
            '用户9<br />人气9',
            '用户10<br />人气10'
        ];
        $('.hot_area li').mouseover(function() {
            if ($(this).index() == 0) {
                return;
            }
            $('.hot_area li p').remove();
            $(this).append('<p style="width: ' + ($(this).width() - 12) + 'px;height: ' + ($(this).height() - 12) + 'px;">' + arr[$(this).index()] + '</p>')

        });
    })();

})
