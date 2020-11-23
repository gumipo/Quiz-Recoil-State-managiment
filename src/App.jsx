import React from "react";
import { RecoilRoot } from "recoil";
import Router from "./Router";

const App = () => {
  return (
    <React.Suspense fallback={<h1>Loding...</h1>}>
      <RecoilRoot>
        <Router />
      </RecoilRoot>
    </React.Suspense>
  );
};

export default App;
