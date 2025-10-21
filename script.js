const imageLinks = [
  "https://res.cloudinary.com/dwhkjr77b/image/upload/f_auto,q_75,w_700/v1761082743/1_mbfks5.webp",
  "https://res.cloudinary.com/dwhkjr77b/image/upload/f_auto,q_75,w_700/v1761082737/2_efq9gc.webp",
  "https://res.cloudinary.com/dwhkjr77b/image/upload/f_auto,q_75,w_700/v1761082738/3_hit2nu.webp",
  "https://res.cloudinary.com/dwhkjr77b/image/upload/f_auto,q_75,w_700/v1749905075/4_k9sje9.webp",
  "https://res.cloudinary.com/dwhkjr77b/image/upload/f_auto,q_75,w_700/v1749905075/5_zw4ezx.webp",
  "https://res.cloudinary.com/dwhkjr77b/image/upload/f_auto,q_75,w_700/v1749905079/6_librgy.webp",
  "https://res.cloudinary.com/dwhkjr77b/image/upload/f_auto,q_75,w_700/v1749905086/7_vevv3q.webp",
  "https://res.cloudinary.com/dwhkjr77b/image/upload/f_auto,q_75,w_700/v1749905086/8_penuss.webp",
  "https://res.cloudinary.com/dwhkjr77b/image/upload/f_auto,q_75,w_700/v1749905092/9_bapbqi.webp",
  "https://res.cloudinary.com/dwhkjr77b/image/upload/f_auto,q_75,w_700/v1749905078/10_wix7ik.webp",
  "https://res.cloudinary.com/dwhkjr77b/image/upload/f_auto,q_75,w_700/v1749905079/11_qtbcuk.webp",
  "https://res.cloudinary.com/dwhkjr77b/image/upload/f_auto,q_75,w_700/v1749905086/12_zmasb8.webp",
  "https://res.cloudinary.com/dwhkjr77b/image/upload/f_auto,q_75,w_700/v1749905085/13_qhorwf.webp",
  "https://res.cloudinary.com/dwhkjr77b/image/upload/f_auto,q_75,w_700/v1749905091/14_zlbeae.webp",
  "https://res.cloudinary.com/dwhkjr77b/image/upload/f_auto,q_75,w_700/v1749905092/15_koyuds.webp",
  "https://res.cloudinary.com/dwhkjr77b/image/upload/f_auto,q_75,w_700/v1749905096/16_vy4jjz.webp",
  "https://res.cloudinary.com/dwhkjr77b/image/upload/f_auto,q_75,w_700/v1749905096/17_dzjoqz.webp"
];

const gallery = document.getElementById('menu-gallery');

imageLinks.forEach(link => {
  const img = document.createElement('img');
  img.src = link;
  img.alt = "صورة منيو";
  img.loading = "eager";
  gallery.appendChild(img);
});
