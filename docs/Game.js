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
/******/ 	return __webpack_require__(__webpack_require__.s = 362);
/******/ })
/************************************************************************/
/******/ ({

/***/ 125:
/***/ (function(module, exports) {

module.exports = "./assets/images/dice-1.png";

/***/ }),

/***/ 126:
/***/ (function(module, exports) {

module.exports = "./assets/images/dice-2.png";

/***/ }),

/***/ 127:
/***/ (function(module, exports) {

module.exports = "./assets/images/dice-3.png";

/***/ }),

/***/ 128:
/***/ (function(module, exports) {

module.exports = "./assets/images/dice-4.png";

/***/ }),

/***/ 129:
/***/ (function(module, exports) {

module.exports = "./assets/images/dice-5.png";

/***/ }),

/***/ 130:
/***/ (function(module, exports) {

module.exports = "./assets/images/dice-6.png";

/***/ }),

/***/ 362:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(363);


/***/ }),

/***/ 363:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(364);

var scores, roundScore, activePlayer, gamePlaying; /*- The game has 2 players, playing in rounds
                                                   - In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
                                                   - BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
                                                   - The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
                                                   - The first player to reach 100 points on GLOBAL score wins the game*/

init();

document.querySelector('.btn-roll').addEventListener('click', function () {
    if (gamePlaying) {

        var dice = Math.floor(Math.random() * 6) + 1;

        var dice1Path = __webpack_require__(125);
        var dice2Path = __webpack_require__(126);
        var dice3Path = __webpack_require__(127);
        var dice4Path = __webpack_require__(128);
        var dice5Path = __webpack_require__(129);
        var dice6Path = __webpack_require__(130);

        var diceDOM = document.querySelector('.dice');
        diceDOM.style.display = 'block';
        /*  diceDOM.src = 'assets/images/dice-' + dice + '.png';*/
        /*  diceDOM.src = 'dice' + dice + 'Path'; */
        diceDOM.src = __webpack_require__(365)("./dice-" + dice + '.png');

        if (dice !== 1) {

            roundScore += dice;
            document.querySelector('#current-' + activePlayer).textContent = roundScore;
        } else {

            nextPlayer();
        }
    }
});

document.querySelector('.btn-hold').addEventListener('click', function () {
    if (gamePlaying) {

        scores[activePlayer] += roundScore;

        document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];

        if (scores[activePlayer] >= 100) {
            document.querySelector('#name-' + activePlayer).textContent = 'Winner!';
            document.querySelector('.dice').style.display = 'none';
            document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
            document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
            gamePlaying = false;
        } else {

            nextPlayer();
        }
    }
});

function nextPlayer() {

    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    roundScore = 0;

    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';

    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');

    document.querySelector('.dice').style.display = 'none';
}

document.querySelector('.btn-new').addEventListener('click', init);

function init() {
    scores = [0, 0];
    activePlayer = 0;
    roundScore = 0;
    gamePlaying = true;

    document.querySelector('.dice').style.display = 'none';

    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    document.getElementById('name-0').textContent = 'Player 1';
    document.getElementById('name-1').textContent = 'Player 2';
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');
}

/***/ }),

/***/ 364:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 365:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./dice-1.png": 125,
	"./dice-2.png": 126,
	"./dice-3.png": 127,
	"./dice-4.png": 128,
	"./dice-5.png": 129,
	"./dice-6.png": 130
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 365;

/***/ })

/******/ });