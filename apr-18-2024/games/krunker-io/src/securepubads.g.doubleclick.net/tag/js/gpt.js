! function() {
    "use strict";
    const e = function() {}.bind(),
        t = function() {
            return this
        },
        n = function() {
            return null
        },
        i = function() {
            return []
        },
        r = function() {
            return ""
        },
        o = {
            addEventListener: t,
            enableSyncLoading: e,
            setRefreshUnfilledSlots: e
        },
        s = {
            addEventListener: t,
            setContent: e
        },
        a = function() {};
    let g = a.prototype;
    g.display = e, g.get = n, g.set = t, g.setClickUrl = t, g.setTagForChildDirectedTreatment = t, g.setTargeting = t, g.updateTargetingFromMap = t;
    const d = {
            addEventListener: t,
            clear: e,
            clearCategoryExclusions: t,
            clearTagForChildDirectedTreatment: t,
            clearTargeting: t,
            collapseEmptyDivs: e,
            defineOutOfPagePassback: function() {
                return new a
            },
            definePassback: function() {
                return new a
            },
            disableInitialLoad: e,
            display: e,
            enableAsyncRendering: e,
            enableLazyLoad: e,
            enableSingleRequest: e,
            enableSyncRendering: e,
            enableVideoAds: e,
            get: n,
            getAttributeKeys: i,
            getTargeting: i,
            getTargetingKeys: i,
            getSlots: i,
            refresh: e,
            removeEventListener: e,
            set: t,
            setCategoryExclusion: t,
            setCentering: e,
            setCookieOptions: t,
            setForceSafeFrame: t,
            setLocation: t,
            setPublisherProvidedId: t,
            setPrivacySettings: t,
            setRequestNonPersonalizedAds: t,
            setSafeFrameConfig: t,
            setTagForChildDirectedTreatment: t,
            setTargeting: t,
            setVideoContent: t,
            updateCorrelator: e
        },
        l = function() {};
    g = l.prototype, g.addSize = t, g.build = n;
    const c = function() {};
    g = c.prototype, g.addService = t, g.clearCategoryExclusions = t, g.clearTargeting = t, g.defineSizeMapping = t, g.get = n, g.getAdUnitPath = i, g.getAttributeKeys = i, g.getCategoryExclusions = i, g.getDomId = r, g.getResponseInformation = n, g.getSlotElementId = r, g.getSlotId = t, g.getTargeting = i, g.getTargetingKeys = i, g.set = t, g.setCategoryExclusion = t, g.setClickUrl = t, g.setCollapseEmptyDiv = t, g.setTargeting = t, g.updateTargetingFromMap = t;
    const u = window.googletag || {},
        f = u.cmd || [];
    for (u.apiReady = !0, u.cmd = [], u.cmd.push = function(e) {
            try {
                e()
            } catch (e) {}
            return 1
        }, u.companionAds = function() {
            return o
        }, u.content = function() {
            return s
        }, u.defineOutOfPageSlot = function() {
            return new c
        }, u.defineSlot = function() {
            return new c
        }, u.destroySlots = e, u.disablePublisherConsole = e, u.display = e, u.enableServices = e, u.getVersion = r, u.pubads = function() {
            return d
        }, u.pubadsReady = !0, u.setAdIframeTitle = e, u.sizeMapping = function() {
            return new l
        }, window.googletag = u; 0 !== f.length;) u.cmd.push(f.shift())
}();