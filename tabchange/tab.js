~function(){
  // 新建SwitchTab构造函数；
  $.fn.switchTab = function(){
    function SwitchTab($node){
      this.$tab = $node;
      this.bind();
    }
    // 绑定方法
    SwitchTab.prototype.bind = function() {
      this.$tab.on("click","li",function(){
        $this = $(this);
        $this.siblings().removeClass("active");
        $this.addClass("active");
        $this.parents(".wrap").find(".pane1").removeClass("active");
        $this.parents(".wrap").find(".pane1").eq($this.index()).addClass("active");

      })
    }
    // 输出当前类的实例
    new SwitchTab($(this));
  }
}()
