"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/product",{

/***/ "./src/pages/product/index.tsx":
/*!*************************************!*\
  !*** ./src/pages/product/index.tsx ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; },\n/* harmony export */   \"default\": function() { return /* binding */ Product; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/Header */ \"./src/components/Header/index.tsx\");\n/* harmony import */ var _services_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/services/api */ \"./src/services/api.ts\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_icons_fi__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-icons/fi */ \"./node_modules/react-icons/fi/index.esm.js\");\n/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-toastify */ \"./node_modules/react-toastify/dist/react-toastify.esm.mjs\");\n/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./styles.module.scss */ \"./src/pages/product/styles.module.scss\");\n/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_module_scss__WEBPACK_IMPORTED_MODULE_6__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nvar __N_SSP = true;\nfunction Product(param) {\n    let { categoryList  } = param;\n    _s();\n    const [name, setName] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(\"\");\n    const [price, setPrice] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(\"\");\n    const [description, setDescription] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(\"\");\n    const [avatarUrl, setAvatarUrl] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(\"\");\n    const [imageAvatar, setImageAvatar] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(null);\n    const [categories, setCategories] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(categoryList || []);\n    const [categorySelected, setCategorySelected] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(0);\n    const handleRegister = async (event)=>{\n        event.preventDefault();\n        try {\n            const data = new FormData();\n            if (name === \"\" || price === \"\" || description === \"\" || imageAvatar === null) {\n                react_toastify__WEBPACK_IMPORTED_MODULE_5__.toast.error(\"Missing fields\");\n                return;\n            }\n            data.append(\"name\", name);\n            data.append(\"price\", price);\n            data.append(\"description\", description);\n            data.append(\"category_id\", categories[categorySelected].id);\n            data.append(\"file\", imageAvatar);\n            const apiClient = (0,_services_api__WEBPACK_IMPORTED_MODULE_2__.setUpAPIClient)();\n            await apiClient.post(\"product\", data);\n            react_toastify__WEBPACK_IMPORTED_MODULE_5__.toast.success();\n        } catch (error) {\n            react_toastify__WEBPACK_IMPORTED_MODULE_5__.toast.error(\"Error when registering\");\n        }\n    };\n    const handleFile = (e)=>{\n        if (!e.target.files) {\n            return;\n        }\n        const image = e.target.files[0];\n        if (!image) {\n            return;\n        }\n        if (image.type === \"image/jpeg\" || image.type === \"image/png\") {\n            setImageAvatar(image);\n            setAvatarUrl(URL.createObjectURL(e.target.files[0]));\n        }\n    };\n    const handleChangeCategory = (e)=>{\n        setCategorySelected(e.target.value);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_3___default()), {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                    children: \"New Product - Pizzeria\"\n                }, void 0, false, {\n                    fileName: \"/Users/luancatarinocurupana/Documents/Coding/Projetos/pizzaria/frontend/src/pages/product/index.tsx\",\n                    lineNumber: 81,\n                    columnNumber: 17\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/luancatarinocurupana/Documents/Coding/Projetos/pizzaria/frontend/src/pages/product/index.tsx\",\n                lineNumber: 80,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Header__WEBPACK_IMPORTED_MODULE_1__.Header, {}, void 0, false, {\n                        fileName: \"/Users/luancatarinocurupana/Documents/Coding/Projetos/pizzaria/frontend/src/pages/product/index.tsx\",\n                        lineNumber: 84,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                        className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_6___default().container),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                children: \"New Product\"\n                            }, void 0, false, {\n                                fileName: \"/Users/luancatarinocurupana/Documents/Coding/Projetos/pizzaria/frontend/src/pages/product/index.tsx\",\n                                lineNumber: 86,\n                                columnNumber: 21\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                                onSubmit: handleRegister,\n                                className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_6___default().form),\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                        className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_6___default().labelAvatar),\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_fi__WEBPACK_IMPORTED_MODULE_7__.FiUpload, {\n                                                    size: 30,\n                                                    color: \"#fff\"\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/luancatarinocurupana/Documents/Coding/Projetos/pizzaria/frontend/src/pages/product/index.tsx\",\n                                                    lineNumber: 91,\n                                                    columnNumber: 33\n                                                }, this)\n                                            }, void 0, false, {\n                                                fileName: \"/Users/luancatarinocurupana/Documents/Coding/Projetos/pizzaria/frontend/src/pages/product/index.tsx\",\n                                                lineNumber: 90,\n                                                columnNumber: 29\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                                onChange: handleFile,\n                                                type: \"file\",\n                                                accept: \"image/png, image/jpeg\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/luancatarinocurupana/Documents/Coding/Projetos/pizzaria/frontend/src/pages/product/index.tsx\",\n                                                lineNumber: 94,\n                                                columnNumber: 29\n                                            }, this),\n                                            avatarUrl && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                                className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_6___default().preview),\n                                                src: avatarUrl,\n                                                alt: \"Product Image\",\n                                                width: \"250\",\n                                                height: \"250\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/luancatarinocurupana/Documents/Coding/Projetos/pizzaria/frontend/src/pages/product/index.tsx\",\n                                                lineNumber: 97,\n                                                columnNumber: 33\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/luancatarinocurupana/Documents/Coding/Projetos/pizzaria/frontend/src/pages/product/index.tsx\",\n                                        lineNumber: 89,\n                                        columnNumber: 25\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"select\", {\n                                        value: categorySelected,\n                                        onChange: handleChangeCategory,\n                                        children: categories.map((item, index)=>{\n                                            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                                value: index,\n                                                children: item.name\n                                            }, item.id, false, {\n                                                fileName: \"/Users/luancatarinocurupana/Documents/Coding/Projetos/pizzaria/frontend/src/pages/product/index.tsx\",\n                                                lineNumber: 104,\n                                                columnNumber: 37\n                                            }, this);\n                                        })\n                                    }, void 0, false, {\n                                        fileName: \"/Users/luancatarinocurupana/Documents/Coding/Projetos/pizzaria/frontend/src/pages/product/index.tsx\",\n                                        lineNumber: 101,\n                                        columnNumber: 25\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                        className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_6___default().input),\n                                        value: name,\n                                        onChange: (e)=>setName(e.target.value),\n                                        type: \"text\",\n                                        placeholder: \"Type the product name\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/luancatarinocurupana/Documents/Coding/Projetos/pizzaria/frontend/src/pages/product/index.tsx\",\n                                        lineNumber: 111,\n                                        columnNumber: 25\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                        className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_6___default().input),\n                                        value: price,\n                                        onChange: (e)=>setPrice(e.target.value),\n                                        type: \"text\",\n                                        placeholder: \"Type the product price\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/luancatarinocurupana/Documents/Coding/Projetos/pizzaria/frontend/src/pages/product/index.tsx\",\n                                        lineNumber: 118,\n                                        columnNumber: 25\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"textarea\", {\n                                        value: description,\n                                        onChange: (e)=>setDescription(e.target.value),\n                                        className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_6___default().input),\n                                        placeholder: \"Describe your product\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/luancatarinocurupana/Documents/Coding/Projetos/pizzaria/frontend/src/pages/product/index.tsx\",\n                                        lineNumber: 126,\n                                        columnNumber: 25\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_6___default().buttonAdd),\n                                        type: \"submit\",\n                                        children: \"Register\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/luancatarinocurupana/Documents/Coding/Projetos/pizzaria/frontend/src/pages/product/index.tsx\",\n                                        lineNumber: 128,\n                                        columnNumber: 25\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/luancatarinocurupana/Documents/Coding/Projetos/pizzaria/frontend/src/pages/product/index.tsx\",\n                                lineNumber: 88,\n                                columnNumber: 21\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/luancatarinocurupana/Documents/Coding/Projetos/pizzaria/frontend/src/pages/product/index.tsx\",\n                        lineNumber: 85,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/luancatarinocurupana/Documents/Coding/Projetos/pizzaria/frontend/src/pages/product/index.tsx\",\n                lineNumber: 83,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(Product, \"7yqx17eSJ3XO+lZYj4ZHD9VqICE=\");\n_c = Product;\nvar _c;\n$RefreshReg$(_c, \"Product\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QzVDLDJCQUNHLDhEQUFDNkM7Z0RBQUliLFdBQVd6QyxvRUFBYztnREFBRXdELEtBQUsvQztnREFBV2dELEtBQUk7Z0RBQWdCQyxPQUFNO2dEQUFNQyxRQUFPOzs7Ozs7Ozs7Ozs7a0RBSS9GLDhEQUFDQzt3Q0FBT3ZCLE9BQU90Qjt3Q0FBa0JxQyxVQUFVaEI7a0RBQ3RDdkIsV0FBV2dELEdBQUcsQ0FBQyxDQUFDQyxNQUFNQyxRQUFVOzRDQUM3QixxQkFDSSw4REFBQ0M7Z0RBQXFCM0IsT0FBTzBCOzBEQUN4QkQsS0FBSzNELElBQUk7K0NBREQyRCxLQUFLdEMsRUFBRTs7Ozs7d0NBSTVCOzs7Ozs7a0RBR0osOERBQUMyQjt3Q0FDR1YsV0FBV3pDLGtFQUFZO3dDQUN2QnFDLE9BQU9sQzt3Q0FDUGlELFVBQVUsQ0FBQ3ZCLElBQU16QixRQUFReUIsRUFBRUMsTUFBTSxDQUFDTyxLQUFLO3dDQUN2Q0osTUFBSzt3Q0FDTGdDLGFBQVk7Ozs7OztrREFFaEIsOERBQUNkO3dDQUNHVixXQUFXekMsa0VBQVk7d0NBQ3ZCcUMsT0FBT2hDO3dDQUNQK0MsVUFBVSxDQUFDdkIsSUFBTXZCLFNBQVN1QixFQUFFQyxNQUFNLENBQUNPLEtBQUs7d0NBQ3hDSixNQUFLO3dDQUNMZ0MsYUFBWTs7Ozs7O2tEQUdoQiw4REFBQ0M7d0NBQVM3QixPQUFPOUI7d0NBQWE2QyxVQUFVLENBQUN2QixJQUFNckIsZUFBZXFCLEVBQUVDLE1BQU0sQ0FBQ08sS0FBSzt3Q0FBR0ksV0FBV3pDLGtFQUFZO3dDQUFFaUUsYUFBWTs7Ozs7O2tEQUVwSCw4REFBQ0U7d0NBQU8xQixXQUFXekMsc0VBQWdCO3dDQUFFaUMsTUFBSztrREFBUzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFRM0UsQ0FBQztHQXBIdUJoQztLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvcGFnZXMvcHJvZHVjdC9pbmRleC50c3g/MzRhMiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBIZWFkZXIgfSBmcm9tIFwiQC9jb21wb25lbnRzL0hlYWRlclwiO1xuaW1wb3J0IHsgc2V0VXBBUElDbGllbnQgfSBmcm9tIFwiQC9zZXJ2aWNlcy9hcGlcIjtcbmltcG9ydCB7IGFwaSB9IGZyb20gXCJAL3NlcnZpY2VzL2FwaUNsaWVudFwiO1xuaW1wb3J0IHsgY2FuU1NSQXV0aCB9IGZyb20gXCJAL3V0aWxzL2NhblNTUkF1dGhcIjtcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcbmltcG9ydCB7IENoYW5nZUV2ZW50LCBGb3JtRXZlbnQsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBGaVVwbG9hZCB9IGZyb20gXCJyZWFjdC1pY29ucy9maVwiO1xuaW1wb3J0IHsgdG9hc3QgfSBmcm9tIFwicmVhY3QtdG9hc3RpZnlcIjtcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vc3R5bGVzLm1vZHVsZS5zY3NzXCI7XG5cbnR5cGUgSXRlbVByb3BzID0ge1xuICAgIGlkOiBzdHJpbmc7XG4gICAgbmFtZTogc3RyaW5nO1xufTtcblxuaW50ZXJmYWNlIENhdGVnb3J5UHJvcHMge1xuICAgIGNhdGVnb3J5TGlzdDogSXRlbVByb3BzW107XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFByb2R1Y3QoeyBjYXRlZ29yeUxpc3QgfTogQ2F0ZWdvcnlQcm9wcykge1xuICAgIGNvbnN0IFtuYW1lLCBzZXROYW1lXSA9IHVzZVN0YXRlKFwiXCIpO1xuICAgIGNvbnN0IFtwcmljZSwgc2V0UHJpY2VdID0gdXNlU3RhdGUoXCJcIik7XG4gICAgY29uc3QgW2Rlc2NyaXB0aW9uLCBzZXREZXNjcmlwdGlvbl0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgICBjb25zdCBbYXZhdGFyVXJsLCBzZXRBdmF0YXJVcmxdID0gdXNlU3RhdGUoXCJcIik7XG4gICAgY29uc3QgW2ltYWdlQXZhdGFyLCBzZXRJbWFnZUF2YXRhcl0gPSB1c2VTdGF0ZTxhbnk+KG51bGwpO1xuICAgIGNvbnN0IFtjYXRlZ29yaWVzLCBzZXRDYXRlZ29yaWVzXSA9IHVzZVN0YXRlKGNhdGVnb3J5TGlzdCB8fCBbXSk7XG4gICAgY29uc3QgW2NhdGVnb3J5U2VsZWN0ZWQsIHNldENhdGVnb3J5U2VsZWN0ZWRdID0gdXNlU3RhdGUoMCk7XG5cbiAgICBjb25zdCBoYW5kbGVSZWdpc3RlciA9IGFzeW5jIChldmVudDogRm9ybUV2ZW50KSA9PiB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcblxuICAgICAgICB0cnl7XG4gICAgICAgICAgICBjb25zdCBkYXRhID0gbmV3IEZvcm1EYXRhKClcblxuICAgICAgICAgICAgaWYobmFtZSA9PT0gJycgfHwgcHJpY2UgPT09ICcnIHx8IGRlc2NyaXB0aW9uID09PSAnJyB8fCBpbWFnZUF2YXRhciA9PT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIHRvYXN0LmVycm9yKFwiTWlzc2luZyBmaWVsZHNcIilcbiAgICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZGF0YS5hcHBlbmQoXCJuYW1lXCIsIG5hbWUpO1xuICAgICAgICAgICAgZGF0YS5hcHBlbmQoXCJwcmljZVwiLCBwcmljZSk7XG4gICAgICAgICAgICBkYXRhLmFwcGVuZChcImRlc2NyaXB0aW9uXCIsIGRlc2NyaXB0aW9uKTtcbiAgICAgICAgICAgIGRhdGEuYXBwZW5kKFwiY2F0ZWdvcnlfaWRcIiwgY2F0ZWdvcmllc1tjYXRlZ29yeVNlbGVjdGVkXS5pZCk7XG4gICAgICAgICAgICBkYXRhLmFwcGVuZChcImZpbGVcIiwgaW1hZ2VBdmF0YXIpXG5cbiAgICAgICAgICAgIGNvbnN0IGFwaUNsaWVudCA9IHNldFVwQVBJQ2xpZW50KClcblxuICAgICAgICAgICAgYXdhaXQgYXBpQ2xpZW50LnBvc3QoXCJwcm9kdWN0XCIsIGRhdGEpXG5cbiAgICAgICAgICAgIHRvYXN0LnN1Y2Nlc3MoKVxuXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICB0b2FzdC5lcnJvcihcIkVycm9yIHdoZW4gcmVnaXN0ZXJpbmdcIilcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBjb25zdCBoYW5kbGVGaWxlID0gKGU6IENoYW5nZUV2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+KSA9PiB7XG4gICAgICAgIGlmICghZS50YXJnZXQuZmlsZXMpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGltYWdlID0gZS50YXJnZXQuZmlsZXNbMF07XG5cbiAgICAgICAgaWYgKCFpbWFnZSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGltYWdlLnR5cGUgPT09IFwiaW1hZ2UvanBlZ1wiIHx8IGltYWdlLnR5cGUgPT09IFwiaW1hZ2UvcG5nXCIpIHtcbiAgICAgICAgICAgIHNldEltYWdlQXZhdGFyKGltYWdlKTtcbiAgICAgICAgICAgIHNldEF2YXRhclVybChVUkwuY3JlYXRlT2JqZWN0VVJMKGUudGFyZ2V0LmZpbGVzWzBdKSk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgY29uc3QgaGFuZGxlQ2hhbmdlQ2F0ZWdvcnkgPSAoZTogYW55KSA9PiB7XG4gICAgICAgIHNldENhdGVnb3J5U2VsZWN0ZWQoZS50YXJnZXQudmFsdWUpO1xuICAgIH07XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8PlxuICAgICAgICAgICAgPEhlYWQ+XG4gICAgICAgICAgICAgICAgPHRpdGxlPk5ldyBQcm9kdWN0IC0gUGl6emVyaWE8L3RpdGxlPlxuICAgICAgICAgICAgPC9IZWFkPlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8SGVhZGVyIC8+XG4gICAgICAgICAgICAgICAgPG1haW4gY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cbiAgICAgICAgICAgICAgICAgICAgPGgxPk5ldyBQcm9kdWN0PC9oMT5cblxuICAgICAgICAgICAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlUmVnaXN0ZXJ9IGNsYXNzTmFtZT17c3R5bGVzLmZvcm19PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT17c3R5bGVzLmxhYmVsQXZhdGFyfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZpVXBsb2FkIHNpemU9ezMwfSBjb2xvcj1cIiNmZmZcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBvbkNoYW5nZT17aGFuZGxlRmlsZX0gdHlwZT1cImZpbGVcIiBhY2NlcHQ9XCJpbWFnZS9wbmcsIGltYWdlL2pwZWdcIiAvPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2F2YXRhclVybCAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPXtzdHlsZXMucHJldmlld30gc3JjPXthdmF0YXJVcmx9IGFsdD1cIlByb2R1Y3QgSW1hZ2VcIiB3aWR0aD1cIjI1MFwiIGhlaWdodD1cIjI1MFwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzZWxlY3QgdmFsdWU9e2NhdGVnb3J5U2VsZWN0ZWR9IG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2VDYXRlZ29yeX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2NhdGVnb3JpZXMubWFwKChpdGVtLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiBrZXk9e2l0ZW0uaWR9IHZhbHVlPXtpbmRleH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2l0ZW0ubmFtZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zZWxlY3Q+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmlucHV0fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtuYW1lfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0TmFtZShlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiVHlwZSB0aGUgcHJvZHVjdCBuYW1lXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5pbnB1dH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17cHJpY2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRQcmljZShlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiVHlwZSB0aGUgcHJvZHVjdCBwcmljZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGV4dGFyZWEgdmFsdWU9e2Rlc2NyaXB0aW9ufSBvbkNoYW5nZT17KGUpID0+IHNldERlc2NyaXB0aW9uKGUudGFyZ2V0LnZhbHVlKX0gY2xhc3NOYW1lPXtzdHlsZXMuaW5wdXR9IHBsYWNlaG9sZGVyPVwiRGVzY3JpYmUgeW91ciBwcm9kdWN0XCIgLz5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e3N0eWxlcy5idXR0b25BZGR9IHR5cGU9XCJzdWJtaXRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBSZWdpc3RlclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgICAgICAgICA8L21haW4+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC8+XG4gICAgKTtcbn1cblxuZXhwb3J0IGNvbnN0IGdldFNlcnZlclNpZGVQcm9wcyA9IGNhblNTUkF1dGgoYXN5bmMgKGNvbnRleHQ6IGFueSkgPT4ge1xuICAgIGNvbnN0IGFwaUNsaWVudCA9IHNldFVwQVBJQ2xpZW50KGNvbnRleHQpO1xuXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBhcGlDbGllbnQuZ2V0KFwiL2NhdGVnb3J5XCIpO1xuXG4gICAgY29uc29sZS5sb2cocmVzcG9uc2UuZGF0YSk7XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBwcm9wczoge1xuICAgICAgICAgICAgY2F0ZWdvcnlMaXN0OiByZXNwb25zZS5kYXRhLFxuICAgICAgICB9LFxuICAgIH07XG59KTtcbiJdLCJuYW1lcyI6WyJIZWFkZXIiLCJzZXRVcEFQSUNsaWVudCIsIkhlYWQiLCJ1c2VTdGF0ZSIsIkZpVXBsb2FkIiwidG9hc3QiLCJzdHlsZXMiLCJQcm9kdWN0IiwiY2F0ZWdvcnlMaXN0IiwibmFtZSIsInNldE5hbWUiLCJwcmljZSIsInNldFByaWNlIiwiZGVzY3JpcHRpb24iLCJzZXREZXNjcmlwdGlvbiIsImF2YXRhclVybCIsInNldEF2YXRhclVybCIsImltYWdlQXZhdGFyIiwic2V0SW1hZ2VBdmF0YXIiLCJjYXRlZ29yaWVzIiwic2V0Q2F0ZWdvcmllcyIsImNhdGVnb3J5U2VsZWN0ZWQiLCJzZXRDYXRlZ29yeVNlbGVjdGVkIiwiaGFuZGxlUmVnaXN0ZXIiLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwiZGF0YSIsIkZvcm1EYXRhIiwiZXJyb3IiLCJhcHBlbmQiLCJpZCIsImFwaUNsaWVudCIsInBvc3QiLCJzdWNjZXNzIiwiaGFuZGxlRmlsZSIsImUiLCJ0YXJnZXQiLCJmaWxlcyIsImltYWdlIiwidHlwZSIsIlVSTCIsImNyZWF0ZU9iamVjdFVSTCIsImhhbmRsZUNoYW5nZUNhdGVnb3J5IiwidmFsdWUiLCJ0aXRsZSIsImRpdiIsIm1haW4iLCJjbGFzc05hbWUiLCJjb250YWluZXIiLCJoMSIsImZvcm0iLCJvblN1Ym1pdCIsImxhYmVsIiwibGFiZWxBdmF0YXIiLCJzcGFuIiwic2l6ZSIsImNvbG9yIiwiaW5wdXQiLCJvbkNoYW5nZSIsImFjY2VwdCIsImltZyIsInByZXZpZXciLCJzcmMiLCJhbHQiLCJ3aWR0aCIsImhlaWdodCIsInNlbGVjdCIsIm1hcCIsIml0ZW0iLCJpbmRleCIsIm9wdGlvbiIsInBsYWNlaG9sZGVyIiwidGV4dGFyZWEiLCJidXR0b24iLCJidXR0b25BZGQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/product/index.tsx\n"));

/***/ })

});