$(document).ready(function () {
    var cartItems = [];
    var cartTotal = 0;

    // Sample product data
    var products = [
        { id: 1, name: "Ashwagandha thee", price: 20.00, image: "https://m.media-amazon.com/images/I/71ZHjn+o1PL._AC_UF1000,1000_QL80_.jpg" },
        { id: 2, name: "Phytophanere", price: 35.00, image: "https://cosmetique.tn/4772-large_default/phytophanere-complement-alimentaire-anti-chute-phyto.jpg" },
        { id: 2, name: "Magnesium Bisgly", price: 30.00, image: "https://www.impactnutrition.com.tn/wp-content/uploads/2023/08/MAGNESIUM-3D.jpg" },
        { id: 2, name: "Detoxification", price: 40.00, image: "https://www.oncovia.com/40022/complement-alimentaire-pour-la-detoxification-formule-detox.jpg" },
        { id: 2, name: "Whey Protein", price: 99.00, image: "https://aecor.tn/web/image/product.product/3090/image_1024/Optimum%20Nutrition%20Gold%20Standard%20100%25%20Whey%20-%205lb%20%28Cookies%20%26%20Cream%29?unique=5118779" },
        { id: 2, name: "Anabol", price: 60.00, image: "https://cloudinary.images-iherb.com/image/upload/f_auto,q_auto:eco/images/nrx/nrx75587/y/40.jpg" },
        { id: 2, name: "", price: 30.00, image: "" },
        { id: 2, name: "", price: 30.00, image: "" },
        { id: 2, name: "", price: 30.00, image: "" },
        { id: 2, name: "", price: 30.00, image: "" },
        { id: 2, name: "", price: 30.00, image: "" },
        { id: 2, name: "", price: 30.00, image: "" },
        { id: 2, name: "", price: 30.00, image: "" },
        { id: 2, name: "", price: 30.00, image: "" },
        { id: 2, name: "", price: 30.00, image: "" },
        { id: 2, name: "", price: 30.00, image: "" },
        { id: 2, name: "", price: 30.00, image: "" },
        { id: 2, name: "", price: 30.00, image: "" },
        { id: 2, name: "", price: 30.00, image: "" },
        { id: 2, name: "", price: 30.00, image: "" },
        { id: 2, name: "", price: 30.00, image: "" },
        { id: 2, name: "", price: 30.00, image: "" },
        { id: 2, name: "", price: 30.00, image: "" },
        { id: 2, name: "", price: 30.00, image: "" },
        { id: 2, name: "", price: 30.00, image: "" },
        { id: 2, name: "", price: 30.00, image: "" },
        
    ];
// to append
    products.forEach(function (product) {
        $("#products").append(`
            <div class="product" data-id="${product.id}">
                <img id="img" src="${product.image}" alt="${product.name}">
                <h3>${product.name}</h3>
                <p>DT${product.price.toFixed(2)}</p>
                <button class="addToCart">Add to Cart</button>
            </div>
        `);
    });$
// add to cart button event
    $(".addToCart").on("click", function () {
        var product = $(this).closest(".product");
        var productId = product.data("id");
        var productName = product.find("h3").text();
        var productPrice = parseFloat(product.find("p").text().replace("DT", ""));

        cartItems.push({
            id: productId,
            name: productName,
            price: productPrice
        });

        updateCart();
    });

    function updateCart() {
        $("#cartItems").empty();
        cartTotal = 0;

        cartItems.forEach(function (item) {
            $("#cartItems").append("<li>" + item.name + " - DT" + item.price.toFixed(2) + "</li>");
            cartTotal += item.price;
        });

        $("#cartTotal").text(cartTotal.toFixed(2));
    }
// search bar
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
// to show and hide "lel panier"
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