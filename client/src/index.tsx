import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// システム系
import Root from "./Root";
import NotFound from "./NotFound";
import { Provider } from "react-redux";
import store from "./Store";
import { Paths } from "./Entities";

// 画面系
import LoginRoot from "./noukai-app/login/LoginRoot";
import QuestionRootWrapper from "./noukai-app/question/QuestionRootWrapper";
import ConsoleRootWrapper from "./console/buttons/ConsoleRootWrapper";  // ラッパーコンポーネントをインポート
import RankingRootWrapper from "./console/ranking/RankingRootWrapper";  // ラッパーコンポーネントをインポート
import RankingTop5RootWrapper from "./console/rankingTop5/Ranking5RootWrapper";  // ラッパーコンポーネントをインポート

console.log('Index.tsx loaded');  // デバッグ用ログ

const container = document.getElementById('app');
const root = ReactDOM.createRoot(container!);
root.render(
  <Provider store={store}>
    <Router future={{ v7_startTransition: true }}>
      <Routes>
        <Route path={Paths.NOUKAI_LOGIN} element={<LoginRoot />} />
        <Route path={Paths.NOUKAI} element={<QuestionRootWrapper />} />
        <Route path={Paths.CONSOLE} element={<ConsoleRootWrapper />} />  {/* ラッパーコンポーネントを使用 */}
        <Route path={Paths.RANKING} element={<RankingRootWrapper />} />  {/* ラッパーコンポーネントを使用 */}
        <Route path={Paths.RANKING_TOP5} element={<RankingTop5RootWrapper />} />  {/* ラッパーコンポーネントを使用 */}
      </Routes>
    </Router>
  </Provider>
);

console.log('ReactDOM.render called');  // デバッグ用ログ

