$(function(){
    $.getJSON("locales.json", function(locales){
        var stopthatbloodyinterval = false;
        var mainbody = $("#maincontainer");
        const lg = locales.language;
        let raceName;

        $("#enter1").html("<h1>"+locales[lg].enter_heading+"</h1>");
        $("#enter2").html("<h3>"+locales[lg].enter_desription+"</h3>");
        $("#exit1").html("<h1>"+locales[lg].end_heading+"</h1>");

        window.addEventListener("message", function (event) {
            if (event.data.type == "sync") {
                $("#heading").text(event.data.raceoptions[0]);
                $("#heading").css("color", "rgb("+event.data.raceoptions[1]+","+event.data.raceoptions[2]+","+event.data.raceoptions[3]+")");



            } else if (event.data.type == "enableui") {
                $("#commandList").text(locales[lg].commands+": /respawn & /exit");
                if (event.data.options == true) {
                    mainbody.show();

                } else if (event.data.options == false) {
                    mainbody.hide();
                    stopthatbloodyinterval = true;

                } else if (event.data.options == 3) {
                    $("#enterRace").children().hide();
                    $("#enterRace").show();
                    $("#line").show();
                    $("#enter1").show("slide", { direction: "right" }, 1000);
                    $("#enter2").html("<h3>"+locales[lg].enter_desription+"</h3>");
                    $("#enter2").show("slide", { direction: "left" }, 1000);

                } else if (event.data.options == 4) {
                    $("#enterRace").hide( "pulsate", { direction: "left" }, 350);

                } else if (event.data.options == 5) {
                    stopthatbloodyinterval = false;
                    $("#exitRace").children().hide();
                    $("#exitRace").show();
                    $("#line2").show();
                    $("#exit2").text(locales[lg].end_time+" "+Math.floor(event.data.ttime/60000)+'m '+Math.floor((event.data.ttime - (Math.floor(event.data.ttime/60000))*60000)/1000)+'s '+(event.data.ttime - (Math.floor(event.data.ttime/1000)*1000))+'ms');
                    $("#exit1").show("slide", { direction: "right" }, 1000);
                    $("#exit2").show("slide", { direction: "left" }, 1000);
                    setTimeout(function(){
                        $("#exit3").show();
                    }, 1000);
                    $("#exit3").html("<h3><nobr>"+locales[lg].rolling_press+" &emsp;&emsp;&emsp; "+locales[lg].rolling_route+" "+event.data.add[0]+" "+locales[lg].rolling_finished+" &emsp;&emsp;&emsp; "+locales[lg].rolling_reward+" "+event.data.add[1]+"$ "+locales[lg].rolling_added+" &emsp;&emsp;&emsp; </nobr></h3>");
                    $("#exit3").addClass("text");
                    var scroll = $('div.scroll');//class, same as #exit3
                    scroll.each(function() { //in fact, there is only one child <h3></h3>
                        var mar = $(this), width = mar.width();//this child = mar, Width is 100% as i setted in css
                        mar.scroll = function() {//function activated by interval
                            width--;
                            mar.css('text-indent',width);//text-indent - position from left to first litter
                            if (width < -1 * (mar.children('div.text').width()+$('div.scroll').width()-500)) {//no, chidfre
                                width = mar.width();
                            }
                            if(stopthatbloodyinterval)
                            {
                                clearInterval(mar.data('interval'));
                            }
                        };
                        mar.data('interval',setInterval(mar.scroll,1000/80));
                    });



                } else if (event.data.options == 6) {
                    $("#exitRace").hide();
                }




            } else if (event.data.type == "counter") {
                $("#enter2").css({
                    "padding-right": "120px",
                    "padding-left": "140px", 
                    "background-color": "rgb(79, 155, 135)", 
                    "clip-path": "polygon(100px 60px, 220px 60px, 188px 0, 68px 0)",
                    "color": "rgb(255,0,0)"
                });
                $("#enter2").html("<h3>3</h3>");
                setTimeout(function(){
                    $("#enter2").css("color", "rgb(255,128,0)");
                    $("#enter2").html("<h3>2</h3>");
                }, 1000);
                setTimeout(function(){
                    $("#enter2").css("color", "rgb(255,255,0)");
                    $("#enter2").html("<h3>1</h3>");
                }, 2000);
                setTimeout(function(){
                    $("#enter2").css("color", "rgb(102,204,0)");
                    $("#enter2").css({"padding-left": "120px"});
                    $("#enter2").html("<h3>"+locales[lg].go+"</h3>");
                }, 3000);
                //Reset for next race
                setTimeout(function(){
                    $("#enter2").css("color", "rgb(220, 247, 99)");
                    $("#enter2").css({"background-color": "rgb(132, 140, 142)", "padding-right": "520px",});
                    //$("#enter2").html("<h3>"+"key_enter"+"</h3>");
                    $("#enter2").css("clip-path", "polygon(100px 60px, 700px 60px, 668px 0, 68px 0)");
                }, 5000);
            



            } else if (event.data.type == "sound") {
                if (event.data.sound == "counter") {
                    var audio = new Audio('stuff/counter.mp3');
                    audio.play();
                } else if (event.data.sound == "airhorn") {
                    var audio = new Audio('stuff/airhorn.mp3');
                    audio.volume = 0.1;
                    audio.play();
                }



            } else if (event.data.type == "updateCheckpoint") {
                $("#checkpoints").text(locales[lg].checkpoint+": "+event.data.checkpointoptions[0]+"/"+event.data.checkpointoptions[1]);



            } else if (event.data.type == "time") {
                var m0 = event.data.time[0];
                var ttf = event.data.time[1];
                var ms = ttf - m0;
                if (ms >= 0) {
                    if(Math.floor(ms/60000)==0) {
                        $("#time").text(Math.floor((ms - (Math.floor(ms/60000))*60000)/1000)+'s '+(ms - (Math.floor(ms/1000)*1000))+'ms');
                    } else {
                        $("#time").text(Math.floor(ms/60000)+'m '+Math.floor((ms - (Math.floor(ms/60000))*60000)/1000)+'s '+(ms - (Math.floor(ms/1000)*1000))+'ms');
                    }
                    $("#time").css("color", "green");
                } else {
                    var dms = m0 - ttf;
                    if(Math.floor(dms/60000)==0) {
                        $("#time").text('-'+Math.floor((dms - (Math.floor(dms/60000))*60000)/1000)+'s '+(dms - (Math.floor(dms/1000)*1000))+'ms');
                    } else {
                        $("#time").text('-'+Math.floor(dms/60000)+'m '+Math.floor((dms - (Math.floor(dms/60000))*60000)/1000)+'s '+(dms - (Math.floor(dms/1000)*1000))+'ms');
                    }
                    $("#time").css("color", "red");
                }



            } else if (event.data.type == "results"){
                $("#results").show();
                $("#tabCaption").text(locales[lg].results+event.data.name);
                $("tr").children("th").eq(1).text(locales[lg].tab_player);
                $("tr").children("th").eq(2).text(locales[lg].tab_time);
                $("tr").children("th").eq(3).text(locales[lg].tab_date);
                for (let i = 0; i < event.data.players.length; i++) {
                    if (event.data.players[i]=="null")
                    break;
                    $("#tr"+i).children("td").eq(1).text(event.data.players[i]);
                    $("#tr"+i).children("td").eq(1).css("color","whitesmoke");
                    $("#tr"+i).children("td").eq(2).text(event.data.time[i]);
                    $("#tr"+i).children("td").eq(2).css("color","green");
                    $("#tr"+i).children("td").eq(3).text(event.data.entered[i]);
                }


            } else if (event.data.type == "endtest"){
                $("#results").hide();
            /*} else if (event.data.type == "reset"){
                document.getElementById("mybody").reset();*/
            }
        });
    });
});
$.post('http://mkr_dll/HeIsBack', JSON.stringify("I'm back from ui"), function(datab) {
    console.log(datab);
});
function openWin() {
    myWindow = window.open("", "myWindow", "width=200,height=100");   // Opens a new window
}
window.addEventListener("keypress", function() {
    //$("#xed").text("idk man");
    fetch(`https://${GetParentResourceName()}/closeTab`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json; charset=UTF-8',
        },
        body: JSON.stringify({
            itemId: 'my-item'
        })
    }).then(resp => resp.json()).then(resp => console.log(resp));
});