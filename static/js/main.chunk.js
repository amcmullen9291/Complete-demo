(this["webpackJsonpdemo"] = this["webpackJsonpdemo"] || []).push([["main"],{

/***/ "./src/Actions/FinishActions.js":
/*!**************************************!*\
  !*** ./src/Actions/FinishActions.js ***!
  \**************************************/
/*! exports provided: setFinishList, selectedFinish, setName */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setFinishList", function() { return setFinishList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectedFinish", function() { return selectedFinish; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setName", function() { return setName; });
/* harmony import */ var _Constants_Action_type__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Constants/Action.type */ "./src/Constants/Action.type.js");

const setFinishList = list => {
  return {
    type: _Constants_Action_type__WEBPACK_IMPORTED_MODULE_0__["ActionTypes"].SET_FINISHES,
    payload: list
  };
};
const selectedFinish = finish => {
  return {
    type: _Constants_Action_type__WEBPACK_IMPORTED_MODULE_0__["ActionTypes"].SELECTED_FINISH,
    payload: finish
  };
}; //experimental name setting 

const setName = name => {
  return {
    type: _Constants_Action_type__WEBPACK_IMPORTED_MODULE_0__["ActionTypes"].SET_NAME,
    payload: name
  };
};

/***/ }),

/***/ "./src/App.css":
/*!*********************!*\
  !*** ./src/App.css ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/App.js":
/*!********************!*\
  !*** ./src/App.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.css */ "./src/App.css");
/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_App_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _Components_stains__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Components/stains */ "./src/Components/stains.js");
/* harmony import */ var _Components_glazes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Components/glazes */ "./src/Components/glazes.js");
/* harmony import */ var _Components_welcome__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Components/welcome */ "./src/Components/welcome.js");
/* harmony import */ var _Components_paints__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Components/paints */ "./src/Components/paints.js");
/* harmony import */ var _Components_melamine__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Components/melamine */ "./src/Components/melamine.js");
/* harmony import */ var _Components_laminates__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Components/laminates */ "./src/Components/laminates.js");
/* harmony import */ var _Components_emailForm__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Components/emailForm */ "./src/Components/emailForm.js");
var _jsxFileName = "/mnt/c/xampp/htdocs/wordpress/wp-content/themes/demo/react-src/src/App.js";









 //change path to wordpress/:finish

function App() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["BrowserRouter"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Switch"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Route"], {
    path: "/wordpress/",
    exact: true,
    component: _Components_welcome__WEBPACK_IMPORTED_MODULE_5__["default"],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 11
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Route"], {
    path: "/wordpress/stains/",
    exact: true,
    component: _Components_stains__WEBPACK_IMPORTED_MODULE_3__["default"],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 11
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Route"], {
    path: "/wordpress/glazes/",
    exact: true,
    component: _Components_glazes__WEBPACK_IMPORTED_MODULE_4__["default"],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 11
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Route"], {
    path: "/wordpress/paints/",
    exact: true,
    component: _Components_paints__WEBPACK_IMPORTED_MODULE_6__["default"],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 11
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Route"], {
    path: "/wordpress/laminates/",
    exact: true,
    component: _Components_laminates__WEBPACK_IMPORTED_MODULE_8__["default"],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 11
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Route"], {
    path: "/wordpress/melamine/",
    exact: true,
    component: _Components_melamine__WEBPACK_IMPORTED_MODULE_7__["default"],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 11
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Route"], {
    path: "/wordpress/contact/",
    exact: true,
    component: _Components_emailForm__WEBPACK_IMPORTED_MODULE_9__["default"],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 11
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Redirect"], {
    to: "/wordpress/",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 11
    }
  }))));
}

/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ }),

/***/ "./src/Components/emailForm.js":
/*!*************************************!*\
  !*** ./src/Components/emailForm.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return emailForm; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var emailjs_com__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! emailjs-com */ "./node_modules/emailjs-com/es/index.js");
/* harmony import */ var react_select__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-select */ "./node_modules/react-select/dist/react-select.esm.js");
var _jsxFileName = "/mnt/c/xampp/htdocs/wordpress/wp-content/themes/demo/react-src/src/Components/emailForm.js";



function emailForm() {
  function sendEmail(e) {
    e.preventDefault();
    emailjs_com__WEBPACK_IMPORTED_MODULE_1__["default"].sendForm('gmail', 'template_z1a8o4a', e.target, 'YOUR_USER_ID').then(result => {
      window.location.reload(); //This is if you still want the page to reload (since e.preventDefault() cancelled that behavior) 
    }, error => {
      console.log(error.text); //change to Window.alert
    });
  } // const options = [
  //   'Stains', 'Glazes', 'Paints', "Laminates", "Melamine"
  // ];


  const finishes = [{
    label: "Stains",
    value: "Stains"
  }, {
    label: "Glazes",
    value: "Glazes"
  }, {
    label: "Paints",
    value: "Paints"
  }, {
    label: "Laminates",
    value: "Laminates"
  }, {
    label: "Melamine",
    value: "Melamine"
  }];
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    id: "container",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "App",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("center", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    id: "welcomePage",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 21
    }
  }, "Wellborn Cabinets")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    id: "sidenav",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: "navmenu",
    href: "/wordpress/stains",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 7
    }
  }, "\uFF33\uFF54\uFF41\uFF49\uFF4E\uFF53"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 67
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", {
    className: "spacer",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 7
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: "navmenu",
    href: "/wordpress/glazes",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 7
    }
  }, "\uFF27\uFF4C\uFF41\uFF5A\uFF45\uFF53"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 67
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", {
    className: "spacer",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 7
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: "navmenu",
    href: "/wordpress/paints",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 7
    }
  }, "\uFF30\uFF41\uFF49\uFF4E\uFF54\uFF53"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 67
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", {
    className: "spacer",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 7
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: "navmenu",
    href: "/wordpress/laminates",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 7
    }
  }, "\uFF2C\uFF41\uFF4D\uFF49\uFF4E\uFF41\uFF54\uFF45\uFF53"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 73
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", {
    className: "spacer",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 7
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: "navmenu",
    href: "/wordpress/melamine",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 7
    }
  }, "\uFF2D\uFF45\uFF4C\uFF41\uFF4D\uFF49\uFF4E\uFF45"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 7
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 7
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 12
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: "App-link",
    id: "blog-link",
    href: "https://www.wellborn.com/blog/",
    target: "_blank",
    rel: "noopener noreferrer",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 7
    }
  }, "A Wellborn Blog "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 17
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 22
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 27
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 32
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 37
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("center", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 17
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    id: "homebutton",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 25
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    id: "homebuttontext",
    className: "App-link",
    href: "/wordpress",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 49
    }
  }, "Return Home")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    id: "addy",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 13
    }
  }, "38669 Hwy 77 S. Ashland, AL 36251"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 13
    }
  }, "Hello.")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    id: "emailMiddleArea",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    id: "blogHolder",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 1
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
    id: "emailContainer",
    onSubmit: sendEmail,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 3
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 5
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    type: "hidden",
    name: "contact_number",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 7
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    className: "emailText",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 7
    }
  }, "Hello, my name is"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    type: "text",
    id: "emailName",
    name: "from_name",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 7
    }
  }), ".", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 61
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 66
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("center", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 6
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    className: "emailText",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 14
    }
  }, "I would like more information about Wellborn"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_select__WEBPACK_IMPORTED_MODULE_2__["default"], {
    name: "subject",
    id: "emailList",
    options: finishes,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 7
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 7
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 7
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "emailText",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 7
    }
  }, "Additional information:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    type: "text",
    name: "telphone",
    placeholder: "telephone number",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 7
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 75
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    type: "email",
    name: "from_email",
    placeholder: "enter email",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 7
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 72
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    id: "emailSend",
    type: "submit",
    value: "Request Brochure",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 7
    }
  })))))));
}

/***/ }),

/***/ "./src/Components/glazes.js":
/*!**********************************!*\
  !*** ./src/Components/glazes.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _Actions_FinishActions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Actions/FinishActions */ "./src/Actions/FinishActions.js");
var _jsxFileName = "/mnt/c/xampp/htdocs/wordpress/wp-content/themes/demo/react-src/src/Components/glazes.js";




