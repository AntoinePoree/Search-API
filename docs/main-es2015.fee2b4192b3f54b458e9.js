(window.webpackJsonp = window.webpackJsonp || []).push([
  [1],
  {
    '+YFA': function(e, t, n) {
      'use strict';
      n.d(t, 'a', function() {
        return i;
      });
      var r = n('AytR'),
        s = n('8Y7J');
      let i = (() => {
        class e {
          intercept(e, t) {
            return /^(http|https):/i.test(e.url) || (e = e.clone({ url: r.a.serverUrl + e.url })), t.handle(e);
          }
        }
        return (
          (e.ngInjectableDef = s.Mb({
            factory: function() {
              return new e();
            },
            token: e,
            providedIn: 'root'
          })),
          e
        );
      })();
    },
    0: function(e, t, n) {
      e.exports = n('zUnb');
    },
    '0EUg': function(e, t, n) {
      'use strict';
      n.d(t, 'a', function() {
        return s;
      });
      var r = n('bHdf');
      function s() {
        return Object(r.a)(1);
      }
    },
    '0QMH': function(e, t, n) {
      'use strict';
      n.d(t, 'a', function() {
        return i;
      });
      var r = n('8Y7J'),
        s = n('rB/T');
      function i(e, t) {
        let n;
        e.hot.accept(),
          t()
            .then(e => (n = e))
            .catch(e => console.error(e)),
          e.hot.dispose(() => {
            const e = n.injector.get(r.g).components.map(e => e.location.nativeElement),
              t = Object(s.createNewHosts)(e);
            n.destroy(), t();
          });
      }
    },
    '128B': function(e, t, n) {
      'use strict';
      n.d(t, 'a', function() {
        return a;
      });
      var r = n('Kqap'),
        s = n('BFxc'),
        i = n('xbPD'),
        o = n('mCNh');
      function a(e, t) {
        return arguments.length >= 2
          ? function(n) {
              return Object(o.a)(Object(r.a)(e, t), Object(s.a)(1), Object(i.a)(t))(n);
            }
          : function(t) {
              return Object(o.a)(
                Object(r.a)((t, n, r) => e(t, n, r + 1)),
                Object(s.a)(1)
              )(t);
            };
      }
    },
    '1G5W': function(e, t, n) {
      'use strict';
      n.d(t, 'a', function() {
        return i;
      });
      var r = n('l7GE'),
        s = n('ZUHj');
      function i(e) {
        return t => t.lift(new o(e));
      }
      class o {
        constructor(e) {
          this.notifier = e;
        }
        call(e, t) {
          const n = new a(e),
            r = Object(s.a)(n, this.notifier);
          return r && !n.seenValue ? (n.add(r), t.subscribe(n)) : n;
        }
      }
      class a extends r.a {
        constructor(e) {
          super(e), (this.seenValue = !1);
        }
        notifyNext(e, t, n, r, s) {
          (this.seenValue = !0), this.complete();
        }
        notifyComplete() {}
      }
    },
    '2QA8': function(e, t, n) {
      'use strict';
      n.d(t, 'a', function() {
        return r;
      });
      const r = (() => ('function' == typeof Symbol ? Symbol('rxSubscriber') : '@@rxSubscriber_' + Math.random()))();
    },
    '2Vo4': function(e, t, n) {
      'use strict';
      n.d(t, 'a', function() {
        return i;
      });
      var r = n('XNiG'),
        s = n('9ppp');
      class i extends r.a {
        constructor(e) {
          super(), (this._value = e);
        }
        get value() {
          return this.getValue();
        }
        _subscribe(e) {
          const t = super._subscribe(e);
          return t && !t.closed && e.next(this._value), t;
        }
        getValue() {
          if (this.hasError) throw this.thrownError;
          if (this.closed) throw new s.a();
          return this._value;
        }
        next(e) {
          super.next((this._value = e));
        }
      }
    },
    '2fFW': function(e, t, n) {
      'use strict';
      n.d(t, 'a', function() {
        return s;
      });
      let r = !1;
      const s = {
        Promise: void 0,
        set useDeprecatedSynchronousErrorHandling(e) {
          r = e;
        },
        get useDeprecatedSynchronousErrorHandling() {
          return r;
        }
      };
    },
    '3UD+': function(e, t) {
      e.exports = function(e) {
        if (!e.webpackPolyfill) {
          var t = Object.create(e);
          t.children || (t.children = []),
            Object.defineProperty(t, 'loaded', {
              enumerable: !0,
              get: function() {
                return t.l;
              }
            }),
            Object.defineProperty(t, 'id', {
              enumerable: !0,
              get: function() {
                return t.i;
              }
            }),
            Object.defineProperty(t, 'exports', { enumerable: !0 }),
            (t.webpackPolyfill = 1);
        }
        return t;
      };
    },
    '4I5i': function(e, t, n) {
      'use strict';
      n.d(t, 'a', function() {
        return r;
      });
      const r = (() => {
        function e() {
          return (
            Error.call(this), (this.message = 'argument out of range'), (this.name = 'ArgumentOutOfRangeError'), this
          );
        }
        return (e.prototype = Object.create(Error.prototype)), e;
      })();
    },
    '4WJ2': function(e, t, n) {
      'use strict';
      n.d(t, 'b', function() {
        return u;
      }),
        n.d(t, 'a', function() {
          return c;
        });
      var r = n('fSl4'),
        s = n('A/Ql'),
        i = n('4odN'),
        o = n('8Y7J'),
        a = n('TSSN');
      const l = new r.a('I18nService');
      function u(e) {
        return e;
      }
      let c = (() => {
        class e {
          constructor(e) {
            (this.translateService = e), e.setTranslation('en-US', s), e.setTranslation('fr-FR', i);
          }
          init(e, t) {
            (this.defaultLanguage = e),
              (this.supportedLanguages = t),
              (this.language = ''),
              (this.langChangeSubscription = this.translateService.onLangChange.subscribe(e => {
                localStorage.setItem('language', e.lang);
              }));
          }
          destroy() {
            this.langChangeSubscription && this.langChangeSubscription.unsubscribe();
          }
          set language(e) {
            e = e || localStorage.getItem('language') || this.translateService.getBrowserCultureLang();
            let t = this.supportedLanguages.includes(e);
            e &&
              !t &&
              ((e = e.split('-')[0]), (e = this.supportedLanguages.find(t => t.startsWith(e)) || ''), (t = Boolean(e))),
              t || (e = this.defaultLanguage),
              l.debug('Language set to ' + e),
              this.translateService.use(e);
          }
          get language() {
            return this.translateService.currentLang;
          }
        }
        return (
          (e.ngInjectableDef = o.Mb({
            factory: function() {
              return new e(o.Nb(a.k));
            },
            token: e,
            providedIn: 'root'
          })),
          e
        );
      })();
    },
    '4odN': function(e) {
      e.exports = {
        APP_NAME: 'Search API',
        About: 'A propos',
        'Hello world !': 'Bonjour le monde !',
        Home: 'Accueil',
        Version: 'Version'
      };
    },
    '5+tZ': function(e, t, n) {
      'use strict';
      n.d(t, 'a', function() {
        return l;
      });
      var r = n('ZUHj'),
        s = n('l7GE'),
        i = n('51Dv'),
        o = n('lJxs'),
        a = n('Cfvw');
      function l(e, t, n = Number.POSITIVE_INFINITY) {
        return 'function' == typeof t
          ? r => r.pipe(l((n, r) => Object(a.a)(e(n, r)).pipe(Object(o.a)((e, s) => t(n, e, r, s))), n))
          : ('number' == typeof t && (n = t), t => t.lift(new u(e, n)));
      }
      class u {
        constructor(e, t = Number.POSITIVE_INFINITY) {
          (this.project = e), (this.concurrent = t);
        }
        call(e, t) {
          return t.subscribe(new c(e, this.project, this.concurrent));
        }
      }
      class c extends s.a {
        constructor(e, t, n = Number.POSITIVE_INFINITY) {
          super(e),
            (this.project = t),
            (this.concurrent = n),
            (this.hasCompleted = !1),
            (this.buffer = []),
            (this.active = 0),
            (this.index = 0);
        }
        _next(e) {
          this.active < this.concurrent ? this._tryNext(e) : this.buffer.push(e);
        }
        _tryNext(e) {
          let t;
          const n = this.index++;
          try {
            t = this.project(e, n);
          } catch (r) {
            return void this.destination.error(r);
          }
          this.active++, this._innerSub(t, e, n);
        }
        _innerSub(e, t, n) {
          const s = new i.a(this, t, n),
            o = this.destination;
          o.add(s);
          const a = Object(r.a)(this, e, void 0, void 0, s);
          a !== s && o.add(a);
        }
        _complete() {
          (this.hasCompleted = !0),
            0 === this.active && 0 === this.buffer.length && this.destination.complete(),
            this.unsubscribe();
        }
        notifyNext(e, t, n, r, s) {
          this.destination.next(t);
        }
        notifyComplete(e) {
          const t = this.buffer;
          this.remove(e),
            this.active--,
            t.length > 0
              ? this._next(t.shift())
              : 0 === this.active && this.hasCompleted && this.destination.complete();
        }
      }
    },
    '51Dv': function(e, t, n) {
      'use strict';
      n.d(t, 'a', function() {
        return s;
      });
      var r = n('7o/Q');
      class s extends r.a {
        constructor(e, t, n) {
          super(), (this.parent = e), (this.outerValue = t), (this.outerIndex = n), (this.index = 0);
        }
        _next(e) {
          this.parent.notifyNext(this.outerValue, e, this.outerIndex, this.index++, this);
        }
        _error(e) {
          this.parent.notifyError(e, this), this.unsubscribe();
        }
        _complete() {
          this.parent.notifyComplete(this), this.unsubscribe();
        }
      }
    },
    '7o/Q': function(e, t, n) {
      'use strict';
      n.d(t, 'a', function() {
        return u;
      });
      var r = n('n6bG'),
        s = n('gRHU'),
        i = n('quSY'),
        o = n('2QA8'),
        a = n('2fFW'),
        l = n('NJ4a');
      class u extends i.a {
        constructor(e, t, n) {
          switch (
            (super(),
            (this.syncErrorValue = null),
            (this.syncErrorThrown = !1),
            (this.syncErrorThrowable = !1),
            (this.isStopped = !1),
            arguments.length)
          ) {
            case 0:
              this.destination = s.a;
              break;
            case 1:
              if (!e) {
                this.destination = s.a;
                break;
              }
              if ('object' == typeof e) {
                e instanceof u
                  ? ((this.syncErrorThrowable = e.syncErrorThrowable), (this.destination = e), e.add(this))
                  : ((this.syncErrorThrowable = !0), (this.destination = new c(this, e)));
                break;
              }
            default:
              (this.syncErrorThrowable = !0), (this.destination = new c(this, e, t, n));
          }
        }
        [o.a]() {
          return this;
        }
        static create(e, t, n) {
          const r = new u(e, t, n);
          return (r.syncErrorThrowable = !1), r;
        }
        next(e) {
          this.isStopped || this._next(e);
        }
        error(e) {
          this.isStopped || ((this.isStopped = !0), this._error(e));
        }
        complete() {
          this.isStopped || ((this.isStopped = !0), this._complete());
        }
        unsubscribe() {
          this.closed || ((this.isStopped = !0), super.unsubscribe());
        }
        _next(e) {
          this.destination.next(e);
        }
        _error(e) {
          this.destination.error(e), this.unsubscribe();
        }
        _complete() {
          this.destination.complete(), this.unsubscribe();
        }
        _unsubscribeAndRecycle() {
          const { _parentOrParents: e } = this;
          return (
            (this._parentOrParents = null),
            this.unsubscribe(),
            (this.closed = !1),
            (this.isStopped = !1),
            (this._parentOrParents = e),
            this
          );
        }
      }
      class c extends u {
        constructor(e, t, n, i) {
          let o;
          super(), (this._parentSubscriber = e);
          let a = this;
          Object(r.a)(t)
            ? (o = t)
            : t &&
              ((o = t.next),
              (n = t.error),
              (i = t.complete),
              t !== s.a &&
                ((a = Object.create(t)),
                Object(r.a)(a.unsubscribe) && this.add(a.unsubscribe.bind(a)),
                (a.unsubscribe = this.unsubscribe.bind(this)))),
            (this._context = a),
            (this._next = o),
            (this._error = n),
            (this._complete = i);
        }
        next(e) {
          if (!this.isStopped && this._next) {
            const { _parentSubscriber: t } = this;
            a.a.useDeprecatedSynchronousErrorHandling && t.syncErrorThrowable
              ? this.__tryOrSetError(t, this._next, e) && this.unsubscribe()
              : this.__tryOrUnsub(this._next, e);
          }
        }
        error(e) {
          if (!this.isStopped) {
            const { _parentSubscriber: t } = this,
              { useDeprecatedSynchronousErrorHandling: n } = a.a;
            if (this._error)
              n && t.syncErrorThrowable
                ? (this.__tryOrSetError(t, this._error, e), this.unsubscribe())
                : (this.__tryOrUnsub(this._error, e), this.unsubscribe());
            else if (t.syncErrorThrowable)
              n ? ((t.syncErrorValue = e), (t.syncErrorThrown = !0)) : Object(l.a)(e), this.unsubscribe();
            else {
              if ((this.unsubscribe(), n)) throw e;
              Object(l.a)(e);
            }
          }
        }
        complete() {
          if (!this.isStopped) {
            const { _parentSubscriber: e } = this;
            if (this._complete) {
              const t = () => this._complete.call(this._context);
              a.a.useDeprecatedSynchronousErrorHandling && e.syncErrorThrowable
                ? (this.__tryOrSetError(e, t), this.unsubscribe())
                : (this.__tryOrUnsub(t), this.unsubscribe());
            } else this.unsubscribe();
          }
        }
        __tryOrUnsub(e, t) {
          try {
            e.call(this._context, t);
          } catch (n) {
            if ((this.unsubscribe(), a.a.useDeprecatedSynchronousErrorHandling)) throw n;
            Object(l.a)(n);
          }
        }
        __tryOrSetError(e, t, n) {
          if (!a.a.useDeprecatedSynchronousErrorHandling) throw new Error('bad call');
          try {
            t.call(this._context, n);
          } catch (r) {
            return a.a.useDeprecatedSynchronousErrorHandling
              ? ((e.syncErrorValue = r), (e.syncErrorThrown = !0), !0)
              : (Object(l.a)(r), !0);
          }
          return !1;
        }
        _unsubscribe() {
          const { _parentSubscriber: e } = this;
          (this._context = null), (this._parentSubscriber = null), e.unsubscribe();
        }
      }
    },
    '8Y7J': function(e, t, n) {
      'use strict';
      n.d(t, 'ib', function() {
        return Zi;
      }),
        n.d(t, 'jb', function() {
          return Ki;
        }),
        n.d(t, 'kb', function() {
          return Qi;
        }),
        n.d(t, 'lb', function() {
          return Yi;
        }),
        n.d(t, 'hb', function() {
          return Ws;
        }),
        n.d(t, 'gb', function() {
          return Ns;
        }),
        n.d(t, 'g', function() {
          return Ri;
        }),
        n.d(t, 'Q', function() {
          return Ai;
        }),
        n.d(t, 'x', function() {
          return Ti;
        }),
        n.d(t, 'R', function() {
          return Fe;
        }),
        n.d(t, 'U', function() {
          return He;
        }),
        n.d(t, 'c', function() {
          return Bs;
        }),
        n.d(t, 'B', function() {
          return Zs;
        }),
        n.d(t, 'A', function() {
          return Ks;
        }),
        n.d(t, 'b', function() {
          return Qs;
        }),
        n.d(t, 'd', function() {
          return $s;
        }),
        n.d(t, 'e', function() {
          return zs;
        }),
        n.d(t, 'T', function() {
          return Bi;
        }),
        n.d(t, 'L', function() {
          return Ci;
        }),
        n.d(t, 'W', function() {
          return Ei;
        }),
        n.d(t, 't', function() {
          return Js;
        }),
        n.d(t, 'f', function() {
          return Ji;
        }),
        n.d(t, 'm', function() {
          return Us;
        }),
        n.d(t, 'l', function() {
          return Pe;
        }),
        n.d(t, 'F', function() {
          return ut;
        }),
        n.d(t, 'G', function() {
          return lt;
        }),
        n.d(t, 'a', function() {
          return $t;
        }),
        n.d(t, 'O', function() {
          return q;
        }),
        n.d(t, 'M', function() {
          return En;
        }),
        n.d(t, 'Mb', function() {
          return g;
        }),
        n.d(t, 'S', function() {
          return w;
        }),
        n.d(t, 'q', function() {
          return Pt;
        }),
        n.d(t, 'Nb', function() {
          return R;
        }),
        n.d(t, 'n', function() {
          return D;
        }),
        n.d(t, 'p', function() {
          return k;
        }),
        n.d(t, 'o', function() {
          return u;
        }),
        n.d(t, 'z', function() {
          return c;
        }),
        n.d(t, 'H', function() {
          return d;
        }),
        n.d(t, 'y', function() {
          return gi;
        }),
        n.d(t, 'C', function() {
          return xn;
        }),
        n.d(t, 'D', function() {
          return _n;
        }),
        n.d(t, 'E', function() {
          return Cn;
        }),
        n.d(t, 'i', function() {
          return oi;
        }),
        n.d(t, 'j', function() {
          return fn;
        }),
        n.d(t, 'k', function() {
          return yn;
        }),
        n.d(t, 'u', function() {
          return H;
        }),
        n.d(t, 'w', function() {
          return L;
        }),
        n.d(t, 'v', function() {
          return Mi;
        }),
        n.d(t, 'I', function() {
          return Fi;
        }),
        n.d(t, 'J', function() {
          return Li;
        }),
        n.d(t, 'K', function() {
          return qn;
        }),
        n.d(t, 'N', function() {
          return zn;
        }),
        n.d(t, 'h', function() {
          return It;
        }),
        n.d(t, 'r', function() {
          return Ln;
        }),
        n.d(t, 's', function() {
          return Hn;
        }),
        n.d(t, 'P', function() {
          return Kt;
        }),
        n.d(t, 'V', function() {
          return Gi;
        }),
        n.d(t, 'vb', function() {
          return Qt;
        }),
        n.d(t, 'Z', function() {
          return Ys;
        }),
        n.d(t, 'X', function() {
          return Nt;
        }),
        n.d(t, 'Y', function() {
          return gn;
        }),
        n.d(t, 'cb', function() {
          return ot;
        }),
        n.d(t, 'db', function() {
          return dt;
        }),
        n.d(t, 'eb', function() {
          return $e;
        }),
        n.d(t, 'tb', function() {
          return O;
        }),
        n.d(t, 'yb', function() {
          return Gt;
        }),
        n.d(t, 'Gb', function() {
          return y;
        }),
        n.d(t, 'wb', function() {
          return ln;
        }),
        n.d(t, 'xb', function() {
          return an;
        }),
        n.d(t, 'sb', function() {
          return Hs;
        }),
        n.d(t, 'rb', function() {
          return Fs;
        }),
        n.d(t, 'ab', function() {
          return Rs;
        }),
        n.d(t, 'bb', function() {
          return Ps;
        }),
        n.d(t, 'Lb', function() {
          return J;
        }),
        n.d(t, 'Jb', function() {
          return zt;
        }),
        n.d(t, 'Pb', function() {
          return Jt;
        }),
        n.d(t, 'Ob', function() {
          return Xt;
        }),
        n.d(t, 'Kb', function() {
          return en;
        }),
        n.d(t, 'Qb', function() {
          return nn;
        }),
        n.d(t, 'fb', function() {
          return Xi;
        }),
        n.d(t, 'mb', function() {
          return Gr;
        }),
        n.d(t, 'nb', function() {
          return Ca;
        }),
        n.d(t, 'ob', function() {
          return or;
        }),
        n.d(t, 'pb', function() {
          return bs;
        }),
        n.d(t, 'qb', function() {
          return eo;
        }),
        n.d(t, 'ub', function() {
          return Nr;
        }),
        n.d(t, 'zb', function() {
          return Ur;
        }),
        n.d(t, 'Ab', function() {
          return Fr;
        }),
        n.d(t, 'Bb', function() {
          return co;
        }),
        n.d(t, 'Cb', function() {
          return ss;
        }),
        n.d(t, 'Eb', function() {
          return ys;
        }),
        n.d(t, 'Db', function() {
          return po;
        }),
        n.d(t, 'Fb', function() {
          return io;
        }),
        n.d(t, 'Hb', function() {
          return fo;
        }),
        n.d(t, 'Ib', function() {
          return bo;
        });
      var r = n('XNiG'),
        s = n('quSY'),
        i = n('HDdC'),
        o = n('VRyK'),
        a = n('w1tV');
      function l(e, t, n) {
        const r = (function(e) {
          return function(...t) {
            if (e) {
              const n = e(...t);
              for (const e in n) this[e] = n[e];
            }
          };
        })(t);
        function s(...e) {
          if (this instanceof s) return r.apply(this, e), this;
          const t = new s(...e);
          return (n.annotation = t), n;
          function n(e, n, r) {
            const s = e.hasOwnProperty('__parameters__')
              ? e.__parameters__
              : Object.defineProperty(e, '__parameters__', { value: [] }).__parameters__;
            for (; s.length <= r; ) s.push(null);
            return (s[r] = s[r] || []).push(t), e;
          }
        }
        return (
          n && (s.prototype = Object.create(n.prototype)), (s.prototype.ngMetadataName = e), (s.annotationCls = s), s
        );
      }
      const u = l('Inject', e => ({ token: e })),
        c = l('Optional'),
        h = l('Self'),
        d = l('SkipSelf');
      var p = (function(e) {
        return (
          (e[(e.Default = 0)] = 'Default'),
          (e[(e.Host = 1)] = 'Host'),
          (e[(e.Self = 2)] = 'Self'),
          (e[(e.SkipSelf = 4)] = 'SkipSelf'),
          (e[(e.Optional = 8)] = 'Optional'),
          e
        );
      })({});
      function f(e) {
        for (let t in e) if (e[t] === f) return t;
        throw Error('Could not find renamed property on target object.');
      }
      function g(e) {
        return { token: e.token, providedIn: e.providedIn || null, factory: e.factory, value: void 0 };
      }
      function m(e) {
        const t = e[b];
        return t && t.token === e ? t : null;
      }
      const b = f({ ngInjectableDef: f });
      function y(e) {
        if ('string' == typeof e) return e;
        if (e instanceof Array) return '[' + e.map(y).join(', ') + ']';
        if (null == e) return '' + e;
        if (e.overriddenName) return '' + e.overriddenName;
        if (e.name) return '' + e.name;
        const t = e.toString();
        if (null == t) return '' + t;
        const n = t.indexOf('\n');
        return -1 === n ? t : t.substring(0, n);
      }
      const v = f({ __forward_ref__: f });
      function w(e) {
        return (
          (e.__forward_ref__ = w),
          (e.toString = function() {
            return y(this());
          }),
          e
        );
      }
      function _(e) {
        const t = e;
        return 'function' == typeof t && t.hasOwnProperty(v) && t.__forward_ref__ === w ? t() : e;
      }
      const C = 'undefined' != typeof globalThis && globalThis,
        x = 'undefined' != typeof window && window,
        S =
          'undefined' != typeof self &&
          'undefined' != typeof WorkerGlobalScope &&
          self instanceof WorkerGlobalScope &&
          self,
        E = 'undefined' != typeof global && global,
        O = C || E || x || S;
      class k {
        constructor(e, t) {
          (this._desc = e),
            (this.ngMetadataName = 'InjectionToken'),
            (this.ngInjectableDef = void 0),
            'number' == typeof t
              ? (this.__NG_ELEMENT_ID__ = t)
              : void 0 !== t &&
                (this.ngInjectableDef = g({ token: this, providedIn: t.providedIn || 'root', factory: t.factory }));
        }
        toString() {
          return 'InjectionToken ' + this._desc;
        }
      }
      const D = new k('INJECTOR', -1),
        T = new Object(),
        A = /\n/gm,
        I = f({ provide: String, useValue: f });
      let j = void 0;
      function N(e) {
        const t = j;
        return (j = e), t;
      }
      function R(e, t = p.Default) {
        return (function(e, t = p.Default) {
          if (void 0 === j) throw new Error('inject() must be called from an injection context');
          return null === j
            ? (function(e, t, n) {
                const r = m(e);
                if (r && 'root' == r.providedIn) return void 0 === r.value ? (r.value = r.factory()) : r.value;
                if (n & p.Optional) return null;
                throw new Error(`Injector: NOT_FOUND [${y(e)}]`);
              })(e, 0, t)
            : j.get(e, t & p.Optional ? null : void 0, t);
        })(e, t);
      }
      class P {
        get(e, t = T) {
          if (t === T) {
            const t = new Error(`NullInjectorError: No provider for ${y(e)}!`);
            throw ((t.name = 'NullInjectorError'), t);
          }
          return t;
        }
      }
      function M(e, t, n, r = null) {
        e = e && '\n' === e.charAt(0) && '\u0275' == e.charAt(1) ? e.substr(2) : e;
        let s = y(t);
        if (t instanceof Array) s = t.map(y).join(' -> ');
        else if ('object' == typeof t) {
          let e = [];
          for (let n in t)
            if (t.hasOwnProperty(n)) {
              let r = t[n];
              e.push(n + ':' + ('string' == typeof r ? JSON.stringify(r) : y(r)));
            }
          s = `{${e.join(', ')}}`;
        }
        return `${n}${r ? '(' + r + ')' : ''}[${s}]: ${e.replace(A, '\n  ')}`;
      }
      class L {}
      class H {}
      function F(e, t, n) {
        t >= e.length ? e.push(n) : e.splice(t, 0, n);
      }
      function U(e, t) {
        return t >= e.length - 1 ? e.pop() : e.splice(t, 1)[0];
      }
      const V = (function() {
          var e = { OnPush: 0, Default: 1 };
          return (e[e.OnPush] = 'OnPush'), (e[e.Default] = 'Default'), e;
        })(),
        q = (function() {
          var e = { Emulated: 0, Native: 1, None: 2, ShadowDom: 3 };
          return (
            (e[e.Emulated] = 'Emulated'),
            (e[e.Native] = 'Native'),
            (e[e.None] = 'None'),
            (e[e.ShadowDom] = 'ShadowDom'),
            e
          );
        })(),
        $ = {},
        z = [],
        B = f({ ngComponentDef: f }),
        W = f({ ngDirectiveDef: f }),
        G = f({ ngPipeDef: f });
      let Z = 0;
      function K(e) {
        return (
          (function(e) {
            return e[B] || null;
          })(e) ||
          (function(e) {
            return e[W] || null;
          })(e)
        );
      }
      function Q(e) {
        return (function(e) {
          return e[G] || null;
        })(e);
      }
      function Y(e, t) {
        if (null == e) return $;
        const n = {};
        for (const r in e)
          if (e.hasOwnProperty(r)) {
            let s = e[r],
              i = s;
            Array.isArray(s) && ((i = s[1]), (s = s[0])), (n[s] = r), t && (t[s] = i);
          }
        return n;
      }
      const J = function(e) {
        const t = e.type,
          n = t.prototype,
          r = {},
          s = {
            type: t,
            providersResolver: null,
            consts: e.consts,
            vars: e.vars,
            factory: e.factory,
            template: e.template || null,
            ngContentSelectors: e.ngContentSelectors,
            hostBindings: e.hostBindings || null,
            contentQueries: e.contentQueries || null,
            declaredInputs: r,
            inputs: null,
            outputs: null,
            exportAs: e.exportAs || null,
            onChanges: null,
            onInit: n.ngOnInit || null,
            doCheck: n.ngDoCheck || null,
            afterContentInit: n.ngAfterContentInit || null,
            afterContentChecked: n.ngAfterContentChecked || null,
            afterViewInit: n.ngAfterViewInit || null,
            afterViewChecked: n.ngAfterViewChecked || null,
            onDestroy: n.ngOnDestroy || null,
            onPush: e.changeDetection === V.OnPush,
            directiveDefs: null,
            pipeDefs: null,
            selectors: e.selectors,
            viewQuery: e.viewQuery || null,
            features: e.features || null,
            data: e.data || {},
            encapsulation: e.encapsulation || q.Emulated,
            id: 'c',
            styles: e.styles || z,
            _: null,
            setInput: null,
            schemas: e.schemas || null,
            tView: null
          };
        return (
          (s._ =
            '' +
            {
              toString: () => {
                const n = e.directives,
                  i = e.features,
                  o = e.pipes;
                (s.id += Z++),
                  (s.inputs = Y(e.inputs, r)),
                  (s.outputs = Y(e.outputs)),
                  i && i.forEach(e => e(s)),
                  (s.directiveDefs = n ? () => ('function' == typeof n ? n() : n).map(K) : null),
                  (s.pipeDefs = o ? () => ('function' == typeof o ? o() : o).map(Q) : null),
                  t.hasOwnProperty(b) || (t[b] = g({ token: t, factory: e.factory }));
              }
            }),
          s
        );
      };
      let X = null;
      const ee = new Map();
      let te,
        ne = null;
      function re(e, t) {
        return (
          (ne && e === ne) ||
            ((ne = e),
            t && (X = ee.get(e) || null),
            (X = X || { classesBitMask: 0, classesIndex: 1, stylesBitMask: 0, stylesIndex: 1 })),
          X
        );
      }
      function se(e, t) {
        return (function(e) {
          for (; Array.isArray(e); ) e = e[0];
          return e;
        })(t[e.index]);
      }
      function ie(e, t) {
        return t[1].data[e + 19];
      }
      function oe() {
        return te;
      }
      const ae = (() =>
        (('undefined' != typeof requestAnimationFrame && requestAnimationFrame) || setTimeout).bind(O))();
      function le(e, t) {
        0 === t
          ? e[2] > 0 &&
            (function(e) {
              ce(e, 2 | ue(e));
            })(e)
          : (e[2] = t);
      }
      function ue(e) {
        return e[1];
      }
      function ce(e, t) {
        e[1] = t;
      }
      function he(e, t) {
        return e[t + 2];
      }
      function de(e, t) {
        return 1 & e[t + 0];
      }
      function pe(e, t) {
        return (1 & de(e, t)) > 0;
      }
      function fe(e, t) {
        return e[t + 0] >> 1;
      }
      function ge(e, t, n) {
        const r = de(e, t);
        e[t + 0] = r | (n << 1);
      }
      function me(e, t) {
        return e[t + 1];
      }
      function be(e, t, n) {
        return e[t + 3 + n];
      }
      function ye(e, t) {
        return !(!e || t !== e[2]);
      }
      function ve(e) {
        return (1 & ue(e)) > 0;
      }
      function we(e) {
        return (2 & ue(e)) > 0;
      }
      function _e(e) {
        return 6 + e[4];
      }
      function Ce(e, t) {
        let n = Array.isArray(e) ? e[0] : e,
          r = Array.isArray(t) ? t[0] : t;
        return (
          n instanceof String && (n = n.toString()),
          r instanceof String && (r = r.toString()),
          (function(e, t) {
            return !(e != e && t != t) && e !== t;
          })(n, r)
        );
      }
      function xe(e) {
        return null != e && '' !== e;
      }
      function Se(e) {
        return e.replace(/[a-z][A-Z]/g, e => e.charAt(0) + '-' + e.charAt(1)).toLowerCase();
      }
      function Ee(e) {
        return Oe(e) ? e[0] : e;
      }
      function Oe(e) {
        return Array.isArray(e) && e.length >= 6 && 'string' != typeof e[1];
      }
      function ke(e, t) {
        return e[t + 0];
      }
      function De(e, t, n) {
        e[t + 1] = n;
      }
      function Te(e, t) {
        return e[t + 1];
      }
      const Ae = (function() {
        var e = { Important: 1, DashCase: 2 };
        return (e[e.Important] = 'Important'), (e[e.DashCase] = 'DashCase'), e;
      })();
      function Ie(e) {
        return !!e.listen;
      }
      function je(e) {
        return e.ngDebugContext;
      }
      function Ne(e) {
        return e.ngOriginalError;
      }
      function Re(e, ...t) {
        e.error(...t);
      }
      class Pe {
        constructor() {
          this._console = console;
        }
        handleError(e) {
          const t = this._findOriginalError(e),
            n = this._findContext(e),
            r = (function(e) {
              return e.ngErrorLogger || Re;
            })(e);
          r(this._console, 'ERROR', e),
            t && r(this._console, 'ORIGINAL ERROR', t),
            n && r(this._console, 'ERROR CONTEXT', n);
        }
        _findContext(e) {
          return e ? (je(e) ? je(e) : this._findContext(Ne(e))) : null;
        }
        _findOriginalError(e) {
          let t = Ne(e);
          for (; t && Ne(t); ) t = Ne(t);
          return t;
        }
      }
      let Me = !0,
        Le = !1;
      function He() {
        return (Le = !0), Me;
      }
      function Fe() {
        if (Le) throw new Error('Cannot enable prod mode after platform setup.');
        Me = !1;
      }
      class Ue {
        constructor(e) {
          if (
            ((this.defaultDoc = e),
            (this.inertDocument = this.defaultDoc.implementation.createHTMLDocument('sanitization-inert')),
            (this.inertBodyElement = this.inertDocument.body),
            null == this.inertBodyElement)
          ) {
            const e = this.inertDocument.createElement('html');
            this.inertDocument.appendChild(e),
              (this.inertBodyElement = this.inertDocument.createElement('body')),
              e.appendChild(this.inertBodyElement);
          }
          (this.inertBodyElement.innerHTML = '<svg><g onload="this.parentNode.remove()"></g></svg>'),
            !this.inertBodyElement.querySelector || this.inertBodyElement.querySelector('svg')
              ? ((this.inertBodyElement.innerHTML = '<svg><p><style><img src="</style><img src=x onerror=alert(1)//">'),
                (this.getInertBodyElement =
                  this.inertBodyElement.querySelector &&
                  this.inertBodyElement.querySelector('svg img') &&
                  (function() {
                    try {
                      return !!window.DOMParser;
                    } catch (e) {
                      return !1;
                    }
                  })()
                    ? this.getInertBodyElement_DOMParser
                    : this.getInertBodyElement_InertDocument))
              : (this.getInertBodyElement = this.getInertBodyElement_XHR);
        }
        getInertBodyElement_XHR(e) {
          e = '<body><remove></remove>' + e + '</body>';
          try {
            e = encodeURI(e);
          } catch (r) {
            return null;
          }
          const t = new XMLHttpRequest();
          (t.responseType = 'document'), t.open('GET', 'data:text/html;charset=utf-8,' + e, !1), t.send(void 0);
          const n = t.response.body;
          return n.removeChild(n.firstChild), n;
        }
        getInertBodyElement_DOMParser(e) {
          e = '<body><remove></remove>' + e + '</body>';
          try {
            const t = new window.DOMParser().parseFromString(e, 'text/html').body;
            return t.removeChild(t.firstChild), t;
          } catch (t) {
            return null;
          }
        }
        getInertBodyElement_InertDocument(e) {
          const t = this.inertDocument.createElement('template');
          return 'content' in t
            ? ((t.innerHTML = e), t)
            : ((this.inertBodyElement.innerHTML = e),
              this.defaultDoc.documentMode && this.stripCustomNsAttrs(this.inertBodyElement),
              this.inertBodyElement);
        }
        stripCustomNsAttrs(e) {
          const t = e.attributes;
          for (let r = t.length - 1; 0 < r; r--) {
            const n = t.item(r).name;
            ('xmlns:ns1' !== n && 0 !== n.indexOf('ns1:')) || e.removeAttribute(n);
          }
          let n = e.firstChild;
          for (; n; ) n.nodeType === Node.ELEMENT_NODE && this.stripCustomNsAttrs(n), (n = n.nextSibling);
        }
      }
      const Ve = /^(?:(?:https?|mailto|ftp|tel|file):|[^&:/?#]*(?:[/?#]|$))/gi,
        qe = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[a-z0-9+\/]+=*$/i;
      function $e(e) {
        return (e = String(e)).match(Ve) || e.match(qe)
          ? e
          : (He() && console.warn(`WARNING: sanitizing unsafe URL value ${e} (see http://g.co/ng/security#xss)`),
            'unsafe:' + e);
      }
      function ze(e) {
        const t = {};
        for (const n of e.split(',')) t[n] = !0;
        return t;
      }
      function Be(...e) {
        const t = {};
        for (const n of e) for (const e in n) n.hasOwnProperty(e) && (t[e] = !0);
        return t;
      }
      const We = ze('area,br,col,hr,img,wbr'),
        Ge = ze('colgroup,dd,dt,li,p,tbody,td,tfoot,th,thead,tr'),
        Ze = ze('rp,rt'),
        Ke = Be(Ze, Ge),
        Qe = Be(
          We,
          Be(
            Ge,
            ze(
              'address,article,aside,blockquote,caption,center,del,details,dialog,dir,div,dl,figure,figcaption,footer,h1,h2,h3,h4,h5,h6,header,hgroup,hr,ins,main,map,menu,nav,ol,pre,section,summary,table,ul'
            )
          ),
          Be(
            Ze,
            ze(
              'a,abbr,acronym,audio,b,bdi,bdo,big,br,cite,code,del,dfn,em,font,i,img,ins,kbd,label,map,mark,picture,q,ruby,rp,rt,s,samp,small,source,span,strike,strong,sub,sup,time,track,tt,u,var,video'
            )
          ),
          Ke
        ),
        Ye = ze('background,cite,href,itemtype,longdesc,poster,src,xlink:href'),
        Je = ze('srcset'),
        Xe = Be(
          Ye,
          Je,
          ze(
            'abbr,accesskey,align,alt,autoplay,axis,bgcolor,border,cellpadding,cellspacing,class,clear,color,cols,colspan,compact,controls,coords,datetime,default,dir,download,face,headers,height,hidden,hreflang,hspace,ismap,itemscope,itemprop,kind,label,lang,language,loop,media,muted,nohref,nowrap,open,preload,rel,rev,role,rows,rowspan,rules,scope,scrolling,shape,size,sizes,span,srclang,start,summary,tabindex,target,title,translate,type,usemap,valign,value,vspace,width'
          ),
          ze(
            'aria-activedescendant,aria-atomic,aria-autocomplete,aria-busy,aria-checked,aria-colcount,aria-colindex,aria-colspan,aria-controls,aria-current,aria-describedby,aria-details,aria-disabled,aria-dropeffect,aria-errormessage,aria-expanded,aria-flowto,aria-grabbed,aria-haspopup,aria-hidden,aria-invalid,aria-keyshortcuts,aria-label,aria-labelledby,aria-level,aria-live,aria-modal,aria-multiline,aria-multiselectable,aria-orientation,aria-owns,aria-placeholder,aria-posinset,aria-pressed,aria-readonly,aria-relevant,aria-required,aria-roledescription,aria-rowcount,aria-rowindex,aria-rowspan,aria-selected,aria-setsize,aria-sort,aria-valuemax,aria-valuemin,aria-valuenow,aria-valuetext'
          )
        ),
        et = ze('script,style,template');
      class tt {
        constructor() {
          (this.sanitizedSomething = !1), (this.buf = []);
        }
        sanitizeChildren(e) {
          let t = e.firstChild,
            n = !0;
          for (; t; )
            if (
              (t.nodeType === Node.ELEMENT_NODE
                ? (n = this.startElement(t))
                : t.nodeType === Node.TEXT_NODE
                ? this.chars(t.nodeValue)
                : (this.sanitizedSomething = !0),
              n && t.firstChild)
            )
              t = t.firstChild;
            else
              for (; t; ) {
                t.nodeType === Node.ELEMENT_NODE && this.endElement(t);
                let e = this.checkClobberedElement(t, t.nextSibling);
                if (e) {
                  t = e;
                  break;
                }
                t = this.checkClobberedElement(t, t.parentNode);
              }
          return this.buf.join('');
        }
        startElement(e) {
          const t = e.nodeName.toLowerCase();
          if (!Qe.hasOwnProperty(t)) return (this.sanitizedSomething = !0), !et.hasOwnProperty(t);
          this.buf.push('<'), this.buf.push(t);
          const n = e.attributes;
          for (let s = 0; s < n.length; s++) {
            const e = n.item(s),
              t = e.name,
              i = t.toLowerCase();
            if (!Xe.hasOwnProperty(i)) {
              this.sanitizedSomething = !0;
              continue;
            }
            let o = e.value;
            Ye[i] && (o = $e(o)),
              Je[i] &&
                ((r = o),
                (o = (r = String(r))
                  .split(',')
                  .map(e => $e(e.trim()))
                  .join(', '))),
              this.buf.push(' ', t, '="', st(o), '"');
          }
          var r;
          return this.buf.push('>'), !0;
        }
        endElement(e) {
          const t = e.nodeName.toLowerCase();
          Qe.hasOwnProperty(t) && !We.hasOwnProperty(t) && (this.buf.push('</'), this.buf.push(t), this.buf.push('>'));
        }
        chars(e) {
          this.buf.push(st(e));
        }
        checkClobberedElement(e, t) {
          if (
            t &&
            (e.compareDocumentPosition(t) & Node.DOCUMENT_POSITION_CONTAINED_BY) === Node.DOCUMENT_POSITION_CONTAINED_BY
          )
            throw new Error('Failed to sanitize html because the element is clobbered: ' + e.outerHTML);
          return t;
        }
      }
      const nt = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g,
        rt = /([^\#-~ |!])/g;
      function st(e) {
        return e
          .replace(/&/g, '&amp;')
          .replace(nt, function(e) {
            return '&#' + (1024 * (e.charCodeAt(0) - 55296) + (e.charCodeAt(1) - 56320) + 65536) + ';';
          })
          .replace(rt, function(e) {
            return '&#' + e.charCodeAt(0) + ';';
          })
          .replace(/</g, '&lt;')
          .replace(/>/g, '&gt;');
      }
      let it;
      function ot(e, t) {
        let n = null;
        try {
          it = it || new Ue(e);
          let r = t ? String(t) : '';
          n = it.getInertBodyElement(r);
          let s = 5,
            i = r;
          do {
            if (0 === s) throw new Error('Failed to sanitize html because the input is unstable');
            s--, (r = i), (i = n.innerHTML), (n = it.getInertBodyElement(r));
          } while (r !== i);
          const o = new tt(),
            a = o.sanitizeChildren(at(n) || n);
          return (
            He() &&
              o.sanitizedSomething &&
              console.warn('WARNING: sanitizing HTML stripped some content, see http://g.co/ng/security#xss'),
            a
          );
        } finally {
          if (n) {
            const e = at(n) || n;
            for (; e.firstChild; ) e.removeChild(e.firstChild);
          }
        }
      }
      function at(e) {
        return 'content' in e &&
          (function(e) {
            return e.nodeType === Node.ELEMENT_NODE && 'TEMPLATE' === e.nodeName;
          })(e)
          ? e.content
          : null;
      }
      const lt = (function() {
        var e = { NONE: 0, HTML: 1, STYLE: 2, SCRIPT: 3, URL: 4, RESOURCE_URL: 5 };
        return (
          (e[e.NONE] = 'NONE'),
          (e[e.HTML] = 'HTML'),
          (e[e.STYLE] = 'STYLE'),
          (e[e.SCRIPT] = 'SCRIPT'),
          (e[e.URL] = 'URL'),
          (e[e.RESOURCE_URL] = 'RESOURCE_URL'),
          e
        );
      })();
      class ut {}
      const ct = new RegExp(
          '^([-,."\'%_!# a-zA-Z0-9]+|(?:(?:matrix|translate|scale|rotate|skew|perspective)(?:X|Y|Z|3d)?|(?:rgb|hsl)a?|(?:repeating-)?(?:linear|radial)-gradient|(?:calc|attr))\\([-0-9.%, #a-zA-Z]+\\))$',
          'g'
        ),
        ht = /^url\(([^)]+)\)$/;
      function dt(e) {
        if (!(e = String(e).trim())) return '';
        const t = e.match(ht);
        return (t && $e(t[1]) === t[1]) ||
          (e.match(ct) &&
            (function(e) {
              let t = !0,
                n = !0;
              for (let r = 0; r < e.length; r++) {
                const s = e.charAt(r);
                "'" === s && n ? (t = !t) : '"' === s && t && (n = !n);
              }
              return t && n;
            })(e))
          ? e
          : (He() && console.warn(`WARNING: sanitizing unsafe style value ${e} (see http://g.co/ng/security#xss).`),
            'unsafe');
      }
      const pt = /([A-Z])/g;
      function ft(e) {
        try {
          return null != e ? e.toString().slice(0, 30) : e;
        } catch (t) {
          return '[ERROR] Exception while trying to serialize the value';
        }
      }
      let gt = [];
      function mt(e, t, n, r, s, i, o, a, l) {
        ve(e) ||
          (o
            ? (function(e, t, n, r, s) {
                gt.unshift(e, t, n, r, s);
              })(e, n, r, s, l)
            : (gt.length && bt(), yt(e, n, r, s, l)));
        const u = a || Ce(t[s], i);
        return u && (t[s] = i), u;
      }
      function bt() {
        let e = 0;
        for (; e < gt.length; ) yt(gt[e++], gt[e++], gt[e++], gt[e++], gt[e++]);
        gt.length = 0;
      }
      function yt(e, t, n, r, s) {
        let i = !1;
        if (n) {
          let o = !1,
            a = _e(e);
          for (; a < e.length; ) {
            const i = me(e, a),
              l = he(e, a);
            if (((o = n <= l), o)) {
              n < l && vt(e, a, n, s), wt(e, !1, a, r, t);
              break;
            }
            a += 3 + i;
          }
          o || (vt(e, e.length, n, s), wt(e, !1, a, r, t), (i = !0));
        } else wt(e, !0, 3, r, t), (i = !0);
        return i;
      }
      function vt(e, t, n, r) {
        e.splice(t, 0, r ? 1 : 0, 1, n, null), ge(e, t, 1);
      }
      function wt(e, t, n, r, s) {
        const i = n + 3;
        let o = i + me(e, n);
        if ((t || o--, 'number' == typeof r)) {
          for (let t = i; t <= o; t++) if (e[t] === r) return;
          e.splice(o, 0, r), e[n + 1]++, ge(e, n, fe(e, n) | (1 << s));
        } else null !== r && null == e[o] && (e[o] = r);
      }
      function _t(e, t, n, r, s, i, o, a) {
        return s &&
          r &&
          ((function(e) {
            if (!ve(e)) {
              const t = Ee(e);
              t &&
                (function(e, t) {
                  for (let n = 1; n < t.length; n += 2) {
                    const r = Te(t, n);
                    r && yt(e, -1, ke(t, n), r, !1);
                  }
                })(e, t),
                (function(e) {
                  ce(e, 1 | ue(e));
                })(e);
            }
          })(r),
          (function(e, t) {
            return e && t > 0;
          })(r, i))
          ? ((function(e, t, n, r, s, i, o) {
              const a = !0 === (l = s) ? -1 : !1 === l ? 0 : l;
              var l;
              const u = Ct,
                c = (a & fe(e, 3)) > 0 ? 1 : 0;
              let h = _e(e);
              for (; h < e.length; ) {
                const s = me(e, h);
                if (a & fe(e, h)) {
                  let a = !1;
                  const l = he(e, h),
                    d = s - 1,
                    p = be(e, h, d);
                  for (let s = 0; s < d; s++) {
                    const u = be(e, h, s),
                      c = r[u];
                    if (xe(c)) {
                      i(t, n, l, o && pe(e, h) ? o(l, c, 2) : c, u), (a = !0);
                      break;
                    }
                  }
                  if (u) {
                    const s = u(e, t, n, r, i, o, c | (a ? 4 : 2), l, p);
                    a = a || s;
                  }
                  a || i(t, n, l, p);
                }
                h += 3 + s;
              }
              u && u(e, t, n, r, i, o, c);
            })(r, e, t, n, i, o, a),
            !0)
          : s;
      }
      let Ct = null;
      const xt = (e, t, n, r) => {
          const s = t.style;
          r
            ? ((r = r.toString()), e && Ie(e) ? e.setStyle(t, n, r, Ae.DashCase) : s && s.setProperty(n, r))
            : e && Ie(e)
            ? e.removeStyle(t, n, Ae.DashCase)
            : s && s.removeProperty(n);
        },
        St = (e, t, n, r) => {
          if ('' !== n) {
            const s = t.classList;
            r ? (e && Ie(e) ? e.addClass(t, n) : s && s.add(n)) : e && Ie(e) ? e.removeClass(t, n) : s && s.remove(n);
          }
        },
        Et = {},
        Ot = (e, t, n, r, s, i, o, a, l) => {
          let u = !1;
          if (me(e, 3)) {
            let c = !0;
            const h = !a;
            h && -2 & o && ((c = !1), (u = !0)),
              c &&
                (u = (function e(t, n, r, s, i, o, a, l, u, c) {
                  let h = !1;
                  if (u < me(t, 3)) {
                    const d = be(t, 3, u),
                      p = s[d];
                    let f = (function(e) {
                      return e >= Tt.length && Tt.push(1), Tt[e];
                    })(u);
                    for (; f < p.length; ) {
                      const g = ke(p, f),
                        m = l && g > l,
                        b = !m && g === l,
                        y = Te(p, f),
                        v = xe(y);
                      let w = e(t, n, r, s, i, o, m ? a : kt(a, v, b), m ? l : g, u + 1, c);
                      if (m) {
                        h || (h = w);
                        break;
                      }
                      if (!w && Dt(a, b)) {
                        const e = b && !v,
                          t = e ? c : y,
                          s = e ? d : null;
                        i(n, r, g, o ? o(g, t, 3) : t, s), (w = !0);
                      }
                      (h = w && b), (f += 2);
                    }
                    if (((Tt[u] = f), 1 === p.length || !l)) return e(t, n, r, s, i, o, a, l, u + 1, c);
                  }
                  return h;
                })(e, t, n, r, s, i, o, a || null, 0, l || null)),
              h &&
                (function() {
                  for (let e = 0; e < Tt.length; e++) Tt[e] = 1;
                })();
          }
          return u;
        };
      function kt(e, t, n) {
        let r = e;
        return t || 4 & e || !(n || 1 & e) ? ((r |= 4), (r &= -3)) : ((r |= 2), (r &= -5)), r;
      }
      function Dt(e, t) {
        let n = (1 & e) > 0;
        return n ? 4 & e && t && (n = !1) : 2 & e && (n = t), n;
      }
      const Tt = [];
      function At(e, t, n, r) {
        for (let s = 1; s < e.length; s += 2) {
          const i = ke(e, s);
          if (t <= i) {
            let o = !1;
            if (i === t) {
              const t = e[s];
              (!r && xe(t)) || ((o = !0), De(e, s, n));
            } else (o = !0), e.splice(s, 0, t, n);
            return o;
          }
        }
        return e.push(t, n), !0;
      }
      let It = (() => {
        class e {}
        return (e.__NG_ELEMENT_ID__ = () => jt()), e;
      })();
      const jt = (...e) => {},
        Nt = new k('The presence of this token marks an injector as being the root injector.'),
        Rt = function(e, t, n) {
          return new Ut(e, t, n);
        };
      let Pt = (() => {
        class e {
          static create(e, t) {
            return Array.isArray(e) ? Rt(e, t, '') : Rt(e.providers, e.parent, e.name || '');
          }
        }
        return (
          (e.THROW_IF_NOT_FOUND = T),
          (e.NULL = new P()),
          (e.ngInjectableDef = g({ token: e, providedIn: 'any', factory: () => R(D) })),
          (e.__NG_ELEMENT_ID__ = -1),
          e
        );
      })();
      const Mt = function(e) {
          return e;
        },
        Lt = [],
        Ht = Mt,
        Ft = function() {
          return Array.prototype.slice.call(arguments);
        };
      class Ut {
        constructor(e, t = Pt.NULL, n = null) {
          (this.parent = t), (this.source = n);
          const r = (this._records = new Map());
          r.set(Pt, { token: Pt, fn: Mt, deps: Lt, value: this, useNew: !1 }),
            r.set(D, { token: D, fn: Mt, deps: Lt, value: this, useNew: !1 }),
            (function e(t, n) {
              if (n)
                if ((n = _(n)) instanceof Array) for (let r = 0; r < n.length; r++) e(t, n[r]);
                else {
                  if ('function' == typeof n) throw qt('Function/Class not supported', n);
                  if (!n || 'object' != typeof n || !n.provide) throw qt('Unexpected provider', n);
                  {
                    let e = _(n.provide);
                    const r = (function(e) {
                      const t = (function(e) {
                        let t = Lt;
                        const n = e.deps;
                        if (n && n.length) {
                          t = [];
                          for (let e = 0; e < n.length; e++) {
                            let r = 6,
                              s = _(n[e]);
                            if (s instanceof Array)
                              for (let e = 0, t = s; e < t.length; e++) {
                                const n = t[e];
                                n instanceof c || n == c
                                  ? (r |= 1)
                                  : n instanceof d || n == d
                                  ? (r &= -3)
                                  : n instanceof h || n == h
                                  ? (r &= -5)
                                  : (s = n instanceof u ? n.token : _(n));
                              }
                            t.push({ token: s, options: r });
                          }
                        } else if (e.useExisting) t = [{ token: _(e.useExisting), options: 6 }];
                        else if (!n && !(I in e)) throw qt("'deps' required", e);
                        return t;
                      })(e);
                      let n = Mt,
                        r = Lt,
                        s = !1,
                        i = _(e.provide);
                      if (I in e) r = e.useValue;
                      else if (e.useFactory) n = e.useFactory;
                      else if (e.useExisting);
                      else if (e.useClass) (s = !0), (n = _(e.useClass));
                      else {
                        if ('function' != typeof i)
                          throw qt(
                            'StaticProvider does not have [useValue|useFactory|useExisting|useClass] or [provide] is not newable',
                            e
                          );
                        (s = !0), (n = i);
                      }
                      return { deps: t, fn: n, useNew: s, value: r };
                    })(n);
                    if (!0 === n.multi) {
                      let r = t.get(e);
                      if (r) {
                        if (r.fn !== Ft) throw Vt(e);
                      } else t.set(e, (r = { token: n.provide, deps: [], useNew: !1, fn: Ft, value: Lt }));
                      (e = n), r.deps.push({ token: e, options: 6 });
                    }
                    const s = t.get(e);
                    if (s && s.fn == Ft) throw Vt(e);
                    t.set(e, r);
                  }
                }
            })(r, e);
        }
        get(e, t, n = p.Default) {
          const r = this._records.get(e);
          try {
            return (function e(t, n, r, s, i, o) {
              try {
                return (function(t, n, r, s, i, o) {
                  let a;
                  if (!n || o & p.SkipSelf) o & p.Self || (a = s.get(t, i, p.Default));
                  else {
                    if (((a = n.value), a == Ht)) throw Error('\u0275Circular dependency');
                    if (a === Lt) {
                      n.value = Ht;
                      let t = void 0,
                        i = n.useNew,
                        o = n.fn,
                        l = n.deps,
                        u = Lt;
                      if (l.length) {
                        u = [];
                        for (let t = 0; t < l.length; t++) {
                          const n = l[t],
                            i = n.options,
                            o = 2 & i ? r.get(n.token) : void 0;
                          u.push(
                            e(n.token, o, r, o || 4 & i ? s : Pt.NULL, 1 & i ? null : Pt.THROW_IF_NOT_FOUND, p.Default)
                          );
                        }
                      }
                      n.value = a = i ? new o(...u) : o.apply(t, u);
                    }
                  }
                  return a;
                })(t, n, r, s, i, o);
              } catch (a) {
                throw (a instanceof Error || (a = new Error(a)),
                (a.ngTempTokenPath = a.ngTempTokenPath || []).unshift(t),
                n && n.value == Ht && (n.value = Lt),
                a);
              }
            })(e, r, this._records, this.parent, t, n);
          } catch (s) {
            return (function(e, t, n, r) {
              const s = e.ngTempTokenPath;
              throw (t.__source && s.unshift(t.__source),
              (e.message = M('\n' + e.message, s, 'StaticInjectorError', r)),
              (e.ngTokenPath = s),
              (e.ngTempTokenPath = null),
              e);
            })(s, e, 0, this.source);
          }
        }
        toString() {
          const e = [];
          return this._records.forEach((t, n) => e.push(y(n))), `StaticInjector[${e.join(', ')}]`;
        }
      }
      function Vt(e) {
        return qt('Cannot mix multi providers and regular providers', e);
      }
      function qt(e, t) {
        return new Error(M(e, t, 'StaticInjectorError'));
      }
      const $t = new k('AnalyzeForEntryComponents');
      function zt(e) {
        const t = (void 0)[1];
        t.firstTemplatePass &&
          ((function(e, t, n) {
            const r = e.expandoInstructions,
              s = r.length;
            s >= 2 && r[s - 2] === null.hostBindings ? (r[s - 1] = r[s - 1] + n) : r.push(null.hostBindings, n);
          })(t, 0, e),
          (function(e, t, n) {
            for (let r = 0; r < n; r++) (void 0).push(Et), e.blueprint.push(Et), e.data.push(null);
          })(t, 0, e));
      }
      let Bt = null;
      function Wt() {
        if (!Bt) {
          const e = O.Symbol;
          if (e && e.iterator) Bt = e.iterator;
          else {
            const e = Object.getOwnPropertyNames(Map.prototype);
            for (let t = 0; t < e.length; ++t) {
              const n = e[t];
              'entries' !== n && 'size' !== n && Map.prototype[n] === Map.prototype.entries && (Bt = n);
            }
          }
        }
        return Bt;
      }
      function Gt(e, t) {
        return e === t || ('number' == typeof e && 'number' == typeof t && isNaN(e) && isNaN(t));
      }
      function Zt(e, t) {
        const n = Qt(e),
          r = Qt(t);
        if (n && r)
          return (function(e, t, n) {
            const r = e[Wt()](),
              s = t[Wt()]();
            for (;;) {
              const e = r.next(),
                t = s.next();
              if (e.done && t.done) return !0;
              if (e.done || t.done) return !1;
              if (!n(e.value, t.value)) return !1;
            }
          })(e, t, Zt);
        {
          const s = e && ('object' == typeof e || 'function' == typeof e),
            i = t && ('object' == typeof t || 'function' == typeof t);
          return !(n || !s || r || !i) || Gt(e, t);
        }
      }
      class Kt {
        constructor(e) {
          this.wrapped = e;
        }
        static wrap(e) {
          return new Kt(e);
        }
        static unwrap(e) {
          return Kt.isWrapped(e) ? e.wrapped : e;
        }
        static isWrapped(e) {
          return e instanceof Kt;
        }
      }
      function Qt(e) {
        return !!Yt(e) && (Array.isArray(e) || (!(e instanceof Map) && Wt() in e));
      }
      function Yt(e) {
        return null !== e && ('function' == typeof e || 'object' == typeof e);
      }
      function Jt() {
        (void 0)[1].firstTemplatePass && (1, le(sn(void 0), 1), le(rn(void 0), 1));
      }
      function Xt(e) {
        const t = ie(-1, void 0),
          n = rn(t),
          r = (void 0)[7]++;
        tn(-1, n, r, e, !1, !1);
      }
      function en(e) {
        !(function(e, t) {
          const n = ie(-1, void 0),
            r = sn(n),
            s = (void 0)[7]++;
          tn(-1, r, s, t, !0, !1);
        })(0, e);
      }
      function tn(e, t, n, r, s, i) {
        Ct = Ot;
        let o = !1;
        if (r !== Et) {
          const a = se(ie(e, void 0), void 0),
            l = (void 0)[n];
          o = Ce(l, r);
          const u = (function(e, t, n) {
            const r = Array.isArray(e) ? e : [null];
            r[0] = t || null;
            for (let a = 1; a < r.length; a += 2) De(r, a, null);
            let s,
              i = null,
              o = !1;
            if (
              ('string' == typeof t
                ? t.length && ((i = t.split(/\s+/)), (o = !0))
                : ((i = t ? Object.keys(t) : null), (s = t)),
              i)
            )
              for (let a = 0; a < i.length; a++) {
                const e = i[a];
                At(r, n ? Se(e) : e, !!o || s[e], !0);
              }
            return r;
          })(l, r, !s);
          s
            ? (function(e, t, n, r, s, i, o, a) {
                const l = re(n, we(e));
                (!mt(e, void 0, 0, null, s, i, o, a, !1) && !a) || (l.classesBitMask |= 1);
              })(t, 0, a, 0, n, u, i, o)
            : (function(e, t, n, r, s, i, o, a, l) {
                const u = re(n, we(e));
                (!mt(e, void 0, 0, null, s, i, a, l, !0) && !l) || (u.stylesBitMask |= 1);
              })(t, 0, a, 0, n, u, oe(), i, o);
        }
        return o;
      }
      function nn() {
        const e = ie(-1, void 0),
          t = (function(e, t) {
            return 3 === e.type ? (void 0)[12] : null;
          })(e),
          n = se(e, void 0),
          r = oe();
        (function(e, t, n, r, s, i, o) {
          const a = n ? we(n) : !!r && we(r),
            l = ye(n, i),
            u = ye(r, i);
          gt.length && (l || u) && bt();
          const c = re(s, a),
            h = _t(e, s, t, n, l, c.classesBitMask, St, null),
            d = _t(e, s, t, r, u, c.stylesBitMask, xt, o);
          h && d
            ? ((X = null),
              (ne = null),
              a &&
                (function(e) {
                  ee.delete(e);
                })(s))
            : a &&
              (function(e, t) {
                ee.set(e, t);
              })(s, c);
        })(t, void 0, sn(e), rn(e), n, 1, r),
          (te = null);
      }
      function rn(e) {
        return on(e, !1);
      }
      function sn(e) {
        return on(e, !0);
      }
      function on(e, t) {
        let n = t ? e.classes : e.styles;
        return Oe(n) || ((n = [n || [''], 0, 0, 1, 0, '--MAP--']), t ? (e.classes = n) : (e.styles = n)), n;
      }
      function an(e) {
        return !!e && 'function' == typeof e.then;
      }
      function ln(e) {
        return !!e && 'function' == typeof e.subscribe;
      }
      class un {
        constructor(e, t, n) {
          (this.previousValue = e), (this.currentValue = t), (this.firstChange = n);
        }
        isFirstChange() {
          return this.firstChange;
        }
      }
      class cn {}
      function hn(e) {
        const t = Error(`No component factory found for ${y(e)}. Did you add it to @NgModule.entryComponents?`);
        return (t[dn] = e), t;
      }
      const dn = 'ngComponent';
      class pn {
        resolveComponentFactory(e) {
          throw hn(e);
        }
      }
      let fn = (() => {
        class e {}
        return (e.NULL = new pn()), e;
      })();
      class gn {
        constructor(e, t, n) {
          (this._parent = t), (this._ngModule = n), (this._factories = new Map());
          for (let r = 0; r < e.length; r++) {
            const t = e[r];
            this._factories.set(t.componentType, t);
          }
        }
        resolveComponentFactory(e) {
          let t = this._factories.get(e);
          if ((!t && this._parent && (t = this._parent.resolveComponentFactory(e)), !t)) throw hn(e);
          return new mn(t, this._ngModule);
        }
      }
      class mn extends cn {
        constructor(e, t) {
          super(),
            (this.factory = e),
            (this.ngModule = t),
            (this.selector = e.selector),
            (this.componentType = e.componentType),
            (this.ngContentSelectors = e.ngContentSelectors),
            (this.inputs = e.inputs),
            (this.outputs = e.outputs);
        }
        create(e, t, n, r) {
          return this.factory.create(e, t, n, r || this.ngModule);
        }
      }
      function bn(...e) {}
      let yn = (() => {
        class e {
          constructor(e) {
            this.nativeElement = e;
          }
        }
        return (e.__NG_ELEMENT_ID__ = () => vn(e)), e;
      })();
      const vn = bn;
      class wn {}
      class _n {}
      const Cn = (function() {
        var e = { Important: 1, DashCase: 2 };
        return (e[e.Important] = 'Important'), (e[e.DashCase] = 'DashCase'), e;
      })();
      let xn = (() => {
        class e {}
        return (e.__NG_ELEMENT_ID__ = () => Sn()), e;
      })();
      const Sn = bn;
      class En {
        constructor(e) {
          (this.full = e),
            (this.major = e.split('.')[0]),
            (this.minor = e.split('.')[1]),
            (this.patch = e
              .split('.')
              .slice(2)
              .join('.'));
        }
      }
      const On = new En('8.2.14');
      class kn {
        constructor() {}
        supports(e) {
          return Qt(e);
        }
        create(e) {
          return new Tn(e);
        }
      }
      const Dn = (e, t) => t;
      class Tn {
        constructor(e) {
          (this.length = 0),
            (this._linkedRecords = null),
            (this._unlinkedRecords = null),
            (this._previousItHead = null),
            (this._itHead = null),
            (this._itTail = null),
            (this._additionsHead = null),
            (this._additionsTail = null),
            (this._movesHead = null),
            (this._movesTail = null),
            (this._removalsHead = null),
            (this._removalsTail = null),
            (this._identityChangesHead = null),
            (this._identityChangesTail = null),
            (this._trackByFn = e || Dn);
        }
        forEachItem(e) {
          let t;
          for (t = this._itHead; null !== t; t = t._next) e(t);
        }
        forEachOperation(e) {
          let t = this._itHead,
            n = this._removalsHead,
            r = 0,
            s = null;
          for (; t || n; ) {
            const i = !n || (t && t.currentIndex < Nn(n, r, s)) ? t : n,
              o = Nn(i, r, s),
              a = i.currentIndex;
            if (i === n) r--, (n = n._nextRemoved);
            else if (((t = t._next), null == i.previousIndex)) r++;
            else {
              s || (s = []);
              const e = o - r,
                t = a - r;
              if (e != t) {
                for (let n = 0; n < e; n++) {
                  const r = n < s.length ? s[n] : (s[n] = 0),
                    i = r + n;
                  t <= i && i < e && (s[n] = r + 1);
                }
                s[i.previousIndex] = t - e;
              }
            }
            o !== a && e(i, o, a);
          }
        }
        forEachPreviousItem(e) {
          let t;
          for (t = this._previousItHead; null !== t; t = t._nextPrevious) e(t);
        }
        forEachAddedItem(e) {
          let t;
          for (t = this._additionsHead; null !== t; t = t._nextAdded) e(t);
        }
        forEachMovedItem(e) {
          let t;
          for (t = this._movesHead; null !== t; t = t._nextMoved) e(t);
        }
        forEachRemovedItem(e) {
          let t;
          for (t = this._removalsHead; null !== t; t = t._nextRemoved) e(t);
        }
        forEachIdentityChange(e) {
          let t;
          for (t = this._identityChangesHead; null !== t; t = t._nextIdentityChange) e(t);
        }
        diff(e) {
          if ((null == e && (e = []), !Qt(e)))
            throw new Error(`Error trying to diff '${y(e)}'. Only arrays and iterables are allowed`);
          return this.check(e) ? this : null;
        }
        onDestroy() {}
        check(e) {
          this._reset();
          let t,
            n,
            r,
            s = this._itHead,
            i = !1;
          if (Array.isArray(e)) {
            this.length = e.length;
            for (let t = 0; t < this.length; t++)
              (n = e[t]),
                (r = this._trackByFn(t, n)),
                null !== s && Gt(s.trackById, r)
                  ? (i && (s = this._verifyReinsertion(s, n, r, t)), Gt(s.item, n) || this._addIdentityChange(s, n))
                  : ((s = this._mismatch(s, n, r, t)), (i = !0)),
                (s = s._next);
          } else
            (t = 0),
              (function(e, t) {
                if (Array.isArray(e)) for (let n = 0; n < e.length; n++) t(e[n]);
                else {
                  const n = e[Wt()]();
                  let r;
                  for (; !(r = n.next()).done; ) t(r.value);
                }
              })(e, e => {
                (r = this._trackByFn(t, e)),
                  null !== s && Gt(s.trackById, r)
                    ? (i && (s = this._verifyReinsertion(s, e, r, t)), Gt(s.item, e) || this._addIdentityChange(s, e))
                    : ((s = this._mismatch(s, e, r, t)), (i = !0)),
                  (s = s._next),
                  t++;
              }),
              (this.length = t);
          return this._truncate(s), (this.collection = e), this.isDirty;
        }
        get isDirty() {
          return (
            null !== this._additionsHead ||
            null !== this._movesHead ||
            null !== this._removalsHead ||
            null !== this._identityChangesHead
          );
        }
        _reset() {
          if (this.isDirty) {
            let e, t;
            for (e = this._previousItHead = this._itHead; null !== e; e = e._next) e._nextPrevious = e._next;
            for (e = this._additionsHead; null !== e; e = e._nextAdded) e.previousIndex = e.currentIndex;
            for (this._additionsHead = this._additionsTail = null, e = this._movesHead; null !== e; e = t)
              (e.previousIndex = e.currentIndex), (t = e._nextMoved);
            (this._movesHead = this._movesTail = null),
              (this._removalsHead = this._removalsTail = null),
              (this._identityChangesHead = this._identityChangesTail = null);
          }
        }
        _mismatch(e, t, n, r) {
          let s;
          return (
            null === e ? (s = this._itTail) : ((s = e._prev), this._remove(e)),
            null !== (e = null === this._linkedRecords ? null : this._linkedRecords.get(n, r))
              ? (Gt(e.item, t) || this._addIdentityChange(e, t), this._moveAfter(e, s, r))
              : null !== (e = null === this._unlinkedRecords ? null : this._unlinkedRecords.get(n, null))
              ? (Gt(e.item, t) || this._addIdentityChange(e, t), this._reinsertAfter(e, s, r))
              : (e = this._addAfter(new An(t, n), s, r)),
            e
          );
        }
        _verifyReinsertion(e, t, n, r) {
          let s = null === this._unlinkedRecords ? null : this._unlinkedRecords.get(n, null);
          return (
            null !== s
              ? (e = this._reinsertAfter(s, e._prev, r))
              : e.currentIndex != r && ((e.currentIndex = r), this._addToMoves(e, r)),
            e
          );
        }
        _truncate(e) {
          for (; null !== e; ) {
            const t = e._next;
            this._addToRemovals(this._unlink(e)), (e = t);
          }
          null !== this._unlinkedRecords && this._unlinkedRecords.clear(),
            null !== this._additionsTail && (this._additionsTail._nextAdded = null),
            null !== this._movesTail && (this._movesTail._nextMoved = null),
            null !== this._itTail && (this._itTail._next = null),
            null !== this._removalsTail && (this._removalsTail._nextRemoved = null),
            null !== this._identityChangesTail && (this._identityChangesTail._nextIdentityChange = null);
        }
        _reinsertAfter(e, t, n) {
          null !== this._unlinkedRecords && this._unlinkedRecords.remove(e);
          const r = e._prevRemoved,
            s = e._nextRemoved;
          return (
            null === r ? (this._removalsHead = s) : (r._nextRemoved = s),
            null === s ? (this._removalsTail = r) : (s._prevRemoved = r),
            this._insertAfter(e, t, n),
            this._addToMoves(e, n),
            e
          );
        }
        _moveAfter(e, t, n) {
          return this._unlink(e), this._insertAfter(e, t, n), this._addToMoves(e, n), e;
        }
        _addAfter(e, t, n) {
          return (
            this._insertAfter(e, t, n),
            (this._additionsTail =
              null === this._additionsTail ? (this._additionsHead = e) : (this._additionsTail._nextAdded = e)),
            e
          );
        }
        _insertAfter(e, t, n) {
          const r = null === t ? this._itHead : t._next;
          return (
            (e._next = r),
            (e._prev = t),
            null === r ? (this._itTail = e) : (r._prev = e),
            null === t ? (this._itHead = e) : (t._next = e),
            null === this._linkedRecords && (this._linkedRecords = new jn()),
            this._linkedRecords.put(e),
            (e.currentIndex = n),
            e
          );
        }
        _remove(e) {
          return this._addToRemovals(this._unlink(e));
        }
        _unlink(e) {
          null !== this._linkedRecords && this._linkedRecords.remove(e);
          const t = e._prev,
            n = e._next;
          return null === t ? (this._itHead = n) : (t._next = n), null === n ? (this._itTail = t) : (n._prev = t), e;
        }
        _addToMoves(e, t) {
          return (
            e.previousIndex === t ||
              (this._movesTail = null === this._movesTail ? (this._movesHead = e) : (this._movesTail._nextMoved = e)),
            e
          );
        }
        _addToRemovals(e) {
          return (
            null === this._unlinkedRecords && (this._unlinkedRecords = new jn()),
            this._unlinkedRecords.put(e),
            (e.currentIndex = null),
            (e._nextRemoved = null),
            null === this._removalsTail
              ? ((this._removalsTail = this._removalsHead = e), (e._prevRemoved = null))
              : ((e._prevRemoved = this._removalsTail), (this._removalsTail = this._removalsTail._nextRemoved = e)),
            e
          );
        }
        _addIdentityChange(e, t) {
          return (
            (e.item = t),
            (this._identityChangesTail =
              null === this._identityChangesTail
                ? (this._identityChangesHead = e)
                : (this._identityChangesTail._nextIdentityChange = e)),
            e
          );
        }
      }
      class An {
        constructor(e, t) {
          (this.item = e),
            (this.trackById = t),
            (this.currentIndex = null),
            (this.previousIndex = null),
            (this._nextPrevious = null),
            (this._prev = null),
            (this._next = null),
            (this._prevDup = null),
            (this._nextDup = null),
            (this._prevRemoved = null),
            (this._nextRemoved = null),
            (this._nextAdded = null),
            (this._nextMoved = null),
            (this._nextIdentityChange = null);
        }
      }
      class In {
        constructor() {
          (this._head = null), (this._tail = null);
        }
        add(e) {
          null === this._head
            ? ((this._head = this._tail = e), (e._nextDup = null), (e._prevDup = null))
            : ((this._tail._nextDup = e), (e._prevDup = this._tail), (e._nextDup = null), (this._tail = e));
        }
        get(e, t) {
          let n;
          for (n = this._head; null !== n; n = n._nextDup)
            if ((null === t || t <= n.currentIndex) && Gt(n.trackById, e)) return n;
          return null;
        }
        remove(e) {
          const t = e._prevDup,
            n = e._nextDup;
          return (
            null === t ? (this._head = n) : (t._nextDup = n),
            null === n ? (this._tail = t) : (n._prevDup = t),
            null === this._head
          );
        }
      }
      class jn {
        constructor() {
          this.map = new Map();
        }
        put(e) {
          const t = e.trackById;
          let n = this.map.get(t);
          n || ((n = new In()), this.map.set(t, n)), n.add(e);
        }
        get(e, t) {
          const n = this.map.get(e);
          return n ? n.get(e, t) : null;
        }
        remove(e) {
          const t = e.trackById;
          return this.map.get(t).remove(e) && this.map.delete(t), e;
        }
        get isEmpty() {
          return 0 === this.map.size;
        }
        clear() {
          this.map.clear();
        }
      }
      function Nn(e, t, n) {
        const r = e.previousIndex;
        if (null === r) return r;
        let s = 0;
        return n && r < n.length && (s = n[r]), r + t + s;
      }
      class Rn {
        constructor() {}
        supports(e) {
          return e instanceof Map || Yt(e);
        }
        create() {
          return new Pn();
        }
      }
      class Pn {
        constructor() {
          (this._records = new Map()),
            (this._mapHead = null),
            (this._appendAfter = null),
            (this._previousMapHead = null),
            (this._changesHead = null),
            (this._changesTail = null),
            (this._additionsHead = null),
            (this._additionsTail = null),
            (this._removalsHead = null),
            (this._removalsTail = null);
        }
        get isDirty() {
          return null !== this._additionsHead || null !== this._changesHead || null !== this._removalsHead;
        }
        forEachItem(e) {
          let t;
          for (t = this._mapHead; null !== t; t = t._next) e(t);
        }
        forEachPreviousItem(e) {
          let t;
          for (t = this._previousMapHead; null !== t; t = t._nextPrevious) e(t);
        }
        forEachChangedItem(e) {
          let t;
          for (t = this._changesHead; null !== t; t = t._nextChanged) e(t);
        }
        forEachAddedItem(e) {
          let t;
          for (t = this._additionsHead; null !== t; t = t._nextAdded) e(t);
        }
        forEachRemovedItem(e) {
          let t;
          for (t = this._removalsHead; null !== t; t = t._nextRemoved) e(t);
        }
        diff(e) {
          if (e) {
            if (!(e instanceof Map || Yt(e)))
              throw new Error(`Error trying to diff '${y(e)}'. Only maps and objects are allowed`);
          } else e = new Map();
          return this.check(e) ? this : null;
        }
        onDestroy() {}
        check(e) {
          this._reset();
          let t = this._mapHead;
          if (
            ((this._appendAfter = null),
            this._forEach(e, (e, n) => {
              if (t && t.key === n) this._maybeAddToChanges(t, e), (this._appendAfter = t), (t = t._next);
              else {
                const r = this._getOrCreateRecordForKey(n, e);
                t = this._insertBeforeOrAppend(t, r);
              }
            }),
            t)
          ) {
            t._prev && (t._prev._next = null), (this._removalsHead = t);
            for (let e = t; null !== e; e = e._nextRemoved)
              e === this._mapHead && (this._mapHead = null),
                this._records.delete(e.key),
                (e._nextRemoved = e._next),
                (e.previousValue = e.currentValue),
                (e.currentValue = null),
                (e._prev = null),
                (e._next = null);
          }
          return (
            this._changesTail && (this._changesTail._nextChanged = null),
            this._additionsTail && (this._additionsTail._nextAdded = null),
            this.isDirty
          );
        }
        _insertBeforeOrAppend(e, t) {
          if (e) {
            const n = e._prev;
            return (
              (t._next = e),
              (t._prev = n),
              (e._prev = t),
              n && (n._next = t),
              e === this._mapHead && (this._mapHead = t),
              (this._appendAfter = e),
              e
            );
          }
          return (
            this._appendAfter ? ((this._appendAfter._next = t), (t._prev = this._appendAfter)) : (this._mapHead = t),
            (this._appendAfter = t),
            null
          );
        }
        _getOrCreateRecordForKey(e, t) {
          if (this._records.has(e)) {
            const n = this._records.get(e);
            this._maybeAddToChanges(n, t);
            const r = n._prev,
              s = n._next;
            return r && (r._next = s), s && (s._prev = r), (n._next = null), (n._prev = null), n;
          }
          const n = new Mn(e);
          return this._records.set(e, n), (n.currentValue = t), this._addToAdditions(n), n;
        }
        _reset() {
          if (this.isDirty) {
            let e;
            for (this._previousMapHead = this._mapHead, e = this._previousMapHead; null !== e; e = e._next)
              e._nextPrevious = e._next;
            for (e = this._changesHead; null !== e; e = e._nextChanged) e.previousValue = e.currentValue;
            for (e = this._additionsHead; null != e; e = e._nextAdded) e.previousValue = e.currentValue;
            (this._changesHead = this._changesTail = null),
              (this._additionsHead = this._additionsTail = null),
              (this._removalsHead = null);
          }
        }
        _maybeAddToChanges(e, t) {
          Gt(t, e.currentValue) || ((e.previousValue = e.currentValue), (e.currentValue = t), this._addToChanges(e));
        }
        _addToAdditions(e) {
          null === this._additionsHead
            ? (this._additionsHead = this._additionsTail = e)
            : ((this._additionsTail._nextAdded = e), (this._additionsTail = e));
        }
        _addToChanges(e) {
          null === this._changesHead
            ? (this._changesHead = this._changesTail = e)
            : ((this._changesTail._nextChanged = e), (this._changesTail = e));
        }
        _forEach(e, t) {
          e instanceof Map ? e.forEach(t) : Object.keys(e).forEach(n => t(e[n], n));
        }
      }
      class Mn {
        constructor(e) {
          (this.key = e),
            (this.previousValue = null),
            (this.currentValue = null),
            (this._nextPrevious = null),
            (this._next = null),
            (this._prev = null),
            (this._nextAdded = null),
            (this._nextRemoved = null),
            (this._nextChanged = null);
        }
      }
      let Ln = (() => {
          class e {
            constructor(e) {
              this.factories = e;
            }
            static create(t, n) {
              if (null != n) {
                const e = n.factories.slice();
                t = t.concat(e);
              }
              return new e(t);
            }
            static extend(t) {
              return {
                provide: e,
                useFactory: n => {
                  if (!n) throw new Error('Cannot extend IterableDiffers without a parent injector');
                  return e.create(t, n);
                },
                deps: [[e, new d(), new c()]]
              };
            }
            find(e) {
              const t = this.factories.find(t => t.supports(e));
              if (null != t) return t;
              throw new Error(
                `Cannot find a differ supporting object '${e}' of type '${((n = e), n.name || typeof n)}'`
              );
              var n;
            }
          }
          return (e.ngInjectableDef = g({ token: e, providedIn: 'root', factory: () => new e([new kn()]) })), e;
        })(),
        Hn = (() => {
          class e {
            constructor(e) {
              this.factories = e;
            }
            static create(t, n) {
              if (n) {
                const e = n.factories.slice();
                t = t.concat(e);
              }
              return new e(t);
            }
            static extend(t) {
              return {
                provide: e,
                useFactory: n => {
                  if (!n) throw new Error('Cannot extend KeyValueDiffers without a parent injector');
                  return e.create(t, n);
                },
                deps: [[e, new d(), new c()]]
              };
            }
            find(e) {
              const t = this.factories.find(t => t.supports(e));
              if (t) return t;
              throw new Error(`Cannot find a differ supporting object '${e}'`);
            }
          }
          return (e.ngInjectableDef = g({ token: e, providedIn: 'root', factory: () => new e([new Rn()]) })), e;
        })();
      const Fn = [new Rn()],
        Un = new Ln([new kn()]),
        Vn = new Hn(Fn);
      let qn = (() => {
        class e {}
        return (e.__NG_ELEMENT_ID__ = () => $n(e, yn)), e;
      })();
      const $n = bn;
      let zn = (() => {
        class e {}
        return (e.__NG_ELEMENT_ID__ = () => Bn(e, yn)), e;
      })();
      const Bn = bn;
      function Wn(e, t, n, r) {
        let s = `ExpressionChangedAfterItHasBeenCheckedError: Expression has changed after it was checked. Previous value: '${t}'. Current value: '${n}'.`;
        return (
          r &&
            (s +=
              ' It seems like the view has been created after its parent and its children have been dirty checked. Has it been created in a change detection hook ?'),
          (function(e, t) {
            const n = new Error(e);
            return Gn(n, t), n;
          })(s, e)
        );
      }
      function Gn(e, t) {
        (e.ngDebugContext = t), (e.ngErrorLogger = t.logError.bind(t));
      }
      function Zn(e) {
        return new Error('ViewDestroyedError: Attempt to use a destroyed view: ' + e);
      }
      function Kn(e, t, n) {
        const r = e.state,
          s = 1792 & r;
        return s === t ? ((e.state = (-1793 & r) | n), (e.initIndex = -1), !0) : s === n;
      }
      function Qn(e, t, n) {
        return (1792 & e.state) === t && e.initIndex <= n && ((e.initIndex = n + 1), !0);
      }
      function Yn(e, t) {
        return e.nodes[t];
      }
      function Jn(e, t) {
        return e.nodes[t];
      }
      function Xn(e, t) {
        return e.nodes[t];
      }
      function er(e, t) {
        return e.nodes[t];
      }
      function tr(e, t) {
        return e.nodes[t];
      }
      const nr = {
          setCurrentNode: void 0,
          createRootView: void 0,
          createEmbeddedView: void 0,
          createComponentView: void 0,
          createNgModuleRef: void 0,
          overrideProvider: void 0,
          overrideComponentView: void 0,
          clearOverrides: void 0,
          checkAndUpdateView: void 0,
          checkNoChangesView: void 0,
          destroyView: void 0,
          resolveDep: void 0,
          createDebugContext: void 0,
          handleEvent: void 0,
          updateDirectives: void 0,
          updateRenderer: void 0,
          dirtyParentQueries: void 0
        },
        rr = () => {},
        sr = new Map();
      function ir(e) {
        let t = sr.get(e);
        return t || ((t = y(e) + '_' + sr.size), sr.set(e, t)), t;
      }
      function or(e) {
        return { id: '$$undefined', styles: e.styles, encapsulation: e.encapsulation, data: e.data };
      }
      let ar = 0;
      function lr(e, t, n, r) {
        return !(!(2 & e.state) && Gt(e.oldValues[t.bindingIndex + n], r));
      }
      function ur(e, t, n, r) {
        return !!lr(e, t, n, r) && ((e.oldValues[t.bindingIndex + n] = r), !0);
      }
      function cr(e, t, n, r) {
        const s = e.oldValues[t.bindingIndex + n];
        if (1 & e.state || !Zt(s, r)) {
          const i = t.bindings[n].name;
          throw Wn(nr.createDebugContext(e, t.nodeIndex), `${i}: ${s}`, `${i}: ${r}`, 0 != (1 & e.state));
        }
      }
      function hr(e) {
        let t = e;
        for (; t; ) 2 & t.def.flags && (t.state |= 8), (t = t.viewContainerParent || t.parent);
      }
      function dr(e, t) {
        let n = e;
        for (; n && n !== t; ) (n.state |= 64), (n = n.viewContainerParent || n.parent);
      }
      function pr(e, t, n, r) {
        try {
          return hr(33554432 & e.def.nodes[t].flags ? Jn(e, t).componentView : e), nr.handleEvent(e, t, n, r);
        } catch (s) {
          e.root.errorHandler.handleError(s);
        }
      }
      function fr(e) {
        return e.parent ? Jn(e.parent, e.parentNodeDef.nodeIndex) : null;
      }
      function gr(e) {
        return e.parent ? e.parentNodeDef.parent : null;
      }
      function mr(e, t) {
        switch (201347067 & t.flags) {
          case 1:
            return Jn(e, t.nodeIndex).renderElement;
          case 2:
            return Yn(e, t.nodeIndex).renderText;
        }
      }
      function br(e) {
        return !!e.parent && !!(32768 & e.parentNodeDef.flags);
      }
      function yr(e) {
        return !(!e.parent || 32768 & e.parentNodeDef.flags);
      }
      function vr(e) {
        return 1 << e % 32;
      }
      function wr(e) {
        const t = {};
        let n = 0;
        const r = {};
        return (
          e &&
            e.forEach(([e, s]) => {
              'number' == typeof e ? ((t[e] = s), (n |= vr(e))) : (r[e] = s);
            }),
          { matchedQueries: t, references: r, matchedQueryIds: n }
        );
      }
      function _r(e, t) {
        return e.map(e => {
          let n, r;
          return (
            Array.isArray(e) ? ([r, n] = e) : ((r = 0), (n = e)),
            n &&
              ('function' == typeof n || 'object' == typeof n) &&
              t &&
              Object.defineProperty(n, '__source', { value: t, configurable: !0 }),
            { flags: r, token: n, tokenKey: ir(n) }
          );
        });
      }
      function Cr(e, t, n) {
        let r = n.renderParent;
        return r
          ? 0 == (1 & r.flags) ||
            0 == (33554432 & r.flags) ||
            (r.element.componentRendererType && r.element.componentRendererType.encapsulation === q.Native)
            ? Jn(e, n.renderParent.nodeIndex).renderElement
            : void 0
          : t;
      }
      const xr = new WeakMap();
      function Sr(e) {
        let t = xr.get(e);
        return t || ((t = e(() => rr)), (t.factory = e), xr.set(e, t)), t;
      }
      function Er(e, t, n, r, s) {
        3 === t && (n = e.renderer.parentNode(mr(e, e.def.lastRenderRootNode))),
          Or(e, t, 0, e.def.nodes.length - 1, n, r, s);
      }
      function Or(e, t, n, r, s, i, o) {
        for (let a = n; a <= r; a++) {
          const n = e.def.nodes[a];
          11 & n.flags && Dr(e, n, t, s, i, o), (a += n.childCount);
        }
      }
      function kr(e, t, n, r, s, i) {
        let o = e;
        for (; o && !br(o); ) o = o.parent;
        const a = o.parent,
          l = gr(o),
          u = l.nodeIndex + l.childCount;
        for (let c = l.nodeIndex + 1; c <= u; c++) {
          const e = a.def.nodes[c];
          e.ngContentIndex === t && Dr(a, e, n, r, s, i), (c += e.childCount);
        }
        if (!a.parent) {
          const o = e.root.projectableNodes[t];
          if (o) for (let t = 0; t < o.length; t++) Tr(e, o[t], n, r, s, i);
        }
      }
      function Dr(e, t, n, r, s, i) {
        if (8 & t.flags) kr(e, t.ngContent.index, n, r, s, i);
        else {
          const o = mr(e, t);
          if (
            (3 === n && 33554432 & t.flags && 48 & t.bindingFlags
              ? (16 & t.bindingFlags && Tr(e, o, n, r, s, i),
                32 & t.bindingFlags && Tr(Jn(e, t.nodeIndex).componentView, o, n, r, s, i))
              : Tr(e, o, n, r, s, i),
            16777216 & t.flags)
          ) {
            const o = Jn(e, t.nodeIndex).viewContainer._embeddedViews;
            for (let e = 0; e < o.length; e++) Er(o[e], n, r, s, i);
          }
          1 & t.flags && !t.element.name && Or(e, n, t.nodeIndex + 1, t.nodeIndex + t.childCount, r, s, i);
        }
      }
      function Tr(e, t, n, r, s, i) {
        const o = e.renderer;
        switch (n) {
          case 1:
            o.appendChild(r, t);
            break;
          case 2:
            o.insertBefore(r, t, s);
            break;
          case 3:
            o.removeChild(r, t);
            break;
          case 0:
            i.push(t);
        }
      }
      const Ar = /^:([^:]+):(.+)$/;
      function Ir(e) {
        if (':' === e[0]) {
          const t = e.match(Ar);
          return [t[1], t[2]];
        }
        return ['', e];
      }
      function jr(e) {
        let t = 0;
        for (let n = 0; n < e.length; n++) t |= e[n].flags;
        return t;
      }
      function Nr(e, t, n, r, s, i, o, a, l, u, c, h, d, p, f, g, m, b, y, v) {
        switch (e) {
          case 1:
            return t + Rr(n) + r;
          case 2:
            return t + Rr(n) + r + Rr(s) + i;
          case 3:
            return t + Rr(n) + r + Rr(s) + i + Rr(o) + a;
          case 4:
            return t + Rr(n) + r + Rr(s) + i + Rr(o) + a + Rr(l) + u;
          case 5:
            return t + Rr(n) + r + Rr(s) + i + Rr(o) + a + Rr(l) + u + Rr(c) + h;
          case 6:
            return t + Rr(n) + r + Rr(s) + i + Rr(o) + a + Rr(l) + u + Rr(c) + h + Rr(d) + p;
          case 7:
            return t + Rr(n) + r + Rr(s) + i + Rr(o) + a + Rr(l) + u + Rr(c) + h + Rr(d) + p + Rr(f) + g;
          case 8:
            return t + Rr(n) + r + Rr(s) + i + Rr(o) + a + Rr(l) + u + Rr(c) + h + Rr(d) + p + Rr(f) + g + Rr(m) + b;
          case 9:
            return (
              t +
              Rr(n) +
              r +
              Rr(s) +
              i +
              Rr(o) +
              a +
              Rr(l) +
              u +
              Rr(c) +
              h +
              Rr(d) +
              p +
              Rr(f) +
              g +
              Rr(m) +
              b +
              Rr(y) +
              v
            );
          default:
            throw new Error('Does not support more than 9 expressions');
        }
      }
      function Rr(e) {
        return null != e ? e.toString() : '';
      }
      const Pr = new Object(),
        Mr = ir(Pt),
        Lr = ir(D),
        Hr = ir(L);
      function Fr(e, t, n, r) {
        return (n = _(n)), { index: -1, deps: _r(r, y(t)), flags: e, token: t, value: n };
      }
      function Ur(e) {
        const t = {},
          n = [];
        let r = !1;
        for (let s = 0; s < e.length; s++) {
          const i = e[s];
          i.token === Nt && !0 === i.value && (r = !0),
            1073741824 & i.flags && n.push(i.token),
            (i.index = s),
            (t[ir(i.token)] = i);
        }
        return { factory: null, providersByKey: t, providers: e, modules: n, isRoot: r };
      }
      function Vr(e, t, n = Pt.THROW_IF_NOT_FOUND) {
        const r = N(e);
        try {
          if (8 & t.flags) return t.token;
          if ((2 & t.flags && (n = null), 1 & t.flags)) return e._parent.get(t.token, n);
          const o = t.tokenKey;
          switch (o) {
            case Mr:
            case Lr:
            case Hr:
              return e;
          }
          const a = e._def.providersByKey[o];
          let l;
          if (a) {
            let t = e._providers[a.index];
            return void 0 === t && (t = e._providers[a.index] = qr(e, a)), t === Pr ? void 0 : t;
          }
          if (
            (l = m(t.token)) &&
            ((s = e),
            null != (i = l).providedIn &&
              ((function(e, t) {
                return e._def.modules.indexOf(t) > -1;
              })(s, i.providedIn) ||
                ('root' === i.providedIn && s._def.isRoot)))
          ) {
            const n = e._providers.length;
            return (
              (e._def.providers[n] = e._def.providersByKey[t.tokenKey] = {
                flags: 5120,
                value: l.factory,
                deps: [],
                index: n,
                token: t.token
              }),
              (e._providers[n] = Pr),
              (e._providers[n] = qr(e, e._def.providersByKey[t.tokenKey]))
            );
          }
          return 4 & t.flags ? n : e._parent.get(t.token, n);
        } finally {
          N(r);
        }
        var s, i;
      }
      function qr(e, t) {
        let n;
        switch (201347067 & t.flags) {
          case 512:
            n = (function(e, t, n) {
              const r = n.length;
              switch (r) {
                case 0:
                  return new t();
                case 1:
                  return new t(Vr(e, n[0]));
                case 2:
                  return new t(Vr(e, n[0]), Vr(e, n[1]));
                case 3:
                  return new t(Vr(e, n[0]), Vr(e, n[1]), Vr(e, n[2]));
                default:
                  const s = new Array(r);
                  for (let t = 0; t < r; t++) s[t] = Vr(e, n[t]);
                  return new t(...s);
              }
            })(e, t.value, t.deps);
            break;
          case 1024:
            n = (function(e, t, n) {
              const r = n.length;
              switch (r) {
                case 0:
                  return t();
                case 1:
                  return t(Vr(e, n[0]));
                case 2:
                  return t(Vr(e, n[0]), Vr(e, n[1]));
                case 3:
                  return t(Vr(e, n[0]), Vr(e, n[1]), Vr(e, n[2]));
                default:
                  const s = Array(r);
                  for (let t = 0; t < r; t++) s[t] = Vr(e, n[t]);
                  return t(...s);
              }
            })(e, t.value, t.deps);
            break;
          case 2048:
            n = Vr(e, t.deps[0]);
            break;
          case 256:
            n = t.value;
        }
        return (
          n === Pr ||
            null === n ||
            'object' != typeof n ||
            131072 & t.flags ||
            'function' != typeof n.ngOnDestroy ||
            (t.flags |= 131072),
          void 0 === n ? Pr : n
        );
      }
      function $r(e, t) {
        const n = e.viewContainer._embeddedViews;
        if (((null == t || t >= n.length) && (t = n.length - 1), t < 0)) return null;
        const r = n[t];
        return (r.viewContainerParent = null), U(n, t), nr.dirtyParentQueries(r), Br(r), r;
      }
      function zr(e, t, n) {
        const r = t ? mr(t, t.def.lastRenderRootNode) : e.renderElement,
          s = n.renderer.parentNode(r),
          i = n.renderer.nextSibling(r);
        Er(n, 2, s, i, void 0);
      }
      function Br(e) {
        Er(e, 3, null, null, void 0);
      }
      const Wr = new Object();
      function Gr(e, t, n, r, s, i) {
        return new Zr(e, t, n, r, s, i);
      }
      class Zr extends cn {
        constructor(e, t, n, r, s, i) {
          super(),
            (this.selector = e),
            (this.componentType = t),
            (this._inputs = r),
            (this._outputs = s),
            (this.ngContentSelectors = i),
            (this.viewDefFactory = n);
        }
        get inputs() {
          const e = [],
            t = this._inputs;
          for (let n in t) e.push({ propName: n, templateName: t[n] });
          return e;
        }
        get outputs() {
          const e = [];
          for (let t in this._outputs) e.push({ propName: t, templateName: this._outputs[t] });
          return e;
        }
        create(e, t, n, r) {
          if (!r) throw new Error('ngModule should be provided');
          const s = Sr(this.viewDefFactory),
            i = s.nodes[0].element.componentProvider.nodeIndex,
            o = nr.createRootView(e, t || [], n, s, r, Wr),
            a = Xn(o, i).instance;
          return n && o.renderer.setAttribute(Jn(o, 0).renderElement, 'ng-version', On.full), new Kr(o, new Xr(o), a);
        }
      }
      class Kr extends class {} {
        constructor(e, t, n) {
          super(),
            (this._view = e),
            (this._viewRef = t),
            (this._component = n),
            (this._elDef = this._view.def.nodes[0]),
            (this.hostView = t),
            (this.changeDetectorRef = t),
            (this.instance = n);
        }
        get location() {
          return new yn(Jn(this._view, this._elDef.nodeIndex).renderElement);
        }
        get injector() {
          return new rs(this._view, this._elDef);
        }
        get componentType() {
          return this._component.constructor;
        }
        destroy() {
          this._viewRef.destroy();
        }
        onDestroy(e) {
          this._viewRef.onDestroy(e);
        }
      }
      function Qr(e, t, n) {
        return new Yr(e, t, n);
      }
      class Yr {
        constructor(e, t, n) {
          (this._view = e), (this._elDef = t), (this._data = n), (this._embeddedViews = []);
        }
        get element() {
          return new yn(this._data.renderElement);
        }
        get injector() {
          return new rs(this._view, this._elDef);
        }
        get parentInjector() {
          let e = this._view,
            t = this._elDef.parent;
          for (; !t && e; ) (t = gr(e)), (e = e.parent);
          return e ? new rs(e, t) : new rs(this._view, null);
        }
        clear() {
          for (let e = this._embeddedViews.length - 1; e >= 0; e--) {
            const t = $r(this._data, e);
            nr.destroyView(t);
          }
        }
        get(e) {
          const t = this._embeddedViews[e];
          if (t) {
            const e = new Xr(t);
            return e.attachToViewContainerRef(this), e;
          }
          return null;
        }
        get length() {
          return this._embeddedViews.length;
        }
        createEmbeddedView(e, t, n) {
          const r = e.createEmbeddedView(t || {});
          return this.insert(r, n), r;
        }
        createComponent(e, t, n, r, s) {
          const i = n || this.parentInjector;
          s || e instanceof mn || (s = i.get(L));
          const o = e.create(i, r, void 0, s);
          return this.insert(o.hostView, t), o;
        }
        insert(e, t) {
          if (e.destroyed) throw new Error('Cannot insert a destroyed View in a ViewContainer!');
          const n = e;
          return (
            (function(e, t, n, r) {
              let s = t.viewContainer._embeddedViews;
              null == n && (n = s.length),
                (r.viewContainerParent = e),
                F(s, n, r),
                (function(e, t) {
                  const n = fr(t);
                  if (!n || n === e || 16 & t.state) return;
                  t.state |= 16;
                  let r = n.template._projectedViews;
                  r || (r = n.template._projectedViews = []),
                    r.push(t),
                    (function(e, t) {
                      if (4 & t.flags) return;
                      (e.nodeFlags |= 4), (t.flags |= 4);
                      let n = t.parent;
                      for (; n; ) (n.childFlags |= 4), (n = n.parent);
                    })(t.parent.def, t.parentNodeDef);
                })(t, r),
                nr.dirtyParentQueries(r),
                zr(t, n > 0 ? s[n - 1] : null, r);
            })(this._view, this._data, t, n._view),
            n.attachToViewContainerRef(this),
            e
          );
        }
        move(e, t) {
          if (e.destroyed) throw new Error('Cannot move a destroyed View in a ViewContainer!');
          const n = this._embeddedViews.indexOf(e._view);
          return (
            (function(e, t, n) {
              const r = e.viewContainer._embeddedViews,
                s = r[t];
              U(r, t),
                null == n && (n = r.length),
                F(r, n, s),
                nr.dirtyParentQueries(s),
                Br(s),
                zr(e, n > 0 ? r[n - 1] : null, s);
            })(this._data, n, t),
            e
          );
        }
        indexOf(e) {
          return this._embeddedViews.indexOf(e._view);
        }
        remove(e) {
          const t = $r(this._data, e);
          t && nr.destroyView(t);
        }
        detach(e) {
          const t = $r(this._data, e);
          return t ? new Xr(t) : null;
        }
      }
      function Jr(e) {
        return new Xr(e);
      }
      class Xr {
        constructor(e) {
          (this._view = e), (this._viewContainerRef = null), (this._appRef = null);
        }
        get rootNodes() {
          return (function(e) {
            const t = [];
            return Er(e, 0, void 0, void 0, t), t;
          })(this._view);
        }
        get context() {
          return this._view.context;
        }
        get destroyed() {
          return 0 != (128 & this._view.state);
        }
        markForCheck() {
          hr(this._view);
        }
        detach() {
          this._view.state &= -5;
        }
        detectChanges() {
          const e = this._view.root.rendererFactory;
          e.begin && e.begin();
          try {
            nr.checkAndUpdateView(this._view);
          } finally {
            e.end && e.end();
          }
        }
        checkNoChanges() {
          nr.checkNoChangesView(this._view);
        }
        reattach() {
          this._view.state |= 4;
        }
        onDestroy(e) {
          this._view.disposables || (this._view.disposables = []), this._view.disposables.push(e);
        }
        destroy() {
          this._appRef
            ? this._appRef.detachView(this)
            : this._viewContainerRef && this._viewContainerRef.detach(this._viewContainerRef.indexOf(this)),
            nr.destroyView(this._view);
        }
        detachFromAppRef() {
          (this._appRef = null), Br(this._view), nr.dirtyParentQueries(this._view);
        }
        attachToAppRef(e) {
          if (this._viewContainerRef) throw new Error('This view is already attached to a ViewContainer!');
          this._appRef = e;
        }
        attachToViewContainerRef(e) {
          if (this._appRef) throw new Error('This view is already attached directly to the ApplicationRef!');
          this._viewContainerRef = e;
        }
      }
      function es(e, t) {
        return new ts(e, t);
      }
      class ts extends qn {
        constructor(e, t) {
          super(), (this._parentView = e), (this._def = t);
        }
        createEmbeddedView(e) {
          return new Xr(nr.createEmbeddedView(this._parentView, this._def, this._def.element.template, e));
        }
        get elementRef() {
          return new yn(Jn(this._parentView, this._def.nodeIndex).renderElement);
        }
      }
      function ns(e, t) {
        return new rs(e, t);
      }
      class rs {
        constructor(e, t) {
          (this.view = e), (this.elDef = t);
        }
        get(e, t = Pt.THROW_IF_NOT_FOUND) {
          return nr.resolveDep(
            this.view,
            this.elDef,
            !!this.elDef && 0 != (33554432 & this.elDef.flags),
            { flags: 0, token: e, tokenKey: ir(e) },
            t
          );
        }
      }
      function ss(e, t) {
        const n = e.def.nodes[t];
        if (1 & n.flags) {
          const t = Jn(e, n.nodeIndex);
          return n.element.template ? t.template : t.renderElement;
        }
        if (2 & n.flags) return Yn(e, n.nodeIndex).renderText;
        if (20240 & n.flags) return Xn(e, n.nodeIndex).instance;
        throw new Error('Illegal state: read nodeValue for node index ' + t);
      }
      function is(e) {
        return new os(e.renderer);
      }
      class os {
        constructor(e) {
          this.delegate = e;
        }
        selectRootElement(e) {
          return this.delegate.selectRootElement(e);
        }
        createElement(e, t) {
          const [n, r] = Ir(t),
            s = this.delegate.createElement(r, n);
          return e && this.delegate.appendChild(e, s), s;
        }
        createViewRoot(e) {
          return e;
        }
        createTemplateAnchor(e) {
          const t = this.delegate.createComment('');
          return e && this.delegate.appendChild(e, t), t;
        }
        createText(e, t) {
          const n = this.delegate.createText(t);
          return e && this.delegate.appendChild(e, n), n;
        }
        projectNodes(e, t) {
          for (let n = 0; n < t.length; n++) this.delegate.appendChild(e, t[n]);
        }
        attachViewAfter(e, t) {
          const n = this.delegate.parentNode(e),
            r = this.delegate.nextSibling(e);
          for (let s = 0; s < t.length; s++) this.delegate.insertBefore(n, t[s], r);
        }
        detachView(e) {
          for (let t = 0; t < e.length; t++) {
            const n = e[t],
              r = this.delegate.parentNode(n);
            this.delegate.removeChild(r, n);
          }
        }
        destroyView(e, t) {
          for (let n = 0; n < t.length; n++) this.delegate.destroyNode(t[n]);
        }
        listen(e, t, n) {
          return this.delegate.listen(e, t, n);
        }
        listenGlobal(e, t, n) {
          return this.delegate.listen(e, t, n);
        }
        setElementProperty(e, t, n) {
          this.delegate.setProperty(e, t, n);
        }
        setElementAttribute(e, t, n) {
          const [r, s] = Ir(t);
          null != n ? this.delegate.setAttribute(e, s, n, r) : this.delegate.removeAttribute(e, s, r);
        }
        setBindingDebugInfo(e, t, n) {}
        setElementClass(e, t, n) {
          n ? this.delegate.addClass(e, t) : this.delegate.removeClass(e, t);
        }
        setElementStyle(e, t, n) {
          null != n ? this.delegate.setStyle(e, t, n) : this.delegate.removeStyle(e, t);
        }
        invokeElementMethod(e, t, n) {
          e[t].apply(e, n);
        }
        setText(e, t) {
          this.delegate.setValue(e, t);
        }
        animate() {
          throw new Error('Renderer.animate is no longer supported!');
        }
      }
      function as(e, t, n, r) {
        return new ls(e, t, n, r);
      }
      class ls {
        constructor(e, t, n, r) {
          (this._moduleType = e),
            (this._parent = t),
            (this._bootstrapComponents = n),
            (this._def = r),
            (this._destroyListeners = []),
            (this._destroyed = !1),
            (this.injector = this),
            (function(e) {
              const t = e._def,
                n = (e._providers = new Array(t.providers.length));
              for (let r = 0; r < t.providers.length; r++) {
                const s = t.providers[r];
                4096 & s.flags || (void 0 === n[r] && (n[r] = qr(e, s)));
              }
            })(this);
        }
        get(e, t = Pt.THROW_IF_NOT_FOUND, n = p.Default) {
          let r = 0;
          return (
            n & p.SkipSelf ? (r |= 1) : n & p.Self && (r |= 4), Vr(this, { token: e, tokenKey: ir(e), flags: r }, t)
          );
        }
        get instance() {
          return this.get(this._moduleType);
        }
        get componentFactoryResolver() {
          return this.get(fn);
        }
        destroy() {
          if (this._destroyed)
            throw new Error(`The ng module ${y(this.instance.constructor)} has already been destroyed.`);
          (this._destroyed = !0),
            (function(e, t) {
              const n = e._def,
                r = new Set();
              for (let s = 0; s < n.providers.length; s++)
                if (131072 & n.providers[s].flags) {
                  const t = e._providers[s];
                  if (t && t !== Pr) {
                    const e = t.ngOnDestroy;
                    'function' != typeof e || r.has(t) || (e.apply(t), r.add(t));
                  }
                }
            })(this),
            this._destroyListeners.forEach(e => e());
        }
        onDestroy(e) {
          this._destroyListeners.push(e);
        }
      }
      const us = ir(wn),
        cs = ir(xn),
        hs = ir(yn),
        ds = ir(zn),
        ps = ir(qn),
        fs = ir(It),
        gs = ir(Pt),
        ms = ir(D);
      function bs(e, t, n, r, s, i, o, a) {
        const l = [];
        if (o)
          for (let c in o) {
            const [e, t] = o[c];
            l[e] = { flags: 8, name: c, nonMinifiedName: t, ns: null, securityContext: null, suffix: null };
          }
        const u = [];
        if (a) for (let c in a) u.push({ type: 1, propName: c, target: null, eventName: a[c] });
        return vs(e, (t |= 16384), n, r, s, s, i, l, u);
      }
      function ys(e, t, n, r, s) {
        return vs(-1, e, t, 0, n, r, s);
      }
      function vs(e, t, n, r, s, i, o, a, l) {
        const { matchedQueries: u, references: c, matchedQueryIds: h } = wr(n);
        l || (l = []), a || (a = []), (i = _(i));
        const d = _r(o, y(s));
        return {
          nodeIndex: -1,
          parent: null,
          renderParent: null,
          bindingIndex: -1,
          outputIndex: -1,
          checkIndex: e,
          flags: t,
          childFlags: 0,
          directChildFlags: 0,
          childMatchedQueries: 0,
          matchedQueries: u,
          matchedQueryIds: h,
          references: c,
          ngContentIndex: -1,
          childCount: r,
          bindings: a,
          bindingFlags: jr(a),
          outputs: l,
          element: null,
          provider: { token: s, value: i, deps: d },
          text: null,
          query: null,
          ngContent: null
        };
      }
      function ws(e, t) {
        return Ss(e, t);
      }
      function _s(e, t) {
        let n = e;
        for (; n.parent && !br(n); ) n = n.parent;
        return Es(n.parent, gr(n), !0, t.provider.value, t.provider.deps);
      }
      function Cs(e, t) {
        const n = Es(e, t.parent, (32768 & t.flags) > 0, t.provider.value, t.provider.deps);
        if (t.outputs.length)
          for (let r = 0; r < t.outputs.length; r++) {
            const s = t.outputs[r],
              i = n[s.propName];
            if (!ln(i)) throw new Error(`@Output ${s.propName} not initialized in '${n.constructor.name}'.`);
            {
              const n = i.subscribe(xs(e, t.parent.nodeIndex, s.eventName));
              e.disposables[t.outputIndex + r] = n.unsubscribe.bind(n);
            }
          }
        return n;
      }
      function xs(e, t, n) {
        return r => pr(e, t, n, r);
      }
      function Ss(e, t) {
        const n = (8192 & t.flags) > 0,
          r = t.provider;
        switch (201347067 & t.flags) {
          case 512:
            return Es(e, t.parent, n, r.value, r.deps);
          case 1024:
            return (function(e, t, n, r, s) {
              const i = s.length;
              switch (i) {
                case 0:
                  return r();
                case 1:
                  return r(ks(e, t, n, s[0]));
                case 2:
                  return r(ks(e, t, n, s[0]), ks(e, t, n, s[1]));
                case 3:
                  return r(ks(e, t, n, s[0]), ks(e, t, n, s[1]), ks(e, t, n, s[2]));
                default:
                  const o = Array(i);
                  for (let r = 0; r < i; r++) o[r] = ks(e, t, n, s[r]);
                  return r(...o);
              }
            })(e, t.parent, n, r.value, r.deps);
          case 2048:
            return ks(e, t.parent, n, r.deps[0]);
          case 256:
            return r.value;
        }
      }
      function Es(e, t, n, r, s) {
        const i = s.length;
        switch (i) {
          case 0:
            return new r();
          case 1:
            return new r(ks(e, t, n, s[0]));
          case 2:
            return new r(ks(e, t, n, s[0]), ks(e, t, n, s[1]));
          case 3:
            return new r(ks(e, t, n, s[0]), ks(e, t, n, s[1]), ks(e, t, n, s[2]));
          default:
            const o = new Array(i);
            for (let r = 0; r < i; r++) o[r] = ks(e, t, n, s[r]);
            return new r(...o);
        }
      }
      const Os = {};
      function ks(e, t, n, r, s = Pt.THROW_IF_NOT_FOUND) {
        if (8 & r.flags) return r.token;
        const i = e;
        2 & r.flags && (s = null);
        const o = r.tokenKey;
        o === fs && (n = !(!t || !t.element.componentView)), t && 1 & r.flags && ((n = !1), (t = t.parent));
        let a = e;
        for (; a; ) {
          if (t)
            switch (o) {
              case us:
                return is(Ds(a, t, n));
              case cs:
                return Ds(a, t, n).renderer;
              case hs:
                return new yn(Jn(a, t.nodeIndex).renderElement);
              case ds:
                return Jn(a, t.nodeIndex).viewContainer;
              case ps:
                if (t.element.template) return Jn(a, t.nodeIndex).template;
                break;
              case fs:
                return Jr(Ds(a, t, n));
              case gs:
              case ms:
                return ns(a, t);
              default:
                const e = (n ? t.element.allProviders : t.element.publicProviders)[o];
                if (e) {
                  let t = Xn(a, e.nodeIndex);
                  return t || ((t = { instance: Ss(a, e) }), (a.nodes[e.nodeIndex] = t)), t.instance;
                }
            }
          (n = br(a)), (t = gr(a)), (a = a.parent), 4 & r.flags && (a = null);
        }
        const l = i.root.injector.get(r.token, Os);
        return l !== Os || s === Os ? l : i.root.ngModule.injector.get(r.token, s);
      }
      function Ds(e, t, n) {
        let r;
        if (n) r = Jn(e, t.nodeIndex).componentView;
        else for (r = e; r.parent && !br(r); ) r = r.parent;
        return r;
      }
      function Ts(e, t, n, r, s, i) {
        if (32768 & n.flags) {
          const t = Jn(e, n.parent.nodeIndex).componentView;
          2 & t.def.flags && (t.state |= 8);
        }
        if (((t.instance[n.bindings[r].name] = s), 524288 & n.flags)) {
          i = i || {};
          const t = Kt.unwrap(e.oldValues[n.bindingIndex + r]);
          i[n.bindings[r].nonMinifiedName] = new un(t, s, 0 != (2 & e.state));
        }
        return (e.oldValues[n.bindingIndex + r] = s), i;
      }
      function As(e, t) {
        if (!(e.def.nodeFlags & t)) return;
        const n = e.def.nodes;
        let r = 0;
        for (let s = 0; s < n.length; s++) {
          const i = n[s];
          let o = i.parent;
          for (
            !o && i.flags & t && js(e, s, i.flags & t, r++), 0 == (i.childFlags & t) && (s += i.childCount);
            o && 1 & o.flags && s === o.nodeIndex + o.childCount;

          )
            o.directChildFlags & t && (r = Is(e, o, t, r)), (o = o.parent);
        }
      }
      function Is(e, t, n, r) {
        for (let s = t.nodeIndex + 1; s <= t.nodeIndex + t.childCount; s++) {
          const t = e.def.nodes[s];
          t.flags & n && js(e, s, t.flags & n, r++), (s += t.childCount);
        }
        return r;
      }
      function js(e, t, n, r) {
        const s = Xn(e, t);
        if (!s) return;
        const i = s.instance;
        i &&
          (nr.setCurrentNode(e, t),
          1048576 & n && Qn(e, 512, r) && i.ngAfterContentInit(),
          2097152 & n && i.ngAfterContentChecked(),
          4194304 & n && Qn(e, 768, r) && i.ngAfterViewInit(),
          8388608 & n && i.ngAfterViewChecked(),
          131072 & n && i.ngOnDestroy());
      }
      const Ns = new k('SCHEDULER_TOKEN', { providedIn: 'root', factory: () => ae }),
        Rs = {},
        Ps = (function() {
          var e = {
            LocaleId: 0,
            DayPeriodsFormat: 1,
            DayPeriodsStandalone: 2,
            DaysFormat: 3,
            DaysStandalone: 4,
            MonthsFormat: 5,
            MonthsStandalone: 6,
            Eras: 7,
            FirstDayOfWeek: 8,
            WeekendRange: 9,
            DateFormat: 10,
            TimeFormat: 11,
            DateTimeFormat: 12,
            NumberSymbols: 13,
            NumberFormats: 14,
            CurrencySymbol: 15,
            CurrencyName: 16,
            Currencies: 17,
            PluralCase: 18,
            ExtraData: 19
          };
          return (
            (e[e.LocaleId] = 'LocaleId'),
            (e[e.DayPeriodsFormat] = 'DayPeriodsFormat'),
            (e[e.DayPeriodsStandalone] = 'DayPeriodsStandalone'),
            (e[e.DaysFormat] = 'DaysFormat'),
            (e[e.DaysStandalone] = 'DaysStandalone'),
            (e[e.MonthsFormat] = 'MonthsFormat'),
            (e[e.MonthsStandalone] = 'MonthsStandalone'),
            (e[e.Eras] = 'Eras'),
            (e[e.FirstDayOfWeek] = 'FirstDayOfWeek'),
            (e[e.WeekendRange] = 'WeekendRange'),
            (e[e.DateFormat] = 'DateFormat'),
            (e[e.TimeFormat] = 'TimeFormat'),
            (e[e.DateTimeFormat] = 'DateTimeFormat'),
            (e[e.NumberSymbols] = 'NumberSymbols'),
            (e[e.NumberFormats] = 'NumberFormats'),
            (e[e.CurrencySymbol] = 'CurrencySymbol'),
            (e[e.CurrencyName] = 'CurrencyName'),
            (e[e.Currencies] = 'Currencies'),
            (e[e.PluralCase] = 'PluralCase'),
            (e[e.ExtraData] = 'ExtraData'),
            e
          );
        })(),
        Ms = void 0;
      var Ls = [
        'en',
        [['a', 'p'], ['AM', 'PM'], Ms],
        [['AM', 'PM'], Ms, Ms],
        [
          ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
          ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
          ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
          ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa']
        ],
        Ms,
        [
          ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'],
          ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
          [
            'January',
            'February',
            'March',
            'April',
            'May',
            'June',
            'July',
            'August',
            'September',
            'October',
            'November',
            'December'
          ]
        ],
        Ms,
        [
          ['B', 'A'],
          ['BC', 'AD'],
          ['Before Christ', 'Anno Domini']
        ],
        0,
        [6, 0],
        ['M/d/yy', 'MMM d, y', 'MMMM d, y', 'EEEE, MMMM d, y'],
        ['h:mm a', 'h:mm:ss a', 'h:mm:ss a z', 'h:mm:ss a zzzz'],
        ['{1}, {0}', Ms, "{1} 'at' {0}", Ms],
        ['.', ',', ';', '%', '+', '-', 'E', '\xd7', '\u2030', '\u221e', 'NaN', ':'],
        ['#,##0.###', '#,##0%', '\xa4#,##0.00', '#E0'],
        '$',
        'US Dollar',
        {},
        function(e) {
          let t = Math.floor(Math.abs(e)),
            n = e.toString().replace(/^[^.]*\.?/, '').length;
          return 1 === t && 0 === n ? 1 : 5;
        }
      ];
      function Hs(e) {
        return Fs(e)[Ps.PluralCase];
      }
      function Fs(e) {
        const t = e.toLowerCase().replace(/_/g, '-');
        let n = Rs[t];
        if (n) return n;
        const r = t.split('-')[0];
        if (((n = Rs[r]), n)) return n;
        if ('en' === r) return Ls;
        throw new Error(`Missing locale data for the locale "${e}".`);
      }
      class Us extends r.a {
        constructor(e = !1) {
          super(), (this.__isAsync = e);
        }
        emit(e) {
          super.next(e);
        }
        subscribe(e, t, n) {
          let r,
            i = e => null,
            o = () => null;
          e && 'object' == typeof e
            ? ((r = this.__isAsync
                ? t => {
                    setTimeout(() => e.next(t));
                  }
                : t => {
                    e.next(t);
                  }),
              e.error &&
                (i = this.__isAsync
                  ? t => {
                      setTimeout(() => e.error(t));
                    }
                  : t => {
                      e.error(t);
                    }),
              e.complete &&
                (o = this.__isAsync
                  ? () => {
                      setTimeout(() => e.complete());
                    }
                  : () => {
                      e.complete();
                    }))
            : ((r = this.__isAsync
                ? t => {
                    setTimeout(() => e(t));
                  }
                : t => {
                    e(t);
                  }),
              t &&
                (i = this.__isAsync
                  ? e => {
                      setTimeout(() => t(e));
                    }
                  : e => {
                      t(e);
                    }),
              n &&
                (o = this.__isAsync
                  ? () => {
                      setTimeout(() => n());
                    }
                  : () => {
                      n();
                    }));
          const a = super.subscribe(r, i, o);
          return e instanceof s.a && e.add(a), a;
        }
      }
      function Vs() {
        return this._results[Wt()]();
      }
      class qs {
        constructor() {
          (this.dirty = !0), (this._results = []), (this.changes = new Us()), (this.length = 0);
          const e = Wt(),
            t = qs.prototype;
          t[e] || (t[e] = Vs);
        }
        map(e) {
          return this._results.map(e);
        }
        filter(e) {
          return this._results.filter(e);
        }
        find(e) {
          return this._results.find(e);
        }
        reduce(e, t) {
          return this._results.reduce(e, t);
        }
        forEach(e) {
          this._results.forEach(e);
        }
        some(e) {
          return this._results.some(e);
        }
        toArray() {
          return this._results.slice();
        }
        toString() {
          return this._results.toString();
        }
        reset(e) {
          (this._results = (function e(t, n) {
            void 0 === n && (n = t);
            for (let r = 0; r < t.length; r++) {
              let s = t[r];
              Array.isArray(s) ? (n === t && (n = t.slice(0, r)), e(s, n)) : n !== t && n.push(s);
            }
            return n;
          })(e)),
            (this.dirty = !1),
            (this.length = this._results.length),
            (this.last = this._results[this.length - 1]),
            (this.first = this._results[0]);
        }
        notifyOnChanges() {
          this.changes.emit(this);
        }
        setDirty() {
          this.dirty = !0;
        }
        destroy() {
          this.changes.complete(), this.changes.unsubscribe();
        }
      }
      const $s = new k('Application Initializer');
      let zs = (() =>
        class {
          constructor(e) {
            (this.appInits = e),
              (this.initialized = !1),
              (this.done = !1),
              (this.donePromise = new Promise((e, t) => {
                (this.resolve = e), (this.reject = t);
              }));
          }
          runInitializers() {
            if (this.initialized) return;
            const e = [],
              t = () => {
                (this.done = !0), this.resolve();
              };
            if (this.appInits)
              for (let n = 0; n < this.appInits.length; n++) {
                const t = this.appInits[n]();
                an(t) && e.push(t);
              }
            Promise.all(e)
              .then(() => {
                t();
              })
              .catch(e => {
                this.reject(e);
              }),
              0 === e.length && t(),
              (this.initialized = !0);
          }
        })();
      const Bs = new k('AppId');
      function Ws() {
        return `${Gs()}${Gs()}${Gs()}`;
      }
      function Gs() {
        return String.fromCharCode(97 + Math.floor(25 * Math.random()));
      }
      const Zs = new k('Platform Initializer'),
        Ks = new k('Platform ID'),
        Qs = new k('appBootstrapListener');
      let Ys = (() =>
        class {
          log(e) {
            console.log(e);
          }
          warn(e) {
            console.warn(e);
          }
        })();
      const Js = new k('LocaleId');
      function Xs() {
        throw new Error('Runtime compiler is not loaded');
      }
      const ei = Xs,
        ti = Xs,
        ni = Xs,
        ri = Xs;
      let si,
        ii,
        oi = (() =>
          class {
            constructor() {
              (this.compileModuleSync = ei),
                (this.compileModuleAsync = ti),
                (this.compileModuleAndAllComponentsSync = ni),
                (this.compileModuleAndAllComponentsAsync = ri);
            }
            clearCache() {}
            clearCacheFor(e) {}
            getModuleId(e) {}
          })();
      class ai {}
      function li() {
        const e = O.wtf;
        return !(!e || ((si = e.trace), !si) || ((ii = si.events), 0));
      }
      const ui = li();
      function ci(e, t) {
        return null;
      }
      const hi = ui
          ? function(e, t = null) {
              return ii.createScope(e, t);
            }
          : (e, t) => ci,
        di = ui
          ? function(e, t) {
              return si.leaveScope(e, t), t;
            }
          : (e, t) => t,
        pi = (() => Promise.resolve(0))();
      function fi(e) {
        'undefined' == typeof Zone
          ? pi.then(() => {
              e && e.apply(null, null);
            })
          : Zone.current.scheduleMicroTask('scheduleMicrotask', e);
      }
      class gi {
        constructor({ enableLongStackTrace: e = !1 }) {
          if (
            ((this.hasPendingMicrotasks = !1),
            (this.hasPendingMacrotasks = !1),
            (this.isStable = !0),
            (this.onUnstable = new Us(!1)),
            (this.onMicrotaskEmpty = new Us(!1)),
            (this.onStable = new Us(!1)),
            (this.onError = new Us(!1)),
            'undefined' == typeof Zone)
          )
            throw new Error('In this configuration Angular requires Zone.js');
          var t;
          Zone.assertZonePatched(),
            (this._nesting = 0),
            (this._outer = this._inner = Zone.current),
            Zone.wtfZoneSpec && (this._inner = this._inner.fork(Zone.wtfZoneSpec)),
            Zone.TaskTrackingZoneSpec && (this._inner = this._inner.fork(new Zone.TaskTrackingZoneSpec())),
            e && Zone.longStackTraceZoneSpec && (this._inner = this._inner.fork(Zone.longStackTraceZoneSpec)),
            ((t = this)._inner = t._inner.fork({
              name: 'angular',
              properties: { isAngularZone: !0 },
              onInvokeTask: (e, n, r, s, i, o) => {
                try {
                  return vi(t), e.invokeTask(r, s, i, o);
                } finally {
                  wi(t);
                }
              },
              onInvoke: (e, n, r, s, i, o, a) => {
                try {
                  return vi(t), e.invoke(r, s, i, o, a);
                } finally {
                  wi(t);
                }
              },
              onHasTask: (e, n, r, s) => {
                e.hasTask(r, s),
                  n === r &&
                    ('microTask' == s.change
                      ? ((t.hasPendingMicrotasks = s.microTask), yi(t))
                      : 'macroTask' == s.change && (t.hasPendingMacrotasks = s.macroTask));
              },
              onHandleError: (e, n, r, s) => (e.handleError(r, s), t.runOutsideAngular(() => t.onError.emit(s)), !1)
            }));
        }
        static isInAngularZone() {
          return !0 === Zone.current.get('isAngularZone');
        }
        static assertInAngularZone() {
          if (!gi.isInAngularZone()) throw new Error('Expected to be in Angular Zone, but it is not!');
        }
        static assertNotInAngularZone() {
          if (gi.isInAngularZone()) throw new Error('Expected to not be in Angular Zone, but it is!');
        }
        run(e, t, n) {
          return this._inner.run(e, t, n);
        }
        runTask(e, t, n, r) {
          const s = this._inner,
            i = s.scheduleEventTask('NgZoneEvent: ' + r, e, bi, mi, mi);
          try {
            return s.runTask(i, t, n);
          } finally {
            s.cancelTask(i);
          }
        }
        runGuarded(e, t, n) {
          return this._inner.runGuarded(e, t, n);
        }
        runOutsideAngular(e) {
          return this._outer.run(e);
        }
      }
      function mi() {}
      const bi = {};
      function yi(e) {
        if (0 == e._nesting && !e.hasPendingMicrotasks && !e.isStable)
          try {
            e._nesting++, e.onMicrotaskEmpty.emit(null);
          } finally {
            if ((e._nesting--, !e.hasPendingMicrotasks))
              try {
                e.runOutsideAngular(() => e.onStable.emit(null));
              } finally {
                e.isStable = !0;
              }
          }
      }
      function vi(e) {
        e._nesting++, e.isStable && ((e.isStable = !1), e.onUnstable.emit(null));
      }
      function wi(e) {
        e._nesting--, yi(e);
      }
      class _i {
        constructor() {
          (this.hasPendingMicrotasks = !1),
            (this.hasPendingMacrotasks = !1),
            (this.isStable = !0),
            (this.onUnstable = new Us()),
            (this.onMicrotaskEmpty = new Us()),
            (this.onStable = new Us()),
            (this.onError = new Us());
        }
        run(e) {
          return e();
        }
        runGuarded(e) {
          return e();
        }
        runOutsideAngular(e) {
          return e();
        }
        runTask(e) {
          return e();
        }
      }
      let Ci = (() =>
          class {
            constructor(e) {
              (this._ngZone = e),
                (this._pendingCount = 0),
                (this._isZoneStable = !0),
                (this._didWork = !1),
                (this._callbacks = []),
                (this.taskTrackingZone = null),
                this._watchAngularEvents(),
                e.run(() => {
                  this.taskTrackingZone = 'undefined' == typeof Zone ? null : Zone.current.get('TaskTrackingZone');
                });
            }
            _watchAngularEvents() {
              this._ngZone.onUnstable.subscribe({
                next: () => {
                  (this._didWork = !0), (this._isZoneStable = !1);
                }
              }),
                this._ngZone.runOutsideAngular(() => {
                  this._ngZone.onStable.subscribe({
                    next: () => {
                      gi.assertNotInAngularZone(),
                        fi(() => {
                          (this._isZoneStable = !0), this._runCallbacksIfReady();
                        });
                    }
                  });
                });
            }
            increasePendingRequestCount() {
              return (this._pendingCount += 1), (this._didWork = !0), this._pendingCount;
            }
            decreasePendingRequestCount() {
              if (((this._pendingCount -= 1), this._pendingCount < 0))
                throw new Error('pending async requests below zero');
              return this._runCallbacksIfReady(), this._pendingCount;
            }
            isStable() {
              return this._isZoneStable && 0 === this._pendingCount && !this._ngZone.hasPendingMacrotasks;
            }
            _runCallbacksIfReady() {
              if (this.isStable())
                fi(() => {
                  for (; 0 !== this._callbacks.length; ) {
                    let e = this._callbacks.pop();
                    clearTimeout(e.timeoutId), e.doneCb(this._didWork);
                  }
                  this._didWork = !1;
                });
              else {
                let e = this.getPendingTasks();
                (this._callbacks = this._callbacks.filter(
                  t => !t.updateCb || !t.updateCb(e) || (clearTimeout(t.timeoutId), !1)
                )),
                  (this._didWork = !0);
              }
            }
            getPendingTasks() {
              return this.taskTrackingZone
                ? this.taskTrackingZone.macroTasks.map(e => ({
                    source: e.source,
                    creationLocation: e.creationLocation,
                    data: e.data
                  }))
                : [];
            }
            addCallback(e, t, n) {
              let r = -1;
              t &&
                t > 0 &&
                (r = setTimeout(() => {
                  (this._callbacks = this._callbacks.filter(e => e.timeoutId !== r)),
                    e(this._didWork, this.getPendingTasks());
                }, t)),
                this._callbacks.push({ doneCb: e, timeoutId: r, updateCb: n });
            }
            whenStable(e, t, n) {
              if (n && !this.taskTrackingZone)
                throw new Error(
                  'Task tracking zone is required when passing an update callback to whenStable(). Is "zone.js/dist/task-tracking.js" loaded?'
                );
              this.addCallback(e, t, n), this._runCallbacksIfReady();
            }
            getPendingRequestCount() {
              return this._pendingCount;
            }
            findProviders(e, t, n) {
              return [];
            }
          })(),
        xi = (() => {
          class e {
            constructor() {
              (this._applications = new Map()), ki.addToWindow(this);
            }
            registerApplication(e, t) {
              this._applications.set(e, t);
            }
            unregisterApplication(e) {
              this._applications.delete(e);
            }
            unregisterAllApplications() {
              this._applications.clear();
            }
            getTestability(e) {
              return this._applications.get(e) || null;
            }
            getAllTestabilities() {
              return Array.from(this._applications.values());
            }
            getAllRootElements() {
              return Array.from(this._applications.keys());
            }
            findTestabilityInTree(e, t = !0) {
              return ki.findTestabilityInTree(this, e, t);
            }
          }
          return (e.ctorParameters = () => []), e;
        })();
      class Si {
        addToWindow(e) {}
        findTestabilityInTree(e, t, n) {
          return null;
        }
      }
      function Ei(e) {
        ki = e;
      }
      let Oi,
        ki = new Si();
      const Di = new k('AllowMultipleToken');
      class Ti {
        constructor(e, t) {
          (this.name = e), (this.token = t);
        }
      }
      function Ai(e, t, n = []) {
        const r = 'Platform: ' + t,
          s = new k(r);
        return (t = []) => {
          let i = Ii();
          if (!i || i.injector.get(Di, !1))
            if (e) e(n.concat(t).concat({ provide: s, useValue: !0 }));
            else {
              const e = n.concat(t).concat({ provide: s, useValue: !0 });
              !(function(e) {
                if (Oi && !Oi.destroyed && !Oi.injector.get(Di, !1))
                  throw new Error('There can be only one platform. Destroy the previous one to create a new one.');
                Oi = e.get(ji);
                const t = e.get(Zs, null);
                t && t.forEach(e => e());
              })(Pt.create({ providers: e, name: r }));
            }
          return (function(e) {
            const t = Ii();
            if (!t) throw new Error('No platform exists!');
            if (!t.injector.get(e, null))
              throw new Error('A platform with a different configuration has been created. Please destroy it first.');
            return t;
          })(s);
        };
      }
      function Ii() {
        return Oi && !Oi.destroyed ? Oi : null;
      }
      let ji = (() =>
        class {
          constructor(e) {
            (this._injector = e), (this._modules = []), (this._destroyListeners = []), (this._destroyed = !1);
          }
          bootstrapModuleFactory(e, t) {
            const n = (function(e) {
                let t;
                return (
                  (t =
                    'noop' === e ? new _i() : ('zone.js' === e ? void 0 : e) || new gi({ enableLongStackTrace: He() })),
                  t
                );
              })(t ? t.ngZone : void 0),
              r = [{ provide: gi, useValue: n }];
            return n.run(() => {
              const t = Pt.create({ providers: r, parent: this.injector, name: e.moduleType.name }),
                s = e.create(t),
                i = s.injector.get(Pe, null);
              if (!i) throw new Error('No ErrorHandler. Is platform module (BrowserModule) included?');
              return (
                s.onDestroy(() => Pi(this._modules, s)),
                n.runOutsideAngular(() =>
                  n.onError.subscribe({
                    next: e => {
                      i.handleError(e);
                    }
                  })
                ),
                (function(e, t, n) {
                  try {
                    const r = n();
                    return an(r)
                      ? r.catch(n => {
                          throw (t.runOutsideAngular(() => e.handleError(n)), n);
                        })
                      : r;
                  } catch (r) {
                    throw (t.runOutsideAngular(() => e.handleError(r)), r);
                  }
                })(i, n, () => {
                  const e = s.injector.get(zs);
                  return e.runInitializers(), e.donePromise.then(() => (this._moduleDoBootstrap(s), s));
                })
              );
            });
          }
          bootstrapModule(e, t = []) {
            const n = Ni({}, t);
            return (function(e, t, n) {
              return e
                .get(ai)
                .createCompiler([t])
                .compileModuleAsync(n);
            })(this.injector, n, e).then(e => this.bootstrapModuleFactory(e, n));
          }
          _moduleDoBootstrap(e) {
            const t = e.injector.get(Ri);
            if (e._bootstrapComponents.length > 0) e._bootstrapComponents.forEach(e => t.bootstrap(e));
            else {
              if (!e.instance.ngDoBootstrap)
                throw new Error(
                  `The module ${y(
                    e.instance.constructor
                  )} was bootstrapped, but it does not declare "@NgModule.bootstrap" components nor a "ngDoBootstrap" method. Please define one of these.`
                );
              e.instance.ngDoBootstrap(t);
            }
            this._modules.push(e);
          }
          onDestroy(e) {
            this._destroyListeners.push(e);
          }
          get injector() {
            return this._injector;
          }
          destroy() {
            if (this._destroyed) throw new Error('The platform has already been destroyed!');
            this._modules.slice().forEach(e => e.destroy()),
              this._destroyListeners.forEach(e => e()),
              (this._destroyed = !0);
          }
          get destroyed() {
            return this._destroyed;
          }
        })();
      function Ni(e, t) {
        return Array.isArray(t) ? t.reduce(Ni, e) : Object.assign({}, e, t);
      }
      let Ri = (() => {
        class e {
          constructor(e, t, n, r, s, l) {
            (this._zone = e),
              (this._console = t),
              (this._injector = n),
              (this._exceptionHandler = r),
              (this._componentFactoryResolver = s),
              (this._initStatus = l),
              (this._bootstrapListeners = []),
              (this._views = []),
              (this._runningTick = !1),
              (this._enforceNoNewChanges = !1),
              (this._stable = !0),
              (this.componentTypes = []),
              (this.components = []),
              (this._enforceNoNewChanges = He()),
              this._zone.onMicrotaskEmpty.subscribe({
                next: () => {
                  this._zone.run(() => {
                    this.tick();
                  });
                }
              });
            const u = new i.a(e => {
                (this._stable =
                  this._zone.isStable && !this._zone.hasPendingMacrotasks && !this._zone.hasPendingMicrotasks),
                  this._zone.runOutsideAngular(() => {
                    e.next(this._stable), e.complete();
                  });
              }),
              c = new i.a(e => {
                let t;
                this._zone.runOutsideAngular(() => {
                  t = this._zone.onStable.subscribe(() => {
                    gi.assertNotInAngularZone(),
                      fi(() => {
                        this._stable ||
                          this._zone.hasPendingMacrotasks ||
                          this._zone.hasPendingMicrotasks ||
                          ((this._stable = !0), e.next(!0));
                      });
                  });
                });
                const n = this._zone.onUnstable.subscribe(() => {
                  gi.assertInAngularZone(),
                    this._stable &&
                      ((this._stable = !1),
                      this._zone.runOutsideAngular(() => {
                        e.next(!1);
                      }));
                });
                return () => {
                  t.unsubscribe(), n.unsubscribe();
                };
              });
            this.isStable = Object(o.a)(u, c.pipe(Object(a.a)()));
          }
          bootstrap(e, t) {
            if (!this._initStatus.done)
              throw new Error(
                'Cannot bootstrap as there are still asynchronous initializers running. Bootstrap components in the `ngDoBootstrap` method of the root module.'
              );
            let n;
            (n = e instanceof cn ? e : this._componentFactoryResolver.resolveComponentFactory(e)),
              this.componentTypes.push(n.componentType);
            const r = n instanceof mn ? null : this._injector.get(L),
              s = n.create(Pt.NULL, [], t || n.selector, r);
            s.onDestroy(() => {
              this._unloadComponent(s);
            });
            const i = s.injector.get(Ci, null);
            return (
              i && s.injector.get(xi).registerApplication(s.location.nativeElement, i),
              this._loadComponent(s),
              He() &&
                this._console.log(
                  'Angular is running in the development mode. Call enableProdMode() to enable the production mode.'
                ),
              s
            );
          }
          tick() {
            if (this._runningTick) throw new Error('ApplicationRef.tick is called recursively');
            const t = e._tickScope();
            try {
              this._runningTick = !0;
              for (let e of this._views) e.detectChanges();
              if (this._enforceNoNewChanges) for (let e of this._views) e.checkNoChanges();
            } catch (n) {
              this._zone.runOutsideAngular(() => this._exceptionHandler.handleError(n));
            } finally {
              (this._runningTick = !1), di(t);
            }
          }
          attachView(e) {
            const t = e;
            this._views.push(t), t.attachToAppRef(this);
          }
          detachView(e) {
            const t = e;
            Pi(this._views, t), t.detachFromAppRef();
          }
          _loadComponent(e) {
            this.attachView(e.hostView),
              this.tick(),
              this.components.push(e),
              this._injector
                .get(Qs, [])
                .concat(this._bootstrapListeners)
                .forEach(t => t(e));
          }
          _unloadComponent(e) {
            this.detachView(e.hostView), Pi(this.components, e);
          }
          ngOnDestroy() {
            this._views.slice().forEach(e => e.destroy());
          }
          get viewCount() {
            return this._views.length;
          }
        }
        return (e._tickScope = hi('ApplicationRef#tick()')), e;
      })();
      function Pi(e, t) {
        const n = e.indexOf(t);
        n > -1 && e.splice(n, 1);
      }
      class Mi {}
      class Li {}
      const Hi = { factoryPathPrefix: '', factoryPathSuffix: '.ngfactory' };
      let Fi = (() =>
        class {
          constructor(e, t) {
            (this._compiler = e), (this._config = t || Hi);
          }
          load(e) {
            return this._compiler instanceof oi ? this.loadFactory(e) : this.loadAndCompile(e);
          }
          loadAndCompile(e) {
            let [t, r] = e.split('#');
            return (
              void 0 === r && (r = 'default'),
              n('zn8P')(t)
                .then(e => e[r])
                .then(e => Ui(e, t, r))
                .then(e => this._compiler.compileModuleAsync(e))
            );
          }
          loadFactory(e) {
            let [t, r] = e.split('#'),
              s = 'NgFactory';
            return (
              void 0 === r && ((r = 'default'), (s = '')),
              n('zn8P')(this._config.factoryPathPrefix + t + this._config.factoryPathSuffix)
                .then(e => e[r + s])
                .then(e => Ui(e, t, r))
            );
          }
        })();
      function Ui(e, t, n) {
        if (!e) throw new Error(`Cannot find '${n}' in '${t}'`);
        return e;
      }
      class Vi {
        constructor(e, t) {
          (this.name = e), (this.callback = t);
        }
      }
      class qi {
        constructor(e, t, n) {
          (this.listeners = []),
            (this.parent = null),
            (this._debugContext = n),
            (this.nativeNode = e),
            t && t instanceof $i && t.addChild(this);
        }
        get injector() {
          return this._debugContext.injector;
        }
        get componentInstance() {
          return this._debugContext.component;
        }
        get context() {
          return this._debugContext.context;
        }
        get references() {
          return this._debugContext.references;
        }
        get providerTokens() {
          return this._debugContext.providerTokens;
        }
      }
      class $i extends qi {
        constructor(e, t, n) {
          super(e, t, n),
            (this.properties = {}),
            (this.attributes = {}),
            (this.classes = {}),
            (this.styles = {}),
            (this.childNodes = []),
            (this.nativeElement = e);
        }
        addChild(e) {
          e && (this.childNodes.push(e), (e.parent = this));
        }
        removeChild(e) {
          const t = this.childNodes.indexOf(e);
          -1 !== t && ((e.parent = null), this.childNodes.splice(t, 1));
        }
        insertChildrenAfter(e, t) {
          const n = this.childNodes.indexOf(e);
          -1 !== n &&
            (this.childNodes.splice(n + 1, 0, ...t),
            t.forEach(t => {
              t.parent && t.parent.removeChild(t), (e.parent = this);
            }));
        }
        insertBefore(e, t) {
          const n = this.childNodes.indexOf(e);
          -1 === n
            ? this.addChild(t)
            : (t.parent && t.parent.removeChild(t), (t.parent = this), this.childNodes.splice(n, 0, t));
        }
        query(e) {
          return this.queryAll(e)[0] || null;
        }
        queryAll(e) {
          const t = [];
          return (
            (function e(t, n, r) {
              t.childNodes.forEach(t => {
                t instanceof $i && (n(t) && r.push(t), e(t, n, r));
              });
            })(this, e, t),
            t
          );
        }
        queryAllNodes(e) {
          const t = [];
          return (
            (function e(t, n, r) {
              t instanceof $i &&
                t.childNodes.forEach(t => {
                  n(t) && r.push(t), t instanceof $i && e(t, n, r);
                });
            })(this, e, t),
            t
          );
        }
        get children() {
          return this.childNodes.filter(e => e instanceof $i);
        }
        triggerEventHandler(e, t) {
          this.listeners.forEach(n => {
            n.name == e && n.callback(t);
          });
        }
      }
      const zi = new Map(),
        Bi = function(e) {
          return zi.get(e) || null;
        };
      function Wi(e) {
        zi.set(e.nativeNode, e);
      }
      const Gi = Ai(null, 'core', [
        { provide: Ks, useValue: 'unknown' },
        { provide: ji, deps: [Pt] },
        { provide: xi, deps: [] },
        { provide: Ys, deps: [] }
      ]);
      function Zi() {
        return Un;
      }
      function Ki() {
        return Vn;
      }
      function Qi(e) {
        return e || 'en-US';
      }
      function Yi(e) {
        let t = [];
        return (
          e.onStable.subscribe(() => {
            for (; t.length; ) t.pop()();
          }),
          function(e) {
            t.push(e);
          }
        );
      }
      let Ji = (() =>
        class {
          constructor(e) {}
        })();
      function Xi(e, t, n, r, s, i) {
        e |= 1;
        const { matchedQueries: o, references: a, matchedQueryIds: l } = wr(t);
        return {
          nodeIndex: -1,
          parent: null,
          renderParent: null,
          bindingIndex: -1,
          outputIndex: -1,
          flags: e,
          checkIndex: -1,
          childFlags: 0,
          directChildFlags: 0,
          childMatchedQueries: 0,
          matchedQueries: o,
          matchedQueryIds: l,
          references: a,
          ngContentIndex: n,
          childCount: r,
          bindings: [],
          bindingFlags: 0,
          outputs: [],
          element: {
            ns: null,
            name: null,
            attrs: null,
            template: i ? Sr(i) : null,
            componentProvider: null,
            componentView: null,
            componentRendererType: null,
            publicProviders: null,
            allProviders: null,
            handleEvent: s || rr
          },
          provider: null,
          text: null,
          query: null,
          ngContent: null
        };
      }
      function eo(e, t, n, r, s, i, o = [], a, l, u, c, h) {
        u || (u = rr);
        const { matchedQueries: d, references: p, matchedQueryIds: f } = wr(n);
        let g = null,
          m = null;
        i && ([g, m] = Ir(i)), (a = a || []);
        const b = new Array(a.length);
        for (let w = 0; w < a.length; w++) {
          const [e, t, n] = a[w],
            [r, s] = Ir(t);
          let i = void 0,
            o = void 0;
          switch (15 & e) {
            case 4:
              o = n;
              break;
            case 1:
            case 8:
              i = n;
          }
          b[w] = { flags: e, ns: r, name: s, nonMinifiedName: s, securityContext: i, suffix: o };
        }
        l = l || [];
        const y = new Array(l.length);
        for (let w = 0; w < l.length; w++) {
          const [e, t] = l[w];
          y[w] = { type: 0, target: e, eventName: t, propName: null };
        }
        const v = (o = o || []).map(([e, t]) => {
          const [n, r] = Ir(e);
          return [n, r, t];
        });
        return (
          (h = (function(e) {
            if (e && '$$undefined' === e.id) {
              const t =
                (null != e.encapsulation && e.encapsulation !== q.None) ||
                e.styles.length ||
                Object.keys(e.data).length;
              e.id = t ? 'c' + ar++ : '$$empty';
            }
            return e && '$$empty' === e.id && (e = null), e || null;
          })(h)),
          c && (t |= 33554432),
          {
            nodeIndex: -1,
            parent: null,
            renderParent: null,
            bindingIndex: -1,
            outputIndex: -1,
            checkIndex: e,
            flags: (t |= 1),
            childFlags: 0,
            directChildFlags: 0,
            childMatchedQueries: 0,
            matchedQueries: d,
            matchedQueryIds: f,
            references: p,
            ngContentIndex: r,
            childCount: s,
            bindings: b,
            bindingFlags: jr(b),
            outputs: y,
            element: {
              ns: g,
              name: m,
              attrs: v,
              template: null,
              componentProvider: null,
              componentView: c || null,
              componentRendererType: h,
              publicProviders: null,
              allProviders: null,
              handleEvent: u || rr
            },
            provider: null,
            text: null,
            query: null,
            ngContent: null
          }
        );
      }
      function to(e, t, n) {
        const r = n.element,
          s = e.root.selectorOrNode,
          i = e.renderer;
        let o;
        if (e.parent || !s) {
          o = r.name ? i.createElement(r.name, r.ns) : i.createComment('');
          const s = Cr(e, t, n);
          s && i.appendChild(s, o);
        } else
          o = i.selectRootElement(
            s,
            !!r.componentRendererType && r.componentRendererType.encapsulation === q.ShadowDom
          );
        if (r.attrs)
          for (let a = 0; a < r.attrs.length; a++) {
            const [e, t, n] = r.attrs[a];
            i.setAttribute(o, t, n, e);
          }
        return o;
      }
      function no(e, t, n, r) {
        for (let o = 0; o < n.outputs.length; o++) {
          const a = n.outputs[o],
            l = ro(e, n.nodeIndex, ((i = a.eventName), (s = a.target) ? `${s}:${i}` : i));
          let u = a.target,
            c = e;
          'component' === a.target && ((u = null), (c = t));
          const h = c.renderer.listen(u || r, a.eventName, l);
          e.disposables[n.outputIndex + o] = h;
        }
        var s, i;
      }
      function ro(e, t, n) {
        return r => pr(e, t, n, r);
      }
      function so(e, t, n, r) {
        if (!ur(e, t, n, r)) return !1;
        const s = t.bindings[n],
          i = Jn(e, t.nodeIndex),
          o = i.renderElement,
          a = s.name;
        switch (15 & s.flags) {
          case 1:
            !(function(e, t, n, r, s, i) {
              const o = t.securityContext;
              let a = o ? e.root.sanitizer.sanitize(o, i) : i;
              a = null != a ? a.toString() : null;
              const l = e.renderer;
              null != i ? l.setAttribute(n, s, a, r) : l.removeAttribute(n, s, r);
            })(e, s, o, s.ns, a, r);
            break;
          case 2:
            !(function(e, t, n, r) {
              const s = e.renderer;
              r ? s.addClass(t, n) : s.removeClass(t, n);
            })(e, o, a, r);
            break;
          case 4:
            !(function(e, t, n, r, s) {
              let i = e.root.sanitizer.sanitize(lt.STYLE, s);
              if (null != i) {
                i = i.toString();
                const e = t.suffix;
                null != e && (i += e);
              } else i = null;
              const o = e.renderer;
              null != i ? o.setStyle(n, r, i) : o.removeStyle(n, r);
            })(e, s, o, a, r);
            break;
          case 8:
            !(function(e, t, n, r, s) {
              const i = t.securityContext;
              let o = i ? e.root.sanitizer.sanitize(i, s) : s;
              e.renderer.setProperty(n, r, o);
            })(33554432 & t.flags && 32 & s.flags ? i.componentView : e, s, o, a, r);
        }
        return !0;
      }
      function io(e, t, n) {
        let r = [];
        for (let s in n) r.push({ propName: s, bindingType: n[s] });
        return {
          nodeIndex: -1,
          parent: null,
          renderParent: null,
          bindingIndex: -1,
          outputIndex: -1,
          checkIndex: -1,
          flags: e,
          childFlags: 0,
          directChildFlags: 0,
          childMatchedQueries: 0,
          ngContentIndex: -1,
          matchedQueries: {},
          matchedQueryIds: 0,
          references: {},
          childCount: 0,
          bindings: [],
          bindingFlags: 0,
          outputs: [],
          element: null,
          provider: null,
          text: null,
          query: { id: t, filterId: vr(t), bindings: r },
          ngContent: null
        };
      }
      function oo(e) {
        const t = e.def.nodeMatchedQueries;
        for (; e.parent && yr(e); ) {
          let n = e.parentNodeDef;
          e = e.parent;
          const r = n.nodeIndex + n.childCount;
          for (let s = 0; s <= r; s++) {
            const r = e.def.nodes[s];
            67108864 & r.flags &&
              536870912 & r.flags &&
              (r.query.filterId & t) === r.query.filterId &&
              tr(e, s).setDirty(),
              (!(1 & r.flags && s + r.childCount < n.nodeIndex) &&
                67108864 & r.childFlags &&
                536870912 & r.childFlags) ||
                (s += r.childCount);
          }
        }
        if (134217728 & e.def.nodeFlags)
          for (let n = 0; n < e.def.nodes.length; n++) {
            const t = e.def.nodes[n];
            134217728 & t.flags && 536870912 & t.flags && tr(e, n).setDirty(), (n += t.childCount);
          }
      }
      function ao(e, t) {
        const n = tr(e, t.nodeIndex);
        if (!n.dirty) return;
        let r,
          s = void 0;
        if (67108864 & t.flags) {
          const n = t.parent.parent;
          (s = lo(e, n.nodeIndex, n.nodeIndex + n.childCount, t.query, [])), (r = Xn(e, t.parent.nodeIndex).instance);
        } else 134217728 & t.flags && ((s = lo(e, 0, e.def.nodes.length - 1, t.query, [])), (r = e.component));
        n.reset(s);
        const i = t.query.bindings;
        let o = !1;
        for (let a = 0; a < i.length; a++) {
          const e = i[a];
          let t;
          switch (e.bindingType) {
            case 0:
              t = n.first;
              break;
            case 1:
              (t = n), (o = !0);
          }
          r[e.propName] = t;
        }
        o && n.notifyOnChanges();
      }
      function lo(e, t, n, r, s) {
        for (let i = t; i <= n; i++) {
          const t = e.def.nodes[i],
            n = t.matchedQueries[r.id];
          if (
            (null != n && s.push(uo(e, t, n)),
            1 & t.flags && t.element.template && (t.element.template.nodeMatchedQueries & r.filterId) === r.filterId)
          ) {
            const n = Jn(e, i);
            if (
              ((t.childMatchedQueries & r.filterId) === r.filterId &&
                (lo(e, i + 1, i + t.childCount, r, s), (i += t.childCount)),
              16777216 & t.flags)
            ) {
              const e = n.viewContainer._embeddedViews;
              for (let t = 0; t < e.length; t++) {
                const i = e[t],
                  o = fr(i);
                o && o === n && lo(i, 0, i.def.nodes.length - 1, r, s);
              }
            }
            const o = n.template._projectedViews;
            if (o)
              for (let e = 0; e < o.length; e++) {
                const t = o[e];
                lo(t, 0, t.def.nodes.length - 1, r, s);
              }
          }
          (t.childMatchedQueries & r.filterId) !== r.filterId && (i += t.childCount);
        }
        return s;
      }
      function uo(e, t, n) {
        if (null != n)
          switch (n) {
            case 1:
              return Jn(e, t.nodeIndex).renderElement;
            case 0:
              return new yn(Jn(e, t.nodeIndex).renderElement);
            case 2:
              return Jn(e, t.nodeIndex).template;
            case 3:
              return Jn(e, t.nodeIndex).viewContainer;
            case 4:
              return Xn(e, t.nodeIndex).instance;
          }
      }
      function co(e, t) {
        return {
          nodeIndex: -1,
          parent: null,
          renderParent: null,
          bindingIndex: -1,
          outputIndex: -1,
          checkIndex: -1,
          flags: 8,
          childFlags: 0,
          directChildFlags: 0,
          childMatchedQueries: 0,
          matchedQueries: {},
          matchedQueryIds: 0,
          references: {},
          ngContentIndex: e,
          childCount: 0,
          bindings: [],
          bindingFlags: 0,
          outputs: [],
          element: null,
          provider: null,
          text: null,
          query: null,
          ngContent: { index: t }
        };
      }
      function ho(e, t, n) {
        const r = Cr(e, t, n);
        r && kr(e, n.ngContent.index, 1, r, null, void 0);
      }
      function po(e, t) {
        const n = Object.keys(t),
          r = n.length,
          s = new Array(r);
        for (let i = 0; i < r; i++) {
          const e = n[i];
          s[t[e]] = e;
        }
        return (function(e, t, n) {
          const r = new Array(n.length);
          for (let s = 0; s < n.length; s++) {
            const e = n[s];
            r[s] = { flags: 8, name: e, ns: null, nonMinifiedName: e, securityContext: null, suffix: null };
          }
          return {
            nodeIndex: -1,
            parent: null,
            renderParent: null,
            bindingIndex: -1,
            outputIndex: -1,
            checkIndex: t,
            flags: 64,
            childFlags: 0,
            directChildFlags: 0,
            childMatchedQueries: 0,
            matchedQueries: {},
            matchedQueryIds: 0,
            references: {},
            ngContentIndex: -1,
            childCount: 0,
            bindings: r,
            bindingFlags: jr(r),
            outputs: [],
            element: null,
            provider: null,
            text: null,
            query: null,
            ngContent: null
          };
        })(0, e, s);
      }
      function fo(e, t, n) {
        const r = new Array(n.length - 1);
        for (let s = 1; s < n.length; s++)
          r[s - 1] = { flags: 8, name: null, ns: null, nonMinifiedName: null, securityContext: null, suffix: n[s] };
        return {
          nodeIndex: -1,
          parent: null,
          renderParent: null,
          bindingIndex: -1,
          outputIndex: -1,
          checkIndex: e,
          flags: 2,
          childFlags: 0,
          directChildFlags: 0,
          childMatchedQueries: 0,
          matchedQueries: {},
          matchedQueryIds: 0,
          references: {},
          ngContentIndex: t,
          childCount: 0,
          bindings: r,
          bindingFlags: 8,
          outputs: [],
          element: null,
          provider: null,
          text: { prefix: n[0] },
          query: null,
          ngContent: null
        };
      }
      function go(e, t, n) {
        let r;
        const s = e.renderer;
        r = s.createText(n.text.prefix);
        const i = Cr(e, t, n);
        return i && s.appendChild(i, r), { renderText: r };
      }
      function mo(e, t) {
        return (null != e ? e.toString() : '') + t.suffix;
      }
      function bo(e, t, n, r) {
        let s = 0,
          i = 0,
          o = 0,
          a = 0,
          l = 0,
          u = null,
          c = null,
          h = !1,
          d = !1,
          p = null;
        for (let f = 0; f < t.length; f++) {
          const e = t[f];
          if (
            ((e.nodeIndex = f),
            (e.parent = u),
            (e.bindingIndex = s),
            (e.outputIndex = i),
            (e.renderParent = c),
            (o |= e.flags),
            (l |= e.matchedQueryIds),
            e.element)
          ) {
            const t = e.element;
            (t.publicProviders = u ? u.element.publicProviders : Object.create(null)),
              (t.allProviders = t.publicProviders),
              (h = !1),
              (d = !1),
              e.element.template && (l |= e.element.template.nodeMatchedQueries);
          }
          if (
            (vo(u, e, t.length),
            (s += e.bindings.length),
            (i += e.outputs.length),
            !c && 3 & e.flags && (p = e),
            20224 & e.flags)
          ) {
            h ||
              ((h = !0),
              (u.element.publicProviders = Object.create(u.element.publicProviders)),
              (u.element.allProviders = u.element.publicProviders));
            const t = 0 != (32768 & e.flags);
            0 == (8192 & e.flags) || t
              ? (u.element.publicProviders[ir(e.provider.token)] = e)
              : (d || ((d = !0), (u.element.allProviders = Object.create(u.element.publicProviders))),
                (u.element.allProviders[ir(e.provider.token)] = e)),
              t && (u.element.componentProvider = e);
          }
          if (
            (u
              ? ((u.childFlags |= e.flags),
                (u.directChildFlags |= e.flags),
                (u.childMatchedQueries |= e.matchedQueryIds),
                e.element && e.element.template && (u.childMatchedQueries |= e.element.template.nodeMatchedQueries))
              : (a |= e.flags),
            e.childCount > 0)
          )
            (u = e), yo(e) || (c = e);
          else
            for (; u && f === u.nodeIndex + u.childCount; ) {
              const e = u.parent;
              e && ((e.childFlags |= u.childFlags), (e.childMatchedQueries |= u.childMatchedQueries)),
                (u = e),
                (c = u && yo(u) ? u.renderParent : u);
            }
        }
        return {
          factory: null,
          nodeFlags: o,
          rootNodeFlags: a,
          nodeMatchedQueries: l,
          flags: e,
          nodes: t,
          updateDirectives: n || rr,
          updateRenderer: r || rr,
          handleEvent: (e, n, r, s) => t[n].element.handleEvent(e, r, s),
          bindingCount: s,
          outputCount: i,
          lastRenderRootNode: p
        };
      }
      function yo(e) {
        return 0 != (1 & e.flags) && null === e.element.name;
      }
      function vo(e, t, n) {
        const r = t.element && t.element.template;
        if (r) {
          if (!r.lastRenderRootNode)
            throw new Error('Illegal State: Embedded templates without nodes are not allowed!');
          if (r.lastRenderRootNode && 16777216 & r.lastRenderRootNode.flags)
            throw new Error(
              `Illegal State: Last root node of a template can't have embedded views, at index ${t.nodeIndex}!`
            );
        }
        if (20224 & t.flags && 0 == (1 & (e ? e.flags : 0)))
          throw new Error(
            `Illegal State: StaticProvider/Directive nodes need to be children of elements or anchors, at index ${t.nodeIndex}!`
          );
        if (t.query) {
          if (67108864 & t.flags && (!e || 0 == (16384 & e.flags)))
            throw new Error(
              `Illegal State: Content Query nodes need to be children of directives, at index ${t.nodeIndex}!`
            );
          if (134217728 & t.flags && e)
            throw new Error(`Illegal State: View Query nodes have to be top level nodes, at index ${t.nodeIndex}!`);
        }
        if (t.childCount) {
          const r = e ? e.nodeIndex + e.childCount : n - 1;
          if (t.nodeIndex <= r && t.nodeIndex + t.childCount > r)
            throw new Error(`Illegal State: childCount of node leads outside of parent, at index ${t.nodeIndex}!`);
        }
      }
      function wo(e, t, n, r) {
        const s = xo(e.root, e.renderer, e, t, n);
        return So(s, e.component, r), Eo(s), s;
      }
      function _o(e, t, n) {
        const r = xo(e, e.renderer, null, null, t);
        return So(r, n, n), Eo(r), r;
      }
      function Co(e, t, n, r) {
        const s = t.element.componentRendererType;
        let i;
        return (
          (i = s ? e.root.rendererFactory.createRenderer(r, s) : e.root.renderer),
          xo(e.root, i, e, t.element.componentProvider, n)
        );
      }
      function xo(e, t, n, r, s) {
        const i = new Array(s.nodes.length),
          o = s.outputCount ? new Array(s.outputCount) : null;
        return {
          def: s,
          parent: n,
          viewContainerParent: null,
          parentNodeDef: r,
          context: null,
          component: null,
          nodes: i,
          state: 13,
          root: e,
          renderer: t,
          oldValues: new Array(s.bindingCount),
          disposables: o,
          initIndex: -1
        };
      }
      function So(e, t, n) {
        (e.component = t), (e.context = n);
      }
      function Eo(e) {
        let t;
        br(e) && (t = Jn(e.parent, e.parentNodeDef.parent.nodeIndex).renderElement);
        const n = e.def,
          r = e.nodes;
        for (let s = 0; s < n.nodes.length; s++) {
          const i = n.nodes[s];
          let o;
          switch ((nr.setCurrentNode(e, s), 201347067 & i.flags)) {
            case 1:
              const n = to(e, t, i);
              let a = void 0;
              if (33554432 & i.flags) {
                const t = Sr(i.element.componentView);
                a = nr.createComponentView(e, i, t, n);
              }
              no(e, a, i, n),
                (o = {
                  renderElement: n,
                  componentView: a,
                  viewContainer: null,
                  template: i.element.template ? es(e, i) : void 0
                }),
                16777216 & i.flags && (o.viewContainer = Qr(e, i, o));
              break;
            case 2:
              o = go(e, t, i);
              break;
            case 512:
            case 1024:
            case 2048:
            case 256:
              (o = r[s]), o || 4096 & i.flags || (o = { instance: ws(e, i) });
              break;
            case 16:
              o = { instance: _s(e, i) };
              break;
            case 16384:
              (o = r[s]),
                o || (o = { instance: Cs(e, i) }),
                32768 & i.flags && So(Jn(e, i.parent.nodeIndex).componentView, o.instance, o.instance);
              break;
            case 32:
            case 64:
            case 128:
              o = { value: void 0 };
              break;
            case 67108864:
            case 134217728:
              o = new qs();
              break;
            case 8:
              ho(e, t, i), (o = void 0);
          }
          r[s] = o;
        }
        Ro(e, No.CreateViewNodes), Ho(e, 201326592, 268435456, 0);
      }
      function Oo(e) {
        To(e),
          nr.updateDirectives(e, 1),
          Po(e, No.CheckNoChanges),
          nr.updateRenderer(e, 1),
          Ro(e, No.CheckNoChanges),
          (e.state &= -97);
      }
      function ko(e) {
        1 & e.state ? ((e.state &= -2), (e.state |= 2)) : (e.state &= -3),
          Kn(e, 0, 256),
          To(e),
          nr.updateDirectives(e, 0),
          Po(e, No.CheckAndUpdate),
          Ho(e, 67108864, 536870912, 0);
        let t = Kn(e, 256, 512);
        As(e, 2097152 | (t ? 1048576 : 0)),
          nr.updateRenderer(e, 0),
          Ro(e, No.CheckAndUpdate),
          Ho(e, 134217728, 536870912, 0),
          (t = Kn(e, 512, 768)),
          As(e, 8388608 | (t ? 4194304 : 0)),
          2 & e.def.flags && (e.state &= -9),
          (e.state &= -97),
          Kn(e, 768, 1024);
      }
      function Do(e, t, n, r, s, i, o, a, l, u, c, h, d) {
        return 0 === n
          ? (function(e, t, n, r, s, i, o, a, l, u, c, h) {
              switch (201347067 & t.flags) {
                case 1:
                  return (function(e, t, n, r, s, i, o, a, l, u, c, h) {
                    const d = t.bindings.length;
                    let p = !1;
                    return (
                      d > 0 && so(e, t, 0, n) && (p = !0),
                      d > 1 && so(e, t, 1, r) && (p = !0),
                      d > 2 && so(e, t, 2, s) && (p = !0),
                      d > 3 && so(e, t, 3, i) && (p = !0),
                      d > 4 && so(e, t, 4, o) && (p = !0),
                      d > 5 && so(e, t, 5, a) && (p = !0),
                      d > 6 && so(e, t, 6, l) && (p = !0),
                      d > 7 && so(e, t, 7, u) && (p = !0),
                      d > 8 && so(e, t, 8, c) && (p = !0),
                      d > 9 && so(e, t, 9, h) && (p = !0),
                      p
                    );
                  })(e, t, n, r, s, i, o, a, l, u, c, h);
                case 2:
                  return (function(e, t, n, r, s, i, o, a, l, u, c, h) {
                    let d = !1;
                    const p = t.bindings,
                      f = p.length;
                    if (
                      (f > 0 && ur(e, t, 0, n) && (d = !0),
                      f > 1 && ur(e, t, 1, r) && (d = !0),
                      f > 2 && ur(e, t, 2, s) && (d = !0),
                      f > 3 && ur(e, t, 3, i) && (d = !0),
                      f > 4 && ur(e, t, 4, o) && (d = !0),
                      f > 5 && ur(e, t, 5, a) && (d = !0),
                      f > 6 && ur(e, t, 6, l) && (d = !0),
                      f > 7 && ur(e, t, 7, u) && (d = !0),
                      f > 8 && ur(e, t, 8, c) && (d = !0),
                      f > 9 && ur(e, t, 9, h) && (d = !0),
                      d)
                    ) {
                      let d = t.text.prefix;
                      f > 0 && (d += mo(n, p[0])),
                        f > 1 && (d += mo(r, p[1])),
                        f > 2 && (d += mo(s, p[2])),
                        f > 3 && (d += mo(i, p[3])),
                        f > 4 && (d += mo(o, p[4])),
                        f > 5 && (d += mo(a, p[5])),
                        f > 6 && (d += mo(l, p[6])),
                        f > 7 && (d += mo(u, p[7])),
                        f > 8 && (d += mo(c, p[8])),
                        f > 9 && (d += mo(h, p[9]));
                      const g = Yn(e, t.nodeIndex).renderText;
                      e.renderer.setValue(g, d);
                    }
                    return d;
                  })(e, t, n, r, s, i, o, a, l, u, c, h);
                case 16384:
                  return (function(e, t, n, r, s, i, o, a, l, u, c, h) {
                    const d = Xn(e, t.nodeIndex),
                      p = d.instance;
                    let f = !1,
                      g = void 0;
                    const m = t.bindings.length;
                    return (
                      m > 0 && lr(e, t, 0, n) && ((f = !0), (g = Ts(e, d, t, 0, n, g))),
                      m > 1 && lr(e, t, 1, r) && ((f = !0), (g = Ts(e, d, t, 1, r, g))),
                      m > 2 && lr(e, t, 2, s) && ((f = !0), (g = Ts(e, d, t, 2, s, g))),
                      m > 3 && lr(e, t, 3, i) && ((f = !0), (g = Ts(e, d, t, 3, i, g))),
                      m > 4 && lr(e, t, 4, o) && ((f = !0), (g = Ts(e, d, t, 4, o, g))),
                      m > 5 && lr(e, t, 5, a) && ((f = !0), (g = Ts(e, d, t, 5, a, g))),
                      m > 6 && lr(e, t, 6, l) && ((f = !0), (g = Ts(e, d, t, 6, l, g))),
                      m > 7 && lr(e, t, 7, u) && ((f = !0), (g = Ts(e, d, t, 7, u, g))),
                      m > 8 && lr(e, t, 8, c) && ((f = !0), (g = Ts(e, d, t, 8, c, g))),
                      m > 9 && lr(e, t, 9, h) && ((f = !0), (g = Ts(e, d, t, 9, h, g))),
                      g && p.ngOnChanges(g),
                      65536 & t.flags && Qn(e, 256, t.nodeIndex) && p.ngOnInit(),
                      262144 & t.flags && p.ngDoCheck(),
                      f
                    );
                  })(e, t, n, r, s, i, o, a, l, u, c, h);
                case 32:
                case 64:
                case 128:
                  return (function(e, t, n, r, s, i, o, a, l, u, c, h) {
                    const d = t.bindings;
                    let p = !1;
                    const f = d.length;
                    if (
                      (f > 0 && ur(e, t, 0, n) && (p = !0),
                      f > 1 && ur(e, t, 1, r) && (p = !0),
                      f > 2 && ur(e, t, 2, s) && (p = !0),
                      f > 3 && ur(e, t, 3, i) && (p = !0),
                      f > 4 && ur(e, t, 4, o) && (p = !0),
                      f > 5 && ur(e, t, 5, a) && (p = !0),
                      f > 6 && ur(e, t, 6, l) && (p = !0),
                      f > 7 && ur(e, t, 7, u) && (p = !0),
                      f > 8 && ur(e, t, 8, c) && (p = !0),
                      f > 9 && ur(e, t, 9, h) && (p = !0),
                      p)
                    ) {
                      const p = er(e, t.nodeIndex);
                      let g;
                      switch (201347067 & t.flags) {
                        case 32:
                          (g = new Array(d.length)),
                            f > 0 && (g[0] = n),
                            f > 1 && (g[1] = r),
                            f > 2 && (g[2] = s),
                            f > 3 && (g[3] = i),
                            f > 4 && (g[4] = o),
                            f > 5 && (g[5] = a),
                            f > 6 && (g[6] = l),
                            f > 7 && (g[7] = u),
                            f > 8 && (g[8] = c),
                            f > 9 && (g[9] = h);
                          break;
                        case 64:
                          (g = {}),
                            f > 0 && (g[d[0].name] = n),
                            f > 1 && (g[d[1].name] = r),
                            f > 2 && (g[d[2].name] = s),
                            f > 3 && (g[d[3].name] = i),
                            f > 4 && (g[d[4].name] = o),
                            f > 5 && (g[d[5].name] = a),
                            f > 6 && (g[d[6].name] = l),
                            f > 7 && (g[d[7].name] = u),
                            f > 8 && (g[d[8].name] = c),
                            f > 9 && (g[d[9].name] = h);
                          break;
                        case 128:
                          const e = n;
                          switch (f) {
                            case 1:
                              g = e.transform(n);
                              break;
                            case 2:
                              g = e.transform(r);
                              break;
                            case 3:
                              g = e.transform(r, s);
                              break;
                            case 4:
                              g = e.transform(r, s, i);
                              break;
                            case 5:
                              g = e.transform(r, s, i, o);
                              break;
                            case 6:
                              g = e.transform(r, s, i, o, a);
                              break;
                            case 7:
                              g = e.transform(r, s, i, o, a, l);
                              break;
                            case 8:
                              g = e.transform(r, s, i, o, a, l, u);
                              break;
                            case 9:
                              g = e.transform(r, s, i, o, a, l, u, c);
                              break;
                            case 10:
                              g = e.transform(r, s, i, o, a, l, u, c, h);
                          }
                      }
                      p.value = g;
                    }
                    return p;
                  })(e, t, n, r, s, i, o, a, l, u, c, h);
                default:
                  throw 'unreachable';
              }
            })(e, t, r, s, i, o, a, l, u, c, h, d)
          : (function(e, t, n) {
              switch (201347067 & t.flags) {
                case 1:
                  return (function(e, t, n) {
                    let r = !1;
                    for (let s = 0; s < n.length; s++) so(e, t, s, n[s]) && (r = !0);
                    return r;
                  })(e, t, n);
                case 2:
                  return (function(e, t, n) {
                    const r = t.bindings;
                    let s = !1;
                    for (let i = 0; i < n.length; i++) ur(e, t, i, n[i]) && (s = !0);
                    if (s) {
                      let s = '';
                      for (let e = 0; e < n.length; e++) s += mo(n[e], r[e]);
                      s = t.text.prefix + s;
                      const i = Yn(e, t.nodeIndex).renderText;
                      e.renderer.setValue(i, s);
                    }
                    return s;
                  })(e, t, n);
                case 16384:
                  return (function(e, t, n) {
                    const r = Xn(e, t.nodeIndex),
                      s = r.instance;
                    let i = !1,
                      o = void 0;
                    for (let a = 0; a < n.length; a++) lr(e, t, a, n[a]) && ((i = !0), (o = Ts(e, r, t, a, n[a], o)));
                    return (
                      o && s.ngOnChanges(o),
                      65536 & t.flags && Qn(e, 256, t.nodeIndex) && s.ngOnInit(),
                      262144 & t.flags && s.ngDoCheck(),
                      i
                    );
                  })(e, t, n);
                case 32:
                case 64:
                case 128:
                  return (function(e, t, n) {
                    const r = t.bindings;
                    let s = !1;
                    for (let i = 0; i < n.length; i++) ur(e, t, i, n[i]) && (s = !0);
                    if (s) {
                      const s = er(e, t.nodeIndex);
                      let i;
                      switch (201347067 & t.flags) {
                        case 32:
                          i = n;
                          break;
                        case 64:
                          i = {};
                          for (let s = 0; s < n.length; s++) i[r[s].name] = n[s];
                          break;
                        case 128:
                          const e = n[0],
                            t = n.slice(1);
                          i = e.transform(...t);
                      }
                      s.value = i;
                    }
                    return s;
                  })(e, t, n);
                default:
                  throw 'unreachable';
              }
            })(e, t, r);
      }
      function To(e) {
        const t = e.def;
        if (4 & t.nodeFlags)
          for (let n = 0; n < t.nodes.length; n++) {
            const r = t.nodes[n];
            if (4 & r.flags) {
              const t = Jn(e, n).template._projectedViews;
              if (t)
                for (let n = 0; n < t.length; n++) {
                  const r = t[n];
                  (r.state |= 32), dr(r, e);
                }
            } else 0 == (4 & r.childFlags) && (n += r.childCount);
          }
      }
      function Ao(e, t, n, r, s, i, o, a, l, u, c, h, d) {
        return (
          0 === n
            ? (function(e, t, n, r, s, i, o, a, l, u, c, h) {
                const d = t.bindings.length;
                d > 0 && cr(e, t, 0, n),
                  d > 1 && cr(e, t, 1, r),
                  d > 2 && cr(e, t, 2, s),
                  d > 3 && cr(e, t, 3, i),
                  d > 4 && cr(e, t, 4, o),
                  d > 5 && cr(e, t, 5, a),
                  d > 6 && cr(e, t, 6, l),
                  d > 7 && cr(e, t, 7, u),
                  d > 8 && cr(e, t, 8, c),
                  d > 9 && cr(e, t, 9, h);
              })(e, t, r, s, i, o, a, l, u, c, h, d)
            : (function(e, t, n) {
                for (let r = 0; r < n.length; r++) cr(e, t, r, n[r]);
              })(e, t, r),
          !1
        );
      }
      function Io(e, t) {
        if (tr(e, t.nodeIndex).dirty)
          throw Wn(
            nr.createDebugContext(e, t.nodeIndex),
            `Query ${t.query.id} not dirty`,
            `Query ${t.query.id} dirty`,
            0 != (1 & e.state)
          );
      }
      function jo(e) {
        if (!(128 & e.state)) {
          if ((Po(e, No.Destroy), Ro(e, No.Destroy), As(e, 131072), e.disposables))
            for (let t = 0; t < e.disposables.length; t++) e.disposables[t]();
          !(function(e) {
            if (!(16 & e.state)) return;
            const t = fr(e);
            if (t) {
              const n = t.template._projectedViews;
              n && (U(n, n.indexOf(e)), nr.dirtyParentQueries(e));
            }
          })(e),
            e.renderer.destroyNode &&
              (function(e) {
                const t = e.def.nodes.length;
                for (let n = 0; n < t; n++) {
                  const t = e.def.nodes[n];
                  1 & t.flags
                    ? e.renderer.destroyNode(Jn(e, n).renderElement)
                    : 2 & t.flags
                    ? e.renderer.destroyNode(Yn(e, n).renderText)
                    : (67108864 & t.flags || 134217728 & t.flags) && tr(e, n).destroy();
                }
              })(e),
            br(e) && e.renderer.destroy(),
            (e.state |= 128);
        }
      }
      const No = (function() {
        var e = {
          CreateViewNodes: 0,
          CheckNoChanges: 1,
          CheckNoChangesProjectedViews: 2,
          CheckAndUpdate: 3,
          CheckAndUpdateProjectedViews: 4,
          Destroy: 5
        };
        return (
          (e[e.CreateViewNodes] = 'CreateViewNodes'),
          (e[e.CheckNoChanges] = 'CheckNoChanges'),
          (e[e.CheckNoChangesProjectedViews] = 'CheckNoChangesProjectedViews'),
          (e[e.CheckAndUpdate] = 'CheckAndUpdate'),
          (e[e.CheckAndUpdateProjectedViews] = 'CheckAndUpdateProjectedViews'),
          (e[e.Destroy] = 'Destroy'),
          e
        );
      })();
      function Ro(e, t) {
        const n = e.def;
        if (33554432 & n.nodeFlags)
          for (let r = 0; r < n.nodes.length; r++) {
            const s = n.nodes[r];
            33554432 & s.flags ? Mo(Jn(e, r).componentView, t) : 0 == (33554432 & s.childFlags) && (r += s.childCount);
          }
      }
      function Po(e, t) {
        const n = e.def;
        if (16777216 & n.nodeFlags)
          for (let r = 0; r < n.nodes.length; r++) {
            const s = n.nodes[r];
            if (16777216 & s.flags) {
              const n = Jn(e, r).viewContainer._embeddedViews;
              for (let e = 0; e < n.length; e++) Mo(n[e], t);
            } else 0 == (16777216 & s.childFlags) && (r += s.childCount);
          }
      }
      function Mo(e, t) {
        const n = e.state;
        switch (t) {
          case No.CheckNoChanges:
            0 == (128 & n) && (12 == (12 & n) ? Oo(e) : 64 & n && Lo(e, No.CheckNoChangesProjectedViews));
            break;
          case No.CheckNoChangesProjectedViews:
            0 == (128 & n) && (32 & n ? Oo(e) : 64 & n && Lo(e, t));
            break;
          case No.CheckAndUpdate:
            0 == (128 & n) && (12 == (12 & n) ? ko(e) : 64 & n && Lo(e, No.CheckAndUpdateProjectedViews));
            break;
          case No.CheckAndUpdateProjectedViews:
            0 == (128 & n) && (32 & n ? ko(e) : 64 & n && Lo(e, t));
            break;
          case No.Destroy:
            jo(e);
            break;
          case No.CreateViewNodes:
            Eo(e);
        }
      }
      function Lo(e, t) {
        Po(e, t), Ro(e, t);
      }
      function Ho(e, t, n, r) {
        if (!(e.def.nodeFlags & t && e.def.nodeFlags & n)) return;
        const s = e.def.nodes.length;
        for (let i = 0; i < s; i++) {
          const s = e.def.nodes[i];
          if (s.flags & t && s.flags & n)
            switch ((nr.setCurrentNode(e, s.nodeIndex), r)) {
              case 0:
                ao(e, s);
                break;
              case 1:
                Io(e, s);
            }
          (s.childFlags & t && s.childFlags & n) || (i += s.childCount);
        }
      }
      let Fo = !1;
      function Uo(e, t, n, r, s, i) {
        const o = s.injector.get(_n);
        return _o(qo(e, s, o, t, n), r, i);
      }
      function Vo(e, t, n, r, s, i) {
        const o = s.injector.get(_n),
          a = qo(e, s, new wa(o), t, n),
          l = Jo(r);
        return ya(sa.create, _o, null, [a, l, i]);
      }
      function qo(e, t, n, r, s) {
        const i = t.injector.get(ut),
          o = t.injector.get(Pe),
          a = n.createRenderer(null, null);
        return {
          ngModule: t,
          injector: e,
          projectableNodes: r,
          selectorOrNode: s,
          sanitizer: i,
          rendererFactory: n,
          renderer: a,
          errorHandler: o
        };
      }
      function $o(e, t, n, r) {
        const s = Jo(n);
        return ya(sa.create, wo, null, [e, t, s, r]);
      }
      function zo(e, t, n, r) {
        return (n = Zo.get(t.element.componentProvider.provider.token) || Jo(n)), ya(sa.create, Co, null, [e, t, n, r]);
      }
      function Bo(e, t, n, r) {
        return as(
          e,
          t,
          n,
          (function(e) {
            const { hasOverrides: t, hasDeprecatedOverrides: n } = (function(e) {
              let t = !1,
                n = !1;
              return (
                0 === Wo.size ||
                  (e.providers.forEach(e => {
                    const r = Wo.get(e.token);
                    3840 & e.flags && r && ((t = !0), (n = n || r.deprecatedBehavior));
                  }),
                  e.modules.forEach(e => {
                    Go.forEach((r, s) => {
                      m(s).providedIn === e && ((t = !0), (n = n || r.deprecatedBehavior));
                    });
                  })),
                { hasOverrides: t, hasDeprecatedOverrides: n }
              );
            })(e);
            return t
              ? ((function(e) {
                  for (let t = 0; t < e.providers.length; t++) {
                    const r = e.providers[t];
                    n && (r.flags |= 4096);
                    const s = Wo.get(r.token);
                    s && ((r.flags = (-3841 & r.flags) | s.flags), (r.deps = _r(s.deps)), (r.value = s.value));
                  }
                  if (Go.size > 0) {
                    let t = new Set(e.modules);
                    Go.forEach((r, s) => {
                      if (t.has(m(s).providedIn)) {
                        let t = {
                          token: s,
                          flags: r.flags | (n ? 4096 : 0),
                          deps: _r(r.deps),
                          value: r.value,
                          index: e.providers.length
                        };
                        e.providers.push(t), (e.providersByKey[ir(s)] = t);
                      }
                    });
                  }
                })((e = e.factory(() => rr))),
                e)
              : e;
          })(r)
        );
      }
      const Wo = new Map(),
        Go = new Map(),
        Zo = new Map();
      function Ko(e) {
        let t;
        Wo.set(e.token, e),
          'function' == typeof e.token && (t = m(e.token)) && 'function' == typeof t.providedIn && Go.set(e.token, e);
      }
      function Qo(e, t) {
        const n = Sr(t.viewDefFactory),
          r = Sr(n.nodes[0].element.componentView);
        Zo.set(e, r);
      }
      function Yo() {
        Wo.clear(), Go.clear(), Zo.clear();
      }
      function Jo(e) {
        if (0 === Wo.size) return e;
        const t = (function(e) {
          const t = [];
          let n = null;
          for (let r = 0; r < e.nodes.length; r++) {
            const s = e.nodes[r];
            1 & s.flags && (n = s),
              n && 3840 & s.flags && Wo.has(s.provider.token) && (t.push(n.nodeIndex), (n = null));
          }
          return t;
        })(e);
        if (0 === t.length) return e;
        e = e.factory(() => rr);
        for (let r = 0; r < t.length; r++) n(e, t[r]);
        return e;
        function n(e, t) {
          for (let n = t + 1; n < e.nodes.length; n++) {
            const t = e.nodes[n];
            if (1 & t.flags) return;
            if (3840 & t.flags) {
              const e = t.provider,
                n = Wo.get(e.token);
              n && ((t.flags = (-3841 & t.flags) | n.flags), (e.deps = _r(n.deps)), (e.value = n.value));
            }
          }
        }
      }
      function Xo(e, t, n, r, s, i, o, a, l, u, c, h, d) {
        const p = e.def.nodes[t];
        return Do(e, p, n, r, s, i, o, a, l, u, c, h, d), 224 & p.flags ? er(e, t).value : void 0;
      }
      function ea(e, t, n, r, s, i, o, a, l, u, c, h, d) {
        const p = e.def.nodes[t];
        return Ao(e, p, n, r, s, i, o, a, l, u, c, h, d), 224 & p.flags ? er(e, t).value : void 0;
      }
      function ta(e) {
        return ya(sa.detectChanges, ko, null, [e]);
      }
      function na(e) {
        return ya(sa.checkNoChanges, Oo, null, [e]);
      }
      function ra(e) {
        return ya(sa.destroy, jo, null, [e]);
      }
      const sa = (function() {
        var e = { create: 0, detectChanges: 1, checkNoChanges: 2, destroy: 3, handleEvent: 4 };
        return (
          (e[e.create] = 'create'),
          (e[e.detectChanges] = 'detectChanges'),
          (e[e.checkNoChanges] = 'checkNoChanges'),
          (e[e.destroy] = 'destroy'),
          (e[e.handleEvent] = 'handleEvent'),
          e
        );
      })();
      let ia, oa, aa;
      function la(e, t) {
        (oa = e), (aa = t);
      }
      function ua(e, t, n, r) {
        return la(e, t), ya(sa.handleEvent, e.def.handleEvent, null, [e, t, n, r]);
      }
      function ca(e, t) {
        if (128 & e.state) throw Zn(sa[ia]);
        return (
          la(e, fa(e, 0)),
          e.def.updateDirectives(function(e, n, r, ...s) {
            const i = e.def.nodes[n];
            return (
              0 === t ? da(e, i, r, s) : pa(e, i, r, s),
              16384 & i.flags && la(e, fa(e, n)),
              224 & i.flags ? er(e, i.nodeIndex).value : void 0
            );
          }, e)
        );
      }
      function ha(e, t) {
        if (128 & e.state) throw Zn(sa[ia]);
        return (
          la(e, ga(e, 0)),
          e.def.updateRenderer(function(e, n, r, ...s) {
            const i = e.def.nodes[n];
            return (
              0 === t ? da(e, i, r, s) : pa(e, i, r, s),
              3 & i.flags && la(e, ga(e, n)),
              224 & i.flags ? er(e, i.nodeIndex).value : void 0
            );
          }, e)
        );
      }
      function da(e, t, n, r) {
        if (Do(e, t, n, ...r)) {
          const i = 1 === n ? r[0] : r;
          if (16384 & t.flags) {
            const n = {};
            for (let e = 0; e < t.bindings.length; e++) {
              const r = t.bindings[e],
                o = i[e];
              8 & r.flags &&
                (n[
                  ((s = r.nonMinifiedName),
                  'ng-reflect-' + s.replace(/[$@]/g, '_').replace(pt, (...e) => '-' + e[1].toLowerCase()))
                ] = ft(o));
            }
            const r = t.parent,
              o = Jn(e, r.nodeIndex).renderElement;
            if (r.element.name)
              for (let t in n) {
                const r = n[t];
                null != r ? e.renderer.setAttribute(o, t, r) : e.renderer.removeAttribute(o, t);
              }
            else e.renderer.setValue(o, 'bindings=' + JSON.stringify(n, null, 2));
          }
        }
        var s;
      }
      function pa(e, t, n, r) {
        Ao(e, t, n, ...r);
      }
      function fa(e, t) {
        for (let n = t; n < e.def.nodes.length; n++) {
          const t = e.def.nodes[n];
          if (16384 & t.flags && t.bindings && t.bindings.length) return n;
        }
        return null;
      }
      function ga(e, t) {
        for (let n = t; n < e.def.nodes.length; n++) {
          const t = e.def.nodes[n];
          if (3 & t.flags && t.bindings && t.bindings.length) return n;
        }
        return null;
      }
      class ma {
        constructor(e, t) {
          (this.view = e), (this.nodeIndex = t), null == t && (this.nodeIndex = t = 0), (this.nodeDef = e.def.nodes[t]);
          let n = this.nodeDef,
            r = e;
          for (; n && 0 == (1 & n.flags); ) n = n.parent;
          if (!n) for (; !n && r; ) (n = gr(r)), (r = r.parent);
          (this.elDef = n), (this.elView = r);
        }
        get elOrCompView() {
          return Jn(this.elView, this.elDef.nodeIndex).componentView || this.view;
        }
        get injector() {
          return ns(this.elView, this.elDef);
        }
        get component() {
          return this.elOrCompView.component;
        }
        get context() {
          return this.elOrCompView.context;
        }
        get providerTokens() {
          const e = [];
          if (this.elDef)
            for (let t = this.elDef.nodeIndex + 1; t <= this.elDef.nodeIndex + this.elDef.childCount; t++) {
              const n = this.elView.def.nodes[t];
              20224 & n.flags && e.push(n.provider.token), (t += n.childCount);
            }
          return e;
        }
        get references() {
          const e = {};
          if (this.elDef) {
            ba(this.elView, this.elDef, e);
            for (let t = this.elDef.nodeIndex + 1; t <= this.elDef.nodeIndex + this.elDef.childCount; t++) {
              const n = this.elView.def.nodes[t];
              20224 & n.flags && ba(this.elView, n, e), (t += n.childCount);
            }
          }
          return e;
        }
        get componentRenderElement() {
          const e = (function(e) {
            for (; e && !br(e); ) e = e.parent;
            return e.parent ? Jn(e.parent, gr(e).nodeIndex) : null;
          })(this.elOrCompView);
          return e ? e.renderElement : void 0;
        }
        get renderNode() {
          return 2 & this.nodeDef.flags ? mr(this.view, this.nodeDef) : mr(this.elView, this.elDef);
        }
        logError(e, ...t) {
          let n, r;
          2 & this.nodeDef.flags
            ? ((n = this.view.def), (r = this.nodeDef.nodeIndex))
            : ((n = this.elView.def), (r = this.elDef.nodeIndex));
          const s = (function(e, t) {
            let n = -1;
            for (let r = 0; r <= t; r++) 3 & e.nodes[r].flags && n++;
            return n;
          })(n, r);
          let i = -1;
          n.factory(() => (i++, i === s ? e.error.bind(e, ...t) : rr)),
            i < s && (e.error('Illegal state: the ViewDefinitionFactory did not call the logger!'), e.error(...t));
        }
      }
      function ba(e, t, n) {
        for (let r in t.references) n[r] = uo(e, t, t.references[r]);
      }
      function ya(e, t, n, r) {
        const s = ia,
          i = oa,
          o = aa;
        try {
          ia = e;
          const a = t.apply(n, r);
          return (oa = i), (aa = o), (ia = s), a;
        } catch (a) {
          if (je(a) || !oa) throw a;
          throw (function(e, t) {
            return e instanceof Error || (e = new Error(e.toString())), Gn(e, t), e;
          })(a, va());
        }
      }
      function va() {
        return oa ? new ma(oa, aa) : null;
      }
      class wa {
        constructor(e) {
          this.delegate = e;
        }
        createRenderer(e, t) {
          return new _a(this.delegate.createRenderer(e, t));
        }
        begin() {
          this.delegate.begin && this.delegate.begin();
        }
        end() {
          this.delegate.end && this.delegate.end();
        }
        whenRenderingDone() {
          return this.delegate.whenRenderingDone ? this.delegate.whenRenderingDone() : Promise.resolve(null);
        }
      }
      class _a {
        constructor(e) {
          (this.delegate = e), (this.debugContextFactory = va), (this.data = this.delegate.data);
        }
        createDebugContext(e) {
          return this.debugContextFactory(e);
        }
        destroyNode(e) {
          const t = Bi(e);
          !(function(e) {
            zi.delete(e.nativeNode);
          })(t),
            t instanceof qi && (t.listeners.length = 0),
            this.delegate.destroyNode && this.delegate.destroyNode(e);
        }
        destroy() {
          this.delegate.destroy();
        }
        createElement(e, t) {
          const n = this.delegate.createElement(e, t),
            r = this.createDebugContext(n);
          if (r) {
            const t = new $i(n, null, r);
            (t.name = e), Wi(t);
          }
          return n;
        }
        createComment(e) {
          const t = this.delegate.createComment(e),
            n = this.createDebugContext(t);
          return n && Wi(new qi(t, null, n)), t;
        }
        createText(e) {
          const t = this.delegate.createText(e),
            n = this.createDebugContext(t);
          return n && Wi(new qi(t, null, n)), t;
        }
        appendChild(e, t) {
          const n = Bi(e),
            r = Bi(t);
          n && r && n instanceof $i && n.addChild(r), this.delegate.appendChild(e, t);
        }
        insertBefore(e, t, n) {
          const r = Bi(e),
            s = Bi(t),
            i = Bi(n);
          r && s && r instanceof $i && r.insertBefore(i, s), this.delegate.insertBefore(e, t, n);
        }
        removeChild(e, t) {
          const n = Bi(e),
            r = Bi(t);
          n && r && n instanceof $i && n.removeChild(r), this.delegate.removeChild(e, t);
        }
        selectRootElement(e, t) {
          const n = this.delegate.selectRootElement(e, t),
            r = va();
          return r && Wi(new $i(n, null, r)), n;
        }
        setAttribute(e, t, n, r) {
          const s = Bi(e);
          s && s instanceof $i && (s.attributes[r ? r + ':' + t : t] = n), this.delegate.setAttribute(e, t, n, r);
        }
        removeAttribute(e, t, n) {
          const r = Bi(e);
          r && r instanceof $i && (r.attributes[n ? n + ':' + t : t] = null), this.delegate.removeAttribute(e, t, n);
        }
        addClass(e, t) {
          const n = Bi(e);
          n && n instanceof $i && (n.classes[t] = !0), this.delegate.addClass(e, t);
        }
        removeClass(e, t) {
          const n = Bi(e);
          n && n instanceof $i && (n.classes[t] = !1), this.delegate.removeClass(e, t);
        }
        setStyle(e, t, n, r) {
          const s = Bi(e);
          s && s instanceof $i && (s.styles[t] = n), this.delegate.setStyle(e, t, n, r);
        }
        removeStyle(e, t, n) {
          const r = Bi(e);
          r && r instanceof $i && (r.styles[t] = null), this.delegate.removeStyle(e, t, n);
        }
        setProperty(e, t, n) {
          const r = Bi(e);
          r && r instanceof $i && (r.properties[t] = n), this.delegate.setProperty(e, t, n);
        }
        listen(e, t, n) {
          if ('string' != typeof e) {
            const r = Bi(e);
            r && r.listeners.push(new Vi(t, n));
          }
          return this.delegate.listen(e, t, n);
        }
        parentNode(e) {
          return this.delegate.parentNode(e);
        }
        nextSibling(e) {
          return this.delegate.nextSibling(e);
        }
        setValue(e, t) {
          return this.delegate.setValue(e, t);
        }
      }
      function Ca(e, t, n) {
        return new xa(e, t, n);
      }
      class xa extends H {
        constructor(e, t, n) {
          super(), (this.moduleType = e), (this._bootstrapComponents = t), (this._ngModuleDefFactory = n);
        }
        create(e) {
          !(function() {
            if (Fo) return;
            Fo = !0;
            const e = He()
              ? {
                  setCurrentNode: la,
                  createRootView: Vo,
                  createEmbeddedView: $o,
                  createComponentView: zo,
                  createNgModuleRef: Bo,
                  overrideProvider: Ko,
                  overrideComponentView: Qo,
                  clearOverrides: Yo,
                  checkAndUpdateView: ta,
                  checkNoChangesView: na,
                  destroyView: ra,
                  createDebugContext: (e, t) => new ma(e, t),
                  handleEvent: ua,
                  updateDirectives: ca,
                  updateRenderer: ha
                }
              : {
                  setCurrentNode: () => {},
                  createRootView: Uo,
                  createEmbeddedView: wo,
                  createComponentView: Co,
                  createNgModuleRef: as,
                  overrideProvider: rr,
                  overrideComponentView: rr,
                  clearOverrides: rr,
                  checkAndUpdateView: ko,
                  checkNoChangesView: Oo,
                  destroyView: jo,
                  createDebugContext: (e, t) => new ma(e, t),
                  handleEvent: (e, t, n, r) => e.def.handleEvent(e, t, n, r),
                  updateDirectives: (e, t) => e.def.updateDirectives(0 === t ? Xo : ea, e),
                  updateRenderer: (e, t) => e.def.updateRenderer(0 === t ? Xo : ea, e)
                };
            (nr.setCurrentNode = e.setCurrentNode),
              (nr.createRootView = e.createRootView),
              (nr.createEmbeddedView = e.createEmbeddedView),
              (nr.createComponentView = e.createComponentView),
              (nr.createNgModuleRef = e.createNgModuleRef),
              (nr.overrideProvider = e.overrideProvider),
              (nr.overrideComponentView = e.overrideComponentView),
              (nr.clearOverrides = e.clearOverrides),
              (nr.checkAndUpdateView = e.checkAndUpdateView),
              (nr.checkNoChangesView = e.checkNoChangesView),
              (nr.destroyView = e.destroyView),
              (nr.resolveDep = ks),
              (nr.createDebugContext = e.createDebugContext),
              (nr.handleEvent = e.handleEvent),
              (nr.updateDirectives = e.updateDirectives),
              (nr.updateRenderer = e.updateRenderer),
              (nr.dirtyParentQueries = oo);
          })();
          const t = (function(e) {
            const t = Array.from(e.providers),
              n = Array.from(e.modules),
              r = {};
            for (const s in e.providersByKey) r[s] = e.providersByKey[s];
            return { factory: e.factory, isRoot: e.isRoot, providers: t, modules: n, providersByKey: r };
          })(Sr(this._ngModuleDefFactory));
          return nr.createNgModuleRef(this.moduleType, e || Pt.NULL, this._bootstrapComponents, t);
        }
      }
    },
    '9ppp': function(e, t, n) {
      'use strict';
      n.d(t, 'a', function() {
        return r;
      });
      const r = (() => {
        function e() {
          return (
            Error.call(this), (this.message = 'object unsubscribed'), (this.name = 'ObjectUnsubscribedError'), this
          );
        }
        return (e.prototype = Object.create(Error.prototype)), e;
      })();
    },
    'A/Ql': function(e) {
      e.exports = {
        APP_NAME: 'Search API',
        About: 'About',
        'Hello world !': 'Hello world !',
        Home: 'Home',
        Version: 'Version'
      };
    },
    AytR: function(e, t, n) {
      'use strict';
      n.d(t, 'a', function() {
        return r;
      });
      const r = {
        production: !0,
        hmr: !1,
        version: '1.0.0',
        serverUrl: 'https://api.chucknorris.io',
        defaultLanguage: 'en-US',
        supportedLanguages: ['en-US', 'fr-FR']
      };
    },
    BFxc: function(e, t, n) {
      'use strict';
      n.d(t, 'a', function() {
        return o;
      });
      var r = n('7o/Q'),
        s = n('4I5i'),
        i = n('EY2u');
      function o(e) {
        return function(t) {
          return 0 === e ? Object(i.b)() : t.lift(new a(e));
        };
      }
      class a {
        constructor(e) {
          if (((this.total = e), this.total < 0)) throw new s.a();
        }
        call(e, t) {
          return t.subscribe(new l(e, this.total));
        }
      }
      class l extends r.a {
        constructor(e, t) {
          super(e), (this.total = t), (this.ring = new Array()), (this.count = 0);
        }
        _next(e) {
          const t = this.ring,
            n = this.total,
            r = this.count++;
          t.length < n ? t.push(e) : (t[r % n] = e);
        }
        _complete() {
          const e = this.destination;
          let t = this.count;
          if (t > 0) {
            const n = this.count >= this.total ? this.total : this.count,
              r = this.ring;
            for (let s = 0; s < n; s++) {
              const s = t++ % n;
              e.next(r[s]);
            }
          }
          e.complete();
        }
      }
    },
    Cfvw: function(e, t, n) {
      'use strict';
      var r = n('HDdC'),
        s = n('SeVD'),
        i = n('quSY'),
        o = n('kJWO'),
        a = n('jZKg'),
        l = n('Lhse'),
        u = n('c2HN'),
        c = n('I55L');
      function h(e, t) {
        return t
          ? (function(e, t) {
              if (null != e) {
                if (
                  (function(e) {
                    return e && 'function' == typeof e[o.a];
                  })(e)
                )
                  return (function(e, t) {
                    return new r.a(n => {
                      const r = new i.a();
                      return (
                        r.add(
                          t.schedule(() => {
                            const s = e[o.a]();
                            r.add(
                              s.subscribe({
                                next(e) {
                                  r.add(t.schedule(() => n.next(e)));
                                },
                                error(e) {
                                  r.add(t.schedule(() => n.error(e)));
                                },
                                complete() {
                                  r.add(t.schedule(() => n.complete()));
                                }
                              })
                            );
                          })
                        ),
                        r
                      );
                    });
                  })(e, t);
                if (Object(u.a)(e))
                  return (function(e, t) {
                    return new r.a(n => {
                      const r = new i.a();
                      return (
                        r.add(
                          t.schedule(() =>
                            e.then(
                              e => {
                                r.add(
                                  t.schedule(() => {
                                    n.next(e), r.add(t.schedule(() => n.complete()));
                                  })
                                );
                              },
                              e => {
                                r.add(t.schedule(() => n.error(e)));
                              }
                            )
                          )
                        ),
                        r
                      );
                    });
                  })(e, t);
                if (Object(c.a)(e)) return Object(a.a)(e, t);
                if (
                  (function(e) {
                    return e && 'function' == typeof e[l.a];
                  })(e) ||
                  'string' == typeof e
                )
                  return (function(e, t) {
                    if (!e) throw new Error('Iterable cannot be null');
                    return new r.a(n => {
                      const r = new i.a();
                      let s;
                      return (
                        r.add(() => {
                          s && 'function' == typeof s.return && s.return();
                        }),
                        r.add(
                          t.schedule(() => {
                            (s = e[l.a]()),
                              r.add(
                                t.schedule(function() {
                                  if (n.closed) return;
                                  let e, t;
                                  try {
                                    const n = s.next();
                                    (e = n.value), (t = n.done);
                                  } catch (r) {
                                    return void n.error(r);
                                  }
                                  t ? n.complete() : (n.next(e), this.schedule());
                                })
                              );
                          })
                        ),
                        r
                      );
                    });
                  })(e, t);
              }
              throw new TypeError(((null !== e && typeof e) || e) + ' is not observable');
            })(e, t)
          : e instanceof r.a
          ? e
          : new r.a(Object(s.a)(e));
      }
      n.d(t, 'a', function() {
        return h;
      });
    },
    DH7j: function(e, t, n) {
      'use strict';
      n.d(t, 'a', function() {
        return r;
      });
      const r = (() => Array.isArray || (e => e && 'number' == typeof e.length))();
    },
    EY2u: function(e, t, n) {
      'use strict';
      n.d(t, 'a', function() {
        return s;
      }),
        n.d(t, 'b', function() {
          return i;
        });
      var r = n('HDdC');
      const s = new r.a(e => e.complete());
      function i(e) {
        return e
          ? (function(e) {
              return new r.a(t => e.schedule(() => t.complete()));
            })(e)
          : s;
      }
    },
    GyhO: function(e, t, n) {
      'use strict';
      n.d(t, 'a', function() {
        return i;
      });
      var r = n('LRne'),
        s = n('0EUg');
      function i(...e) {
        return Object(s.a)()(Object(r.a)(...e));
      }
    },
    HDdC: function(e, t, n) {
      'use strict';
      var r = n('7o/Q'),
        s = n('2QA8'),
        i = n('gRHU'),
        o = n('kJWO'),
        a = n('mCNh'),
        l = n('2fFW');
      n.d(t, 'a', function() {
        return u;
      });
      let u = (() => {
        class e {
          constructor(e) {
            (this._isScalar = !1), e && (this._subscribe = e);
          }
          lift(t) {
            const n = new e();
            return (n.source = this), (n.operator = t), n;
          }
          subscribe(e, t, n) {
            const { operator: o } = this,
              a = (function(e, t, n) {
                if (e) {
                  if (e instanceof r.a) return e;
                  if (e[s.a]) return e[s.a]();
                }
                return e || t || n ? new r.a(e, t, n) : new r.a(i.a);
              })(e, t, n);
            if (
              (a.add(
                o
                  ? o.call(a, this.source)
                  : this.source || (l.a.useDeprecatedSynchronousErrorHandling && !a.syncErrorThrowable)
                  ? this._subscribe(a)
                  : this._trySubscribe(a)
              ),
              l.a.useDeprecatedSynchronousErrorHandling &&
                a.syncErrorThrowable &&
                ((a.syncErrorThrowable = !1), a.syncErrorThrown))
            )
              throw a.syncErrorValue;
            return a;
          }
          _trySubscribe(e) {
            try {
              return this._subscribe(e);
            } catch (t) {
              l.a.useDeprecatedSynchronousErrorHandling && ((e.syncErrorThrown = !0), (e.syncErrorValue = t)),
                (function(e) {
                  for (; e; ) {
                    const { closed: t, destination: n, isStopped: s } = e;
                    if (t || s) return !1;
                    e = n && n instanceof r.a ? n : null;
                  }
                  return !0;
                })(e)
                  ? e.error(t)
                  : console.warn(t);
            }
          }
          forEach(e, t) {
            return new (t = c(t))((t, n) => {
              let r;
              r = this.subscribe(
                t => {
                  try {
                    e(t);
                  } catch (s) {
                    n(s), r && r.unsubscribe();
                  }
                },
                n,
                t
              );
            });
          }
          _subscribe(e) {
            const { source: t } = this;
            return t && t.subscribe(e);
          }
          [o.a]() {
            return this;
          }
          pipe(...e) {
            return 0 === e.length ? this : Object(a.b)(e)(this);
          }
          toPromise(e) {
            return new (e = c(e))((e, t) => {
              let n;
              this.subscribe(
                e => (n = e),
                e => t(e),
                () => e(n)
              );
            });
          }
        }
        return (e.create = t => new e(t)), e;
      })();
      function c(e) {
        if ((e || (e = l.a.Promise || Promise), !e)) throw new Error('no Promise impl found');
        return e;
      }
    },
    I55L: function(e, t, n) {
      'use strict';
      n.d(t, 'a', function() {
        return r;
      });
      const r = e => e && 'number' == typeof e.length && 'function' != typeof e;
    },
    IheW: function(e, t, n) {
      'use strict';
      n.d(t, 'l', function() {
        return j;
      }),
        n.d(t, 'o', function() {
          return L;
        }),
        n.d(t, 'p', function() {
          return H;
        }),
        n.d(t, 'm', function() {
          return R;
        }),
        n.d(t, 'n', function() {
          return P;
        }),
        n.d(t, 'b', function() {
          return h;
        }),
        n.d(t, 'f', function() {
          return c;
        }),
        n.d(t, 'c', function() {
          return O;
        }),
        n.d(t, 'a', function() {
          return D;
        }),
        n.d(t, 'd', function() {
          return V;
        }),
        n.d(t, 'e', function() {
          return U;
        }),
        n.d(t, 'k', function() {
          return F;
        }),
        n.d(t, 'g', function() {
          return x;
        }),
        n.d(t, 'h', function() {
          return N;
        }),
        n.d(t, 'j', function() {
          return I;
        }),
        n.d(t, 'i', function() {
          return M;
        });
      var r = n('8Y7J'),
        s = n('LRne'),
        i = n('HDdC'),
        o = n('bOdf'),
        a = n('pLZG'),
        l = n('lJxs'),
        u = n('SVse');
      class c {}
      class h {}
      class d {
        constructor(e) {
          (this.normalizedNames = new Map()),
            (this.lazyUpdate = null),
            e
              ? (this.lazyInit =
                  'string' == typeof e
                    ? () => {
                        (this.headers = new Map()),
                          e.split('\n').forEach(e => {
                            const t = e.indexOf(':');
                            if (t > 0) {
                              const n = e.slice(0, t),
                                r = n.toLowerCase(),
                                s = e.slice(t + 1).trim();
                              this.maybeSetNormalizedName(n, r),
                                this.headers.has(r) ? this.headers.get(r).push(s) : this.headers.set(r, [s]);
                            }
                          });
                      }
                    : () => {
                        (this.headers = new Map()),
                          Object.keys(e).forEach(t => {
                            let n = e[t];
                            const r = t.toLowerCase();
                            'string' == typeof n && (n = [n]),
                              n.length > 0 && (this.headers.set(r, n), this.maybeSetNormalizedName(t, r));
                          });
                      })
              : (this.headers = new Map());
        }
        has(e) {
          return this.init(), this.headers.has(e.toLowerCase());
        }
        get(e) {
          this.init();
          const t = this.headers.get(e.toLowerCase());
          return t && t.length > 0 ? t[0] : null;
        }
        keys() {
          return this.init(), Array.from(this.normalizedNames.values());
        }
        getAll(e) {
          return this.init(), this.headers.get(e.toLowerCase()) || null;
        }
        append(e, t) {
          return this.clone({ name: e, value: t, op: 'a' });
        }
        set(e, t) {
          return this.clone({ name: e, value: t, op: 's' });
        }
        delete(e, t) {
          return this.clone({ name: e, value: t, op: 'd' });
        }
        maybeSetNormalizedName(e, t) {
          this.normalizedNames.has(t) || this.normalizedNames.set(t, e);
        }
        init() {
          this.lazyInit &&
            (this.lazyInit instanceof d ? this.copyFrom(this.lazyInit) : this.lazyInit(),
            (this.lazyInit = null),
            this.lazyUpdate && (this.lazyUpdate.forEach(e => this.applyUpdate(e)), (this.lazyUpdate = null)));
        }
        copyFrom(e) {
          e.init(),
            Array.from(e.headers.keys()).forEach(t => {
              this.headers.set(t, e.headers.get(t)), this.normalizedNames.set(t, e.normalizedNames.get(t));
            });
        }
        clone(e) {
          const t = new d();
          return (
            (t.lazyInit = this.lazyInit && this.lazyInit instanceof d ? this.lazyInit : this),
            (t.lazyUpdate = (this.lazyUpdate || []).concat([e])),
            t
          );
        }
        applyUpdate(e) {
          const t = e.name.toLowerCase();
          switch (e.op) {
            case 'a':
            case 's':
              let n = e.value;
              if (('string' == typeof n && (n = [n]), 0 === n.length)) return;
              this.maybeSetNormalizedName(e.name, t);
              const r = ('a' === e.op ? this.headers.get(t) : void 0) || [];
              r.push(...n), this.headers.set(t, r);
              break;
            case 'd':
              const s = e.value;
              if (s) {
                let e = this.headers.get(t);
                if (!e) return;
                (e = e.filter(e => -1 === s.indexOf(e))),
                  0 === e.length ? (this.headers.delete(t), this.normalizedNames.delete(t)) : this.headers.set(t, e);
              } else this.headers.delete(t), this.normalizedNames.delete(t);
          }
        }
        forEach(e) {
          this.init(),
            Array.from(this.normalizedNames.keys()).forEach(t => e(this.normalizedNames.get(t), this.headers.get(t)));
        }
      }
      class p {
        encodeKey(e) {
          return f(e);
        }
        encodeValue(e) {
          return f(e);
        }
        decodeKey(e) {
          return decodeURIComponent(e);
        }
        decodeValue(e) {
          return decodeURIComponent(e);
        }
      }
      function f(e) {
        return encodeURIComponent(e)
          .replace(/%40/gi, '@')
          .replace(/%3A/gi, ':')
          .replace(/%24/gi, '$')
          .replace(/%2C/gi, ',')
          .replace(/%3B/gi, ';')
          .replace(/%2B/gi, '+')
          .replace(/%3D/gi, '=')
          .replace(/%3F/gi, '?')
          .replace(/%2F/gi, '/');
      }
      class g {
        constructor(e = {}) {
          if (((this.updates = null), (this.cloneFrom = null), (this.encoder = e.encoder || new p()), e.fromString)) {
            if (e.fromObject) throw new Error('Cannot specify both fromString and fromObject.');
            this.map = (function(e, t) {
              const n = new Map();
              return (
                e.length > 0 &&
                  e.split('&').forEach(e => {
                    const r = e.indexOf('='),
                      [s, i] =
                        -1 == r ? [t.decodeKey(e), ''] : [t.decodeKey(e.slice(0, r)), t.decodeValue(e.slice(r + 1))],
                      o = n.get(s) || [];
                    o.push(i), n.set(s, o);
                  }),
                n
              );
            })(e.fromString, this.encoder);
          } else
            e.fromObject
              ? ((this.map = new Map()),
                Object.keys(e.fromObject).forEach(t => {
                  const n = e.fromObject[t];
                  this.map.set(t, Array.isArray(n) ? n : [n]);
                }))
              : (this.map = null);
        }
        has(e) {
          return this.init(), this.map.has(e);
        }
        get(e) {
          this.init();
          const t = this.map.get(e);
          return t ? t[0] : null;
        }
        getAll(e) {
          return this.init(), this.map.get(e) || null;
        }
        keys() {
          return this.init(), Array.from(this.map.keys());
        }
        append(e, t) {
          return this.clone({ param: e, value: t, op: 'a' });
        }
        set(e, t) {
          return this.clone({ param: e, value: t, op: 's' });
        }
        delete(e, t) {
          return this.clone({ param: e, value: t, op: 'd' });
        }
        toString() {
          return (
            this.init(),
            this.keys()
              .map(e => {
                const t = this.encoder.encodeKey(e);
                return this.map
                  .get(e)
                  .map(e => t + '=' + this.encoder.encodeValue(e))
                  .join('&');
              })
              .join('&')
          );
        }
        clone(e) {
          const t = new g({ encoder: this.encoder });
          return (t.cloneFrom = this.cloneFrom || this), (t.updates = (this.updates || []).concat([e])), t;
        }
        init() {
          null === this.map && (this.map = new Map()),
            null !== this.cloneFrom &&
              (this.cloneFrom.init(),
              this.cloneFrom.keys().forEach(e => this.map.set(e, this.cloneFrom.map.get(e))),
              this.updates.forEach(e => {
                switch (e.op) {
                  case 'a':
                  case 's':
                    const t = ('a' === e.op ? this.map.get(e.param) : void 0) || [];
                    t.push(e.value), this.map.set(e.param, t);
                    break;
                  case 'd':
                    if (void 0 === e.value) {
                      this.map.delete(e.param);
                      break;
                    }
                    {
                      let t = this.map.get(e.param) || [];
                      const n = t.indexOf(e.value);
                      -1 !== n && t.splice(n, 1), t.length > 0 ? this.map.set(e.param, t) : this.map.delete(e.param);
                    }
                }
              }),
              (this.cloneFrom = this.updates = null));
        }
      }
      function m(e) {
        return 'undefined' != typeof ArrayBuffer && e instanceof ArrayBuffer;
      }
      function b(e) {
        return 'undefined' != typeof Blob && e instanceof Blob;
      }
      function y(e) {
        return 'undefined' != typeof FormData && e instanceof FormData;
      }
      class v {
        constructor(e, t, n, r) {
          let s;
          if (
            ((this.url = t),
            (this.body = null),
            (this.reportProgress = !1),
            (this.withCredentials = !1),
            (this.responseType = 'json'),
            (this.method = e.toUpperCase()),
            (function(e) {
              switch (e) {
                case 'DELETE':
                case 'GET':
                case 'HEAD':
                case 'OPTIONS':
                case 'JSONP':
                  return !1;
                default:
                  return !0;
              }
            })(this.method) || r
              ? ((this.body = void 0 !== n ? n : null), (s = r))
              : (s = n),
            s &&
              ((this.reportProgress = !!s.reportProgress),
              (this.withCredentials = !!s.withCredentials),
              s.responseType && (this.responseType = s.responseType),
              s.headers && (this.headers = s.headers),
              s.params && (this.params = s.params)),
            this.headers || (this.headers = new d()),
            this.params)
          ) {
            const e = this.params.toString();
            if (0 === e.length) this.urlWithParams = t;
            else {
              const n = t.indexOf('?');
              this.urlWithParams = t + (-1 === n ? '?' : n < t.length - 1 ? '&' : '') + e;
            }
          } else (this.params = new g()), (this.urlWithParams = t);
        }
        serializeBody() {
          return null === this.body
            ? null
            : m(this.body) || b(this.body) || y(this.body) || 'string' == typeof this.body
            ? this.body
            : this.body instanceof g
            ? this.body.toString()
            : 'object' == typeof this.body || 'boolean' == typeof this.body || Array.isArray(this.body)
            ? JSON.stringify(this.body)
            : this.body.toString();
        }
        detectContentTypeHeader() {
          return null === this.body || y(this.body)
            ? null
            : b(this.body)
            ? this.body.type || null
            : m(this.body)
            ? null
            : 'string' == typeof this.body
            ? 'text/plain'
            : this.body instanceof g
            ? 'application/x-www-form-urlencoded;charset=UTF-8'
            : 'object' == typeof this.body || 'number' == typeof this.body || Array.isArray(this.body)
            ? 'application/json'
            : null;
        }
        clone(e = {}) {
          const t = e.method || this.method,
            n = e.url || this.url,
            r = e.responseType || this.responseType,
            s = void 0 !== e.body ? e.body : this.body,
            i = void 0 !== e.withCredentials ? e.withCredentials : this.withCredentials,
            o = void 0 !== e.reportProgress ? e.reportProgress : this.reportProgress;
          let a = e.headers || this.headers,
            l = e.params || this.params;
          return (
            void 0 !== e.setHeaders && (a = Object.keys(e.setHeaders).reduce((t, n) => t.set(n, e.setHeaders[n]), a)),
            e.setParams && (l = Object.keys(e.setParams).reduce((t, n) => t.set(n, e.setParams[n]), l)),
            new v(t, n, s, { params: l, headers: a, reportProgress: o, responseType: r, withCredentials: i })
          );
        }
      }
      const w = (function() {
        var e = { Sent: 0, UploadProgress: 1, ResponseHeader: 2, DownloadProgress: 3, Response: 4, User: 5 };
        return (
          (e[e.Sent] = 'Sent'),
          (e[e.UploadProgress] = 'UploadProgress'),
          (e[e.ResponseHeader] = 'ResponseHeader'),
          (e[e.DownloadProgress] = 'DownloadProgress'),
          (e[e.Response] = 'Response'),
          (e[e.User] = 'User'),
          e
        );
      })();
      class _ {
        constructor(e, t = 200, n = 'OK') {
          (this.headers = e.headers || new d()),
            (this.status = void 0 !== e.status ? e.status : t),
            (this.statusText = e.statusText || n),
            (this.url = e.url || null),
            (this.ok = this.status >= 200 && this.status < 300);
        }
      }
      class C extends _ {
        constructor(e = {}) {
          super(e), (this.type = w.ResponseHeader);
        }
        clone(e = {}) {
          return new C({
            headers: e.headers || this.headers,
            status: void 0 !== e.status ? e.status : this.status,
            statusText: e.statusText || this.statusText,
            url: e.url || this.url || void 0
          });
        }
      }
      class x extends _ {
        constructor(e = {}) {
          super(e), (this.type = w.Response), (this.body = void 0 !== e.body ? e.body : null);
        }
        clone(e = {}) {
          return new x({
            body: void 0 !== e.body ? e.body : this.body,
            headers: e.headers || this.headers,
            status: void 0 !== e.status ? e.status : this.status,
            statusText: e.statusText || this.statusText,
            url: e.url || this.url || void 0
          });
        }
      }
      class S extends _ {
        constructor(e) {
          super(e, 0, 'Unknown Error'),
            (this.name = 'HttpErrorResponse'),
            (this.ok = !1),
            (this.message =
              this.status >= 200 && this.status < 300
                ? 'Http failure during parsing for ' + (e.url || '(unknown url)')
                : `Http failure response for ${e.url || '(unknown url)'}: ${e.status} ${e.statusText}`),
            (this.error = e.error || null);
        }
      }
      function E(e, t) {
        return {
          body: t,
          headers: e.headers,
          observe: e.observe,
          params: e.params,
          reportProgress: e.reportProgress,
          responseType: e.responseType,
          withCredentials: e.withCredentials
        };
      }
      let O = (() =>
        class {
          constructor(e) {
            this.handler = e;
          }
          request(e, t, n = {}) {
            let r;
            if (e instanceof v) r = e;
            else {
              let s = void 0;
              s = n.headers instanceof d ? n.headers : new d(n.headers);
              let i = void 0;
              n.params && (i = n.params instanceof g ? n.params : new g({ fromObject: n.params })),
                (r = new v(e, t, void 0 !== n.body ? n.body : null, {
                  headers: s,
                  params: i,
                  reportProgress: n.reportProgress,
                  responseType: n.responseType || 'json',
                  withCredentials: n.withCredentials
                }));
            }
            const i = Object(s.a)(r).pipe(Object(o.a)(e => this.handler.handle(e)));
            if (e instanceof v || 'events' === n.observe) return i;
            const u = i.pipe(Object(a.a)(e => e instanceof x));
            switch (n.observe || 'body') {
              case 'body':
                switch (r.responseType) {
                  case 'arraybuffer':
                    return u.pipe(
                      Object(l.a)(e => {
                        if (null !== e.body && !(e.body instanceof ArrayBuffer))
                          throw new Error('Response is not an ArrayBuffer.');
                        return e.body;
                      })
                    );
                  case 'blob':
                    return u.pipe(
                      Object(l.a)(e => {
                        if (null !== e.body && !(e.body instanceof Blob)) throw new Error('Response is not a Blob.');
                        return e.body;
                      })
                    );
                  case 'text':
                    return u.pipe(
                      Object(l.a)(e => {
                        if (null !== e.body && 'string' != typeof e.body) throw new Error('Response is not a string.');
                        return e.body;
                      })
                    );
                  case 'json':
                  default:
                    return u.pipe(Object(l.a)(e => e.body));
                }
              case 'response':
                return u;
              default:
                throw new Error(`Unreachable: unhandled observe type ${n.observe}}`);
            }
          }
          delete(e, t = {}) {
            return this.request('DELETE', e, t);
          }
          get(e, t = {}) {
            return this.request('GET', e, t);
          }
          head(e, t = {}) {
            return this.request('HEAD', e, t);
          }
          jsonp(e, t) {
            return this.request('JSONP', e, {
              params: new g().append(t, 'JSONP_CALLBACK'),
              observe: 'body',
              responseType: 'json'
            });
          }
          options(e, t = {}) {
            return this.request('OPTIONS', e, t);
          }
          patch(e, t, n = {}) {
            return this.request('PATCH', e, E(n, t));
          }
          post(e, t, n = {}) {
            return this.request('POST', e, E(n, t));
          }
          put(e, t, n = {}) {
            return this.request('PUT', e, E(n, t));
          }
        })();
      class k {
        constructor(e, t) {
          (this.next = e), (this.interceptor = t);
        }
        handle(e) {
          return this.interceptor.intercept(e, this.next);
        }
      }
      const D = new r.p('HTTP_INTERCEPTORS');
      let T = (() =>
        class {
          intercept(e, t) {
            return t.handle(e);
          }
        })();
      const A = /^\)\]\}',?\n/;
      class I {}
      let j = (() =>
          class {
            constructor() {}
            build() {
              return new XMLHttpRequest();
            }
          })(),
        N = (() =>
          class {
            constructor(e) {
              this.xhrFactory = e;
            }
            handle(e) {
              if ('JSONP' === e.method)
                throw new Error('Attempted to construct Jsonp request without JsonpClientModule installed.');
              return new i.a(t => {
                const n = this.xhrFactory.build();
                if (
                  (n.open(e.method, e.urlWithParams),
                  e.withCredentials && (n.withCredentials = !0),
                  e.headers.forEach((e, t) => n.setRequestHeader(e, t.join(','))),
                  e.headers.has('Accept') || n.setRequestHeader('Accept', 'application/json, text/plain, */*'),
                  !e.headers.has('Content-Type'))
                ) {
                  const t = e.detectContentTypeHeader();
                  null !== t && n.setRequestHeader('Content-Type', t);
                }
                if (e.responseType) {
                  const t = e.responseType.toLowerCase();
                  n.responseType = 'json' !== t ? t : 'text';
                }
                const r = e.serializeBody();
                let s = null;
                const i = () => {
                    if (null !== s) return s;
                    const t = 1223 === n.status ? 204 : n.status,
                      r = n.statusText || 'OK',
                      i = new d(n.getAllResponseHeaders()),
                      o =
                        (function(e) {
                          return 'responseURL' in e && e.responseURL
                            ? e.responseURL
                            : /^X-Request-URL:/m.test(e.getAllResponseHeaders())
                            ? e.getResponseHeader('X-Request-URL')
                            : null;
                        })(n) || e.url;
                    return (s = new C({ headers: i, status: t, statusText: r, url: o })), s;
                  },
                  o = () => {
                    let { headers: r, status: s, statusText: o, url: a } = i(),
                      l = null;
                    204 !== s && (l = void 0 === n.response ? n.responseText : n.response),
                      0 === s && (s = l ? 200 : 0);
                    let u = s >= 200 && s < 300;
                    if ('json' === e.responseType && 'string' == typeof l) {
                      const e = l;
                      l = l.replace(A, '');
                      try {
                        l = '' !== l ? JSON.parse(l) : null;
                      } catch (c) {
                        (l = e), u && ((u = !1), (l = { error: c, text: l }));
                      }
                    }
                    u
                      ? (t.next(new x({ body: l, headers: r, status: s, statusText: o, url: a || void 0 })),
                        t.complete())
                      : t.error(new S({ error: l, headers: r, status: s, statusText: o, url: a || void 0 }));
                  },
                  a = e => {
                    const { url: r } = i(),
                      s = new S({
                        error: e,
                        status: n.status || 0,
                        statusText: n.statusText || 'Unknown Error',
                        url: r || void 0
                      });
                    t.error(s);
                  };
                let l = !1;
                const u = r => {
                    l || (t.next(i()), (l = !0));
                    let s = { type: w.DownloadProgress, loaded: r.loaded };
                    r.lengthComputable && (s.total = r.total),
                      'text' === e.responseType && n.responseText && (s.partialText = n.responseText),
                      t.next(s);
                  },
                  c = e => {
                    let n = { type: w.UploadProgress, loaded: e.loaded };
                    e.lengthComputable && (n.total = e.total), t.next(n);
                  };
                return (
                  n.addEventListener('load', o),
                  n.addEventListener('error', a),
                  e.reportProgress &&
                    (n.addEventListener('progress', u),
                    null !== r && n.upload && n.upload.addEventListener('progress', c)),
                  n.send(r),
                  t.next({ type: w.Sent }),
                  () => {
                    n.removeEventListener('error', a),
                      n.removeEventListener('load', o),
                      e.reportProgress &&
                        (n.removeEventListener('progress', u),
                        null !== r && n.upload && n.upload.removeEventListener('progress', c)),
                      n.abort();
                  }
                );
              });
            }
          })();
      const R = new r.p('XSRF_COOKIE_NAME'),
        P = new r.p('XSRF_HEADER_NAME');
      class M {}
      let L = (() =>
          class {
            constructor(e, t, n) {
              (this.doc = e),
                (this.platform = t),
                (this.cookieName = n),
                (this.lastCookieString = ''),
                (this.lastToken = null),
                (this.parseCount = 0);
            }
            getToken() {
              if ('server' === this.platform) return null;
              const e = this.doc.cookie || '';
              return (
                e !== this.lastCookieString &&
                  (this.parseCount++, (this.lastToken = Object(u.z)(e, this.cookieName)), (this.lastCookieString = e)),
                this.lastToken
              );
            }
          })(),
        H = (() =>
          class {
            constructor(e, t) {
              (this.tokenService = e), (this.headerName = t);
            }
            intercept(e, t) {
              const n = e.url.toLowerCase();
              if ('GET' === e.method || 'HEAD' === e.method || n.startsWith('http://') || n.startsWith('https://'))
                return t.handle(e);
              const r = this.tokenService.getToken();
              return (
                null === r ||
                  e.headers.has(this.headerName) ||
                  (e = e.clone({ headers: e.headers.set(this.headerName, r) })),
                t.handle(e)
              );
            }
          })(),
        F = (() =>
          class {
            constructor(e, t) {
              (this.backend = e), (this.injector = t), (this.chain = null);
            }
            handle(e) {
              if (null === this.chain) {
                const e = this.injector.get(D, []);
                this.chain = e.reduceRight((e, t) => new k(e, t), this.backend);
              }
              return this.chain.handle(e);
            }
          })(),
        U = (() => {
          class e {
            static disable() {
              return { ngModule: e, providers: [{ provide: H, useClass: T }] };
            }
            static withOptions(t = {}) {
              return {
                ngModule: e,
                providers: [
                  t.cookieName ? { provide: R, useValue: t.cookieName } : [],
                  t.headerName ? { provide: P, useValue: t.headerName } : []
                ]
              };
            }
          }
          return e;
        })(),
        V = (() => class {})();
    },
    IzEk: function(e, t, n) {
      'use strict';
      n.d(t, 'a', function() {
        return o;
      });
      var r = n('7o/Q'),
        s = n('4I5i'),
        i = n('EY2u');
      function o(e) {
        return t => (0 === e ? Object(i.b)() : t.lift(new a(e)));
      }
      class a {
        constructor(e) {
          if (((this.total = e), this.total < 0)) throw new s.a();
        }
        call(e, t) {
          return t.subscribe(new l(e, this.total));
        }
      }
      class l extends r.a {
        constructor(e, t) {
          super(e), (this.total = t), (this.count = 0);
        }
        _next(e) {
          const t = this.total,
            n = ++this.count;
          n <= t && (this.destination.next(e), n === t && (this.destination.complete(), this.unsubscribe()));
        }
      }
    },
    'J6E/': function(e, t, n) {
      'use strict';
      n.d(t, 'a', function() {
        return l;
      });
      var r = n('JIr8'),
        s = n('AytR'),
        i = n('fSl4'),
        o = n('8Y7J');
      const a = new i.a('ErrorHandlerInterceptor');
      let l = (() => {
        class e {
          intercept(e, t) {
            return t.handle(e).pipe(Object(r.a)(e => this.errorHandler(e)));
          }
          errorHandler(e) {
            throw (s.a.production || a.error('Request error', e), e);
          }
        }
        return (
          (e.ngInjectableDef = o.Mb({
            factory: function() {
              return new e();
            },
            token: e,
            providedIn: 'root'
          })),
          e
        );
      })();
    },
    JIr8: function(e, t, n) {
      'use strict';
      n.d(t, 'a', function() {
        return o;
      });
      var r = n('l7GE'),
        s = n('51Dv'),
        i = n('ZUHj');
      function o(e) {
        return function(t) {
          const n = new a(e),
            r = t.lift(n);
          return (n.caught = r);
        };
      }
      class a {
        constructor(e) {
          this.selector = e;
        }
        call(e, t) {
          return t.subscribe(new l(e, this.selector, this.caught));
        }
      }
      class l extends r.a {
        constructor(e, t, n) {
          super(e), (this.selector = t), (this.caught = n);
        }
        error(e) {
          if (!this.isStopped) {
            let n;
            try {
              n = this.selector(e, this.caught);
            } catch (t) {
              return void super.error(t);
            }
            this._unsubscribeAndRecycle();
            const r = new s.a(this, void 0, void 0);
            this.add(r);
            const o = Object(i.a)(this, n, void 0, void 0, r);
            o !== r && this.add(o);
          }
        }
      }
    },
    JX91: function(e, t, n) {
      'use strict';
      n.d(t, 'a', function() {
        return i;
      });
      var r = n('GyhO'),
        s = n('z+Ro');
      function i(...e) {
        const t = e[e.length - 1];
        return Object(s.a)(t) ? (e.pop(), n => Object(r.a)(e, n, t)) : t => Object(r.a)(e, t);
      }
    },
    Kqap: function(e, t, n) {
      'use strict';
      n.d(t, 'a', function() {
        return s;
      });
      var r = n('7o/Q');
      function s(e, t) {
        let n = !1;
        return (
          arguments.length >= 2 && (n = !0),
          function(r) {
            return r.lift(new i(e, t, n));
          }
        );
      }
      class i {
        constructor(e, t, n = !1) {
          (this.accumulator = e), (this.seed = t), (this.hasSeed = n);
        }
        call(e, t) {
          return t.subscribe(new o(e, this.accumulator, this.seed, this.hasSeed));
        }
      }
      class o extends r.a {
        constructor(e, t, n, r) {
          super(e), (this.accumulator = t), (this._seed = n), (this.hasSeed = r), (this.index = 0);
        }
        get seed() {
          return this._seed;
        }
        set seed(e) {
          (this.hasSeed = !0), (this._seed = e);
        }
        _next(e) {
          if (this.hasSeed) return this._tryNext(e);
          (this.seed = e), this.destination.next(e);
        }
        _tryNext(e) {
          const t = this.index++;
          let n;
          try {
            n = this.accumulator(this.seed, e, t);
          } catch (r) {
            this.destination.error(r);
          }
          (this.seed = n), this.destination.next(n);
        }
      }
    },
    KqfI: function(e, t, n) {
      'use strict';
      function r() {}
      n.d(t, 'a', function() {
        return r;
      });
    },
    LRne: function(e, t, n) {
      'use strict';
      n.d(t, 'a', function() {
        return o;
      });
      var r = n('z+Ro'),
        s = n('yCtX'),
        i = n('jZKg');
      function o(...e) {
        let t = e[e.length - 1];
        return Object(r.a)(t) ? (e.pop(), Object(i.a)(e, t)) : Object(s.a)(e);
      }
    },
    LbVS: function(e, t, n) {
      'use strict';
      function r(e) {
        return e;
      }
      function s() {
        var e = document.querySelectorAll('input');
        return Array.prototype.slice.call(e).map(function(e) {
          return e.value;
        });
      }
      function i(e) {
        var t = document.querySelectorAll('input');
        e &&
          t.length === e.length &&
          (e.forEach(function(e, n) {
            var r = t[n];
            (r.value = e), r.dispatchEvent(new CustomEvent('input', { detail: r.value }));
          }),
          (e.length = 0));
      }
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.bootloader = function(e, t, n) {
          'object' == typeof e && ((t = e.before), (n = e.after), (e = e.main)), (t = t || r), (n = n || r);
          var s = document.readyState;
          switch (s) {
            case 'loading':
              document.addEventListener('DOMContentLoaded', function r() {
                document.removeEventListener('DOMContentLoaded', r), n(e(t(s)));
              });
              break;
            case 'interactive':
            case 'complete':
            default:
              n(e(t(s)));
          }
        }),
        (t.createNewHosts = function(e) {
          var t = Array.prototype.map.call(e, function(e) {
            var t = document.createElement(e.tagName),
              n = e.parentNode,
              r = t.style.display;
            return (
              (t.style.display = 'none'),
              n.insertBefore(t, e),
              function() {
                t.style.display = r;
                try {
                  n.removeChild(e);
                } catch (s) {}
              }
            );
          });
          return function() {
            t.forEach(function(e) {
              return e();
            });
          };
        }),
        (t.removeNgStyles = function() {
          var e = document.head,
            t = e.querySelectorAll('style');
          Array.prototype.slice
            .call(t)
            .filter(function(e) {
              return -1 !== e.innerText.indexOf('_ng');
            })
            .map(function(t) {
              return e.removeChild(t);
            });
        }),
        (t.getInputValues = s),
        (t.setInputValues = i),
        (t.createInputTransfer = function() {
          var e = s();
          return function() {
            return i(e);
          };
        });
    },
    Lhse: function(e, t, n) {
      'use strict';
      function r() {
        return 'function' == typeof Symbol && Symbol.iterator ? Symbol.iterator : '@@iterator';
      }
      n.d(t, 'a', function() {
        return s;
      });
      const s = r();
    },
    Lo2u: function(e, t, n) {
      'use strict';
      n.d(t, 'a', function() {
        return a;
      });
      var r = n('IheW'),
        s = n('HDdC'),
        i = n('dXti'),
        o = n('8Y7J');
      let a = (() => {
        class e {
          constructor(e) {
            (this.httpCacheService = e), (this.forceUpdate = !1);
          }
          configure(t) {
            const n = new e(this.httpCacheService);
            return t && t.update && (n.forceUpdate = !0), n;
          }
          intercept(e, t) {
            return 'GET' !== e.method
              ? t.handle(e)
              : new s.a(n => {
                  const s = this.forceUpdate ? null : this.httpCacheService.getCacheData(e.urlWithParams);
                  null !== s
                    ? (n.next(new r.g(s)), n.complete())
                    : t.handle(e).subscribe(
                        t => {
                          t instanceof r.g && this.httpCacheService.setCacheData(e.urlWithParams, t), n.next(t);
                        },
                        e => n.error(e),
                        () => n.complete()
                      );
                });
          }
        }
        return (
          (e.ngInjectableDef = o.Mb({
            factory: function() {
              return new e(o.Nb(i.a));
            },
            token: e,
            providedIn: 'root'
          })),
          e
        );
      })();
    },
    NJ4a: function(e, t, n) {
      'use strict';
      function r(e) {
        setTimeout(() => {
          throw e;
        }, 0);
      }
      n.d(t, 'a', function() {
        return r;
      });
    },
    NXyV: function(e, t, n) {
      'use strict';
      n.d(t, 'a', function() {
        return o;
      });
      var r = n('HDdC'),
        s = n('Cfvw'),
        i = n('EY2u');
      function o(e) {
        return new r.a(t => {
          let n;
          try {
            n = e();
          } catch (r) {
            return void t.error(r);
          }
          return (n ? Object(s.a)(n) : Object(i.b)()).subscribe(t);
        });
      }
    },
    PsNa: function(e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.MODULE_CONFIG = {
          OnInit: 'hmrOnInit',
          OnStatus: 'hmrOnStatus',
          OnCheck: 'hmrOnCheck',
          OnDecline: 'hmrOnDecline',
          OnDestroy: 'hmrOnDestroy',
          AfterDestroy: 'hmrAfterDestroy'
        }),
        (t.hmrModule = function(e, n, r) {
          return (
            void 0 === r && (r = t.MODULE_CONFIG),
            n.hot &&
              (n.hot.accept(),
              e.instance[t.MODULE_CONFIG.OnInit] && n.hot.data && e.instance[t.MODULE_CONFIG.OnInit](n.hot.data),
              e.instance[t.MODULE_CONFIG.OnStatus] &&
                n.hot.apply(function(n) {
                  e.instance[t.MODULE_CONFIG.OnStatus](n);
                }),
              e.instance[t.MODULE_CONFIG.OnCheck] &&
                n.hot.check(function(n, r) {
                  e.instance[t.MODULE_CONFIG.OnCheck](n, r);
                }),
              e.instance[t.MODULE_CONFIG.OnDecline] &&
                n.hot.decline(function(n) {
                  e.instance[t.MODULE_CONFIG.OnDecline](n);
                }),
              n.hot.dispose(function(n) {
                e.instance[t.MODULE_CONFIG.OnDestroy] && e.instance[t.MODULE_CONFIG.OnDestroy](n),
                  e.destroy(),
                  e.instance[t.MODULE_CONFIG.AfterDestroy] && e.instance[t.MODULE_CONFIG.AfterDestroy](n);
              })),
            e
          );
        });
    },
    SVse: function(e, t, n) {
      'use strict';
      n.d(t, 'y', function() {
        return z;
      }),
        n.d(t, 'r', function() {
          return R;
        }),
        n.d(t, 'k', function() {
          return W;
        }),
        n.d(t, 'l', function() {
          return B;
        }),
        n.d(t, 'd', function() {
          return p;
        }),
        n.d(t, 'p', function() {
          return f;
        }),
        n.d(t, 't', function() {
          return b;
        }),
        n.d(t, 's', function() {
          return y;
        }),
        n.d(t, 'u', function() {
          return v;
        }),
        n.d(t, 'z', function() {
          return G;
        }),
        n.d(t, 'b', function() {
          return te;
        }),
        n.d(t, 'i', function() {
          return K;
        }),
        n.d(t, 'j', function() {
          return Y;
        }),
        n.d(t, 'm', function() {
          return ee;
        }),
        n.d(t, 'c', function() {
          return ne;
        }),
        n.d(t, 'x', function() {
          return re;
        }),
        n.d(t, 'v', function() {
          return se;
        }),
        n.d(t, 'w', function() {
          return ie;
        }),
        n.d(t, 'q', function() {
          return oe;
        }),
        n.d(t, 'o', function() {
          return s;
        }),
        n.d(t, 'f', function() {
          return i;
        }),
        n.d(t, 'h', function() {
          return o;
        }),
        n.d(t, 'a', function() {
          return a;
        }),
        n.d(t, 'e', function() {
          return c;
        }),
        n.d(t, 'n', function() {
          return h;
        }),
        n.d(t, 'g', function() {
          return l;
        });
      var r = n('8Y7J');
      class s {}
      const i = new r.p('Location Initialized');
      class o {}
      const a = new r.p('appBaseHref');
      let l = (() => {
        class e {
          constructor(t, n) {
            (this._subject = new r.m()), (this._urlChangeListeners = []), (this._platformStrategy = t);
            const s = this._platformStrategy.getBaseHref();
            (this._platformLocation = n),
              (this._baseHref = e.stripTrailingSlash(u(s))),
              this._platformStrategy.onPopState(e => {
                this._subject.emit({ url: this.path(!0), pop: !0, state: e.state, type: e.type });
              });
          }
          path(e = !1) {
            return this.normalize(this._platformStrategy.path(e));
          }
          getState() {
            return this._platformLocation.getState();
          }
          isCurrentPathEqualTo(t, n = '') {
            return this.path() == this.normalize(t + e.normalizeQueryParams(n));
          }
          normalize(t) {
            return e.stripTrailingSlash(
              (function(e, t) {
                return e && t.startsWith(e) ? t.substring(e.length) : t;
              })(this._baseHref, u(t))
            );
          }
          prepareExternalUrl(e) {
            return e && '/' !== e[0] && (e = '/' + e), this._platformStrategy.prepareExternalUrl(e);
          }
          go(t, n = '', r = null) {
            this._platformStrategy.pushState(r, '', t, n),
              this._notifyUrlChangeListeners(this.prepareExternalUrl(t + e.normalizeQueryParams(n)), r);
          }
          replaceState(t, n = '', r = null) {
            this._platformStrategy.replaceState(r, '', t, n),
              this._notifyUrlChangeListeners(this.prepareExternalUrl(t + e.normalizeQueryParams(n)), r);
          }
          forward() {
            this._platformStrategy.forward();
          }
          back() {
            this._platformStrategy.back();
          }
          onUrlChange(e) {
            this._urlChangeListeners.push(e),
              this.subscribe(e => {
                this._notifyUrlChangeListeners(e.url, e.state);
              });
          }
          _notifyUrlChangeListeners(e = '', t) {
            this._urlChangeListeners.forEach(n => n(e, t));
          }
          subscribe(e, t, n) {
            return this._subject.subscribe({ next: e, error: t, complete: n });
          }
          static normalizeQueryParams(e) {
            return e && '?' !== e[0] ? '?' + e : e;
          }
          static joinWithSlash(e, t) {
            if (0 == e.length) return t;
            if (0 == t.length) return e;
            let n = 0;
            return (
              e.endsWith('/') && n++,
              t.startsWith('/') && n++,
              2 == n ? e + t.substring(1) : 1 == n ? e + t : e + '/' + t
            );
          }
          static stripTrailingSlash(e) {
            const t = e.match(/#|\?|$/),
              n = (t && t.index) || e.length;
            return e.slice(0, n - ('/' === e[n - 1] ? 1 : 0)) + e.slice(n);
          }
        }
        return e;
      })();
      function u(e) {
        return e.replace(/\/index.html$/, '');
      }
      let c = (() =>
          class extends o {
            constructor(e, t) {
              super(), (this._platformLocation = e), (this._baseHref = ''), null != t && (this._baseHref = t);
            }
            onPopState(e) {
              this._platformLocation.onPopState(e), this._platformLocation.onHashChange(e);
            }
            getBaseHref() {
              return this._baseHref;
            }
            path(e = !1) {
              let t = this._platformLocation.hash;
              return null == t && (t = '#'), t.length > 0 ? t.substring(1) : t;
            }
            prepareExternalUrl(e) {
              const t = l.joinWithSlash(this._baseHref, e);
              return t.length > 0 ? '#' + t : t;
            }
            pushState(e, t, n, r) {
              let s = this.prepareExternalUrl(n + l.normalizeQueryParams(r));
              0 == s.length && (s = this._platformLocation.pathname), this._platformLocation.pushState(e, t, s);
            }
            replaceState(e, t, n, r) {
              let s = this.prepareExternalUrl(n + l.normalizeQueryParams(r));
              0 == s.length && (s = this._platformLocation.pathname), this._platformLocation.replaceState(e, t, s);
            }
            forward() {
              this._platformLocation.forward();
            }
            back() {
              this._platformLocation.back();
            }
          })(),
        h = (() =>
          class extends o {
            constructor(e, t) {
              if (
                (super(),
                (this._platformLocation = e),
                null == t && (t = this._platformLocation.getBaseHrefFromDOM()),
                null == t)
              )
                throw new Error(
                  'No base href set. Please provide a value for the APP_BASE_HREF token or add a base element to the document.'
                );
              this._baseHref = t;
            }
            onPopState(e) {
              this._platformLocation.onPopState(e), this._platformLocation.onHashChange(e);
            }
            getBaseHref() {
              return this._baseHref;
            }
            prepareExternalUrl(e) {
              return l.joinWithSlash(this._baseHref, e);
            }
            path(e = !1) {
              const t = this._platformLocation.pathname + l.normalizeQueryParams(this._platformLocation.search),
                n = this._platformLocation.hash;
              return n && e ? `${t}${n}` : t;
            }
            pushState(e, t, n, r) {
              const s = this.prepareExternalUrl(n + l.normalizeQueryParams(r));
              this._platformLocation.pushState(e, t, s);
            }
            replaceState(e, t, n, r) {
              const s = this.prepareExternalUrl(n + l.normalizeQueryParams(r));
              this._platformLocation.replaceState(e, t, s);
            }
            forward() {
              this._platformLocation.forward();
            }
            back() {
              this._platformLocation.back();
            }
          })();
      const d = (function() {
          var e = { Zero: 0, One: 1, Two: 2, Few: 3, Many: 4, Other: 5 };
          return (
            (e[e.Zero] = 'Zero'),
            (e[e.One] = 'One'),
            (e[e.Two] = 'Two'),
            (e[e.Few] = 'Few'),
            (e[e.Many] = 'Many'),
            (e[e.Other] = 'Other'),
            e
          );
        })(),
        p = (function() {
          var e = { Format: 0, Standalone: 1 };
          return (e[e.Format] = 'Format'), (e[e.Standalone] = 'Standalone'), e;
        })(),
        f = (function() {
          var e = { Narrow: 0, Abbreviated: 1, Wide: 2, Short: 3 };
          return (
            (e[e.Narrow] = 'Narrow'),
            (e[e.Abbreviated] = 'Abbreviated'),
            (e[e.Wide] = 'Wide'),
            (e[e.Short] = 'Short'),
            e
          );
        })(),
        g = (function() {
          var e = { Short: 0, Medium: 1, Long: 2, Full: 3 };
          return (e[e.Short] = 'Short'), (e[e.Medium] = 'Medium'), (e[e.Long] = 'Long'), (e[e.Full] = 'Full'), e;
        })(),
        m = (function() {
          var e = {
            Decimal: 0,
            Group: 1,
            List: 2,
            PercentSign: 3,
            PlusSign: 4,
            MinusSign: 5,
            Exponential: 6,
            SuperscriptingExponent: 7,
            PerMille: 8,
            Infinity: 9,
            NaN: 10,
            TimeSeparator: 11,
            CurrencyDecimal: 12,
            CurrencyGroup: 13
          };
          return (
            (e[e.Decimal] = 'Decimal'),
            (e[e.Group] = 'Group'),
            (e[e.List] = 'List'),
            (e[e.PercentSign] = 'PercentSign'),
            (e[e.PlusSign] = 'PlusSign'),
            (e[e.MinusSign] = 'MinusSign'),
            (e[e.Exponential] = 'Exponential'),
            (e[e.SuperscriptingExponent] = 'SuperscriptingExponent'),
            (e[e.PerMille] = 'PerMille'),
            (e[e.Infinity] = 'Infinity'),
            (e[e.NaN] = 'NaN'),
            (e[e.TimeSeparator] = 'TimeSeparator'),
            (e[e.CurrencyDecimal] = 'CurrencyDecimal'),
            (e[e.CurrencyGroup] = 'CurrencyGroup'),
            e
          );
        })();
      function b(e, t, n) {
        const s = Object(r.rb)(e),
          i = O([s[r.bb.DayPeriodsFormat], s[r.bb.DayPeriodsStandalone]], t);
        return O(i, n);
      }
      function y(e, t, n) {
        const s = Object(r.rb)(e),
          i = O([s[r.bb.DaysFormat], s[r.bb.DaysStandalone]], t);
        return O(i, n);
      }
      function v(e, t, n) {
        const s = Object(r.rb)(e),
          i = O([s[r.bb.MonthsFormat], s[r.bb.MonthsStandalone]], t);
        return O(i, n);
      }
      function w(e, t) {
        return O(Object(r.rb)(e)[r.bb.DateFormat], t);
      }
      function _(e, t) {
        return O(Object(r.rb)(e)[r.bb.TimeFormat], t);
      }
      function C(e, t) {
        return O(Object(r.rb)(e)[r.bb.DateTimeFormat], t);
      }
      function x(e, t) {
        const n = Object(r.rb)(e),
          s = n[r.bb.NumberSymbols][t];
        if (void 0 === s) {
          if (t === m.CurrencyDecimal) return n[r.bb.NumberSymbols][m.Decimal];
          if (t === m.CurrencyGroup) return n[r.bb.NumberSymbols][m.Group];
        }
        return s;
      }
      const S = r.sb;
      function E(e) {
        if (!e[r.bb.ExtraData])
          throw new Error(
            `Missing extra locale data for the locale "${
              e[r.bb.LocaleId]
            }". Use "registerLocaleData" to load new data. See the "I18n guide" on angular.io to know more.`
          );
      }
      function O(e, t) {
        for (let n = t; n > -1; n--) if (void 0 !== e[n]) return e[n];
        throw new Error('Locale data API: locale data undefined');
      }
      function k(e) {
        const [t, n] = e.split(':');
        return { hours: +t, minutes: +n };
      }
      const D = /^(\d{4})-?(\d\d)-?(\d\d)(?:T(\d\d)(?::?(\d\d)(?::?(\d\d)(?:\.(\d+))?)?)?(Z|([+-])(\d\d):?(\d\d))?)?$/,
        T = {},
        A = /((?:[^GyMLwWdEabBhHmsSzZO']+)|(?:'(?:[^']|'')*')|(?:G{1,5}|y{1,4}|M{1,5}|L{1,5}|w{1,2}|W{1}|d{1,2}|E{1,6}|a{1,5}|b{1,5}|B{1,5}|h{1,2}|H{1,2}|m{1,2}|s{1,2}|S{1,3}|z{1,4}|Z{1,5}|O{1,4}))([\s\S]*)/,
        I = (function() {
          var e = { Short: 0, ShortGMT: 1, Long: 2, Extended: 3 };
          return (
            (e[e.Short] = 'Short'), (e[e.ShortGMT] = 'ShortGMT'), (e[e.Long] = 'Long'), (e[e.Extended] = 'Extended'), e
          );
        })(),
        j = (function() {
          var e = { FullYear: 0, Month: 1, Date: 2, Hours: 3, Minutes: 4, Seconds: 5, FractionalSeconds: 6, Day: 7 };
          return (
            (e[e.FullYear] = 'FullYear'),
            (e[e.Month] = 'Month'),
            (e[e.Date] = 'Date'),
            (e[e.Hours] = 'Hours'),
            (e[e.Minutes] = 'Minutes'),
            (e[e.Seconds] = 'Seconds'),
            (e[e.FractionalSeconds] = 'FractionalSeconds'),
            (e[e.Day] = 'Day'),
            e
          );
        })(),
        N = (function() {
          var e = { DayPeriods: 0, Days: 1, Months: 2, Eras: 3 };
          return (
            (e[e.DayPeriods] = 'DayPeriods'), (e[e.Days] = 'Days'), (e[e.Months] = 'Months'), (e[e.Eras] = 'Eras'), e
          );
        })();
      function R(e, t, n, s) {
        let i = (function(e) {
          if ($(e)) return e;
          if ('number' == typeof e && !isNaN(e)) return new Date(e);
          if ('string' == typeof e) {
            e = e.trim();
            const t = parseFloat(e);
            if (!isNaN(e - t)) return new Date(t);
            if (/^(\d{4}-\d{1,2}-\d{1,2})$/.test(e)) {
              const [t, n, r] = e.split('-').map(e => +e);
              return new Date(t, n - 1, r);
            }
            let n;
            if ((n = e.match(D)))
              return (function(e) {
                const t = new Date(0);
                let n = 0,
                  r = 0;
                const s = e[8] ? t.setUTCFullYear : t.setFullYear,
                  i = e[8] ? t.setUTCHours : t.setHours;
                e[9] && ((n = Number(e[9] + e[10])), (r = Number(e[9] + e[11]))),
                  s.call(t, Number(e[1]), Number(e[2]) - 1, Number(e[3]));
                const o = Number(e[4] || 0) - n,
                  a = Number(e[5] || 0) - r,
                  l = Number(e[6] || 0),
                  u = Math.round(1e3 * parseFloat('0.' + (e[7] || 0)));
                return i.call(t, o, a, l, u), t;
              })(n);
          }
          const t = new Date(e);
          if (!$(t)) throw new Error(`Unable to convert "${e}" into a date`);
          return t;
        })(e);
        t =
          (function e(t, n) {
            const s = (function(e) {
              return Object(r.rb)(e)[r.bb.LocaleId];
            })(t);
            if (((T[s] = T[s] || {}), T[s][n])) return T[s][n];
            let i = '';
            switch (n) {
              case 'shortDate':
                i = w(t, g.Short);
                break;
              case 'mediumDate':
                i = w(t, g.Medium);
                break;
              case 'longDate':
                i = w(t, g.Long);
                break;
              case 'fullDate':
                i = w(t, g.Full);
                break;
              case 'shortTime':
                i = _(t, g.Short);
                break;
              case 'mediumTime':
                i = _(t, g.Medium);
                break;
              case 'longTime':
                i = _(t, g.Long);
                break;
              case 'fullTime':
                i = _(t, g.Full);
                break;
              case 'short':
                const n = e(t, 'shortTime'),
                  r = e(t, 'shortDate');
                i = P(C(t, g.Short), [n, r]);
                break;
              case 'medium':
                const s = e(t, 'mediumTime'),
                  o = e(t, 'mediumDate');
                i = P(C(t, g.Medium), [s, o]);
                break;
              case 'long':
                const a = e(t, 'longTime'),
                  l = e(t, 'longDate');
                i = P(C(t, g.Long), [a, l]);
                break;
              case 'full':
                const u = e(t, 'fullTime'),
                  c = e(t, 'fullDate');
                i = P(C(t, g.Full), [u, c]);
            }
            return i && (T[s][n] = i), i;
          })(n, t) || t;
        let o,
          a = [];
        for (; t; ) {
          if (((o = A.exec(t)), !o)) {
            a.push(t);
            break;
          }
          {
            a = a.concat(o.slice(1));
            const e = a.pop();
            if (!e) break;
            t = e;
          }
        }
        let l = i.getTimezoneOffset();
        s &&
          ((l = q(s, l)),
          (i = (function(e, t, n) {
            const r = e.getTimezoneOffset();
            return (function(e, t) {
              return (e = new Date(e.getTime())).setMinutes(e.getMinutes() + t), e;
            })(e, -1 * (q(t, r) - r));
          })(i, s)));
        let u = '';
        return (
          a.forEach(e => {
            const t = (function(e) {
              if (V[e]) return V[e];
              let t;
              switch (e) {
                case 'G':
                case 'GG':
                case 'GGG':
                  t = H(N.Eras, f.Abbreviated);
                  break;
                case 'GGGG':
                  t = H(N.Eras, f.Wide);
                  break;
                case 'GGGGG':
                  t = H(N.Eras, f.Narrow);
                  break;
                case 'y':
                  t = L(j.FullYear, 1, 0, !1, !0);
                  break;
                case 'yy':
                  t = L(j.FullYear, 2, 0, !0, !0);
                  break;
                case 'yyy':
                  t = L(j.FullYear, 3, 0, !1, !0);
                  break;
                case 'yyyy':
                  t = L(j.FullYear, 4, 0, !1, !0);
                  break;
                case 'M':
                case 'L':
                  t = L(j.Month, 1, 1);
                  break;
                case 'MM':
                case 'LL':
                  t = L(j.Month, 2, 1);
                  break;
                case 'MMM':
                  t = H(N.Months, f.Abbreviated);
                  break;
                case 'MMMM':
                  t = H(N.Months, f.Wide);
                  break;
                case 'MMMMM':
                  t = H(N.Months, f.Narrow);
                  break;
                case 'LLL':
                  t = H(N.Months, f.Abbreviated, p.Standalone);
                  break;
                case 'LLLL':
                  t = H(N.Months, f.Wide, p.Standalone);
                  break;
                case 'LLLLL':
                  t = H(N.Months, f.Narrow, p.Standalone);
                  break;
                case 'w':
                  t = U(1);
                  break;
                case 'ww':
                  t = U(2);
                  break;
                case 'W':
                  t = U(1, !0);
                  break;
                case 'd':
                  t = L(j.Date, 1);
                  break;
                case 'dd':
                  t = L(j.Date, 2);
                  break;
                case 'E':
                case 'EE':
                case 'EEE':
                  t = H(N.Days, f.Abbreviated);
                  break;
                case 'EEEE':
                  t = H(N.Days, f.Wide);
                  break;
                case 'EEEEE':
                  t = H(N.Days, f.Narrow);
                  break;
                case 'EEEEEE':
                  t = H(N.Days, f.Short);
                  break;
                case 'a':
                case 'aa':
                case 'aaa':
                  t = H(N.DayPeriods, f.Abbreviated);
                  break;
                case 'aaaa':
                  t = H(N.DayPeriods, f.Wide);
                  break;
                case 'aaaaa':
                  t = H(N.DayPeriods, f.Narrow);
                  break;
                case 'b':
                case 'bb':
                case 'bbb':
                  t = H(N.DayPeriods, f.Abbreviated, p.Standalone, !0);
                  break;
                case 'bbbb':
                  t = H(N.DayPeriods, f.Wide, p.Standalone, !0);
                  break;
                case 'bbbbb':
                  t = H(N.DayPeriods, f.Narrow, p.Standalone, !0);
                  break;
                case 'B':
                case 'BB':
                case 'BBB':
                  t = H(N.DayPeriods, f.Abbreviated, p.Format, !0);
                  break;
                case 'BBBB':
                  t = H(N.DayPeriods, f.Wide, p.Format, !0);
                  break;
                case 'BBBBB':
                  t = H(N.DayPeriods, f.Narrow, p.Format, !0);
                  break;
                case 'h':
                  t = L(j.Hours, 1, -12);
                  break;
                case 'hh':
                  t = L(j.Hours, 2, -12);
                  break;
                case 'H':
                  t = L(j.Hours, 1);
                  break;
                case 'HH':
                  t = L(j.Hours, 2);
                  break;
                case 'm':
                  t = L(j.Minutes, 1);
                  break;
                case 'mm':
                  t = L(j.Minutes, 2);
                  break;
                case 's':
                  t = L(j.Seconds, 1);
                  break;
                case 'ss':
                  t = L(j.Seconds, 2);
                  break;
                case 'S':
                  t = L(j.FractionalSeconds, 1);
                  break;
                case 'SS':
                  t = L(j.FractionalSeconds, 2);
                  break;
                case 'SSS':
                  t = L(j.FractionalSeconds, 3);
                  break;
                case 'Z':
                case 'ZZ':
                case 'ZZZ':
                  t = F(I.Short);
                  break;
                case 'ZZZZZ':
                  t = F(I.Extended);
                  break;
                case 'O':
                case 'OO':
                case 'OOO':
                case 'z':
                case 'zz':
                case 'zzz':
                  t = F(I.ShortGMT);
                  break;
                case 'OOOO':
                case 'ZZZZ':
                case 'zzzz':
                  t = F(I.Long);
                  break;
                default:
                  return null;
              }
              return (V[e] = t), t;
            })(e);
            u += t ? t(i, n, l) : "''" === e ? "'" : e.replace(/(^'|'$)/g, '').replace(/''/g, "'");
          }),
          u
        );
      }
      function P(e, t) {
        return (
          t &&
            (e = e.replace(/\{([^}]+)}/g, function(e, n) {
              return null != t && n in t ? t[n] : e;
            })),
          e
        );
      }
      function M(e, t, n = '-', r, s) {
        let i = '';
        (e < 0 || (s && e <= 0)) && (s ? (e = 1 - e) : ((e = -e), (i = n)));
        let o = String(e);
        for (; o.length < t; ) o = '0' + o;
        return r && (o = o.substr(o.length - t)), i + o;
      }
      function L(e, t, n = 0, r = !1, s = !1) {
        return function(i, o) {
          let a = (function(e, t) {
            switch (e) {
              case j.FullYear:
                return t.getFullYear();
              case j.Month:
                return t.getMonth();
              case j.Date:
                return t.getDate();
              case j.Hours:
                return t.getHours();
              case j.Minutes:
                return t.getMinutes();
              case j.Seconds:
                return t.getSeconds();
              case j.FractionalSeconds:
                return t.getMilliseconds();
              case j.Day:
                return t.getDay();
              default:
                throw new Error(`Unknown DateType value "${e}".`);
            }
          })(e, i);
          if (((n > 0 || a > -n) && (a += n), e === j.Hours)) 0 === a && -12 === n && (a = 12);
          else if (e === j.FractionalSeconds) return (l = t), M(a, 3).substr(0, l);
          var l;
          const u = x(o, m.MinusSign);
          return M(a, t, u, r, s);
        };
      }
      function H(e, t, n = p.Format, s = !1) {
        return function(i, o) {
          return (function(e, t, n, s, i, o) {
            switch (n) {
              case N.Months:
                return v(t, i, s)[e.getMonth()];
              case N.Days:
                return y(t, i, s)[e.getDay()];
              case N.DayPeriods:
                const a = e.getHours(),
                  l = e.getMinutes();
                if (o) {
                  const e = (function(e) {
                      const t = Object(r.rb)(e);
                      return (
                        E(t), (t[r.bb.ExtraData][2] || []).map(e => ('string' == typeof e ? k(e) : [k(e[0]), k(e[1])]))
                      );
                    })(t),
                    n = (function(e, t, n) {
                      const s = Object(r.rb)(e);
                      E(s);
                      const i = O([s[r.bb.ExtraData][0], s[r.bb.ExtraData][1]], t) || [];
                      return O(i, n) || [];
                    })(t, i, s);
                  let o;
                  if (
                    (e.forEach((e, t) => {
                      if (Array.isArray(e)) {
                        const { hours: r, minutes: s } = e[0],
                          { hours: i, minutes: u } = e[1];
                        a >= r && l >= s && (a < i || (a === i && l < u)) && (o = n[t]);
                      } else {
                        const { hours: r, minutes: s } = e;
                        r === a && s === l && (o = n[t]);
                      }
                    }),
                    o)
                  )
                    return o;
                }
                return b(t, i, s)[a < 12 ? 0 : 1];
              case N.Eras:
                return (function(e, t) {
                  return O(Object(r.rb)(e)[r.bb.Eras], t);
                })(t, s)[e.getFullYear() <= 0 ? 0 : 1];
              default:
                throw new Error('unexpected translation type ' + n);
            }
          })(i, o, e, t, n, s);
        };
      }
      function F(e) {
        return function(t, n, r) {
          const s = -1 * r,
            i = x(n, m.MinusSign),
            o = s > 0 ? Math.floor(s / 60) : Math.ceil(s / 60);
          switch (e) {
            case I.Short:
              return (s >= 0 ? '+' : '') + M(o, 2, i) + M(Math.abs(s % 60), 2, i);
            case I.ShortGMT:
              return 'GMT' + (s >= 0 ? '+' : '') + M(o, 1, i);
            case I.Long:
              return 'GMT' + (s >= 0 ? '+' : '') + M(o, 2, i) + ':' + M(Math.abs(s % 60), 2, i);
            case I.Extended:
              return 0 === r ? 'Z' : (s >= 0 ? '+' : '') + M(o, 2, i) + ':' + M(Math.abs(s % 60), 2, i);
            default:
              throw new Error(`Unknown zone width "${e}"`);
          }
        };
      }
      function U(e, t = !1) {
        return function(n, r) {
          let s;
          if (t) {
            const e = new Date(n.getFullYear(), n.getMonth(), 1).getDay() - 1,
              t = n.getDate();
            s = 1 + Math.floor((t + e) / 7);
          } else {
            const e = (function(e) {
                const t = new Date(e, 0, 1).getDay();
                return new Date(e, 0, 1 + (t <= 4 ? 4 : 11) - t);
              })(n.getFullYear()),
              t =
                ((i = n), new Date(i.getFullYear(), i.getMonth(), i.getDate() + (4 - i.getDay()))).getTime() -
                e.getTime();
            s = 1 + Math.round(t / 6048e5);
          }
          var i;
          return M(s, e, x(r, m.MinusSign));
        };
      }
      const V = {};
      function q(e, t) {
        e = e.replace(/:/g, '');
        const n = Date.parse('Jan 01, 1970 00:00:00 ' + e) / 6e4;
        return isNaN(n) ? t : n;
      }
      function $(e) {
        return e instanceof Date && !isNaN(e.valueOf());
      }
      const z = new r.p('UseV4Plurals');
      class B {}
      let W = (() =>
        class extends B {
          constructor(e, t) {
            super(), (this.locale = e), (this.deprecatedPluralFn = t);
          }
          getPluralCategory(e, t) {
            switch (this.deprecatedPluralFn ? this.deprecatedPluralFn(t || this.locale, e) : S(t || this.locale)(e)) {
              case d.Zero:
                return 'zero';
              case d.One:
                return 'one';
              case d.Two:
                return 'two';
              case d.Few:
                return 'few';
              case d.Many:
                return 'many';
              default:
                return 'other';
            }
          }
        })();
      function G(e, t) {
        t = encodeURIComponent(t);
        for (const n of e.split(';')) {
          const e = n.indexOf('='),
            [r, s] = -1 == e ? [n, ''] : [n.slice(0, e), n.slice(e + 1)];
          if (r.trim() === t) return decodeURIComponent(s);
        }
        return null;
      }
      class Z {
        constructor(e, t, n, r) {
          (this.$implicit = e), (this.ngForOf = t), (this.index = n), (this.count = r);
        }
        get first() {
          return 0 === this.index;
        }
        get last() {
          return this.index === this.count - 1;
        }
        get even() {
          return this.index % 2 == 0;
        }
        get odd() {
          return !this.even;
        }
      }
      let K = (() =>
        class {
          constructor(e, t, n) {
            (this._viewContainer = e),
              (this._template = t),
              (this._differs = n),
              (this._ngForOfDirty = !0),
              (this._differ = null);
          }
          set ngForOf(e) {
            (this._ngForOf = e), (this._ngForOfDirty = !0);
          }
          set ngForTrackBy(e) {
            Object(r.U)() &&
              null != e &&
              'function' != typeof e &&
              console &&
              console.warn &&
              console.warn(
                `trackBy must be a function, but received ${JSON.stringify(
                  e
                )}. See https://angular.io/docs/ts/latest/api/common/index/NgFor-directive.html#!#change-propagation for more information.`
              ),
              (this._trackByFn = e);
          }
          get ngForTrackBy() {
            return this._trackByFn;
          }
          set ngForTemplate(e) {
            e && (this._template = e);
          }
          ngDoCheck() {
            if (this._ngForOfDirty) {
              this._ngForOfDirty = !1;
              const n = this._ngForOf;
              if (!this._differ && n)
                try {
                  this._differ = this._differs.find(n).create(this.ngForTrackBy);
                } catch (t) {
                  throw new Error(
                    `Cannot find a differ supporting object '${n}' of type '${((e = n),
                    e.name || typeof e)}'. NgFor only supports binding to Iterables such as Arrays.`
                  );
                }
            }
            var e;
            if (this._differ) {
              const e = this._differ.diff(this._ngForOf);
              e && this._applyChanges(e);
            }
          }
          _applyChanges(e) {
            const t = [];
            e.forEachOperation((e, n, r) => {
              if (null == e.previousIndex) {
                const n = this._viewContainer.createEmbeddedView(
                    this._template,
                    new Z(null, this._ngForOf, -1, -1),
                    null === r ? void 0 : r
                  ),
                  s = new Q(e, n);
                t.push(s);
              } else if (null == r) this._viewContainer.remove(null === n ? void 0 : n);
              else if (null !== n) {
                const s = this._viewContainer.get(n);
                this._viewContainer.move(s, r);
                const i = new Q(e, s);
                t.push(i);
              }
            });
            for (let n = 0; n < t.length; n++) this._perViewChange(t[n].view, t[n].record);
            for (let n = 0, r = this._viewContainer.length; n < r; n++) {
              const e = this._viewContainer.get(n);
              (e.context.index = n), (e.context.count = r), (e.context.ngForOf = this._ngForOf);
            }
            e.forEachIdentityChange(e => {
              this._viewContainer.get(e.currentIndex).context.$implicit = e.item;
            });
          }
          _perViewChange(e, t) {
            e.context.$implicit = t.item;
          }
          static ngTemplateContextGuard(e, t) {
            return !0;
          }
        })();
      class Q {
        constructor(e, t) {
          (this.record = e), (this.view = t);
        }
      }
      let Y = (() =>
        class {
          constructor(e, t) {
            (this._viewContainer = e),
              (this._context = new J()),
              (this._thenTemplateRef = null),
              (this._elseTemplateRef = null),
              (this._thenViewRef = null),
              (this._elseViewRef = null),
              (this._thenTemplateRef = t);
          }
          set ngIf(e) {
            (this._context.$implicit = this._context.ngIf = e), this._updateView();
          }
          set ngIfThen(e) {
            X('ngIfThen', e), (this._thenTemplateRef = e), (this._thenViewRef = null), this._updateView();
          }
          set ngIfElse(e) {
            X('ngIfElse', e), (this._elseTemplateRef = e), (this._elseViewRef = null), this._updateView();
          }
          _updateView() {
            this._context.$implicit
              ? this._thenViewRef ||
                (this._viewContainer.clear(),
                (this._elseViewRef = null),
                this._thenTemplateRef &&
                  (this._thenViewRef = this._viewContainer.createEmbeddedView(this._thenTemplateRef, this._context)))
              : this._elseViewRef ||
                (this._viewContainer.clear(),
                (this._thenViewRef = null),
                this._elseTemplateRef &&
                  (this._elseViewRef = this._viewContainer.createEmbeddedView(this._elseTemplateRef, this._context)));
          }
        })();
      class J {
        constructor() {
          (this.$implicit = null), (this.ngIf = null);
        }
      }
      function X(e, t) {
        if (t && !t.createEmbeddedView)
          throw new Error(`${e} must be a TemplateRef, but received '${Object(r.Gb)(t)}'.`);
      }
      let ee = (() =>
          class {
            constructor(e) {
              (this._viewContainerRef = e),
                (this._viewRef = null),
                (this.ngTemplateOutletContext = null),
                (this.ngTemplateOutlet = null);
            }
            ngOnChanges(e) {
              this._shouldRecreateView(e)
                ? (this._viewRef && this._viewContainerRef.remove(this._viewContainerRef.indexOf(this._viewRef)),
                  this.ngTemplateOutlet &&
                    (this._viewRef = this._viewContainerRef.createEmbeddedView(
                      this.ngTemplateOutlet,
                      this.ngTemplateOutletContext
                    )))
                : this._viewRef &&
                  this.ngTemplateOutletContext &&
                  this._updateExistingContext(this.ngTemplateOutletContext);
            }
            _shouldRecreateView(e) {
              const t = e.ngTemplateOutletContext;
              return !!e.ngTemplateOutlet || (t && this._hasContextShapeChanged(t));
            }
            _hasContextShapeChanged(e) {
              const t = Object.keys(e.previousValue || {}),
                n = Object.keys(e.currentValue || {});
              if (t.length === n.length) {
                for (let e of n) if (-1 === t.indexOf(e)) return !0;
                return !1;
              }
              return !0;
            }
            _updateExistingContext(e) {
              for (let t of Object.keys(e)) this._viewRef.context[t] = this.ngTemplateOutletContext[t];
            }
          })(),
        te = (() => class {})();
      const ne = new r.p('DocumentToken'),
        re = 'browser';
      function se(e) {
        return e === re;
      }
      function ie(e) {
        return 'server' === e;
      }
      let oe = (() => {
        class e {}
        return (
          (e.ngInjectableDef = Object(r.Mb)({
            token: e,
            providedIn: 'root',
            factory: () => new ae(Object(r.Nb)(ne), window, Object(r.Nb)(r.l))
          })),
          e
        );
      })();
      class ae {
        constructor(e, t, n) {
          (this.document = e), (this.window = t), (this.errorHandler = n), (this.offset = () => [0, 0]);
        }
        setOffset(e) {
          this.offset = Array.isArray(e) ? () => e : e;
        }
        getScrollPosition() {
          return this.supportScrollRestoration() ? [this.window.scrollX, this.window.scrollY] : [0, 0];
        }
        scrollToPosition(e) {
          this.supportScrollRestoration() && this.window.scrollTo(e[0], e[1]);
        }
        scrollToAnchor(e) {
          if (this.supportScrollRestoration()) {
            e =
              this.window.CSS && this.window.CSS.escape
                ? this.window.CSS.escape(e)
                : e.replace(/(\"|\'\ |:|\.|\[|\]|,|=)/g, '\\$1');
            try {
              const t = this.document.querySelector('#' + e);
              if (t) return void this.scrollToElement(t);
              const n = this.document.querySelector(`[name='${e}']`);
              if (n) return void this.scrollToElement(n);
            } catch (t) {
              this.errorHandler.handleError(t);
            }
          }
        }
        setHistoryScrollRestoration(e) {
          if (this.supportScrollRestoration()) {
            const t = this.window.history;
            t && t.scrollRestoration && (t.scrollRestoration = e);
          }
        }
        scrollToElement(e) {
          const t = e.getBoundingClientRect(),
            n = t.left + this.window.pageXOffset,
            r = t.top + this.window.pageYOffset,
            s = this.offset();
          this.window.scrollTo(n - s[0], r - s[1]);
        }
        supportScrollRestoration() {
          try {
            return !!this.window && !!this.window.scrollTo;
          } catch (e) {
            return !1;
          }
        }
      }
    },
    SeVD: function(e, t, n) {
      'use strict';
      var r = n('ngJS'),
        s = n('NJ4a'),
        i = n('Lhse'),
        o = n('kJWO'),
        a = n('I55L'),
        l = n('c2HN'),
        u = n('XoHu');
      n.d(t, 'a', function() {
        return c;
      });
      const c = e => {
        if (e && 'function' == typeof e[o.a])
          return (
            (c = e),
            e => {
              const t = c[o.a]();
              if ('function' != typeof t.subscribe)
                throw new TypeError('Provided object does not correctly implement Symbol.observable');
              return t.subscribe(e);
            }
          );
        if (Object(a.a)(e)) return Object(r.a)(e);
        if (Object(l.a)(e))
          return (
            (n = e),
            e => (
              n
                .then(
                  t => {
                    e.closed || (e.next(t), e.complete());
                  },
                  t => e.error(t)
                )
                .then(null, s.a),
              e
            )
          );
        if (e && 'function' == typeof e[i.a])
          return (
            (t = e),
            e => {
              const n = t[i.a]();
              for (;;) {
                const t = n.next();
                if (t.done) {
                  e.complete();
                  break;
                }
                if ((e.next(t.value), e.closed)) break;
              }
              return (
                'function' == typeof n.return &&
                  e.add(() => {
                    n.return && n.return();
                  }),
                e
              );
            }
          );
        {
          const t = Object(u.a)(e) ? 'an invalid object' : `'${e}'`;
          throw new TypeError(
            `You provided ${t} where a stream was expected. You can provide an Observable, Promise, Array, or Iterable.`
          );
        }
        var t, n, c;
      };
    },
    SpAZ: function(e, t, n) {
      'use strict';
      function r(e) {
        return e;
      }
      n.d(t, 'a', function() {
        return r;
      });
    },
    Ss9G: function(e, t, n) {
      'use strict';
      var r = n('8Y7J');
      class s {}
      var i = n('iInd'),
        o = n('VRyK'),
        a = n('pLZG'),
        l = n('lJxs'),
        u = n('eIep'),
        c = n('AytR'),
        h = n('ey9i');
      const d = new h.a('App');
      class p {
        constructor(e, t, n, r, s) {
          (this.router = e),
            (this.activatedRoute = t),
            (this.titleService = n),
            (this.translateService = r),
            (this.i18nService = s);
        }
        ngOnInit() {
          c.a.production && h.a.enableProductionMode(),
            d.debug('init'),
            this.i18nService.init(c.a.defaultLanguage, c.a.supportedLanguages);
          const e = this.router.events.pipe(Object(a.a)(e => e instanceof i.d));
          Object(o.a)(this.translateService.onLangChange, e)
            .pipe(
              Object(l.a)(() => {
                let e = this.activatedRoute;
                for (; e.firstChild; ) e = e.firstChild;
                return e;
              }),
              Object(a.a)(e => 'primary' === e.outlet),
              Object(u.a)(e => e.data),
              Object(h.c)(this)
            )
            .subscribe(e => {
              const t = e.title;
              t && this.titleService.setTitle(this.translateService.instant(t));
            });
        }
        ngOnDestroy() {
          this.i18nService.destroy();
        }
      }
      var f = n('SVse'),
        g = n('cUpR'),
        m = n('HDdC'),
        b = n('DH7j');
      n('XoHu'), n('Cfvw');
      const y = new r.p('NgValueAccessor');
      let v = (() =>
          class {
            constructor() {
              this._accessors = [];
            }
            add(e, t) {
              this._accessors.push([e, t]);
            }
            remove(e) {
              for (let t = this._accessors.length - 1; t >= 0; --t)
                if (this._accessors[t][1] === e) return void this._accessors.splice(t, 1);
            }
            select(e) {
              this._accessors.forEach(t => {
                this._isSameGroup(t, e) && t[1] !== e && t[1].fireUncheck(e.value);
              });
            }
            _isSameGroup(e, t) {
              return !!e[0].control && e[0]._parent === t._control._parent && e[1].name === t.name;
            }
          })(),
        w = (() =>
          class {
            constructor(e, t, n) {
              (this._element = e),
                (this._renderer = t),
                (this._select = n),
                this._select && (this.id = this._select._registerOption());
            }
            set ngValue(e) {
              null != this._select &&
                (this._select._optionMap.set(this.id, e),
                this._setElementValue(
                  (function(e, t) {
                    return null == e
                      ? '' + t
                      : (t && 'object' == typeof t && (t = 'Object'), `${e}: ${t}`.slice(0, 50));
                  })(this.id, e)
                ),
                this._select.writeValue(this._select.value));
            }
            set value(e) {
              this._setElementValue(e), this._select && this._select.writeValue(this._select.value);
            }
            _setElementValue(e) {
              this._renderer.setProperty(this._element.nativeElement, 'value', e);
            }
            ngOnDestroy() {
              this._select && (this._select._optionMap.delete(this.id), this._select.writeValue(this._select.value));
            }
          })();
      function _(e, t) {
        return null == e
          ? '' + t
          : ('string' == typeof t && (t = `'${t}'`),
            t && 'object' == typeof t && (t = 'Object'),
            `${e}: ${t}`.slice(0, 50));
      }
      let C = (() =>
        class {
          constructor(e, t, n) {
            (this._element = e),
              (this._renderer = t),
              (this._select = n),
              this._select && (this.id = this._select._registerOption(this));
          }
          set ngValue(e) {
            null != this._select &&
              ((this._value = e), this._setElementValue(_(this.id, e)), this._select.writeValue(this._select.value));
          }
          set value(e) {
            this._select
              ? ((this._value = e), this._setElementValue(_(this.id, e)), this._select.writeValue(this._select.value))
              : this._setElementValue(e);
          }
          _setElementValue(e) {
            this._renderer.setProperty(this._element.nativeElement, 'value', e);
          }
          _setSelected(e) {
            this._renderer.setProperty(this._element.nativeElement, 'selected', e);
          }
          ngOnDestroy() {
            this._select && (this._select._optionMap.delete(this.id), this._select.writeValue(this._select.value));
          }
        })();
      const x = new r.p('NgFormSelectorWarning');
      let S = (() => class {})(),
        E = (() => {
          class e {
            static withConfig(t) {
              return { ngModule: e, providers: [{ provide: x, useValue: t.warnOnDeprecatedNgFormSelector }] };
            }
          }
          return e;
        })();
      var O = n('XNiG'),
        k = (n('2Vo4'), n('itXk'), n('quSY'));
      class D extends k.a {
        constructor(e, t) {
          super();
        }
        schedule(e, t = 0) {
          return this;
        }
      }
      class T extends D {
        constructor(e, t) {
          super(e, t), (this.scheduler = e), (this.work = t), (this.pending = !1);
        }
        schedule(e, t = 0) {
          if (this.closed) return this;
          this.state = e;
          const n = this.id,
            r = this.scheduler;
          return (
            null != n && (this.id = this.recycleAsyncId(r, n, t)),
            (this.pending = !0),
            (this.delay = t),
            (this.id = this.id || this.requestAsyncId(r, this.id, t)),
            this
          );
        }
        requestAsyncId(e, t, n = 0) {
          return setInterval(e.flush.bind(e, this), n);
        }
        recycleAsyncId(e, t, n = 0) {
          if (null !== n && this.delay === n && !1 === this.pending) return t;
          clearInterval(t);
        }
        execute(e, t) {
          if (this.closed) return new Error('executing a cancelled action');
          this.pending = !1;
          const n = this._execute(e, t);
          if (n) return n;
          !1 === this.pending && null != this.id && (this.id = this.recycleAsyncId(this.scheduler, this.id, null));
        }
        _execute(e, t) {
          let n = !1,
            r = void 0;
          try {
            this.work(e);
          } catch (s) {
            (n = !0), (r = (!!s && s) || new Error(s));
          }
          if (n) return this.unsubscribe(), r;
        }
        _unsubscribe() {
          const e = this.id,
            t = this.scheduler,
            n = t.actions,
            r = n.indexOf(this);
          (this.work = null),
            (this.state = null),
            (this.pending = !1),
            (this.scheduler = null),
            -1 !== r && n.splice(r, 1),
            null != e && (this.id = this.recycleAsyncId(t, e, null)),
            (this.delay = null);
        }
      }
      let A = (() => {
        class e {
          constructor(t, n = e.now) {
            (this.SchedulerAction = t), (this.now = n);
          }
          schedule(e, t = 0, n) {
            return new this.SchedulerAction(this, e).schedule(n, t);
          }
        }
        return (e.now = () => Date.now()), e;
      })();
      class I extends A {
        constructor(e, t = A.now) {
          super(e, () => (I.delegate && I.delegate !== this ? I.delegate.now() : t())),
            (this.actions = []),
            (this.active = !1),
            (this.scheduled = void 0);
        }
        schedule(e, t = 0, n) {
          return I.delegate && I.delegate !== this ? I.delegate.schedule(e, t, n) : super.schedule(e, t, n);
        }
        flush(e) {
          const { actions: t } = this;
          if (this.active) return void t.push(e);
          let n;
          this.active = !0;
          do {
            if ((n = e.execute(e.state, e.delay))) break;
          } while ((e = t.shift()));
          if (((this.active = !1), n)) {
            for (; (e = t.shift()); ) e.unsubscribe();
            throw n;
          }
        }
      }
      const j = new I(T);
      n('z+Ro');
      var N = n('KqfI');
      const R = new m.a(N.a);
      var P = n('n6bG');
      function M(e, t, n, r) {
        return (
          Object(P.a)(n) && ((r = n), (n = void 0)),
          r
            ? M(e, t, n).pipe(Object(l.a)(e => (Object(b.a)(e) ? r(...e) : r(e))))
            : new m.a(r => {
                !(function e(t, n, r, s, i) {
                  let o;
                  if (
                    (function(e) {
                      return e && 'function' == typeof e.addEventListener && 'function' == typeof e.removeEventListener;
                    })(t)
                  ) {
                    const e = t;
                    t.addEventListener(n, r, i), (o = () => e.removeEventListener(n, r, i));
                  } else if (
                    (function(e) {
                      return e && 'function' == typeof e.on && 'function' == typeof e.off;
                    })(t)
                  ) {
                    const e = t;
                    t.on(n, r), (o = () => e.off(n, r));
                  } else if (
                    (function(e) {
                      return e && 'function' == typeof e.addListener && 'function' == typeof e.removeListener;
                    })(t)
                  ) {
                    const e = t;
                    t.addListener(n, r), (o = () => e.removeListener(n, r));
                  } else {
                    if (!t || !t.length) throw new TypeError('Invalid event target');
                    for (let o = 0, a = t.length; o < a; o++) e(t[o], n, r, s, i);
                  }
                  s.add(o);
                })(
                  e,
                  t,
                  function(e) {
                    r.next(arguments.length > 1 ? Array.prototype.slice.call(arguments) : e);
                  },
                  r,
                  n
                );
              })
        );
      }
      var L = n('yCtX'),
        H = n('l7GE'),
        F = n('ZUHj');
      class U {
        call(e, t) {
          return t.subscribe(new V(e));
        }
      }
      class V extends H.a {
        constructor(e) {
          super(e), (this.hasFirst = !1), (this.observables = []), (this.subscriptions = []);
        }
        _next(e) {
          this.observables.push(e);
        }
        _complete() {
          const e = this.observables,
            t = e.length;
          if (0 === t) this.destination.complete();
          else {
            for (let n = 0; n < t && !this.hasFirst; n++) {
              let t = e[n],
                r = Object(F.a)(this, t, t, n);
              this.subscriptions && this.subscriptions.push(r), this.add(r);
            }
            this.observables = null;
          }
        }
        notifyNext(e, t, n, r, s) {
          if (!this.hasFirst) {
            this.hasFirst = !0;
            for (let e = 0; e < this.subscriptions.length; e++)
              if (e !== n) {
                let t = this.subscriptions[e];
                t.unsubscribe(), this.remove(t);
              }
            this.subscriptions = null;
          }
          this.destination.next(t);
        }
      }
      n('JX91');
      var q = n('7o/Q'),
        $ = n('1G5W'),
        z = n('IzEk'),
        B = n('vkgz');
      function W(...e) {
        return t => {
          let n;
          return 'function' == typeof e[e.length - 1] && (n = e.pop()), t.lift(new G(e, n));
        };
      }
      class G {
        constructor(e, t) {
          (this.observables = e), (this.project = t);
        }
        call(e, t) {
          return t.subscribe(new Z(e, this.observables, this.project));
        }
      }
      class Z extends H.a {
        constructor(e, t, n) {
          super(e), (this.observables = t), (this.project = n), (this.toRespond = []);
          const r = t.length;
          this.values = new Array(r);
          for (let s = 0; s < r; s++) this.toRespond.push(s);
          for (let s = 0; s < r; s++) {
            let e = t[s];
            this.add(Object(F.a)(this, e, e, s));
          }
        }
        notifyNext(e, t, n, r, s) {
          this.values[n] = t;
          const i = this.toRespond;
          if (i.length > 0) {
            const e = i.indexOf(n);
            -1 !== e && i.splice(e, 1);
          }
        }
        notifyComplete() {}
        _next(e) {
          if (0 === this.toRespond.length) {
            const t = [e, ...this.values];
            this.project ? this._tryProject(t) : this.destination.next(t);
          }
        }
        _tryProject(e) {
          let t;
          try {
            t = this.project.apply(this, e);
          } catch (n) {
            return void this.destination.error(n);
          }
          this.destination.next(t);
        }
      }
      var K = n('EY2u'),
        Q = n('LRne');
      function Y(e, t) {
        return new m.a(t ? n => t.schedule(J, 0, { error: e, subscriber: n }) : t => t.error(e));
      }
      function J({ error: e, subscriber: t }) {
        t.error(e);
      }
      let X = (() => {
        class e {
          constructor(e, t, n) {
            (this.kind = e), (this.value = t), (this.error = n), (this.hasValue = 'N' === e);
          }
          observe(e) {
            switch (this.kind) {
              case 'N':
                return e.next && e.next(this.value);
              case 'E':
                return e.error && e.error(this.error);
              case 'C':
                return e.complete && e.complete();
            }
          }
          do(e, t, n) {
            switch (this.kind) {
              case 'N':
                return e && e(this.value);
              case 'E':
                return t && t(this.error);
              case 'C':
                return n && n();
            }
          }
          accept(e, t, n) {
            return e && 'function' == typeof e.next ? this.observe(e) : this.do(e, t, n);
          }
          toObservable() {
            switch (this.kind) {
              case 'N':
                return Object(Q.a)(this.value);
              case 'E':
                return Y(this.error);
              case 'C':
                return Object(K.b)();
            }
            throw new Error('unexpected notification kind value');
          }
          static createNext(t) {
            return void 0 !== t ? new e('N', t) : e.undefinedValueNotification;
          }
          static createError(t) {
            return new e('E', void 0, t);
          }
          static createComplete() {
            return e.completeNotification;
          }
        }
        return (e.completeNotification = new e('C')), (e.undefinedValueNotification = new e('N', void 0)), e;
      })();
      function ee(e, t = j) {
        var n;
        const r = (n = e) instanceof Date && !isNaN(+n) ? +e - t.now() : Math.abs(e);
        return e => e.lift(new te(r, t));
      }
      class te {
        constructor(e, t) {
          (this.delay = e), (this.scheduler = t);
        }
        call(e, t) {
          return t.subscribe(new ne(e, this.delay, this.scheduler));
        }
      }
      class ne extends q.a {
        constructor(e, t, n) {
          super(e), (this.delay = t), (this.scheduler = n), (this.queue = []), (this.active = !1), (this.errored = !1);
        }
        static dispatch(e) {
          const t = e.source,
            n = t.queue,
            r = e.scheduler,
            s = e.destination;
          for (; n.length > 0 && n[0].time - r.now() <= 0; ) n.shift().notification.observe(s);
          if (n.length > 0) {
            const t = Math.max(0, n[0].time - r.now());
            this.schedule(e, t);
          } else this.unsubscribe(), (t.active = !1);
        }
        _schedule(e) {
          (this.active = !0),
            this.destination.add(
              e.schedule(ne.dispatch, this.delay, { source: this, destination: this.destination, scheduler: e })
            );
        }
        scheduleNotification(e) {
          if (!0 === this.errored) return;
          const t = this.scheduler,
            n = new re(t.now() + this.delay, e);
          this.queue.push(n), !1 === this.active && this._schedule(t);
        }
        _next(e) {
          this.scheduleNotification(X.createNext(e));
        }
        _error(e) {
          (this.errored = !0), (this.queue = []), this.destination.error(e), this.unsubscribe();
        }
        _complete() {
          this.scheduleNotification(X.createComplete()), this.unsubscribe();
        }
      }
      class re {
        constructor(e, t) {
          (this.time = e), (this.notification = t);
        }
      }
      function se(e) {
        return parseInt('' + e, 10);
      }
      function ie(e) {
        return null != e ? '' + e : '';
      }
      function oe(e) {
        return 'number' == typeof e && isFinite(e) && Math.floor(e) === e;
      }
      function ae(e) {
        return null != e;
      }
      function le(e, t) {
        return e && e.className && e.className.split && e.className.split(/\s+/).indexOf(t) >= 0;
      }
      n('w1tV'),
        'undefined' == typeof Element ||
          Element.prototype.closest ||
          (Element.prototype.matches ||
            (Element.prototype.matches =
              Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector),
          (Element.prototype.closest = function(e) {
            let t = this;
            if (!document.documentElement.contains(t)) return null;
            do {
              if (t.matches(e)) return t;
              t = t.parentElement || t.parentNode;
            } while (null !== t && 1 === t.nodeType);
            return null;
          }));
      let ue = (() => class {})(),
        ce = (() => {
          class e {
            constructor() {
              (this.dismissible = !0), (this.type = 'warning');
            }
          }
          return (
            (e.ngInjectableDef = Object(r.Mb)({
              factory: function() {
                return new e();
              },
              token: e,
              providedIn: 'root'
            })),
            e
          );
        })(),
        he = (() =>
          class {
            constructor(e, t, n) {
              (this._renderer = t),
                (this._element = n),
                (this.close = new r.m()),
                (this.dismissible = e.dismissible),
                (this.type = e.type);
            }
            closeHandler() {
              this.close.emit(null);
            }
            ngOnChanges(e) {
              const t = e.type;
              t &&
                !t.firstChange &&
                (this._renderer.removeClass(this._element.nativeElement, 'alert-' + t.previousValue),
                this._renderer.addClass(this._element.nativeElement, 'alert-' + t.currentValue));
            }
            ngOnInit() {
              this._renderer.addClass(this._element.nativeElement, 'alert-' + this.type);
            }
          })(),
        de = (() => class {})(),
        pe = (() => class {})(),
        fe = (() => class {})(),
        ge = (() =>
          class {
            constructor() {
              this.collapsed = !1;
            }
          })(),
        me = (() => class {})();
      class be {
        static from(e) {
          return e instanceof be ? e : e ? new be(e.year, e.month, e.day) : null;
        }
        constructor(e, t, n) {
          (this.year = oe(e) ? e : null), (this.month = oe(t) ? t : null), (this.day = oe(n) ? n : null);
        }
        equals(e) {
          return e && this.year === e.year && this.month === e.month && this.day === e.day;
        }
        before(e) {
          return (
            !!e &&
            (this.year === e.year
              ? this.month === e.month
                ? this.day !== e.day && this.day < e.day
                : this.month < e.month
              : this.year < e.year)
          );
        }
        after(e) {
          return (
            !!e &&
            (this.year === e.year
              ? this.month === e.month
                ? this.day !== e.day && this.day > e.day
                : this.month > e.month
              : this.year > e.year)
          );
        }
      }
      function ye(e) {
        return new be(e.getFullYear(), e.getMonth() + 1, e.getDate());
      }
      function ve(e) {
        const t = new Date(e.year, e.month - 1, e.day, 12);
        return isNaN(t.getTime()) || t.setFullYear(e.year), t;
      }
      function we() {
        return new Ce();
      }
      let _e = (() => {
          class e {}
          return (e.ngInjectableDef = Object(r.Mb)({ factory: we, token: e, providedIn: 'root' })), e;
        })(),
        Ce = (() =>
          class extends _e {
            getDaysPerWeek() {
              return 7;
            }
            getMonths() {
              return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
            }
            getWeeksPerMonth() {
              return 6;
            }
            getNext(e, t = 'd', n = 1) {
              let r = ve(e),
                s = !0,
                i = r.getMonth();
              switch (t) {
                case 'y':
                  r.setFullYear(r.getFullYear() + n);
                  break;
                case 'm':
                  (i += n), r.setMonth(i), (i %= 12), i < 0 && (i += 12);
                  break;
                case 'd':
                  r.setDate(r.getDate() + n), (s = !1);
                  break;
                default:
                  return e;
              }
              return s && r.getMonth() !== i && r.setDate(0), ye(r);
            }
            getPrev(e, t = 'd', n = 1) {
              return this.getNext(e, t, -n);
            }
            getWeekday(e) {
              let t = ve(e).getDay();
              return 0 === t ? 7 : t;
            }
            getWeekNumber(e, t) {
              7 === t && (t = 0);
              const n = ve(e[(11 - t) % 7]);
              n.setDate(n.getDate() + 4 - (n.getDay() || 7));
              const r = n.getTime();
              return n.setMonth(0), n.setDate(1), Math.floor(Math.round((r - n.getTime()) / 864e5) / 7) + 1;
            }
            getToday() {
              return ye(new Date());
            }
            isValid(e) {
              if (!(e && oe(e.year) && oe(e.month) && oe(e.day))) return !1;
              if (0 === e.year) return !1;
              const t = ve(e);
              return (
                !isNaN(t.getTime()) &&
                t.getFullYear() === e.year &&
                t.getMonth() + 1 === e.month &&
                t.getDate() === e.day
              );
            }
          })();
      function xe(e, t) {
        return !(function(e, t) {
          return (!e && !t) || (!!e && !!t && e.equals(t));
        })(e, t);
      }
      function Se(e, t) {
        return !((!e && !t) || (e && t && e.year === t.year && e.month === t.month));
      }
      function Ee(e, t, n) {
        return e && t && e.before(t) ? t : e && n && e.after(n) ? n : e;
      }
      function Oe(e, t) {
        const { minDate: n, maxDate: r, disabled: s, markDisabled: i } = t;
        return !(
          !ae(e) ||
          s ||
          (i && i(e, { year: e.year, month: e.month })) ||
          (n && e.before(n)) ||
          (r && e.after(r))
        );
      }
      let ke = (() => {
          class e {
            getDayNumerals(e) {
              return '' + e.day;
            }
            getWeekNumerals(e) {
              return '' + e;
            }
            getYearNumerals(e) {
              return '' + e;
            }
          }
          return (
            (e.ngInjectableDef = Object(r.Mb)({
              factory: function() {
                return (e = Object(r.Nb)(r.t)), new De(e);
                var e;
              },
              token: e,
              providedIn: 'root'
            })),
            e
          );
        })(),
        De = (() =>
          class extends ke {
            constructor(e) {
              super(), (this._locale = e);
              const t = Object(f.s)(e, f.d.Standalone, f.p.Short);
              (this._weekdaysShort = t.map((e, n) => t[(n + 1) % 7])),
                (this._monthsShort = Object(f.u)(e, f.d.Standalone, f.p.Abbreviated)),
                (this._monthsFull = Object(f.u)(e, f.d.Standalone, f.p.Wide));
            }
            getWeekdayShortName(e) {
              return this._weekdaysShort[e - 1];
            }
            getMonthShortName(e) {
              return this._monthsShort[e - 1];
            }
            getMonthFullName(e) {
              return this._monthsFull[e - 1];
            }
            getDayAriaLabel(e) {
              const t = new Date(e.year, e.month - 1, e.day);
              return Object(f.r)(t, 'fullDate', this._locale);
            }
          })(),
        Te = (() =>
          class {
            constructor(e, t) {
              (this._calendar = e),
                (this._i18n = t),
                (this._VALIDATORS = {
                  dayTemplateData: e => {
                    if (this._state.dayTemplateData !== e) return { dayTemplateData: e };
                  },
                  displayMonths: e => {
                    if (oe((e = se(e))) && e > 0 && this._state.displayMonths !== e) return { displayMonths: e };
                  },
                  disabled: e => {
                    if (this._state.disabled !== e) return { disabled: e };
                  },
                  firstDayOfWeek: e => {
                    if (oe((e = se(e))) && e >= 0 && this._state.firstDayOfWeek !== e) return { firstDayOfWeek: e };
                  },
                  focusVisible: e => {
                    if (this._state.focusVisible !== e && !this._state.disabled) return { focusVisible: e };
                  },
                  markDisabled: e => {
                    if (this._state.markDisabled !== e) return { markDisabled: e };
                  },
                  maxDate: e => {
                    const t = this.toValidDate(e, null);
                    if (xe(this._state.maxDate, t)) return { maxDate: t };
                  },
                  minDate: e => {
                    const t = this.toValidDate(e, null);
                    if (xe(this._state.minDate, t)) return { minDate: t };
                  },
                  navigation: e => {
                    if (this._state.navigation !== e) return { navigation: e };
                  },
                  outsideDays: e => {
                    if (this._state.outsideDays !== e) return { outsideDays: e };
                  }
                }),
                (this._model$ = new O.a()),
                (this._dateSelect$ = new O.a()),
                (this._state = {
                  disabled: !1,
                  displayMonths: 1,
                  firstDayOfWeek: 1,
                  focusVisible: !1,
                  months: [],
                  navigation: 'select',
                  outsideDays: 'visible',
                  prevDisabled: !1,
                  nextDisabled: !1,
                  selectBoxes: { years: [], months: [] },
                  selectedDate: null
                });
            }
            get model$() {
              return this._model$.pipe(Object(a.a)(e => e.months.length > 0));
            }
            get dateSelect$() {
              return this._dateSelect$.pipe(Object(a.a)(e => null !== e));
            }
            set(e) {
              let t = Object.keys(e)
                .map(t => this._VALIDATORS[t](e[t]))
                .reduce((e, t) => Object.assign({}, e, t), {});
              Object.keys(t).length > 0 && this._nextState(t);
            }
            focus(e) {
              !this._state.disabled &&
                this._calendar.isValid(e) &&
                xe(this._state.focusDate, e) &&
                this._nextState({ focusDate: e });
            }
            focusSelect() {
              Oe(this._state.focusDate, this._state) && this.select(this._state.focusDate, { emitEvent: !0 });
            }
            open(e) {
              const t = this.toValidDate(e, this._calendar.getToday());
              this._state.disabled ||
                (this._state.firstDate && !Se(this._state.firstDate, e)) ||
                this._nextState({ firstDate: t });
            }
            select(e, t = {}) {
              const n = this.toValidDate(e, null);
              this._state.disabled ||
                (xe(this._state.selectedDate, n) && this._nextState({ selectedDate: n }),
                t.emitEvent && Oe(n, this._state) && this._dateSelect$.next(n));
            }
            toValidDate(e, t) {
              const n = be.from(e);
              return void 0 === t && (t = this._calendar.getToday()), this._calendar.isValid(n) ? n : t;
            }
            getMonth(e) {
              for (let t of this._state.months) if (e.month === t.number && e.year === t.year) return t;
              throw new Error(`month ${e.month} of year ${e.year} not found`);
            }
            _nextState(e) {
              const t = this._updateState(e);
              this._patchContexts(t), (this._state = t), this._model$.next(this._state);
            }
            _patchContexts(e) {
              const {
                months: t,
                displayMonths: n,
                selectedDate: r,
                focusDate: s,
                focusVisible: i,
                disabled: o,
                outsideDays: a
              } = e;
              e.months.forEach(e => {
                e.weeks.forEach(l => {
                  l.days.forEach(l => {
                    s && (l.context.focused = s.equals(l.date) && i),
                      (l.tabindex = !o && l.date.equals(s) && s.month === e.number ? 0 : -1),
                      !0 === o && (l.context.disabled = !0),
                      void 0 !== r && (l.context.selected = null !== r && r.equals(l.date)),
                      e.number !== l.date.month &&
                        (l.hidden =
                          'hidden' === a ||
                          'collapsed' === a ||
                          (n > 1 && l.date.after(t[0].firstDate) && l.date.before(t[n - 1].lastDate)));
                  });
                });
              });
            }
            _updateState(e) {
              const t = Object.assign({}, this._state, e);
              let n = t.firstDate;
              if (
                (('minDate' in e || 'maxDate' in e) &&
                  ((function(e, t) {
                    if (t && e && t.before(e)) throw new Error(`'maxDate' ${t} should be greater than 'minDate' ${e}`);
                  })(t.minDate, t.maxDate),
                  (t.focusDate = Ee(t.focusDate, t.minDate, t.maxDate)),
                  (t.firstDate = Ee(t.firstDate, t.minDate, t.maxDate)),
                  (n = t.focusDate)),
                'disabled' in e && (t.focusVisible = !1),
                'selectedDate' in e && 0 === this._state.months.length && (n = t.selectedDate),
                'focusVisible' in e)
              )
                return t;
              if (
                'focusDate' in e &&
                ((t.focusDate = Ee(t.focusDate, t.minDate, t.maxDate)),
                (n = t.focusDate),
                0 !== t.months.length && !t.focusDate.before(t.firstDate) && !t.focusDate.after(t.lastDate))
              )
                return t;
              if (('firstDate' in e && ((t.firstDate = Ee(t.firstDate, t.minDate, t.maxDate)), (n = t.firstDate)), n)) {
                const r = (function(e, t, n, r, s) {
                  const { displayMonths: i, months: o } = n,
                    a = o.splice(0, o.length);
                  return (
                    Array.from({ length: i }, (n, r) => {
                      const i = Object.assign(e.getNext(t, 'm', r), { day: 1 });
                      if (((o[r] = null), !s)) {
                        const e = a.findIndex(e => e.firstDate.equals(i));
                        -1 !== e && (o[r] = a.splice(e, 1)[0]);
                      }
                      return i;
                    }).forEach((t, s) => {
                      null === o[s] &&
                        (o[s] = (function(e, t, n, r, s = {}) {
                          const {
                              dayTemplateData: i,
                              minDate: o,
                              maxDate: a,
                              firstDayOfWeek: l,
                              markDisabled: u,
                              outsideDays: c
                            } = n,
                            h = e.getToday();
                          (s.firstDate = null),
                            (s.lastDate = null),
                            (s.number = t.month),
                            (s.year = t.year),
                            (s.weeks = s.weeks || []),
                            (s.weekdays = s.weekdays || []),
                            (t = (function(e, t, n) {
                              const r = e.getDaysPerWeek(),
                                s = new be(t.year, t.month, 1),
                                i = e.getWeekday(s) % r;
                              return e.getPrev(s, 'd', (r + i - n) % r);
                            })(e, t, l));
                          for (let d = 0; d < e.getWeeksPerMonth(); d++) {
                            let n = s.weeks[d];
                            n || (n = s.weeks[d] = { number: 0, days: [], collapsed: !0 });
                            const p = n.days;
                            for (let l = 0; l < e.getDaysPerWeek(); l++) {
                              0 === d && (s.weekdays[l] = e.getWeekday(t));
                              const n = new be(t.year, t.month, t.day),
                                c = e.getNext(n),
                                f = r.getDayAriaLabel(n);
                              let g = !!((o && n.before(o)) || (a && n.after(a)));
                              !g && u && (g = u(n, { month: s.number, year: s.year }));
                              let m = n.equals(h),
                                b = i ? i(n, { month: s.number, year: s.year }) : void 0;
                              null === s.firstDate && n.month === s.number && (s.firstDate = n),
                                n.month === s.number && c.month !== s.number && (s.lastDate = n);
                              let y = p[l];
                              y || (y = p[l] = {}),
                                (y.date = n),
                                (y.context = Object.assign(y.context || {}, {
                                  $implicit: n,
                                  date: n,
                                  data: b,
                                  currentMonth: s.number,
                                  currentYear: s.year,
                                  disabled: g,
                                  focused: !1,
                                  selected: !1,
                                  today: m
                                })),
                                (y.tabindex = -1),
                                (y.ariaLabel = f),
                                (y.hidden = !1),
                                (t = c);
                            }
                            (n.number = e.getWeekNumber(
                              p.map(e => e.date),
                              l
                            )),
                              (n.collapsed =
                                'collapsed' === c &&
                                p[0].date.month !== s.number &&
                                p[p.length - 1].date.month !== s.number);
                          }
                          return s;
                        })(e, t, n, r, a.shift() || {}));
                    }),
                    o
                  );
                })(
                  this._calendar,
                  n,
                  t,
                  this._i18n,
                  'dayTemplateData' in e ||
                    'firstDayOfWeek' in e ||
                    'markDisabled' in e ||
                    'minDate' in e ||
                    'maxDate' in e ||
                    'disabled' in e ||
                    'outsideDays' in e
                );
                (t.months = r),
                  (t.firstDate = r.length > 0 ? r[0].firstDate : void 0),
                  (t.lastDate = r.length > 0 ? r[r.length - 1].lastDate : void 0),
                  'selectedDate' in e && !Oe(t.selectedDate, t) && (t.selectedDate = null),
                  'firstDate' in e &&
                    (void 0 === t.focusDate || t.focusDate.before(t.firstDate) || t.focusDate.after(t.lastDate)) &&
                    (t.focusDate = n);
                const s = !this._state.firstDate || this._state.firstDate.year !== t.firstDate.year,
                  i = !this._state.firstDate || this._state.firstDate.month !== t.firstDate.month;
                'select' === t.navigation
                  ? (('minDate' in e || 'maxDate' in e || 0 === t.selectBoxes.years.length || s) &&
                      (t.selectBoxes.years = (function(e, t, n) {
                        if (!e) return [];
                        const r = t ? Math.max(t.year, e.year - 500) : e.year - 10,
                          s = (n ? Math.min(n.year, e.year + 500) : e.year + 10) - r + 1,
                          i = Array(s);
                        for (let o = 0; o < s; o++) i[o] = r + o;
                        return i;
                      })(t.firstDate, t.minDate, t.maxDate)),
                    ('minDate' in e || 'maxDate' in e || 0 === t.selectBoxes.months.length || s) &&
                      (t.selectBoxes.months = (function(e, t, n, r) {
                        if (!t) return [];
                        let s = e.getMonths(t.year);
                        if (n && t.year === n.year) {
                          const e = s.findIndex(e => e === n.month);
                          s = s.slice(e);
                        }
                        if (r && t.year === r.year) {
                          const e = s.findIndex(e => e === r.month);
                          s = s.slice(0, e + 1);
                        }
                        return s;
                      })(this._calendar, t.firstDate, t.minDate, t.maxDate)))
                  : (t.selectBoxes = { years: [], months: [] }),
                  ('arrows' !== t.navigation && 'select' !== t.navigation) ||
                    !(i || s || 'minDate' in e || 'maxDate' in e || 'disabled' in e) ||
                    ((t.prevDisabled =
                      t.disabled ||
                      (function(e, t, n) {
                        const r = Object.assign(e.getPrev(t, 'm'), { day: 1 });
                        return n && ((r.year === n.year && r.month < n.month) || (r.year < n.year && 1 === n.month));
                      })(this._calendar, t.firstDate, t.minDate)),
                    (t.nextDisabled =
                      t.disabled ||
                      (function(e, t, n) {
                        const r = Object.assign(e.getNext(t, 'm'), { day: 1 });
                        return n && r.after(n);
                      })(this._calendar, t.lastDate, t.maxDate)));
              }
              return t;
            }
          })();
      const Ae = (function() {
        var e = { PREV: 0, NEXT: 1 };
        return (e[e.PREV] = 'PREV'), (e[e.NEXT] = 'NEXT'), e;
      })();
      let Ie = (() => {
        class e {
          constructor() {
            (this.displayMonths = 1),
              (this.firstDayOfWeek = 1),
              (this.navigation = 'select'),
              (this.outsideDays = 'visible'),
              (this.showWeekdays = !0),
              (this.showWeekNumbers = !1);
          }
        }
        return (
          (e.ngInjectableDef = Object(r.Mb)({
            factory: function() {
              return new e();
            },
            token: e,
            providedIn: 'root'
          })),
          e
        );
      })();
      function je() {
        return new Re();
      }
      let Ne = (() => {
          class e {}
          return (e.ngInjectableDef = Object(r.Mb)({ factory: je, token: e, providedIn: 'root' })), e;
        })(),
        Re = (() =>
          class extends Ne {
            fromModel(e) {
              return e && oe(e.year) && oe(e.month) && oe(e.day) ? { year: e.year, month: e.month, day: e.day } : null;
            }
            toModel(e) {
              return e && oe(e.year) && oe(e.month) && oe(e.day) ? { year: e.year, month: e.month, day: e.day } : null;
            }
          })(),
        Pe = (() =>
          class {
            constructor(e, t, n, s, i, o, a, l) {
              (this._service = e),
                (this._calendar = t),
                (this.i18n = n),
                (this._elementRef = o),
                (this._ngbDateAdapter = a),
                (this._ngZone = l),
                (this._destroyed$ = new O.a()),
                (this._publicState = {}),
                (this.navigate = new r.m()),
                (this.dateSelect = new r.m()),
                (this.select = this.dateSelect),
                (this.onChange = e => {}),
                (this.onTouched = () => {}),
                [
                  'dayTemplate',
                  'dayTemplateData',
                  'displayMonths',
                  'firstDayOfWeek',
                  'footerTemplate',
                  'markDisabled',
                  'minDate',
                  'maxDate',
                  'navigation',
                  'outsideDays',
                  'showWeekdays',
                  'showWeekNumbers',
                  'startDate'
                ].forEach(e => (this[e] = s[e])),
                e.dateSelect$.pipe(Object($.a)(this._destroyed$)).subscribe(e => {
                  this.dateSelect.emit(e);
                }),
                e.model$.pipe(Object($.a)(this._destroyed$)).subscribe(e => {
                  const t = e.firstDate,
                    n = this.model ? this.model.firstDate : null;
                  this._publicState = {
                    maxDate: e.maxDate,
                    minDate: e.minDate,
                    firstDate: e.firstDate,
                    lastDate: e.lastDate,
                    focusedDate: e.focusDate,
                    months: e.months.map(e => e.firstDate)
                  };
                  let r = !1;
                  if (
                    !t.equals(n) &&
                    (this.navigate.emit({
                      current: n ? { year: n.year, month: n.month } : null,
                      next: { year: t.year, month: t.month },
                      preventDefault: () => (r = !0)
                    }),
                    r && null !== n)
                  )
                    return void this._service.open(n);
                  const s = e.selectedDate,
                    o = e.focusDate,
                    a = this.model ? this.model.focusDate : null;
                  (this.model = e),
                    xe(s, this._controlValue) &&
                      ((this._controlValue = s), this.onTouched(), this.onChange(this._ngbDateAdapter.toModel(s))),
                    xe(o, a) && a && e.focusVisible && this.focus(),
                    i.markForCheck();
                });
            }
            get state() {
              return this._publicState;
            }
            get calendar() {
              return this._calendar;
            }
            focusDate(e) {
              this._service.focus(be.from(e));
            }
            focusSelect() {
              this._service.focusSelect();
            }
            focus() {
              this._ngZone.onStable
                .asObservable()
                .pipe(Object(z.a)(1))
                .subscribe(() => {
                  const e = this._elementRef.nativeElement.querySelector('div.ngb-dp-day[tabindex="0"]');
                  e && e.focus();
                });
            }
            navigateTo(e) {
              this._service.open(be.from(e ? (e.day ? e : Object.assign({}, e, { day: 1 })) : null));
            }
            ngAfterViewInit() {
              this._ngZone.runOutsideAngular(() => {
                const e = M(this._contentEl.nativeElement, 'focusin'),
                  t = M(this._contentEl.nativeElement, 'focusout'),
                  { nativeElement: n } = this._elementRef;
                Object(o.a)(e, t)
                  .pipe(
                    Object(a.a)(
                      ({ target: e, relatedTarget: t }) =>
                        !(le(e, 'ngb-dp-day') && le(t, 'ngb-dp-day') && n.contains(e) && n.contains(t))
                    ),
                    Object($.a)(this._destroyed$)
                  )
                  .subscribe(({ type: e }) =>
                    this._ngZone.run(() => this._service.set({ focusVisible: 'focusin' === e }))
                  );
              });
            }
            ngOnDestroy() {
              this._destroyed$.next();
            }
            ngOnInit() {
              if (void 0 === this.model) {
                const e = {};
                [
                  'dayTemplateData',
                  'displayMonths',
                  'markDisabled',
                  'firstDayOfWeek',
                  'navigation',
                  'minDate',
                  'maxDate',
                  'outsideDays'
                ].forEach(t => (e[t] = this[t])),
                  this._service.set(e),
                  this.navigateTo(this.startDate);
              }
              this.dayTemplate || (this.dayTemplate = this._defaultDayTemplate);
            }
            ngOnChanges(e) {
              const t = {};
              if (
                ([
                  'dayTemplateData',
                  'displayMonths',
                  'markDisabled',
                  'firstDayOfWeek',
                  'navigation',
                  'minDate',
                  'maxDate',
                  'outsideDays'
                ]
                  .filter(t => t in e)
                  .forEach(e => (t[e] = this[e])),
                this._service.set(t),
                'startDate' in e)
              ) {
                const { currentValue: t, previousValue: n } = e.startDate;
                Se(n, t) && this.navigateTo(this.startDate);
              }
            }
            onDateSelect(e) {
              this._service.focus(e), this._service.select(e, { emitEvent: !0 });
            }
            onNavigateDateSelect(e) {
              this._service.open(e);
            }
            onNavigateEvent(e) {
              switch (e) {
                case Ae.PREV:
                  this._service.open(this._calendar.getPrev(this.model.firstDate, 'm', 1));
                  break;
                case Ae.NEXT:
                  this._service.open(this._calendar.getNext(this.model.firstDate, 'm', 1));
              }
            }
            registerOnChange(e) {
              this.onChange = e;
            }
            registerOnTouched(e) {
              this.onTouched = e;
            }
            setDisabledState(e) {
              this._service.set({ disabled: e });
            }
            writeValue(e) {
              (this._controlValue = be.from(this._ngbDateAdapter.fromModel(e))),
                this._service.select(this._controlValue);
            }
          })();
      const Me = (function() {
        var e = {
          Tab: 9,
          Enter: 13,
          Escape: 27,
          Space: 32,
          PageUp: 33,
          PageDown: 34,
          End: 35,
          Home: 36,
          ArrowLeft: 37,
          ArrowUp: 38,
          ArrowRight: 39,
          ArrowDown: 40
        };
        return (
          (e[e.Tab] = 'Tab'),
          (e[e.Enter] = 'Enter'),
          (e[e.Escape] = 'Escape'),
          (e[e.Space] = 'Space'),
          (e[e.PageUp] = 'PageUp'),
          (e[e.PageDown] = 'PageDown'),
          (e[e.End] = 'End'),
          (e[e.Home] = 'Home'),
          (e[e.ArrowLeft] = 'ArrowLeft'),
          (e[e.ArrowUp] = 'ArrowUp'),
          (e[e.ArrowRight] = 'ArrowRight'),
          (e[e.ArrowDown] = 'ArrowDown'),
          e
        );
      })();
      let Le = (() => {
          class e {
            processKey(e, t) {
              const { state: n, calendar: r } = t;
              switch (e.which) {
                case Me.PageUp:
                  t.focusDate(r.getPrev(n.focusedDate, e.shiftKey ? 'y' : 'm', 1));
                  break;
                case Me.PageDown:
                  t.focusDate(r.getNext(n.focusedDate, e.shiftKey ? 'y' : 'm', 1));
                  break;
                case Me.End:
                  t.focusDate(e.shiftKey ? n.maxDate : n.lastDate);
                  break;
                case Me.Home:
                  t.focusDate(e.shiftKey ? n.minDate : n.firstDate);
                  break;
                case Me.ArrowLeft:
                  t.focusDate(r.getPrev(n.focusedDate, 'd', 1));
                  break;
                case Me.ArrowUp:
                  t.focusDate(r.getPrev(n.focusedDate, 'd', r.getDaysPerWeek()));
                  break;
                case Me.ArrowRight:
                  t.focusDate(r.getNext(n.focusedDate, 'd', 1));
                  break;
                case Me.ArrowDown:
                  t.focusDate(r.getNext(n.focusedDate, 'd', r.getDaysPerWeek()));
                  break;
                case Me.Enter:
                case Me.Space:
                  t.focusSelect();
                  break;
                default:
                  return;
              }
              e.preventDefault(), e.stopPropagation();
            }
          }
          return (
            (e.ngInjectableDef = Object(r.Mb)({
              factory: function() {
                return new e();
              },
              token: e,
              providedIn: 'root'
            })),
            e
          );
        })(),
        He = (() =>
          class {
            constructor(e, t, n, r) {
              (this.i18n = e), (this.datepicker = t), (this._keyboardService = n), (this._service = r);
            }
            set month(e) {
              this.viewModel = this._service.getMonth(e);
            }
            onKeyDown(e) {
              this._keyboardService.processKey(e, this.datepicker);
            }
            doSelect(e) {
              e.context.disabled || e.hidden || this.datepicker.onDateSelect(e.date);
            }
          })(),
        Fe = (() =>
          class {
            constructor(e) {
              (this.i18n = e),
                (this.navigation = Ae),
                (this.months = []),
                (this.navigate = new r.m()),
                (this.select = new r.m());
            }
            onClickPrev(e) {
              e.currentTarget.focus(), this.navigate.emit(this.navigation.PREV);
            }
            onClickNext(e) {
              e.currentTarget.focus(), this.navigate.emit(this.navigation.NEXT);
            }
          })();
      const Ue = (e, t) => !!t && t.some(t => t.contains(e)),
        Ve = (e, t) =>
          !t ||
          null !=
            (function(e, t) {
              return t ? e.closest(t) : null;
            })(e, t),
        qe = (() =>
          'undefined' != typeof navigator &&
          !!navigator.userAgent &&
          (/iPad|iPhone|iPod/.test(navigator.userAgent) ||
            (/Macintosh/.test(navigator.userAgent) && navigator.maxTouchPoints && navigator.maxTouchPoints > 2) ||
            /Android/.test(navigator.userAgent)))(),
        $e = [
          'a[href]',
          'button:not([disabled])',
          'input:not([disabled]):not([type="hidden"])',
          'select:not([disabled])',
          'textarea:not([disabled])',
          '[contenteditable]',
          '[tabindex]:not([tabindex="-1"])'
        ].join(', ');
      function ze(e) {
        const t = Array.from(e.querySelectorAll($e)).filter(e => -1 !== e.tabIndex);
        return [t[0], t[t.length - 1]];
      }
      class Be {
        getAllStyles(e) {
          return window.getComputedStyle(e);
        }
        getStyle(e, t) {
          return this.getAllStyles(e)[t];
        }
        isStaticPositioned(e) {
          return 'static' === (this.getStyle(e, 'position') || 'static');
        }
        offsetParent(e) {
          let t = e.offsetParent || document.documentElement;
          for (; t && t !== document.documentElement && this.isStaticPositioned(t); ) t = t.offsetParent;
          return t || document.documentElement;
        }
        position(e, t = !0) {
          let n,
            r = { width: 0, height: 0, top: 0, bottom: 0, left: 0, right: 0 };
          if ('fixed' === this.getStyle(e, 'position'))
            (n = e.getBoundingClientRect()),
              (n = { top: n.top, bottom: n.bottom, left: n.left, right: n.right, height: n.height, width: n.width });
          else {
            const t = this.offsetParent(e);
            (n = this.offset(e, !1)),
              t !== document.documentElement && (r = this.offset(t, !1)),
              (r.top += t.clientTop),
              (r.left += t.clientLeft);
          }
          return (
            (n.top -= r.top),
            (n.bottom -= r.top),
            (n.left -= r.left),
            (n.right -= r.left),
            t &&
              ((n.top = Math.round(n.top)),
              (n.bottom = Math.round(n.bottom)),
              (n.left = Math.round(n.left)),
              (n.right = Math.round(n.right))),
            n
          );
        }
        offset(e, t = !0) {
          const n = e.getBoundingClientRect(),
            r = window.pageYOffset - document.documentElement.clientTop,
            s = window.pageXOffset - document.documentElement.clientLeft;
          let i = {
            height: n.height || e.offsetHeight,
            width: n.width || e.offsetWidth,
            top: n.top + r,
            bottom: n.bottom + r,
            left: n.left + s,
            right: n.right + s
          };
          return (
            t &&
              ((i.height = Math.round(i.height)),
              (i.width = Math.round(i.width)),
              (i.top = Math.round(i.top)),
              (i.bottom = Math.round(i.bottom)),
              (i.left = Math.round(i.left)),
              (i.right = Math.round(i.right))),
            i
          );
        }
        positionElements(e, t, n, r) {
          const [s = 'top', i = 'center'] = n.split('-'),
            o = r ? this.offset(e, !1) : this.position(e, !1),
            a = this.getAllStyles(t),
            l = parseFloat(a.marginTop),
            u = parseFloat(a.marginBottom),
            c = parseFloat(a.marginLeft),
            h = parseFloat(a.marginRight);
          let d = 0,
            p = 0;
          switch (s) {
            case 'top':
              d = o.top - (t.offsetHeight + l + u);
              break;
            case 'bottom':
              d = o.top + o.height;
              break;
            case 'left':
              p = o.left - (t.offsetWidth + c + h);
              break;
            case 'right':
              p = o.left + o.width;
          }
          switch (i) {
            case 'top':
              d = o.top;
              break;
            case 'bottom':
              d = o.top + o.height - t.offsetHeight;
              break;
            case 'left':
              p = o.left;
              break;
            case 'right':
              p = o.left + o.width - t.offsetWidth;
              break;
            case 'center':
              'top' === s || 'bottom' === s
                ? (p = o.left + o.width / 2 - t.offsetWidth / 2)
                : (d = o.top + o.height / 2 - t.offsetHeight / 2);
          }
          t.style.transform = `translate(${Math.round(p)}px, ${Math.round(d)}px)`;
          const f = t.getBoundingClientRect(),
            g = document.documentElement,
            m = window.innerHeight || g.clientHeight,
            b = window.innerWidth || g.clientWidth;
          return f.left >= 0 && f.top >= 0 && f.right <= b && f.bottom <= m;
        }
      }
      const We = /\s+/,
        Ge = new Be();
      let Ze = (() =>
          class {
            constructor(e) {
              this.i18n = e;
            }
            isMuted() {
              return !this.selected && (this.date.month !== this.currentMonth || this.disabled);
            }
          })(),
        Ke = (() =>
          class {
            constructor(e, t) {
              (this.i18n = e), (this._renderer = t), (this.select = new r.m()), (this._month = -1), (this._year = -1);
            }
            changeMonth(e) {
              this.select.emit(new be(this.date.year, se(e), 1));
            }
            changeYear(e) {
              this.select.emit(new be(se(e), this.date.month, 1));
            }
            ngAfterViewChecked() {
              this.date &&
                (this.date.month !== this._month &&
                  ((this._month = this.date.month),
                  this._renderer.setProperty(this.monthSelect.nativeElement, 'value', this._month)),
                this.date.year !== this._year &&
                  ((this._year = this.date.year),
                  this._renderer.setProperty(this.yearSelect.nativeElement, 'value', this._year)));
            }
          })(),
        Qe = (() => class {})(),
        Ye = (() => {
          class e {
            constructor() {
              (this.autoClose = !0), (this.placement = ['bottom-left', 'bottom-right', 'top-left', 'top-right']);
            }
          }
          return (
            (e.ngInjectableDef = Object(r.Mb)({
              factory: function() {
                return new e();
              },
              token: e,
              providedIn: 'root'
            })),
            e
          );
        })(),
        Je = (() => class {})(),
        Xe = (() =>
          class {
            constructor(e) {
              (this.dropdown = e), (this.placement = 'bottom'), (this.isOpen = !1);
            }
          })(),
        et = (() =>
          class {
            constructor(e, t) {
              (this.dropdown = e), (this._elementRef = t), (this.anchorEl = t.nativeElement);
            }
            getNativeElement() {
              return this._elementRef.nativeElement;
            }
          })(),
        tt = (() =>
          class extends et {
            constructor(e, t) {
              super(e, t);
            }
          })(),
        nt = (() =>
          class {
            constructor(e, t, n, s, i, o, a) {
              (this._changeDetector = e),
                (this._document = n),
                (this._ngZone = s),
                (this._elementRef = i),
                (this._renderer = o),
                (this._closed$ = new O.a()),
                (this._open = !1),
                (this.openChange = new r.m()),
                (this.placement = t.placement),
                (this.container = t.container),
                (this.autoClose = t.autoClose),
                (this.display = a ? 'static' : 'dynamic'),
                (this._zoneSubscription = s.onStable.subscribe(() => {
                  this._positionMenu();
                }));
            }
            ngAfterContentInit() {
              this._ngZone.onStable.pipe(Object(z.a)(1)).subscribe(() => {
                this._applyPlacementClasses(), this._open && this._setCloseHandlers();
              });
            }
            ngOnChanges(e) {
              e.container && this._open && this._applyContainer(this.container),
                e.placement && !e.placement.isFirstChange && this._applyPlacementClasses();
            }
            isOpen() {
              return this._open;
            }
            open() {
              this._open ||
                ((this._open = !0),
                this._applyContainer(this.container),
                this.openChange.emit(!0),
                this._setCloseHandlers());
            }
            _setCloseHandlers() {
              const e = this._anchor;
              !(function(e, t, n, r, s, i, o, u) {
                var c;
                n &&
                  e.runOutsideAngular(
                    ((c = () => {
                      const u = M(t, 'keydown').pipe(
                          Object($.a)(s),
                          Object(a.a)(e => e.which === Me.Escape),
                          Object(B.a)(e => e.preventDefault())
                        ),
                        c = M(t, 'mousedown').pipe(
                          Object(l.a)(e => {
                            const t = e.target;
                            return (
                              2 !== e.button &&
                              !Ue(t, o) &&
                              ('inside' === n
                                ? Ue(t, i) && Ve(t, '.dropdown-item,.dropdown-divider')
                                : 'outside' === n
                                ? !Ue(t, i)
                                : Ve(t, '.dropdown-item,.dropdown-divider') || !Ue(t, i))
                            );
                          }),
                          Object($.a)(s)
                        );
                      (function(...e) {
                        if (1 === e.length) {
                          if (!Object(b.a)(e[0])) return e[0];
                          e = e[0];
                        }
                        return Object(L.a)(e, void 0).lift(new U());
                      })([
                        u,
                        M(t, 'mouseup').pipe(
                          W(c),
                          Object(a.a)(([e, t]) => t),
                          ee(0),
                          Object($.a)(s)
                        )
                      ]).subscribe(() => e.run(r));
                    }),
                    qe ? () => setTimeout(() => c(), 100) : c)
                  );
              })(
                this._ngZone,
                this._document,
                this.autoClose,
                () => this.close(),
                this._closed$,
                this._menu ? [this._menuElement.nativeElement] : [],
                e ? [e.getNativeElement()] : []
              );
            }
            close() {
              this._open &&
                ((this._open = !1),
                this._resetContainer(),
                this._closed$.next(),
                this.openChange.emit(!1),
                this._changeDetector.markForCheck());
            }
            toggle() {
              this.isOpen() ? this.close() : this.open();
            }
            ngOnDestroy() {
              this._resetContainer(), this._closed$.next(), this._zoneSubscription.unsubscribe();
            }
            onKeyDown(e) {
              const t = e.which,
                n = this._getMenuElements();
              let r = -1,
                s = !1,
                i = null;
              const o = this._isEventFromToggle(e);
              if (
                (!o &&
                  n.length &&
                  n.forEach((t, n) => {
                    t.contains(e.target) && ((s = !0), (i = t)), t === this._document.activeElement && (r = n);
                  }),
                t !== Me.Space && t !== Me.Enter)
              ) {
                if (o || s) {
                  if ((this.open(), n.length)) {
                    switch (t) {
                      case Me.ArrowDown:
                        r = Math.min(r + 1, n.length - 1);
                        break;
                      case Me.ArrowUp:
                        if (this._isDropup() && -1 === r) {
                          r = n.length - 1;
                          break;
                        }
                        r = Math.max(r - 1, 0);
                        break;
                      case Me.Home:
                        r = 0;
                        break;
                      case Me.End:
                        r = n.length - 1;
                    }
                    n[r].focus();
                  }
                  e.preventDefault();
                }
              } else
                !s ||
                  (!0 !== this.autoClose && 'inside' !== this.autoClose) ||
                  M(i, 'click')
                    .pipe(Object(z.a)(1))
                    .subscribe(() => this.close());
            }
            _isDropup() {
              return this._elementRef.nativeElement.classList.contains('dropup');
            }
            _isEventFromToggle(e) {
              return this._anchor.getNativeElement().contains(e.target);
            }
            _getMenuElements() {
              const e = this._menu;
              return null == e ? [] : e.menuItems.filter(e => !e.disabled).map(e => e.elementRef.nativeElement);
            }
            _positionMenu() {
              const e = this._menu;
              this.isOpen() &&
                e &&
                this._applyPlacementClasses(
                  'dynamic' === this.display
                    ? (function(e, t, n, r, s) {
                        let i = Array.isArray(n) ? n : n.split(We);
                        const o = [
                            'top',
                            'bottom',
                            'left',
                            'right',
                            'top-left',
                            'top-right',
                            'bottom-left',
                            'bottom-right',
                            'left-top',
                            'left-bottom',
                            'right-top',
                            'right-bottom'
                          ],
                          a = e => {
                            const [t, n] = e.split('-'),
                              r = [];
                            return r;
                          };
                        let l = i.findIndex(e => 'auto' === e);
                        l >= 0 &&
                          o.forEach(function(e) {
                            null == i.find(t => -1 !== t.search('^' + e)) && i.splice(l++, 1, e);
                          });
                        const u = t.style;
                        let c;
                        (u.position = 'absolute'), (u.top = '0'), (u.left = '0'), (u['will-change'] = 'transform');
                        let h = !1;
                        for (c of i) {
                          a(c);
                          if (Ge.positionElements(e, t, c, r)) {
                            h = !0;
                            break;
                          }
                        }
                        return h || ((c = i[0]), a(c), Ge.positionElements(e, t, c, r)), c;
                      })(
                        this._anchor.anchorEl,
                        this._bodyContainer || this._menuElement.nativeElement,
                        this.placement,
                        'body' === this.container
                      )
                    : this._getFirstPlacement(this.placement)
                );
            }
            _getFirstPlacement(e) {
              return Array.isArray(e) ? e[0] : e.split(' ')[0];
            }
            _resetContainer() {
              const e = this._renderer,
                t = this._menuElement;
              if (t) {
                const n = t.nativeElement;
                e.appendChild(this._elementRef.nativeElement, n),
                  e.removeStyle(n, 'position'),
                  e.removeStyle(n, 'transform');
              }
              this._bodyContainer &&
                (e.removeChild(this._document.body, this._bodyContainer), (this._bodyContainer = null));
            }
            _applyContainer(e = null) {
              if ((this._resetContainer(), 'body' === e)) {
                const e = this._renderer,
                  t = this._menuElement.nativeElement,
                  n = (this._bodyContainer = this._bodyContainer || e.createElement('div'));
                e.setStyle(n, 'position', 'absolute'),
                  e.setStyle(t, 'position', 'static'),
                  e.setStyle(n, 'z-index', '1050'),
                  e.appendChild(n, t),
                  e.appendChild(this._document.body, n);
              }
            }
            _applyPlacementClasses(e) {
              const t = this._menu;
              if (t) {
                e || (e = this._getFirstPlacement(this.placement));
                const n = this._renderer,
                  r = this._elementRef.nativeElement;
                n.removeClass(r, 'dropup'),
                  n.removeClass(r, 'dropdown'),
                  (t.placement = 'static' === this.display ? null : e);
                const s = -1 !== e.search('^top') ? 'dropup' : 'dropdown';
                n.addClass(r, s);
                const i = this._bodyContainer;
                i && (n.removeClass(i, 'dropup'), n.removeClass(i, 'dropdown'), n.addClass(i, s));
              }
            }
          })(),
        rt = (() => class {})(),
        st = (() => {
          class e {
            constructor() {
              (this.backdrop = !0), (this.keyboard = !0);
            }
          }
          return (
            (e.ngInjectableDef = Object(r.Mb)({
              factory: function() {
                return new e();
              },
              token: e,
              providedIn: 'root'
            })),
            e
          );
        })();
      class it {
        constructor(e, t, n) {
          (this.nodes = e), (this.viewRef = t), (this.componentRef = n);
        }
      }
      const ot = () => {};
      let at = (() => {
          class e {
            constructor(e) {
              this._document = e;
            }
            compensate() {
              const e = this._getWidth();
              return this._isPresent(e) ? this._adjustBody(e) : ot;
            }
            _adjustBody(e) {
              const t = this._document.body,
                n = t.style.paddingRight,
                r = parseFloat(window.getComputedStyle(t)['padding-right']);
              return (t.style['padding-right'] = r + e + 'px'), () => (t.style['padding-right'] = n);
            }
            _isPresent(e) {
              const t = this._document.body.getBoundingClientRect();
              return window.innerWidth - (t.left + t.right) >= e - 0.1 * e;
            }
            _getWidth() {
              const e = this._document.createElement('div');
              e.className = 'modal-scrollbar-measure';
              const t = this._document.body;
              t.appendChild(e);
              const n = e.getBoundingClientRect().width - e.clientWidth;
              return t.removeChild(e), n;
            }
          }
          return (
            (e.ngInjectableDef = Object(r.Mb)({
              factory: function() {
                return new e(Object(r.Nb)(f.c));
              },
              token: e,
              providedIn: 'root'
            })),
            e
          );
        })(),
        lt = (() => class {})();
      class ut {
        close(e) {}
        dismiss(e) {}
      }
      class ct {
        constructor(e, t, n, r) {
          (this._windowCmptRef = e),
            (this._contentRef = t),
            (this._backdropCmptRef = n),
            (this._beforeDismiss = r),
            e.instance.dismissEvent.subscribe(e => {
              this.dismiss(e);
            }),
            (this.result = new Promise((e, t) => {
              (this._resolve = e), (this._reject = t);
            })),
            this.result.then(null, () => {});
        }
        get componentInstance() {
          if (this._contentRef && this._contentRef.componentRef) return this._contentRef.componentRef.instance;
        }
        close(e) {
          this._windowCmptRef && (this._resolve(e), this._removeModalElements());
        }
        _dismiss(e) {
          this._reject(e), this._removeModalElements();
        }
        dismiss(e) {
          if (this._windowCmptRef)
            if (this._beforeDismiss) {
              const t = this._beforeDismiss();
              t && t.then
                ? t.then(
                    t => {
                      !1 !== t && this._dismiss(e);
                    },
                    () => {}
                  )
                : !1 !== t && this._dismiss(e);
            } else this._dismiss(e);
        }
        _removeModalElements() {
          const e = this._windowCmptRef.location.nativeElement;
          if ((e.parentNode.removeChild(e), this._windowCmptRef.destroy(), this._backdropCmptRef)) {
            const e = this._backdropCmptRef.location.nativeElement;
            e.parentNode.removeChild(e), this._backdropCmptRef.destroy();
          }
          this._contentRef && this._contentRef.viewRef && this._contentRef.viewRef.destroy(),
            (this._windowCmptRef = null),
            (this._backdropCmptRef = null),
            (this._contentRef = null);
        }
      }
      const ht = (function() {
        var e = { BACKDROP_CLICK: 0, ESC: 1 };
        return (e[e.BACKDROP_CLICK] = 'BACKDROP_CLICK'), (e[e.ESC] = 'ESC'), e;
      })();
      let dt = (() =>
          class {
            constructor(e, t, n) {
              (this._document = e),
                (this._elRef = t),
                (this._zone = n),
                (this._closed$ = new O.a()),
                (this.backdrop = !0),
                (this.keyboard = !0),
                (this.dismissEvent = new r.m());
            }
            dismiss(e) {
              this.dismissEvent.emit(e);
            }
            ngOnInit() {
              this._elWithFocus = this._document.activeElement;
            }
            ngAfterViewInit() {
              const { nativeElement: e } = this._elRef;
              if (
                (this._zone.runOutsideAngular(() => {
                  M(e, 'keydown')
                    .pipe(
                      Object($.a)(this._closed$),
                      Object(a.a)(e => e.which === Me.Escape && this.keyboard)
                    )
                    .subscribe(e =>
                      requestAnimationFrame(() => {
                        e.defaultPrevented || this._zone.run(() => this.dismiss(ht.ESC));
                      })
                    );
                  let t = !1;
                  M(this._dialogEl.nativeElement, 'mousedown')
                    .pipe(
                      Object($.a)(this._closed$),
                      Object(B.a)(() => (t = !1)),
                      Object(u.a)(() => M(e, 'mouseup').pipe(Object($.a)(this._closed$), Object(z.a)(1))),
                      Object(a.a)(({ target: t }) => e === t)
                    )
                    .subscribe(() => {
                      t = !0;
                    }),
                    M(e, 'click')
                      .pipe(Object($.a)(this._closed$))
                      .subscribe(({ target: n }) => {
                        !0 !== this.backdrop || e !== n || t || this._zone.run(() => this.dismiss(ht.BACKDROP_CLICK)),
                          (t = !1);
                      });
                }),
                !e.contains(document.activeElement))
              ) {
                const t = e.querySelector('[ngbAutofocus]'),
                  n = ze(e)[0];
                (t || n || e).focus();
              }
            }
            ngOnDestroy() {
              const e = this._document.body,
                t = this._elWithFocus;
              let n;
              (n = t && t.focus && e.contains(t) ? t : e),
                this._zone.runOutsideAngular(() => {
                  setTimeout(() => n.focus()), (this._elWithFocus = null);
                }),
                this._closed$.next();
            }
          })(),
        pt = (() => {
          class e {
            constructor(e, t, n, r, s, i) {
              (this._applicationRef = e),
                (this._injector = t),
                (this._document = n),
                (this._scrollBar = r),
                (this._rendererFactory = s),
                (this._ngZone = i),
                (this._activeWindowCmptHasChanged = new O.a()),
                (this._ariaHiddenValues = new Map()),
                (this._backdropAttributes = ['backdropClass']),
                (this._modalRefs = []),
                (this._windowAttributes = [
                  'ariaLabelledBy',
                  'backdrop',
                  'centered',
                  'keyboard',
                  'scrollable',
                  'size',
                  'windowClass'
                ]),
                (this._windowCmpts = []),
                this._activeWindowCmptHasChanged.subscribe(() => {
                  if (this._windowCmpts.length) {
                    const e = this._windowCmpts[this._windowCmpts.length - 1];
                    ((e, t, n, r = !1) => {
                      this._ngZone.runOutsideAngular(() => {
                        const e = M(t, 'focusin').pipe(
                          Object($.a)(n),
                          Object(l.a)(e => e.target)
                        );
                        M(t, 'keydown')
                          .pipe(
                            Object($.a)(n),
                            Object(a.a)(e => e.which === Me.Tab),
                            W(e)
                          )
                          .subscribe(([e, n]) => {
                            const [r, s] = ze(t);
                            (n !== r && n !== t) || !e.shiftKey || (s.focus(), e.preventDefault()),
                              n !== s || e.shiftKey || (r.focus(), e.preventDefault());
                          }),
                          r &&
                            M(t, 'click')
                              .pipe(
                                Object($.a)(n),
                                W(e),
                                Object(l.a)(e => e[1])
                              )
                              .subscribe(e => e.focus());
                      });
                    })(0, e.location.nativeElement, this._activeWindowCmptHasChanged),
                      this._revertAriaHidden(),
                      this._setAriaHidden(e.location.nativeElement);
                  }
                });
            }
            open(e, t, n, r) {
              const s =
                  r.container instanceof HTMLElement
                    ? r.container
                    : ae(r.container)
                    ? this._document.querySelector(r.container)
                    : this._document.body,
                i = this._rendererFactory.createRenderer(null, null),
                o = this._scrollBar.compensate(),
                a = () => {
                  this._modalRefs.length ||
                    (i.removeClass(this._document.body, 'modal-open'), this._revertAriaHidden());
                };
              if (!s)
                throw new Error(`The specified modal container "${r.container || 'body'}" was not found in the DOM.`);
              const l = new ut(),
                u = this._getContentRef(e, r.injector || t, n, l, r);
              let c = !1 !== r.backdrop ? this._attachBackdrop(e, s) : null,
                h = this._attachWindowComponent(e, s, u),
                d = new ct(h, u, c, r.beforeDismiss);
              return (
                this._registerModalRef(d),
                this._registerWindowCmpt(h),
                d.result.then(o, o),
                d.result.then(a, a),
                (l.close = e => {
                  d.close(e);
                }),
                (l.dismiss = e => {
                  d.dismiss(e);
                }),
                this._applyWindowOptions(h.instance, r),
                1 === this._modalRefs.length && i.addClass(this._document.body, 'modal-open'),
                c && c.instance && this._applyBackdropOptions(c.instance, r),
                d
              );
            }
            dismissAll(e) {
              this._modalRefs.forEach(t => t.dismiss(e));
            }
            hasOpenModals() {
              return this._modalRefs.length > 0;
            }
            _attachBackdrop(e, t) {
              let n = e.resolveComponentFactory(lt).create(this._injector);
              return this._applicationRef.attachView(n.hostView), t.appendChild(n.location.nativeElement), n;
            }
            _attachWindowComponent(e, t, n) {
              let r = e.resolveComponentFactory(dt).create(this._injector, n.nodes);
              return this._applicationRef.attachView(r.hostView), t.appendChild(r.location.nativeElement), r;
            }
            _applyWindowOptions(e, t) {
              this._windowAttributes.forEach(n => {
                ae(t[n]) && (e[n] = t[n]);
              });
            }
            _applyBackdropOptions(e, t) {
              this._backdropAttributes.forEach(n => {
                ae(t[n]) && (e[n] = t[n]);
              });
            }
            _getContentRef(e, t, n, s, i) {
              return n
                ? n instanceof r.K
                  ? this._createFromTemplateRef(n, s)
                  : 'string' == typeof n
                  ? this._createFromString(n)
                  : this._createFromComponent(e, t, n, s, i)
                : new it([]);
            }
            _createFromTemplateRef(e, t) {
              const n = e.createEmbeddedView({
                $implicit: t,
                close(e) {
                  t.close(e);
                },
                dismiss(e) {
                  t.dismiss(e);
                }
              });
              return this._applicationRef.attachView(n), new it([n.rootNodes], n);
            }
            _createFromString(e) {
              const t = this._document.createTextNode('' + e);
              return new it([[t]]);
            }
            _createFromComponent(e, t, n, s, i) {
              const o = e.resolveComponentFactory(n),
                a = r.q.create({ providers: [{ provide: ut, useValue: s }], parent: t }),
                l = o.create(a),
                u = l.location.nativeElement;
              return (
                i.scrollable && u.classList.add('component-host-scrollable'),
                this._applicationRef.attachView(l.hostView),
                new it([[u]], l.hostView, l)
              );
            }
            _setAriaHidden(e) {
              const t = e.parentElement;
              t &&
                e !== this._document.body &&
                (Array.from(t.children).forEach(t => {
                  t !== e &&
                    'SCRIPT' !== t.nodeName &&
                    (this._ariaHiddenValues.set(t, t.getAttribute('aria-hidden')),
                    t.setAttribute('aria-hidden', 'true'));
                }),
                this._setAriaHidden(t));
            }
            _revertAriaHidden() {
              this._ariaHiddenValues.forEach((e, t) => {
                e ? t.setAttribute('aria-hidden', e) : t.removeAttribute('aria-hidden');
              }),
                this._ariaHiddenValues.clear();
            }
            _registerModalRef(e) {
              const t = () => {
                const t = this._modalRefs.indexOf(e);
                t > -1 && this._modalRefs.splice(t, 1);
              };
              this._modalRefs.push(e), e.result.then(t, t);
            }
            _registerWindowCmpt(e) {
              this._windowCmpts.push(e),
                this._activeWindowCmptHasChanged.next(),
                e.onDestroy(() => {
                  const t = this._windowCmpts.indexOf(e);
                  t > -1 && (this._windowCmpts.splice(t, 1), this._activeWindowCmptHasChanged.next());
                });
            }
          }
          return (
            (e.ngInjectableDef = Object(r.Mb)({
              factory: function() {
                return new e(
                  Object(r.Nb)(r.g),
                  Object(r.Nb)(r.n),
                  Object(r.Nb)(f.c),
                  Object(r.Nb)(at),
                  Object(r.Nb)(r.D),
                  Object(r.Nb)(r.y)
                );
              },
              token: e,
              providedIn: 'root'
            })),
            e
          );
        })(),
        ft = (() => {
          class e {
            constructor(e, t, n, r) {
              (this._moduleCFR = e), (this._injector = t), (this._modalStack = n), (this._config = r);
            }
            open(e, t = {}) {
              const n = Object.assign({}, this._config, t);
              return this._modalStack.open(this._moduleCFR, this._injector, e, n);
            }
            dismissAll(e) {
              this._modalStack.dismissAll(e);
            }
            hasOpenModals() {
              return this._modalStack.hasOpenModals();
            }
          }
          return (
            (e.ngInjectableDef = Object(r.Mb)({
              factory: function() {
                return new e(Object(r.Nb)(r.j), Object(r.Nb)(r.n), Object(r.Nb)(pt), Object(r.Nb)(st));
              },
              token: e,
              providedIn: 'root'
            })),
            e
          );
        })(),
        gt = (() => class {})(),
        mt = (() => class {})(),
        bt = (() => class {})(),
        yt = (() =>
          class {
            isTitleTemplate() {
              return this.title instanceof r.K;
            }
          })(),
        vt = (() => class {})(),
        wt = (() => class {})(),
        _t = (() => class {})(),
        Ct = (() => class {})(),
        xt = (() => class {})(),
        St = (() => class {})(),
        Et = (() => class {})(),
        Ot = (() => class {})(),
        kt = (() =>
          class {
            constructor() {
              this.highlightClass = 'ngb-highlight';
            }
            ngOnChanges(e) {
              const t = ie(this.result),
                n = (Array.isArray(this.term) ? this.term : [this.term])
                  .map(e => ie(e).replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&'))
                  .filter(e => e);
              this.parts = n.length ? t.split(new RegExp(`(${n.join('|')})`, 'gmi')) : [t];
            }
          })(),
        Dt = (() =>
          class {
            constructor() {
              (this.activeIdx = 0),
                (this.focusFirst = !0),
                (this.formatter = ie),
                (this.selectEvent = new r.m()),
                (this.activeChangeEvent = new r.m());
            }
            hasActive() {
              return this.activeIdx > -1 && this.activeIdx < this.results.length;
            }
            getActive() {
              return this.results[this.activeIdx];
            }
            markActive(e) {
              (this.activeIdx = e), this._activeChanged();
            }
            next() {
              this.activeIdx === this.results.length - 1
                ? (this.activeIdx = this.focusFirst ? (this.activeIdx + 1) % this.results.length : -1)
                : this.activeIdx++,
                this._activeChanged();
            }
            prev() {
              this.activeIdx < 0
                ? (this.activeIdx = this.results.length - 1)
                : 0 === this.activeIdx
                ? (this.activeIdx = this.focusFirst ? this.results.length - 1 : -1)
                : this.activeIdx--,
                this._activeChanged();
            }
            resetActive() {
              (this.activeIdx = this.focusFirst ? 0 : -1), this._activeChanged();
            }
            select(e) {
              this.selectEvent.emit(e);
            }
            ngOnInit() {
              this.resetActive();
            }
            _activeChanged() {
              this.activeChangeEvent.emit(this.activeIdx >= 0 ? this.id + '-' + this.activeIdx : void 0);
            }
          })(),
        Tt = (() => class {})(),
        At = (() => class {})();
      var It = r.ob({ encapsulation: 2, styles: ['ngb-alert{display:block}'], data: {} });
      function jt(e) {
        return r.Ib(
          0,
          [
            (e()(),
            r.qb(
              0,
              0,
              null,
              null,
              4,
              'button',
              [
                ['aria-label', 'Close'],
                ['class', 'close'],
                ['type', 'button']
              ],
              null,
              [[null, 'click']],
              function(e, t, n) {
                var r = !0;
                return 'click' === t && (r = !1 !== e.component.closeHandler() && r), r;
              },
              null,
              null
            )),
            (e()(), r.Hb(-1, null, ['\n      '])),
            (e()(), r.qb(2, 0, null, null, 1, 'span', [['aria-hidden', 'true']], null, null, null, null, null)),
            (e()(), r.Hb(-1, null, ['\xd7'])),
            (e()(), r.Hb(-1, null, ['\n    ']))
          ],
          null,
          null
        );
      }
      function Nt(e) {
        return r.Ib(
          2,
          [
            (e()(), r.Hb(-1, null, ['\n    '])),
            r.Bb(null, 0),
            (e()(), r.Hb(-1, null, ['\n    '])),
            (e()(), r.fb(16777216, null, null, 1, null, jt)),
            r.pb(4, 16384, null, 0, f.j, [r.N, r.K], { ngIf: [0, 'ngIf'] }, null),
            (e()(), r.Hb(-1, null, ['\n    ']))
          ],
          function(e, t) {
            e(t, 4, 0, t.component.dismissible);
          },
          null
        );
      }
      function Rt(e) {
        return r.Ib(
          0,
          [
            (e()(),
            r.qb(
              0,
              0,
              null,
              null,
              1,
              'ngb-alert',
              [
                ['class', 'alert'],
                ['role', 'alert']
              ],
              [[2, 'alert-dismissible', null]],
              null,
              null,
              Nt,
              It
            )),
            r.pb(1, 638976, null, 0, he, [ce, r.C, r.k], null, null)
          ],
          function(e, t) {
            e(t, 1, 0);
          },
          function(e, t) {
            e(t, 0, 0, r.Cb(t, 1).dismissible);
          }
        );
      }
      var Pt = r.mb('ngb-alert', he, Rt, { dismissible: 'dismissible', type: 'type' }, { close: 'close' }, ['*']),
        Mt = r.ob({
          encapsulation: 2,
          styles: [
            '[ngbDatepickerDayView]{text-align:center;width:2rem;height:2rem;line-height:2rem;border-radius:.25rem;background:0 0}[ngbDatepickerDayView].outside{opacity:.5}'
          ],
          data: {}
        });
      function Lt(e) {
        return r.Ib(2, [(e()(), r.Hb(0, null, ['', '']))], null, function(e, t) {
          var n = t.component;
          e(t, 0, 0, n.i18n.getDayNumerals(n.date));
        });
      }
      var Ht = r.ob({
        encapsulation: 2,
        styles: [
          'ngb-datepicker-navigation{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}.ngb-dp-navigation-chevron{border-style:solid;border-width:.2em .2em 0 0;display:inline-block;width:.75em;height:.75em;margin-left:.25em;margin-right:.15em;-webkit-transform:rotate(-135deg);transform:rotate(-135deg)}.right .ngb-dp-navigation-chevron{-webkit-transform:rotate(45deg);transform:rotate(45deg);margin-left:.15em;margin-right:.25em}.ngb-dp-arrow{display:-ms-flexbox;display:flex;-ms-flex:1 1 auto;flex:1 1 auto;padding-right:0;padding-left:0;margin:0;width:2rem;height:2rem}.ngb-dp-arrow.right{-ms-flex-pack:end;justify-content:flex-end}.ngb-dp-arrow-btn{padding:0 .25rem;margin:0 .5rem;border:none;background-color:transparent;z-index:1}.ngb-dp-arrow-btn:focus{outline-width:1px;outline-style:auto}@media all and (-ms-high-contrast:none),(-ms-high-contrast:active){.ngb-dp-arrow-btn:focus{outline-style:solid}}.ngb-dp-month-name{font-size:larger;height:2rem;line-height:2rem;text-align:center}.ngb-dp-navigation-select{display:-ms-flexbox;display:flex;-ms-flex:1 1 9rem;flex:1 1 9rem}'
        ],
        data: {}
      });
      function Ft(e) {
        return r.Ib(
          0,
          [
            (e()(),
            r.qb(
              0,
              0,
              null,
              null,
              2,
              'ngb-datepicker-navigation-select',
              [['class', 'ngb-dp-navigation-select']],
              null,
              [[null, 'select']],
              function(e, t, n) {
                var r = !0;
                return 'select' === t && (r = !1 !== e.component.select.emit(n) && r), r;
              },
              Zt,
              Bt
            )),
            r.pb(
              1,
              8437760,
              null,
              0,
              Ke,
              [ke, r.C],
              { date: [0, 'date'], disabled: [1, 'disabled'], months: [2, 'months'], years: [3, 'years'] },
              { select: 'select' }
            ),
            (e()(), r.Hb(-1, null, ['\n    ']))
          ],
          function(e, t) {
            var n = t.component;
            e(t, 1, 0, n.date, n.disabled, n.selectBoxes.months, n.selectBoxes.years);
          },
          null
        );
      }
      function Ut(e) {
        return r.Ib(
          0,
          [(e()(), r.qb(0, 0, null, null, 0, 'div', [['class', 'ngb-dp-arrow']], null, null, null, null, null))],
          null,
          null
        );
      }
      function Vt(e) {
        return r.Ib(
          0,
          [(e()(), r.qb(0, 0, null, null, 0, 'div', [['class', 'ngb-dp-arrow']], null, null, null, null, null))],
          null,
          null
        );
      }
      function qt(e) {
        return r.Ib(
          0,
          [
            (e()(), r.Hb(-1, null, ['\n      '])),
            (e()(), r.fb(16777216, null, null, 1, null, Ut)),
            r.pb(2, 16384, null, 0, f.j, [r.N, r.K], { ngIf: [0, 'ngIf'] }, null),
            (e()(), r.Hb(-1, null, ['\n      '])),
            (e()(), r.qb(4, 0, null, null, 1, 'div', [['class', 'ngb-dp-month-name']], null, null, null, null, null)),
            (e()(), r.Hb(5, null, ['\n        ', ' ', '\n      '])),
            (e()(), r.Hb(-1, null, ['\n      '])),
            (e()(), r.fb(16777216, null, null, 1, null, Vt)),
            r.pb(8, 16384, null, 0, f.j, [r.N, r.K], { ngIf: [0, 'ngIf'] }, null),
            (e()(), r.Hb(-1, null, ['\n    ']))
          ],
          function(e, t) {
            var n = t.component;
            e(t, 2, 0, t.context.index > 0), e(t, 8, 0, t.context.index !== n.months.length - 1);
          },
          function(e, t) {
            var n = t.component;
            e(
              t,
              5,
              0,
              n.i18n.getMonthFullName(t.context.$implicit.number, t.context.$implicit.year),
              n.i18n.getYearNumerals(t.context.$implicit.year)
            );
          }
        );
      }
      function $t(e) {
        return r.Ib(
          0,
          [
            (e()(), r.fb(16777216, null, null, 1, null, qt)),
            r.pb(1, 278528, null, 0, f.i, [r.N, r.K, r.r], { ngForOf: [0, 'ngForOf'] }, null),
            (e()(), r.fb(0, null, null, 0))
          ],
          function(e, t) {
            e(t, 1, 0, t.component.months);
          },
          null
        );
      }
      function zt(e) {
        return r.Ib(
          2,
          [
            (e()(), r.Hb(-1, null, ['\n    '])),
            (e()(), r.qb(1, 0, null, null, 6, 'div', [['class', 'ngb-dp-arrow']], null, null, null, null, null)),
            (e()(), r.Hb(-1, null, ['\n      '])),
            (e()(),
            r.qb(
              3,
              0,
              null,
              null,
              3,
              'button',
              [
                ['aria-label', 'Previous month'],
                ['class', 'btn btn-link ngb-dp-arrow-btn'],
                ['title', 'Previous month'],
                ['type', 'button']
              ],
              [[8, 'disabled', 0]],
              [[null, 'click']],
              function(e, t, n) {
                var r = !0;
                return 'click' === t && (r = !1 !== e.component.onClickPrev(n) && r), r;
              },
              null,
              null
            )),
            (e()(), r.Hb(-1, null, ['\n        '])),
            (e()(),
            r.qb(5, 0, null, null, 0, 'span', [['class', 'ngb-dp-navigation-chevron']], null, null, null, null, null)),
            (e()(), r.Hb(-1, null, ['\n      '])),
            (e()(), r.Hb(-1, null, ['\n    '])),
            (e()(), r.Hb(-1, null, ['\n    '])),
            (e()(), r.fb(16777216, null, null, 1, null, Ft)),
            r.pb(10, 16384, null, 0, f.j, [r.N, r.K], { ngIf: [0, 'ngIf'] }, null),
            (e()(), r.Hb(-1, null, ['\n\n    '])),
            (e()(), r.fb(16777216, null, null, 1, null, $t)),
            r.pb(13, 16384, null, 0, f.j, [r.N, r.K], { ngIf: [0, 'ngIf'] }, null),
            (e()(), r.Hb(-1, null, ['\n    '])),
            (e()(), r.qb(15, 0, null, null, 6, 'div', [['class', 'ngb-dp-arrow right']], null, null, null, null, null)),
            (e()(), r.Hb(-1, null, ['\n      '])),
            (e()(),
            r.qb(
              17,
              0,
              null,
              null,
              3,
              'button',
              [
                ['aria-label', 'Next month'],
                ['class', 'btn btn-link ngb-dp-arrow-btn'],
                ['title', 'Next month'],
                ['type', 'button']
              ],
              [[8, 'disabled', 0]],
              [[null, 'click']],
              function(e, t, n) {
                var r = !0;
                return 'click' === t && (r = !1 !== e.component.onClickNext(n) && r), r;
              },
              null,
              null
            )),
            (e()(), r.Hb(-1, null, ['\n        '])),
            (e()(),
            r.qb(19, 0, null, null, 0, 'span', [['class', 'ngb-dp-navigation-chevron']], null, null, null, null, null)),
            (e()(), r.Hb(-1, null, ['\n      '])),
            (e()(), r.Hb(-1, null, ['\n    '])),
            (e()(), r.Hb(-1, null, ['\n    ']))
          ],
          function(e, t) {
            var n = t.component;
            e(t, 10, 0, n.showSelect), e(t, 13, 0, !n.showSelect);
          },
          function(e, t) {
            var n = t.component;
            e(t, 3, 0, n.prevDisabled), e(t, 17, 0, n.nextDisabled);
          }
        );
      }
      var Bt = r.ob({
        encapsulation: 2,
        styles: [
          'ngb-datepicker-navigation-select>.custom-select{-ms-flex:1 1 auto;flex:1 1 auto;padding:0 .5rem;font-size:.875rem;height:1.85rem}ngb-datepicker-navigation-select>.custom-select:focus{z-index:1}ngb-datepicker-navigation-select>.custom-select::-ms-value{background-color:transparent!important}'
        ],
        data: {}
      });
      function Wt(e) {
        return r.Ib(
          0,
          [
            (e()(), r.qb(0, 0, null, null, 3, 'option', [], [[1, 'aria-label', 0]], null, null, null, null)),
            r.pb(1, 147456, null, 0, w, [r.k, r.C, [8, null]], { value: [0, 'value'] }, null),
            r.pb(2, 147456, null, 0, C, [r.k, r.C, [8, null]], { value: [0, 'value'] }, null),
            (e()(), r.Hb(3, null, ['', '']))
          ],
          function(e, t) {
            e(t, 1, 0, t.context.$implicit), e(t, 2, 0, t.context.$implicit);
          },
          function(e, t) {
            var n = t.component;
            e(t, 0, 0, n.i18n.getMonthFullName(t.context.$implicit, null == n.date ? null : n.date.year)),
              e(t, 3, 0, n.i18n.getMonthShortName(t.context.$implicit, null == n.date ? null : n.date.year));
          }
        );
      }
      function Gt(e) {
        return r.Ib(
          0,
          [
            (e()(), r.qb(0, 0, null, null, 3, 'option', [], null, null, null, null, null)),
            r.pb(1, 147456, null, 0, w, [r.k, r.C, [8, null]], { value: [0, 'value'] }, null),
            r.pb(2, 147456, null, 0, C, [r.k, r.C, [8, null]], { value: [0, 'value'] }, null),
            (e()(), r.Hb(3, null, ['', '']))
          ],
          function(e, t) {
            e(t, 1, 0, t.context.$implicit), e(t, 2, 0, t.context.$implicit);
          },
          function(e, t) {
            e(t, 3, 0, t.component.i18n.getYearNumerals(t.context.$implicit));
          }
        );
      }
      function Zt(e) {
        return r.Ib(
          2,
          [
            r.Fb(402653184, 1, { monthSelect: 0 }),
            r.Fb(402653184, 2, { yearSelect: 0 }),
            (e()(), r.Hb(-1, null, ['\n    '])),
            (e()(),
            r.qb(
              3,
              0,
              [
                [1, 0],
                ['month', 1]
              ],
              null,
              4,
              'select',
              [
                ['aria-label', 'Select month'],
                ['class', 'custom-select'],
                ['title', 'Select month']
              ],
              [[8, 'disabled', 0]],
              [[null, 'change']],
              function(e, t, n) {
                var r = !0;
                return 'change' === t && (r = !1 !== e.component.changeMonth(n.target.value) && r), r;
              },
              null,
              null
            )),
            (e()(), r.Hb(-1, null, ['\n        '])),
            (e()(), r.fb(16777216, null, null, 1, null, Wt)),
            r.pb(6, 278528, null, 0, f.i, [r.N, r.K, r.r], { ngForOf: [0, 'ngForOf'] }, null),
            (e()(), r.Hb(-1, null, ['\n    '])),
            (e()(),
            r.qb(
              8,
              0,
              [
                [2, 0],
                ['year', 1]
              ],
              null,
              4,
              'select',
              [
                ['aria-label', 'Select year'],
                ['class', 'custom-select'],
                ['title', 'Select year']
              ],
              [[8, 'disabled', 0]],
              [[null, 'change']],
              function(e, t, n) {
                var r = !0;
                return 'change' === t && (r = !1 !== e.component.changeYear(n.target.value) && r), r;
              },
              null,
              null
            )),
            (e()(), r.Hb(-1, null, ['\n        '])),
            (e()(), r.fb(16777216, null, null, 1, null, Gt)),
            r.pb(11, 278528, null, 0, f.i, [r.N, r.K, r.r], { ngForOf: [0, 'ngForOf'] }, null),
            (e()(), r.Hb(-1, null, ['\n    '])),
            (e()(), r.Hb(-1, null, ['\n  ']))
          ],
          function(e, t) {
            var n = t.component;
            e(t, 6, 0, n.months), e(t, 11, 0, n.years);
          },
          function(e, t) {
            var n = t.component;
            e(t, 3, 0, n.disabled), e(t, 8, 0, n.disabled);
          }
        );
      }
      var Kt = r.ob({
        encapsulation: 2,
        styles: [
          'ngb-datepicker{border:1px solid #dfdfdf;border-radius:.25rem;display:inline-block}ngb-datepicker-month{pointer-events:auto}ngb-datepicker.dropdown-menu{padding:0}.ngb-dp-body{z-index:1050}.ngb-dp-header{border-bottom:0;border-radius:.25rem .25rem 0 0;padding-top:.25rem;background-color:#f8f9fa;background-color:var(--light)}.ngb-dp-months{display:-ms-flexbox;display:flex}.ngb-dp-month{pointer-events:none}.ngb-dp-month-name{font-size:larger;height:2rem;line-height:2rem;text-align:center;background-color:#f8f9fa;background-color:var(--light)}.ngb-dp-month+.ngb-dp-month .ngb-dp-month-name,.ngb-dp-month+.ngb-dp-month .ngb-dp-week{padding-left:1rem}.ngb-dp-month:last-child .ngb-dp-week{padding-right:.25rem}.ngb-dp-month:first-child .ngb-dp-week{padding-left:.25rem}.ngb-dp-month .ngb-dp-week:last-child{padding-bottom:.25rem}'
        ],
        data: {}
      });
      function Qt(e) {
        return r.Ib(
          0,
          [
            (e()(), r.Hb(-1, null, ['\n      '])),
            (e()(),
            r.qb(
              1,
              0,
              null,
              null,
              2,
              'div',
              [
                ['class', 'btn-light'],
                ['ngbDatepickerDayView', '']
              ],
              [
                [2, 'bg-primary', null],
                [2, 'text-white', null],
                [2, 'text-muted', null],
                [2, 'outside', null],
                [2, 'active', null]
              ],
              null,
              null,
              Lt,
              Mt
            )),
            r.pb(
              2,
              49152,
              null,
              0,
              Ze,
              [ke],
              {
                currentMonth: [0, 'currentMonth'],
                date: [1, 'date'],
                disabled: [2, 'disabled'],
                focused: [3, 'focused'],
                selected: [4, 'selected']
              },
              null
            ),
            (e()(), r.Hb(-1, null, ['\n      '])),
            (e()(), r.Hb(-1, null, ['\n    ']))
          ],
          function(e, t) {
            e(
              t,
              2,
              0,
              t.context.currentMonth,
              t.context.date,
              t.context.disabled,
              t.context.focused,
              t.context.selected
            );
          },
          function(e, t) {
            e(
              t,
              1,
              0,
              r.Cb(t, 2).selected,
              r.Cb(t, 2).selected,
              r.Cb(t, 2).isMuted(),
              r.Cb(t, 2).isMuted(),
              r.Cb(t, 2).focused
            );
          }
        );
      }
      function Yt(e) {
        return r.Ib(
          0,
          [
            (e()(), r.qb(0, 0, null, null, 1, 'div', [['class', 'ngb-dp-month-name']], null, null, null, null, null)),
            (e()(), r.Hb(1, null, ['\n          ', ' ', '\n        ']))
          ],
          null,
          function(e, t) {
            var n = t.component;
            e(
              t,
              1,
              0,
              n.i18n.getMonthFullName(t.parent.context.$implicit.number, t.parent.context.$implicit.year),
              n.i18n.getYearNumerals(t.parent.context.$implicit.year)
            );
          }
        );
      }
      function Jt(e) {
        return r.Ib(
          0,
          [
            (e()(), r.qb(0, 0, null, null, 7, 'div', [['class', 'ngb-dp-month']], null, null, null, null, null)),
            (e()(), r.Hb(-1, null, ['\n        '])),
            (e()(), r.fb(16777216, null, null, 1, null, Yt)),
            r.pb(3, 16384, null, 0, f.j, [r.N, r.K], { ngIf: [0, 'ngIf'] }, null),
            (e()(), r.Hb(-1, null, ['\n        '])),
            (e()(),
            r.qb(
              5,
              0,
              null,
              null,
              1,
              'ngb-datepicker-month',
              [['role', 'grid']],
              null,
              [[null, 'keydown']],
              function(e, t, n) {
                var s = !0;
                return 'keydown' === t && (s = !1 !== r.Cb(e, 6).onKeyDown(n) && s), s;
              },
              bn,
              an
            )),
            r.pb(6, 49152, null, 0, He, [ke, Pe, Le, Te], { month: [0, 'month'] }, null),
            (e()(), r.Hb(-1, null, ['\n      ']))
          ],
          function(e, t) {
            var n = t.component;
            e(t, 3, 0, 'none' === n.navigation || (n.displayMonths > 1 && 'select' === n.navigation)),
              e(t, 6, 0, t.context.$implicit.firstDate);
          },
          null
        );
      }
      function Xt(e) {
        return r.Ib(
          0,
          [
            (e()(), r.Hb(-1, null, ['\n      '])),
            (e()(), r.fb(16777216, null, null, 1, null, Jt)),
            r.pb(2, 278528, null, 0, f.i, [r.N, r.K, r.r], { ngForOf: [0, 'ngForOf'] }, null),
            (e()(), r.Hb(-1, null, ['\n    ']))
          ],
          function(e, t) {
            e(t, 2, 0, t.component.model.months);
          },
          null
        );
      }
      function en(e) {
        return r.Ib(
          0,
          [
            (e()(),
            r.qb(
              0,
              0,
              null,
              null,
              2,
              'ngb-datepicker-navigation',
              [],
              null,
              [
                [null, 'navigate'],
                [null, 'select']
              ],
              function(e, t, n) {
                var r = !0,
                  s = e.component;
                return (
                  'navigate' === t && (r = !1 !== s.onNavigateEvent(n) && r),
                  'select' === t && (r = !1 !== s.onNavigateDateSelect(n) && r),
                  r
                );
              },
              zt,
              Ht
            )),
            r.pb(
              1,
              49152,
              null,
              0,
              Fe,
              [ke],
              {
                date: [0, 'date'],
                disabled: [1, 'disabled'],
                months: [2, 'months'],
                showSelect: [3, 'showSelect'],
                prevDisabled: [4, 'prevDisabled'],
                nextDisabled: [5, 'nextDisabled'],
                selectBoxes: [6, 'selectBoxes']
              },
              { navigate: 'navigate', select: 'select' }
            ),
            (e()(), r.Hb(-1, null, ['\n      ']))
          ],
          function(e, t) {
            var n = t.component;
            e(
              t,
              1,
              0,
              n.model.firstDate,
              n.model.disabled,
              n.model.months,
              'select' === n.model.navigation,
              n.model.prevDisabled,
              n.model.nextDisabled,
              n.model.selectBoxes
            );
          },
          null
        );
      }
      function tn(e) {
        return r.Ib(0, [(e()(), r.fb(0, null, null, 0))], null, null);
      }
      function nn(e) {
        return r.Ib(0, [(e()(), r.fb(0, null, null, 0))], null, null);
      }
      function rn(e) {
        return r.Ib(
          2,
          [
            r.Fb(402653184, 1, { _defaultDayTemplate: 0 }),
            r.Fb(402653184, 2, { _contentEl: 0 }),
            (e()(), r.Hb(-1, null, ['\n    '])),
            (e()(),
            r.fb(
              0,
              [
                [1, 2],
                ['defaultDayTemplate', 2]
              ],
              null,
              0,
              null,
              Qt
            )),
            (e()(), r.Hb(-1, null, ['\n\n    '])),
            (e()(), r.fb(0, [['defaultContentTemplate', 2]], null, 0, null, Xt)),
            (e()(), r.Hb(-1, null, ['\n\n    '])),
            (e()(), r.qb(7, 0, null, null, 4, 'div', [['class', 'ngb-dp-header']], null, null, null, null, null)),
            (e()(), r.Hb(-1, null, ['\n      '])),
            (e()(), r.fb(16777216, null, null, 1, null, en)),
            r.pb(10, 16384, null, 0, f.j, [r.N, r.K], { ngIf: [0, 'ngIf'] }, null),
            (e()(), r.Hb(-1, null, ['\n    '])),
            (e()(), r.Hb(-1, null, ['\n\n    '])),
            (e()(),
            r.qb(
              13,
              0,
              [
                [2, 0],
                ['content', 1]
              ],
              null,
              4,
              'div',
              [['class', 'ngb-dp-content']],
              [[2, 'ngb-dp-months', null]],
              null,
              null,
              null,
              null
            )),
            (e()(), r.Hb(-1, null, ['\n      '])),
            (e()(), r.fb(16777216, null, null, 1, null, tn)),
            r.pb(16, 540672, null, 0, f.m, [r.N], { ngTemplateOutlet: [0, 'ngTemplateOutlet'] }, null),
            (e()(), r.Hb(-1, null, ['\n    '])),
            (e()(), r.Hb(-1, null, ['\n\n    '])),
            (e()(), r.fb(16777216, null, null, 1, null, nn)),
            r.pb(20, 540672, null, 0, f.m, [r.N], { ngTemplateOutlet: [0, 'ngTemplateOutlet'] }, null),
            (e()(), r.Hb(-1, null, ['\n  ']))
          ],
          function(e, t) {
            var n = t.component;
            e(t, 10, 0, 'none' !== n.navigation),
              e(t, 16, 0, (null == n.contentTemplate ? null : n.contentTemplate.templateRef) || r.Cb(t, 5)),
              e(t, 20, 0, n.footerTemplate);
          },
          function(e, t) {
            e(t, 13, 0, !t.component.contentTemplate);
          }
        );
      }
      function sn(e) {
        return r.Ib(
          0,
          [
            (e()(), r.qb(0, 0, null, null, 4, 'ngb-datepicker', [], null, null, null, rn, Kt)),
            r.Eb(
              5120,
              null,
              y,
              function(e) {
                return [e];
              },
              [Pe]
            ),
            r.Eb(512, null, Te, Te, [_e, ke]),
            r.pb(3, 4964352, null, 1, Pe, [Te, _e, ke, Ie, r.h, r.k, Ne, r.y], null, null),
            r.Fb(335544320, 1, { contentTemplate: 0 })
          ],
          function(e, t) {
            e(t, 3, 0);
          },
          null
        );
      }
      var on = r.mb(
          'ngb-datepicker',
          Pe,
          sn,
          {
            dayTemplate: 'dayTemplate',
            dayTemplateData: 'dayTemplateData',
            displayMonths: 'displayMonths',
            firstDayOfWeek: 'firstDayOfWeek',
            footerTemplate: 'footerTemplate',
            markDisabled: 'markDisabled',
            maxDate: 'maxDate',
            minDate: 'minDate',
            navigation: 'navigation',
            outsideDays: 'outsideDays',
            showWeekdays: 'showWeekdays',
            showWeekNumbers: 'showWeekNumbers',
            startDate: 'startDate'
          },
          { navigate: 'navigate', dateSelect: 'dateSelect', select: 'select' },
          []
        ),
        an = r.ob({
          encapsulation: 2,
          styles: [
            'ngb-datepicker-month{display:block}.ngb-dp-week-number,.ngb-dp-weekday{line-height:2rem;text-align:center;font-style:italic}.ngb-dp-weekday{color:#5bc0de;color:var(--info)}.ngb-dp-week{border-radius:.25rem;display:-ms-flexbox;display:flex}.ngb-dp-weekdays{border-bottom:1px solid rgba(0,0,0,.125);border-radius:0;background-color:#f8f9fa;background-color:var(--light)}.ngb-dp-day,.ngb-dp-week-number,.ngb-dp-weekday{width:2rem;height:2rem}.ngb-dp-day{cursor:pointer}.ngb-dp-day.disabled,.ngb-dp-day.hidden{cursor:default}.ngb-dp-day[tabindex="0"]{z-index:1}'
          ],
          data: {}
        });
      function ln(e) {
        return r.Ib(
          0,
          [
            (e()(),
            r.qb(
              0,
              0,
              null,
              null,
              0,
              'div',
              [['class', 'ngb-dp-weekday ngb-dp-showweek']],
              null,
              null,
              null,
              null,
              null
            ))
          ],
          null,
          null
        );
      }
      function un(e) {
        return r.Ib(
          0,
          [
            (e()(),
            r.qb(
              0,
              0,
              null,
              null,
              1,
              'div',
              [
                ['class', 'ngb-dp-weekday small'],
                ['role', 'columnheader']
              ],
              null,
              null,
              null,
              null,
              null
            )),
            (e()(), r.Hb(1, null, ['\n        ', '\n      ']))
          ],
          null,
          function(e, t) {
            e(t, 1, 0, t.component.i18n.getWeekdayShortName(t.context.$implicit));
          }
        );
      }
      function cn(e) {
        return r.Ib(
          0,
          [
            (e()(),
            r.qb(
              0,
              0,
              null,
              null,
              7,
              'div',
              [
                ['class', 'ngb-dp-week ngb-dp-weekdays'],
                ['role', 'row']
              ],
              null,
              null,
              null,
              null,
              null
            )),
            (e()(), r.Hb(-1, null, ['\n      '])),
            (e()(), r.fb(16777216, null, null, 1, null, ln)),
            r.pb(3, 16384, null, 0, f.j, [r.N, r.K], { ngIf: [0, 'ngIf'] }, null),
            (e()(), r.Hb(-1, null, ['\n      '])),
            (e()(), r.fb(16777216, null, null, 1, null, un)),
            r.pb(6, 278528, null, 0, f.i, [r.N, r.K, r.r], { ngForOf: [0, 'ngForOf'] }, null),
            (e()(), r.Hb(-1, null, ['\n    ']))
          ],
          function(e, t) {
            var n = t.component;
            e(t, 3, 0, n.datepicker.showWeekNumbers), e(t, 6, 0, n.viewModel.weekdays);
          },
          null
        );
      }
      function hn(e) {
        return r.Ib(
          0,
          [
            (e()(),
            r.qb(
              0,
              0,
              null,
              null,
              1,
              'div',
              [['class', 'ngb-dp-week-number small text-muted']],
              null,
              null,
              null,
              null,
              null
            )),
            (e()(), r.Hb(1, null, ['', '']))
          ],
          null,
          function(e, t) {
            e(t, 1, 0, t.component.i18n.getWeekNumerals(t.parent.parent.context.$implicit.number));
          }
        );
      }
      function dn(e) {
        return r.Ib(0, [(e()(), r.fb(0, null, null, 0))], null, null);
      }
      function pn(e) {
        return r.Ib(
          0,
          [
            (e()(), r.Hb(-1, null, ['\n            '])),
            (e()(), r.fb(16777216, null, null, 1, null, dn)),
            r.pb(
              2,
              540672,
              null,
              0,
              f.m,
              [r.N],
              { ngTemplateOutletContext: [0, 'ngTemplateOutletContext'], ngTemplateOutlet: [1, 'ngTemplateOutlet'] },
              null
            ),
            (e()(), r.Hb(-1, null, ['\n          ']))
          ],
          function(e, t) {
            e(t, 2, 0, t.parent.context.$implicit.context, t.component.datepicker.dayTemplate);
          },
          null
        );
      }
      function fn(e) {
        return r.Ib(
          0,
          [
            (e()(),
            r.qb(
              0,
              0,
              null,
              null,
              4,
              'div',
              [
                ['class', 'ngb-dp-day'],
                ['role', 'gridcell']
              ],
              [
                [2, 'disabled', null],
                [8, 'tabIndex', 0],
                [2, 'hidden', null],
                [2, 'ngb-dp-today', null],
                [1, 'aria-label', 0]
              ],
              [[null, 'click']],
              function(e, t, n) {
                var r = !0;
                return (
                  'click' === t && (e.component.doSelect(e.context.$implicit), (r = !1 !== n.preventDefault() && r)), r
                );
              },
              null,
              null
            )),
            (e()(), r.Hb(-1, null, ['\n          '])),
            (e()(), r.fb(16777216, null, null, 1, null, pn)),
            r.pb(3, 16384, null, 0, f.j, [r.N, r.K], { ngIf: [0, 'ngIf'] }, null),
            (e()(), r.Hb(-1, null, ['\n        ']))
          ],
          function(e, t) {
            e(t, 3, 0, !t.context.$implicit.hidden);
          },
          function(e, t) {
            e(
              t,
              0,
              0,
              t.context.$implicit.context.disabled,
              t.context.$implicit.tabindex,
              t.context.$implicit.hidden,
              t.context.$implicit.context.today,
              t.context.$implicit.ariaLabel
            );
          }
        );
      }
      function gn(e) {
        return r.Ib(
          0,
          [
            (e()(),
            r.qb(
              0,
              0,
              null,
              null,
              7,
              'div',
              [
                ['class', 'ngb-dp-week'],
                ['role', 'row']
              ],
              null,
              null,
              null,
              null,
              null
            )),
            (e()(), r.Hb(-1, null, ['\n        '])),
            (e()(), r.fb(16777216, null, null, 1, null, hn)),
            r.pb(3, 16384, null, 0, f.j, [r.N, r.K], { ngIf: [0, 'ngIf'] }, null),
            (e()(), r.Hb(-1, null, ['\n        '])),
            (e()(), r.fb(16777216, null, null, 1, null, fn)),
            r.pb(6, 278528, null, 0, f.i, [r.N, r.K, r.r], { ngForOf: [0, 'ngForOf'] }, null),
            (e()(), r.Hb(-1, null, ['\n      ']))
          ],
          function(e, t) {
            e(t, 3, 0, t.component.datepicker.showWeekNumbers), e(t, 6, 0, t.parent.context.$implicit.days);
          },
          null
        );
      }
      function mn(e) {
        return r.Ib(
          0,
          [
            (e()(), r.Hb(-1, null, ['\n      '])),
            (e()(), r.fb(16777216, null, null, 1, null, gn)),
            r.pb(2, 16384, null, 0, f.j, [r.N, r.K], { ngIf: [0, 'ngIf'] }, null),
            (e()(), r.Hb(-1, null, ['\n    ']))
          ],
          function(e, t) {
            e(t, 2, 0, !t.context.$implicit.collapsed);
          },
          null
        );
      }
      function bn(e) {
        return r.Ib(
          0,
          [
            (e()(), r.Hb(-1, null, ['\n    '])),
            (e()(), r.fb(16777216, null, null, 1, null, cn)),
            r.pb(2, 16384, null, 0, f.j, [r.N, r.K], { ngIf: [0, 'ngIf'] }, null),
            (e()(), r.Hb(-1, null, ['\n    '])),
            (e()(), r.fb(16777216, null, null, 1, null, mn)),
            r.pb(5, 278528, null, 0, f.i, [r.N, r.K, r.r], { ngForOf: [0, 'ngForOf'] }, null),
            (e()(), r.Hb(-1, null, ['\n  ']))
          ],
          function(e, t) {
            var n = t.component;
            e(t, 2, 0, n.datepicker.showWeekdays), e(t, 5, 0, n.viewModel.weeks);
          },
          null
        );
      }
      var yn = r.ob({
        encapsulation: 2,
        styles: [
          'ngb-popover-window.bs-popover-bottom>.arrow,ngb-popover-window.bs-popover-top>.arrow{left:50%;margin-left:-.5rem}ngb-popover-window.bs-popover-bottom-left>.arrow,ngb-popover-window.bs-popover-top-left>.arrow{left:2em}ngb-popover-window.bs-popover-bottom-right>.arrow,ngb-popover-window.bs-popover-top-right>.arrow{left:auto;right:2em}ngb-popover-window.bs-popover-left>.arrow,ngb-popover-window.bs-popover-right>.arrow{top:50%;margin-top:-.5rem}ngb-popover-window.bs-popover-left-top>.arrow,ngb-popover-window.bs-popover-right-top>.arrow{top:.7em}ngb-popover-window.bs-popover-left-bottom>.arrow,ngb-popover-window.bs-popover-right-bottom>.arrow{top:auto;bottom:.7em}'
        ],
        data: {}
      });
      function vn(e) {
        return r.Ib(0, [(e()(), r.Hb(0, null, ['', '']))], null, function(e, t) {
          e(t, 0, 0, t.component.title);
        });
      }
      function wn(e) {
        return r.Ib(0, [(e()(), r.fb(0, null, null, 0))], null, null);
      }
      function _n(e) {
        return r.Ib(
          0,
          [
            (e()(), r.qb(0, 0, null, null, 6, 'h3', [['class', 'popover-header']], null, null, null, null, null)),
            (e()(), r.Hb(-1, null, ['\n      '])),
            (e()(), r.fb(0, [['simpleTitle', 2]], null, 0, null, vn)),
            (e()(), r.Hb(-1, null, ['\n      '])),
            (e()(), r.fb(16777216, null, null, 1, null, wn)),
            r.pb(
              5,
              540672,
              null,
              0,
              f.m,
              [r.N],
              { ngTemplateOutletContext: [0, 'ngTemplateOutletContext'], ngTemplateOutlet: [1, 'ngTemplateOutlet'] },
              null
            ),
            (e()(), r.Hb(-1, null, ['\n    ']))
          ],
          function(e, t) {
            var n = t.component;
            e(t, 5, 0, n.context, n.isTitleTemplate() ? n.title : r.Cb(t, 2));
          },
          null
        );
      }
      function Cn(e) {
        return r.Ib(
          2,
          [
            (e()(), r.Hb(-1, null, ['\n    '])),
            (e()(), r.qb(1, 0, null, null, 0, 'div', [['class', 'arrow']], null, null, null, null, null)),
            (e()(), r.Hb(-1, null, ['\n    '])),
            (e()(), r.fb(16777216, null, null, 1, null, _n)),
            r.pb(4, 16384, null, 0, f.j, [r.N, r.K], { ngIf: [0, 'ngIf'] }, null),
            (e()(), r.Hb(-1, null, ['\n    '])),
            (e()(), r.qb(6, 0, null, null, 1, 'div', [['class', 'popover-body']], null, null, null, null, null)),
            r.Bb(null, 0)
          ],
          function(e, t) {
            e(t, 4, 0, null != t.component.title);
          },
          null
        );
      }
      function xn(e) {
        return r.Ib(
          0,
          [
            (e()(),
            r.qb(
              0,
              0,
              null,
              null,
              1,
              'ngb-popover-window',
              [['role', 'tooltip']],
              [
                [8, 'className', 0],
                [8, 'id', 0]
              ],
              null,
              null,
              Cn,
              yn
            )),
            r.pb(1, 49152, null, 0, yt, [], null, null)
          ],
          null,
          function(e, t) {
            e(t, 0, 0, 'popover' + (r.Cb(t, 1).popoverClass ? ' ' + r.Cb(t, 1).popoverClass : ''), r.Cb(t, 1).id);
          }
        );
      }
      var Sn = r.mb(
          'ngb-popover-window',
          yt,
          xn,
          { title: 'title', id: 'id', popoverClass: 'popoverClass', context: 'context' },
          {},
          ['*']
        ),
        En = r.ob({
          encapsulation: 2,
          styles: [
            'ngb-tooltip-window.bs-tooltip-bottom .arrow,ngb-tooltip-window.bs-tooltip-top .arrow{left:calc(50% - .4rem)}ngb-tooltip-window.bs-tooltip-bottom-left .arrow,ngb-tooltip-window.bs-tooltip-top-left .arrow{left:1em}ngb-tooltip-window.bs-tooltip-bottom-right .arrow,ngb-tooltip-window.bs-tooltip-top-right .arrow{left:auto;right:.8rem}ngb-tooltip-window.bs-tooltip-left .arrow,ngb-tooltip-window.bs-tooltip-right .arrow{top:calc(50% - .4rem)}ngb-tooltip-window.bs-tooltip-left-top .arrow,ngb-tooltip-window.bs-tooltip-right-top .arrow{top:.4rem}ngb-tooltip-window.bs-tooltip-left-bottom .arrow,ngb-tooltip-window.bs-tooltip-right-bottom .arrow{top:auto;bottom:.4rem}'
          ],
          data: {}
        });
      function On(e) {
        return r.Ib(
          2,
          [
            (e()(), r.qb(0, 0, null, null, 0, 'div', [['class', 'arrow']], null, null, null, null, null)),
            (e()(), r.qb(1, 0, null, null, 1, 'div', [['class', 'tooltip-inner']], null, null, null, null, null)),
            r.Bb(null, 0)
          ],
          null,
          null
        );
      }
      function kn(e) {
        return r.Ib(
          0,
          [
            (e()(),
            r.qb(
              0,
              0,
              null,
              null,
              1,
              'ngb-tooltip-window',
              [['role', 'tooltip']],
              [
                [8, 'className', 0],
                [8, 'id', 0]
              ],
              null,
              null,
              On,
              En
            )),
            r.pb(1, 49152, null, 0, Et, [], null, null)
          ],
          null,
          function(e, t) {
            e(t, 0, 0, 'tooltip show' + (r.Cb(t, 1).tooltipClass ? ' ' + r.Cb(t, 1).tooltipClass : ''), r.Cb(t, 1).id);
          }
        );
      }
      var Dn = r.mb('ngb-tooltip-window', Et, kn, { id: 'id', tooltipClass: 'tooltipClass' }, {}, ['*']),
        Tn = r.ob({ encapsulation: 2, styles: [], data: {} });
      function An(e) {
        return r.Ib(
          0,
          [
            (e()(), r.Hb(-1, null, ['\n      '])),
            (e()(), r.qb(1, 0, null, null, 1, 'ngb-highlight', [], null, null, null, Un, Mn)),
            r.pb(2, 573440, null, 0, kt, [], { result: [0, 'result'], term: [1, 'term'] }, null),
            (e()(), r.Hb(-1, null, ['\n    ']))
          ],
          function(e, t) {
            var n = t.context.formatter(t.context.result);
            e(t, 2, 0, n, t.context.term);
          },
          null
        );
      }
      function In(e) {
        return r.Ib(0, [(e()(), r.fb(0, null, null, 0))], null, null);
      }
      function jn(e) {
        return r.Ib(
          0,
          [
            (e()(), r.Hb(-1, null, ['\n      '])),
            (e()(),
            r.qb(
              1,
              0,
              null,
              null,
              5,
              'button',
              [
                ['class', 'dropdown-item'],
                ['role', 'option'],
                ['type', 'button']
              ],
              [
                [8, 'id', 0],
                [2, 'active', null]
              ],
              [
                [null, 'mouseenter'],
                [null, 'click']
              ],
              function(e, t, n) {
                var r = !0,
                  s = e.component;
                return (
                  'mouseenter' === t && (r = !1 !== s.markActive(e.context.index) && r),
                  'click' === t && (r = !1 !== s.select(e.context.$implicit) && r),
                  r
                );
              },
              null,
              null
            )),
            (e()(), r.Hb(-1, null, ['\n          '])),
            (e()(), r.fb(16777216, null, null, 2, null, In)),
            r.pb(
              4,
              540672,
              null,
              0,
              f.m,
              [r.N],
              { ngTemplateOutletContext: [0, 'ngTemplateOutletContext'], ngTemplateOutlet: [1, 'ngTemplateOutlet'] },
              null
            ),
            r.Db(5, { result: 0, term: 1, formatter: 2 }),
            (e()(), r.Hb(-1, null, ['\n      '])),
            (e()(), r.Hb(-1, null, ['\n    ']))
          ],
          function(e, t) {
            var n = t.component,
              s = e(t, 5, 0, t.context.$implicit, n.term, n.formatter);
            e(t, 4, 0, s, n.resultTemplate || r.Cb(t.parent, 1));
          },
          function(e, t) {
            var n = t.component;
            e(t, 1, 0, n.id + '-' + t.context.index, t.context.index === n.activeIdx);
          }
        );
      }
      function Nn(e) {
        return r.Ib(
          0,
          [
            (e()(), r.Hb(-1, null, ['\n    '])),
            (e()(), r.fb(0, [['rt', 2]], null, 0, null, An)),
            (e()(), r.Hb(-1, null, ['\n    '])),
            (e()(), r.fb(16777216, null, null, 1, null, jn)),
            r.pb(4, 278528, null, 0, f.i, [r.N, r.K, r.r], { ngForOf: [0, 'ngForOf'] }, null),
            (e()(), r.Hb(-1, null, ['\n  ']))
          ],
          function(e, t) {
            e(t, 4, 0, t.component.results);
          },
          null
        );
      }
      function Rn(e) {
        return r.Ib(
          0,
          [
            (e()(),
            r.qb(
              0,
              0,
              null,
              null,
              1,
              'ngb-typeahead-window',
              [
                ['class', 'dropdown-menu show'],
                ['role', 'listbox']
              ],
              [[8, 'id', 0]],
              [[null, 'mousedown']],
              function(e, t, n) {
                var r = !0;
                return 'mousedown' === t && (r = !1 !== n.preventDefault() && r), r;
              },
              Nn,
              Tn
            )),
            r.pb(1, 114688, null, 0, Dt, [], null, null)
          ],
          function(e, t) {
            e(t, 1, 0);
          },
          function(e, t) {
            e(t, 0, 0, r.Cb(t, 1).id);
          }
        );
      }
      var Pn = r.mb(
          'ngb-typeahead-window',
          Dt,
          Rn,
          {
            id: 'id',
            focusFirst: 'focusFirst',
            results: 'results',
            term: 'term',
            formatter: 'formatter',
            resultTemplate: 'resultTemplate'
          },
          { selectEvent: 'select', activeChangeEvent: 'activeChange' },
          []
        ),
        Mn = r.ob({ encapsulation: 2, styles: ['.ngb-highlight{font-weight:700}'], data: {} });
      function Ln(e) {
        return r.Ib(
          0,
          [
            (e()(), r.qb(0, 0, null, null, 1, 'span', [], [[8, 'className', 0]], null, null, null, null)),
            (e()(), r.Hb(1, null, ['', '']))
          ],
          null,
          function(e, t) {
            e(t, 0, 0, t.component.highlightClass), e(t, 1, 0, t.parent.context.$implicit);
          }
        );
      }
      function Hn(e) {
        return r.Ib(0, [(e()(), r.Hb(0, null, ['', '']))], null, function(e, t) {
          e(t, 0, 0, t.parent.context.$implicit);
        });
      }
      function Fn(e) {
        return r.Ib(
          0,
          [
            (e()(), r.fb(16777216, null, null, 1, null, Ln)),
            r.pb(1, 16384, null, 0, f.j, [r.N, r.K], { ngIf: [0, 'ngIf'], ngIfElse: [1, 'ngIfElse'] }, null),
            (e()(), r.fb(0, [['even', 2]], null, 0, null, Hn))
          ],
          function(e, t) {
            e(t, 1, 0, t.context.odd, r.Cb(t, 2));
          },
          null
        );
      }
      function Un(e) {
        return r.Ib(
          2,
          [
            (e()(), r.fb(16777216, null, null, 1, null, Fn)),
            r.pb(1, 278528, null, 0, f.i, [r.N, r.K, r.r], { ngForOf: [0, 'ngForOf'] }, null)
          ],
          function(e, t) {
            e(t, 1, 0, t.component.parts);
          },
          null
        );
      }
      var Vn = r.ob({ encapsulation: 2, styles: [], data: {} });
      function qn(e) {
        return r.Ib(0, [], null, null);
      }
      function $n(e) {
        return r.Ib(
          0,
          [
            (e()(),
            r.qb(
              0,
              0,
              null,
              null,
              1,
              'ngb-modal-backdrop',
              [['style', 'z-index: 1050']],
              [[8, 'className', 0]],
              null,
              null,
              qn,
              Vn
            )),
            r.pb(1, 49152, null, 0, lt, [], null, null)
          ],
          null,
          function(e, t) {
            e(t, 0, 0, 'modal-backdrop fade show' + (r.Cb(t, 1).backdropClass ? ' ' + r.Cb(t, 1).backdropClass : ''));
          }
        );
      }
      var zn = r.mb('ngb-modal-backdrop', lt, $n, { backdropClass: 'backdropClass' }, {}, []),
        Bn = r.ob({
          encapsulation: 2,
          styles: [
            'ngb-modal-window .component-host-scrollable{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;overflow:hidden}'
          ],
          data: {}
        });
      function Wn(e) {
        return r.Ib(
          0,
          [
            r.Fb(402653184, 1, { _dialogEl: 0 }),
            (e()(), r.Hb(-1, null, ['\n    '])),
            (e()(),
            r.qb(
              2,
              0,
              [
                [1, 0],
                ['dialog', 1]
              ],
              null,
              4,
              'div',
              [['role', 'document']],
              [[8, 'className', 0]],
              null,
              null,
              null,
              null
            )),
            (e()(), r.Hb(-1, null, ['\n        '])),
            (e()(), r.qb(4, 0, null, null, 1, 'div', [['class', 'modal-content']], null, null, null, null, null)),
            r.Bb(null, 0),
            (e()(), r.Hb(-1, null, ['\n    '])),
            (e()(), r.Hb(-1, null, ['\n    ']))
          ],
          null,
          function(e, t) {
            var n = t.component;
            e(
              t,
              2,
              0,
              'modal-dialog' +
                (n.size ? ' modal-' + n.size : '') +
                (n.centered ? ' modal-dialog-centered' : '') +
                (n.scrollable ? ' modal-dialog-scrollable' : '')
            );
          }
        );
      }
      function Gn(e) {
        return r.Ib(
          0,
          [
            (e()(),
            r.qb(
              0,
              0,
              null,
              null,
              1,
              'ngb-modal-window',
              [
                ['role', 'dialog'],
                ['tabindex', '-1']
              ],
              [
                [8, 'className', 0],
                [1, 'aria-modal', 0],
                [1, 'aria-labelledby', 0]
              ],
              null,
              null,
              Wn,
              Bn
            )),
            r.pb(1, 4440064, null, 0, dt, [f.c, r.k, r.y], null, null)
          ],
          function(e, t) {
            e(t, 1, 0);
          },
          function(e, t) {
            e(
              t,
              0,
              0,
              'modal fade show d-block' + (r.Cb(t, 1).windowClass ? ' ' + r.Cb(t, 1).windowClass : ''),
              !0,
              r.Cb(t, 1).ariaLabelledBy
            );
          }
        );
      }
      var Zn = r.mb(
          'ngb-modal-window',
          dt,
          Gn,
          {
            ariaLabelledBy: 'ariaLabelledBy',
            backdrop: 'backdrop',
            centered: 'centered',
            keyboard: 'keyboard',
            scrollable: 'scrollable',
            size: 'size',
            windowClass: 'windowClass'
          },
          { dismissEvent: 'dismiss' },
          ['*']
        ),
        Kn = n('pMnS'),
        Qn = n('TSSN');
      class Yn {
        constructor(e) {
          (this.i18nService = e), (this.menuHidden = !0);
        }
        ngOnInit() {}
        toggleMenu() {
          this.menuHidden = !this.menuHidden;
        }
        setLanguage(e) {
          this.i18nService.language = e;
        }
        get currentLanguage() {
          return this.i18nService.language;
        }
        get languages() {
          return this.i18nService.supportedLanguages;
        }
      }
      var Jn = n('4WJ2'),
        Xn = r.ob({
          encapsulation: 0,
          styles: [
            [
              '.navbar[_ngcontent-%COMP%]{margin-bottom:1rem}.nav-link.dropdown-toggle[_ngcontent-%COMP%]{cursor:pointer}'
            ]
          ],
          data: {}
        });
      function er(e) {
        return r.Ib(
          0,
          [
            (e()(),
            r.qb(
              0,
              0,
              null,
              null,
              1,
              'button',
              [['class', 'dropdown-item']],
              null,
              [[null, 'click']],
              function(e, t, n) {
                var r = !0;
                return 'click' === t && (r = !1 !== e.component.setLanguage(e.context.$implicit) && r), r;
              },
              null,
              null
            )),
            (e()(), r.Hb(1, null, ['\n              ', '\n            ']))
          ],
          null,
          function(e, t) {
            e(t, 1, 0, t.context.$implicit);
          }
        );
      }
      function tr(e) {
        return r.Ib(
          0,
          [
            (e()(), r.qb(0, 0, null, null, 70, 'header', [], null, null, null, null, null)),
            (e()(), r.Hb(-1, null, ['\n  '])),
            (e()(),
            r.qb(
              2,
              0,
              null,
              null,
              67,
              'nav',
              [['class', 'navbar navbar-expand-lg navbar-dark bg-dark']],
              null,
              null,
              null,
              null,
              null
            )),
            r.pb(3, 16384, null, 0, Je, [], null, null),
            (e()(), r.Hb(-1, null, ['\n    '])),
            (e()(),
            r.qb(
              5,
              0,
              null,
              null,
              2,
              'a',
              [
                ['class', 'navbar-brand'],
                ['href', 'https://github.com/ngx-rocket'],
                ['translate', '']
              ],
              null,
              null,
              null,
              null,
              null
            )),
            r.pb(6, 8536064, null, 0, Qn.e, [Qn.k, r.k, r.h], { translate: [0, 'translate'] }, null),
            (e()(), r.Hb(-1, null, ['APP_NAME'])),
            (e()(), r.Hb(-1, null, ['\n    '])),
            (e()(),
            r.qb(
              9,
              0,
              null,
              null,
              3,
              'button',
              [
                ['aria-controls', 'navbar-menu'],
                ['aria-label', 'Toggle navigation'],
                ['class', 'navbar-toggler'],
                ['type', 'button']
              ],
              [[1, 'aria-expanded', 0]],
              [[null, 'click']],
              function(e, t, n) {
                var r = !0;
                return 'click' === t && (r = !1 !== e.component.toggleMenu() && r), r;
              },
              null,
              null
            )),
            (e()(), r.Hb(-1, null, ['\n      '])),
            (e()(),
            r.qb(11, 0, null, null, 0, 'span', [['class', 'navbar-toggler-icon']], null, null, null, null, null)),
            (e()(), r.Hb(-1, null, ['\n    '])),
            (e()(), r.Hb(-1, null, ['\n    '])),
            (e()(),
            r.qb(
              14,
              0,
              null,
              null,
              54,
              'div',
              [
                ['class', 'collapse navbar-collapse float-xs-none'],
                ['id', 'navbar-menu']
              ],
              [
                [2, 'collapse', null],
                [2, 'show', null]
              ],
              null,
              null,
              null,
              null
            )),
            r.pb(15, 16384, null, 0, ge, [], { collapsed: [0, 'collapsed'] }, null),
            (e()(), r.Hb(-1, null, ['\n      '])),
            (e()(), r.qb(17, 0, null, null, 27, 'div', [['class', 'navbar-nav']], null, null, null, null, null)),
            (e()(), r.Hb(-1, null, ['\n        '])),
            (e()(),
            r.qb(
              19,
              0,
              null,
              null,
              11,
              'a',
              [
                ['class', 'nav-item nav-link text-uppercase'],
                ['routerLink', '/home'],
                ['routerLinkActive', 'active']
              ],
              [
                [1, 'target', 0],
                [8, 'href', 4]
              ],
              [[null, 'click']],
              function(e, t, n) {
                var s = !0;
                return (
                  'click' === t && (s = !1 !== r.Cb(e, 20).onClick(n.button, n.ctrlKey, n.metaKey, n.shiftKey) && s), s
                );
              },
              null,
              null
            )),
            r.pb(20, 671744, [[2, 4]], 0, i.o, [i.l, i.a, f.h], { routerLink: [0, 'routerLink'] }, null),
            r.pb(
              21,
              1720320,
              null,
              2,
              i.n,
              [i.l, r.k, r.C, [2, i.m], [2, i.o]],
              { routerLinkActive: [0, 'routerLinkActive'] },
              null
            ),
            r.Fb(603979776, 1, { links: 1 }),
            r.Fb(603979776, 2, { linksWithHrefs: 1 }),
            (e()(), r.Hb(-1, null, ['\n          '])),
            (e()(), r.qb(25, 0, null, null, 0, 'i', [['class', 'fas fa-home']], null, null, null, null, null)),
            (e()(), r.Hb(-1, null, ['\n          '])),
            (e()(), r.qb(27, 0, null, null, 2, 'span', [['translate', '']], null, null, null, null, null)),
            r.pb(28, 8536064, null, 0, Qn.e, [Qn.k, r.k, r.h], { translate: [0, 'translate'] }, null),
            (e()(), r.Hb(-1, null, ['Home'])),
            (e()(), r.Hb(-1, null, ['\n        '])),
            (e()(), r.Hb(-1, null, ['\n        '])),
            (e()(),
            r.qb(
              32,
              0,
              null,
              null,
              11,
              'a',
              [
                ['class', 'nav-item nav-link text-uppercase'],
                ['routerLink', '/about'],
                ['routerLinkActive', 'active']
              ],
              [
                [1, 'target', 0],
                [8, 'href', 4]
              ],
              [[null, 'click']],
              function(e, t, n) {
                var s = !0;
                return (
                  'click' === t && (s = !1 !== r.Cb(e, 33).onClick(n.button, n.ctrlKey, n.metaKey, n.shiftKey) && s), s
                );
              },
              null,
              null
            )),
            r.pb(33, 671744, [[4, 4]], 0, i.o, [i.l, i.a, f.h], { routerLink: [0, 'routerLink'] }, null),
            r.pb(
              34,
              1720320,
              null,
              2,
              i.n,
              [i.l, r.k, r.C, [2, i.m], [2, i.o]],
              { routerLinkActive: [0, 'routerLinkActive'] },
              null
            ),
            r.Fb(603979776, 3, { links: 1 }),
            r.Fb(603979776, 4, { linksWithHrefs: 1 }),
            (e()(), r.Hb(-1, null, ['\n          '])),
            (e()(),
            r.qb(38, 0, null, null, 0, 'i', [['class', 'fas fa-question-circle']], null, null, null, null, null)),
            (e()(), r.Hb(-1, null, ['\n          '])),
            (e()(), r.qb(40, 0, null, null, 2, 'span', [['translate', '']], null, null, null, null, null)),
            r.pb(41, 8536064, null, 0, Qn.e, [Qn.k, r.k, r.h], { translate: [0, 'translate'] }, null),
            (e()(), r.Hb(-1, null, ['About'])),
            (e()(), r.Hb(-1, null, ['\n        '])),
            (e()(), r.Hb(-1, null, ['\n      '])),
            (e()(), r.Hb(-1, null, ['\n      '])),
            (e()(),
            r.qb(46, 0, null, null, 21, 'div', [['class', 'navbar-nav ml-auto']], null, null, null, null, null)),
            (e()(), r.Hb(-1, null, ['\n        '])),
            (e()(),
            r.qb(
              48,
              0,
              null,
              null,
              18,
              'div',
              [
                ['class', 'nav-item'],
                ['display', 'dynamic'],
                ['ngbDropdown', ''],
                ['placement', 'bottom-right']
              ],
              [[2, 'show', null]],
              null,
              null,
              null,
              null
            )),
            r.pb(
              49,
              1720320,
              null,
              3,
              nt,
              [r.h, Ye, f.c, r.y, r.k, r.C, [2, Je]],
              { placement: [0, 'placement'], display: [1, 'display'] },
              null
            ),
            r.Fb(603979776, 5, { _menu: 0 }),
            r.Fb(603979776, 6, { _menuElement: 0 }),
            r.Fb(603979776, 7, { _anchor: 0 }),
            (e()(), r.Hb(-1, null, ['\n          '])),
            (e()(),
            r.qb(
              54,
              0,
              null,
              null,
              3,
              'a',
              [
                ['aria-haspopup', 'true'],
                ['class', 'nav-link dropdown-toggle'],
                ['id', 'language-dropdown'],
                ['ngbDropdownToggle', '']
              ],
              [[1, 'aria-expanded', 0]],
              [
                [null, 'click'],
                [null, 'keydown.ArrowUp'],
                [null, 'keydown.ArrowDown'],
                [null, 'keydown.Home'],
                [null, 'keydown.End']
              ],
              function(e, t, n) {
                var s = !0;
                return (
                  'click' === t && (s = !1 !== r.Cb(e, 55).dropdown.toggle() && s),
                  'keydown.ArrowUp' === t && (s = !1 !== r.Cb(e, 55).dropdown.onKeyDown(n) && s),
                  'keydown.ArrowDown' === t && (s = !1 !== r.Cb(e, 55).dropdown.onKeyDown(n) && s),
                  'keydown.Home' === t && (s = !1 !== r.Cb(e, 55).dropdown.onKeyDown(n) && s),
                  'keydown.End' === t && (s = !1 !== r.Cb(e, 55).dropdown.onKeyDown(n) && s),
                  s
                );
              },
              null,
              null
            )),
            r.pb(55, 16384, null, 0, tt, [nt, r.k], null, null),
            r.Eb(2048, [[7, 4]], et, null, [tt]),
            (e()(), r.Hb(57, null, ['', ''])),
            (e()(), r.Hb(-1, null, ['\n          '])),
            (e()(),
            r.qb(
              59,
              0,
              [[6, 0]],
              null,
              6,
              'div',
              [
                ['aria-labelledby', 'language-dropdown'],
                ['ngbDropdownMenu', '']
              ],
              [
                [2, 'dropdown-menu', null],
                [2, 'show', null],
                [1, 'x-placement', 0]
              ],
              [
                [null, 'keydown.ArrowUp'],
                [null, 'keydown.ArrowDown'],
                [null, 'keydown.Home'],
                [null, 'keydown.End'],
                [null, 'keydown.Enter'],
                [null, 'keydown.Space']
              ],
              function(e, t, n) {
                var s = !0;
                return (
                  'keydown.ArrowUp' === t && (s = !1 !== r.Cb(e, 60).dropdown.onKeyDown(n) && s),
                  'keydown.ArrowDown' === t && (s = !1 !== r.Cb(e, 60).dropdown.onKeyDown(n) && s),
                  'keydown.Home' === t && (s = !1 !== r.Cb(e, 60).dropdown.onKeyDown(n) && s),
                  'keydown.End' === t && (s = !1 !== r.Cb(e, 60).dropdown.onKeyDown(n) && s),
                  'keydown.Enter' === t && (s = !1 !== r.Cb(e, 60).dropdown.onKeyDown(n) && s),
                  'keydown.Space' === t && (s = !1 !== r.Cb(e, 60).dropdown.onKeyDown(n) && s),
                  s
                );
              },
              null,
              null
            )),
            r.pb(60, 16384, [[5, 4]], 1, Xe, [nt], null, null),
            r.Fb(603979776, 8, { menuItems: 1 }),
            (e()(), r.Hb(-1, null, ['\n            '])),
            (e()(), r.fb(16777216, null, null, 1, null, er)),
            r.pb(64, 278528, null, 0, f.i, [r.N, r.K, r.r], { ngForOf: [0, 'ngForOf'] }, null),
            (e()(), r.Hb(-1, null, ['\n          '])),
            (e()(), r.Hb(-1, null, ['\n        '])),
            (e()(), r.Hb(-1, null, ['\n      '])),
            (e()(), r.Hb(-1, null, ['\n    '])),
            (e()(), r.Hb(-1, null, ['\n  '])),
            (e()(), r.Hb(-1, null, ['\n'])),
            (e()(), r.Hb(-1, null, ['\n']))
          ],
          function(e, t) {
            var n = t.component;
            e(t, 6, 0, ''),
              e(t, 15, 0, n.menuHidden),
              e(t, 20, 0, '/home'),
              e(t, 21, 0, 'active'),
              e(t, 28, 0, ''),
              e(t, 33, 0, '/about'),
              e(t, 34, 0, 'active'),
              e(t, 41, 0, ''),
              e(t, 49, 0, 'bottom-right', 'dynamic'),
              e(t, 64, 0, n.languages);
          },
          function(e, t) {
            var n = t.component;
            e(t, 9, 0, !n.menuHidden),
              e(t, 14, 0, !0, !r.Cb(t, 15).collapsed),
              e(t, 19, 0, r.Cb(t, 20).target, r.Cb(t, 20).href),
              e(t, 32, 0, r.Cb(t, 33).target, r.Cb(t, 33).href),
              e(t, 48, 0, r.Cb(t, 49).isOpen()),
              e(t, 54, 0, r.Cb(t, 55).dropdown.isOpen()),
              e(t, 57, 0, n.currentLanguage),
              e(t, 59, 0, !0, r.Cb(t, 60).dropdown.isOpen(), r.Cb(t, 60).placement);
          }
        );
      }
      class nr {
        constructor() {}
        ngOnInit() {}
      }
      var rr = r.ob({ encapsulation: 0, styles: [['']], data: {} });
      function sr(e) {
        return r.Ib(
          0,
          [
            (e()(), r.qb(0, 0, null, null, 1, 'app-header', [], null, null, null, tr, Xn)),
            r.pb(1, 114688, null, 0, Yn, [Jn.a], null, null),
            (e()(), r.Hb(-1, null, ['\n'])),
            (e()(), r.qb(3, 16777216, null, null, 1, 'router-outlet', [], null, null, null, null, null)),
            r.pb(4, 212992, null, 0, i.q, [i.b, r.N, r.j, [8, null], r.h], null, null),
            (e()(), r.Hb(-1, null, ['\n']))
          ],
          function(e, t) {
            e(t, 1, 0), e(t, 4, 0);
          },
          null
        );
      }
      function ir(e) {
        return r.Ib(
          0,
          [
            (e()(), r.qb(0, 0, null, null, 1, 'app-shell', [], null, null, null, sr, rr)),
            r.pb(1, 114688, null, 0, nr, [], null, null)
          ],
          function(e, t) {
            e(t, 1, 0);
          },
          null
        );
      }
      var or = r.mb('app-shell', nr, ir, {}, {}, []);
      class ar {
        constructor() {
          this.isLoading = !1;
        }
        ngOnInit() {}
      }
      var lr = r.ob({ encapsulation: 0, styles: [['.fa[_ngcontent-%COMP%]{vertical-align:middle}']], data: {} });
      function ur(e) {
        return r.Ib(
          0,
          [
            (e()(),
            r.qb(
              0,
              0,
              null,
              null,
              6,
              'div',
              [['class', 'text-xs-center']],
              [[8, 'hidden', 0]],
              null,
              null,
              null,
              null
            )),
            (e()(), r.Hb(-1, null, ['\n  '])),
            (e()(),
            r.qb(2, 0, null, null, 0, 'i', [['class', 'fas fa-cog fa-spin fa-3x']], null, null, null, null, null)),
            (e()(), r.Hb(-1, null, [' '])),
            (e()(), r.qb(4, 0, null, null, 1, 'span', [], null, null, null, null, null)),
            (e()(), r.Hb(5, null, ['', ''])),
            (e()(), r.Hb(-1, null, ['\n'])),
            (e()(), r.Hb(-1, null, ['\n']))
          ],
          null,
          function(e, t) {
            var n = t.component;
            e(t, 0, 0, !n.isLoading), e(t, 5, 0, n.message);
          }
        );
      }
      var cr = n('nYR2'),
        hr = n('JIr8'),
        dr = n('IheW');
      let pr = (() => {
        class e {
          constructor(e) {
            this.httpClient = e;
          }
          getRandomQuote(e) {
            return this.httpClient
              .cache()
              .get(((t = e), '/jokes/random?category=' + t.category))
              .pipe(
                Object(l.a)(e => e.value),
                Object(hr.a)(() => Object(Q.a)('Error, could not load joke :-('))
              );
            var t;
          }
        }
        return (
          (e.ngInjectableDef = r.Mb({
            factory: function() {
              return new e(r.Nb(dr.c));
            },
            token: e,
            providedIn: 'root'
          })),
          e
        );
      })();
      class fr {
        constructor(e) {
          (this.quoteService = e), (this.isLoading = !1);
        }
        ngOnInit() {
          (this.isLoading = !0),
            this.quoteService
              .getRandomQuote({ category: 'dev' })
              .pipe(
                Object(cr.a)(() => {
                  this.isLoading = !1;
                })
              )
              .subscribe(e => {
                this.quote = e;
              });
        }
      }
      var gr = r.ob({
        encapsulation: 0,
        styles: [
          [
            '@charset "UTF-8";.logo[_ngcontent-%COMP%]{width:100px}q[_ngcontent-%COMP%]{font-style:italic;font-size:1.2rem;quotes:"\xab " " \xbb"}'
          ]
        ],
        data: {}
      });
      function mr(e) {
        return r.Ib(
          0,
          [
            (e()(), r.qb(0, 0, null, null, 19, 'div', [['class', 'container-fluid']], null, null, null, null, null)),
            (e()(), r.Hb(-1, null, ['\n  '])),
            (e()(),
            r.qb(2, 0, null, null, 16, 'div', [['class', 'jumbotron text-center']], null, null, null, null, null)),
            (e()(), r.Hb(-1, null, ['\n    '])),
            (e()(), r.qb(4, 0, null, null, 7, 'h1', [], null, null, null, null, null)),
            (e()(), r.Hb(-1, null, ['\n      '])),
            (e()(),
            r.qb(
              6,
              0,
              null,
              null,
              0,
              'img',
              [
                ['alt', 'angular logo'],
                ['class', 'logo'],
                ['src', 'assets/ngx-rocket-logo.png']
              ],
              null,
              null,
              null,
              null,
              null
            )),
            (e()(), r.Hb(-1, null, ['\n      '])),
            (e()(), r.qb(8, 0, null, null, 2, 'span', [['translate', '']], null, null, null, null, null)),
            r.pb(9, 8536064, null, 0, Qn.e, [Qn.k, r.k, r.h], { translate: [0, 'translate'] }, null),
            (e()(), r.Hb(-1, null, ['Hello world !'])),
            (e()(), r.Hb(-1, null, ['\n    '])),
            (e()(), r.Hb(-1, null, ['\n    '])),
            (e()(), r.qb(13, 0, null, null, 1, 'app-loader', [], null, null, null, ur, lr)),
            r.pb(14, 114688, null, 0, ar, [], { isLoading: [0, 'isLoading'] }, null),
            (e()(), r.Hb(-1, null, ['\n    '])),
            (e()(), r.qb(16, 0, null, null, 1, 'q', [], [[8, 'hidden', 0]], null, null, null, null)),
            (e()(), r.Hb(17, null, ['', ''])),
            (e()(), r.Hb(-1, null, ['\n  '])),
            (e()(), r.Hb(-1, null, ['\n'])),
            (e()(), r.Hb(-1, null, ['\n']))
          ],
          function(e, t) {
            var n = t.component;
            e(t, 9, 0, ''), e(t, 14, 0, n.isLoading);
          },
          function(e, t) {
            var n = t.component;
            e(t, 16, 0, n.isLoading), e(t, 17, 0, n.quote);
          }
        );
      }
      function br(e) {
        return r.Ib(
          0,
          [
            (e()(), r.qb(0, 0, null, null, 1, 'app-home', [], null, null, null, mr, gr)),
            r.pb(1, 114688, null, 0, fr, [pr], null, null)
          ],
          function(e, t) {
            e(t, 1, 0);
          },
          null
        );
      }
      var yr = r.mb('app-home', fr, br, {}, {}, []),
        vr = r.ob({ encapsulation: 0, styles: [['']], data: {} });
      function wr(e) {
        return r.Ib(
          0,
          [
            (e()(), r.qb(0, 16777216, null, null, 1, 'router-outlet', [], null, null, null, null, null)),
            r.pb(1, 212992, null, 0, i.q, [i.b, r.N, r.j, [8, null], r.h], null, null),
            (e()(), r.Hb(-1, null, ['\n']))
          ],
          function(e, t) {
            e(t, 1, 0);
          },
          null
        );
      }
      function _r(e) {
        return r.Ib(
          0,
          [
            (e()(), r.qb(0, 0, null, null, 1, 'app-root', [], null, null, null, wr, vr)),
            r.pb(1, 245760, null, 0, p, [i.l, i.a, g.h, Qn.k, Jn.a], null, null)
          ],
          function(e, t) {
            e(t, 1, 0);
          },
          null
        );
      }
      var Cr = r.mb('app-root', p, _r, {}, {}, []),
        xr = n('NXyV'),
        Sr = n('GyhO'),
        Er = n('oB13');
      const Or = 'Service workers are disabled or not supported by this browser';
      class kr {
        constructor(e) {
          if (((this.serviceWorker = e), e)) {
            const t = M(e, 'controllerchange').pipe(Object(l.a)(() => e.controller)),
              n = Object(xr.a)(() => Object(Q.a)(e.controller)),
              r = Object(Sr.a)(n, t);
            (this.worker = r.pipe(Object(a.a)(e => !!e))),
              (this.registration = this.worker.pipe(Object(u.a)(() => e.getRegistration())));
            const s = M(e, 'message')
              .pipe(Object(l.a)(e => e.data))
              .pipe(Object(a.a)(e => e && e.type))
              .pipe(Object(Er.a)(new O.a()));
            s.connect(), (this.events = s);
          } else
            this.worker = this.events = this.registration = Object(xr.a)(() =>
              Y(new Error('Service workers are disabled or not supported by this browser'))
            );
        }
        postMessage(e, t) {
          return this.worker
            .pipe(
              Object(z.a)(1),
              Object(B.a)(n => {
                n.postMessage(Object.assign({ action: e }, t));
              })
            )
            .toPromise()
            .then(() => {});
        }
        postMessageWithStatus(e, t, n) {
          const r = this.waitForStatus(n),
            s = this.postMessage(e, t);
          return Promise.all([r, s]).then(() => {});
        }
        generateNonce() {
          return Math.round(1e7 * Math.random());
        }
        eventsOfType(e) {
          return this.events.pipe(Object(a.a)(t => t.type === e));
        }
        nextEventOfType(e) {
          return this.eventsOfType(e).pipe(Object(z.a)(1));
        }
        waitForStatus(e) {
          return this.eventsOfType('STATUS')
            .pipe(
              Object(a.a)(t => t.nonce === e),
              Object(z.a)(1),
              Object(l.a)(e => {
                if (!e.status) throw new Error(e.error);
              })
            )
            .toPromise();
        }
        get isEnabled() {
          return !!this.serviceWorker;
        }
      }
      let Dr = (() =>
          class {
            constructor(e) {
              if (((this.sw = e), (this.subscriptionChanges = new O.a()), !e.isEnabled))
                return (this.messages = R), (this.notificationClicks = R), void (this.subscription = R);
              (this.messages = this.sw.eventsOfType('PUSH').pipe(Object(l.a)(e => e.data))),
                (this.notificationClicks = this.sw.eventsOfType('NOTIFICATION_CLICK').pipe(Object(l.a)(e => e.data))),
                (this.pushManager = this.sw.registration.pipe(Object(l.a)(e => e.pushManager)));
              const t = this.pushManager.pipe(Object(u.a)(e => e.getSubscription()));
              this.subscription = Object(o.a)(t, this.subscriptionChanges);
            }
            get isEnabled() {
              return this.sw.isEnabled;
            }
            requestSubscription(e) {
              if (!this.sw.isEnabled) return Promise.reject(new Error(Or));
              const t = { userVisibleOnly: !0 };
              let n = this.decodeBase64(e.serverPublicKey.replace(/_/g, '/').replace(/-/g, '+')),
                r = new Uint8Array(new ArrayBuffer(n.length));
              for (let s = 0; s < n.length; s++) r[s] = n.charCodeAt(s);
              return (
                (t.applicationServerKey = r),
                this.pushManager
                  .pipe(
                    Object(u.a)(e => e.subscribe(t)),
                    Object(z.a)(1)
                  )
                  .toPromise()
                  .then(e => (this.subscriptionChanges.next(e), e))
              );
            }
            unsubscribe() {
              return this.sw.isEnabled
                ? this.subscription
                    .pipe(
                      Object(z.a)(1),
                      Object(u.a)(e => {
                        if (null === e) throw new Error('Not subscribed to push notifications.');
                        return e.unsubscribe().then(e => {
                          if (!e) throw new Error('Unsubscribe failed!');
                          this.subscriptionChanges.next(null);
                        });
                      })
                    )
                    .toPromise()
                : Promise.reject(new Error(Or));
            }
            decodeBase64(e) {
              return atob(e);
            }
          })(),
        Tr = (() =>
          class {
            constructor(e) {
              if (((this.sw = e), !e.isEnabled)) return (this.available = R), void (this.activated = R);
              (this.available = this.sw.eventsOfType('UPDATE_AVAILABLE')),
                (this.activated = this.sw.eventsOfType('UPDATE_ACTIVATED'));
            }
            get isEnabled() {
              return this.sw.isEnabled;
            }
            checkForUpdate() {
              if (!this.sw.isEnabled) return Promise.reject(new Error(Or));
              const e = this.sw.generateNonce();
              return this.sw.postMessageWithStatus('CHECK_FOR_UPDATES', { statusNonce: e }, e);
            }
            activateUpdate() {
              if (!this.sw.isEnabled) return Promise.reject(new Error(Or));
              const e = this.sw.generateNonce();
              return this.sw.postMessageWithStatus('ACTIVATE_UPDATE', { statusNonce: e }, e);
            }
          })();
      class Ar {}
      const Ir = new r.p('NGSW_REGISTER_SCRIPT');
      function jr(e, t, n, s) {
        return () => {
          if (!Object(f.v)(s) || !('serviceWorker' in navigator) || !1 === n.enabled) return;
          let i;
          if (
            (navigator.serviceWorker.addEventListener('controllerchange', () => {
              null !== navigator.serviceWorker.controller &&
                navigator.serviceWorker.controller.postMessage({ action: 'INITIALIZE' });
            }),
            'function' == typeof n.registrationStrategy)
          )
            i = n.registrationStrategy();
          else {
            const [t, ...s] = (n.registrationStrategy || 'registerWhenStable').split(':');
            switch (t) {
              case 'registerImmediately':
                i = Object(Q.a)(null);
                break;
              case 'registerWithDelay':
                i = Object(Q.a)(null).pipe(ee(+s[0] || 0));
                break;
              case 'registerWhenStable':
                i = e.get(r.g).isStable.pipe(Object(a.a)(e => e));
                break;
              default:
                throw new Error('Unknown ServiceWorker registration strategy: ' + n.registrationStrategy);
            }
          }
          i.pipe(Object(z.a)(1)).subscribe(() =>
            navigator.serviceWorker
              .register(t, { scope: n.scope })
              .catch(e => console.error('Service worker registration failed with:', e))
          );
        };
      }
      function Nr(e, t) {
        return new kr(Object(f.v)(t) && !1 !== e.enabled ? navigator.serviceWorker : void 0);
      }
      let Rr = (() => {
        class e {
          static register(t, n = {}) {
            return {
              ngModule: e,
              providers: [
                { provide: Ir, useValue: t },
                { provide: Ar, useValue: n },
                { provide: kr, useFactory: Nr, deps: [Ar, r.A] },
                { provide: r.d, useFactory: jr, deps: [r.q, Ir, Ar, r.A], multi: !0 }
              ]
            };
          }
        }
        return e;
      })();
      var Pr = n('gHic');
      class Mr {
        static childRoutes(e) {
          return { path: '', component: nr, children: e, data: { reuse: !0 } };
        }
      }
      const Lr = { title: Object(h.b)('Home') };
      Mr.childRoutes([
        { path: '', redirectTo: '/home', pathMatch: 'full' },
        { path: 'home', component: fr, data: Lr }
      ]);
      class Hr {}
      var Fr = n('znf/'),
        Ur = n('pKmL');
      class Vr {}
      class qr {}
      class $r {}
      Mr.childRoutes([{ path: 'about', loadChildren: './about/about.module#AboutModule' }]);
      class zr {}
      n.d(t, 'a', function() {
        return Br;
      });
      var Br = r.nb(s, [p], function(e) {
        return r.zb([
          r.Ab(512, r.j, r.Y, [[8, [Pt, on, zn, Zn, Sn, Dn, Pn, Kn.a, or, yr, Cr]], [3, r.j], r.w]),
          r.Ab(5120, r.t, r.kb, [[3, r.t]]),
          r.Ab(4608, f.l, f.k, [r.t, [2, f.y]]),
          r.Ab(5120, r.gb, r.lb, [r.y]),
          r.Ab(5120, r.c, r.hb, []),
          r.Ab(5120, r.r, r.ib, []),
          r.Ab(5120, r.s, r.jb, []),
          r.Ab(4608, g.b, g.l, [f.c]),
          r.Ab(6144, r.F, null, [g.b]),
          r.Ab(4608, g.e, g.g, []),
          r.Ab(
            5120,
            g.c,
            function(e, t, n, r, s, i, o, a) {
              return [new g.j(e, t, n), new g.o(r), new g.n(s, i, o, a)];
            },
            [f.c, r.y, r.A, f.c, f.c, g.e, r.Z, [2, g.f]]
          ),
          r.Ab(4608, g.d, g.d, [g.c, r.y]),
          r.Ab(135680, g.m, g.m, [f.c]),
          r.Ab(4608, g.k, g.k, [g.d, g.m, r.c]),
          r.Ab(6144, r.D, null, [g.k]),
          r.Ab(6144, g.p, null, [g.m]),
          r.Ab(4608, r.L, r.L, [r.y]),
          r.Ab(5120, kr, Nr, [Ar, r.A]),
          r.Ab(4608, Dr, Dr, [kr]),
          r.Ab(4608, Tr, Tr, [kr]),
          r.Ab(4608, v, v, []),
          r.Ab(4608, dr.i, dr.o, [f.c, r.A, dr.m]),
          r.Ab(4608, dr.p, dr.p, [dr.i, dr.n]),
          r.Ab(
            5120,
            dr.a,
            function(e) {
              return [e];
            },
            [dr.p]
          ),
          r.Ab(4608, dr.l, dr.l, []),
          r.Ab(6144, dr.j, null, [dr.l]),
          r.Ab(4608, dr.h, dr.h, [dr.j]),
          r.Ab(6144, dr.b, null, [dr.h]),
          r.Ab(4608, dr.f, dr.k, [dr.b, r.q]),
          r.Ab(4608, dr.c, Pr.b, [dr.f, r.q, [2, Pr.a]]),
          r.Ab(4608, ft, ft, [r.j, r.q, pt, st]),
          r.Ab(5120, i.a, i.A, [i.l]),
          r.Ab(4608, i.f, i.f, []),
          r.Ab(6144, i.g, null, [i.f]),
          r.Ab(135680, i.r, i.r, [i.l, r.v, r.i, r.q, i.g]),
          r.Ab(4608, i.e, i.e, []),
          r.Ab(5120, i.F, i.w, [i.l, f.q, i.h]),
          r.Ab(5120, i.i, i.D, [i.B]),
          r.Ab(
            5120,
            r.b,
            function(e) {
              return [e];
            },
            [i.i]
          ),
          r.Ab(4608, Qn.h, Qn.g, []),
          r.Ab(4608, Qn.c, Qn.f, []),
          r.Ab(4608, Qn.j, Qn.d, []),
          r.Ab(4608, Qn.b, Qn.a, []),
          r.Ab(4608, Qn.l, Qn.l, []),
          r.Ab(4608, Qn.k, Qn.k, [Qn.l, Qn.h, Qn.c, Qn.j, Qn.b, Qn.m, Qn.n]),
          r.Ab(1073742336, f.b, f.b, []),
          r.Ab(1024, r.l, g.q, []),
          r.Ab(
            1024,
            r.x,
            function() {
              return [i.v()];
            },
            []
          ),
          r.Ab(512, i.B, i.B, [r.q]),
          r.Ab(256, Ir, './ngsw-worker.js', []),
          r.Ab(256, Ar, { enabled: !0 }, []),
          r.Ab(
            1024,
            r.d,
            function(e, t, n, r, s, o) {
              return [g.r(e), i.C(t), jr(n, r, s, o)];
            },
            [[2, r.x], i.B, r.q, Ir, Ar, r.A]
          ),
          r.Ab(512, r.e, r.e, [[2, r.d]]),
          r.Ab(131584, r.g, r.g, [r.y, r.Z, r.q, r.l, r.j, r.e]),
          r.Ab(1073742336, r.f, r.f, [r.g]),
          r.Ab(1073742336, g.a, g.a, [[3, g.a]]),
          r.Ab(1073742336, Rr, Rr, []),
          r.Ab(1073742336, S, S, []),
          r.Ab(1073742336, E, E, []),
          r.Ab(1073742336, dr.e, dr.e, []),
          r.Ab(1073742336, dr.d, dr.d, []),
          r.Ab(1073742336, Qn.i, Qn.i, []),
          r.Ab(1073742336, ue, ue, []),
          r.Ab(1073742336, de, de, []),
          r.Ab(1073742336, pe, pe, []),
          r.Ab(1073742336, fe, fe, []),
          r.Ab(1073742336, me, me, []),
          r.Ab(1073742336, Qe, Qe, []),
          r.Ab(1073742336, rt, rt, []),
          r.Ab(1073742336, gt, gt, []),
          r.Ab(1073742336, mt, mt, []),
          r.Ab(1073742336, bt, bt, []),
          r.Ab(1073742336, vt, vt, []),
          r.Ab(1073742336, wt, wt, []),
          r.Ab(1073742336, _t, _t, []),
          r.Ab(1073742336, Ct, Ct, []),
          r.Ab(1073742336, xt, xt, []),
          r.Ab(1073742336, St, St, []),
          r.Ab(1073742336, Ot, Ot, []),
          r.Ab(1073742336, Tt, Tt, []),
          r.Ab(1073742336, At, At, []),
          r.Ab(1024, i.u, i.y, [[3, i.l]]),
          r.Ab(512, i.t, i.c, []),
          r.Ab(512, i.b, i.b, []),
          r.Ab(256, i.h, { preloadingStrategy: i.f }, []),
          r.Ab(1024, f.h, i.x, [f.o, [2, f.a], i.h]),
          r.Ab(512, f.g, f.g, [f.h, f.o]),
          r.Ab(512, r.i, r.i, []),
          r.Ab(512, r.v, r.I, [r.i, [2, r.J]]),
          r.Ab(
            1024,
            i.j,
            function() {
              return [
                [
                  {
                    path: '',
                    component: nr,
                    children: [
                      { path: '', redirectTo: '/home', pathMatch: 'full' },
                      { path: 'home', component: fr, data: Lr }
                    ],
                    data: { reuse: !0 }
                  }
                ],
                [
                  {
                    path: '',
                    component: nr,
                    children: [{ path: 'about', loadChildren: './about/about.module#AboutModule' }],
                    data: { reuse: !0 }
                  },
                  { path: '**', redirectTo: '', pathMatch: 'full' }
                ]
              ];
            },
            []
          ),
          r.Ab(512, i.k, Fr.a, []),
          r.Ab(1024, i.l, i.z, [r.g, i.t, i.b, f.g, r.q, r.v, r.i, i.j, i.h, [2, i.s], [2, i.k]]),
          r.Ab(1073742336, i.p, i.p, [
            [2, i.u],
            [2, i.l]
          ]),
          r.Ab(1073742336, Ur.a, Ur.a, [[3, Ur.a]]),
          r.Ab(1073742336, Vr, Vr, []),
          r.Ab(1073742336, qr, qr, []),
          r.Ab(1073742336, Hr, Hr, []),
          r.Ab(1073742336, $r, $r, []),
          r.Ab(1073742336, zr, zr, []),
          r.Ab(1073742336, s, s, []),
          r.Ab(256, r.X, !0, []),
          r.Ab(256, dr.m, 'XSRF-TOKEN', []),
          r.Ab(256, dr.n, 'X-XSRF-TOKEN', []),
          r.Ab(256, Qn.n, void 0, []),
          r.Ab(256, Qn.m, void 0, [])
        ]);
      });
    },
    TSSN: function(e, t, n) {
      'use strict';
      var r = n('8Y7J'),
        s = n('LRne'),
        i = n('VRyK'),
        o = n('HDdC'),
        a = n('GyhO'),
        l = n('IzEk'),
        u = n('w1tV'),
        c = n('lJxs'),
        h = n('128B');
      function d(e, t, n) {
        return 0 === n ? [t] : (e.push(t), e);
      }
      var p = n('eIep');
      n.d(t, 'i', function() {
        return T;
      }),
        n.d(t, 'h', function() {
          return f;
        }),
        n.d(t, 'g', function() {
          return g;
        }),
        n.d(t, 'n', function() {
          return E;
        }),
        n.d(t, 'm', function() {
          return O;
        }),
        n.d(t, 'k', function() {
          return k;
        }),
        n.d(t, 'b', function() {
          return m;
        }),
        n.d(t, 'a', function() {
          return b;
        }),
        n.d(t, 'j', function() {
          return C;
        }),
        n.d(t, 'd', function() {
          return x;
        }),
        n.d(t, 'c', function() {
          return y;
        }),
        n.d(t, 'f', function() {
          return v;
        }),
        n.d(t, 'e', function() {
          return D;
        }),
        n.d(t, 'l', function() {
          return S;
        });
      class f {}
      let g = (() =>
        class extends f {
          getTranslation(e) {
            return Object(s.a)({});
          }
        })();
      class m {}
      let b = (() =>
        class {
          handle(e) {
            return e.key;
          }
        })();
      class y {}
      let v = (() =>
        class extends y {
          compile(e, t) {
            return e;
          }
          compileTranslations(e, t) {
            return e;
          }
        })();
      function w(e) {
        return null != e;
      }
      function _(e) {
        return e && 'object' == typeof e && !Array.isArray(e);
      }
      class C {}
      let x = (() =>
        class extends C {
          constructor() {
            super(...arguments), (this.templateMatcher = /{{\s?([^{}\s]*)\s?}}/g);
          }
          interpolate(e, t) {
            let n;
            return (
              (n =
                'string' == typeof e
                  ? this.interpolateString(e, t)
                  : 'function' == typeof e
                  ? this.interpolateFunction(e, t)
                  : e),
              n
            );
          }
          getValue(e, t) {
            let n = t.split('.');
            t = '';
            do {
              (t += n.shift()),
                !w(e) || !w(e[t]) || ('object' != typeof e[t] && n.length)
                  ? n.length
                    ? (t += '.')
                    : (e = void 0)
                  : ((e = e[t]), (t = ''));
            } while (n.length);
            return e;
          }
          interpolateFunction(e, t) {
            return e(t);
          }
          interpolateString(e, t) {
            return t
              ? e.replace(this.templateMatcher, (e, n) => {
                  let r = this.getValue(t, n);
                  return w(r) ? r : e;
                })
              : e;
          }
        })();
      class S {
        constructor() {
          (this.currentLang = this.defaultLang),
            (this.translations = {}),
            (this.langs = []),
            (this.onTranslationChange = new r.m()),
            (this.onLangChange = new r.m()),
            (this.onDefaultLangChange = new r.m());
        }
      }
      const E = new r.p('USE_STORE'),
        O = new r.p('USE_DEFAULT_LANG');
      let k = (() =>
          class {
            constructor(e, t, n, s, i, o = !0, a = !1) {
              (this.store = e),
                (this.currentLoader = t),
                (this.compiler = n),
                (this.parser = s),
                (this.missingTranslationHandler = i),
                (this.useDefaultLang = o),
                (this.isolate = a),
                (this.pending = !1),
                (this._onTranslationChange = new r.m()),
                (this._onLangChange = new r.m()),
                (this._onDefaultLangChange = new r.m()),
                (this._langs = []),
                (this._translations = {}),
                (this._translationRequests = {});
            }
            get onTranslationChange() {
              return this.isolate ? this._onTranslationChange : this.store.onTranslationChange;
            }
            get onLangChange() {
              return this.isolate ? this._onLangChange : this.store.onLangChange;
            }
            get onDefaultLangChange() {
              return this.isolate ? this._onDefaultLangChange : this.store.onDefaultLangChange;
            }
            get defaultLang() {
              return this.isolate ? this._defaultLang : this.store.defaultLang;
            }
            set defaultLang(e) {
              this.isolate ? (this._defaultLang = e) : (this.store.defaultLang = e);
            }
            get currentLang() {
              return this.isolate ? this._currentLang : this.store.currentLang;
            }
            set currentLang(e) {
              this.isolate ? (this._currentLang = e) : (this.store.currentLang = e);
            }
            get langs() {
              return this.isolate ? this._langs : this.store.langs;
            }
            set langs(e) {
              this.isolate ? (this._langs = e) : (this.store.langs = e);
            }
            get translations() {
              return this.isolate ? this._translations : this.store.translations;
            }
            set translations(e) {
              this.isolate ? (this._translations = e) : (this.store.translations = e);
            }
            setDefaultLang(e) {
              if (e === this.defaultLang) return;
              let t = this.retrieveTranslations(e);
              void 0 !== t
                ? (this.defaultLang || (this.defaultLang = e),
                  t.pipe(Object(l.a)(1)).subscribe(t => {
                    this.changeDefaultLang(e);
                  }))
                : this.changeDefaultLang(e);
            }
            getDefaultLang() {
              return this.defaultLang;
            }
            use(e) {
              if (e === this.currentLang) return Object(s.a)(this.translations[e]);
              let t = this.retrieveTranslations(e);
              return void 0 !== t
                ? (this.currentLang || (this.currentLang = e),
                  t.pipe(Object(l.a)(1)).subscribe(t => {
                    this.changeLang(e);
                  }),
                  t)
                : (this.changeLang(e), Object(s.a)(this.translations[e]));
            }
            retrieveTranslations(e) {
              let t;
              return (
                void 0 === this.translations[e] &&
                  ((this._translationRequests[e] = this._translationRequests[e] || this.getTranslation(e)),
                  (t = this._translationRequests[e])),
                t
              );
            }
            getTranslation(e) {
              this.pending = !0;
              const t = this.currentLoader.getTranslation(e).pipe(Object(u.a)());
              return (
                (this.loadingTranslations = t.pipe(
                  Object(l.a)(1),
                  Object(c.a)(t => this.compiler.compileTranslations(t, e)),
                  Object(u.a)()
                )),
                this.loadingTranslations.subscribe(
                  t => {
                    (this.translations[e] = t), this.updateLangs(), (this.pending = !1);
                  },
                  e => {
                    this.pending = !1;
                  }
                ),
                t
              );
            }
            setTranslation(e, t, n = !1) {
              (t = this.compiler.compileTranslations(t, e)),
                (this.translations[e] =
                  n && this.translations[e]
                    ? (function e(t, n) {
                        let r = Object.assign({}, t);
                        return (
                          _(t) &&
                            _(n) &&
                            Object.keys(n).forEach(s => {
                              _(n[s])
                                ? s in t
                                  ? (r[s] = e(t[s], n[s]))
                                  : Object.assign(r, { [s]: n[s] })
                                : Object.assign(r, { [s]: n[s] });
                            }),
                          r
                        );
                      })(this.translations[e], t)
                    : t),
                this.updateLangs(),
                this.onTranslationChange.emit({ lang: e, translations: this.translations[e] });
            }
            getLangs() {
              return this.langs;
            }
            addLangs(e) {
              e.forEach(e => {
                -1 === this.langs.indexOf(e) && this.langs.push(e);
              });
            }
            updateLangs() {
              this.addLangs(Object.keys(this.translations));
            }
            getParsedResult(e, t, n) {
              let r;
              if (t instanceof Array) {
                let r = {},
                  o = !1;
                for (let s of t)
                  (r[s] = this.getParsedResult(e, s, n)), 'function' == typeof r[s].subscribe && (o = !0);
                if (o) {
                  let e;
                  for (let n of t) {
                    let t = 'function' == typeof r[n].subscribe ? r[n] : Object(s.a)(r[n]);
                    e = void 0 === e ? t : Object(i.a)(e, t);
                  }
                  return e.pipe(
                    Object(h.a)(d, []),
                    Object(c.a)(e => {
                      let n = {};
                      return (
                        e.forEach((e, r) => {
                          n[t[r]] = e;
                        }),
                        n
                      );
                    })
                  );
                }
                return r;
              }
              if (
                (e && (r = this.parser.interpolate(this.parser.getValue(e, t), n)),
                void 0 === r &&
                  this.defaultLang &&
                  this.defaultLang !== this.currentLang &&
                  this.useDefaultLang &&
                  (r = this.parser.interpolate(this.parser.getValue(this.translations[this.defaultLang], t), n)),
                void 0 === r)
              ) {
                let e = { key: t, translateService: this };
                void 0 !== n && (e.interpolateParams = n), (r = this.missingTranslationHandler.handle(e));
              }
              return void 0 !== r ? r : t;
            }
            get(e, t) {
              if (!w(e) || !e.length) throw new Error('Parameter "key" required');
              if (this.pending)
                return o.a.create(n => {
                  let r = e => {
                      n.next(e), n.complete();
                    },
                    s = e => {
                      n.error(e);
                    };
                  this.loadingTranslations.subscribe(n => {
                    'function' == typeof (n = this.getParsedResult(n, e, t)).subscribe ? n.subscribe(r, s) : r(n);
                  }, s);
                });
              {
                let n = this.getParsedResult(this.translations[this.currentLang], e, t);
                return 'function' == typeof n.subscribe ? n : Object(s.a)(n);
              }
            }
            stream(e, t) {
              if (!w(e) || !e.length) throw new Error('Parameter "key" required');
              return Object(a.a)(
                this.get(e, t),
                this.onLangChange.pipe(
                  Object(p.a)(n => {
                    const r = this.getParsedResult(n.translations, e, t);
                    return 'function' == typeof r.subscribe ? r : Object(s.a)(r);
                  })
                )
              );
            }
            instant(e, t) {
              if (!w(e) || !e.length) throw new Error('Parameter "key" required');
              let n = this.getParsedResult(this.translations[this.currentLang], e, t);
              if (void 0 !== n.subscribe) {
                if (e instanceof Array) {
                  let t = {};
                  return (
                    e.forEach((n, r) => {
                      t[e[r]] = e[r];
                    }),
                    t
                  );
                }
                return e;
              }
              return n;
            }
            set(e, t, n = this.currentLang) {
              (this.translations[n][e] = this.compiler.compile(t, n)),
                this.updateLangs(),
                this.onTranslationChange.emit({ lang: n, translations: this.translations[n] });
            }
            changeLang(e) {
              (this.currentLang = e),
                this.onLangChange.emit({ lang: e, translations: this.translations[e] }),
                this.defaultLang || this.changeDefaultLang(e);
            }
            changeDefaultLang(e) {
              (this.defaultLang = e), this.onDefaultLangChange.emit({ lang: e, translations: this.translations[e] });
            }
            reloadLang(e) {
              return this.resetLang(e), this.getTranslation(e);
            }
            resetLang(e) {
              (this._translationRequests[e] = void 0), (this.translations[e] = void 0);
            }
            getBrowserLang() {
              if ('undefined' == typeof window || void 0 === window.navigator) return;
              let e = window.navigator.languages ? window.navigator.languages[0] : null;
              return (
                (e =
                  e || window.navigator.language || window.navigator.browserLanguage || window.navigator.userLanguage),
                -1 !== e.indexOf('-') && (e = e.split('-')[0]),
                -1 !== e.indexOf('_') && (e = e.split('_')[0]),
                e
              );
            }
            getBrowserCultureLang() {
              if ('undefined' == typeof window || void 0 === window.navigator) return;
              let e = window.navigator.languages ? window.navigator.languages[0] : null;
              return (
                (e =
                  e || window.navigator.language || window.navigator.browserLanguage || window.navigator.userLanguage),
                e
              );
            }
          })(),
        D = (() =>
          class {
            constructor(e, t, n) {
              (this.translateService = e),
                (this.element = t),
                (this._ref = n),
                this.onTranslationChangeSub ||
                  (this.onTranslationChangeSub = this.translateService.onTranslationChange.subscribe(e => {
                    e.lang === this.translateService.currentLang && this.checkNodes(!0, e.translations);
                  })),
                this.onLangChangeSub ||
                  (this.onLangChangeSub = this.translateService.onLangChange.subscribe(e => {
                    this.checkNodes(!0, e.translations);
                  })),
                this.onDefaultLangChangeSub ||
                  (this.onDefaultLangChangeSub = this.translateService.onDefaultLangChange.subscribe(e => {
                    this.checkNodes(!0);
                  }));
            }
            set translate(e) {
              e && ((this.key = e), this.checkNodes());
            }
            set translateParams(e) {
              (function e(t, n) {
                if (t === n) return !0;
                if (null === t || null === n) return !1;
                if (t != t && n != n) return !0;
                let r,
                  s,
                  i,
                  o = typeof t;
                if (o == typeof n && 'object' == o) {
                  if (!Array.isArray(t)) {
                    if (Array.isArray(n)) return !1;
                    for (s in ((i = Object.create(null)), t)) {
                      if (!e(t[s], n[s])) return !1;
                      i[s] = !0;
                    }
                    for (s in n) if (!(s in i) && void 0 !== n[s]) return !1;
                    return !0;
                  }
                  if (!Array.isArray(n)) return !1;
                  if ((r = t.length) == n.length) {
                    for (s = 0; s < r; s++) if (!e(t[s], n[s])) return !1;
                    return !0;
                  }
                }
                return !1;
              })(this.currentParams, e) || ((this.currentParams = e), this.checkNodes(!0));
            }
            ngAfterViewChecked() {
              this.checkNodes();
            }
            checkNodes(e = !1, t) {
              let n = this.element.nativeElement.childNodes;
              n.length ||
                (this.setContent(this.element.nativeElement, this.key), (n = this.element.nativeElement.childNodes));
              for (let r = 0; r < n.length; ++r) {
                let s = n[r];
                if (3 === s.nodeType) {
                  let n;
                  if (this.key) (n = this.key), e && (s.lastKey = null);
                  else {
                    let t = this.getContent(s),
                      r = t.trim();
                    r.length &&
                      (t !== s.currentValue
                        ? ((n = r), (s.originalContent = this.getContent(s)))
                        : s.originalContent && e && ((s.lastKey = null), (n = s.originalContent.trim())));
                  }
                  this.updateValue(n, s, t);
                }
              }
            }
            updateValue(e, t, n) {
              if (e) {
                if (t.lastKey === e && this.lastParams === this.currentParams) return;
                this.lastParams = this.currentParams;
                let r = n => {
                  n !== e && (t.lastKey = e),
                    t.originalContent || (t.originalContent = this.getContent(t)),
                    (t.currentValue = w(n) ? n : t.originalContent || e),
                    this.setContent(t, this.key ? t.currentValue : t.originalContent.replace(e, t.currentValue)),
                    this._ref.markForCheck();
                };
                if (w(n)) {
                  let t = this.translateService.getParsedResult(n, e, this.currentParams);
                  'function' == typeof t.subscribe ? t.subscribe(r) : r(t);
                } else this.translateService.get(e, this.currentParams).subscribe(r);
              }
            }
            getContent(e) {
              return w(e.textContent) ? e.textContent : e.data;
            }
            setContent(e, t) {
              w(e.textContent) ? (e.textContent = t) : (e.data = t);
            }
            ngOnDestroy() {
              this.onLangChangeSub && this.onLangChangeSub.unsubscribe(),
                this.onDefaultLangChangeSub && this.onDefaultLangChangeSub.unsubscribe(),
                this.onTranslationChangeSub && this.onTranslationChangeSub.unsubscribe();
            }
          })(),
        T = (() => {
          class e {
            static forRoot(t = {}) {
              return {
                ngModule: e,
                providers: [
                  t.loader || { provide: f, useClass: g },
                  t.compiler || { provide: y, useClass: v },
                  t.parser || { provide: C, useClass: x },
                  t.missingTranslationHandler || { provide: m, useClass: b },
                  S,
                  { provide: E, useValue: t.isolate },
                  { provide: O, useValue: t.useDefaultLang },
                  k
                ]
              };
            }
            static forChild(t = {}) {
              return {
                ngModule: e,
                providers: [
                  t.loader || { provide: f, useClass: g },
                  t.compiler || { provide: y, useClass: v },
                  t.parser || { provide: C, useClass: x },
                  t.missingTranslationHandler || { provide: m, useClass: b },
                  { provide: E, useValue: t.isolate },
                  { provide: O, useValue: t.useDefaultLang },
                  k
                ]
              };
            }
          }
          return e;
        })();
    },
    VRyK: function(e, t, n) {
      'use strict';
      n.d(t, 'a', function() {
        return a;
      });
      var r = n('HDdC'),
        s = n('z+Ro'),
        i = n('bHdf'),
        o = n('yCtX');
      function a(...e) {
        let t = Number.POSITIVE_INFINITY,
          n = null,
          a = e[e.length - 1];
        return (
          Object(s.a)(a)
            ? ((n = e.pop()), e.length > 1 && 'number' == typeof e[e.length - 1] && (t = e.pop()))
            : 'number' == typeof a && (t = e.pop()),
          null === n && 1 === e.length && e[0] instanceof r.a ? e[0] : Object(i.a)(t)(Object(o.a)(e, n))
        );
      }
    },
    XNiG: function(e, t, n) {
      'use strict';
      var r = n('HDdC'),
        s = n('7o/Q'),
        i = n('quSY'),
        o = n('9ppp');
      class a extends i.a {
        constructor(e, t) {
          super(), (this.subject = e), (this.subscriber = t), (this.closed = !1);
        }
        unsubscribe() {
          if (this.closed) return;
          this.closed = !0;
          const e = this.subject,
            t = e.observers;
          if (((this.subject = null), !t || 0 === t.length || e.isStopped || e.closed)) return;
          const n = t.indexOf(this.subscriber);
          -1 !== n && t.splice(n, 1);
        }
      }
      var l = n('2QA8');
      n.d(t, 'b', function() {
        return u;
      }),
        n.d(t, 'a', function() {
          return c;
        });
      class u extends s.a {
        constructor(e) {
          super(e), (this.destination = e);
        }
      }
      let c = (() => {
        class e extends r.a {
          constructor() {
            super(),
              (this.observers = []),
              (this.closed = !1),
              (this.isStopped = !1),
              (this.hasError = !1),
              (this.thrownError = null);
          }
          [l.a]() {
            return new u(this);
          }
          lift(e) {
            const t = new h(this, this);
            return (t.operator = e), t;
          }
          next(e) {
            if (this.closed) throw new o.a();
            if (!this.isStopped) {
              const { observers: t } = this,
                n = t.length,
                r = t.slice();
              for (let s = 0; s < n; s++) r[s].next(e);
            }
          }
          error(e) {
            if (this.closed) throw new o.a();
            (this.hasError = !0), (this.thrownError = e), (this.isStopped = !0);
            const { observers: t } = this,
              n = t.length,
              r = t.slice();
            for (let s = 0; s < n; s++) r[s].error(e);
            this.observers.length = 0;
          }
          complete() {
            if (this.closed) throw new o.a();
            this.isStopped = !0;
            const { observers: e } = this,
              t = e.length,
              n = e.slice();
            for (let r = 0; r < t; r++) n[r].complete();
            this.observers.length = 0;
          }
          unsubscribe() {
            (this.isStopped = !0), (this.closed = !0), (this.observers = null);
          }
          _trySubscribe(e) {
            if (this.closed) throw new o.a();
            return super._trySubscribe(e);
          }
          _subscribe(e) {
            if (this.closed) throw new o.a();
            return this.hasError
              ? (e.error(this.thrownError), i.a.EMPTY)
              : this.isStopped
              ? (e.complete(), i.a.EMPTY)
              : (this.observers.push(e), new a(this, e));
          }
          asObservable() {
            const e = new r.a();
            return (e.source = this), e;
          }
        }
        return (e.create = (e, t) => new h(e, t)), e;
      })();
      class h extends c {
        constructor(e, t) {
          super(), (this.destination = e), (this.source = t);
        }
        next(e) {
          const { destination: t } = this;
          t && t.next && t.next(e);
        }
        error(e) {
          const { destination: t } = this;
          t && t.error && this.destination.error(e);
        }
        complete() {
          const { destination: e } = this;
          e && e.complete && this.destination.complete();
        }
        _subscribe(e) {
          const { source: t } = this;
          return t ? this.source.subscribe(e) : i.a.EMPTY;
        }
      }
    },
    XoHu: function(e, t, n) {
      'use strict';
      function r(e) {
        return null !== e && 'object' == typeof e;
      }
      n.d(t, 'a', function() {
        return r;
      });
    },
    ZUHj: function(e, t, n) {
      'use strict';
      n.d(t, 'a', function() {
        return o;
      });
      var r = n('51Dv'),
        s = n('SeVD'),
        i = n('HDdC');
      function o(e, t, n, o, a = new r.a(e, n, o)) {
        if (!a.closed) return t instanceof i.a ? t.subscribe(a) : Object(s.a)(t)(a);
      }
    },
    bHdf: function(e, t, n) {
      'use strict';
      n.d(t, 'a', function() {
        return i;
      });
      var r = n('5+tZ'),
        s = n('SpAZ');
      function i(e = Number.POSITIVE_INFINITY) {
        return Object(r.a)(s.a, e);
      }
    },
    bOdf: function(e, t, n) {
      'use strict';
      n.d(t, 'a', function() {
        return s;
      });
      var r = n('5+tZ');
      function s(e, t) {
        return Object(r.a)(e, t, 1);
      }
    },
    c2HN: function(e, t, n) {
      'use strict';
      function r(e) {
        return !!e && 'function' != typeof e.subscribe && 'function' == typeof e.then;
      }
      n.d(t, 'a', function() {
        return r;
      });
    },
    cUpR: function(e, t, n) {
      'use strict';
      n.d(t, 'q', function() {
        return he;
      }),
        n.d(t, 'r', function() {
          return C;
        }),
        n.d(t, 'a', function() {
          return de;
        }),
        n.d(t, 'i', function() {
          return ce;
        }),
        n.d(t, 'h', function() {
          return fe;
        }),
        n.d(t, 'c', function() {
          return x;
        }),
        n.d(t, 'd', function() {
          return S;
        }),
        n.d(t, 'e', function() {
          return Z;
        }),
        n.d(t, 'f', function() {
          return K;
        }),
        n.d(t, 'g', function() {
          return Q;
        }),
        n.d(t, 'b', function() {
          return te;
        }),
        n.d(t, 's', function() {
          return o;
        }),
        n.d(t, 'k', function() {
          return j;
        }),
        n.d(t, 'j', function() {
          return W;
        }),
        n.d(t, 'n', function() {
          return Y;
        }),
        n.d(t, 'o', function() {
          return ee;
        }),
        n.d(t, 'm', function() {
          return k;
        }),
        n.d(t, 'p', function() {
          return O;
        }),
        n.d(t, 'l', function() {
          return ne;
        });
      var r = n('SVse'),
        s = n('8Y7J');
      let i = null;
      function o() {
        return i;
      }
      const a = { class: 'className', innerHtml: 'innerHTML', readonly: 'readOnly', tabindex: 'tabIndex' },
        l = {
          '\b': 'Backspace',
          '\t': 'Tab',
          '\x7f': 'Delete',
          '\x1b': 'Escape',
          Del: 'Delete',
          Esc: 'Escape',
          Left: 'ArrowLeft',
          Right: 'ArrowRight',
          Up: 'ArrowUp',
          Down: 'ArrowDown',
          Menu: 'ContextMenu',
          Scroll: 'ScrollLock',
          Win: 'OS'
        },
        u = {
          A: '1',
          B: '2',
          C: '3',
          D: '4',
          E: '5',
          F: '6',
          G: '7',
          H: '8',
          I: '9',
          J: '*',
          K: '+',
          M: '-',
          N: '.',
          O: '/',
          '`': '0',
          '\x90': 'NumLock'
        },
        c = (() => {
          if (s.tb.Node)
            return (
              s.tb.Node.prototype.contains ||
              function(e) {
                return !!(16 & this.compareDocumentPosition(e));
              }
            );
        })();
      class h extends class extends class {
        constructor() {
          this.resourceLoaderType = null;
        }
        get attrToPropMap() {
          return this._attrToPropMap;
        }
        set attrToPropMap(e) {
          this._attrToPropMap = e;
        }
      } {
        constructor() {
          super(), (this._animationPrefix = null), (this._transitionEnd = null);
          try {
            const e = this.createElement('div', document);
            if (null != this.getStyle(e, 'animationName')) this._animationPrefix = '';
            else {
              const t = ['Webkit', 'Moz', 'O', 'ms'];
              for (let n = 0; n < t.length; n++)
                if (null != this.getStyle(e, t[n] + 'AnimationName')) {
                  this._animationPrefix = '-' + t[n].toLowerCase() + '-';
                  break;
                }
            }
            const t = {
              WebkitTransition: 'webkitTransitionEnd',
              MozTransition: 'transitionend',
              OTransition: 'oTransitionEnd otransitionend',
              transition: 'transitionend'
            };
            Object.keys(t).forEach(n => {
              null != this.getStyle(e, n) && (this._transitionEnd = t[n]);
            });
          } catch (e) {
            (this._animationPrefix = null), (this._transitionEnd = null);
          }
        }
        getDistributedNodes(e) {
          return e.getDistributedNodes();
        }
        resolveAndSetHref(e, t, n) {
          e.href = null == n ? t : t + '/../' + n;
        }
        supportsDOMEvents() {
          return !0;
        }
        supportsNativeShadowDOM() {
          return 'function' == typeof document.body.createShadowRoot;
        }
        getAnimationPrefix() {
          return this._animationPrefix ? this._animationPrefix : '';
        }
        getTransitionEnd() {
          return this._transitionEnd ? this._transitionEnd : '';
        }
        supportsAnimation() {
          return null != this._animationPrefix && null != this._transitionEnd;
        }
      } {
        parse(e) {
          throw new Error('parse not implemented');
        }
        static makeCurrent() {
          var e;
          (e = new h()), i || (i = e);
        }
        hasProperty(e, t) {
          return t in e;
        }
        setProperty(e, t, n) {
          e[t] = n;
        }
        getProperty(e, t) {
          return e[t];
        }
        invoke(e, t, n) {
          e[t](...n);
        }
        logError(e) {
          window.console && (console.error ? console.error(e) : console.log(e));
        }
        log(e) {
          window.console && window.console.log && window.console.log(e);
        }
        logGroup(e) {
          window.console && window.console.group && window.console.group(e);
        }
        logGroupEnd() {
          window.console && window.console.groupEnd && window.console.groupEnd();
        }
        get attrToPropMap() {
          return a;
        }
        contains(e, t) {
          return c.call(e, t);
        }
        querySelector(e, t) {
          return e.querySelector(t);
        }
        querySelectorAll(e, t) {
          return e.querySelectorAll(t);
        }
        on(e, t, n) {
          e.addEventListener(t, n, !1);
        }
        onAndCancel(e, t, n) {
          return (
            e.addEventListener(t, n, !1),
            () => {
              e.removeEventListener(t, n, !1);
            }
          );
        }
        dispatchEvent(e, t) {
          e.dispatchEvent(t);
        }
        createMouseEvent(e) {
          const t = this.getDefaultDocument().createEvent('MouseEvent');
          return t.initEvent(e, !0, !0), t;
        }
        createEvent(e) {
          const t = this.getDefaultDocument().createEvent('Event');
          return t.initEvent(e, !0, !0), t;
        }
        preventDefault(e) {
          e.preventDefault(), (e.returnValue = !1);
        }
        isPrevented(e) {
          return e.defaultPrevented || (null != e.returnValue && !e.returnValue);
        }
        getInnerHTML(e) {
          return e.innerHTML;
        }
        getTemplateContent(e) {
          return 'content' in e && this.isTemplateElement(e) ? e.content : null;
        }
        getOuterHTML(e) {
          return e.outerHTML;
        }
        nodeName(e) {
          return e.nodeName;
        }
        nodeValue(e) {
          return e.nodeValue;
        }
        type(e) {
          return e.type;
        }
        content(e) {
          return this.hasProperty(e, 'content') ? e.content : e;
        }
        firstChild(e) {
          return e.firstChild;
        }
        nextSibling(e) {
          return e.nextSibling;
        }
        parentElement(e) {
          return e.parentNode;
        }
        childNodes(e) {
          return e.childNodes;
        }
        childNodesAsList(e) {
          const t = e.childNodes,
            n = new Array(t.length);
          for (let r = 0; r < t.length; r++) n[r] = t[r];
          return n;
        }
        clearNodes(e) {
          for (; e.firstChild; ) e.removeChild(e.firstChild);
        }
        appendChild(e, t) {
          e.appendChild(t);
        }
        removeChild(e, t) {
          e.removeChild(t);
        }
        replaceChild(e, t, n) {
          e.replaceChild(t, n);
        }
        remove(e) {
          return e.parentNode && e.parentNode.removeChild(e), e;
        }
        insertBefore(e, t, n) {
          e.insertBefore(n, t);
        }
        insertAllBefore(e, t, n) {
          n.forEach(n => e.insertBefore(n, t));
        }
        insertAfter(e, t, n) {
          e.insertBefore(n, t.nextSibling);
        }
        setInnerHTML(e, t) {
          e.innerHTML = t;
        }
        getText(e) {
          return e.textContent;
        }
        setText(e, t) {
          e.textContent = t;
        }
        getValue(e) {
          return e.value;
        }
        setValue(e, t) {
          e.value = t;
        }
        getChecked(e) {
          return e.checked;
        }
        setChecked(e, t) {
          e.checked = t;
        }
        createComment(e) {
          return this.getDefaultDocument().createComment(e);
        }
        createTemplate(e) {
          const t = this.getDefaultDocument().createElement('template');
          return (t.innerHTML = e), t;
        }
        createElement(e, t) {
          return (t = t || this.getDefaultDocument()).createElement(e);
        }
        createElementNS(e, t, n) {
          return (n = n || this.getDefaultDocument()).createElementNS(e, t);
        }
        createTextNode(e, t) {
          return (t = t || this.getDefaultDocument()).createTextNode(e);
        }
        createScriptTag(e, t, n) {
          const r = (n = n || this.getDefaultDocument()).createElement('SCRIPT');
          return r.setAttribute(e, t), r;
        }
        createStyleElement(e, t) {
          const n = (t = t || this.getDefaultDocument()).createElement('style');
          return this.appendChild(n, this.createTextNode(e, t)), n;
        }
        createShadowRoot(e) {
          return e.createShadowRoot();
        }
        getShadowRoot(e) {
          return e.shadowRoot;
        }
        getHost(e) {
          return e.host;
        }
        clone(e) {
          return e.cloneNode(!0);
        }
        getElementsByClassName(e, t) {
          return e.getElementsByClassName(t);
        }
        getElementsByTagName(e, t) {
          return e.getElementsByTagName(t);
        }
        classList(e) {
          return Array.prototype.slice.call(e.classList, 0);
        }
        addClass(e, t) {
          e.classList.add(t);
        }
        removeClass(e, t) {
          e.classList.remove(t);
        }
        hasClass(e, t) {
          return e.classList.contains(t);
        }
        setStyle(e, t, n) {
          e.style[t] = n;
        }
        removeStyle(e, t) {
          e.style[t] = '';
        }
        getStyle(e, t) {
          return e.style[t];
        }
        hasStyle(e, t, n) {
          const r = this.getStyle(e, t) || '';
          return n ? r == n : r.length > 0;
        }
        tagName(e) {
          return e.tagName;
        }
        attributeMap(e) {
          const t = new Map(),
            n = e.attributes;
          for (let r = 0; r < n.length; r++) {
            const e = n.item(r);
            t.set(e.name, e.value);
          }
          return t;
        }
        hasAttribute(e, t) {
          return e.hasAttribute(t);
        }
        hasAttributeNS(e, t, n) {
          return e.hasAttributeNS(t, n);
        }
        getAttribute(e, t) {
          return e.getAttribute(t);
        }
        getAttributeNS(e, t, n) {
          return e.getAttributeNS(t, n);
        }
        setAttribute(e, t, n) {
          e.setAttribute(t, n);
        }
        setAttributeNS(e, t, n, r) {
          e.setAttributeNS(t, n, r);
        }
        removeAttribute(e, t) {
          e.removeAttribute(t);
        }
        removeAttributeNS(e, t, n) {
          e.removeAttributeNS(t, n);
        }
        templateAwareRoot(e) {
          return this.isTemplateElement(e) ? this.content(e) : e;
        }
        createHtmlDocument() {
          return document.implementation.createHTMLDocument('fakeTitle');
        }
        getDefaultDocument() {
          return document;
        }
        getBoundingClientRect(e) {
          try {
            return e.getBoundingClientRect();
          } catch (t) {
            return { top: 0, bottom: 0, left: 0, right: 0, width: 0, height: 0 };
          }
        }
        getTitle(e) {
          return e.title;
        }
        setTitle(e, t) {
          e.title = t || '';
        }
        elementMatches(e, t) {
          return (
            !!this.isElementNode(e) &&
            ((e.matches && e.matches(t)) ||
              (e.msMatchesSelector && e.msMatchesSelector(t)) ||
              (e.webkitMatchesSelector && e.webkitMatchesSelector(t)))
          );
        }
        isTemplateElement(e) {
          return this.isElementNode(e) && 'TEMPLATE' === e.nodeName;
        }
        isTextNode(e) {
          return e.nodeType === Node.TEXT_NODE;
        }
        isCommentNode(e) {
          return e.nodeType === Node.COMMENT_NODE;
        }
        isElementNode(e) {
          return e.nodeType === Node.ELEMENT_NODE;
        }
        hasShadowRoot(e) {
          return null != e.shadowRoot && e instanceof HTMLElement;
        }
        isShadowRoot(e) {
          return e instanceof DocumentFragment;
        }
        importIntoDoc(e) {
          return document.importNode(this.templateAwareRoot(e), !0);
        }
        adoptNode(e) {
          return document.adoptNode(e);
        }
        getHref(e) {
          return e.getAttribute('href');
        }
        getEventKey(e) {
          let t = e.key;
          if (null == t) {
            if (((t = e.keyIdentifier), null == t)) return 'Unidentified';
            t.startsWith('U+') &&
              ((t = String.fromCharCode(parseInt(t.substring(2), 16))),
              3 === e.location && u.hasOwnProperty(t) && (t = u[t]));
          }
          return l[t] || t;
        }
        getGlobalEventTarget(e, t) {
          return 'window' === t ? window : 'document' === t ? e : 'body' === t ? e.body : null;
        }
        getHistory() {
          return window.history;
        }
        getLocation() {
          return window.location;
        }
        getBaseHref(e) {
          const t = p || ((p = document.querySelector('base')), p) ? p.getAttribute('href') : null;
          return null == t
            ? null
            : ((n = t),
              d || (d = document.createElement('a')),
              d.setAttribute('href', n),
              '/' === d.pathname.charAt(0) ? d.pathname : '/' + d.pathname);
          var n;
        }
        resetBaseElement() {
          p = null;
        }
        getUserAgent() {
          return window.navigator.userAgent;
        }
        setData(e, t, n) {
          this.setAttribute(e, 'data-' + t, n);
        }
        getData(e, t) {
          return this.getAttribute(e, 'data-' + t);
        }
        getComputedStyle(e) {
          return getComputedStyle(e);
        }
        supportsWebAnimation() {
          return 'function' == typeof Element.prototype.animate;
        }
        performanceNow() {
          return window.performance && window.performance.now ? window.performance.now() : new Date().getTime();
        }
        supportsCookies() {
          return !0;
        }
        getCookie(e) {
          return Object(r.z)(document.cookie, e);
        }
        setCookie(e, t) {
          document.cookie = encodeURIComponent(e) + '=' + encodeURIComponent(t);
        }
      }
      let d,
        p = null;
      function f() {
        return !!window.history.pushState;
      }
      let g = (() => {
        class e extends r.o {
          constructor(e) {
            super(), (this._doc = e), this._init();
          }
          _init() {
            (this.location = o().getLocation()), (this._history = o().getHistory());
          }
          getBaseHrefFromDOM() {
            return o().getBaseHref(this._doc);
          }
          onPopState(e) {
            o()
              .getGlobalEventTarget(this._doc, 'window')
              .addEventListener('popstate', e, !1);
          }
          onHashChange(e) {
            o()
              .getGlobalEventTarget(this._doc, 'window')
              .addEventListener('hashchange', e, !1);
          }
          get href() {
            return this.location.href;
          }
          get protocol() {
            return this.location.protocol;
          }
          get hostname() {
            return this.location.hostname;
          }
          get port() {
            return this.location.port;
          }
          get pathname() {
            return this.location.pathname;
          }
          get search() {
            return this.location.search;
          }
          get hash() {
            return this.location.hash;
          }
          set pathname(e) {
            this.location.pathname = e;
          }
          pushState(e, t, n) {
            f() ? this._history.pushState(e, t, n) : (this.location.hash = n);
          }
          replaceState(e, t, n) {
            f() ? this._history.replaceState(e, t, n) : (this.location.hash = n);
          }
          forward() {
            this._history.forward();
          }
          back() {
            this._history.back();
          }
          getState() {
            return this._history.state;
          }
        }
        return (e.ctorParameters = () => [{ type: void 0, decorators: [{ type: s.o, args: [r.c] }] }]), e;
      })();
      const m = new s.p('TRANSITION_ID'),
        b = [
          {
            provide: s.d,
            useFactory: function(e, t, n) {
              return () => {
                n.get(s.e).donePromise.then(() => {
                  const n = o();
                  Array.prototype.slice
                    .apply(n.querySelectorAll(t, 'style[ng-transition]'))
                    .filter(t => n.getAttribute(t, 'ng-transition') === e)
                    .forEach(e => n.remove(e));
                });
              };
            },
            deps: [m, r.c, s.q],
            multi: !0
          }
        ];
      class y {
        static init() {
          Object(s.W)(new y());
        }
        addToWindow(e) {
          (s.tb.getAngularTestability = (t, n = !0) => {
            const r = e.findTestabilityInTree(t, n);
            if (null == r) throw new Error('Could not find testability for element.');
            return r;
          }),
            (s.tb.getAllAngularTestabilities = () => e.getAllTestabilities()),
            (s.tb.getAllAngularRootElements = () => e.getAllRootElements()),
            s.tb.frameworkStabilizers || (s.tb.frameworkStabilizers = []),
            s.tb.frameworkStabilizers.push(e => {
              const t = s.tb.getAllAngularTestabilities();
              let n = t.length,
                r = !1;
              const i = function(t) {
                (r = r || t), n--, 0 == n && e(r);
              };
              t.forEach(function(e) {
                e.whenStable(i);
              });
            });
        }
        findTestabilityInTree(e, t, n) {
          if (null == t) return null;
          const r = e.getTestability(t);
          return null != r
            ? r
            : n
            ? o().isShadowRoot(t)
              ? this.findTestabilityInTree(e, o().getHost(t), !0)
              : this.findTestabilityInTree(e, o().parentElement(t), !0)
            : null;
        }
      }
      function v(e, t) {
        ('undefined' != typeof COMPILED && COMPILED) || ((s.tb.ng = s.tb.ng || {})[e] = t);
      }
      const w = (() => ({ ApplicationRef: s.g, NgZone: s.y }))();
      function _(e) {
        return Object(s.T)(e);
      }
      function C(e) {
        return (
          v('probe', _),
          v(
            'coreTokens',
            Object.assign(
              {},
              w,
              (e || []).reduce((e, t) => ((e[t.name] = t.token), e), {})
            )
          ),
          () => _
        );
      }
      const x = new s.p('EventManagerPlugins');
      let S = (() =>
        class {
          constructor(e, t) {
            (this._zone = t),
              (this._eventNameToPlugin = new Map()),
              e.forEach(e => (e.manager = this)),
              (this._plugins = e.slice().reverse());
          }
          addEventListener(e, t, n) {
            return this._findPluginFor(t).addEventListener(e, t, n);
          }
          addGlobalEventListener(e, t, n) {
            return this._findPluginFor(t).addGlobalEventListener(e, t, n);
          }
          getZone() {
            return this._zone;
          }
          _findPluginFor(e) {
            const t = this._eventNameToPlugin.get(e);
            if (t) return t;
            const n = this._plugins;
            for (let r = 0; r < n.length; r++) {
              const t = n[r];
              if (t.supports(e)) return this._eventNameToPlugin.set(e, t), t;
            }
            throw new Error('No event manager plugin found for event ' + e);
          }
        })();
      class E {
        constructor(e) {
          this._doc = e;
        }
        addGlobalEventListener(e, t, n) {
          const r = o().getGlobalEventTarget(this._doc, e);
          if (!r) throw new Error(`Unsupported event target ${r} for event ${t}`);
          return this.addEventListener(r, t, n);
        }
      }
      let O = (() =>
          class {
            constructor() {
              this._stylesSet = new Set();
            }
            addStyles(e) {
              const t = new Set();
              e.forEach(e => {
                this._stylesSet.has(e) || (this._stylesSet.add(e), t.add(e));
              }),
                this.onStylesAdded(t);
            }
            onStylesAdded(e) {}
            getAllStyles() {
              return Array.from(this._stylesSet);
            }
          })(),
        k = (() =>
          class extends O {
            constructor(e) {
              super(),
                (this._doc = e),
                (this._hostNodes = new Set()),
                (this._styleNodes = new Set()),
                this._hostNodes.add(e.head);
            }
            _addStylesToHost(e, t) {
              e.forEach(e => {
                const n = this._doc.createElement('style');
                (n.textContent = e), this._styleNodes.add(t.appendChild(n));
              });
            }
            addHost(e) {
              this._addStylesToHost(this._stylesSet, e), this._hostNodes.add(e);
            }
            removeHost(e) {
              this._hostNodes.delete(e);
            }
            onStylesAdded(e) {
              this._hostNodes.forEach(t => this._addStylesToHost(e, t));
            }
            ngOnDestroy() {
              this._styleNodes.forEach(e => o().remove(e));
            }
          })();
      const D = {
          svg: 'http://www.w3.org/2000/svg',
          xhtml: 'http://www.w3.org/1999/xhtml',
          xlink: 'http://www.w3.org/1999/xlink',
          xml: 'http://www.w3.org/XML/1998/namespace',
          xmlns: 'http://www.w3.org/2000/xmlns/'
        },
        T = /%COMP%/g;
      function A(e, t, n) {
        for (let r = 0; r < t.length; r++) {
          let s = t[r];
          Array.isArray(s) ? A(e, s, n) : ((s = s.replace(T, e)), n.push(s));
        }
        return n;
      }
      function I(e) {
        return t => {
          !1 === e(t) && (t.preventDefault(), (t.returnValue = !1));
        };
      }
      let j = (() =>
        class {
          constructor(e, t, n) {
            (this.eventManager = e),
              (this.sharedStylesHost = t),
              (this.appId = n),
              (this.rendererByCompId = new Map()),
              (this.defaultRenderer = new N(e));
          }
          createRenderer(e, t) {
            if (!e || !t) return this.defaultRenderer;
            switch (t.encapsulation) {
              case s.O.Emulated: {
                let n = this.rendererByCompId.get(t.id);
                return (
                  n ||
                    ((n = new M(this.eventManager, this.sharedStylesHost, t, this.appId)),
                    this.rendererByCompId.set(t.id, n)),
                  n.applyToHost(e),
                  n
                );
              }
              case s.O.Native:
              case s.O.ShadowDom:
                return new L(this.eventManager, this.sharedStylesHost, e, t);
              default:
                if (!this.rendererByCompId.has(t.id)) {
                  const e = A(t.id, t.styles, []);
                  this.sharedStylesHost.addStyles(e), this.rendererByCompId.set(t.id, this.defaultRenderer);
                }
                return this.defaultRenderer;
            }
          }
          begin() {}
          end() {}
        })();
      class N {
        constructor(e) {
          (this.eventManager = e), (this.data = Object.create(null));
        }
        destroy() {}
        createElement(e, t) {
          return t ? document.createElementNS(D[t] || t, e) : document.createElement(e);
        }
        createComment(e) {
          return document.createComment(e);
        }
        createText(e) {
          return document.createTextNode(e);
        }
        appendChild(e, t) {
          e.appendChild(t);
        }
        insertBefore(e, t, n) {
          e && e.insertBefore(t, n);
        }
        removeChild(e, t) {
          e && e.removeChild(t);
        }
        selectRootElement(e, t) {
          let n = 'string' == typeof e ? document.querySelector(e) : e;
          if (!n) throw new Error(`The selector "${e}" did not match any elements`);
          return t || (n.textContent = ''), n;
        }
        parentNode(e) {
          return e.parentNode;
        }
        nextSibling(e) {
          return e.nextSibling;
        }
        setAttribute(e, t, n, r) {
          if (r) {
            t = r + ':' + t;
            const s = D[r];
            s ? e.setAttributeNS(s, t, n) : e.setAttribute(t, n);
          } else e.setAttribute(t, n);
        }
        removeAttribute(e, t, n) {
          if (n) {
            const r = D[n];
            r ? e.removeAttributeNS(r, t) : e.removeAttribute(`${n}:${t}`);
          } else e.removeAttribute(t);
        }
        addClass(e, t) {
          e.classList.add(t);
        }
        removeClass(e, t) {
          e.classList.remove(t);
        }
        setStyle(e, t, n, r) {
          r & s.E.DashCase ? e.style.setProperty(t, n, r & s.E.Important ? 'important' : '') : (e.style[t] = n);
        }
        removeStyle(e, t, n) {
          n & s.E.DashCase ? e.style.removeProperty(t) : (e.style[t] = '');
        }
        setProperty(e, t, n) {
          P(t, 'property'), (e[t] = n);
        }
        setValue(e, t) {
          e.nodeValue = t;
        }
        listen(e, t, n) {
          return (
            P(t, 'listener'),
            'string' == typeof e
              ? this.eventManager.addGlobalEventListener(e, t, I(n))
              : this.eventManager.addEventListener(e, t, I(n))
          );
        }
      }
      const R = (() => '@'.charCodeAt(0))();
      function P(e, t) {
        if (e.charCodeAt(0) === R)
          throw new Error(
            `Found the synthetic ${t} ${e}. Please include either "BrowserAnimationsModule" or "NoopAnimationsModule" in your application.`
          );
      }
      class M extends N {
        constructor(e, t, n, r) {
          super(e), (this.component = n);
          const s = A(r + '-' + n.id, n.styles, []);
          t.addStyles(s),
            (this.contentAttr = '_ngcontent-%COMP%'.replace(T, r + '-' + n.id)),
            (this.hostAttr = (function(e) {
              return '_nghost-%COMP%'.replace(T, e);
            })(r + '-' + n.id));
        }
        applyToHost(e) {
          super.setAttribute(e, this.hostAttr, '');
        }
        createElement(e, t) {
          const n = super.createElement(e, t);
          return super.setAttribute(n, this.contentAttr, ''), n;
        }
      }
      class L extends N {
        constructor(e, t, n, r) {
          super(e),
            (this.sharedStylesHost = t),
            (this.hostEl = n),
            (this.component = r),
            (this.shadowRoot =
              r.encapsulation === s.O.ShadowDom ? n.attachShadow({ mode: 'open' }) : n.createShadowRoot()),
            this.sharedStylesHost.addHost(this.shadowRoot);
          const i = A(r.id, r.styles, []);
          for (let s = 0; s < i.length; s++) {
            const e = document.createElement('style');
            (e.textContent = i[s]), this.shadowRoot.appendChild(e);
          }
        }
        nodeOrShadowRoot(e) {
          return e === this.hostEl ? this.shadowRoot : e;
        }
        destroy() {
          this.sharedStylesHost.removeHost(this.shadowRoot);
        }
        appendChild(e, t) {
          return super.appendChild(this.nodeOrShadowRoot(e), t);
        }
        insertBefore(e, t, n) {
          return super.insertBefore(this.nodeOrShadowRoot(e), t, n);
        }
        removeChild(e, t) {
          return super.removeChild(this.nodeOrShadowRoot(e), t);
        }
        parentNode(e) {
          return this.nodeOrShadowRoot(super.parentNode(this.nodeOrShadowRoot(e)));
        }
      }
      const H = (() =>
          ('undefined' != typeof Zone && Zone.__symbol__) ||
          function(e) {
            return '__zone_symbol__' + e;
          })(),
        F = H('addEventListener'),
        U = H('removeEventListener'),
        V = {},
        q = '__zone_symbol__propagationStopped',
        $ = (() => {
          const e = 'undefined' != typeof Zone && Zone[H('BLACK_LISTED_EVENTS')];
          if (e) {
            const t = {};
            return (
              e.forEach(e => {
                t[e] = e;
              }),
              t
            );
          }
        })(),
        z = function(e) {
          return !!$ && $.hasOwnProperty(e);
        },
        B = function(e) {
          const t = V[e.type];
          if (!t) return;
          const n = this[t];
          if (!n) return;
          const r = [e];
          if (1 === n.length) {
            const e = n[0];
            return e.zone !== Zone.current ? e.zone.run(e.handler, this, r) : e.handler.apply(this, r);
          }
          {
            const t = n.slice();
            for (let n = 0; n < t.length && !0 !== e[q]; n++) {
              const e = t[n];
              e.zone !== Zone.current ? e.zone.run(e.handler, this, r) : e.handler.apply(this, r);
            }
          }
        };
      let W = (() =>
        class extends E {
          constructor(e, t, n) {
            super(e), (this.ngZone = t), (n && Object(r.w)(n)) || this.patchEvent();
          }
          patchEvent() {
            if ('undefined' == typeof Event || !Event || !Event.prototype) return;
            if (Event.prototype.__zone_symbol__stopImmediatePropagation) return;
            const e = (Event.prototype.__zone_symbol__stopImmediatePropagation =
              Event.prototype.stopImmediatePropagation);
            Event.prototype.stopImmediatePropagation = function() {
              this && (this[q] = !0), e && e.apply(this, arguments);
            };
          }
          supports(e) {
            return !0;
          }
          addEventListener(e, t, n) {
            let r = n;
            if (!e[F] || (s.y.isInAngularZone() && !z(t))) e.addEventListener(t, r, !1);
            else {
              let n = V[t];
              n || (n = V[t] = H('ANGULAR' + t + 'FALSE'));
              let s = e[n];
              const i = s && s.length > 0;
              s || (s = e[n] = []);
              const o = z(t) ? Zone.root : Zone.current;
              if (0 === s.length) s.push({ zone: o, handler: r });
              else {
                let e = !1;
                for (let t = 0; t < s.length; t++)
                  if (s[t].handler === r) {
                    e = !0;
                    break;
                  }
                e || s.push({ zone: o, handler: r });
              }
              i || e[F](t, B, !1);
            }
            return () => this.removeEventListener(e, t, r);
          }
          removeEventListener(e, t, n) {
            let r = e[U];
            if (!r) return e.removeEventListener.apply(e, [t, n, !1]);
            let s = V[t],
              i = s && e[s];
            if (!i) return e.removeEventListener.apply(e, [t, n, !1]);
            let o = !1;
            for (let a = 0; a < i.length; a++)
              if (i[a].handler === n) {
                (o = !0), i.splice(a, 1);
                break;
              }
            o ? 0 === i.length && r.apply(e, [t, B, !1]) : e.removeEventListener.apply(e, [t, n, !1]);
          }
        })();
      const G = {
          pan: !0,
          panstart: !0,
          panmove: !0,
          panend: !0,
          pancancel: !0,
          panleft: !0,
          panright: !0,
          panup: !0,
          pandown: !0,
          pinch: !0,
          pinchstart: !0,
          pinchmove: !0,
          pinchend: !0,
          pinchcancel: !0,
          pinchin: !0,
          pinchout: !0,
          press: !0,
          pressup: !0,
          rotate: !0,
          rotatestart: !0,
          rotatemove: !0,
          rotateend: !0,
          rotatecancel: !0,
          swipe: !0,
          swipeleft: !0,
          swiperight: !0,
          swipeup: !0,
          swipedown: !0,
          tap: !0
        },
        Z = new s.p('HammerGestureConfig'),
        K = new s.p('HammerLoader');
      let Q = (() =>
          class {
            constructor() {
              (this.events = []), (this.overrides = {});
            }
            buildHammer(e) {
              const t = new Hammer(e, this.options);
              t.get('pinch').set({ enable: !0 }), t.get('rotate').set({ enable: !0 });
              for (const n in this.overrides) t.get(n).set(this.overrides[n]);
              return t;
            }
          })(),
        Y = (() =>
          class extends E {
            constructor(e, t, n, r) {
              super(e), (this._config = t), (this.console = n), (this.loader = r);
            }
            supports(e) {
              return !(
                (!G.hasOwnProperty(e.toLowerCase()) && !this.isCustomEvent(e)) ||
                (!window.Hammer &&
                  !this.loader &&
                  (this.console.warn(
                    `The "${e}" event cannot be bound because Hammer.JS is not loaded and no custom loader has been specified.`
                  ),
                  1))
              );
            }
            addEventListener(e, t, n) {
              const r = this.manager.getZone();
              if (((t = t.toLowerCase()), !window.Hammer && this.loader)) {
                let r = !1,
                  s = () => {
                    r = !0;
                  };
                return (
                  this.loader()
                    .then(() => {
                      if (!window.Hammer)
                        return (
                          this.console.warn('The custom HAMMER_LOADER completed, but Hammer.JS is not present.'),
                          void (s = () => {})
                        );
                      r || (s = this.addEventListener(e, t, n));
                    })
                    .catch(() => {
                      this.console.warn(`The "${t}" event cannot be bound because the custom Hammer.JS loader failed.`),
                        (s = () => {});
                    }),
                  () => {
                    s();
                  }
                );
              }
              return r.runOutsideAngular(() => {
                const s = this._config.buildHammer(e),
                  i = function(e) {
                    r.runGuarded(function() {
                      n(e);
                    });
                  };
                return (
                  s.on(t, i),
                  () => {
                    s.off(t, i), 'function' == typeof s.destroy && s.destroy();
                  }
                );
              });
            }
            isCustomEvent(e) {
              return this._config.events.indexOf(e) > -1;
            }
          })();
      const J = ['alt', 'control', 'meta', 'shift'],
        X = { alt: e => e.altKey, control: e => e.ctrlKey, meta: e => e.metaKey, shift: e => e.shiftKey };
      let ee = (() => {
        class e extends E {
          constructor(e) {
            super(e);
          }
          supports(t) {
            return null != e.parseEventName(t);
          }
          addEventListener(t, n, r) {
            const s = e.parseEventName(n),
              i = e.eventCallback(s.fullKey, r, this.manager.getZone());
            return this.manager.getZone().runOutsideAngular(() => o().onAndCancel(t, s.domEventName, i));
          }
          static parseEventName(t) {
            const n = t.toLowerCase().split('.'),
              r = n.shift();
            if (0 === n.length || ('keydown' !== r && 'keyup' !== r)) return null;
            const s = e._normalizeKey(n.pop());
            let i = '';
            if (
              (J.forEach(e => {
                const t = n.indexOf(e);
                t > -1 && (n.splice(t, 1), (i += e + '.'));
              }),
              (i += s),
              0 != n.length || 0 === s.length)
            )
              return null;
            const o = {};
            return (o.domEventName = r), (o.fullKey = i), o;
          }
          static getEventFullKey(e) {
            let t = '',
              n = o().getEventKey(e);
            return (
              (n = n.toLowerCase()),
              ' ' === n ? (n = 'space') : '.' === n && (n = 'dot'),
              J.forEach(r => {
                r != n && (0, X[r])(e) && (t += r + '.');
              }),
              (t += n),
              t
            );
          }
          static eventCallback(t, n, r) {
            return s => {
              e.getEventFullKey(s) === t && r.runGuarded(() => n(s));
            };
          }
          static _normalizeKey(e) {
            switch (e) {
              case 'esc':
                return 'escape';
              default:
                return e;
            }
          }
        }
        return e;
      })();
      class te {}
      let ne = (() =>
        class extends te {
          constructor(e) {
            super(), (this._doc = e);
          }
          sanitize(e, t) {
            if (null == t) return null;
            switch (e) {
              case s.G.NONE:
                return t;
              case s.G.HTML:
                return t instanceof se
                  ? t.changingThisBreaksApplicationSecurity
                  : (this.checkNotSafeValue(t, 'HTML'), Object(s.cb)(this._doc, String(t)));
              case s.G.STYLE:
                return t instanceof ie
                  ? t.changingThisBreaksApplicationSecurity
                  : (this.checkNotSafeValue(t, 'Style'), Object(s.db)(t));
              case s.G.SCRIPT:
                if (t instanceof oe) return t.changingThisBreaksApplicationSecurity;
                throw (this.checkNotSafeValue(t, 'Script'), new Error('unsafe value used in a script context'));
              case s.G.URL:
                return t instanceof le || t instanceof ae
                  ? t.changingThisBreaksApplicationSecurity
                  : (this.checkNotSafeValue(t, 'URL'), Object(s.eb)(String(t)));
              case s.G.RESOURCE_URL:
                if (t instanceof le) return t.changingThisBreaksApplicationSecurity;
                throw (this.checkNotSafeValue(t, 'ResourceURL'),
                new Error('unsafe value used in a resource URL context (see http://g.co/ng/security#xss)'));
              default:
                throw new Error(`Unexpected SecurityContext ${e} (see http://g.co/ng/security#xss)`);
            }
          }
          checkNotSafeValue(e, t) {
            if (e instanceof re)
              throw new Error(`Required a safe ${t}, got a ${e.getTypeName()} (see http://g.co/ng/security#xss)`);
          }
          bypassSecurityTrustHtml(e) {
            return new se(e);
          }
          bypassSecurityTrustStyle(e) {
            return new ie(e);
          }
          bypassSecurityTrustScript(e) {
            return new oe(e);
          }
          bypassSecurityTrustUrl(e) {
            return new ae(e);
          }
          bypassSecurityTrustResourceUrl(e) {
            return new le(e);
          }
        })();
      class re {
        constructor(e) {
          this.changingThisBreaksApplicationSecurity = e;
        }
        toString() {
          return (
            'SafeValue must use [property]=binding: ' +
            this.changingThisBreaksApplicationSecurity +
            ' (see http://g.co/ng/security#xss)'
          );
        }
      }
      class se extends re {
        getTypeName() {
          return 'HTML';
        }
      }
      class ie extends re {
        getTypeName() {
          return 'Style';
        }
      }
      class oe extends re {
        getTypeName() {
          return 'Script';
        }
      }
      class ae extends re {
        getTypeName() {
          return 'URL';
        }
      }
      class le extends re {
        getTypeName() {
          return 'ResourceURL';
        }
      }
      const ue = [
          { provide: s.A, useValue: r.x },
          {
            provide: s.B,
            useValue: function() {
              h.makeCurrent(), y.init();
            },
            multi: !0
          },
          { provide: r.o, useClass: g, deps: [r.c] },
          {
            provide: r.c,
            useFactory: function() {
              return document;
            },
            deps: []
          }
        ],
        ce = Object(s.Q)(s.V, 'browser', ue);
      function he() {
        return new s.l();
      }
      let de = (() => {
        class e {
          constructor(e) {
            if (e)
              throw new Error(
                'BrowserModule has already been loaded. If you need access to common directives such as NgIf and NgFor from a lazy loaded module, import CommonModule instead.'
              );
          }
          static withServerTransition(t) {
            return {
              ngModule: e,
              providers: [{ provide: s.c, useValue: t.appId }, { provide: m, useExisting: s.c }, b]
            };
          }
        }
        return e;
      })();
      function pe() {
        return new fe(Object(s.Nb)(r.c));
      }
      let fe = (() => {
        class e {
          constructor(e) {
            this._doc = e;
          }
          getTitle() {
            return o().getTitle(this._doc);
          }
          setTitle(e) {
            o().setTitle(this._doc, e);
          }
        }
        return (e.ngInjectableDef = Object(s.Mb)({ factory: pe, token: e, providedIn: 'root' })), e;
      })();
      'undefined' != typeof window && window;
    },
    dXti: function(e, t, n) {
      'use strict';
      n.d(t, 'a', function() {
        return o;
      });
      var r = n('fSl4'),
        s = n('8Y7J');
      const i = new r.a('HttpCacheService');
      let o = (() => {
        class e {
          constructor() {
            (this.cachedData = {}), (this.storage = null), this.loadCacheData();
          }
          setCacheData(e, t, n) {
            (this.cachedData[e] = { lastUpdated: n || new Date(), data: t }),
              i.debug(`Cache set for key: "${e}"`),
              this.saveCacheData();
          }
          getCacheData(e) {
            const t = this.cachedData[e];
            return t ? (i.debug(`Cache hit for key: "${e}"`), t.data) : null;
          }
          getHttpCacheEntry(e) {
            return this.cachedData[e] || null;
          }
          clearCache(e) {
            delete this.cachedData[e], i.debug(`Cache cleared for key: "${e}"`), this.saveCacheData();
          }
          cleanCache(e) {
            e
              ? Object.entries(this.cachedData).forEach(([t, n]) => {
                  e >= n.lastUpdated && delete this.cachedData[t];
                })
              : (this.cachedData = {}),
              this.saveCacheData();
          }
          setPersistence(e) {
            this.cleanCache(),
              (this.storage = 'local' === e || 'session' === e ? window[e + 'Storage'] : null),
              this.loadCacheData();
          }
          saveCacheData() {
            this.storage && this.storage.setItem('httpCache', JSON.stringify(this.cachedData));
          }
          loadCacheData() {
            const e = this.storage ? this.storage.getItem('httpCache') : null;
            this.cachedData = e ? JSON.parse(e) : {};
          }
        }
        return (
          (e.ngInjectableDef = s.Mb({
            factory: function() {
              return new e();
            },
            token: e,
            providedIn: 'root'
          })),
          e
        );
      })();
    },
    eIep: function(e, t, n) {
      'use strict';
      n.d(t, 'a', function() {
        return l;
      });
      var r = n('l7GE'),
        s = n('51Dv'),
        i = n('ZUHj'),
        o = n('lJxs'),
        a = n('Cfvw');
      function l(e, t) {
        return 'function' == typeof t
          ? n => n.pipe(l((n, r) => Object(a.a)(e(n, r)).pipe(Object(o.a)((e, s) => t(n, e, r, s)))))
          : t => t.lift(new u(e));
      }
      class u {
        constructor(e) {
          this.project = e;
        }
        call(e, t) {
          return t.subscribe(new c(e, this.project));
        }
      }
      class c extends r.a {
        constructor(e, t) {
          super(e), (this.project = t), (this.index = 0);
        }
        _next(e) {
          let t;
          const n = this.index++;
          try {
            t = this.project(e, n);
          } catch (r) {
            return void this.destination.error(r);
          }
          this._innerSub(t, e, n);
        }
        _innerSub(e, t, n) {
          const r = this.innerSubscription;
          r && r.unsubscribe();
          const o = new s.a(this, t, n),
            a = this.destination;
          a.add(o),
            (this.innerSubscription = Object(i.a)(this, e, void 0, void 0, o)),
            this.innerSubscription !== o && a.add(this.innerSubscription);
        }
        _complete() {
          const { innerSubscription: e } = this;
          (e && !e.closed) || super._complete(), this.unsubscribe();
        }
        _unsubscribe() {
          this.innerSubscription = null;
        }
        notifyComplete(e) {
          this.destination.remove(e), (this.innerSubscription = null), this.isStopped && super._complete();
        }
        notifyNext(e, t, n, r, s) {
          this.destination.next(t);
        }
      }
    },
    ey9i: function(e, t, n) {
      'use strict';
      n('pKmL');
      var r = n('4WJ2'),
        s = (n('gHic'), n('dXti'), n('+YFA'), n('Lo2u'), n('J6E/'), n('znf/'), n('fSl4')),
        i = n('XNiG'),
        o = n('1G5W');
      const a = Symbol('untilDestroyed');
      function l(e, t = 'ngOnDestroy') {
        return n => {
          const r = e[t],
            s = 'function' == typeof r;
          if (!s) throw new Error(`${e.constructor.name} is using untilDestroyed but doesn't implement ${t}`);
          return (
            e[a] ||
              ((e[a] = new i.a()),
              (e[t] = function() {
                s && r.apply(this, arguments), e[a].next(), e[a].complete();
              })),
            n.pipe(Object(o.a)(e[a]))
          );
        };
      }
      n.d(t, 'b', function() {
        return r.b;
      }),
        n.d(t, 'a', function() {
          return s.a;
        }),
        n.d(t, 'c', function() {
          return l;
        });
    },
    fSl4: function(e, t, n) {
      'use strict';
      n.d(t, 'a', function() {
        return s;
      });
      var r = (function(e) {
        return (
          (e[(e.Off = 0)] = 'Off'),
          (e[(e.Error = 1)] = 'Error'),
          (e[(e.Warning = 2)] = 'Warning'),
          (e[(e.Info = 3)] = 'Info'),
          (e[(e.Debug = 4)] = 'Debug'),
          e
        );
      })({});
      let s = (() => {
        class e {
          constructor(e) {
            this.source = e;
          }
          static enableProductionMode() {
            e.level = r.Warning;
          }
          debug(...e) {
            this.log(console.log, r.Debug, e);
          }
          info(...e) {
            this.log(console.info, r.Info, e);
          }
          warn(...e) {
            this.log(console.warn, r.Warning, e);
          }
          error(...e) {
            this.log(console.error, r.Error, e);
          }
          log(t, n, r) {
            if (n <= e.level) {
              const s = this.source ? ['[' + this.source + ']'].concat(r) : r;
              t.apply(console, s), e.outputs.forEach(e => e.apply(e, [this.source, n, ...r]));
            }
          }
        }
        return (e.level = r.Debug), (e.outputs = []), e;
      })();
    },
    gHic: function(e, t, n) {
      'use strict';
      n.d(t, 'a', function() {
        return u;
      }),
        n.d(t, 'b', function() {
          return c;
        });
      var r = n('8Y7J'),
        s = n('IheW'),
        i = n('J6E/'),
        o = n('Lo2u'),
        a = n('+YFA');
      class l {
        constructor(e, t) {
          (this.next = e), (this.interceptor = t);
        }
        handle(e) {
          return this.interceptor.intercept(e, this.next);
        }
      }
      const u = new r.p('HTTP_DYNAMIC_INTERCEPTORS');
      let c = (() => {
        class e extends s.c {
          constructor(e, t, n = []) {
            super(e),
              (this.httpHandler = e),
              (this.injector = t),
              (this.interceptors = n),
              this.interceptors || (this.interceptors = [this.injector.get(a.a), this.injector.get(i.a)]);
          }
          cache(e) {
            const t = this.injector.get(o.a).configure({ update: e });
            return this.addInterceptor(t);
          }
          skipErrorHandler() {
            return this.removeInterceptor(i.a);
          }
          disableApiPrefix() {
            return this.removeInterceptor(a.a);
          }
          request(e, t, n) {
            const r = this.interceptors.reduceRight((e, t) => new l(e, t), this.httpHandler);
            return new s.c(r).request(e, t, n);
          }
          removeInterceptor(t) {
            return new e(
              this.httpHandler,
              this.injector,
              this.interceptors.filter(e => !(e instanceof t))
            );
          }
          addInterceptor(t) {
            return new e(this.httpHandler, this.injector, this.interceptors.concat([t]));
          }
        }
        return (
          (e.ngInjectableDef = r.Mb({
            factory: function() {
              return new e(r.Nb(s.f), r.Nb(r.n), r.Nb(u, 8));
            },
            token: e,
            providedIn: 'root'
          })),
          e
        );
      })();
    },
    gRHU: function(e, t, n) {
      'use strict';
      n.d(t, 'a', function() {
        return i;
      });
      var r = n('2fFW'),
        s = n('NJ4a');
      const i = {
        closed: !0,
        next(e) {},
        error(e) {
          if (r.a.useDeprecatedSynchronousErrorHandling) throw e;
          Object(s.a)(e);
        },
        complete() {}
      };
    },
    iInd: function(e, t, n) {
      'use strict';
      var r = n('SVse'),
        s = n('8Y7J'),
        i = n('LRne'),
        o = n('Cfvw'),
        a = n('2Vo4'),
        l = n('HDdC');
      const u = (() => {
        function e() {
          return Error.call(this), (this.message = 'no elements in sequence'), (this.name = 'EmptyError'), this;
        }
        return (e.prototype = Object.create(Error.prototype)), e;
      })();
      var c = n('itXk'),
        h = n('NXyV'),
        d = n('XNiG'),
        p = n('EY2u'),
        f = n('lJxs'),
        g = n('0EUg'),
        m = n('pLZG'),
        b = n('BFxc'),
        y = n('7o/Q');
      function v(e = C) {
        return t => t.lift(new w(e));
      }
      class w {
        constructor(e) {
          this.errorFactory = e;
        }
        call(e, t) {
          return t.subscribe(new _(e, this.errorFactory));
        }
      }
      class _ extends y.a {
        constructor(e, t) {
          super(e), (this.errorFactory = t), (this.hasValue = !1);
        }
        _next(e) {
          (this.hasValue = !0), this.destination.next(e);
        }
        _complete() {
          if (this.hasValue) return this.destination.complete();
          {
            let t;
            try {
              t = this.errorFactory();
            } catch (e) {
              t = e;
            }
            this.destination.error(t);
          }
        }
      }
      function C() {
        return new u();
      }
      var x = n('xbPD'),
        S = n('SpAZ');
      function E(e, t) {
        const n = arguments.length >= 2;
        return r =>
          r.pipe(e ? Object(m.a)((t, n) => e(t, n, r)) : S.a, Object(b.a)(1), n ? Object(x.a)(t) : v(() => new u()));
      }
      var O = n('JIr8'),
        k = n('IzEk');
      function D(e, t) {
        const n = arguments.length >= 2;
        return r =>
          r.pipe(e ? Object(m.a)((t, n) => e(t, n, r)) : S.a, Object(k.a)(1), n ? Object(x.a)(t) : v(() => new u()));
      }
      var T = n('5+tZ');
      class A {
        constructor(e, t, n) {
          (this.predicate = e), (this.thisArg = t), (this.source = n);
        }
        call(e, t) {
          return t.subscribe(new I(e, this.predicate, this.thisArg, this.source));
        }
      }
      class I extends y.a {
        constructor(e, t, n, r) {
          super(e),
            (this.predicate = t),
            (this.thisArg = n),
            (this.source = r),
            (this.index = 0),
            (this.thisArg = n || this);
        }
        notifyComplete(e) {
          this.destination.next(e), this.destination.complete();
        }
        _next(e) {
          let t = !1;
          try {
            t = this.predicate.call(this.thisArg, e, this.index++, this.source);
          } catch (n) {
            return void this.destination.error(n);
          }
          t || this.notifyComplete(!1);
        }
        _complete() {
          this.notifyComplete(!0);
        }
      }
      var j = n('eIep'),
        N = n('JX91'),
        R = n('Kqap'),
        P = n('bOdf'),
        M = n('128B'),
        L = n('vkgz'),
        H = n('nYR2'),
        F = n('bHdf'),
        U = n('cUpR');
      n.d(t, 'E', function() {
        return se;
      }),
        n.d(t, 'u', function() {
          return vn;
        }),
        n.d(t, 'B', function() {
          return Tn;
        }),
        n.d(t, 'w', function() {
          return xn;
        }),
        n.d(t, 'C', function() {
          return An;
        }),
        n.d(t, 'D', function() {
          return In;
        }),
        n.d(t, 'y', function() {
          return En;
        }),
        n.d(t, 'x', function() {
          return Sn;
        }),
        n.d(t, 'A', function() {
          return Dn;
        }),
        n.d(t, 'v', function() {
          return _n;
        }),
        n.d(t, 'z', function() {
          return kn;
        }),
        n.d(t, 'F', function() {
          return bn;
        }),
        n.d(t, 'm', function() {
          return sn;
        }),
        n.d(t, 'o', function() {
          return on;
        }),
        n.d(t, 'n', function() {
          return ln;
        }),
        n.d(t, 'q', function() {
          return hn;
        }),
        n.d(t, 'd', function() {
          return $;
        }),
        n.d(t, 'k', function() {
          return Zt;
        }),
        n.d(t, 'l', function() {
          return rn;
        }),
        n.d(t, 'j', function() {
          return Qt;
        }),
        n.d(t, 'h', function() {
          return yn;
        }),
        n.d(t, 'i', function() {
          return jn;
        }),
        n.d(t, 'p', function() {
          return Cn;
        }),
        n.d(t, 'b', function() {
          return cn;
        }),
        n.d(t, 'e', function() {
          return gn;
        }),
        n.d(t, 'f', function() {
          return fn;
        }),
        n.d(t, 'g', function() {
          return pn;
        }),
        n.d(t, 'r', function() {
          return mn;
        }),
        n.d(t, 'a', function() {
          return Ge;
        }),
        n.d(t, 's', function() {
          return Jt;
        }),
        n.d(t, 'c', function() {
          return Oe;
        }),
        n.d(t, 't', function() {
          return Ee;
        });
      class V {
        constructor(e, t) {
          (this.id = e), (this.url = t);
        }
      }
      class q extends V {
        constructor(e, t, n = 'imperative', r = null) {
          super(e, t), (this.navigationTrigger = n), (this.restoredState = r);
        }
        toString() {
          return `NavigationStart(id: ${this.id}, url: '${this.url}')`;
        }
      }
      class $ extends V {
        constructor(e, t, n) {
          super(e, t), (this.urlAfterRedirects = n);
        }
        toString() {
          return `NavigationEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}')`;
        }
      }
      class z extends V {
        constructor(e, t, n) {
          super(e, t), (this.reason = n);
        }
        toString() {
          return `NavigationCancel(id: ${this.id}, url: '${this.url}')`;
        }
      }
      class B extends V {
        constructor(e, t, n) {
          super(e, t), (this.error = n);
        }
        toString() {
          return `NavigationError(id: ${this.id}, url: '${this.url}', error: ${this.error})`;
        }
      }
      class W extends V {
        constructor(e, t, n, r) {
          super(e, t), (this.urlAfterRedirects = n), (this.state = r);
        }
        toString() {
          return `RoutesRecognized(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`;
        }
      }
      class G extends V {
        constructor(e, t, n, r) {
          super(e, t), (this.urlAfterRedirects = n), (this.state = r);
        }
        toString() {
          return `GuardsCheckStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`;
        }
      }
      class Z extends V {
        constructor(e, t, n, r, s) {
          super(e, t), (this.urlAfterRedirects = n), (this.state = r), (this.shouldActivate = s);
        }
        toString() {
          return `GuardsCheckEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state}, shouldActivate: ${this.shouldActivate})`;
        }
      }
      class K extends V {
        constructor(e, t, n, r) {
          super(e, t), (this.urlAfterRedirects = n), (this.state = r);
        }
        toString() {
          return `ResolveStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`;
        }
      }
      class Q extends V {
        constructor(e, t, n, r) {
          super(e, t), (this.urlAfterRedirects = n), (this.state = r);
        }
        toString() {
          return `ResolveEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`;
        }
      }
      class Y {
        constructor(e) {
          this.route = e;
        }
        toString() {
          return `RouteConfigLoadStart(path: ${this.route.path})`;
        }
      }
      class J {
        constructor(e) {
          this.route = e;
        }
        toString() {
          return `RouteConfigLoadEnd(path: ${this.route.path})`;
        }
      }
      class X {
        constructor(e) {
          this.snapshot = e;
        }
        toString() {
          return `ChildActivationStart(path: '${(this.snapshot.routeConfig && this.snapshot.routeConfig.path) || ''}')`;
        }
      }
      class ee {
        constructor(e) {
          this.snapshot = e;
        }
        toString() {
          return `ChildActivationEnd(path: '${(this.snapshot.routeConfig && this.snapshot.routeConfig.path) || ''}')`;
        }
      }
      class te {
        constructor(e) {
          this.snapshot = e;
        }
        toString() {
          return `ActivationStart(path: '${(this.snapshot.routeConfig && this.snapshot.routeConfig.path) || ''}')`;
        }
      }
      class ne {
        constructor(e) {
          this.snapshot = e;
        }
        toString() {
          return `ActivationEnd(path: '${(this.snapshot.routeConfig && this.snapshot.routeConfig.path) || ''}')`;
        }
      }
      class re {
        constructor(e, t, n) {
          (this.routerEvent = e), (this.position = t), (this.anchor = n);
        }
        toString() {
          return `Scroll(anchor: '${this.anchor}', position: '${
            this.position ? `${this.position[0]}, ${this.position[1]}` : null
          }')`;
        }
      }
      let se = (() => class {})();
      class ie {
        constructor(e) {
          this.params = e || {};
        }
        has(e) {
          return this.params.hasOwnProperty(e);
        }
        get(e) {
          if (this.has(e)) {
            const t = this.params[e];
            return Array.isArray(t) ? t[0] : t;
          }
          return null;
        }
        getAll(e) {
          if (this.has(e)) {
            const t = this.params[e];
            return Array.isArray(t) ? t : [t];
          }
          return [];
        }
        get keys() {
          return Object.keys(this.params);
        }
      }
      function oe(e) {
        return new ie(e);
      }
      function ae(e) {
        const t = Error('NavigationCancelingError: ' + e);
        return (t.ngNavigationCancelingError = !0), t;
      }
      function le(e, t, n) {
        const r = n.path.split('/');
        if (r.length > e.length) return null;
        if ('full' === n.pathMatch && (t.hasChildren() || r.length < e.length)) return null;
        const s = {};
        for (let i = 0; i < r.length; i++) {
          const t = r[i],
            n = e[i];
          if (t.startsWith(':')) s[t.substring(1)] = n;
          else if (t !== n.path) return null;
        }
        return { consumed: e.slice(0, r.length), posParams: s };
      }
      class ue {
        constructor(e, t) {
          (this.routes = e), (this.module = t);
        }
      }
      function ce(e, t = '') {
        for (let n = 0; n < e.length; n++) {
          const r = e[n];
          he(r, de(t, r));
        }
      }
      function he(e, t) {
        if (!e)
          throw new Error(
            `\n      Invalid configuration of route '${t}': Encountered undefined route.\n      The reason might be an extra comma.\n\n      Example:\n      const routes: Routes = [\n        { path: '', redirectTo: '/dashboard', pathMatch: 'full' },\n        { path: 'dashboard',  component: DashboardComponent },, << two commas\n        { path: 'detail/:id', component: HeroDetailComponent }\n      ];\n    `
          );
        if (Array.isArray(e)) throw new Error(`Invalid configuration of route '${t}': Array cannot be specified`);
        if (!e.component && !e.children && !e.loadChildren && e.outlet && 'primary' !== e.outlet)
          throw new Error(
            `Invalid configuration of route '${t}': a componentless route without children or loadChildren cannot have a named outlet set`
          );
        if (e.redirectTo && e.children)
          throw new Error(`Invalid configuration of route '${t}': redirectTo and children cannot be used together`);
        if (e.redirectTo && e.loadChildren)
          throw new Error(`Invalid configuration of route '${t}': redirectTo and loadChildren cannot be used together`);
        if (e.children && e.loadChildren)
          throw new Error(`Invalid configuration of route '${t}': children and loadChildren cannot be used together`);
        if (e.redirectTo && e.component)
          throw new Error(`Invalid configuration of route '${t}': redirectTo and component cannot be used together`);
        if (e.path && e.matcher)
          throw new Error(`Invalid configuration of route '${t}': path and matcher cannot be used together`);
        if (void 0 === e.redirectTo && !e.component && !e.children && !e.loadChildren)
          throw new Error(
            `Invalid configuration of route '${t}'. One of the following must be provided: component, redirectTo, children or loadChildren`
          );
        if (void 0 === e.path && void 0 === e.matcher)
          throw new Error(
            `Invalid configuration of route '${t}': routes must have either a path or a matcher specified`
          );
        if ('string' == typeof e.path && '/' === e.path.charAt(0))
          throw new Error(`Invalid configuration of route '${t}': path cannot start with a slash`);
        if ('' === e.path && void 0 !== e.redirectTo && void 0 === e.pathMatch)
          throw new Error(
            `Invalid configuration of route '{path: "${t}", redirectTo: "${e.redirectTo}"}': please provide 'pathMatch'. The default value of 'pathMatch' is 'prefix', but often the intent is to use 'full'.`
          );
        if (void 0 !== e.pathMatch && 'full' !== e.pathMatch && 'prefix' !== e.pathMatch)
          throw new Error(`Invalid configuration of route '${t}': pathMatch can only be set to 'prefix' or 'full'`);
        e.children && ce(e.children, t);
      }
      function de(e, t) {
        return t ? (e || t.path ? (e && !t.path ? e + '/' : !e && t.path ? t.path : `${e}/${t.path}`) : '') : e;
      }
      function pe(e) {
        const t = e.children && e.children.map(pe),
          n = t ? Object.assign({}, e, { children: t }) : Object.assign({}, e);
        return !n.component && (t || n.loadChildren) && n.outlet && 'primary' !== n.outlet && (n.component = se), n;
      }
      function fe(e, t) {
        const n = Object.keys(e),
          r = Object.keys(t);
        if (!n || !r || n.length != r.length) return !1;
        let s;
        for (let i = 0; i < n.length; i++) if (((s = n[i]), e[s] !== t[s])) return !1;
        return !0;
      }
      function ge(e) {
        return Array.prototype.concat.apply([], e);
      }
      function me(e) {
        return e.length > 0 ? e[e.length - 1] : null;
      }
      function be(e, t) {
        for (const n in e) e.hasOwnProperty(n) && t(e[n], n);
      }
      function ye(e) {
        return Object(s.wb)(e) ? e : Object(s.xb)(e) ? Object(o.a)(Promise.resolve(e)) : Object(i.a)(e);
      }
      function ve(e, t, n) {
        return n
          ? (function(e, t) {
              return fe(e, t);
            })(e.queryParams, t.queryParams) &&
              (function e(t, n) {
                if (!xe(t.segments, n.segments)) return !1;
                if (t.numberOfChildren !== n.numberOfChildren) return !1;
                for (const r in n.children) {
                  if (!t.children[r]) return !1;
                  if (!e(t.children[r], n.children[r])) return !1;
                }
                return !0;
              })(e.root, t.root)
          : (function(e, t) {
              return Object.keys(t).length <= Object.keys(e).length && Object.keys(t).every(n => t[n] === e[n]);
            })(e.queryParams, t.queryParams) &&
              (function e(t, n) {
                return (function t(n, r, s) {
                  if (n.segments.length > s.length) return !!xe(n.segments.slice(0, s.length), s) && !r.hasChildren();
                  if (n.segments.length === s.length) {
                    if (!xe(n.segments, s)) return !1;
                    for (const t in r.children) {
                      if (!n.children[t]) return !1;
                      if (!e(n.children[t], r.children[t])) return !1;
                    }
                    return !0;
                  }
                  {
                    const e = s.slice(0, n.segments.length),
                      i = s.slice(n.segments.length);
                    return !!xe(n.segments, e) && !!n.children.primary && t(n.children.primary, r, i);
                  }
                })(t, n, n.segments);
              })(e.root, t.root);
      }
      class we {
        constructor(e, t, n) {
          (this.root = e), (this.queryParams = t), (this.fragment = n);
        }
        get queryParamMap() {
          return this._queryParamMap || (this._queryParamMap = oe(this.queryParams)), this._queryParamMap;
        }
        toString() {
          return ke.serialize(this);
        }
      }
      class _e {
        constructor(e, t) {
          (this.segments = e), (this.children = t), (this.parent = null), be(t, (e, t) => (e.parent = this));
        }
        hasChildren() {
          return this.numberOfChildren > 0;
        }
        get numberOfChildren() {
          return Object.keys(this.children).length;
        }
        toString() {
          return De(this);
        }
      }
      class Ce {
        constructor(e, t) {
          (this.path = e), (this.parameters = t);
        }
        get parameterMap() {
          return this._parameterMap || (this._parameterMap = oe(this.parameters)), this._parameterMap;
        }
        toString() {
          return Re(this);
        }
      }
      function xe(e, t) {
        return e.length === t.length && e.every((e, n) => e.path === t[n].path);
      }
      function Se(e, t) {
        let n = [];
        return (
          be(e.children, (e, r) => {
            'primary' === r && (n = n.concat(t(e, r)));
          }),
          be(e.children, (e, r) => {
            'primary' !== r && (n = n.concat(t(e, r)));
          }),
          n
        );
      }
      class Ee {}
      class Oe {
        parse(e) {
          const t = new Fe(e);
          return new we(t.parseRootSegment(), t.parseQueryParams(), t.parseFragment());
        }
        serialize(e) {
          return `${'/' +
            (function e(t, n) {
              if (!t.hasChildren()) return De(t);
              if (n) {
                const n = t.children.primary ? e(t.children.primary, !1) : '',
                  r = [];
                return (
                  be(t.children, (t, n) => {
                    'primary' !== n && r.push(`${n}:${e(t, !1)}`);
                  }),
                  r.length > 0 ? `${n}(${r.join('//')})` : n
                );
              }
              {
                const n = Se(t, (n, r) => ('primary' === r ? [e(t.children.primary, !1)] : [`${r}:${e(n, !1)}`]));
                return `${De(t)}/(${n.join('//')})`;
              }
            })(e.root, !0)}${(function(e) {
            const t = Object.keys(e).map(t => {
              const n = e[t];
              return Array.isArray(n) ? n.map(e => `${Ae(t)}=${Ae(e)}`).join('&') : `${Ae(t)}=${Ae(n)}`;
            });
            return t.length ? '?' + t.join('&') : '';
          })(e.queryParams)}${'string' == typeof e.fragment ? '#' + encodeURI(e.fragment) : ''}`;
        }
      }
      const ke = new Oe();
      function De(e) {
        return e.segments.map(e => Re(e)).join('/');
      }
      function Te(e) {
        return encodeURIComponent(e)
          .replace(/%40/g, '@')
          .replace(/%3A/gi, ':')
          .replace(/%24/g, '$')
          .replace(/%2C/gi, ',');
      }
      function Ae(e) {
        return Te(e).replace(/%3B/gi, ';');
      }
      function Ie(e) {
        return Te(e)
          .replace(/\(/g, '%28')
          .replace(/\)/g, '%29')
          .replace(/%26/gi, '&');
      }
      function je(e) {
        return decodeURIComponent(e);
      }
      function Ne(e) {
        return je(e.replace(/\+/g, '%20'));
      }
      function Re(e) {
        return `${Ie(e.path)}${((t = e.parameters),
        Object.keys(t)
          .map(e => `;${Ie(e)}=${Ie(t[e])}`)
          .join(''))}`;
        var t;
      }
      const Pe = /^[^\/()?;=#]+/;
      function Me(e) {
        const t = e.match(Pe);
        return t ? t[0] : '';
      }
      const Le = /^[^=?&#]+/,
        He = /^[^?&#]+/;
      class Fe {
        constructor(e) {
          (this.url = e), (this.remaining = e);
        }
        parseRootSegment() {
          return (
            this.consumeOptional('/'),
            '' === this.remaining || this.peekStartsWith('?') || this.peekStartsWith('#')
              ? new _e([], {})
              : new _e([], this.parseChildren())
          );
        }
        parseQueryParams() {
          const e = {};
          if (this.consumeOptional('?'))
            do {
              this.parseQueryParam(e);
            } while (this.consumeOptional('&'));
          return e;
        }
        parseFragment() {
          return this.consumeOptional('#') ? decodeURIComponent(this.remaining) : null;
        }
        parseChildren() {
          if ('' === this.remaining) return {};
          this.consumeOptional('/');
          const e = [];
          for (
            this.peekStartsWith('(') || e.push(this.parseSegment());
            this.peekStartsWith('/') && !this.peekStartsWith('//') && !this.peekStartsWith('/(');

          )
            this.capture('/'), e.push(this.parseSegment());
          let t = {};
          this.peekStartsWith('/(') && (this.capture('/'), (t = this.parseParens(!0)));
          let n = {};
          return (
            this.peekStartsWith('(') && (n = this.parseParens(!1)),
            (e.length > 0 || Object.keys(t).length > 0) && (n.primary = new _e(e, t)),
            n
          );
        }
        parseSegment() {
          const e = Me(this.remaining);
          if ('' === e && this.peekStartsWith(';'))
            throw new Error(`Empty path url segment cannot have parameters: '${this.remaining}'.`);
          return this.capture(e), new Ce(je(e), this.parseMatrixParams());
        }
        parseMatrixParams() {
          const e = {};
          for (; this.consumeOptional(';'); ) this.parseParam(e);
          return e;
        }
        parseParam(e) {
          const t = Me(this.remaining);
          if (!t) return;
          this.capture(t);
          let n = '';
          if (this.consumeOptional('=')) {
            const e = Me(this.remaining);
            e && ((n = e), this.capture(n));
          }
          e[je(t)] = je(n);
        }
        parseQueryParam(e) {
          const t = (function(e) {
            const t = e.match(Le);
            return t ? t[0] : '';
          })(this.remaining);
          if (!t) return;
          this.capture(t);
          let n = '';
          if (this.consumeOptional('=')) {
            const e = (function(e) {
              const t = e.match(He);
              return t ? t[0] : '';
            })(this.remaining);
            e && ((n = e), this.capture(n));
          }
          const r = Ne(t),
            s = Ne(n);
          if (e.hasOwnProperty(r)) {
            let t = e[r];
            Array.isArray(t) || ((t = [t]), (e[r] = t)), t.push(s);
          } else e[r] = s;
        }
        parseParens(e) {
          const t = {};
          for (this.capture('('); !this.consumeOptional(')') && this.remaining.length > 0; ) {
            const n = Me(this.remaining),
              r = this.remaining[n.length];
            if ('/' !== r && ')' !== r && ';' !== r) throw new Error(`Cannot parse url '${this.url}'`);
            let s = void 0;
            n.indexOf(':') > -1
              ? ((s = n.substr(0, n.indexOf(':'))), this.capture(s), this.capture(':'))
              : e && (s = 'primary');
            const i = this.parseChildren();
            (t[s] = 1 === Object.keys(i).length ? i.primary : new _e([], i)), this.consumeOptional('//');
          }
          return t;
        }
        peekStartsWith(e) {
          return this.remaining.startsWith(e);
        }
        consumeOptional(e) {
          return !!this.peekStartsWith(e) && ((this.remaining = this.remaining.substring(e.length)), !0);
        }
        capture(e) {
          if (!this.consumeOptional(e)) throw new Error(`Expected "${e}".`);
        }
      }
      class Ue {
        constructor(e) {
          this._root = e;
        }
        get root() {
          return this._root.value;
        }
        parent(e) {
          const t = this.pathFromRoot(e);
          return t.length > 1 ? t[t.length - 2] : null;
        }
        children(e) {
          const t = Ve(e, this._root);
          return t ? t.children.map(e => e.value) : [];
        }
        firstChild(e) {
          const t = Ve(e, this._root);
          return t && t.children.length > 0 ? t.children[0].value : null;
        }
        siblings(e) {
          const t = qe(e, this._root);
          return t.length < 2 ? [] : t[t.length - 2].children.map(e => e.value).filter(t => t !== e);
        }
        pathFromRoot(e) {
          return qe(e, this._root).map(e => e.value);
        }
      }
      function Ve(e, t) {
        if (e === t.value) return t;
        for (const n of t.children) {
          const t = Ve(e, n);
          if (t) return t;
        }
        return null;
      }
      function qe(e, t) {
        if (e === t.value) return [t];
        for (const n of t.children) {
          const r = qe(e, n);
          if (r.length) return r.unshift(t), r;
        }
        return [];
      }
      class $e {
        constructor(e, t) {
          (this.value = e), (this.children = t);
        }
        toString() {
          return `TreeNode(${this.value})`;
        }
      }
      function ze(e) {
        const t = {};
        return e && e.children.forEach(e => (t[e.value.outlet] = e)), t;
      }
      class Be extends Ue {
        constructor(e, t) {
          super(e), (this.snapshot = t), Ye(this, e);
        }
        toString() {
          return this.snapshot.toString();
        }
      }
      function We(e, t) {
        const n = (function(e, t) {
            const n = new Ke([], {}, {}, '', {}, 'primary', t, null, e.root, -1, {});
            return new Qe('', new $e(n, []));
          })(e, t),
          r = new a.a([new Ce('', {})]),
          s = new a.a({}),
          i = new a.a({}),
          o = new a.a({}),
          l = new a.a(''),
          u = new Ge(r, s, o, l, i, 'primary', t, n.root);
        return (u.snapshot = n.root), new Be(new $e(u, []), n);
      }
      class Ge {
        constructor(e, t, n, r, s, i, o, a) {
          (this.url = e),
            (this.params = t),
            (this.queryParams = n),
            (this.fragment = r),
            (this.data = s),
            (this.outlet = i),
            (this.component = o),
            (this._futureSnapshot = a);
        }
        get routeConfig() {
          return this._futureSnapshot.routeConfig;
        }
        get root() {
          return this._routerState.root;
        }
        get parent() {
          return this._routerState.parent(this);
        }
        get firstChild() {
          return this._routerState.firstChild(this);
        }
        get children() {
          return this._routerState.children(this);
        }
        get pathFromRoot() {
          return this._routerState.pathFromRoot(this);
        }
        get paramMap() {
          return this._paramMap || (this._paramMap = this.params.pipe(Object(f.a)(e => oe(e)))), this._paramMap;
        }
        get queryParamMap() {
          return (
            this._queryParamMap || (this._queryParamMap = this.queryParams.pipe(Object(f.a)(e => oe(e)))),
            this._queryParamMap
          );
        }
        toString() {
          return this.snapshot ? this.snapshot.toString() : `Future(${this._futureSnapshot})`;
        }
      }
      function Ze(e, t = 'emptyOnly') {
        const n = e.pathFromRoot;
        let r = 0;
        if ('always' !== t)
          for (r = n.length - 1; r >= 1; ) {
            const e = n[r],
              t = n[r - 1];
            if (e.routeConfig && '' === e.routeConfig.path) r--;
            else {
              if (t.component) break;
              r--;
            }
          }
        return (function(e) {
          return e.reduce(
            (e, t) => ({
              params: Object.assign({}, e.params, t.params),
              data: Object.assign({}, e.data, t.data),
              resolve: Object.assign({}, e.resolve, t._resolvedData)
            }),
            { params: {}, data: {}, resolve: {} }
          );
        })(n.slice(r));
      }
      class Ke {
        constructor(e, t, n, r, s, i, o, a, l, u, c) {
          (this.url = e),
            (this.params = t),
            (this.queryParams = n),
            (this.fragment = r),
            (this.data = s),
            (this.outlet = i),
            (this.component = o),
            (this.routeConfig = a),
            (this._urlSegment = l),
            (this._lastPathIndex = u),
            (this._resolve = c);
        }
        get root() {
          return this._routerState.root;
        }
        get parent() {
          return this._routerState.parent(this);
        }
        get firstChild() {
          return this._routerState.firstChild(this);
        }
        get children() {
          return this._routerState.children(this);
        }
        get pathFromRoot() {
          return this._routerState.pathFromRoot(this);
        }
        get paramMap() {
          return this._paramMap || (this._paramMap = oe(this.params)), this._paramMap;
        }
        get queryParamMap() {
          return this._queryParamMap || (this._queryParamMap = oe(this.queryParams)), this._queryParamMap;
        }
        toString() {
          return `Route(url:'${this.url.map(e => e.toString()).join('/')}', path:'${
            this.routeConfig ? this.routeConfig.path : ''
          }')`;
        }
      }
      class Qe extends Ue {
        constructor(e, t) {
          super(t), (this.url = e), Ye(this, t);
        }
        toString() {
          return Je(this._root);
        }
      }
      function Ye(e, t) {
        (t.value._routerState = e), t.children.forEach(t => Ye(e, t));
      }
      function Je(e) {
        const t = e.children.length > 0 ? ` { ${e.children.map(Je).join(', ')} } ` : '';
        return `${e.value}${t}`;
      }
      function Xe(e) {
        if (e.snapshot) {
          const t = e.snapshot,
            n = e._futureSnapshot;
          (e.snapshot = n),
            fe(t.queryParams, n.queryParams) || e.queryParams.next(n.queryParams),
            t.fragment !== n.fragment && e.fragment.next(n.fragment),
            fe(t.params, n.params) || e.params.next(n.params),
            (function(e, t) {
              if (e.length !== t.length) return !1;
              for (let n = 0; n < e.length; ++n) if (!fe(e[n], t[n])) return !1;
              return !0;
            })(t.url, n.url) || e.url.next(n.url),
            fe(t.data, n.data) || e.data.next(n.data);
        } else (e.snapshot = e._futureSnapshot), e.data.next(e._futureSnapshot.data);
      }
      function et(e, t) {
        var n, r;
        return (
          fe(e.params, t.params) &&
          xe((n = e.url), (r = t.url)) &&
          n.every((e, t) => fe(e.parameters, r[t].parameters)) &&
          !(!e.parent != !t.parent) &&
          (!e.parent || et(e.parent, t.parent))
        );
      }
      function tt(e) {
        return 'object' == typeof e && null != e && !e.outlets && !e.segmentPath;
      }
      function nt(e, t, n, r, s) {
        let i = {};
        return (
          r &&
            be(r, (e, t) => {
              i[t] = Array.isArray(e) ? e.map(e => '' + e) : '' + e;
            }),
          new we(
            n.root === e
              ? t
              : (function e(t, n, r) {
                  const s = {};
                  return (
                    be(t.children, (t, i) => {
                      s[i] = t === n ? r : e(t, n, r);
                    }),
                    new _e(t.segments, s)
                  );
                })(n.root, e, t),
            i,
            s
          )
        );
      }
      class rt {
        constructor(e, t, n) {
          if (
            ((this.isAbsolute = e), (this.numberOfDoubleDots = t), (this.commands = n), e && n.length > 0 && tt(n[0]))
          )
            throw new Error('Root segment cannot have matrix parameters');
          const r = n.find(e => 'object' == typeof e && null != e && e.outlets);
          if (r && r !== me(n)) throw new Error('{outlets:{}} has to be the last command');
        }
        toRoot() {
          return this.isAbsolute && 1 === this.commands.length && '/' == this.commands[0];
        }
      }
      class st {
        constructor(e, t, n) {
          (this.segmentGroup = e), (this.processChildren = t), (this.index = n);
        }
      }
      function it(e) {
        return 'object' == typeof e && null != e && e.outlets ? e.outlets.primary : '' + e;
      }
      function ot(e, t, n) {
        if ((e || (e = new _e([], {})), 0 === e.segments.length && e.hasChildren())) return at(e, t, n);
        const r = (function(e, t, n) {
            let r = 0,
              s = t;
            const i = { match: !1, pathIndex: 0, commandIndex: 0 };
            for (; s < e.segments.length; ) {
              if (r >= n.length) return i;
              const t = e.segments[s],
                o = it(n[r]),
                a = r < n.length - 1 ? n[r + 1] : null;
              if (s > 0 && void 0 === o) break;
              if (o && a && 'object' == typeof a && void 0 === a.outlets) {
                if (!ht(o, a, t)) return i;
                r += 2;
              } else {
                if (!ht(o, {}, t)) return i;
                r++;
              }
              s++;
            }
            return { match: !0, pathIndex: s, commandIndex: r };
          })(e, t, n),
          s = n.slice(r.commandIndex);
        if (r.match && r.pathIndex < e.segments.length) {
          const t = new _e(e.segments.slice(0, r.pathIndex), {});
          return (t.children.primary = new _e(e.segments.slice(r.pathIndex), e.children)), at(t, 0, s);
        }
        return r.match && 0 === s.length
          ? new _e(e.segments, {})
          : r.match && !e.hasChildren()
          ? lt(e, t, n)
          : r.match
          ? at(e, 0, s)
          : lt(e, t, n);
      }
      function at(e, t, n) {
        if (0 === n.length) return new _e(e.segments, {});
        {
          const r = (function(e) {
              return 'object' != typeof e[0] || void 0 === e[0].outlets ? { primary: e } : e[0].outlets;
            })(n),
            s = {};
          return (
            be(r, (n, r) => {
              null !== n && (s[r] = ot(e.children[r], t, n));
            }),
            be(e.children, (e, t) => {
              void 0 === r[t] && (s[t] = e);
            }),
            new _e(e.segments, s)
          );
        }
      }
      function lt(e, t, n) {
        const r = e.segments.slice(0, t);
        let s = 0;
        for (; s < n.length; ) {
          if ('object' == typeof n[s] && void 0 !== n[s].outlets) {
            const e = ut(n[s].outlets);
            return new _e(r, e);
          }
          if (0 === s && tt(n[0])) {
            r.push(new Ce(e.segments[t].path, n[0])), s++;
            continue;
          }
          const i = it(n[s]),
            o = s < n.length - 1 ? n[s + 1] : null;
          i && o && tt(o) ? (r.push(new Ce(i, ct(o))), (s += 2)) : (r.push(new Ce(i, {})), s++);
        }
        return new _e(r, {});
      }
      function ut(e) {
        const t = {};
        return (
          be(e, (e, n) => {
            null !== e && (t[n] = lt(new _e([], {}), 0, e));
          }),
          t
        );
      }
      function ct(e) {
        const t = {};
        return be(e, (e, n) => (t[n] = '' + e)), t;
      }
      function ht(e, t, n) {
        return e == n.path && fe(t, n.parameters);
      }
      class dt {
        constructor(e, t, n, r) {
          (this.routeReuseStrategy = e), (this.futureState = t), (this.currState = n), (this.forwardEvent = r);
        }
        activate(e) {
          const t = this.futureState._root,
            n = this.currState ? this.currState._root : null;
          this.deactivateChildRoutes(t, n, e), Xe(this.futureState.root), this.activateChildRoutes(t, n, e);
        }
        deactivateChildRoutes(e, t, n) {
          const r = ze(t);
          e.children.forEach(e => {
            const t = e.value.outlet;
            this.deactivateRoutes(e, r[t], n), delete r[t];
          }),
            be(r, (e, t) => {
              this.deactivateRouteAndItsChildren(e, n);
            });
        }
        deactivateRoutes(e, t, n) {
          const r = e.value,
            s = t ? t.value : null;
          if (r === s)
            if (r.component) {
              const s = n.getContext(r.outlet);
              s && this.deactivateChildRoutes(e, t, s.children);
            } else this.deactivateChildRoutes(e, t, n);
          else s && this.deactivateRouteAndItsChildren(t, n);
        }
        deactivateRouteAndItsChildren(e, t) {
          this.routeReuseStrategy.shouldDetach(e.value.snapshot)
            ? this.detachAndStoreRouteSubtree(e, t)
            : this.deactivateRouteAndOutlet(e, t);
        }
        detachAndStoreRouteSubtree(e, t) {
          const n = t.getContext(e.value.outlet);
          if (n && n.outlet) {
            const t = n.outlet.detach(),
              r = n.children.onOutletDeactivated();
            this.routeReuseStrategy.store(e.value.snapshot, { componentRef: t, route: e, contexts: r });
          }
        }
        deactivateRouteAndOutlet(e, t) {
          const n = t.getContext(e.value.outlet);
          if (n) {
            const r = ze(e),
              s = e.value.component ? n.children : t;
            be(r, (e, t) => this.deactivateRouteAndItsChildren(e, s)),
              n.outlet && (n.outlet.deactivate(), n.children.onOutletDeactivated());
          }
        }
        activateChildRoutes(e, t, n) {
          const r = ze(t);
          e.children.forEach(e => {
            this.activateRoutes(e, r[e.value.outlet], n), this.forwardEvent(new ne(e.value.snapshot));
          }),
            e.children.length && this.forwardEvent(new ee(e.value.snapshot));
        }
        activateRoutes(e, t, n) {
          const r = e.value,
            s = t ? t.value : null;
          if ((Xe(r), r === s))
            if (r.component) {
              const s = n.getOrCreateContext(r.outlet);
              this.activateChildRoutes(e, t, s.children);
            } else this.activateChildRoutes(e, t, n);
          else if (r.component) {
            const t = n.getOrCreateContext(r.outlet);
            if (this.routeReuseStrategy.shouldAttach(r.snapshot)) {
              const e = this.routeReuseStrategy.retrieve(r.snapshot);
              this.routeReuseStrategy.store(r.snapshot, null),
                t.children.onOutletReAttached(e.contexts),
                (t.attachRef = e.componentRef),
                (t.route = e.route.value),
                t.outlet && t.outlet.attach(e.componentRef, e.route.value),
                pt(e.route);
            } else {
              const n = (function(e) {
                  for (let t = e.parent; t; t = t.parent) {
                    const e = t.routeConfig;
                    if (e && e._loadedConfig) return e._loadedConfig;
                    if (e && e.component) return null;
                  }
                  return null;
                })(r.snapshot),
                s = n ? n.module.componentFactoryResolver : null;
              (t.attachRef = null),
                (t.route = r),
                (t.resolver = s),
                t.outlet && t.outlet.activateWith(r, s),
                this.activateChildRoutes(e, null, t.children);
            }
          } else this.activateChildRoutes(e, null, n);
        }
      }
      function pt(e) {
        Xe(e.value), e.children.forEach(pt);
      }
      function ft(e) {
        return 'function' == typeof e;
      }
      function gt(e) {
        return e instanceof we;
      }
      class mt {
        constructor(e) {
          this.segmentGroup = e || null;
        }
      }
      class bt {
        constructor(e) {
          this.urlTree = e;
        }
      }
      function yt(e) {
        return new l.a(t => t.error(new mt(e)));
      }
      function vt(e) {
        return new l.a(t => t.error(new bt(e)));
      }
      function wt(e) {
        return new l.a(t => t.error(new Error(`Only absolute redirects can have named outlets. redirectTo: '${e}'`)));
      }
      class _t {
        constructor(e, t, n, r, i) {
          (this.configLoader = t),
            (this.urlSerializer = n),
            (this.urlTree = r),
            (this.config = i),
            (this.allowRedirects = !0),
            (this.ngModule = e.get(s.w));
        }
        apply() {
          return this.expandSegmentGroup(this.ngModule, this.config, this.urlTree.root, 'primary')
            .pipe(Object(f.a)(e => this.createUrlTree(e, this.urlTree.queryParams, this.urlTree.fragment)))
            .pipe(
              Object(O.a)(e => {
                if (e instanceof bt) return (this.allowRedirects = !1), this.match(e.urlTree);
                if (e instanceof mt) throw this.noMatchError(e);
                throw e;
              })
            );
        }
        match(e) {
          return this.expandSegmentGroup(this.ngModule, this.config, e.root, 'primary')
            .pipe(Object(f.a)(t => this.createUrlTree(t, e.queryParams, e.fragment)))
            .pipe(
              Object(O.a)(e => {
                if (e instanceof mt) throw this.noMatchError(e);
                throw e;
              })
            );
        }
        noMatchError(e) {
          return new Error(`Cannot match any routes. URL Segment: '${e.segmentGroup}'`);
        }
        createUrlTree(e, t, n) {
          const r = e.segments.length > 0 ? new _e([], { primary: e }) : e;
          return new we(r, t, n);
        }
        expandSegmentGroup(e, t, n, r) {
          return 0 === n.segments.length && n.hasChildren()
            ? this.expandChildren(e, t, n).pipe(Object(f.a)(e => new _e([], e)))
            : this.expandSegment(e, n, t, n.segments, r, !0);
        }
        expandChildren(e, t, n) {
          return (function(e, t) {
            if (0 === Object.keys(e).length) return Object(i.a)({});
            const n = [],
              r = [],
              s = {};
            return (
              be(e, (e, i) => {
                const o = t(i, e).pipe(Object(f.a)(e => (s[i] = e)));
                'primary' === i ? n.push(o) : r.push(o);
              }),
              i.a.apply(null, n.concat(r)).pipe(
                Object(g.a)(),
                E(),
                Object(f.a)(() => s)
              )
            );
          })(n.children, (n, r) => this.expandSegmentGroup(e, t, r, n));
        }
        expandSegment(e, t, n, r, s, o) {
          return Object(i.a)(...n).pipe(
            Object(f.a)(a =>
              this.expandSegmentAgainstRoute(e, t, n, a, r, s, o).pipe(
                Object(O.a)(e => {
                  if (e instanceof mt) return Object(i.a)(null);
                  throw e;
                })
              )
            ),
            Object(g.a)(),
            D(e => !!e),
            Object(O.a)((e, n) => {
              if (e instanceof u || 'EmptyError' === e.name) {
                if (this.noLeftoversInUrl(t, r, s)) return Object(i.a)(new _e([], {}));
                throw new mt(t);
              }
              throw e;
            })
          );
        }
        noLeftoversInUrl(e, t, n) {
          return 0 === t.length && !e.children[n];
        }
        expandSegmentAgainstRoute(e, t, n, r, s, i, o) {
          return Et(r) !== i
            ? yt(t)
            : void 0 === r.redirectTo
            ? this.matchSegmentAgainstRoute(e, t, r, s)
            : o && this.allowRedirects
            ? this.expandSegmentAgainstRouteUsingRedirect(e, t, n, r, s, i)
            : yt(t);
        }
        expandSegmentAgainstRouteUsingRedirect(e, t, n, r, s, i) {
          return '**' === r.path
            ? this.expandWildCardWithParamsAgainstRouteUsingRedirect(e, n, r, i)
            : this.expandRegularSegmentAgainstRouteUsingRedirect(e, t, n, r, s, i);
        }
        expandWildCardWithParamsAgainstRouteUsingRedirect(e, t, n, r) {
          const s = this.applyRedirectCommands([], n.redirectTo, {});
          return n.redirectTo.startsWith('/')
            ? vt(s)
            : this.lineralizeSegments(n, s).pipe(
                Object(T.a)(n => {
                  const s = new _e(n, {});
                  return this.expandSegment(e, s, t, n, r, !1);
                })
              );
        }
        expandRegularSegmentAgainstRouteUsingRedirect(e, t, n, r, s, i) {
          const { matched: o, consumedSegments: a, lastChild: l, positionalParamSegments: u } = Ct(t, r, s);
          if (!o) return yt(t);
          const c = this.applyRedirectCommands(a, r.redirectTo, u);
          return r.redirectTo.startsWith('/')
            ? vt(c)
            : this.lineralizeSegments(r, c).pipe(
                Object(T.a)(r => this.expandSegment(e, t, n, r.concat(s.slice(l)), i, !1))
              );
        }
        matchSegmentAgainstRoute(e, t, n, r) {
          if ('**' === n.path)
            return n.loadChildren
              ? this.configLoader.load(e.injector, n).pipe(Object(f.a)(e => ((n._loadedConfig = e), new _e(r, {}))))
              : Object(i.a)(new _e(r, {}));
          const { matched: s, consumedSegments: o, lastChild: a } = Ct(t, n, r);
          if (!s) return yt(t);
          const l = r.slice(a);
          return this.getChildConfig(e, n, r).pipe(
            Object(T.a)(e => {
              const n = e.module,
                r = e.routes,
                { segmentGroup: s, slicedSegments: a } = (function(e, t, n, r) {
                  return n.length > 0 &&
                    (function(e, t, n) {
                      return n.some(n => St(e, t, n) && 'primary' !== Et(n));
                    })(e, n, r)
                    ? {
                        segmentGroup: xt(
                          new _e(
                            t,
                            (function(e, t) {
                              const n = {};
                              n.primary = t;
                              for (const r of e) '' === r.path && 'primary' !== Et(r) && (n[Et(r)] = new _e([], {}));
                              return n;
                            })(r, new _e(n, e.children))
                          )
                        ),
                        slicedSegments: []
                      }
                    : 0 === n.length &&
                      (function(e, t, n) {
                        return n.some(n => St(e, t, n));
                      })(e, n, r)
                    ? {
                        segmentGroup: xt(
                          new _e(
                            e.segments,
                            (function(e, t, n, r) {
                              const s = {};
                              for (const i of n) St(e, t, i) && !r[Et(i)] && (s[Et(i)] = new _e([], {}));
                              return Object.assign({}, r, s);
                            })(e, n, r, e.children)
                          )
                        ),
                        slicedSegments: n
                      }
                    : { segmentGroup: e, slicedSegments: n };
                })(t, o, l, r);
              return 0 === a.length && s.hasChildren()
                ? this.expandChildren(n, r, s).pipe(Object(f.a)(e => new _e(o, e)))
                : 0 === r.length && 0 === a.length
                ? Object(i.a)(new _e(o, {}))
                : this.expandSegment(n, s, r, a, 'primary', !0).pipe(
                    Object(f.a)(e => new _e(o.concat(e.segments), e.children))
                  );
            })
          );
        }
        getChildConfig(e, t, n) {
          return t.children
            ? Object(i.a)(new ue(t.children, e))
            : t.loadChildren
            ? void 0 !== t._loadedConfig
              ? Object(i.a)(t._loadedConfig)
              : (function(e, t, n) {
                  const r = t.canLoad;
                  return r && 0 !== r.length
                    ? Object(o.a)(r)
                        .pipe(
                          Object(f.a)(r => {
                            const s = e.get(r);
                            let i;
                            if (
                              (function(e) {
                                return e && ft(e.canLoad);
                              })(s)
                            )
                              i = s.canLoad(t, n);
                            else {
                              if (!ft(s)) throw new Error('Invalid CanLoad guard');
                              i = s(t, n);
                            }
                            return ye(i);
                          })
                        )
                        .pipe(Object(g.a)(), ((s = e => !0 === e), e => e.lift(new A(s, void 0, e))))
                    : Object(i.a)(!0);
                  var s;
                })(e.injector, t, n).pipe(
                  Object(T.a)(n =>
                    n
                      ? this.configLoader.load(e.injector, t).pipe(Object(f.a)(e => ((t._loadedConfig = e), e)))
                      : (function(e) {
                          return new l.a(t =>
                            t.error(
                              ae(
                                `Cannot load children because the guard of the route "path: '${e.path}'" returned false`
                              )
                            )
                          );
                        })(t)
                  )
                )
            : Object(i.a)(new ue([], e));
        }
        lineralizeSegments(e, t) {
          let n = [],
            r = t.root;
          for (;;) {
            if (((n = n.concat(r.segments)), 0 === r.numberOfChildren)) return Object(i.a)(n);
            if (r.numberOfChildren > 1 || !r.children.primary) return wt(e.redirectTo);
            r = r.children.primary;
          }
        }
        applyRedirectCommands(e, t, n) {
          return this.applyRedirectCreatreUrlTree(t, this.urlSerializer.parse(t), e, n);
        }
        applyRedirectCreatreUrlTree(e, t, n, r) {
          const s = this.createSegmentGroup(e, t.root, n, r);
          return new we(s, this.createQueryParams(t.queryParams, this.urlTree.queryParams), t.fragment);
        }
        createQueryParams(e, t) {
          const n = {};
          return (
            be(e, (e, r) => {
              if ('string' == typeof e && e.startsWith(':')) {
                const s = e.substring(1);
                n[r] = t[s];
              } else n[r] = e;
            }),
            n
          );
        }
        createSegmentGroup(e, t, n, r) {
          const s = this.createSegments(e, t.segments, n, r);
          let i = {};
          return (
            be(t.children, (t, s) => {
              i[s] = this.createSegmentGroup(e, t, n, r);
            }),
            new _e(s, i)
          );
        }
        createSegments(e, t, n, r) {
          return t.map(t => (t.path.startsWith(':') ? this.findPosParam(e, t, r) : this.findOrReturn(t, n)));
        }
        findPosParam(e, t, n) {
          const r = n[t.path.substring(1)];
          if (!r) throw new Error(`Cannot redirect to '${e}'. Cannot find '${t.path}'.`);
          return r;
        }
        findOrReturn(e, t) {
          let n = 0;
          for (const r of t) {
            if (r.path === e.path) return t.splice(n), r;
            n++;
          }
          return e;
        }
      }
      function Ct(e, t, n) {
        if ('' === t.path)
          return 'full' === t.pathMatch && (e.hasChildren() || n.length > 0)
            ? { matched: !1, consumedSegments: [], lastChild: 0, positionalParamSegments: {} }
            : { matched: !0, consumedSegments: [], lastChild: 0, positionalParamSegments: {} };
        const r = (t.matcher || le)(n, e, t);
        return r
          ? {
              matched: !0,
              consumedSegments: r.consumed,
              lastChild: r.consumed.length,
              positionalParamSegments: r.posParams
            }
          : { matched: !1, consumedSegments: [], lastChild: 0, positionalParamSegments: {} };
      }
      function xt(e) {
        if (1 === e.numberOfChildren && e.children.primary) {
          const t = e.children.primary;
          return new _e(e.segments.concat(t.segments), t.children);
        }
        return e;
      }
      function St(e, t, n) {
        return (
          (!(e.hasChildren() || t.length > 0) || 'full' !== n.pathMatch) && '' === n.path && void 0 !== n.redirectTo
        );
      }
      function Et(e) {
        return e.outlet || 'primary';
      }
      class Ot {
        constructor(e) {
          (this.path = e), (this.route = this.path[this.path.length - 1]);
        }
      }
      class kt {
        constructor(e, t) {
          (this.component = e), (this.route = t);
        }
      }
      function Dt(e, t, n) {
        const r = e._root;
        return (function e(t, n, r, s, i = { canDeactivateChecks: [], canActivateChecks: [] }) {
          const o = ze(n);
          return (
            t.children.forEach(t => {
              !(function(t, n, r, s, i = { canDeactivateChecks: [], canActivateChecks: [] }) {
                const o = t.value,
                  a = n ? n.value : null,
                  l = r ? r.getContext(t.value.outlet) : null;
                if (a && o.routeConfig === a.routeConfig) {
                  const u = (function(e, t, n) {
                    if ('function' == typeof n) return n(e, t);
                    switch (n) {
                      case 'pathParamsChange':
                        return !xe(e.url, t.url);
                      case 'pathParamsOrQueryParamsChange':
                        return !xe(e.url, t.url) || !fe(e.queryParams, t.queryParams);
                      case 'always':
                        return !0;
                      case 'paramsOrQueryParamsChange':
                        return !et(e, t) || !fe(e.queryParams, t.queryParams);
                      case 'paramsChange':
                      default:
                        return !et(e, t);
                    }
                  })(a, o, o.routeConfig.runGuardsAndResolvers);
                  u ? i.canActivateChecks.push(new Ot(s)) : ((o.data = a.data), (o._resolvedData = a._resolvedData)),
                    e(t, n, o.component ? (l ? l.children : null) : r, s, i),
                    u && i.canDeactivateChecks.push(new kt((l && l.outlet && l.outlet.component) || null, a));
                } else
                  a && At(n, l, i),
                    i.canActivateChecks.push(new Ot(s)),
                    e(t, null, o.component ? (l ? l.children : null) : r, s, i);
              })(t, o[t.value.outlet], r, s.concat([t.value]), i),
                delete o[t.value.outlet];
            }),
            be(o, (e, t) => At(e, r.getContext(t), i)),
            i
          );
        })(r, t ? t._root : null, n, [r.value]);
      }
      function Tt(e, t, n) {
        const r = (function(e) {
          if (!e) return null;
          for (let t = e.parent; t; t = t.parent) {
            const e = t.routeConfig;
            if (e && e._loadedConfig) return e._loadedConfig;
          }
          return null;
        })(t);
        return (r ? r.module.injector : n).get(e);
      }
      function At(e, t, n) {
        const r = ze(e),
          s = e.value;
        be(r, (e, r) => {
          At(e, s.component ? (t ? t.children.getContext(r) : null) : t, n);
        }),
          n.canDeactivateChecks.push(
            new kt(s.component && t && t.outlet && t.outlet.isActivated ? t.outlet.component : null, s)
          );
      }
      const It = Symbol('INITIAL_VALUE');
      function jt() {
        return Object(j.a)(e =>
          Object(c.a)(...e.map(e => e.pipe(Object(k.a)(1), Object(N.a)(It)))).pipe(
            Object(R.a)((e, t) => {
              let n = !1;
              return t.reduce((e, r, s) => {
                if (e !== It) return e;
                if ((r === It && (n = !0), !n)) {
                  if (!1 === r) return r;
                  if (s === t.length - 1 || gt(r)) return r;
                }
                return e;
              }, e);
            }, It),
            Object(m.a)(e => e !== It),
            Object(f.a)(e => (gt(e) ? e : !0 === e)),
            Object(k.a)(1)
          )
        );
      }
      function Nt(e, t) {
        return null !== e && t && t(new te(e)), Object(i.a)(!0);
      }
      function Rt(e, t) {
        return null !== e && t && t(new X(e)), Object(i.a)(!0);
      }
      function Pt(e, t, n) {
        const r = t.routeConfig ? t.routeConfig.canActivate : null;
        if (!r || 0 === r.length) return Object(i.a)(!0);
        const s = r.map(r =>
          Object(h.a)(() => {
            const s = Tt(r, t, n);
            let i;
            if (
              (function(e) {
                return e && ft(e.canActivate);
              })(s)
            )
              i = ye(s.canActivate(t, e));
            else {
              if (!ft(s)) throw new Error('Invalid CanActivate guard');
              i = ye(s(t, e));
            }
            return i.pipe(D());
          })
        );
        return Object(i.a)(s).pipe(jt());
      }
      function Mt(e, t, n) {
        const r = t[t.length - 1],
          s = t
            .slice(0, t.length - 1)
            .reverse()
            .map(e =>
              (function(e) {
                const t = e.routeConfig ? e.routeConfig.canActivateChild : null;
                return t && 0 !== t.length ? { node: e, guards: t } : null;
              })(e)
            )
            .filter(e => null !== e)
            .map(t =>
              Object(h.a)(() => {
                const s = t.guards.map(s => {
                  const i = Tt(s, t.node, n);
                  let o;
                  if (
                    (function(e) {
                      return e && ft(e.canActivateChild);
                    })(i)
                  )
                    o = ye(i.canActivateChild(r, e));
                  else {
                    if (!ft(i)) throw new Error('Invalid CanActivateChild guard');
                    o = ye(i(r, e));
                  }
                  return o.pipe(D());
                });
                return Object(i.a)(s).pipe(jt());
              })
            );
        return Object(i.a)(s).pipe(jt());
      }
      class Lt {}
      class Ht {
        constructor(e, t, n, r, s, i) {
          (this.rootComponentType = e),
            (this.config = t),
            (this.urlTree = n),
            (this.url = r),
            (this.paramsInheritanceStrategy = s),
            (this.relativeLinkResolution = i);
        }
        recognize() {
          try {
            const e = Vt(this.urlTree.root, [], [], this.config, this.relativeLinkResolution).segmentGroup,
              t = this.processSegmentGroup(this.config, e, 'primary'),
              n = new Ke(
                [],
                Object.freeze({}),
                Object.freeze(Object.assign({}, this.urlTree.queryParams)),
                this.urlTree.fragment,
                {},
                'primary',
                this.rootComponentType,
                null,
                this.urlTree.root,
                -1,
                {}
              ),
              r = new $e(n, t),
              s = new Qe(this.url, r);
            return this.inheritParamsAndData(s._root), Object(i.a)(s);
          } catch (e) {
            return new l.a(t => t.error(e));
          }
        }
        inheritParamsAndData(e) {
          const t = e.value,
            n = Ze(t, this.paramsInheritanceStrategy);
          (t.params = Object.freeze(n.params)),
            (t.data = Object.freeze(n.data)),
            e.children.forEach(e => this.inheritParamsAndData(e));
        }
        processSegmentGroup(e, t, n) {
          return 0 === t.segments.length && t.hasChildren()
            ? this.processChildren(e, t)
            : this.processSegment(e, t, t.segments, n);
        }
        processChildren(e, t) {
          const n = Se(t, (t, n) => this.processSegmentGroup(e, t, n));
          return (
            (function(e) {
              const t = {};
              e.forEach(e => {
                const n = t[e.value.outlet];
                if (n) {
                  const t = n.url.map(e => e.toString()).join('/'),
                    r = e.value.url.map(e => e.toString()).join('/');
                  throw new Error(`Two segments cannot have the same outlet name: '${t}' and '${r}'.`);
                }
                t[e.value.outlet] = e.value;
              });
            })(n),
            n.sort((e, t) =>
              'primary' === e.value.outlet
                ? -1
                : 'primary' === t.value.outlet
                ? 1
                : e.value.outlet.localeCompare(t.value.outlet)
            ),
            n
          );
        }
        processSegment(e, t, n, r) {
          for (const i of e)
            try {
              return this.processSegmentAgainstRoute(i, t, n, r);
            } catch (s) {
              if (!(s instanceof Lt)) throw s;
            }
          if (this.noLeftoversInUrl(t, n, r)) return [];
          throw new Lt();
        }
        noLeftoversInUrl(e, t, n) {
          return 0 === t.length && !e.children[n];
        }
        processSegmentAgainstRoute(e, t, n, r) {
          if (e.redirectTo) throw new Lt();
          if ((e.outlet || 'primary') !== r) throw new Lt();
          let s,
            i = [],
            o = [];
          if ('**' === e.path) {
            const i = n.length > 0 ? me(n).parameters : {};
            s = new Ke(
              n,
              i,
              Object.freeze(Object.assign({}, this.urlTree.queryParams)),
              this.urlTree.fragment,
              zt(e),
              r,
              e.component,
              e,
              Ft(t),
              Ut(t) + n.length,
              Bt(e)
            );
          } else {
            const a = (function(e, t, n) {
              if ('' === t.path) {
                if ('full' === t.pathMatch && (e.hasChildren() || n.length > 0)) throw new Lt();
                return { consumedSegments: [], lastChild: 0, parameters: {} };
              }
              const r = (t.matcher || le)(n, e, t);
              if (!r) throw new Lt();
              const s = {};
              be(r.posParams, (e, t) => {
                s[t] = e.path;
              });
              const i = r.consumed.length > 0 ? Object.assign({}, s, r.consumed[r.consumed.length - 1].parameters) : s;
              return { consumedSegments: r.consumed, lastChild: r.consumed.length, parameters: i };
            })(t, e, n);
            (i = a.consumedSegments),
              (o = n.slice(a.lastChild)),
              (s = new Ke(
                i,
                a.parameters,
                Object.freeze(Object.assign({}, this.urlTree.queryParams)),
                this.urlTree.fragment,
                zt(e),
                r,
                e.component,
                e,
                Ft(t),
                Ut(t) + i.length,
                Bt(e)
              ));
          }
          const a = (function(e) {
              return e.children ? e.children : e.loadChildren ? e._loadedConfig.routes : [];
            })(e),
            { segmentGroup: l, slicedSegments: u } = Vt(t, i, o, a, this.relativeLinkResolution);
          if (0 === u.length && l.hasChildren()) {
            const e = this.processChildren(a, l);
            return [new $e(s, e)];
          }
          if (0 === a.length && 0 === u.length) return [new $e(s, [])];
          const c = this.processSegment(a, l, u, 'primary');
          return [new $e(s, c)];
        }
      }
      function Ft(e) {
        let t = e;
        for (; t._sourceSegment; ) t = t._sourceSegment;
        return t;
      }
      function Ut(e) {
        let t = e,
          n = t._segmentIndexShift ? t._segmentIndexShift : 0;
        for (; t._sourceSegment; ) (t = t._sourceSegment), (n += t._segmentIndexShift ? t._segmentIndexShift : 0);
        return n - 1;
      }
      function Vt(e, t, n, r, s) {
        if (
          n.length > 0 &&
          (function(e, t, n) {
            return n.some(n => qt(e, t, n) && 'primary' !== $t(n));
          })(e, n, r)
        ) {
          const s = new _e(
            t,
            (function(e, t, n, r) {
              const s = {};
              (s.primary = r), (r._sourceSegment = e), (r._segmentIndexShift = t.length);
              for (const i of n)
                if ('' === i.path && 'primary' !== $t(i)) {
                  const n = new _e([], {});
                  (n._sourceSegment = e), (n._segmentIndexShift = t.length), (s[$t(i)] = n);
                }
              return s;
            })(e, t, r, new _e(n, e.children))
          );
          return (s._sourceSegment = e), (s._segmentIndexShift = t.length), { segmentGroup: s, slicedSegments: [] };
        }
        if (
          0 === n.length &&
          (function(e, t, n) {
            return n.some(n => qt(e, t, n));
          })(e, n, r)
        ) {
          const i = new _e(
            e.segments,
            (function(e, t, n, r, s, i) {
              const o = {};
              for (const a of r)
                if (qt(e, n, a) && !s[$t(a)]) {
                  const n = new _e([], {});
                  (n._sourceSegment = e),
                    (n._segmentIndexShift = 'legacy' === i ? e.segments.length : t.length),
                    (o[$t(a)] = n);
                }
              return Object.assign({}, s, o);
            })(e, t, n, r, e.children, s)
          );
          return (i._sourceSegment = e), (i._segmentIndexShift = t.length), { segmentGroup: i, slicedSegments: n };
        }
        const i = new _e(e.segments, e.children);
        return (i._sourceSegment = e), (i._segmentIndexShift = t.length), { segmentGroup: i, slicedSegments: n };
      }
      function qt(e, t, n) {
        return (
          (!(e.hasChildren() || t.length > 0) || 'full' !== n.pathMatch) && '' === n.path && void 0 === n.redirectTo
        );
      }
      function $t(e) {
        return e.outlet || 'primary';
      }
      function zt(e) {
        return e.data || {};
      }
      function Bt(e) {
        return e.resolve || {};
      }
      function Wt(e, t, n, r) {
        const s = Tt(e, t, r);
        return ye(s.resolve ? s.resolve(t, n) : s(t, n));
      }
      function Gt(e) {
        return function(t) {
          return t.pipe(
            Object(j.a)(t => {
              const n = e(t);
              return n ? Object(o.a)(n).pipe(Object(f.a)(() => t)) : Object(o.a)([t]);
            })
          );
        };
      }
      class Zt {}
      class Kt {
        shouldDetach(e) {
          return !1;
        }
        store(e, t) {}
        shouldAttach(e) {
          return !1;
        }
        retrieve(e) {
          return null;
        }
        shouldReuseRoute(e, t) {
          return e.routeConfig === t.routeConfig;
        }
      }
      const Qt = new s.p('ROUTES');
      class Yt {
        constructor(e, t, n, r) {
          (this.loader = e), (this.compiler = t), (this.onLoadStartListener = n), (this.onLoadEndListener = r);
        }
        load(e, t) {
          return (
            this.onLoadStartListener && this.onLoadStartListener(t),
            this.loadModuleFactory(t.loadChildren).pipe(
              Object(f.a)(n => {
                this.onLoadEndListener && this.onLoadEndListener(t);
                const r = n.create(e);
                return new ue(ge(r.injector.get(Qt)).map(pe), r);
              })
            )
          );
        }
        loadModuleFactory(e) {
          return 'string' == typeof e
            ? Object(o.a)(this.loader.load(e))
            : ye(e()).pipe(
                Object(T.a)(e => (e instanceof s.u ? Object(i.a)(e) : Object(o.a)(this.compiler.compileModuleAsync(e))))
              );
        }
      }
      class Jt {}
      class Xt {
        shouldProcessUrl(e) {
          return !0;
        }
        extract(e) {
          return e;
        }
        merge(e, t) {
          return e;
        }
      }
      function en(e) {
        throw e;
      }
      function tn(e, t, n) {
        return t.parse('/');
      }
      function nn(e, t) {
        return Object(i.a)(null);
      }
      class rn {
        constructor(e, t, n, r, i, o, l, u) {
          (this.rootComponentType = e),
            (this.urlSerializer = t),
            (this.rootContexts = n),
            (this.location = r),
            (this.config = u),
            (this.lastSuccessfulNavigation = null),
            (this.currentNavigation = null),
            (this.navigationId = 0),
            (this.isNgZoneEnabled = !1),
            (this.events = new d.a()),
            (this.errorHandler = en),
            (this.malformedUriErrorHandler = tn),
            (this.navigated = !1),
            (this.lastSuccessfulId = -1),
            (this.hooks = { beforePreactivation: nn, afterPreactivation: nn }),
            (this.urlHandlingStrategy = new Xt()),
            (this.routeReuseStrategy = new Kt()),
            (this.onSameUrlNavigation = 'ignore'),
            (this.paramsInheritanceStrategy = 'emptyOnly'),
            (this.urlUpdateStrategy = 'deferred'),
            (this.relativeLinkResolution = 'legacy'),
            (this.ngModule = i.get(s.w)),
            (this.console = i.get(s.Z));
          const c = i.get(s.y);
          (this.isNgZoneEnabled = c instanceof s.y),
            this.resetConfig(u),
            (this.currentUrlTree = new we(new _e([], {}), {}, null)),
            (this.rawUrlTree = this.currentUrlTree),
            (this.browserUrlTree = this.currentUrlTree),
            (this.configLoader = new Yt(
              o,
              l,
              e => this.triggerEvent(new Y(e)),
              e => this.triggerEvent(new J(e))
            )),
            (this.routerState = We(this.currentUrlTree, this.rootComponentType)),
            (this.transitions = new a.a({
              id: 0,
              currentUrlTree: this.currentUrlTree,
              currentRawUrl: this.currentUrlTree,
              extractedUrl: this.urlHandlingStrategy.extract(this.currentUrlTree),
              urlAfterRedirects: this.urlHandlingStrategy.extract(this.currentUrlTree),
              rawUrl: this.currentUrlTree,
              extras: {},
              resolve: null,
              reject: null,
              promise: Promise.resolve(!0),
              source: 'imperative',
              restoredState: null,
              currentSnapshot: this.routerState.snapshot,
              targetSnapshot: null,
              currentRouterState: this.routerState,
              targetRouterState: null,
              guards: { canActivateChecks: [], canDeactivateChecks: [] },
              guardsResult: null
            })),
            (this.navigations = this.setupNavigations(this.transitions)),
            this.processNavigations();
        }
        setupNavigations(e) {
          const t = this.events;
          return e.pipe(
            Object(m.a)(e => 0 !== e.id),
            Object(f.a)(e => Object.assign({}, e, { extractedUrl: this.urlHandlingStrategy.extract(e.rawUrl) })),
            Object(j.a)(e => {
              let n = !1,
                r = !1;
              return Object(i.a)(e).pipe(
                Object(L.a)(e => {
                  this.currentNavigation = {
                    id: e.id,
                    initialUrl: e.currentRawUrl,
                    extractedUrl: e.extractedUrl,
                    trigger: e.source,
                    extras: e.extras,
                    previousNavigation: this.lastSuccessfulNavigation
                      ? Object.assign({}, this.lastSuccessfulNavigation, { previousNavigation: null })
                      : null
                  };
                }),
                Object(j.a)(e => {
                  const n = !this.navigated || e.extractedUrl.toString() !== this.browserUrlTree.toString();
                  if (
                    ('reload' === this.onSameUrlNavigation || n) &&
                    this.urlHandlingStrategy.shouldProcessUrl(e.rawUrl)
                  )
                    return Object(i.a)(e).pipe(
                      Object(j.a)(e => {
                        const n = this.transitions.getValue();
                        return (
                          t.next(new q(e.id, this.serializeUrl(e.extractedUrl), e.source, e.restoredState)),
                          n !== this.transitions.getValue() ? p.a : [e]
                        );
                      }),
                      Object(j.a)(e => Promise.resolve(e)),
                      ((r = this.ngModule.injector),
                      (s = this.configLoader),
                      (o = this.urlSerializer),
                      (a = this.config),
                      function(e) {
                        return e.pipe(
                          Object(j.a)(e =>
                            (function(e, t, n, r, s) {
                              return new _t(e, t, n, r, s).apply();
                            })(r, s, o, e.extractedUrl, a).pipe(
                              Object(f.a)(t => Object.assign({}, e, { urlAfterRedirects: t }))
                            )
                          )
                        );
                      }),
                      Object(L.a)(e => {
                        this.currentNavigation = Object.assign({}, this.currentNavigation, {
                          finalUrl: e.urlAfterRedirects
                        });
                      }),
                      (function(e, t, n, r, s) {
                        return function(i) {
                          return i.pipe(
                            Object(T.a)(i =>
                              (function(e, t, n, r, s = 'emptyOnly', i = 'legacy') {
                                return new Ht(e, t, n, r, s, i).recognize();
                              })(e, t, i.urlAfterRedirects, n(i.urlAfterRedirects), r, s).pipe(
                                Object(f.a)(e => Object.assign({}, i, { targetSnapshot: e }))
                              )
                            )
                          );
                        };
                      })(
                        this.rootComponentType,
                        this.config,
                        e => this.serializeUrl(e),
                        this.paramsInheritanceStrategy,
                        this.relativeLinkResolution
                      ),
                      Object(L.a)(e => {
                        'eager' === this.urlUpdateStrategy &&
                          (e.extras.skipLocationChange ||
                            this.setBrowserUrl(e.urlAfterRedirects, !!e.extras.replaceUrl, e.id, e.extras.state),
                          (this.browserUrlTree = e.urlAfterRedirects));
                      }),
                      Object(L.a)(e => {
                        const n = new W(
                          e.id,
                          this.serializeUrl(e.extractedUrl),
                          this.serializeUrl(e.urlAfterRedirects),
                          e.targetSnapshot
                        );
                        t.next(n);
                      })
                    );
                  var r, s, o, a;
                  if (n && this.rawUrlTree && this.urlHandlingStrategy.shouldProcessUrl(this.rawUrlTree)) {
                    const { id: n, extractedUrl: r, source: s, restoredState: o, extras: a } = e,
                      l = new q(n, this.serializeUrl(r), s, o);
                    t.next(l);
                    const u = We(r, this.rootComponentType).snapshot;
                    return Object(i.a)(
                      Object.assign({}, e, {
                        targetSnapshot: u,
                        urlAfterRedirects: r,
                        extras: Object.assign({}, a, { skipLocationChange: !1, replaceUrl: !1 })
                      })
                    );
                  }
                  return (
                    (this.rawUrlTree = e.rawUrl), (this.browserUrlTree = e.urlAfterRedirects), e.resolve(null), p.a
                  );
                }),
                Gt(e => {
                  const {
                    targetSnapshot: t,
                    id: n,
                    extractedUrl: r,
                    rawUrl: s,
                    extras: { skipLocationChange: i, replaceUrl: o }
                  } = e;
                  return this.hooks.beforePreactivation(t, {
                    navigationId: n,
                    appliedUrlTree: r,
                    rawUrlTree: s,
                    skipLocationChange: !!i,
                    replaceUrl: !!o
                  });
                }),
                Object(L.a)(e => {
                  const t = new G(
                    e.id,
                    this.serializeUrl(e.extractedUrl),
                    this.serializeUrl(e.urlAfterRedirects),
                    e.targetSnapshot
                  );
                  this.triggerEvent(t);
                }),
                Object(f.a)(e =>
                  Object.assign({}, e, { guards: Dt(e.targetSnapshot, e.currentSnapshot, this.rootContexts) })
                ),
                (function(e, t) {
                  return function(n) {
                    return n.pipe(
                      Object(T.a)(n => {
                        const {
                          targetSnapshot: r,
                          currentSnapshot: s,
                          guards: { canActivateChecks: a, canDeactivateChecks: l }
                        } = n;
                        return 0 === l.length && 0 === a.length
                          ? Object(i.a)(Object.assign({}, n, { guardsResult: !0 }))
                          : (function(e, t, n, r) {
                              return Object(o.a)(e).pipe(
                                Object(T.a)(e =>
                                  (function(e, t, n, r, s) {
                                    const o = t && t.routeConfig ? t.routeConfig.canDeactivate : null;
                                    if (!o || 0 === o.length) return Object(i.a)(!0);
                                    const a = o.map(i => {
                                      const o = Tt(i, t, s);
                                      let a;
                                      if (
                                        (function(e) {
                                          return e && ft(e.canDeactivate);
                                        })(o)
                                      )
                                        a = ye(o.canDeactivate(e, t, n, r));
                                      else {
                                        if (!ft(o)) throw new Error('Invalid CanDeactivate guard');
                                        a = ye(o(e, t, n, r));
                                      }
                                      return a.pipe(D());
                                    });
                                    return Object(i.a)(a).pipe(jt());
                                  })(e.component, e.route, n, t, r)
                                ),
                                D(e => !0 !== e, !0)
                              );
                            })(l, r, s, e).pipe(
                              Object(T.a)(n =>
                                n && 'boolean' == typeof n
                                  ? (function(e, t, n, r) {
                                      return Object(o.a)(t).pipe(
                                        Object(P.a)(t =>
                                          Object(o.a)([
                                            Rt(t.route.parent, r),
                                            Nt(t.route, r),
                                            Mt(e, t.path, n),
                                            Pt(e, t.route, n)
                                          ]).pipe(
                                            Object(g.a)(),
                                            D(e => !0 !== e, !0)
                                          )
                                        ),
                                        D(e => !0 !== e, !0)
                                      );
                                    })(r, a, e, t)
                                  : Object(i.a)(n)
                              ),
                              Object(f.a)(e => Object.assign({}, n, { guardsResult: e }))
                            );
                      })
                    );
                  };
                })(this.ngModule.injector, e => this.triggerEvent(e)),
                Object(L.a)(e => {
                  if (gt(e.guardsResult)) {
                    const t = ae(`Redirecting to "${this.serializeUrl(e.guardsResult)}"`);
                    throw ((t.url = e.guardsResult), t);
                  }
                }),
                Object(L.a)(e => {
                  const t = new Z(
                    e.id,
                    this.serializeUrl(e.extractedUrl),
                    this.serializeUrl(e.urlAfterRedirects),
                    e.targetSnapshot,
                    !!e.guardsResult
                  );
                  this.triggerEvent(t);
                }),
                Object(m.a)(e => {
                  if (!e.guardsResult) {
                    this.resetUrlToCurrentUrlTree();
                    const n = new z(e.id, this.serializeUrl(e.extractedUrl), '');
                    return t.next(n), e.resolve(!1), !1;
                  }
                  return !0;
                }),
                Gt(e => {
                  if (e.guards.canActivateChecks.length)
                    return Object(i.a)(e).pipe(
                      Object(L.a)(e => {
                        const t = new K(
                          e.id,
                          this.serializeUrl(e.extractedUrl),
                          this.serializeUrl(e.urlAfterRedirects),
                          e.targetSnapshot
                        );
                        this.triggerEvent(t);
                      }),
                      ((t = this.paramsInheritanceStrategy),
                      (n = this.ngModule.injector),
                      function(e) {
                        return e.pipe(
                          Object(T.a)(e => {
                            const {
                              targetSnapshot: r,
                              guards: { canActivateChecks: s }
                            } = e;
                            return s.length
                              ? Object(o.a)(s).pipe(
                                  Object(P.a)(e =>
                                    (function(e, t, n, r) {
                                      return (function(e, t, n, r) {
                                        const s = Object.keys(e);
                                        if (0 === s.length) return Object(i.a)({});
                                        if (1 === s.length) {
                                          const i = s[0];
                                          return Wt(e[i], t, n, r).pipe(Object(f.a)(e => ({ [i]: e })));
                                        }
                                        const a = {};
                                        return Object(o.a)(s)
                                          .pipe(
                                            Object(T.a)(s => Wt(e[s], t, n, r).pipe(Object(f.a)(e => ((a[s] = e), e))))
                                          )
                                          .pipe(
                                            E(),
                                            Object(f.a)(() => a)
                                          );
                                      })(e._resolve, e, t, r).pipe(
                                        Object(f.a)(
                                          t => (
                                            (e._resolvedData = t),
                                            (e.data = Object.assign({}, e.data, Ze(e, n).resolve)),
                                            null
                                          )
                                        )
                                      );
                                    })(e.route, r, t, n)
                                  ),
                                  Object(M.a)((e, t) => e),
                                  Object(f.a)(t => e)
                                )
                              : Object(i.a)(e);
                          })
                        );
                      }),
                      Object(L.a)(e => {
                        const t = new Q(
                          e.id,
                          this.serializeUrl(e.extractedUrl),
                          this.serializeUrl(e.urlAfterRedirects),
                          e.targetSnapshot
                        );
                        this.triggerEvent(t);
                      })
                    );
                  var t, n;
                }),
                Gt(e => {
                  const {
                    targetSnapshot: t,
                    id: n,
                    extractedUrl: r,
                    rawUrl: s,
                    extras: { skipLocationChange: i, replaceUrl: o }
                  } = e;
                  return this.hooks.afterPreactivation(t, {
                    navigationId: n,
                    appliedUrlTree: r,
                    rawUrlTree: s,
                    skipLocationChange: !!i,
                    replaceUrl: !!o
                  });
                }),
                Object(f.a)(e => {
                  const t = (function(e, t, n) {
                    const r = (function e(t, n, r) {
                      if (r && t.shouldReuseRoute(n.value, r.value.snapshot)) {
                        const s = r.value;
                        s._futureSnapshot = n.value;
                        const i = (function(t, n, r) {
                          return n.children.map(n => {
                            for (const s of r.children)
                              if (t.shouldReuseRoute(s.value.snapshot, n.value)) return e(t, n, s);
                            return e(t, n);
                          });
                        })(t, n, r);
                        return new $e(s, i);
                      }
                      {
                        const r = t.retrieve(n.value);
                        if (r) {
                          const e = r.route;
                          return (
                            (function e(t, n) {
                              if (t.value.routeConfig !== n.value.routeConfig)
                                throw new Error(
                                  'Cannot reattach ActivatedRouteSnapshot created from a different route'
                                );
                              if (t.children.length !== n.children.length)
                                throw new Error(
                                  'Cannot reattach ActivatedRouteSnapshot with a different number of children'
                                );
                              n.value._futureSnapshot = t.value;
                              for (let r = 0; r < t.children.length; ++r) e(t.children[r], n.children[r]);
                            })(n, e),
                            e
                          );
                        }
                        {
                          const r = new Ge(
                              new a.a((s = n.value).url),
                              new a.a(s.params),
                              new a.a(s.queryParams),
                              new a.a(s.fragment),
                              new a.a(s.data),
                              s.outlet,
                              s.component,
                              s
                            ),
                            i = n.children.map(n => e(t, n));
                          return new $e(r, i);
                        }
                      }
                      var s;
                    })(e, t._root, n ? n._root : void 0);
                    return new Be(r, t);
                  })(this.routeReuseStrategy, e.targetSnapshot, e.currentRouterState);
                  return Object.assign({}, e, { targetRouterState: t });
                }),
                Object(L.a)(e => {
                  (this.currentUrlTree = e.urlAfterRedirects),
                    (this.rawUrlTree = this.urlHandlingStrategy.merge(this.currentUrlTree, e.rawUrl)),
                    (this.routerState = e.targetRouterState),
                    'deferred' === this.urlUpdateStrategy &&
                      (e.extras.skipLocationChange ||
                        this.setBrowserUrl(this.rawUrlTree, !!e.extras.replaceUrl, e.id, e.extras.state),
                      (this.browserUrlTree = e.urlAfterRedirects));
                }),
                ((s = this.rootContexts),
                (l = this.routeReuseStrategy),
                (u = e => this.triggerEvent(e)),
                Object(f.a)(e => (new dt(l, e.targetRouterState, e.currentRouterState, u).activate(s), e))),
                Object(L.a)({
                  next() {
                    n = !0;
                  },
                  complete() {
                    n = !0;
                  }
                }),
                Object(H.a)(() => {
                  if (!n && !r) {
                    this.resetUrlToCurrentUrlTree();
                    const n = new z(
                      e.id,
                      this.serializeUrl(e.extractedUrl),
                      `Navigation ID ${e.id} is not equal to the current navigation id ${this.navigationId}`
                    );
                    t.next(n), e.resolve(!1);
                  }
                  this.currentNavigation = null;
                }),
                Object(O.a)(n => {
                  if (((r = !0), (s = n) && s.ngNavigationCancelingError)) {
                    const r = gt(n.url);
                    r ||
                      ((this.navigated = !0), this.resetStateAndUrl(e.currentRouterState, e.currentUrlTree, e.rawUrl));
                    const s = new z(e.id, this.serializeUrl(e.extractedUrl), n.message);
                    t.next(s), e.resolve(!1), r && this.navigateByUrl(n.url);
                  } else {
                    this.resetStateAndUrl(e.currentRouterState, e.currentUrlTree, e.rawUrl);
                    const r = new B(e.id, this.serializeUrl(e.extractedUrl), n);
                    t.next(r);
                    try {
                      e.resolve(this.errorHandler(n));
                    } catch (i) {
                      e.reject(i);
                    }
                  }
                  var s;
                  return p.a;
                })
              );
              var s, l, u;
            })
          );
        }
        resetRootComponentType(e) {
          (this.rootComponentType = e), (this.routerState.root.component = this.rootComponentType);
        }
        getTransition() {
          const e = this.transitions.value;
          return (e.urlAfterRedirects = this.browserUrlTree), e;
        }
        setTransition(e) {
          this.transitions.next(Object.assign({}, this.getTransition(), e));
        }
        initialNavigation() {
          this.setUpLocationChangeListener(),
            0 === this.navigationId && this.navigateByUrl(this.location.path(!0), { replaceUrl: !0 });
        }
        setUpLocationChangeListener() {
          this.locationSubscription ||
            (this.locationSubscription = this.location.subscribe(e => {
              let t = this.parseUrl(e.url);
              const n = 'popstate' === e.type ? 'popstate' : 'hashchange',
                r = e.state && e.state.navigationId ? e.state : null;
              setTimeout(() => {
                this.scheduleNavigation(t, n, r, { replaceUrl: !0 });
              }, 0);
            }));
        }
        get url() {
          return this.serializeUrl(this.currentUrlTree);
        }
        getCurrentNavigation() {
          return this.currentNavigation;
        }
        triggerEvent(e) {
          this.events.next(e);
        }
        resetConfig(e) {
          ce(e), (this.config = e.map(pe)), (this.navigated = !1), (this.lastSuccessfulId = -1);
        }
        ngOnDestroy() {
          this.dispose();
        }
        dispose() {
          this.locationSubscription && (this.locationSubscription.unsubscribe(), (this.locationSubscription = null));
        }
        createUrlTree(e, t = {}) {
          const {
            relativeTo: n,
            queryParams: r,
            fragment: i,
            preserveQueryParams: o,
            queryParamsHandling: a,
            preserveFragment: l
          } = t;
          Object(s.U)() &&
            o &&
            console &&
            console.warn &&
            console.warn('preserveQueryParams is deprecated, use queryParamsHandling instead.');
          const u = n || this.routerState.root,
            c = l ? this.currentUrlTree.fragment : i;
          let h = null;
          if (a)
            switch (a) {
              case 'merge':
                h = Object.assign({}, this.currentUrlTree.queryParams, r);
                break;
              case 'preserve':
                h = this.currentUrlTree.queryParams;
                break;
              default:
                h = r || null;
            }
          else h = o ? this.currentUrlTree.queryParams : r || null;
          return (
            null !== h && (h = this.removeEmptyProps(h)),
            (function(e, t, n, r, s) {
              if (0 === n.length) return nt(t.root, t.root, t, r, s);
              const i = (function(e) {
                if ('string' == typeof e[0] && 1 === e.length && '/' === e[0]) return new rt(!0, 0, e);
                let t = 0,
                  n = !1;
                const r = e.reduce((e, r, s) => {
                  if ('object' == typeof r && null != r) {
                    if (r.outlets) {
                      const t = {};
                      return (
                        be(r.outlets, (e, n) => {
                          t[n] = 'string' == typeof e ? e.split('/') : e;
                        }),
                        [...e, { outlets: t }]
                      );
                    }
                    if (r.segmentPath) return [...e, r.segmentPath];
                  }
                  return 'string' != typeof r
                    ? [...e, r]
                    : 0 === s
                    ? (r.split('/').forEach((r, s) => {
                        (0 == s && '.' === r) ||
                          (0 == s && '' === r ? (n = !0) : '..' === r ? t++ : '' != r && e.push(r));
                      }),
                      e)
                    : [...e, r];
                }, []);
                return new rt(n, t, r);
              })(n);
              if (i.toRoot()) return nt(t.root, new _e([], {}), t, r, s);
              const o = (function(e, t, n) {
                  if (e.isAbsolute) return new st(t.root, !0, 0);
                  if (-1 === n.snapshot._lastPathIndex) return new st(n.snapshot._urlSegment, !0, 0);
                  const r = tt(e.commands[0]) ? 0 : 1;
                  return (function(e, t, n) {
                    let r = e,
                      s = t,
                      i = n;
                    for (; i > s; ) {
                      if (((i -= s), (r = r.parent), !r)) throw new Error("Invalid number of '../'");
                      s = r.segments.length;
                    }
                    return new st(r, !1, s - i);
                  })(n.snapshot._urlSegment, n.snapshot._lastPathIndex + r, e.numberOfDoubleDots);
                })(i, t, e),
                a = o.processChildren
                  ? at(o.segmentGroup, o.index, i.commands)
                  : ot(o.segmentGroup, o.index, i.commands);
              return nt(o.segmentGroup, a, t, r, s);
            })(u, this.currentUrlTree, e, h, c)
          );
        }
        navigateByUrl(e, t = { skipLocationChange: !1 }) {
          Object(s.U)() &&
            this.isNgZoneEnabled &&
            !s.y.isInAngularZone() &&
            this.console.warn("Navigation triggered outside Angular zone, did you forget to call 'ngZone.run()'?");
          const n = gt(e) ? e : this.parseUrl(e),
            r = this.urlHandlingStrategy.merge(n, this.rawUrlTree);
          return this.scheduleNavigation(r, 'imperative', null, t);
        }
        navigate(e, t = { skipLocationChange: !1 }) {
          return (
            (function(e) {
              for (let t = 0; t < e.length; t++) {
                const n = e[t];
                if (null == n) throw new Error(`The requested path contains ${n} segment at index ${t}`);
              }
            })(e),
            this.navigateByUrl(this.createUrlTree(e, t), t)
          );
        }
        serializeUrl(e) {
          return this.urlSerializer.serialize(e);
        }
        parseUrl(e) {
          let t;
          try {
            t = this.urlSerializer.parse(e);
          } catch (n) {
            t = this.malformedUriErrorHandler(n, this.urlSerializer, e);
          }
          return t;
        }
        isActive(e, t) {
          if (gt(e)) return ve(this.currentUrlTree, e, t);
          const n = this.parseUrl(e);
          return ve(this.currentUrlTree, n, t);
        }
        removeEmptyProps(e) {
          return Object.keys(e).reduce((t, n) => {
            const r = e[n];
            return null != r && (t[n] = r), t;
          }, {});
        }
        processNavigations() {
          this.navigations.subscribe(
            e => {
              (this.navigated = !0),
                (this.lastSuccessfulId = e.id),
                this.events.next(
                  new $(e.id, this.serializeUrl(e.extractedUrl), this.serializeUrl(this.currentUrlTree))
                ),
                (this.lastSuccessfulNavigation = this.currentNavigation),
                (this.currentNavigation = null),
                e.resolve(!0);
            },
            e => {
              this.console.warn('Unhandled Navigation Error: ');
            }
          );
        }
        scheduleNavigation(e, t, n, r) {
          const s = this.getTransition();
          if (s && 'imperative' !== t && 'imperative' === s.source && s.rawUrl.toString() === e.toString())
            return Promise.resolve(!0);
          if (s && 'hashchange' == t && 'popstate' === s.source && s.rawUrl.toString() === e.toString())
            return Promise.resolve(!0);
          if (s && 'popstate' == t && 'hashchange' === s.source && s.rawUrl.toString() === e.toString())
            return Promise.resolve(!0);
          let i = null,
            o = null;
          const a = new Promise((e, t) => {
              (i = e), (o = t);
            }),
            l = ++this.navigationId;
          return (
            this.setTransition({
              id: l,
              source: t,
              restoredState: n,
              currentUrlTree: this.currentUrlTree,
              currentRawUrl: this.rawUrlTree,
              rawUrl: e,
              extras: r,
              resolve: i,
              reject: o,
              promise: a,
              currentSnapshot: this.routerState.snapshot,
              currentRouterState: this.routerState
            }),
            a.catch(e => Promise.reject(e))
          );
        }
        setBrowserUrl(e, t, n, r) {
          const s = this.urlSerializer.serialize(e);
          (r = r || {}),
            this.location.isCurrentPathEqualTo(s) || t
              ? this.location.replaceState(s, '', Object.assign({}, r, { navigationId: n }))
              : this.location.go(s, '', Object.assign({}, r, { navigationId: n }));
        }
        resetStateAndUrl(e, t, n) {
          (this.routerState = e),
            (this.currentUrlTree = t),
            (this.rawUrlTree = this.urlHandlingStrategy.merge(this.currentUrlTree, n)),
            this.resetUrlToCurrentUrlTree();
        }
        resetUrlToCurrentUrlTree() {
          this.location.replaceState(this.urlSerializer.serialize(this.rawUrlTree), '', {
            navigationId: this.lastSuccessfulId
          });
        }
      }
      let sn = (() =>
          class {
            constructor(e, t, n, r, s) {
              (this.router = e),
                (this.route = t),
                (this.commands = []),
                null == n && r.setAttribute(s.nativeElement, 'tabindex', '0');
            }
            set routerLink(e) {
              this.commands = null != e ? (Array.isArray(e) ? e : [e]) : [];
            }
            set preserveQueryParams(e) {
              Object(s.U)() &&
                console &&
                console.warn &&
                console.warn('preserveQueryParams is deprecated!, use queryParamsHandling instead.'),
                (this.preserve = e);
            }
            onClick() {
              const e = { skipLocationChange: an(this.skipLocationChange), replaceUrl: an(this.replaceUrl) };
              return this.router.navigateByUrl(this.urlTree, e), !0;
            }
            get urlTree() {
              return this.router.createUrlTree(this.commands, {
                relativeTo: this.route,
                queryParams: this.queryParams,
                fragment: this.fragment,
                preserveQueryParams: an(this.preserve),
                queryParamsHandling: this.queryParamsHandling,
                preserveFragment: an(this.preserveFragment)
              });
            }
          })(),
        on = (() =>
          class {
            constructor(e, t, n) {
              (this.router = e),
                (this.route = t),
                (this.locationStrategy = n),
                (this.commands = []),
                (this.subscription = e.events.subscribe(e => {
                  e instanceof $ && this.updateTargetUrlAndHref();
                }));
            }
            set routerLink(e) {
              this.commands = null != e ? (Array.isArray(e) ? e : [e]) : [];
            }
            set preserveQueryParams(e) {
              Object(s.U)() &&
                console &&
                console.warn &&
                console.warn('preserveQueryParams is deprecated, use queryParamsHandling instead.'),
                (this.preserve = e);
            }
            ngOnChanges(e) {
              this.updateTargetUrlAndHref();
            }
            ngOnDestroy() {
              this.subscription.unsubscribe();
            }
            onClick(e, t, n, r) {
              if (0 !== e || t || n || r) return !0;
              if ('string' == typeof this.target && '_self' != this.target) return !0;
              const s = {
                skipLocationChange: an(this.skipLocationChange),
                replaceUrl: an(this.replaceUrl),
                state: this.state
              };
              return this.router.navigateByUrl(this.urlTree, s), !1;
            }
            updateTargetUrlAndHref() {
              this.href = this.locationStrategy.prepareExternalUrl(this.router.serializeUrl(this.urlTree));
            }
            get urlTree() {
              return this.router.createUrlTree(this.commands, {
                relativeTo: this.route,
                queryParams: this.queryParams,
                fragment: this.fragment,
                preserveQueryParams: an(this.preserve),
                queryParamsHandling: this.queryParamsHandling,
                preserveFragment: an(this.preserveFragment)
              });
            }
          })();
      function an(e) {
        return '' === e || !!e;
      }
      let ln = (() =>
        class {
          constructor(e, t, n, r, s) {
            (this.router = e),
              (this.element = t),
              (this.renderer = n),
              (this.link = r),
              (this.linkWithHref = s),
              (this.classes = []),
              (this.isActive = !1),
              (this.routerLinkActiveOptions = { exact: !1 }),
              (this.subscription = e.events.subscribe(e => {
                e instanceof $ && this.update();
              }));
          }
          ngAfterContentInit() {
            this.links.changes.subscribe(e => this.update()),
              this.linksWithHrefs.changes.subscribe(e => this.update()),
              this.update();
          }
          set routerLinkActive(e) {
            const t = Array.isArray(e) ? e : e.split(' ');
            this.classes = t.filter(e => !!e);
          }
          ngOnChanges(e) {
            this.update();
          }
          ngOnDestroy() {
            this.subscription.unsubscribe();
          }
          update() {
            this.links &&
              this.linksWithHrefs &&
              this.router.navigated &&
              Promise.resolve().then(() => {
                const e = this.hasActiveLinks();
                this.isActive !== e &&
                  ((this.isActive = e),
                  this.classes.forEach(t => {
                    e
                      ? this.renderer.addClass(this.element.nativeElement, t)
                      : this.renderer.removeClass(this.element.nativeElement, t);
                  }));
              });
          }
          isLinkActive(e) {
            return t => e.isActive(t.urlTree, this.routerLinkActiveOptions.exact);
          }
          hasActiveLinks() {
            const e = this.isLinkActive(this.router);
            return (
              (this.link && e(this.link)) ||
              (this.linkWithHref && e(this.linkWithHref)) ||
              this.links.some(e) ||
              this.linksWithHrefs.some(e)
            );
          }
        })();
      class un {
        constructor() {
          (this.outlet = null),
            (this.route = null),
            (this.resolver = null),
            (this.children = new cn()),
            (this.attachRef = null);
        }
      }
      class cn {
        constructor() {
          this.contexts = new Map();
        }
        onChildOutletCreated(e, t) {
          const n = this.getOrCreateContext(e);
          (n.outlet = t), this.contexts.set(e, n);
        }
        onChildOutletDestroyed(e) {
          const t = this.getContext(e);
          t && (t.outlet = null);
        }
        onOutletDeactivated() {
          const e = this.contexts;
          return (this.contexts = new Map()), e;
        }
        onOutletReAttached(e) {
          this.contexts = e;
        }
        getOrCreateContext(e) {
          let t = this.getContext(e);
          return t || ((t = new un()), this.contexts.set(e, t)), t;
        }
        getContext(e) {
          return this.contexts.get(e) || null;
        }
      }
      let hn = (() =>
        class {
          constructor(e, t, n, r, i) {
            (this.parentContexts = e),
              (this.location = t),
              (this.resolver = n),
              (this.changeDetector = i),
              (this.activated = null),
              (this._activatedRoute = null),
              (this.activateEvents = new s.m()),
              (this.deactivateEvents = new s.m()),
              (this.name = r || 'primary'),
              e.onChildOutletCreated(this.name, this);
          }
          ngOnDestroy() {
            this.parentContexts.onChildOutletDestroyed(this.name);
          }
          ngOnInit() {
            if (!this.activated) {
              const e = this.parentContexts.getContext(this.name);
              e &&
                e.route &&
                (e.attachRef ? this.attach(e.attachRef, e.route) : this.activateWith(e.route, e.resolver || null));
            }
          }
          get isActivated() {
            return !!this.activated;
          }
          get component() {
            if (!this.activated) throw new Error('Outlet is not activated');
            return this.activated.instance;
          }
          get activatedRoute() {
            if (!this.activated) throw new Error('Outlet is not activated');
            return this._activatedRoute;
          }
          get activatedRouteData() {
            return this._activatedRoute ? this._activatedRoute.snapshot.data : {};
          }
          detach() {
            if (!this.activated) throw new Error('Outlet is not activated');
            this.location.detach();
            const e = this.activated;
            return (this.activated = null), (this._activatedRoute = null), e;
          }
          attach(e, t) {
            (this.activated = e), (this._activatedRoute = t), this.location.insert(e.hostView);
          }
          deactivate() {
            if (this.activated) {
              const e = this.component;
              this.activated.destroy(),
                (this.activated = null),
                (this._activatedRoute = null),
                this.deactivateEvents.emit(e);
            }
          }
          activateWith(e, t) {
            if (this.isActivated) throw new Error('Cannot activate an already activated outlet');
            this._activatedRoute = e;
            const n = (t = t || this.resolver).resolveComponentFactory(e._futureSnapshot.routeConfig.component),
              r = this.parentContexts.getOrCreateContext(this.name).children,
              s = new dn(e, r, this.location.injector);
            (this.activated = this.location.createComponent(n, this.location.length, s)),
              this.changeDetector.markForCheck(),
              this.activateEvents.emit(this.activated.instance);
          }
        })();
      class dn {
        constructor(e, t, n) {
          (this.route = e), (this.childContexts = t), (this.parent = n);
        }
        get(e, t) {
          return e === Ge ? this.route : e === cn ? this.childContexts : this.parent.get(e, t);
        }
      }
      class pn {}
      class fn {
        preload(e, t) {
          return t().pipe(Object(O.a)(() => Object(i.a)(null)));
        }
      }
      class gn {
        preload(e, t) {
          return Object(i.a)(null);
        }
      }
      let mn = (() =>
        class {
          constructor(e, t, n, r, s) {
            (this.router = e),
              (this.injector = r),
              (this.preloadingStrategy = s),
              (this.loader = new Yt(
                t,
                n,
                t => e.triggerEvent(new Y(t)),
                t => e.triggerEvent(new J(t))
              ));
          }
          setUpPreloading() {
            this.subscription = this.router.events
              .pipe(
                Object(m.a)(e => e instanceof $),
                Object(P.a)(() => this.preload())
              )
              .subscribe(() => {});
          }
          preload() {
            const e = this.injector.get(s.w);
            return this.processRoutes(e, this.router.config);
          }
          ngOnDestroy() {
            this.subscription.unsubscribe();
          }
          processRoutes(e, t) {
            const n = [];
            for (const r of t)
              if (r.loadChildren && !r.canLoad && r._loadedConfig) {
                const e = r._loadedConfig;
                n.push(this.processRoutes(e.module, e.routes));
              } else
                r.loadChildren && !r.canLoad
                  ? n.push(this.preloadConfig(e, r))
                  : r.children && n.push(this.processRoutes(e, r.children));
            return Object(o.a)(n).pipe(
              Object(F.a)(),
              Object(f.a)(e => {})
            );
          }
          preloadConfig(e, t) {
            return this.preloadingStrategy.preload(t, () =>
              this.loader
                .load(e.injector, t)
                .pipe(Object(T.a)(e => ((t._loadedConfig = e), this.processRoutes(e.module, e.routes))))
            );
          }
        })();
      class bn {
        constructor(e, t, n = {}) {
          (this.router = e),
            (this.viewportScroller = t),
            (this.options = n),
            (this.lastId = 0),
            (this.lastSource = 'imperative'),
            (this.restoredId = 0),
            (this.store = {}),
            (n.scrollPositionRestoration = n.scrollPositionRestoration || 'disabled'),
            (n.anchorScrolling = n.anchorScrolling || 'disabled');
        }
        init() {
          'disabled' !== this.options.scrollPositionRestoration &&
            this.viewportScroller.setHistoryScrollRestoration('manual'),
            (this.routerEventsSubscription = this.createScrollEvents()),
            (this.scrollEventsSubscription = this.consumeScrollEvents());
        }
        createScrollEvents() {
          return this.router.events.subscribe(e => {
            e instanceof q
              ? ((this.store[this.lastId] = this.viewportScroller.getScrollPosition()),
                (this.lastSource = e.navigationTrigger),
                (this.restoredId = e.restoredState ? e.restoredState.navigationId : 0))
              : e instanceof $ &&
                ((this.lastId = e.id), this.scheduleScrollEvent(e, this.router.parseUrl(e.urlAfterRedirects).fragment));
          });
        }
        consumeScrollEvents() {
          return this.router.events.subscribe(e => {
            e instanceof re &&
              (e.position
                ? 'top' === this.options.scrollPositionRestoration
                  ? this.viewportScroller.scrollToPosition([0, 0])
                  : 'enabled' === this.options.scrollPositionRestoration &&
                    this.viewportScroller.scrollToPosition(e.position)
                : e.anchor && 'enabled' === this.options.anchorScrolling
                ? this.viewportScroller.scrollToAnchor(e.anchor)
                : 'disabled' !== this.options.scrollPositionRestoration &&
                  this.viewportScroller.scrollToPosition([0, 0]));
          });
        }
        scheduleScrollEvent(e, t) {
          this.router.triggerEvent(new re(e, 'popstate' === this.lastSource ? this.store[this.restoredId] : null, t));
        }
        ngOnDestroy() {
          this.routerEventsSubscription && this.routerEventsSubscription.unsubscribe(),
            this.scrollEventsSubscription && this.scrollEventsSubscription.unsubscribe();
        }
      }
      const yn = new s.p('ROUTER_CONFIGURATION'),
        vn = new s.p('ROUTER_FORROOT_GUARD'),
        wn = [
          r.g,
          { provide: Ee, useClass: Oe },
          {
            provide: rn,
            useFactory: kn,
            deps: [s.g, Ee, cn, r.g, s.q, s.v, s.i, Qt, yn, [Jt, new s.z()], [Zt, new s.z()]]
          },
          cn,
          { provide: Ge, useFactory: Dn, deps: [rn] },
          { provide: s.v, useClass: s.I },
          mn,
          gn,
          fn,
          { provide: yn, useValue: { enableTracing: !1 } }
        ];
      function _n() {
        return new s.x('Router', rn);
      }
      let Cn = (() => {
        class e {
          constructor(e, t) {}
          static forRoot(t, n) {
            return {
              ngModule: e,
              providers: [
                wn,
                On(t),
                { provide: vn, useFactory: En, deps: [[rn, new s.z(), new s.H()]] },
                { provide: yn, useValue: n || {} },
                { provide: r.h, useFactory: Sn, deps: [r.o, [new s.o(r.a), new s.z()], yn] },
                { provide: bn, useFactory: xn, deps: [rn, r.q, yn] },
                { provide: pn, useExisting: n && n.preloadingStrategy ? n.preloadingStrategy : gn },
                { provide: s.x, multi: !0, useFactory: _n },
                [
                  Tn,
                  { provide: s.d, multi: !0, useFactory: An, deps: [Tn] },
                  { provide: jn, useFactory: In, deps: [Tn] },
                  { provide: s.b, multi: !0, useExisting: jn }
                ]
              ]
            };
          }
          static forChild(t) {
            return { ngModule: e, providers: [On(t)] };
          }
        }
        return e;
      })();
      function xn(e, t, n) {
        return n.scrollOffset && t.setOffset(n.scrollOffset), new bn(e, t, n);
      }
      function Sn(e, t, n = {}) {
        return n.useHash ? new r.e(e, t) : new r.n(e, t);
      }
      function En(e) {
        if (e)
          throw new Error(
            'RouterModule.forRoot() called twice. Lazy loaded modules should use RouterModule.forChild() instead.'
          );
        return 'guarded';
      }
      function On(e) {
        return [
          { provide: s.a, multi: !0, useValue: e },
          { provide: Qt, multi: !0, useValue: e }
        ];
      }
      function kn(e, t, n, r, s, i, o, a, l = {}, u, c) {
        const h = new rn(null, t, n, r, s, i, o, ge(a));
        if (
          (u && (h.urlHandlingStrategy = u),
          c && (h.routeReuseStrategy = c),
          l.errorHandler && (h.errorHandler = l.errorHandler),
          l.malformedUriErrorHandler && (h.malformedUriErrorHandler = l.malformedUriErrorHandler),
          l.enableTracing)
        ) {
          const e = Object(U.s)();
          h.events.subscribe(t => {
            e.logGroup('Router Event: ' + t.constructor.name), e.log(t.toString()), e.log(t), e.logGroupEnd();
          });
        }
        return (
          l.onSameUrlNavigation && (h.onSameUrlNavigation = l.onSameUrlNavigation),
          l.paramsInheritanceStrategy && (h.paramsInheritanceStrategy = l.paramsInheritanceStrategy),
          l.urlUpdateStrategy && (h.urlUpdateStrategy = l.urlUpdateStrategy),
          l.relativeLinkResolution && (h.relativeLinkResolution = l.relativeLinkResolution),
          h
        );
      }
      function Dn(e) {
        return e.routerState.root;
      }
      let Tn = (() =>
        class {
          constructor(e) {
            (this.injector = e), (this.initNavigation = !1), (this.resultOfPreactivationDone = new d.a());
          }
          appInitializer() {
            return this.injector.get(r.f, Promise.resolve(null)).then(() => {
              let e = null;
              const t = new Promise(t => (e = t)),
                n = this.injector.get(rn),
                r = this.injector.get(yn);
              if (this.isLegacyDisabled(r) || this.isLegacyEnabled(r)) e(!0);
              else if ('disabled' === r.initialNavigation) n.setUpLocationChangeListener(), e(!0);
              else {
                if ('enabled' !== r.initialNavigation)
                  throw new Error(`Invalid initialNavigation options: '${r.initialNavigation}'`);
                (n.hooks.afterPreactivation = () =>
                  this.initNavigation
                    ? Object(i.a)(null)
                    : ((this.initNavigation = !0), e(!0), this.resultOfPreactivationDone)),
                  n.initialNavigation();
              }
              return t;
            });
          }
          bootstrapListener(e) {
            const t = this.injector.get(yn),
              n = this.injector.get(mn),
              r = this.injector.get(bn),
              i = this.injector.get(rn),
              o = this.injector.get(s.g);
            e === o.components[0] &&
              (this.isLegacyEnabled(t)
                ? i.initialNavigation()
                : this.isLegacyDisabled(t) && i.setUpLocationChangeListener(),
              n.setUpPreloading(),
              r.init(),
              i.resetRootComponentType(o.componentTypes[0]),
              this.resultOfPreactivationDone.next(null),
              this.resultOfPreactivationDone.complete());
          }
          isLegacyEnabled(e) {
            return (
              'legacy_enabled' === e.initialNavigation || !0 === e.initialNavigation || void 0 === e.initialNavigation
            );
          }
          isLegacyDisabled(e) {
            return 'legacy_disabled' === e.initialNavigation || !1 === e.initialNavigation;
          }
        })();
      function An(e) {
        return e.appInitializer.bind(e);
      }
      function In(e) {
        return e.bootstrapListener.bind(e);
      }
      const jn = new s.p('Router Initializer');
    },
    itXk: function(e, t, n) {
      'use strict';
      n.d(t, 'a', function() {
        return u;
      });
      var r = n('z+Ro'),
        s = n('DH7j'),
        i = n('l7GE'),
        o = n('ZUHj'),
        a = n('yCtX');
      const l = {};
      function u(...e) {
        let t = null,
          n = null;
        return (
          Object(r.a)(e[e.length - 1]) && (n = e.pop()),
          'function' == typeof e[e.length - 1] && (t = e.pop()),
          1 === e.length && Object(s.a)(e[0]) && (e = e[0]),
          Object(a.a)(e, n).lift(new c(t))
        );
      }
      class c {
        constructor(e) {
          this.resultSelector = e;
        }
        call(e, t) {
          return t.subscribe(new h(e, this.resultSelector));
        }
      }
      class h extends i.a {
        constructor(e, t) {
          super(e), (this.resultSelector = t), (this.active = 0), (this.values = []), (this.observables = []);
        }
        _next(e) {
          this.values.push(l), this.observables.push(e);
        }
        _complete() {
          const e = this.observables,
            t = e.length;
          if (0 === t) this.destination.complete();
          else {
            (this.active = t), (this.toRespond = t);
            for (let n = 0; n < t; n++) {
              const t = e[n];
              this.add(Object(o.a)(this, t, t, n));
            }
          }
        }
        notifyComplete(e) {
          0 == (this.active -= 1) && this.destination.complete();
        }
        notifyNext(e, t, n, r, s) {
          const i = this.values,
            o = this.toRespond ? (i[n] === l ? --this.toRespond : this.toRespond) : 0;
          (i[n] = t), 0 === o && (this.resultSelector ? this._tryResultSelector(i) : this.destination.next(i.slice()));
        }
        _tryResultSelector(e) {
          let t;
          try {
            t = this.resultSelector.apply(this, e);
          } catch (n) {
            return void this.destination.error(n);
          }
          this.destination.next(t);
        }
      }
    },
    jZKg: function(e, t, n) {
      'use strict';
      n.d(t, 'a', function() {
        return i;
      });
      var r = n('HDdC'),
        s = n('quSY');
      function i(e, t) {
        return new r.a(n => {
          const r = new s.a();
          let i = 0;
          return (
            r.add(
              t.schedule(function() {
                i !== e.length ? (n.next(e[i++]), n.closed || r.add(this.schedule())) : n.complete();
              })
            ),
            r
          );
        });
      }
    },
    kJWO: function(e, t, n) {
      'use strict';
      n.d(t, 'a', function() {
        return r;
      });
      const r = (() => ('function' == typeof Symbol && Symbol.observable) || '@@observable')();
    },
    l7GE: function(e, t, n) {
      'use strict';
      n.d(t, 'a', function() {
        return s;
      });
      var r = n('7o/Q');
      class s extends r.a {
        notifyNext(e, t, n, r, s) {
          this.destination.next(t);
        }
        notifyError(e, t) {
          this.destination.error(e);
        }
        notifyComplete(e) {
          this.destination.complete();
        }
      }
    },
    lJxs: function(e, t, n) {
      'use strict';
      n.d(t, 'a', function() {
        return s;
      });
      var r = n('7o/Q');
      function s(e, t) {
        return function(n) {
          if ('function' != typeof e) throw new TypeError('argument is not a function. Are you looking for `mapTo()`?');
          return n.lift(new i(e, t));
        };
      }
      class i {
        constructor(e, t) {
          (this.project = e), (this.thisArg = t);
        }
        call(e, t) {
          return t.subscribe(new o(e, this.project, this.thisArg));
        }
      }
      class o extends r.a {
        constructor(e, t, n) {
          super(e), (this.project = t), (this.count = 0), (this.thisArg = n || this);
        }
        _next(e) {
          let t;
          try {
            t = this.project.call(this.thisArg, e, this.count++);
          } catch (n) {
            return void this.destination.error(n);
          }
          this.destination.next(t);
        }
      }
    },
    mCNh: function(e, t, n) {
      'use strict';
      n.d(t, 'a', function() {
        return s;
      }),
        n.d(t, 'b', function() {
          return i;
        });
      var r = n('SpAZ');
      function s(...e) {
        return i(e);
      }
      function i(e) {
        return 0 === e.length
          ? r.a
          : 1 === e.length
          ? e[0]
          : function(t) {
              return e.reduce((e, t) => t(e), t);
            };
      }
    },
    n6bG: function(e, t, n) {
      'use strict';
      function r(e) {
        return 'function' == typeof e;
      }
      n.d(t, 'a', function() {
        return r;
      });
    },
    nYR2: function(e, t, n) {
      'use strict';
      n.d(t, 'a', function() {
        return i;
      });
      var r = n('7o/Q'),
        s = n('quSY');
      function i(e) {
        return t => t.lift(new o(e));
      }
      class o {
        constructor(e) {
          this.callback = e;
        }
        call(e, t) {
          return t.subscribe(new a(e, this.callback));
        }
      }
      class a extends r.a {
        constructor(e, t) {
          super(e), this.add(new s.a(t));
        }
      }
    },
    ngJS: function(e, t, n) {
      'use strict';
      n.d(t, 'a', function() {
        return r;
      });
      const r = e => t => {
        for (let n = 0, r = e.length; n < r && !t.closed; n++) t.next(e[n]);
        t.complete();
      };
    },
    oB13: function(e, t, n) {
      'use strict';
      var r = n('XNiG'),
        s = n('HDdC'),
        i = (n('7o/Q'), n('quSY')),
        o = n('x+ZX');
      class a extends s.a {
        constructor(e, t) {
          super(), (this.source = e), (this.subjectFactory = t), (this._refCount = 0), (this._isComplete = !1);
        }
        _subscribe(e) {
          return this.getSubject().subscribe(e);
        }
        getSubject() {
          const e = this._subject;
          return (e && !e.isStopped) || (this._subject = this.subjectFactory()), this._subject;
        }
        connect() {
          let e = this._connection;
          return (
            e ||
              ((this._isComplete = !1),
              (e = this._connection = new i.a()),
              e.add(this.source.subscribe(new u(this.getSubject(), this))),
              e.closed && ((this._connection = null), (e = i.a.EMPTY))),
            e
          );
        }
        refCount() {
          return Object(o.a)()(this);
        }
      }
      const l = (() => {
        const e = a.prototype;
        return {
          operator: { value: null },
          _refCount: { value: 0, writable: !0 },
          _subject: { value: null, writable: !0 },
          _connection: { value: null, writable: !0 },
          _subscribe: { value: e._subscribe },
          _isComplete: { value: e._isComplete, writable: !0 },
          getSubject: { value: e.getSubject },
          connect: { value: e.connect },
          refCount: { value: e.refCount }
        };
      })();
      class u extends r.b {
        constructor(e, t) {
          super(e), (this.connectable = t);
        }
        _error(e) {
          this._unsubscribe(), super._error(e);
        }
        _complete() {
          (this.connectable._isComplete = !0), this._unsubscribe(), super._complete();
        }
        _unsubscribe() {
          const e = this.connectable;
          if (e) {
            this.connectable = null;
            const t = e._connection;
            (e._refCount = 0), (e._subject = null), (e._connection = null), t && t.unsubscribe();
          }
        }
      }
      function c(e, t) {
        return function(n) {
          let r;
          if (
            ((r =
              'function' == typeof e
                ? e
                : function() {
                    return e;
                  }),
            'function' == typeof t)
          )
            return n.lift(new h(r, t));
          const s = Object.create(n, l);
          return (s.source = n), (s.subjectFactory = r), s;
        };
      }
      n.d(t, 'a', function() {
        return c;
      });
      class h {
        constructor(e, t) {
          (this.subjectFactory = e), (this.selector = t);
        }
        call(e, t) {
          const { selector: n } = this,
            r = this.subjectFactory(),
            s = n(r).subscribe(e);
          return s.add(t.subscribe(r)), s;
        }
      }
    },
    pKmL: function(e, t, n) {
      'use strict';
      n.d(t, 'a', function() {
        return r;
      });
      class r {
        constructor(e) {
          if (e) throw new Error(e + ' has already been loaded. Import Core module in the AppModule only.');
        }
      }
    },
    pLZG: function(e, t, n) {
      'use strict';
      n.d(t, 'a', function() {
        return s;
      });
      var r = n('7o/Q');
      function s(e, t) {
        return function(n) {
          return n.lift(new i(e, t));
        };
      }
      class i {
        constructor(e, t) {
          (this.predicate = e), (this.thisArg = t);
        }
        call(e, t) {
          return t.subscribe(new o(e, this.predicate, this.thisArg));
        }
      }
      class o extends r.a {
        constructor(e, t, n) {
          super(e), (this.predicate = t), (this.thisArg = n), (this.count = 0);
        }
        _next(e) {
          let t;
          try {
            t = this.predicate.call(this.thisArg, e, this.count++);
          } catch (n) {
            return void this.destination.error(n);
          }
          t && this.destination.next(e);
        }
      }
    },
    pMnS: function(e, t, n) {
      'use strict';
      n.d(t, 'a', function() {
        return l;
      });
      var r = n('8Y7J'),
        s = n('iInd'),
        i = r.ob({ encapsulation: 2, styles: [], data: {} });
      function o(e) {
        return r.Ib(
          0,
          [
            (e()(), r.qb(0, 16777216, null, null, 1, 'router-outlet', [], null, null, null, null, null)),
            r.pb(1, 212992, null, 0, s.q, [s.b, r.N, r.j, [8, null], r.h], null, null)
          ],
          function(e, t) {
            e(t, 1, 0);
          },
          null
        );
      }
      function a(e) {
        return r.Ib(
          0,
          [
            (e()(), r.qb(0, 0, null, null, 1, 'ng-component', [], null, null, null, o, i)),
            r.pb(1, 49152, null, 0, s.E, [], null, null)
          ],
          null,
          null
        );
      }
      var l = r.mb('ng-component', s.E, a, {}, {}, []);
    },
    quSY: function(e, t, n) {
      'use strict';
      var r = n('DH7j'),
        s = n('XoHu'),
        i = n('n6bG');
      const o = (() => {
        function e(e) {
          return (
            Error.call(this),
            (this.message = e
              ? `${e.length} errors occurred during unsubscription:\n${e
                  .map((e, t) => `${t + 1}) ${e.toString()}`)
                  .join('\n  ')}`
              : ''),
            (this.name = 'UnsubscriptionError'),
            (this.errors = e),
            this
          );
        }
        return (e.prototype = Object.create(Error.prototype)), e;
      })();
      n.d(t, 'a', function() {
        return a;
      });
      let a = (() => {
        class e {
          constructor(e) {
            (this.closed = !1),
              (this._parentOrParents = null),
              (this._subscriptions = null),
              e && (this._unsubscribe = e);
          }
          unsubscribe() {
            let t;
            if (this.closed) return;
            let { _parentOrParents: n, _unsubscribe: a, _subscriptions: u } = this;
            if (((this.closed = !0), (this._parentOrParents = null), (this._subscriptions = null), n instanceof e))
              n.remove(this);
            else if (null !== n) for (let e = 0; e < n.length; ++e) n[e].remove(this);
            if (Object(i.a)(a))
              try {
                a.call(this);
              } catch (c) {
                t = c instanceof o ? l(c.errors) : [c];
              }
            if (Object(r.a)(u)) {
              let e = -1,
                n = u.length;
              for (; ++e < n; ) {
                const n = u[e];
                if (Object(s.a)(n))
                  try {
                    n.unsubscribe();
                  } catch (c) {
                    (t = t || []), c instanceof o ? (t = t.concat(l(c.errors))) : t.push(c);
                  }
              }
            }
            if (t) throw new o(t);
          }
          add(t) {
            let n = t;
            if (!t) return e.EMPTY;
            switch (typeof t) {
              case 'function':
                n = new e(t);
              case 'object':
                if (n === this || n.closed || 'function' != typeof n.unsubscribe) return n;
                if (this.closed) return n.unsubscribe(), n;
                if (!(n instanceof e)) {
                  const t = n;
                  (n = new e()), (n._subscriptions = [t]);
                }
                break;
              default:
                throw new Error('unrecognized teardown ' + t + ' added to Subscription.');
            }
            let { _parentOrParents: r } = n;
            if (null === r) n._parentOrParents = this;
            else if (r instanceof e) {
              if (r === this) return n;
              n._parentOrParents = [r, this];
            } else {
              if (-1 !== r.indexOf(this)) return n;
              r.push(this);
            }
            const s = this._subscriptions;
            return null === s ? (this._subscriptions = [n]) : s.push(n), n;
          }
          remove(e) {
            const t = this._subscriptions;
            if (t) {
              const n = t.indexOf(e);
              -1 !== n && t.splice(n, 1);
            }
          }
        }
        var t;
        return (e.EMPTY = (((t = new e()).closed = !0), t)), e;
      })();
      function l(e) {
        return e.reduce((e, t) => e.concat(t instanceof o ? t.errors : t), []);
      }
    },
    'rB/T': function(e, t, n) {
      'use strict';
      function r(e) {
        for (var n in e) t.hasOwnProperty(n) || (t[n] = e[n]);
      }
      Object.defineProperty(t, '__esModule', { value: !0 }), r(n('LbVS')), r(n('vauT')), r(n('PsNa'));
    },
    vauT: function(e, t, n) {
      'use strict';
      function r() {
        var e = document.querySelectorAll('input, textarea, select');
        return Array.prototype.slice.call(e).map(function(e) {
          var t = e.tagName.toLowerCase(),
            n = e.type,
            r = e.id && 'string' == typeof e.id ? e.id : null,
            s = e.name && 'string' == typeof e.name ? e.name : null,
            i = e.value && 'string' == typeof e.value ? e.value : null,
            o = e.childNodes,
            a = Boolean(e.selected),
            l = { tag: t, type: null, id: r, name: s, value: '', checked: !1, options: [] };
          if ('input' === t || 'textarea' === t) {
            if (((l.type = n), 'input' !== t)) return (l.value = i), l;
            switch (n) {
              case 'checkbox':
              case 'radio':
                return (l.checked = a), (l.value = i), l;
              case 'image':
              case 'button':
              case 'submit':
              case 'reset':
              default:
                return l;
            }
          } else if ('select' === t) {
            var u = Array.prototype.slice.call(o).map(function(e, t) {
              return { value: e.value, selected: Boolean(e.selected) };
            });
            return (l.options = u), l;
          }
          return l;
        });
      }
      function s(e) {
        var t = document.querySelectorAll('input, textarea');
        e.forEach(function(e, n) {
          if ('input' === e.tag || 'textarea' === e.tag)
            if ('input' !== e.tag || ('checkbox' !== e.type && 'radio' !== e.type))
              ('input' !== e.tagName.toLowerCase() ||
                ('image' !== e.type && 'button' !== e.type && 'submit' !== e.type && 'reset' !== e.type)) &&
                (null === e.id && null === e.name
                  ? !e.value.length ||
                    !t[n] ||
                    t[n].tagName.toLowerCase() !== e.tag ||
                    ('textarea' !== e.tag && t[n].getAttribute('type') !== e.type) ||
                    ('string' == typeof t[n].id && t[n].id.length) ||
                    ('string' == typeof t[n].getAttribute('name') && t[n].getAttribute('name').length) ||
                    ((t[n].value = e.value), t[n].dispatchEvent(new CustomEvent('input', { detail: t[n].value })))
                  : ((r =
                      'input' +
                      (null !== e.id ? '#' + e.id : '') +
                      ('input' === e.tag ? '[type="' + e.type + '"]' : '') +
                      (null !== e.name ? '[name="' + e.name + '"]' : '')),
                    (s = document.body.querySelector(r)) &&
                      e.value.length &&
                      ((s.value = e.value), s.dispatchEvent(new CustomEvent('input', { detail: s.value })))));
            else {
              var r =
                'input' +
                (null !== e.id ? '#' + e.id : '') +
                '[type="' +
                e.type +
                '"]' +
                (null !== e.name ? '[name="' + e.name + '"]' : '') +
                '[value="' +
                e.value +
                '"]';
              (s = document.body.querySelector(r)) &&
                Boolean(e.checked) &&
                ((s.checked = 'checked'), s.dispatchEvent(new CustomEvent('input', { detail: s.checked })));
            }
          else if ('select' === e.tag) {
            var s,
              i = null;
            null === e.id && null === e.name
              ? !t[n] ||
                t[n].tagName.toLowerCase() !== e.tag ||
                ('string' == typeof t[n].id && t[n].id.length) ||
                ('string' == typeof t[n].getAttribute('name') && t[n].getAttribute('name').length) ||
                (i = t[n])
              : ((r =
                  'select' + (null !== e.id ? '#' + e.id : '') + (null !== e.name ? '[name="' + e.name + '"]' : '')),
                (s = document.body.querySelector(r)) && (i = s)),
              i &&
                e.options.forEach(function(e, t) {
                  var n = i.querySelector('option[value="' + e.value + '"]');
                  n ||
                    !i.childNodes[t] ||
                    ('string' == typeof i.childNodes[t].value && i.childNodes[t].value.length) ||
                    (n = i.childNodes[t]),
                    n &&
                      e.selected &&
                      ((n.selected = 'selected'), n.dispatchEvent(new CustomEvent('input', { detail: n.selected })));
                });
          }
        });
      }
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.__getInputValues = r),
        (t.__setInputValues = s),
        (t.__createInputTransfer = function() {
          var e = r();
          return function() {
            return s(e);
          };
        });
    },
    vkgz: function(e, t, n) {
      'use strict';
      n.d(t, 'a', function() {
        return o;
      });
      var r = n('7o/Q'),
        s = n('KqfI'),
        i = n('n6bG');
      function o(e, t, n) {
        return function(r) {
          return r.lift(new a(e, t, n));
        };
      }
      class a {
        constructor(e, t, n) {
          (this.nextOrObserver = e), (this.error = t), (this.complete = n);
        }
        call(e, t) {
          return t.subscribe(new l(e, this.nextOrObserver, this.error, this.complete));
        }
      }
      class l extends r.a {
        constructor(e, t, n, r) {
          super(e),
            (this._tapNext = s.a),
            (this._tapError = s.a),
            (this._tapComplete = s.a),
            (this._tapError = n || s.a),
            (this._tapComplete = r || s.a),
            Object(i.a)(t)
              ? ((this._context = this), (this._tapNext = t))
              : t &&
                ((this._context = t),
                (this._tapNext = t.next || s.a),
                (this._tapError = t.error || s.a),
                (this._tapComplete = t.complete || s.a));
        }
        _next(e) {
          try {
            this._tapNext.call(this._context, e);
          } catch (t) {
            return void this.destination.error(t);
          }
          this.destination.next(e);
        }
        _error(e) {
          try {
            this._tapError.call(this._context, e);
          } catch (e) {
            return void this.destination.error(e);
          }
          this.destination.error(e);
        }
        _complete() {
          try {
            this._tapComplete.call(this._context);
          } catch (e) {
            return void this.destination.error(e);
          }
          return this.destination.complete();
        }
      }
    },
    w1tV: function(e, t, n) {
      'use strict';
      n.d(t, 'a', function() {
        return a;
      });
      var r = n('oB13'),
        s = n('x+ZX'),
        i = n('XNiG');
      function o() {
        return new i.a();
      }
      function a() {
        return e => Object(s.a)()(Object(r.a)(o)(e));
      }
    },
    'x+ZX': function(e, t, n) {
      'use strict';
      n.d(t, 'a', function() {
        return s;
      });
      var r = n('7o/Q');
      function s() {
        return function(e) {
          return e.lift(new i(e));
        };
      }
      class i {
        constructor(e) {
          this.connectable = e;
        }
        call(e, t) {
          const { connectable: n } = this;
          n._refCount++;
          const r = new o(e, n),
            s = t.subscribe(r);
          return r.closed || (r.connection = n.connect()), s;
        }
      }
      class o extends r.a {
        constructor(e, t) {
          super(e), (this.connectable = t);
        }
        _unsubscribe() {
          const { connectable: e } = this;
          if (!e) return void (this.connection = null);
          this.connectable = null;
          const t = e._refCount;
          if (t <= 0) return void (this.connection = null);
          if (((e._refCount = t - 1), t > 1)) return void (this.connection = null);
          const { connection: n } = this,
            r = e._connection;
          (this.connection = null), !r || (n && r !== n) || r.unsubscribe();
        }
      }
    },
    xbPD: function(e, t, n) {
      'use strict';
      n.d(t, 'a', function() {
        return s;
      });
      var r = n('7o/Q');
      function s(e = null) {
        return t => t.lift(new i(e));
      }
      class i {
        constructor(e) {
          this.defaultValue = e;
        }
        call(e, t) {
          return t.subscribe(new o(e, this.defaultValue));
        }
      }
      class o extends r.a {
        constructor(e, t) {
          super(e), (this.defaultValue = t), (this.isEmpty = !0);
        }
        _next(e) {
          (this.isEmpty = !1), this.destination.next(e);
        }
        _complete() {
          this.isEmpty && this.destination.next(this.defaultValue), this.destination.complete();
        }
      }
    },
    yCtX: function(e, t, n) {
      'use strict';
      n.d(t, 'a', function() {
        return o;
      });
      var r = n('HDdC'),
        s = n('ngJS'),
        i = n('jZKg');
      function o(e, t) {
        return t ? Object(i.a)(e, t) : new r.a(Object(s.a)(e));
      }
    },
    'z+Ro': function(e, t, n) {
      'use strict';
      function r(e) {
        return e && 'function' == typeof e.schedule;
      }
      n.d(t, 'a', function() {
        return r;
      });
    },
    zUnb: function(e, t, n) {
      'use strict';
      n.r(t),
        function(e) {
          n.d(t, '\u02750', function() {
            return u;
          });
          var r = n('8Y7J'),
            s = n('AytR'),
            i = n('0QMH'),
            o = n('Ss9G'),
            a = n('cUpR');
          s.a.production && Object(r.R)();
          const l = () => a.i().bootstrapModuleFactory(o.a),
            u = l;
          s.a.hmr ? Object(i.a)(e, l) : l().catch(e => console.error(e));
        }.call(this, n('3UD+')(e));
    },
    zn8P: function(e, t, n) {
      var r = { './about/about.module.ngfactory': ['OlGY', 4] };
      function s(e) {
        if (!n.o(r, e))
          return Promise.resolve().then(function() {
            var t = new Error("Cannot find module '" + e + "'");
            throw ((t.code = 'MODULE_NOT_FOUND'), t);
          });
        var t = r[e],
          s = t[0];
        return n.e(t[1]).then(function() {
          return n(s);
        });
      }
      (s.keys = function() {
        return Object.keys(r);
      }),
        (s.id = 'zn8P'),
        (e.exports = s);
    },
    'znf/': function(e, t, n) {
      'use strict';
      n.d(t, 'a', function() {
        return s;
      });
      var r = n('iInd');
      class s extends r.k {
        shouldDetach(e) {
          return !1;
        }
        store(e, t) {}
        shouldAttach(e) {
          return !1;
        }
        retrieve(e) {
          return null;
        }
        shouldReuseRoute(e, t) {
          return e.routeConfig === t.routeConfig || e.data.reuse;
        }
      }
    }
  },
  [[0, 0]]
]);
