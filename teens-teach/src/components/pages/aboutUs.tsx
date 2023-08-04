import { ReactElement } from "react";
function AboutPage() {
  return (
    <div className="fullPage">
      <div id="pageTitle">About Us</div>
      <div id="peopleContainer">
        <div id="om">
          <div className="photo"></div>
          <div className="description"></div>
        </div>
        <div id="marlon">
          <div className="photo"></div>
          <div className="description"></div>
        </div>
        <div id="lamarr">
          <div className="photo"></div>
          <div className="description"></div>
        </div>
        <div id="kennedy">
          <div className="photo">
            <img src="../../src/assets/images/photos/Kennedy.png" alt="" />
          </div>
          <div className="description"></div>
        </div>
        <div id="mark">
          <div className="photo"></div>
          <div className="description"></div>
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
