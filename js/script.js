function selector(id, price) {
  const memoryCost = document.getElementById(id);
  memoryCost.innerText = price;
  console.log(price);
  const totalPrice = document.getElementById("total-price");
  const bestPrice = document.getElementById("best-price").innerText;
  const deliveryCost = document.getElementById("delivery-cost").innerText;
  const storageCost = document.getElementById("storage-cost").innerText;
  const memoryText = document.getElementById("memory-cost").innerText;
  const total =
    parseFloat(bestPrice) +
    parseFloat(deliveryCost) +
    parseFloat(storageCost) +
    parseFloat(memoryText);
  totalPrice.innerText = total;
  return total;
}
document.getElementById("sixteenGB").addEventListener("click", function () {
  selector("memory-cost", 200);
});
document.getElementById("eightGB").addEventListener("click", function () {
  selector("memory-cost", 0);
});
document.getElementById("ssd1").addEventListener("click", function () {
  selector("storage-cost", 0);
});
document.getElementById("ssd2").addEventListener("click", function () {
  selector("storage-cost", 300);
});
document.getElementById("ssd3").addEventListener("click", function () {
  selector("storage-cost", 500);
});
document.getElementById("paid-delivery").addEventListener("click", function () {
  selector("delivery-cost", 20);
});
document.getElementById("free-delivery").addEventListener("click", function () {
  selector("delivery-cost", 0);
});
let count = 0;
document.getElementById("apply-btn").addEventListener("click", function () {
  const promo = document.getElementById("promo-input").value;
  if (promo === "hardwork" && count === 0) {
    let totalPrice = document.getElementById("total-price");
    total = parseFloat(totalPrice.innerText) * 0.2;
    totalPrice.innerText = parseFloat(totalPrice.innerText) - total;
    count = 1;
  }
});
