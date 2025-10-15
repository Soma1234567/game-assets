System.register("chunks:///_virtual/dummy_project",["./loader.ts"],(function(){return{setters:[null],execute:function(){}}}));

System.register("chunks:///_virtual/loader.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(o){var t,e,n,r;return{setters:[function(o){t=o.inheritsLoose},function(o){e=o.cclegacy,n=o._decorator,r=o.Component}],execute:function(){var c;e._RF.push({},"595d5CA245D7ZoqAzzkoSDd","loader",void 0);var a=n.ccclass;n.property,o("loader",a("loader")(c=function(o){function e(){return o.apply(this,arguments)||this}t(e,o);var n=e.prototype;return n.onLoad=function(){console.log("loader onLoad")},n.start=function(){console.log("loader start")},n.update=function(o){},e}(r))||c);e._RF.pop()}}}));

(function(r) {
  r('virtual:///prerequisite-imports/dummy_project', 'chunks:///_virtual/dummy_project'); 
})(function(mid, cid) {
    System.register(mid, [cid], function (_export, _context) {
    return {
        setters: [function(_m) {
            var _exportObj = {};

            for (var _key in _m) {
              if (_key !== "default" && _key !== "__esModule") _exportObj[_key] = _m[_key];
            }
      
            _export(_exportObj);
        }],
        execute: function () { }
    };
    });
});