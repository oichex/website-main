document.addEventListener("DOMContentLoaded", function () {
    const menu = document.getElementById("custom-menu");
  
    document.addEventListener("contextmenu", function (e) {
      e.preventDefault();
      menu.style.top = `${e.clientY}px`;
      menu.style.left = `${e.clientX}px`;
      menu.style.display = "block";
    });
  
    document.addEventListener("click", function () {
      menu.style.display = "none";
    });
  });
  
// Aktif menü öğesini değiştirme
document.querySelectorAll('.nav-item').forEach(item => {
    item.addEventListener('click', function() {
        // Önce tüm active sınıflarını kaldır
        document.querySelectorAll('.nav-item').forEach(navItem => {
            navItem.classList.remove('active');
        });
        // Tıklanan öğeye active sınıfını ekle
        this.classList.add('active');
    });
});

// Sayfa yüklendiğinde URL'deki hash'e göre aktif menüyü ayarla
window.addEventListener('load', function() {
    const hash = window.location.hash || '#anasayfa';
    const activeItem = document.querySelector(`a[href="${hash}"]`);
    if (activeItem) {
        document.querySelectorAll('.nav-item').forEach(item => {
            item.classList.remove('active');
        });
        activeItem.classList.add('active');
    }
});
  