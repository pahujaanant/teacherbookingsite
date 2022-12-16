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
exports.id = "pages/api/teacher/updateTeacher";
exports.ids = ["pages/api/teacher/updateTeacher"];
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

/***/ "(api)/./pages/api/teacher/updateTeacher.js":
/*!********************************************!*\
  !*** ./pages/api/teacher/updateTeacher.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _utils_connectDB__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../utils/connectDB */ \"(api)/./utils/connectDB.js\");\n/* harmony import */ var _models_user__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../models/user */ \"(api)/./models/user.js\");\n// here we import the function to connect to the database\n// and then we also import the model of the user \n\n\n// here we connect to the database\n(0,_utils_connectDB__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n// here we export the function updateTeacher and we also export the method PATCH\n// because we want to PATCH the user's info that we already have in the database ( username and password )\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (async (req, res)=>{\n    switch(req.method){\n        case \"PATCH\":\n            await updateTeacher(req, res);\n            break;\n    }\n});\n// update the teacher in the database in the collection of users\nconst updateTeacher = async (req, res)=>{\n    try {\n        const { username , teacher  } = req.body;\n        await _models_user__WEBPACK_IMPORTED_MODULE_1__[\"default\"].findOneAndUpdate({\n            username\n        }, {\n            teacher\n        });\n        res.json({\n            msg: \"Teacher updated successfully\"\n        });\n    } catch (err) {\n        return res.status(500).json({\n            err: err.message\n        });\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvdGVhY2hlci91cGRhdGVUZWFjaGVyLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLHlEQUF5RDtBQUN6RCxpREFBaUQ7QUFDRDtBQUNUO0FBRXZDLGtDQUFrQztBQUNsQ0EsNERBQVNBO0FBRVQsZ0ZBQWdGO0FBQ2hGLDBHQUEwRztBQUUxRyxpRUFBZSxPQUFPRSxLQUFLQyxNQUFRO0lBQ2pDLE9BQVFELElBQUlFLE1BQU07UUFDaEIsS0FBSztZQUNILE1BQU1DLGNBQWNILEtBQUtDO1lBQ3pCLEtBQUs7SUFDVDtBQUNGLEdBQUM7QUFFRCxnRUFBZ0U7QUFDaEUsTUFBTUUsZ0JBQWdCLE9BQU9ILEtBQUtDLE1BQVE7SUFDeEMsSUFBSTtRQUNGLE1BQU0sRUFBRUcsU0FBUSxFQUFFQyxRQUFPLEVBQUUsR0FBR0wsSUFBSU0sSUFBSTtRQUV0QyxNQUFNUCxxRUFBcUIsQ0FBQztZQUFFSztRQUFTLEdBQUc7WUFBRUM7UUFBUTtRQUNwREosSUFBSU8sSUFBSSxDQUFDO1lBQ1BDLEtBQUs7UUFDUDtJQUNGLEVBQUUsT0FBT0MsS0FBSztRQUNaLE9BQU9ULElBQUlVLE1BQU0sQ0FBQyxLQUFLSCxJQUFJLENBQUM7WUFBRUUsS0FBS0EsSUFBSUUsT0FBTztRQUFDO0lBQ2pEO0FBQ0YiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90ZWFjaGVyLWJvb2tpbmcvLi9wYWdlcy9hcGkvdGVhY2hlci91cGRhdGVUZWFjaGVyLmpzPzZiNzEiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gaGVyZSB3ZSBpbXBvcnQgdGhlIGZ1bmN0aW9uIHRvIGNvbm5lY3QgdG8gdGhlIGRhdGFiYXNlXHJcbi8vIGFuZCB0aGVuIHdlIGFsc28gaW1wb3J0IHRoZSBtb2RlbCBvZiB0aGUgdXNlciBcclxuaW1wb3J0IGNvbm5lY3REQiBmcm9tICcuLi8uLi8uLi91dGlscy9jb25uZWN0REInXHJcbmltcG9ydCBVc2VyIGZyb20gJy4uLy4uLy4uL21vZGVscy91c2VyJ1xyXG5cclxuLy8gaGVyZSB3ZSBjb25uZWN0IHRvIHRoZSBkYXRhYmFzZVxyXG5jb25uZWN0REIoKVxyXG5cclxuLy8gaGVyZSB3ZSBleHBvcnQgdGhlIGZ1bmN0aW9uIHVwZGF0ZVRlYWNoZXIgYW5kIHdlIGFsc28gZXhwb3J0IHRoZSBtZXRob2QgUEFUQ0hcclxuLy8gYmVjYXVzZSB3ZSB3YW50IHRvIFBBVENIIHRoZSB1c2VyJ3MgaW5mbyB0aGF0IHdlIGFscmVhZHkgaGF2ZSBpbiB0aGUgZGF0YWJhc2UgKCB1c2VybmFtZSBhbmQgcGFzc3dvcmQgKVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgKHJlcSwgcmVzKSA9PiB7XHJcbiAgc3dpdGNoIChyZXEubWV0aG9kKSB7XHJcbiAgICBjYXNlICdQQVRDSCc6XHJcbiAgICAgIGF3YWl0IHVwZGF0ZVRlYWNoZXIocmVxLCByZXMpXHJcbiAgICAgIGJyZWFrXHJcbiAgfVxyXG59XHJcblxyXG4vLyB1cGRhdGUgdGhlIHRlYWNoZXIgaW4gdGhlIGRhdGFiYXNlIGluIHRoZSBjb2xsZWN0aW9uIG9mIHVzZXJzXHJcbmNvbnN0IHVwZGF0ZVRlYWNoZXIgPSBhc3luYyAocmVxLCByZXMpID0+IHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgeyB1c2VybmFtZSwgdGVhY2hlciB9ID0gcmVxLmJvZHlcclxuXHJcbiAgICBhd2FpdCBVc2VyLmZpbmRPbmVBbmRVcGRhdGUoeyB1c2VybmFtZSB9LCB7IHRlYWNoZXIgfSlcclxuICAgIHJlcy5qc29uKHtcclxuICAgICAgbXNnOiAnVGVhY2hlciB1cGRhdGVkIHN1Y2Nlc3NmdWxseSdcclxuICAgIH0pXHJcbiAgfSBjYXRjaCAoZXJyKSB7IFxyXG4gICAgcmV0dXJuIHJlcy5zdGF0dXMoNTAwKS5qc29uKHsgZXJyOiBlcnIubWVzc2FnZSB9KVxyXG4gIH1cclxufVxyXG5cclxuXHJcblxyXG5cclxuXHJcbiAgXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuIl0sIm5hbWVzIjpbImNvbm5lY3REQiIsIlVzZXIiLCJyZXEiLCJyZXMiLCJtZXRob2QiLCJ1cGRhdGVUZWFjaGVyIiwidXNlcm5hbWUiLCJ0ZWFjaGVyIiwiYm9keSIsImZpbmRPbmVBbmRVcGRhdGUiLCJqc29uIiwibXNnIiwiZXJyIiwic3RhdHVzIiwibWVzc2FnZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/teacher/updateTeacher.js\n");

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
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/teacher/updateTeacher.js"));
module.exports = __webpack_exports__;

})();