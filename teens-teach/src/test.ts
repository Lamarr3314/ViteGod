//imports
import { elementHandler, imageHandler } from "./framework/elementHandler";
import IconComponent from "./components/MainComponent";
export function IconApp(){
  return IconComponent;
}

//global element Instantiation
let iconImage = new imageHandler("mainImage");
let backShadow = new imageHandler(".backShadow");



//global helper variables Instantiation
let screenWidth = screen.width;
let screenHeight = screen.height;
let imageSize = screenHeight/2;
let backgroundSize = imageSize + 100;

//startup operations
iconImage.resizePX(imageSize, imageSize);
// iconImage.resizePXLinear(imageSize);
// iconImage.opacity(1);
// backShadow.resizePXLinear(backgroundSize);

console.log("RUNNING");
