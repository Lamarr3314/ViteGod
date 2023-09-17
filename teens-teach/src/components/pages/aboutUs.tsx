// import { ReactElement } from "react";
function AboutPage() {
  return (
    <div className="fullPage">
      <div className="mainSection">
        <div className="divContainer">
          <div id="pageTitle">About Us</div>
        </div>
        <div className="divContainer">
          <div className="tile" id="aboutDescription">
            <p className="smallText">
              We are an unrelenting group of five academically passionate
              teenagers with a deep understanding of how education and its
              opportunities can change the world.
            </p>
          </div>
        </div>
        <div id="peopleContainer" className="wrapBox">
          <div id="om" className="personTile">
            <div className="personPhoto">
              <img
                src="../../src/assets/images/photos/GreyBackground/om.png"
                alt=""
              />
            </div>
            <div className="personName">
              <p className="nameClass">Om Rana</p>
            </div>
            <hr />
            <div className="description">
              <p className="descriptionClass">
                “My immigrant parents taught themselves valuable skills that
                helped them in this competitive world. I want others to
                understand that education allows you to soar to new heights that
                were previously unimaginable”
              </p>
            </div>
          </div>
          <div id="lamarr" className="personTile">
            <div className="personPhoto">
              <img
                src="../../src/assets/images/photos/GreyBackground/lamarr.png"
                alt=""
              />
            </div>
            <div className="personName">
              <p className="nameClass">Lamarr Olive</p>
            </div>
            <hr />
            <div className="description">
              <p className="descriptionClass">
                “I love to learn, love to understand how the world works and
                immerse myself in new topics. The world that we live in seems
                random at times, but knowledge provides a sense of security and
                an opportunity to change your life.”
              </p>
            </div>
          </div>
          <div id="kennedy" className="personTile">
            <div className="personPhoto">
              <img src="../../src/assets/images/photos/Kennedy.png" alt="" />
            </div>
            <div className="personName">
              <p className="nameClass">Kennedy Shepard</p>
            </div>
            <hr />
            <div className="description">
              <p className="descriptionClass">
                “I wholeheartedly believe that education is the key to
                flourishing in life. With Teens Teach, I have the opportunity to
                spread knowledge to teens on topics that they otherwise might
                have never learned about.”
              </p>
            </div>
          </div>

          <div id="mark" className="personTile">
            <div className="personPhoto">
              <img
                src="../../src/assets/images/photos/GreyBackground/mark.png"
                alt=""
              />
            </div>
            <div className="personName">
              <p className="nameClass">Mark Tarkany</p>
            </div>
            <hr />
            <div className="description">
              <p className="descriptionClass">
                "People take many things in life for granted. Commodities,
                experiences, moments that you may think are ordinary to you, but
                are alien to others. Education is something to never take for
                granted and with Teens Teach, I want to make sure that education
                is never taken for granted.”
              </p>
            </div>
          </div>
          <div id="marlon" className="personTile">
            <div className="personPhoto">
              <img
                src="../../src/assets/images/photos/GreyBackground/Marlon.png"
                alt=""
              />
            </div>
            <div className="personName">
              <p className="nameClass">Marlon Rodriguez</p>
            </div>
            <hr />
            <div className="description">
              <p className="descriptionClass">
                “My parents came to this country with almost no money, but what
                they did have was a rich mindset which they instilled in my
                brother and I. I want to continue to spread that same mindset
                which is pushing my family forward despite the adversity of
                life.”
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="background">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}
export default AboutPage;
