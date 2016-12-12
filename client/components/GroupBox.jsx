import { ListGroup, Nav, NavItem, Grid, Row, Col, Thumbnail, Button, ButtonToolbar  }  from 'react-bootstrap';
import React from 'react';
import { Link } from 'react-router';
import GroupItem from './GroupItem.jsx';
import { observer } from 'mobx-react';
import santaStore from './SantaStore';
import NavBarComponent from './NavBarComponent';

var GroupBox = observer(class GroupBox extends React.Component { //ES6 class
  constructor (props) {
    super (props);
    this.state = {
    };
    this.handleClick = this.handleClick.bind(this);
    this.addGroup = this.addGroup.bind(this);
  }
  handleClick () {
    console.log('why you clicking the box?');
  }

  addGroup () {
    console.log('add group function');
  }


  render () { //needs a button and subcomponent GroupItem
    return ( //wrap this whole thing in a table
      <div id="NavBar">
       <NavBarComponent />
      <div id="GroupBox">
        <ListGroup>
          {
            santaStore.groupData.map((group, index) =>
            <GroupItem className="GroupItem" group={group} key={index} />
            )
          }
        </ListGroup>
      </div>
      </div>
      );
  }
})

export default GroupBox;