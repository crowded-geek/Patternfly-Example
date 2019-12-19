import React from 'react';
import { Card, CardHead, CardHeader, CardBody, CardFooter } from '@patternfly/react-core';
import logo from '../logo.svg';
class SimpleCard extends React.Component{
  render(){
    return (
      <Card>
        <CardHead>
          <img src={logo} style={{height: "50px"}}/>
        </CardHead>
        <CardHeader>Header</CardHeader>
        <CardBody>Body</CardBody>
        <CardFooter>Footer</CardFooter>
      </Card>
    );
  }
}
export default SimpleCard;
