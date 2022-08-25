var qt = { exports: {} };
/*! Hammer.JS - v2.0.7 - 2016-04-22
 * http://hammerjs.github.io/
 *
 * Copyright (c) 2016 Jorik Tangelder;
 * Licensed under the MIT license */
(function(e) {
  (function(r, i, o, s) {
    var l = ["", "webkit", "Moz", "MS", "ms", "o"], f = i.createElement("div"), v = "function", u = Math.round, C = Math.abs, g = Date.now;
    function p(t, n, a) {
      return setTimeout(E(t, a), n);
    }
    function I(t, n, a) {
      return Array.isArray(t) ? (_(t, a[n], a), !0) : !1;
    }
    function _(t, n, a) {
      var c;
      if (!!t)
        if (t.forEach)
          t.forEach(n, a);
        else if (t.length !== s)
          for (c = 0; c < t.length; )
            n.call(a, t[c], c, t), c++;
        else
          for (c in t)
            t.hasOwnProperty(c) && n.call(a, t[c], c, t);
    }
    function P(t, n, a) {
      var c = "DEPRECATED METHOD: " + n + `
` + a + ` AT 
`;
      return function() {
        var h = new Error("get-stack-trace"), d = h && h.stack ? h.stack.replace(/^[^\(]+?[\n$]/gm, "").replace(/^\s+at\s+/gm, "").replace(/^Object.<anonymous>\s*\(/gm, "{anonymous}()@") : "Unknown Stack Trace", O = r.console && (r.console.warn || r.console.log);
        return O && O.call(r.console, c, d), t.apply(this, arguments);
      };
    }
    var y;
    typeof Object.assign != "function" ? y = function(n) {
      if (n === s || n === null)
        throw new TypeError("Cannot convert undefined or null to object");
      for (var a = Object(n), c = 1; c < arguments.length; c++) {
        var h = arguments[c];
        if (h !== s && h !== null)
          for (var d in h)
            h.hasOwnProperty(d) && (a[d] = h[d]);
      }
      return a;
    } : y = Object.assign;
    var M = P(function(n, a, c) {
      for (var h = Object.keys(a), d = 0; d < h.length; )
        (!c || c && n[h[d]] === s) && (n[h[d]] = a[h[d]]), d++;
      return n;
    }, "extend", "Use `assign`."), S = P(function(n, a) {
      return M(n, a, !0);
    }, "merge", "Use `assign`.");
    function m(t, n, a) {
      var c = n.prototype, h;
      h = t.prototype = Object.create(c), h.constructor = t, h._super = c, a && y(h, a);
    }
    function E(t, n) {
      return function() {
        return t.apply(n, arguments);
      };
    }
    function L(t, n) {
      return typeof t == v ? t.apply(n && n[0] || s, n) : t;
    }
    function q(t, n) {
      return t === s ? n : t;
    }
    function b(t, n, a) {
      _(N(n), function(c) {
        t.addEventListener(c, a, !1);
      });
    }
    function Y(t, n, a) {
      _(N(n), function(c) {
        t.removeEventListener(c, a, !1);
      });
    }
    function ie(t, n) {
      for (; t; ) {
        if (t == n)
          return !0;
        t = t.parentNode;
      }
      return !1;
    }
    function k(t, n) {
      return t.indexOf(n) > -1;
    }
    function N(t) {
      return t.trim().split(/\s+/g);
    }
    function V(t, n, a) {
      if (t.indexOf && !a)
        return t.indexOf(n);
      for (var c = 0; c < t.length; ) {
        if (a && t[c][a] == n || !a && t[c] === n)
          return c;
        c++;
      }
      return -1;
    }
    function K(t) {
      return Array.prototype.slice.call(t, 0);
    }
    function F(t, n, a) {
      for (var c = [], h = [], d = 0; d < t.length; ) {
        var O = n ? t[d][n] : t[d];
        V(h, O) < 0 && c.push(t[d]), h[d] = O, d++;
      }
      return a && (n ? c = c.sort(function(w, U) {
        return w[n] > U[n];
      }) : c = c.sort()), c;
    }
    function ae(t, n) {
      for (var a, c, h = n[0].toUpperCase() + n.slice(1), d = 0; d < l.length; ) {
        if (a = l[d], c = a ? a + h : n, c in t)
          return c;
        d++;
      }
      return s;
    }
    var Te = 1;
    function Xe() {
      return Te++;
    }
    function $(t) {
      var n = t.ownerDocument || t;
      return n.defaultView || n.parentWindow || r;
    }
    var le = /mobile|tablet|ip(ad|hone|od)|android/i, se = "ontouchstart" in r, Se = ae(r, "PointerEvent") !== s, Le = se && le.test(navigator.userAgent), oe = "touch", fe = "pen", me = "mouse", ye = "kinect", Ge = 25, R = 1, he = 2, x = 4, H = 8, xe = 1, Ee = 2, Ie = 4, Ce = 8, Pe = 16, X = Ee | Ie, ve = Ce | Pe, yt = X | ve, Et = ["x", "y"], De = ["clientX", "clientY"];
    function W(t, n) {
      var a = this;
      this.manager = t, this.callback = n, this.element = t.element, this.target = t.options.inputTarget, this.domHandler = function(c) {
        L(t.options.enable, [t]) && a.handler(c);
      }, this.init();
    }
    W.prototype = {
      handler: function() {
      },
      init: function() {
        this.evEl && b(this.element, this.evEl, this.domHandler), this.evTarget && b(this.target, this.evTarget, this.domHandler), this.evWin && b($(this.element), this.evWin, this.domHandler);
      },
      destroy: function() {
        this.evEl && Y(this.element, this.evEl, this.domHandler), this.evTarget && Y(this.target, this.evTarget, this.domHandler), this.evWin && Y($(this.element), this.evWin, this.domHandler);
      }
    };
    function lr(t) {
      var n, a = t.options.inputClass;
      return a ? n = a : Se ? n = Qe : Le ? n = Ue : se ? n = Je : n = Re, new n(t, fr);
    }
    function fr(t, n, a) {
      var c = a.pointers.length, h = a.changedPointers.length, d = n & R && c - h === 0, O = n & (x | H) && c - h === 0;
      a.isFirst = !!d, a.isFinal = !!O, d && (t.session = {}), a.eventType = n, hr(t, a), t.emit("hammer.input", a), t.recognize(a), t.session.prevInput = a;
    }
    function hr(t, n) {
      var a = t.session, c = n.pointers, h = c.length;
      a.firstInput || (a.firstInput = It(n)), h > 1 && !a.firstMultiple ? a.firstMultiple = It(n) : h === 1 && (a.firstMultiple = !1);
      var d = a.firstInput, O = a.firstMultiple, D = O ? O.center : d.center, w = n.center = Ct(c);
      n.timeStamp = g(), n.deltaTime = n.timeStamp - d.timeStamp, n.angle = Ze(D, w), n.distance = we(D, w), vr(a, n), n.offsetDirection = Ot(n.deltaX, n.deltaY);
      var U = Pt(n.deltaTime, n.deltaX, n.deltaY);
      n.overallVelocityX = U.x, n.overallVelocityY = U.y, n.overallVelocity = C(U.x) > C(U.y) ? U.x : U.y, n.scale = O ? mr(O.pointers, c) : 1, n.rotation = O ? gr(O.pointers, c) : 0, n.maxPointers = a.prevInput ? n.pointers.length > a.prevInput.maxPointers ? n.pointers.length : a.prevInput.maxPointers : n.pointers.length, dr(a, n);
      var Z = t.element;
      ie(n.srcEvent.target, Z) && (Z = n.srcEvent.target), n.target = Z;
    }
    function vr(t, n) {
      var a = n.center, c = t.offsetDelta || {}, h = t.prevDelta || {}, d = t.prevInput || {};
      (n.eventType === R || d.eventType === x) && (h = t.prevDelta = {
        x: d.deltaX || 0,
        y: d.deltaY || 0
      }, c = t.offsetDelta = {
        x: a.x,
        y: a.y
      }), n.deltaX = h.x + (a.x - c.x), n.deltaY = h.y + (a.y - c.y);
    }
    function dr(t, n) {
      var a = t.lastInterval || n, c = n.timeStamp - a.timeStamp, h, d, O, D;
      if (n.eventType != H && (c > Ge || a.velocity === s)) {
        var w = n.deltaX - a.deltaX, U = n.deltaY - a.deltaY, Z = Pt(c, w, U);
        d = Z.x, O = Z.y, h = C(Z.x) > C(Z.y) ? Z.x : Z.y, D = Ot(w, U), t.lastInterval = n;
      } else
        h = a.velocity, d = a.velocityX, O = a.velocityY, D = a.direction;
      n.velocity = h, n.velocityX = d, n.velocityY = O, n.direction = D;
    }
    function It(t) {
      for (var n = [], a = 0; a < t.pointers.length; )
        n[a] = {
          clientX: u(t.pointers[a].clientX),
          clientY: u(t.pointers[a].clientY)
        }, a++;
      return {
        timeStamp: g(),
        pointers: n,
        center: Ct(n),
        deltaX: t.deltaX,
        deltaY: t.deltaY
      };
    }
    function Ct(t) {
      var n = t.length;
      if (n === 1)
        return {
          x: u(t[0].clientX),
          y: u(t[0].clientY)
        };
      for (var a = 0, c = 0, h = 0; h < n; )
        a += t[h].clientX, c += t[h].clientY, h++;
      return {
        x: u(a / n),
        y: u(c / n)
      };
    }
    function Pt(t, n, a) {
      return {
        x: n / t || 0,
        y: a / t || 0
      };
    }
    function Ot(t, n) {
      return t === n ? xe : C(t) >= C(n) ? t < 0 ? Ee : Ie : n < 0 ? Ce : Pe;
    }
    function we(t, n, a) {
      a || (a = Et);
      var c = n[a[0]] - t[a[0]], h = n[a[1]] - t[a[1]];
      return Math.sqrt(c * c + h * h);
    }
    function Ze(t, n, a) {
      a || (a = Et);
      var c = n[a[0]] - t[a[0]], h = n[a[1]] - t[a[1]];
      return Math.atan2(h, c) * 180 / Math.PI;
    }
    function gr(t, n) {
      return Ze(n[1], n[0], De) + Ze(t[1], t[0], De);
    }
    function mr(t, n) {
      return we(n[0], n[1], De) / we(t[0], t[1], De);
    }
    var pr = {
      mousedown: R,
      mousemove: he,
      mouseup: x
    }, Tr = "mousedown", yr = "mousemove mouseup";
    function Re() {
      this.evEl = Tr, this.evWin = yr, this.pressed = !1, W.apply(this, arguments);
    }
    m(Re, W, {
      handler: function(n) {
        var a = pr[n.type];
        a & R && n.button === 0 && (this.pressed = !0), a & he && n.which !== 1 && (a = x), this.pressed && (a & x && (this.pressed = !1), this.callback(this.manager, a, {
          pointers: [n],
          changedPointers: [n],
          pointerType: me,
          srcEvent: n
        }));
      }
    });
    var Er = {
      pointerdown: R,
      pointermove: he,
      pointerup: x,
      pointercancel: H,
      pointerout: H
    }, Ir = {
      2: oe,
      3: fe,
      4: me,
      5: ye
    }, _t = "pointerdown", At = "pointermove pointerup pointercancel";
    r.MSPointerEvent && !r.PointerEvent && (_t = "MSPointerDown", At = "MSPointerMove MSPointerUp MSPointerCancel");
    function Qe() {
      this.evEl = _t, this.evWin = At, W.apply(this, arguments), this.store = this.manager.session.pointerEvents = [];
    }
    m(Qe, W, {
      handler: function(n) {
        var a = this.store, c = !1, h = n.type.toLowerCase().replace("ms", ""), d = Er[h], O = Ir[n.pointerType] || n.pointerType, D = O == oe, w = V(a, n.pointerId, "pointerId");
        d & R && (n.button === 0 || D) ? w < 0 && (a.push(n), w = a.length - 1) : d & (x | H) && (c = !0), !(w < 0) && (a[w] = n, this.callback(this.manager, d, {
          pointers: a,
          changedPointers: [n],
          pointerType: O,
          srcEvent: n
        }), c && a.splice(w, 1));
      }
    });
    var Cr = {
      touchstart: R,
      touchmove: he,
      touchend: x,
      touchcancel: H
    }, Pr = "touchstart", Or = "touchstart touchmove touchend touchcancel";
    function bt() {
      this.evTarget = Pr, this.evWin = Or, this.started = !1, W.apply(this, arguments);
    }
    m(bt, W, {
      handler: function(n) {
        var a = Cr[n.type];
        if (a === R && (this.started = !0), !!this.started) {
          var c = _r.call(this, n, a);
          a & (x | H) && c[0].length - c[1].length === 0 && (this.started = !1), this.callback(this.manager, a, {
            pointers: c[0],
            changedPointers: c[1],
            pointerType: oe,
            srcEvent: n
          });
        }
      }
    });
    function _r(t, n) {
      var a = K(t.touches), c = K(t.changedTouches);
      return n & (x | H) && (a = F(a.concat(c), "identifier", !0)), [a, c];
    }
    var Ar = {
      touchstart: R,
      touchmove: he,
      touchend: x,
      touchcancel: H
    }, br = "touchstart touchmove touchend touchcancel";
    function Ue() {
      this.evTarget = br, this.targetIds = {}, W.apply(this, arguments);
    }
    m(Ue, W, {
      handler: function(n) {
        var a = Ar[n.type], c = Nr.call(this, n, a);
        !c || this.callback(this.manager, a, {
          pointers: c[0],
          changedPointers: c[1],
          pointerType: oe,
          srcEvent: n
        });
      }
    });
    function Nr(t, n) {
      var a = K(t.touches), c = this.targetIds;
      if (n & (R | he) && a.length === 1)
        return c[a[0].identifier] = !0, [a, a];
      var h, d, O = K(t.changedTouches), D = [], w = this.target;
      if (d = a.filter(function(U) {
        return ie(U.target, w);
      }), n === R)
        for (h = 0; h < d.length; )
          c[d[h].identifier] = !0, h++;
      for (h = 0; h < O.length; )
        c[O[h].identifier] && D.push(O[h]), n & (x | H) && delete c[O[h].identifier], h++;
      if (!!D.length)
        return [
          F(d.concat(D), "identifier", !0),
          D
        ];
    }
    var Mr = 2500, Nt = 25;
    function Je() {
      W.apply(this, arguments);
      var t = E(this.handler, this);
      this.touch = new Ue(this.manager, t), this.mouse = new Re(this.manager, t), this.primaryTouch = null, this.lastTouches = [];
    }
    m(Je, W, {
      handler: function(n, a, c) {
        var h = c.pointerType == oe, d = c.pointerType == me;
        if (!(d && c.sourceCapabilities && c.sourceCapabilities.firesTouchEvents)) {
          if (h)
            Sr.call(this, a, c);
          else if (d && Lr.call(this, c))
            return;
          this.callback(n, a, c);
        }
      },
      destroy: function() {
        this.touch.destroy(), this.mouse.destroy();
      }
    });
    function Sr(t, n) {
      t & R ? (this.primaryTouch = n.changedPointers[0].identifier, Mt.call(this, n)) : t & (x | H) && Mt.call(this, n);
    }
    function Mt(t) {
      var n = t.changedPointers[0];
      if (n.identifier === this.primaryTouch) {
        var a = { x: n.clientX, y: n.clientY };
        this.lastTouches.push(a);
        var c = this.lastTouches, h = function() {
          var d = c.indexOf(a);
          d > -1 && c.splice(d, 1);
        };
        setTimeout(h, Mr);
      }
    }
    function Lr(t) {
      for (var n = t.srcEvent.clientX, a = t.srcEvent.clientY, c = 0; c < this.lastTouches.length; c++) {
        var h = this.lastTouches[c], d = Math.abs(n - h.x), O = Math.abs(a - h.y);
        if (d <= Nt && O <= Nt)
          return !0;
      }
      return !1;
    }
    var St = ae(f.style, "touchAction"), Lt = St !== s, xt = "compute", Dt = "auto", Ke = "manipulation", de = "none", Oe = "pan-x", _e = "pan-y", ke = Dr();
    function $e(t, n) {
      this.manager = t, this.set(n);
    }
    $e.prototype = {
      set: function(t) {
        t == xt && (t = this.compute()), Lt && this.manager.element.style && ke[t] && (this.manager.element.style[St] = t), this.actions = t.toLowerCase().trim();
      },
      update: function() {
        this.set(this.manager.options.touchAction);
      },
      compute: function() {
        var t = [];
        return _(this.manager.recognizers, function(n) {
          L(n.options.enable, [n]) && (t = t.concat(n.getTouchAction()));
        }), xr(t.join(" "));
      },
      preventDefaults: function(t) {
        var n = t.srcEvent, a = t.offsetDirection;
        if (this.manager.session.prevented) {
          n.preventDefault();
          return;
        }
        var c = this.actions, h = k(c, de) && !ke[de], d = k(c, _e) && !ke[_e], O = k(c, Oe) && !ke[Oe];
        if (h) {
          var D = t.pointers.length === 1, w = t.distance < 2, U = t.deltaTime < 250;
          if (D && w && U)
            return;
        }
        if (!(O && d) && (h || d && a & X || O && a & ve))
          return this.preventSrc(n);
      },
      preventSrc: function(t) {
        this.manager.session.prevented = !0, t.preventDefault();
      }
    };
    function xr(t) {
      if (k(t, de))
        return de;
      var n = k(t, Oe), a = k(t, _e);
      return n && a ? de : n || a ? n ? Oe : _e : k(t, Ke) ? Ke : Dt;
    }
    function Dr() {
      if (!Lt)
        return !1;
      var t = {}, n = r.CSS && r.CSS.supports;
      return ["auto", "manipulation", "pan-y", "pan-x", "pan-x pan-y", "none"].forEach(function(a) {
        t[a] = n ? r.CSS.supports("touch-action", a) : !0;
      }), t;
    }
    var Fe = 1, B = 2, pe = 4, ue = 8, ee = ue, Ae = 16, G = 32;
    function te(t) {
      this.options = y({}, this.defaults, t || {}), this.id = Xe(), this.manager = null, this.options.enable = q(this.options.enable, !0), this.state = Fe, this.simultaneous = {}, this.requireFail = [];
    }
    te.prototype = {
      defaults: {},
      set: function(t) {
        return y(this.options, t), this.manager && this.manager.touchAction.update(), this;
      },
      recognizeWith: function(t) {
        if (I(t, "recognizeWith", this))
          return this;
        var n = this.simultaneous;
        return t = He(t, this), n[t.id] || (n[t.id] = t, t.recognizeWith(this)), this;
      },
      dropRecognizeWith: function(t) {
        return I(t, "dropRecognizeWith", this) ? this : (t = He(t, this), delete this.simultaneous[t.id], this);
      },
      requireFailure: function(t) {
        if (I(t, "requireFailure", this))
          return this;
        var n = this.requireFail;
        return t = He(t, this), V(n, t) === -1 && (n.push(t), t.requireFailure(this)), this;
      },
      dropRequireFailure: function(t) {
        if (I(t, "dropRequireFailure", this))
          return this;
        t = He(t, this);
        var n = V(this.requireFail, t);
        return n > -1 && this.requireFail.splice(n, 1), this;
      },
      hasRequireFailures: function() {
        return this.requireFail.length > 0;
      },
      canRecognizeWith: function(t) {
        return !!this.simultaneous[t.id];
      },
      emit: function(t) {
        var n = this, a = this.state;
        function c(h) {
          n.manager.emit(h, t);
        }
        a < ue && c(n.options.event + wt(a)), c(n.options.event), t.additionalEvent && c(t.additionalEvent), a >= ue && c(n.options.event + wt(a));
      },
      tryEmit: function(t) {
        if (this.canEmit())
          return this.emit(t);
        this.state = G;
      },
      canEmit: function() {
        for (var t = 0; t < this.requireFail.length; ) {
          if (!(this.requireFail[t].state & (G | Fe)))
            return !1;
          t++;
        }
        return !0;
      },
      recognize: function(t) {
        var n = y({}, t);
        if (!L(this.options.enable, [this, n])) {
          this.reset(), this.state = G;
          return;
        }
        this.state & (ee | Ae | G) && (this.state = Fe), this.state = this.process(n), this.state & (B | pe | ue | Ae) && this.tryEmit(n);
      },
      process: function(t) {
      },
      getTouchAction: function() {
      },
      reset: function() {
      }
    };
    function wt(t) {
      return t & Ae ? "cancel" : t & ue ? "end" : t & pe ? "move" : t & B ? "start" : "";
    }
    function Rt(t) {
      return t == Pe ? "down" : t == Ce ? "up" : t == Ee ? "left" : t == Ie ? "right" : "";
    }
    function He(t, n) {
      var a = n.manager;
      return a ? a.get(t) : t;
    }
    function j() {
      te.apply(this, arguments);
    }
    m(j, te, {
      defaults: {
        pointers: 1
      },
      attrTest: function(t) {
        var n = this.options.pointers;
        return n === 0 || t.pointers.length === n;
      },
      process: function(t) {
        var n = this.state, a = t.eventType, c = n & (B | pe), h = this.attrTest(t);
        return c && (a & H || !h) ? n | Ae : c || h ? a & x ? n | ue : n & B ? n | pe : B : G;
      }
    });
    function Ve() {
      j.apply(this, arguments), this.pX = null, this.pY = null;
    }
    m(Ve, j, {
      defaults: {
        event: "pan",
        threshold: 10,
        pointers: 1,
        direction: yt
      },
      getTouchAction: function() {
        var t = this.options.direction, n = [];
        return t & X && n.push(_e), t & ve && n.push(Oe), n;
      },
      directionTest: function(t) {
        var n = this.options, a = !0, c = t.distance, h = t.direction, d = t.deltaX, O = t.deltaY;
        return h & n.direction || (n.direction & X ? (h = d === 0 ? xe : d < 0 ? Ee : Ie, a = d != this.pX, c = Math.abs(t.deltaX)) : (h = O === 0 ? xe : O < 0 ? Ce : Pe, a = O != this.pY, c = Math.abs(t.deltaY))), t.direction = h, a && c > n.threshold && h & n.direction;
      },
      attrTest: function(t) {
        return j.prototype.attrTest.call(this, t) && (this.state & B || !(this.state & B) && this.directionTest(t));
      },
      emit: function(t) {
        this.pX = t.deltaX, this.pY = t.deltaY;
        var n = Rt(t.direction);
        n && (t.additionalEvent = this.options.event + n), this._super.emit.call(this, t);
      }
    });
    function et() {
      j.apply(this, arguments);
    }
    m(et, j, {
      defaults: {
        event: "pinch",
        threshold: 0,
        pointers: 2
      },
      getTouchAction: function() {
        return [de];
      },
      attrTest: function(t) {
        return this._super.attrTest.call(this, t) && (Math.abs(t.scale - 1) > this.options.threshold || this.state & B);
      },
      emit: function(t) {
        if (t.scale !== 1) {
          var n = t.scale < 1 ? "in" : "out";
          t.additionalEvent = this.options.event + n;
        }
        this._super.emit.call(this, t);
      }
    });
    function tt() {
      te.apply(this, arguments), this._timer = null, this._input = null;
    }
    m(tt, te, {
      defaults: {
        event: "press",
        pointers: 1,
        time: 251,
        threshold: 9
      },
      getTouchAction: function() {
        return [Dt];
      },
      process: function(t) {
        var n = this.options, a = t.pointers.length === n.pointers, c = t.distance < n.threshold, h = t.deltaTime > n.time;
        if (this._input = t, !c || !a || t.eventType & (x | H) && !h)
          this.reset();
        else if (t.eventType & R)
          this.reset(), this._timer = p(function() {
            this.state = ee, this.tryEmit();
          }, n.time, this);
        else if (t.eventType & x)
          return ee;
        return G;
      },
      reset: function() {
        clearTimeout(this._timer);
      },
      emit: function(t) {
        this.state === ee && (t && t.eventType & x ? this.manager.emit(this.options.event + "up", t) : (this._input.timeStamp = g(), this.manager.emit(this.options.event, this._input)));
      }
    });
    function rt() {
      j.apply(this, arguments);
    }
    m(rt, j, {
      defaults: {
        event: "rotate",
        threshold: 0,
        pointers: 2
      },
      getTouchAction: function() {
        return [de];
      },
      attrTest: function(t) {
        return this._super.attrTest.call(this, t) && (Math.abs(t.rotation) > this.options.threshold || this.state & B);
      }
    });
    function nt() {
      j.apply(this, arguments);
    }
    m(nt, j, {
      defaults: {
        event: "swipe",
        threshold: 10,
        velocity: 0.3,
        direction: X | ve,
        pointers: 1
      },
      getTouchAction: function() {
        return Ve.prototype.getTouchAction.call(this);
      },
      attrTest: function(t) {
        var n = this.options.direction, a;
        return n & (X | ve) ? a = t.overallVelocity : n & X ? a = t.overallVelocityX : n & ve && (a = t.overallVelocityY), this._super.attrTest.call(this, t) && n & t.offsetDirection && t.distance > this.options.threshold && t.maxPointers == this.options.pointers && C(a) > this.options.velocity && t.eventType & x;
      },
      emit: function(t) {
        var n = Rt(t.offsetDirection);
        n && this.manager.emit(this.options.event + n, t), this.manager.emit(this.options.event, t);
      }
    });
    function Ye() {
      te.apply(this, arguments), this.pTime = !1, this.pCenter = !1, this._timer = null, this._input = null, this.count = 0;
    }
    m(Ye, te, {
      defaults: {
        event: "tap",
        pointers: 1,
        taps: 1,
        interval: 300,
        time: 250,
        threshold: 9,
        posThreshold: 10
      },
      getTouchAction: function() {
        return [Ke];
      },
      process: function(t) {
        var n = this.options, a = t.pointers.length === n.pointers, c = t.distance < n.threshold, h = t.deltaTime < n.time;
        if (this.reset(), t.eventType & R && this.count === 0)
          return this.failTimeout();
        if (c && h && a) {
          if (t.eventType != x)
            return this.failTimeout();
          var d = this.pTime ? t.timeStamp - this.pTime < n.interval : !0, O = !this.pCenter || we(this.pCenter, t.center) < n.posThreshold;
          this.pTime = t.timeStamp, this.pCenter = t.center, !O || !d ? this.count = 1 : this.count += 1, this._input = t;
          var D = this.count % n.taps;
          if (D === 0)
            return this.hasRequireFailures() ? (this._timer = p(function() {
              this.state = ee, this.tryEmit();
            }, n.interval, this), B) : ee;
        }
        return G;
      },
      failTimeout: function() {
        return this._timer = p(function() {
          this.state = G;
        }, this.options.interval, this), G;
      },
      reset: function() {
        clearTimeout(this._timer);
      },
      emit: function() {
        this.state == ee && (this._input.tapCount = this.count, this.manager.emit(this.options.event, this._input));
      }
    });
    function re(t, n) {
      return n = n || {}, n.recognizers = q(n.recognizers, re.defaults.preset), new it(t, n);
    }
    re.VERSION = "2.0.7", re.defaults = {
      domEvents: !1,
      touchAction: xt,
      enable: !0,
      inputTarget: null,
      inputClass: null,
      preset: [
        [rt, { enable: !1 }],
        [et, { enable: !1 }, ["rotate"]],
        [nt, { direction: X }],
        [Ve, { direction: X }, ["swipe"]],
        [Ye],
        [Ye, { event: "doubletap", taps: 2 }, ["tap"]],
        [tt]
      ],
      cssProps: {
        userSelect: "none",
        touchSelect: "none",
        touchCallout: "none",
        contentZooming: "none",
        userDrag: "none",
        tapHighlightColor: "rgba(0,0,0,0)"
      }
    };
    var wr = 1, Ut = 2;
    function it(t, n) {
      this.options = y({}, re.defaults, n || {}), this.options.inputTarget = this.options.inputTarget || t, this.handlers = {}, this.session = {}, this.recognizers = [], this.oldCssProps = {}, this.element = t, this.input = lr(this), this.touchAction = new $e(this, this.options.touchAction), kt(this, !0), _(this.options.recognizers, function(a) {
        var c = this.add(new a[0](a[1]));
        a[2] && c.recognizeWith(a[2]), a[3] && c.requireFailure(a[3]);
      }, this);
    }
    it.prototype = {
      set: function(t) {
        return y(this.options, t), t.touchAction && this.touchAction.update(), t.inputTarget && (this.input.destroy(), this.input.target = t.inputTarget, this.input.init()), this;
      },
      stop: function(t) {
        this.session.stopped = t ? Ut : wr;
      },
      recognize: function(t) {
        var n = this.session;
        if (!n.stopped) {
          this.touchAction.preventDefaults(t);
          var a, c = this.recognizers, h = n.curRecognizer;
          (!h || h && h.state & ee) && (h = n.curRecognizer = null);
          for (var d = 0; d < c.length; )
            a = c[d], n.stopped !== Ut && (!h || a == h || a.canRecognizeWith(h)) ? a.recognize(t) : a.reset(), !h && a.state & (B | pe | ue) && (h = n.curRecognizer = a), d++;
        }
      },
      get: function(t) {
        if (t instanceof te)
          return t;
        for (var n = this.recognizers, a = 0; a < n.length; a++)
          if (n[a].options.event == t)
            return n[a];
        return null;
      },
      add: function(t) {
        if (I(t, "add", this))
          return this;
        var n = this.get(t.options.event);
        return n && this.remove(n), this.recognizers.push(t), t.manager = this, this.touchAction.update(), t;
      },
      remove: function(t) {
        if (I(t, "remove", this))
          return this;
        if (t = this.get(t), t) {
          var n = this.recognizers, a = V(n, t);
          a !== -1 && (n.splice(a, 1), this.touchAction.update());
        }
        return this;
      },
      on: function(t, n) {
        if (t !== s && n !== s) {
          var a = this.handlers;
          return _(N(t), function(c) {
            a[c] = a[c] || [], a[c].push(n);
          }), this;
        }
      },
      off: function(t, n) {
        if (t !== s) {
          var a = this.handlers;
          return _(N(t), function(c) {
            n ? a[c] && a[c].splice(V(a[c], n), 1) : delete a[c];
          }), this;
        }
      },
      emit: function(t, n) {
        this.options.domEvents && Rr(t, n);
        var a = this.handlers[t] && this.handlers[t].slice();
        if (!(!a || !a.length)) {
          n.type = t, n.preventDefault = function() {
            n.srcEvent.preventDefault();
          };
          for (var c = 0; c < a.length; )
            a[c](n), c++;
        }
      },
      destroy: function() {
        this.element && kt(this, !1), this.handlers = {}, this.session = {}, this.input.destroy(), this.element = null;
      }
    };
    function kt(t, n) {
      var a = t.element;
      if (!!a.style) {
        var c;
        _(t.options.cssProps, function(h, d) {
          c = ae(a.style, d), n ? (t.oldCssProps[c] = a.style[c], a.style[c] = h) : a.style[c] = t.oldCssProps[c] || "";
        }), n || (t.oldCssProps = {});
      }
    }
    function Rr(t, n) {
      var a = i.createEvent("Event");
      a.initEvent(t, !0, !0), a.gesture = n, n.target.dispatchEvent(a);
    }
    y(re, {
      INPUT_START: R,
      INPUT_MOVE: he,
      INPUT_END: x,
      INPUT_CANCEL: H,
      STATE_POSSIBLE: Fe,
      STATE_BEGAN: B,
      STATE_CHANGED: pe,
      STATE_ENDED: ue,
      STATE_RECOGNIZED: ee,
      STATE_CANCELLED: Ae,
      STATE_FAILED: G,
      DIRECTION_NONE: xe,
      DIRECTION_LEFT: Ee,
      DIRECTION_RIGHT: Ie,
      DIRECTION_UP: Ce,
      DIRECTION_DOWN: Pe,
      DIRECTION_HORIZONTAL: X,
      DIRECTION_VERTICAL: ve,
      DIRECTION_ALL: yt,
      Manager: it,
      Input: W,
      TouchAction: $e,
      TouchInput: Ue,
      MouseInput: Re,
      PointerEventInput: Qe,
      TouchMouseInput: Je,
      SingleTouchInput: bt,
      Recognizer: te,
      AttrRecognizer: j,
      Tap: Ye,
      Pan: Ve,
      Swipe: nt,
      Pinch: et,
      Rotate: rt,
      Press: tt,
      on: b,
      off: Y,
      each: _,
      merge: S,
      extend: M,
      assign: y,
      inherit: m,
      bindFn: E,
      prefixed: ae
    });
    var Ur = typeof r < "u" ? r : typeof self < "u" ? self : {};
    Ur.Hammer = re, typeof s == "function" && s.amd ? s(function() {
      return re;
    }) : e.exports ? e.exports = re : r[o] = re;
  })(window, document, "Hammer");
})(qt);
const kr = qt.exports;
var jt = {
  update: null,
  begin: null,
  loopBegin: null,
  changeBegin: null,
  change: null,
  changeComplete: null,
  loopComplete: null,
  complete: null,
  loop: 1,
  direction: "normal",
  autoplay: !0,
  timelineOffset: 0
}, ct = {
  duration: 1e3,
  delay: 0,
  endDelay: 0,
  easing: "easeOutElastic(1, .5)",
  round: 0
}, Fr = ["translateX", "translateY", "translateZ", "rotate", "rotateX", "rotateY", "rotateZ", "scale", "scaleX", "scaleY", "scaleZ", "skew", "skewX", "skewY", "perspective", "matrix", "matrix3d"], Be = {
  CSS: {},
  springs: {}
};
function Q(e, r, i) {
  return Math.min(Math.max(e, r), i);
}
function Me(e, r) {
  return e.indexOf(r) > -1;
}
function at(e, r) {
  return e.apply(null, r);
}
var T = {
  arr: function(e) {
    return Array.isArray(e);
  },
  obj: function(e) {
    return Me(Object.prototype.toString.call(e), "Object");
  },
  pth: function(e) {
    return T.obj(e) && e.hasOwnProperty("totalLength");
  },
  svg: function(e) {
    return e instanceof SVGElement;
  },
  inp: function(e) {
    return e instanceof HTMLInputElement;
  },
  dom: function(e) {
    return e.nodeType || T.svg(e);
  },
  str: function(e) {
    return typeof e == "string";
  },
  fnc: function(e) {
    return typeof e == "function";
  },
  und: function(e) {
    return typeof e > "u";
  },
  nil: function(e) {
    return T.und(e) || e === null;
  },
  hex: function(e) {
    return /(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(e);
  },
  rgb: function(e) {
    return /^rgb/.test(e);
  },
  hsl: function(e) {
    return /^hsl/.test(e);
  },
  col: function(e) {
    return T.hex(e) || T.rgb(e) || T.hsl(e);
  },
  key: function(e) {
    return !jt.hasOwnProperty(e) && !ct.hasOwnProperty(e) && e !== "targets" && e !== "keyframes";
  }
};
function zt(e) {
  var r = /\(([^)]+)\)/.exec(e);
  return r ? r[1].split(",").map(function(i) {
    return parseFloat(i);
  }) : [];
}
function Xt(e, r) {
  var i = zt(e), o = Q(T.und(i[0]) ? 1 : i[0], 0.1, 100), s = Q(T.und(i[1]) ? 100 : i[1], 0.1, 100), l = Q(T.und(i[2]) ? 10 : i[2], 0.1, 100), f = Q(T.und(i[3]) ? 0 : i[3], 0.1, 100), v = Math.sqrt(s / o), u = l / (2 * Math.sqrt(s * o)), C = u < 1 ? v * Math.sqrt(1 - u * u) : 0, g = 1, p = u < 1 ? (u * v + -f) / C : -f + v;
  function I(P) {
    var y = r ? r * P / 1e3 : P;
    return u < 1 ? y = Math.exp(-y * u * v) * (g * Math.cos(C * y) + p * Math.sin(C * y)) : y = (g + p * y) * Math.exp(-y * v), P === 0 || P === 1 ? P : 1 - y;
  }
  function _() {
    var P = Be.springs[e];
    if (P)
      return P;
    for (var y = 1 / 6, M = 0, S = 0; ; )
      if (M += y, I(M) === 1) {
        if (S++, S >= 16)
          break;
      } else
        S = 0;
    var m = M * y * 1e3;
    return Be.springs[e] = m, m;
  }
  return r ? I : _;
}
function Hr(e) {
  return e === void 0 && (e = 10), function(r) {
    return Math.ceil(Q(r, 1e-6, 1) * e) * (1 / e);
  };
}
var Vr = function() {
  var e = 11, r = 1 / (e - 1);
  function i(g, p) {
    return 1 - 3 * p + 3 * g;
  }
  function o(g, p) {
    return 3 * p - 6 * g;
  }
  function s(g) {
    return 3 * g;
  }
  function l(g, p, I) {
    return ((i(p, I) * g + o(p, I)) * g + s(p)) * g;
  }
  function f(g, p, I) {
    return 3 * i(p, I) * g * g + 2 * o(p, I) * g + s(p);
  }
  function v(g, p, I, _, P) {
    var y, M, S = 0;
    do
      M = p + (I - p) / 2, y = l(M, _, P) - g, y > 0 ? I = M : p = M;
    while (Math.abs(y) > 1e-7 && ++S < 10);
    return M;
  }
  function u(g, p, I, _) {
    for (var P = 0; P < 4; ++P) {
      var y = f(p, I, _);
      if (y === 0)
        return p;
      var M = l(p, I, _) - g;
      p -= M / y;
    }
    return p;
  }
  function C(g, p, I, _) {
    if (!(0 <= g && g <= 1 && 0 <= I && I <= 1))
      return;
    var P = new Float32Array(e);
    if (g !== p || I !== _)
      for (var y = 0; y < e; ++y)
        P[y] = l(y * r, g, I);
    function M(S) {
      for (var m = 0, E = 1, L = e - 1; E !== L && P[E] <= S; ++E)
        m += r;
      --E;
      var q = (S - P[E]) / (P[E + 1] - P[E]), b = m + q * r, Y = f(b, g, I);
      return Y >= 1e-3 ? u(S, b, g, I) : Y === 0 ? b : v(S, m, m + r, g, I);
    }
    return function(S) {
      return g === p && I === _ || S === 0 || S === 1 ? S : l(M(S), p, _);
    };
  }
  return C;
}(), Gt = function() {
  var e = { linear: function() {
    return function(o) {
      return o;
    };
  } }, r = {
    Sine: function() {
      return function(o) {
        return 1 - Math.cos(o * Math.PI / 2);
      };
    },
    Circ: function() {
      return function(o) {
        return 1 - Math.sqrt(1 - o * o);
      };
    },
    Back: function() {
      return function(o) {
        return o * o * (3 * o - 2);
      };
    },
    Bounce: function() {
      return function(o) {
        for (var s, l = 4; o < ((s = Math.pow(2, --l)) - 1) / 11; )
          ;
        return 1 / Math.pow(4, 3 - l) - 7.5625 * Math.pow((s * 3 - 2) / 22 - o, 2);
      };
    },
    Elastic: function(o, s) {
      o === void 0 && (o = 1), s === void 0 && (s = 0.5);
      var l = Q(o, 1, 10), f = Q(s, 0.1, 2);
      return function(v) {
        return v === 0 || v === 1 ? v : -l * Math.pow(2, 10 * (v - 1)) * Math.sin((v - 1 - f / (Math.PI * 2) * Math.asin(1 / l)) * (Math.PI * 2) / f);
      };
    }
  }, i = ["Quad", "Cubic", "Quart", "Quint", "Expo"];
  return i.forEach(function(o, s) {
    r[o] = function() {
      return function(l) {
        return Math.pow(l, s + 2);
      };
    };
  }), Object.keys(r).forEach(function(o) {
    var s = r[o];
    e["easeIn" + o] = s, e["easeOut" + o] = function(l, f) {
      return function(v) {
        return 1 - s(l, f)(1 - v);
      };
    }, e["easeInOut" + o] = function(l, f) {
      return function(v) {
        return v < 0.5 ? s(l, f)(v * 2) / 2 : 1 - s(l, f)(v * -2 + 2) / 2;
      };
    }, e["easeOutIn" + o] = function(l, f) {
      return function(v) {
        return v < 0.5 ? (1 - s(l, f)(1 - v * 2)) / 2 : (s(l, f)(v * 2 - 1) + 1) / 2;
      };
    };
  }), e;
}();
function lt(e, r) {
  if (T.fnc(e))
    return e;
  var i = e.split("(")[0], o = Gt[i], s = zt(e);
  switch (i) {
    case "spring":
      return Xt(e, r);
    case "cubicBezier":
      return at(Vr, s);
    case "steps":
      return at(Hr, s);
    default:
      return at(o, s);
  }
}
function Zt(e) {
  try {
    var r = document.querySelectorAll(e);
    return r;
  } catch {
    return;
  }
}
function qe(e, r) {
  for (var i = e.length, o = arguments.length >= 2 ? arguments[1] : void 0, s = [], l = 0; l < i; l++)
    if (l in e) {
      var f = e[l];
      r.call(o, f, l, e) && s.push(f);
    }
  return s;
}
function je(e) {
  return e.reduce(function(r, i) {
    return r.concat(T.arr(i) ? je(i) : i);
  }, []);
}
function Ft(e) {
  return T.arr(e) ? e : (T.str(e) && (e = Zt(e) || e), e instanceof NodeList || e instanceof HTMLCollection ? [].slice.call(e) : [e]);
}
function ft(e, r) {
  return e.some(function(i) {
    return i === r;
  });
}
function ht(e) {
  var r = {};
  for (var i in e)
    r[i] = e[i];
  return r;
}
function st(e, r) {
  var i = ht(e);
  for (var o in e)
    i[o] = r.hasOwnProperty(o) ? r[o] : e[o];
  return i;
}
function ze(e, r) {
  var i = ht(e);
  for (var o in r)
    i[o] = T.und(e[o]) ? r[o] : e[o];
  return i;
}
function Yr(e) {
  var r = /rgb\((\d+,\s*[\d]+,\s*[\d]+)\)/g.exec(e);
  return r ? "rgba(" + r[1] + ",1)" : e;
}
function Wr(e) {
  var r = /^#?([a-f\d])([a-f\d])([a-f\d])$/i, i = e.replace(r, function(v, u, C, g) {
    return u + u + C + C + g + g;
  }), o = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(i), s = parseInt(o[1], 16), l = parseInt(o[2], 16), f = parseInt(o[3], 16);
  return "rgba(" + s + "," + l + "," + f + ",1)";
}
function Br(e) {
  var r = /hsl\((\d+),\s*([\d.]+)%,\s*([\d.]+)%\)/g.exec(e) || /hsla\((\d+),\s*([\d.]+)%,\s*([\d.]+)%,\s*([\d.]+)\)/g.exec(e), i = parseInt(r[1], 10) / 360, o = parseInt(r[2], 10) / 100, s = parseInt(r[3], 10) / 100, l = r[4] || 1;
  function f(I, _, P) {
    return P < 0 && (P += 1), P > 1 && (P -= 1), P < 1 / 6 ? I + (_ - I) * 6 * P : P < 1 / 2 ? _ : P < 2 / 3 ? I + (_ - I) * (2 / 3 - P) * 6 : I;
  }
  var v, u, C;
  if (o == 0)
    v = u = C = s;
  else {
    var g = s < 0.5 ? s * (1 + o) : s + o - s * o, p = 2 * s - g;
    v = f(p, g, i + 1 / 3), u = f(p, g, i), C = f(p, g, i - 1 / 3);
  }
  return "rgba(" + v * 255 + "," + u * 255 + "," + C * 255 + "," + l + ")";
}
function qr(e) {
  if (T.rgb(e))
    return Yr(e);
  if (T.hex(e))
    return Wr(e);
  if (T.hsl(e))
    return Br(e);
}
function ne(e) {
  var r = /[+-]?\d*\.?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?(%|px|pt|em|rem|in|cm|mm|ex|ch|pc|vw|vh|vmin|vmax|deg|rad|turn)?$/.exec(e);
  if (r)
    return r[1];
}
function jr(e) {
  if (Me(e, "translate") || e === "perspective")
    return "px";
  if (Me(e, "rotate") || Me(e, "skew"))
    return "deg";
}
function ot(e, r) {
  return T.fnc(e) ? e(r.target, r.id, r.total) : e;
}
function J(e, r) {
  return e.getAttribute(r);
}
function vt(e, r, i) {
  var o = ne(r);
  if (ft([i, "deg", "rad", "turn"], o))
    return r;
  var s = Be.CSS[r + i];
  if (!T.und(s))
    return s;
  var l = 100, f = document.createElement(e.tagName), v = e.parentNode && e.parentNode !== document ? e.parentNode : document.body;
  v.appendChild(f), f.style.position = "absolute", f.style.width = l + i;
  var u = l / f.offsetWidth;
  v.removeChild(f);
  var C = u * parseFloat(r);
  return Be.CSS[r + i] = C, C;
}
function Qt(e, r, i) {
  if (r in e.style) {
    var o = r.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase(), s = e.style[r] || getComputedStyle(e).getPropertyValue(o) || "0";
    return i ? vt(e, s, i) : s;
  }
}
function dt(e, r) {
  if (T.dom(e) && !T.inp(e) && (!T.nil(J(e, r)) || T.svg(e) && e[r]))
    return "attribute";
  if (T.dom(e) && ft(Fr, r))
    return "transform";
  if (T.dom(e) && r !== "transform" && Qt(e, r))
    return "css";
  if (e[r] != null)
    return "object";
}
function Jt(e) {
  if (!!T.dom(e)) {
    for (var r = e.style.transform || "", i = /(\w+)\(([^)]*)\)/g, o = /* @__PURE__ */ new Map(), s; s = i.exec(r); )
      o.set(s[1], s[2]);
    return o;
  }
}
function zr(e, r, i, o) {
  var s = Me(r, "scale") ? 1 : 0 + jr(r), l = Jt(e).get(r) || s;
  return i && (i.transforms.list.set(r, l), i.transforms.last = r), o ? vt(e, l, o) : l;
}
function gt(e, r, i, o) {
  switch (dt(e, r)) {
    case "transform":
      return zr(e, r, o, i);
    case "css":
      return Qt(e, r, i);
    case "attribute":
      return J(e, r);
    default:
      return e[r] || 0;
  }
}
function mt(e, r) {
  var i = /^(\*=|\+=|-=)/.exec(e);
  if (!i)
    return e;
  var o = ne(e) || 0, s = parseFloat(r), l = parseFloat(e.replace(i[0], ""));
  switch (i[0][0]) {
    case "+":
      return s + l + o;
    case "-":
      return s - l + o;
    case "*":
      return s * l + o;
  }
}
function Kt(e, r) {
  if (T.col(e))
    return qr(e);
  if (/\s/g.test(e))
    return e;
  var i = ne(e), o = i ? e.substr(0, e.length - i.length) : e;
  return r ? o + r : o;
}
function pt(e, r) {
  return Math.sqrt(Math.pow(r.x - e.x, 2) + Math.pow(r.y - e.y, 2));
}
function Xr(e) {
  return Math.PI * 2 * J(e, "r");
}
function Gr(e) {
  return J(e, "width") * 2 + J(e, "height") * 2;
}
function Zr(e) {
  return pt(
    { x: J(e, "x1"), y: J(e, "y1") },
    { x: J(e, "x2"), y: J(e, "y2") }
  );
}
function $t(e) {
  for (var r = e.points, i = 0, o, s = 0; s < r.numberOfItems; s++) {
    var l = r.getItem(s);
    s > 0 && (i += pt(o, l)), o = l;
  }
  return i;
}
function Qr(e) {
  var r = e.points;
  return $t(e) + pt(r.getItem(r.numberOfItems - 1), r.getItem(0));
}
function er(e) {
  if (e.getTotalLength)
    return e.getTotalLength();
  switch (e.tagName.toLowerCase()) {
    case "circle":
      return Xr(e);
    case "rect":
      return Gr(e);
    case "line":
      return Zr(e);
    case "polyline":
      return $t(e);
    case "polygon":
      return Qr(e);
  }
}
function Jr(e) {
  var r = er(e);
  return e.setAttribute("stroke-dasharray", r), r;
}
function Kr(e) {
  for (var r = e.parentNode; T.svg(r) && T.svg(r.parentNode); )
    r = r.parentNode;
  return r;
}
function tr(e, r) {
  var i = r || {}, o = i.el || Kr(e), s = o.getBoundingClientRect(), l = J(o, "viewBox"), f = s.width, v = s.height, u = i.viewBox || (l ? l.split(" ") : [0, 0, f, v]);
  return {
    el: o,
    viewBox: u,
    x: u[0] / 1,
    y: u[1] / 1,
    w: f,
    h: v,
    vW: u[2],
    vH: u[3]
  };
}
function $r(e, r) {
  var i = T.str(e) ? Zt(e)[0] : e, o = r || 100;
  return function(s) {
    return {
      property: s,
      el: i,
      svg: tr(i),
      totalLength: er(i) * (o / 100)
    };
  };
}
function en(e, r, i) {
  function o(g) {
    g === void 0 && (g = 0);
    var p = r + g >= 1 ? r + g : 0;
    return e.el.getPointAtLength(p);
  }
  var s = tr(e.el, e.svg), l = o(), f = o(-1), v = o(1), u = i ? 1 : s.w / s.vW, C = i ? 1 : s.h / s.vH;
  switch (e.property) {
    case "x":
      return (l.x - s.x) * u;
    case "y":
      return (l.y - s.y) * C;
    case "angle":
      return Math.atan2(v.y - f.y, v.x - f.x) * 180 / Math.PI;
  }
}
function Ht(e, r) {
  var i = /[+-]?\d*\.?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?/g, o = Kt(T.pth(e) ? e.totalLength : e, r) + "";
  return {
    original: o,
    numbers: o.match(i) ? o.match(i).map(Number) : [0],
    strings: T.str(e) || r ? o.split(i) : []
  };
}
function Tt(e) {
  var r = e ? je(T.arr(e) ? e.map(Ft) : Ft(e)) : [];
  return qe(r, function(i, o, s) {
    return s.indexOf(i) === o;
  });
}
function rr(e) {
  var r = Tt(e);
  return r.map(function(i, o) {
    return { target: i, id: o, total: r.length, transforms: { list: Jt(i) } };
  });
}
function tn(e, r) {
  var i = ht(r);
  if (/^spring/.test(i.easing) && (i.duration = Xt(i.easing)), T.arr(e)) {
    var o = e.length, s = o === 2 && !T.obj(e[0]);
    s ? e = { value: e } : T.fnc(r.duration) || (i.duration = r.duration / o);
  }
  var l = T.arr(e) ? e : [e];
  return l.map(function(f, v) {
    var u = T.obj(f) && !T.pth(f) ? f : { value: f };
    return T.und(u.delay) && (u.delay = v ? 0 : r.delay), T.und(u.endDelay) && (u.endDelay = v === l.length - 1 ? r.endDelay : 0), u;
  }).map(function(f) {
    return ze(f, i);
  });
}
function rn(e) {
  for (var r = qe(je(e.map(function(l) {
    return Object.keys(l);
  })), function(l) {
    return T.key(l);
  }).reduce(function(l, f) {
    return l.indexOf(f) < 0 && l.push(f), l;
  }, []), i = {}, o = function(l) {
    var f = r[l];
    i[f] = e.map(function(v) {
      var u = {};
      for (var C in v)
        T.key(C) ? C == f && (u.value = v[C]) : u[C] = v[C];
      return u;
    });
  }, s = 0; s < r.length; s++)
    o(s);
  return i;
}
function nn(e, r) {
  var i = [], o = r.keyframes;
  o && (r = ze(rn(o), r));
  for (var s in r)
    T.key(s) && i.push({
      name: s,
      tweens: tn(r[s], e)
    });
  return i;
}
function an(e, r) {
  var i = {};
  for (var o in e) {
    var s = ot(e[o], r);
    T.arr(s) && (s = s.map(function(l) {
      return ot(l, r);
    }), s.length === 1 && (s = s[0])), i[o] = s;
  }
  return i.duration = parseFloat(i.duration), i.delay = parseFloat(i.delay), i;
}
function sn(e, r) {
  var i;
  return e.tweens.map(function(o) {
    var s = an(o, r), l = s.value, f = T.arr(l) ? l[1] : l, v = ne(f), u = gt(r.target, e.name, v, r), C = i ? i.to.original : u, g = T.arr(l) ? l[0] : C, p = ne(g) || ne(u), I = v || p;
    return T.und(f) && (f = C), s.from = Ht(g, I), s.to = Ht(mt(f, g), I), s.start = i ? i.end : 0, s.end = s.start + s.delay + s.duration + s.endDelay, s.easing = lt(s.easing, s.duration), s.isPath = T.pth(l), s.isPathTargetInsideSVG = s.isPath && T.svg(r.target), s.isColor = T.col(s.from.original), s.isColor && (s.round = 1), i = s, s;
  });
}
var nr = {
  css: function(e, r, i) {
    return e.style[r] = i;
  },
  attribute: function(e, r, i) {
    return e.setAttribute(r, i);
  },
  object: function(e, r, i) {
    return e[r] = i;
  },
  transform: function(e, r, i, o, s) {
    if (o.list.set(r, i), r === o.last || s) {
      var l = "";
      o.list.forEach(function(f, v) {
        l += v + "(" + f + ") ";
      }), e.style.transform = l;
    }
  }
};
function ir(e, r) {
  var i = rr(e);
  i.forEach(function(o) {
    for (var s in r) {
      var l = ot(r[s], o), f = o.target, v = ne(l), u = gt(f, s, v, o), C = v || ne(u), g = mt(Kt(l, C), u), p = dt(f, s);
      nr[p](f, s, g, o.transforms, !0);
    }
  });
}
function on(e, r) {
  var i = dt(e.target, r.name);
  if (i) {
    var o = sn(r, e), s = o[o.length - 1];
    return {
      type: i,
      property: r.name,
      animatable: e,
      tweens: o,
      duration: s.end,
      delay: o[0].delay,
      endDelay: s.endDelay
    };
  }
}
function un(e, r) {
  return qe(je(e.map(function(i) {
    return r.map(function(o) {
      return on(i, o);
    });
  })), function(i) {
    return !T.und(i);
  });
}
function ar(e, r) {
  var i = e.length, o = function(l) {
    return l.timelineOffset ? l.timelineOffset : 0;
  }, s = {};
  return s.duration = i ? Math.max.apply(Math, e.map(function(l) {
    return o(l) + l.duration;
  })) : r.duration, s.delay = i ? Math.min.apply(Math, e.map(function(l) {
    return o(l) + l.delay;
  })) : r.delay, s.endDelay = i ? s.duration - Math.max.apply(Math, e.map(function(l) {
    return o(l) + l.duration - l.endDelay;
  })) : r.endDelay, s;
}
var Vt = 0;
function cn(e) {
  var r = st(jt, e), i = st(ct, e), o = nn(i, e), s = rr(e.targets), l = un(s, o), f = ar(l, i), v = Vt;
  return Vt++, ze(r, {
    id: v,
    children: [],
    animatables: s,
    animations: l,
    duration: f.duration,
    delay: f.delay,
    endDelay: f.endDelay
  });
}
var z = [], sr = function() {
  var e;
  function r() {
    !e && (!Yt() || !A.suspendWhenDocumentHidden) && z.length > 0 && (e = requestAnimationFrame(i));
  }
  function i(s) {
    for (var l = z.length, f = 0; f < l; ) {
      var v = z[f];
      v.paused ? (z.splice(f, 1), l--) : (v.tick(s), f++);
    }
    e = f > 0 ? requestAnimationFrame(i) : void 0;
  }
  function o() {
    !A.suspendWhenDocumentHidden || (Yt() ? e = cancelAnimationFrame(e) : (z.forEach(
      function(s) {
        return s._onDocumentVisibility();
      }
    ), sr()));
  }
  return typeof document < "u" && document.addEventListener("visibilitychange", o), r;
}();
function Yt() {
  return !!document && document.hidden;
}
function A(e) {
  e === void 0 && (e = {});
  var r = 0, i = 0, o = 0, s, l = 0, f = null;
  function v(m) {
    var E = window.Promise && new Promise(function(L) {
      return f = L;
    });
    return m.finished = E, E;
  }
  var u = cn(e);
  v(u);
  function C() {
    var m = u.direction;
    m !== "alternate" && (u.direction = m !== "normal" ? "normal" : "reverse"), u.reversed = !u.reversed, s.forEach(function(E) {
      return E.reversed = u.reversed;
    });
  }
  function g(m) {
    return u.reversed ? u.duration - m : m;
  }
  function p() {
    r = 0, i = g(u.currentTime) * (1 / A.speed);
  }
  function I(m, E) {
    E && E.seek(m - E.timelineOffset);
  }
  function _(m) {
    if (u.reversePlayback)
      for (var L = l; L--; )
        I(m, s[L]);
    else
      for (var E = 0; E < l; E++)
        I(m, s[E]);
  }
  function P(m) {
    for (var E = 0, L = u.animations, q = L.length; E < q; ) {
      var b = L[E], Y = b.animatable, ie = b.tweens, k = ie.length - 1, N = ie[k];
      k && (N = qe(ie, function(Ge) {
        return m < Ge.end;
      })[0] || N);
      for (var V = Q(m - N.start - N.delay, 0, N.duration) / N.duration, K = isNaN(V) ? 1 : N.easing(V), F = N.to.strings, ae = N.round, Te = [], Xe = N.to.numbers.length, $ = void 0, le = 0; le < Xe; le++) {
        var se = void 0, Se = N.to.numbers[le], Le = N.from.numbers[le] || 0;
        N.isPath ? se = en(N.value, K * Se, N.isPathTargetInsideSVG) : se = Le + K * (Se - Le), ae && (N.isColor && le > 2 || (se = Math.round(se * ae) / ae)), Te.push(se);
      }
      var oe = F.length;
      if (!oe)
        $ = Te[0];
      else {
        $ = F[0];
        for (var fe = 0; fe < oe; fe++) {
          F[fe];
          var me = F[fe + 1], ye = Te[fe];
          isNaN(ye) || (me ? $ += ye + me : $ += ye + " ");
        }
      }
      nr[b.type](Y.target, b.property, $, Y.transforms), b.currentValue = $, E++;
    }
  }
  function y(m) {
    u[m] && !u.passThrough && u[m](u);
  }
  function M() {
    u.remaining && u.remaining !== !0 && u.remaining--;
  }
  function S(m) {
    var E = u.duration, L = u.delay, q = E - u.endDelay, b = g(m);
    u.progress = Q(b / E * 100, 0, 100), u.reversePlayback = b < u.currentTime, s && _(b), !u.began && u.currentTime > 0 && (u.began = !0, y("begin")), !u.loopBegan && u.currentTime > 0 && (u.loopBegan = !0, y("loopBegin")), b <= L && u.currentTime !== 0 && P(0), (b >= q && u.currentTime !== E || !E) && P(E), b > L && b < q ? (u.changeBegan || (u.changeBegan = !0, u.changeCompleted = !1, y("changeBegin")), y("change"), P(b)) : u.changeBegan && (u.changeCompleted = !0, u.changeBegan = !1, y("changeComplete")), u.currentTime = Q(b, 0, E), u.began && y("update"), m >= E && (i = 0, M(), u.remaining ? (r = o, y("loopComplete"), u.loopBegan = !1, u.direction === "alternate" && C()) : (u.paused = !0, u.completed || (u.completed = !0, y("loopComplete"), y("complete"), !u.passThrough && "Promise" in window && (f(), v(u)))));
  }
  return u.reset = function() {
    var m = u.direction;
    u.passThrough = !1, u.currentTime = 0, u.progress = 0, u.paused = !0, u.began = !1, u.loopBegan = !1, u.changeBegan = !1, u.completed = !1, u.changeCompleted = !1, u.reversePlayback = !1, u.reversed = m === "reverse", u.remaining = u.loop, s = u.children, l = s.length;
    for (var E = l; E--; )
      u.children[E].reset();
    (u.reversed && u.loop !== !0 || m === "alternate" && u.loop === 1) && u.remaining++, P(u.reversed ? u.duration : 0);
  }, u._onDocumentVisibility = p, u.set = function(m, E) {
    return ir(m, E), u;
  }, u.tick = function(m) {
    o = m, r || (r = o), S((o + (i - r)) * A.speed);
  }, u.seek = function(m) {
    S(g(m));
  }, u.pause = function() {
    u.paused = !0, p();
  }, u.play = function() {
    !u.paused || (u.completed && u.reset(), u.paused = !1, z.push(u), p(), sr());
  }, u.reverse = function() {
    C(), u.completed = !u.reversed, p();
  }, u.restart = function() {
    u.reset(), u.play();
  }, u.remove = function(m) {
    var E = Tt(m);
    or(E, u);
  }, u.reset(), u.autoplay && u.play(), u;
}
function Wt(e, r) {
  for (var i = r.length; i--; )
    ft(e, r[i].animatable.target) && r.splice(i, 1);
}
function or(e, r) {
  var i = r.animations, o = r.children;
  Wt(e, i);
  for (var s = o.length; s--; ) {
    var l = o[s], f = l.animations;
    Wt(e, f), !f.length && !l.children.length && o.splice(s, 1);
  }
  !i.length && !o.length && r.pause();
}
function ln(e) {
  for (var r = Tt(e), i = z.length; i--; ) {
    var o = z[i];
    or(r, o);
  }
}
function fn(e, r) {
  r === void 0 && (r = {});
  var i = r.direction || "normal", o = r.easing ? lt(r.easing) : null, s = r.grid, l = r.axis, f = r.from || 0, v = f === "first", u = f === "center", C = f === "last", g = T.arr(e), p = parseFloat(g ? e[0] : e), I = g ? parseFloat(e[1]) : 0, _ = ne(g ? e[1] : e) || 0, P = r.start || 0 + (g ? p : 0), y = [], M = 0;
  return function(S, m, E) {
    if (v && (f = 0), u && (f = (E - 1) / 2), C && (f = E - 1), !y.length) {
      for (var L = 0; L < E; L++) {
        if (!s)
          y.push(Math.abs(f - L));
        else {
          var q = u ? (s[0] - 1) / 2 : f % s[0], b = u ? (s[1] - 1) / 2 : Math.floor(f / s[0]), Y = L % s[0], ie = Math.floor(L / s[0]), k = q - Y, N = b - ie, V = Math.sqrt(k * k + N * N);
          l === "x" && (V = -k), l === "y" && (V = -N), y.push(V);
        }
        M = Math.max.apply(Math, y);
      }
      o && (y = y.map(function(F) {
        return o(F / M) * M;
      })), i === "reverse" && (y = y.map(function(F) {
        return l ? F < 0 ? F * -1 : -F : Math.abs(M - F);
      }));
    }
    var K = g ? (I - p) / M : p;
    return P + K * (Math.round(y[m] * 100) / 100) + _;
  };
}
function hn(e) {
  e === void 0 && (e = {});
  var r = A(e);
  return r.duration = 0, r.add = function(i, o) {
    var s = z.indexOf(r), l = r.children;
    s > -1 && z.splice(s, 1);
    function f(I) {
      I.passThrough = !0;
    }
    for (var v = 0; v < l.length; v++)
      f(l[v]);
    var u = ze(i, st(ct, e));
    u.targets = u.targets || e.targets;
    var C = r.duration;
    u.autoplay = !1, u.direction = r.direction, u.timelineOffset = T.und(o) ? C : mt(o, C), f(r), r.seek(u.timelineOffset);
    var g = A(u);
    f(g), l.push(g);
    var p = ar(l, e);
    return r.delay = p.delay, r.endDelay = p.endDelay, r.duration = p.duration, r.seek(0), r.reset(), r.autoplay && r.play(), r;
  }, r;
}
A.version = "3.2.1";
A.speed = 1;
A.suspendWhenDocumentHidden = !0;
A.running = z;
A.remove = ln;
A.get = gt;
A.set = ir;
A.convertPx = vt;
A.path = $r;
A.setDashoffset = Jr;
A.stagger = fn;
A.timeline = hn;
A.easing = lt;
A.penner = Gt;
A.random = function(e, r) {
  return Math.floor(Math.random() * (r - e + 1)) + e;
};
let be = 300;
const ce = {
  animateIn: (e) => {
    A({
      targets: e,
      translateY: "-35px",
      opacity: 1,
      duration: be,
      easing: "easeOutCubic"
    });
  },
  animateOut: (e, r) => {
    A({
      targets: e,
      opacity: 0,
      marginTop: "-40px",
      duration: be,
      easing: "easeOutExpo",
      complete: r
    });
  },
  animateOutBottom: (e, r) => {
    A({
      targets: e,
      opacity: 0,
      marginBottom: "-40px",
      duration: be,
      easing: "easeOutExpo",
      complete: r
    });
  },
  animateReset: (e) => {
    A({
      targets: e,
      left: 0,
      opacity: 1,
      duration: be,
      easing: "easeOutExpo"
    });
  },
  animatePanning: (e, r, i) => {
    A({
      targets: e,
      duration: 10,
      easing: "easeOutQuad",
      left: r,
      opacity: i
    });
  },
  animatePanEnd: (e, r) => {
    A({
      targets: e,
      opacity: 0,
      duration: be,
      easing: "easeOutExpo",
      complete: r
    });
  },
  clearAnimation: (e) => {
    let r = A.timeline();
    e.forEach((i) => {
      r.add({
        targets: i.el,
        opacity: 0,
        right: "-40px",
        duration: 300,
        offset: "-=150",
        easing: "easeOutExpo",
        complete: () => {
          i.remove();
        }
      });
    });
  }
}, vn = (e, r, i) => (setTimeout(function() {
  if (i.cached_options.position && i.cached_options.position.includes("bottom")) {
    ce.animateOutBottom(e, () => {
      i.remove(e);
    });
    return;
  }
  ce.animateOut(e, () => {
    i.remove(e);
  });
}, r), !0), dn = (e, r) => ((typeof HTMLElement == "object" ? r instanceof HTMLElement : r && typeof r == "object" && r !== null && r.nodeType === 1 && typeof r.nodeName == "string") ? e.appendChild(r) : e.innerHTML = r, globalThis), ut = function(e, r) {
  let i = !1;
  return {
    el: e,
    text: function(o) {
      return dn(e, o), this;
    },
    goAway: function(o = 800) {
      return i = !0, vn(e, o, r);
    },
    remove: function() {
      r.remove(e);
    },
    disposed: function() {
      return i;
    }
  };
}, gn = require("shortid");
String.prototype.includes || Object.defineProperty(String.prototype, "includes", {
  value: function(e, r) {
    return typeof r != "number" && (r = 0), r + e.length > this.length ? !1 : this.indexOf(e, r) !== -1;
  }
});
let We = {}, ge = null;
const mn = function(e) {
  return e.className = e.className || null, e.onComplete = e.onComplete || null, e.position = e.position || "top-right", e.duration = e.duration || null, e.keepOnHover = e.keepOnHover || !1, e.theme = e.theme || "toasted-primary", e.type = e.type || "default", e.containerClass = e.containerClass || null, e.fullWidth = e.fullWidth || !1, e.icon = e.icon || null, e.action = e.action || null, e.fitToScreen = e.fitToScreen || null, e.closeOnSwipe = typeof e.closeOnSwipe < "u" ? e.closeOnSwipe : !0, e.iconPack = e.iconPack || "material", e.className && typeof e.className == "string" && (e.className = e.className.split(" ")), e.className || (e.className = []), e.theme && e.className.push(e.theme.trim()), e.type && e.className.push(e.type), e.containerClass && typeof e.containerClass == "string" && (e.containerClass = e.containerClass.split(" ")), e.containerClass || (e.containerClass = []), e.position && e.containerClass.push(e.position.trim()), e.fullWidth && e.containerClass.push("full-width"), e.fitToScreen && e.containerClass.push("fit-to-screen"), We = e, e;
}, pn = function(e, r) {
  let i = document.createElement("div");
  if (i.classList.add("toasted"), i.hash = gn.generate(), r.className && r.className.forEach((o) => {
    i.classList.add(o);
  }), (typeof HTMLElement == "object" ? e instanceof HTMLElement : e && typeof e == "object" && e !== null && e.nodeType === 1 && typeof e.nodeName == "string") ? i.appendChild(e) : i.innerHTML = e, Tn(r, i), r.closeOnSwipe) {
    let o = new kr(i, { prevent_default: !1 });
    o.on("pan", function(s) {
      let l = s.deltaX, f = 80;
      i.classList.contains("panning") || i.classList.add("panning");
      let v = 1 - Math.abs(l / f);
      v < 0 && (v = 0), ce.animatePanning(i, l, v);
    }), o.on("panend", function(s) {
      let l = s.deltaX, f = 80;
      Math.abs(l) > f ? ce.animatePanEnd(i, function() {
        typeof r.onComplete == "function" && r.onComplete(), i.parentNode && ge.remove(i);
      }) : (i.classList.remove("panning"), ce.animateReset(i));
    });
  }
  if (Array.isArray(r.action))
    r.action.forEach((o) => {
      let s = Bt(o, ut(i, ge));
      s && i.appendChild(s);
    });
  else if (typeof r.action == "object") {
    let o = Bt(r.action, ut(i, ge));
    o && i.appendChild(o);
  }
  return i;
}, Tn = (e, r) => {
  if (e.icon) {
    let i = document.createElement("i");
    switch (i.setAttribute("aria-hidden", "true"), e.iconPack) {
      case "fontawesome":
        i.classList.add("fa");
        let o = e.icon.name ? e.icon.name : e.icon;
        o.includes("fa-") ? i.classList.add(o.trim()) : i.classList.add("fa-" + o.trim());
        break;
      case "mdi":
        i.classList.add("mdi");
        let s = e.icon.name ? e.icon.name : e.icon;
        s.includes("mdi-") ? i.classList.add(s.trim()) : i.classList.add("mdi-" + s.trim());
        break;
      case "custom-class":
        let l = e.icon.name ? e.icon.name : e.icon;
        typeof l == "string" ? l.split(" ").forEach((v) => {
          i.classList.add(v);
        }) : Array.isArray(l) && l.forEach((v) => {
          i.classList.add(v.trim());
        });
        break;
      case "callback":
        let f = e.icon && e.icon instanceof Function ? e.icon : null;
        f && (i = f(i));
        break;
      default:
        i.classList.add("material-icons"), i.textContent = e.icon.name ? e.icon.name : e.icon;
    }
    e.icon.after && i.classList.add("after"), yn(e, i, r);
  }
}, yn = (e, r, i) => {
  e.icon && (e.icon.after && e.icon.name ? i.appendChild(r) : (e.icon.name, i.insertBefore(r, i.firstChild)));
}, Bt = (e, r) => {
  if (!e)
    return null;
  let i;
  if (e.href ? i = document.createElement("a") : i = document.createElement("button"), i.classList.add("action"), i.classList.add("ripple"), e.text && (i.text = e.text), e.href && (i.href = e.href), e.target && (i.target = e.target), e.icon) {
    i.classList.add("icon");
    let o = document.createElement("i");
    switch (We.iconPack) {
      case "fontawesome":
        o.classList.add("fa"), e.icon.includes("fa-") ? o.classList.add(e.icon.trim()) : o.classList.add("fa-" + e.icon.trim());
        break;
      case "mdi":
        o.classList.add("mdi"), e.icon.includes("mdi-") ? o.classList.add(e.icon.trim()) : o.classList.add("mdi-" + e.icon.trim());
        break;
      case "custom-class":
        typeof e.icon == "string" ? e.icon.split(" ").forEach((s) => {
          i.classList.add(s);
        }) : Array.isArray(e.icon) && e.icon.forEach((s) => {
          i.classList.add(s.trim());
        });
        break;
      default:
        o.classList.add("material-icons"), o.textContent = e.icon;
    }
    i.appendChild(o);
  }
  return e.class && (typeof e.class == "string" ? e.class.split(" ").forEach((o) => {
    i.classList.add(o);
  }) : Array.isArray(e.class) && e.class.forEach((o) => {
    i.classList.add(o.trim());
  })), e.push && i.addEventListener("click", (o) => {
    if (o.preventDefault(), !We.router) {
      console.warn("[vue-toasted] : Vue Router instance is not attached. please check the docs");
      return;
    }
    We.router.push(e.push), e.push.dontClose || r.goAway(0);
  }), e.onClick && typeof e.onClick == "function" && i.addEventListener("click", (o) => {
    e.onClick && (o.preventDefault(), e.onClick(o, r));
  }), i;
};
function En(e, r, i) {
  ge = e, i = mn(i);
  const o = ge.container;
  i.containerClass.unshift("toasted-container"), o.className !== i.containerClass.join(" ") && (o.className = "", i.containerClass.forEach((v) => {
    o.classList.add(v);
  }));
  let s = pn(r, i);
  r && o.appendChild(s), s.style.opacity = 0, ce.animateIn(s);
  let l = i.duration, f;
  if (l !== null) {
    const v = () => setInterval(function() {
      s.parentNode === null && window.clearInterval(f), s.classList.contains("panning") || (l -= 20), l <= 0 && (ce.animateOut(s, function() {
        typeof i.onComplete == "function" && i.onComplete(), s.parentNode && ge.remove(s);
      }), window.clearInterval(f));
    }, 20);
    f = v(), i.keepOnHover && (s.addEventListener("mouseover", () => {
      window.clearInterval(f);
    }), s.addEventListener("mouseout", () => {
      f = v();
    }));
  }
  return ut(s, ge);
}
const In = require("shortid");
require("es6-object-assign").polyfill();
const ur = function(e) {
  return this.id = In.generate(), this.options = e, this.cached_options = {}, this.global = {}, this.groups = [], this.toasts = [], this.container = null, Cn(this), cr(this), this.group = (r) => {
    r || (r = {}), r.globalToasts || (r.globalToasts = {}), Object.assign(r.globalToasts, this.global);
    let i = new ur(r);
    return this.groups.push(i), i;
  }, this.register = (r, i, o) => (o = o || {}, Pn(this, r, i, o)), this.show = (r, i) => Ne(this, r, i), this.success = (r, i) => (i = i || {}, i.type = "success", Ne(this, r, i)), this.info = (r, i) => (i = i || {}, i.type = "info", Ne(this, r, i)), this.error = (r, i) => (i = i || {}, i.type = "error", Ne(this, r, i)), this.remove = (r) => {
    this.toasts = this.toasts.filter((i) => i.el.hash !== r.hash), r.parentNode && r.parentNode.removeChild(r);
  }, this.clear = (r) => (ce.clearAnimation(this.toasts, () => {
    r && r();
  }), this.toasts = [], !0), this;
}, Ne = function(e, r, i) {
  i = i || {};
  let o = null;
  if (typeof i != "object")
    return console.error("Options should be a type of object. given : " + i), null;
  e.options.singleton && e.toasts.length > 0 && (e.cached_options = i, e.toasts[e.toasts.length - 1].goAway(0));
  let s = Object.assign({}, e.options);
  return Object.assign(s, i), o = En(e, r, s), e.toasts.push(o), o;
}, cr = function(e) {
  let r = e.options.globalToasts, i = (o, s) => typeof s == "string" && e[s] ? e[s].apply(e, [o, {}]) : Ne(e, o, s);
  r && (e.global = {}, Object.keys(r).forEach((o) => {
    e.global[o] = (s = {}) => r[o].apply(null, [s, i]);
  }));
}, Cn = function(e) {
  const r = document.createElement("div");
  r.id = e.id, r.setAttribute("role", "status"), r.setAttribute("aria-live", "polite"), r.setAttribute("aria-atomic", "false"), document.body.appendChild(r), e.container = r;
}, Pn = function(e, r, i, o) {
  e.options.globalToasts || (e.options.globalToasts = {}), e.options.globalToasts[r] = function(s, l) {
    let f = null;
    return typeof i == "string" && (f = i), typeof i == "function" && (f = i(s)), l(f, o);
  }, cr(e);
};
const On = {}, _n = {
  install(e, r) {
    r || (r = {});
    const i = new ur(r);
    e.component("toasted", On), e.toasted = e.prototype.$toasted = i;
  }
};
typeof window < "u" && window.Vue && (window.Toasted = _n);
export {
  _n as default
};
