    // Get the modal
    var modal = document.getElementById("myModal");

    // Get the image and insert it inside the modal - use its "alt" text as a caption
    var img = document.getElementById("myImg");
    var modalImg = document.getElementById("img01");


    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];

    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
        modal.style.display = "none";
    }

    var images = ['images/others/1.jpg', 'images/others/2.jpg','images/others/3.jpg','images/others/4.png','images/others/5.jpg','images/others/6.jpg','images/others/7.png','images/others/8.jpg','images/others/9.jpg','images/others/10.jpg','images/others/11.jpg','images/others/12.jpg','images/others/13.jpg','images/others/14.png','images/others/15.jpg'];

    function buildImages() {
        // the container
        var container = document.getElementById('content');
        for (var i = 0; i < images.length; i++) {
            // create the image element
            var imageElement = document.createElement('img');
            imageElement.setAttribute('src', images[i]);
            imageElement.setAttribute('alt', images[i]);
            imageElement.setAttribute('onclick', images[i]);
            imageElement.style.width = "100%"
            imageElement.style.maxWidth = "300px";

            imageElement.onclick = function() {
                modal.style.display = "block";
                modalImg.src = this.src;            }

            // append the element to the container
            container.appendChild(imageElement);
        }
    }

    // run the script here.
    buildImages();


    // function zoom() {
    //     document.getElementById("span").innerHTML = "String".fontsize(25);
    //     <span id="span"></span>
    // }

    function increaseFontSize(fontvar) {
        var div = document.getElementById("mytxt");
        var currentFont = div.style.fontSize.replace("px", "");

        div.style.fontSize = parseInt(currentFont) + parseInt(fontvar) + "px";
    }

    function decreaseFontSize(fontvar) {
        var div = document.getElementById("mytxt");
        var currentFont = div.style.fontSize.replace("px", "");

        div.style.fontSize = parseInt(currentFont) - parseInt(fontvar) + "px";
    }