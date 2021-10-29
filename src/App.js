import UserForm from "./components/UserForm";
import "./App.css";

function App() {
  return (
    <div className="App">
      <UserForm />

      <h3>Your Form Data</h3>
      <p>{UserForm.firstName}</p>
      <p>{UserForm.lastName}</p>
      <p>{UserForm.email}</p>
      <p>{UserForm.password}</p>
      <p>{UserForm.confirmPassword}</p>
    </div>
  );
}

export default App;
