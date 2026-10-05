import{S as f,a as m,i as n}from"./assets/vendor-D3aArI0Y.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&a(s)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const c=document.querySelector(".gallery"),l=document.querySelector(".loader"),p=new f(".gallery a",{captionsData:"alt",captionDelay:250});function g(i){const r=i.map(({webformatURL:o,largeImageURL:a,tags:e,likes:t,views:s,comments:u,downloads:d})=>`
        <li class="gallery-item">
          <a class="gallery-link" href="${a}">
            <img
              class="gallery-image"
              src="${o}"
              alt="${e}"
              loading="lazy"
            />
          </a>
          <div class="info">
            <p class="info-item"><b>Likes</b> ${t}</p>
            <p class="info-item"><b>Views</b> ${s}</p>
            <p class="info-item"><b>Comments</b> ${u}</p>
            <p class="info-item"><b>Downloads</b> ${d}</p>
          </div>
        </li>
      `).join("");c.insertAdjacentHTML("beforeend",r),p.refresh()}function h(){c.innerHTML=""}function y(){l.classList.remove("is-hidden")}function b(){l.classList.add("is-hidden")}const L="57880697-d3b21ebc8cae23755f4bd4797",S="https://pixabay.com/api/";function w(i){const r={key:L,q:i,image_type:"photo",orientation:"horizontal",safesearch:!0};return m.get(S,{params:r}).then(o=>o.data)}const P=document.querySelector(".form");P.addEventListener("submit",$);function $(i){i.preventDefault();const r=i.currentTarget.elements["search-text"].value.trim();if(!r){n.warning({title:"Caution",message:"Please enter a search term!",position:"topRight"});return}h(),y(),w(r).then(o=>{if(!o.hits.length){n.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}g(o.hits)}).catch(o=>{n.error({title:"Error",message:"Something went wrong. Please try again later.",position:"topRight"})}).finally(()=>{b(),i.target.reset()})}
//# sourceMappingURL=index.js.map
