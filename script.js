function createProductCard(p) {
    const realPrice = p.price.toFixed(2);
  return `<div class="col-3 card mx-2 my-2 pb-3" style="width: 18rem;">
      <img src="${p.image}" class="card-img-top p-3" alt="${p.title}" height="250px" style="object-fit: contain;">
      <div class="card-body">
        <h5 class="card-title" style="text-overflow: ellipsis; text-transform: uppercase;">${p.title}</h5>
        <p class="card-text" style="font-size: 1.3rem; color: rgb(46, 145, 112);">₹ ${realPrice}</p>
        <a href="#" class="btn w-100" style="background-color: rgb(4, 66, 45); color: #fff;">Buy Now</a>
      </div>
  </div>`;

}
async function getProducts() {
  const response = await fetch('https://fakestoreapi.com/products');
  const products  = await response.json();
  let productListContainer = '';
  for(let p of products) {
    const productsContainer = createProductCard(p);
    productListContainer = productListContainer + productsContainer;
  }
  const productsContainer = document.getElementById('productsContainer');
  productsContainer.innerHTML = productListContainer
  console.log(productListContainer);
}

async function getSlicedProducts() {
    const response = await fetch('https://fakestoreapi.com/products');
    const products  = await response.json();
    const slicedProducts = products.slice(7, 12);
    let productListContainer = '';
    for(let p of slicedProducts) {
      const productsContainer = createProductCard(p);
      productListContainer = productListContainer + productsContainer;
    }
    const productsContainer = document.getElementById('slicedProductsContainer');
    productsContainer.innerHTML = productListContainer
    console.log(productListContainer);
  }


  

