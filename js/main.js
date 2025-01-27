let slideIndex = 0;
showSlides();

// スライドを自動的に切り替える関数
function showSlides() {
  let slides = document.querySelectorAll(".mySlides");
  let dots = document.querySelectorAll(".dot");

  // すべてのスライドを非表示にする
  slides.forEach(slide => (slide.style.display = "none"));

  // すべてのドットを非アクティブにする
  dots.forEach(dot => dot.classList.remove("active"));

  // 次のスライドを表示
  slideIndex++;
  if (slideIndex > slides.length) slideIndex = 1;

  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].classList.add("active");

  // 3秒ごとにスライドを切り替える
  setTimeout(showSlides, 3000);
}

// ドットをクリックした場合にスライドを切り替える関数
function currentSlide(n) {
  let slides = document.querySelectorAll(".mySlides");
  let dots = document.querySelectorAll(".dot");

  // スライドとドットをリセット
  slides.forEach(slide => (slide.style.display = "none"));
  dots.forEach(dot => dot.classList.remove("active"));

  // 選択したスライドを表示
  slideIndex = n;
  slides[n - 1].style.display = "block";
  dots[n - 1].classList.add("active");
}



document.addEventListener("DOMContentLoaded", () => {
    // 全てのカードを取得
    const cards = document.querySelectorAll(".card");
  
    // 各カードにクリックイベントを追加
    cards.forEach((card, index) => {
      card.addEventListener("click", () => {
        // 背景色を変える
        card.style.backgroundColor = "#FFEB3B";
        
        // 詳細メッセージをアラート表示
        alert(`You clicked on Card ${index + 1}: ${card.querySelector("h3").innerText}`);
      });
  
      // マウスオーバーで少し拡大
      card.addEventListener("mouseover", () => {
        card.style.transform = "scale(1.05)";
        card.style.transition = "transform 0.3s ease";
      });
  
      // マウスアウトで元のサイズに戻す
      card.addEventListener("mouseout", () => {
        card.style.transform = "scale(1)";
      });
    });
  });
  document.addEventListener("DOMContentLoaded", () => {
    // 全てのアコーディオンボタンを取得
    const accordions = document.querySelectorAll(".accordion");
  
    accordions.forEach((accordion) => {
      accordion.addEventListener("click", () => {
        // 現在のパネルを開閉
        accordion.classList.toggle("active");
        const panel = accordion.nextElementSibling;
  
        if (panel.style.maxHeight) {
          panel.style.maxHeight = null; // パネルを閉じる
        } else {
          panel.style.maxHeight = panel.scrollHeight + "px"; // パネルを開く
        }
      });
    });
  });
    