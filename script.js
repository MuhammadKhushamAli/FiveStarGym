function loadImage(src) {
    return new Promise((resolve, reject) => {
        // Just for loading Image Safely
        const img = new Image();
        img.onload = resolve;

        img.onerror = reject;

        img.src = src;
    });
}

// Carousel
const carouselImages = [
    './carousel/1_img.jpg',
    './carousel/2_img.jpg',
    './carousel/3_img.jpg',
    './carousel/4_img.jpg',
    './carousel/5_img.jpg',
    './carousel/6_img.jpg',
    './carousel/7_img.jpg',
    './carousel/8_img.jpg',
    './carousel/9_img.jpg',
    './carousel/10_img.jpg',
    './carousel/11_img.jpg',
    './carousel/12_img.jpg',
    './carousel/13_img.jpg',
    './carousel/14_img.jpg',
    './carousel/15_img.jpg'
];
const carousel = document.getElementById('carousel');
let index = 1;


setInterval(async () => {

    try {
        await loadImage(carouselImages[index]);
        carousel.setAttribute('src', carouselImages[index++]);

        index = index % carouselImages.length;
    }
    catch (err) {
        console.error(`Carousel: ${err}`);
    }
}, 3000);

// Menu
const menu = document.getElementById('menu');
const navBar = document.getElementById('navbar');

menu.addEventListener('click', () => {
    navBar.classList.remove('hidden');

    setTimeout(() => {
        navBar.classList.add('hidden');
    }, 3000);
}, false);


// Before After Carousel

// Before
const beforeImagesArr = [
    {
        img: './before-after/1_img_b.jpg',
        description: "Persistent fatigue and low stamina were common due to a sedentary lifestyle and poor nutrition. Daily activities felt exhausting, and without proper guidance, improving physical health seemed overwhelming."
    },
    {
        img: './before-after/2_img_b.jpg',
        description: "Low self-esteem and discomfort in social situations stemmed from long-standing body image concerns. Previous fitness attempts lacked structure, resulting in minimal progress and mounting frustration."
    },
    {
        img: './before-after/3_img_b.jpg',
        description: "Weight gain and reduced mobility followed an extended period of inactivity. The absence of a fitness routine made it difficult to return to a healthy lifestyle, both physically and mentally."
    },
    {
        img: './before-after/4_img_b.jpg',
        description: "Physical tasks felt challenging, and strength training seemed intimidating due to inexperience. Confidence in movement and overall fitness was low."
    },
    {
        img: './before-after/5_img_b.jpg',
        description: "Chronic stress, irregular sleep, and a lack of physical activity contributed to declining health and focus. Balancing professional demands with personal well-being felt nearly impossible."
    }
];

const beforeImg = document.getElementById('before-img');
const beforeDesc = document.getElementById('before-desc');
let beforeIndex = 1;

setInterval(async () => {
    try {
        await loadImage(beforeImagesArr[beforeIndex].img);
        beforeImg.setAttribute('src', beforeImagesArr[beforeIndex].img);
        beforeDesc.innerText = beforeImagesArr[beforeIndex++].description;

        beforeIndex %= beforeImagesArr.length;
    }
    catch (err) {
        console.error(`Before Carousel: ${err}`);
    }
}, 3000);

// After

const afterImagesArr = [
    {
        img: './before-after/1_img_a.jpg',
        description: "With a structured workout and nutrition plan at Five Star Power Gym, significant body fat reduction and lean muscle gain were achieved. Energy levels increased, and overall strength and wellness improved dramatically."
    },
    {
        img: './before-after/2_img_a.jpg',
        description: "Professional coaching and tailored programs at Five Star Power Gym led to noticeable physical changes, including weight loss and increased strength. The transformation contributed to a more confident and empowered outlook."
    },
    {
        img: './before-after/3_img_a.jpg',
        description: "A focused rehabilitation and training program at Five Star Power Gym facilitated substantial fat loss and improved mobility. The journey from recovery to resilience now stands as an example of what's possible with commitment and support"
    },
    {
        img: './before-after/4_img_a.jpg',
        description: "Under the guidance of skilled trainers at Five Star Power Gym, strength, endurance, and proper technique were developed. Regular training resulted in increased physical performance and a more active, capable lifestyle."
    },
    {
        img: './before-after/5_img_a.jpg',
        description: "Through consistent training and lifestyle adjustments at Five Star Power Gym, both physical vitality and mental clarity improved. A healthy balance between fitness and daily responsibilities was restored."
    }
];

const afterImg = document.getElementById('after-img');
const afterDesc = document.getElementById('after-desc');

let afterIndex = 1;

setInterval(async () => {
    try {
        await loadImage(afterImagesArr[afterIndex].img);
        afterImg.setAttribute('src', afterImagesArr[afterIndex].img);
        afterDesc.innerText = afterImagesArr[afterIndex++].description;

        afterIndex %= afterImagesArr.length;
    } catch (err) {
        console.error(`After Carousel: ${err}`);
    }
}, 3000);

// Plans
const mPlan = document.getElementById('monthly_plan');
const m3Plan = document.getElementById('3_months_plan');
const m6Plan = document.getElementById('6_months_plan');
const yPlan = document.getElementById('yearly_plan');
const pricingDetail = document.getElementById('pricing_details');

mPlan.addEventListener('click', () => {
    pricingDetail.innerText = 'PKR 5000';
}, false);

m3Plan.addEventListener('click', () => {
    pricingDetail.innerText = 'PKR 15000';
}, false);

m6Plan.addEventListener('click', () => {
    pricingDetail.innerText = 'PKR 30000';
}, false);

yPlan.addEventListener('click', () => {
    pricingDetail.innerText = 'PKR 10000000';
}, false);