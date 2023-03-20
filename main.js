//Storing the data as object in the storage
let submit = document.getElementById("submit");
let itemList =document.getElementById('items');

submit.addEventListener('click',formData)

function formData(e){
    e.preventDefault();
    let expenseAmount = document.getElementById('amount').value;
    let expenseDescription = document.getElementById('description').value;
    let expenseCategory = document.getElementById('category').value;

    let myObj = {
        amount: expenseAmount,
        description: expenseDescription,
        category: expenseCategory
      };
      let myObj_serialized = JSON.stringify(myObj);
      localStorage.setItem(expenseDescription, myObj_serialized);
    
    //creating a new li that stores all these inputs
    let li = document.createElement('li');
    let del = document.createElement('button');
    let edit = document.createElement('button');

    //add class to this new div
    li.className = "displayDetails";
    del.className = 'btn-danger delete btn-sm rounded-0'
    edit.className = 'edit btn-sm rounded-0'

    //add id to new div
    li.id = "details";
    del.id='delete';
    edit.id='edit';

    //inserting content
    let newliText = document.createTextNode(expenseAmount+'-'+expenseDescription+'-'+expenseCategory);
    let deleteText = document.createTextNode('DELETE');
    let editText = document.createTextNode('EDIT');
    li.appendChild(newliText);
    del.appendChild(deleteText);
    edit.appendChild(editText);

    //inserting in dom
    let container = document.querySelector('#items');
    container.appendChild(li);
    li.appendChild(del);
    li.appendChild(edit);

    del.onclick = () =>{
        localStorage.removeItem(myObj.description);
        itemList.removeChild(li);
    }
    edit.onclick = () =>{
        document.getElementById('amount').value=myObj.amount;
        document.getElementById('description').value=myObj.description;
        document.getElementById('category').value=myObj.category;
        localStorage.removeItem(myObj.description);
        itemList.removeChild(li);
    }

}
