import React from "react";
import { Card, Icon, Image } from "semantic-ui-react";

const extra = (
  <a>
    <Icon name="user" />
    16 Friends
  </a>
);

// replace the below with props
const PersonInterestCard = props => {
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
          <Icon name="user" />
          {props.data.interests.map(interest => {
            return interest.name;
          })}
        </a>
      </Card.Content>
    </Card>
  );
};

export default PersonInterestCard;
