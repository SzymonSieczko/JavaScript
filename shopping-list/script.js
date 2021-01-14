const inputField = document.querySelector("#productInput");
const list = document.querySelector(".list");
const inputButton = document.querySelector("#productAdd");

function addProduct() {
    if(inputField.value!=''){

    let newProduct = document.createElement("li");
    let deleteButton = document.createElement("button");

    newProduct.textContent = inputField.value;
    inputField.value='';    
    
    deleteButton.textContent="Delete";
    deleteButton.setAttribute("class","deleteButton");
    deleteButton.addEventListener('click',deleteProduct);

    newProduct.appendChild(deleteButton);
    list.appendChild(newProduct);

    }
    inputField.focus();
}


inputButton.addEventListener("click",addProduct);

function deleteProduct() {
   list.removeChild(this.parentNode);
} 




