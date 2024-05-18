var OneTrustTCFStub = function(e) {
    "use strict";
    var t = function() {
            var r = this;
            this.LOCATOR_NAME = "__tcfapiLocator", this.win = window, this.init = function() {
                for (; r.win;) {
                    try {
                        if (r.win.frames[r.LOCATOR_NAME]) {
                            r.cmpFrame = r.win;
                            break
                        }
                    } catch (e) {}
                    if (r.win === window.top) break;
                    r.win = r.win.parent
                }
                r.cmpFrame || (r.addFrame(), r.win.__tcfapi = r.executeTcfApi, r.win.receiveOTMessage = r.receiveIabMessage, (r.win.attachEvent || r.win.addEventListener)("message", r.win.receiveOTMessage, !1))
            }, this.addFrame = function() {
                var e, t = r.win.document,
                    i = !!r.win.frames[r.LOCATOR_NAME];
                return i || (t.body ? ((e = t.createElement("iframe")).style.cssText = "display:none", e.name = r.LOCATOR_NAME, e.setAttribute("title", "TCF Locator"), t.body.appendChild(e)) : setTimeout(r.addFrame, 5)), !i
            }, this.receiveIabMessage = function(i) {
                var a, e, t, n = "string" == typeof i.data,
                    s = {};
                try {
                    s = n ? JSON.parse(i.data) : i.data
                } catch (e) {}
                s && s.__tcfapiCall && (s = s.__tcfapiCall, a = s.callId, e = s.command, t = s.parameter, s = s.version, r.executeTcfApi(e, t, function(e, t) {
                    e = {
                        __tcfapiReturn: {
                            returnValue: e,
                            success: t,
                            callId: a
                        }
                    };
                    i && i.source && i.source.postMessage && i.source.postMessage(n ? JSON.stringify(e) : e, "*")
                }, s))
            }, this.executeTcfApi = function() {
                for (var e, t, i, a, n = [], s = 0; s < arguments.length; s++) n[s] = arguments[s];
                if (!n.length) return r.win.__tcfapi.a || [];
                "setGdprApplies" === n[0] ? 3 < n.length && 2 === parseInt(n[1], 10) && "boolean" == typeof n[3] && (r.gdprApplies = n[3], "function" == typeof n[2]) && n[2]("set", !0) : (e = n[0], t = n[1], a = n[3], "function" == typeof(i = n[2]) && e && ("ping" === e ? r.getPingReq(i, r.gdprApplies) : r.addToQ(e, t, i, a)))
            }, this.addToQ = function(e, t, i, a) {
                var n = r.win.__tcfapi;
                n.a = n.a || [], n.a.push([e, t, i, a])
            }, this.getPingReq = function(e, t) {
                e({
                    gdprApplies: t = void 0 === t ? void 0 : t,
                    cmpLoaded: !1,
                    cmpStatus: "stub",
                    apiVersion: "2.0"
                })
            }, this.init()
        },
        i = new t;
    return e.TCF = t, e.tcfStub = i, e
}({});