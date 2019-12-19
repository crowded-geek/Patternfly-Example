import React from 'react';
import '@patternfly/react-core/dist/styles/base.css';
import DefAlert from '../components/Alert.js';
import ActionsDataList from '../components/DataList.js';
import SimpleCard from '../components/Card.js';
import SimpleModal from '../components/Modal.js';
import ButtonVariants from '../components/Button.js';
function MainPage() {
  return (
    <div className="App" class=".pf-m-redhat-font">
      <center>
        <br/>
        <font size="6"><b>PatternFly4 Alerts:</b></font>
        <div style={{width:25+'%'}} align="left">
          <DefAlert/>
        </div>
      </center>
      <center>
        <br/>
        <font size="6"><b>PatternFly4 DataList:</b></font>
        <div style={{width:60+'%'}} align="left">
          <ActionsDataList/>
        </div>
      </center>
      <center>
        <br/>
        <font size="6"><b>PatternFly4 Card:</b></font>
        <div style={{width:40+'%'}} align="left">
          <SimpleCard/>
        </div>
      </center>
      <center>
        <br/>
        <font size="6"><b>PatternFly4 Modal:</b></font>
        <div style={{width:40+'%'}} align="center">
          <SimpleModal/>
        </div>
      </center>
      <center>
        <br/>
        <font size="6"><b>PatternFly4 Buttons:</b></font>
        <div style={{width:40+'%'}} align="center">
          <ButtonVariants/>
        </div>
      </center>
      <br/>
      <br/>
    </div>
  );
}

export default MainPage;
