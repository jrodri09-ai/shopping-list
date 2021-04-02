window.onload = function () {
    initShoppingList();
};

function initShoppingList() {
    let form = document.getElementById("item-from");

    form.addEventListener("submit",(event) => {
        handleItemForm(e, form);
    });
}
function handleItemForm (event, formRef) {
    if (event.preventDefault) {
        event.preventDefault();
    }

  addItemToShoppingList();

    return false;
}
function demo ( ) {
    return 1;
}

function addItemtoShoppingList() {
    let itemName = document.getElementById("item-name");
    let itemAmount = document.getElementById("item-amount");

    let itemHtml = createListItemHtml(itemName.value, itemAmount.value);
    let itemListRef = document.getElementById("shopping-list");
    itemListRef.insertAdjacentHTML("afterend", itemHtml);
}
function createListItemHtml(itemName,itemAmount){
    return `<li>
            ${itemName} - ${itemAmount}
            <button type="button">Delete Item</button>
          </li>`;
}
