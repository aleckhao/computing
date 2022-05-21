var num=1;
var Hanio=function(n,source,target,auxiliary){
    if(n>0){
        Hanio(n-1,source,auxiliary,target);
        console.log(num+':移动'+n+'号盘从'+source+'移动到'+target);
        num=num+1;
        Hanio(n-1,auxiliary,target,source);
    }
}

Hanio(4,'a','b','t')
