import React, { Component, PropTypes } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './RegisterPage.scss';

const title = 'Registration';

class RegisterPage extends Component {

  static contextTypes = {
    onSetTitle: PropTypes.func.isRequired,
  };

  componentWillMount() {
    this.context.onSetTitle(title);
  }

  render() {
    return (
      <div className={s.root}>
        <div className={s.container}>
          <h1>
            {title}
            <p className={s.subheading}>Open till 16 April, 2017</p>
          </h1>

          <ol>
            <li>
              Fill up the participant&nbsp;
              <a href="https://docs.google.com/forms/d/e/1FAIpQLScf1XMMzFMC2gSt4NExjiNyNlVhtaw32AZodjC6JLQLeM179Q/viewform?usp=sf_link">
                information form
              </a>
            </li>
            <li>
              Pay BDT 200 as registration fee (excluding the payment transaction fee) to one of the Bkash number 01833362458
            </li>
            <li>
              Let us know your payment transaction number by sending an email at&nbsp;
              <a href="mailto:organizers@rubybd.org">organizers@rubybd.org</a>
              from your registration email address. Alternatively you can fill up the&nbsp;
              <a href="https://docs.google.com/forms/d/e/1FAIpQLSdWEXm5H5Q8kN-5MfNzF3235qYoX6x3m-UCF45YtkvGB_y7Sw/viewform?usp=sf_link">
                payment confirmation form
              </a>.
            </li>
          </ol>
        </div>
      </div>
    );
  }

}

export default withStyles(RegisterPage, s);
