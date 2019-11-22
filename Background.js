let CG = 1;
let DG = 0;

function backchange(){
   CG = 1; // 1 
   DG = 0;// 0
   
}



function backchange2(){
    if (CG < 5)   {
    CG = CG+1; // 2 3 4
    DG = DG+1; // 1 2 3
    backchange3();
    }
    else{
    document.getElementById("au").classList.remove("color" + 5 );
    document.getElementById("au").classList.add("color" + 2);
    document.getElementById("auu").classList.remove("darkside" + 5 );
    document.getElementById("auu").classList.add("darkside" + 2);
    backchange();
    }
}
setInterval(backchange2, 1800)

function backchange3(){
    document.getElementById("au").classList.remove("color" + DG ); //color 1 2 3
    document.getElementById("au").classList.add("color" + CG); // color 2 3 4
    document.getElementById("auu").classList.remove("darkside" + DG ); 
    document.getElementById("auu").classList.add("darkside" + CG); 
}





