import { currentPage } from "./framework/PageEnums";

export function getDesiredPage() {
  let page: currentPage = currentPage.main;
  const navIcons = document.querySelectorAll<HTMLElement>(".elements div");
  const translatePress = new Map<string, currentPage>();
  translatePress.set("mission_div", currentPage.mission);
  translatePress.set("about_us_div", currentPage.about);
  translatePress.set("impact_div", currentPage.impact);
  translatePress.set("what_we_do_div", currentPage.our_work);
  translatePress.set("contact_div", currentPage.contact);
  translatePress.set("donate_div", currentPage.donate);

  for (const element of navIcons) {
    element.addEventListener("click", () => {
      for (const option of translatePress) {
        if (option[0] == element.id) {
          page = option[1];
        }
      }
    });
  }

  return page;
}
