import{S as P,a as v,i as c}from"./assets/vendor-CWo9T4oQ.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function n(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(e){if(e.ep)return;e.ep=!0;const r=n(e);fetch(e.href,r)}})();const u=document.querySelector(".gallery"),f=document.querySelector(".loader"),m=document.querySelector(".load-more"),g=document.querySelector(".end-message"),B=new P(".gallery a",{captionsData:"alt",captionDelay:250});function h(t){const o=t.map(({webformatURL:n,largeImageURL:i,tags:e,likes:r,views:a,comments:E,downloads:M})=>`
        <li class="gallery-item">
          <a class="gallery-link" href="${i}">
            <img
              class="gallery-image"
              src="${n}"
              alt="${e}"
              loading="lazy"
            />
          </a>
          <div class="info">
            <p class="info-item"><b>Likes</b> ${r}</p>
            <p class="info-item"><b>Views</b> ${a}</p>
            <p class="info-item"><b>Comments</b> ${E}</p>
            <p class="info-item"><b>Downloads</b> ${M}</p>
          </div>
        </li>
      `).join("");u.insertAdjacentHTML("beforeend",o),B.refresh()}function $(){u.innerHTML=""}function y(){f.classList.remove("is-hidden")}function p(){f.classList.add("is-hidden")}function L(){m.classList.remove("is-hidden")}function d(){m.classList.add("is-hidden")}function O(){g.classList.remove("is-hidden")}function b(){g.classList.add("is-hidden")}const R="57880697-d3b21ebc8cae23755f4bd4797",T="https://pixabay.com/api/";async function w(t,o){const n={key:R,q:t,image_type:"photo",orientation:"horizontal",safesearch:!0,page:o,per_page:15};return(await v.get(T,{params:n})).data}const x=document.querySelector(".form"),A=document.querySelector(".load-more"),C=document.querySelector(".gallery"),H=15;let l="",s=1;x.addEventListener("submit",_);A.addEventListener("click",D);async function _(t){t.preventDefault();const o=t.currentTarget.elements["search-text"].value.trim();if(!o){c.warning({title:"Caution",message:"Please enter a search term!",position:"topRight"});return}l=o,s=1,$(),d(),b(),y();try{const n=await w(l,s);if(!n.hits.length){c.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}h(n.hits),S(n.totalHits)}catch{q()}finally{p(),t.currentTarget.reset()}}async function D(){s+=1,d(),y();try{const t=await w(l,s);h(t.hits),S(t.totalHits),G()}catch{s-=1,q(),L()}finally{p()}}function S(t){if(s*H>=t){d(),O();return}b(),L()}function G(){const t=C.querySelector(".gallery-item");if(!t)return;const o=t.getBoundingClientRect().height;window.scrollBy({top:o*2,behavior:"smooth"})}function q(){c.error({title:"Error",message:"Something went wrong. Please try again later.",position:"topRight"})}
//# sourceMappingURL=index.js.map