function Glazes() {
  const [glazesList, setGlazesList] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([//Cherry Stains with Glaze
  {
    id: "19",
    nameOf: "AutumnSpiceCharcoal",
    material: "Cherry",
    premium_series: "X",
    estate_series: "X",
    elegant_bath: "X",
    aspire: "X",
    select_series: "",
    home_concepts: "",
    wellborn_closets: "",
    glazes: "X",
    stains: "X",
    laminates: "",
    melamine: "",
    paints: ""
  }, {
    id: "20",
    nameOf: "BlushCharcoal",
    material: "Cherry",
    premium_series: "X",
    estate_series: "X",
    elegant_bath: "X",
    aspire: "X",
    select_series: "X",
    home_concepts: "",
    wellborn_closets: "",
    glazes: "X",
    stains: "X",
    laminates: "",
    melamine: "",
    paints: ""
  }, {
    id: "21",
    nameOf: "BlushJava",
    material: "Cherry",
    premium_series: "X",
    estate_series: "X",
    elegant_bath: "X",
    aspire: "X",
    select_series: "X",
    home_concepts: "",
    wellborn_closets: "",
    glazes: "X",
    stains: "X",
    laminates: "",
    melamine: "",
    paints: ""
  }, {
    id: "22",
    nameOf: "DriftJava",
    material: "Cherry",
    premium_series: "X",
    estate_series: "X",
    elegant_bath: "X",
    aspire: "X",
    select_series: "",
    home_concepts: "",
    wellborn_closets: "",
    glazes: "X",
    stains: "X",
    laminates: "",
    melamine: "",
    paints: ""
  }, {
    id: "23",
    nameOf: "DriftPewter",
    material: "Cherry",
    premium_series: "X",
    estate_series: "X",
    elegant_bath: "X",
    aspire: "X",
    select_series: "",
    home_concepts: "",
    wellborn_closets: "",
    glazes: "X",
    stains: "X",
    laminates: "",
    melamine: "",
    paints: ""
  }, {
    id: "24",
    nameOf: "GauntletCharcoal",
    material: "Cherry",
    premium_series: "X",
    estate_series: "X",
    elegant_bath: "X",
    aspire: "X",
    select_series: "",
    home_concepts: "",
    wellborn_closets: "",
    glazes: "X",
    stains: "X",
    laminates: "",
    melamine: "",
    paints: ""
  }, {
    id: "25",
    nameOf: "EvergreenJava",
    material: "Cherry",
    premium_series: "X",
    estate_series: "X",
    elegant_bath: "X",
    aspire: "X",
    select_series: "",
    home_concepts: "",
    wellborn_closets: "",
    glazes: "X",
    stains: "X",
    laminates: "",
    melamine: "",
    paints: ""
  }, {
    id: "26",
    nameOf: "NutmegJava",
    material: "Cherry",
    premium_series: "X",
    estate_series: "X",
    elegant_bath: "X",
    aspire: "X",
    select_series: "X",
    home_concepts: "",
    wellborn_closets: "",
    glazes: "X",
    stains: "X",
    laminates: "",
    melamine: "",
    paints: ""
  }, {
    id: "27",
    nameOf: "ShadowCharcoal",
    material: "Cherry",
    premium_series: "X",
    estate_series: "X",
    elegant_bath: "X",
    aspire: "X",
    select_series: "X",
    home_concepts: "",
    wellborn_closets: "",
    glazes: "X",
    stains: "X",
    laminates: "",
    melamine: "",
    paints: ""
  }, {
    id: "28",
    nameOf: "ShadowPewter",
    material: "Cherry",
    premium_series: "X",
    estate_series: "X",
    elegant_bath: "X",
    aspire: "X",
    select_series: "",
    home_concepts: "",
    wellborn_closets: "",
    glazes: "X",
    stains: "X",
    laminates: "",
    melamine: "",
    paints: ""
  }, {
    id: "29",
    nameOf: "NaturalSlate",
    material: "Cherry",
    premium_series: "X",
    estate_series: "X",
    elegant_bath: "X",
    aspire: "X",
    select_series: "X",
    home_concepts: "",
    wellborn_closets: "",
    glazes: "X",
    stains: "X",
    laminates: "",
    melamine: "",
    paints: ""
  }, {
    id: "30",
    nameOf: "NaturalJava",
    material: "Cherry",
    premium_series: "X",
    estate_series: "X",
    elegant_bath: "X",
    aspire: "X",
    select_series: "X",
    home_concepts: "",
    wellborn_closets: "",
    glazes: "X",
    stains: "X",
    laminates: "",
    melamine: "",
    paints: ""
  }, {
    id: "31",
    nameOf: "GingerCharcoal",
    material: "Cherry",
    premium_series: "X",
    estate_series: "X",
    elegant_bath: "X",
    aspire: "X",
    select_series: "",
    home_concepts: "",
    wellborn_closets: "",
    glazes: "X",
    stains: "X",
    laminates: "",
    melamine: "",
    paints: ""
  }, {
    id: "32",
    nameOf: "ShaleGranite",
    material: "Cherry",
    premium_series: "X",
    estate_series: "X",
    elegant_bath: "X",
    aspire: "X",
    select_series: "",
    home_concepts: "",
    wellborn_closets: "",
    glazes: "X",
    stains: "X",
    laminates: "",
    melamine: "",
    paints: ""
  }, {
    id: "33",
    nameOf: "DarkChocoal",
    material: "Cherry",
    premium_series: "X",
    estate_series: "X",
    elegant_bath: "X",
    aspire: "X",
    select_series: "",
    home_concepts: "",
    wellborn_closets: "",
    glazes: "X",
    stains: "X",
    laminates: "",
    melamine: "",
    paints: ""
  }, //Maple Stains with Glaze
  {
    id: "45",
    nameOf: "AshCharcoal",
    material: "Maple",
    premium_series: "X",
    estate_series: "X",
    elegant_bath: "X",
    aspire: "X",
    select_series: "",
    home_concepts: "",
    wellborn_closets: "",
    glazes: "X",
    stains: "X",
    laminates: "",
    melamine: "",
    paints: ""
  }, {
    id: "46",
    nameOf: "BlushCharcoal",
    material: "Maple",
    premium_series: "X",
    estate_series: "X",
    elegant_bath: "X",
    aspire: "X",
    select_series: "X",
    home_concepts: "",
    wellborn_closets: "",
    glazes: "X",
    stains: "X",
    laminates: "",
    melamine: "",
    paints: ""
  }, {
    id: "47",
    nameOf: "CaramelJava",
    material: "Maple",
    premium_series: "X",
    estate_series: "X",
    elegant_bath: "X",
    aspire: "X",
    select_series: "X",
    home_concepts: "",
    wellborn_closets: "",
    glazes: "X",
    stains: "X",
    laminates: "",
    melamine: "",
    paints: ""
  }, {
    id: "48",
    nameOf: "EvergreenJava",
    material: "Maple",
    premium_series: "X",
    estate_series: "X",
    elegant_bath: "X",
    aspire: "X",
    select_series: "",
    home_concepts: "",
    wellborn_closets: "",
    glazes: "X",
    stains: "X",
    laminates: "",
    melamine: "",
    paints: ""
  }, {
    id: "49",
    nameOf: "CranberryCharcoal",
    material: "Maple",
    premium_series: "X",
    estate_series: "X",
    elegant_bath: "X",
    aspire: "X",
    select_series: "",
    home_concepts: "",
    wellborn_closets: "",
    glazes: "X",
    stains: "X",
    laminates: "",
    melamine: "",
    paints: ""
  }, {
    id: "50",
    nameOf: "GauntletCharcoal",
    material: "Maple",
    premium_series: "X",
    estate_series: "X",
    elegant_bath: "X",
    aspire: "X",
    select_series: "",
    home_concepts: "",
    wellborn_closets: "",
    glazes: "X",
    stains: "X",
    laminates: "",
    melamine: "",
    paints: ""
  }, {
    id: "51",
    nameOf: "DriftSlate",
    material: "Maple",
    premium_series: "X",
    estate_series: "X",
    elegant_bath: "X",
    aspire: "X",
    select_series: "X",
    home_concepts: "",
    wellborn_closets: "",
    glazes: "X",
    stains: "X",
    laminates: "",
    melamine: "",
    paints: ""
  }, {
    id: "52",
    nameOf: "SableCharcoal",
    material: "Maple",
    premium_series: "X",
    estate_series: "X",
    elegant_bath: "X",
    aspire: "X",
    select_series: "X",
    home_concepts: "",
    wellborn_closets: "",
    glazes: "X",
    stains: "X",
    laminates: "",
    melamine: "",
    paints: ""
  }, {
    id: "53",
    nameOf: "OatmealCharcoal",
    material: "Maple",
    premium_series: "X",
    estate_series: "X",
    elegant_bath: "X",
    aspire: "X",
    select_series: "",
    home_concepts: "",
    wellborn_closets: "",
    glazes: "X",
    stains: "X",
    laminates: "",
    melamine: "",
    paints: ""
  }, {
    id: "54",
    nameOf: "ShaleMocha",
    material: "Maple",
    premium_series: "X",
    estate_series: "X",
    elegant_bath: "X",
    aspire: "X",
    select_series: "",
    home_concepts: "",
    wellborn_closets: "",
    glazes: "X",
    stains: "X",
    laminates: "",
    melamine: "",
    paints: ""
  }, {
    id: "55",
    nameOf: "OatmealJava",
    material: "Maple",
    premium_series: "X",
    estate_series: "X",
    elegant_bath: "X",
    aspire: "X",
    select_series: "",
    home_concepts: "",
    wellborn_closets: "",
    glazes: "X",
    stains: "X",
    laminates: "",
    melamine: "",
    paints: ""
  }, {
    id: "56",
    nameOf: "SiennaCharcoal",
    material: "Maple",
    premium_series: "X",
    estate_series: "X",
    elegant_bath: "X",
    aspire: "X",
    select_series: "X",
    home_concepts: "",
    wellborn_closets: "",
    glazes: "X",
    stains: "X",
    laminates: "",
    melamine: "",
    paints: ""
  }, {
    id: "57",
    nameOf: "HoneyJava",
    material: "Maple",
    premium_series: "X",
    estate_series: "X",
    elegant_bath: "X",
    aspire: "X",
    select_series: "X",
    home_concepts: "",
    wellborn_closets: "",
    glazes: "X",
    stains: "X",
    laminates: "",
    melamine: "",
    paints: ""
  }, {
    id: "58",
    nameOf: "NaturalSlate",
    material: "Maple",
    premium_series: "X",
    estate_series: "X",
    elegant_bath: "X",
    aspire: "X",
    select_series: "X",
    home_concepts: "",
    wellborn_closets: "",
    glazes: "X",
    stains: "X",
    laminates: "",
    melamine: "",
    paints: ""
  }, //Maple Paints with Glaze
  {
    id: "67",
    nameOf: "AquaGranite",
    material: "Maple",
    premium_series: "X",
    estate_series: "X",
    elegant_bath: "X",
    aspire: "X",
    select_series: "",
    home_concepts: "",
    wellborn_closets: "",
    glazes: "X",
    stains: "",
    laminates: "",
    melamine: "",
    paints: "X"
  }, {
    id: "68",
    nameOf: "AquaJava",
    material: "Maple",
    premium_series: "X",
    estate_series: "X",
    elegant_bath: "X",
    aspire: "X",
    select_series: "",
    home_concepts: "",
    wellborn_closets: "",
    glazes: "X",
    stains: "",
    laminates: "",
    melamine: "",
    paints: "X"
  }, {
    id: "69",
    nameOf: "MinkGrayGranite",
    material: "Maple",
    premium_series: "X",
    estate_series: "X",
    elegant_bath: "X",
    aspire: "X",
    select_series: "",
    home_concepts: "",
    wellborn_closets: "",
    glazes: "X",
    stains: "",
    laminates: "",
    melamine: "",
    paints: "X"
  }, {
    id: "70",
    nameOf: "DoveSlate",
    material: "Maple",
    premium_series: "X",
    estate_series: "X",
    elegant_bath: "X",
    aspire: "X",
    select_series: "X",
    home_concepts: "",
    wellborn_closets: "",
    glazes: "X",
    stains: "",
    laminates: "",
    melamine: "",
    paints: "X"
  }, {
    id: "71",
    nameOf: "GlacierJava",
    material: "Maple",
    premium_series: "X",
    estate_series: "X",
    elegant_bath: "X",
    aspire: "X",
    select_series: "X",
    home_concepts: "",
    wellborn_closets: "",
    glazes: "X",
    stains: "",
    laminates: "",
    melamine: "",
    paints: "X"
  }, {
    id: "72",
    nameOf: "MintGranite",
    material: "Maple",
    premium_series: "X",
    estate_series: "X",
    elegant_bath: "X",
    aspire: "X",
    select_series: "",
    home_concepts: "",
    wellborn_closets: "",
    glazes: "X",
    stains: "",
    laminates: "",
    melamine: "",
    paints: "X"
  }, {
    id: "73",
    nameOf: "PebblePewter",
    material: "Maple",
    premium_series: "X",
    estate_series: "X",
    elegant_bath: "X",
    aspire: "X",
    select_series: "",
    home_concepts: "",
    wellborn_closets: "",
    glazes: "X",
    stains: "",
    laminates: "",
    melamine: "",
    paints: "X"
  }, {
    id: "74",
    nameOf: "OliveMocha",
    material: "Maple",
    premium_series: "X",
    estate_series: "X",
    elegant_bath: "X",
    aspire: "X",
    select_series: "",
    home_concepts: "",
    wellborn_closets: "",
    glazes: "X",
    stains: "",
    laminates: "",
    melamine: "",
    paints: "X"
  }, {
    id: "75",
    nameOf: "PebbleJava",
    material: "Maple",
    premium_series: "X",
    estate_series: "X",
    elegant_bath: "X",
    aspire: "X",
    select_series: "X",
    home_concepts: "",
    wellborn_closets: "",
    glazes: "X",
    stains: "",
    laminates: "",
    melamine: "",
    paints: "X"
  }, {
    id: "76",
    nameOf: "WillowJava",
    material: "Maple",
    premium_series: "X",
    estate_series: "X",
    elegant_bath: "X",
    aspire: "X",
    select_series: "",
    home_concepts: "",
    wellborn_closets: "",
    glazes: "X",
    stains: "",
    laminates: "",
    melamine: "",
    paints: "X"
  }, {
    id: "77",
    nameOf: "SapphireJava",
    material: "Maple",
    premium_series: "X",
    estate_series: "X",
    elegant_bath: "X",
    aspire: "X",
    select_series: "",
    home_concepts: "",
    wellborn_closets: "",
    glazes: "X",
    stains: "",
    laminates: "",
    melamine: "",
    paints: "X"
  }, {
    id: "78",
    nameOf: "DivinityJava",
    material: "Maple",
    premium_series: "X",
    estate_series: "X",
    elegant_bath: "X",
    aspire: "X",
    select_series: "X",
    home_concepts: "",
    wellborn_closets: "",
    glazes: "X",
    stains: "",
    laminates: "",
    melamine: "",
    paints: "X"
  }, {
    id: "79",
    nameOf: "OlivePewter",
    material: "Maple",
    premium_series: "X",
    estate_series: "X",
    elegant_bath: "X",
    aspire: "X",
    select_series: "",
    home_concepts: "",
    wellborn_closets: "",
    glazes: "X",
    stains: "",
    laminates: "",
    melamine: "",
    paints: "X"
  }, {
    id: "80",
    nameOf: "GrayMistGranite",
    material: "Maple",
    premium_series: "X",
    estate_series: "X",
    elegant_bath: "X",
    aspire: "X",
    select_series: "X",
    home_concepts: "",
    wellborn_closets: "",
    glazes: "X",
    stains: "",
    laminates: "",
    melamine: "",
    paints: "X"
  }, //Oak Paints with Glaze
  {
    id: "120",
    nameOf: "OliveMocha",
    material: "Oak",
    premium_series: "X",
    estate_series: "X",
    elegant_bath: "X",
    aspire: "X",
    select_series: "",
    home_concepts: "",
    wellborn_closets: "",
    glazes: "X",
    stains: "",
    laminates: "",
    melamine: "",
    paints: "X"
  }, {
    id: "121",
    nameOf: "OlivePewter",
    material: "Oak",
    premium_series: "X",
    estate_series: "X",
    elegant_bath: "X",
    aspire: "X",
    select_series: "",
    home_concepts: "",
    wellborn_closets: "",
    glazes: "X",
    stains: "",
    laminates: "",
    melamine: "",
    paints: "X"
  }, {
    id: "122",
    nameOf: "OysterWhiteGranite",
    material: "Oak",
    premium_series: "X",
    estate_series: "X",
    elegant_bath: "X",
    aspire: "X",
    select_series: "",
    home_concepts: "",
    wellborn_closets: "",
    glazes: "X",
    stains: "",
    laminates: "",
    melamine: "",
    paints: "X"
  }, {
    id: "123",
    nameOf: "OysterWhiteJava",
    material: "Oak",
    premium_series: "X",
    estate_series: "X",
    elegant_bath: "X",
    aspire: "X",
    select_series: "",
    home_concepts: "",
    wellborn_closets: "",
    glazes: "X",
    stains: "",
    laminates: "",
    melamine: "",
    paints: "X"
  }, {
    id: "124",
    nameOf: "PebbleJava",
    material: "Oak",
    premium_series: "X",
    estate_series: "X",
    elegant_bath: "X",
    aspire: "X",
    select_series: "X",
    home_concepts: "",
    wellborn_closets: "",
    glazes: "X",
    stains: "",
    laminates: "",
    melamine: "",
    paints: "X"
  }, {
    id: "125",
    nameOf: "PebblePewter",
    material: "Oak",
    premium_series: "X",
    estate_series: "X",
    elegant_bath: "X",
    aspire: "X",
    select_series: "",
    home_concepts: "",
    wellborn_closets: "",
    glazes: "X",
    stains: "",
    laminates: "",
    melamine: "",
    paints: "X"
  }, {
    id: "126",
    nameOf: "SandstonePewter",
    material: "Oak",
    premium_series: "X",
    estate_series: "X",
    elegant_bath: "X",
    aspire: "X",
    select_series: "",
    home_concepts: "",
    wellborn_closets: "",
    glazes: "X",
    stains: "",
    laminates: "",
    melamine: "",
    paints: "X"
  }, {
    id: "127",
    nameOf: "SandstoneSlate",
    material: "Oak",
    premium_series: "X",
    estate_series: "X",
    elegant_bath: "X",
    aspire: "X",
    select_series: "X",
    home_concepts: "",
    wellborn_closets: "",
    glazes: "X",
    stains: "",
    laminates: "",
    melamine: "",
    paints: "X"
  }, {
    id: "128",
    nameOf: "SapphireGranite",
    material: "Oak",
    premium_series: "X",
    estate_series: "X",
    elegant_bath: "X",
    aspire: "X",
    select_series: "",
    home_concepts: "",
    wellborn_closets: "",
    glazes: "X",
    stains: "",
    laminates: "",
    melamine: "",
    paints: "X"
  }, {
    id: "129",
    nameOf: "DoveSlate",
    material: "Oak",
    premium_series: "X",
    estate_series: "X",
    elegant_bath: "X",
    aspire: "X",
    select_series: "X",
    home_concepts: "",
    wellborn_closets: "",
    glazes: "X",
    stains: "",
    laminates: "",
    melamine: "",
    paints: "X"
  }, //Hickory Stains with Glaze
  {
    id: "140",
    nameOf: "EvergreenJava",
    material: "Hickory",
    premium_series: "X",
    estate_series: "X",
    elegant_bath: "X",
    aspire: "X",
    select_series: "",
    home_concepts: "",
    wellborn_closets: "",
    glazes: "X",
    stains: "X",
    laminates: "",
    melamine: "",
    paints: ""
  }, {
    id: "141",
    nameOf: "GauntletCharcoal",
    material: "Hickory",
    premium_series: "X",
    estate_series: "X",
    elegant_bath: "X",
    aspire: "X",
    select_series: "",
    home_concepts: "",
    wellborn_closets: "",
    glazes: "X",
    stains: "X",
    laminates: "",
    melamine: "",
    paints: ""
  }, {
    id: "142",
    nameOf: "GauntletJava",
    material: "Hickory",
    premium_series: "X",
    estate_series: "X",
    elegant_bath: "X",
    aspire: "X",
    select_series: "",
    home_concepts: "",
    wellborn_closets: "",
    glazes: "X",
    stains: "X",
    laminates: "",
    melamine: "",
    paints: ""
  }, {
    id: "143",
    nameOf: "GingerCharcoal",
    material: "Hickory",
    premium_series: "X",
    estate_series: "X",
    elegant_bath: "X",
    aspire: "X",
    select_series: "",
    home_concepts: "",
    wellborn_closets: "",
    glazes: "X",
    stains: "X",
    laminates: "",
    melamine: "",
    paints: ""
  }, {
    id: "144",
    nameOf: "GingerJava",
    material: "Hickory",
    premium_series: "X",
    estate_series: "X",
    elegant_bath: "X",
    aspire: "X",
    select_series: "",
    home_concepts: "",
    wellborn_closets: "",
    glazes: "X",
    stains: "X",
    laminates: "",
    melamine: "",
    paints: ""
  }, {
    id: "145",
    nameOf: "HazelCharcoal",
    material: "Hickory",
    premium_series: "X",
    estate_series: "X",
    elegant_bath: "X",
    aspire: "X",
    select_series: "",
    home_concepts: "",
    wellborn_closets: "",
    glazes: "X",
    stains: "X",
    laminates: "",
    melamine: "",
    paints: ""
  }, {
    id: "146",
    nameOf: "HoneyJava",
    material: "Hickory",
    premium_series: "X",
    estate_series: "X",
    elegant_bath: "X",
    aspire: "X",
    select_series: "X",
    home_concepts: "",
    wellborn_closets: "",
    glazes: "X",
    stains: "X",
    laminates: "",
    melamine: "",
    paints: ""
  }, {
    id: "147",
    nameOf: "LightJava",
    material: "Hickory",
    premium_series: "X",
    estate_series: "X",
    elegant_bath: "X",
    aspire: "X",
    select_series: "X",
    home_concepts: "",
    wellborn_closets: "",
    glazes: "X",
    stains: "X",
    laminates: "",
    melamine: "",
    paints: ""
  }, {
    id: "148",
    nameOf: "LightSlate",
    material: "Hickory",
    premium_series: "X",
    estate_series: "X",
    elegant_bath: "X",
    aspire: "X",
    select_series: "X",
    home_concepts: "",
    wellborn_closets: "",
    glazes: "X",
    stains: "X",
    laminates: "",
    melamine: "",
    paints: ""
  }, {
    id: "149",
    nameOf: "NaturalSlate",
    material: "Hickory",
    premium_series: "X",
    estate_series: "X",
    elegant_bath: "X",
    aspire: "X",
    select_series: "X",
    home_concepts: "",
    wellborn_closets: "",
    glazes: "X",
    stains: "X",
    laminates: "",
    melamine: "",
    paints: ""
  }, {
    id: "150",
    nameOf: "ShaleMocha",
    material: "Hickory",
    premium_series: "X",
    estate_series: "X",
    elegant_bath: "X",
    aspire: "X",
    select_series: "",
    home_concepts: "",
    wellborn_closets: "",
    glazes: "X",
    stains: "X",
    laminates: "",
    melamine: "",
    paints: ""
  }, {
    id: "151",
    nameOf: "SiennaCharcoal",
    material: "Hickory",
    premium_series: "X",
    estate_series: "X",
    elegant_bath: "X",
    aspire: "X",
    select_series: "X",
    home_concepts: "",
    wellborn_closets: "",
    glazes: "X",
    stains: "X",
    laminates: "",
    melamine: "",
    paints: ""
  }, {
    id: "152",
    nameOf: "SuedeCharcoal",
    material: "Hickory",
    premium_series: "X",
    estate_series: "X",
    elegant_bath: "X",
    aspire: "X",
    select_series: "",
    home_concepts: "",
    wellborn_closets: "",
    glazes: "X",
    stains: "X",
    laminates: "",
    melamine: "",
    paints: ""
  }]);
  const dispatch2 = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useDispatch"])();

  const fetchGlazes = () => {
    dispatch2(Object(_Actions_FinishActions__WEBPACK_IMPORTED_MODULE_2__["selectedFinish"])(glazesList));
    console.log("Current listings:", glazesList);
  };

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    fetchGlazes();
  }, []);
  const count = glazesList.length;

  if (Object.keys(glazesList).length > 0) {
    var RenderGlazes = glazesList.map(glaze => {
      const {
        id,
        nameOf,
        material,
        premium_series,
        aspire,
        estate_series,
        elegant_bath,
        select_series,
        home_concepts
      } = glaze;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 96,
          columnNumber: 13
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", {
        key: id,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 98,
          columnNumber: 11
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
        className: "rowcss",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 99,
          columnNumber: 13
        }
      }, nameOf), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
        className: "tableSpacer",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 99,
          columnNumber: 49
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
        className: "FinishMaterial",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 99,
          columnNumber: 82
        }
      }, material), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
        className: "tableSpacer",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 99,
          columnNumber: 128
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
        className: "FinishSeries",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 99,
          columnNumber: 161
        }
      }, premium_series), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
        className: "FinishSeries",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 99,
          columnNumber: 211
        }
      }, estate_series), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
        className: "FinishSeries",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 99,
          columnNumber: 260
        }
      }, elegant_bath), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
        className: "FinishSeries",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 99,
          columnNumber: 308
        }
      }, aspire), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
        className: "FinishSeries",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 99,
          columnNumber: 350
        }
      }, home_concepts), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
        className: "FinishSeries",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 99,
          columnNumber: 399
        }
      }, select_series)));
    });
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    id: "container",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "App",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("center", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    id: "welcomePage",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 21
    }
  }, "Wellborn Cabinets")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    id: "sidenav",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: "navmenu",
    href: "/wordpress/stains",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 7
    }
  }, "\uFF33\uFF54\uFF41\uFF49\uFF4E\uFF53"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 67
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", {
    className: "spacer",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 7
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: "navmenu",
    href: "/wordpress/glazes",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114,
      columnNumber: 7
    }
  }, "\uFF27\uFF4C\uFF41\uFF5A\uFF45\uFF53"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114,
      columnNumber: 67
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", {
    className: "spacer",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 7
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: "navmenu",
    href: "/wordpress/paints",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 7
    }
  }, "\uFF30\uFF41\uFF49\uFF4E\uFF54\uFF53"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 67
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", {
    className: "spacer",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117,
      columnNumber: 7
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: "navmenu",
    href: "/wordpress/laminates",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118,
      columnNumber: 7
    }
  }, "\uFF2C\uFF41\uFF4D\uFF49\uFF4E\uFF41\uFF54\uFF45\uFF53"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118,
      columnNumber: 73
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", {
    className: "spacer",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119,
      columnNumber: 7
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: "navmenu",
    href: "/wordpress/melamine",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120,
      columnNumber: 7
    }
  }, "\uFF2D\uFF45\uFF4C\uFF41\uFF4D\uFF49\uFF4E\uFF45"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121,
      columnNumber: 7
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122,
      columnNumber: 7
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122,
      columnNumber: 12
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: "App-link",
    id: "blog-link",
    href: "https://www.wellborn.com/blog/",
    target: "_blank",
    rel: "noopener noreferrer",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123,
      columnNumber: 7
    }
  }, "A Wellborn Blog "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125,
      columnNumber: 17
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125,
      columnNumber: 22
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("center", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126,
      columnNumber: 17
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    id: "homebutton",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126,
      columnNumber: 25
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    id: "homebuttontext",
    className: "App-link",
    href: "/wordpress",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126,
      columnNumber: 49
    }
  }, "Return Home")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    id: "addy",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128,
      columnNumber: 13
    }
  }, "38669 Hwy 77 S. Ashland, AL 36251"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131,
      columnNumber: 13
    }
  }, "Hello.")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    id: "middleArea",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    id: "emailButton",
    href: "/wordpress/contact",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134,
      columnNumber: 5
    }
  }, "Contact Us"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    id: "blogHolder",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135,
      columnNumber: 1
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("center", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    id: "blog",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136,
      columnNumber: 13
    }
  }, "Glazes Page (", count, " now showing)")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    id: "tableborder",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    id: "selectedFinish",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("table", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", {
    className: "header",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141,
      columnNumber: 11
    }
  }, "Finish"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142,
      columnNumber: 11
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143,
      columnNumber: 11
    }
  }, "Material"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144,
      columnNumber: 11
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
    colSpan: "6",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145,
      columnNumber: 11
    }
  }, "Product Line")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147,
      columnNumber: 13
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147,
      columnNumber: 22
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147,
      columnNumber: 31
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147,
      columnNumber: 40
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147,
      columnNumber: 49
    }
  }, "PremiumSeries"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147,
      columnNumber: 71
    }
  }, "EstateSeries"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147,
      columnNumber: 92
    }
  }, "ElegantBath"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147,
      columnNumber: 112
    }
  }, "Aspire"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147,
      columnNumber: 127
    }
  }, "HomeConcepts"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147,
      columnNumber: 148
    }
  }, "SelectSeries")), RenderGlazes)))))));
}

/* harmony default export */ __webpack_exports__["default"] = (Glazes);

/***/ }),

/***/ "./src/Components/laminates.js":
/*!*************************************!*\
  !*** ./src/Components/laminates.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _Actions_FinishActions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Actions/FinishActions */ "./src/Actions/FinishActions.js");
var _jsxFileName = "/mnt/c/xampp/htdocs/wordpress/wp-content/themes/demo/react-src/src/Components/laminates.js";




function Laminates() {
  const [laminatesList, setLaminatesList] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([{
    id: "178",
    nameOf: "Linen",
    material: "Laminate",
    premium_series: "",
    estate_series: "",
    elegant_bath: "",
    aspire: "",
    select_series: "X",
    home_concepts: "X",
    wellborn_closets: "",
    glazes: "",
    stains: "",
    laminates: "X",
    melamine: "",
    paints: ""
  }, {
    id: "179",
    nameOf: "NaturalMaple",
    material: "Laminate",
    premium_series: "",
    estate_series: "",
    elegant_bath: "",
    aspire: "",
    select_series: "X",
    home_concepts: "X",
    wellborn_closets: "",
    glazes: "",
    stains: "",
    laminates: "X",
    melamine: "",
    paints: ""
  }, {
    id: "180",
    nameOf: "Sienna",
    material: "Laminate",
    premium_series: "",
    estate_series: "",
    elegant_bath: "",
    aspire: "",
    select_series: "X",
    home_concepts: "X",
    wellborn_closets: "",
    glazes: "",
    stains: "",
    laminates: "X",
    melamine: "",
    paints: ""
  }, {
    id: "181",
    nameOf: "Spiceberry",
    material: "Laminate",
    premium_series: "",
    estate_series: "",
    elegant_bath: "",
    aspire: "",
    select_series: "X",
    home_concepts: "X",
    wellborn_closets: "",
    glazes: "",
    stains: "",
    laminates: "X",
    melamine: "",
    paints: ""
  }, {
    id: "182",
    nameOf: "White",
    material: "Laminate",
    premium_series: "",
    estate_series: "",
    elegant_bath: "",
    aspire: "",
    select_series: "X",
    home_concepts: "X",
    wellborn_closets: "",
    glazes: "",
    stains: "",
    laminates: "X",
    melamine: "",
    paints: ""
  }, //Designer Laminates
  {
    id: "183",
    nameOf: "BronzedLeather",
    material: "Designer Laminate",
    premium_series: "",
    estate_series: "",
    elegant_bath: "",
    aspire: "X",
    select_series: "",
    home_concepts: "",
    wellborn_closets: "",
    glazes: "",
    stains: "",
    laminates: "X",
    melamine: "",
    paints: ""
  }, {
    id: "184",
    nameOf: "Dusk",
    material: "Designer Laminate",
    premium_series: "",
    estate_series: "",
    elegant_bath: "",
    aspire: "X",
    select_series: "",
    home_concepts: "",
    wellborn_closets: "",
    glazes: "",
    stains: "",
    laminates: "X",
    melamine: "",
    paints: ""
  }, {
    id: "185",
    nameOf: "HighGlossCinder",
    material: "Designer Laminate",
    premium_series: "",
    estate_series: "",
    elegant_bath: "",
    aspire: "X",
    select_series: "",
    home_concepts: "",
    wellborn_closets: "",
    glazes: "",
    stains: "",
    laminates: "X",
    melamine: "",
    paints: ""
  }, {
    id: "186",
    nameOf: "HighGlossEbony",
    material: "Designer Laminate",
    premium_series: "",
    estate_series: "",
    elegant_bath: "",
    aspire: "X",
    select_series: "",
    home_concepts: "",
    wellborn_closets: "",
    glazes: "",
    stains: "",
    laminates: "X",
    melamine: "",
    paints: ""
  }, {
    id: "187",
    nameOf: "HighGlossGold",
    material: "Designer Laminate",
    premium_series: "",
    estate_series: "",
    elegant_bath: "",
    aspire: "X",
    select_series: "",
    home_concepts: "",
    wellborn_closets: "",
    glazes: "",
    stains: "",
    laminates: "X",
    melamine: "",
    paints: ""
  }, {
    id: "188",
    nameOf: "HighGlossMoonlight",
    material: "Designer Laminate",
    premium_series: "",
    estate_series: "",
    elegant_bath: "",
    aspire: "X",
    select_series: "",
    home_concepts: "",
    wellborn_closets: "",
    glazes: "",
    stains: "",
    laminates: "X",
    melamine: "",
    paints: ""
  }, {
    id: "189",
    nameOf: "HighGlossPoppyRed",
    material: "Designer Laminate",
    premium_series: "",
    estate_series: "",
    elegant_bath: "",
    aspire: "X",
    select_series: "",
    home_concepts: "",
    wellborn_closets: "",
    glazes: "",
    stains: "",
    laminates: "X",
    melamine: "",
    paints: ""
  }, {
    id: "190",
    nameOf: "HighGlossStardust",
    material: "Designer Laminate",
    premium_series: "",
    estate_series: "",
    elegant_bath: "",
    aspire: "X",
    select_series: "",
    home_concepts: "",
    wellborn_closets: "",
    glazes: "",
    stains: "",
    laminates: "X",
    melamine: "",
    paints: ""
  }]);
  const dispatch2 = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useDispatch"])();

  const fetchLaminates = () => {
    dispatch2(Object(_Actions_FinishActions__WEBPACK_IMPORTED_MODULE_2__["selectedFinish"])(laminatesList));
    console.log("Current listings:", laminatesList);
  };

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    fetchLaminates();
  }, []);
  const count = laminatesList.length;

  if (Object.keys(laminatesList).length > 0) {
    var RenderLaminates = laminatesList.map(glaze => {
      const {
        id,
        nameOf,
        material,
        premium_series,
        aspire,
        estate_series,
        elegant_bath,
        select_series,
        home_concepts
      } = glaze;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39,
          columnNumber: 13
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", {
        key: id,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41,
          columnNumber: 11
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
        className: "rowcss",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42,
          columnNumber: 13
        }
      }, nameOf), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
        className: "tableSpacer",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42,
          columnNumber: 49
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
        className: "FinishMaterial",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42,
          columnNumber: 82
        }
      }, material), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
        className: "tableSpacer",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42,
          columnNumber: 128
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
        className: "FinishSeries",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42,
          columnNumber: 161
        }
      }, premium_series), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
        className: "FinishSeries",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42,
          columnNumber: 211
        }
      }, estate_series), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
        className: "FinishSeries",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42,
          columnNumber: 260
        }
      }, elegant_bath), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
        className: "FinishSeries",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42,
          columnNumber: 308
        }
      }, aspire), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
        className: "FinishSeries",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42,
          columnNumber: 350
        }
      }, home_concepts), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
        className: "FinishSeries",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42,
          columnNumber: 399
        }
      }, select_series)));
    });
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    id: "container",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "App",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("center", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    id: "welcomePage",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 21
    }
  }, "Wellborn Cabinets")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    id: "sidenav",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: "navmenu",
    href: "/wordpress/stains",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 7
    }
  }, "\uFF33\uFF54\uFF41\uFF49\uFF4E\uFF53"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 67
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", {
    className: "spacer",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 7
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: "navmenu",
    href: "/wordpress/glazes",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 7
    }
  }, "\uFF27\uFF4C\uFF41\uFF5A\uFF45\uFF53"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 67
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", {
    className: "spacer",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 7
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: "navmenu",
    href: "/wordpress/paints",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 7
    }
  }, "\uFF30\uFF41\uFF49\uFF4E\uFF54\uFF53"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 67
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", {
    className: "spacer",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 7
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: "navmenu",
    href: "/wordpress/laminates",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 7
    }
  }, "\uFF2C\uFF41\uFF4D\uFF49\uFF4E\uFF41\uFF54\uFF45\uFF53"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 73
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", {
    className: "spacer",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 7
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: "navmenu",
    href: "/wordpress/melamine",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 7
    }
  }, "\uFF2D\uFF45\uFF4C\uFF41\uFF4D\uFF49\uFF4E\uFF45"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 7
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 7
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 12
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: "App-link",
    id: "blog-link",
    href: "https://www.wellborn.com/blog/",
    target: "_blank",
    rel: "noopener noreferrer",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 7
    }
  }, "A Wellborn Blog "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 17
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 22
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("center", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 17
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    id: "homebutton",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 25
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    id: "homebuttontext",
    className: "App-link",
    href: "/wordpress",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 49
    }
  }, "Return Home")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    id: "addy",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 13
    }
  }, "38669 Hwy 77 S. Ashland, AL 36251"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 13
    }
  }, "Hello.")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    id: "middleArea",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    id: "emailButton",
    href: "/wordpress/contact",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 5
    }
  }, "Contact Us"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    id: "blogHolder",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 1
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("center", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    id: "blog",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 13
    }
  }, "Laminates Page (", count, " now showing)")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    id: "tableborder",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    id: "selectedFinish",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("table", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", {
    className: "header",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 11
    }
  }, "Finish"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 11
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 11
    }
  }, "Material"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 11
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
    colSpan: "6",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 11
    }
  }, "Product Line")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 13
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 22
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 31
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 40
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 49
    }
  }, "PremiumSeries"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 71
    }
  }, "EstateSeries"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 92
    }
  }, "ElegantBath"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 112
    }
  }, "Aspire"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 127
    }
  }, "HomeConcepts"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 148
    }
  }, "SelectSeries")), RenderLaminates)))))));
}

