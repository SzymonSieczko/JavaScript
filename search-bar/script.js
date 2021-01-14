const list=document.querySelector('ul');
const inputField = document.querySelector('input');
const submitButton = document.querySelector('button');

submitButton.addEventListener('click',history);
let myArray = [];

function history(){

    if(inputField.value!=='')
    {
        myArray.unshift(inputField.value);
        if(myArray.length>5)
        {
            myArray.pop();
        }

        list.innerHTML='';

        for(let i=0;i<myArray.length;i++)
        {
            let result = document.createElement('li');
            result.textContent=myArray[i];
            list.appendChild(result);
        }

        inputField.value='';
        inputField.focus();
    }
}