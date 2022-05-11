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
    // console.log('here')
    let displayImage = document.getElementById('image1')
    if (displayImage.src.includes('/images/wallpaper-2.jpg')){
            displayImage.src = './images/wallpaper-3.jpeg'
            displayImage.src = './images/wallpaper-4.jpg' //??//
            displayImage.src = './images/wallpaper-5.jpg'
            displayImage.src = './images/wallpaper-6.jpg'
    } else {
        displayImage.src = './images/wallpaper-2.jpg'
    }
    console.log(displayImage.src);
}


function show() {
    document.getElementById('slideshow-container')
        .style.display = "block";
    document.getElementById('but')
        .style.display = "block";
    document.getElementById('arrows')
        .style.display= "block";
}
