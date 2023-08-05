const getLastID = () => {
  let lastID = 0;
  for (const ToDo of toDoArray) {
    if (ToDo.id > lastID) {
      lastID = ToDo.id;
    }
  }
  return lastID;
};

const getID = () => {
  id = prompt("Enter the id: ");
  return (id = parseInt(id));
};

const getArray = () => {
  const Array = JSON.stringify(toDoArray);
  alert(Array);
  console.log(toDoArray);
};
