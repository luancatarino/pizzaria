/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./src/contexts/AuthContext.tsx":
/*!**************************************!*\
  !*** ./src/contexts/AuthContext.tsx ***!
  \**************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"AuthContext\": () => (/* binding */ AuthContext),\n/* harmony export */   \"AuthProvider\": () => (/* binding */ AuthProvider),\n/* harmony export */   \"signOut\": () => (/* binding */ signOut)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _services_apiClient__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/services/apiClient */ \"./src/services/apiClient.ts\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! nookies */ \"nookies\");\n/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(nookies__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_services_apiClient__WEBPACK_IMPORTED_MODULE_1__]);\n_services_apiClient__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n\n\nconst AuthContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_4__.createContext)({});\nfunction signOut() {\n    try {\n        (0,nookies__WEBPACK_IMPORTED_MODULE_3__.destroyCookie)(undefined, \"@pizzeria.token\");\n        next_router__WEBPACK_IMPORTED_MODULE_2___default().push(\"/\");\n    } catch  {\n        console.log(\"An error ocurred\");\n    }\n}\nfunction AuthProvider({ children  }) {\n    const [user, setUser] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)();\n    const isAuthenticated = !!user;\n    const signIn = async ({ email , password  })=>{\n        try {\n            const response = await _services_apiClient__WEBPACK_IMPORTED_MODULE_1__.api.post(\"/login\", {\n                email,\n                password\n            });\n            const { id , name , token  } = response.data;\n            (0,nookies__WEBPACK_IMPORTED_MODULE_3__.setCookie)(undefined, \"@pizzeria.token\", token, {\n                maxAge: 60 * 60 * 24 * 30,\n                path: \"/\"\n            });\n            setUser({\n                id,\n                name,\n                email\n            });\n            //Passar o token para as próximas requisições\n            _services_apiClient__WEBPACK_IMPORTED_MODULE_1__.api.defaults.headers.Authorization = `Bearer ${token}`;\n            next_router__WEBPACK_IMPORTED_MODULE_2___default().push(\"/dashboard\");\n        } catch (error) {\n            console.log(\"An error occurred\", error);\n        }\n    };\n    const signUp = async ({ name , email , password  })=>{\n        try {\n            const response = await _services_apiClient__WEBPACK_IMPORTED_MODULE_1__.api.post(\"/users\", {\n                name,\n                email,\n                password\n            });\n            next_router__WEBPACK_IMPORTED_MODULE_2___default().push(\"/\");\n        } catch (error) {\n            console.log(\"An error occurred\", error);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(AuthContext.Provider, {\n        value: {\n            user,\n            isAuthenticated,\n            signIn,\n            signOut,\n            signUp\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"/Users/luancatarinocurupana/Documents/Coding/Projetos/pizzaria/frontend/src/contexts/AuthContext.tsx\",\n        lineNumber: 93,\n        columnNumber: 12\n    }, this);\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29udGV4dHMvQXV0aENvbnRleHQudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBMkM7QUFDVjtBQUNrQjtBQUNRO0FBK0JwRCxNQUFNTSw0QkFBY0Ysb0RBQWFBLENBQUMsQ0FBQyxHQUFzQjtBQUV6RCxTQUFTRyxVQUFVO0lBQ3RCLElBQUk7UUFDQUwsc0RBQWFBLENBQUNNLFdBQVc7UUFDekJQLHVEQUFXLENBQUM7SUFDaEIsRUFBRSxPQUFNO1FBQ0pTLFFBQVFDLEdBQUcsQ0FBQztJQUNoQjtBQUNKLENBQUM7QUFFTSxTQUFTQyxhQUFhLEVBQUVDLFNBQVEsRUFBcUIsRUFBRTtJQUMxRCxNQUFNLENBQUNDLE1BQU1DLFFBQVEsR0FBR1YsK0NBQVFBO0lBQ2hDLE1BQU1XLGtCQUFrQixDQUFDLENBQUNGO0lBRTFCLE1BQU1HLFNBQVMsT0FBTyxFQUFFQyxNQUFLLEVBQUVDLFNBQVEsRUFBZSxHQUFLO1FBQ3ZELElBQUk7WUFDQSxNQUFNQyxXQUFXLE1BQU1wQix5REFBUSxDQUFDLFVBQVU7Z0JBQ3RDa0I7Z0JBQ0FDO1lBQ0o7WUFFQSxNQUFNLEVBQUVHLEdBQUUsRUFBRUMsS0FBSSxFQUFFQyxNQUFLLEVBQUUsR0FBR0osU0FBU0ssSUFBSTtZQUV6Q3RCLGtEQUFTQSxDQUFDSyxXQUFXLG1CQUFtQmdCLE9BQU87Z0JBQzNDRSxRQUFRLEtBQUssS0FBSyxLQUFLO2dCQUN2QkMsTUFBTTtZQUNWO1lBRUFaLFFBQVE7Z0JBQ0pPO2dCQUNBQztnQkFDQUw7WUFDSjtZQUVBLDZDQUE2QztZQUM3Q2xCLG1GQUFxQyxHQUFHLENBQUMsT0FBTyxFQUFFd0IsTUFBTSxDQUFDO1lBRXpEdkIsdURBQVcsQ0FBQztRQUNoQixFQUFFLE9BQU82QixPQUFPO1lBQ1pwQixRQUFRQyxHQUFHLENBQUMscUJBQXFCbUI7UUFDckM7SUFDSjtJQUVBLE1BQU1DLFNBQVMsT0FBTyxFQUFFUixLQUFJLEVBQUVMLE1BQUssRUFBRUMsU0FBUSxFQUFlLEdBQUs7UUFDN0QsSUFBSTtZQUNBLE1BQU1DLFdBQVcsTUFBTXBCLHlEQUFRLENBQUMsVUFBVTtnQkFDdEN1QjtnQkFDQUw7Z0JBQ0FDO1lBQ0o7WUFFQWxCLHVEQUFXLENBQUM7UUFDaEIsRUFBRSxPQUFPNkIsT0FBTztZQUNacEIsUUFBUUMsR0FBRyxDQUFDLHFCQUFxQm1CO1FBQ3JDO0lBQ0o7SUFFQSxxQkFBTyw4REFBQ3hCLFlBQVkwQixRQUFRO1FBQUNDLE9BQU87WUFBRW5CO1lBQU1FO1lBQWlCQztZQUFRVjtZQUFTd0I7UUFBTztrQkFBSWxCOzs7Ozs7QUFDN0YsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3BpenphcmlhLy4vc3JjL2NvbnRleHRzL0F1dGhDb250ZXh0LnRzeD8xZmEyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGFwaSB9IGZyb20gXCJAL3NlcnZpY2VzL2FwaUNsaWVudFwiO1xuaW1wb3J0IFJvdXRlciBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcbmltcG9ydCB7IGRlc3Ryb3lDb29raWUsIHNldENvb2tpZSB9IGZyb20gXCJub29raWVzXCI7XG5pbXBvcnQgeyBjcmVhdGVDb250ZXh0LCBSZWFjdE5vZGUsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5cbnR5cGUgVXNlclByb3BzID0ge1xuICAgIGlkOiBzdHJpbmc7XG4gICAgbmFtZTogc3RyaW5nO1xuICAgIGVtYWlsOiBzdHJpbmc7XG59O1xuXG50eXBlIEF1dGhDb250ZXh0RGF0YSA9IHtcbiAgICB1c2VyOiBVc2VyUHJvcHM7XG4gICAgaXNBdXRoZW50aWNhdGVkOiBib29sZWFuO1xuICAgIHNpZ25JbjogKGNyZWRlbnRpYWxzOiBTaWduSW5Qcm9wcykgPT4gUHJvbWlzZTx2b2lkPjtcbiAgICBzaWduT3V0OiAoKSA9PiB2b2lkO1xuICAgIHNpZ25VcDogKGNyZWRlbnRpYWxzOiBTaWduVXBQcm9wcykgPT4gUHJvbWlzZTx2b2lkPjtcbn07XG5cbnR5cGUgU2lnbkluUHJvcHMgPSB7XG4gICAgZW1haWw6IHN0cmluZztcbiAgICBwYXNzd29yZDogc3RyaW5nO1xufTtcblxudHlwZSBTaWduVXBQcm9wcyA9IHtcbiAgICBuYW1lOiBzdHJpbmc7XG4gICAgZW1haWw6IHN0cmluZztcbiAgICBwYXNzd29yZDogc3RyaW5nO1xufTtcblxudHlwZSBBdXRoUHJvdmlkZXJQcm9wcyA9IHtcbiAgICBjaGlsZHJlbjogUmVhY3ROb2RlO1xufTtcblxuZXhwb3J0IGNvbnN0IEF1dGhDb250ZXh0ID0gY3JlYXRlQ29udGV4dCh7fSBhcyBBdXRoQ29udGV4dERhdGEpO1xuXG5leHBvcnQgZnVuY3Rpb24gc2lnbk91dCgpIHtcbiAgICB0cnkge1xuICAgICAgICBkZXN0cm95Q29va2llKHVuZGVmaW5lZCwgXCJAcGl6emVyaWEudG9rZW5cIik7XG4gICAgICAgIFJvdXRlci5wdXNoKFwiL1wiKTtcbiAgICB9IGNhdGNoIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJBbiBlcnJvciBvY3VycmVkXCIpO1xuICAgIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIEF1dGhQcm92aWRlcih7IGNoaWxkcmVuIH06IEF1dGhQcm92aWRlclByb3BzKSB7XG4gICAgY29uc3QgW3VzZXIsIHNldFVzZXJdID0gdXNlU3RhdGU8VXNlclByb3BzIHwgYW55PigpO1xuICAgIGNvbnN0IGlzQXV0aGVudGljYXRlZCA9ICEhdXNlciE7XG5cbiAgICBjb25zdCBzaWduSW4gPSBhc3luYyAoeyBlbWFpbCwgcGFzc3dvcmQgfTogU2lnbkluUHJvcHMpID0+IHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXBpLnBvc3QoXCIvbG9naW5cIiwge1xuICAgICAgICAgICAgICAgIGVtYWlsLFxuICAgICAgICAgICAgICAgIHBhc3N3b3JkLFxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGNvbnN0IHsgaWQsIG5hbWUsIHRva2VuIH0gPSByZXNwb25zZS5kYXRhO1xuXG4gICAgICAgICAgICBzZXRDb29raWUodW5kZWZpbmVkLCBcIkBwaXp6ZXJpYS50b2tlblwiLCB0b2tlbiwge1xuICAgICAgICAgICAgICAgIG1heEFnZTogNjAgKiA2MCAqIDI0ICogMzAsXG4gICAgICAgICAgICAgICAgcGF0aDogXCIvXCIsXG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgc2V0VXNlcih7XG4gICAgICAgICAgICAgICAgaWQsXG4gICAgICAgICAgICAgICAgbmFtZSxcbiAgICAgICAgICAgICAgICBlbWFpbCxcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAvL1Bhc3NhciBvIHRva2VuIHBhcmEgYXMgcHLDs3hpbWFzIHJlcXVpc2nDp8O1ZXNcbiAgICAgICAgICAgIGFwaS5kZWZhdWx0cy5oZWFkZXJzW1wiQXV0aG9yaXphdGlvblwiXSA9IGBCZWFyZXIgJHt0b2tlbn1gO1xuXG4gICAgICAgICAgICBSb3V0ZXIucHVzaChcIi9kYXNoYm9hcmRcIik7XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIkFuIGVycm9yIG9jY3VycmVkXCIsIGVycm9yKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBjb25zdCBzaWduVXAgPSBhc3luYyAoeyBuYW1lLCBlbWFpbCwgcGFzc3dvcmQgfTogU2lnblVwUHJvcHMpID0+IHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXBpLnBvc3QoXCIvdXNlcnNcIiwge1xuICAgICAgICAgICAgICAgIG5hbWUsXG4gICAgICAgICAgICAgICAgZW1haWwsXG4gICAgICAgICAgICAgICAgcGFzc3dvcmQsXG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgUm91dGVyLnB1c2goXCIvXCIpO1xuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJBbiBlcnJvciBvY2N1cnJlZFwiLCBlcnJvcik7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgcmV0dXJuIDxBdXRoQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17eyB1c2VyLCBpc0F1dGhlbnRpY2F0ZWQsIHNpZ25Jbiwgc2lnbk91dCwgc2lnblVwIH19PntjaGlsZHJlbn08L0F1dGhDb250ZXh0LlByb3ZpZGVyPjtcbn1cbiJdLCJuYW1lcyI6WyJhcGkiLCJSb3V0ZXIiLCJkZXN0cm95Q29va2llIiwic2V0Q29va2llIiwiY3JlYXRlQ29udGV4dCIsInVzZVN0YXRlIiwiQXV0aENvbnRleHQiLCJzaWduT3V0IiwidW5kZWZpbmVkIiwicHVzaCIsImNvbnNvbGUiLCJsb2ciLCJBdXRoUHJvdmlkZXIiLCJjaGlsZHJlbiIsInVzZXIiLCJzZXRVc2VyIiwiaXNBdXRoZW50aWNhdGVkIiwic2lnbkluIiwiZW1haWwiLCJwYXNzd29yZCIsInJlc3BvbnNlIiwicG9zdCIsImlkIiwibmFtZSIsInRva2VuIiwiZGF0YSIsIm1heEFnZSIsInBhdGgiLCJkZWZhdWx0cyIsImhlYWRlcnMiLCJlcnJvciIsInNpZ25VcCIsIlByb3ZpZGVyIiwidmFsdWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/contexts/AuthContext.tsx\n");

