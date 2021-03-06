import error from './error';

export default function () {

    return new Promise((resolve, reject) => {

        chrome.tabs.query({ active: true, currentWindow: true }, tabs => {
            chrome.tabs.sendMessage(tabs[0].id, {
                cmd: "clunch-list"
            }, responseList => {

                if (responseList) {

                    let dataString = "";

                    let doback = () => {

                        resolve(JSON.parse(dataString));

                    };

                    let getIndexData = i => {
                        chrome.tabs.query({ active: true, currentWindow: true }, tabs => {
                            chrome.tabs.sendMessage(tabs[0].id, {
                                cmd: "clunch-item",
                                index: i
                            }, responseItem => {

                                dataString += responseItem.item;

                                if (i == responseList.num - 1) doback();
                                else getIndexData(i + 1);

                            });
                        });

                    };

                    getIndexData(0);

                } else reject(error.none);

            });
        });

    });

};
