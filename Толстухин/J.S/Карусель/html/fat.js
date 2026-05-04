const products = [
    {
      name: "CLASSIC ACT",
      description: "",
      price: "2500 РУБ",
      image: "https://cdn.pbilet.com/origin/353cf8e1-a473-452d-bc35-38a3bb5050bb.jpeg"
    },
    {
      name: "SUPER ACT",
      description: "",
      price: "5000 РУБ",
      image: "https://ros-tour.ru/wp-content/uploads/2025/04/792029658be6f59592549272a8321c4b.jpeg"
    },
    {
      name: "ULTRALEGEND ACT",
      description: "",
      price: "7500 РУБ",
      image: "https://nsk.bfm.ru/storage/article/February2026/WzKnuBYqOFTZpVZynbP1hUGg68rn2wmU4ZfFUYaL.jpg"
    }
  ];

  let currentIndex = 0;
  function showProduct(index) {
    const product = products[index];
    document.getElementById("product-name").textContent = product.name;
    document.getElementById("product-description").textContent = product.description;
    document.getElementById("product-price").textContent = product.price;
    document.getElementById("product-image").src = product.image;
  }

  function nextProduct() {
    currentIndex = (currentIndex + 1) % products.length;
    showProduct(currentIndex);
  }

  function prevProduct() {
    currentIndex = (currentIndex - 1 + products.length) % products.length;
    showProduct(currentIndex);
  }


  showProduct(currentIndex);