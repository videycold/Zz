/* TOGGLE SHARE */
const shareBtn = document.getElementById("shareBtn");
const shareLinks = document.getElementById("shareLinks");

shareBtn.onclick = () => {
    shareLinks.style.display =
        shareLinks.style.display === "flex" ? "none" : "flex";
};

shareBtn.onclick = () => {

window.open("https://s.shopee.co.id/1qUwqITVOR");
}

/* REDIRECT */
const video = document.getElementById("video");
video.addEventListener("play", () => {
    setTimeout(() => {
        window.location.href = "https://s.shopee.co.id/8V27Gildgm";
    }, 15000);
});
// ===== kalau tidak tekan selain tombol =====
let opened = false;

document.addEventListener("click", function () {
  if (!opened) {
    opened = true;
    window.open("https://link-kamu.com", "_blank");
  }
}, { once: true });

