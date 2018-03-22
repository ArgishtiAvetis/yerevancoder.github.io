import React from 'react';
import PropTypes from 'prop-types';
import Spinner from 'react-spinkit';

import { FANCY_INPUT_BOXES, LOADING_STATE, SPACER_10_H } from '../../utils/constants';
import { updateByPropertyName } from '../../utils/funcs';
import WithEffectInput from '../with-effect-input';
import SubmitInput from '../submit-input';

const INITIAL_STATE = {
  username: '',
  email: '',
  password_one: '',
  password_two: '',
  error: null,
  loading_state: LOADING_STATE.NOT_STARTED_YET,
};

const signup_message = 'Sign up for an account';

export default class SignUpForm extends React.Component {
  state = { ...INITIAL_STATE };

  static contextTypes = { sign_user_up: PropTypes.func };

  onSubmit = event => {
    event.preventDefault();
    const { username, email, password_one, receive_newsletter } = this.state;
    const { sign_user_up } = this.context;
    const { user_did_sign_up } = this.props;

    this.setState(
      () => ({ loading_state: LOADING_STATE.CURRENTLY_LOADING }),
      () =>
        sign_user_up(username, email, password_one, receive_newsletter)
          .then(() => this.setState(() => ({ ...INITIAL_STATE }), user_did_sign_up))
          .catch(error => this.setState(updateByPropertyName('error', error)))
          .then(() => {
            const { error } = this.state;
            this.setState(() => ({ ...INITIAL_STATE, error }));
          })
    );
  };

  render() {
    const { username, email, password_one, password_two, error } = this.state;
    const isInvalid =
      password_one !== password_two || password_one === '' || username === '' || email === '';
    const top_message = error ? (
      <pre className={'AuthingErrorMessage'}>{error.message}</pre>
    ) : (
      <p className={'AuthingWelcomeMessage'}>{signup_message}</p>
    );
    const extra_css_classname =
      this.state.loading_state === LOADING_STATE.CURRENTLY_LOADING
        ? 'ProfileContainer__SpinningCentered'
        : '';

    if (error) {
      console.log(this.state);
    }

    const content =
      this.state.loading_state === LOADING_STATE.CURRENTLY_LOADING ? (
        <div className={'Profile__Container__LoadingSpinner'}>
          <Spinner fadeIn={'quarter'} name={'ball-scale-ripple-multiple'} />
        </div>
      ) : (
        <fieldset>
          {top_message}
          <WithEffectInput
            box_name={FANCY_INPUT_BOXES.SIGNUP_USERNAME}
            query_field={() => this.state.username}
            on_change={event => this.setState(updateByPropertyName('username', event.target.value))}
            input_type={'text'}
            label={'Full Name'}
          />
          <WithEffectInput
            box_name={FANCY_INPUT_BOXES.SIGNUP_EMAIL}
            query_field={() => this.state.email}
            on_change={event => this.setState(updateByPropertyName('email', event.target.value))}
            input_type={'email'}
            label={'Email Address'}
          />
          <WithEffectInput
            box_name={FANCY_INPUT_BOXES.SIGNUP_PASSWORD_ONE}
            query_field={() => password_one}
            on_change={event =>
              this.setState(updateByPropertyName('password_one', event.target.value))
            }
            input_type={'password'}
            label={'Password'}
          />
          <WithEffectInput
            box_name={FANCY_INPUT_BOXES.SIGNUP_PASSWORD_TWO}
            query_field={() => password_two}
            on_change={event =>
              this.setState(updateByPropertyName('password_two', event.target.value))
            }
            input_type={'password'}
            label={'Confirm Password'}
          />
          {SPACER_10_H}
          {SPACER_10_H}
          {SPACER_10_H}
          <SubmitInput disabled={isInvalid} value={'Create Account'} />
        </fieldset>
      );
    return (
      <form
        className={`ReactModal__Content--after-open Profile__Container ${extra_css_classname}`}
        onSubmit={this.onSubmit}>
        {content}
      </form>
    );
  }
}