/* harmony default export */ __webpack_exports__["default"] = (Laminates);

/***/ }),

/***/ "./src/Components/melamine.js":
/*!************************************!*\
  !*** ./src/Components/melamine.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _Actions_FinishActions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Actions/FinishActions */ "./src/Actions/FinishActions.js");
var _jsxFileName = "/mnt/c/xampp/htdocs/wordpress/wp-content/themes/demo/react-src/src/Components/melamine.js";




function Melamine() {
  const [melamineList, setMelamineList] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([//Melamine
  {
    id: "191",
    nameOf: "BiscottiCherry",
    material: "Melamine",
    premium_series: "",
    estate_series: "",
    elegant_bath: "",
    aspire: "X",
    select_series: "",
    home_concepts: "",
    wellborn_closets: "",
    glazes: "",
    stains: "",
    laminates: "X",
    melamine: "",
    paints: ""
  }, {
    id: "192",
    nameOf: "ChicoryAlder",
    material: "Melamine",
    premium_series: "",
    estate_series: "",
    elegant_bath: "",
    aspire: "X",
    select_series: "",
    home_concepts: "",
    wellborn_closets: "",
    glazes: "",
    stains: "",
    laminates: "X",
    melamine: "",
    paints: ""
  }, {
    id: "193",
    nameOf: "CinderAlder",
    material: "Melamine",
    premium_series: "",
    estate_series: "",
    elegant_bath: "",
    aspire: "X",
    select_series: "",
    home_concepts: "",
    wellborn_closets: "",
    glazes: "",
    stains: "",
    laminates: "X",
    melamine: "",
    paints: ""
  }, {
    id: "194",
    nameOf: "HuskAlder",
    material: "Melamine",
    premium_series: "",
    estate_series: "",
    elegant_bath: "",
    aspire: "X",
    select_series: "",
    home_concepts: "",
    wellborn_closets: "",
    glazes: "",
    stains: "",
    laminates: "X",
    melamine: "",
    paints: ""
  }, {
    id: "195",
    nameOf: "PlatinumAlder",
    material: "Melamine",
    premium_series: "",
    estate_series: "",
    elegant_bath: "",
    aspire: "X",
    select_series: "",
    home_concepts: "",
    wellborn_closets: "",
    glazes: "",
    stains: "",
    laminates: "X",
    melamine: "",
    paints: ""
  }, //Heavy Texture Melamine
  {
    id: "196",
    nameOf: "CottonPine",
    material: "Heavy Texture Melamine",
    premium_series: "",
    estate_series: "",
    elegant_bath: "",
    aspire: "X",
    select_series: "",
    home_concepts: "",
    wellborn_closets: "",
    glazes: "",
    stains: "",
    laminates: "X",
    melamine: "",
    paints: ""
  }, {
    id: "197",
    nameOf: "PuttyOak",
    material: "Heavy Texture Melamine",
    premium_series: "",
    estate_series: "",
    elegant_bath: "",
    aspire: "X",
    select_series: "",
    home_concepts: "",
    wellborn_closets: "",
    glazes: "",
    stains: "",
    laminates: "X",
    melamine: "",
    paints: ""
  }, {
    id: "198",
    nameOf: "SmokeOak",
    material: "Heavy Texture Melamine",
    premium_series: "",
    estate_series: "",
    elegant_bath: "",
    aspire: "X",
    select_series: "",
    home_concepts: "",
    wellborn_closets: "",
    glazes: "",
    stains: "",
    laminates: "X",
    melamine: "",
    paints: ""
  }, {
    id: "199",
    nameOf: "SnowOak",
    material: "Heavy Texture Melamine",
    premium_series: "",
    estate_series: "",
    elegant_bath: "",
    aspire: "X",
    select_series: "",
    home_concepts: "",
    wellborn_closets: "",
    glazes: "",
    stains: "",
    laminates: "X",
    melamine: "",
    paints: ""
  }, {
    id: "200",
    nameOf: "ZincOak",
    material: "Heavy Texture Melamine",
    premium_series: "",
    estate_series: "",
    elegant_bath: "",
    aspire: "X",
    select_series: "",
    home_concepts: "",
    wellborn_closets: "",
    glazes: "",
    stains: "",
    laminates: "X",
    melamine: "",
    paints: ""
  }]);
  const dispatch3 = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useDispatch"])();

  const fetchGlazes = () => {
    dispatch3(Object(_Actions_FinishActions__WEBPACK_IMPORTED_MODULE_2__["selectedFinish"])(melamineList));
    console.log("Current listings:", melamineList);
  };

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    fetchGlazes();
  }, []);
  const count = melamineList.length;

  if (Object.keys(melamineList).length > 0) {
    var RenderMelamine = melamineList.map(glaze => {
      const {
        id,
        nameOf,
        material,
        premium_series,
        aspire,
        estate_series,
        elegant_bath,
        select_series,
        home_concepts
      } = glaze;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38,
          columnNumber: 13
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", {
        key: id,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40,
          columnNumber: 11
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
        className: "rowcss",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41,
          columnNumber: 13
        }
      }, nameOf), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
        className: "tableSpacer",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41,
          columnNumber: 49
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
        className: "FinishMaterial",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41,
          columnNumber: 82
        }
      }, material), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
        className: "tableSpacer",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41,
          columnNumber: 128
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
        className: "FinishSeries",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41,
          columnNumber: 161
        }
      }, premium_series), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
        className: "FinishSeries",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41,
          columnNumber: 211
        }
      }, estate_series), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
        className: "FinishSeries",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41,
          columnNumber: 260
        }
      }, elegant_bath), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
        className: "FinishSeries",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41,
          columnNumber: 308
        }
      }, aspire), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
        className: "FinishSeries",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41,
          columnNumber: 350
        }
      }, home_concepts), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
        className: "FinishSeries",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41,
          columnNumber: 399
        }
      }, select_series)));
    });
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    id: "container",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "App",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("center", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    id: "welcomePage",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 21
    }
  }, "Wellborn Cabinets")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    id: "sidenav",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: "navmenu",
    href: "/wordpress/stains",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 7
    }
  }, "\uFF33\uFF54\uFF41\uFF49\uFF4E\uFF53"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 67
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", {
    className: "spacer",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 7
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: "navmenu",
    href: "/wordpress/glazes",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 7
    }
  }, "\uFF27\uFF4C\uFF41\uFF5A\uFF45\uFF53"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 67
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", {
    className: "spacer",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 7
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: "navmenu",
    href: "/wordpress/paints",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 7
    }
  }, "\uFF30\uFF41\uFF49\uFF4E\uFF54\uFF53"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 67
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", {
    className: "spacer",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 7
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: "navmenu",
    href: "/wordpress/laminates",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 7
    }
  }, "\uFF2C\uFF41\uFF4D\uFF49\uFF4E\uFF41\uFF54\uFF45\uFF53"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 73
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", {
    className: "spacer",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 7
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: "navmenu",
    href: "/wordpress/melamine",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 7
    }
  }, "\uFF2D\uFF45\uFF4C\uFF41\uFF4D\uFF49\uFF4E\uFF45"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 7
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 7
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 12
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: "App-link",
    id: "blog-link",
    href: "https://www.wellborn.com/blog/",
    target: "_blank",
    rel: "noopener noreferrer",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 7
    }
  }, "A Wellborn Blog "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 17
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 22
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("center", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 17
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    id: "homebutton",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 25
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    id: "homebuttontext",
    className: "App-link",
    href: "/wordpress",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 49
    }
  }, "Return Home")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    id: "addy",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 13
    }
  }, "38669 Hwy 77 S. Ashland, AL 36251"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 13
    }
  }, "Hello.")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    id: "middleArea",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    id: "emailButton",
    href: "/wordpress/contact",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 5
    }
  }, "Contact Us"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    id: "blogHolder",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 1
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("center", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    id: "blog",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 13
    }
  }, "Melamine Page (", count, " now showing)")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    id: "tableborder",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    id: "selectedFinish",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("table", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", {
    className: "header",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 11
    }
  }, "Finish"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 11
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 11
    }
  }, "Material"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 11
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
    colSpan: "6",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 11
    }
  }, "Product Line")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 13
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 22
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 31
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 40
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 49
    }
  }, "PremiumSeries"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 71
    }
  }, "EstateSeries"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 92
    }
  }, "ElegantBath"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 112
    }
  }, "Aspire"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 127
    }
  }, "HomeConcepts"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 148
    }
  }, "SelectSeries")), RenderMelamine)))))));
}

/* harmony default export */ __webpack_exports__["default"] = (Melamine);

/***/ }),

/***/ "./src/Components/middlearea.js":
/*!**************************************!*\
  !*** ./src/Components/middlearea.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/mnt/c/xampp/htdocs/wordpress/wp-content/themes/demo/react-src/src/Components/middlearea.js";


function middlearea() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    id: "middleArea",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    id: "blogHolder",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("center", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    id: "blog",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 17
    }
  }, "Since 1961, the Wellborn family has owned and operated Wellborn Cabinet, Inc., located in Ashland, Alabama. Our goal is to provide kitchen and bath cabinets crafted by dedicated Wellborn employees with the utmost quality and care. Today, over 55 years later, our product line has broadened to include cabinetry and storage solutions to help you maximize your total home living space. Wellborn Cabinet, Inc., Your Whole Home Design Solution."))));
}

/* harmony default export */ __webpack_exports__["default"] = (middlearea);

/***/ }),

/***/ "./src/Components/paints.js":
/*!**********************************!*\
  !*** ./src/Components/paints.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _Actions_FinishActions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Actions/FinishActions */ "./src/Actions/FinishActions.js");
var _jsxFileName = "/mnt/c/xampp/htdocs/wordpress/wp-content/themes/demo/react-src/src/Components/paints.js";




