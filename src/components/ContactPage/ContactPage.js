import React, { Component, PropTypes } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './ContactPage.scss';

const title = 'Contact Us';

class ContactPage extends Component {

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
          <h1>{title}</h1>
          <div className="col-lg-12">
            <div>
              <h3>Email</h3>
              <a href="mailto:organizers@rubybd.org" className="mail">organizers@rubybd.org</a>
            </div>

            <div>
              <h3>Call</h3>
              <div>
                <strong>Muntasim:</strong>
                <span> +880 1534 323774 </span>
              </div>
              <div>
                <strong>Fattah:</strong>
                <span> +880 1719 032396 </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

}

export default withStyles(ContactPage, s);
