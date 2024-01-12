$(document).ready(function () {
    var cartItems = [];
    var cartTotal = 0;

    // Sample product data
    var products = [
        { id: 1, name: "Product 1", price: 20.00, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdcOY3ixLjVki2UXV8TJGsfFM9AwUySxlfqQ&usqp=CAU" },
        { id: 2, name: "Product 2", price: 30.00, image: "product2.jpg" },
        { id: 2, name: "Product 3", price: 30.00, image: "product2.jpg" },
        { id: 2, name: "Product 4", price: 30.00, image: "product2.jpg" },
        { id: 2, name: "Product 2", price: 30.00, image: "product2.jpg" },
        { id: 2, name: "Product 2", price: 30.00, image: "product2.jpg" },
        { id: 2, name: "Product 2", price: 30.00, image: "product2.jpg" },
        { id: 2, name: "Product 2", price: 30.00, image: "product2.jpg" },
        { id: 2, name: "Product 2", price: 30.00, image: "product2.jpg" },
        { id: 2, name: "Product 2", price: 30.00, image: "product2.jpg" },
        { id: 2, name: "Product 2", price: 30.00, image: "product2.jpg" },
        { id: 2, name: "Product 2", price: 30.00, image: "product2.jpg" },
        { id: 2, name: "Product 2", price: 30.00, image: "product2.jpg" },
        { id: 2, name: "Product 2", price: 30.00, image: "product2.jpg" },
        { id: 2, name: "Product 2", price: 30.00, image: "product2.jpg" },
        { id: 2, name: "Product 2", price: 30.00, image: "product2.jpg" },
        { id: 2, name: "Product 2", price: 30.00, image: "product2.jpg" },
        { id: 2, name: "Product 2", price: 30.00, image: "product2.jpg" },
        { id: 2, name: "Product 2", price: 30.00, image: "product2.jpg" },
        { id: 2, name: "Product 2", price: 30.00, image: "product2.jpg" },
        { id: 2, name: "Product 2", price: 30.00, image: "product2.jpg" },
        { id: 2, name: "Product 2", price: 30.00, image: "product2.jpg" },
        { id: 2, name: "Product 2", price: 30.00, image: "product2.jpg" },
        { id: 2, name: "Product 2", price: 30.00, image: "product2.jpg" },
        { id: 2, name: "Product 2", price: 30.00, image: "product2.jpg" },
        { id: 2, name: "Product 2", price: 30.00, image: "product2.jpg" },
        
    ];

    // Append products to the #products div
    products.forEach(function (product) {
        $("#products").append(`
            <div class="product" data-id="${product.id}">
                <img src="${product.image}" alt="${product.name}">
                <h3>${product.name}</h3>
                <p>$${product.price.toFixed(2)}</p>
                <button class="addToCart">Add to Cart</button>
            </div>
        `);
    });

    $(".addToCart").on("click", function () {
        var product = $(this).closest(".product");
        var productId = product.data("id");
        var productName = product.find("h3").text();
        var productPrice = parseFloat(product.find("p").text().replace("$", ""));
        cartItems.push({
            id: productId,
            name: productName,
            price: productPrice,
        });

        updateCart();
    });

    function updateCart() {
        $("#cartItems").empty();
        cartTotal = 0;

        cartItems.forEach(function (item) {
            $("#cartItems").append("<li>" + item.name + " - $" + item.price.toFixed(2) + "</li>" +"<button id=remove>"+"remove"+"</button>");
            cartTotal += item.price;
        });

        $("#cartTotal").text(cartTotal.toFixed(2));
    }

    $("#searchInput").on("input", function () {
        var searchTerm = $(this).val().toLowerCase();

        $("#products .product").each(function () {
            var productName = $(this).find("h3").text().toLowerCase();

            if (productName.includes(searchTerm)) {
                $(this).show();
            } else {
                $(this).hide();
            }
        });
    });
});
$("#show").on("click", function(){
    $("#cart").show()
 
    
})
$("#hide").on("click", function(){

    $("#cart").hide()
    
})
$(document).ready(function () {
    $("#toggleSwitch").on("change", function () {
        if ($(this).is(":checked")) {
            $("#cart").show()
            console.log("Switch is ON");
        } else {
            $("#cart").hide()
            console.log("Switch is OFF");
        }
    });
});
// $('#remove').on("click",function(){
    
// })