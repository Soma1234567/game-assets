System.register("chunks:///_virtual/dummy_text",["./Script1.ts"],(function(){return{setters:[null],execute:function(){}}}));

System.register("chunks:///_virtual/Script1.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(t){var r,c,n,e;return{setters:[function(t){r=t.inheritsLoose},function(t){c=t.cclegacy,n=t._decorator,e=t.Component}],execute:function(){var o;c._RF.push({},"b5d1cvSkWxEk6M46uYeqI70","Script1",void 0);var i=n.ccclass;n.property,t("Script1",i("Script1")(o=function(t){function c(){return t.apply(this,arguments)||this}r(c,t);var n=c.prototype;return n.start=function(){},n.update=function(t){},c}(e))||o);c._RF.pop()}}}));

(function(r) {
  r('virtual:///prerequisite-imports/dummy_text', 'chunks:///_virtual/dummy_text'); 
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