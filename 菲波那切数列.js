var f=function(n){
  if(n>=3){
    f(n)=f(n-1)+f(n-2)
  }
  f(2)=2;
  f(1)=1;
  console.log('f'+n+'='+f(n))
}
