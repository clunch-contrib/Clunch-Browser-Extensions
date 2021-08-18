import OpenWebEditor from 'open-web-editor';

let doit = (el, binding) => {

    el.innerHTML = "<pre></pre>";
    let preDom = el.getElementsByTagName('pre')[0];
    preDom.style.width = '400px';
    preDom.style.height = '200px';
    preDom.style.margin = '0';

    try {
        new OpenWebEditor({

            // 编辑器挂载点
            el: preDom,

            // 初始化文本
            content: binding.value,

            // 是否只读
            readonly: true,

            // 设置颜色
            color: {
                background: "#eeeeee", /*编辑器背景*/
                text: "#000000", /*文本颜色*/
                number: "#888484", /*行号颜色*/
                edit: "#eaeaf1", /*编辑行背景色*/
                cursor: "#ff0000", /*光标颜色*/
                select: "gray", /*选择背景*/
            }

        });
    } catch (e) {
        el.innerHTML = '新建编辑页面发生了错误<hr />' + e;
    }
};

export default {

    update: (el, binding) => {
        doit(el, binding);
    },

    inserted: (el, binding) => {
        doit(el, binding);
    }
};
