var openbracket=0,concatinput='',prevchar='',operator=0,proof=0;
function togglepara(){
    openbracket=1-openbracket;
    return openbracket==1?'(':')';
}
function validate(x){
    try{
        concatinput=eval(concatinput);
    }catch(error){
        concatinput="ERROR";
    }
    proof=1;
    return concatinput;
}
function ansi(inp){
    if(proof==1){
        if(inp=='ac' || inp=='back'){
        concatinput='';
        document.getElementById("ans").innerHTML='';
        document.getElementById("mid").innerHTML='';
        document.getElementById("res").innerHTML='';
        }
        else if(inp=='='){
            proof=1;
        }
        else{
        document.getElementById("ans").innerHTML=concatinput+inp;
        document.getElementById("mid").innerHTML='';
        proof=0;
        concatinput+=inp;
        }

    }
    else if(inp=='ac'){
        concatinput='';
        document.getElementById("ans").innerHTML='';
        document.getElementById("mid").innerHTML='';
        document.getElementById("res").innerHTML='';
    }
    else if(inp=='back'){
        if(concatinput.length>0){
            concatinput=concatinput.slice(0,-1);
        }
        
    }
    else if(inp=='+/-'){
        concatinput+=togglepara();
    }
    else if(inp=='='){
        concatinput=validate(concatinput);
    }
    else{
        if(inp=='-' || inp=='*' || inp=='+' || inp=='/'){
            if(operator!=1){
                concatinput+=inp;
                operator=1;
            }
            else{
                concatinput=concatinput.slice(0,-1);
                concatinput+=inp;
            }
        }
        else{
            concatinput+=inp;
            operator=0;
        }
    }
    document.getElementById("ans").innerHTML=concatinput;
        if(inp=='ac' || concatinput.length==0 || concatinput=='ERROR'){
            document.getElementById("res").innerHTML='';
            document.getElementById("mid").innerHTML='';

        }
        else if(inp=='='){
            document.getElementById("mid").innerHTML=concatinput;
            document.getElementById("ans").innerHTML='';
            document.getElementById("res").innerHTML='';

        }
        else{
            document.getElementById("res").innerHTML=eval(concatinput);
        }
}
