const ubah = document.body;

function ubahMode(){
    ubah.classList.toggle("dark");
    if(ubah.classList.contains('dark')){
        localStorage.setItem('tema', 'gelap');
    } else{
        localStorage.setItem('tema',' terang');
    }
}

var tema = localStorage.getItem('tema');
if(tema == 'gelap'){
    ubah.classList.add('dark');
}