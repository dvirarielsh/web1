const t = document.getElementById('a');
let b;
t.onclick = function() {
    let a = document.getElementById("size").value;
    if (!isNaN(Number(a))){
        a= Number(a);
         b = "";
        for (let i=1; i<=a; i++){
        let c = Math.floor(Math.random() * 80) + 1;
        switch(c){
            case 1:
                b+="1";
                break;
            case 2:
                b+="2";
                break;
            case 3:
                b+="3";
                break;
            case 4:
                b+="4";
                break;
            case 5:
                b+="5";
                break;
            case 6:
                b+="6";
                break;
            case 7:
                b+="7";
                break;
            case 8:
                b+="8";
                break;
            case 9:
                b+="9";
                break;
            case 10:
                b+="0";
                break;
            case 11:
                b+="A";
                break;
            case 12:
                b+="a";
                break;
            case 13:
                b+="B";
                break;
            case 14:
                b+="b";
                break;
            case 15:
                b+="C";
                break;
            case 16:
                b+="c";
                break;
            case 17:
                b+="D";
                break;
            case 18:
                b+="d";
                break;
            case 19:
                b+="E";
                break;
            case 20:
                b+="e";
                break;
            case 21:
                b+="F";
                break;
            case 22:
                b+="f";
                break;
            case 23:
                b+="G";
                break;
            case 24:
                b+="g";
                break;
            case 25:
                b+="H";
                break;
            case 26:
                b+="h";
                break;
            case 27:
                b+="I";
                break;
            case 28:
                b+="i";
                break;
            case 29:
                b+="J";
                break;
            case 30:
                b+="j";
                break;
            case 31:
                b+="K";
                break;
            case 32:
                b+="k";
                break;
            case 33:
                b+="L";
                break;
            case 34:
                b+="l";
                break;
            case 35:
                b+="M";
                break;
            case 36:
                b+="m";
                break;
            case 37:
                b+="N";
                break;
            case 38:
                b+="n";
                break;
            case 39:
                b+="O";
                break;
            case 40:
                b+="o";
                break;
            case 41:
                b+="P";
                break;
            case 42:
                b+="p";
                break;
            case 43:
                b+="Q";
                break;
            case 44:
                b+="q";
                break;
            case 45:
                b+="R";
                break;
            case 46:
                b+="r";
                break;
            case 47:
                b+="S";
                break;
            case 48:
                b+="s";
                break;
            case 49:
                b+="T";
                break;
            case 50:
                b+="t";
                break;
            case 51:
                b+="U";
                break;
            case 52:
                b+="u";
                break;
            case 53:
                b+="V";
                break;
            case 54:
                b+="v";
                break;
            case 55:
                b+="W";
                break;
            case 56:
                b+="w";
                break;
            case 57:
                b+="X";
                break;
            case 58:
                b+="x";
                break;
            case 59:
                b+="Y";
                break;
            case 60:
                b+="y";
                break;
            case 61:
                b+="Z";
                break;
            case 62:
                b+="z";
                break;
            case 63:
                b+="-";
                break;
            case 64:
                b+="_";
                break;
            case 65:
                b+="!";
                break;
            case 66:
                b+="@";
                break;
            case 67:
                b+="#";
                break;
            case 68:
                b+="$";
                break;
            case 69:
                b+="%";
                break;
            case 70:
                b+="^";
                break;
            case 71:
                b+="&";
                break;
            case 72:
                b+="*";
                break;
            case 73:
                b+="(";
                break;
            case 74:
                b+=")";
                break;
            case 75:
                b+="+";
                break;
            case 76:
                b+="=";
                break;
            case 77:
                b+="~";
                break;
            case 78:
                b+="`";
                break;
            case 79:
                b+="|";
                break;
            case 80:
                b+="?";
                break;
        }
       }
   }
   else{
       alert("Please enter a number");
   }
    document.getElementById("r").textContent = b;
}