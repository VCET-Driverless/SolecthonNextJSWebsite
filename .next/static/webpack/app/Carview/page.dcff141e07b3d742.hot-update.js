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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! gsap */ \"(app-pages-browser)/./node_modules/gsap/index.js\");\n/* harmony import */ var gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! gsap/ScrollTrigger */ \"(app-pages-browser)/./node_modules/gsap/ScrollTrigger.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\ngsap__WEBPACK_IMPORTED_MODULE_2__.gsap.registerPlugin(gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_3__.ScrollTrigger);\nconst ScrollTracker = ()=>{\n    _s();\n    const [scrollValue, setScrollValue] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const scrollContainerRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const [mvalue, setmvalue] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(1);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const scrollContainer = scrollContainerRef.current;\n        // Function to update the scroll value\n        const updateScrollValue = ()=>{\n            setScrollValue(scrollContainer.scrollTop);\n            console.log(scrollValue);\n            let scvalue = Math.floor(scrollValue / 1);\n            if (scvalue > 33) scvalue = 33;\n            if (scvalue < 1) scvalue = 1;\n            console.log(mvalue);\n            setmvalue(scvalue);\n        };\n        // Initialize ScrollTrigger\n        gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_3__.ScrollTrigger.create({\n            trigger: \".hell\",\n            start: \"top top\",\n            markers: true,\n            end: \"+=1000\",\n            scrub: 0.5,\n            scroller: scrollContainer,\n            onUpdate: (self)=>{\n                updateScrollValue();\n            }\n        });\n        // Clean up ScrollTrigger on component unmount\n        return ()=>{\n            gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_3__.ScrollTrigger.killAll();\n        };\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"h-screen w-screen bg-slate-500\"\n            }, void 0, false, {\n                fileName: \"/home/ap/Documents/SolecthonWebsiteNext/solectho-website-next/src/app/Carview/page.tsx\",\n                lineNumber: 48,\n                columnNumber: 10\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                ref: scrollContainerRef,\n                style: {\n                    height: \"100vh\",\n                    overflowY: \"scroll\",\n                    border: \"1px solid black\"\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"absoulte top-10\",\n                        children: [\n                            \"Scroll Value: \",\n                            scrollValue\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/ap/Documents/SolecthonWebsiteNext/solectho-website-next/src/app/Carview/page.tsx\",\n                        lineNumber: 53,\n                        columnNumber: 7\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                        className: \"sticky hell h-screen w-[80%]\",\n                        src: \"/images/animatedshow/ezgif-frame-0\".concat(mvalue, \".jpg\")\n                    }, void 0, false, {\n                        fileName: \"/home/ap/Documents/SolecthonWebsiteNext/solectho-website-next/src/app/Carview/page.tsx\",\n                        lineNumber: 55,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/ap/Documents/SolecthonWebsiteNext/solectho-website-next/src/app/Carview/page.tsx\",\n                lineNumber: 49,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"h-screen w-screen bg-slate-500\"\n            }, void 0, false, {\n                fileName: \"/home/ap/Documents/SolecthonWebsiteNext/solectho-website-next/src/app/Carview/page.tsx\",\n                lineNumber: 57,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/ap/Documents/SolecthonWebsiteNext/solectho-website-next/src/app/Carview/page.tsx\",\n        lineNumber: 47,\n        columnNumber: 5\n    }, undefined);\n};\n_s(ScrollTracker, \"7Up3GQfS8tKMFsdJ0lV4xpB+Edc=\");\n_c = ScrollTracker;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ScrollTracker);\nvar _c;\n$RefreshReg$(_c, \"ScrollTracker\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvQ2Fydmlldy9wYWdlLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUMyRDtBQUMvQjtBQUN1QjtBQUVuREksc0NBQUlBLENBQUNFLGNBQWMsQ0FBQ0QsNkRBQWFBO0FBRWpDLE1BQU1FLGdCQUFnQjs7SUFDcEIsTUFBTSxDQUFDQyxhQUFhQyxlQUFlLEdBQUdQLCtDQUFRQSxDQUFDO0lBQy9DLE1BQU1RLHFCQUFxQlAsNkNBQU1BLENBQUM7SUFDbEMsTUFBTSxDQUFDUSxRQUFPQyxVQUFVLEdBQUNWLCtDQUFRQSxDQUFDO0lBQ2xDRCxnREFBU0EsQ0FBQztRQUNSLE1BQU1ZLGtCQUFrQkgsbUJBQW1CSSxPQUFPO1FBRWxELHNDQUFzQztRQUN0QyxNQUFNQyxvQkFBb0I7WUFDeEJOLGVBQWVJLGdCQUFnQkcsU0FBUztZQUN4Q0MsUUFBUUMsR0FBRyxDQUFDVjtZQUNaLElBQUlXLFVBQVFDLEtBQUtDLEtBQUssQ0FBQ2IsY0FBWTtZQUNuQyxJQUFHVyxVQUFVLElBQUlBLFVBQVE7WUFDekIsSUFBR0EsVUFBVSxHQUFHQSxVQUFRO1lBQ3hCRixRQUFRQyxHQUFHLENBQUNQO1lBQ1pDLFVBQVVPO1FBQ1o7UUFFQSwyQkFBMkI7UUFDM0JkLDZEQUFhQSxDQUFDaUIsTUFBTSxDQUFDO1lBQ25CQyxTQUFTO1lBRVRDLE9BQU87WUFDUEMsU0FBUztZQUNUQyxLQUFLO1lBQ0xDLE9BQU07WUFDTkMsVUFBVWY7WUFDVmdCLFVBQVUsQ0FBQ0M7Z0JBQ1RmO1lBQ0Y7UUFDRjtRQUVBLDhDQUE4QztRQUM5QyxPQUFPO1lBQ0xWLDZEQUFhQSxDQUFDMEIsT0FBTztRQUN2QjtJQUNGLEdBQUcsRUFBRTtJQUVMLHFCQUNFLDhEQUFDQzs7MEJBQ0ksOERBQUNBO2dCQUFJQyxXQUFVOzs7Ozs7MEJBQ2xCLDhEQUFDRDtnQkFDQ0UsS0FBS3hCO2dCQUNMeUIsT0FBTztvQkFBRUMsUUFBUTtvQkFBU0MsV0FBVztvQkFBVUMsUUFBUTtnQkFBa0I7O2tDQUUzRSw4REFBQ0M7d0JBQUVOLFdBQVU7OzRCQUFrQjs0QkFBZXpCOzs7Ozs7O2tDQUU1Qyw4REFBQ2dDO3dCQUFLUCxXQUFVO3dCQUErQlEsS0FBSyxxQ0FBNEMsT0FBUDlCLFFBQU87Ozs7Ozs7Ozs7OzswQkFFbEcsOERBQUNxQjtnQkFBSUMsV0FBVTs7Ozs7Ozs7Ozs7O0FBR3JCO0dBcERNMUI7S0FBQUE7QUFzRE4sK0RBQWVBLGFBQWFBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9DYXJ2aWV3L3BhZ2UudHN4PzE5MmUiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnXG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSwgdXNlUmVmIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgZ3NhcCB9IGZyb20gJ2dzYXAnO1xuaW1wb3J0IHsgU2Nyb2xsVHJpZ2dlciB9IGZyb20gJ2dzYXAvU2Nyb2xsVHJpZ2dlcic7XG5cbmdzYXAucmVnaXN0ZXJQbHVnaW4oU2Nyb2xsVHJpZ2dlcik7XG5cbmNvbnN0IFNjcm9sbFRyYWNrZXIgPSAoKSA9PiB7XG4gIGNvbnN0IFtzY3JvbGxWYWx1ZSwgc2V0U2Nyb2xsVmFsdWVdID0gdXNlU3RhdGUoMCk7XG4gIGNvbnN0IHNjcm9sbENvbnRhaW5lclJlZiA9IHVzZVJlZihudWxsKTtcbiAgY29uc3QgW212YWx1ZSxzZXRtdmFsdWVdPXVzZVN0YXRlKDEpO1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IHNjcm9sbENvbnRhaW5lciA9IHNjcm9sbENvbnRhaW5lclJlZi5jdXJyZW50O1xuICAgIFxuICAgIC8vIEZ1bmN0aW9uIHRvIHVwZGF0ZSB0aGUgc2Nyb2xsIHZhbHVlXG4gICAgY29uc3QgdXBkYXRlU2Nyb2xsVmFsdWUgPSAoKSA9PiB7XG4gICAgICBzZXRTY3JvbGxWYWx1ZShzY3JvbGxDb250YWluZXIuc2Nyb2xsVG9wKTtcbiAgICAgIGNvbnNvbGUubG9nKHNjcm9sbFZhbHVlKTtcbiAgICAgIGxldCBzY3ZhbHVlPU1hdGguZmxvb3Ioc2Nyb2xsVmFsdWUvMSk7XG4gICAgICBpZihzY3ZhbHVlID4gMzMpIHNjdmFsdWU9MzM7XG4gICAgICBpZihzY3ZhbHVlIDwgMSkgc2N2YWx1ZT0xO1xuICAgICAgY29uc29sZS5sb2cobXZhbHVlKTtcbiAgICAgIHNldG12YWx1ZShzY3ZhbHVlKVxuICAgIH07XG5cbiAgICAvLyBJbml0aWFsaXplIFNjcm9sbFRyaWdnZXJcbiAgICBTY3JvbGxUcmlnZ2VyLmNyZWF0ZSh7XG4gICAgICB0cmlnZ2VyOiBcIi5oZWxsXCIsXG4gICAgICBcbiAgICAgIHN0YXJ0OiAndG9wIHRvcCcsXG4gICAgICBtYXJrZXJzOiB0cnVlLFxuICAgICAgZW5kOiAnKz0xMDAwJyxcbiAgICAgIHNjcnViOjAuNSxcbiAgICAgIHNjcm9sbGVyOiBzY3JvbGxDb250YWluZXIsXG4gICAgICBvblVwZGF0ZTogKHNlbGYpID0+IHtcbiAgICAgICAgdXBkYXRlU2Nyb2xsVmFsdWUoKTtcbiAgICAgIH0sXG4gICAgfSk7XG5cbiAgICAvLyBDbGVhbiB1cCBTY3JvbGxUcmlnZ2VyIG9uIGNvbXBvbmVudCB1bm1vdW50XG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIFNjcm9sbFRyaWdnZXIua2lsbEFsbCgpO1xuICAgIH07XG4gIH0sIFtdKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICAgICA8ZGl2IGNsYXNzTmFtZT0naC1zY3JlZW4gdy1zY3JlZW4gYmctc2xhdGUtNTAwJz48L2Rpdj5cbiAgICAgIDxkaXZcbiAgICAgICAgcmVmPXtzY3JvbGxDb250YWluZXJSZWZ9XG4gICAgICAgIHN0eWxlPXt7IGhlaWdodDogJzEwMHZoJywgb3ZlcmZsb3dZOiAnc2Nyb2xsJywgYm9yZGVyOiAnMXB4IHNvbGlkIGJsYWNrJyB9fVxuICAgICAgPlxuICAgICAgPHAgY2xhc3NOYW1lPSdhYnNvdWx0ZSB0b3AtMTAnPlNjcm9sbCBWYWx1ZToge3Njcm9sbFZhbHVlfTwvcD5cbiAgICAgICBcbiAgICAgICAgPGltZyAgY2xhc3NOYW1lPSdzdGlja3kgaGVsbCBoLXNjcmVlbiB3LVs4MCVdJyBzcmM9e2AvaW1hZ2VzL2FuaW1hdGVkc2hvdy9lemdpZi1mcmFtZS0wJHttdmFsdWV9LmpwZ2B9IC8+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdoLXNjcmVlbiB3LXNjcmVlbiBiZy1zbGF0ZS01MDAnPjwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgU2Nyb2xsVHJhY2tlcjtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwidXNlUmVmIiwiZ3NhcCIsIlNjcm9sbFRyaWdnZXIiLCJyZWdpc3RlclBsdWdpbiIsIlNjcm9sbFRyYWNrZXIiLCJzY3JvbGxWYWx1ZSIsInNldFNjcm9sbFZhbHVlIiwic2Nyb2xsQ29udGFpbmVyUmVmIiwibXZhbHVlIiwic2V0bXZhbHVlIiwic2Nyb2xsQ29udGFpbmVyIiwiY3VycmVudCIsInVwZGF0ZVNjcm9sbFZhbHVlIiwic2Nyb2xsVG9wIiwiY29uc29sZSIsImxvZyIsInNjdmFsdWUiLCJNYXRoIiwiZmxvb3IiLCJjcmVhdGUiLCJ0cmlnZ2VyIiwic3RhcnQiLCJtYXJrZXJzIiwiZW5kIiwic2NydWIiLCJzY3JvbGxlciIsIm9uVXBkYXRlIiwic2VsZiIsImtpbGxBbGwiLCJkaXYiLCJjbGFzc05hbWUiLCJyZWYiLCJzdHlsZSIsImhlaWdodCIsIm92ZXJmbG93WSIsImJvcmRlciIsInAiLCJpbWciLCJzcmMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/Carview/page.tsx\n"));

/***/ })

});