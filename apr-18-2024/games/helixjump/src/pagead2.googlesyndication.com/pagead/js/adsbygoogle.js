! function() {
    "use strict";
    const e = () => {
        window.adsbygoogle = {
            loaded: !0,
            push: function() {}
        };
        const e = document.querySelectorAll(".adsbygoogle");
        for (let t = 0; t < e.length; t++) {
            const o = `aswift_${t}`;
            if (null !== document.querySelector(`iframe#${o}`)) continue;
            const n = document.createElement("iframe");
            n.id = o, n.style = "height:1px!important;max-height:1px!important;max-width:1px!important;width:1px!important;";
            const d = document.createElement("iframe");
            d.id = `google_ads_frame${t}`, n.appendChild(d), e[t].appendChild(n)
        }
    };
    0 === document.querySelectorAll(".adsbygoogle").length && "loading" === document.readyState ? window.addEventListener("DOMContentLoaded", e, {
        once: !0
    }) : e()
}();