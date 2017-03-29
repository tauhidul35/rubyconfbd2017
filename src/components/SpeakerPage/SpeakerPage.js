import React, { Component, PropTypes } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './SpeakerPage.scss';

const title = 'Call for Speaker';

class SpeakerPage extends Component {

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
            <p className={s.subheading}>Open till 07 April, 2017</p>
          </h1>

          <p>
            Speakers are the heart of the conference. We request you to submit your proposal. We will get back to you after
            reviewing your proposal. Selected speakers will receive free entry to the conference.
          </p>

          <a href="https://docs.google.com/forms/d/e/1FAIpQLSe3knhNeKYPM0B2tsJYKiYAwG20zl-KAhJEWU0kc3CJbk9_HQ/viewform?usp=sf_link"
             className={s.button}>Submit your proposal here</a>
        </div>
      </div>
    );
  }

}

export default withStyles(SpeakerPage, s);
