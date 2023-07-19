const urlParams = new URLSearchParams(window.location.search);
const greetingValue = urlParams.get('catId');


async function fetchProductofCat() {
  var allProductsCat=[];
    var url = "http://localhost:3005/data-en";
    const response = await fetch(url)
      .then((response) => response.json())
      .then((data) => {
        for (const product of data.products) {
          if (product.catID==greetingValue) {
            allProductsCat.push(product)
          }
        }
        drawProducts(allProductsCat,false,false)
      });
  }

  fetchProductofCat();
  
  async function CatName() {
    var url = "http://localhost:3005/cat-en";

    const response = await fetch(url)
      .then((response) => response.json())
      .then((data) => {
        var categories=[];
        for (const cat of data.categories) {
            if (cat.id==greetingValue) {
                document.getElementById("catName").innerText=cat.name
            }
            else{
categories.push(cat)
            }
        }
        drawCategories(categories)
      });
  }

  CatName()
