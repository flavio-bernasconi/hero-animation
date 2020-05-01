import React from "react";

export function DemoSection({ demo, code }) {
  return (
    <div className="demo">
      {demo && (
        <a
          href={demo}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-demo subtitle"
        >
          DEMO
          <span />
        </a>
      )}

      <a
        href={code}
        target="_blank"
        rel="noopener noreferrer"
        className="btn-demo subtitle"
      >
        CODE
        <span />
      </a>
    </div>
  );
}
