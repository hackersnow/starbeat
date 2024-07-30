var images = [];

const dropArea = document.querySelector(".drag-area"),
input = dropArea.querySelector("input");
//If user Drag File Over DropArea

let image;
dropArea.addEventListener("drop", (event) => {
	event.preventDefault(); //preventing from default behaviour
	//getting user select file and [0] this means if user select multiple files then we'll select only the first one
	image = event.dataTransfer.files;
	image_select(); //calling function
});


   	  function image_select() {
   	  	  image = document.getElementById('image').files;
   	  	  for (i = 0; i < image.length; i++) {
   	  	  	  if (check_duplicate(image[i].name)) {
                images.push({
   	  	  	  	    "name" : image[i].name,
   	  	  	  	    "url" : URL.createObjectURL(image[i]),
   	  	  	  	    "file" : image[i],
   	  	  	    })
   	  	  	  } else 
   	  	  	  {
   	  	  	  	 alert(image[i].name + " is already added to the list");
   	  	  	  }
   	  	  }
   	  	 
          document.querySelector(".box_img_container").innerHTML = image_show();
   	  }

   	  function image_show() {
   	  	  var image = "";
   	  	  images.forEach((i) => {
   	  	  	//  image += `<div class="image_container d-flex justify-content-center position-relative">
   	  	  	//   	  <img src="`+ i.url +`" alt="Image">
   	  	  	//   	  <span class="position-absolute" onclick="delete_image(`+ images.indexOf(i) +`)">&times;</span>
   	  	  	//   </div>`;

              image +=`<div class="img_boxx2">
              <img src="${i.url}"/> <button onclick="delete_image(`+images.indexOf(i)+`)"><i class="fa fa-close"></i></button> </div>`;        
   	  	  })
   	  	  return image;
   	  }
   	  function delete_image(e) {
   	  	  images.splice(e, 1);
   	  	  document.getElementById('container').innerHTML = image_show();
   	  }

   	  function check_duplicate(name) {
   	  	var image = true;
   	  	if (images.length > 0) {
   	  		for (e = 0; e < images.length; e++) {
   	  			if (images[e].name == name) {
   	  				image = false;
   	  				break;
   	  			}
   	  		}
   	  	}
   	  	return image;
   	  }
