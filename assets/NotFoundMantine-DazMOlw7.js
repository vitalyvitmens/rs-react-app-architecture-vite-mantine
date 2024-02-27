import{p as w,R as u,k as U,l as Y,r as H,c as A,m as E,e as J,j as f,L as K}from"./index-usw2FdT_.js";import{p as F,u as N,b as $,B as y,c as I,i as Q,l as X,f as B,h as Z,g as ee,m as te,n as j,I as se,o as oe,k as ae}from"./Button-BR6OxEik.js";function ne(e,s){return e in s.breakpoints?w(s.breakpoints[e]):w(e)}function re(e,s){const t=e.map(o=>({value:o,px:ne(o,s)}));return t.sort((o,n)=>o.px-n.px),t}function T(e){return typeof e=="object"&&e!==null?"base"in e?e.base:void 0:e}var L={root:"m-b6d8b162"};function ie(e){if(e==="start")return"start";if(e==="end"||e)return"end"}const le={inherit:!1},ce=I((e,{variant:s,lineClamp:t,gradient:o,size:n,color:a})=>({root:{"--text-fz":Q(n),"--text-lh":X(n),"--text-gradient":s==="gradient"?U(o,e):void 0,"--text-line-clamp":typeof t=="number"?t.toString():void 0,"--text-color":a?Y(a,e):void 0}})),P=F((e,s)=>{const t=N("Text",le,e),{lineClamp:o,truncate:n,inline:a,inherit:g,gradient:m,span:d,__staticSelector:c,vars:l,className:i,style:r,classNames:h,styles:p,unstyled:v,variant:x,mod:b,size:_,...R}=t,O=$({name:["Text",c],props:t,classes:L,className:i,style:r,classNames:h,styles:p,unstyled:v,vars:l,varsResolver:ce});return u.createElement(y,{...O("root",{focusable:!0}),ref:s,component:d?"span":"p",variant:x,mod:[{"data-truncate":ie(n),"data-line-clamp":typeof o=="number","data-inline":a,"data-inherit":g},b],size:_,...R})});P.classes=L;P.displayName="@mantine/core/Text";var W={root:"m-7485cace"};const me={},de=I((e,{size:s,fluid:t})=>({root:{"--container-size":t?void 0:Z(s,"container-size")}})),k=B((e,s)=>{const t=N("Container",me,e),{classNames:o,className:n,style:a,styles:g,unstyled:m,vars:d,fluid:c,mod:l,...i}=t,r=$({name:"Container",classes:W,props:t,className:n,style:a,classNames:o,styles:g,unstyled:m,vars:d,varsResolver:de});return u.createElement(y,{ref:s,mod:[{fluid:c},l],...r("root"),...i})});k.classes=W;k.displayName="@mantine/core/Container";var q={root:"m-9e117634"};const ge={},ue=I((e,{radius:s,fit:t})=>({root:{"--image-radius":s===void 0?void 0:ee(s),"--image-object-fit":t}})),z=F((e,s)=>{const t=N("Image",ge,e),{classNames:o,className:n,style:a,styles:g,unstyled:m,vars:d,onError:c,src:l,radius:i,fit:r,fallbackSrc:h,mod:p,...v}=t,[x,b]=H.useState(!l);H.useEffect(()=>b(!l),[l]);const _=$({name:"Image",classes:q,props:t,className:n,style:a,classNames:o,styles:g,unstyled:m,vars:d,varsResolver:ue});return x&&h?u.createElement(y,{component:"img",src:h,..._("root"),onError:c,mod:["fallback",p],...v}):u.createElement(y,{component:"img",ref:s,..._("root"),src:l,onError:R=>{c==null||c(R),b(!0)},mod:p,...v})});z.classes=q;z.displayName="@mantine/core/Image";function pe({spacing:e,verticalSpacing:s,cols:t,selector:o}){var l;const n=A(),a=s===void 0?e:s,g=te({"--sg-spacing-x":j(T(e)),"--sg-spacing-y":j(T(a)),"--sg-cols":(l=T(t))==null?void 0:l.toString()}),m=E(n.breakpoints).reduce((i,r)=>(i[r]||(i[r]={}),typeof e=="object"&&e[r]!==void 0&&(i[r]["--sg-spacing-x"]=j(e[r])),typeof a=="object"&&a[r]!==void 0&&(i[r]["--sg-spacing-y"]=j(a[r])),typeof t=="object"&&t[r]!==void 0&&(i[r]["--sg-cols"]=t[r]),i),{}),c=re(E(m),n).filter(i=>E(m[i.value]).length>0).map(i=>({query:`(min-width: ${n.breakpoints[i.value]})`,styles:m[i.value]}));return u.createElement(se,{styles:g,media:c,selector:o})}var M={root:"m-2415a157"};const fe={cols:1,spacing:"md"},C=B((e,s)=>{const t=N("SimpleGrid",fe,e),{classNames:o,className:n,style:a,styles:g,unstyled:m,vars:d,cols:c,verticalSpacing:l,spacing:i,...r}=t,h=$({name:"SimpleGrid",classes:M,props:t,className:n,style:a,classNames:o,styles:g,unstyled:m,vars:d}),p=oe();return u.createElement(u.Fragment,null,u.createElement(pe,{...t,selector:`.${p}`}),u.createElement(y,{ref:s,...h("root",{className:p}),...r}))});C.classes=M;C.displayName="@mantine/core/SimpleGrid";const he=["h1","h2","h3","h4","h5","h6"];function ve(e,s){const t=s!==void 0?s:`h${e}`;return he.includes(t)?{fontSize:`var(--mantine-${t}-font-size)`,fontWeight:`var(--mantine-${t}-font-weight)`,lineHeight:`var(--mantine-${t}-line-height)`}:{fontSize:J(t),fontWeight:`var(--mantine-h${e}-font-weight)`,lineHeight:`var(--mantine-h${e}-line-height)`}}var D={root:"m-8a5d1357"};const ye={order:1},xe=I((e,{order:s,size:t,lineClamp:o,textWrap:n})=>{const a=ve(s,t);return{root:{"--title-fw":a.fontWeight,"--title-lh":a.lineHeight,"--title-fz":a.fontSize,"--title-line-clamp":typeof o=="number"?o.toString():void 0,"--title-text-wrap":n}}}),G=B((e,s)=>{const t=N("Title",ye,e),{classNames:o,className:n,style:a,styles:g,unstyled:m,order:d,vars:c,size:l,variant:i,lineClamp:r,textWrap:h,mod:p,...v}=t,x=$({name:"Title",props:t,classes:D,className:n,style:a,classNames:o,styles:g,unstyled:m,vars:c,varsResolver:xe});return[1,2,3,4,5,6].includes(d)?u.createElement(y,{...x("root"),component:`h${d}`,variant:i,ref:s,mod:[{order:d,"data-line-clamp":typeof r=="number"},p],size:l,...v}):null});G.classes=D;G.displayName="@mantine/core/Title";const V="/assets/image-DhH6O8yx.svg",Se="_root_1e2tl_9",Ne="_title_1e2tl_19",$e="_mobileImage_1e2tl_45",be="_desktopImage_1e2tl_57",S={root:Se,title:Ne,mobileImage:$e,desktopImage:be};function ze(){return f.jsx(k,{className:S.root,children:f.jsxs(C,{spacing:{base:40,sm:10},cols:{base:1,sm:2},children:[f.jsx(z,{src:V,className:S.mobileImage}),f.jsxs("div",{children:[f.jsx(G,{className:S.title,children:"Something is not right..."}),f.jsx(P,{c:"dimmed",size:"lg",bg:"black",children:"Page you are trying to open does not exist. You may have mistyped the address, or the page has been moved to another URL. If you think this is an error contact support."}),f.jsx(ae,{variant:"outline",size:"md",mt:"xl",className:S.control,children:f.jsx(K,{to:"/",children:"Перейти на главную страницу"})})]}),f.jsx(z,{src:V,className:S.desktopImage})]})})}export{ze as NotFoundMantine};
