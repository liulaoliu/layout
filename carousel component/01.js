// 获取图片
// 获取按钮
// 获取圆点

let carouselItem=document.getElementsByClassName("carousel_item");
let btnLeft=document.getElementsByClassName("left")[0];
let btnRight=document.getElementsByClassName("right")[0];
let pointsItem=document.getElementsByClassName("points_item");

let index=0;//初始化一个索引值，用于切换图片。
//两个按钮的切换效果开始 start
let clearActive=function(){//提升图片显示层级后的清理器。
    for(let i=0;i<carouselItem.length;i++){
        carouselItem[i].className="carousel_item";
        pointsItem[i].className="points_item";
    }
};

let goRight=function(){//向右切换图片的函数
    clearActive();//先清理
    if(index>3){
        index=0;
    }
    else{index++}
    carouselItem[index].className="carousel_item active";
    pointsItem[index].className="points_item active";
}

let goLeft=function(){//向左切换图片的函数
    clearActive();//先清理
    if(index===0){
        index=4;
    }
    else{index--}
    carouselItem[index].className="carousel_item active";
    pointsItem[index].className="points_item active";
}


btnRight.addEventListener('click',goRight);
btnLeft.addEventListener('click',goLeft);

//两个按钮的切换效果结束 end

//圆点的点击效果开始 start
for(let i=0;i<pointsItem.length;i++){
    pointsItem[i].addEventListener("click",function(){
        index=pointsItem[i].getAttribute('data-index')-1;
        goRight();
    })
}
//圆点的点击效果结束 end
//自动向右播放开始 start
let goRightAuto=goRight;


setInterval(function(){
    goRightAuto();
},3000)
//自动向右播放结束 end

let carousel_panel=document.getElementsByClassName("carousel_container block_mediate type_area")[0];

carousel_panel.addEventListener("mouseenter",function(){
    goRightAuto=function(){

    }
})
carousel_panel.addEventListener("mouseleave",function(){
    goRightAuto=goRight;
})



