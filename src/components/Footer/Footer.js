import React, { Component } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Footer.scss';
import Link from '../Link';

class Footer extends Component {
  render() {
    return (
      <div className={s.root}>
        <div className={s.container}>
          <span className={s.text}>© Ruby Bangladesh</span>
          <span className={s.spacer}>·</span>
          <Link className={s.link} to="/">Home</Link>
          <span className={s.spacer}>·</span>
          <Link className={s.link} to="/privacy">Privacy</Link>
          <span className={s.spacer}>·</span>
          <Link className={s.link} to="/code_of_conduct">Code of conduct</Link>
        </div>
      </div>
    );
  }
}

export default withStyles(Footer, s);