function Paints() {
  const [paintsList, setPaintsList] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([//MDF Paints
  {
    id: "153",
    nameOf: "Mint",
    material: "MDF",
    premium_series: "X",
    estate_series: "X",
    elegant_bath: "X",
    aspire: "X",
    select_series: "",
    home_concepts: "",
    wellborn_closets: "",
    glazes: "",
    stains: "",
    laminates: "",
    melamine: "",
    paints: "X"
  }, {
    id: "154",
    nameOf: "Olive",
    material: "MDF",
    premium_series: "X",
    estate_series: "X",
    elegant_bath: "X",
    aspire: "X",
    select_series: "",
    home_concepts: "",
    wellborn_closets: "",
    glazes: "",
    stains: "",
    laminates: "",
    melamine: "",
    paints: "X"
  }, {
    id: "155",
    nameOf: "Onyx",
    material: "MDF",
    premium_series: "X",
    estate_series: "X",
    elegant_bath: "X",
    aspire: "X",
    select_series: "X",
    home_concepts: "",
    wellborn_closets: "",
    glazes: "",
    stains: "",
    laminates: "",
    melamine: "",
    paints: "X"
  }, {
    id: "156",
    nameOf: "OysterWhite",
    material: "MDF",
    premium_series: "X",
    estate_series: "X",
    elegant_bath: "X",
    aspire: "X",
    select_series: "",
    home_concepts: "",
    wellborn_closets: "",
    glazes: "",
    stains: "",
    laminates: "",
    melamine: "",
    paints: "X"
  }, {
    id: "157",
    nameOf: "Pebble",
    material: "MDF",
    premium_series: "X",
    estate_series: "X",
    elegant_bath: "X",
    aspire: "X",
    select_series: "X",
    home_concepts: "",
    wellborn_closets: "",
    glazes: "",
    stains: "",
    laminates: "",
    melamine: "",
    paints: "X"
  }, {
    id: "158",
    nameOf: "Sandstone",
    material: "MDF",
    premium_series: "X",
    estate_series: "X",
    elegant_bath: "X",
    aspire: "X",
    select_series: "X",
    home_concepts: "",
    wellborn_closets: "",
    glazes: "",
    stains: "",
    laminates: "",
    melamine: "",
    paints: "X"
  }, {
    id: "159",
    nameOf: "Willow",
    material: "MDF",
    premium_series: "X",
    estate_series: "X",
    elegant_bath: "X",
    aspire: "X",
    select_series: "X",
    home_concepts: "",
    wellborn_closets: "",
    glazes: "",
    stains: "",
    laminates: "",
    melamine: "",
    paints: "X"
  }, {
    id: "160",
    nameOf: "Aqua",
    material: "MDF",
    premium_series: "X",
    estate_series: "X",
    elegant_bath: "X",
    aspire: "X",
    select_series: "",
    home_concepts: "",
    wellborn_closets: "",
    glazes: "",
    stains: "",
    laminates: "",
    melamine: "",
    paints: "X"
  }, {
    id: "161",
    nameOf: "Bleu",
    material: "MDF",
    premium_series: "X",
    estate_series: "X",
    elegant_bath: "X",
    aspire: "X",
    select_series: "X",
    home_concepts: "",
    wellborn_closets: "",
    glazes: "",
    stains: "",
    laminates: "",
    melamine: "",
    paints: "X"
  }, {
    id: "162",
    nameOf: "BrightWhite",
    material: "MDF",
    premium_series: "X",
    estate_series: "X",
    elegant_bath: "X",
    aspire: "X",
    select_series: "X",
    home_concepts: "",
    wellborn_closets: "",
    glazes: "",
    stains: "",
    laminates: "",
    melamine: "",
    paints: "X"
  }, {
    id: "163",
    nameOf: "AquaGranite",
    material: "MDF",
    premium_series: "X",
    estate_series: "X",
    elegant_bath: "X",
    aspire: "X",
    select_series: "",
    home_concepts: "",
    wellborn_closets: "",
    glazes: "X",
    stains: "",
    laminates: "",
    melamine: "",
    paints: "X"
  }, {
    id: "164",
    nameOf: "AquaJava",
    material: "MDF",
    premium_series: "X",
    estate_series: "X",
    elegant_bath: "X",
    aspire: "X",
    select_series: "",
    home_concepts: "",
    wellborn_closets: "",
    glazes: "X",
    stains: "",
    laminates: "",
    melamine: "",
    paints: "X"
  }, {
    id: "165",
    nameOf: "BleuJava",
    material: "MDF",
    premium_series: "X",
    estate_series: "X",
    elegant_bath: "X",
    aspire: "X",
    select_series: "",
    home_concepts: "",
    wellborn_closets: "",
    glazes: "X",
    stains: "",
    laminates: "",
    melamine: "",
    paints: "X"
  }, {
    id: "166",
    nameOf: "BrightWhiteJava",
    material: "MDF",
    premium_series: "X",
    estate_series: "X",
    elegant_bath: "X",
    aspire: "X",
    select_series: "X",
    home_concepts: "",
    wellborn_closets: "",
    glazes: "X",
    stains: "",
    laminates: "",
    melamine: "",
    paints: "X"
  }, {
    id: "167",
    nameOf: "CremeMocha",
    material: "MDF",
    premium_series: "X",
    estate_series: "X",
    elegant_bath: "X",
    aspire: "X",
    select_series: "X",
    home_concepts: "",
    wellborn_closets: "",
    glazes: "X",
    stains: "",
    laminates: "",
    melamine: "",
    paints: "X"
  }, {
    id: "168",
    nameOf: "CremeSlate",
    material: "MDF",
    premium_series: "X",
    estate_series: "X",
    elegant_bath: "X",
    aspire: "X",
    select_series: "",
    home_concepts: "",
    wellborn_closets: "",
    glazes: "X",
    stains: "",
    laminates: "",
    melamine: "",
    paints: "X"
  }, {
    id: "169",
    nameOf: "DivinityJava",
    material: "MDF",
    premium_series: "X",
    estate_series: "X",
    elegant_bath: "X",
    aspire: "X",
    select_series: "X",
    home_concepts: "",
    wellborn_closets: "",
    glazes: "X",
    stains: "",
    laminates: "",
    melamine: "",
    paints: "X"
  }, {
    id: "170",
    nameOf: "DoveJava",
    material: "MDF",
    premium_series: "X",
    estate_series: "X",
    elegant_bath: "X",
    aspire: "X",
    select_series: "X",
    home_concepts: "",
    wellborn_closets: "",
    glazes: "X",
    stains: "",
    laminates: "",
    melamine: "",
    paints: "X"
  }, {
    id: "171",
    nameOf: "DovePewter",
    material: "MDF",
    premium_series: "X",
    estate_series: "X",
    elegant_bath: "X",
    aspire: "X",
    select_series: "",
    home_concepts: "",
    wellborn_closets: "",
    glazes: "X",
    stains: "",
    laminates: "",
    melamine: "",
    paints: "X"
  }, {
    id: "172",
    nameOf: "GrayMistGranite",
    material: "MDF",
    premium_series: "X",
    estate_series: "X",
    elegant_bath: "X",
    aspire: "X",
    select_series: "X",
    home_concepts: "",
    wellborn_closets: "",
    glazes: "X",
    stains: "",
    laminates: "",
    melamine: "",
    paints: "X"
  }, {
    id: "173",
    nameOf: "GrayMistJava",
    material: "MDF",
    premium_series: "X",
    estate_series: "X",
    elegant_bath: "X",
    aspire: "X",
    select_series: "X",
    home_concepts: "",
    wellborn_closets: "",
    glazes: "X",
    stains: "",
    laminates: "",
    melamine: "",
    paints: "X"
  }, {
    id: "174",
    nameOf: "MinkGrayGranite",
    material: "MDF",
    premium_series: "X",
    estate_series: "X",
    elegant_bath: "X",
    aspire: "X",
    select_series: "",
    home_concepts: "",
    wellborn_closets: "",
    glazes: "X",
    stains: "",
    laminates: "",
    melamine: "",
    paints: "X"
  }, {
    id: "175",
    nameOf: "MinkGrayJava",
    material: "MDF",
    premium_series: "X",
    estate_series: "X",
    elegant_bath: "X",
    aspire: "X",
    select_series: "",
    home_concepts: "",
    wellborn_closets: "",
    glazes: "X",
    stains: "",
    laminates: "",
    melamine: "",
    paints: "X"
  }, {
    id: "176",
    nameOf: "MintGranite",
    material: "MDF",
    premium_series: "X",
    estate_series: "X",
    elegant_bath: "X",
    aspire: "X",
    select_series: "",
    home_concepts: "",
    wellborn_closets: "",
    glazes: "X",
    stains: "",
    laminates: "",
    melamine: "",
    paints: "X"
  }, {
    id: "177",
    nameOf: "MintJava",
    material: "MDF",
    premium_series: "X",
    estate_series: "X",
    elegant_bath: "X",
    aspire: "X",
    select_series: "",
    home_concepts: "",
    wellborn_closets: "",
    glazes: "X",
    stains: "",
    laminates: "",
    melamine: "",
    paints: "X"
  }, //Oak Paints
  {
    id: "103",
    nameOf: "Aqua",
    material: "Oak",
    premium_series: "X",
    estate_series: "X",
    elegant_bath: "X",
    aspire: "X",
    select_series: "",
    home_concepts: "",
    wellborn_closets: "",
    glazes: "",
    stains: "",
    laminates: "",
    melamine: "",
    paints: "X"
  }, {
    id: "104",
    nameOf: "Blue",
    material: "Oak",
    premium_series: "X",
    estate_series: "X",
    elegant_bath: "X",
    aspire: "X",
    select_series: "X",
    home_concepts: "",
    wellborn_closets: "",
    glazes: "",
    stains: "",
    laminates: "",
    melamine: "",
    paints: "X"
  }, {
    id: "105",
    nameOf: "BrightWhite",
    material: "Oak",
    premium_series: "X",
    estate_series: "X",
    elegant_bath: "X",
    aspire: "X",
    select_series: "X",
    home_concepts: "",
    wellborn_closets: "",
    glazes: "",
    stains: "",
    laminates: "",
    melamine: "",
    paints: "X"
  }, {
    id: "106",
    nameOf: "Creme",
    material: "Oak",
    premium_series: "X",
    estate_series: "X",
    elegant_bath: "X",
    aspire: "X",
    select_series: "X",
    home_concepts: "",
    wellborn_closets: "",
    glazes: "",
    stains: "",
    laminates: "",
    melamine: "",
    paints: "X"
  }, {
    id: "107",
    nameOf: "Divinity",
    material: "Oak",
    premium_series: "X",
    estate_series: "X",
    elegant_bath: "X",
    aspire: "X",
    select_series: "X",
    home_concepts: "",
    wellborn_closets: "",
    glazes: "",
    stains: "",
    laminates: "",
    melamine: "",
    paints: "X"
  }, {
    id: "108",
    nameOf: "Dove",
    material: "Oak",
    premium_series: "X",
    estate_series: "X",
    elegant_bath: "X",
    aspire: "X",
    select_series: "X",
    home_concepts: "",
    wellborn_closets: "",
    glazes: "",
    stains: "",
    laminates: "",
    melamine: "",
    paints: "X"
  }, {
    id: "109",
    nameOf: "Glacier",
    material: "Oak",
    premium_series: "X",
    estate_series: "X",
    elegant_bath: "X",
    aspire: "X",
    select_series: "X",
    home_concepts: "",
    wellborn_closets: "",
    glazes: "",
    stains: "",
    laminates: "",
    melamine: "",
    paints: "X"
  }, {
    id: "110",
    nameOf: "GrayMist",
    material: "Oak",
    premium_series: "X",
    estate_series: "X",
    elegant_bath: "X",
    aspire: "X",
    select_series: "X",
    home_concepts: "",
    wellborn_closets: "",
    glazes: "",
    stains: "",
    laminates: "",
    melamine: "",
    paints: "X"
  }, {
    id: "111",
    nameOf: "MinkGray",
    material: "Oak",
    premium_series: "X",
    estate_series: "X",
    elegant_bath: "X",
    aspire: "X",
    select_series: "",
    home_concepts: "",
    wellborn_closets: "",
    glazes: "",
    stains: "",
    laminates: "",
    melamine: "",
    paints: "X"
  }, {
    id: "112",
    nameOf: "Mint",
    material: "Oak",
    premium_series: "X",
    estate_series: "X",
    elegant_bath: "X",
    aspire: "X",
    select_series: "",
    home_concepts: "",
    wellborn_closets: "",
    glazes: "",
    stains: "",
    laminates: "",
    melamine: "",
    paints: "X"
  }, {
    id: "113",
    nameOf: "Olive",
    material: "Oak",
    premium_series: "X",
    estate_series: "X",
    elegant_bath: "X",
    aspire: "X",
    select_series: "",
    home_concepts: "",
    wellborn_closets: "",
    glazes: "",
    stains: "",
    laminates: "",
    melamine: "",
    paints: "X"
  }, {
    id: "114",
    nameOf: "Onyx",
    material: "Oak",
    premium_series: "X",
    estate_series: "X",
    elegant_bath: "X",
    aspire: "X",
    select_series: "X",
    home_concepts: "",
    wellborn_closets: "",
    glazes: "",
    stains: "",
    laminates: "",
    melamine: "",
    paints: "X"
  }, {
    id: "115",
    nameOf: "OysterWhite",
    material: "Oak",
    premium_series: "X",
    estate_series: "X",
    elegant_bath: "X",
    aspire: "X",
    select_series: "",
    home_concepts: "",
    wellborn_closets: "",
    glazes: "",
    stains: "",
    laminates: "",
    melamine: "",
    paints: "X"
  }, {
    id: "116",
    nameOf: "Pebble",
    material: "Oak",
    premium_series: "X",
    estate_series: "X",
    elegant_bath: "X",
    aspire: "X",
    select_series: "X",
    home_concepts: "",
    wellborn_closets: "",
    glazes: "",
    stains: "",
    laminates: "",
    melamine: "",
    paints: "X"
  }, {
    id: "117",
    nameOf: "Sandstone",
    material: "Oak",
    premium_series: "X",
    estate_series: "X",
    elegant_bath: "X",
    aspire: "X",
    select_series: "X",
    home_concepts: "",
    wellborn_closets: "",
    glazes: "",
    stains: "",
    laminates: "",
    melamine: "",
    paints: "X"
  }, {
    id: "118",
    nameOf: "Sapphire",
    material: "Oak",
    premium_series: "X",
    estate_series: "X",
    elegant_bath: "X",
    aspire: "X",
    select_series: "X",
    home_concepts: "",
    wellborn_closets: "",
    glazes: "",
    stains: "",
    laminates: "",
    melamine: "",
    paints: "X"
  }, {
    id: "119",
    nameOf: "Willow",
    material: "Oak",
    premium_series: "X",
    estate_series: "X",
    elegant_bath: "X",
    aspire: "X",
    select_series: "",
    home_concepts: "",
    wellborn_closets: "",
    glazes: "",
    stains: "",
    laminates: "",
    melamine: "",
    paints: "X"
  }, //Maple with Paints
  {
    id: "59",
    nameOf: "Aqua",
    material: "Maple",
    premium_series: "X",
    estate_series: "X",
    elegant_bath: "X",
    aspire: "X",
    select_series: "",
    home_concepts: "",
    wellborn_closets: "",
    glazes: "",
    stains: "",
    laminates: "",
    melamine: "",
    paints: "X"
  }, {
    id: "60",
    nameOf: "Bleu",
    material: "Maple",
    premium_series: "X",
    estate_series: "X",
    elegant_bath: "X",
    aspire: "X",
    select_series: "X",
    home_concepts: "",
    wellborn_closets: "",
    glazes: "",
    stains: "",
    laminates: "",
    melamine: "",
    paints: "X"
  }, {
    id: "61",
    nameOf: "BrightWhite",
    material: "Maple",
    premium_series: "X",
    estate_series: "X",
    elegant_bath: "X",
    aspire: "X",
    select_series: "X",
    home_concepts: "",
    wellborn_closets: "",
    glazes: "",
    stains: "",
    laminates: "",
    melamine: "",
    paints: "X"
  }, {
    id: "62",
    nameOf: "Dove",
    material: "Maple",
    premium_series: "X",
    estate_series: "X",
    elegant_bath: "X",
    aspire: "X",
    select_series: "X",
    home_concepts: "",
    wellborn_closets: "",
    glazes: "",
    stains: "",
    laminates: "",
    melamine: "",
    paints: "X"
  }, {
    id: "63",
    nameOf: "Sandstone",
    material: "Maple",
    premium_series: "X",
    estate_series: "X",
    elegant_bath: "X",
    aspire: "X",
    select_series: "X",
    home_concepts: "",
    wellborn_closets: "",
    glazes: "",
    stains: "",
    laminates: "",
    melamine: "",
    paints: "X"
  }, {
    id: "64",
    nameOf: "Mint",
    material: "Maple",
    premium_series: "X",
    estate_series: "X",
    elegant_bath: "X",
    aspire: "X",
    select_series: "",
    home_concepts: "",
    wellborn_closets: "",
    glazes: "",
    stains: "",
    laminates: "",
    melamine: "",
    paints: "X"
  }, {
    id: "65",
    nameOf: "Sapphire",
    material: "Maple",
    premium_series: "X",
    estate_series: "X",
    elegant_bath: "X",
    aspire: "X",
    select_series: "",
    home_concepts: "",
    wellborn_closets: "",
    glazes: "",
    stains: "",
    laminates: "",
    melamine: "",
    paints: "X"
  }, {
    id: "66",
    nameOf: "Onyx",
    material: "Maple",
    premium_series: "X",
    estate_series: "X",
    elegant_bath: "X",
    aspire: "X",
    select_series: "X",
    home_concepts: "",
    wellborn_closets: "",
    glazes: "",
    stains: "",
    laminates: "",
    melamine: "",
    paints: "X"
  }]);
  const dispatch5 = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useDispatch"])();

  const fetchPaints = () => {
    dispatch5(Object(_Actions_FinishActions__WEBPACK_IMPORTED_MODULE_2__["selectedFinish"])(paintsList));
    console.log("Current listings:", paintsList);
  };

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    fetchPaints();
  }, []);
  const count = paintsList.length;

  if (Object.keys(paintsList).length > 0) {
    var RenderPaints = paintsList.map(paint => {
      const {
        id,
        nameOf,
        material,
        premium_series,
        aspire,
        estate_series,
        elegant_bath,
        select_series,
        home_concepts
      } = paint;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79,
          columnNumber: 13
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", {
        key: id,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81,
          columnNumber: 11
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
        className: "rowcss",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 82,
          columnNumber: 13
        }
      }, nameOf), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
        className: "tableSpacer",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 82,
          columnNumber: 49
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
        className: "FinishMaterial",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 82,
          columnNumber: 82
        }
      }, material), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
        className: "tableSpacer",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 82,
          columnNumber: 128
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
        className: "FinishSeries",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 82,
          columnNumber: 161
        }
      }, premium_series), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
        className: "FinishSeries",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 82,
          columnNumber: 211
        }
      }, estate_series), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
        className: "FinishSeries",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 82,
          columnNumber: 260
        }
      }, elegant_bath), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
        className: "FinishSeries",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 82,
          columnNumber: 308
        }
      }, aspire), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
        className: "FinishSeries",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 82,
          columnNumber: 350
        }
      }, home_concepts), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
        className: "FinishSeries",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 82,
          columnNumber: 399
        }
      }, select_series)));
    });
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    id: "container",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "App",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("center", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    id: "welcomePage",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 21
    }
  }, "Wellborn Cabinets")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    id: "sidenav",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: "navmenu",
    href: "/wordpress/stains",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 7
    }
  }, "\uFF33\uFF54\uFF41\uFF49\uFF4E\uFF53"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 67
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", {
    className: "spacer",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 7
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: "navmenu",
    href: "/wordpress/glazes",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 7
    }
  }, "\uFF27\uFF4C\uFF41\uFF5A\uFF45\uFF53"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 67
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", {
    className: "spacer",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 7
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: "navmenu",
    href: "/wordpress/paints",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 7
    }
  }, "\uFF30\uFF41\uFF49\uFF4E\uFF54\uFF53"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 67
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", {
    className: "spacer",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 7
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: "navmenu",
    href: "/wordpress/laminates",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 7
    }
  }, "\uFF2C\uFF41\uFF4D\uFF49\uFF4E\uFF41\uFF54\uFF45\uFF53"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 73
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", {
    className: "spacer",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 7
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: "navmenu",
    href: "/wordpress/melamine",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 7
    }
  }, "\uFF2D\uFF45\uFF4C\uFF41\uFF4D\uFF49\uFF4E\uFF45"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 7
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 7
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 12
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: "App-link",
    id: "blog-link",
    href: "https://www.wellborn.com/blog/",
    target: "_blank",
    rel: "noopener noreferrer",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 7
    }
  }, "A Wellborn Blog "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 17
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 22
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("center", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 17
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    id: "homebutton",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 25
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    id: "homebuttontext",
    className: "App-link",
    href: "/wordpress",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 49
    }
  }, "Return Home")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    id: "addy",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 13
    }
  }, "38669 Hwy 77 S. Ashland, AL 36251"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114,
      columnNumber: 13
    }
  }, "Hello.")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    id: "middleArea",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    id: "emailButton",
    href: "/wordpress/contact",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117,
      columnNumber: 5
    }
  }, "Contact Us"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    id: "blogHolder",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118,
      columnNumber: 1
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("center", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    id: "blog",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119,
      columnNumber: 13
    }
  }, "Paints Page (", count, " now showing)")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    id: "tableborder",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    id: "selectedFinish",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("table", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", {
    className: "header",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124,
      columnNumber: 11
    }
  }, "Finish"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125,
      columnNumber: 11
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126,
      columnNumber: 11
    }
  }, "Material"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127,
      columnNumber: 11
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
    colSpan: "6",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128,
      columnNumber: 11
    }
  }, "Product Line")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130,
      columnNumber: 13
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130,
      columnNumber: 22
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130,
      columnNumber: 31
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130,
      columnNumber: 40
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130,
      columnNumber: 49
    }
  }, "PremiumSeries"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130,
      columnNumber: 71
    }
  }, "EstateSeries"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130,
      columnNumber: 92
    }
  }, "ElegantBath"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130,
      columnNumber: 112
    }
  }, "Aspire"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130,
      columnNumber: 127
    }
  }, "HomeConcepts"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130,
      columnNumber: 148
    }
  }, "SelectSeries")), RenderPaints)))))));
}

/* harmony default export */ __webpack_exports__["default"] = (Paints);

/***/ }),

/***/ "./src/Components/stains.js":
/*!**********************************!*\
  !*** ./src/Components/stains.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _Actions_FinishActions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Actions/FinishActions */ "./src/Actions/FinishActions.js");
var _jsxFileName = "/mnt/c/xampp/htdocs/wordpress/wp-content/themes/demo/react-src/src/Components/stains.js";




