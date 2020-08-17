const inputText = document.querySelector(".list_input");
const listText = document.querySelector(".list_text");
const listButton = document.querySelector(".list_button");
const deleteList = document.querySelector(".deleteButton");

function addShopingList() {
    let name = 0;
    const inputVal = inputText.value;
    if (!inputVal) {
        return false;
    }
    const content = document.createElement("li");
    const shopingList = listText.appendChild(content);
    shopingList.innerHTML = `<p>${inputVal}</p>
    <button class="deleteButton"><i class="fas fa-minus-circle"></i></button>`;
    inputText.value = "";
    name++;
}

function enterkey() {
    if (window.event.keyCode == 13) {
        addShopingList();
    }
}

function deleteShopingList(event) {
    const listbtn = event.target;
    const listParent = listbtn.parentNode;
}

listButton.addEventListener("click", addShopingList);

document.addEventListener("click", (e) => {});
