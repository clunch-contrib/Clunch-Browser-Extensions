document.addEventListener('DOMContentLoaded', function () {

    chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {

        if (request.cmd == 'clunch') {
            let clunchObjects = []

            var doms = document.getElementsByTagName('*'), i, canvas;
            for (i = 0; i < doms.length; i++) {
                if (doms[i].getAttribute('__clunch__devtool__')) {

                    canvas = doms[i].getElementsByTagName('canvas')[0];

                    clunchObjects.push({
                        name: doms[i].getAttribute('__clunch__devtool__'),
                        target: JSON.parse(canvas.getAttribute('__clunch__devtool__target__')),
                        preview: canvas.toDataURL('image/jpeg', 0.5)
                    });

                }
            }

            sendResponse(clunchObjects);
        }

    });

});
