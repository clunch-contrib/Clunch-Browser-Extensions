import QuickPaper from 'quick-paper';

// 引入样式
import "@hai2007/style/normalize.css";
import "./styles/common.css";

import App from './App.paper';

import code from './directive/code'; QuickPaper.directive('uiCode', code);

new QuickPaper({

    // 挂载点
    el: document.getElementById('root'),

    // 启动组件
    render: createElement => createElement(App)

});
