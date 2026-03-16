"use strict";
const params = new URLSearchParams(window.location.search);
const category = params.get("category");
console.log("products", category);

const productContainer = document.querySelector(".grid_1-1-1");
fetch(`https://dummyjson.com/products/category/${category}`)
  .then((response) => response.json())
  .then((data) => {
    showProducts(data.products);
  });

function showProducts(productsArr) {
  productContainer.innerHTML = "";
  productsArr.forEach((product) => {
    console.log("product.data", product.data);

    productContainer.innerHTML += `        <div class="cardSoldout">
          <span class="badge">-${product.discountPercentage}%</span>
          <a href="produkt.html?id=${product.id}"
            ><img
              src="${product.thumbnail}"
              alt="${product.title}"
          /></a>
          <p class="productid">${product.id}</p>
          <p class="productcategory">${product.category}</p>
          <p>Produktnavn: ${product.title}</p>
          <p>Førpris:</p>
          <span class="oldprice">${Math.round(product.price / (1 - product.discountPercentage / 100))},- DKK</span><br />
          <span class="newprice">Nypris: ${product.price},- DKK</span>
          
        </div>`;
  });
}
