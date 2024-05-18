// JavaScript Document
$(document).ready(function() {

  $("#one > ol").each(function() {
	var $children = $(this).children(),
		  count = $children.size(),
		  $item;
	  $children.each(function(i) {
		  $item = $(this)
			  .addClass('item' + (i + 1))
		  if (i === 0) {
			  $item.addClass('first');
		  }
		  if (i == count - 1) {
			  $item.addClass('last');
		  }
	  });
  });
  
  $("#one li div > figure").prepend("<div class='shadow-top'></div>");
  $("#one li div > figure").append("<div class='shadow-bot'></div>");
  
});