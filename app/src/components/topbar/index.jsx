import React from 'react';
import { Button } from 'react-bootstrap';
import './topbar.scss';

class Topbar extends React.Component {
  render() {
    return (
      <div>
        <h1> <i className="icon-channel"></i> Hello from react app</h1>
        <Button bsStyle="primary">Link</Button>
      </div>
    );
  }
}

export default Topbar;
