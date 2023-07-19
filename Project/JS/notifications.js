async function fetchMovies() {
    var user=localStorage.getItem("user");
   if(user != null){
    var url = "http://localhost:3005/data-en";
    const response = await fetch(url)
        .then((response) => response.json())
        .then((data) => {
            var favCount = 0;
            var cartCount = 0;
            for (const product of data.products) {
                if (product.in_favorites) favCount++;
                if (product.in_cart) cartCount++;
            }
            drawfavorites(favCount);
            drawCart(cartCount);
        });
   }
}

function drawfavorites(count) {
    if (count > 0) {
        var badge = document.createElement("span");
        badge.classList.add("translate-middle", "badge", "rounded-pill", "bg-danger");
        badge.style = "position: absolute; font-size: small  ; top: -15%; left: 0% ;";
        badge.innerText = `${count}`
        document.getElementById("favIcon").appendChild(badge);
    }
}

function drawCart(count) {
    if (count > 0) {
        var badge = document.createElement("span");
        badge.classList.add("translate-middle", "badge", "rounded-pill", "bg-danger");
        badge.style = "position: absolute; font-size: small  ; top: -15%; left: 0% ;";
        badge.innerText = `${count}`
        document.getElementById("cartIcon").appendChild(badge);
    }
}

fetchMovies()