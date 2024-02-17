import { useRef, useState } from "react";

export default function Login() {
  const email = useRef();
  const password = useRef();

  function handleSubmitClick(event) {
    event.preventDefault();
    console.log('handleBtnClick');
    const emailInput=email.current.value;
    const passwordInput=password.current.value;
    console.log(emailInput, passwordInput);
    event.target.reset();
  }

  return (
    <form onSubmit={handleSubmitClick}>
      <h2>Login</h2>

      <div className="control-row">
        <div className="control no-margin">
          <label htmlFor="email">Email</label>
          <input id="email" type="email" name="email" ref={email} />
        </div>

        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input id="password" type="password" name="password" ref={password} />
        </div>
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button">Login</button>
      </p>
    </form>
  );
}
