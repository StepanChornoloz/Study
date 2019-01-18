/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 348);
/******/ })
/************************************************************************/
/******/ ({

/***/ 348:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(349);


/***/ }),

/***/ 349:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _taskList = __webpack_require__(350);

__webpack_require__(352);

new _taskList.TaskList(document.querySelector('#taskList'));

/***/ }),

/***/ 350:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TaskList = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _httpService = __webpack_require__(351);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var BTN_DEL_CLASS_NAME = 'btn_del';
var CHACKBOX_CLASS_NAME = 'list__checkbox';
var TITLE_ATTR = 'author';
var LIST_ITEM_TEMPLATE = '\n  <input type="checkbox" {{isChecked}} class="' + CHACKBOX_CLASS_NAME + '"/>\n  <span data-name="' + (TITLE_ATTR + TEXT) + '">{{author}}</span>\n  <button type="button" class="' + BTN_DEL_CLASS_NAME + '">DELETE</button>';
var URL = ' https://evening-dawn-11092.herokuapp.com/comments ';
var TASK_ID_PREFIX = 'taskID';
var TEXT = 'textarea';

var TaskList = exports.TaskList = function () {
  function TaskList(rootElement) {
    _classCallCheck(this, TaskList);

    this.rootElement = rootElement;
    this.httpService = new _httpService.HTTPService();
    this.render();
    this.getList();
  }

  _createClass(TaskList, [{
    key: 'getList',
    value: function getList() {
      var _this = this;

      this.httpService.get(URL, function (response) {
        return _this.renderList(response);
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      this.form = document.createElement('form');
      this.input = document.createElement('input');
      this.textarea = document.createElement('textarea');
      this.submitBtn = document.createElement('button');
      this.submitBtn.textContent = 'Add';

      this.form.classList.add('taskList__form');
      this.input.classList.add('taskList__input');
      this.textarea.classList.add('taskList__textarea');
      this.submitBtn.classList.add('taskList__Btn');

      this.form.appendChild(this.input);
      this.form.appendChild(this.textarea);
      this.form.appendChild(this.submitBtn);
      this.form.addEventListener('submit', function (e) {
        return _this2.onSubmit(e);
      });

      this.rootElement.appendChild(this.form);
    }
  }, {
    key: 'onSubmit',
    value: function onSubmit(e) {
      var _this3 = this;

      e.preventDefault();
      var author = this.input.value;
      var coment = this.textarea.value;
      this.input.value = '';
      this.textarea.value = '';

      this.httpService.post(URL, { author: author, coment: coment }, function (task) {
        _this3.list.appendChild(_this3.renderOne(task));
      });
    }
  }, {
    key: 'updateItem',
    value: function updateItem(taskId) {
      var _this4 = this;

      var replacedElement = this.list.querySelector('#' + (TASK_ID_PREFIX + taskId));
      var id = taskId;
      var author = replacedElement.querySelector('[data-name*=' + (TITLE_ATTR + TEXT) + ']').textContent;
      var completed = replacedElement.querySelector('.' + CHACKBOX_CLASS_NAME).getAttribute('checked') ? false : true;

      this.httpService.put(URL + '/' + taskId, { id: id, author: author, completed: completed }, function (task) {
        var updateTask = _this4.renderOne(task);

        _this4.list.replaceChild(updateTask, replacedElement);
      });
    }
  }, {
    key: 'deleteItem',
    value: function deleteItem(taskId) {
      var _this5 = this;

      this.httpService.delete(URL + '/' + taskId, function () {
        var elementForRemove = _this5.list.querySelector('#' + (TASK_ID_PREFIX + taskId));
        _this5.list.removeChild(elementForRemove);
      });
    }
  }, {
    key: 'renderOne',
    value: function renderOne(task) {
      var li = document.createElement('li');
      li.id = TASK_ID_PREFIX + task.id;
      li.innerHTML = LIST_ITEM_TEMPLATE.replace('{{author}}', task.author).replace('{{coment}}', task.coment).replace('{{isChecked}}', task.completed ? 'checked' : '');

      return li;
    }
  }, {
    key: 'renderList',
    value: function renderList(tasks) {
      var _this6 = this;

      this.list = document.createElement('ul');
      var fragment = document.createDocumentFragment();
      tasks.forEach(function (task) {
        fragment.appendChild(_this6.renderOne(task));
      });

      this.list.appendChild(fragment);

      this.list.addEventListener('click', function (e) {
        if (e.target.classList.contains(BTN_DEL_CLASS_NAME)) {
          e.stopPropagation();
          var id = e.target.closest('li').getAttribute('id').replace(TASK_ID_PREFIX, '');
          _this6.deleteItem(id);
        }
        if (e.target.classList.contains(CHACKBOX_CLASS_NAME)) {
          var _id = e.target.closest('li').getAttribute('id').replace(TASK_ID_PREFIX, '');
          _this6.updateItem(_id);
        }
      });
      this.rootElement.appendChild(this.list);
    }
  }]);

  return TaskList;
}();

/***/ }),

/***/ 351:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var HTTPService = exports.HTTPService = function () {
  function HTTPService() {
    _classCallCheck(this, HTTPService);
  }

  _createClass(HTTPService, [{
    key: 'get',
    value: function get(url, successCallback, errorCallback) {
      var xhr = new XMLHttpRequest();
      xhr.open('GET', url);
      xhr.send();
      xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
          if (xhr.status === 200) {
            var parsedData = JSON.parse(xhr.response);
            successCallback(parsedData);
          } else {
            errorCallback(xhr);
          }
        }
      };
    }
  }, {
    key: 'post',
    value: function post(url, data, successCallback, errorCallback) {
      var xhr = new XMLHttpRequest();
      xhr.open('POST', url);
      xhr.setRequestHeader('content-type', 'application/json');
      xhr.send(typeof data !== 'string' ? JSON.stringify(data) : data);

      xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
          if (xhr.status === 200) {
            var parsedData = JSON.parse(xhr.response);
            successCallback(parsedData);
          } else {
            errorCallback(xhr);
          }
        }
      };
    }
  }, {
    key: 'delete',
    value: function _delete(url, successCallback, errorCallback) {
      var xhr = new XMLHttpRequest();
      xhr.open('DELETE', url);

      xhr.send();

      xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
          if (xhr.status === 200) {
            var parsedData = JSON.parse(xhr.response);
            successCallback(parsedData);
          } else {
            errorCallback(xhr);
          }
        }
      };
    }
  }, {
    key: 'put',
    value: function put(url, data, successCallback, errorCallback) {
      var xhr = new XMLHttpRequest();
      xhr.open('PUT', url);
      xhr.setRequestHeader('content-type', 'application/json');
      xhr.send(JSON.stringify(data));

      xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
          if (xhr.status === 200) {
            var parsedData = JSON.parse(xhr.response);
            successCallback(parsedData);
          } else {
            errorCallback(xhr);
          }
        }
      };
    }
  }]);

  return HTTPService;
}();

/***/ }),

/***/ 352:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })

/******/ });