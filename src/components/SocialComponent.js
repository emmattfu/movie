import React from "react";
import facebook from "../icons/facebook.svg";
import twitter from "../icons/twitter.svg";
import instagram from "../icons/instagram-social-network-logo-of-photo-camera.svg";
import homepage_icon from "../icons/homepage.svg";

function SocialComponent({accounts, homepage}) {
  return (
    <div className="social">
      <p className="details-header">Social media</p>
      <a
        href={`http://facebook.com/${accounts.facebook_id}`}
        title="Visit Facebook"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img className="social-icon" src={facebook} alt="facebook-icon"></img>
      </a>
      <a
        href={`http://twitter.com/${accounts.twitter_id}`}
        title="Visit Twitter"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img className="social-icon" src={twitter} alt="twitter-icon"></img>
      </a>
      <a
        href={`http://instagram.com/${accounts.instagram_id}`}
        title="Visit Instagram"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img className="social-icon" src={instagram} alt="instagram-icon"></img>
      </a>
      <a
        href={homepage}
        title="Visit Homepage"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img className="social-icon" src={homepage_icon} alt="homepage-icon"></img>
      </a>
    </div>
  );
}

export default SocialComponent;
