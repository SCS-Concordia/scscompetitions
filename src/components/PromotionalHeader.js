import React, { Component } from 'react';

class PromotionalHeader extends Component {
  render() {
    return (
      <div className="PromotionalHeader">
        <img src="comps_logo.png" alt="competitions logo" id="logo"/>
        <h3>Join our Slack group!</h3>
        <a href="https://join.slack.com/t/scscompetitions/shared_invite/MjE0MzMxMTExNjE3LTE1MDA0Nzc4NjQtMThlYTU1OTMyMw" rel="noopener noreferrer" target="_blank">
          <img src="slack_logo.png" alt="slack logo" id="slack"/>
        </a>
      </div>
    );
  }
}

export default PromotionalHeader;
