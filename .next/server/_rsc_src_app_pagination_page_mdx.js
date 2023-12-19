"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "_rsc_src_app_pagination_page_mdx";
exports.ids = ["_rsc_src_app_pagination_page_mdx"];
exports.modules = {

/***/ "(rsc)/./src/app/pagination/page.mdx":
/*!*************************************!*\
  !*** ./src/app/pagination/page.mdx ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   metadata: () => (/* binding */ metadata),\n/* harmony export */   sections: () => (/* binding */ sections)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_mdx_import_source_file__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-mdx-import-source-file */ \"(rsc)/./mdx-components.jsx\");\n/*@jsxRuntime automatic @jsxImportSource react*/ \n\nconst metadata = {\n    title: \"Pagination\",\n    description: \"In this guide, we will look at how to work with paginated responses when querying the Protocol API\"\n};\nconst sections = [\n    {\n        title: \"Example using cursors\",\n        id: \"example-using-cursors\",\n        ...undefined\n    }\n];\nfunction _createMdxContent(props) {\n    const _components = Object.assign({\n        h1: \"h1\",\n        p: \"p\",\n        code: \"code\",\n        h2: \"h2\",\n        pre: \"pre\"\n    }, (0,next_mdx_import_source_file__WEBPACK_IMPORTED_MODULE_1__.useMDXComponents)(), props.components), { Row, Col, Properties, Property } = _components;\n    if (!Col) _missingMdxReference(\"Col\", true, \"16:3-32:9\");\n    if (!Properties) _missingMdxReference(\"Properties\", true, \"20:5-30:18\");\n    if (!Property) _missingMdxReference(\"Property\", true, \"21:7-23:18\");\n    if (!Row) _missingMdxReference(\"Row\", true, \"15:1-63:7\");\n    return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components.h1, {\n                children: \"Pagination\"\n            }, undefined, false, {\n                fileName: \"/Users/juddhendrix/pjs/fastifried-documentation/src/app/pagination/page.mdx\",\n                lineNumber: 7,\n                columnNumber: 1\n            }, this),\n            \"\\n\",\n            (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components.p, {\n                children: [\n                    \"In this guide, we will look at how to work with paginated responses when querying the Protocol API. By default, all responses limit results to ten. However, you can go as high as 100 by adding a \",\n                    (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components.code, {\n                        children: \"limit\"\n                    }, undefined, false, {\n                        fileName: \"/Users/juddhendrix/pjs/fastifried-documentation/src/app/pagination/page.mdx\",\n                        lineNumber: 9,\n                        columnNumber: 196\n                    }, this),\n                    \" parameter to your requests. If you are using one of the official Protocol API client libraries, you don't need to worry about pagination, as it's all being taken care of behind the scenes.\"\n                ],\n                ...{\n                    className: \"lead\"\n                }\n            }, undefined, true, {\n                fileName: \"/Users/juddhendrix/pjs/fastifried-documentation/src/app/pagination/page.mdx\",\n                lineNumber: 9,\n                columnNumber: 1\n            }, this),\n            \"\\n\",\n            (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components.p, {\n                children: [\n                    \"When an API response returns a list of objects, no matter the amount, pagination is supported. In paginated responses, objects are nested in a \",\n                    (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components.code, {\n                        children: \"data\"\n                    }, undefined, false, {\n                        fileName: \"/Users/juddhendrix/pjs/fastifried-documentation/src/app/pagination/page.mdx\",\n                        lineNumber: 11,\n                        columnNumber: 144\n                    }, this),\n                    \" attribute and have a \",\n                    (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components.code, {\n                        children: \"has_more\"\n                    }, undefined, false, {\n                        fileName: \"/Users/juddhendrix/pjs/fastifried-documentation/src/app/pagination/page.mdx\",\n                        lineNumber: 11,\n                        columnNumber: 172\n                    }, this),\n                    \" attribute that indicates whether you have reached the end of the last page. You can use the \",\n                    (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components.code, {\n                        children: \"starting_after\"\n                    }, undefined, false, {\n                        fileName: \"/Users/juddhendrix/pjs/fastifried-documentation/src/app/pagination/page.mdx\",\n                        lineNumber: 11,\n                        columnNumber: 275\n                    }, this),\n                    \" and \",\n                    (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components.code, {\n                        children: \"endding_before\"\n                    }, undefined, false, {\n                        fileName: \"/Users/juddhendrix/pjs/fastifried-documentation/src/app/pagination/page.mdx\",\n                        lineNumber: 11,\n                        columnNumber: 296\n                    }, this),\n                    \" query parameters to browse pages.\"\n                ]\n            }, undefined, true, {\n                fileName: \"/Users/juddhendrix/pjs/fastifried-documentation/src/app/pagination/page.mdx\",\n                lineNumber: 11,\n                columnNumber: 1\n            }, this),\n            \"\\n\",\n            (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components.h2, {\n                id: \"example-using-cursors\",\n                children: \"Example using cursors\"\n            }, undefined, false, {\n                fileName: \"/Users/juddhendrix/pjs/fastifried-documentation/src/app/pagination/page.mdx\",\n                lineNumber: 13,\n                columnNumber: 1\n            }, this),\n            \"\\n\",\n            (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Row, {\n                children: [\n                    (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Col, {\n                        children: [\n                            (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components.p, {\n                                children: [\n                                    \"In this example, we request the page that starts after the conversation with id \",\n                                    (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components.code, {\n                                        children: \"s4WycXedwhQrEFuM\"\n                                    }, undefined, false, {\n                                        fileName: \"/Users/juddhendrix/pjs/fastifried-documentation/src/app/pagination/page.mdx\",\n                                        lineNumber: 18,\n                                        columnNumber: 85\n                                    }, this),\n                                    \". As a result, we get a list of three conversations and can tell by the \",\n                                    (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components.code, {\n                                        children: \"has_more\"\n                                    }, undefined, false, {\n                                        fileName: \"/Users/juddhendrix/pjs/fastifried-documentation/src/app/pagination/page.mdx\",\n                                        lineNumber: 18,\n                                        columnNumber: 175\n                                    }, this),\n                                    \" attribute that we have reached the end of the resultset.\"\n                                ]\n                            }, undefined, true, {\n                                fileName: \"/Users/juddhendrix/pjs/fastifried-documentation/src/app/pagination/page.mdx\",\n                                lineNumber: 18,\n                                columnNumber: 5\n                            }, this),\n                            (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Properties, {\n                                children: [\n                                    (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Property, {\n                                        name: \"starting_after\",\n                                        type: \"string\",\n                                        children: (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components.p, {\n                                            children: \"The last ID on the page you're currently on when you want to fetch the next page.\"\n                                        }, undefined, false, {\n                                            fileName: \"/Users/juddhendrix/pjs/fastifried-documentation/src/app/pagination/page.mdx\",\n                                            lineNumber: 22,\n                                            columnNumber: 9\n                                        }, this)\n                                    }, undefined, false, {\n                                        fileName: \"/Users/juddhendrix/pjs/fastifried-documentation/src/app/pagination/page.mdx\",\n                                        lineNumber: 21,\n                                        columnNumber: 7\n                                    }, this),\n                                    (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Property, {\n                                        name: \"ending_before\",\n                                        type: \"string\",\n                                        children: (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components.p, {\n                                            children: \"The first ID on the page you're currently on when you want to fetch the previous page.\"\n                                        }, undefined, false, {\n                                            fileName: \"/Users/juddhendrix/pjs/fastifried-documentation/src/app/pagination/page.mdx\",\n                                            lineNumber: 25,\n                                            columnNumber: 9\n                                        }, this)\n                                    }, undefined, false, {\n                                        fileName: \"/Users/juddhendrix/pjs/fastifried-documentation/src/app/pagination/page.mdx\",\n                                        lineNumber: 24,\n                                        columnNumber: 7\n                                    }, this),\n                                    (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Property, {\n                                        name: \"limit\",\n                                        type: \"integer\",\n                                        children: (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components.p, {\n                                            children: \"Limit the number of items returned.\"\n                                        }, undefined, false, {\n                                            fileName: \"/Users/juddhendrix/pjs/fastifried-documentation/src/app/pagination/page.mdx\",\n                                            lineNumber: 28,\n                                            columnNumber: 9\n                                        }, this)\n                                    }, undefined, false, {\n                                        fileName: \"/Users/juddhendrix/pjs/fastifried-documentation/src/app/pagination/page.mdx\",\n                                        lineNumber: 27,\n                                        columnNumber: 7\n                                    }, this)\n                                ]\n                            }, undefined, true, {\n                                fileName: \"/Users/juddhendrix/pjs/fastifried-documentation/src/app/pagination/page.mdx\",\n                                lineNumber: 20,\n                                columnNumber: 5\n                            }, this)\n                        ]\n                    }, undefined, true, {\n                        fileName: \"/Users/juddhendrix/pjs/fastifried-documentation/src/app/pagination/page.mdx\",\n                        lineNumber: 16,\n                        columnNumber: 3\n                    }, this),\n                    (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Col, {\n                        children: [\n                            (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components.pre, {\n                                language: \"bash\",\n                                code: 'curl -G https://api.protocol.chat/v1/conversations \\\\\\n  -H \"Authorization: Bearer {token}\" \\\\\\n  -d starting_after=\"s4WycXedwhQrEFuM\" \\\\\\n  -d limit=10\\n',\n                                children: (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components.code, {\n                                    className: \"language-bash\",\n                                    children: '<span><span style=\"color: var(--shiki-color-text)\">curl -G https://api.protocol.chat/v1/conversations \\\\</span></span>\\n<span><span style=\"color: var(--shiki-color-text)\">  -H </span><span style=\"color: var(--shiki-token-string-expression)\">&quot;Authorization: Bearer {token}&quot;</span><span style=\"color: var(--shiki-color-text)\"> \\\\</span></span>\\n<span><span style=\"color: var(--shiki-color-text)\">  -d starting_after=</span><span style=\"color: var(--shiki-token-string-expression)\">&quot;s4WycXedwhQrEFuM&quot;</span><span style=\"color: var(--shiki-color-text)\"> \\\\</span></span>\\n<span><span style=\"color: var(--shiki-color-text)\">  -d limit=10</span></span>\\n<span></span>'\n                                }, undefined, false, {\n                                    fileName: \"/Users/juddhendrix/pjs/fastifried-documentation/src/app/pagination/page.mdx\",\n                                    lineNumber: 35,\n                                    columnNumber: 5\n                                }, this),\n                                ...{\n                                    title: \"Manual pagination using cURL\"\n                                }\n                            }, undefined, false, {\n                                fileName: \"/Users/juddhendrix/pjs/fastifried-documentation/src/app/pagination/page.mdx\",\n                                lineNumber: 35,\n                                columnNumber: 5\n                            }, this),\n                            (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components.pre, {\n                                language: \"json\",\n                                code: '{\\n  \"has_more\": false,\\n  \"data\": [\\n    {\\n      \"id\": \"WAz8eIbvDR60rouK\",\\n      // ...\\n    },\\n    {\\n      \"id\": \"hSIhXBhNe8X1d8Et\"\\n      // ...\\n    },\\n    {\\n      \"id\": \"fbwYwpi9C2ybt6Yb\"\\n      // ...\\n    }\\n  ]\\n}\\n',\n                                children: (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components.code, {\n                                    className: \"language-json\",\n                                    children: '<span><span style=\"color: var(--shiki-color-text)\">{</span></span>\\n<span><span style=\"color: var(--shiki-color-text)\">  </span><span style=\"color: var(--shiki-token-keyword)\">&quot;has_more&quot;</span><span style=\"color: var(--shiki-token-punctuation)\">:</span><span style=\"color: var(--shiki-color-text)\"> </span><span style=\"color: var(--shiki-token-constant)\">false</span><span style=\"color: var(--shiki-token-punctuation)\">,</span></span>\\n<span><span style=\"color: var(--shiki-color-text)\">  </span><span style=\"color: var(--shiki-token-keyword)\">&quot;data&quot;</span><span style=\"color: var(--shiki-token-punctuation)\">:</span><span style=\"color: var(--shiki-color-text)\"> [</span></span>\\n<span><span style=\"color: var(--shiki-color-text)\">    {</span></span>\\n<span><span style=\"color: var(--shiki-color-text)\">      </span><span style=\"color: var(--shiki-token-keyword)\">&quot;id&quot;</span><span style=\"color: var(--shiki-token-punctuation)\">:</span><span style=\"color: var(--shiki-color-text)\"> </span><span style=\"color: var(--shiki-token-string-expression)\">&quot;WAz8eIbvDR60rouK&quot;</span><span style=\"color: var(--shiki-token-punctuation)\">,</span></span>\\n<span><span style=\"color: var(--shiki-color-text)\">      </span><span style=\"color: var(--shiki-token-comment)\">// ...</span></span>\\n<span><span style=\"color: var(--shiki-color-text)\">    }</span><span style=\"color: var(--shiki-token-punctuation)\">,</span></span>\\n<span><span style=\"color: var(--shiki-color-text)\">    {</span></span>\\n<span><span style=\"color: var(--shiki-color-text)\">      </span><span style=\"color: var(--shiki-token-keyword)\">&quot;id&quot;</span><span style=\"color: var(--shiki-token-punctuation)\">:</span><span style=\"color: var(--shiki-color-text)\"> </span><span style=\"color: var(--shiki-token-string-expression)\">&quot;hSIhXBhNe8X1d8Et&quot;</span></span>\\n<span><span style=\"color: var(--shiki-color-text)\">      </span><span style=\"color: var(--shiki-token-comment)\">// ...</span></span>\\n<span><span style=\"color: var(--shiki-color-text)\">    }</span><span style=\"color: var(--shiki-token-punctuation)\">,</span></span>\\n<span><span style=\"color: var(--shiki-color-text)\">    {</span></span>\\n<span><span style=\"color: var(--shiki-color-text)\">      </span><span style=\"color: var(--shiki-token-keyword)\">&quot;id&quot;</span><span style=\"color: var(--shiki-token-punctuation)\">:</span><span style=\"color: var(--shiki-color-text)\"> </span><span style=\"color: var(--shiki-token-string-expression)\">&quot;fbwYwpi9C2ybt6Yb&quot;</span></span>\\n<span><span style=\"color: var(--shiki-color-text)\">      </span><span style=\"color: var(--shiki-token-comment)\">// ...</span></span>\\n<span><span style=\"color: var(--shiki-color-text)\">    }</span></span>\\n<span><span style=\"color: var(--shiki-color-text)\">  ]</span></span>\\n<span><span style=\"color: var(--shiki-color-text)\">}</span></span>\\n<span></span>'\n                                }, undefined, false, {\n                                    fileName: \"/Users/juddhendrix/pjs/fastifried-documentation/src/app/pagination/page.mdx\",\n                                    lineNumber: 42,\n                                    columnNumber: 5\n                                }, this),\n                                ...{\n                                    title: \"Paginated response\"\n                                }\n                            }, undefined, false, {\n                                fileName: \"/Users/juddhendrix/pjs/fastifried-documentation/src/app/pagination/page.mdx\",\n                                lineNumber: 42,\n                                columnNumber: 5\n                            }, this)\n                        ]\n                    }, undefined, true, {\n                        fileName: \"/Users/juddhendrix/pjs/fastifried-documentation/src/app/pagination/page.mdx\",\n                        lineNumber: 33,\n                        columnNumber: 3\n                    }, this)\n                ]\n            }, undefined, true, {\n                fileName: \"/Users/juddhendrix/pjs/fastifried-documentation/src/app/pagination/page.mdx\",\n                lineNumber: 15,\n                columnNumber: 1\n            }, this)\n        ]\n    }, undefined, true, {\n        fileName: \"/Users/juddhendrix/pjs/fastifried-documentation/src/app/pagination/page.mdx\",\n        lineNumber: 1,\n        columnNumber: 1\n    }, this);\n}\nfunction MDXContent(props = {}) {\n    const { wrapper: MDXLayout } = Object.assign({}, (0,next_mdx_import_source_file__WEBPACK_IMPORTED_MODULE_1__.useMDXComponents)(), props.components);\n    return MDXLayout ? (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(MDXLayout, Object.assign({}, props, {\n        children: (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_createMdxContent, props, undefined, false, {\n            fileName: \"/Users/juddhendrix/pjs/fastifried-documentation/src/app/pagination/page.mdx\"\n        }, this)\n    }), undefined, false, {\n        fileName: \"/Users/juddhendrix/pjs/fastifried-documentation/src/app/pagination/page.mdx\"\n    }, this) : _createMdxContent(props);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MDXContent);\nfunction _missingMdxReference(id, component, place) {\n    throw new Error(\"Expected \" + (component ? \"component\" : \"object\") + \" `\" + id + \"` to be defined: you likely forgot to import, pass, or provide it.\" + (place ? \"\\nIt’s referenced in your code at `\" + place + \"` in `/Users/juddhendrix/pjs/fastifried-documentation/src/app/pagination/page.mdx`\" : \"\"));\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvYXBwL3BhZ2luYXRpb24vcGFnZS5tZHgiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7TUFBYUEsV0FBQUE7SUFDWEMsT0FBTztJQUNQQyxhQUNFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7MEJBR0Y7Ozs7Ozs7OztvQkFFRjtvQkFBQUMsNkRBQUFBLENBQUFDLFlBQUFDLElBQUE7a0NBQW1NOzs7Ozs7b0JBQU87aUJBQUE7Ozs7Ozs7Ozs7OztvQkFFMU07b0JBQUFGLDZEQUFBQSxDQUFBQyxZQUFBQyxJQUFBO2tDQUErSTs7Ozs7O29CQUFNO29CQUFBRiw2REFBQUEsQ0FBQUMsWUFBQUMsSUFBQTtrQ0FBc0I7Ozs7OztvQkFBVTtvQkFBQUYsNkRBQUFBLENBQUFDLFlBQUFDLElBQUE7a0NBQTZGOzs7Ozs7b0JBQWdCO29CQUFBRiw2REFBQUEsQ0FBQUMsWUFBQUMsSUFBQTtrQ0FBSzs7Ozs7O29CQUFnQjtpQkFBQTs7Ozs7Ozs7OzBCQUVwVDs7Ozs7Ozs7Ozs7OztvQ0FLQztvQ0FBQUYsNkRBQUFBLENBQUFDLFlBQUFDLElBQUE7a0RBQWdGOzs7Ozs7b0NBQWtCO29DQUFBRiw2REFBQUEsQ0FBQUMsWUFBQUMsSUFBQTtrREFBd0U7Ozs7OztvQ0FBVTtpQ0FBQTs7Ozs7Ozs7Ozs7O3NEQUloTDs7Ozs7Ozs7Ozs7Ozs7O3NEQUdBOzs7Ozs7Ozs7Ozs7Ozs7c0RBR0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90YWlsd2luZHVpLXByb3RvY29sLy4vc3JjL2FwcC9wYWdpbmF0aW9uL3BhZ2UubWR4PzE4M2IiXSwibmFtZXMiOlsibWV0YWRhdGEiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwiX2pzeERFViIsIl9jb21wb25lbnRzIiwiY29kZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./src/app/pagination/page.mdx\n");

/***/ })

};
;