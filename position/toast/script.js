console.log("Toast Script");
document
  .getElementsByClassName("checkbox")[0]
  .addEventListener("change", function () {
    if (this.checked) {
      showToast();
    } else {
      hideToast();
    }
  });

function showToast() {
  const toast = document.querySelector(".toast");
  toast.classList.add("show"); // Show toast
  setTimeout(function () {
    toast.classList.remove("show");
  }, 5000);
}
function hideToast() {
  const toast = document.querySelector(".toast");
  toast.classList.remove("show");
}
