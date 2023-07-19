async function fillFavorites() {
    var favoriteProduct = [];
    var url = "http://localhost:3005/data-en";
    const response = await fetch(url)

        .then((response) => response.json())
        .then((data) => {
            for (const i in data.products) {
                console.log(data.products[i].in_favorites)
                    if (data.products[i].in_favorites) {
                        favoriteProduct[i]=data.products[i]
                    }
                    
                
            }
            drawProducts(favoriteProduct)
        });
}

fillFavorites()
