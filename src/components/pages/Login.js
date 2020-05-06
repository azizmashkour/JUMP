import React from 'react';
import { withTranslation } from 'react-i18next';
import Header from '../layouts/Header';

// this component fake the login authentication form for any type of user
// matching the validation criteria: username and password constraints.

const Login = (props) => {
  // Create references for Login form tag, username and password inputs tags
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
      return false;
    } else if (input.current.value.length > max) {
      showError(input.current, `${getFieldName(input.current)} must be at less than ${max}`);
      return false;
    } else {
      showSuccess(input.current);
      return true;
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

  // Check validation on form inputs change
  const handleInputChange = (attr) => {
    attr === 'username' ? checkLength(usernameRef, 3, 15) : checkLength(passwordRef, 6, 20);
  }

  // Only submit successfully validated form then redirect to next page
  const submitForm = (event) => {
    event.preventDefault();
    checkRequired([usernameRef, passwordRef]);
    const usernameChecker = checkLength(usernameRef, 3, 15);
    const passwordChecker = checkLength(passwordRef, 6, 20);
    if (usernameChecker && passwordChecker) {
      props.history.replace('/');
    }
  }
  const  { t } = props;

  return (
    <div>
    <Header />
    <h1 className="Lab__title">{t('login.jump_application')}</h1>
    <div className="container">
        <form id="form" className="form" ref={formRef}>
          <h2>{t('login.please_authenticate')}</h2>
          <div className="form-control">
            <label for="username">{t('login.user')}</label>
            <input type="text" id="username" placeholder={t('login.enter_username')} ref={usernameRef} onChange={(e) =>handleInputChange('username')}/>
            <small>{t('login.error_message')}</small>
          </div>
          <div className="form-control">
            <label for="password">{t('login.password')}</label>
            <input type="password" id="password" placeholder={t('login.enter_password')} ref={passwordRef} onChange={(e) =>handleInputChange('password')}/>
            <small>{t('login.error_message')}</small>
          </div>
          <button type="submit" onClick={(e) =>submitForm(e)}>{t('login.submit')}</button>
        </form>
    </div>
    </div>
  );
};

export default withTranslation()(Login);
