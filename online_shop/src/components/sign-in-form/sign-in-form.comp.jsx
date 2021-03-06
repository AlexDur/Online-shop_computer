import { useState, useContext } from "react";

import FormInput from "../form-input/form-input.comp";
import Button from "../button/button.comp";

/* import { UserContext } from "../../components/contexts/user.context"; */

import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";

import "../sign-up-form/sign-up-form.styles.scss";
import { signInWithEmailAndPassword } from "firebase/auth";
import { UserContext } from "../contexts/user.context";

const defaultFormFields = {
  email: "",
  password: "",
};

const SignInForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  console.log("hit");
  //useContext
  const { setCurrentUser } = useContext(UserContext);

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const signInWithGoogle = async () => {
    await signInWithGooglePopup();
  };

  const handleSubmit = async event => {
    event.preventDefault();

    try {
      const { user } = await signInWithEmailAndPassword(email, password);
      /*   setCurrentUser(user); */
      resetFormFields();
    } catch (error) {
      switch (error.code) {
        case "auth/wrong-password":
          alert("incorrect password for email");
          break;
        case "auth/user-not-found":
          alert("no suer associated with this email");
          break;
        default:
          console.log(error);
      }
    }
  };

  const handleChange = event => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <div className="sign-up-container">
      <h2>Already have an account?</h2>
      <span>Sign up with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Email"
          type="email"
          required
          onChange={handleChange}
          name="email"
          value={email}
        />

        <FormInput
          label="Password"
          type="password"
          required
          onChange={handleChange}
          name="password"
          value={password}
        />
      </form>
      <div className="buttons-container">
        <Button type="submit">Sign In</Button>
        <Button type="button" buttonType="google" onClick={signInWithGoogle}>
          Google sign in
        </Button>
      </div>
    </div>
  );
};

export default SignInForm;
