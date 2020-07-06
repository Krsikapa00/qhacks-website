import React from "react";

import Header from "./Header";
import ActionButton from "./ActionButton";
import ContentWrapper from "./ContentWrapper";

import logo from "../assets/img/logo/qhacksCrown-colored.svg";
import word from "../assets/img/logo/qhacksWordmark-white.svg";

const applyButtonCSS = {
  alignItems: "center",
  position: "relative",
  zIndex: "2",
  margin: "40px 0 20px auto",
  "@media(max-width: 820px)": {
    margin: "30px auto 45px auto",
    padding: "5px 10px 5px 10px"
  }
};

const Landing = () => (
  <div className="landing_wrapper" css={{ zIndex: "9999" }}>
    <div
      id=""
      css={{
        zIndex: "9999",
        width: "100%",
        "@media(max-width: 600px)": {
          minHeight: "600px"
        }
      }}
    >
      <Header standaloneVersion={false} />
      <ContentWrapper>
        <section
          css={{
            zIndex: "9999",
            textAlign: "center",
            gridTemplateColumns: "auto 1fr",
            overflowX: "hidden",
            "@media(max-width: 820px)": {
              textAlign: "center",
              display: "block"
            }
          }}
        >
          <div
            css={{
              "@media(min-width: 1200px)": {
                paddingRight: "50px",
                paddingTop: "60px"
              },
              "@media (min-width: 821px) and (max-width: 1199px)": {
                paddingRight: "50px",
                paddingTop: "100px"
              },
              "@media (max-width: 820px)": {
                paddingTop: "80px"
              }
            }}
          >
            <br />

            <img
              // class="center"
              src={logo}
              css={{
                display: "block",
                marginLeft: "auto",
                marginRight: "auto",
                paddingTop: "40px",
                paddingBottom: "5px",
                width: "100vw",
                maxWidth: "200px",
                "@media(max-width: 820px)": {
                  paddingTop: "12px",
                  width: "192px",
                  paddingBottom: "8px"
                }
              }}
              alt="QHacks Wordmark"
            />

            <img
              // class="center"
              // data-cy="qhacks-wordmark"
              src={word}
              css={{
                // display: "block",
                marginLeft: "auto",
                marginRight: "auto",
                paddingTop: "40px",
                paddingBottom: "18px",
                width: "100vw",
                maxWidth: "300px",
                "@media(max-width: 820px)": {
                  paddingTop: "12px",
                  width: "192px",
                  paddingBottom: "8px"
                }
              }}
              alt="QHacks Wordmark"
            />

            <h2
              data-cy="qhacks-information"
              css={{
                position: "relative",
                zIndex: "2",
                color: "#000000",
                fontWeight: 600,
                fontSize: "22px",
                textAlign: "center",
                // paddingBottom: "30px",
                "@media(max-width: 820px)": {
                  paddingBottom: "24px"
                }
              }}
            >
              Queen’s University • January 31st - February 2nd, 2020
            </h2>
            {/* <div
              css={{
                padding: "50px 0 30px 0",
                color: "#00205B",
                "-webkit-text-stroke": "1.3px #ffffff",
                fontWeight: 500,
                fontSize: "70px",
                letterSpacing: "10px",
                textAlign: "center",
                lineHeight: "30px",
                "@media(max-width: 820px)": {
                  paddingTop: "20px",
                  fontSize: "45px",
                  lineHeight: "1.6"
                }
              }}
            >
              <h1 css={{ fontSize: "50px" }}>QHacks 2020 has Ended</h1>
              <br></br>
              <h2 css={{ fontSize: "40px" }}>See you all next year!</h2>
            </div> */}
            <ActionButton
              dataCy="apply-button"
              backgroundColor="#00205B"
              foregroundColor="#ffffff"
              style={applyButtonCSS}
              link="https://app.qhacks.io"
              type="rounded"
            >
              Apply Now
            </ActionButton>
            <h2
              data-cy="qhacks-tagline"
              css={{
                position: "relative",
                zIndex: "2",
                padding: "20px 0 100px",
                color: "#000000",
                fontWeight: 500,
                textAlign: "center",
                lineHeight: "30px",
                "@media(max-width: 820px)": {
                  paddingTop: "10px",
                  fontSize: "15px",
                  lineHeight: "1.6"
                }
              }}
            >
              Queen’s University’s 5th annual hackathon.
              <br />
              Join us for an unforgettable experience!
            </h2>
          </div>
        </section>
      </ContentWrapper>
    </div>
  </div>
);

export default Landing;
