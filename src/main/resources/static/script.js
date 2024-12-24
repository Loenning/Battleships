
//------ Creating the game board

var createGrid=function(x,y){
    var arrY = new Array(),
        arrX,
        container = $(".table");
    for(var iy=0; iy<y; iy++){
        arrX = new Array();
        for(var ix=0; ix<x; ix++){
            arrX[ix]='<div class="cell">&nbsp;</div>';
        }
        arrY[iy]='<div class="row">'+arrX.join("\r\n")+'</div>';
    }
    container.append(arrY.join("\r\n"));
};
// call function
createGrid(10,10);





