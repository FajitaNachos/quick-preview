jQuery(document).ready(function(){
	
	if (document.cookie.indexOf("previewCookie") >= 0){  
		//expires added for IE
		document.cookie="previewCookie=true; max-age=0;expires=0;path=/wp-admin/"; 			
		
		//quickPreviewOption is set in quick-preview.php  
		var previewURL = document.getElementById('post-preview');
		if(quickPreviewOption === 'current'){ 		                                    
			window.location = previewURL;
		}
		if(quickPreviewOption === 'new'){
			window.open(previewURL,"wp_PostPreview","","true");
		}
	}

	jQuery(document).keydown(function(e){
		if((e.ctrlKey || e.metaKey) && e.which == 83){
			
			//Find #save post if it's a draft. If post is published, #save-post doesn't exist.
			if(jQuery('#save-post').length){
				jQuery('#save-post').click();	
			}
			else if(jQuery('publish').length){
				jQuery('#publish').click();
			}
			
			//Sets a cookie to open the preview on page refresh. Saving a post auotmatically refreshes the page.
			document.cookie = "previewCookie = true;max-age = 60;path=/wp-admin/";  	
			return false;			
		}
		
	});	
});