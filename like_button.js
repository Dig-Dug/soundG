'use strict';

const e = React.createElement;
const rt = React.createElement;
const name1 = "Josh Perez";
const element = "Hello, world";

class LikeButton extends React.Component {
  constructor(props) {
    
    super(props);
    this.state = { liked: false };
  }

  render() {
    

    if (this.state.liked) {
      return 'You liked this.'+ 12;
    }

    return e(
      'button',
      { onClick: () => this.setState({ liked: true }) },
      'Like', element + name1
    
      );
      
  }
}
class u extends React.Component{
  constructor(props) {
    
    super(props);
    this.state = { liked: false };
  }

  render() {
    if (this.state.liked) {
      return 'Y555555555ou liked this.'+ 12;
    }
    return rt(
      'button',
      { onClick: () => this.setState({ liked: true }) },
      'Shite'
    
      );
  }
}

const domContainer = document.querySelector('#like_button_container');

const doomContainer = document.querySelector('#test');
ReactDOM.render(e(LikeButton), domContainer);
ReactDOM.render(rt(u), doomContainer);


ReactDOM.render(element, document.getElementById('root'));
