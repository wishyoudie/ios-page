import { useNavigate } from "react-router-dom";
import { usePrevious } from "./PreviousContext";

export const Header = () => {
  const { previous } = usePrevious();
  const navigate = useNavigate();

  const onBackClick = () => navigate(-1);

  return (
    <div className="h-[44px]">
      {previous && (
        <span
          className="cursor-pointer flex items-center gap-1 h-full pl-2"
          style={{ color: "var(--link-color)" }}
          onClick={onBackClick}
        >
          <svg
            width="13"
            height="13"
            viewBox="0 0 7 13"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            style={{ transform: "rotate(180deg)" }}
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
          {previous}
        </span>
      )}
    </div>
  );
};
