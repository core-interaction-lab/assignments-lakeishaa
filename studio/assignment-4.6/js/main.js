// const carouselSlide = document.querySelector('.carousel-slide');
// const carouselImages = document.querySelectorAll('carousel-slide img');

// const prevBtn = document.querySelector('#prevBtn');
// const nextBtn = document.querySelector('#nextBtn');

// let counter = 1;
// const size = carouselImages[0].clientWidth;



// document.getElementById("but").addEventListener(
//     "click",
//     function(event) {
//       if (event.target.value === "Look In Mirror") {
//         event.target.value = "Choose A Hairstyle";
//       } else {
//         event.target.value = "Look In Mirror";
//       }
//     },
//     false
//   );

function changeImage(){
    let displayImage = document.getElementById('image1')
    if (displayImage.src.includes('/images/wallpaper-2.jpg')){
            displayImage.src = './images/wallpaper-3.jpeg'
    } else {
        displayImage.src = './images/wallpaper-2.jpg'
    }

    console.log(displayImage.src);
}

