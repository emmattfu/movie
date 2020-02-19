import React from "react";

function CreditsComponent({ credits, type }) {
  if (type === "show") {
    return (
      <>
        <p className="details-header featured">Featured Crew</p>
        <div className="credits">
          {credits.map(el => {
            return (
              <div className="credits-director creator" key={el.credit_id}>
                <p className="details-text big">Creator</p>
                <p className="details-text">{el.name}</p>
              </div>
            );
          })}
        </div>
      </>
    );
  }
}

export default CreditsComponent;
