export const state = {
  users: [
    {
      id: 0,
      email: "123",
      password: "123",
    },
  ],
  tasks: [
    // {
    //   title: "123",
    //   description: "1233",
    //   date: "",
    //   isDone: false,
    // },
  ],
};
let user_id;
export const addUser = (email, password) => {
  if (user_id) {
    user_id++;
    state.users.push({ user_id, email, password });
  } else {
    user_id = 1;
    state.users.push({ user_id, email, password });
  }
};
let task_id;
export const addTask = (title, description, date) => {
  if (task_id) {
    task_id++;
    state.tasks.push({ task_id, title, description, date, isDone: false });
  } else {
    task_id = 1;
    state.tasks.push({ task_id, title, description, date, isDone: false });
  }
  console.log(state.tasks);
};
// export const editTaskStatus = (task_id, isDone) => {
//   // console.log(task_id);
//   // console.log(isDone);

//   state.tasks = state.tasks.map((e) => {
//     // console.log("Element", e);
//     if (e.task_id === task_id) {
//       e.isDone = !isDone;
//       // console.log("If");
//       return e;
//     } else {
//       return e;
//     }
//   });
//   // console.log("ads", state.tasks);
// };
