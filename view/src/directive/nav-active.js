let doit = (el, binding) => {

    let iconDoms = el.getElementsByTagName('div');

    for (let i = 0; i < iconDoms.length; i++) {

        if (iconDoms[i].getAttribute('title') == binding.value) {
            iconDoms[i].setAttribute('active', 'yes');
        } else {
            iconDoms[i].setAttribute('active', 'no');
        }

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
