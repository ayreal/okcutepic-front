import React from "react";
import { Card, Icon, Image } from "semantic-ui-react";
import PropTypes from "prop-types";

const extra = (
  <a>
    <Icon name="user" />
    16 Friends
  </a>
);

// replace the below with props
const PersonPhotoCard = props => {
  console.log(props);
  return (
    <Card>
      <Image src={props.data.photo} />
      <Card.Content>
        <Card.Header>{props.data.name}</Card.Header>
        <Card.Meta>{props.data.age}</Card.Meta>
        <Card.Description>{props.data.bio}</Card.Description>
      </Card.Content>
      <Card.Content extra>
        <a>
          <Icon
            name="thumbs down huge"
            circular="true"
            onClick={this.handleClick}
          />
        </a>
        <a>
          <Icon name="heart huge" circular="true" />
        </a>
      </Card.Content>
    </Card>
  );
};

PersonPhotoCard.propTypes = {
  data: PropTypes.object.isRequired
};

export default PersonPhotoCard;
