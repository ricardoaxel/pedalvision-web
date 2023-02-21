import { css } from "@emotion/react"
import { useSelector } from "react-redux"
import { RootState } from "../../store"

export const Style = (bgColor = "#5d77ee", hoverColor = "#3e59d4") => {
  const { themeReducer } = useSelector((state: RootState) => state)
  return css`
    .irs--flat .irs-bar {
      cursor: pointer;
      transition: background-color 0.2s;
      background-color: ${bgColor};
      :hover {
        background-color: ${hoverColor};
      }
    }
    .irs .irs--flat .irs-from,
    .irs--flat .irs-to,
    .irs--flat .irs-single {
      background-color: ${bgColor};
    }
    .irs-single {
      cursor: pointer;
      background-color: ${bgColor};
    }
    .irs-from {
      background-color: ${bgColor};
      cursor: pointer;
      ::before {
        background-color: ${bgColor};
        border-top-color: ${bgColor};
      }
    }
    .irs-to {
      cursor: pointer;
      background-color: ${bgColor};
      ::before {
        color: ${bgColor};
        border-top-color: ${bgColor};
      }
    }
    .irs-single {
      background-color: ${bgColor};
      ::before {
        color: ${bgColor};
        border-top-color: ${bgColor};
      }
    }
    .irs-min {
      /* background-color: ${bgColor}; */
    }
    .irs-max {
      /* background-color: ${bgColor}; */
    }
    .irs-handle {
      i {
        background-color: ${bgColor};
        :hover {
          background-color: ${hoverColor};
        }
        :focus {
          background-color: ${hoverColor};
        }
        :active {
          background-color: ${hoverColor};
        }
        :first-of-type {
          background-color: ${bgColor};
          :hover {
            background-color: ${hoverColor};
          }
          :focus {
            background-color: ${hoverColor};
          }
          :active {
            background-color: ${hoverColor};
          }
        }
      }
      :hover {
        background-color: ${hoverColor};
      }
      :focus {
        background-color: ${hoverColor};
      }
      :active {
        background-color: ${hoverColor};
      }
    }

    .doubleSliderClass {
      .irs--flat .irs-bar {
        cursor: pointer;
        transition: background-color 0.2s;
        background-color: ${bgColor};
        :hover {
          background-color: #3e59d4;
        }
      }
      .irs .irs--flat .irs-from,
      .irs--flat .irs-to,
      .irs--flat .irs-single {
        background-color: ${bgColor};
      }
      .irs-single {
        background-color: ${bgColor};
      }
      .irs-from {
        background-color: ${bgColor};
        ::before {
          background-color: ${bgColor};
          border-top-color: ${bgColor};
        }
      }
      .irs-to {
        background-color: ${bgColor};
        ::before {
          color: ${bgColor};
          border-top-color: ${bgColor};
        }
      }
      .irs-single {
        background-color: ${bgColor};
        ::before {
          color: ${bgColor};
          border-top-color: ${bgColor};
        }
      }
      .irs-min {
        /* background-color: ${bgColor}; */
      }
      .irs-max {
        /* background-color: ${bgColor}; */
      }
      .irs-handle {
        cursor: pointer;
        i {
          :first-of-type {
            background-color: ${bgColor};
            :hover {
              background-color: ${hoverColor};
            }
            :focus {
              background-color: ${hoverColor};
            }
            :active {
              background-color: ${hoverColor};
            }
          }
          background-color: ${bgColor};
          :hover {
            background-color: ${hoverColor};
          }
          :focus {
            background-color: ${hoverColor};
          }
          :active {
            background-color: ${hoverColor};
          }
        }
        :hover {
          background-color: ${hoverColor};
        }
        :focus {
          background-color: ${hoverColor};
        }
        :active {
          background-color: ${hoverColor};
        }
      }
    }
    .irs--flat .irs-line {
      background-color: ${themeReducer.themeName === "lightTheme"
        ? "#e1ecfb"
        : "#fff"};
    }
  `
}
