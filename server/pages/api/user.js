"use strict";
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
exports.id = "pages/api/user";
exports.ids = ["pages/api/user"];
exports.modules = {

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ "(api)/./models/user.js":
/*!************************!*\
  !*** ./models/user.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst userSchema = new (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema)({\n    username: {\n        type: String,\n        required: true\n    },\n    password: {\n        type: String,\n        required: true\n    },\n    teacher: {\n        type: String\n    },\n    date: {\n        type: String\n    },\n    time: {\n        type: String\n    },\n    topic: {\n        type: String\n    }\n});\nlet Dataset = (mongoose__WEBPACK_IMPORTED_MODULE_0___default().models.User) || mongoose__WEBPACK_IMPORTED_MODULE_0___default().model(\"User\", userSchema);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Dataset);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9tb2RlbHMvdXNlci5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBK0I7QUFFL0IsTUFBTUMsYUFBYSxJQUFJRCx3REFBZSxDQUNwQztJQUNFRyxVQUFVO1FBQ1JDLE1BQU1DO1FBQ05DLFVBQVUsSUFBSTtJQUNoQjtJQUNBQyxVQUFVO1FBQ1JILE1BQU1DO1FBQ05DLFVBQVUsSUFBSTtJQUNoQjtJQUNBRSxTQUFTO1FBQ1BKLE1BQU1DO0lBQ1I7SUFDQUksTUFBTTtRQUNKTCxNQUFNQztJQUNSO0lBQ0FLLE1BQU07UUFDSk4sTUFBTUM7SUFDUjtJQUNBTSxPQUFPO1FBQ0xQLE1BQU1DO0lBQ1I7QUFDRjtBQUdGLElBQUlPLFVBQVVaLDZEQUFvQixJQUFJQSxxREFBYyxDQUFDLFFBQVFDO0FBQzdELGlFQUFlVyxPQUFPQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdGVhY2hlci1ib29raW5nLy4vbW9kZWxzL3VzZXIuanM/NjU5NCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbW9uZ29vc2UgZnJvbSAnbW9uZ29vc2UnXHJcblxyXG5jb25zdCB1c2VyU2NoZW1hID0gbmV3IG1vbmdvb3NlLlNjaGVtYShcclxuICB7XHJcbiAgICB1c2VybmFtZToge1xyXG4gICAgICB0eXBlOiBTdHJpbmcsXHJcbiAgICAgIHJlcXVpcmVkOiB0cnVlLFxyXG4gICAgfSxcclxuICAgIHBhc3N3b3JkOiB7XHJcbiAgICAgIHR5cGU6IFN0cmluZyxcclxuICAgICAgcmVxdWlyZWQ6IHRydWUsXHJcbiAgICB9LFxyXG4gICAgdGVhY2hlcjoge1xyXG4gICAgICB0eXBlOiBTdHJpbmcsXHJcbiAgICB9LFxyXG4gICAgZGF0ZToge1xyXG4gICAgICB0eXBlOiBTdHJpbmcsXHJcbiAgICB9LFxyXG4gICAgdGltZToge1xyXG4gICAgICB0eXBlOiBTdHJpbmcsXHJcbiAgICB9LFxyXG4gICAgdG9waWM6IHtcclxuICAgICAgdHlwZTogU3RyaW5nLFxyXG4gICAgfSxcclxuICB9LFxyXG4pXHJcblxyXG5sZXQgRGF0YXNldCA9IG1vbmdvb3NlLm1vZGVscy5Vc2VyIHx8IG1vbmdvb3NlLm1vZGVsKCdVc2VyJywgdXNlclNjaGVtYSlcclxuZXhwb3J0IGRlZmF1bHQgRGF0YXNldFxyXG4iXSwibmFtZXMiOlsibW9uZ29vc2UiLCJ1c2VyU2NoZW1hIiwiU2NoZW1hIiwidXNlcm5hbWUiLCJ0eXBlIiwiU3RyaW5nIiwicmVxdWlyZWQiLCJwYXNzd29yZCIsInRlYWNoZXIiLCJkYXRlIiwidGltZSIsInRvcGljIiwiRGF0YXNldCIsIm1vZGVscyIsIlVzZXIiLCJtb2RlbCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./models/user.js\n");

/***/ }),

