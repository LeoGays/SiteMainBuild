

function printed_el_text( el ){
    var text = el.innerHTML,
        i = 0,
        __print = function (){
            i++;
            if( i <= text.length ){
                el.innerHTML = text.substr(0, i);
                setTimeout( __print, 35 );
            }
        };
    __print();
};

document.getElementById("next").style.display = "none";
document.getElementById("final").style.display = "none";


var array = {
    q1: undefined,
    q2: undefined,
    q3: undefined,
    q4: undefined
}

var count = 0;


start.addEventListener("click", function () {
    document.getElementById("intro").style.display = "none";
    document.getElementById("next").style.display = "block";
    document.getElementById("test1").style.display = "block";
    printed_el_text(document.getElementById("text1"));
    count++;
})

next.addEventListener("click", function () {


    if (count != 4) {
        document.getElementById("next").style.display = "block";
        document.getElementById("test" + count).style.display = "none";

        var rad = document.getElementsByName("q" + count);
        for (let i = 0; i < rad.length; i++) {
            if (rad[i].checked) {
                array["q"+ count] = rad[i].value;
            }
        }

        count++;
        console.log(count);
        document.getElementById("test" + count).style.display = "block";
        printed_el_text(document.getElementById("text" + count));
    } else {
        document.getElementById("next").style.display = "none";
        document.getElementById("test4").style.display = "none";

        var rad = document.getElementsByName("q" + count);
        for (let i = 0; i < rad.length; i++) {
            if (rad[i].checked) {
                array["q"+ count] = rad[i].value;
            }
        }
        printed_el_text(document.getElementById("text"));
        document.getElementById("final").style.display = "block";
    }

})





