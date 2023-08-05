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

console.log("Available commands: ");
console.log("1. addToDo('title', 'description')");
console.log("2. deleteToDo(id) ");
console.log("3. editToDo(id, 'title', 'description')");
console.log("4. Array()");
console.log(toDoArray);

const addToDo = (title, description) => {
  const newToDo = {
    title: title,
    description: description,
    id: getLastID() + 1,
  };
  toDoArray.push(newToDo);
  console.log("Generated new object: " + JSON.stringify(newToDo));
  console.log(toDoArray);
};

const deleteToDo = (id) => {
  const indexToDoDel = toDoArray.findIndex((todo) => todo.id === id);

  if (indexToDoDel !== -1) {
    toDoArray.splice(indexToDoDel, 1);
    console.log("Object with id " + id + " was deleted.");
    console.log(toDoArray);
  } else {
    console.log("Object with id " + id + " was not found.");
    console.log(toDoArray);
  }
};

const editToDo = (id, title, description) => {
  const indexToDoEdit = toDoArray.findIndex((todo) => todo.id === id);

  if (indexToDoEdit !== -1) {
    toDoArray[indexToDoEdit].title = title;
    toDoArray[indexToDoEdit].description = description;

    console.log("Object with id " + id + " was updated.");
    console.log(toDoArray);
  } else {
    console.log("Object with id " + id + " was not found.");
  }
};
