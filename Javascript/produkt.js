"use strict";

const params = new URLSearchParams(window.location.search);
const id = params.get("id");
console.log("ID", id);

const productContainer = document.querySelector("#productContainer");
fetch(`https://dummyjson.com/products/${id}`)
  .then((Response) => Response.json())
  .then((product) => {
    productContainer.innerHTML = `<main id="productContainer">
      <div class="image">
        <h2>Produkt:</h2>
        <figure>
        <img
              src="${product.thumbnail}"
              alt="${product.title}"
          />
        </figure>
      </div>
      <section class="productDetails">
        <div class="details">
          <h3>Produktnavn:</h3>
          <p class="title">${product.title}</p>
        </div>

        <div class="discounted">
          <h3>Førpris:</h3>
          <p class="beforeprice"><span>${Math.round(product.price / (1 - product.discountPercentage / 100))}</span>,- DKK</p>
        </div>
        <br />
        <div class="discounted">
          <h3>Køb nu og få:</h3>
          <p><span class="discountPercentage">${product.discountPercentage}</span>% Rabat.</p>
        </div>
        <br />
        <div class="discounted">
          <h3>Din pris:</h3>
          <p class="price"><span>${product.price}</span>,- DKK</p>
        </div>
        <br />
        <div class="quantity">
          <p>Antal:</p>
          <button>-</button>
          <span>1</span>
          <button>+</button>
        </div>
        <br />
        <button class="buybutton">Læg i kurv</button>
        <div class="productInformation">
          <h2 class="">Beskrivelse af produktet</h2>
          <p class="description">
            ${product.description}
          </p>
        </div>
      </section>
    </main>`;
  });
