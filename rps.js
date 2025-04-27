let scoreStr=localStorage.getItem('score');
let score;
resetScore(scoreStr);
function resetScore(scoreStr){
    score=scoreStr? JSON.parse(scoreStr):{
win:0,
lost:0,
tie:0,};
score.displayScore=function(){
    return `win:${score.win} lost:${score.lost} tie:${score.tie}`};
showresult();}
function generate(){  
var randomChoice=Math.random()*3;
if(randomChoice>0 && randomChoice<=1)
return 'Rock';
else if(randomChoice>1 && randomChoice<=2)
    return 'Paper';
else
    return 'Scissor';
}
function match(userMove,computerMove){
    if(userMove=='Rock'){
        if(computerMove=='Rock'){
            score.tie++;
            return `MATCH TIE!`;}
            else if(computerMove=='Paper'){
                score.lost++;
            return `COMPUTER WON!`;}
            else
            {score.win++;
            return `YOU WON!`;}
    }
if(userMove=='Paper'){
    if(computerMove=='Rock'){
        score.win++;
        return `YOU WON!`;}
        else if(computerMove=='Paper'){
            score.tie++;
        return `MATCH TIE!`;}
        else{
            score.lost++;
        return `COMPUTER WON!`;}
}
if(userMove=='Scissor'){
    if(computerMove=='Rock'){
        score.lost++;
        return`COMPUTER WON!`;}
        else if(computerMove=='Paper'){
            score.win++;
        return `YOU WON!`;}
        else{
            score.tie++;
        return `MATCH TIE!`;}
}
}
function showresult(userMove,computerMove,result){
    localStorage.setItem('score',JSON.stringify(score));
    if(result=="YOU WON!"){document.getElementById("result").style.color="green"}
    else if(result=="COMPUTER WON!"){document.getElementById("result").style.color="red"}
    else{document.getElementById("result").style.color="blue"}
    document.querySelector('#result').innerText=result||'';
    document.querySelector('#score').innerText=score.displayScore();
    document.querySelector("#user").innerText=userMove!=undefined?`you've chosen ${userMove}`:"";
    document.querySelector("#comp").innerText=computerMove!=undefined?`computer has chosen ${computerMove}`:"";
}
