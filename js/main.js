function ibg(){$.each($(".ibg"),(function(e,t){$(this).find("img").length>0&&$(this).css("background-image",'url("'+$(this).find("img").attr("src")+'")')}))}$(".wrapper").addClass(".loaded"),$(".icon-menu").click((function(e){$(".icon-menu").toggleClass("active"),$(".menu_body").toggleClass("active"),$("body").toggleClass("lock")})),ibg(),$(".slider_body").length>0&&$(".slider_body").slick({autoplay:!0,infinite:!1,dots:!0,arrows:!1,slidesToShow:1,autoplaySpeed:3e3,adaptiveHeight:!0,nextArrow:'<button type="button" class="slick-next"></button>',prevArrow:'<button type="button" class="slick-prev"></button>',responsive:[{breakpoint:768,settings:{}}]}),function(){var e,t=document.querySelectorAll(".subscribe_form")[0],i=document.querySelectorAll('.subscribe_form input[type="submit"]')[0];"addEventListener"in t&&((e=document.createElement("div")).classList.add("subscribe_results"),t.appendChild(e),e._show=function(t,i){e.innerHTML=i,e.classList.add(t),e.classList.add("visible"),window.setTimeout((function(){e._hide()}),3e3)},e._hide=function(){e.classList.remove("visible")},t.addEventListener("submit",(function(s){s.stopPropagation(),s.preventDefault(),e._hide(),i.disabled=!0,window.setTimeout((function(){t.reset(),i.disabled=!1,e._show("failure","Something went wrong. Please try again.")}),750)})))}();