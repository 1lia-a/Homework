const todo1 = {
  title: "To Do 1",
  description: "To Do 1 description",
  id: 1,
};
const todo2 = {
  title: "To Do 2",
  description: "To Do 2 description",
  id: 2,
};
const todo3 = {
  title: "To Do 3",
  description: "To Do 3 description",
  id: 3,
};

const toDoArray = [todo1, todo2, todo3];

const addToDo = (title, description) => {
  title = prompt("Enter the title: ");
  description = prompt("Enter the description: ");
  const newToDo = {
    title: title,
    description: description,
    id: getLastID() + 1,
  };
  toDoArray.push(newToDo);
  alert("Generated new object: " + JSON.stringify(newToDo));
  console.log(toDoArray);
};

const deleteToDo = (id) => {
  id = getID();
  const indexToDoDel = toDoArray.findIndex((todo) => todo.id === id);

  if (indexToDoDel !== -1) {
    toDoArray.splice(indexToDoDel, 1);
    alert("Object with id " + id + " was deleted.");
    console.log(toDoArray);
  } else {
    alert("Object with id " + id + " was not found.");
    console.log(toDoArray);
  }
};

const editToDo = (id, newParams) => {
  id = getID();
  const indexToDoEdit = toDoArray.findIndex((todo) => todo.id === id);

  if (indexToDoEdit !== -1) {
    const oldTitle = toDoArray[indexToDoEdit].title;
    const oldDescription = toDoArray[indexToDoEdit].description;

    const newTitle = prompt("Enter the new title:", oldTitle);
    const newDescription = prompt("Enter the new description:", oldDescription);

    toDoArray[indexToDoEdit].title = newTitle;
    toDoArray[indexToDoEdit].description = newDescription;

    alert("Object with id " + id + " was updated.");
    console.log(toDoArray);
  } else {
    alert("Object with id " + id + " was not found.");
  }
};
