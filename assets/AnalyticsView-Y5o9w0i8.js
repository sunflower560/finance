import{u as U}from"./index-DILutAZZ.js";import{A as q,B as H,_ as z,d as I,l as B,r as S,c as h,C as L,i as b,o as g,b as F,e as s,D as P,a as O,w as a,g as p,n as d,u as o,h as R,F as G,E as W,k as j,m as Y,j as w,t as l,q as N,f as J}from"./index-BPRzL7i-.js";import{H as K}from"./HighChartExpensesMonth-BLnhTN8v.js";import{_ as Q}from"./Goals.vue_vue_type_style_index_0_lang-BPgUIJo0.js";var X=q();const Z=H(X),ee=I({props:{expenses:{type:Array,required:!0},amount:{type:Number,required:!0}},setup(v){const e=new Date().getFullYear(),m=B(),f=r=>new Intl.NumberFormat("ru-RU").format(r),C=()=>{if(m.getIcon==="₽")return"Рубль";if(m.getIcon==="$")return"Доллар";if(m.getIcon==="Br")return"Бел.рубль"},c=["#4caf50","#ff9800","#f44336","#2196f3","#9c27b0","#ffc107","#8bc34a","#00bcd4","#e91e63","#673ab7","#795548","#d32f00","#22cbff","#ff9822","#ff2222","#27d70d","#00789b","#860494","#9b0214","#ff60b7","#958dff","#0035bb","#28b900","#b46c00","#adff84","#fc6464"],_=S(v.amount),E=r=>{_.value=r.series[0].data.filter(i=>i.visible).reduce((i,u)=>i+u.y,0),r.options.chart.custom.label.attr({text:`Сумма<br/><strong>${f(_.value)}</strong>`})},A=h(()=>({chart:{type:"pie",custom:{},events:{render(){const r=this,i=r.series[0];let u=r.options.chart.custom.label;u||(u=r.options.chart.custom.label=r.renderer.label(`Сумма<br/><strong>${f(_.value)}</strong>`).css({color:"#000",textAnchor:"middle"}).add());const n=i.center[0]+r.plotLeft,t=i.center[1]+r.plotTop-u.attr("height")/2;u.attr({x:n,y:t}),u.css({fontSize:`${i.center[2]/12}px`})},redraw(){E(this)}}},title:{text:`Расходы ${e}`},credits:{enabled:!1},accessibility:{enabled:!1},subtitle:{text:`Формат: ${C()}`},tooltip:{valueSuffix:`${m.getIcon}`},legend:{layout:"horizontal",align:"center",verticalAlign:"bottom",itemMarginBottom:5,maxHeight:150,symbolHeight:10,navigation:{activeColor:"#3E576F",animation:!0,arrowSize:12,inactiveColor:"#CCC",style:{fontWeight:"bold",color:"#333",fontSize:"12px"}},symbolPadding:5,borderWidth:1,backgroundColor:"#FFFFFF",title:{text:"Категории"}},plotOptions:{series:{allowPointSelect:!1,cursor:"pointer",borderRadius:8,dataLabels:[{enabled:!1,distance:20,format:"{point.name}"},{enabled:!0,distance:-18,format:"{point.percentage:.0f}%",style:{fontSize:"0.65em"}}],showInLegend:!0}},series:[{type:"pie",name:"Расходы",colorByPoint:!0,innerSize:"75%",data:v.expenses.map((r,i)=>({...r,color:c[i%c.length]}))}]}));return L(()=>v.amount,r=>{r>0&&P(()=>{const i=Z.charts.find(u=>u.renderTo.id==="container");if(i){let u=i.options.chart.custom.label;u&&u.attr({text:`Сумма<br/><strong>${f(r)}</strong>`})}})},{immediate:!0}),{chartOptions:A}}});function te(v,e,m,f,C,c){const _=b("highcharts");return g(),F("div",null,[s(_,{id:"container",options:v.chartOptions},null,8,["options"])])}const ne=z(ee,[["render",te]]),oe={class:"form-add_goal"},se=I({__name:"AddGoalForm",setup(v){const e=S(!1),m=U(),f=m.loading,C=S(),c=O({name:"",targetAmount:"",deadline:null}),_=h(()=>({name:{required:!0,trigger:"blur",message:"Введите название"},targetAmount:{required:!0,trigger:"blur",message:"Введите сумму"},deadline:{required:!0,trigger:"blur",message:"Введите дату"}})),E=async()=>{c.targetAmount>0?(await m.createUserGoal(C,c),e.value=!1):W.warning("Введите коректную сумму")},A=h(()=>window.innerWidth<378?"top":"left"),r=u=>{const n=new Date;return u.getTime()<n.getTime()},i=()=>{e.value=!0};return(u,n)=>{const t=b("el-input"),k=b("el-form-item"),M=b("el-date-picker"),y=b("el-button"),$=b("el-dialog");return g(),F(G,null,[s($,{title:"Добавить цель",modelValue:e.value,"onUpdate:modelValue":n[5]||(n[5]=x=>e.value=x),width:"30%"},{footer:a(()=>[s(y,{type:"warning",onClick:n[4]||(n[4]=x=>e.value=!1)},{default:a(()=>n[6]||(n[6]=[p("Отменить")])),_:1}),s(y,{type:"primary",onClick:E},{default:a(()=>n[7]||(n[7]=[p("Сохранить")])),_:1})]),default:a(()=>[d("div",oe,[s(o(j),{"label-position":A.value,ref_key:"form",ref:C,rules:_.value,model:c,"status-icon":"",disabled:o(f),onSubmit:n[3]||(n[3]=R(()=>{},["prevent"]))},{default:a(()=>[s(k,{prop:"name",label:"Название"},{default:a(()=>[s(t,{type:"text",modelValue:c.name,"onUpdate:modelValue":n[0]||(n[0]=x=>c.name=x),modelModifiers:{number:!0},placeholder:"Введите название"},null,8,["modelValue"])]),_:1}),s(k,{prop:"targetAmount",label:"Сумма"},{default:a(()=>[s(t,{type:"number",modelValue:c.targetAmount,"onUpdate:modelValue":n[1]||(n[1]=x=>c.targetAmount=x),modelModifiers:{number:!0},placeholder:"Введите сумму"},null,8,["modelValue"])]),_:1}),s(k,{label:"Дата",prop:"deadline"},{default:a(()=>[s(M,{"disabled-date":r,modelValue:c.deadline,"onUpdate:modelValue":n[2]||(n[2]=x=>c.deadline=x),placeholder:"Выберите дату"},null,8,["modelValue"])]),_:1})]),_:1},8,["label-position","rules","model","disabled"])])]),_:1},8,["modelValue"]),s(y,{onClick:i,type:"primary"},{default:a(()=>n[8]||(n[8]=[p("Добавить цель")])),_:1})],64)}}}),re={class:"analytics-page"},ae={class:"income"},le={class:"expenses"},ie={key:5,style:{"margin-top":"30px"}},ue={class:"list-item"},fe=I({__name:"AnalyticsView",setup(v){var u;const e=U(),m=B(),f=n=>new Intl.NumberFormat("ru-RU").format(n),C=h(()=>`(${e.minExpensesCategories??"Нету"})`),c=h(()=>`(${e.maxExpensesCategories??"Нету"})`),_=new Date().getMonth(),E=(u=e.months.find(n=>n.value===_))==null?void 0:u.label,A=h(()=>e.earningsCurrentMonthAmount-e.expensesCurrentMonthAmount),r=h(()=>e.goals.filter(n=>!e.hiddenGoals.includes(n.id))),i=h(()=>e.expensesTenCategoryCurrentMonth.slice(0,10));return Y(async()=>{await e.getUserEarnings(),await e.getUserExpenses(),await e.incomeExpensesEarningsCurrent(),await e.expensesEarningsCategories(),await e.amountExpensesEarningsCategories(),await e.minMaxExpensesAmount(),await e.expensesDaysMonthCurrent(),await e.getUserGoals(),await e.fetchBudget(),await e.updateGoalStatus()}),(n,t)=>{const k=b("el-breadcrumb-item"),M=b("el-breadcrumb"),y=b("el-card"),$=b("el-skeleton"),x=b("el-empty"),D=b("el-col"),T=b("el-row");return g(),F("div",re,[s(M,{separator:"/"},{default:a(()=>[s(k,{to:{name:"analytics-page"}},{default:a(()=>t[0]||(t[0]=[p("Аналитика")])),_:1}),s(k,null,{default:a(()=>t[1]||(t[1]=[p("Цели")])),_:1})]),_:1}),o(e).loading?(g(),w(y,{key:1},{default:a(()=>[s($,{animated:""})]),_:1})):(g(),w(y,{key:0},{default:a(()=>[d("h2",null,[t[2]||(t[2]=p("Текущий месяц «")),d("span",null,l(o(E)),1),t[3]||(t[3]=p("»"))]),t[7]||(t[7]=d("hr",null,null,-1)),d("h1",null,[t[4]||(t[4]=p("Заработок: ")),d("span",null,l(f(Number(o(e).earningsCurrentMonthAmount.toFixed())))+l(o(m).getIcon),1)]),d("h1",null,[t[5]||(t[5]=p("Доход: ")),d("span",ae,l(f(Number(A.value.toFixed())))+l(o(m).getIcon),1)]),d("h1",null,[t[6]||(t[6]=p("Расходы: ")),d("span",le,l(f(Number(o(e).expensesCurrentMonthAmount.toFixed())))+l(o(m).getIcon),1)])]),_:1})),s(T,{gutter:20},{default:a(()=>[s(D,{md:12},{default:a(()=>[o(e).amountExpenses?(g(),w(ne,{key:0,expenses:o(e).mergedExpenses,amount:o(e).amountExpenses},null,8,["expenses","amount"])):(g(),w(x,{key:1,description:`Расходы ${new Date().getFullYear()} года`},null,8,["description"]))]),_:1}),s(D,{md:12},{default:a(()=>[s(y,null,{default:a(()=>[d("h3",null,[t[8]||(t[8]=p("Мин.расход - ")),d("span",null,l(o(e).minExpenses>0?f(Number(o(e).minExpenses.toFixed())):0)+l(o(m).getIcon),1),p(" "+l(C.value),1)])]),_:1}),s(y,null,{default:a(()=>[d("h3",null,[t[9]||(t[9]=p("Макс.расход - ")),d("span",null,l(o(e).maxExpenses>0?f(Number(o(e).maxExpenses.toFixed())):0)+l(o(m).getIcon),1),p(" "+l(c.value),1)])]),_:1}),s(y,null,{default:a(()=>[d("h3",null,[t[10]||(t[10]=p("Сред.расходы - ")),d("span",null,l(f(Number(o(e).averageExpenses.toFixed())))+l(o(m).getIcon),1)])]),_:1})]),_:1})]),_:1}),o(e).expensesDaysCurrentMonth.length?(g(),w(K,{key:2,expenses:o(e).expensesDaysCurrentMonth,month:o(_)},null,8,["expenses","month"])):N("",!0),r.value.length?(g(),w(Q,{key:3,goals:r.value,"visible-hidden":!0,title:"Ваши финансовые цели"},null,8,["goals"])):(g(),w(x,{key:4,description:"У вас пока нет целей, добавьте!"})),t[11]||(t[11]=p()),t[12]||(t[12]=d("br",null,null,-1)),s(se),i.value.length?(g(),F("h2",ie,"Топ 10 расходов за "+l(o(E)),1)):N("",!0),i.value.length?(g(!0),F(G,{key:6},J(i.value,V=>(g(),F("ul",{key:V.category,class:"list"},[d("li",ue,l(V.category)+" | "+l(V.amount)+" "+l(o(m).getIcon),1)]))),128)):N("",!0)])}}});export{fe as default};
