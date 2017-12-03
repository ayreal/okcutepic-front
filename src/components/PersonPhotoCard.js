import React from "react";
import { Card, Icon, Image } from "semantic-ui-react";
import PropTypes from "prop-types";

const PersonPhotoCard = props => {
  console.log(props);

  function handleLikeUser() {
    props.handleLike(props.data);
  }

  // clicking a heart will send a post request to create a like --> this comes down from params of the USER
  // clicking a thumb will call setCurrentPerson from the SwipeContainer
  return (
    <Card centered="true">
      <Image src={props.data.photo} />
      <Card.Content>
        <Card.Header>{props.data.name}</Card.Header>
        <Card.Meta>
          {props.data.age}{" "}
          <Icon name={props.getGenderIcon(props.data.gender)} size="small" />
        </Card.Meta>
        <Card.Description>{props.data.bio}</Card.Description>
      </Card.Content>
      <Card.Content extra>
        <a>
          <Icon
            name="thumbs down huge"
            circular="true"
            onClick={props.nextPerson}
          />
        </a>
        <a>
          <Icon name="heart huge" circular="true" onClick={handleLikeUser} />
        </a>
      </Card.Content>
    </Card>
  );
};

PersonPhotoCard.propTypes = {
  data: PropTypes.object.isRequired,
  handleLike: PropTypes.func.isRequired,
  nextPerson: PropTypes.func.isRequired
};

export default PersonPhotoCard;
