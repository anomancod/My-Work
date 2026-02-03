document.addEventListener("DOMContentLoaded", () => {
  const intro = document.getElementById("intro");
  const introButton = document.getElementById("introButton");
  const transition = document.getElementById("transition");
  const app = document.getElementById("app");

  const tabs = Array.from(document.querySelectorAll(".tab"));
  const contentText = document.getElementById("contentText");

  // Тексты-заглушки под 1/2/3 (заменишь на свои)
  const texts = {
    "1": "Я есмь Узб (Uzbadur) или Эол, ветер.\nОщутил я 17 осеней.\nЛицензией благословлён.\nОдержим я идеями амбициозными, выходящими за рамки практичности. Хоть время моё ограничено ввиду мирских обстоятельств, но то, какое я проведу в ваших сферах - планирую сделать ярким словь пламя. Литература и инженерия будут моим молотком и пинцетом.",
    "2": "Не мало и не много посетил я сфер. Среди них были и небольшие обыденные земли (Plasmo SMP и Plasmo RP), с которых начался мой путь 6 вёсен назад. Были и собственные эксперименты, имя которых я поклялся забыть. Даже сфера, обещавшая погружения, была под моей поступью (Plasmo FRP). И крупные, разбухшие от внимания просторы не обошли моего внимания (SubShield).\nПотому, опыт мой достаточен, но ещё не велик. А потому пополняю его и ныне.",
    "3": "Тыква завлекла меня, пригласив в страну свою, Нигдею. И буду я в ней, дам ей дух и машины, вдохну жизнь и творение, улучшу во всех смыслах и начинаниях, которых могу.\nНо вместе с этим буду вести и собственные творения. Собственную Работу, соединяя машины и магию, вдыхая дух в поршни и шестерни. И дополняя, обрамляя всё это литературно и лорово, расширяя обычное в необычные смыслы. Рассказы, повести, стишки и дневники-трактаты.\nЭстетика и амбициозное творение - вот, моя Работа и Цель в вашей сфере.\n \nОдобрите ли вы её?"
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
    }, 1200);
  });

});



