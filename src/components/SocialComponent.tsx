import React, { FC } from "react";
import facebook from "../icons/facebook.svg";
import twitter from "../icons/twitter.svg";
import instagram from "../icons/instagram-social-network-logo-of-photo-camera.svg";
import homepage_icon from "../icons/homepage.svg";
import {
  IMovieDetailsSocial,
  IPersonSocial,
  IShowDetailsSocial,
} from "../types/types";

type SocialComponentProps = { homepage: string | null } & {
  accounts: IPersonSocial | IShowDetailsSocial | IMovieDetailsSocial;
};

const SocialComponent: FC<SocialComponentProps> = ({ accounts, homepage }) => {
  return (
    <>
      {!accounts.facebook_id ? (
        ""
      ) : (
        <a
          href={`http://facebook.com/${accounts.facebook_id}`}
          title='Visit Facebook'
          target='_blank'
          rel='noopener noreferrer'
        >
          <img className='social-icon' src={facebook} alt='facebook-icon'></img>
        </a>
      )}

      {!accounts.twitter_id ? (
        ""
      ) : (
        <a
          href={`http://twitter.com/${accounts.twitter_id}`}
          title='Visit Twitter'
          target='_blank'
          rel='noopener noreferrer'
        >
          <img className='social-icon' src={twitter} alt='twitter-icon'></img>
        </a>
      )}

      {!accounts.instagram_id ? (
        ""
      ) : (
        <a
          href={`http://instagram.com/${accounts.instagram_id}`}
          title='Visit Instagram'
          target='_blank'
          rel='noopener noreferrer'
        >
          <img
            className='social-icon'
            src={instagram}
            alt='instagram-icon'
          ></img>
        </a>
      )}

      {!homepage ? (
        ""
      ) : (
        <a
          href={homepage}
          title='Visit Homepage'
          target='_blank'
          rel='noopener noreferrer'
        >
          <img
            className='social-icon'
            src={homepage_icon}
            alt='homepage-icon'
          ></img>
        </a>
      )}
    </>
  );
};

export default SocialComponent;