/***/ "(api)/./pages/api/user/index.js":
/*!*********************************!*\
  !*** ./pages/api/user/index.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _utils_connectDB__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../utils/connectDB */ \"(api)/./utils/connectDB.js\");\n/* harmony import */ var _models_user__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../models/user */ \"(api)/./models/user.js\");\n\n\n(0,_utils_connectDB__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (async (req, res)=>{\n    switch(req.method){\n        case \"GET\":\n            await getUser(req, res);\n            break;\n    }\n});\nconst getUser = async (req, res)=>{\n    try {\n        const { username  } = req.query;\n        const user = await _models_user__WEBPACK_IMPORTED_MODULE_1__[\"default\"].findOne({\n            username\n        });\n        if (!user) return res.status(400).json({\n            err: \"User does not exist.\"\n        });\n        res.json(user);\n    } catch (err) {\n        return res.status(500).json({\n            err: err.message\n        });\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvdXNlci9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBZ0Q7QUFDVDtBQUV2Q0EsNERBQVNBO0FBRVQsaUVBQWUsT0FBT0UsS0FBS0MsTUFBUTtJQUNqQyxPQUFRRCxJQUFJRSxNQUFNO1FBQ2hCLEtBQUs7WUFDSCxNQUFNQyxRQUFRSCxLQUFLQztZQUNuQixLQUFLO0lBQ1Q7QUFDRixHQUFDO0FBRUQsTUFBTUUsVUFBVSxPQUFPSCxLQUFLQyxNQUFRO0lBQ2xDLElBQUk7UUFDRixNQUFNLEVBQUVHLFNBQVEsRUFBRSxHQUFHSixJQUFJSyxLQUFLO1FBQzlCLE1BQU1DLE9BQU8sTUFBTVAsNERBQVksQ0FBQztZQUFDSztRQUFRO1FBQ3pDLElBQUksQ0FBQ0UsTUFBTSxPQUFPTCxJQUFJTyxNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDO1lBQUVDLEtBQUs7UUFBdUI7UUFFckVULElBQUlRLElBQUksQ0FDTkg7SUFFSixFQUFFLE9BQU9JLEtBQUs7UUFDWixPQUFPVCxJQUFJTyxNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDO1lBQUVDLEtBQUtBLElBQUlDLE9BQU87UUFBQztJQUNqRDtBQUNGIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdGVhY2hlci1ib29raW5nLy4vcGFnZXMvYXBpL3VzZXIvaW5kZXguanM/NTdjYiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY29ubmVjdERCIGZyb20gJy4uLy4uLy4uL3V0aWxzL2Nvbm5lY3REQidcclxuaW1wb3J0IFVzZXIgZnJvbSAnLi4vLi4vLi4vbW9kZWxzL3VzZXInXHJcblxyXG5jb25uZWN0REIoKVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgKHJlcSwgcmVzKSA9PiB7XHJcbiAgc3dpdGNoIChyZXEubWV0aG9kKSB7XHJcbiAgICBjYXNlICdHRVQnOlxyXG4gICAgICBhd2FpdCBnZXRVc2VyKHJlcSwgcmVzKVxyXG4gICAgICBicmVha1xyXG4gIH1cclxufVxyXG5cclxuY29uc3QgZ2V0VXNlciA9IGFzeW5jIChyZXEsIHJlcykgPT4ge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCB7IHVzZXJuYW1lIH0gPSByZXEucXVlcnlcclxuICAgIGNvbnN0IHVzZXIgPSBhd2FpdCBVc2VyLmZpbmRPbmUoe3VzZXJuYW1lfSlcclxuICAgIGlmICghdXNlcikgcmV0dXJuIHJlcy5zdGF0dXMoNDAwKS5qc29uKHsgZXJyOiAnVXNlciBkb2VzIG5vdCBleGlzdC4nIH0pXHJcblxyXG4gICAgcmVzLmpzb24oXHJcbiAgICAgIHVzZXJcclxuICAgIClcclxuICB9IGNhdGNoIChlcnIpIHsgXHJcbiAgICByZXR1cm4gcmVzLnN0YXR1cyg1MDApLmpzb24oeyBlcnI6IGVyci5tZXNzYWdlIH0pXHJcbiAgfVxyXG59Il0sIm5hbWVzIjpbImNvbm5lY3REQiIsIlVzZXIiLCJyZXEiLCJyZXMiLCJtZXRob2QiLCJnZXRVc2VyIiwidXNlcm5hbWUiLCJxdWVyeSIsInVzZXIiLCJmaW5kT25lIiwic3RhdHVzIiwianNvbiIsImVyciIsIm1lc3NhZ2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/user/index.js\n");

