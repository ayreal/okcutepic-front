import React from "react";
import { Card, Icon, Image, Button } from "semantic-ui-react";
import PropTypes from "prop-types";

const MatchPhotoCard = props => {
  console.log(props);

  // clicking a heart will send a post request to create a like --> this comes down from params of the USER
  // clicking a thumb will call setCurrentMatch from the SwipeContainer
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
      <Card.Content />
    </Card>
  );
};

MatchPhotoCard.propTypes = {
  data: PropTypes.object.isRequired
};

export default MatchPhotoCard;
