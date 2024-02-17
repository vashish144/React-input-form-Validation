
import { isEmail, isNotEmpty } from "../util/validation";
import Input from "./Input";
import { useInput } from "../hooks/useInput";

export default function LoginState() {
  const { value: emailValue, handleInputChange: handleEmailChange, handleInputBlur: handleEmailBlur, hasError: emailError } = useInput('', (value) => isEmail(value) && isNotEmpty(value));
  const { value: passWordValue, handleInputChange: handlePassWordChange, handleInputBlur: handlePasswordBlur, hasError: passWordError } = useInput('', (value) => isNotEmpty(value));
  console.log(emailError);

  function handleSubmitClick(event) {
    event.preventDefault();
    // setEnteredValue({name:'', email:''})
  }
  
  return (
    <form onSubmit={handleSubmitClick}>
      <h2>Login</h2>

      <div className="control-row">
        <Input label="Email" value={emailValue} id="email" type="email" name="email" onChange={handleEmailChange} onBlur={handleEmailBlur} error={emailError && 'EnValid email'} />
        <Input label="Password" value={passWordValue} id="password" type="password" name="password" onChange={handlePassWordChange} onBlur={handlePasswordBlur} error={passWordError && 'PassWord not Valid'} />
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button">Login</button>
      </p>
    </form>
  );
}
