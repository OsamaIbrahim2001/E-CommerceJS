
async function fetchProducts() {
  var allproducts = [];
  var url = "http://localhost:3005/data-en";
  const response = await fetch(url)
    .then((response) => response.json())
    .then((data) => {
      slideBanner(data.banners)
   for(let i=0;i<6;i++){
    allproducts.push(data.products[i]);
   }
      drawProducts(allproducts, false, true);
      offersProduct(data.products);
    });
}

fetchProducts();

function offersProduct(dataFromJson) {
  var offers = [];
  for (const item of dataFromJson) {
    if (item.discount > 0 && offers.length < 3)
      offers.push(item)
  }
  drawProducts(offers, true, true)
};