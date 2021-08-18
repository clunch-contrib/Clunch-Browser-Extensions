export default function (json) {
    try {
        return JSON.stringify(json, null, 2);
    } catch (e) {
        return '数据变成json发生了错误\n' + e;;
    }
};
