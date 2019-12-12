window.onload = ()=>{
    setRem(750);

}
window.onresize = ()=> {
    setRem(750);
}

function setRem(uiPx){
    const html = document.getElementsByTagName('html')[0];
    const clientWidth = document.body.clientWidth||document.documentElement.clientWidth;
    html.style.fontSize = clientWidth / uiPx * 200 + 'px';  //!!!
}