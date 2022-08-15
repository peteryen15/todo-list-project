let section = document.querySelector("section");
let add = document.querySelector("form button");
add.addEventListener("click", (e) => {
  e.preventDefault();

  // get input values
  let form = e.target.parentElement;
  let todoText = form.children[0].value;
  let todoMonth = form.children[1].value;
  let todoDay = form.children[2].value;

  // check input values
  let warning = document.querySelector(".warning");
  if (todoText === "") {
    warning.innerText = "*請輸入內容";
    return;
  } else if (todoMonth < 1 || todoMonth > 12) {
    warning.innerText = "*請輸入正確月份";
    return;
  } else if (todoDay < 1 || todoDay > 31) {
    warning.innerText = "*請輸入正確日期";
    return;
  } else {
    warning.innerHTML = "&nbsp";
  }

  // create todo
  let todoDiv = document.createElement("div");
  todoDiv.classList.add("todo");
  let textP = document.createElement("p");
  textP.classList.add("todo-text");
  textP.innerText = todoText;
  let timeP = document.createElement("p");
  timeP.classList.add("todo-time");
  timeP.innerText = todoMonth + " / " + todoDay;
  todoDiv.appendChild(textP);
  todoDiv.appendChild(timeP);

  // create checkbox
  let completeCheckBox = document.createElement("input");
  completeCheckBox.setAttribute("type", "checkbox");
  completeCheckBox.classList.add("complete");
  completeCheckBox.addEventListener("change", (e) => {
    let todoItem = e.target.parentElement;
    todoItem.classList.toggle("done");
  });

  // create delete button
  let deleteButton = document.createElement("button");
  deleteButton.classList.add("delete");
  deleteButton.innerText = "Delete";
  deleteButton.addEventListener("click", (e) => {
    let todoItem = e.target.parentElement;
    todoItem.remove();
  });

  todoDiv.appendChild(completeCheckBox);
  todoDiv.appendChild(deleteButton);

  form.children[0].value = "";
  section.appendChild(todoDiv);
});
