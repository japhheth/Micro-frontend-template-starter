import React, { useState } from "react";
import ReactDOM from "react-dom";
import Header from "./components/Header";

import { INavigation } from "./types/navigation";

import "./index.scss";

const exampleUser = {
  name: "Tom Cook",
  email: "tom@example.com",
  imageUrl:
    "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
};
const exampleNavigation = [
  { name: "Dashboard", href: "#", current: true },
  { name: "Team", href: "#", current: false },
];
const exampleUserNavigation = [
  { name: "Your Profile", href: "#" },
  { name: "Settings", href: "#" },
  { name: "Sign out", href: "#" },
];

const App = () => {
  const [navigation, setNavigation] =
    useState<INavigation[]>(exampleNavigation);

  const handleSetCurrentNavigation = (item: INavigation) => {
    const navigationCopy = [...navigation];

    navigationCopy.forEach((navitem: INavigation) => {
      navitem.current = false;
      if (navitem.name === item.name) {
        navitem.current = true;
      }
    });

    setNavigation(navigationCopy);
  };

  return (
    <div className="text-3xl mx-auto max-w-6xl">
      <Header
        user={exampleUser}
        navigation={navigation}
        userNavigation={exampleUserNavigation}
        setCurrentNav={handleSetCurrentNavigation}
      />
      <div className="py-10 flex justify-center">
        <p className="text-base">Content</p>
      </div>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("app"));
