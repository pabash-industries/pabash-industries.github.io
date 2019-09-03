jQuery(function($){

	$('#filter_by_service').submit(function(){ 
	
		var filter = $('#filter_by_service');
		
		$.ajax({
			url:filter.attr('action'),
			data:filter.serialize(),
			type:filter.attr('method'),
			beforeSend:function(xhr){
				$('archive-posts').empty();
			},
			success:function(data){  
  				appendPortfolio(data);
			}
		});

		return false;

	});
 

	$('#night_mode').submit(function(){  
		  var night_mode = $('#night_mode');
		
		$.ajax({
			url:night_mode.attr('action'),
			data:night_mode.serialize(),
			type:night_mode.attr('method'),
			beforeSend:function(xhr){  
			},
			success:function(data){   
			}
		});

		return false;

	});
});