"use strict";

const productContainer = document.querySelector(".grid_1-1-1");

const categories = ["furniture", "home-decoration", "kitchen-accessories"];

productContainer.innerHTML = "";

/*ategories.forEach((category) => {
  fetch(`https://dummyjson.com/products/category/${category}`)
    .then((res) => res.json())
    .then((data) => {
      data.products.forEach((product) => {
        productContainer.innerHTML += `
          <div class="cardSoldout"><span class="badge">-${product.discountPercentage}%</span>
            <a href="produkt.html?id=${product.id}">
              <img src="${product.thumbnail}" alt="${product.title}">
            </a>
            <p>${product.title}</p>  <p>Førpris:</p>
          <span class="oldprice">${Math.round(product.price / (1 - product.discountPercentage / 100))},- DKK</span><br />
          <span class="newprice">Nypris: ${product.price},- DKK</span>
          <button class="buybutton">Læg i kurv</button>
          </div>
        `;
      });
    });
});*/
fetchProducts(categories, 0);
function fetchProducts(categoryArr, index) {
  fetch(`https://dummyjson.com/products/category/${categoryArr[index]}`)
    .then((res) => res.json())
    .then((data) => {
      data.products.forEach((product) => {
        productContainer.innerHTML += `
          <div class="cardSoldout"><span class="badge">-${product.discountPercentage}%</span>
            <a href="produkt.html?id=${product.id}">
              <img src="${product.thumbnail}" alt="${product.title}">
            </a>
            <p>${product.title}</p>  <p>Førpris:</p>
          <span class="oldprice">${Math.round(product.price / (1 - product.discountPercentage / 100))},- DKK</span><br />
          <span class="newprice">Nypris: ${product.price},- DKK</span>
          <button class="buybutton">Læg i kurv</button>
          </div>
        `;
      });
      index++;
      if (index < categoryArr.length) {
        fetchProducts(categoryArr, index);
      }
    });
}
