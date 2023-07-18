var jj = true,win = false;
var awe, jkl = 0;
aa = [false, false, false, false, false, false, false, false, false];
var bb = [
    [undefined, undefined, undefined],
    [undefined, undefined, undefined],
    [undefined, undefined, undefined]
];
var moo, mii;

function los(hh) {
    if ((jj) && (aa[hh] === false)) {
        zug(hh);
        if (win === false) {
            bot(hh);
        }
    }
}


function zug(hh) {
    if (aa[hh] === false) {
        if (!jj) {
            document.getElementById("a" + hh).innerHTML = "X";
            aa[hh] = "1";

        } else {
            document.getElementById("a" + hh).innerHTML = "O";
            aa[hh] = "2";
        }
        jj = !jj;

        //gewinn prüfung
        for (var hhh = 1; hhh <= 2; hhh++) {
            if (hhh == 1) {
                awe = "1";
            }
            if (hhh == 2) {
                awe = "2";
            }

            for (var fo = 0; fo < 9; fo = fo + 3) {
                if ((aa[fo] == aa[fo + 1]) && (aa[fo + 1] == aa[fo + 2]) && (aa[fo + 2] == awe)) {
                    winner(awe);
                    return;
                }
            }
            for (var fa = 0; fa <= 3; fa++) {
                if ((aa[fa] == aa[fa + 3]) && (aa[fa + 3] == aa[fa + 6]) && (aa[fa + 6] == awe)) {
                    winner(awe);
                    return;
                }
            }

            if ((aa[0] == aa[4]) && (aa[4] == aa[8]) && (aa[8] == awe)) {
                winner(awe);
                return;
            }
            if ((aa[2] == aa[4]) && (aa[4] == aa[6]) && (aa[6] == awe)) {
                winner(awe);
                return;
            }
        }
        jkl++;
        if (jkl == 9) {
            rese();
            aler("Unentschieden")
        }
    }
}

function rese() {
    win = true;
    aa = [3, 3, 3, 3, 3, 3, 3, 3, 3];
}


function rematch() {
    aa = [false, false, false, false, false, false, false, false, false];
    for (var www = 0; www < 9; www++) {
        document.getElementById("a" + www).innerHTML = "";
    }
    jj = true;
    win = false;
    bb = [
        [undefined, undefined, undefined],
        [undefined, undefined, undefined],
        [undefined, undefined, undefined]
    ];
    jkl = 0;
    awe = undefined;
    moo = undefined;
    mii = undefined;
}

function winner(ji) {
    if (ji == 1) {
        aler("Winner: X");
    } else if (ji == 2) {
        aler("Winner: O");
    }
    rese();
}


