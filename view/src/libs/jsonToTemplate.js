export default function(response){
    let template="";
    for(let i=0;i<response.length;i++){
        template+=`<div class='icon' title='${response[i].name}' style='background-image:url(${response[i].preview})'></div>`;
    }
    return template;
};
