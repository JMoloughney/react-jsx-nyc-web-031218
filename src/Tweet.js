import React from 'react';

class Tweet extends React.Component {
  render() {
    return (
      <div className="tweet">
        <img src="https://metrouk2.files.wordpress.com/2018/03/giphy9.gif?w=748&h=561&crop=1" className="tweet__avatar" />
        <div className="tweet__body">
          <p>We are writing this tweet in JSX. Holy moly!</p>
        </div>
      </div>
    );
  }
}

export default Tweet;
