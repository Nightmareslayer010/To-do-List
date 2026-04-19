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
}
