const rover = {
    direction: 'N',
    x: 0,
    y: 0,
    travelLog: []
};

function moveforward(marsRover, goForward){

    if(goForward === 'f'){

        if(marsRover.direction === 'N'){
            //marsRover.travelLog.push([marsRover.x, marsRover.y]);
            if(marsRover.y >= 0 && marsRover.y < 10){
                marsRover.y--;
                marsRover.travelLog.push([marsRover.x, marsRover.y]);
            }else{
                console.log("Você não pode sair do espaço designado!");
            }
        }else if(marsRover.direction === 'S'){
            //marsRover.travelLog.push([marsRover.x, marsRover.y]);
            if(marsRover.y >= 0 && marsRover.y < 10){
            marsRover.y++;
            marsRover.travelLog.push([marsRover.x, marsRover.y]);
            }else{
                console.log("Você não pode sair do espaço designado!");
            }
        }else if(marsRover.direction === 'W'){
            //marsRover.travelLog.push([marsRover.x, marsRover.y]);
            if(marsRover.x >= 0 && marsRover.x < 10){
            marsRover.x--;
            marsRover.travelLog.push([marsRover.x, marsRover.y]);
            }else{
                console.log("Você não pode sair do espaço designado!");
            }
        }else if(marsRover.direction === 'E'){
            //marsRover.travelLog.push([marsRover.x, marsRover.y]);
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

        console.log(`Ré do Rover: ${marsRover.direction}, fases x = ${marsRover.x}, y = ${marsRover.y}`);
}

function turnLeft(marsRover, goLeft){
    
    if(goLeft === 'l'){
        if(marsRover.direction === 'N'){
            marsRover.direction = 'W';
        }else if(marsRover.direction === 'S'){
            marsRover.direction = 'E';
        }else if(marsRover.direction === 'W'){
            marsRover.direction = 'S'
        }else if(marsRover.direction === 'E'){
            marsRover.direction = 'N';
        }
    }
}

function turnRight(marsRover, goRight){
    if(goRight === 'r'){
        if(marsRover.direction === 'N'){
            marsRover.direction = 'E';
        }else if(marsRover.direction === 'S'){
            marsRover.direction = 'W';
        }else if(marsRover.direction === 'W'){
            marsRover.direction = 'N'
        }else if(marsRover.direction === 'E'){
            marsRover.direction = 'S';
        }
    }
}

function goForward(marsRover, ordens){
    for(let i = 0; i < ordens.length; i++){
        let ordem = ordens[i];
        switch(ordem){
            case 'f': // forward      
            //marsRover.travelLog.push([marsRover.x, marsRover.y]);          
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
console.log(`Log de coordenadas: ${rover.travelLog.join(' - ')}`);
//rffrf
//rffrfflfrff