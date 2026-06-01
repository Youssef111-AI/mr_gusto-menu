const imageLinks = [
  "https://res.cloudinary.com/dwhkjr77b/image/upload/f_auto,q_75,w_700/v1780351329/1_x0szy8.webp",
  "https://res.cloudinary.com/dwhkjr77b/image/upload/f_auto,q_75,w_700/v1780351328/2_nlgxm3.webp",
  "https://res.cloudinary.com/dwhkjr77b/image/upload/f_auto,q_75,w_700/v1780351328/3_kgkrak.webp",
  "https://res.cloudinary.com/dwhkjr77b/image/upload/f_auto,q_75,w_700/v1780351329/4_nggazq.webp",
  "https://res.cloudinary.com/dwhkjr77b/image/upload/f_auto,q_75,w_700/v1780351330/5_nx78ge.webp",
  "https://res.cloudinary.com/dwhkjr77b/image/upload/f_auto,q_75,w_700/v1780351329/6_sfslox.webp",
  "https://res.cloudinary.com/dwhkjr77b/image/upload/f_auto,q_75,w_700/v1780351328/7_svg0zc.webp",
  "https://res.cloudinary.com/dwhkjr77b/image/upload/f_auto,q_75,w_700/v1780351328/8_dcjdxy.webp",
  "https://res.cloudinary.com/dwhkjr77b/image/upload/f_auto,q_75,w_700/v1780351328/9_jmlrh1.webp",
  "https://res.cloudinary.com/dwhkjr77b/image/upload/f_auto,q_75,w_700/v1780351329/10_tuewcy.webp",
  "https://res.cloudinary.com/dwhkjr77b/image/upload/f_auto,q_75,w_700/v1780351328/11_xaoefk.webp",
  "https://res.cloudinary.com/dwhkjr77b/image/upload/f_auto,q_75,w_700/v1780351329/12_ozvqe0.webp",
  "https://res.cloudinary.com/dwhkjr77b/image/upload/f_auto,q_75,w_700/v1780351328/13_nac1sf.webp",
  "https://res.cloudinary.com/dwhkjr77b/image/upload/f_auto,q_75,w_700/v1780351329/14_yapjko.webp",
  "https://res.cloudinary.com/dwhkjr77b/image/upload/f_auto,q_75,w_700/v1780351329/15_wmamye.webp",
  "https://res.cloudinary.com/dwhkjr77b/image/upload/f_auto,q_75,w_700/v1780351329/16_l38hp8.webp",
  "https://res.cloudinary.com/dwhkjr77b/image/upload/f_auto,q_75,w_700/v1780351328/17_swe0f6.webp"
];

const gallery = document.getElementById('menu-gallery');

imageLinks.forEach(link => {
  const img = document.createElement('img');
  img.src = link;
  img.alt = "صورة منيو";
  img.loading = "eager";
  gallery.appendChild(img);
});
