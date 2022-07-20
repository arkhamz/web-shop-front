import { useState } from "react";

const DetailsTabs = ({ description }) => {
  const [activeTab, setActiveTab] = useState("Description");

  const tabSwitcher = (e) => {
    // console.log(e.target.textContent);
    //set active tab to whatever text is on the button that was clicked
    setActiveTab(e.target.textContent);
  };
  return (
    <div>
      <button onClick={tabSwitcher}>Description</button>
      <button onClick={tabSwitcher}>Additional Info</button>
      <button onClick={tabSwitcher}>Reviews</button>

      <div id="tabContent">
        <p>
          {activeTab === "Description"
            ? description
            : activeTab === "Reviews"
            ? "this should be a review"
            : "this should be additional info"}
        </p>
      </div>
    </div>
  );
};

export default DetailsTabs;
