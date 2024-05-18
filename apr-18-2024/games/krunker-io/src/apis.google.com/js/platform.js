(function() {
    var m, aa = function(a) {
            var b = 0;
            return function() {
                return b < a.length ? {
                    done: !1,
                    value: a[b++]
                } : {
                    done: !0
                }
            }
        },
        ba = "function" == typeof Object.defineProperties ? Object.defineProperty : function(a, b, c) {
            if (a == Array.prototype || a == Object.prototype) return a;
            a[b] = c.value;
            return a
        },
        ca = function(a) {
            a = ["object" == typeof globalThis && globalThis, a, "object" == typeof window && window, "object" == typeof self && self, "object" == typeof global && global];
            for (var b = 0; b < a.length; ++b) {
                var c = a[b];
                if (c && c.Math == Math) return c
            }
            throw Error("Cannot find global object");
        },
        da = ca(this),
        r = function(a, b) {
            if (b) a: {
                var c = da;a = a.split(".");
                for (var d = 0; d < a.length - 1; d++) {
                    var e = a[d];
                    if (!(e in c)) break a;
                    c = c[e]
                }
                a = a[a.length - 1];d = c[a];b = b(d);b != d && null != b && ba(c, a, {
                    configurable: !0,
                    writable: !0,
                    value: b
                })
            }
        };
    r("Symbol", function(a) {
        if (a) return a;
        var b = function(f, g) {
            this.ba = f;
            ba(this, "description", {
                configurable: !0,
                writable: !0,
                value: g
            })
        };
        b.prototype.toString = function() {
            return this.ba
        };
        var c = "jscomp_symbol_" + (1E9 * Math.random() >>> 0) + "_",
            d = 0,
            e = function(f) {
                if (this instanceof e) throw new TypeError("Symbol is not a constructor");
                return new b(c + (f || "") + "_" + d++, f)
            };
        return e
    });
    r("Symbol.iterator", function(a) {
        if (a) return a;
        a = Symbol("Symbol.iterator");
        for (var b = "Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "), c = 0; c < b.length; c++) {
            var d = da[b[c]];
            "function" === typeof d && "function" != typeof d.prototype[a] && ba(d.prototype, a, {
                configurable: !0,
                writable: !0,
                value: function() {
                    return ea(aa(this))
                }
            })
        }
        return a
    });
    var ea = function(a) {
            a = {
                next: a
            };
            a[Symbol.iterator] = function() {
                return this
            };
            return a
        },
        fa = function(a) {
            return a.raw = a
        },
        t = function(a, b) {
            a.raw = b;
            return a
        },
        ha = "function" == typeof Object.create ? Object.create : function(a) {
            var b = function() {};
            b.prototype = a;
            return new b
        },
        ia;
    if ("function" == typeof Object.setPrototypeOf) ia = Object.setPrototypeOf;
    else {
        var ja;
        a: {
            var ka = {
                    a: !0
                },
                na = {};
            try {
                na.__proto__ = ka;
                ja = na.a;
                break a
            } catch (a) {}
            ja = !1
        }
        ia = ja ? function(a, b) {
            a.__proto__ = b;
            if (a.__proto__ !== b) throw new TypeError(a + " is not extensible");
            return a
        } : null
    }
    var oa = ia,
        pa = function(a, b, c) {
            if (null == a) throw new TypeError("The 'this' value for String.prototype." + c + " must not be null or undefined");
            if (b instanceof RegExp) throw new TypeError("First argument to String.prototype." + c + " must not be a regular expression");
            return a + ""
        };
    r("String.prototype.endsWith", function(a) {
        return a ? a : function(b, c) {
            var d = pa(this, b, "endsWith");
            b += "";
            void 0 === c && (c = d.length);
            c = Math.max(0, Math.min(c | 0, d.length));
            for (var e = b.length; 0 < e && 0 < c;)
                if (d[--c] != b[--e]) return !1;
            return 0 >= e
        }
    });
    var qa = function(a, b) {
        a instanceof String && (a += "");
        var c = 0,
            d = !1,
            e = {
                next: function() {
                    if (!d && c < a.length) {
                        var f = c++;
                        return {
                            value: b(f, a[f]),
                            done: !1
                        }
                    }
                    d = !0;
                    return {
                        done: !0,
                        value: void 0
                    }
                }
            };
        e[Symbol.iterator] = function() {
            return e
        };
        return e
    };
    r("Array.prototype.keys", function(a) {
        return a ? a : function() {
            return qa(this, function(b) {
                return b
            })
        }
    });
    r("Object.is", function(a) {
        return a ? a : function(b, c) {
            return b === c ? 0 !== b || 1 / b === 1 / c : b !== b && c !== c
        }
    });
    r("Array.prototype.includes", function(a) {
        return a ? a : function(b, c) {
            var d = this;
            d instanceof String && (d = String(d));
            var e = d.length;
            c = c || 0;
            for (0 > c && (c = Math.max(c + e, 0)); c < e; c++) {
                var f = d[c];
                if (f === b || Object.is(f, b)) return !0
            }
            return !1
        }
    });
    r("String.prototype.includes", function(a) {
        return a ? a : function(b, c) {
            return -1 !== pa(this, b, "includes").indexOf(b, c || 0)
        }
    });
    window.gapi = window.gapi || {};
    window.gapi.ma = (new Date).getTime();
    /*

     Copyright The Closure Library Authors.
     SPDX-License-Identifier: Apache-2.0
    */
    var u = this || self,
        ra = function(a) {
            var b = typeof a;
            return "object" != b ? b : a ? Array.isArray(a) ? "array" : b : "null"
        },
        sa = function(a) {
            var b = ra(a);
            return "array" == b || "object" == b && "number" == typeof a.length
        },
        ta = function(a) {
            var b = typeof a;
            return "object" == b && null != a || "function" == b
        },
        ua = "closure_uid_" + (1E9 * Math.random() >>> 0),
        va = 0,
        wa = function(a, b, c) {
            return a.call.apply(a.bind, arguments)
        },
        xa = function(a, b, c) {
            if (!a) throw Error();
            if (2 < arguments.length) {
                var d = Array.prototype.slice.call(arguments, 2);
                return function() {
                    var e = Array.prototype.slice.call(arguments);
                    Array.prototype.unshift.apply(e, d);
                    return a.apply(b, e)
                }
            }
            return function() {
                return a.apply(b, arguments)
            }
        },
        ya = function(a, b, c) {
            ya = Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? wa : xa;
            return ya.apply(null, arguments)
        },
        za = function(a, b) {
            function c() {}
            c.prototype = b.prototype;
            a.la = b.prototype;
            a.prototype = new c;
            a.prototype.constructor = a;
            a.B = function(d, e, f) {
                for (var g = Array(arguments.length - 2), k = 2; k < arguments.length; k++) g[k - 2] = arguments[k];
                return b.prototype[e].apply(d,
                    g)
            }
        },
        Aa = function(a) {
            return a
        },
        Ba = function(a) {
            var b = null,
                c = u.trustedTypes;
            if (!c || !c.createPolicy) return b;
            try {
                b = c.createPolicy(a, {
                    createHTML: Aa,
                    createScript: Aa,
                    createScriptURL: Aa
                })
            } catch (d) {
                u.console && u.console.error(d.message)
            }
            return b
        };

    function Ca(a, b) {
        if (Error.captureStackTrace) Error.captureStackTrace(this, Ca);
        else {
            var c = Error().stack;
            c && (this.stack = c)
        }
        a && (this.message = String(a));
        void 0 !== b && (this.cause = b)
    }
    za(Ca, Error);
    Ca.prototype.name = "CustomError";
    var Da;

    function Ea(a, b) {
        a = a.split("%s");
        for (var c = "", d = a.length - 1, e = 0; e < d; e++) c += a[e] + (e < b.length ? b[e] : "%s");
        Ca.call(this, c + a[d])
    }
    za(Ea, Ca);
    Ea.prototype.name = "AssertionError";
    var Fa = function(a, b, c) {
            if (!a) {
                var d = "Assertion failed";
                if (b) {
                    d += ": " + b;
                    var e = Array.prototype.slice.call(arguments, 2)
                }
                throw new Ea("" + d, e || []);
            }
        },
        Ha = function(a, b) {
            throw new Ea("Failure" + (a ? ": " + a : ""), Array.prototype.slice.call(arguments, 1));
        };
    var Ia = Array.prototype.forEach ? function(a, b) {
        Fa(null != a.length);
        Array.prototype.forEach.call(a, b, void 0)
    } : function(a, b) {
        for (var c = a.length, d = "string" === typeof a ? a.split("") : a, e = 0; e < c; e++) e in d && b.call(void 0, d[e], e, a)
    };

    function Ja(a) {
        var b = a.length;
        if (0 < b) {
            for (var c = Array(b), d = 0; d < b; d++) c[d] = a[d];
            return c
        }
        return []
    };

    function Ka(a, b) {
        for (var c in a) b.call(void 0, a[c], c, a)
    };
    var La;
    var y = function(a, b) {
        if (b !== w) throw Error("SafeUrl is not meant to be built directly");
        this.W = a
    };
    y.prototype.toString = function() {
        return this.W.toString()
    };
    var w = {};
    new y("about:invalid#zClosurez", w);
    new y("about:blank", w);
    var Ma = {},
        Na = function() {
            if (Ma !== Ma) throw Error("SafeStyle is not meant to be built directly");
            this.ha = ""
        };
    Na.prototype.toString = function() {
        return this.ha.toString()
    };
    new Na;
    var Oa = {},
        Pa = function() {
            if (Oa !== Oa) throw Error("SafeStyleSheet is not meant to be built directly");
            this.ga = ""
        };
    Pa.prototype.toString = function() {
        return this.ga.toString()
    };
    new Pa;
    var Qa = {},
        Ra = function(a, b) {
            if (b !== Qa) throw Error("SafeHtml is not meant to be built directly");
            this.V = a
        };
    Ra.prototype.toString = function() {
        return this.V.toString()
    };
    new Ra(u.trustedTypes && u.trustedTypes.emptyHTML || "", Qa);
    /*

     SPDX-License-Identifier: Apache-2.0
    */
    var Sa = "src srcdoc codebase data href rel action formaction sandbox cite poster icon".split(" ");
    var Ta = {};
    var z = function(a, b) {
            if (b !== Ta) throw Error("Bad secret");
            this.X = a
        },
        A = function() {};
    z.prototype = ha(A.prototype);
    z.prototype.constructor = z;
    if (oa) oa(z, A);
    else
        for (var Ua in A)
            if ("prototype" != Ua)
                if (Object.defineProperties) {
                    var Va = Object.getOwnPropertyDescriptor(A, Ua);
                    Va && Object.defineProperty(z, Ua, Va)
                } else z[Ua] = A[Ua];
    z.la = A.prototype;
    z.prototype.toString = function() {
        return this.X
    };
    var Wa = fa([""]),
        Xa = t(["\x00"], ["\\0"]),
        Ya = t(["\n"], ["\\n"]),
        Za = t(["\x00"], ["\\u0000"]),
        $a = fa([""]),
        ab = t(["\x00"], ["\\0"]),
        bb = t(["\n"], ["\\n"]),
        cb = t(["\x00"], ["\\u0000"]);

    function db(a) {
        return Object.isFrozen(a) && Object.isFrozen(a.raw)
    }

    function eb(a) {
        return -1 === a.toString().indexOf("`")
    }
    var fb = eb(function(a) {
            return a(Wa)
        }) || eb(function(a) {
            return a(Xa)
        }) || eb(function(a) {
            return a(Ya)
        }) || eb(function(a) {
            return a(Za)
        }),
        gb = db($a) && db(ab) && db(bb) && db(cb);

    function hb() {
        var a = jb;
        if (!Array.isArray(a) || !Array.isArray(a.raw) || a.length !== a.raw.length || !fb && a === a.raw || !(fb && !gb || db(a)) || 1 !== a.length) throw new TypeError("\n    ############################## ERROR ##############################\n\n    It looks like you are trying to call a template tag function (fn`...`)\n    using the normal function syntax (fn(...)), which is not supported.\n\n    The functions in the safevalues library are not designed to be called\n    like normal functions, and doing so invalidates the security guarantees\n    that safevalues provides.\n\n    If you are stuck and not sure how to proceed, please reach out to us\n    instead through:\n     - go/ise-hardening-yaqs (preferred) // LINE-INTERNAL\n     - g/ise-hardening // LINE-INTERNAL\n     - https://github.com/google/safevalues/issues\n\n    ############################## ERROR ##############################");
        var b = a[0].toLowerCase();
        if (0 === b.indexOf("on") || 0 === "on".indexOf(b)) throw Error("Prefix '" + a[0] + "' does not guarantee the attribute to be safe as it is also a prefix for event handler attributesPlease use 'addEventListener' to set event handlers.");
        Sa.forEach(function(c) {
            if (0 === c.indexOf(b)) throw Error("Prefix '" + a[0] + "' does not guarantee the attribute to be safe as it is also a prefix for the security sensitive attribute '" + (c + "'. Please use native or safe DOM APIs to set the attribute."));
        });
        return new z(b, Ta)
    };
    new y("about:blank", w);
    new y("about:invalid#zClosurez", w);
    var kb = /^\s*(?!javascript:)(?:[a-z0-9+.-]+:|[^:\/?#]*(?:[\/?#]|$))/i;

    function lb(a) {
        a instanceof y ? a instanceof y && a.constructor === y ? a = a.W : (Ha("expected object of type SafeUrl, got '" + a + "' of type " + ra(a)), a = "type_error:SafeUrl") : kb.test(a) || (mb(a), a = void 0);
        return a
    }
    var nb = [],
        mb = function() {};
    ob(function(a) {
        console.warn("A URL with content '" + a + "' was sanitized away.")
    });

    function ob(a) {
        -1 === nb.indexOf(a) && nb.push(a);
        mb = function(b) {
            nb.forEach(function(c) {
                c(b)
            })
        }
    };

    function pb(a) {
        var b = [hb()];
        if (0 === b.length) throw Error("No prefixes are provided");
        if (b.map(function(c) {
                if (c instanceof z) c = c.X;
                else throw Error("Unexpected type when unwrapping SafeAttributePrefix");
                return c
            }).every(function(c) {
                return 0 !== "data-gapiscan".indexOf(c)
            })) throw Error('Attribute "data-gapiscan" does not match any of the allowed prefixes.');
        a.setAttribute("data-gapiscan", "true")
    };
    var rb = function(a, b) {
            Ka(b, function(c, d) {
                "style" == d ? a.style.cssText = c : "class" == d ? a.className = c : "for" == d ? a.htmlFor = c : qb.hasOwnProperty(d) ? a.setAttribute(qb[d], c) : 0 == d.lastIndexOf("aria-", 0) || 0 == d.lastIndexOf("data-", 0) ? a.setAttribute(d, c) : a[d] = c
            })
        },
        qb = {
            cellpadding: "cellPadding",
            cellspacing: "cellSpacing",
            colspan: "colSpan",
            frameborder: "frameBorder",
            height: "height",
            maxlength: "maxLength",
            nonce: "nonce",
            role: "role",
            rowspan: "rowSpan",
            type: "type",
            usemap: "useMap",
            valign: "vAlign",
            width: "width"
        },
        sb = function(a,
            b, c, d) {
            function e(k) {
                k && b.appendChild("string" === typeof k ? a.createTextNode(k) : k)
            }
            for (; d < c.length; d++) {
                var f = c[d];
                if (!sa(f) || ta(f) && 0 < f.nodeType) e(f);
                else {
                    a: {
                        if (f && "number" == typeof f.length) {
                            if (ta(f)) {
                                var g = "function" == typeof f.item || "string" == typeof f.item;
                                break a
                            }
                            if ("function" === typeof f) {
                                g = "function" == typeof f.item;
                                break a
                            }
                        }
                        g = !1
                    }
                    Ia(g ? Ja(f) : f, e)
                }
            }
        },
        tb = function(a, b) {
            b = String(b);
            "application/xhtml+xml" === a.contentType && (b = b.toLowerCase());
            return a.createElement(b)
        },
        ub = function(a) {
            Fa(a, "Node cannot be null or undefined.");
            return 9 == a.nodeType ? a : a.ownerDocument || a.document
        },
        vb = function(a) {
            this.C = a || u.document || document
        };
    m = vb.prototype;
    m.getElementsByTagName = function(a, b) {
        return (b || this.C).getElementsByTagName(String(a))
    };
    m.ea = function(a, b, c) {
        var d = this.C,
            e = arguments,
            f = e[1],
            g = tb(d, String(e[0]));
        f && ("string" === typeof f ? g.className = f : Array.isArray(f) ? g.className = f.join(" ") : rb(g, f));
        2 < e.length && sb(d, g, e, 2);
        return g
    };
    m.createElement = function(a) {
        return tb(this.C, a)
    };
    m.createTextNode = function(a) {
        return this.C.createTextNode(String(a))
    };
    m.appendChild = function(a, b) {
        Fa(null != a && null != b, "goog.dom.appendChild expects non-null arguments");
        a.appendChild(b)
    };
    m.append = function(a, b) {
        sb(ub(a), a, arguments, 1)
    };
    m.canHaveChildren = function(a) {
        if (1 != a.nodeType) return !1;
        switch (a.tagName) {
            case "APPLET":
            case "AREA":
            case "BASE":
            case "BR":
            case "COL":
            case "COMMAND":
            case "EMBED":
            case "FRAME":
            case "HR":
            case "IMG":
            case "INPUT":
            case "IFRAME":
            case "ISINDEX":
            case "KEYGEN":
            case "LINK":
            case "NOFRAMES":
            case "NOSCRIPT":
            case "META":
            case "OBJECT":
            case "PARAM":
            case "SCRIPT":
            case "SOURCE":
            case "STYLE":
            case "TRACK":
            case "WBR":
                return !1
        }
        return !0
    };
    m.removeNode = function(a) {
        return a && a.parentNode ? a.parentNode.removeChild(a) : null
    };
    m.contains = function(a, b) {
        if (!a || !b) return !1;
        if (a.contains && 1 == b.nodeType) return a == b || a.contains(b);
        if ("undefined" != typeof a.compareDocumentPosition) return a == b || !!(a.compareDocumentPosition(b) & 16);
        for (; b && a != b;) b = b.parentNode;
        return b == a
    };
    /*
     gapi.loader.OBJECT_CREATE_TEST_OVERRIDE &&*/
    var C = window,
        D = document,
        wb = C.location,
        xb = function() {},
        yb = /\[native code\]/,
        E = function(a, b, c) {
            return a[b] = a[b] || c
        },
        zb = function(a) {
            for (var b = 0; b < this.length; b++)
                if (this[b] === a) return b;
            return -1
        },
        Ab = function(a) {
            a = a.sort();
            for (var b = [], c = void 0, d = 0; d < a.length; d++) {
                var e = a[d];
                e != c && b.push(e);
                c = e
            }
            return b
        },
        Bb = /&/g,
        Cb = /</g,
        Db = />/g,
        Eb = /"/g,
        Fb = /'/g,
        Gb = function(a) {
            return String(a).replace(Bb, "&amp;").replace(Cb, "&lt;").replace(Db, "&gt;").replace(Eb, "&quot;").replace(Fb, "&#39;")
        },
        F = function() {
            var a;
            if ((a = Object.create) &&
                yb.test(a)) a = a(null);
            else {
                a = {};
                for (var b in a) a[b] = void 0
            }
            return a
        },
        G = function(a, b) {
            return Object.prototype.hasOwnProperty.call(a, b)
        },
        Hb = function(a) {
            if (yb.test(Object.keys)) return Object.keys(a);
            var b = [],
                c;
            for (c in a) G(a, c) && b.push(c);
            return b
        },
        I = function(a, b) {
            a = a || {};
            for (var c in a) G(a, c) && (b[c] = a[c])
        },
        Ib = function(a) {
            return function() {
                C.setTimeout(a, 0)
            }
        },
        J = function(a, b) {
            if (!a) throw Error(b || "");
        },
        K = E(C, "gapi", {});
    var N = function(a, b, c) {
            var d = new RegExp("([#].*&|[#])" + b + "=([^&#]*)", "g");
            b = new RegExp("([?#].*&|[?#])" + b + "=([^&#]*)", "g");
            if (a = a && (d.exec(a) || b.exec(a))) try {
                c = decodeURIComponent(a[2])
            } catch (e) {}
            return c
        },
        Jb = new RegExp(/^/.source + /([a-zA-Z][-+.a-zA-Z0-9]*:)?/.source + /(\/\/[^\/?#]*)?/.source + /([^?#]*)?/.source + /(\?([^#]*))?/.source + /(#((#|[^#])*))?/.source + /$/.source),
        Kb = /[\ud800-\udbff][\udc00-\udfff]|[^!-~]/g,
        Lb = new RegExp(/(%([^0-9a-fA-F%]|[0-9a-fA-F]([^0-9a-fA-F%])?)?)*/.source + /%($|[^0-9a-fA-F]|[0-9a-fA-F]($|[^0-9a-fA-F]))/.source,
            "g"),
        Mb = /%([a-f]|[0-9a-fA-F][a-f])/g,
        Nb = /^(https?|ftp|file|chrome-extension):$/i,
        Ob = function(a) {
            a = String(a);
            a = a.replace(Kb, function(e) {
                try {
                    return encodeURIComponent(e)
                } catch (f) {
                    return encodeURIComponent(e.replace(/^[^%]+$/g, "\ufffd"))
                }
            }).replace(Lb, function(e) {
                return e.replace(/%/g, "%25")
            }).replace(Mb, function(e) {
                return e.toUpperCase()
            });
            a = a.match(Jb) || [];
            var b = F(),
                c = function(e) {
                    return e.replace(/\\/g, "%5C").replace(/\^/g, "%5E").replace(/`/g, "%60").replace(/\{/g, "%7B").replace(/\|/g, "%7C").replace(/\}/g,
                        "%7D")
                },
                d = !!(a[1] || "").match(Nb);
            b.B = c((a[1] || "") + (a[2] || "") + (a[3] || (a[2] && d ? "/" : "")));
            d = function(e) {
                return c(e.replace(/\?/g, "%3F").replace(/#/g, "%23"))
            };
            b.query = a[5] ? [d(a[5])] : [];
            b.j = a[7] ? [d(a[7])] : [];
            return b
        },
        Pb = function(a) {
            return a.B + (0 < a.query.length ? "?" + a.query.join("&") : "") + (0 < a.j.length ? "#" + a.j.join("&") : "")
        },
        Qb = function(a, b) {
            var c = [];
            if (a)
                for (var d in a)
                    if (G(a, d) && null != a[d]) {
                        var e = b ? b(a[d]) : a[d];
                        c.push(encodeURIComponent(d) + "=" + encodeURIComponent(e))
                    }
            return c
        },
        Rb = function(a, b, c, d) {
            a = Ob(a);
            a.query.push.apply(a.query, Qb(b, d));
            a.j.push.apply(a.j, Qb(c, d));
            return Pb(a)
        },
        Sb = new RegExp(/\/?\??#?/.source + "(" + /[\/?#]/i.source + "|" + /[\uD800-\uDBFF]/i.source + "|" + /%[c-f][0-9a-f](%[89ab][0-9a-f]){0,2}(%[89ab]?)?/i.source + "|" + /%[0-9a-f]?/i.source + ")$", "i"),
        Tb = function(a, b) {
            var c = Ob(b);
            b = c.B;
            c.query.length && (b += "?" + c.query.join(""));
            c.j.length && (b += "#" + c.j.join(""));
            var d = "";
            2E3 < b.length && (d = b, b = b.substr(0, 2E3), b = b.replace(Sb, ""), d = d.substr(b.length));
            var e = a.createElement("div");
            a = a.createElement("a");
            c = Ob(b);
            b = c.B;
            c.query.length && (b += "?" + c.query.join(""));
            c.j.length && (b += "#" + c.j.join(""));
            b = null === b ? "null" : void 0 === b ? "undefined" : b;
            if ("string" !== typeof b) throw Error("Expected a string");
            b = new y(b, w);
            b = lb(b);
            void 0 !== b && (a.href = b);
            e.appendChild(a);
            a = e.innerHTML;
            void 0 === La && (La = Ba("gapi#html"));
            a = (b = La) ? b.createHTML(a) : a;
            a = new Ra(a, Qa);
            if (1 === e.nodeType && (b = e.tagName, "SCRIPT" === b || "STYLE" === b)) throw Error("SCRIPT" === b ? "Use safeScriptEl.setTextContent with a SafeScript." : "Use safeStyleEl.setTextContent with a SafeStyleSheet.");
            a instanceof Ra && a.constructor === Ra ? a = a.V : (Ha("expected object of type SafeHtml, got '" + a + "' of type " + ra(a)), a = "type_error:SafeHtml");
            e.innerHTML = a;
            b = String(e.firstChild.href);
            e.parentNode && e.parentNode.removeChild(e);
            c = Ob(b + d);
            d = c.B;
            c.query.length && (d += "?" + c.query.join(""));
            c.j.length && (d += "#" + c.j.join(""));
            return d
        },
        Ub = /^https?:\/\/[^\/%\\?#\s]+\/[^\s]*$/i;
    var Vb;
    var Wb = function(a, b, c, d) {
            if (C[c + "EventListener"]) C[c + "EventListener"](a, b, !1);
            else if (C[d + "tachEvent"]) C[d + "tachEvent"]("on" + a, b)
        },
        Xb = function() {
            var a = D.readyState;
            return "complete" === a || "interactive" === a && -1 == navigator.userAgent.indexOf("MSIE")
        },
        $b = function(a) {
            var b = Yb;
            if (!Xb()) try {
                b()
            } catch (c) {}
            Zb(a)
        },
        Zb = function(a) {
            if (Xb()) a();
            else {
                var b = !1,
                    c = function() {
                        if (!b) return b = !0, a.apply(this, arguments)
                    };
                C.addEventListener ? (C.addEventListener("load", c, !1), C.addEventListener("DOMContentLoaded", c, !1)) : C.attachEvent &&
                    (C.attachEvent("onreadystatechange", function() {
                        Xb() && c.apply(this, arguments)
                    }), C.attachEvent("onload", c))
            }
        },
        ac = function(a) {
            for (; a.firstChild;) a.removeChild(a.firstChild)
        },
        bc = {
            button: !0,
            div: !0,
            span: !0
        };
    var O = {};
    O = E(C, "___jsl", F());
    E(O, "I", 0);
    E(O, "hel", 10);
    var cc = function(a) {
            return O.dpo ? O.h : N(a, "jsh", O.h)
        },
        dc = function(a) {
            var b = E(O, "sws", []);
            b.push.apply(b, a)
        },
        ec = function(a) {
            return E(O, "watt", F())[a]
        },
        fc = function(a) {
            var b = E(O, "PQ", []);
            O.PQ = [];
            var c = b.length;
            if (0 === c) a();
            else
                for (var d = 0, e = function() {
                        ++d === c && a()
                    }, f = 0; f < c; f++) b[f](e)
        },
        gc = function(a) {
            return E(E(O, "H", F()), a, F())
        };
    var hc = E(O, "perf", F()),
        ic = E(hc, "g", F()),
        jc = E(hc, "i", F());
    E(hc, "r", []);
    F();
    F();
    var kc = function(a, b, c) {
            var d = hc.r;
            "function" === typeof d ? d(a, b, c) : d.push([a, b, c])
        },
        P = function(a, b, c) {
            ic[a] = !b && ic[a] || c || (new Date).getTime();
            kc(a)
        },
        mc = function(a, b, c) {
            b && 0 < b.length && (b = lc(b), c && 0 < c.length && (b += "___" + lc(c)), 28 < b.length && (b = b.substr(0, 28) + (b.length - 28)), c = b, b = E(jc, "_p", F()), E(b, c, F())[a] = (new Date).getTime(), kc(a, "_p", c))
        },
        lc = function(a) {
            return a.join("__").replace(/\./g, "_").replace(/\-/g, "_").replace(/,/g, "_")
        };
    var nc = F(),
        Q = [],
        S = function(a) {
            throw Error("Bad hint: " + a);
        };
    Q.push(["jsl", function(a) {
        for (var b in a)
            if (G(a, b)) {
                var c = a[b];
                "object" == typeof c ? O[b] = E(O, b, []).concat(c) : E(O, b, c)
            }
        if (b = a.u) a = E(O, "us", []), a.push(b), (b = /^https:(.*)$/.exec(b)) && a.push("http:" + b[1])
    }]);
    var oc = /^(\/[a-zA-Z0-9_\-]+)+$/,
        pc = [/\/amp\//, /\/amp$/, /^\/amp$/],
        qc = /^[a-zA-Z0-9\-_\.,!]+$/,
        rc = /^gapi\.loaded_[0-9]+$/,
        sc = /^[a-zA-Z0-9,._-]+$/,
        wc = function(a, b, c, d, e) {
            var f = a.split(";"),
                g = f.shift(),
                k = nc[g],
                h = null;
            k ? h = k(f, b, c, d) : S("no hint processor for: " + g);
            h || S("failed to generate load url");
            b = h;
            c = b.match(tc);
            (d = b.match(uc)) && 1 === d.length && vc.test(b) && c && 1 === c.length || S("failed sanity: " + a);
            try {
                a = "?";
                if (e && 0 < e.length) {
                    c = b = 0;
                    for (d = {}; c < e.length;) {
                        var l = e[c++],
                            n = ta(l) ? "o" + (Object.prototype.hasOwnProperty.call(l,
                                ua) && l[ua] || (l[ua] = ++va)) : (typeof l).charAt(0) + l;
                        Object.prototype.hasOwnProperty.call(d, n) || (d[n] = !0, e[b++] = l)
                    }
                    e.length = b;
                    h = h + "?le=" + e.join(",");
                    a = "&"
                }
                if (O.rol) {
                    var p = O.ol;
                    p && p.length && (h = "" + h + a + "ol=" + p.length)
                }
            } catch (q) {}
            return h
        },
        zc = function(a, b, c, d) {
            a = xc(a);
            rc.test(c) || S("invalid_callback");
            b = yc(b);
            d = d && d.length ? yc(d) : null;
            var e = function(f) {
                return encodeURIComponent(f).replace(/%2C/g, ",")
            };
            return [encodeURIComponent(a.pathPrefix).replace(/%2C/g, ",").replace(/%2F/g, "/"), "/k=", e(a.version), "/m=",
                e(b), d ? "/exm=" + e(d) : "", "/rt=j/sv=1/d=1/ed=1", a.O ? "/am=" + e(a.O) : "", a.Y ? "/rs=" + e(a.Y) : "", a.aa ? "/t=" + e(a.aa) : "", "/cb=", e(c)
            ].join("")
        },
        xc = function(a) {
            "/" !== a.charAt(0) && S("relative path");
            for (var b = a.substring(1).split("/"), c = []; b.length;) {
                a = b.shift();
                if (!a.length || 0 == a.indexOf(".")) S("empty/relative directory");
                else if (0 < a.indexOf("=")) {
                    b.unshift(a);
                    break
                }
                c.push(a)
            }
            a = {};
            for (var d = 0, e = b.length; d < e; ++d) {
                var f = b[d].split("="),
                    g = decodeURIComponent(f[0]),
                    k = decodeURIComponent(f[1]);
                2 == f.length && g && k && (a[g] =
                    a[g] || k)
            }
            b = "/" + c.join("/");
            oc.test(b) || S("invalid_prefix");
            c = 0;
            for (d = pc.length; c < d; ++c) pc[c].test(b) && S("invalid_prefix");
            c = Ac(a, "k", !0);
            d = Ac(a, "am");
            e = Ac(a, "rs");
            a = Ac(a, "t");
            return {
                pathPrefix: b,
                version: c,
                O: d,
                Y: e,
                aa: a
            }
        },
        yc = function(a) {
            for (var b = [], c = 0, d = a.length; c < d; ++c) {
                var e = a[c].replace(/\./g, "_").replace(/-/g, "_");
                sc.test(e) && b.push(e)
            }
            return b.join(",")
        },
        Ac = function(a, b, c) {
            a = a[b];
            !a && c && S("missing: " + b);
            if (a) {
                if (qc.test(a)) return a;
                S("invalid: " + b)
            }
            return null
        },
        vc = /^https?:\/\/[a-z0-9_.-]+\.google(rs)?\.com(:\d+)?\/[a-zA-Z0-9_.,!=\-\/]+$/,
        uc = /\/cb=/g,
        tc = /\/\//g;
    nc.m = function(a, b, c, d) {
        (a = a[0]) || S("missing_hint");
        return "https://apis.google.com" + zc(a, b, c, d)
    };
    var Bc = decodeURI("%73cript"),
        Cc = /^[-+_0-9\/A-Za-z]+={0,2}$/,
        Dc = function(a, b) {
            for (var c = [], d = 0; d < a.length; ++d) {
                var e = a[d];
                e && 0 > zb.call(b, e) && c.push(e)
            }
            return c
        },
        Ec = function() {
            var a = O.nonce;
            return void 0 !== a ? a && a === String(a) && a.match(Cc) ? a : O.nonce = null : D.querySelector ? (a = D.querySelector("script[nonce]")) ? (a = a.nonce || a.getAttribute("nonce") || "", a && a === String(a) && a.match(Cc) ? O.nonce = a : O.nonce = null) : null : null
        },
        Hc = function(a) {
            if ("loading" != D.readyState) Fc(a);
            else {
                var b = Ec(),
                    c = "";
                null !== b && (c = ' nonce="' +
                    b + '"');
                a = "<" + Bc + ' src="' + encodeURI(a) + '"' + c + "></" + Bc + ">";
                D.write(Gc ? Gc.createHTML(a) : a)
            }
        },
        Fc = function(a) {
            var b = D.createElement(Bc);
            b.setAttribute("src", Gc ? Gc.createScriptURL(a) : a);
            a = Ec();
            null !== a && b.setAttribute("nonce", a);
            b.async = "true";
            (a = D.getElementsByTagName(Bc)[0]) ? a.parentNode.insertBefore(b, a): (D.head || D.body || D.documentElement).appendChild(b)
        },
        Jc = function(a, b, c) {
            Ic(function() {
                var d = b === cc(wb.href) ? E(K, "_", F()) : F();
                d = E(gc(b), "_", d);
                a(d)
            }, c)
        },
        Lc = function(a, b) {
            var c = b || {};
            "function" == typeof b &&
                (c = {}, c.callback = b);
            var d = (b = c) && b._c;
            if (d)
                for (var e = 0; e < Q.length; e++) {
                    var f = Q[e][0],
                        g = Q[e][1];
                    g && G(d, f) && g(d[f], a, b)
                }
            b = [];
            a ? b = a.split(":") : c.features && (b = c.features);
            if (!(a = c.h) && (a = cc(wb.href), !a)) throw Error("Bad hint: !hint");
            Kc(b || [], c, a)
        },
        Kc = function(a, b, c) {
            var d = !!O.glrp;
            a = Ab(a) || [];
            var e = b.callback,
                f = b.config,
                g = b.timeout,
                k = b.ontimeout,
                h = b.onerror,
                l = void 0;
            "function" == typeof h && (l = h);
            var n = null,
                p = !1;
            if (g && !k || !g && k) throw "Timeout requires both the timeout parameter and ontimeout parameter to be set";
            h = E(gc(c), "r", []).sort();
            var q = E(gc(c), "L", []).sort(),
                B = O.le || [],
                x = [].concat(h),
                v = function(R, la) {
                    if (p) return 0;
                    C.clearTimeout(n);
                    q.push.apply(q, H);
                    var ma = ((K || {}).config || {}).update;
                    ma ? ma(f) : f && E(O, "cu", []).push(f);
                    if (la) {
                        mc("me0", R, x);
                        try {
                            Jc(la, c, l)
                        } finally {
                            mc("me1", R, x)
                        }
                    }
                    return 1
                };
            0 < g && (n = C.setTimeout(function() {
                p = !0;
                k()
            }, g));
            var H = Dc(a, q);
            if (H.length) {
                H = Dc(a, h);
                var L = E(O, "CP", []),
                    M = L.length;
                L[M] = function(R) {
                    if (!R) return 0;
                    mc("ml1", H, x);
                    var la = function(Ga) {
                            d || (L[M] = null);
                            v(H, R) && (d && (L[M] = null),
                                fc(function() {
                                    e && e();
                                    Ga()
                                }))
                        },
                        ma = function() {
                            var Ga = L[M + 1];
                            Ga && Ga()
                        };
                    0 < M && L[M - 1] ? L[M] = function() {
                        la(ma)
                    } : la(ma)
                };
                if (H.length) {
                    var ib = "loaded_" + O.I++;
                    K[ib] = function(R) {
                        L[M](R);
                        K[ib] = null
                    };
                    a = wc(c, H, "gapi." + ib, h, B);
                    h.push.apply(h, H);
                    mc("ml0", H, x);
                    b.sync || C.___gapisync ? Hc(a) : Fc(a)
                } else L[M](xb)
            } else v(H) && e && e()
        },
        Gc = Ba("gapi#gapi");
    var Ic = function(a, b) {
        if (O.hee && 0 < O.hel) try {
            return a()
        } catch (c) {
            b && b(c), O.hel--, Lc("debug_error", function() {
                try {
                    window.___jsl.hefn(c)
                } catch (d) {
                    throw c;
                }
            })
        } else try {
            return a()
        } catch (c) {
            throw b && b(c), c;
        }
    };
    var Mc = K.load;
    Mc && E(O, "ol", []).push(Mc);
    K.load = function(a, b) {
        return Ic(function() {
            return Lc(a, b)
        })
    };
    var Nc = function(a) {
            var b = window.___jsl = window.___jsl || {};
            b[a] = b[a] || [];
            return b[a]
        },
        Oc = function(a) {
            var b = window.___jsl = window.___jsl || {};
            b.cfg = !a && b.cfg || {};
            return b.cfg
        },
        Pc = function(a) {
            return "object" === typeof a && /\[native code\]/.test(a.push)
        },
        T = function(a, b, c) {
            if (b && "object" === typeof b)
                for (var d in b) !Object.prototype.hasOwnProperty.call(b, d) || c && "___goc" === d && "undefined" === typeof b[d] || (a[d] && b[d] && "object" === typeof a[d] && "object" === typeof b[d] && !Pc(a[d]) && !Pc(b[d]) ? T(a[d], b[d]) : b[d] && "object" ===
                    typeof b[d] ? (a[d] = Pc(b[d]) ? [] : {}, T(a[d], b[d])) : a[d] = b[d])
        },
        Qc = function(a) {
            if (a && !/^\s+$/.test(a)) {
                for (; 0 == a.charCodeAt(a.length - 1);) a = a.substring(0, a.length - 1);
                try {
                    var b = window.JSON.parse(a)
                } catch (c) {}
                if ("object" === typeof b) return b;
                try {
                    b = (new Function("return (" + a + "\n)"))()
                } catch (c) {}
                if ("object" === typeof b) return b;
                try {
                    b = (new Function("return ({" + a + "\n})"))()
                } catch (c) {}
                return "object" === typeof b ? b : {}
            }
        },
        Rc = function(a, b) {
            var c = {
                ___goc: void 0
            };
            a.length && a[a.length - 1] && Object.hasOwnProperty.call(a[a.length -
                1], "___goc") && "undefined" === typeof a[a.length - 1].___goc && (c = a.pop());
            T(c, b);
            a.push(c)
        },
        Sc = function(a) {
            Oc(!0);
            var b = window.___gcfg,
                c = Nc("cu"),
                d = window.___gu;
            b && b !== d && (Rc(c, b), window.___gu = b);
            b = Nc("cu");
            var e = document.scripts || document.getElementsByTagName("script") || [];
            d = [];
            var f = [];
            f.push.apply(f, Nc("us"));
            for (var g = 0; g < e.length; ++g)
                for (var k = e[g], h = 0; h < f.length; ++h) k.src && 0 == k.src.indexOf(f[h]) && d.push(k);
            0 == d.length && 0 < e.length && e[e.length - 1].src && d.push(e[e.length - 1]);
            for (e = 0; e < d.length; ++e) d[e].getAttribute("gapi_processed") ||
                (d[e].setAttribute("gapi_processed", !0), (f = d[e]) ? (g = f.nodeType, f = 3 == g || 4 == g ? f.nodeValue : f.textContent || "") : f = void 0, (f = Qc(f)) && b.push(f));
            a && Rc(c, a);
            d = Nc("cd");
            a = 0;
            for (b = d.length; a < b; ++a) T(Oc(), d[a], !0);
            d = Nc("ci");
            a = 0;
            for (b = d.length; a < b; ++a) T(Oc(), d[a], !0);
            a = 0;
            for (b = c.length; a < b; ++a) T(Oc(), c[a], !0)
        },
        U = function(a) {
            var b = Oc();
            if (!a) return b;
            a = a.split("/");
            for (var c = 0, d = a.length; b && "object" === typeof b && c < d; ++c) b = b[a[c]];
            return c === a.length && void 0 !== b ? b : void 0
        },
        Tc = function(a, b) {
            var c;
            if ("string" === typeof a) {
                var d =
                    c = {};
                a = a.split("/");
                for (var e = 0, f = a.length; e < f - 1; ++e) {
                    var g = {};
                    d = d[a[e]] = g
                }
                d[a[e]] = b
            } else c = a;
            Sc(c)
        };
    var Uc = function() {
        var a = window.__GOOGLEAPIS;
        a && (a.googleapis && !a["googleapis.config"] && (a["googleapis.config"] = a.googleapis), E(O, "ci", []).push(a), window.__GOOGLEAPIS = void 0)
    };
    var Vc = {
            callback: 1,
            clientid: 1,
            cookiepolicy: 1,
            openidrealm: -1,
            includegrantedscopes: -1,
            requestvisibleactions: 1,
            scope: 1
        },
        Wc = !1,
        Xc = F(),
        Yc = function() {
            if (!Wc) {
                for (var a = document.getElementsByTagName("meta"), b = 0; b < a.length; ++b) {
                    var c = a[b].name.toLowerCase();
                    if (0 == c.lastIndexOf("google-signin-", 0)) {
                        c = c.substring(14);
                        var d = a[b].content;
                        Vc[c] && d && (Xc[c] = d)
                    }
                }
                if (window.self !== window.top) {
                    a = document.location.toString();
                    for (var e in Vc) 0 < Vc[e] && (b = N(a, e, "")) && (Xc[e] = b)
                }
                Wc = !0
            }
            e = F();
            I(Xc, e);
            return e
        },
        Zc = function(a) {
            return !!(a.clientid &&
                a.scope && a.callback)
        };
    var $c = function() {
        this.i = window.console
    };
    $c.prototype.log = function(a) {
        this.i && this.i.log && this.i.log(a)
    };
    $c.prototype.error = function(a) {
        this.i && (this.i.error ? this.i.error(a) : this.i.log && this.i.log(a))
    };
    $c.prototype.warn = function(a) {
        this.i && (this.i.warn ? this.i.warn(a) : this.i.log && this.i.log(a))
    };
    $c.prototype.debug = function() {};
    var ad = new $c;
    var bd = function() {
            return !!O.oa
        },
        cd = function() {};
    var V = E(O, "rw", F()),
        dd = function(a) {
            for (var b in V) a(V[b])
        },
        ed = function(a, b) {
            (a = V[a]) && a.state < b && (a.state = b)
        };
    var W = function(a) {
        var b = window.___jsl = window.___jsl || {};
        b.cfg = b.cfg || {};
        b = b.cfg;
        if (!a) return b;
        a = a.split("/");
        for (var c = 0, d = a.length; b && "object" === typeof b && c < d; ++c) b = b[a[c]];
        return c === a.length && void 0 !== b ? b : void 0
    };
    var fd = /^https?:\/\/(?:\w|[\-\.])+\.google\.(?:\w|[\-:\.])+(?:\/[^\?#]*)?\/u\/(\d)\//,
        gd = /^https?:\/\/(?:\w|[\-\.])+\.google\.(?:\w|[\-:\.])+(?:\/[^\?#]*)?\/b\/(\d{10,21})\//,
        hd = function() {
            var a = W("googleapis.config/sessionIndex");
            "string" === typeof a && 254 < a.length && (a = null);
            null == a && (a = window.__X_GOOG_AUTHUSER);
            "string" === typeof a && 254 < a.length && (a = null);
            if (null == a) {
                var b = window.google;
                b && (a = b.authuser)
            }
            "string" === typeof a && 254 < a.length && (a = null);
            null == a && (b = window.location.href, a = N(b, "authuser") ||
                null, null == a && (a = (a = b.match(fd)) ? a[1] : null));
            if (null == a) return null;
            a = String(a);
            254 < a.length && (a = null);
            return a
        },
        id = function() {
            var a = W("googleapis.config/sessionDelegate");
            "string" === typeof a && 21 < a.length && (a = null);
            null == a && (a = (a = window.location.href.match(gd)) ? a[1] : null);
            if (null == a) return null;
            a = String(a);
            21 < a.length && (a = null);
            return a
        };
    var jd, kd, ld = void 0,
        X = function(a) {
            try {
                return u.JSON.parse.call(u.JSON, a)
            } catch (b) {
                return !1
            }
        },
        Y = function(a) {
            return Object.prototype.toString.call(a)
        },
        md = Y(0),
        nd = Y(new Date(0)),
        od = Y(!0),
        pd = Y(""),
        qd = Y({}),
        rd = Y([]),
        sd = function(a, b) {
            if (b)
                for (var c = 0, d = b.length; c < d; ++c)
                    if (a === b[c]) throw new TypeError("Converting circular structure to JSON");
            d = typeof a;
            if ("undefined" !== d) {
                c = Array.prototype.slice.call(b || [], 0);
                c[c.length] = a;
                b = [];
                var e = Y(a);
                if (null != a && "function" === typeof a.toJSON && (Object.prototype.hasOwnProperty.call(a,
                        "toJSON") || (e !== rd || a.constructor !== Array && a.constructor !== Object) && (e !== qd || a.constructor !== Array && a.constructor !== Object) && e !== pd && e !== md && e !== od && e !== nd)) return sd(a.toJSON.call(a), c);
                if (null == a) b[b.length] = "null";
                else if (e === md) a = Number(a), isNaN(a) || isNaN(a - a) ? a = "null" : -0 === a && 0 > 1 / a && (a = "-0"), b[b.length] = String(a);
                else if (e === od) b[b.length] = String(!!Number(a));
                else {
                    if (e === nd) return sd(a.toISOString.call(a), c);
                    if (e === rd && Y(a.length) === md) {
                        b[b.length] = "[";
                        var f = 0;
                        for (d = Number(a.length) >> 0; f < d; ++f) f &&
                            (b[b.length] = ","), b[b.length] = sd(a[f], c) || "null";
                        b[b.length] = "]"
                    } else if (e == pd && Y(a.length) === md) {
                        b[b.length] = '"';
                        f = 0;
                        for (c = Number(a.length) >> 0; f < c; ++f) d = String.prototype.charAt.call(a, f), e = String.prototype.charCodeAt.call(a, f), b[b.length] = "\b" === d ? "\\b" : "\f" === d ? "\\f" : "\n" === d ? "\\n" : "\r" === d ? "\\r" : "\t" === d ? "\\t" : "\\" === d || '"' === d ? "\\" + d : 31 >= e ? "\\u" + (e + 65536).toString(16).substr(1) : 32 <= e && 65535 >= e ? d : "\ufffd";
                        b[b.length] = '"'
                    } else if ("object" === d) {
                        b[b.length] = "{";
                        d = 0;
                        for (f in a) Object.prototype.hasOwnProperty.call(a,
                            f) && (e = sd(a[f], c), void 0 !== e && (d++ && (b[b.length] = ","), b[b.length] = sd(f), b[b.length] = ":", b[b.length] = e));
                        b[b.length] = "}"
                    } else return
                }
                return b.join("")
            }
        },
        td = /[\0-\x07\x0b\x0e-\x1f]/,
        ud = /^([^"]*"([^\\"]|\\.)*")*[^"]*"([^"\\]|\\.)*[\0-\x1f]/,
        vd = /^([^"]*"([^\\"]|\\.)*")*[^"]*"([^"\\]|\\.)*\\[^\\\/"bfnrtu]/,
        wd = /^([^"]*"([^\\"]|\\.)*")*[^"]*"([^"\\]|\\.)*\\u([0-9a-fA-F]{0,3}[^0-9a-fA-F])/,
        xd = /"([^\0-\x1f\\"]|\\[\\\/"bfnrt]|\\u[0-9a-fA-F]{4})*"/g,
        yd = /-?(0|[1-9][0-9]*)(\.[0-9]+)?([eE][-+]?[0-9]+)?/g,
        zd = /[ \t\n\r]+/g,
        Ad = /[^"]:/,
        Bd = /""/g,
        Cd = /true|false|null/g,
        Dd = /00/,
        Ed = /[\{]([^0\}]|0[^:])/,
        Fd = /(^|\[)[,:]|[,:](\]|\}|[,:]|$)/,
        Gd = /[^\[,:][\[\{]/,
        Hd = /^(\{|\}|\[|\]|,|:|0)+/,
        Id = /\u2028/g,
        Jd = /\u2029/g,
        Kd = function(a) {
            a = String(a);
            if (td.test(a) || ud.test(a) || vd.test(a) || wd.test(a)) return !1;
            var b = a.replace(xd, '""');
            b = b.replace(yd, "0");
            b = b.replace(zd, "");
            if (Ad.test(b)) return !1;
            b = b.replace(Bd, "0");
            b = b.replace(Cd, "0");
            if (Dd.test(b) || Ed.test(b) || Fd.test(b) || Gd.test(b) || !b || (b = b.replace(Hd, ""))) return !1;
            a = a.replace(Id, "\\u2028").replace(Jd,
                "\\u2029");
            b = void 0;
            try {
                b = ld ? [X(a)] : eval("(function (var_args) {\n  return Array.prototype.slice.call(arguments, 0);\n})(\n" + a + "\n)")
            } catch (c) {
                return !1
            }
            return b && 1 === b.length ? b[0] : !1
        },
        Ld = function() {
            var a = ((u.document || {}).scripts || []).length;
            if ((void 0 === jd || void 0 === ld || kd !== a) && -1 !== kd) {
                jd = ld = !1;
                kd = -1;
                try {
                    try {
                        ld = !!u.JSON && '{"a":[3,true,"1970-01-01T00:00:00.000Z"]}' === u.JSON.stringify.call(u.JSON, {
                            a: [3, !0, new Date(0)],
                            c: function() {}
                        }) && !0 === X("true") && 3 === X('[{"a":3}]')[0].a
                    } catch (b) {}
                    jd = ld && !X("[00]") &&
                        !X('"\u0007"') && !X('"\\0"') && !X('"\\v"')
                } finally {
                    kd = a
                }
            }
        },
        Md = function(a) {
            if (-1 === kd) return !1;
            Ld();
            return (jd ? X : Kd)(a)
        },
        Nd = function(a) {
            if (-1 !== kd) return Ld(), ld ? u.JSON.stringify.call(u.JSON, a) : sd(a)
        },
        Od = !Date.prototype.toISOString || "function" !== typeof Date.prototype.toISOString || "1970-01-01T00:00:00.000Z" !== (new Date(0)).toISOString(),
        Pd = function() {
            var a = Date.prototype.getUTCFullYear.call(this);
            return [0 > a ? "-" + String(1E6 - a).substr(1) : 9999 >= a ? String(1E4 + a).substr(1) : "+" + String(1E6 + a).substr(1), "-", String(101 +
                Date.prototype.getUTCMonth.call(this)).substr(1), "-", String(100 + Date.prototype.getUTCDate.call(this)).substr(1), "T", String(100 + Date.prototype.getUTCHours.call(this)).substr(1), ":", String(100 + Date.prototype.getUTCMinutes.call(this)).substr(1), ":", String(100 + Date.prototype.getUTCSeconds.call(this)).substr(1), ".", String(1E3 + Date.prototype.getUTCMilliseconds.call(this)).substr(1), "Z"].join("")
        };
    Date.prototype.toISOString = Od ? Pd : Date.prototype.toISOString;
    var Qd = function() {
        this.blockSize = -1
    };
    var Rd = function() {
        this.blockSize = -1;
        this.blockSize = 64;
        this.g = [];
        this.J = [];
        this.ca = [];
        this.F = [];
        this.F[0] = 128;
        for (var a = 1; a < this.blockSize; ++a) this.F[a] = 0;
        this.G = this.v = 0;
        this.reset()
    };
    za(Rd, Qd);
    Rd.prototype.reset = function() {
        this.g[0] = 1732584193;
        this.g[1] = 4023233417;
        this.g[2] = 2562383102;
        this.g[3] = 271733878;
        this.g[4] = 3285377520;
        this.G = this.v = 0
    };
    var Sd = function(a, b, c) {
        c || (c = 0);
        var d = a.ca;
        if ("string" === typeof b)
            for (var e = 0; 16 > e; e++) d[e] = b.charCodeAt(c) << 24 | b.charCodeAt(c + 1) << 16 | b.charCodeAt(c + 2) << 8 | b.charCodeAt(c + 3), c += 4;
        else
            for (e = 0; 16 > e; e++) d[e] = b[c] << 24 | b[c + 1] << 16 | b[c + 2] << 8 | b[c + 3], c += 4;
        for (e = 16; 80 > e; e++) {
            var f = d[e - 3] ^ d[e - 8] ^ d[e - 14] ^ d[e - 16];
            d[e] = (f << 1 | f >>> 31) & 4294967295
        }
        b = a.g[0];
        c = a.g[1];
        var g = a.g[2],
            k = a.g[3],
            h = a.g[4];
        for (e = 0; 80 > e; e++) {
            if (40 > e)
                if (20 > e) {
                    f = k ^ c & (g ^ k);
                    var l = 1518500249
                } else f = c ^ g ^ k, l = 1859775393;
            else 60 > e ? (f = c & g | k & (c | g), l = 2400959708) :
                (f = c ^ g ^ k, l = 3395469782);
            f = (b << 5 | b >>> 27) + f + h + l + d[e] & 4294967295;
            h = k;
            k = g;
            g = (c << 30 | c >>> 2) & 4294967295;
            c = b;
            b = f
        }
        a.g[0] = a.g[0] + b & 4294967295;
        a.g[1] = a.g[1] + c & 4294967295;
        a.g[2] = a.g[2] + g & 4294967295;
        a.g[3] = a.g[3] + k & 4294967295;
        a.g[4] = a.g[4] + h & 4294967295
    };
    Rd.prototype.update = function(a, b) {
        if (null != a) {
            void 0 === b && (b = a.length);
            for (var c = b - this.blockSize, d = 0, e = this.J, f = this.v; d < b;) {
                if (0 == f)
                    for (; d <= c;) Sd(this, a, d), d += this.blockSize;
                if ("string" === typeof a)
                    for (; d < b;) {
                        if (e[f] = a.charCodeAt(d), ++f, ++d, f == this.blockSize) {
                            Sd(this, e);
                            f = 0;
                            break
                        }
                    } else
                        for (; d < b;)
                            if (e[f] = a[d], ++f, ++d, f == this.blockSize) {
                                Sd(this, e);
                                f = 0;
                                break
                            }
            }
            this.v = f;
            this.G += b
        }
    };
    Rd.prototype.digest = function() {
        var a = [],
            b = 8 * this.G;
        56 > this.v ? this.update(this.F, 56 - this.v) : this.update(this.F, this.blockSize - (this.v - 56));
        for (var c = this.blockSize - 1; 56 <= c; c--) this.J[c] = b & 255, b /= 256;
        Sd(this, this.J);
        for (c = b = 0; 5 > c; c++)
            for (var d = 24; 0 <= d; d -= 8) a[b] = this.g[c] >> d & 255, ++b;
        return a
    };
    var Td = function() {
        this.M = new Rd
    };
    Td.prototype.reset = function() {
        this.M.reset()
    };
    var Ud = C.crypto,
        Vd = !1,
        Wd = 0,
        Xd = 0,
        Yd = 1,
        Zd = 0,
        $d = "",
        ae = function(a) {
            a = a || C.event;
            var b = a.screenX + a.clientX << 16;
            b += a.screenY + a.clientY;
            b *= (new Date).getTime() % 1E6;
            Yd = Yd * b % Zd;
            0 < Wd && ++Xd == Wd && Wb("mousemove", ae, "remove", "de")
        },
        be = function(a) {
            var b = new Td;
            a = unescape(encodeURIComponent(a));
            for (var c = [], d = 0, e = a.length; d < e; ++d) c.push(a.charCodeAt(d));
            b.M.update(c);
            b = b.M.digest();
            a = "";
            for (c = 0; c < b.length; c++) a += "0123456789ABCDEF".charAt(Math.floor(b[c] / 16)) + "0123456789ABCDEF".charAt(b[c] % 16);
            return a
        };
    Vd = !!Ud && "function" == typeof Ud.getRandomValues;
    Vd || (Zd = 1E6 * (screen.width * screen.width + screen.height), $d = be(D.cookie + "|" + D.location + "|" + (new Date).getTime() + "|" + Math.random()), Wd = W("random/maxObserveMousemove") || 0, 0 != Wd && Wb("mousemove", ae, "add", "at"));
    var ce = function() {
            var a = O.onl;
            if (!a) {
                a = F();
                O.onl = a;
                var b = F();
                a.e = function(c) {
                    var d = b[c];
                    d && (delete b[c], d())
                };
                a.a = function(c, d) {
                    b[c] = d
                };
                a.r = function(c) {
                    delete b[c]
                }
            }
            return a
        },
        de = function(a, b) {
            b = b.onload;
            return "function" === typeof b ? (ce().a(a, b), b) : null
        },
        ee = function(a) {
            J(/^\w+$/.test(a), "Unsupported id - " + a);
            return 'onload="window.___jsl.onl.e(&#34;' + a + '&#34;)"'
        },
        fe = function(a) {
            ce().r(a)
        };
    var ge = {
            allowtransparency: "true",
            frameborder: "0",
            hspace: "0",
            marginheight: "0",
            marginwidth: "0",
            scrolling: "no",
            style: "",
            tabindex: "0",
            vspace: "0",
            width: "100%"
        },
        he = {
            allowtransparency: !0,
            onload: !0
        },
        ie = 0,
        je = function(a) {
            J(!a || Ub.test(a), "Illegal url for new iframe - " + a)
        },
        ke = function(a, b, c, d, e) {
            je(c.src);
            var f, g = de(d, c),
                k = g ? ee(d) : "";
            try {
                document.all && (f = a.createElement('<iframe frameborder="' + Gb(String(c.frameborder)) + '" scrolling="' + Gb(String(c.scrolling)) + '" ' + k + ' name="' + Gb(String(c.name)) + '"/>'))
            } catch (l) {} finally {
                f ||
                    (f = (a ? new vb(ub(a)) : Da || (Da = new vb)).ea("IFRAME"), g && (f.onload = function() {
                        f.onload = null;
                        g.call(this)
                    }, fe(d)))
            }
            f.setAttribute("ng-non-bindable", "");
            for (var h in c) a = c[h], "style" === h && "object" === typeof a ? I(a, f.style) : he[h] || f.setAttribute(h, String(a));
            (h = e && e.beforeNode || null) || e && e.dontclear || ac(b);
            b.insertBefore(f, h);
            f = h ? h.previousSibling : b.lastChild;
            c.allowtransparency && (f.allowTransparency = !0);
            return f
        };
    var le = /^:[\w]+$/,
        me = /:([a-zA-Z_]+):/g,
        ne = function() {
            var a = hd() || "0",
                b = id();
            var c = hd() || a;
            var d = id(),
                e = "";
            c && (e += "u/" + encodeURIComponent(String(c)) + "/");
            d && (e += "b/" + encodeURIComponent(String(d)) + "/");
            c = e || null;
            (e = (d = !1 === W("isLoggedIn")) ? "_/im/" : "") && (c = "");
            var f = W("iframes/:socialhost:"),
                g = W("iframes/:im_socialhost:");
            return Vb = {
                socialhost: f,
                ctx_socialhost: d ? g : f,
                session_index: a,
                session_delegate: b,
                session_prefix: c,
                im_prefix: e
            }
        },
        oe = function(a, b) {
            return ne()[b] || ""
        },
        pe = function(a) {
            return function(b,
                c) {
                return a ? ne()[c] || a[c] || "" : ne()[c] || ""
            }
        };
    var qe = function(a) {
            var b;
            a.match(/^https?%3A/i) && (b = decodeURIComponent(a));
            a = b ? b : a;
            return Tb(document, a)
        },
        re = function(a) {
            a = a || "canonical";
            for (var b = document.getElementsByTagName("link"), c = 0, d = b.length; c < d; c++) {
                var e = b[c],
                    f = e.getAttribute("rel");
                if (f && f.toLowerCase() == a && (e = e.getAttribute("href")) && (e = qe(e)) && null != e.match(/^https?:\/\/[\w\-_\.]+/i)) return e
            }
            return window.location.href
        };
    var se = {
            se: "0"
        },
        te = {
            post: !0
        },
        ue = {
            style: "position:absolute;top:-10000px;width:450px;margin:0px;border-style:none"
        },
        ve = "onPlusOne _ready _close _open _resizeMe _renderstart oncircled drefresh erefresh".split(" "),
        we = E(O, "WI", F()),
        xe = function(a, b, c) {
            var d;
            var e = {};
            var f = d = a;
            "plus" == a && b.action && (d = a + "_" + b.action, f = a + "/" + b.action);
            (d = U("iframes/" + d + "/url")) || (d = ":im_socialhost:/:session_prefix::im_prefix:_/widget/render/" + f + "?usegapi=1");
            for (var g in se) e[g] = g + "/" + (b[g] || se[g]) + "/";
            e = Tb(D, d.replace(me,
                pe(e)));
            g = "iframes/" + a + "/params/";
            f = {};
            I(b, f);
            (d = U("lang") || U("gwidget/lang")) && (f.hl = d);
            te[a] || (f.origin = window.location.origin || window.location.protocol + "//" + window.location.host);
            f.exp = U(g + "exp");
            if (g = U(g + "location"))
                for (d = 0; d < g.length; d++) {
                    var k = g[d];
                    f[k] = C.location[k]
                }
            switch (a) {
                case "plus":
                case "follow":
                    g = f.href;
                    d = b.action ? void 0 : "publisher";
                    g = (g = "string" == typeof g ? g : void 0) ? qe(g) : re(d);
                    f.url = g;
                    delete f.href;
                    break;
                case "plusone":
                    g = (g = b.href) ? qe(g) : re();
                    f.url = g;
                    g = b.db;
                    d = U();
                    null == g && d && (g = d.db,
                        null == g && (g = d.gwidget && d.gwidget.db));
                    f.db = g || void 0;
                    g = b.ecp;
                    d = U();
                    null == g && d && (g = d.ecp, null == g && (g = d.gwidget && d.gwidget.ecp));
                    f.ecp = g || void 0;
                    delete f.href;
                    break;
                case "signin":
                    f.url = re()
            }
            O.ILI && (f.iloader = "1");
            delete f["data-onload"];
            delete f.rd;
            for (var h in se) f[h] && delete f[h];
            f.gsrc = U("iframes/:source:");
            h = U("inline/css");
            "undefined" !== typeof h && 0 < c && h >= c && (f.ic = "1");
            h = /^#|^fr-/;
            c = {};
            for (var l in f) G(f, l) && h.test(l) && (c[l.replace(h, "")] = f[l], delete f[l]);
            l = "q" == U("iframes/" + a + "/params/si") ? f :
                c;
            h = Yc();
            for (var n in h) !G(h, n) || G(f, n) || G(c, n) || (l[n] = h[n]);
            n = [].concat(ve);
            (l = U("iframes/" + a + "/methods")) && "object" === typeof l && yb.test(l.push) && (n = n.concat(l));
            for (var p in b) G(b, p) && /^on/.test(p) && ("plus" != a || "onconnect" != p) && (n.push(p), delete f[p]);
            delete f.callback;
            c._methods = n.join(",");
            return Rb(e, f, c)
        },
        ye = ["style", "data-gapiscan"],
        Ae = function(a) {
            for (var b = F(), c = 0 != a.nodeName.toLowerCase().indexOf("g:"), d = a.attributes.length, e = 0; e < d; e++) {
                var f = a.attributes[e],
                    g = f.name,
                    k = f.value;
                0 <= zb.call(ye,
                    g) || c && 0 != g.indexOf("data-") || "null" === k || "specified" in f && !f.specified || (c && (g = g.substr(5)), b[g.toLowerCase()] = k)
            }
            a = a.style;
            (c = ze(a && a.height)) && (b.height = String(c));
            (a = ze(a && a.width)) && (b.width = String(a));
            return b
        },
        ze = function(a) {
            var b = void 0;
            "number" === typeof a ? b = a : "string" === typeof a && (b = parseInt(a, 10));
            return b
        },
        De = function() {
            var a = O.drw;
            dd(function(b) {
                if (a !== b.id && 4 != b.state && "share" != b.type) {
                    var c = b.id,
                        d = b.type,
                        e = b.url;
                    b = b.userParams;
                    var f = D.getElementById(c);
                    if (f) {
                        var g = xe(d, b, 0);
                        g ? (f = f.parentNode,
                            Be(e) !== Be(g) && (b.dontclear = !0, b.rd = !0, b.ri = !0, b.type = d, Ce(f, b), (d = V[f.lastChild.id]) && (d.oid = c), ed(c, 4))) : delete V[c]
                    } else delete V[c]
                }
            })
        },
        Be = function(a) {
            var b = RegExp("(\\?|&)ic=1");
            return a.replace(/#.*/, "").replace(b, "")
        };
    var jb = fa(["data-"]),
        Ee, Fe, Ge, He, Ie, Je = /(?:^|\s)g-((\S)*)(?:$|\s)/,
        Ke = {
            plusone: !0,
            autocomplete: !0,
            profile: !0,
            signin: !0,
            signin2: !0
        };
    Ee = E(O, "SW", F());
    Fe = E(O, "SA", F());
    Ge = E(O, "SM", F());
    He = E(O, "FW", []);
    Ie = null;
    var Le = function(a, b) {
            return ("string" === typeof a ? document.getElementById(a) : a) || b
        },
        Ne = function(a, b) {
            Me(void 0, !1, a, b)
        },
        Me = function(a, b, c, d) {
            P("ps0", !0);
            c = Le(c, D);
            var e = D.documentMode;
            if (c.querySelectorAll && (!e || 8 < e)) {
                e = d ? [d] : Hb(Ee).concat(Hb(Fe)).concat(Hb(Ge));
                for (var f = [], g = 0; g < e.length; g++) {
                    var k = e[g];
                    f.push(".g-" + k, "g\\:" + k)
                }
                e = c.querySelectorAll(f.join(","))
            } else e = c.getElementsByTagName("*");
            c = F();
            for (f = 0; f < e.length; f++) {
                g = e[f];
                var h = g;
                k = d;
                var l = h.nodeName.toLowerCase(),
                    n = void 0;
                if (h.hasAttribute("data-gapiscan")) k =
                    null;
                else {
                    var p = l.indexOf("g:");
                    0 == p ? n = l.substr(2) : (p = (p = String(h.className || h.getAttribute("class"))) && Je.exec(p)) && (n = p[1]);
                    k = !n || !(Ee[n] || Fe[n] || Ge[n]) || k && n !== k ? null : n
                }
                k && (Ke[k] || 0 == g.nodeName.toLowerCase().indexOf("g:") || 0 != Hb(Ae(g)).length) && (pb(g), E(c, k, []).push(g))
            }
            if (b)
                for (var q in c)
                    for (b = c[q], d = 0; d < b.length; d++) b[d].setAttribute("data-onload", !0);
            for (var B in c) He.push(B);
            P("ps1", !0);
            if ((q = He.join(":")) || a) try {
                K.load(q, a)
            } catch (v) {
                ad.log(v);
                return
            }
            if (Oe(Ie || {}))
                for (var x in c) {
                    a = c[x];
                    B =
                        0;
                    for (b = a.length; B < b; B++) a[B].removeAttribute("data-gapiscan");
                    Pe(x)
                } else {
                    d = [];
                    for (x in c)
                        for (a = c[x], B = 0, b = a.length; B < b; B++) e = a[B], Qe(x, e, Ae(e), d, b);
                    Re(q, d)
                }
        },
        Se = function(a) {
            var b = E(K, a, {});
            b.go || (b.go = function(c) {
                return Ne(c, a)
            }, b.render = function(c, d) {
                d = d || {};
                d.type = a;
                return Ce(c, d)
            })
        },
        Te = function(a) {
            Ee[a] = !0
        },
        Ue = function(a) {
            Fe[a] = !0
        },
        Ve = function(a) {
            Ge[a] = !0
        };
    var Pe = function(a, b) {
            var c = ec(a);
            b && c ? (c(b), (c = b.iframeNode) && c.setAttribute("data-gapiattached", !0)) : K.load(a, function() {
                var d = ec(a),
                    e = b && b.iframeNode,
                    f = b && b.userParams;
                e && d ? (d(b), e.setAttribute("data-gapiattached", !0)) : (d = K[a].go, "signin2" == a ? d(e, f) : d(e && e.parentNode, f))
            })
        },
        Oe = function() {
            return !1
        },
        Re = function() {},
        Qe = function(a, b, c, d, e, f) {
            switch (We(b, a, f)) {
                case 0:
                    a = Ge[a] ? a + "_annotation" : a;
                    d = {};
                    d.iframeNode = b;
                    d.userParams = c;
                    Pe(a, d);
                    break;
                case 1:
                    if (b.parentNode) {
                        for (var g in c) {
                            if (f = G(c, g)) f = c[g],
                                f = !!f && "object" === typeof f && (!f.toString || f.toString === Object.prototype.toString || f.toString === Array.prototype.toString);
                            if (f) try {
                                c[g] = Nd(c[g])
                            } catch (H) {
                                delete c[g]
                            }
                        }
                        var k = !0;
                        c.dontclear && (k = !1);
                        delete c.dontclear;
                        cd();
                        f = xe(a, c, e);
                        g = {
                            allowPost: 1,
                            attributes: ue
                        };
                        g.dontclear = !k;
                        e = {};
                        e.userParams = c;
                        e.url = f;
                        e.type = a;
                        if (c.rd) var h = b;
                        else h = document.createElement("div"), b.dataset.gapistub = !0, h.style.cssText = "position:absolute;width:450px;left:-10000px;", b.parentNode.insertBefore(h, b);
                        e.siteElement = h;
                        h.id ||
                            (b = h, E(we, a, 0), k = "___" + a + "_" + we[a]++, b.id = k);
                        b = F();
                        b[">type"] = a;
                        I(c, b);
                        k = f;
                        c = h;
                        f = g || {};
                        b = f.attributes || {};
                        J(!(f.allowPost || f.forcePost) || !b.onload, "onload is not supported by post iframe (allowPost or forcePost)");
                        g = b = k;
                        le.test(b) && (g = W("iframes/" + g.substring(1) + "/url"), J(!!g, "Unknown iframe url config for - " + b));
                        k = Tb(D, g.replace(me, oe));
                        b = c.ownerDocument || D;
                        h = 0;
                        do g = f.id || ["I", ie++, "_", (new Date).getTime()].join(""); while (b.getElementById(g) && 5 > ++h);
                        J(5 > h, "Error creating iframe id");
                        h = {};
                        var l = {};
                        b.documentMode && 9 > b.documentMode && (h.hostiemode = b.documentMode);
                        I(f.queryParams || {}, h);
                        I(f.fragmentParams || {}, l);
                        var n = f.pfname;
                        var p = F();
                        W("iframes/dropLegacyIdParam") || (p.id = g);
                        p._gfid = g;
                        p.parent = b.location.protocol + "//" + b.location.host;
                        var q = N(b.location.href, "parent");
                        n = n || "";
                        !n && q && (q = N(b.location.href, "_gfid", "") || N(b.location.href, "id", ""), n = N(b.location.href, "pfname", ""), n = q ? n + "/" + q : "");
                        n || (q = Md(N(b.location.href, "jcp", ""))) && "object" == typeof q && (n = (n = q.id) ? q.pfname + "/" + n : "");
                        p.pfname =
                            n;
                        f.connectWithJsonParam && (q = {}, q.jcp = Nd(p), p = q);
                        q = N(k, "rpctoken") || h.rpctoken || l.rpctoken;
                        if (!q) {
                            if (!(q = f.rpctoken)) {
                                q = String;
                                n = Math;
                                var B = n.round;
                                if (Vd) {
                                    var x = new C.Uint32Array(1);
                                    Ud.getRandomValues(x);
                                    x = Number("0." + x[0])
                                } else x = Yd, x += parseInt($d.substr(0, 20), 16), $d = be($d), x /= Zd + Math.pow(16, 20);
                                q = q(B.call(n, 1E8 * x))
                            }
                            p.rpctoken = q
                        }
                        f.rpctoken = q;
                        I(p, f.connectWithQueryParams ? h : l);
                        q = b.location.href;
                        p = F();
                        (n = N(q, "_bsh", O.bsh)) && (p._bsh = n);
                        (q = cc(q)) && (p.jsh = q);
                        f.hintInFragment ? I(p, l) : I(p, h);
                        k = Rb(k, h, l, f.paramsSerializer);
                        l = F();
                        I(ge, l);
                        I(f.attributes, l);
                        l.name = l.id = g;
                        l.src = k;
                        f.eurl = k;
                        h = f || {};
                        p = !!h.allowPost;
                        if (h.forcePost || p && 2E3 < k.length) {
                            h = Ob(k);
                            l.src = "";
                            f.dropDataPostorigin || (l["data-postorigin"] = k);
                            k = ke(b, c, l, g);
                            if (-1 != navigator.userAgent.indexOf("WebKit")) {
                                var v = k.contentWindow.document;
                                v.open();
                                l = v.createElement("div");
                                p = {};
                                q = g + "_inner";
                                p.name = q;
                                p.src = "";
                                p.style = "display:none";
                                ke(b, l, p, q, f)
                            }
                            l = (f = h.query[0]) ? f.split("&") : [];
                            f = [];
                            for (p = 0; p < l.length; p++) q = l[p].split("=", 2), f.push([decodeURIComponent(q[0]), decodeURIComponent(q[1])]);
                            h.query = [];
                            l = Pb(h);
                            J(Ub.test(l), "Invalid URL: " + l);
                            h = b.createElement("form");
                            h.method = "POST";
                            h.target = g;
                            h.style.display = "none";
                            g = lb(l);
                            void 0 !== g && (h.action = g);
                            for (g = 0; g < f.length; g++) l = b.createElement("input"), l.type = "hidden", l.name = f[g][0], l.value = f[g][1], h.appendChild(l);
                            c.appendChild(h);
                            h.submit();
                            h.parentNode.removeChild(h);
                            v && v.close();
                            v = k
                        } else v = ke(b, c, l, g, f);
                        e.iframeNode = v;
                        e.id = v.getAttribute("id");
                        v = e.id;
                        c = F();
                        c.id = v;
                        c.userParams = e.userParams;
                        c.url = e.url;
                        c.type = e.type;
                        c.state = 1;
                        V[v] = c;
                        v = e
                    } else v =
                        null;
                    v && ((e = v.id) && d.push(e), Pe(a, v))
            }
        },
        We = function(a, b, c) {
            if (a && 1 === a.nodeType && b) {
                if (c) return 1;
                if (Ge[b]) {
                    if (bc[a.nodeName.toLowerCase()]) return (a = a.innerHTML) && a.replace(/^[\s\xa0]+|[\s\xa0]+$/g, "") ? 0 : 1
                } else {
                    if (Fe[b]) return 0;
                    if (Ee[b]) return 1
                }
            }
            return null
        },
        Ce = function(a, b) {
            var c = b.type;
            delete b.type;
            var d = Le(a);
            if (d) {
                a = {};
                for (var e in b) G(b, e) && (a[e.toLowerCase()] = b[e]);
                a.rd = 1;
                (b = !!a.ri) && delete a.ri;
                e = [];
                Qe(c, d, a, e, 0, b);
                Re(c, e)
            } else ad.log("string" === "gapi." + c + ".render: missing element " + typeof a ?
                a : "")
        };
    E(K, "platform", {}).go = Ne;
    Oe = function(a) {
        for (var b = ["_c", "jsl", "h"], c = 0; c < b.length && a; c++) a = a[b[c]];
        b = cc(wb.href);
        return !a || 0 != a.indexOf("n;") && 0 != b.indexOf("n;") && a !== b
    };
    Re = function(a, b) {
        Xe(a, b)
    };
    var Yb = function(a) {
            Me(a, !0)
        },
        Ye = function(a, b) {
            b = b || [];
            for (var c = 0; c < b.length; ++c) a(b[c]);
            for (a = 0; a < b.length; a++) Se(b[a])
        };
    Q.push(["platform", function(a, b, c) {
        Ie = c;
        (b || c.features) && He.push(b || c.features.join(":"));
        Ye(Te, a);
        Ye(Ue, c._c.annotation);
        Ye(Ve, c._c.bimodal);
        Uc();
        Sc();
        if ("explicit" != U("parsetags")) {
            dc(a);
            Zc(Yc()) && !U("disableRealtimeCallback") && cd();
            if (c && (a = c.callback)) {
                var d = Ib(a);
                delete c.callback
            }
            $b(function() {
                Yb(d)
            })
        }
    }]);
    K._pl = !0;
    var Ze = function(a) {
        a = (a = V[a]) ? a.oid : void 0;
        if (a) {
            var b = D.getElementById(a);
            b && b.parentNode.removeChild(b);
            delete V[a];
            Ze(a)
        }
    };
    var $e = /^\{h:'/,
        af = /^!_/,
        bf = "",
        Xe = function(a, b) {
            function c() {
                Wb("message", d, "remove", "de")
            }

            function d(f) {
                var g = f.data,
                    k = f.origin;
                if (cf(g, b)) {
                    var h = e;
                    e = !1;
                    h && P("rqe");
                    df(a, function() {
                        h && P("rqd");
                        c();
                        for (var l = E(O, "RPMQ", []), n = 0; n < l.length; n++) l[n]({
                            data: g,
                            origin: k
                        })
                    })
                }
            }
            if (0 !== b.length) {
                bf = N(wb.href, "pfname", "");
                var e = !0;
                Wb("message", d, "add", "at");
                Lc(a, c)
            }
        },
        cf = function(a, b) {
            a = String(a);
            if ($e.test(a)) return !0;
            var c = !1;
            af.test(a) && (c = !0, a = a.substr(2));
            if (!/^\{/.test(a)) return !1;
            var d = Md(a);
            if (!d) return !1;
            a = d.f;
            if (d.s && a && -1 != zb.call(b, a)) {
                if ("_renderstart" === d.s || d.s === bf + "/" + a + "::_renderstart")
                    if (d = d.a && d.a[c ? 0 : 1], b = D.getElementById(a), ed(a, 2), d && b && (c = b.parentNode, d.width && d.height)) {
                        a: {
                            a = d || {};
                            if (bd()) {
                                var e = b.id;
                                if (e) {
                                    d = (d = V[e]) ? d.state : void 0;
                                    if (1 === d || 4 === d) break a;
                                    Ze(e)
                                }
                            }(d = c.nextSibling) && d.dataset && d.dataset.gapistub && (c.parentNode.removeChild(d), c.style.cssText = "");d = a.width;
                            var f = a.height,
                                g = c.style;g.textIndent = "0";g.margin = "0";g.padding = "0";g.background = "transparent";g.borderStyle = "none";
                            g.cssFloat = "none";g.styleFloat = "none";g.lineHeight = "normal";g.fontSize = "1px";g.verticalAlign = "baseline";c = c.style;c.display = "inline-block";g = b.style;g.position = "static";g.left = "0";g.top = "0";g.visibility = "visible";d && (c.width = g.width = d + "px");f && (c.height = g.height = f + "px");a.verticalAlign && (c.verticalAlign = a.verticalAlign);e && ed(e, 3)
                        }
                        b["data-csi-wdt"] = (new Date).getTime()
                    }
                return !0
            }
            return !1
        },
        df = function(a, b) {
            Lc(a, b)
        };
    var ef = function(a, b) {
        this.L = a;
        a = b || {};
        this.fa = Number(a.maxAge) || 0;
        this.R = a.domain;
        this.T = a.path;
        this.ia = !!a.secure
    };
    ef.prototype.read = function() {
        for (var a = this.L + "=", b = document.cookie.split(/;\s*/), c = 0; c < b.length; ++c) {
            var d = b[c];
            if (0 == d.indexOf(a)) return d.substr(a.length)
        }
    };
    ef.prototype.write = function(a, b) {
        if (!ff.test(this.L)) throw "Invalid cookie name";
        if (!gf.test(a)) throw "Invalid cookie value";
        a = this.L + "=" + a;
        this.R && (a += ";domain=" + this.R);
        this.T && (a += ";path=" + this.T);
        b = "number" === typeof b ? b : this.fa;
        if (0 <= b) {
            var c = new Date;
            c.setSeconds(c.getSeconds() + b);
            a += ";expires=" + c.toUTCString()
        }
        this.ia && (a += ";secure");
        document.cookie = a;
        return !0
    };
    ef.prototype.clear = function() {
        this.write("", 0)
    };
    var gf = /^[-+/_=.:|%&a-zA-Z0-9@]*$/,
        ff = /^[A-Z_][A-Z0-9_]{0,63}$/;
    ef.iterate = function(a) {
        for (var b = document.cookie.split(/;\s*/), c = 0; c < b.length; ++c) {
            var d = b[c].split("="),
                e = d.shift();
            a(e, d.join("="))
        }
    };
    var hf = function(a) {
        this.D = a
    };
    hf.prototype.read = function() {
        if (Z.hasOwnProperty(this.D)) return Z[this.D]
    };
    hf.prototype.write = function(a) {
        Z[this.D] = a;
        return !0
    };
    hf.prototype.clear = function() {
        delete Z[this.D]
    };
    var Z = {};
    hf.iterate = function(a) {
        for (var b in Z) Z.hasOwnProperty(b) && a(b, Z[b])
    };
    var jf = "https:" === window.location.protocol,
        kf = jf || "http:" === window.location.protocol ? ef : hf,
        lf = function(a) {
            var b = a.substr(1),
                c = "",
                d = window.location.hostname;
            if ("" !== b) {
                c = parseInt(b, 10);
                if (isNaN(c)) return null;
                b = d.split(".");
                if (b.length < c - 1) return null;
                b.length == c - 1 && (d = "." + d)
            } else d = "";
            return {
                l: "S" == a.charAt(0),
                domain: d,
                o: c
            }
        },
        mf = function() {
            var a, b = null;
            kf.iterate(function(c, d) {
                0 === c.indexOf("G_AUTHUSER_") && (c = lf(c.substring(11)), !a || c.l && !a.l || c.l == a.l && c.o > a.o) && (a = c, b = d)
            });
            return {
                da: a,
                H: b
            }
        };

    function nf(a) {
        if (0 !== a.indexOf("GCSC")) return null;
        var b = {
            S: !1
        };
        a = a.substr(4);
        if (!a) return b;
        var c = a.charAt(0);
        a = a.substr(1);
        var d = a.lastIndexOf("_");
        if (-1 == d) return b;
        var e = lf(a.substr(d + 1));
        if (null == e) return b;
        a = a.substring(0, d);
        if ("_" !== a.charAt(0)) return b;
        d = "E" === c && e.l;
        return !d && ("U" !== c || e.l) || d && !jf ? b : {
            S: !0,
            l: d,
            na: a.substr(1),
            domain: e.domain,
            o: e.o
        }
    }
    var of = function(a) {
        if (!a) return [];
        a = a.split("=");
        return a[1] ? a[1].split("|") : []
    }, pf = function(a) {
        a = a.split(":");
        return {
            clientId: a[0].split("=")[1],
            ka: of (a[1]),
            qa: of (a[2]),
            pa: of (a[3])
        }
    }, qf = function() {
        var a = mf(),
            b = a.da;
        a = a.H;
        if (null !== a) {
            var c;
            kf.iterate(function(f, g) {
                (f = nf(f)) && f.S && f.l == b.l && f.o == b.o && (c = g)
            });
            if (c) {
                var d = pf(c),
                    e = d && d.ka[Number(a)];
                d = d && d.clientId;
                if (e) return {
                    H: a,
                    ja: e,
                    clientId: d
                }
            }
        }
        return null
    };
    var sf = function() {
        this.P = rf
    };
    m = sf.prototype;
    m.Z = function() {
        this.K || (this.A = 0, this.K = !0, this.U())
    };
    m.U = function() {
        this.K && (this.P() ? this.A = this.N : this.A = Math.min(2 * (this.A || this.N), 120), window.setTimeout(ya(this.U, this), 1E3 * this.A))
    };
    m.A = 0;
    m.N = 2;
    m.P = null;
    m.K = !1;
    var tf = null;
    bd = function() {
        return O.oa = !0
    };
    cd = function() {
        O.oa = !0;
        var a = qf();
        (a = a && a.H) && Tc("googleapis.config/sessionIndex", a);
        tf || (tf = E(O, "ss", new sf));
        a = tf;
        a.Z && a.Z()
    };
    var rf = function() {
        var a = qf(),
            b = a && a.ja || null,
            c = a && a.clientId;
        Lc("auth", {
            callback: function() {
                var d = C.gapi.auth,
                    e = {
                        client_id: c,
                        session_state: b
                    };
                d.checkSessionState(e, function(f) {
                    var g = e.session_state,
                        k = !!U("isLoggedIn");
                    f = U("debug/forceIm") ? !1 : g && f || !g && !f;
                    if (k = k !== f) Tc("isLoggedIn", f), cd(), De(), f || ((f = d.signOut) ? f() : (f = d.setToken) && f(null));
                    f = Yc();
                    var h = U("savedUserState");
                    g = d._guss(f.cookiepolicy);
                    h = h != g && "undefined" != typeof h;
                    Tc("savedUserState", g);
                    (k || h) && Zc(f) && !U("disableRealtimeCallback") && d._pimf(f, !0)
                })
            }
        });
        return !0
    };
    Q.unshift(["url", function(a, b, c) {
        !a || b && "" !== b || !a.endsWith(".js") || (a = a.substring(0, a.length - 3), b = a.lastIndexOf("/") + 1, b >= a.length || (a = a.substr(b).split(":").filter(function(d) {
            return !["api", "platform"].includes(d)
        }), c.features = a))
    }]);
    P("bs0", !0, window.gapi._bs);
    P("bs1", !0);
    delete window.gapi._bs;
    window.gapi.load("", {
        callback: window["gapi_onload"],
        _c: {
            url: "https://apis.google.com/js/platform.js",
            jsl: {
                ci: {
                    "oauth-flow": {
                        authUrl: "https://accounts.google.com/o/oauth2/auth",
                        proxyUrl: "https://accounts.google.com/o/oauth2/postmessageRelay",
                        disableOpt: !0,
                        idpIframeUrl: "https://accounts.google.com/o/oauth2/iframe",
                        usegapi: !1
                    },
                    debug: {
                        reportExceptionRate: 1,
                        forceIm: !1,
                        rethrowException: !0,
                        host: "https://apis.google.com"
                    },
                    enableMultilogin: !0,
                    "googleapis.config": {
                        auth: {
                            useFirstPartyAuthV2: !0
                        },
                        root: "https://content.googleapis.com",
                        "root-1p": "https://clients6.google.com"
                    },
                    inline: {
                        css: 1
                    },
                    disableRealtimeCallback: !1,
                    drive_share: {
                        skipInitCommand: !0
                    },
                    csi: {
                        rate: .01
                    },
                    client: {
                        cors: !1
                    },
                    signInDeprecation: {
                        rate: 0
                    },
                    include_granted_scopes: !0,
                    llang: "en",
                    iframes: {
                        youtube: {
                            params: {
                                location: ["search", "hash"]
                            },
                            url: ":socialhost:/:session_prefix:_/widget/render/youtube?usegapi=1",
                            methods: ["scroll", "openwindow"]
                        },
                        ytsubscribe: {
                            url: "https://www.youtube.com/subscribe_embed?usegapi=1"
                        },
                        plus_circle: {
                            params: {
                                url: ""
                            },
                            url: ":socialhost:/:session_prefix::se:_/widget/plus/circle?usegapi=1"
                        },
                        plus_share: {
                            params: {
                                url: ""
                            },
                            url: ":socialhost:/:session_prefix::se:_/+1/sharebutton?plusShare=true&usegapi=1"
                        },
                        rbr_s: {
                            params: {
                                url: ""
                            },
                            url: ":socialhost:/:session_prefix::se:_/widget/render/recobarsimplescroller"
                        },
                        ":source:": "3p",
                        playemm: {
                            url: "https://play.google.com/work/embedded/search?usegapi=1&usegapi=1"
                        },
                        savetoandroidpay: {
                            url: "https://pay.google.com/gp/v/widget/save"
                        },
                        blogger: {
                            params: {
                                location: ["search", "hash"]
                            },
                            url: ":socialhost:/:session_prefix:_/widget/render/blogger?usegapi=1",
                            methods: ["scroll", "openwindow"]
                        },
                        evwidget: {
                            params: {
                                url: ""
                            },
                            url: ":socialhost:/:session_prefix:_/events/widget?usegapi=1"
                        },
                        partnersbadge: {
                            url: "https://www.gstatic.com/partners/badge/templates/badge.html?usegapi=1"
                        },
                        dataconnector: {
                            url: "https://dataconnector.corp.google.com/:session_prefix:ui/widgetview?usegapi=1"
                        },
                        surveyoptin: {
                            url: "https://www.google.com/shopping/customerreviews/optin?usegapi=1"
                        },
                        ":socialhost:": "https://apis.google.com",
                        shortlists: {
                            url: ""
                        },
                        hangout: {
                            url: "https://talkgadget.google.com/:session_prefix:talkgadget/_/widget"
                        },
                        plus_followers: {
                            params: {
                                url: ""
                            },
                            url: ":socialhost:/_/im/_/widget/render/plus/followers?usegapi=1"
                        },
                        post: {
                            params: {
                                url: ""
                            },
                            url: ":socialhost:/:session_prefix::im_prefix:_/widget/render/post?usegapi=1"
                        },
                        signin: {
                            params: {
                                url: ""
                            },
                            url: ":socialhost:/:session_prefix:_/widget/render/signin?usegapi=1",
                            methods: ["onauth"]
                        },
                        rbr_i: {
                            params: {
                                url: ""
                            },
                            url: ":socialhost:/:session_prefix::se:_/widget/render/recobarinvitation"
                        },
                        share: {
                            url: ":socialhost:/:session_prefix::im_prefix:_/widget/render/share?usegapi=1"
                        },
                        plusone: {
                            params: {
                                count: "",
                                size: "",
                                url: ""
                            },
                            url: ":socialhost:/:session_prefix::se:_/+1/fastbutton?usegapi=1"
                        },
                        comments: {
                            params: {
                                location: ["search", "hash"]
                            },
                            url: ":socialhost:/:session_prefix:_/widget/render/comments?usegapi=1",
                            methods: ["scroll", "openwindow"]
                        },
                        ":im_socialhost:": "https://plus.googleapis.com",
                        backdrop: {
                            url: "https://clients3.google.com/cast/chromecast/home/widget/backdrop?usegapi=1"
                        },
                        visibility: {
                            params: {
                                url: ""
                            },
                            url: ":socialhost:/:session_prefix:_/widget/render/visibility?usegapi=1"
                        },
                        autocomplete: {
                            params: {
                                url: ""
                            },
                            url: ":socialhost:/:session_prefix:_/widget/render/autocomplete"
                        },
                        ":signuphost:": "https://plus.google.com",
                        ratingbadge: {
                            url: "https://www.google.com/shopping/customerreviews/badge?usegapi=1"
                        },
                        appcirclepicker: {
                            url: ":socialhost:/:session_prefix:_/widget/render/appcirclepicker"
                        },
                        follow: {
                            url: ":socialhost:/:session_prefix:_/widget/render/follow?usegapi=1"
                        },
                        community: {
                            url: ":ctx_socialhost:/:session_prefix::im_prefix:_/widget/render/community?usegapi=1"
                        },
                        sharetoclassroom: {
                            url: "https://classroom.google.com/sharewidget?usegapi=1"
                        },
                        ytshare: {
                            params: {
                                url: ""
                            },
                            url: ":socialhost:/:session_prefix:_/widget/render/ytshare?usegapi=1"
                        },
                        plus: {
                            url: ":socialhost:/:session_prefix:_/widget/render/badge?usegapi=1"
                        },
                        family_creation: {
                            params: {
                                url: ""
                            },
                            url: "https://families.google.com/webcreation?usegapi=1&usegapi=1"
                        },
                        commentcount: {
                            url: ":socialhost:/:session_prefix:_/widget/render/commentcount?usegapi=1"
                        },
                        configurator: {
                            url: ":socialhost:/:session_prefix:_/plusbuttonconfigurator?usegapi=1"
                        },
                        zoomableimage: {
                            url: "https://ssl.gstatic.com/microscope/embed/"
                        },
                        appfinder: {
                            url: "https://workspace.google.com/:session_prefix:marketplace/appfinder?usegapi=1"
                        },
                        savetowallet: {
                            url: "https://pay.google.com/gp/v/widget/save"
                        },
                        person: {
                            url: ":socialhost:/:session_prefix:_/widget/render/person?usegapi=1"
                        },
                        savetodrive: {
                            url: "https://drive.google.com/savetodrivebutton?usegapi=1",
                            methods: ["save"]
                        },
                        page: {
                            url: ":socialhost:/:session_prefix:_/widget/render/page?usegapi=1"
                        },
                        card: {
                            url: ":socialhost:/:session_prefix:_/hovercard/card"
                        }
                    }
                },
                h: "m;/_/scs/abc-static/_/js/k=gapi.lb.en.5BIk7BglYEE.O/am=AAAC/d=1/rs=AHpOoo9V8V9Op_7rn4BCy9pIOBNUyU2IjA/m=__features__",
                u: "https://apis.google.com/js/platform.js",
                hee: !0,
                dpo: !1,
                le: ["scs"],
                glrp: false
            },
            platform: "backdrop blogger comments commentcount community donation family_creation follow hangout health page partnersbadge person playemm playreview plus plusone post ratingbadge savetoandroidpay savetodrive savetowallet sharetoclassroom shortlists signin2 surveyoptin visibility youtube ytsubscribe zoomableimage".split(" "),
            annotation: ["interactivepost", "recobar", "signin2", "autocomplete"]
        }
    });
}).call(this);