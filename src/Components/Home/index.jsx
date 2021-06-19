import React from "react"
import { Header, HomeRoot, Octocat, avatar, Profile, Dark, ProfileAndDark } from "./styles"
import { Avatar, Switch } from "@material-ui/core"
import { NightsStay, WbSunny } from "@material-ui/icons"

import octocat from '../static/Octocat.png'

export default function Home(props) {

  const classes = avatar()

  return (
    <HomeRoot>
      <Header>
        <Octocat>
          <img src={octocat} alt="octacat" />
          <h1>My GitHub</h1>
        </Octocat>
        <ProfileAndDark>
          <Profile>
            <h2>{props.name}</h2>
            <a href="#">
              <Avatar
                href="https://asd.com"
                className={classes.style}
                alt={props.name}
                src={props.avatar}
              />
            </a>
          </Profile>
          <Dark>
            <NightsStay />
            <Switch
              checked={!props.dark}
              color="primary"
              onChange={() => props.setDark(!props.dark)}
            />
            <WbSunny color="primary"/>
          </Dark>
        </ProfileAndDark>
      </Header>
    </HomeRoot>
  )
}
