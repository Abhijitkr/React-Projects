import Accordion from "./components/Accordian";
import DarkLightMode from "./components/DarkLightMode";
import ImageSlider from "./components/ImageSlider";
import LoadMore from "./components/LoadMore";
import QRCodeGenerator from "./components/QRCodeGenerator";
import RandomColor from "./components/RandomColor";
import ScrollIndicator from "./components/ScrollIndicator";
import StarRating from "./components/StarRating";
import TreeView from "./components/TreeView";
import menus from "./components/TreeView/data";
import "./index.css";

function App() {
  return (
    <>
      {/* <Accordion />
      <RandomColor /> */}
      {/* <StarRating noOfStars={10} />
      <ImageSlider url={"https://picsum.photos/v2/list"} limit={5} /> */}
      {/* <LoadMore /> */}
      {/* <TreeView menus={menus} /> */}
      {/* <QRCodeGenerator /> */}
      {/* <DarkLightMode /> */}
      <ScrollIndicator url="https://dummyjson.com/products?limit=100" />
    </>
  );
}

export default App;
