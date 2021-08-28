import { connect } from 'react-redux';
import Login from 'src/components/Login';
import {
  changeValue, login, logout, toggleSignup, signup,
  setFieldHasError,
} from 'src/actions/user';

const mapStateToProps = (state) => ({
  firstname: state.user.firstname,
  lastname: state.user.lastname,
  username: state.user.username,
  email: state.user.email,
  password: state.user.password,
  passwordConfirmation: state.user.passwordConfirmation,
  isLogged: state.user.logged,
  signup: state.user.signup,
  loginError: state.user.loginError,
  fieldHasError: state.user.fieldHasError,
});

const mapDispatchToProps = (dispatch) => ({
  handleToggleSignup: () => {
    dispatch(toggleSignup());
  },
  changeField: (value, key) => {
    dispatch(changeValue(value, key));
  },
  handleLogin: () => {
    dispatch(login());
  },
  handleLogout: () => {
    dispatch(logout());
  },
  handleSignup: () => {
    dispatch(signup());
  },
  handleFieldHasError: (value) => {
    dispatch(setFieldHasError(value));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
