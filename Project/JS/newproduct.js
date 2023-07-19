var dropDownCat=document.getElementById("category");
async function fillCategories() {
    var  url = "http://localhost:3005/cat-en";
    const response = await fetch(url)
      .then((response) => response.json())
      .then((data) => {
        fillDropDown(data.categories)
      });
  }

function fillDropDown(categories){
for (const cat of categories) {
    var option=document.createElement("option");
    option.value=cat.id;
    option.innerText=cat.name;
    dropDownCat.appendChild(option)
}
}

fillCategories();