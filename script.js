// روابط الصور لكل قسم
const sandwiches = [
  "https://res.cloudinary.com/dwhkjr77b/image/upload/q_auto:good/menu_1__1_f3uwre.webp",
  "https://res.cloudinary.com/dwhkjr77b/image/upload/q_auto:good/menu_1__2_ipjf3f.webp"
];

const drinks = [
  "https://res.cloudinary.com/dwhkjr77b/image/upload/q_auto:good/menu_1__3_igyn6e.webp",
  "https://res.cloudinary.com/dwhkjr77b/image/upload/q_auto:good/menu_1__4_s3jjfr.webp"
];

const meals = [
  "https://res.cloudinary.com/dwhkjr77b/image/upload/q_auto:good/menu_1__5_i2960o.webp",
  "https://res.cloudinary.com/dwhkjr77b/image/upload/q_auto:good/menu_1__6_ncfrch.webp",
  "https://res.cloudinary.com/dwhkjr77b/image/upload/q_auto:good/menu_1__7_j9ufxr.webp",
  "https://res.cloudinary.com/dwhkjr77b/image/upload/q_auto:good/menu_1__8_u4eeoh.webp"
];

// دالة إضافة الصور لأي قسم
function loadImages(imageArray, containerId) {
  const container = document.getElementById(containerId);
  imageArray.forEach(src => {
    const img = document.createElement('img');
    img.src = src;
    img.alt = "صورة منيو";
    container.appendChild(img);
    // التأخير البسيط للانيميشن
    setTimeout(() => img.classList.add('visible'), 100);
  });
}

// تحميل الصور
loadImages(sandwiches, "section-sandwiches");
loadImages(drinks, "section-drinks");
loadImages(meals, "section-meals");
