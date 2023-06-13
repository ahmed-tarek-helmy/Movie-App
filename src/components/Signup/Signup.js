import {React,useState} from "react";
import { Form, Button, Alert, Container } from "react-bootstrap";
const Signup =()=>{
    
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [nameErr, setNameErr] = useState("");
  const [emailErr, setEmailErr] = useState("");
  const [passwordErr, setPasswordErr] = useState("");
  const [confirmPasswordErr, setConfirmPasswordErr] = useState("");

  const handleChange = (e) => {
    if (e.target.id === "name") {
      setName(e.target.value);
      setNameErr(
        e.target.value.length === 0
          ? "This field is required"
          : e.target.value.length < 3
            ? "Min. Length is 3 characters"
            : null
      );
    }

    if (e.target.id === "email") {
      setEmail(e.target.value);
      setEmailErr(
        e.target.value.length === 0
          ? "This field is required"
          : !isValidEmail(e.target.value)
            ? "Please enter a valid email address"
            : null
      );
    }

    if (e.target.id === "password") {
      setPassword(e.target.value);
      setPasswordErr(
        e.target.value.length === 0
          ? "This field is required"
          : e.target.value.length < 6
            ? "Min. Length is 6 characters"
            : null
      );
    }

    if (e.target.id === "confirmPassword") {
      setConfirmPassword(e.target.value);
      setConfirmPasswordErr(
        e.target.value.length === 0
          ? "This field is required"
          : e.target.value !== password
            ? "Passwords do not match"
            : null
      );
    }
  };

  const handleSubmitForm = (e) => {
    e.preventDefault();
    console.log({
      name,
      email,
      password,
      confirmPassword,
    });
  };

  const isValidEmail = (email) => {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  };
return(
    <>
    <br></br>
    <Container className="mt-5 w-50 bg-dark text-white">
      <Form className="bg-form p-3 rounded-4" onSubmit={handleSubmitForm}>
        <h2 >Sign Up</h2>

        <Form.Group className="mb-3" controlId="name">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Please enter your name"
            value={name}
            onChange={(e) => handleChange(e)}
            isInvalid={!!nameErr}
          />
          <Form.Control.Feedback type="invalid">
            {nameErr}
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3" controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Please enter your email"
            value={email}
            onChange={(e) => handleChange(e)}
            isInvalid={!!emailErr}
          />
          <Form.Control.Feedback type="invalid">
            {emailErr}
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3" controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Please enter a password"
            value={password}
            onChange={(e) => handleChange(e)}
            isInvalid={!!passwordErr}
          />
          <Form.Control.Feedback type="invalid">
            {passwordErr}
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3" controlId="confirmPassword">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Please confirm your password"
            value={confirmPassword}
            onChange={(e) => handleChange(e)}
            isInvalid={!!confirmPasswordErr}
          />
          <Form.Control.Feedback type="invalid">
            {confirmPasswordErr}
          </Form.Control.Feedback>
        </Form.Group>

        <Button variant="danger" type="submit">
          SignUp
        </Button>

        {(nameErr || emailErr || passwordErr || confirmPasswordErr) && (
          <Alert variant="danger" className="mt-3">
           Errors Above And Try Again.
          </Alert>
        )}
      </Form>
    </Container >
    </>
)

}
export default Signup;