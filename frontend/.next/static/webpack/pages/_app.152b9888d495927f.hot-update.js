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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"AuthContext\": function() { return /* binding */ AuthContext; },\n/* harmony export */   \"AuthProvider\": function() { return /* binding */ AuthProvider; },\n/* harmony export */   \"signOut\": function() { return /* binding */ signOut; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _services_apiClient__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/services/apiClient */ \"./src/services/apiClient.ts\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! nookies */ \"./node_modules/nookies/dist/index.js\");\n/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(nookies__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n\nvar _s = $RefreshSig$();\n\n\n\n\nconst AuthContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_4__.createContext)({});\nfunction signOut() {\n    try {\n        (0,nookies__WEBPACK_IMPORTED_MODULE_3__.destroyCookie)(undefined, \"@pizzeria.token\");\n        next_router__WEBPACK_IMPORTED_MODULE_2___default().push(\"/\");\n    } catch (e) {\n        console.log(\"An error ocurred\");\n    }\n}\nfunction AuthProvider(param) {\n    let { children  } = param;\n    _s();\n    const [user, setUser] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)();\n    const isAuthenticated = !!user;\n    const signIn = async (param)=>{\n        let { email , password  } = param;\n        try {\n            const response = await _services_apiClient__WEBPACK_IMPORTED_MODULE_1__.api.post(\"/login\", {\n                email,\n                password\n            });\n            const { id , name , token  } = response.data;\n            (0,nookies__WEBPACK_IMPORTED_MODULE_3__.setCookie)(undefined, \"@pizzeria.token\", token, {\n                maxAge: 60 * 60 * 24 * 30,\n                path: \"/\"\n            });\n            setUser({\n                id,\n                name,\n                email\n            });\n            //Passar o token para as próximas requisições\n            _services_apiClient__WEBPACK_IMPORTED_MODULE_1__.api.defaults.headers.Authorization = \"Bearer \".concat(token);\n            next_router__WEBPACK_IMPORTED_MODULE_2___default().push(\"/dashboard\");\n        } catch (error) {\n            console.log(\"An error occurred\", error);\n        }\n        const signUp = async();\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(AuthContext.Provider, {\n        value: {\n            user,\n            isAuthenticated,\n            signIn,\n            signOut\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"/Users/luancatarinocurupana/Documents/Coding/Projetos/pizzaria/frontend/src/contexts/AuthContext.tsx\",\n        lineNumber: 76,\n        columnNumber: 12\n    }, this);\n}\n_s(AuthProvider, \"kGLk6m4BT90iK1d91zRYm0C2usk=\");\n_c = AuthProvider;\nvar _c;\n$RefreshReg$(_c, \"AuthProvider\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29udGV4dHMvQXV0aENvbnRleHQudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQTJDO0FBQ1Y7QUFDa0I7QUFDUTtBQXdCcEQsTUFBTU0sNEJBQWNGLG9EQUFhQSxDQUFDLENBQUMsR0FBc0I7QUFFekQsU0FBU0csVUFBVTtJQUN0QixJQUFJO1FBQ0FMLHNEQUFhQSxDQUFDTSxXQUFXO1FBQ3pCUCx1REFBVyxDQUFDO0lBQ2hCLEVBQUUsVUFBTTtRQUNKUyxRQUFRQyxHQUFHLENBQUM7SUFDaEI7QUFDSixDQUFDO0FBRU0sU0FBU0MsYUFBYSxLQUErQixFQUFFO1FBQWpDLEVBQUVDLFNBQVEsRUFBcUIsR0FBL0I7O0lBQ3pCLE1BQU0sQ0FBQ0MsTUFBTUMsUUFBUSxHQUFHViwrQ0FBUUE7SUFDaEMsTUFBTVcsa0JBQWtCLENBQUMsQ0FBQ0Y7SUFFMUIsTUFBTUcsU0FBUyxlQUE0QztZQUFyQyxFQUFFQyxNQUFLLEVBQUVDLFNBQVEsRUFBZTtRQUNsRCxJQUFJO1lBQ0EsTUFBTUMsV0FBVyxNQUFNcEIseURBQVEsQ0FBQyxVQUFVO2dCQUN0Q2tCO2dCQUNBQztZQUNKO1lBRUEsTUFBTSxFQUFFRyxHQUFFLEVBQUVDLEtBQUksRUFBRUMsTUFBSyxFQUFFLEdBQUdKLFNBQVNLLElBQUk7WUFFekN0QixrREFBU0EsQ0FBQ0ssV0FBVyxtQkFBbUJnQixPQUFPO2dCQUMzQ0UsUUFBUSxLQUFLLEtBQUssS0FBSztnQkFDdkJDLE1BQU07WUFDVjtZQUVBWixRQUFRO2dCQUNKTztnQkFDQUM7Z0JBQ0FMO1lBQ0o7WUFFQSw2Q0FBNkM7WUFDN0NsQixtRkFBcUMsR0FBRyxVQUFnQixPQUFOd0I7WUFFbER2Qix1REFBVyxDQUFDO1FBQ2hCLEVBQUUsT0FBTzZCLE9BQU87WUFDWnBCLFFBQVFDLEdBQUcsQ0FBQyxxQkFBcUJtQjtRQUNyQztRQUdKLE1BQU1DLFNBQVNDO0lBRWY7SUFFQSxxQkFBTyw4REFBQzFCLFlBQVkyQixRQUFRO1FBQUNDLE9BQU87WUFBRXBCO1lBQU1FO1lBQWlCQztZQUFRVjtRQUFRO2tCQUFJTTs7Ozs7O0FBQ3JGLENBQUM7R0F0Q2VEO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb250ZXh0cy9BdXRoQ29udGV4dC50c3g/MWZhMiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBhcGkgfSBmcm9tIFwiQC9zZXJ2aWNlcy9hcGlDbGllbnRcIjtcbmltcG9ydCBSb3V0ZXIgZnJvbSBcIm5leHQvcm91dGVyXCI7XG5pbXBvcnQgeyBkZXN0cm95Q29va2llLCBzZXRDb29raWUgfSBmcm9tIFwibm9va2llc1wiO1xuaW1wb3J0IHsgY3JlYXRlQ29udGV4dCwgUmVhY3ROb2RlLCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuXG50eXBlIFVzZXJQcm9wcyA9IHtcbiAgICBpZDogc3RyaW5nO1xuICAgIG5hbWU6IHN0cmluZztcbiAgICBlbWFpbDogc3RyaW5nO1xufTtcblxudHlwZSBBdXRoQ29udGV4dERhdGEgPSB7XG4gICAgdXNlcjogVXNlclByb3BzO1xuICAgIGlzQXV0aGVudGljYXRlZDogYm9vbGVhbjtcbiAgICBzaWduSW46IChjcmVkZW50aWFsczogU2lnbkluUHJvcHMpID0+IFByb21pc2U8dm9pZD47XG4gICAgc2lnbk91dDogKCkgPT4gdm9pZDtcbn07XG5cbnR5cGUgU2lnbkluUHJvcHMgPSB7XG4gICAgZW1haWw6IHN0cmluZztcbiAgICBwYXNzd29yZDogc3RyaW5nO1xufTtcblxudHlwZSBBdXRoUHJvdmlkZXJQcm9wcyA9IHtcbiAgICBjaGlsZHJlbjogUmVhY3ROb2RlO1xufTtcblxuZXhwb3J0IGNvbnN0IEF1dGhDb250ZXh0ID0gY3JlYXRlQ29udGV4dCh7fSBhcyBBdXRoQ29udGV4dERhdGEpO1xuXG5leHBvcnQgZnVuY3Rpb24gc2lnbk91dCgpIHtcbiAgICB0cnkge1xuICAgICAgICBkZXN0cm95Q29va2llKHVuZGVmaW5lZCwgXCJAcGl6emVyaWEudG9rZW5cIik7XG4gICAgICAgIFJvdXRlci5wdXNoKFwiL1wiKTtcbiAgICB9IGNhdGNoIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJBbiBlcnJvciBvY3VycmVkXCIpO1xuICAgIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIEF1dGhQcm92aWRlcih7IGNoaWxkcmVuIH06IEF1dGhQcm92aWRlclByb3BzKSB7XG4gICAgY29uc3QgW3VzZXIsIHNldFVzZXJdID0gdXNlU3RhdGU8VXNlclByb3BzIHwgYW55PigpO1xuICAgIGNvbnN0IGlzQXV0aGVudGljYXRlZCA9ICEhdXNlciE7XG5cbiAgICBjb25zdCBzaWduSW4gPSBhc3luYyAoeyBlbWFpbCwgcGFzc3dvcmQgfTogU2lnbkluUHJvcHMpID0+IHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXBpLnBvc3QoXCIvbG9naW5cIiwge1xuICAgICAgICAgICAgICAgIGVtYWlsLFxuICAgICAgICAgICAgICAgIHBhc3N3b3JkLFxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGNvbnN0IHsgaWQsIG5hbWUsIHRva2VuIH0gPSByZXNwb25zZS5kYXRhO1xuXG4gICAgICAgICAgICBzZXRDb29raWUodW5kZWZpbmVkLCBcIkBwaXp6ZXJpYS50b2tlblwiLCB0b2tlbiwge1xuICAgICAgICAgICAgICAgIG1heEFnZTogNjAgKiA2MCAqIDI0ICogMzAsXG4gICAgICAgICAgICAgICAgcGF0aDogXCIvXCIsXG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgc2V0VXNlcih7XG4gICAgICAgICAgICAgICAgaWQsXG4gICAgICAgICAgICAgICAgbmFtZSxcbiAgICAgICAgICAgICAgICBlbWFpbCxcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAvL1Bhc3NhciBvIHRva2VuIHBhcmEgYXMgcHLDs3hpbWFzIHJlcXVpc2nDp8O1ZXNcbiAgICAgICAgICAgIGFwaS5kZWZhdWx0cy5oZWFkZXJzW1wiQXV0aG9yaXphdGlvblwiXSA9IGBCZWFyZXIgJHt0b2tlbn1gO1xuXG4gICAgICAgICAgICBSb3V0ZXIucHVzaChcIi9kYXNoYm9hcmRcIik7XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIkFuIGVycm9yIG9jY3VycmVkXCIsIGVycm9yKTtcbiAgICAgICAgfVxuXG5cbiAgICBjb25zdCBzaWduVXAgPSBhc3luYygpXG5cbiAgICB9O1xuXG4gICAgcmV0dXJuIDxBdXRoQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17eyB1c2VyLCBpc0F1dGhlbnRpY2F0ZWQsIHNpZ25Jbiwgc2lnbk91dCB9fT57Y2hpbGRyZW59PC9BdXRoQ29udGV4dC5Qcm92aWRlcj47XG59XG4iXSwibmFtZXMiOlsiYXBpIiwiUm91dGVyIiwiZGVzdHJveUNvb2tpZSIsInNldENvb2tpZSIsImNyZWF0ZUNvbnRleHQiLCJ1c2VTdGF0ZSIsIkF1dGhDb250ZXh0Iiwic2lnbk91dCIsInVuZGVmaW5lZCIsInB1c2giLCJjb25zb2xlIiwibG9nIiwiQXV0aFByb3ZpZGVyIiwiY2hpbGRyZW4iLCJ1c2VyIiwic2V0VXNlciIsImlzQXV0aGVudGljYXRlZCIsInNpZ25JbiIsImVtYWlsIiwicGFzc3dvcmQiLCJyZXNwb25zZSIsInBvc3QiLCJpZCIsIm5hbWUiLCJ0b2tlbiIsImRhdGEiLCJtYXhBZ2UiLCJwYXRoIiwiZGVmYXVsdHMiLCJoZWFkZXJzIiwiZXJyb3IiLCJzaWduVXAiLCJhc3luYyIsIlByb3ZpZGVyIiwidmFsdWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/contexts/AuthContext.tsx\n"));

/***/ })

});