"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/Carview/page",{

/***/ "(app-pages-browser)/./src/app/Carview/page.tsx":
/*!**********************************!*\
  !*** ./src/app/Carview/page.tsx ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! gsap */ \"(app-pages-browser)/./node_modules/gsap/index.js\");\n/* harmony import */ var gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! gsap/ScrollTrigger */ \"(app-pages-browser)/./node_modules/gsap/ScrollTrigger.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\ngsap__WEBPACK_IMPORTED_MODULE_2__.gsap.registerPlugin(gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_3__.ScrollTrigger);\nconst ScrollTracker = ()=>{\n    _s();\n    const [scrollValue, setScrollValue] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const scrollContainerRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const [mvalue, setmvalue] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(1);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const scrollContainer = scrollContainerRef.current;\n        // Function to update the scroll value\n        const updateScrollValue = ()=>{\n            setScrollValue(scrollContainer.scrollTop);\n            let scvalue = Math.floor(scrollValue / 30);\n            scvalue = max;\n            setmvalue(scvalue);\n        };\n        // Initialize ScrollTrigger\n        gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_3__.ScrollTrigger.create({\n            trigger: scrollContainer,\n            start: \"top top\",\n            markers: true,\n            end: \"+=1000\",\n            scrub: 0.5,\n            scroller: scrollContainer,\n            onUpdate: (self)=>{\n                updateScrollValue();\n            }\n        });\n        // Clean up ScrollTrigger on component unmount\n        return ()=>{\n            gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_3__.ScrollTrigger.killAll();\n        };\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"h-screen w-screen bg-slate-500\"\n            }, void 0, false, {\n                fileName: \"/home/ap/Documents/SolecthonWebsiteNext/solectho-website-next/src/app/Carview/page.tsx\",\n                lineNumber: 44,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: \"absoulte top-10\",\n                children: [\n                    \"Scroll Value: \",\n                    scrollValue\n                ]\n            }, void 0, true, {\n                fileName: \"/home/ap/Documents/SolecthonWebsiteNext/solectho-website-next/src/app/Carview/page.tsx\",\n                lineNumber: 45,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                ref: scrollContainerRef,\n                style: {\n                    height: \"100px\",\n                    overflowY: \"scroll\",\n                    border: \"1px solid black\"\n                },\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                    className: \"sticky top-0\",\n                    src: \"/images/animatedshow/ezgif-frame-0\".concat(mvalue, \".jpg\")\n                }, void 0, false, {\n                    fileName: \"/home/ap/Documents/SolecthonWebsiteNext/solectho-website-next/src/app/Carview/page.tsx\",\n                    lineNumber: 51,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/home/ap/Documents/SolecthonWebsiteNext/solectho-website-next/src/app/Carview/page.tsx\",\n                lineNumber: 46,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/ap/Documents/SolecthonWebsiteNext/solectho-website-next/src/app/Carview/page.tsx\",\n        lineNumber: 43,\n        columnNumber: 5\n    }, undefined);\n};\n_s(ScrollTracker, \"7Up3GQfS8tKMFsdJ0lV4xpB+Edc=\");\n_c = ScrollTracker;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ScrollTracker);\nvar _c;\n$RefreshReg$(_c, \"ScrollTracker\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvQ2Fydmlldy9wYWdlLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUMyRDtBQUMvQjtBQUN1QjtBQUVuREksc0NBQUlBLENBQUNFLGNBQWMsQ0FBQ0QsNkRBQWFBO0FBRWpDLE1BQU1FLGdCQUFnQjs7SUFDcEIsTUFBTSxDQUFDQyxhQUFhQyxlQUFlLEdBQUdQLCtDQUFRQSxDQUFDO0lBQy9DLE1BQU1RLHFCQUFxQlAsNkNBQU1BLENBQUM7SUFDbEMsTUFBTSxDQUFDUSxRQUFPQyxVQUFVLEdBQUNWLCtDQUFRQSxDQUFDO0lBQ2xDRCxnREFBU0EsQ0FBQztRQUNSLE1BQU1ZLGtCQUFrQkgsbUJBQW1CSSxPQUFPO1FBRWxELHNDQUFzQztRQUN0QyxNQUFNQyxvQkFBb0I7WUFDeEJOLGVBQWVJLGdCQUFnQkcsU0FBUztZQUN4QyxJQUFJQyxVQUFRQyxLQUFLQyxLQUFLLENBQUNYLGNBQVk7WUFDbkNTLFVBQVFHO1lBQ1JSLFVBQVVLO1FBQ1o7UUFFQSwyQkFBMkI7UUFDM0JaLDZEQUFhQSxDQUFDZ0IsTUFBTSxDQUFDO1lBQ25CQyxTQUFTVDtZQUNUVSxPQUFPO1lBQ1BDLFNBQVM7WUFDVEMsS0FBSztZQUNMQyxPQUFNO1lBQ05DLFVBQVVkO1lBQ1ZlLFVBQVUsQ0FBQ0M7Z0JBQ1RkO1lBQ0Y7UUFDRjtRQUVBLDhDQUE4QztRQUM5QyxPQUFPO1lBQ0xWLDZEQUFhQSxDQUFDeUIsT0FBTztRQUN2QjtJQUNGLEdBQUcsRUFBRTtJQUVMLHFCQUNFLDhEQUFDQzs7MEJBQ0MsOERBQUNBO2dCQUFJQyxXQUFVOzs7Ozs7MEJBQ2YsOERBQUNDO2dCQUFFRCxXQUFVOztvQkFBa0I7b0JBQWV4Qjs7Ozs7OzswQkFDOUMsOERBQUN1QjtnQkFDQ0csS0FBS3hCO2dCQUNMeUIsT0FBTztvQkFBRUMsUUFBUTtvQkFBU0MsV0FBVztvQkFBVUMsUUFBUTtnQkFBa0I7MEJBR3pFLDRFQUFDQztvQkFBS1AsV0FBVTtvQkFBZVEsS0FBSyxxQ0FBNEMsT0FBUDdCLFFBQU87Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSXhGO0dBL0NNSjtLQUFBQTtBQWlETiwrREFBZUEsYUFBYUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL0NhcnZpZXcvcGFnZS50c3g/MTkyZSJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCdcbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlLCB1c2VSZWYgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBnc2FwIH0gZnJvbSAnZ3NhcCc7XG5pbXBvcnQgeyBTY3JvbGxUcmlnZ2VyIH0gZnJvbSAnZ3NhcC9TY3JvbGxUcmlnZ2VyJztcblxuZ3NhcC5yZWdpc3RlclBsdWdpbihTY3JvbGxUcmlnZ2VyKTtcblxuY29uc3QgU2Nyb2xsVHJhY2tlciA9ICgpID0+IHtcbiAgY29uc3QgW3Njcm9sbFZhbHVlLCBzZXRTY3JvbGxWYWx1ZV0gPSB1c2VTdGF0ZSgwKTtcbiAgY29uc3Qgc2Nyb2xsQ29udGFpbmVyUmVmID0gdXNlUmVmKG51bGwpO1xuICBjb25zdCBbbXZhbHVlLHNldG12YWx1ZV09dXNlU3RhdGUoMSk7XG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3Qgc2Nyb2xsQ29udGFpbmVyID0gc2Nyb2xsQ29udGFpbmVyUmVmLmN1cnJlbnQ7XG4gIFxuICAgIC8vIEZ1bmN0aW9uIHRvIHVwZGF0ZSB0aGUgc2Nyb2xsIHZhbHVlXG4gICAgY29uc3QgdXBkYXRlU2Nyb2xsVmFsdWUgPSAoKSA9PiB7XG4gICAgICBzZXRTY3JvbGxWYWx1ZShzY3JvbGxDb250YWluZXIuc2Nyb2xsVG9wKTtcbiAgICAgIGxldCBzY3ZhbHVlPU1hdGguZmxvb3Ioc2Nyb2xsVmFsdWUvMzApO1xuICAgICAgc2N2YWx1ZT1tYXhcbiAgICAgIHNldG12YWx1ZShzY3ZhbHVlKVxuICAgIH07XG5cbiAgICAvLyBJbml0aWFsaXplIFNjcm9sbFRyaWdnZXJcbiAgICBTY3JvbGxUcmlnZ2VyLmNyZWF0ZSh7XG4gICAgICB0cmlnZ2VyOiBzY3JvbGxDb250YWluZXIsXG4gICAgICBzdGFydDogJ3RvcCB0b3AnLFxuICAgICAgbWFya2VyczogdHJ1ZSxcbiAgICAgIGVuZDogJys9MTAwMCcsXG4gICAgICBzY3J1YjowLjUsXG4gICAgICBzY3JvbGxlcjogc2Nyb2xsQ29udGFpbmVyLFxuICAgICAgb25VcGRhdGU6IChzZWxmKSA9PiB7XG4gICAgICAgIHVwZGF0ZVNjcm9sbFZhbHVlKCk7XG4gICAgICB9LFxuICAgIH0pO1xuXG4gICAgLy8gQ2xlYW4gdXAgU2Nyb2xsVHJpZ2dlciBvbiBjb21wb25lbnQgdW5tb3VudFxuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICBTY3JvbGxUcmlnZ2VyLmtpbGxBbGwoKTtcbiAgICB9O1xuICB9LCBbXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9J2gtc2NyZWVuIHctc2NyZWVuIGJnLXNsYXRlLTUwMCc+PC9kaXY+XG4gICAgICA8cCBjbGFzc05hbWU9J2Fic291bHRlIHRvcC0xMCc+U2Nyb2xsIFZhbHVlOiB7c2Nyb2xsVmFsdWV9PC9wPlxuICAgICAgPGRpdlxuICAgICAgICByZWY9e3Njcm9sbENvbnRhaW5lclJlZn1cbiAgICAgICAgc3R5bGU9e3sgaGVpZ2h0OiAnMTAwcHgnLCBvdmVyZmxvd1k6ICdzY3JvbGwnLCBib3JkZXI6ICcxcHggc29saWQgYmxhY2snIH19XG4gICAgICA+XG4gICAgICAgXG4gICAgICAgIDxpbWcgIGNsYXNzTmFtZT0nc3RpY2t5IHRvcC0wJyBzcmM9e2AvaW1hZ2VzL2FuaW1hdGVkc2hvdy9lemdpZi1mcmFtZS0wJHttdmFsdWV9LmpwZ2B9IC8+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFNjcm9sbFRyYWNrZXI7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsInVzZVJlZiIsImdzYXAiLCJTY3JvbGxUcmlnZ2VyIiwicmVnaXN0ZXJQbHVnaW4iLCJTY3JvbGxUcmFja2VyIiwic2Nyb2xsVmFsdWUiLCJzZXRTY3JvbGxWYWx1ZSIsInNjcm9sbENvbnRhaW5lclJlZiIsIm12YWx1ZSIsInNldG12YWx1ZSIsInNjcm9sbENvbnRhaW5lciIsImN1cnJlbnQiLCJ1cGRhdGVTY3JvbGxWYWx1ZSIsInNjcm9sbFRvcCIsInNjdmFsdWUiLCJNYXRoIiwiZmxvb3IiLCJtYXgiLCJjcmVhdGUiLCJ0cmlnZ2VyIiwic3RhcnQiLCJtYXJrZXJzIiwiZW5kIiwic2NydWIiLCJzY3JvbGxlciIsIm9uVXBkYXRlIiwic2VsZiIsImtpbGxBbGwiLCJkaXYiLCJjbGFzc05hbWUiLCJwIiwicmVmIiwic3R5bGUiLCJoZWlnaHQiLCJvdmVyZmxvd1kiLCJib3JkZXIiLCJpbWciLCJzcmMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/Carview/page.tsx\n"));

/***/ })

});