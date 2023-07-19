async function changeFavorites(productId) {
    const response = await fetch("http://localhost:3005/data-en", {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        }
    })
        .then((response) => response.json())
        .then((data) => {

            for (const i in data.products) {
                console.log(data.products[i].name)
                if (data.products[i].id == productId.id) {
                    if (data.products[i].in_favorites) {
                        productId.children[0].style.color = "black";
                        data.products[i].in_favorites = false;

                    }
                    else {
                        productId.children[0].style.color = "red";
                        data.products[i].in_favorites = true;

                    }
                    break;
                }
            }



            const response = fetch("http://localhost:3005/data-en", {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                }, body: JSON.stringify(data)
            })
                .then((response) => response.json())
                .then((data) => {
                    console.log(data)
                });

        });
}


async function changeCarts(productId) {
    const response = await fetch("http://localhost:3005/data-en")
        .then((response) => response.json())
        .then((data) => {
            for (const i in data.products) {
                console.log(data.products[i].name)
                if (data.products[i].id == productId.id) {
                    if (data.products[i].in_cart) {
                        productId.children[0].style.color = "black";
                        data.products[i].in_cart = false;
                        setCart(productId.id, 0);
                    }
                    else {
                        productId.children[0].style.color = "red";
                        data.products[i].in_cart = true;
                        setCart(productId.id, 1);
                    }
                    break;
                }
            }



            const response = fetch("http://localhost:3005/data-en", {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                }, body: JSON.stringify(data)
            })
                .then((response) => response.json())
                .then((data) => {
                    console.log(data)
                });

        });
}


async function setCart(id, count) {
    const response = fetch("http://localhost:3005/cartCounts")
        .then((response) => response.json())
        .then((data) => {
            
            let isExist = false;
            for (let i in data.carts) {
                console.log("======== id =====",data.carts);
                if (data.carts[i].id == id) {
                    isExist = true;
                    data.carts[i].count = count;
                    const response = fetch("http://localhost:3005/cartCounts", {
                        method: "PUT",
                        headers: {
                            "Content-Type": "application/json",
                        }, body: JSON.stringify(data)
                    })
                        .then((response) => response.json())
                        .then((data) => {
                            console.log(data)
                        });

                    return;
                }
            }
            if (!isExist) {
                data.carts.push({
                    id: id,
                    count: 1
                });
                const response = fetch("http://localhost:3005/cartCounts", {
                    method: "PUT",
                    headers: {
                        "Content-Type": "application/json",
                    }, body: JSON.stringify(data)
                })
                    .then((response) => response.json())
                    .then((data) => {
                        console.log(data)
                    });
            }
        })
}