/***/ }),

/***/ "./src/pages/_app.tsx":
/*!****************************!*\
  !*** ./src/pages/_app.tsx ***!
  \****************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ App)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _contexts_AuthContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/contexts/AuthContext */ \"./src/contexts/AuthContext.tsx\");\n/* harmony import */ var _styles_globals_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../styles/globals.scss */ \"./styles/globals.scss\");\n/* harmony import */ var _styles_globals_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_scss__WEBPACK_IMPORTED_MODULE_2__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_contexts_AuthContext__WEBPACK_IMPORTED_MODULE_1__]);\n_contexts_AuthContext__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\nfunction App({ Component , pageProps  }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_contexts_AuthContext__WEBPACK_IMPORTED_MODULE_1__.AuthProvider, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n            ...pageProps\n        }, void 0, false, {\n            fileName: \"/Users/luancatarinocurupana/Documents/Coding/Projetos/pizzaria/frontend/src/pages/_app.tsx\",\n            lineNumber: 8,\n            columnNumber: 13\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/luancatarinocurupana/Documents/Coding/Projetos/pizzaria/frontend/src/pages/_app.tsx\",\n        lineNumber: 7,\n        columnNumber: 9\n    }, this);\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvX2FwcC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFzRDtBQUVuQjtBQUVwQixTQUFTQyxJQUFJLEVBQUVDLFVBQVMsRUFBRUMsVUFBUyxFQUFZLEVBQUU7SUFDNUQscUJBQ0ksOERBQUNILCtEQUFZQTtrQkFDVCw0RUFBQ0U7WUFBVyxHQUFHQyxTQUFTOzs7Ozs7Ozs7OztBQUdwQyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcGl6emFyaWEvLi9zcmMvcGFnZXMvX2FwcC50c3g/ZjlkNiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBdXRoUHJvdmlkZXIgfSBmcm9tIFwiQC9jb250ZXh0cy9BdXRoQ29udGV4dFwiO1xuaW1wb3J0IHR5cGUgeyBBcHBQcm9wcyB9IGZyb20gXCJuZXh0L2FwcFwiO1xuaW1wb3J0IFwiLi4vLi4vc3R5bGVzL2dsb2JhbHMuc2Nzc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9OiBBcHBQcm9wcykge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxBdXRoUHJvdmlkZXI+XG4gICAgICAgICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XG4gICAgICAgIDwvQXV0aFByb3ZpZGVyPlxuICAgICk7XG59XG4iXSwibmFtZXMiOlsiQXV0aFByb3ZpZGVyIiwiQXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/_app.tsx\n");

