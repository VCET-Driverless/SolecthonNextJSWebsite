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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! gsap */ \"(app-pages-browser)/./node_modules/gsap/index.js\");\n/* harmony import */ var gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! gsap/ScrollTrigger */ \"(app-pages-browser)/./node_modules/gsap/ScrollTrigger.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\ngsap__WEBPACK_IMPORTED_MODULE_2__.gsap.registerPlugin(gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_3__.ScrollTrigger);\nconst ScrollTracker = ()=>{\n    _s();\n    const [scrollValue, setScrollValue] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const scrollContainerRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const [mvalue, setmvalue] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(1);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const scrollContainer = scrollContainerRef.current;\n        // Function to update the scroll value\n        const updateScrollValue = ()=>{\n            setScrollValue(scrollContainer.scrollTop);\n            console.log(scrollValue);\n            let scvalue = Math.floor(scrollValue / 30);\n            if (scvalue > 33) scvalue = 33;\n            if (scvalue < 1) scvalue = 1;\n            setmvalue(scvalue);\n            console.log(mvalue);\n        };\n        // Initialize ScrollTrigger\n        gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_3__.ScrollTrigger.create({\n            trigger: \".hell\",\n            start: \"top top\",\n            markers: true,\n            end: \"+=1000\",\n            scrub: 0.5,\n            scroller: scrollContainer,\n            onUpdate: (self)=>{\n                updateScrollValue();\n            }\n        });\n        // Clean up ScrollTrigger on component unmount\n        return ()=>{\n            gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_3__.ScrollTrigger.killAll();\n        };\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        ref: scrollContainerRef,\n        style: {\n            height: \"100vh\",\n            overflowY: \"scroll\"\n        },\n        className: \"flex items-center justify-center \",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: \"fixed top-10 z-50  text-pink-600\",\n                children: [\n                    \"Scroll Value: \",\n                    scrollValue\n                ]\n            }, void 0, true, {\n                fileName: \"/home/ap/Documents/SolecthonWebsiteNext/solectho-website-next/src/app/Carview/page.tsx\",\n                lineNumber: 53,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"h-[400vh]  \"\n            }, void 0, false, {\n                fileName: \"/home/ap/Documents/SolecthonWebsiteNext/solectho-website-next/src/app/Carview/page.tsx\",\n                lineNumber: 55,\n                columnNumber: 9\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"h-[400vh] \",\n                children: \" \"\n            }, void 0, false, {\n                fileName: \"/home/ap/Documents/SolecthonWebsiteNext/solectho-website-next/src/app/Carview/page.tsx\",\n                lineNumber: 56,\n                columnNumber: 9\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                className: \"sticky top-0 left-0 hell h-screen w-screen\",\n                src: \"/images/animatedshow/ezgif-frame-0\".concat(Math.floor(scrollValue / 33) + 1 > 33 ? 33 : Math.floor(scrollValue / 33) + 1, \".jpg\")\n            }, void 0, false, {\n                fileName: \"/home/ap/Documents/SolecthonWebsiteNext/solectho-website-next/src/app/Carview/page.tsx\",\n                lineNumber: 57,\n                columnNumber: 9\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/ap/Documents/SolecthonWebsiteNext/solectho-website-next/src/app/Carview/page.tsx\",\n        lineNumber: 48,\n        columnNumber: 7\n    }, undefined);\n};\n_s(ScrollTracker, \"7Up3GQfS8tKMFsdJ0lV4xpB+Edc=\");\n_c = ScrollTracker;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ScrollTracker);\nvar _c;\n$RefreshReg$(_c, \"ScrollTracker\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvQ2Fydmlldy9wYWdlLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUMyRDtBQUMvQjtBQUN1QjtBQUVuREksc0NBQUlBLENBQUNFLGNBQWMsQ0FBQ0QsNkRBQWFBO0FBRWpDLE1BQU1FLGdCQUFnQjs7SUFDcEIsTUFBTSxDQUFDQyxhQUFhQyxlQUFlLEdBQUdQLCtDQUFRQSxDQUFDO0lBQy9DLE1BQU1RLHFCQUFxQlAsNkNBQU1BLENBQUM7SUFDbEMsTUFBTSxDQUFDUSxRQUFPQyxVQUFVLEdBQUNWLCtDQUFRQSxDQUFDO0lBQ2xDRCxnREFBU0EsQ0FBQztRQUNSLE1BQU1ZLGtCQUFrQkgsbUJBQW1CSSxPQUFPO1FBRWxELHNDQUFzQztRQUN0QyxNQUFNQyxvQkFBb0I7WUFDeEJOLGVBQWVJLGdCQUFnQkcsU0FBUztZQUN4Q0MsUUFBUUMsR0FBRyxDQUFDVjtZQUNaLElBQUlXLFVBQVFDLEtBQUtDLEtBQUssQ0FBQ2IsY0FBWTtZQUNuQyxJQUFHVyxVQUFVLElBQUlBLFVBQVE7WUFDekIsSUFBR0EsVUFBVSxHQUFHQSxVQUFRO1lBQ3hCUCxVQUFVTztZQUNWRixRQUFRQyxHQUFHLENBQUNQO1FBQ2Q7UUFFQSwyQkFBMkI7UUFDM0JOLDZEQUFhQSxDQUFDaUIsTUFBTSxDQUFDO1lBQ25CQyxTQUFTO1lBRVRDLE9BQU87WUFDUEMsU0FBUztZQUNUQyxLQUFLO1lBQ0xDLE9BQU07WUFDTkMsVUFBVWY7WUFDVmdCLFVBQVUsQ0FBQ0M7Z0JBQ1RmO1lBQ0Y7UUFDRjtRQUVBLDhDQUE4QztRQUM5QyxPQUFPO1lBQ0xWLDZEQUFhQSxDQUFDMEIsT0FBTztRQUN2QjtJQUNGLEdBQUcsRUFBRTtJQUVMLHFCQUVJLDhEQUFDQztRQUNDQyxLQUFLdkI7UUFDTHdCLE9BQU87WUFBRUMsUUFBUTtZQUFTQyxXQUFXO1FBQVM7UUFDOUNDLFdBQVU7OzBCQUVaLDhEQUFDQztnQkFBRUQsV0FBVTs7b0JBQW1DO29CQUFlN0I7Ozs7Ozs7MEJBRTdELDhEQUFDd0I7Z0JBQUlLLFdBQVU7Ozs7OzswQkFDZiw4REFBQ0w7Z0JBQUlLLFdBQVU7MEJBQWE7Ozs7OzswQkFDNUIsOERBQUNFO2dCQUFLRixXQUFVO2dCQUE2Q0csS0FBSyxxQ0FBK0csT0FBMUUsS0FBTW5CLEtBQUssQ0FBQ2IsY0FBWSxNQUFJLElBQUssS0FBSyxLQUFNWSxLQUFLQyxLQUFLLENBQUNiLGNBQVksTUFBSSxHQUFHOzs7Ozs7Ozs7Ozs7QUFLekw7R0F0RE1EO0tBQUFBO0FBd0ROLCtEQUFlQSxhQUFhQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvQ2Fydmlldy9wYWdlLnRzeD8xOTJlIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50J1xuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUsIHVzZVJlZiB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGdzYXAgfSBmcm9tICdnc2FwJztcbmltcG9ydCB7IFNjcm9sbFRyaWdnZXIgfSBmcm9tICdnc2FwL1Njcm9sbFRyaWdnZXInO1xuXG5nc2FwLnJlZ2lzdGVyUGx1Z2luKFNjcm9sbFRyaWdnZXIpO1xuXG5jb25zdCBTY3JvbGxUcmFja2VyID0gKCkgPT4ge1xuICBjb25zdCBbc2Nyb2xsVmFsdWUsIHNldFNjcm9sbFZhbHVlXSA9IHVzZVN0YXRlKDApO1xuICBjb25zdCBzY3JvbGxDb250YWluZXJSZWYgPSB1c2VSZWYobnVsbCk7XG4gIGNvbnN0IFttdmFsdWUsc2V0bXZhbHVlXT11c2VTdGF0ZSgxKTtcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBzY3JvbGxDb250YWluZXIgPSBzY3JvbGxDb250YWluZXJSZWYuY3VycmVudDtcbiAgICBcbiAgICAvLyBGdW5jdGlvbiB0byB1cGRhdGUgdGhlIHNjcm9sbCB2YWx1ZVxuICAgIGNvbnN0IHVwZGF0ZVNjcm9sbFZhbHVlID0gKCkgPT4ge1xuICAgICAgc2V0U2Nyb2xsVmFsdWUoc2Nyb2xsQ29udGFpbmVyLnNjcm9sbFRvcCk7XG4gICAgICBjb25zb2xlLmxvZyhzY3JvbGxWYWx1ZSk7XG4gICAgICBsZXQgc2N2YWx1ZT1NYXRoLmZsb29yKHNjcm9sbFZhbHVlLzMwKTtcbiAgICAgIGlmKHNjdmFsdWUgPiAzMykgc2N2YWx1ZT0zMztcbiAgICAgIGlmKHNjdmFsdWUgPCAxKSBzY3ZhbHVlPTE7XG4gICAgICBzZXRtdmFsdWUoc2N2YWx1ZSlcbiAgICAgIGNvbnNvbGUubG9nKG12YWx1ZSk7XG4gICAgfTtcblxuICAgIC8vIEluaXRpYWxpemUgU2Nyb2xsVHJpZ2dlclxuICAgIFNjcm9sbFRyaWdnZXIuY3JlYXRlKHtcbiAgICAgIHRyaWdnZXI6IFwiLmhlbGxcIixcbiAgICAgIFxuICAgICAgc3RhcnQ6ICd0b3AgdG9wJyxcbiAgICAgIG1hcmtlcnM6IHRydWUsXG4gICAgICBlbmQ6ICcrPTEwMDAnLFxuICAgICAgc2NydWI6MC41LFxuICAgICAgc2Nyb2xsZXI6IHNjcm9sbENvbnRhaW5lcixcbiAgICAgIG9uVXBkYXRlOiAoc2VsZikgPT4ge1xuICAgICAgICB1cGRhdGVTY3JvbGxWYWx1ZSgpO1xuICAgICAgfSxcbiAgICB9KTtcblxuICAgIC8vIENsZWFuIHVwIFNjcm9sbFRyaWdnZXIgb24gY29tcG9uZW50IHVubW91bnRcbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgU2Nyb2xsVHJpZ2dlci5raWxsQWxsKCk7XG4gICAgfTtcbiAgfSwgW10pO1xuXG4gIHJldHVybiAoXG4gICAgXG4gICAgICA8ZGl2XG4gICAgICAgIHJlZj17c2Nyb2xsQ29udGFpbmVyUmVmfVxuICAgICAgICBzdHlsZT17eyBoZWlnaHQ6ICcxMDB2aCcsIG92ZXJmbG93WTogJ3Njcm9sbCcgfX1cbiAgICAgICAgY2xhc3NOYW1lPSdmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciAnXG4gICAgICA+XG4gICAgICA8cCBjbGFzc05hbWU9J2ZpeGVkIHRvcC0xMCB6LTUwICB0ZXh0LXBpbmstNjAwJz5TY3JvbGwgVmFsdWU6IHtzY3JvbGxWYWx1ZX08L3A+XG4gICAgICAgXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdoLVs0MDB2aF0gICc+PC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdoLVs0MDB2aF0gJz4gPC9kaXY+XG4gICAgICAgIDxpbWcgIGNsYXNzTmFtZT0nc3RpY2t5IHRvcC0wIGxlZnQtMCBoZWxsIGgtc2NyZWVuIHctc2NyZWVuJyBzcmM9e2AvaW1hZ2VzL2FuaW1hdGVkc2hvdy9lemdpZi1mcmFtZS0wJHsoTWF0aC5mbG9vcihzY3JvbGxWYWx1ZS8zMykrMSkgPiAzMyA/IDMzIDogKE1hdGguZmxvb3Ioc2Nyb2xsVmFsdWUvMzMpKzEpfS5qcGdgfSAvPlxuICAgICAgPC9kaXY+XG4gICAgXG4gICBcbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFNjcm9sbFRyYWNrZXI7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsInVzZVJlZiIsImdzYXAiLCJTY3JvbGxUcmlnZ2VyIiwicmVnaXN0ZXJQbHVnaW4iLCJTY3JvbGxUcmFja2VyIiwic2Nyb2xsVmFsdWUiLCJzZXRTY3JvbGxWYWx1ZSIsInNjcm9sbENvbnRhaW5lclJlZiIsIm12YWx1ZSIsInNldG12YWx1ZSIsInNjcm9sbENvbnRhaW5lciIsImN1cnJlbnQiLCJ1cGRhdGVTY3JvbGxWYWx1ZSIsInNjcm9sbFRvcCIsImNvbnNvbGUiLCJsb2ciLCJzY3ZhbHVlIiwiTWF0aCIsImZsb29yIiwiY3JlYXRlIiwidHJpZ2dlciIsInN0YXJ0IiwibWFya2VycyIsImVuZCIsInNjcnViIiwic2Nyb2xsZXIiLCJvblVwZGF0ZSIsInNlbGYiLCJraWxsQWxsIiwiZGl2IiwicmVmIiwic3R5bGUiLCJoZWlnaHQiLCJvdmVyZmxvd1kiLCJjbGFzc05hbWUiLCJwIiwiaW1nIiwic3JjIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/Carview/page.tsx\n"));

/***/ })

});