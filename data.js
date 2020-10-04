var products = [
    { name: "Chair", price: "3000", desc: "This is wooden chair", image: "chair.jpg" },
    { name: "Table", price: "4000", desc: "This is wooden Table", image: "table.jpg" },
    { name: "Bed", price: "15000", desc: "This is wooden Table", image: "bed.jpg" },
    { name: "Sofa", price: "25000", desc: "This is wooden Table", image: "sofa.jpg" },

];


function showProduct() {

    products.forEach(element => {
        var divProduct = document.createElement("div");
        var productName = document.createElement("H4");
        var productNameText = document.createTextNode(element.name);

        var productDesc = document.createElement("p");
        var productDescText = document.createTextNode(element.desc);
        var productPrice = document.createElement("strong");
        var productPriceText = document.createTextNode(element.price);
        divProduct.appendChild(productName);
        productName.appendChild(productNameText);
        divProduct.appendChild(productDesc);
        productDesc.appendChild(productDescText);
        divProduct.appendChild(productPrice);
        productPrice.appendChild(productPriceText);
        divProduct.className = "product";
        // document.getElementById("Chair");
        // document.getElementById("bed");
        document.getElementById("productContainer").appendChild(divProduct);
    });

}