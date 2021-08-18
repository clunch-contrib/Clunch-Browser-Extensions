
var clunchObjectsString = "", oneLength = 500;

document.addEventListener('DOMContentLoaded', function () {

    chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {

        if (request.cmd == 'clunch-list') {
            var clunchObjects = []

            var doms = document.getElementsByTagName('*'), i, canvas, uniqueName;
            for (i = 0; i < doms.length; i++) {
                uniqueName = doms[i].getAttribute('__clunch__devtool__');
                if (uniqueName) {

                    canvas = doms[i].getElementsByTagName('canvas')[0];

                    clunchObjects.push({
                        name: uniqueName,
                        target: JSON.parse(canvas.getAttribute('__clunch__devtool__target__')),
                        preview: canvas.toDataURL('image/png', 0.5)
                    });

                }
            }

            clunchObjectsString = JSON.stringify(clunchObjects);

            /**
             * 由于单次发送的数据如果过多，
             * 会失败，因此，切割成多段来请求。
             */
            sendResponse({
                num: Math.ceil(clunchObjectsString.length / oneLength)
            });
        } else if (request.cmd == 'clunch-item') {

            var subString = "", index;
            for (index = request.index * oneLength; index < request.index * oneLength + oneLength && index < clunchObjectsString.length; index++) {
                subString += clunchObjectsString[index];
            }

            sendResponse({
                item: subString
            });

        }

    });

});
