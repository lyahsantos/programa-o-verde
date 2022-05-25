// Pego elementos do Li
var btn = document.querySelectorAll(".key li"),
input = document.querySelector(".key li"),
operador = document.querySelectorAll(".operador");

for(var i = 0; 1 < btn.length; i++){
    document.enterpress = function(event){
        for(var e = 0; e <= 10; e++){
            if(key ===(48+e)){
                input;innerHTML += e;
            }
        }
        switch(key){
            case 42:
                input.innerHTML += "*";
                break;
            case 43:
                input.innerHTML += "+";
                break;
            case 45:
                input.innerHTML += "-";
                break;
            case 46:
                input.innerHTML += ".";
                break;
            case 47:
                input.innerHTML += "/";
                break;
            case 13:
            case 61:
                var equacao = input.innerHTML;
                if (equacao){
                    try{
                        input.innerHTML = eval (equacao);
                    }catch (e){
                        alert('Erro na Expressão');
                    }
                }
                break;
                case 67 :
                case 99 :
                    input.innerHTML = "";
                    break;
                    default:
                    break;
        }
    
    };
btn[i] .addEventListener('click' , function(){
    var btnVal = this.innerHTML,
    inputVal = input.innerHTML;
console.log(btnVal);
switch(btnVal){
    case "c":
        input.innerHTML= "";
        break;
        case"=":
        var equacao = entradaVal;
        if(equacao){
            try{
                input.innerHTML = eval(equacao);
            }catch(e){
                alert('Erro na Expressão')
            }
        }
        break;
        default:
            input.innerHTML+=btnVal;
            break;
}

});
}
