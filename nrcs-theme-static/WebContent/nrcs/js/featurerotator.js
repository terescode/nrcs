
(function($j){

	//Creating the rotation
	var $j = jQuery.noConflict();
	var linktabCounter = 0;
	var tabIndexMark = 0;
	
	$j.fn.slider = function() {
		$j.inAnimation = false;
		$j.paused = false;
		var options = $j.extend($j.fn.slider.defaults, $j.fn.slider.options);	
		
		$j(window).bind("load", function(){
			$j('#loading').hide();
			$j('#featureslide').fadeIn('fast');
			//$j('#content').show();
			if ($j('#slideshow .activeslide').length == 0) $j('#featureslide div:first').addClass('activeslide');			
			if (options.slide_captions == 1) 
			{
			   var currenturl = $j('#featureslide').find('a').attr('href');
			   $j('#slidecaption').html("<a href='" + currenturl + "'>" + $j('#featureslide .activeslide').find('img').attr('title')+ "</a>" + $j('#featureslide .activeslide').find('img').attr('des'));
			   $j('#description').html($j('#featureslide .activeslide').find('img').attr('alt'));
			}
			if (options.navigation == 0) $j('#featurenavigation').hide();
			//Slideshow
			if (options.slideshow == 1){
				if (options.slide_counter == 1){ //Initiate slide counter if active
					$j('#featurecounter .featureslidenumber').html(1);
	    			$j('#featurecounter .featuretotalslides').html($j("#featureslide > *").size());
	    		}
				slideshow_interval = setInterval("nextslide()", options.slide_interval);
				if (options.navigation == 1){ //Skip if no navigation
						
					//Slide Navigation
				    $j('#featurenextslide').click(function() {
				    	//if($j.paused) return false; 
						
				    	if($j.inAnimation) return false;
					    clearInterval(slideshow_interval);
					    nextslide();
					    if($j.paused) {}
					    else
					    {
					      slideshow_interval = setInterval(nextslide, options.slide_interval);
					    }
					    return false;
				    });
					//code added to ensure that space bar would allow the keyboard user to navigate through the features
					$j('#featurenextslide').keydown(function(e) {
				    	//if($j.paused) return false; 
						if(e.ctrlKey  && e.which == 32){
				    	if($j.inAnimation) return false;
					    clearInterval(slideshow_interval);
					    nextslide();
					    if($j.paused) {}
					    else
					    {
					      slideshow_interval = setInterval(nextslide, options.slide_interval);
					    }
						
						$j('.Feature_Link').focus().delay(200);
						e.stopPropagation();
						
					    return false;
						}
				    });
				    $j('#featureprevslide').click(function() {
				    	//if($j.paused) return false; 
				    	if($j.inAnimation) return false;
				        clearInterval(slideshow_interval);
				        prevslide();
				        if($j.paused) {}
					    else
					    {
				          slideshow_interval = setInterval(nextslide, options.slide_interval);
				        }
				        return false;
				    });
					//code added to ensure that space bar would allow the keyboard user to navigate through the features
					 $j('#featureprevslide').keydown(function(e) {
				    	//if($j.paused) return false; 
						if(e.ctrlKey && e.which == 32){
				    	if($j.inAnimation) return false;
				        clearInterval(slideshow_interval);
				        prevslide();
				        if($j.paused) {}
					    else
					    {
				          slideshow_interval = setInterval(nextslide, options.slide_interval);
				        }
						$j('.Feature_Link').focus().delay(200);
						e.stopPropagation();
						
				        return false;
						}
				    });
					$j('#featurenextslide img').hover(function() {
						if($j.paused == true) return false;
					   	$j(this).attr("src", "/nrcs-theme-static/nrcs/images/next_hover.png");
					   	$j(this).attr("alt","forward");
					}, function(){
						if($j.paused == true) return false;
					    $j(this).attr("src", "/nrcs-theme-static/nrcs/images/next.png");
					    $j(this).attr("alt","forward");
					});
					$j('#featureprevslide img').hover(function() {
						if($j.paused == true) return false; 
					    $j(this).attr("src", "/nrcs-theme-static/nrcs/images/prev_hover.png");
					    $j(this).attr("alt","back");
					}, function(){
						if($j.paused == true) return false;
					    $j(this).attr("src", "/nrcs-theme-static/nrcs/images/prev.png");
					    $j(this).attr("alt","back");
					});
					
				    //Play/Pause Button
				    $j('#featurepauseplay').click(function() {
					
				    	if($j.inAnimation) return false;
						
				    	var src = ($j(this).find('img').attr("src") === "/nrcs-theme-static/nrcs/images/play.png") ? "/nrcs-theme-static/nrcs/images/pause.png" : "/nrcs-theme-static/nrcs/images/play.png";
      					if (src == "/nrcs-theme-static/nrcs/images/pause.png"){
      						$j(this).find('img').attr("src", "/nrcs-theme-static/nrcs/images/play.png");
      						$j(this).find('img').attr("alt","play");
      						$j.paused = false;
					        slideshow_interval = setInterval(nextslide, options.slide_interval);  
				        }else{
				        	$j(this).find('img').attr("src", "/nrcs-theme-static/nrcs/images/pause.png");
				        	$j(this).find('img').attr("alt","pause");
				        	clearInterval(slideshow_interval);
				        	$j.paused = true;
				        }
      					$j(this).find('img').attr("src", src);
					    return false;
				    });
					  //Play/Pause Button called if clicked on Videos for the Feature Image section
				    $j('.featurevideopauseplay').click(function() {
				    	if($j.inAnimation) return false;
						
				    	var src = ($j(this).find('.videopauseplay').attr("value") === "pause") ? "pause" : "play";
						
      					if (src == "pause"){
							$j('#pauseplaybuttonId').attr("src", "/nrcs-theme-static/nrcs/images/play.png");
      						$j('#pauseplaybuttonId').attr("alt","play");
      						$j.paused = true;
					       clearInterval(slideshow_interval); 
							
				        }else{
							$j(this).find('img').attr("src", "/nrcs-theme-static/nrcs/images/pause.png");
				        	$j(this).find('img').attr("alt","pause");
				        	
				        	
							

				        }
      					//$j(this).find('#videopauseplay').attr("value", src);
					    return false;
				    });
					
					//when tabbing through the features the sliding is paused
					$j(".featuresummary a").focus(function(){
						$j('#pauseplaybuttonId').attr("src", "/nrcs-theme-static/nrcs/images/play.png");
      						$j('#pauseplaybuttonId').attr("alt","play");
      						$j.paused = true;
					       clearInterval(slideshow_interval); 
						   
				/*		   var tabCount = parseInt($j(this).attr("tabindex"));
						   //alert(tabCount);
						  // 
							if(!isNaN(tabCount)){
									$j('#featureprevslide').attr("tabindex",tabCount+2);
									$j('#featurenextslide').attr("tabindex",tabCount+3);
									tabIndexMark = tabCount+1;
							}
							
					*/	   
					});
					
					//This is will ensure that click on next or prev slide button with keyboard will focus the Feature link allowing the keyboard user to go through all the slides.
				/*	$j('#featurenextslide').keydown(function(e){
						
						alert('---' + e.which);
						if(e.which == 13){
							
							alert('??');
							$j('.Feature_Link').focus().delay(200);
							e.stopPropagation();
							return false;
						
						}
					
					});
					$j('#featureprevslide').keydown(function(e){
						
						if(e.which == 13){
						
							$j('.Feature_Link').focus().delay(200);
							e.stopPropagation();
							return false;
						
						}
					
					});*/
					
				/*	//making sure the links with in the summary are accessed before the next slide button
					$j('.featuresummary a').keydown(function(e) {
				    	//if($j.paused) return false; 
						if(e.which == 9){
							
							var activeSlideSummary = "";
							//alert('makes sense');
							activeSlideSummary = $j(".activeslide").find('.featuresummary');
   							if((activeSlideSummary.find('a')).length > 1){
								
								linktabCounter = linktabCounter + 1;
								//alert(linktabCounter);
								if(linktabCounter < (activeSlideSummary.find('a')).length){
									activeSlideSummary.find('a')[linktabCounter].focus();
									return false;
								}else if(linktabCounter == (activeSlideSummary.find('a')).length){
									
									$j('img[tabindex='+tabIndexMark+']').focus();
									tabIndexMark = 0;
									linktabCounter = 0;
									return false;
								}
								
							}
							}
					});*/
					
				    $j('#featurepauseplay').mouseover(function() {
				    	var imagecheck = ($j(this).find('img').attr("src") === "/nrcs-theme-static/nrcs/images/play.png");
				    	if (imagecheck){
      						$j(this).find('img').attr("src", "/nrcs-theme-static/nrcs/images/play.png");
      						$j(this).find('img').attr("alt","play");
				        }else{
				        	$j(this).find('img').attr("src", "/nrcs-theme-static/nrcs/images/pause.png");
				        	$j(this).find('img').attr("alt","pause");
				        }
				    });
				    
				    $j('#featurepauseplay').mouseout(function() {
				    	var imagecheck = ($j(this).find('img').attr("src") === "/nrcs-theme-static/nrcs/images/play.png");
				    	if (imagecheck){
      						$j(this).find('img').attr("src", "/nrcs-theme-static/nrcs/images/play.png");
      						$j(this).find('img').attr("alt","play"); 
				        }else{
				        	$j(this).find('img').attr("src", "/nrcs-theme-static/nrcs/images/pause.png");
				        	$j(this).find('img').attr("alt","pause");
				        }
				        return false;
				    });
				}
			}
		});
				
		$j(document).ready(function() {
			$j('#featureslide').resizenow(); 
		});
		var original_title;
		//Pause when hover on image
		$j('#featureslide > *').hover(function() {
	   		if (options.slideshow == 1 && options.pause_hover == 1){
	   			if(!($j.paused) && options.navigation == 1){
	   				$j('#featurepauseplay > img').attr("src", "/nrcs-theme-static/nrcs/images/pause.png"); 
	   				$j('#featurepauseplay > img').attr("alt","pause");
	   				clearInterval(slideshow_interval);
	   			}
	   		}
	   		original_title = $j(this).find('img').attr("title");
	   		if($j.inAnimation) return false; else $j(this).find('img').attr("title","");
	   	}, function() {
			if (options.slideshow == 1 && options.pause_hover == 1){
				if(!($j.paused) && options.navigation == 1){
					$j('#featurepauseplay > img').attr("src", "/nrcs-theme-static/nrcs/images/pause.png");
					$j('#featurepauseplay > img').attr("alt","pause");
					slideshow_interval = setInterval(nextslide, options.slide_interval);
				} 
			}
			$j(this).find('img').attr("title", original_title);	
	   	});
		
		$j(window).bind("resize", function(){
    		$j('#featureslide').resizenow(); 
		});
		
		$j('#featureslide').hide();
		$j('#content').hide();
		
		
	};
	
	
	
	//Adjust image size
	$j.fn.resizenow = function() {
		var options = $j.extend($j.fn.slider.defaults, $j.fn.slider.options);
	  	return this.each(function() {
	  		
			//Define image ratio
			var ratio = options.startheight/options.startwidth;
			
			//Gather browser and current image size
			var imagewidth = $j(this).width();
			var imageheight = $j(this).height();
			//var browserwidth = 548; //$j(window).width();
			//var browserheight = 228; //$j(window).height();
			var offset;

			//Resize image to proper ratio
			if ((browserheight/browserwidth) > ratio){
			    $j(this).height(browserheight);
			    $j(this).width(browserheight / ratio);
			    $j(this).children().height(browserheight);
			    $j(this).children().width(browserheight / ratio);
			} else {
			    $j(this).width(browserwidth);
			    $j(this).height(browserwidth * ratio);
			    $j(this).children().width(browserwidth);
			    $j(this).children().height(browserwidth * ratio);
			}
			if (options.vertical_center == 1){
				$j(this).children().css('left', (browserwidth - $j(this).width())/2);
				$j(this).children().css('top', (browserheight - $j(this).height())/2);
			}
			return false;
		});
	};
	
	$j.fn.slider.defaults = { 
			startwidth: 4,  
			startheight: 3,
			vertical_center: 1,
			slideshow: 1,
			navigation:1,
			transition: 1, //0-None, 1-Fade, 2-slide top, 3-slide right, 4-slide bottom, 5-slide left
			pause_hover: 0,
			slide_counter: 1,
			slide_captions: 0,
			slide_interval: 5000
	};
	
})(jQuery);

	//Slideshow Next Slide
	function nextslide() {
		if($j.inAnimation) return false;
		else $j.inAnimation = true;
	    var options = $j.extend($j.fn.slider.defaults, $j.fn.slider.options);
	    var currentslide = $j('#featureslide .activeslide');
	    currentslide.removeClass('activeslide');
	    if ( currentslide.length == 0 ) currentslide = $j('#featureslide div:last');
			
	    var nextslide =  currentslide.next().length ? currentslide.next() : $j('#featureslide div:first');
	    var prevslide =  nextslide.prev().length ? nextslide.prev() : $j('#last_div');
		
	 //Display slide counter
		if (options.slide_counter == 1){
			var slidecount = $j('#featurecounter .featureslidenumber').html();
			currentslide.next().length ? slidecount++ : slidecount = 1;
		    $j('#featurecounter .featureslidenumber').html(slidecount);
		}
		
		$j('.prevslide').removeClass('prevslide');
		prevslide.addClass('prevslide');
		
		//Captions require img in <a>
	    if (options.slide_captions == 1) 
	    {
	       //var nexturl = $j(currentslide).find('a').attr('href');
	       var nexturl = $j(nextslide).attr('href');
	       $j('#slidecaption').html("<a href='" + nexturl + "'>" + $j(nextslide).find('img').attr('title') + "</a>" + $j(nextslide).find('img').attr('des'));
	       $j('#description').html($j(nextslide).find('img').attr('alt'));
	    }
		
		
		$j('#featureslide').find('div.featureimage').parent().css({display:"none"}); 
			
		prevslide.css({display:"none"});
	   
	  
	   nextslide.css({display:"none"}).addClass('activeslide')
	    	if (options.transition == 0){	 
				nextslide.css({display:"block"});
				$j.inAnimation = false;
	    	}
	    	if (options.transition == 1){
	    		nextslide.fadeIn(750, function(){$j.inAnimation = false;});
	    	}
	    	if (options.transition == 2){
	    		nextslide.show("slide", { direction: "up" }, 'slow', function(){$j.inAnimation = false;});
	    	}
	    	if (options.transition == 3){
	    		nextslide.show("slide", { direction: "right" }, 'slow', function(){$j.inAnimation = false;});
	    	}
	    	if (options.transition == 4){
	    		nextslide.show("slide", { direction: "down" }, 'slow', function(){$j.inAnimation = false;});
	    	}
	    	if (options.transition == 5){
	    		nextslide.show("slide", { direction: "left" }, 'slow', function(){$j.inAnimation = false;});
	    	}
	    	
	   
	    
	}
	
	//Slideshow Previous Slide
	function prevslide() {
		if($j.inAnimation) return false;
		else $j.inAnimation = true;
	    var options = $j.extend($j.fn.slider.defaults, $j.fn.slider.options);
	    var currentslide = $j('#featureslide .activeslide');
	    currentslide.removeClass('activeslide');
		
	    if ( currentslide.length == 0 ) currentslide = $j('#featureslide div:first');
			
	    var nextslide =  currentslide.prev().length ? currentslide.prev() : $j('#last_div');
	    var prevslide =  nextslide.next().length ? nextslide.next() : $j('#featureslide div:first');
		
		//Display slide counter
		if (options.slide_counter == 1){
			var slidecount = $j('#featurecounter .featureslidenumber').html();
			currentslide.prev().length ? slidecount-- : slidecount = $j("#featureslide > *").size();
		    $j('#featurecounter .featureslidenumber').html(slidecount);
		}
		
		$j('.prevslide').removeClass('prevslide');
		prevslide.addClass('prevslide');
		
		//Captions require img in <a>
	    if (options.slide_captions == 1) 
	    {
	       //var nexturl = $j(currentslide).find('a').attr('href');
	       var nexturl = $j(nextslide).attr('href');
	       $j('#slidecaption').html("<a href='" + nexturl + "'>" + $j(nextslide).find('img').attr('title') + "</a>" + $j(nextslide).find('img').attr('des'));
	       $j('#description').html($j(nextslide).find('img').attr('alt'));
	    }
		
		//prevslide.attr('style','opacity: 0 ');
		
	   		$j('#featureslide').find('div.featureimage').parent().css({display:"none"}); 
			
	  prevslide.css({display:"none"});
	   
	  
	   nextslide.css({display:"none"}).addClass('activeslide')
	    	if (options.transition == 0){

				nextslide.css({display:"block"});
				$j.inAnimation = false;
	    	}
	    	if (options.transition == 1){
	    		nextslide.fadeIn(750, function(){$j.inAnimation = false;});
	    	}
	    	if (options.transition == 2){
	    		nextslide.show("slide", { direction: "down" }, 'slow', function(){$j.inAnimation = false;});
	    	}
	    	if (options.transition == 3){
	    		nextslide.show("slide", { direction: "left" }, 'slow', function(){$j.inAnimation = false;});
	    	}
	    	if (options.transition == 4){
	    		nextslide.show("slide", { direction: "up" }, 'slow', function(){$j.inAnimation = false;});
	    	}
	    	if (options.transition == 5){
	    		nextslide.show("slide", { direction: "right" }, 'slow', function(){$j.inAnimation = false;});
	    	}
	    	
	    
	}