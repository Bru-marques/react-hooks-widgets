import React, { useState } from "react";
import Accordion from "./components/Accordion";
import Search from "./components/Search";
import Dropdown from "./components/Dropdown";
import Translate from "./components/Translate";
import Card from "./components/Card";
import Route from "./components/Route";
import "./App.css";
import translate from "./components/images/translate.svg";
import accordion from "./components/images/accordion.svg";
import search from "./components/images/search.svg";

const cards = [
  {
    widgetComponent: "Accordion",
    img: accordion,
    widgetName: "Accordion Widget",
    description: "Dropdown component - UseState Hook + Semantic UI",
    widgetLink: "/accordion",
  },
  {
    widgetComponent: "Search",
    img: search,
    widgetName: "Wiki Search Widget",
    description:
      "Search component - Wikipedia API + UseState and UseEffect Hook",
    widgetLink: "/search",
  },
  {
    widgetComponent: "Translate",
    img: translate,
    widgetName: "Translate Widget",
    description: "Translate component - Google Translate API + UseState Hook",
    widgetLink: "/translate",
  },
];

const items = [
  {
    title: "1. React is declarative",
    content:
      "React uses declarative instead of imperative syntax. It’s a simpler way of developing apps, and you can learn why here. Basically, React is faster to develop with because you don’t need to tell the app how to represent the state — you just need to say what you’d like to happen. It’s quick, it’s easy, and there’s less room for human error.",
  },
  {
    title: "2. React Native makes app development easier",
    content:
      "You may have heard of the phrase “Write once, run anywhere” before. React Native brings that kind of philosophy to React with “Learn once, write anywhere”.    Once you understand the basic architecture and thinking behind React, you’ll be able to develop fully functioning apps for both Android and iOS. You won’t have to learn two different ways to represent your app. So after you learn React, you can bring your new product to users not just as quickly as possible, but as widely as possible.",
  },
  {
    title: "3. The React community is amazing",
    content:
      "React has a massive community of dedicated developers. The community helps to maintain and grow the open-source library, with everyone able to contribute their own components to the library. The community is also so strong because of the great tools you can work with in React, including React Profiler and React devtools.",
  },
  {
    title: "4. React is all about Reusable Components",
    content:
      "React saves you time and money on development because it’s component-based. You can break down an interface into reusable components that allow you to build dynamic user interfaces.This taps into the current thinking behind ‘Design Systems’. These enable developers to provide a single source of truth for designers, ensuring consistency for large companies working across multiple tech platforms. Talking of which…",
  },
  {
    title: "5. React is used by huge organisations",
    content:
      "There’s a reason why React is so popular, and that’s because it’s been proven to perform at scale. React was originally created by Facebook, who now use it in many of their apps. Facebook continues to care for and improve React, meaning you’ll benefit from this knowledge too.",
  },
];

const options = [
  {
    label: "Red shades",
    value: "red",
  },
  {
    label: "Green",
    value: "green",
  },
  {
    label: "Blue",
    value: "blue",
  },
];

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
  const [selected, setSelected] = useState(options[0]);

  return (
    <div>
      <div className="ui container" style={{ margin: "15px 0 15px 0" }}>
        <Card cards={cards} />
      </div>

      <Route path="/accordion">
        <Accordion items={items} />
      </Route>
      <Route path="/dropdown">
        <Dropdown
          label="Select a color"
          options={options}
          selected={selected}
          onSelectedChange={setSelected}
        />
      </Route>
      <Route path="/search">
        <Search />
      </Route>
      <Route path="/translate">
        <Translate />
      </Route>
    </div>
  );
};
