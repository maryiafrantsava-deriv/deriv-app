!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("@deriv/components"),require("@deriv/shared"),require("@deriv/translations"),require("react")):"function"==typeof define&&define.amd?define(["@deriv/components","@deriv/shared","@deriv/translations","react"],t):"object"==typeof exports?exports["@deriv/account"]=t(require("@deriv/components"),require("@deriv/shared"),require("@deriv/translations"),require("react")):e["@deriv/account"]=t(e["@deriv/components"],e["@deriv/shared"],e["@deriv/translations"],e.react)}(self,(function(e,t,o,r){return(()=>{var i={"../../../node_modules/prop-types/factoryWithThrowingShims.js":(e,t,o)=>{"use strict";var r=o("../../../node_modules/prop-types/lib/ReactPropTypesSecret.js");function i(){}function n(){}n.resetWarningCache=i,e.exports=function(){function e(e,t,o,i,n,a){if(a!==r){var s=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw s.name="Invariant Violation",s}}function t(){return e}e.isRequired=e;var o={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:n,resetWarningCache:i};return o.PropTypes=o,o}},"../../../node_modules/prop-types/index.js":(e,t,o)=>{e.exports=o("../../../node_modules/prop-types/factoryWithThrowingShims.js")()},"../../../node_modules/prop-types/lib/ReactPropTypesSecret.js":e=>{"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},"@deriv/components":t=>{"use strict";t.exports=e},"@deriv/shared":e=>{"use strict";e.exports=t},"@deriv/translations":e=>{"use strict";e.exports=o},react:e=>{"use strict";e.exports=r}},n={};function a(e){var t=n[e];if(void 0!==t)return t.exports;var o=n[e]={exports:{}};return i[e](o,o.exports,a),o.exports}a.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return a.d(t,{a:t}),t},a.d=(e,t)=>{for(var o in t)a.o(t,o)&&!a.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},a.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t);var s={};return(()=>{"use strict";a.d(s,{default:()=>d});var e=a("react"),t=a.n(e),o=a("../../../node_modules/prop-types/index.js"),r=a.n(o),i=a("@deriv/translations"),n=a("@deriv/components"),l=a("@deriv/shared"),c=function(e){var o=e.identifier_title,r=e.is_open,a=e.onClose,s=e.onClickSendEmail,c=t().createElement(n.SendEmailTemplate,{className:"sent-email",subtitle:function(){var e="";switch(o){case l.CFD_PLATFORMS.DXTRADE:e=t().createElement(i.Localize,{i18n_default_text:"Please click on the link in the email to change your <0>Deriv X</0> password.",components:[t().createElement("span",{className:"send-email-template__subtitle-platform",key:0})]});break;case l.CFD_PLATFORMS.MT5:e=(0,i.localize)("Please click on the link in the email to change your DMT5 password.");break;case"Google":case"Facebook":e=(0,i.localize)("Check your {{ identifier_title }} account email and click the link in the email to proceed.",{identifier_title:o});break;default:e=(0,i.localize)("Please click on the link in the email to reset your password.")}return e}(),title:(0,i.localize)("We’ve sent you an email"),lbl_no_receive:(0,i.localize)("Didn't receive the email?"),txt_resend:(0,i.localize)("Resend email"),txt_resend_in:(0,i.localize)("Resend email in"),onClickSendEmail:s},[{key:"email_spam",icon:"IcEmailSpam",content:(0,i.localize)("The email is in your spam folder (Sometimes things get lost there).")},{key:"wrong_email",icon:"IcEmail",content:(0,i.localize)("You accidentally gave us another email address (Usually a work or a personal one instead of the one you meant).")},{key:"email_firewall",icon:"IcEmailFirewall",content:(0,i.localize)("We can’t deliver the email to this address (Usually because of firewalls or filtering).")}].map((function(e){return t().createElement("div",{className:"sent-email__content",key:e.key},t().createElement(n.Icon,{icon:e.icon,size:32}),t().createElement(n.Text,{size:"xxs",as:"p"},e.content))})));return(0,l.isMobile)()?t().createElement(n.MobileDialog,{portal_element_id:"modal_root",title:(0,i.localize)("We’ve sent you an email"),wrapper_classname:"mt5-email-sent",visible:r,onClose:a,has_content_scroll:!0},c):t().createElement(n.Modal,{className:"sent-email__modal",is_open:r,has_close_icon:!0,should_header_stick_body:!0,title:"",toggleModal:a,width:"440px"},t().createElement(n.Div100vhContainer,{className:"account__scrollbars_container-wrapper",is_disabled:(0,l.isDesktop)(),height_offset:"80px"},t().createElement(n.Modal.Body,null,t().createElement("div",{onClick:a,className:"send-email-template__close"},t().createElement(n.Icon,{icon:"IcCross"})),c)))};c.propTypes={identifier_title:r().string,is_open:r().bool,is_unlink_modal:r().bool,onClose:r().func,onClickSendEmail:r().func};const d=c})(),s.default})()}));