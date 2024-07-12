/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([["reactPlayerFacebook"],{

/***/ "(app-pages-browser)/./node_modules/react-player/lib/players/Facebook.js":
/*!***********************************************************!*\
  !*** ./node_modules/react-player/lib/players/Facebook.js ***!
  \***********************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval(__webpack_require__.ts("var __create = Object.create;\nvar __defProp = Object.defineProperty;\nvar __getOwnPropDesc = Object.getOwnPropertyDescriptor;\nvar __getOwnPropNames = Object.getOwnPropertyNames;\nvar __getProtoOf = Object.getPrototypeOf;\nvar __hasOwnProp = Object.prototype.hasOwnProperty;\nvar __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;\nvar __export = (target, all) => {\n  for (var name in all)\n    __defProp(target, name, { get: all[name], enumerable: true });\n};\nvar __copyProps = (to, from, except, desc) => {\n  if (from && typeof from === \"object\" || typeof from === \"function\") {\n    for (let key of __getOwnPropNames(from))\n      if (!__hasOwnProp.call(to, key) && key !== except)\n        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });\n  }\n  return to;\n};\nvar __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(\n  // If the importer is in node compatibility mode or this is not an ESM\n  // file that has been converted to a CommonJS file using a Babel-\n  // compatible transform (i.e. \"__esModule\" has not been set), then set\n  // \"default\" to the CommonJS \"module.exports\" for node compatibility.\n  isNodeMode || !mod || !mod.__esModule ? __defProp(target, \"default\", { value: mod, enumerable: true }) : target,\n  mod\n));\nvar __toCommonJS = (mod) => __copyProps(__defProp({}, \"__esModule\", { value: true }), mod);\nvar __publicField = (obj, key, value) => {\n  __defNormalProp(obj, typeof key !== \"symbol\" ? key + \"\" : key, value);\n  return value;\n};\nvar Facebook_exports = {};\n__export(Facebook_exports, {\n  default: () => Facebook\n});\nmodule.exports = __toCommonJS(Facebook_exports);\nvar import_react = __toESM(__webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\"));\nvar import_utils = __webpack_require__(/*! ../utils */ \"(app-pages-browser)/./node_modules/react-player/lib/utils.js\");\nvar import_patterns = __webpack_require__(/*! ../patterns */ \"(app-pages-browser)/./node_modules/react-player/lib/patterns.js\");\nconst SDK_URL = \"https://connect.facebook.net/en_US/sdk.js\";\nconst SDK_GLOBAL = \"FB\";\nconst SDK_GLOBAL_READY = \"fbAsyncInit\";\nconst PLAYER_ID_PREFIX = \"facebook-player-\";\nclass Facebook extends import_react.Component {\n  constructor() {\n    super(...arguments);\n    __publicField(this, \"callPlayer\", import_utils.callPlayer);\n    __publicField(this, \"playerID\", this.props.config.playerId || `${PLAYER_ID_PREFIX}${(0, import_utils.randomString)()}`);\n    __publicField(this, \"mute\", () => {\n      this.callPlayer(\"mute\");\n    });\n    __publicField(this, \"unmute\", () => {\n      this.callPlayer(\"unmute\");\n    });\n  }\n  componentDidMount() {\n    this.props.onMount && this.props.onMount(this);\n  }\n  load(url, isReady) {\n    if (isReady) {\n      (0, import_utils.getSDK)(SDK_URL, SDK_GLOBAL, SDK_GLOBAL_READY).then((FB) => FB.XFBML.parse());\n      return;\n    }\n    (0, import_utils.getSDK)(SDK_URL, SDK_GLOBAL, SDK_GLOBAL_READY).then((FB) => {\n      FB.init({\n        appId: this.props.config.appId,\n        xfbml: true,\n        version: this.props.config.version\n      });\n      FB.Event.subscribe(\"xfbml.render\", (msg) => {\n        this.props.onLoaded();\n      });\n      FB.Event.subscribe(\"xfbml.ready\", (msg) => {\n        if (msg.type === \"video\" && msg.id === this.playerID) {\n          this.player = msg.instance;\n          this.player.subscribe(\"startedPlaying\", this.props.onPlay);\n          this.player.subscribe(\"paused\", this.props.onPause);\n          this.player.subscribe(\"finishedPlaying\", this.props.onEnded);\n          this.player.subscribe(\"startedBuffering\", this.props.onBuffer);\n          this.player.subscribe(\"finishedBuffering\", this.props.onBufferEnd);\n          this.player.subscribe(\"error\", this.props.onError);\n          if (this.props.muted) {\n            this.callPlayer(\"mute\");\n          } else {\n            this.callPlayer(\"unmute\");\n          }\n          this.props.onReady();\n          document.getElementById(this.playerID).querySelector(\"iframe\").style.visibility = \"visible\";\n        }\n      });\n    });\n  }\n  play() {\n    this.callPlayer(\"play\");\n  }\n  pause() {\n    this.callPlayer(\"pause\");\n  }\n  stop() {\n  }\n  seekTo(seconds, keepPlaying = true) {\n    this.callPlayer(\"seek\", seconds);\n    if (!keepPlaying) {\n      this.pause();\n    }\n  }\n  setVolume(fraction) {\n    this.callPlayer(\"setVolume\", fraction);\n  }\n  getDuration() {\n    return this.callPlayer(\"getDuration\");\n  }\n  getCurrentTime() {\n    return this.callPlayer(\"getCurrentPosition\");\n  }\n  getSecondsLoaded() {\n    return null;\n  }\n  render() {\n    const { attributes } = this.props.config;\n    const style = {\n      width: \"100%\",\n      height: \"100%\"\n    };\n    return /* @__PURE__ */ import_react.default.createElement(\n      \"div\",\n      {\n        style,\n        id: this.playerID,\n        className: \"fb-video\",\n        \"data-href\": this.props.url,\n        \"data-autoplay\": this.props.playing ? \"true\" : \"false\",\n        \"data-allowfullscreen\": \"true\",\n        \"data-controls\": this.props.controls ? \"true\" : \"false\",\n        ...attributes\n      }\n    );\n  }\n}\n__publicField(Facebook, \"displayName\", \"Facebook\");\n__publicField(Facebook, \"canPlay\", import_patterns.canPlay.facebook);\n__publicField(Facebook, \"loopOnEnded\", true);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL25vZGVfbW9kdWxlcy9yZWFjdC1wbGF5ZXIvbGliL3BsYXllcnMvRmFjZWJvb2suanMiLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEVBQThFLDZEQUE2RDtBQUMzSTtBQUNBO0FBQ0EsOEJBQThCLGtDQUFrQztBQUNoRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCLDRGQUE0RjtBQUN6SDtBQUNBO0FBQ0E7QUFDQSxtR0FBbUc7QUFDbkc7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5RUFBeUUsOEJBQThCO0FBQ3ZHO0FBQ0E7QUFDQSxvREFBb0Qsa0JBQWtCLGFBQWE7QUFDbkY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQSwyQkFBMkIsbUJBQU8sQ0FBQyxtRkFBTztBQUMxQyxtQkFBbUIsbUJBQU8sQ0FBQyw4RUFBVTtBQUNyQyxzQkFBc0IsbUJBQU8sQ0FBQyxvRkFBYTtBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUVBQXFFLGlCQUFpQixFQUFFLGlDQUFpQztBQUN6SDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLGFBQWE7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JlYWN0LXBsYXllci9saWIvcGxheWVycy9GYWNlYm9vay5qcz9iNjg3Il0sInNvdXJjZXNDb250ZW50IjpbInZhciBfX2NyZWF0ZSA9IE9iamVjdC5jcmVhdGU7XG52YXIgX19kZWZQcm9wID0gT2JqZWN0LmRlZmluZVByb3BlcnR5O1xudmFyIF9fZ2V0T3duUHJvcERlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO1xudmFyIF9fZ2V0T3duUHJvcE5hbWVzID0gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXM7XG52YXIgX19nZXRQcm90b09mID0gT2JqZWN0LmdldFByb3RvdHlwZU9mO1xudmFyIF9faGFzT3duUHJvcCA9IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHk7XG52YXIgX19kZWZOb3JtYWxQcm9wID0gKG9iaiwga2V5LCB2YWx1ZSkgPT4ga2V5IGluIG9iaiA/IF9fZGVmUHJvcChvYmosIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUsIHdyaXRhYmxlOiB0cnVlLCB2YWx1ZSB9KSA6IG9ialtrZXldID0gdmFsdWU7XG52YXIgX19leHBvcnQgPSAodGFyZ2V0LCBhbGwpID0+IHtcbiAgZm9yICh2YXIgbmFtZSBpbiBhbGwpXG4gICAgX19kZWZQcm9wKHRhcmdldCwgbmFtZSwgeyBnZXQ6IGFsbFtuYW1lXSwgZW51bWVyYWJsZTogdHJ1ZSB9KTtcbn07XG52YXIgX19jb3B5UHJvcHMgPSAodG8sIGZyb20sIGV4Y2VwdCwgZGVzYykgPT4ge1xuICBpZiAoZnJvbSAmJiB0eXBlb2YgZnJvbSA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgZnJvbSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgZm9yIChsZXQga2V5IG9mIF9fZ2V0T3duUHJvcE5hbWVzKGZyb20pKVxuICAgICAgaWYgKCFfX2hhc093blByb3AuY2FsbCh0bywga2V5KSAmJiBrZXkgIT09IGV4Y2VwdClcbiAgICAgICAgX19kZWZQcm9wKHRvLCBrZXksIHsgZ2V0OiAoKSA9PiBmcm9tW2tleV0sIGVudW1lcmFibGU6ICEoZGVzYyA9IF9fZ2V0T3duUHJvcERlc2MoZnJvbSwga2V5KSkgfHwgZGVzYy5lbnVtZXJhYmxlIH0pO1xuICB9XG4gIHJldHVybiB0bztcbn07XG52YXIgX190b0VTTSA9IChtb2QsIGlzTm9kZU1vZGUsIHRhcmdldCkgPT4gKHRhcmdldCA9IG1vZCAhPSBudWxsID8gX19jcmVhdGUoX19nZXRQcm90b09mKG1vZCkpIDoge30sIF9fY29weVByb3BzKFxuICAvLyBJZiB0aGUgaW1wb3J0ZXIgaXMgaW4gbm9kZSBjb21wYXRpYmlsaXR5IG1vZGUgb3IgdGhpcyBpcyBub3QgYW4gRVNNXG4gIC8vIGZpbGUgdGhhdCBoYXMgYmVlbiBjb252ZXJ0ZWQgdG8gYSBDb21tb25KUyBmaWxlIHVzaW5nIGEgQmFiZWwtXG4gIC8vIGNvbXBhdGlibGUgdHJhbnNmb3JtIChpLmUuIFwiX19lc01vZHVsZVwiIGhhcyBub3QgYmVlbiBzZXQpLCB0aGVuIHNldFxuICAvLyBcImRlZmF1bHRcIiB0byB0aGUgQ29tbW9uSlMgXCJtb2R1bGUuZXhwb3J0c1wiIGZvciBub2RlIGNvbXBhdGliaWxpdHkuXG4gIGlzTm9kZU1vZGUgfHwgIW1vZCB8fCAhbW9kLl9fZXNNb2R1bGUgPyBfX2RlZlByb3AodGFyZ2V0LCBcImRlZmF1bHRcIiwgeyB2YWx1ZTogbW9kLCBlbnVtZXJhYmxlOiB0cnVlIH0pIDogdGFyZ2V0LFxuICBtb2RcbikpO1xudmFyIF9fdG9Db21tb25KUyA9IChtb2QpID0+IF9fY29weVByb3BzKF9fZGVmUHJvcCh7fSwgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSksIG1vZCk7XG52YXIgX19wdWJsaWNGaWVsZCA9IChvYmosIGtleSwgdmFsdWUpID0+IHtcbiAgX19kZWZOb3JtYWxQcm9wKG9iaiwgdHlwZW9mIGtleSAhPT0gXCJzeW1ib2xcIiA/IGtleSArIFwiXCIgOiBrZXksIHZhbHVlKTtcbiAgcmV0dXJuIHZhbHVlO1xufTtcbnZhciBGYWNlYm9va19leHBvcnRzID0ge307XG5fX2V4cG9ydChGYWNlYm9va19leHBvcnRzLCB7XG4gIGRlZmF1bHQ6ICgpID0+IEZhY2Vib29rXG59KTtcbm1vZHVsZS5leHBvcnRzID0gX190b0NvbW1vbkpTKEZhY2Vib29rX2V4cG9ydHMpO1xudmFyIGltcG9ydF9yZWFjdCA9IF9fdG9FU00ocmVxdWlyZShcInJlYWN0XCIpKTtcbnZhciBpbXBvcnRfdXRpbHMgPSByZXF1aXJlKFwiLi4vdXRpbHNcIik7XG52YXIgaW1wb3J0X3BhdHRlcm5zID0gcmVxdWlyZShcIi4uL3BhdHRlcm5zXCIpO1xuY29uc3QgU0RLX1VSTCA9IFwiaHR0cHM6Ly9jb25uZWN0LmZhY2Vib29rLm5ldC9lbl9VUy9zZGsuanNcIjtcbmNvbnN0IFNES19HTE9CQUwgPSBcIkZCXCI7XG5jb25zdCBTREtfR0xPQkFMX1JFQURZID0gXCJmYkFzeW5jSW5pdFwiO1xuY29uc3QgUExBWUVSX0lEX1BSRUZJWCA9IFwiZmFjZWJvb2stcGxheWVyLVwiO1xuY2xhc3MgRmFjZWJvb2sgZXh0ZW5kcyBpbXBvcnRfcmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoLi4uYXJndW1lbnRzKTtcbiAgICBfX3B1YmxpY0ZpZWxkKHRoaXMsIFwiY2FsbFBsYXllclwiLCBpbXBvcnRfdXRpbHMuY2FsbFBsYXllcik7XG4gICAgX19wdWJsaWNGaWVsZCh0aGlzLCBcInBsYXllcklEXCIsIHRoaXMucHJvcHMuY29uZmlnLnBsYXllcklkIHx8IGAke1BMQVlFUl9JRF9QUkVGSVh9JHsoMCwgaW1wb3J0X3V0aWxzLnJhbmRvbVN0cmluZykoKX1gKTtcbiAgICBfX3B1YmxpY0ZpZWxkKHRoaXMsIFwibXV0ZVwiLCAoKSA9PiB7XG4gICAgICB0aGlzLmNhbGxQbGF5ZXIoXCJtdXRlXCIpO1xuICAgIH0pO1xuICAgIF9fcHVibGljRmllbGQodGhpcywgXCJ1bm11dGVcIiwgKCkgPT4ge1xuICAgICAgdGhpcy5jYWxsUGxheWVyKFwidW5tdXRlXCIpO1xuICAgIH0pO1xuICB9XG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIHRoaXMucHJvcHMub25Nb3VudCAmJiB0aGlzLnByb3BzLm9uTW91bnQodGhpcyk7XG4gIH1cbiAgbG9hZCh1cmwsIGlzUmVhZHkpIHtcbiAgICBpZiAoaXNSZWFkeSkge1xuICAgICAgKDAsIGltcG9ydF91dGlscy5nZXRTREspKFNES19VUkwsIFNES19HTE9CQUwsIFNES19HTE9CQUxfUkVBRFkpLnRoZW4oKEZCKSA9PiBGQi5YRkJNTC5wYXJzZSgpKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgKDAsIGltcG9ydF91dGlscy5nZXRTREspKFNES19VUkwsIFNES19HTE9CQUwsIFNES19HTE9CQUxfUkVBRFkpLnRoZW4oKEZCKSA9PiB7XG4gICAgICBGQi5pbml0KHtcbiAgICAgICAgYXBwSWQ6IHRoaXMucHJvcHMuY29uZmlnLmFwcElkLFxuICAgICAgICB4ZmJtbDogdHJ1ZSxcbiAgICAgICAgdmVyc2lvbjogdGhpcy5wcm9wcy5jb25maWcudmVyc2lvblxuICAgICAgfSk7XG4gICAgICBGQi5FdmVudC5zdWJzY3JpYmUoXCJ4ZmJtbC5yZW5kZXJcIiwgKG1zZykgPT4ge1xuICAgICAgICB0aGlzLnByb3BzLm9uTG9hZGVkKCk7XG4gICAgICB9KTtcbiAgICAgIEZCLkV2ZW50LnN1YnNjcmliZShcInhmYm1sLnJlYWR5XCIsIChtc2cpID0+IHtcbiAgICAgICAgaWYgKG1zZy50eXBlID09PSBcInZpZGVvXCIgJiYgbXNnLmlkID09PSB0aGlzLnBsYXllcklEKSB7XG4gICAgICAgICAgdGhpcy5wbGF5ZXIgPSBtc2cuaW5zdGFuY2U7XG4gICAgICAgICAgdGhpcy5wbGF5ZXIuc3Vic2NyaWJlKFwic3RhcnRlZFBsYXlpbmdcIiwgdGhpcy5wcm9wcy5vblBsYXkpO1xuICAgICAgICAgIHRoaXMucGxheWVyLnN1YnNjcmliZShcInBhdXNlZFwiLCB0aGlzLnByb3BzLm9uUGF1c2UpO1xuICAgICAgICAgIHRoaXMucGxheWVyLnN1YnNjcmliZShcImZpbmlzaGVkUGxheWluZ1wiLCB0aGlzLnByb3BzLm9uRW5kZWQpO1xuICAgICAgICAgIHRoaXMucGxheWVyLnN1YnNjcmliZShcInN0YXJ0ZWRCdWZmZXJpbmdcIiwgdGhpcy5wcm9wcy5vbkJ1ZmZlcik7XG4gICAgICAgICAgdGhpcy5wbGF5ZXIuc3Vic2NyaWJlKFwiZmluaXNoZWRCdWZmZXJpbmdcIiwgdGhpcy5wcm9wcy5vbkJ1ZmZlckVuZCk7XG4gICAgICAgICAgdGhpcy5wbGF5ZXIuc3Vic2NyaWJlKFwiZXJyb3JcIiwgdGhpcy5wcm9wcy5vbkVycm9yKTtcbiAgICAgICAgICBpZiAodGhpcy5wcm9wcy5tdXRlZCkge1xuICAgICAgICAgICAgdGhpcy5jYWxsUGxheWVyKFwibXV0ZVwiKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5jYWxsUGxheWVyKFwidW5tdXRlXCIpO1xuICAgICAgICAgIH1cbiAgICAgICAgICB0aGlzLnByb3BzLm9uUmVhZHkoKTtcbiAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0aGlzLnBsYXllcklEKS5xdWVyeVNlbGVjdG9yKFwiaWZyYW1lXCIpLnN0eWxlLnZpc2liaWxpdHkgPSBcInZpc2libGVcIjtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cbiAgcGxheSgpIHtcbiAgICB0aGlzLmNhbGxQbGF5ZXIoXCJwbGF5XCIpO1xuICB9XG4gIHBhdXNlKCkge1xuICAgIHRoaXMuY2FsbFBsYXllcihcInBhdXNlXCIpO1xuICB9XG4gIHN0b3AoKSB7XG4gIH1cbiAgc2Vla1RvKHNlY29uZHMsIGtlZXBQbGF5aW5nID0gdHJ1ZSkge1xuICAgIHRoaXMuY2FsbFBsYXllcihcInNlZWtcIiwgc2Vjb25kcyk7XG4gICAgaWYgKCFrZWVwUGxheWluZykge1xuICAgICAgdGhpcy5wYXVzZSgpO1xuICAgIH1cbiAgfVxuICBzZXRWb2x1bWUoZnJhY3Rpb24pIHtcbiAgICB0aGlzLmNhbGxQbGF5ZXIoXCJzZXRWb2x1bWVcIiwgZnJhY3Rpb24pO1xuICB9XG4gIGdldER1cmF0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLmNhbGxQbGF5ZXIoXCJnZXREdXJhdGlvblwiKTtcbiAgfVxuICBnZXRDdXJyZW50VGltZSgpIHtcbiAgICByZXR1cm4gdGhpcy5jYWxsUGxheWVyKFwiZ2V0Q3VycmVudFBvc2l0aW9uXCIpO1xuICB9XG4gIGdldFNlY29uZHNMb2FkZWQoKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgYXR0cmlidXRlcyB9ID0gdGhpcy5wcm9wcy5jb25maWc7XG4gICAgY29uc3Qgc3R5bGUgPSB7XG4gICAgICB3aWR0aDogXCIxMDAlXCIsXG4gICAgICBoZWlnaHQ6IFwiMTAwJVwiXG4gICAgfTtcbiAgICByZXR1cm4gLyogQF9fUFVSRV9fICovIGltcG9ydF9yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICBcImRpdlwiLFxuICAgICAge1xuICAgICAgICBzdHlsZSxcbiAgICAgICAgaWQ6IHRoaXMucGxheWVySUQsXG4gICAgICAgIGNsYXNzTmFtZTogXCJmYi12aWRlb1wiLFxuICAgICAgICBcImRhdGEtaHJlZlwiOiB0aGlzLnByb3BzLnVybCxcbiAgICAgICAgXCJkYXRhLWF1dG9wbGF5XCI6IHRoaXMucHJvcHMucGxheWluZyA/IFwidHJ1ZVwiIDogXCJmYWxzZVwiLFxuICAgICAgICBcImRhdGEtYWxsb3dmdWxsc2NyZWVuXCI6IFwidHJ1ZVwiLFxuICAgICAgICBcImRhdGEtY29udHJvbHNcIjogdGhpcy5wcm9wcy5jb250cm9scyA/IFwidHJ1ZVwiIDogXCJmYWxzZVwiLFxuICAgICAgICAuLi5hdHRyaWJ1dGVzXG4gICAgICB9XG4gICAgKTtcbiAgfVxufVxuX19wdWJsaWNGaWVsZChGYWNlYm9vaywgXCJkaXNwbGF5TmFtZVwiLCBcIkZhY2Vib29rXCIpO1xuX19wdWJsaWNGaWVsZChGYWNlYm9vaywgXCJjYW5QbGF5XCIsIGltcG9ydF9wYXR0ZXJucy5jYW5QbGF5LmZhY2Vib29rKTtcbl9fcHVibGljRmllbGQoRmFjZWJvb2ssIFwibG9vcE9uRW5kZWRcIiwgdHJ1ZSk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./node_modules/react-player/lib/players/Facebook.js\n"));

/***/ })

}]);