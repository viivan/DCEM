!function(i){"use strict";i.ajaxChimp={init:function(a,t){i(a).ajaxChimp(t)}},i.fn.ajaxChimp=function(a){return i(this).each(function(t,n){var e=i(n),s=e.find("input[type=email]"),r=e.find("label[for="+s.attr("id")+"]"),c=e.find("button"),o=a.url.replace("/post?","/post-json?").concat("&c=?");e.submit(function(){function a(i){if(c.html("Subscribe"),e.find("input").prop("disabled",!1),"success"===i.result)t='<i class="fa fa-check"></i> Thank you. We have sent you a confirmation email.',e.find(".input-group").hide(),analytics.track("Signed up to Newsletter");else{try{var a=i.msg.split(" - ",2);if(void 0===a[1])t=i.msg;else{parseInt(a[0],10).toString()===a[0]?(a[0],t=a[1]):(-1,t=i.msg)}}catch(a){-1,t=i.msg}t='<i class="fa fa-exclamation-circle"></i> '+t}r.html(t),r.show(2e3)}var t,n={},s=e.serializeArray();return i.each(s,function(i,a){n[a.name]=a.value}),i.ajax({url:o,data:n,success:a,dataType:"jsonp",error:function(i,a){console.log("MailChimp ajax submit error: "+a)}}),e.find("input").prop("disabled",!0),c.html('<i class="fa fa-spinner fa-spin"></i>'),!1})}),this}}(jQuery);
$(function(){var i=null;$(".search-box").on("keyup",function(){var e=$(this).val(),t=algoliasearch(window.ALGOLIA.applicationId,window.ALGOLIA.searchApiKey),l=t.initIndex("docs");e?(i=e,l.search(e,function(e,t){if(t.query===i){var l='<ul class="topics__list list-unstyled">';t.hits.forEach(function(i){var e='<li class="topics__list__item"><a href="{{article.url}}" class="topics__list__link"><h4 class="topics__list__title">{{article.title}}</h4><p>{{article.description}}</p></a></li>';e=e.replace("{{article.url}}",i.url),e=e.replace("{{article.title}}",i._highlightResult.title.value),e=e.replace("{{article.description}}",i._highlightResult.text.value),l+=e}),l+="</ul>",$(".container.search-results .hits").html(l)}}),$(".container.content").addClass("hidden"),$(".container.search-results").removeClass("hidden")):($(".container.content").removeClass("hidden"),$(".container.search-results").addClass("hidden"))})});
$(document).ready(function(){$("#main-video").hover(function(){this.hasAttribute("controls")?this.removeAttribute("controls"):this.setAttribute("controls","controls")}),$(window).width()>767&&$(".sticky-in-parent").stick_in_parent({offset_top:100}),$('[data-toggle="popover"]').popover({trigger:"hover"}),$("a[data-track]").each(function(t,e){var a=$(e),o=a.data("track-event")||"Clicked Link",i=a.prop("tagName").toLowerCase();analytics.trackLink(e,o,{location:a.data("track-location"),text:a.text(),category:"Home Page",page:document.location.pathname,pageTitle:document.title,type:i})}),$(".newsletter-form").ajaxChimp({url:"https://redash.us1.list-manage.com/subscribe/post?u=a905176d2294593084d5264e5&id=53ca028761"})});
!function(){var t=window.analytics=window.analytics||[];if(!t.initialize)if(t.invoked)window.console&&console.error&&console.error("Segment snippet included twice.");else{t.invoked=!0,t.methods=["trackSubmit","trackClick","trackLink","trackForm","pageview","identify","reset","group","track","ready","alias","page","once","off","on"],t.factory=function(e){return function(){var n=Array.prototype.slice.call(arguments);return n.unshift(e),t.push(n),t}};for(var e=0;e<t.methods.length;e++){var n=t.methods[e];t[n]=t.factory(n)}t.load=function(t){var e=document.createElement("script");e.type="text/javascript",e.async=!0,e.src=("https:"===document.location.protocol?"https://":"http://")+"cdn.segment.com/analytics.js/v1/"+t+"/analytics.min.js";var n=document.getElementsByTagName("script")[0];n.parentNode.insertBefore(e,n)},t.SNIPPET_VERSION="3.1.0",t.load("NPyg08Ubos5mFcpyjOeYqw4GNBM2AMMY"),t.page()}}(),window.intercomSettings={app_id:"rwp8rrzy",hide_default_launcher:!0},function(){function t(){var t=r.createElement("script");t.type="text/javascript",t.async=!0,t.src="https://widget.intercom.io/widget/rwp8rrzy";var e=r.getElementsByTagName("script")[0];e.parentNode.insertBefore(t,e)}var e=window,n=e.Intercom;if("function"==typeof n)n("reattach_activator"),n("update",intercomSettings);else{var r=document,a=function(){a.c(arguments)};a.q=[],a.c=function(t){a.q.push(t)},e.Intercom=a,e.attachEvent?e.attachEvent("onload",t):e.addEventListener("load",t,!1)}}();