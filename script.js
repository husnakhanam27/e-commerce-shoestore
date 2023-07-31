
var cartItems = [];


function addToCart(itemIndex) {
  var item = items[itemIndex];

 
  var existingItem = cartItems.find(function (cartItem) {
    return cartItem.id === item.id;
  });

  if (existingItem) {
 
    existingItem.quantity++;
  } else {
    
    cartItems.push({
      id: item.id,
      name: item.name,
      price: item.price,
      quantity: 1,
    });
  }

  
  updateCartCount();

 
  updateCartItems();
}


function removeFromCart(itemId) {
 
  var itemIndex = cartItems.findIndex(function (item) {
    return item.id === itemId;
  });

  if (itemIndex !== -1) {
    
    cartItems.splice(itemIndex, 1);

    
    updateCartCount();

    
    updateCartItems();
  }
}


function updateCartCount() {
  var cartCountElement = document.getElementById('cart-count');
  var cartCount = 0;

  cartItems.forEach(function (item) {
    cartCount += item.quantity;
  });

  cartCountElement.textContent = cartCount;
}


function updateCartItems() {
  var cartItemsElement = document.getElementById('cart-items');
  cartItemsElement.innerHTML = '';

  cartItems.forEach(function (item) {
    var cartItemElement = document.createElement('div');
    cartItemElement.classList.add('cart-item');

    var itemNameElement = document.createElement('span');
    itemNameElement.textContent = item.name;

    var itemPriceElement = document.createElement('span');
    itemPriceElement.textContent = '$' + item.price;

    var removeBtnElement = document.createElement('button');
    removeBtnElement.classList.add('remove-btn');
    removeBtnElement.textContent = 'Remove';
    removeBtnElement.addEventListener('click', function () {
      removeFromCart(item.id);
    });

    cartItemElement.appendChild(itemNameElement);
    cartItemElement.appendChild(itemPriceElement);
    cartItemElement.appendChild(removeBtnElement);

    cartItemsElement.appendChild(cartItemElement);
  });
}


var items = [
  {
    id: 1,
    name: 'Shoe 1',
    price: 49.99,
    image: 'https://storage.sg.content-cdn.io/cdn-cgi/image/width=550,height=412,quality=75,format=auto/in-resources/e671b7de-bcf9-4637-af5c-0ffe1c9d208a/Images/ProductImages/Source/1201A789_001_SR_RT_GLB.jpg',
  },
  {
    id: 2,
    name: 'Shoe 2',
    price: 59.99,
    image: 'https://storage.sg.content-cdn.io/cdn-cgi/image/width=550,height=412,quality=75,format=auto/in-resources/e671b7de-bcf9-4637-af5c-0ffe1c9d208a/Images/ProductImages/Source/1202A380_700_SR_RT_GLBNSW.jpg',
  },
  
  {
    id: 3,
    name: 'Shoe 3',
    price: 69.99,
    image: 'https://example.com/shoe3.jpg',
  },
  {
    id: 4,
    name: 'Shoe 4',
    price: 79.99,
    image: 'https://example.com/shoe4.jpg',
  },
  {
    id: 5,
    name: 'Shoe 5',
    price: 89.99,
    image: 'https://example.com/shoe3.jpg',
  },
  {
    id: 6,
    name: 'Shoe 6',
    price: 99.99,
    image: 'https://example.com/shoe3.jpg',
  },
  {
    id: 7,
    name: 'Shoe 7',
    price: 95.99,
    image: 'https://example.com/shoe3.jpg',
  },
  {
    id: 8,
    name: 'Shoe 8',
    price: 97.99,
    image: 'https://example.com/shoe3.jpg',
  },
];


document.querySelectorAll('.add-to-cart-btn').forEach(function (button, index) {
  button.addEventListener('click', function () {
    addToCart(index);
  });
});


document.getElementById('runningBtn').addEventListener('click', function() {
  window.location.href = 'running.html';
});


document.getElementById('sportBtn').addEventListener('click', function() {
  window.location.href = 'sport.html';
});

document.getElementById('apparelBtn').addEventListener('click', function() {
  window.location.href = 'apparel.html';
});


document.getElementById('performanceBtn').addEventListener('click', function() {
  window.location.href = 'performance.html';
});
