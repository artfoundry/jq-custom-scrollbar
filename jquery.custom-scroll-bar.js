(function($) {

    $.extend($.fn, {
        settings: {},

        init: function(options){
            this.settings = options || {
                $element : this,
                barWidth : "8px",
                barHeight : "50%",
                barColor : "#999",
                showBarBorder : false,
                barBorderColor : "#999",
                trackWith : "10px",
                trackColor : "#fff",
                trackOpacity : 1,
                showTrackBorder : false,
                trackBorderColor : "#000",
                capRadius : "3px",
                caps : true
            };
            this.render();
            this.scroll();
        },

        render: function () {
            var $elem = this.settings.$element,
                trackHeight = $elem.innerHeight(),
                contentHeight = $elem[0].scrollHeight,
                $container = $elem.append("<div class='sb-track'><div class='sb-bar'></div></div>"),
                $trackBar = $container.find(".sb-track"),
                $scrollBar = $trackBar.find(".sb-bar");

            $elem.addClass("sb-container");
            $trackBar.height(trackHeight + "px");
            if (contentHeight > trackHeight)
                $scrollBar.height((trackHeight / contentHeight) * 100 + "%");
            else
                $trackBar.hide();
        },

        scroll: function() {
            var $elem = this.settings.$element,
                trackHeight = $elem.innerHeight(),
                contentHeight = $elem[0].scrollHeight,
                $container = $elem.append("<div class='sb-track'><div class='sb-bar'></div></div>"),
                $trackBar = $container.find(".sb-track"),
                $scrollBar = $trackBar.find(".sb-bar"),
                scrollPos = $container.scrollTop();
            $container.scroll(function(event){
                
            });
        }
    });
})(jQuery);