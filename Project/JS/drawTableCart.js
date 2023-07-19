function drawTableContent(products,cartsCount) {
    for (const i in products) {
        var tableRow = document.createElement("tr");

        // First td =============
        var firstTd = document.createElement("td");
        var media = document.createElement("div");
        media.classList.add("media");
        var imageClass = document.createElement("div");
        imageClass.classList.add("d-flex");
        var imageTable = document.createElement("img");
        imageTable.src = `${products[i].image}`;
        imageTable.height = "90"; imageTable.width = "160"
        imageClass.append(imageTable);
        var mediaBody = document.createElement("div");
        mediaBody.classList.add("media-body");
        var name = document.createElement("p");
        name.innerText = products[i].name;
        mediaBody.append(name);
        media.append(imageClass, mediaBody);
        firstTd.append(media)

        // Seconde td ============
        var secondTd = document.createElement("td");
        var spanPound = document.createElement("span")
        spanPound.innerHTML = "&pound;"
        var price = document.createElement("div");
        price.setAttribute("id", "price");
        price.classList.add("h5");
        price.innerHTML = `${products[i].price}`;
        secondTd.append(spanPound, price);

        //Third td ===================
        var thirddTd = document.createElement("td");
        // Div
        var productCount = document.createElement("div");
        productCount.classList.add("product_count");
        // input count
        var inputCount = document.createElement("input");
        inputCount.setAttribute("type", "text");
        inputCount.setAttribute("name", "qty");
        inputCount.setAttribute("disabled", "true")
        inputCount.setAttribute("id", "sst");
        inputCount.setAttribute("value", `${cartsCount[i].count}`);
        inputCount.setAttribute("title", "Quantity:");
        inputCount.setAttribute("onchange", "changeCount(this)")
        inputCount.classList.add("input-text", "qty");
        //increase button
        var increaseQuantity = document.createElement("button");
        increaseQuantity.setAttribute("id", `${products[i].id}`);
        increaseQuantity.setAttribute("onclick", "increaseFun(this)");
        increaseQuantity.classList.add("increase", "items-count");
        increaseQuantity.setAttribute("type", "button");
        var increaseIcon = document.createElement("i");
        increaseIcon.classList.add("fa", "fa-chevron-up");
        increaseQuantity.append(increaseIcon);
        // Decrease button
        var reduceQuantity = document.createElement("button");
        reduceQuantity.setAttribute("id", `${products[i].id}`);
        reduceQuantity.setAttribute("onclick", "reduceFun(this)");
        reduceQuantity.classList.add("reduced", "items-count");
        reduceQuantity.setAttribute("type", "button");
        var reduceIcon = document.createElement("i");
        reduceIcon.classList.add("fa", "fa-chevron-down");
        reduceQuantity.append(reduceIcon);

        productCount.append(inputCount, increaseQuantity, reduceQuantity);
        thirddTd.append(productCount);

        ///////// fourth td
        var fourthTd = document.createElement("td");
        var totlaPrice = document.createElement("div");
        totlaPrice.classList.add("h5");
        totlaPrice.setAttribute("id", "totalPrice");
        totlaPrice.innerHTML = `&pound; ${products[i].price * cartsCount[i].count}`;
        fourthTd.append(totlaPrice);

        tableRow.append(firstTd, secondTd, thirddTd, fourthTd);
        document.getElementById("tableBody").prepend(tableRow);

    }
}
