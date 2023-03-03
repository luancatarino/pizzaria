"use strict";
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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"AuthContext\": function() { return /* binding */ AuthContext; },\n/* harmony export */   \"AuthProvider\": function() { return /* binding */ AuthProvider; },\n/* harmony export */   \"signOut\": function() { return /* binding */ signOut; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _services_apiClient__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/services/apiClient */ \"./src/services/apiClient.ts\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! nookies */ \"./node_modules/nookies/dist/index.js\");\n/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(nookies__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n\nvar _s = $RefreshSig$();\n\n\n\n\nconst AuthContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_4__.createContext)({});\nfunction signOut() {\n    try {\n        (0,nookies__WEBPACK_IMPORTED_MODULE_3__.destroyCookie)(undefined, \"@pizzeria.token\");\n        next_router__WEBPACK_IMPORTED_MODULE_2___default().push(\"/\");\n    } catch (e) {\n        console.log(\"An error ocurred\");\n    }\n}\nfunction AuthProvider(param) {\n    let { children  } = param;\n    _s();\n    const [user, setUser] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)();\n    const isAuthenticated = !!user;\n    const signIn = async (param)=>{\n        let { email , password  } = param;\n        try {\n            const response = await _services_apiClient__WEBPACK_IMPORTED_MODULE_1__.api.post(\"/login\", {\n                email,\n                password\n            });\n            const { id , name , token  } = response.data;\n            (0,nookies__WEBPACK_IMPORTED_MODULE_3__.setCookie)(undefined, \"@pizzeria.token\", token, {\n                maxAge: 60 * 60 * 24 * 30,\n                path: \"/\"\n            });\n            setUser({\n                id,\n                name,\n                email\n            });\n            //Passar o token para as próximas requisições\n            _services_apiClient__WEBPACK_IMPORTED_MODULE_1__.api.defaults.headers.Authorization = \"Bearer \".concat(token);\n        } catch (error) {\n            console.log(\"An error occurred\", error);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(AuthContext.Provider, {\n        value: {\n            user,\n            isAuthenticated,\n            signIn,\n            signOut\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"/Users/luancatarinocurupana/Documents/Coding/Projetos/pizzaria/frontend/src/contexts/AuthContext.tsx\",\n        lineNumber: 72,\n        columnNumber: 12\n    }, this);\n}\n_s(AuthProvider, \"kGLk6m4BT90iK1d91zRYm0C2usk=\");\n_c = AuthProvider;\nvar _c;\n$RefreshReg$(_c, \"AuthProvider\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29udGV4dHMvQXV0aENvbnRleHQudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQTJDO0FBQ1Y7QUFDZ0M7QUFDTjtBQXdCcEQsTUFBTU0sNEJBQWNGLG9EQUFhQSxDQUFDLENBQUMsR0FBc0I7QUFFekQsU0FBU0csVUFBVTtJQUN0QixJQUFJO1FBQ0FMLHNEQUFhQSxDQUFDTSxXQUFXO1FBQ3pCUCx1REFBVyxDQUFDO0lBQ2hCLEVBQUUsVUFBTTtRQUNKUyxRQUFRQyxHQUFHLENBQUM7SUFDaEI7QUFDSixDQUFDO0FBRU0sU0FBU0MsYUFBYSxLQUErQixFQUFFO1FBQWpDLEVBQUVDLFNBQVEsRUFBcUIsR0FBL0I7O0lBQ3pCLE1BQU0sQ0FBQ0MsTUFBTUMsUUFBUSxHQUFHViwrQ0FBUUE7SUFDaEMsTUFBTVcsa0JBQWtCLENBQUMsQ0FBQ0Y7SUFFMUIsTUFBTUcsU0FBUyxlQUE0QztZQUFyQyxFQUFFQyxNQUFLLEVBQUVDLFNBQVEsRUFBZTtRQUNsRCxJQUFJO1lBQ0EsTUFBTUMsV0FBVyxNQUFNcEIseURBQVEsQ0FBQyxVQUFVO2dCQUN0Q2tCO2dCQUFPQztZQUNYO1lBRUEsTUFBTSxFQUFDRyxHQUFFLEVBQUVDLEtBQUksRUFBRUMsTUFBSyxFQUFFLEdBQUdKLFNBQVNLLElBQUk7WUFFekN0QixrREFBU0EsQ0FBQ0ssV0FBVyxtQkFBbUJnQixPQUFPO2dCQUMxQ0UsUUFBUSxLQUFHLEtBQUcsS0FBRztnQkFDakJDLE1BQU07WUFDWDtZQUVBWixRQUFRO2dCQUNQTztnQkFDQUM7Z0JBQ0FMO1lBQ0Q7WUFFQSw2Q0FBNkM7WUFDN0NsQixtRkFBcUMsR0FBRyxVQUFnQixPQUFOd0I7UUFJckQsRUFBRSxPQUFPTSxPQUFPO1lBQ1pwQixRQUFRQyxHQUFHLENBQUMscUJBQXFCbUI7UUFDckM7SUFDSjtJQUVBLHFCQUFPLDhEQUFDeEIsWUFBWXlCLFFBQVE7UUFBQ0MsT0FBTztZQUFFbEI7WUFBTUU7WUFBaUJDO1lBQVFWO1FBQVE7a0JBQUlNOzs7Ozs7QUFDckYsQ0FBQztHQWxDZUQ7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbnRleHRzL0F1dGhDb250ZXh0LnRzeD8xZmEyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGFwaSB9IGZyb20gXCJAL3NlcnZpY2VzL2FwaUNsaWVudFwiO1xuaW1wb3J0IFJvdXRlciBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcbmltcG9ydCB7IGRlc3Ryb3lDb29raWUsIHNldENvb2tpZSwgcGFyc2VDb29raWVzIH0gZnJvbSBcIm5vb2tpZXNcIjtcbmltcG9ydCB7IGNyZWF0ZUNvbnRleHQsIFJlYWN0Tm9kZSwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcblxudHlwZSBVc2VyUHJvcHMgPSB7XG4gICAgaWQ6IHN0cmluZztcbiAgICBuYW1lOiBzdHJpbmc7XG4gICAgZW1haWw6IHN0cmluZztcbn07XG5cbnR5cGUgQXV0aENvbnRleHREYXRhID0ge1xuICAgIHVzZXI6IFVzZXJQcm9wcztcbiAgICBpc0F1dGhlbnRpY2F0ZWQ6IGJvb2xlYW47XG4gICAgc2lnbkluOiAoY3JlZGVudGlhbHM6IFNpZ25JblByb3BzKSA9PiBQcm9taXNlPHZvaWQ+O1xuICAgIHNpZ25PdXQ6ICgpID0+IHZvaWQ7XG59O1xuXG50eXBlIFNpZ25JblByb3BzID0ge1xuICAgIGVtYWlsOiBzdHJpbmc7XG4gICAgcGFzc3dvcmQ6IHN0cmluZztcbn07XG5cbnR5cGUgQXV0aFByb3ZpZGVyUHJvcHMgPSB7XG4gICAgY2hpbGRyZW46IFJlYWN0Tm9kZTtcbn07XG5cbmV4cG9ydCBjb25zdCBBdXRoQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQoe30gYXMgQXV0aENvbnRleHREYXRhKTtcblxuZXhwb3J0IGZ1bmN0aW9uIHNpZ25PdXQoKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgZGVzdHJveUNvb2tpZSh1bmRlZmluZWQsIFwiQHBpenplcmlhLnRva2VuXCIpO1xuICAgICAgICBSb3V0ZXIucHVzaChcIi9cIik7XG4gICAgfSBjYXRjaCB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiQW4gZXJyb3Igb2N1cnJlZFwiKTtcbiAgICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBBdXRoUHJvdmlkZXIoeyBjaGlsZHJlbiB9OiBBdXRoUHJvdmlkZXJQcm9wcykge1xuICAgIGNvbnN0IFt1c2VyLCBzZXRVc2VyXSA9IHVzZVN0YXRlPFVzZXJQcm9wcyB8IGFueT4oKTtcbiAgICBjb25zdCBpc0F1dGhlbnRpY2F0ZWQgPSAhIXVzZXIhO1xuXG4gICAgY29uc3Qgc2lnbkluID0gYXN5bmMgKHsgZW1haWwsIHBhc3N3b3JkIH06IFNpZ25JblByb3BzKSA9PiB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGFwaS5wb3N0KFwiL2xvZ2luXCIsIHsgXG4gICAgICAgICAgICAgICAgZW1haWwsIHBhc3N3b3JkXG4gICAgICAgICAgICB9KVxuXG4gICAgICAgICAgICBjb25zdCB7aWQsIG5hbWUsIHRva2VuIH0gPSByZXNwb25zZS5kYXRhXG5cbiAgICAgICAgICAgc2V0Q29va2llKHVuZGVmaW5lZCwgXCJAcGl6emVyaWEudG9rZW5cIiwgdG9rZW4sIHtcbiAgICAgICAgICAgICAgICBtYXhBZ2U6IDYwKjYwKjI0KjMwLFxuICAgICAgICAgICAgICAgIHBhdGg6IFwiL1wiXG4gICAgICAgICAgIH0pXG5cbiAgICAgICAgICAgc2V0VXNlcih7XG4gICAgICAgICAgICBpZCxcbiAgICAgICAgICAgIG5hbWUsXG4gICAgICAgICAgICBlbWFpbFxuICAgICAgICAgICB9KVxuXG4gICAgICAgICAgIC8vUGFzc2FyIG8gdG9rZW4gcGFyYSBhcyBwcsOzeGltYXMgcmVxdWlzacOnw7Vlc1xuICAgICAgICAgICBhcGkuZGVmYXVsdHMuaGVhZGVyc1tcIkF1dGhvcml6YXRpb25cIl0gPSBgQmVhcmVyICR7dG9rZW59YFxuXG4gICAgICAgICAgIFxuXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIkFuIGVycm9yIG9jY3VycmVkXCIsIGVycm9yKVxuICAgICAgICB9XG4gICAgfTtcblxuICAgIHJldHVybiA8QXV0aENvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3sgdXNlciwgaXNBdXRoZW50aWNhdGVkLCBzaWduSW4sIHNpZ25PdXQgfX0+e2NoaWxkcmVufTwvQXV0aENvbnRleHQuUHJvdmlkZXI+O1xufVxuIl0sIm5hbWVzIjpbImFwaSIsIlJvdXRlciIsImRlc3Ryb3lDb29raWUiLCJzZXRDb29raWUiLCJjcmVhdGVDb250ZXh0IiwidXNlU3RhdGUiLCJBdXRoQ29udGV4dCIsInNpZ25PdXQiLCJ1bmRlZmluZWQiLCJwdXNoIiwiY29uc29sZSIsImxvZyIsIkF1dGhQcm92aWRlciIsImNoaWxkcmVuIiwidXNlciIsInNldFVzZXIiLCJpc0F1dGhlbnRpY2F0ZWQiLCJzaWduSW4iLCJlbWFpbCIsInBhc3N3b3JkIiwicmVzcG9uc2UiLCJwb3N0IiwiaWQiLCJuYW1lIiwidG9rZW4iLCJkYXRhIiwibWF4QWdlIiwicGF0aCIsImRlZmF1bHRzIiwiaGVhZGVycyIsImVycm9yIiwiUHJvdmlkZXIiLCJ2YWx1ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/contexts/AuthContext.tsx\n"));

/***/ })

});