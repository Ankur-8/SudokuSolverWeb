const board1 = [];

function initializeDataset(){
    for (let i = 111; i < 200; i++){
        if (i%10 != 0){
            board1[i] = document.getElementById(i);
        }
    }    
}

