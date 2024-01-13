$(document).ready(function () {
    var cartItems = [];
    var cartTotal = 0;
$
    
    var products = [
        { id: 1, name: "Ashwagandha thee", price: 20.00, image: "https://m.media-amazon.com/images/I/71ZHjn+o1PL._AC_UF1000,1000_QL80_.jpg" },
        { id: 2, name: "Phytophanere", price: 35.00, image: "https://cosmetique.tn/4772-large_default/phytophanere-complement-alimentaire-anti-chute-phyto.jpg" },
        { id: 3, name: "Magnesium Bisgly", price: 30.00, image: "https://www.impactnutrition.com.tn/wp-content/uploads/2023/08/MAGNESIUM-3D.jpg" },
        { id: 4, name: "Detoxification", price: 40.00, image: "https://www.oncovia.com/40022/complement-alimentaire-pour-la-detoxification-formule-detox.jpg" },
        { id: 5, name: "Whey Protein", price: 99.00, image: "https://aecor.tn/web/image/product.product/3090/image_1024/Optimum%20Nutrition%20Gold%20Standard%20100%25%20Whey%20-%205lb%20%28Cookies%20%26%20Cream%29?unique=5118779" },
        { id: 6, name: "Anabol", price: 60.00, image: "https://cloudinary.images-iherb.com/image/upload/f_auto,q_auto:eco/images/nrx/nrx75587/y/40.jpg" },
        { id: 7, name: "Creatine", price: 85.00, image: "https://i0.wp.com/strong-nutrition.tn/wp-content/uploads/2021/12/01-067-032-Creatine-Monohydrate-317g-On-web.jpg?fit=1000%2C1000&ssl=1" },
        { id: 8, name: "Zinc", price: 25.00, image: "https://amal-medical.com/7332-large_default/complement-alimentaire-zinc-kenkopower-60-gelules.jpg" },
        { id: 9, name: "Vitamine C", price: 10.00, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRITMeKDNuUOpfZJgctykS8N2goW5zx4OBFGg&usqp=CAU" },
        { id: 10, name: "Vitamine E", price: 12.00, image: "https://www.herboristerie-moderne.fr/mbFiles/images/complements-alimentaires/complements-en-melange/nature-plus/thumbs/800x600/vitamine-e-60-cp.jpg" },
        { id: 11, name: "Hair Protein", price: 45.00, image: "https://www.darwin-nutrition.fr/wp-content/uploads/2023/07/complexe-cheveux.jpeg" },
        { id: 12, name: "Skin Protein", price: 30.00, image: "https://resize.prod.docfr.doc-media.fr/rcrop/1200,902,center-middle/ext/eac4ff34/content/2022/7/23/detox-peau-de-d-lab-nutricosmetics-18bf4c08705d52cb.jpeg" },
        { id: 13, name: "Memory Booster", price: 30.00, image: "https://www.senioractu.com/photo/art/grande/53256322-40365216.jpg?v=1611220847" },
        { id: 14, name: "SVR", price: 35.00, image: "https://paradream.tn/wp-content/uploads/2022/11/svr-sebiaclear-ampoule-az-flash-anti-imperfections-30-ml.jpg" },
        { id: 15, name: "Face Teinte", price: 20.00, image: "https://paraland.tn/5359-thickbox_default/phyteal-d-pigma-eau-micellaire-anti-taches-250ml.jpg" },
        { id: 16, name: "Omega 3", price: 12.00, image: "https://www.bioherbs.tn/cdn/shop/products/Omegaultra-784318.jpg?v=1678571558" },
        { id: 17, name: "Vitamine D", price: 13.00, image: "https://www.bioherbs.tn/cdn/shop/products/Bcoplexe-1024x1024-559960.jpg?v=1678571563" },
        { id: 18, name: "Baby Powder", price: 15.00, image: "https://pharma-shop.tn/7237-large_default/johnson-s-baby-talc-100gr.jpg" },
        { id: 19, name: "Bio Shampo", price: 18.00, image: "https://courses.monoprix.tn/lac/155171-large_default/shampooing-bio.jpg" },
        { id: 20, name: "Anti Pelliculaire", price: 11.00, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHpaboTiI2DwXDdGFzkNdBJSyxbJgCp6dYwg&usqp=CAU" },
        { id: 21, name: "Hand Sanitizer", price: 30.00, image: "https://target.scene7.com/is/image/Target/GUEST_c9680030-cb16-48a3-ab5b-7332845bf110?wid=488&hei=488&fmt=pjpeg" },
    ];
// to append
    products.forEach(function (product) {
        $("#products").append(`
            <div class="product" data-id="${product.id}">
                <img id="img" src="${product.image}" alt="${product.name}">
                <h3>${product.name}</h3>
                <p id="price">${product.price}DT</p>
                <button class="addToCart">Add to Cart</button>
            
            </div>
        `);
    });
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
            $("#cartItems").append("<li>" + item.name + " - DT-" + item.price + "</li>");
            cartTotal += item.price;
        });

        $("#cartTotal").text(cartTotal);
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
// 
// to show and hide "lel panier"
$("#cartPng").on("click", function(){
    $("#cart").show()
 
    
})
$("#back").on("click", function(){

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

// $('#cartPng').on('change',function(){
//    $('#cart').show()
// });
$(document).ready(function() {
    // Get the cart and show cart button elements
    var cart = $("#cart");
    var showCartBtn = $("#showCartBtn");

    // Add a click event listener to the image
    showCartBtn.on("click", function() {
        // Toggle the visibility of the cart
        cart.toggle();
    });
});
document.addEventListener("DOMContentLoaded", function () {
   

    var resetButton = document.getElementById("reset");


    resetButton.addEventListener("click", function () {
    
        window.location.href = "./man.html";
    });
});