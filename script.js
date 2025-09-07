const images = ["images/city-img.jpg", "images/city-near-lake.jpg", "images/palace.jpg", "images/night.jpg", "images/garden.jpg"];

let index = 0;
const cityImage = document.getElementById("cityImage");
function next(){
    index++;
    if (index >= images.length) {
        index = 0; 
      }
    cityImage.src = images[index];
    }

    function previous(){
    index--;
    if (index < 0) {
        index = images.length - 1; 
      } 
    cityImage.src = images[index];
    

}
setInterval(next, 2000);
    





