(function ($) {
    'use strict';

	jQuery(window).load(function(){

		jQuery('.masonry').masonry({
			columnWidth: '.grid-sizer',
			gutter: '.gutter-sizer',
			itemSelector: '.item'
		});

	});

}(jQuery));

// var $grid = jQuery('.grid').imagesLoaded(function(){
// 	$grid.masonry({
// 		columnWidth: '.grid-sizer',
// 		gutter: '.gutter-sizer',
// 		itemSelector: '.grid-item'
// 	});
// 	});
