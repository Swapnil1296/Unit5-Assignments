export const Todoitem = ({todo, handelstatus}) => {
  return (
    <div>
      <div></div>
      {todo.title}-{todo.status ? "done" : "Not done"}
      <button style={{hight:"20px"}} onClick={() => handelstatus(todo.id)}>Toggel</button>
    </div>
  );
};
