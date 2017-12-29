{
    let imgs=document.querySelectorAll(".imgBox li");
    let dians=document.querySelectorAll(".dianhz li");
    let banner=document.querySelector(".guanggaohz");
    let btnr=document.querySelector(".bsright");
    let btnl=document.querySelector(".bsleft");
    console.log(btnr);
    console.log(btnl);
    dians.forEach(function (ele,index) {
        ele.onclick=function () {
            for(var i=0;i<dians.length;i++){
                dians[i].classList.remove("active1");
                imgs[i].classList.remove("active")
            }
            this.classList.add("active1");
            imgs[index].classList.add("active")
            next=index;
        }
    })
    let next=0;
    function fn(r="right") {
        if (r=="right") {
            next++;
            if (next === dians.length) {
                next = 0;
            }
        }
        if (r=="left"){
            next--;
            if (next===-1){
                next=dians.length-1;
            }
        }
        for(var i=0;i<dians.length;i++){
            dians[i].classList.remove("active1");
            imgs[i].classList.remove("active");
        }
        dians[next].classList.add("active1");
        imgs[next].classList.add("active");
    };
    let t=setInterval(fn,1000);
    banner.onmouseover=function () {
        clearInterval(t);
    }
    banner.onmouseout=function(){
        t=setInterval(fn,1000);
    }
    let flag=true;
    btnl.onclick=function () {
        if (flag) {
            flag=false;
            fn();
        }

    }
    btnr.onclick=function () {
        if (flag){
            flag=false;
            fn(r="left")
        }
    }
    imgs.forEach(function(el,index){
        el.addEventListener("transitionend",function(){
            flag=true;
        })
    })


}

// addEventListener()   添加事件的方法 tegeansitionedf
{
    let btn=document.querySelectorAll("button");
    let dan=document.querySelector(".danpin");
    let dhz=document.querySelector(".danpindhz");
    let btnnext=btn[0];
    let btnprev=btn[1];
    btnnext.onclick=function fn1(){
        this.classList.remove("dis");
        btnprev.classList.add("dis");
        dan.style.transform="translateX(-1240px)"
    }
    btnprev.onclick=function fn2() {
        this.classList.remove("dis");
        btnnext.classList.add("dis");
        dan.style.transform="translateX(0)"
    }
    let n=0;
    let st=setInterval(function () {
        n++
        if (n%2==0){
            btnnext.classList.remove("dis");
            btnprev.classList.add("dis");
            dan.style.transform="translateX(-1240px)"
        }else{
            btnprev.classList.remove("dis");
            btnnext.classList.add("dis");
            dan.style.transform="translateX(0)"
        }
    },5000)
    dhz.onmouseover=function () {
        clearInterval(st);
    }
    dhz.onmouseout=function () {
        st=setInterval(function () {
            n++
            if (n%2==0){
                btnnext.classList.remove("dis");
                btnprev.classList.add("dis");
                dan.style.transform="translateX(-1240px)"
            }else{
                btnprev.classList.remove("dis");
                btnnext.classList.add("dis");
                dan.style.transform="translateX(0)"
            }
        },5000)
    }

}

