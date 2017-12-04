import React, { Component } from "react";
import AppHeader from "./AppHeader";
import FeaturesContainer from "./FeaturesContainer";
import SignupContainer from "./SignupContainer";

const USER = {
  id: 2,
  name: "Ariel",
  username: "ayreal",
  bio: "I am Kenneth's mom.",
  age: 52,
  location: "New York",
  photo: "https://avatars0.githubusercontent.com/u/22643036?s=460&v=4",
  avatar: null,
  gender: 2,
  gender_choice: 1,
  password_digest:
    "$2a$10$q2OrSFcz.4uyGoP/DO2YFuhvReZfkWPBnWx17xw8fuxCJz4931RTm",
  created_at: "2017-11-30T20:17:27.266Z",
  updated_at: "2017-12-01T03:22:13.369Z",
  interests: [
    {
      id: 6,
      name: "rollerblading",
      created_at: "2017-11-30T19:50:24.237Z",
      updated_at: "2017-11-30T19:50:24.237Z"
    },
    {
      id: 8,
      name: "music",
      created_at: "2017-11-30T19:50:24.249Z",
      updated_at: "2017-11-30T19:50:24.249Z"
    },
    {
      id: 9,
      name: "interperative dance",
      created_at: "2017-11-30T19:50:24.255Z",
      updated_at: "2017-11-30T19:50:24.255Z"
    }
  ],
  matches: []
};

class MainContainer extends Component {
  render() {
    return (
      <div>
        <AppHeader user={USER} />
        <FeaturesContainer user={USER} />
      </div>
    );
  }
}

export default MainContainer;
