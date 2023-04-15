document.addEventListener("DOMContentLoaded", () => {
  const inputField = document.getElementById("new-task-description");
  const formElement = document.querySelector("form");
  formElement.addEventListener('submit', (event) => {
  let newtask =inputField.value

  event.preventDefault();
    if (newtask.length===0){
    alert('Task cannot be empty')
    }else{
      handleToDo(newtask);
    }
    formElement.reset()
  });
});

function handleToDo (newtask) {
  let listItem = document.createElement("li");
  let btn = document.createElement('button')

  btn.addEventListener('click',handleDelete)
  btn.textContent='X'
  listItem.innerText = `${newtask}`;
  listItem.appendChild(btn)
  document.querySelector("#tasks").appendChild(listItem);
}

function handleDelete(e){
e.target.parentNode.remove()
}