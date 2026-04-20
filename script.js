//variables
let tasks = [];
let searchfield = document.querySelector(".Search");
let actionbtn = document.querySelector(".action-btn");
let allbtn = document.querySelector(".allbtn");
let activebtn = document.querySelector(".activebtn");
let completedbtn = document.querySelector(".completedbtn");
let inputfield = document.querySelector(".input-task");
let date = document.querySelector(".dueDate");
let addbtn = document.querySelector(".add-btn");
let tasklist = document.querySelector(".tasklist");

//functions

function createtasks(taskobject) {
  //list creation
  let li = document.createElement("li");
  let span = document.createElement("span");
  span.textContent = taskobject.text;

  // date creation
  let date = document.createElement("small");
  date.textContent = taskobject.dueDate || "";

  //checkbox creation
  let checkbox = document.createElement("input");
  checkbox.type = "input";
  checkbox.checked = taskobject.completed;
  if (checkbox.checked) {
    span.style.textDecoration = "line-throught";
  } else {
    span.style.textDecoration = "none";
  }
  // checkbox event listener
  checkbox.addEventListener("click", () => {
    tasks = tasks.map((t) => {
      if (t.id === taskobject.id) {
        return { ...t, completed: checkbox.checked };
      } else {
        return t;
      }
    });
    localStorage.setItem("tasks", JSON.stringify(tasks));
    if (checkbox.checked) {
      span.style.textDecoration = "line-throught";
    } else {
      span.style.textDecoration = "none";
    }
  });

  //edit creation
  let editbtn = document.createElement("button");
  editbtn.textContent = "Edit";
  editbtn.classList.add("edit-btn");

  // edit event listener
  editbtn.addEventListener("click", () => {
    let editfield = document.createElement("input");
    editfield.value = span.textContent;
    li.replaceChild(editfield, span);

    editfield.addEventListener("keydown", (e) => {
      if (e.key === "Enter") {
        span.textContent = editfield.value;
        li.replaceChild(span, editfield);

        tasks = tasks.map((t) => {
          if (t.id === taskobject.id) {
            return { ...t, text: editfield.value };
          } else {
            return t;
          }
        });
        localStorage.setItem("tasks", JSON.stringify(tasks));
      }
    });
  });
}
