(window.webpackJsonp = window.webpackJsonp || []).push([
  [3],
  {
    '+wPt': function(n, l, u) {
      'use strict';
      Object.defineProperty(l, '__esModule', { value: !0 }), u('ZYCi');
      var e = u('ey9i'),
        t = (u('84zG'), { title: e.extract('About') });
      (l.ɵ0 = t),
        (l.AboutRoutingModule = (function() {
          return function() {};
        })());
    },
    '84zG': function(n, l, u) {
      'use strict';
      Object.defineProperty(l, '__esModule', { value: !0 }), u('CcnG');
      var e = u('AytR');
      l.AboutComponent = (function() {
        function n() {
          this.version = e.environment.version;
        }
        return (n.prototype.ngOnInit = function() {}), n;
      })();
    },
    '8qly': function(n, l, u) {
      'use strict';
      l.styles = [''];
    },
    FQ1g: function(n, l, u) {
      'use strict';
      Object.defineProperty(l, '__esModule', { value: !0 }),
        (l.AboutModule = (function() {
          return function() {};
        })());
    },
    OlGY: function(n, l, u) {
      'use strict';
      var e = u('CcnG'),
        t = u('FQ1g'),
        o = u('pMnS'),
        r = u('sb8r'),
        a = u('Ip0R'),
        c = u('A7o+'),
        i = u('ZYCi'),
        d = u('+wPt'),
        s = u('84zG');
      l.AboutModuleNgFactory = e.ɵcmf(t.AboutModule, [], function(n) {
        return e.ɵmod([
          e.ɵmpd(512, e.ComponentFactoryResolver, e.ɵCodegenComponentFactoryResolver, [
            [8, [o.ɵangular_packages_router_router_lNgFactory, r.AboutComponentNgFactory]],
            [3, e.ComponentFactoryResolver],
            e.NgModuleRef
          ]),
          e.ɵmpd(4608, a.NgLocalization, a.NgLocaleLocalization, [
            e.LOCALE_ID,
            [2, a.ɵangular_packages_common_common_a]
          ]),
          e.ɵmpd(1073742336, a.CommonModule, a.CommonModule, []),
          e.ɵmpd(1073742336, c.TranslateModule, c.TranslateModule, []),
          e.ɵmpd(1073742336, i.RouterModule, i.RouterModule, [
            [2, i.ɵangular_packages_router_router_a],
            [2, i.Router]
          ]),
          e.ɵmpd(1073742336, d.AboutRoutingModule, d.AboutRoutingModule, []),
          e.ɵmpd(1073742336, t.AboutModule, t.AboutModule, []),
          e.ɵmpd(
            1024,
            i.ROUTES,
            function() {
              return [[{ path: '', component: s.AboutComponent, data: d.ɵ0 }]];
            },
            []
          )
        ]);
      });
    },
    sb8r: function(n, l, u) {
      'use strict';
      var e = u('8qly'),
        t = u('CcnG'),
        o = u('A7o+'),
        r = u('84zG'),
        a = t.ɵcrt({ encapsulation: 0, styles: [e.styles], data: {} });
      function c(n) {
        return t.ɵvid(
          0,
          [
            (n()(), t.ɵeld(0, 0, null, null, 19, 'div', [['class', 'container-fluid']], null, null, null, null, null)),
            (n()(), t.ɵted(-1, null, ['\n  '])),
            (n()(),
            t.ɵeld(2, 0, null, null, 16, 'div', [['class', 'jumbotron text-center']], null, null, null, null, null)),
            (n()(), t.ɵted(-1, null, ['\n    '])),
            (n()(), t.ɵeld(4, 0, null, null, 5, 'h1', [], null, null, null, null, null)),
            (n()(), t.ɵted(-1, null, ['\n      '])),
            (n()(), t.ɵeld(6, 0, null, null, 2, 'span', [['translate', '']], null, null, null, null, null)),
            t.ɵdid(
              7,
              8536064,
              null,
              0,
              o.TranslateDirective,
              [o.TranslateService, t.ElementRef, t.ChangeDetectorRef],
              { translate: [0, 'translate'] },
              null
            ),
            (n()(), t.ɵted(-1, null, ['APP_NAME'])),
            (n()(), t.ɵted(-1, null, ['\n    '])),
            (n()(), t.ɵted(-1, null, ['\n    '])),
            (n()(), t.ɵeld(11, 0, null, null, 6, 'p', [], null, null, null, null, null)),
            (n()(), t.ɵeld(12, 0, null, null, 0, 'i', [['class', 'far fa-bookmark']], null, null, null, null, null)),
            (n()(), t.ɵted(-1, null, [' '])),
            (n()(), t.ɵeld(14, 0, null, null, 2, 'span', [['translate', '']], null, null, null, null, null)),
            t.ɵdid(
              15,
              8536064,
              null,
              0,
              o.TranslateDirective,
              [o.TranslateService, t.ElementRef, t.ChangeDetectorRef],
              { translate: [0, 'translate'] },
              null
            ),
            (n()(), t.ɵted(-1, null, ['Version'])),
            (n()(), t.ɵted(17, null, [' ', ''])),
            (n()(), t.ɵted(-1, null, ['\n  '])),
            (n()(), t.ɵted(-1, null, ['\n'])),
            (n()(), t.ɵted(-1, null, ['\n']))
          ],
          function(n, l) {
            n(l, 7, 0, ''), n(l, 15, 0, '');
          },
          function(n, l) {
            n(l, 17, 0, l.component.version);
          }
        );
      }
      function i(n) {
        return t.ɵvid(
          0,
          [
            (n()(), t.ɵeld(0, 0, null, null, 1, 'app-about', [], null, null, null, c, a)),
            t.ɵdid(1, 114688, null, 0, r.AboutComponent, [], null, null)
          ],
          function(n, l) {
            n(l, 1, 0);
          },
          null
        );
      }
      (l.RenderType_AboutComponent = a),
        (l.View_AboutComponent_0 = c),
        (l.View_AboutComponent_Host_0 = i),
        (l.AboutComponentNgFactory = t.ɵccf('app-about', r.AboutComponent, i, {}, {}, []));
    }
  }
]);
