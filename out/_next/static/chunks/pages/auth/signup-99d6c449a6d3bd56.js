(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[613],{612:function(e,s,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/auth/signup",function(){return a(6231)}])},6231:function(e,s,a){"use strict";a.r(s);var t=a(5893),l=a(9008),r=a(7294),n=a(3801),c=a(3987),i=a(1163);s.default=function(){var e,s=(0,i.useRouter)(),a=(0,r.useState)(""),d=a[0],x=a[1],o=(0,r.useState)(""),u=o[0],p=o[1],m=(0,r.useState)(""),h=m[0],j=m[1],N=(0,r.useState)(""),g=N[0],f=N[1],v=(0,r.useState)(!1),b=v[0],y=v[1],w=(0,r.useState)(""),E=w[0],C=w[1],_=(0,r.useState)(!1),S=(_[0],_[1]);return(0,t.jsxs)("div",{className:"grid grid-cols-1 place-items-center",children:[(0,t.jsx)(l.default,{children:(0,t.jsx)("title",{children:"Sign Up"})}),(0,t.jsx)("p",{className:"text-3xl py-6 font-medium",children:"Create your account"}),(0,t.jsxs)("div",{className:"border-2 bg--white grid grid-cols-1 mt-4 rounded-lg mb-6",children:[(0,t.jsxs)("div",{className:"flex space-x-4 p-4",children:[(0,t.jsxs)("div",{className:"space-y-2",children:[(0,t.jsx)("p",{className:"text-lg font-bold",children:"First name *"}),(0,t.jsx)("input",{type:"text",placeholder:"First name",className:"text-xl border-2 outline-none focus:border-amber-500 px-4 py-2 rounded-lg",value:d,onChange:function(e){return x(e.target.value)}}),d?d.length>=2&&(0,t.jsxs)("div",{className:"flex space-x-2",children:[(0,t.jsx)(n.rE2,{className:"text-green-500 h-6"}),(0,t.jsx)("p",{className:"text-green-500",children:"First name accpeted"})]}):(0,t.jsxs)("div",{className:"flex space-x-2",children:[(0,t.jsx)(n.$Ow,{className:"text-red-500 h-6"}),(0,t.jsx)("p",{className:"text-red-500",children:"First name is required"})]})]}),(0,t.jsxs)("div",{className:"space-y-2",children:[(0,t.jsx)("p",{className:"text-lg font-bold",children:"Last name *"}),(0,t.jsx)("input",{type:"text",placeholder:"Last name",className:"text-xl border-2 outline-none focus:border-amber-500 px-4 py-2 rounded-lg",value:u,onChange:function(e){return p(e.target.value)}}),u?u.length>=2&&(0,t.jsxs)("div",{className:"flex space-x-2",children:[(0,t.jsx)(n.rE2,{className:"text-green-500 h-6"}),(0,t.jsx)("p",{className:"text-green-500",children:"First name accpeted"})]}):(0,t.jsxs)("div",{className:"flex space-x-2",children:[(0,t.jsx)(n.$Ow,{className:"text-red-500 h-6"}),(0,t.jsx)("p",{className:"text-red-500",children:"Last name is required"})]})]})]}),(0,t.jsxs)("div",{className:"space-y-2 px-4 py-2 w-full",children:[(0,t.jsx)("p",{className:"text-lg font-bold",children:"Email *"}),(0,t.jsx)("input",{type:"text",placeholder:"Email",className:"text-xl border-2 outline-none focus:border-amber-500 px-4 py-2 rounded-lg",value:h,onChange:function(e){return j(e.target.value)}}),h?(e=h,!!e.includes("@")&&(0,t.jsxs)("div",{className:"flex space-x-2",children:[(0,t.jsx)(n.rE2,{className:"text-green-500 h-6"}),(0,t.jsx)("p",{className:"text-green-500",children:"Email accpeted"})]})):(0,t.jsxs)("div",{className:"flex space-x-2",children:[(0,t.jsx)(n.$Ow,{className:"text-red-500 h-6"}),(0,t.jsx)("p",{className:"text-red-500",children:"Email is required"})]})]}),(0,t.jsxs)("div",{className:"space-y-2 px-4 py-2",children:[(0,t.jsx)("p",{className:"text-lg font-bold",children:"Password *"}),(0,t.jsxs)("div",{className:"flex items-center space-x-4",children:[(0,t.jsx)("input",{type:b?"text":"password",placeholder:"Password",className:"text-xl border-2 outline-none focus:border-amber-500 px-4 py-2 rounded-lg",value:g,onChange:function(e){return f(e.target.value)}}),b?(0,t.jsx)(n.Xl7,{className:"h-8 right-2 top-3 cursor-pointer",onClick:function(){return y(!1)}}):(0,t.jsx)(n.tEF,{className:"h-8 right-2 top-3 cursor-pointer",onClick:function(){return y(!0)}})]}),g?checkPassword(g)&&(0,t.jsxs)("div",{className:"flex space-x-2",children:[(0,t.jsx)(n.rE2,{className:"text-green-500 h-6"}),(0,t.jsx)("p",{className:"text-green-500",children:"Email accpeted"})]}):(0,t.jsxs)("div",{className:"flex space-x-2",children:[(0,t.jsx)(n.$Ow,{className:"text-red-500 h-6"}),(0,t.jsx)("p",{className:"text-red-500",children:"Password is required"})]})]}),(0,t.jsxs)("div",{className:"space-y-2 p-4",children:[(0,t.jsx)("p",{className:"text-xl font-bold",children:"Where do you live ?"}),(0,t.jsx)("p",{children:"For your convenience,please enter your current location of residence."}),(0,t.jsx)(c.ZP,{selected:E,onSelect:function(e){return C(e)}}),E?(0,t.jsxs)("div",{className:"flex space-x-2",children:[(0,t.jsx)(n.rE2,{className:"text-green-500 h-6"}),(0,t.jsx)("p",{className:"text-green-500",children:"Country accpeted"})]}):(0,t.jsxs)("div",{className:"flex space-x-2",children:[(0,t.jsx)(n.$Ow,{className:"text-red-500 h-6"}),(0,t.jsx)("p",{className:"text-red-500",children:"Country is required"})]})]}),(0,t.jsx)("button",{disabled:!(d&&u&&h&&g&&E),className:"border-2 p-4 text-2xl w-3/6 place-self-center rounded-lg my-4 bg-amber-400 font-medium \n            ".concat(!(d&&u&&h&&g&&E)&&"opacity-50"," "),onClick:function(){console.log("first name : ",d),console.log("last name : ",u),console.log("email : ",h),console.log("passowrd : ",g),console.log("country code : ",E),d&&u&&h&&g&&E?console.log("Go to the next page"):S(!0)},children:"Create account"})]}),(0,t.jsxs)("p",{className:"text-2xl",children:[(0,t.jsx)("span",{children:"Already have a FreeFlow account ?"}),(0,t.jsx)("span",{className:"font-bold text-amber-500 ml-2 cursor-pointer",onClick:function(){return s.push("/auth/signin")},children:"Sign in"})]})]})}},9008:function(e,s,a){e.exports=a(5443)}},function(e){e.O(0,[810,774,888,179],(function(){return s=612,e(e.s=s);var s}));var s=e.O();_N_E=s}]);