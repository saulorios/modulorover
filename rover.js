const rover = {
    direction: 'N',
    x: 0,
    y: 0,
    travelLog: []
};


function moveforward(marsRover, goForward){

    if(goForward === 'f'){

        if(marsRover.direction === 'N'){
            if(marsRover.y >= 0 && marsRover.y < 10){
                marsRover.y--;
                marsRover.travelLog.push([marsRover.x, marsRover.y]);
            }else{
                console.log("Você não pode sair do espaço designado!");
            }
        }else if(marsRover.direction === 'S'){
            if(marsRover.y >= 0 && marsRover.y < 10){
            marsRover.y++;
            marsRover.travelLog.push([marsRover.x, marsRover.y]);
            }else{
                console.log("Você não pode sair do espaço designado!");
            }
        }else if(marsRover.direction === 'W'){
            if(marsRover.x >= 0 && marsRover.x < 10){
            marsRover.x--;
            marsRover.travelLog.push([marsRover.x, marsRover.y]);
            }else{
                console.log("Você não pode sair do espaço designado!");
            }
        }else if(marsRover.direction === 'E'){
            if(marsRover.x >= 0 && marsRover.x < 10){
            marsRover.x++;
            marsRover.travelLog.push([marsRover.x, marsRover.y]);
            }else{
                console.log("Você não pode sair do espaço designado!");
            }
        }
    }

        console.log(`Direção do Rover: ${marsRover.direction}, fases x = ${marsRover.x}, y = ${marsRover.y}`);
}

function moveBackward(marsRover, goBackward){

    if(goBackward === 'b'){

        if(marsRover.direction === 'N'){
            if(marsRover.y >= 0 && marsRover.y < 10){
                marsRover.y++;
                marsRover.travelLog.push([marsRover.x, marsRover.y]);
            }else{
                console.log("Você não pode sair do espaço designado!");
            }
        }else if(marsRover.direction === 'S'){
            if(marsRover.y >= 0 && marsRover.y < 10){
            marsRover.y--;
            marsRover.travelLog.push([marsRover.x, marsRover.y]);
            }else{
                console.log("Você não pode sair do espaço designado!");
            }
        }else if(marsRover.direction === 'W'){
            if(marsRover.x >= 0 && marsRover.x < 10){
            marsRover.x++;
            marsRover.travelLog.push([marsRover.x, marsRover.y]);
            }else{
                console.log("Você não pode sair do espaço designado!");
            }
        }else if(marsRover.direction === 'E'){
            if(marsRover.x >= 0 && marsRover.x < 10){
            marsRover.x--;
            marsRover.travelLog.push([marsRover.x, marsRover.y]);
            }else{
                console.log("Você não pode sair do espaço designado!");
            }
        }
    }

        console.log(`Ré do Rover: ${marsRover.direction}, fases x = ${marsRover[i].x}, y = ${marsRover[i].y}`);
}

function turnLeft(marsRover, goLeft){
    
    switch(goLeft === 'l'){
        case(marsRover.direction === 'N'):
            marsRover.direction = 'W';
        break;
        case(marsRover.direction === 'S'):
            marsRover.direction = 'E';
        break;
        case(marsRover.direction === 'W'):
            marsRover.direction = 'S'
        break;
        case(marsRover.direction === 'E'):
            marsRover.direction = 'N';
        break;
    }    
}

function turnRight(marsRover, goRight){

    switch(goRight === 'r'){
        case(marsRover.direction === 'N'):
            marsRover.direction = 'E';
        break;
        case(marsRover.direction === 'S'):
            marsRover.direction = 'W';
        break;
        case(marsRover.direction === 'W'):
            marsRover.direction = 'N';
        break;
        case(marsRover.direction === 'E'):
            marsRover.direction = 'S';
        break;
    }
}


function goForward(marsRover, ordens){
    for(let i = 0; i < ordens.length; i++){
        let ordem = ordens[i];
        switch(ordem){
            case 'f': // forward         
                moveforward(marsRover, ordem);
                break;
            case 'l': // left
                turnLeft(marsRover, ordem);
                break;
            case 'r': // right
                turnRight(marsRover, ordem);
                break;
            case 'b': // backward
                moveBackward(marsRover, ordem);
                break;
            default:
                console.log(`Desculpe! mas o comando "${ordem}" não existe!.`);
        }
    }
}

goForward(rover, 'rffrfflfrff');
console.log(`Log de coordenadas do Rover: ${rover.travelLog.join(' - ')}`);
//rffrf
//rffrfflfrff