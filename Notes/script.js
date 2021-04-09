const btnAdd = document.getElementById("add");
const notes = document.getElementById("notes-field");

const notesStorage = JSON.parse(localStorage.getItem('notesStorage'));

console.log(notesStorage);
if(notesStorage!=null)
{
    for(let i =0;i<notesStorage.length;i++)
{   
    console.log(notesStorage[i]);
    if(notesStorage[i]){
        addNote(notesStorage[i]);
    }
}
}




function addNote(text = ''){
    console.log(text);

    // let notesList = notes.querySelectorAll(".note");

    // for(let i =0;i <notesList.length;i++)
    // {
    //     let main = notesList[i].querySelector(".main");
    //     let textarea = notesList[i].getElementsByTagName("textarea");
    //     let toolbar = notesList[i].querySelector(".tool");
    //     main.style.display="block";
    //     textarea[0].style.display="none";
    //     main.innerHTML=textarea[0].value;
    //     toolbar.style.background="#9EC862";
    // }

    let newNote=document.createElement("div");
    newNote.className="note";
    newNote.innerHTML=`<div class="tool">
    <button class="edit"><i class="fas fa-edit"></i></button>
    <button class="delete"><i class="fas fa-trash-alt"></i></button>
</div>
<div class="main">${text}</div>
<textarea></textarea>`
    notes.appendChild(newNote);
    let btnDelete = newNote.querySelector(".delete");
    btnDelete.addEventListener("click",removeNote,false);
    let btnEdit = newNote.querySelector(".edit");
    btnEdit.addEventListener("click",editNote,false);
    let toolbar = newNote.querySelector(".tool");

    if(text==''){
        btnEdit.parentNode.parentNode.querySelector(".main").style.display="none";
        btnEdit.parentNode.parentElement.getElementsByTagName("textarea")[0].focus();
    }
    else{
        btnEdit.parentNode.parentElement.getElementsByTagName("textarea")[0].display="none";
        toolbar.style.background="#9EC862";
    }

}

function removeNote(){
    this.parentNode.parentNode.remove();
    updateLS();
}

function editNote(){
    let main = this.parentNode.parentNode.querySelector(".main");
    let textarea = this.parentNode.parentElement.getElementsByTagName("textarea");
    let toolbar = this.parentNode;
   
    if(main.style.display=="none")
    {
        main.style.display="block";
        textarea[0].style.display="none";
        main.innerHTML=textarea[0].value;
        toolbar.style.background="#9EC862";
        updateLS();
    }
    else
    {
        main.style.display="none";
        textarea[0].style.display="block";
        toolbar.style.background="#d4393f";
        textarea[0].focus();
    }

    
}

function updateLS(){
    const notesText = document.querySelectorAll(".main");
    console.log(notesText.length);
    const notesStorage = [];

    for(let i =0;i<notesText.length;i++)
    {
        notesStorage.push(notesText[i].innerHTML);
    }
    
    localStorage.setItem('notesStorage',JSON.stringify(notesStorage));

}

btnAdd.addEventListener("click",function (e){addNote();},false)
