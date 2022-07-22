// ==UserScript==
// @name		BB2B
// @version		0.1
// @description	bilibili赛事竞猜辅助插件
// @icon        data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgA…brPPO8tXK68P3/6mBfwFbUQFv/3QxMgAAAABJRU5ErkJggg==
// @match		http*://www.bilibili.com/v/game/match/*
// @run-at      document-end
// ==/UserScript==

(function(){
    'use strict';
})();
window.onload = function(){
    setTimeout(function(){
        if (location.href == 'https://www.bilibili.com/v/game/match/competition'){
            document.getElementsByClassName('time-contain')[0].style.cssText = 'background-color:white'
            var sshi = $(".competition-list");
            var sshititle = $(".part-title")
            for (var i = 0; i < sshi[0].children.length; i++) {
                sshi[0].children[i].style.backgroundColor = '#fff';
                sshititle[i].children[0].style.cssText = 'color: black !important;';
    //            sshi[0].children[i].getElementsByClassName('competition-option-input-group')[0].children[0].value = '10';
    //            sshi[0].children[i].getElementsByClassName('competition-option-input-group')[1].children[0].value = '10';
                team1 = sshi[0].children[i].getElementsByClassName('how-pay')[0].innerText.substring(5,9)
                team2 = sshi[0].children[i].getElementsByClassName('how-pay')[1].innerText.substring(5,9)
                if (sshi[0].children[i].getElementsByClassName('competition-option-content clear-fix')[0].className != 'competition-option-content clear-fix competition-option-in' && sshi[0].children[i]. getElementsByClassName('competition-option-content clear-fix')[1].className != 'competition-option-content clear-fix competition-option-in'){yt = 0}
                else{yt = 1}
                if (parseInt(team1) - parseInt(team2) >= 0.5){
                    t1c = "font-family:'xx-bin';font-size:27px;color:#222222;letter-spacing:0;line-height:24px;height:24px;width:50px;text-align:center"
                    t2c = "font-family:'xx-bin';font-size:27px;color:#f25d8e;letter-spacing:0;line-height:24px;height:24px;width:50px;text-align:center"
                    if (yt == 0){sshi[0].children[i].getElementsByClassName('competition-option-content clear-fix')[1].style.cssText = 'border: 1px solid #fb7299;border-left-width: 4px'}
                }
                else if (parseInt(team1) - parseInt(team2) <= -0.5){
                    t1c = "font-family:'xx-bin';font-size:27px;color:#f25d8e;letter-spacing:0;line-height:24px;height:24px;width:50px;text-align:center"
                    t2c = "font-family:'xx-bin';font-size:27px;color:#222222;letter-spacing:0;line-height:24px;height:24px;width:50px;text-align:center"
                    sshi[0].children[i].getElementsByClassName('competition-option-content clear-fix')[0].style.cssText = 'border: 1px solid #fb7299;border-left-width: 4px'
                    if (yt == 0){sshi[0].children[i].getElementsByClassName('competition-option-content clear-fix')[0].style.cssText = 'border: 1px solid #fb7299;border-left-width: 4px'}
                }
                else{
                    t1c = "font-family:'xx-bin';font-size:27px;color:#222222;letter-spacing:0;line-height:24px;height:24px;width:50px;text-align:center"
                    t2c = "font-family:'xx-bin';font-size:27px;color:#222222;letter-spacing:0;line-height:24px;height:24px;width:50px;text-align:center"
                }
                team1x = document.createElement('div')
                team1x.innerText = team1
                sshi[0].children[i].getElementsByClassName('competition-title')[0].insertBefore(team1x,sshi[0].children[i].getElementsByClassName('competition-title')[0].children[1]);
                sshi[0].children[i].getElementsByClassName('competition-title')[0].children[1].style.cssText = t1c;
                team2x = document.createElement('div')
                team2x.innerText = team2
                sshi[0].children[i].getElementsByClassName('competition-title')[0].insertBefore(team2x,sshi[0].children[i].getElementsByClassName('competition-title')[0].children[3]);
                sshi[0].children[i].getElementsByClassName('competition-title')[0].children[3].style.cssText = t2c;

            }
        }
    },100);
}

