let listObj = JSON.parse(localStorage.getItem("listObj") || "[]");
renderList();
document.getElementById("input-btn").addEventListener("click", () => getData());
document
  .getElementById("reset-btn")
  .addEventListener("click", () => removeList());

function getData() {
  const taskInput = document.getElementById("input-task");
  const dateInput = document.getElementById("input-date");
  const taskDisplay = document.getElementById("render-list");

  let taskName = taskInput.value;
  let taskDate = dateInput.value;

  if (taskName == "" || taskDate == "") {
    alert("Enter valid input");
  } else {
    let dateParts = taskDate.split("-");
    let formatedDate = `${dateParts[2]}-${dateParts[1]}-${dateParts[0]}`;
    listObj.push({ name: taskName, date: formatedDate });
  }
  taskInput.value = "";
  dateInput.value = "";

  renderList();
}

function renderList() {
  localStorage.setItem("listObj", JSON.stringify(listObj));
  let list = "";
  let pColor = lightTheme ? "rgb(0,0,0)" : "rgb(255,255,255)";
  listObj.forEach((task, index) => {
    list += `<p style="color:${pColor}"><span>${task.name}</span><span>${task.date}</span><button onclick="removeData(${index})" class="remove-task">Remove</button></p>`;
  });

  document.getElementById("render-list").innerHTML = list;
}

function removeData(index) {
  listObj.splice(index, 1);
  renderList();
}

function removeList() {
  if (listObj.length == 0) alert("No tasks to reset");
  else {
    alert("All tasks have been cleared");
    listObj = [];
    renderList();
  }
}
