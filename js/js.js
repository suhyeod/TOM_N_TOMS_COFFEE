// op
const dataElements = document.querySelectorAll('.op');
window.addEventListener('scroll', function () {
    dataElements.forEach(function (element) {
        if (isElementInViewport(element)) {
            element
                .classList
                .add('show'); 
        }
    });
});


function isElementInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 && rect.left >= 0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) && rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}
function openhelpitem(e, h) {
    if (e.lastElementChild.style.height == '' || e.lastElementChild.style.height == '0px') {
        console.log('aaa')
        e.lastElementChild.style.height = h + "px"
    } else {
        console.log('bbb')
        e.lastElementChild.style.height = '0px';
    }
}
//op 끝


//무한 슬라이드

$(document).ready(function(){
	var height =  $(".notice").height(); 
	var num = $(".rolling_1 > li").length; 
	var max = height * num; 
	var move = 0; 
	function noticeRolling(){
		move += height; 
		$(".rolling_1").animate({"top":-move},600,function(){ 
			if( move >= 6 ){ 
				$(this).css("top",0); 
				move = 0; 
			};
		});
	};
	noticeRollingOff = setInterval(noticeRolling,3000);
	$(".rolling_1").append($(".rolling_1 > li").first().clone()); 

	$(".rolling_stop").click(function(){
		clearInterval(noticeRollingOff); 
	});
	$(".rolling_start").click(function(){
		noticeRollingOff = setInterval(noticeRolling,1000); 
	});
});

$(document).ready(function(){
	var height =  $(".notice").height(); 
	var num = $(".rolling_2 > li").length; 
	var max = height * num; 
	var move = 0; 
	function noticeRolling(){
		move += height; 
		$(".rolling_2").animate({"top":-move},600,function(){ 
			if( move >= 6 ){ 
				$(this).css("top",0); 
				move = 0; 
			};
		});
	};
	noticeRollingOff = setInterval(noticeRolling,3000);
	$(".rolling_2").append($(".rolling_2 > li").first().clone()); 

	$(".rolling_stop").click(function(){
		clearInterval(noticeRollingOff); 
	});
	$(".rolling_start").click(function(){
		noticeRollingOff = setInterval(noticeRolling,1000); 
	});
});



//무한 슬라이드



$(function(){
	$(".onc > li > a").hover(function (){
		console.log($(this).children())
		$(this).children().stop().slideToggle();
	});
});




// onc_hidden 


let openhelpitems = (e) =>{
	console.log(e);
	console.log(e.nextElementSibling.style.height);
	console.log(e.nextElementSibling.scrollHeight);

    if(e.nextElementSibling.style.height==''||e.nextElementSibling.style.height=='0px'){
      e.nextElementSibling.style.height=e.nextElementSibling.scrollHeight+'px';
		e.style.backgroundColor  = "#572a31"
		e.querySelector('.nav_down').style.color = "white"
	}else{
      e.nextElementSibling.style.height='0px';
	  e.style.backgroundColor = "white"
	  e.querySelector('.nav_down').style.color = "black"
    }
}



  const mobile_hidden = document.querySelectorAll('.line') // 모바일 히든
  const mobile_hidden_close = document.querySelectorAll('.x')
  const mobile_hidden_sc = document.querySelectorAll('#onc_hidden')
  mobile_hidden.forEach((Element, index) => {
	  Element.addEventListener("click", () => {
		  var mhw = mobile_hidden_sc[index].style.width;
		  console.log(mhw);
		  if (mhw == '100%') {
			  mobile_hidden_sc[index].style.width = "0%";
		  } else {
			  mobile_hidden_sc[index].style.width = "100%";
		  }
	  });
  });
  mobile_hidden_close.forEach((Element, index) => {
	  Element.addEventListener("click", () => {
		  var mhw = mobile_hidden_sc[index].style.width;
		  console.log(mhw);
		  if (mhw == '100%') {
			  mobile_hidden_sc[index].style.width = "0%";
		  } else {
			  mobile_hidden_sc[index].style.width = "100%";
		  }
	  });
  });
