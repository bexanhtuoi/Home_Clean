renderUI();

function renderUI() {
  var productListDom = document.getElementById("Related-Products");
  var html = "";

  for (let i = 0; i < 4; i++) {
    let product = productList[i];
    html += `
      <div class="new-product-1">
            <div class="pic-product-1">
              <a href="">
                <img
                  id="Pic-product-${productList[i].id}"
                  src= ${productList[i].pic_moveout}
                  alt=""
                />
                <div class="box-icon-new-product">
                  <i
                    style="font-size: 19px"
                    id="cart-Product"
                    class="fa-solid fa-cart-shopping"
                  ></i>
                  <i
                    style="font-size: 18px"
                    id="heart-Product"
                    class="fa-solid fa-heart"
                  ></i>
                  <i
                    style="font-size: 18px"
                    id="search-Product"
                    class="fa-solid fa-magnifying-glass"
                  ></i>
                </div>
              </a>
            </div>
            <div class="box-star" style="width: 100%; height: 23px">
              <i
                style="color: #fcad02; margin-left: 0"
                class="fa-solid fa-star"
              ></i>
              <i style="color: #fcad02" class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <span
                style="
                  margin-left: 5px;
                  color: rgb(201, 201, 201);
                  font-size: 12px;
                "
                >(${productList[i].review} review)</span
              >
            </div>
            <div class="title-new-product">
              <a href="">${productList[i].name}</a>
            </div>
            <div style="font-size: 16px; color: rgb(170, 167, 167)">${productList[i].price}</div>
          </div>
      `;
  }
  productListDom.innerHTML = html;

  for (let i = 0; i < productList.length; i++) {
    let newProduct = document.getElementById(
      `Pic-product-${productList[i].id}`
    );

    newProduct.addEventListener("mouseout", function () {
      newProduct.src = productList[i].pic_moveout;
    });

    newProduct.addEventListener("mouseover", function () {
      newProduct.src = productList[i].pic_moveover;
    });
  }
}
