/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./src/contexts/AuthContext.tsx":
/*!**************************************!*\
  !*** ./src/contexts/AuthContext.tsx ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"AuthContext\": function() { return /* binding */ AuthContext; },\n/* harmony export */   \"AuthProvider\": function() { return /* binding */ AuthProvider; },\n/* harmony export */   \"signOut\": function() { return /* binding */ signOut; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! nookies */ \"./node_modules/nookies/dist/index.js\");\n/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(nookies__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _s = $RefreshSig$();\n\n\n\nconst AuthContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)({});\nfunction signOut() {\n    try {\n        (0,nookies__WEBPACK_IMPORTED_MODULE_2__.destroyCookie)(undefined, \"@pizzeria.token\");\n        (next_router__WEBPACK_IMPORTED_MODULE_3___default().push);\n    } catch (e) {}\n}\nfunction AuthProvider(param) {\n    let { children  } = param;\n    _s();\n    const [user, setUser] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    const isAuthenticated = !!user;\n    const signIn = async (param)=>{\n        let { email , password  } = param;\n        console.log(email, password);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(AuthContext.Provider, {\n        value: {\n            user,\n            isAuthenticated,\n            signIn\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"/Users/luancatarinocurupana/Documents/Coding/Projetos/pizzaria/frontend/src/contexts/AuthContext.tsx\",\n        lineNumber: 45,\n        columnNumber: 12\n    }, this);\n}\n_s(AuthProvider, \"kGLk6m4BT90iK1d91zRYm0C2usk=\");\n_c = AuthProvider;\nvar _c;\n$RefreshReg$(_c, \"AuthProvider\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29udGV4dHMvQXV0aENvbnRleHQudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBMkQ7QUFDdEI7QUFDTDtBQXVCekIsTUFBTUksNEJBQWNKLG9EQUFhQSxDQUFDLENBQUMsR0FBc0I7QUFFekQsU0FBU0ssVUFBVTtJQUN0QixJQUFHO1FBQ0NILHNEQUFhQSxDQUFDSSxXQUFXO1FBQ3pCSCx5REFBVztJQUNmLEVBQUUsVUFBTSxDQUVSO0FBQ0osQ0FBQztBQUVNLFNBQVNLLGFBQWEsS0FBK0IsRUFBRTtRQUFqQyxFQUFFQyxTQUFRLEVBQXFCLEdBQS9COztJQUN6QixNQUFNLENBQUNDLE1BQU1DLFFBQVEsR0FBR1YsK0NBQVFBO0lBQ2hDLE1BQU1XLGtCQUFrQixDQUFDLENBQUNGO0lBRTFCLE1BQU1HLFNBQVMsZUFBNEM7WUFBckMsRUFBRUMsTUFBSyxFQUFFQyxTQUFRLEVBQWU7UUFDbERDLFFBQVFDLEdBQUcsQ0FBQ0gsT0FBT0M7SUFDdkI7SUFFQSxxQkFBTyw4REFBQ1gsWUFBWWMsUUFBUTtRQUFDQyxPQUFPO1lBQUVUO1lBQU1FO1lBQWlCQztRQUFPO2tCQUFJSjs7Ozs7O0FBQzVFLENBQUM7R0FUZUQ7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbnRleHRzL0F1dGhDb250ZXh0LnRzeD8xZmEyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZUNvbnRleHQsIFJlYWN0Tm9kZSwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7ZGVzdHJveUNvb2tpZX0gZnJvbSBcIm5vb2tpZXNcIlxuaW1wb3J0IFJvdXRlciBmcm9tIFwibmV4dC9yb3V0ZXJcIlxuXG50eXBlIFVzZXJQcm9wcyA9IHtcbiAgICBpZDogc3RyaW5nO1xuICAgIG5hbWU6IHN0cmluZztcbiAgICBlbWFpbDogc3RyaW5nO1xufTtcblxudHlwZSBBdXRoQ29udGV4dERhdGEgPSB7XG4gICAgdXNlcjogVXNlclByb3BzO1xuICAgIGlzQXV0aGVudGljYXRlZDogYm9vbGVhbjtcbiAgICBzaWduSW46IChjcmVkZW50aWFsczogU2lnbkluUHJvcHMpID0+IFByb21pc2U8dm9pZD47XG59O1xuXG50eXBlIFNpZ25JblByb3BzID0ge1xuICAgIGVtYWlsOiBzdHJpbmc7XG4gICAgcGFzc3dvcmQ6IHN0cmluZztcbn07XG5cbnR5cGUgQXV0aFByb3ZpZGVyUHJvcHMgPSB7XG4gICAgY2hpbGRyZW46IFJlYWN0Tm9kZTtcbn07XG5cbmV4cG9ydCBjb25zdCBBdXRoQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQoe30gYXMgQXV0aENvbnRleHREYXRhKTtcblxuZXhwb3J0IGZ1bmN0aW9uIHNpZ25PdXQoKSB7XG4gICAgdHJ5e1xuICAgICAgICBkZXN0cm95Q29va2llKHVuZGVmaW5lZCwgXCJAcGl6emVyaWEudG9rZW5cIilcbiAgICAgICAgUm91dGVyLnB1c2hcbiAgICB9IGNhdGNoIHtcbiAgICAgICAgXG4gICAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gQXV0aFByb3ZpZGVyKHsgY2hpbGRyZW4gfTogQXV0aFByb3ZpZGVyUHJvcHMpIHtcbiAgICBjb25zdCBbdXNlciwgc2V0VXNlcl0gPSB1c2VTdGF0ZTxVc2VyUHJvcHMgfCBhbnk+KCk7XG4gICAgY29uc3QgaXNBdXRoZW50aWNhdGVkID0gISF1c2VyO1xuXG4gICAgY29uc3Qgc2lnbkluID0gYXN5bmMgKHsgZW1haWwsIHBhc3N3b3JkIH06IFNpZ25JblByb3BzKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKGVtYWlsLCBwYXNzd29yZCk7XG4gICAgfTtcblxuICAgIHJldHVybiA8QXV0aENvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3sgdXNlciwgaXNBdXRoZW50aWNhdGVkLCBzaWduSW4gfX0+e2NoaWxkcmVufTwvQXV0aENvbnRleHQuUHJvdmlkZXI+O1xufVxuIl0sIm5hbWVzIjpbImNyZWF0ZUNvbnRleHQiLCJ1c2VTdGF0ZSIsImRlc3Ryb3lDb29raWUiLCJSb3V0ZXIiLCJBdXRoQ29udGV4dCIsInNpZ25PdXQiLCJ1bmRlZmluZWQiLCJwdXNoIiwiQXV0aFByb3ZpZGVyIiwiY2hpbGRyZW4iLCJ1c2VyIiwic2V0VXNlciIsImlzQXV0aGVudGljYXRlZCIsInNpZ25JbiIsImVtYWlsIiwicGFzc3dvcmQiLCJjb25zb2xlIiwibG9nIiwiUHJvdmlkZXIiLCJ2YWx1ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/contexts/AuthContext.tsx\n"));

/***/ }),

/***/ "./node_modules/next/router.js":
/*!*************************************!*\
  !*** ./node_modules/next/router.js ***!
  \*************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval(__webpack_require__.ts("module.exports = __webpack_require__(/*! ./dist/client/router */ \"./node_modules/next/dist/client/router.js\")\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9yb3V0ZXIuanMuanMiLCJtYXBwaW5ncyI6IkFBQUEsNkdBQWdEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9uZXh0L3JvdXRlci5qcz8xYmI2Il0sInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9kaXN0L2NsaWVudC9yb3V0ZXInKVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/next/router.js\n"));

/***/ })

});