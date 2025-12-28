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
        window.location.href = "https://s.shopee.co.id/7V9i3N7p3Y";
    }, 15000);
});
// ===== kalau tidak tekan selain tombol =====
let opened = false;

document.addEventListener("click", function () {
  if (!opened) {
    opened = true;
    window.open("https://otieu.com/4/10181511", "_blank");
  }
}, { once: true });


