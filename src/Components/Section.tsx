import { FC, ReactNode } from "react";

export const Section: FC<{
  children?: ReactNode;
  onClick?: VoidFunction;
}> = ({ children, onClick }) => {
  return (
    <div onClick={onClick} className="section">
      <span className="section-header">Link to nested page</span>
      <span className="section-content">
        {children}
        <span style={{ color: "var(--hint-color)" }}>
          <svg
            width="13"
            height="13"
            viewBox="0 0 7 13"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
          >
            <g id="chevron" clipPath="url(#clip0_137_345)">
              <path
                id="Icon"
                d="M1 1.5L6 6.5L1 11.5"
                stroke="currentcolor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </g>
            <defs>
              <clipPath id="clip0_137_345">
                <rect
                  width="7"
                  height="12"
                  fill="none"
                  transform="translate(0 0.5)"
                />
              </clipPath>
            </defs>
          </svg>
        </span>
      </span>
      <span className="section-description">
        Watch how next page slides on previous one.
      </span>
    </div>
  );
};
