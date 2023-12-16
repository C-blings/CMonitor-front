import React from 'react';
import ReactDOM from 'react-dom/client';
import LabelPanel from "./ui/components/label_panel";
import Input from "./ui/moleculas/input";
import SearchBar from "./ui/components/search_bar";
import Button from "./ui/moleculas/button";


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
      <LabelPanel/>
      <div style={{display: "flex", justifyContent: "space-between"}}>
          <div style={{float: "left"}}>
              <SearchBar/>
          </div>

          <div style={{float: "right"}}>
              <Button text="Add project" onClick={() => {}}/>
          </div>
      </div>

  </React.StrictMode>
);