function Stains() {
  const [stainsList, setStainsList] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([//Hickory Stains
  {
    id: "130",
    nameOf: "Ash",
    material: "Hickory",
    premium_series: "X",
    estate_series: "X",
    elegant_bath: "X",
    aspire: "X",
    select_series: "X",
    home_concepts: "",
    wellborn_closets: "",
    glazes: "",
    stains: "X",
    laminates: "",
    melamine: "",
    paints: ""
  }, {
    id: "131",
    nameOf: "Blush",
    material: "Hickory",
    premium_series: "X",
    estate_series: "X",
    elegant_bath: "X",
    aspire: "X",
    select_series: "X",
    home_concepts: "",
    wellborn_closets: "",
    glazes: "",
    stains: "X",
    laminates: "",
    melamine: "",
    paints: ""
  }, {
    id: "132",
    nameOf: "Caramel",
    material: "Hickory",
    premium_series: "X",
    estate_series: "X",
    elegant_bath: "X",
    aspire: "X",
    select_series: "X",
    home_concepts: "",
    wellborn_closets: "",
    glazes: "",
    stains: "X",
    laminates: "",
    melamine: "",
    paints: ""
  }, {
    id: "133",
    nameOf: "Coffee",
    material: "Hickory",
    premium_series: "X",
    estate_series: "X",
    elegant_bath: "X",
    aspire: "X",
    select_series: "X",
    home_concepts: "",
    wellborn_closets: "",
    glazes: "",
    stains: "X",
    laminates: "",
    melamine: "",
    paints: ""
  }, {
    id: "134",
    nameOf: "Cranberry",
    material: "Hickory",
    premium_series: "X",
    estate_series: "X",
    elegant_bath: "X",
    aspire: "X",
    select_series: "",
    home_concepts: "",
    wellborn_closets: "",
    glazes: "",
    stains: "X",
    laminates: "",
    melamine: "",
    paints: ""
  }, {
    id: "135",
    nameOf: "Dark",
    material: "Hickory",
    premium_series: "X",
    estate_series: "X",
    elegant_bath: "X",
    aspire: "X",
    select_series: "X",
    home_concepts: "",
    wellborn_closets: "",
    glazes: "",
    stains: "X",
    laminates: "",
    melamine: "",
    paints: ""
  }, {
    id: "136",
    nameOf: "Drift",
    material: "Hickory",
    premium_series: "X",
    estate_series: "X",
    elegant_bath: "X",
    aspire: "X",
    select_series: "X",
    home_concepts: "",
    wellborn_closets: "",
    glazes: "",
    stains: "X",
    laminates: "",
    melamine: "",
    paints: ""
  }, {
    id: "137",
    nameOf: "Espresso",
    material: "Hickory",
    premium_series: "X",
    estate_series: "X",
    elegant_bath: "X",
    aspire: "X",
    select_series: "X",
    home_concepts: "",
    wellborn_closets: "",
    glazes: "",
    stains: "X",
    laminates: "",
    melamine: "",
    paints: ""
  }, {
    id: "138",
    nameOf: "Gauntlet",
    material: "Hickory",
    premium_series: "X",
    estate_series: "X",
    elegant_bath: "X",
    aspire: "X",
    select_series: "",
    home_concepts: "",
    wellborn_closets: "",
    glazes: "",
    stains: "X",
    laminates: "",
    melamine: "",
    paints: ""
  }, {
    id: "139",
    nameOf: "Ginger",
    material: "Hickory",
    premium_series: "X",
    estate_series: "X",
    elegant_bath: "X",
    aspire: "X",
    select_series: "",
    home_concepts: "",
    wellborn_closets: "",
    glazes: "",
    stains: "X",
    laminates: "",
    melamine: "",
    paints: ""
  }, //Oak Stains
  {
    id: "81",
    nameOf: "Blush",
    material: "Oak",
    premium_series: "X",
    estate_series: "X",
    elegant_bath: "X",
    aspire: "X",
    select_series: "X",
    home_concepts: "",
    wellborn_closets: "",
    glazes: "",
    stains: "X",
    laminates: "",
    melamine: "",
    paints: ""
  }, {
    id: "82",
    nameOf: "Caramel",
    material: "Oak",
    premium_series: "X",
    estate_series: "X",
    elegant_bath: "X",
    aspire: "X",
    select_series: "X",
    home_concepts: "",
    wellborn_closets: "",
    glazes: "",
    stains: "X",
    laminates: "",
    melamine: "",
    paints: ""
  }, {
    id: "83",
    nameOf: "Shadow",
    material: "Oak",
    premium_series: "X",
    estate_series: "X",
    elegant_bath: "X",
    aspire: "X",
    select_series: "X",
    home_concepts: "",
    wellborn_closets: "",
    glazes: "",
    stains: "X",
    laminates: "",
    melamine: "",
    paints: ""
  }, {
    id: "84",
    nameOf: "Sable",
    material: "Oak",
    premium_series: "X",
    estate_series: "X",
    elegant_bath: "X",
    aspire: "X",
    select_series: "X",
    home_concepts: "X",
    wellborn_closets: "",
    glazes: "",
    stains: "X",
    laminates: "",
    melamine: "",
    paints: ""
  }, {
    id: "85",
    nameOf: "Spiceberry",
    material: "Oak",
    premium_series: "",
    estate_series: "",
    elegant_bath: "",
    aspire: "",
    select_series: "X",
    home_concepts: "",
    wellborn_closets: "",
    glazes: "",
    stains: "X",
    laminates: "",
    melamine: "",
    paints: ""
  }, {
    id: "86",
    nameOf: "Hazelnut",
    material: "Oak",
    premium_series: "X",
    estate_series: "X",
    elegant_bath: "X",
    aspire: "X",
    select_series: "",
    home_concepts: "",
    wellborn_closets: "",
    glazes: "",
    stains: "X",
    laminates: "",
    melamine: "",
    paints: ""
  }, {
    id: "87",
    nameOf: "Gauntlet",
    material: "Oak",
    premium_series: "X",
    estate_series: "X",
    elegant_bath: "X",
    aspire: "X",
    select_series: "",
    home_concepts: "",
    wellborn_closets: "",
    glazes: "",
    stains: "X",
    laminates: "",
    melamine: "",
    paints: ""
  }, {
    id: "88",
    nameOf: "Shale",
    material: "Oak",
    premium_series: "X",
    estate_series: "X",
    elegant_bath: "X",
    aspire: "X",
    select_series: "",
    home_concepts: "",
    wellborn_closets: "",
    glazes: "",
    stains: "X",
    laminates: "",
    melamine: "",
    paints: ""
  }, {
    id: "89",
    nameOf: "Dark",
    material: "Oak",
    premium_series: "X",
    estate_series: "X",
    elegant_bath: "X",
    aspire: "X",
    select_series: "X",
    home_concepts: "",
    wellborn_closets: "",
    glazes: "",
    stains: "X",
    laminates: "",
    melamine: "",
    paints: ""
  }, //Cherry and Character Cherry Stains
  {
    id: "1",
    nameOf: "AutumnSpice",
    material: "Cherry",
    premium_series: "X",
    estate_series: "X",
    elegant_bath: "X",
    aspire: "X",
    select_series: "",
    home_concepts: "",
    wellborn_closets: "",
    glazes: "",
    stains: "X",
    laminates: "",
    melamine: "",
    paints: ""
  }, {
    id: "2",
    nameOf: "Blush",
    material: "Cherry",
    premium_series: "X",
    estate_series: "X",
    elegant_bath: "X",
    aspire: "X",
    select_series: "X",
    home_concepts: "",
    wellborn_closets: "",
    glazes: "",
    stains: "X",
    laminates: "",
    melamine: "",
    paints: ""
  }, {
    id: "3",
    nameOf: "Caramel",
    material: "Cherry",
    premium_series: "X",
    estate_series: "X",
    elegant_bath: "X",
    aspire: "X",
    select_series: "X",
    home_concepts: "",
    wellborn_closets: "",
    glazes: "",
    stains: "X",
    laminates: "",
    melamine: "",
    paints: ""
  }, {
    id: "4",
    nameOf: "Dark",
    material: "Cherry",
    premium_series: "X",
    estate_series: "X",
    elegant_bath: "X",
    aspire: "X",
    select_series: "X",
    home_concepts: "",
    wellborn_closets: "",
    glazes: "",
    stains: "X",
    laminates: "",
    melamine: "",
    paints: ""
  }, {
    id: "6",
    nameOf: "Espresso",
    material: "Cherry",
    premium_series: "X",
    estate_series: "X",
    elegant_bath: "X",
    aspire: "X",
    select_series: "X",
    home_concepts: "",
    wellborn_closets: "",
    glazes: "",
    stains: "X",
    laminates: "",
    melamine: "",
    paints: ""
  }, {
    id: "7",
    nameOf: "Gauntlet",
    material: "Cherry",
    premium_series: "X",
    estate_series: "X",
    elegant_bath: "X",
    aspire: "X",
    select_series: "",
    home_concepts: "",
    wellborn_closets: "",
    glazes: "",
    stains: "X",
    laminates: "",
    melamine: "",
    paints: ""
  }, {
    id: "16",
    nameOf: "Shale",
    material: "Cherry",
    premium_series: "X",
    estate_series: "X",
    elegant_bath: "X",
    aspire: "X",
    select_series: "",
    home_concepts: "",
    wellborn_closets: "",
    glazes: "",
    stains: "X",
    laminates: "",
    melamine: "",
    paints: ""
  }, {
    id: "17",
    nameOf: "Sienna",
    material: "Cherry",
    premium_series: "X",
    estate_series: "X",
    elegant_bath: "X",
    aspire: "X",
    select_series: "X",
    home_concepts: "",
    wellborn_closets: "",
    glazes: "",
    stains: "X",
    laminates: "",
    melamine: "",
    paints: ""
  }, {
    id: "18",
    nameOf: "Suede",
    material: "Cherry",
    premium_series: "X",
    estate_series: "X",
    elegant_bath: "X",
    aspire: "X",
    select_series: "",
    home_concepts: "",
    wellborn_closets: "",
    glazes: "",
    stains: "X",
    laminates: "",
    melamine: "",
    paints: ""
  }]);
  const dispatch3 = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useDispatch"])();

  const fetchStains = () => {
    dispatch3(Object(_Actions_FinishActions__WEBPACK_IMPORTED_MODULE_2__["selectedFinish"])(stainsList));
    console.log("Current listings:", stainsList);
  };

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    fetchStains();
  }, []);
  const count = stainsList.length;

  if (Object.keys(stainsList).length > 0) {
    var RenderStains = stainsList.map(stain => {
      const {
        id,
        nameOf,
        material,
        premium_series,
        aspire,
        estate_series,
        elegant_bath,
        select_series,
        home_concepts
      } = stain;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56,
          columnNumber: 13
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", {
        key: id,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58,
          columnNumber: 11
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
        className: "rowcss",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59,
          columnNumber: 13
        }
      }, nameOf), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
        className: "tableSpacer",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59,
          columnNumber: 49
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
        className: "FinishMaterial",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59,
          columnNumber: 82
        }
      }, material), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
        className: "tableSpacer",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59,
          columnNumber: 128
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
        className: "FinishSeries",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59,
          columnNumber: 161
        }
      }, premium_series), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
        className: "FinishSeries",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59,
          columnNumber: 211
        }
      }, estate_series), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
        className: "FinishSeries",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59,
          columnNumber: 260
        }
      }, elegant_bath), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
        className: "FinishSeries",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59,
          columnNumber: 308
        }
      }, aspire), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
        className: "FinishSeries",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59,
          columnNumber: 350
        }
      }, home_concepts), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
        className: "FinishSeries",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59,
          columnNumber: 399
        }
      }, select_series)));
    });
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    id: "container",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "App",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("center", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    id: "welcomePage",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 21
    }
  }, "Wellborn Cabinets")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    id: "sidenav",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: "navmenu",
    href: "/wordpress/stains",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 7
    }
  }, "\uFF33\uFF54\uFF41\uFF49\uFF4E\uFF53"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 67
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", {
    className: "spacer",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 7
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: "navmenu",
    href: "/wordpress/glazes",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 7
    }
  }, "\uFF27\uFF4C\uFF41\uFF5A\uFF45\uFF53"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 67
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", {
    className: "spacer",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 7
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: "navmenu",
    href: "/wordpress/paints",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 7
    }
  }, "\uFF30\uFF41\uFF49\uFF4E\uFF54\uFF53"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 67
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", {
    className: "spacer",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 7
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: "navmenu",
    href: "/wordpress/laminates",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 7
    }
  }, "\uFF2C\uFF41\uFF4D\uFF49\uFF4E\uFF41\uFF54\uFF45\uFF53"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 73
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", {
    className: "spacer",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 7
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: "navmenu",
    href: "/wordpress/melamine",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 7
    }
  }, "\uFF2D\uFF45\uFF4C\uFF41\uFF4D\uFF49\uFF4E\uFF45"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 7
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 7
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 12
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: "App-link",
    id: "blog-link",
    href: "https://www.wellborn.com/blog/",
    target: "_blank",
    rel: "noopener noreferrer",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 7
    }
  }, "A Wellborn Blog "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 17
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 22
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("center", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 17
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    id: "homebutton",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 25
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    id: "homebuttontext",
    className: "App-link",
    href: "/wordpress",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 49
    }
  }, "Return Home")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    id: "addy",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 13
    }
  }, "38669 Hwy 77 S. Ashland, AL 36251"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 13
    }
  }, "Hello.")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    id: "middleArea",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    id: "emailButton",
    href: "/wordpress/contact",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 5
    }
  }, "Contact Us"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    id: "blogHolder",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 1
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("center", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    id: "blog",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 13
    }
  }, "Stains Page (", count, " now showing)")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    id: "tableborder",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    id: "selectedFinish",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("table", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", {
    className: "header",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 11
    }
  }, "Finish"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 11
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 11
    }
  }, "Material"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 11
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
    colSpan: "6",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 11
    }
  }, "Product Line")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 13
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 22
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 31
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 40
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 49
    }
  }, "PremiumSeries"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 71
    }
  }, "EstateSeries"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 92
    }
  }, "ElegantBath"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 112
    }
  }, "Aspire"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 127
    }
  }, "HomeConcepts"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 148
    }
  }, "SelectSeries")), RenderStains))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("center", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    type: "checkbox",
    id: "horns",
    name: "Oak",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 3
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    for: "horns",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114,
      columnNumber: 3
    }
  }, "Oak"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    type: "checkbox",
    id: "horns",
    name: "Maple",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 3
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    for: "horns",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 3
    }
  }, "Maple"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    type: "checkbox",
    id: "horns",
    name: "Hickory",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117,
      columnNumber: 3
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    for: "horns",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118,
      columnNumber: 3
    }
  }, "Hickory"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    type: "checkbox",
    id: "horns",
    name: "Cherry",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119,
      columnNumber: 3
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    for: "horns",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120,
      columnNumber: 3
    }
  }, "Cherry"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120,
      columnNumber: 36
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121,
      columnNumber: 3
    }
  }, "Reset Options")))))));
}

/* harmony default export */ __webpack_exports__["default"] = (Stains);

/***/ }),

/***/ "./src/Components/welcome.js":
/*!***********************************!*\
  !*** ./src/Components/welcome.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _Actions_FinishActions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Actions/FinishActions */ "./src/Actions/FinishActions.js");
/* harmony import */ var _middlearea__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./middlearea */ "./src/Components/middlearea.js");
var _jsxFileName = "/mnt/c/xampp/htdocs/wordpress/wp-content/themes/demo/react-src/src/Components/welcome.js";





