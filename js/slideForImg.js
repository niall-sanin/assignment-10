function updateSlider(slideAmount) {
       var sliderDiv = document.getElementById("sliderAmount");
       var imgs = document.getElementById("T1");
       if (slideAmount == 32) {

           imgs.setAttribute("src","images/turtle_clip_art.png");
       }
       else if (slideAmount == 64) {

           imgs.setAttribute("src","images/Sowa_owl.png");
        }
        else if (slideAmount == 96) {

            imgs.setAttribute("src","images/lemmling_walrus.png");
         }
       else if (slideAmount == 128) {

           imgs.setAttribute("src","images/pig_cartoon.png");
        }
       sliderDiv.innerHTML = imgs;

   }
