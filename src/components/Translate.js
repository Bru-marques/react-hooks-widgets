import React, { useState } from "react";
import Dropdown from "./Dropdown";
import Convert from "./Convert";

const options = [
  {
    label: "Afrikaans",
    value: "af",
  },
  {
    label: "Arabic",
    value: "ar",
  },
  {
    label: "Hindi",
    value: "hi",
  },
  {
    label: "Dutch",
    value: "nl",
  },
  {
    label: "Portugues",
    value: "pt",
  },
];

const Translate = () => {
  const [language, setLanguage] = useState(options[0]);
  const [text, setText] = useState("home");

  return (
    <div className="ui container">
      <h1>Translate</h1>
      <div className="ui header">
        <div className="ui form">
          <div className="field">
            <label>Enter Text</label>
            <input value={text} onChange={(e) => setText(e.target.value)} />
          </div>
        </div>
        <div>
          <Dropdown
            label="Select a Language"
            selected={language}
            onSelectedChange={setLanguage}
            options={options}
          />
        </div>
      </div>
      <div className="translateArea">
        <h3 className="ui header">Output</h3>
        <Convert text={text} language={language} />
      </div>
    </div>
  );
};

export default Translate;
