var is_show = {};
document.getElementById("show_btn").addEventListener("click", function () {
  console.log("show_btn clicked");
  if (is_show["show_item"]) {
    hide("show_item");
  } else {
    show("show_item");
  }
});

function show(id) {
  let item = document.getElementById(id);
  item.classList.add("show");
  is_show[id] = true;
  console.log(item.classList);
}
function hide(id) {
  let item = document.getElementById(id);
  item.classList.remove("show");
  is_show[id] = false;
  console.log(item.classList);
}
