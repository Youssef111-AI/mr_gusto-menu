const imageLinks = [
  "https://res.cloudinary.com/dwhkjr77b/image/upload/f_auto,q_auto,w_500/v1749905068/menu_1__1_f3uwre.webp",
  "https://res.cloudinary.com/dwhkjr77b/image/upload/f_auto,q_auto,w_500/v1749905066/menu_1__2_ipjf3f.webp",
  "https://res.cloudinary.com/dwhkjr77b/image/upload/f_auto,q_auto,w_500/v1749905075/menu_1__3_igyn6e.webp",
  "https://res.cloudinary.com/dwhkjr77b/image/upload/f_auto,q_auto,w_500/v1749905075/menu_1__4_s3jjfr.webp",
  "https://res.cloudinary.com/dwhkjr77b/image/upload/f_auto,q_auto,w_500/v1749905075/menu_1__5_i2960o.webp",
  "https://res.cloudinary.com/dwhkjr77b/image/upload/f_auto,q_auto,w_500/v1749905079/menu_1__6_ncfrch.webp",
  "https://res.cloudinary.com/dwhkjr77b/image/upload/f_auto,q_auto,w_500/v1749905086/menu_1__7_j9ufxr.webp",
  "https://res.cloudinary.com/dwhkjr77b/image/upload/f_auto,q_auto,w_500/v1749905086/menu_1__8_u4eeoh.webp",
  "https://res.cloudinary.com/dwhkjr77b/image/upload/f_auto,q_auto,w_500/v1749905092/menu_1__9_e4gfuc.webp",
  "https://res.cloudinary.com/dwhkjr77b/image/upload/f_auto,q_auto,w_500/v1749905078/menu_1__10_z1g71e.webp",
  "https://res.cloudinary.com/dwhkjr77b/image/upload/f_auto,q_auto,w_500/v1749905079/menu_1__11_fdygq1.webp",
  "https://res.cloudinary.com/dwhkjr77b/image/upload/f_auto,q_auto,w_500/v1749905086/menu_1__12_swi6ui.webp",
  "https://res.cloudinary.com/dwhkjr77b/image/upload/f_auto,q_auto,w_500/v1749905085/menu_1__13_kxgukc.webp",
  "https://res.cloudinary.com/dwhkjr77b/image/upload/f_auto,q_auto,w_500/v1749905091/menu_1__14_ehtj43.webp",
  "https://res.cloudinary.com/dwhkjr77b/image/upload/f_auto,q_auto,w_500/v1749905092/menu_1__15_j49ojl.webp",
  "https://res.cloudinary.com/dwhkjr77b/image/upload/f_auto,q_auto,w_500/v1749905096/menu_1__16_i0rrih.webp",
  "https://res.cloudinary.com/dwhkjr77b/image/upload/f_auto,q_auto,w_500/v1749905096/menu_1__17_gsworm.webp",
  "https://res.cloudinary.com/dwhkjr77b/image/upload/f_auto,q_auto,w_500/v1749905095/menu_1__18_tzn50v.webp"
];

const gallery = document.getElementById('menu-gallery');

imageLinks.forEach(link => {
  const img = document.createElement('img');
  img.src = link;
  img.alt = "صورة منيو";
  gallery.appendChild(img);
});
