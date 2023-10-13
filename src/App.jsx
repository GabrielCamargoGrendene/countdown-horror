import { Navigator } from "./components/Navigator/Navigator";
import { Router } from "./components/Router";
import {CountdownContextProvider } from "./contexts/CountdownContext";
import { Toggle } from "./components/toggle/Toggle";
import "./global.scss";

export function App() {
  return (
    <CountdownContextProvider>
      <div className="container">
        <Navigator />
        <Router />
        <Toggle />
      </div>
    </CountdownContextProvider>
  );
}
