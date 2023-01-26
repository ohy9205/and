
		// 메뉴바가 300px 위로 가면 포지션이 릴레이티브에서 픽스 됨
		// 스크롤을 내리면 메뉴가 상단에 고정
$(document).ready(function(){
		var menu = $('#nav_wrap');
		var menuLocation = menu.offset();

		$(window).scroll(function(){
			if($(document).scrollTop()>=menuLocation.top)
			{
				// menu.addClass('menufix');
				menu.css({
					position:'fixed',
					top:'0',
				});

			}else
			{
				// menu.removeClass('menufix');
				menu.css({
					position:'absolute',
					top :'870px'
				});

			}
		});
		
		//탭
		$(".con4_tap li:first-child").click(function(){
			$(".con4_2, .con4_tap li").removeClass("on");
			$(".con4_1, .con4_tap li:first-child").addClass("on");
			});
		$(".con4_tap li:last-child").click(function(){
			$(".con4_1, .con4_tap li").removeClass("on");
			$(".con4_2, .con4_tap li:last-child").addClass("on");
			});
		
		//팝업
		$(".menu1").click(function(){
			$(".popup_wrap1").fadeIn();
		});
		$(".popup_wrap1").click(function(){
			$(this).fadeOut();
		})
		
		$(".menu2").click(function(){
			$(".popup_wrap2").fadeIn();
		});
		$(".popup_wrap2").click(function(){
			$(this).fadeOut();
		})
		
		$(".menu3").click(function(){
			$(".popup_wrap3").fadeIn();
		});
		$(".popup_wrap3").click(function(){
			$(this).fadeOut();
		});
		
		//모바일메뉴
		$("#m_menu").mmenu({
				   "slidingSubmenus": false,
				   "navbar": { "title":"" },
				   "extensions": [
					  "pagedim-black",
					  "position-right",
					  "theme-white"
				   ]
				});
});




		


	