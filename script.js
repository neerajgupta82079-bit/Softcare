const burger=document.querySelector('.burger'),menu=document.getElementById('menu');
burger.addEventListener('click',()=>{const o=menu.classList.toggle('open');burger.setAttribute('aria-expanded',o)});
menu.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>menu.classList.remove('open')));
document.getElementById('y').textContent=new Date().getFullYear();
document.getElementById('form').addEventListener('submit',e=>{
  e.preventDefault();const f=new FormData(e.target);
  const t=`Hi Neeraj, I'm ${f.get('name')} (${f.get('phone')}).\n${f.get('msg')}`;
  window.open('https://wa.me/917701844462?text='+encodeURIComponent(t),'_blank');
});
const io=new IntersectionObserver(es=>es.forEach(en=>{if(!en.isIntersecting)return;io.unobserve(en.target);
  const el=en.target,n=+el.dataset.n,s=el.dataset.s||'';let i=0;
  const t=setInterval(()=>{i++;el.textContent=i+s;if(i>=n)clearInterval(t)},70)}),{threshold:.6});
document.querySelectorAll('[data-n]').forEach(el=>io.observe(el));
