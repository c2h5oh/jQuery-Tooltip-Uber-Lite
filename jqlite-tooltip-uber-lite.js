/**
 * jQLiteTip - Lightweight jQuery tooltip plugin
 * @version: 1.0 (2011/09/10)  
 * @author Maciej Lisiewski 
 * Dual licensed under the MIT and GPL licenses:
 *   http://www.opensource.org/licenses/mit-license.php
 *   http://www.gnu.org/licenses/gpl.html
**/

(function($) {		
	$.fn.jQLiteTip = $.fn.jqlitetip = function(selector){
		var txt;
		$(document).on('mouseenter mouseleave mousemove', selector, function(e){			
			var tmp =  $(this).attr('title');						
			var tipLeft = e.pageX + 14;
			var tipTop = e.pageY + 14;
			if (tmp !== undefined)
			{
				if (e.type == 'mouseenter')
				{
					$("body").append('<div id="jQLiteTip" style="position:absolute;z-index:6000;display:none;"></div>');
					txt = $(this).prop('title');
					$(this).prop('title','');
					$('#jQLiteTip').text(txt).css('top',tipTop).css('left',tipLeft).fadeIn(250);					
				}
				if (e.type == 'mouseleave')
				{
					$('#jQLiteTip').fadeOut(100).remove();					
					$(this).prop('title',txt);
				}
				if (e.type == 'mousemove')
				{
					var tipWidth = $('#jQLiteTip').outerWidth(true);
					var tipHeight = $('#jQLiteTip').outerHeight(true);
					
					if (tipWidth > 0.5 * $(window).width())
					{
						$('#jQLiteTip').width(0.5 * $(window).width());
					}
										
					if (tipLeft + tipWidth > $(window).scrollLeft() + $(window).width()){
						tipLeft=e.pageX-tipWidth;
					}
					
					if ($(window).height() + $(window).scrollTop() < tipTop + tipHeight){
						tipTop = e.pageY - tipHeight;
					}				
									
					$('#jQLiteTip').css('top',tipTop).css('left',tipLeft).fadeIn(250);
				}
			}
		});      	
	}		
})(jQuery);
