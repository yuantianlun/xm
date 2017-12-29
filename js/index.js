/*
* @Author: Administrator
* @Date:   2017-11-07 18:10:37
* @Last Modified by:   Administrator
* @Last Modified time: 2017-11-23 23:25:13
*/
window.onload=function(){
    //购物车
	let gouwu=document.getElementsByClassName('gouwu');
	let ggwwc=document.getElementsByClassName('gwc');
	gouwu[0].onmousemove=function(){
		ggwwc[0].style.height='100px';
		ggwwc[0].style.opacity='1';
	}
	gouwu[0].onmouseout=function(){
		ggwwc[0].style.height='';
		ggwwc[0].style.opacity='0';
		
	}

    //头部导航
	let slide1=document.getElementsByClassName('box2_ul')[0];
	console.log(slide1);
	let lis1=document.getElementsByClassName('box2_ul_li');
	console.log(lis1);
    let items1=document.getElementsByClassName('item1');
    console.log(items1);
    for(let i=0;i<lis1.length;i++){
    	lis1[i].onmouseover=function(){
    		items1[i].style.height="200px";
    	}
    	lis1[i].onmouseout=function(){
    		items1[i].style.height="";

    	}
    }
    //侧导航
    let slide=document.getElementsByClassName('sidebarxhz')[0];
	// console.log(slide);
	let lis=document.getElementsByClassName('sidebarwenzi');
	// console.log(lis);
    let items=document.getElementsByClassName('item');
    // console.log(items)
    for(let i=0;i<lis.length;i++){
    	lis[i].onmouseover=function(){
    		items[i].style.display="block";
    	}
    	lis[i].onmouseout=function(){
    		items[i].style.display="none";

    	}
    }
    //家电选项卡
    function jia(aa){
    let jddhz=document.getElementsByClassName("jisdian")[aa];
    console.log(jddhz);
	let lis2=jddhz.getElementsByClassName('jd-right1-a');
	console.log(lis2);
    let items2=jddhz.getElementsByClassName('shangpinlan');
    console.log(items2);
    for(let i=0;i<lis2.length;i++){
    	lis2[i].onmouseover=function(){
    		for(let j=0;j<lis2.length;j++){
    		 	lis2[j].style.color="";
                lis2[j].style.borderBottom="";
    			items2[j].style.display="none";

    		}
    		lis2[i].style.color="#ff6700"
            lis2[i].style.borderBottom="2px solid #ff6700"
    		items2[i].style.display="block";
    		
    	}
    	
    }
    }

    var jiadian=new jia(0);
    var zhineng=new jia(1);
    var dapei=new jia(2);
    var peijian=new jia(3);
    var zhoubian=new jia(4);
   



    
    //banner轮播图
    let imgBox=document.getElementsByClassName("imgBox")[0];
    //console.log(imgBox);
    let imgs=document.getElementsByClassName("lbImg");
    //console.log(imgs);
    let dianhz=document.getElementsByClassName("dianhz")[0];
    let dian=dianhz.getElementsByTagName("li");
    let bsright=document.getElementsByClassName("bsright")[0];
    let bsleft=document.getElementsByClassName("bsleft")[0];
    let banner=document.getElementsByClassName("banner")[0];
    let t;
    t=setInterval(fn,2000);
    let num=0;
    
    bsleft.onclick=fn;
    bsright.onclick=fn1;
    function fn(){
    	num++;
    	if(num==imgs.length){
    		num=0;
    	}
    	for(let i=0;i<imgs.length;i++){
    		imgs[i].style.display="none";
    		dian[i].style.background="";
    	}
    	imgs[num].style.display="block";
    	dian[num].style.background="#000";
    }
    banner.onmouseover=function(){
    	clearInterval(t);
    }
    banner.onmouseout=function(){
    	t=setInterval(fn,2000);
    }
    function fn1(){
    	num--;
    	if(num==-1){
    		num=imgs.length-1;
    	}
    	for(let i=0;i<imgs.length;i++){
    		imgs[i].style.display="none";
    		dian[i].style.background="";
    	}
    	imgs[num].style.display="block";
    	dian[num].style.background="#000";
    }
    banner.onmouseover=function(){
    	clearInterval(t);
    }
    banner.onmouseout=function(){
    	t=setInterval(fn,2000);
    }
    for(let i=0;i<dian.length;i++){
   		dian[i].onclick=function(){
   			dian[i].style.background="#000";
   			dian[num].style.background="";
   			imgs[i].style.display="block";
   			imgs[num].style.display="none";
   			num=i;
   		}
    }
    let button=document.getElementsByTagName("button");
    let btnR=button[0];
    let btnL=button[1];
    console.log(btnR,btnL);
    let danpin=document.getElementsByClassName("danpin")[0];

    let count=danpin.childElementCount;
    let childw=danpin.children[0].offsetwidth+parseInt(getComputedStyle(danpin.children[0],null).marginRight);
    danpin.style.width=`${count*childw}px`;
    let num2=0;
    btnR.onclick=function(){
        if(num2==1){
            btnR.className="dis";
            btnL.className="";
            return;
        }
        num2++;
        btnL.className="";
        danpin.style.transform=`translateX(${-1240*num2}px)`;
    }
    btnL.onclick=function(){
        if(num2==0){
            btnR.className="";
            btnL.className="dis";
            return;
        }
        num2--;
        btnR.className="";
        danpin.style.transform=`translateX(${-1240*num2}px)`;
    }



     







    //  明星单品
    let button1=document.getElementsByTagName("button");
    console.log(button1);
    let btnR1=button1[0];
    let btnL1=button1[1];
    // console.log(btnR,btnL);
    let danpin1 = document.getElementsByClassName("danpin")[0];
    let count2 = danpin1.childElementCount;
    // console.log(count);
    let childw1 = danpin1.children[0].offsetWidth + parseInt(getComputedStyle(danpin.children[0], null).marginRight);
    //console.log(childw);
    danpin1.style.width = `${count * childw1}px`;
    console.log(count2,childw1);
    // console.log(danpin.style.width);
    let num1 = 0;
    btnR1.onclick = function () {
        if (num1 == 1) {
            btnR1.className = "dis";
            btnL1.className = "";
            return;
        }
        num1++;
        btnL.className = "";
        danpin1.style.transform = `translateX(${-1240 * num1}px)`;
        
        console.log( `(${-1240 * num1})`);

    }
    btnL1.onclick = function () {
        if (num1 == 0) {
            btnL1.className = "dis";
            btnR1.className = "";
            return;
        }
        num1--;
        btnR1.className = "";
        danpin1.style.transform = `translateX(${-1240 * num1}px)`;
    }



function neirong(num){
        let neironglb=document.getElementsByClassName("nr-content-main1");
        let biaoyu=neironglb[num].getElementsByClassName("nr-twxhz");
        let widths=neironglb[num].offsetWidth;
        

        let back=document.getElementsByClassName("nr-content-left")[num];
        let forward=document.getElementsByClassName("nr-content-right")[num];
        
        let neirongbtn=document.getElementsByClassName("nr-main-bth");
        let btnlist1=neirongbtn[num].getElementsByTagName("li");

        let flag=true;
        let now=next=0;
        ///let time2=setInterval(fn4,1000);
        function fn3(){
            next++;
            if(next==biaoyu.length){
                next=0;
            }
            biaoyu[next].style.left=`${widths}px`;
            animate(biaoyu[now],{left:-widths});
            animate(biaoyu[next],{left:0},btnfn);
            now=next;

        }
        function fn4(){
            next--;
            if(next==-1){
                next=biaoyu.length-1;
            }
            biaoyu[next].style.left=`-${widths}px`;
            animate(biaoyu[now],{left:widths});
            animate(biaoyu[next],{left:0},btnfn);
            now=next;

        }
        back.onclick=function(){
            if(flag){
                fn4();
                flag=false;
            }
            
        }
        forward.onclick=function(){
            if(flag){
                fn3();
                flag=false;
            }

        }

        function btnfn(){
            for(let i=0;i<btnlist1.length;i++){
                btnlist1[i].style.background="";
            }
            btnlist1[now].style.background="red";

            flag=true;
        }


        for(let i=0;i<btnlist1.length;i++){
            btnlist1[i].onclick=function(){
                if(i==now){return}
                else if(i<now){
                    animate(biaoyu[now],{left:widths});
                    animate(biaoyu[i],{left:0});
                    for(let j=0;j<btnlist1.length;j++){
                        btnlist1[j].style.background="";
                    }
                    btnlist1[i].style.background="red";
                }
                else if(i>now){
                    animate(biaoyu[now],{left:-widths});
                    animate(biaoyu[i],{left:0});
                    for(let j=0;j<btnlist1.length;j++){
                        btnlist1[j].style.background="";
                    }
                    btnlist1[i].style.background="red";
                }
                now=next=i;
            }
        }
    }
    var nei7=new neirong(0);
    var nei8=new neirong(1);
    var nei9=new neirong(2);
    var nei10=new neirong(3);

}