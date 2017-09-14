$.fn.perfectFooter = function(){
		
		let footer = this;
		
		let testHeight = function(){
			
			if( $('html').height() - $( window ).height() < 0 ) $( footer ).addClass('navbar-fixed-bottom');
			
			if( $( footer ).hasClass('invisible') ) $( footer ).removeClass('invisible');
			
		}
		
		if( $('html').height() < $( window ).height() ){
			let imgTotal = $('img').length;
			if( imgTotal > 0 ) {
				
				let imageArray = $('img');
				
				let loaded = {};
				$.each(imageArray,function(k,v){ loaded[k] = false });
				
				let count = 0;
				let timer = 0;
				
				let loadTest = setInterval(function(){
					if( timer < 400 ){
					
						$.each(imageArray,function(k,v){ 
							if( !loaded[k] ){
								if( $( v )[0].complete ){
									loaded[k] = true;
									count++;
								}
							}
						});
						
						if( count === imageArray.length ){
							
							testHeight();
							clearInterval( loadTest );
							
						}
						
						timer++;
						
					}
					else clearInterval( loadTest );
					
				},25);
				
				loadTest;
				
			}
			else testHeight();
		}
		else testHeight();
			
			// Monitor state as browser is resized
		$( window ).on('resize',function(){
			
			if( $('html').height() - $( window ).height() < 0 ){
				if( !$(footer).hasClass('navbar-fixed-bottom') ) $(footer).addClass('navbar-fixed-bottom');
			}
			else {
				if( $(footer).hasClass('navbar-fixed-bottom') ) $(footer).removeClass('navbar-fixed-bottom');
			}
			
		});
		
	}
