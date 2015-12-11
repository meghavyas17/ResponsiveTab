/** Responsive tabs plugins
* @param {Object} options - user's option for the plugin to set default tab. 
* @returns {jquery Object } element 
**/
$.fn.respTabs = function(options){
	var $select = $("<select/>");
	var links = this.find(".nav-link a");
	var activeTabId = "tab"+options.defaultTab;
	
	$("a[href="+activeTabId+"]").parent().addClass("active-link");
	$("."+ activeTabId).addClass("tab-active");
	
	links.click(function(e){
		e.preventDefault();
		var ele_class = $(e.currentTarget).attr("href");
		$(".tab-active").removeClass("tab-active");
		$("."+ ele_class).addClass("tab-active");
		$(".active-link").removeClass("active-link");
		$(e.currentTarget).parent().addClass("active-link");
		$("#select-box select").val(ele_class);
	});
	
	links.each(function(index, el){
		var $option = $("<option/>");
		var iSelected = $(el).parent().hasClass("active-link");
		$option.attr("value", $(el).attr("href")).html($(el).html()).prop("selected", iSelected);
		$select.append($option);
	});
	
	$("#select-box").append($select);
	
	$("#select-box").on("change", "select",function(e){
		var ele_class = $(e.currentTarget).find("option:selected").attr("value");
		$(".tab-active").removeClass("tab-active");
		$("."+ele_class).addClass("tab-active");
		$(".active-link").removeClass("active-link");
		$("a[href="+ele_class+"]").parent().addClass("active-link");
	});
	
	return this;
}

$( document ).ready(function() {
	$("#resptab-container").respTabs({defaultTab: 3});
});