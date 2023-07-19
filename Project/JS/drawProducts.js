function drawProducts(products, offers, moreLink) {
    for (var product of products) {
        var images = document.createElement("img");
        images.classList.add("rounded", "w-100");
        images.src = product.image;
        images.height = "350"

        var productImg = document.createElement("div");
        productImg.classList.add("product-img");
        productImg.appendChild(images);

        var pIcon = document.createElement("div");
        pIcon.classList.add("p_icon");
        var link2 = document.createElement("a");
        link2.setAttribute("id", `${product.id}`);
        link2.setAttribute("onclick", "changeFavorites(this)");
        var tiHeart = document.createElement("i");
        tiHeart.classList.add("fa", "fa-solid", "fa-heart");
        if (product.in_favorites) {
            tiHeart.style.color = "red";
        }
        var link3 = document.createElement("a");
        link3.setAttribute("id", `${product.id}`);
        link3.setAttribute("onclick", "changeCarts(this)");

        var tiShoppingCart = document.createElement("i");
        tiShoppingCart.classList.add("fa", "fa-shopping-cart");
        if (product.in_cart) {
            tiShoppingCart.style.color = "red";
        }
        link2.appendChild(tiHeart);
        link3.appendChild(tiShoppingCart);

        pIcon.appendChild(link2);
        pIcon.appendChild(link3);
        productImg.appendChild(pIcon);

        var productBtm = document.createElement("div");
        productBtm.classList.add("product-btm");
        var nameLink = document.createElement("a");
        nameLink.href = `productdetail.html?productId=${product.id}`
        nameLink.classList.add("d-block");
        var name = document.createElement("h4");
        name.innerText = product.name;
        nameLink.appendChild(name);
        productBtm.appendChild(nameLink);

        var priceDive = document.createElement("div");
        priceDive.className = "mt-3";
        var newPrice = document.createElement("span");
        newPrice.innerText = product.price;
        newPrice.className = "mr-4";
        priceDive.appendChild(newPrice);

        var x = document.createElement("div");
        x.classList.add("col-lg-4", "col-md-6");

        if (product.discount > 0) {
            var oldPrice = document.createElement("del")
            oldPrice.innerText = product.old_price;
            priceDive.appendChild(oldPrice);
            var discountElment = document.createElement("span");
            discountElment.classList.add("translate-middle", "badge", "bg-danger", "discountElment");
            discountElment.innerText = "Discount";

            x.style = "position:relative";
            x.appendChild(discountElment)
        }

        productBtm.appendChild(priceDive);



        var singleProduct = document.createElement("div");
        singleProduct.classList.add("single-product");
        singleProduct.setAttribute("id", `${product.id}`);

        singleProduct.appendChild(productImg);
        singleProduct.appendChild(productBtm);

        x.appendChild(singleProduct);
        if (offers == true) {
            var row = document.getElementById("offersProduct");
            row.appendChild(x);
        } else {
            var row = document.getElementById("allProductRow");
            row.appendChild(x);
        }


    }

    if (moreLink) {
        if (offers == true) {
            var moreProducts = document.createElement("span");
            moreProducts.style = "width:200px;"
            var linkProd = document.createElement("a");
            linkProd.classList.add("main_btn")
            linkProd.href = "offers.html?offer=true";
            linkProd.innerText = "More Offers";
            moreProducts.appendChild(linkProd);

            row.appendChild(moreProducts);
        }
        else {
            var moreProducts = document.createElement("span");
            moreProducts.style = "width:200px;"
            var linkProd = document.createElement("a");
            linkProd.classList.add("main_btn")
            linkProd.href = "allproducts.html?offer=false";
            linkProd.innerText = "More Products";
            moreProducts.appendChild(linkProd);

            row.appendChild(moreProducts);
        }
    }

}

