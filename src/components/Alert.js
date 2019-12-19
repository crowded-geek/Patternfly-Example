import React from 'react';
import { Alert, AlertActionLink, AlertActionCloseButton } from '@patternfly/react-core';

class DefAlert extends React.Component {
  constructor(props) {
    super(props);
    this.state = { alertOneVisible: true, alertTwoVisible: true };
    this.hideAlertOne = () => this.setState({ alertOneVisible: false });
    this.hideAlertTwo = () => this.setState({ alertTwoVisible: false });
  }

  render() {
    const { alertOneVisible, alertTwoVisible } = this.state;
    return (
      <React.Fragment>
        <p><b>With description and close option:</b></p>
        {alertOneVisible && (
          <Alert
            variant="default"
            title="Alert title"
            action={<AlertActionCloseButton onClose={this.hideAlertOne} />}
          >
            Info alert description.
          </Alert>
        )}
        <br/>
        <p><b>With only close option:</b></p>
        {alertTwoVisible && (
          <Alert
            variant="success"
            title="Alert title"
            action={<AlertActionCloseButton onClose={this.hideAlertTwo} />}
          />
        )}
        <br/>
        <p><b>With action button:</b></p>
        <Alert variant="warning" title="Alert title" action={<AlertActionLink>Action</AlertActionLink>} />
        <br/>
        <p><b>Default Alert:</b></p>
        <Alert variant="danger" title="Alert title" />
        <br/>
      </React.Fragment>
    );
  }
}

export default DefAlert;
