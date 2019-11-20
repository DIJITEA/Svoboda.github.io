let CG = 1;
let DG = 0;
function alertd(){
    alert("errosa");
        }
        

function backchange(){
   CG = 1; // 1 
   DG = 0;// 0
   
}


setInterval(backchange2, 0100);
 
setTimeout (UM, 0030);
function UM(){
    document.getElementById("vm").removeAttribute("muted");
    document.getElementById("vm").volume = 0.9;
}   
  

function backchange2(){
    if (CG < 11)   {
    CG = CG+1; // 2 3 4
    DG = DG+1; // 1 2 3
    backchange3();
    }
    else{
    document.getElementById("cup").classList.remove("dance" + 11 );
    document.getElementById("cup").classList.add("dance" + 2);
    backchange();
    }
}


function backchange3(){
    document.getElementById("cup").classList.remove("dance" + DG ); //color 1 2 3
    document.getElementById("cup").classList.add("dance" + CG); // color 2 3 4
}

