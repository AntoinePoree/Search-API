(window.webpackJsonp = window.webpackJsonp || []).push([
  [1],
  {
    0: function(t, e, n) {
      t.exports = n('zUnb');
    },
    '0QMH': function(t, e, n) {
      'use strict';
      n.d(e, 'a', function() {
        return i;
      });
      var r = n('fXoL'),
        s = n('rB/T');
      function i(t, e) {
        let n;
        t.hot.accept(),
          e()
            .then(t => (n = t))
            .catch(t => console.error(t)),
          t.hot.dispose(() => {
            const t = n.injector.get(r.g).components.map(t => t.location.nativeElement),
              e = Object(s.createNewHosts)(t);
            n.destroy(), e();
          });
      }
    },
    '2QA8': function(t, e, n) {
      'use strict';
      n.d(e, 'a', function() {
        return r;
      });
      const r = (() => ('function' == typeof Symbol ? Symbol('rxSubscriber') : '@@rxSubscriber_' + Math.random()))();
    },
    '2fFW': function(t, e, n) {
      'use strict';
      n.d(e, 'a', function() {
        return s;
      });
      let r = !1;
      const s = {
        Promise: void 0,
        set useDeprecatedSynchronousErrorHandling(t) {
          if (t) {
            const t = new Error();
            console.warn(
              'DEPRECATED! RxJS was set to use deprecated synchronous error handling behavior by code at: \n' + t.stack
            );
          } else r && console.log('RxJS: Back to a better error behavior. Thank you. <3');
          r = t;
        },
        get useDeprecatedSynchronousErrorHandling() {
          return r;
        }
      };
    },
    '3UD+': function(t, e) {
      t.exports = function(t) {
        if (!t.webpackPolyfill) {
          var e = Object.create(t);
          e.children || (e.children = []),
            Object.defineProperty(e, 'loaded', {
              enumerable: !0,
              get: function() {
                return e.l;
              }
            }),
            Object.defineProperty(e, 'id', {
              enumerable: !0,
              get: function() {
                return e.i;
              }
            }),
            Object.defineProperty(e, 'exports', { enumerable: !0 }),
            (e.webpackPolyfill = 1);
        }
        return e;
      };
    },
    '4odN': function(t) {
      t.exports = JSON.parse(
        '{"APP_NAME":"Search API","About":"A propos","Hello world !":"Bonjour le monde !","Home":"Accueil","Version":"Version"}'
      );
    },
    '5+tZ': function(t, e, n) {
      'use strict';
      n.d(e, 'a', function() {
        return l;
      });
      var r = n('ZUHj'),
        s = n('l7GE'),
        i = n('51Dv'),
        o = n('lJxs'),
        a = n('Cfvw');
      function l(t, e, n = Number.POSITIVE_INFINITY) {
        return 'function' == typeof e
          ? r => r.pipe(l((n, r) => Object(a.a)(t(n, r)).pipe(Object(o.a)((t, s) => e(n, t, r, s))), n))
          : ('number' == typeof e && (n = e), e => e.lift(new c(t, n)));
      }
      class c {
        constructor(t, e = Number.POSITIVE_INFINITY) {
          (this.project = t), (this.concurrent = e);
        }
        call(t, e) {
          return e.subscribe(new u(t, this.project, this.concurrent));
        }
      }
      class u extends s.a {
        constructor(t, e, n = Number.POSITIVE_INFINITY) {
          super(t),
            (this.project = e),
            (this.concurrent = n),
            (this.hasCompleted = !1),
            (this.buffer = []),
            (this.active = 0),
            (this.index = 0);
        }
        _next(t) {
          this.active < this.concurrent ? this._tryNext(t) : this.buffer.push(t);
        }
        _tryNext(t) {
          let e;
          const n = this.index++;
          try {
            e = this.project(t, n);
          } catch (r) {
            return void this.destination.error(r);
          }
          this.active++, this._innerSub(e, t, n);
        }
        _innerSub(t, e, n) {
          const s = new i.a(this, e, n),
            o = this.destination;
          o.add(s);
          const a = Object(r.a)(this, t, void 0, void 0, s);
          a !== s && o.add(a);
        }
        _complete() {
          (this.hasCompleted = !0),
            0 === this.active && 0 === this.buffer.length && this.destination.complete(),
            this.unsubscribe();
        }
        notifyNext(t, e, n, r, s) {
          this.destination.next(e);
        }
        notifyComplete(t) {
          const e = this.buffer;
          this.remove(t),
            this.active--,
            e.length > 0
              ? this._next(e.shift())
              : 0 === this.active && this.hasCompleted && this.destination.complete();
        }
      }
    },
    '51Dv': function(t, e, n) {
      'use strict';
      n.d(e, 'a', function() {
        return s;
      });
      var r = n('7o/Q');
      class s extends r.a {
        constructor(t, e, n) {
          super(), (this.parent = t), (this.outerValue = e), (this.outerIndex = n), (this.index = 0);
        }
        _next(t) {
          this.parent.notifyNext(this.outerValue, t, this.outerIndex, this.index++, this);
        }
        _error(t) {
          this.parent.notifyError(t, this), this.unsubscribe();
        }
        _complete() {
          this.parent.notifyComplete(this), this.unsubscribe();
        }
      }
    },
    '7o/Q': function(t, e, n) {
      'use strict';
      n.d(e, 'a', function() {
        return c;
      });
      var r = n('n6bG'),
        s = n('gRHU'),
        i = n('quSY'),
        o = n('2QA8'),
        a = n('2fFW'),
        l = n('NJ4a');
      class c extends i.a {
        constructor(t, e, n) {
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
              if (!t) {
                this.destination = s.a;
                break;
              }
              if ('object' == typeof t) {
                t instanceof c
                  ? ((this.syncErrorThrowable = t.syncErrorThrowable), (this.destination = t), t.add(this))
                  : ((this.syncErrorThrowable = !0), (this.destination = new u(this, t)));
                break;
              }
            default:
              (this.syncErrorThrowable = !0), (this.destination = new u(this, t, e, n));
          }
        }
        [o.a]() {
          return this;
        }
        static create(t, e, n) {
          const r = new c(t, e, n);
          return (r.syncErrorThrowable = !1), r;
        }
        next(t) {
          this.isStopped || this._next(t);
        }
        error(t) {
          this.isStopped || ((this.isStopped = !0), this._error(t));
        }
        complete() {
          this.isStopped || ((this.isStopped = !0), this._complete());
        }
        unsubscribe() {
          this.closed || ((this.isStopped = !0), super.unsubscribe());
        }
        _next(t) {
          this.destination.next(t);
        }
        _error(t) {
          this.destination.error(t), this.unsubscribe();
        }
        _complete() {
          this.destination.complete(), this.unsubscribe();
        }
        _unsubscribeAndRecycle() {
          const { _parentOrParents: t } = this;
          return (
            (this._parentOrParents = null),
            this.unsubscribe(),
            (this.closed = !1),
            (this.isStopped = !1),
            (this._parentOrParents = t),
            this
          );
        }
      }
      class u extends c {
        constructor(t, e, n, i) {
          let o;
          super(), (this._parentSubscriber = t);
          let a = this;
          Object(r.a)(e)
            ? (o = e)
            : e &&
              ((o = e.next),
              (n = e.error),
              (i = e.complete),
              e !== s.a &&
                ((a = Object.create(e)),
                Object(r.a)(a.unsubscribe) && this.add(a.unsubscribe.bind(a)),
                (a.unsubscribe = this.unsubscribe.bind(this)))),
            (this._context = a),
            (this._next = o),
            (this._error = n),
            (this._complete = i);
        }
        next(t) {
          if (!this.isStopped && this._next) {
            const { _parentSubscriber: e } = this;
            a.a.useDeprecatedSynchronousErrorHandling && e.syncErrorThrowable
              ? this.__tryOrSetError(e, this._next, t) && this.unsubscribe()
              : this.__tryOrUnsub(this._next, t);
          }
        }
        error(t) {
          if (!this.isStopped) {
            const { _parentSubscriber: e } = this,
              { useDeprecatedSynchronousErrorHandling: n } = a.a;
            if (this._error)
              n && e.syncErrorThrowable
                ? (this.__tryOrSetError(e, this._error, t), this.unsubscribe())
                : (this.__tryOrUnsub(this._error, t), this.unsubscribe());
            else if (e.syncErrorThrowable)
              n ? ((e.syncErrorValue = t), (e.syncErrorThrown = !0)) : Object(l.a)(t), this.unsubscribe();
            else {
              if ((this.unsubscribe(), n)) throw t;
              Object(l.a)(t);
            }
          }
        }
        complete() {
          if (!this.isStopped) {
            const { _parentSubscriber: t } = this;
            if (this._complete) {
              const e = () => this._complete.call(this._context);
              a.a.useDeprecatedSynchronousErrorHandling && t.syncErrorThrowable
                ? (this.__tryOrSetError(t, e), this.unsubscribe())
                : (this.__tryOrUnsub(e), this.unsubscribe());
            } else this.unsubscribe();
          }
        }
        __tryOrUnsub(t, e) {
          try {
            t.call(this._context, e);
          } catch (n) {
            if ((this.unsubscribe(), a.a.useDeprecatedSynchronousErrorHandling)) throw n;
            Object(l.a)(n);
          }
        }
        __tryOrSetError(t, e, n) {
          if (!a.a.useDeprecatedSynchronousErrorHandling) throw new Error('bad call');
          try {
            e.call(this._context, n);
          } catch (r) {
            return a.a.useDeprecatedSynchronousErrorHandling
              ? ((t.syncErrorValue = r), (t.syncErrorThrown = !0), !0)
              : (Object(l.a)(r), !0);
          }
          return !1;
        }
        _unsubscribe() {
          const { _parentSubscriber: t } = this;
          (this._context = null), (this._parentSubscriber = null), t.unsubscribe();
        }
      }
    },
    '9ppp': function(t, e, n) {
      'use strict';
      n.d(e, 'a', function() {
        return r;
      });
      const r = (() => {
        function t() {
          return (
            Error.call(this), (this.message = 'object unsubscribed'), (this.name = 'ObjectUnsubscribedError'), this
          );
        }
        return (t.prototype = Object.create(Error.prototype)), t;
      })();
    },
    'A/Ql': function(t) {
      t.exports = JSON.parse(
        '{"APP_NAME":"Search API","About":"About","Hello world !":"Hello world !","Home":"Home","Version":"Version"}'
      );
    },
    AytR: function(t, e, n) {
      'use strict';
      n.d(e, 'a', function() {
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
    Cfvw: function(t, e, n) {
      'use strict';
      n.d(e, 'a', function() {
        return h;
      });
      var r = n('HDdC'),
        s = n('SeVD'),
        i = n('quSY'),
        o = n('kJWO'),
        a = n('jZKg'),
        l = n('Lhse'),
        c = n('c2HN'),
        u = n('I55L');
      function h(t, e) {
        return e
          ? (function(t, e) {
              if (null != t) {
                if (
                  (function(t) {
                    return t && 'function' == typeof t[o.a];
                  })(t)
                )
                  return (function(t, e) {
                    return new r.a(n => {
                      const r = new i.a();
                      return (
                        r.add(
                          e.schedule(() => {
                            const s = t[o.a]();
                            r.add(
                              s.subscribe({
                                next(t) {
                                  r.add(e.schedule(() => n.next(t)));
                                },
                                error(t) {
                                  r.add(e.schedule(() => n.error(t)));
                                },
                                complete() {
                                  r.add(e.schedule(() => n.complete()));
                                }
                              })
                            );
                          })
                        ),
                        r
                      );
                    });
                  })(t, e);
                if (Object(c.a)(t))
                  return (function(t, e) {
                    return new r.a(n => {
                      const r = new i.a();
                      return (
                        r.add(
                          e.schedule(() =>
                            t.then(
                              t => {
                                r.add(
                                  e.schedule(() => {
                                    n.next(t), r.add(e.schedule(() => n.complete()));
                                  })
                                );
                              },
                              t => {
                                r.add(e.schedule(() => n.error(t)));
                              }
                            )
                          )
                        ),
                        r
                      );
                    });
                  })(t, e);
                if (Object(u.a)(t)) return Object(a.a)(t, e);
                if (
                  (function(t) {
                    return t && 'function' == typeof t[l.a];
                  })(t) ||
                  'string' == typeof t
                )
                  return (function(t, e) {
                    if (!t) throw new Error('Iterable cannot be null');
                    return new r.a(n => {
                      const r = new i.a();
                      let s;
                      return (
                        r.add(() => {
                          s && 'function' == typeof s.return && s.return();
                        }),
                        r.add(
                          e.schedule(() => {
                            (s = t[l.a]()),
                              r.add(
                                e.schedule(function() {
                                  if (n.closed) return;
                                  let t, e;
                                  try {
                                    const n = s.next();
                                    (t = n.value), (e = n.done);
                                  } catch (r) {
                                    return void n.error(r);
                                  }
                                  e ? n.complete() : (n.next(t), this.schedule());
                                })
                              );
                          })
                        ),
                        r
                      );
                    });
                  })(t, e);
              }
              throw new TypeError(((null !== t && typeof t) || t) + ' is not observable');
            })(t, e)
          : t instanceof r.a
          ? t
          : new r.a(Object(s.a)(t));
      }
    },
    DH7j: function(t, e, n) {
      'use strict';
      n.d(e, 'a', function() {
        return r;
      });
      const r = (() => Array.isArray || (t => t && 'number' == typeof t.length))();
    },
    HDdC: function(t, e, n) {
      'use strict';
      n.d(e, 'a', function() {
        return c;
      });
      var r = n('7o/Q'),
        s = n('2QA8'),
        i = n('gRHU'),
        o = n('kJWO'),
        a = n('mCNh'),
        l = n('2fFW');
      let c = (() => {
        class t {
          constructor(t) {
            (this._isScalar = !1), t && (this._subscribe = t);
          }
          lift(e) {
            const n = new t();
            return (n.source = this), (n.operator = e), n;
          }
          subscribe(t, e, n) {
            const { operator: o } = this,
              a = (function(t, e, n) {
                if (t) {
                  if (t instanceof r.a) return t;
                  if (t[s.a]) return t[s.a]();
                }
                return t || e || n ? new r.a(t, e, n) : new r.a(i.a);
              })(t, e, n);
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
          _trySubscribe(t) {
            try {
              return this._subscribe(t);
            } catch (e) {
              l.a.useDeprecatedSynchronousErrorHandling && ((t.syncErrorThrown = !0), (t.syncErrorValue = e)),
                (function(t) {
                  for (; t; ) {
                    const { closed: e, destination: n, isStopped: s } = t;
                    if (e || s) return !1;
                    t = n && n instanceof r.a ? n : null;
                  }
                  return !0;
                })(t)
                  ? t.error(e)
                  : console.warn(e);
            }
          }
          forEach(t, e) {
            return new (e = u(e))((e, n) => {
              let r;
              r = this.subscribe(
                e => {
                  try {
                    t(e);
                  } catch (s) {
                    n(s), r && r.unsubscribe();
                  }
                },
                n,
                e
              );
            });
          }
          _subscribe(t) {
            const { source: e } = this;
            return e && e.subscribe(t);
          }
          [o.a]() {
            return this;
          }
          pipe(...t) {
            return 0 === t.length ? this : Object(a.b)(t)(this);
          }
          toPromise(t) {
            return new (t = u(t))((t, e) => {
              let n;
              this.subscribe(
                t => (n = t),
                t => e(t),
                () => t(n)
              );
            });
          }
        }
        return (t.create = e => new t(e)), t;
      })();
      function u(t) {
        if ((t || (t = l.a.Promise || Promise), !t)) throw new Error('no Promise impl found');
        return t;
      }
    },
    I55L: function(t, e, n) {
      'use strict';
      n.d(e, 'a', function() {
        return r;
      });
      const r = t => t && 'number' == typeof t.length && 'function' != typeof t;
    },
    LbVS: function(t, e, n) {
      'use strict';
      function r(t) {
        return t;
      }
      function s() {
        var t = document.querySelectorAll('input');
        return Array.prototype.slice.call(t).map(function(t) {
          return t.value;
        });
      }
      function i(t) {
        var e = document.querySelectorAll('input');
        t &&
          e.length === t.length &&
          (t.forEach(function(t, n) {
            var r = e[n];
            (r.value = t), r.dispatchEvent(new CustomEvent('input', { detail: r.value }));
          }),
          (t.length = 0));
      }
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.bootloader = function(t, e, n) {
          'object' == typeof t && ((e = t.before), (n = t.after), (t = t.main)), (e = e || r), (n = n || r);
          var s = document.readyState;
          switch (s) {
            case 'loading':
              document.addEventListener('DOMContentLoaded', function r() {
                document.removeEventListener('DOMContentLoaded', r), n(t(e(s)));
              });
              break;
            case 'interactive':
            case 'complete':
            default:
              n(t(e(s)));
          }
        }),
        (e.createNewHosts = function(t) {
          var e = Array.prototype.map.call(t, function(t) {
            var e = document.createElement(t.tagName),
              n = t.parentNode,
              r = e.style.display;
            return (
              (e.style.display = 'none'),
              n.insertBefore(e, t),
              function() {
                e.style.display = r;
                try {
                  n.removeChild(t);
                } catch (s) {}
              }
            );
          });
          return function() {
            e.forEach(function(t) {
              return t();
            });
          };
        }),
        (e.removeNgStyles = function() {
          var t = document.head,
            e = t.querySelectorAll('style');
          Array.prototype.slice
            .call(e)
            .filter(function(t) {
              return -1 !== t.innerText.indexOf('_ng');
            })
            .map(function(e) {
              return t.removeChild(e);
            });
        }),
        (e.getInputValues = s),
        (e.setInputValues = i),
        (e.createInputTransfer = function() {
          var t = s();
          return function() {
            return i(t);
          };
        });
    },
    Lhse: function(t, e, n) {
      'use strict';
      function r() {
        return 'function' == typeof Symbol && Symbol.iterator ? Symbol.iterator : '@@iterator';
      }
      n.d(e, 'a', function() {
        return s;
      });
      const s = r();
    },
    NJ4a: function(t, e, n) {
      'use strict';
      function r(t) {
        setTimeout(() => {
          throw t;
        }, 0);
      }
      n.d(e, 'a', function() {
        return r;
      });
    },
    PsNa: function(t, e, n) {
      'use strict';
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.MODULE_CONFIG = {
          OnInit: 'hmrOnInit',
          OnStatus: 'hmrOnStatus',
          OnCheck: 'hmrOnCheck',
          OnDecline: 'hmrOnDecline',
          OnDestroy: 'hmrOnDestroy',
          AfterDestroy: 'hmrAfterDestroy'
        }),
        (e.hmrModule = function(t, n, r) {
          return (
            void 0 === r && (r = e.MODULE_CONFIG),
            n.hot &&
              (n.hot.accept(),
              t.instance[e.MODULE_CONFIG.OnInit] && n.hot.data && t.instance[e.MODULE_CONFIG.OnInit](n.hot.data),
              t.instance[e.MODULE_CONFIG.OnStatus] &&
                n.hot.apply(function(n) {
                  t.instance[e.MODULE_CONFIG.OnStatus](n);
                }),
              t.instance[e.MODULE_CONFIG.OnCheck] &&
                n.hot.check(function(n, r) {
                  t.instance[e.MODULE_CONFIG.OnCheck](n, r);
                }),
              t.instance[e.MODULE_CONFIG.OnDecline] &&
                n.hot.decline(function(n) {
                  t.instance[e.MODULE_CONFIG.OnDecline](n);
                }),
              n.hot.dispose(function(n) {
                t.instance[e.MODULE_CONFIG.OnDestroy] && t.instance[e.MODULE_CONFIG.OnDestroy](n),
                  t.destroy(),
                  t.instance[e.MODULE_CONFIG.AfterDestroy] && t.instance[e.MODULE_CONFIG.AfterDestroy](n);
              })),
            t
          );
        });
    },
    SeVD: function(t, e, n) {
      'use strict';
      n.d(e, 'a', function() {
        return u;
      });
      var r = n('ngJS'),
        s = n('NJ4a'),
        i = n('Lhse'),
        o = n('kJWO'),
        a = n('I55L'),
        l = n('c2HN'),
        c = n('XoHu');
      const u = t => {
        if (t && 'function' == typeof t[o.a])
          return (
            (u = t),
            t => {
              const e = u[o.a]();
              if ('function' != typeof e.subscribe)
                throw new TypeError('Provided object does not correctly implement Symbol.observable');
              return e.subscribe(t);
            }
          );
        if (Object(a.a)(t)) return Object(r.a)(t);
        if (Object(l.a)(t))
          return (
            (n = t),
            t => (
              n
                .then(
                  e => {
                    t.closed || (t.next(e), t.complete());
                  },
                  e => t.error(e)
                )
                .then(null, s.a),
              t
            )
          );
        if (t && 'function' == typeof t[i.a])
          return (
            (e = t),
            t => {
              const n = e[i.a]();
              for (;;) {
                const e = n.next();
                if (e.done) {
                  t.complete();
                  break;
                }
                if ((t.next(e.value), t.closed)) break;
              }
              return (
                'function' == typeof n.return &&
                  t.add(() => {
                    n.return && n.return();
                  }),
                t
              );
            }
          );
        {
          const e = Object(c.a)(t) ? 'an invalid object' : `'${t}'`;
          throw new TypeError(
            `You provided ${e} where a stream was expected. You can provide an Observable, Promise, Array, or Iterable.`
          );
        }
        var e, n, u;
      };
    },
    SpAZ: function(t, e, n) {
      'use strict';
      function r(t) {
        return t;
      }
      n.d(e, 'a', function() {
        return r;
      });
    },
    VRyK: function(t, e, n) {
      'use strict';
      n.d(e, 'a', function() {
        return a;
      });
      var r = n('HDdC'),
        s = n('z+Ro'),
        i = n('bHdf'),
        o = n('yCtX');
      function a(...t) {
        let e = Number.POSITIVE_INFINITY,
          n = null,
          a = t[t.length - 1];
        return (
          Object(s.a)(a)
            ? ((n = t.pop()), t.length > 1 && 'number' == typeof t[t.length - 1] && (e = t.pop()))
            : 'number' == typeof a && (e = t.pop()),
          null === n && 1 === t.length && t[0] instanceof r.a ? t[0] : Object(i.a)(e)(Object(o.a)(t, n))
        );
      }
    },
    XNiG: function(t, e, n) {
      'use strict';
      n.d(e, 'b', function() {
        return c;
      }),
        n.d(e, 'a', function() {
          return u;
        });
      var r = n('HDdC'),
        s = n('7o/Q'),
        i = n('quSY'),
        o = n('9ppp');
      class a extends i.a {
        constructor(t, e) {
          super(), (this.subject = t), (this.subscriber = e), (this.closed = !1);
        }
        unsubscribe() {
          if (this.closed) return;
          this.closed = !0;
          const t = this.subject,
            e = t.observers;
          if (((this.subject = null), !e || 0 === e.length || t.isStopped || t.closed)) return;
          const n = e.indexOf(this.subscriber);
          -1 !== n && e.splice(n, 1);
        }
      }
      var l = n('2QA8');
      class c extends s.a {
        constructor(t) {
          super(t), (this.destination = t);
        }
      }
      let u = (() => {
        class t extends r.a {
          constructor() {
            super(),
              (this.observers = []),
              (this.closed = !1),
              (this.isStopped = !1),
              (this.hasError = !1),
              (this.thrownError = null);
          }
          [l.a]() {
            return new c(this);
          }
          lift(t) {
            const e = new h(this, this);
            return (e.operator = t), e;
          }
          next(t) {
            if (this.closed) throw new o.a();
            if (!this.isStopped) {
              const { observers: e } = this,
                n = e.length,
                r = e.slice();
              for (let s = 0; s < n; s++) r[s].next(t);
            }
          }
          error(t) {
            if (this.closed) throw new o.a();
            (this.hasError = !0), (this.thrownError = t), (this.isStopped = !0);
            const { observers: e } = this,
              n = e.length,
              r = e.slice();
            for (let s = 0; s < n; s++) r[s].error(t);
            this.observers.length = 0;
          }
          complete() {
            if (this.closed) throw new o.a();
            this.isStopped = !0;
            const { observers: t } = this,
              e = t.length,
              n = t.slice();
            for (let r = 0; r < e; r++) n[r].complete();
            this.observers.length = 0;
          }
          unsubscribe() {
            (this.isStopped = !0), (this.closed = !0), (this.observers = null);
          }
          _trySubscribe(t) {
            if (this.closed) throw new o.a();
            return super._trySubscribe(t);
          }
          _subscribe(t) {
            if (this.closed) throw new o.a();
            return this.hasError
              ? (t.error(this.thrownError), i.a.EMPTY)
              : this.isStopped
              ? (t.complete(), i.a.EMPTY)
              : (this.observers.push(t), new a(this, t));
          }
          asObservable() {
            const t = new r.a();
            return (t.source = this), t;
          }
        }
        return (t.create = (t, e) => new h(t, e)), t;
      })();
      class h extends u {
        constructor(t, e) {
          super(), (this.destination = t), (this.source = e);
        }
        next(t) {
          const { destination: e } = this;
          e && e.next && e.next(t);
        }
        error(t) {
          const { destination: e } = this;
          e && e.error && this.destination.error(t);
        }
        complete() {
          const { destination: t } = this;
          t && t.complete && this.destination.complete();
        }
        _subscribe(t) {
          const { source: e } = this;
          return e ? this.source.subscribe(t) : i.a.EMPTY;
        }
      }
    },
    XoHu: function(t, e, n) {
      'use strict';
      function r(t) {
        return null !== t && 'object' == typeof t;
      }
      n.d(e, 'a', function() {
        return r;
      });
    },
    ZAI4: function(t, e, n) {
      'use strict';
      n.d(e, 'a', function() {
        return hh;
      });
      var r = n('jhN1'),
        s = n('fXoL'),
        i = n('ofXK'),
        o = n('HDdC'),
        a = n('DH7j'),
        l = n('lJxs'),
        c = n('XoHu'),
        u = n('Cfvw');
      function h(t, e) {
        return new o.a(n => {
          const r = t.length;
          if (0 === r) return void n.complete();
          const s = new Array(r);
          let i = 0,
            o = 0;
          for (let a = 0; a < r; a++) {
            const l = Object(u.a)(t[a]);
            let c = !1;
            n.add(
              l.subscribe({
                next: t => {
                  c || ((c = !0), o++), (s[a] = t);
                },
                error: t => n.error(t),
                complete: () => {
                  i++,
                    (i !== r && c) ||
                      (o === r && n.next(e ? e.reduce((t, e, n) => ((t[e] = s[n]), t), {}) : s), n.complete());
                }
              })
            );
          }
        });
      }
      const d = new s.q('NgValueAccessor'),
        p = { provide: d, useExisting: Object(s.S)(() => f), multi: !0 };
      let f = (() => {
        class t {
          constructor(t, e) {
            (this._renderer = t), (this._elementRef = e), (this.onChange = t => {}), (this.onTouched = () => {});
          }
          writeValue(t) {
            this._renderer.setProperty(this._elementRef.nativeElement, 'checked', t);
          }
          registerOnChange(t) {
            this.onChange = t;
          }
          registerOnTouched(t) {
            this.onTouched = t;
          }
          setDisabledState(t) {
            this._renderer.setProperty(this._elementRef.nativeElement, 'disabled', t);
          }
        }
        return (
          (t.ɵfac = function(e) {
            return new (e || t)(s.Mb(s.D), s.Mb(s.l));
          }),
          (t.ɵdir = s.Hb({
            type: t,
            selectors: [
              ['input', 'type', 'checkbox', 'formControlName', ''],
              ['input', 'type', 'checkbox', 'formControl', ''],
              ['input', 'type', 'checkbox', 'ngModel', '']
            ],
            hostBindings: function(t, e) {
              1 & t &&
                s.dc('change', function(t) {
                  return e.onChange(t.target.checked);
                })('blur', function() {
                  return e.onTouched();
                });
            },
            features: [s.yb([p])]
          })),
          t
        );
      })();
      const g = { provide: d, useExisting: Object(s.S)(() => y), multi: !0 },
        m = new s.q('CompositionEventMode');
      let y = (() => {
          class t {
            constructor(t, e, n) {
              (this._renderer = t),
                (this._elementRef = e),
                (this._compositionMode = n),
                (this.onChange = t => {}),
                (this.onTouched = () => {}),
                (this._composing = !1),
                null == this._compositionMode &&
                  (this._compositionMode = !(function() {
                    const t = Object(i.y)() ? Object(i.y)().getUserAgent() : '';
                    return /android (\d+)/.test(t.toLowerCase());
                  })());
            }
            writeValue(t) {
              this._renderer.setProperty(this._elementRef.nativeElement, 'value', null == t ? '' : t);
            }
            registerOnChange(t) {
              this.onChange = t;
            }
            registerOnTouched(t) {
              this.onTouched = t;
            }
            setDisabledState(t) {
              this._renderer.setProperty(this._elementRef.nativeElement, 'disabled', t);
            }
            _handleInput(t) {
              (!this._compositionMode || (this._compositionMode && !this._composing)) && this.onChange(t);
            }
            _compositionStart() {
              this._composing = !0;
            }
            _compositionEnd(t) {
              (this._composing = !1), this._compositionMode && this.onChange(t);
            }
          }
          return (
            (t.ɵfac = function(e) {
              return new (e || t)(s.Mb(s.D), s.Mb(s.l), s.Mb(m, 8));
            }),
            (t.ɵdir = s.Hb({
              type: t,
              selectors: [
                ['input', 'formControlName', '', 3, 'type', 'checkbox'],
                ['textarea', 'formControlName', ''],
                ['input', 'formControl', '', 3, 'type', 'checkbox'],
                ['textarea', 'formControl', ''],
                ['input', 'ngModel', '', 3, 'type', 'checkbox'],
                ['textarea', 'ngModel', ''],
                ['', 'ngDefaultControl', '']
              ],
              hostBindings: function(t, e) {
                1 & t &&
                  s.dc('input', function(t) {
                    return e._handleInput(t.target.value);
                  })('blur', function() {
                    return e.onTouched();
                  })('compositionstart', function() {
                    return e._compositionStart();
                  })('compositionend', function(t) {
                    return e._compositionEnd(t.target.value);
                  });
              },
              features: [s.yb([g])]
            })),
            t
          );
        })(),
        b = (() => {
          class t {
            get value() {
              return this.control ? this.control.value : null;
            }
            get valid() {
              return this.control ? this.control.valid : null;
            }
            get invalid() {
              return this.control ? this.control.invalid : null;
            }
            get pending() {
              return this.control ? this.control.pending : null;
            }
            get disabled() {
              return this.control ? this.control.disabled : null;
            }
            get enabled() {
              return this.control ? this.control.enabled : null;
            }
            get errors() {
              return this.control ? this.control.errors : null;
            }
            get pristine() {
              return this.control ? this.control.pristine : null;
            }
            get dirty() {
              return this.control ? this.control.dirty : null;
            }
            get touched() {
              return this.control ? this.control.touched : null;
            }
            get status() {
              return this.control ? this.control.status : null;
            }
            get untouched() {
              return this.control ? this.control.untouched : null;
            }
            get statusChanges() {
              return this.control ? this.control.statusChanges : null;
            }
            get valueChanges() {
              return this.control ? this.control.valueChanges : null;
            }
            get path() {
              return null;
            }
            reset(t) {
              this.control && this.control.reset(t);
            }
            hasError(t, e) {
              return !!this.control && this.control.hasError(t, e);
            }
            getError(t, e) {
              return this.control ? this.control.getError(t, e) : null;
            }
          }
          return (
            (t.ɵfac = function(e) {
              return new (e || t)();
            }),
            (t.ɵdir = s.Hb({ type: t })),
            t
          );
        })(),
        _ = (() => {
          class t extends b {
            get formDirective() {
              return null;
            }
            get path() {
              return null;
            }
          }
          return (
            (t.ɵfac = function(e) {
              return v(e || t);
            }),
            (t.ɵdir = s.Hb({ type: t, features: [s.wb] })),
            t
          );
        })();
      const v = s.Tb(_);
      function w() {
        throw new Error('unimplemented');
      }
      class C extends b {
        constructor() {
          super(...arguments),
            (this._parent = null),
            (this.name = null),
            (this.valueAccessor = null),
            (this._rawValidators = []),
            (this._rawAsyncValidators = []);
        }
        get validator() {
          return w();
        }
        get asyncValidator() {
          return w();
        }
      }
      let S = (() => {
        class t extends class {
          constructor(t) {
            this._cd = t;
          }
          get ngClassUntouched() {
            return !!this._cd.control && this._cd.control.untouched;
          }
          get ngClassTouched() {
            return !!this._cd.control && this._cd.control.touched;
          }
          get ngClassPristine() {
            return !!this._cd.control && this._cd.control.pristine;
          }
          get ngClassDirty() {
            return !!this._cd.control && this._cd.control.dirty;
          }
          get ngClassValid() {
            return !!this._cd.control && this._cd.control.valid;
          }
          get ngClassInvalid() {
            return !!this._cd.control && this._cd.control.invalid;
          }
          get ngClassPending() {
            return !!this._cd.control && this._cd.control.pending;
          }
        } {
          constructor(t) {
            super(t);
          }
        }
        return (
          (t.ɵfac = function(e) {
            return new (e || t)(s.Mb(C, 2));
          }),
          (t.ɵdir = s.Hb({
            type: t,
            selectors: [
              ['', 'formControlName', ''],
              ['', 'ngModel', ''],
              ['', 'formControl', '']
            ],
            hostVars: 14,
            hostBindings: function(t, e) {
              2 & t &&
                s.Eb('ng-untouched', e.ngClassUntouched)('ng-touched', e.ngClassTouched)(
                  'ng-pristine',
                  e.ngClassPristine
                )('ng-dirty', e.ngClassDirty)('ng-valid', e.ngClassValid)('ng-invalid', e.ngClassInvalid)(
                  'ng-pending',
                  e.ngClassPending
                );
            },
            features: [s.wb]
          })),
          t
        );
      })();
      function E(t) {
        return null == t || 0 === t.length;
      }
      const x = new s.q('NgValidators'),
        O = new s.q('NgAsyncValidators'),
        T = /^(?=.{1,254}$)(?=.{1,64}@)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
      class k {
        static min(t) {
          return e => {
            if (E(e.value) || E(t)) return null;
            const n = parseFloat(e.value);
            return !isNaN(n) && n < t ? { min: { min: t, actual: e.value } } : null;
          };
        }
        static max(t) {
          return e => {
            if (E(e.value) || E(t)) return null;
            const n = parseFloat(e.value);
            return !isNaN(n) && n > t ? { max: { max: t, actual: e.value } } : null;
          };
        }
        static required(t) {
          return E(t.value) ? { required: !0 } : null;
        }
        static requiredTrue(t) {
          return !0 === t.value ? null : { required: !0 };
        }
        static email(t) {
          return E(t.value) || T.test(t.value) ? null : { email: !0 };
        }
        static minLength(t) {
          return e => {
            if (E(e.value)) return null;
            const n = e.value ? e.value.length : 0;
            return n < t ? { minlength: { requiredLength: t, actualLength: n } } : null;
          };
        }
        static maxLength(t) {
          return e => {
            const n = e.value ? e.value.length : 0;
            return n > t ? { maxlength: { requiredLength: t, actualLength: n } } : null;
          };
        }
        static pattern(t) {
          if (!t) return k.nullValidator;
          let e, n;
          return (
            'string' == typeof t
              ? ((n = ''),
                '^' !== t.charAt(0) && (n += '^'),
                (n += t),
                '$' !== t.charAt(t.length - 1) && (n += '$'),
                (e = new RegExp(n)))
              : ((n = t.toString()), (e = t)),
            t => {
              if (E(t.value)) return null;
              const r = t.value;
              return e.test(r) ? null : { pattern: { requiredPattern: n, actualValue: r } };
            }
          );
        }
        static nullValidator(t) {
          return null;
        }
        static compose(t) {
          if (!t) return null;
          const e = t.filter(A);
          return 0 == e.length
            ? null
            : function(t) {
                return P(
                  (function(t, e) {
                    return e.map(e => e(t));
                  })(t, e)
                );
              };
        }
        static composeAsync(t) {
          if (!t) return null;
          const e = t.filter(A);
          return 0 == e.length
            ? null
            : function(t) {
                return (function(...t) {
                  if (1 === t.length) {
                    const e = t[0];
                    if (Object(a.a)(e)) return h(e, null);
                    if (Object(c.a)(e) && Object.getPrototypeOf(e) === Object.prototype) {
                      const t = Object.keys(e);
                      return h(
                        t.map(t => e[t]),
                        t
                      );
                    }
                  }
                  if ('function' == typeof t[t.length - 1]) {
                    const e = t.pop();
                    return h((t = 1 === t.length && Object(a.a)(t[0]) ? t[0] : t), null).pipe(
                      Object(l.a)(t => e(...t))
                    );
                  }
                  return h(t, null);
                })(
                  (function(t, e) {
                    return e.map(e => e(t));
                  })(t, e).map(I)
                ).pipe(Object(l.a)(P));
              };
        }
      }
      function A(t) {
        return null != t;
      }
      function I(t) {
        const e = Object(s.qb)(t) ? Object(u.a)(t) : t;
        if (!Object(s.pb)(e)) throw new Error('Expected validator to return Promise or Observable.');
        return e;
      }
      function P(t) {
        let e = {};
        return (
          t.forEach(t => {
            e = null != t ? Object.assign(Object.assign({}, e), t) : e;
          }),
          0 === Object.keys(e).length ? null : e
        );
      }
      function R(t) {
        return t.validate ? e => t.validate(e) : t;
      }
      function D(t) {
        return t.validate ? e => t.validate(e) : t;
      }
      const j = { provide: d, useExisting: Object(s.S)(() => N), multi: !0 };
      let N = (() => {
        class t {
          constructor(t, e) {
            (this._renderer = t), (this._elementRef = e), (this.onChange = t => {}), (this.onTouched = () => {});
          }
          writeValue(t) {
            this._renderer.setProperty(this._elementRef.nativeElement, 'value', null == t ? '' : t);
          }
          registerOnChange(t) {
            this.onChange = e => {
              t('' == e ? null : parseFloat(e));
            };
          }
          registerOnTouched(t) {
            this.onTouched = t;
          }
          setDisabledState(t) {
            this._renderer.setProperty(this._elementRef.nativeElement, 'disabled', t);
          }
        }
        return (
          (t.ɵfac = function(e) {
            return new (e || t)(s.Mb(s.D), s.Mb(s.l));
          }),
          (t.ɵdir = s.Hb({
            type: t,
            selectors: [
              ['input', 'type', 'number', 'formControlName', ''],
              ['input', 'type', 'number', 'formControl', ''],
              ['input', 'type', 'number', 'ngModel', '']
            ],
            hostBindings: function(t, e) {
              1 & t &&
                s.dc('change', function(t) {
                  return e.onChange(t.target.value);
                })('input', function(t) {
                  return e.onChange(t.target.value);
                })('blur', function() {
                  return e.onTouched();
                });
            },
            features: [s.yb([j])]
          })),
          t
        );
      })();
      const M = { provide: d, useExisting: Object(s.S)(() => F), multi: !0 };
      let L = (() => {
          class t {
            constructor() {
              this._accessors = [];
            }
            add(t, e) {
              this._accessors.push([t, e]);
            }
            remove(t) {
              for (let e = this._accessors.length - 1; e >= 0; --e)
                if (this._accessors[e][1] === t) return void this._accessors.splice(e, 1);
            }
            select(t) {
              this._accessors.forEach(e => {
                this._isSameGroup(e, t) && e[1] !== t && e[1].fireUncheck(t.value);
              });
            }
            _isSameGroup(t, e) {
              return !!t[0].control && t[0]._parent === e._control._parent && t[1].name === e.name;
            }
          }
          return (
            (t.ɵfac = function(e) {
              return new (e || t)();
            }),
            (t.ɵprov = s.Ib({ token: t, factory: t.ɵfac })),
            t
          );
        })(),
        F = (() => {
          class t {
            constructor(t, e, n, r) {
              (this._renderer = t),
                (this._elementRef = e),
                (this._registry = n),
                (this._injector = r),
                (this.onChange = () => {}),
                (this.onTouched = () => {});
            }
            ngOnInit() {
              (this._control = this._injector.get(C)), this._checkName(), this._registry.add(this._control, this);
            }
            ngOnDestroy() {
              this._registry.remove(this);
            }
            writeValue(t) {
              (this._state = t === this.value),
                this._renderer.setProperty(this._elementRef.nativeElement, 'checked', this._state);
            }
            registerOnChange(t) {
              (this._fn = t),
                (this.onChange = () => {
                  t(this.value), this._registry.select(this);
                });
            }
            fireUncheck(t) {
              this.writeValue(t);
            }
            registerOnTouched(t) {
              this.onTouched = t;
            }
            setDisabledState(t) {
              this._renderer.setProperty(this._elementRef.nativeElement, 'disabled', t);
            }
            _checkName() {
              this.name && this.formControlName && this.name !== this.formControlName && this._throwNameError(),
                !this.name && this.formControlName && (this.name = this.formControlName);
            }
            _throwNameError() {
              throw new Error(
                '\n      If you define both a name and a formControlName attribute on your radio button, their values\n      must match. Ex: <input type="radio" formControlName="food" name="food">\n    '
              );
            }
          }
          return (
            (t.ɵfac = function(e) {
              return new (e || t)(s.Mb(s.D), s.Mb(s.l), s.Mb(L), s.Mb(s.r));
            }),
            (t.ɵdir = s.Hb({
              type: t,
              selectors: [
                ['input', 'type', 'radio', 'formControlName', ''],
                ['input', 'type', 'radio', 'formControl', ''],
                ['input', 'type', 'radio', 'ngModel', '']
              ],
              hostBindings: function(t, e) {
                1 & t &&
                  s.dc('change', function() {
                    return e.onChange();
                  })('blur', function() {
                    return e.onTouched();
                  });
              },
              inputs: { name: 'name', formControlName: 'formControlName', value: 'value' },
              features: [s.yb([M])]
            })),
            t
          );
        })();
      const V = { provide: d, useExisting: Object(s.S)(() => H), multi: !0 };
      let H = (() => {
        class t {
          constructor(t, e) {
            (this._renderer = t), (this._elementRef = e), (this.onChange = t => {}), (this.onTouched = () => {});
          }
          writeValue(t) {
            this._renderer.setProperty(this._elementRef.nativeElement, 'value', parseFloat(t));
          }
          registerOnChange(t) {
            this.onChange = e => {
              t('' == e ? null : parseFloat(e));
            };
          }
          registerOnTouched(t) {
            this.onTouched = t;
          }
          setDisabledState(t) {
            this._renderer.setProperty(this._elementRef.nativeElement, 'disabled', t);
          }
        }
        return (
          (t.ɵfac = function(e) {
            return new (e || t)(s.Mb(s.D), s.Mb(s.l));
          }),
          (t.ɵdir = s.Hb({
            type: t,
            selectors: [
              ['input', 'type', 'range', 'formControlName', ''],
              ['input', 'type', 'range', 'formControl', ''],
              ['input', 'type', 'range', 'ngModel', '']
            ],
            hostBindings: function(t, e) {
              1 & t &&
                s.dc('change', function(t) {
                  return e.onChange(t.target.value);
                })('input', function(t) {
                  return e.onChange(t.target.value);
                })('blur', function() {
                  return e.onTouched();
                });
            },
            features: [s.yb([V])]
          })),
          t
        );
      })();
      const U =
          '\n    <div [formGroup]="myGroup">\n       <div formGroupName="person">\n          <input formControlName="firstName">\n       </div>\n    </div>\n\n    In your class:\n\n    this.myGroup = new FormGroup({\n       person: new FormGroup({ firstName: new FormControl() })\n    });',
        z =
          '\n    <form>\n       <div ngModelGroup="person">\n          <input [(ngModel)]="person.name" name="firstName">\n       </div>\n    </form>',
        $ = { provide: d, useExisting: Object(s.S)(() => B), multi: !0 };
      let B = (() => {
        class t {
          constructor(t, e) {
            (this._renderer = t),
              (this._elementRef = e),
              (this._optionMap = new Map()),
              (this._idCounter = 0),
              (this.onChange = t => {}),
              (this.onTouched = () => {}),
              (this._compareWith = s.rb);
          }
          set compareWith(t) {
            if ('function' != typeof t)
              throw new Error('compareWith must be a function, but received ' + JSON.stringify(t));
            this._compareWith = t;
          }
          writeValue(t) {
            this.value = t;
            const e = this._getOptionId(t);
            null == e && this._renderer.setProperty(this._elementRef.nativeElement, 'selectedIndex', -1);
            const n = (function(t, e) {
              return null == t ? '' + e : (e && 'object' == typeof e && (e = 'Object'), `${t}: ${e}`.slice(0, 50));
            })(e, t);
            this._renderer.setProperty(this._elementRef.nativeElement, 'value', n);
          }
          registerOnChange(t) {
            this.onChange = e => {
              (this.value = this._getOptionValue(e)), t(this.value);
            };
          }
          registerOnTouched(t) {
            this.onTouched = t;
          }
          setDisabledState(t) {
            this._renderer.setProperty(this._elementRef.nativeElement, 'disabled', t);
          }
          _registerOption() {
            return (this._idCounter++).toString();
          }
          _getOptionId(t) {
            for (const e of Array.from(this._optionMap.keys()))
              if (this._compareWith(this._optionMap.get(e), t)) return e;
            return null;
          }
          _getOptionValue(t) {
            const e = (function(t) {
              return t.split(':')[0];
            })(t);
            return this._optionMap.has(e) ? this._optionMap.get(e) : t;
          }
        }
        return (
          (t.ɵfac = function(e) {
            return new (e || t)(s.Mb(s.D), s.Mb(s.l));
          }),
          (t.ɵdir = s.Hb({
            type: t,
            selectors: [
              ['select', 'formControlName', '', 3, 'multiple', ''],
              ['select', 'formControl', '', 3, 'multiple', ''],
              ['select', 'ngModel', '', 3, 'multiple', '']
            ],
            hostBindings: function(t, e) {
              1 & t &&
                s.dc('change', function(t) {
                  return e.onChange(t.target.value);
                })('blur', function() {
                  return e.onTouched();
                });
            },
            inputs: { compareWith: 'compareWith' },
            features: [s.yb([$])]
          })),
          t
        );
      })();
      const q = { provide: d, useExisting: Object(s.S)(() => Z), multi: !0 };
      let Z = (() => {
        class t {
          constructor(t, e) {
            (this._renderer = t),
              (this._elementRef = e),
              (this._optionMap = new Map()),
              (this._idCounter = 0),
              (this.onChange = t => {}),
              (this.onTouched = () => {}),
              (this._compareWith = s.rb);
          }
          set compareWith(t) {
            if ('function' != typeof t)
              throw new Error('compareWith must be a function, but received ' + JSON.stringify(t));
            this._compareWith = t;
          }
          writeValue(t) {
            let e;
            if (((this.value = t), Array.isArray(t))) {
              const n = t.map(t => this._getOptionId(t));
              e = (t, e) => {
                t._setSelected(n.indexOf(e.toString()) > -1);
              };
            } else
              e = (t, e) => {
                t._setSelected(!1);
              };
            this._optionMap.forEach(e);
          }
          registerOnChange(t) {
            this.onChange = e => {
              const n = [];
              if (e.hasOwnProperty('selectedOptions')) {
                const t = e.selectedOptions;
                for (let e = 0; e < t.length; e++) {
                  const r = t.item(e),
                    s = this._getOptionValue(r.value);
                  n.push(s);
                }
              } else {
                const t = e.options;
                for (let e = 0; e < t.length; e++) {
                  const r = t.item(e);
                  if (r.selected) {
                    const t = this._getOptionValue(r.value);
                    n.push(t);
                  }
                }
              }
              (this.value = n), t(n);
            };
          }
          registerOnTouched(t) {
            this.onTouched = t;
          }
          setDisabledState(t) {
            this._renderer.setProperty(this._elementRef.nativeElement, 'disabled', t);
          }
          _registerOption(t) {
            const e = (this._idCounter++).toString();
            return this._optionMap.set(e, t), e;
          }
          _getOptionId(t) {
            for (const e of Array.from(this._optionMap.keys()))
              if (this._compareWith(this._optionMap.get(e)._value, t)) return e;
            return null;
          }
          _getOptionValue(t) {
            const e = (function(t) {
              return t.split(':')[0];
            })(t);
            return this._optionMap.has(e) ? this._optionMap.get(e)._value : t;
          }
        }
        return (
          (t.ɵfac = function(e) {
            return new (e || t)(s.Mb(s.D), s.Mb(s.l));
          }),
          (t.ɵdir = s.Hb({
            type: t,
            selectors: [
              ['select', 'multiple', '', 'formControlName', ''],
              ['select', 'multiple', '', 'formControl', ''],
              ['select', 'multiple', '', 'ngModel', '']
            ],
            hostBindings: function(t, e) {
              1 & t &&
                s.dc('change', function(t) {
                  return e.onChange(t.target);
                })('blur', function() {
                  return e.onTouched();
                });
            },
            inputs: { compareWith: 'compareWith' },
            features: [s.yb([q])]
          })),
          t
        );
      })();
      function Q(t, e) {
        return [...e.path, t];
      }
      function G(t, e) {
        t || K(e, 'Cannot find control with'),
          e.valueAccessor || K(e, 'No value accessor for form control with'),
          (t.validator = k.compose([t.validator, e.validator])),
          (t.asyncValidator = k.composeAsync([t.asyncValidator, e.asyncValidator])),
          e.valueAccessor.writeValue(t.value),
          (function(t, e) {
            e.valueAccessor.registerOnChange(n => {
              (t._pendingValue = n),
                (t._pendingChange = !0),
                (t._pendingDirty = !0),
                'change' === t.updateOn && W(t, e);
            });
          })(t, e),
          (function(t, e) {
            t.registerOnChange((t, n) => {
              e.valueAccessor.writeValue(t), n && e.viewToModelUpdate(t);
            });
          })(t, e),
          (function(t, e) {
            e.valueAccessor.registerOnTouched(() => {
              (t._pendingTouched = !0),
                'blur' === t.updateOn && t._pendingChange && W(t, e),
                'submit' !== t.updateOn && t.markAsTouched();
            });
          })(t, e),
          e.valueAccessor.setDisabledState &&
            t.registerOnDisabledChange(t => {
              e.valueAccessor.setDisabledState(t);
            }),
          e._rawValidators.forEach(e => {
            e.registerOnValidatorChange && e.registerOnValidatorChange(() => t.updateValueAndValidity());
          }),
          e._rawAsyncValidators.forEach(e => {
            e.registerOnValidatorChange && e.registerOnValidatorChange(() => t.updateValueAndValidity());
          });
      }
      function W(t, e) {
        t._pendingDirty && t.markAsDirty(),
          t.setValue(t._pendingValue, { emitModelToViewChange: !1 }),
          e.viewToModelUpdate(t._pendingValue),
          (t._pendingChange = !1);
      }
      function K(t, e) {
        let n;
        throw ((n =
          t.path.length > 1
            ? `path: '${t.path.join(' -> ')}'`
            : t.path[0]
            ? `name: '${t.path}'`
            : 'unspecified name attribute'),
        new Error(`${e} ${n}`));
      }
      function J(t) {
        return null != t ? k.compose(t.map(R)) : null;
      }
      function Y(t) {
        return null != t ? k.composeAsync(t.map(D)) : null;
      }
      const X = [f, H, N, B, Z, F];
      function tt(t) {
        const e = nt(t) ? t.validators : t;
        return Array.isArray(e) ? J(e) : e || null;
      }
      function et(t, e) {
        const n = nt(e) ? e.asyncValidators : t;
        return Array.isArray(n) ? Y(n) : n || null;
      }
      function nt(t) {
        return null != t && !Array.isArray(t) && 'object' == typeof t;
      }
      class rt {
        constructor(t, e) {
          (this.validator = t),
            (this.asyncValidator = e),
            (this._onCollectionChange = () => {}),
            (this.pristine = !0),
            (this.touched = !1),
            (this._onDisabledChange = []);
        }
        get parent() {
          return this._parent;
        }
        get valid() {
          return 'VALID' === this.status;
        }
        get invalid() {
          return 'INVALID' === this.status;
        }
        get pending() {
          return 'PENDING' == this.status;
        }
        get disabled() {
          return 'DISABLED' === this.status;
        }
        get enabled() {
          return 'DISABLED' !== this.status;
        }
        get dirty() {
          return !this.pristine;
        }
        get untouched() {
          return !this.touched;
        }
        get updateOn() {
          return this._updateOn ? this._updateOn : this.parent ? this.parent.updateOn : 'change';
        }
        setValidators(t) {
          this.validator = tt(t);
        }
        setAsyncValidators(t) {
          this.asyncValidator = et(t);
        }
        clearValidators() {
          this.validator = null;
        }
        clearAsyncValidators() {
          this.asyncValidator = null;
        }
        markAsTouched(t = {}) {
          (this.touched = !0), this._parent && !t.onlySelf && this._parent.markAsTouched(t);
        }
        markAllAsTouched() {
          this.markAsTouched({ onlySelf: !0 }), this._forEachChild(t => t.markAllAsTouched());
        }
        markAsUntouched(t = {}) {
          (this.touched = !1),
            (this._pendingTouched = !1),
            this._forEachChild(t => {
              t.markAsUntouched({ onlySelf: !0 });
            }),
            this._parent && !t.onlySelf && this._parent._updateTouched(t);
        }
        markAsDirty(t = {}) {
          (this.pristine = !1), this._parent && !t.onlySelf && this._parent.markAsDirty(t);
        }
        markAsPristine(t = {}) {
          (this.pristine = !0),
            (this._pendingDirty = !1),
            this._forEachChild(t => {
              t.markAsPristine({ onlySelf: !0 });
            }),
            this._parent && !t.onlySelf && this._parent._updatePristine(t);
        }
        markAsPending(t = {}) {
          (this.status = 'PENDING'),
            !1 !== t.emitEvent && this.statusChanges.emit(this.status),
            this._parent && !t.onlySelf && this._parent.markAsPending(t);
        }
        disable(t = {}) {
          const e = this._parentMarkedDirty(t.onlySelf);
          (this.status = 'DISABLED'),
            (this.errors = null),
            this._forEachChild(e => {
              e.disable(Object.assign(Object.assign({}, t), { onlySelf: !0 }));
            }),
            this._updateValue(),
            !1 !== t.emitEvent && (this.valueChanges.emit(this.value), this.statusChanges.emit(this.status)),
            this._updateAncestors(Object.assign(Object.assign({}, t), { skipPristineCheck: e })),
            this._onDisabledChange.forEach(t => t(!0));
        }
        enable(t = {}) {
          const e = this._parentMarkedDirty(t.onlySelf);
          (this.status = 'VALID'),
            this._forEachChild(e => {
              e.enable(Object.assign(Object.assign({}, t), { onlySelf: !0 }));
            }),
            this.updateValueAndValidity({ onlySelf: !0, emitEvent: t.emitEvent }),
            this._updateAncestors(Object.assign(Object.assign({}, t), { skipPristineCheck: e })),
            this._onDisabledChange.forEach(t => t(!1));
        }
        _updateAncestors(t) {
          this._parent &&
            !t.onlySelf &&
            (this._parent.updateValueAndValidity(t),
            t.skipPristineCheck || this._parent._updatePristine(),
            this._parent._updateTouched());
        }
        setParent(t) {
          this._parent = t;
        }
        updateValueAndValidity(t = {}) {
          this._setInitialStatus(),
            this._updateValue(),
            this.enabled &&
              (this._cancelExistingSubscription(),
              (this.errors = this._runValidator()),
              (this.status = this._calculateStatus()),
              ('VALID' !== this.status && 'PENDING' !== this.status) || this._runAsyncValidator(t.emitEvent)),
            !1 !== t.emitEvent && (this.valueChanges.emit(this.value), this.statusChanges.emit(this.status)),
            this._parent && !t.onlySelf && this._parent.updateValueAndValidity(t);
        }
        _updateTreeValidity(t = { emitEvent: !0 }) {
          this._forEachChild(e => e._updateTreeValidity(t)),
            this.updateValueAndValidity({ onlySelf: !0, emitEvent: t.emitEvent });
        }
        _setInitialStatus() {
          this.status = this._allControlsDisabled() ? 'DISABLED' : 'VALID';
        }
        _runValidator() {
          return this.validator ? this.validator(this) : null;
        }
        _runAsyncValidator(t) {
          if (this.asyncValidator) {
            this.status = 'PENDING';
            const e = I(this.asyncValidator(this));
            this._asyncValidationSubscription = e.subscribe(e => this.setErrors(e, { emitEvent: t }));
          }
        }
        _cancelExistingSubscription() {
          this._asyncValidationSubscription && this._asyncValidationSubscription.unsubscribe();
        }
        setErrors(t, e = {}) {
          (this.errors = t), this._updateControlsErrors(!1 !== e.emitEvent);
        }
        get(t) {
          return (function(t, e, n) {
            if (null == e) return null;
            if ((Array.isArray(e) || (e = e.split('.')), Array.isArray(e) && 0 === e.length)) return null;
            let r = t;
            return (
              e.forEach(t => {
                r =
                  r instanceof it
                    ? r.controls.hasOwnProperty(t)
                      ? r.controls[t]
                      : null
                    : (r instanceof ot && r.at(t)) || null;
              }),
              r
            );
          })(this, t);
        }
        getError(t, e) {
          const n = e ? this.get(e) : this;
          return n && n.errors ? n.errors[t] : null;
        }
        hasError(t, e) {
          return !!this.getError(t, e);
        }
        get root() {
          let t = this;
          for (; t._parent; ) t = t._parent;
          return t;
        }
        _updateControlsErrors(t) {
          (this.status = this._calculateStatus()),
            t && this.statusChanges.emit(this.status),
            this._parent && this._parent._updateControlsErrors(t);
        }
        _initObservables() {
          (this.valueChanges = new s.n()), (this.statusChanges = new s.n());
        }
        _calculateStatus() {
          return this._allControlsDisabled()
            ? 'DISABLED'
            : this.errors
            ? 'INVALID'
            : this._anyControlsHaveStatus('PENDING')
            ? 'PENDING'
            : this._anyControlsHaveStatus('INVALID')
            ? 'INVALID'
            : 'VALID';
        }
        _anyControlsHaveStatus(t) {
          return this._anyControls(e => e.status === t);
        }
        _anyControlsDirty() {
          return this._anyControls(t => t.dirty);
        }
        _anyControlsTouched() {
          return this._anyControls(t => t.touched);
        }
        _updatePristine(t = {}) {
          (this.pristine = !this._anyControlsDirty()), this._parent && !t.onlySelf && this._parent._updatePristine(t);
        }
        _updateTouched(t = {}) {
          (this.touched = this._anyControlsTouched()), this._parent && !t.onlySelf && this._parent._updateTouched(t);
        }
        _isBoxedValue(t) {
          return 'object' == typeof t && null !== t && 2 === Object.keys(t).length && 'value' in t && 'disabled' in t;
        }
        _registerOnCollectionChange(t) {
          this._onCollectionChange = t;
        }
        _setUpdateStrategy(t) {
          nt(t) && null != t.updateOn && (this._updateOn = t.updateOn);
        }
        _parentMarkedDirty(t) {
          return !t && this._parent && this._parent.dirty && !this._parent._anyControlsDirty();
        }
      }
      class st extends rt {
        constructor(t = null, e, n) {
          super(tt(e), et(n, e)),
            (this._onChange = []),
            this._applyFormState(t),
            this._setUpdateStrategy(e),
            this.updateValueAndValidity({ onlySelf: !0, emitEvent: !1 }),
            this._initObservables();
        }
        setValue(t, e = {}) {
          (this.value = this._pendingValue = t),
            this._onChange.length &&
              !1 !== e.emitModelToViewChange &&
              this._onChange.forEach(t => t(this.value, !1 !== e.emitViewToModelChange)),
            this.updateValueAndValidity(e);
        }
        patchValue(t, e = {}) {
          this.setValue(t, e);
        }
        reset(t = null, e = {}) {
          this._applyFormState(t),
            this.markAsPristine(e),
            this.markAsUntouched(e),
            this.setValue(this.value, e),
            (this._pendingChange = !1);
        }
        _updateValue() {}
        _anyControls(t) {
          return !1;
        }
        _allControlsDisabled() {
          return this.disabled;
        }
        registerOnChange(t) {
          this._onChange.push(t);
        }
        _clearChangeFns() {
          (this._onChange = []), (this._onDisabledChange = []), (this._onCollectionChange = () => {});
        }
        registerOnDisabledChange(t) {
          this._onDisabledChange.push(t);
        }
        _forEachChild(t) {}
        _syncPendingControls() {
          return !(
            'submit' !== this.updateOn ||
            (this._pendingDirty && this.markAsDirty(),
            this._pendingTouched && this.markAsTouched(),
            !this._pendingChange) ||
            (this.setValue(this._pendingValue, { onlySelf: !0, emitModelToViewChange: !1 }), 0)
          );
        }
        _applyFormState(t) {
          this._isBoxedValue(t)
            ? ((this.value = this._pendingValue = t.value),
              t.disabled ? this.disable({ onlySelf: !0, emitEvent: !1 }) : this.enable({ onlySelf: !0, emitEvent: !1 }))
            : (this.value = this._pendingValue = t);
        }
      }
      class it extends rt {
        constructor(t, e, n) {
          super(tt(e), et(n, e)),
            (this.controls = t),
            this._initObservables(),
            this._setUpdateStrategy(e),
            this._setUpControls(),
            this.updateValueAndValidity({ onlySelf: !0, emitEvent: !1 });
        }
        registerControl(t, e) {
          return this.controls[t]
            ? this.controls[t]
            : ((this.controls[t] = e), e.setParent(this), e._registerOnCollectionChange(this._onCollectionChange), e);
        }
        addControl(t, e) {
          this.registerControl(t, e), this.updateValueAndValidity(), this._onCollectionChange();
        }
        removeControl(t) {
          this.controls[t] && this.controls[t]._registerOnCollectionChange(() => {}),
            delete this.controls[t],
            this.updateValueAndValidity(),
            this._onCollectionChange();
        }
        setControl(t, e) {
          this.controls[t] && this.controls[t]._registerOnCollectionChange(() => {}),
            delete this.controls[t],
            e && this.registerControl(t, e),
            this.updateValueAndValidity(),
            this._onCollectionChange();
        }
        contains(t) {
          return this.controls.hasOwnProperty(t) && this.controls[t].enabled;
        }
        setValue(t, e = {}) {
          this._checkAllValuesPresent(t),
            Object.keys(t).forEach(n => {
              this._throwIfControlMissing(n), this.controls[n].setValue(t[n], { onlySelf: !0, emitEvent: e.emitEvent });
            }),
            this.updateValueAndValidity(e);
        }
        patchValue(t, e = {}) {
          Object.keys(t).forEach(n => {
            this.controls[n] && this.controls[n].patchValue(t[n], { onlySelf: !0, emitEvent: e.emitEvent });
          }),
            this.updateValueAndValidity(e);
        }
        reset(t = {}, e = {}) {
          this._forEachChild((n, r) => {
            n.reset(t[r], { onlySelf: !0, emitEvent: e.emitEvent });
          }),
            this._updatePristine(e),
            this._updateTouched(e),
            this.updateValueAndValidity(e);
        }
        getRawValue() {
          return this._reduceChildren({}, (t, e, n) => ((t[n] = e instanceof st ? e.value : e.getRawValue()), t));
        }
        _syncPendingControls() {
          let t = this._reduceChildren(!1, (t, e) => !!e._syncPendingControls() || t);
          return t && this.updateValueAndValidity({ onlySelf: !0 }), t;
        }
        _throwIfControlMissing(t) {
          if (!Object.keys(this.controls).length)
            throw new Error(
              "\n        There are no form controls registered with this group yet.  If you're using ngModel,\n        you may want to check next tick (e.g. use setTimeout).\n      "
            );
          if (!this.controls[t]) throw new Error(`Cannot find form control with name: ${t}.`);
        }
        _forEachChild(t) {
          Object.keys(this.controls).forEach(e => t(this.controls[e], e));
        }
        _setUpControls() {
          this._forEachChild(t => {
            t.setParent(this), t._registerOnCollectionChange(this._onCollectionChange);
          });
        }
        _updateValue() {
          this.value = this._reduceValue();
        }
        _anyControls(t) {
          let e = !1;
          return (
            this._forEachChild((n, r) => {
              e = e || (this.contains(r) && t(n));
            }),
            e
          );
        }
        _reduceValue() {
          return this._reduceChildren({}, (t, e, n) => ((e.enabled || this.disabled) && (t[n] = e.value), t));
        }
        _reduceChildren(t, e) {
          let n = t;
          return (
            this._forEachChild((t, r) => {
              n = e(n, t, r);
            }),
            n
          );
        }
        _allControlsDisabled() {
          for (const t of Object.keys(this.controls)) if (this.controls[t].enabled) return !1;
          return Object.keys(this.controls).length > 0 || this.disabled;
        }
        _checkAllValuesPresent(t) {
          this._forEachChild((e, n) => {
            if (void 0 === t[n]) throw new Error(`Must supply a value for form control with name: '${n}'.`);
          });
        }
      }
      class ot extends rt {
        constructor(t, e, n) {
          super(tt(e), et(n, e)),
            (this.controls = t),
            this._initObservables(),
            this._setUpdateStrategy(e),
            this._setUpControls(),
            this.updateValueAndValidity({ onlySelf: !0, emitEvent: !1 });
        }
        at(t) {
          return this.controls[t];
        }
        push(t) {
          this.controls.push(t), this._registerControl(t), this.updateValueAndValidity(), this._onCollectionChange();
        }
        insert(t, e) {
          this.controls.splice(t, 0, e), this._registerControl(e), this.updateValueAndValidity();
        }
        removeAt(t) {
          this.controls[t] && this.controls[t]._registerOnCollectionChange(() => {}),
            this.controls.splice(t, 1),
            this.updateValueAndValidity();
        }
        setControl(t, e) {
          this.controls[t] && this.controls[t]._registerOnCollectionChange(() => {}),
            this.controls.splice(t, 1),
            e && (this.controls.splice(t, 0, e), this._registerControl(e)),
            this.updateValueAndValidity(),
            this._onCollectionChange();
        }
        get length() {
          return this.controls.length;
        }
        setValue(t, e = {}) {
          this._checkAllValuesPresent(t),
            t.forEach((t, n) => {
              this._throwIfControlMissing(n), this.at(n).setValue(t, { onlySelf: !0, emitEvent: e.emitEvent });
            }),
            this.updateValueAndValidity(e);
        }
        patchValue(t, e = {}) {
          t.forEach((t, n) => {
            this.at(n) && this.at(n).patchValue(t, { onlySelf: !0, emitEvent: e.emitEvent });
          }),
            this.updateValueAndValidity(e);
        }
        reset(t = [], e = {}) {
          this._forEachChild((n, r) => {
            n.reset(t[r], { onlySelf: !0, emitEvent: e.emitEvent });
          }),
            this._updatePristine(e),
            this._updateTouched(e),
            this.updateValueAndValidity(e);
        }
        getRawValue() {
          return this.controls.map(t => (t instanceof st ? t.value : t.getRawValue()));
        }
        clear() {
          this.controls.length < 1 ||
            (this._forEachChild(t => t._registerOnCollectionChange(() => {})),
            this.controls.splice(0),
            this.updateValueAndValidity());
        }
        _syncPendingControls() {
          let t = this.controls.reduce((t, e) => !!e._syncPendingControls() || t, !1);
          return t && this.updateValueAndValidity({ onlySelf: !0 }), t;
        }
        _throwIfControlMissing(t) {
          if (!this.controls.length)
            throw new Error(
              "\n        There are no form controls registered with this array yet.  If you're using ngModel,\n        you may want to check next tick (e.g. use setTimeout).\n      "
            );
          if (!this.at(t)) throw new Error('Cannot find form control at index ' + t);
        }
        _forEachChild(t) {
          this.controls.forEach((e, n) => {
            t(e, n);
          });
        }
        _updateValue() {
          this.value = this.controls.filter(t => t.enabled || this.disabled).map(t => t.value);
        }
        _anyControls(t) {
          return this.controls.some(e => e.enabled && t(e));
        }
        _setUpControls() {
          this._forEachChild(t => this._registerControl(t));
        }
        _checkAllValuesPresent(t) {
          this._forEachChild((e, n) => {
            if (void 0 === t[n]) throw new Error(`Must supply a value for form control at index: ${n}.`);
          });
        }
        _allControlsDisabled() {
          for (const t of this.controls) if (t.enabled) return !1;
          return this.controls.length > 0 || this.disabled;
        }
        _registerControl(t) {
          t.setParent(this), t._registerOnCollectionChange(this._onCollectionChange);
        }
      }
      const at = { provide: _, useExisting: Object(s.S)(() => ct) },
        lt = (() => Promise.resolve(null))();
      let ct = (() => {
          class t extends _ {
            constructor(t, e) {
              super(),
                (this.submitted = !1),
                (this._directives = []),
                (this.ngSubmit = new s.n()),
                (this.form = new it({}, J(t), Y(e)));
            }
            ngAfterViewInit() {
              this._setUpdateStrategy();
            }
            get formDirective() {
              return this;
            }
            get control() {
              return this.form;
            }
            get path() {
              return [];
            }
            get controls() {
              return this.form.controls;
            }
            addControl(t) {
              lt.then(() => {
                const e = this._findContainer(t.path);
                (t.control = e.registerControl(t.name, t.control)),
                  G(t.control, t),
                  t.control.updateValueAndValidity({ emitEvent: !1 }),
                  this._directives.push(t);
              });
            }
            getControl(t) {
              return this.form.get(t.path);
            }
            removeControl(t) {
              lt.then(() => {
                const e = this._findContainer(t.path);
                e && e.removeControl(t.name),
                  (function(t, e) {
                    const n = t.indexOf(e);
                    n > -1 && t.splice(n, 1);
                  })(this._directives, t);
              });
            }
            addFormGroup(t) {
              lt.then(() => {
                const e = this._findContainer(t.path),
                  n = new it({});
                (function(t, e) {
                  null == t && K(e, 'Cannot find control with'),
                    (t.validator = k.compose([t.validator, e.validator])),
                    (t.asyncValidator = k.composeAsync([t.asyncValidator, e.asyncValidator]));
                })(n, t),
                  e.registerControl(t.name, n),
                  n.updateValueAndValidity({ emitEvent: !1 });
              });
            }
            removeFormGroup(t) {
              lt.then(() => {
                const e = this._findContainer(t.path);
                e && e.removeControl(t.name);
              });
            }
            getFormGroup(t) {
              return this.form.get(t.path);
            }
            updateModel(t, e) {
              lt.then(() => {
                this.form.get(t.path).setValue(e);
              });
            }
            setValue(t) {
              this.control.setValue(t);
            }
            onSubmit(t) {
              return (
                (this.submitted = !0),
                (e = this._directives),
                this.form._syncPendingControls(),
                e.forEach(t => {
                  const e = t.control;
                  'submit' === e.updateOn &&
                    e._pendingChange &&
                    (t.viewToModelUpdate(e._pendingValue), (e._pendingChange = !1));
                }),
                this.ngSubmit.emit(t),
                !1
              );
              var e;
            }
            onReset() {
              this.resetForm();
            }
            resetForm(t) {
              this.form.reset(t), (this.submitted = !1);
            }
            _setUpdateStrategy() {
              this.options && null != this.options.updateOn && (this.form._updateOn = this.options.updateOn);
            }
            _findContainer(t) {
              return t.pop(), t.length ? this.form.get(t) : this.form;
            }
          }
          return (
            (t.ɵfac = function(e) {
              return new (e || t)(s.Mb(x, 10), s.Mb(O, 10));
            }),
            (t.ɵdir = s.Hb({
              type: t,
              selectors: [['form', 3, 'ngNoForm', '', 3, 'formGroup', ''], ['ng-form'], ['', 'ngForm', '']],
              hostBindings: function(t, e) {
                1 & t &&
                  s.dc('submit', function(t) {
                    return e.onSubmit(t);
                  })('reset', function() {
                    return e.onReset();
                  });
              },
              inputs: { options: ['ngFormOptions', 'options'] },
              outputs: { ngSubmit: 'ngSubmit' },
              exportAs: ['ngForm'],
              features: [s.yb([at]), s.wb]
            })),
            t
          );
        })(),
        ut = (() => {
          class t extends _ {
            ngOnInit() {
              this._checkParentType(), this.formDirective.addFormGroup(this);
            }
            ngOnDestroy() {
              this.formDirective && this.formDirective.removeFormGroup(this);
            }
            get control() {
              return this.formDirective.getFormGroup(this);
            }
            get path() {
              return Q(null == this.name ? this.name : this.name.toString(), this._parent);
            }
            get formDirective() {
              return this._parent ? this._parent.formDirective : null;
            }
            get validator() {
              return J(this._validators);
            }
            get asyncValidator() {
              return Y(this._asyncValidators);
            }
            _checkParentType() {}
          }
          return (
            (t.ɵfac = function(e) {
              return ht(e || t);
            }),
            (t.ɵdir = s.Hb({ type: t, features: [s.wb] })),
            t
          );
        })();
      const ht = s.Tb(ut);
      class dt {
        static modelParentException() {
          throw new Error(
            '\n      ngModel cannot be used to register form controls with a parent formGroup directive.  Try using\n      formGroup\'s partner directive "formControlName" instead.  Example:\n\n      \n    <div [formGroup]="myGroup">\n      <input formControlName="firstName">\n    </div>\n\n    In your class:\n\n    this.myGroup = new FormGroup({\n       firstName: new FormControl()\n    });\n\n      Or, if you\'d like to avoid registering this form control, indicate that it\'s standalone in ngModelOptions:\n\n      Example:\n\n      \n    <div [formGroup]="myGroup">\n       <input formControlName="firstName">\n       <input [(ngModel)]="showMoreControls" [ngModelOptions]="{standalone: true}">\n    </div>\n  '
          );
        }
        static formGroupNameException() {
          throw new Error(
            `\n      ngModel cannot be used to register form controls with a parent formGroupName or formArrayName directive.\n\n      Option 1: Use formControlName instead of ngModel (reactive strategy):\n\n      ${U}\n\n      Option 2:  Update ngModel's parent be ngModelGroup (template-driven strategy):\n\n      ${z}`
          );
        }
        static missingNameException() {
          throw new Error(
            'If ngModel is used within a form tag, either the name attribute must be set or the form\n      control must be defined as \'standalone\' in ngModelOptions.\n\n      Example 1: <input [(ngModel)]="person.firstName" name="first">\n      Example 2: <input [(ngModel)]="person.firstName" [ngModelOptions]="{standalone: true}">'
          );
        }
        static modelGroupParentException() {
          throw new Error(
            `\n      ngModelGroup cannot be used with a parent formGroup directive.\n\n      Option 1: Use formGroupName instead of ngModelGroup (reactive strategy):\n\n      ${U}\n\n      Option 2:  Use a regular form tag instead of the formGroup directive (template-driven strategy):\n\n      ${z}`
          );
        }
      }
      const pt = { provide: _, useExisting: Object(s.S)(() => ft) };
      let ft = (() => {
        class t extends ut {
          constructor(t, e, n) {
            super(), (this._parent = t), (this._validators = e), (this._asyncValidators = n);
          }
          _checkParentType() {
            this._parent instanceof t || this._parent instanceof ct || dt.modelGroupParentException();
          }
        }
        return (
          (t.ɵfac = function(e) {
            return new (e || t)(s.Mb(_, 5), s.Mb(x, 10), s.Mb(O, 10));
          }),
          (t.ɵdir = s.Hb({
            type: t,
            selectors: [['', 'ngModelGroup', '']],
            inputs: { name: ['ngModelGroup', 'name'] },
            exportAs: ['ngModelGroup'],
            features: [s.yb([pt]), s.wb]
          })),
          t
        );
      })();
      const gt = { provide: C, useExisting: Object(s.S)(() => yt) },
        mt = (() => Promise.resolve(null))();
      let yt = (() => {
          class t extends C {
            constructor(t, e, n, r) {
              super(),
                (this.control = new st()),
                (this._registered = !1),
                (this.update = new s.n()),
                (this._parent = t),
                (this._rawValidators = e || []),
                (this._rawAsyncValidators = n || []),
                (this.valueAccessor = (function(t, e) {
                  if (!e) return null;
                  Array.isArray(e) || K(t, 'Value accessor was not provided as an array for form control with');
                  let n = void 0,
                    r = void 0,
                    s = void 0;
                  return (
                    e.forEach(e => {
                      var i;
                      e.constructor === y
                        ? (n = e)
                        : ((i = e),
                          X.some(t => i.constructor === t)
                            ? (r && K(t, 'More than one built-in value accessor matches form control with'), (r = e))
                            : (s && K(t, 'More than one custom value accessor matches form control with'), (s = e)));
                    }),
                    s || r || n || (K(t, 'No valid value accessor for form control with'), null)
                  );
                })(this, r));
            }
            ngOnChanges(t) {
              this._checkForErrors(),
                this._registered || this._setUpControl(),
                'isDisabled' in t && this._updateDisabled(t),
                (function(t, e) {
                  if (!t.hasOwnProperty('model')) return !1;
                  const n = t.model;
                  return !!n.isFirstChange() || !Object(s.rb)(e, n.currentValue);
                })(t, this.viewModel) && (this._updateValue(this.model), (this.viewModel = this.model));
            }
            ngOnDestroy() {
              this.formDirective && this.formDirective.removeControl(this);
            }
            get path() {
              return this._parent ? Q(this.name, this._parent) : [this.name];
            }
            get formDirective() {
              return this._parent ? this._parent.formDirective : null;
            }
            get validator() {
              return J(this._rawValidators);
            }
            get asyncValidator() {
              return Y(this._rawAsyncValidators);
            }
            viewToModelUpdate(t) {
              (this.viewModel = t), this.update.emit(t);
            }
            _setUpControl() {
              this._setUpdateStrategy(),
                this._isStandalone() ? this._setUpStandalone() : this.formDirective.addControl(this),
                (this._registered = !0);
            }
            _setUpdateStrategy() {
              this.options && null != this.options.updateOn && (this.control._updateOn = this.options.updateOn);
            }
            _isStandalone() {
              return !this._parent || !(!this.options || !this.options.standalone);
            }
            _setUpStandalone() {
              G(this.control, this), this.control.updateValueAndValidity({ emitEvent: !1 });
            }
            _checkForErrors() {
              this._isStandalone() || this._checkParentType(), this._checkName();
            }
            _checkParentType() {
              !(this._parent instanceof ft) && this._parent instanceof ut
                ? dt.formGroupNameException()
                : this._parent instanceof ft || this._parent instanceof ct || dt.modelParentException();
            }
            _checkName() {
              this.options && this.options.name && (this.name = this.options.name),
                this._isStandalone() || this.name || dt.missingNameException();
            }
            _updateValue(t) {
              mt.then(() => {
                this.control.setValue(t, { emitViewToModelChange: !1 });
              });
            }
            _updateDisabled(t) {
              const e = t.isDisabled.currentValue,
                n = '' === e || (e && 'false' !== e);
              mt.then(() => {
                n && !this.control.disabled
                  ? this.control.disable()
                  : !n && this.control.disabled && this.control.enable();
              });
            }
          }
          return (
            (t.ɵfac = function(e) {
              return new (e || t)(s.Mb(_, 9), s.Mb(x, 10), s.Mb(O, 10), s.Mb(d, 10));
            }),
            (t.ɵdir = s.Hb({
              type: t,
              selectors: [['', 'ngModel', '', 3, 'formControlName', '', 3, 'formControl', '']],
              inputs: {
                name: 'name',
                isDisabled: ['disabled', 'isDisabled'],
                model: ['ngModel', 'model'],
                options: ['ngModelOptions', 'options']
              },
              outputs: { update: 'ngModelChange' },
              exportAs: ['ngModel'],
              features: [s.yb([gt]), s.wb, s.xb]
            })),
            t
          );
        })(),
        bt = (() => {
          class t {}
          return (
            (t.ɵmod = s.Kb({ type: t })),
            (t.ɵinj = s.Jb({
              factory: function(e) {
                return new (e || t)();
              }
            })),
            t
          );
        })(),
        _t = (() => {
          class t {}
          return (
            (t.ɵmod = s.Kb({ type: t })),
            (t.ɵinj = s.Jb({
              factory: function(e) {
                return new (e || t)();
              },
              providers: [L],
              imports: [bt]
            })),
            t
          );
        })();
      var vt = n('z+Ro'),
        wt = n('yCtX'),
        Ct = n('jZKg');
      function St(...t) {
        let e = t[t.length - 1];
        return Object(vt.a)(e) ? (t.pop(), Object(Ct.a)(t, e)) : Object(wt.a)(t);
      }
      var Et = n('5+tZ');
      function xt(t, e) {
        return Object(Et.a)(t, e, 1);
      }
      var Ot = n('7o/Q');
      function Tt(t, e) {
        return function(n) {
          return n.lift(new kt(t, e));
        };
      }
      class kt {
        constructor(t, e) {
          (this.predicate = t), (this.thisArg = e);
        }
        call(t, e) {
          return e.subscribe(new At(t, this.predicate, this.thisArg));
        }
      }
      class At extends Ot.a {
        constructor(t, e, n) {
          super(t), (this.predicate = e), (this.thisArg = n), (this.count = 0);
        }
        _next(t) {
          let e;
          try {
            e = this.predicate.call(this.thisArg, t, this.count++);
          } catch (n) {
            return void this.destination.error(n);
          }
          e && this.destination.next(t);
        }
      }
      class It {}
      class Pt {}
      class Rt {
        constructor(t) {
          (this.normalizedNames = new Map()),
            (this.lazyUpdate = null),
            t
              ? (this.lazyInit =
                  'string' == typeof t
                    ? () => {
                        (this.headers = new Map()),
                          t.split('\n').forEach(t => {
                            const e = t.indexOf(':');
                            if (e > 0) {
                              const n = t.slice(0, e),
                                r = n.toLowerCase(),
                                s = t.slice(e + 1).trim();
                              this.maybeSetNormalizedName(n, r),
                                this.headers.has(r) ? this.headers.get(r).push(s) : this.headers.set(r, [s]);
                            }
                          });
                      }
                    : () => {
                        (this.headers = new Map()),
                          Object.keys(t).forEach(e => {
                            let n = t[e];
                            const r = e.toLowerCase();
                            'string' == typeof n && (n = [n]),
                              n.length > 0 && (this.headers.set(r, n), this.maybeSetNormalizedName(e, r));
                          });
                      })
              : (this.headers = new Map());
        }
        has(t) {
          return this.init(), this.headers.has(t.toLowerCase());
        }
        get(t) {
          this.init();
          const e = this.headers.get(t.toLowerCase());
          return e && e.length > 0 ? e[0] : null;
        }
        keys() {
          return this.init(), Array.from(this.normalizedNames.values());
        }
        getAll(t) {
          return this.init(), this.headers.get(t.toLowerCase()) || null;
        }
        append(t, e) {
          return this.clone({ name: t, value: e, op: 'a' });
        }
        set(t, e) {
          return this.clone({ name: t, value: e, op: 's' });
        }
        delete(t, e) {
          return this.clone({ name: t, value: e, op: 'd' });
        }
        maybeSetNormalizedName(t, e) {
          this.normalizedNames.has(e) || this.normalizedNames.set(e, t);
        }
        init() {
          this.lazyInit &&
            (this.lazyInit instanceof Rt ? this.copyFrom(this.lazyInit) : this.lazyInit(),
            (this.lazyInit = null),
            this.lazyUpdate && (this.lazyUpdate.forEach(t => this.applyUpdate(t)), (this.lazyUpdate = null)));
        }
        copyFrom(t) {
          t.init(),
            Array.from(t.headers.keys()).forEach(e => {
              this.headers.set(e, t.headers.get(e)), this.normalizedNames.set(e, t.normalizedNames.get(e));
            });
        }
        clone(t) {
          const e = new Rt();
          return (
            (e.lazyInit = this.lazyInit && this.lazyInit instanceof Rt ? this.lazyInit : this),
            (e.lazyUpdate = (this.lazyUpdate || []).concat([t])),
            e
          );
        }
        applyUpdate(t) {
          const e = t.name.toLowerCase();
          switch (t.op) {
            case 'a':
            case 's':
              let n = t.value;
              if (('string' == typeof n && (n = [n]), 0 === n.length)) return;
              this.maybeSetNormalizedName(t.name, e);
              const r = ('a' === t.op ? this.headers.get(e) : void 0) || [];
              r.push(...n), this.headers.set(e, r);
              break;
            case 'd':
              const s = t.value;
              if (s) {
                let t = this.headers.get(e);
                if (!t) return;
                (t = t.filter(t => -1 === s.indexOf(t))),
                  0 === t.length ? (this.headers.delete(e), this.normalizedNames.delete(e)) : this.headers.set(e, t);
              } else this.headers.delete(e), this.normalizedNames.delete(e);
          }
        }
        forEach(t) {
          this.init(),
            Array.from(this.normalizedNames.keys()).forEach(e => t(this.normalizedNames.get(e), this.headers.get(e)));
        }
      }
      class Dt {
        encodeKey(t) {
          return jt(t);
        }
        encodeValue(t) {
          return jt(t);
        }
        decodeKey(t) {
          return decodeURIComponent(t);
        }
        decodeValue(t) {
          return decodeURIComponent(t);
        }
      }
      function jt(t) {
        return encodeURIComponent(t)
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
      class Nt {
        constructor(t = {}) {
          if (((this.updates = null), (this.cloneFrom = null), (this.encoder = t.encoder || new Dt()), t.fromString)) {
            if (t.fromObject) throw new Error('Cannot specify both fromString and fromObject.');
            this.map = (function(t, e) {
              const n = new Map();
              return (
                t.length > 0 &&
                  t.split('&').forEach(t => {
                    const r = t.indexOf('='),
                      [s, i] =
                        -1 == r ? [e.decodeKey(t), ''] : [e.decodeKey(t.slice(0, r)), e.decodeValue(t.slice(r + 1))],
                      o = n.get(s) || [];
                    o.push(i), n.set(s, o);
                  }),
                n
              );
            })(t.fromString, this.encoder);
          } else
            t.fromObject
              ? ((this.map = new Map()),
                Object.keys(t.fromObject).forEach(e => {
                  const n = t.fromObject[e];
                  this.map.set(e, Array.isArray(n) ? n : [n]);
                }))
              : (this.map = null);
        }
        has(t) {
          return this.init(), this.map.has(t);
        }
        get(t) {
          this.init();
          const e = this.map.get(t);
          return e ? e[0] : null;
        }
        getAll(t) {
          return this.init(), this.map.get(t) || null;
        }
        keys() {
          return this.init(), Array.from(this.map.keys());
        }
        append(t, e) {
          return this.clone({ param: t, value: e, op: 'a' });
        }
        set(t, e) {
          return this.clone({ param: t, value: e, op: 's' });
        }
        delete(t, e) {
          return this.clone({ param: t, value: e, op: 'd' });
        }
        toString() {
          return (
            this.init(),
            this.keys()
              .map(t => {
                const e = this.encoder.encodeKey(t);
                return this.map
                  .get(t)
                  .map(t => e + '=' + this.encoder.encodeValue(t))
                  .join('&');
              })
              .filter(t => '' !== t)
              .join('&')
          );
        }
        clone(t) {
          const e = new Nt({ encoder: this.encoder });
          return (e.cloneFrom = this.cloneFrom || this), (e.updates = (this.updates || []).concat([t])), e;
        }
        init() {
          null === this.map && (this.map = new Map()),
            null !== this.cloneFrom &&
              (this.cloneFrom.init(),
              this.cloneFrom.keys().forEach(t => this.map.set(t, this.cloneFrom.map.get(t))),
              this.updates.forEach(t => {
                switch (t.op) {
                  case 'a':
                  case 's':
                    const e = ('a' === t.op ? this.map.get(t.param) : void 0) || [];
                    e.push(t.value), this.map.set(t.param, e);
                    break;
                  case 'd':
                    if (void 0 === t.value) {
                      this.map.delete(t.param);
                      break;
                    }
                    {
                      let e = this.map.get(t.param) || [];
                      const n = e.indexOf(t.value);
                      -1 !== n && e.splice(n, 1), e.length > 0 ? this.map.set(t.param, e) : this.map.delete(t.param);
                    }
                }
              }),
              (this.cloneFrom = this.updates = null));
        }
      }
      function Mt(t) {
        return 'undefined' != typeof ArrayBuffer && t instanceof ArrayBuffer;
      }
      function Lt(t) {
        return 'undefined' != typeof Blob && t instanceof Blob;
      }
      function Ft(t) {
        return 'undefined' != typeof FormData && t instanceof FormData;
      }
      class Vt {
        constructor(t, e, n, r) {
          let s;
          if (
            ((this.url = e),
            (this.body = null),
            (this.reportProgress = !1),
            (this.withCredentials = !1),
            (this.responseType = 'json'),
            (this.method = t.toUpperCase()),
            (function(t) {
              switch (t) {
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
            this.headers || (this.headers = new Rt()),
            this.params)
          ) {
            const t = this.params.toString();
            if (0 === t.length) this.urlWithParams = e;
            else {
              const n = e.indexOf('?');
              this.urlWithParams = e + (-1 === n ? '?' : n < e.length - 1 ? '&' : '') + t;
            }
          } else (this.params = new Nt()), (this.urlWithParams = e);
        }
        serializeBody() {
          return null === this.body
            ? null
            : Mt(this.body) || Lt(this.body) || Ft(this.body) || 'string' == typeof this.body
            ? this.body
            : this.body instanceof Nt
            ? this.body.toString()
            : 'object' == typeof this.body || 'boolean' == typeof this.body || Array.isArray(this.body)
            ? JSON.stringify(this.body)
            : this.body.toString();
        }
        detectContentTypeHeader() {
          return null === this.body || Ft(this.body)
            ? null
            : Lt(this.body)
            ? this.body.type || null
            : Mt(this.body)
            ? null
            : 'string' == typeof this.body
            ? 'text/plain'
            : this.body instanceof Nt
            ? 'application/x-www-form-urlencoded;charset=UTF-8'
            : 'object' == typeof this.body || 'number' == typeof this.body || Array.isArray(this.body)
            ? 'application/json'
            : null;
        }
        clone(t = {}) {
          const e = t.method || this.method,
            n = t.url || this.url,
            r = t.responseType || this.responseType,
            s = void 0 !== t.body ? t.body : this.body,
            i = void 0 !== t.withCredentials ? t.withCredentials : this.withCredentials,
            o = void 0 !== t.reportProgress ? t.reportProgress : this.reportProgress;
          let a = t.headers || this.headers,
            l = t.params || this.params;
          return (
            void 0 !== t.setHeaders && (a = Object.keys(t.setHeaders).reduce((e, n) => e.set(n, t.setHeaders[n]), a)),
            t.setParams && (l = Object.keys(t.setParams).reduce((e, n) => e.set(n, t.setParams[n]), l)),
            new Vt(e, n, s, { params: l, headers: a, reportProgress: o, responseType: r, withCredentials: i })
          );
        }
      }
      const Ht = (function() {
        var t = { Sent: 0, UploadProgress: 1, ResponseHeader: 2, DownloadProgress: 3, Response: 4, User: 5 };
        return (
          (t[t.Sent] = 'Sent'),
          (t[t.UploadProgress] = 'UploadProgress'),
          (t[t.ResponseHeader] = 'ResponseHeader'),
          (t[t.DownloadProgress] = 'DownloadProgress'),
          (t[t.Response] = 'Response'),
          (t[t.User] = 'User'),
          t
        );
      })();
      class Ut {
        constructor(t, e = 200, n = 'OK') {
          (this.headers = t.headers || new Rt()),
            (this.status = void 0 !== t.status ? t.status : e),
            (this.statusText = t.statusText || n),
            (this.url = t.url || null),
            (this.ok = this.status >= 200 && this.status < 300);
        }
      }
      class zt extends Ut {
        constructor(t = {}) {
          super(t), (this.type = Ht.ResponseHeader);
        }
        clone(t = {}) {
          return new zt({
            headers: t.headers || this.headers,
            status: void 0 !== t.status ? t.status : this.status,
            statusText: t.statusText || this.statusText,
            url: t.url || this.url || void 0
          });
        }
      }
      class $t extends Ut {
        constructor(t = {}) {
          super(t), (this.type = Ht.Response), (this.body = void 0 !== t.body ? t.body : null);
        }
        clone(t = {}) {
          return new $t({
            body: void 0 !== t.body ? t.body : this.body,
            headers: t.headers || this.headers,
            status: void 0 !== t.status ? t.status : this.status,
            statusText: t.statusText || this.statusText,
            url: t.url || this.url || void 0
          });
        }
      }
      class Bt extends Ut {
        constructor(t) {
          super(t, 0, 'Unknown Error'),
            (this.name = 'HttpErrorResponse'),
            (this.ok = !1),
            (this.message =
              this.status >= 200 && this.status < 300
                ? 'Http failure during parsing for ' + (t.url || '(unknown url)')
                : `Http failure response for ${t.url || '(unknown url)'}: ${t.status} ${t.statusText}`),
            (this.error = t.error || null);
        }
      }
      function qt(t, e) {
        return {
          body: e,
          headers: t.headers,
          observe: t.observe,
          params: t.params,
          reportProgress: t.reportProgress,
          responseType: t.responseType,
          withCredentials: t.withCredentials
        };
      }
      let Zt = (() => {
        class t {
          constructor(t) {
            this.handler = t;
          }
          request(t, e, n = {}) {
            let r;
            if (t instanceof Vt) r = t;
            else {
              let s = void 0;
              s = n.headers instanceof Rt ? n.headers : new Rt(n.headers);
              let i = void 0;
              n.params && (i = n.params instanceof Nt ? n.params : new Nt({ fromObject: n.params })),
                (r = new Vt(t, e, void 0 !== n.body ? n.body : null, {
                  headers: s,
                  params: i,
                  reportProgress: n.reportProgress,
                  responseType: n.responseType || 'json',
                  withCredentials: n.withCredentials
                }));
            }
            const s = St(r).pipe(xt(t => this.handler.handle(t)));
            if (t instanceof Vt || 'events' === n.observe) return s;
            const i = s.pipe(Tt(t => t instanceof $t));
            switch (n.observe || 'body') {
              case 'body':
                switch (r.responseType) {
                  case 'arraybuffer':
                    return i.pipe(
                      Object(l.a)(t => {
                        if (null !== t.body && !(t.body instanceof ArrayBuffer))
                          throw new Error('Response is not an ArrayBuffer.');
                        return t.body;
                      })
                    );
                  case 'blob':
                    return i.pipe(
                      Object(l.a)(t => {
                        if (null !== t.body && !(t.body instanceof Blob)) throw new Error('Response is not a Blob.');
                        return t.body;
                      })
                    );
                  case 'text':
                    return i.pipe(
                      Object(l.a)(t => {
                        if (null !== t.body && 'string' != typeof t.body) throw new Error('Response is not a string.');
                        return t.body;
                      })
                    );
                  case 'json':
                  default:
                    return i.pipe(Object(l.a)(t => t.body));
                }
              case 'response':
                return i;
              default:
                throw new Error(`Unreachable: unhandled observe type ${n.observe}}`);
            }
          }
          delete(t, e = {}) {
            return this.request('DELETE', t, e);
          }
          get(t, e = {}) {
            return this.request('GET', t, e);
          }
          head(t, e = {}) {
            return this.request('HEAD', t, e);
          }
          jsonp(t, e) {
            return this.request('JSONP', t, {
              params: new Nt().append(e, 'JSONP_CALLBACK'),
              observe: 'body',
              responseType: 'json'
            });
          }
          options(t, e = {}) {
            return this.request('OPTIONS', t, e);
          }
          patch(t, e, n = {}) {
            return this.request('PATCH', t, qt(n, e));
          }
          post(t, e, n = {}) {
            return this.request('POST', t, qt(n, e));
          }
          put(t, e, n = {}) {
            return this.request('PUT', t, qt(n, e));
          }
        }
        return (
          (t.ɵfac = function(e) {
            return new (e || t)(s.Zb(It));
          }),
          (t.ɵprov = s.Ib({ token: t, factory: t.ɵfac })),
          t
        );
      })();
      class Qt {
        constructor(t, e) {
          (this.next = t), (this.interceptor = e);
        }
        handle(t) {
          return this.interceptor.intercept(t, this.next);
        }
      }
      const Gt = new s.q('HTTP_INTERCEPTORS');
      let Wt = (() => {
        class t {
          intercept(t, e) {
            return e.handle(t);
          }
        }
        return (
          (t.ɵfac = function(e) {
            return new (e || t)();
          }),
          (t.ɵprov = s.Ib({ token: t, factory: t.ɵfac })),
          t
        );
      })();
      const Kt = /^\)\]\}',?\n/;
      class Jt {}
      let Yt = (() => {
          class t {
            constructor() {}
            build() {
              return new XMLHttpRequest();
            }
          }
          return (
            (t.ɵfac = function(e) {
              return new (e || t)();
            }),
            (t.ɵprov = s.Ib({ token: t, factory: t.ɵfac })),
            t
          );
        })(),
        Xt = (() => {
          class t {
            constructor(t) {
              this.xhrFactory = t;
            }
            handle(t) {
              if ('JSONP' === t.method)
                throw new Error('Attempted to construct Jsonp request without JsonpClientModule installed.');
              return new o.a(e => {
                const n = this.xhrFactory.build();
                if (
                  (n.open(t.method, t.urlWithParams),
                  t.withCredentials && (n.withCredentials = !0),
                  t.headers.forEach((t, e) => n.setRequestHeader(t, e.join(','))),
                  t.headers.has('Accept') || n.setRequestHeader('Accept', 'application/json, text/plain, */*'),
                  !t.headers.has('Content-Type'))
                ) {
                  const e = t.detectContentTypeHeader();
                  null !== e && n.setRequestHeader('Content-Type', e);
                }
                if (t.responseType) {
                  const e = t.responseType.toLowerCase();
                  n.responseType = 'json' !== e ? e : 'text';
                }
                const r = t.serializeBody();
                let s = null;
                const i = () => {
                    if (null !== s) return s;
                    const e = 1223 === n.status ? 204 : n.status,
                      r = n.statusText || 'OK',
                      i = new Rt(n.getAllResponseHeaders()),
                      o =
                        (function(t) {
                          return 'responseURL' in t && t.responseURL
                            ? t.responseURL
                            : /^X-Request-URL:/m.test(t.getAllResponseHeaders())
                            ? t.getResponseHeader('X-Request-URL')
                            : null;
                        })(n) || t.url;
                    return (s = new zt({ headers: i, status: e, statusText: r, url: o })), s;
                  },
                  o = () => {
                    let { headers: r, status: s, statusText: o, url: a } = i(),
                      l = null;
                    204 !== s && (l = void 0 === n.response ? n.responseText : n.response),
                      0 === s && (s = l ? 200 : 0);
                    let c = s >= 200 && s < 300;
                    if ('json' === t.responseType && 'string' == typeof l) {
                      const t = l;
                      l = l.replace(Kt, '');
                      try {
                        l = '' !== l ? JSON.parse(l) : null;
                      } catch (u) {
                        (l = t), c && ((c = !1), (l = { error: u, text: l }));
                      }
                    }
                    c
                      ? (e.next(new $t({ body: l, headers: r, status: s, statusText: o, url: a || void 0 })),
                        e.complete())
                      : e.error(new Bt({ error: l, headers: r, status: s, statusText: o, url: a || void 0 }));
                  },
                  a = t => {
                    const { url: r } = i(),
                      s = new Bt({
                        error: t,
                        status: n.status || 0,
                        statusText: n.statusText || 'Unknown Error',
                        url: r || void 0
                      });
                    e.error(s);
                  };
                let l = !1;
                const c = r => {
                    l || (e.next(i()), (l = !0));
                    let s = { type: Ht.DownloadProgress, loaded: r.loaded };
                    r.lengthComputable && (s.total = r.total),
                      'text' === t.responseType && n.responseText && (s.partialText = n.responseText),
                      e.next(s);
                  },
                  u = t => {
                    let n = { type: Ht.UploadProgress, loaded: t.loaded };
                    t.lengthComputable && (n.total = t.total), e.next(n);
                  };
                return (
                  n.addEventListener('load', o),
                  n.addEventListener('error', a),
                  t.reportProgress &&
                    (n.addEventListener('progress', c),
                    null !== r && n.upload && n.upload.addEventListener('progress', u)),
                  n.send(r),
                  e.next({ type: Ht.Sent }),
                  () => {
                    n.removeEventListener('error', a),
                      n.removeEventListener('load', o),
                      t.reportProgress &&
                        (n.removeEventListener('progress', c),
                        null !== r && n.upload && n.upload.removeEventListener('progress', u)),
                      n.abort();
                  }
                );
              });
            }
          }
          return (
            (t.ɵfac = function(e) {
              return new (e || t)(s.Zb(Jt));
            }),
            (t.ɵprov = s.Ib({ token: t, factory: t.ɵfac })),
            t
          );
        })();
      const te = new s.q('XSRF_COOKIE_NAME'),
        ee = new s.q('XSRF_HEADER_NAME');
      class ne {}
      let re = (() => {
          class t {
            constructor(t, e, n) {
              (this.doc = t),
                (this.platform = e),
                (this.cookieName = n),
                (this.lastCookieString = ''),
                (this.lastToken = null),
                (this.parseCount = 0);
            }
            getToken() {
              if ('server' === this.platform) return null;
              const t = this.doc.cookie || '';
              return (
                t !== this.lastCookieString &&
                  (this.parseCount++, (this.lastToken = Object(i.z)(t, this.cookieName)), (this.lastCookieString = t)),
                this.lastToken
              );
            }
          }
          return (
            (t.ɵfac = function(e) {
              return new (e || t)(s.Zb(i.c), s.Zb(s.B), s.Zb(te));
            }),
            (t.ɵprov = s.Ib({ token: t, factory: t.ɵfac })),
            t
          );
        })(),
        se = (() => {
          class t {
            constructor(t, e) {
              (this.tokenService = t), (this.headerName = e);
            }
            intercept(t, e) {
              const n = t.url.toLowerCase();
              if ('GET' === t.method || 'HEAD' === t.method || n.startsWith('http://') || n.startsWith('https://'))
                return e.handle(t);
              const r = this.tokenService.getToken();
              return (
                null === r ||
                  t.headers.has(this.headerName) ||
                  (t = t.clone({ headers: t.headers.set(this.headerName, r) })),
                e.handle(t)
              );
            }
          }
          return (
            (t.ɵfac = function(e) {
              return new (e || t)(s.Zb(ne), s.Zb(ee));
            }),
            (t.ɵprov = s.Ib({ token: t, factory: t.ɵfac })),
            t
          );
        })(),
        ie = (() => {
          class t {
            constructor(t, e) {
              (this.backend = t), (this.injector = e), (this.chain = null);
            }
            handle(t) {
              if (null === this.chain) {
                const t = this.injector.get(Gt, []);
                this.chain = t.reduceRight((t, e) => new Qt(t, e), this.backend);
              }
              return this.chain.handle(t);
            }
          }
          return (
            (t.ɵfac = function(e) {
              return new (e || t)(s.Zb(Pt), s.Zb(s.r));
            }),
            (t.ɵprov = s.Ib({ token: t, factory: t.ɵfac })),
            t
          );
        })(),
        oe = (() => {
          class t {
            static disable() {
              return { ngModule: t, providers: [{ provide: se, useClass: Wt }] };
            }
            static withOptions(e = {}) {
              return {
                ngModule: t,
                providers: [
                  e.cookieName ? { provide: te, useValue: e.cookieName } : [],
                  e.headerName ? { provide: ee, useValue: e.headerName } : []
                ]
              };
            }
          }
          return (
            (t.ɵmod = s.Kb({ type: t })),
            (t.ɵinj = s.Jb({
              factory: function(e) {
                return new (e || t)();
              },
              providers: [
                se,
                { provide: Gt, useExisting: se, multi: !0 },
                { provide: ne, useClass: re },
                { provide: te, useValue: 'XSRF-TOKEN' },
                { provide: ee, useValue: 'X-XSRF-TOKEN' }
              ]
            })),
            t
          );
        })(),
        ae = (() => {
          class t {}
          return (
            (t.ɵmod = s.Kb({ type: t })),
            (t.ɵinj = s.Jb({
              factory: function(e) {
                return new (e || t)();
              },
              providers: [
                Zt,
                { provide: It, useClass: ie },
                Xt,
                { provide: Pt, useExisting: Xt },
                Yt,
                { provide: Jt, useExisting: Yt }
              ],
              imports: [[oe.withOptions({ cookieName: 'XSRF-TOKEN', headerName: 'X-XSRF-TOKEN' })]]
            })),
            t
          );
        })();
      var le = n('VRyK'),
        ce = n('bHdf');
      function ue() {
        return Object(ce.a)(1);
      }
      function he(...t) {
        return ue()(St(...t));
      }
      const de = (() => {
          function t() {
            return (
              Error.call(this), (this.message = 'argument out of range'), (this.name = 'ArgumentOutOfRangeError'), this
            );
          }
          return (t.prototype = Object.create(Error.prototype)), t;
        })(),
        pe = new o.a(t => t.complete());
      function fe(t) {
        return t
          ? (function(t) {
              return new o.a(e => t.schedule(() => e.complete()));
            })(t)
          : pe;
      }
      function ge(t) {
        return e => (0 === t ? fe() : e.lift(new me(t)));
      }
      class me {
        constructor(t) {
          if (((this.total = t), this.total < 0)) throw new de();
        }
        call(t, e) {
          return e.subscribe(new ye(t, this.total));
        }
      }
      class ye extends Ot.a {
        constructor(t, e) {
          super(t), (this.total = e), (this.count = 0);
        }
        _next(t) {
          const e = this.total,
            n = ++this.count;
          n <= e && (this.destination.next(t), n === e && (this.destination.complete(), this.unsubscribe()));
        }
      }
      var be = n('w1tV');
      function _e(t, e) {
        let n = !1;
        return (
          arguments.length >= 2 && (n = !0),
          function(r) {
            return r.lift(new ve(t, e, n));
          }
        );
      }
      class ve {
        constructor(t, e, n = !1) {
          (this.accumulator = t), (this.seed = e), (this.hasSeed = n);
        }
        call(t, e) {
          return e.subscribe(new we(t, this.accumulator, this.seed, this.hasSeed));
        }
      }
      class we extends Ot.a {
        constructor(t, e, n, r) {
          super(t), (this.accumulator = e), (this._seed = n), (this.hasSeed = r), (this.index = 0);
        }
        get seed() {
          return this._seed;
        }
        set seed(t) {
          (this.hasSeed = !0), (this._seed = t);
        }
        _next(t) {
          if (this.hasSeed) return this._tryNext(t);
          (this.seed = t), this.destination.next(t);
        }
        _tryNext(t) {
          const e = this.index++;
          let n;
          try {
            n = this.accumulator(this.seed, t, e);
          } catch (r) {
            this.destination.error(r);
          }
          (this.seed = n), this.destination.next(n);
        }
      }
      function Ce(t) {
        return function(e) {
          return 0 === t ? fe() : e.lift(new Se(t));
        };
      }
      class Se {
        constructor(t) {
          if (((this.total = t), this.total < 0)) throw new de();
        }
        call(t, e) {
          return e.subscribe(new Ee(t, this.total));
        }
      }
      class Ee extends Ot.a {
        constructor(t, e) {
          super(t), (this.total = e), (this.ring = new Array()), (this.count = 0);
        }
        _next(t) {
          const e = this.ring,
            n = this.total,
            r = this.count++;
          e.length < n ? e.push(t) : (e[r % n] = t);
        }
        _complete() {
          const t = this.destination;
          let e = this.count;
          if (e > 0) {
            const n = this.count >= this.total ? this.total : this.count,
              r = this.ring;
            for (let s = 0; s < n; s++) {
              const s = e++ % n;
              t.next(r[s]);
            }
          }
          t.complete();
        }
      }
      function xe(t = null) {
        return e => e.lift(new Oe(t));
      }
      class Oe {
        constructor(t) {
          this.defaultValue = t;
        }
        call(t, e) {
          return e.subscribe(new Te(t, this.defaultValue));
        }
      }
      class Te extends Ot.a {
        constructor(t, e) {
          super(t), (this.defaultValue = e), (this.isEmpty = !0);
        }
        _next(t) {
          (this.isEmpty = !1), this.destination.next(t);
        }
        _complete() {
          this.isEmpty && this.destination.next(this.defaultValue), this.destination.complete();
        }
      }
      var ke = n('mCNh');
      function Ae(t, e) {
        return arguments.length >= 2
          ? function(n) {
              return Object(ke.a)(_e(t, e), Ce(1), xe(e))(n);
            }
          : function(e) {
              return Object(ke.a)(
                _e((e, n, r) => t(e, n, r + 1)),
                Ce(1)
              )(e);
            };
      }
      function Ie(t, e, n) {
        return 0 === n ? [e] : (t.push(e), t);
      }
      var Pe = n('l7GE'),
        Re = n('51Dv'),
        De = n('ZUHj');
      function je(t, e) {
        return 'function' == typeof e
          ? n => n.pipe(je((n, r) => Object(u.a)(t(n, r)).pipe(Object(l.a)((t, s) => e(n, t, r, s)))))
          : e => e.lift(new Ne(t));
      }
      class Ne {
        constructor(t) {
          this.project = t;
        }
        call(t, e) {
          return e.subscribe(new Me(t, this.project));
        }
      }
      class Me extends Pe.a {
        constructor(t, e) {
          super(t), (this.project = e), (this.index = 0);
        }
        _next(t) {
          let e;
          const n = this.index++;
          try {
            e = this.project(t, n);
          } catch (r) {
            return void this.destination.error(r);
          }
          this._innerSub(e, t, n);
        }
        _innerSub(t, e, n) {
          const r = this.innerSubscription;
          r && r.unsubscribe();
          const s = new Re.a(this, e, n),
            i = this.destination;
          i.add(s),
            (this.innerSubscription = Object(De.a)(this, t, void 0, void 0, s)),
            this.innerSubscription !== s && i.add(this.innerSubscription);
        }
        _complete() {
          const { innerSubscription: t } = this;
          (t && !t.closed) || super._complete(), this.unsubscribe();
        }
        _unsubscribe() {
          this.innerSubscription = null;
        }
        notifyComplete(t) {
          this.destination.remove(t), (this.innerSubscription = null), this.isStopped && super._complete();
        }
        notifyNext(t, e, n, r, s) {
          this.destination.next(e);
        }
      }
      class Le {}
      let Fe = (() => {
        class t extends Le {
          getTranslation(t) {
            return St({});
          }
        }
        return (
          (t.ɵfac = function(e) {
            return Ve(e || t);
          }),
          (t.ɵprov = s.Ib({ token: t, factory: t.ɵfac })),
          t
        );
      })();
      const Ve = s.Tb(Fe);
      class He {}
      let Ue = (() => {
        class t {
          handle(t) {
            return t.key;
          }
        }
        return (
          (t.ɵfac = function(e) {
            return new (e || t)();
          }),
          (t.ɵprov = s.Ib({ token: t, factory: t.ɵfac })),
          t
        );
      })();
      class ze {}
      let $e = (() => {
        class t extends ze {
          compile(t, e) {
            return t;
          }
          compileTranslations(t, e) {
            return t;
          }
        }
        return (
          (t.ɵfac = function(e) {
            return Be(e || t);
          }),
          (t.ɵprov = s.Ib({ token: t, factory: t.ɵfac })),
          t
        );
      })();
      const Be = s.Tb($e);
      function qe(t) {
        return null != t;
      }
      function Ze(t) {
        return t && 'object' == typeof t && !Array.isArray(t);
      }
      class Qe {}
      let Ge = (() => {
        class t extends Qe {
          constructor() {
            super(...arguments), (this.templateMatcher = /{{\s?([^{}\s]*)\s?}}/g);
          }
          interpolate(t, e) {
            let n;
            return (
              (n =
                'string' == typeof t
                  ? this.interpolateString(t, e)
                  : 'function' == typeof t
                  ? this.interpolateFunction(t, e)
                  : t),
              n
            );
          }
          getValue(t, e) {
            let n = e.split('.');
            e = '';
            do {
              (e += n.shift()),
                !qe(t) || !qe(t[e]) || ('object' != typeof t[e] && n.length)
                  ? n.length
                    ? (e += '.')
                    : (t = void 0)
                  : ((t = t[e]), (e = ''));
            } while (n.length);
            return t;
          }
          interpolateFunction(t, e) {
            return t(e);
          }
          interpolateString(t, e) {
            return e
              ? t.replace(this.templateMatcher, (t, n) => {
                  let r = this.getValue(e, n);
                  return qe(r) ? r : t;
                })
              : t;
          }
        }
        return (
          (t.ɵfac = function(e) {
            return We(e || t);
          }),
          (t.ɵprov = s.Ib({ token: t, factory: t.ɵfac })),
          t
        );
      })();
      const We = s.Tb(Ge);
      class Ke {
        constructor() {
          (this.currentLang = this.defaultLang),
            (this.translations = {}),
            (this.langs = []),
            (this.onTranslationChange = new s.n()),
            (this.onLangChange = new s.n()),
            (this.onDefaultLangChange = new s.n());
        }
      }
      const Je = new s.q('USE_STORE'),
        Ye = new s.q('USE_DEFAULT_LANG');
      let Xe = (() => {
          class t {
            constructor(t, e, n, r, i, o = !0, a = !1) {
              (this.store = t),
                (this.currentLoader = e),
                (this.compiler = n),
                (this.parser = r),
                (this.missingTranslationHandler = i),
                (this.useDefaultLang = o),
                (this.isolate = a),
                (this.pending = !1),
                (this._onTranslationChange = new s.n()),
                (this._onLangChange = new s.n()),
                (this._onDefaultLangChange = new s.n()),
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
            set defaultLang(t) {
              this.isolate ? (this._defaultLang = t) : (this.store.defaultLang = t);
            }
            get currentLang() {
              return this.isolate ? this._currentLang : this.store.currentLang;
            }
            set currentLang(t) {
              this.isolate ? (this._currentLang = t) : (this.store.currentLang = t);
            }
            get langs() {
              return this.isolate ? this._langs : this.store.langs;
            }
            set langs(t) {
              this.isolate ? (this._langs = t) : (this.store.langs = t);
            }
            get translations() {
              return this.isolate ? this._translations : this.store.translations;
            }
            set translations(t) {
              this.isolate ? (this._translations = t) : (this.store.translations = t);
            }
            setDefaultLang(t) {
              if (t === this.defaultLang) return;
              let e = this.retrieveTranslations(t);
              void 0 !== e
                ? (this.defaultLang || (this.defaultLang = t),
                  e.pipe(ge(1)).subscribe(e => {
                    this.changeDefaultLang(t);
                  }))
                : this.changeDefaultLang(t);
            }
            getDefaultLang() {
              return this.defaultLang;
            }
            use(t) {
              if (t === this.currentLang) return St(this.translations[t]);
              let e = this.retrieveTranslations(t);
              return void 0 !== e
                ? (this.currentLang || (this.currentLang = t),
                  e.pipe(ge(1)).subscribe(e => {
                    this.changeLang(t);
                  }),
                  e)
                : (this.changeLang(t), St(this.translations[t]));
            }
            retrieveTranslations(t) {
              let e;
              return (
                void 0 === this.translations[t] &&
                  ((this._translationRequests[t] = this._translationRequests[t] || this.getTranslation(t)),
                  (e = this._translationRequests[t])),
                e
              );
            }
            getTranslation(t) {
              this.pending = !0;
              const e = this.currentLoader.getTranslation(t).pipe(Object(be.a)());
              return (
                (this.loadingTranslations = e.pipe(
                  ge(1),
                  Object(l.a)(e => this.compiler.compileTranslations(e, t)),
                  Object(be.a)()
                )),
                this.loadingTranslations.subscribe(
                  e => {
                    (this.translations[t] = e), this.updateLangs(), (this.pending = !1);
                  },
                  t => {
                    this.pending = !1;
                  }
                ),
                e
              );
            }
            setTranslation(t, e, n = !1) {
              (e = this.compiler.compileTranslations(e, t)),
                (this.translations[t] =
                  n && this.translations[t]
                    ? (function t(e, n) {
                        let r = Object.assign({}, e);
                        return (
                          Ze(e) &&
                            Ze(n) &&
                            Object.keys(n).forEach(s => {
                              Ze(n[s])
                                ? s in e
                                  ? (r[s] = t(e[s], n[s]))
                                  : Object.assign(r, { [s]: n[s] })
                                : Object.assign(r, { [s]: n[s] });
                            }),
                          r
                        );
                      })(this.translations[t], e)
                    : e),
                this.updateLangs(),
                this.onTranslationChange.emit({ lang: t, translations: this.translations[t] });
            }
            getLangs() {
              return this.langs;
            }
            addLangs(t) {
              t.forEach(t => {
                -1 === this.langs.indexOf(t) && this.langs.push(t);
              });
            }
            updateLangs() {
              this.addLangs(Object.keys(this.translations));
            }
            getParsedResult(t, e, n) {
              let r;
              if (e instanceof Array) {
                let r = {},
                  s = !1;
                for (let i of e)
                  (r[i] = this.getParsedResult(t, i, n)), 'function' == typeof r[i].subscribe && (s = !0);
                if (s) {
                  let t;
                  for (let n of e) {
                    let e = 'function' == typeof r[n].subscribe ? r[n] : St(r[n]);
                    t = void 0 === t ? e : Object(le.a)(t, e);
                  }
                  return t.pipe(
                    Ae(Ie, []),
                    Object(l.a)(t => {
                      let n = {};
                      return (
                        t.forEach((t, r) => {
                          n[e[r]] = t;
                        }),
                        n
                      );
                    })
                  );
                }
                return r;
              }
              if (
                (t && (r = this.parser.interpolate(this.parser.getValue(t, e), n)),
                void 0 === r &&
                  this.defaultLang &&
                  this.defaultLang !== this.currentLang &&
                  this.useDefaultLang &&
                  (r = this.parser.interpolate(this.parser.getValue(this.translations[this.defaultLang], e), n)),
                void 0 === r)
              ) {
                let t = { key: e, translateService: this };
                void 0 !== n && (t.interpolateParams = n), (r = this.missingTranslationHandler.handle(t));
              }
              return void 0 !== r ? r : e;
            }
            get(t, e) {
              if (!qe(t) || !t.length) throw new Error('Parameter "key" required');
              if (this.pending)
                return o.a.create(n => {
                  let r = t => {
                      n.next(t), n.complete();
                    },
                    s = t => {
                      n.error(t);
                    };
                  this.loadingTranslations.subscribe(n => {
                    'function' == typeof (n = this.getParsedResult(n, t, e)).subscribe ? n.subscribe(r, s) : r(n);
                  }, s);
                });
              {
                let n = this.getParsedResult(this.translations[this.currentLang], t, e);
                return 'function' == typeof n.subscribe ? n : St(n);
              }
            }
            stream(t, e) {
              if (!qe(t) || !t.length) throw new Error('Parameter "key" required');
              return he(
                this.get(t, e),
                this.onLangChange.pipe(
                  je(n => {
                    const r = this.getParsedResult(n.translations, t, e);
                    return 'function' == typeof r.subscribe ? r : St(r);
                  })
                )
              );
            }
            instant(t, e) {
              if (!qe(t) || !t.length) throw new Error('Parameter "key" required');
              let n = this.getParsedResult(this.translations[this.currentLang], t, e);
              if (void 0 !== n.subscribe) {
                if (t instanceof Array) {
                  let e = {};
                  return (
                    t.forEach((n, r) => {
                      e[t[r]] = t[r];
                    }),
                    e
                  );
                }
                return t;
              }
              return n;
            }
            set(t, e, n = this.currentLang) {
              (this.translations[n][t] = this.compiler.compile(e, n)),
                this.updateLangs(),
                this.onTranslationChange.emit({ lang: n, translations: this.translations[n] });
            }
            changeLang(t) {
              (this.currentLang = t),
                this.onLangChange.emit({ lang: t, translations: this.translations[t] }),
                this.defaultLang || this.changeDefaultLang(t);
            }
            changeDefaultLang(t) {
              (this.defaultLang = t), this.onDefaultLangChange.emit({ lang: t, translations: this.translations[t] });
            }
            reloadLang(t) {
              return this.resetLang(t), this.getTranslation(t);
            }
            resetLang(t) {
              (this._translationRequests[t] = void 0), (this.translations[t] = void 0);
            }
            getBrowserLang() {
              if ('undefined' == typeof window || void 0 === window.navigator) return;
              let t = window.navigator.languages ? window.navigator.languages[0] : null;
              return (
                (t =
                  t || window.navigator.language || window.navigator.browserLanguage || window.navigator.userLanguage),
                -1 !== t.indexOf('-') && (t = t.split('-')[0]),
                -1 !== t.indexOf('_') && (t = t.split('_')[0]),
                t
              );
            }
            getBrowserCultureLang() {
              if ('undefined' == typeof window || void 0 === window.navigator) return;
              let t = window.navigator.languages ? window.navigator.languages[0] : null;
              return (
                (t =
                  t || window.navigator.language || window.navigator.browserLanguage || window.navigator.userLanguage),
                t
              );
            }
          }
          return (
            (t.ɵfac = function(e) {
              return new (e || t)(s.Zb(Ke), s.Zb(Le), s.Zb(ze), s.Zb(Qe), s.Zb(He), s.Zb(Ye), s.Zb(Je));
            }),
            (t.ɵprov = s.Ib({ token: t, factory: t.ɵfac })),
            t
          );
        })(),
        tn = (() => {
          class t {
            constructor(t, e, n) {
              (this.translateService = t),
                (this.element = e),
                (this._ref = n),
                this.onTranslationChangeSub ||
                  (this.onTranslationChangeSub = this.translateService.onTranslationChange.subscribe(t => {
                    t.lang === this.translateService.currentLang && this.checkNodes(!0, t.translations);
                  })),
                this.onLangChangeSub ||
                  (this.onLangChangeSub = this.translateService.onLangChange.subscribe(t => {
                    this.checkNodes(!0, t.translations);
                  })),
                this.onDefaultLangChangeSub ||
                  (this.onDefaultLangChangeSub = this.translateService.onDefaultLangChange.subscribe(t => {
                    this.checkNodes(!0);
                  }));
            }
            set translate(t) {
              t && ((this.key = t), this.checkNodes());
            }
            set translateParams(t) {
              (function t(e, n) {
                if (e === n) return !0;
                if (null === e || null === n) return !1;
                if (e != e && n != n) return !0;
                let r,
                  s,
                  i,
                  o = typeof e;
                if (o == typeof n && 'object' == o) {
                  if (!Array.isArray(e)) {
                    if (Array.isArray(n)) return !1;
                    for (s in ((i = Object.create(null)), e)) {
                      if (!t(e[s], n[s])) return !1;
                      i[s] = !0;
                    }
                    for (s in n) if (!(s in i) && void 0 !== n[s]) return !1;
                    return !0;
                  }
                  if (!Array.isArray(n)) return !1;
                  if ((r = e.length) == n.length) {
                    for (s = 0; s < r; s++) if (!t(e[s], n[s])) return !1;
                    return !0;
                  }
                }
                return !1;
              })(this.currentParams, t) || ((this.currentParams = t), this.checkNodes(!0));
            }
            ngAfterViewChecked() {
              this.checkNodes();
            }
            checkNodes(t = !1, e) {
              let n = this.element.nativeElement.childNodes;
              n.length ||
                (this.setContent(this.element.nativeElement, this.key), (n = this.element.nativeElement.childNodes));
              for (let r = 0; r < n.length; ++r) {
                let s = n[r];
                if (3 === s.nodeType) {
                  let n;
                  if (this.key) (n = this.key), t && (s.lastKey = null);
                  else {
                    let e = this.getContent(s),
                      r = e.trim();
                    r.length &&
                      (e !== s.currentValue
                        ? ((n = r), (s.originalContent = this.getContent(s)))
                        : s.originalContent && t && ((s.lastKey = null), (n = s.originalContent.trim())));
                  }
                  this.updateValue(n, s, e);
                }
              }
            }
            updateValue(t, e, n) {
              if (t) {
                if (e.lastKey === t && this.lastParams === this.currentParams) return;
                this.lastParams = this.currentParams;
                let r = n => {
                  n !== t && (e.lastKey = t),
                    e.originalContent || (e.originalContent = this.getContent(e)),
                    (e.currentValue = qe(n) ? n : e.originalContent || t),
                    this.setContent(e, this.key ? e.currentValue : e.originalContent.replace(t, e.currentValue)),
                    this._ref.markForCheck();
                };
                if (qe(n)) {
                  let e = this.translateService.getParsedResult(n, t, this.currentParams);
                  'function' == typeof e.subscribe ? e.subscribe(r) : r(e);
                } else this.translateService.get(t, this.currentParams).subscribe(r);
              }
            }
            getContent(t) {
              return qe(t.textContent) ? t.textContent : t.data;
            }
            setContent(t, e) {
              qe(t.textContent) ? (t.textContent = e) : (t.data = e);
            }
            ngOnDestroy() {
              this.onLangChangeSub && this.onLangChangeSub.unsubscribe(),
                this.onDefaultLangChangeSub && this.onDefaultLangChangeSub.unsubscribe(),
                this.onTranslationChangeSub && this.onTranslationChangeSub.unsubscribe();
            }
          }
          return (
            (t.ɵfac = function(e) {
              return new (e || t)(s.Mb(Xe), s.Mb(s.l), s.Mb(s.h));
            }),
            (t.ɵdir = s.Hb({
              type: t,
              selectors: [
                ['', 'translate', ''],
                ['', 'ngx-translate', '']
              ],
              inputs: { translate: 'translate', translateParams: 'translateParams' }
            })),
            t
          );
        })(),
        en = (() => {
          class t {
            static forRoot(e = {}) {
              return {
                ngModule: t,
                providers: [
                  e.loader || { provide: Le, useClass: Fe },
                  e.compiler || { provide: ze, useClass: $e },
                  e.parser || { provide: Qe, useClass: Ge },
                  e.missingTranslationHandler || { provide: He, useClass: Ue },
                  Ke,
                  { provide: Je, useValue: e.isolate },
                  { provide: Ye, useValue: e.useDefaultLang },
                  Xe
                ]
              };
            }
            static forChild(e = {}) {
              return {
                ngModule: t,
                providers: [
                  e.loader || { provide: Le, useClass: Fe },
                  e.compiler || { provide: ze, useClass: $e },
                  e.parser || { provide: Qe, useClass: Ge },
                  e.missingTranslationHandler || { provide: He, useClass: Ue },
                  { provide: Je, useValue: e.isolate },
                  { provide: Ye, useValue: e.useDefaultLang },
                  Xe
                ]
              };
            }
          }
          return (
            (t.ɵmod = s.Kb({ type: t })),
            (t.ɵinj = s.Jb({
              factory: function(e) {
                return new (e || t)();
              }
            })),
            t
          );
        })();
      var nn = n('XNiG'),
        rn = n('9ppp');
      class sn extends nn.a {
        constructor(t) {
          super(), (this._value = t);
        }
        get value() {
          return this.getValue();
        }
        _subscribe(t) {
          const e = super._subscribe(t);
          return e && !e.closed && t.next(this._value), e;
        }
        getValue() {
          if (this.hasError) throw this.thrownError;
          if (this.closed) throw new rn.a();
          return this._value;
        }
        next(t) {
          super.next((this._value = t));
        }
      }
      const on = {};
      class an {
        constructor(t) {
          this.resultSelector = t;
        }
        call(t, e) {
          return e.subscribe(new ln(t, this.resultSelector));
        }
      }
      class ln extends Pe.a {
        constructor(t, e) {
          super(t), (this.resultSelector = e), (this.active = 0), (this.values = []), (this.observables = []);
        }
        _next(t) {
          this.values.push(on), this.observables.push(t);
        }
        _complete() {
          const t = this.observables,
            e = t.length;
          if (0 === e) this.destination.complete();
          else {
            (this.active = e), (this.toRespond = e);
            for (let n = 0; n < e; n++) {
              const e = t[n];
              this.add(Object(De.a)(this, e, e, n));
            }
          }
        }
        notifyComplete(t) {
          0 == (this.active -= 1) && this.destination.complete();
        }
        notifyNext(t, e, n, r, s) {
          const i = this.values,
            o = this.toRespond ? (i[n] === on ? --this.toRespond : this.toRespond) : 0;
          (i[n] = e), 0 === o && (this.resultSelector ? this._tryResultSelector(i) : this.destination.next(i.slice()));
        }
        _tryResultSelector(t) {
          let e;
          try {
            e = this.resultSelector.apply(this, t);
          } catch (n) {
            return void this.destination.error(n);
          }
          this.destination.next(e);
        }
      }
      var cn = n('quSY');
      function un() {}
      var hn = n('n6bG');
      function dn(t, e, n, r) {
        return (
          Object(hn.a)(n) && ((r = n), (n = void 0)),
          r
            ? dn(t, e, n).pipe(Object(l.a)(t => (Object(a.a)(t) ? r(...t) : r(t))))
            : new o.a(r => {
                !(function t(e, n, r, s, i) {
                  let o;
                  if (
                    (function(t) {
                      return t && 'function' == typeof t.addEventListener && 'function' == typeof t.removeEventListener;
                    })(e)
                  ) {
                    const t = e;
                    e.addEventListener(n, r, i), (o = () => t.removeEventListener(n, r, i));
                  } else if (
                    (function(t) {
                      return t && 'function' == typeof t.on && 'function' == typeof t.off;
                    })(e)
                  ) {
                    const t = e;
                    e.on(n, r), (o = () => t.off(n, r));
                  } else if (
                    (function(t) {
                      return t && 'function' == typeof t.addListener && 'function' == typeof t.removeListener;
                    })(e)
                  ) {
                    const t = e;
                    e.addListener(n, r), (o = () => t.removeListener(n, r));
                  } else {
                    if (!e || !e.length) throw new TypeError('Invalid event target');
                    for (let o = 0, a = e.length; o < a; o++) t(e[o], n, r, s, i);
                  }
                  s.add(o);
                })(
                  t,
                  e,
                  function(t) {
                    r.next(arguments.length > 1 ? Array.prototype.slice.call(arguments) : t);
                  },
                  r,
                  n
                );
              })
        );
      }
      function pn(t) {
        return e => e.lift(new fn(t));
      }
      class fn {
        constructor(t) {
          this.notifier = t;
        }
        call(t, e) {
          const n = new gn(t),
            r = Object(De.a)(n, this.notifier);
          return r && !n.seenValue ? (n.add(r), e.subscribe(n)) : n;
        }
      }
      class gn extends Pe.a {
        constructor(t) {
          super(t), (this.seenValue = !1);
        }
        notifyNext(t, e, n, r, s) {
          (this.seenValue = !0), this.complete();
        }
        notifyComplete() {}
      }
      function mn(t, e, n) {
        return function(r) {
          return r.lift(new yn(t, e, n));
        };
      }
      class yn {
        constructor(t, e, n) {
          (this.nextOrObserver = t), (this.error = e), (this.complete = n);
        }
        call(t, e) {
          return e.subscribe(new bn(t, this.nextOrObserver, this.error, this.complete));
        }
      }
      class bn extends Ot.a {
        constructor(t, e, n, r) {
          super(t),
            (this._tapNext = un),
            (this._tapError = un),
            (this._tapComplete = un),
            (this._tapError = n || un),
            (this._tapComplete = r || un),
            Object(hn.a)(e)
              ? ((this._context = this), (this._tapNext = e))
              : e &&
                ((this._context = e),
                (this._tapNext = e.next || un),
                (this._tapError = e.error || un),
                (this._tapComplete = e.complete || un));
        }
        _next(t) {
          try {
            this._tapNext.call(this._context, t);
          } catch (e) {
            return void this.destination.error(e);
          }
          this.destination.next(t);
        }
        _error(t) {
          try {
            this._tapError.call(this._context, t);
          } catch (t) {
            return void this.destination.error(t);
          }
          this.destination.error(t);
        }
        _complete() {
          try {
            this._tapComplete.call(this._context);
          } catch (t) {
            return void this.destination.error(t);
          }
          return this.destination.complete();
        }
      }
      function _n(...t) {
        return e => {
          let n;
          return 'function' == typeof t[t.length - 1] && (n = t.pop()), e.lift(new vn(t, n));
        };
      }
      class vn {
        constructor(t, e) {
          (this.observables = t), (this.project = e);
        }
        call(t, e) {
          return e.subscribe(new wn(t, this.observables, this.project));
        }
      }
      class wn extends Pe.a {
        constructor(t, e, n) {
          super(t), (this.observables = e), (this.project = n), (this.toRespond = []);
          const r = e.length;
          this.values = new Array(r);
          for (let s = 0; s < r; s++) this.toRespond.push(s);
          for (let s = 0; s < r; s++) {
            let t = e[s];
            this.add(Object(De.a)(this, t, t, s));
          }
        }
        notifyNext(t, e, n, r, s) {
          this.values[n] = e;
          const i = this.toRespond;
          if (i.length > 0) {
            const t = i.indexOf(n);
            -1 !== t && i.splice(t, 1);
          }
        }
        notifyComplete() {}
        _next(t) {
          if (0 === this.toRespond.length) {
            const e = [t, ...this.values];
            this.project ? this._tryProject(e) : this.destination.next(e);
          }
        }
        _tryProject(t) {
          let e;
          try {
            e = this.project.apply(this, t);
          } catch (n) {
            return void this.destination.error(n);
          }
          this.destination.next(e);
        }
      }
      $localize`:@@ngb.alert.close␟f4e529ae5ffd73001d1ff4bbdeeb0a72e342e5c8␟7819314041543176992:Close`;
      const Cn = ['*'];
      $localize`:@@ngb.carousel.previous␟680d5c75b7fd8d37961083608b9fcdc4167b4c43␟4452427314943113135:Previous`,
        $localize`:@@ngb.carousel.next␟f732c304c7433e5a83ffcd862c3dce709a0f4982␟3885497195825665706:Next`,
        $localize`:@@ngb.datepicker.previous-month␟c3b08b07b5ab98e7cdcf18df39355690ab7d3884␟8586908745456864217:Previous month`,
        $localize`:@@ngb.datepicker.previous-month␟c3b08b07b5ab98e7cdcf18df39355690ab7d3884␟8586908745456864217:Previous month`,
        $localize`:@@ngb.datepicker.next-month␟4bd046985cfe13040d5ef0cd881edce0968a111a␟3628374603023447227:Next month`,
        $localize`:@@ngb.datepicker.next-month␟4bd046985cfe13040d5ef0cd881edce0968a111a␟3628374603023447227:Next month`,
        $localize`:@@ngb.datepicker.select-month␟1dbc84807f35518112f62e5775d1daebd3d8462b␟2253869508135064750:Select month`,
        $localize`:@@ngb.datepicker.select-month␟1dbc84807f35518112f62e5775d1daebd3d8462b␟2253869508135064750:Select month`,
        $localize`:@@ngb.datepicker.select-year␟8ceb09d002bf0c5d1cac171dfbffe1805d2b3962␟8852264961585484321:Select year`,
        $localize`:@@ngb.datepicker.select-year␟8ceb09d002bf0c5d1cac171dfbffe1805d2b3962␟8852264961585484321:Select year`;
      const Sn = ['dialog'];
      var En, xn, On, Tn;
      function kn(t, e) {
        1 & t && (s.Rb(0, 'span', 8), s.Vb(1, En), s.Qb());
      }
      function An(t, e) {
        1 & t && (s.Rb(0, 'span', 8), s.Vb(1, xn), s.Qb());
      }
      function In(t, e) {
        1 & t && (s.Rb(0, 'span', 8), s.Vb(1, On), s.Qb());
      }
      function Pn(t, e) {
        1 & t && (s.Rb(0, 'span', 8), s.Vb(1, Tn), s.Qb());
      }
      function Rn(t, e) {
        1 & t && s.Cc(0, '...');
      }
      function Dn(t, e) {
        1 & t && (s.Rb(0, 'span', 10), s.Cc(1, '(current)'), s.Qb());
      }
      function jn(t, e) {
        if ((1 & t && (s.Cc(0), s.Ac(1, Dn, 2, 0, 'span', 9), s.Cc(2, '\n    ')), 2 & t)) {
          const t = e.$implicit,
            n = e.currentPage;
          s.Ec('\n      ', t, '\n      '), s.zb(1), s.kc('ngIf', t === n);
        }
      }
      (En = $localize`:@@ngb.pagination.first␟656506dfd46380956a655f919f1498d018f75ca0␟6867721956102594380:««`),
        (xn = $localize`:@@ngb.pagination.previous␟6e52b6ee77a4848d899dd21b591c6fd499e3aef3␟6479320895410098858:«`),
        (On = $localize`:@@ngb.pagination.next␟ba9cbb4ff311464308a3627e4f1c3345d9fe6d7d␟5458177150283468089:»`),
        (Tn = $localize`:@@ngb.pagination.last␟49f27a460bc97e7e00be5b37098bfa79884fc7d9␟5277020320267646988:»»`);
      const Nn = [
        'aria-label',
        $localize`:@@ngb.pagination.first-aria␟f2f852318759c6396b5d3d17031d53817d7b38cc␟2241508602425256033:First`
      ];
      function Mn(t, e) {}
      const Ln = function(t, e) {
        return { disabled: t, currentPage: e };
      };
      function Fn(t, e) {
        if (1 & t) {
          const t = s.Sb();
          s.Rb(0, 'li', 11),
            s.Cc(1, '\n        '),
            s.Rb(2, 'a', 12),
            s.Xb(3, Nn),
            s.dc('click', function(e) {
              return s.tc(t), s.fc().selectPage(1), e.preventDefault();
            }),
            s.Cc(4, '\n          '),
            s.Ac(5, Mn, 0, 0, 'ng-template', 13),
            s.Cc(6, '\n        '),
            s.Qb(),
            s.Cc(7, '\n      '),
            s.Qb();
        }
        if (2 & t) {
          const t = s.fc(),
            e = s.sc(2);
          s.Eb('disabled', t.previousDisabled()),
            s.zb(2),
            s.Ab('tabindex', t.previousDisabled() ? '-1' : null)('aria-disabled', t.previousDisabled() ? 'true' : null),
            s.zb(3),
            s.kc('ngTemplateOutlet', (null == t.tplFirst ? null : t.tplFirst.templateRef) || e)(
              'ngTemplateOutletContext',
              s.pc(6, Ln, t.previousDisabled(), t.page)
            );
        }
      }
      const Vn = [
        'aria-label',
        $localize`:@@ngb.pagination.previous-aria␟680d5c75b7fd8d37961083608b9fcdc4167b4c43␟4452427314943113135:Previous`
      ];
      function Hn(t, e) {}
      const Un = function(t) {
        return { disabled: t };
      };
      function zn(t, e) {
        if (1 & t) {
          const t = s.Sb();
          s.Rb(0, 'li', 11),
            s.Cc(1, '\n        '),
            s.Rb(2, 'a', 12),
            s.Xb(3, Vn),
            s.dc('click', function(e) {
              s.tc(t);
              const n = s.fc();
              return n.selectPage(n.page - 1), e.preventDefault();
            }),
            s.Cc(4, '\n          '),
            s.Ac(5, Hn, 0, 0, 'ng-template', 13),
            s.Cc(6, '\n        '),
            s.Qb(),
            s.Cc(7, '\n      '),
            s.Qb();
        }
        if (2 & t) {
          const t = s.fc(),
            e = s.sc(5);
          s.Eb('disabled', t.previousDisabled()),
            s.zb(2),
            s.Ab('tabindex', t.previousDisabled() ? '-1' : null)('aria-disabled', t.previousDisabled() ? 'true' : null),
            s.zb(3),
            s.kc('ngTemplateOutlet', (null == t.tplPrevious ? null : t.tplPrevious.templateRef) || e)(
              'ngTemplateOutletContext',
              s.oc(6, Un, t.previousDisabled())
            );
        }
      }
      function $n(t, e) {}
      const Bn = function(t) {
        return { disabled: !0, currentPage: t };
      };
      function qn(t, e) {
        if (
          (1 & t &&
            (s.Rb(0, 'a', 16),
            s.Cc(1, '\n          '),
            s.Ac(2, $n, 0, 0, 'ng-template', 13),
            s.Cc(3, '\n        '),
            s.Qb()),
          2 & t)
        ) {
          const t = s.fc(2),
            e = s.sc(14);
          s.zb(2),
            s.kc('ngTemplateOutlet', (null == t.tplEllipsis ? null : t.tplEllipsis.templateRef) || e)(
              'ngTemplateOutletContext',
              s.oc(2, Bn, t.page)
            );
        }
      }
      function Zn(t, e) {}
      const Qn = function(t, e, n) {
        return { disabled: t, $implicit: e, currentPage: n };
      };
      function Gn(t, e) {
        if (1 & t) {
          const t = s.Sb();
          s.Rb(0, 'a', 17),
            s.dc('click', function(e) {
              s.tc(t);
              const n = s.fc().$implicit;
              return s.fc().selectPage(n), e.preventDefault();
            }),
            s.Cc(1, '\n          '),
            s.Ac(2, Zn, 0, 0, 'ng-template', 13),
            s.Cc(3, '\n        '),
            s.Qb();
        }
        if (2 & t) {
          const t = s.fc().$implicit,
            e = s.fc(),
            n = s.sc(17);
          s.Ab('tabindex', e.disabled ? '-1' : null)('aria-disabled', e.disabled ? 'true' : null),
            s.zb(2),
            s.kc('ngTemplateOutlet', (null == e.tplNumber ? null : e.tplNumber.templateRef) || n)(
              'ngTemplateOutletContext',
              s.qc(4, Qn, e.disabled, t, e.page)
            );
        }
      }
      function Wn(t, e) {
        if (
          (1 & t &&
            (s.Rb(0, 'li', 11),
            s.Cc(1, '\n        '),
            s.Ac(2, qn, 4, 4, 'a', 14),
            s.Cc(3, '\n        '),
            s.Ac(4, Gn, 4, 8, 'a', 15),
            s.Cc(5, '\n      '),
            s.Qb()),
          2 & t)
        ) {
          const t = e.$implicit,
            n = s.fc();
          s.Eb('active', t === n.page)('disabled', n.isEllipsis(t) || n.disabled),
            s.Ab('aria-current', t === n.page ? 'page' : null),
            s.zb(2),
            s.kc('ngIf', n.isEllipsis(t)),
            s.zb(2),
            s.kc('ngIf', !n.isEllipsis(t));
        }
      }
      const Kn = [
        'aria-label',
        $localize`:@@ngb.pagination.next-aria␟f732c304c7433e5a83ffcd862c3dce709a0f4982␟3885497195825665706:Next`
      ];
      function Jn(t, e) {}
      function Yn(t, e) {
        if (1 & t) {
          const t = s.Sb();
          s.Rb(0, 'li', 11),
            s.Cc(1, '\n        '),
            s.Rb(2, 'a', 12),
            s.Xb(3, Kn),
            s.dc('click', function(e) {
              s.tc(t);
              const n = s.fc();
              return n.selectPage(n.page + 1), e.preventDefault();
            }),
            s.Cc(4, '\n          '),
            s.Ac(5, Jn, 0, 0, 'ng-template', 13),
            s.Cc(6, '\n        '),
            s.Qb(),
            s.Cc(7, '\n      '),
            s.Qb();
        }
        if (2 & t) {
          const t = s.fc(),
            e = s.sc(8);
          s.Eb('disabled', t.nextDisabled()),
            s.zb(2),
            s.Ab('tabindex', t.nextDisabled() ? '-1' : null)('aria-disabled', t.nextDisabled() ? 'true' : null),
            s.zb(3),
            s.kc('ngTemplateOutlet', (null == t.tplNext ? null : t.tplNext.templateRef) || e)(
              'ngTemplateOutletContext',
              s.pc(6, Ln, t.nextDisabled(), t.page)
            );
        }
      }
      const Xn = [
        'aria-label',
        $localize`:@@ngb.pagination.last-aria␟5c729788ba138508aca1bec050b610f7bf81db3e␟4882268002141858767:Last`
      ];
      function tr(t, e) {}
      function er(t, e) {
        if (1 & t) {
          const t = s.Sb();
          s.Rb(0, 'li', 11),
            s.Cc(1, '\n        '),
            s.Rb(2, 'a', 12),
            s.Xb(3, Xn),
            s.dc('click', function(e) {
              s.tc(t);
              const n = s.fc();
              return n.selectPage(n.pageCount), e.preventDefault();
            }),
            s.Cc(4, '\n          '),
            s.Ac(5, tr, 0, 0, 'ng-template', 13),
            s.Cc(6, '\n        '),
            s.Qb(),
            s.Cc(7, '\n      '),
            s.Qb();
        }
        if (2 & t) {
          const t = s.fc(),
            e = s.sc(11);
          s.Eb('disabled', t.nextDisabled()),
            s.zb(2),
            s.Ab('tabindex', t.nextDisabled() ? '-1' : null)('aria-disabled', t.nextDisabled() ? 'true' : null),
            s.zb(3),
            s.kc('ngTemplateOutlet', (null == t.tplLast ? null : t.tplLast.templateRef) || e)(
              'ngTemplateOutletContext',
              s.pc(6, Ln, t.nextDisabled(), t.page)
            );
        }
      }
      function nr(t) {
        return !isNaN(
          (function(t) {
            return parseInt('' + t, 10);
          })(t)
        );
      }
      function rr(t) {
        return null != t;
      }
      $localize`:@@ngb.progressbar.value␟04d611d19c117c60c9e14d0a04399a027184bc77␟5214781723415385277:${'\ufffd0\ufffd'}:INTERPOLATION:%`,
        $localize`:@@ngb.timepicker.HH␟ce676ab1d6d98f85c836381cf100a4a91ef95a1f␟4043638465245303811:HH`,
        $localize`:@@ngb.timepicker.hours␟3bbce5fef7e1151da052a4e529453edb340e3912␟8070396816726827304:Hours`,
        $localize`:@@ngb.timepicker.MM␟72c8edf6a50068a05bde70991e36b1e881f4ca54␟1647282246509919852:MM`,
        $localize`:@@ngb.timepicker.minutes␟41e62daa962947c0d23ded0981975d1bddf0bf38␟5531237363767747080:Minutes`,
        $localize`:@@ngb.timepicker.increment-hours␟cb74bc1d625a6c1742f0d7d47306cf495780c218␟5939278348542933629:Increment hours`,
        $localize`:@@ngb.timepicker.decrement-hours␟147c7a19429da7d999e247d22e33fee370b1691b␟3651829882940481818:Decrement hours`,
        $localize`:@@ngb.timepicker.increment-minutes␟f5a4a3bc05e053f6732475d0e74875ec01c3a348␟180147720391025024:Increment minutes`,
        $localize`:@@ngb.timepicker.decrement-minutes␟c1a6899e529c096da5b660385d4e77fe1f7ad271␟7447789825403243588:Decrement minutes`,
        $localize`:@@ngb.timepicker.SS␟ebe38d36a40a2383c5fefa9b4608ffbda08bd4a3␟3628127143071124194:SS`,
        $localize`:@@ngb.timepicker.seconds␟4f2ed9e71a7c981db3e50ae2fedb28aff2ec4e6c␟8874012390997067175:Seconds`,
        $localize`:@@ngb.timepicker.increment-seconds␟912322ecee7d659d04dcf494a70e22e49d334b26␟5364772110539092174:Increment seconds`,
        $localize`:@@ngb.timepicker.decrement-seconds␟5db47ac104294243a70eb9124fbea9d0004ddf69␟753633511487974857:Decrement seconds`,
        $localize`:@@ngb.timepicker.PM␟8d6e691e10306c1b34c6b26805151aaea320ef7f␟3564199131264287502:${'\ufffd0\ufffd'}:INTERPOLATION:`,
        $localize`:@@ngb.timepicker.AM␟69a1f176a93998876952adac57c3bc3863b6105e␟4592818992509942761:${'\ufffd0\ufffd'}:INTERPOLATION:`,
        $localize`:@@ngb.toast.close-aria␟f4e529ae5ffd73001d1ff4bbdeeb0a72e342e5c8␟7819314041543176992:Close`,
        'undefined' == typeof Element ||
          Element.prototype.closest ||
          (Element.prototype.matches ||
            (Element.prototype.matches =
              Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector),
          (Element.prototype.closest = function(t) {
            let e = this;
            if (!document.documentElement.contains(e)) return null;
            do {
              if (e.matches(t)) return e;
              e = e.parentElement || e.parentNode;
            } while (null !== e && 1 === e.nodeType);
            return null;
          }));
      let sr = (() => {
          let t = class {};
          return (
            (t.ɵmod = s.Kb({ type: t })),
            (t.ɵinj = s.Jb({
              factory: function(e) {
                return new (e || t)();
              },
              imports: [[i.b]]
            })),
            t
          );
        })(),
        ir = (() => {
          let t = class {};
          return (
            (t.ɵmod = s.Kb({ type: t })),
            (t.ɵinj = s.Jb({
              factory: function(e) {
                return new (e || t)();
              },
              imports: [[i.b]]
            })),
            t
          );
        })(),
        or = (() => {
          let t = class {};
          return (
            (t.ɵmod = s.Kb({ type: t })),
            (t.ɵinj = s.Jb({
              factory: function(e) {
                return new (e || t)();
              }
            })),
            t
          );
        })(),
        ar = (() => {
          let t = class {};
          return (
            (t.ɵmod = s.Kb({ type: t })),
            (t.ɵinj = s.Jb({
              factory: function(e) {
                return new (e || t)();
              },
              imports: [[i.b]]
            })),
            t
          );
        })(),
        lr = (() => {
          let t = class {
            constructor() {
              this.collapsed = !1;
            }
          };
          return (
            (t.ɵfac = function(e) {
              return new (e || t)();
            }),
            (t.ɵdir = s.Hb({
              type: t,
              selectors: [['', 'ngbCollapse', '']],
              hostVars: 4,
              hostBindings: function(t, e) {
                2 & t && s.Eb('collapse', !0)('show', !e.collapsed);
              },
              inputs: { collapsed: ['ngbCollapse', 'collapsed'] },
              exportAs: ['ngbCollapse']
            })),
            t
          );
        })(),
        cr = (() => {
          let t = class {};
          return (
            (t.ɵmod = s.Kb({ type: t })),
            (t.ɵinj = s.Jb({
              factory: function(e) {
                return new (e || t)();
              }
            })),
            t
          );
        })();
      var ur = (function(t) {
        return (
          (t[(t.Tab = 9)] = 'Tab'),
          (t[(t.Enter = 13)] = 'Enter'),
          (t[(t.Escape = 27)] = 'Escape'),
          (t[(t.Space = 32)] = 'Space'),
          (t[(t.PageUp = 33)] = 'PageUp'),
          (t[(t.PageDown = 34)] = 'PageDown'),
          (t[(t.End = 35)] = 'End'),
          (t[(t.Home = 36)] = 'Home'),
          (t[(t.ArrowLeft = 37)] = 'ArrowLeft'),
          (t[(t.ArrowUp = 38)] = 'ArrowUp'),
          (t[(t.ArrowRight = 39)] = 'ArrowRight'),
          (t[(t.ArrowDown = 40)] = 'ArrowDown'),
          t
        );
      })({});
      const hr = [
        'a[href]',
        'button:not([disabled])',
        'input:not([disabled]):not([type="hidden"])',
        'select:not([disabled])',
        'textarea:not([disabled])',
        '[contenteditable]',
        '[tabindex]:not([tabindex="-1"])'
      ].join(', ');
      function dr(t) {
        const e = Array.from(t.querySelectorAll(hr)).filter(t => -1 !== t.tabIndex);
        return [e[0], e[e.length - 1]];
      }
      let pr = (() => {
          let t = class {};
          return (
            (t.ɵmod = s.Kb({ type: t })),
            (t.ɵinj = s.Jb({
              factory: function(e) {
                return new (e || t)();
              },
              imports: [[i.b, _t]]
            })),
            t
          );
        })(),
        fr = (() => {
          let t = class {};
          return (
            (t.ɵfac = function(e) {
              return new (e || t)();
            }),
            (t.ɵdir = s.Hb({ type: t, selectors: [['', 8, 'navbar']] })),
            t
          );
        })(),
        gr = (() => {
          let t = class {};
          return (
            (t.ɵmod = s.Kb({ type: t })),
            (t.ɵinj = s.Jb({
              factory: function(e) {
                return new (e || t)();
              }
            })),
            t
          );
        })(),
        mr = (() => {
          let t = class {
            constructor() {
              (this.backdrop = !0), (this.keyboard = !0);
            }
          };
          return (
            (t.ɵfac = function(e) {
              return new (e || t)();
            }),
            (t.ɵprov = Object(s.Ib)({
              factory: function() {
                return new t();
              },
              token: t,
              providedIn: 'root'
            })),
            t
          );
        })();
      class yr {
        constructor(t, e, n) {
          (this.nodes = t), (this.viewRef = e), (this.componentRef = n);
        }
      }
      const br = () => {};
      let _r = (() => {
          let t = class {
            constructor(t) {
              this._document = t;
            }
            compensate() {
              const t = this._getWidth();
              return this._isPresent(t) ? this._adjustBody(t) : br;
            }
            _adjustBody(t) {
              const e = this._document.body,
                n = e.style.paddingRight,
                r = parseFloat(window.getComputedStyle(e)['padding-right']);
              return (e.style['padding-right'] = r + t + 'px'), () => (e.style['padding-right'] = n);
            }
            _isPresent(t) {
              const e = this._document.body.getBoundingClientRect();
              return window.innerWidth - (e.left + e.right) >= t - 0.1 * t;
            }
            _getWidth() {
              const t = this._document.createElement('div');
              t.className = 'modal-scrollbar-measure';
              const e = this._document.body;
              e.appendChild(t);
              const n = t.getBoundingClientRect().width - t.clientWidth;
              return e.removeChild(t), n;
            }
          };
          return (
            (t.ɵfac = function(e) {
              return new (e || t)(s.Zb(i.c));
            }),
            (t.ɵprov = Object(s.Ib)({
              factory: function() {
                return new t(Object(s.Zb)(i.c));
              },
              token: t,
              providedIn: 'root'
            })),
            t
          );
        })(),
        vr = (() => {
          let t = class {};
          return (
            (t.ɵfac = function(e) {
              return new (e || t)();
            }),
            (t.ɵcmp = s.Gb({
              type: t,
              selectors: [['ngb-modal-backdrop']],
              hostAttrs: [2, 'z-index', '1050'],
              hostVars: 2,
              hostBindings: function(t, e) {
                2 & t && s.Bb('modal-backdrop fade show' + (e.backdropClass ? ' ' + e.backdropClass : ''));
              },
              inputs: { backdropClass: 'backdropClass' },
              decls: 0,
              vars: 0,
              template: function(t, e) {},
              encapsulation: 2
            })),
            t
          );
        })();
      class wr {
        close(t) {}
        dismiss(t) {}
      }
      class Cr {
        constructor(t, e, n, r) {
          (this._windowCmptRef = t),
            (this._contentRef = e),
            (this._backdropCmptRef = n),
            (this._beforeDismiss = r),
            t.instance.dismissEvent.subscribe(t => {
              this.dismiss(t);
            }),
            (this.result = new Promise((t, e) => {
              (this._resolve = t), (this._reject = e);
            })),
            this.result.then(null, () => {});
        }
        get componentInstance() {
          if (this._contentRef && this._contentRef.componentRef) return this._contentRef.componentRef.instance;
        }
        close(t) {
          this._windowCmptRef && (this._resolve(t), this._removeModalElements());
        }
        _dismiss(t) {
          this._reject(t), this._removeModalElements();
        }
        dismiss(t) {
          if (this._windowCmptRef)
            if (this._beforeDismiss) {
              const e = this._beforeDismiss();
              e && e.then
                ? e.then(
                    e => {
                      !1 !== e && this._dismiss(t);
                    },
                    () => {}
                  )
                : !1 !== e && this._dismiss(t);
            } else this._dismiss(t);
        }
        _removeModalElements() {
          const t = this._windowCmptRef.location.nativeElement;
          if ((t.parentNode.removeChild(t), this._windowCmptRef.destroy(), this._backdropCmptRef)) {
            const t = this._backdropCmptRef.location.nativeElement;
            t.parentNode.removeChild(t), this._backdropCmptRef.destroy();
          }
          this._contentRef && this._contentRef.viewRef && this._contentRef.viewRef.destroy(),
            (this._windowCmptRef = null),
            (this._backdropCmptRef = null),
            (this._contentRef = null);
        }
      }
      var Sr = (function(t) {
        return (t[(t.BACKDROP_CLICK = 0)] = 'BACKDROP_CLICK'), (t[(t.ESC = 1)] = 'ESC'), t;
      })({});
      let Er = (() => {
          let t = class {
            constructor(t, e, n) {
              (this._document = t),
                (this._elRef = e),
                (this._zone = n),
                (this._closed$ = new nn.a()),
                (this._elWithFocus = null),
                (this.backdrop = !0),
                (this.keyboard = !0),
                (this.dismissEvent = new s.n());
            }
            dismiss(t) {
              this.dismissEvent.emit(t);
            }
            ngOnInit() {
              this._elWithFocus = this._document.activeElement;
            }
            ngAfterViewInit() {
              const { nativeElement: t } = this._elRef;
              if (
                (this._zone.runOutsideAngular(() => {
                  dn(t, 'keydown')
                    .pipe(
                      pn(this._closed$),
                      Tt(t => t.which === ur.Escape && this.keyboard)
                    )
                    .subscribe(t =>
                      requestAnimationFrame(() => {
                        t.defaultPrevented || this._zone.run(() => this.dismiss(Sr.ESC));
                      })
                    );
                  let e = !1;
                  dn(this._dialogEl.nativeElement, 'mousedown')
                    .pipe(
                      pn(this._closed$),
                      mn(() => (e = !1)),
                      je(() => dn(t, 'mouseup').pipe(pn(this._closed$), ge(1))),
                      Tt(({ target: e }) => t === e)
                    )
                    .subscribe(() => {
                      e = !0;
                    }),
                    dn(t, 'click')
                      .pipe(pn(this._closed$))
                      .subscribe(({ target: n }) => {
                        !0 !== this.backdrop || t !== n || e || this._zone.run(() => this.dismiss(Sr.BACKDROP_CLICK)),
                          (e = !1);
                      });
                }),
                !t.contains(document.activeElement))
              ) {
                const e = t.querySelector('[ngbAutofocus]'),
                  n = dr(t)[0];
                (e || n || t).focus();
              }
            }
            ngOnDestroy() {
              const t = this._document.body,
                e = this._elWithFocus;
              let n;
              (n = e && e.focus && t.contains(e) ? e : t),
                this._zone.runOutsideAngular(() => {
                  setTimeout(() => n.focus()), (this._elWithFocus = null);
                }),
                this._closed$.next();
            }
          };
          return (
            (t.ɵfac = function(e) {
              return new (e || t)(s.Mb(i.c), s.Mb(s.l), s.Mb(s.z));
            }),
            (t.ɵcmp = s.Gb({
              type: t,
              selectors: [['ngb-modal-window']],
              viewQuery: function(t, e) {
                var n;
                1 & t && s.yc(Sn, !0), 2 & t && s.rc((n = s.ec())) && (e._dialogEl = n.first);
              },
              hostAttrs: ['role', 'dialog', 'tabindex', '-1'],
              hostVars: 5,
              hostBindings: function(t, e) {
                2 & t &&
                  (s.Ab('aria-modal', !0)('aria-labelledby', e.ariaLabelledBy)('aria-describedby', e.ariaDescribedBy),
                  s.Bb('modal fade show d-block' + (e.windowClass ? ' ' + e.windowClass : '')));
              },
              inputs: {
                backdrop: 'backdrop',
                keyboard: 'keyboard',
                ariaLabelledBy: 'ariaLabelledBy',
                ariaDescribedBy: 'ariaDescribedBy',
                centered: 'centered',
                scrollable: 'scrollable',
                size: 'size',
                windowClass: 'windowClass'
              },
              outputs: { dismissEvent: 'dismiss' },
              ngContentSelectors: Cn,
              decls: 8,
              vars: 2,
              consts: [
                ['role', 'document'],
                ['dialog', ''],
                [1, 'modal-content']
              ],
              template: function(t, e) {
                1 & t &&
                  (s.jc(),
                  s.Cc(0, '\n    '),
                  s.Rb(1, 'div', 0, 1),
                  s.Cc(3, '\n        '),
                  s.Rb(4, 'div', 2),
                  s.ic(5),
                  s.Qb(),
                  s.Cc(6, '\n    '),
                  s.Qb(),
                  s.Cc(7, '\n    ')),
                  2 & t &&
                    (s.zb(1),
                    s.Bb(
                      'modal-dialog' +
                        (e.size ? ' modal-' + e.size : '') +
                        (e.centered ? ' modal-dialog-centered' : '') +
                        (e.scrollable ? ' modal-dialog-scrollable' : '')
                    ));
              },
              styles: [
                'ngb-modal-window .component-host-scrollable{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;overflow:hidden}'
              ],
              encapsulation: 2
            })),
            t
          );
        })(),
        xr = (() => {
          let t = class {
            constructor(t, e, n, r, s, i) {
              (this._applicationRef = t),
                (this._injector = e),
                (this._document = n),
                (this._scrollBar = r),
                (this._rendererFactory = s),
                (this._ngZone = i),
                (this._activeWindowCmptHasChanged = new nn.a()),
                (this._ariaHiddenValues = new Map()),
                (this._backdropAttributes = ['backdropClass']),
                (this._modalRefs = []),
                (this._windowAttributes = [
                  'ariaLabelledBy',
                  'ariaDescribedBy',
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
                    const t = this._windowCmpts[this._windowCmpts.length - 1];
                    ((t, e, n, r = !1) => {
                      this._ngZone.runOutsideAngular(() => {
                        const t = dn(e, 'focusin').pipe(
                          pn(n),
                          Object(l.a)(t => t.target)
                        );
                        dn(e, 'keydown')
                          .pipe(
                            pn(n),
                            Tt(t => t.which === ur.Tab),
                            _n(t)
                          )
                          .subscribe(([t, n]) => {
                            const [r, s] = dr(e);
                            (n !== r && n !== e) || !t.shiftKey || (s.focus(), t.preventDefault()),
                              n !== s || t.shiftKey || (r.focus(), t.preventDefault());
                          }),
                          r &&
                            dn(e, 'click')
                              .pipe(
                                pn(n),
                                _n(t),
                                Object(l.a)(t => t[1])
                              )
                              .subscribe(t => t.focus());
                      });
                    })(0, t.location.nativeElement, this._activeWindowCmptHasChanged),
                      this._revertAriaHidden(),
                      this._setAriaHidden(t.location.nativeElement);
                  }
                });
            }
            open(t, e, n, r) {
              const s =
                  r.container instanceof HTMLElement
                    ? r.container
                    : rr(r.container)
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
              const l = new wr(),
                c = this._getContentRef(t, r.injector || e, n, l, r);
              let u = !1 !== r.backdrop ? this._attachBackdrop(t, s) : void 0,
                h = this._attachWindowComponent(t, s, c),
                d = new Cr(h, c, u, r.beforeDismiss);
              return (
                this._registerModalRef(d),
                this._registerWindowCmpt(h),
                d.result.then(o, o),
                d.result.then(a, a),
                (l.close = t => {
                  d.close(t);
                }),
                (l.dismiss = t => {
                  d.dismiss(t);
                }),
                this._applyWindowOptions(h.instance, r),
                1 === this._modalRefs.length && i.addClass(this._document.body, 'modal-open'),
                u && u.instance && this._applyBackdropOptions(u.instance, r),
                d
              );
            }
            dismissAll(t) {
              this._modalRefs.forEach(e => e.dismiss(t));
            }
            hasOpenModals() {
              return this._modalRefs.length > 0;
            }
            _attachBackdrop(t, e) {
              let n = t.resolveComponentFactory(vr).create(this._injector);
              return this._applicationRef.attachView(n.hostView), e.appendChild(n.location.nativeElement), n;
            }
            _attachWindowComponent(t, e, n) {
              let r = t.resolveComponentFactory(Er).create(this._injector, n.nodes);
              return this._applicationRef.attachView(r.hostView), e.appendChild(r.location.nativeElement), r;
            }
            _applyWindowOptions(t, e) {
              this._windowAttributes.forEach(n => {
                rr(e[n]) && (t[n] = e[n]);
              });
            }
            _applyBackdropOptions(t, e) {
              this._backdropAttributes.forEach(n => {
                rr(e[n]) && (t[n] = e[n]);
              });
            }
            _getContentRef(t, e, n, r, i) {
              return n
                ? n instanceof s.K
                  ? this._createFromTemplateRef(n, r)
                  : 'string' == typeof n
                  ? this._createFromString(n)
                  : this._createFromComponent(t, e, n, r, i)
                : new yr([]);
            }
            _createFromTemplateRef(t, e) {
              const n = t.createEmbeddedView({
                $implicit: e,
                close(t) {
                  e.close(t);
                },
                dismiss(t) {
                  e.dismiss(t);
                }
              });
              return this._applicationRef.attachView(n), new yr([n.rootNodes], n);
            }
            _createFromString(t) {
              const e = this._document.createTextNode('' + t);
              return new yr([[e]]);
            }
            _createFromComponent(t, e, n, r, i) {
              const o = t.resolveComponentFactory(n),
                a = s.r.create({ providers: [{ provide: wr, useValue: r }], parent: e }),
                l = o.create(a),
                c = l.location.nativeElement;
              return (
                i.scrollable && c.classList.add('component-host-scrollable'),
                this._applicationRef.attachView(l.hostView),
                new yr([[c]], l.hostView, l)
              );
            }
            _setAriaHidden(t) {
              const e = t.parentElement;
              e &&
                t !== this._document.body &&
                (Array.from(e.children).forEach(e => {
                  e !== t &&
                    'SCRIPT' !== e.nodeName &&
                    (this._ariaHiddenValues.set(e, e.getAttribute('aria-hidden')),
                    e.setAttribute('aria-hidden', 'true'));
                }),
                this._setAriaHidden(e));
            }
            _revertAriaHidden() {
              this._ariaHiddenValues.forEach((t, e) => {
                t ? e.setAttribute('aria-hidden', t) : e.removeAttribute('aria-hidden');
              }),
                this._ariaHiddenValues.clear();
            }
            _registerModalRef(t) {
              const e = () => {
                const e = this._modalRefs.indexOf(t);
                e > -1 && this._modalRefs.splice(e, 1);
              };
              this._modalRefs.push(t), t.result.then(e, e);
            }
            _registerWindowCmpt(t) {
              this._windowCmpts.push(t),
                this._activeWindowCmptHasChanged.next(),
                t.onDestroy(() => {
                  const e = this._windowCmpts.indexOf(t);
                  e > -1 && (this._windowCmpts.splice(e, 1), this._activeWindowCmptHasChanged.next());
                });
            }
          };
          return (
            (t.ɵfac = function(e) {
              return new (e || t)(s.Zb(s.g), s.Zb(s.r), s.Zb(i.c), s.Zb(_r), s.Zb(s.E), s.Zb(s.z));
            }),
            (t.ɵprov = Object(s.Ib)({
              factory: function() {
                return new t(
                  Object(s.Zb)(s.g),
                  Object(s.Zb)(s.o),
                  Object(s.Zb)(i.c),
                  Object(s.Zb)(_r),
                  Object(s.Zb)(s.E),
                  Object(s.Zb)(s.z)
                );
              },
              token: t,
              providedIn: 'root'
            })),
            t
          );
        })(),
        Or = (() => {
          let t = class {
            constructor(t, e, n, r) {
              (this._moduleCFR = t), (this._injector = e), (this._modalStack = n), (this._config = r);
            }
            open(t, e = {}) {
              const n = Object.assign({}, this._config, e);
              return this._modalStack.open(this._moduleCFR, this._injector, t, n);
            }
            dismissAll(t) {
              this._modalStack.dismissAll(t);
            }
            hasOpenModals() {
              return this._modalStack.hasOpenModals();
            }
          };
          return (
            (t.ɵfac = function(e) {
              return new (e || t)(s.Zb(s.j), s.Zb(s.r), s.Zb(xr), s.Zb(mr));
            }),
            (t.ɵprov = Object(s.Ib)({
              factory: function() {
                return new t(Object(s.Zb)(s.j), Object(s.Zb)(s.o), Object(s.Zb)(xr), Object(s.Zb)(mr));
              },
              token: t,
              providedIn: 'root'
            })),
            t
          );
        })(),
        Tr = (() => {
          let t = class {};
          return (
            (t.ɵmod = s.Kb({ type: t })),
            (t.ɵinj = s.Jb({
              factory: function(e) {
                return new (e || t)();
              },
              providers: [Or]
            })),
            t
          );
        })(),
        kr = (() => {
          let t = class {};
          return (
            (t.ɵmod = s.Kb({ type: t })),
            (t.ɵinj = s.Jb({
              factory: function(e) {
                return new (e || t)();
              },
              imports: [[i.b]]
            })),
            t
          );
        })(),
        Ar = (() => {
          let t = class {
            constructor() {
              (this.disabled = !1),
                (this.boundaryLinks = !1),
                (this.directionLinks = !0),
                (this.ellipses = !0),
                (this.maxSize = 0),
                (this.pageSize = 10),
                (this.rotate = !1);
            }
          };
          return (
            (t.ɵfac = function(e) {
              return new (e || t)();
            }),
            (t.ɵprov = Object(s.Ib)({
              factory: function() {
                return new t();
              },
              token: t,
              providedIn: 'root'
            })),
            t
          );
        })(),
        Ir = (() => {
          let t = class {
            constructor(t) {
              this.templateRef = t;
            }
          };
          return (
            (t.ɵfac = function(e) {
              return new (e || t)(s.Mb(s.K));
            }),
            (t.ɵdir = s.Hb({ type: t, selectors: [['ng-template', 'ngbPaginationEllipsis', '']] })),
            t
          );
        })(),
        Pr = (() => {
          let t = class {
            constructor(t) {
              this.templateRef = t;
            }
          };
          return (
            (t.ɵfac = function(e) {
              return new (e || t)(s.Mb(s.K));
            }),
            (t.ɵdir = s.Hb({ type: t, selectors: [['ng-template', 'ngbPaginationFirst', '']] })),
            t
          );
        })(),
        Rr = (() => {
          let t = class {
            constructor(t) {
              this.templateRef = t;
            }
          };
          return (
            (t.ɵfac = function(e) {
              return new (e || t)(s.Mb(s.K));
            }),
            (t.ɵdir = s.Hb({ type: t, selectors: [['ng-template', 'ngbPaginationLast', '']] })),
            t
          );
        })(),
        Dr = (() => {
          let t = class {
            constructor(t) {
              this.templateRef = t;
            }
          };
          return (
            (t.ɵfac = function(e) {
              return new (e || t)(s.Mb(s.K));
            }),
            (t.ɵdir = s.Hb({ type: t, selectors: [['ng-template', 'ngbPaginationNext', '']] })),
            t
          );
        })(),
        jr = (() => {
          let t = class {
            constructor(t) {
              this.templateRef = t;
            }
          };
          return (
            (t.ɵfac = function(e) {
              return new (e || t)(s.Mb(s.K));
            }),
            (t.ɵdir = s.Hb({ type: t, selectors: [['ng-template', 'ngbPaginationNumber', '']] })),
            t
          );
        })(),
        Nr = (() => {
          let t = class {
            constructor(t) {
              this.templateRef = t;
            }
          };
          return (
            (t.ɵfac = function(e) {
              return new (e || t)(s.Mb(s.K));
            }),
            (t.ɵdir = s.Hb({ type: t, selectors: [['ng-template', 'ngbPaginationPrevious', '']] })),
            t
          );
        })(),
        Mr = (() => {
          let t = class {
            constructor(t) {
              (this.pageCount = 0),
                (this.pages = []),
                (this.page = 1),
                (this.pageChange = new s.n(!0)),
                (this.disabled = t.disabled),
                (this.boundaryLinks = t.boundaryLinks),
                (this.directionLinks = t.directionLinks),
                (this.ellipses = t.ellipses),
                (this.maxSize = t.maxSize),
                (this.pageSize = t.pageSize),
                (this.rotate = t.rotate),
                (this.size = t.size);
            }
            hasPrevious() {
              return this.page > 1;
            }
            hasNext() {
              return this.page < this.pageCount;
            }
            nextDisabled() {
              return !this.hasNext() || this.disabled;
            }
            previousDisabled() {
              return !this.hasPrevious() || this.disabled;
            }
            selectPage(t) {
              this._updatePages(t);
            }
            ngOnChanges(t) {
              this._updatePages(this.page);
            }
            isEllipsis(t) {
              return -1 === t;
            }
            _applyEllipses(t, e) {
              this.ellipses &&
                (t > 0 && (t > 2 ? this.pages.unshift(-1) : 2 === t && this.pages.unshift(2), this.pages.unshift(1)),
                e < this.pageCount &&
                  (e < this.pageCount - 2
                    ? this.pages.push(-1)
                    : e === this.pageCount - 2 && this.pages.push(this.pageCount - 1),
                  this.pages.push(this.pageCount)));
            }
            _applyRotation() {
              let t = 0,
                e = this.pageCount,
                n = Math.floor(this.maxSize / 2);
              return (
                this.page <= n
                  ? (e = this.maxSize)
                  : this.pageCount - this.page < n
                  ? (t = this.pageCount - this.maxSize)
                  : ((t = this.page - n - 1), (e = this.page + (this.maxSize % 2 == 0 ? n - 1 : n))),
                [t, e]
              );
            }
            _applyPagination() {
              let t = (Math.ceil(this.page / this.maxSize) - 1) * this.maxSize;
              return [t, t + this.maxSize];
            }
            _setPageInRange(t) {
              const e = this.page;
              (this.page = (function(t, e, n = 0) {
                return Math.max(Math.min(t, e), n);
              })(t, this.pageCount, 1)),
                this.page !== e && nr(this.collectionSize) && this.pageChange.emit(this.page);
            }
            _updatePages(t) {
              (this.pageCount = Math.ceil(this.collectionSize / this.pageSize)),
                nr(this.pageCount) || (this.pageCount = 0),
                (this.pages.length = 0);
              for (let e = 1; e <= this.pageCount; e++) this.pages.push(e);
              if ((this._setPageInRange(t), this.maxSize > 0 && this.pageCount > this.maxSize)) {
                let t = 0,
                  e = this.pageCount;
                ([t, e] = this.rotate ? this._applyRotation() : this._applyPagination()),
                  (this.pages = this.pages.slice(t, e)),
                  this._applyEllipses(t, e);
              }
            }
          };
          return (
            (t.ɵfac = function(e) {
              return new (e || t)(s.Mb(Ar));
            }),
            (t.ɵcmp = s.Gb({
              type: t,
              selectors: [['ngb-pagination']],
              contentQueries: function(t, e, n) {
                var r;
                1 & t &&
                  (s.Fb(n, Ir, !0),
                  s.Fb(n, Pr, !0),
                  s.Fb(n, Rr, !0),
                  s.Fb(n, Dr, !0),
                  s.Fb(n, jr, !0),
                  s.Fb(n, Nr, !0)),
                  2 & t &&
                    (s.rc((r = s.ec())) && (e.tplEllipsis = r.first),
                    s.rc((r = s.ec())) && (e.tplFirst = r.first),
                    s.rc((r = s.ec())) && (e.tplLast = r.first),
                    s.rc((r = s.ec())) && (e.tplNext = r.first),
                    s.rc((r = s.ec())) && (e.tplNumber = r.first),
                    s.rc((r = s.ec())) && (e.tplPrevious = r.first));
              },
              hostAttrs: ['role', 'navigation'],
              inputs: {
                page: 'page',
                disabled: 'disabled',
                boundaryLinks: 'boundaryLinks',
                directionLinks: 'directionLinks',
                ellipses: 'ellipses',
                maxSize: 'maxSize',
                pageSize: 'pageSize',
                rotate: 'rotate',
                size: 'size',
                collectionSize: 'collectionSize'
              },
              outputs: { pageChange: 'pageChange' },
              features: [s.xb],
              decls: 32,
              vars: 7,
              consts: [
                ['first', ''],
                ['previous', ''],
                ['next', ''],
                ['last', ''],
                ['ellipsis', ''],
                ['defaultNumber', ''],
                ['class', 'page-item', 3, 'disabled', 4, 'ngIf'],
                ['class', 'page-item', 3, 'active', 'disabled', 4, 'ngFor', 'ngForOf'],
                ['aria-hidden', 'true'],
                ['class', 'sr-only', 4, 'ngIf'],
                [1, 'sr-only'],
                [1, 'page-item'],
                ['href', '', 1, 'page-link', 3, 'click', 6, 'aria-label'],
                [3, 'ngTemplateOutlet', 'ngTemplateOutletContext'],
                ['class', 'page-link', 'tabindex', '-1', 'aria-disabled', 'true', 4, 'ngIf'],
                ['class', 'page-link', 'href', '', 3, 'click', 4, 'ngIf'],
                ['tabindex', '-1', 'aria-disabled', 'true', 1, 'page-link'],
                ['href', '', 1, 'page-link', 3, 'click']
              ],
              template: function(t, e) {
                1 & t &&
                  (s.Cc(0, '\n    '),
                  s.Ac(1, kn, 2, 0, 'ng-template', null, 0, s.Bc),
                  s.Cc(3, '\n    '),
                  s.Ac(4, An, 2, 0, 'ng-template', null, 1, s.Bc),
                  s.Cc(6, '\n    '),
                  s.Ac(7, In, 2, 0, 'ng-template', null, 2, s.Bc),
                  s.Cc(9, '\n    '),
                  s.Ac(10, Pn, 2, 0, 'ng-template', null, 3, s.Bc),
                  s.Cc(12, '\n    '),
                  s.Ac(13, Rn, 1, 0, 'ng-template', null, 4, s.Bc),
                  s.Cc(15, '\n    '),
                  s.Ac(16, jn, 3, 2, 'ng-template', null, 5, s.Bc),
                  s.Cc(18, '\n    '),
                  s.Rb(19, 'ul'),
                  s.Cc(20, '\n      '),
                  s.Ac(21, Fn, 8, 9, 'li', 6),
                  s.Cc(22, '\n\n      '),
                  s.Ac(23, zn, 8, 8, 'li', 6),
                  s.Cc(24, '\n      '),
                  s.Ac(25, Wn, 6, 7, 'li', 7),
                  s.Cc(26, '\n      '),
                  s.Ac(27, Yn, 8, 9, 'li', 6),
                  s.Cc(28, '\n\n      '),
                  s.Ac(29, er, 8, 9, 'li', 6),
                  s.Cc(30, '\n    '),
                  s.Qb(),
                  s.Cc(31, '\n  ')),
                  2 & t &&
                    (s.zb(19),
                    s.Bb('pagination' + (e.size ? ' pagination-' + e.size : '')),
                    s.zb(2),
                    s.kc('ngIf', e.boundaryLinks),
                    s.zb(2),
                    s.kc('ngIf', e.directionLinks),
                    s.zb(2),
                    s.kc('ngForOf', e.pages),
                    s.zb(2),
                    s.kc('ngIf', e.directionLinks),
                    s.zb(2),
                    s.kc('ngIf', e.boundaryLinks));
              },
              directives: [i.k, i.j, i.l],
              encapsulation: 2,
              changeDetection: 0
            })),
            t
          );
        })(),
        Lr = (() => {
          let t = class {};
          return (
            (t.ɵmod = s.Kb({ type: t })),
            (t.ɵinj = s.Jb({
              factory: function(e) {
                return new (e || t)();
              },
              imports: [[i.b]]
            })),
            t
          );
        })(),
        Fr = (() => {
          let t = class {};
          return (
            (t.ɵmod = s.Kb({ type: t })),
            (t.ɵinj = s.Jb({
              factory: function(e) {
                return new (e || t)();
              },
              imports: [[i.b]]
            })),
            t
          );
        })(),
        Vr = (() => {
          let t = class {};
          return (
            (t.ɵmod = s.Kb({ type: t })),
            (t.ɵinj = s.Jb({
              factory: function(e) {
                return new (e || t)();
              },
              imports: [[i.b]]
            })),
            t
          );
        })(),
        Hr = (() => {
          let t = class {};
          return (
            (t.ɵmod = s.Kb({ type: t })),
            (t.ɵinj = s.Jb({
              factory: function(e) {
                return new (e || t)();
              },
              imports: [[i.b]]
            })),
            t
          );
        })(),
        Ur = (() => {
          let t = class {};
          return (
            (t.ɵmod = s.Kb({ type: t })),
            (t.ɵinj = s.Jb({
              factory: function(e) {
                return new (e || t)();
              },
              imports: [[i.b]]
            })),
            t
          );
        })(),
        zr = (() => {
          let t = class {};
          return (
            (t.ɵmod = s.Kb({ type: t })),
            (t.ɵinj = s.Jb({
              factory: function(e) {
                return new (e || t)();
              },
              imports: [[i.b]]
            })),
            t
          );
        })(),
        $r = (() => {
          let t = class {};
          return (
            (t.ɵmod = s.Kb({ type: t })),
            (t.ɵinj = s.Jb({
              factory: function(e) {
                return new (e || t)();
              },
              imports: [[i.b]]
            })),
            t
          );
        })(),
        Br = (() => {
          let t = class {};
          return (
            (t.ɵmod = s.Kb({ type: t })),
            (t.ɵinj = s.Jb({
              factory: function(e) {
                return new (e || t)();
              }
            })),
            t
          );
        })(),
        qr = (() => {
          let t = class {};
          return (
            (t.ɵmod = s.Kb({ type: t })),
            (t.ɵinj = s.Jb({
              factory: function(e) {
                return new (e || t)();
              },
              imports: [[i.b]]
            })),
            t
          );
        })();
      const Zr = [sr, ir, or, ar, cr, pr, gr, Tr, kr, Lr, Fr, Vr, Hr, zr, $r, Br, qr, Ur];
      let Qr = (() => {
        let t = class {};
        return (
          (t.ɵmod = s.Kb({ type: t })),
          (t.ɵinj = s.Jb({
            factory: function(e) {
              return new (e || t)();
            },
            imports: [Zr, sr, ir, or, ar, cr, pr, gr, Tr, kr, Lr, Fr, Vr, Hr, zr, $r, Br, qr, Ur]
          })),
          t
        );
      })();
      const Gr = (() => {
        function t() {
          return Error.call(this), (this.message = 'no elements in sequence'), (this.name = 'EmptyError'), this;
        }
        return (t.prototype = Object.create(Error.prototype)), t;
      })();
      function Wr(t) {
        return new o.a(e => {
          let n;
          try {
            n = t();
          } catch (r) {
            return void e.error(r);
          }
          return (n ? Object(u.a)(n) : fe()).subscribe(e);
        });
      }
      function Kr(t = Xr) {
        return e => e.lift(new Jr(t));
      }
      class Jr {
        constructor(t) {
          this.errorFactory = t;
        }
        call(t, e) {
          return e.subscribe(new Yr(t, this.errorFactory));
        }
      }
      class Yr extends Ot.a {
        constructor(t, e) {
          super(t), (this.errorFactory = e), (this.hasValue = !1);
        }
        _next(t) {
          (this.hasValue = !0), this.destination.next(t);
        }
        _complete() {
          if (this.hasValue) return this.destination.complete();
          {
            let e;
            try {
              e = this.errorFactory();
            } catch (t) {
              e = t;
            }
            this.destination.error(e);
          }
        }
      }
      function Xr() {
        return new Gr();
      }
      var ts = n('SpAZ');
      function es(t, e) {
        const n = arguments.length >= 2;
        return r => r.pipe(t ? Tt((e, n) => t(e, n, r)) : ts.a, Ce(1), n ? xe(e) : Kr(() => new Gr()));
      }
      function ns(t) {
        return function(e) {
          const n = new rs(t),
            r = e.lift(n);
          return (n.caught = r);
        };
      }
      class rs {
        constructor(t) {
          this.selector = t;
        }
        call(t, e) {
          return e.subscribe(new ss(t, this.selector, this.caught));
        }
      }
      class ss extends Pe.a {
        constructor(t, e, n) {
          super(t), (this.selector = e), (this.caught = n);
        }
        error(t) {
          if (!this.isStopped) {
            let n;
            try {
              n = this.selector(t, this.caught);
            } catch (e) {
              return void super.error(e);
            }
            this._unsubscribeAndRecycle();
            const r = new Re.a(this, void 0, void 0);
            this.add(r);
            const s = Object(De.a)(this, n, void 0, void 0, r);
            s !== r && this.add(s);
          }
        }
      }
      function is(t, e) {
        const n = arguments.length >= 2;
        return r => r.pipe(t ? Tt((e, n) => t(e, n, r)) : ts.a, ge(1), n ? xe(e) : Kr(() => new Gr()));
      }
      class os {
        constructor(t, e, n) {
          (this.predicate = t), (this.thisArg = e), (this.source = n);
        }
        call(t, e) {
          return e.subscribe(new as(t, this.predicate, this.thisArg, this.source));
        }
      }
      class as extends Ot.a {
        constructor(t, e, n, r) {
          super(t),
            (this.predicate = e),
            (this.thisArg = n),
            (this.source = r),
            (this.index = 0),
            (this.thisArg = n || this);
        }
        notifyComplete(t) {
          this.destination.next(t), this.destination.complete();
        }
        _next(t) {
          let e = !1;
          try {
            e = this.predicate.call(this.thisArg, t, this.index++, this.source);
          } catch (n) {
            return void this.destination.error(n);
          }
          e || this.notifyComplete(!1);
        }
        _complete() {
          this.notifyComplete(!0);
        }
      }
      function ls(t) {
        return e => e.lift(new cs(t));
      }
      class cs {
        constructor(t) {
          this.callback = t;
        }
        call(t, e) {
          return e.subscribe(new us(t, this.callback));
        }
      }
      class us extends Ot.a {
        constructor(t, e) {
          super(t), this.add(new cn.a(e));
        }
      }
      class hs {
        constructor(t, e) {
          (this.id = t), (this.url = e);
        }
      }
      class ds extends hs {
        constructor(t, e, n = 'imperative', r = null) {
          super(t, e), (this.navigationTrigger = n), (this.restoredState = r);
        }
        toString() {
          return `NavigationStart(id: ${this.id}, url: '${this.url}')`;
        }
      }
      class ps extends hs {
        constructor(t, e, n) {
          super(t, e), (this.urlAfterRedirects = n);
        }
        toString() {
          return `NavigationEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}')`;
        }
      }
      class fs extends hs {
        constructor(t, e, n) {
          super(t, e), (this.reason = n);
        }
        toString() {
          return `NavigationCancel(id: ${this.id}, url: '${this.url}')`;
        }
      }
      class gs extends hs {
        constructor(t, e, n) {
          super(t, e), (this.error = n);
        }
        toString() {
          return `NavigationError(id: ${this.id}, url: '${this.url}', error: ${this.error})`;
        }
      }
      class ms extends hs {
        constructor(t, e, n, r) {
          super(t, e), (this.urlAfterRedirects = n), (this.state = r);
        }
        toString() {
          return `RoutesRecognized(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`;
        }
      }
      class ys extends hs {
        constructor(t, e, n, r) {
          super(t, e), (this.urlAfterRedirects = n), (this.state = r);
        }
        toString() {
          return `GuardsCheckStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`;
        }
      }
      class bs extends hs {
        constructor(t, e, n, r, s) {
          super(t, e), (this.urlAfterRedirects = n), (this.state = r), (this.shouldActivate = s);
        }
        toString() {
          return `GuardsCheckEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state}, shouldActivate: ${this.shouldActivate})`;
        }
      }
      class _s extends hs {
        constructor(t, e, n, r) {
          super(t, e), (this.urlAfterRedirects = n), (this.state = r);
        }
        toString() {
          return `ResolveStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`;
        }
      }
      class vs extends hs {
        constructor(t, e, n, r) {
          super(t, e), (this.urlAfterRedirects = n), (this.state = r);
        }
        toString() {
          return `ResolveEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`;
        }
      }
      class ws {
        constructor(t) {
          this.route = t;
        }
        toString() {
          return `RouteConfigLoadStart(path: ${this.route.path})`;
        }
      }
      class Cs {
        constructor(t) {
          this.route = t;
        }
        toString() {
          return `RouteConfigLoadEnd(path: ${this.route.path})`;
        }
      }
      class Ss {
        constructor(t) {
          this.snapshot = t;
        }
        toString() {
          return `ChildActivationStart(path: '${(this.snapshot.routeConfig && this.snapshot.routeConfig.path) || ''}')`;
        }
      }
      class Es {
        constructor(t) {
          this.snapshot = t;
        }
        toString() {
          return `ChildActivationEnd(path: '${(this.snapshot.routeConfig && this.snapshot.routeConfig.path) || ''}')`;
        }
      }
      class xs {
        constructor(t) {
          this.snapshot = t;
        }
        toString() {
          return `ActivationStart(path: '${(this.snapshot.routeConfig && this.snapshot.routeConfig.path) || ''}')`;
        }
      }
      class Os {
        constructor(t) {
          this.snapshot = t;
        }
        toString() {
          return `ActivationEnd(path: '${(this.snapshot.routeConfig && this.snapshot.routeConfig.path) || ''}')`;
        }
      }
      class Ts {
        constructor(t, e, n) {
          (this.routerEvent = t), (this.position = e), (this.anchor = n);
        }
        toString() {
          return `Scroll(anchor: '${this.anchor}', position: '${
            this.position ? `${this.position[0]}, ${this.position[1]}` : null
          }')`;
        }
      }
      let ks = (() => {
        class t {}
        return (
          (t.ɵfac = function(e) {
            return new (e || t)();
          }),
          (t.ɵcmp = s.Gb({
            type: t,
            selectors: [['ng-component']],
            decls: 1,
            vars: 0,
            template: function(t, e) {
              1 & t && s.Nb(0, 'router-outlet');
            },
            directives: function() {
              return [No];
            },
            encapsulation: 2
          })),
          t
        );
      })();
      class As {
        constructor(t) {
          this.params = t || {};
        }
        has(t) {
          return this.params.hasOwnProperty(t);
        }
        get(t) {
          if (this.has(t)) {
            const e = this.params[t];
            return Array.isArray(e) ? e[0] : e;
          }
          return null;
        }
        getAll(t) {
          if (this.has(t)) {
            const e = this.params[t];
            return Array.isArray(e) ? e : [e];
          }
          return [];
        }
        get keys() {
          return Object.keys(this.params);
        }
      }
      function Is(t) {
        return new As(t);
      }
      function Ps(t) {
        const e = Error('NavigationCancelingError: ' + t);
        return (e.ngNavigationCancelingError = !0), e;
      }
      function Rs(t, e, n) {
        const r = n.path.split('/');
        if (r.length > t.length) return null;
        if ('full' === n.pathMatch && (e.hasChildren() || r.length < t.length)) return null;
        const s = {};
        for (let i = 0; i < r.length; i++) {
          const e = r[i],
            n = t[i];
          if (e.startsWith(':')) s[e.substring(1)] = n;
          else if (e !== n.path) return null;
        }
        return { consumed: t.slice(0, r.length), posParams: s };
      }
      class Ds {
        constructor(t, e) {
          (this.routes = t), (this.module = e);
        }
      }
      function js(t, e = '') {
        for (let n = 0; n < t.length; n++) {
          const r = t[n];
          Ns(r, Ms(e, r));
        }
      }
      function Ns(t, e) {
        if (!t)
          throw new Error(
            `\n      Invalid configuration of route '${e}': Encountered undefined route.\n      The reason might be an extra comma.\n\n      Example:\n      const routes: Routes = [\n        { path: '', redirectTo: '/dashboard', pathMatch: 'full' },\n        { path: 'dashboard',  component: DashboardComponent },, << two commas\n        { path: 'detail/:id', component: HeroDetailComponent }\n      ];\n    `
          );
        if (Array.isArray(t)) throw new Error(`Invalid configuration of route '${e}': Array cannot be specified`);
        if (!t.component && !t.children && !t.loadChildren && t.outlet && 'primary' !== t.outlet)
          throw new Error(
            `Invalid configuration of route '${e}': a componentless route without children or loadChildren cannot have a named outlet set`
          );
        if (t.redirectTo && t.children)
          throw new Error(`Invalid configuration of route '${e}': redirectTo and children cannot be used together`);
        if (t.redirectTo && t.loadChildren)
          throw new Error(`Invalid configuration of route '${e}': redirectTo and loadChildren cannot be used together`);
        if (t.children && t.loadChildren)
          throw new Error(`Invalid configuration of route '${e}': children and loadChildren cannot be used together`);
        if (t.redirectTo && t.component)
          throw new Error(`Invalid configuration of route '${e}': redirectTo and component cannot be used together`);
        if (t.path && t.matcher)
          throw new Error(`Invalid configuration of route '${e}': path and matcher cannot be used together`);
        if (void 0 === t.redirectTo && !t.component && !t.children && !t.loadChildren)
          throw new Error(
            `Invalid configuration of route '${e}'. One of the following must be provided: component, redirectTo, children or loadChildren`
          );
        if (void 0 === t.path && void 0 === t.matcher)
          throw new Error(
            `Invalid configuration of route '${e}': routes must have either a path or a matcher specified`
          );
        if ('string' == typeof t.path && '/' === t.path.charAt(0))
          throw new Error(`Invalid configuration of route '${e}': path cannot start with a slash`);
        if ('' === t.path && void 0 !== t.redirectTo && void 0 === t.pathMatch)
          throw new Error(
            `Invalid configuration of route '{path: "${e}", redirectTo: "${t.redirectTo}"}': please provide 'pathMatch'. The default value of 'pathMatch' is 'prefix', but often the intent is to use 'full'.`
          );
        if (void 0 !== t.pathMatch && 'full' !== t.pathMatch && 'prefix' !== t.pathMatch)
          throw new Error(`Invalid configuration of route '${e}': pathMatch can only be set to 'prefix' or 'full'`);
        t.children && js(t.children, e);
      }
      function Ms(t, e) {
        return e ? (t || e.path ? (t && !e.path ? t + '/' : !t && e.path ? e.path : `${t}/${e.path}`) : '') : t;
      }
      function Ls(t) {
        const e = t.children && t.children.map(Ls),
          n = e ? Object.assign(Object.assign({}, t), { children: e }) : Object.assign({}, t);
        return !n.component && (e || n.loadChildren) && n.outlet && 'primary' !== n.outlet && (n.component = ks), n;
      }
      function Fs(t, e) {
        const n = Object.keys(t),
          r = Object.keys(e);
        if (!n || !r || n.length != r.length) return !1;
        let s;
        for (let i = 0; i < n.length; i++) if (((s = n[i]), !Vs(t[s], e[s]))) return !1;
        return !0;
      }
      function Vs(t, e) {
        return Array.isArray(t) && Array.isArray(e) ? t.length == e.length && t.every(t => e.indexOf(t) > -1) : t === e;
      }
      function Hs(t) {
        return Array.prototype.concat.apply([], t);
      }
      function Us(t) {
        return t.length > 0 ? t[t.length - 1] : null;
      }
      function zs(t, e) {
        for (const n in t) t.hasOwnProperty(n) && e(t[n], n);
      }
      function $s(t) {
        return Object(s.pb)(t) ? t : Object(s.qb)(t) ? Object(u.a)(Promise.resolve(t)) : St(t);
      }
      function Bs(t, e, n) {
        return n
          ? (function(t, e) {
              return Fs(t, e);
            })(t.queryParams, e.queryParams) &&
              (function t(e, n) {
                if (!Gs(e.segments, n.segments)) return !1;
                if (e.numberOfChildren !== n.numberOfChildren) return !1;
                for (const r in n.children) {
                  if (!e.children[r]) return !1;
                  if (!t(e.children[r], n.children[r])) return !1;
                }
                return !0;
              })(t.root, e.root)
          : (function(t, e) {
              return Object.keys(e).length <= Object.keys(t).length && Object.keys(e).every(n => Vs(t[n], e[n]));
            })(t.queryParams, e.queryParams) &&
              (function t(e, n) {
                return (function e(n, r, s) {
                  if (n.segments.length > s.length) return !!Gs(n.segments.slice(0, s.length), s) && !r.hasChildren();
                  if (n.segments.length === s.length) {
                    if (!Gs(n.segments, s)) return !1;
                    for (const e in r.children) {
                      if (!n.children[e]) return !1;
                      if (!t(n.children[e], r.children[e])) return !1;
                    }
                    return !0;
                  }
                  {
                    const t = s.slice(0, n.segments.length),
                      i = s.slice(n.segments.length);
                    return !!Gs(n.segments, t) && !!n.children.primary && e(n.children.primary, r, i);
                  }
                })(e, n, n.segments);
              })(t.root, e.root);
      }
      class qs {
        constructor(t, e, n) {
          (this.root = t), (this.queryParams = e), (this.fragment = n);
        }
        get queryParamMap() {
          return this._queryParamMap || (this._queryParamMap = Is(this.queryParams)), this._queryParamMap;
        }
        toString() {
          return Ys.serialize(this);
        }
      }
      class Zs {
        constructor(t, e) {
          (this.segments = t), (this.children = e), (this.parent = null), zs(e, (t, e) => (t.parent = this));
        }
        hasChildren() {
          return this.numberOfChildren > 0;
        }
        get numberOfChildren() {
          return Object.keys(this.children).length;
        }
        toString() {
          return Xs(this);
        }
      }
      class Qs {
        constructor(t, e) {
          (this.path = t), (this.parameters = e);
        }
        get parameterMap() {
          return this._parameterMap || (this._parameterMap = Is(this.parameters)), this._parameterMap;
        }
        toString() {
          return ii(this);
        }
      }
      function Gs(t, e) {
        return t.length === e.length && t.every((t, n) => t.path === e[n].path);
      }
      function Ws(t, e) {
        let n = [];
        return (
          zs(t.children, (t, r) => {
            'primary' === r && (n = n.concat(e(t, r)));
          }),
          zs(t.children, (t, r) => {
            'primary' !== r && (n = n.concat(e(t, r)));
          }),
          n
        );
      }
      class Ks {}
      class Js {
        parse(t) {
          const e = new ui(t);
          return new qs(e.parseRootSegment(), e.parseQueryParams(), e.parseFragment());
        }
        serialize(t) {
          return `${'/' +
            (function t(e, n) {
              if (!e.hasChildren()) return Xs(e);
              if (n) {
                const n = e.children.primary ? t(e.children.primary, !1) : '',
                  r = [];
                return (
                  zs(e.children, (e, n) => {
                    'primary' !== n && r.push(`${n}:${t(e, !1)}`);
                  }),
                  r.length > 0 ? `${n}(${r.join('//')})` : n
                );
              }
              {
                const n = Ws(e, (n, r) => ('primary' === r ? [t(e.children.primary, !1)] : [`${r}:${t(n, !1)}`]));
                return `${Xs(e)}/(${n.join('//')})`;
              }
            })(t.root, !0)}${(function(t) {
            const e = Object.keys(t).map(e => {
              const n = t[e];
              return Array.isArray(n) ? n.map(t => `${ei(e)}=${ei(t)}`).join('&') : `${ei(e)}=${ei(n)}`;
            });
            return e.length ? '?' + e.join('&') : '';
          })(t.queryParams)}${'string' == typeof t.fragment ? '#' + encodeURI(t.fragment) : ''}`;
        }
      }
      const Ys = new Js();
      function Xs(t) {
        return t.segments.map(t => ii(t)).join('/');
      }
      function ti(t) {
        return encodeURIComponent(t)
          .replace(/%40/g, '@')
          .replace(/%3A/gi, ':')
          .replace(/%24/g, '$')
          .replace(/%2C/gi, ',');
      }
      function ei(t) {
        return ti(t).replace(/%3B/gi, ';');
      }
      function ni(t) {
        return ti(t)
          .replace(/\(/g, '%28')
          .replace(/\)/g, '%29')
          .replace(/%26/gi, '&');
      }
      function ri(t) {
        return decodeURIComponent(t);
      }
      function si(t) {
        return ri(t.replace(/\+/g, '%20'));
      }
      function ii(t) {
        return `${ni(t.path)}${((e = t.parameters),
        Object.keys(e)
          .map(t => `;${ni(t)}=${ni(e[t])}`)
          .join(''))}`;
        var e;
      }
      const oi = /^[^\/()?;=#]+/;
      function ai(t) {
        const e = t.match(oi);
        return e ? e[0] : '';
      }
      const li = /^[^=?&#]+/,
        ci = /^[^?&#]+/;
      class ui {
        constructor(t) {
          (this.url = t), (this.remaining = t);
        }
        parseRootSegment() {
          return (
            this.consumeOptional('/'),
            '' === this.remaining || this.peekStartsWith('?') || this.peekStartsWith('#')
              ? new Zs([], {})
              : new Zs([], this.parseChildren())
          );
        }
        parseQueryParams() {
          const t = {};
          if (this.consumeOptional('?'))
            do {
              this.parseQueryParam(t);
            } while (this.consumeOptional('&'));
          return t;
        }
        parseFragment() {
          return this.consumeOptional('#') ? decodeURIComponent(this.remaining) : null;
        }
        parseChildren() {
          if ('' === this.remaining) return {};
          this.consumeOptional('/');
          const t = [];
          for (
            this.peekStartsWith('(') || t.push(this.parseSegment());
            this.peekStartsWith('/') && !this.peekStartsWith('//') && !this.peekStartsWith('/(');

          )
            this.capture('/'), t.push(this.parseSegment());
          let e = {};
          this.peekStartsWith('/(') && (this.capture('/'), (e = this.parseParens(!0)));
          let n = {};
          return (
            this.peekStartsWith('(') && (n = this.parseParens(!1)),
            (t.length > 0 || Object.keys(e).length > 0) && (n.primary = new Zs(t, e)),
            n
          );
        }
        parseSegment() {
          const t = ai(this.remaining);
          if ('' === t && this.peekStartsWith(';'))
            throw new Error(`Empty path url segment cannot have parameters: '${this.remaining}'.`);
          return this.capture(t), new Qs(ri(t), this.parseMatrixParams());
        }
        parseMatrixParams() {
          const t = {};
          for (; this.consumeOptional(';'); ) this.parseParam(t);
          return t;
        }
        parseParam(t) {
          const e = ai(this.remaining);
          if (!e) return;
          this.capture(e);
          let n = '';
          if (this.consumeOptional('=')) {
            const t = ai(this.remaining);
            t && ((n = t), this.capture(n));
          }
          t[ri(e)] = ri(n);
        }
        parseQueryParam(t) {
          const e = (function(t) {
            const e = t.match(li);
            return e ? e[0] : '';
          })(this.remaining);
          if (!e) return;
          this.capture(e);
          let n = '';
          if (this.consumeOptional('=')) {
            const t = (function(t) {
              const e = t.match(ci);
              return e ? e[0] : '';
            })(this.remaining);
            t && ((n = t), this.capture(n));
          }
          const r = si(e),
            s = si(n);
          if (t.hasOwnProperty(r)) {
            let e = t[r];
            Array.isArray(e) || ((e = [e]), (t[r] = e)), e.push(s);
          } else t[r] = s;
        }
        parseParens(t) {
          const e = {};
          for (this.capture('('); !this.consumeOptional(')') && this.remaining.length > 0; ) {
            const n = ai(this.remaining),
              r = this.remaining[n.length];
            if ('/' !== r && ')' !== r && ';' !== r) throw new Error(`Cannot parse url '${this.url}'`);
            let s = void 0;
            n.indexOf(':') > -1
              ? ((s = n.substr(0, n.indexOf(':'))), this.capture(s), this.capture(':'))
              : t && (s = 'primary');
            const i = this.parseChildren();
            (e[s] = 1 === Object.keys(i).length ? i.primary : new Zs([], i)), this.consumeOptional('//');
          }
          return e;
        }
        peekStartsWith(t) {
          return this.remaining.startsWith(t);
        }
        consumeOptional(t) {
          return !!this.peekStartsWith(t) && ((this.remaining = this.remaining.substring(t.length)), !0);
        }
        capture(t) {
          if (!this.consumeOptional(t)) throw new Error(`Expected "${t}".`);
        }
      }
      class hi {
        constructor(t) {
          this._root = t;
        }
        get root() {
          return this._root.value;
        }
        parent(t) {
          const e = this.pathFromRoot(t);
          return e.length > 1 ? e[e.length - 2] : null;
        }
        children(t) {
          const e = di(t, this._root);
          return e ? e.children.map(t => t.value) : [];
        }
        firstChild(t) {
          const e = di(t, this._root);
          return e && e.children.length > 0 ? e.children[0].value : null;
        }
        siblings(t) {
          const e = pi(t, this._root);
          return e.length < 2 ? [] : e[e.length - 2].children.map(t => t.value).filter(e => e !== t);
        }
        pathFromRoot(t) {
          return pi(t, this._root).map(t => t.value);
        }
      }
      function di(t, e) {
        if (t === e.value) return e;
        for (const n of e.children) {
          const e = di(t, n);
          if (e) return e;
        }
        return null;
      }
      function pi(t, e) {
        if (t === e.value) return [e];
        for (const n of e.children) {
          const r = pi(t, n);
          if (r.length) return r.unshift(e), r;
        }
        return [];
      }
      class fi {
        constructor(t, e) {
          (this.value = t), (this.children = e);
        }
        toString() {
          return `TreeNode(${this.value})`;
        }
      }
      function gi(t) {
        const e = {};
        return t && t.children.forEach(t => (e[t.value.outlet] = t)), e;
      }
      class mi extends hi {
        constructor(t, e) {
          super(t), (this.snapshot = e), Ci(this, t);
        }
        toString() {
          return this.snapshot.toString();
        }
      }
      function yi(t, e) {
        const n = (function(t, e) {
            const n = new vi([], {}, {}, '', {}, 'primary', e, null, t.root, -1, {});
            return new wi('', new fi(n, []));
          })(t, e),
          r = new sn([new Qs('', {})]),
          s = new sn({}),
          i = new sn({}),
          o = new sn({}),
          a = new sn(''),
          l = new bi(r, s, o, a, i, 'primary', e, n.root);
        return (l.snapshot = n.root), new mi(new fi(l, []), n);
      }
      class bi {
        constructor(t, e, n, r, s, i, o, a) {
          (this.url = t),
            (this.params = e),
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
          return this._paramMap || (this._paramMap = this.params.pipe(Object(l.a)(t => Is(t)))), this._paramMap;
        }
        get queryParamMap() {
          return (
            this._queryParamMap || (this._queryParamMap = this.queryParams.pipe(Object(l.a)(t => Is(t)))),
            this._queryParamMap
          );
        }
        toString() {
          return this.snapshot ? this.snapshot.toString() : `Future(${this._futureSnapshot})`;
        }
      }
      function _i(t, e = 'emptyOnly') {
        const n = t.pathFromRoot;
        let r = 0;
        if ('always' !== e)
          for (r = n.length - 1; r >= 1; ) {
            const t = n[r],
              e = n[r - 1];
            if (t.routeConfig && '' === t.routeConfig.path) r--;
            else {
              if (e.component) break;
              r--;
            }
          }
        return (function(t) {
          return t.reduce(
            (t, e) => ({
              params: Object.assign(Object.assign({}, t.params), e.params),
              data: Object.assign(Object.assign({}, t.data), e.data),
              resolve: Object.assign(Object.assign({}, t.resolve), e._resolvedData)
            }),
            { params: {}, data: {}, resolve: {} }
          );
        })(n.slice(r));
      }
      class vi {
        constructor(t, e, n, r, s, i, o, a, l, c, u) {
          (this.url = t),
            (this.params = e),
            (this.queryParams = n),
            (this.fragment = r),
            (this.data = s),
            (this.outlet = i),
            (this.component = o),
            (this.routeConfig = a),
            (this._urlSegment = l),
            (this._lastPathIndex = c),
            (this._resolve = u);
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
          return this._paramMap || (this._paramMap = Is(this.params)), this._paramMap;
        }
        get queryParamMap() {
          return this._queryParamMap || (this._queryParamMap = Is(this.queryParams)), this._queryParamMap;
        }
        toString() {
          return `Route(url:'${this.url.map(t => t.toString()).join('/')}', path:'${
            this.routeConfig ? this.routeConfig.path : ''
          }')`;
        }
      }
      class wi extends hi {
        constructor(t, e) {
          super(e), (this.url = t), Ci(this, e);
        }
        toString() {
          return Si(this._root);
        }
      }
      function Ci(t, e) {
        (e.value._routerState = t), e.children.forEach(e => Ci(t, e));
      }
      function Si(t) {
        const e = t.children.length > 0 ? ` { ${t.children.map(Si).join(', ')} } ` : '';
        return `${t.value}${e}`;
      }
      function Ei(t) {
        if (t.snapshot) {
          const e = t.snapshot,
            n = t._futureSnapshot;
          (t.snapshot = n),
            Fs(e.queryParams, n.queryParams) || t.queryParams.next(n.queryParams),
            e.fragment !== n.fragment && t.fragment.next(n.fragment),
            Fs(e.params, n.params) || t.params.next(n.params),
            (function(t, e) {
              if (t.length !== e.length) return !1;
              for (let n = 0; n < t.length; ++n) if (!Fs(t[n], e[n])) return !1;
              return !0;
            })(e.url, n.url) || t.url.next(n.url),
            Fs(e.data, n.data) || t.data.next(n.data);
        } else (t.snapshot = t._futureSnapshot), t.data.next(t._futureSnapshot.data);
      }
      function xi(t, e) {
        var n, r;
        return (
          Fs(t.params, e.params) &&
          Gs((n = t.url), (r = e.url)) &&
          n.every((t, e) => Fs(t.parameters, r[e].parameters)) &&
          !(!t.parent != !e.parent) &&
          (!t.parent || xi(t.parent, e.parent))
        );
      }
      function Oi(t) {
        return 'object' == typeof t && null != t && !t.outlets && !t.segmentPath;
      }
      function Ti(t, e, n, r, s) {
        let i = {};
        return (
          r &&
            zs(r, (t, e) => {
              i[e] = Array.isArray(t) ? t.map(t => '' + t) : '' + t;
            }),
          new qs(
            n.root === t
              ? e
              : (function t(e, n, r) {
                  const s = {};
                  return (
                    zs(e.children, (e, i) => {
                      s[i] = e === n ? r : t(e, n, r);
                    }),
                    new Zs(e.segments, s)
                  );
                })(n.root, t, e),
            i,
            s
          )
        );
      }
      class ki {
        constructor(t, e, n) {
          if (
            ((this.isAbsolute = t), (this.numberOfDoubleDots = e), (this.commands = n), t && n.length > 0 && Oi(n[0]))
          )
            throw new Error('Root segment cannot have matrix parameters');
          const r = n.find(t => 'object' == typeof t && null != t && t.outlets);
          if (r && r !== Us(n)) throw new Error('{outlets:{}} has to be the last command');
        }
        toRoot() {
          return this.isAbsolute && 1 === this.commands.length && '/' == this.commands[0];
        }
      }
      class Ai {
        constructor(t, e, n) {
          (this.segmentGroup = t), (this.processChildren = e), (this.index = n);
        }
      }
      function Ii(t) {
        return 'object' == typeof t && null != t && t.outlets ? t.outlets.primary : '' + t;
      }
      function Pi(t, e, n) {
        if ((t || (t = new Zs([], {})), 0 === t.segments.length && t.hasChildren())) return Ri(t, e, n);
        const r = (function(t, e, n) {
            let r = 0,
              s = e;
            const i = { match: !1, pathIndex: 0, commandIndex: 0 };
            for (; s < t.segments.length; ) {
              if (r >= n.length) return i;
              const e = t.segments[s],
                o = Ii(n[r]),
                a = r < n.length - 1 ? n[r + 1] : null;
              if (s > 0 && void 0 === o) break;
              if (o && a && 'object' == typeof a && void 0 === a.outlets) {
                if (!Mi(o, a, e)) return i;
                r += 2;
              } else {
                if (!Mi(o, {}, e)) return i;
                r++;
              }
              s++;
            }
            return { match: !0, pathIndex: s, commandIndex: r };
          })(t, e, n),
          s = n.slice(r.commandIndex);
        if (r.match && r.pathIndex < t.segments.length) {
          const e = new Zs(t.segments.slice(0, r.pathIndex), {});
          return (e.children.primary = new Zs(t.segments.slice(r.pathIndex), t.children)), Ri(e, 0, s);
        }
        return r.match && 0 === s.length
          ? new Zs(t.segments, {})
          : r.match && !t.hasChildren()
          ? Di(t, e, n)
          : r.match
          ? Ri(t, 0, s)
          : Di(t, e, n);
      }
      function Ri(t, e, n) {
        if (0 === n.length) return new Zs(t.segments, {});
        {
          const r = (function(t) {
              return 'object' != typeof t[0] || void 0 === t[0].outlets ? { primary: t } : t[0].outlets;
            })(n),
            s = {};
          return (
            zs(r, (n, r) => {
              null !== n && (s[r] = Pi(t.children[r], e, n));
            }),
            zs(t.children, (t, e) => {
              void 0 === r[e] && (s[e] = t);
            }),
            new Zs(t.segments, s)
          );
        }
      }
      function Di(t, e, n) {
        const r = t.segments.slice(0, e);
        let s = 0;
        for (; s < n.length; ) {
          if ('object' == typeof n[s] && void 0 !== n[s].outlets) {
            const t = ji(n[s].outlets);
            return new Zs(r, t);
          }
          if (0 === s && Oi(n[0])) {
            r.push(new Qs(t.segments[e].path, n[0])), s++;
            continue;
          }
          const i = Ii(n[s]),
            o = s < n.length - 1 ? n[s + 1] : null;
          i && o && Oi(o) ? (r.push(new Qs(i, Ni(o))), (s += 2)) : (r.push(new Qs(i, {})), s++);
        }
        return new Zs(r, {});
      }
      function ji(t) {
        const e = {};
        return (
          zs(t, (t, n) => {
            null !== t && (e[n] = Di(new Zs([], {}), 0, t));
          }),
          e
        );
      }
      function Ni(t) {
        const e = {};
        return zs(t, (t, n) => (e[n] = '' + t)), e;
      }
      function Mi(t, e, n) {
        return t == n.path && Fs(e, n.parameters);
      }
      class Li {
        constructor(t, e, n, r) {
          (this.routeReuseStrategy = t), (this.futureState = e), (this.currState = n), (this.forwardEvent = r);
        }
        activate(t) {
          const e = this.futureState._root,
            n = this.currState ? this.currState._root : null;
          this.deactivateChildRoutes(e, n, t), Ei(this.futureState.root), this.activateChildRoutes(e, n, t);
        }
        deactivateChildRoutes(t, e, n) {
          const r = gi(e);
          t.children.forEach(t => {
            const e = t.value.outlet;
            this.deactivateRoutes(t, r[e], n), delete r[e];
          }),
            zs(r, (t, e) => {
              this.deactivateRouteAndItsChildren(t, n);
            });
        }
        deactivateRoutes(t, e, n) {
          const r = t.value,
            s = e ? e.value : null;
          if (r === s)
            if (r.component) {
              const s = n.getContext(r.outlet);
              s && this.deactivateChildRoutes(t, e, s.children);
            } else this.deactivateChildRoutes(t, e, n);
          else s && this.deactivateRouteAndItsChildren(e, n);
        }
        deactivateRouteAndItsChildren(t, e) {
          this.routeReuseStrategy.shouldDetach(t.value.snapshot)
            ? this.detachAndStoreRouteSubtree(t, e)
            : this.deactivateRouteAndOutlet(t, e);
        }
        detachAndStoreRouteSubtree(t, e) {
          const n = e.getContext(t.value.outlet);
          if (n && n.outlet) {
            const e = n.outlet.detach(),
              r = n.children.onOutletDeactivated();
            this.routeReuseStrategy.store(t.value.snapshot, { componentRef: e, route: t, contexts: r });
          }
        }
        deactivateRouteAndOutlet(t, e) {
          const n = e.getContext(t.value.outlet);
          if (n) {
            const r = gi(t),
              s = t.value.component ? n.children : e;
            zs(r, (t, e) => this.deactivateRouteAndItsChildren(t, s)),
              n.outlet && (n.outlet.deactivate(), n.children.onOutletDeactivated());
          }
        }
        activateChildRoutes(t, e, n) {
          const r = gi(e);
          t.children.forEach(t => {
            this.activateRoutes(t, r[t.value.outlet], n), this.forwardEvent(new Os(t.value.snapshot));
          }),
            t.children.length && this.forwardEvent(new Es(t.value.snapshot));
        }
        activateRoutes(t, e, n) {
          const r = t.value,
            s = e ? e.value : null;
          if ((Ei(r), r === s))
            if (r.component) {
              const s = n.getOrCreateContext(r.outlet);
              this.activateChildRoutes(t, e, s.children);
            } else this.activateChildRoutes(t, e, n);
          else if (r.component) {
            const e = n.getOrCreateContext(r.outlet);
            if (this.routeReuseStrategy.shouldAttach(r.snapshot)) {
              const t = this.routeReuseStrategy.retrieve(r.snapshot);
              this.routeReuseStrategy.store(r.snapshot, null),
                e.children.onOutletReAttached(t.contexts),
                (e.attachRef = t.componentRef),
                (e.route = t.route.value),
                e.outlet && e.outlet.attach(t.componentRef, t.route.value),
                Fi(t.route);
            } else {
              const n = (function(t) {
                  for (let e = t.parent; e; e = e.parent) {
                    const t = e.routeConfig;
                    if (t && t._loadedConfig) return t._loadedConfig;
                    if (t && t.component) return null;
                  }
                  return null;
                })(r.snapshot),
                s = n ? n.module.componentFactoryResolver : null;
              (e.attachRef = null),
                (e.route = r),
                (e.resolver = s),
                e.outlet && e.outlet.activateWith(r, s),
                this.activateChildRoutes(t, null, e.children);
            }
          } else this.activateChildRoutes(t, null, n);
        }
      }
      function Fi(t) {
        Ei(t.value), t.children.forEach(Fi);
      }
      function Vi(t) {
        return 'function' == typeof t;
      }
      function Hi(t) {
        return t instanceof qs;
      }
      class Ui {
        constructor(t) {
          this.segmentGroup = t || null;
        }
      }
      class zi {
        constructor(t) {
          this.urlTree = t;
        }
      }
      function $i(t) {
        return new o.a(e => e.error(new Ui(t)));
      }
      function Bi(t) {
        return new o.a(e => e.error(new zi(t)));
      }
      function qi(t) {
        return new o.a(e => e.error(new Error(`Only absolute redirects can have named outlets. redirectTo: '${t}'`)));
      }
      class Zi {
        constructor(t, e, n, r, i) {
          (this.configLoader = e),
            (this.urlSerializer = n),
            (this.urlTree = r),
            (this.config = i),
            (this.allowRedirects = !0),
            (this.ngModule = t.get(s.x));
        }
        apply() {
          return this.expandSegmentGroup(this.ngModule, this.config, this.urlTree.root, 'primary')
            .pipe(Object(l.a)(t => this.createUrlTree(t, this.urlTree.queryParams, this.urlTree.fragment)))
            .pipe(
              ns(t => {
                if (t instanceof zi) return (this.allowRedirects = !1), this.match(t.urlTree);
                if (t instanceof Ui) throw this.noMatchError(t);
                throw t;
              })
            );
        }
        match(t) {
          return this.expandSegmentGroup(this.ngModule, this.config, t.root, 'primary')
            .pipe(Object(l.a)(e => this.createUrlTree(e, t.queryParams, t.fragment)))
            .pipe(
              ns(t => {
                if (t instanceof Ui) throw this.noMatchError(t);
                throw t;
              })
            );
        }
        noMatchError(t) {
          return new Error(`Cannot match any routes. URL Segment: '${t.segmentGroup}'`);
        }
        createUrlTree(t, e, n) {
          const r = t.segments.length > 0 ? new Zs([], { primary: t }) : t;
          return new qs(r, e, n);
        }
        expandSegmentGroup(t, e, n, r) {
          return 0 === n.segments.length && n.hasChildren()
            ? this.expandChildren(t, e, n).pipe(Object(l.a)(t => new Zs([], t)))
            : this.expandSegment(t, n, e, n.segments, r, !0);
        }
        expandChildren(t, e, n) {
          return (function(t, e) {
            if (0 === Object.keys(t).length) return St({});
            const n = [],
              r = [],
              s = {};
            return (
              zs(t, (t, i) => {
                const o = e(i, t).pipe(Object(l.a)(t => (s[i] = t)));
                'primary' === i ? n.push(o) : r.push(o);
              }),
              St.apply(null, n.concat(r)).pipe(
                ue(),
                es(),
                Object(l.a)(() => s)
              )
            );
          })(n.children, (n, r) => this.expandSegmentGroup(t, e, r, n));
        }
        expandSegment(t, e, n, r, s, i) {
          return St(...n).pipe(
            Object(l.a)(o =>
              this.expandSegmentAgainstRoute(t, e, n, o, r, s, i).pipe(
                ns(t => {
                  if (t instanceof Ui) return St(null);
                  throw t;
                })
              )
            ),
            ue(),
            is(t => !!t),
            ns((t, n) => {
              if (t instanceof Gr || 'EmptyError' === t.name) {
                if (this.noLeftoversInUrl(e, r, s)) return St(new Zs([], {}));
                throw new Ui(e);
              }
              throw t;
            })
          );
        }
        noLeftoversInUrl(t, e, n) {
          return 0 === e.length && !t.children[n];
        }
        expandSegmentAgainstRoute(t, e, n, r, s, i, o) {
          return Ki(r) !== i
            ? $i(e)
            : void 0 === r.redirectTo
            ? this.matchSegmentAgainstRoute(t, e, r, s)
            : o && this.allowRedirects
            ? this.expandSegmentAgainstRouteUsingRedirect(t, e, n, r, s, i)
            : $i(e);
        }
        expandSegmentAgainstRouteUsingRedirect(t, e, n, r, s, i) {
          return '**' === r.path
            ? this.expandWildCardWithParamsAgainstRouteUsingRedirect(t, n, r, i)
            : this.expandRegularSegmentAgainstRouteUsingRedirect(t, e, n, r, s, i);
        }
        expandWildCardWithParamsAgainstRouteUsingRedirect(t, e, n, r) {
          const s = this.applyRedirectCommands([], n.redirectTo, {});
          return n.redirectTo.startsWith('/')
            ? Bi(s)
            : this.lineralizeSegments(n, s).pipe(
                Object(Et.a)(n => {
                  const s = new Zs(n, {});
                  return this.expandSegment(t, s, e, n, r, !1);
                })
              );
        }
        expandRegularSegmentAgainstRouteUsingRedirect(t, e, n, r, s, i) {
          const { matched: o, consumedSegments: a, lastChild: l, positionalParamSegments: c } = Qi(e, r, s);
          if (!o) return $i(e);
          const u = this.applyRedirectCommands(a, r.redirectTo, c);
          return r.redirectTo.startsWith('/')
            ? Bi(u)
            : this.lineralizeSegments(r, u).pipe(
                Object(Et.a)(r => this.expandSegment(t, e, n, r.concat(s.slice(l)), i, !1))
              );
        }
        matchSegmentAgainstRoute(t, e, n, r) {
          if ('**' === n.path)
            return n.loadChildren
              ? this.configLoader.load(t.injector, n).pipe(Object(l.a)(t => ((n._loadedConfig = t), new Zs(r, {}))))
              : St(new Zs(r, {}));
          const { matched: s, consumedSegments: i, lastChild: o } = Qi(e, n, r);
          if (!s) return $i(e);
          const a = r.slice(o);
          return this.getChildConfig(t, n, r).pipe(
            Object(Et.a)(t => {
              const n = t.module,
                r = t.routes,
                { segmentGroup: s, slicedSegments: o } = (function(t, e, n, r) {
                  return n.length > 0 &&
                    (function(t, e, n) {
                      return n.some(n => Wi(t, e, n) && 'primary' !== Ki(n));
                    })(t, n, r)
                    ? {
                        segmentGroup: Gi(
                          new Zs(
                            e,
                            (function(t, e) {
                              const n = {};
                              n.primary = e;
                              for (const r of t) '' === r.path && 'primary' !== Ki(r) && (n[Ki(r)] = new Zs([], {}));
                              return n;
                            })(r, new Zs(n, t.children))
                          )
                        ),
                        slicedSegments: []
                      }
                    : 0 === n.length &&
                      (function(t, e, n) {
                        return n.some(n => Wi(t, e, n));
                      })(t, n, r)
                    ? {
                        segmentGroup: Gi(
                          new Zs(
                            t.segments,
                            (function(t, e, n, r) {
                              const s = {};
                              for (const i of n) Wi(t, e, i) && !r[Ki(i)] && (s[Ki(i)] = new Zs([], {}));
                              return Object.assign(Object.assign({}, r), s);
                            })(t, n, r, t.children)
                          )
                        ),
                        slicedSegments: n
                      }
                    : { segmentGroup: t, slicedSegments: n };
                })(e, i, a, r);
              return 0 === o.length && s.hasChildren()
                ? this.expandChildren(n, r, s).pipe(Object(l.a)(t => new Zs(i, t)))
                : 0 === r.length && 0 === o.length
                ? St(new Zs(i, {}))
                : this.expandSegment(n, s, r, o, 'primary', !0).pipe(
                    Object(l.a)(t => new Zs(i.concat(t.segments), t.children))
                  );
            })
          );
        }
        getChildConfig(t, e, n) {
          return e.children
            ? St(new Ds(e.children, t))
            : e.loadChildren
            ? void 0 !== e._loadedConfig
              ? St(e._loadedConfig)
              : (function(t, e, n) {
                  const r = e.canLoad;
                  return r && 0 !== r.length
                    ? Object(u.a)(r)
                        .pipe(
                          Object(l.a)(r => {
                            const s = t.get(r);
                            let i;
                            if (
                              (function(t) {
                                return t && Vi(t.canLoad);
                              })(s)
                            )
                              i = s.canLoad(e, n);
                            else {
                              if (!Vi(s)) throw new Error('Invalid CanLoad guard');
                              i = s(e, n);
                            }
                            return $s(i);
                          })
                        )
                        .pipe(ue(), ((s = t => !0 === t), t => t.lift(new os(s, void 0, t))))
                    : St(!0);
                  var s;
                })(t.injector, e, n).pipe(
                  Object(Et.a)(n =>
                    n
                      ? this.configLoader.load(t.injector, e).pipe(Object(l.a)(t => ((e._loadedConfig = t), t)))
                      : (function(t) {
                          return new o.a(e =>
                            e.error(
                              Ps(
                                `Cannot load children because the guard of the route "path: '${t.path}'" returned false`
                              )
                            )
                          );
                        })(e)
                  )
                )
            : St(new Ds([], t));
        }
        lineralizeSegments(t, e) {
          let n = [],
            r = e.root;
          for (;;) {
            if (((n = n.concat(r.segments)), 0 === r.numberOfChildren)) return St(n);
            if (r.numberOfChildren > 1 || !r.children.primary) return qi(t.redirectTo);
            r = r.children.primary;
          }
        }
        applyRedirectCommands(t, e, n) {
          return this.applyRedirectCreatreUrlTree(e, this.urlSerializer.parse(e), t, n);
        }
        applyRedirectCreatreUrlTree(t, e, n, r) {
          const s = this.createSegmentGroup(t, e.root, n, r);
          return new qs(s, this.createQueryParams(e.queryParams, this.urlTree.queryParams), e.fragment);
        }
        createQueryParams(t, e) {
          const n = {};
          return (
            zs(t, (t, r) => {
              if ('string' == typeof t && t.startsWith(':')) {
                const s = t.substring(1);
                n[r] = e[s];
              } else n[r] = t;
            }),
            n
          );
        }
        createSegmentGroup(t, e, n, r) {
          const s = this.createSegments(t, e.segments, n, r);
          let i = {};
          return (
            zs(e.children, (e, s) => {
              i[s] = this.createSegmentGroup(t, e, n, r);
            }),
            new Zs(s, i)
          );
        }
        createSegments(t, e, n, r) {
          return e.map(e => (e.path.startsWith(':') ? this.findPosParam(t, e, r) : this.findOrReturn(e, n)));
        }
        findPosParam(t, e, n) {
          const r = n[e.path.substring(1)];
          if (!r) throw new Error(`Cannot redirect to '${t}'. Cannot find '${e.path}'.`);
          return r;
        }
        findOrReturn(t, e) {
          let n = 0;
          for (const r of e) {
            if (r.path === t.path) return e.splice(n), r;
            n++;
          }
          return t;
        }
      }
      function Qi(t, e, n) {
        if ('' === e.path)
          return 'full' === e.pathMatch && (t.hasChildren() || n.length > 0)
            ? { matched: !1, consumedSegments: [], lastChild: 0, positionalParamSegments: {} }
            : { matched: !0, consumedSegments: [], lastChild: 0, positionalParamSegments: {} };
        const r = (e.matcher || Rs)(n, t, e);
        return r
          ? {
              matched: !0,
              consumedSegments: r.consumed,
              lastChild: r.consumed.length,
              positionalParamSegments: r.posParams
            }
          : { matched: !1, consumedSegments: [], lastChild: 0, positionalParamSegments: {} };
      }
      function Gi(t) {
        if (1 === t.numberOfChildren && t.children.primary) {
          const e = t.children.primary;
          return new Zs(t.segments.concat(e.segments), e.children);
        }
        return t;
      }
      function Wi(t, e, n) {
        return (
          (!(t.hasChildren() || e.length > 0) || 'full' !== n.pathMatch) && '' === n.path && void 0 !== n.redirectTo
        );
      }
      function Ki(t) {
        return t.outlet || 'primary';
      }
      class Ji {
        constructor(t) {
          (this.path = t), (this.route = this.path[this.path.length - 1]);
        }
      }
      class Yi {
        constructor(t, e) {
          (this.component = t), (this.route = e);
        }
      }
      function Xi(t, e, n) {
        const r = t._root;
        return (function t(e, n, r, s, i = { canDeactivateChecks: [], canActivateChecks: [] }) {
          const o = gi(n);
          return (
            e.children.forEach(e => {
              !(function(e, n, r, s, i = { canDeactivateChecks: [], canActivateChecks: [] }) {
                const o = e.value,
                  a = n ? n.value : null,
                  l = r ? r.getContext(e.value.outlet) : null;
                if (a && o.routeConfig === a.routeConfig) {
                  const c = (function(t, e, n) {
                    if ('function' == typeof n) return n(t, e);
                    switch (n) {
                      case 'pathParamsChange':
                        return !Gs(t.url, e.url);
                      case 'pathParamsOrQueryParamsChange':
                        return !Gs(t.url, e.url) || !Fs(t.queryParams, e.queryParams);
                      case 'always':
                        return !0;
                      case 'paramsOrQueryParamsChange':
                        return !xi(t, e) || !Fs(t.queryParams, e.queryParams);
                      case 'paramsChange':
                      default:
                        return !xi(t, e);
                    }
                  })(a, o, o.routeConfig.runGuardsAndResolvers);
                  c ? i.canActivateChecks.push(new Ji(s)) : ((o.data = a.data), (o._resolvedData = a._resolvedData)),
                    t(e, n, o.component ? (l ? l.children : null) : r, s, i),
                    c && i.canDeactivateChecks.push(new Yi((l && l.outlet && l.outlet.component) || null, a));
                } else
                  a && eo(n, l, i),
                    i.canActivateChecks.push(new Ji(s)),
                    t(e, null, o.component ? (l ? l.children : null) : r, s, i);
              })(e, o[e.value.outlet], r, s.concat([e.value]), i),
                delete o[e.value.outlet];
            }),
            zs(o, (t, e) => eo(t, r.getContext(e), i)),
            i
          );
        })(r, e ? e._root : null, n, [r.value]);
      }
      function to(t, e, n) {
        const r = (function(t) {
          if (!t) return null;
          for (let e = t.parent; e; e = e.parent) {
            const t = e.routeConfig;
            if (t && t._loadedConfig) return t._loadedConfig;
          }
          return null;
        })(e);
        return (r ? r.module.injector : n).get(t);
      }
      function eo(t, e, n) {
        const r = gi(t),
          s = t.value;
        zs(r, (t, r) => {
          eo(t, s.component ? (e ? e.children.getContext(r) : null) : e, n);
        }),
          n.canDeactivateChecks.push(
            new Yi(s.component && e && e.outlet && e.outlet.isActivated ? e.outlet.component : null, s)
          );
      }
      const no = Symbol('INITIAL_VALUE');
      function ro() {
        return je(t =>
          (function(...t) {
            let e = null,
              n = null;
            return (
              Object(vt.a)(t[t.length - 1]) && (n = t.pop()),
              'function' == typeof t[t.length - 1] && (e = t.pop()),
              1 === t.length && Object(a.a)(t[0]) && (t = t[0]),
              Object(wt.a)(t, n).lift(new an(e))
            );
          })(
            ...t.map(t =>
              t.pipe(
                ge(1),
                (function(...t) {
                  const e = t[t.length - 1];
                  return Object(vt.a)(e) ? (t.pop(), n => he(t, n, e)) : e => he(t, e);
                })(no)
              )
            )
          ).pipe(
            _e((t, e) => {
              let n = !1;
              return e.reduce((t, r, s) => {
                if (t !== no) return t;
                if ((r === no && (n = !0), !n)) {
                  if (!1 === r) return r;
                  if (s === e.length - 1 || Hi(r)) return r;
                }
                return t;
              }, t);
            }, no),
            Tt(t => t !== no),
            Object(l.a)(t => (Hi(t) ? t : !0 === t)),
            ge(1)
          )
        );
      }
      function so(t, e) {
        return null !== t && e && e(new xs(t)), St(!0);
      }
      function io(t, e) {
        return null !== t && e && e(new Ss(t)), St(!0);
      }
      function oo(t, e, n) {
        const r = e.routeConfig ? e.routeConfig.canActivate : null;
        return r && 0 !== r.length
          ? St(
              r.map(r =>
                Wr(() => {
                  const s = to(r, e, n);
                  let i;
                  if (
                    (function(t) {
                      return t && Vi(t.canActivate);
                    })(s)
                  )
                    i = $s(s.canActivate(e, t));
                  else {
                    if (!Vi(s)) throw new Error('Invalid CanActivate guard');
                    i = $s(s(e, t));
                  }
                  return i.pipe(is());
                })
              )
            ).pipe(ro())
          : St(!0);
      }
      function ao(t, e, n) {
        const r = e[e.length - 1],
          s = e
            .slice(0, e.length - 1)
            .reverse()
            .map(t =>
              (function(t) {
                const e = t.routeConfig ? t.routeConfig.canActivateChild : null;
                return e && 0 !== e.length ? { node: t, guards: e } : null;
              })(t)
            )
            .filter(t => null !== t)
            .map(e =>
              Wr(() =>
                St(
                  e.guards.map(s => {
                    const i = to(s, e.node, n);
                    let o;
                    if (
                      (function(t) {
                        return t && Vi(t.canActivateChild);
                      })(i)
                    )
                      o = $s(i.canActivateChild(r, t));
                    else {
                      if (!Vi(i)) throw new Error('Invalid CanActivateChild guard');
                      o = $s(i(r, t));
                    }
                    return o.pipe(is());
                  })
                ).pipe(ro())
              )
            );
        return St(s).pipe(ro());
      }
      class lo {}
      class co {
        constructor(t, e, n, r, s, i) {
          (this.rootComponentType = t),
            (this.config = e),
            (this.urlTree = n),
            (this.url = r),
            (this.paramsInheritanceStrategy = s),
            (this.relativeLinkResolution = i);
        }
        recognize() {
          try {
            const t = po(this.urlTree.root, [], [], this.config, this.relativeLinkResolution).segmentGroup,
              e = this.processSegmentGroup(this.config, t, 'primary'),
              n = new vi(
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
              r = new fi(n, e),
              s = new wi(this.url, r);
            return this.inheritParamsAndData(s._root), St(s);
          } catch (t) {
            return new o.a(e => e.error(t));
          }
        }
        inheritParamsAndData(t) {
          const e = t.value,
            n = _i(e, this.paramsInheritanceStrategy);
          (e.params = Object.freeze(n.params)),
            (e.data = Object.freeze(n.data)),
            t.children.forEach(t => this.inheritParamsAndData(t));
        }
        processSegmentGroup(t, e, n) {
          return 0 === e.segments.length && e.hasChildren()
            ? this.processChildren(t, e)
            : this.processSegment(t, e, e.segments, n);
        }
        processChildren(t, e) {
          const n = Ws(e, (e, n) => this.processSegmentGroup(t, e, n));
          return (
            (function(t) {
              const e = {};
              t.forEach(t => {
                const n = e[t.value.outlet];
                if (n) {
                  const e = n.url.map(t => t.toString()).join('/'),
                    r = t.value.url.map(t => t.toString()).join('/');
                  throw new Error(`Two segments cannot have the same outlet name: '${e}' and '${r}'.`);
                }
                e[t.value.outlet] = t.value;
              });
            })(n),
            n.sort((t, e) =>
              'primary' === t.value.outlet
                ? -1
                : 'primary' === e.value.outlet
                ? 1
                : t.value.outlet.localeCompare(e.value.outlet)
            ),
            n
          );
        }
        processSegment(t, e, n, r) {
          for (const i of t)
            try {
              return this.processSegmentAgainstRoute(i, e, n, r);
            } catch (s) {
              if (!(s instanceof lo)) throw s;
            }
          if (this.noLeftoversInUrl(e, n, r)) return [];
          throw new lo();
        }
        noLeftoversInUrl(t, e, n) {
          return 0 === e.length && !t.children[n];
        }
        processSegmentAgainstRoute(t, e, n, r) {
          if (t.redirectTo) throw new lo();
          if ((t.outlet || 'primary') !== r) throw new lo();
          let s,
            i = [],
            o = [];
          if ('**' === t.path) {
            const i = n.length > 0 ? Us(n).parameters : {};
            s = new vi(
              n,
              i,
              Object.freeze(Object.assign({}, this.urlTree.queryParams)),
              this.urlTree.fragment,
              mo(t),
              r,
              t.component,
              t,
              uo(e),
              ho(e) + n.length,
              yo(t)
            );
          } else {
            const a = (function(t, e, n) {
              if ('' === e.path) {
                if ('full' === e.pathMatch && (t.hasChildren() || n.length > 0)) throw new lo();
                return { consumedSegments: [], lastChild: 0, parameters: {} };
              }
              const r = (e.matcher || Rs)(n, t, e);
              if (!r) throw new lo();
              const s = {};
              zs(r.posParams, (t, e) => {
                s[e] = t.path;
              });
              const i =
                r.consumed.length > 0
                  ? Object.assign(Object.assign({}, s), r.consumed[r.consumed.length - 1].parameters)
                  : s;
              return { consumedSegments: r.consumed, lastChild: r.consumed.length, parameters: i };
            })(e, t, n);
            (i = a.consumedSegments),
              (o = n.slice(a.lastChild)),
              (s = new vi(
                i,
                a.parameters,
                Object.freeze(Object.assign({}, this.urlTree.queryParams)),
                this.urlTree.fragment,
                mo(t),
                r,
                t.component,
                t,
                uo(e),
                ho(e) + i.length,
                yo(t)
              ));
          }
          const a = (function(t) {
              return t.children ? t.children : t.loadChildren ? t._loadedConfig.routes : [];
            })(t),
            { segmentGroup: l, slicedSegments: c } = po(e, i, o, a, this.relativeLinkResolution);
          if (0 === c.length && l.hasChildren()) {
            const t = this.processChildren(a, l);
            return [new fi(s, t)];
          }
          if (0 === a.length && 0 === c.length) return [new fi(s, [])];
          const u = this.processSegment(a, l, c, 'primary');
          return [new fi(s, u)];
        }
      }
      function uo(t) {
        let e = t;
        for (; e._sourceSegment; ) e = e._sourceSegment;
        return e;
      }
      function ho(t) {
        let e = t,
          n = e._segmentIndexShift ? e._segmentIndexShift : 0;
        for (; e._sourceSegment; ) (e = e._sourceSegment), (n += e._segmentIndexShift ? e._segmentIndexShift : 0);
        return n - 1;
      }
      function po(t, e, n, r, s) {
        if (
          n.length > 0 &&
          (function(t, e, n) {
            return n.some(n => fo(t, e, n) && 'primary' !== go(n));
          })(t, n, r)
        ) {
          const s = new Zs(
            e,
            (function(t, e, n, r) {
              const s = {};
              (s.primary = r), (r._sourceSegment = t), (r._segmentIndexShift = e.length);
              for (const i of n)
                if ('' === i.path && 'primary' !== go(i)) {
                  const n = new Zs([], {});
                  (n._sourceSegment = t), (n._segmentIndexShift = e.length), (s[go(i)] = n);
                }
              return s;
            })(t, e, r, new Zs(n, t.children))
          );
          return (s._sourceSegment = t), (s._segmentIndexShift = e.length), { segmentGroup: s, slicedSegments: [] };
        }
        if (
          0 === n.length &&
          (function(t, e, n) {
            return n.some(n => fo(t, e, n));
          })(t, n, r)
        ) {
          const i = new Zs(
            t.segments,
            (function(t, e, n, r, s, i) {
              const o = {};
              for (const a of r)
                if (fo(t, n, a) && !s[go(a)]) {
                  const n = new Zs([], {});
                  (n._sourceSegment = t),
                    (n._segmentIndexShift = 'legacy' === i ? t.segments.length : e.length),
                    (o[go(a)] = n);
                }
              return Object.assign(Object.assign({}, s), o);
            })(t, e, n, r, t.children, s)
          );
          return (i._sourceSegment = t), (i._segmentIndexShift = e.length), { segmentGroup: i, slicedSegments: n };
        }
        const i = new Zs(t.segments, t.children);
        return (i._sourceSegment = t), (i._segmentIndexShift = e.length), { segmentGroup: i, slicedSegments: n };
      }
      function fo(t, e, n) {
        return (
          (!(t.hasChildren() || e.length > 0) || 'full' !== n.pathMatch) && '' === n.path && void 0 === n.redirectTo
        );
      }
      function go(t) {
        return t.outlet || 'primary';
      }
      function mo(t) {
        return t.data || {};
      }
      function yo(t) {
        return t.resolve || {};
      }
      function bo(t, e, n, r) {
        const s = to(t, e, r);
        return $s(s.resolve ? s.resolve(e, n) : s(e, n));
      }
      function _o(t) {
        return function(e) {
          return e.pipe(
            je(e => {
              const n = t(e);
              return n ? Object(u.a)(n).pipe(Object(l.a)(() => e)) : Object(u.a)([e]);
            })
          );
        };
      }
      class vo {}
      class wo {
        shouldDetach(t) {
          return !1;
        }
        store(t, e) {}
        shouldAttach(t) {
          return !1;
        }
        retrieve(t) {
          return null;
        }
        shouldReuseRoute(t, e) {
          return t.routeConfig === e.routeConfig;
        }
      }
      const Co = new s.q('ROUTES');
      class So {
        constructor(t, e, n, r) {
          (this.loader = t), (this.compiler = e), (this.onLoadStartListener = n), (this.onLoadEndListener = r);
        }
        load(t, e) {
          return (
            this.onLoadStartListener && this.onLoadStartListener(e),
            this.loadModuleFactory(e.loadChildren).pipe(
              Object(l.a)(n => {
                this.onLoadEndListener && this.onLoadEndListener(e);
                const r = n.create(t);
                return new Ds(Hs(r.injector.get(Co)).map(Ls), r);
              })
            )
          );
        }
        loadModuleFactory(t) {
          return 'string' == typeof t
            ? Object(u.a)(this.loader.load(t))
            : $s(t()).pipe(
                Object(Et.a)(t => (t instanceof s.v ? St(t) : Object(u.a)(this.compiler.compileModuleAsync(t))))
              );
        }
      }
      class Eo {
        shouldProcessUrl(t) {
          return !0;
        }
        extract(t) {
          return t;
        }
        merge(t, e) {
          return t;
        }
      }
      function xo(t) {
        throw t;
      }
      function Oo(t, e, n) {
        return e.parse('/');
      }
      function To(t, e) {
        return St(null);
      }
      let ko = (() => {
          class t {
            constructor(t, e, n, r, i, o, a, l) {
              (this.rootComponentType = t),
                (this.urlSerializer = e),
                (this.rootContexts = n),
                (this.location = r),
                (this.config = l),
                (this.lastSuccessfulNavigation = null),
                (this.currentNavigation = null),
                (this.navigationId = 0),
                (this.isNgZoneEnabled = !1),
                (this.events = new nn.a()),
                (this.errorHandler = xo),
                (this.malformedUriErrorHandler = Oo),
                (this.navigated = !1),
                (this.lastSuccessfulId = -1),
                (this.hooks = { beforePreactivation: To, afterPreactivation: To }),
                (this.urlHandlingStrategy = new Eo()),
                (this.routeReuseStrategy = new wo()),
                (this.onSameUrlNavigation = 'ignore'),
                (this.paramsInheritanceStrategy = 'emptyOnly'),
                (this.urlUpdateStrategy = 'deferred'),
                (this.relativeLinkResolution = 'legacy'),
                (this.ngModule = i.get(s.x)),
                (this.console = i.get(s.W));
              const c = i.get(s.z);
              (this.isNgZoneEnabled = c instanceof s.z),
                this.resetConfig(l),
                (this.currentUrlTree = new qs(new Zs([], {}), {}, null)),
                (this.rawUrlTree = this.currentUrlTree),
                (this.browserUrlTree = this.currentUrlTree),
                (this.configLoader = new So(
                  o,
                  a,
                  t => this.triggerEvent(new ws(t)),
                  t => this.triggerEvent(new Cs(t))
                )),
                (this.routerState = yi(this.currentUrlTree, this.rootComponentType)),
                (this.transitions = new sn({
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
            setupNavigations(t) {
              const e = this.events;
              return t.pipe(
                Tt(t => 0 !== t.id),
                Object(l.a)(t =>
                  Object.assign(Object.assign({}, t), { extractedUrl: this.urlHandlingStrategy.extract(t.rawUrl) })
                ),
                je(t => {
                  let n = !1,
                    r = !1;
                  return St(t).pipe(
                    mn(t => {
                      this.currentNavigation = {
                        id: t.id,
                        initialUrl: t.currentRawUrl,
                        extractedUrl: t.extractedUrl,
                        trigger: t.source,
                        extras: t.extras,
                        previousNavigation: this.lastSuccessfulNavigation
                          ? Object.assign(Object.assign({}, this.lastSuccessfulNavigation), {
                              previousNavigation: null
                            })
                          : null
                      };
                    }),
                    je(t => {
                      const n = !this.navigated || t.extractedUrl.toString() !== this.browserUrlTree.toString();
                      if (
                        ('reload' === this.onSameUrlNavigation || n) &&
                        this.urlHandlingStrategy.shouldProcessUrl(t.rawUrl)
                      )
                        return St(t).pipe(
                          je(t => {
                            const n = this.transitions.getValue();
                            return (
                              e.next(new ds(t.id, this.serializeUrl(t.extractedUrl), t.source, t.restoredState)),
                              n !== this.transitions.getValue() ? pe : [t]
                            );
                          }),
                          je(t => Promise.resolve(t)),
                          ((r = this.ngModule.injector),
                          (s = this.configLoader),
                          (i = this.urlSerializer),
                          (o = this.config),
                          function(t) {
                            return t.pipe(
                              je(t =>
                                (function(t, e, n, r, s) {
                                  return new Zi(t, e, n, r, s).apply();
                                })(r, s, i, t.extractedUrl, o).pipe(
                                  Object(l.a)(e => Object.assign(Object.assign({}, t), { urlAfterRedirects: e }))
                                )
                              )
                            );
                          }),
                          mn(t => {
                            this.currentNavigation = Object.assign(Object.assign({}, this.currentNavigation), {
                              finalUrl: t.urlAfterRedirects
                            });
                          }),
                          (function(t, e, n, r, s) {
                            return function(i) {
                              return i.pipe(
                                Object(Et.a)(i =>
                                  (function(t, e, n, r, s = 'emptyOnly', i = 'legacy') {
                                    return new co(t, e, n, r, s, i).recognize();
                                  })(t, e, i.urlAfterRedirects, n(i.urlAfterRedirects), r, s).pipe(
                                    Object(l.a)(t => Object.assign(Object.assign({}, i), { targetSnapshot: t }))
                                  )
                                )
                              );
                            };
                          })(
                            this.rootComponentType,
                            this.config,
                            t => this.serializeUrl(t),
                            this.paramsInheritanceStrategy,
                            this.relativeLinkResolution
                          ),
                          mn(t => {
                            'eager' === this.urlUpdateStrategy &&
                              (t.extras.skipLocationChange ||
                                this.setBrowserUrl(t.urlAfterRedirects, !!t.extras.replaceUrl, t.id, t.extras.state),
                              (this.browserUrlTree = t.urlAfterRedirects));
                          }),
                          mn(t => {
                            const n = new ms(
                              t.id,
                              this.serializeUrl(t.extractedUrl),
                              this.serializeUrl(t.urlAfterRedirects),
                              t.targetSnapshot
                            );
                            e.next(n);
                          })
                        );
                      var r, s, i, o;
                      if (n && this.rawUrlTree && this.urlHandlingStrategy.shouldProcessUrl(this.rawUrlTree)) {
                        const { id: n, extractedUrl: r, source: s, restoredState: i, extras: o } = t,
                          a = new ds(n, this.serializeUrl(r), s, i);
                        e.next(a);
                        const l = yi(r, this.rootComponentType).snapshot;
                        return St(
                          Object.assign(Object.assign({}, t), {
                            targetSnapshot: l,
                            urlAfterRedirects: r,
                            extras: Object.assign(Object.assign({}, o), { skipLocationChange: !1, replaceUrl: !1 })
                          })
                        );
                      }
                      return (
                        (this.rawUrlTree = t.rawUrl), (this.browserUrlTree = t.urlAfterRedirects), t.resolve(null), pe
                      );
                    }),
                    _o(t => {
                      const {
                        targetSnapshot: e,
                        id: n,
                        extractedUrl: r,
                        rawUrl: s,
                        extras: { skipLocationChange: i, replaceUrl: o }
                      } = t;
                      return this.hooks.beforePreactivation(e, {
                        navigationId: n,
                        appliedUrlTree: r,
                        rawUrlTree: s,
                        skipLocationChange: !!i,
                        replaceUrl: !!o
                      });
                    }),
                    mn(t => {
                      const e = new ys(
                        t.id,
                        this.serializeUrl(t.extractedUrl),
                        this.serializeUrl(t.urlAfterRedirects),
                        t.targetSnapshot
                      );
                      this.triggerEvent(e);
                    }),
                    Object(l.a)(t =>
                      Object.assign(Object.assign({}, t), {
                        guards: Xi(t.targetSnapshot, t.currentSnapshot, this.rootContexts)
                      })
                    ),
                    (function(t, e) {
                      return function(n) {
                        return n.pipe(
                          Object(Et.a)(n => {
                            const {
                              targetSnapshot: r,
                              currentSnapshot: s,
                              guards: { canActivateChecks: i, canDeactivateChecks: o }
                            } = n;
                            return 0 === o.length && 0 === i.length
                              ? St(Object.assign(Object.assign({}, n), { guardsResult: !0 }))
                              : (function(t, e, n, r) {
                                  return Object(u.a)(t).pipe(
                                    Object(Et.a)(t =>
                                      (function(t, e, n, r, s) {
                                        const i = e && e.routeConfig ? e.routeConfig.canDeactivate : null;
                                        return i && 0 !== i.length
                                          ? St(
                                              i.map(i => {
                                                const o = to(i, e, s);
                                                let a;
                                                if (
                                                  (function(t) {
                                                    return t && Vi(t.canDeactivate);
                                                  })(o)
                                                )
                                                  a = $s(o.canDeactivate(t, e, n, r));
                                                else {
                                                  if (!Vi(o)) throw new Error('Invalid CanDeactivate guard');
                                                  a = $s(o(t, e, n, r));
                                                }
                                                return a.pipe(is());
                                              })
                                            ).pipe(ro())
                                          : St(!0);
                                      })(t.component, t.route, n, e, r)
                                    ),
                                    is(t => !0 !== t, !0)
                                  );
                                })(o, r, s, t).pipe(
                                  Object(Et.a)(n =>
                                    n && 'boolean' == typeof n
                                      ? (function(t, e, n, r) {
                                          return Object(u.a)(e).pipe(
                                            xt(e =>
                                              Object(u.a)([
                                                io(e.route.parent, r),
                                                so(e.route, r),
                                                ao(t, e.path, n),
                                                oo(t, e.route, n)
                                              ]).pipe(
                                                ue(),
                                                is(t => !0 !== t, !0)
                                              )
                                            ),
                                            is(t => !0 !== t, !0)
                                          );
                                        })(r, i, t, e)
                                      : St(n)
                                  ),
                                  Object(l.a)(t => Object.assign(Object.assign({}, n), { guardsResult: t }))
                                );
                          })
                        );
                      };
                    })(this.ngModule.injector, t => this.triggerEvent(t)),
                    mn(t => {
                      if (Hi(t.guardsResult)) {
                        const e = Ps(`Redirecting to "${this.serializeUrl(t.guardsResult)}"`);
                        throw ((e.url = t.guardsResult), e);
                      }
                    }),
                    mn(t => {
                      const e = new bs(
                        t.id,
                        this.serializeUrl(t.extractedUrl),
                        this.serializeUrl(t.urlAfterRedirects),
                        t.targetSnapshot,
                        !!t.guardsResult
                      );
                      this.triggerEvent(e);
                    }),
                    Tt(t => {
                      if (!t.guardsResult) {
                        this.resetUrlToCurrentUrlTree();
                        const n = new fs(t.id, this.serializeUrl(t.extractedUrl), '');
                        return e.next(n), t.resolve(!1), !1;
                      }
                      return !0;
                    }),
                    _o(t => {
                      if (t.guards.canActivateChecks.length)
                        return St(t).pipe(
                          mn(t => {
                            const e = new _s(
                              t.id,
                              this.serializeUrl(t.extractedUrl),
                              this.serializeUrl(t.urlAfterRedirects),
                              t.targetSnapshot
                            );
                            this.triggerEvent(e);
                          }),
                          ((e = this.paramsInheritanceStrategy),
                          (n = this.ngModule.injector),
                          function(t) {
                            return t.pipe(
                              Object(Et.a)(t => {
                                const {
                                  targetSnapshot: r,
                                  guards: { canActivateChecks: s }
                                } = t;
                                return s.length
                                  ? Object(u.a)(s).pipe(
                                      xt(t =>
                                        (function(t, e, n, r) {
                                          return (function(t, e, n, r) {
                                            const s = Object.keys(t);
                                            if (0 === s.length) return St({});
                                            if (1 === s.length) {
                                              const i = s[0];
                                              return bo(t[i], e, n, r).pipe(Object(l.a)(t => ({ [i]: t })));
                                            }
                                            const i = {};
                                            return Object(u.a)(s)
                                              .pipe(
                                                Object(Et.a)(s =>
                                                  bo(t[s], e, n, r).pipe(Object(l.a)(t => ((i[s] = t), t)))
                                                )
                                              )
                                              .pipe(
                                                es(),
                                                Object(l.a)(() => i)
                                              );
                                          })(t._resolve, t, e, r).pipe(
                                            Object(l.a)(
                                              e => (
                                                (t._resolvedData = e),
                                                (t.data = Object.assign(Object.assign({}, t.data), _i(t, n).resolve)),
                                                null
                                              )
                                            )
                                          );
                                        })(t.route, r, e, n)
                                      ),
                                      Ae((t, e) => t),
                                      Object(l.a)(e => t)
                                    )
                                  : St(t);
                              })
                            );
                          }),
                          mn(t => {
                            const e = new vs(
                              t.id,
                              this.serializeUrl(t.extractedUrl),
                              this.serializeUrl(t.urlAfterRedirects),
                              t.targetSnapshot
                            );
                            this.triggerEvent(e);
                          })
                        );
                      var e, n;
                    }),
                    _o(t => {
                      const {
                        targetSnapshot: e,
                        id: n,
                        extractedUrl: r,
                        rawUrl: s,
                        extras: { skipLocationChange: i, replaceUrl: o }
                      } = t;
                      return this.hooks.afterPreactivation(e, {
                        navigationId: n,
                        appliedUrlTree: r,
                        rawUrlTree: s,
                        skipLocationChange: !!i,
                        replaceUrl: !!o
                      });
                    }),
                    Object(l.a)(t => {
                      const e = (function(t, e, n) {
                        const r = (function t(e, n, r) {
                          if (r && e.shouldReuseRoute(n.value, r.value.snapshot)) {
                            const s = r.value;
                            s._futureSnapshot = n.value;
                            const i = (function(e, n, r) {
                              return n.children.map(n => {
                                for (const s of r.children)
                                  if (e.shouldReuseRoute(s.value.snapshot, n.value)) return t(e, n, s);
                                return t(e, n);
                              });
                            })(e, n, r);
                            return new fi(s, i);
                          }
                          {
                            const r = e.retrieve(n.value);
                            if (r) {
                              const t = r.route;
                              return (
                                (function t(e, n) {
                                  if (e.value.routeConfig !== n.value.routeConfig)
                                    throw new Error(
                                      'Cannot reattach ActivatedRouteSnapshot created from a different route'
                                    );
                                  if (e.children.length !== n.children.length)
                                    throw new Error(
                                      'Cannot reattach ActivatedRouteSnapshot with a different number of children'
                                    );
                                  n.value._futureSnapshot = e.value;
                                  for (let r = 0; r < e.children.length; ++r) t(e.children[r], n.children[r]);
                                })(n, t),
                                t
                              );
                            }
                            {
                              const r = new bi(
                                  new sn((s = n.value).url),
                                  new sn(s.params),
                                  new sn(s.queryParams),
                                  new sn(s.fragment),
                                  new sn(s.data),
                                  s.outlet,
                                  s.component,
                                  s
                                ),
                                i = n.children.map(n => t(e, n));
                              return new fi(r, i);
                            }
                          }
                          var s;
                        })(t, e._root, n ? n._root : void 0);
                        return new mi(r, e);
                      })(this.routeReuseStrategy, t.targetSnapshot, t.currentRouterState);
                      return Object.assign(Object.assign({}, t), { targetRouterState: e });
                    }),
                    mn(t => {
                      (this.currentUrlTree = t.urlAfterRedirects),
                        (this.rawUrlTree = this.urlHandlingStrategy.merge(this.currentUrlTree, t.rawUrl)),
                        (this.routerState = t.targetRouterState),
                        'deferred' === this.urlUpdateStrategy &&
                          (t.extras.skipLocationChange ||
                            this.setBrowserUrl(this.rawUrlTree, !!t.extras.replaceUrl, t.id, t.extras.state),
                          (this.browserUrlTree = t.urlAfterRedirects));
                    }),
                    ((s = this.rootContexts),
                    (i = this.routeReuseStrategy),
                    (o = t => this.triggerEvent(t)),
                    Object(l.a)(t => (new Li(i, t.targetRouterState, t.currentRouterState, o).activate(s), t))),
                    mn({
                      next() {
                        n = !0;
                      },
                      complete() {
                        n = !0;
                      }
                    }),
                    ls(() => {
                      if (!n && !r) {
                        this.resetUrlToCurrentUrlTree();
                        const n = new fs(
                          t.id,
                          this.serializeUrl(t.extractedUrl),
                          `Navigation ID ${t.id} is not equal to the current navigation id ${this.navigationId}`
                        );
                        e.next(n), t.resolve(!1);
                      }
                      this.currentNavigation = null;
                    }),
                    ns(n => {
                      if (((r = !0), (s = n) && s.ngNavigationCancelingError)) {
                        const r = Hi(n.url);
                        r ||
                          ((this.navigated = !0),
                          this.resetStateAndUrl(t.currentRouterState, t.currentUrlTree, t.rawUrl));
                        const s = new fs(t.id, this.serializeUrl(t.extractedUrl), n.message);
                        e.next(s),
                          r
                            ? setTimeout(() => {
                                const e = this.urlHandlingStrategy.merge(n.url, this.rawUrlTree);
                                return this.scheduleNavigation(
                                  e,
                                  'imperative',
                                  null,
                                  {
                                    skipLocationChange: t.extras.skipLocationChange,
                                    replaceUrl: 'eager' === this.urlUpdateStrategy
                                  },
                                  { resolve: t.resolve, reject: t.reject, promise: t.promise }
                                );
                              }, 0)
                            : t.resolve(!1);
                      } else {
                        this.resetStateAndUrl(t.currentRouterState, t.currentUrlTree, t.rawUrl);
                        const r = new gs(t.id, this.serializeUrl(t.extractedUrl), n);
                        e.next(r);
                        try {
                          t.resolve(this.errorHandler(n));
                        } catch (i) {
                          t.reject(i);
                        }
                      }
                      var s;
                      return pe;
                    })
                  );
                  var s, i, o;
                })
              );
            }
            resetRootComponentType(t) {
              (this.rootComponentType = t), (this.routerState.root.component = this.rootComponentType);
            }
            getTransition() {
              const t = this.transitions.value;
              return (t.urlAfterRedirects = this.browserUrlTree), t;
            }
            setTransition(t) {
              this.transitions.next(Object.assign(Object.assign({}, this.getTransition()), t));
            }
            initialNavigation() {
              this.setUpLocationChangeListener(),
                0 === this.navigationId && this.navigateByUrl(this.location.path(!0), { replaceUrl: !0 });
            }
            setUpLocationChangeListener() {
              this.locationSubscription ||
                (this.locationSubscription = this.location.subscribe(t => {
                  let e = this.parseUrl(t.url);
                  const n = 'popstate' === t.type ? 'popstate' : 'hashchange',
                    r = t.state && t.state.navigationId ? t.state : null;
                  setTimeout(() => {
                    this.scheduleNavigation(e, n, r, { replaceUrl: !0 });
                  }, 0);
                }));
            }
            get url() {
              return this.serializeUrl(this.currentUrlTree);
            }
            getCurrentNavigation() {
              return this.currentNavigation;
            }
            triggerEvent(t) {
              this.events.next(t);
            }
            resetConfig(t) {
              js(t), (this.config = t.map(Ls)), (this.navigated = !1), (this.lastSuccessfulId = -1);
            }
            ngOnDestroy() {
              this.dispose();
            }
            dispose() {
              this.locationSubscription &&
                (this.locationSubscription.unsubscribe(), (this.locationSubscription = null));
            }
            createUrlTree(t, e = {}) {
              const {
                relativeTo: n,
                queryParams: r,
                fragment: i,
                preserveQueryParams: o,
                queryParamsHandling: a,
                preserveFragment: l
              } = e;
              Object(s.T)() &&
                o &&
                console &&
                console.warn &&
                console.warn('preserveQueryParams is deprecated, use queryParamsHandling instead.');
              const c = n || this.routerState.root,
                u = l ? this.currentUrlTree.fragment : i;
              let h = null;
              if (a)
                switch (a) {
                  case 'merge':
                    h = Object.assign(Object.assign({}, this.currentUrlTree.queryParams), r);
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
                (function(t, e, n, r, s) {
                  if (0 === n.length) return Ti(e.root, e.root, e, r, s);
                  const i = (function(t) {
                    if ('string' == typeof t[0] && 1 === t.length && '/' === t[0]) return new ki(!0, 0, t);
                    let e = 0,
                      n = !1;
                    const r = t.reduce((t, r, s) => {
                      if ('object' == typeof r && null != r) {
                        if (r.outlets) {
                          const e = {};
                          return (
                            zs(r.outlets, (t, n) => {
                              e[n] = 'string' == typeof t ? t.split('/') : t;
                            }),
                            [...t, { outlets: e }]
                          );
                        }
                        if (r.segmentPath) return [...t, r.segmentPath];
                      }
                      return 'string' != typeof r
                        ? [...t, r]
                        : 0 === s
                        ? (r.split('/').forEach((r, s) => {
                            (0 == s && '.' === r) ||
                              (0 == s && '' === r ? (n = !0) : '..' === r ? e++ : '' != r && t.push(r));
                          }),
                          t)
                        : [...t, r];
                    }, []);
                    return new ki(n, e, r);
                  })(n);
                  if (i.toRoot()) return Ti(e.root, new Zs([], {}), e, r, s);
                  const o = (function(t, e, n) {
                      if (t.isAbsolute) return new Ai(e.root, !0, 0);
                      if (-1 === n.snapshot._lastPathIndex) return new Ai(n.snapshot._urlSegment, !0, 0);
                      const r = Oi(t.commands[0]) ? 0 : 1;
                      return (function(t, e, n) {
                        let r = t,
                          s = e,
                          i = n;
                        for (; i > s; ) {
                          if (((i -= s), (r = r.parent), !r)) throw new Error("Invalid number of '../'");
                          s = r.segments.length;
                        }
                        return new Ai(r, !1, s - i);
                      })(n.snapshot._urlSegment, n.snapshot._lastPathIndex + r, t.numberOfDoubleDots);
                    })(i, e, t),
                    a = o.processChildren
                      ? Ri(o.segmentGroup, o.index, i.commands)
                      : Pi(o.segmentGroup, o.index, i.commands);
                  return Ti(o.segmentGroup, a, e, r, s);
                })(c, this.currentUrlTree, t, h, u)
              );
            }
            navigateByUrl(t, e = { skipLocationChange: !1 }) {
              Object(s.T)() &&
                this.isNgZoneEnabled &&
                !s.z.isInAngularZone() &&
                this.console.warn("Navigation triggered outside Angular zone, did you forget to call 'ngZone.run()'?");
              const n = Hi(t) ? t : this.parseUrl(t),
                r = this.urlHandlingStrategy.merge(n, this.rawUrlTree);
              return this.scheduleNavigation(r, 'imperative', null, e);
            }
            navigate(t, e = { skipLocationChange: !1 }) {
              return (
                (function(t) {
                  for (let e = 0; e < t.length; e++) {
                    const n = t[e];
                    if (null == n) throw new Error(`The requested path contains ${n} segment at index ${e}`);
                  }
                })(t),
                this.navigateByUrl(this.createUrlTree(t, e), e)
              );
            }
            serializeUrl(t) {
              return this.urlSerializer.serialize(t);
            }
            parseUrl(t) {
              let e;
              try {
                e = this.urlSerializer.parse(t);
              } catch (n) {
                e = this.malformedUriErrorHandler(n, this.urlSerializer, t);
              }
              return e;
            }
            isActive(t, e) {
              if (Hi(t)) return Bs(this.currentUrlTree, t, e);
              const n = this.parseUrl(t);
              return Bs(this.currentUrlTree, n, e);
            }
            removeEmptyProps(t) {
              return Object.keys(t).reduce((e, n) => {
                const r = t[n];
                return null != r && (e[n] = r), e;
              }, {});
            }
            processNavigations() {
              this.navigations.subscribe(
                t => {
                  (this.navigated = !0),
                    (this.lastSuccessfulId = t.id),
                    this.events.next(
                      new ps(t.id, this.serializeUrl(t.extractedUrl), this.serializeUrl(this.currentUrlTree))
                    ),
                    (this.lastSuccessfulNavigation = this.currentNavigation),
                    (this.currentNavigation = null),
                    t.resolve(!0);
                },
                t => {
                  this.console.warn('Unhandled Navigation Error: ');
                }
              );
            }
            scheduleNavigation(t, e, n, r, s) {
              const i = this.getTransition();
              if (i && 'imperative' !== e && 'imperative' === i.source && i.rawUrl.toString() === t.toString())
                return Promise.resolve(!0);
              if (i && 'hashchange' == e && 'popstate' === i.source && i.rawUrl.toString() === t.toString())
                return Promise.resolve(!0);
              if (i && 'popstate' == e && 'hashchange' === i.source && i.rawUrl.toString() === t.toString())
                return Promise.resolve(!0);
              let o, a, l;
              s
                ? ((o = s.resolve), (a = s.reject), (l = s.promise))
                : (l = new Promise((t, e) => {
                    (o = t), (a = e);
                  }));
              const c = ++this.navigationId;
              return (
                this.setTransition({
                  id: c,
                  source: e,
                  restoredState: n,
                  currentUrlTree: this.currentUrlTree,
                  currentRawUrl: this.rawUrlTree,
                  rawUrl: t,
                  extras: r,
                  resolve: o,
                  reject: a,
                  promise: l,
                  currentSnapshot: this.routerState.snapshot,
                  currentRouterState: this.routerState
                }),
                l.catch(t => Promise.reject(t))
              );
            }
            setBrowserUrl(t, e, n, r) {
              const s = this.urlSerializer.serialize(t);
              (r = r || {}),
                this.location.isCurrentPathEqualTo(s) || e
                  ? this.location.replaceState(s, '', Object.assign(Object.assign({}, r), { navigationId: n }))
                  : this.location.go(s, '', Object.assign(Object.assign({}, r), { navigationId: n }));
            }
            resetStateAndUrl(t, e, n) {
              (this.routerState = t),
                (this.currentUrlTree = e),
                (this.rawUrlTree = this.urlHandlingStrategy.merge(this.currentUrlTree, n)),
                this.resetUrlToCurrentUrlTree();
            }
            resetUrlToCurrentUrlTree() {
              this.location.replaceState(this.urlSerializer.serialize(this.rawUrlTree), '', {
                navigationId: this.lastSuccessfulId
              });
            }
          }
          return (
            (t.ɵfac = function(t) {
              s.cc();
            }),
            (t.ɵdir = s.Hb({ type: t })),
            t
          );
        })(),
        Ao = (() => {
          class t {
            constructor(t, e, n, r, s) {
              (this.router = t),
                (this.route = e),
                (this.commands = []),
                null == n && r.setAttribute(s.nativeElement, 'tabindex', '0');
            }
            set routerLink(t) {
              this.commands = null != t ? (Array.isArray(t) ? t : [t]) : [];
            }
            set preserveQueryParams(t) {
              Object(s.T)() &&
                console &&
                console.warn &&
                console.warn('preserveQueryParams is deprecated!, use queryParamsHandling instead.'),
                (this.preserve = t);
            }
            onClick() {
              const t = {
                skipLocationChange: Po(this.skipLocationChange),
                replaceUrl: Po(this.replaceUrl),
                state: this.state
              };
              return this.router.navigateByUrl(this.urlTree, t), !0;
            }
            get urlTree() {
              return this.router.createUrlTree(this.commands, {
                relativeTo: this.route,
                queryParams: this.queryParams,
                fragment: this.fragment,
                preserveQueryParams: Po(this.preserve),
                queryParamsHandling: this.queryParamsHandling,
                preserveFragment: Po(this.preserveFragment)
              });
            }
          }
          return (
            (t.ɵfac = function(e) {
              return new (e || t)(s.Mb(ko), s.Mb(bi), s.ac('tabindex'), s.Mb(s.D), s.Mb(s.l));
            }),
            (t.ɵdir = s.Hb({
              type: t,
              selectors: [['', 'routerLink', '', 5, 'a', 5, 'area']],
              hostBindings: function(t, e) {
                1 & t &&
                  s.dc('click', function() {
                    return e.onClick();
                  });
              },
              inputs: {
                routerLink: 'routerLink',
                preserveQueryParams: 'preserveQueryParams',
                queryParams: 'queryParams',
                fragment: 'fragment',
                queryParamsHandling: 'queryParamsHandling',
                preserveFragment: 'preserveFragment',
                skipLocationChange: 'skipLocationChange',
                replaceUrl: 'replaceUrl',
                state: 'state'
              }
            })),
            t
          );
        })(),
        Io = (() => {
          class t {
            constructor(t, e, n) {
              (this.router = t),
                (this.route = e),
                (this.locationStrategy = n),
                (this.commands = []),
                (this.subscription = t.events.subscribe(t => {
                  t instanceof ps && this.updateTargetUrlAndHref();
                }));
            }
            set routerLink(t) {
              this.commands = null != t ? (Array.isArray(t) ? t : [t]) : [];
            }
            set preserveQueryParams(t) {
              Object(s.T)() &&
                console &&
                console.warn &&
                console.warn('preserveQueryParams is deprecated, use queryParamsHandling instead.'),
                (this.preserve = t);
            }
            ngOnChanges(t) {
              this.updateTargetUrlAndHref();
            }
            ngOnDestroy() {
              this.subscription.unsubscribe();
            }
            onClick(t, e, n, r) {
              if (0 !== t || e || n || r) return !0;
              if ('string' == typeof this.target && '_self' != this.target) return !0;
              const s = {
                skipLocationChange: Po(this.skipLocationChange),
                replaceUrl: Po(this.replaceUrl),
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
                preserveQueryParams: Po(this.preserve),
                queryParamsHandling: this.queryParamsHandling,
                preserveFragment: Po(this.preserveFragment)
              });
            }
          }
          return (
            (t.ɵfac = function(e) {
              return new (e || t)(s.Mb(ko), s.Mb(bi), s.Mb(i.h));
            }),
            (t.ɵdir = s.Hb({
              type: t,
              selectors: [
                ['a', 'routerLink', ''],
                ['area', 'routerLink', '']
              ],
              hostVars: 2,
              hostBindings: function(t, e) {
                1 & t &&
                  s.dc('click', function(t) {
                    return e.onClick(t.button, t.ctrlKey, t.metaKey, t.shiftKey);
                  }),
                  2 & t && (s.Ub('href', e.href, s.vc), s.Ab('target', e.target));
              },
              inputs: {
                routerLink: 'routerLink',
                preserveQueryParams: 'preserveQueryParams',
                target: 'target',
                queryParams: 'queryParams',
                fragment: 'fragment',
                queryParamsHandling: 'queryParamsHandling',
                preserveFragment: 'preserveFragment',
                skipLocationChange: 'skipLocationChange',
                replaceUrl: 'replaceUrl',
                state: 'state'
              },
              features: [s.xb]
            })),
            t
          );
        })();
      function Po(t) {
        return '' === t || !!t;
      }
      let Ro = (() => {
        class t {
          constructor(t, e, n, r, s) {
            (this.router = t),
              (this.element = e),
              (this.renderer = n),
              (this.link = r),
              (this.linkWithHref = s),
              (this.classes = []),
              (this.isActive = !1),
              (this.routerLinkActiveOptions = { exact: !1 }),
              (this.subscription = t.events.subscribe(t => {
                t instanceof ps && this.update();
              }));
          }
          ngAfterContentInit() {
            this.links.changes.subscribe(t => this.update()),
              this.linksWithHrefs.changes.subscribe(t => this.update()),
              this.update();
          }
          set routerLinkActive(t) {
            const e = Array.isArray(t) ? t : t.split(' ');
            this.classes = e.filter(t => !!t);
          }
          ngOnChanges(t) {
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
                const t = this.hasActiveLinks();
                this.isActive !== t &&
                  ((this.isActive = t),
                  this.classes.forEach(e => {
                    t
                      ? this.renderer.addClass(this.element.nativeElement, e)
                      : this.renderer.removeClass(this.element.nativeElement, e);
                  }));
              });
          }
          isLinkActive(t) {
            return e => t.isActive(e.urlTree, this.routerLinkActiveOptions.exact);
          }
          hasActiveLinks() {
            const t = this.isLinkActive(this.router);
            return (
              (this.link && t(this.link)) ||
              (this.linkWithHref && t(this.linkWithHref)) ||
              this.links.some(t) ||
              this.linksWithHrefs.some(t)
            );
          }
        }
        return (
          (t.ɵfac = function(e) {
            return new (e || t)(s.Mb(ko), s.Mb(s.l), s.Mb(s.D), s.Mb(Ao, 8), s.Mb(Io, 8));
          }),
          (t.ɵdir = s.Hb({
            type: t,
            selectors: [['', 'routerLinkActive', '']],
            contentQueries: function(t, e, n) {
              var r;
              1 & t && (s.Fb(n, Ao, !0), s.Fb(n, Io, !0)),
                2 & t && (s.rc((r = s.ec())) && (e.links = r), s.rc((r = s.ec())) && (e.linksWithHrefs = r));
            },
            inputs: { routerLinkActiveOptions: 'routerLinkActiveOptions', routerLinkActive: 'routerLinkActive' },
            exportAs: ['routerLinkActive'],
            features: [s.xb]
          })),
          t
        );
      })();
      class Do {
        constructor() {
          (this.outlet = null),
            (this.route = null),
            (this.resolver = null),
            (this.children = new jo()),
            (this.attachRef = null);
        }
      }
      class jo {
        constructor() {
          this.contexts = new Map();
        }
        onChildOutletCreated(t, e) {
          const n = this.getOrCreateContext(t);
          (n.outlet = e), this.contexts.set(t, n);
        }
        onChildOutletDestroyed(t) {
          const e = this.getContext(t);
          e && (e.outlet = null);
        }
        onOutletDeactivated() {
          const t = this.contexts;
          return (this.contexts = new Map()), t;
        }
        onOutletReAttached(t) {
          this.contexts = t;
        }
        getOrCreateContext(t) {
          let e = this.getContext(t);
          return e || ((e = new Do()), this.contexts.set(t, e)), e;
        }
        getContext(t) {
          return this.contexts.get(t) || null;
        }
      }
      let No = (() => {
        class t {
          constructor(t, e, n, r, i) {
            (this.parentContexts = t),
              (this.location = e),
              (this.resolver = n),
              (this.changeDetector = i),
              (this.activated = null),
              (this._activatedRoute = null),
              (this.activateEvents = new s.n()),
              (this.deactivateEvents = new s.n()),
              (this.name = r || 'primary'),
              t.onChildOutletCreated(this.name, this);
          }
          ngOnDestroy() {
            this.parentContexts.onChildOutletDestroyed(this.name);
          }
          ngOnInit() {
            if (!this.activated) {
              const t = this.parentContexts.getContext(this.name);
              t &&
                t.route &&
                (t.attachRef ? this.attach(t.attachRef, t.route) : this.activateWith(t.route, t.resolver || null));
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
            const t = this.activated;
            return (this.activated = null), (this._activatedRoute = null), t;
          }
          attach(t, e) {
            (this.activated = t), (this._activatedRoute = e), this.location.insert(t.hostView);
          }
          deactivate() {
            if (this.activated) {
              const t = this.component;
              this.activated.destroy(),
                (this.activated = null),
                (this._activatedRoute = null),
                this.deactivateEvents.emit(t);
            }
          }
          activateWith(t, e) {
            if (this.isActivated) throw new Error('Cannot activate an already activated outlet');
            this._activatedRoute = t;
            const n = (e = e || this.resolver).resolveComponentFactory(t._futureSnapshot.routeConfig.component),
              r = this.parentContexts.getOrCreateContext(this.name).children,
              s = new Mo(t, r, this.location.injector);
            (this.activated = this.location.createComponent(n, this.location.length, s)),
              this.changeDetector.markForCheck(),
              this.activateEvents.emit(this.activated.instance);
          }
        }
        return (
          (t.ɵfac = function(e) {
            return new (e || t)(s.Mb(jo), s.Mb(s.N), s.Mb(s.j), s.ac('name'), s.Mb(s.h));
          }),
          (t.ɵdir = s.Hb({
            type: t,
            selectors: [['router-outlet']],
            outputs: { activateEvents: 'activate', deactivateEvents: 'deactivate' },
            exportAs: ['outlet']
          })),
          t
        );
      })();
      class Mo {
        constructor(t, e, n) {
          (this.route = t), (this.childContexts = e), (this.parent = n);
        }
        get(t, e) {
          return t === bi ? this.route : t === jo ? this.childContexts : this.parent.get(t, e);
        }
      }
      class Lo {}
      class Fo {
        preload(t, e) {
          return e().pipe(ns(() => St(null)));
        }
      }
      class Vo {
        preload(t, e) {
          return St(null);
        }
      }
      let Ho = (() => {
          class t {
            constructor(t, e, n, r, s) {
              (this.router = t),
                (this.injector = r),
                (this.preloadingStrategy = s),
                (this.loader = new So(
                  e,
                  n,
                  e => t.triggerEvent(new ws(e)),
                  e => t.triggerEvent(new Cs(e))
                ));
            }
            setUpPreloading() {
              this.subscription = this.router.events
                .pipe(
                  Tt(t => t instanceof ps),
                  xt(() => this.preload())
                )
                .subscribe(() => {});
            }
            preload() {
              const t = this.injector.get(s.x);
              return this.processRoutes(t, this.router.config);
            }
            ngOnDestroy() {
              this.subscription.unsubscribe();
            }
            processRoutes(t, e) {
              const n = [];
              for (const r of e)
                if (r.loadChildren && !r.canLoad && r._loadedConfig) {
                  const t = r._loadedConfig;
                  n.push(this.processRoutes(t.module, t.routes));
                } else
                  r.loadChildren && !r.canLoad
                    ? n.push(this.preloadConfig(t, r))
                    : r.children && n.push(this.processRoutes(t, r.children));
              return Object(u.a)(n).pipe(
                Object(ce.a)(),
                Object(l.a)(t => {})
              );
            }
            preloadConfig(t, e) {
              return this.preloadingStrategy.preload(e, () =>
                this.loader
                  .load(t.injector, e)
                  .pipe(Object(Et.a)(t => ((e._loadedConfig = t), this.processRoutes(t.module, t.routes))))
              );
            }
          }
          return (
            (t.ɵfac = function(e) {
              return new (e || t)(s.Zb(ko), s.Zb(s.w), s.Zb(s.i), s.Zb(s.r), s.Zb(Lo));
            }),
            (t.ɵprov = s.Ib({ token: t, factory: t.ɵfac })),
            t
          );
        })(),
        Uo = (() => {
          class t {
            constructor(t, e, n = {}) {
              (this.router = t),
                (this.viewportScroller = e),
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
              return this.router.events.subscribe(t => {
                t instanceof ds
                  ? ((this.store[this.lastId] = this.viewportScroller.getScrollPosition()),
                    (this.lastSource = t.navigationTrigger),
                    (this.restoredId = t.restoredState ? t.restoredState.navigationId : 0))
                  : t instanceof ps &&
                    ((this.lastId = t.id),
                    this.scheduleScrollEvent(t, this.router.parseUrl(t.urlAfterRedirects).fragment));
              });
            }
            consumeScrollEvents() {
              return this.router.events.subscribe(t => {
                t instanceof Ts &&
                  (t.position
                    ? 'top' === this.options.scrollPositionRestoration
                      ? this.viewportScroller.scrollToPosition([0, 0])
                      : 'enabled' === this.options.scrollPositionRestoration &&
                        this.viewportScroller.scrollToPosition(t.position)
                    : t.anchor && 'enabled' === this.options.anchorScrolling
                    ? this.viewportScroller.scrollToAnchor(t.anchor)
                    : 'disabled' !== this.options.scrollPositionRestoration &&
                      this.viewportScroller.scrollToPosition([0, 0]));
              });
            }
            scheduleScrollEvent(t, e) {
              this.router.triggerEvent(
                new Ts(t, 'popstate' === this.lastSource ? this.store[this.restoredId] : null, e)
              );
            }
            ngOnDestroy() {
              this.routerEventsSubscription && this.routerEventsSubscription.unsubscribe(),
                this.scrollEventsSubscription && this.scrollEventsSubscription.unsubscribe();
            }
          }
          return (
            (t.ɵfac = function(t) {
              s.cc();
            }),
            (t.ɵdir = s.Hb({ type: t })),
            t
          );
        })();
      const zo = new s.q('ROUTER_CONFIGURATION'),
        $o = new s.q('ROUTER_FORROOT_GUARD'),
        Bo = [
          i.g,
          { provide: Ks, useClass: Js },
          {
            provide: ko,
            useFactory: function(t, e, n, r, s, o, a, l = {}, c, u) {
              const h = new ko(null, t, e, n, r, s, o, Hs(a));
              if (
                (c && (h.urlHandlingStrategy = c),
                u && (h.routeReuseStrategy = u),
                l.errorHandler && (h.errorHandler = l.errorHandler),
                l.malformedUriErrorHandler && (h.malformedUriErrorHandler = l.malformedUriErrorHandler),
                l.enableTracing)
              ) {
                const t = Object(i.y)();
                h.events.subscribe(e => {
                  t.logGroup('Router Event: ' + e.constructor.name), t.log(e.toString()), t.log(e), t.logGroupEnd();
                });
              }
              return (
                l.onSameUrlNavigation && (h.onSameUrlNavigation = l.onSameUrlNavigation),
                l.paramsInheritanceStrategy && (h.paramsInheritanceStrategy = l.paramsInheritanceStrategy),
                l.urlUpdateStrategy && (h.urlUpdateStrategy = l.urlUpdateStrategy),
                l.relativeLinkResolution && (h.relativeLinkResolution = l.relativeLinkResolution),
                h
              );
            },
            deps: [Ks, jo, i.g, s.r, s.w, s.i, Co, zo, [class {}, new s.A()], [vo, new s.A()]]
          },
          jo,
          {
            provide: bi,
            useFactory: function(t) {
              return t.routerState.root;
            },
            deps: [ko]
          },
          { provide: s.w, useClass: s.J },
          Ho,
          Vo,
          Fo,
          { provide: zo, useValue: { enableTracing: !1 } }
        ];
      function qo() {
        return new s.y('Router', ko);
      }
      let Zo = (() => {
        class t {
          constructor(t, e) {}
          static forRoot(e, n) {
            return {
              ngModule: t,
              providers: [
                Bo,
                Ko(e),
                { provide: $o, useFactory: Wo, deps: [[ko, new s.A(), new s.I()]] },
                { provide: zo, useValue: n || {} },
                { provide: i.h, useFactory: Go, deps: [i.n, [new s.p(i.a), new s.A()], zo] },
                { provide: Uo, useFactory: Qo, deps: [ko, i.q, zo] },
                { provide: Lo, useExisting: n && n.preloadingStrategy ? n.preloadingStrategy : Vo },
                { provide: s.y, multi: !0, useFactory: qo },
                [
                  Jo,
                  { provide: s.d, multi: !0, useFactory: Yo, deps: [Jo] },
                  { provide: ta, useFactory: Xo, deps: [Jo] },
                  { provide: s.b, multi: !0, useExisting: ta }
                ]
              ]
            };
          }
          static forChild(e) {
            return { ngModule: t, providers: [Ko(e)] };
          }
        }
        return (
          (t.ɵmod = s.Kb({ type: t })),
          (t.ɵinj = s.Jb({
            factory: function(e) {
              return new (e || t)(s.Zb($o, 8), s.Zb(ko, 8));
            }
          })),
          t
        );
      })();
      function Qo(t, e, n) {
        return n.scrollOffset && e.setOffset(n.scrollOffset), new Uo(t, e, n);
      }
      function Go(t, e, n = {}) {
        return n.useHash ? new i.e(t, e) : new i.m(t, e);
      }
      function Wo(t) {
        if (t)
          throw new Error(
            'RouterModule.forRoot() called twice. Lazy loaded modules should use RouterModule.forChild() instead.'
          );
        return 'guarded';
      }
      function Ko(t) {
        return [
          { provide: s.a, multi: !0, useValue: t },
          { provide: Co, multi: !0, useValue: t }
        ];
      }
      let Jo = (() => {
        class t {
          constructor(t) {
            (this.injector = t), (this.initNavigation = !1), (this.resultOfPreactivationDone = new nn.a());
          }
          appInitializer() {
            return this.injector.get(i.f, Promise.resolve(null)).then(() => {
              let t = null;
              const e = new Promise(e => (t = e)),
                n = this.injector.get(ko),
                r = this.injector.get(zo);
              if (this.isLegacyDisabled(r) || this.isLegacyEnabled(r)) t(!0);
              else if ('disabled' === r.initialNavigation) n.setUpLocationChangeListener(), t(!0);
              else {
                if ('enabled' !== r.initialNavigation)
                  throw new Error(`Invalid initialNavigation options: '${r.initialNavigation}'`);
                (n.hooks.afterPreactivation = () =>
                  this.initNavigation ? St(null) : ((this.initNavigation = !0), t(!0), this.resultOfPreactivationDone)),
                  n.initialNavigation();
              }
              return e;
            });
          }
          bootstrapListener(t) {
            const e = this.injector.get(zo),
              n = this.injector.get(Ho),
              r = this.injector.get(Uo),
              i = this.injector.get(ko),
              o = this.injector.get(s.g);
            t === o.components[0] &&
              (this.isLegacyEnabled(e)
                ? i.initialNavigation()
                : this.isLegacyDisabled(e) && i.setUpLocationChangeListener(),
              n.setUpPreloading(),
              r.init(),
              i.resetRootComponentType(o.componentTypes[0]),
              this.resultOfPreactivationDone.next(null),
              this.resultOfPreactivationDone.complete());
          }
          isLegacyEnabled(t) {
            return (
              'legacy_enabled' === t.initialNavigation || !0 === t.initialNavigation || void 0 === t.initialNavigation
            );
          }
          isLegacyDisabled(t) {
            return 'legacy_disabled' === t.initialNavigation || !1 === t.initialNavigation;
          }
        }
        return (
          (t.ɵfac = function(e) {
            return new (e || t)(s.Zb(s.r));
          }),
          (t.ɵprov = s.Ib({ token: t, factory: t.ɵfac })),
          t
        );
      })();
      function Yo(t) {
        return t.appInitializer.bind(t);
      }
      function Xo(t) {
        return t.bootstrapListener.bind(t);
      }
      const ta = new s.q('Router Initializer');
      let ea = (() => {
        class t extends vo {
          shouldDetach(t) {
            return !1;
          }
          store(t, e) {}
          shouldAttach(t) {
            return !1;
          }
          retrieve(t) {
            return null;
          }
          shouldReuseRoute(t, e) {
            return t.routeConfig === e.routeConfig || t.data.reuse;
          }
        }
        return (
          (t.ɵfac = function(e) {
            return na(e || t);
          }),
          (t.ɵprov = s.Ib({ token: t, factory: t.ɵfac })),
          t
        );
      })();
      const na = s.Tb(ea);
      var ra = n('AytR'),
        sa = (function(t) {
          return (
            (t[(t.Off = 0)] = 'Off'),
            (t[(t.Error = 1)] = 'Error'),
            (t[(t.Warning = 2)] = 'Warning'),
            (t[(t.Info = 3)] = 'Info'),
            (t[(t.Debug = 4)] = 'Debug'),
            t
          );
        })({});
      let ia = (() => {
        class t {
          constructor(t) {
            this.source = t;
          }
          static enableProductionMode() {
            t.level = sa.Warning;
          }
          debug(...t) {
            this.log(console.log, sa.Debug, t);
          }
          info(...t) {
            this.log(console.info, sa.Info, t);
          }
          warn(...t) {
            this.log(console.warn, sa.Warning, t);
          }
          error(...t) {
            this.log(console.error, sa.Error, t);
          }
          log(e, n, r) {
            if (n <= t.level) {
              const s = this.source ? ['[' + this.source + ']'].concat(r) : r;
              e.apply(console, s), t.outputs.forEach(t => t.apply(t, [this.source, n, ...r]));
            }
          }
        }
        return (t.level = sa.Debug), (t.outputs = []), t;
      })();
      class oa {}
      function aa(t, e) {
        return { type: 7, name: t, definitions: e, options: {} };
      }
      function la(t, e = null) {
        return { type: 4, styles: e, timings: t };
      }
      function ca(t, e = null) {
        return { type: 2, steps: t, options: e };
      }
      function ua(t) {
        return { type: 6, styles: t, offset: null };
      }
      function ha(t, e, n) {
        return { type: 0, name: t, styles: e, options: n };
      }
      function da(t, e, n = null) {
        return { type: 1, expr: t, animation: e, options: n };
      }
      function pa(t) {
        Promise.resolve(null).then(t);
      }
      class fa {
        constructor(t = 0, e = 0) {
          (this._onDoneFns = []),
            (this._onStartFns = []),
            (this._onDestroyFns = []),
            (this._started = !1),
            (this._destroyed = !1),
            (this._finished = !1),
            (this.parentPlayer = null),
            (this.totalTime = t + e);
        }
        _onFinish() {
          this._finished || ((this._finished = !0), this._onDoneFns.forEach(t => t()), (this._onDoneFns = []));
        }
        onStart(t) {
          this._onStartFns.push(t);
        }
        onDone(t) {
          this._onDoneFns.push(t);
        }
        onDestroy(t) {
          this._onDestroyFns.push(t);
        }
        hasStarted() {
          return this._started;
        }
        init() {}
        play() {
          this.hasStarted() || (this._onStart(), this.triggerMicrotask()), (this._started = !0);
        }
        triggerMicrotask() {
          pa(() => this._onFinish());
        }
        _onStart() {
          this._onStartFns.forEach(t => t()), (this._onStartFns = []);
        }
        pause() {}
        restart() {}
        finish() {
          this._onFinish();
        }
        destroy() {
          this._destroyed ||
            ((this._destroyed = !0),
            this.hasStarted() || this._onStart(),
            this.finish(),
            this._onDestroyFns.forEach(t => t()),
            (this._onDestroyFns = []));
        }
        reset() {}
        setPosition(t) {}
        getPosition() {
          return 0;
        }
        triggerCallback(t) {
          const e = 'start' == t ? this._onStartFns : this._onDoneFns;
          e.forEach(t => t()), (e.length = 0);
        }
      }
      class ga {
        constructor(t) {
          (this._onDoneFns = []),
            (this._onStartFns = []),
            (this._finished = !1),
            (this._started = !1),
            (this._destroyed = !1),
            (this._onDestroyFns = []),
            (this.parentPlayer = null),
            (this.totalTime = 0),
            (this.players = t);
          let e = 0,
            n = 0,
            r = 0;
          const s = this.players.length;
          0 == s
            ? pa(() => this._onFinish())
            : this.players.forEach(t => {
                t.onDone(() => {
                  ++e == s && this._onFinish();
                }),
                  t.onDestroy(() => {
                    ++n == s && this._onDestroy();
                  }),
                  t.onStart(() => {
                    ++r == s && this._onStart();
                  });
              }),
            (this.totalTime = this.players.reduce((t, e) => Math.max(t, e.totalTime), 0));
        }
        _onFinish() {
          this._finished || ((this._finished = !0), this._onDoneFns.forEach(t => t()), (this._onDoneFns = []));
        }
        init() {
          this.players.forEach(t => t.init());
        }
        onStart(t) {
          this._onStartFns.push(t);
        }
        _onStart() {
          this.hasStarted() || ((this._started = !0), this._onStartFns.forEach(t => t()), (this._onStartFns = []));
        }
        onDone(t) {
          this._onDoneFns.push(t);
        }
        onDestroy(t) {
          this._onDestroyFns.push(t);
        }
        hasStarted() {
          return this._started;
        }
        play() {
          this.parentPlayer || this.init(), this._onStart(), this.players.forEach(t => t.play());
        }
        pause() {
          this.players.forEach(t => t.pause());
        }
        restart() {
          this.players.forEach(t => t.restart());
        }
        finish() {
          this._onFinish(), this.players.forEach(t => t.finish());
        }
        destroy() {
          this._onDestroy();
        }
        _onDestroy() {
          this._destroyed ||
            ((this._destroyed = !0),
            this._onFinish(),
            this.players.forEach(t => t.destroy()),
            this._onDestroyFns.forEach(t => t()),
            (this._onDestroyFns = []));
        }
        reset() {
          this.players.forEach(t => t.reset()), (this._destroyed = !1), (this._finished = !1), (this._started = !1);
        }
        setPosition(t) {
          const e = t * this.totalTime;
          this.players.forEach(t => {
            const n = t.totalTime ? Math.min(1, e / t.totalTime) : 1;
            t.setPosition(n);
          });
        }
        getPosition() {
          let t = 0;
          return (
            this.players.forEach(e => {
              const n = e.getPosition();
              t = Math.min(n, t);
            }),
            t
          );
        }
        beforeDestroy() {
          this.players.forEach(t => {
            t.beforeDestroy && t.beforeDestroy();
          });
        }
        triggerCallback(t) {
          const e = 'start' == t ? this._onStartFns : this._onDoneFns;
          e.forEach(t => t()), (e.length = 0);
        }
      }
      const ma = ['toast-component', ''];
      function ya(t, e) {
        if (1 & t) {
          const t = s.Sb();
          s.Rb(0, 'button', 5),
            s.dc('click', function() {
              return s.tc(t), s.fc().remove();
            }),
            s.Rb(1, 'span', 6),
            s.Cc(2, '\xd7'),
            s.Qb(),
            s.Qb();
        }
      }
      function ba(t, e) {
        if ((1 & t && (s.Pb(0), s.Cc(1), s.Ob()), 2 & t)) {
          const t = s.fc(2);
          s.zb(1), s.Ec('[', t.duplicatesCount + 1, ']');
        }
      }
      function _a(t, e) {
        if ((1 & t && (s.Rb(0, 'div'), s.Cc(1), s.Ac(2, ba, 2, 1, 'ng-container', 4), s.Qb()), 2 & t)) {
          const t = s.fc();
          s.Bb(t.options.titleClass),
            s.Ab('aria-label', t.title),
            s.zb(1),
            s.Ec(' ', t.title, ' '),
            s.zb(1),
            s.kc('ngIf', t.duplicatesCount);
        }
      }
      function va(t, e) {
        if ((1 & t && s.Nb(0, 'div', 7), 2 & t)) {
          const t = s.fc();
          s.Bb(t.options.messageClass), s.kc('innerHTML', t.message, s.uc);
        }
      }
      function wa(t, e) {
        if ((1 & t && (s.Rb(0, 'div', 8), s.Cc(1), s.Qb()), 2 & t)) {
          const t = s.fc();
          s.Bb(t.options.messageClass), s.Ab('aria-label', t.message), s.zb(1), s.Ec(' ', t.message, ' ');
        }
      }
      function Ca(t, e) {
        if ((1 & t && (s.Rb(0, 'div'), s.Nb(1, 'div', 9), s.Qb()), 2 & t)) {
          const t = s.fc();
          s.zb(1), s.zc('width', t.width + '%');
        }
      }
      class Sa {
        constructor(t, e, n, r, s, i) {
          (this.toastId = t),
            (this.config = e),
            (this.message = n),
            (this.title = r),
            (this.toastType = s),
            (this.toastRef = i),
            (this._onTap = new nn.a()),
            (this._onAction = new nn.a()),
            this.toastRef.afterClosed().subscribe(() => {
              this._onAction.complete(), this._onTap.complete();
            });
        }
        triggerTap() {
          this._onTap.next(), this.config.tapToDismiss && this._onTap.complete();
        }
        onTap() {
          return this._onTap.asObservable();
        }
        triggerAction(t) {
          this._onAction.next(t);
        }
        onAction() {
          return this._onAction.asObservable();
        }
      }
      const Ea = {
          maxOpened: 0,
          autoDismiss: !1,
          newestOnTop: !0,
          preventDuplicates: !1,
          countDuplicates: !1,
          resetTimeoutOnDuplicate: !1,
          iconClasses: { error: 'toast-error', info: 'toast-info', success: 'toast-success', warning: 'toast-warning' },
          closeButton: !1,
          disableTimeOut: !1,
          timeOut: 5e3,
          extendedTimeOut: 1e3,
          enableHtml: !1,
          progressBar: !1,
          toastClass: 'ngx-toastr',
          positionClass: 'toast-top-right',
          titleClass: 'toast-title',
          messageClass: 'toast-message',
          easing: 'ease-in',
          easeTime: 300,
          tapToDismiss: !0,
          onActivateTick: !1,
          progressAnimation: 'decreasing'
        },
        xa = new s.q('ToastConfig');
      class Oa {
        constructor(t, e) {
          (this.component = t), (this.injector = e);
        }
        attach(t, e) {
          return (this._attachedHost = t), t.attach(this, e);
        }
        detach() {
          const t = this._attachedHost;
          if (t) return (this._attachedHost = void 0), t.detach();
        }
        get isAttached() {
          return null != this._attachedHost;
        }
        setAttachedHost(t) {
          this._attachedHost = t;
        }
      }
      class Ta extends class {
        attach(t, e) {
          return (this._attachedPortal = t), this.attachComponentPortal(t, e);
        }
        detach() {
          this._attachedPortal && this._attachedPortal.setAttachedHost(),
            (this._attachedPortal = void 0),
            this._disposeFn && (this._disposeFn(), (this._disposeFn = void 0));
        }
        setDisposeFn(t) {
          this._disposeFn = t;
        }
      } {
        constructor(t, e, n) {
          super(), (this._hostDomElement = t), (this._componentFactoryResolver = e), (this._appRef = n);
        }
        attachComponentPortal(t, e) {
          const n = this._componentFactoryResolver.resolveComponentFactory(t.component);
          let r;
          return (
            (r = n.create(t.injector)),
            this._appRef.attachView(r.hostView),
            this.setDisposeFn(() => {
              this._appRef.detachView(r.hostView), r.destroy();
            }),
            e
              ? this._hostDomElement.insertBefore(this._getComponentRootNode(r), this._hostDomElement.firstChild)
              : this._hostDomElement.appendChild(this._getComponentRootNode(r)),
            r
          );
        }
        _getComponentRootNode(t) {
          return t.hostView.rootNodes[0];
        }
      }
      let ka = (() => {
        let t = class {
          constructor(t) {
            this._document = t;
          }
          ngOnDestroy() {
            this._containerElement &&
              this._containerElement.parentNode &&
              this._containerElement.parentNode.removeChild(this._containerElement);
          }
          getContainerElement() {
            return this._containerElement || this._createContainer(), this._containerElement;
          }
          _createContainer() {
            const t = this._document.createElement('div');
            t.classList.add('overlay-container'), this._document.body.appendChild(t), (this._containerElement = t);
          }
        };
        return (
          (t.ɵfac = function(e) {
            return new (e || t)(s.Zb(i.c));
          }),
          (t.ɵprov = Object(s.Ib)({
            factory: function() {
              return new t(Object(s.Zb)(i.c));
            },
            token: t,
            providedIn: 'root'
          })),
          t
        );
      })();
      class Aa {
        constructor(t) {
          this._portalHost = t;
        }
        attach(t, e = !0) {
          return this._portalHost.attach(t, e);
        }
        detach() {
          return this._portalHost.detach();
        }
      }
      let Ia = (() => {
        let t = class {
          constructor(t, e, n, r) {
            (this._overlayContainer = t),
              (this._componentFactoryResolver = e),
              (this._appRef = n),
              (this._document = r),
              (this._paneElements = new Map());
          }
          create(t, e) {
            return this._createOverlayRef(this.getPaneElement(t, e));
          }
          getPaneElement(t = '', e) {
            return (
              this._paneElements.get(e) || this._paneElements.set(e, {}),
              this._paneElements.get(e)[t] || (this._paneElements.get(e)[t] = this._createPaneElement(t, e)),
              this._paneElements.get(e)[t]
            );
          }
          _createPaneElement(t, e) {
            const n = this._document.createElement('div');
            return (
              (n.id = 'toast-container'),
              n.classList.add(t),
              n.classList.add('toast-container'),
              e ? e.getContainerElement().appendChild(n) : this._overlayContainer.getContainerElement().appendChild(n),
              n
            );
          }
          _createPortalHost(t) {
            return new Ta(t, this._componentFactoryResolver, this._appRef);
          }
          _createOverlayRef(t) {
            return new Aa(this._createPortalHost(t));
          }
        };
        return (
          (t.ɵfac = function(e) {
            return new (e || t)(s.Zb(ka), s.Zb(s.j), s.Zb(s.g), s.Zb(i.c));
          }),
          (t.ɵprov = Object(s.Ib)({
            factory: function() {
              return new t(Object(s.Zb)(ka), Object(s.Zb)(s.j), Object(s.Zb)(s.g), Object(s.Zb)(i.c));
            },
            token: t,
            providedIn: 'root'
          })),
          t
        );
      })();
      class Pa {
        constructor(t) {
          (this._overlayRef = t),
            (this.duplicatesCount = 0),
            (this._afterClosed = new nn.a()),
            (this._activate = new nn.a()),
            (this._manualClose = new nn.a()),
            (this._resetTimeout = new nn.a()),
            (this._countDuplicate = new nn.a());
        }
        manualClose() {
          this._manualClose.next(), this._manualClose.complete();
        }
        manualClosed() {
          return this._manualClose.asObservable();
        }
        timeoutReset() {
          return this._resetTimeout.asObservable();
        }
        countDuplicate() {
          return this._countDuplicate.asObservable();
        }
        close() {
          this._overlayRef.detach(),
            this._afterClosed.next(),
            this._manualClose.next(),
            this._afterClosed.complete(),
            this._manualClose.complete(),
            this._activate.complete(),
            this._resetTimeout.complete(),
            this._countDuplicate.complete();
        }
        afterClosed() {
          return this._afterClosed.asObservable();
        }
        isInactive() {
          return this._activate.isStopped;
        }
        activate() {
          this._activate.next(), this._activate.complete();
        }
        afterActivate() {
          return this._activate.asObservable();
        }
        onDuplicate(t, e) {
          t && this._resetTimeout.next(), e && this._countDuplicate.next(++this.duplicatesCount);
        }
      }
      class Ra {
        constructor(t, e) {
          (this._toastPackage = t), (this._parentInjector = e);
        }
        get(t, e, n) {
          return t === Sa ? this._toastPackage : this._parentInjector.get(t, e, n);
        }
      }
      let Da = (() => {
          let t = class {
            constructor(t, e, n, r, s) {
              (this.overlay = e),
                (this._injector = n),
                (this.sanitizer = r),
                (this.ngZone = s),
                (this.currentlyActive = 0),
                (this.toasts = []),
                (this.index = 0),
                (this.toastrConfig = Object.assign(Object.assign({}, t.default), t.config)),
                t.config.iconClasses &&
                  (this.toastrConfig.iconClasses = Object.assign(
                    Object.assign({}, t.default.iconClasses),
                    t.config.iconClasses
                  ));
            }
            show(t, e, n = {}, r = '') {
              return this._preBuildNotification(r, t, e, this.applyConfig(n));
            }
            success(t, e, n = {}) {
              return this._preBuildNotification(this.toastrConfig.iconClasses.success || '', t, e, this.applyConfig(n));
            }
            error(t, e, n = {}) {
              return this._preBuildNotification(this.toastrConfig.iconClasses.error || '', t, e, this.applyConfig(n));
            }
            info(t, e, n = {}) {
              return this._preBuildNotification(this.toastrConfig.iconClasses.info || '', t, e, this.applyConfig(n));
            }
            warning(t, e, n = {}) {
              return this._preBuildNotification(this.toastrConfig.iconClasses.warning || '', t, e, this.applyConfig(n));
            }
            clear(t) {
              for (const e of this.toasts)
                if (void 0 !== t) {
                  if (e.toastId === t) return void e.toastRef.manualClose();
                } else e.toastRef.manualClose();
            }
            remove(t) {
              const e = this._findToast(t);
              if (!e) return !1;
              if (
                (e.activeToast.toastRef.close(),
                this.toasts.splice(e.index, 1),
                (this.currentlyActive = this.currentlyActive - 1),
                !this.toastrConfig.maxOpened || !this.toasts.length)
              )
                return !1;
              if (this.currentlyActive < this.toastrConfig.maxOpened && this.toasts[this.currentlyActive]) {
                const t = this.toasts[this.currentlyActive].toastRef;
                t.isInactive() || ((this.currentlyActive = this.currentlyActive + 1), t.activate());
              }
              return !0;
            }
            findDuplicate(t, e, n) {
              for (const r of this.toasts) if (r.message === t) return r.toastRef.onDuplicate(e, n), r;
              return null;
            }
            applyConfig(t = {}) {
              return Object.assign(Object.assign({}, this.toastrConfig), t);
            }
            _findToast(t) {
              for (let e = 0; e < this.toasts.length; e++)
                if (this.toasts[e].toastId === t) return { index: e, activeToast: this.toasts[e] };
              return null;
            }
            _preBuildNotification(t, e, n, r) {
              return r.onActivateTick
                ? this.ngZone.run(() => this._buildNotification(t, e, n, r))
                : this._buildNotification(t, e, n, r);
            }
            _buildNotification(t, e, n, r) {
              if (!r.toastComponent) throw new Error('toastComponent required');
              const i = this.findDuplicate(
                e,
                this.toastrConfig.resetTimeoutOnDuplicate && r.timeOut > 0,
                this.toastrConfig.countDuplicates
              );
              if (e && this.toastrConfig.preventDuplicates && null !== i) return i;
              this.previousToastMessage = e;
              let o = !1;
              this.toastrConfig.maxOpened &&
                this.currentlyActive >= this.toastrConfig.maxOpened &&
                ((o = !0), this.toastrConfig.autoDismiss && this.clear(this.toasts[0].toastId));
              const a = this.overlay.create(r.positionClass, this.overlayContainer);
              this.index = this.index + 1;
              let l = e;
              e && r.enableHtml && (l = this.sanitizer.sanitize(s.H.HTML, e));
              const c = new Pa(a),
                u = new Sa(this.index, r, l, n, t, c),
                h = new Ra(u, this._injector),
                d = new Oa(r.toastComponent, h),
                p = a.attach(d, this.toastrConfig.newestOnTop);
              c.componentInstance = p.instance;
              const f = {
                toastId: this.index,
                message: e || '',
                toastRef: c,
                onShown: c.afterActivate(),
                onHidden: c.afterClosed(),
                onTap: u.onTap(),
                onAction: u.onAction(),
                portal: p
              };
              return (
                o ||
                  ((this.currentlyActive = this.currentlyActive + 1),
                  setTimeout(() => {
                    f.toastRef.activate();
                  })),
                this.toasts.push(f),
                f
              );
            }
          };
          return (
            (t.ɵfac = function(e) {
              return new (e || t)(s.Zb(xa), s.Zb(Ia), s.Zb(s.r), s.Zb(r.b), s.Zb(s.z));
            }),
            (t.ɵprov = Object(s.Ib)({
              factory: function() {
                return new t(
                  Object(s.Zb)(xa),
                  Object(s.Zb)(Ia),
                  Object(s.Zb)(s.o),
                  Object(s.Zb)(r.b),
                  Object(s.Zb)(s.z)
                );
              },
              token: t,
              providedIn: 'root'
            })),
            t
          );
        })(),
        ja = (() => {
          let t = class {
            constructor(t, e, n) {
              (this.toastrService = t),
                (this.toastPackage = e),
                (this.ngZone = n),
                (this.width = -1),
                (this.toastClasses = ''),
                (this.state = {
                  value: 'inactive',
                  params: { easeTime: this.toastPackage.config.easeTime, easing: 'ease-in' }
                }),
                (this.message = e.message),
                (this.title = e.title),
                (this.options = e.config),
                (this.originalTimeout = e.config.timeOut),
                (this.toastClasses = `${e.toastType} ${e.config.toastClass}`),
                (this.sub = e.toastRef.afterActivate().subscribe(() => {
                  this.activateToast();
                })),
                (this.sub1 = e.toastRef.manualClosed().subscribe(() => {
                  this.remove();
                })),
                (this.sub2 = e.toastRef.timeoutReset().subscribe(() => {
                  this.resetTimeout();
                })),
                (this.sub3 = e.toastRef.countDuplicate().subscribe(t => {
                  this.duplicatesCount = t;
                }));
            }
            get displayStyle() {
              if ('inactive' === this.state.value) return 'none';
            }
            ngOnDestroy() {
              this.sub.unsubscribe(),
                this.sub1.unsubscribe(),
                this.sub2.unsubscribe(),
                this.sub3.unsubscribe(),
                clearInterval(this.intervalId),
                clearTimeout(this.timeout);
            }
            activateToast() {
              (this.state = Object.assign(Object.assign({}, this.state), { value: 'active' })),
                !0 !== this.options.disableTimeOut &&
                  'timeOut' !== this.options.disableTimeOut &&
                  this.options.timeOut &&
                  (this.outsideTimeout(() => this.remove(), this.options.timeOut),
                  (this.hideTime = new Date().getTime() + this.options.timeOut),
                  this.options.progressBar && this.outsideInterval(() => this.updateProgress(), 10));
            }
            updateProgress() {
              if (0 === this.width || 100 === this.width || !this.options.timeOut) return;
              const t = new Date().getTime();
              (this.width = ((this.hideTime - t) / this.options.timeOut) * 100),
                'increasing' === this.options.progressAnimation && (this.width = 100 - this.width),
                this.width <= 0 && (this.width = 0),
                this.width >= 100 && (this.width = 100);
            }
            resetTimeout() {
              clearTimeout(this.timeout),
                clearInterval(this.intervalId),
                (this.state = Object.assign(Object.assign({}, this.state), { value: 'active' })),
                this.outsideTimeout(() => this.remove(), this.originalTimeout),
                (this.options.timeOut = this.originalTimeout),
                (this.hideTime = new Date().getTime() + (this.options.timeOut || 0)),
                (this.width = -1),
                this.options.progressBar && this.outsideInterval(() => this.updateProgress(), 10);
            }
            remove() {
              'removed' !== this.state.value &&
                (clearTimeout(this.timeout),
                (this.state = Object.assign(Object.assign({}, this.state), { value: 'removed' })),
                this.outsideTimeout(
                  () => this.toastrService.remove(this.toastPackage.toastId),
                  +this.toastPackage.config.easeTime
                ));
            }
            tapToast() {
              'removed' !== this.state.value &&
                (this.toastPackage.triggerTap(), this.options.tapToDismiss && this.remove());
            }
            stickAround() {
              'removed' !== this.state.value &&
                (clearTimeout(this.timeout),
                (this.options.timeOut = 0),
                (this.hideTime = 0),
                clearInterval(this.intervalId),
                (this.width = 0));
            }
            delayedHideToast() {
              !0 !== this.options.disableTimeOut &&
                'extendedTimeOut' !== this.options.disableTimeOut &&
                0 !== this.options.extendedTimeOut &&
                'removed' !== this.state.value &&
                (this.outsideTimeout(() => this.remove(), this.options.extendedTimeOut),
                (this.options.timeOut = this.options.extendedTimeOut),
                (this.hideTime = new Date().getTime() + (this.options.timeOut || 0)),
                (this.width = -1),
                this.options.progressBar && this.outsideInterval(() => this.updateProgress(), 10));
            }
            outsideTimeout(t, e) {
              this.ngZone
                ? this.ngZone.runOutsideAngular(() => (this.timeout = setTimeout(() => this.runInsideAngular(t), e)))
                : (this.timeout = setTimeout(() => t(), e));
            }
            outsideInterval(t, e) {
              this.ngZone
                ? this.ngZone.runOutsideAngular(
                    () => (this.intervalId = setInterval(() => this.runInsideAngular(t), e))
                  )
                : (this.intervalId = setInterval(() => t(), e));
            }
            runInsideAngular(t) {
              this.ngZone ? this.ngZone.run(() => t()) : t();
            }
          };
          return (
            (t.ɵfac = function(e) {
              return new (e || t)(s.Mb(Da), s.Mb(Sa), s.Mb(s.z));
            }),
            (t.ɵcmp = s.Gb({
              type: t,
              selectors: [['', 'toast-component', '']],
              hostVars: 5,
              hostBindings: function(t, e) {
                1 & t &&
                  s.dc('click', function() {
                    return e.tapToast();
                  })('mouseenter', function() {
                    return e.stickAround();
                  })('mouseleave', function() {
                    return e.delayedHideToast();
                  }),
                  2 & t && (s.Gc('@flyInOut', e.state), s.Bb(e.toastClasses), s.zc('display', e.displayStyle));
              },
              attrs: ma,
              decls: 5,
              vars: 5,
              consts: [
                ['class', 'toast-close-button', 'aria-label', 'Close', 3, 'click', 4, 'ngIf'],
                [3, 'class', 4, 'ngIf'],
                ['role', 'alertdialog', 'aria-live', 'polite', 3, 'class', 'innerHTML', 4, 'ngIf'],
                ['role', 'alertdialog', 'aria-live', 'polite', 3, 'class', 4, 'ngIf'],
                [4, 'ngIf'],
                ['aria-label', 'Close', 1, 'toast-close-button', 3, 'click'],
                ['aria-hidden', 'true'],
                ['role', 'alertdialog', 'aria-live', 'polite', 3, 'innerHTML'],
                ['role', 'alertdialog', 'aria-live', 'polite'],
                [1, 'toast-progress']
              ],
              template: function(t, e) {
                1 & t &&
                  (s.Ac(0, ya, 3, 0, 'button', 0),
                  s.Ac(1, _a, 3, 5, 'div', 1),
                  s.Ac(2, va, 1, 3, 'div', 2),
                  s.Ac(3, wa, 2, 4, 'div', 3),
                  s.Ac(4, Ca, 2, 2, 'div', 4)),
                  2 & t &&
                    (s.kc('ngIf', e.options.closeButton),
                    s.zb(1),
                    s.kc('ngIf', e.title),
                    s.zb(1),
                    s.kc('ngIf', e.message && e.options.enableHtml),
                    s.zb(1),
                    s.kc('ngIf', e.message && !e.options.enableHtml),
                    s.zb(1),
                    s.kc('ngIf', e.options.progressBar));
              },
              directives: [i.k],
              encapsulation: 2,
              data: {
                animation: [
                  aa('flyInOut', [
                    ha('inactive', ua({ opacity: 0 })),
                    ha('active', ua({ opacity: 1 })),
                    ha('removed', ua({ opacity: 0 })),
                    da('inactive => active', la('{{ easeTime }}ms {{ easing }}')),
                    da('active => removed', la('{{ easeTime }}ms {{ easing }}'))
                  ])
                ]
              }
            })),
            t
          );
        })();
      var Na;
      const Ma = Object.assign(Object.assign({}, Ea), { toastComponent: ja });
      let La = (() => {
        let t = (Na = class {
          static forRoot(t = {}) {
            return { ngModule: Na, providers: [{ provide: xa, useValue: { default: Ma, config: t } }] };
          }
        });
        return (
          (t.ɵmod = s.Kb({ type: t })),
          (t.ɵinj = s.Jb({
            factory: function(e) {
              return new (e || t)();
            },
            imports: [[i.b]]
          })),
          t
        );
      })();
      const Fa = new ia('ErrorHandlerInterceptor');
      let Va = (() => {
        class t {
          constructor(t) {
            this.toastrService = t;
          }
          intercept(t, e) {
            return e.handle(t).pipe(ns(t => this.errorHandler(t)));
          }
          errorHandler(t) {
            throw (this.toastrService.error('Not available, try later!'),
            ra.a.production || Fa.error('Request error', t),
            t);
          }
        }
        return (
          (t.ɵfac = function(e) {
            return new (e || t)(s.Zb(Da));
          }),
          (t.ɵprov = s.Ib({ token: t, factory: t.ɵfac, providedIn: 'root' })),
          t
        );
      })();
      const Ha = new ia('HttpCacheService');
      let Ua = (() => {
          class t {
            constructor() {
              (this.cachedData = {}), (this.storage = null), this.loadCacheData();
            }
            setCacheData(t, e, n) {
              (this.cachedData[t] = { lastUpdated: n || new Date(), data: e }),
                Ha.debug(`Cache set for key: "${t}"`),
                this.saveCacheData();
            }
            getCacheData(t) {
              const e = this.cachedData[t];
              return e ? (Ha.debug(`Cache hit for key: "${t}"`), e.data) : null;
            }
            getHttpCacheEntry(t) {
              return this.cachedData[t] || null;
            }
            clearCache(t) {
              delete this.cachedData[t], Ha.debug(`Cache cleared for key: "${t}"`), this.saveCacheData();
            }
            cleanCache(t) {
              t
                ? Object.entries(this.cachedData).forEach(([e, n]) => {
                    t >= n.lastUpdated && delete this.cachedData[e];
                  })
                : (this.cachedData = {}),
                this.saveCacheData();
            }
            setPersistence(t) {
              this.cleanCache(),
                (this.storage = 'local' === t || 'session' === t ? window[t + 'Storage'] : null),
                this.loadCacheData();
            }
            saveCacheData() {
              this.storage && this.storage.setItem('httpCache', JSON.stringify(this.cachedData));
            }
            loadCacheData() {
              const t = this.storage ? this.storage.getItem('httpCache') : null;
              this.cachedData = t ? JSON.parse(t) : {};
            }
          }
          return (
            (t.ɵfac = function(e) {
              return new (e || t)();
            }),
            (t.ɵprov = s.Ib({ token: t, factory: t.ɵfac, providedIn: 'root' })),
            t
          );
        })(),
        za = (() => {
          class t {
            constructor(t) {
              (this.httpCacheService = t), (this.forceUpdate = !1);
            }
            configure(e) {
              const n = new t(this.httpCacheService);
              return e && e.update && (n.forceUpdate = !0), n;
            }
            intercept(t, e) {
              return 'GET' !== t.method
                ? e.handle(t)
                : new o.a(n => {
                    const r = this.forceUpdate ? null : this.httpCacheService.getCacheData(t.urlWithParams);
                    null !== r
                      ? (n.next(new $t(r)), n.complete())
                      : e.handle(t).subscribe(
                          e => {
                            e instanceof $t && this.httpCacheService.setCacheData(t.urlWithParams, e), n.next(e);
                          },
                          t => n.error(t),
                          () => n.complete()
                        );
                  });
            }
          }
          return (
            (t.ɵfac = function(e) {
              return new (e || t)(s.Zb(Ua));
            }),
            (t.ɵprov = s.Ib({ token: t, factory: t.ɵfac, providedIn: 'root' })),
            t
          );
        })(),
        $a = (() => {
          class t {
            intercept(t, e) {
              return /^(http|https):/i.test(t.url) || (t = t.clone({ url: ra.a.serverUrl + t.url })), e.handle(t);
            }
          }
          return (
            (t.ɵfac = function(e) {
              return new (e || t)();
            }),
            (t.ɵprov = s.Ib({ token: t, factory: t.ɵfac, providedIn: 'root' })),
            t
          );
        })();
      class Ba {
        constructor(t, e) {
          (this.next = t), (this.interceptor = e);
        }
        handle(t) {
          return this.interceptor.intercept(t, this.next);
        }
      }
      const qa = new s.q('HTTP_DYNAMIC_INTERCEPTORS');
      let Za = (() => {
          class t extends Zt {
            constructor(t, e, n = []) {
              super(t),
                (this.httpHandler = t),
                (this.injector = e),
                (this.interceptors = n),
                this.interceptors || (this.interceptors = [this.injector.get($a), this.injector.get(Va)]);
            }
            cache(t) {
              const e = this.injector.get(za).configure({ update: t });
              return this.addInterceptor(e);
            }
            skipErrorHandler() {
              return this.removeInterceptor(Va);
            }
            disableApiPrefix() {
              return this.removeInterceptor($a);
            }
            request(t, e, n) {
              const r = this.interceptors.reduceRight((t, e) => new Ba(t, e), this.httpHandler);
              return new Zt(r).request(t, e, n);
            }
            removeInterceptor(e) {
              return new t(
                this.httpHandler,
                this.injector,
                this.interceptors.filter(t => !(t instanceof e))
              );
            }
            addInterceptor(e) {
              return new t(this.httpHandler, this.injector, this.interceptors.concat([e]));
            }
          }
          return (
            (t.ɵfac = function(e) {
              return new (e || t)(s.Zb(It), s.Zb(s.r), s.Zb(qa, 8));
            }),
            (t.ɵprov = s.Ib({ token: t, factory: t.ɵfac, providedIn: 'root' })),
            t
          );
        })(),
        Qa = (() => {
          class t {
            constructor(t) {
              if (t) throw new Error(t + ' has already been loaded. Import Core module in the AppModule only.');
            }
          }
          return (
            (t.ɵmod = s.Kb({ type: t })),
            (t.ɵinj = s.Jb({
              factory: function(e) {
                return new (e || t)(s.Zb(t, 12));
              },
              providers: [
                { provide: Zt, useClass: Za },
                { provide: vo, useClass: ea }
              ],
              imports: [[i.b, ae, en, Zo]]
            })),
            t
          );
        })();
      var Ga = n('A/Ql'),
        Wa = n('4odN');
      const Ka = new ia('I18nService');
      let Ja = (() => {
        class t {
          constructor(t) {
            (this.translateService = t), t.setTranslation('en-US', Ga), t.setTranslation('fr-FR', Wa);
          }
          init(t, e) {
            (this.defaultLanguage = t),
              (this.supportedLanguages = e),
              (this.language = ''),
              (this.langChangeSubscription = this.translateService.onLangChange.subscribe(t => {
                localStorage.setItem('language', t.lang);
              }));
          }
          destroy() {
            this.langChangeSubscription && this.langChangeSubscription.unsubscribe();
          }
          set language(t) {
            t = t || localStorage.getItem('language') || this.translateService.getBrowserCultureLang();
            let e = this.supportedLanguages.includes(t);
            t &&
              !e &&
              ((t = t.split('-')[0]), (t = this.supportedLanguages.find(e => e.startsWith(t)) || ''), (e = Boolean(t))),
              e || (t = this.defaultLanguage),
              Ka.debug('Language set to ' + t),
              this.translateService.use(t);
          }
          get language() {
            return this.translateService.currentLang;
          }
        }
        return (
          (t.ɵfac = function(e) {
            return new (e || t)(s.Zb(Xe));
          }),
          (t.ɵprov = s.Ib({ token: t, factory: t.ɵfac, providedIn: 'root' })),
          t
        );
      })();
      const Ya = Symbol('untilDestroyed');
      let Xa = (() => {
          class t {
            constructor(t) {
              this.http = t;
            }
            getAll() {
              return this.http.get('entries');
            }
            getByCategory(t) {
              return this.http.get('entries?category=' + t);
            }
          }
          return (
            (t.ɵfac = function(e) {
              return new (e || t)(s.Zb(Zt));
            }),
            (t.ɵprov = s.Ib({ token: t, factory: t.ɵfac, providedIn: 'root' })),
            t
          );
        })(),
        tl = (() => {
          class t {
            constructor() {}
          }
          return (
            (t.ɵfac = function(e) {
              return new (e || t)();
            }),
            (t.ɵprov = s.Ib({ token: t, factory: t.ɵfac, providedIn: 'root' })),
            t
          );
        })(),
        el = (() => {
          class t {
            static forRoot() {
              return { ngModule: t, providers: [Xa, tl, Xa] };
            }
          }
          return (
            (t.ɵmod = s.Kb({ type: t })),
            (t.ɵinj = s.Jb({
              factory: function(e) {
                return new (e || t)();
              },
              imports: [[i.b]]
            })),
            t
          );
        })(),
        nl = (() => {
          class t {}
          return (
            (t.ɵmod = s.Kb({ type: t })),
            (t.ɵinj = s.Jb({
              factory: function(e) {
                return new (e || t)();
              },
              imports: [[i.b]]
            })),
            t
          );
        })(),
        rl = (() => {
          class t {}
          return (
            (t.ɵmod = s.Kb({ type: t })),
            (t.ɵinj = s.Jb({
              factory: function(e) {
                return new (e || t)();
              },
              imports: [[i.b, Zo, nl]]
            })),
            t
          );
        })(),
        sl = (() => {
          class t {
            constructor(t) {
              this.entriesService = t;
            }
            resolve(t) {
              return this.entriesService.getByCategory(t.queryParams.categorie);
            }
          }
          return (
            (t.ɵfac = function(e) {
              return new (e || t)(s.Zb(Xa));
            }),
            (t.ɵprov = s.Ib({ token: t, factory: t.ɵfac })),
            t
          );
        })(),
        il = (() => {
          class t {}
          return (
            (t.ɵmod = s.Kb({ type: t })),
            (t.ɵinj = s.Jb({
              factory: function(e) {
                return new (e || t)();
              },
              providers: [sl],
              imports: [[i.b]]
            })),
            t
          );
        })(),
        ol = (() => {
          class t {}
          return (
            (t.ɵmod = s.Kb({ type: t })),
            (t.ɵinj = s.Jb({
              factory: function(e) {
                return new (e || t)();
              },
              imports: [[i.b]]
            })),
            t
          );
        })(),
        al = (() => {
          class t {
            static forRoot() {
              return { ngModule: t, providers: [] };
            }
          }
          return (
            (t.ɵmod = s.Kb({ type: t })),
            (t.ɵinj = s.Jb({
              factory: function(e) {
                return new (e || t)();
              },
              imports: [[i.b, el, rl, il, nl, ol], el, rl, ol]
            })),
            t
          );
        })(),
        ll = (() => {
          class t {
            constructor() {
              this.isLoading = !1;
            }
            ngOnInit() {}
          }
          return (
            (t.ɵfac = function(e) {
              return new (e || t)();
            }),
            (t.ɵcmp = s.Gb({
              type: t,
              selectors: [['app-loader']],
              inputs: { isLoading: 'isLoading', message: 'message' },
              decls: 8,
              vars: 2,
              consts: [
                [1, 'text-xs-center', 3, 'hidden'],
                [1, 'fas', 'fa-cog', 'fa-spin', 'fa-3x']
              ],
              template: function(t, e) {
                1 & t &&
                  (s.Rb(0, 'div', 0),
                  s.Cc(1, '\n  '),
                  s.Nb(2, 'i', 1),
                  s.Cc(3, ' '),
                  s.Rb(4, 'span'),
                  s.Cc(5),
                  s.Qb(),
                  s.Cc(6, '\n'),
                  s.Qb(),
                  s.Cc(7, '\n')),
                  2 & t && (s.kc('hidden', !e.isLoading), s.zb(5), s.Dc(e.message));
              },
              styles: ['.fa[_ngcontent-%COMP%]{vertical-align:middle}']
            })),
            t
          );
        })(),
        cl = (() => {
          class t {
            constructor(t) {
              this.http = t;
            }
            getAll() {
              return this.http.get('categories');
            }
          }
          return (
            (t.ɵfac = function(e) {
              return new (e || t)(s.Zb(Zt));
            }),
            (t.ɵprov = s.Ib({ token: t, factory: t.ɵfac, providedIn: 'root' })),
            t
          );
        })(),
        ul = (() => {
          class t {
            constructor(t) {
              (this.el = t), (this.value = !1), (this.valueString = '');
            }
            ngOnChanges() {
              if (this.valueString)
                switch (
                  (this.el.nativeElement.classList.remove('text-success'),
                  this.el.nativeElement.classList.remove('text-danger'),
                  this.el.nativeElement.classList.remove('font-weight-bold'),
                  this.valueString)
                ) {
                  case 'unknown':
                    this.el.nativeElement.innerText = 'Not available';
                    break;
                  case 'yes':
                    (this.el.nativeElement.innerText = 'Yes'),
                      this.el.nativeElement.classList.add('text-success'),
                      this.el.nativeElement.classList.add('font-weight-bold');
                    break;
                  case 'no':
                  case '':
                    (this.el.nativeElement.innerText = 'No'),
                      this.el.nativeElement.classList.add('text-danger'),
                      this.el.nativeElement.classList.add('font-weight-bold');
                    break;
                  default:
                    (this.el.nativeElement.innerText = this.valueString),
                      this.el.nativeElement.classList.add('font-weight-bold');
                }
              else
                (this.el.nativeElement.innerText = this.value ? 'Yes' : 'No'),
                  this.el.nativeElement.classList.remove('text-success'),
                  this.el.nativeElement.classList.remove('text-danger'),
                  this.el.nativeElement.classList.add('font-weight-bold'),
                  this.el.nativeElement.classList.add(this.value ? 'text-success' : 'text-danger');
            }
          }
          return (
            (t.ɵfac = function(e) {
              return new (e || t)(s.Mb(s.l));
            }),
            (t.ɵdir = s.Hb({
              type: t,
              selectors: [['', 'appYesNo', '']],
              inputs: { value: 'value', valueString: 'valueString' },
              features: [s.xb]
            })),
            t
          );
        })();
      function hl(t, e) {
        if ((1 & t && (s.Rb(0, 'h2'), s.Cc(1), s.Qb()), 2 & t)) {
          const t = s.fc(2);
          s.zb(1), s.Dc(t.entrie.API);
        }
      }
      function dl(t, e) {
        if ((1 & t && (s.Rb(0, 'p'), s.Cc(1), s.Qb()), 2 & t)) {
          const t = s.fc(2);
          s.zb(1), s.Ec('\n      ', t.entrie.Description, '\n    ');
        }
      }
      function pl(t, e) {
        if (
          (1 & t &&
            (s.Rb(0, 'div', 3),
            s.Cc(1, '\n    '),
            s.Ac(2, hl, 2, 1, 'h2', 4),
            s.Cc(3, '\n    '),
            s.Nb(4, 'hr'),
            s.Cc(5, '\n    '),
            s.Ac(6, dl, 2, 1, 'p', 4),
            s.Cc(7, '\n    '),
            s.Rb(8, 'p'),
            s.Cc(9, '\n      Auth: '),
            s.Rb(10, 'span', 5),
            s.Cc(11),
            s.Qb(),
            s.Cc(12, '\n    '),
            s.Qb(),
            s.Cc(13, '\n    '),
            s.Rb(14, 'p'),
            s.Cc(15, '\n      Cors: '),
            s.Rb(16, 'span', 5),
            s.Cc(17),
            s.Qb(),
            s.Cc(18, '\n    '),
            s.Qb(),
            s.Cc(19, '\n\n    '),
            s.Rb(20, 'a', 6),
            s.Cc(21, '\n      '),
            s.Rb(22, 'button'),
            s.Cc(23, 'Discover it'),
            s.Qb(),
            s.Cc(24, '\n    '),
            s.Qb(),
            s.Cc(25, '\n  '),
            s.Qb()),
          2 & t)
        ) {
          const t = s.fc(),
            e = s.sc(6);
          s.zb(2),
            s.kc('ngIf', t.entrie.API)('ngIfElse', e),
            s.zb(4),
            s.kc('ngIf', t.entrie.Description)('ngIfElse', e),
            s.zb(4),
            s.kc('valueString', t.entrie.Auth),
            s.zb(1),
            s.Dc(t.entrie.Auth),
            s.zb(5),
            s.kc('valueString', t.entrie.Cors),
            s.zb(1),
            s.Dc(t.entrie.Cors),
            s.zb(3),
            s.kc('href', t.entrie.Link, s.vc);
        }
      }
      function fl(t, e) {
        1 & t && (s.Cc(0, '\n  '), s.Rb(1, 'p'), s.Cc(2, 'Not available'), s.Qb(), s.Cc(3, '\n'));
      }
      let gl = (() => {
        class t {
          constructor() {}
          ngOnInit() {}
        }
        return (
          (t.ɵfac = function(e) {
            return new (e || t)();
          }),
          (t.ɵcmp = s.Gb({
            type: t,
            selectors: [['app-entrie-card']],
            inputs: { entrie: 'entrie' },
            decls: 8,
            vars: 1,
            consts: [
              [1, 'container', 'center'],
              ['class', 'card', 4, 'ngIf'],
              ['noData', ''],
              [1, 'card'],
              [4, 'ngIf', 'ngIfElse'],
              ['appYesNo', '', 3, 'valueString'],
              ['target', '_blank', 3, 'href']
            ],
            template: function(t, e) {
              1 & t &&
                (s.Rb(0, 'div', 0),
                s.Cc(1, '\n  '),
                s.Ac(2, pl, 26, 9, 'div', 1),
                s.Cc(3, '\n'),
                s.Qb(),
                s.Cc(4, '\n\n'),
                s.Ac(5, fl, 4, 0, 'ng-template', null, 2, s.Bc),
                s.Cc(7, '\n')),
                2 & t && (s.zb(2), s.kc('ngIf', e.entrie));
            },
            directives: [i.k, ul],
            styles: [
              '.card[_ngcontent-%COMP%]{background-color:#fff;width:250px;min-height:350px;display:flex;flex-direction:column;padding:20px;margin:5px;box-shadow:-20px -20px 0 0 #8d8d8d;border-radius:10px;-webkit-animation-name:shadow-show;-webkit-animation-duration:1.5s;animation-name:shadow-show;animation-duration:1.5s;transition-timing-function:cubic-bezier(.795,0,.165,1)}.card[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%], .card[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], .card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], .card[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%], .card[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%]{margin:0;padding:0 0 15px;font-family:Noto Sans KR,sans-serif;font-size:30px;color:#282828}.card[_ngcontent-%COMP%]   hr[_ngcontent-%COMP%]{display:block;border:none;height:3px;background-color:grey;margin:0;-webkit-animation-name:line-show;-webkit-animation-duration:.3s;animation-name:line-show;animation-duration:.3s;transition-timing-function:cubic-bezier(.795,0,.165,1)}.card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:15px 0 0;font-weight:100;letter-spacing:-.25px;line-height:1.25;font-size:16px;word-break:break-all;word-wrap:pre-wrap;color:#282828;-webkit-animation-name:p-show;-webkit-animation-duration:1.5s;animation-name:p-show;animation-duration:1.5s}.card[_ngcontent-%COMP%]   button[_ngcontent-%COMP%], .card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-family:Noto Sans KR,sans-serif}.card[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{border:none;background-color:#5f9ea0;width:100%;margin:10px auto;padding:10px 30px;border-radius:20px;color:#fff;text-transform:uppercase}.card[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover{background-color:#d3d3d3}@-webkit-keyframes line-show{0%{margin:0 100px}to{margin:0}}@keyframes line-show{0%{margin:0 100px}to{margin:0}}@-webkit-keyframes p-show{0%{color:#fff}to{color:#282828}}@keyframes p-show{0%{color:#fff}to{color:#282828}}@-webkit-keyframes shadow-show{0%{box-shadow:0 0 0 0 #e0e0e0}to{box-shadow:-20px -20px 0 0 #8d8d8d}}@keyframes shadow-show{0%{box-shadow:0 0 0 0 #e0e0e0}to{box-shadow:-20px -20px 0 0 #8d8d8d}}'
            ]
          })),
          t
        );
      })();
      const ml = function() {
          return ['/categorie'];
        },
        yl = function(t) {
          return { categorie: t };
        };
      let bl = (() => {
          class t {
            constructor() {}
            ngOnChanges() {}
          }
          return (
            (t.ɵfac = function(e) {
              return new (e || t)();
            }),
            (t.ɵcmp = s.Gb({
              type: t,
              selectors: [['app-card']],
              inputs: { title: 'title' },
              features: [s.xb],
              decls: 15,
              vars: 6,
              consts: [
                [1, 'property-card', 3, 'routerLink', 'queryParams'],
                [1, 'property-image'],
                [1, 'property-image-title'],
                [1, 'property-description']
              ],
              template: function(t, e) {
                1 & t &&
                  (s.Rb(0, 'div', 0),
                  s.Cc(1, '\n  '),
                  s.Rb(2, 'div', 1),
                  s.Cc(3, '\n    '),
                  s.Nb(4, 'div', 2),
                  s.Cc(5, '\n  '),
                  s.Qb(),
                  s.Cc(6, '\n  '),
                  s.Rb(7, 'div', 3),
                  s.Cc(8, '\n    '),
                  s.Rb(9, 'h5'),
                  s.Cc(10),
                  s.Qb(),
                  s.Cc(11, '\n    '),
                  s.Cc(12, '\n  '),
                  s.Qb(),
                  s.Cc(13, '\n'),
                  s.Qb(),
                  s.Cc(14, '\n')),
                  2 & t &&
                    (s.kc('routerLink', s.nc(3, ml))('queryParams', s.oc(4, yl, e.title.toString())),
                    s.zb(10),
                    s.Dc(e.title));
              },
              directives: [Ao],
              styles: [
                '*[_ngcontent-%COMP%]{box-sizing:border-box}h5[_ngcontent-%COMP%]{margin:0;font-size:1.4em;font-weight:700}p[_ngcontent-%COMP%]{font-size:12px}.property-card[_ngcontent-%COMP%]{height:18em;display:flex;flex-direction:column;position:relative;border-radius:16px;overflow:hidden;box-shadow:15px 15px 27px #e1e1e3,-15px -15px 27px #fff}.property-card[_ngcontent-%COMP%], .property-image[_ngcontent-%COMP%]{width:14em;transition:all .4s cubic-bezier(.645,.045,.355,1)}.property-image[_ngcontent-%COMP%]{height:100%;padding:1em 2em;position:Absolute;top:0;background-image:url(https://cdn.photographylife.com/wp-content/uploads/2017/01/What-is-landscape-photography.jpg);background-size:cover;background-repeat:no-repeat}.property-description[_ngcontent-%COMP%]{background-color:#fafafc;height:4em;width:14em;bottom:0;padding:.5em 1em;text-align:center}.property-description[_ngcontent-%COMP%], .property-social-icons[_ngcontent-%COMP%]{position:absolute;transition:all .4s cubic-bezier(.645,.045,.355,1)}.property-social-icons[_ngcontent-%COMP%]{width:1em;height:1em;background-color:#000;bottom:1em;left:1em}.property-card[_ngcontent-%COMP%]:hover   .property-description[_ngcontent-%COMP%]{height:0;padding:0 1em}.property-card[_ngcontent-%COMP%]:hover   .property-image[_ngcontent-%COMP%]{height:18em}.property-card[_ngcontent-%COMP%]:hover   .property-social-icons[_ngcontent-%COMP%]{background-color:#fff}.property-card[_ngcontent-%COMP%]:hover   .property-social-icons[_ngcontent-%COMP%]:hover{background-color:#00f;cursor:pointer}'
              ]
            })),
            t
          );
        })(),
        _l = (() => {
          class t {
            transform(t, e, n = ['']) {
              return t.filter(t => {
                const r = [];
                let s = !1;
                return (
                  e.map((e, s) => {
                    if (t.hasOwnProperty(e)) {
                      const i = t[e].toLowerCase(),
                        o = n[s].toLowerCase();
                      r.push('' === n[s] || i.includes(o));
                    }
                  }),
                  r.map(t => {
                    t && !s && (s = !0);
                  }),
                  s
                );
              });
            }
          }
          return (
            (t.ɵfac = function(e) {
              return new (e || t)();
            }),
            (t.ɵpipe = s.Lb({ name: 'containsString', type: t, pure: !0 })),
            t
          );
        })();
      function vl(t, e) {
        if (1 & t) {
          const t = s.Sb();
          s.Rb(0, 'button', 11),
            s.dc('click', function() {
              return s.tc(t), s.fc().clean();
            }),
            s.Cc(1, '\n        '),
            s.Rb(2, 'span'),
            s.Cc(3, '\n          '),
            s.Nb(4, 'i', 12),
            s.Cc(5, '\n        '),
            s.Qb(),
            s.Cc(6, '\n      '),
            s.Qb();
        }
      }
      const wl = function() {
          return ['API'];
        },
        Cl = function(t) {
          return [t];
        };
      function Sl(t, e) {
        if (1 & t) {
          const t = s.Sb();
          s.Rb(0, 'div', 17),
            s.Cc(1, '\n        '),
            s.Rb(2, 'ngb-pagination', 19),
            s.dc('pageChange', function(e) {
              return s.tc(t), s.fc(2).pageChange(e);
            }),
            s.gc(3, 'containsString'),
            s.Qb(),
            s.Cc(4, '\n      '),
            s.Qb();
        }
        if (2 & t) {
          const t = s.fc(2);
          s.zb(2),
            s.kc('page', t.page)('pageSize', t.pageSize)(
              'collectionSize',
              s.hc(3, 3, t.allAPI, s.nc(7, wl), s.oc(8, Cl, t.searchedTerm)).length
            );
        }
      }
      function El(t, e) {
        if (
          (1 & t &&
            (s.Rb(0, 'div', 20),
            s.Cc(1, '\n          '),
            s.Nb(2, 'app-entrie-card', 21),
            s.Cc(3, '\n        '),
            s.Qb()),
          2 & t)
        ) {
          const t = e.$implicit;
          s.zb(2), s.kc('entrie', t);
        }
      }
      function xl(t, e) {
        if (1 & t) {
          const t = s.Sb();
          s.Rb(0, 'div', 17),
            s.Cc(1, '\n        '),
            s.Rb(2, 'ngb-pagination', 19),
            s.dc('pageChange', function(e) {
              return s.tc(t), s.fc(2).pageChange(e);
            }),
            s.gc(3, 'containsString'),
            s.Qb(),
            s.Cc(4, '\n      '),
            s.Qb();
        }
        if (2 & t) {
          const t = s.fc(2);
          s.zb(2),
            s.kc('page', t.page)('pageSize', t.pageSize)(
              'collectionSize',
              s.hc(3, 3, t.allAPI, s.nc(7, wl), s.oc(8, Cl, t.searchedTerm)).length
            );
        }
      }
      function Ol(t, e) {
        if (1 & t) {
          const t = s.Sb();
          s.Rb(0, 'button', 22),
            s.dc('click', function() {
              return s.tc(t), s.fc(2).clean();
            }),
            s.Cc(1, '\n          '),
            s.Rb(2, 'span'),
            s.Cc(3, '\n            '),
            s.Nb(4, 'i', 12),
            s.Cc(5, '\n          '),
            s.Qb(),
            s.Cc(6, '\n        '),
            s.Qb();
        }
      }
      function Tl(t, e) {
        if (
          (1 & t &&
            (s.Rb(0, 'div', 2),
            s.Cc(1, '\n      '),
            s.Rb(2, 'h1', 13),
            s.Cc(3),
            s.gc(4, 'containsString'),
            s.Qb(),
            s.Cc(5, '\n\n      '),
            s.Ac(6, Sl, 5, 10, 'div', 14),
            s.gc(7, 'containsString'),
            s.Cc(8, '\n\n      '),
            s.Rb(9, 'div', 15),
            s.Cc(10, '\n        '),
            s.Ac(11, El, 4, 1, 'div', 16),
            s.gc(12, 'slice'),
            s.gc(13, 'containsString'),
            s.Cc(14, '\n      '),
            s.Qb(),
            s.Cc(15, '\n\n      '),
            s.Ac(16, xl, 5, 10, 'div', 14),
            s.gc(17, 'containsString'),
            s.Cc(18, '\n      '),
            s.Rb(19, 'div', 17),
            s.Cc(20, '\n        '),
            s.Ac(21, Ol, 7, 0, 'button', 18),
            s.Cc(22, '\n      '),
            s.Qb(),
            s.Cc(23, '\n    '),
            s.Qb()),
          2 & t)
        ) {
          const t = s.fc();
          s.zb(3),
            s.Ec('', s.hc(4, 5, t.allAPI, s.nc(25, wl), s.oc(26, Cl, t.searchedTerm)).length, ' API'),
            s.zb(3),
            s.kc('ngIf', s.hc(7, 9, t.allAPI, s.nc(28, wl), s.oc(29, Cl, t.searchedTerm)).length),
            s.zb(5),
            s.kc(
              'ngForOf',
              s.hc(
                12,
                13,
                s.hc(13, 17, t.allAPI, s.nc(31, wl), s.oc(32, Cl, t.searchedTerm)),
                (t.page - 1) * t.pageSize,
                (t.page - 1) * t.pageSize + t.pageSize
              )
            ),
            s.zb(5),
            s.kc('ngIf', s.hc(17, 21, t.allAPI, s.nc(34, wl), s.oc(35, Cl, t.searchedTerm)).length),
            s.zb(5),
            s.kc('ngIf', '' !== t.searchedTerm && !t.focus);
        }
      }
      function kl(t, e) {
        if (
          (1 & t &&
            (s.Rb(0, 'div', 26), s.Cc(1, '\n          '), s.Nb(2, 'app-card', 27), s.Cc(3, '\n        '), s.Qb()),
          2 & t)
        ) {
          const t = e.$implicit;
          s.zb(2), s.kc('title', t);
        }
      }
      function Al(t, e) {
        if (
          (1 & t &&
            (s.Pb(0),
            s.Cc(1, '\n      '),
            s.Rb(2, 'h1', 13),
            s.Cc(3, 'All API by categories'),
            s.Qb(),
            s.Cc(4, '\n      '),
            s.Rb(5, 'div', 24),
            s.Cc(6, '\n        '),
            s.Ac(7, kl, 4, 1, 'div', 25),
            s.Cc(8, '\n      '),
            s.Qb(),
            s.Cc(9, '\n    '),
            s.Ob()),
          2 & t)
        ) {
          const t = s.fc(2);
          s.zb(7), s.kc('ngForOf', t.categorie);
        }
      }
      function Il(t, e) {
        if (
          (1 & t &&
            (s.Rb(0, 'div', 2), s.Cc(1, '\n    '), s.Ac(2, Al, 10, 1, 'ng-container', 23), s.Cc(3, '\n  '), s.Qb()),
          2 & t)
        ) {
          const t = s.fc(),
            e = s.sc(35);
          s.zb(2), s.kc('ngIf', t.categorie)('ngIfElse', e);
        }
      }
      function Pl(t, e) {
        1 & t && (s.Cc(0, '\n  '), s.Rb(1, 'p'), s.Cc(2, 'Not available'), s.Qb(), s.Cc(3, '\n'));
      }
      const Rl = function(t) {
        return { focused: t };
      };
      let Dl = (() => {
          class t {
            constructor(t, e) {
              (this.categoriesService = t),
                (this.entriesService = e),
                (this.allAPI = []),
                (this.isLoading = !1),
                (this.searchedTerm = ''),
                (this.focus = !1),
                (this.page = 1),
                (this.pageSize = 28);
            }
            ngOnInit() {
              (this.isLoading = !0),
                this.categoriesService
                  .getAll()
                  .pipe(
                    ls(() => {
                      this.isLoading = !1;
                    })
                  )
                  .subscribe(
                    t => (this.categorie = t),
                    t => (this.categorie = 'Unavailable')
                  ),
                this.getAllAPi();
            }
            focusOn() {
              this.focus = !0;
            }
            focusOut() {
              this.focus = !1;
            }
            pageChange(t) {
              this.page = t;
            }
            clean() {
              (this.searchedTerm = ''), (this.page = 1), (this.focus = !1);
            }
            getAllAPi() {
              this.entriesService
                .getAll()
                .pipe(ls(() => (this.isLoading = !1)))
                .subscribe(t => (this.allAPI = t.entries));
            }
          }
          return (
            (t.ɵfac = function(e) {
              return new (e || t)(s.Mb(cl), s.Mb(Xa));
            }),
            (t.ɵcmp = s.Gb({
              type: t,
              selectors: [['app-home']],
              decls: 37,
              vars: 8,
              consts: [
                [1, 'container-fluid'],
                [1, 'jumbotron', 'text-center'],
                [1, 'container'],
                [1, 'text-left'],
                [1, 'd-flex', 'justify-content-center', 'search-box', 3, 'ngClass'],
                [1, 'fas', 'fa-search'],
                [
                  'type',
                  'search',
                  'placeholder',
                  'Start a search...',
                  1,
                  'form-control',
                  3,
                  'ngModel',
                  'ngModelChange',
                  'focus',
                  'focusout'
                ],
                ['class', 'clean justify-content-center', 3, 'click', 4, 'ngIf'],
                [3, 'isLoading'],
                ['class', 'container', 4, 'ngIf'],
                ['noCategorie', ''],
                [1, 'clean', 'justify-content-center', 3, 'click'],
                [1, 'fas', 'fa-trash'],
                [1, 'mb-5', 'titre'],
                ['class', 'd-flex justify-content-center mb-4', 4, 'ngIf'],
                [1, 'row', 'd-none', 'd-md-flex', 'mb-4'],
                ['class', 'col-sm-12 col-md-6 col-lg-4 mb-4', 4, 'ngFor', 'ngForOf'],
                [1, 'd-flex', 'justify-content-center', 'mb-4'],
                ['class', 'clean box', 3, 'click', 4, 'ngIf'],
                [3, 'page', 'pageSize', 'collectionSize', 'pageChange'],
                [1, 'col-sm-12', 'col-md-6', 'col-lg-4', 'mb-4'],
                [3, 'entrie'],
                [1, 'clean', 'box', 3, 'click'],
                [4, 'ngIf', 'ngIfElse'],
                [1, 'row', 'd-none', 'd-md-flex'],
                ['class', 'col-lg-3 col-md-4 mb-3', 4, 'ngFor', 'ngForOf'],
                [1, 'col-lg-3', 'col-md-4', 'mb-3'],
                [3, 'title']
              ],
              template: function(t, e) {
                1 & t &&
                  (s.Rb(0, 'div', 0),
                  s.Cc(1, '\n  '),
                  s.Rb(2, 'div', 1),
                  s.Cc(3, '\n    '),
                  s.Rb(4, 'div', 2),
                  s.Cc(5, '\n      '),
                  s.Rb(6, 'h1', 3),
                  s.Cc(7, 'Welcome'),
                  s.Qb(),
                  s.Cc(8, '\n      '),
                  s.Rb(9, 'p', 3),
                  s.Cc(10, 'Here, you can research an API with a name'),
                  s.Qb(),
                  s.Cc(11, '\n\n      '),
                  s.Rb(12, 'div', 4),
                  s.Cc(13, '\n        '),
                  s.Rb(14, 'span'),
                  s.Cc(15, '\n          '),
                  s.Nb(16, 'i', 5),
                  s.Cc(17, '\n        '),
                  s.Qb(),
                  s.Cc(18, '\n        '),
                  s.Rb(19, 'input', 6),
                  s.dc('ngModelChange', function(t) {
                    return (e.searchedTerm = t);
                  })('focus', function() {
                    return e.focusOn();
                  })('focusout', function() {
                    return e.focusOut();
                  }),
                  s.Qb(),
                  s.Cc(20, '\n      '),
                  s.Qb(),
                  s.Cc(21, '\n      '),
                  s.Ac(22, vl, 7, 0, 'button', 7),
                  s.Cc(23, '\n    '),
                  s.Qb(),
                  s.Cc(24, '\n\n    '),
                  s.Nb(25, 'app-loader', 8),
                  s.Cc(26, '\n    '),
                  s.Cc(27, '\n    '),
                  s.Ac(28, Tl, 24, 37, 'div', 9),
                  s.Cc(29, '\n  '),
                  s.Qb(),
                  s.Cc(30, '\n\n  '),
                  s.Ac(31, Il, 4, 2, 'div', 9),
                  s.Cc(32, '\n'),
                  s.Qb(),
                  s.Cc(33, '\n\n'),
                  s.Ac(34, Pl, 4, 0, 'ng-template', null, 10, s.Bc),
                  s.Cc(36, '\n')),
                  2 & t &&
                    (s.zb(12),
                    s.kc('ngClass', s.oc(6, Rl, e.focus)),
                    s.zb(7),
                    s.kc('ngModel', e.searchedTerm),
                    s.zb(3),
                    s.kc('ngIf', '' !== e.searchedTerm && !e.focus),
                    s.zb(3),
                    s.kc('isLoading', e.isLoading),
                    s.zb(3),
                    s.kc('ngIf', '' !== e.searchedTerm),
                    s.zb(3),
                    s.kc('ngIf', '' === e.searchedTerm));
              },
              directives: [i.i, y, S, yt, i.k, ll, i.j, Mr, gl, bl],
              pipes: [_l, i.o],
              styles: [
                '@charset "UTF-8";.logo[_ngcontent-%COMP%]{width:100px}q[_ngcontent-%COMP%]{font-style:italic;font-size:1.2rem;quotes:"\xab " " \xbb"}.titre[_ngcontent-%COMP%]{border-bottom:1px solid #000}.focused[_ngcontent-%COMP%]{box-shadow:0 0 6px rgba(0,0,0,.3)}.clean[_ngcontent-%COMP%]{height:48px;border:none;font-size:1.2rem;border-radius:40px;color:#000;background-color:#fff;width:3rem}.box[_ngcontent-%COMP%]{box-shadow:0 0 1px 1px}.search-box[_ngcontent-%COMP%]{margin:2rem auto;border-radius:40px}.search-box[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;border-radius:40px 0 0 40px;background-color:#fff;width:48px;height:48px}.search-box[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{height:48px;border:none;font-size:1.2rem;border-radius:0 40px 40px 0;color:grey;display:block;width:300px;transition:all .25s;box-shadow:20%}.search-box[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus{box-shadow:none;width:100%}.search-box[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::-moz-placeholder{color:grey;font-size:1.2rem;font-weight:700;letter-spacing:1px}.search-box[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::-ms-input-placeholder{color:grey;font-size:1.2rem;font-weight:700;letter-spacing:1px}.search-box[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::placeholder{color:grey;font-size:1.2rem;font-weight:700;letter-spacing:1px}'
              ]
            })),
            t
          );
        })(),
        jl = (() => {
          class t {
            constructor() {
              this.menuHidden = !0;
            }
            ngOnInit() {}
            toggleMenu() {
              this.menuHidden = !this.menuHidden;
            }
          }
          return (
            (t.ɵfac = function(e) {
              return new (e || t)();
            }),
            (t.ɵcmp = s.Gb({
              type: t,
              selectors: [['app-header']],
              decls: 36,
              vars: 2,
              consts: [
                [1, 'navbar', 'navbar-expand-lg', 'navbar-white'],
                ['routerLink', '/', 1, 'navbar-brand'],
                [
                  'type',
                  'button',
                  'aria-controls',
                  'navbar-menu',
                  'aria-label',
                  'Toggle navigation',
                  1,
                  'navbar-toggler',
                  3,
                  'click'
                ],
                [1, 'navbar-toggler-icon'],
                ['id', 'navbar-menu', 1, 'collapse', 'navbar-collapse', 'float-xs-none', 3, 'ngbCollapse'],
                [1, 'navbar-nav'],
                ['routerLink', '/', 'routerLinkActive', 'active', 1, 'nav-item', 'nav-link', 'text-uppercase'],
                [1, 'fas', 'fa-home'],
                ['routerLink', '/about', 'routerLinkActive', 'active', 1, 'nav-item', 'nav-link', 'text-uppercase'],
                [1, 'fas', 'fa-question-circle']
              ],
              template: function(t, e) {
                1 & t &&
                  (s.Rb(0, 'header'),
                  s.Cc(1, '\n  '),
                  s.Rb(2, 'nav', 0),
                  s.Cc(3, '\n    '),
                  s.Rb(4, 'span', 1),
                  s.Cc(5, 'Find an API'),
                  s.Qb(),
                  s.Cc(6, '\n    '),
                  s.Rb(7, 'button', 2),
                  s.dc('click', function() {
                    return e.toggleMenu();
                  }),
                  s.Cc(8, '\n      '),
                  s.Nb(9, 'span', 3),
                  s.Cc(10, '\n    '),
                  s.Qb(),
                  s.Cc(11, '\n    '),
                  s.Rb(12, 'div', 4),
                  s.Cc(13, '\n      '),
                  s.Rb(14, 'div', 5),
                  s.Cc(15, '\n        '),
                  s.Rb(16, 'a', 6),
                  s.Cc(17, '\n          '),
                  s.Nb(18, 'i', 7),
                  s.Cc(19, '\n          '),
                  s.Rb(20, 'span'),
                  s.Cc(21, 'Home'),
                  s.Qb(),
                  s.Cc(22, '\n        '),
                  s.Qb(),
                  s.Cc(23, '\n        '),
                  s.Rb(24, 'a', 8),
                  s.Cc(25, '\n          '),
                  s.Nb(26, 'i', 9),
                  s.Cc(27, '\n          '),
                  s.Rb(28, 'span'),
                  s.Cc(29, 'About'),
                  s.Qb(),
                  s.Cc(30, '\n        '),
                  s.Qb(),
                  s.Cc(31, '\n      '),
                  s.Qb(),
                  s.Cc(32, '\n    '),
                  s.Qb(),
                  s.Cc(33, '\n  '),
                  s.Qb(),
                  s.Cc(34, '\n'),
                  s.Qb(),
                  s.Cc(35, '\n')),
                  2 & t && (s.zb(7), s.Ab('aria-expanded', !e.menuHidden), s.zb(5), s.kc('ngbCollapse', e.menuHidden));
              },
              directives: [fr, Ao, lr, Io, Ro],
              styles: [
                ".navbar[_ngcontent-%COMP%]{margin-bottom:1rem;border-radius:35px;background:#eff0f1;box-shadow:11px 6px 36px #cbcccd,-41px -41px 61px #000}.nav-link.dropdown-toggle[_ngcontent-%COMP%]{cursor:pointer;border:none}button[_ngcontent-%COMP%]:focus{outline:none}button[_ngcontent-%COMP%]:active{background:linear-gradient(45deg,#b0b8bf,#d2dae3);box-shadow:41px -41px 82px #a7adb4,-41px 41px 82px #e1ebf4}.navbar-toggler[_ngcontent-%COMP%]{border-radius:50px;background:#c4ccd4;box-shadow:inset 41px -41px 82px #a7adb4,inset -41px 41px 82px #e1ebf4;border:none}.navbar-toggler-icon[_ngcontent-%COMP%]{background-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='30' height='30' viewBox='0 0 30 30'%3e%3cpath stroke='rgba%28255, 255, 255, 0.5%29' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e\")}span[_ngcontent-%COMP%]{color:#000}"
              ]
            })),
            t
          );
        })(),
        Nl = (() => {
          class t {
            constructor() {}
            ngOnInit() {}
          }
          return (
            (t.ɵfac = function(e) {
              return new (e || t)();
            }),
            (t.ɵcmp = s.Gb({
              type: t,
              selectors: [['app-shell']],
              decls: 4,
              vars: 0,
              template: function(t, e) {
                1 & t && (s.Nb(0, 'app-header'), s.Cc(1, '\n'), s.Nb(2, 'router-outlet'), s.Cc(3, '\n'));
              },
              directives: [jl, No],
              styles: ['']
            })),
            t
          );
        })();
      class Ml {
        static childRoutes(t) {
          return { path: '', component: Nl, children: t, data: { reuse: !0 } };
        }
      }
      const Ll = [
        Ml.childRoutes([
          { path: '', redirectTo: '/', pathMatch: 'full' },
          { path: '', component: Dl, data: { title: 'Search API' } }
        ])
      ];
      let Fl = (() => {
          class t {}
          return (
            (t.ɵmod = s.Kb({ type: t })),
            (t.ɵinj = s.Jb({
              factory: function(e) {
                return new (e || t)();
              },
              providers: [],
              imports: [[Zo.forChild(Ll)], Zo]
            })),
            t
          );
        })(),
        Vl = (() => {
          class t {}
          return (
            (t.ɵmod = s.Kb({ type: t })),
            (t.ɵinj = s.Jb({
              factory: function(e) {
                return new (e || t)();
              },
              imports: [[i.b, en, Qa, al, Fl, _t, Lr]]
            })),
            t
          );
        })(),
        Hl = (() => {
          class t {}
          return (
            (t.ɵmod = s.Kb({ type: t })),
            (t.ɵinj = s.Jb({
              factory: function(e) {
                return new (e || t)();
              },
              imports: [[i.b, en, Qr, Zo]]
            })),
            t
          );
        })();
      const Ul = [
        Ml.childRoutes([
          {
            path: 'about',
            component: (() => {
              class t {
                constructor() {
                  this.version = ra.a.version;
                }
                ngOnInit() {}
              }
              return (
                (t.ɵfac = function(e) {
                  return new (e || t)();
                }),
                (t.ɵcmp = s.Gb({
                  type: t,
                  selectors: [['app-about']],
                  decls: 19,
                  vars: 1,
                  consts: [
                    [1, 'container-fluid'],
                    [1, 'jumbotron', 'text-center'],
                    ['translate', ''],
                    [1, 'far', 'fa-bookmark']
                  ],
                  template: function(t, e) {
                    1 & t &&
                      (s.Rb(0, 'div', 0),
                      s.Cc(1, '\n  '),
                      s.Rb(2, 'div', 1),
                      s.Cc(3, '\n    '),
                      s.Rb(4, 'h1'),
                      s.Cc(5, '\n      '),
                      s.Rb(6, 'span', 2),
                      s.Cc(7, 'APP_NAME'),
                      s.Qb(),
                      s.Cc(8, '\n    '),
                      s.Qb(),
                      s.Cc(9, '\n    '),
                      s.Rb(10, 'p'),
                      s.Nb(11, 'i', 3),
                      s.Cc(12, ' '),
                      s.Rb(13, 'span', 2),
                      s.Cc(14, 'Version'),
                      s.Qb(),
                      s.Cc(15),
                      s.Qb(),
                      s.Cc(16, '\n  '),
                      s.Qb(),
                      s.Cc(17, '\n'),
                      s.Qb(),
                      s.Cc(18, '\n')),
                      2 & t && (s.zb(15), s.Ec(' ', e.version, ''));
                  },
                  directives: [tn],
                  styles: ['']
                })),
                t
              );
            })(),
            data: { title: 'About' }
          }
        ])
      ];
      let zl = (() => {
          class t {}
          return (
            (t.ɵmod = s.Kb({ type: t })),
            (t.ɵinj = s.Jb({
              factory: function(e) {
                return new (e || t)();
              },
              providers: [],
              imports: [[Zo.forChild(Ul)], Zo]
            })),
            t
          );
        })(),
        $l = (() => {
          class t {}
          return (
            (t.ɵmod = s.Kb({ type: t })),
            (t.ɵinj = s.Jb({
              factory: function(e) {
                return new (e || t)();
              },
              imports: [[i.b, en, zl]]
            })),
            t
          );
        })();
      const Bl = new ia('App');
      let ql = (() => {
        class t {
          constructor(t, e, n, r, s) {
            (this.router = t),
              (this.activatedRoute = e),
              (this.titleService = n),
              (this.translateService = r),
              (this.i18nService = s);
          }
          ngOnInit() {
            ra.a.production && ia.enableProductionMode(),
              Bl.debug('init'),
              this.i18nService.init(ra.a.defaultLanguage, ra.a.supportedLanguages);
            const t = this.router.events.pipe(Tt(t => t instanceof ps));
            Object(le.a)(this.translateService.onLangChange, t)
              .pipe(
                Object(l.a)(() => {
                  let t = this.activatedRoute;
                  for (; t.firstChild; ) t = t.firstChild;
                  return t;
                }),
                Tt(t => 'primary' === t.outlet),
                je(t => t.data),
                (function(t, e = 'ngOnDestroy') {
                  return n => {
                    const r = t[e],
                      s = 'function' == typeof r;
                    if (!s) throw new Error(`${t.constructor.name} is using untilDestroyed but doesn't implement ${e}`);
                    return (
                      t[Ya] ||
                        ((t[Ya] = new nn.a()),
                        (t[e] = function() {
                          s && r.apply(this, arguments), t[Ya].next(), t[Ya].complete();
                        })),
                      n.pipe(pn(t[Ya]))
                    );
                  };
                })(this)
              )
              .subscribe(t => {
                const e = t.title;
                e && this.titleService.setTitle(this.translateService.instant(e));
              });
          }
          ngOnDestroy() {
            this.i18nService.destroy();
          }
        }
        return (
          (t.ɵfac = function(e) {
            return new (e || t)(s.Mb(ko), s.Mb(bi), s.Mb(r.c), s.Mb(Xe), s.Mb(Ja));
          }),
          (t.ɵcmp = s.Gb({
            type: t,
            selectors: [['app-root']],
            decls: 2,
            vars: 0,
            template: function(t, e) {
              1 & t && (s.Nb(0, 'router-outlet'), s.Cc(1, '\n'));
            },
            directives: [No],
            styles: ['']
          })),
          t
        );
      })();
      const Zl = [{ path: '**', redirectTo: '', pathMatch: 'full' }];
      let Ql = (() => {
        class t {}
        return (
          (t.ɵmod = s.Kb({ type: t })),
          (t.ɵinj = s.Jb({
            factory: function(e) {
              return new (e || t)();
            },
            providers: [],
            imports: [
              [Zo.forRoot(Zl, { enableTracing: !1, preloadingStrategy: Fo, scrollPositionRestoration: 'enabled' })],
              Zo
            ]
          })),
          t
        );
      })();
      function Gl(t, e) {
        if ((1 & t && (s.Rb(0, 'h2', 4), s.Cc(1), s.Qb()), 2 & t)) {
          const t = s.fc();
          s.zb(1), s.Dc(t.title ? t.title : 'No title, No cookie');
        }
      }
      function Wl(t, e) {
        if (
          (1 & t &&
            (s.Rb(0, 'div', 7), s.Cc(1, '\n        '), s.Nb(2, 'app-entrie-card', 8), s.Cc(3, '\n      '), s.Qb()),
          2 & t)
        ) {
          const t = e.$implicit;
          s.zb(2), s.kc('entrie', t);
        }
      }
      function Kl(t, e) {
        if (
          (1 & t &&
            (s.Pb(0),
            s.Cc(1, '\n    '),
            s.Rb(2, 'div', 5),
            s.Cc(3, '\n      '),
            s.Ac(4, Wl, 4, 1, 'div', 6),
            s.Cc(5, '\n    '),
            s.Qb(),
            s.Cc(6, '\n  '),
            s.Ob()),
          2 & t)
        ) {
          const t = s.fc();
          s.zb(4), s.kc('ngForOf', t.allEntries);
        }
      }
      function Jl(t, e) {
        1 & t && (s.Cc(0, '\n  '), s.Rb(1, 'p'), s.Cc(2, 'No entries available'), s.Qb(), s.Cc(3, '\n'));
      }
      const Yl = [
        Ml.childRoutes([
          {
            path: 'categorie',
            resolve: { entries: sl },
            component: (() => {
              class t {
                constructor(t) {
                  (this.route = t), (this.allEntries = []);
                }
                ngOnInit() {
                  (this.allEntries = []),
                    this.route.queryParams.subscribe(t => (this.title = t.categorie)),
                    this.route.data.subscribe(t => {
                      (this.allEntries = t.entries.entries), console.log(this.allEntries);
                    });
                }
              }
              return (
                (t.ɵfac = function(e) {
                  return new (e || t)(s.Mb(bi));
                }),
                (t.ɵcmp = s.Gb({
                  type: t,
                  selectors: [['app-index']],
                  decls: 10,
                  vars: 3,
                  consts: [
                    [1, 'container', 'mt-2'],
                    ['class', 'mb-5 titre', 4, 'ngIf'],
                    [4, 'ngIf', 'ngIfElse'],
                    ['noEntries', ''],
                    [1, 'mb-5', 'titre'],
                    [1, 'row'],
                    ['class', 'col-sm-12 col-md-6 col-lg-4 mb-4', 4, 'ngFor', 'ngForOf'],
                    [1, 'col-sm-12', 'col-md-6', 'col-lg-4', 'mb-4'],
                    [3, 'entrie']
                  ],
                  template: function(t, e) {
                    if (
                      (1 & t &&
                        (s.Rb(0, 'div', 0),
                        s.Cc(1, '\n  '),
                        s.Ac(2, Gl, 2, 1, 'h2', 1),
                        s.Cc(3, '\n  '),
                        s.Ac(4, Kl, 7, 1, 'ng-container', 2),
                        s.Cc(5, '\n'),
                        s.Qb(),
                        s.Cc(6, '\n\n'),
                        s.Ac(7, Jl, 4, 0, 'ng-template', null, 3, s.Bc),
                        s.Cc(9, '\n')),
                      2 & t)
                    ) {
                      const t = s.sc(8);
                      s.zb(2), s.kc('ngIf', e.title), s.zb(2), s.kc('ngIf', e.allEntries)('ngIfElse', t);
                    }
                  },
                  directives: [i.k, i.j, gl],
                  styles: ['.titre[_ngcontent-%COMP%]{border-bottom:1px solid #000}']
                })),
                t
              );
            })()
          }
        ])
      ];
      let Xl = (() => {
          class t {}
          return (
            (t.ɵmod = s.Kb({ type: t })),
            (t.ɵinj = s.Jb({
              factory: function(e) {
                return new (e || t)();
              },
              imports: [[Zo.forChild(Yl)], Zo]
            })),
            t
          );
        })(),
        tc = (() => {
          class t {}
          return (
            (t.ɵmod = s.Kb({ type: t })),
            (t.ɵinj = s.Jb({
              factory: function(e) {
                return new (e || t)();
              },
              imports: [[i.b, Xl, al]]
            })),
            t
          );
        })();
      function ec() {
        return 'undefined' != typeof process && '[object process]' === {}.toString.call(process);
      }
      function nc(t) {
        switch (t.length) {
          case 0:
            return new fa();
          case 1:
            return t[0];
          default:
            return new ga(t);
        }
      }
      function rc(t, e, n, r, s = {}, i = {}) {
        const o = [],
          a = [];
        let l = -1,
          c = null;
        if (
          (r.forEach(t => {
            const n = t.offset,
              r = n == l,
              u = (r && c) || {};
            Object.keys(t).forEach(n => {
              let r = n,
                a = t[n];
              if ('offset' !== n)
                switch (((r = e.normalizePropertyName(r, o)), a)) {
                  case '!':
                    a = s[n];
                    break;
                  case '*':
                    a = i[n];
                    break;
                  default:
                    a = e.normalizeStyleValue(n, r, a, o);
                }
              u[r] = a;
            }),
              r || a.push(u),
              (c = u),
              (l = n);
          }),
          o.length)
        ) {
          const t = '\n - ';
          throw new Error(`Unable to animate due to the following errors:${t}${o.join(t)}`);
        }
        return a;
      }
      function sc(t, e, n, r) {
        switch (e) {
          case 'start':
            t.onStart(() => r(n && ic(n, 'start', t)));
            break;
          case 'done':
            t.onDone(() => r(n && ic(n, 'done', t)));
            break;
          case 'destroy':
            t.onDestroy(() => r(n && ic(n, 'destroy', t)));
        }
      }
      function ic(t, e, n) {
        const r = n.totalTime,
          s = oc(
            t.element,
            t.triggerName,
            t.fromState,
            t.toState,
            e || t.phaseName,
            null == r ? t.totalTime : r,
            !!n.disabled
          ),
          i = t._data;
        return null != i && (s._data = i), s;
      }
      function oc(t, e, n, r, s = '', i = 0, o) {
        return { element: t, triggerName: e, fromState: n, toState: r, phaseName: s, totalTime: i, disabled: !!o };
      }
      function ac(t, e, n) {
        let r;
        return t instanceof Map ? ((r = t.get(e)), r || t.set(e, (r = n))) : ((r = t[e]), r || (r = t[e] = n)), r;
      }
      function lc(t) {
        const e = t.indexOf(':');
        return [t.substring(1, e), t.substr(e + 1)];
      }
      let cc = (t, e) => !1,
        uc = (t, e) => !1,
        hc = (t, e, n) => [];
      const dc = ec();
      (dc || 'undefined' != typeof Element) &&
        ((cc = (t, e) => t.contains(e)),
        (uc = (() => {
          if (dc || Element.prototype.matches) return (t, e) => t.matches(e);
          {
            const t = Element.prototype,
              e =
                t.matchesSelector ||
                t.mozMatchesSelector ||
                t.msMatchesSelector ||
                t.oMatchesSelector ||
                t.webkitMatchesSelector;
            return e ? (t, n) => e.apply(t, [n]) : uc;
          }
        })()),
        (hc = (t, e, n) => {
          let r = [];
          if (n) r.push(...t.querySelectorAll(e));
          else {
            const n = t.querySelector(e);
            n && r.push(n);
          }
          return r;
        }));
      let pc = null,
        fc = !1;
      function gc(t) {
        pc ||
          ((pc = ('undefined' != typeof document ? document.body : null) || {}),
          (fc = !!pc.style && 'WebkitAppearance' in pc.style));
        let e = !0;
        return (
          pc.style &&
            !(function(t) {
              return 'ebkit' == t.substring(1, 6);
            })(t) &&
            ((e = t in pc.style), !e && fc) &&
            (e = 'Webkit' + t.charAt(0).toUpperCase() + t.substr(1) in pc.style),
          e
        );
      }
      const mc = uc,
        yc = cc,
        bc = hc;
      function _c(t) {
        const e = {};
        return (
          Object.keys(t).forEach(n => {
            const r = n.replace(/([a-z])([A-Z])/g, '$1-$2');
            e[r] = t[n];
          }),
          e
        );
      }
      let vc = (() => {
          class t {
            validateStyleProperty(t) {
              return gc(t);
            }
            matchesElement(t, e) {
              return mc(t, e);
            }
            containsElement(t, e) {
              return yc(t, e);
            }
            query(t, e, n) {
              return bc(t, e, n);
            }
            computeStyle(t, e, n) {
              return n || '';
            }
            animate(t, e, n, r, s, i = [], o) {
              return new fa(n, r);
            }
          }
          return (
            (t.ɵfac = function(e) {
              return new (e || t)();
            }),
            (t.ɵprov = s.Ib({ token: t, factory: t.ɵfac })),
            t
          );
        })(),
        wc = (() => {
          class t {}
          return (t.NOOP = new vc()), t;
        })();
      function Cc(t) {
        if ('number' == typeof t) return t;
        const e = t.match(/^(-?[\.\d]+)(m?s)/);
        return !e || e.length < 2 ? 0 : Sc(parseFloat(e[1]), e[2]);
      }
      function Sc(t, e) {
        switch (e) {
          case 's':
            return 1e3 * t;
          default:
            return t;
        }
      }
      function Ec(t, e, n) {
        return t.hasOwnProperty('duration')
          ? t
          : (function(t, e, n) {
              let r,
                s = 0,
                i = '';
              if ('string' == typeof t) {
                const n = t.match(/^(-?[\.\d]+)(m?s)(?:\s+(-?[\.\d]+)(m?s))?(?:\s+([-a-z]+(?:\(.+?\))?))?$/i);
                if (null === n)
                  return e.push(`The provided timing value "${t}" is invalid.`), { duration: 0, delay: 0, easing: '' };
                r = Sc(parseFloat(n[1]), n[2]);
                const o = n[3];
                null != o && (s = Sc(parseFloat(o), n[4]));
                const a = n[5];
                a && (i = a);
              } else r = t;
              if (!n) {
                let n = !1,
                  i = e.length;
                r < 0 && (e.push('Duration values below 0 are not allowed for this animation step.'), (n = !0)),
                  s < 0 && (e.push('Delay values below 0 are not allowed for this animation step.'), (n = !0)),
                  n && e.splice(i, 0, `The provided timing value "${t}" is invalid.`);
              }
              return { duration: r, delay: s, easing: i };
            })(t, e, n);
      }
      function xc(t, e = {}) {
        return (
          Object.keys(t).forEach(n => {
            e[n] = t[n];
          }),
          e
        );
      }
      function Oc(t, e, n = {}) {
        if (e) for (let r in t) n[r] = t[r];
        else xc(t, n);
        return n;
      }
      function Tc(t, e, n) {
        return n ? e + ':' + n + ';' : '';
      }
      function kc(t) {
        let e = '';
        for (let n = 0; n < t.style.length; n++) {
          const r = t.style.item(n);
          e += Tc(0, r, t.style.getPropertyValue(r));
        }
        for (const n in t.style)
          t.style.hasOwnProperty(n) &&
            !n.startsWith('_') &&
            (e += Tc(0, n.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase(), t.style[n]));
        t.setAttribute('style', e);
      }
      function Ac(t, e, n) {
        t.style &&
          (Object.keys(e).forEach(r => {
            const s = Lc(r);
            n && !n.hasOwnProperty(r) && (n[r] = t.style[s]), (t.style[s] = e[r]);
          }),
          ec() && kc(t));
      }
      function Ic(t, e) {
        t.style &&
          (Object.keys(e).forEach(e => {
            const n = Lc(e);
            t.style[n] = '';
          }),
          ec() && kc(t));
      }
      function Pc(t) {
        return Array.isArray(t) ? (1 == t.length ? t[0] : ca(t)) : t;
      }
      const Rc = new RegExp('{{\\s*(.+?)\\s*}}', 'g');
      function Dc(t) {
        let e = [];
        if ('string' == typeof t) {
          let n;
          for (; (n = Rc.exec(t)); ) e.push(n[1]);
          Rc.lastIndex = 0;
        }
        return e;
      }
      function jc(t, e, n) {
        const r = t.toString(),
          s = r.replace(Rc, (t, r) => {
            let s = e[r];
            return (
              e.hasOwnProperty(r) || (n.push('Please provide a value for the animation param ' + r), (s = '')),
              s.toString()
            );
          });
        return s == r ? t : s;
      }
      function Nc(t) {
        const e = [];
        let n = t.next();
        for (; !n.done; ) e.push(n.value), (n = t.next());
        return e;
      }
      const Mc = /-+([a-z0-9])/g;
      function Lc(t) {
        return t.replace(Mc, (...t) => t[1].toUpperCase());
      }
      function Fc(t, e) {
        return 0 === t || 0 === e;
      }
      function Vc(t, e, n) {
        const r = Object.keys(n);
        if (r.length && e.length) {
          let i = e[0],
            o = [];
          if (
            (r.forEach(t => {
              i.hasOwnProperty(t) || o.push(t), (i[t] = n[t]);
            }),
            o.length)
          )
            for (var s = 1; s < e.length; s++) {
              let n = e[s];
              o.forEach(function(e) {
                n[e] = Uc(t, e);
              });
            }
        }
        return e;
      }
      function Hc(t, e, n) {
        switch (e.type) {
          case 7:
            return t.visitTrigger(e, n);
          case 0:
            return t.visitState(e, n);
          case 1:
            return t.visitTransition(e, n);
          case 2:
            return t.visitSequence(e, n);
          case 3:
            return t.visitGroup(e, n);
          case 4:
            return t.visitAnimate(e, n);
          case 5:
            return t.visitKeyframes(e, n);
          case 6:
            return t.visitStyle(e, n);
          case 8:
            return t.visitReference(e, n);
          case 9:
            return t.visitAnimateChild(e, n);
          case 10:
            return t.visitAnimateRef(e, n);
          case 11:
            return t.visitQuery(e, n);
          case 12:
            return t.visitStagger(e, n);
          default:
            throw new Error('Unable to resolve animation metadata node #' + e.type);
        }
      }
      function Uc(t, e) {
        return window.getComputedStyle(t)[e];
      }
      function zc(t, e) {
        const n = [];
        return (
          'string' == typeof t
            ? t.split(/\s*,\s*/).forEach(t =>
                (function(t, e, n) {
                  if (':' == t[0]) {
                    const r = (function(t, e) {
                      switch (t) {
                        case ':enter':
                          return 'void => *';
                        case ':leave':
                          return '* => void';
                        case ':increment':
                          return (t, e) => parseFloat(e) > parseFloat(t);
                        case ':decrement':
                          return (t, e) => parseFloat(e) < parseFloat(t);
                        default:
                          return e.push(`The transition alias value "${t}" is not supported`), '* => *';
                      }
                    })(t, n);
                    if ('function' == typeof r) return void e.push(r);
                    t = r;
                  }
                  const r = t.match(/^(\*|[-\w]+)\s*(<?[=-]>)\s*(\*|[-\w]+)$/);
                  if (null == r || r.length < 4)
                    return n.push(`The provided transition expression "${t}" is not supported`), e;
                  const s = r[1],
                    i = r[2],
                    o = r[3];
                  e.push(qc(s, o)), '<' != i[0] || ('*' == s && '*' == o) || e.push(qc(o, s));
                })(t, n, e)
              )
            : n.push(t),
          n
        );
      }
      const $c = new Set(['true', '1']),
        Bc = new Set(['false', '0']);
      function qc(t, e) {
        const n = $c.has(t) || Bc.has(t),
          r = $c.has(e) || Bc.has(e);
        return (s, i) => {
          let o = '*' == t || t == s,
            a = '*' == e || e == i;
          return (
            !o && n && 'boolean' == typeof s && (o = s ? $c.has(t) : Bc.has(t)),
            !a && r && 'boolean' == typeof i && (a = i ? $c.has(e) : Bc.has(e)),
            o && a
          );
        };
      }
      const Zc = new RegExp('s*:selfs*,?', 'g');
      function Qc(t, e, n) {
        return new Gc(t).build(e, n);
      }
      class Gc {
        constructor(t) {
          this._driver = t;
        }
        build(t, e) {
          const n = new Wc(e);
          return this._resetContextStyleTimingState(n), Hc(this, Pc(t), n);
        }
        _resetContextStyleTimingState(t) {
          (t.currentQuerySelector = ''), (t.collectedStyles = {}), (t.collectedStyles[''] = {}), (t.currentTime = 0);
        }
        visitTrigger(t, e) {
          let n = (e.queryCount = 0),
            r = (e.depCount = 0);
          const s = [],
            i = [];
          return (
            '@' == t.name.charAt(0) &&
              e.errors.push("animation triggers cannot be prefixed with an `@` sign (e.g. trigger('@foo', [...]))"),
            t.definitions.forEach(t => {
              if ((this._resetContextStyleTimingState(e), 0 == t.type)) {
                const n = t,
                  r = n.name;
                r
                  .toString()
                  .split(/\s*,\s*/)
                  .forEach(t => {
                    (n.name = t), s.push(this.visitState(n, e));
                  }),
                  (n.name = r);
              } else if (1 == t.type) {
                const s = this.visitTransition(t, e);
                (n += s.queryCount), (r += s.depCount), i.push(s);
              } else e.errors.push('only state() and transition() definitions can sit inside of a trigger()');
            }),
            { type: 7, name: t.name, states: s, transitions: i, queryCount: n, depCount: r, options: null }
          );
        }
        visitState(t, e) {
          const n = this.visitStyle(t.styles, e),
            r = (t.options && t.options.params) || null;
          if (n.containsDynamicStyles) {
            const s = new Set(),
              i = r || {};
            if (
              (n.styles.forEach(t => {
                if (Kc(t)) {
                  const e = t;
                  Object.keys(e).forEach(t => {
                    Dc(e[t]).forEach(t => {
                      i.hasOwnProperty(t) || s.add(t);
                    });
                  });
                }
              }),
              s.size)
            ) {
              const n = Nc(s.values());
              e.errors.push(
                `state("${t.name}", ...) must define default values for all the following style substitutions: ${n.join(
                  ', '
                )}`
              );
            }
          }
          return { type: 0, name: t.name, style: n, options: r ? { params: r } : null };
        }
        visitTransition(t, e) {
          (e.queryCount = 0), (e.depCount = 0);
          const n = Hc(this, Pc(t.animation), e);
          return {
            type: 1,
            matchers: zc(t.expr, e.errors),
            animation: n,
            queryCount: e.queryCount,
            depCount: e.depCount,
            options: Jc(t.options)
          };
        }
        visitSequence(t, e) {
          return { type: 2, steps: t.steps.map(t => Hc(this, t, e)), options: Jc(t.options) };
        }
        visitGroup(t, e) {
          const n = e.currentTime;
          let r = 0;
          const s = t.steps.map(t => {
            e.currentTime = n;
            const s = Hc(this, t, e);
            return (r = Math.max(r, e.currentTime)), s;
          });
          return (e.currentTime = r), { type: 3, steps: s, options: Jc(t.options) };
        }
        visitAnimate(t, e) {
          const n = (function(t, e) {
            let n = null;
            if (t.hasOwnProperty('duration')) n = t;
            else if ('number' == typeof t) return Yc(Ec(t, e).duration, 0, '');
            const r = t;
            if (r.split(/\s+/).some(t => '{' == t.charAt(0) && '{' == t.charAt(1))) {
              const t = Yc(0, 0, '');
              return (t.dynamic = !0), (t.strValue = r), t;
            }
            return (n = n || Ec(r, e)), Yc(n.duration, n.delay, n.easing);
          })(t.timings, e.errors);
          let r;
          e.currentAnimateTimings = n;
          let s = t.styles ? t.styles : ua({});
          if (5 == s.type) r = this.visitKeyframes(s, e);
          else {
            let s = t.styles,
              i = !1;
            if (!s) {
              i = !0;
              const t = {};
              n.easing && (t.easing = n.easing), (s = ua(t));
            }
            e.currentTime += n.duration + n.delay;
            const o = this.visitStyle(s, e);
            (o.isEmptyStep = i), (r = o);
          }
          return (e.currentAnimateTimings = null), { type: 4, timings: n, style: r, options: null };
        }
        visitStyle(t, e) {
          const n = this._makeStyleAst(t, e);
          return this._validateStyleAst(n, e), n;
        }
        _makeStyleAst(t, e) {
          const n = [];
          Array.isArray(t.styles)
            ? t.styles.forEach(t => {
                'string' == typeof t
                  ? '*' == t
                    ? n.push(t)
                    : e.errors.push(`The provided style string value ${t} is not allowed.`)
                  : n.push(t);
              })
            : n.push(t.styles);
          let r = !1,
            s = null;
          return (
            n.forEach(t => {
              if (Kc(t)) {
                const e = t,
                  n = e.easing;
                if ((n && ((s = n), delete e.easing), !r))
                  for (let t in e)
                    if (e[t].toString().indexOf('{{') >= 0) {
                      r = !0;
                      break;
                    }
              }
            }),
            { type: 6, styles: n, easing: s, offset: t.offset, containsDynamicStyles: r, options: null }
          );
        }
        _validateStyleAst(t, e) {
          const n = e.currentAnimateTimings;
          let r = e.currentTime,
            s = e.currentTime;
          n && s > 0 && (s -= n.duration + n.delay),
            t.styles.forEach(t => {
              'string' != typeof t &&
                Object.keys(t).forEach(n => {
                  if (!this._driver.validateStyleProperty(n))
                    return void e.errors.push(
                      `The provided animation property "${n}" is not a supported CSS property for animations`
                    );
                  const i = e.collectedStyles[e.currentQuerySelector],
                    o = i[n];
                  let a = !0;
                  o &&
                    (s != r &&
                      s >= o.startTime &&
                      r <= o.endTime &&
                      (e.errors.push(
                        `The CSS property "${n}" that exists between the times of "${o.startTime}ms" and "${o.endTime}ms" is also being animated in a parallel animation between the times of "${s}ms" and "${r}ms"`
                      ),
                      (a = !1)),
                    (s = o.startTime)),
                    a && (i[n] = { startTime: s, endTime: r }),
                    e.options &&
                      (function(t, e, n) {
                        const r = e.params || {},
                          s = Dc(t);
                        s.length &&
                          s.forEach(t => {
                            r.hasOwnProperty(t) ||
                              n.push(`Unable to resolve the local animation param ${t} in the given list of values`);
                          });
                      })(t[n], e.options, e.errors);
                });
            });
        }
        visitKeyframes(t, e) {
          const n = { type: 5, styles: [], options: null };
          if (!e.currentAnimateTimings)
            return e.errors.push('keyframes() must be placed inside of a call to animate()'), n;
          let r = 0;
          const s = [];
          let i = !1,
            o = !1,
            a = 0;
          const l = t.steps.map(t => {
            const n = this._makeStyleAst(t, e);
            let l =
                null != n.offset
                  ? n.offset
                  : (function(t) {
                      if ('string' == typeof t) return null;
                      let e = null;
                      if (Array.isArray(t))
                        t.forEach(t => {
                          if (Kc(t) && t.hasOwnProperty('offset')) {
                            const n = t;
                            (e = parseFloat(n.offset)), delete n.offset;
                          }
                        });
                      else if (Kc(t) && t.hasOwnProperty('offset')) {
                        const n = t;
                        (e = parseFloat(n.offset)), delete n.offset;
                      }
                      return e;
                    })(n.styles),
              c = 0;
            return (
              null != l && (r++, (c = n.offset = l)), (o = o || c < 0 || c > 1), (i = i || c < a), (a = c), s.push(c), n
            );
          });
          o && e.errors.push('Please ensure that all keyframe offsets are between 0 and 1'),
            i && e.errors.push('Please ensure that all keyframe offsets are in order');
          const c = t.steps.length;
          let u = 0;
          r > 0 && r < c
            ? e.errors.push('Not all style() steps within the declared keyframes() contain offsets')
            : 0 == r && (u = 1 / (c - 1));
          const h = c - 1,
            d = e.currentTime,
            p = e.currentAnimateTimings,
            f = p.duration;
          return (
            l.forEach((t, r) => {
              const i = u > 0 ? (r == h ? 1 : u * r) : s[r],
                o = i * f;
              (e.currentTime = d + p.delay + o),
                (p.duration = o),
                this._validateStyleAst(t, e),
                (t.offset = i),
                n.styles.push(t);
            }),
            n
          );
        }
        visitReference(t, e) {
          return { type: 8, animation: Hc(this, Pc(t.animation), e), options: Jc(t.options) };
        }
        visitAnimateChild(t, e) {
          return e.depCount++, { type: 9, options: Jc(t.options) };
        }
        visitAnimateRef(t, e) {
          return { type: 10, animation: this.visitReference(t.animation, e), options: Jc(t.options) };
        }
        visitQuery(t, e) {
          const n = e.currentQuerySelector,
            r = t.options || {};
          e.queryCount++, (e.currentQuery = t);
          const [s, i] = (function(t) {
            const e = !!t.split(/\s*,\s*/).find(t => ':self' == t);
            return (
              e && (t = t.replace(Zc, '')),
              [
                (t = t
                  .replace(/@\*/g, '.ng-trigger')
                  .replace(/@\w+/g, t => '.ng-trigger-' + t.substr(1))
                  .replace(/:animating/g, '.ng-animating')),
                e
              ]
            );
          })(t.selector);
          (e.currentQuerySelector = n.length ? n + ' ' + s : s), ac(e.collectedStyles, e.currentQuerySelector, {});
          const o = Hc(this, Pc(t.animation), e);
          return (
            (e.currentQuery = null),
            (e.currentQuerySelector = n),
            {
              type: 11,
              selector: s,
              limit: r.limit || 0,
              optional: !!r.optional,
              includeSelf: i,
              animation: o,
              originalSelector: t.selector,
              options: Jc(t.options)
            }
          );
        }
        visitStagger(t, e) {
          e.currentQuery || e.errors.push('stagger() can only be used inside of query()');
          const n = 'full' === t.timings ? { duration: 0, delay: 0, easing: 'full' } : Ec(t.timings, e.errors, !0);
          return { type: 12, animation: Hc(this, Pc(t.animation), e), timings: n, options: null };
        }
      }
      class Wc {
        constructor(t) {
          (this.errors = t),
            (this.queryCount = 0),
            (this.depCount = 0),
            (this.currentTransition = null),
            (this.currentQuery = null),
            (this.currentQuerySelector = null),
            (this.currentAnimateTimings = null),
            (this.currentTime = 0),
            (this.collectedStyles = {}),
            (this.options = null);
        }
      }
      function Kc(t) {
        return !Array.isArray(t) && 'object' == typeof t;
      }
      function Jc(t) {
        var e;
        return t ? (t = xc(t)).params && (t.params = (e = t.params) ? xc(e) : null) : (t = {}), t;
      }
      function Yc(t, e, n) {
        return { duration: t, delay: e, easing: n };
      }
      function Xc(t, e, n, r, s, i, o = null, a = !1) {
        return {
          type: 1,
          element: t,
          keyframes: e,
          preStyleProps: n,
          postStyleProps: r,
          duration: s,
          delay: i,
          totalTime: s + i,
          easing: o,
          subTimeline: a
        };
      }
      class tu {
        constructor() {
          this._map = new Map();
        }
        consume(t) {
          let e = this._map.get(t);
          return e ? this._map.delete(t) : (e = []), e;
        }
        append(t, e) {
          let n = this._map.get(t);
          n || this._map.set(t, (n = [])), n.push(...e);
        }
        has(t) {
          return this._map.has(t);
        }
        clear() {
          this._map.clear();
        }
      }
      const eu = new RegExp(':enter', 'g'),
        nu = new RegExp(':leave', 'g');
      function ru(t, e, n, r, s, i = {}, o = {}, a, l, c = []) {
        return new su().buildKeyframes(t, e, n, r, s, i, o, a, l, c);
      }
      class su {
        buildKeyframes(t, e, n, r, s, i, o, a, l, c = []) {
          l = l || new tu();
          const u = new ou(t, e, l, r, s, c, []);
          (u.options = a), u.currentTimeline.setStyles([i], null, u.errors, a), Hc(this, n, u);
          const h = u.timelines.filter(t => t.containsAnimation());
          if (h.length && Object.keys(o).length) {
            const t = h[h.length - 1];
            t.allowOnlyTimelineStyles() || t.setStyles([o], null, u.errors, a);
          }
          return h.length ? h.map(t => t.buildKeyframes()) : [Xc(e, [], [], [], 0, 0, '', !1)];
        }
        visitTrigger(t, e) {}
        visitState(t, e) {}
        visitTransition(t, e) {}
        visitAnimateChild(t, e) {
          const n = e.subInstructions.consume(e.element);
          if (n) {
            const r = e.createSubContext(t.options),
              s = e.currentTimeline.currentTime,
              i = this._visitSubInstructions(n, r, r.options);
            s != i && e.transformIntoNewTimeline(i);
          }
          e.previousNode = t;
        }
        visitAnimateRef(t, e) {
          const n = e.createSubContext(t.options);
          n.transformIntoNewTimeline(),
            this.visitReference(t.animation, n),
            e.transformIntoNewTimeline(n.currentTimeline.currentTime),
            (e.previousNode = t);
        }
        _visitSubInstructions(t, e, n) {
          let r = e.currentTimeline.currentTime;
          const s = null != n.duration ? Cc(n.duration) : null,
            i = null != n.delay ? Cc(n.delay) : null;
          return (
            0 !== s &&
              t.forEach(t => {
                const n = e.appendInstructionToTimeline(t, s, i);
                r = Math.max(r, n.duration + n.delay);
              }),
            r
          );
        }
        visitReference(t, e) {
          e.updateOptions(t.options, !0), Hc(this, t.animation, e), (e.previousNode = t);
        }
        visitSequence(t, e) {
          const n = e.subContextCount;
          let r = e;
          const s = t.options;
          if (
            s &&
            (s.params || s.delay) &&
            ((r = e.createSubContext(s)), r.transformIntoNewTimeline(), null != s.delay)
          ) {
            6 == r.previousNode.type && (r.currentTimeline.snapshotCurrentStyles(), (r.previousNode = iu));
            const t = Cc(s.delay);
            r.delayNextStep(t);
          }
          t.steps.length &&
            (t.steps.forEach(t => Hc(this, t, r)),
            r.currentTimeline.applyStylesToKeyframe(),
            r.subContextCount > n && r.transformIntoNewTimeline()),
            (e.previousNode = t);
        }
        visitGroup(t, e) {
          const n = [];
          let r = e.currentTimeline.currentTime;
          const s = t.options && t.options.delay ? Cc(t.options.delay) : 0;
          t.steps.forEach(i => {
            const o = e.createSubContext(t.options);
            s && o.delayNextStep(s),
              Hc(this, i, o),
              (r = Math.max(r, o.currentTimeline.currentTime)),
              n.push(o.currentTimeline);
          }),
            n.forEach(t => e.currentTimeline.mergeTimelineCollectedStyles(t)),
            e.transformIntoNewTimeline(r),
            (e.previousNode = t);
        }
        _visitTiming(t, e) {
          if (t.dynamic) {
            const n = t.strValue;
            return Ec(e.params ? jc(n, e.params, e.errors) : n, e.errors);
          }
          return { duration: t.duration, delay: t.delay, easing: t.easing };
        }
        visitAnimate(t, e) {
          const n = (e.currentAnimateTimings = this._visitTiming(t.timings, e)),
            r = e.currentTimeline;
          n.delay && (e.incrementTime(n.delay), r.snapshotCurrentStyles());
          const s = t.style;
          5 == s.type
            ? this.visitKeyframes(s, e)
            : (e.incrementTime(n.duration), this.visitStyle(s, e), r.applyStylesToKeyframe()),
            (e.currentAnimateTimings = null),
            (e.previousNode = t);
        }
        visitStyle(t, e) {
          const n = e.currentTimeline,
            r = e.currentAnimateTimings;
          !r && n.getCurrentStyleProperties().length && n.forwardFrame();
          const s = (r && r.easing) || t.easing;
          t.isEmptyStep ? n.applyEmptyStep(s) : n.setStyles(t.styles, s, e.errors, e.options), (e.previousNode = t);
        }
        visitKeyframes(t, e) {
          const n = e.currentAnimateTimings,
            r = e.currentTimeline.duration,
            s = n.duration,
            i = e.createSubContext().currentTimeline;
          (i.easing = n.easing),
            t.styles.forEach(t => {
              i.forwardTime((t.offset || 0) * s),
                i.setStyles(t.styles, t.easing, e.errors, e.options),
                i.applyStylesToKeyframe();
            }),
            e.currentTimeline.mergeTimelineCollectedStyles(i),
            e.transformIntoNewTimeline(r + s),
            (e.previousNode = t);
        }
        visitQuery(t, e) {
          const n = e.currentTimeline.currentTime,
            r = t.options || {},
            s = r.delay ? Cc(r.delay) : 0;
          s &&
            (6 === e.previousNode.type || (0 == n && e.currentTimeline.getCurrentStyleProperties().length)) &&
            (e.currentTimeline.snapshotCurrentStyles(), (e.previousNode = iu));
          let i = n;
          const o = e.invokeQuery(t.selector, t.originalSelector, t.limit, t.includeSelf, !!r.optional, e.errors);
          e.currentQueryTotal = o.length;
          let a = null;
          o.forEach((n, r) => {
            e.currentQueryIndex = r;
            const o = e.createSubContext(t.options, n);
            s && o.delayNextStep(s),
              n === e.element && (a = o.currentTimeline),
              Hc(this, t.animation, o),
              o.currentTimeline.applyStylesToKeyframe(),
              (i = Math.max(i, o.currentTimeline.currentTime));
          }),
            (e.currentQueryIndex = 0),
            (e.currentQueryTotal = 0),
            e.transformIntoNewTimeline(i),
            a && (e.currentTimeline.mergeTimelineCollectedStyles(a), e.currentTimeline.snapshotCurrentStyles()),
            (e.previousNode = t);
        }
        visitStagger(t, e) {
          const n = e.parentContext,
            r = e.currentTimeline,
            s = t.timings,
            i = Math.abs(s.duration),
            o = i * (e.currentQueryTotal - 1);
          let a = i * e.currentQueryIndex;
          switch (s.duration < 0 ? 'reverse' : s.easing) {
            case 'reverse':
              a = o - a;
              break;
            case 'full':
              a = n.currentStaggerTime;
          }
          const l = e.currentTimeline;
          a && l.delayNextStep(a);
          const c = l.currentTime;
          Hc(this, t.animation, e),
            (e.previousNode = t),
            (n.currentStaggerTime = r.currentTime - c + (r.startTime - n.currentTimeline.startTime));
        }
      }
      const iu = {};
      class ou {
        constructor(t, e, n, r, s, i, o, a) {
          (this._driver = t),
            (this.element = e),
            (this.subInstructions = n),
            (this._enterClassName = r),
            (this._leaveClassName = s),
            (this.errors = i),
            (this.timelines = o),
            (this.parentContext = null),
            (this.currentAnimateTimings = null),
            (this.previousNode = iu),
            (this.subContextCount = 0),
            (this.options = {}),
            (this.currentQueryIndex = 0),
            (this.currentQueryTotal = 0),
            (this.currentStaggerTime = 0),
            (this.currentTimeline = a || new au(this._driver, e, 0)),
            o.push(this.currentTimeline);
        }
        get params() {
          return this.options.params;
        }
        updateOptions(t, e) {
          if (!t) return;
          const n = t;
          let r = this.options;
          null != n.duration && (r.duration = Cc(n.duration)), null != n.delay && (r.delay = Cc(n.delay));
          const s = n.params;
          if (s) {
            let t = r.params;
            t || (t = this.options.params = {}),
              Object.keys(s).forEach(n => {
                (e && t.hasOwnProperty(n)) || (t[n] = jc(s[n], t, this.errors));
              });
          }
        }
        _copyOptions() {
          const t = {};
          if (this.options) {
            const e = this.options.params;
            if (e) {
              const n = (t.params = {});
              Object.keys(e).forEach(t => {
                n[t] = e[t];
              });
            }
          }
          return t;
        }
        createSubContext(t = null, e, n) {
          const r = e || this.element,
            s = new ou(
              this._driver,
              r,
              this.subInstructions,
              this._enterClassName,
              this._leaveClassName,
              this.errors,
              this.timelines,
              this.currentTimeline.fork(r, n || 0)
            );
          return (
            (s.previousNode = this.previousNode),
            (s.currentAnimateTimings = this.currentAnimateTimings),
            (s.options = this._copyOptions()),
            s.updateOptions(t),
            (s.currentQueryIndex = this.currentQueryIndex),
            (s.currentQueryTotal = this.currentQueryTotal),
            (s.parentContext = this),
            this.subContextCount++,
            s
          );
        }
        transformIntoNewTimeline(t) {
          return (
            (this.previousNode = iu),
            (this.currentTimeline = this.currentTimeline.fork(this.element, t)),
            this.timelines.push(this.currentTimeline),
            this.currentTimeline
          );
        }
        appendInstructionToTimeline(t, e, n) {
          const r = {
              duration: null != e ? e : t.duration,
              delay: this.currentTimeline.currentTime + (null != n ? n : 0) + t.delay,
              easing: ''
            },
            s = new lu(
              this._driver,
              t.element,
              t.keyframes,
              t.preStyleProps,
              t.postStyleProps,
              r,
              t.stretchStartingKeyframe
            );
          return this.timelines.push(s), r;
        }
        incrementTime(t) {
          this.currentTimeline.forwardTime(this.currentTimeline.duration + t);
        }
        delayNextStep(t) {
          t > 0 && this.currentTimeline.delayNextStep(t);
        }
        invokeQuery(t, e, n, r, s, i) {
          let o = [];
          if ((r && o.push(this.element), t.length > 0)) {
            t = (t = t.replace(eu, '.' + this._enterClassName)).replace(nu, '.' + this._leaveClassName);
            let e = this._driver.query(this.element, t, 1 != n);
            0 !== n && (e = n < 0 ? e.slice(e.length + n, e.length) : e.slice(0, n)), o.push(...e);
          }
          return (
            s ||
              0 != o.length ||
              i.push(
                `\`query("${e}")\` returned zero elements. (Use \`query("${e}", { optional: true })\` if you wish to allow this.)`
              ),
            o
          );
        }
      }
      class au {
        constructor(t, e, n, r) {
          (this._driver = t),
            (this.element = e),
            (this.startTime = n),
            (this._elementTimelineStylesLookup = r),
            (this.duration = 0),
            (this._previousKeyframe = {}),
            (this._currentKeyframe = {}),
            (this._keyframes = new Map()),
            (this._styleSummary = {}),
            (this._pendingStyles = {}),
            (this._backFill = {}),
            (this._currentEmptyStepKeyframe = null),
            this._elementTimelineStylesLookup || (this._elementTimelineStylesLookup = new Map()),
            (this._localTimelineStyles = Object.create(this._backFill, {})),
            (this._globalTimelineStyles = this._elementTimelineStylesLookup.get(e)),
            this._globalTimelineStyles ||
              ((this._globalTimelineStyles = this._localTimelineStyles),
              this._elementTimelineStylesLookup.set(e, this._localTimelineStyles)),
            this._loadKeyframe();
        }
        containsAnimation() {
          switch (this._keyframes.size) {
            case 0:
              return !1;
            case 1:
              return this.getCurrentStyleProperties().length > 0;
            default:
              return !0;
          }
        }
        getCurrentStyleProperties() {
          return Object.keys(this._currentKeyframe);
        }
        get currentTime() {
          return this.startTime + this.duration;
        }
        delayNextStep(t) {
          const e = 1 == this._keyframes.size && Object.keys(this._pendingStyles).length;
          this.duration || e
            ? (this.forwardTime(this.currentTime + t), e && this.snapshotCurrentStyles())
            : (this.startTime += t);
        }
        fork(t, e) {
          return (
            this.applyStylesToKeyframe(),
            new au(this._driver, t, e || this.currentTime, this._elementTimelineStylesLookup)
          );
        }
        _loadKeyframe() {
          this._currentKeyframe && (this._previousKeyframe = this._currentKeyframe),
            (this._currentKeyframe = this._keyframes.get(this.duration)),
            this._currentKeyframe ||
              ((this._currentKeyframe = Object.create(this._backFill, {})),
              this._keyframes.set(this.duration, this._currentKeyframe));
        }
        forwardFrame() {
          (this.duration += 1), this._loadKeyframe();
        }
        forwardTime(t) {
          this.applyStylesToKeyframe(), (this.duration = t), this._loadKeyframe();
        }
        _updateStyle(t, e) {
          (this._localTimelineStyles[t] = e),
            (this._globalTimelineStyles[t] = e),
            (this._styleSummary[t] = { time: this.currentTime, value: e });
        }
        allowOnlyTimelineStyles() {
          return this._currentEmptyStepKeyframe !== this._currentKeyframe;
        }
        applyEmptyStep(t) {
          t && (this._previousKeyframe.easing = t),
            Object.keys(this._globalTimelineStyles).forEach(t => {
              (this._backFill[t] = this._globalTimelineStyles[t] || '*'), (this._currentKeyframe[t] = '*');
            }),
            (this._currentEmptyStepKeyframe = this._currentKeyframe);
        }
        setStyles(t, e, n, r) {
          e && (this._previousKeyframe.easing = e);
          const s = (r && r.params) || {},
            i = (function(t, e) {
              const n = {};
              let r;
              return (
                t.forEach(t => {
                  '*' === t
                    ? ((r = r || Object.keys(e)),
                      r.forEach(t => {
                        n[t] = '*';
                      }))
                    : Oc(t, !1, n);
                }),
                n
              );
            })(t, this._globalTimelineStyles);
          Object.keys(i).forEach(t => {
            const e = jc(i[t], s, n);
            (this._pendingStyles[t] = e),
              this._localTimelineStyles.hasOwnProperty(t) ||
                (this._backFill[t] = this._globalTimelineStyles.hasOwnProperty(t)
                  ? this._globalTimelineStyles[t]
                  : '*'),
              this._updateStyle(t, e);
          });
        }
        applyStylesToKeyframe() {
          const t = this._pendingStyles,
            e = Object.keys(t);
          0 != e.length &&
            ((this._pendingStyles = {}),
            e.forEach(e => {
              this._currentKeyframe[e] = t[e];
            }),
            Object.keys(this._localTimelineStyles).forEach(t => {
              this._currentKeyframe.hasOwnProperty(t) || (this._currentKeyframe[t] = this._localTimelineStyles[t]);
            }));
        }
        snapshotCurrentStyles() {
          Object.keys(this._localTimelineStyles).forEach(t => {
            const e = this._localTimelineStyles[t];
            (this._pendingStyles[t] = e), this._updateStyle(t, e);
          });
        }
        getFinalKeyframe() {
          return this._keyframes.get(this.duration);
        }
        get properties() {
          const t = [];
          for (let e in this._currentKeyframe) t.push(e);
          return t;
        }
        mergeTimelineCollectedStyles(t) {
          Object.keys(t._styleSummary).forEach(e => {
            const n = this._styleSummary[e],
              r = t._styleSummary[e];
            (!n || r.time > n.time) && this._updateStyle(e, r.value);
          });
        }
        buildKeyframes() {
          this.applyStylesToKeyframe();
          const t = new Set(),
            e = new Set(),
            n = 1 === this._keyframes.size && 0 === this.duration;
          let r = [];
          this._keyframes.forEach((s, i) => {
            const o = Oc(s, !0);
            Object.keys(o).forEach(n => {
              const r = o[n];
              '!' == r ? t.add(n) : '*' == r && e.add(n);
            }),
              n || (o.offset = i / this.duration),
              r.push(o);
          });
          const s = t.size ? Nc(t.values()) : [],
            i = e.size ? Nc(e.values()) : [];
          if (n) {
            const t = r[0],
              e = xc(t);
            (t.offset = 0), (e.offset = 1), (r = [t, e]);
          }
          return Xc(this.element, r, s, i, this.duration, this.startTime, this.easing, !1);
        }
      }
      class lu extends au {
        constructor(t, e, n, r, s, i, o = !1) {
          super(t, e, i.delay),
            (this.element = e),
            (this.keyframes = n),
            (this.preStyleProps = r),
            (this.postStyleProps = s),
            (this._stretchStartingKeyframe = o),
            (this.timings = { duration: i.duration, delay: i.delay, easing: i.easing });
        }
        containsAnimation() {
          return this.keyframes.length > 1;
        }
        buildKeyframes() {
          let t = this.keyframes,
            { delay: e, duration: n, easing: r } = this.timings;
          if (this._stretchStartingKeyframe && e) {
            const s = [],
              i = n + e,
              o = e / i,
              a = Oc(t[0], !1);
            (a.offset = 0), s.push(a);
            const l = Oc(t[0], !1);
            (l.offset = cu(o)), s.push(l);
            const c = t.length - 1;
            for (let r = 1; r <= c; r++) {
              let o = Oc(t[r], !1);
              (o.offset = cu((e + o.offset * n) / i)), s.push(o);
            }
            (n = i), (e = 0), (r = ''), (t = s);
          }
          return Xc(this.element, t, this.preStyleProps, this.postStyleProps, n, e, r, !0);
        }
      }
      function cu(t, e = 3) {
        const n = Math.pow(10, e - 1);
        return Math.round(t * n) / n;
      }
      class uu {}
      class hu extends uu {
        normalizePropertyName(t, e) {
          return Lc(t);
        }
        normalizeStyleValue(t, e, n, r) {
          let s = '';
          const i = n.toString().trim();
          if (du[e] && 0 !== n && '0' !== n)
            if ('number' == typeof n) s = 'px';
            else {
              const e = n.match(/^[+-]?[\d\.]+([a-z]*)$/);
              e && 0 == e[1].length && r.push(`Please provide a CSS unit value for ${t}:${n}`);
            }
          return i + s;
        }
      }
      const du = (() =>
        (function(t) {
          const e = {};
          return t.forEach(t => (e[t] = !0)), e;
        })(
          'width,height,minWidth,minHeight,maxWidth,maxHeight,left,top,bottom,right,fontSize,outlineWidth,outlineOffset,paddingTop,paddingLeft,paddingBottom,paddingRight,marginTop,marginLeft,marginBottom,marginRight,borderRadius,borderWidth,borderTopWidth,borderLeftWidth,borderRightWidth,borderBottomWidth,textIndent,perspective'.split(
            ','
          )
        ))();
      function pu(t, e, n, r, s, i, o, a, l, c, u, h, d) {
        return {
          type: 0,
          element: t,
          triggerName: e,
          isRemovalTransition: s,
          fromState: n,
          fromStyles: i,
          toState: r,
          toStyles: o,
          timelines: a,
          queriedElements: l,
          preStyleProps: c,
          postStyleProps: u,
          totalTime: h,
          errors: d
        };
      }
      const fu = {};
      class gu {
        constructor(t, e, n) {
          (this._triggerName = t), (this.ast = e), (this._stateStyles = n);
        }
        match(t, e, n, r) {
          return (function(t, e, n, r, s) {
            return t.some(t => t(e, n, r, s));
          })(this.ast.matchers, t, e, n, r);
        }
        buildStyles(t, e, n) {
          const r = this._stateStyles['*'],
            s = this._stateStyles[t],
            i = r ? r.buildStyles(e, n) : {};
          return s ? s.buildStyles(e, n) : i;
        }
        build(t, e, n, r, s, i, o, a, l, c) {
          const u = [],
            h = (this.ast.options && this.ast.options.params) || fu,
            d = this.buildStyles(n, (o && o.params) || fu, u),
            p = (a && a.params) || fu,
            f = this.buildStyles(r, p, u),
            g = new Set(),
            m = new Map(),
            y = new Map(),
            b = 'void' === r,
            _ = { params: Object.assign(Object.assign({}, h), p) },
            v = c ? [] : ru(t, e, this.ast.animation, s, i, d, f, _, l, u);
          let w = 0;
          if (
            (v.forEach(t => {
              w = Math.max(t.duration + t.delay, w);
            }),
            u.length)
          )
            return pu(e, this._triggerName, n, r, b, d, f, [], [], m, y, w, u);
          v.forEach(t => {
            const n = t.element,
              r = ac(m, n, {});
            t.preStyleProps.forEach(t => (r[t] = !0));
            const s = ac(y, n, {});
            t.postStyleProps.forEach(t => (s[t] = !0)), n !== e && g.add(n);
          });
          const C = Nc(g.values());
          return pu(e, this._triggerName, n, r, b, d, f, v, C, m, y, w);
        }
      }
      class mu {
        constructor(t, e) {
          (this.styles = t), (this.defaultParams = e);
        }
        buildStyles(t, e) {
          const n = {},
            r = xc(this.defaultParams);
          return (
            Object.keys(t).forEach(e => {
              const n = t[e];
              null != n && (r[e] = n);
            }),
            this.styles.styles.forEach(t => {
              if ('string' != typeof t) {
                const s = t;
                Object.keys(s).forEach(t => {
                  let i = s[t];
                  i.length > 1 && (i = jc(i, r, e)), (n[t] = i);
                });
              }
            }),
            n
          );
        }
      }
      class yu {
        constructor(t, e) {
          (this.name = t),
            (this.ast = e),
            (this.transitionFactories = []),
            (this.states = {}),
            e.states.forEach(t => {
              this.states[t.name] = new mu(t.style, (t.options && t.options.params) || {});
            }),
            bu(this.states, 'true', '1'),
            bu(this.states, 'false', '0'),
            e.transitions.forEach(e => {
              this.transitionFactories.push(new gu(t, e, this.states));
            }),
            (this.fallbackTransition = new gu(
              t,
              {
                type: 1,
                animation: { type: 2, steps: [], options: null },
                matchers: [(t, e) => !0],
                options: null,
                queryCount: 0,
                depCount: 0
              },
              this.states
            ));
        }
        get containsQueries() {
          return this.ast.queryCount > 0;
        }
        matchTransition(t, e, n, r) {
          return this.transitionFactories.find(s => s.match(t, e, n, r)) || null;
        }
        matchStyles(t, e, n) {
          return this.fallbackTransition.buildStyles(t, e, n);
        }
      }
      function bu(t, e, n) {
        t.hasOwnProperty(e) ? t.hasOwnProperty(n) || (t[n] = t[e]) : t.hasOwnProperty(n) && (t[e] = t[n]);
      }
      const _u = new tu();
      class vu {
        constructor(t, e, n) {
          (this.bodyNode = t),
            (this._driver = e),
            (this._normalizer = n),
            (this._animations = {}),
            (this._playersById = {}),
            (this.players = []);
        }
        register(t, e) {
          const n = [],
            r = Qc(this._driver, e, n);
          if (n.length) throw new Error('Unable to build the animation due to the following errors: ' + n.join('\n'));
          this._animations[t] = r;
        }
        _buildPlayer(t, e, n) {
          const r = t.element,
            s = rc(0, this._normalizer, 0, t.keyframes, e, n);
          return this._driver.animate(r, s, t.duration, t.delay, t.easing, [], !0);
        }
        create(t, e, n = {}) {
          const r = [],
            s = this._animations[t];
          let i;
          const o = new Map();
          if (
            (s
              ? ((i = ru(this._driver, e, s, 'ng-enter', 'ng-leave', {}, {}, n, _u, r)),
                i.forEach(t => {
                  const e = ac(o, t.element, {});
                  t.postStyleProps.forEach(t => (e[t] = null));
                }))
              : (r.push("The requested animation doesn't exist or has already been destroyed"), (i = [])),
            r.length)
          )
            throw new Error('Unable to create the animation due to the following errors: ' + r.join('\n'));
          o.forEach((t, e) => {
            Object.keys(t).forEach(n => {
              t[n] = this._driver.computeStyle(e, n, '*');
            });
          });
          const a = nc(
            i.map(t => {
              const e = o.get(t.element);
              return this._buildPlayer(t, {}, e);
            })
          );
          return (this._playersById[t] = a), a.onDestroy(() => this.destroy(t)), this.players.push(a), a;
        }
        destroy(t) {
          const e = this._getPlayer(t);
          e.destroy(), delete this._playersById[t];
          const n = this.players.indexOf(e);
          n >= 0 && this.players.splice(n, 1);
        }
        _getPlayer(t) {
          const e = this._playersById[t];
          if (!e) throw new Error('Unable to find the timeline player referenced by ' + t);
          return e;
        }
        listen(t, e, n, r) {
          const s = oc(e, '', '', '');
          return sc(this._getPlayer(t), n, s, r), () => {};
        }
        command(t, e, n, r) {
          if ('register' == n) return void this.register(t, r[0]);
          if ('create' == n) return void this.create(t, e, r[0] || {});
          const s = this._getPlayer(t);
          switch (n) {
            case 'play':
              s.play();
              break;
            case 'pause':
              s.pause();
              break;
            case 'reset':
              s.reset();
              break;
            case 'restart':
              s.restart();
              break;
            case 'finish':
              s.finish();
              break;
            case 'init':
              s.init();
              break;
            case 'setPosition':
              s.setPosition(parseFloat(r[0]));
              break;
            case 'destroy':
              this.destroy(t);
          }
        }
      }
      const wu = [],
        Cu = { namespaceId: '', setForRemoval: !1, setForMove: !1, hasAnimation: !1, removedBeforeQueried: !1 },
        Su = { namespaceId: '', setForMove: !1, setForRemoval: !1, hasAnimation: !1, removedBeforeQueried: !0 };
      class Eu {
        constructor(t, e = '') {
          this.namespaceId = e;
          const n = t && t.hasOwnProperty('value');
          if (((this.value = null != (r = n ? t.value : t) ? r : null), n)) {
            const e = xc(t);
            delete e.value, (this.options = e);
          } else this.options = {};
          var r;
          this.options.params || (this.options.params = {});
        }
        get params() {
          return this.options.params;
        }
        absorbOptions(t) {
          const e = t.params;
          if (e) {
            const t = this.options.params;
            Object.keys(e).forEach(n => {
              null == t[n] && (t[n] = e[n]);
            });
          }
        }
      }
      const xu = new Eu('void');
      class Ou {
        constructor(t, e, n) {
          (this.id = t),
            (this.hostElement = e),
            (this._engine = n),
            (this.players = []),
            (this._triggers = {}),
            (this._queue = []),
            (this._elementListeners = new Map()),
            (this._hostClassName = 'ng-tns-' + t),
            Du(e, this._hostClassName);
        }
        listen(t, e, n, r) {
          if (!this._triggers.hasOwnProperty(e))
            throw new Error(
              `Unable to listen on the animation trigger event "${n}" because the animation trigger "${e}" doesn't exist!`
            );
          if (null == n || 0 == n.length)
            throw new Error(
              `Unable to listen on the animation trigger "${e}" because the provided event is undefined!`
            );
          if ('start' != (s = n) && 'done' != s)
            throw new Error(
              `The provided animation trigger event "${n}" for the animation trigger "${e}" is not supported!`
            );
          var s;
          const i = ac(this._elementListeners, t, []),
            o = { name: e, phase: n, callback: r };
          i.push(o);
          const a = ac(this._engine.statesByElement, t, {});
          return (
            a.hasOwnProperty(e) || (Du(t, 'ng-trigger'), Du(t, 'ng-trigger-' + e), (a[e] = xu)),
            () => {
              this._engine.afterFlush(() => {
                const t = i.indexOf(o);
                t >= 0 && i.splice(t, 1), this._triggers[e] || delete a[e];
              });
            }
          );
        }
        register(t, e) {
          return !this._triggers[t] && ((this._triggers[t] = e), !0);
        }
        _getTrigger(t) {
          const e = this._triggers[t];
          if (!e) throw new Error(`The provided animation trigger "${t}" has not been registered!`);
          return e;
        }
        trigger(t, e, n, r = !0) {
          const s = this._getTrigger(e),
            i = new ku(this.id, e, t);
          let o = this._engine.statesByElement.get(t);
          o || (Du(t, 'ng-trigger'), Du(t, 'ng-trigger-' + e), this._engine.statesByElement.set(t, (o = {})));
          let a = o[e];
          const l = new Eu(n, this.id);
          if (
            (!(n && n.hasOwnProperty('value')) && a && l.absorbOptions(a.options),
            (o[e] = l),
            a || (a = xu),
            'void' !== l.value && a.value === l.value)
          ) {
            if (
              !(function(t, e) {
                const n = Object.keys(t),
                  r = Object.keys(e);
                if (n.length != r.length) return !1;
                for (let s = 0; s < n.length; s++) {
                  const r = n[s];
                  if (!e.hasOwnProperty(r) || t[r] !== e[r]) return !1;
                }
                return !0;
              })(a.params, l.params)
            ) {
              const e = [],
                n = s.matchStyles(a.value, a.params, e),
                r = s.matchStyles(l.value, l.params, e);
              e.length
                ? this._engine.reportError(e)
                : this._engine.afterFlush(() => {
                    Ic(t, n), Ac(t, r);
                  });
            }
            return;
          }
          const c = ac(this._engine.playersByElement, t, []);
          c.forEach(t => {
            t.namespaceId == this.id && t.triggerName == e && t.queued && t.destroy();
          });
          let u = s.matchTransition(a.value, l.value, t, l.params),
            h = !1;
          if (!u) {
            if (!r) return;
            (u = s.fallbackTransition), (h = !0);
          }
          return (
            this._engine.totalQueuedPlayers++,
            this._queue.push({
              element: t,
              triggerName: e,
              transition: u,
              fromState: a,
              toState: l,
              player: i,
              isFallbackTransition: h
            }),
            h ||
              (Du(t, 'ng-animate-queued'),
              i.onStart(() => {
                ju(t, 'ng-animate-queued');
              })),
            i.onDone(() => {
              let e = this.players.indexOf(i);
              e >= 0 && this.players.splice(e, 1);
              const n = this._engine.playersByElement.get(t);
              if (n) {
                let t = n.indexOf(i);
                t >= 0 && n.splice(t, 1);
              }
            }),
            this.players.push(i),
            c.push(i),
            i
          );
        }
        deregister(t) {
          delete this._triggers[t],
            this._engine.statesByElement.forEach((e, n) => {
              delete e[t];
            }),
            this._elementListeners.forEach((e, n) => {
              this._elementListeners.set(
                n,
                e.filter(e => e.name != t)
              );
            });
        }
        clearElementCache(t) {
          this._engine.statesByElement.delete(t), this._elementListeners.delete(t);
          const e = this._engine.playersByElement.get(t);
          e && (e.forEach(t => t.destroy()), this._engine.playersByElement.delete(t));
        }
        _signalRemovalForInnerTriggers(t, e) {
          const n = this._engine.driver.query(t, '.ng-trigger', !0);
          n.forEach(t => {
            if (t.__ng_removed) return;
            const n = this._engine.fetchNamespacesByElement(t);
            n.size ? n.forEach(n => n.triggerLeaveAnimation(t, e, !1, !0)) : this.clearElementCache(t);
          }),
            this._engine.afterFlushAnimationsDone(() => n.forEach(t => this.clearElementCache(t)));
        }
        triggerLeaveAnimation(t, e, n, r) {
          const s = this._engine.statesByElement.get(t);
          if (s) {
            const i = [];
            if (
              (Object.keys(s).forEach(e => {
                if (this._triggers[e]) {
                  const n = this.trigger(t, e, 'void', r);
                  n && i.push(n);
                }
              }),
              i.length)
            )
              return (
                this._engine.markElementAsRemoved(this.id, t, !0, e),
                n && nc(i).onDone(() => this._engine.processLeaveNode(t)),
                !0
              );
          }
          return !1;
        }
        prepareLeaveAnimationListeners(t) {
          const e = this._elementListeners.get(t);
          if (e) {
            const n = new Set();
            e.forEach(e => {
              const r = e.name;
              if (n.has(r)) return;
              n.add(r);
              const s = this._triggers[r].fallbackTransition,
                i = this._engine.statesByElement.get(t)[r] || xu,
                o = new Eu('void'),
                a = new ku(this.id, r, t);
              this._engine.totalQueuedPlayers++,
                this._queue.push({
                  element: t,
                  triggerName: r,
                  transition: s,
                  fromState: i,
                  toState: o,
                  player: a,
                  isFallbackTransition: !0
                });
            });
          }
        }
        removeNode(t, e) {
          const n = this._engine;
          if ((t.childElementCount && this._signalRemovalForInnerTriggers(t, e), this.triggerLeaveAnimation(t, e, !0)))
            return;
          let r = !1;
          if (n.totalAnimations) {
            const e = n.players.length ? n.playersByQueriedElement.get(t) : [];
            if (e && e.length) r = !0;
            else {
              let e = t;
              for (; (e = e.parentNode); )
                if (n.statesByElement.get(e)) {
                  r = !0;
                  break;
                }
            }
          }
          if ((this.prepareLeaveAnimationListeners(t), r)) n.markElementAsRemoved(this.id, t, !1, e);
          else {
            const r = t.__ng_removed;
            (r && r !== Cu) ||
              (n.afterFlush(() => this.clearElementCache(t)), n.destroyInnerAnimations(t), n._onRemovalComplete(t, e));
          }
        }
        insertNode(t, e) {
          Du(t, this._hostClassName);
        }
        drainQueuedTransitions(t) {
          const e = [];
          return (
            this._queue.forEach(n => {
              const r = n.player;
              if (r.destroyed) return;
              const s = n.element,
                i = this._elementListeners.get(s);
              i &&
                i.forEach(e => {
                  if (e.name == n.triggerName) {
                    const r = oc(s, n.triggerName, n.fromState.value, n.toState.value);
                    (r._data = t), sc(n.player, e.phase, r, e.callback);
                  }
                }),
                r.markedForDestroy
                  ? this._engine.afterFlush(() => {
                      r.destroy();
                    })
                  : e.push(n);
            }),
            (this._queue = []),
            e.sort((t, e) => {
              const n = t.transition.ast.depCount,
                r = e.transition.ast.depCount;
              return 0 == n || 0 == r ? n - r : this._engine.driver.containsElement(t.element, e.element) ? 1 : -1;
            })
          );
        }
        destroy(t) {
          this.players.forEach(t => t.destroy()), this._signalRemovalForInnerTriggers(this.hostElement, t);
        }
        elementContainsData(t) {
          let e = !1;
          return this._elementListeners.has(t) && (e = !0), (e = !!this._queue.find(e => e.element === t) || e), e;
        }
      }
      class Tu {
        constructor(t, e, n) {
          (this.bodyNode = t),
            (this.driver = e),
            (this._normalizer = n),
            (this.players = []),
            (this.newHostElements = new Map()),
            (this.playersByElement = new Map()),
            (this.playersByQueriedElement = new Map()),
            (this.statesByElement = new Map()),
            (this.disabledNodes = new Set()),
            (this.totalAnimations = 0),
            (this.totalQueuedPlayers = 0),
            (this._namespaceLookup = {}),
            (this._namespaceList = []),
            (this._flushFns = []),
            (this._whenQuietFns = []),
            (this.namespacesByHostElement = new Map()),
            (this.collectedEnterElements = []),
            (this.collectedLeaveElements = []),
            (this.onRemovalComplete = (t, e) => {});
        }
        _onRemovalComplete(t, e) {
          this.onRemovalComplete(t, e);
        }
        get queuedPlayers() {
          const t = [];
          return (
            this._namespaceList.forEach(e => {
              e.players.forEach(e => {
                e.queued && t.push(e);
              });
            }),
            t
          );
        }
        createNamespace(t, e) {
          const n = new Ou(t, e, this);
          return (
            e.parentNode
              ? this._balanceNamespaceList(n, e)
              : (this.newHostElements.set(e, n), this.collectEnterElement(e)),
            (this._namespaceLookup[t] = n)
          );
        }
        _balanceNamespaceList(t, e) {
          const n = this._namespaceList.length - 1;
          if (n >= 0) {
            let r = !1;
            for (let s = n; s >= 0; s--)
              if (this.driver.containsElement(this._namespaceList[s].hostElement, e)) {
                this._namespaceList.splice(s + 1, 0, t), (r = !0);
                break;
              }
            r || this._namespaceList.splice(0, 0, t);
          } else this._namespaceList.push(t);
          return this.namespacesByHostElement.set(e, t), t;
        }
        register(t, e) {
          let n = this._namespaceLookup[t];
          return n || (n = this.createNamespace(t, e)), n;
        }
        registerTrigger(t, e, n) {
          let r = this._namespaceLookup[t];
          r && r.register(e, n) && this.totalAnimations++;
        }
        destroy(t, e) {
          if (!t) return;
          const n = this._fetchNamespace(t);
          this.afterFlush(() => {
            this.namespacesByHostElement.delete(n.hostElement), delete this._namespaceLookup[t];
            const e = this._namespaceList.indexOf(n);
            e >= 0 && this._namespaceList.splice(e, 1);
          }),
            this.afterFlushAnimationsDone(() => n.destroy(e));
        }
        _fetchNamespace(t) {
          return this._namespaceLookup[t];
        }
        fetchNamespacesByElement(t) {
          const e = new Set(),
            n = this.statesByElement.get(t);
          if (n) {
            const t = Object.keys(n);
            for (let r = 0; r < t.length; r++) {
              const s = n[t[r]].namespaceId;
              if (s) {
                const t = this._fetchNamespace(s);
                t && e.add(t);
              }
            }
          }
          return e;
        }
        trigger(t, e, n, r) {
          if (Au(e)) {
            const s = this._fetchNamespace(t);
            if (s) return s.trigger(e, n, r), !0;
          }
          return !1;
        }
        insertNode(t, e, n, r) {
          if (!Au(e)) return;
          const s = e.__ng_removed;
          if (s && s.setForRemoval) {
            (s.setForRemoval = !1), (s.setForMove = !0);
            const t = this.collectedLeaveElements.indexOf(e);
            t >= 0 && this.collectedLeaveElements.splice(t, 1);
          }
          if (t) {
            const r = this._fetchNamespace(t);
            r && r.insertNode(e, n);
          }
          r && this.collectEnterElement(e);
        }
        collectEnterElement(t) {
          this.collectedEnterElements.push(t);
        }
        markElementAsDisabled(t, e) {
          e
            ? this.disabledNodes.has(t) || (this.disabledNodes.add(t), Du(t, 'ng-animate-disabled'))
            : this.disabledNodes.has(t) && (this.disabledNodes.delete(t), ju(t, 'ng-animate-disabled'));
        }
        removeNode(t, e, n, r) {
          if (Au(e)) {
            const s = t ? this._fetchNamespace(t) : null;
            if ((s ? s.removeNode(e, r) : this.markElementAsRemoved(t, e, !1, r), n)) {
              const n = this.namespacesByHostElement.get(e);
              n && n.id !== t && n.removeNode(e, r);
            }
          } else this._onRemovalComplete(e, r);
        }
        markElementAsRemoved(t, e, n, r) {
          this.collectedLeaveElements.push(e),
            (e.__ng_removed = { namespaceId: t, setForRemoval: r, hasAnimation: n, removedBeforeQueried: !1 });
        }
        listen(t, e, n, r, s) {
          return Au(e) ? this._fetchNamespace(t).listen(e, n, r, s) : () => {};
        }
        _buildInstruction(t, e, n, r, s) {
          return t.transition.build(
            this.driver,
            t.element,
            t.fromState.value,
            t.toState.value,
            n,
            r,
            t.fromState.options,
            t.toState.options,
            e,
            s
          );
        }
        destroyInnerAnimations(t) {
          let e = this.driver.query(t, '.ng-trigger', !0);
          e.forEach(t => this.destroyActiveAnimationsForElement(t)),
            0 != this.playersByQueriedElement.size &&
              ((e = this.driver.query(t, '.ng-animating', !0)),
              e.forEach(t => this.finishActiveQueriedAnimationOnElement(t)));
        }
        destroyActiveAnimationsForElement(t) {
          const e = this.playersByElement.get(t);
          e &&
            e.forEach(t => {
              t.queued ? (t.markedForDestroy = !0) : t.destroy();
            });
        }
        finishActiveQueriedAnimationOnElement(t) {
          const e = this.playersByQueriedElement.get(t);
          e && e.forEach(t => t.finish());
        }
        whenRenderingDone() {
          return new Promise(t => {
            if (this.players.length) return nc(this.players).onDone(() => t());
            t();
          });
        }
        processLeaveNode(t) {
          const e = t.__ng_removed;
          if (e && e.setForRemoval) {
            if (((t.__ng_removed = Cu), e.namespaceId)) {
              this.destroyInnerAnimations(t);
              const n = this._fetchNamespace(e.namespaceId);
              n && n.clearElementCache(t);
            }
            this._onRemovalComplete(t, e.setForRemoval);
          }
          this.driver.matchesElement(t, '.ng-animate-disabled') && this.markElementAsDisabled(t, !1),
            this.driver.query(t, '.ng-animate-disabled', !0).forEach(t => {
              this.markElementAsDisabled(t, !1);
            });
        }
        flush(t = -1) {
          let e = [];
          if (
            (this.newHostElements.size &&
              (this.newHostElements.forEach((t, e) => this._balanceNamespaceList(t, e)), this.newHostElements.clear()),
            this.totalAnimations && this.collectedEnterElements.length)
          )
            for (let n = 0; n < this.collectedEnterElements.length; n++)
              Du(this.collectedEnterElements[n], 'ng-star-inserted');
          if (this._namespaceList.length && (this.totalQueuedPlayers || this.collectedLeaveElements.length)) {
            const n = [];
            try {
              e = this._flushAnimations(n, t);
            } finally {
              for (let t = 0; t < n.length; t++) n[t]();
            }
          } else
            for (let n = 0; n < this.collectedLeaveElements.length; n++)
              this.processLeaveNode(this.collectedLeaveElements[n]);
          if (
            ((this.totalQueuedPlayers = 0),
            (this.collectedEnterElements.length = 0),
            (this.collectedLeaveElements.length = 0),
            this._flushFns.forEach(t => t()),
            (this._flushFns = []),
            this._whenQuietFns.length)
          ) {
            const t = this._whenQuietFns;
            (this._whenQuietFns = []),
              e.length
                ? nc(e).onDone(() => {
                    t.forEach(t => t());
                  })
                : t.forEach(t => t());
          }
        }
        reportError(t) {
          throw new Error(
            'Unable to process animations due to the following failed trigger transitions\n ' + t.join('\n')
          );
        }
        _flushAnimations(t, e) {
          const n = new tu(),
            r = [],
            s = new Map(),
            i = [],
            o = new Map(),
            a = new Map(),
            l = new Map(),
            c = new Set();
          this.disabledNodes.forEach(t => {
            c.add(t);
            const e = this.driver.query(t, '.ng-animate-queued', !0);
            for (let n = 0; n < e.length; n++) c.add(e[n]);
          });
          const u = this.bodyNode,
            h = Array.from(this.statesByElement.keys()),
            d = Ru(h, this.collectedEnterElements),
            p = new Map();
          let f = 0;
          d.forEach((t, e) => {
            const n = 'ng-enter' + f++;
            p.set(e, n), t.forEach(t => Du(t, n));
          });
          const g = [],
            m = new Set(),
            y = new Set();
          for (let I = 0; I < this.collectedLeaveElements.length; I++) {
            const t = this.collectedLeaveElements[I],
              e = t.__ng_removed;
            e &&
              e.setForRemoval &&
              (g.push(t),
              m.add(t),
              e.hasAnimation ? this.driver.query(t, '.ng-star-inserted', !0).forEach(t => m.add(t)) : y.add(t));
          }
          const b = new Map(),
            _ = Ru(h, Array.from(m));
          _.forEach((t, e) => {
            const n = 'ng-leave' + f++;
            b.set(e, n), t.forEach(t => Du(t, n));
          }),
            t.push(() => {
              d.forEach((t, e) => {
                const n = p.get(e);
                t.forEach(t => ju(t, n));
              }),
                _.forEach((t, e) => {
                  const n = b.get(e);
                  t.forEach(t => ju(t, n));
                }),
                g.forEach(t => {
                  this.processLeaveNode(t);
                });
            });
          const v = [],
            w = [];
          for (let I = this._namespaceList.length - 1; I >= 0; I--)
            this._namespaceList[I].drainQueuedTransitions(e).forEach(t => {
              const e = t.player,
                s = t.element;
              if ((v.push(e), this.collectedEnterElements.length)) {
                const t = s.__ng_removed;
                if (t && t.setForMove) return void e.destroy();
              }
              const c = !u || !this.driver.containsElement(u, s),
                h = b.get(s),
                d = p.get(s),
                f = this._buildInstruction(t, n, d, h, c);
              if (f.errors && f.errors.length) w.push(f);
              else {
                if (c)
                  return e.onStart(() => Ic(s, f.fromStyles)), e.onDestroy(() => Ac(s, f.toStyles)), void r.push(e);
                if (t.isFallbackTransition)
                  return e.onStart(() => Ic(s, f.fromStyles)), e.onDestroy(() => Ac(s, f.toStyles)), void r.push(e);
                f.timelines.forEach(t => (t.stretchStartingKeyframe = !0)),
                  n.append(s, f.timelines),
                  i.push({ instruction: f, player: e, element: s }),
                  f.queriedElements.forEach(t => ac(o, t, []).push(e)),
                  f.preStyleProps.forEach((t, e) => {
                    const n = Object.keys(t);
                    if (n.length) {
                      let t = a.get(e);
                      t || a.set(e, (t = new Set())), n.forEach(e => t.add(e));
                    }
                  }),
                  f.postStyleProps.forEach((t, e) => {
                    const n = Object.keys(t);
                    let r = l.get(e);
                    r || l.set(e, (r = new Set())), n.forEach(t => r.add(t));
                  });
              }
            });
          if (w.length) {
            const t = [];
            w.forEach(e => {
              t.push(`@${e.triggerName} has failed due to:\n`), e.errors.forEach(e => t.push(`- ${e}\n`));
            }),
              v.forEach(t => t.destroy()),
              this.reportError(t);
          }
          const C = new Map(),
            S = new Map();
          i.forEach(t => {
            const e = t.element;
            n.has(e) && (S.set(e, e), this._beforeAnimationBuild(t.player.namespaceId, t.instruction, C));
          }),
            r.forEach(t => {
              const e = t.element;
              this._getPreviousPlayers(e, !1, t.namespaceId, t.triggerName, null).forEach(t => {
                ac(C, e, []).push(t), t.destroy();
              });
            });
          const E = g.filter(t => Mu(t, a, l)),
            x = new Map();
          Pu(x, this.driver, y, l, '*').forEach(t => {
            Mu(t, a, l) && E.push(t);
          });
          const O = new Map();
          d.forEach((t, e) => {
            Pu(O, this.driver, new Set(t), a, '!');
          }),
            E.forEach(t => {
              const e = x.get(t),
                n = O.get(t);
              x.set(t, Object.assign(Object.assign({}, e), n));
            });
          const T = [],
            k = [],
            A = {};
          i.forEach(t => {
            const { element: e, player: i, instruction: o } = t;
            if (n.has(e)) {
              if (c.has(e))
                return (
                  i.onDestroy(() => Ac(e, o.toStyles)),
                  (i.disabled = !0),
                  i.overrideTotalTime(o.totalTime),
                  void r.push(i)
                );
              let t = A;
              if (S.size > 1) {
                let n = e;
                const r = [];
                for (; (n = n.parentNode); ) {
                  const e = S.get(n);
                  if (e) {
                    t = e;
                    break;
                  }
                  r.push(n);
                }
                r.forEach(e => S.set(e, t));
              }
              const n = this._buildAnimation(i.namespaceId, o, C, s, O, x);
              if ((i.setRealPlayer(n), t === A)) T.push(i);
              else {
                const e = this.playersByElement.get(t);
                e && e.length && (i.parentPlayer = nc(e)), r.push(i);
              }
            } else Ic(e, o.fromStyles), i.onDestroy(() => Ac(e, o.toStyles)), k.push(i), c.has(e) && r.push(i);
          }),
            k.forEach(t => {
              const e = s.get(t.element);
              if (e && e.length) {
                const n = nc(e);
                t.setRealPlayer(n);
              }
            }),
            r.forEach(t => {
              t.parentPlayer ? t.syncPlayerEvents(t.parentPlayer) : t.destroy();
            });
          for (let I = 0; I < g.length; I++) {
            const t = g[I],
              e = t.__ng_removed;
            if ((ju(t, 'ng-leave'), e && e.hasAnimation)) continue;
            let n = [];
            if (o.size) {
              let e = o.get(t);
              e && e.length && n.push(...e);
              let r = this.driver.query(t, '.ng-animating', !0);
              for (let t = 0; t < r.length; t++) {
                let e = o.get(r[t]);
                e && e.length && n.push(...e);
              }
            }
            const r = n.filter(t => !t.destroyed);
            r.length ? Nu(this, t, r) : this.processLeaveNode(t);
          }
          return (
            (g.length = 0),
            T.forEach(t => {
              this.players.push(t),
                t.onDone(() => {
                  t.destroy();
                  const e = this.players.indexOf(t);
                  this.players.splice(e, 1);
                }),
                t.play();
            }),
            T
          );
        }
        elementContainsData(t, e) {
          let n = !1;
          const r = e.__ng_removed;
          return (
            r && r.setForRemoval && (n = !0),
            this.playersByElement.has(e) && (n = !0),
            this.playersByQueriedElement.has(e) && (n = !0),
            this.statesByElement.has(e) && (n = !0),
            this._fetchNamespace(t).elementContainsData(e) || n
          );
        }
        afterFlush(t) {
          this._flushFns.push(t);
        }
        afterFlushAnimationsDone(t) {
          this._whenQuietFns.push(t);
        }
        _getPreviousPlayers(t, e, n, r, s) {
          let i = [];
          if (e) {
            const e = this.playersByQueriedElement.get(t);
            e && (i = e);
          } else {
            const e = this.playersByElement.get(t);
            if (e) {
              const t = !s || 'void' == s;
              e.forEach(e => {
                e.queued || ((t || e.triggerName == r) && i.push(e));
              });
            }
          }
          return (n || r) && (i = i.filter(t => !((n && n != t.namespaceId) || (r && r != t.triggerName)))), i;
        }
        _beforeAnimationBuild(t, e, n) {
          const r = e.element,
            s = e.isRemovalTransition ? void 0 : t,
            i = e.isRemovalTransition ? void 0 : e.triggerName;
          for (const o of e.timelines) {
            const t = o.element,
              a = t !== r,
              l = ac(n, t, []);
            this._getPreviousPlayers(t, a, s, i, e.toState).forEach(t => {
              const e = t.getRealPlayer();
              e.beforeDestroy && e.beforeDestroy(), t.destroy(), l.push(t);
            });
          }
          Ic(r, e.fromStyles);
        }
        _buildAnimation(t, e, n, r, s, i) {
          const o = e.triggerName,
            a = e.element,
            l = [],
            c = new Set(),
            u = new Set(),
            h = e.timelines.map(e => {
              const h = e.element;
              c.add(h);
              const d = h.__ng_removed;
              if (d && d.removedBeforeQueried) return new fa(e.duration, e.delay);
              const p = h !== a,
                f = (function(t) {
                  const e = [];
                  return (
                    (function t(e, n) {
                      for (let r = 0; r < e.length; r++) {
                        const s = e[r];
                        s instanceof ga ? t(s.players, n) : n.push(s);
                      }
                    })(t, e),
                    e
                  );
                })((n.get(h) || wu).map(t => t.getRealPlayer())).filter(t => !!t.element && t.element === h),
                g = s.get(h),
                m = i.get(h),
                y = rc(0, this._normalizer, 0, e.keyframes, g, m),
                b = this._buildPlayer(e, y, f);
              if ((e.subTimeline && r && u.add(h), p)) {
                const e = new ku(t, o, h);
                e.setRealPlayer(b), l.push(e);
              }
              return b;
            });
          l.forEach(t => {
            ac(this.playersByQueriedElement, t.element, []).push(t),
              t.onDone(() =>
                (function(t, e, n) {
                  let r;
                  if (t instanceof Map) {
                    if (((r = t.get(e)), r)) {
                      if (r.length) {
                        const t = r.indexOf(n);
                        r.splice(t, 1);
                      }
                      0 == r.length && t.delete(e);
                    }
                  } else if (((r = t[e]), r)) {
                    if (r.length) {
                      const t = r.indexOf(n);
                      r.splice(t, 1);
                    }
                    0 == r.length && delete t[e];
                  }
                  return r;
                })(this.playersByQueriedElement, t.element, t)
              );
          }),
            c.forEach(t => Du(t, 'ng-animating'));
          const d = nc(h);
          return (
            d.onDestroy(() => {
              c.forEach(t => ju(t, 'ng-animating')), Ac(a, e.toStyles);
            }),
            u.forEach(t => {
              ac(r, t, []).push(d);
            }),
            d
          );
        }
        _buildPlayer(t, e, n) {
          return e.length > 0
            ? this.driver.animate(t.element, e, t.duration, t.delay, t.easing, n)
            : new fa(t.duration, t.delay);
        }
      }
      class ku {
        constructor(t, e, n) {
          (this.namespaceId = t),
            (this.triggerName = e),
            (this.element = n),
            (this._player = new fa()),
            (this._containsRealPlayer = !1),
            (this._queuedCallbacks = {}),
            (this.destroyed = !1),
            (this.markedForDestroy = !1),
            (this.disabled = !1),
            (this.queued = !0),
            (this.totalTime = 0);
        }
        setRealPlayer(t) {
          this._containsRealPlayer ||
            ((this._player = t),
            Object.keys(this._queuedCallbacks).forEach(e => {
              this._queuedCallbacks[e].forEach(n => sc(t, e, void 0, n));
            }),
            (this._queuedCallbacks = {}),
            (this._containsRealPlayer = !0),
            this.overrideTotalTime(t.totalTime),
            (this.queued = !1));
        }
        getRealPlayer() {
          return this._player;
        }
        overrideTotalTime(t) {
          this.totalTime = t;
        }
        syncPlayerEvents(t) {
          const e = this._player;
          e.triggerCallback && t.onStart(() => e.triggerCallback('start')),
            t.onDone(() => this.finish()),
            t.onDestroy(() => this.destroy());
        }
        _queueEvent(t, e) {
          ac(this._queuedCallbacks, t, []).push(e);
        }
        onDone(t) {
          this.queued && this._queueEvent('done', t), this._player.onDone(t);
        }
        onStart(t) {
          this.queued && this._queueEvent('start', t), this._player.onStart(t);
        }
        onDestroy(t) {
          this.queued && this._queueEvent('destroy', t), this._player.onDestroy(t);
        }
        init() {
          this._player.init();
        }
        hasStarted() {
          return !this.queued && this._player.hasStarted();
        }
        play() {
          !this.queued && this._player.play();
        }
        pause() {
          !this.queued && this._player.pause();
        }
        restart() {
          !this.queued && this._player.restart();
        }
        finish() {
          this._player.finish();
        }
        destroy() {
          (this.destroyed = !0), this._player.destroy();
        }
        reset() {
          !this.queued && this._player.reset();
        }
        setPosition(t) {
          this.queued || this._player.setPosition(t);
        }
        getPosition() {
          return this.queued ? 0 : this._player.getPosition();
        }
        triggerCallback(t) {
          const e = this._player;
          e.triggerCallback && e.triggerCallback(t);
        }
      }
      function Au(t) {
        return t && 1 === t.nodeType;
      }
      function Iu(t, e) {
        const n = t.style.display;
        return (t.style.display = null != e ? e : 'none'), n;
      }
      function Pu(t, e, n, r, s) {
        const i = [];
        n.forEach(t => i.push(Iu(t)));
        const o = [];
        r.forEach((n, r) => {
          const i = {};
          n.forEach(t => {
            const n = (i[t] = e.computeStyle(r, t, s));
            (n && 0 != n.length) || ((r.__ng_removed = Su), o.push(r));
          }),
            t.set(r, i);
        });
        let a = 0;
        return n.forEach(t => Iu(t, i[a++])), o;
      }
      function Ru(t, e) {
        const n = new Map();
        if ((t.forEach(t => n.set(t, [])), 0 == e.length)) return n;
        const r = new Set(e),
          s = new Map();
        return (
          e.forEach(t => {
            const e = (function t(e) {
              if (!e) return 1;
              let i = s.get(e);
              if (i) return i;
              const o = e.parentNode;
              return (i = n.has(o) ? o : r.has(o) ? 1 : t(o)), s.set(e, i), i;
            })(t);
            1 !== e && n.get(e).push(t);
          }),
          n
        );
      }
      function Du(t, e) {
        if (t.classList) t.classList.add(e);
        else {
          let n = t.$$classes;
          n || (n = t.$$classes = {}), (n[e] = !0);
        }
      }
      function ju(t, e) {
        if (t.classList) t.classList.remove(e);
        else {
          let n = t.$$classes;
          n && delete n[e];
        }
      }
      function Nu(t, e, n) {
        nc(n).onDone(() => t.processLeaveNode(e));
      }
      function Mu(t, e, n) {
        const r = n.get(t);
        if (!r) return !1;
        let s = e.get(t);
        return s ? r.forEach(t => s.add(t)) : e.set(t, r), n.delete(t), !0;
      }
      class Lu {
        constructor(t, e, n) {
          (this.bodyNode = t),
            (this._driver = e),
            (this._triggerCache = {}),
            (this.onRemovalComplete = (t, e) => {}),
            (this._transitionEngine = new Tu(t, e, n)),
            (this._timelineEngine = new vu(t, e, n)),
            (this._transitionEngine.onRemovalComplete = (t, e) => this.onRemovalComplete(t, e));
        }
        registerTrigger(t, e, n, r, s) {
          const i = t + '-' + r;
          let o = this._triggerCache[i];
          if (!o) {
            const t = [],
              e = Qc(this._driver, s, t);
            if (t.length)
              throw new Error(
                `The animation trigger "${r}" has failed to build due to the following errors:\n - ${t.join('\n - ')}`
              );
            (o = (function(t, e) {
              return new yu(t, e);
            })(r, e)),
              (this._triggerCache[i] = o);
          }
          this._transitionEngine.registerTrigger(e, r, o);
        }
        register(t, e) {
          this._transitionEngine.register(t, e);
        }
        destroy(t, e) {
          this._transitionEngine.destroy(t, e);
        }
        onInsert(t, e, n, r) {
          this._transitionEngine.insertNode(t, e, n, r);
        }
        onRemove(t, e, n, r) {
          this._transitionEngine.removeNode(t, e, r || !1, n);
        }
        disableAnimations(t, e) {
          this._transitionEngine.markElementAsDisabled(t, e);
        }
        process(t, e, n, r) {
          if ('@' == n.charAt(0)) {
            const [t, s] = lc(n);
            this._timelineEngine.command(t, e, s, r);
          } else this._transitionEngine.trigger(t, e, n, r);
        }
        listen(t, e, n, r, s) {
          if ('@' == n.charAt(0)) {
            const [t, r] = lc(n);
            return this._timelineEngine.listen(t, e, r, s);
          }
          return this._transitionEngine.listen(t, e, n, r, s);
        }
        flush(t = -1) {
          this._transitionEngine.flush(t);
        }
        get players() {
          return this._transitionEngine.players.concat(this._timelineEngine.players);
        }
        whenRenderingDone() {
          return this._transitionEngine.whenRenderingDone();
        }
      }
      function Fu(t, e) {
        let n = null,
          r = null;
        return (
          Array.isArray(e) && e.length ? ((n = Hu(e[0])), e.length > 1 && (r = Hu(e[e.length - 1]))) : e && (n = Hu(e)),
          n || r ? new Vu(t, n, r) : null
        );
      }
      let Vu = (() => {
        class t {
          constructor(e, n, r) {
            (this._element = e), (this._startStyles = n), (this._endStyles = r), (this._state = 0);
            let s = t.initialStylesByElement.get(e);
            s || t.initialStylesByElement.set(e, (s = {})), (this._initialStyles = s);
          }
          start() {
            this._state < 1 &&
              (this._startStyles && Ac(this._element, this._startStyles, this._initialStyles), (this._state = 1));
          }
          finish() {
            this.start(),
              this._state < 2 &&
                (Ac(this._element, this._initialStyles),
                this._endStyles && (Ac(this._element, this._endStyles), (this._endStyles = null)),
                (this._state = 1));
          }
          destroy() {
            this.finish(),
              this._state < 3 &&
                (t.initialStylesByElement.delete(this._element),
                this._startStyles && (Ic(this._element, this._startStyles), (this._endStyles = null)),
                this._endStyles && (Ic(this._element, this._endStyles), (this._endStyles = null)),
                Ac(this._element, this._initialStyles),
                (this._state = 3));
          }
        }
        return (t.initialStylesByElement = new WeakMap()), t;
      })();
      function Hu(t) {
        let e = null;
        const n = Object.keys(t);
        for (let r = 0; r < n.length; r++) {
          const s = n[r];
          Uu(s) && ((e = e || {}), (e[s] = t[s]));
        }
        return e;
      }
      function Uu(t) {
        return 'display' === t || 'position' === t;
      }
      class zu {
        constructor(t, e, n, r, s, i, o) {
          (this._element = t),
            (this._name = e),
            (this._duration = n),
            (this._delay = r),
            (this._easing = s),
            (this._fillMode = i),
            (this._onDoneFn = o),
            (this._finished = !1),
            (this._destroyed = !1),
            (this._startTime = 0),
            (this._position = 0),
            (this._eventFn = t => this._handleCallback(t));
        }
        apply() {
          !(function(t, e) {
            const n = Gu(t, '').trim();
            n.length &&
              ((function(t, e) {
                let n = 0;
                for (let r = 0; r < t.length; r++) ',' === t.charAt(r) && n++;
              })(n),
              (e = `${n}, ${e}`)),
              Qu(t, '', e);
          })(
            this._element,
            `${this._duration}ms ${this._easing} ${this._delay}ms 1 normal ${this._fillMode} ${this._name}`
          ),
            Zu(this._element, this._eventFn, !1),
            (this._startTime = Date.now());
        }
        pause() {
          $u(this._element, this._name, 'paused');
        }
        resume() {
          $u(this._element, this._name, 'running');
        }
        setPosition(t) {
          const e = Bu(this._element, this._name);
          (this._position = t * this._duration), Qu(this._element, 'Delay', `-${this._position}ms`, e);
        }
        getPosition() {
          return this._position;
        }
        _handleCallback(t) {
          const e = t._ngTestManualTimestamp || Date.now(),
            n = 1e3 * parseFloat(t.elapsedTime.toFixed(3));
          t.animationName == this._name &&
            Math.max(e - this._startTime, 0) >= this._delay &&
            n >= this._duration &&
            this.finish();
        }
        finish() {
          this._finished || ((this._finished = !0), this._onDoneFn(), Zu(this._element, this._eventFn, !0));
        }
        destroy() {
          this._destroyed ||
            ((this._destroyed = !0),
            this.finish(),
            (function(t, e) {
              const n = Gu(t, '').split(','),
                r = qu(n, e);
              r >= 0 && (n.splice(r, 1), Qu(t, '', n.join(',')));
            })(this._element, this._name));
        }
      }
      function $u(t, e, n) {
        Qu(t, 'PlayState', n, Bu(t, e));
      }
      function Bu(t, e) {
        const n = Gu(t, '');
        return n.indexOf(',') > 0 ? qu(n.split(','), e) : qu([n], e);
      }
      function qu(t, e) {
        for (let n = 0; n < t.length; n++) if (t[n].indexOf(e) >= 0) return n;
        return -1;
      }
      function Zu(t, e, n) {
        n ? t.removeEventListener('animationend', e) : t.addEventListener('animationend', e);
      }
      function Qu(t, e, n, r) {
        const s = 'animation' + e;
        if (null != r) {
          const e = t.style[s];
          if (e.length) {
            const t = e.split(',');
            (t[r] = n), (n = t.join(','));
          }
        }
        t.style[s] = n;
      }
      function Gu(t, e) {
        return t.style['animation' + e];
      }
      class Wu {
        constructor(t, e, n, r, s, i, o, a) {
          (this.element = t),
            (this.keyframes = e),
            (this.animationName = n),
            (this._duration = r),
            (this._delay = s),
            (this._finalStyles = o),
            (this._specialStyles = a),
            (this._onDoneFns = []),
            (this._onStartFns = []),
            (this._onDestroyFns = []),
            (this._started = !1),
            (this.currentSnapshot = {}),
            (this._state = 0),
            (this.easing = i || 'linear'),
            (this.totalTime = r + s),
            this._buildStyler();
        }
        onStart(t) {
          this._onStartFns.push(t);
        }
        onDone(t) {
          this._onDoneFns.push(t);
        }
        onDestroy(t) {
          this._onDestroyFns.push(t);
        }
        destroy() {
          this.init(),
            this._state >= 4 ||
              ((this._state = 4),
              this._styler.destroy(),
              this._flushStartFns(),
              this._flushDoneFns(),
              this._specialStyles && this._specialStyles.destroy(),
              this._onDestroyFns.forEach(t => t()),
              (this._onDestroyFns = []));
        }
        _flushDoneFns() {
          this._onDoneFns.forEach(t => t()), (this._onDoneFns = []);
        }
        _flushStartFns() {
          this._onStartFns.forEach(t => t()), (this._onStartFns = []);
        }
        finish() {
          this.init(),
            this._state >= 3 ||
              ((this._state = 3),
              this._styler.finish(),
              this._flushStartFns(),
              this._specialStyles && this._specialStyles.finish(),
              this._flushDoneFns());
        }
        setPosition(t) {
          this._styler.setPosition(t);
        }
        getPosition() {
          return this._styler.getPosition();
        }
        hasStarted() {
          return this._state >= 2;
        }
        init() {
          this._state >= 1 || ((this._state = 1), this._styler.apply(), this._delay && this._styler.pause());
        }
        play() {
          this.init(),
            this.hasStarted() ||
              (this._flushStartFns(), (this._state = 2), this._specialStyles && this._specialStyles.start()),
            this._styler.resume();
        }
        pause() {
          this.init(), this._styler.pause();
        }
        restart() {
          this.reset(), this.play();
        }
        reset() {
          this._styler.destroy(), this._buildStyler(), this._styler.apply();
        }
        _buildStyler() {
          this._styler = new zu(
            this.element,
            this.animationName,
            this._duration,
            this._delay,
            this.easing,
            'forwards',
            () => this.finish()
          );
        }
        triggerCallback(t) {
          const e = 'start' == t ? this._onStartFns : this._onDoneFns;
          e.forEach(t => t()), (e.length = 0);
        }
        beforeDestroy() {
          this.init();
          const t = {};
          if (this.hasStarted()) {
            const e = this._state >= 3;
            Object.keys(this._finalStyles).forEach(n => {
              'offset' != n && (t[n] = e ? this._finalStyles[n] : Uc(this.element, n));
            });
          }
          this.currentSnapshot = t;
        }
      }
      class Ku extends fa {
        constructor(t, e) {
          super(), (this.element = t), (this._startingStyles = {}), (this.__initialized = !1), (this._styles = _c(e));
        }
        init() {
          !this.__initialized &&
            this._startingStyles &&
            ((this.__initialized = !0),
            Object.keys(this._styles).forEach(t => {
              this._startingStyles[t] = this.element.style[t];
            }),
            super.init());
        }
        play() {
          this._startingStyles &&
            (this.init(),
            Object.keys(this._styles).forEach(t => this.element.style.setProperty(t, this._styles[t])),
            super.play());
        }
        destroy() {
          this._startingStyles &&
            (Object.keys(this._startingStyles).forEach(t => {
              const e = this._startingStyles[t];
              e ? this.element.style.setProperty(t, e) : this.element.style.removeProperty(t);
            }),
            (this._startingStyles = null),
            super.destroy());
        }
      }
      class Ju {
        constructor() {
          (this._count = 0), (this._head = document.querySelector('head')), (this._warningIssued = !1);
        }
        validateStyleProperty(t) {
          return gc(t);
        }
        matchesElement(t, e) {
          return mc(t, e);
        }
        containsElement(t, e) {
          return yc(t, e);
        }
        query(t, e, n) {
          return bc(t, e, n);
        }
        computeStyle(t, e, n) {
          return window.getComputedStyle(t)[e];
        }
        buildKeyframeElement(t, e, n) {
          n = n.map(t => _c(t));
          let r = `@keyframes ${e} {\n`,
            s = '';
          n.forEach(t => {
            s = ' ';
            const e = parseFloat(t.offset);
            (r += `${s}${100 * e}% {\n`),
              (s += ' '),
              Object.keys(t).forEach(e => {
                const n = t[e];
                switch (e) {
                  case 'offset':
                    return;
                  case 'easing':
                    return void (n && (r += `${s}animation-timing-function: ${n};\n`));
                  default:
                    return void (r += `${s}${e}: ${n};\n`);
                }
              }),
              (r += s + '}\n');
          }),
            (r += '}\n');
          const i = document.createElement('style');
          return (i.innerHTML = r), i;
        }
        animate(t, e, n, r, s, i = [], o) {
          o && this._notifyFaultyScrubber();
          const a = i.filter(t => t instanceof Wu),
            l = {};
          Fc(n, r) &&
            a.forEach(t => {
              let e = t.currentSnapshot;
              Object.keys(e).forEach(t => (l[t] = e[t]));
            });
          const c = (function(t) {
            let e = {};
            return (
              t &&
                (Array.isArray(t) ? t : [t]).forEach(t => {
                  Object.keys(t).forEach(n => {
                    'offset' != n && 'easing' != n && (e[n] = t[n]);
                  });
                }),
              e
            );
          })((e = Vc(t, e, l)));
          if (0 == n) return new Ku(t, c);
          const u = 'gen_css_kf_' + this._count++,
            h = this.buildKeyframeElement(t, u, e);
          document.querySelector('head').appendChild(h);
          const d = Fu(t, e),
            p = new Wu(t, e, u, n, r, s, c, d);
          return (
            p.onDestroy(() => {
              var t;
              (t = h).parentNode.removeChild(t);
            }),
            p
          );
        }
        _notifyFaultyScrubber() {
          this._warningIssued ||
            (console.warn(
              '@angular/animations: please load the web-animations.js polyfill to allow programmatic access...\n',
              '  visit http://bit.ly/IWukam to learn more about using the web-animation-js polyfill.'
            ),
            (this._warningIssued = !0));
        }
      }
      class Yu {
        constructor(t, e, n, r) {
          (this.element = t),
            (this.keyframes = e),
            (this.options = n),
            (this._specialStyles = r),
            (this._onDoneFns = []),
            (this._onStartFns = []),
            (this._onDestroyFns = []),
            (this._initialized = !1),
            (this._finished = !1),
            (this._started = !1),
            (this._destroyed = !1),
            (this.time = 0),
            (this.parentPlayer = null),
            (this.currentSnapshot = {}),
            (this._duration = n.duration),
            (this._delay = n.delay || 0),
            (this.time = this._duration + this._delay);
        }
        _onFinish() {
          this._finished || ((this._finished = !0), this._onDoneFns.forEach(t => t()), (this._onDoneFns = []));
        }
        init() {
          this._buildPlayer(), this._preparePlayerBeforeStart();
        }
        _buildPlayer() {
          if (this._initialized) return;
          this._initialized = !0;
          const t = this.keyframes;
          (this.domPlayer = this._triggerWebAnimation(this.element, t, this.options)),
            (this._finalKeyframe = t.length ? t[t.length - 1] : {}),
            this.domPlayer.addEventListener('finish', () => this._onFinish());
        }
        _preparePlayerBeforeStart() {
          this._delay ? this._resetDomPlayerState() : this.domPlayer.pause();
        }
        _triggerWebAnimation(t, e, n) {
          return t.animate(e, n);
        }
        onStart(t) {
          this._onStartFns.push(t);
        }
        onDone(t) {
          this._onDoneFns.push(t);
        }
        onDestroy(t) {
          this._onDestroyFns.push(t);
        }
        play() {
          this._buildPlayer(),
            this.hasStarted() ||
              (this._onStartFns.forEach(t => t()),
              (this._onStartFns = []),
              (this._started = !0),
              this._specialStyles && this._specialStyles.start()),
            this.domPlayer.play();
        }
        pause() {
          this.init(), this.domPlayer.pause();
        }
        finish() {
          this.init(), this._specialStyles && this._specialStyles.finish(), this._onFinish(), this.domPlayer.finish();
        }
        reset() {
          this._resetDomPlayerState(), (this._destroyed = !1), (this._finished = !1), (this._started = !1);
        }
        _resetDomPlayerState() {
          this.domPlayer && this.domPlayer.cancel();
        }
        restart() {
          this.reset(), this.play();
        }
        hasStarted() {
          return this._started;
        }
        destroy() {
          this._destroyed ||
            ((this._destroyed = !0),
            this._resetDomPlayerState(),
            this._onFinish(),
            this._specialStyles && this._specialStyles.destroy(),
            this._onDestroyFns.forEach(t => t()),
            (this._onDestroyFns = []));
        }
        setPosition(t) {
          this.domPlayer.currentTime = t * this.time;
        }
        getPosition() {
          return this.domPlayer.currentTime / this.time;
        }
        get totalTime() {
          return this._delay + this._duration;
        }
        beforeDestroy() {
          const t = {};
          this.hasStarted() &&
            Object.keys(this._finalKeyframe).forEach(e => {
              'offset' != e && (t[e] = this._finished ? this._finalKeyframe[e] : Uc(this.element, e));
            }),
            (this.currentSnapshot = t);
        }
        triggerCallback(t) {
          const e = 'start' == t ? this._onStartFns : this._onDoneFns;
          e.forEach(t => t()), (e.length = 0);
        }
      }
      class Xu {
        constructor() {
          (this._isNativeImpl = /\{\s*\[native\s+code\]\s*\}/.test(th().toString())),
            (this._cssKeyframesDriver = new Ju());
        }
        validateStyleProperty(t) {
          return gc(t);
        }
        matchesElement(t, e) {
          return mc(t, e);
        }
        containsElement(t, e) {
          return yc(t, e);
        }
        query(t, e, n) {
          return bc(t, e, n);
        }
        computeStyle(t, e, n) {
          return window.getComputedStyle(t)[e];
        }
        overrideWebAnimationsSupport(t) {
          this._isNativeImpl = t;
        }
        animate(t, e, n, r, s, i = [], o) {
          if (!o && !this._isNativeImpl) return this._cssKeyframesDriver.animate(t, e, n, r, s, i);
          const a = { duration: n, delay: r, fill: 0 == r ? 'both' : 'forwards' };
          s && (a.easing = s);
          const l = {},
            c = i.filter(t => t instanceof Yu);
          Fc(n, r) &&
            c.forEach(t => {
              let e = t.currentSnapshot;
              Object.keys(e).forEach(t => (l[t] = e[t]));
            });
          const u = Fu(t, (e = Vc(t, (e = e.map(t => Oc(t, !1))), l)));
          return new Yu(t, e, a, u);
        }
      }
      function th() {
        return ('undefined' != typeof window && void 0 !== window.document && Element.prototype.animate) || {};
      }
      let eh = (() => {
        class t extends oa {
          constructor(t, e) {
            super(),
              (this._nextAnimationId = 0),
              (this._renderer = t.createRenderer(e.body, {
                id: '0',
                encapsulation: s.O.None,
                styles: [],
                data: { animation: [] }
              }));
          }
          build(t) {
            const e = this._nextAnimationId.toString();
            this._nextAnimationId++;
            const n = Array.isArray(t) ? ca(t) : t;
            return sh(this._renderer, null, e, 'register', [n]), new nh(e, this._renderer);
          }
        }
        return (
          (t.ɵfac = function(e) {
            return new (e || t)(s.Zb(s.E), s.Zb(i.c));
          }),
          (t.ɵprov = s.Ib({ token: t, factory: t.ɵfac })),
          t
        );
      })();
      class nh extends class {} {
        constructor(t, e) {
          super(), (this._id = t), (this._renderer = e);
        }
        create(t, e) {
          return new rh(this._id, t, e || {}, this._renderer);
        }
      }
      class rh {
        constructor(t, e, n, r) {
          (this.id = t),
            (this.element = e),
            (this._renderer = r),
            (this.parentPlayer = null),
            (this._started = !1),
            (this.totalTime = 0),
            this._command('create', n);
        }
        _listen(t, e) {
          return this._renderer.listen(this.element, `@@${this.id}:${t}`, e);
        }
        _command(t, ...e) {
          return sh(this._renderer, this.element, this.id, t, e);
        }
        onDone(t) {
          this._listen('done', t);
        }
        onStart(t) {
          this._listen('start', t);
        }
        onDestroy(t) {
          this._listen('destroy', t);
        }
        init() {
          this._command('init');
        }
        hasStarted() {
          return this._started;
        }
        play() {
          this._command('play'), (this._started = !0);
        }
        pause() {
          this._command('pause');
        }
        restart() {
          this._command('restart');
        }
        finish() {
          this._command('finish');
        }
        destroy() {
          this._command('destroy');
        }
        reset() {
          this._command('reset');
        }
        setPosition(t) {
          this._command('setPosition', t);
        }
        getPosition() {
          return 0;
        }
      }
      function sh(t, e, n, r, s) {
        return t.setProperty(e, `@@${n}:${r}`, s);
      }
      let ih = (() => {
        class t {
          constructor(t, e, n) {
            (this.delegate = t),
              (this.engine = e),
              (this._zone = n),
              (this._currentId = 0),
              (this._microtaskId = 1),
              (this._animationCallbacksBuffer = []),
              (this._rendererCache = new Map()),
              (this._cdRecurDepth = 0),
              (this.promise = Promise.resolve(0)),
              (e.onRemovalComplete = (t, e) => {
                e && e.parentNode(t) && e.removeChild(t.parentNode, t);
              });
          }
          createRenderer(t, e) {
            const n = this.delegate.createRenderer(t, e);
            if (!(t && e && e.data && e.data.animation)) {
              let t = this._rendererCache.get(n);
              return t || ((t = new oh('', n, this.engine)), this._rendererCache.set(n, t)), t;
            }
            const r = e.id,
              s = e.id + '-' + this._currentId;
            this._currentId++, this.engine.register(s, t);
            const i = e => {
              Array.isArray(e) ? e.forEach(i) : this.engine.registerTrigger(r, s, t, e.name, e);
            };
            return e.data.animation.forEach(i), new ah(this, s, n, this.engine);
          }
          begin() {
            this._cdRecurDepth++, this.delegate.begin && this.delegate.begin();
          }
          _scheduleCountTask() {
            this.promise.then(() => {
              this._microtaskId++;
            });
          }
          scheduleListenerCallback(t, e, n) {
            t >= 0 && t < this._microtaskId
              ? this._zone.run(() => e(n))
              : (0 == this._animationCallbacksBuffer.length &&
                  Promise.resolve(null).then(() => {
                    this._zone.run(() => {
                      this._animationCallbacksBuffer.forEach(t => {
                        const [e, n] = t;
                        e(n);
                      }),
                        (this._animationCallbacksBuffer = []);
                    });
                  }),
                this._animationCallbacksBuffer.push([e, n]));
          }
          end() {
            this._cdRecurDepth--,
              0 == this._cdRecurDepth &&
                this._zone.runOutsideAngular(() => {
                  this._scheduleCountTask(), this.engine.flush(this._microtaskId);
                }),
              this.delegate.end && this.delegate.end();
          }
          whenRenderingDone() {
            return this.engine.whenRenderingDone();
          }
        }
        return (
          (t.ɵfac = function(e) {
            return new (e || t)(s.Zb(s.E), s.Zb(Lu), s.Zb(s.z));
          }),
          (t.ɵprov = s.Ib({ token: t, factory: t.ɵfac })),
          t
        );
      })();
      class oh {
        constructor(t, e, n) {
          (this.namespaceId = t),
            (this.delegate = e),
            (this.engine = n),
            (this.destroyNode = this.delegate.destroyNode ? t => e.destroyNode(t) : null);
        }
        get data() {
          return this.delegate.data;
        }
        destroy() {
          this.engine.destroy(this.namespaceId, this.delegate), this.delegate.destroy();
        }
        createElement(t, e) {
          return this.delegate.createElement(t, e);
        }
        createComment(t) {
          return this.delegate.createComment(t);
        }
        createText(t) {
          return this.delegate.createText(t);
        }
        appendChild(t, e) {
          this.delegate.appendChild(t, e), this.engine.onInsert(this.namespaceId, e, t, !1);
        }
        insertBefore(t, e, n) {
          this.delegate.insertBefore(t, e, n), this.engine.onInsert(this.namespaceId, e, t, !0);
        }
        removeChild(t, e, n) {
          this.engine.onRemove(this.namespaceId, e, this.delegate, n);
        }
        selectRootElement(t, e) {
          return this.delegate.selectRootElement(t, e);
        }
        parentNode(t) {
          return this.delegate.parentNode(t);
        }
        nextSibling(t) {
          return this.delegate.nextSibling(t);
        }
        setAttribute(t, e, n, r) {
          this.delegate.setAttribute(t, e, n, r);
        }
        removeAttribute(t, e, n) {
          this.delegate.removeAttribute(t, e, n);
        }
        addClass(t, e) {
          this.delegate.addClass(t, e);
        }
        removeClass(t, e) {
          this.delegate.removeClass(t, e);
        }
        setStyle(t, e, n, r) {
          this.delegate.setStyle(t, e, n, r);
        }
        removeStyle(t, e, n) {
          this.delegate.removeStyle(t, e, n);
        }
        setProperty(t, e, n) {
          '@' == e.charAt(0) && '@.disabled' == e ? this.disableAnimations(t, !!n) : this.delegate.setProperty(t, e, n);
        }
        setValue(t, e) {
          this.delegate.setValue(t, e);
        }
        listen(t, e, n) {
          return this.delegate.listen(t, e, n);
        }
        disableAnimations(t, e) {
          this.engine.disableAnimations(t, e);
        }
      }
      class ah extends oh {
        constructor(t, e, n, r) {
          super(e, n, r), (this.factory = t), (this.namespaceId = e);
        }
        setProperty(t, e, n) {
          '@' == e.charAt(0)
            ? '.' == e.charAt(1) && '@.disabled' == e
              ? this.disableAnimations(t, (n = void 0 === n || !!n))
              : this.engine.process(this.namespaceId, t, e.substr(1), n)
            : this.delegate.setProperty(t, e, n);
        }
        listen(t, e, n) {
          if ('@' == e.charAt(0)) {
            const r = (function(t) {
              switch (t) {
                case 'body':
                  return document.body;
                case 'document':
                  return document;
                case 'window':
                  return window;
                default:
                  return t;
              }
            })(t);
            let s = e.substr(1),
              i = '';
            return (
              '@' != s.charAt(0) &&
                ([s, i] = (function(t) {
                  const e = t.indexOf('.');
                  return [t.substring(0, e), t.substr(e + 1)];
                })(s)),
              this.engine.listen(this.namespaceId, r, s, i, t => {
                this.factory.scheduleListenerCallback(t._data || -1, n, t);
              })
            );
          }
          return this.delegate.listen(t, e, n);
        }
      }
      let lh = (() => {
        class t extends Lu {
          constructor(t, e, n) {
            super(t.body, e, n);
          }
        }
        return (
          (t.ɵfac = function(e) {
            return new (e || t)(s.Zb(i.c), s.Zb(wc), s.Zb(uu));
          }),
          (t.ɵprov = s.Ib({ token: t, factory: t.ɵfac })),
          t
        );
      })();
      const ch = [
        {
          provide: wc,
          useFactory: function() {
            return 'function' == typeof th() ? new Xu() : new Ju();
          }
        },
        { provide: new s.q('AnimationModuleType'), useValue: 'BrowserAnimations' },
        { provide: oa, useClass: eh },
        {
          provide: uu,
          useFactory: function() {
            return new hu();
          }
        },
        { provide: Lu, useClass: lh },
        {
          provide: s.E,
          useFactory: function(t, e, n) {
            return new ih(t, e, n);
          },
          deps: [r.e, Lu, s.z]
        }
      ];
      let uh = (() => {
          class t {}
          return (
            (t.ɵmod = s.Kb({ type: t })),
            (t.ɵinj = s.Jb({
              factory: function(e) {
                return new (e || t)();
              },
              providers: ch,
              imports: [r.a]
            })),
            t
          );
        })(),
        hh = (() => {
          class t {}
          return (
            (t.ɵmod = s.Kb({ type: t, bootstrap: [ql] })),
            (t.ɵinj = s.Jb({
              factory: function(e) {
                return new (e || t)();
              },
              providers: [],
              imports: [
                [
                  r.a,
                  _t,
                  ae,
                  en.forRoot(),
                  Qr,
                  Qa,
                  el.forRoot(),
                  al.forRoot(),
                  Hl,
                  Vl,
                  $l,
                  tc,
                  Lr,
                  uh,
                  La.forRoot({ positionClass: 'toast-top-right' }),
                  Ql
                ]
              ]
            })),
            t
          );
        })();
    },
    ZUHj: function(t, e, n) {
      'use strict';
      n.d(e, 'a', function() {
        return o;
      });
      var r = n('51Dv'),
        s = n('SeVD'),
        i = n('HDdC');
      function o(t, e, n, o, a = new r.a(t, n, o)) {
        if (!a.closed) return e instanceof i.a ? e.subscribe(a) : Object(s.a)(e)(a);
      }
    },
    bHdf: function(t, e, n) {
      'use strict';
      n.d(e, 'a', function() {
        return i;
      });
      var r = n('5+tZ'),
        s = n('SpAZ');
      function i(t = Number.POSITIVE_INFINITY) {
        return Object(r.a)(s.a, t);
      }
    },
    c2HN: function(t, e, n) {
      'use strict';
      function r(t) {
        return !!t && 'function' != typeof t.subscribe && 'function' == typeof t.then;
      }
      n.d(e, 'a', function() {
        return r;
      });
    },
    fXoL: function(t, e, n) {
      'use strict';
      n.d(e, 'a', function() {
        return Ai;
      }),
        n.d(e, 'b', function() {
          return Ec;
        }),
        n.d(e, 'c', function() {
          return _c;
        }),
        n.d(e, 'd', function() {
          return yc;
        }),
        n.d(e, 'e', function() {
          return bc;
        }),
        n.d(e, 'f', function() {
          return mu;
        }),
        n.d(e, 'g', function() {
          return ou;
        }),
        n.d(e, 'h', function() {
          return di;
        }),
        n.d(e, 'i', function() {
          return Nc;
        }),
        n.d(e, 'j', function() {
          return pa;
        }),
        n.d(e, 'k', function() {
          return Tc;
        }),
        n.d(e, 'l', function() {
          return fa;
        }),
        n.d(e, 'm', function() {
          return _n;
        }),
        n.d(e, 'n', function() {
          return Wl;
        }),
        n.d(e, 'o', function() {
          return Z;
        }),
        n.d(e, 'p', function() {
          return u;
        }),
        n.d(e, 'q', function() {
          return q;
        }),
        n.d(e, 'r', function() {
          return ki;
        }),
        n.d(e, 's', function() {
          return Da;
        }),
        n.d(e, 't', function() {
          return ja;
        }),
        n.d(e, 'u', function() {
          return Oc;
        }),
        n.d(e, 'v', function() {
          return ot;
        }),
        n.d(e, 'w', function() {
          return lu;
        }),
        n.d(e, 'x', function() {
          return it;
        }),
        n.d(e, 'y', function() {
          return eu;
        }),
        n.d(e, 'z', function() {
          return Vc;
        }),
        n.d(e, 'A', function() {
          return h;
        }),
        n.d(e, 'B', function() {
          return Sc;
        }),
        n.d(e, 'C', function() {
          return Cc;
        }),
        n.d(e, 'D', function() {
          return ba;
        }),
        n.d(e, 'E', function() {
          return ma;
        }),
        n.d(e, 'F', function() {
          return ya;
        }),
        n.d(e, 'G', function() {
          return va;
        }),
        n.d(e, 'H', function() {
          return ar;
        }),
        n.d(e, 'I', function() {
          return p;
        }),
        n.d(e, 'J', function() {
          return hu;
        }),
        n.d(e, 'K', function() {
          return Fa;
        }),
        n.d(e, 'L', function() {
          return Qc;
        }),
        n.d(e, 'M', function() {
          return wa;
        }),
        n.d(e, 'N', function() {
          return Ha;
        }),
        n.d(e, 'O', function() {
          return mt;
        }),
        n.d(e, 'P', function() {
          return Li;
        }),
        n.d(e, 'Q', function() {
          return nu;
        }),
        n.d(e, 'R', function() {
          return Ln;
        }),
        n.d(e, 'S', function() {
          return I;
        }),
        n.d(e, 'T', function() {
          return Mn;
        }),
        n.d(e, 'U', function() {
          return fu;
        }),
        n.d(e, 'V', function() {
          return Kc;
        }),
        n.d(e, 'W', function() {
          return xc;
        }),
        n.d(e, 'X', function() {
          return fi;
        }),
        n.d(e, 'Y', function() {
          return nl;
        }),
        n.d(e, 'Z', function() {
          return ir;
        }),
        n.d(e, 'ab', function() {
          return ur;
        }),
        n.d(e, 'bb', function() {
          return Un;
        }),
        n.d(e, 'cb', function() {
          return Tn;
        }),
        n.d(e, 'db', function() {
          return An;
        }),
        n.d(e, 'eb', function() {
          return Dn;
        }),
        n.d(e, 'fb', function() {
          return Pn;
        }),
        n.d(e, 'gb', function() {
          return In;
        }),
        n.d(e, 'hb', function() {
          return Rn;
        }),
        n.d(e, 'ib', function() {
          return Ya;
        }),
        n.d(e, 'jb', function() {
          return pu;
        }),
        n.d(e, 'kb', function() {
          return Xa;
        }),
        n.d(e, 'lb', function() {
          return tl;
        }),
        n.d(e, 'mb', function() {
          return kn;
        }),
        n.d(e, 'nb', function() {
          return L;
        }),
        n.d(e, 'ob', function() {
          return Fi;
        }),
        n.d(e, 'pb', function() {
          return io;
        }),
        n.d(e, 'qb', function() {
          return so;
        }),
        n.d(e, 'rb', function() {
          return Mi;
        }),
        n.d(e, 'sb', function() {
          return Ja;
        }),
        n.d(e, 'tb', function() {
          return Ht;
        }),
        n.d(e, 'ub', function() {
          return T;
        }),
        n.d(e, 'vb', function() {
          return On;
        }),
        n.d(e, 'wb', function() {
          return Go;
        }),
        n.d(e, 'xb', function() {
          return ta;
        }),
        n.d(e, 'yb', function() {
          return ua;
        }),
        n.d(e, 'zb', function() {
          return Dr;
        }),
        n.d(e, 'Ab', function() {
          return $i;
        }),
        n.d(e, 'Bb', function() {
          return To;
        }),
        n.d(e, 'Cb', function() {
          return $o;
        }),
        n.d(e, 'Db', function() {
          return Bo;
        }),
        n.d(e, 'Eb', function() {
          return Oo;
        }),
        n.d(e, 'Fb', function() {
          return lc;
        }),
        n.d(e, 'Gb', function() {
          return vt;
        }),
        n.d(e, 'Hb', function() {
          return Tt;
        }),
        n.d(e, 'Ib', function() {
          return y;
        }),
        n.d(e, 'Jb', function() {
          return b;
        }),
        n.d(e, 'Kb', function() {
          return Et;
        }),
        n.d(e, 'Lb', function() {
          return kt;
        }),
        n.d(e, 'Mb', function() {
          return Qi;
        }),
        n.d(e, 'Nb', function() {
          return to;
        }),
        n.d(e, 'Ob', function() {
          return no;
        }),
        n.d(e, 'Pb', function() {
          return eo;
        }),
        n.d(e, 'Qb', function() {
          return Xi;
        }),
        n.d(e, 'Rb', function() {
          return Yi;
        }),
        n.d(e, 'Sb', function() {
          return ro;
        }),
        n.d(e, 'Tb', function() {
          return gn;
        }),
        n.d(e, 'Ub', function() {
          return qo;
        }),
        n.d(e, 'Vb', function() {
          return xl;
        }),
        n.d(e, 'Wb', function() {
          return Il;
        }),
        n.d(e, 'Xb', function() {
          return Ol;
        }),
        n.d(e, 'Yb', function() {
          return Al;
        }),
        n.d(e, 'Zb', function() {
          return et;
        }),
        n.d(e, 'ac', function() {
          return Gi;
        }),
        n.d(e, 'bc', function() {
          return mc;
        }),
        n.d(e, 'cc', function() {
          return Wi;
        }),
        n.d(e, 'dc', function() {
          return oo;
        }),
        n.d(e, 'ec', function() {
          return hc;
        }),
        n.d(e, 'fc', function() {
          return co;
        }),
        n.d(e, 'gc', function() {
          return Ql;
        }),
        n.d(e, 'hc', function() {
          return Gl;
        }),
        n.d(e, 'ic', function() {
          return go;
        }),
        n.d(e, 'jc', function() {
          return ho;
        }),
        n.d(e, 'kc', function() {
          return Ki;
        }),
        n.d(e, 'lc', function() {
          return mo;
        }),
        n.d(e, 'mc', function() {
          return yo;
        }),
        n.d(e, 'nc', function() {
          return Ul;
        }),
        n.d(e, 'oc', function() {
          return zl;
        }),
        n.d(e, 'pc', function() {
          return $l;
        }),
        n.d(e, 'qc', function() {
          return Bl;
        }),
        n.d(e, 'rc', function() {
          return oc;
        }),
        n.d(e, 'sc', function() {
          return Zi;
        }),
        n.d(e, 'tc', function() {
          return oe;
        }),
        n.d(e, 'uc', function() {
          return hr;
        }),
        n.d(e, 'vc', function() {
          return dr;
        }),
        n.d(e, 'wc', function() {
          return xt;
        }),
        n.d(e, 'xc', function() {
          return cc;
        }),
        n.d(e, 'yc', function() {
          return ac;
        }),
        n.d(e, 'zc', function() {
          return xo;
        }),
        n.d(e, 'Ac', function() {
          return qi;
        }),
        n.d(e, 'Bc', function() {
          return gc;
        }),
        n.d(e, 'Cc', function() {
          return Vo;
        }),
        n.d(e, 'Dc', function() {
          return Ho;
        }),
        n.d(e, 'Ec', function() {
          return Uo;
        }),
        n.d(e, 'Fc', function() {
          return zo;
        }),
        n.d(e, 'Gc', function() {
          return Zo;
        });
      var r = n('XNiG'),
        s = n('quSY'),
        i = n('HDdC'),
        o = n('VRyK'),
        a = n('w1tV');
      function l(t) {
        return { toString: t }.toString();
      }
      function c(t, e, n) {
        return l(() => {
          const r = (function(t) {
            return function(...e) {
              if (t) {
                const n = t(...e);
                for (const t in n) this[t] = n[t];
              }
            };
          })(e);
          function s(...t) {
            if (this instanceof s) return r.apply(this, t), this;
            const e = new s(...t);
            return (n.annotation = e), n;
            function n(t, n, r) {
              const s = t.hasOwnProperty('__parameters__')
                ? t.__parameters__
                : Object.defineProperty(t, '__parameters__', { value: [] }).__parameters__;
              for (; s.length <= r; ) s.push(null);
              return (s[r] = s[r] || []).push(e), t;
            }
          }
          return (
            n && (s.prototype = Object.create(n.prototype)), (s.prototype.ngMetadataName = t), (s.annotationCls = s), s
          );
        });
      }
      const u = c('Inject', t => ({ token: t })),
        h = c('Optional'),
        d = c('Self'),
        p = c('SkipSelf');
      var f = (function(t) {
        return (
          (t[(t.Default = 0)] = 'Default'),
          (t[(t.Host = 1)] = 'Host'),
          (t[(t.Self = 2)] = 'Self'),
          (t[(t.SkipSelf = 4)] = 'SkipSelf'),
          (t[(t.Optional = 8)] = 'Optional'),
          t
        );
      })({});
      function g(t) {
        for (let e in t) if (t[e] === g) return e;
        throw Error('Could not find renamed property on target object.');
      }
      function m(t, e) {
        for (const n in e) e.hasOwnProperty(n) && !t.hasOwnProperty(n) && (t[n] = e[n]);
      }
      function y(t) {
        return { token: t.token, providedIn: t.providedIn || null, factory: t.factory, value: void 0 };
      }
      function b(t) {
        return { factory: t.factory, providers: t.providers || [], imports: t.imports || [] };
      }
      function _(t) {
        return v(t, t[C]) || v(t, t[x]);
      }
      function v(t, e) {
        return e && e.token === t ? e : null;
      }
      function w(t) {
        return t && (t.hasOwnProperty(S) || t.hasOwnProperty(O)) ? t[S] : null;
      }
      const C = g({ ɵprov: g }),
        S = g({ ɵinj: g }),
        E = g({ ɵprovFallback: g }),
        x = g({ ngInjectableDef: g }),
        O = g({ ngInjectorDef: g });
      function T(t) {
        if ('string' == typeof t) return t;
        if (Array.isArray(t)) return '[' + t.map(T).join(', ') + ']';
        if (null == t) return '' + t;
        if (t.overriddenName) return '' + t.overriddenName;
        if (t.name) return '' + t.name;
        const e = t.toString();
        if (null == e) return '' + e;
        const n = e.indexOf('\n');
        return -1 === n ? e : e.substring(0, n);
      }
      function k(t, e) {
        return null == t || '' === t ? (null === e ? '' : e) : null == e || '' === e ? t : t + ' ' + e;
      }
      const A = g({ __forward_ref__: g });
      function I(t) {
        return (
          (t.__forward_ref__ = I),
          (t.toString = function() {
            return T(this());
          }),
          t
        );
      }
      function P(t) {
        return R(t) ? t() : t;
      }
      function R(t) {
        return 'function' == typeof t && t.hasOwnProperty(A) && t.__forward_ref__ === I;
      }
      const D = 'undefined' != typeof globalThis && globalThis,
        j = 'undefined' != typeof window && window,
        N =
          'undefined' != typeof self &&
          'undefined' != typeof WorkerGlobalScope &&
          self instanceof WorkerGlobalScope &&
          self,
        M = 'undefined' != typeof global && global,
        L = D || M || j || N,
        F = g({ ɵcmp: g }),
        V = g({ ɵdir: g }),
        H = g({ ɵpipe: g }),
        U = g({ ɵmod: g }),
        z = g({ ɵloc: g }),
        $ = g({ ɵfac: g }),
        B = g({ __NG_ELEMENT_ID__: g });
      class q {
        constructor(t, e) {
          (this._desc = t),
            (this.ngMetadataName = 'InjectionToken'),
            (this.ɵprov = void 0),
            'number' == typeof e
              ? (this.__NG_ELEMENT_ID__ = e)
              : void 0 !== e &&
                (this.ɵprov = y({ token: this, providedIn: e.providedIn || 'root', factory: e.factory }));
        }
        toString() {
          return 'InjectionToken ' + this._desc;
        }
      }
      const Z = new q('INJECTOR', -1),
        Q = {},
        G = /\n/gm,
        W = g({ provide: String, useValue: g });
      let K,
        J = void 0;
      function Y(t) {
        const e = J;
        return (J = t), e;
      }
      function X(t) {
        const e = K;
        return (K = t), e;
      }
      function tt(t, e = f.Default) {
        if (void 0 === J) throw new Error('inject() must be called from an injection context');
        return null === J ? nt(t, void 0, e) : J.get(t, e & f.Optional ? null : void 0, e);
      }
      function et(t, e = f.Default) {
        return (K || tt)(P(t), e);
      }
      function nt(t, e, n) {
        const r = _(t);
        if (r && 'root' == r.providedIn) return void 0 === r.value ? (r.value = r.factory()) : r.value;
        if (n & f.Optional) return null;
        if (void 0 !== e) return e;
        throw new Error(`Injector: NOT_FOUND [${T(t)}]`);
      }
      function rt(t) {
        const e = [];
        for (let n = 0; n < t.length; n++) {
          const r = P(t[n]);
          if (Array.isArray(r)) {
            if (0 === r.length) throw new Error('Arguments array must have arguments.');
            let t = void 0,
              n = f.Default;
            for (let e = 0; e < r.length; e++) {
              const s = r[e];
              s instanceof h || 'Optional' === s.ngMetadataName || s === h
                ? (n |= f.Optional)
                : s instanceof p || 'SkipSelf' === s.ngMetadataName || s === p
                ? (n |= f.SkipSelf)
                : s instanceof d || 'Self' === s.ngMetadataName || s === d
                ? (n |= f.Self)
                : (t = s instanceof u || s === u ? s.token : s);
            }
            e.push(et(t, n));
          } else e.push(et(r));
        }
        return e;
      }
      class st {
        get(t, e = Q) {
          if (e === Q) {
            const e = new Error(`NullInjectorError: No provider for ${T(t)}!`);
            throw ((e.name = 'NullInjectorError'), e);
          }
          return e;
        }
      }
      class it {}
      class ot {}
      function at(t, e) {
        for (let n = 0; n < t.length; n++) e.push(t[n]);
      }
      function lt(t, e) {
        t.forEach(t => (Array.isArray(t) ? lt(t, e) : e(t)));
      }
      function ct(t, e, n) {
        e >= t.length ? t.push(n) : t.splice(e, 0, n);
      }
      function ut(t, e) {
        return e >= t.length - 1 ? t.pop() : t.splice(e, 1)[0];
      }
      function ht(t, e) {
        const n = [];
        for (let r = 0; r < t; r++) n.push(e);
        return n;
      }
      function dt(t, e, n) {
        let r = ft(t, e);
        return (
          r >= 0
            ? (t[1 | r] = n)
            : ((r = ~r),
              (function(t, e, n, r) {
                let s = t.length;
                if (s == e) t.push(n, r);
                else if (1 === s) t.push(r, t[0]), (t[0] = n);
                else {
                  for (s--, t.push(t[s - 1], t[s]); s > e; ) (t[s] = t[s - 2]), s--;
                  (t[e] = n), (t[e + 1] = r);
                }
              })(t, r, e, n)),
          r
        );
      }
      function pt(t, e) {
        const n = ft(t, e);
        if (n >= 0) return t[1 | n];
      }
      function ft(t, e) {
        return (function(t, e, n) {
          let r = 0,
            s = t.length >> 1;
          for (; s !== r; ) {
            const n = r + ((s - r) >> 1),
              i = t[n << 1];
            if (e === i) return n << 1;
            i > e ? (s = n) : (r = n + 1);
          }
          return ~(s << 1);
        })(t, e);
      }
      const gt = (function() {
          var t = { OnPush: 0, Default: 1 };
          return (t[t.OnPush] = 'OnPush'), (t[t.Default] = 'Default'), t;
        })(),
        mt = (function() {
          var t = { Emulated: 0, Native: 1, None: 2, ShadowDom: 3 };
          return (
            (t[t.Emulated] = 'Emulated'),
            (t[t.Native] = 'Native'),
            (t[t.None] = 'None'),
            (t[t.ShadowDom] = 'ShadowDom'),
            t
          );
        })(),
        yt = {},
        bt = [];
      let _t = 0;
      function vt(t) {
        return l(() => {
          const e = t.type,
            n = e.prototype,
            r = {},
            s = {
              type: e,
              providersResolver: null,
              decls: t.decls,
              vars: t.vars,
              factory: null,
              template: t.template || null,
              consts: t.consts || null,
              ngContentSelectors: t.ngContentSelectors,
              hostBindings: t.hostBindings || null,
              hostVars: t.hostVars || 0,
              hostAttrs: t.hostAttrs || null,
              contentQueries: t.contentQueries || null,
              declaredInputs: r,
              inputs: null,
              outputs: null,
              exportAs: t.exportAs || null,
              onChanges: null,
              onInit: n.ngOnInit || null,
              doCheck: n.ngDoCheck || null,
              afterContentInit: n.ngAfterContentInit || null,
              afterContentChecked: n.ngAfterContentChecked || null,
              afterViewInit: n.ngAfterViewInit || null,
              afterViewChecked: n.ngAfterViewChecked || null,
              onDestroy: n.ngOnDestroy || null,
              onPush: t.changeDetection === gt.OnPush,
              directiveDefs: null,
              pipeDefs: null,
              selectors: t.selectors || bt,
              viewQuery: t.viewQuery || null,
              features: t.features || null,
              data: t.data || {},
              encapsulation: t.encapsulation || mt.Emulated,
              id: 'c',
              styles: t.styles || bt,
              _: null,
              setInput: null,
              schemas: t.schemas || null,
              tView: null
            },
            i = t.directives,
            o = t.features,
            a = t.pipes;
          return (
            (s.id += _t++),
            (s.inputs = Ot(t.inputs, r)),
            (s.outputs = Ot(t.outputs)),
            o && o.forEach(t => t(s)),
            (s.directiveDefs = i ? () => ('function' == typeof i ? i() : i).map(wt) : null),
            (s.pipeDefs = a ? () => ('function' == typeof a ? a() : a).map(Ct) : null),
            s
          );
        });
      }
      function wt(t) {
        return (
          At(t) ||
          (function(t) {
            return t[V] || null;
          })(t)
        );
      }
      function Ct(t) {
        return (function(t) {
          return t[H] || null;
        })(t);
      }
      const St = {};
      function Et(t) {
        const e = {
          type: t.type,
          bootstrap: t.bootstrap || bt,
          declarations: t.declarations || bt,
          imports: t.imports || bt,
          exports: t.exports || bt,
          transitiveCompileScopes: null,
          schemas: t.schemas || null,
          id: t.id || null
        };
        return (
          null != t.id &&
            l(() => {
              St[t.id] = t.type;
            }),
          e
        );
      }
      function xt(t, e) {
        return l(() => {
          const n = Pt(t, !0);
          (n.declarations = e.declarations || bt), (n.imports = e.imports || bt), (n.exports = e.exports || bt);
        });
      }
      function Ot(t, e) {
        if (null == t) return yt;
        const n = {};
        for (const r in t)
          if (t.hasOwnProperty(r)) {
            let s = t[r],
              i = s;
            Array.isArray(s) && ((i = s[1]), (s = s[0])), (n[s] = r), e && (e[s] = i);
          }
        return n;
      }
      const Tt = vt;
      function kt(t) {
        return {
          type: t.type,
          name: t.name,
          factory: null,
          pure: !1 !== t.pure,
          onDestroy: t.type.prototype.ngOnDestroy || null
        };
      }
      function At(t) {
        return t[F] || null;
      }
      function It(t, e) {
        return t.hasOwnProperty($) ? t[$] : null;
      }
      function Pt(t, e) {
        const n = t[U] || null;
        if (!n && !0 === e) throw new Error(`Type ${T(t)} does not have '\u0275mod' property.`);
        return n;
      }
      function Rt(t) {
        return Array.isArray(t) && 'object' == typeof t[1];
      }
      function Dt(t) {
        return Array.isArray(t) && !0 === t[1];
      }
      function jt(t) {
        return 0 != (8 & t.flags);
      }
      function Nt(t) {
        return 2 == (2 & t.flags);
      }
      function Mt(t) {
        return 1 == (1 & t.flags);
      }
      function Lt(t) {
        return null !== t.template;
      }
      function Ft(t) {
        return 0 != (512 & t[2]);
      }
      let Vt = void 0;
      function Ht(t) {
        Vt = t;
      }
      function Ut() {
        return void 0 !== Vt ? Vt : 'undefined' != typeof document ? document : void 0;
      }
      function zt(t) {
        return !!t.listen;
      }
      const $t = { createRenderer: (t, e) => Ut() };
      function Bt(t) {
        for (; Array.isArray(t); ) t = t[0];
        return t;
      }
      function qt(t, e) {
        return Bt(e[t + 20]);
      }
      function Zt(t, e) {
        return Bt(e[t.index]);
      }
      function Qt(t, e) {
        return t.data[e + 20];
      }
      function Gt(t, e) {
        return t[e + 20];
      }
      function Wt(t, e) {
        const n = e[t];
        return Rt(n) ? n : n[0];
      }
      function Kt(t) {
        const e = (function(t) {
          return t.__ngContext__ || null;
        })(t);
        return e ? (Array.isArray(e) ? e : e.lView) : null;
      }
      function Jt(t) {
        return 4 == (4 & t[2]);
      }
      function Yt(t) {
        return 128 == (128 & t[2]);
      }
      function Xt(t, e) {
        return null === t || null == e ? null : t[e];
      }
      function te(t) {
        t[18] = 0;
      }
      function ee(t, e) {
        t[5] += e;
        let n = t,
          r = t[3];
        for (; null !== r && ((1 === e && 1 === n[5]) || (-1 === e && 0 === n[5])); ) (r[5] += e), (n = r), (r = r[3]);
      }
      const ne = { lFrame: xe(null), bindingsEnabled: !0, checkNoChangesMode: !1 };
      function re() {
        return ne.bindingsEnabled;
      }
      function se() {
        return ne.lFrame.lView;
      }
      function ie() {
        return ne.lFrame.tView;
      }
      function oe(t) {
        ne.lFrame.contextLView = t;
      }
      function ae() {
        return ne.lFrame.previousOrParentTNode;
      }
      function le(t, e) {
        (ne.lFrame.previousOrParentTNode = t), (ne.lFrame.isParent = e);
      }
      function ce() {
        return ne.lFrame.isParent;
      }
      function ue() {
        ne.lFrame.isParent = !1;
      }
      function he() {
        return ne.checkNoChangesMode;
      }
      function de(t) {
        ne.checkNoChangesMode = t;
      }
      function pe() {
        const t = ne.lFrame;
        let e = t.bindingRootIndex;
        return -1 === e && (e = t.bindingRootIndex = t.tView.bindingStartIndex), e;
      }
      function fe() {
        return ne.lFrame.bindingIndex;
      }
      function ge() {
        return ne.lFrame.bindingIndex++;
      }
      function me(t) {
        const e = ne.lFrame,
          n = e.bindingIndex;
        return (e.bindingIndex = e.bindingIndex + t), n;
      }
      function ye(t, e) {
        const n = ne.lFrame;
        (n.bindingIndex = n.bindingRootIndex = t), be(e);
      }
      function be(t) {
        ne.lFrame.currentDirectiveIndex = t;
      }
      function _e(t) {
        const e = ne.lFrame.currentDirectiveIndex;
        return -1 === e ? null : t[e];
      }
      function ve() {
        return ne.lFrame.currentQueryIndex;
      }
      function we(t) {
        ne.lFrame.currentQueryIndex = t;
      }
      function Ce(t, e) {
        const n = Ee();
        (ne.lFrame = n), (n.previousOrParentTNode = e), (n.lView = t);
      }
      function Se(t, e) {
        const n = Ee(),
          r = t[1];
        (ne.lFrame = n),
          (n.previousOrParentTNode = e),
          (n.lView = t),
          (n.tView = r),
          (n.contextLView = t),
          (n.bindingIndex = r.bindingStartIndex);
      }
      function Ee() {
        const t = ne.lFrame,
          e = null === t ? null : t.child;
        return null === e ? xe(t) : e;
      }
      function xe(t) {
        const e = {
          previousOrParentTNode: null,
          isParent: !0,
          lView: null,
          tView: null,
          selectedIndex: 0,
          contextLView: null,
          elementDepthCount: 0,
          currentNamespace: null,
          currentSanitizer: null,
          currentDirectiveIndex: -1,
          bindingRootIndex: -1,
          bindingIndex: -1,
          currentQueryIndex: 0,
          parent: t,
          child: null
        };
        return null !== t && (t.child = e), e;
      }
      function Oe() {
        const t = ne.lFrame;
        return (ne.lFrame = t.parent), (t.previousOrParentTNode = null), (t.lView = null), t;
      }
      const Te = Oe;
      function ke() {
        const t = Oe();
        (t.isParent = !0),
          (t.tView = null),
          (t.selectedIndex = 0),
          (t.contextLView = null),
          (t.elementDepthCount = 0),
          (t.currentDirectiveIndex = -1),
          (t.currentNamespace = null),
          (t.currentSanitizer = null),
          (t.bindingRootIndex = -1),
          (t.bindingIndex = -1),
          (t.currentQueryIndex = 0);
      }
      function Ae() {
        return ne.lFrame.selectedIndex;
      }
      function Ie(t) {
        ne.lFrame.selectedIndex = t;
      }
      function Pe() {
        const t = ne.lFrame;
        return Qt(t.tView, t.selectedIndex);
      }
      function Re(t, e) {
        for (let n = e.directiveStart, r = e.directiveEnd; n < r; n++) {
          const e = t.data[n];
          e.afterContentInit && (t.contentHooks || (t.contentHooks = [])).push(-n, e.afterContentInit),
            e.afterContentChecked &&
              ((t.contentHooks || (t.contentHooks = [])).push(n, e.afterContentChecked),
              (t.contentCheckHooks || (t.contentCheckHooks = [])).push(n, e.afterContentChecked)),
            e.afterViewInit && (t.viewHooks || (t.viewHooks = [])).push(-n, e.afterViewInit),
            e.afterViewChecked &&
              ((t.viewHooks || (t.viewHooks = [])).push(n, e.afterViewChecked),
              (t.viewCheckHooks || (t.viewCheckHooks = [])).push(n, e.afterViewChecked)),
            null != e.onDestroy && (t.destroyHooks || (t.destroyHooks = [])).push(n, e.onDestroy);
        }
      }
      function De(t, e, n) {
        Me(t, e, 3, n);
      }
      function je(t, e, n, r) {
        (3 & t[2]) === n && Me(t, e, n, r);
      }
      function Ne(t, e) {
        let n = t[2];
        (3 & n) === e && ((n &= 2047), (n += 1), (t[2] = n));
      }
      function Me(t, e, n, r) {
        const s = null != r ? r : -1;
        let i = 0;
        for (let o = void 0 !== r ? 65535 & t[18] : 0; o < e.length; o++)
          if ('number' == typeof e[o + 1]) {
            if (((i = e[o]), null != r && i >= r)) break;
          } else
            e[o] < 0 && (t[18] += 65536),
              (i < s || -1 == s) && (Le(t, n, e, o), (t[18] = (4294901760 & t[18]) + o + 2)),
              o++;
      }
      function Le(t, e, n, r) {
        const s = n[r] < 0,
          i = n[r + 1],
          o = t[s ? -n[r] : n[r]];
        s ? t[2] >> 11 < t[18] >> 16 && (3 & t[2]) === e && ((t[2] += 2048), i.call(o)) : i.call(o);
      }
      class Fe {
        constructor(t, e, n) {
          (this.factory = t), (this.resolving = !1), (this.canSeeViewProviders = e), (this.injectImpl = n);
        }
      }
      function Ve(t, e, n) {
        const r = zt(t);
        let s = 0;
        for (; s < n.length; ) {
          const i = n[s];
          if ('number' == typeof i) {
            if (0 !== i) break;
            s++;
            const o = n[s++],
              a = n[s++],
              l = n[s++];
            r ? t.setAttribute(e, a, l, o) : e.setAttributeNS(o, a, l);
          } else {
            const o = i,
              a = n[++s];
            Ue(o) ? r && t.setProperty(e, o, a) : r ? t.setAttribute(e, o, a) : e.setAttribute(o, a), s++;
          }
        }
        return s;
      }
      function He(t) {
        return 3 === t || 4 === t || 6 === t;
      }
      function Ue(t) {
        return 64 === t.charCodeAt(0);
      }
      function ze(t, e) {
        if (null === e || 0 === e.length);
        else if (null === t || 0 === t.length) t = e.slice();
        else {
          let n = -1;
          for (let r = 0; r < e.length; r++) {
            const s = e[r];
            'number' == typeof s ? (n = s) : 0 === n || $e(t, n, s, null, -1 === n || 2 === n ? e[++r] : null);
          }
        }
        return t;
      }
      function $e(t, e, n, r, s) {
        let i = 0,
          o = t.length;
        if (-1 === e) o = -1;
        else
          for (; i < t.length; ) {
            const n = t[i++];
            if ('number' == typeof n) {
              if (n === e) {
                o = -1;
                break;
              }
              if (n > e) {
                o = i - 1;
                break;
              }
            }
          }
        for (; i < t.length; ) {
          const e = t[i];
          if ('number' == typeof e) break;
          if (e === n) {
            if (null === r) return void (null !== s && (t[i + 1] = s));
            if (r === t[i + 1]) return void (t[i + 2] = s);
          }
          i++, null !== r && i++, null !== s && i++;
        }
        -1 !== o && (t.splice(o, 0, e), (i = o + 1)),
          t.splice(i++, 0, n),
          null !== r && t.splice(i++, 0, r),
          null !== s && t.splice(i++, 0, s);
      }
      function Be(t) {
        return -1 !== t;
      }
      function qe(t) {
        return 32767 & t;
      }
      function Ze(t) {
        return t >> 16;
      }
      function Qe(t, e) {
        let n = Ze(t),
          r = e;
        for (; n > 0; ) (r = r[15]), n--;
        return r;
      }
      function Ge(t) {
        return 'string' == typeof t ? t : null == t ? '' : '' + t;
      }
      function We(t) {
        return 'function' == typeof t
          ? t.name || t.toString()
          : 'object' == typeof t && null != t && 'function' == typeof t.type
          ? t.type.name || t.type.toString()
          : Ge(t);
      }
      const Ke = (() =>
        (('undefined' != typeof requestAnimationFrame && requestAnimationFrame) || setTimeout).bind(L))();
      function Je(t) {
        return t instanceof Function ? t() : t;
      }
      let Ye = !0;
      function Xe(t) {
        const e = Ye;
        return (Ye = t), e;
      }
      let tn = 0;
      function en(t, e) {
        const n = rn(t, e);
        if (-1 !== n) return n;
        const r = e[1];
        r.firstCreatePass && ((t.injectorIndex = e.length), nn(r.data, t), nn(e, null), nn(r.blueprint, null));
        const s = sn(t, e),
          i = t.injectorIndex;
        if (Be(s)) {
          const t = qe(s),
            n = Qe(s, e),
            r = n[1].data;
          for (let s = 0; s < 8; s++) e[i + s] = n[t + s] | r[t + s];
        }
        return (e[i + 8] = s), i;
      }
      function nn(t, e) {
        t.push(0, 0, 0, 0, 0, 0, 0, 0, e);
      }
      function rn(t, e) {
        return -1 === t.injectorIndex ||
          (t.parent && t.parent.injectorIndex === t.injectorIndex) ||
          null == e[t.injectorIndex + 8]
          ? -1
          : t.injectorIndex;
      }
      function sn(t, e) {
        if (t.parent && -1 !== t.parent.injectorIndex) return t.parent.injectorIndex;
        let n = e[6],
          r = 1;
        for (; n && -1 === n.injectorIndex; ) (n = (e = e[15]) ? e[6] : null), r++;
        return n ? n.injectorIndex | (r << 16) : -1;
      }
      function on(t, e, n) {
        !(function(t, e, n) {
          let r = 'string' != typeof n ? n[B] : n.charCodeAt(0) || 0;
          null == r && (r = n[B] = tn++);
          const s = 255 & r,
            i = 1 << s,
            o = 64 & s,
            a = 32 & s,
            l = e.data;
          128 & s
            ? o
              ? a
                ? (l[t + 7] |= i)
                : (l[t + 6] |= i)
              : a
              ? (l[t + 5] |= i)
              : (l[t + 4] |= i)
            : o
            ? a
              ? (l[t + 3] |= i)
              : (l[t + 2] |= i)
            : a
            ? (l[t + 1] |= i)
            : (l[t] |= i);
        })(t, e, n);
      }
      function an(t, e, n, r = f.Default, s) {
        if (null !== t) {
          const s = (function(t) {
            if ('string' == typeof t) return t.charCodeAt(0) || 0;
            const e = t[B];
            return 'number' == typeof e && e > 0 ? 255 & e : e;
          })(n);
          if ('function' == typeof s) {
            Ce(e, t);
            try {
              const t = s();
              if (null != t || r & f.Optional) return t;
              throw new Error(`No provider for ${We(n)}!`);
            } finally {
              Te();
            }
          } else if ('number' == typeof s) {
            if (-1 === s) return new fn(t, e);
            let i = null,
              o = rn(t, e),
              a = -1,
              l = r & f.Host ? e[16][6] : null;
            for (
              (-1 === o || r & f.SkipSelf) &&
              ((a = -1 === o ? sn(t, e) : e[o + 8]), pn(r, !1) ? ((i = e[1]), (o = qe(a)), (e = Qe(a, e))) : (o = -1));
              -1 !== o;

            ) {
              a = e[o + 8];
              const t = e[1];
              if (dn(s, o, t.data)) {
                const t = cn(o, e, n, i, r, l);
                if (t !== ln) return t;
              }
              pn(r, e[1].data[o + 8] === l) && dn(s, o, e) ? ((i = t), (o = qe(a)), (e = Qe(a, e))) : (o = -1);
            }
          }
        }
        if ((r & f.Optional && void 0 === s && (s = null), 0 == (r & (f.Self | f.Host)))) {
          const t = e[9],
            i = X(void 0);
          try {
            return t ? t.get(n, s, r & f.Optional) : nt(n, s, r & f.Optional);
          } finally {
            X(i);
          }
        }
        if (r & f.Optional) return s;
        throw new Error(`NodeInjector: NOT_FOUND [${We(n)}]`);
      }
      const ln = {};
      function cn(t, e, n, r, s, i) {
        const o = e[1],
          a = o.data[t + 8],
          l = un(a, o, n, null == r ? Nt(a) && Ye : r != o && 3 === a.type, s & f.Host && i === a);
        return null !== l ? hn(e, o, l, a) : ln;
      }
      function un(t, e, n, r, s) {
        const i = t.providerIndexes,
          o = e.data,
          a = 65535 & i,
          l = t.directiveStart,
          c = i >> 16,
          u = s ? a + c : t.directiveEnd;
        for (let h = r ? a : a + c; h < u; h++) {
          const t = o[h];
          if ((h < l && n === t) || (h >= l && t.type === n)) return h;
        }
        if (s) {
          const t = o[l];
          if (t && Lt(t) && t.type === n) return l;
        }
        return null;
      }
      function hn(t, e, n, r) {
        let s = t[n];
        const i = e.data;
        if (s instanceof Fe) {
          const o = s;
          if (o.resolving) throw new Error('Circular dep for ' + We(i[n]));
          const a = Xe(o.canSeeViewProviders);
          let l;
          (o.resolving = !0), o.injectImpl && (l = X(o.injectImpl)), Ce(t, r);
          try {
            (s = t[n] = o.factory(void 0, i, t, r)),
              e.firstCreatePass &&
                n >= r.directiveStart &&
                (function(t, e, n) {
                  const { onChanges: r, onInit: s, doCheck: i } = e;
                  r &&
                    ((n.preOrderHooks || (n.preOrderHooks = [])).push(t, r),
                    (n.preOrderCheckHooks || (n.preOrderCheckHooks = [])).push(t, r)),
                    s && (n.preOrderHooks || (n.preOrderHooks = [])).push(-t, s),
                    i &&
                      ((n.preOrderHooks || (n.preOrderHooks = [])).push(t, i),
                      (n.preOrderCheckHooks || (n.preOrderCheckHooks = [])).push(t, i));
                })(n, i[n], e);
          } finally {
            o.injectImpl && X(l), Xe(a), (o.resolving = !1), Te();
          }
        }
        return s;
      }
      function dn(t, e, n) {
        const r = 64 & t,
          s = 32 & t;
        let i;
        return (
          (i =
            128 & t
              ? r
                ? s
                  ? n[e + 7]
                  : n[e + 6]
                : s
                ? n[e + 5]
                : n[e + 4]
              : r
              ? s
                ? n[e + 3]
                : n[e + 2]
              : s
              ? n[e + 1]
              : n[e]),
          !!(i & (1 << t))
        );
      }
      function pn(t, e) {
        return !(t & f.Self || (t & f.Host && e));
      }
      class fn {
        constructor(t, e) {
          (this._tNode = t), (this._lView = e);
        }
        get(t, e) {
          return an(this._tNode, this._lView, t, void 0, e);
        }
      }
      function gn(t) {
        return l(() => {
          const e = Object.getPrototypeOf(t.prototype).constructor,
            n =
              e[$] ||
              (function t(e) {
                const n = e;
                if (R(e))
                  return () => {
                    const e = t(P(n));
                    return e ? e() : null;
                  };
                let r = It(n);
                if (null === r) {
                  const t = w(n);
                  r = t && t.factory;
                }
                return r || null;
              })(e);
          return null !== n ? n : t => new t();
        });
      }
      function mn(t) {
        return t.ngDebugContext;
      }
      function yn(t) {
        return t.ngOriginalError;
      }
      function bn(t, ...e) {
        t.error(...e);
      }
      class _n {
        constructor() {
          this._console = console;
        }
        handleError(t) {
          const e = this._findOriginalError(t),
            n = this._findContext(t),
            r = (function(t) {
              return t.ngErrorLogger || bn;
            })(t);
          r(this._console, 'ERROR', t),
            e && r(this._console, 'ORIGINAL ERROR', e),
            n && r(this._console, 'ERROR CONTEXT', n);
        }
        _findContext(t) {
          return t ? (mn(t) ? mn(t) : this._findContext(yn(t))) : null;
        }
        _findOriginalError(t) {
          let e = yn(t);
          for (; e && yn(e); ) e = yn(e);
          return e;
        }
      }
      class vn {
        constructor(t) {
          this.changingThisBreaksApplicationSecurity = t;
        }
        toString() {
          return (
            'SafeValue must use [property]=binding: ' +
            this.changingThisBreaksApplicationSecurity +
            ' (see http://g.co/ng/security#xss)'
          );
        }
      }
      class wn extends vn {
        getTypeName() {
          return 'HTML';
        }
      }
      class Cn extends vn {
        getTypeName() {
          return 'Style';
        }
      }
      class Sn extends vn {
        getTypeName() {
          return 'Script';
        }
      }
      class En extends vn {
        getTypeName() {
          return 'URL';
        }
      }
      class xn extends vn {
        getTypeName() {
          return 'ResourceURL';
        }
      }
      function On(t) {
        return t instanceof vn ? t.changingThisBreaksApplicationSecurity : t;
      }
      function Tn(t, e) {
        const n = kn(t);
        if (null != n && n !== e) {
          if ('ResourceURL' === n && 'URL' === e) return !0;
          throw new Error(`Required a safe ${e}, got a ${n} (see http://g.co/ng/security#xss)`);
        }
        return n === e;
      }
      function kn(t) {
        return (t instanceof vn && t.getTypeName()) || null;
      }
      function An(t) {
        return new wn(t);
      }
      function In(t) {
        return new Cn(t);
      }
      function Pn(t) {
        return new Sn(t);
      }
      function Rn(t) {
        return new En(t);
      }
      function Dn(t) {
        return new xn(t);
      }
      let jn = !0,
        Nn = !1;
      function Mn() {
        return (Nn = !0), jn;
      }
      function Ln() {
        if (Nn) throw new Error('Cannot enable prod mode after platform setup.');
        jn = !1;
      }
      class Fn {
        constructor(t) {
          (this.defaultDoc = t),
            (this.inertDocument = this.defaultDoc.implementation.createHTMLDocument('sanitization-inert'));
          let e = this.inertDocument.body;
          if (null == e) {
            const t = this.inertDocument.createElement('html');
            this.inertDocument.appendChild(t), (e = this.inertDocument.createElement('body')), t.appendChild(e);
          }
          (e.innerHTML = '<svg><g onload="this.parentNode.remove()"></g></svg>'),
            !e.querySelector || e.querySelector('svg')
              ? ((e.innerHTML = '<svg><p><style><img src="</style><img src=x onerror=alert(1)//">'),
                (this.getInertBodyElement =
                  e.querySelector &&
                  e.querySelector('svg img') &&
                  (function() {
                    try {
                      return !!window.DOMParser;
                    } catch (t) {
                      return !1;
                    }
                  })()
                    ? this.getInertBodyElement_DOMParser
                    : this.getInertBodyElement_InertDocument))
              : (this.getInertBodyElement = this.getInertBodyElement_XHR);
        }
        getInertBodyElement_XHR(t) {
          t = '<body><remove></remove>' + t + '</body>';
          try {
            t = encodeURI(t);
          } catch (r) {
            return null;
          }
          const e = new XMLHttpRequest();
          (e.responseType = 'document'), e.open('GET', 'data:text/html;charset=utf-8,' + t, !1), e.send(void 0);
          const n = e.response.body;
          return n.removeChild(n.firstChild), n;
        }
        getInertBodyElement_DOMParser(t) {
          t = '<body><remove></remove>' + t + '</body>';
          try {
            const e = new window.DOMParser().parseFromString(t, 'text/html').body;
            return e.removeChild(e.firstChild), e;
          } catch (e) {
            return null;
          }
        }
        getInertBodyElement_InertDocument(t) {
          const e = this.inertDocument.createElement('template');
          if ('content' in e) return (e.innerHTML = t), e;
          const n = this.inertDocument.createElement('body');
          return (n.innerHTML = t), this.defaultDoc.documentMode && this.stripCustomNsAttrs(n), n;
        }
        stripCustomNsAttrs(t) {
          const e = t.attributes;
          for (let r = e.length - 1; 0 < r; r--) {
            const n = e.item(r).name;
            ('xmlns:ns1' !== n && 0 !== n.indexOf('ns1:')) || t.removeAttribute(n);
          }
          let n = t.firstChild;
          for (; n; ) n.nodeType === Node.ELEMENT_NODE && this.stripCustomNsAttrs(n), (n = n.nextSibling);
        }
      }
      const Vn = /^(?:(?:https?|mailto|ftp|tel|file):|[^&:/?#]*(?:[/?#]|$))/gi,
        Hn = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[a-z0-9+\/]+=*$/i;
      function Un(t) {
        return (t = String(t)).match(Vn) || t.match(Hn)
          ? t
          : (Mn() && console.warn(`WARNING: sanitizing unsafe URL value ${t} (see http://g.co/ng/security#xss)`),
            'unsafe:' + t);
      }
      function zn(t) {
        return (t = String(t))
          .split(',')
          .map(t => Un(t.trim()))
          .join(', ');
      }
      function $n(t) {
        const e = {};
        for (const n of t.split(',')) e[n] = !0;
        return e;
      }
      function Bn(...t) {
        const e = {};
        for (const n of t) for (const t in n) n.hasOwnProperty(t) && (e[t] = !0);
        return e;
      }
      const qn = $n('area,br,col,hr,img,wbr'),
        Zn = $n('colgroup,dd,dt,li,p,tbody,td,tfoot,th,thead,tr'),
        Qn = $n('rp,rt'),
        Gn = Bn(Qn, Zn),
        Wn = Bn(
          qn,
          Bn(
            Zn,
            $n(
              'address,article,aside,blockquote,caption,center,del,details,dialog,dir,div,dl,figure,figcaption,footer,h1,h2,h3,h4,h5,h6,header,hgroup,hr,ins,main,map,menu,nav,ol,pre,section,summary,table,ul'
            )
          ),
          Bn(
            Qn,
            $n(
              'a,abbr,acronym,audio,b,bdi,bdo,big,br,cite,code,del,dfn,em,font,i,img,ins,kbd,label,map,mark,picture,q,ruby,rp,rt,s,samp,small,source,span,strike,strong,sub,sup,time,track,tt,u,var,video'
            )
          ),
          Gn
        ),
        Kn = $n('background,cite,href,itemtype,longdesc,poster,src,xlink:href'),
        Jn = $n('srcset'),
        Yn = Bn(
          Kn,
          Jn,
          $n(
            'abbr,accesskey,align,alt,autoplay,axis,bgcolor,border,cellpadding,cellspacing,class,clear,color,cols,colspan,compact,controls,coords,datetime,default,dir,download,face,headers,height,hidden,hreflang,hspace,ismap,itemscope,itemprop,kind,label,lang,language,loop,media,muted,nohref,nowrap,open,preload,rel,rev,role,rows,rowspan,rules,scope,scrolling,shape,size,sizes,span,srclang,start,summary,tabindex,target,title,translate,type,usemap,valign,value,vspace,width'
          ),
          $n(
            'aria-activedescendant,aria-atomic,aria-autocomplete,aria-busy,aria-checked,aria-colcount,aria-colindex,aria-colspan,aria-controls,aria-current,aria-describedby,aria-details,aria-disabled,aria-dropeffect,aria-errormessage,aria-expanded,aria-flowto,aria-grabbed,aria-haspopup,aria-hidden,aria-invalid,aria-keyshortcuts,aria-label,aria-labelledby,aria-level,aria-live,aria-modal,aria-multiline,aria-multiselectable,aria-orientation,aria-owns,aria-placeholder,aria-posinset,aria-pressed,aria-readonly,aria-relevant,aria-required,aria-roledescription,aria-rowcount,aria-rowindex,aria-rowspan,aria-selected,aria-setsize,aria-sort,aria-valuemax,aria-valuemin,aria-valuenow,aria-valuetext'
          )
        ),
        Xn = $n('script,style,template');
      class tr {
        constructor() {
          (this.sanitizedSomething = !1), (this.buf = []);
        }
        sanitizeChildren(t) {
          let e = t.firstChild,
            n = !0;
          for (; e; )
            if (
              (e.nodeType === Node.ELEMENT_NODE
                ? (n = this.startElement(e))
                : e.nodeType === Node.TEXT_NODE
                ? this.chars(e.nodeValue)
                : (this.sanitizedSomething = !0),
              n && e.firstChild)
            )
              e = e.firstChild;
            else
              for (; e; ) {
                e.nodeType === Node.ELEMENT_NODE && this.endElement(e);
                let t = this.checkClobberedElement(e, e.nextSibling);
                if (t) {
                  e = t;
                  break;
                }
                e = this.checkClobberedElement(e, e.parentNode);
              }
          return this.buf.join('');
        }
        startElement(t) {
          const e = t.nodeName.toLowerCase();
          if (!Wn.hasOwnProperty(e)) return (this.sanitizedSomething = !0), !Xn.hasOwnProperty(e);
          this.buf.push('<'), this.buf.push(e);
          const n = t.attributes;
          for (let r = 0; r < n.length; r++) {
            const t = n.item(r),
              e = t.name,
              s = e.toLowerCase();
            if (!Yn.hasOwnProperty(s)) {
              this.sanitizedSomething = !0;
              continue;
            }
            let i = t.value;
            Kn[s] && (i = Un(i)), Jn[s] && (i = zn(i)), this.buf.push(' ', e, '="', rr(i), '"');
          }
          return this.buf.push('>'), !0;
        }
        endElement(t) {
          const e = t.nodeName.toLowerCase();
          Wn.hasOwnProperty(e) && !qn.hasOwnProperty(e) && (this.buf.push('</'), this.buf.push(e), this.buf.push('>'));
        }
        chars(t) {
          this.buf.push(rr(t));
        }
        checkClobberedElement(t, e) {
          if (
            e &&
            (t.compareDocumentPosition(e) & Node.DOCUMENT_POSITION_CONTAINED_BY) === Node.DOCUMENT_POSITION_CONTAINED_BY
          )
            throw new Error('Failed to sanitize html because the element is clobbered: ' + t.outerHTML);
          return e;
        }
      }
      const er = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g,
        nr = /([^\#-~ |!])/g;
      function rr(t) {
        return t
          .replace(/&/g, '&amp;')
          .replace(er, function(t) {
            return '&#' + (1024 * (t.charCodeAt(0) - 55296) + (t.charCodeAt(1) - 56320) + 65536) + ';';
          })
          .replace(nr, function(t) {
            return '&#' + t.charCodeAt(0) + ';';
          })
          .replace(/</g, '&lt;')
          .replace(/>/g, '&gt;');
      }
      let sr;
      function ir(t, e) {
        let n = null;
        try {
          sr = sr || new Fn(t);
          let r = e ? String(e) : '';
          n = sr.getInertBodyElement(r);
          let s = 5,
            i = r;
          do {
            if (0 === s) throw new Error('Failed to sanitize html because the input is unstable');
            s--, (r = i), (i = n.innerHTML), (n = sr.getInertBodyElement(r));
          } while (r !== i);
          const o = new tr(),
            a = o.sanitizeChildren(or(n) || n);
          return (
            Mn() &&
              o.sanitizedSomething &&
              console.warn('WARNING: sanitizing HTML stripped some content, see http://g.co/ng/security#xss'),
            a
          );
        } finally {
          if (n) {
            const t = or(n) || n;
            for (; t.firstChild; ) t.removeChild(t.firstChild);
          }
        }
      }
      function or(t) {
        return 'content' in t &&
          (function(t) {
            return t.nodeType === Node.ELEMENT_NODE && 'TEMPLATE' === t.nodeName;
          })(t)
          ? t.content
          : null;
      }
      const ar = (function() {
          var t = { NONE: 0, HTML: 1, STYLE: 2, SCRIPT: 3, URL: 4, RESOURCE_URL: 5 };
          return (
            (t[t.NONE] = 'NONE'),
            (t[t.HTML] = 'HTML'),
            (t[t.STYLE] = 'STYLE'),
            (t[t.SCRIPT] = 'SCRIPT'),
            (t[t.URL] = 'URL'),
            (t[t.RESOURCE_URL] = 'RESOURCE_URL'),
            t
          );
        })(),
        lr = new RegExp(
          '^([-,."\'%_!# a-zA-Z0-9]+|(?:(?:matrix|translate|scale|rotate|skew|perspective)(?:X|Y|Z|3d)?|(?:rgb|hsl)a?|(?:repeating-)?(?:linear|radial)-gradient|(?:attr|calc|var))\\([-0-9.%, #a-zA-Z]+\\))$',
          'g'
        ),
        cr = /^url\(([^)]+)\)$/;
      function ur(t) {
        if (!(t = String(t).trim())) return '';
        const e = t.match(cr);
        return (e && Un(e[1]) === e[1]) ||
          (t.match(lr) &&
            (function(t) {
              let e = !0,
                n = !0;
              for (let r = 0; r < t.length; r++) {
                const s = t.charAt(r);
                "'" === s && n ? (e = !e) : '"' === s && e && (n = !n);
              }
              return e && n;
            })(t))
          ? t
          : (Mn() && console.warn(`WARNING: sanitizing unsafe style value ${t} (see http://g.co/ng/security#xss).`),
            'unsafe');
      }
      function hr(t) {
        const e = pr();
        return e ? e.sanitize(ar.HTML, t) || '' : Tn(t, 'HTML') ? On(t) : ir(Ut(), Ge(t));
      }
      function dr(t) {
        const e = pr();
        return e ? e.sanitize(ar.URL, t) || '' : Tn(t, 'URL') ? On(t) : Un(Ge(t));
      }
      function pr() {
        const t = se();
        return t && t[12];
      }
      function fr(t, e) {
        t.__ngContext__ = e;
      }
      function gr(t) {
        throw new Error('Multiple components match node with tagname ' + t.tagName);
      }
      function mr() {
        throw new Error('Cannot mix multi providers and regular providers');
      }
      function yr(t, e, n) {
        let r = t.length;
        for (;;) {
          const s = t.indexOf(e, n);
          if (-1 === s) return s;
          if (0 === s || t.charCodeAt(s - 1) <= 32) {
            const n = e.length;
            if (s + n === r || t.charCodeAt(s + n) <= 32) return s;
          }
          n = s + 1;
        }
      }
      function br(t, e, n) {
        let r = 0;
        for (; r < t.length; ) {
          let s = t[r++];
          if (n && 'class' === s) {
            if (((s = t[r]), -1 !== yr(s.toLowerCase(), e, 0))) return !0;
          } else if (1 === s) {
            for (; r < t.length && 'string' == typeof (s = t[r++]); ) if (s.toLowerCase() === e) return !0;
            return !1;
          }
        }
        return !1;
      }
      function _r(t) {
        return 0 === t.type && 'ng-template' !== t.tagName;
      }
      function vr(t, e, n) {
        return e === (0 !== t.type || n ? t.tagName : 'ng-template');
      }
      function wr(t, e, n) {
        let r = 4;
        const s = t.attrs || [],
          i = (function(t) {
            for (let e = 0; e < t.length; e++) if (He(t[e])) return e;
            return t.length;
          })(s);
        let o = !1;
        for (let a = 0; a < e.length; a++) {
          const l = e[a];
          if ('number' != typeof l) {
            if (!o)
              if (4 & r) {
                if (((r = 2 | (1 & r)), ('' !== l && !vr(t, l, n)) || ('' === l && 1 === e.length))) {
                  if (Cr(r)) return !1;
                  o = !0;
                }
              } else {
                const c = 8 & r ? l : e[++a];
                if (8 & r && null !== t.attrs) {
                  if (!br(t.attrs, c, n)) {
                    if (Cr(r)) return !1;
                    o = !0;
                  }
                  continue;
                }
                const u = Sr(8 & r ? 'class' : l, s, _r(t), n);
                if (-1 === u) {
                  if (Cr(r)) return !1;
                  o = !0;
                  continue;
                }
                if ('' !== c) {
                  let t;
                  t = u > i ? '' : s[u + 1].toLowerCase();
                  const e = 8 & r ? t : null;
                  if ((e && -1 !== yr(e, c, 0)) || (2 & r && c !== t)) {
                    if (Cr(r)) return !1;
                    o = !0;
                  }
                }
              }
          } else {
            if (!o && !Cr(r) && !Cr(l)) return !1;
            if (o && Cr(l)) continue;
            (o = !1), (r = l | (1 & r));
          }
        }
        return Cr(r) || o;
      }
      function Cr(t) {
        return 0 == (1 & t);
      }
      function Sr(t, e, n, r) {
        if (null === e) return -1;
        let s = 0;
        if (r || !n) {
          let n = !1;
          for (; s < e.length; ) {
            const r = e[s];
            if (r === t) return s;
            if (3 === r || 6 === r) n = !0;
            else {
              if (1 === r || 2 === r) {
                let t = e[++s];
                for (; 'string' == typeof t; ) t = e[++s];
                continue;
              }
              if (4 === r) break;
              if (0 === r) {
                s += 4;
                continue;
              }
            }
            s += n ? 1 : 2;
          }
          return -1;
        }
        return (function(t, e) {
          let n = t.indexOf(4);
          if (n > -1)
            for (n++; n < t.length; ) {
              const r = t[n];
              if ('number' == typeof r) return -1;
              if (r === e) return n;
              n++;
            }
          return -1;
        })(e, t);
      }
      function Er(t, e, n = !1) {
        for (let r = 0; r < e.length; r++) if (wr(t, e[r], n)) return !0;
        return !1;
      }
      function xr(t, e) {
        t: for (let n = 0; n < e.length; n++) {
          const r = e[n];
          if (t.length === r.length) {
            for (let e = 0; e < t.length; e++) if (t[e] !== r[e]) continue t;
            return !0;
          }
        }
        return !1;
      }
      function Or(t, e) {
        return t ? ':not(' + e.trim() + ')' : e;
      }
      function Tr(t) {
        let e = t[0],
          n = 1,
          r = 2,
          s = '',
          i = !1;
        for (; n < t.length; ) {
          let o = t[n];
          if ('string' == typeof o)
            if (2 & r) {
              const e = t[++n];
              s += '[' + o + (e.length > 0 ? '="' + e + '"' : '') + ']';
            } else 8 & r ? (s += '.' + o) : 4 & r && (s += ' ' + o);
          else '' === s || Cr(o) || ((e += Or(i, s)), (s = '')), (r = o), (i = i || !Cr(r));
          n++;
        }
        return '' !== s && (e += Or(i, s)), e;
      }
      const kr = {};
      function Ar(t) {
        const e = t[3];
        return Dt(e) ? e[3] : e;
      }
      function Ir(t) {
        return Rr(t[13]);
      }
      function Pr(t) {
        return Rr(t[4]);
      }
      function Rr(t) {
        for (; null !== t && !Dt(t); ) t = t[4];
        return t;
      }
      function Dr(t) {
        jr(ie(), se(), Ae() + t, he());
      }
      function jr(t, e, n, r) {
        if (!r)
          if (3 == (3 & e[2])) {
            const r = t.preOrderCheckHooks;
            null !== r && De(e, r, n);
          } else {
            const r = t.preOrderHooks;
            null !== r && je(e, r, 0, n);
          }
        Ie(n);
      }
      const Nr = { marker: 'element' },
        Mr = { marker: 'comment' };
      function Lr(t, e) {
        return (t << 17) | (e << 2);
      }
      function Fr(t) {
        return (t >> 17) & 32767;
      }
      function Vr(t) {
        return 2 | t;
      }
      function Hr(t) {
        return (131068 & t) >> 2;
      }
      function Ur(t, e) {
        return (-131069 & t) | (e << 2);
      }
      function zr(t) {
        return 1 | t;
      }
      function $r(t, e) {
        const n = t.contentQueries;
        if (null !== n)
          for (let r = 0; r < n.length; r += 2) {
            const s = n[r],
              i = n[r + 1];
            if (-1 !== i) {
              const n = t.data[i];
              we(s), n.contentQueries(2, e[i], i);
            }
          }
      }
      function Br(t, e, n) {
        return zt(e) ? e.createElement(t, n) : null === n ? e.createElement(t) : e.createElementNS(n, t);
      }
      function qr(t, e, n, r, s, i, o, a, l, c) {
        const u = e.blueprint.slice();
        return (
          (u[0] = s),
          (u[2] = 140 | r),
          te(u),
          (u[3] = u[15] = t),
          (u[8] = n),
          (u[10] = o || (t && t[10])),
          (u[11] = a || (t && t[11])),
          (u[12] = l || (t && t[12]) || null),
          (u[9] = c || (t && t[9]) || null),
          (u[6] = i),
          (u[16] = 2 == e.type ? t[16] : u),
          u
        );
      }
      function Zr(t, e, n, r, s, i) {
        const o = n + 20,
          a =
            t.data[o] ||
            (function(t, e, n, r, s, i) {
              const o = ae(),
                a = ce(),
                l = a ? o : o && o.parent,
                c = (t.data[n] = ns(0, l && l !== e ? l : null, r, n, s, i));
              return (
                null === t.firstChild && (t.firstChild = c),
                o && (!a || null != o.child || (null === c.parent && 2 !== o.type) ? a || (o.next = c) : (o.child = c)),
                c
              );
            })(t, e, o, r, s, i);
        return le(a, !0), a;
      }
      function Qr(t, e, n) {
        Se(e, e[6]);
        try {
          const r = t.viewQuery;
          null !== r && xs(1, r, n);
          const s = t.template;
          null !== s && Kr(t, e, s, 1, n),
            t.firstCreatePass && (t.firstCreatePass = !1),
            t.staticContentQueries && $r(t, e),
            t.staticViewQueries && xs(2, t.viewQuery, n);
          const i = t.components;
          null !== i &&
            (function(t, e) {
              for (let n = 0; n < e.length; n++) vs(t, e[n]);
            })(e, i);
        } catch (r) {
          throw (t.firstCreatePass && (t.incompleteFirstPass = !0), r);
        } finally {
          (e[2] &= -5), ke();
        }
      }
      function Gr(t, e, n, r) {
        const s = e[2];
        if (256 == (256 & s)) return;
        Se(e, e[6]);
        const i = he();
        try {
          te(e), (ne.lFrame.bindingIndex = t.bindingStartIndex), null !== n && Kr(t, e, n, 2, r);
          const o = 3 == (3 & s);
          if (!i)
            if (o) {
              const n = t.preOrderCheckHooks;
              null !== n && De(e, n, null);
            } else {
              const n = t.preOrderHooks;
              null !== n && je(e, n, 0, null), Ne(e, 0);
            }
          if (
            ((function(t) {
              for (let e = Ir(t); null !== e; e = Pr(e)) {
                if (!e[2]) continue;
                const t = e[9];
                for (let e = 0; e < t.length; e++) {
                  const n = t[e],
                    r = n[3];
                  0 == (1024 & n[2]) && ee(r, 1), (n[2] |= 1024);
                }
              }
            })(e),
            (function(t) {
              for (let e = Ir(t); null !== e; e = Pr(e))
                for (let t = 10; t < e.length; t++) {
                  const n = e[t],
                    r = n[1];
                  Yt(n) && Gr(r, n, r.template, n[8]);
                }
            })(e),
            null !== t.contentQueries && $r(t, e),
            !i)
          )
            if (o) {
              const n = t.contentCheckHooks;
              null !== n && De(e, n);
            } else {
              const n = t.contentHooks;
              null !== n && je(e, n, 1), Ne(e, 1);
            }
          !(function(t, e) {
            try {
              const n = t.expandoInstructions;
              if (null !== n) {
                let r = t.expandoStartIndex,
                  s = -1,
                  i = -1;
                for (let t = 0; t < n.length; t++) {
                  const o = n[t];
                  'number' == typeof o
                    ? o <= 0
                      ? ((i = 0 - o), Ie(i), (r += 9 + n[++t]), (s = r))
                      : (r += o)
                    : (null !== o && (ye(r, s), o(2, e[s])), s++);
                }
              }
            } finally {
              Ie(-1);
            }
          })(t, e);
          const a = t.components;
          null !== a &&
            (function(t, e) {
              for (let n = 0; n < e.length; n++) _s(t, e[n]);
            })(e, a);
          const l = t.viewQuery;
          if ((null !== l && xs(2, l, r), !i))
            if (o) {
              const n = t.viewCheckHooks;
              null !== n && De(e, n);
            } else {
              const n = t.viewHooks;
              null !== n && je(e, n, 2), Ne(e, 2);
            }
          !0 === t.firstUpdatePass && (t.firstUpdatePass = !1),
            i || (e[2] &= -73),
            1024 & e[2] && ((e[2] &= -1025), ee(e[3], -1));
        } finally {
          ke();
        }
      }
      function Wr(t, e, n, r) {
        const s = e[10],
          i = !he(),
          o = Jt(e);
        try {
          i && !o && s.begin && s.begin(), o && Qr(t, e, r), Gr(t, e, n, r);
        } finally {
          i && !o && s.end && s.end();
        }
      }
      function Kr(t, e, n, r, s) {
        const i = Ae();
        try {
          Ie(-1), 2 & r && e.length > 20 && jr(t, e, 0, he()), n(r, s);
        } finally {
          Ie(i);
        }
      }
      function Jr(t, e, n) {
        if (jt(e)) {
          const r = e.directiveEnd;
          for (let s = e.directiveStart; s < r; s++) {
            const e = t.data[s];
            e.contentQueries && e.contentQueries(1, n[s], s);
          }
        }
      }
      function Yr(t, e, n) {
        re() &&
          ((function(t, e, n, r) {
            const s = n.directiveStart,
              i = n.directiveEnd;
            t.firstCreatePass || en(n, e), fr(r, e);
            const o = n.initialInputs;
            for (let a = s; a < i; a++) {
              const r = t.data[a],
                i = Lt(r);
              i && fs(e, n, r);
              const l = hn(e, t, a, n);
              fr(l, e), null !== o && ms(0, a - s, l, r, 0, o), i && (Wt(n.index, e)[8] = l);
            }
          })(t, e, n, Zt(n, e)),
          128 == (128 & n.flags) &&
            (function(t, e, n) {
              const r = n.directiveStart,
                s = n.directiveEnd,
                i = t.expandoInstructions,
                o = t.firstCreatePass,
                a = n.index - 20,
                l = ne.lFrame.currentDirectiveIndex;
              try {
                Ie(a);
                for (let n = r; n < s; n++) {
                  const r = t.data[n],
                    s = e[n];
                  be(n),
                    null !== r.hostBindings || 0 !== r.hostVars || null !== r.hostAttrs ? ls(r, s) : o && i.push(null);
                }
              } finally {
                Ie(-1), be(l);
              }
            })(t, e, n));
      }
      function Xr(t, e, n = Zt) {
        const r = e.localNames;
        if (null !== r) {
          let s = e.index + 1;
          for (let i = 0; i < r.length; i += 2) {
            const o = r[i + 1],
              a = -1 === o ? n(e, t) : t[o];
            t[s++] = a;
          }
        }
      }
      function ts(t) {
        const e = t.tView;
        return null === e || e.incompleteFirstPass
          ? (t.tView = es(
              1,
              -1,
              t.template,
              t.decls,
              t.vars,
              t.directiveDefs,
              t.pipeDefs,
              t.viewQuery,
              t.schemas,
              t.consts
            ))
          : e;
      }
      function es(t, e, n, r, s, i, o, a, l, c) {
        const u = 20 + r,
          h = u + s,
          d = (function(t, e) {
            const n = [];
            for (let r = 0; r < e; r++) n.push(r < t ? null : kr);
            return n;
          })(u, h);
        return (d[1] = {
          type: t,
          id: e,
          blueprint: d,
          template: n,
          queries: null,
          viewQuery: a,
          node: null,
          data: d.slice().fill(null, u),
          bindingStartIndex: u,
          expandoStartIndex: h,
          expandoInstructions: null,
          firstCreatePass: !0,
          firstUpdatePass: !0,
          staticViewQueries: !1,
          staticContentQueries: !1,
          preOrderHooks: null,
          preOrderCheckHooks: null,
          contentHooks: null,
          contentCheckHooks: null,
          viewHooks: null,
          viewCheckHooks: null,
          destroyHooks: null,
          cleanup: null,
          contentQueries: null,
          components: null,
          directiveRegistry: 'function' == typeof i ? i() : i,
          pipeRegistry: 'function' == typeof o ? o() : o,
          firstChild: null,
          schemas: l,
          consts: c,
          incompleteFirstPass: !1
        });
      }
      function ns(t, e, n, r, s, i) {
        return {
          type: n,
          index: r,
          injectorIndex: e ? e.injectorIndex : -1,
          directiveStart: -1,
          directiveEnd: -1,
          directiveStylingLast: -1,
          propertyBindings: null,
          flags: 0,
          providerIndexes: 0,
          tagName: s,
          attrs: i,
          mergedAttrs: null,
          localNames: null,
          initialInputs: void 0,
          inputs: null,
          outputs: null,
          tViews: null,
          next: null,
          projectionNext: null,
          child: null,
          parent: e,
          projection: null,
          styles: null,
          stylesWithoutHost: null,
          residualStyles: void 0,
          classes: null,
          classesWithoutHost: null,
          residualClasses: void 0,
          classBindings: 0,
          styleBindings: 0
        };
      }
      function rs(t, e, n) {
        for (let r in t)
          if (t.hasOwnProperty(r)) {
            const s = t[r];
            (n = null === n ? {} : n).hasOwnProperty(r) ? n[r].push(e, s) : (n[r] = [e, s]);
          }
        return n;
      }
      function ss(t, e, n, r, s, i, o, a) {
        const l = Zt(e, n);
        let c,
          u = e.inputs;
        var h;
        !a && null != u && (c = u[r])
          ? (Is(t, n, c, r, s),
            Nt(e) &&
              (function(t, e) {
                const n = Wt(e, t);
                16 & n[2] || (n[2] |= 64);
              })(n, e.index))
          : 3 === e.type &&
            ((r =
              'class' === (h = r)
                ? 'className'
                : 'for' === h
                ? 'htmlFor'
                : 'formaction' === h
                ? 'formAction'
                : 'innerHtml' === h
                ? 'innerHTML'
                : 'readonly' === h
                ? 'readOnly'
                : 'tabindex' === h
                ? 'tabIndex'
                : h),
            (s = null != o ? o(s, e.tagName || '', r) : s),
            zt(i) ? i.setProperty(l, r, s) : Ue(r) || (l.setProperty ? l.setProperty(r, s) : (l[r] = s)));
      }
      function is(t, e, n, r) {
        let s = !1;
        if (re()) {
          const i = (function(t, e, n) {
              const r = t.directiveRegistry;
              let s = null;
              if (r)
                for (let i = 0; i < r.length; i++) {
                  const o = r[i];
                  Er(n, o.selectors, !1) &&
                    (s || (s = []),
                    on(en(n, e), t, o.type),
                    Lt(o) ? (2 & n.flags && gr(n), us(t, n), s.unshift(o)) : s.push(o));
                }
              return s;
            })(t, e, n),
            o = null === r ? null : { '': -1 };
          if (null !== i) {
            let r = 0;
            (s = !0), ds(n, t.data.length, i.length);
            for (let t = 0; t < i.length; t++) {
              const e = i[t];
              e.providersResolver && e.providersResolver(e);
            }
            cs(t, n, i.length);
            let a = !1,
              l = !1;
            for (let s = 0; s < i.length; s++) {
              const c = i[s];
              (n.mergedAttrs = ze(n.mergedAttrs, c.hostAttrs)),
                ps(t, e, c),
                hs(t.data.length - 1, c, o),
                null !== c.contentQueries && (n.flags |= 8),
                (null === c.hostBindings && null === c.hostAttrs && 0 === c.hostVars) || (n.flags |= 128),
                !a &&
                  (c.onChanges || c.onInit || c.doCheck) &&
                  ((t.preOrderHooks || (t.preOrderHooks = [])).push(n.index - 20), (a = !0)),
                l ||
                  (!c.onChanges && !c.doCheck) ||
                  ((t.preOrderCheckHooks || (t.preOrderCheckHooks = [])).push(n.index - 20), (l = !0)),
                os(t, c),
                (r += c.hostVars);
            }
            !(function(t, e) {
              const n = e.directiveEnd,
                r = t.data,
                s = e.attrs,
                i = [];
              let o = null,
                a = null;
              for (let l = e.directiveStart; l < n; l++) {
                const t = r[l],
                  n = t.inputs,
                  c = null === s || _r(e) ? null : ys(n, s);
                i.push(c), (o = rs(n, l, o)), (a = rs(t.outputs, l, a));
              }
              null !== o &&
                (o.hasOwnProperty('class') && (e.flags |= 16), o.hasOwnProperty('style') && (e.flags |= 32)),
                (e.initialInputs = i),
                (e.inputs = o),
                (e.outputs = a);
            })(t, n),
              as(t, e, r);
          }
          o &&
            (function(t, e, n) {
              if (e) {
                const r = (t.localNames = []);
                for (let t = 0; t < e.length; t += 2) {
                  const s = n[e[t + 1]];
                  if (null == s) throw new Error(`Export of name '${e[t + 1]}' not found!`);
                  r.push(e[t], s);
                }
              }
            })(n, r, o);
        }
        return (n.mergedAttrs = ze(n.mergedAttrs, n.attrs)), s;
      }
      function os(t, e) {
        const n = t.expandoInstructions;
        n.push(e.hostBindings), 0 !== e.hostVars && n.push(e.hostVars);
      }
      function as(t, e, n) {
        for (let r = 0; r < n; r++) e.push(kr), t.blueprint.push(kr), t.data.push(null);
      }
      function ls(t, e) {
        null !== t.hostBindings && t.hostBindings(1, e);
      }
      function cs(t, e, n) {
        const r = 20 - e.index,
          s = t.data.length - (65535 & e.providerIndexes);
        (t.expandoInstructions || (t.expandoInstructions = [])).push(r, s, n);
      }
      function us(t, e) {
        (e.flags |= 2), (t.components || (t.components = [])).push(e.index);
      }
      function hs(t, e, n) {
        if (n) {
          if (e.exportAs) for (let r = 0; r < e.exportAs.length; r++) n[e.exportAs[r]] = t;
          Lt(e) && (n[''] = t);
        }
      }
      function ds(t, e, n) {
        (t.flags |= 1), (t.directiveStart = e), (t.directiveEnd = e + n), (t.providerIndexes = e);
      }
      function ps(t, e, n) {
        t.data.push(n);
        const r = n.factory || (n.factory = It(n.type)),
          s = new Fe(r, Lt(n), null);
        t.blueprint.push(s), e.push(s);
      }
      function fs(t, e, n) {
        const r = Zt(e, t),
          s = ts(n),
          i = t[10],
          o = ws(t, qr(t, s, null, n.onPush ? 64 : 16, r, e, i, i.createRenderer(r, n)));
        t[e.index] = o;
      }
      function gs(t, e, n, r, s, i) {
        const o = Zt(t, e),
          a = e[11];
        if (null == r) zt(a) ? a.removeAttribute(o, n, i) : o.removeAttribute(n);
        else {
          const e = null == s ? Ge(r) : s(r, t.tagName || '', n);
          zt(a) ? a.setAttribute(o, n, e, i) : i ? o.setAttributeNS(i, n, e) : o.setAttribute(n, e);
        }
      }
      function ms(t, e, n, r, s, i) {
        const o = i[e];
        if (null !== o) {
          const t = r.setInput;
          for (let e = 0; e < o.length; ) {
            const s = o[e++],
              i = o[e++],
              a = o[e++];
            null !== t ? r.setInput(n, a, s, i) : (n[i] = a);
          }
        }
      }
      function ys(t, e) {
        let n = null,
          r = 0;
        for (; r < e.length; ) {
          const s = e[r];
          if (0 !== s)
            if (5 !== s) {
              if ('number' == typeof s) break;
              t.hasOwnProperty(s) && (null === n && (n = []), n.push(s, t[s], e[r + 1])), (r += 2);
            } else r += 2;
          else r += 4;
        }
        return n;
      }
      function bs(t, e, n, r) {
        return new Array(t, !0, !1, e, null, 0, r, n, null, null);
      }
      function _s(t, e) {
        const n = Wt(e, t);
        if (Yt(n)) {
          const t = n[1];
          80 & n[2]
            ? Gr(t, n, t.template, n[8])
            : n[5] > 0 &&
              (function t(e) {
                for (let r = Ir(e); null !== r; r = Pr(r))
                  for (let e = 10; e < r.length; e++) {
                    const n = r[e];
                    if (1024 & n[2]) {
                      const t = n[1];
                      Gr(t, n, t.template, n[8]);
                    } else n[5] > 0 && t(n);
                  }
                const n = e[1].components;
                if (null !== n)
                  for (let r = 0; r < n.length; r++) {
                    const s = Wt(n[r], e);
                    Yt(s) && s[5] > 0 && t(s);
                  }
              })(n);
        }
      }
      function vs(t, e) {
        const n = Wt(e, t),
          r = n[1];
        !(function(t, e) {
          for (let n = e.length; n < t.blueprint.length; n++) e.push(t.blueprint[n]);
        })(r, n),
          Qr(r, n, n[8]);
      }
      function ws(t, e) {
        return t[13] ? (t[14][4] = e) : (t[13] = e), (t[14] = e), e;
      }
      function Cs(t) {
        for (; t; ) {
          t[2] |= 64;
          const e = Ar(t);
          if (Ft(t) && !e) return t;
          t = e;
        }
        return null;
      }
      function Ss(t, e, n) {
        const r = e[10];
        r.begin && r.begin();
        try {
          Gr(t, e, t.template, n);
        } catch (s) {
          throw (As(e, s), s);
        } finally {
          r.end && r.end();
        }
      }
      function Es(t) {
        !(function(t) {
          for (let e = 0; e < t.components.length; e++) {
            const n = t.components[e],
              r = Kt(n),
              s = r[1];
            Wr(s, r, s.template, n);
          }
        })(t[8]);
      }
      function xs(t, e, n) {
        we(0), e(t, n);
      }
      const Os = (() => Promise.resolve(null))();
      function Ts(t) {
        return t[7] || (t[7] = []);
      }
      function ks(t) {
        return t.cleanup || (t.cleanup = []);
      }
      function As(t, e) {
        const n = t[9],
          r = n ? n.get(_n, null) : null;
        r && r.handleError(e);
      }
      function Is(t, e, n, r, s) {
        for (let i = 0; i < n.length; ) {
          const o = n[i++],
            a = n[i++],
            l = e[o],
            c = t.data[o];
          null !== c.setInput ? c.setInput(l, s, r, a) : (l[a] = s);
        }
      }
      function Ps(t, e, n) {
        const r = qt(e, t),
          s = t[11];
        zt(s) ? s.setValue(r, n) : (r.textContent = n);
      }
      function Rs(t, e) {
        const n = e[3];
        return -1 === t.index ? (Dt(n) ? n : null) : n;
      }
      function Ds(t, e) {
        const n = Rs(t, e);
        return n ? Zs(e[11], n[7]) : null;
      }
      function js(t, e, n, r, s) {
        if (null != r) {
          let i,
            o = !1;
          Dt(r) ? (i = r) : Rt(r) && ((o = !0), (r = r[0]));
          const a = Bt(r);
          0 === t && null !== n
            ? null == s
              ? Bs(e, n, a)
              : $s(e, n, a, s || null)
            : 1 === t && null !== n
            ? $s(e, n, a, s || null)
            : 2 === t
            ? Ks(e, a, o)
            : 3 === t && e.destroyNode(a),
            null != i &&
              (function(t, e, n, r, s) {
                const i = n[7];
                i !== Bt(n) && js(e, t, r, i, s);
                for (let o = 10; o < n.length; o++) {
                  const s = n[o];
                  Ys(s[1], s, t, e, r, i);
                }
              })(e, t, i, n, s);
        }
      }
      function Ns(t, e) {
        return zt(e) ? e.createText(t) : e.createTextNode(t);
      }
      function Ms(t, e, n, r) {
        const s = Ds(t.node, e);
        s && Ys(t, e, e[11], n ? 1 : 2, s, r);
      }
      function Ls(t, e) {
        const n = t[9],
          r = n.indexOf(e);
        1024 & e[2] && ee(e[3], -1), n.splice(r, 1);
      }
      function Fs(t, e) {
        if (t.length <= 10) return;
        const n = 10 + e,
          r = t[n];
        if (r) {
          const s = r[17];
          null !== s && s !== t && Ls(s, r), e > 0 && (t[n - 1][4] = r[4]);
          const i = ut(t, 10 + e);
          Ms(r[1], r, !1, null);
          const o = i[19];
          null !== o && o.detachView(i[1]), (r[3] = null), (r[4] = null), (r[2] &= -129);
        }
        return r;
      }
      function Vs(t, e) {
        if (!(256 & e[2])) {
          const n = e[11];
          zt(n) && n.destroyNode && Ys(t, e, n, 3, null, null),
            (function(t) {
              let e = t[13];
              if (!e) return Us(t[1], t);
              for (; e; ) {
                let n = null;
                if (Rt(e)) n = e[13];
                else {
                  const t = e[10];
                  t && (n = t);
                }
                if (!n) {
                  for (; e && !e[4] && e !== t; ) Rt(e) && Us(e[1], e), (e = Hs(e, t));
                  null === e && (e = t), Rt(e) && Us(e[1], e), (n = e && e[4]);
                }
                e = n;
              }
            })(e);
        }
      }
      function Hs(t, e) {
        let n;
        return Rt(t) && (n = t[6]) && 2 === n.type ? Rs(n, t) : t[3] === e ? null : t[3];
      }
      function Us(t, e) {
        if (!(256 & e[2])) {
          (e[2] &= -129),
            (e[2] |= 256),
            (function(t, e) {
              let n;
              if (null != t && null != (n = t.destroyHooks))
                for (let r = 0; r < n.length; r += 2) {
                  const t = e[n[r]];
                  if (!(t instanceof Fe)) {
                    const e = n[r + 1];
                    if (Array.isArray(e)) for (let n = 0; n < e.length; n += 2) e[n + 1].call(t[e[n]]);
                    else e.call(t);
                  }
                }
            })(t, e),
            (function(t, e) {
              const n = t.cleanup;
              if (null !== n) {
                const t = e[7];
                for (let r = 0; r < n.length - 1; r += 2)
                  if ('string' == typeof n[r]) {
                    const s = n[r + 1],
                      i = 'function' == typeof s ? s(e) : Bt(e[s]),
                      o = t[n[r + 2]],
                      a = n[r + 3];
                    'boolean' == typeof a ? i.removeEventListener(n[r], o, a) : a >= 0 ? t[a]() : t[-a].unsubscribe(),
                      (r += 2);
                  } else n[r].call(t[n[r + 1]]);
                e[7] = null;
              }
            })(t, e);
          const n = e[6];
          n && 3 === n.type && zt(e[11]) && e[11].destroy();
          const r = e[17];
          if (null !== r && Dt(e[3])) {
            r !== e[3] && Ls(r, e);
            const n = e[19];
            null !== n && n.detachView(t);
          }
        }
      }
      function zs(t, e, n) {
        let r = e.parent;
        for (; null != r && (4 === r.type || 5 === r.type); ) r = (e = r).parent;
        if (null == r) {
          const t = n[6];
          return 2 === t.type ? Ds(t, n) : n[0];
        }
        if (e && 5 === e.type && 4 & e.flags) return Zt(e, n).parentNode;
        if (2 & r.flags) {
          const e = t.data,
            n = e[e[r.index].directiveStart].encapsulation;
          if (n !== mt.ShadowDom && n !== mt.Native) return null;
        }
        return Zt(r, n);
      }
      function $s(t, e, n, r) {
        zt(t) ? t.insertBefore(e, n, r) : e.insertBefore(n, r, !0);
      }
      function Bs(t, e, n) {
        zt(t) ? t.appendChild(e, n) : e.appendChild(n);
      }
      function qs(t, e, n, r) {
        null !== r ? $s(t, e, n, r) : Bs(t, e, n);
      }
      function Zs(t, e) {
        return zt(t) ? t.parentNode(e) : e.parentNode;
      }
      function Qs(t, e) {
        if (2 === t.type) {
          const n = Rs(t, e);
          return null === n ? null : Ws(n.indexOf(e, 10) - 10, n);
        }
        return 4 === t.type || 5 === t.type ? Zt(t, e) : null;
      }
      function Gs(t, e, n, r) {
        const s = zs(t, r, e);
        if (null != s) {
          const t = e[11],
            i = Qs(r.parent || e[6], e);
          if (Array.isArray(n)) for (let e = 0; e < n.length; e++) qs(t, s, n[e], i);
          else qs(t, s, n, i);
        }
      }
      function Ws(t, e) {
        const n = 10 + t + 1;
        if (n < e.length) {
          const t = e[n],
            r = t[1].firstChild;
          if (null !== r)
            return (function t(e, n) {
              if (null !== n) {
                const r = n.type;
                if (3 === r) return Zt(n, e);
                if (0 === r) return Ws(-1, e[n.index]);
                if (4 === r || 5 === r) {
                  const r = n.child;
                  if (null !== r) return t(e, r);
                  {
                    const t = e[n.index];
                    return Dt(t) ? Ws(-1, t) : Bt(t);
                  }
                }
                {
                  const r = e[16],
                    s = r[6],
                    i = Ar(r),
                    o = s.projection[n.projection];
                  return null != o ? t(i, o) : t(e, n.next);
                }
              }
              return null;
            })(t, r);
        }
        return e[7];
      }
      function Ks(t, e, n) {
        const r = Zs(t, e);
        r &&
          (function(t, e, n, r) {
            zt(t) ? t.removeChild(e, n, r) : e.removeChild(n);
          })(t, r, e, n);
      }
      function Js(t, e, n, r, s, i, o) {
        for (; null != n; ) {
          const a = r[n.index],
            l = n.type;
          o && 0 === e && (a && fr(Bt(a), r), (n.flags |= 4)),
            64 != (64 & n.flags) &&
              (4 === l || 5 === l
                ? (Js(t, e, n.child, r, s, i, !1), js(e, t, s, a, i))
                : 1 === l
                ? ti(t, e, r, n, s, i)
                : js(e, t, s, a, i)),
            (n = o ? n.projectionNext : n.next);
        }
      }
      function Ys(t, e, n, r, s, i) {
        Js(n, r, t.node.child, e, s, i, !1);
      }
      function Xs(t, e, n) {
        ti(e[11], 0, e, n, zs(t, n, e), Qs(n.parent || e[6], e));
      }
      function ti(t, e, n, r, s, i) {
        const o = n[16],
          a = o[6].projection[r.projection];
        if (Array.isArray(a)) for (let l = 0; l < a.length; l++) js(e, t, s, a[l], i);
        else Js(t, e, a, o[3], s, i, !0);
      }
      function ei(t, e, n) {
        zt(t) ? t.setAttribute(e, 'style', n) : (e.style.cssText = n);
      }
      function ni(t, e, n) {
        zt(t) ? ('' === n ? t.removeAttribute(e, 'class') : t.setAttribute(e, 'class', n)) : (e.className = n);
      }
      class ri {
        constructor(t, e) {
          (this._lView = t), (this._cdRefInjectingView = e), (this._appRef = null), (this._viewContainerRef = null);
        }
        get rootNodes() {
          const t = this._lView;
          return null == t[0]
            ? (function t(e, n, r, s, i = !1) {
                for (; null !== r; ) {
                  const o = n[r.index];
                  if ((null !== o && s.push(Bt(o)), Dt(o)))
                    for (let e = 10; e < o.length; e++) {
                      const n = o[e],
                        r = n[1].firstChild;
                      null !== r && t(n[1], n, r, s);
                    }
                  const a = r.type;
                  if (4 === a || 5 === a) t(e, n, r.child, s);
                  else if (1 === a) {
                    const e = n[16],
                      i = e[6].projection[r.projection];
                    if (Array.isArray(i)) s.push(...i);
                    else {
                      const n = Ar(e);
                      t(n[1], n, i, s, !0);
                    }
                  }
                  r = i ? r.projectionNext : r.next;
                }
                return s;
              })(t[1], t, t[6].child, [])
            : [];
        }
        get context() {
          return this._lView[8];
        }
        get destroyed() {
          return 256 == (256 & this._lView[2]);
        }
        destroy() {
          if (this._appRef) this._appRef.detachView(this);
          else if (this._viewContainerRef) {
            const t = this._viewContainerRef.indexOf(this);
            t > -1 && this._viewContainerRef.detach(t), (this._viewContainerRef = null);
          }
          Vs(this._lView[1], this._lView);
        }
        onDestroy(t) {
          var e, n, r;
          (e = this._lView[1]),
            (r = t),
            Ts((n = this._lView)).push(r),
            e.firstCreatePass && ks(e).push(n[7].length - 1, null);
        }
        markForCheck() {
          Cs(this._cdRefInjectingView || this._lView);
        }
        detach() {
          this._lView[2] &= -129;
        }
        reattach() {
          this._lView[2] |= 128;
        }
        detectChanges() {
          Ss(this._lView[1], this._lView, this.context);
        }
        checkNoChanges() {
          !(function(t, e, n) {
            de(!0);
            try {
              Ss(t, e, n);
            } finally {
              de(!1);
            }
          })(this._lView[1], this._lView, this.context);
        }
        attachToViewContainerRef(t) {
          if (this._appRef) throw new Error('This view is already attached directly to the ApplicationRef!');
          this._viewContainerRef = t;
        }
        detachFromAppRef() {
          var t;
          (this._appRef = null), Ys(this._lView[1], (t = this._lView), t[11], 2, null, null);
        }
        attachToAppRef(t) {
          if (this._viewContainerRef) throw new Error('This view is already attached to a ViewContainer!');
          this._appRef = t;
        }
      }
      class si extends ri {
        constructor(t) {
          super(t), (this._view = t);
        }
        detectChanges() {
          Es(this._view);
        }
        checkNoChanges() {
          !(function(t) {
            de(!0);
            try {
              Es(t);
            } finally {
              de(!1);
            }
          })(this._view);
        }
        get context() {
          return null;
        }
      }
      let ii, oi, ai;
      function li(t, e, n) {
        return ii || (ii = class extends t {}), new ii(Zt(e, n));
      }
      function ci(t, e, n, r) {
        return (
          oi ||
            (oi = class extends t {
              constructor(t, e, n) {
                super(), (this._declarationView = t), (this._declarationTContainer = e), (this.elementRef = n);
              }
              createEmbeddedView(t) {
                const e = this._declarationTContainer.tViews,
                  n = qr(this._declarationView, e, t, 16, null, e.node);
                n[17] = this._declarationView[this._declarationTContainer.index];
                const r = this._declarationView[19];
                return null !== r && (n[19] = r.createEmbeddedView(e)), Qr(e, n, t), new ri(n);
              }
            }),
          0 === n.type ? new oi(r, n, li(e, n, r)) : null
        );
      }
      function ui(t, e, n, r) {
        let s;
        ai ||
          (ai = class extends t {
            constructor(t, e, n) {
              super(), (this._lContainer = t), (this._hostTNode = e), (this._hostView = n);
            }
            get element() {
              return li(e, this._hostTNode, this._hostView);
            }
            get injector() {
              return new fn(this._hostTNode, this._hostView);
            }
            get parentInjector() {
              const t = sn(this._hostTNode, this._hostView),
                e = Qe(t, this._hostView),
                n = (function(t, e, n) {
                  if (n.parent && -1 !== n.parent.injectorIndex) {
                    const t = n.parent.injectorIndex;
                    let e = n.parent;
                    for (; null != e.parent && t == e.parent.injectorIndex; ) e = e.parent;
                    return e;
                  }
                  let r = Ze(t),
                    s = e,
                    i = e[6];
                  for (; r > 1; ) (s = s[15]), (i = s[6]), r--;
                  return i;
                })(t, this._hostView, this._hostTNode);
              return Be(t) && null != n ? new fn(n, e) : new fn(null, this._hostView);
            }
            clear() {
              for (; this.length > 0; ) this.remove(this.length - 1);
            }
            get(t) {
              return (null !== this._lContainer[8] && this._lContainer[8][t]) || null;
            }
            get length() {
              return this._lContainer.length - 10;
            }
            createEmbeddedView(t, e, n) {
              const r = t.createEmbeddedView(e || {});
              return this.insert(r, n), r;
            }
            createComponent(t, e, n, r, s) {
              const i = n || this.parentInjector;
              if (!s && null == t.ngModule && i) {
                const t = i.get(it, null);
                t && (s = t);
              }
              const o = t.create(i, r, void 0, s);
              return this.insert(o.hostView, e), o;
            }
            insert(t, e) {
              const n = t._lView,
                r = n[1];
              if (t.destroyed) throw new Error('Cannot insert a destroyed View in a ViewContainer!');
              if ((this.allocateContainerIfNeeded(), Dt(n[3]))) {
                const e = this.indexOf(t);
                if (-1 !== e) this.detach(e);
                else {
                  const e = n[3],
                    r = new ai(e, e[6], e[3]);
                  r.detach(r.indexOf(t));
                }
              }
              const s = this._adjustIndex(e);
              return (
                (function(t, e, n, r) {
                  const s = 10 + r,
                    i = n.length;
                  r > 0 && (n[s - 1][4] = e),
                    r < i - 10 ? ((e[4] = n[s]), ct(n, 10 + r, e)) : (n.push(e), (e[4] = null)),
                    (e[3] = n);
                  const o = e[17];
                  null !== o &&
                    n !== o &&
                    (function(t, e) {
                      const n = t[9];
                      e[16] !== e[3][3][16] && (t[2] = !0), null === n ? (t[9] = [e]) : n.push(e);
                    })(o, e);
                  const a = e[19];
                  null !== a && a.insertView(t), (e[2] |= 128);
                })(r, n, this._lContainer, s),
                Ms(r, n, !0, Ws(s, this._lContainer)),
                t.attachToViewContainerRef(this),
                ct(this._lContainer[8], s, t),
                t
              );
            }
            move(t, e) {
              if (t.destroyed) throw new Error('Cannot move a destroyed View in a ViewContainer!');
              return this.insert(t, e);
            }
            indexOf(t) {
              const e = this._lContainer[8];
              return null !== e ? e.indexOf(t) : -1;
            }
            remove(t) {
              this.allocateContainerIfNeeded();
              const e = this._adjustIndex(t, -1);
              !(function(t, e) {
                const n = Fs(t, e);
                n && Vs(n[1], n);
              })(this._lContainer, e),
                ut(this._lContainer[8], e);
            }
            detach(t) {
              this.allocateContainerIfNeeded();
              const e = this._adjustIndex(t, -1),
                n = Fs(this._lContainer, e);
              return n && null != ut(this._lContainer[8], e) ? new ri(n) : null;
            }
            _adjustIndex(t, e = 0) {
              return null == t ? this.length + e : t;
            }
            allocateContainerIfNeeded() {
              null === this._lContainer[8] && (this._lContainer[8] = []);
            }
          });
        const i = r[n.index];
        if (Dt(i)) s = i;
        else {
          let t;
          if (4 === n.type) t = Bt(i);
          else if (((t = r[11].createComment('')), Ft(r))) {
            const e = r[11],
              s = Zt(n, r);
            $s(
              e,
              Zs(e, s),
              t,
              (function(t, e) {
                return zt(t) ? t.nextSibling(e) : e.nextSibling;
              })(e, s)
            );
          } else Gs(r[1], r, t, n);
          (r[n.index] = s = bs(i, r, t, n)), ws(r, s);
        }
        return new ai(s, n, r);
      }
      function hi(t = !1) {
        return (function(t, e, n) {
          if (!n && Nt(t)) {
            const n = Wt(t.index, e);
            return new ri(n, n);
          }
          return 3 === t.type || 0 === t.type || 4 === t.type || 5 === t.type ? new ri(e[16], e) : null;
        })(ae(), se(), t);
      }
      let di = (() => {
        class t {}
        return (t.__NG_ELEMENT_ID__ = () => pi()), t;
      })();
      const pi = hi,
        fi = new q('Set Injector scope.'),
        gi = {},
        mi = {},
        yi = [];
      let bi = void 0;
      function _i() {
        return void 0 === bi && (bi = new st()), bi;
      }
      function vi(t, e = null, n = null, r) {
        return new wi(t, n, e || _i(), r);
      }
      class wi {
        constructor(t, e, n, r = null) {
          (this.parent = n),
            (this.records = new Map()),
            (this.injectorDefTypes = new Set()),
            (this.onDestroy = new Set()),
            (this._destroyed = !1);
          const s = [];
          e && lt(e, n => this.processProvider(n, t, e)),
            lt([t], t => this.processInjectorType(t, [], s)),
            this.records.set(Z, Ei(void 0, this));
          const i = this.records.get(fi);
          (this.scope = null != i ? i.value : null), (this.source = r || ('object' == typeof t ? null : T(t)));
        }
        get destroyed() {
          return this._destroyed;
        }
        destroy() {
          this.assertNotDestroyed(), (this._destroyed = !0);
          try {
            this.onDestroy.forEach(t => t.ngOnDestroy());
          } finally {
            this.records.clear(), this.onDestroy.clear(), this.injectorDefTypes.clear();
          }
        }
        get(t, e = Q, n = f.Default) {
          this.assertNotDestroyed();
          const r = Y(this);
          try {
            if (!(n & f.SkipSelf)) {
              let e = this.records.get(t);
              if (void 0 === e) {
                const n = ('function' == typeof (s = t) || ('object' == typeof s && s instanceof q)) && _(t);
                (e = n && this.injectableDefInScope(n) ? Ei(Ci(t), gi) : null), this.records.set(t, e);
              }
              if (null != e) return this.hydrate(t, e);
            }
            return (n & f.Self ? _i() : this.parent).get(t, (e = n & f.Optional && e === Q ? null : e));
          } catch (i) {
            if ('NullInjectorError' === i.name) {
              if (((i.ngTempTokenPath = i.ngTempTokenPath || []).unshift(T(t)), r)) throw i;
              return (function(t, e, n, r) {
                const s = t.ngTempTokenPath;
                throw (e.__source && s.unshift(e.__source),
                (t.message = (function(t, e, n, r = null) {
                  t = t && '\n' === t.charAt(0) && '\u0275' == t.charAt(1) ? t.substr(2) : t;
                  let s = T(e);
                  if (Array.isArray(e)) s = e.map(T).join(' -> ');
                  else if ('object' == typeof e) {
                    let t = [];
                    for (let n in e)
                      if (e.hasOwnProperty(n)) {
                        let r = e[n];
                        t.push(n + ':' + ('string' == typeof r ? JSON.stringify(r) : T(r)));
                      }
                    s = `{${t.join(', ')}}`;
                  }
                  return `${n}${r ? '(' + r + ')' : ''}[${s}]: ${t.replace(G, '\n  ')}`;
                })('\n' + t.message, s, n, r)),
                (t.ngTokenPath = s),
                (t.ngTempTokenPath = null),
                t);
              })(i, t, 'R3InjectorError', this.source);
            }
            throw i;
          } finally {
            Y(r);
          }
          var s;
        }
        _resolveInjectorDefTypes() {
          this.injectorDefTypes.forEach(t => this.get(t));
        }
        toString() {
          const t = [];
          return this.records.forEach((e, n) => t.push(T(n))), `R3Injector[${t.join(', ')}]`;
        }
        assertNotDestroyed() {
          if (this._destroyed) throw new Error('Injector has already been destroyed.');
        }
        processInjectorType(t, e, n) {
          if (!(t = P(t))) return !1;
          let r = w(t);
          const s = (null == r && t.ngModule) || void 0,
            i = void 0 === s ? t : s,
            o = -1 !== n.indexOf(i);
          if ((void 0 !== s && (r = w(s)), null == r)) return !1;
          if (null != r.imports && !o) {
            let t;
            n.push(i);
            try {
              lt(r.imports, r => {
                this.processInjectorType(r, e, n) && (void 0 === t && (t = []), t.push(r));
              });
            } finally {
            }
            if (void 0 !== t)
              for (let e = 0; e < t.length; e++) {
                const { ngModule: n, providers: r } = t[e];
                lt(r, t => this.processProvider(t, n, r || yi));
              }
          }
          this.injectorDefTypes.add(i), this.records.set(i, Ei(r.factory, gi));
          const a = r.providers;
          if (null != a && !o) {
            const e = t;
            lt(a, t => this.processProvider(t, e, a));
          }
          return void 0 !== s && void 0 !== t.providers;
        }
        processProvider(t, e, n) {
          let r = Oi((t = P(t))) ? t : P(t && t.provide);
          const s = (function(t, e, n) {
            return xi(t) ? Ei(void 0, t.useValue) : Ei(Si(t, e, n), gi);
          })(t, e, n);
          if (Oi(t) || !0 !== t.multi) {
            const t = this.records.get(r);
            t && void 0 !== t.multi && mr();
          } else {
            let e = this.records.get(r);
            e
              ? void 0 === e.multi && mr()
              : ((e = Ei(void 0, gi, !0)), (e.factory = () => rt(e.multi)), this.records.set(r, e)),
              (r = t),
              e.multi.push(t);
          }
          this.records.set(r, s);
        }
        hydrate(t, e) {
          var n;
          return (
            e.value === mi
              ? (function(t) {
                  throw new Error('Cannot instantiate cyclic dependency! ' + t);
                })(T(t))
              : e.value === gi && ((e.value = mi), (e.value = e.factory())),
            'object' == typeof e.value &&
              e.value &&
              null !== (n = e.value) &&
              'object' == typeof n &&
              'function' == typeof n.ngOnDestroy &&
              this.onDestroy.add(e.value),
            e.value
          );
        }
        injectableDefInScope(t) {
          return (
            !!t.providedIn &&
            ('string' == typeof t.providedIn
              ? 'any' === t.providedIn || t.providedIn === this.scope
              : this.injectorDefTypes.has(t.providedIn))
          );
        }
      }
      function Ci(t) {
        const e = _(t),
          n = null !== e ? e.factory : It(t);
        if (null !== n) return n;
        const r = w(t);
        if (null !== r) return r.factory;
        if (t instanceof q) throw new Error(`Token ${T(t)} is missing a \u0275prov definition.`);
        if (t instanceof Function)
          return (function(t) {
            const e = t.length;
            if (e > 0) {
              const n = ht(e, '?');
              throw new Error(`Can't resolve all parameters for ${T(t)}: (${n.join(', ')}).`);
            }
            const n = (function(t) {
              const e = t && (t[C] || t[x] || (t[E] && t[E]()));
              if (e) {
                const n = (function(t) {
                  if (t.hasOwnProperty('name')) return t.name;
                  const e = ('' + t).match(/^function\s*([^\s(]+)/);
                  return null === e ? '' : e[1];
                })(t);
                return (
                  console.warn(
                    `DEPRECATED: DI is instantiating a token "${n}" that inherits its @Injectable decorator but does not provide one itself.\nThis will become an error in v10. Please add @Injectable() to the "${n}" class.`
                  ),
                  e
                );
              }
              return null;
            })(t);
            return null !== n ? () => n.factory(t) : () => new t();
          })(t);
        throw new Error('unreachable');
      }
      function Si(t, e, n) {
        let r = void 0;
        if (Oi(t)) {
          const e = P(t);
          return It(e) || Ci(e);
        }
        if (xi(t)) r = () => P(t.useValue);
        else if ((s = t) && s.useFactory) r = () => t.useFactory(...rt(t.deps || []));
        else if (
          (function(t) {
            return !(!t || !t.useExisting);
          })(t)
        )
          r = () => et(P(t.useExisting));
        else {
          const s = P(t && (t.useClass || t.provide));
          if (
            (s ||
              (function(t, e, n) {
                let r = '';
                throw (t &&
                  e &&
                  (r = ` - only instances of Provider and Type are allowed, got: [${e
                    .map(t => (t == n ? '?' + n + '?' : '...'))
                    .join(', ')}]`),
                new Error(`Invalid provider for the NgModule '${T(t)}'` + r));
              })(e, n, t),
            !(function(t) {
              return !!t.deps;
            })(t))
          )
            return It(s) || Ci(s);
          r = () => new s(...rt(t.deps));
        }
        var s;
        return r;
      }
      function Ei(t, e, n = !1) {
        return { factory: t, value: e, multi: n ? [] : void 0 };
      }
      function xi(t) {
        return null !== t && 'object' == typeof t && W in t;
      }
      function Oi(t) {
        return 'function' == typeof t;
      }
      const Ti = function(t, e, n) {
        return (function(t, e = null, n = null, r) {
          const s = vi(t, e, n, r);
          return s._resolveInjectorDefTypes(), s;
        })({ name: n }, e, t, n);
      };
      let ki = (() => {
        class t {
          static create(t, e) {
            return Array.isArray(t) ? Ti(t, e, '') : Ti(t.providers, t.parent, t.name || '');
          }
        }
        return (
          (t.THROW_IF_NOT_FOUND = Q),
          (t.NULL = new st()),
          (t.ɵprov = y({ token: t, providedIn: 'any', factory: () => et(Z) })),
          (t.__NG_ELEMENT_ID__ = -1),
          t
        );
      })();
      const Ai = new q('AnalyzeForEntryComponents');
      let Ii = new Map();
      const Pi = new Set();
      function Ri(t) {
        return 'string' == typeof t ? t : t.text();
      }
      function Di(t, e, n) {
        let r = n ? t.styles : null,
          s = n ? t.classes : null,
          i = 0;
        if (null !== e)
          for (let o = 0; o < e.length; o++) {
            const t = e[o];
            'number' == typeof t ? (i = t) : 1 == i ? (s = k(s, t)) : 2 == i && (r = k(r, t + ': ' + e[++o] + ';'));
          }
        n ? (t.styles = r) : (t.stylesWithoutHost = r), n ? (t.classes = s) : (t.classesWithoutHost = s);
      }
      let ji = null;
      function Ni() {
        if (!ji) {
          const t = L.Symbol;
          if (t && t.iterator) ji = t.iterator;
          else {
            const t = Object.getOwnPropertyNames(Map.prototype);
            for (let e = 0; e < t.length; ++e) {
              const n = t[e];
              'entries' !== n && 'size' !== n && Map.prototype[n] === Map.prototype.entries && (ji = n);
            }
          }
        }
        return ji;
      }
      function Mi(t, e) {
        return t === e || ('number' == typeof t && 'number' == typeof e && isNaN(t) && isNaN(e));
      }
      class Li {
        constructor(t) {
          this.wrapped = t;
        }
        static wrap(t) {
          return new Li(t);
        }
        static unwrap(t) {
          return Li.isWrapped(t) ? t.wrapped : t;
        }
        static isWrapped(t) {
          return t instanceof Li;
        }
      }
      function Fi(t) {
        return !!Vi(t) && (Array.isArray(t) || (!(t instanceof Map) && Ni() in t));
      }
      function Vi(t) {
        return null !== t && ('function' == typeof t || 'object' == typeof t);
      }
      function Hi(t, e, n) {
        return (t[e] = n);
      }
      function Ui(t, e, n) {
        return !Object.is(t[e], n) && ((t[e] = n), !0);
      }
      function zi(t, e, n, r) {
        const s = Ui(t, e, n);
        return Ui(t, e + 1, r) || s;
      }
      function $i(t, e, n, r) {
        const s = se();
        return Ui(s, ge(), e) && (ie(), gs(Pe(), s, t, e, n, r)), $i;
      }
      function Bi(t, e, n, r) {
        return Ui(t, ge(), n) ? e + Ge(n) + r : kr;
      }
      function qi(t, e, n, r, s, i, o, a) {
        const l = se(),
          c = ie(),
          u = t + 20,
          h = c.firstCreatePass
            ? (function(t, e, n, r, s, i, o, a, l) {
                const c = e.consts,
                  u = Zr(e, n[6], t, 0, o || null, Xt(c, a));
                is(e, n, u, Xt(c, l)), Re(e, u);
                const h = (u.tViews = es(2, -1, r, s, i, e.directiveRegistry, e.pipeRegistry, null, e.schemas, c)),
                  d = ns(0, null, 2, -1, null, null);
                return (
                  (d.injectorIndex = u.injectorIndex),
                  (h.node = d),
                  null !== e.queries && (e.queries.template(e, u), (h.queries = e.queries.embeddedTView(u))),
                  u
                );
              })(t, c, l, e, n, r, s, i, o)
            : c.data[u];
        le(h, !1);
        const d = l[11].createComment('');
        Gs(c, l, d, h), fr(d, l), ws(l, (l[u] = bs(d, l, d, h))), Mt(h) && Yr(c, l, h), null != o && Xr(l, h, a);
      }
      function Zi(t) {
        return Gt(ne.lFrame.contextLView, t);
      }
      function Qi(t, e = f.Default) {
        const n = se();
        return null == n ? et(t, e) : an(ae(), n, P(t), e);
      }
      function Gi(t) {
        return (function(t, e) {
          if ('class' === e) return t.classes;
          if ('style' === e) return t.styles;
          const n = t.attrs;
          if (n) {
            const t = n.length;
            let r = 0;
            for (; r < t; ) {
              const s = n[r];
              if (He(s)) break;
              if (0 === s) r += 2;
              else if ('number' == typeof s) for (r++; r < t && 'string' == typeof n[r]; ) r++;
              else {
                if (s === e) return n[r + 1];
                r += 2;
              }
            }
          }
          return null;
        })(ae(), t);
      }
      function Wi() {
        throw new Error('invalid');
      }
      function Ki(t, e, n) {
        const r = se();
        return Ui(r, ge(), e) && ss(ie(), Pe(), r, t, e, r[11], n, !1), Ki;
      }
      function Ji(t, e, n, r, s) {
        const i = s ? 'class' : 'style';
        Is(t, n, e.inputs[i], i, r);
      }
      function Yi(t, e, n, r) {
        const s = se(),
          i = ie(),
          o = 20 + t,
          a = s[11],
          l = (s[o] = Br(e, a, ne.lFrame.currentNamespace)),
          c = i.firstCreatePass
            ? (function(t, e, n, r, s, i, o) {
                const a = e.consts,
                  l = Xt(a, i),
                  c = Zr(e, n[6], t, 3, s, l);
                return (
                  is(e, n, c, Xt(a, o)),
                  null !== c.attrs && Di(c, c.attrs, !1),
                  null !== c.mergedAttrs && Di(c, c.mergedAttrs, !0),
                  null !== e.queries && e.queries.elementStart(e, c),
                  c
                );
              })(t, i, s, 0, e, n, r)
            : i.data[o];
        le(c, !0);
        const u = c.mergedAttrs;
        null !== u && Ve(a, l, u);
        const h = c.classes;
        null !== h && ni(a, l, h);
        const d = c.styles;
        null !== d && ei(a, l, d),
          Gs(i, s, l, c),
          0 === ne.lFrame.elementDepthCount && fr(l, s),
          ne.lFrame.elementDepthCount++,
          Mt(c) && (Yr(i, s, c), Jr(i, c, s)),
          null !== r && Xr(s, c);
      }
      function Xi() {
        let t = ae();
        ce() ? ue() : ((t = t.parent), le(t, !1));
        const e = t;
        ne.lFrame.elementDepthCount--;
        const n = ie();
        n.firstCreatePass && (Re(n, t), jt(t) && n.queries.elementEnd(t)),
          null != e.classesWithoutHost &&
            (function(t) {
              return 0 != (16 & t.flags);
            })(e) &&
            Ji(n, e, se(), e.classesWithoutHost, !0),
          null != e.stylesWithoutHost &&
            (function(t) {
              return 0 != (32 & t.flags);
            })(e) &&
            Ji(n, e, se(), e.stylesWithoutHost, !1);
      }
      function to(t, e, n, r) {
        Yi(t, e, n, r), Xi();
      }
      function eo(t, e, n) {
        const r = se(),
          s = ie(),
          i = t + 20,
          o = s.firstCreatePass
            ? (function(t, e, n, r, s) {
                const i = e.consts,
                  o = Xt(i, r),
                  a = Zr(e, n[6], t, 4, 'ng-container', o);
                return (
                  null !== o && Di(a, o, !0),
                  is(e, n, a, Xt(i, s)),
                  null !== e.queries && e.queries.elementStart(e, a),
                  a
                );
              })(t, s, r, e, n)
            : s.data[i];
        le(o, !0);
        const a = (r[i] = r[11].createComment(''));
        Gs(s, r, a, o), fr(a, r), Mt(o) && (Yr(s, r, o), Jr(s, o, r)), null != n && Xr(r, o);
      }
      function no() {
        let t = ae();
        const e = ie();
        ce() ? ue() : ((t = t.parent), le(t, !1)), e.firstCreatePass && (Re(e, t), jt(t) && e.queries.elementEnd(t));
      }
      function ro() {
        return se();
      }
      function so(t) {
        return !!t && 'function' == typeof t.then;
      }
      function io(t) {
        return !!t && 'function' == typeof t.subscribe;
      }
      function oo(t, e, n = !1, r) {
        const s = se(),
          i = ie(),
          o = ae();
        return (
          (function(t, e, n, r, s, i, o = !1, a) {
            const l = Mt(r),
              c = t.firstCreatePass && (t.cleanup || (t.cleanup = [])),
              u = Ts(e);
            let h = !0;
            if (3 === r.type) {
              const d = Zt(r, e),
                p = a ? a(d) : yt,
                f = p.target || d,
                g = u.length,
                m = a ? t => a(Bt(t[r.index])).target : r.index;
              if (zt(n)) {
                let o = null;
                if (
                  (!a &&
                    l &&
                    (o = (function(t, e, n, r) {
                      const s = t.cleanup;
                      if (null != s)
                        for (let i = 0; i < s.length - 1; i += 2) {
                          const t = s[i];
                          if (t === n && s[i + 1] === r) {
                            const t = e[7],
                              n = s[i + 2];
                            return t.length > n ? t[n] : null;
                          }
                          'string' == typeof t && (i += 2);
                        }
                      return null;
                    })(t, e, s, r.index)),
                  null !== o)
                )
                  ((o.__ngLastListenerFn__ || o).__ngNextListenerFn__ = i), (o.__ngLastListenerFn__ = i), (h = !1);
                else {
                  i = lo(r, e, i, !1);
                  const t = n.listen(p.name || f, s, i);
                  u.push(i, t), c && c.push(s, m, g, g + 1);
                }
              } else (i = lo(r, e, i, !0)), f.addEventListener(s, i, o), u.push(i), c && c.push(s, m, g, o);
            }
            const d = r.outputs;
            let p;
            if (h && null !== d && (p = d[s])) {
              const t = p.length;
              if (t)
                for (let n = 0; n < t; n += 2) {
                  const t = e[p[n]][p[n + 1]].subscribe(i),
                    o = u.length;
                  u.push(i, t), c && c.push(s, r.index, o, -(o + 1));
                }
            }
          })(i, s, s[11], o, t, e, n, r),
          oo
        );
      }
      function ao(t, e, n) {
        try {
          return !1 !== e(n);
        } catch (r) {
          return As(t, r), !1;
        }
      }
      function lo(t, e, n, r) {
        return function s(i) {
          if (i === Function) return n;
          const o = 2 & t.flags ? Wt(t.index, e) : e;
          0 == (32 & e[2]) && Cs(o);
          let a = ao(e, n, i),
            l = s.__ngNextListenerFn__;
          for (; l; ) (a = ao(e, l, i) && a), (l = l.__ngNextListenerFn__);
          return r && !1 === a && (i.preventDefault(), (i.returnValue = !1)), a;
        };
      }
      function co(t = 1) {
        return (function(t) {
          return (ne.lFrame.contextLView = (function(t, e) {
            for (; t > 0; ) (e = e[15]), t--;
            return e;
          })(t, ne.lFrame.contextLView))[8];
        })(t);
      }
      function uo(t, e) {
        let n = null;
        const r = (function(t) {
          const e = t.attrs;
          if (null != e) {
            const t = e.indexOf(5);
            if (0 == (1 & t)) return e[t + 1];
          }
          return null;
        })(t);
        for (let s = 0; s < e.length; s++) {
          const i = e[s];
          if ('*' !== i) {
            if (null === r ? Er(t, i, !0) : xr(r, i)) return s;
          } else n = s;
        }
        return n;
      }
      function ho(t) {
        const e = se()[16][6];
        if (!e.projection) {
          const n = (e.projection = ht(t ? t.length : 1, null)),
            r = n.slice();
          let s = e.child;
          for (; null !== s; ) {
            const e = t ? uo(s, t) : 0;
            null !== e && (r[e] ? (r[e].projectionNext = s) : (n[e] = s), (r[e] = s)), (s = s.next);
          }
        }
      }
      let po = !1;
      function fo(t) {
        po = t;
      }
      function go(t, e = 0, n) {
        const r = se(),
          s = ie(),
          i = Zr(s, r[6], t, 1, null, n || null);
        null === i.projection && (i.projection = e), ue(), po || Xs(s, r, i);
      }
      function mo(t, e, n) {
        return yo(t, '', e, '', n), mo;
      }
      function yo(t, e, n, r, s) {
        const i = se(),
          o = Bi(i, e, n, r);
        return o !== kr && ss(ie(), Pe(), i, t, o, i[11], s, !1), yo;
      }
      const bo = [];
      function _o(t, e, n, r, s) {
        const i = t[n + 1],
          o = null === e;
        let a = r ? Fr(i) : Hr(i),
          l = !1;
        for (; 0 !== a && (!1 === l || o); ) {
          const n = t[a + 1];
          vo(t[a], e) && ((l = !0), (t[a + 1] = r ? zr(n) : Vr(n))), (a = r ? Fr(n) : Hr(n));
        }
        l && (t[n + 1] = r ? Vr(i) : zr(i));
      }
      function vo(t, e) {
        return (
          null === t ||
          null == e ||
          (Array.isArray(t) ? t[1] : t) === e ||
          (!(!Array.isArray(t) || 'string' != typeof e) && ft(t, e) >= 0)
        );
      }
      const wo = { textEnd: 0, key: 0, keyEnd: 0, value: 0, valueEnd: 0 };
      function Co(t) {
        return t.substring(wo.key, wo.keyEnd);
      }
      function So(t, e) {
        const n = wo.textEnd;
        return n === e
          ? -1
          : ((e = wo.keyEnd = (function(t, e, n) {
              for (; e < n && t.charCodeAt(e) > 32; ) e++;
              return e;
            })(t, (wo.key = e), n)),
            Eo(t, e, n));
      }
      function Eo(t, e, n) {
        for (; e < n && t.charCodeAt(e) <= 32; ) e++;
        return e;
      }
      function xo(t, e, n) {
        return Ao(t, e, n, !1), xo;
      }
      function Oo(t, e) {
        return Ao(t, e, null, !0), Oo;
      }
      function To(t) {
        Io(dt, ko, t, !0);
      }
      function ko(t, e) {
        for (
          let n = (function(t) {
            return (
              (function(t) {
                (wo.key = 0), (wo.keyEnd = 0), (wo.value = 0), (wo.valueEnd = 0), (wo.textEnd = t.length);
              })(t),
              So(t, Eo(t, 0, wo.textEnd))
            );
          })(e);
          n >= 0;
          n = So(e, n)
        )
          dt(t, Co(e), !0);
      }
      function Ao(t, e, n, r) {
        const s = se(),
          i = ie(),
          o = me(2);
        if ((i.firstUpdatePass && Ro(i, t, o, r), e !== kr && Ui(s, o, e))) {
          let a;
          null == n &&
            (a = (function() {
              const t = ne.lFrame;
              return null === t ? null : t.currentSanitizer;
            })()) &&
            (n = a),
            No(
              i,
              i.data[Ae() + 20],
              s,
              s[11],
              t,
              (s[o + 1] = (function(t, e) {
                return (
                  null == t ||
                    ('function' == typeof e
                      ? (t = e(t))
                      : 'string' == typeof e
                      ? (t += e)
                      : 'object' == typeof t && (t = T(On(t)))),
                  t
                );
              })(e, n)),
              r,
              o
            );
        }
      }
      function Io(t, e, n, r) {
        const s = ie(),
          i = me(2);
        s.firstUpdatePass && Ro(s, null, i, r);
        const o = se();
        if (n !== kr && Ui(o, i, n)) {
          const a = s.data[Ae() + 20];
          if (Fo(a, r) && !Po(s, i)) {
            let t = r ? a.classesWithoutHost : a.stylesWithoutHost;
            null !== t && (n = k(t, n || '')), Ji(s, a, o, n, r);
          } else
            !(function(t, e, n, r, s, i, o, a) {
              s === kr && (s = bo);
              let l = 0,
                c = 0,
                u = 0 < s.length ? s[0] : null,
                h = 0 < i.length ? i[0] : null;
              for (; null !== u || null !== h; ) {
                const d = l < s.length ? s[l + 1] : void 0,
                  p = c < i.length ? i[c + 1] : void 0;
                let f = null,
                  g = void 0;
                u === h
                  ? ((l += 2), (c += 2), d !== p && ((f = h), (g = p)))
                  : null === h || (null !== u && u < h)
                  ? ((l += 2), (f = u))
                  : ((c += 2), (f = h), (g = p)),
                  null !== f && No(t, e, n, r, f, g, o, a),
                  (u = l < s.length ? s[l] : null),
                  (h = c < i.length ? i[c] : null);
              }
            })(
              s,
              a,
              o,
              o[11],
              o[i + 1],
              (o[i + 1] = (function(t, e, n) {
                if (null == n || '' === n) return bo;
                const r = [],
                  s = On(n);
                if (Array.isArray(s)) for (let i = 0; i < s.length; i++) t(r, s[i], !0);
                else if ('object' == typeof s) for (const i in s) s.hasOwnProperty(i) && t(r, i, s[i]);
                else 'string' == typeof s && e(r, s);
                return r;
              })(t, e, n)),
              r,
              i
            );
        }
      }
      function Po(t, e) {
        return e >= t.expandoStartIndex;
      }
      function Ro(t, e, n, r) {
        const s = t.data;
        if (null === s[n + 1]) {
          const i = s[Ae() + 20],
            o = Po(t, n);
          Fo(i, r) && null === e && !o && (e = !1),
            (e = (function(t, e, n, r) {
              const s = _e(t);
              let i = r ? e.residualClasses : e.residualStyles;
              if (null === s)
                0 === (r ? e.classBindings : e.styleBindings) &&
                  ((n = jo((n = Do(null, t, e, n, r)), e.attrs, r)), (i = null));
              else {
                const o = e.directiveStylingLast;
                if (-1 === o || t[o] !== s)
                  if (((n = Do(s, t, e, n, r)), null === i)) {
                    let n = (function(t, e, n) {
                      const r = n ? e.classBindings : e.styleBindings;
                      if (0 !== Hr(r)) return t[Fr(r)];
                    })(t, e, r);
                    void 0 !== n &&
                      Array.isArray(n) &&
                      ((n = Do(null, t, e, n[1], r)),
                      (n = jo(n, e.attrs, r)),
                      (function(t, e, n, r) {
                        t[Fr(n ? e.classBindings : e.styleBindings)] = r;
                      })(t, e, r, n));
                  } else
                    i = (function(t, e, n) {
                      let r = void 0;
                      const s = e.directiveEnd;
                      for (let i = 1 + e.directiveStylingLast; i < s; i++) r = jo(r, t[i].hostAttrs, n);
                      return jo(r, e.attrs, n);
                    })(t, e, r);
              }
              return void 0 !== i && (r ? (e.residualClasses = i) : (e.residualStyles = i)), n;
            })(s, i, e, r)),
            (function(t, e, n, r, s, i) {
              let o = i ? e.classBindings : e.styleBindings,
                a = Fr(o),
                l = Hr(o);
              t[r] = n;
              let c,
                u = !1;
              if (Array.isArray(n)) {
                const t = n;
                (c = t[1]), (null === c || ft(t, c) > 0) && (u = !0);
              } else c = n;
              if (s)
                if (0 !== l) {
                  const e = Fr(t[a + 1]);
                  (t[r + 1] = Lr(e, a)),
                    0 !== e && (t[e + 1] = Ur(t[e + 1], r)),
                    (t[a + 1] = (131071 & t[a + 1]) | (r << 17));
                } else (t[r + 1] = Lr(a, 0)), 0 !== a && (t[a + 1] = Ur(t[a + 1], r)), (a = r);
              else (t[r + 1] = Lr(l, 0)), 0 === a ? (a = r) : (t[l + 1] = Ur(t[l + 1], r)), (l = r);
              u && (t[r + 1] = Vr(t[r + 1])),
                _o(t, c, r, !0),
                _o(t, c, r, !1),
                (function(t, e, n, r, s) {
                  const i = s ? t.residualClasses : t.residualStyles;
                  null != i && 'string' == typeof e && ft(i, e) >= 0 && (n[r + 1] = zr(n[r + 1]));
                })(e, c, t, r, i),
                (o = Lr(a, l)),
                i ? (e.classBindings = o) : (e.styleBindings = o);
            })(s, i, e, n, o, r);
        }
      }
      function Do(t, e, n, r, s) {
        let i = null;
        const o = n.directiveEnd;
        let a = n.directiveStylingLast;
        for (-1 === a ? (a = n.directiveStart) : a++; a < o && ((i = e[a]), (r = jo(r, i.hostAttrs, s)), i !== t); )
          a++;
        return null !== t && (n.directiveStylingLast = a), r;
      }
      function jo(t, e, n) {
        const r = n ? 1 : 2;
        let s = -1;
        if (null !== e)
          for (let i = 0; i < e.length; i++) {
            const o = e[i];
            'number' == typeof o
              ? (s = o)
              : s === r && (Array.isArray(t) || (t = void 0 === t ? [] : ['', t]), dt(t, o, !!n || e[++i]));
          }
        return void 0 === t ? null : t;
      }
      function No(t, e, n, r, s, i, o, a) {
        if (3 !== e.type) return;
        const l = t.data,
          c = l[a + 1];
        Lo(1 == (1 & c) ? Mo(l, e, n, s, Hr(c), o) : void 0) ||
          (Lo(i) ||
            ((function(t) {
              return 2 == (2 & t);
            })(c) &&
              (i = Mo(l, null, n, s, a, o))),
          (function(t, e, n, r, s) {
            const i = zt(t);
            if (e) s ? (i ? t.addClass(n, r) : n.classList.add(r)) : i ? t.removeClass(n, r) : n.classList.remove(r);
            else {
              const e = -1 == r.indexOf('-') ? void 0 : 2;
              null == s
                ? i
                  ? t.removeStyle(n, r, e)
                  : n.style.removeProperty(r)
                : i
                ? t.setStyle(n, r, s, e)
                : n.style.setProperty(r, s);
            }
          })(r, o, qt(Ae(), n), s, i));
      }
      function Mo(t, e, n, r, s, i) {
        const o = null === e;
        let a = void 0;
        for (; s > 0; ) {
          const e = t[s],
            i = Array.isArray(e),
            l = i ? e[1] : e,
            c = null === l;
          let u = n[s + 1];
          u === kr && (u = c ? bo : void 0);
          let h = c ? pt(u, r) : l === r ? u : void 0;
          if ((i && !Lo(h) && (h = pt(e, r)), Lo(h) && ((a = h), o))) return a;
          const d = t[s + 1];
          s = o ? Fr(d) : Hr(d);
        }
        if (null !== e) {
          let t = i ? e.residualClasses : e.residualStyles;
          null != t && (a = pt(t, r));
        }
        return a;
      }
      function Lo(t) {
        return void 0 !== t;
      }
      function Fo(t, e) {
        return 0 != (t.flags & (e ? 16 : 32));
      }
      function Vo(t, e = '') {
        const n = se(),
          r = ie(),
          s = t + 20,
          i = r.firstCreatePass ? Zr(r, n[6], t, 3, null, null) : r.data[s],
          o = (n[s] = Ns(e, n[11]));
        Gs(r, n, o, i), le(i, !1);
      }
      function Ho(t) {
        return Uo('', t, ''), Ho;
      }
      function Uo(t, e, n) {
        const r = se(),
          s = Bi(r, t, e, n);
        return s !== kr && Ps(r, Ae(), s), Uo;
      }
      function zo(t, e, n, r, s) {
        const i = se(),
          o = (function(t, e, n, r, s, i) {
            const o = zi(t, fe(), n, s);
            return me(2), o ? e + Ge(n) + r + Ge(s) + i : kr;
          })(i, t, e, n, r, s);
        return o !== kr && Ps(i, Ae(), o), zo;
      }
      function $o(t, e, n) {
        Io(dt, ko, Bi(se(), t, e, n), !0);
      }
      function Bo(t, e, n, r, s, i, o, a, l) {
        Io(
          dt,
          ko,
          (function(t, e, n, r, s, i, o, a, l, c) {
            const u = (function(t, e, n, r, s, i) {
              const o = zi(t, e, n, r);
              return zi(t, e + 2, s, i) || o;
            })(t, fe(), n, s, o, l);
            return me(4), u ? e + Ge(n) + r + Ge(s) + i + Ge(o) + a + Ge(l) + c : kr;
          })(se(), t, e, n, r, s, i, o, a, l),
          !0
        );
      }
      function qo(t, e, n) {
        const r = se();
        return Ui(r, ge(), e) && ss(ie(), Pe(), r, t, e, r[11], n, !0), qo;
      }
      function Zo(t, e, n) {
        const r = se();
        if (Ui(r, ge(), e)) {
          const s = ie(),
            i = Pe();
          ss(
            s,
            i,
            r,
            t,
            e,
            (function(t, e, n) {
              return (
                (null === t || Lt(t)) &&
                  (n = (function(t) {
                    for (; Array.isArray(t); ) {
                      if ('object' == typeof t[1]) return t;
                      t = t[0];
                    }
                    return null;
                  })(n[e.index])),
                n[11]
              );
            })(_e(s.data), i, r),
            n,
            !0
          );
        }
        return Zo;
      }
      function Qo(t, e) {
        const n = Kt(t)[1],
          r = n.data.length - 1;
        Re(n, { directiveStart: r, directiveEnd: r + 1 });
      }
      function Go(t) {
        let e = Object.getPrototypeOf(t.type.prototype).constructor,
          n = !0;
        const r = [t];
        for (; e; ) {
          let s = void 0;
          if (Lt(t)) s = e.ɵcmp || e.ɵdir;
          else {
            if (e.ɵcmp) throw new Error('Directives cannot inherit Components');
            s = e.ɵdir;
          }
          if (s) {
            if (n) {
              r.push(s);
              const e = t;
              (e.inputs = Wo(t.inputs)), (e.declaredInputs = Wo(t.declaredInputs)), (e.outputs = Wo(t.outputs));
              const n = s.hostBindings;
              n && Yo(t, n);
              const i = s.viewQuery,
                o = s.contentQueries;
              if (
                (i && Ko(t, i),
                o && Jo(t, o),
                m(t.inputs, s.inputs),
                m(t.declaredInputs, s.declaredInputs),
                m(t.outputs, s.outputs),
                Lt(s) && s.data.animation)
              ) {
                const e = t.data;
                e.animation = (e.animation || []).concat(s.data.animation);
              }
              (e.afterContentChecked = e.afterContentChecked || s.afterContentChecked),
                (e.afterContentInit = t.afterContentInit || s.afterContentInit),
                (e.afterViewChecked = t.afterViewChecked || s.afterViewChecked),
                (e.afterViewInit = t.afterViewInit || s.afterViewInit),
                (e.doCheck = t.doCheck || s.doCheck),
                (e.onDestroy = t.onDestroy || s.onDestroy),
                (e.onInit = t.onInit || s.onInit);
            }
            const e = s.features;
            if (e)
              for (let r = 0; r < e.length; r++) {
                const s = e[r];
                s && s.ngInherit && s(t), s === Go && (n = !1);
              }
          }
          e = Object.getPrototypeOf(e);
        }
        !(function(t) {
          let e = 0,
            n = null;
          for (let r = t.length - 1; r >= 0; r--) {
            const s = t[r];
            (s.hostVars = e += s.hostVars), (s.hostAttrs = ze(s.hostAttrs, (n = ze(n, s.hostAttrs))));
          }
        })(r);
      }
      function Wo(t) {
        return t === yt ? {} : t === bt ? [] : t;
      }
      function Ko(t, e) {
        const n = t.viewQuery;
        t.viewQuery = n
          ? (t, r) => {
              e(t, r), n(t, r);
            }
          : e;
      }
      function Jo(t, e) {
        const n = t.contentQueries;
        t.contentQueries = n
          ? (t, r, s) => {
              e(t, r, s), n(t, r, s);
            }
          : e;
      }
      function Yo(t, e) {
        const n = t.hostBindings;
        t.hostBindings = n
          ? (t, r) => {
              e(t, r), n(t, r);
            }
          : e;
      }
      class Xo {
        constructor(t, e, n) {
          (this.previousValue = t), (this.currentValue = e), (this.firstChange = n);
        }
        isFirstChange() {
          return this.firstChange;
        }
      }
      function ta(t) {
        t.type.prototype.ngOnChanges &&
          ((t.setInput = ea),
          (t.onChanges = function() {
            const t = na(this),
              e = t && t.current;
            if (e) {
              const n = t.previous;
              if (n === yt) t.previous = e;
              else for (let t in e) n[t] = e[t];
              (t.current = null), this.ngOnChanges(e);
            }
          }));
      }
      function ea(t, e, n, r) {
        const s =
            na(t) ||
            (function(t, e) {
              return (t.__ngSimpleChanges__ = e);
            })(t, { previous: yt, current: null }),
          i = s.current || (s.current = {}),
          o = s.previous,
          a = this.declaredInputs[n],
          l = o[a];
        (i[a] = new Xo(l && l.currentValue, e, o === yt)), (t[r] = e);
      }
      function na(t) {
        return t.__ngSimpleChanges__ || null;
      }
      function ra(t, e, n, r, s) {
        if (((t = P(t)), Array.isArray(t))) for (let i = 0; i < t.length; i++) ra(t[i], e, n, r, s);
        else {
          const i = ie(),
            o = se();
          let a = Oi(t) ? t : P(t.provide),
            l = Si(t);
          const c = ae(),
            u = 65535 & c.providerIndexes,
            h = c.directiveStart,
            d = c.providerIndexes >> 16;
          if (Oi(t) || !t.multi) {
            const r = new Fe(l, s, Qi),
              p = oa(a, e, s ? u : u + d, h);
            -1 === p
              ? (on(en(c, o), i, a),
                sa(i, t, e.length),
                e.push(a),
                c.directiveStart++,
                c.directiveEnd++,
                s && (c.providerIndexes += 65536),
                n.push(r),
                o.push(r))
              : ((n[p] = r), (o[p] = r));
          } else {
            const p = oa(a, e, u + d, h),
              f = oa(a, e, u, u + d),
              g = p >= 0 && n[p],
              m = f >= 0 && n[f];
            if ((s && !m) || (!s && !g)) {
              on(en(c, o), i, a);
              const u = (function(t, e, n, r, s) {
                const i = new Fe(t, n, Qi);
                return (i.multi = []), (i.index = e), (i.componentProviders = 0), ia(i, s, r && !n), i;
              })(s ? la : aa, n.length, s, r, l);
              !s && m && (n[f].providerFactory = u),
                sa(i, t, e.length, 0),
                e.push(a),
                c.directiveStart++,
                c.directiveEnd++,
                s && (c.providerIndexes += 65536),
                n.push(u),
                o.push(u);
            } else sa(i, t, p > -1 ? p : f, ia(n[s ? f : p], l, !s && r));
            !s && r && m && n[f].componentProviders++;
          }
        }
      }
      function sa(t, e, n, r) {
        const s = Oi(e);
        if (s || e.useClass) {
          const i = (e.useClass || e).prototype.ngOnDestroy;
          if (i) {
            const o = t.destroyHooks || (t.destroyHooks = []);
            if (!s && e.multi) {
              const t = o.indexOf(n);
              -1 === t ? o.push(n, [r, i]) : o[t + 1].push(r, i);
            } else o.push(n, i);
          }
        }
      }
      function ia(t, e, n) {
        return n && t.componentProviders++, t.multi.push(e) - 1;
      }
      function oa(t, e, n, r) {
        for (let s = n; s < r; s++) if (e[s] === t) return s;
        return -1;
      }
      function aa(t, e, n, r) {
        return ca(this.multi, []);
      }
      function la(t, e, n, r) {
        const s = this.multi;
        let i;
        if (this.providerFactory) {
          const t = this.providerFactory.componentProviders,
            e = hn(n, n[1], this.providerFactory.index, r);
          (i = e.slice(0, t)), ca(s, i);
          for (let n = t; n < e.length; n++) i.push(e[n]);
        } else (i = []), ca(s, i);
        return i;
      }
      function ca(t, e) {
        for (let n = 0; n < t.length; n++) e.push((0, t[n])());
        return e;
      }
      function ua(t, e = []) {
        return n => {
          n.providersResolver = (n, r) =>
            (function(t, e, n) {
              const r = ie();
              if (r.firstCreatePass) {
                const s = Lt(t);
                ra(n, r.data, r.blueprint, s, !0), ra(e, r.data, r.blueprint, s, !1);
              }
            })(n, r ? r(t) : t, e);
        };
      }
      ta.ngInherit = !0;
      class ha {}
      class da {
        resolveComponentFactory(t) {
          throw (function(t) {
            const e = Error(`No component factory found for ${T(t)}. Did you add it to @NgModule.entryComponents?`);
            return (e.ngComponent = t), e;
          })(t);
        }
      }
      let pa = (() => {
          class t {}
          return (t.NULL = new da()), t;
        })(),
        fa = (() => {
          class t {
            constructor(t) {
              this.nativeElement = t;
            }
          }
          return (t.__NG_ELEMENT_ID__ = () => ga(t)), t;
        })();
      const ga = function(t) {
        return li(t, ae(), se());
      };
      class ma {}
      const ya = (function() {
        var t = { Important: 1, DashCase: 2 };
        return (t[t.Important] = 'Important'), (t[t.DashCase] = 'DashCase'), t;
      })();
      let ba = (() => {
        class t {}
        return (t.__NG_ELEMENT_ID__ = () => _a()), t;
      })();
      const _a = function() {
        const t = se(),
          e = Wt(ae().index, t);
        return (function(t) {
          const e = t[11];
          if (zt(e)) return e;
          throw new Error('Cannot inject Renderer2 when the application uses Renderer3!');
        })(Rt(e) ? e : t);
      };
      let va = (() => {
        class t {}
        return (t.ɵprov = y({ token: t, providedIn: 'root', factory: () => null })), t;
      })();
      class wa {
        constructor(t) {
          (this.full = t),
            (this.major = t.split('.')[0]),
            (this.minor = t.split('.')[1]),
            (this.patch = t
              .split('.')
              .slice(2)
              .join('.'));
        }
      }
      const Ca = new wa('9.1.11');
      class Sa {
        constructor() {}
        supports(t) {
          return Fi(t);
        }
        create(t) {
          return new xa(t);
        }
      }
      const Ea = (t, e) => e;
      class xa {
        constructor(t) {
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
            (this._trackByFn = t || Ea);
        }
        forEachItem(t) {
          let e;
          for (e = this._itHead; null !== e; e = e._next) t(e);
        }
        forEachOperation(t) {
          let e = this._itHead,
            n = this._removalsHead,
            r = 0,
            s = null;
          for (; e || n; ) {
            const i = !n || (e && e.currentIndex < Aa(n, r, s)) ? e : n,
              o = Aa(i, r, s),
              a = i.currentIndex;
            if (i === n) r--, (n = n._nextRemoved);
            else if (((e = e._next), null == i.previousIndex)) r++;
            else {
              s || (s = []);
              const t = o - r,
                e = a - r;
              if (t != e) {
                for (let n = 0; n < t; n++) {
                  const r = n < s.length ? s[n] : (s[n] = 0),
                    i = r + n;
                  e <= i && i < t && (s[n] = r + 1);
                }
                s[i.previousIndex] = e - t;
              }
            }
            o !== a && t(i, o, a);
          }
        }
        forEachPreviousItem(t) {
          let e;
          for (e = this._previousItHead; null !== e; e = e._nextPrevious) t(e);
        }
        forEachAddedItem(t) {
          let e;
          for (e = this._additionsHead; null !== e; e = e._nextAdded) t(e);
        }
        forEachMovedItem(t) {
          let e;
          for (e = this._movesHead; null !== e; e = e._nextMoved) t(e);
        }
        forEachRemovedItem(t) {
          let e;
          for (e = this._removalsHead; null !== e; e = e._nextRemoved) t(e);
        }
        forEachIdentityChange(t) {
          let e;
          for (e = this._identityChangesHead; null !== e; e = e._nextIdentityChange) t(e);
        }
        diff(t) {
          if ((null == t && (t = []), !Fi(t)))
            throw new Error(`Error trying to diff '${T(t)}'. Only arrays and iterables are allowed`);
          return this.check(t) ? this : null;
        }
        onDestroy() {}
        check(t) {
          this._reset();
          let e,
            n,
            r,
            s = this._itHead,
            i = !1;
          if (Array.isArray(t)) {
            this.length = t.length;
            for (let e = 0; e < this.length; e++)
              (n = t[e]),
                (r = this._trackByFn(e, n)),
                null !== s && Mi(s.trackById, r)
                  ? (i && (s = this._verifyReinsertion(s, n, r, e)), Mi(s.item, n) || this._addIdentityChange(s, n))
                  : ((s = this._mismatch(s, n, r, e)), (i = !0)),
                (s = s._next);
          } else
            (e = 0),
              (function(t, e) {
                if (Array.isArray(t)) for (let n = 0; n < t.length; n++) e(t[n]);
                else {
                  const n = t[Ni()]();
                  let r;
                  for (; !(r = n.next()).done; ) e(r.value);
                }
              })(t, t => {
                (r = this._trackByFn(e, t)),
                  null !== s && Mi(s.trackById, r)
                    ? (i && (s = this._verifyReinsertion(s, t, r, e)), Mi(s.item, t) || this._addIdentityChange(s, t))
                    : ((s = this._mismatch(s, t, r, e)), (i = !0)),
                  (s = s._next),
                  e++;
              }),
              (this.length = e);
          return this._truncate(s), (this.collection = t), this.isDirty;
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
            let t, e;
            for (t = this._previousItHead = this._itHead; null !== t; t = t._next) t._nextPrevious = t._next;
            for (t = this._additionsHead; null !== t; t = t._nextAdded) t.previousIndex = t.currentIndex;
            for (this._additionsHead = this._additionsTail = null, t = this._movesHead; null !== t; t = e)
              (t.previousIndex = t.currentIndex), (e = t._nextMoved);
            (this._movesHead = this._movesTail = null),
              (this._removalsHead = this._removalsTail = null),
              (this._identityChangesHead = this._identityChangesTail = null);
          }
        }
        _mismatch(t, e, n, r) {
          let s;
          return (
            null === t ? (s = this._itTail) : ((s = t._prev), this._remove(t)),
            null !== (t = null === this._linkedRecords ? null : this._linkedRecords.get(n, r))
              ? (Mi(t.item, e) || this._addIdentityChange(t, e), this._moveAfter(t, s, r))
              : null !== (t = null === this._unlinkedRecords ? null : this._unlinkedRecords.get(n, null))
              ? (Mi(t.item, e) || this._addIdentityChange(t, e), this._reinsertAfter(t, s, r))
              : (t = this._addAfter(new Oa(e, n), s, r)),
            t
          );
        }
        _verifyReinsertion(t, e, n, r) {
          let s = null === this._unlinkedRecords ? null : this._unlinkedRecords.get(n, null);
          return (
            null !== s
              ? (t = this._reinsertAfter(s, t._prev, r))
              : t.currentIndex != r && ((t.currentIndex = r), this._addToMoves(t, r)),
            t
          );
        }
        _truncate(t) {
          for (; null !== t; ) {
            const e = t._next;
            this._addToRemovals(this._unlink(t)), (t = e);
          }
          null !== this._unlinkedRecords && this._unlinkedRecords.clear(),
            null !== this._additionsTail && (this._additionsTail._nextAdded = null),
            null !== this._movesTail && (this._movesTail._nextMoved = null),
            null !== this._itTail && (this._itTail._next = null),
            null !== this._removalsTail && (this._removalsTail._nextRemoved = null),
            null !== this._identityChangesTail && (this._identityChangesTail._nextIdentityChange = null);
        }
        _reinsertAfter(t, e, n) {
          null !== this._unlinkedRecords && this._unlinkedRecords.remove(t);
          const r = t._prevRemoved,
            s = t._nextRemoved;
          return (
            null === r ? (this._removalsHead = s) : (r._nextRemoved = s),
            null === s ? (this._removalsTail = r) : (s._prevRemoved = r),
            this._insertAfter(t, e, n),
            this._addToMoves(t, n),
            t
          );
        }
        _moveAfter(t, e, n) {
          return this._unlink(t), this._insertAfter(t, e, n), this._addToMoves(t, n), t;
        }
        _addAfter(t, e, n) {
          return (
            this._insertAfter(t, e, n),
            (this._additionsTail =
              null === this._additionsTail ? (this._additionsHead = t) : (this._additionsTail._nextAdded = t)),
            t
          );
        }
        _insertAfter(t, e, n) {
          const r = null === e ? this._itHead : e._next;
          return (
            (t._next = r),
            (t._prev = e),
            null === r ? (this._itTail = t) : (r._prev = t),
            null === e ? (this._itHead = t) : (e._next = t),
            null === this._linkedRecords && (this._linkedRecords = new ka()),
            this._linkedRecords.put(t),
            (t.currentIndex = n),
            t
          );
        }
        _remove(t) {
          return this._addToRemovals(this._unlink(t));
        }
        _unlink(t) {
          null !== this._linkedRecords && this._linkedRecords.remove(t);
          const e = t._prev,
            n = t._next;
          return null === e ? (this._itHead = n) : (e._next = n), null === n ? (this._itTail = e) : (n._prev = e), t;
        }
        _addToMoves(t, e) {
          return (
            t.previousIndex === e ||
              (this._movesTail = null === this._movesTail ? (this._movesHead = t) : (this._movesTail._nextMoved = t)),
            t
          );
        }
        _addToRemovals(t) {
          return (
            null === this._unlinkedRecords && (this._unlinkedRecords = new ka()),
            this._unlinkedRecords.put(t),
            (t.currentIndex = null),
            (t._nextRemoved = null),
            null === this._removalsTail
              ? ((this._removalsTail = this._removalsHead = t), (t._prevRemoved = null))
              : ((t._prevRemoved = this._removalsTail), (this._removalsTail = this._removalsTail._nextRemoved = t)),
            t
          );
        }
        _addIdentityChange(t, e) {
          return (
            (t.item = e),
            (this._identityChangesTail =
              null === this._identityChangesTail
                ? (this._identityChangesHead = t)
                : (this._identityChangesTail._nextIdentityChange = t)),
            t
          );
        }
      }
      class Oa {
        constructor(t, e) {
          (this.item = t),
            (this.trackById = e),
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
      class Ta {
        constructor() {
          (this._head = null), (this._tail = null);
        }
        add(t) {
          null === this._head
            ? ((this._head = this._tail = t), (t._nextDup = null), (t._prevDup = null))
            : ((this._tail._nextDup = t), (t._prevDup = this._tail), (t._nextDup = null), (this._tail = t));
        }
        get(t, e) {
          let n;
          for (n = this._head; null !== n; n = n._nextDup)
            if ((null === e || e <= n.currentIndex) && Mi(n.trackById, t)) return n;
          return null;
        }
        remove(t) {
          const e = t._prevDup,
            n = t._nextDup;
          return (
            null === e ? (this._head = n) : (e._nextDup = n),
            null === n ? (this._tail = e) : (n._prevDup = e),
            null === this._head
          );
        }
      }
      class ka {
        constructor() {
          this.map = new Map();
        }
        put(t) {
          const e = t.trackById;
          let n = this.map.get(e);
          n || ((n = new Ta()), this.map.set(e, n)), n.add(t);
        }
        get(t, e) {
          const n = this.map.get(t);
          return n ? n.get(t, e) : null;
        }
        remove(t) {
          const e = t.trackById;
          return this.map.get(e).remove(t) && this.map.delete(e), t;
        }
        get isEmpty() {
          return 0 === this.map.size;
        }
        clear() {
          this.map.clear();
        }
      }
      function Aa(t, e, n) {
        const r = t.previousIndex;
        if (null === r) return r;
        let s = 0;
        return n && r < n.length && (s = n[r]), r + e + s;
      }
      class Ia {
        constructor() {}
        supports(t) {
          return t instanceof Map || Vi(t);
        }
        create() {
          return new Pa();
        }
      }
      class Pa {
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
        forEachItem(t) {
          let e;
          for (e = this._mapHead; null !== e; e = e._next) t(e);
        }
        forEachPreviousItem(t) {
          let e;
          for (e = this._previousMapHead; null !== e; e = e._nextPrevious) t(e);
        }
        forEachChangedItem(t) {
          let e;
          for (e = this._changesHead; null !== e; e = e._nextChanged) t(e);
        }
        forEachAddedItem(t) {
          let e;
          for (e = this._additionsHead; null !== e; e = e._nextAdded) t(e);
        }
        forEachRemovedItem(t) {
          let e;
          for (e = this._removalsHead; null !== e; e = e._nextRemoved) t(e);
        }
        diff(t) {
          if (t) {
            if (!(t instanceof Map || Vi(t)))
              throw new Error(`Error trying to diff '${T(t)}'. Only maps and objects are allowed`);
          } else t = new Map();
          return this.check(t) ? this : null;
        }
        onDestroy() {}
        check(t) {
          this._reset();
          let e = this._mapHead;
          if (
            ((this._appendAfter = null),
            this._forEach(t, (t, n) => {
              if (e && e.key === n) this._maybeAddToChanges(e, t), (this._appendAfter = e), (e = e._next);
              else {
                const r = this._getOrCreateRecordForKey(n, t);
                e = this._insertBeforeOrAppend(e, r);
              }
            }),
            e)
          ) {
            e._prev && (e._prev._next = null), (this._removalsHead = e);
            for (let t = e; null !== t; t = t._nextRemoved)
              t === this._mapHead && (this._mapHead = null),
                this._records.delete(t.key),
                (t._nextRemoved = t._next),
                (t.previousValue = t.currentValue),
                (t.currentValue = null),
                (t._prev = null),
                (t._next = null);
          }
          return (
            this._changesTail && (this._changesTail._nextChanged = null),
            this._additionsTail && (this._additionsTail._nextAdded = null),
            this.isDirty
          );
        }
        _insertBeforeOrAppend(t, e) {
          if (t) {
            const n = t._prev;
            return (
              (e._next = t),
              (e._prev = n),
              (t._prev = e),
              n && (n._next = e),
              t === this._mapHead && (this._mapHead = e),
              (this._appendAfter = t),
              t
            );
          }
          return (
            this._appendAfter ? ((this._appendAfter._next = e), (e._prev = this._appendAfter)) : (this._mapHead = e),
            (this._appendAfter = e),
            null
          );
        }
        _getOrCreateRecordForKey(t, e) {
          if (this._records.has(t)) {
            const n = this._records.get(t);
            this._maybeAddToChanges(n, e);
            const r = n._prev,
              s = n._next;
            return r && (r._next = s), s && (s._prev = r), (n._next = null), (n._prev = null), n;
          }
          const n = new Ra(t);
          return this._records.set(t, n), (n.currentValue = e), this._addToAdditions(n), n;
        }
        _reset() {
          if (this.isDirty) {
            let t;
            for (this._previousMapHead = this._mapHead, t = this._previousMapHead; null !== t; t = t._next)
              t._nextPrevious = t._next;
            for (t = this._changesHead; null !== t; t = t._nextChanged) t.previousValue = t.currentValue;
            for (t = this._additionsHead; null != t; t = t._nextAdded) t.previousValue = t.currentValue;
            (this._changesHead = this._changesTail = null),
              (this._additionsHead = this._additionsTail = null),
              (this._removalsHead = null);
          }
        }
        _maybeAddToChanges(t, e) {
          Mi(e, t.currentValue) || ((t.previousValue = t.currentValue), (t.currentValue = e), this._addToChanges(t));
        }
        _addToAdditions(t) {
          null === this._additionsHead
            ? (this._additionsHead = this._additionsTail = t)
            : ((this._additionsTail._nextAdded = t), (this._additionsTail = t));
        }
        _addToChanges(t) {
          null === this._changesHead
            ? (this._changesHead = this._changesTail = t)
            : ((this._changesTail._nextChanged = t), (this._changesTail = t));
        }
        _forEach(t, e) {
          t instanceof Map ? t.forEach(e) : Object.keys(t).forEach(n => e(t[n], n));
        }
      }
      class Ra {
        constructor(t) {
          (this.key = t),
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
      let Da = (() => {
          class t {
            constructor(t) {
              this.factories = t;
            }
            static create(e, n) {
              if (null != n) {
                const t = n.factories.slice();
                e = e.concat(t);
              }
              return new t(e);
            }
            static extend(e) {
              return {
                provide: t,
                useFactory: n => {
                  if (!n) throw new Error('Cannot extend IterableDiffers without a parent injector');
                  return t.create(e, n);
                },
                deps: [[t, new p(), new h()]]
              };
            }
            find(t) {
              const e = this.factories.find(e => e.supports(t));
              if (null != e) return e;
              throw new Error(
                `Cannot find a differ supporting object '${t}' of type '${((n = t), n.name || typeof n)}'`
              );
              var n;
            }
          }
          return (t.ɵprov = y({ token: t, providedIn: 'root', factory: () => new t([new Sa()]) })), t;
        })(),
        ja = (() => {
          class t {
            constructor(t) {
              this.factories = t;
            }
            static create(e, n) {
              if (n) {
                const t = n.factories.slice();
                e = e.concat(t);
              }
              return new t(e);
            }
            static extend(e) {
              return {
                provide: t,
                useFactory: n => {
                  if (!n) throw new Error('Cannot extend KeyValueDiffers without a parent injector');
                  return t.create(e, n);
                },
                deps: [[t, new p(), new h()]]
              };
            }
            find(t) {
              const e = this.factories.find(e => e.supports(t));
              if (e) return e;
              throw new Error(`Cannot find a differ supporting object '${t}'`);
            }
          }
          return (t.ɵprov = y({ token: t, providedIn: 'root', factory: () => new t([new Ia()]) })), t;
        })();
      const Na = [new Ia()],
        Ma = new Da([new Sa()]),
        La = new ja(Na);
      let Fa = (() => {
        class t {}
        return (t.__NG_ELEMENT_ID__ = () => Va(t, fa)), t;
      })();
      const Va = function(t, e) {
        return ci(t, e, ae(), se());
      };
      let Ha = (() => {
        class t {}
        return (t.__NG_ELEMENT_ID__ = () => Ua(t, fa)), t;
      })();
      const Ua = function(t, e) {
          return ui(t, e, ae(), se());
        },
        za = {};
      class $a extends pa {
        constructor(t) {
          super(), (this.ngModule = t);
        }
        resolveComponentFactory(t) {
          const e = At(t);
          return new Za(e, this.ngModule);
        }
      }
      function Ba(t) {
        const e = [];
        for (let n in t) t.hasOwnProperty(n) && e.push({ propName: t[n], templateName: n });
        return e;
      }
      const qa = new q('SCHEDULER_TOKEN', { providedIn: 'root', factory: () => Ke });
      class Za extends ha {
        constructor(t, e) {
          super(),
            (this.componentDef = t),
            (this.ngModule = e),
            (this.componentType = t.type),
            (this.selector = t.selectors.map(Tr).join(',')),
            (this.ngContentSelectors = t.ngContentSelectors ? t.ngContentSelectors : []),
            (this.isBoundToModule = !!e);
        }
        get inputs() {
          return Ba(this.componentDef.inputs);
        }
        get outputs() {
          return Ba(this.componentDef.outputs);
        }
        create(t, e, n, r) {
          const s = (r = r || this.ngModule)
              ? (function(t, e) {
                  return {
                    get: (n, r, s) => {
                      const i = t.get(n, za, s);
                      return i !== za || r === za ? i : e.get(n, r, s);
                    }
                  };
                })(t, r.injector)
              : t,
            i = s.get(ma, $t),
            o = s.get(va, null),
            a = i.createRenderer(null, this.componentDef),
            l = this.componentDef.selectors[0][0] || 'div',
            c = n
              ? (function(t, e, n) {
                  if (zt(t)) return t.selectRootElement(e, n === mt.ShadowDom);
                  let r = 'string' == typeof e ? t.querySelector(e) : e;
                  return (r.textContent = ''), r;
                })(a, n, this.componentDef.encapsulation)
              : Br(
                  l,
                  i.createRenderer(null, this.componentDef),
                  (function(t) {
                    const e = t.toLowerCase();
                    return 'svg' === e
                      ? 'http://www.w3.org/2000/svg'
                      : 'math' === e
                      ? 'http://www.w3.org/1998/MathML/'
                      : null;
                  })(l)
                ),
            u = this.componentDef.onPush ? 576 : 528,
            h = 'string' == typeof n && /^#root-ng-internal-isolated-\d+/.test(n),
            d = { components: [], scheduler: Ke, clean: Os, playerHandler: null, flags: 0 },
            p = es(0, -1, null, 1, 0, null, null, null, null, null),
            f = qr(null, p, d, u, null, null, i, a, o, s);
          let g, m;
          Se(f, null);
          try {
            const t = (function(t, e, n, r, s, i) {
              const o = n[1];
              n[20] = t;
              const a = Zr(o, null, 0, 3, null, null),
                l = (a.mergedAttrs = e.hostAttrs);
              null !== l &&
                (Di(a, l, !0),
                null !== t &&
                  (Ve(s, t, l), null !== a.classes && ni(s, t, a.classes), null !== a.styles && ei(s, t, a.styles)));
              const c = r.createRenderer(t, e),
                u = qr(n, ts(e), null, e.onPush ? 64 : 16, n[20], a, r, c, void 0);
              return (
                o.firstCreatePass && (on(en(a, n), o, e.type), us(o, a), ds(a, n.length, 1)), ws(n, u), (n[20] = u)
              );
            })(c, this.componentDef, f, i, a);
            if (c)
              if (n) Ve(a, c, ['ng-version', Ca.full]);
              else {
                const { attrs: t, classes: e } = (function(t) {
                  const e = [],
                    n = [];
                  let r = 1,
                    s = 2;
                  for (; r < t.length; ) {
                    let i = t[r];
                    if ('string' == typeof i) 2 === s ? '' !== i && e.push(i, t[++r]) : 8 === s && n.push(i);
                    else {
                      if (!Cr(s)) break;
                      s = i;
                    }
                    r++;
                  }
                  return { attrs: e, classes: n };
                })(this.componentDef.selectors[0]);
                t && Ve(a, c, t), e && e.length > 0 && ni(a, c, e.join(' '));
              }
            if (((m = Qt(p, 0)), void 0 !== e)) {
              const t = (m.projection = []);
              for (let n = 0; n < this.ngContentSelectors.length; n++) {
                const r = e[n];
                t.push(null != r ? Array.from(r) : null);
              }
            }
            (g = (function(t, e, n, r, s) {
              const i = n[1],
                o = (function(t, e, n) {
                  const r = ae();
                  t.firstCreatePass && (n.providersResolver && n.providersResolver(n), cs(t, r, 1), ps(t, e, n));
                  const s = hn(e, t, e.length - 1, r);
                  fr(s, e);
                  const i = Zt(r, e);
                  return i && fr(i, e), s;
                })(i, n, e);
              r.components.push(o),
                (t[8] = o),
                s && s.forEach(t => t(o, e)),
                e.contentQueries && e.contentQueries(1, o, n.length - 1);
              const a = ae();
              if (i.firstCreatePass && (null !== e.hostBindings || null !== e.hostAttrs)) {
                Ie(a.index - 20);
                const t = n[1];
                os(t, e), as(t, n, e.hostVars), ls(e, o);
              }
              return o;
            })(t, this.componentDef, f, d, [Qo])),
              Qr(p, f, null);
          } finally {
            ke();
          }
          const y = new Qa(this.componentType, g, li(fa, m, f), f, m);
          return (n && !h) || (p.node.child = m), y;
        }
      }
      class Qa extends class {} {
        constructor(t, e, n, r, s) {
          super(),
            (this.location = n),
            (this._rootLView = r),
            (this._tNode = s),
            (this.destroyCbs = []),
            (this.instance = e),
            (this.hostView = this.changeDetectorRef = new si(r)),
            (function(t, e, n, r) {
              let s = t.node;
              null == s && (t.node = s = ns(0, null, 2, -1, null, null)), (r[6] = s);
            })(r[1], 0, 0, r),
            (this.componentType = t);
        }
        get injector() {
          return new fn(this._tNode, this._rootLView);
        }
        destroy() {
          this.destroyCbs &&
            (this.destroyCbs.forEach(t => t()),
            (this.destroyCbs = null),
            !this.hostView.destroyed && this.hostView.destroy());
        }
        onDestroy(t) {
          this.destroyCbs && this.destroyCbs.push(t);
        }
      }
      const Ga = void 0;
      var Wa = [
        'en',
        [['a', 'p'], ['AM', 'PM'], Ga],
        [['AM', 'PM'], Ga, Ga],
        [
          ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
          ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
          ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
          ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa']
        ],
        Ga,
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
        Ga,
        [
          ['B', 'A'],
          ['BC', 'AD'],
          ['Before Christ', 'Anno Domini']
        ],
        0,
        [6, 0],
        ['M/d/yy', 'MMM d, y', 'MMMM d, y', 'EEEE, MMMM d, y'],
        ['h:mm a', 'h:mm:ss a', 'h:mm:ss a z', 'h:mm:ss a zzzz'],
        ['{1}, {0}', Ga, "{1} 'at' {0}", Ga],
        ['.', ',', ';', '%', '+', '-', 'E', '\xd7', '\u2030', '\u221e', 'NaN', ':'],
        ['#,##0.###', '#,##0%', '\xa4#,##0.00', '#E0'],
        'USD',
        '$',
        'US Dollar',
        {},
        'ltr',
        function(t) {
          let e = Math.floor(Math.abs(t)),
            n = t.toString().replace(/^[^.]*\.?/, '').length;
          return 1 === e && 0 === n ? 1 : 5;
        }
      ];
      let Ka = {};
      function Ja(t, e, n) {
        'string' != typeof e && ((n = e), (e = t[nl.LocaleId])),
          (e = e.toLowerCase().replace(/_/g, '-')),
          (Ka[e] = t),
          n && (Ka[e][nl.ExtraData] = n);
      }
      function Ya(t) {
        const e = (function(t) {
          return t.toLowerCase().replace(/_/g, '-');
        })(t);
        let n = el(e);
        if (n) return n;
        const r = e.split('-')[0];
        if (((n = el(r)), n)) return n;
        if ('en' === r) return Wa;
        throw new Error(`Missing locale data for the locale "${t}".`);
      }
      function Xa(t) {
        return Ya(t)[nl.CurrencyCode] || null;
      }
      function tl(t) {
        return Ya(t)[nl.PluralCase];
      }
      function el(t) {
        return t in Ka || (Ka[t] = L.ng && L.ng.common && L.ng.common.locales && L.ng.common.locales[t]), Ka[t];
      }
      const nl = (function() {
          var t = {
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
            CurrencyCode: 15,
            CurrencySymbol: 16,
            CurrencyName: 17,
            Currencies: 18,
            Directionality: 19,
            PluralCase: 20,
            ExtraData: 21
          };
          return (
            (t[t.LocaleId] = 'LocaleId'),
            (t[t.DayPeriodsFormat] = 'DayPeriodsFormat'),
            (t[t.DayPeriodsStandalone] = 'DayPeriodsStandalone'),
            (t[t.DaysFormat] = 'DaysFormat'),
            (t[t.DaysStandalone] = 'DaysStandalone'),
            (t[t.MonthsFormat] = 'MonthsFormat'),
            (t[t.MonthsStandalone] = 'MonthsStandalone'),
            (t[t.Eras] = 'Eras'),
            (t[t.FirstDayOfWeek] = 'FirstDayOfWeek'),
            (t[t.WeekendRange] = 'WeekendRange'),
            (t[t.DateFormat] = 'DateFormat'),
            (t[t.TimeFormat] = 'TimeFormat'),
            (t[t.DateTimeFormat] = 'DateTimeFormat'),
            (t[t.NumberSymbols] = 'NumberSymbols'),
            (t[t.NumberFormats] = 'NumberFormats'),
            (t[t.CurrencyCode] = 'CurrencyCode'),
            (t[t.CurrencySymbol] = 'CurrencySymbol'),
            (t[t.CurrencyName] = 'CurrencyName'),
            (t[t.Currencies] = 'Currencies'),
            (t[t.Directionality] = 'Directionality'),
            (t[t.PluralCase] = 'PluralCase'),
            (t[t.ExtraData] = 'ExtraData'),
            t
          );
        })(),
        rl = ['zero', 'one', 'two', 'few', 'many'],
        sl = /^\s*(\ufffd\d+:?\d*\ufffd)\s*,\s*(select|plural)\s*,/,
        il = /\ufffd\/?\*(\d+:\d+)\ufffd/gi,
        ol = /\ufffd(\/?[#*!]\d+):?\d*\ufffd/gi,
        al = /\ufffd(\d+):?\d*\ufffd/gi,
        ll = /({\s*\ufffd\d+:?\d*\ufffd\s*,\s*\S{6}\s*,[\s\S]*})/gi;
      function cl(t) {
        if (!t) return [];
        let e = 0;
        const n = [],
          r = [],
          s = /[{}]/g;
        let i;
        for (s.lastIndex = 0; (i = s.exec(t)); ) {
          const s = i.index;
          if ('}' == i[0]) {
            if ((n.pop(), 0 == n.length)) {
              const n = t.substring(e, s);
              sl.test(n) ? r.push(ul(n)) : r.push(n), (e = s + 1);
            }
          } else {
            if (0 == n.length) {
              const n = t.substring(e, s);
              r.push(n), (e = s + 1);
            }
            n.push('{');
          }
        }
        const o = t.substring(e);
        return r.push(o), r;
      }
      function ul(t) {
        const e = [],
          n = [];
        let r = 1,
          s = 0;
        const i = cl(
          (t = t.replace(sl, function(t, e, n) {
            return (r = 'select' === n ? 0 : 1), (s = parseInt(e.substr(1), 10)), '';
          }))
        );
        for (let o = 0; o < i.length; ) {
          let t = i[o++].trim();
          1 === r && (t = t.replace(/\s*(?:=)?(\w+)\s*/, '$1')), t.length && e.push(t);
          const s = cl(i[o++]);
          e.length > n.length && n.push(s);
        }
        return { type: r, mainBinding: s, cases: e, values: n };
      }
      function hl(t) {
        let e,
          n,
          r = '',
          s = 0,
          i = !1;
        for (; null !== (e = il.exec(t)); )
          i
            ? e[0] === `\ufffd/*${n}\ufffd` && ((s = e.index), (i = !1))
            : ((r += t.substring(s, e.index + e[0].length)), (n = e[1]), (i = !0));
        return (r += t.substr(s)), r;
      }
      function dl(t, e, n, r = null) {
        const s = [null, null],
          i = t.split(al);
        let o = 0;
        for (let a = 0; a < i.length; a++) {
          const t = i[a];
          if (1 & a) {
            const e = parseInt(t, 10);
            s.push(-1 - e), (o |= ml(e));
          } else '' !== t && s.push(t);
        }
        return s.push((e << 2) | (n ? 1 : 0)), n && s.push(n, r), (s[0] = o), (s[1] = s.length - 2), s;
      }
      function pl(t, e = 0) {
        let n;
        e |= ml(t.mainBinding);
        for (let r = 0; r < t.values.length; r++) {
          const s = t.values[r];
          for (let t = 0; t < s.length; t++) {
            const r = s[t];
            if ('string' == typeof r) for (; (n = al.exec(r)); ) e |= ml(parseInt(n[1], 10));
            else e = pl(r, e);
          }
        }
        return e;
      }
      const fl = [];
      let gl = -1;
      function ml(t) {
        return 1 << Math.min(t, 31);
      }
      const yl = [];
      let bl;
      function _l(t) {
        return t + bl++;
      }
      function vl(t, e, n, r, s) {
        const i = e.next;
        r || (r = n),
          r === n && e !== n.child
            ? ((e.next = n.child), (n.child = e))
            : r !== n && e !== r.next
            ? ((e.next = r.next), (r.next = e))
            : (e.next = null),
          n !== s[6] && (e.parent = n);
        let o = e.next;
        for (; o; ) o.next === e && (o.next = i), (o = o.next);
        if (1 === e.type) return Xs(t, s, e), e;
        Gs(t, s, Zt(e, s), e);
        const a = s[e.index];
        return 0 !== e.type && Dt(a) && Gs(t, s, a[7], e), e;
      }
      function wl(t) {
        return void 0 === t;
      }
      function Cl(t, e, n, r, s, i) {
        const o = ae();
        e[n + 20] = s;
        const a = Zr(t, e[6], n, r, i, null);
        return o && o.next === a && (o.next = null), a;
      }
      function Sl(t, e, n, r) {
        const s = r[11];
        let i = null,
          o = null;
        const a = [];
        for (let l = 0; l < e.length; l++) {
          const c = e[l];
          if ('string' == typeof c) {
            const t = Ns(c, s),
              u = e[++l];
            (o = i), (i = Cl(n, r, u, 3, t, null)), a.push(u), ue();
          } else if ('number' == typeof c)
            switch (7 & c) {
              case 1:
                const s = c >>> 17;
                let u;
                (u = s === t ? r[6] : Qt(n, s)), (o = vl(n, i, u, o, r));
                break;
              case 0:
                const h = c >= 0,
                  d = (h ? c : ~c) >>> 3;
                a.push(d), (o = i), (i = Qt(n, d)), i && le(i, h);
                break;
              case 5:
                (o = i = Qt(n, c >>> 3)), le(i, !1);
                break;
              case 4:
                const p = e[++l],
                  f = e[++l];
                gs(Qt(n, c >>> 3), r, p, f, null, null);
                break;
              default:
                throw new Error(`Unable to determine the type of mutate operation for "${c}"`);
            }
          else
            switch (c) {
              case Mr:
                const t = e[++l],
                  u = e[++l],
                  h = s.createComment(t);
                (o = i), (i = Cl(n, r, u, 5, h, null)), a.push(u), fr(h, r), (i.activeCaseIndex = null), ue();
                break;
              case Nr:
                const d = e[++l],
                  p = e[++l];
                (o = i), (i = Cl(n, r, p, 3, s.createElement(d), d)), a.push(p);
                break;
              default:
                throw new Error(`Unable to determine the type of mutate operation for "${c}"`);
            }
        }
        return ue(), a;
      }
      function El(t, e, n, r) {
        const s = Qt(t, n),
          i = qt(n, e);
        i && Ks(e[11], i);
        const o = Gt(e, n);
        if (Dt(o)) {
          const t = o;
          0 !== s.type && Ks(e[11], t[7]);
        }
        r && (s.flags |= 64);
      }
      function xl(t, e, n) {
        (function(t, e, n) {
          const r = ie();
          (fl[++gl] = t),
            fo(!0),
            r.firstCreatePass &&
              null === r.data[t + 20] &&
              (function(t, e, n, r, s) {
                const i = e.blueprint.length - 20;
                bl = 0;
                const o = ae(),
                  a = ce() ? o : o && o.parent;
                let l = a && a !== t[6] ? a.index - 20 : n,
                  c = 0;
                yl[c] = l;
                const u = [];
                if (n > 0 && o !== a) {
                  let t = o.index - 20;
                  ce() || (t = ~t), u.push((t << 3) | 0);
                }
                const h = [],
                  d = [];
                if ('' === r && wl(s)) u.push(r, _l(i), (l << 17) | 1);
                else {
                  const t = (function(t, e) {
                      if (wl(e)) return hl(t);
                      {
                        const n = t.indexOf(`:${e}\ufffd`) + 2 + e.toString().length,
                          r = t.search(new RegExp(`\ufffd\\/\\*\\d+:${e}\ufffd`));
                        return hl(t.substring(n, r));
                      }
                    })(r, s),
                    e = ((p = t), p.replace(Nl, ' ')).split(ol);
                  for (let n = 0; n < e.length; n++) {
                    let r = e[n];
                    if (1 & n)
                      if ('/' === r.charAt(0)) {
                        if ('#' === r.charAt(1)) {
                          const t = parseInt(r.substr(2), 10);
                          (l = yl[--c]), u.push((t << 3) | 5);
                        }
                      } else {
                        const t = parseInt(r.substr(1), 10),
                          e = '#' === r.charAt(0);
                        u.push(((e ? t : ~t) << 3) | 0, (l << 17) | 1), e && (yl[++c] = l = t);
                      }
                    else {
                      const e = cl(r);
                      for (let n = 0; n < e.length; n++)
                        if (1 & n) {
                          const r = e[n];
                          if ('object' != typeof r)
                            throw new Error(`Unable to parse ICU expression in "${t}" message.`);
                          const s = _l(i);
                          u.push(Mr, '', s, (l << 17) | 1);
                          const o = pl(r);
                          Rl(d, r, s, s);
                          const a = d.length - 1;
                          h.push(ml(r.mainBinding), 3, -1 - r.mainBinding, (s << 2) | 2, a, o, 2, (s << 2) | 3, a);
                        } else if ('' !== e[n]) {
                          const t = e[n],
                            r = t.match(al),
                            s = _l(i);
                          u.push(r ? '' : t, s, (l << 17) | 1), r && at(dl(t, s), h);
                        }
                    }
                  }
                }
                var p;
                bl > 0 &&
                  (function(t, e, n) {
                    if (n > 0 && t.firstCreatePass) {
                      for (let r = 0; r < n; r++) t.blueprint.push(null), t.data.push(null), e.push(null);
                      t.expandoInstructions ? t.expandoInstructions.push(n) : (t.expandoStartIndex += n);
                    }
                  })(e, t, bl),
                  (e.data[n + 20] = { vars: bl, create: u, update: h, icus: d.length ? d : null });
              })(se(), r, t, e, n);
        })(t, e, n),
          (function() {
            const t = se();
            !(function(t, e) {
              const n = fl[gl--],
                r = t.data[n + 20],
                s = ae(),
                i = Sl(n, r.create, t, e);
              let o = n + 1;
              for (; o <= s.index - 20; ) {
                -1 === i.indexOf(o) && El(t, e, o, !0);
                const n = Qt(t, o);
                !n ||
                  (0 !== n.type && 3 !== n.type && 4 !== n.type) ||
                  null === n.localNames ||
                  (o += n.localNames.length >> 1),
                  o++;
              }
            })(ie(), t),
              fo(!1);
          })();
      }
      function Ol(t, e) {
        !(function(t, e, n, r) {
          const s = ae().index - 20,
            i = [];
          for (let o = 0; o < r.length; o += 2) {
            const a = r[o],
              l = r[o + 1].split(ll);
            for (let r = 0; r < l.length; r++) {
              const o = l[r];
              if (1 & r) throw new Error('ICU expressions are not yet supported in attributes');
              if ('' !== o)
                if (o.match(al)) e.firstCreatePass && null === e.data[n + 20] && at(dl(o, s, a), i);
                else {
                  const n = Qt(e, s);
                  3 === n.type && gs(n, t, a, o, null, null);
                  const r = null !== n.inputs && n.inputs[a];
                  r && Is(e, t, r, a, o);
                }
            }
          }
          e.firstCreatePass && null === e.data[n + 20] && (e.data[n + 20] = i);
        })(se(), ie(), t, e);
      }
      let Tl = 0,
        kl = 0;
      function Al(t) {
        return Ui(se(), ge(), t) && (Tl |= 1 << kl), kl++, Al;
      }
      function Il(t) {
        if (kl) {
          const e = ie(),
            n = e.data[t + 20];
          let r,
            s = null;
          Array.isArray(n) ? (r = n) : ((r = n.update), (s = n.icus));
          const i = fe() - kl - 1,
            o = se();
          !(function t(e, n, r, s, i, o, a = !1) {
            let l = !1;
            for (let c = 0; c < e.length; c++) {
              const u = e[c],
                h = e[++c];
              if (a || u & s) {
                let a = '';
                for (let u = c + 1; u <= c + h; u++) {
                  const c = e[u];
                  if ('string' == typeof c) a += c;
                  else if ('number' == typeof c)
                    if (c < 0) a += Ge(o[r - c]);
                    else {
                      const h = c >>> 2;
                      let d, p, f;
                      switch (3 & c) {
                        case 1:
                          const c = e[++u],
                            g = e[++u];
                          ss(i, Qt(i, h), o, c, a, o[11], g, !1);
                          break;
                        case 0:
                          Ps(o, h, a);
                          break;
                        case 2:
                          if (((d = e[++u]), (p = n[d]), (f = Qt(i, h)), null !== f.activeCaseIndex)) {
                            const t = p.remove[f.activeCaseIndex];
                            for (let e = 0; e < t.length; e++) {
                              const r = t[e];
                              switch (7 & r) {
                                case 3:
                                  El(i, o, r >>> 3, !1);
                                  break;
                                case 6:
                                  const s = Qt(i, t[e + 1] >>> 3).activeCaseIndex;
                                  null !== s && at(n[r >>> 3].remove[s], t);
                              }
                            }
                          }
                          const m = Pl(p, a);
                          (f.activeCaseIndex = -1 !== m ? m : null), m > -1 && (Sl(-1, p.create[m], i, o), (l = !0));
                          break;
                        case 3:
                          (d = e[++u]),
                            (p = n[d]),
                            (f = Qt(i, h)),
                            null !== f.activeCaseIndex && t(p.update[f.activeCaseIndex], n, r, s, i, o, l);
                      }
                    }
                }
              }
              c += h;
            }
          })(r, s, i, Tl, e, o),
            (Tl = 0),
            (kl = 0);
        }
      }
      function Pl(t, e) {
        let n = t.cases.indexOf(e);
        if (-1 === n)
          switch (t.type) {
            case 1: {
              const r = (function(t, e) {
                const n = tl(e)(parseInt(t, 10)),
                  r = rl[n];
                return void 0 !== r ? r : 'other';
              })(e, Ml);
              (n = t.cases.indexOf(r)), -1 === n && 'other' !== r && (n = t.cases.indexOf('other'));
              break;
            }
            case 0:
              n = t.cases.indexOf('other');
          }
        return n;
      }
      function Rl(t, e, n, r) {
        const s = [],
          i = [],
          o = [],
          a = [],
          l = [];
        for (let c = 0; c < e.values.length; c++) {
          const u = e.values[c],
            h = [];
          for (let t = 0; t < u.length; t++) {
            const e = u[t];
            if ('string' != typeof e) {
              const n = h.push(e) - 1;
              u[t] = `\x3c!--\ufffd${n}\ufffd--\x3e`;
            }
          }
          const d = Dl(u.join(''), n, h, t, r);
          s.push(d.create), i.push(d.remove), o.push(d.update), a.push(d.vars), l.push(d.childIcus);
        }
        t.push({ type: e.type, vars: a, childIcus: l, cases: e.cases, create: s, remove: i, update: o }),
          (bl += Math.max(...a));
      }
      function Dl(t, e, n, r, s) {
        const i = new Fn(Ut()).getInertBodyElement(t);
        if (!i) throw new Error('Unable to generate inert body element');
        const o = { vars: 0, childIcus: [], create: [], remove: [], update: [] };
        return (
          (function t(e, n, r, s, i, o) {
            if (e) {
              const a = [];
              for (; e; ) {
                const l = e.nextSibling,
                  c = o + ++n.vars;
                switch (e.nodeType) {
                  case Node.ELEMENT_NODE:
                    const l = e,
                      u = l.tagName.toLowerCase();
                    if (Wn.hasOwnProperty(u)) {
                      n.create.push(Nr, u, c, (r << 17) | 1);
                      const a = l.attributes;
                      for (let t = 0; t < a.length; t++) {
                        const e = a.item(t),
                          r = e.name.toLowerCase();
                        e.value.match(al)
                          ? Yn.hasOwnProperty(r) &&
                            at(
                              Kn[r]
                                ? dl(e.value, c, e.name, Un)
                                : Jn[r]
                                ? dl(e.value, c, e.name, zn)
                                : dl(e.value, c, e.name),
                              n.update
                            )
                          : n.create.push((c << 3) | 4, e.name, e.value);
                      }
                      t(e.firstChild, n, c, s, i, o), n.remove.push((c << 3) | 3);
                    } else n.vars--;
                    break;
                  case Node.TEXT_NODE:
                    const h = e.textContent || '',
                      d = h.match(al);
                    n.create.push(d ? '' : h, c, (r << 17) | 1),
                      n.remove.push((c << 3) | 3),
                      d && at(dl(h, c), n.update);
                    break;
                  case Node.COMMENT_NODE:
                    const p = jl.exec(e.textContent || '');
                    if (p) {
                      const t = parseInt(p[1], 10);
                      n.create.push(Mr, '', c, (r << 17) | 1), a.push([s[t], c]);
                    } else n.vars--;
                    break;
                  default:
                    n.vars--;
                }
                e = l;
              }
              for (let t = 0; t < a.length; t++) {
                const e = a[t][0],
                  r = a[t][1];
                Rl(i, e, r, o + n.vars);
                const s = i.length - 1;
                (n.vars += Math.max(...i[s].vars)), n.childIcus.push(s);
                const l = pl(e);
                n.update.push(ml(e.mainBinding), 3, -1 - e.mainBinding, (r << 2) | 2, s, l, 2, (r << 2) | 3, s),
                  n.remove.push((s << 3) | 6, (r << 3) | 3);
              }
            }
          })((or(i) || i).firstChild, o, e, n, r, s),
          o
        );
      }
      const jl = /\ufffd(\d+)\ufffd/,
        Nl = /\uE500/g;
      let Ml = 'en-US';
      function Ll(t) {
        var e, n;
        (n = 'Expected localeId to be defined'),
          null == (e = t) &&
            (function(t, e, n, r) {
              throw new Error('ASSERTION ERROR: ' + t + ` [Expected=> null != ${e} <=Actual]`);
            })(n, e),
          'string' == typeof t && (Ml = t.toLowerCase().replace(/_/g, '-'));
      }
      const Fl = new Map();
      class Vl extends it {
        constructor(t, e) {
          super(),
            (this._parent = e),
            (this._bootstrapComponents = []),
            (this.injector = this),
            (this.destroyCbs = []),
            (this.componentFactoryResolver = new $a(this));
          const n = Pt(t),
            r = t[z] || null;
          r && Ll(r),
            (this._bootstrapComponents = Je(n.bootstrap)),
            (this._r3Injector = vi(
              t,
              e,
              [
                { provide: it, useValue: this },
                { provide: pa, useValue: this.componentFactoryResolver }
              ],
              T(t)
            )),
            this._r3Injector._resolveInjectorDefTypes(),
            (this.instance = this.get(t));
        }
        get(t, e = ki.THROW_IF_NOT_FOUND, n = f.Default) {
          return t === ki || t === it || t === Z ? this : this._r3Injector.get(t, e, n);
        }
        destroy() {
          const t = this._r3Injector;
          !t.destroyed && t.destroy(), this.destroyCbs.forEach(t => t()), (this.destroyCbs = null);
        }
        onDestroy(t) {
          this.destroyCbs.push(t);
        }
      }
      class Hl extends ot {
        constructor(t) {
          super(),
            (this.moduleType = t),
            null !== Pt(t) &&
              (function t(e) {
                if (null !== e.ɵmod.id) {
                  const t = e.ɵmod.id;
                  (function(t, e, n) {
                    if (e && e !== n) throw new Error(`Duplicate module registered for ${t} - ${T(e)} vs ${T(e.name)}`);
                  })(t, Fl.get(t), e),
                    Fl.set(t, e);
                }
                let n = e.ɵmod.imports;
                n instanceof Function && (n = n()), n && n.forEach(e => t(e));
              })(t);
        }
        create(t) {
          return new Vl(this.moduleType, t);
        }
      }
      function Ul(t, e, n) {
        const r = pe() + t,
          s = se();
        return s[r] === kr
          ? Hi(s, r, n ? e.call(n) : e())
          : (function(t, e) {
              return t[e];
            })(s, r);
      }
      function zl(t, e, n, r) {
        return (function(t, e, n, r, s, i) {
          const o = e + n;
          return Ui(t, o, s) ? Hi(t, o + 1, i ? r.call(i, s) : r(s)) : ql(t, o + 1);
        })(se(), pe(), t, e, n, r);
      }
      function $l(t, e, n, r, s) {
        return (function(t, e, n, r, s, i, o) {
          const a = e + n;
          return zi(t, a, s, i) ? Hi(t, a + 2, o ? r.call(o, s, i) : r(s, i)) : ql(t, a + 2);
        })(se(), pe(), t, e, n, r, s);
      }
      function Bl(t, e, n, r, s, i) {
        return Zl(se(), pe(), t, e, n, r, s, i);
      }
      function ql(t, e) {
        const n = t[e];
        return n === kr ? void 0 : n;
      }
      function Zl(t, e, n, r, s, i, o, a) {
        const l = e + n;
        return (function(t, e, n, r, s) {
          const i = zi(t, e, n, r);
          return Ui(t, e + 2, s) || i;
        })(t, l, s, i, o)
          ? Hi(t, l + 3, a ? r.call(a, s, i, o) : r(s, i, o))
          : ql(t, l + 3);
      }
      function Ql(t, e) {
        const n = ie();
        let r;
        const s = t + 20;
        n.firstCreatePass
          ? ((r = (function(t, e) {
              if (e)
                for (let n = e.length - 1; n >= 0; n--) {
                  const r = e[n];
                  if (t === r.name) return r;
                }
              throw new Error(`The pipe '${t}' could not be found!`);
            })(e, n.pipeRegistry)),
            (n.data[s] = r),
            r.onDestroy && (n.destroyHooks || (n.destroyHooks = [])).push(s, r.onDestroy))
          : (r = n.data[s]);
        const i = r.factory || (r.factory = It(r.type)),
          o = X(Qi),
          a = Xe(!1),
          l = i();
        return (
          Xe(a),
          X(o),
          (function(t, e, n, r) {
            const s = n + 20;
            s >= t.data.length && ((t.data[s] = null), (t.blueprint[s] = null)), (e[s] = r);
          })(n, se(), t, l),
          l
        );
      }
      function Gl(t, e, n, r, s) {
        const i = se(),
          o = Gt(i, t);
        return (function(t, e) {
          return Li.isWrapped(e) && ((e = Li.unwrap(e)), (t[fe()] = kr)), e;
        })(
          i,
          (function(t, e) {
            return t[1].data[e + 20].pure;
          })(i, t)
            ? Zl(i, pe(), e, o.transform, n, r, s, o)
            : o.transform(n, r, s)
        );
      }
      class Wl extends r.a {
        constructor(t = !1) {
          super(), (this.__isAsync = t);
        }
        emit(t) {
          super.next(t);
        }
        subscribe(t, e, n) {
          let r,
            i = t => null,
            o = () => null;
          t && 'object' == typeof t
            ? ((r = this.__isAsync
                ? e => {
                    setTimeout(() => t.next(e));
                  }
                : e => {
                    t.next(e);
                  }),
              t.error &&
                (i = this.__isAsync
                  ? e => {
                      setTimeout(() => t.error(e));
                    }
                  : e => {
                      t.error(e);
                    }),
              t.complete &&
                (o = this.__isAsync
                  ? () => {
                      setTimeout(() => t.complete());
                    }
                  : () => {
                      t.complete();
                    }))
            : ((r = this.__isAsync
                ? e => {
                    setTimeout(() => t(e));
                  }
                : e => {
                    t(e);
                  }),
              e &&
                (i = this.__isAsync
                  ? t => {
                      setTimeout(() => e(t));
                    }
                  : t => {
                      e(t);
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
          return t instanceof s.a && t.add(a), a;
        }
      }
      function Kl() {
        return this._results[Ni()]();
      }
      class Jl {
        constructor() {
          (this.dirty = !0), (this._results = []), (this.changes = new Wl()), (this.length = 0);
          const t = Ni(),
            e = Jl.prototype;
          e[t] || (e[t] = Kl);
        }
        map(t) {
          return this._results.map(t);
        }
        filter(t) {
          return this._results.filter(t);
        }
        find(t) {
          return this._results.find(t);
        }
        reduce(t, e) {
          return this._results.reduce(t, e);
        }
        forEach(t) {
          this._results.forEach(t);
        }
        some(t) {
          return this._results.some(t);
        }
        toArray() {
          return this._results.slice();
        }
        toString() {
          return this._results.toString();
        }
        reset(t) {
          (this._results = (function t(e, n) {
            void 0 === n && (n = e);
            for (let r = 0; r < e.length; r++) {
              let s = e[r];
              Array.isArray(s) ? (n === e && (n = e.slice(0, r)), t(s, n)) : n !== e && n.push(s);
            }
            return n;
          })(t)),
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
      class Yl {
        constructor(t) {
          (this.queryList = t), (this.matches = null);
        }
        clone() {
          return new Yl(this.queryList);
        }
        setDirty() {
          this.queryList.setDirty();
        }
      }
      class Xl {
        constructor(t = []) {
          this.queries = t;
        }
        createEmbeddedView(t) {
          const e = t.queries;
          if (null !== e) {
            const n = null !== t.contentQueries ? t.contentQueries[0] : e.length,
              r = [];
            for (let t = 0; t < n; t++) {
              const n = e.getByIndex(t);
              r.push(this.queries[n.indexInDeclarationView].clone());
            }
            return new Xl(r);
          }
          return null;
        }
        insertView(t) {
          this.dirtyQueriesWithMatches(t);
        }
        detachView(t) {
          this.dirtyQueriesWithMatches(t);
        }
        dirtyQueriesWithMatches(t) {
          for (let e = 0; e < this.queries.length; e++) null !== fc(t, e).matches && this.queries[e].setDirty();
        }
      }
      class tc {
        constructor(t, e, n, r = null) {
          (this.predicate = t), (this.descendants = e), (this.isStatic = n), (this.read = r);
        }
      }
      class ec {
        constructor(t = []) {
          this.queries = t;
        }
        elementStart(t, e) {
          for (let n = 0; n < this.queries.length; n++) this.queries[n].elementStart(t, e);
        }
        elementEnd(t) {
          for (let e = 0; e < this.queries.length; e++) this.queries[e].elementEnd(t);
        }
        embeddedTView(t) {
          let e = null;
          for (let n = 0; n < this.length; n++) {
            const r = null !== e ? e.length : 0,
              s = this.getByIndex(n).embeddedTView(t, r);
            s && ((s.indexInDeclarationView = n), null !== e ? e.push(s) : (e = [s]));
          }
          return null !== e ? new ec(e) : null;
        }
        template(t, e) {
          for (let n = 0; n < this.queries.length; n++) this.queries[n].template(t, e);
        }
        getByIndex(t) {
          return this.queries[t];
        }
        get length() {
          return this.queries.length;
        }
        track(t) {
          this.queries.push(t);
        }
      }
      class nc {
        constructor(t, e = -1) {
          (this.metadata = t),
            (this.matches = null),
            (this.indexInDeclarationView = -1),
            (this.crossesNgTemplate = !1),
            (this._appliesToNextNode = !0),
            (this._declarationNodeIndex = e);
        }
        elementStart(t, e) {
          this.isApplyingToNode(e) && this.matchTNode(t, e);
        }
        elementEnd(t) {
          this._declarationNodeIndex === t.index && (this._appliesToNextNode = !1);
        }
        template(t, e) {
          this.elementStart(t, e);
        }
        embeddedTView(t, e) {
          return this.isApplyingToNode(t)
            ? ((this.crossesNgTemplate = !0), this.addMatch(-t.index, e), new nc(this.metadata))
            : null;
        }
        isApplyingToNode(t) {
          if (this._appliesToNextNode && !1 === this.metadata.descendants) {
            const e = this._declarationNodeIndex;
            let n = t.parent;
            for (; null !== n && 4 === n.type && n.index !== e; ) n = n.parent;
            return e === (null !== n ? n.index : -1);
          }
          return this._appliesToNextNode;
        }
        matchTNode(t, e) {
          if (Array.isArray(this.metadata.predicate)) {
            const n = this.metadata.predicate;
            for (let r = 0; r < n.length; r++) this.matchTNodeWithReadOption(t, e, rc(e, n[r]));
          } else {
            const n = this.metadata.predicate;
            n === Fa
              ? 0 === e.type && this.matchTNodeWithReadOption(t, e, -1)
              : this.matchTNodeWithReadOption(t, e, un(e, t, n, !1, !1));
          }
        }
        matchTNodeWithReadOption(t, e, n) {
          if (null !== n) {
            const r = this.metadata.read;
            if (null !== r)
              if (r === fa || r === Ha || (r === Fa && 0 === e.type)) this.addMatch(e.index, -2);
              else {
                const n = un(e, t, r, !1, !1);
                null !== n && this.addMatch(e.index, n);
              }
            else this.addMatch(e.index, n);
          }
        }
        addMatch(t, e) {
          null === this.matches ? (this.matches = [t, e]) : this.matches.push(t, e);
        }
      }
      function rc(t, e) {
        const n = t.localNames;
        if (null !== n) for (let r = 0; r < n.length; r += 2) if (n[r] === e) return n[r + 1];
        return null;
      }
      function sc(t, e, n, r) {
        return -1 === n
          ? (function(t, e) {
              return 3 === t.type || 4 === t.type ? li(fa, t, e) : 0 === t.type ? ci(Fa, fa, t, e) : null;
            })(e, t)
          : -2 === n
          ? (function(t, e, n) {
              return n === fa ? li(fa, e, t) : n === Fa ? ci(Fa, fa, e, t) : n === Ha ? ui(Ha, fa, e, t) : void 0;
            })(t, e, r)
          : hn(t, t[1], n, e);
      }
      function ic(t, e, n, r) {
        const s = e[19].queries[r];
        if (null === s.matches) {
          const r = t.data,
            i = n.matches,
            o = [];
          for (let t = 0; t < i.length; t += 2) {
            const s = i[t];
            o.push(s < 0 ? null : sc(e, r[s], i[t + 1], n.metadata.read));
          }
          s.matches = o;
        }
        return s.matches;
      }
      function oc(t) {
        const e = se(),
          n = ie(),
          r = ve();
        we(r + 1);
        const s = fc(n, r);
        if (t.dirty && Jt(e) === s.metadata.isStatic) {
          if (null === s.matches) t.reset([]);
          else {
            const i = s.crossesNgTemplate
              ? (function t(e, n, r, s) {
                  const i = e.queries.getByIndex(r),
                    o = i.matches;
                  if (null !== o) {
                    const a = ic(e, n, i, r);
                    for (let e = 0; e < o.length; e += 2) {
                      const r = o[e];
                      if (r > 0) s.push(a[e / 2]);
                      else {
                        const i = o[e + 1],
                          a = n[-r];
                        for (let e = 10; e < a.length; e++) {
                          const n = a[e];
                          n[17] === n[3] && t(n[1], n, i, s);
                        }
                        if (null !== a[9]) {
                          const e = a[9];
                          for (let n = 0; n < e.length; n++) {
                            const r = e[n];
                            t(r[1], r, i, s);
                          }
                        }
                      }
                    }
                  }
                  return s;
                })(n, e, r, [])
              : ic(n, e, s, r);
            t.reset(i), t.notifyOnChanges();
          }
          return !0;
        }
        return !1;
      }
      function ac(t, e, n) {
        !(function(t, e, n, r, s, i) {
          t.firstCreatePass && (pc(t, new tc(n, r, !0, s), -1), (t.staticViewQueries = !0)), dc(t, e);
        })(ie(), se(), t, e, n);
      }
      function lc(t, e, n, r) {
        uc(ie(), se(), e, n, r, !1, ae(), t);
      }
      function cc(t, e, n, r) {
        uc(ie(), se(), e, n, r, !0, ae(), t);
      }
      function uc(t, e, n, r, s, i, o, a) {
        t.firstCreatePass &&
          (pc(t, new tc(n, r, i, s), o.index),
          (function(t, e) {
            const n = t.contentQueries || (t.contentQueries = []);
            e !== (t.contentQueries.length ? n[n.length - 1] : -1) && n.push(t.queries.length - 1, e);
          })(t, a),
          i && (t.staticContentQueries = !0)),
          dc(t, e);
      }
      function hc() {
        return (t = se()), (e = ve()), t[19].queries[e].queryList;
        var t, e;
      }
      function dc(t, e) {
        const n = new Jl();
        !(function(t, e, n, r) {
          const s = Ts(e);
          s.push(n), t.firstCreatePass && ks(t).push(r, s.length - 1);
        })(t, e, n, n.destroy),
          null === e[19] && (e[19] = new Xl()),
          e[19].queries.push(new Yl(n));
      }
      function pc(t, e, n) {
        null === t.queries && (t.queries = new ec()), t.queries.track(new nc(e, n));
      }
      function fc(t, e) {
        return t.queries.getByIndex(e);
      }
      function gc(t, e) {
        return ci(Fa, fa, t, e);
      }
      function mc(t = f.Default) {
        const e = hi(!0);
        if (null != e || t & f.Optional) return e;
        throw new Error('No provider for ChangeDetectorRef!');
      }
      const yc = new q('Application Initializer');
      let bc = (() => {
        class t {
          constructor(t) {
            (this.appInits = t),
              (this.initialized = !1),
              (this.done = !1),
              (this.donePromise = new Promise((t, e) => {
                (this.resolve = t), (this.reject = e);
              }));
          }
          runInitializers() {
            if (this.initialized) return;
            const t = [],
              e = () => {
                (this.done = !0), this.resolve();
              };
            if (this.appInits)
              for (let n = 0; n < this.appInits.length; n++) {
                const e = this.appInits[n]();
                so(e) && t.push(e);
              }
            Promise.all(t)
              .then(() => {
                e();
              })
              .catch(t => {
                this.reject(t);
              }),
              0 === t.length && e(),
              (this.initialized = !0);
          }
        }
        return (
          (t.ɵfac = function(e) {
            return new (e || t)(et(yc, 8));
          }),
          (t.ɵprov = y({ token: t, factory: t.ɵfac })),
          t
        );
      })();
      const _c = new q('AppId'),
        vc = {
          provide: _c,
          useFactory: function() {
            return `${wc()}${wc()}${wc()}`;
          },
          deps: []
        };
      function wc() {
        return String.fromCharCode(97 + Math.floor(25 * Math.random()));
      }
      const Cc = new q('Platform Initializer'),
        Sc = new q('Platform ID'),
        Ec = new q('appBootstrapListener');
      let xc = (() => {
        class t {
          log(t) {
            console.log(t);
          }
          warn(t) {
            console.warn(t);
          }
        }
        return (
          (t.ɵfac = function(e) {
            return new (e || t)();
          }),
          (t.ɵprov = y({ token: t, factory: t.ɵfac })),
          t
        );
      })();
      const Oc = new q('LocaleId'),
        Tc = new q('DefaultCurrencyCode');
      class kc {
        constructor(t, e) {
          (this.ngModuleFactory = t), (this.componentFactories = e);
        }
      }
      const Ac = function(t) {
          return new Hl(t);
        },
        Ic = Ac,
        Pc = function(t) {
          return Promise.resolve(Ac(t));
        },
        Rc = function(t) {
          const e = Ac(t),
            n = Je(Pt(t).declarations).reduce((t, e) => {
              const n = At(e);
              return n && t.push(new Za(n)), t;
            }, []);
          return new kc(e, n);
        },
        Dc = Rc,
        jc = function(t) {
          return Promise.resolve(Rc(t));
        };
      let Nc = (() => {
        class t {
          constructor() {
            (this.compileModuleSync = Ic),
              (this.compileModuleAsync = Pc),
              (this.compileModuleAndAllComponentsSync = Dc),
              (this.compileModuleAndAllComponentsAsync = jc);
          }
          clearCache() {}
          clearCacheFor(t) {}
          getModuleId(t) {}
        }
        return (
          (t.ɵfac = function(e) {
            return new (e || t)();
          }),
          (t.ɵprov = y({ token: t, factory: t.ɵfac })),
          t
        );
      })();
      const Mc = new q('compilerOptions'),
        Lc = (() => Promise.resolve(0))();
      function Fc(t) {
        'undefined' == typeof Zone
          ? Lc.then(() => {
              t && t.apply(null, null);
            })
          : Zone.current.scheduleMicroTask('scheduleMicrotask', t);
      }
      class Vc {
        constructor({ enableLongStackTrace: t = !1, shouldCoalesceEventChangeDetection: e = !1 }) {
          if (
            ((this.hasPendingMacrotasks = !1),
            (this.hasPendingMicrotasks = !1),
            (this.isStable = !0),
            (this.onUnstable = new Wl(!1)),
            (this.onMicrotaskEmpty = new Wl(!1)),
            (this.onStable = new Wl(!1)),
            (this.onError = new Wl(!1)),
            'undefined' == typeof Zone)
          )
            throw new Error('In this configuration Angular requires Zone.js');
          Zone.assertZonePatched(),
            (this._nesting = 0),
            (this._outer = this._inner = Zone.current),
            Zone.wtfZoneSpec && (this._inner = this._inner.fork(Zone.wtfZoneSpec)),
            Zone.TaskTrackingZoneSpec && (this._inner = this._inner.fork(new Zone.TaskTrackingZoneSpec())),
            t && Zone.longStackTraceZoneSpec && (this._inner = this._inner.fork(Zone.longStackTraceZoneSpec)),
            (this.shouldCoalesceEventChangeDetection = e),
            (this.lastRequestAnimationFrameId = -1),
            (this.nativeRequestAnimationFrame = (function() {
              let t = L.requestAnimationFrame,
                e = L.cancelAnimationFrame;
              if ('undefined' != typeof Zone && t && e) {
                const n = t[Zone.__symbol__('OriginalDelegate')];
                n && (t = n);
                const r = e[Zone.__symbol__('OriginalDelegate')];
                r && (e = r);
              }
              return { nativeRequestAnimationFrame: t, nativeCancelAnimationFrame: e };
            })().nativeRequestAnimationFrame),
            (function(t) {
              const e =
                !!t.shouldCoalesceEventChangeDetection &&
                t.nativeRequestAnimationFrame &&
                (() => {
                  !(function(t) {
                    -1 === t.lastRequestAnimationFrameId &&
                      ((t.lastRequestAnimationFrameId = t.nativeRequestAnimationFrame.call(L, () => {
                        (t.lastRequestAnimationFrameId = -1), $c(t), zc(t);
                      })),
                      $c(t));
                  })(t);
                });
              t._inner = t._inner.fork({
                name: 'angular',
                properties: { isAngularZone: !0, maybeDelayChangeDetection: e },
                onInvokeTask: (n, r, s, i, o, a) => {
                  try {
                    return Bc(t), n.invokeTask(s, i, o, a);
                  } finally {
                    e && 'eventTask' === i.type && e(), qc(t);
                  }
                },
                onInvoke: (e, n, r, s, i, o, a) => {
                  try {
                    return Bc(t), e.invoke(r, s, i, o, a);
                  } finally {
                    qc(t);
                  }
                },
                onHasTask: (e, n, r, s) => {
                  e.hasTask(r, s),
                    n === r &&
                      ('microTask' == s.change
                        ? ((t._hasPendingMicrotasks = s.microTask), $c(t), zc(t))
                        : 'macroTask' == s.change && (t.hasPendingMacrotasks = s.macroTask));
                },
                onHandleError: (e, n, r, s) => (e.handleError(r, s), t.runOutsideAngular(() => t.onError.emit(s)), !1)
              });
            })(this);
        }
        static isInAngularZone() {
          return !0 === Zone.current.get('isAngularZone');
        }
        static assertInAngularZone() {
          if (!Vc.isInAngularZone()) throw new Error('Expected to be in Angular Zone, but it is not!');
        }
        static assertNotInAngularZone() {
          if (Vc.isInAngularZone()) throw new Error('Expected to not be in Angular Zone, but it is!');
        }
        run(t, e, n) {
          return this._inner.run(t, e, n);
        }
        runTask(t, e, n, r) {
          const s = this._inner,
            i = s.scheduleEventTask('NgZoneEvent: ' + r, t, Uc, Hc, Hc);
          try {
            return s.runTask(i, e, n);
          } finally {
            s.cancelTask(i);
          }
        }
        runGuarded(t, e, n) {
          return this._inner.runGuarded(t, e, n);
        }
        runOutsideAngular(t) {
          return this._outer.run(t);
        }
      }
      function Hc() {}
      const Uc = {};
      function zc(t) {
        if (0 == t._nesting && !t.hasPendingMicrotasks && !t.isStable)
          try {
            t._nesting++, t.onMicrotaskEmpty.emit(null);
          } finally {
            if ((t._nesting--, !t.hasPendingMicrotasks))
              try {
                t.runOutsideAngular(() => t.onStable.emit(null));
              } finally {
                t.isStable = !0;
              }
          }
      }
      function $c(t) {
        t.hasPendingMicrotasks = !!(
          t._hasPendingMicrotasks ||
          (t.shouldCoalesceEventChangeDetection && -1 !== t.lastRequestAnimationFrameId)
        );
      }
      function Bc(t) {
        t._nesting++, t.isStable && ((t.isStable = !1), t.onUnstable.emit(null));
      }
      function qc(t) {
        t._nesting--, zc(t);
      }
      class Zc {
        constructor() {
          (this.hasPendingMicrotasks = !1),
            (this.hasPendingMacrotasks = !1),
            (this.isStable = !0),
            (this.onUnstable = new Wl()),
            (this.onMicrotaskEmpty = new Wl()),
            (this.onStable = new Wl()),
            (this.onError = new Wl());
        }
        run(t, e, n) {
          return t.apply(e, n);
        }
        runGuarded(t, e, n) {
          return t.apply(e, n);
        }
        runOutsideAngular(t) {
          return t();
        }
        runTask(t, e, n, r) {
          return t.apply(e, n);
        }
      }
      let Qc = (() => {
          class t {
            constructor(t) {
              (this._ngZone = t),
                (this._pendingCount = 0),
                (this._isZoneStable = !0),
                (this._didWork = !1),
                (this._callbacks = []),
                (this.taskTrackingZone = null),
                this._watchAngularEvents(),
                t.run(() => {
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
                      Vc.assertNotInAngularZone(),
                        Fc(() => {
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
                Fc(() => {
                  for (; 0 !== this._callbacks.length; ) {
                    let t = this._callbacks.pop();
                    clearTimeout(t.timeoutId), t.doneCb(this._didWork);
                  }
                  this._didWork = !1;
                });
              else {
                let t = this.getPendingTasks();
                (this._callbacks = this._callbacks.filter(
                  e => !e.updateCb || !e.updateCb(t) || (clearTimeout(e.timeoutId), !1)
                )),
                  (this._didWork = !0);
              }
            }
            getPendingTasks() {
              return this.taskTrackingZone
                ? this.taskTrackingZone.macroTasks.map(t => ({
                    source: t.source,
                    creationLocation: t.creationLocation,
                    data: t.data
                  }))
                : [];
            }
            addCallback(t, e, n) {
              let r = -1;
              e &&
                e > 0 &&
                (r = setTimeout(() => {
                  (this._callbacks = this._callbacks.filter(t => t.timeoutId !== r)),
                    t(this._didWork, this.getPendingTasks());
                }, e)),
                this._callbacks.push({ doneCb: t, timeoutId: r, updateCb: n });
            }
            whenStable(t, e, n) {
              if (n && !this.taskTrackingZone)
                throw new Error(
                  'Task tracking zone is required when passing an update callback to whenStable(). Is "zone.js/dist/task-tracking.js" loaded?'
                );
              this.addCallback(t, e, n), this._runCallbacksIfReady();
            }
            getPendingRequestCount() {
              return this._pendingCount;
            }
            findProviders(t, e, n) {
              return [];
            }
          }
          return (
            (t.ɵfac = function(e) {
              return new (e || t)(et(Vc));
            }),
            (t.ɵprov = y({ token: t, factory: t.ɵfac })),
            t
          );
        })(),
        Gc = (() => {
          class t {
            constructor() {
              (this._applications = new Map()), Yc.addToWindow(this);
            }
            registerApplication(t, e) {
              this._applications.set(t, e);
            }
            unregisterApplication(t) {
              this._applications.delete(t);
            }
            unregisterAllApplications() {
              this._applications.clear();
            }
            getTestability(t) {
              return this._applications.get(t) || null;
            }
            getAllTestabilities() {
              return Array.from(this._applications.values());
            }
            getAllRootElements() {
              return Array.from(this._applications.keys());
            }
            findTestabilityInTree(t, e = !0) {
              return Yc.findTestabilityInTree(this, t, e);
            }
          }
          return (
            (t.ɵfac = function(e) {
              return new (e || t)();
            }),
            (t.ɵprov = y({ token: t, factory: t.ɵfac })),
            t
          );
        })();
      class Wc {
        addToWindow(t) {}
        findTestabilityInTree(t, e, n) {
          return null;
        }
      }
      function Kc(t) {
        Yc = t;
      }
      let Jc,
        Yc = new Wc(),
        Xc = function(t, e, n) {
          const r = t.get(Mc, []).concat(e),
            s = new Hl(n);
          if (0 === Ii.size) return Promise.resolve(s);
          const i = (function(t) {
            const e = [];
            return t.forEach(t => t && e.push(...t)), e;
          })(r.map(t => t.providers));
          if (0 === i.length) return Promise.resolve(s);
          const o = (function() {
              const t = L.ng;
              if (!t || !t.ɵcompilerFacade)
                throw new Error(
                  "Angular JIT compilation failed: '@angular/compiler' not loaded!\n  - JIT compilation is discouraged for production use-cases! Consider AOT mode instead.\n  - Did you bootstrap using '@angular/platform-browser-dynamic' or '@angular/platform-server'?\n  - Alternatively provide the compiler with 'import \"@angular/compiler\";' before bootstrapping."
                );
              return t.ɵcompilerFacade;
            })(),
            a = ki.create({ providers: i }).get(o.ResourceLoader);
          return (function(t) {
            const e = [],
              n = new Map();
            function r(t) {
              let e = n.get(t);
              if (!e) {
                const r = (t => Promise.resolve(a.get(t)))(t);
                n.set(t, (e = r.then(Ri)));
              }
              return e;
            }
            return (
              Ii.forEach((t, n) => {
                const s = [];
                t.templateUrl &&
                  s.push(
                    r(t.templateUrl).then(e => {
                      t.template = e;
                    })
                  );
                const i = t.styleUrls,
                  o = t.styles || (t.styles = []),
                  a = t.styles.length;
                i &&
                  i.forEach((e, n) => {
                    o.push(''),
                      s.push(
                        r(e).then(r => {
                          (o[a + n] = r), i.splice(i.indexOf(e), 1), 0 == i.length && (t.styleUrls = void 0);
                        })
                      );
                  });
                const l = Promise.all(s).then(() =>
                  (function(t) {
                    Pi.delete(t);
                  })(n)
                );
                e.push(l);
              }),
              (Ii = new Map()),
              Promise.all(e).then(() => {})
            );
          })().then(() => s);
        };
      const tu = new q('AllowMultipleToken');
      class eu {
        constructor(t, e) {
          (this.name = t), (this.token = e);
        }
      }
      function nu(t, e, n = []) {
        const r = 'Platform: ' + e,
          s = new q(r);
        return (e = []) => {
          let i = ru();
          if (!i || i.injector.get(tu, !1))
            if (t) t(n.concat(e).concat({ provide: s, useValue: !0 }));
            else {
              const t = n.concat(e).concat({ provide: s, useValue: !0 }, { provide: fi, useValue: 'platform' });
              !(function(t) {
                if (Jc && !Jc.destroyed && !Jc.injector.get(tu, !1))
                  throw new Error('There can be only one platform. Destroy the previous one to create a new one.');
                Jc = t.get(su);
                const e = t.get(Cc, null);
                e && e.forEach(t => t());
              })(ki.create({ providers: t, name: r }));
            }
          return (function(t) {
            const e = ru();
            if (!e) throw new Error('No platform exists!');
            if (!e.injector.get(t, null))
              throw new Error('A platform with a different configuration has been created. Please destroy it first.');
            return e;
          })(s);
        };
      }
      function ru() {
        return Jc && !Jc.destroyed ? Jc : null;
      }
      let su = (() => {
        class t {
          constructor(t) {
            (this._injector = t), (this._modules = []), (this._destroyListeners = []), (this._destroyed = !1);
          }
          bootstrapModuleFactory(t, e) {
            const n = (function(t, e) {
                let n;
                return (
                  (n =
                    'noop' === t
                      ? new Zc()
                      : ('zone.js' === t ? void 0 : t) ||
                        new Vc({ enableLongStackTrace: Mn(), shouldCoalesceEventChangeDetection: e })),
                  n
                );
              })(e ? e.ngZone : void 0, (e && e.ngZoneEventCoalescing) || !1),
              r = [{ provide: Vc, useValue: n }];
            return n.run(() => {
              const e = ki.create({ providers: r, parent: this.injector, name: t.moduleType.name }),
                s = t.create(e),
                i = s.injector.get(_n, null);
              if (!i) throw new Error('No ErrorHandler. Is platform module (BrowserModule) included?');
              return (
                s.onDestroy(() => au(this._modules, s)),
                n.runOutsideAngular(() =>
                  n.onError.subscribe({
                    next: t => {
                      i.handleError(t);
                    }
                  })
                ),
                (function(t, e, n) {
                  try {
                    const r = n();
                    return so(r)
                      ? r.catch(n => {
                          throw (e.runOutsideAngular(() => t.handleError(n)), n);
                        })
                      : r;
                  } catch (r) {
                    throw (e.runOutsideAngular(() => t.handleError(r)), r);
                  }
                })(i, n, () => {
                  const t = s.injector.get(bc);
                  return (
                    t.runInitializers(),
                    t.donePromise.then(
                      () => (Ll(s.injector.get(Oc, 'en-US') || 'en-US'), this._moduleDoBootstrap(s), s)
                    )
                  );
                })
              );
            });
          }
          bootstrapModule(t, e = []) {
            const n = iu({}, e);
            return Xc(this.injector, n, t).then(t => this.bootstrapModuleFactory(t, n));
          }
          _moduleDoBootstrap(t) {
            const e = t.injector.get(ou);
            if (t._bootstrapComponents.length > 0) t._bootstrapComponents.forEach(t => e.bootstrap(t));
            else {
              if (!t.instance.ngDoBootstrap)
                throw new Error(
                  `The module ${T(
                    t.instance.constructor
                  )} was bootstrapped, but it does not declare "@NgModule.bootstrap" components nor a "ngDoBootstrap" method. Please define one of these.`
                );
              t.instance.ngDoBootstrap(e);
            }
            this._modules.push(t);
          }
          onDestroy(t) {
            this._destroyListeners.push(t);
          }
          get injector() {
            return this._injector;
          }
          destroy() {
            if (this._destroyed) throw new Error('The platform has already been destroyed!');
            this._modules.slice().forEach(t => t.destroy()),
              this._destroyListeners.forEach(t => t()),
              (this._destroyed = !0);
          }
          get destroyed() {
            return this._destroyed;
          }
        }
        return (
          (t.ɵfac = function(e) {
            return new (e || t)(et(ki));
          }),
          (t.ɵprov = y({ token: t, factory: t.ɵfac })),
          t
        );
      })();
      function iu(t, e) {
        return Array.isArray(e) ? e.reduce(iu, t) : Object.assign(Object.assign({}, t), e);
      }
      let ou = (() => {
        class t {
          constructor(t, e, n, r, s, l) {
            (this._zone = t),
              (this._console = e),
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
              (this._enforceNoNewChanges = Mn()),
              this._zone.onMicrotaskEmpty.subscribe({
                next: () => {
                  this._zone.run(() => {
                    this.tick();
                  });
                }
              });
            const c = new i.a(t => {
                (this._stable =
                  this._zone.isStable && !this._zone.hasPendingMacrotasks && !this._zone.hasPendingMicrotasks),
                  this._zone.runOutsideAngular(() => {
                    t.next(this._stable), t.complete();
                  });
              }),
              u = new i.a(t => {
                let e;
                this._zone.runOutsideAngular(() => {
                  e = this._zone.onStable.subscribe(() => {
                    Vc.assertNotInAngularZone(),
                      Fc(() => {
                        this._stable ||
                          this._zone.hasPendingMacrotasks ||
                          this._zone.hasPendingMicrotasks ||
                          ((this._stable = !0), t.next(!0));
                      });
                  });
                });
                const n = this._zone.onUnstable.subscribe(() => {
                  Vc.assertInAngularZone(),
                    this._stable &&
                      ((this._stable = !1),
                      this._zone.runOutsideAngular(() => {
                        t.next(!1);
                      }));
                });
                return () => {
                  e.unsubscribe(), n.unsubscribe();
                };
              });
            this.isStable = Object(o.a)(c, u.pipe(Object(a.a)()));
          }
          bootstrap(t, e) {
            if (!this._initStatus.done)
              throw new Error(
                'Cannot bootstrap as there are still asynchronous initializers running. Bootstrap components in the `ngDoBootstrap` method of the root module.'
              );
            let n;
            (n = t instanceof ha ? t : this._componentFactoryResolver.resolveComponentFactory(t)),
              this.componentTypes.push(n.componentType);
            const r = n.isBoundToModule ? void 0 : this._injector.get(it),
              s = n.create(ki.NULL, [], e || n.selector, r);
            s.onDestroy(() => {
              this._unloadComponent(s);
            });
            const i = s.injector.get(Qc, null);
            return (
              i && s.injector.get(Gc).registerApplication(s.location.nativeElement, i),
              this._loadComponent(s),
              Mn() &&
                this._console.log(
                  'Angular is running in the development mode. Call enableProdMode() to enable the production mode.'
                ),
              s
            );
          }
          tick() {
            if (this._runningTick) throw new Error('ApplicationRef.tick is called recursively');
            try {
              this._runningTick = !0;
              for (let t of this._views) t.detectChanges();
              if (this._enforceNoNewChanges) for (let t of this._views) t.checkNoChanges();
            } catch (t) {
              this._zone.runOutsideAngular(() => this._exceptionHandler.handleError(t));
            } finally {
              this._runningTick = !1;
            }
          }
          attachView(t) {
            const e = t;
            this._views.push(e), e.attachToAppRef(this);
          }
          detachView(t) {
            const e = t;
            au(this._views, e), e.detachFromAppRef();
          }
          _loadComponent(t) {
            this.attachView(t.hostView),
              this.tick(),
              this.components.push(t),
              this._injector
                .get(Ec, [])
                .concat(this._bootstrapListeners)
                .forEach(e => e(t));
          }
          _unloadComponent(t) {
            this.detachView(t.hostView), au(this.components, t);
          }
          ngOnDestroy() {
            this._views.slice().forEach(t => t.destroy());
          }
          get viewCount() {
            return this._views.length;
          }
        }
        return (
          (t.ɵfac = function(e) {
            return new (e || t)(et(Vc), et(xc), et(ki), et(_n), et(pa), et(bc));
          }),
          (t.ɵprov = y({ token: t, factory: t.ɵfac })),
          t
        );
      })();
      function au(t, e) {
        const n = t.indexOf(e);
        n > -1 && t.splice(n, 1);
      }
      class lu {}
      class cu {}
      const uu = { factoryPathPrefix: '', factoryPathSuffix: '.ngfactory' };
      let hu = (() => {
        class t {
          constructor(t, e) {
            (this._compiler = t), (this._config = e || uu);
          }
          load(t) {
            return this.loadAndCompile(t);
          }
          loadAndCompile(t) {
            let [e, r] = t.split('#');
            return (
              void 0 === r && (r = 'default'),
              n('zn8P')(e)
                .then(t => t[r])
                .then(t => du(t, e, r))
                .then(t => this._compiler.compileModuleAsync(t))
            );
          }
          loadFactory(t) {
            let [e, r] = t.split('#'),
              s = 'NgFactory';
            return (
              void 0 === r && ((r = 'default'), (s = '')),
              n('zn8P')(this._config.factoryPathPrefix + e + this._config.factoryPathSuffix)
                .then(t => t[r + s])
                .then(t => du(t, e, r))
            );
          }
        }
        return (
          (t.ɵfac = function(e) {
            return new (e || t)(et(Nc), et(cu, 8));
          }),
          (t.ɵprov = y({ token: t, factory: t.ɵfac })),
          t
        );
      })();
      function du(t, e, n) {
        if (!t) throw new Error(`Cannot find '${n}' in '${e}'`);
        return t;
      }
      const pu = function(t) {
          return null;
        },
        fu = nu(null, 'core', [
          { provide: Sc, useValue: 'unknown' },
          { provide: su, deps: [ki] },
          { provide: Gc, deps: [] },
          { provide: xc, deps: [] }
        ]),
        gu = [
          { provide: ou, useClass: ou, deps: [Vc, xc, ki, _n, pa, bc] },
          {
            provide: qa,
            deps: [Vc],
            useFactory: function(t) {
              let e = [];
              return (
                t.onStable.subscribe(() => {
                  for (; e.length; ) e.pop()();
                }),
                function(t) {
                  e.push(t);
                }
              );
            }
          },
          { provide: bc, useClass: bc, deps: [[new h(), yc]] },
          { provide: Nc, useClass: Nc, deps: [] },
          vc,
          {
            provide: Da,
            useFactory: function() {
              return Ma;
            },
            deps: []
          },
          {
            provide: ja,
            useFactory: function() {
              return La;
            },
            deps: []
          },
          {
            provide: Oc,
            useFactory: function(t) {
              return Ll((t = t || ('undefined' != typeof $localize && $localize.locale) || 'en-US')), t;
            },
            deps: [[new u(Oc), new h(), new p()]]
          },
          { provide: Tc, useValue: 'USD' }
        ];
      let mu = (() => {
        class t {
          constructor(t) {}
        }
        return (
          (t.ɵmod = Et({ type: t })),
          (t.ɵinj = b({
            factory: function(e) {
              return new (e || t)(et(ou));
            },
            providers: gu
          })),
          t
        );
      })();
    },
    gRHU: function(t, e, n) {
      'use strict';
      n.d(e, 'a', function() {
        return i;
      });
      var r = n('2fFW'),
        s = n('NJ4a');
      const i = {
        closed: !0,
        next(t) {},
        error(t) {
          if (r.a.useDeprecatedSynchronousErrorHandling) throw t;
          Object(s.a)(t);
        },
        complete() {}
      };
    },
    jZKg: function(t, e, n) {
      'use strict';
      n.d(e, 'a', function() {
        return i;
      });
      var r = n('HDdC'),
        s = n('quSY');
      function i(t, e) {
        return new r.a(n => {
          const r = new s.a();
          let i = 0;
          return (
            r.add(
              e.schedule(function() {
                i !== t.length ? (n.next(t[i++]), n.closed || r.add(this.schedule())) : n.complete();
              })
            ),
            r
          );
        });
      }
    },
    jhN1: function(t, e, n) {
      'use strict';
      n.d(e, 'a', function() {
        return L;
      }),
        n.d(e, 'b', function() {
          return P;
        }),
        n.d(e, 'c', function() {
          return V;
        }),
        n.d(e, 'd', function() {
          return N;
        }),
        n.d(e, 'e', function() {
          return w;
        });
      var r = n('ofXK'),
        s = n('fXoL');
      class i extends r.w {
        constructor() {
          super();
        }
        supportsDOMEvents() {
          return !0;
        }
      }
      class o extends i {
        static makeCurrent() {
          Object(r.A)(new o());
        }
        getProperty(t, e) {
          return t[e];
        }
        log(t) {
          window.console && window.console.log && window.console.log(t);
        }
        logGroup(t) {
          window.console && window.console.group && window.console.group(t);
        }
        logGroupEnd() {
          window.console && window.console.groupEnd && window.console.groupEnd();
        }
        onAndCancel(t, e, n) {
          return (
            t.addEventListener(e, n, !1),
            () => {
              t.removeEventListener(e, n, !1);
            }
          );
        }
        dispatchEvent(t, e) {
          t.dispatchEvent(e);
        }
        remove(t) {
          return t.parentNode && t.parentNode.removeChild(t), t;
        }
        getValue(t) {
          return t.value;
        }
        createElement(t, e) {
          return (e = e || this.getDefaultDocument()).createElement(t);
        }
        createHtmlDocument() {
          return document.implementation.createHTMLDocument('fakeTitle');
        }
        getDefaultDocument() {
          return document;
        }
        isElementNode(t) {
          return t.nodeType === Node.ELEMENT_NODE;
        }
        isShadowRoot(t) {
          return t instanceof DocumentFragment;
        }
        getGlobalEventTarget(t, e) {
          return 'window' === e ? window : 'document' === e ? t : 'body' === e ? t.body : null;
        }
        getHistory() {
          return window.history;
        }
        getLocation() {
          return window.location;
        }
        getBaseHref(t) {
          const e = l || ((l = document.querySelector('base')), l) ? l.getAttribute('href') : null;
          return null == e
            ? null
            : ((n = e),
              a || (a = document.createElement('a')),
              a.setAttribute('href', n),
              '/' === a.pathname.charAt(0) ? a.pathname : '/' + a.pathname);
          var n;
        }
        resetBaseElement() {
          l = null;
        }
        getUserAgent() {
          return window.navigator.userAgent;
        }
        performanceNow() {
          return window.performance && window.performance.now ? window.performance.now() : new Date().getTime();
        }
        supportsCookies() {
          return !0;
        }
        getCookie(t) {
          return Object(r.z)(document.cookie, t);
        }
      }
      let a,
        l = null;
      const c = new s.q('TRANSITION_ID'),
        u = [
          {
            provide: s.d,
            useFactory: function(t, e, n) {
              return () => {
                n.get(s.e).donePromise.then(() => {
                  const n = Object(r.y)();
                  Array.prototype.slice
                    .apply(e.querySelectorAll('style[ng-transition]'))
                    .filter(e => e.getAttribute('ng-transition') === t)
                    .forEach(t => n.remove(t));
                });
              };
            },
            deps: [c, r.c, s.r],
            multi: !0
          }
        ];
      class h {
        static init() {
          Object(s.V)(new h());
        }
        addToWindow(t) {
          (s.nb.getAngularTestability = (e, n = !0) => {
            const r = t.findTestabilityInTree(e, n);
            if (null == r) throw new Error('Could not find testability for element.');
            return r;
          }),
            (s.nb.getAllAngularTestabilities = () => t.getAllTestabilities()),
            (s.nb.getAllAngularRootElements = () => t.getAllRootElements()),
            s.nb.frameworkStabilizers || (s.nb.frameworkStabilizers = []),
            s.nb.frameworkStabilizers.push(t => {
              const e = s.nb.getAllAngularTestabilities();
              let n = e.length,
                r = !1;
              const i = function(e) {
                (r = r || e), n--, 0 == n && t(r);
              };
              e.forEach(function(t) {
                t.whenStable(i);
              });
            });
        }
        findTestabilityInTree(t, e, n) {
          if (null == e) return null;
          const s = t.getTestability(e);
          return null != s
            ? s
            : n
            ? Object(r.y)().isShadowRoot(e)
              ? this.findTestabilityInTree(t, e.host, !0)
              : this.findTestabilityInTree(t, e.parentElement, !0)
            : null;
        }
      }
      const d = new s.q('EventManagerPlugins');
      let p = (() => {
        class t {
          constructor(t, e) {
            (this._zone = e),
              (this._eventNameToPlugin = new Map()),
              t.forEach(t => (t.manager = this)),
              (this._plugins = t.slice().reverse());
          }
          addEventListener(t, e, n) {
            return this._findPluginFor(e).addEventListener(t, e, n);
          }
          addGlobalEventListener(t, e, n) {
            return this._findPluginFor(e).addGlobalEventListener(t, e, n);
          }
          getZone() {
            return this._zone;
          }
          _findPluginFor(t) {
            const e = this._eventNameToPlugin.get(t);
            if (e) return e;
            const n = this._plugins;
            for (let r = 0; r < n.length; r++) {
              const e = n[r];
              if (e.supports(t)) return this._eventNameToPlugin.set(t, e), e;
            }
            throw new Error('No event manager plugin found for event ' + t);
          }
        }
        return (
          (t.ɵfac = function(e) {
            return new (e || t)(s.Zb(d), s.Zb(s.z));
          }),
          (t.ɵprov = s.Ib({ token: t, factory: t.ɵfac })),
          t
        );
      })();
      class f {
        constructor(t) {
          this._doc = t;
        }
        addGlobalEventListener(t, e, n) {
          const s = Object(r.y)().getGlobalEventTarget(this._doc, t);
          if (!s) throw new Error(`Unsupported event target ${s} for event ${e}`);
          return this.addEventListener(s, e, n);
        }
      }
      let g = (() => {
          class t {
            constructor() {
              this._stylesSet = new Set();
            }
            addStyles(t) {
              const e = new Set();
              t.forEach(t => {
                this._stylesSet.has(t) || (this._stylesSet.add(t), e.add(t));
              }),
                this.onStylesAdded(e);
            }
            onStylesAdded(t) {}
            getAllStyles() {
              return Array.from(this._stylesSet);
            }
          }
          return (
            (t.ɵfac = function(e) {
              return new (e || t)();
            }),
            (t.ɵprov = s.Ib({ token: t, factory: t.ɵfac })),
            t
          );
        })(),
        m = (() => {
          class t extends g {
            constructor(t) {
              super(),
                (this._doc = t),
                (this._hostNodes = new Set()),
                (this._styleNodes = new Set()),
                this._hostNodes.add(t.head);
            }
            _addStylesToHost(t, e) {
              t.forEach(t => {
                const n = this._doc.createElement('style');
                (n.textContent = t), this._styleNodes.add(e.appendChild(n));
              });
            }
            addHost(t) {
              this._addStylesToHost(this._stylesSet, t), this._hostNodes.add(t);
            }
            removeHost(t) {
              this._hostNodes.delete(t);
            }
            onStylesAdded(t) {
              this._hostNodes.forEach(e => this._addStylesToHost(t, e));
            }
            ngOnDestroy() {
              this._styleNodes.forEach(t => Object(r.y)().remove(t));
            }
          }
          return (
            (t.ɵfac = function(e) {
              return new (e || t)(s.Zb(r.c));
            }),
            (t.ɵprov = s.Ib({ token: t, factory: t.ɵfac })),
            t
          );
        })();
      const y = {
          svg: 'http://www.w3.org/2000/svg',
          xhtml: 'http://www.w3.org/1999/xhtml',
          xlink: 'http://www.w3.org/1999/xlink',
          xml: 'http://www.w3.org/XML/1998/namespace',
          xmlns: 'http://www.w3.org/2000/xmlns/'
        },
        b = /%COMP%/g;
      function _(t, e, n) {
        for (let r = 0; r < e.length; r++) {
          let s = e[r];
          Array.isArray(s) ? _(t, s, n) : ((s = s.replace(b, t)), n.push(s));
        }
        return n;
      }
      function v(t) {
        return e => {
          if ('__ngUnwrap__' === e) return t;
          !1 === t(e) && (e.preventDefault(), (e.returnValue = !1));
        };
      }
      let w = (() => {
        class t {
          constructor(t, e, n) {
            (this.eventManager = t),
              (this.sharedStylesHost = e),
              (this.appId = n),
              (this.rendererByCompId = new Map()),
              (this.defaultRenderer = new C(t));
          }
          createRenderer(t, e) {
            if (!t || !e) return this.defaultRenderer;
            switch (e.encapsulation) {
              case s.O.Emulated: {
                let n = this.rendererByCompId.get(e.id);
                return (
                  n ||
                    ((n = new S(this.eventManager, this.sharedStylesHost, e, this.appId)),
                    this.rendererByCompId.set(e.id, n)),
                  n.applyToHost(t),
                  n
                );
              }
              case s.O.Native:
              case s.O.ShadowDom:
                return new E(this.eventManager, this.sharedStylesHost, t, e);
              default:
                if (!this.rendererByCompId.has(e.id)) {
                  const t = _(e.id, e.styles, []);
                  this.sharedStylesHost.addStyles(t), this.rendererByCompId.set(e.id, this.defaultRenderer);
                }
                return this.defaultRenderer;
            }
          }
          begin() {}
          end() {}
        }
        return (
          (t.ɵfac = function(e) {
            return new (e || t)(s.Zb(p), s.Zb(m), s.Zb(s.c));
          }),
          (t.ɵprov = s.Ib({ token: t, factory: t.ɵfac })),
          t
        );
      })();
      class C {
        constructor(t) {
          (this.eventManager = t), (this.data = Object.create(null));
        }
        destroy() {}
        createElement(t, e) {
          return e ? document.createElementNS(y[e] || e, t) : document.createElement(t);
        }
        createComment(t) {
          return document.createComment(t);
        }
        createText(t) {
          return document.createTextNode(t);
        }
        appendChild(t, e) {
          t.appendChild(e);
        }
        insertBefore(t, e, n) {
          t && t.insertBefore(e, n);
        }
        removeChild(t, e) {
          t && t.removeChild(e);
        }
        selectRootElement(t, e) {
          let n = 'string' == typeof t ? document.querySelector(t) : t;
          if (!n) throw new Error(`The selector "${t}" did not match any elements`);
          return e || (n.textContent = ''), n;
        }
        parentNode(t) {
          return t.parentNode;
        }
        nextSibling(t) {
          return t.nextSibling;
        }
        setAttribute(t, e, n, r) {
          if (r) {
            e = r + ':' + e;
            const s = y[r];
            s ? t.setAttributeNS(s, e, n) : t.setAttribute(e, n);
          } else t.setAttribute(e, n);
        }
        removeAttribute(t, e, n) {
          if (n) {
            const r = y[n];
            r ? t.removeAttributeNS(r, e) : t.removeAttribute(`${n}:${e}`);
          } else t.removeAttribute(e);
        }
        addClass(t, e) {
          t.classList.add(e);
        }
        removeClass(t, e) {
          t.classList.remove(e);
        }
        setStyle(t, e, n, r) {
          r & s.F.DashCase ? t.style.setProperty(e, n, r & s.F.Important ? 'important' : '') : (t.style[e] = n);
        }
        removeStyle(t, e, n) {
          n & s.F.DashCase ? t.style.removeProperty(e) : (t.style[e] = '');
        }
        setProperty(t, e, n) {
          t[e] = n;
        }
        setValue(t, e) {
          t.nodeValue = e;
        }
        listen(t, e, n) {
          return 'string' == typeof t
            ? this.eventManager.addGlobalEventListener(t, e, v(n))
            : this.eventManager.addEventListener(t, e, v(n));
        }
      }
      class S extends C {
        constructor(t, e, n, r) {
          super(t), (this.component = n);
          const s = _(r + '-' + n.id, n.styles, []);
          e.addStyles(s),
            (this.contentAttr = '_ngcontent-%COMP%'.replace(b, r + '-' + n.id)),
            (this.hostAttr = (function(t) {
              return '_nghost-%COMP%'.replace(b, t);
            })(r + '-' + n.id));
        }
        applyToHost(t) {
          super.setAttribute(t, this.hostAttr, '');
        }
        createElement(t, e) {
          const n = super.createElement(t, e);
          return super.setAttribute(n, this.contentAttr, ''), n;
        }
      }
      class E extends C {
        constructor(t, e, n, r) {
          super(t),
            (this.sharedStylesHost = e),
            (this.hostEl = n),
            (this.component = r),
            (this.shadowRoot =
              r.encapsulation === s.O.ShadowDom ? n.attachShadow({ mode: 'open' }) : n.createShadowRoot()),
            this.sharedStylesHost.addHost(this.shadowRoot);
          const i = _(r.id, r.styles, []);
          for (let s = 0; s < i.length; s++) {
            const t = document.createElement('style');
            (t.textContent = i[s]), this.shadowRoot.appendChild(t);
          }
        }
        nodeOrShadowRoot(t) {
          return t === this.hostEl ? this.shadowRoot : t;
        }
        destroy() {
          this.sharedStylesHost.removeHost(this.shadowRoot);
        }
        appendChild(t, e) {
          return super.appendChild(this.nodeOrShadowRoot(t), e);
        }
        insertBefore(t, e, n) {
          return super.insertBefore(this.nodeOrShadowRoot(t), e, n);
        }
        removeChild(t, e) {
          return super.removeChild(this.nodeOrShadowRoot(t), e);
        }
        parentNode(t) {
          return this.nodeOrShadowRoot(super.parentNode(this.nodeOrShadowRoot(t)));
        }
      }
      let x = (() => {
        class t extends f {
          constructor(t) {
            super(t);
          }
          supports(t) {
            return !0;
          }
          addEventListener(t, e, n) {
            return t.addEventListener(e, n, !1), () => this.removeEventListener(t, e, n);
          }
          removeEventListener(t, e, n) {
            return t.removeEventListener(e, n);
          }
        }
        return (
          (t.ɵfac = function(e) {
            return new (e || t)(s.Zb(r.c));
          }),
          (t.ɵprov = s.Ib({ token: t, factory: t.ɵfac })),
          t
        );
      })();
      const O = ['alt', 'control', 'meta', 'shift'],
        T = {
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
        k = {
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
        A = { alt: t => t.altKey, control: t => t.ctrlKey, meta: t => t.metaKey, shift: t => t.shiftKey };
      let I = (() => {
          class t extends f {
            constructor(t) {
              super(t);
            }
            supports(e) {
              return null != t.parseEventName(e);
            }
            addEventListener(e, n, s) {
              const i = t.parseEventName(n),
                o = t.eventCallback(i.fullKey, s, this.manager.getZone());
              return this.manager.getZone().runOutsideAngular(() => Object(r.y)().onAndCancel(e, i.domEventName, o));
            }
            static parseEventName(e) {
              const n = e.toLowerCase().split('.'),
                r = n.shift();
              if (0 === n.length || ('keydown' !== r && 'keyup' !== r)) return null;
              const s = t._normalizeKey(n.pop());
              let i = '';
              if (
                (O.forEach(t => {
                  const e = n.indexOf(t);
                  e > -1 && (n.splice(e, 1), (i += t + '.'));
                }),
                (i += s),
                0 != n.length || 0 === s.length)
              )
                return null;
              const o = {};
              return (o.domEventName = r), (o.fullKey = i), o;
            }
            static getEventFullKey(t) {
              let e = '',
                n = (function(t) {
                  let e = t.key;
                  if (null == e) {
                    if (((e = t.keyIdentifier), null == e)) return 'Unidentified';
                    e.startsWith('U+') &&
                      ((e = String.fromCharCode(parseInt(e.substring(2), 16))),
                      3 === t.location && k.hasOwnProperty(e) && (e = k[e]));
                  }
                  return T[e] || e;
                })(t);
              return (
                (n = n.toLowerCase()),
                ' ' === n ? (n = 'space') : '.' === n && (n = 'dot'),
                O.forEach(r => {
                  r != n && (0, A[r])(t) && (e += r + '.');
                }),
                (e += n),
                e
              );
            }
            static eventCallback(e, n, r) {
              return s => {
                t.getEventFullKey(s) === e && r.runGuarded(() => n(s));
              };
            }
            static _normalizeKey(t) {
              switch (t) {
                case 'esc':
                  return 'escape';
                default:
                  return t;
              }
            }
          }
          return (
            (t.ɵfac = function(e) {
              return new (e || t)(s.Zb(r.c));
            }),
            (t.ɵprov = s.Ib({ token: t, factory: t.ɵfac })),
            t
          );
        })(),
        P = (() => {
          class t {}
          return (
            (t.ɵfac = function(e) {
              return new (e || t)();
            }),
            (t.ɵprov = Object(s.Ib)({
              factory: function() {
                return Object(s.Zb)(D);
              },
              token: t,
              providedIn: 'root'
            })),
            t
          );
        })();
      function R(t) {
        return new D(t.get(r.c));
      }
      let D = (() => {
        class t extends P {
          constructor(t) {
            super(), (this._doc = t);
          }
          sanitize(t, e) {
            if (null == e) return null;
            switch (t) {
              case s.H.NONE:
                return e;
              case s.H.HTML:
                return Object(s.cb)(e, 'HTML') ? Object(s.vb)(e) : Object(s.Z)(this._doc, String(e));
              case s.H.STYLE:
                return Object(s.cb)(e, 'Style') ? Object(s.vb)(e) : Object(s.ab)(e);
              case s.H.SCRIPT:
                if (Object(s.cb)(e, 'Script')) return Object(s.vb)(e);
                throw new Error('unsafe value used in a script context');
              case s.H.URL:
                return Object(s.mb)(e), Object(s.cb)(e, 'URL') ? Object(s.vb)(e) : Object(s.bb)(String(e));
              case s.H.RESOURCE_URL:
                if (Object(s.cb)(e, 'ResourceURL')) return Object(s.vb)(e);
                throw new Error('unsafe value used in a resource URL context (see http://g.co/ng/security#xss)');
              default:
                throw new Error(`Unexpected SecurityContext ${t} (see http://g.co/ng/security#xss)`);
            }
          }
          bypassSecurityTrustHtml(t) {
            return Object(s.db)(t);
          }
          bypassSecurityTrustStyle(t) {
            return Object(s.gb)(t);
          }
          bypassSecurityTrustScript(t) {
            return Object(s.fb)(t);
          }
          bypassSecurityTrustUrl(t) {
            return Object(s.hb)(t);
          }
          bypassSecurityTrustResourceUrl(t) {
            return Object(s.eb)(t);
          }
        }
        return (
          (t.ɵfac = function(e) {
            return new (e || t)(s.Zb(r.c));
          }),
          (t.ɵprov = Object(s.Ib)({
            factory: function() {
              return R(Object(s.Zb)(s.o));
            },
            token: t,
            providedIn: 'root'
          })),
          t
        );
      })();
      const j = [
          { provide: s.B, useValue: r.x },
          {
            provide: s.C,
            useValue: function() {
              o.makeCurrent(), h.init();
            },
            multi: !0
          },
          {
            provide: r.c,
            useFactory: function() {
              return Object(s.tb)(document), document;
            },
            deps: []
          }
        ],
        N = Object(s.Q)(s.U, 'browser', j),
        M = [
          [],
          { provide: s.X, useValue: 'root' },
          {
            provide: s.m,
            useFactory: function() {
              return new s.m();
            },
            deps: []
          },
          { provide: d, useClass: x, multi: !0, deps: [r.c, s.z, s.B] },
          { provide: d, useClass: I, multi: !0, deps: [r.c] },
          [],
          { provide: w, useClass: w, deps: [p, m, s.c] },
          { provide: s.E, useExisting: w },
          { provide: g, useExisting: m },
          { provide: m, useClass: m, deps: [r.c] },
          { provide: s.L, useClass: s.L, deps: [s.z] },
          { provide: p, useClass: p, deps: [d, s.z] },
          []
        ];
      let L = (() => {
        class t {
          constructor(t) {
            if (t)
              throw new Error(
                'BrowserModule has already been loaded. If you need access to common directives such as NgIf and NgFor from a lazy loaded module, import CommonModule instead.'
              );
          }
          static withServerTransition(e) {
            return {
              ngModule: t,
              providers: [{ provide: s.c, useValue: e.appId }, { provide: c, useExisting: s.c }, u]
            };
          }
        }
        return (
          (t.ɵmod = s.Kb({ type: t })),
          (t.ɵinj = s.Jb({
            factory: function(e) {
              return new (e || t)(s.Zb(t, 12));
            },
            providers: M,
            imports: [r.b, s.f]
          })),
          t
        );
      })();
      function F() {
        return new V(Object(s.Zb)(r.c));
      }
      let V = (() => {
        class t {
          constructor(t) {
            this._doc = t;
          }
          getTitle() {
            return this._doc.title;
          }
          setTitle(t) {
            this._doc.title = t || '';
          }
        }
        return (
          (t.ɵfac = function(e) {
            return new (e || t)(s.Zb(r.c));
          }),
          (t.ɵprov = Object(s.Ib)({ factory: F, token: t, providedIn: 'root' })),
          t
        );
      })();
      'undefined' != typeof window && window;
    },
    kJWO: function(t, e, n) {
      'use strict';
      n.d(e, 'a', function() {
        return r;
      });
      const r = (() => ('function' == typeof Symbol && Symbol.observable) || '@@observable')();
    },
    l7GE: function(t, e, n) {
      'use strict';
      n.d(e, 'a', function() {
        return s;
      });
      var r = n('7o/Q');
      class s extends r.a {
        notifyNext(t, e, n, r, s) {
          this.destination.next(e);
        }
        notifyError(t, e) {
          this.destination.error(t);
        }
        notifyComplete(t) {
          this.destination.complete();
        }
      }
    },
    lJxs: function(t, e, n) {
      'use strict';
      n.d(e, 'a', function() {
        return s;
      });
      var r = n('7o/Q');
      function s(t, e) {
        return function(n) {
          if ('function' != typeof t) throw new TypeError('argument is not a function. Are you looking for `mapTo()`?');
          return n.lift(new i(t, e));
        };
      }
      class i {
        constructor(t, e) {
          (this.project = t), (this.thisArg = e);
        }
        call(t, e) {
          return e.subscribe(new o(t, this.project, this.thisArg));
        }
      }
      class o extends r.a {
        constructor(t, e, n) {
          super(t), (this.project = e), (this.count = 0), (this.thisArg = n || this);
        }
        _next(t) {
          let e;
          try {
            e = this.project.call(this.thisArg, t, this.count++);
          } catch (n) {
            return void this.destination.error(n);
          }
          this.destination.next(e);
        }
      }
    },
    mCNh: function(t, e, n) {
      'use strict';
      n.d(e, 'a', function() {
        return s;
      }),
        n.d(e, 'b', function() {
          return i;
        });
      var r = n('SpAZ');
      function s(...t) {
        return i(t);
      }
      function i(t) {
        return 0 === t.length
          ? r.a
          : 1 === t.length
          ? t[0]
          : function(e) {
              return t.reduce((t, e) => e(t), e);
            };
      }
    },
    n6bG: function(t, e, n) {
      'use strict';
      function r(t) {
        return 'function' == typeof t;
      }
      n.d(e, 'a', function() {
        return r;
      });
    },
    ngJS: function(t, e, n) {
      'use strict';
      n.d(e, 'a', function() {
        return r;
      });
      const r = t => e => {
        for (let n = 0, r = t.length; n < r && !e.closed; n++) e.next(t[n]);
        e.complete();
      };
    },
    ofXK: function(t, e, n) {
      'use strict';
      n.d(e, 'a', function() {
        return v;
      }),
        n.d(e, 'b', function() {
          return mt;
        }),
        n.d(e, 'c', function() {
          return l;
        }),
        n.d(e, 'd', function() {
          return T;
        }),
        n.d(e, 'e', function() {
          return C;
        }),
        n.d(e, 'f', function() {
          return h;
        }),
        n.d(e, 'g', function() {
          return S;
        }),
        n.d(e, 'h', function() {
          return b;
        }),
        n.d(e, 'i', function() {
          return at;
        }),
        n.d(e, 'j', function() {
          return ct;
        }),
        n.d(e, 'k', function() {
          return ht;
        }),
        n.d(e, 'l', function() {
          return ft;
        }),
        n.d(e, 'm', function() {
          return w;
        }),
        n.d(e, 'n', function() {
          return c;
        }),
        n.d(e, 'o', function() {
          return gt;
        }),
        n.d(e, 'p', function() {
          return k;
        }),
        n.d(e, 'q', function() {
          return _t;
        }),
        n.d(e, 'r', function() {
          return G;
        }),
        n.d(e, 's', function() {
          return R;
        }),
        n.d(e, 't', function() {
          return P;
        }),
        n.d(e, 'u', function() {
          return D;
        }),
        n.d(e, 'v', function() {
          return bt;
        }),
        n.d(e, 'w', function() {
          return a;
        }),
        n.d(e, 'x', function() {
          return yt;
        }),
        n.d(e, 'y', function() {
          return i;
        }),
        n.d(e, 'z', function() {
          return ot;
        }),
        n.d(e, 'A', function() {
          return o;
        });
      var r = n('fXoL');
      let s = null;
      function i() {
        return s;
      }
      function o(t) {
        s || (s = t);
      }
      class a {}
      const l = new r.q('DocumentToken');
      let c = (() => {
        class t {}
        return (
          (t.ɵfac = function(e) {
            return new (e || t)();
          }),
          (t.ɵprov = Object(r.Ib)({ factory: u, token: t, providedIn: 'platform' })),
          t
        );
      })();
      function u() {
        return Object(r.Zb)(d);
      }
      const h = new r.q('Location Initialized');
      let d = (() => {
        class t extends c {
          constructor(t) {
            super(), (this._doc = t), this._init();
          }
          _init() {
            (this.location = i().getLocation()), (this._history = i().getHistory());
          }
          getBaseHrefFromDOM() {
            return i().getBaseHref(this._doc);
          }
          onPopState(t) {
            i()
              .getGlobalEventTarget(this._doc, 'window')
              .addEventListener('popstate', t, !1);
          }
          onHashChange(t) {
            i()
              .getGlobalEventTarget(this._doc, 'window')
              .addEventListener('hashchange', t, !1);
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
          set pathname(t) {
            this.location.pathname = t;
          }
          pushState(t, e, n) {
            p() ? this._history.pushState(t, e, n) : (this.location.hash = n);
          }
          replaceState(t, e, n) {
            p() ? this._history.replaceState(t, e, n) : (this.location.hash = n);
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
        return (
          (t.ɵfac = function(e) {
            return new (e || t)(r.Zb(l));
          }),
          (t.ɵprov = Object(r.Ib)({ factory: f, token: t, providedIn: 'platform' })),
          t
        );
      })();
      function p() {
        return !!window.history.pushState;
      }
      function f() {
        return new d(Object(r.Zb)(l));
      }
      function g(t, e) {
        if (0 == t.length) return e;
        if (0 == e.length) return t;
        let n = 0;
        return (
          t.endsWith('/') && n++, e.startsWith('/') && n++, 2 == n ? t + e.substring(1) : 1 == n ? t + e : t + '/' + e
        );
      }
      function m(t) {
        const e = t.match(/#|\?|$/),
          n = (e && e.index) || t.length;
        return t.slice(0, n - ('/' === t[n - 1] ? 1 : 0)) + t.slice(n);
      }
      function y(t) {
        return t && '?' !== t[0] ? '?' + t : t;
      }
      let b = (() => {
        class t {}
        return (
          (t.ɵfac = function(e) {
            return new (e || t)();
          }),
          (t.ɵprov = Object(r.Ib)({ factory: _, token: t, providedIn: 'root' })),
          t
        );
      })();
      function _(t) {
        const e = Object(r.Zb)(l).location;
        return new w(Object(r.Zb)(c), (e && e.origin) || '');
      }
      const v = new r.q('appBaseHref');
      let w = (() => {
          class t extends b {
            constructor(t, e) {
              if (
                (super(),
                (this._platformLocation = t),
                null == e && (e = this._platformLocation.getBaseHrefFromDOM()),
                null == e)
              )
                throw new Error(
                  'No base href set. Please provide a value for the APP_BASE_HREF token or add a base element to the document.'
                );
              this._baseHref = e;
            }
            onPopState(t) {
              this._platformLocation.onPopState(t), this._platformLocation.onHashChange(t);
            }
            getBaseHref() {
              return this._baseHref;
            }
            prepareExternalUrl(t) {
              return g(this._baseHref, t);
            }
            path(t = !1) {
              const e = this._platformLocation.pathname + y(this._platformLocation.search),
                n = this._platformLocation.hash;
              return n && t ? `${e}${n}` : e;
            }
            pushState(t, e, n, r) {
              const s = this.prepareExternalUrl(n + y(r));
              this._platformLocation.pushState(t, e, s);
            }
            replaceState(t, e, n, r) {
              const s = this.prepareExternalUrl(n + y(r));
              this._platformLocation.replaceState(t, e, s);
            }
            forward() {
              this._platformLocation.forward();
            }
            back() {
              this._platformLocation.back();
            }
          }
          return (
            (t.ɵfac = function(e) {
              return new (e || t)(r.Zb(c), r.Zb(v, 8));
            }),
            (t.ɵprov = r.Ib({ token: t, factory: t.ɵfac })),
            t
          );
        })(),
        C = (() => {
          class t extends b {
            constructor(t, e) {
              super(), (this._platformLocation = t), (this._baseHref = ''), null != e && (this._baseHref = e);
            }
            onPopState(t) {
              this._platformLocation.onPopState(t), this._platformLocation.onHashChange(t);
            }
            getBaseHref() {
              return this._baseHref;
            }
            path(t = !1) {
              let e = this._platformLocation.hash;
              return null == e && (e = '#'), e.length > 0 ? e.substring(1) : e;
            }
            prepareExternalUrl(t) {
              const e = g(this._baseHref, t);
              return e.length > 0 ? '#' + e : e;
            }
            pushState(t, e, n, r) {
              let s = this.prepareExternalUrl(n + y(r));
              0 == s.length && (s = this._platformLocation.pathname), this._platformLocation.pushState(t, e, s);
            }
            replaceState(t, e, n, r) {
              let s = this.prepareExternalUrl(n + y(r));
              0 == s.length && (s = this._platformLocation.pathname), this._platformLocation.replaceState(t, e, s);
            }
            forward() {
              this._platformLocation.forward();
            }
            back() {
              this._platformLocation.back();
            }
          }
          return (
            (t.ɵfac = function(e) {
              return new (e || t)(r.Zb(c), r.Zb(v, 8));
            }),
            (t.ɵprov = r.Ib({ token: t, factory: t.ɵfac })),
            t
          );
        })(),
        S = (() => {
          class t {
            constructor(t, e) {
              (this._subject = new r.n()), (this._urlChangeListeners = []), (this._platformStrategy = t);
              const n = this._platformStrategy.getBaseHref();
              (this._platformLocation = e),
                (this._baseHref = m(x(n))),
                this._platformStrategy.onPopState(t => {
                  this._subject.emit({ url: this.path(!0), pop: !0, state: t.state, type: t.type });
                });
            }
            path(t = !1) {
              return this.normalize(this._platformStrategy.path(t));
            }
            getState() {
              return this._platformLocation.getState();
            }
            isCurrentPathEqualTo(t, e = '') {
              return this.path() == this.normalize(t + y(e));
            }
            normalize(e) {
              return t.stripTrailingSlash(
                (function(t, e) {
                  return t && e.startsWith(t) ? e.substring(t.length) : e;
                })(this._baseHref, x(e))
              );
            }
            prepareExternalUrl(t) {
              return t && '/' !== t[0] && (t = '/' + t), this._platformStrategy.prepareExternalUrl(t);
            }
            go(t, e = '', n = null) {
              this._platformStrategy.pushState(n, '', t, e),
                this._notifyUrlChangeListeners(this.prepareExternalUrl(t + y(e)), n);
            }
            replaceState(t, e = '', n = null) {
              this._platformStrategy.replaceState(n, '', t, e),
                this._notifyUrlChangeListeners(this.prepareExternalUrl(t + y(e)), n);
            }
            forward() {
              this._platformStrategy.forward();
            }
            back() {
              this._platformStrategy.back();
            }
            onUrlChange(t) {
              this._urlChangeListeners.push(t),
                this.subscribe(t => {
                  this._notifyUrlChangeListeners(t.url, t.state);
                });
            }
            _notifyUrlChangeListeners(t = '', e) {
              this._urlChangeListeners.forEach(n => n(t, e));
            }
            subscribe(t, e, n) {
              return this._subject.subscribe({ next: t, error: e, complete: n });
            }
          }
          return (
            (t.ɵfac = function(e) {
              return new (e || t)(r.Zb(b), r.Zb(c));
            }),
            (t.normalizeQueryParams = y),
            (t.joinWithSlash = g),
            (t.stripTrailingSlash = m),
            (t.ɵprov = Object(r.Ib)({ factory: E, token: t, providedIn: 'root' })),
            t
          );
        })();
      function E() {
        return new S(Object(r.Zb)(b), Object(r.Zb)(c));
      }
      function x(t) {
        return t.replace(/\/index.html$/, '');
      }
      const O = (function() {
          var t = { Zero: 0, One: 1, Two: 2, Few: 3, Many: 4, Other: 5 };
          return (
            (t[t.Zero] = 'Zero'),
            (t[t.One] = 'One'),
            (t[t.Two] = 'Two'),
            (t[t.Few] = 'Few'),
            (t[t.Many] = 'Many'),
            (t[t.Other] = 'Other'),
            t
          );
        })(),
        T = (function() {
          var t = { Format: 0, Standalone: 1 };
          return (t[t.Format] = 'Format'), (t[t.Standalone] = 'Standalone'), t;
        })(),
        k = (function() {
          var t = { Narrow: 0, Abbreviated: 1, Wide: 2, Short: 3 };
          return (
            (t[t.Narrow] = 'Narrow'),
            (t[t.Abbreviated] = 'Abbreviated'),
            (t[t.Wide] = 'Wide'),
            (t[t.Short] = 'Short'),
            t
          );
        })(),
        A = (function() {
          var t = { Short: 0, Medium: 1, Long: 2, Full: 3 };
          return (t[t.Short] = 'Short'), (t[t.Medium] = 'Medium'), (t[t.Long] = 'Long'), (t[t.Full] = 'Full'), t;
        })(),
        I = (function() {
          var t = {
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
            (t[t.Decimal] = 'Decimal'),
            (t[t.Group] = 'Group'),
            (t[t.List] = 'List'),
            (t[t.PercentSign] = 'PercentSign'),
            (t[t.PlusSign] = 'PlusSign'),
            (t[t.MinusSign] = 'MinusSign'),
            (t[t.Exponential] = 'Exponential'),
            (t[t.SuperscriptingExponent] = 'SuperscriptingExponent'),
            (t[t.PerMille] = 'PerMille'),
            (t[t.Infinity] = 'Infinity'),
            (t[t.NaN] = 'NaN'),
            (t[t.TimeSeparator] = 'TimeSeparator'),
            (t[t.CurrencyDecimal] = 'CurrencyDecimal'),
            (t[t.CurrencyGroup] = 'CurrencyGroup'),
            t
          );
        })();
      function P(t, e, n) {
        const s = Object(r.ib)(t),
          i = H([s[r.Y.DayPeriodsFormat], s[r.Y.DayPeriodsStandalone]], e);
        return H(i, n);
      }
      function R(t, e, n) {
        const s = Object(r.ib)(t),
          i = H([s[r.Y.DaysFormat], s[r.Y.DaysStandalone]], e);
        return H(i, n);
      }
      function D(t, e, n) {
        const s = Object(r.ib)(t),
          i = H([s[r.Y.MonthsFormat], s[r.Y.MonthsStandalone]], e);
        return H(i, n);
      }
      function j(t, e) {
        return H(Object(r.ib)(t)[r.Y.DateFormat], e);
      }
      function N(t, e) {
        return H(Object(r.ib)(t)[r.Y.TimeFormat], e);
      }
      function M(t, e) {
        return H(Object(r.ib)(t)[r.Y.DateTimeFormat], e);
      }
      function L(t, e) {
        const n = Object(r.ib)(t),
          s = n[r.Y.NumberSymbols][e];
        if (void 0 === s) {
          if (e === I.CurrencyDecimal) return n[r.Y.NumberSymbols][I.Decimal];
          if (e === I.CurrencyGroup) return n[r.Y.NumberSymbols][I.Group];
        }
        return s;
      }
      const F = r.lb;
      function V(t) {
        if (!t[r.Y.ExtraData])
          throw new Error(
            `Missing extra locale data for the locale "${
              t[r.Y.LocaleId]
            }". Use "registerLocaleData" to load new data. See the "I18n guide" on angular.io to know more.`
          );
      }
      function H(t, e) {
        for (let n = e; n > -1; n--) if (void 0 !== t[n]) return t[n];
        throw new Error('Locale data API: locale data undefined');
      }
      function U(t) {
        const [e, n] = t.split(':');
        return { hours: +e, minutes: +n };
      }
      const z = /^(\d{4})-?(\d\d)-?(\d\d)(?:T(\d\d)(?::?(\d\d)(?::?(\d\d)(?:\.(\d+))?)?)?(Z|([+-])(\d\d):?(\d\d))?)?$/,
        $ = {},
        B = /((?:[^GyMLwWdEabBhHmsSzZO']+)|(?:'(?:[^']|'')*')|(?:G{1,5}|y{1,4}|M{1,5}|L{1,5}|w{1,2}|W{1}|d{1,2}|E{1,6}|a{1,5}|b{1,5}|B{1,5}|h{1,2}|H{1,2}|m{1,2}|s{1,2}|S{1,3}|z{1,4}|Z{1,5}|O{1,4}))([\s\S]*)/,
        q = (function() {
          var t = { Short: 0, ShortGMT: 1, Long: 2, Extended: 3 };
          return (
            (t[t.Short] = 'Short'), (t[t.ShortGMT] = 'ShortGMT'), (t[t.Long] = 'Long'), (t[t.Extended] = 'Extended'), t
          );
        })(),
        Z = (function() {
          var t = { FullYear: 0, Month: 1, Date: 2, Hours: 3, Minutes: 4, Seconds: 5, FractionalSeconds: 6, Day: 7 };
          return (
            (t[t.FullYear] = 'FullYear'),
            (t[t.Month] = 'Month'),
            (t[t.Date] = 'Date'),
            (t[t.Hours] = 'Hours'),
            (t[t.Minutes] = 'Minutes'),
            (t[t.Seconds] = 'Seconds'),
            (t[t.FractionalSeconds] = 'FractionalSeconds'),
            (t[t.Day] = 'Day'),
            t
          );
        })(),
        Q = (function() {
          var t = { DayPeriods: 0, Days: 1, Months: 2, Eras: 3 };
          return (
            (t[t.DayPeriods] = 'DayPeriods'), (t[t.Days] = 'Days'), (t[t.Months] = 'Months'), (t[t.Eras] = 'Eras'), t
          );
        })();
      function G(t, e, n, s) {
        let i = (function(t) {
          if (rt(t)) return t;
          if ('number' == typeof t && !isNaN(t)) return new Date(t);
          if ('string' == typeof t) {
            t = t.trim();
            const e = parseFloat(t);
            if (!isNaN(t - e)) return new Date(e);
            if (/^(\d{4}-\d{1,2}-\d{1,2})$/.test(t)) {
              const [e, n, r] = t.split('-').map(t => +t);
              return new Date(e, n - 1, r);
            }
            let n;
            if ((n = t.match(z)))
              return (function(t) {
                const e = new Date(0);
                let n = 0,
                  r = 0;
                const s = t[8] ? e.setUTCFullYear : e.setFullYear,
                  i = t[8] ? e.setUTCHours : e.setHours;
                t[9] && ((n = Number(t[9] + t[10])), (r = Number(t[9] + t[11]))),
                  s.call(e, Number(t[1]), Number(t[2]) - 1, Number(t[3]));
                const o = Number(t[4] || 0) - n,
                  a = Number(t[5] || 0) - r,
                  l = Number(t[6] || 0),
                  c = Math.round(1e3 * parseFloat('0.' + (t[7] || 0)));
                return i.call(e, o, a, l, c), e;
              })(n);
          }
          const e = new Date(t);
          if (!rt(e)) throw new Error(`Unable to convert "${t}" into a date`);
          return e;
        })(t);
        e =
          (function t(e, n) {
            const s = (function(t) {
              return Object(r.ib)(t)[r.Y.LocaleId];
            })(e);
            if ((($[s] = $[s] || {}), $[s][n])) return $[s][n];
            let i = '';
            switch (n) {
              case 'shortDate':
                i = j(e, A.Short);
                break;
              case 'mediumDate':
                i = j(e, A.Medium);
                break;
              case 'longDate':
                i = j(e, A.Long);
                break;
              case 'fullDate':
                i = j(e, A.Full);
                break;
              case 'shortTime':
                i = N(e, A.Short);
                break;
              case 'mediumTime':
                i = N(e, A.Medium);
                break;
              case 'longTime':
                i = N(e, A.Long);
                break;
              case 'fullTime':
                i = N(e, A.Full);
                break;
              case 'short':
                const n = t(e, 'shortTime'),
                  r = t(e, 'shortDate');
                i = W(M(e, A.Short), [n, r]);
                break;
              case 'medium':
                const s = t(e, 'mediumTime'),
                  o = t(e, 'mediumDate');
                i = W(M(e, A.Medium), [s, o]);
                break;
              case 'long':
                const a = t(e, 'longTime'),
                  l = t(e, 'longDate');
                i = W(M(e, A.Long), [a, l]);
                break;
              case 'full':
                const c = t(e, 'fullTime'),
                  u = t(e, 'fullDate');
                i = W(M(e, A.Full), [c, u]);
            }
            return i && ($[s][n] = i), i;
          })(n, e) || e;
        let o,
          a = [];
        for (; e; ) {
          if (((o = B.exec(e)), !o)) {
            a.push(e);
            break;
          }
          {
            a = a.concat(o.slice(1));
            const t = a.pop();
            if (!t) break;
            e = t;
          }
        }
        let l = i.getTimezoneOffset();
        s &&
          ((l = nt(s, l)),
          (i = (function(t, e, n) {
            const r = t.getTimezoneOffset();
            return (function(t, e) {
              return (t = new Date(t.getTime())).setMinutes(t.getMinutes() + e), t;
            })(t, -1 * (nt(e, r) - r));
          })(i, s)));
        let c = '';
        return (
          a.forEach(t => {
            const e = (function(t) {
              if (et[t]) return et[t];
              let e;
              switch (t) {
                case 'G':
                case 'GG':
                case 'GGG':
                  e = Y(Q.Eras, k.Abbreviated);
                  break;
                case 'GGGG':
                  e = Y(Q.Eras, k.Wide);
                  break;
                case 'GGGGG':
                  e = Y(Q.Eras, k.Narrow);
                  break;
                case 'y':
                  e = J(Z.FullYear, 1, 0, !1, !0);
                  break;
                case 'yy':
                  e = J(Z.FullYear, 2, 0, !0, !0);
                  break;
                case 'yyy':
                  e = J(Z.FullYear, 3, 0, !1, !0);
                  break;
                case 'yyyy':
                  e = J(Z.FullYear, 4, 0, !1, !0);
                  break;
                case 'M':
                case 'L':
                  e = J(Z.Month, 1, 1);
                  break;
                case 'MM':
                case 'LL':
                  e = J(Z.Month, 2, 1);
                  break;
                case 'MMM':
                  e = Y(Q.Months, k.Abbreviated);
                  break;
                case 'MMMM':
                  e = Y(Q.Months, k.Wide);
                  break;
                case 'MMMMM':
                  e = Y(Q.Months, k.Narrow);
                  break;
                case 'LLL':
                  e = Y(Q.Months, k.Abbreviated, T.Standalone);
                  break;
                case 'LLLL':
                  e = Y(Q.Months, k.Wide, T.Standalone);
                  break;
                case 'LLLLL':
                  e = Y(Q.Months, k.Narrow, T.Standalone);
                  break;
                case 'w':
                  e = tt(1);
                  break;
                case 'ww':
                  e = tt(2);
                  break;
                case 'W':
                  e = tt(1, !0);
                  break;
                case 'd':
                  e = J(Z.Date, 1);
                  break;
                case 'dd':
                  e = J(Z.Date, 2);
                  break;
                case 'E':
                case 'EE':
                case 'EEE':
                  e = Y(Q.Days, k.Abbreviated);
                  break;
                case 'EEEE':
                  e = Y(Q.Days, k.Wide);
                  break;
                case 'EEEEE':
                  e = Y(Q.Days, k.Narrow);
                  break;
                case 'EEEEEE':
                  e = Y(Q.Days, k.Short);
                  break;
                case 'a':
                case 'aa':
                case 'aaa':
                  e = Y(Q.DayPeriods, k.Abbreviated);
                  break;
                case 'aaaa':
                  e = Y(Q.DayPeriods, k.Wide);
                  break;
                case 'aaaaa':
                  e = Y(Q.DayPeriods, k.Narrow);
                  break;
                case 'b':
                case 'bb':
                case 'bbb':
                  e = Y(Q.DayPeriods, k.Abbreviated, T.Standalone, !0);
                  break;
                case 'bbbb':
                  e = Y(Q.DayPeriods, k.Wide, T.Standalone, !0);
                  break;
                case 'bbbbb':
                  e = Y(Q.DayPeriods, k.Narrow, T.Standalone, !0);
                  break;
                case 'B':
                case 'BB':
                case 'BBB':
                  e = Y(Q.DayPeriods, k.Abbreviated, T.Format, !0);
                  break;
                case 'BBBB':
                  e = Y(Q.DayPeriods, k.Wide, T.Format, !0);
                  break;
                case 'BBBBB':
                  e = Y(Q.DayPeriods, k.Narrow, T.Format, !0);
                  break;
                case 'h':
                  e = J(Z.Hours, 1, -12);
                  break;
                case 'hh':
                  e = J(Z.Hours, 2, -12);
                  break;
                case 'H':
                  e = J(Z.Hours, 1);
                  break;
                case 'HH':
                  e = J(Z.Hours, 2);
                  break;
                case 'm':
                  e = J(Z.Minutes, 1);
                  break;
                case 'mm':
                  e = J(Z.Minutes, 2);
                  break;
                case 's':
                  e = J(Z.Seconds, 1);
                  break;
                case 'ss':
                  e = J(Z.Seconds, 2);
                  break;
                case 'S':
                  e = J(Z.FractionalSeconds, 1);
                  break;
                case 'SS':
                  e = J(Z.FractionalSeconds, 2);
                  break;
                case 'SSS':
                  e = J(Z.FractionalSeconds, 3);
                  break;
                case 'Z':
                case 'ZZ':
                case 'ZZZ':
                  e = X(q.Short);
                  break;
                case 'ZZZZZ':
                  e = X(q.Extended);
                  break;
                case 'O':
                case 'OO':
                case 'OOO':
                case 'z':
                case 'zz':
                case 'zzz':
                  e = X(q.ShortGMT);
                  break;
                case 'OOOO':
                case 'ZZZZ':
                case 'zzzz':
                  e = X(q.Long);
                  break;
                default:
                  return null;
              }
              return (et[t] = e), e;
            })(t);
            c += e ? e(i, n, l) : "''" === t ? "'" : t.replace(/(^'|'$)/g, '').replace(/''/g, "'");
          }),
          c
        );
      }
      function W(t, e) {
        return (
          e &&
            (t = t.replace(/\{([^}]+)}/g, function(t, n) {
              return null != e && n in e ? e[n] : t;
            })),
          t
        );
      }
      function K(t, e, n = '-', r, s) {
        let i = '';
        (t < 0 || (s && t <= 0)) && (s ? (t = 1 - t) : ((t = -t), (i = n)));
        let o = String(t);
        for (; o.length < e; ) o = '0' + o;
        return r && (o = o.substr(o.length - e)), i + o;
      }
      function J(t, e, n = 0, r = !1, s = !1) {
        return function(i, o) {
          let a = (function(t, e) {
            switch (t) {
              case Z.FullYear:
                return e.getFullYear();
              case Z.Month:
                return e.getMonth();
              case Z.Date:
                return e.getDate();
              case Z.Hours:
                return e.getHours();
              case Z.Minutes:
                return e.getMinutes();
              case Z.Seconds:
                return e.getSeconds();
              case Z.FractionalSeconds:
                return e.getMilliseconds();
              case Z.Day:
                return e.getDay();
              default:
                throw new Error(`Unknown DateType value "${t}".`);
            }
          })(t, i);
          if (((n > 0 || a > -n) && (a += n), t === Z.Hours)) 0 === a && -12 === n && (a = 12);
          else if (t === Z.FractionalSeconds) return (l = e), K(a, 3).substr(0, l);
          var l;
          const c = L(o, I.MinusSign);
          return K(a, e, c, r, s);
        };
      }
      function Y(t, e, n = T.Format, s = !1) {
        return function(i, o) {
          return (function(t, e, n, s, i, o) {
            switch (n) {
              case Q.Months:
                return D(e, i, s)[t.getMonth()];
              case Q.Days:
                return R(e, i, s)[t.getDay()];
              case Q.DayPeriods:
                const a = t.getHours(),
                  l = t.getMinutes();
                if (o) {
                  const t = (function(t) {
                      const e = Object(r.ib)(t);
                      return (
                        V(e), (e[r.Y.ExtraData][2] || []).map(t => ('string' == typeof t ? U(t) : [U(t[0]), U(t[1])]))
                      );
                    })(e),
                    n = (function(t, e, n) {
                      const s = Object(r.ib)(t);
                      V(s);
                      const i = H([s[r.Y.ExtraData][0], s[r.Y.ExtraData][1]], e) || [];
                      return H(i, n) || [];
                    })(e, i, s);
                  let o;
                  if (
                    (t.forEach((t, e) => {
                      if (Array.isArray(t)) {
                        const { hours: r, minutes: s } = t[0],
                          { hours: i, minutes: c } = t[1];
                        a >= r && l >= s && (a < i || (a === i && l < c)) && (o = n[e]);
                      } else {
                        const { hours: r, minutes: s } = t;
                        r === a && s === l && (o = n[e]);
                      }
                    }),
                    o)
                  )
                    return o;
                }
                return P(e, i, s)[a < 12 ? 0 : 1];
              case Q.Eras:
                return (function(t, e) {
                  return H(Object(r.ib)(t)[r.Y.Eras], e);
                })(e, s)[t.getFullYear() <= 0 ? 0 : 1];
              default:
                throw new Error('unexpected translation type ' + n);
            }
          })(i, o, t, e, n, s);
        };
      }
      function X(t) {
        return function(e, n, r) {
          const s = -1 * r,
            i = L(n, I.MinusSign),
            o = s > 0 ? Math.floor(s / 60) : Math.ceil(s / 60);
          switch (t) {
            case q.Short:
              return (s >= 0 ? '+' : '') + K(o, 2, i) + K(Math.abs(s % 60), 2, i);
            case q.ShortGMT:
              return 'GMT' + (s >= 0 ? '+' : '') + K(o, 1, i);
            case q.Long:
              return 'GMT' + (s >= 0 ? '+' : '') + K(o, 2, i) + ':' + K(Math.abs(s % 60), 2, i);
            case q.Extended:
              return 0 === r ? 'Z' : (s >= 0 ? '+' : '') + K(o, 2, i) + ':' + K(Math.abs(s % 60), 2, i);
            default:
              throw new Error(`Unknown zone width "${t}"`);
          }
        };
      }
      function tt(t, e = !1) {
        return function(n, r) {
          let s;
          if (e) {
            const t = new Date(n.getFullYear(), n.getMonth(), 1).getDay() - 1,
              e = n.getDate();
            s = 1 + Math.floor((e + t) / 7);
          } else {
            const t = (function(t) {
                const e = new Date(t, 0, 1).getDay();
                return new Date(t, 0, 1 + (e <= 4 ? 4 : 11) - e);
              })(n.getFullYear()),
              e =
                ((i = n), new Date(i.getFullYear(), i.getMonth(), i.getDate() + (4 - i.getDay()))).getTime() -
                t.getTime();
            s = 1 + Math.round(e / 6048e5);
          }
          var i;
          return K(s, t, L(r, I.MinusSign));
        };
      }
      const et = {};
      function nt(t, e) {
        t = t.replace(/:/g, '');
        const n = Date.parse('Jan 01, 1970 00:00:00 ' + t) / 6e4;
        return isNaN(n) ? e : n;
      }
      function rt(t) {
        return t instanceof Date && !isNaN(t.valueOf());
      }
      class st {}
      let it = (() => {
        class t extends st {
          constructor(t) {
            super(), (this.locale = t);
          }
          getPluralCategory(t, e) {
            switch (F(e || this.locale)(t)) {
              case O.Zero:
                return 'zero';
              case O.One:
                return 'one';
              case O.Two:
                return 'two';
              case O.Few:
                return 'few';
              case O.Many:
                return 'many';
              default:
                return 'other';
            }
          }
        }
        return (
          (t.ɵfac = function(e) {
            return new (e || t)(r.Zb(r.u));
          }),
          (t.ɵprov = r.Ib({ token: t, factory: t.ɵfac })),
          t
        );
      })();
      function ot(t, e) {
        e = encodeURIComponent(e);
        for (const n of t.split(';')) {
          const t = n.indexOf('='),
            [r, s] = -1 == t ? [n, ''] : [n.slice(0, t), n.slice(t + 1)];
          if (r.trim() === e) return decodeURIComponent(s);
        }
        return null;
      }
      let at = (() => {
        class t {
          constructor(t, e, n, r) {
            (this._iterableDiffers = t),
              (this._keyValueDiffers = e),
              (this._ngEl = n),
              (this._renderer = r),
              (this._iterableDiffer = null),
              (this._keyValueDiffer = null),
              (this._initialClasses = []),
              (this._rawClass = null);
          }
          set klass(t) {
            this._removeClasses(this._initialClasses),
              (this._initialClasses = 'string' == typeof t ? t.split(/\s+/) : []),
              this._applyClasses(this._initialClasses),
              this._applyClasses(this._rawClass);
          }
          set ngClass(t) {
            this._removeClasses(this._rawClass),
              this._applyClasses(this._initialClasses),
              (this._iterableDiffer = null),
              (this._keyValueDiffer = null),
              (this._rawClass = 'string' == typeof t ? t.split(/\s+/) : t),
              this._rawClass &&
                (Object(r.ob)(this._rawClass)
                  ? (this._iterableDiffer = this._iterableDiffers.find(this._rawClass).create())
                  : (this._keyValueDiffer = this._keyValueDiffers.find(this._rawClass).create()));
          }
          ngDoCheck() {
            if (this._iterableDiffer) {
              const t = this._iterableDiffer.diff(this._rawClass);
              t && this._applyIterableChanges(t);
            } else if (this._keyValueDiffer) {
              const t = this._keyValueDiffer.diff(this._rawClass);
              t && this._applyKeyValueChanges(t);
            }
          }
          _applyKeyValueChanges(t) {
            t.forEachAddedItem(t => this._toggleClass(t.key, t.currentValue)),
              t.forEachChangedItem(t => this._toggleClass(t.key, t.currentValue)),
              t.forEachRemovedItem(t => {
                t.previousValue && this._toggleClass(t.key, !1);
              });
          }
          _applyIterableChanges(t) {
            t.forEachAddedItem(t => {
              if ('string' != typeof t.item)
                throw new Error(
                  'NgClass can only toggle CSS classes expressed as strings, got ' + Object(r.ub)(t.item)
                );
              this._toggleClass(t.item, !0);
            }),
              t.forEachRemovedItem(t => this._toggleClass(t.item, !1));
          }
          _applyClasses(t) {
            t &&
              (Array.isArray(t) || t instanceof Set
                ? t.forEach(t => this._toggleClass(t, !0))
                : Object.keys(t).forEach(e => this._toggleClass(e, !!t[e])));
          }
          _removeClasses(t) {
            t &&
              (Array.isArray(t) || t instanceof Set
                ? t.forEach(t => this._toggleClass(t, !1))
                : Object.keys(t).forEach(t => this._toggleClass(t, !1)));
          }
          _toggleClass(t, e) {
            (t = t.trim()) &&
              t.split(/\s+/g).forEach(t => {
                e
                  ? this._renderer.addClass(this._ngEl.nativeElement, t)
                  : this._renderer.removeClass(this._ngEl.nativeElement, t);
              });
          }
        }
        return (
          (t.ɵfac = function(e) {
            return new (e || t)(r.Mb(r.s), r.Mb(r.t), r.Mb(r.l), r.Mb(r.D));
          }),
          (t.ɵdir = r.Hb({
            type: t,
            selectors: [['', 'ngClass', '']],
            inputs: { klass: ['class', 'klass'], ngClass: 'ngClass' }
          })),
          t
        );
      })();
      class lt {
        constructor(t, e, n, r) {
          (this.$implicit = t), (this.ngForOf = e), (this.index = n), (this.count = r);
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
      let ct = (() => {
        class t {
          constructor(t, e, n) {
            (this._viewContainer = t),
              (this._template = e),
              (this._differs = n),
              (this._ngForOf = null),
              (this._ngForOfDirty = !0),
              (this._differ = null);
          }
          set ngForOf(t) {
            (this._ngForOf = t), (this._ngForOfDirty = !0);
          }
          set ngForTrackBy(t) {
            Object(r.T)() &&
              null != t &&
              'function' != typeof t &&
              console &&
              console.warn &&
              console.warn(
                `trackBy must be a function, but received ${JSON.stringify(
                  t
                )}. See https://angular.io/api/common/NgForOf#change-propagation for more information.`
              ),
              (this._trackByFn = t);
          }
          get ngForTrackBy() {
            return this._trackByFn;
          }
          set ngForTemplate(t) {
            t && (this._template = t);
          }
          ngDoCheck() {
            if (this._ngForOfDirty) {
              this._ngForOfDirty = !1;
              const n = this._ngForOf;
              if (!this._differ && n)
                try {
                  this._differ = this._differs.find(n).create(this.ngForTrackBy);
                } catch (e) {
                  throw new Error(
                    `Cannot find a differ supporting object '${n}' of type '${((t = n),
                    t.name || typeof t)}'. NgFor only supports binding to Iterables such as Arrays.`
                  );
                }
            }
            var t;
            if (this._differ) {
              const t = this._differ.diff(this._ngForOf);
              t && this._applyChanges(t);
            }
          }
          _applyChanges(t) {
            const e = [];
            t.forEachOperation((t, n, r) => {
              if (null == t.previousIndex) {
                const n = this._viewContainer.createEmbeddedView(
                    this._template,
                    new lt(null, this._ngForOf, -1, -1),
                    null === r ? void 0 : r
                  ),
                  s = new ut(t, n);
                e.push(s);
              } else if (null == r) this._viewContainer.remove(null === n ? void 0 : n);
              else if (null !== n) {
                const s = this._viewContainer.get(n);
                this._viewContainer.move(s, r);
                const i = new ut(t, s);
                e.push(i);
              }
            });
            for (let n = 0; n < e.length; n++) this._perViewChange(e[n].view, e[n].record);
            for (let n = 0, r = this._viewContainer.length; n < r; n++) {
              const t = this._viewContainer.get(n);
              (t.context.index = n), (t.context.count = r), (t.context.ngForOf = this._ngForOf);
            }
            t.forEachIdentityChange(t => {
              this._viewContainer.get(t.currentIndex).context.$implicit = t.item;
            });
          }
          _perViewChange(t, e) {
            t.context.$implicit = e.item;
          }
          static ngTemplateContextGuard(t, e) {
            return !0;
          }
        }
        return (
          (t.ɵfac = function(e) {
            return new (e || t)(r.Mb(r.N), r.Mb(r.K), r.Mb(r.s));
          }),
          (t.ɵdir = r.Hb({
            type: t,
            selectors: [['', 'ngFor', '', 'ngForOf', '']],
            inputs: { ngForOf: 'ngForOf', ngForTrackBy: 'ngForTrackBy', ngForTemplate: 'ngForTemplate' }
          })),
          t
        );
      })();
      class ut {
        constructor(t, e) {
          (this.record = t), (this.view = e);
        }
      }
      let ht = (() => {
        class t {
          constructor(t, e) {
            (this._viewContainer = t),
              (this._context = new dt()),
              (this._thenTemplateRef = null),
              (this._elseTemplateRef = null),
              (this._thenViewRef = null),
              (this._elseViewRef = null),
              (this._thenTemplateRef = e);
          }
          set ngIf(t) {
            (this._context.$implicit = this._context.ngIf = t), this._updateView();
          }
          set ngIfThen(t) {
            pt('ngIfThen', t), (this._thenTemplateRef = t), (this._thenViewRef = null), this._updateView();
          }
          set ngIfElse(t) {
            pt('ngIfElse', t), (this._elseTemplateRef = t), (this._elseViewRef = null), this._updateView();
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
          static ngTemplateContextGuard(t, e) {
            return !0;
          }
        }
        return (
          (t.ɵfac = function(e) {
            return new (e || t)(r.Mb(r.N), r.Mb(r.K));
          }),
          (t.ɵdir = r.Hb({
            type: t,
            selectors: [['', 'ngIf', '']],
            inputs: { ngIf: 'ngIf', ngIfThen: 'ngIfThen', ngIfElse: 'ngIfElse' }
          })),
          t
        );
      })();
      class dt {
        constructor() {
          (this.$implicit = null), (this.ngIf = null);
        }
      }
      function pt(t, e) {
        if (e && !e.createEmbeddedView)
          throw new Error(`${t} must be a TemplateRef, but received '${Object(r.ub)(e)}'.`);
      }
      let ft = (() => {
          class t {
            constructor(t) {
              (this._viewContainerRef = t),
                (this._viewRef = null),
                (this.ngTemplateOutletContext = null),
                (this.ngTemplateOutlet = null);
            }
            ngOnChanges(t) {
              if (this._shouldRecreateView(t)) {
                const t = this._viewContainerRef;
                this._viewRef && t.remove(t.indexOf(this._viewRef)),
                  (this._viewRef = this.ngTemplateOutlet
                    ? t.createEmbeddedView(this.ngTemplateOutlet, this.ngTemplateOutletContext)
                    : null);
              } else
                this._viewRef &&
                  this.ngTemplateOutletContext &&
                  this._updateExistingContext(this.ngTemplateOutletContext);
            }
            _shouldRecreateView(t) {
              const e = t.ngTemplateOutletContext;
              return !!t.ngTemplateOutlet || (e && this._hasContextShapeChanged(e));
            }
            _hasContextShapeChanged(t) {
              const e = Object.keys(t.previousValue || {}),
                n = Object.keys(t.currentValue || {});
              if (e.length === n.length) {
                for (let t of n) if (-1 === e.indexOf(t)) return !0;
                return !1;
              }
              return !0;
            }
            _updateExistingContext(t) {
              for (let e of Object.keys(t)) this._viewRef.context[e] = this.ngTemplateOutletContext[e];
            }
          }
          return (
            (t.ɵfac = function(e) {
              return new (e || t)(r.Mb(r.N));
            }),
            (t.ɵdir = r.Hb({
              type: t,
              selectors: [['', 'ngTemplateOutlet', '']],
              inputs: { ngTemplateOutletContext: 'ngTemplateOutletContext', ngTemplateOutlet: 'ngTemplateOutlet' },
              features: [r.xb]
            })),
            t
          );
        })(),
        gt = (() => {
          class t {
            transform(e, n, s) {
              if (null == e) return e;
              if (!this.supports(e))
                throw (function(t, e) {
                  return Error(`InvalidPipeArgument: '${e}' for pipe '${Object(r.ub)(t)}'`);
                })(t, e);
              return e.slice(n, s);
            }
            supports(t) {
              return 'string' == typeof t || Array.isArray(t);
            }
          }
          return (
            (t.ɵfac = function(e) {
              return new (e || t)();
            }),
            (t.ɵpipe = r.Lb({ name: 'slice', type: t, pure: !1 })),
            t
          );
        })(),
        mt = (() => {
          class t {}
          return (
            (t.ɵmod = r.Kb({ type: t })),
            (t.ɵinj = r.Jb({
              factory: function(e) {
                return new (e || t)();
              },
              providers: [{ provide: st, useClass: it }]
            })),
            t
          );
        })();
      const yt = 'browser';
      function bt(t) {
        return t === yt;
      }
      let _t = (() => {
        class t {}
        return (
          (t.ɵprov = Object(r.Ib)({
            token: t,
            providedIn: 'root',
            factory: () => new vt(Object(r.Zb)(l), window, Object(r.Zb)(r.m))
          })),
          t
        );
      })();
      class vt {
        constructor(t, e, n) {
          (this.document = t), (this.window = e), (this.errorHandler = n), (this.offset = () => [0, 0]);
        }
        setOffset(t) {
          this.offset = Array.isArray(t) ? () => t : t;
        }
        getScrollPosition() {
          return this.supportScrollRestoration() ? [this.window.scrollX, this.window.scrollY] : [0, 0];
        }
        scrollToPosition(t) {
          this.supportScrollRestoration() && this.window.scrollTo(t[0], t[1]);
        }
        scrollToAnchor(t) {
          if (this.supportScrollRestoration()) {
            t =
              this.window.CSS && this.window.CSS.escape
                ? this.window.CSS.escape(t)
                : t.replace(/(\"|\'\ |:|\.|\[|\]|,|=)/g, '\\$1');
            try {
              const e = this.document.querySelector('#' + t);
              if (e) return void this.scrollToElement(e);
              const n = this.document.querySelector(`[name='${t}']`);
              if (n) return void this.scrollToElement(n);
            } catch (e) {
              this.errorHandler.handleError(e);
            }
          }
        }
        setHistoryScrollRestoration(t) {
          if (this.supportScrollRestoration()) {
            const e = this.window.history;
            e && e.scrollRestoration && (e.scrollRestoration = t);
          }
        }
        scrollToElement(t) {
          const e = t.getBoundingClientRect(),
            n = e.left + this.window.pageXOffset,
            r = e.top + this.window.pageYOffset,
            s = this.offset();
          this.window.scrollTo(n - s[0], r - s[1]);
        }
        supportScrollRestoration() {
          try {
            return !!this.window && !!this.window.scrollTo;
          } catch (t) {
            return !1;
          }
        }
      }
    },
    quSY: function(t, e, n) {
      'use strict';
      n.d(e, 'a', function() {
        return a;
      });
      var r = n('DH7j'),
        s = n('XoHu'),
        i = n('n6bG');
      const o = (() => {
        function t(t) {
          return (
            Error.call(this),
            (this.message = t
              ? `${t.length} errors occurred during unsubscription:\n${t
                  .map((t, e) => `${e + 1}) ${t.toString()}`)
                  .join('\n  ')}`
              : ''),
            (this.name = 'UnsubscriptionError'),
            (this.errors = t),
            this
          );
        }
        return (t.prototype = Object.create(Error.prototype)), t;
      })();
      let a = (() => {
        class t {
          constructor(t) {
            (this.closed = !1),
              (this._parentOrParents = null),
              (this._subscriptions = null),
              t && (this._unsubscribe = t);
          }
          unsubscribe() {
            let e;
            if (this.closed) return;
            let { _parentOrParents: n, _unsubscribe: a, _subscriptions: c } = this;
            if (((this.closed = !0), (this._parentOrParents = null), (this._subscriptions = null), n instanceof t))
              n.remove(this);
            else if (null !== n) for (let t = 0; t < n.length; ++t) n[t].remove(this);
            if (Object(i.a)(a))
              try {
                a.call(this);
              } catch (u) {
                e = u instanceof o ? l(u.errors) : [u];
              }
            if (Object(r.a)(c)) {
              let t = -1,
                n = c.length;
              for (; ++t < n; ) {
                const n = c[t];
                if (Object(s.a)(n))
                  try {
                    n.unsubscribe();
                  } catch (u) {
                    (e = e || []), u instanceof o ? (e = e.concat(l(u.errors))) : e.push(u);
                  }
              }
            }
            if (e) throw new o(e);
          }
          add(e) {
            let n = e;
            if (!e) return t.EMPTY;
            switch (typeof e) {
              case 'function':
                n = new t(e);
              case 'object':
                if (n === this || n.closed || 'function' != typeof n.unsubscribe) return n;
                if (this.closed) return n.unsubscribe(), n;
                if (!(n instanceof t)) {
                  const e = n;
                  (n = new t()), (n._subscriptions = [e]);
                }
                break;
              default:
                throw new Error('unrecognized teardown ' + e + ' added to Subscription.');
            }
            let { _parentOrParents: r } = n;
            if (null === r) n._parentOrParents = this;
            else if (r instanceof t) {
              if (r === this) return n;
              n._parentOrParents = [r, this];
            } else {
              if (-1 !== r.indexOf(this)) return n;
              r.push(this);
            }
            const s = this._subscriptions;
            return null === s ? (this._subscriptions = [n]) : s.push(n), n;
          }
          remove(t) {
            const e = this._subscriptions;
            if (e) {
              const n = e.indexOf(t);
              -1 !== n && e.splice(n, 1);
            }
          }
        }
        var e;
        return (t.EMPTY = (((e = new t()).closed = !0), e)), t;
      })();
      function l(t) {
        return t.reduce((t, e) => t.concat(e instanceof o ? e.errors : e), []);
      }
    },
    'rB/T': function(t, e, n) {
      'use strict';
      function r(t) {
        for (var n in t) e.hasOwnProperty(n) || (e[n] = t[n]);
      }
      Object.defineProperty(e, '__esModule', { value: !0 }), r(n('LbVS')), r(n('vauT')), r(n('PsNa'));
    },
    vauT: function(t, e, n) {
      'use strict';
      function r() {
        var t = document.querySelectorAll('input, textarea, select');
        return Array.prototype.slice.call(t).map(function(t) {
          var e = t.tagName.toLowerCase(),
            n = t.type,
            r = t.id && 'string' == typeof t.id ? t.id : null,
            s = t.name && 'string' == typeof t.name ? t.name : null,
            i = t.value && 'string' == typeof t.value ? t.value : null,
            o = t.childNodes,
            a = Boolean(t.selected),
            l = { tag: e, type: null, id: r, name: s, value: '', checked: !1, options: [] };
          if ('input' === e || 'textarea' === e) {
            if (((l.type = n), 'input' !== e)) return (l.value = i), l;
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
          } else if ('select' === e) {
            var c = Array.prototype.slice.call(o).map(function(t, e) {
              return { value: t.value, selected: Boolean(t.selected) };
            });
            return (l.options = c), l;
          }
          return l;
        });
      }
      function s(t) {
        var e = document.querySelectorAll('input, textarea');
        t.forEach(function(t, n) {
          if ('input' === t.tag || 'textarea' === t.tag)
            if ('input' !== t.tag || ('checkbox' !== t.type && 'radio' !== t.type))
              ('input' !== t.tagName.toLowerCase() ||
                ('image' !== t.type && 'button' !== t.type && 'submit' !== t.type && 'reset' !== t.type)) &&
                (null === t.id && null === t.name
                  ? !t.value.length ||
                    !e[n] ||
                    e[n].tagName.toLowerCase() !== t.tag ||
                    ('textarea' !== t.tag && e[n].getAttribute('type') !== t.type) ||
                    ('string' == typeof e[n].id && e[n].id.length) ||
                    ('string' == typeof e[n].getAttribute('name') && e[n].getAttribute('name').length) ||
                    ((e[n].value = t.value), e[n].dispatchEvent(new CustomEvent('input', { detail: e[n].value })))
                  : ((r =
                      'input' +
                      (null !== t.id ? '#' + t.id : '') +
                      ('input' === t.tag ? '[type="' + t.type + '"]' : '') +
                      (null !== t.name ? '[name="' + t.name + '"]' : '')),
                    (s = document.body.querySelector(r)) &&
                      t.value.length &&
                      ((s.value = t.value), s.dispatchEvent(new CustomEvent('input', { detail: s.value })))));
            else {
              var r =
                'input' +
                (null !== t.id ? '#' + t.id : '') +
                '[type="' +
                t.type +
                '"]' +
                (null !== t.name ? '[name="' + t.name + '"]' : '') +
                '[value="' +
                t.value +
                '"]';
              (s = document.body.querySelector(r)) &&
                Boolean(t.checked) &&
                ((s.checked = 'checked'), s.dispatchEvent(new CustomEvent('input', { detail: s.checked })));
            }
          else if ('select' === t.tag) {
            var s,
              i = null;
            null === t.id && null === t.name
              ? !e[n] ||
                e[n].tagName.toLowerCase() !== t.tag ||
                ('string' == typeof e[n].id && e[n].id.length) ||
                ('string' == typeof e[n].getAttribute('name') && e[n].getAttribute('name').length) ||
                (i = e[n])
              : ((r =
                  'select' + (null !== t.id ? '#' + t.id : '') + (null !== t.name ? '[name="' + t.name + '"]' : '')),
                (s = document.body.querySelector(r)) && (i = s)),
              i &&
                t.options.forEach(function(t, e) {
                  var n = i.querySelector('option[value="' + t.value + '"]');
                  n ||
                    !i.childNodes[e] ||
                    ('string' == typeof i.childNodes[e].value && i.childNodes[e].value.length) ||
                    (n = i.childNodes[e]),
                    n &&
                      t.selected &&
                      ((n.selected = 'selected'), n.dispatchEvent(new CustomEvent('input', { detail: n.selected })));
                });
          }
        });
      }
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.__getInputValues = r),
        (e.__setInputValues = s),
        (e.__createInputTransfer = function() {
          var t = r();
          return function() {
            return s(t);
          };
        });
    },
    w1tV: function(t, e, n) {
      'use strict';
      n.d(e, 'a', function() {
        return f;
      });
      var r = n('XNiG'),
        s = n('HDdC'),
        i = n('7o/Q'),
        o = n('quSY');
      function a() {
        return function(t) {
          return t.lift(new l(t));
        };
      }
      class l {
        constructor(t) {
          this.connectable = t;
        }
        call(t, e) {
          const { connectable: n } = this;
          n._refCount++;
          const r = new c(t, n),
            s = e.subscribe(r);
          return r.closed || (r.connection = n.connect()), s;
        }
      }
      class c extends i.a {
        constructor(t, e) {
          super(t), (this.connectable = e);
        }
        _unsubscribe() {
          const { connectable: t } = this;
          if (!t) return void (this.connection = null);
          this.connectable = null;
          const e = t._refCount;
          if (e <= 0) return void (this.connection = null);
          if (((t._refCount = e - 1), e > 1)) return void (this.connection = null);
          const { connection: n } = this,
            r = t._connection;
          (this.connection = null), !r || (n && r !== n) || r.unsubscribe();
        }
      }
      class u extends s.a {
        constructor(t, e) {
          super(), (this.source = t), (this.subjectFactory = e), (this._refCount = 0), (this._isComplete = !1);
        }
        _subscribe(t) {
          return this.getSubject().subscribe(t);
        }
        getSubject() {
          const t = this._subject;
          return (t && !t.isStopped) || (this._subject = this.subjectFactory()), this._subject;
        }
        connect() {
          let t = this._connection;
          return (
            t ||
              ((this._isComplete = !1),
              (t = this._connection = new o.a()),
              t.add(this.source.subscribe(new d(this.getSubject(), this))),
              t.closed && ((this._connection = null), (t = o.a.EMPTY))),
            t
          );
        }
        refCount() {
          return a()(this);
        }
      }
      const h = (() => {
        const t = u.prototype;
        return {
          operator: { value: null },
          _refCount: { value: 0, writable: !0 },
          _subject: { value: null, writable: !0 },
          _connection: { value: null, writable: !0 },
          _subscribe: { value: t._subscribe },
          _isComplete: { value: t._isComplete, writable: !0 },
          getSubject: { value: t.getSubject },
          connect: { value: t.connect },
          refCount: { value: t.refCount }
        };
      })();
      class d extends r.b {
        constructor(t, e) {
          super(t), (this.connectable = e);
        }
        _error(t) {
          this._unsubscribe(), super._error(t);
        }
        _complete() {
          (this.connectable._isComplete = !0), this._unsubscribe(), super._complete();
        }
        _unsubscribe() {
          const t = this.connectable;
          if (t) {
            this.connectable = null;
            const e = t._connection;
            (t._refCount = 0), (t._subject = null), (t._connection = null), e && e.unsubscribe();
          }
        }
      }
      function p() {
        return new r.a();
      }
      function f() {
        return t => {
          return a()(
            ((e = p),
            function(t) {
              let n;
              n =
                'function' == typeof e
                  ? e
                  : function() {
                      return e;
                    };
              const r = Object.create(t, h);
              return (r.source = t), (r.subjectFactory = n), r;
            })(t)
          );
          var e;
        };
      }
    },
    yCtX: function(t, e, n) {
      'use strict';
      n.d(e, 'a', function() {
        return o;
      });
      var r = n('HDdC'),
        s = n('ngJS'),
        i = n('jZKg');
      function o(t, e) {
        return e ? Object(i.a)(t, e) : new r.a(Object(s.a)(t));
      }
    },
    'z+Ro': function(t, e, n) {
      'use strict';
      function r(t) {
        return t && 'function' == typeof t.schedule;
      }
      n.d(e, 'a', function() {
        return r;
      });
    },
    zUnb: function(t, e, n) {
      'use strict';
      n.r(e),
        function(t) {
          var e = n('fXoL'),
            r = n('AytR'),
            s = n('0QMH'),
            i = n('ZAI4'),
            o = n('jhN1');
          r.a.production && Object(e.R)();
          const a = () => o.d().bootstrapModule(i.a);
          r.a.hmr ? Object(s.a)(t, a) : a().catch(t => console.error(t));
        }.call(this, n('3UD+')(t));
    },
    zn8P: function(t, e) {
      function n(t) {
        return Promise.resolve().then(function() {
          var e = new Error("Cannot find module '" + t + "'");
          throw ((e.code = 'MODULE_NOT_FOUND'), e);
        });
      }
      (n.keys = function() {
        return [];
      }),
        (n.resolve = n),
        (t.exports = n),
        (n.id = 'zn8P');
    }
  },
  [[0, 0]]
]);
