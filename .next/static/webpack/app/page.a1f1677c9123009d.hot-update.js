"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./src/app/Carview/page.tsx":
/*!**********************************!*\
  !*** ./src/app/Carview/page.tsx ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! gsap */ \"(app-pages-browser)/./node_modules/gsap/index.js\");\n/* harmony import */ var gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! gsap/ScrollTrigger */ \"(app-pages-browser)/./node_modules/gsap/ScrollTrigger.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\ngsap__WEBPACK_IMPORTED_MODULE_2__.gsap.registerPlugin(gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_3__.ScrollTrigger);\nconst ScrollTracker = ()=>{\n    _s();\n    const [scrollValue, setScrollValue] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const scrollContainerRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const [mvalue, setmvalue] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(1);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const scrollContainer = scrollContainerRef.current;\n        // Function to update the scroll value\n        const updateScrollValue = ()=>{\n            setScrollValue(scrollContainer.scrollTop);\n            console.log(scrollValue);\n            let scvalue = Math.floor(scrollValue / 30);\n            if (scvalue > 33) scvalue = 33;\n            if (scvalue < 1) scvalue = 1;\n            setmvalue(scvalue);\n            console.log(mvalue);\n        };\n        // Initialize ScrollTrigger\n        gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_3__.ScrollTrigger.create({\n            trigger: \".hell\",\n            start: \"top top\",\n            end: \"+=1000\",\n            scrub: 0.5,\n            scroller: scrollContainer,\n            onUpdate: (self)=>{\n                updateScrollValue();\n            }\n        });\n        // Clean up ScrollTrigger on component unmount\n        return ()=>{\n            gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_3__.ScrollTrigger.killAll();\n        };\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        ref: scrollContainerRef,\n        style: {\n            height: \"100vh\",\n            overflowY: \"scroll\"\n        },\n        className: \"flex items-center justify-center \",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"h-[400vh]  \",\n                children: \"a\"\n            }, void 0, false, {\n                fileName: \"/home/ap/Documents/SolecthonWebsiteNext/solectho-website-next/src/app/Carview/page.tsx\",\n                lineNumber: 54,\n                columnNumber: 9\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"h-[400vh] \",\n                children: \" \"\n            }, void 0, false, {\n                fileName: \"/home/ap/Documents/SolecthonWebsiteNext/solectho-website-next/src/app/Carview/page.tsx\",\n                lineNumber: 55,\n                columnNumber: 9\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                className: \"sticky z-0 top-0 left-0 h-screen w-screen transition-transform duration-500 \".concat(scroll ? \"-translate-x-full\" : \"translate-x-0\"),\n                src: \"/images/animatedshow/ezgif-frame-0\".concat(Math.floor(scrollValue / 33) + 1 > 33 ? 33 : Math.floor(scrollValue / 33) + 1, \".jpg\")\n            }, void 0, false, {\n                fileName: \"/home/ap/Documents/SolecthonWebsiteNext/solectho-website-next/src/app/Carview/page.tsx\",\n                lineNumber: 56,\n                columnNumber: 9\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/ap/Documents/SolecthonWebsiteNext/solectho-website-next/src/app/Carview/page.tsx\",\n        lineNumber: 47,\n        columnNumber: 7\n    }, undefined);\n};\n_s(ScrollTracker, \"7Up3GQfS8tKMFsdJ0lV4xpB+Edc=\");\n_c = ScrollTracker;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ScrollTracker);\nvar _c;\n$RefreshReg$(_c, \"ScrollTracker\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvQ2Fydmlldy9wYWdlLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUMyRDtBQUMvQjtBQUN1QjtBQUVuREksc0NBQUlBLENBQUNFLGNBQWMsQ0FBQ0QsNkRBQWFBO0FBRWpDLE1BQU1FLGdCQUFnQjs7SUFDcEIsTUFBTSxDQUFDQyxhQUFhQyxlQUFlLEdBQUdQLCtDQUFRQSxDQUFDO0lBQy9DLE1BQU1RLHFCQUFxQlAsNkNBQU1BLENBQUM7SUFDbEMsTUFBTSxDQUFDUSxRQUFPQyxVQUFVLEdBQUNWLCtDQUFRQSxDQUFDO0lBQ2xDRCxnREFBU0EsQ0FBQztRQUNSLE1BQU1ZLGtCQUFrQkgsbUJBQW1CSSxPQUFPO1FBRWxELHNDQUFzQztRQUN0QyxNQUFNQyxvQkFBb0I7WUFDeEJOLGVBQWVJLGdCQUFnQkcsU0FBUztZQUN4Q0MsUUFBUUMsR0FBRyxDQUFDVjtZQUNaLElBQUlXLFVBQVFDLEtBQUtDLEtBQUssQ0FBQ2IsY0FBWTtZQUNuQyxJQUFHVyxVQUFVLElBQUlBLFVBQVE7WUFDekIsSUFBR0EsVUFBVSxHQUFHQSxVQUFRO1lBQ3hCUCxVQUFVTztZQUNWRixRQUFRQyxHQUFHLENBQUNQO1FBQ2Q7UUFFQSwyQkFBMkI7UUFDM0JOLDZEQUFhQSxDQUFDaUIsTUFBTSxDQUFDO1lBQ25CQyxTQUFTO1lBRVRDLE9BQU87WUFDUEMsS0FBSztZQUNMQyxPQUFNO1lBQ05DLFVBQVVkO1lBQ1ZlLFVBQVUsQ0FBQ0M7Z0JBQ1RkO1lBQ0Y7UUFDRjtRQUVBLDhDQUE4QztRQUM5QyxPQUFPO1lBQ0xWLDZEQUFhQSxDQUFDeUIsT0FBTztRQUN2QjtJQUNGLEdBQUcsRUFBRTtJQUVMLHFCQUVJLDhEQUFDQztRQUNDQyxLQUFLdEI7UUFDTHVCLE9BQU87WUFBRUMsUUFBUTtZQUFTQyxXQUFXO1FBQVM7UUFDOUNDLFdBQVU7OzBCQUlWLDhEQUFDTDtnQkFBSUssV0FBVTswQkFBYzs7Ozs7OzBCQUM3Qiw4REFBQ0w7Z0JBQUlLLFdBQVU7MEJBQWE7Ozs7OzswQkFDNUIsOERBQUNDO2dCQUFLRCxXQUFXLCtFQUE4SCxPQUEvQ0UsU0FBUyxzQkFBc0I7Z0JBQy9IQyxLQUFLLHFDQUErRyxPQUExRSxLQUFNbEIsS0FBSyxDQUFDYixjQUFZLE1BQUksSUFBSyxLQUFLLEtBQU1ZLEtBQUtDLEtBQUssQ0FBQ2IsY0FBWSxNQUFJLEdBQUc7Ozs7Ozs7Ozs7OztBQUs1SDtHQXRETUQ7S0FBQUE7QUF3RE4sK0RBQWVBLGFBQWFBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9DYXJ2aWV3L3BhZ2UudHN4PzE5MmUiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnXG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSwgdXNlUmVmIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgZ3NhcCB9IGZyb20gJ2dzYXAnO1xuaW1wb3J0IHsgU2Nyb2xsVHJpZ2dlciB9IGZyb20gJ2dzYXAvU2Nyb2xsVHJpZ2dlcic7XG5cbmdzYXAucmVnaXN0ZXJQbHVnaW4oU2Nyb2xsVHJpZ2dlcik7XG5cbmNvbnN0IFNjcm9sbFRyYWNrZXIgPSAoKSA9PiB7XG4gIGNvbnN0IFtzY3JvbGxWYWx1ZSwgc2V0U2Nyb2xsVmFsdWVdID0gdXNlU3RhdGUoMCk7XG4gIGNvbnN0IHNjcm9sbENvbnRhaW5lclJlZiA9IHVzZVJlZihudWxsKTtcbiAgY29uc3QgW212YWx1ZSxzZXRtdmFsdWVdPXVzZVN0YXRlKDEpO1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IHNjcm9sbENvbnRhaW5lciA9IHNjcm9sbENvbnRhaW5lclJlZi5jdXJyZW50O1xuICAgIFxuICAgIC8vIEZ1bmN0aW9uIHRvIHVwZGF0ZSB0aGUgc2Nyb2xsIHZhbHVlXG4gICAgY29uc3QgdXBkYXRlU2Nyb2xsVmFsdWUgPSAoKSA9PiB7XG4gICAgICBzZXRTY3JvbGxWYWx1ZShzY3JvbGxDb250YWluZXIuc2Nyb2xsVG9wKTtcbiAgICAgIGNvbnNvbGUubG9nKHNjcm9sbFZhbHVlKTtcbiAgICAgIGxldCBzY3ZhbHVlPU1hdGguZmxvb3Ioc2Nyb2xsVmFsdWUvMzApO1xuICAgICAgaWYoc2N2YWx1ZSA+IDMzKSBzY3ZhbHVlPTMzO1xuICAgICAgaWYoc2N2YWx1ZSA8IDEpIHNjdmFsdWU9MTtcbiAgICAgIHNldG12YWx1ZShzY3ZhbHVlKVxuICAgICAgY29uc29sZS5sb2cobXZhbHVlKTtcbiAgICB9O1xuXG4gICAgLy8gSW5pdGlhbGl6ZSBTY3JvbGxUcmlnZ2VyXG4gICAgU2Nyb2xsVHJpZ2dlci5jcmVhdGUoe1xuICAgICAgdHJpZ2dlcjogXCIuaGVsbFwiLFxuICAgICAgXG4gICAgICBzdGFydDogJ3RvcCB0b3AnLFxuICAgICAgZW5kOiAnKz0xMDAwJyxcbiAgICAgIHNjcnViOjAuNSxcbiAgICAgIHNjcm9sbGVyOiBzY3JvbGxDb250YWluZXIsXG4gICAgICBvblVwZGF0ZTogKHNlbGYpID0+IHtcbiAgICAgICAgdXBkYXRlU2Nyb2xsVmFsdWUoKTtcbiAgICAgIH0sXG4gICAgfSk7XG5cbiAgICAvLyBDbGVhbiB1cCBTY3JvbGxUcmlnZ2VyIG9uIGNvbXBvbmVudCB1bm1vdW50XG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIFNjcm9sbFRyaWdnZXIua2lsbEFsbCgpO1xuICAgIH07XG4gIH0sIFtdKTtcblxuICByZXR1cm4gKFxuICAgIFxuICAgICAgPGRpdlxuICAgICAgICByZWY9e3Njcm9sbENvbnRhaW5lclJlZn1cbiAgICAgICAgc3R5bGU9e3sgaGVpZ2h0OiAnMTAwdmgnLCBvdmVyZmxvd1k6ICdzY3JvbGwnIH19XG4gICAgICAgIGNsYXNzTmFtZT0nZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgJ1xuICAgICAgPlxuICAgICAgey8qIDxwIGNsYXNzTmFtZT0nZml4ZWQgdG9wLTEwIHotNTAgIHRleHQtcGluay02MDAnPlNjcm9sbCBWYWx1ZToge3Njcm9sbFZhbHVlfTwvcD4gKi99XG4gICAgICAgXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdoLVs0MDB2aF0gICc+YTwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0naC1bNDAwdmhdICc+IDwvZGl2PlxuICAgICAgICA8aW1nICBjbGFzc05hbWU9e2BzdGlja3kgei0wIHRvcC0wIGxlZnQtMCBoLXNjcmVlbiB3LXNjcmVlbiB0cmFuc2l0aW9uLXRyYW5zZm9ybSBkdXJhdGlvbi01MDAgJHtzY3JvbGwgPyAnLXRyYW5zbGF0ZS14LWZ1bGwnIDogJ3RyYW5zbGF0ZS14LTAnfWB9XG4gICAgICAgIHNyYz17YC9pbWFnZXMvYW5pbWF0ZWRzaG93L2V6Z2lmLWZyYW1lLTAkeyhNYXRoLmZsb29yKHNjcm9sbFZhbHVlLzMzKSsxKSA+IDMzID8gMzMgOiAoTWF0aC5mbG9vcihzY3JvbGxWYWx1ZS8zMykrMSl9LmpwZ2B9IC8+XG4gICAgICA8L2Rpdj5cbiAgICBcbiAgIFxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgU2Nyb2xsVHJhY2tlcjtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwidXNlUmVmIiwiZ3NhcCIsIlNjcm9sbFRyaWdnZXIiLCJyZWdpc3RlclBsdWdpbiIsIlNjcm9sbFRyYWNrZXIiLCJzY3JvbGxWYWx1ZSIsInNldFNjcm9sbFZhbHVlIiwic2Nyb2xsQ29udGFpbmVyUmVmIiwibXZhbHVlIiwic2V0bXZhbHVlIiwic2Nyb2xsQ29udGFpbmVyIiwiY3VycmVudCIsInVwZGF0ZVNjcm9sbFZhbHVlIiwic2Nyb2xsVG9wIiwiY29uc29sZSIsImxvZyIsInNjdmFsdWUiLCJNYXRoIiwiZmxvb3IiLCJjcmVhdGUiLCJ0cmlnZ2VyIiwic3RhcnQiLCJlbmQiLCJzY3J1YiIsInNjcm9sbGVyIiwib25VcGRhdGUiLCJzZWxmIiwia2lsbEFsbCIsImRpdiIsInJlZiIsInN0eWxlIiwiaGVpZ2h0Iiwib3ZlcmZsb3dZIiwiY2xhc3NOYW1lIiwiaW1nIiwic2Nyb2xsIiwic3JjIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/Carview/page.tsx\n"));

/***/ })

});