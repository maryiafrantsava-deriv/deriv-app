"use strict";(self.webpackChunk_deriv_trader=self.webpackChunk_deriv_trader||[]).push([["contract","error-component"],{"./src/App/Components/Elements/Errors/index.js":(e,t,r)=>{r.r(t),r.d(t,{default:()=>u});var n=r("../../node_modules/prop-types/index.js"),o=r.n(n),a=r("react"),c=r("@deriv/components"),i=r("@deriv/shared"),l=r("@deriv/translations"),s=function(e){var t=e.header,r=e.message,n=e.is_dialog,o=e.redirect_label,s=e.redirectOnClick,u=e.should_show_refresh,_=void 0===u||u?(0,l.localize)("Please refresh this page to continue."):"";return n?a.createElement(c.Dialog,{title:t||(0,l.localize)("There was an error"),is_visible:!0,confirm_button_text:o||(0,l.localize)("Ok"),onConfirm:s||function(){return location.reload()}},r||(0,l.localize)("Sorry, an error occured while processing your request.")):a.createElement(c.PageError,{header:t||(0,l.localize)("Something’s not right"),messages:r?[r,_]:[(0,l.localize)("Sorry, an error occured while processing your request."),_],redirect_urls:[i.routes.trade],redirect_labels:[o||(0,l.localize)("Refresh")],buttonOnClick:s||function(){return location.reload()}})};s.propTypes={message:o().oneOfType([o().node,o().string,o().object]),type:o().string};const u=s},"./src/App/Components/Elements/Modals/UnsupportedContractModal/index.js":(e,t,r)=>{r.d(t,{Z:()=>_});var n=r("../../node_modules/prop-types/index.js"),o=r.n(n),a=r("react"),c=r("@deriv/components"),i=r("@deriv/translations"),l=r("./src/Stores/connect.js"),s=r("@deriv/shared"),u=function(e){var t=e.disableApp,r=e.enableApp,n=e.is_loading,o=e.is_visible,l=e.onConfirm,u=e.onClose;return a.createElement(c.Dialog,{title:(0,i.localize)("We’re working on it"),confirm_button_text:(0,i.localize)("Stay on {{website_domain}}",{website_domain:s.website_name}),cancel_button_text:(0,i.localize)("Go to Binary.com"),onConfirm:l,onCancel:u,disableApp:t,enableApp:r,is_loading:n,is_closed_on_cancel:!0,is_visible:o},a.createElement(i.Localize,{i18n_default_text:"You’ve selected a trade type that is currently unsupported, but we’re working on it."}))};u.propTypes={disableApp:o().func,enableApp:o().func,is_loading:o().bool,is_visible:o().bool,onClose:o().func,onConfirm:o().func};const _=(0,l.$j)((function(e){var t=e.ui;return{disableApp:t.disableApp,enableApp:t.enableApp,is_loading:t.is_loading}}))(u)},"./src/Modules/Contract/index.js":(e,t,r)=>{r.r(t),r.d(t,{default:()=>Se});var n=r("../../node_modules/prop-types/index.js"),o=r.n(n),a=r("react"),c=r("react-router"),i=r("../../node_modules/react-transition-group/esm/CSSTransition.js"),l=r("@deriv/shared"),s=r("./src/App/Components/Elements/Errors/index.js"),u=r("@deriv/translations"),_=r("./src/Stores/connect.js"),d=r("../../node_modules/classnames/index.js"),m=r.n(d),p=r("react-router-dom"),f=r("@deriv/components"),y=r("./src/App/Components/Elements/chart-loader.jsx"),g=r("./src/App/Components/Elements/PositionsDrawer/helpers/index.js"),b=r("./src/Stores/Modules/Contract/Helpers/logic.js"),h=function(e){var t=e.icon,r=e.id,n=e.label,o=e.timestamp,c=e.value,i=e.value2;return a.createElement("div",{id:r,className:"contract-audit__grid"},t&&a.createElement("div",{className:"contract-audit__icon"},t),a.createElement("div",{className:"contract-audit__item"},a.createElement(f.Text,{size:"xxxs",styles:{lineHeight:"unset"},className:"contract-audit__label"},n),a.createElement("div",{className:"contract-audit__value-wrapper"},a.createElement(f.Text,{weight:"bold",size:"xxs",line_height:"m",color:"prominent",className:"contract-audit__value"},c),i&&a.createElement(f.Text,{weight:"bold",size:"xxs",line_height:"m",color:"prominent",className:"contract-audit__value2"},i))),o&&a.createElement("div",{className:"contract-audit__timestamp"},a.createElement(f.Text,{size:"xxxs",align:"right",line_height:"xs",className:"contract-audit__timestamp-value"},(0,l.formatDate)(o)),a.createElement(f.Text,{size:"xxxs",align:"right",line_height:"xs",className:"contract-audit__timestamp-value"},(0,l.formatTime)(o))))};h.propTypes={icon:o().node,label:o().string,value:o().PropTypes.oneOfType([o().number,o().string,o().node]),value2:o().PropTypes.oneOfType([o().number,o().string])};const v=h;var E=function(e){var t=e.contract_end_time,r=e.contract_info,n=e.duration,o=e.duration_unit,c=e.exit_spot,i=r.commission,s=r.contract_type,_=r.currency,d=r.entry_spot_display_value,m=r.entry_tick_time,p=r.exit_tick_time,y=r.profit,h=r.purchase_time,E=r.tick_count,C=r.transaction_ids,w=(C=void 0===C?{}:C).buy,k=C.sell,S=y>=0,x=(0,l.getCancellationPrice)(r);return a.createElement(f.ThemedScrollbars,{is_bypassed:(0,l.isMobile)()},a.createElement("div",{className:"contract-audit__tabs-content"},a.createElement(v,{id:"dt_id_label",icon:a.createElement(f.Icon,{icon:"IcContractId",size:24}),label:(0,u.localize)("Reference ID"),value:(0,u.localize)("{{buy_value}} (Buy)",{buy_value:w}),value2:k?(0,u.localize)("{{sell_value}} (Sell)",{sell_value:k}):void 0}),(0,l.isMultiplierContract)(s)?a.createElement(a.Fragment,null,a.createElement(v,{id:"dt_commission_label",icon:a.createElement(f.Icon,{icon:"IcContractCommission",size:24}),label:(0,u.localize)("Commission"),value:a.createElement(f.Money,{amount:i,currency:_,show_currency:!0})}),!!x&&a.createElement(v,{id:"dt_cancellation_label",icon:a.createElement(f.Icon,{icon:"IcContractSafeguard",size:24}),label:(0,l.isUserSold)(r)&&(0,b.FD)(r)?(0,u.localize)("Deal cancellation"):(0,b.$B)(r)?(0,u.localize)("Deal cancellation (executed)"):(0,b.z9)(r)?(0,u.localize)("Deal cancellation (expired)"):(0,u.localize)("Deal cancellation (active)"),value:a.createElement(f.Money,{amount:x,currency:_})})):a.createElement(a.Fragment,null,a.createElement(v,{id:"dt_duration_label",icon:a.createElement(f.Icon,{icon:"IcContractDuration",size:24}),label:(0,u.localize)("Duration"),value:E>0?"".concat(E," ").concat(E<2?(0,u.localize)("tick"):(0,u.localize)("ticks")):"".concat(n," ").concat(o)}),a.createElement(v,{id:"dt_bt_label",icon:(0,g.qm)(s)?a.createElement(f.Icon,{icon:"IcContractTarget",size:24}):a.createElement(f.Icon,{icon:"IcContractBarrier",size:24}),label:(0,g.Bs)(r),value:(0,g.rh)(r)||" - "})),a.createElement(v,{id:"dt_start_time_label",icon:a.createElement(f.Icon,{icon:"IcContractStartTime",size:24}),label:(0,u.localize)("Start time"),value:(0,l.toGMTFormat)((0,l.epochToMoment)(h))||" - "}),!(0,g.qm)(s)&&a.createElement(v,{id:"dt_entry_spot_label",icon:a.createElement(f.Icon,{icon:"IcContractEntrySpot",size:24}),label:(0,u.localize)("Entry spot"),value:(0,g.Ew)(d)||" - ",value2:(0,l.toGMTFormat)((0,l.epochToMoment)(m))||" - "}),!isNaN(c)&&a.createElement(v,{id:"dt_exit_spot_label",icon:a.createElement(f.Icon,{icon:"IcContractExitSpot",size:24}),label:(0,u.localize)("Exit spot"),value:(0,g.Ew)(c)||" - ",value2:(0,l.toGMTFormat)((0,l.epochToMoment)(p))||" - "}),!isNaN(t)&&a.createElement(v,{id:"dt_exit_time_label",icon:a.createElement(f.Icon,{icon:"IcContractExitTime",color:S?"green":"red",size:24}),label:(0,u.localize)("Exit time"),value:(0,l.toGMTFormat)((0,l.epochToMoment)(t))||" - "})))};E.propTypes={contract_end_time:o().PropTypes.oneOfType([o().number,o().string]),contract_info:o().object,duration:o().oneOfType([o().number,o().string]),duration_unit:o().string,exit_spot:o().string};const C=E;var w=function(e){var t=e.currency,r=e.history,n=void 0===r?[]:r;return n.length?a.createElement(f.ThemedScrollbars,{is_bypassed:(0,l.isMobile)()},a.createElement("div",{className:"contract-audit__tabs-content"},n.map((function(e,r){return a.createElement(v,{key:r,id:"dt_history_label_".concat(r),label:e.display_name,timestamp:+e.order_date,value:0!==Math.abs(+e.order_amount)?a.createElement(a.Fragment,null,+e.order_amount<0&&a.createElement("strong",null,"-"),a.createElement(f.Money,{amount:e.order_amount,currency:t}),e.value&&a.createElement(a.Fragment,null,a.createElement("br",null),a.createElement("span",null,"(",e.value,")"))):(0,u.localize)("Cancelled")})})))):a.createElement("div",{className:"contract-audit__empty"},a.createElement(f.Icon,{icon:"IcBox",size:48,color:"secondary"}),a.createElement("h4",{className:"contract-audit__empty-header"},(0,u.localize)("No history")),a.createElement(f.Text,{align:"center",line_height:"s",color:"less-prominent",size:"xxs"},(0,u.localize)("You have yet to update either take profit or stop loss")))};w.propTypes={currency:o().string,history:o().array};const k=w;var S=["contract_update_history","has_result","is_multiplier","toggleHistoryTab"];function x(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var T=function(e){var t=e.contract_update_history,r=e.has_result,n=e.is_multiplier,o=e.toggleHistoryTab,c=function(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}(e,S),i=c.contract_info,s=i.contract_id,_=i.currency,d=function(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,a=[],c=!0,i=!1;try{for(r=r.call(e);!(c=(n=r.next()).done)&&(a.push(n.value),!t||a.length!==t);c=!0);}catch(e){i=!0,o=e}finally{try{c||null==r.return||r.return()}finally{if(i)throw o}}return a}}(e,t)||function(e,t){if(e){if("string"==typeof e)return x(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?x(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}(a.useState([]),2),m=d[0],p=d[1],y=function(e){return e.sort((function(e,t){return t.order_date-e.order_date}))};return a.useEffect((function(){t.length&&t.length>m.length&&p(y(t))}),[t,m]),r?n?a.createElement("div",{className:"contract-audit__wrapper"},a.createElement(f.Tabs,{top:!0,className:"contract-audit__tabs",onTabItemClick:function(e){o(e),e&&l.WS.contractUpdateHistory(s).then((function(e){p(y(e.contract_update_history))}))}},a.createElement("div",{label:(0,u.localize)("Details")},a.createElement(C,c)),a.createElement("div",{label:(0,u.localize)("History")},a.createElement(k,{currency:_,history:m})))):a.createElement("div",{className:"contract-audit__wrapper"},a.createElement(C,c)):null};T.propTypes={contract_info:o().object,contract_update_history:o().array,has_result:o().bool,is_multiplier:o().bool,toggleHistoryTab:o().func};const j=T;var M=r("./src/App/Components/Elements/ContentLoader/index.js"),A=r("./src/Stores/Modules/Portfolio/Helpers/details.js"),I=r("./src/Constants/contract.js"),z=r("./src/Stores/Modules/Trading/Helpers/active-symbols.js"),N=r("./src/Stores/Modules/Contract/Helpers/multiplier.js"),O=r("./src/Modules/Reports/Helpers/market-underlying.js"),D=r("react-dom"),F=r.n(D);function H(){return H=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},H.apply(this,arguments)}var W=function(e){var t=e.is_multiplier,r=e.children,n=e.onSwipedDown,o=f.SwipeableWrapper.useSwipeable({onSwipedDown:n}),c=document.getElementById("dt_contract_drawer_audit");return c?F().createPortal(a.createElement("div",{className:"contract-audit-card"},a.createElement("div",H({},o,{className:m()("contract-audit-card__container",{"contract-audit-card__container--is-multiplier":t})}),r)),c):null};W.propTypes={is_multiplier:o().bool,children:o().any,onSwipedDown:o().func};var B=function(e){var t=e.children,r=e.onSwipedDown,n=e.onSwipedUp,o=f.SwipeableWrapper.useSwipeable({onSwipedDown:r,onSwipedUp:n});return a.createElement("div",o,t)};B.propTypes={children:o().any,onSwipedDown:o().func,onSwipedUp:o().func};var U=r("./src/App/Components/Elements/market-countdown-timer.jsx");function q(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var L=function(e){var t=e.symbol,r=function(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,a=[],c=!0,i=!1;try{for(r=r.call(e);!(c=(n=r.next()).done)&&(a.push(n.value),!t||a.length!==t);c=!0);}catch(e){i=!0,o=e}finally{try{c||null==r.return||r.return()}finally{if(i)throw o}}return a}}(e,t)||function(e,t){if(e){if("string"==typeof e)return q(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?q(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}(a.useState(!0),2),n=r[0],o=r[1];return a.createElement("div",{className:m()("contract-card__market-closed",{"contract-card__market-closed--loading":n})},a.createElement(f.Text,{align:"center",as:"p",className:"contract-card__market-closed__title",styles:{color:"var(--brand-orange)"},weight:"bold"},a.createElement(u.Localize,{i18n_default_text:"Market is closed"})),a.createElement(U.Z,{setIsTimerLoading:o,symbol:t}))};L.propTypes={symbol:o().string};const P=L;function R(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,a=[],c=!0,i=!1;try{for(r=r.call(e);!(c=(n=r.next()).done)&&(a.push(n.value),!t||a.length!==t);c=!0);}catch(e){i=!0,o=e}finally{try{c||null==r.return||r.return()}finally{if(i)throw o}}return a}}(e,t)||function(e,t){if(e){if("string"==typeof e)return $(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?$(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function $(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var Z=function(e){var t=e.active_symbols,r=e.addToast,n=e.contract_info,o=e.contract_update,c=e.currency,i=e.current_focus,s=e.getContractById,u=e.is_market_closed,_=e.is_mobile,d=e.is_multiplier,p=e.is_sell_requested,y=e.is_collapsed,g=e.onClickCancel,h=e.onClickSell,v=e.onSwipedUp,E=e.onSwipedDown,C=e.removeToast,w=e.result,k=e.setCurrentFocus,S=e.server_time,x=e.should_show_cancellation_warning,T=e.status,j=e.toggleCancellationWarning,M=e.toggleContractAuditDrawer,A=R((0,f.useHover)(),2),D=A[0],F=A[1],H=n.profit,W=n.underlying,U=!!(0,b.NQ)(n),q=(0,z.rh)(t,(0,O.cS)(n.shortcode).underlying),L=(0,l.isCryptoContract)(n.underlying),$=!d||L&&d,Z=a.createElement(f.ContractCard.Header,{contract_info:n,display_name:q,getCardLabels:I.gk,getContractTypeDisplay:I.h8,has_progress_slider:(0,l.isDesktop)()&&$,is_mobile:_,is_sell_requested:p,is_sold:U,onClickSell:h,server_time:S}),G=a.createElement(f.ContractCard.Body,{addToast:r,connectWithContractUpdate:N.tP,contract_info:n,contract_update:o,currency:c,current_focus:i,getCardLabels:I.gk,getContractById:s,is_mobile:_,is_multiplier:d,is_sold:U,removeToast:C,server_time:S,setCurrentFocus:k,should_show_cancellation_warning:x,status:T,toggleCancellationWarning:j}),Q=a.createElement(f.ContractCard.Footer,{contract_info:n,getCardLabels:I.gk,is_multiplier:d,is_sell_requested:p,onClickCancel:g,onClickSell:h,server_time:S,status:T}),X=a.createElement(a.Fragment,null,Z,G),Y=a.createElement(f.ContractCard,{contract_info:n,getCardLabels:I.gk,is_multiplier:d,profit_loss:H,should_show_result_overlay:!1},a.createElement("div",{className:m()("dc-contract-card",{"dc-contract-card--green":_&&!d&&H>0&&!w,"dc-contract-card--red":_&&!d&&H<0&&!w,"contract-card__market-closed--disabled":u&&F}),ref:D},u&&!(0,b.NQ)(n)&&a.createElement("div",{className:m()({"contract-card__market-closed--hidden":(0,l.isDesktop)()&&F})},a.createElement(P,{symbol:W})),X,Q));return a.createElement(a.Fragment,null,a.createElement(f.DesktopWrapper,null,Y),a.createElement(f.MobileWrapper,null,a.createElement(B,{onSwipedUp:U||d?v:void 0,onSwipedDown:U||d?E:void 0},(U||d)&&a.createElement(f.Collapsible.ArrowButton,{onClick:M,is_collapsed:y}),Y)))};Z.propTypes={contract_info:o().object,currency:o().string,current_focus:o().string,is_market_closed:o().bool,is_multiplier:o().bool,is_sell_requested:o().bool,onClickCancel:o().func,onClickSell:o().func,status:o().string};const G=(0,_.$j)((function(e){var t=e.modules,r=e.ui;return{active_symbols:t.trade.active_symbols,addToast:r.addToast,current_focus:r.current_focus,getContractById:t.contract_trade.getContractById,removeToast:r.removeToast,should_show_cancellation_warning:r.should_show_cancellation_warning,setCurrentFocus:r.setCurrentFocus,toggleCancellationWarning:r.toggleCancellationWarning}}))(Z);function Q(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var X=function(e){var t,r=e.contract_info,n=e.contract_update,o=e.contract_update_history,c=e.is_mobile,s=e.is_sell_requested,u=e.is_dark_theme,_=e.is_market_closed,d=e.is_multiplier,p=e.onClickCancel,y=e.onClickSell,g=e.server_time,h=e.status,v=e.toggleHistoryTab,E=r.currency,C=r.exit_tick_display_value,w=r.is_sold,k=a.useRef(),S=a.useRef(),x=function(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,a=[],c=!0,i=!1;try{for(r=r.call(e);!(c=(n=r.next()).done)&&(a.push(n.value),!t||a.length!==t);c=!0);}catch(e){i=!0,o=e}finally{try{c||null==r.return||r.return()}finally{if(i)throw o}}return a}}(e,t)||function(e,t){if(e){if("string"==typeof e)return Q(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?Q(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}(a.useState(!1),2),T=x[0],I=x[1];if(!r)return null;var z=r.status||r.is_expired,N=(0,l.isUserSold)(r)&&!d?"-":C,O=a.createElement(j,{contract_info:r,contract_update_history:o,contract_end_time:(0,b.NQ)(r),is_dark_theme:u,is_multiplier:d,is_open:!0,duration:(0,A.Cc)(r),duration_unit:(0,A.BX)((0,A.H3)(r)),exit_spot:N,has_result:!!w||d,toggleHistoryTab:v}),D=z?function(){var e=(0,l.isUserSold)(r)&&!d?"-":C,t=a.createElement(j,{contract_info:r,contract_update_history:o,contract_end_time:(0,b.NQ)(r),is_dark_theme:u,is_multiplier:d,is_open:!0,duration:(0,A.Cc)(r),duration_unit:(0,A.BX)((0,A.H3)(r)),exit_spot:e,has_result:!!w||d,toggleHistoryTab:v});return a.createElement(a.Fragment,null,a.createElement(G,{contract_info:r,contract_update:n,currency:E,is_mobile:c,is_market_closed:_,is_multiplier:d,is_sell_requested:s,is_collapsed:T,onClickCancel:p,onClickSell:y,onSwipedUp:function(){return I(!0)},onSwipedDown:function(){return I(!1)},server_time:g,status:h,toggleContractAuditDrawer:function(){return I(!T)}}),a.createElement(f.DesktopWrapper,null,t))}():a.createElement("div",{className:"contract-card"},a.createElement(M.rl,{is_dark_theme:u,speed:2})),F=a.createElement(i.Z,{in:T,timeout:250,classNames:"contract-drawer__transition"},a.createElement("div",{id:"dt_contract_drawer",className:m()("contract-drawer",{"contract-drawer--with-collapsible-btn":!!(0,b.NQ)(r)||d&&(0,l.isMobile)(),"contract-drawer--is-multiplier":d&&(0,l.isMobile)(),"contract-drawer--is-multiplier-sold":d&&(0,l.isMobile)()&&(0,b.NQ)(r)}),style:{transform:T&&k.current&&S.current&&"translateY(calc(".concat(S.current.clientHeight,"px - ").concat(k.current.clientHeight,"px))")},ref:k},a.createElement("div",{className:"contract-drawer__body",ref:S},D),T&&a.createElement(f.MobileWrapper,null,a.createElement("div",{id:"dt_contract_drawer_audit"},a.createElement(W,{is_multiplier:d},O)))));return a.createElement(a.Fragment,null,a.createElement(f.DesktopWrapper,null,F),a.createElement(f.MobileWrapper,null,a.createElement("div",{style:{height:null===(t=S.current)||void 0===t?void 0:t.clientHeight}},a.createElement(f.Div100vhContainer,{height_offset:"40px",is_bypassed:!S.current},F))))};X.propTypes={contract_info:o().object,is_chart_loading:o().bool,is_dark_theme:o().bool,is_market_closed:o().bool,is_mobile:o().bool,is_history_tab_active:o().bool,is_sell_requested:o().bool,onClickCancel:o().func,onClickContractUpdate:o().func,onClickSell:o().func,status:o().string};const Y=(0,c.withRouter)((0,_.$j)((function(e){var t=e.common,r=e.ui;return{server_time:t.server_time,is_mobile:r.is_mobile}}))(X));var J=r("./src/App/Components/Elements/Modals/UnsupportedContractModal/index.js"),K=r("./src/Modules/SmartChart/index.js"),V=r("./src/Modules/Contract/Components/Digits/index.js"),ee=r("./src/App/Components/Animations/index.js"),te=r("mobx-react"),re=function(e){var t=e.contract_info;return a.createElement("div",{className:"info-box-longcode"},a.createElement(f.Icon,{icon:"IcContractFlag",className:"info-box-longcode-icon",size:24}),a.createElement(f.Text,{size:"xs",className:"info-box-longcode-text"},t.longcode))};re.propTypes={longcode:o().string};const ne=(0,te.observer)(re);var oe=function(e){var t=e.message,r=void 0===t?"":t,n=e.onClickClose;return r?a.createElement("div",{className:"message"},a.createElement("div",{className:"message-icon"},a.createElement("svg",{width:"16",height:"16",viewBox:"0 0 16 16"},a.createElement("g",{fill:"none",fillRule:"evenodd"},a.createElement("circle",{cx:"8",cy:"8",r:"8",fill:"#F44336"}),a.createElement("path",{fill:"#FFF",fillRule:"nonzero",d:"M8 7.293l3.146-3.147a.5.5 0 0 1 .708.708L8.707 8l3.147 3.146a.5.5 0 0 1-.708.708L8 8.707l-3.146 3.147a.5.5 0 0 1-.708-.708L7.293 8 4.146 4.854a.5.5 0 1 1 .708-.708L8 7.293z"})))),a.createElement("div",{className:"message-text"},r),a.createElement("div",{className:"message-close",onClick:n},a.createElement(f.Icon,{icon:"IcCross"}))):null};oe.propTypes={message:o().string,onClickClose:o().func};const ae=oe;var ce=function(e){var t=e.contract_info,r=e.error_message,n=e.removeError,o=ne,c=!!t.longcode;return a.createElement(ee.o,{is_visible:c,className:"info-box-container",keyname:"info-box-container"},!!t.contract_type&&a.createElement("div",{className:"info-box"},a.createElement(o,{contract_info:t})),a.createElement(ae,{message:r,onClickClose:n}))};ce.propTypes={contract_info:o().object,error_message:o().string,removeError:o().func};const ie=ce;var le=r("./src/Modules/SmartChart/Components/bottom-widgets.jsx"),se=r("./src/Modules/SmartChart/Components/top-widgets.jsx"),ue=(0,_.$j)((function(e){var t=e.modules;return{contract_info:t.contract_replay.contract_store.contract_info,digits_info:t.contract_replay.contract_store.digits_info,display_status:t.contract_replay.contract_store.display_status,is_digit_contract:t.contract_replay.contract_store.is_digit_contract,is_ended:t.contract_replay.contract_store.is_ended}}))((function(e){var t=e.is_digit_contract,r=e.is_ended,n=e.contract_info,o=e.digits_info,c=e.display_status;return a.createElement(V.Z,{is_digit_contract:t,is_ended:r,contract_info:n,digits_info:o,display_status:c})})),_e=(0,_.$j)((function(e){var t=e.modules;return{contract_info:t.contract_replay.contract_store.contract_info,error_message:t.contract_replay.error_message,removeError:t.contract_replay.removeErrorMessage}}))((function(e){var t=e.contract_info,r=e.error_message,n=e.removeError;return a.createElement(ie,{contract_info:t,error_message:r,removeError:n})})),de=function(){return a.createElement(se.Z,{InfoBox:a.createElement(_e,null),is_title_enabled:!1})},me=function(){return a.createElement(le.Z,{Digits:a.createElement(ue,null)})},pe=r("mobx"),fe=["ContentComponent"];var ye=function(e){var t=e.marker_config,r=e.marker_content_props,n=e.is_bottom_widget_visible,o=t.ContentComponent,c=function(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}(t,fe),i=a.useCallback((function(){return a.createElement(o,(0,pe.toJS)(r))}),[r]);return a.createElement(K.KW,{markerRef:function(e){if(e){if(!c.y){var t=24+(n?115:0);e.div.style.height="calc(100% - ".concat(t,"px)"),e.div.style.zIndex="-1"}e.setPosition({epoch:+c.x,price:+c.y})}}},i())};ye.propTypes={marker_config:o().object,marker_content_props:o().object};const ge=ye;function be(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var he=function(e){var t=e.contract_id,r=e.contract_info,n=e.contract_update,o=e.contract_update_history,c=e.is_chart_loading,i=e.is_dark_theme,s=e.is_digit_contract,_=e.is_forward_starting,d=e.is_market_closed,g=e.is_sell_requested,b=e.is_valid_to_cancel,h=e.onClickCancel,v=e.NotificationMessages,E=e.onClickSell,C=e.indicative_status,w=e.toggleHistoryTab,k=e.routeBackInApp,S=e.onMount,x=e.onUnmount,T=function(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,a=[],c=!0,i=!1;try{for(r=r.call(e);!(c=(n=r.next()).done)&&(a.push(n.value),!t||a.length!==t);c=!0);}catch(e){i=!0,o=e}finally{try{c||null==r.return||r.return()}finally{if(i)throw o}}return a}}(e,t)||function(e,t){if(e){if("string"==typeof e)return be(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?be(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}(a.useState(!1),2),j=T[0],M=T[1],A=(0,p.useHistory)();if(a.useEffect((function(){var e=+/[^/]*$/.exec(location.pathname)[0];return S(t||e),M(!0),function(){M(!1),x()}}),[t,location,S,x]),!r.underlying)return null;var I=(0,l.isMultiplierContract)(r.contract_type),z=a.createElement(Y,{contract_info:r,contract_update:n,contract_update_history:o,is_chart_loading:c,is_dark_theme:i,is_market_closed:d,is_multiplier:I,is_sell_requested:g,is_valid_to_cancel:b,onClickCancel:h,onClickSell:E,status:C,toggleHistoryTab:w});return a.createElement(f.FadeWrapper,{is_visible:j,className:"contract-details-wrapper",keyname:"contract-details-wrapper"},a.createElement(f.MobileWrapper,null,a.createElement(v,null)),a.createElement(J.Z,{onConfirm:function(){A.goBack()},onClose:function(){window.open((0,l.urlFor)("user/statementws",{legacy:!0}),"_blank")},is_visible:_}),a.createElement(f.PageOverlay,{id:"dt_contract_replay_container",header:(0,u.localize)("Contract details"),onClickClose:function(){return M(!1),!(0,l.isEmptyObject)(location.state)&&location.state.from_table_row?A.goBack():k(A)}},a.createElement(f.Div100vhContainer,{className:"trade-container__replay",is_disabled:(0,l.isDesktop)(),height_offset:"80px"},a.createElement(f.DesktopWrapper,null,z),a.createElement(f.MobileWrapper,null,a.createElement("div",{className:m()("contract-drawer__mobile-wrapper",{"contract-drawer__mobile-wrapper--is-multiplier":(0,l.isMobile)()&&I})},z)),a.createElement(a.Suspense,{fallback:a.createElement("div",null)},a.createElement("div",{className:m()("replay-chart__container",{"replay-chart__container--is-multiplier":(0,l.isMobile)()&&I})},a.createElement(f.DesktopWrapper,null,a.createElement(v,null)),a.createElement(y.Z,{is_dark:i,is_visible:c}),a.createElement(f.DesktopWrapper,null,a.createElement(Ce,null)),a.createElement(f.MobileWrapper,null,s?a.createElement(a.Fragment,null,a.createElement(_e,null),a.createElement(f.SwipeableWrapper,{className:"replay-chart__container-swipeable-wrapper"},a.createElement(ue,null),a.createElement(Ce,null))):a.createElement(Ce,null)))))))};he.propTypes={contract_id:o().number,contract_info:o().object,indicative_status:o().string,is_chart_loading:o().bool,is_dark_theme:o().bool,is_digit_contract:o().bool,onMount:o().func,onUnmount:o().func,routes:o().arrayOf(o().object)};const ve=(0,_.$j)((function(e){var t=e.common,r=e.modules,n=e.ui,o=r.contract_replay,a=o.contract_store;return{routeBackInApp:t.routeBackInApp,contract_info:a.contract_info,contract_update:a.contract_update,contract_update_history:a.contract_update_history,is_digit_contract:a.is_digit_contract,is_market_closed:o.is_market_closed,is_sell_requested:o.is_sell_requested,is_valid_to_cancel:o.is_valid_to_cancel,onClickCancel:o.onClickCancel,onClickSell:o.onClickSell,onMount:o.onMount,onUnmount:o.onUnmount,indicative_status:o.indicative_status,is_chart_loading:o.is_chart_loading,is_forward_starting:o.is_forward_starting,is_dark_theme:n.is_dark_mode_on,NotificationMessages:n.notification_messages_ui,toggleHistoryTab:n.toggleHistoryTab}}))(he);var Ee=function(e){var t,r=function(){return(0,l.isDesktop)()&&e.is_digit_contract};return a.createElement(K.Xb,{barriers:e.barriers_array,bottomWidgets:r()?me:null,chartControlsWidgets:null,chartType:e.chart_type,endEpoch:e.end_epoch,margin:e.margin||null,isMobile:(0,l.isMobile)(),enabledNavigationWidget:(0,l.isDesktop)(),enabledChartFooter:!1,granularity:e.granularity,requestAPI:e.wsSendRequest,requestForget:e.wsForget,requestForgetStream:e.wsForgetStream,crosshair:(0,l.isMobile)()?0:void 0,maxTick:(0,l.isMobile)()?8:void 0,requestSubscribe:e.wsSubscribe,settings:e.settings,startEpoch:e.start_epoch,scrollToEpoch:e.scroll_to_epoch,stateChangeListener:e.chartStateChange,symbol:e.symbol,allTicks:e.all_ticks,topWidgets:de,isConnectionOpened:e.is_socket_opened,isStaticChart:!1,shouldFetchTradingTimes:!e.end_epoch,yAxisMargin:(t={top:(0,l.isMobile)()?96:148,bottom:r()?128:112},(0,l.isMobile)()&&(t.bottom=48),t),anchorChartToLeft:(0,l.isMobile)(),shouldFetchTickHistory:"seconds"!==(0,A.BX)((0,A.H3)(e.contract_info))},e.markers_array.map((function(e){return a.createElement(ge,{key:e.react_key,marker_config:e.marker_config,marker_content_props:e.content_config,is_bottom_widget_visible:r()})})))};Ee.propTypes={barriers_array:o().array,BottomWidgets:o().node,chart_type:o().string,end_epoch:o().number,granularity:o().number,InfoBox:o().node,is_mobile:o().bool,is_socket_opened:o().bool,is_static_chart:o().bool,margin:o().number,markers_array:o().array,replay_controls:o().object,scroll_to_epoch:o().number,settings:o().object,start_epoch:o().number,symbol:o().string,contract_info:o().object,all_ticks:o().array,wsForget:o().func,wsForgetStream:o().func,wsSendRequest:o().func,wsSubscribe:o().func,shouldFetchTickHistory:o().bool};var Ce=(0,_.$j)((function(e){var t=e.modules,r=e.ui,n=e.common,o=t.trade,a=t.contract_replay,c=a.contract_store,i=c.contract_config,s="READY"===a.chart_state||"SCROLL_TO_LEFT"===a.chart_state,u="DBot"===(0,l.getPlatformRedirect)(n.app_routing_history).name,_={language:n.current_language.toLowerCase(),theme:r.is_dark_mode_on&&!u?"dark":"light",position:r.is_chart_layout_default?"bottom":"left",countdown:r.is_chart_countdown_visible,assetInformation:!1,isHighestLowestMarkerEnabled:!1};return{end_epoch:i.end_epoch,chart_type:i.chart_type,start_epoch:i.start_epoch,granularity:i.granularity,scroll_to_epoch:s?i.scroll_to_epoch:void 0,settings:_,is_mobile:r.is_mobile,is_socket_opened:n.is_socket_opened,is_digit_contract:c.is_digit_contract,chartStateChange:a.chartStateChange,margin:a.margin,is_static_chart:a.is_static_chart,barriers_array:c.barriers_array,markers_array:c.markers_array,symbol:c.contract_info.underlying,contract_info:c.contract_info,all_ticks:c.contract_info.audit_details.all_ticks,wsForget:o.wsForget,wsSubscribe:o.wsSubscribe,wsSendRequest:o.wsSendRequest,wsForgetStream:o.wsForgetStream}}))(Ee),we=["GetProposalFailure","ContractValidationError"],ke=function(e){var t=e.error_code,r=e.error_message,n=e.match,o=e.history,_=e.has_error,d=e.onMount,m=e.onUnmount,p=e.removeErrorMessage;return a.useEffect((function(){return d(+n.params.contract_id,o),function(){p(),m()}}),[d,m,p,o,n.params.contract_id]),isNaN(n.params.contract_id)?a.createElement(c.Redirect,{to:"/404"}):a.createElement(a.Fragment,null,_?a.createElement(s.default,{message:r,is_dialog:we.includes(t),redirect_label:we.includes(t)?(0,u.localize)("Ok"):(0,u.localize)("Go back to trading"),redirectOnClick:function(){return o.push(l.routes.trade)},should_show_refresh:!1}):a.createElement(i.Z,{in:!_,timeout:400,classNames:{enter:"contract--enter",enterDone:"contract--enter-done",exit:"contract--exit"},unmountOnExit:!0},a.createElement(ve,{contract_id:+n.params.contract_id,key:+n.params.contract_id})))};ke.propTypes={error_message:o().string,error_code:o().string,has_error:o().bool,history:o().object,is_mobile:o().bool,match:o().object,onMount:o().func,onUnmount:o().func,removeErrorMessage:o().func,symbol:o().string};const Se=(0,c.withRouter)((0,_.$j)((function(e){var t=e.modules,r=e.ui;return{error_message:t.contract_replay.error_message,error_code:t.contract_replay.error_code,has_error:t.contract_replay.has_error,onMount:t.contract_replay.setAccountSwitcherListener,onUnmount:t.contract_replay.removeAccountSwitcherListener,removeErrorMessage:t.contract_replay.removeErrorMessage,symbol:t.contract_replay.contract_info.underlying,is_mobile:r.is_mobile}}))(ke))}}]);