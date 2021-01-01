function openPopup(){

    var win = window.open('', 'win', 'width=1, height=1, scrollbars=yes, resizable=yes');

    

if (win == null || typeof(win) == "undefined" || (win == null && win.outerWidth == 0) || (win != null && win.outerHeight == 0) || win.test == "undefined")

{

alert("팝업 차단 기능이 설정되어있습니다\n\n차단 기능을 해제(팝업허용) 한 후 다시 이용해 주십시오.\n\n만약 팝업 차단 기능을 해제하지 않으면\n정상적인 알림이 이루어지지 않습니다.");

  

if(win){

    win.close();

}

return;

}

else if (win)

{

    if (win.innerWidth === 0)

    {

        alert("팝업 차단 기능이 설정되어있습니다\n\n차단 기능을 해제(팝업허용) 한 후 다시 이용해 주십시오.\n\n만약 팝업 차단 기능을 해제하지 않으면\n정상적인 알림이 이루어지지 않습니다.");

}

}

else

{

    return;

}

if(win){    // 팝업창이 떠있다면 close();

    win.close();

}

}    // 함수 끝

  

window.onload = function(){      // 페이지 로딩 후 즉시 함수 실행(window.onload)

    openPopup()

}