/* tool-meld · Elucenia · https://github.com/Elucenia/tool-meld
   Copyright (c) 2026 Elucenia · Felipe Guedes (fgxdev.com). Licensed under the Apache License 2.0: keep this notice and the NOTICE file, and mark your changes.
   Standalone integration. Package metadata and rights: README.md. */
(function(root){'use strict';
function freeze(value){if(value&&typeof value==='object'){for(const item of Object.values(value))freeze(item);Object.freeze(value);}return value;}
const TOOL=freeze({"id":"meld","title":"MELD-Na e MELD 3.0","fields":[["cr","Creatinina","num",{"min":0.1,"max":20,"step":0.01,"unit":"mg/dL","ph":"1,2"}],["bili","Bilirrubina total","num",{"min":0.1,"max":80,"step":0.1,"unit":"mg/dL","ph":"2,5"}],["inr","INR","num",{"min":0.5,"max":15,"step":0.01,"ph":"1,5"}],["na","Sódio","num",{"min":100,"max":180,"unit":"mEq/L","ph":"134"}],["dialise","Diálise 2 ou mais vezes na última semana (ou 24 h de hemodiálise contínua)?","radio",{"opts":{"0":"Não","1":"Sim"}}],["sexo","Sexo","radio",{"opts":{"F":"Feminino","M":"Masculino"}}],["alb","Albumina (para o MELD 3.0)","num",{"min":0.5,"max":6,"step":0.1,"unit":"g/dL","ph":"3,0","opt":true}]],"config":null,"reviewStatus":"needs-review","clinicalValidation":"not-performed"});
const window={};
/* Elucenia arithmetic registry. No DOM access, storage, telemetry or network requests. */
(function(root){
  'use strict';
  const CALC={fn:Object.create(null)};
  const round=(n,d=1)=>Math.round(n*Math.pow(10,d))/Math.pow(10,d);
  const yes=v=>v===true||v==='1'||v===1;
  CALC.h={
    r1:round,
    br:(n,d=1)=>round(n,d).toLocaleString('pt-BR',{minimumFractionDigits:d,maximumFractionDigits:d}),
    band:(n,bands)=>{for(const b of bands)if(n<b[0])return b[1];return bands[bands.length-1][1];},
    sum:(values,weights)=>Object.entries(weights).reduce((n,[key,w])=>n+(yes(values[key])?w:0),0),yes
  };
  CALC.def=(id,fn)=>{if(CALC.fn[id])throw Error('Duplicate calculator '+id);CALC.fn[id]=fn;};
  CALC.score=(cfg,values)=>{
    let score=0;
    for(const[name,type,weight]of cfg.fields){const v=values[name];if(type==='chk'){if(yes(v))score+=weight;}else if(type==='radio'||type==='sel'){const n=parseFloat(v);if(!Number.isNaN(n))score+=n;}}
    score=round(score,2);let band=cfg.bands[0];for(const b of cfg.bands)if(score>=b[0])band=b;
    return{main:[String(score).replace('.',','),cfg.unit||(Math.abs(score)===1?'ponto':'pontos')],label:cfg.label,level:band[1],verdict:band[2],note:band[3]||'',raw:{score}};
  };
  CALC.run=(id,values,cfg)=>{if(cfg&&cfg.bands)return CALC.score(cfg,values);if(!CALC.fn[id])return{error:'Calculadora indisponível.'};return CALC.fn[id](values);};
  root.CALC=CALC;if(typeof module!=='undefined')module.exports=CALC;
})(typeof window!=='undefined'?window:globalThis);

(function(a){'use strict';
var i=Math.log;
var t=function(a,e,o){return Math.min(o,Math.max(e,a))};
a.def("meld",function(a){var e="1"===a.dialise,o="F"===a.sexo,r=Math.max(1,a.bili),n=Math.max(1,a.inr),s=t(a.na,125,137),d=e?4:t(a.cr,1,4),l=Math.round(10*(.957*i(d)+.378*i(r)+1.12*i(n)+.643)),c=Math.min(40,Math.round(l>11?l+1.32*(137-s)-.033*l*(137-s):l)),m=null;if(null!=a.alb){var u=e?3:t(a.cr,1,3),p=t(a.alb,1.5,3.5);m=Math.min(40,Math.round((o?1.33:0)+4.56*i(r)+.82*(137-s)-.24*(137-s)*i(r)+9.09*i(n)+11.14*i(u)+1.85*(3.5-p)-1.83*(3.5-p)*i(u)+6))}var v=c<10?"1,9%":c<20?"6,0%":c<30?"19,6%":c<40?"52,6%":"71,3%",g=[["MELD original",String(Math.min(40,l))],["MELD 3.0",null!=m?String(m):"informe a albumina"]];return{main:[String(c),"pontos"],label:"MELD-Na",level:c>=20?"high":c>=10?"mid":"low",verdict:"Mortalidade estimada em 90 dias: "+v,rows:g,raw:{meld:Math.min(40,l),meldna:c,meld3:m}}});
})(window.CALC);
function calculate(input){
 if(!input||typeof input!=='object'||Array.isArray(input))return {error:'Informe um objeto com os campos da ferramenta.',code:'INVALID_INPUT'};
 const values=Object.create(null);
 for(const[name,,kind,o={}] of TOOL.fields){
  const v=Object.hasOwn(input,name)?input[name]:undefined;
  if(kind==='chk'){if(v!==undefined&&v!==null&&![true,false,1,0,'1','0'].includes(v))return {error:'Campo booleano inválido: '+name,field:name,code:'INVALID_INPUT'};values[name]=v===true||v===1||v==='1';continue;}
  const empty=v==null||(typeof v==='string'&&!v.trim());
  if(empty){if(!o.opt)return {error:'Campo obrigatório: '+name,field:name,code:'REQUIRED_FIELD'};values[name]=kind==='num'?null:'';continue;}
  if(kind==='num'){
   if(!['number','string'].includes(typeof v)||(typeof v==='string'&&!/^[+-]?(?:\d+(?:\.\d*)?|\.\d+)(?:[eE][+-]?\d+)?$/.test(v.trim()))||!Number.isFinite(Number(v)))return {error:'Número inválido: '+name,field:name,code:'INVALID_INPUT'};
   const n=Number(v);if((Number.isFinite(o.min)&&n<o.min)||(Number.isFinite(o.max)&&n>o.max))return {error:'Valor fora do intervalo: '+name,field:name,code:'OUT_OF_RANGE'};
   values[name]=n;
  }else{if(!Object.hasOwn(o.opts||{},String(v)))return {error:'Opção inválida: '+name,field:name,code:'INVALID_OPTION'};values[name]=String(v);}
 }
 try{const r=window.CALC.run(TOOL.id,values,TOOL.config);if(r.error)return {error:String(r.error).replace(/<[^>]*>/g,''),code:'FORMULA_DOMAIN'};
  if(!Array.isArray(r.main)||r.main.some(v=>typeof v==='number'&&!Number.isFinite(v))||/\b(?:NaN|Infinity)\b/.test(String(r.main[0])))return {error:'Resultado não finito ou indisponível.',code:'INVALID_RESULT'};
  return {id:TOOL.id,main:r.main,label:r.label||TOOL.title,raw:r.raw||{},clinicalValidation:'not-performed'};
 }catch{return {error:'Confira os valores e o domínio da fórmula.',code:'FORMULA_DOMAIN'};}
}
const api=Object.freeze({metadata:TOOL,calculate});if(typeof module!=='undefined'&&module.exports)module.exports=api;else root.EluceniaTool=api;
})(typeof globalThis!=='undefined'?globalThis:this);
