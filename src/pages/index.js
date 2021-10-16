import * as React from "react";
import {
  main,
  divRight,
  divLeft,
  pHeading,
  pPageName,
  pContent,
  pBackButton,
  imgScarecrow,
  divBackButton,
  divOuter,
  footerStyle,
  pFooter
} from "./index.module.css";
import scarecrowImage from "../images/Scarecrow.png";

const IndexPage = () => {
  return (
    <div className={divOuter}>
      <main className={main}>
        <div className={divLeft}>
          <p className={pPageName}>404 NOT FOUND</p>
          <img src={scarecrowImage} className={imgScarecrow} alt={"Scarecrow"}/>
          <div/>
        </div>
        <div className={divRight}>
          <p className={pHeading}>I have bad news for you</p>
          <p className={pContent}>The page you are looking for might be removed or is temporarily unavailable</p>
          <div className={divBackButton}>
            <p className={pBackButton}>Back to homepage</p>
          </div>
        </div>
      </main>
      <footer className={footerStyle}>
        <p className={pFooter}>created by pranav0281999 - devChallenges.io</p>
      </footer>
    </div>
  )
}

export default IndexPage;
