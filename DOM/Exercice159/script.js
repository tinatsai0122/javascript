<script>
    function addToCart(item, price) {
        let cartList = document.getElementById("cartList");
        let productList = document.getElementById("productList");

        // create elements
        let newTR = document.createElement("tr");
        let newTDItem = document.createElement("td");
        newTDItem.innerHTML = item;

        let newTDPrice = document.createElement("td");
        newTDPrice.innerHTML = price;

        // append cells to the new row
        newTR.appendChild(newTDItem);
        newTR.appendChild(newTDPrice);

        // append the new row to the cartList table
        cartList.appendChild(newTR);

        // calculate total price
        let totalPrice = 0;
        let rows = cartList.getElementsByTagName("tr");
        for (let i = 0; i < rows.length; i++) {
            let cells = rows[i].getElementsByTagName("td");
            if (cells.length > 1) {
                let priceColumn = cells[1];
                totalPrice += parseInt(priceColumn.innerHTML);
            }
        }

        // display total price in the input tag
        let totalPriceInput = document.getElementById("totalPrice");
        totalPriceInput.value = totalPrice;
    }
</script>




