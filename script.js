document.addEventListener("DOMContentLoaded", () => {
  const intro = document.getElementById("intro");
  const introButton = document.getElementById("introButton");
  const transition = document.getElementById("transition");
  const app = document.getElementById("app");

  const tabs = Array.from(document.querySelectorAll(".tab"));
  const contentText = document.getElementById("contentText");

  // Тексты-заглушки под 1/2/3 (заменишь на свои)
  const texts = {
    "1": "ТЕКСТ ДЛЯ 1: █████ ███ ██████ ████ ███ ██████ ████ █████.",
    "2": "ТЕКСТ ДЛЯ 2: ▓▓▓▓▓ ▓▓▓ ▓▓▓▓▓▓ ▓▓▓▓ ▓▓▓▓▓▓▓▓ ▓▓▓▓▓.",
    "3": "ТЕКСТ ДЛЯ 3: @@@@ @@@ @@@@@@@ @@@@@ @@@@ @@@@@@@@ @@@."
  };

  function setActiveTab(tabId) {
    tabs.forEach(btn => {
      const isActive = btn.dataset.tab === tabId;
      btn.classList.toggle("active", isActive);
      btn.setAttribute("aria-selected", isActive ? "true" : "false");
    });
    contentText.textContent = texts[tabId] ?? "";
  }

  // Клики по вкладкам
  tabs.forEach(btn => {
    btn.addEventListener("click", () => setActiveTab(btn.dataset.tab));
  });

  // Старт: на всякий случай выставим текст для 1
  setActiveTab("1");

  // Интро-клик: убираем кнопку, показываем переходную картинку на 2 сек, затем открываем сайт
  introButton.addEventListener("click", () => {
    introButton.style.display = "none";
    transition.classList.remove("hidden");
    transition.setAttribute("aria-hidden", "false");

    setTimeout(() => {
      intro.classList.add("hidden");
      app.classList.remove("hidden");
    }, 2000);
  });
});