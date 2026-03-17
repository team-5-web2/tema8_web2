"use strict";

const productContainer = document.querySelector(".grid_1-1-1");

const categories = ["furniture", "home-decoration", "kitchen-accessories"];

productContainer.innerHTML = "";

categories.forEach((category) => {
  fetch(`https://dummyjson.com/products/category/${category}`)
    .then((res) => res.json())
    .then((data) => {
      data.products.forEach((product) => {
        productContainer.innerHTML += `
          <div class="cardSoldout">
            <a href="produkt.html?id=${product.id}">
              <img src="${product.thumbnail}" alt="${product.title}">
            </a>
            <p>${product.title}</p>
          </div>
        `;
      });
    });
});
