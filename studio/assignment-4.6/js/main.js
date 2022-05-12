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



// function changeImage(){
//     // console.log('here')
//     let displayImage = document.getElementById('image1')
//     if (displayImage.src.includes('/images/wallpaper-2.jpg')){
//             displayImage.src = './images/wallpaper-3.jpeg'
//             displayImage.src = './images/wallpaper-4.jpg' //??//
//             displayImage.src = './images/wallpaper-5.jpg'
//             displayImage.src = './images/wallpaper-6.jpg'
//     } else {
//         displayImage.src = './images/wallpaper-2.jpg'
//     }
//     console.log(displayImage.src);
// }


// background
const imgUrls = ['./images/wallpaper-3.jpg','./images/wallpaper-11.jpg', './images/wallpaper-5.jpg', './images/wallpaper-4.jpg', './images/wallpaper-9.jpg', './images/wallpaper-12.jpg', './images/wallpaper-6.jpg','./images/wallpaper-13.jpeg', './images/wallpaper-8.jpg','./images/wallpaper-2.jpg'   ];
let imgIdx = 0;
const displayImage = document.getElementById('image1');

function changeImage(){
  displayImage.src = imgUrls[imgIdx];
  imgIdx = imgIdx === imgUrls.length - 1 ? 0 : imgIdx + 1;
}

changeImage();

// vase
const imgUrls2 = ['./images/vase-2.png', './images/vase-1.png', './images/vase-3.png', './images/vase-4.png', './images/vase-5.png'];
let imgIdx2 = 0;
const displayImage2 = document.getElementById('image2');

function changeImage2(){
  displayImage2.src = imgUrls2[imgIdx2];
  imgIdx2 = imgIdx2 === imgUrls2.length - 1 ? 0 : imgIdx2 + 1;
}

changeImage2();

// hairkit
const imgUrls3 = ['./images/hairkit-1.png', './images/hairkit-2.png', './images/hairkit-3.png', './images/hairkit-4.png', './images/hairkit-5.png'];
let imgIdx3 = 0;
const displayImage3 = document.getElementById('image3');

function changeImage3(){
  displayImage3.src = imgUrls3[imgIdx3];
  imgIdx3 = imgIdx3 === imgUrls3.length - 1 ? 0 : imgIdx3 + 1;
}

changeImage3();

//mug
const imgUrls4 = ['./images/mug-1.png', './images/mug-2.png', './images/mug-3.png', './images/mug-4.png', './images/mug-5.png'];
let imgIdx4 = 0;
const displayImage4 = document.getElementById('image4');

function changeImage4(){
  displayImage4.src = imgUrls4[imgIdx4];
  imgIdx4 = imgIdx4 === imgUrls4.length - 1 ? 0 : imgIdx4 + 1;
}

changeImage4();

// hairdryer
const imgUrls5 = ['./images/hairdryer-1.png', './images/hairdryer-2.png', './images/hairdryer-3.png', './images/hairdryer-4.png', './images/hairdryer-5.png'];
let imgIdx5 = 0;
const displayImage5 = document.getElementById('image5');

function changeImage5(){
  displayImage5.src = imgUrls5[imgIdx5];
  imgIdx5 = imgIdx5 === imgUrls5.length - 1 ? 0 : imgIdx5 + 1;
}

changeImage5();


















function show() {
    document.getElementById('slideshow-container')
        .style.display = "block";
    document.getElementById('but')
        .style.display = "block";
    document.getElementById('arrows')
        .style.display= "block";
}
