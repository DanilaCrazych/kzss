const images = ["/images/image2.jpg", "/images/image3.jpg", "/images/image4.jpg"];
let index = 0;
const preloadedImages = images.map(src => {
    const img = new Image();
    img.src = src;
    return img;
});

function changeBackground() {
    document.querySelector(".home").style.backgroundImage = `url(${images[index]})`;
    index = (index + 1) % images.length; // Переключение циклично
}

setInterval(changeBackground, 5000); // Меняет фон каждые 5 секунд

function toggleMenu() {
    let menu = document.getElementById("mobileMenu");
    if (menu.style.display === "flex") {
        menu.style.display = "none";
    } else {
        menu.style.display = "flex";
    }
}


// const imagesInfo = ["images/info/1.jpg", "images/info/2.jpg","images/info/3.jpg",];
//         let indexinfo = 0;
        
//         function changeImage() {
//             index = (index + 1) % images.length;
//             document.getElementById("slideshow").src = imagesInfo[indexinfo];
//         }
        
//         setInterval(changeImage, 3000);