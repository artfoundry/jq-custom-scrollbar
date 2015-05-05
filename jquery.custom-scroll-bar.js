(function($) {

    $.extend($.fn, {
        settings : {},
        elemObj : {},

        sbInit: function(options){
            this.elemObj.$element = this;
            this.settings = options || {
                barWidth : "8px",
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
            this.sbRender();
            this.sbScroll();
        },

        sbRender: function () {
            this.elemObj.trackHeight = this.elemObj.$element.innerHeight(),
            this.elemObj.contentHeight = this.elemObj.$element[0].scrollHeight,
            this.elemObj.$container = this.elemObj.$element.append("<div class='sb-track'><div class='sb-bar'></div></div>"),
            this.elemObj.$trackBar = this.elemObj.$container.find(".sb-track"),
            this.elemObj.$scrollBar = this.elemObj.$trackBar.find(".sb-bar");

            this.elemObj.$element.addClass("sb-container");
            this.elemObj.$trackBar.height(this.elemObj.trackHeight + "px");
            if (this.elemObj.contentHeight > this.elemObj.trackHeight)
                this.elemObj.$scrollBar.height((this.elemObj.trackHeight / this.elemObj.contentHeight) * 100 + "%");
            else
                this.elemObj.$trackBar.hide();
        },

        sbScroll: function() {
            var scrollPos = 0,
                newPos = "",
                sbWindow = this,
                trackOffset = 0;
            this.elemObj.$container.scroll(function(event){
                scrollPos = sbWindow.elemObj.$element.scrollTop();
                //trackOffset = sbWindow.elemObj.$trackBar.offset().top;
                newPos = Math.round((scrollPos / sbWindow.elemObj.contentHeight) * (sbWindow.elemObj.trackHeight)) + scrollPos;
                if(scrollPos < sbWindow.elemObj.contentHeight - sbWindow.elemObj.trackHeight)
                    sbWindow.elemObj.$scrollBar.css("top", newPos + "px");
                $("#pos").text(scrollPos + ", " + newPos);
            });
        }
    });
})(jQuery);