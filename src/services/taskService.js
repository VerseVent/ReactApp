import {
  collection,
  addDoc,
  doc,
  getDoc,
  query,
  collectionGroup,
  where,
  getDocs,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";
import { auth, db } from "../../firebase.js";
export const createItem = async (title, description, date) => {
  if (title) {
    date =
      date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear();
    try {
      console.log();
      const TaskDoc = await addDoc(collection(db, "tasks"), {
        userId: auth.currentUser?.uid,
        title: title,
        description: description,
        isDone: false,
        date: date,
      });
      console.log("Document written with ID: ", TaskDoc.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  }
};

export const getTasks = async (userId) => {
  const q = query(collection(db, "tasks"), where("userId", "==", userId));
  const querySnapshot = await getDocs(q);
  const tasks = [];
  querySnapshot.forEach((doc) => {
    tasks.push({ data: doc.data(), id: doc.id });
  });
  return tasks;
};
export const editTaskStatus = async (id, isDone) => {
  const taskRef = doc(db, "tasks", id);
  await updateDoc(taskRef, {
    isDone: isDone,
  });
};
export const deleteTask = async (id) => {
  await deleteDoc(doc(db, "tasks", id));
  console.log("Deleting");
};