/***/ }),

/***/ "(api)/./utils/connectDB.js":
/*!****************************!*\
  !*** ./utils/connectDB.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst connectDB = ()=>{\n    if ((mongoose__WEBPACK_IMPORTED_MODULE_0___default().connections[0].readyState)) {\n        return;\n    }\n    mongoose__WEBPACK_IMPORTED_MODULE_0___default().connect(\"mongodb+srv://admin:3ffyMMnqMd9aNeFs@cluster0.knezrxl.mongodb.net/teacher-bookingDB?retryWrites=true&w=majority\", {\n        useNewUrlParser: true,\n        useUnifiedTopology: true\n    }, (err)=>{\n        if (err) throw err;\n    });\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (connectDB);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi91dGlscy9jb25uZWN0REIuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQStCO0FBRS9CLE1BQU1DLFlBQVksSUFBTTtJQUN0QixJQUFJRCwyRUFBa0MsRUFBRTtRQUN0QztJQUNGLENBQUM7SUFDREEsdURBQWdCLENBQ2RLLGlIQUEyQixFQUMzQjtRQUNFRyxpQkFBaUIsSUFBSTtRQUNyQkMsb0JBQW9CLElBQUk7SUFDMUIsR0FDQSxDQUFDQyxNQUFRO1FBQ1AsSUFBSUEsS0FBSyxNQUFNQSxJQUFHO0lBQ3BCO0FBRUo7QUFFQSxpRUFBZVQsU0FBU0EsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL3RlYWNoZXItYm9va2luZy8uL3V0aWxzL2Nvbm5lY3REQi5qcz9jNjE3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb25nb29zZSBmcm9tICdtb25nb29zZSdcclxuXHJcbmNvbnN0IGNvbm5lY3REQiA9ICgpID0+IHtcclxuICBpZiAobW9uZ29vc2UuY29ubmVjdGlvbnNbMF0ucmVhZHlTdGF0ZSkge1xyXG4gICAgcmV0dXJuXHJcbiAgfVxyXG4gIG1vbmdvb3NlLmNvbm5lY3QoXHJcbiAgICBwcm9jZXNzLmVudi5NT05HT0RCX0RFVl9VUkwsXHJcbiAgICB7XHJcbiAgICAgIHVzZU5ld1VybFBhcnNlcjogdHJ1ZSxcclxuICAgICAgdXNlVW5pZmllZFRvcG9sb2d5OiB0cnVlLFxyXG4gICAgfSxcclxuICAgIChlcnIpID0+IHtcclxuICAgICAgaWYgKGVycikgdGhyb3cgZXJyXHJcbiAgICB9XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0REJcclxuIl0sIm5hbWVzIjpbIm1vbmdvb3NlIiwiY29ubmVjdERCIiwiY29ubmVjdGlvbnMiLCJyZWFkeVN0YXRlIiwiY29ubmVjdCIsInByb2Nlc3MiLCJlbnYiLCJNT05HT0RCX0RFVl9VUkwiLCJ1c2VOZXdVcmxQYXJzZXIiLCJ1c2VVbmlmaWVkVG9wb2xvZ3kiLCJlcnIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./utils/connectDB.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/user/index.js"));
module.exports = __webpack_exports__;

})();