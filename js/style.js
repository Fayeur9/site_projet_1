document.getElementById('icon-carousel-1').onclick=function(){
    change_icon(document.getElementById('icon-carousel-1'))
}
document.getElementById('icon-carousel-2').onclick=function(){
    change_icon(document.getElementById('icon-carousel-2'))
}
document.getElementById('icon-carousel-3').onclick=function(){
    change_icon(document.getElementById('icon-carousel-3'))
}


function change_icon(active_icon){
    document.getElementById('icon-carousel-1').classList.remove('active')
    document.getElementById('icon-carousel-2').classList.remove('active')
    document.getElementById('icon-carousel-3').classList.remove('active')
    active_icon.classList.add('active');
}
