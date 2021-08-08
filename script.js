var date = new Date('December 18, 2021 18:18:18');
var k = 0;
var second = date.getSeconds();
var minute = date.getMinutes();
var hour = date.getHours();
var day = date.getDay();

function fsecond(){
	second = date.getSeconds();
	if(second==0){
		second=59;
	}
	else{
		second--;
	}
	
	date.setSeconds(second);
	$(".header__main__time__second .header__main__time__block__title").text(second);
}
function fminute(){
	second = date.getSeconds();
	minute = date.getMinutes();
	if(second==0){
		if(minute==0){
			minute=59;
		}
		else{
			minute--;
		}
	}

	date.setMinutes(minute);
	$(".header__main__time__minute .header__main__time__block__title").text(minute);
}
function fhour(){
	hour = date.getHours();
	second = date.getSeconds();
	minute = date.getMinutes();
	if(second==0){
		if(minute==0){
			if(hour==0){
				hour=59;
			}
			else{
				hour--;
			}
		}
	}

	date.setHours(hour);
	$(".header__main__time__hour .header__main__time__block__title").text(hour);
}
function fday(){
	day = date.getDate();
	hour = date.getHours();
	second = date.getSeconds();
	minute = date.getMinutes();
	if(second==0){
		if(minute==0){
			if(hour==0){
				if(day==0){
					day=23;
				}
				else{
					day--;
				}
			}
		}
	}

	date.setDate(day);
	$(".header__main__time__day .header__main__time__block__title").text(day);
}

setInterval(fsecond, 1000);
setInterval(fminute, 1000);
setInterval(fhour, 1000);
setInterval(fday, 1000);


var point = $(".header__footer__money__total__value").text();
point = point.replace("₽", "");
point = point.replace(" ", "");


$(".header__footer__money__loader::after").width(parseInt(point)/10000 + "%");

$(".close").click(function(){
	$(".header__hamburger").css("transform","translateX(-100%)");
})

$(".header__logo").click(function(){
	if($( window ).width() <= 980){
		$(".header__hamburger").css("transform","translateX(0)");
	}
})

/*alert($(window).width())*/