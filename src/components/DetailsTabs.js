import { useState } from "react";
import "./DetailsTabs.css";

const DetailsTabs = ({ description }) => {
  const [activeTab, setActiveTab] = useState("Description");
  const [allReviews, setAllReviews] = useState("");

  const tabSwitcher = (e) => {
    // console.log(e.target.textContent);
    //set active tab to whatever text is on the button that was clicked
    setActiveTab(e.target.textContent);
    // console.log(e.target.style.borderBottomStyle);
    // e.target.style.borderBottomStyle = "2px solid #151875";
  };

  //make the div that renders when 'Description' is active
  const descriptionDiv = (
    <div className="descriptionDiv">
      <h3>More Details</h3>
      <p>{description}</p>
    </div>
  );

  //make the div that renders when 'additional info' is active
  const additionalInfoDiv = (
    <div className="additionalInfoDiv">
      <h3>Varius tempor.</h3>
      <p>
        Aliquam dis vulputate vulputate integer sagittis. Faucibus dolor ornare
        faucibus vel sed et eleifend habitasse amet. Montes, mauris varius ac
        est bibendum. Scelerisque a, risus ac ante. Velit consectetur neque,
        elit, aliquet. Non varius proin sed urna, egestas consequat laoreet diam
        tincidunt. Magna eget faucibus cras justo, tortor sed donec tempus.
        Imperdiet consequat, quis diam arcu, nulla lobortis justo netus dis. Eu
        in fringilla vulputate nunc nec. Dui, massa viverr .
      </p>
    </div>
  );

  //make the div that renders when 'reviews' is active
  const reviewDiv = (
    <div className="reviewDiv">
      {!allReviews ? "No Reviews Yet" : "write this later"}
    </div>
  );

  return (
    <div className="productTabs">
      <button
        className={activeTab === "Description" ? "selected" : "unselected"}
        onClick={tabSwitcher}
      >
        Description
      </button>
      <button
        className={activeTab === "Additional Info" ? "selected" : "unselected"}
        onClick={tabSwitcher}
      >
        Additional Info
      </button>
      <button
        className={activeTab === "Reviews" ? "selected" : "unselected"}
        onClick={tabSwitcher}
      >
        Reviews
      </button>

      <div id="tabContent">
        {activeTab === "Description"
          ? descriptionDiv
          : activeTab === "Reviews"
          ? reviewDiv
          : additionalInfoDiv}
      </div>
    </div>
  );
};

export default DetailsTabs;