function Welcome() {
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useDispatch"])();
  let [finishesList, setFinishesList] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([//Cherry and Character Cherry Stains
  {
    id: "1",
    nameOf: "AutumnSpice",
    material: "Cherry",
    premium_series: "X",
    estate_series: "X",
    elegant_bath: "X",
    aspire: "X",
    select_series: "",
    home_concepts: "",
    wellborn_closets: "",
    glazes: "",
    stains: "X",
    laminates: "",
    melamine: "",
    paints: ""
  }, {
    id: "2",
    nameOf: "Blush",
    material: "Cherry",
    premium_series: "X",
    estate_series: "X",
    elegant_bath: "X",
    aspire: "X",
    select_series: "X",
    home_concepts: "",
    wellborn_closets: "",
    glazes: "",
    stains: "X",
    laminates: "",
    melamine: "",
    paints: ""
  }, {
    id: "3",
    nameOf: "Caramel",
    material: "Cherry",
    premium_series: "X",
    estate_series: "X",
    elegant_bath: "X",
    aspire: "X",
    select_series: "X",
    home_concepts: "",
    wellborn_closets: "",
    glazes: "",
    stains: "X",
    laminates: "",
    melamine: "",
    paints: ""
  }, {
    id: "4",
    nameOf: "Dark",
    material: "Cherry",
    premium_series: "X",
    estate_series: "X",
    elegant_bath: "X",
    aspire: "X",
    select_series: "X",
    home_concepts: "",
    wellborn_closets: "",
    glazes: "",
    stains: "X",
    laminates: "",
    melamine: "",
    paints: ""
  }, {
    id: "6",
    nameOf: "Espresso",
    material: "Cherry",
    premium_series: "X",
    estate_series: "X",
    elegant_bath: "X",
    aspire: "X",
    select_series: "X",
    home_concepts: "",
    wellborn_closets: "",
    glazes: "",
    stains: "X",
    laminates: "",
    melamine: "",
    paints: ""
  }, {
    id: "7",
    nameOf: "Gauntlet",
    material: "Cherry",
    premium_series: "X",
    estate_series: "X",
    elegant_bath: "X",
    aspire: "X",
    select_series: "",
    home_concepts: "",
    wellborn_closets: "",
    glazes: "",
    stains: "X",
    laminates: "",
    melamine: "",
    paints: ""
  }, {
    id: "16",
    nameOf: "Shale",
    material: "Cherry",
    premium_series: "X",
    estate_series: "X",
    elegant_bath: "X",
    aspire: "X",
    select_series: "",
    home_concepts: "",
    wellborn_closets: "",
    glazes: "",
    stains: "X",
    laminates: "",
    melamine: "",
    paints: ""
  }, {
    id: "17",
    nameOf: "Sienna",
    material: "Cherry",
    premium_series: "X",
    estate_series: "X",
    elegant_bath: "X",
    aspire: "X",
    select_series: "X",
    home_concepts: "",
    wellborn_closets: "",
    glazes: "",
    stains: "X",
    laminates: "",
    melamine: "",
    paints: ""
  }, {
    id: "18",
    nameOf: "Suede",
    material: "Cherry",
    premium_series: "X",
    estate_series: "X",
    elegant_bath: "X",
    aspire: "X",
    select_series: "",
    home_concepts: "",
    wellborn_closets: "",
    glazes: "",
    stains: "X",
    laminates: "",
    melamine: "",
    paints: ""
  }, //Cherry Stains with Glaze
  {
    id: "19",
    nameOf: "AutumnSpiceCharcoal",
    material: "Cherry",
    premium_series: "X",
    estate_series: "X",
    elegant_bath: "X",
    aspire: "X",
    select_series: "",
    home_concepts: "",
    wellborn_closets: "",
    glazes: "X",
    stains: "X",
    laminates: "",
    melamine: "",
    paints: ""
  }, {
    id: "20",
    nameOf: "BlushCharcoal",
    material: "Cherry",
    premium_series: "X",
    estate_series: "X",
    elegant_bath: "X",
    aspire: "X",
    select_series: "X",
    home_concepts: "",
    wellborn_closets: "",
    glazes: "X",
    stains: "X",
    laminates: "",
    melamine: "",
    paints: ""
  }, {
    id: "21",
    nameOf: "BlushJava",
    material: "Cherry",
    premium_series: "X",
    estate_series: "X",
    elegant_bath: "X",
    aspire: "X",
    select_series: "X",
    home_concepts: "",
    wellborn_closets: "",
    glazes: "X",
    stains: "X",
    laminates: "",
    melamine: "",
    paints: ""
  }, {
    id: "22",
    nameOf: "DriftJava",
    material: "Cherry",
    premium_series: "X",
    estate_series: "X",
    elegant_bath: "X",
    aspire: "X",
    select_series: "",
    home_concepts: "",
    wellborn_closets: "",
    glazes: "X",
    stains: "X",
    laminates: "",
    melamine: "",
    paints: ""
  }, {
    id: "23",
    nameOf: "DriftPewter",
    material: "Cherry",
    premium_series: "X",
    estate_series: "X",
    elegant_bath: "X",
    aspire: "X",
    select_series: "",
    home_concepts: "",
    wellborn_closets: "",
    glazes: "X",
    stains: "X",
    laminates: "",
    melamine: "",
    paints: ""
  }, {
    id: "24",
    nameOf: "GauntletCharcoal",
    material: "Cherry",
    premium_series: "X",
    estate_series: "X",
    elegant_bath: "X",
    aspire: "X",
    select_series: "",
    home_concepts: "",
    wellborn_closets: "",
    glazes: "X",
    stains: "X",
    laminates: "",
    melamine: "",
    paints: ""
  }, {
    id: "25",
    nameOf: "EvergreenJava",
    material: "Cherry",
    premium_series: "X",
    estate_series: "X",
    elegant_bath: "X",
    aspire: "X",
    select_series: "",
    home_concepts: "",
    wellborn_closets: "",
    glazes: "X",
    stains: "X",
    laminates: "",
    melamine: "",
    paints: ""
  }, {
    id: "26",
    nameOf: "NutmegJava",
    material: "Cherry",
    premium_series: "X",
    estate_series: "X",
    elegant_bath: "X",
    aspire: "X",
    select_series: "X",
    home_concepts: "",
    wellborn_closets: "",
    glazes: "X",
    stains: "X",
    laminates: "",
    melamine: "",
    paints: ""
  }, {
    id: "27",
    nameOf: "ShadowCharcoal",
    material: "Cherry",
    premium_series: "X",
    estate_series: "X",
    elegant_bath: "X",
    aspire: "X",
    select_series: "X",
    home_concepts: "",
    wellborn_closets: "",
    glazes: "X",
    stains: "X",
    laminates: "",
    melamine: "",
    paints: ""
  }, {
    id: "28",
    nameOf: "ShadowPewter",
    material: "Cherry",
    premium_series: "X",
    estate_series: "X",
    elegant_bath: "X",
    aspire: "X",
    select_series: "",
    home_concepts: "",
    wellborn_closets: "",
    glazes: "X",
    stains: "X",
    laminates: "",
    melamine: "",
    paints: ""
  }, {
    id: "29",
    nameOf: "NaturalSlate",
    material: "Cherry",
    premium_series: "X",
    estate_series: "X",
    elegant_bath: "X",
    aspire: "X",
    select_series: "X",
    home_concepts: "",
    wellborn_closets: "",
    glazes: "X",
    stains: "X",
    laminates: "",
    melamine: "",
    paints: ""
  }, {
    id: "30",
    nameOf: "NaturalJava",
    material: "Cherry",
    premium_series: "X",
    estate_series: "X",
    elegant_bath: "X",
    aspire: "X",
    select_series: "X",
    home_concepts: "",
    wellborn_closets: "",
    glazes: "X",
    stains: "X",
    laminates: "",
    melamine: "",
    paints: ""
  }, {
    id: "31",
    nameOf: "GingerCharcoal",
    material: "Cherry",
    premium_series: "X",
    estate_series: "X",
    elegant_bath: "X",
    aspire: "X",
    select_series: "",
    home_concepts: "",
    wellborn_closets: "",
    glazes: "X",
    stains: "X",
    laminates: "",
    melamine: "",
    paints: ""
  }, {
    id: "32",
    nameOf: "ShaleGranite",
    material: "Cherry",
    premium_series: "X",
    estate_series: "X",
    elegant_bath: "X",
    aspire: "X",
    select_series: "",
    home_concepts: "",
    wellborn_closets: "",
    glazes: "X",
    stains: "X",
    laminates: "",
    melamine: "",
    paints: ""
  }, {
    id: "33",
    nameOf: "DarkChocoal",
    material: "Cherry",
    premium_series: "X",
    estate_series: "X",
    elegant_bath: "X",
    aspire: "X",
    select_series: "",
    home_concepts: "",
    wellborn_closets: "",
    glazes: "X",
    stains: "X",
    laminates: "",
    melamine: "",
    paints: ""
  }, // Maple and Character Maple Stains
  {
    id: "34",
    nameOf: "Ash",
    material: "Maple",
    premium_series: "X",
    estate_series: "X",
    elegant_bath: "X",
    aspire: "X",
    select_series: "X",
    home_concepts: "",
    wellborn_closets: "",
    glazes: "",
    stains: "X",
    laminates: "",
    melamine: "",
    paints: ""
  }, {
    id: "35",
    nameOf: "Blush",
    material: "Maple",
    premium_series: "X",
    estate_series: "X",
    elegant_bath: "X",
    aspire: "X",
    select_series: "X",
    home_concepts: "",
    wellborn_closets: "",
    glazes: "",
    stains: "X",
    laminates: "",
    melamine: "",
    paints: ""
  }, {
    id: "36",
    nameOf: "Coffee",
    material: "Maple",
    premium_series: "X",
    estate_series: "X",
    elegant_bath: "X",
    aspire: "X",
    select_series: "X",
    home_concepts: "X",
    wellborn_closets: "",
    glazes: "",
    stains: "X",
    laminates: "",
    melamine: "",
    paints: ""
  }, {
    id: "37",
    nameOf: "Cranberry",
    material: "Maple",
    premium_series: "X",
    estate_series: "X",
    elegant_bath: "X",
    aspire: "X",
    select_series: "",
    home_concepts: "",
    wellborn_closets: "",
    glazes: "",
    stains: "X",
    laminates: "",
    melamine: "",
    paints: ""
  }, {
    id: "38",
    nameOf: "Natural",
    material: "Maple",
    premium_series: "X",
    estate_series: "X",
    elegant_bath: "X",
    aspire: "X",
    select_series: "X",
    home_concepts: "X",
    wellborn_closets: "",
    glazes: "",
    stains: "X",
    laminates: "",
    melamine: "",
    paints: ""
  }, {
    id: "39",
    nameOf: "Espresso",
    material: "Maple",
    premium_series: "X",
    estate_series: "X",
    elegant_bath: "X",
    aspire: "X",
    select_series: "X",
    home_concepts: "",
    wellborn_closets: "",
    glazes: "",
    stains: "X",
    laminates: "",
    melamine: "",
    paints: ""
  }, {
    id: "40",
    nameOf: "Hazelnut",
    material: "Maple",
    premium_series: "X",
    estate_series: "X",
    elegant_bath: "X",
    aspire: "X",
    select_series: "",
    home_concepts: "",
    wellborn_closets: "",
    glazes: "",
    stains: "X",
    laminates: "",
    melamine: "",
    paints: ""
  }, {
    id: "41",
    nameOf: "Oatmeal",
    material: "Maple",
    premium_series: "X",
    estate_series: "X",
    elegant_bath: "X",
    aspire: "X",
    select_series: "",
    home_concepts: "",
    wellborn_closets: "",
    glazes: "",
    stains: "X",
    laminates: "",
    melamine: "",
    paints: ""
  }, {
    id: "42",
    nameOf: "Spiceberry",
    material: "Maple",
    premium_series: "",
    estate_series: "",
    elegant_bath: "",
    aspire: "",
    select_series: "X",
    home_concepts: "X",
    wellborn_closets: "",
    glazes: "",
    stains: "X",
    laminates: "",
    melamine: "",
    paints: ""
  }, {
    id: "43",
    nameOf: "Sable",
    material: "Maple",
    premium_series: "X",
    estate_series: "X",
    elegant_bath: "X",
    aspire: "X",
    select_series: "X",
    home_concepts: "X",
    wellborn_closets: "",
    glazes: "",
    stains: "X",
    laminates: "",
    melamine: "",
    paints: ""
  }, {
    id: "44",
    nameOf: "Light",
    material: "Maple",
    premium_series: "X",
    estate_series: "X",
    elegant_bath: "X",
    aspire: "X",
    select_series: "X",
    home_concepts: "X",
    wellborn_closets: "",
    glazes: "",
    stains: "X",
    laminates: "",
    melamine: "",
    paints: ""
  }, //Maple Stains with Glaze
  {
    id: "45",
    nameOf: "AshCharcoal",
    material: "Maple",
    premium_series: "X",
    estate_series: "X",
    elegant_bath: "X",
    aspire: "X",
    select_series: "",
    home_concepts: "",
    wellborn_closets: "",
    glazes: "X",
    stains: "X",
    laminates: "",
    melamine: "",
    paints: ""
  }, {
    id: "46",
    nameOf: "BlushCharcoal",
    material: "Maple",
    premium_series: "X",
    estate_series: "X",
    elegant_bath: "X",
    aspire: "X",
    select_series: "X",
    home_concepts: "",
    wellborn_closets: "",
    glazes: "X",
    stains: "X",
    laminates: "",
    melamine: "",
    paints: ""
  }, {
    id: "47",
    nameOf: "CaramelJava",
    material: "Maple",
    premium_series: "X",
    estate_series: "X",
    elegant_bath: "X",
    aspire: "X",
    select_series: "X",
    home_concepts: "",
    wellborn_closets: "",
    glazes: "X",
    stains: "X",
    laminates: "",
    melamine: "",
    paints: ""
  }, {
    id: "48",
    nameOf: "EvergreenJava",
    material: "Maple",
    premium_series: "X",
    estate_series: "X",
    elegant_bath: "X",
    aspire: "X",
    select_series: "",
    home_concepts: "",
    wellborn_closets: "",
    glazes: "X",
    stains: "X",
    laminates: "",
    melamine: "",
    paints: ""
  }, {
    id: "49",
    nameOf: "CranberryCharcoal",
    material: "Maple",
    premium_series: "X",
    estate_series: "X",
    elegant_bath: "X",
    aspire: "X",
    select_series: "",
    home_concepts: "",
    wellborn_closets: "",
    glazes: "X",
    stains: "X",
    laminates: "",
    melamine: "",
    paints: ""
  }, {
    id: "50",
    nameOf: "GauntletCharcoal",
    material: "Maple",
    premium_series: "X",
    estate_series: "X",
    elegant_bath: "X",
    aspire: "X",
    select_series: "",
    home_concepts: "",
    wellborn_closets: "",
    glazes: "X",
    stains: "X",
    laminates: "",
    melamine: "",
    paints: ""
  }, {
    id: "51",
    nameOf: "DriftSlate",
    material: "Maple",
    premium_series: "X",
    estate_series: "X",
    elegant_bath: "X",
    aspire: "X",
    select_series: "X",
    home_concepts: "",
    wellborn_closets: "",
    glazes: "X",
    stains: "X",
    laminates: "",
    melamine: "",
    paints: ""
  }, {
    id: "52",
    nameOf: "SableCharcoal",
    material: "Maple",
    premium_series: "X",
    estate_series: "X",
    elegant_bath: "X",
    aspire: "X",
    select_series: "X",
    home_concepts: "",
    wellborn_closets: "",
    glazes: "X",
    stains: "X",
    laminates: "",
    melamine: "",
    paints: ""
  }, {
    id: "53",
    nameOf: "OatmealCharcoal",
    material: "Maple",
    premium_series: "X",
    estate_series: "X",
    elegant_bath: "X",
    aspire: "X",
    select_series: "",
    home_concepts: "",
    wellborn_closets: "",
    glazes: "X",
    stains: "X",
    laminates: "",
    melamine: "",
    paints: ""
  }, {
    id: "54",
    nameOf: "ShaleMocha",
    material: "Maple",
    premium_series: "X",
    estate_series: "X",
    elegant_bath: "X",
    aspire: "X",
    select_series: "",
    home_concepts: "",
    wellborn_closets: "",
    glazes: "X",
    stains: "X",
    laminates: "",
    melamine: "",
    paints: ""
  }, {
    id: "55",
    nameOf: "OatmealJava",
    material: "Maple",
    premium_series: "X",
    estate_series: "X",
    elegant_bath: "X",
    aspire: "X",
    select_series: "",
    home_concepts: "",
    wellborn_closets: "",
    glazes: "X",
    stains: "X",
    laminates: "",
    melamine: "",
    paints: ""
  }, {
    id: "56",
    nameOf: "SiennaCharcoal",
    material: "Maple",
    premium_series: "X",
    estate_series: "X",
    elegant_bath: "X",
    aspire: "X",
    select_series: "X",
    home_concepts: "",
    wellborn_closets: "",
    glazes: "X",
    stains: "X",
    laminates: "",
    melamine: "",
    paints: ""
  }, {
    id: "57",
    nameOf: "HoneyJava",
    material: "Maple",
    premium_series: "X",
    estate_series: "X",
    elegant_bath: "X",
    aspire: "X",
    select_series: "X",
    home_concepts: "",
    wellborn_closets: "",
    glazes: "X",
    stains: "X",
    laminates: "",
    melamine: "",
    paints: ""
  }, {
    id: "58",
    nameOf: "NaturalSlate",
    material: "Maple",
    premium_series: "X",
    estate_series: "X",
    elegant_bath: "X",
    aspire: "X",
    select_series: "X",
    home_concepts: "",
    wellborn_closets: "",
    glazes: "X",
    stains: "X",
    laminates: "",
    melamine: "",
    paints: ""
  }, //Maple with Paints
  {
    id: "59",
    nameOf: "Aqua",
    material: "Maple",
    premium_series: "X",
    estate_series: "X",
    elegant_bath: "X",
    aspire: "X",
    select_series: "",
    home_concepts: "",
    wellborn_closets: "",
    glazes: "",
    stains: "",
    laminates: "",
    melamine: "",
    paints: "X"
  }, {
    id: "60",
    nameOf: "Bleu",
    material: "Maple",
    premium_series: "X",
    estate_series: "X",
    elegant_bath: "X",
    aspire: "X",
    select_series: "X",
    home_concepts: "",
    wellborn_closets: "",
    glazes: "",
    stains: "",
    laminates: "",
    melamine: "",
    paints: "X"
  }, {
    id: "61",
    nameOf: "BrightWhite",
    material: "Maple",
    premium_series: "X",
    estate_series: "X",
    elegant_bath: "X",
    aspire: "X",
    select_series: "X",
    home_concepts: "",
    wellborn_closets: "",
    glazes: "",
    stains: "",
    laminates: "",
    melamine: "",
    paints: "X"
  }, {
    id: "62",
    nameOf: "Dove",
    material: "Maple",
    premium_series: "X",
    estate_series: "X",
    elegant_bath: "X",
    aspire: "X",
    select_series: "X",
    home_concepts: "",
    wellborn_closets: "",
    glazes: "",
    stains: "",
    laminates: "",
    melamine: "",
    paints: "X"
  }, {
    id: "63",
    nameOf: "Sandstone",
    material: "Maple",
    premium_series: "X",
    estate_series: "X",
    elegant_bath: "X",
    aspire: "X",
    select_series: "X",
    home_concepts: "",
    wellborn_closets: "",
    glazes: "",
    stains: "",
    laminates: "",
    melamine: "",
    paints: "X"
  }, {
    id: "64",
    nameOf: "Mint",
    material: "Maple",
    premium_series: "X",
    estate_series: "X",
    elegant_bath: "X",
    aspire: "X",
    select_series: "",
    home_concepts: "",
    wellborn_closets: "",
    glazes: "",
    stains: "",
    laminates: "",
    melamine: "",
    paints: "X"
  }, {
    id: "65",
    nameOf: "Sapphire",
    material: "Maple",
    premium_series: "X",
    estate_series: "X",
    elegant_bath: "X",
    aspire: "X",
    select_series: "",
    home_concepts: "",
    wellborn_closets: "",
    glazes: "",
    stains: "",
    laminates: "",
    melamine: "",
    paints: "X"
  }, {
    id: "66",
    nameOf: "Onyx",
    material: "Maple",
    premium_series: "X",
    estate_series: "X",
    elegant_bath: "X",
    aspire: "X",
    select_series: "X",
    home_concepts: "",
    wellborn_closets: "",
    glazes: "",
    stains: "",
    laminates: "",
    melamine: "",
    paints: "X"
  }, //Maple Paints with Glaze
  {
    id: "67",
    nameOf: "AquaGranite",
    material: "Maple",
    premium_series: "X",
    estate_series: "X",
    elegant_bath: "X",
    aspire: "X",
    select_series: "",
    home_concepts: "",
    wellborn_closets: "",
    glazes: "X",
    stains: "",
    laminates: "",
    melamine: "",
    paints: "X"
  }, {
    id: "68",
    nameOf: "AquaJava",
    material: "Maple",
    premium_series: "X",
    estate_series: "X",
    elegant_bath: "X",
    aspire: "X",
    select_series: "",
    home_concepts: "",
    wellborn_closets: "",
    glazes: "X",
    stains: "",
    laminates: "",
    melamine: "",
    paints: "X"
  }, {
    id: "69",
    nameOf: "MinkGrayGranite",
    material: "Maple",
    premium_series: "X",
    estate_series: "X",
    elegant_bath: "X",
    aspire: "X",
    select_series: "",
    home_concepts: "",
    wellborn_closets: "",
    glazes: "X",
    stains: "",
    laminates: "",
    melamine: "",
    paints: "X"
  }, {
    id: "70",
    nameOf: "DoveSlate",
    material: "Maple",
    premium_series: "X",
    estate_series: "X",
    elegant_bath: "X",
    aspire: "X",
    select_series: "X",
    home_concepts: "",
    wellborn_closets: "",
    glazes: "X",
    stains: "",
    laminates: "",
    melamine: "",
    paints: "X"
  }, {
    id: "71",
    nameOf: "GlacierJava",
    material: "Maple",
    premium_series: "X",
    estate_series: "X",
    elegant_bath: "X",
    aspire: "X",
    select_series: "X",
    home_concepts: "",
    wellborn_closets: "",
    glazes: "X",
    stains: "",
    laminates: "",
    melamine: "",
    paints: "X"
  }, {
    id: "72",
    nameOf: "MintGranite",
    material: "Maple",
    premium_series: "X",
    estate_series: "X",
    elegant_bath: "X",
    aspire: "X",
    select_series: "",
    home_concepts: "",
    wellborn_closets: "",
    glazes: "X",
    stains: "",
    laminates: "",
    melamine: "",
    paints: "X"
  }, {
    id: "73",
    nameOf: "PebblePewter",
    material: "Maple",
    premium_series: "X",
    estate_series: "X",
    elegant_bath: "X",
    aspire: "X",
    select_series: "",
    home_concepts: "",
    wellborn_closets: "",
    glazes: "X",
    stains: "",
    laminates: "",
    melamine: "",
    paints: "X"
  }, {
    id: "74",
    nameOf: "OliveMocha",
    material: "Maple",
    premium_series: "X",
    estate_series: "X",
    elegant_bath: "X",
    aspire: "X",
    select_series: "",
    home_concepts: "",
    wellborn_closets: "",
    glazes: "X",
    stains: "",
    laminates: "",
    melamine: "",
    paints: "X"
  }, {
    id: "75",
    nameOf: "PebbleJava",
    material: "Maple",
    premium_series: "X",
    estate_series: "X",
    elegant_bath: "X",
    aspire: "X",
    select_series: "X",
    home_concepts: "",
    wellborn_closets: "",
    glazes: "X",
    stains: "",
    laminates: "",
    melamine: "",
    paints: "X"
  }, {
    id: "76",
    nameOf: "WillowJava",
    material: "Maple",
    premium_series: "X",
    estate_series: "X",
    elegant_bath: "X",
    aspire: "X",
    select_series: "",
    home_concepts: "",
    wellborn_closets: "",
    glazes: "X",
    stains: "",
    laminates: "",
    melamine: "",
    paints: "X"
  }, {
    id: "77",
    nameOf: "SapphireJava",
    material: "Maple",
    premium_series: "X",
    estate_series: "X",
    elegant_bath: "X",
    aspire: "X",
    select_series: "",
    home_concepts: "",
    wellborn_closets: "",
    glazes: "X",
    stains: "",
    laminates: "",
    melamine: "",
    paints: "X"
  }, {
    id: "78",
    nameOf: "DivinityJava",
    material: "Maple",
    premium_series: "X",
    estate_series: "X",
    elegant_bath: "X",
    aspire: "X",
    select_series: "X",
    home_concepts: "",
    wellborn_closets: "",
    glazes: "X",
    stains: "",
    laminates: "",
    melamine: "",
    paints: "X"
  }, {
    id: "79",
    nameOf: "OlivePewter",
    material: "Maple",
    premium_series: "X",
    estate_series: "X",
    elegant_bath: "X",
    aspire: "X",
    select_series: "",
    home_concepts: "",
    wellborn_closets: "",
    glazes: "X",
    stains: "",
    laminates: "",
    melamine: "",
    paints: "X"
  }, {
    id: "80",
    nameOf: "GrayMistGranite",
    material: "Maple",
    premium_series: "X",
    estate_series: "X",
    elegant_bath: "X",
    aspire: "X",
    select_series: "X",
    home_concepts: "",
    wellborn_closets: "",
    glazes: "X",
    stains: "",
    laminates: "",
    melamine: "",
    paints: "X"
  }, //Oak Stains
  {
    id: "81",
    nameOf: "Blush",
    material: "Oak",
    premium_series: "X",
    estate_series: "X",
    elegant_bath: "X",
    aspire: "X",
    select_series: "X",
    home_concepts: "",
    wellborn_closets: "",
    glazes: "",
    stains: "X",
    laminates: "",
    melamine: "",
    paints: ""
  }, {
    id: "82",
    nameOf: "Caramel",
    material: "Oak",
    premium_series: "X",
    estate_series: "X",
    elegant_bath: "X",
    aspire: "X",
    select_series: "X",
    home_concepts: "",
    wellborn_closets: "",
    glazes: "",
    stains: "X",
    laminates: "",
    melamine: "",
    paints: ""
  }, {
    id: "83",
    nameOf: "Shadow",
    material: "Oak",
    premium_series: "X",
    estate_series: "X",
    elegant_bath: "X",
    aspire: "X",
    select_series: "X",
    home_concepts: "",
    wellborn_closets: "",
    glazes: "",
    stains: "X",
    laminates: "",
    melamine: "",
    paints: ""
  }, {
    id: "84",
    nameOf: "Sable",
    material: "Oak",
    premium_series: "X",
    estate_series: "X",
    elegant_bath: "X",
    aspire: "X",
    select_series: "X",
    home_concepts: "X",
    wellborn_closets: "",
    glazes: "",
    stains: "X",
    laminates: "",
    melamine: "",
    paints: ""
  }, {
    id: "85",
    nameOf: "Spiceberry",
    material: "Oak",
    premium_series: "",
    estate_series: "",
    elegant_bath: "",
    aspire: "",
    select_series: "X",
    home_concepts: "",
    wellborn_closets: "",
    glazes: "",
    stains: "X",
    laminates: "",
    melamine: "",
    paints: ""
  }, {
    id: "86",
    nameOf: "Hazelnut",
    material: "Oak",
    premium_series: "X",
    estate_series: "X",
    elegant_bath: "X",
    aspire: "X",
    select_series: "",
    home_concepts: "",
    wellborn_closets: "",
    glazes: "",
    stains: "X",
    laminates: "",
    melamine: "",
    paints: ""
  }, {
    id: "87",
    nameOf: "Gauntlet",
    material: "Oak",
    premium_series: "X",
    estate_series: "X",
    elegant_bath: "X",
    aspire: "X",
    select_series: "",
    home_concepts: "",
    wellborn_closets: "",
    glazes: "",
    stains: "X",
    laminates: "",
    melamine: "",
    paints: ""
  }, {
    id: "88",
    nameOf: "Shale",
    material: "Oak",
    premium_series: "X",
    estate_series: "X",
    elegant_bath: "X",
    aspire: "X",
    select_series: "",
    home_concepts: "",
    wellborn_closets: "",
    glazes: "",
    stains: "X",
    laminates: "",
    melamine: "",
    paints: ""
  }, {
    id: "89",
    nameOf: "Dark",
    material: "Oak",
    premium_series: "X",
    estate_series: "X",
    elegant_bath: "X",
    aspire: "X",
    select_series: "X",
    home_concepts: "",
    wellborn_closets: "",
    glazes: "",
    stains: "X",
    laminates: "",
    melamine: "",
    paints: ""
  }, //Oak Stain with Glaze
  {
    id: "90",
    nameOf: "CranberryCharcoal",
    material: "Oak",
    premium_series: "X",
    estate_series: "X",
    elegant_bath: "X",
    aspire: "X",
    select_series: "",
    home_concepts: "",
    wellborn_closets: "",
    glazes: "X",
    stains: "X",
    laminates: "",
    melamine: "",
    paints: ""
  }, {
    id: "91",
    nameOf: "NaturalSlate",
    material: "Oak",
    premium_series: "X",
    estate_series: "X",
    elegant_bath: "X",
    aspire: "X",
    select_series: "X",
    home_concepts: "",
    wellborn_closets: "",
    glazes: "X",
    stains: "X",
    laminates: "",
    melamine: "",
    paints: ""
  }, {
    id: "92",
    nameOf: "BlushJava",
    material: "Oak",
    premium_series: "X",
    estate_series: "X",
    elegant_bath: "X",
    aspire: "X",
    select_series: "X",
    home_concepts: "",
    wellborn_closets: "",
    glazes: "X",
    stains: "X",
    laminates: "",
    melamine: "",
    paints: ""
  }, {
    id: "93",
    nameOf: "ShadowPewter",
    material: "Oak",
    premium_series: "X",
    estate_series: "X",
    elegant_bath: "X",
    aspire: "X",
    select_series: "",
    home_concepts: "",
    wellborn_closets: "",
    glazes: "X",
    stains: "X",
    laminates: "",
    melamine: "",
    paints: ""
  }, {
    id: "94",
    nameOf: "NutmegJava",
    material: "Oak",
    premium_series: "X",
    estate_series: "X",
    elegant_bath: "X",
    aspire: "X",
    select_series: "X",
    home_concepts: "",
    wellborn_closets: "",
    glazes: "X",
    stains: "X",
    laminates: "",
    melamine: "",
    paints: ""
  }, {
    id: "95",
    nameOf: "SiennaCharcoal",
    material: "Oak",
    premium_series: "X",
    estate_series: "X",
    elegant_bath: "X",
    aspire: "X",
    select_series: "X",
    home_concepts: "",
    wellborn_closets: "",
    glazes: "X",
    stains: "X",
    laminates: "",
    melamine: "",
    paints: ""
  }, {
    id: "96",
    nameOf: "HoneyJava",
    material: "Oak",
    premium_series: "X",
    estate_series: "X",
    elegant_bath: "X",
    aspire: "X",
    select_series: "X",
    home_concepts: "",
    wellborn_closets: "",
    glazes: "X",
    stains: "X",
    laminates: "",
    melamine: "",
    paints: ""
  }, {
    id: "97",
    nameOf: "LightJava",
    material: "Oak",
    premium_series: "X",
    estate_series: "X",
    elegant_bath: "X",
    aspire: "X",
    select_series: "X",
    home_concepts: "",
    wellborn_closets: "",
    glazes: "X",
    stains: "X",
    laminates: "",
    melamine: "",
    paints: ""
  }, {
    id: "98",
    nameOf: "SuedeCharcoal",
    material: "Oak",
    premium_series: "X",
    estate_series: "X",
    elegant_bath: "X",
    aspire: "X",
    select_series: "",
    home_concepts: "",
    wellborn_closets: "",
    glazes: "X",
    stains: "X",
    laminates: "",
    melamine: "",
    paints: ""
  }, {
    id: "99",
    nameOf: "EvergreenJava",
    material: "Oak",
    premium_series: "X",
    estate_series: "X",
    elegant_bath: "X",
    aspire: "X",
    select_series: "",
    home_concepts: "",
    wellborn_closets: "",
    glazes: "X",
    stains: "X",
    laminates: "",
    melamine: "",
    paints: ""
  }, {
    id: "100",
    nameOf: "DriftJava",
    material: "Oak",
    premium_series: "X",
    estate_series: "X",
    elegant_bath: "X",
    aspire: "X",
    select_series: "",
    home_concepts: "",
    wellborn_closets: "",
    glazes: "X",
    stains: "X",
    laminates: "",
    melamine: "",
    paints: ""
  }, {
    id: "101",
    nameOf: "NaturalSlate",
    material: "Oak",
    premium_series: "X",
    estate_series: "X",
    elegant_bath: "X",
    aspire: "X",
    select_series: "X",
    home_concepts: "",
    wellborn_closets: "",
    glazes: "X",
    stains: "X",
    laminates: "",
    melamine: "",
    paints: ""
  }, {
    id: "102",
    nameOf: "SaddleJava",
    material: "Oak",
    premium_series: "X",
    estate_series: "X",
    elegant_bath: "X",
    aspire: "X",
    select_series: "",
    home_concepts: "",
    wellborn_closets: "",
    glazes: "X",
    stains: "X",
    laminates: "",
    melamine: "",
    paints: ""
  }, //Oak Paints
  {
    id: "103",
    nameOf: "Aqua",
    material: "Oak",
    premium_series: "X",
    estate_series: "X",
    elegant_bath: "X",
    aspire: "X",
    select_series: "",
    home_concepts: "",
    wellborn_closets: "",
    glazes: "",
    stains: "",
    laminates: "",
    melamine: "",
    paints: "X"
  }, {
    id: "104",
    nameOf: "Blue",
    material: "Oak",
    premium_series: "X",
    estate_series: "X",
    elegant_bath: "X",
    aspire: "X",
    select_series: "X",
    home_concepts: "",
    wellborn_closets: "",
    glazes: "",
    stains: "",
    laminates: "",
    melamine: "",
    paints: "X"
  }, {
    id: "105",
    nameOf: "BrightWhite",
    material: "Oak",
    premium_series: "X",
    estate_series: "X",
    elegant_bath: "X",
    aspire: "X",
    select_series: "X",
    home_concepts: "",
    wellborn_closets: "",
    glazes: "",
    stains: "",
    laminates: "",
    melamine: "",
    paints: "X"
  }, {
    id: "106",
    nameOf: "Creme",
    material: "Oak",
    premium_series: "X",
    estate_series: "X",
    elegant_bath: "X",
    aspire: "X",
    select_series: "X",
    home_concepts: "",
    wellborn_closets: "",
    glazes: "",
    stains: "",
    laminates: "",
    melamine: "",
    paints: "X"
  }, {
    id: "107",
    nameOf: "Divinity",
    material: "Oak",
    premium_series: "X",
    estate_series: "X",
    elegant_bath: "X",
    aspire: "X",
    select_series: "X",
    home_concepts: "",
    wellborn_closets: "",
    glazes: "",
    stains: "",
    laminates: "",
    melamine: "",
    paints: "X"
  }, {
    id: "108",
    nameOf: "Dove",
    material: "Oak",
    premium_series: "X",
    estate_series: "X",
    elegant_bath: "X",
    aspire: "X",
    select_series: "X",
    home_concepts: "",
    wellborn_closets: "",
    glazes: "",
    stains: "",
    laminates: "",
    melamine: "",
    paints: "X"
  }, {
    id: "109",
    nameOf: "Glacier",
    material: "Oak",
    premium_series: "X",
    estate_series: "X",
    elegant_bath: "X",
    aspire: "X",
    select_series: "X",
    home_concepts: "",
    wellborn_closets: "",
    glazes: "",
    stains: "",
    laminates: "",
    melamine: "",
    paints: "X"
  }, {
    id: "110",
    nameOf: "GrayMist",
    material: "Oak",
    premium_series: "X",
    estate_series: "X",
    elegant_bath: "X",
    aspire: "X",
    select_series: "X",
    home_concepts: "",
    wellborn_closets: "",
    glazes: "",
    stains: "",
    laminates: "",
    melamine: "",
    paints: "X"
  }, {
    id: "111",
    nameOf: "MinkGray",
    material: "Oak",
    premium_series: "X",
    estate_series: "X",
    elegant_bath: "X",
    aspire: "X",
    select_series: "",
    home_concepts: "",
    wellborn_closets: "",
    glazes: "",
    stains: "",
    laminates: "",
    melamine: "",
    paints: "X"
  }, {
    id: "112",
    nameOf: "Mint",
    material: "Oak",
    premium_series: "X",
    estate_series: "X",
    elegant_bath: "X",
    aspire: "X",
    select_series: "",
    home_concepts: "",
    wellborn_closets: "",
    glazes: "",
    stains: "",
    laminates: "",
    melamine: "",
    paints: "X"
  }, {
    id: "113",
    nameOf: "Olive",
    material: "Oak",
    premium_series: "X",
    estate_series: "X",
    elegant_bath: "X",
    aspire: "X",
    select_series: "",
    home_concepts: "",
    wellborn_closets: "",
    glazes: "",
    stains: "",
    laminates: "",
    melamine: "",
    paints: "X"
  }, {
    id: "114",
    nameOf: "Onyx",
    material: "Oak",
    premium_series: "X",
    estate_series: "X",
    elegant_bath: "X",
    aspire: "X",
    select_series: "X",
    home_concepts: "",
    wellborn_closets: "",
    glazes: "",
    stains: "",
    laminates: "",
    melamine: "",
    paints: "X"
  }, {
    id: "115",
    nameOf: "OysterWhite",
    material: "Oak",
    premium_series: "X",
    estate_series: "X",
    elegant_bath: "X",
    aspire: "X",
    select_series: "",
    home_concepts: "",
    wellborn_closets: "",
    glazes: "",
    stains: "",
    laminates: "",
    melamine: "",
    paints: "X"
  }, {
    id: "116",
    nameOf: "Pebble",
    material: "Oak",
    premium_series: "X",
    estate_series: "X",
    elegant_bath: "X",
    aspire: "X",
    select_series: "X",
    home_concepts: "",
    wellborn_closets: "",
    glazes: "",
    stains: "",
    laminates: "",
    melamine: "",
    paints: "X"
  }, {
    id: "117",
    nameOf: "Sandstone",
    material: "Oak",
    premium_series: "X",
    estate_series: "X",
    elegant_bath: "X",
    aspire: "X",
    select_series: "X",
    home_concepts: "",
    wellborn_closets: "",
    glazes: "",
    stains: "",
    laminates: "",
    melamine: "",
    paints: "X"
  }, {
    id: "118",
    nameOf: "Sapphire",
    material: "Oak",
    premium_series: "X",
    estate_series: "X",
    elegant_bath: "X",
    aspire: "X",
    select_series: "X",
    home_concepts: "",
    wellborn_closets: "",
    glazes: "",
    stains: "",
    laminates: "",
    melamine: "",
    paints: "X"
  }, {
    id: "119",
    nameOf: "Willow",
    material: "Oak",
    premium_series: "X",
    estate_series: "X",
    elegant_bath: "X",
    aspire: "X",
    select_series: "",
    home_concepts: "",
    wellborn_closets: "",
    glazes: "",
    stains: "",
    laminates: "",
    melamine: "",
    paints: "X"
  }, //Oak Paints with Glaze
  {
    id: "120",
    nameOf: "OliveMocha",
    material: "Oak",
    premium_series: "X",
    estate_series: "X",
    elegant_bath: "X",
    aspire: "X",
    select_series: "",
    home_concepts: "",
    wellborn_closets: "",
    glazes: "X",
    stains: "",
    laminates: "",
    melamine: "",
    paints: "X"
  }, {
    id: "121",
    nameOf: "OlivePewter",
    material: "Oak",
    premium_series: "X",
    estate_series: "X",
    elegant_bath: "X",
    aspire: "X",
    select_series: "",
    home_concepts: "",
    wellborn_closets: "",
    glazes: "X",
    stains: "",
    laminates: "",
    melamine: "",
    paints: "X"
  }, {
    id: "122",
    nameOf: "OysterWhiteGranite",
    material: "Oak",
    premium_series: "X",
    estate_series: "X",
    elegant_bath: "X",
    aspire: "X",
    select_series: "",
    home_concepts: "",
    wellborn_closets: "",
    glazes: "X",
    stains: "",
    laminates: "",
    melamine: "",
    paints: "X"
  }, {
    id: "123",
    nameOf: "OysterWhiteJava",
    material: "Oak",
    premium_series: "X",
    estate_series: "X",
    elegant_bath: "X",
    aspire: "X",
    select_series: "",
    home_concepts: "",
    wellborn_closets: "",
    glazes: "X",
    stains: "",
    laminates: "",
    melamine: "",
    paints: "X"
  }, {
    id: "124",
    nameOf: "PebbleJava",
    material: "Oak",
    premium_series: "X",
    estate_series: "X",
    elegant_bath: "X",
    aspire: "X",
    select_series: "X",
    home_concepts: "",
    wellborn_closets: "",
    glazes: "X",
    stains: "",
    laminates: "",
    melamine: "",
    paints: "X"
  }, {
    id: "125",
    nameOf: "PebblePewter",
    material: "Oak",
    premium_series: "X",
    estate_series: "X",
    elegant_bath: "X",
    aspire: "X",
    select_series: "",
    home_concepts: "",
    wellborn_closets: "",
    glazes: "X",
    stains: "",
    laminates: "",
    melamine: "",
    paints: "X"
  }, {
    id: "126",
    nameOf: "SandstonePewter",
    material: "Oak",
    premium_series: "X",
    estate_series: "X",
    elegant_bath: "X",
    aspire: "X",
    select_series: "",
    home_concepts: "",
    wellborn_closets: "",
    glazes: "X",
    stains: "",
    laminates: "",
    melamine: "",
    paints: "X"
  }, {
    id: "127",
    nameOf: "SandstoneSlate",
    material: "Oak",
    premium_series: "X",
    estate_series: "X",
    elegant_bath: "X",
    aspire: "X",
    select_series: "X",
    home_concepts: "",
    wellborn_closets: "",
    glazes: "X",
    stains: "",
    laminates: "",
    melamine: "",
    paints: "X"
  }, {
    id: "128",
    nameOf: "SapphireGranite",
    material: "Oak",
    premium_series: "X",
    estate_series: "X",
    elegant_bath: "X",
    aspire: "X",
    select_series: "",
    home_concepts: "",
    wellborn_closets: "",
    glazes: "X",
    stains: "",
    laminates: "",
    melamine: "",
    paints: "X"
  }, {
    id: "129",
    nameOf: "DoveSlate",
    material: "Oak",
    premium_series: "X",
    estate_series: "X",
    elegant_bath: "X",
    aspire: "X",
    select_series: "X",
    home_concepts: "",
    wellborn_closets: "",
    glazes: "X",
    stains: "",
    laminates: "",
    melamine: "",
    paints: "X"
  }, //Hickory Stains
  {
    id: "130",
    nameOf: "Ash",
    material: "Hickory",
    premium_series: "X",
    estate_series: "X",
    elegant_bath: "X",
    aspire: "X",
    select_series: "X",
    home_concepts: "",
    wellborn_closets: "",
    glazes: "",
    stains: "X",
    laminates: "",
    melamine: "",
    paints: ""
  }, {
    id: "131",
    nameOf: "Blush",
    material: "Hickory",
    premium_series: "X",
    estate_series: "X",
    elegant_bath: "X",
    aspire: "X",
    select_series: "X",
    home_concepts: "",
    wellborn_closets: "",
    glazes: "",
    stains: "X",
    laminates: "",
    melamine: "",
    paints: ""
  }, {
    id: "132",
    nameOf: "Caramel",
    material: "Hickory",
    premium_series: "X",
    estate_series: "X",
    elegant_bath: "X",
    aspire: "X",
    select_series: "X",
    home_concepts: "",
    wellborn_closets: "",
    glazes: "",
    stains: "X",
    laminates: "",
    melamine: "",
    paints: ""
  }, {
    id: "133",
    nameOf: "Coffee",
    material: "Hickory",
    premium_series: "X",
    estate_series: "X",
    elegant_bath: "X",
    aspire: "X",
    select_series: "X",
    home_concepts: "",
    wellborn_closets: "",
    glazes: "",
    stains: "X",
    laminates: "",
    melamine: "",
    paints: ""
  }, {
    id: "134",
    nameOf: "Cranberry",
    material: "Hickory",
    premium_series: "X",
    estate_series: "X",
    elegant_bath: "X",
    aspire: "X",
    select_series: "",
    home_concepts: "",
    wellborn_closets: "",
    glazes: "",
    stains: "X",
    laminates: "",
    melamine: "",
    paints: ""
  }, {
    id: "135",
    nameOf: "Dark",
    material: "Hickory",
    premium_series: "X",
    estate_series: "X",
    elegant_bath: "X",
    aspire: "X",
    select_series: "X",
    home_concepts: "",
    wellborn_closets: "",
    glazes: "",
    stains: "X",
    laminates: "",
    melamine: "",
    paints: ""
  }, {
    id: "136",
    nameOf: "Drift",
    material: "Hickory",
    premium_series: "X",
    estate_series: "X",
    elegant_bath: "X",
    aspire: "X",
    select_series: "X",
    home_concepts: "",
    wellborn_closets: "",
    glazes: "",
    stains: "X",
    laminates: "",
    melamine: "",
    paints: ""
  }, {
    id: "137",
    nameOf: "Espresso",
    material: "Hickory",
    premium_series: "X",
    estate_series: "X",
    elegant_bath: "X",
    aspire: "X",
    select_series: "X",
    home_concepts: "",
    wellborn_closets: "",
    glazes: "",
    stains: "X",
    laminates: "",
    melamine: "",
    paints: ""
  }, {
    id: "138",
    nameOf: "Gauntlet",
    material: "Hickory",
    premium_series: "X",
    estate_series: "X",
    elegant_bath: "X",
    aspire: "X",
    select_series: "",
    home_concepts: "",
    wellborn_closets: "",
    glazes: "",
    stains: "X",
    laminates: "",
    melamine: "",
    paints: ""
  }, {
    id: "139",
    nameOf: "Ginger",
    material: "Hickory",
    premium_series: "X",
    estate_series: "X",
    elegant_bath: "X",
    aspire: "X",
    select_series: "",
    home_concepts: "",
    wellborn_closets: "",
    glazes: "",
    stains: "X",
    laminates: "",
    melamine: "",
    paints: ""
  }, //Hickory Stains with Glaze
  {
    id: "140",
    nameOf: "EvergreenJava",
    material: "Hickory",
    premium_series: "X",
    estate_series: "X",
    elegant_bath: "X",
    aspire: "X",
    select_series: "",
    home_concepts: "",
    wellborn_closets: "",
    glazes: "X",
    stains: "X",
    laminates: "",
    melamine: "",
    paints: ""
  }, {
    id: "141",
    nameOf: "GauntletCharcoal",
    material: "Hickory",
    premium_series: "X",
    estate_series: "X",
    elegant_bath: "X",
    aspire: "X",
    select_series: "",
    home_concepts: "",
    wellborn_closets: "",
    glazes: "X",
    stains: "X",
    laminates: "",
    melamine: "",
    paints: ""
  }, {
    id: "142",
    nameOf: "GauntletJava",
    material: "Hickory",
    premium_series: "X",
    estate_series: "X",
    elegant_bath: "X",
    aspire: "X",
    select_series: "",
    home_concepts: "",
    wellborn_closets: "",
    glazes: "X",
    stains: "X",
    laminates: "",
    melamine: "",
    paints: ""
  }, {
    id: "143",
    nameOf: "GingerCharcoal",
    material: "Hickory",
    premium_series: "X",
    estate_series: "X",
    elegant_bath: "X",
    aspire: "X",
    select_series: "",
    home_concepts: "",
    wellborn_closets: "",
    glazes: "X",
    stains: "X",
    laminates: "",
    melamine: "",
    paints: ""
  }, {
    id: "144",
    nameOf: "GingerJava",
    material: "Hickory",
    premium_series: "X",
    estate_series: "X",
    elegant_bath: "X",
    aspire: "X",
    select_series: "",
    home_concepts: "",
    wellborn_closets: "",
    glazes: "X",
    stains: "X",
    laminates: "",
    melamine: "",
    paints: ""
  }, {
    id: "145",
    nameOf: "HazelCharcoal",
    material: "Hickory",
    premium_series: "X",
    estate_series: "X",
    elegant_bath: "X",
    aspire: "X",
    select_series: "",
    home_concepts: "",
    wellborn_closets: "",
    glazes: "X",
    stains: "X",
    laminates: "",
    melamine: "",
    paints: ""
  }, {
    id: "146",
    nameOf: "HoneyJava",
    material: "Hickory",
    premium_series: "X",
    estate_series: "X",
    elegant_bath: "X",
    aspire: "X",
    select_series: "X",
    home_concepts: "",
    wellborn_closets: "",
    glazes: "X",
    stains: "X",
    laminates: "",
    melamine: "",
    paints: ""
  }, {
    id: "147",
    nameOf: "LightJava",
    material: "Hickory",
    premium_series: "X",
    estate_series: "X",
    elegant_bath: "X",
    aspire: "X",
    select_series: "X",
    home_concepts: "",
    wellborn_closets: "",
    glazes: "X",
    stains: "X",
    laminates: "",
    melamine: "",
    paints: ""
  }, {
    id: "148",
    nameOf: "LightSlate",
    material: "Hickory",
    premium_series: "X",
    estate_series: "X",
    elegant_bath: "X",
    aspire: "X",
    select_series: "X",
    home_concepts: "",
    wellborn_closets: "",
    glazes: "X",
    stains: "X",
    laminates: "",
    melamine: "",
    paints: ""
  }, {
    id: "149",
    nameOf: "NaturalSlate",
    material: "Hickory",
    premium_series: "X",
    estate_series: "X",
    elegant_bath: "X",
    aspire: "X",
    select_series: "X",
    home_concepts: "",
    wellborn_closets: "",
    glazes: "X",
    stains: "X",
    laminates: "",
    melamine: "",
    paints: ""
  }, {
    id: "150",
    nameOf: "ShaleMocha",
    material: "Hickory",
    premium_series: "X",
    estate_series: "X",
    elegant_bath: "X",
    aspire: "X",
    select_series: "",
    home_concepts: "",
    wellborn_closets: "",
    glazes: "X",
    stains: "X",
    laminates: "",
    melamine: "",
    paints: ""
  }, {
    id: "151",
    nameOf: "SiennaCharcoal",
    material: "Hickory",
    premium_series: "X",
    estate_series: "X",
    elegant_bath: "X",
    aspire: "X",
    select_series: "X",
    home_concepts: "",
    wellborn_closets: "",
    glazes: "X",
    stains: "X",
    laminates: "",
    melamine: "",
    paints: ""
  }, {
    id: "152",
    nameOf: "SuedeCharcoal",
    material: "Hickory",
    premium_series: "X",
    estate_series: "X",
    elegant_bath: "X",
    aspire: "X",
    select_series: "",
    home_concepts: "",
    wellborn_closets: "",
    glazes: "X",
    stains: "X",
    laminates: "",
    melamine: "",
    paints: ""
  }, //MDF Paints
  {
    id: "153",
    nameOf: "Mint",
    material: "MDF",
    premium_series: "X",
    estate_series: "X",
    elegant_bath: "X",
    aspire: "X",
    select_series: "",
    home_concepts: "",
    wellborn_closets: "",
    glazes: "",
    stains: "",
    laminates: "",
    melamine: "",
    paints: "X"
  }, {
    id: "154",
    nameOf: "Olive",
    material: "MDF",
    premium_series: "X",
    estate_series: "X",
    elegant_bath: "X",
    aspire: "X",
    select_series: "",
    home_concepts: "",
    wellborn_closets: "",
    glazes: "",
    stains: "",
    laminates: "",
    melamine: "",
    paints: "X"
  }, {
    id: "155",
    nameOf: "Onyx",
    material: "MDF",
    premium_series: "X",
    estate_series: "X",
    elegant_bath: "X",
    aspire: "X",
    select_series: "X",
    home_concepts: "",
    wellborn_closets: "",
    glazes: "",
    stains: "",
    laminates: "",
    melamine: "",
    paints: "X"
  }, {
    id: "156",
    nameOf: "OysterWhite",
    material: "MDF",
    premium_series: "X",
    estate_series: "X",
    elegant_bath: "X",
    aspire: "X",
    select_series: "",
    home_concepts: "",
    wellborn_closets: "",
    glazes: "",
    stains: "",
    laminates: "",
    melamine: "",
    paints: "X"
  }, {
    id: "157",
    nameOf: "Pebble",
    material: "MDF",
    premium_series: "X",
    estate_series: "X",
    elegant_bath: "X",
    aspire: "X",
    select_series: "X",
    home_concepts: "",
    wellborn_closets: "",
    glazes: "",
    stains: "",
    laminates: "",
    melamine: "",
    paints: "X"
  }, {
    id: "158",
    nameOf: "Sandstone",
    material: "MDF",
    premium_series: "X",
    estate_series: "X",
    elegant_bath: "X",
    aspire: "X",
    select_series: "X",
    home_concepts: "",
    wellborn_closets: "",
    glazes: "",
    stains: "",
    laminates: "",
    melamine: "",
    paints: "X"
  }, {
    id: "159",
    nameOf: "Willow",
    material: "MDF",
    premium_series: "X",
    estate_series: "X",
    elegant_bath: "X",
    aspire: "X",
    select_series: "X",
    home_concepts: "",
    wellborn_closets: "",
    glazes: "",
    stains: "",
    laminates: "",
    melamine: "",
    paints: "X"
  }, {
    id: "160",
    nameOf: "Aqua",
    material: "MDF",
    premium_series: "X",
    estate_series: "X",
    elegant_bath: "X",
    aspire: "X",
    select_series: "",
    home_concepts: "",
    wellborn_closets: "",
    glazes: "",
    stains: "",
    laminates: "",
    melamine: "",
    paints: "X"
  }, {
    id: "161",
    nameOf: "Bleu",
    material: "MDF",
    premium_series: "X",
    estate_series: "X",
    elegant_bath: "X",
    aspire: "X",
    select_series: "X",
    home_concepts: "",
    wellborn_closets: "",
    glazes: "",
    stains: "",
    laminates: "",
    melamine: "",
    paints: "X"
  }, {
    id: "162",
    nameOf: "BrightWhite",
    material: "MDF",
    premium_series: "X",
    estate_series: "X",
    elegant_bath: "X",
    aspire: "X",
    select_series: "X",
    home_concepts: "",
    wellborn_closets: "",
    glazes: "",
    stains: "",
    laminates: "",
    melamine: "",
    paints: "X"
  }, {
    id: "163",
    nameOf: "AquaGranite",
    material: "MDF",
    premium_series: "X",
    estate_series: "X",
    elegant_bath: "X",
    aspire: "X",
    select_series: "",
    home_concepts: "",
    wellborn_closets: "",
    glazes: "X",
    stains: "",
    laminates: "",
    melamine: "",
    paints: "X"
  }, {
    id: "164",
    nameOf: "AquaJava",
    material: "MDF",
    premium_series: "X",
    estate_series: "X",
    elegant_bath: "X",
    aspire: "X",
    select_series: "",
    home_concepts: "",
    wellborn_closets: "",
    glazes: "X",
    stains: "",
    laminates: "",
    melamine: "",
    paints: "X"
  }, {
    id: "165",
    nameOf: "BleuJava",
    material: "MDF",
    premium_series: "X",
    estate_series: "X",
    elegant_bath: "X",
    aspire: "X",
    select_series: "",
    home_concepts: "",
    wellborn_closets: "",
    glazes: "X",
    stains: "",
    laminates: "",
    melamine: "",
    paints: "X"
  }, {
    id: "166",
    nameOf: "BrightWhiteJava",
    material: "MDF",
    premium_series: "X",
    estate_series: "X",
    elegant_bath: "X",
    aspire: "X",
    select_series: "X",
    home_concepts: "",
    wellborn_closets: "",
    glazes: "X",
    stains: "",
    laminates: "",
    melamine: "",
    paints: "X"
  }, {
    id: "167",
    nameOf: "CremeMocha",
    material: "MDF",
    premium_series: "X",
    estate_series: "X",
    elegant_bath: "X",
    aspire: "X",
    select_series: "X",
    home_concepts: "",
    wellborn_closets: "",
    glazes: "X",
    stains: "",
    laminates: "",
    melamine: "",
    paints: "X"
  }, {
    id: "168",
    nameOf: "CremeSlate",
    material: "MDF",
    premium_series: "X",
    estate_series: "X",
    elegant_bath: "X",
    aspire: "X",
    select_series: "",
    home_concepts: "",
    wellborn_closets: "",
    glazes: "X",
    stains: "",
    laminates: "",
    melamine: "",
    paints: "X"
  }, {
    id: "169",
    nameOf: "DivinityJava",
    material: "MDF",
    premium_series: "X",
    estate_series: "X",
    elegant_bath: "X",
    aspire: "X",
    select_series: "X",
    home_concepts: "",
    wellborn_closets: "",
    glazes: "X",
    stains: "",
    laminates: "",
    melamine: "",
    paints: "X"
  }, {
    id: "170",
    nameOf: "DoveJava",
    material: "MDF",
    premium_series: "X",
    estate_series: "X",
    elegant_bath: "X",
    aspire: "X",
    select_series: "X",
    home_concepts: "",
    wellborn_closets: "",
    glazes: "X",
    stains: "",
    laminates: "",
    melamine: "",
    paints: "X"
  }, {
    id: "171",
    nameOf: "DovePewter",
    material: "MDF",
    premium_series: "X",
    estate_series: "X",
    elegant_bath: "X",
    aspire: "X",
    select_series: "",
    home_concepts: "",
    wellborn_closets: "",
    glazes: "X",
    stains: "",
    laminates: "",
    melamine: "",
    paints: "X"
  }, {
    id: "172",
    nameOf: "GrayMistGranite",
    material: "MDF",
    premium_series: "X",
    estate_series: "X",
    elegant_bath: "X",
    aspire: "X",
    select_series: "X",
    home_concepts: "",
    wellborn_closets: "",
    glazes: "X",
    stains: "",
    laminates: "",
    melamine: "",
    paints: "X"
  }, {
    id: "173",
    nameOf: "GrayMistJava",
    material: "MDF",
    premium_series: "X",
    estate_series: "X",
    elegant_bath: "X",
    aspire: "X",
    select_series: "X",
    home_concepts: "",
    wellborn_closets: "",
    glazes: "X",
    stains: "",
    laminates: "",
    melamine: "",
    paints: "X"
  }, {
    id: "174",
    nameOf: "MinkGrayGranite",
    material: "MDF",
    premium_series: "X",
    estate_series: "X",
    elegant_bath: "X",
    aspire: "X",
    select_series: "",
    home_concepts: "",
    wellborn_closets: "",
    glazes: "X",
    stains: "",
    laminates: "",
    melamine: "",
    paints: "X"
  }, {
    id: "175",
    nameOf: "MinkGrayJava",
    material: "MDF",
    premium_series: "X",
    estate_series: "X",
    elegant_bath: "X",
    aspire: "X",
    select_series: "",
    home_concepts: "",
    wellborn_closets: "",
    glazes: "X",
    stains: "",
    laminates: "",
    melamine: "",
    paints: "X"
  }, {
    id: "176",
    nameOf: "MintGranite",
    material: "MDF",
    premium_series: "X",
    estate_series: "X",
    elegant_bath: "X",
    aspire: "X",
    select_series: "",
    home_concepts: "",
    wellborn_closets: "",
    glazes: "X",
    stains: "",
    laminates: "",
    melamine: "",
    paints: "X"
  }, {
    id: "177",
    nameOf: "MintJava",
    material: "MDF",
    premium_series: "X",
    estate_series: "X",
    elegant_bath: "X",
    aspire: "X",
    select_series: "",
    home_concepts: "",
    wellborn_closets: "",
    glazes: "X",
    stains: "",
    laminates: "",
    melamine: "",
    paints: "X"
  }, //Laminates
  {
    id: "178",
    nameOf: "Linen",
    material: "Laminate",
    premium_series: "",
    estate_series: "",
    elegant_bath: "",
    aspire: "",
    select_series: "X",
    home_concepts: "X",
    wellborn_closets: "",
    glazes: "",
    stains: "",
    laminates: "X",
    melamine: "",
    paints: ""
  }, {
    id: "179",
    nameOf: "NaturalMaple",
    material: "Laminate",
    premium_series: "",
    estate_series: "",
    elegant_bath: "",
    aspire: "",
    select_series: "X",
    home_concepts: "X",
    wellborn_closets: "",
    glazes: "",
    stains: "",
    laminates: "X",
    melamine: "",
    paints: ""
  }, {
    id: "180",
    nameOf: "Sienna",
    material: "Laminate",
    premium_series: "",
    estate_series: "",
    elegant_bath: "",
    aspire: "",
    select_series: "X",
    home_concepts: "X",
    wellborn_closets: "",
    glazes: "",
    stains: "",
    laminates: "X",
    melamine: "",
    paints: ""
  }, {
    id: "181",
    nameOf: "Spiceberry",
    material: "Laminate",
    premium_series: "",
    estate_series: "",
    elegant_bath: "",
    aspire: "",
    select_series: "X",
    home_concepts: "X",
    wellborn_closets: "",
    glazes: "",
    stains: "",
    laminates: "X",
    melamine: "",
    paints: ""
  }, {
    id: "182",
    nameOf: "White",
    material: "Laminate",
    premium_series: "",
    estate_series: "",
    elegant_bath: "",
    aspire: "",
    select_series: "X",
    home_concepts: "X",
    wellborn_closets: "",
    glazes: "",
    stains: "",
    laminates: "X",
    melamine: "",
    paints: ""
  }, //Designer Laminates
  {
    id: "183",
    nameOf: "BronzedLeather",
    material: "Designer Laminate",
    premium_series: "",
    estate_series: "",
    elegant_bath: "",
    aspire: "X",
    select_series: "",
    home_concepts: "",
    wellborn_closets: "",
    glazes: "",
    stains: "",
    laminates: "X",
    melamine: "",
    paints: ""
  }, {
    id: "184",
    nameOf: "Dusk",
    material: "Designer Laminate",
    premium_series: "",
    estate_series: "",
    elegant_bath: "",
    aspire: "X",
    select_series: "",
    home_concepts: "",
    wellborn_closets: "",
    glazes: "",
    stains: "",
    laminates: "X",
    melamine: "",
    paints: ""
  }, {
    id: "185",
    nameOf: "HighGlossCinder",
    material: "Designer Laminate",
    premium_series: "",
    estate_series: "",
    elegant_bath: "",
    aspire: "X",
    select_series: "",
    home_concepts: "",
    wellborn_closets: "",
    glazes: "",
    stains: "",
    laminates: "X",
    melamine: "",
    paints: ""
  }, {
    id: "186",
    nameOf: "HighGlossEbony",
    material: "Designer Laminate",
    premium_series: "",
    estate_series: "",
    elegant_bath: "",
    aspire: "X",
    select_series: "",
    home_concepts: "",
    wellborn_closets: "",
    glazes: "",
    stains: "",
    laminates: "X",
    melamine: "",
    paints: ""
  }, {
    id: "187",
    nameOf: "HighGlossGold",
    material: "Designer Laminate",
    premium_series: "",
    estate_series: "",
    elegant_bath: "",
    aspire: "X",
    select_series: "",
    home_concepts: "",
    wellborn_closets: "",
    glazes: "",
    stains: "",
    laminates: "X",
    melamine: "",
    paints: ""
  }, {
    id: "188",
    nameOf: "HighGlossMoonlight",
    material: "Designer Laminate",
    premium_series: "",
    estate_series: "",
    elegant_bath: "",
    aspire: "X",
    select_series: "",
    home_concepts: "",
    wellborn_closets: "",
    glazes: "",
    stains: "",
    laminates: "X",
    melamine: "",
    paints: ""
  }, {
    id: "189",
    nameOf: "HighGlossPoppyRed",
    material: "Designer Laminate",
    premium_series: "",
    estate_series: "",
    elegant_bath: "",
    aspire: "X",
    select_series: "",
    home_concepts: "",
    wellborn_closets: "",
    glazes: "",
    stains: "",
    laminates: "X",
    melamine: "",
    paints: ""
  }, {
    id: "190",
    nameOf: "HighGlossStardust",
    material: "Designer Laminate",
    premium_series: "",
    estate_series: "",
    elegant_bath: "",
    aspire: "X",
    select_series: "",
    home_concepts: "",
    wellborn_closets: "",
    glazes: "",
    stains: "",
    laminates: "X",
    melamine: "",
    paints: ""
  }, //Melamine
  {
    id: "191",
    nameOf: "BiscottiCherry",
    material: "Melamine",
    premium_series: "",
    estate_series: "",
    elegant_bath: "",
    aspire: "X",
    select_series: "",
    home_concepts: "",
    wellborn_closets: "",
    glazes: "",
    stains: "",
    laminates: "X",
    melamine: "",
    paints: ""
  }, {
    id: "192",
    nameOf: "ChicoryAlder",
    material: "Melamine",
    premium_series: "",
    estate_series: "",
    elegant_bath: "",
    aspire: "X",
    select_series: "",
    home_concepts: "",
    wellborn_closets: "",
    glazes: "",
    stains: "",
    laminates: "X",
    melamine: "",
    paints: ""
  }, {
    id: "193",
    nameOf: "CinderAlder",
    material: "Melamine",
    premium_series: "",
    estate_series: "",
    elegant_bath: "",
    aspire: "X",
    select_series: "",
    home_concepts: "",
    wellborn_closets: "",
    glazes: "",
    stains: "",
    laminates: "X",
    melamine: "",
    paints: ""
  }, {
    id: "194",
    nameOf: "HuskAlder",
    material: "Melamine",
    premium_series: "",
    estate_series: "",
    elegant_bath: "",
    aspire: "X",
    select_series: "",
    home_concepts: "",
    wellborn_closets: "",
    glazes: "",
    stains: "",
    laminates: "X",
    melamine: "",
    paints: ""
  }, {
    id: "195",
    nameOf: "PlatinumAlder",
    material: "Melamine",
    premium_series: "",
    estate_series: "",
    elegant_bath: "",
    aspire: "X",
    select_series: "",
    home_concepts: "",
    wellborn_closets: "",
    glazes: "",
    stains: "",
    laminates: "X",
    melamine: "",
    paints: ""
  }, //Heavy Texture Melamine
  {
    id: "196",
    nameOf: "CottonPine",
    material: "Heavy Texture Melamine",
    premium_series: "",
    estate_series: "",
    elegant_bath: "",
    aspire: "X",
    select_series: "",
    home_concepts: "",
    wellborn_closets: "",
    glazes: "",
    stains: "",
    laminates: "X",
    melamine: "",
    paints: ""
  }, {
    id: "197",
    nameOf: "PuttyOak",
    material: "Heavy Texture Melamine",
    premium_series: "",
    estate_series: "",
    elegant_bath: "",
    aspire: "X",
    select_series: "",
    home_concepts: "",
    wellborn_closets: "",
    glazes: "",
    stains: "",
    laminates: "X",
    melamine: "",
    paints: ""
  }, {
    id: "198",
    nameOf: "SmokeOak",
    material: "Heavy Texture Melamine",
    premium_series: "",
    estate_series: "",
    elegant_bath: "",
    aspire: "X",
    select_series: "",
    home_concepts: "",
    wellborn_closets: "",
    glazes: "",
    stains: "",
    laminates: "X",
    melamine: "",
    paints: ""
  }, {
    id: "199",
    nameOf: "SnowOak",
    material: "Heavy Texture Melamine",
    premium_series: "",
    estate_series: "",
    elegant_bath: "",
    aspire: "X",
    select_series: "",
    home_concepts: "",
    wellborn_closets: "",
    glazes: "",
    stains: "",
    laminates: "X",
    melamine: "",
    paints: ""
  }, {
    id: "200",
    nameOf: "ZincOak",
    material: "Heavy Texture Melamine",
    premium_series: "",
    estate_series: "",
    elegant_bath: "",
    aspire: "X",
    select_series: "",
    home_concepts: "",
    wellborn_closets: "",
    glazes: "",
    stains: "",
    laminates: "X",
    melamine: "",
    paints: ""
  }]);

  const fetchFinishes = () => {
    dispatch(Object(_Actions_FinishActions__WEBPACK_IMPORTED_MODULE_2__["setFinishList"])(finishesList));
    console.log("Current listings:", finishesList);
  };

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    fetchFinishes();
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 235,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    id: "container",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 237,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "App",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 238,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("center", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 239,
      columnNumber: 17
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    id: "welcomePage",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 239,
      columnNumber: 25
    }
  }, "Wellborn Cabinets")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    id: "sidenav",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 240,
      columnNumber: 17
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: "navmenu",
    href: "/wordpress/stains",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 241,
      columnNumber: 11
    }
  }, "\uFF33\uFF54\uFF41\uFF49\uFF4E\uFF53"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 241,
      columnNumber: 71
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", {
    className: "spacer",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 242,
      columnNumber: 11
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: "navmenu",
    href: "/wordpress/glazes",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 243,
      columnNumber: 11
    }
  }, "\uFF27\uFF4C\uFF41\uFF5A\uFF45\uFF53"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 243,
      columnNumber: 71
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", {
    className: "spacer",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 244,
      columnNumber: 11
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: "navmenu",
    href: "/wordpress/paints",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 245,
      columnNumber: 11
    }
  }, "\uFF30\uFF41\uFF49\uFF4E\uFF54\uFF53"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 245,
      columnNumber: 71
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", {
    className: "spacer",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 246,
      columnNumber: 11
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: "navmenu",
    href: "/wordpress/laminates",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 247,
      columnNumber: 11
    }
  }, "\uFF2C\uFF41\uFF4D\uFF49\uFF4E\uFF41\uFF54\uFF45\uFF53"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 247,
      columnNumber: 77
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", {
    className: "spacer",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 248,
      columnNumber: 11
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: "navmenu",
    href: "/wordpress/melamine",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 249,
      columnNumber: 11
    }
  }, "\uFF2D\uFF45\uFF4C\uFF41\uFF4D\uFF49\uFF4E\uFF45"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 250,
      columnNumber: 11
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 251,
      columnNumber: 11
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 251,
      columnNumber: 16
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: "App-link",
    id: "blog-link",
    href: "https://www.wellborn.com/blog/",
    target: "_blank",
    rel: "noopener noreferrer",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 252,
      columnNumber: 11
    }
  }, "A Wellborn Blog "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 254,
      columnNumber: 21
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 254,
      columnNumber: 26
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 254,
      columnNumber: 31
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("center", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 255,
      columnNumber: 21
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    id: "homebutton",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 255,
      columnNumber: 29
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    id: "homebuttontext",
    className: "App-link",
    href: "/wordpress",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 255,
      columnNumber: 53
    }
  }, "Return Home")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    id: "addy",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 257,
      columnNumber: 17
    }
  }, "38669 Hwy 77 S. Ashland, AL 36251"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 260,
      columnNumber: 17
    }
  }, "Hello.")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_middlearea__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 262,
      columnNumber: 9
    }
  }))));
}

