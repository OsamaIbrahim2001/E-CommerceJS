function drawCategories(Categories) {
    var catsElement = document.getElementById("cat");
    for (var cat of Categories) {
      var catElm = document.createElement("div");
      catElm.classList.add("p-3");
      var catLink=document.createElement("a");
      catLink.href=`category.html?catId=${cat.catID}`;
      catLink.target="_self";
      var imgCat = document.createElement("img");
      imgCat.src = cat.image;
      imgCat.height = "100"; imgCat.width = "100";
      imgCat.classList.add("rounded-circle");
      imgCat.alt = `${cat.name}`

      var nameCat = document.createElement("div");
      nameCat.classList.add("h4");
      nameCat.style = "max-inline-size:100px"
      nameCat.innerText = `${cat.name}`;
      catElm.appendChild(nameCat);

      catLink.append(imgCat,catElm);
      catsElement.appendChild(catLink)
    }
  }