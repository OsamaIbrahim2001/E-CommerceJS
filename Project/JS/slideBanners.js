async function fetchMovies(lang) {
    var url;
    if (lang == "en")
      url = "http://localhost:3005/data-en";
    else url = "http://localhost:3005/data-ar"
    const response = await fetch(url)
      .then((response) => response.json())
      .then((data) => {
        slideBanner(data.banners)
      });
  }

function slideBanner(bannerData) {
    var carsoual = document.getElementById("carouselExampleDark");

    var carouselInner = document.createElement("div")
    carouselInner.classList.add("carousel-inner");

    for (var i = 0; i < bannerData.length; i++) {
      var carouselItem = document.createElement("div");
      carouselItem.classList.add("carousel-item");
      if (i == 0) {
        carouselItem.classList.add("active")
        carouselItem.setAttribute("data-bs-interval", "10000")
      } else if (i == 1) {
        carouselItem.setAttribute("data-bs-interval", "2000")
      }
      var slideImage = document.createElement("img");
      slideImage.classList.add("d-block", "w-100");
      slideImage.height = "650";
      slideImage.src = bannerData[i].image;
      carouselItem.appendChild(slideImage);
      carouselInner.appendChild(carouselItem);
    }


    carsoual.appendChild(carouselInner);

    var btnPrev = document.createElement("button");
    btnPrev.setAttribute("type", "button");
    btnPrev.classList.add("carousel-control-prev")
    btnPrev.setAttribute("data-bs-target", "#carouselExampleDark");
    btnPrev.setAttribute("data-bs-slide", "prev");

    var spanControll1 = document.createElement("span");
    spanControll1.className = "carousel-control-prev-icon";
    spanControll1.setAttribute("aria-hidden", "true");
    btnPrev.appendChild(spanControll1);

    var spanControll2 = document.createElement("span");
    spanControll2.className = "carousel-control-next-icon";
    spanControll2.setAttribute("aria-hidden", "true");



    var spanVissual1 = document.createElement("span");
    spanVissual1.classList.add("visually-hidden");
    spanVissual1.innerText = "Previous";

    btnPrev.appendChild(spanVissual1);
    carsoual.appendChild(btnPrev);

    var spanVissual2 = document.createElement("span");
    spanVissual2.classList.add("visually-hidden");
    spanVissual2.innerText = "Next";



    var btnNext = document.createElement("button");
    btnNext.setAttribute("type", "button");
    btnNext.setAttribute("data-bs-target", "#carouselExampleDark");
    btnNext.setAttribute("data-bs-slide", "next");
    btnNext.classList.add("carousel-control-next")

    btnNext.appendChild(spanControll2);
    btnNext.appendChild(spanVissual2);

    carsoual.appendChild(btnNext);
  }
