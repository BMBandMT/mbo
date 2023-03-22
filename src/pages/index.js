import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import "../components/scss/coming.scss"
import LogoImage from "../images/logo.png"
import MboWords from "../images/mbo-words.png"
import RollingStones from "../images/logos/rollingstone.png"
import Newsweek from "../images/logos/newsweek.png"
import Forbes from "../images/logos/forbes.png"
import FastCompany from "../images/logos/fastcompany.png"
import Bizj from "../images/logos/bizj.png"

const IndexPage = () => (
  <div className="container">
    <div className="coming-top">
      <div className="coming-top-links">
        <div className="coming-engage">ENGAGE YOUR AUDIENCE</div>
        <div className="dot"></div>
        <div className="coming-skyrocket">SKYROCKET YOUR BRAND</div>
      </div>
    </div>
    <div className="coming-mid">
      <img className="logo" src={LogoImage} />
      <img className="mbo-words" src={MboWords} />
      <div className="coming-soon">
        <div className="dot"></div>
        <div className="coming-soon-text">AT CAPACITY: Please Revert Back to Q3 2023</div>
        <div className="dot"></div>
      </div>
    </div>
    <div className="coming-bottom">
      <div className="coming-bottom-text">
        THE WORLD'S MOST POWERFUL PUBLICATIONS
      </div>
    </div>
  </div>
)

export default IndexPage
