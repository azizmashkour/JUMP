import React, { useState } from 'react';
import { withTranslation } from 'react-i18next';
import { options } from '../../configs/options';

const Login = ({lang, i18n, t}) => {
  const [state, setState] = useState({ lang: options[0], });

  const formRef = React.createRef();
  const usernameRef = React.createRef();
  const passwordRef = React.createRef();

  // Show input error message
  const showError = (input, message) => {
    const formControl = input.parentElement;
    formControl.className = "form-control error";
    const small = formControl.querySelector("small");
    small.innerText = message;
  }

  // Show success outline
  const showSuccess = (input) => {
    const formControl = input.parentElement;
    formControl.className = "form-control success";
  }

  // To make the first letter in the error message capital
  const getFieldName =(input) => {
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
  }

  // Check Input Length
  const checkLength =(input, min, max) => {
    if (input.current.value.length < min) {
      showError(input.current, `${getFieldName(input.current)} must be at least ${min}`);
    } else if (input.current.value.length > max) {
      showError(input.current, `${getFieldName(input.current)} must be at less than ${max}`);
    } else {
      showSuccess(input.current);
      this.props.history.replace('/');
    }
  }

  // Check required fields
  const checkRequired = (inputArr) => {
    inputArr.forEach((input) => {
      if (input.current.value.trim() === "") {
        showError(input.current, `${getFieldName(input.current)} is required`);
      } else {
        showSuccess(input.current);
      }
    });
  }

  const handleInputChange = (attr) => {
    attr === 'username' ? checkLength(usernameRef, 3, 15) : checkLength(passwordRef, 6, 20);
  }

  const submitForm = (event) => {
    event.preventDefault();
    checkRequired([usernameRef, passwordRef]);
  }

  return (
    <div>
    <h1 className="Lab__title">Application JUMP</h1>
    <div className="container">
        <form id="form" className="form" ref={formRef}>
          <h2>Veuillez vous authentifier</h2>
          <div className="form-control">
            <label for="username">Utilisateur</label>
            <input type="text" id="username" placeholder="Enter username" ref={usernameRef} onChange={(e) =>handleInputChange('username')}/>
            <small>Error Message</small>
          </div>
          <div className="form-control">
            <label for="password">Mot de passe</label>
            <input type="password" id="password" placeholder="Enter password" ref={passwordRef} onChange={(e) =>handleInputChange('password')}/>
            <small>Error Message</small>
          </div>
          <button type="submit" onClick={(e) =>submitForm(e)}>Submit</button>
        </form>
    </div>
    </div>
  );
};

export default withTranslation()(Login);
