import { connect } from 'react-redux';
import Settings from 'src/components/Settings';

import {
  changeValue, changeUsername, changePassword, deleteAccount,
} from 'src/actions/user';

const mapStateToProps = (state) => ({
  usernameChange: state.user.usernameChange,
  passwordForUsername: state.user.passwordForUsername,
  password: state.user.password,
  newPassword: state.user.newPassword,
  passwordConfirmation: state.user.passwordConfirmation,
});

const mapDispatchToProps = (dispatch) => ({
  changeField: (value, key) => {
    dispatch(changeValue(value, key));
  },
  handleUsernameChange: () => {
    dispatch(changeUsername());
  },
  handlePasswordChange: () => {
    dispatch(changePassword());
  },
  handleDeleteAccount: () => {
    dispatch(deleteAccount());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Settings);
