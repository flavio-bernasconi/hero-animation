import React from "react";

export function Footer(props) {
  return (
    <div className="footer">
      <div className="container-footer">
        <h1>Contact</h1>
        <a
          href={
            "https://www.linkedin.com/in/flavio-bernasconi-59549a129/?msgConversationId=6659084292070621184&msgOverlay=true"
          }
          target="_blank"
          rel="noopener noreferrer"
        >
          Linkedin
        </a>
        <p>info@flaviobernasconi.it</p>
      </div>
    </div>
  );
}
