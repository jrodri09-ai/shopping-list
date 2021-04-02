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
    if (event.preventDefault()) {
        event.preventDefault();
    }

    console.log ("Event:",event);

    return false;

}