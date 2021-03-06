import QuickPaper from 'quick-paper';

// 引入样式
import "@hai2007/style/normalize.css";
import "./styles/common.css";

import App from './App.paper';

import json from './directive/json'; QuickPaper.directive('uiJson', json);
import navActive from './directive/nav-active'; QuickPaper.directive('uiNavActive', navActive);

new QuickPaper({

    // 挂载点
    el: document.getElementById('root'),

    // 启动组件
    render: createElement => createElement(App)

});
