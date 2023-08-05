const getLastID = () => {
  let lastID = 0;
  for (const ToDo of toDoArray) {
    if (ToDo.id > lastID) {
      lastID = ToDo.id;
    }
  }
  return lastID;
};

const Array = () => {
  const Array = JSON.stringify(toDoArray);
  console.log(toDoArray);
};
