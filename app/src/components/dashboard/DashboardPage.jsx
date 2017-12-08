import React from 'react';
import Topbar from '../topbar';
import MiddleSection from '../middleScetion/middleSection';

class DashboardPage extends React.Component {
  render() {
    return (
      <div>
        <h1> <i className="icon-sub"></i> Hello from react app s</h1>
        <Topbar/>
        <MiddleSection/>
      </div>
    );
  }
}

export default DashboardPage;
