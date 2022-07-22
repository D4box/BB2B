// ==UserScript==
// @name		BB2B
// @version		0.1
// @description	bilibili赛事竞猜辅助插件
// @icon        data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAAAXNSR0IArs4c6QAACHNJREFUWAntWEtvU0cUPn4ljp3YTuLIwXk0Cogk1BIJm/Ioyy6qdtMuskFdICF2VSsh8SMqVSpih5BYVGyyaDetumBJIVuQUoiAJiEmJQ9I7Dh++9r9vmPPzbUTHqGqxIJRbubemTPnfHOeMxb50P6bBlzvuvzmzZvduVzui1qt9hl4DOOJ4z1Ofi6X6x90fJbxfisQCPx+7ty5Lc4dtB0Y4LVr174CkG8h6Cwe71sKrIDuNsBevXjx4q9vuUbJ3hrg9evXz1Sr1R8A7vRBBLTSAuRdt9t9+cKFC3da5/b7fiPAmZkZTyqV+hHAvtuPwbuOAeiVSCRyaXp62nodj9cCvHHjRqRcLs8AHP1sT+vp6ZkfGBhY7ezsDHs8nggI+lzikprIRq1WTe3s7KSTyWT/5ubm+J7FGKB/+ny+6fPnz6f2m+fYKwE2wN0FuInWxcPDw7N4Ypgb9fv9EggGxefxisfrEaIrW2WplCqSzWWlWCyK1+tdePr06RqeU628APIhQJ5+Fch9ATbM+ker5oLBYPL48eNpCEx0d3dLV1eXtLW1qUwIapKNtcKHAOEiktnOiFW15u7fvx/OZrNDTmJqEub+fD9zu52E5r3hc01m7evruzc1NRWMdHcnBgcHJRqN2uC4Do5Pk+nDdzZ+U8P9/f0SH4hzQ4nJyakgeSlB4x8VQZnOMfPevG2MMloty/rTELDv7e29l0gkPsYufaFwWNwNIAQAJaHVFIy+cQB/1VqVn9rAT7VJjW5vbwt8s/zgwYO/NjY2Jg0Ne/jxp63RvSePMZU4F3V0dCSPHTs2HA6FfNRGaisllUoFAqvaVyi8Wn/HWqlaVbGsCgDWhHOk5S44F+gMyGB8UBBUvomJiWEk+qTT3A3ZZ5zymzTYSMK/OAk+OXlyrrenJwGgsrS0JM+erUCYJYhuBcF3Rq7Aqm7+a2lqdrdLEAjQvFvGx8clHo/LyxcvZTuzPTc7O5twLgH9185k3sQRJmCFsNtAfGA2GAgkQqGQmrBQKMDpC6oNCqapPW4PTSMel0dpOG4aTaqPVZNyqSzQGM2r60MhDbDE0NDQrKFn34rBBsjainmWL7t9NPJRDJGrwcBoRfRKPleQfD4vpVJJH2qyWCiqRgmGpmTkcjMlgCJdUZ8iAsmlPBhEHYGAdPg7ZHBgMGYLrL+cbWDRL9sH4QtfYsT+RsTNw+fGA8GAEtLE/bF+KRVL6ls+n1cj1+f1yfrGuiAZKx0Bh0JhmHJMmIqoYbfHrTmyzdem2uZGCZy8kStHYaF5BI9J5t4Glp/J0AaE96a0cujQoVVobby9rd1OIdG+Pk3t2Vy+YU7FJGCo0almh3bol9mdrE5WEdGsLQyacFdIon1RHacWccpR34zFYqsOgJwnlj0Am5InUgrLl/oQV9B8yeSyINFqZFILzsZv0jAYGLlP/n7inFazh5GiTpw4oUGi2Qn+ynXIEOEmYhEbi1OKnuUMIXYY8cJ8ppGhVbGgnZqtUc4Bk9ZLgnM2jWzGC+fhezQ1361KPT8yNXGNBwDd9TruXG5jsQGC2B4kJXYGe5K7Sypg5oUAmoljNGWlXJES/I3fDAz6Ypu/TWqIWAYJ4pdstDF/cheavF31GTU90g73AEtB1m5zYrEBQijGd5nynUlXkzIAYBa7L+uu6T8EiPwohw+PytramuZHYiqDprOrU44eHePe5NGjR5pa1F2AQfmCDnXZ1jxY7woGDbEYuHaawcBzM8gewDYqEFaBNiz4VJl9wyycpxY7kYIYOKFwpH6SwTj32N7ejlrdK9HeXq3FpDeNVqiCXw1VhnxZBhFUL8x8o7exOAHyDmG3Yr6YoglLYEItlskQj7NxrADgpHNqnybXHIhxvtcb1Anw3ACjvIq15EueyJmt50Ebi21iMEk6hWeymXRXuEu1ZkFbPkQ0mwFCf6IQaoEOv9tQgzGWze6o/zIvUts0N+s3FhGhriGvEjaINJXeXa9vy+bbCfAWBr8xE+vr6/04xcDXIAA+x7LG4q+SGkQUwIcaMcA5xcTNakNT0yfZMzF7waeG6FAzAyTBU/uUZeSyx4aIRZttYpS03zDC25e2TCYzDgYL9UhleqgoUCAxJArKANvtRasNI5maY3Cw0dQe5Eh/hx91uaQg8yiHlEFZNlNg4DXVfNsAG/fW22aC/crKyloOxV3Pc/gmsUnIBGSeXT+rK5j+V0C14QFB0xEAuZBSzCG3jM1y4zw4UAZlOdpt5x3aBkgC7Piqg5CqP5XN5eaK2Ck1yHrsR4GndkCstZQpx2ivwUOCqLF+0FaRlF010OF9bGwMp+oB1RwBEhxON3NIUU33lFYMzJNNDWfCOxBo333hPzywBlHQe1jG6mmhXgV4wqEJk8tJWVxa1ApDv2JJO3LkCA+mamY9LDDRw8z0P24QB9/N+fmHWUTwkAEAcHdxFmw6sDZpkITQyGWzgD2YDS0sLCzzmE5HN35FsGwU2oWzXbQXdxScVgiKwcXqQc1ynmY2R7QCgiedSpUXFxeWneDIq1U2x/ZokIPQ4k9g3nRRx/Hr3sjIyDAOET00qwfXTE0bZAJz82Fjb4DV2ddLowKFaXE52sRdeTmdTjfdR7DuCrT3vTJx/NujQc4BxCUssEOdY4i0SZStLC46czwZs8pQqGkExcZ+9x0mBQ3NnsnsCNc+fvw4uw84XjsvGV7Ofl8NkuB1F3cwm8UvCjGkg1HmOKf2uNYAJDiatpAvLDxffb62tbXVFBCkxdqDX9y5kO1NP30gqudxal6F+cMImIg5lUBjG/C7VGYnkwaofoB05rk6c/ynleDL7/bTh+HyXv94ZECyf29/fnOC5Pt7+wNmK1BeDRu3L15wmGz3+wmYJ6RbrPPO8tXK68P3/6mBfwFbUQFv/3QxMgAAAABJRU5ErkJggg==
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

