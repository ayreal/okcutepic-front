import React from "react";
import { Card, Icon, Image, Button } from "semantic-ui-react";

// need a function to check if user is already liked
const PersonInterestCard = props => {
  console.log("PersonInterestCard props:", props);

  const getInterestsList = () => {
    const interests = props.data.interests.map(interest => {
      return interest.name;
    });
    return interests.join(", ");
  };

  return (
    <Card>
      <Card.Content>
        <Icon size="large" name={props.getGenderIcon(props.data.gender)} />
        <Card.Header>
          {props.data.name}, {props.data.age}
        </Card.Header>
        <Card.Meta>
          <strong>Likes: </strong>
          {getInterestsList()}
        </Card.Meta>
        <Card.Description>{props.data.bio}</Card.Description>
      </Card.Content>
      <Card.Content extra>
        <Button circular="true" color="purple" size="large">
          <Icon name="heart" size="large" /> Like
        </Button>
      </Card.Content>
    </Card>
  );
};

export default PersonInterestCard;
