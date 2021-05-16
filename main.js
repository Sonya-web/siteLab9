$(document).ready(function () {
	$(".dws-form").on("click", ".tab", function() {
		//Удаление класса active
		$(".dws-form").find(".active").removeClass("active");
		//Добавление класса active
		$(this).addClass("active");
		$(".tab-form").eq($(this).index()).addClass("active");
	});
});