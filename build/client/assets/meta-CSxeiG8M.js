import{r as y,j as s}from"./jsx-runtime-DexIYAB0.js";import{c as p,T as k}from"./heading-DCYoKMrb.js";import{L as j}from"./components-D1Eb6D8q.js";import{c as d}from"./config-DTNSzBEJ.js";const v="_link_4ieiq_3",$={link:v},b=["txt","png","jpg"];function f(t){const e=b.includes(t==null?void 0:t.split(".").pop());return(t==null?void 0:t.includes("://"))||(t==null?void 0:t[0])==="#"||e}const E=y.forwardRef(({rel:t,target:e,children:r,secondary:i,className:n,href:o,...u},_)=>{const m=o==null?void 0:o.includes("://"),x=t||(m?"noreferrer noopener":void 0),w=e||(m?"_blank":void 0),g={className:p($.link,n),"data-secondary":i,rel:x,href:o,target:w,ref:_,...u};return f(o)?s.jsx("a",{...g,href:o,children:r}):s.jsx(j,{unstable_viewTransition:!0,prefetch:"intent",...g,to:o,children:r})}),L="_footer_if18v_3",N="_link_if18v_31",T="_date_if18v_39",a={footer:L,link:N,date:T},z=({className:t})=>s.jsx("footer",{className:p(a.footer,t),children:s.jsxs(k,{size:"s",align:"center",children:[s.jsx("span",{className:a.date,children:`© ${new Date().getFullYear()} ${d.name}.`}),s.jsx(E,{secondary:!0,className:a.link,href:"/humans.txt",target:"_self",children:"Crafted by yours truly"})]})}),V="_section_1278e_3",F={section:V},C=y.forwardRef(({as:t="div",children:e,className:r,...i},n)=>s.jsx(t,{className:p(F.section,r),ref:n,...i,children:e})),{name:c,url:l,twitter:R}=d,A=`${l}/social-image.png`;function I({title:t,description:e,prefix:r=c,ogImage:i=A}){const n=[r,t].filter(Boolean).join(" | ");return[{title:n},{name:"description",content:e},{name:"author",content:c},{property:"og:image",content:i},{property:"og:image:alt",content:"Banner for the site"},{property:"og:image:width",content:"1280"},{property:"og:image:height",content:"800"},{property:"og:title",content:n},{property:"og:site_name",content:c},{property:"og:type",content:"website"},{property:"og:url",content:l},{property:"og:description",content:e},{property:"twitter:card",content:"summary_large_image"},{property:"twitter:description",content:e},{property:"twitter:title",content:n},{property:"twitter:site",content:l},{property:"twitter:creator",content:R},{property:"twitter:image",content:i}]}export{z as F,E as L,C as S,I as b};
