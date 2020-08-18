const inputText = document.querySelector(".list_input");
const listText = document.querySelector(".list_text");
const listButton = document.querySelector(".list_button");

let id = 0;
function addShoppingList() {
    const inputVal = inputText.value;
    if (!inputVal) {
        return false;
    }
    const content = document.createElement("li");
    content.setAttribute("class", "item");
    content.setAttribute("data-id", id);
    const shoppingList = listText.appendChild(content);
    shoppingList.innerHTML = `<p>${inputVal}</p>
     <button class="deleteButton" >
    <i class="fas fa-minus-circle" data-id=${id}></i>
    </button>`;
    inputText.value = "";
    id++;
}

function enterkey() {
    if (window.event.keyCode == 13) {
        addShoppingList();
    }
}

listText.addEventListener("click", (event) => {
    const id = event.target.dataset.id;
    if (id) {
        const toBeDeleted = document.querySelector(`.item[data-id="${id}"]`);
        toBeDeleted.remove();
    }
});

listButton.addEventListener("click", addShoppingList);
