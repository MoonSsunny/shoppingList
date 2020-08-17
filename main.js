const inputText = document.querySelector(".list_input");
const listText = document.querySelector(".list_text");
const listButton = document.querySelector(".list_button");
const deleteList = document.querySelector(".deleteButton");

function addShoppingList() {
    let name = 0;
    const inputVal = inputText.value;
    if (!inputVal) {
        return false;
    }
    const content = document.createElement("li");
    const shoppingList = listText.appendChild(content);
    shoppingList.innerHTML = `<p>${inputVal}</p>
<i class="fas fa-minus-circle"></i>`;
    inputText.value = "";
    name++;
}

function enterkey() {
    if (window.event.keyCode == 13) {
        addShoppingList();
    }
}

function deleteShoppingList(event) {
    const listbtn = event.target;
    const listParent = listbtn.parentNode;
}

listButton.addEventListener("click", addShoppingList);

document.addEventListener("click", (e) => {});
