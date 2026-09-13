const favourite = document.getElementById("favourite");
const heart = document.getElementById("favourite-heart");

let isFavourite = false;

favourite.addEventListener("click", function() {
    isFavourite = !isFavourite;

    if (isFavourite) {
        heart.setAttribute("fill","#111111");
    } else {
        heart.setAttribute("fill","none");
    }
})