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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! gsap */ \"(app-pages-browser)/./node_modules/gsap/index.js\");\n/* harmony import */ var gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! gsap/ScrollTrigger */ \"(app-pages-browser)/./node_modules/gsap/ScrollTrigger.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\ngsap__WEBPACK_IMPORTED_MODULE_2__.gsap.registerPlugin(gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_3__.ScrollTrigger);\nconst ScrollTracker = ()=>{\n    _s();\n    const [scrollValue, setScrollValue] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const scrollContainerRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const scrollContainer = scrollContainerRef.current;\n        // Function to update the scroll value\n        const updateScrollValue = ()=>{\n            setScrollValue(scrollContainer.scrollTop);\n        };\n        // Initialize ScrollTrigger\n        gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_3__.ScrollTrigger.create({\n            trigger: scrollContainer,\n            start: \"top top\",\n            markers: true,\n            end: \"+=1000\",\n            scrub: 0.5,\n            scroller: scrollContainer,\n            onUpdate: (self)=>{\n                updateScrollValue();\n            }\n        });\n        // Clean up ScrollTrigger on component unmount\n        return ()=>{\n            gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_3__.ScrollTrigger.killAll();\n        };\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: \"absoulte top-10\",\n                children: [\n                    \"Scroll Value: \",\n                    scrollValue\n                ]\n            }, void 0, true, {\n                fileName: \"/home/ap/Documents/SolecthonWebsiteNext/solectho-website-next/src/app/Carview/page.tsx\",\n                lineNumber: 41,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"h-screen w-screen bg-slate-500\"\n            }, void 0, false, {\n                fileName: \"/home/ap/Documents/SolecthonWebsiteNext/solectho-website-next/src/app/Carview/page.tsx\",\n                lineNumber: 42,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                ref: scrollContainerRef,\n                style: {\n                    height: \"300px\",\n                    overflowY: \"scroll\",\n                    border: \"1px solid black\"\n                },\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                    className: \"\",\n                    src: \"\"\n                }, void 0, false, {\n                    fileName: \"/home/ap/Documents/SolecthonWebsiteNext/solectho-website-next/src/app/Carview/page.tsx\",\n                    lineNumber: 48,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/home/ap/Documents/SolecthonWebsiteNext/solectho-website-next/src/app/Carview/page.tsx\",\n                lineNumber: 43,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/ap/Documents/SolecthonWebsiteNext/solectho-website-next/src/app/Carview/page.tsx\",\n        lineNumber: 40,\n        columnNumber: 5\n    }, undefined);\n};\n_s(ScrollTracker, \"StGpIu7k/160M0e8z5seBa1m83U=\");\n_c = ScrollTracker;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ScrollTracker);\nvar _c;\n$RefreshReg$(_c, \"ScrollTracker\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvQ2Fydmlldy9wYWdlLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUMyRDtBQUMvQjtBQUN1QjtBQUVuREksc0NBQUlBLENBQUNFLGNBQWMsQ0FBQ0QsNkRBQWFBO0FBRWpDLE1BQU1FLGdCQUFnQjs7SUFDcEIsTUFBTSxDQUFDQyxhQUFhQyxlQUFlLEdBQUdQLCtDQUFRQSxDQUFDO0lBQy9DLE1BQU1RLHFCQUFxQlAsNkNBQU1BLENBQUM7SUFFbENGLGdEQUFTQSxDQUFDO1FBQ1IsTUFBTVUsa0JBQWtCRCxtQkFBbUJFLE9BQU87UUFFbEQsc0NBQXNDO1FBQ3RDLE1BQU1DLG9CQUFvQjtZQUN4QkosZUFBZUUsZ0JBQWdCRyxTQUFTO1FBQzFDO1FBRUEsMkJBQTJCO1FBQzNCVCw2REFBYUEsQ0FBQ1UsTUFBTSxDQUFDO1lBQ25CQyxTQUFTTDtZQUNUTSxPQUFPO1lBQ1BDLFNBQVM7WUFDVEMsS0FBSztZQUNMQyxPQUFNO1lBQ05DLFVBQVVWO1lBQ1ZXLFVBQVUsQ0FBQ0M7Z0JBQ1RWO1lBQ0Y7UUFDRjtRQUVBLDhDQUE4QztRQUM5QyxPQUFPO1lBQ0xSLDZEQUFhQSxDQUFDbUIsT0FBTztRQUN2QjtJQUNGLEdBQUcsRUFBRTtJQUVMLHFCQUNFLDhEQUFDQzs7MEJBQ0MsOERBQUNDO2dCQUFFQyxXQUFVOztvQkFBa0I7b0JBQWVuQjs7Ozs7OzswQkFDOUMsOERBQUNpQjtnQkFBSUUsV0FBVTs7Ozs7OzBCQUNmLDhEQUFDRjtnQkFDQ0csS0FBS2xCO2dCQUNMbUIsT0FBTztvQkFBRUMsUUFBUTtvQkFBU0MsV0FBVztvQkFBVUMsUUFBUTtnQkFBa0I7MEJBR3pFLDRFQUFDQztvQkFBS04sV0FBVTtvQkFBR08sS0FBSTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJL0I7R0E1Q00zQjtLQUFBQTtBQThDTiwrREFBZUEsYUFBYUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL0NhcnZpZXcvcGFnZS50c3g/MTkyZSJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCdcbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlLCB1c2VSZWYgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBnc2FwIH0gZnJvbSAnZ3NhcCc7XG5pbXBvcnQgeyBTY3JvbGxUcmlnZ2VyIH0gZnJvbSAnZ3NhcC9TY3JvbGxUcmlnZ2VyJztcblxuZ3NhcC5yZWdpc3RlclBsdWdpbihTY3JvbGxUcmlnZ2VyKTtcblxuY29uc3QgU2Nyb2xsVHJhY2tlciA9ICgpID0+IHtcbiAgY29uc3QgW3Njcm9sbFZhbHVlLCBzZXRTY3JvbGxWYWx1ZV0gPSB1c2VTdGF0ZSgwKTtcbiAgY29uc3Qgc2Nyb2xsQ29udGFpbmVyUmVmID0gdXNlUmVmKG51bGwpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3Qgc2Nyb2xsQ29udGFpbmVyID0gc2Nyb2xsQ29udGFpbmVyUmVmLmN1cnJlbnQ7XG5cbiAgICAvLyBGdW5jdGlvbiB0byB1cGRhdGUgdGhlIHNjcm9sbCB2YWx1ZVxuICAgIGNvbnN0IHVwZGF0ZVNjcm9sbFZhbHVlID0gKCkgPT4ge1xuICAgICAgc2V0U2Nyb2xsVmFsdWUoc2Nyb2xsQ29udGFpbmVyLnNjcm9sbFRvcCk7XG4gICAgfTtcblxuICAgIC8vIEluaXRpYWxpemUgU2Nyb2xsVHJpZ2dlclxuICAgIFNjcm9sbFRyaWdnZXIuY3JlYXRlKHtcbiAgICAgIHRyaWdnZXI6IHNjcm9sbENvbnRhaW5lcixcbiAgICAgIHN0YXJ0OiAndG9wIHRvcCcsXG4gICAgICBtYXJrZXJzOiB0cnVlLFxuICAgICAgZW5kOiAnKz0xMDAwJyxcbiAgICAgIHNjcnViOjAuNSxcbiAgICAgIHNjcm9sbGVyOiBzY3JvbGxDb250YWluZXIsXG4gICAgICBvblVwZGF0ZTogKHNlbGYpID0+IHtcbiAgICAgICAgdXBkYXRlU2Nyb2xsVmFsdWUoKTtcbiAgICAgIH0sXG4gICAgfSk7XG5cbiAgICAvLyBDbGVhbiB1cCBTY3JvbGxUcmlnZ2VyIG9uIGNvbXBvbmVudCB1bm1vdW50XG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIFNjcm9sbFRyaWdnZXIua2lsbEFsbCgpO1xuICAgIH07XG4gIH0sIFtdKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8cCBjbGFzc05hbWU9J2Fic291bHRlIHRvcC0xMCc+U2Nyb2xsIFZhbHVlOiB7c2Nyb2xsVmFsdWV9PC9wPlxuICAgICAgPGRpdiBjbGFzc05hbWU9J2gtc2NyZWVuIHctc2NyZWVuIGJnLXNsYXRlLTUwMCc+PC9kaXY+XG4gICAgICA8ZGl2XG4gICAgICAgIHJlZj17c2Nyb2xsQ29udGFpbmVyUmVmfVxuICAgICAgICBzdHlsZT17eyBoZWlnaHQ6ICczMDBweCcsIG92ZXJmbG93WTogJ3Njcm9sbCcsIGJvcmRlcjogJzFweCBzb2xpZCBibGFjaycgfX1cbiAgICAgID5cbiAgICAgICBcbiAgICAgICAgPGltZyAgY2xhc3NOYW1lPScnIHNyYz0nJyAvPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBTY3JvbGxUcmFja2VyO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJ1c2VSZWYiLCJnc2FwIiwiU2Nyb2xsVHJpZ2dlciIsInJlZ2lzdGVyUGx1Z2luIiwiU2Nyb2xsVHJhY2tlciIsInNjcm9sbFZhbHVlIiwic2V0U2Nyb2xsVmFsdWUiLCJzY3JvbGxDb250YWluZXJSZWYiLCJzY3JvbGxDb250YWluZXIiLCJjdXJyZW50IiwidXBkYXRlU2Nyb2xsVmFsdWUiLCJzY3JvbGxUb3AiLCJjcmVhdGUiLCJ0cmlnZ2VyIiwic3RhcnQiLCJtYXJrZXJzIiwiZW5kIiwic2NydWIiLCJzY3JvbGxlciIsIm9uVXBkYXRlIiwic2VsZiIsImtpbGxBbGwiLCJkaXYiLCJwIiwiY2xhc3NOYW1lIiwicmVmIiwic3R5bGUiLCJoZWlnaHQiLCJvdmVyZmxvd1kiLCJib3JkZXIiLCJpbWciLCJzcmMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/Carview/page.tsx\n"));

/***/ })

});