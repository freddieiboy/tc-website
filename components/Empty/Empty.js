import React, {Component, PropTypes} from 'react';
import {Emojis, randomEmojiNumber} from './Emojis';

import CrateTemplate from './CrateTemplate';


class Empty extends Component {
  constructor(props) {
    super(props);
    this.state = {
      emojiNumber: 0
    }
  }
  addEmojiNumber = () => {
    this.setState({emojiNumber: randomEmojiNumber()})
  }
  render() {
    return (
      <div className="empty" style={{height: '100%', position: 'relative'}}>
        <div className="emptyCrate"
          style={{position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)'}}
          onMouseUp={this.addEmojiNumber}
          onTouchEnd={this.addEmojiNumber}>
          <CrateTemplate color={'empty'} crateSize={80} cratePreview={'NOTHING_YET'} pop={true} crateType={'empty'} emoji={this.state.emojiNumber}/>
        </div>
      </div>
    )
  }
}

export default Empty;