/***/ }),

/***/ "./src/services/api.ts":
/*!*****************************!*\
  !*** ./src/services/api.ts ***!
  \*****************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"setUpAPIClient\": () => (/* binding */ setUpAPIClient)\n/* harmony export */ });\n/* harmony import */ var _contexts_AuthContext__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/contexts/AuthContext */ \"./src/contexts/AuthContext.tsx\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! nookies */ \"nookies\");\n/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(nookies__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _erros_AuthTokenError__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./erros/AuthTokenError */ \"./src/services/erros/AuthTokenError.ts\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_contexts_AuthContext__WEBPACK_IMPORTED_MODULE_0__, axios__WEBPACK_IMPORTED_MODULE_1__]);\n([_contexts_AuthContext__WEBPACK_IMPORTED_MODULE_0__, axios__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n\n\nfunction setUpAPIClient(ctx = undefined) {\n    let cookies = (0,nookies__WEBPACK_IMPORTED_MODULE_2__.parseCookies)(ctx);\n    const api = axios__WEBPACK_IMPORTED_MODULE_1__[\"default\"].create({\n        baseURL: \"http://localhost:3333\",\n        headers: {\n            Authorization: `Bearer ${cookies[\"@pizzeria.token\"]}`\n        }\n    });\n    api.interceptors.response.use((response)=>{\n        return response;\n    }, (error)=>{\n        if (error.response.status === 401) {\n            if (true) {\n                (0,_contexts_AuthContext__WEBPACK_IMPORTED_MODULE_0__.signOut)();\n            } else {}\n        }\n        return Promise.reject(error);\n    });\n    return api;\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2VydmljZXMvYXBpLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFpRDtBQUNSO0FBQ0Y7QUFDaUI7QUFFakQsU0FBU0ksZUFBZUMsTUFBTUMsU0FBUyxFQUFFO0lBQzVDLElBQUlDLFVBQVVMLHFEQUFZQSxDQUFDRztJQUUzQixNQUFNRyxNQUFNUCxvREFBWSxDQUFDO1FBQ3JCUyxTQUFTO1FBQ1RDLFNBQVM7WUFDTEMsZUFBZSxDQUFDLE9BQU8sRUFBRUwsT0FBTyxDQUFDLGtCQUFrQixDQUFDLENBQUM7UUFDekQ7SUFDSjtJQUVBQyxJQUFJSyxZQUFZLENBQUNDLFFBQVEsQ0FBQ0MsR0FBRyxDQUFDRCxDQUFBQSxXQUFZO1FBQ3RDLE9BQU9BO0lBQ1gsR0FBRyxDQUFDRSxRQUF1QjtRQUN2QixJQUFHQSxNQUFNRixRQUFRLENBQUVHLE1BQU0sS0FBSyxLQUFLO1lBQy9CLElBQUcsSUFBMkJYLEVBQUU7Z0JBQzVCTiw4REFBT0E7WUFDWCxPQUFPLEVBRU47UUFDTCxDQUFDO1FBRUQsT0FBT2tCLFFBQVFDLE1BQU0sQ0FBQ0g7SUFDMUI7SUFFQSxPQUFPUjtBQUNYLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9waXp6YXJpYS8uL3NyYy9zZXJ2aWNlcy9hcGkudHM/OTU2ZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBzaWduT3V0IH0gZnJvbSBcIkAvY29udGV4dHMvQXV0aENvbnRleHRcIjtcbmltcG9ydCBheGlvcywgeyBBeGlvc0Vycm9yfSBmcm9tIFwiYXhpb3NcIjtcbmltcG9ydCB7IHBhcnNlQ29va2llcyB9IGZyb20gXCJub29raWVzXCI7XG5pbXBvcnQgeyBBdXRoVG9rZW5FcnJvciB9IGZyb20gXCIuL2Vycm9zL0F1dGhUb2tlbkVycm9yXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBzZXRVcEFQSUNsaWVudChjdHggPSB1bmRlZmluZWQpIHtcbiAgICBsZXQgY29va2llcyA9IHBhcnNlQ29va2llcyhjdHgpO1xuXG4gICAgY29uc3QgYXBpID0gYXhpb3MuY3JlYXRlKHtcbiAgICAgICAgYmFzZVVSTDogXCJodHRwOi8vbG9jYWxob3N0OjMzMzNcIixcbiAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgQXV0aG9yaXphdGlvbjogYEJlYXJlciAke2Nvb2tpZXNbJ0BwaXp6ZXJpYS50b2tlbiddfWBcbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgYXBpLmludGVyY2VwdG9ycy5yZXNwb25zZS51c2UocmVzcG9uc2UgPT4ge1xuICAgICAgICByZXR1cm4gcmVzcG9uc2VcbiAgICB9LCAoZXJyb3I6IEF4aW9zRXJyb3IpICA9PiB7XG4gICAgICAgIGlmKGVycm9yLnJlc3BvbnNlIS5zdGF0dXMgPT09IDQwMSkge1xuICAgICAgICAgICAgaWYodHlwZW9mIHdpbmRvdyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgc2lnbk91dCgpXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgQXV0aFRva2VuRXJyb3IoKSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChlcnJvcilcbiAgICB9KVxuXG4gICAgcmV0dXJuIGFwaVxufVxuIl0sIm5hbWVzIjpbInNpZ25PdXQiLCJheGlvcyIsInBhcnNlQ29va2llcyIsIkF1dGhUb2tlbkVycm9yIiwic2V0VXBBUElDbGllbnQiLCJjdHgiLCJ1bmRlZmluZWQiLCJjb29raWVzIiwiYXBpIiwiY3JlYXRlIiwiYmFzZVVSTCIsImhlYWRlcnMiLCJBdXRob3JpemF0aW9uIiwiaW50ZXJjZXB0b3JzIiwicmVzcG9uc2UiLCJ1c2UiLCJlcnJvciIsInN0YXR1cyIsIlByb21pc2UiLCJyZWplY3QiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/services/api.ts\n");