function bot(hh) {
    var ran, i, tes;
    mov = false;
    write(hh, 1); //1=other Player 2=bot
    //testing own winning opertunity
    if (jkl >= 3) {
        if (mov === false) {
            for (i in bb) { //horizontal
                if (test(bb[i][0], bb[i][1], bb[i][2]) === true) {
                    tes = test3(bb[i][0], bb[i][1], bb[i][2]);
                    //alert(i+" + "+tes);
                    if (tes !== false) {
                        mov = true;
                        ran = 3 * i + tes * 1;
                    }
                }
            }
        }
        if (mov === false) { //vertical
            for (i in bb) {
                if (test(bb[0][i], bb[1][i], bb[2][i]) === true) {
                    tes = test3(bb[0][i], bb[1][i], bb[2][i]);
                    if (tes !== false) {
                        mov = true;
                        ran = 3 * tes + i * 1;
                    }
                }
            }
        }
        if (mov === false) { //diagonal \
            if (test(bb[0][0], bb[1][1], bb[2][2]) === true) {
                tes = test3(bb[0][0], bb[1][1], bb[2][2]);
                if (tes !== false) {
                    mov = true;
                    ran = 4 * tes;
                }
            }
        }
        if (mov === false) { //diagonal /
            if (test(bb[0][2], bb[1][1], bb[2][0]) === true) {
                tes = test3(bb[0][2], bb[1][1], bb[2][0]);
                if (tes !== false) {
                    mov = true;
                    ran = 2 * tes + 2;
                }
            }
        }
        //checking win opertynity other player
        if (mov == false) {
            for (i in bb) { //horizontal
                if (test(bb[i][0], bb[i][1], bb[i][2]) === true) {
                    tes = test2(bb[i][0], bb[i][1], bb[i][2]);
                    if (tes !== false) {
                        mov = true;
                        ran = 3 * i + tes;
                    }
                }
            }
        }
        if (mov === false) { //vertical
            for (i in bb) {
                if (test(bb[0][i], bb[1][i], bb[2][i]) === true) {
                    tes = test2(bb[0][i], bb[1][i], bb[2][i]);
                    if (tes !== false) {
                        mov = true;
                        ran = 3 * tes + i * 1;
                    }
                }
            }
        }
        if (mov === false) { //diagonal \
            if (test(bb[0][0], bb[1][1], bb[2][2]) === true) {
                tes = test2(bb[0][0], bb[1][1], bb[2][2]);
                if (tes !== false) {
                    mov = true;
                    ran = 4 * tes;
                }
            }
        }
        if (mov === false) { //diagonal /
            if (test(bb[0][2], bb[1][1], bb[2][0]) === true) {
                tes = test2(bb[0][2], bb[1][1], bb[2][0]);
                if (tes !== false) {
                    mov = true;
                    ran = 2 * tes + 2;
                }
            }
        }
    }

    if (mov === false) { //kjkjkjkjkjkjkjkjkjkjkjkjkjkjkjkjkjkjkjkjkjkjkjkjkjkjkjkjkjkjkjkjkjkjkjkjkjkjkjkjkjkjkjkjkjkjkj
        if (jkl == 1) {//beim ersten Zug (jkl = zug)
            switch (hh) {
                case 0:
                    ran = 4;
                    break;
                case 1:
                    ran = 7;
                    mii = 6;
                    break;
                case 2:
                    ran = 4;
                    break;
                case 3:
                    ran = 5;
                    mii = 8;
                    break;
                case 4:
                    ran = 6;
                    mii = true;
                    break;
                case 5:
                    ran = 3;
                    mii = 0;
                    break;
                case 6:
                    ran = 4;
                    break;
                case 7:
                    ran = 1;
                    mii = 2;
                    break;
                case 8:
                    ran = 4;
                    break;
            }
            if (ran == 4) moo = true;
            mov = true;
        }
        else {
            //  ???
            //  ?X?
            //  0??
            if ((mov == false) && (mii === true) && (hh == 2) && (jkl == 3)) {
                ran = 0;
                mov = true;
            }

            //?0?
            //?0?
            //oX?
            if ((mov == false) && (hh == 4) && (jkl == 3)) {
                mov = true;
                ran = Math.abs(Math.round(mii));
            }

            //  0X0
            //  ??X
            //  ??0
            if (mov == false) {
                if (test4(bb[0][1], bb[1][0], bb[0][0], bb[0][2], bb[2][0]) === true) {
                    mov = true;
                    ran = 0;
                }
            }
            if (mov == false) {
                if (test4(bb[0][1], bb[1][2], bb[0][2], bb[0][0], bb[2][2]) === true) {
                    mov = true;
                    ran = 2;
                }
            }
            if (mov == false) {
                if (test4(bb[2][1], bb[1][0], bb[2][0], bb[0][0], bb[2][2]) === true) {
                    mov = true;
                    ran = 6;
                }
            }
            if (mov == false) {
                if (test4(bb[2][1], bb[1][2], bb[2][2], bb[0][2], bb[2][0]) === true) {
                    mov = true;
                    ran = 8;
                }
            }
            //  X00
            //  ??0
            //  ??X
            if (mov == false) {
                if (test4(bb[2][0], bb[0][2], bb[1][0], bb[0][0], bb[0][1]) === true) {
                    mov = true;
                    ran = 1;
                }
            }
            if (mov == false) {
                if (test4(bb[2][0], bb[0][2], bb[2][1], bb[2][2], bb[1][2]) === true) {
                    mov = true;
                    ran = 3;
                }
            }
            if (mov == false) {
                if (test4(bb[0][0], bb[2][2], bb[0][1], bb[0][2], bb[1][2]) === true) {
                    mov = true;
                    ran = 5;
                }
            }
            if (mov == false) {
                if (test4(bb[0][0], bb[2][2], bb[1][0], bb[2][0], bb[2][1]) === true) {
                    mov = true;
                    ran = 7;
                }
            }
            //  X00
            //  ??X
            //  ??0
            if (mov == false) {
                if (test4(bb[0][0], bb[2][1], bb[2][0], bb[2][2], bb[1][0]) === true) {
                    mov = true;
                    if (moo === true) ran = 3;
                    else ran = 8;
                }
            }
            if (mov == false) {
                if (test4(bb[0][2], bb[2][1], bb[2][0], bb[2][2], bb[1][2]) === true) {
                    mov = true;
                    if (moo === true) ran = 5;
                    else ran = 6;
                }
            }

            if (mov == false) {
                if (test4(bb[0][2], bb[1][0], bb[0][0], bb[2][0], bb[0][1]) === true) {
                    mov = true;
                    if (moo === true) ran = 1;
                    else ran = 6;
                }
            }
            if (mov == false) {
                if (test4(bb[2][2], bb[1][0], bb[0][0], bb[2][0], bb[2][1]) === true) {
                    mov = true;
                    if (moo === true) ran = 7;
                    else ran = 0;
                }
            }

            if (mov == false) {
                if (test4(bb[2][0], bb[0][1], bb[0][0], bb[0][2], bb[1][0]) === true) {
                    mov = true;
                    if (moo === true) ran = 3;
                    else ran = 2;
                }
            }
            if (mov == false) {
                if (test4(bb[2][2], bb[0][1], bb[0][0], bb[0][2], bb[1][2]) === true) {
                    mov = true;
                    if (moo === true) ran = 5;
                    else ran = 0;
                }
            }

            if (mov == false) {
                if (test4(bb[0][0], bb[1][2], bb[0][2], bb[2][2], bb[0][1]) === true) {
                    mov = true;
                    if (moo === true) ran = 1;
                    else ran = 8;
                }
            }
            if (mov == false) {
                if (test4(bb[2][0], bb[1][2], bb[0][2], bb[2][2], bb[2][1]) === true) {
                    mov = true;
                    if (moo === true) ran = 7;
                    else ran = 2;
                }
            }
            //X?X
            //?00
            //??0
            if(mov == false) {
               if (test4(bb[0][0], bb[0][2], bb[1][1], bb[1][2], bb[2][2]) === true) {
                    mov = true;
                    ran = 8;
                } 
            }
            if(mov == false) {
               if (test4(bb[1][2], bb[0][0], bb[1][1], bb[0][1], bb[0][2]) === true) {
                    mov = true;
                    ran = 2;
                } 
            }
            if(mov == false) {
               if (test4(bb[2][0], bb[2][2], bb[1][1], bb[1][0], bb[0][0]) === true) {
                    mov = true;
                    ran = 0;
                } 
            }
            if(mov == false) {
               if (test4(bb[0][2], bb[2][2], bb[1][1], bb[2][1], bb[2][0]) === true) {
                    mov = true;
                    ran = 6;
                } 
            }

            if(mov == false) {
               if (test4(bb[0][0], bb[0][2], bb[1][1], bb[1][0], bb[2][0]) === true) {
                    mov = true;
                    ran = 6;
                } 
            }
            if(mov == false) {
               if (test4(bb[1][2], bb[0][0], bb[1][1], bb[2][1], bb[2][2]) === true) {
                    mov = true;
                    ran = 8;
                } 
            }
            if(mov == false) {
               if (test4(bb[2][0], bb[2][2], bb[1][1], bb[1][2], bb[0][2]) === true) {
                    mov = true;
                    ran = 2;
                } 
            }
            if(mov == false) {
               if (test4(bb[0][2], bb[2][2], bb[1][1], bb[0][1], bb[0][0]) === true) {
                    mov = true;
                    ran = 0;
                } 
            }
        }
        


        if (mov === false) {
            do {
                ran = Math.floor(Math.random() * (9));
            }
            while (aa[ran] !== false);
            //do{ran =  Math.abs(Math.round(prompt()))-1;}
            //while(aa[ran]!==false);
            mov = true;
        }

    }
    if (mov === true) {
        zug(ran);
        write(ran, 2);
        //alert(bb);
    }


}


