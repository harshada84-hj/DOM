// DOM Elements
const phoneImage = document.getElementById("phoneImage");
const price = document.getElementById("price");
const colors = document.querySelectorAll(".color");
const addToCartBtn = document.getElementById("addToCart");
const phoneTag = document.getElementById("phoneTag");

let selectedColor = "red";

// Single phone data object
const phoneData = {
    red: {
        image: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/iphone-17-pro-finish-select-202509-6-9inch-cosmicorange?wid=5120&hei=2880&fmt=webp&qlt=90&.v=NUNzdzNKR0FJbmhKWm5YamRHb05tUzkyK3hWak1ybHhtWDkwUXVINFc0RnVrUzFnTVVSUnNLVnZUWUMxNTBGaGhsQTdPYWVGbmdIenAvNE9qYmZVYVFDb1F2RTNvUEVHRkpGaGtOSVFHak5NTEhXRE11VU1QNVo2eDJsWlpuWHQyaWthYXpzcEpXMExJLy9GTE9wWkNn&traceId=1",
        price: "₹1,32,900",
        colorCode: "rgb(232, 84, 4)"
    },
    black: {
        image: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/iphone-17-pro-finish-select-202509-6-9inch-deepblue?wid=5120&hei=2880&fmt=webp&qlt=90&.v=NUNzdzNKR0FJbmhKWm5YamRHb05tUzkyK3hWak1ybHhtWDkwUXVINFc0RWhhOHJGRUNHdlh6a3VuZVVqdnNrNXVHdDcxbVFRSnhaQ0pnV1pOaG5KaGhNQnJMcnc4RkxJd3ZMc3hKZVVFWHREelVULzVXd2xCbVltNVMyUXhsYlBpMEowc2xaa1ByZlpMdyt3ZFlhVkhn&traceId=1",
        
        price: "₹1,69,900",
        colorCode: "black"
    },
    white: {
        image: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/iphone-17-pro-finish-select-202509-6-9inch-silver?wid=5120&hei=2880&fmt=webp&qlt=90&.v=NUNzdzNKR0FJbmhKWm5YamRHb05tUzkyK3hWak1ybHhtWDkwUXVINFc0RVRqUkJqUGFyN1pGMnlaV3JkWU9jdjF1TmpsTkNoRVRMR1N6UXlVZFBaU0NYR1ZZZnEyMVlVQUliTThGMjNyaFFxd1ZHd3R2RmlpWk50MW5LU2N1cWNxdlBsK2ZicnRLY2oza08vTDBZeXZ3&traceId=1",
        price: "₹1,71,899",
        colorCode: "#ffffff"
    }
};

// Color selection logic
colors.forEach(color => {
    color.addEventListener("click", () => {

        // Active state
        colors.forEach(c => c.classList.remove("active"));
        color.classList.add("active");

        selectedColor = color.dataset.color;

        // Update image & price
        phoneImage.src = phoneData[selectedColor].image;
        price.innerText = phoneData[selectedColor].price;

        // Update button & label color
        addToCartBtn.style.backgroundColor = phoneData[selectedColor].colorCode;
        phoneTag.style.backgroundColor = phoneData[selectedColor].colorCode;

        // Visibility fix for white
        if (selectedColor === "white") {
            addToCartBtn.style.color = "black";
            phoneTag.style.color = "black";
            phoneTag.style.border = "1px solid black";
        } else {
            addToCartBtn.style.color = "white";
            phoneTag.style.color = "white";
            phoneTag.style.border = "none";
        }
    });
});

// Add to cart
addToCartBtn.addEventListener("click", () => {
 alert(`iPhone 17 (${selectedColor.toUpperCase()}) added to cart 📞`);

});
