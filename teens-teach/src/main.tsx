import React from "react";
import ReactDOM from "react-dom/client";
// import App from './App.tsx'
import "./styles/mainIconStyle.css";
import "./index.css";
import "./styles/backgroundPage.css";
import "./styles/about.css";
import "./styles/mission.css";
import "./styles/generatlEl.css";

import IconComponent from "./components/MainComponent.tsx";
import AboutPage from "./components/pages/aboutUs.tsx";
import ContactPage from "./components/pages/contactUs.tsx";
import ImpactPage from "./components/pages/ourImpact.tsx";
import MissionPage from "./components/pages/ourMission.tsx";
import WorkPage from "./components/pages/whatWeDo.tsx";

import { currentPage } from "./framework/PageEnums.ts";
import DonatePage from "./components/pages/donate.tsx";

const mainRoot = ReactDOM.createRoot(document.getElementById("root")!);
mainRoot.render(<IconComponent />);
let page: currentPage = currentPage.main;
const navIcons = document.querySelectorAll<HTMLElement>(".elements div");
const translatePress = new Map<string, React.ReactNode>();
translatePress.set("mission_div", <MissionPage />);
translatePress.set("about_us_div", <AboutPage />);
translatePress.set("impact_div", <ImpactPage />);
translatePress.set("what_we_do_div", <WorkPage />);
translatePress.set("contact_div", <ContactPage />);
translatePress.set("donate_div", <DonatePage />);

for (const element of navIcons) {
  element.addEventListener("click", () => {
    for (const option of translatePress) {
      if (element.id == option[0]) {
        mainRoot.render(option[1]);
      }
    }
  });
}
