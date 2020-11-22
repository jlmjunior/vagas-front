import axios from 'axios';

export const Auth = async (username, password) => {
  const link = 'https://localhost:44369/api/auth/login';

  const data = {
    username: username,
    password: password
  }

  try {
    await axios.post(link, data, {

      headers: {
        'Content-Type': 'application/json'
      }

    }).then(function (response) {
      localStorage.setItem('userconfig', JSON.stringify(response.data))
    });
    
  } 
  catch (ex) {
    return ex.response.status;
  }

  return 200;

}

export const Register = async (user) => {
  const link = 'https://localhost:44369/api/auth/Register';

  const data = {
      UserName: user.username,
      FullName: user.fullName,
      Password: user.password,
      ConfirmPassword: user.confirmPassword
  }

  try {
    await axios.post(link, data, {

      headers: {
        'Content-Type': 'application/json'
      }

    }).then(function (response) {
      //
    });
    
  } 
  catch (ex) {
    return ex.response.status;
  }

  return 200;

}