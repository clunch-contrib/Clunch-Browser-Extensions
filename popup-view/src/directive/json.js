import showData from '../libs/showData';

let doit = (el, binding) => {

    console.log(binding.value);
    el.innerHTML = "";
    let ol = document.createElement('ol');
    showData(binding.target, ol, [binding.value]);
    el.appendChild(ol);

};

export default {

    update: (el, binding) => {
        doit(el, binding);
    },

    inserted: (el, binding) => {
        doit(el, binding);
    }
};
