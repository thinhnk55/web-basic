var side_bar_openned = false;
document
  .getElementById("open_sidebar_button")
  .addEventListener("click", function () {
    if (side_bar_openned) {
      closeSideBar();
    } else {
      openSideBar();
    }
  });

function openSideBar() {
  let side_bar = document.getElementById("side_bar");
  side_bar.classList.add("show");
  let open_sidebar_button_1 = document.getElementById("open_sidebar_button_1");
  open_sidebar_button_1.style.display = "none";
  let open_sidebar_button_2 = document.getElementById("open_sidebar_button_2");
  open_sidebar_button_2.style.display = "block";
  open_sidebar_button_1;
  side_bar_openned = true;
}
function closeSideBar() {
  let side_bar = document.getElementById("side_bar");
  side_bar.classList.remove("show");
  let open_sidebar_button_1 = document.getElementById("open_sidebar_button_1");
  open_sidebar_button_1.style.display = "block";
  let open_sidebar_button_2 = document.getElementById("open_sidebar_button_2");
  open_sidebar_button_2.style.display = "none";
  side_bar_openned = false;
}
