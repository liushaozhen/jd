// 幻灯片
$.fn.slide = function (){
	var oBox = this;
	var aBtn = this.find('ol li');
	var oSlide = this.find('ul');
	var now = 0;
	
	oSlide.html(oSlide.html()+oSlide.html());
	var aLi = oSlide.children();
	oSlide.css('width',aLi.width()*aLi.length+'px');
	var w = oSlide.width()/2;
	
	aBtn.mouseenter(function(){
		now = $(this).index();
		tab();
		
	});
	
	function tab(){
		aBtn.removeClass('active curr');
		aBtn.eq(now%aBtn.length).addClass('active curr');
		
		if(now<0){
			now = aBtn.length-1;
			oSlide.css('left',-w);
		}
		if(now>aBtn.length){
			now = 1;
			oSlide.css('left',0);
		}
		
		oSlide.stop().animate({"left":-now*aLi.width()},'slow');
	}
	
	var timer = setInterval(function(){
		now++;
		tab();
	},4000);
	
	oBox.hover(function(){
		clearInterval(timer);
	},function(){
		timer = setInterval(function(){
		now++;
		tab();
	},4000);
	});
}

//无数字幻灯片
$.fn.sideslip = function(){
	var oBox=this;
	var aBtn=this.find('dd p');
	var oSideslip=this.find('dt');
	var now=0;

	oSideslip.html(oSideslip.html()+oSideslip.html());
	var aLi=oSideslip.children();
	oSideslip.css('width',aLi.width()*aLi.length+'px');
	var w=oSideslip.width()/2;

	aBtn.mouseenter(function(){
		now=$(this).index();
		tab();
	});

	function tab(){
		aBtn.removeClass('active curr');
		aBtn.eq(now%aBtn.length).addClass('active curr');

		if(now<0){
			now=aBtn.length-1;
			oSideslip.css('left',-w);
		}

		if(now>aBtn.length){
			now=1;
			oSideslip.css('left',0);
		}

		oSideslip.stop().animate({"left":-now*aLi.width()},'slow');
	}

}









// 选项卡
/*$.fn.tabs = function(){
	var aTab = this.find('.floor-tabs h3');
	var aTabBd = this.find('.floor-tabs b');
	var aTabContent = this.find('.tabContent');

	aTab.mouseenter(function(){
		aTab.removeClass('currentTab');
		$(this).addClass('currentTab');
		aTabContent.hide();
		aTabContent.eq($(this).index()).show();
		aTabBd.stop().animate({left:102*$(this).index()},300);
	})
}*/

$.fn.tabs = function(){
	var aTab = this.find('ul .categoryTab');
	var aTabBd = this.find('ul li.jiantou');
	var aTabContent = this.find('.tabContent');

	aTab.mouseenter(function(){
		aTab.removeClass('currentTab');
		$(this).addClass('currentTab');
		aTabContent.hide();
		aTabContent.eq($(this).index()).show();
		aTabBd.stop().animate({left:158*$(this).index()},300);
	})
}

