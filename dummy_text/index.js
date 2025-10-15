System.register("chunks:///_virtual/dummy_text",["./Script1.ts","./Script2.ts"],(function(){return{setters:[null,null],execute:function(){}}}));

System.register("chunks:///_virtual/Script1.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(t){var r,n,c,o;return{setters:[function(t){r=t.inheritsLoose},function(t){n=t.cclegacy,c=t._decorator,o=t.Component}],execute:function(){var e;n._RF.push({},"68b54MtkvpLEZWxMzdm7ovK","Script1",void 0);var i=c.ccclass;c.property,t("Script1",i("Script1")(e=function(t){function n(){return t.apply(this,arguments)||this}r(n,t);var c=n.prototype;return c.start=function(){},c.update=function(t){},n}(o))||e);n._RF.pop()}}}));

System.register("chunks:///_virtual/Script2.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(t){var r,n,c,e;return{setters:[function(t){r=t.inheritsLoose},function(t){n=t.cclegacy,c=t._decorator,e=t.Component}],execute:function(){var o;n._RF.push({},"9a4c5P/nRFMX6WZ6fbmlIal","Script2",void 0);var i=c.ccclass;c.property,t("Script2",i("Script2")(o=function(t){function n(){return t.apply(this,arguments)||this}r(n,t);var c=n.prototype;return c.start=function(){},c.update=function(t){},n}(e))||o);n._RF.pop()}}}));

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