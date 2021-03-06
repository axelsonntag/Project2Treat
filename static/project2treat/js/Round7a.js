var sequences_7a = ["ahgjwsjkck","aahmatgdyowd","fooajbufogfaaa","bazxgaryapcgxzaa","ndqkxasamzddavajdk","ilfcamngfapoaptcayga","scyaabygacsejvalqdnclu","tcatrykuaaxgiziiiampfsla","ngygwafaeneyuvanetztaynbaw","tfkcbaorhcvdzyaaatyqzjggdbax","angcgasabloawtagbodiaarncrkplv","irrdvvuwjaxbxspectbayiaqfehahaid","tqelvjnaavuarmsdkahogapbjbahvomfxg","ohxrihmtzbcaqqikelapaocwaaenxsajaawc","fxmxnakawejagiansttailoqnarncrqvdgskhl","sgpaycibcyacgapljayodxntaqjbqegmhppaawan","laaaanrgkrryaehomcpvamceisaokznasnxdoaaoma","bjsgafyvtjehqolzouzdchuuxgaakafnzaniavxcmslx","kyaabkasfmpozaabwsbahnxvhdhsmamhaaryaxsavbzewe","lytaafnjlgaamlabaecdtmekzfvajeznfdanjapedaakaxvf","cejahygwfayhnnudfafjnwugzignedjemzrufvsrooxbavsqaa","qccakauulvafmfvaamfxfkkaxgmcfeiagucaataegaznckwaesea","kkatzramvczaqvaabpsahiapteftcataaviafaazaaoaaokfinafre","fcgbasodxstvmimglyixbaatovciaxowuhedxalaedpimvmojajjwnwh","newfatszeqeqiatnaeradanyjaaqdahqfxeapdjpdnxlrcsraapayeaimw","yodsvjpuaeemoxafdtwgxaapfsmaqkaxwpjtjrafaavabarejmonjcafhxfa","lccjbqadxalztmdxnpoegthdcgazvmuevwntsnaajgamcbrasiveaubbefscna","cmwtnuzealnerhxhpaqajoazdcywtiwzatlmswaravvziaaixmscumgeypqapvjh","abddbibawcnsuoaypgfutdglytmacagvxhaugxarwzcgakguydkmawnnkgudrtsfco","fztmvofawampyvraklkaldgaahwaowapmaxqmzknuibpaszvdqiilakaadauqxhsqfic"];
var solutions_7a = [1,3,4,5,4,5,4,5,5,5,7,5,6,8,6,8,11,6,11,12,6,13,18,7,13,13,9,10,9,14 ]
var length_7a = solutions_7a.length;

var me = me || {};
me.index = null;
me.guess = null;
me.timer = null;
me.pad = null;
me.settime = null;
me.resettime = null;
me.check = null;
me.makeguess = null;

me.pad = function(val) {
    return val > 9 ? val : "0" + val;
}

me.settime = function() {
    me.sec = 0;
    me.timer = setInterval(function () {
        document.getElementById("sec").innerHTML = me.pad(++me.sec % 60);
        document.getElementById("min").innerHTML = me.pad(parseInt(me.sec / 60, 10));
        }, 1000)
}

me.resettime = function(){
    clearInterval(me.timer);
    document.getElementById("sec").innerHTML = "00";
    document.getElementById("min").innerHTML = "00";

    me.sec = 0;
    me.timer = setInterval(function () {
        document.getElementById("sec").innerHTML = me.pad(++me.sec % 60);
        document.getElementById("min").innerHTML = me.pad(parseInt(me.sec / 60, 10));
        }, 1000)
}

me.check = function(x) {
    document.getElementById("player_guess").value = "";

    var el = document.createElement("input")
    el.type = "hidden";
    if (me.index+1 < 10){
        el.name = "t70" + (me.index+1);
    } else{
        el.name = "t7" + (me.index+1);
    }
    el.value = document.getElementById("min").innerHTML + ":" + document.getElementById("sec").innerHTML;
    el.id = el.name

    var answers = document.getElementById("id_output7a");
    answers.appendChild(el);

    if (x === solutions_7a[me.index]) {
        me.makeguess(me.index+1);
        me.resettime();
    } else {
        me.makeguess(me.index);
    }
}

me.makeguess = function(x) {
    if (x >= length_7a) {
        alert("Error");
    } else {
        me.index = x;

        var string = document.getElementById("string");
        string.innerHTML = sequences_7a[x];

        document.getElementById("id_output7a").setAttribute("value",me.index);
    }
}

function keyDownTextField(e) {
  var keyCode = e.keyCode;
  if(keyCode==13) {
    event.preventDefault();
    var wert = document.getElementById("player_guess").value;
    me.guess = parseInt(wert);
    me.check(me.guess);
    }
}

function keyUpTextField(e) {
  var keyCode = e.keyCode;
  if(keyCode==13) {
    event.preventDefault();
  }
}

function keyPressTextField(e) {
  var keyCode = e.keyCode;
  if(keyCode==13) {
    event.preventDefault();
  }
}

document.getElementById("Switch_button").addEventListener("click", function() {

})

window.onload = function(){
    me.makeguess(0);
    me.settime();
    document.addEventListener("keydown", keyDownTextField, false);
    document.addEventListener("keyup", keyUpTextField, false);
    document.addEventListener("keypress", keyPressTextField, false);
}