/***/ }),

/***/ "./src/services/apiClient.ts":
/*!***********************************!*\
  !*** ./src/services/apiClient.ts ***!
  \***********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"api\": () => (/* binding */ api)\n/* harmony export */ });\n/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api */ \"./src/services/api.ts\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_api__WEBPACK_IMPORTED_MODULE_0__]);\n_api__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\nconst api = (0,_api__WEBPACK_IMPORTED_MODULE_0__.setUpAPIClient)();\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2VydmljZXMvYXBpQ2xpZW50LnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQXVDO0FBRWhDLE1BQU1DLE1BQU1ELG9EQUFjQSxHQUFHIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcGl6emFyaWEvLi9zcmMvc2VydmljZXMvYXBpQ2xpZW50LnRzPzdkMDEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgc2V0VXBBUElDbGllbnQgfSBmcm9tIFwiLi9hcGlcIjtcblxuZXhwb3J0IGNvbnN0IGFwaSA9IHNldFVwQVBJQ2xpZW50KCk7XG4iXSwibmFtZXMiOlsic2V0VXBBUElDbGllbnQiLCJhcGkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/services/apiClient.ts\n");

/***/ }),

/***/ "./src/services/erros/AuthTokenError.ts":
/*!**********************************************!*\
  !*** ./src/services/erros/AuthTokenError.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"AuthTokenError\": () => (/* binding */ AuthTokenError)\n/* harmony export */ });\nclass AuthTokenError extends Error {\n    constructor(){\n        super(\"Error with authentication token.\");\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2VydmljZXMvZXJyb3MvQXV0aFRva2VuRXJyb3IudHMuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFPLE1BQU1BLHVCQUF1QkM7SUFDaENDLGFBQWM7UUFDVixLQUFLLENBQUM7SUFDVjtBQUNKLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9waXp6YXJpYS8uL3NyYy9zZXJ2aWNlcy9lcnJvcy9BdXRoVG9rZW5FcnJvci50cz8yZWYzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjbGFzcyBBdXRoVG9rZW5FcnJvciBleHRlbmRzIEVycm9yIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoXCJFcnJvciB3aXRoIGF1dGhlbnRpY2F0aW9uIHRva2VuLlwiKTtcbiAgICB9XG59XG4iXSwibmFtZXMiOlsiQXV0aFRva2VuRXJyb3IiLCJFcnJvciIsImNvbnN0cnVjdG9yIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/services/erros/AuthTokenError.ts\n");

/***/ }),

/***/ "./styles/globals.scss":
/*!*****************************!*\
  !*** ./styles/globals.scss ***!
  \*****************************/
/***/ (() => {



/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ "nookies":
/*!**************************!*\
  !*** external "nookies" ***!
  \**************************/
/***/ ((module) => {

"use strict";
module.exports = require("nookies");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = import("axios");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./src/pages/_app.tsx"));
module.exports = __webpack_exports__;

})();