const mapStateToProps = state => {
  return {
    Index: state.Index
  };
};

const mapDispatchToProps = dispatch => {
  return {
    Finish: finishesList => {
      dispatch({
        type: 'SELECTED_FINISH',
        finishesList
      });
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps, mapDispatchToProps)(Welcome));

/***/ }),

/***/ "./src/Constants/Action.type.js":
/*!**************************************!*\
  !*** ./src/Constants/Action.type.js ***!
  \**************************************/
/*! exports provided: ActionTypes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActionTypes", function() { return ActionTypes; });
const ActionTypes = {
  SET_FINISHES: "SET_FINISHES",
  SELECTED_FINISH: "SELECTED_FINISH"
};

/***/ }),

/***/ "./src/Reducers/FinishReducer.js":
/*!***************************************!*\
  !*** ./src/Reducers/FinishReducer.js ***!
  \***************************************/
/*! exports provided: FinishListReducer, FinishReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FinishListReducer", function() { return FinishListReducer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FinishReducer", function() { return FinishReducer; });
/* harmony import */ var _Constants_Action_type__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Constants/Action.type */ "./src/Constants/Action.type.js");

const initialState = {
  FinishesList: []
};
const FinishListReducer = (state = initialState, {
  type,
  payload
}) => {
  switch (type) {
    case _Constants_Action_type__WEBPACK_IMPORTED_MODULE_0__["ActionTypes"].SET_FINISHES:
      return { ...state,
        FinishesList: payload
      };

    default:
      return state;
  }
};
const FinishReducer = (state = {}, {
  type,
  payload
}) => {
  switch (type) {
    case _Constants_Action_type__WEBPACK_IMPORTED_MODULE_0__["ActionTypes"].SELECTED_FINISH:
      return { ...state,
        ...payload
      };

    default:
      return state;
  }
};

