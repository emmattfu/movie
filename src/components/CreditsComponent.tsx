import React, { FC } from "react";
import { ICreditsDetails } from "../types/types";

interface CreditsComponentProps {
  credits: ICreditsDetails[];
}

export const CreditsComponent: FC<CreditsComponentProps> = ({ credits }) => {
  return (
    <>
      <p className='details-header featured'>Featured Crew</p>
      <div className='credits'>
        {credits.map((el) => {
          return (
            <div className='credits-director creator' key={el.credit_id}>
              <p className='details-text big'>Creator</p>
              <p className='details-text'>{el.name}</p>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default CreditsComponent;
