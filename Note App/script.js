// this code is just to add and show the todos <start>

// localStorage name nilam 

let noteList = JSON.parse(localStorage.getItem("nilam❤️")) || [];
// function addNaotes 

function addNote() {
    const user = document.getElementById("user").value;
    if (user !== "") {
        noteList.push({ notes: user });
        localStorage.setItem("nilam❤️", JSON.stringify(noteList));
        document.getElementById("user").value = '';
        viewTodos()
    }else{
        alert("Enter any think you mind note")
    }
}

// sartr viwe noteTodos
function viewTodos() {
    const notes = document.getElementById("notes");
    notes.innerHTML = "";
    noteList.forEach((todo, index) => {
        const listItem = document.createElement("li");
        listItem.textContent = todo.notes;
        // btn wrapper 
        const btnWrapper = document.createElement("span");
        // add delete btn 
        const deleteButton = document.createElement("button");
        deleteButton.innerHTML = "<i class='fa fa-trash'></i>";
        deleteButton.setAttribute("onclick", `deleteTodo(${index})`);
        deleteButton.setAttribute("class", "delete-btn");
        // edit btn 
        const editButton = document.createElement("button");
        editButton.innerHTML = "<i class='fa fa-edit'></i> Edit ";
        editButton.setAttribute("onclick", `editTodo(${index})`);
        editButton.setAttribute("class", "edit-btn");

        notes.appendChild(listItem);
        listItem.appendChild(btnWrapper);
        btnWrapper.appendChild(editButton);
        btnWrapper.appendChild(deleteButton);
    });
    document.getElementById("user").value = "";
}
viewTodos();
// end viwe noteTodos

// note use but i creste last all Del fink 

// delete all function start
function deleteAll() {
    const consent = confirm("Are You Sure  bro  to delete All ? ");
    if(consent){
        localStorage.clear()
        location.reload()
    }  
}
// delete all function end


// to add by enter button function start 
document.getElementById('note-form').addEventListener("submit",function(e){
    e.preventDefault();
    addNote() ;
})
// to add by enter button function endf 


// to delete single todo function start 
function deleteTodo(index) {
    noteList.splice(index, 1);
    localStorage.setItem("nilam❤️", JSON.stringify(noteList));
    viewTodos()
  }
// to delete single todo function end


// Edit todo function start
function editTodo(index) {
    const notes = document.getElementById("notes");
    const listItems = notes.querySelectorAll("li");
    const listItem = listItems[index];
    
    // Get the current todo text
    const currentTodo = noteList[index].notes;
    
    // Clear the list item
    const btnWrapper = listItem.querySelector("span");
    listItem.innerHTML = "";
    
    // Create edit input
    const editInput = document.createElement("input");
    editInput.type = "text";
    editInput.value = currentTodo;
    editInput.className = "edit-input";
    
    // Create save button
    const saveButton = document.createElement("button");
    saveButton.innerHTML = "<i class='fa fa-check'></i>";
    saveButton.className = "save-btn";
    
    // Create cancel button
    const cancelButton = document.createElement("button");
    cancelButton.innerHTML = "<i class='fa fa-times'></i>";
    cancelButton.className = "cancel-btn";
    
    // Add event listener to save button
    saveButton.addEventListener("click", function() {
      const newTodo = editInput.value.trim();
      if (newTodo !== "") {
        noteList[index].notes = newTodo;
        localStorage.setItem("nilam❤️", JSON.stringify(noteList));
        viewTodos();
      }
    });
    
    // Add event listener to cancel button
    cancelButton.addEventListener("click", function() {
      viewTodos();
    });
    
    // Add event listener for Enter key
    editInput.addEventListener("keypress", function(e) {
      if (e.key === "Enter") {
        const newTodo = editInput.value.trim();
        if (newTodo !== "") {
          noteList[index].notes = newTodo;
          localStorage.setItem("nilam❤️", JSON.stringify(noteList));
          viewTodos();
        }
      }
    });

  // Append elements to list item
  listItem.appendChild(editInput);
  listItem.appendChild(saveButton);
  listItem.appendChild(cancelButton);
  
  // Focus on the input
  editInput.focus();
}
// Edit todo function end