/***/ }),

/***/ "./src/Reducers/RootReducer.js":
/*!*************************************!*\
  !*** ./src/Reducers/RootReducer.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var _FinishReducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FinishReducer */ "./src/Reducers/FinishReducer.js");


const RootReducer = Object(redux__WEBPACK_IMPORTED_MODULE_0__["combineReducers"])({
  Index: _FinishReducer__WEBPACK_IMPORTED_MODULE_1__["FinishListReducer"],
  Finish: _FinishReducer__WEBPACK_IMPORTED_MODULE_1__["FinishReducer"]
});
/* harmony default export */ __webpack_exports__["default"] = (RootReducer);

/***/ }),

/***/ "./src/Store.js":
/*!**********************!*\
  !*** ./src/Store.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-devtools-extension */ "./node_modules/redux-devtools-extension/index.js");
/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux-thunk */ "./node_modules/redux-thunk/es/index.js");
/* harmony import */ var _Reducers_RootReducer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Reducers/RootReducer */ "./src/Reducers/RootReducer.js");





const Store = Object(redux__WEBPACK_IMPORTED_MODULE_0__["createStore"])(_Reducers_RootReducer__WEBPACK_IMPORTED_MODULE_3__["default"], {}, Object(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_1__["composeWithDevTools"])(Object(redux__WEBPACK_IMPORTED_MODULE_0__["applyMiddleware"])(redux_thunk__WEBPACK_IMPORTED_MODULE_2__["default"])));
/* harmony default export */ __webpack_exports__["default"] = (Store);

/***/ }),

/***/ "./src/index.css":
/*!***********************!*\
  !*** ./src/index.css ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.css */ "./src/index.css");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./App */ "./src/App.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _Store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Store */ "./src/Store.js");
var _jsxFileName = "/mnt/c/xampp/htdocs/wordpress/wp-content/themes/demo/react-src/src/index.js";






react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.StrictMode, {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 3
  }
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_redux__WEBPACK_IMPORTED_MODULE_4__["Provider"], {
  store: _Store__WEBPACK_IMPORTED_MODULE_5__["default"],
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 10,
    columnNumber: 5
  }
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_App__WEBPACK_IMPORTED_MODULE_3__["default"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 11,
    columnNumber: 5
  }
}))), document.getElementById('root'));

/***/ }),

/***/ 0:
/*!****************************!*\
  !*** multi ./src/index.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /mnt/c/xampp/htdocs/wordpress/wp-content/themes/demo/react-src/src/index.js */"./src/index.js");


/***/ })

},[[0,"runtime-main",0]]]);
//# sourceMappingURL=main.chunk.js.map