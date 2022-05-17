import { auth } from "../../firebase";

export class UserService {
  static createUser(email, password) {
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((userCredentials) => {
        const user = userCredentials.user;
        console.log(user.email);
      })
      .catch((error) => alert(error.message));
  }
}
