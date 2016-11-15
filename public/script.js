$(function() {
	// Configure Cloudinary
	// with credentials available on
	// your Cloudinary account dashboard
	$.cloudinary.config({ cloud_name: 'christekh', api_key: '538641294753298'});

    // Upload button
    var uploadButton = $('#upload-button');
	var canvas = $('#canvas');
	var imageInput = $('#image-input');
    // Upload button event
    uploadButton.on('click', function(e){
	    // Initiate upload
        cloudinary.openUploadWidget({ cloud_name: 'christekh', upload_preset: 'idcidr0h', tags: ['cgal']}, 
        function(error, result) { 
	        if(error) console.log(error);
	        // If NO error, log image data to console
			var id = result[0].public_id;
			canvas.html(procesImage(id));
			imageInput.val($.cloudinary.url(id, {}));
        });
    });
})

function procesImage(id) {
	var options = {
		client_hints: true,
	};
	return '<img src="'+ $.cloudinary.url(id, options) +'" style="width: 100%; height: auto"/>';
}