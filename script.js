document.getElementById("year").textContent=new Date().getFullYear();

const form=document.getElementById("leadForm");
form.addEventListener("submit",function(e){
  e.preventDefault();
  const name=form.name.value.trim();
  const phone=form.phone.value.trim();
  const message=form.message.value.trim();
  if(!name||!phone){alert("Пожалуйста, укажите имя и телефон.");return;}
  const text=`Здравствуйте! Новая заявка с сайта IT-CONSULTING.%0AИмя: ${encodeURIComponent(name)}%0AТелефон: ${encodeURIComponent(phone)}%0AЗадача: ${encodeURIComponent(message||"Не указана")}`;
  window.open(`https://wa.me/77022723219?text=${text}`,"_blank");
});
document.querySelector(".menu").addEventListener("click",()=>{
  const nav=document.querySelector("nav");
  nav.style.display=nav.style.display==="flex"?"none":"flex";
  nav.style.position="absolute";nav.style.top="72px";nav.style.left="0";nav.style.right="0";
  nav.style.padding="20px";nav.style.background="#07111f";nav.style.flexDirection="column";
});
