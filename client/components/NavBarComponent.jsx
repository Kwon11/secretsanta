import { ListGroup, ListGroupItem, Button }  from 'react-bootstrap';
import {Link} from 'react-router';
import React from 'react';
import axios from 'axios'
import { observer } from 'mobx-react';
import santaStore from './SantaStore';

var NavBarComponent = observer(class NavBarComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {

  }

  render () {
    return (
      <div>
        <ul>
          <Button block><Link to="addgroup">Add Group</Link></Button>
          <Button block><Link to="adduser">Add User</Link></Button>
          <Button block><Link to="additem">Add Item</Link></Button>
        </ul>
      </div>
      );
  }

})

export default NavBarComponent;