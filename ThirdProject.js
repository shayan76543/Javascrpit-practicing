const clock=document.querySelector('.clock');
setInterval(function(){
  const now=new Date();
  clock.innerHTTML=now.toLocaleTimeString();
},1000)