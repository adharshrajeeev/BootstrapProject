const toggleBtn = document.querySelector('.toogle_btn');
const dropDownMenu = document.querySelector('.dropDownMenu');

toggleBtn.addEventListener("click", () => {
    console.log(dropDownMenu)
    if (dropDownMenu.style.display === "none") {
        dropDownMenu.style.display = "block";
        console.log(dropDownMenu)
    
    } else {
        dropDownMenu.style.display = "none";
    }
});