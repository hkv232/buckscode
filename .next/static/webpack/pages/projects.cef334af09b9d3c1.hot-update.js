"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/projects",{

/***/ "./src/components/TransitionEffect.js":
/*!********************************************!*\
  !*** ./src/components/TransitionEffect.js ***!
  \********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.mjs\");\nvar _this = undefined;\n\n\n\nvar TransitionEffect = function() {\n    var bars = [\n        1,\n        2,\n        3,\n        4,\n        5,\n        6\n    ];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"relative h-screen w-screen overflow-hidden\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_2__.AnimatePresence, {\n                mode: \"wait\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.div, {\n                        className: \"fixed top-0 w-screen h-1/5 bg-light\",\n                        initial: {\n                            x: \"-100%\",\n                            width: \"100%\"\n                        },\n                        animate: {\n                            x: \"0%\",\n                            width: \"100%\"\n                        },\n                        exit: {\n                            x: [\n                                \"0%\",\n                                \"100%\"\n                            ],\n                            width: [\n                                \"0%\",\n                                \"100%\"\n                            ]\n                        },\n                        transition: {\n                            duration: 1,\n                            ease: \"linear\"\n                        }\n                    }, void 0, false, {\n                        fileName: \"/Users/harshi/Documents/Coding/buckscode/src/components/TransitionEffect.js\",\n                        lineNumber: 15,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.div, {\n                        initial: {\n                            opacity: 0\n                        },\n                        animate: {\n                            opacity: 1\n                        },\n                        exit: {\n                            opacity: 0\n                        },\n                        transition: {\n                            duration: 0.5\n                        },\n                        children: bars.map(function(bar) {\n                            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.div, {\n                                className: \"fixed top-0 w-screen h-1/5 bg-light\",\n                                initial: {\n                                    x: \"-100%\",\n                                    width: \"100%\"\n                                },\n                                animate: {\n                                    x: \"0%\",\n                                    width: \"100%\"\n                                },\n                                exit: {\n                                    x: [\n                                        \"0%\",\n                                        \"100%\"\n                                    ],\n                                    width: [\n                                        \"0%\",\n                                        \"100%\"\n                                    ]\n                                },\n                                transition: {\n                                    duration: 1,\n                                    ease: \"linear\",\n                                    delay: bar * 0.2\n                                },\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    children: \"Hello\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/harshi/Documents/Coding/buckscode/src/components/TransitionEffect.js\",\n                                    lineNumber: 40,\n                                    columnNumber: 16\n                                }, _this)\n                            }, bar, false, {\n                                fileName: \"/Users/harshi/Documents/Coding/buckscode/src/components/TransitionEffect.js\",\n                                lineNumber: 32,\n                                columnNumber: 13\n                            }, _this);\n                        })\n                    }, void 0, false, {\n                        fileName: \"/Users/harshi/Documents/Coding/buckscode/src/components/TransitionEffect.js\",\n                        lineNumber: 25,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/harshi/Documents/Coding/buckscode/src/components/TransitionEffect.js\",\n                lineNumber: 14,\n                columnNumber: 7\n            }, _this)\n        }, void 0, false, {\n            fileName: \"/Users/harshi/Documents/Coding/buckscode/src/components/TransitionEffect.js\",\n            lineNumber: 13,\n            columnNumber: 5\n        }, _this)\n    }, void 0, false);\n};\n_c = TransitionEffect;\n/* harmony default export */ __webpack_exports__[\"default\"] = (TransitionEffect);\nvar _c;\n$RefreshReg$(_c, \"TransitionEffect\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9UcmFuc2l0aW9uRWZmZWN0LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQXVDO0FBQ2M7QUFJckQsSUFBTUksbUJBQW1CO0lBRXZCLElBQU1DLE9BQU87UUFBQztRQUFHO1FBQUc7UUFBRztRQUFHO1FBQUc7S0FBRTtJQUUvQixxQkFDRTtrQkFFQSw0RUFBQ0M7WUFBSUMsV0FBVTtzQkFDYiw0RUFBQ0osMERBQWVBO2dCQUFDSyxNQUFLOztrQ0FDcEIsOERBQUNOLGlEQUFNQSxDQUFDSSxHQUFHO3dCQUNUQyxXQUFVO3dCQUNWRSxTQUFTOzRCQUFFQyxHQUFHOzRCQUFTQyxPQUFPO3dCQUFPO3dCQUNyQ0MsU0FBUzs0QkFBRUYsR0FBRzs0QkFBTUMsT0FBTzt3QkFBTzt3QkFDbENFLE1BQU07NEJBQUNILEdBQUU7Z0NBQUM7Z0NBQU07NkJBQU87NEJBQUVDLE9BQU07Z0NBQUM7Z0NBQU07NkJBQU87d0JBQUE7d0JBQzdDRyxZQUFZOzRCQUFFQyxVQUFVOzRCQUFHQyxNQUFNO3dCQUFTOzs7Ozs7a0NBSzVDLDhEQUFDZCxpREFBTUEsQ0FBQ0ksR0FBRzt3QkFDVEcsU0FBUzs0QkFBRVEsU0FBUzt3QkFBRTt3QkFDdEJMLFNBQVM7NEJBQUVLLFNBQVM7d0JBQUU7d0JBQ3RCSixNQUFNOzRCQUFFSSxTQUFTO3dCQUFFO3dCQUNuQkgsWUFBWTs0QkFBRUMsVUFBVTt3QkFBSTtrQ0FFM0JWLEtBQUthLEdBQUcsQ0FBQyxTQUFDQztpREFDVCw4REFBQ2pCLGlEQUFNQSxDQUFDSSxHQUFHO2dDQUVUQyxXQUFVO2dDQUNWRSxTQUFTO29DQUFFQyxHQUFHO29DQUFTQyxPQUFPO2dDQUFPO2dDQUNyQ0MsU0FBUztvQ0FBRUYsR0FBRztvQ0FBTUMsT0FBTztnQ0FBTztnQ0FDbENFLE1BQU07b0NBQUNILEdBQUU7d0NBQUM7d0NBQU07cUNBQU87b0NBQUVDLE9BQU07d0NBQUM7d0NBQU07cUNBQU87Z0NBQUE7Z0NBQzdDRyxZQUFZO29DQUFFQyxVQUFVO29DQUFHQyxNQUFNO29DQUFVSSxPQUFPRCxNQUFNO2dDQUFJOzBDQUUzRCw0RUFBQ0U7OENBQUU7Ozs7OzsrQkFQQ0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBZ0JuQjtLQTNDTWY7QUE2Q04sK0RBQWVBLGdCQUFnQkEsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9UcmFuc2l0aW9uRWZmZWN0LmpzPzE2MDciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQge21vdGlvbiwgQW5pbWF0ZVByZXNlbmNlfSBmcm9tICdmcmFtZXItbW90aW9uJ1xuXG5cblxuY29uc3QgVHJhbnNpdGlvbkVmZmVjdCA9ICgpID0+IHtcblxuICBjb25zdCBiYXJzID0gWzEsIDIsIDMsIDQsIDUsIDZdO1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICBcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlIGgtc2NyZWVuIHctc2NyZWVuIG92ZXJmbG93LWhpZGRlblwiPlxuICAgICAgPEFuaW1hdGVQcmVzZW5jZSBtb2RlPSd3YWl0Jz5cbiAgICAgICAgPG1vdGlvbi5kaXZcbiAgICAgICAgICBjbGFzc05hbWU9XCJmaXhlZCB0b3AtMCB3LXNjcmVlbiBoLTEvNSBiZy1saWdodFwiXG4gICAgICAgICAgaW5pdGlhbD17eyB4OiAnLTEwMCUnLCB3aWR0aDogJzEwMCUnIH19XG4gICAgICAgICAgYW5pbWF0ZT17eyB4OiAnMCUnLCB3aWR0aDogJzEwMCUnIH19XG4gICAgICAgICAgZXhpdD17e3g6WycwJScsICcxMDAlJ10sIHdpZHRoOlsnMCUnLCAnMTAwJSddfX1cbiAgICAgICAgICB0cmFuc2l0aW9uPXt7IGR1cmF0aW9uOiAxLCBlYXNlOiAnbGluZWFyJyB9fVxuICAgICAgICA+XG4gICAgICAgICAgey8qIFlvdXIgY29udGVudCBnb2VzIGhlcmUgKi99XG4gICAgICAgIDwvbW90aW9uLmRpdj5cblxuICAgICAgICA8bW90aW9uLmRpdlxuICAgICAgICAgIGluaXRpYWw9e3sgb3BhY2l0eTogMCB9fVxuICAgICAgICAgIGFuaW1hdGU9e3sgb3BhY2l0eTogMSB9fVxuICAgICAgICAgIGV4aXQ9e3sgb3BhY2l0eTogMCB9fVxuICAgICAgICAgIHRyYW5zaXRpb249e3sgZHVyYXRpb246IDAuNSB9fVxuICAgICAgICA+XG4gICAgICAgICAge2JhcnMubWFwKChiYXIpID0+IChcbiAgICAgICAgICAgIDxtb3Rpb24uZGl2XG4gICAgICAgICAgICAgIGtleT17YmFyfVxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmaXhlZCB0b3AtMCB3LXNjcmVlbiBoLTEvNSBiZy1saWdodFwiXG4gICAgICAgICAgICAgIGluaXRpYWw9e3sgeDogJy0xMDAlJywgd2lkdGg6ICcxMDAlJyB9fVxuICAgICAgICAgICAgICBhbmltYXRlPXt7IHg6ICcwJScsIHdpZHRoOiAnMTAwJScgfX1cbiAgICAgICAgICAgICAgZXhpdD17e3g6WycwJScsICcxMDAlJ10sIHdpZHRoOlsnMCUnLCAnMTAwJSddfX1cbiAgICAgICAgICAgICAgdHJhbnNpdGlvbj17eyBkdXJhdGlvbjogMSwgZWFzZTogJ2xpbmVhcicsIGRlbGF5OiBiYXIgKiAwLjIgfX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgezxwPkhlbGxvPC9wPn1cbiAgICAgICAgICAgIDwvbW90aW9uLmRpdj5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC9tb3Rpb24uZGl2PlxuICAgICAgPC9BbmltYXRlUHJlc2VuY2U+XG4gICAgPC9kaXY+XG4gICAgXG4gICAgPC8+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgVHJhbnNpdGlvbkVmZmVjdFxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJtb3Rpb24iLCJBbmltYXRlUHJlc2VuY2UiLCJUcmFuc2l0aW9uRWZmZWN0IiwiYmFycyIsImRpdiIsImNsYXNzTmFtZSIsIm1vZGUiLCJpbml0aWFsIiwieCIsIndpZHRoIiwiYW5pbWF0ZSIsImV4aXQiLCJ0cmFuc2l0aW9uIiwiZHVyYXRpb24iLCJlYXNlIiwib3BhY2l0eSIsIm1hcCIsImJhciIsImRlbGF5IiwicCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/TransitionEffect.js\n"));

/***/ })

});