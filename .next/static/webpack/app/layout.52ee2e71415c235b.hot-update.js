"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/layout",{

/***/ "(app-pages-browser)/./src/app/globals.css":
/*!*****************************!*\
  !*** ./src/app/globals.css ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"2acab77b2e47\");\nif (true) { module.hot.accept() }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvZ2xvYmFscy5jc3MiLCJtYXBwaW5ncyI6IjtBQUFBLCtEQUFlLGNBQWM7QUFDN0IsSUFBSSxJQUFVLElBQUksaUJBQWlCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvZ2xvYmFscy5jc3M/YzdjNCJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBcIjJhY2FiNzdiMmU0N1wiXG5pZiAobW9kdWxlLmhvdCkgeyBtb2R1bGUuaG90LmFjY2VwdCgpIH1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/globals.css\n"));

/***/ }),

/***/ "(app-pages-browser)/./src/app/components/Navbar.tsx":
/*!***************************************!*\
  !*** ./src/app/components/Navbar.tsx ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ NavBar; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! framer-motion */ \"(app-pages-browser)/./node_modules/framer-motion/dist/es/render/dom/motion.mjs\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/dist/api/navigation.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/dist/api/link.js\");\n// src/app/components/Navbr.tsx\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nconst navItems = [\n    {\n        path: \"/\",\n        name: \"Home\"\n    },\n    {\n        path: \"/now\",\n        name: \"Now\"\n    },\n    {\n        path: \"/guestbook\",\n        name: \"Guestbook\"\n    },\n    {\n        path: \"/writing\",\n        name: \"Writing\"\n    }\n];\nfunction NavBar() {\n    _s();\n    let pathname = (0,next_navigation__WEBPACK_IMPORTED_MODULE_2__.usePathname)() || \"/\";\n    if (pathname.includes(\"/writing/\")) {\n        pathname = \"/writing\";\n    }\n    const [hoveredPath, setHoveredPath] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(pathname);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \" overflow-hidden py-2 px-2 w-full absolute top-0 z-[100] bg-[#f4f0e3]/80 backdrop-blur-sm\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n            className: \"flex gap-2 relative justify-start w-full z-[100]  rounded-full\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex w-[120px] animate\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                        src: \"/images/onlyLogoreal.png\",\n                        className: \"w-15 h-10 \",\n                        alt: \"logo\"\n                    }, void 0, false, {\n                        fileName: \"/home/ap/Documents/SolecthonWebsiteNext/solectho-website-next/src/app/components/Navbar.tsx\",\n                        lineNumber: 43,\n                        columnNumber: 9\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/home/ap/Documents/SolecthonWebsiteNext/solectho-website-next/src/app/components/Navbar.tsx\",\n                    lineNumber: 41,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex justify-start items-center w-full \",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        className: \"font-sans font-normal text-2xl text-center \",\n                        children: \" VCET SOLECTHON\"\n                    }, void 0, false, {\n                        fileName: \"/home/ap/Documents/SolecthonWebsiteNext/solectho-website-next/src/app/components/Navbar.tsx\",\n                        lineNumber: 47,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/home/ap/Documents/SolecthonWebsiteNext/solectho-website-next/src/app/components/Navbar.tsx\",\n                    lineNumber: 46,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex justify-end items-center w-full\",\n                    children: navItems.map((item, index)=>{\n                        const isActive = item.path === pathname;\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                            className: \"px-4 py-1  text-sm lg:text-base relative no-underline duration-300 ease-in \".concat(isActive ? \"text-[#000]\" : \"text-[#2F3645]\"),\n                            \"data-active\": isActive,\n                            href: item.path,\n                            onMouseOver: ()=>setHoveredPath(item.path),\n                            onMouseLeave: ()=>setHoveredPath(pathname),\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    children: item.name\n                                }, void 0, false, {\n                                    fileName: \"/home/ap/Documents/SolecthonWebsiteNext/solectho-website-next/src/app/components/Navbar.tsx\",\n                                    lineNumber: 66,\n                                    columnNumber: 15\n                                }, this),\n                                item.path === hoveredPath && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_4__.motion.div, {\n                                    className: \"absolute bottom-0 left-0 h-full bg-red-200 rounded-full -z-10\",\n                                    layoutId: \"navbar\",\n                                    \"aria-hidden\": \"true\",\n                                    style: {\n                                        width: \"100%\"\n                                    },\n                                    transition: {\n                                        type: \"spring\",\n                                        bounce: 0.25,\n                                        stiffness: 130,\n                                        damping: 9,\n                                        duration: 0.3\n                                    }\n                                }, void 0, false, {\n                                    fileName: \"/home/ap/Documents/SolecthonWebsiteNext/solectho-website-next/src/app/components/Navbar.tsx\",\n                                    lineNumber: 68,\n                                    columnNumber: 17\n                                }, this)\n                            ]\n                        }, item.path, true, {\n                            fileName: \"/home/ap/Documents/SolecthonWebsiteNext/solectho-website-next/src/app/components/Navbar.tsx\",\n                            lineNumber: 56,\n                            columnNumber: 13\n                        }, this);\n                    })\n                }, void 0, false, {\n                    fileName: \"/home/ap/Documents/SolecthonWebsiteNext/solectho-website-next/src/app/components/Navbar.tsx\",\n                    lineNumber: 50,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/home/ap/Documents/SolecthonWebsiteNext/solectho-website-next/src/app/components/Navbar.tsx\",\n            lineNumber: 40,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/home/ap/Documents/SolecthonWebsiteNext/solectho-website-next/src/app/components/Navbar.tsx\",\n        lineNumber: 39,\n        columnNumber: 5\n    }, this);\n}\n_s(NavBar, \"enbZRcEd+8lKfP46c76sDL2ppgA=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_2__.usePathname\n    ];\n});\n_c = NavBar;\nvar _c;\n$RefreshReg$(_c, \"NavBar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY29tcG9uZW50cy9OYXZiYXIudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSwrQkFBK0I7OztBQUlRO0FBQ047QUFDYTtBQUNqQjtBQUU3QixNQUFNSSxXQUFXO0lBQ2Y7UUFDRUMsTUFBTTtRQUNOQyxNQUFNO0lBQ1I7SUFDQTtRQUNFRCxNQUFNO1FBQ05DLE1BQU07SUFDUjtJQUNBO1FBQ0VELE1BQU07UUFDTkMsTUFBTTtJQUNSO0lBQ0E7UUFDRUQsTUFBTTtRQUNOQyxNQUFNO0lBQ1I7Q0FDRDtBQUVjLFNBQVNDOztJQUN0QixJQUFJQyxXQUFXTiw0REFBV0EsTUFBTTtJQUVoQyxJQUFJTSxTQUFTQyxRQUFRLENBQUMsY0FBYztRQUNsQ0QsV0FBVztJQUNiO0lBRUEsTUFBTSxDQUFDRSxhQUFhQyxlQUFlLEdBQUdWLCtDQUFRQSxDQUFDTztJQUUvQyxxQkFDRSw4REFBQ0k7UUFBSUMsV0FBVTtrQkFDYiw0RUFBQ0M7WUFBSUQsV0FBVTs7OEJBQ2IsOERBQUNEO29CQUFJQyxXQUFVOzhCQUVmLDRFQUFDRTt3QkFBSUMsS0FBSTt3QkFBMkJILFdBQVU7d0JBQWFJLEtBQUk7Ozs7Ozs7Ozs7OzhCQUcvRCw4REFBQ0w7b0JBQUlDLFdBQVU7OEJBQ2IsNEVBQUNLO3dCQUFHTCxXQUFVO2tDQUE4Qzs7Ozs7Ozs7Ozs7OEJBRzlELDhEQUFDRDtvQkFBSUMsV0FBVTs4QkFFZFQsU0FBU2UsR0FBRyxDQUFDLENBQUNDLE1BQU1DO3dCQUNuQixNQUFNQyxXQUFXRixLQUFLZixJQUFJLEtBQUtHO3dCQUUvQixxQkFDRSw4REFBQ0wsaURBQUlBOzRCQUVIVSxXQUFXLDhFQUVWLE9BRENTLFdBQVcsZ0JBQWdCOzRCQUU3QkMsZUFBYUQ7NEJBQ2JFLE1BQU1KLEtBQUtmLElBQUk7NEJBQ2ZvQixhQUFhLElBQU1kLGVBQWVTLEtBQUtmLElBQUk7NEJBQzNDcUIsY0FBYyxJQUFNZixlQUFlSDs7OENBRW5DLDhEQUFDbUI7OENBQU1QLEtBQUtkLElBQUk7Ozs7OztnQ0FDZmMsS0FBS2YsSUFBSSxLQUFLSyw2QkFDYiw4REFBQ1YsaURBQU1BLENBQUNZLEdBQUc7b0NBQ1RDLFdBQVU7b0NBQ1ZlLFVBQVM7b0NBQ1RDLGVBQVk7b0NBQ1pDLE9BQU87d0NBQ0xDLE9BQU87b0NBQ1Q7b0NBQ0FDLFlBQVk7d0NBQ1ZDLE1BQU07d0NBQ05DLFFBQVE7d0NBQ1JDLFdBQVc7d0NBQ1hDLFNBQVM7d0NBQ1RDLFVBQVU7b0NBQ1o7Ozs7Ozs7MkJBeEJDakIsS0FBS2YsSUFBSTs7Ozs7b0JBNkJwQjs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLUjtHQTlEd0JFOztRQUNQTCx3REFBV0E7OztLQURKSyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL2NvbXBvbmVudHMvTmF2YmFyLnRzeD83NTQ0Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIHNyYy9hcHAvY29tcG9uZW50cy9OYXZici50c3hcblxuXCJ1c2UgY2xpZW50XCI7XG5cbmltcG9ydCB7IG1vdGlvbiB9IGZyb20gXCJmcmFtZXItbW90aW9uXCI7XG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlUGF0aG5hbWUgfSBmcm9tIFwibmV4dC9uYXZpZ2F0aW9uXCI7XG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5cbmNvbnN0IG5hdkl0ZW1zID0gW1xuICB7XG4gICAgcGF0aDogXCIvXCIsXG4gICAgbmFtZTogXCJIb21lXCIsXG4gIH0sXG4gIHtcbiAgICBwYXRoOiBcIi9ub3dcIixcbiAgICBuYW1lOiBcIk5vd1wiLFxuICB9LFxuICB7XG4gICAgcGF0aDogXCIvZ3Vlc3Rib29rXCIsXG4gICAgbmFtZTogXCJHdWVzdGJvb2tcIixcbiAgfSxcbiAge1xuICAgIHBhdGg6IFwiL3dyaXRpbmdcIixcbiAgICBuYW1lOiBcIldyaXRpbmdcIixcbiAgfSxcbl07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE5hdkJhcigpIHtcbiAgbGV0IHBhdGhuYW1lID0gdXNlUGF0aG5hbWUoKSB8fCBcIi9cIjtcblxuICBpZiAocGF0aG5hbWUuaW5jbHVkZXMoXCIvd3JpdGluZy9cIikpIHtcbiAgICBwYXRobmFtZSA9IFwiL3dyaXRpbmdcIjtcbiAgfVxuXG4gIGNvbnN0IFtob3ZlcmVkUGF0aCwgc2V0SG92ZXJlZFBhdGhdID0gdXNlU3RhdGUocGF0aG5hbWUpO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCIgb3ZlcmZsb3ctaGlkZGVuIHB5LTIgcHgtMiB3LWZ1bGwgYWJzb2x1dGUgdG9wLTAgei1bMTAwXSBiZy1bI2Y0ZjBlM10vODAgYmFja2Ryb3AtYmx1ci1zbVwiPlxuICAgICAgPG5hdiBjbGFzc05hbWU9XCJmbGV4IGdhcC0yIHJlbGF0aXZlIGp1c3RpZnktc3RhcnQgdy1mdWxsIHotWzEwMF0gIHJvdW5kZWQtZnVsbFwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggdy1bMTIwcHhdIGFuaW1hdGVcIj5cblxuICAgICAgICA8aW1nIHNyYz1cIi9pbWFnZXMvb25seUxvZ29yZWFsLnBuZ1wiIGNsYXNzTmFtZT1cInctMTUgaC0xMCBcIiBhbHQ9XCJsb2dvXCIgLz5cbiAgICAgIFxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktc3RhcnQgaXRlbXMtY2VudGVyIHctZnVsbCBcIj5cbiAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwiZm9udC1zYW5zIGZvbnQtbm9ybWFsIHRleHQtMnhsIHRleHQtY2VudGVyIFwiPiBWQ0VUIFNPTEVDVEhPTjwvaDI+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICAgXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWVuZCBpdGVtcy1jZW50ZXIgdy1mdWxsXCI+XG5cbiAgICAgICAge25hdkl0ZW1zLm1hcCgoaXRlbSwgaW5kZXgpID0+IHtcbiAgICAgICAgICBjb25zdCBpc0FjdGl2ZSA9IGl0ZW0ucGF0aCA9PT0gcGF0aG5hbWU7XG4gICAgICAgICAgXG4gICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxMaW5rXG4gICAgICAgICAgICAgIGtleT17aXRlbS5wYXRofVxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2BweC00IHB5LTEgIHRleHQtc20gbGc6dGV4dC1iYXNlIHJlbGF0aXZlIG5vLXVuZGVybGluZSBkdXJhdGlvbi0zMDAgZWFzZS1pbiAke1xuICAgICAgICAgICAgICAgIGlzQWN0aXZlID8gXCJ0ZXh0LVsjMDAwXVwiIDogXCJ0ZXh0LVsjMkYzNjQ1XVwiXG4gICAgICAgICAgICAgIH1gfVxuICAgICAgICAgICAgICBkYXRhLWFjdGl2ZT17aXNBY3RpdmV9XG4gICAgICAgICAgICAgIGhyZWY9e2l0ZW0ucGF0aH1cbiAgICAgICAgICAgICAgb25Nb3VzZU92ZXI9eygpID0+IHNldEhvdmVyZWRQYXRoKGl0ZW0ucGF0aCl9XG4gICAgICAgICAgICAgIG9uTW91c2VMZWF2ZT17KCkgPT4gc2V0SG92ZXJlZFBhdGgocGF0aG5hbWUpfVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxzcGFuPntpdGVtLm5hbWV9PC9zcGFuPlxuICAgICAgICAgICAgICB7aXRlbS5wYXRoID09PSBob3ZlcmVkUGF0aCAmJiAoXG4gICAgICAgICAgICAgICAgPG1vdGlvbi5kaXZcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImFic29sdXRlIGJvdHRvbS0wIGxlZnQtMCBoLWZ1bGwgYmctcmVkLTIwMCByb3VuZGVkLWZ1bGwgLXotMTBcIlxuICAgICAgICAgICAgICAgICAgbGF5b3V0SWQ9XCJuYXZiYXJcIlxuICAgICAgICAgICAgICAgICAgYXJpYS1oaWRkZW49XCJ0cnVlXCJcbiAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiBcIjEwMCVcIixcbiAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uPXt7XG4gICAgICAgICAgICAgICAgICAgIHR5cGU6IFwic3ByaW5nXCIsXG4gICAgICAgICAgICAgICAgICAgIGJvdW5jZTogMC4yNSxcbiAgICAgICAgICAgICAgICAgICAgc3RpZmZuZXNzOiAxMzAsXG4gICAgICAgICAgICAgICAgICAgIGRhbXBpbmc6IDksXG4gICAgICAgICAgICAgICAgICAgIGR1cmF0aW9uOiAwLjMsXG4gICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICl9XG4gICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgKTtcbiAgICAgICAgfSl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9uYXY+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXSwibmFtZXMiOlsibW90aW9uIiwidXNlU3RhdGUiLCJ1c2VQYXRobmFtZSIsIkxpbmsiLCJuYXZJdGVtcyIsInBhdGgiLCJuYW1lIiwiTmF2QmFyIiwicGF0aG5hbWUiLCJpbmNsdWRlcyIsImhvdmVyZWRQYXRoIiwic2V0SG92ZXJlZFBhdGgiLCJkaXYiLCJjbGFzc05hbWUiLCJuYXYiLCJpbWciLCJzcmMiLCJhbHQiLCJoMiIsIm1hcCIsIml0ZW0iLCJpbmRleCIsImlzQWN0aXZlIiwiZGF0YS1hY3RpdmUiLCJocmVmIiwib25Nb3VzZU92ZXIiLCJvbk1vdXNlTGVhdmUiLCJzcGFuIiwibGF5b3V0SWQiLCJhcmlhLWhpZGRlbiIsInN0eWxlIiwid2lkdGgiLCJ0cmFuc2l0aW9uIiwidHlwZSIsImJvdW5jZSIsInN0aWZmbmVzcyIsImRhbXBpbmciLCJkdXJhdGlvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/components/Navbar.tsx\n"));

/***/ })

});