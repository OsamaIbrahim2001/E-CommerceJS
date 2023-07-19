async function fillCategories() {
    var  url = "http://localhost:3005/cat-en";
    const response = await fetch(url)
      .then((response) => response.json())
      .then((data) => {
        drawCategories(data.categories)
      });
  }

  fillCategories()
