~function fn(){
  $.fn.gotop = function(){
    function GoTop($node){
      this.$ct = $node;
      this.$target;
      this.init()
      this.bind()
    }
    GoTop.prototype.init = function(){
      this.$target = $('<div class="go-top">GO</div>').css({display:"none"});
			this.$ct.append(this.$target);
    }
    GoTop.prototype.bind = function(){
      var self = this;
      $(window).on("scroll",function(){
        var scrollTop = $(window).scrollTop();
        scrollTop>300?self.$target.show():self.$target.hide();
      });
      this.$target.on("click",function(){
        var timer = setInterval(function(){
          var nextScroll = $(window).scrollTop() - 200;
            if(nextScroll<=0){
              $(window).scrollTop(0);
              window.clearInterval(timer)
              return;
            }
          $(window).scrollTop(nextScroll);
          },100)   
      })
    }
    new GoTop(this);
  }
}()

$("body").gotop()
