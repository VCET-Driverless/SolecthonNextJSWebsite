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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! gsap */ \"(app-pages-browser)/./node_modules/gsap/index.js\");\n/* harmony import */ var gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! gsap/ScrollTrigger */ \"(app-pages-browser)/./node_modules/gsap/ScrollTrigger.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\ngsap__WEBPACK_IMPORTED_MODULE_2__.gsap.registerPlugin(gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_3__.ScrollTrigger);\nconst ScrollTracker = ()=>{\n    _s();\n    const [scrollValue, setScrollValue] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const scrollContainerRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const [mvalue, setmvalue] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(1);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const scrollContainer = scrollContainerRef.current;\n        // Function to update the scroll value\n        const updateScrollValue = ()=>{\n            setScrollValue(scrollContainer.scrollTop);\n            console.log(scrollValue);\n            let scvalue = Math.floor(scrollValue / 30);\n            if (scvalue > 33) scvalue = 33;\n            if (scvalue < 1) scvalue = 1;\n            setmvalue(scvalue);\n            console.log(mvalue);\n        };\n        // Initialize ScrollTrigger\n        gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_3__.ScrollTrigger.create({\n            trigger: \".hell\",\n            start: \"top top\",\n            markers: true,\n            end: \"+=1000\",\n            scrub: 0.5,\n            scroller: scrollContainer,\n            onUpdate: (self)=>{\n                updateScrollValue();\n            }\n        });\n        // Clean up ScrollTrigger on component unmount\n        return ()=>{\n            gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_3__.ScrollTrigger.killAll();\n        };\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        ref: scrollContainerRef,\n        style: {\n            height: \"100vh\",\n            overflowY: \"scroll\"\n        },\n        className: \"flex items-center justify-center overflow-hidden\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: \"fixed top-10 z-50  text-pink-600\",\n                children: [\n                    \"Scroll Value: \",\n                    scrollValue\n                ]\n            }, void 0, true, {\n                fileName: \"/home/ap/Documents/SolecthonWebsiteNext/solectho-website-next/src/app/Carview/page.tsx\",\n                lineNumber: 53,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"h-[3000px] \"\n            }, void 0, false, {\n                fileName: \"/home/ap/Documents/SolecthonWebsiteNext/solectho-website-next/src/app/Carview/page.tsx\",\n                lineNumber: 55,\n                columnNumber: 9\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                className: \"sticky top-0 hell h-screen w-screen\",\n                src: \"/images/animatedshow/ezgif-frame-0\".concat(Math.floor(scrollValue / 33) + 1 > 33 ? 33 : Math.floor(scrollValue / 33) + 1, \".jpg\")\n            }, void 0, false, {\n                fileName: \"/home/ap/Documents/SolecthonWebsiteNext/solectho-website-next/src/app/Carview/page.tsx\",\n                lineNumber: 56,\n                columnNumber: 9\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"h-[300vh] \"\n            }, void 0, false, {\n                fileName: \"/home/ap/Documents/SolecthonWebsiteNext/solectho-website-next/src/app/Carview/page.tsx\",\n                lineNumber: 57,\n                columnNumber: 9\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/ap/Documents/SolecthonWebsiteNext/solectho-website-next/src/app/Carview/page.tsx\",\n        lineNumber: 48,\n        columnNumber: 7\n    }, undefined);\n};\n_s(ScrollTracker, \"7Up3GQfS8tKMFsdJ0lV4xpB+Edc=\");\n_c = ScrollTracker;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ScrollTracker);\nvar _c;\n$RefreshReg$(_c, \"ScrollTracker\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvQ2Fydmlldy9wYWdlLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUMyRDtBQUMvQjtBQUN1QjtBQUVuREksc0NBQUlBLENBQUNFLGNBQWMsQ0FBQ0QsNkRBQWFBO0FBRWpDLE1BQU1FLGdCQUFnQjs7SUFDcEIsTUFBTSxDQUFDQyxhQUFhQyxlQUFlLEdBQUdQLCtDQUFRQSxDQUFDO0lBQy9DLE1BQU1RLHFCQUFxQlAsNkNBQU1BLENBQUM7SUFDbEMsTUFBTSxDQUFDUSxRQUFPQyxVQUFVLEdBQUNWLCtDQUFRQSxDQUFDO0lBQ2xDRCxnREFBU0EsQ0FBQztRQUNSLE1BQU1ZLGtCQUFrQkgsbUJBQW1CSSxPQUFPO1FBRWxELHNDQUFzQztRQUN0QyxNQUFNQyxvQkFBb0I7WUFDeEJOLGVBQWVJLGdCQUFnQkcsU0FBUztZQUN4Q0MsUUFBUUMsR0FBRyxDQUFDVjtZQUNaLElBQUlXLFVBQVFDLEtBQUtDLEtBQUssQ0FBQ2IsY0FBWTtZQUNuQyxJQUFHVyxVQUFVLElBQUlBLFVBQVE7WUFDekIsSUFBR0EsVUFBVSxHQUFHQSxVQUFRO1lBQ3hCUCxVQUFVTztZQUNWRixRQUFRQyxHQUFHLENBQUNQO1FBQ2Q7UUFFQSwyQkFBMkI7UUFDM0JOLDZEQUFhQSxDQUFDaUIsTUFBTSxDQUFDO1lBQ25CQyxTQUFTO1lBRVRDLE9BQU87WUFDUEMsU0FBUztZQUNUQyxLQUFLO1lBQ0xDLE9BQU07WUFDTkMsVUFBVWY7WUFDVmdCLFVBQVUsQ0FBQ0M7Z0JBQ1RmO1lBQ0Y7UUFDRjtRQUVBLDhDQUE4QztRQUM5QyxPQUFPO1lBQ0xWLDZEQUFhQSxDQUFDMEIsT0FBTztRQUN2QjtJQUNGLEdBQUcsRUFBRTtJQUVMLHFCQUVJLDhEQUFDQztRQUNDQyxLQUFLdkI7UUFDTHdCLE9BQU87WUFBRUMsUUFBUTtZQUFTQyxXQUFXO1FBQVM7UUFDOUNDLFdBQVU7OzBCQUVaLDhEQUFDQztnQkFBRUQsV0FBVTs7b0JBQW1DO29CQUFlN0I7Ozs7Ozs7MEJBRTdELDhEQUFDd0I7Z0JBQUlLLFdBQVU7Ozs7OzswQkFDZiw4REFBQ0U7Z0JBQUtGLFdBQVU7Z0JBQXNDRyxLQUFLLHFDQUErRyxPQUExRSxLQUFNbkIsS0FBSyxDQUFDYixjQUFZLE1BQUksSUFBSyxLQUFLLEtBQU1ZLEtBQUtDLEtBQUssQ0FBQ2IsY0FBWSxNQUFJLEdBQUc7Ozs7OzswQkFDMUssOERBQUN3QjtnQkFBSUssV0FBVTs7Ozs7Ozs7Ozs7O0FBS3ZCO0dBdERNOUI7S0FBQUE7QUF3RE4sK0RBQWVBLGFBQWFBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9DYXJ2aWV3L3BhZ2UudHN4PzE5MmUiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnXG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSwgdXNlUmVmIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgZ3NhcCB9IGZyb20gJ2dzYXAnO1xuaW1wb3J0IHsgU2Nyb2xsVHJpZ2dlciB9IGZyb20gJ2dzYXAvU2Nyb2xsVHJpZ2dlcic7XG5cbmdzYXAucmVnaXN0ZXJQbHVnaW4oU2Nyb2xsVHJpZ2dlcik7XG5cbmNvbnN0IFNjcm9sbFRyYWNrZXIgPSAoKSA9PiB7XG4gIGNvbnN0IFtzY3JvbGxWYWx1ZSwgc2V0U2Nyb2xsVmFsdWVdID0gdXNlU3RhdGUoMCk7XG4gIGNvbnN0IHNjcm9sbENvbnRhaW5lclJlZiA9IHVzZVJlZihudWxsKTtcbiAgY29uc3QgW212YWx1ZSxzZXRtdmFsdWVdPXVzZVN0YXRlKDEpO1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IHNjcm9sbENvbnRhaW5lciA9IHNjcm9sbENvbnRhaW5lclJlZi5jdXJyZW50O1xuICAgIFxuICAgIC8vIEZ1bmN0aW9uIHRvIHVwZGF0ZSB0aGUgc2Nyb2xsIHZhbHVlXG4gICAgY29uc3QgdXBkYXRlU2Nyb2xsVmFsdWUgPSAoKSA9PiB7XG4gICAgICBzZXRTY3JvbGxWYWx1ZShzY3JvbGxDb250YWluZXIuc2Nyb2xsVG9wKTtcbiAgICAgIGNvbnNvbGUubG9nKHNjcm9sbFZhbHVlKTtcbiAgICAgIGxldCBzY3ZhbHVlPU1hdGguZmxvb3Ioc2Nyb2xsVmFsdWUvMzApO1xuICAgICAgaWYoc2N2YWx1ZSA+IDMzKSBzY3ZhbHVlPTMzO1xuICAgICAgaWYoc2N2YWx1ZSA8IDEpIHNjdmFsdWU9MTtcbiAgICAgIHNldG12YWx1ZShzY3ZhbHVlKVxuICAgICAgY29uc29sZS5sb2cobXZhbHVlKTtcbiAgICB9O1xuXG4gICAgLy8gSW5pdGlhbGl6ZSBTY3JvbGxUcmlnZ2VyXG4gICAgU2Nyb2xsVHJpZ2dlci5jcmVhdGUoe1xuICAgICAgdHJpZ2dlcjogXCIuaGVsbFwiLFxuICAgICAgXG4gICAgICBzdGFydDogJ3RvcCB0b3AnLFxuICAgICAgbWFya2VyczogdHJ1ZSxcbiAgICAgIGVuZDogJys9MTAwMCcsXG4gICAgICBzY3J1YjowLjUsXG4gICAgICBzY3JvbGxlcjogc2Nyb2xsQ29udGFpbmVyLFxuICAgICAgb25VcGRhdGU6IChzZWxmKSA9PiB7XG4gICAgICAgIHVwZGF0ZVNjcm9sbFZhbHVlKCk7XG4gICAgICB9LFxuICAgIH0pO1xuXG4gICAgLy8gQ2xlYW4gdXAgU2Nyb2xsVHJpZ2dlciBvbiBjb21wb25lbnQgdW5tb3VudFxuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICBTY3JvbGxUcmlnZ2VyLmtpbGxBbGwoKTtcbiAgICB9O1xuICB9LCBbXSk7XG5cbiAgcmV0dXJuIChcbiAgICBcbiAgICAgIDxkaXZcbiAgICAgICAgcmVmPXtzY3JvbGxDb250YWluZXJSZWZ9XG4gICAgICAgIHN0eWxlPXt7IGhlaWdodDogJzEwMHZoJywgb3ZlcmZsb3dZOiAnc2Nyb2xsJyB9fVxuICAgICAgICBjbGFzc05hbWU9J2ZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIG92ZXJmbG93LWhpZGRlbidcbiAgICAgID5cbiAgICAgIDxwIGNsYXNzTmFtZT0nZml4ZWQgdG9wLTEwIHotNTAgIHRleHQtcGluay02MDAnPlNjcm9sbCBWYWx1ZToge3Njcm9sbFZhbHVlfTwvcD5cbiAgICAgICBcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2gtWzMwMDBweF0gJz48L2Rpdj5cbiAgICAgICAgPGltZyAgY2xhc3NOYW1lPSdzdGlja3kgdG9wLTAgaGVsbCBoLXNjcmVlbiB3LXNjcmVlbicgc3JjPXtgL2ltYWdlcy9hbmltYXRlZHNob3cvZXpnaWYtZnJhbWUtMCR7KE1hdGguZmxvb3Ioc2Nyb2xsVmFsdWUvMzMpKzEpID4gMzMgPyAzMyA6IChNYXRoLmZsb29yKHNjcm9sbFZhbHVlLzMzKSsxKX0uanBnYH0gLz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2gtWzMwMHZoXSAnPjwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgXG4gICBcbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFNjcm9sbFRyYWNrZXI7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsInVzZVJlZiIsImdzYXAiLCJTY3JvbGxUcmlnZ2VyIiwicmVnaXN0ZXJQbHVnaW4iLCJTY3JvbGxUcmFja2VyIiwic2Nyb2xsVmFsdWUiLCJzZXRTY3JvbGxWYWx1ZSIsInNjcm9sbENvbnRhaW5lclJlZiIsIm12YWx1ZSIsInNldG12YWx1ZSIsInNjcm9sbENvbnRhaW5lciIsImN1cnJlbnQiLCJ1cGRhdGVTY3JvbGxWYWx1ZSIsInNjcm9sbFRvcCIsImNvbnNvbGUiLCJsb2ciLCJzY3ZhbHVlIiwiTWF0aCIsImZsb29yIiwiY3JlYXRlIiwidHJpZ2dlciIsInN0YXJ0IiwibWFya2VycyIsImVuZCIsInNjcnViIiwic2Nyb2xsZXIiLCJvblVwZGF0ZSIsInNlbGYiLCJraWxsQWxsIiwiZGl2IiwicmVmIiwic3R5bGUiLCJoZWlnaHQiLCJvdmVyZmxvd1kiLCJjbGFzc05hbWUiLCJwIiwiaW1nIiwic3JjIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/Carview/page.tsx\n"));

/***/ })

});