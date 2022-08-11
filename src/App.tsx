import { Link, Outlet, ReactLocation, Router } from "@tanstack/react-location";
import React, { lazy, Suspense } from "react";
import Itiran from "./pages/Itiran";
// import Editor from "./pages/Editor";
const Editor = lazy(() => import("./pages/Editor"));

const location = new ReactLocation();
const routes = [
  { path: "/", element: <Itiran /> },
  { path: "/itiran", element: <Itiran /> },
  { path: "/edit", element: <Editor /> },
];
export const App = () => {
  return (
    <>
      <Suspense fallback={<div>コンポーネントを読み込み中...</div>}>
        <Router location={location} routes={routes}>
          <Link to="/search">検索</Link>
          {" "}
          <Link to="/edit">編集</Link>
          <Outlet />{/*　Outletの箇所にpathと一致したコンポーネントがマウントされる */}
        </Router>
      </Suspense>
    </>
  );
};
