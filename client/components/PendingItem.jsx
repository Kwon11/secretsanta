import { ListGroup, ListGroupItem, Nav, NavItem, Grid, Row, Col, Thumbnail, Button, ButtonToolbar  }  from 'react-bootstrap';
import React from 'react';

class PendingItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    console.log('take them to the wishlist of the target');
  }

  render () {
    return (
        <ListGroupItem className="PendingItem">
          <img className="TargetAvatar" src={this.props.item.avatar} />
          <div className="TargetGroupName">{this.props.item.GroupName} </div>
          <div className="DueDate">{this.props.item.DueDate}</div>
          <div onClick={this.handleClick}>{'Take me to their wishlist'}</div>
        </ListGroupItem>
      );
  }

}


export default PendingItem;
