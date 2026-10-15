const button1 = document.querySelector("#button1");
const button2 = document.querySelector("#button2");
const dialog = document.querySelector("#popup");

button1.addEventListener("click", () => {
dialog.showModal();
});

button2.addEventListener("click", () => {
dialog.close();});