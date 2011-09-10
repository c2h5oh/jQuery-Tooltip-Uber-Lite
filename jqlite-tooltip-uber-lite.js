/**
 * jQLiteTip - Lightweight jQuery tooltip plugin
 * @version: 0.1 (2011/09/10)  
 * @author Maciej Lisiewski 
 * Dual licensed under the MIT and GPL licenses:
 *   http://www.opensource.org/licenses/mit-license.php
 *   http://www.gnu.org/licenses/gpl.html
**/

(function($) {		
	$.fn.jQLiteTip = $.fn.jqlitetip = function(selector){
		$("body").append('<div id="jQLiteTip" style="position:absolute;z-index:6000;display:none;"></div>');
		$(selector).live('hover',function(e){
			var txt = $(this).attr('title');
			var tipLeft = e.pageX + 15;
			var tipTop = e.pageY + 15;
			if (txt !== undefined)
			{
				if (e.type == 'mouseenter')
				{
					$(this).attr('title','');
					$('#jQLiteTip').text(txt).css('top',tipTop).css('left',tipLeft).fadeIn(250);
				}
				if (e.type == 'mouseleave')
				{
					$('#jQLiteTip').fadeOut(100);
					$(this).attr('title',txt);
				}
				if (e.type == 'mousemove')
				{
					var tipWidth = $('jQLiteTip').outerWidth(true);
					var tipHeight = $('jQLiteTip').outerHeight(true);
										
					if (tipTop + tipWidth > $(window).scrollLeft() + $(window).width()){
						tipLeft=e.pageX-tipWidth;
					}
					
					if ($(window).height() + $(window).scrollTop() < tipTop + tipHeight){
						tipTop = e.pageY - tipHeight;
					}	
									
					$('#jQLiteTip').text(txt).css('top',tipTop).css('left',tipLeft).fadeIn(250);
				}
			}
		});      	
	}		
})(jQuery);