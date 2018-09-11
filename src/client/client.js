import React from "react";
import ReaactDom from "react-dom";
import Home from "../client/components/Home";

ReaactDom.hydrate(<Home />, document.querySelector("#root"));