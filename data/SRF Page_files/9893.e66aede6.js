(self.webpackChunksrf_cms=self.webpackChunksrf_cms||[]).push([[9893],{50681:(s,e,t)=>{"use strict";t.d(e,{MG:()=>l,VS:()=>m,wn:()=>u,S1:()=>_,F0:()=>b});var i=t(52807),r=t(69276),n=t(23790),o=t(52709),a="js-swipeable-area",p="swipeable-area__button--inactive",g="swipeable-area__button-container--hidden",h=!!(window.CSS&&window.CSS.supports||window.supportsCSS)&&CSS.supports("scroll-snap-align: start")&&CSS.supports("scroll-behavior: smooth"),c="IntersectionObserver"in window&&"IntersectionObserverEntry"in window&&"intersectionRatio"in window.IntersectionObserverEntry.prototype,l="srf.swipeableArea.scroll-right",m="srf.swipeableArea.scroll-left",u="srf.swipeableArea.scroll-to";function _(){var s=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";o(".".concat(a)).filter(((s,e)=>!o(e).data("swipeabiliy-initialized"))).each(((e,t)=>{new b(o(t),s),o(t).data("swipeabiliy-initialized",!0)}))}class b{constructor(s){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";this.$element=s,this.$innerContainer=o(".".concat("js-swipeable-area-wrapper"),this.$element),this.$items=[],this.$buttonContainer=o(".".concat("js-swipeable-button-container"),this.$element),this.$buttonLeft=o(".".concat("js-swipeable-area-button-left"),this.$element),this.$buttonRight=o(".".concat("js-swipeable-area-button-right"),this.$element),this.$maskLeft=o(".".concat("js-swipeable-area-mask-left"),this.$element),this.$maskRight=o(".".concat("js-swipeable-area-mask-right"),this.$element),this.itemPositions=[],this.nrOfPotentialVisibleItems=0,this.interactionMeasureString=e,this.enforceJsScroll=!0===this.$element.data("enforce-js-scroll"),this.initOnce(),this.hasScrollableOverflow()?this.initSwipeability():this.$buttonContainer.addClass(g)}initOnce(){var s=this;if(this.currentBreakpoint=i.Z.getBreakpoint(),n.ZP.subscribeDebounced((()=>{var s=i.Z.getBreakpoint();s!=this.currentBreakpoint&&(this.currentBreakpoint=s,this.initSwipeability())})),o(window).on("srf.styles.loaded",(()=>this.initSwipeability())),this.$element.on("srf.swipeableArea.reinitialize srf.swipeable.content-changed",(()=>this.initSwipeability())),this.$element.on(l,(()=>this.pageForward())),this.$element.on(m,(()=>this.pageBack())),this.$element.on(u,(function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;return s.scrollToPosition(t,i)})),this.$buttonLeft.add(this.$maskLeft).on("mousedown touchstart",(()=>this.pageBack())),this.$buttonRight.add(this.$maskRight).on("mousedown touchstart",(()=>this.pageForward())),c){var e={root:this.$innerContainer[0],rootMargin:"0px",threshold:[.9]};this.rightEdgeObserver=new IntersectionObserver((s=>{s.forEach((s=>this.$buttonRight.toggleClass(p,s.intersectionRatio>=.9)))}),e),this.leftEdgeObserver=new IntersectionObserver((s=>{s.forEach((s=>this.$buttonLeft.toggleClass(p,s.intersectionRatio>=.9)))}),e)}}initSwipeability(){this.$items=o(".".concat("js-swipeable-area-item"),this.$innerContainer),this.$items.off("click.srf.swipeable-area-desktop").on("click.srf.swipeable-area-desktop",(s=>this.onTeaserClick(s))),this.scrollToPosition(0,0);var s=this.hasScrollableOverflow();this.$buttonContainer.toggleClass(g,!s),this.$maskLeft.add(this.$maskRight).toggleClass("swipeable-area__mask--hidden",!s),i.Z.isDesktopUp()?(this.registerDesktopListeners(),this.updateFlyingFocus(),h&&!this.enforceJsScroll||this.initItemPositions()):this.deregisterDesktopListeners()}initItemPositions(){this.itemPositions=[];var s=this.$innerContainer.children().first().offset().left;this.$items.each(((e,t)=>{var i=o(t).children().first(),r=i.offset().left-s,n=i.innerWidth();this.itemPositions.push({left:r,center:r+n/2,right:r+n})})),this.setNrOfPotentialVisibleItems()}setNrOfPotentialVisibleItems(){var s=Number.parseInt(window.getComputedStyle(this.$innerContainer[0],"::before").getPropertyValue("content").replace(/\"/g,""),10);Number.isInteger(s)?this.nrOfPotentialVisibleItems=s:this.nrOfPotentialVisibleItems=i.Z.isSmartphone()?1:3}registerDesktopListeners(){c&&this.$items.length>0&&(this.rightEdgeObserver.observe(this.$items.last().find(".js-teaser")[0]),this.leftEdgeObserver.observe(this.$items.first().find(".js-teaser")[0]))}deregisterDesktopListeners(){c&&this.$items.length>0&&(this.rightEdgeObserver.unobserve(this.$items.last()[0]),this.leftEdgeObserver.unobserve(this.$items.first()[0]))}onTeaserClick(s){var e=o(s.currentTarget);r.Z.eventIsMouseclick(s)&&o(":focus").blur();var t=!0;if(this.isOutOfBoundsLeft(e)?this.pageBack():this.isOutOfBoundsRight(e)?this.pageForward():t=!1,t)return s.preventDefault(),s.stopPropagation(),!1}hasScrollableOverflow(){return this.$innerContainer[0].scrollWidth>this.$innerContainer.innerWidth()}getTargetItemIndex(s,e){var t=this.nrOfPotentialVisibleItems%2==0;return"forward"===e?t?s+this.nrOfPotentialVisibleItems/2-1:s+(this.nrOfPotentialVisibleItems-1)/2:t?s-this.nrOfPotentialVisibleItems/2+1:s-(this.nrOfPotentialVisibleItems+1)/2}getCenterTargetPosition(s,e){var t=this.nrOfPotentialVisibleItems%2==0,i=(this.itemPositions[1].left-this.itemPositions[0].right)/2;return t?"forward"===e?this.itemPositions[s].right+i:this.itemPositions[s].left-i:this.itemPositions[s].center}pageForward(){if(this.track("click-right"),!h||this.enforceJsScroll){var s=this.$innerContainer.width(),e=this.$innerContainer.scrollLeft()+s,t=this.itemPositions.findIndex((s=>s.right>e)),i=this.getTargetItemIndex(t,"forward"),r=i>=this.itemPositions.length||-1===t;this.$buttonRight.toggleClass(p,r),this.$buttonLeft.removeClass(p),r&&(i=this.itemPositions.length-1);var n=this.getCenterTargetPosition(i,"forward")-s/2;this.scrollToPosition(n)}else{var o=this.$innerContainer.width();this.$innerContainer.scrollLeft(this.$innerContainer.scrollLeft()+o)}}pageBack(){if(this.track("click-left"),!h||this.enforceJsScroll){var s=this.$innerContainer.width(),e=this.$innerContainer.scrollLeft(),t=this.itemPositions.findIndex((s=>s.right>e)),i=this.getTargetItemIndex(t,"backward"),r=i<0;this.$buttonLeft.toggleClass(p,r),this.$buttonRight.removeClass(p),r&&(i=0);var n=this.getCenterTargetPosition(i,"backward")-s/2;this.scrollToPosition(n)}else{var o=this.$innerContainer.width(),a=Math.max(0,this.$innerContainer.scrollLeft()-o);this.$innerContainer.scrollLeft(a)}}scrollToPosition(s,e){e=void 0===e?600:e,this.enforceJsScroll||0!==e&&!h?(e=e/1200*Math.abs(this.$innerContainer.scrollLeft()-s),e=Math.max(e,200),this.$innerContainer.stop(!0,!1).animate({scrollLeft:s},e,"easeInOutSine")):this.$innerContainer.scrollLeft(s)}updateFlyingFocus(){o(document).trigger("flyingfocus:move")}isItemCompletelyInView(s){return!this.isOutOfBoundsLeft(s)&&!this.isOutOfBoundsRight(s)}isOutOfBoundsLeft(s){return s.offset().left<this.$innerContainer.offset().left}isOutOfBoundsRight(s){return Math.floor(s.offset().left+s.outerWidth())-1>this.$innerContainer.offset().left+this.$innerContainer.outerWidth()}track(s){o(window).trigger(this.interactionMeasureString,{event_source:this.$element.data("event-source"),event_name:this.$element.data("event-name"),event_value:s})}}},12689:(s,e,t)=>{"use strict";s.exports=t.p+"images/bt_badewetter_18@2x.ad966632.png"},54495:(s,e,t)=>{"use strict";s.exports=t.p+"images/bt_webcam.1a3e3b81.png"},35004:(s,e,t)=>{"use strict";s.exports=t.p+"images/bt_webcam_18@2x.ca9a327f.png"},44163:(s,e,t)=>{"use strict";s.exports=t.p+"images/21_grdu_sn.66021468.png"},93565:(s,e,t)=>{"use strict";s.exports=t.p+"images/21_grdu_sn@2x.680dbf99.png"},18385:(s,e,t)=>{"use strict";s.exports=t.p+"images/grdu.9ae1052e.png"},62080:(s,e,t)=>{"use strict";s.exports=t.p+"images/grdu@2x.b5738cdb.png"},2674:(s,e,t)=>{"use strict";s.exports=t.p+"images/grdu_ra.f80185a1.png"},7794:(s,e,t)=>{"use strict";s.exports=t.p+"images/grdu_ra@2x.503b9b74.png"},23404:(s,e,t)=>{"use strict";s.exports=t.p+"images/grdu_shra.e930de99.png"},72129:(s,e,t)=>{"use strict";s.exports=t.p+"images/grdu_shra@2x.4ee9b37f.png"},76127:(s,e,t)=>{"use strict";s.exports=t.p+"images/grdu_shra_bl.c932ad22.png"},94003:(s,e,t)=>{"use strict";s.exports=t.p+"images/grdu_shra_bl@2x.16e1adac.png"},48413:(s,e,t)=>{"use strict";s.exports=t.p+"images/grdu_shsn.989dd135.png"},81346:(s,e,t)=>{"use strict";s.exports=t.p+"images/grdu_shsn@2x.07f7c7d4.png"},80487:(s,e,t)=>{"use strict";s.exports=t.p+"images/grdu_shsn_bl.68f234e7.png"},64411:(s,e,t)=>{"use strict";s.exports=t.p+"images/grdu_shsn_bl@2x.c8452a82.png"},81887:(s,e,t)=>{"use strict";s.exports=t.p+"images/grdu_shsr.dd4c6443.png"},77785:(s,e,t)=>{"use strict";s.exports=t.p+"images/grdu_shsr@2x.40d89d89.png"},79191:(s,e,t)=>{"use strict";s.exports=t.p+"images/grdu_shsr_bl.9fb884d7.png"},68203:(s,e,t)=>{"use strict";s.exports=t.p+"images/grdu_shsr_bl@2x.b851f012.png"},90563:(s,e,t)=>{"use strict";s.exports=t.p+"images/grdu_sn.89317b55.png"},6887:(s,e,t)=>{"use strict";s.exports=t.p+"images/grdu_sn@2x.29f76a88.png"},60814:(s,e,t)=>{"use strict";s.exports=t.p+"images/grdu_sr.76ce0749.png"},67338:(s,e,t)=>{"use strict";s.exports=t.p+"images/grdu_sr@2x.d751bea3.png"},971:(s,e,t)=>{"use strict";s.exports=t.p+"images/grhe.c643975f.png"},45053:(s,e,t)=>{"use strict";s.exports=t.p+"images/grhe@2x.71e5229b.png"},94447:(s,e,t)=>{"use strict";s.exports=t.p+"images/grhe_ra.a8d1028c.png"},9390:(s,e,t)=>{"use strict";s.exports=t.p+"images/grhe_ra@2x.85ace75a.png"},59026:(s,e,t)=>{"use strict";s.exports=t.p+"images/mo.8702d6c4.png"},91200:(s,e,t)=>{"use strict";s.exports=t.p+"images/mo@2x.5205203b.png"},19841:(s,e,t)=>{"use strict";s.exports=t.p+"images/mo_grhe.a130fd8c.png"},59218:(s,e,t)=>{"use strict";s.exports=t.p+"images/mo_grhe@2x.0f63eacf.png"},52003:(s,e,t)=>{"use strict";s.exports=t.p+"images/mo_grhe_shra.3006ac6f.png"},69601:(s,e,t)=>{"use strict";s.exports=t.p+"images/mo_grhe_shra@2x.12a628da.png"},44315:(s,e,t)=>{"use strict";s.exports=t.p+"images/mo_grhe_shra_bl.e77cda3d.png"},5841:(s,e,t)=>{"use strict";s.exports=t.p+"images/mo_grhe_shra_bl@2x.4ee79609.png"},33613:(s,e,t)=>{"use strict";s.exports=t.p+"images/mo_grhe_shsn.aa0f7c86.png"},59097:(s,e,t)=>{"use strict";s.exports=t.p+"images/mo_grhe_shsn@2x.f3e2c9d1.png"},82751:(s,e,t)=>{"use strict";s.exports=t.p+"images/mo_grhe_shsn_bl.655697c9.png"},26591:(s,e,t)=>{"use strict";s.exports=t.p+"images/mo_grhe_shsn_bl@2x.07896c91.png"},38071:(s,e,t)=>{"use strict";s.exports=t.p+"images/mo_grhe_shsr.00b52f1d.png"},79858:(s,e,t)=>{"use strict";s.exports=t.p+"images/mo_grhe_shsr@2x.9aa5ef23.png"},94486:(s,e,t)=>{"use strict";s.exports=t.p+"images/mo_grhe_shsr_bl.be3627d5.png"},47129:(s,e,t)=>{"use strict";s.exports=t.p+"images/mo_grhe_shsr_bl@2x.807327c3.png"},6073:(s,e,t)=>{"use strict";s.exports=t.p+"images/mo_klhe.c6a1befd.png"},97828:(s,e,t)=>{"use strict";s.exports=t.p+"images/mo_klhe@2x.2a3c842e.png"},96755:(s,e,t)=>{"use strict";s.exports=t.p+"images/mo_klhe_shra.24fe4db9.png"},36924:(s,e,t)=>{"use strict";s.exports=t.p+"images/mo_klhe_shra@2x.b165a04f.png"},38399:(s,e,t)=>{"use strict";s.exports=t.p+"images/mo_klhe_shra_bl.dbdfc443.png"},57504:(s,e,t)=>{"use strict";s.exports=t.p+"images/mo_klhe_shra_bl@2x.8adb39aa.png"},19350:(s,e,t)=>{"use strict";s.exports=t.p+"images/mo_klhe_shsn.be431b99.png"},78412:(s,e,t)=>{"use strict";s.exports=t.p+"images/mo_klhe_shsn@2x.0b9f0c6b.png"},76176:(s,e,t)=>{"use strict";s.exports=t.p+"images/mo_klhe_shsn_bl.fd8e84f2.png"},96874:(s,e,t)=>{"use strict";s.exports=t.p+"images/mo_klhe_shsn_bl@2x.1531315a.png"},78298:(s,e,t)=>{"use strict";s.exports=t.p+"images/mo_klhe_shsr.7ad71c08.png"},13486:(s,e,t)=>{"use strict";s.exports=t.p+"images/mo_klhe_shsr@2x.73c699ae.png"},90983:(s,e,t)=>{"use strict";s.exports=t.p+"images/mo_klhe_shsr_bl.dbe7fb52.png"},29758:(s,e,t)=>{"use strict";s.exports=t.p+"images/mo_klhe_shsr_bl@2x.d18f59ef.png"},66596:(s,e,t)=>{"use strict";s.exports=t.p+"images/mo_ne.36b25056.png"},9903:(s,e,t)=>{"use strict";s.exports=t.p+"images/mo_ne@2x.c333c05c.png"},26641:(s,e,t)=>{"use strict";s.exports=t.p+"images/ne.c08b2289.png"},25234:(s,e,t)=>{"use strict";s.exports=t.p+"images/ne@2x.bd704a61.png"},80774:(s,e,t)=>{"use strict";s.exports=t.p+"images/rainbow.691cc3e9.png"},82838:(s,e,t)=>{"use strict";s.exports=t.p+"images/so.146b2e74.png"},71186:(s,e,t)=>{"use strict";s.exports=t.p+"images/so@2x.5e412a1a.png"},37311:(s,e,t)=>{"use strict";s.exports=t.p+"images/so_grhe.84de1a44.png"},34175:(s,e,t)=>{"use strict";s.exports=t.p+"images/so_grhe@2x.803bef5e.png"},8685:(s,e,t)=>{"use strict";s.exports=t.p+"images/so_grhe_shra.217ae522.png"},30868:(s,e,t)=>{"use strict";s.exports=t.p+"images/so_grhe_shra@2x.3c5e436b.png"},92579:(s,e,t)=>{"use strict";s.exports=t.p+"images/so_grhe_shra_bl.c53d70c6.png"},22796:(s,e,t)=>{"use strict";s.exports=t.p+"images/so_grhe_shra_bl@2x.04ccbd32.png"},55597:(s,e,t)=>{"use strict";s.exports=t.p+"images/so_grhe_shsn.8d485356.png"},45572:(s,e,t)=>{"use strict";s.exports=t.p+"images/so_grhe_shsn@2x.c720f647.png"},95618:(s,e,t)=>{"use strict";s.exports=t.p+"images/so_grhe_shsn_bl.ae177309.png"},51869:(s,e,t)=>{"use strict";s.exports=t.p+"images/so_grhe_shsn_bl@2x.bac99a5d.png"},58129:(s,e,t)=>{"use strict";s.exports=t.p+"images/so_grhe_shsr.5f64322b.png"},98653:(s,e,t)=>{"use strict";s.exports=t.p+"images/so_grhe_shsr@2x.77557298.png"},28018:(s,e,t)=>{"use strict";s.exports=t.p+"images/so_grhe_shsr_bl.bef2668c.png"},88927:(s,e,t)=>{"use strict";s.exports=t.p+"images/so_grhe_shsr_bl@2x.eea8419e.png"},22333:(s,e,t)=>{"use strict";s.exports=t.p+"images/so_klhe.f8b504a6.png"},92303:(s,e,t)=>{"use strict";s.exports=t.p+"images/so_klhe@2x.bd1feb06.png"},59997:(s,e,t)=>{"use strict";s.exports=t.p+"images/so_klhe_shra.bf16038d.png"},51694:(s,e,t)=>{"use strict";s.exports=t.p+"images/so_klhe_shra@2x.d2590433.png"},36743:(s,e,t)=>{"use strict";s.exports=t.p+"images/so_klhe_shra_bl.e6671fb9.png"},41382:(s,e,t)=>{"use strict";s.exports=t.p+"images/so_klhe_shra_bl@2x.f090ae2d.png"},94646:(s,e,t)=>{"use strict";s.exports=t.p+"images/so_klhe_shsn.2710bab3.png"},83114:(s,e,t)=>{"use strict";s.exports=t.p+"images/so_klhe_shsn@2x.e1ad47c3.png"},69119:(s,e,t)=>{"use strict";s.exports=t.p+"images/so_klhe_shsn_bl.a97db989.png"},49870:(s,e,t)=>{"use strict";s.exports=t.p+"images/so_klhe_shsn_bl@2x.600738e8.png"},76718:(s,e,t)=>{"use strict";s.exports=t.p+"images/so_klhe_shsr.d587e9e3.png"},61732:(s,e,t)=>{"use strict";s.exports=t.p+"images/so_klhe_shsr@2x.cc09eb8e.png"},27798:(s,e,t)=>{"use strict";s.exports=t.p+"images/so_klhe_shsr_bl.ad707677.png"},68201:(s,e,t)=>{"use strict";s.exports=t.p+"images/so_klhe_shsr_bl@2x.398168a8.png"},96096:(s,e,t)=>{"use strict";s.exports=t.p+"images/so_ne.a42163e9.png"},21138:(s,e,t)=>{"use strict";s.exports=t.p+"images/so_ne@2x.e1d29ecf.png"}}]);
//# sourceMappingURL=9893.e66aede6.js.map