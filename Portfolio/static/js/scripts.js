var thumbnails = document.getElementsByClassName("image-container");

var getThumbnail = function() {
  var url = this.getElementsByTagName("A")[0].getAttribute("href");
  window.open(url);
}

Array.from(thumbnails).forEach(function(element) {
  element.addEventListener("click", getThumbnail);
});
