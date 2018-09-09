var thumbnails = document.getElementsByClassName("image-container");

var getThumbnail = function() {
  var url = this.getElementsByTagName("A")[0].getAttribute("href");
  console.log(url);
  window.open(url);
}

for (var i = 0; i < thumbnails.length; i++) {
    console.log(thumbnails[i]);
    thumbnails[i].addEventListener("click", getThumbnail, false);
}

/*Array.from(thumbnails).forEach(function(element) {
    console.log(element);
    element.addEventListener("click", getThumbnail);
});*/
