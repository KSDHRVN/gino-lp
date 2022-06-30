var scrolltotop = {
  setting: {
      startline: 100,
      scrollto: 0,
      scrollduration: 1e3,
      fadeduration: [500, 100]
  },
  controlHTML: '<span class="block md:hidden p-4 text-white bg-blue rounded-[100px] mr-[-1rem]"><svg class="w-7 h-7 fill-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M352 352c-8.188 0-16.38-3.125-22.62-9.375L192 205.3l-137.4 137.4c-12.5 12.5-32.75 12.5-45.25 0s-12.5-32.75 0-45.25l160-160c12.5-12.5 32.75-12.5 45.25 0l160 160c12.5 12.5 12.5 32.75 0 45.25C368.4 348.9 360.2 352 352 352z"/></svg></span>',
  controlattrs: {
      offsetx: 33,
      offsety: 150
  },
  anchorkeyword: "#top",
  state: {
      isvisible: !1,
      shouldvisible: !1
  },
  scrollup: function() {
      this.cssfixedsupport || this.$control.css({
          opacity: 0
      });
      var a = isNaN(this.setting.scrollto) ? this.setting.scrollto : parseInt(this.setting.scrollto);
      a = "string" == typeof a && 1 == jQuery("#" + a).length ? jQuery("#" + a).offset().top : 0, this.$body.animate({
          scrollTop: a
      }, this.setting.scrollduration)
  },
  keepfixed: function() {
      var a = jQuery(window),
          b = a.scrollLeft() + a.width() - this.$control.width() - this.controlattrs.offsetx,
          c = a.scrollTop() + a.height() - this.$control.height() - this.controlattrs.offsety;
      this.$control.css({
          left: b + "px",
          top: c + "px"
      })
  },
  togglecontrol: function() {
      var a = jQuery(window).scrollTop();
      this.cssfixedsupport || this.keepfixed(), this.state.shouldvisible = a >= this.setting.startline ? !0 : !1, this.state.shouldvisible && !this.state.isvisible ? (this.$control.stop().animate({
          opacity: 1
      }, this.setting.fadeduration[0]), this.state.isvisible = !0) : 0 == this.state.shouldvisible && this.state.isvisible && (this.$control.stop().animate({
          opacity: 0
      }, this.setting.fadeduration[1]), this.state.isvisible = !1)
  },
  init: function() {
      jQuery(document).ready(function(a) {
          var b = scrolltotop,
              c = document.all;
          b.cssfixedsupport = !c || c && "CSS1Compat" == document.compatMode && window.XMLHttpRequest, b.$body = a(window.opera ? "CSS1Compat" == document.compatMode ? "html" : "body" : "html,body"), b.$control = a('<div id="topcontrol">' + b.controlHTML + "</div>").css({
              position: b.cssfixedsupport ? "fixed" : "absolute",
              bottom: b.controlattrs.offsety,
              right: b.controlattrs.offsetx,
              opacity: 0,
              cursor: "pointer"
          }).attr({
              title: "Trở lên đầu trang"
          }).click(function() {
              return b.scrollup(), !1
          }).appendTo("body"), document.all && !window.XMLHttpRequest && "" != b.$control.text() && b.$control.css({
              width: b.$control.width()
          }), b.togglecontrol(), a('a[href="' + b.anchorkeyword + '"]').click(function() {
              return b.scrollup(), !1
          }), a(window).bind("scroll resize", function() {
              b.togglecontrol()
          })
      })
  }
};
scrolltotop.init();