function write(hh, inp) {
    switch (hh) {
        case 0:
            bb[0][0] = inp;
            break;
        case 1:
            bb[0][1] = inp;
            break;
        case 2:
            bb[0][2] = inp;
            break;
        case 3:
            bb[1][0] = inp;
            break;
        case 4:
            bb[1][1] = inp;
            break;
        case 5:
            bb[1][2] = inp;
            break;
        case 6:
            bb[2][0] = inp;
            break;
        case 7:
            bb[2][1] = inp;
            break;
        case 8:
            bb[2][2] = inp;
            break;
        default:
            break;
    }
}



function test(a, b, c) {
    if ((a === undefined) || (b === undefined) || (c === undefined)) {
        if ((a == b) && (a == c)) {
            return false;
        } else if ((a == b) || (a == c) || (b == c)) {
            return true;
        } else {
            return false;
        }
    } else {
        return false;
    }
}

function test2(a, b, c) {
    a = Math.abs(Math.round(a));
    b = Math.abs(Math.round(b));
    c = Math.abs(Math.round(c));
    if ((a == 1) || (b == 1) || (c == 1)) {
        if ((a == 1) && (b == 1) && (isNaN(c))) return 2;
        else if ((a == 1) && (c == 1) && (isNaN(b))) return 1;
        else if ((c == 1) && (b == 1) && (isNaN(a))) return 0;
        else return false;
    } else return false;
}

function test3(a, b, c) {
    a = Math.abs(Math.round(a));
    b = Math.abs(Math.round(b));
    c = Math.abs(Math.round(c));
    if ((a == 2) || (b == 2) || (c == 2)) {
        if ((a == 2) && (b == 2) && (isNaN(c))) return 2;
        else if ((a == 2) && (c == 2) && (isNaN(b))) return 1;
        else if ((c == 2) && (b == 2) && (isNaN(a))) return 0;
        else return false;
    } else return false;
}

function test4(a, b, c, d, e) {
    if ((a == 1) && (b == 1) && (c === undefined) && (d === undefined) && (e === undefined)) return true;
    else return false;
}

function aler(al, ex) {
    document.getElementById("mote").innerHTML = al;
    modal.style.display = "block";
    if(ex == "hid") {
        document.getElementsByClassName("close")[0].style.display = "none";
    } else {
        document.getElementsByClassName("close")[0].style.display = "block";
    }
}
function sp() {
    modal.style.display = "none";
    rematch();
}

window.onclick = function(event) {
    if(event.target == modal) {
        sp();
    }
}

var modal;
window.addEventListener('DOMContentLoaded', function() {
    modal = document.getElementById("myModal");
});
