
    var duration = 50
    $('.actions').on('click', 'button', function (e) {
        let $button = $(e.currentTarget) // button
        let speed = $button.attr('data-speed')
        $button.addClass('active')
            .siblings('.active').removeClass('active')
        switch (speed) {
            case 'slow':
                duration = 120
                break
            case 'normal':
                duration = 50
                break
            case 'fast':
                duration = 5
                break
        }
    })

    function writeCode(prefix, code, fn) {
        let container = document.querySelector('#code')
        let styleTag = document.querySelector('#styleTag')
        let codeview = document.querySelector('#code-warapper')
        let n = 0
        let id

        id = setTimeout(function run() {
            n += 1
            container.innerHTML = Prism.highlight(prefix+code.substring(0,n),Prism.languages.css)
            styleTag.innerHTML = code.substring(0, n)
            window.scrollTo(0, codeview.scrollHeight);
            if (n < code.length) {
                id = setTimeout(run, duration)
            } else {
                fn && fn.call()
            }
        }, duration)
    }

    let code = `
  /* 来画个画吧，
   *先准备个画布
   */
     .view-wapper{
    background-color: #fff827;
}
 .pikachu-wrapper{
     width: 100%;
     height: 178px;
     position: relative;
     border-color: #fff827;
 }
 
 .nose{
     width: 0px;
     height: 0px;
     border:11px solid  ;
     border-color: black  transparent transparent ;
     border-radius: 50%;
     border-width: 10px 13px;
     position: absolute;
     left: 50%;
     top:28px;
     transform: translateX(-50%);
 }
 .eye{
     width: 52px;
     height: 52px;
     border-radius: 50%;
     background: #2e2e2e;
     position: absolute;
     border:2px solid black;
 }
 .eye::before{
     content: '';
     display: block;
     width: 24px;
     height: 24px;
     border-radius: 50%;
     position: absolute;
     left: 5px;
     top:-1px;
     border: 2px solid black;
     background: white;
 }
 .eye.left{
     right: 50%;
     margin-right: 90px;

 }
.eye.right{
     left: 50%;
     margin-left: 90px;

 }
.face{
    width: 68px;
    height: 68px;
    background: #fcod1c;
    border:2px solid black;
    border-radius: 50px;
    position: absolute;
    top: 85px;
    background-color: red;
}
.face.left{
    right: 50%;
    margin-right: 118px;
}
.face.right{
    left: 50%;
    margin-left: 118px;
}
.upperLip{
    height: 24px;
    width: 80px;
    border: 3px solid black;
    position: absolute;
    top: 49px;
    background: #fff827;
}
.upperLip.left{
    right: 50%;
    border-bottom-left-radius: 40px 25px;
    border-top: none;
    border-right: none;
    transform: rotate(-20deg);
}
.upperLip.right{
    left: 50%;
    border-bottom-right-radius: 40px 25px;
    border-top: none;
    border-left: none;
    transform: rotate(20deg);
}
.lowerLip{
    height: 3500px;
    width: 300px;
    background: #990513;
    border-radius: 200px/2000px;
    border: 4px solid black;
    position: absolute;
    bottom: 0;
    overflow: hidden;
}
.lowerLip::after{
    content: '';
    position: absolute;
    bottom: -5px;
    width: 100px;
    height: 100px;
    background: #FC4A62;
    left: 50%;
    margin-left: -50px;
    border-radius: 48px;
}
.lowerLip-wrapper{
    bottom: -1px;
    position: absolute;
    left: 50%;
    margin-left: -150px;
     height: 120px;
    overflow: hidden;
    width: 300px;
    `
    writeCode('',code)

