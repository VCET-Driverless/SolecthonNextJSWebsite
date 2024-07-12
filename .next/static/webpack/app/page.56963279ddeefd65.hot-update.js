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

/***/ "(app-pages-browser)/./src/app/components/ui/text-generate-effect.tsx":
/*!********************************************************!*\
  !*** ./src/app/components/ui/text-generate-effect.tsx ***!
  \********************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   TextGenerateEffect: function() { return /* binding */ TextGenerateEffect; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! framer-motion */ \"(app-pages-browser)/./node_modules/framer-motion/dist/es/animation/hooks/use-animate.mjs\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! framer-motion */ \"(app-pages-browser)/./node_modules/framer-motion/dist/es/animation/utils/stagger.mjs\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! framer-motion */ \"(app-pages-browser)/./node_modules/framer-motion/dist/es/render/dom/motion.mjs\");\n/* harmony import */ var _lib_utils_cn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/lib/utils/cn */ \"(app-pages-browser)/./src/lib/utils/cn.ts\");\n/* __next_internal_client_entry_do_not_use__ TextGenerateEffect auto */ \nvar _s = $RefreshSig$();\n\n\n\nconst TextGenerateEffect = (param)=>{\n    let { words, className } = param;\n    _s();\n    const [scope, animate] = (0,framer_motion__WEBPACK_IMPORTED_MODULE_3__.useAnimate)();\n    const containerRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const [showH1, setShowH1] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    let wordsArray = words.split(\" \");\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const sequence = async ()=>{\n            if (containerRef.current) {\n                const spans = containerRef.current.querySelectorAll(\"span\");\n                // Animate words in\n                await animate(spans, {\n                    opacity: 0.8\n                }, {\n                    duration: 3,\n                    delay: (0,framer_motion__WEBPACK_IMPORTED_MODULE_4__.stagger)(0.2)\n                });\n                // Animate words out\n                await animate(spans, {\n                    opacity: 0\n                }, {\n                    duration: 3,\n                    delay: (0,framer_motion__WEBPACK_IMPORTED_MODULE_4__.stagger)(0.2, {\n                        startDelay: 1\n                    })\n                } // 1 second pause before fading out\n                );\n                // Show h1 tag using Tailwind CSS\n                setShowH1(true);\n            }\n        };\n        sequence();\n    }, [\n        animate\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (showH1) {\n            const htwoElement = document.getElementById(\"htwo\");\n            if (htwoElement) {\n                htwoElement.innerHTML = \"SOLECTHON\";\n            }\n            const honeElement = document.getElementById(\"hone\");\n            if (honeElement) {\n                honeElement.innerHTML = \"\";\n            }\n        }\n    }, [\n        showH1\n    ]);\n    const renderWords = ()=>{\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_5__.motion.div, {\n            ref: containerRef,\n            children: wordsArray.map((word, idx)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_5__.motion.span, {\n                    className: \"dark:text-white text-white opacity-0\",\n                    children: [\n                        word,\n                        \" \"\n                    ]\n                }, word + idx, true, {\n                    fileName: \"/home/ap/Documents/SolecthonWebsiteNext/solectho-website-next/src/app/components/ui/text-generate-effect.tsx\",\n                    lineNumber: 62,\n                    columnNumber: 11\n                }, undefined))\n        }, void 0, false, {\n            fileName: \"/home/ap/Documents/SolecthonWebsiteNext/solectho-website-next/src/app/components/ui/text-generate-effect.tsx\",\n            lineNumber: 60,\n            columnNumber: 7\n        }, undefined);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (0,_lib_utils_cn__WEBPACK_IMPORTED_MODULE_2__.cn)(\"font-bold\", className),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"mt-4\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"dark:text-white text-black text-2xl leading-snug tracking-wide\",\n                children: showH1 ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    className: \"text-3xl text-[#A91D3A] text-center transition-opacity duration-3000 ease-in-out\",\n                    children: \"A STEP TOWARDS SUSTAINABILITY\"\n                }, void 0, false, {\n                    fileName: \"/home/ap/Documents/SolecthonWebsiteNext/solectho-website-next/src/app/components/ui/text-generate-effect.tsx\",\n                    lineNumber: 78,\n                    columnNumber: 13\n                }, undefined) : renderWords()\n            }, void 0, false, {\n                fileName: \"/home/ap/Documents/SolecthonWebsiteNext/solectho-website-next/src/app/components/ui/text-generate-effect.tsx\",\n                lineNumber: 76,\n                columnNumber: 9\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"/home/ap/Documents/SolecthonWebsiteNext/solectho-website-next/src/app/components/ui/text-generate-effect.tsx\",\n            lineNumber: 75,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/home/ap/Documents/SolecthonWebsiteNext/solectho-website-next/src/app/components/ui/text-generate-effect.tsx\",\n        lineNumber: 74,\n        columnNumber: 5\n    }, undefined);\n};\n_s(TextGenerateEffect, \"LHJjlcY/OiqPh/46FUa3s2J7xAA=\", false, function() {\n    return [\n        framer_motion__WEBPACK_IMPORTED_MODULE_3__.useAnimate\n    ];\n});\n_c = TextGenerateEffect;\nvar _c;\n$RefreshReg$(_c, \"TextGenerateEffect\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY29tcG9uZW50cy91aS90ZXh0LWdlbmVyYXRlLWVmZmVjdC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUNvRDtBQUNRO0FBQ3hCO0FBRTdCLE1BQU1PLHFCQUFxQjtRQUFDLEVBQ2pDQyxLQUFLLEVBQ0xDLFNBQVMsRUFJVjs7SUFDQyxNQUFNLENBQUNDLE9BQU9DLFFBQVEsR0FBR04seURBQVVBO0lBQ25DLE1BQU1PLGVBQWVYLDZDQUFNQSxDQUFDO0lBQzVCLE1BQU0sQ0FBQ1ksUUFBUUMsVUFBVSxHQUFHWiwrQ0FBUUEsQ0FBQztJQUNyQyxJQUFJYSxhQUFhUCxNQUFNUSxLQUFLLENBQUM7SUFFN0JoQixnREFBU0EsQ0FBQztRQUNSLE1BQU1pQixXQUFXO1lBQ2YsSUFBSUwsYUFBYU0sT0FBTyxFQUFFO2dCQUN4QixNQUFNQyxRQUFRUCxhQUFhTSxPQUFPLENBQUNFLGdCQUFnQixDQUFDO2dCQUVwRCxtQkFBbUI7Z0JBQ25CLE1BQU1ULFFBQ0pRLE9BQ0E7b0JBQUVFLFNBQVM7Z0JBQUksR0FDZjtvQkFBRUMsVUFBVTtvQkFBR0MsT0FBT25CLHNEQUFPQSxDQUFDO2dCQUFLO2dCQUdyQyxvQkFBb0I7Z0JBQ3BCLE1BQU1PLFFBQ0pRLE9BQ0E7b0JBQUVFLFNBQVM7Z0JBQUUsR0FDYjtvQkFBRUMsVUFBVTtvQkFBR0MsT0FBT25CLHNEQUFPQSxDQUFDLEtBQUs7d0JBQUVvQixZQUFZO29CQUFFO2dCQUFHLEVBQUUsbUNBQW1DOztnQkFHN0YsaUNBQWlDO2dCQUNqQ1YsVUFBVTtZQUNaO1FBQ0Y7UUFFQUc7SUFDRixHQUFHO1FBQUNOO0tBQVE7SUFFWlgsZ0RBQVNBLENBQUM7UUFDUixJQUFJYSxRQUFRO1lBQ1YsTUFBTVksY0FBY0MsU0FBU0MsY0FBYyxDQUFDO1lBQzVDLElBQUlGLGFBQWE7Z0JBQ2ZBLFlBQVlHLFNBQVMsR0FBRztZQUMxQjtZQUNBLE1BQU1DLGNBQWNILFNBQVNDLGNBQWMsQ0FBQztZQUM1QyxJQUFJRSxhQUFhO2dCQUNmQSxZQUFZRCxTQUFTLEdBQUc7WUFDekI7UUFDRDtJQUNKLEdBQUc7UUFBQ2Y7S0FBTztJQUVYLE1BQU1pQixjQUFjO1FBQ2xCLHFCQUNFLDhEQUFDM0IsaURBQU1BLENBQUM0QixHQUFHO1lBQUNDLEtBQUtwQjtzQkFDZEcsV0FBV2tCLEdBQUcsQ0FBQyxDQUFDQyxNQUFNQyxvQkFDckIsOERBQUNoQyxpREFBTUEsQ0FBQ2lDLElBQUk7b0JBRVYzQixXQUFVOzt3QkFFVHlCO3dCQUFNOzttQkFIRkEsT0FBT0M7Ozs7Ozs7Ozs7SUFRdEI7SUFFQSxxQkFDRSw4REFBQ0o7UUFBSXRCLFdBQVdILGlEQUFFQSxDQUFDLGFBQWFHO2tCQUM5Qiw0RUFBQ3NCO1lBQUl0QixXQUFVO3NCQUNiLDRFQUFDc0I7Z0JBQUl0QixXQUFVOzBCQUNaSSx1QkFDQyw4REFBQ3dCO29CQUFHNUIsV0FBVTs4QkFBbUY7Ozs7O2dDQUlqR3FCOzs7Ozs7Ozs7Ozs7Ozs7O0FBTVosRUFBRTtHQWxGV3ZCOztRQU9jRixxREFBVUE7OztLQVB4QkUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9jb21wb25lbnRzL3VpL3RleHQtZ2VuZXJhdGUtZWZmZWN0LnRzeD85OWY4Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBtb3Rpb24sIHN0YWdnZXIsIHVzZUFuaW1hdGUgfSBmcm9tIFwiZnJhbWVyLW1vdGlvblwiO1xuaW1wb3J0IHsgY24gfSBmcm9tIFwiQC9saWIvdXRpbHMvY25cIjtcblxuZXhwb3J0IGNvbnN0IFRleHRHZW5lcmF0ZUVmZmVjdCA9ICh7XG4gIHdvcmRzLFxuICBjbGFzc05hbWUsXG59OiB7XG4gIHdvcmRzOiBzdHJpbmc7XG4gIGNsYXNzTmFtZT86IHN0cmluZztcbn0pID0+IHtcbiAgY29uc3QgW3Njb3BlLCBhbmltYXRlXSA9IHVzZUFuaW1hdGUoKTtcbiAgY29uc3QgY29udGFpbmVyUmVmID0gdXNlUmVmKG51bGwpO1xuICBjb25zdCBbc2hvd0gxLCBzZXRTaG93SDFdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBsZXQgd29yZHNBcnJheSA9IHdvcmRzLnNwbGl0KFwiIFwiKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IHNlcXVlbmNlID0gYXN5bmMgKCkgPT4ge1xuICAgICAgaWYgKGNvbnRhaW5lclJlZi5jdXJyZW50KSB7XG4gICAgICAgIGNvbnN0IHNwYW5zID0gY29udGFpbmVyUmVmLmN1cnJlbnQucXVlcnlTZWxlY3RvckFsbChcInNwYW5cIik7XG5cbiAgICAgICAgLy8gQW5pbWF0ZSB3b3JkcyBpblxuICAgICAgICBhd2FpdCBhbmltYXRlKFxuICAgICAgICAgIHNwYW5zLFxuICAgICAgICAgIHsgb3BhY2l0eTogMC44IH0sXG4gICAgICAgICAgeyBkdXJhdGlvbjogMywgZGVsYXk6IHN0YWdnZXIoMC4yKSB9XG4gICAgICAgICk7XG5cbiAgICAgICAgLy8gQW5pbWF0ZSB3b3JkcyBvdXRcbiAgICAgICAgYXdhaXQgYW5pbWF0ZShcbiAgICAgICAgICBzcGFucyxcbiAgICAgICAgICB7IG9wYWNpdHk6IDAgfSxcbiAgICAgICAgICB7IGR1cmF0aW9uOiAzLCBkZWxheTogc3RhZ2dlcigwLjIsIHsgc3RhcnREZWxheTogMSB9KSB9IC8vIDEgc2Vjb25kIHBhdXNlIGJlZm9yZSBmYWRpbmcgb3V0XG4gICAgICAgICk7XG5cbiAgICAgICAgLy8gU2hvdyBoMSB0YWcgdXNpbmcgVGFpbHdpbmQgQ1NTXG4gICAgICAgIHNldFNob3dIMSh0cnVlKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgc2VxdWVuY2UoKTtcbiAgfSwgW2FuaW1hdGVdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChzaG93SDEpIHtcbiAgICAgIGNvbnN0IGh0d29FbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJodHdvXCIpO1xuICAgICAgaWYgKGh0d29FbGVtZW50KSB7XG4gICAgICAgIGh0d29FbGVtZW50LmlubmVySFRNTCA9IFwiU09MRUNUSE9OXCI7XG4gICAgICB9XG4gICAgICBjb25zdCBob25lRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaG9uZVwiKTtcbiAgICAgIGlmIChob25lRWxlbWVudCkge1xuICAgICAgICBob25lRWxlbWVudC5pbm5lckhUTUwgPSBcIlwiO1xuICAgICAgIH1cbiAgICAgIH1cbiAgfSwgW3Nob3dIMV0pO1xuXG4gIGNvbnN0IHJlbmRlcldvcmRzID0gKCkgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICA8bW90aW9uLmRpdiByZWY9e2NvbnRhaW5lclJlZn0+XG4gICAgICAgIHt3b3Jkc0FycmF5Lm1hcCgod29yZCwgaWR4KSA9PiAoXG4gICAgICAgICAgPG1vdGlvbi5zcGFuXG4gICAgICAgICAgICBrZXk9e3dvcmQgKyBpZHh9XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJkYXJrOnRleHQtd2hpdGUgdGV4dC13aGl0ZSBvcGFjaXR5LTBcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIHt3b3JkfXtcIiBcIn1cbiAgICAgICAgICA8L21vdGlvbi5zcGFuPlxuICAgICAgICApKX1cbiAgICAgIDwvbW90aW9uLmRpdj5cbiAgICApO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e2NuKFwiZm9udC1ib2xkXCIsIGNsYXNzTmFtZSl9PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC00XCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGFyazp0ZXh0LXdoaXRlIHRleHQtYmxhY2sgdGV4dC0yeGwgbGVhZGluZy1zbnVnIHRyYWNraW5nLXdpZGVcIj5cbiAgICAgICAgICB7c2hvd0gxID8gKFxuICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtM3hsIHRleHQtWyNBOTFEM0FdIHRleHQtY2VudGVyIHRyYW5zaXRpb24tb3BhY2l0eSBkdXJhdGlvbi0zMDAwIGVhc2UtaW4tb3V0XCI+XG4gICAgICAgICAgICAgIEEgU1RFUCBUT1dBUkRTIFNVU1RBSU5BQklMSVRZXG4gICAgICAgICAgICA8L2gxPlxuICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICByZW5kZXJXb3JkcygpXG4gICAgICAgICAgKX1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG4iXSwibmFtZXMiOlsidXNlRWZmZWN0IiwidXNlUmVmIiwidXNlU3RhdGUiLCJtb3Rpb24iLCJzdGFnZ2VyIiwidXNlQW5pbWF0ZSIsImNuIiwiVGV4dEdlbmVyYXRlRWZmZWN0Iiwid29yZHMiLCJjbGFzc05hbWUiLCJzY29wZSIsImFuaW1hdGUiLCJjb250YWluZXJSZWYiLCJzaG93SDEiLCJzZXRTaG93SDEiLCJ3b3Jkc0FycmF5Iiwic3BsaXQiLCJzZXF1ZW5jZSIsImN1cnJlbnQiLCJzcGFucyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJvcGFjaXR5IiwiZHVyYXRpb24iLCJkZWxheSIsInN0YXJ0RGVsYXkiLCJodHdvRWxlbWVudCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJpbm5lckhUTUwiLCJob25lRWxlbWVudCIsInJlbmRlcldvcmRzIiwiZGl2IiwicmVmIiwibWFwIiwid29yZCIsImlkeCIsInNwYW4iLCJoMSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/components/ui/text-generate-effect.tsx\n"));

/***/ })

});