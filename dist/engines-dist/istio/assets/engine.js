define.alias("shared/access/service", "istio/access/service");
define.alias("shared/all-dns-records/service", "istio/all-dns-records/service");
define.alias("shared/all-storage-classes/service", "istio/all-storage-classes/service");
define.alias("shared/all-workloads/service", "istio/all-workloads/service");
define.alias("shared/amazon/util", "istio/amazon/util");
define.alias("shared/azure-ad/service", "istio/azure-ad/service");
define.alias("shared/bulk-action-handler/service", "istio/bulk-action-handler/service");
define.alias("shared/calculate-position/util", "istio/calculate-position/util");
define.alias("shared/capabilities/service", "istio/capabilities/service");
define.alias("shared/catalog/service", "istio/catalog/service");
define("istio/cldrs/ar", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  /*jslint eqeq: true*/
  var _default = [{
    "locale": "ar-SA",
    "parentLocale": "ar"
  }, {
    "locale": "ar",
    "pluralRuleFunction": function pluralRuleFunction(n, ord) {
      var s = String(n).split("."),
          t0 = Number(s[0]) == n,
          n100 = t0 && s[0].slice(-2);
      if (ord) return "other";
      return n == 0 ? "zero" : n == 1 ? "one" : n == 2 ? "two" : n100 >= 3 && n100 <= 10 ? "few" : n100 >= 11 && n100 <= 99 ? "many" : "other";
    },
    "fields": {
      "year": {
        "displayName": "السنة",
        "relative": {
          "0": "السنة الحالية",
          "1": "السنة القادمة",
          "-1": "السنة الماضية"
        },
        "relativeTime": {
          "future": {
            "zero": "خلال {0} سنة",
            "one": "خلال سنة واحدة",
            "two": "خلال سنتين",
            "few": "خلال {0} سنوات",
            "many": "خلال {0} سنة",
            "other": "خلال {0} سنة"
          },
          "past": {
            "zero": "قبل {0} سنة",
            "one": "قبل سنة واحدة",
            "two": "قبل سنتين",
            "few": "قبل {0} سنوات",
            "many": "قبل {0} سنة",
            "other": "قبل {0} سنة"
          }
        }
      },
      "year-short": {
        "displayName": "السنة",
        "relative": {
          "0": "السنة الحالية",
          "1": "السنة القادمة",
          "-1": "السنة الماضية"
        },
        "relativeTime": {
          "future": {
            "zero": "خلال {0} سنة",
            "one": "خلال سنة واحدة",
            "two": "خلال سنتين",
            "few": "خلال {0} سنوات",
            "many": "خلال {0} سنة",
            "other": "خلال {0} سنة"
          },
          "past": {
            "zero": "قبل {0} سنة",
            "one": "قبل سنة واحدة",
            "two": "قبل سنتين",
            "few": "قبل {0} سنوات",
            "many": "قبل {0} سنة",
            "other": "قبل {0} سنة"
          }
        }
      },
      "month": {
        "displayName": "الشهر",
        "relative": {
          "0": "هذا الشهر",
          "1": "الشهر القادم",
          "-1": "الشهر الماضي"
        },
        "relativeTime": {
          "future": {
            "zero": "خلال {0} شهر",
            "one": "خلال شهر واحد",
            "two": "خلال شهرين",
            "few": "خلال {0} أشهر",
            "many": "خلال {0} شهرًا",
            "other": "خلال {0} شهر"
          },
          "past": {
            "zero": "قبل {0} شهر",
            "one": "قبل شهر واحد",
            "two": "قبل شهرين",
            "few": "قبل {0} أشهر",
            "many": "قبل {0} شهرًا",
            "other": "قبل {0} شهر"
          }
        }
      },
      "month-short": {
        "displayName": "الشهر",
        "relative": {
          "0": "هذا الشهر",
          "1": "الشهر القادم",
          "-1": "الشهر الماضي"
        },
        "relativeTime": {
          "future": {
            "zero": "خلال {0} شهر",
            "one": "خلال شهر واحد",
            "two": "خلال شهرين",
            "few": "خلال {0} أشهر",
            "many": "خلال {0} شهرًا",
            "other": "خلال {0} شهر"
          },
          "past": {
            "zero": "قبل {0} شهر",
            "one": "قبل شهر واحد",
            "two": "قبل شهرين",
            "few": "خلال {0} أشهر",
            "many": "قبل {0} شهرًا",
            "other": "قبل {0} شهر"
          }
        }
      },
      "day": {
        "displayName": "يوم",
        "relative": {
          "0": "اليوم",
          "1": "غدًا",
          "2": "بعد الغد",
          "-2": "أول أمس",
          "-1": "أمس"
        },
        "relativeTime": {
          "future": {
            "zero": "خلال {0} يوم",
            "one": "خلال يوم واحد",
            "two": "خلال يومين",
            "few": "خلال {0} أيام",
            "many": "خلال {0} يومًا",
            "other": "خلال {0} يوم"
          },
          "past": {
            "zero": "قبل {0} يوم",
            "one": "قبل يوم واحد",
            "two": "قبل يومين",
            "few": "قبل {0} أيام",
            "many": "قبل {0} يومًا",
            "other": "قبل {0} يوم"
          }
        }
      },
      "day-short": {
        "displayName": "يوم",
        "relative": {
          "0": "اليوم",
          "1": "غدًا",
          "2": "بعد الغد",
          "-2": "أول أمس",
          "-1": "أمس"
        },
        "relativeTime": {
          "future": {
            "zero": "خلال {0} يوم",
            "one": "خلال يوم واحد",
            "two": "خلال يومين",
            "few": "خلال {0} أيام",
            "many": "خلال {0} يومًا",
            "other": "خلال {0} يوم"
          },
          "past": {
            "zero": "قبل {0} يوم",
            "one": "قبل يوم واحد",
            "two": "قبل يومين",
            "few": "قبل {0} أيام",
            "many": "قبل {0} يومًا",
            "other": "قبل {0} يوم"
          }
        }
      },
      "hour": {
        "displayName": "الساعات",
        "relative": {
          "0": "الساعة الحالية"
        },
        "relativeTime": {
          "future": {
            "zero": "خلال {0} ساعة",
            "one": "خلال ساعة واحدة",
            "two": "خلال ساعتين",
            "few": "خلال {0} ساعات",
            "many": "خلال {0} ساعة",
            "other": "خلال {0} ساعة"
          },
          "past": {
            "zero": "قبل {0} ساعة",
            "one": "قبل ساعة واحدة",
            "two": "قبل ساعتين",
            "few": "قبل {0} ساعات",
            "many": "قبل {0} ساعة",
            "other": "قبل {0} ساعة"
          }
        }
      },
      "hour-short": {
        "displayName": "الساعات",
        "relative": {
          "0": "الساعة الحالية"
        },
        "relativeTime": {
          "future": {
            "zero": "خلال {0} ساعة",
            "one": "خلال ساعة واحدة",
            "two": "خلال ساعتين",
            "few": "خلال {0} ساعات",
            "many": "خلال {0} ساعة",
            "other": "خلال {0} ساعة"
          },
          "past": {
            "zero": "قبل {0} ساعة",
            "one": "قبل ساعة واحدة",
            "two": "قبل ساعتين",
            "few": "قبل {0} ساعات",
            "many": "قبل {0} ساعة",
            "other": "قبل {0} ساعة"
          }
        }
      },
      "minute": {
        "displayName": "الدقائق",
        "relative": {
          "0": "هذه الدقيقة"
        },
        "relativeTime": {
          "future": {
            "zero": "خلال {0} دقيقة",
            "one": "خلال دقيقة واحدة",
            "two": "خلال دقيقتين",
            "few": "خلال {0} دقائق",
            "many": "خلال {0} دقيقة",
            "other": "خلال {0} دقيقة"
          },
          "past": {
            "zero": "قبل {0} دقيقة",
            "one": "قبل دقيقة واحدة",
            "two": "قبل دقيقتين",
            "few": "قبل {0} دقائق",
            "many": "قبل {0} دقيقة",
            "other": "قبل {0} دقيقة"
          }
        }
      },
      "minute-short": {
        "displayName": "الدقائق",
        "relative": {
          "0": "هذه الدقيقة"
        },
        "relativeTime": {
          "future": {
            "zero": "خلال {0} دقيقة",
            "one": "خلال دقيقة واحدة",
            "two": "خلال دقيقتين",
            "few": "خلال {0} دقائق",
            "many": "خلال {0} دقيقة",
            "other": "خلال {0} دقيقة"
          },
          "past": {
            "zero": "قبل {0} دقيقة",
            "one": "قبل دقيقة واحدة",
            "two": "قبل دقيقتين",
            "few": "قبل {0} دقائق",
            "many": "قبل {0} دقيقة",
            "other": "قبل {0} دقيقة"
          }
        }
      },
      "second": {
        "displayName": "الثواني",
        "relative": {
          "0": "الآن"
        },
        "relativeTime": {
          "future": {
            "zero": "خلال {0} ثانية",
            "one": "خلال ثانية واحدة",
            "two": "خلال ثانيتين",
            "few": "خلال {0} ثوانٍ",
            "many": "خلال {0} ثانية",
            "other": "خلال {0} ثانية"
          },
          "past": {
            "zero": "قبل {0} ثانية",
            "one": "قبل ثانية واحدة",
            "two": "قبل ثانيتين",
            "few": "قبل {0} ثوانِ",
            "many": "قبل {0} ثانية",
            "other": "قبل {0} ثانية"
          }
        }
      },
      "second-short": {
        "displayName": "الثواني",
        "relative": {
          "0": "الآن"
        },
        "relativeTime": {
          "future": {
            "zero": "خلال {0} ثانية",
            "one": "خلال ثانية واحدة",
            "two": "خلال ثانيتين",
            "few": "خلال {0} ثوانٍ",
            "many": "خلال {0} ثانية",
            "other": "خلال {0} ثانية"
          },
          "past": {
            "zero": "قبل {0} ثانية",
            "one": "قبل ثانية واحدة",
            "two": "قبل ثانيتين",
            "few": "قبل {0} ثوانٍ",
            "many": "قبل {0} ثانية",
            "other": "قبل {0} ثانية"
          }
        }
      }
    },
    "numbers": {
      "decimal": {
        "long": [[1000, {
          "zero": ["0 ألف", 1],
          "one": ["0 ألف", 1],
          "two": ["0 ألف", 1],
          "few": ["0 آلاف", 1],
          "many": ["0 ألف", 1],
          "other": ["0 ألف", 1]
        }], [10000, {
          "zero": ["00 ألف", 2],
          "one": ["00 ألف", 2],
          "two": ["00 ألف", 2],
          "few": ["00 ألف", 2],
          "many": ["00 ألف", 2],
          "other": ["00 ألف", 2]
        }], [100000, {
          "zero": ["000 ألف", 3],
          "one": ["000 ألف", 3],
          "two": ["000 ألف", 3],
          "few": ["000 ألف", 3],
          "many": ["000 ألف", 3],
          "other": ["000 ألف", 3]
        }], [1000000, {
          "zero": ["0 مليون", 1],
          "one": ["0 مليون", 1],
          "two": ["0 مليون", 1],
          "few": ["0 ملايين", 1],
          "many": ["0 مليون", 1],
          "other": ["0 مليون", 1]
        }], [10000000, {
          "zero": ["00 مليون", 2],
          "one": ["00 مليون", 2],
          "two": ["00 مليون", 2],
          "few": ["00 ملايين", 2],
          "many": ["00 مليون", 2],
          "other": ["00 مليون", 2]
        }], [100000000, {
          "zero": ["000 مليون", 3],
          "one": ["000 مليون", 3],
          "two": ["000 مليون", 3],
          "few": ["000 مليون", 3],
          "many": ["000 مليون", 3],
          "other": ["000 مليون", 3]
        }], [1000000000, {
          "zero": ["0 مليار", 1],
          "one": ["0 مليار", 1],
          "two": ["0 مليار", 1],
          "few": ["0 مليار", 1],
          "many": ["0 مليار", 1],
          "other": ["0 مليار", 1]
        }], [10000000000, {
          "zero": ["00 مليار", 2],
          "one": ["00 مليار", 2],
          "two": ["00 مليار", 2],
          "few": ["00 مليار", 2],
          "many": ["00 مليار", 2],
          "other": ["00 مليار", 2]
        }], [100000000000, {
          "zero": ["000 مليار", 3],
          "one": ["000 مليار", 3],
          "two": ["000 مليار", 3],
          "few": ["000 مليار", 3],
          "many": ["000 مليار", 3],
          "other": ["000 مليار", 3]
        }], [1000000000000, {
          "zero": ["0 ترليون", 1],
          "one": ["0 ترليون", 1],
          "two": ["0 ترليون", 1],
          "few": ["0 ترليون", 1],
          "many": ["0 ترليون", 1],
          "other": ["0 ترليون", 1]
        }], [10000000000000, {
          "zero": ["00 ترليون", 2],
          "one": ["00 ترليون", 2],
          "two": ["00 ترليون", 2],
          "few": ["00 ترليون", 2],
          "many": ["00 ترليون", 2],
          "other": ["00 ترليون", 2]
        }], [100000000000000, {
          "zero": ["000 ترليون", 3],
          "one": ["000 ترليون", 3],
          "two": ["000 ترليون", 3],
          "few": ["000 ترليون", 3],
          "many": ["000 ترليون", 3],
          "other": ["000 ترليون", 3]
        }]],
        "short": [[1000, {
          "zero": ["0 ألف", 1],
          "one": ["0 ألف", 1],
          "two": ["0 ألف", 1],
          "few": ["0 آلاف", 1],
          "many": ["0 ألف", 1],
          "other": ["0 ألف", 1]
        }], [10000, {
          "zero": ["00 ألف", 2],
          "one": ["00 ألف", 2],
          "two": ["00 ألف", 2],
          "few": ["00 ألف", 2],
          "many": ["00 ألف", 2],
          "other": ["00 ألف", 2]
        }], [100000, {
          "zero": ["000 ألف", 3],
          "one": ["000 ألف", 3],
          "two": ["000 ألف", 3],
          "few": ["000 ألف", 3],
          "many": ["000 ألف", 3],
          "other": ["000 ألف", 3]
        }], [1000000, {
          "zero": ["0 مليون", 1],
          "one": ["0 مليون", 1],
          "two": ["0 مليون", 1],
          "few": ["0 مليون", 1],
          "many": ["0 مليون", 1],
          "other": ["0 مليون", 1]
        }], [10000000, {
          "zero": ["00 مليون", 2],
          "one": ["00 مليون", 2],
          "two": ["00 مليون", 2],
          "few": ["00 مليون", 2],
          "many": ["00 مليون", 2],
          "other": ["00 مليون", 2]
        }], [100000000, {
          "zero": ["000 مليون", 3],
          "one": ["000 مليون", 3],
          "two": ["000 مليون", 3],
          "few": ["000 مليون", 3],
          "many": ["000 مليون", 3],
          "other": ["000 مليون", 3]
        }], [1000000000, {
          "zero": ["0 مليار", 1],
          "one": ["0 مليار", 1],
          "two": ["0 مليار", 1],
          "few": ["0 مليار", 1],
          "many": ["0 مليار", 1],
          "other": ["0 مليار", 1]
        }], [10000000000, {
          "zero": ["00 مليار", 2],
          "one": ["00 مليار", 2],
          "two": ["00 مليار", 2],
          "few": ["00 مليار", 2],
          "many": ["00 مليار", 2],
          "other": ["00 مليار", 2]
        }], [100000000000, {
          "zero": ["000 مليار", 3],
          "one": ["000 مليار", 3],
          "two": ["000 مليار", 3],
          "few": ["000 مليار", 3],
          "many": ["000 مليار", 3],
          "other": ["000 مليار", 3]
        }], [1000000000000, {
          "zero": ["0 ترليون", 1],
          "one": ["0 ترليون", 1],
          "two": ["0 ترليون", 1],
          "few": ["0 ترليون", 1],
          "many": ["0 ترليون", 1],
          "other": ["0 ترليون", 1]
        }], [10000000000000, {
          "zero": ["00 ترليون", 2],
          "one": ["00 ترليون", 2],
          "two": ["00 ترليون", 2],
          "few": ["00 ترليون", 2],
          "many": ["00 ترليون", 2],
          "other": ["00 ترليون", 2]
        }], [100000000000000, {
          "zero": ["000 ترليون", 3],
          "one": ["000 ترليون", 3],
          "two": ["000 ترليون", 3],
          "few": ["000 ترليون", 3],
          "many": ["000 ترليون", 3],
          "other": ["000 ترليون", 3]
        }]]
      }
    }
  }];
  _exports.default = _default;
});
define("istio/cldrs/de", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  /*jslint eqeq: true*/
  var _default = [{
    "locale": "de-de",
    "parentLocale": "de"
  }, {
    "locale": "de",
    "pluralRuleFunction": function pluralRuleFunction(n, ord) {
      var s = String(n).split("."),
          v0 = !s[1];
      if (ord) return "other";
      return n == 1 && v0 ? "one" : "other";
    },
    "fields": {
      "year": {
        "displayName": "Jahr",
        "relative": {
          "0": "dieses Jahr",
          "1": "nächstes Jahr",
          "-1": "letztes Jahr"
        },
        "relativeTime": {
          "future": {
            "one": "in {0} Jahr",
            "other": "in {0} Jahren"
          },
          "past": {
            "one": "vor {0} Jahr",
            "other": "vor {0} Jahren"
          }
        }
      },
      "year-short": {
        "displayName": "Jahr",
        "relative": {
          "0": "dieses Jahr",
          "1": "nächstes Jahr",
          "-1": "letztes Jahr"
        },
        "relativeTime": {
          "future": {
            "one": "in {0} Jahr",
            "other": "in {0} Jahren"
          },
          "past": {
            "one": "vor {0} Jahr",
            "other": "vor {0} Jahren"
          }
        }
      },
      "month": {
        "displayName": "Monat",
        "relative": {
          "0": "diesen Monat",
          "1": "nächsten Monat",
          "-1": "letzten Monat"
        },
        "relativeTime": {
          "future": {
            "one": "in {0} Monat",
            "other": "in {0} Monaten"
          },
          "past": {
            "one": "vor {0} Monat",
            "other": "vor {0} Monaten"
          }
        }
      },
      "month-short": {
        "displayName": "Monat",
        "relative": {
          "0": "diesen Monat",
          "1": "nächsten Monat",
          "-1": "letzten Monat"
        },
        "relativeTime": {
          "future": {
            "one": "in {0} Monat",
            "other": "in {0} Monaten"
          },
          "past": {
            "one": "vor {0} Monat",
            "other": "vor {0} Monaten"
          }
        }
      },
      "day": {
        "displayName": "Tag",
        "relative": {
          "0": "heute",
          "1": "morgen",
          "2": "übermorgen",
          "-2": "vorgestern",
          "-1": "gestern"
        },
        "relativeTime": {
          "future": {
            "one": "in {0} Tag",
            "other": "in {0} Tagen"
          },
          "past": {
            "one": "vor {0} Tag",
            "other": "vor {0} Tagen"
          }
        }
      },
      "day-short": {
        "displayName": "Tag",
        "relative": {
          "0": "heute",
          "1": "morgen",
          "2": "übermorgen",
          "-2": "vorgestern",
          "-1": "gestern"
        },
        "relativeTime": {
          "future": {
            "one": "in {0} Tag",
            "other": "in {0} Tagen"
          },
          "past": {
            "one": "vor {0} Tag",
            "other": "vor {0} Tagen"
          }
        }
      },
      "hour": {
        "displayName": "Stunde",
        "relative": {
          "0": "in dieser Stunde"
        },
        "relativeTime": {
          "future": {
            "one": "in {0} Stunde",
            "other": "in {0} Stunden"
          },
          "past": {
            "one": "vor {0} Stunde",
            "other": "vor {0} Stunden"
          }
        }
      },
      "hour-short": {
        "displayName": "Std.",
        "relative": {
          "0": "in dieser Stunde"
        },
        "relativeTime": {
          "future": {
            "one": "in {0} Std.",
            "other": "in {0} Std."
          },
          "past": {
            "one": "vor {0} Std.",
            "other": "vor {0} Std."
          }
        }
      },
      "minute": {
        "displayName": "Minute",
        "relative": {
          "0": "in dieser Minute"
        },
        "relativeTime": {
          "future": {
            "one": "in {0} Minute",
            "other": "in {0} Minuten"
          },
          "past": {
            "one": "vor {0} Minute",
            "other": "vor {0} Minuten"
          }
        }
      },
      "minute-short": {
        "displayName": "Min.",
        "relative": {
          "0": "in dieser Minute"
        },
        "relativeTime": {
          "future": {
            "one": "in {0} Min.",
            "other": "in {0} Min."
          },
          "past": {
            "one": "vor {0} Min.",
            "other": "vor {0} Min."
          }
        }
      },
      "second": {
        "displayName": "Sekunde",
        "relative": {
          "0": "jetzt"
        },
        "relativeTime": {
          "future": {
            "one": "in {0} Sekunde",
            "other": "in {0} Sekunden"
          },
          "past": {
            "one": "vor {0} Sekunde",
            "other": "vor {0} Sekunden"
          }
        }
      },
      "second-short": {
        "displayName": "Sek.",
        "relative": {
          "0": "jetzt"
        },
        "relativeTime": {
          "future": {
            "one": "in {0} Sek.",
            "other": "in {0} Sek."
          },
          "past": {
            "one": "vor {0} Sek.",
            "other": "vor {0} Sek."
          }
        }
      }
    },
    "numbers": {
      "decimal": {
        "long": [[1000, {
          "one": ["0 Tausend", 1],
          "other": ["0 Tausend", 1]
        }], [10000, {
          "one": ["00 Tausend", 2],
          "other": ["00 Tausend", 2]
        }], [100000, {
          "one": ["000 Tausend", 3],
          "other": ["000 Tausend", 3]
        }], [1000000, {
          "one": ["0 Million", 1],
          "other": ["0 Millionen", 1]
        }], [10000000, {
          "one": ["00 Millionen", 2],
          "other": ["00 Millionen", 2]
        }], [100000000, {
          "one": ["000 Millionen", 3],
          "other": ["000 Millionen", 3]
        }], [1000000000, {
          "one": ["0 Milliarde", 1],
          "other": ["0 Milliarden", 1]
        }], [10000000000, {
          "one": ["00 Milliarden", 2],
          "other": ["00 Milliarden", 2]
        }], [100000000000, {
          "one": ["000 Milliarden", 3],
          "other": ["000 Milliarden", 3]
        }], [1000000000000, {
          "one": ["0 Billion", 1],
          "other": ["0 Billionen", 1]
        }], [10000000000000, {
          "one": ["00 Billionen", 2],
          "other": ["00 Billionen", 2]
        }], [100000000000000, {
          "one": ["000 Billionen", 3],
          "other": ["000 Billionen", 3]
        }]],
        "short": [[1000, {
          "one": ["0", 1],
          "other": ["0", 1]
        }], [10000, {
          "one": ["0", 1],
          "other": ["0", 1]
        }], [100000, {
          "one": ["0", 1],
          "other": ["0", 1]
        }], [1000000, {
          "one": ["0 Mio'.'", 1],
          "other": ["0 Mio'.'", 1]
        }], [10000000, {
          "one": ["00 Mio'.'", 2],
          "other": ["00 Mio'.'", 2]
        }], [100000000, {
          "one": ["000 Mio'.'", 3],
          "other": ["000 Mio'.'", 3]
        }], [1000000000, {
          "one": ["0 Mrd'.'", 1],
          "other": ["0 Mrd'.'", 1]
        }], [10000000000, {
          "one": ["00 Mrd'.'", 2],
          "other": ["00 Mrd'.'", 2]
        }], [100000000000, {
          "one": ["000 Mrd'.'", 3],
          "other": ["000 Mrd'.'", 3]
        }], [1000000000000, {
          "one": ["0 Bio'.'", 1],
          "other": ["0 Bio'.'", 1]
        }], [10000000000000, {
          "one": ["00 Bio'.'", 2],
          "other": ["00 Bio'.'", 2]
        }], [100000000000000, {
          "one": ["000 Bio'.'", 3],
          "other": ["000 Bio'.'", 3]
        }]]
      }
    }
  }];
  _exports.default = _default;
});
define("istio/cldrs/en", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  /*jslint eqeq: true*/
  var _default = [{
    "locale": "en-US",
    "parentLocale": "en"
  }, {
    "locale": "en",
    "pluralRuleFunction": function pluralRuleFunction(n, ord) {
      var s = String(n).split("."),
          v0 = !s[1],
          t0 = Number(s[0]) == n,
          n10 = t0 && s[0].slice(-1),
          n100 = t0 && s[0].slice(-2);
      if (ord) return n10 == 1 && n100 != 11 ? "one" : n10 == 2 && n100 != 12 ? "two" : n10 == 3 && n100 != 13 ? "few" : "other";
      return n == 1 && v0 ? "one" : "other";
    },
    "fields": {
      "year": {
        "displayName": "year",
        "relative": {
          "0": "this year",
          "1": "next year",
          "-1": "last year"
        },
        "relativeTime": {
          "future": {
            "one": "in {0} year",
            "other": "in {0} years"
          },
          "past": {
            "one": "{0} year ago",
            "other": "{0} years ago"
          }
        }
      },
      "year-short": {
        "displayName": "yr.",
        "relative": {
          "0": "this yr.",
          "1": "next yr.",
          "-1": "last yr."
        },
        "relativeTime": {
          "future": {
            "one": "in {0} yr.",
            "other": "in {0} yr."
          },
          "past": {
            "one": "{0} yr. ago",
            "other": "{0} yr. ago"
          }
        }
      },
      "month": {
        "displayName": "month",
        "relative": {
          "0": "this month",
          "1": "next month",
          "-1": "last month"
        },
        "relativeTime": {
          "future": {
            "one": "in {0} month",
            "other": "in {0} months"
          },
          "past": {
            "one": "{0} month ago",
            "other": "{0} months ago"
          }
        }
      },
      "month-short": {
        "displayName": "mo.",
        "relative": {
          "0": "this mo.",
          "1": "next mo.",
          "-1": "last mo."
        },
        "relativeTime": {
          "future": {
            "one": "in {0} mo.",
            "other": "in {0} mo."
          },
          "past": {
            "one": "{0} mo. ago",
            "other": "{0} mo. ago"
          }
        }
      },
      "day": {
        "displayName": "day",
        "relative": {
          "0": "today",
          "1": "tomorrow",
          "-1": "yesterday"
        },
        "relativeTime": {
          "future": {
            "one": "in {0} day",
            "other": "in {0} days"
          },
          "past": {
            "one": "{0} day ago",
            "other": "{0} days ago"
          }
        }
      },
      "day-short": {
        "displayName": "day",
        "relative": {
          "0": "today",
          "1": "tomorrow",
          "-1": "yesterday"
        },
        "relativeTime": {
          "future": {
            "one": "in {0} day",
            "other": "in {0} days"
          },
          "past": {
            "one": "{0} day ago",
            "other": "{0} days ago"
          }
        }
      },
      "hour": {
        "displayName": "hour",
        "relative": {
          "0": "this hour"
        },
        "relativeTime": {
          "future": {
            "one": "in {0} hour",
            "other": "in {0} hours"
          },
          "past": {
            "one": "{0} hour ago",
            "other": "{0} hours ago"
          }
        }
      },
      "hour-short": {
        "displayName": "hr.",
        "relative": {
          "0": "this hour"
        },
        "relativeTime": {
          "future": {
            "one": "in {0} hr.",
            "other": "in {0} hr."
          },
          "past": {
            "one": "{0} hr. ago",
            "other": "{0} hr. ago"
          }
        }
      },
      "minute": {
        "displayName": "minute",
        "relative": {
          "0": "this minute"
        },
        "relativeTime": {
          "future": {
            "one": "in {0} minute",
            "other": "in {0} minutes"
          },
          "past": {
            "one": "{0} minute ago",
            "other": "{0} minutes ago"
          }
        }
      },
      "minute-short": {
        "displayName": "min.",
        "relative": {
          "0": "this minute"
        },
        "relativeTime": {
          "future": {
            "one": "in {0} min.",
            "other": "in {0} min."
          },
          "past": {
            "one": "{0} min. ago",
            "other": "{0} min. ago"
          }
        }
      },
      "second": {
        "displayName": "second",
        "relative": {
          "0": "now"
        },
        "relativeTime": {
          "future": {
            "one": "in {0} second",
            "other": "in {0} seconds"
          },
          "past": {
            "one": "{0} second ago",
            "other": "{0} seconds ago"
          }
        }
      },
      "second-short": {
        "displayName": "sec.",
        "relative": {
          "0": "now"
        },
        "relativeTime": {
          "future": {
            "one": "in {0} sec.",
            "other": "in {0} sec."
          },
          "past": {
            "one": "{0} sec. ago",
            "other": "{0} sec. ago"
          }
        }
      }
    },
    "numbers": {
      "decimal": {
        "long": [[1000, {
          "one": ["0 thousand", 1],
          "other": ["0 thousand", 1]
        }], [10000, {
          "one": ["00 thousand", 2],
          "other": ["00 thousand", 2]
        }], [100000, {
          "one": ["000 thousand", 3],
          "other": ["000 thousand", 3]
        }], [1000000, {
          "one": ["0 million", 1],
          "other": ["0 million", 1]
        }], [10000000, {
          "one": ["00 million", 2],
          "other": ["00 million", 2]
        }], [100000000, {
          "one": ["000 million", 3],
          "other": ["000 million", 3]
        }], [1000000000, {
          "one": ["0 billion", 1],
          "other": ["0 billion", 1]
        }], [10000000000, {
          "one": ["00 billion", 2],
          "other": ["00 billion", 2]
        }], [100000000000, {
          "one": ["000 billion", 3],
          "other": ["000 billion", 3]
        }], [1000000000000, {
          "one": ["0 trillion", 1],
          "other": ["0 trillion", 1]
        }], [10000000000000, {
          "one": ["00 trillion", 2],
          "other": ["00 trillion", 2]
        }], [100000000000000, {
          "one": ["000 trillion", 3],
          "other": ["000 trillion", 3]
        }]],
        "short": [[1000, {
          "one": ["0K", 1],
          "other": ["0K", 1]
        }], [10000, {
          "one": ["00K", 2],
          "other": ["00K", 2]
        }], [100000, {
          "one": ["000K", 3],
          "other": ["000K", 3]
        }], [1000000, {
          "one": ["0M", 1],
          "other": ["0M", 1]
        }], [10000000, {
          "one": ["00M", 2],
          "other": ["00M", 2]
        }], [100000000, {
          "one": ["000M", 3],
          "other": ["000M", 3]
        }], [1000000000, {
          "one": ["0B", 1],
          "other": ["0B", 1]
        }], [10000000000, {
          "one": ["00B", 2],
          "other": ["00B", 2]
        }], [100000000000, {
          "one": ["000B", 3],
          "other": ["000B", 3]
        }], [1000000000000, {
          "one": ["0T", 1],
          "other": ["0T", 1]
        }], [10000000000000, {
          "one": ["00T", 2],
          "other": ["00T", 2]
        }], [100000000000000, {
          "one": ["000T", 3],
          "other": ["000T", 3]
        }]]
      }
    }
  }];
  _exports.default = _default;
});
define("istio/cldrs/es", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  /*jslint eqeq: true*/
  var _default = [{
    "locale": "es-es",
    "parentLocale": "es"
  }, {
    "locale": "es",
    "pluralRuleFunction": function pluralRuleFunction(n, ord) {
      if (ord) return "other";
      return n == 1 ? "one" : "other";
    },
    "fields": {
      "year": {
        "displayName": "año",
        "relative": {
          "0": "este año",
          "1": "el próximo año",
          "-1": "el año pasado"
        },
        "relativeTime": {
          "future": {
            "one": "dentro de {0} año",
            "other": "dentro de {0} años"
          },
          "past": {
            "one": "hace {0} año",
            "other": "hace {0} años"
          }
        }
      },
      "year-short": {
        "displayName": "a",
        "relative": {
          "0": "este año",
          "1": "el próximo año",
          "-1": "el año pasado"
        },
        "relativeTime": {
          "future": {
            "one": "dentro de {0} a",
            "other": "dentro de {0} a"
          },
          "past": {
            "one": "hace {0} a",
            "other": "hace {0} a"
          }
        }
      },
      "month": {
        "displayName": "mes",
        "relative": {
          "0": "este mes",
          "1": "el próximo mes",
          "-1": "el mes pasado"
        },
        "relativeTime": {
          "future": {
            "one": "dentro de {0} mes",
            "other": "dentro de {0} meses"
          },
          "past": {
            "one": "hace {0} mes",
            "other": "hace {0} meses"
          }
        }
      },
      "month-short": {
        "displayName": "m",
        "relative": {
          "0": "este mes",
          "1": "el próximo mes",
          "-1": "el mes pasado"
        },
        "relativeTime": {
          "future": {
            "one": "dentro de {0} m",
            "other": "dentro de {0} m"
          },
          "past": {
            "one": "hace {0} m",
            "other": "hace {0} m"
          }
        }
      },
      "day": {
        "displayName": "día",
        "relative": {
          "0": "hoy",
          "1": "mañana",
          "2": "pasado mañana",
          "-2": "anteayer",
          "-1": "ayer"
        },
        "relativeTime": {
          "future": {
            "one": "dentro de {0} día",
            "other": "dentro de {0} días"
          },
          "past": {
            "one": "hace {0} día",
            "other": "hace {0} días"
          }
        }
      },
      "day-short": {
        "displayName": "d",
        "relative": {
          "0": "hoy",
          "1": "mañana",
          "2": "pasado mañana",
          "-2": "anteayer",
          "-1": "ayer"
        },
        "relativeTime": {
          "future": {
            "one": "dentro de {0} día",
            "other": "dentro de {0} días"
          },
          "past": {
            "one": "hace {0} día",
            "other": "hace {0} días"
          }
        }
      },
      "hour": {
        "displayName": "hora",
        "relative": {
          "0": "esta hora"
        },
        "relativeTime": {
          "future": {
            "one": "dentro de {0} hora",
            "other": "dentro de {0} horas"
          },
          "past": {
            "one": "hace {0} hora",
            "other": "hace {0} horas"
          }
        }
      },
      "hour-short": {
        "displayName": "h",
        "relative": {
          "0": "esta hora"
        },
        "relativeTime": {
          "future": {
            "one": "dentro de {0} h",
            "other": "dentro de {0} h"
          },
          "past": {
            "one": "hace {0} h",
            "other": "hace {0} h"
          }
        }
      },
      "minute": {
        "displayName": "minuto",
        "relative": {
          "0": "este minuto"
        },
        "relativeTime": {
          "future": {
            "one": "dentro de {0} minuto",
            "other": "dentro de {0} minutos"
          },
          "past": {
            "one": "hace {0} minuto",
            "other": "hace {0} minutos"
          }
        }
      },
      "minute-short": {
        "displayName": "min",
        "relative": {
          "0": "este minuto"
        },
        "relativeTime": {
          "future": {
            "one": "dentro de {0} min",
            "other": "dentro de {0} min"
          },
          "past": {
            "one": "hace {0} min",
            "other": "hace {0} min"
          }
        }
      },
      "second": {
        "displayName": "segundo",
        "relative": {
          "0": "ahora"
        },
        "relativeTime": {
          "future": {
            "one": "dentro de {0} segundo",
            "other": "dentro de {0} segundos"
          },
          "past": {
            "one": "hace {0} segundo",
            "other": "hace {0} segundos"
          }
        }
      },
      "second-short": {
        "displayName": "s",
        "relative": {
          "0": "ahora"
        },
        "relativeTime": {
          "future": {
            "one": "dentro de {0} s",
            "other": "dentro de {0} s"
          },
          "past": {
            "one": "hace {0} s",
            "other": "hace {0} s"
          }
        }
      }
    },
    "numbers": {
      "decimal": {
        "long": [[1000, {
          "one": ["0 mil", 1],
          "other": ["0 mil", 1]
        }], [10000, {
          "one": ["00 mil", 2],
          "other": ["00 mil", 2]
        }], [100000, {
          "one": ["000 mil", 3],
          "other": ["000 mil", 3]
        }], [1000000, {
          "one": ["0 millón", 1],
          "other": ["0 millones", 1]
        }], [10000000, {
          "one": ["00 millones", 2],
          "other": ["00 millones", 2]
        }], [100000000, {
          "one": ["000 millones", 3],
          "other": ["000 millones", 3]
        }], [1000000000, {
          "one": ["0 mil millones", 1],
          "other": ["0 mil millones", 1]
        }], [10000000000, {
          "one": ["00 mil millones", 2],
          "other": ["00 mil millones", 2]
        }], [100000000000, {
          "one": ["000 mil millones", 3],
          "other": ["000 mil millones", 3]
        }], [1000000000000, {
          "one": ["0 billón", 1],
          "other": ["0 billones", 1]
        }], [10000000000000, {
          "one": ["00 billones", 2],
          "other": ["00 billones", 2]
        }], [100000000000000, {
          "one": ["000 billones", 3],
          "other": ["000 billones", 3]
        }]],
        "short": [[1000, {
          "one": ["0 mil", 1],
          "other": ["0 mil", 1]
        }], [10000, {
          "one": ["00 mil", 2],
          "other": ["00 mil", 2]
        }], [100000, {
          "one": ["000 mil", 3],
          "other": ["000 mil", 3]
        }], [1000000, {
          "one": ["0 M", 1],
          "other": ["0 M", 1]
        }], [10000000, {
          "one": ["00 M", 2],
          "other": ["00 M", 2]
        }], [100000000, {
          "one": ["000 M", 3],
          "other": ["000 M", 3]
        }], [1000000000, {
          "one": ["0000 M", 4],
          "other": ["0000 M", 4]
        }], [10000000000, {
          "one": ["00 mil M", 2],
          "other": ["00 mil M", 2]
        }], [100000000000, {
          "one": ["000 mil M", 3],
          "other": ["000 mil M", 3]
        }], [1000000000000, {
          "one": ["0 B", 1],
          "other": ["0 B", 1]
        }], [10000000000000, {
          "one": ["00 B", 2],
          "other": ["00 B", 2]
        }], [100000000000000, {
          "one": ["000 B", 3],
          "other": ["000 B", 3]
        }]]
      }
    }
  }];
  _exports.default = _default;
});
define("istio/cldrs/fa", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  /*jslint eqeq: true*/
  var _default = [{
    "locale": "fa-ir",
    "parentLocale": "fa"
  }, {
    "locale": "fa",
    "pluralRuleFunction": function pluralRuleFunction(n, ord) {
      if (ord) return "other";
      return n >= 0 && n <= 1 ? "one" : "other";
    },
    "fields": {
      "year": {
        "displayName": "سال",
        "relative": {
          "0": "امسال",
          "1": "سال آینده",
          "-1": "سال گذشته"
        },
        "relativeTime": {
          "future": {
            "one": "{0} سال بعد",
            "other": "{0} سال بعد"
          },
          "past": {
            "one": "{0} سال پیش",
            "other": "{0} سال پیش"
          }
        }
      },
      "year-short": {
        "displayName": "سال",
        "relative": {
          "0": "امسال",
          "1": "سال آینده",
          "-1": "سال گذشته"
        },
        "relativeTime": {
          "future": {
            "one": "{0} سال بعد",
            "other": "{0} سال بعد"
          },
          "past": {
            "one": "{0} سال پیش",
            "other": "{0} سال پیش"
          }
        }
      },
      "month": {
        "displayName": "ماه",
        "relative": {
          "0": "این ماه",
          "1": "ماه آینده",
          "-1": "ماه گذشته"
        },
        "relativeTime": {
          "future": {
            "one": "{0} ماه بعد",
            "other": "{0} ماه بعد"
          },
          "past": {
            "one": "{0} ماه پیش",
            "other": "{0} ماه پیش"
          }
        }
      },
      "month-short": {
        "displayName": "ماه",
        "relative": {
          "0": "این ماه",
          "1": "ماه آینده",
          "-1": "ماه پیش"
        },
        "relativeTime": {
          "future": {
            "one": "{0} ماه بعد",
            "other": "{0} ماه بعد"
          },
          "past": {
            "one": "{0} ماه پیش",
            "other": "{0} ماه پیش"
          }
        }
      },
      "day": {
        "displayName": "روز",
        "relative": {
          "0": "امروز",
          "1": "فردا",
          "2": "پس‌فردا",
          "-2": "پریروز",
          "-1": "دیروز"
        },
        "relativeTime": {
          "future": {
            "one": "{0} روز بعد",
            "other": "{0} روز بعد"
          },
          "past": {
            "one": "{0} روز پیش",
            "other": "{0} روز پیش"
          }
        }
      },
      "day-short": {
        "displayName": "روز",
        "relative": {
          "0": "امروز",
          "1": "فردا",
          "2": "پس‌فردا",
          "-2": "پریروز",
          "-1": "دیروز"
        },
        "relativeTime": {
          "future": {
            "one": "{0} روز بعد",
            "other": "{0} روز بعد"
          },
          "past": {
            "one": "{0} روز پیش",
            "other": "{0} روز پیش"
          }
        }
      },
      "hour": {
        "displayName": "ساعت",
        "relative": {
          "0": "همین ساعت"
        },
        "relativeTime": {
          "future": {
            "one": "{0} ساعت بعد",
            "other": "{0} ساعت بعد"
          },
          "past": {
            "one": "{0} ساعت پیش",
            "other": "{0} ساعت پیش"
          }
        }
      },
      "hour-short": {
        "displayName": "ساعت",
        "relative": {
          "0": "همین ساعت"
        },
        "relativeTime": {
          "future": {
            "one": "{0} ساعت بعد",
            "other": "{0} ساعت بعد"
          },
          "past": {
            "one": "{0} ساعت پیش",
            "other": "{0} ساعت پیش"
          }
        }
      },
      "minute": {
        "displayName": "دقیقه",
        "relative": {
          "0": "همین دقیقه"
        },
        "relativeTime": {
          "future": {
            "one": "{0} دقیقه بعد",
            "other": "{0} دقیقه بعد"
          },
          "past": {
            "one": "{0} دقیقه پیش",
            "other": "{0} دقیقه پیش"
          }
        }
      },
      "minute-short": {
        "displayName": "دقیقه",
        "relative": {
          "0": "همین دقیقه"
        },
        "relativeTime": {
          "future": {
            "one": "{0} دقیقه بعد",
            "other": "{0} دقیقه بعد"
          },
          "past": {
            "one": "{0} دقیقه پیش",
            "other": "{0} دقیقه پیش"
          }
        }
      },
      "second": {
        "displayName": "ثانیه",
        "relative": {
          "0": "اکنون"
        },
        "relativeTime": {
          "future": {
            "one": "{0} ثانیه بعد",
            "other": "{0} ثانیه بعد"
          },
          "past": {
            "one": "{0} ثانیه پیش",
            "other": "{0} ثانیه پیش"
          }
        }
      },
      "second-short": {
        "displayName": "ثانیه",
        "relative": {
          "0": "اکنون"
        },
        "relativeTime": {
          "future": {
            "one": "{0} ثانیه بعد",
            "other": "{0} ثانیه بعد"
          },
          "past": {
            "one": "{0} ثانیه پیش",
            "other": "{0} ثانیه پیش"
          }
        }
      }
    },
    "numbers": {
      "decimal": {
        "long": [[1000, {
          "one": ["0 هزار", 1],
          "other": ["0 هزار", 1]
        }], [10000, {
          "one": ["00 هزار", 2],
          "other": ["00 هزار", 2]
        }], [100000, {
          "one": ["000 هزار", 3],
          "other": ["000 هزار", 3]
        }], [1000000, {
          "one": ["0 میلیون", 1],
          "other": ["0 میلیون", 1]
        }], [10000000, {
          "one": ["00 میلیون", 2],
          "other": ["00 میلیون", 2]
        }], [100000000, {
          "one": ["000 میلیون", 3],
          "other": ["000 میلیون", 3]
        }], [1000000000, {
          "one": ["0 میلیارد", 1],
          "other": ["0 میلیارد", 1]
        }], [10000000000, {
          "one": ["00 میلیارد", 2],
          "other": ["00 میلیارد", 2]
        }], [100000000000, {
          "one": ["000 میلیارد", 3],
          "other": ["000 میلیارد", 3]
        }], [1000000000000, {
          "one": ["0 هزارمیلیارد", 1],
          "other": ["0 هزارمیلیارد", 1]
        }], [10000000000000, {
          "one": ["00 هزارمیلیارد", 2],
          "other": ["00 هزارمیلیارد", 2]
        }], [100000000000000, {
          "one": ["000 هزارمیلیارد", 3],
          "other": ["000 هزارمیلیارد", 3]
        }]],
        "short": [[1000, {
          "one": ["0 هزار", 1],
          "other": ["0 هزار", 1]
        }], [10000, {
          "one": ["00 هزار", 2],
          "other": ["00 هزار", 2]
        }], [100000, {
          "one": ["000 هزار", 3],
          "other": ["000 هزار", 3]
        }], [1000000, {
          "one": ["0 میلیون", 1],
          "other": ["0 میلیون", 1]
        }], [10000000, {
          "one": ["00 میلیون", 2],
          "other": ["00 میلیون", 2]
        }], [100000000, {
          "one": ["000 م", 3],
          "other": ["000 م", 3]
        }], [1000000000, {
          "one": ["0 م", 1],
          "other": ["0 م", 1]
        }], [10000000000, {
          "one": ["00 م", 2],
          "other": ["00 م", 2]
        }], [100000000000, {
          "one": ["000 میلیارد", 3],
          "other": ["000 میلیارد", 3]
        }], [1000000000000, {
          "one": ["0 تریلیون", 1],
          "other": ["0 تریلیون", 1]
        }], [10000000000000, {
          "one": ["00 ت", 2],
          "other": ["00 ت", 2]
        }], [100000000000000, {
          "one": ["000 ت", 3],
          "other": ["000 ت", 3]
        }]]
      }
    }
  }];
  _exports.default = _default;
});
define("istio/cldrs/fr", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  /*jslint eqeq: true*/
  var _default = [{
    "locale": "fr-fr",
    "parentLocale": "fr"
  }, {
    "locale": "fr",
    "pluralRuleFunction": function pluralRuleFunction(n, ord) {
      if (ord) return n == 1 ? "one" : "other";
      return n >= 0 && n < 2 ? "one" : "other";
    },
    "fields": {
      "year": {
        "displayName": "année",
        "relative": {
          "0": "cette année",
          "1": "l’année prochaine",
          "-1": "l’année dernière"
        },
        "relativeTime": {
          "future": {
            "one": "dans {0} an",
            "other": "dans {0} ans"
          },
          "past": {
            "one": "il y a {0} an",
            "other": "il y a {0} ans"
          }
        }
      },
      "year-short": {
        "displayName": "an",
        "relative": {
          "0": "cette année",
          "1": "l’année prochaine",
          "-1": "l’année dernière"
        },
        "relativeTime": {
          "future": {
            "one": "dans {0} a",
            "other": "dans {0} a"
          },
          "past": {
            "one": "il y a {0} a",
            "other": "il y a {0} a"
          }
        }
      },
      "month": {
        "displayName": "mois",
        "relative": {
          "0": "ce mois-ci",
          "1": "le mois prochain",
          "-1": "le mois dernier"
        },
        "relativeTime": {
          "future": {
            "one": "dans {0} mois",
            "other": "dans {0} mois"
          },
          "past": {
            "one": "il y a {0} mois",
            "other": "il y a {0} mois"
          }
        }
      },
      "month-short": {
        "displayName": "m.",
        "relative": {
          "0": "ce mois-ci",
          "1": "le mois prochain",
          "-1": "le mois dernier"
        },
        "relativeTime": {
          "future": {
            "one": "dans {0} m.",
            "other": "dans {0} m."
          },
          "past": {
            "one": "il y a {0} m.",
            "other": "il y a {0} m."
          }
        }
      },
      "day": {
        "displayName": "jour",
        "relative": {
          "0": "aujourd’hui",
          "1": "demain",
          "2": "après-demain",
          "-2": "avant-hier",
          "-1": "hier"
        },
        "relativeTime": {
          "future": {
            "one": "dans {0} jour",
            "other": "dans {0} jours"
          },
          "past": {
            "one": "il y a {0} jour",
            "other": "il y a {0} jours"
          }
        }
      },
      "day-short": {
        "displayName": "j",
        "relative": {
          "0": "aujourd’hui",
          "1": "demain",
          "2": "après-demain",
          "-2": "avant-hier",
          "-1": "hier"
        },
        "relativeTime": {
          "future": {
            "one": "dans {0} j",
            "other": "dans {0} j"
          },
          "past": {
            "one": "il y a {0} j",
            "other": "il y a {0} j"
          }
        }
      },
      "hour": {
        "displayName": "heure",
        "relative": {
          "0": "cette heure-ci"
        },
        "relativeTime": {
          "future": {
            "one": "dans {0} heure",
            "other": "dans {0} heures"
          },
          "past": {
            "one": "il y a {0} heure",
            "other": "il y a {0} heures"
          }
        }
      },
      "hour-short": {
        "displayName": "h",
        "relative": {
          "0": "cette heure-ci"
        },
        "relativeTime": {
          "future": {
            "one": "dans {0} h",
            "other": "dans {0} h"
          },
          "past": {
            "one": "il y a {0} h",
            "other": "il y a {0} h"
          }
        }
      },
      "minute": {
        "displayName": "minute",
        "relative": {
          "0": "cette minute-ci"
        },
        "relativeTime": {
          "future": {
            "one": "dans {0} minute",
            "other": "dans {0} minutes"
          },
          "past": {
            "one": "il y a {0} minute",
            "other": "il y a {0} minutes"
          }
        }
      },
      "minute-short": {
        "displayName": "min",
        "relative": {
          "0": "cette minute-ci"
        },
        "relativeTime": {
          "future": {
            "one": "dans {0} min",
            "other": "dans {0} min"
          },
          "past": {
            "one": "il y a {0} min",
            "other": "il y a {0} min"
          }
        }
      },
      "second": {
        "displayName": "seconde",
        "relative": {
          "0": "maintenant"
        },
        "relativeTime": {
          "future": {
            "one": "dans {0} seconde",
            "other": "dans {0} secondes"
          },
          "past": {
            "one": "il y a {0} seconde",
            "other": "il y a {0} secondes"
          }
        }
      },
      "second-short": {
        "displayName": "s",
        "relative": {
          "0": "maintenant"
        },
        "relativeTime": {
          "future": {
            "one": "dans {0} s",
            "other": "dans {0} s"
          },
          "past": {
            "one": "il y a {0} s",
            "other": "il y a {0} s"
          }
        }
      }
    },
    "numbers": {
      "decimal": {
        "long": [[1000, {
          "one": ["0 millier", 1],
          "other": ["0 mille", 1]
        }], [10000, {
          "one": ["00 mille", 2],
          "other": ["00 mille", 2]
        }], [100000, {
          "one": ["000 mille", 3],
          "other": ["000 mille", 3]
        }], [1000000, {
          "one": ["0 million", 1],
          "other": ["0 millions", 1]
        }], [10000000, {
          "one": ["00 million", 2],
          "other": ["00 millions", 2]
        }], [100000000, {
          "one": ["000 million", 3],
          "other": ["000 millions", 3]
        }], [1000000000, {
          "one": ["0 milliard", 1],
          "other": ["0 milliards", 1]
        }], [10000000000, {
          "one": ["00 milliard", 2],
          "other": ["00 milliards", 2]
        }], [100000000000, {
          "one": ["000 milliard", 3],
          "other": ["000 milliards", 3]
        }], [1000000000000, {
          "one": ["0 billion", 1],
          "other": ["0 billions", 1]
        }], [10000000000000, {
          "one": ["00 billion", 2],
          "other": ["00 billions", 2]
        }], [100000000000000, {
          "one": ["000 billion", 3],
          "other": ["000 billions", 3]
        }]],
        "short": [[1000, {
          "one": ["0 k", 1],
          "other": ["0 k", 1]
        }], [10000, {
          "one": ["00 k", 2],
          "other": ["00 k", 2]
        }], [100000, {
          "one": ["000 k", 3],
          "other": ["000 k", 3]
        }], [1000000, {
          "one": ["0 M", 1],
          "other": ["0 M", 1]
        }], [10000000, {
          "one": ["00 M", 2],
          "other": ["00 M", 2]
        }], [100000000, {
          "one": ["000 M", 3],
          "other": ["000 M", 3]
        }], [1000000000, {
          "one": ["0 Md", 1],
          "other": ["0 Md", 1]
        }], [10000000000, {
          "one": ["00 Md", 2],
          "other": ["00 Md", 2]
        }], [100000000000, {
          "one": ["000 Md", 3],
          "other": ["000 Md", 3]
        }], [1000000000000, {
          "one": ["0 Bn", 1],
          "other": ["0 Bn", 1]
        }], [10000000000000, {
          "one": ["00 Bn", 2],
          "other": ["00 Bn", 2]
        }], [100000000000000, {
          "one": ["000 Bn", 3],
          "other": ["000 Bn", 3]
        }]]
      }
    }
  }];
  _exports.default = _default;
});
define("istio/cldrs/hu", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  /*jslint eqeq: true*/
  var _default = [{
    "locale": "hu-hu",
    "parentLocale": "hu"
  }, {
    "locale": "hu",
    "pluralRuleFunction": function pluralRuleFunction(n, ord) {
      if (ord) return n == 1 || n == 5 ? "one" : "other";
      return n == 1 ? "one" : "other";
    },
    "fields": {
      "year": {
        "displayName": "év",
        "relative": {
          "0": "ez az év",
          "1": "következő év",
          "-1": "előző év"
        },
        "relativeTime": {
          "future": {
            "one": "{0} év múlva",
            "other": "{0} év múlva"
          },
          "past": {
            "one": "{0} évvel ezelőtt",
            "other": "{0} évvel ezelőtt"
          }
        }
      },
      "year-short": {
        "displayName": "év",
        "relative": {
          "0": "ez az év",
          "1": "következő év",
          "-1": "előző év"
        },
        "relativeTime": {
          "future": {
            "one": "{0} év múlva",
            "other": "{0} év múlva"
          },
          "past": {
            "one": "{0} évvel ezelőtt",
            "other": "{0} évvel ezelőtt"
          }
        }
      },
      "month": {
        "displayName": "hónap",
        "relative": {
          "0": "ez a hónap",
          "1": "következő hónap",
          "-1": "előző hónap"
        },
        "relativeTime": {
          "future": {
            "one": "{0} hónap múlva",
            "other": "{0} hónap múlva"
          },
          "past": {
            "one": "{0} hónappal ezelőtt",
            "other": "{0} hónappal ezelőtt"
          }
        }
      },
      "month-short": {
        "displayName": "hónap",
        "relative": {
          "0": "ez a hónap",
          "1": "következő hónap",
          "-1": "előző hónap"
        },
        "relativeTime": {
          "future": {
            "one": "{0} hónap múlva",
            "other": "{0} hónap múlva"
          },
          "past": {
            "one": "{0} hónappal ezelőtt",
            "other": "{0} hónappal ezelőtt"
          }
        }
      },
      "day": {
        "displayName": "nap",
        "relative": {
          "0": "ma",
          "1": "holnap",
          "2": "holnapután",
          "-2": "tegnapelőtt",
          "-1": "tegnap"
        },
        "relativeTime": {
          "future": {
            "one": "{0} nap múlva",
            "other": "{0} nap múlva"
          },
          "past": {
            "one": "{0} nappal ezelőtt",
            "other": "{0} nappal ezelőtt"
          }
        }
      },
      "day-short": {
        "displayName": "nap",
        "relative": {
          "0": "ma",
          "1": "holnap",
          "2": "holnapután",
          "-2": "tegnapelőtt",
          "-1": "tegnap"
        },
        "relativeTime": {
          "future": {
            "one": "{0} nap múlva",
            "other": "{0} nap múlva"
          },
          "past": {
            "one": "{0} napja",
            "other": "{0} napja"
          }
        }
      },
      "hour": {
        "displayName": "óra",
        "relative": {
          "0": "ebben az órában"
        },
        "relativeTime": {
          "future": {
            "one": "{0} óra múlva",
            "other": "{0} óra múlva"
          },
          "past": {
            "one": "{0} órával ezelőtt",
            "other": "{0} órával ezelőtt"
          }
        }
      },
      "hour-short": {
        "displayName": "óra",
        "relative": {
          "0": "ebben az órában"
        },
        "relativeTime": {
          "future": {
            "one": "{0} óra múlva",
            "other": "{0} óra múlva"
          },
          "past": {
            "one": "{0} órával ezelőtt",
            "other": "{0} órával ezelőtt"
          }
        }
      },
      "minute": {
        "displayName": "perc",
        "relative": {
          "0": "ebben a percben"
        },
        "relativeTime": {
          "future": {
            "one": "{0} perc múlva",
            "other": "{0} perc múlva"
          },
          "past": {
            "one": "{0} perccel ezelőtt",
            "other": "{0} perccel ezelőtt"
          }
        }
      },
      "minute-short": {
        "displayName": "perc",
        "relative": {
          "0": "ebben a percben"
        },
        "relativeTime": {
          "future": {
            "one": "{0} perc múlva",
            "other": "{0} perc múlva"
          },
          "past": {
            "one": "{0} perccel ezelőtt",
            "other": "{0} perccel ezelőtt"
          }
        }
      },
      "second": {
        "displayName": "másodperc",
        "relative": {
          "0": "most"
        },
        "relativeTime": {
          "future": {
            "one": "{0} másodperc múlva",
            "other": "{0} másodperc múlva"
          },
          "past": {
            "one": "{0} másodperccel ezelőtt",
            "other": "{0} másodperccel ezelőtt"
          }
        }
      },
      "second-short": {
        "displayName": "másodperc",
        "relative": {
          "0": "most"
        },
        "relativeTime": {
          "future": {
            "one": "{0} másodperc múlva",
            "other": "{0} másodperc múlva"
          },
          "past": {
            "one": "{0} másodperccel ezelőtt",
            "other": "{0} másodperccel ezelőtt"
          }
        }
      }
    },
    "numbers": {
      "decimal": {
        "long": [[1000, {
          "one": ["0 ezer", 1],
          "other": ["0 ezer", 1]
        }], [10000, {
          "one": ["00 ezer", 2],
          "other": ["00 ezer", 2]
        }], [100000, {
          "one": ["000 ezer", 3],
          "other": ["000 ezer", 3]
        }], [1000000, {
          "one": ["0 millió", 1],
          "other": ["0 millió", 1]
        }], [10000000, {
          "one": ["00 millió", 2],
          "other": ["00 millió", 2]
        }], [100000000, {
          "one": ["000 millió", 3],
          "other": ["000 millió", 3]
        }], [1000000000, {
          "one": ["0 milliárd", 1],
          "other": ["0 milliárd", 1]
        }], [10000000000, {
          "one": ["00 milliárd", 2],
          "other": ["00 milliárd", 2]
        }], [100000000000, {
          "one": ["000 milliárd", 3],
          "other": ["000 milliárd", 3]
        }], [1000000000000, {
          "one": ["0 billió", 1],
          "other": ["0 billió", 1]
        }], [10000000000000, {
          "one": ["00 billió", 2],
          "other": ["00 billió", 2]
        }], [100000000000000, {
          "one": ["000 billió", 3],
          "other": ["000 billió", 3]
        }]],
        "short": [[1000, {
          "one": ["0 E", 1],
          "other": ["0 E", 1]
        }], [10000, {
          "one": ["00 E", 2],
          "other": ["00 E", 2]
        }], [100000, {
          "one": ["000 E", 3],
          "other": ["000 E", 3]
        }], [1000000, {
          "one": ["0 M", 1],
          "other": ["0 M", 1]
        }], [10000000, {
          "one": ["00 M", 2],
          "other": ["00 M", 2]
        }], [100000000, {
          "one": ["000 M", 3],
          "other": ["000 M", 3]
        }], [1000000000, {
          "one": ["0 Mrd", 1],
          "other": ["0 Mrd", 1]
        }], [10000000000, {
          "one": ["00 Mrd", 2],
          "other": ["00 Mrd", 2]
        }], [100000000000, {
          "one": ["000 Mrd", 3],
          "other": ["000 Mrd", 3]
        }], [1000000000000, {
          "one": ["0 B", 1],
          "other": ["0 B", 1]
        }], [10000000000000, {
          "one": ["00 B", 2],
          "other": ["00 B", 2]
        }], [100000000000000, {
          "one": ["000 B", 3],
          "other": ["000 B", 3]
        }]]
      }
    }
  }];
  _exports.default = _default;
});
define("istio/cldrs/it", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  /*jslint eqeq: true*/
  var _default = [{
    "locale": "it-it",
    "parentLocale": "it"
  }, {
    "locale": "it",
    "pluralRuleFunction": function pluralRuleFunction(n, ord) {
      var s = String(n).split("."),
          v0 = !s[1];
      if (ord) return n == 11 || n == 8 || n == 80 || n == 800 ? "many" : "other";
      return n == 1 && v0 ? "one" : "other";
    },
    "fields": {
      "year": {
        "displayName": "anno",
        "relative": {
          "0": "quest’anno",
          "1": "anno prossimo",
          "-1": "anno scorso"
        },
        "relativeTime": {
          "future": {
            "one": "tra {0} anno",
            "other": "tra {0} anni"
          },
          "past": {
            "one": "{0} anno fa",
            "other": "{0} anni fa"
          }
        }
      },
      "year-short": {
        "displayName": "anno",
        "relative": {
          "0": "quest’anno",
          "1": "anno prossimo",
          "-1": "anno scorso"
        },
        "relativeTime": {
          "future": {
            "one": "tra {0} anno",
            "other": "tra {0} anni"
          },
          "past": {
            "one": "{0} anno fa",
            "other": "{0} anni fa"
          }
        }
      },
      "month": {
        "displayName": "mese",
        "relative": {
          "0": "questo mese",
          "1": "mese prossimo",
          "-1": "mese scorso"
        },
        "relativeTime": {
          "future": {
            "one": "tra {0} mese",
            "other": "tra {0} mesi"
          },
          "past": {
            "one": "{0} mese fa",
            "other": "{0} mesi fa"
          }
        }
      },
      "month-short": {
        "displayName": "mese",
        "relative": {
          "0": "questo mese",
          "1": "mese prossimo",
          "-1": "mese scorso"
        },
        "relativeTime": {
          "future": {
            "one": "tra {0} mese",
            "other": "tra {0} mesi"
          },
          "past": {
            "one": "{0} mese fa",
            "other": "{0} mesi fa"
          }
        }
      },
      "day": {
        "displayName": "giorno",
        "relative": {
          "0": "oggi",
          "1": "domani",
          "2": "dopodomani",
          "-2": "l’altro ieri",
          "-1": "ieri"
        },
        "relativeTime": {
          "future": {
            "one": "tra {0} giorno",
            "other": "tra {0} giorni"
          },
          "past": {
            "one": "{0} giorno fa",
            "other": "{0} giorni fa"
          }
        }
      },
      "day-short": {
        "displayName": "g",
        "relative": {
          "0": "oggi",
          "1": "domani",
          "2": "dopodomani",
          "-2": "l’altro ieri",
          "-1": "ieri"
        },
        "relativeTime": {
          "future": {
            "one": "tra {0} g",
            "other": "tra {0} gg"
          },
          "past": {
            "one": "{0} g fa",
            "other": "{0} gg fa"
          }
        }
      },
      "hour": {
        "displayName": "ora",
        "relative": {
          "0": "quest’ora"
        },
        "relativeTime": {
          "future": {
            "one": "tra {0} ora",
            "other": "tra {0} ore"
          },
          "past": {
            "one": "{0} ora fa",
            "other": "{0} ore fa"
          }
        }
      },
      "hour-short": {
        "displayName": "h.",
        "relative": {
          "0": "quest’ora"
        },
        "relativeTime": {
          "future": {
            "one": "tra {0} h",
            "other": "tra {0} h"
          },
          "past": {
            "one": "{0} h fa",
            "other": "{0} h fa"
          }
        }
      },
      "minute": {
        "displayName": "minuto",
        "relative": {
          "0": "questo minuto"
        },
        "relativeTime": {
          "future": {
            "one": "tra {0} minuto",
            "other": "tra {0} minuti"
          },
          "past": {
            "one": "{0} minuto fa",
            "other": "{0} minuti fa"
          }
        }
      },
      "minute-short": {
        "displayName": "min",
        "relative": {
          "0": "questo minuto"
        },
        "relativeTime": {
          "future": {
            "one": "tra {0} min",
            "other": "tra {0} min"
          },
          "past": {
            "one": "{0} min fa",
            "other": "{0} min fa"
          }
        }
      },
      "second": {
        "displayName": "secondo",
        "relative": {
          "0": "ora"
        },
        "relativeTime": {
          "future": {
            "one": "tra {0} secondo",
            "other": "tra {0} secondi"
          },
          "past": {
            "one": "{0} secondo fa",
            "other": "{0} secondi fa"
          }
        }
      },
      "second-short": {
        "displayName": "s",
        "relative": {
          "0": "ora"
        },
        "relativeTime": {
          "future": {
            "one": "tra {0} s",
            "other": "tra {0} sec."
          },
          "past": {
            "one": "{0} s fa",
            "other": "{0} sec. fa"
          }
        }
      }
    },
    "numbers": {
      "decimal": {
        "long": [[1000, {
          "one": ["0 mille", 1],
          "other": ["0 mila", 1]
        }], [10000, {
          "one": ["00 mila", 2],
          "other": ["00 mila", 2]
        }], [100000, {
          "one": ["000 mila", 3],
          "other": ["000 mila", 3]
        }], [1000000, {
          "one": ["0 milione", 1],
          "other": ["0 milioni", 1]
        }], [10000000, {
          "one": ["00 milioni", 2],
          "other": ["00 milioni", 2]
        }], [100000000, {
          "one": ["000 milioni", 3],
          "other": ["000 milioni", 3]
        }], [1000000000, {
          "one": ["0 miliardo", 1],
          "other": ["0 miliardi", 1]
        }], [10000000000, {
          "one": ["00 miliardi", 2],
          "other": ["00 miliardi", 2]
        }], [100000000000, {
          "one": ["000 miliardi", 3],
          "other": ["000 miliardi", 3]
        }], [1000000000000, {
          "one": ["0 mille miliardi", 1],
          "other": ["0 mila miliardi", 1]
        }], [10000000000000, {
          "one": ["00 mila miliardi", 2],
          "other": ["00 mila miliardi", 2]
        }], [100000000000000, {
          "one": ["000 mila miliardi", 3],
          "other": ["000 mila miliardi", 3]
        }]],
        "short": [[1000, {
          "one": ["0", 1],
          "other": ["0", 1]
        }], [10000, {
          "one": ["0", 1],
          "other": ["0", 1]
        }], [100000, {
          "one": ["0", 1],
          "other": ["0", 1]
        }], [1000000, {
          "one": ["0 Mln", 1],
          "other": ["0 Mln", 1]
        }], [10000000, {
          "one": ["00 Mln", 2],
          "other": ["00 Mln", 2]
        }], [100000000, {
          "one": ["000 Mln", 3],
          "other": ["000 Mln", 3]
        }], [1000000000, {
          "one": ["0 Mrd", 1],
          "other": ["0 Mrd", 1]
        }], [10000000000, {
          "one": ["00 Mrd", 2],
          "other": ["00 Mrd", 2]
        }], [100000000000, {
          "one": ["000 Mrd", 3],
          "other": ["000 Mrd", 3]
        }], [1000000000000, {
          "one": ["0 Bln", 1],
          "other": ["0 Bln", 1]
        }], [10000000000000, {
          "one": ["00 Bln", 2],
          "other": ["00 Bln", 2]
        }], [100000000000000, {
          "one": ["000 Bln", 3],
          "other": ["000 Bln", 3]
        }]]
      }
    }
  }];
  _exports.default = _default;
});
define("istio/cldrs/ja", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  /*jslint eqeq: true*/
  var _default = [{
    "locale": "ja-jp",
    "parentLocale": "ja"
  }, {
    "locale": "ja",
    "pluralRuleFunction": function pluralRuleFunction(n, ord) {
      if (ord) return "other";
      return "other";
    },
    "fields": {
      "year": {
        "displayName": "年",
        "relative": {
          "0": "今年",
          "1": "翌年",
          "-1": "昨年"
        },
        "relativeTime": {
          "future": {
            "other": "{0} 年後"
          },
          "past": {
            "other": "{0} 年前"
          }
        }
      },
      "year-short": {
        "displayName": "年",
        "relative": {
          "0": "今年",
          "1": "翌年",
          "-1": "昨年"
        },
        "relativeTime": {
          "future": {
            "other": "{0} 年後"
          },
          "past": {
            "other": "{0} 年前"
          }
        }
      },
      "month": {
        "displayName": "月",
        "relative": {
          "0": "今月",
          "1": "翌月",
          "-1": "先月"
        },
        "relativeTime": {
          "future": {
            "other": "{0} か月後"
          },
          "past": {
            "other": "{0} か月前"
          }
        }
      },
      "month-short": {
        "displayName": "月",
        "relative": {
          "0": "今月",
          "1": "翌月",
          "-1": "先月"
        },
        "relativeTime": {
          "future": {
            "other": "{0} か月後"
          },
          "past": {
            "other": "{0} か月前"
          }
        }
      },
      "day": {
        "displayName": "日",
        "relative": {
          "0": "今日",
          "1": "明日",
          "2": "明後日",
          "-2": "一昨日",
          "-1": "昨日"
        },
        "relativeTime": {
          "future": {
            "other": "{0} 日後"
          },
          "past": {
            "other": "{0} 日前"
          }
        }
      },
      "day-short": {
        "displayName": "日",
        "relative": {
          "0": "今日",
          "1": "明日",
          "2": "明後日",
          "-2": "一昨日",
          "-1": "昨日"
        },
        "relativeTime": {
          "future": {
            "other": "{0} 日後"
          },
          "past": {
            "other": "{0} 日前"
          }
        }
      },
      "hour": {
        "displayName": "時",
        "relative": {
          "0": "1 時間以内"
        },
        "relativeTime": {
          "future": {
            "other": "{0} 時間後"
          },
          "past": {
            "other": "{0} 時間前"
          }
        }
      },
      "hour-short": {
        "displayName": "時",
        "relative": {
          "0": "1 時間以内"
        },
        "relativeTime": {
          "future": {
            "other": "{0} 時間後"
          },
          "past": {
            "other": "{0} 時間前"
          }
        }
      },
      "minute": {
        "displayName": "分",
        "relative": {
          "0": "1 分以内"
        },
        "relativeTime": {
          "future": {
            "other": "{0} 分後"
          },
          "past": {
            "other": "{0} 分前"
          }
        }
      },
      "minute-short": {
        "displayName": "分",
        "relative": {
          "0": "1 分以内"
        },
        "relativeTime": {
          "future": {
            "other": "{0} 分後"
          },
          "past": {
            "other": "{0} 分前"
          }
        }
      },
      "second": {
        "displayName": "秒",
        "relative": {
          "0": "今"
        },
        "relativeTime": {
          "future": {
            "other": "{0} 秒後"
          },
          "past": {
            "other": "{0} 秒前"
          }
        }
      },
      "second-short": {
        "displayName": "秒",
        "relative": {
          "0": "今"
        },
        "relativeTime": {
          "future": {
            "other": "{0} 秒後"
          },
          "past": {
            "other": "{0} 秒前"
          }
        }
      }
    },
    "numbers": {
      "decimal": {
        "long": [[1000, {
          "other": ["0", 1]
        }], [10000, {
          "other": ["0万", 1]
        }], [100000, {
          "other": ["00万", 2]
        }], [1000000, {
          "other": ["000万", 3]
        }], [10000000, {
          "other": ["0000万", 4]
        }], [100000000, {
          "other": ["0億", 1]
        }], [1000000000, {
          "other": ["00億", 2]
        }], [10000000000, {
          "other": ["000億", 3]
        }], [100000000000, {
          "other": ["0000億", 4]
        }], [1000000000000, {
          "other": ["0兆", 1]
        }], [10000000000000, {
          "other": ["00兆", 2]
        }], [100000000000000, {
          "other": ["000兆", 3]
        }]],
        "short": [[1000, {
          "other": ["0", 1]
        }], [10000, {
          "other": ["0万", 1]
        }], [100000, {
          "other": ["00万", 2]
        }], [1000000, {
          "other": ["000万", 3]
        }], [10000000, {
          "other": ["0000万", 4]
        }], [100000000, {
          "other": ["0億", 1]
        }], [1000000000, {
          "other": ["00億", 2]
        }], [10000000000, {
          "other": ["000億", 3]
        }], [100000000000, {
          "other": ["0000億", 4]
        }], [1000000000000, {
          "other": ["0兆", 1]
        }], [10000000000000, {
          "other": ["00兆", 2]
        }], [100000000000000, {
          "other": ["000兆", 3]
        }]]
      }
    }
  }];
  _exports.default = _default;
});
define("istio/cldrs/ko", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  /*jslint eqeq: true*/
  var _default = [{
    "locale": "ko-kr",
    "parentLocale": "ko"
  }, {
    "locale": "ko",
    "pluralRuleFunction": function pluralRuleFunction(n, ord) {
      if (ord) return "other";
      return "other";
    },
    "fields": {
      "year": {
        "displayName": "년",
        "relative": {
          "0": "올해",
          "1": "내년",
          "-1": "작년"
        },
        "relativeTime": {
          "future": {
            "other": "{0}년 후"
          },
          "past": {
            "other": "{0}년 전"
          }
        }
      },
      "year-short": {
        "displayName": "년",
        "relative": {
          "0": "올해",
          "1": "내년",
          "-1": "작년"
        },
        "relativeTime": {
          "future": {
            "other": "{0}년 후"
          },
          "past": {
            "other": "{0}년 전"
          }
        }
      },
      "month": {
        "displayName": "월",
        "relative": {
          "0": "이번 달",
          "1": "다음 달",
          "-1": "지난달"
        },
        "relativeTime": {
          "future": {
            "other": "{0}개월 후"
          },
          "past": {
            "other": "{0}개월 전"
          }
        }
      },
      "month-short": {
        "displayName": "월",
        "relative": {
          "0": "이번 달",
          "1": "다음 달",
          "-1": "지난달"
        },
        "relativeTime": {
          "future": {
            "other": "{0}개월 후"
          },
          "past": {
            "other": "{0}개월 전"
          }
        }
      },
      "day": {
        "displayName": "일",
        "relative": {
          "0": "오늘",
          "1": "내일",
          "2": "모레",
          "-2": "그저께",
          "-1": "어제"
        },
        "relativeTime": {
          "future": {
            "other": "{0}일 후"
          },
          "past": {
            "other": "{0}일 전"
          }
        }
      },
      "day-short": {
        "displayName": "일",
        "relative": {
          "0": "오늘",
          "1": "내일",
          "2": "모레",
          "-2": "그저께",
          "-1": "어제"
        },
        "relativeTime": {
          "future": {
            "other": "{0}일 후"
          },
          "past": {
            "other": "{0}일 전"
          }
        }
      },
      "hour": {
        "displayName": "시",
        "relative": {
          "0": "현재 시간"
        },
        "relativeTime": {
          "future": {
            "other": "{0}시간 후"
          },
          "past": {
            "other": "{0}시간 전"
          }
        }
      },
      "hour-short": {
        "displayName": "시",
        "relative": {
          "0": "현재 시간"
        },
        "relativeTime": {
          "future": {
            "other": "{0}시간 후"
          },
          "past": {
            "other": "{0}시간 전"
          }
        }
      },
      "minute": {
        "displayName": "분",
        "relative": {
          "0": "현재 분"
        },
        "relativeTime": {
          "future": {
            "other": "{0}분 후"
          },
          "past": {
            "other": "{0}분 전"
          }
        }
      },
      "minute-short": {
        "displayName": "분",
        "relative": {
          "0": "현재 분"
        },
        "relativeTime": {
          "future": {
            "other": "{0}분 후"
          },
          "past": {
            "other": "{0}분 전"
          }
        }
      },
      "second": {
        "displayName": "초",
        "relative": {
          "0": "지금"
        },
        "relativeTime": {
          "future": {
            "other": "{0}초 후"
          },
          "past": {
            "other": "{0}초 전"
          }
        }
      },
      "second-short": {
        "displayName": "초",
        "relative": {
          "0": "지금"
        },
        "relativeTime": {
          "future": {
            "other": "{0}초 후"
          },
          "past": {
            "other": "{0}초 전"
          }
        }
      }
    },
    "numbers": {
      "decimal": {
        "long": [[1000, {
          "other": ["0천", 1]
        }], [10000, {
          "other": ["0만", 1]
        }], [100000, {
          "other": ["00만", 2]
        }], [1000000, {
          "other": ["000만", 3]
        }], [10000000, {
          "other": ["0000만", 4]
        }], [100000000, {
          "other": ["0억", 1]
        }], [1000000000, {
          "other": ["00억", 2]
        }], [10000000000, {
          "other": ["000억", 3]
        }], [100000000000, {
          "other": ["0000억", 4]
        }], [1000000000000, {
          "other": ["0조", 1]
        }], [10000000000000, {
          "other": ["00조", 2]
        }], [100000000000000, {
          "other": ["000조", 3]
        }]],
        "short": [[1000, {
          "other": ["0천", 1]
        }], [10000, {
          "other": ["0만", 1]
        }], [100000, {
          "other": ["00만", 2]
        }], [1000000, {
          "other": ["000만", 3]
        }], [10000000, {
          "other": ["0000만", 4]
        }], [100000000, {
          "other": ["0억", 1]
        }], [1000000000, {
          "other": ["00억", 2]
        }], [10000000000, {
          "other": ["000억", 3]
        }], [100000000000, {
          "other": ["0000억", 4]
        }], [1000000000000, {
          "other": ["0조", 1]
        }], [10000000000000, {
          "other": ["00조", 2]
        }], [100000000000000, {
          "other": ["000조", 3]
        }]]
      }
    }
  }];
  _exports.default = _default;
});
define("istio/cldrs/nb", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  /*jslint eqeq: true*/
  var _default = [{
    "locale": "nb-no",
    "parentLocale": "nb"
  }, {
    "locale": "nb",
    "pluralRuleFunction": function pluralRuleFunction(n, ord) {
      if (ord) return "other";
      return n == 1 ? "one" : "other";
    },
    "fields": {
      "year": {
        "displayName": "år",
        "relative": {
          "0": "i år",
          "1": "neste år",
          "-1": "i fjor"
        },
        "relativeTime": {
          "future": {
            "one": "om {0} år",
            "other": "om {0} år"
          },
          "past": {
            "one": "for {0} år siden",
            "other": "for {0} år siden"
          }
        }
      },
      "year-short": {
        "displayName": "år",
        "relative": {
          "0": "i år",
          "1": "neste år",
          "-1": "i fjor"
        },
        "relativeTime": {
          "future": {
            "one": "om {0} år",
            "other": "om {0} år"
          },
          "past": {
            "one": "for {0} år siden",
            "other": "for {0} år siden"
          }
        }
      },
      "month": {
        "displayName": "måned",
        "relative": {
          "0": "denne måneden",
          "1": "neste måned",
          "-1": "forrige måned"
        },
        "relativeTime": {
          "future": {
            "one": "om {0} måned",
            "other": "om {0} måneder"
          },
          "past": {
            "one": "for {0} måned siden",
            "other": "for {0} måneder siden"
          }
        }
      },
      "month-short": {
        "displayName": "mnd.",
        "relative": {
          "0": "denne md.",
          "1": "neste md.",
          "-1": "forrige md."
        },
        "relativeTime": {
          "future": {
            "one": "om {0} md.",
            "other": "om {0} md."
          },
          "past": {
            "one": "for {0} md. siden",
            "other": "for {0} md. siden"
          }
        }
      },
      "day": {
        "displayName": "dag",
        "relative": {
          "0": "i dag",
          "1": "i morgen",
          "2": "i overmorgen",
          "-2": "i forgårs",
          "-1": "i går"
        },
        "relativeTime": {
          "future": {
            "one": "om {0} døgn",
            "other": "om {0} døgn"
          },
          "past": {
            "one": "for {0} døgn siden",
            "other": "for {0} døgn siden"
          }
        }
      },
      "day-short": {
        "displayName": "dag",
        "relative": {
          "0": "i dag",
          "1": "i morgen",
          "2": "i overmorgen",
          "-2": "i forgårs",
          "-1": "i går"
        },
        "relativeTime": {
          "future": {
            "one": "om {0} d.",
            "other": "om {0} d."
          },
          "past": {
            "one": "for {0} d. siden",
            "other": "for {0} d. siden"
          }
        }
      },
      "hour": {
        "displayName": "time",
        "relative": {
          "0": "denne timen"
        },
        "relativeTime": {
          "future": {
            "one": "om {0} time",
            "other": "om {0} timer"
          },
          "past": {
            "one": "for {0} time siden",
            "other": "for {0} timer siden"
          }
        }
      },
      "hour-short": {
        "displayName": "t",
        "relative": {
          "0": "denne timen"
        },
        "relativeTime": {
          "future": {
            "one": "om {0} t",
            "other": "om {0} t"
          },
          "past": {
            "one": "for {0} t siden",
            "other": "for {0} t siden"
          }
        }
      },
      "minute": {
        "displayName": "minutt",
        "relative": {
          "0": "dette minuttet"
        },
        "relativeTime": {
          "future": {
            "one": "om {0} minutt",
            "other": "om {0} minutter"
          },
          "past": {
            "one": "for {0} minutt siden",
            "other": "for {0} minutter siden"
          }
        }
      },
      "minute-short": {
        "displayName": "min",
        "relative": {
          "0": "dette minuttet"
        },
        "relativeTime": {
          "future": {
            "one": "om {0} min",
            "other": "om {0} min"
          },
          "past": {
            "one": "for {0} min siden",
            "other": "for {0} min siden"
          }
        }
      },
      "second": {
        "displayName": "sekund",
        "relative": {
          "0": "nå"
        },
        "relativeTime": {
          "future": {
            "one": "om {0} sekund",
            "other": "om {0} sekunder"
          },
          "past": {
            "one": "for {0} sekund siden",
            "other": "for {0} sekunder siden"
          }
        }
      },
      "second-short": {
        "displayName": "sek",
        "relative": {
          "0": "nå"
        },
        "relativeTime": {
          "future": {
            "one": "om {0} sek",
            "other": "om {0} sek"
          },
          "past": {
            "one": "for {0} sek siden",
            "other": "for {0} sek siden"
          }
        }
      }
    },
    "numbers": {
      "decimal": {
        "long": [[1000, {
          "one": ["0 tusen", 1],
          "other": ["0 tusen", 1]
        }], [10000, {
          "one": ["00 tusen", 2],
          "other": ["00 tusen", 2]
        }], [100000, {
          "one": ["000 tusen", 3],
          "other": ["000 tusen", 3]
        }], [1000000, {
          "one": ["0 million", 1],
          "other": ["0 millioner", 1]
        }], [10000000, {
          "one": ["00 million", 2],
          "other": ["00 millioner", 2]
        }], [100000000, {
          "one": ["000 million", 3],
          "other": ["000 millioner", 3]
        }], [1000000000, {
          "one": ["0 milliard", 1],
          "other": ["0 milliarder", 1]
        }], [10000000000, {
          "one": ["00 milliard", 2],
          "other": ["00 milliarder", 2]
        }], [100000000000, {
          "one": ["000 milliard", 3],
          "other": ["000 milliarder", 3]
        }], [1000000000000, {
          "one": ["0 billion", 1],
          "other": ["0 billioner", 1]
        }], [10000000000000, {
          "one": ["00 billioner", 2],
          "other": ["00 billioner", 2]
        }], [100000000000000, {
          "one": ["000 billioner", 3],
          "other": ["000 billioner", 3]
        }]],
        "short": [[1000, {
          "one": ["0k", 1],
          "other": ["0k", 1]
        }], [10000, {
          "one": ["00k", 2],
          "other": ["00k", 2]
        }], [100000, {
          "one": ["000k", 3],
          "other": ["000k", 3]
        }], [1000000, {
          "one": ["0 mill'.'", 1],
          "other": ["0 mill'.'", 1]
        }], [10000000, {
          "one": ["00 mill'.'", 2],
          "other": ["00 mill'.'", 2]
        }], [100000000, {
          "one": ["000 mill'.'", 3],
          "other": ["000 mill'.'", 3]
        }], [1000000000, {
          "one": ["0 mrd'.'", 1],
          "other": ["0 mrd'.'", 1]
        }], [10000000000, {
          "one": ["00 mrd'.'", 2],
          "other": ["00 mrd'.'", 2]
        }], [100000000000, {
          "one": ["000 mrd'.'", 3],
          "other": ["000 mrd'.'", 3]
        }], [1000000000000, {
          "one": ["0 bill'.'", 1],
          "other": ["0 bill'.'", 1]
        }], [10000000000000, {
          "one": ["00 bill'.'", 2],
          "other": ["00 bill'.'", 2]
        }], [100000000000000, {
          "one": ["000 bill'.'", 3],
          "other": ["000 bill'.'", 3]
        }]]
      }
    }
  }];
  _exports.default = _default;
});
define("istio/cldrs/nl", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  /*jslint eqeq: true*/
  var _default = [{
    "locale": "nl-nl",
    "parentLocale": "nl"
  }, {
    "locale": "nl",
    "pluralRuleFunction": function pluralRuleFunction(n, ord) {
      var s = String(n).split("."),
          v0 = !s[1];
      if (ord) return "other";
      return n == 1 && v0 ? "one" : "other";
    },
    "fields": {
      "year": {
        "displayName": "jaar",
        "relative": {
          "0": "dit jaar",
          "1": "volgend jaar",
          "-1": "vorig jaar"
        },
        "relativeTime": {
          "future": {
            "one": "over {0} jaar",
            "other": "over {0} jaar"
          },
          "past": {
            "one": "{0} jaar geleden",
            "other": "{0} jaar geleden"
          }
        }
      },
      "year-short": {
        "displayName": "jr",
        "relative": {
          "0": "dit jaar",
          "1": "volgend jaar",
          "-1": "vorig jaar"
        },
        "relativeTime": {
          "future": {
            "one": "over {0} jaar",
            "other": "over {0} jaar"
          },
          "past": {
            "one": "{0} jaar geleden",
            "other": "{0} jaar geleden"
          }
        }
      },
      "month": {
        "displayName": "maand",
        "relative": {
          "0": "deze maand",
          "1": "volgende maand",
          "-1": "vorige maand"
        },
        "relativeTime": {
          "future": {
            "one": "over {0} maand",
            "other": "over {0} maanden"
          },
          "past": {
            "one": "{0} maand geleden",
            "other": "{0} maanden geleden"
          }
        }
      },
      "month-short": {
        "displayName": "mnd",
        "relative": {
          "0": "deze maand",
          "1": "volgende maand",
          "-1": "vorige maand"
        },
        "relativeTime": {
          "future": {
            "one": "over {0} maand",
            "other": "over {0} maanden"
          },
          "past": {
            "one": "{0} maand geleden",
            "other": "{0} maanden geleden"
          }
        }
      },
      "day": {
        "displayName": "dag",
        "relative": {
          "0": "vandaag",
          "1": "morgen",
          "2": "overmorgen",
          "-2": "eergisteren",
          "-1": "gisteren"
        },
        "relativeTime": {
          "future": {
            "one": "over {0} dag",
            "other": "over {0} dagen"
          },
          "past": {
            "one": "{0} dag geleden",
            "other": "{0} dagen geleden"
          }
        }
      },
      "day-short": {
        "displayName": "dag",
        "relative": {
          "0": "vandaag",
          "1": "morgen",
          "2": "overmorgen",
          "-2": "eergisteren",
          "-1": "gisteren"
        },
        "relativeTime": {
          "future": {
            "one": "over {0} dag",
            "other": "over {0} dgn"
          },
          "past": {
            "one": "{0} dag geleden",
            "other": "{0} dgn geleden"
          }
        }
      },
      "hour": {
        "displayName": "uur",
        "relative": {
          "0": "binnen een uur"
        },
        "relativeTime": {
          "future": {
            "one": "over {0} uur",
            "other": "over {0} uur"
          },
          "past": {
            "one": "{0} uur geleden",
            "other": "{0} uur geleden"
          }
        }
      },
      "hour-short": {
        "displayName": "uur",
        "relative": {
          "0": "binnen een uur"
        },
        "relativeTime": {
          "future": {
            "one": "over {0} uur",
            "other": "over {0} uur"
          },
          "past": {
            "one": "{0} uur geleden",
            "other": "{0} uur geleden"
          }
        }
      },
      "minute": {
        "displayName": "minuut",
        "relative": {
          "0": "binnen een minuut"
        },
        "relativeTime": {
          "future": {
            "one": "over {0} minuut",
            "other": "over {0} minuten"
          },
          "past": {
            "one": "{0} minuut geleden",
            "other": "{0} minuten geleden"
          }
        }
      },
      "minute-short": {
        "displayName": "min",
        "relative": {
          "0": "binnen een minuut"
        },
        "relativeTime": {
          "future": {
            "one": "over {0} min.",
            "other": "over {0} min."
          },
          "past": {
            "one": "{0} min. geleden",
            "other": "{0} min. geleden"
          }
        }
      },
      "second": {
        "displayName": "seconde",
        "relative": {
          "0": "nu"
        },
        "relativeTime": {
          "future": {
            "one": "over {0} seconde",
            "other": "over {0} seconden"
          },
          "past": {
            "one": "{0} seconde geleden",
            "other": "{0} seconden geleden"
          }
        }
      },
      "second-short": {
        "displayName": "sec",
        "relative": {
          "0": "nu"
        },
        "relativeTime": {
          "future": {
            "one": "over {0} sec.",
            "other": "over {0} sec."
          },
          "past": {
            "one": "{0} sec. geleden",
            "other": "{0} sec. geleden"
          }
        }
      }
    },
    "numbers": {
      "decimal": {
        "long": [[1000, {
          "one": ["0 duizend", 1],
          "other": ["0 duizend", 1]
        }], [10000, {
          "one": ["00 duizend", 2],
          "other": ["00 duizend", 2]
        }], [100000, {
          "one": ["000 duizend", 3],
          "other": ["000 duizend", 3]
        }], [1000000, {
          "one": ["0 miljoen", 1],
          "other": ["0 miljoen", 1]
        }], [10000000, {
          "one": ["00 miljoen", 2],
          "other": ["00 miljoen", 2]
        }], [100000000, {
          "one": ["000 miljoen", 3],
          "other": ["000 miljoen", 3]
        }], [1000000000, {
          "one": ["0 miljard", 1],
          "other": ["0 miljard", 1]
        }], [10000000000, {
          "one": ["00 miljard", 2],
          "other": ["00 miljard", 2]
        }], [100000000000, {
          "one": ["000 miljard", 3],
          "other": ["000 miljard", 3]
        }], [1000000000000, {
          "one": ["0 biljoen", 1],
          "other": ["0 biljoen", 1]
        }], [10000000000000, {
          "one": ["00 biljoen", 2],
          "other": ["00 biljoen", 2]
        }], [100000000000000, {
          "one": ["000 biljoen", 3],
          "other": ["000 biljoen", 3]
        }]],
        "short": [[1000, {
          "one": ["0K", 1],
          "other": ["0K", 1]
        }], [10000, {
          "one": ["00K", 2],
          "other": ["00K", 2]
        }], [100000, {
          "one": ["000K", 3],
          "other": ["000K", 3]
        }], [1000000, {
          "one": ["0 mln'.'", 1],
          "other": ["0 mln'.'", 1]
        }], [10000000, {
          "one": ["00 mln'.'", 2],
          "other": ["00 mln'.'", 2]
        }], [100000000, {
          "one": ["000 mln'.'", 3],
          "other": ["000 mln'.'", 3]
        }], [1000000000, {
          "one": ["0 mld'.'", 1],
          "other": ["0 mld'.'", 1]
        }], [10000000000, {
          "one": ["00 mld'.'", 2],
          "other": ["00 mld'.'", 2]
        }], [100000000000, {
          "one": ["000 mld'.'", 3],
          "other": ["000 mld'.'", 3]
        }], [1000000000000, {
          "one": ["0 bln'.'", 1],
          "other": ["0 bln'.'", 1]
        }], [10000000000000, {
          "one": ["00 bln'.'", 2],
          "other": ["00 bln'.'", 2]
        }], [100000000000000, {
          "one": ["000 bln'.'", 3],
          "other": ["000 bln'.'", 3]
        }]]
      }
    }
  }];
  _exports.default = _default;
});
define("istio/cldrs/none", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  /*jslint eqeq: true*/
  var _default = [{
    "locale": "none",
    "pluralRuleFunction": function pluralRuleFunction(n, ord) {
      if (ord) return "other";
      return "other";
    },
    "fields": {
      "year": {
        "displayName": "Year",
        "relative": {
          "0": "this year",
          "1": "next year",
          "-1": "last year"
        },
        "relativeTime": {
          "future": {
            "other": "+{0} y"
          },
          "past": {
            "other": "-{0} y"
          }
        }
      },
      "year-short": {
        "displayName": "Year",
        "relative": {
          "0": "this year",
          "1": "next year",
          "-1": "last year"
        },
        "relativeTime": {
          "future": {
            "other": "+{0} y"
          },
          "past": {
            "other": "-{0} y"
          }
        }
      },
      "month": {
        "displayName": "Month",
        "relative": {
          "0": "this month",
          "1": "next month",
          "-1": "last month"
        },
        "relativeTime": {
          "future": {
            "other": "+{0} m"
          },
          "past": {
            "other": "-{0} m"
          }
        }
      },
      "month-short": {
        "displayName": "Month",
        "relative": {
          "0": "this month",
          "1": "next month",
          "-1": "last month"
        },
        "relativeTime": {
          "future": {
            "other": "+{0} m"
          },
          "past": {
            "other": "-{0} m"
          }
        }
      },
      "day": {
        "displayName": "Day",
        "relative": {
          "0": "today",
          "1": "tomorrow",
          "-1": "yesterday"
        },
        "relativeTime": {
          "future": {
            "other": "+{0} d"
          },
          "past": {
            "other": "-{0} d"
          }
        }
      },
      "day-short": {
        "displayName": "Day",
        "relative": {
          "0": "today",
          "1": "tomorrow",
          "-1": "yesterday"
        },
        "relativeTime": {
          "future": {
            "other": "+{0} d"
          },
          "past": {
            "other": "-{0} d"
          }
        }
      },
      "hour": {
        "displayName": "Hour",
        "relative": {
          "0": "this hour"
        },
        "relativeTime": {
          "future": {
            "other": "+{0} h"
          },
          "past": {
            "other": "-{0} h"
          }
        }
      },
      "hour-short": {
        "displayName": "Hour",
        "relative": {
          "0": "this hour"
        },
        "relativeTime": {
          "future": {
            "other": "+{0} h"
          },
          "past": {
            "other": "-{0} h"
          }
        }
      },
      "minute": {
        "displayName": "Minute",
        "relative": {
          "0": "this minute"
        },
        "relativeTime": {
          "future": {
            "other": "+{0} min"
          },
          "past": {
            "other": "-{0} min"
          }
        }
      },
      "minute-short": {
        "displayName": "Minute",
        "relative": {
          "0": "this minute"
        },
        "relativeTime": {
          "future": {
            "other": "+{0} min"
          },
          "past": {
            "other": "-{0} min"
          }
        }
      },
      "second": {
        "displayName": "Second",
        "relative": {
          "0": "now"
        },
        "relativeTime": {
          "future": {
            "other": "+{0} s"
          },
          "past": {
            "other": "-{0} s"
          }
        }
      },
      "second-short": {
        "displayName": "Second",
        "relative": {
          "0": "now"
        },
        "relativeTime": {
          "future": {
            "other": "+{0} s"
          },
          "past": {
            "other": "-{0} s"
          }
        }
      }
    },
    "numbers": {
      "decimal": {
        "long": [[1000, {
          "other": ["0K", 1]
        }], [10000, {
          "other": ["00K", 2]
        }], [100000, {
          "other": ["000K", 3]
        }], [1000000, {
          "other": ["0M", 1]
        }], [10000000, {
          "other": ["00M", 2]
        }], [100000000, {
          "other": ["000M", 3]
        }], [1000000000, {
          "other": ["0G", 1]
        }], [10000000000, {
          "other": ["00G", 2]
        }], [100000000000, {
          "other": ["000G", 3]
        }], [1000000000000, {
          "other": ["0T", 1]
        }], [10000000000000, {
          "other": ["00T", 2]
        }], [100000000000000, {
          "other": ["000T", 3]
        }]],
        "short": [[1000, {
          "other": ["0K", 1]
        }], [10000, {
          "other": ["00K", 2]
        }], [100000, {
          "other": ["000K", 3]
        }], [1000000, {
          "other": ["0M", 1]
        }], [10000000, {
          "other": ["00M", 2]
        }], [100000000, {
          "other": ["000M", 3]
        }], [1000000000, {
          "other": ["0G", 1]
        }], [10000000000, {
          "other": ["00G", 2]
        }], [100000000000, {
          "other": ["000G", 3]
        }], [1000000000000, {
          "other": ["0T", 1]
        }], [10000000000000, {
          "other": ["00T", 2]
        }], [100000000000000, {
          "other": ["000T", 3]
        }]]
      }
    }
  }];
  _exports.default = _default;
});
define("istio/cldrs/pt", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  /*jslint eqeq: true*/
  var _default = [{
    "locale": "pt-br",
    "parentLocale": "pt"
  }, {
    "locale": "pt",
    "pluralRuleFunction": function pluralRuleFunction(n, ord) {
      var s = String(n).split("."),
          i = s[0];
      if (ord) return "other";
      return i == 0 || i == 1 ? "one" : "other";
    },
    "fields": {
      "year": {
        "displayName": "ano",
        "relative": {
          "0": "este ano",
          "1": "próximo ano",
          "-1": "ano passado"
        },
        "relativeTime": {
          "future": {
            "one": "em {0} ano",
            "other": "em {0} anos"
          },
          "past": {
            "one": "há {0} ano",
            "other": "há {0} anos"
          }
        }
      },
      "year-short": {
        "displayName": "ano",
        "relative": {
          "0": "este ano",
          "1": "próximo ano",
          "-1": "ano passado"
        },
        "relativeTime": {
          "future": {
            "one": "em {0} ano",
            "other": "em {0} anos"
          },
          "past": {
            "one": "há {0} ano",
            "other": "há {0} anos"
          }
        }
      },
      "month": {
        "displayName": "mês",
        "relative": {
          "0": "este mês",
          "1": "próximo mês",
          "-1": "mês passado"
        },
        "relativeTime": {
          "future": {
            "one": "em {0} mês",
            "other": "em {0} meses"
          },
          "past": {
            "one": "há {0} mês",
            "other": "há {0} meses"
          }
        }
      },
      "month-short": {
        "displayName": "mês",
        "relative": {
          "0": "este mês",
          "1": "próximo mês",
          "-1": "mês passado"
        },
        "relativeTime": {
          "future": {
            "one": "em {0} mês",
            "other": "em {0} meses"
          },
          "past": {
            "one": "há {0} mês",
            "other": "há {0} meses"
          }
        }
      },
      "day": {
        "displayName": "dia",
        "relative": {
          "0": "hoje",
          "1": "amanhã",
          "2": "depois de amanhã",
          "-2": "anteontem",
          "-1": "ontem"
        },
        "relativeTime": {
          "future": {
            "one": "em {0} dia",
            "other": "em {0} dias"
          },
          "past": {
            "one": "há {0} dia",
            "other": "há {0} dias"
          }
        }
      },
      "day-short": {
        "displayName": "dia",
        "relative": {
          "0": "hoje",
          "1": "amanhã",
          "2": "depois de amanhã",
          "-2": "anteontem",
          "-1": "ontem"
        },
        "relativeTime": {
          "future": {
            "one": "em {0} dia",
            "other": "em {0} dias"
          },
          "past": {
            "one": "há {0} dia",
            "other": "há {0} dias"
          }
        }
      },
      "hour": {
        "displayName": "hora",
        "relative": {
          "0": "esta hora"
        },
        "relativeTime": {
          "future": {
            "one": "em {0} hora",
            "other": "em {0} horas"
          },
          "past": {
            "one": "há {0} hora",
            "other": "há {0} horas"
          }
        }
      },
      "hour-short": {
        "displayName": "h",
        "relative": {
          "0": "esta hora"
        },
        "relativeTime": {
          "future": {
            "one": "em {0} h",
            "other": "em {0} h"
          },
          "past": {
            "one": "há {0} h",
            "other": "há {0} h"
          }
        }
      },
      "minute": {
        "displayName": "minuto",
        "relative": {
          "0": "este minuto"
        },
        "relativeTime": {
          "future": {
            "one": "em {0} minuto",
            "other": "em {0} minutos"
          },
          "past": {
            "one": "há {0} minuto",
            "other": "há {0} minutos"
          }
        }
      },
      "minute-short": {
        "displayName": "min.",
        "relative": {
          "0": "este minuto"
        },
        "relativeTime": {
          "future": {
            "one": "em {0} min.",
            "other": "em {0} min."
          },
          "past": {
            "one": "há {0} min.",
            "other": "há {0} min."
          }
        }
      },
      "second": {
        "displayName": "segundo",
        "relative": {
          "0": "agora"
        },
        "relativeTime": {
          "future": {
            "one": "em {0} segundo",
            "other": "em {0} segundos"
          },
          "past": {
            "one": "há {0} segundo",
            "other": "há {0} segundos"
          }
        }
      },
      "second-short": {
        "displayName": "seg.",
        "relative": {
          "0": "agora"
        },
        "relativeTime": {
          "future": {
            "one": "em {0} seg.",
            "other": "em {0} seg."
          },
          "past": {
            "one": "há {0} seg.",
            "other": "há {0} seg."
          }
        }
      }
    },
    "numbers": {
      "decimal": {
        "long": [[1000, {
          "one": ["0 mil", 1],
          "other": ["0 mil", 1]
        }], [10000, {
          "one": ["00 mil", 2],
          "other": ["00 mil", 2]
        }], [100000, {
          "one": ["000 mil", 3],
          "other": ["000 mil", 3]
        }], [1000000, {
          "one": ["0 milhão", 1],
          "other": ["0 milhões", 1]
        }], [10000000, {
          "one": ["00 milhão", 2],
          "other": ["00 milhões", 2]
        }], [100000000, {
          "one": ["000 milhão", 3],
          "other": ["000 milhões", 3]
        }], [1000000000, {
          "one": ["0 bilhão", 1],
          "other": ["0 bilhões", 1]
        }], [10000000000, {
          "one": ["00 bilhão", 2],
          "other": ["00 bilhões", 2]
        }], [100000000000, {
          "one": ["000 bilhão", 3],
          "other": ["000 bilhões", 3]
        }], [1000000000000, {
          "one": ["0 trilhão", 1],
          "other": ["0 trilhões", 1]
        }], [10000000000000, {
          "one": ["00 trilhão", 2],
          "other": ["00 trilhões", 2]
        }], [100000000000000, {
          "one": ["000 trilhão", 3],
          "other": ["000 trilhões", 3]
        }]],
        "short": [[1000, {
          "one": ["0 mil", 1],
          "other": ["0 mil", 1]
        }], [10000, {
          "one": ["00 mil", 2],
          "other": ["00 mil", 2]
        }], [100000, {
          "one": ["000 mil", 3],
          "other": ["000 mil", 3]
        }], [1000000, {
          "one": ["0 mi", 1],
          "other": ["0 mi", 1]
        }], [10000000, {
          "one": ["00 mi", 2],
          "other": ["00 mi", 2]
        }], [100000000, {
          "one": ["000 mi", 3],
          "other": ["000 mi", 3]
        }], [1000000000, {
          "one": ["0 bi", 1],
          "other": ["0 bi", 1]
        }], [10000000000, {
          "one": ["00 bi", 2],
          "other": ["00 bi", 2]
        }], [100000000000, {
          "one": ["000 bi", 3],
          "other": ["000 bi", 3]
        }], [1000000000000, {
          "one": ["0 tri", 1],
          "other": ["0 tri", 1]
        }], [10000000000000, {
          "one": ["00 tri", 2],
          "other": ["00 tri", 2]
        }], [100000000000000, {
          "one": ["000 tri", 3],
          "other": ["000 tri", 3]
        }]]
      }
    }
  }];
  _exports.default = _default;
});
define("istio/cldrs/ru", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  /*jslint eqeq: true*/
  var _default = [{
    "locale": "ru-ru",
    "parentLocale": "ru"
  }, {
    "locale": "ru",
    "pluralRuleFunction": function pluralRuleFunction(n, ord) {
      var s = String(n).split("."),
          i = s[0],
          v0 = !s[1],
          i10 = i.slice(-1),
          i100 = i.slice(-2);
      if (ord) return "other";
      return v0 && i10 == 1 && i100 != 11 ? "one" : v0 && i10 >= 2 && i10 <= 4 && (i100 < 12 || i100 > 14) ? "few" : v0 && i10 == 0 || v0 && i10 >= 5 && i10 <= 9 || v0 && i100 >= 11 && i100 <= 14 ? "many" : "other";
    },
    "fields": {
      "year": {
        "displayName": "год",
        "relative": {
          "0": "в этом году",
          "1": "в следующем году",
          "-1": "в прошлом году"
        },
        "relativeTime": {
          "future": {
            "one": "через {0} год",
            "few": "через {0} года",
            "many": "через {0} лет",
            "other": "через {0} года"
          },
          "past": {
            "one": "{0} год назад",
            "few": "{0} года назад",
            "many": "{0} лет назад",
            "other": "{0} года назад"
          }
        }
      },
      "year-short": {
        "displayName": "г.",
        "relative": {
          "0": "в этом г.",
          "1": "в след. г.",
          "-1": "в прошлом г."
        },
        "relativeTime": {
          "future": {
            "one": "через {0} г.",
            "few": "через {0} г.",
            "many": "через {0} л.",
            "other": "через {0} г."
          },
          "past": {
            "one": "{0} г. назад",
            "few": "{0} г. назад",
            "many": "{0} л. назад",
            "other": "{0} г. назад"
          }
        }
      },
      "month": {
        "displayName": "месяц",
        "relative": {
          "0": "в этом месяце",
          "1": "в следующем месяце",
          "-1": "в прошлом месяце"
        },
        "relativeTime": {
          "future": {
            "one": "через {0} месяц",
            "few": "через {0} месяца",
            "many": "через {0} месяцев",
            "other": "через {0} месяца"
          },
          "past": {
            "one": "{0} месяц назад",
            "few": "{0} месяца назад",
            "many": "{0} месяцев назад",
            "other": "{0} месяца назад"
          }
        }
      },
      "month-short": {
        "displayName": "мес.",
        "relative": {
          "0": "в этом мес.",
          "1": "в следующем мес.",
          "-1": "в прошлом мес."
        },
        "relativeTime": {
          "future": {
            "one": "через {0} мес.",
            "few": "через {0} мес.",
            "many": "через {0} мес.",
            "other": "через {0} мес."
          },
          "past": {
            "one": "{0} мес. назад",
            "few": "{0} мес. назад",
            "many": "{0} мес. назад",
            "other": "{0} мес. назад"
          }
        }
      },
      "day": {
        "displayName": "день",
        "relative": {
          "0": "сегодня",
          "1": "завтра",
          "2": "послезавтра",
          "-2": "позавчера",
          "-1": "вчера"
        },
        "relativeTime": {
          "future": {
            "one": "через {0} день",
            "few": "через {0} дня",
            "many": "через {0} дней",
            "other": "через {0} дня"
          },
          "past": {
            "one": "{0} день назад",
            "few": "{0} дня назад",
            "many": "{0} дней назад",
            "other": "{0} дня назад"
          }
        }
      },
      "day-short": {
        "displayName": "дн.",
        "relative": {
          "0": "сегодня",
          "1": "завтра",
          "2": "послезавтра",
          "-2": "позавчера",
          "-1": "вчера"
        },
        "relativeTime": {
          "future": {
            "one": "через {0} дн.",
            "few": "через {0} дн.",
            "many": "через {0} дн.",
            "other": "через {0} дн."
          },
          "past": {
            "one": "{0} дн. назад",
            "few": "{0} дн. назад",
            "many": "{0} дн. назад",
            "other": "{0} дн. назад"
          }
        }
      },
      "hour": {
        "displayName": "час",
        "relative": {
          "0": "в этот час"
        },
        "relativeTime": {
          "future": {
            "one": "через {0} час",
            "few": "через {0} часа",
            "many": "через {0} часов",
            "other": "через {0} часа"
          },
          "past": {
            "one": "{0} час назад",
            "few": "{0} часа назад",
            "many": "{0} часов назад",
            "other": "{0} часа назад"
          }
        }
      },
      "hour-short": {
        "displayName": "ч",
        "relative": {
          "0": "в этот час"
        },
        "relativeTime": {
          "future": {
            "one": "через {0} ч.",
            "few": "через {0} ч.",
            "many": "через {0} ч.",
            "other": "через {0} ч."
          },
          "past": {
            "one": "{0} ч. назад",
            "few": "{0} ч. назад",
            "many": "{0} ч. назад",
            "other": "{0} ч. назад"
          }
        }
      },
      "minute": {
        "displayName": "минута",
        "relative": {
          "0": "в эту минуту"
        },
        "relativeTime": {
          "future": {
            "one": "через {0} минуту",
            "few": "через {0} минуты",
            "many": "через {0} минут",
            "other": "через {0} минуты"
          },
          "past": {
            "one": "{0} минуту назад",
            "few": "{0} минуты назад",
            "many": "{0} минут назад",
            "other": "{0} минуты назад"
          }
        }
      },
      "minute-short": {
        "displayName": "мин.",
        "relative": {
          "0": "в эту минуту"
        },
        "relativeTime": {
          "future": {
            "one": "через {0} мин.",
            "few": "через {0} мин.",
            "many": "через {0} мин.",
            "other": "через {0} мин."
          },
          "past": {
            "one": "{0} мин. назад",
            "few": "{0} мин. назад",
            "many": "{0} мин. назад",
            "other": "{0} мин. назад"
          }
        }
      },
      "second": {
        "displayName": "секунда",
        "relative": {
          "0": "сейчас"
        },
        "relativeTime": {
          "future": {
            "one": "через {0} секунду",
            "few": "через {0} секунды",
            "many": "через {0} секунд",
            "other": "через {0} секунды"
          },
          "past": {
            "one": "{0} секунду назад",
            "few": "{0} секунды назад",
            "many": "{0} секунд назад",
            "other": "{0} секунды назад"
          }
        }
      },
      "second-short": {
        "displayName": "сек.",
        "relative": {
          "0": "сейчас"
        },
        "relativeTime": {
          "future": {
            "one": "через {0} сек.",
            "few": "через {0} сек.",
            "many": "через {0} сек.",
            "other": "через {0} сек."
          },
          "past": {
            "one": "{0} сек. назад",
            "few": "{0} сек. назад",
            "many": "{0} сек. назад",
            "other": "{0} сек. назад"
          }
        }
      }
    },
    "numbers": {
      "decimal": {
        "long": [[1000, {
          "one": ["0 тысяча", 1],
          "few": ["0 тысячи", 1],
          "many": ["0 тысяч", 1],
          "other": ["0 тысячи", 1]
        }], [10000, {
          "one": ["00 тысяча", 2],
          "few": ["00 тысячи", 2],
          "many": ["00 тысяч", 2],
          "other": ["00 тысячи", 2]
        }], [100000, {
          "one": ["000 тысяча", 3],
          "few": ["000 тысячи", 3],
          "many": ["000 тысяч", 3],
          "other": ["000 тысячи", 3]
        }], [1000000, {
          "one": ["0 миллион", 1],
          "few": ["0 миллиона", 1],
          "many": ["0 миллионов", 1],
          "other": ["0 миллиона", 1]
        }], [10000000, {
          "one": ["00 миллион", 2],
          "few": ["00 миллиона", 2],
          "many": ["00 миллионов", 2],
          "other": ["00 миллиона", 2]
        }], [100000000, {
          "one": ["000 миллион", 3],
          "few": ["000 миллиона", 3],
          "many": ["000 миллионов", 3],
          "other": ["000 миллиона", 3]
        }], [1000000000, {
          "one": ["0 миллиард", 1],
          "few": ["0 миллиарда", 1],
          "many": ["0 миллиардов", 1],
          "other": ["0 миллиарда", 1]
        }], [10000000000, {
          "one": ["00 миллиард", 2],
          "few": ["00 миллиарда", 2],
          "many": ["00 миллиардов", 2],
          "other": ["00 миллиарда", 2]
        }], [100000000000, {
          "one": ["000 миллиард", 3],
          "few": ["000 миллиарда", 3],
          "many": ["000 миллиардов", 3],
          "other": ["000 миллиарда", 3]
        }], [1000000000000, {
          "one": ["0 триллион", 1],
          "few": ["0 триллиона", 1],
          "many": ["0 триллионов", 1],
          "other": ["0 триллиона", 1]
        }], [10000000000000, {
          "one": ["00 триллион", 2],
          "few": ["00 триллиона", 2],
          "many": ["00 триллионов", 2],
          "other": ["00 триллиона", 2]
        }], [100000000000000, {
          "one": ["000 триллион", 3],
          "few": ["000 триллиона", 3],
          "many": ["000 триллионов", 3],
          "other": ["000 триллиона", 3]
        }]],
        "short": [[1000, {
          "one": ["0 тыс'.'", 1],
          "few": ["0 тыс'.'", 1],
          "many": ["0 тыс'.'", 1],
          "other": ["0 тыс'.'", 1]
        }], [10000, {
          "one": ["00 тыс'.'", 2],
          "few": ["00 тыс'.'", 2],
          "many": ["00 тыс'.'", 2],
          "other": ["00 тыс'.'", 2]
        }], [100000, {
          "one": ["000 тыс'.'", 3],
          "few": ["000 тыс'.'", 3],
          "many": ["000 тыс'.'", 3],
          "other": ["000 тыс'.'", 3]
        }], [1000000, {
          "one": ["0 млн", 1],
          "few": ["0 млн", 1],
          "many": ["0 млн", 1],
          "other": ["0 млн", 1]
        }], [10000000, {
          "one": ["00 млн", 2],
          "few": ["00 млн", 2],
          "many": ["00 млн", 2],
          "other": ["00 млн", 2]
        }], [100000000, {
          "one": ["000 млн", 3],
          "few": ["000 млн", 3],
          "many": ["000 млн", 3],
          "other": ["000 млн", 3]
        }], [1000000000, {
          "one": ["0 млрд", 1],
          "few": ["0 млрд", 1],
          "many": ["0 млрд", 1],
          "other": ["0 млрд", 1]
        }], [10000000000, {
          "one": ["00 млрд", 2],
          "few": ["00 млрд", 2],
          "many": ["00 млрд", 2],
          "other": ["00 млрд", 2]
        }], [100000000000, {
          "one": ["000 млрд", 3],
          "few": ["000 млрд", 3],
          "many": ["000 млрд", 3],
          "other": ["000 млрд", 3]
        }], [1000000000000, {
          "one": ["0 трлн", 1],
          "few": ["0 трлн", 1],
          "many": ["0 трлн", 1],
          "other": ["0 трлн", 1]
        }], [10000000000000, {
          "one": ["00 трлн", 2],
          "few": ["00 трлн", 2],
          "many": ["00 трлн", 2],
          "other": ["00 трлн", 2]
        }], [100000000000000, {
          "one": ["000 трлн", 3],
          "few": ["000 трлн", 3],
          "many": ["000 трлн", 3],
          "other": ["000 трлн", 3]
        }]]
      }
    }
  }];
  _exports.default = _default;
});
define("istio/cldrs/sh", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  /*jslint eqeq: true*/
  var _default = [{
    "locale": "sh-hr",
    "parentLocale": "sh"
  }, {
    "locale": "sh",
    "pluralRuleFunction": function pluralRuleFunction(n, ord) {
      var s = String(n).split("."),
          i = s[0],
          f = s[1] || "",
          v0 = !s[1],
          i10 = i.slice(-1),
          i100 = i.slice(-2),
          f10 = f.slice(-1),
          f100 = f.slice(-2);
      if (ord) return "other";
      return v0 && i10 == 1 && i100 != 11 || f10 == 1 && f100 != 11 ? "one" : v0 && i10 >= 2 && i10 <= 4 && (i100 < 12 || i100 > 14) || f10 >= 2 && f10 <= 4 && (f100 < 12 || f100 > 14) ? "few" : "other";
    },
    "fields": {
      "year": {
        "displayName": "Year",
        "relative": {
          "0": "this year",
          "1": "next year",
          "-1": "last year"
        },
        "relativeTime": {
          "future": {
            "other": "+{0} y"
          },
          "past": {
            "other": "-{0} y"
          }
        }
      },
      "year-short": {
        "displayName": "Year",
        "relative": {
          "0": "this year",
          "1": "next year",
          "-1": "last year"
        },
        "relativeTime": {
          "future": {
            "other": "+{0} y"
          },
          "past": {
            "other": "-{0} y"
          }
        }
      },
      "month": {
        "displayName": "Month",
        "relative": {
          "0": "this month",
          "1": "next month",
          "-1": "last month"
        },
        "relativeTime": {
          "future": {
            "other": "+{0} m"
          },
          "past": {
            "other": "-{0} m"
          }
        }
      },
      "month-short": {
        "displayName": "Month",
        "relative": {
          "0": "this month",
          "1": "next month",
          "-1": "last month"
        },
        "relativeTime": {
          "future": {
            "other": "+{0} m"
          },
          "past": {
            "other": "-{0} m"
          }
        }
      },
      "day": {
        "displayName": "Day",
        "relative": {
          "0": "today",
          "1": "tomorrow",
          "-1": "yesterday"
        },
        "relativeTime": {
          "future": {
            "other": "+{0} d"
          },
          "past": {
            "other": "-{0} d"
          }
        }
      },
      "day-short": {
        "displayName": "Day",
        "relative": {
          "0": "today",
          "1": "tomorrow",
          "-1": "yesterday"
        },
        "relativeTime": {
          "future": {
            "other": "+{0} d"
          },
          "past": {
            "other": "-{0} d"
          }
        }
      },
      "hour": {
        "displayName": "Hour",
        "relative": {
          "0": "this hour"
        },
        "relativeTime": {
          "future": {
            "other": "+{0} h"
          },
          "past": {
            "other": "-{0} h"
          }
        }
      },
      "hour-short": {
        "displayName": "Hour",
        "relative": {
          "0": "this hour"
        },
        "relativeTime": {
          "future": {
            "other": "+{0} h"
          },
          "past": {
            "other": "-{0} h"
          }
        }
      },
      "minute": {
        "displayName": "Minute",
        "relative": {
          "0": "this minute"
        },
        "relativeTime": {
          "future": {
            "other": "+{0} min"
          },
          "past": {
            "other": "-{0} min"
          }
        }
      },
      "minute-short": {
        "displayName": "Minute",
        "relative": {
          "0": "this minute"
        },
        "relativeTime": {
          "future": {
            "other": "+{0} min"
          },
          "past": {
            "other": "-{0} min"
          }
        }
      },
      "second": {
        "displayName": "Second",
        "relative": {
          "0": "now"
        },
        "relativeTime": {
          "future": {
            "other": "+{0} s"
          },
          "past": {
            "other": "-{0} s"
          }
        }
      },
      "second-short": {
        "displayName": "Second",
        "relative": {
          "0": "now"
        },
        "relativeTime": {
          "future": {
            "other": "+{0} s"
          },
          "past": {
            "other": "-{0} s"
          }
        }
      }
    },
    "numbers": {
      "decimal": {
        "long": [[1000, {
          "other": ["0K", 1]
        }], [10000, {
          "other": ["00K", 2]
        }], [100000, {
          "other": ["000K", 3]
        }], [1000000, {
          "other": ["0M", 1]
        }], [10000000, {
          "other": ["00M", 2]
        }], [100000000, {
          "other": ["000M", 3]
        }], [1000000000, {
          "other": ["0G", 1]
        }], [10000000000, {
          "other": ["00G", 2]
        }], [100000000000, {
          "other": ["000G", 3]
        }], [1000000000000, {
          "other": ["0T", 1]
        }], [10000000000000, {
          "other": ["00T", 2]
        }], [100000000000000, {
          "other": ["000T", 3]
        }]],
        "short": [[1000, {
          "other": ["0K", 1]
        }], [10000, {
          "other": ["00K", 2]
        }], [100000, {
          "other": ["000K", 3]
        }], [1000000, {
          "other": ["0M", 1]
        }], [10000000, {
          "other": ["00M", 2]
        }], [100000000, {
          "other": ["000M", 3]
        }], [1000000000, {
          "other": ["0G", 1]
        }], [10000000000, {
          "other": ["00G", 2]
        }], [100000000000, {
          "other": ["000G", 3]
        }], [1000000000000, {
          "other": ["0T", 1]
        }], [10000000000000, {
          "other": ["00T", 2]
        }], [100000000000000, {
          "other": ["000T", 3]
        }]]
      }
    }
  }];
  _exports.default = _default;
});
define("istio/cldrs/sv", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  /*jslint eqeq: true*/
  var _default = [{
    "locale": "sv-se",
    "parentLocale": "sv"
  }, {
    "locale": "sv",
    "pluralRuleFunction": function pluralRuleFunction(n, ord) {
      var s = String(n).split("."),
          v0 = !s[1],
          t0 = Number(s[0]) == n,
          n10 = t0 && s[0].slice(-1),
          n100 = t0 && s[0].slice(-2);
      if (ord) return (n10 == 1 || n10 == 2) && n100 != 11 && n100 != 12 ? "one" : "other";
      return n == 1 && v0 ? "one" : "other";
    },
    "fields": {
      "year": {
        "displayName": "år",
        "relative": {
          "0": "i år",
          "1": "nästa år",
          "-1": "i fjol"
        },
        "relativeTime": {
          "future": {
            "one": "om {0} år",
            "other": "om {0} år"
          },
          "past": {
            "one": "för {0} år sedan",
            "other": "för {0} år sedan"
          }
        }
      },
      "year-short": {
        "displayName": "år",
        "relative": {
          "0": "i år",
          "1": "nästa år",
          "-1": "i fjol"
        },
        "relativeTime": {
          "future": {
            "one": "om {0} år",
            "other": "om {0} år"
          },
          "past": {
            "one": "för {0} år sen",
            "other": "för {0} år sen"
          }
        }
      },
      "month": {
        "displayName": "månad",
        "relative": {
          "0": "denna månad",
          "1": "nästa månad",
          "-1": "förra månaden"
        },
        "relativeTime": {
          "future": {
            "one": "om {0} månad",
            "other": "om {0} månader"
          },
          "past": {
            "one": "för {0} månad sedan",
            "other": "för {0} månader sedan"
          }
        }
      },
      "month-short": {
        "displayName": "m",
        "relative": {
          "0": "denna mån.",
          "1": "nästa mån.",
          "-1": "förra mån."
        },
        "relativeTime": {
          "future": {
            "one": "om {0} mån.",
            "other": "om {0} mån."
          },
          "past": {
            "one": "för {0} mån. sen",
            "other": "för {0} mån. sen"
          }
        }
      },
      "day": {
        "displayName": "dag",
        "relative": {
          "0": "i dag",
          "1": "i morgon",
          "2": "i övermorgon",
          "-2": "i förrgår",
          "-1": "i går"
        },
        "relativeTime": {
          "future": {
            "one": "om {0} dag",
            "other": "om {0} dagar"
          },
          "past": {
            "one": "för {0} dag sedan",
            "other": "för {0} dagar sedan"
          }
        }
      },
      "day-short": {
        "displayName": "dag",
        "relative": {
          "0": "i dag",
          "1": "i morgon",
          "2": "i övermorgon",
          "-2": "i förrgår",
          "-1": "i går"
        },
        "relativeTime": {
          "future": {
            "one": "om {0} d",
            "other": "om {0} d"
          },
          "past": {
            "one": "för {0} d sedan",
            "other": "för {0} d sedan"
          }
        }
      },
      "hour": {
        "displayName": "timme",
        "relative": {
          "0": "denna timme"
        },
        "relativeTime": {
          "future": {
            "one": "om {0} timme",
            "other": "om {0} timmar"
          },
          "past": {
            "one": "för {0} timme sedan",
            "other": "för {0} timmar sedan"
          }
        }
      },
      "hour-short": {
        "displayName": "tim",
        "relative": {
          "0": "denna timme"
        },
        "relativeTime": {
          "future": {
            "one": "om {0} tim",
            "other": "om {0} tim"
          },
          "past": {
            "one": "för {0} tim sedan",
            "other": "för {0} tim sedan"
          }
        }
      },
      "minute": {
        "displayName": "minut",
        "relative": {
          "0": "denna minut"
        },
        "relativeTime": {
          "future": {
            "one": "om {0} minut",
            "other": "om {0} minuter"
          },
          "past": {
            "one": "för {0} minut sedan",
            "other": "för {0} minuter sedan"
          }
        }
      },
      "minute-short": {
        "displayName": "min",
        "relative": {
          "0": "denna minut"
        },
        "relativeTime": {
          "future": {
            "one": "om {0} min",
            "other": "om {0} min"
          },
          "past": {
            "one": "för {0} min sen",
            "other": "för {0} min sen"
          }
        }
      },
      "second": {
        "displayName": "sekund",
        "relative": {
          "0": "nu"
        },
        "relativeTime": {
          "future": {
            "one": "om {0} sekund",
            "other": "om {0} sekunder"
          },
          "past": {
            "one": "för {0} sekund sedan",
            "other": "för {0} sekunder sedan"
          }
        }
      },
      "second-short": {
        "displayName": "sek",
        "relative": {
          "0": "nu"
        },
        "relativeTime": {
          "future": {
            "one": "om {0} sek",
            "other": "om {0} sek"
          },
          "past": {
            "one": "för {0} s sen",
            "other": "för {0} s sen"
          }
        }
      }
    },
    "numbers": {
      "decimal": {
        "long": [[1000, {
          "one": ["0 tusen", 1],
          "other": ["0 tusen", 1]
        }], [10000, {
          "one": ["00 tusen", 2],
          "other": ["00 tusen", 2]
        }], [100000, {
          "one": ["000 tusen", 3],
          "other": ["000 tusen", 3]
        }], [1000000, {
          "one": ["0 miljon", 1],
          "other": ["0 miljoner", 1]
        }], [10000000, {
          "one": ["00 miljon", 2],
          "other": ["00 miljoner", 2]
        }], [100000000, {
          "one": ["000 miljoner", 3],
          "other": ["000 miljoner", 3]
        }], [1000000000, {
          "one": ["0 miljard", 1],
          "other": ["0 miljarder", 1]
        }], [10000000000, {
          "one": ["00 miljarder", 2],
          "other": ["00 miljarder", 2]
        }], [100000000000, {
          "one": ["000 miljarder", 3],
          "other": ["000 miljarder", 3]
        }], [1000000000000, {
          "one": ["0 biljon", 1],
          "other": ["0 biljoner", 1]
        }], [10000000000000, {
          "one": ["00 biljoner", 2],
          "other": ["00 biljoner", 2]
        }], [100000000000000, {
          "one": ["000 biljoner", 3],
          "other": ["000 biljoner", 3]
        }]],
        "short": [[1000, {
          "one": ["0 tn", 1],
          "other": ["0 tn", 1]
        }], [10000, {
          "one": ["00 tn", 2],
          "other": ["00 tn", 2]
        }], [100000, {
          "one": ["000 tn", 3],
          "other": ["000 tn", 3]
        }], [1000000, {
          "one": ["0 mn", 1],
          "other": ["0 mn", 1]
        }], [10000000, {
          "one": ["00 mn", 2],
          "other": ["00 mn", 2]
        }], [100000000, {
          "one": ["000 mn", 3],
          "other": ["000 mn", 3]
        }], [1000000000, {
          "one": ["0 md", 1],
          "other": ["0 md", 1]
        }], [10000000000, {
          "one": ["00 md", 2],
          "other": ["00 md", 2]
        }], [100000000000, {
          "one": ["000 md", 3],
          "other": ["000 md", 3]
        }], [1000000000000, {
          "one": ["0 bn", 1],
          "other": ["0 bn", 1]
        }], [10000000000000, {
          "one": ["00 bn", 2],
          "other": ["00 bn", 2]
        }], [100000000000000, {
          "one": ["000 bn", 3],
          "other": ["000 bn", 3]
        }]]
      }
    }
  }];
  _exports.default = _default;
});
define("istio/cldrs/tr", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  /*jslint eqeq: true*/
  var _default = [{
    "locale": "tr-tr",
    "parentLocale": "tr"
  }, {
    "locale": "tr",
    "pluralRuleFunction": function pluralRuleFunction(n, ord) {
      if (ord) return "other";
      return n == 1 ? "one" : "other";
    },
    "fields": {
      "year": {
        "displayName": "yıl",
        "relative": {
          "0": "bu yıl",
          "1": "gelecek yıl",
          "-1": "geçen yıl"
        },
        "relativeTime": {
          "future": {
            "one": "{0} yıl sonra",
            "other": "{0} yıl sonra"
          },
          "past": {
            "one": "{0} yıl önce",
            "other": "{0} yıl önce"
          }
        }
      },
      "year-short": {
        "displayName": "yıl",
        "relative": {
          "0": "bu yıl",
          "1": "gelecek yıl",
          "-1": "geçen yıl"
        },
        "relativeTime": {
          "future": {
            "one": "{0} yıl sonra",
            "other": "{0} yıl sonra"
          },
          "past": {
            "one": "{0} yıl önce",
            "other": "{0} yıl önce"
          }
        }
      },
      "month": {
        "displayName": "ay",
        "relative": {
          "0": "bu ay",
          "1": "gelecek ay",
          "-1": "geçen ay"
        },
        "relativeTime": {
          "future": {
            "one": "{0} ay sonra",
            "other": "{0} ay sonra"
          },
          "past": {
            "one": "{0} ay önce",
            "other": "{0} ay önce"
          }
        }
      },
      "month-short": {
        "displayName": "ay",
        "relative": {
          "0": "bu ay",
          "1": "gelecek ay",
          "-1": "geçen ay"
        },
        "relativeTime": {
          "future": {
            "one": "{0} ay sonra",
            "other": "{0} ay sonra"
          },
          "past": {
            "one": "{0} ay önce",
            "other": "{0} ay önce"
          }
        }
      },
      "day": {
        "displayName": "gün",
        "relative": {
          "0": "bugün",
          "1": "yarın",
          "2": "öbür gün",
          "-2": "evvelsi gün",
          "-1": "dün"
        },
        "relativeTime": {
          "future": {
            "one": "{0} gün sonra",
            "other": "{0} gün sonra"
          },
          "past": {
            "one": "{0} gün önce",
            "other": "{0} gün önce"
          }
        }
      },
      "day-short": {
        "displayName": "gün",
        "relative": {
          "0": "bugün",
          "1": "yarın",
          "2": "öbür gün",
          "-2": "evvelsi gün",
          "-1": "dün"
        },
        "relativeTime": {
          "future": {
            "one": "{0} gün sonra",
            "other": "{0} gün sonra"
          },
          "past": {
            "one": "{0} gün önce",
            "other": "{0} gün önce"
          }
        }
      },
      "hour": {
        "displayName": "saat",
        "relative": {
          "0": "bu saat"
        },
        "relativeTime": {
          "future": {
            "one": "{0} saat sonra",
            "other": "{0} saat sonra"
          },
          "past": {
            "one": "{0} saat önce",
            "other": "{0} saat önce"
          }
        }
      },
      "hour-short": {
        "displayName": "sa.",
        "relative": {
          "0": "bu saat"
        },
        "relativeTime": {
          "future": {
            "one": "{0} sa. sonra",
            "other": "{0} sa. sonra"
          },
          "past": {
            "one": "{0} sa. önce",
            "other": "{0} sa. önce"
          }
        }
      },
      "minute": {
        "displayName": "dakika",
        "relative": {
          "0": "bu dakika"
        },
        "relativeTime": {
          "future": {
            "one": "{0} dakika sonra",
            "other": "{0} dakika sonra"
          },
          "past": {
            "one": "{0} dakika önce",
            "other": "{0} dakika önce"
          }
        }
      },
      "minute-short": {
        "displayName": "dk.",
        "relative": {
          "0": "bu dakika"
        },
        "relativeTime": {
          "future": {
            "one": "{0} dk. sonra",
            "other": "{0} dk. sonra"
          },
          "past": {
            "one": "{0} dk. önce",
            "other": "{0} dk. önce"
          }
        }
      },
      "second": {
        "displayName": "saniye",
        "relative": {
          "0": "şimdi"
        },
        "relativeTime": {
          "future": {
            "one": "{0} saniye sonra",
            "other": "{0} saniye sonra"
          },
          "past": {
            "one": "{0} saniye önce",
            "other": "{0} saniye önce"
          }
        }
      },
      "second-short": {
        "displayName": "sn.",
        "relative": {
          "0": "şimdi"
        },
        "relativeTime": {
          "future": {
            "one": "{0} sn. sonra",
            "other": "{0} sn. sonra"
          },
          "past": {
            "one": "{0} sn. önce",
            "other": "{0} sn. önce"
          }
        }
      }
    },
    "numbers": {
      "decimal": {
        "long": [[1000, {
          "one": ["0 bin", 1],
          "other": ["0 bin", 1]
        }], [10000, {
          "one": ["00 bin", 2],
          "other": ["00 bin", 2]
        }], [100000, {
          "one": ["000 bin", 3],
          "other": ["000 bin", 3]
        }], [1000000, {
          "one": ["0 milyon", 1],
          "other": ["0 milyon", 1]
        }], [10000000, {
          "one": ["00 milyon", 2],
          "other": ["00 milyon", 2]
        }], [100000000, {
          "one": ["000 milyon", 3],
          "other": ["000 milyon", 3]
        }], [1000000000, {
          "one": ["0 milyar", 1],
          "other": ["0 milyar", 1]
        }], [10000000000, {
          "one": ["00 milyar", 2],
          "other": ["00 milyar", 2]
        }], [100000000000, {
          "one": ["000 milyar", 3],
          "other": ["000 milyar", 3]
        }], [1000000000000, {
          "one": ["0 trilyon", 1],
          "other": ["0 trilyon", 1]
        }], [10000000000000, {
          "one": ["00 trilyon", 2],
          "other": ["00 trilyon", 2]
        }], [100000000000000, {
          "one": ["000 trilyon", 3],
          "other": ["000 trilyon", 3]
        }]],
        "short": [[1000, {
          "one": ["0 B", 1],
          "other": ["0 B", 1]
        }], [10000, {
          "one": ["00 B", 2],
          "other": ["00 B", 2]
        }], [100000, {
          "one": ["000 B", 3],
          "other": ["000 B", 3]
        }], [1000000, {
          "one": ["0 Mn", 1],
          "other": ["0 Mn", 1]
        }], [10000000, {
          "one": ["00 Mn", 2],
          "other": ["00 Mn", 2]
        }], [100000000, {
          "one": ["000 Mn", 3],
          "other": ["000 Mn", 3]
        }], [1000000000, {
          "one": ["0 Mr", 1],
          "other": ["0 Mr", 1]
        }], [10000000000, {
          "one": ["00 Mr", 2],
          "other": ["00 Mr", 2]
        }], [100000000000, {
          "one": ["000 Mr", 3],
          "other": ["000 Mr", 3]
        }], [1000000000000, {
          "one": ["0 Tn", 1],
          "other": ["0 Tn", 1]
        }], [10000000000000, {
          "one": ["00 Tn", 2],
          "other": ["00 Tn", 2]
        }], [100000000000000, {
          "one": ["000 Tn", 3],
          "other": ["000 Tn", 3]
        }]]
      }
    }
  }];
  _exports.default = _default;
});
define("istio/cldrs/uk", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  /*jslint eqeq: true*/
  var _default = [{
    "locale": "uk-ua",
    "parentLocale": "uk"
  }, {
    "locale": "uk",
    "pluralRuleFunction": function pluralRuleFunction(n, ord) {
      var s = String(n).split("."),
          i = s[0],
          v0 = !s[1],
          t0 = Number(s[0]) == n,
          n10 = t0 && s[0].slice(-1),
          n100 = t0 && s[0].slice(-2),
          i10 = i.slice(-1),
          i100 = i.slice(-2);
      if (ord) return n10 == 3 && n100 != 13 ? "few" : "other";
      return v0 && i10 == 1 && i100 != 11 ? "one" : v0 && i10 >= 2 && i10 <= 4 && (i100 < 12 || i100 > 14) ? "few" : v0 && i10 == 0 || v0 && i10 >= 5 && i10 <= 9 || v0 && i100 >= 11 && i100 <= 14 ? "many" : "other";
    },
    "fields": {
      "year": {
        "displayName": "рік",
        "relative": {
          "0": "цього року",
          "1": "наступного року",
          "-1": "торік"
        },
        "relativeTime": {
          "future": {
            "one": "через {0} рік",
            "few": "через {0} роки",
            "many": "через {0} років",
            "other": "через {0} року"
          },
          "past": {
            "one": "{0} рік тому",
            "few": "{0} роки тому",
            "many": "{0} років тому",
            "other": "{0} року тому"
          }
        }
      },
      "year-short": {
        "displayName": "р.",
        "relative": {
          "0": "цього року",
          "1": "наступного року",
          "-1": "торік"
        },
        "relativeTime": {
          "future": {
            "one": "через {0} р.",
            "few": "через {0} р.",
            "many": "через {0} р.",
            "other": "через {0} р."
          },
          "past": {
            "one": "{0} р. тому",
            "few": "{0} р. тому",
            "many": "{0} р. тому",
            "other": "{0} р. тому"
          }
        }
      },
      "month": {
        "displayName": "місяць",
        "relative": {
          "0": "цього місяця",
          "1": "наступного місяця",
          "-1": "минулого місяця"
        },
        "relativeTime": {
          "future": {
            "one": "через {0} місяць",
            "few": "через {0} місяці",
            "many": "через {0} місяців",
            "other": "через {0} місяця"
          },
          "past": {
            "one": "{0} місяць тому",
            "few": "{0} місяці тому",
            "many": "{0} місяців тому",
            "other": "{0} місяця тому"
          }
        }
      },
      "month-short": {
        "displayName": "міс.",
        "relative": {
          "0": "цього місяця",
          "1": "наступного місяця",
          "-1": "минулого місяця"
        },
        "relativeTime": {
          "future": {
            "one": "через {0} міс.",
            "few": "через {0} міс.",
            "many": "через {0} міс.",
            "other": "через {0} міс."
          },
          "past": {
            "one": "{0} міс. тому",
            "few": "{0} міс. тому",
            "many": "{0} міс. тому",
            "other": "{0} міс. тому"
          }
        }
      },
      "day": {
        "displayName": "день",
        "relative": {
          "0": "сьогодні",
          "1": "завтра",
          "2": "післязавтра",
          "-2": "позавчора",
          "-1": "учора"
        },
        "relativeTime": {
          "future": {
            "one": "через {0} день",
            "few": "через {0} дні",
            "many": "через {0} днів",
            "other": "через {0} дня"
          },
          "past": {
            "one": "{0} день тому",
            "few": "{0} дні тому",
            "many": "{0} днів тому",
            "other": "{0} дня тому"
          }
        }
      },
      "day-short": {
        "displayName": "д.",
        "relative": {
          "0": "сьогодні",
          "1": "завтра",
          "2": "післязавтра",
          "-2": "позавчора",
          "-1": "учора"
        },
        "relativeTime": {
          "future": {
            "one": "через {0} дн.",
            "few": "через {0} дн.",
            "many": "через {0} дн.",
            "other": "через {0} дн."
          },
          "past": {
            "one": "{0} дн. тому",
            "few": "{0} дн. тому",
            "many": "{0} дн. тому",
            "other": "{0} дн. тому"
          }
        }
      },
      "hour": {
        "displayName": "година",
        "relative": {
          "0": "цієї години"
        },
        "relativeTime": {
          "future": {
            "one": "через {0} годину",
            "few": "через {0} години",
            "many": "через {0} годин",
            "other": "через {0} години"
          },
          "past": {
            "one": "{0} годину тому",
            "few": "{0} години тому",
            "many": "{0} годин тому",
            "other": "{0} години тому"
          }
        }
      },
      "hour-short": {
        "displayName": "год.",
        "relative": {
          "0": "цієї години"
        },
        "relativeTime": {
          "future": {
            "one": "через {0} год",
            "few": "через {0} год",
            "many": "через {0} год",
            "other": "через {0} год"
          },
          "past": {
            "one": "{0} год тому",
            "few": "{0} год тому",
            "many": "{0} год тому",
            "other": "{0} год тому"
          }
        }
      },
      "minute": {
        "displayName": "хвилина",
        "relative": {
          "0": "цієї хвилини"
        },
        "relativeTime": {
          "future": {
            "one": "через {0} хвилину",
            "few": "через {0} хвилини",
            "many": "через {0} хвилин",
            "other": "через {0} хвилини"
          },
          "past": {
            "one": "{0} хвилину тому",
            "few": "{0} хвилини тому",
            "many": "{0} хвилин тому",
            "other": "{0} хвилини тому"
          }
        }
      },
      "minute-short": {
        "displayName": "хв.",
        "relative": {
          "0": "цієї хвилини"
        },
        "relativeTime": {
          "future": {
            "one": "через {0} хв",
            "few": "через {0} хв",
            "many": "через {0} хв",
            "other": "через {0} хв"
          },
          "past": {
            "one": "{0} хв тому",
            "few": "{0} хв тому",
            "many": "{0} хв тому",
            "other": "{0} хв тому"
          }
        }
      },
      "second": {
        "displayName": "секунда",
        "relative": {
          "0": "зараз"
        },
        "relativeTime": {
          "future": {
            "one": "через {0} секунду",
            "few": "через {0} секунди",
            "many": "через {0} секунд",
            "other": "через {0} секунди"
          },
          "past": {
            "one": "{0} секунду тому",
            "few": "{0} секунди тому",
            "many": "{0} секунд тому",
            "other": "{0} секунди тому"
          }
        }
      },
      "second-short": {
        "displayName": "с",
        "relative": {
          "0": "зараз"
        },
        "relativeTime": {
          "future": {
            "one": "через {0} с",
            "few": "через {0} с",
            "many": "через {0} с",
            "other": "через {0} с"
          },
          "past": {
            "one": "{0} с тому",
            "few": "{0} с тому",
            "many": "{0} с тому",
            "other": "{0} с тому"
          }
        }
      }
    },
    "numbers": {
      "decimal": {
        "long": [[1000, {
          "one": ["0 тисяча", 1],
          "few": ["0 тисячі", 1],
          "many": ["0 тисяч", 1],
          "other": ["0 тисячі", 1]
        }], [10000, {
          "one": ["00 тисяча", 2],
          "few": ["00 тисячі", 2],
          "many": ["00 тисяч", 2],
          "other": ["00 тисячі", 2]
        }], [100000, {
          "one": ["000 тисяча", 3],
          "few": ["000 тисячі", 3],
          "many": ["000 тисяч", 3],
          "other": ["000 тисячі", 3]
        }], [1000000, {
          "one": ["0 мільйон", 1],
          "few": ["0 мільйони", 1],
          "many": ["0 мільйонів", 1],
          "other": ["0 мільйона", 1]
        }], [10000000, {
          "one": ["00 мільйон", 2],
          "few": ["00 мільйони", 2],
          "many": ["00 мільйонів", 2],
          "other": ["00 мільйона", 2]
        }], [100000000, {
          "one": ["000 мільйон", 3],
          "few": ["000 мільйони", 3],
          "many": ["000 мільйонів", 3],
          "other": ["000 мільйона", 3]
        }], [1000000000, {
          "one": ["0 мільярд", 1],
          "few": ["0 мільярди", 1],
          "many": ["0 мільярдів", 1],
          "other": ["0 мільярда", 1]
        }], [10000000000, {
          "one": ["00 мільярд", 2],
          "few": ["00 мільярди", 2],
          "many": ["00 мільярдів", 2],
          "other": ["00 мільярда", 2]
        }], [100000000000, {
          "one": ["000 мільярд", 3],
          "few": ["000 мільярди", 3],
          "many": ["000 мільярдів", 3],
          "other": ["000 мільярда", 3]
        }], [1000000000000, {
          "one": ["0 трильйон", 1],
          "few": ["0 трильйони", 1],
          "many": ["0 трильйонів", 1],
          "other": ["0 трильйона", 1]
        }], [10000000000000, {
          "one": ["00 трильйон", 2],
          "few": ["00 трильйони", 2],
          "many": ["00 трильйонів", 2],
          "other": ["00 трильйона", 2]
        }], [100000000000000, {
          "one": ["000 трильйон", 3],
          "few": ["000 трильйони", 3],
          "many": ["000 трильйонів", 3],
          "other": ["000 трильйона", 3]
        }]],
        "short": [[1000, {
          "one": ["0 тис'.'", 1],
          "few": ["0 тис'.'", 1],
          "many": ["0 тис'.'", 1],
          "other": ["0 тис'.'", 1]
        }], [10000, {
          "one": ["00 тис'.'", 2],
          "few": ["00 тис'.'", 2],
          "many": ["00 тис'.'", 2],
          "other": ["00 тис'.'", 2]
        }], [100000, {
          "one": ["000 тис'.'", 3],
          "few": ["000 тис'.'", 3],
          "many": ["000 тис'.'", 3],
          "other": ["000 тис'.'", 3]
        }], [1000000, {
          "one": ["0 млн", 1],
          "few": ["0 млн", 1],
          "many": ["0 млн", 1],
          "other": ["0 млн", 1]
        }], [10000000, {
          "one": ["00 млн", 2],
          "few": ["00 млн", 2],
          "many": ["00 млн", 2],
          "other": ["00 млн", 2]
        }], [100000000, {
          "one": ["000 млн", 3],
          "few": ["000 млн", 3],
          "many": ["000 млн", 3],
          "other": ["000 млн", 3]
        }], [1000000000, {
          "one": ["0 млрд", 1],
          "few": ["0 млрд", 1],
          "many": ["0 млрд", 1],
          "other": ["0 млрд", 1]
        }], [10000000000, {
          "one": ["00 млрд", 2],
          "few": ["00 млрд", 2],
          "many": ["00 млрд", 2],
          "other": ["00 млрд", 2]
        }], [100000000000, {
          "one": ["000 млрд", 3],
          "few": ["000 млрд", 3],
          "many": ["000 млрд", 3],
          "other": ["000 млрд", 3]
        }], [1000000000000, {
          "one": ["0 трлн", 1],
          "few": ["0 трлн", 1],
          "many": ["0 трлн", 1],
          "other": ["0 трлн", 1]
        }], [10000000000000, {
          "one": ["00 трлн", 2],
          "few": ["00 трлн", 2],
          "many": ["00 трлн", 2],
          "other": ["00 трлн", 2]
        }], [100000000000000, {
          "one": ["000 трлн", 3],
          "few": ["000 трлн", 3],
          "many": ["000 трлн", 3],
          "other": ["000 трлн", 3]
        }]]
      }
    }
  }];
  _exports.default = _default;
});
define("istio/cldrs/vi", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  /*jslint eqeq: true*/
  var _default = [{
    "locale": "vi-vn",
    "parentLocale": "vi"
  }, {
    "locale": "vi",
    "pluralRuleFunction": function pluralRuleFunction(n, ord) {
      if (ord) return n == 1 ? "one" : "other";
      return "other";
    },
    "fields": {
      "year": {
        "displayName": "Năm",
        "relative": {
          "0": "năm nay",
          "1": "năm sau",
          "-1": "năm ngoái"
        },
        "relativeTime": {
          "future": {
            "other": "sau {0} năm nữa"
          },
          "past": {
            "other": "{0} năm trước"
          }
        }
      },
      "year-short": {
        "displayName": "Năm",
        "relative": {
          "0": "năm nay",
          "1": "năm sau",
          "-1": "năm ngoái"
        },
        "relativeTime": {
          "future": {
            "other": "sau {0} năm nữa"
          },
          "past": {
            "other": "{0} năm trước"
          }
        }
      },
      "month": {
        "displayName": "Tháng",
        "relative": {
          "0": "tháng này",
          "1": "tháng sau",
          "-1": "tháng trước"
        },
        "relativeTime": {
          "future": {
            "other": "sau {0} tháng nữa"
          },
          "past": {
            "other": "{0} tháng trước"
          }
        }
      },
      "month-short": {
        "displayName": "Tháng",
        "relative": {
          "0": "tháng này",
          "1": "tháng sau",
          "-1": "tháng trước"
        },
        "relativeTime": {
          "future": {
            "other": "sau {0} tháng nữa"
          },
          "past": {
            "other": "{0} tháng trước"
          }
        }
      },
      "day": {
        "displayName": "Ngày",
        "relative": {
          "0": "Hôm nay",
          "1": "Ngày mai",
          "2": "Ngày kia",
          "-2": "Hôm kia",
          "-1": "Hôm qua"
        },
        "relativeTime": {
          "future": {
            "other": "sau {0} ngày nữa"
          },
          "past": {
            "other": "{0} ngày trước"
          }
        }
      },
      "day-short": {
        "displayName": "Ngày",
        "relative": {
          "0": "Hôm nay",
          "1": "Ngày mai",
          "2": "Ngày kia",
          "-2": "Hôm kia",
          "-1": "Hôm qua"
        },
        "relativeTime": {
          "future": {
            "other": "sau {0} ngày nữa"
          },
          "past": {
            "other": "{0} ngày trước"
          }
        }
      },
      "hour": {
        "displayName": "Giờ",
        "relative": {
          "0": "giờ này"
        },
        "relativeTime": {
          "future": {
            "other": "sau {0} giờ nữa"
          },
          "past": {
            "other": "{0} giờ trước"
          }
        }
      },
      "hour-short": {
        "displayName": "Giờ",
        "relative": {
          "0": "giờ này"
        },
        "relativeTime": {
          "future": {
            "other": "sau {0} giờ nữa"
          },
          "past": {
            "other": "{0} giờ trước"
          }
        }
      },
      "minute": {
        "displayName": "Phút",
        "relative": {
          "0": "phút này"
        },
        "relativeTime": {
          "future": {
            "other": "sau {0} phút nữa"
          },
          "past": {
            "other": "{0} phút trước"
          }
        }
      },
      "minute-short": {
        "displayName": "Phút",
        "relative": {
          "0": "phút này"
        },
        "relativeTime": {
          "future": {
            "other": "sau {0} phút nữa"
          },
          "past": {
            "other": "{0} phút trước"
          }
        }
      },
      "second": {
        "displayName": "Giây",
        "relative": {
          "0": "bây giờ"
        },
        "relativeTime": {
          "future": {
            "other": "sau {0} giây nữa"
          },
          "past": {
            "other": "{0} giây trước"
          }
        }
      },
      "second-short": {
        "displayName": "Giây",
        "relative": {
          "0": "bây giờ"
        },
        "relativeTime": {
          "future": {
            "other": "sau {0} giây nữa"
          },
          "past": {
            "other": "{0} giây trước"
          }
        }
      }
    },
    "numbers": {
      "decimal": {
        "long": [[1000, {
          "other": ["0 nghìn", 1]
        }], [10000, {
          "other": ["00 nghìn", 2]
        }], [100000, {
          "other": ["000 nghìn", 3]
        }], [1000000, {
          "other": ["0 triệu", 1]
        }], [10000000, {
          "other": ["00 triệu", 2]
        }], [100000000, {
          "other": ["000 triệu", 3]
        }], [1000000000, {
          "other": ["0 tỷ", 1]
        }], [10000000000, {
          "other": ["00 tỷ", 2]
        }], [100000000000, {
          "other": ["000 tỷ", 3]
        }], [1000000000000, {
          "other": ["0 nghìn tỷ", 1]
        }], [10000000000000, {
          "other": ["00 nghìn tỷ", 2]
        }], [100000000000000, {
          "other": ["000 nghìn tỷ", 3]
        }]],
        "short": [[1000, {
          "other": ["0 N", 1]
        }], [10000, {
          "other": ["00 N", 2]
        }], [100000, {
          "other": ["000 N", 3]
        }], [1000000, {
          "other": ["0 Tr", 1]
        }], [10000000, {
          "other": ["00 Tr", 2]
        }], [100000000, {
          "other": ["000 Tr", 3]
        }], [1000000000, {
          "other": ["0 T", 1]
        }], [10000000000, {
          "other": ["00 T", 2]
        }], [100000000000, {
          "other": ["000 T", 3]
        }], [1000000000000, {
          "other": ["0 NT", 1]
        }], [10000000000000, {
          "other": ["00 NT", 2]
        }], [100000000000000, {
          "other": ["000 NT", 3]
        }]]
      }
    }
  }];
  _exports.default = _default;
});
define("istio/cldrs/zh", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  /*jslint eqeq: true*/
  var _default = [{
    "locale": "zh-Hans",
    "parentLocale": "zh"
  }, {
    "locale": "zh",
    "pluralRuleFunction": function pluralRuleFunction(n, ord) {
      if (ord) return "other";
      return "other";
    },
    "fields": {
      "year": {
        "displayName": "年",
        "relative": {
          "0": "今年",
          "1": "明年",
          "-1": "去年"
        },
        "relativeTime": {
          "future": {
            "other": "{0}年后"
          },
          "past": {
            "other": "{0}年前"
          }
        }
      },
      "year-short": {
        "displayName": "年",
        "relative": {
          "0": "今年",
          "1": "明年",
          "-1": "去年"
        },
        "relativeTime": {
          "future": {
            "other": "{0}年后"
          },
          "past": {
            "other": "{0}年前"
          }
        }
      },
      "month": {
        "displayName": "月",
        "relative": {
          "0": "本月",
          "1": "下个月",
          "-1": "上个月"
        },
        "relativeTime": {
          "future": {
            "other": "{0}个月后"
          },
          "past": {
            "other": "{0}个月前"
          }
        }
      },
      "month-short": {
        "displayName": "月",
        "relative": {
          "0": "本月",
          "1": "下个月",
          "-1": "上个月"
        },
        "relativeTime": {
          "future": {
            "other": "{0}个月后"
          },
          "past": {
            "other": "{0}个月前"
          }
        }
      },
      "day": {
        "displayName": "日",
        "relative": {
          "0": "今天",
          "1": "明天",
          "2": "后天",
          "-2": "前天",
          "-1": "昨天"
        },
        "relativeTime": {
          "future": {
            "other": "{0}天后"
          },
          "past": {
            "other": "{0}天前"
          }
        }
      },
      "day-short": {
        "displayName": "日",
        "relative": {
          "0": "今天",
          "1": "明天",
          "2": "后天",
          "-2": "前天",
          "-1": "昨天"
        },
        "relativeTime": {
          "future": {
            "other": "{0}天后"
          },
          "past": {
            "other": "{0}天前"
          }
        }
      },
      "hour": {
        "displayName": "小时",
        "relative": {
          "0": "\u8FD9\u4E00\u65F6\u95F4 / \u6B64\u65F6"
        },
        "relativeTime": {
          "future": {
            "other": "{0}小时后"
          },
          "past": {
            "other": "{0}小时前"
          }
        }
      },
      "hour-short": {
        "displayName": "小时",
        "relative": {
          "0": "\u8FD9\u4E00\u65F6\u95F4 / \u6B64\u65F6"
        },
        "relativeTime": {
          "future": {
            "other": "{0}小时后"
          },
          "past": {
            "other": "{0}小时前"
          }
        }
      },
      "minute": {
        "displayName": "分钟",
        "relative": {
          "0": "此刻"
        },
        "relativeTime": {
          "future": {
            "other": "{0}分钟后"
          },
          "past": {
            "other": "{0}分钟前"
          }
        }
      },
      "minute-short": {
        "displayName": "分",
        "relative": {
          "0": "此刻"
        },
        "relativeTime": {
          "future": {
            "other": "{0}分钟后"
          },
          "past": {
            "other": "{0}分钟前"
          }
        }
      },
      "second": {
        "displayName": "秒",
        "relative": {
          "0": "现在"
        },
        "relativeTime": {
          "future": {
            "other": "{0}秒钟后"
          },
          "past": {
            "other": "{0}秒钟前"
          }
        }
      },
      "second-short": {
        "displayName": "秒",
        "relative": {
          "0": "现在"
        },
        "relativeTime": {
          "future": {
            "other": "{0}秒后"
          },
          "past": {
            "other": "{0}秒前"
          }
        }
      }
    },
    "numbers": {
      "decimal": {
        "long": [[1000, {
          "other": ["0", 1]
        }], [10000, {
          "other": ["0万", 1]
        }], [100000, {
          "other": ["00万", 2]
        }], [1000000, {
          "other": ["000万", 3]
        }], [10000000, {
          "other": ["0000万", 4]
        }], [100000000, {
          "other": ["0亿", 1]
        }], [1000000000, {
          "other": ["00亿", 2]
        }], [10000000000, {
          "other": ["000亿", 3]
        }], [100000000000, {
          "other": ["0000亿", 4]
        }], [1000000000000, {
          "other": ["0兆", 1]
        }], [10000000000000, {
          "other": ["00兆", 2]
        }], [100000000000000, {
          "other": ["000兆", 3]
        }]],
        "short": [[1000, {
          "other": ["0", 1]
        }], [10000, {
          "other": ["0万", 1]
        }], [100000, {
          "other": ["00万", 2]
        }], [1000000, {
          "other": ["000万", 3]
        }], [10000000, {
          "other": ["0000万", 4]
        }], [100000000, {
          "other": ["0亿", 1]
        }], [1000000000, {
          "other": ["00亿", 2]
        }], [10000000000, {
          "other": ["000亿", 3]
        }], [100000000000, {
          "other": ["0000亿", 4]
        }], [1000000000000, {
          "other": ["0兆", 1]
        }], [10000000000000, {
          "other": ["00兆", 2]
        }], [100000000000000, {
          "other": ["000兆", 3]
        }]]
      }
    }
  }, {
    "locale": "zh-Hant",
    "pluralRuleFunction": function pluralRuleFunction(n, ord) {
      if (ord) return "other";
      return "other";
    },
    "fields": {
      "year": {
        "displayName": "年",
        "relative": {
          "0": "今年",
          "1": "明年",
          "-1": "去年"
        },
        "relativeTime": {
          "future": {
            "other": "{0} 年後"
          },
          "past": {
            "other": "{0} 年前"
          }
        }
      },
      "year-short": {
        "displayName": "年",
        "relative": {
          "0": "今年",
          "1": "明年",
          "-1": "去年"
        },
        "relativeTime": {
          "future": {
            "other": "{0} 年後"
          },
          "past": {
            "other": "{0} 年前"
          }
        }
      },
      "month": {
        "displayName": "月",
        "relative": {
          "0": "本月",
          "1": "下個月",
          "-1": "上個月"
        },
        "relativeTime": {
          "future": {
            "other": "{0} 個月後"
          },
          "past": {
            "other": "{0} 個月前"
          }
        }
      },
      "month-short": {
        "displayName": "月",
        "relative": {
          "0": "本月",
          "1": "下個月",
          "-1": "上個月"
        },
        "relativeTime": {
          "future": {
            "other": "{0} 個月後"
          },
          "past": {
            "other": "{0} 個月前"
          }
        }
      },
      "day": {
        "displayName": "日",
        "relative": {
          "0": "今天",
          "1": "明天",
          "2": "後天",
          "-2": "前天",
          "-1": "昨天"
        },
        "relativeTime": {
          "future": {
            "other": "{0} 天後"
          },
          "past": {
            "other": "{0} 天前"
          }
        }
      },
      "day-short": {
        "displayName": "日",
        "relative": {
          "0": "今天",
          "1": "明天",
          "2": "後天",
          "-2": "前天",
          "-1": "昨天"
        },
        "relativeTime": {
          "future": {
            "other": "{0} 天後"
          },
          "past": {
            "other": "{0} 天前"
          }
        }
      },
      "hour": {
        "displayName": "小時",
        "relative": {
          "0": "這一小時"
        },
        "relativeTime": {
          "future": {
            "other": "{0} 小時後"
          },
          "past": {
            "other": "{0} 小時前"
          }
        }
      },
      "hour-short": {
        "displayName": "小時",
        "relative": {
          "0": "這一小時"
        },
        "relativeTime": {
          "future": {
            "other": "{0} 小時後"
          },
          "past": {
            "other": "{0} 小時前"
          }
        }
      },
      "minute": {
        "displayName": "分鐘",
        "relative": {
          "0": "這一分鐘"
        },
        "relativeTime": {
          "future": {
            "other": "{0} 分鐘後"
          },
          "past": {
            "other": "{0} 分鐘前"
          }
        }
      },
      "minute-short": {
        "displayName": "分鐘",
        "relative": {
          "0": "這一分鐘"
        },
        "relativeTime": {
          "future": {
            "other": "{0} 分鐘後"
          },
          "past": {
            "other": "{0} 分鐘前"
          }
        }
      },
      "second": {
        "displayName": "秒",
        "relative": {
          "0": "現在"
        },
        "relativeTime": {
          "future": {
            "other": "{0} 秒後"
          },
          "past": {
            "other": "{0} 秒前"
          }
        }
      },
      "second-short": {
        "displayName": "秒",
        "relative": {
          "0": "現在"
        },
        "relativeTime": {
          "future": {
            "other": "{0} 秒後"
          },
          "past": {
            "other": "{0} 秒前"
          }
        }
      }
    },
    "numbers": {
      "decimal": {
        "long": [[1000, {
          "other": ["0", 1]
        }], [10000, {
          "other": ["0萬", 1]
        }], [100000, {
          "other": ["00萬", 2]
        }], [1000000, {
          "other": ["000萬", 3]
        }], [10000000, {
          "other": ["0000萬", 4]
        }], [100000000, {
          "other": ["0億", 1]
        }], [1000000000, {
          "other": ["00億", 2]
        }], [10000000000, {
          "other": ["000億", 3]
        }], [100000000000, {
          "other": ["0000億", 4]
        }], [1000000000000, {
          "other": ["0兆", 1]
        }], [10000000000000, {
          "other": ["00兆", 2]
        }], [100000000000000, {
          "other": ["000兆", 3]
        }]],
        "short": [[1000, {
          "other": ["0", 1]
        }], [10000, {
          "other": ["0萬", 1]
        }], [100000, {
          "other": ["00萬", 2]
        }], [1000000, {
          "other": ["000萬", 3]
        }], [10000000, {
          "other": ["0000萬", 4]
        }], [100000000, {
          "other": ["0億", 1]
        }], [1000000000, {
          "other": ["00億", 2]
        }], [10000000000, {
          "other": ["000億", 3]
        }], [100000000000, {
          "other": ["0000億", 4]
        }], [1000000000000, {
          "other": ["0兆", 1]
        }], [10000000000000, {
          "other": ["00兆", 2]
        }], [100000000000000, {
          "other": ["000兆", 3]
        }]]
      }
    }
  }];
  _exports.default = _default;
});
define("istio/cluster-setting/controller", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Controller.extend({
    router: Ember.inject.service(),
    actions: {
      cancel: function cancel() {
        Ember.get(this, 'router').transitionTo('authenticated.cluster');
      }
    }
  });

  _exports.default = _default;
});
define("istio/cluster-setting/route", ["exports", "ui/utils/constants"], function (_exports, _constants) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var NAMESPACE_NAME = 'istio-system';
  var APP_NAME = 'cluster-istio';
  var MONITORING_APP_NAME = 'cluster-monitoring';

  var _default = Ember.Route.extend({
    session: Ember.inject.service(),
    scope: Ember.inject.service(),
    router: Ember.inject.service(),
    beforeModel: function beforeModel() {
      var cluster = window.l('route:application').modelFor('authenticated.cluster');

      if (!Ember.get(cluster, 'isReady')) {
        Ember.get(this, 'router').transitionTo('authenticated.cluster.index');
      }
    },
    model: function model() {
      var cluster = window.l('route:application').modelFor('authenticated.cluster');
      var project = Ember.get(cluster, 'systemProject');

      if (!project) {
        return {
          owner: false
        };
      }

      var apps = project.followLink('apps');
      var namespaces = cluster.followLink('namespaces');
      var storageClasses = cluster.followLink('storageClasses');
      var persistentVolumeClaims = project.followLink('persistentVolumeClaims');
      return Ember.RSVP.all([apps, namespaces, storageClasses, persistentVolumeClaims]).then(function (data) {
        var app = data[0].findBy('name', APP_NAME);
        var monitoringApp = data[0].findBy('name', MONITORING_APP_NAME);
        var namespaces = data[1] || [];
        var storageClasses = data[2] || [];
        var persistentVolumeClaims = data[3] || [];
        var namespace = namespaces.findBy('name', NAMESPACE_NAME);
        return {
          app: app,
          nsExists: !!namespace,
          cluster: cluster,
          project: project,
          storageClasses: storageClasses,
          persistentVolumeClaims: persistentVolumeClaims.filter(function (p) {
            return p.namespaceId === NAMESPACE_NAME && p.state === 'bound';
          }),
          namespace: namespace,
          owner: true,
          apps: data[0].filter(function (a) {
            return a.name === APP_NAME;
          }),
          monitoringApp: monitoringApp
        };
      });
    },
    setDefaultRoute: Ember.on('activate', function () {
      Ember.set(this, "session.".concat(_constants.default.SESSION.CLUSTER_ROUTE), 'authenticated.cluster.istio.cluster-setting');
    })
  });

  _exports.default = _default;
});
define("istio/cluster-setting/template", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "EZo6D+9c",
    "block": "{\"symbols\":[],\"statements\":[[4,\"if\",[[24,[\"model\",\"owner\"]]],null,{\"statements\":[[0,\"  \"],[1,[28,\"istio-catalog\",null,[[\"app\",\"cluster\",\"project\",\"nsExists\",\"storageClasses\",\"persistentVolumeClaims\",\"namespace\",\"apps\",\"cancel\",\"members\",\"membersPromise\",\"monitoringApp\"],[[24,[\"model\",\"app\"]],[24,[\"model\",\"cluster\"]],[24,[\"model\",\"project\"]],[24,[\"model\",\"nsExists\"]],[24,[\"model\",\"storageClasses\"]],[24,[\"model\",\"persistentVolumeClaims\"]],[24,[\"model\",\"namespace\"]],[24,[\"model\",\"apps\"]],[28,\"action\",[[23,0,[]],\"cancel\"],null],[24,[\"model\",\"members\"]],[24,[\"model\",\"membersPromise\"]],[24,[\"model\",\"monitoringApp\"]]]]],false],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[0,\"  \"],[1,[28,\"banner-message\",null,[[\"message\",\"color\"],[[28,\"t\",[\"projectIstioPage.info.noPermission\"],null],\"bg-info\"]]],false],[0,\"\\n\"]],\"parameters\":[]}]],\"hasEval\":false}",
    "meta": {
      "moduleName": "istio/cluster-setting/template.hbs"
    }
  });

  _exports.default = _default;
});
define.alias("shared/cluster-templates/service", "istio/cluster-templates/service");
define.alias("shared/code-mirror/service", "istio/code-mirror/service");
define.alias("liquid-fire/components/-lf-get-outlet-state", "istio/components/-lf-get-outlet-state");
define.alias("shared/components/accordion-list-item/component", "istio/components/accordion-list-item/component");
define.alias("shared/components/accordion-list/component", "istio/components/accordion-list/component");
define.alias("shared/components/action-menu-item/component", "istio/components/action-menu-item/component");
define.alias("shared/components/action-menu/component", "istio/components/action-menu/component");
define.alias("shared/components/advanced-section/component", "istio/components/advanced-section/component");
define.alias("shared/components/annotations-section/component", "istio/components/annotations-section/component");
define.alias("shared/components/answer-override-row/component", "istio/components/answer-override-row/component");
define.alias("shared/components/api-field/component", "istio/components/api-field/component");
define.alias("shared/components/apikey-row/component", "istio/components/apikey-row/component");
define.alias("shared/components/authorized-endpoint/component", "istio/components/authorized-endpoint/component");
define.alias("shared/components/badge-state/component", "istio/components/badge-state/component");
define.alias("shared/components/banner-message/component", "istio/components/banner-message/component");
define.alias("ember-basic-dropdown/components/basic-dropdown", "istio/components/basic-dropdown");
define.alias("ember-basic-dropdown/components/basic-dropdown/content-element", "istio/components/basic-dropdown/content-element");
define.alias("ember-basic-dropdown/components/basic-dropdown/content", "istio/components/basic-dropdown/content");
define.alias("ember-basic-dropdown/components/basic-dropdown/trigger", "istio/components/basic-dropdown/trigger");
define.alias("shared/components/btn-toggle/component", "istio/components/btn-toggle/component");
define.alias("shared/components/catalog-box/component", "istio/components/catalog-box/component");
define.alias("shared/components/catalog-index/component", "istio/components/catalog-index/component");
define.alias("shared/components/catalog-persistence-row/component", "istio/components/catalog-persistence-row/component");
define.alias("shared/components/check-box/component", "istio/components/check-box/component");
define.alias("shared/components/check-computed-override/component", "istio/components/check-computed-override/component");
define.alias("shared/components/check-override-allowed/component", "istio/components/check-override-allowed/component");
define.alias("shared/components/cluster-driver/driver-aliyunkcs/component", "istio/components/cluster-driver/driver-aliyunkcs/component");
define.alias("shared/components/cluster-driver/driver-amazoneks/component", "istio/components/cluster-driver/driver-amazoneks/component");
define.alias("shared/components/cluster-driver/driver-azureaks/component", "istio/components/cluster-driver/driver-azureaks/component");
define.alias("shared/components/cluster-driver/driver-googlegke/component", "istio/components/cluster-driver/driver-googlegke/component");
define.alias("shared/components/cluster-driver/driver-huaweicce/component", "istio/components/cluster-driver/driver-huaweicce/component");
define.alias("shared/components/cluster-driver/driver-import/component", "istio/components/cluster-driver/driver-import/component");
define.alias("shared/components/cluster-driver/driver-rke/component", "istio/components/cluster-driver/driver-rke/component");
define.alias("shared/components/cluster-driver/driver-tencenttke/component", "istio/components/cluster-driver/driver-tencenttke/component");
define.alias("shared/components/cluster-options-rke/component", "istio/components/cluster-options-rke/component");
define.alias("shared/components/cluster-ribbon-nav/component", "istio/components/cluster-ribbon-nav/component");
define.alias("shared/components/cluster-template-override-toggle/component", "istio/components/cluster-template-override-toggle/component");
define.alias("shared/components/cluster-template-question-row/component", "istio/components/cluster-template-question-row/component");
define.alias("shared/components/cluster-template-revision-upgrade-notification/component", "istio/components/cluster-template-revision-upgrade-notification/component");
define.alias("shared/components/cluster-template-row/component", "istio/components/cluster-template-row/component");
define.alias("shared/components/cluster-templates-table/component", "istio/components/cluster-templates-table/component");
define.alias("shared/components/code-block/component", "istio/components/code-block/component");
define("istio/components/config-validation-list/component", ["exports", "istio/components/config-validation-list/template"], function (_exports, _template) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Component.extend({
    globalStore: Ember.inject.service(),
    scope: Ember.inject.service(),
    istio: Ember.inject.service(),
    layout: _template.default,
    sortBy: 'severity',
    descending: false,
    name: null,
    namespaceId: null,
    resourceType: null,
    expanded: false,
    timeOutAnchor: null,
    loading: false,
    noPermission: false,
    headers: [{
      name: 'severity',
      sort: ['severity'],
      translationKey: 'validationsList.table.severity',
      width: 100
    }, {
      name: 'path',
      sort: ['path'],
      translationKey: 'validationsList.table.path'
    }, {
      name: 'message',
      sort: ['message'],
      translationKey: 'validationsList.table.message'
    }],
    init: function init() {
      this._super.apply(this, arguments);

      this.expanedDidChange();
      this.istio.checkKialiUiEndpoint(this.scope.currentCluster.id);
    },
    willDestroyElement: function willDestroyElement() {
      this.clearTimeOut();

      this._super();
    },
    expanedDidChange: Ember.observer('expanded', function () {
      if (Ember.get(this, 'expanded')) {
        this.fetch();
      } else {
        this.clearTimeOut();
      }
    }),
    fetch: function fetch() {
      var _this = this;

      Ember.set(this, 'loading', true);
      var useNewKialiUrl = this.istio.useNewKialiUrl;
      var kialiPort = '-http:80';

      if (useNewKialiUrl) {
        kialiPort = ':20001';
      }

      var url = "/k8s/clusters/".concat(Ember.get(this, 'scope.currentCluster.id'), "/api/v1/namespaces/istio-system/services/http:kiali").concat(kialiPort, "/proxy/api/namespaces/").concat(Ember.get(this, 'namespaceId'), "/istio?validate=true");
      Ember.get(this, 'globalStore').rawRequest({
        url: url,
        method: 'GET'
      }).then(function (xhr) {
        var out = [];
        var validations = xhr.body.validations;

        if (validations) {
          var v = validations[Ember.get(_this, 'resourceType')];

          if (v) {
            var tv = v[Ember.get(_this, 'name')];

            if (tv.checks) {
              out = tv.checks;
            }
          }
        }

        Ember.setProperties(_this, {
          validations: out,
          loading: false,
          noPermission: false
        });
        var timeOutAnchor = setTimeout(function () {
          _this.fetch();
        }, 10000);
        Ember.set(_this, 'timeOutAnchor', timeOutAnchor);
      }).catch(function () {
        Ember.setProperties(_this, {
          loading: false,
          noPermission: true
        });
      });
    },
    clearTimeOut: function clearTimeOut() {
      var timeOutAnchor = Ember.get(this, 'timeOutAnchor');

      if (timeOutAnchor) {
        clearTimeout(timeOutAnchor);
        Ember.set(this, 'timeOutAnchor', timeOutAnchor);
      }
    }
  });

  _exports.default = _default;
});
define("istio/components/config-validation-list/template", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "BHhdrg2G",
    "block": "{\"symbols\":[\"parent\",\"sortable\",\"kind\",\"row\",\"dt\"],\"statements\":[[4,\"accordion-list-item\",null,[[\"title\",\"detail\",\"expandAll\",\"expand\",\"expanded\",\"componentName\"],[[28,\"t\",[\"validationsList.title\"],null],[28,\"t\",[\"validationsList.detail\"],[[\"resourceType\"],[[24,[\"resourceType\"]]]]],[24,[\"expandAll\"]],[28,\"action\",[[23,0,[]],[24,[\"expandFn\"]]],null],[24,[\"expanded\"]],\"sortable-table\"]],{\"statements\":[[4,\"if\",[[28,\"and\",[[24,[\"expanded\"]],[24,[\"noPermission\"]]],null]],null,{\"statements\":[[0,\"    \"],[7,\"div\",true],[10,\"class\",\"text-center mt-20\"],[8],[0,\"\\n      \"],[1,[28,\"t\",[\"validationsList.noPermission\"],null],false],[0,\"\\n    \"],[9],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[4,\"if\",[[28,\"and\",[[24,[\"expanded\"]],[28,\"not\",[[24,[\"loading\"]]],null]],null]],null,{\"statements\":[[4,\"component\",[[23,1,[\"intent\"]]],[[\"classNames\",\"bulkActions\",\"rowActions\",\"paging\",\"search\",\"sortBy\",\"stickyHeader\",\"descending\",\"headers\",\"body\"],[\"grid fixed mb-0 sortable-table\",false,false,false,true,[24,[\"sortBy\"]],false,[24,[\"descending\"]],[24,[\"headers\"]],[24,[\"validations\"]]]],{\"statements\":[[4,\"if\",[[28,\"eq\",[[23,3,[]],\"row\"],null]],null,{\"statements\":[[0,\"        \"],[7,\"tr\",true],[8],[0,\"\\n          \"],[7,\"td\",true],[11,\"data-title\",[29,[[23,5,[\"severity\"]]]]],[8],[0,\"\\n            \"],[1,[23,4,[\"severity\"]],false],[0,\"\\n          \"],[9],[0,\"\\n          \"],[7,\"td\",true],[11,\"data-title\",[29,[[23,5,[\"path\"]]]]],[8],[0,\"\\n            \"],[1,[23,4,[\"path\"]],false],[0,\"\\n          \"],[9],[0,\"\\n          \"],[7,\"td\",true],[11,\"data-title\",[29,[[23,5,[\"message\"]]]]],[8],[0,\"\\n            \"],[1,[23,4,[\"message\"]],false],[0,\"\\n          \"],[9],[0,\"\\n        \"],[9],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[4,\"if\",[[28,\"eq\",[[23,3,[]],\"norows\"],null]],null,{\"statements\":[[0,\"        \"],[7,\"tr\",true],[8],[0,\"\\n          \"],[7,\"td\",true],[11,\"colspan\",[29,[[23,2,[\"fullColspan\"]]]]],[10,\"class\",\"text-center text-muted pt-20 pb-20\"],[8],[0,\"\\n            \"],[1,[28,\"t\",[\"validationsList.noData\"],null],false],[0,\"\\n          \"],[9],[0,\"\\n        \"],[9],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[4,\"if\",[[28,\"eq\",[[23,3,[]],\"nomatch\"],null]],null,{\"statements\":[[0,\"        \"],[7,\"tr\",true],[8],[0,\"\\n          \"],[7,\"td\",true],[11,\"colspan\",[29,[[23,2,[\"fullColspan\"]]]]],[10,\"class\",\"text-center text-muted pt-20 pb-20\"],[8],[0,\"\\n            \"],[1,[28,\"t\",[\"validationsList.noMatch\"],null],false],[0,\"\\n          \"],[9],[0,\"\\n        \"],[9],[0,\"\\n      \"]],\"parameters\":[]},null]],\"parameters\":[]}]],\"parameters\":[]}]],\"parameters\":[2,3,4,5]},null]],\"parameters\":[]},{\"statements\":[[0,\"    \"],[7,\"div\",true],[10,\"class\",\"text-center mt-20\"],[8],[0,\"\\n      \"],[7,\"i\",true],[10,\"class\",\"icon icon-spinner icon-spin icon-3x\"],[8],[9],[0,\"\\n    \"],[9],[0,\"\\n  \"]],\"parameters\":[]}]],\"parameters\":[]}]],\"parameters\":[1]},null]],\"hasEval\":false}",
    "meta": {
      "moduleName": "istio/components/config-validation-list/template.hbs"
    }
  });

  _exports.default = _default;
});
define.alias("shared/components/confirm-delete/component", "istio/components/confirm-delete/component");
define("istio/components/connection-pool/component", ["exports", "istio/components/connection-pool/template"], function (_exports, _template) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Component.extend({
    layout: _template.default,
    trafficPolicy: null,
    model: Ember.computed.alias('trafficPolicy.connectionPool'),
    init: function init() {
      this._super.apply(this, arguments);

      this.initConnectionPool();
    },
    initConnectionPool: function initConnectionPool() {
      if (!Ember.get(this, 'trafficPolicy.connectionPool') && Ember.get(this, 'editing')) {
        Ember.set(this, 'trafficPolicy.connectionPool', {
          http: {
            http1MaxPendingRequests: 1024,
            http2MaxRequests: 1024,
            maxRequestsPerConnection: 1024,
            maxRetries: 1024
          },
          tcp: {
            maxConnections: 1024
          }
        });
      }
    }
  });

  _exports.default = _default;
});
define("istio/components/connection-pool/template", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "pZtUI+oI",
    "block": "{\"symbols\":[],\"statements\":[[7,\"div\",true],[10,\"class\",\"row\"],[8],[0,\"\\n  \"],[7,\"div\",true],[10,\"class\",\"col span-4\"],[8],[0,\"\\n    \"],[7,\"label\",true],[10,\"class\",\"acc-label\"],[11,\"for\",[29,[[28,\"concat\",[[24,[\"elementId\"]],\"-input-http1MaxPendingRequests\"],null]]]],[8],[0,\"\\n      \"],[1,[28,\"t\",[\"cruDestinationRule.connectionPool.http1MaxPendingRequests.label\"],null],false],[0,\"\\n    \"],[9],[0,\"\\n\"],[4,\"input-or-display\",null,[[\"editable\",\"value\"],[[24,[\"editing\"]],[24,[\"model\",\"http\",\"http1MaxPendingRequests\"]]]],{\"statements\":[[0,\"      \"],[1,[28,\"input-integer\",null,[[\"min\",\"value\",\"id\",\"placeholder\"],[0,[24,[\"model\",\"http\",\"http1MaxPendingRequests\"]],[28,\"concat\",[[24,[\"elementId\"]],\"-input-http1MaxPendingRequests\"],null],[28,\"t\",[\"cruDestinationRule.connectionPool.http1MaxPendingRequests.placeholder\"],null]]]],false],[0,\"\\n      \"],[7,\"p\",true],[10,\"class\",\"help-block\"],[8],[0,\"\\n        \"],[1,[28,\"t\",[\"cruDestinationRule.connectionPool.http1MaxPendingRequests.help\"],null],false],[0,\"\\n      \"],[9],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"  \"],[9],[0,\"\\n\\n  \"],[7,\"div\",true],[10,\"class\",\"col span-4\"],[8],[0,\"\\n    \"],[7,\"label\",true],[10,\"class\",\"acc-label\"],[11,\"for\",[29,[[28,\"concat\",[[24,[\"elementId\"]],\"-input-http2MaxRequests\"],null]]]],[8],[0,\"\\n      \"],[1,[28,\"t\",[\"cruDestinationRule.connectionPool.http2MaxRequests.label\"],null],false],[0,\"\\n    \"],[9],[0,\"\\n\"],[4,\"input-or-display\",null,[[\"editable\",\"value\"],[[24,[\"editing\"]],[24,[\"model\",\"http\",\"http2MaxRequests\"]]]],{\"statements\":[[0,\"      \"],[1,[28,\"input-integer\",null,[[\"min\",\"value\",\"id\",\"placeholder\"],[0,[24,[\"model\",\"http\",\"http2MaxRequests\"]],[28,\"concat\",[[24,[\"elementId\"]],\"-input-http2MaxRequests\"],null],[28,\"t\",[\"cruDestinationRule.connectionPool.http2MaxRequests.placeholder\"],null]]]],false],[0,\"\\n      \"],[7,\"p\",true],[10,\"class\",\"help-block\"],[8],[0,\"\\n        \"],[1,[28,\"t\",[\"cruDestinationRule.connectionPool.http2MaxRequests.help\"],null],false],[0,\"\\n      \"],[9],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"  \"],[9],[0,\"\\n\\n  \"],[7,\"div\",true],[10,\"class\",\"col span-4\"],[8],[0,\"\\n    \"],[7,\"label\",true],[10,\"class\",\"acc-label\"],[11,\"for\",[29,[[28,\"concat\",[[24,[\"elementId\"]],\"-input-maxRequestsPerConnection\"],null]]]],[8],[0,\"\\n      \"],[1,[28,\"t\",[\"cruDestinationRule.connectionPool.maxRequestsPerConnection.label\"],null],false],[0,\"\\n    \"],[9],[0,\"\\n\"],[4,\"input-or-display\",null,[[\"editable\",\"value\"],[[24,[\"editing\"]],[24,[\"model\",\"http\",\"maxRequestsPerConnection\"]]]],{\"statements\":[[0,\"      \"],[1,[28,\"input-integer\",null,[[\"min\",\"value\",\"id\",\"placeholder\"],[0,[24,[\"model\",\"http\",\"maxRequestsPerConnection\"]],[28,\"concat\",[[24,[\"elementId\"]],\"-input-maxRequestsPerConnection\"],null],[28,\"t\",[\"cruDestinationRule.connectionPool.maxRequestsPerConnection.placeholder\"],null]]]],false],[0,\"\\n      \"],[7,\"p\",true],[10,\"class\",\"help-block\"],[8],[0,\"\\n        \"],[1,[28,\"t\",[\"cruDestinationRule.connectionPool.maxRequestsPerConnection.help\"],null],false],[0,\"\\n      \"],[9],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"  \"],[9],[0,\"\\n\"],[9],[0,\"\\n\\n\"],[7,\"div\",true],[10,\"class\",\"row\"],[8],[0,\"\\n  \"],[7,\"div\",true],[10,\"class\",\"col span-4\"],[8],[0,\"\\n    \"],[7,\"label\",true],[10,\"class\",\"acc-label\"],[11,\"for\",[29,[[28,\"concat\",[[24,[\"elementId\"]],\"-input-maxRetries\"],null]]]],[8],[0,\"\\n      \"],[1,[28,\"t\",[\"cruDestinationRule.connectionPool.maxRetries.label\"],null],false],[0,\"\\n    \"],[9],[0,\"\\n\"],[4,\"input-or-display\",null,[[\"editable\",\"value\"],[[24,[\"editing\"]],[24,[\"model\",\"http\",\"maxRetries\"]]]],{\"statements\":[[0,\"      \"],[1,[28,\"input-integer\",null,[[\"min\",\"value\",\"id\",\"placeholder\"],[0,[24,[\"model\",\"http\",\"maxRetries\"]],[28,\"concat\",[[24,[\"elementId\"]],\"-input-maxRetries\"],null],[28,\"t\",[\"cruDestinationRule.connectionPool.maxRetries.placeholder\"],null]]]],false],[0,\"\\n      \"],[7,\"p\",true],[10,\"class\",\"help-block\"],[8],[0,\"\\n        \"],[1,[28,\"t\",[\"cruDestinationRule.connectionPool.maxRetries.help\"],null],false],[0,\"\\n      \"],[9],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"  \"],[9],[0,\"\\n\\n  \"],[7,\"div\",true],[10,\"class\",\"col span-4\"],[8],[0,\"\\n    \"],[7,\"label\",true],[10,\"class\",\"acc-label\"],[11,\"for\",[29,[[28,\"concat\",[[24,[\"elementId\"]],\"-input-connectTimeout\"],null]]]],[8],[0,\"\\n      \"],[1,[28,\"t\",[\"cruDestinationRule.connectionPool.connectTimeout.label\"],null],false],[0,\"\\n    \"],[9],[0,\"\\n\"],[4,\"input-or-display\",null,[[\"editable\",\"value\"],[[24,[\"editing\"]],[24,[\"model\",\"tcp\",\"connectTimeout\"]]]],{\"statements\":[[0,\"      \"],[1,[28,\"input\",null,[[\"type\",\"value\",\"id\",\"placeholder\"],[\"text\",[24,[\"model\",\"tcp\",\"connectTimeout\"]],[28,\"concat\",[[24,[\"elementId\"]],\"-input-connectTimeout\"],null],[28,\"t\",[\"cruDestinationRule.connectionPool.connectTimeout.placeholder\"],null]]]],false],[0,\"\\n      \"],[7,\"p\",true],[10,\"class\",\"help-block\"],[8],[0,\"\\n        \"],[1,[28,\"t\",[\"cruDestinationRule.connectionPool.connectTimeout.help\"],null],false],[0,\"\\n      \"],[9],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"  \"],[9],[0,\"\\n\\n  \"],[7,\"div\",true],[10,\"class\",\"col span-4\"],[8],[0,\"\\n    \"],[7,\"label\",true],[10,\"class\",\"acc-label\"],[11,\"for\",[29,[[28,\"concat\",[[24,[\"elementId\"]],\"-input-maxConnections\"],null]]]],[8],[0,\"\\n      \"],[1,[28,\"t\",[\"cruDestinationRule.connectionPool.maxConnections.label\"],null],false],[0,\"\\n    \"],[9],[0,\"\\n\"],[4,\"input-or-display\",null,[[\"editable\",\"value\"],[[24,[\"editing\"]],[24,[\"model\",\"tcp\",\"maxConnections\"]]]],{\"statements\":[[0,\"      \"],[1,[28,\"input-integer\",null,[[\"min\",\"value\",\"id\",\"placeholder\"],[0,[24,[\"model\",\"tcp\",\"maxConnections\"]],[28,\"concat\",[[24,[\"elementId\"]],\"-input-maxConnections\"],null],[28,\"t\",[\"cruDestinationRule.connectionPool.maxConnections.placeholder\"],null]]]],false],[0,\"\\n      \"],[7,\"p\",true],[10,\"class\",\"help-block\"],[8],[0,\"\\n        \"],[1,[28,\"t\",[\"cruDestinationRule.connectionPool.maxConnections.help\"],null],false],[0,\"\\n      \"],[9],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"  \"],[9],[0,\"\\n\"],[9]],\"hasEval\":false}",
    "meta": {
      "moduleName": "istio/components/connection-pool/template.hbs"
    }
  });

  _exports.default = _default;
});
define.alias("shared/components/container-shell/component", "istio/components/container-shell/component");
define.alias("shared/components/containers-header/component", "istio/components/containers-header/component");
define.alias("ember-cli-clipboard/components/copy-button", "istio/components/copy-button");
define.alias("shared/components/copy-inline/component", "istio/components/copy-inline/component");
define.alias("shared/components/copy-to-clipboard/component", "istio/components/copy-to-clipboard/component");
define.alias("shared/components/cru-cloud-provider/component", "istio/components/cru-cloud-provider/component");
define.alias("shared/components/cru-cluster-template-questions/component", "istio/components/cru-cluster-template-questions/component");
define.alias("shared/components/cru-cluster-template/component", "istio/components/cru-cluster-template/component");
define.alias("shared/components/cru-cluster/component", "istio/components/cru-cluster/component");
define("istio/components/cru-destination-rule/component", ["exports", "shared/mixins/view-new-edit", "istio/components/cru-destination-rule/template", "ui/utils/errors", "shared/mixins/child-hook", "shared/mixins/manage-labels"], function (_exports, _viewNewEdit, _template, _errors, _childHook, _manageLabels) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

  function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

  function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

  function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

  var _default = Ember.Component.extend(_viewNewEdit.default, _childHook.default, {
    intl: Ember.inject.service(),
    layout: _template.default,
    model: null,
    subsets: Ember.computed.alias('model.subsets'),
    namespace: Ember.computed.alias('model.namespace'),
    init: function init() {
      this._super.apply(this, arguments);

      if (!Ember.get(this, 'model.trafficPolicy')) {
        Ember.set(this, 'model.trafficPolicy', {});
      }
    },
    didInsertElement: function didInsertElement() {
      if (Ember.get(this, 'isNew') && Ember.get(this, 'subsets.length') === 0) {
        this.send('addSubset');
      }
    },
    actions: {
      addSubset: function addSubset() {
        var version = this.getNewVersion();
        var subset = Ember.Object.create({
          name: version,
          labels: {
            version: version
          }
        });
        Ember.get(this, 'subsets').pushObject(subset);
      },
      removeSubset: function removeSubset(subset) {
        Ember.get(this, 'subsets').removeObject(subset);
      },
      setLabels: function setLabels(labels) {
        Ember.set(this, 'model.labels', (0, _manageLabels.flattenLabelArrays)(labels));
      }
    },
    willSave: function willSave() {
      var _this = this,
          _arguments = arguments;

      var intl = Ember.get(this, 'intl');
      Ember.set(this, 'model.namespaceId', Ember.get(this, 'namespace.id') || '__placeholder__');
      var self = this;
      var sup = this._super;
      var errors = [];
      errors.pushObjects(Ember.get(this, 'namespaceErrors') || []);
      errors.pushObjects(Ember.get(this, 'tlsErrors') || []);

      if (!Ember.get(this, 'model.host')) {
        errors.pushObject(intl.t('cruDestinationRule.host.error'));
      }

      (Ember.get(this, 'model.subsets') || []).forEach(function (subset) {
        if (!Ember.get(subset, 'name')) {
          errors.pushObject(intl.t('cruDestinationRule.subsets.name.error'));
        }

        if (Object.keys(Ember.get(subset, 'labels') || {}).length === 0) {
          errors.pushObject(intl.t('cruDestinationRule.subsets.labels.error'));
        }
      });

      if (Ember.get(this, 'model.trafficPolicy.loadBalancer.consistentHash.httpHeaderName') === '') {
        errors.pushObject(intl.t('cruDestinationRule.loadBalancer.consistentHash.httpHeaderName.error'));
      }

      if (Ember.get(this, 'model.trafficPolicy.loadBalancer.consistentHash.httpCookie.name') === '') {
        errors.pushObject(intl.t('cruDestinationRule.loadBalancer.consistentHash.httpCookie.name.error'));
      }

      if (Ember.get(this, 'model.trafficPolicy.loadBalancer.consistentHash.httpCookie.ttl') === '') {
        errors.pushObject(intl.t('cruDestinationRule.loadBalancer.consistentHash.httpCookie.ttl.error'));
      }

      if (!Ember.get(this, 'model.host')) {
        errors.pushObject(intl.t('cruDestinationRule.host.error'));
      }

      errors = errors.uniq();
      Ember.set(this, 'errors', errors);

      if (Ember.get(errors, 'length') !== 0) {
        return false;
      }

      return this.applyHooks('_beforeSaveHooks').then(function () {
        Ember.set(_this, 'model.namespaceId', Ember.get(_this, 'namespace.id'));
        return sup.apply.apply(sup, [self].concat(_toConsumableArray(_arguments)));
      }).catch(function (err) {
        Ember.set(_this, 'errors', [_errors.default.stringify(err)]);
      });
    },
    doSave: function doSave(opt) {
      var _this2 = this;

      var primaryResource = Ember.get(this, 'primaryResource');
      var clone = primaryResource.clone();

      if (Object.keys(Ember.get(clone, 'trafficPolicy') || {}).length === 0) {
        delete clone['trafficPolicy'];
      }

      if (Ember.get(clone, 'trafficPolicy.connectionPool.tcp') && Ember.get(clone, 'trafficPolicy.connectionPool.tcp.connectTimeout') === '') {
        var tcp = Ember.get(clone, 'trafficPolicy.connectionPool.tcp');
        delete tcp['connectTimeout'];
      }

      opt = opt || {};
      opt.qp = {
        '_replace': 'true'
      };
      return clone.save(opt).then(function (newData) {
        return _this2.mergeResult(newData);
      });
    },
    getNewVersion: function getNewVersion() {
      var name = Ember.get(this, 'subsets.lastObject.name');

      if (name) {
        var matches = name.match(/\d+$/);

        if (matches.length > 0) {
          var prefix = name.slice(0, name.length - matches[0].length);
          return "".concat(prefix).concat(parseInt(matches[0], 10) + 1);
        }
      } else {
        return 'v1';
      }

      return '';
    }
  });

  _exports.default = _default;
});
define("istio/components/cru-destination-rule/template", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "yVxOAroz",
    "block": "{\"symbols\":[\"al\",\"expandFn\",\"subset\"],\"statements\":[[4,\"if\",[[24,[\"isView\"]]],null,{\"statements\":[[0,\"  \"],[7,\"section\",true],[10,\"class\",\"header clearfix\"],[8],[0,\"\\n    \"],[7,\"div\",true],[10,\"class\",\"pull-left\"],[8],[0,\"\\n      \"],[7,\"h1\",true],[8],[0,\"\\n        \"],[1,[28,\"t\",[[28,\"concat\",[\"cruDestinationRule.title.\",[24,[\"mode\"]]],null]],[[\"name\"],[[24,[\"model\",\"displayName\"]]]]],false],[0,\"\\n      \"],[9],[0,\"\\n    \"],[9],[0,\"\\n    \"],[7,\"div\",true],[10,\"class\",\"right-buttons\"],[8],[0,\"\\n      \"],[1,[28,\"badge-state\",null,[[\"model\"],[[24,[\"model\"]]]]],false],[0,\"\\n      \"],[1,[28,\"action-menu\",null,[[\"model\",\"showPrimary\",\"classNames\",\"size\"],[[24,[\"model\"]],false,\"ml-10 inline-block\",\"sm\"]]],false],[0,\"\\n    \"],[9],[0,\"\\n  \"],[9],[0,\"\\n\\n  \"],[7,\"div\",true],[10,\"class\",\"row banner bg-info basics\"],[8],[0,\"\\n    \"],[7,\"div\",true],[10,\"class\",\"vertical-middle\"],[8],[0,\"\\n      \"],[7,\"label\",true],[10,\"class\",\"acc-label vertical-middle p-0\"],[8],[0,\"\\n        \"],[1,[28,\"t\",[\"generic.name\"],null],false],[0,\":\\n      \"],[9],[0,\"\\n\"],[4,\"copy-inline\",null,[[\"clipboardText\"],[[24,[\"model\",\"displayName\"]]]],{\"statements\":[[0,\"        \"],[1,[24,[\"model\",\"displayName\"]],false],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"    \"],[9],[0,\"\\n    \"],[7,\"div\",true],[10,\"class\",\"vertical-middle\"],[8],[0,\"\\n      \"],[7,\"label\",true],[10,\"class\",\"acc-label vertical-middle p-0\"],[8],[0,\"\\n        \"],[1,[28,\"t\",[\"servicePage.multistat.namespace\"],null],false],[0,\":\\n      \"],[9],[0,\"\\n\"],[4,\"copy-inline\",null,[[\"clipboardText\"],[[24,[\"model\",\"namespaceId\"]]]],{\"statements\":[[0,\"        \"],[1,[24,[\"model\",\"namespaceId\"]],false],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"    \"],[9],[0,\"\\n    \"],[7,\"div\",true],[10,\"class\",\"vertical-middle\"],[8],[0,\"\\n      \"],[7,\"label\",true],[10,\"class\",\"acc-label vertical-middle p-0\"],[8],[0,\"\\n        \"],[1,[28,\"t\",[\"generic.host\"],null],false],[0,\":\\n      \"],[9],[0,\"\\n\"],[4,\"copy-inline\",null,[[\"clipboardText\"],[[24,[\"model\",\"host\"]]]],{\"statements\":[[0,\"        \"],[1,[24,[\"model\",\"host\"]],false],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"    \"],[9],[0,\"\\n    \"],[7,\"div\",true],[10,\"class\",\"vertical-middle\"],[8],[0,\"\\n      \"],[7,\"label\",true],[10,\"class\",\"acc-label vertical-middle p-0\"],[8],[0,\"\\n        \"],[1,[28,\"t\",[\"generic.created\"],null],false],[0,\":\\n      \"],[9],[0,\"\\n      \"],[1,[28,\"date-calendar\",[[24,[\"model\",\"created\"]]],null],false],[0,\"\\n    \"],[9],[0,\"\\n  \"],[9],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[0,\"  \"],[7,\"section\",true],[10,\"class\",\"header clearfix\"],[8],[0,\"\\n    \"],[7,\"h1\",true],[8],[0,\"\\n      \"],[1,[28,\"t\",[[28,\"concat\",[\"cruDestinationRule.title.\",[24,[\"mode\"]]],null]],[[\"name\"],[[24,[\"model\",\"displayName\"]]]]],false],[0,\"\\n    \"],[9],[0,\"\\n  \"],[9],[0,\"\\n  \"],[7,\"section\",true],[10,\"class\",\"horizontal-form container-fluid\"],[8],[0,\"\\n    \"],[7,\"div\",true],[10,\"class\",\"row\"],[8],[0,\"\\n      \"],[7,\"div\",true],[10,\"class\",\"col span-6\"],[8],[0,\"\\n        \"],[1,[28,\"form-name-description\",null,[[\"model\",\"namePlaceholder\",\"descriptionShown\",\"nameDisabled\"],[[24,[\"model\"]],\"cruDestinationRule.name.placeholder\",false,[24,[\"isEdit\"]]]]],false],[0,\"\\n      \"],[9],[0,\"\\n      \"],[7,\"div\",true],[10,\"class\",\"col span-6\"],[8],[0,\"\\n        \"],[1,[28,\"form-namespace\",null,[[\"namespace\",\"errors\",\"registerHook\",\"editing\"],[[24,[\"namespace\"]],[24,[\"namespaceErrors\"]],[28,\"action\",[[23,0,[]],\"registerHook\"],null],[24,[\"isNew\"]]]]],false],[0,\"\\n      \"],[9],[0,\"\\n    \"],[9],[0,\"\\n\\n    \"],[7,\"div\",true],[10,\"class\",\"row\"],[8],[0,\"\\n      \"],[7,\"div\",true],[10,\"class\",\"col span-6\"],[8],[0,\"\\n        \"],[1,[28,\"istio-host-select\",null,[[\"namespaceId\",\"value\"],[[24,[\"namespace\",\"id\"]],[24,[\"model\",\"host\"]]]]],false],[0,\"\\n      \"],[9],[0,\"\\n    \"],[9],[0,\"\\n  \"],[9],[0,\"\\n\"]],\"parameters\":[]}],[0,\"\\n\"],[7,\"section\",true],[10,\"class\",\"horizontal-form container-fluid mb-30\"],[8],[0,\"\\n  \"],[7,\"div\",true],[10,\"class\",\"row mt-30\"],[8],[0,\"\\n    \"],[7,\"label\",true],[8],[0,\"\\n      \"],[1,[28,\"t\",[\"cruDestinationRule.subsets.label\"],null],false],[0,\"\\n    \"],[9],[0,\"\\n  \"],[9],[0,\"\\n\\n  \"],[7,\"hr\",true],[8],[9],[0,\"\\n\\n\"],[4,\"each\",[[24,[\"subsets\"]]],null,{\"statements\":[[0,\"    \"],[1,[28,\"destination-rule-subset-row\",null,[[\"editing\",\"subset\",\"subsets\",\"removeSubset\"],[[24,[\"editing\"]],[23,3,[]],[24,[\"subsets\"]],[28,\"action\",[[23,0,[]],\"removeSubset\"],null]]]],false],[0,\"\\n\"]],\"parameters\":[3]},{\"statements\":[[0,\"    \"],[7,\"div\",true],[10,\"class\",\"p-20 text-center text-muted\"],[8],[0,\"\\n      \"],[1,[28,\"t\",[\"cruDestinationRule.subsets.noSubsets\"],null],false],[0,\"\\n    \"],[9],[0,\"\\n\"]],\"parameters\":[]}],[0,\"\\n\"],[4,\"if\",[[24,[\"editing\"]]],null,{\"statements\":[[0,\"    \"],[7,\"div\",true],[10,\"class\",\"row\"],[8],[0,\"\\n      \"],[7,\"button\",false],[12,\"class\",\"btn bg-link icon-btn pull-right\"],[3,\"action\",[[23,0,[]],\"addSubset\"]],[8],[0,\"\\n        \"],[7,\"span\",true],[10,\"class\",\"darken\"],[8],[0,\"\\n          \"],[7,\"i\",true],[10,\"class\",\"icon icon-plus text-small\"],[8],[9],[0,\"\\n        \"],[9],[0,\"\\n        \"],[7,\"span\",true],[8],[0,\"\\n          \"],[1,[28,\"t\",[\"cruDestinationRule.subsets.addSubsetLabel\"],null],false],[0,\"\\n        \"],[9],[0,\"\\n      \"],[9],[0,\"\\n    \"],[9],[0,\"\\n\"]],\"parameters\":[]},null],[9],[0,\"\\n\\n\"],[7,\"hr\",true],[10,\"class\",\"mt-30 mb-30\"],[8],[9],[0,\"\\n\"],[4,\"accordion-list\",null,null,{\"statements\":[[4,\"if\",[[24,[\"isView\"]]],null,{\"statements\":[[0,\"    \"],[1,[28,\"config-validation-list\",null,[[\"resourceType\",\"expandAll\",\"expandFn\",\"namespaceId\",\"name\"],[\"destinationrule\",[23,1,[\"expandAll\"]],[23,2,[]],[24,[\"model\",\"namespaceId\"]],[24,[\"model\",\"name\"]]]]],false],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"\\n\"],[4,\"accordion-list-item\",null,[[\"title\",\"detail\",\"expandAll\",\"expand\"],[[28,\"t\",[\"cruDestinationRule.loadBalancer.label\"],null],[28,\"t\",[\"cruDestinationRule.loadBalancer.detail\"],null],[23,1,[\"expandAll\"]],[28,\"action\",[[23,0,[]],[23,2,[]]],null]]],{\"statements\":[[0,\"    \"],[1,[28,\"load-balancer\",null,[[\"editing\",\"trafficPolicy\"],[[24,[\"editing\"]],[24,[\"model\",\"trafficPolicy\"]]]]],false],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"\\n\"],[4,\"accordion-list-item\",null,[[\"title\",\"detail\",\"expandAll\",\"expand\"],[[28,\"t\",[\"cruDestinationRule.connectionPool.label\"],null],[28,\"t\",[\"cruDestinationRule.connectionPool.detail\"],null],[23,1,[\"expandAll\"]],[28,\"action\",[[23,0,[]],[23,2,[]]],null]]],{\"statements\":[[0,\"    \"],[1,[28,\"connection-pool\",null,[[\"editing\",\"trafficPolicy\"],[[24,[\"editing\"]],[24,[\"model\",\"trafficPolicy\"]]]]],false],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"\\n\"],[4,\"accordion-list-item\",null,[[\"title\",\"detail\",\"expandAll\",\"expand\"],[[28,\"t\",[\"cruDestinationRule.outlierDetection.label\"],null],[28,\"t\",[\"cruDestinationRule.outlierDetection.detail\"],null],[23,1,[\"expandAll\"]],[28,\"action\",[[23,0,[]],[23,2,[]]],null]]],{\"statements\":[[0,\"    \"],[1,[28,\"outlier-detection\",null,[[\"editing\",\"trafficPolicy\"],[[24,[\"editing\"]],[24,[\"model\",\"trafficPolicy\"]]]]],false],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"\\n\"],[4,\"accordion-list-item\",null,[[\"title\",\"detail\",\"expandAll\",\"expand\"],[[28,\"t\",[\"cruDestinationRule.tls.label\"],null],[28,\"t\",[\"cruDestinationRule.tls.detail\"],null],[23,1,[\"expandAll\"]],[28,\"action\",[[23,0,[]],[23,2,[]]],null]]],{\"statements\":[[0,\"    \"],[1,[28,\"traffic-policy-tls\",null,[[\"editing\",\"errors\",\"trafficPolicy\"],[[24,[\"editing\"]],[24,[\"tlsErrors\"]],[24,[\"model\",\"trafficPolicy\"]]]]],false],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"\\n\"],[4,\"if\",[[24,[\"isView\"]]],null,{\"statements\":[[0,\"    \"],[1,[28,\"form-labels-annotations\",null,[[\"classNames\",\"model\",\"editing\",\"expandAll\",\"expandFn\"],[\"accordion-wrapper\",[24,[\"model\"]],[24,[\"editing\"]],[23,1,[\"expandAll\"]],[23,2,[]]]]],false],[0,\"\\n\"]],\"parameters\":[]},null]],\"parameters\":[1,2]},null],[0,\"\\n\"],[4,\"unless\",[[24,[\"isView\"]]],null,{\"statements\":[[0,\"  \"],[1,[28,\"form-labels-annotations\",null,[[\"classNames\",\"initialLabels\",\"setLabels\",\"model\",\"editing\"],[\"accordion-wrapper\",[24,[\"model\",\"labels\"]],[28,\"action\",[[23,0,[]],\"setLabels\"],null],[24,[\"model\"]],[24,[\"editing\"]]]]],false],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"\\n\"],[4,\"if\",[[24,[\"editing\"]]],null,{\"statements\":[[0,\"  \"],[1,[28,\"top-errors\",null,[[\"errors\"],[[24,[\"errors\"]]]]],false],[0,\"\\n  \"],[1,[28,\"save-cancel\",null,[[\"editing\",\"save\",\"cancel\"],[[24,[\"isEdit\"]],[28,\"action\",[[23,0,[]],\"save\"],null],[24,[\"cancel\"]]]]],false],[0,\"\\n\"]],\"parameters\":[]},null]],\"hasEval\":false}",
    "meta": {
      "moduleName": "istio/components/cru-destination-rule/template.hbs"
    }
  });

  _exports.default = _default;
});
define("istio/components/cru-gateway/component", ["exports", "shared/mixins/view-new-edit", "istio/components/cru-gateway/template", "ui/utils/errors", "shared/mixins/child-hook", "shared/mixins/manage-labels"], function (_exports, _viewNewEdit, _template, _errors, _childHook, _manageLabels) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

  function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

  function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

  function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

  var _default = Ember.Component.extend(_viewNewEdit.default, _childHook.default, {
    intl: Ember.inject.service(),
    layout: _template.default,
    model: null,
    servers: Ember.computed.alias('model.servers'),
    namespace: Ember.computed.alias('model.namespace'),
    didInsertElement: function didInsertElement() {
      if (this.isNew && Ember.get(this, 'servers.length') === 0) {
        this.send('addServer');
      }
    },
    actions: {
      addServer: function addServer() {
        var server = {
          hosts: [''],
          port: {
            number: null,
            protocol: 'HTTP'
          }
        };
        this.servers.pushObject(server);
      },
      removeServer: function removeServer(server) {
        this.servers.removeObject(server);
      },
      setSelector: function setSelector(selector) {
        Ember.set(this, 'model.selector', selector);
      },
      setLabels: function setLabels(labels) {
        Ember.set(this, 'model.labels', (0, _manageLabels.flattenLabelArrays)(labels));
      }
    },
    willSave: function willSave() {
      var _this = this,
          _arguments = arguments;

      Ember.set(this, 'model.namespaceId', this.namespace.id || '__placeholder__');
      var self = this;
      var sup = this._super;
      var errors = [];

      if (Object.keys(this.model.selector || {}).length === 0) {
        errors.pushObject(this.intl.t('cruGateway.selector.error'));
      }

      if ((this.model.servers || []).length === 0) {
        errors.pushObject(this.intl.t('cruGateway.servers.error'));
      }

      (this.model.servers || []).forEach(function (server) {
        if (!Ember.get(server, 'port.number')) {
          errors.pushObject(_this.intl.t('cruGateway.port.number.error'));
        }

        if (!Ember.get(server, 'port.name')) {
          errors.pushObject(_this.intl.t('cruGateway.port.name.error'));
        }

        var hosts = Ember.get(server, 'hosts').filter(function (host) {
          return host;
        });

        if (Ember.get(hosts, 'length') === 0) {
          errors.pushObject(_this.intl.t('cruGateway.hosts.error'));
        }
      });
      errors.pushObjects(this.namespaceErrors || []);
      errors = errors.uniq();
      Ember.set(this, 'errors', errors);

      if (Ember.get(errors, 'length') !== 0) {
        return false;
      }

      return this.applyHooks('_beforeSaveHooks').then(function () {
        Ember.set(_this, 'model.namespaceId', _this.namespace.id);
        return sup.apply.apply(sup, [self].concat(_toConsumableArray(_arguments)));
      }).catch(function (err) {
        Ember.set(_this, 'errors', [_errors.default.stringify(err)]);
      });
    },
    doSave: function doSave(opt) {
      var _this2 = this;

      var clone = this.primaryResource.clone();
      (Ember.get(clone, 'servers') || []).forEach(function (server) {
        if (Ember.get(server, 'tls.httpsRedirect') === false && Object.keys(Ember.get(server, 'tls')).length === 1) {
          delete server['tls'];
        }
      });
      opt = opt || {};
      opt.qp = {
        '_replace': 'true'
      };
      return clone.save(opt).then(function (newData) {
        return _this2.mergeResult(newData);
      }).catch(function (err) {
        Ember.set(_this2, 'errors', [_errors.default.stringify(err)]);
      });
    }
  });

  _exports.default = _default;
});
define("istio/components/cru-gateway/template", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "6M8cF2kC",
    "block": "{\"symbols\":[\"al\",\"expandFn\",\"server\"],\"statements\":[[4,\"if\",[[24,[\"isView\"]]],null,{\"statements\":[[0,\"  \"],[7,\"section\",true],[10,\"class\",\"header clearfix\"],[8],[0,\"\\n    \"],[7,\"div\",true],[10,\"class\",\"pull-left\"],[8],[0,\"\\n      \"],[7,\"h1\",true],[8],[0,\"\\n        \"],[1,[28,\"t\",[[28,\"concat\",[\"cruGateway.title.\",[24,[\"mode\"]]],null]],[[\"name\"],[[24,[\"model\",\"displayName\"]]]]],false],[0,\"\\n      \"],[9],[0,\"\\n    \"],[9],[0,\"\\n    \"],[7,\"div\",true],[10,\"class\",\"right-buttons\"],[8],[0,\"\\n      \"],[1,[28,\"badge-state\",null,[[\"model\"],[[24,[\"model\"]]]]],false],[0,\"\\n      \"],[1,[28,\"action-menu\",null,[[\"model\",\"showPrimary\",\"classNames\",\"size\"],[[24,[\"model\"]],false,\"ml-10 inline-block\",\"sm\"]]],false],[0,\"\\n    \"],[9],[0,\"\\n  \"],[9],[0,\"\\n\\n  \"],[7,\"div\",true],[10,\"class\",\"row banner bg-info basics\"],[8],[0,\"\\n    \"],[7,\"div\",true],[10,\"class\",\"vertical-middle\"],[8],[0,\"\\n      \"],[7,\"label\",true],[10,\"class\",\"acc-label vertical-middle p-0\"],[8],[0,\"\\n        \"],[1,[28,\"t\",[\"generic.name\"],null],false],[0,\":\\n      \"],[9],[0,\"\\n\"],[4,\"copy-inline\",null,[[\"clipboardText\"],[[24,[\"model\",\"displayName\"]]]],{\"statements\":[[0,\"        \"],[1,[24,[\"model\",\"displayName\"]],false],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"    \"],[9],[0,\"\\n    \"],[7,\"div\",true],[10,\"class\",\"vertical-middle\"],[8],[0,\"\\n      \"],[7,\"label\",true],[10,\"class\",\"acc-label vertical-middle p-0\"],[8],[0,\"\\n        \"],[1,[28,\"t\",[\"servicePage.multistat.namespace\"],null],false],[0,\":\\n      \"],[9],[0,\"\\n\"],[4,\"copy-inline\",null,[[\"clipboardText\"],[[24,[\"model\",\"namespaceId\"]]]],{\"statements\":[[0,\"        \"],[1,[24,[\"model\",\"namespaceId\"]],false],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"    \"],[9],[0,\"\\n    \"],[7,\"div\",true],[10,\"class\",\"vertical-middle\"],[8],[0,\"\\n      \"],[7,\"label\",true],[10,\"class\",\"acc-label vertical-middle p-0\"],[8],[0,\"\\n        \"],[1,[28,\"t\",[\"generic.created\"],null],false],[0,\":\\n      \"],[9],[0,\"\\n      \"],[1,[28,\"date-calendar\",[[24,[\"model\",\"created\"]]],null],false],[0,\"\\n    \"],[9],[0,\"\\n  \"],[9],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[0,\"  \"],[7,\"section\",true],[10,\"class\",\"header clearfix\"],[8],[0,\"\\n    \"],[7,\"h1\",true],[8],[0,\"\\n      \"],[1,[28,\"t\",[[28,\"concat\",[\"cruGateway.title.\",[24,[\"mode\"]]],null]],[[\"name\"],[[24,[\"model\",\"displayName\"]]]]],false],[0,\"\\n    \"],[9],[0,\"\\n  \"],[9],[0,\"\\n  \"],[7,\"section\",true],[10,\"class\",\"horizontal-form container-fluid\"],[8],[0,\"\\n    \"],[7,\"div\",true],[10,\"class\",\"row\"],[8],[0,\"\\n      \"],[7,\"div\",true],[10,\"class\",\"col span-6\"],[8],[0,\"\\n        \"],[1,[28,\"form-name-description\",null,[[\"model\",\"namePlaceholder\",\"descriptionShown\",\"nameDisabled\"],[[24,[\"model\"]],\"cruGateway.name.placeholder\",false,[24,[\"isEdit\"]]]]],false],[0,\"\\n      \"],[9],[0,\"\\n      \"],[7,\"div\",true],[10,\"class\",\"col span-6\"],[8],[0,\"\\n        \"],[1,[28,\"form-namespace\",null,[[\"namespace\",\"errors\",\"registerHook\",\"editing\"],[[24,[\"namespace\"]],[24,[\"namespaceErrors\"]],[28,\"action\",[[23,0,[]],\"registerHook\"],null],[24,[\"isNew\"]]]]],false],[0,\"\\n      \"],[9],[0,\"\\n    \"],[9],[0,\"\\n  \"],[9],[0,\"\\n\"]],\"parameters\":[]}],[0,\"\\n\"],[7,\"hr\",true],[8],[9],[0,\"\\n\\n\"],[7,\"div\",true],[10,\"class\",\"row\"],[8],[0,\"\\n  \"],[7,\"div\",true],[10,\"class\",\"col span-12\"],[8],[0,\"\\n    \"],[7,\"div\",true],[10,\"class\",\"clearfix\"],[8],[0,\"\\n      \"],[7,\"label\",true],[10,\"class\",\"acc-label\"],[8],[1,[28,\"t\",[\"cruGateway.selector.label\"],null],false],[9],[0,\"\\n    \"],[9],[0,\"\\n\\n    \"],[1,[28,\"form-labels\",null,[[\"initialLabels\",\"editing\",\"addActionLabel\",\"setLabels\"],[[24,[\"model\",\"selector\"]],[24,[\"editing\"]],\"cruGateway.selector.add\",[28,\"action\",[[23,0,[]],\"setSelector\"],null]]]],false],[0,\"\\n  \"],[9],[0,\"\\n\"],[9],[0,\"\\n\\n\"],[7,\"hr\",true],[8],[9],[0,\"\\n\\n\"],[7,\"section\",true],[10,\"class\",\"horizontal-form container-fluid mb-30\"],[8],[0,\"\\n  \"],[7,\"div\",true],[10,\"class\",\"row mt-30 mb-10\"],[8],[0,\"\\n    \"],[7,\"label\",true],[10,\"class\",\"acc-label\"],[8],[0,\"\\n      \"],[1,[28,\"t\",[\"cruGateway.servers.label\"],null],false],[0,\"\\n    \"],[9],[0,\"\\n  \"],[9],[0,\"\\n\\n\"],[4,\"each\",[[24,[\"servers\"]]],null,{\"statements\":[[0,\"    \"],[1,[28,\"gateway-server\",null,[[\"editing\",\"server\",\"removeServer\"],[[24,[\"editing\"]],[23,3,[]],[28,\"action\",[[23,0,[]],\"removeServer\"],null]]]],false],[0,\"\\n\"]],\"parameters\":[3]},{\"statements\":[[0,\"    \"],[7,\"div\",true],[10,\"class\",\"p-20 text-center text-muted\"],[8],[0,\"\\n      \"],[1,[28,\"t\",[\"cruGateway.servers.noServers\"],null],false],[0,\"\\n    \"],[9],[0,\"\\n\"]],\"parameters\":[]}],[0,\"\\n\"],[4,\"if\",[[24,[\"editing\"]]],null,{\"statements\":[[0,\"    \"],[7,\"div\",true],[10,\"class\",\"row\"],[8],[0,\"\\n      \"],[7,\"button\",false],[12,\"class\",\"btn bg-link icon-btn pull-right\"],[3,\"action\",[[23,0,[]],\"addServer\"]],[8],[0,\"\\n        \"],[7,\"span\",true],[10,\"class\",\"darken\"],[8],[0,\"\\n          \"],[7,\"i\",true],[10,\"class\",\"icon icon-plus text-small\"],[8],[9],[0,\"\\n        \"],[9],[0,\"\\n        \"],[7,\"span\",true],[8],[0,\"\\n          \"],[1,[28,\"t\",[\"cruGateway.servers.add\"],null],false],[0,\"\\n        \"],[9],[0,\"\\n      \"],[9],[0,\"\\n    \"],[9],[0,\"\\n\"]],\"parameters\":[]},null],[9],[0,\"\\n\\n\"],[4,\"if\",[[24,[\"isView\"]]],null,{\"statements\":[[4,\"accordion-list\",null,null,{\"statements\":[[0,\"    \"],[1,[28,\"config-validation-list\",null,[[\"resourceType\",\"expandAll\",\"expandFn\",\"namespaceId\",\"name\"],[\"gateway\",[23,1,[\"expandAll\"]],[23,2,[]],[24,[\"model\",\"namespaceId\"]],[24,[\"model\",\"name\"]]]]],false],[0,\"\\n\\n    \"],[1,[28,\"form-labels-annotations\",null,[[\"classNames\",\"model\",\"editing\",\"expandAll\",\"expandFn\"],[\"accordion-wrapper\",[24,[\"model\"]],[24,[\"editing\"]],[23,1,[\"expandAll\"]],[23,2,[]]]]],false],[0,\"\\n\"]],\"parameters\":[1,2]},null]],\"parameters\":[]},{\"statements\":[[0,\"  \"],[1,[28,\"form-labels-annotations\",null,[[\"classNames\",\"initialLabels\",\"setLabels\",\"model\",\"editing\"],[\"accordion-wrapper\",[24,[\"model\",\"labels\"]],[28,\"action\",[[23,0,[]],\"setLabels\"],null],[24,[\"model\"]],[24,[\"editing\"]]]]],false],[0,\"\\n\"]],\"parameters\":[]}],[0,\"\\n\"],[4,\"if\",[[24,[\"editing\"]]],null,{\"statements\":[[0,\"  \"],[1,[28,\"top-errors\",null,[[\"errors\"],[[24,[\"errors\"]]]]],false],[0,\"\\n  \"],[1,[28,\"save-cancel\",null,[[\"editing\",\"save\",\"cancel\"],[[24,[\"isEdit\"]],[28,\"action\",[[23,0,[]],\"save\"],null],[24,[\"cancel\"]]]]],false],[0,\"\\n\"]],\"parameters\":[]},null]],\"hasEval\":false}",
    "meta": {
      "moduleName": "istio/components/cru-gateway/template.hbs"
    }
  });

  _exports.default = _default;
});
define.alias("shared/components/cru-node-pools/component", "istio/components/cru-node-pools/component");
define.alias("shared/components/cru-private-registry/component", "istio/components/cru-private-registry/component");
define("istio/components/cru-virtual-service/component", ["exports", "shared/mixins/view-new-edit", "istio/components/cru-virtual-service/template", "ui/utils/errors", "shared/mixins/child-hook", "shared/mixins/manage-labels", "shared/utils/util"], function (_exports, _viewNewEdit, _template, _errors, _childHook, _manageLabels, _util) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

  function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

  function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

  function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

  var _default = Ember.Component.extend(_viewNewEdit.default, _childHook.default, {
    intl: Ember.inject.service(),
    layout: _template.default,
    model: null,
    httpRoutes: Ember.computed.alias('model.http'),
    namespace: Ember.computed.alias('model.namespace'),
    didInsertElement: function didInsertElement() {
      if (this.isNew && Ember.get(this, 'httpRoutes.length') === 0) {
        this.send('addHttpRoute');
      }
    },
    actions: {
      addHttpRoute: function addHttpRoute() {
        var httpRoute = {
          route: [],
          fault: {
            abort: {},
            delay: {}
          },
          redirect: {},
          rewrite: {},
          mirror: {},
          retries: {}
        };
        this.httpRoutes.pushObject(httpRoute);
      },
      removeHttpRoute: function removeHttpRoute(httpRoute) {
        this.httpRoutes.removeObject(httpRoute);
      },
      setLabels: function setLabels(labels) {
        Ember.set(this, 'model.labels', (0, _manageLabels.flattenLabelArrays)(labels));
      },
      setHosts: function setHosts(hosts) {
        Ember.set(this, 'model.hosts', hosts);
      },
      setGateways: function setGateways(gateways) {
        Ember.set(this, 'model.gateways', gateways);
      }
    },
    willSave: function willSave() {
      var _this = this,
          _arguments = arguments;

      Ember.set(this, 'model.namespaceId', this.namespace.id || '__placeholder__');
      var self = this;
      var sup = this._super;
      var errors = [];

      if ((this.model.hosts || []).filter(function (h) {
        return h;
      }).length === 0) {
        errors.pushObject(this.intl.t('cruVirtualService.hosts.error'));
      }

      (this.model.http || []).forEach(function (route) {
        if (Ember.get(route, 'route.length') > 0) {
          (route.route || []).forEach(function (destination) {
            if (!Ember.get(destination, 'destination.host')) {
              errors.pushObject(_this.intl.t('cruVirtualService.http.routes.destination.host.error'));
            }

            if (!destination.weight && destination.weight !== 0) {
              errors.pushObject(_this.intl.t('cruVirtualService.http.routes.destination.weight.error'));
            }
          });

          if (Ember.get(route, 'redirect.uri') || Ember.get(route, 'redirect.authority')) {
            errors.pushObject(_this.intl.t('cruVirtualService.http.routes.redirect.error'));
          }
        }

        if (Ember.get(route, 'match.length') > 0) {
          (Ember.get(route, 'match') || []).forEach(function (match) {
            if (Object.keys(match || {}).length === 0) {
              errors.pushObject(_this.intl.t('cruVirtualService.http.routes.matches.error'));
            }
          });
        }
      });
      errors.pushObjects(this.namespaceErrors || []);
      errors = errors.uniq();
      Ember.set(this, 'errors', errors);

      if (Ember.get(errors, 'length') !== 0) {
        return false;
      }

      return this.applyHooks('_beforeSaveHooks').then(function () {
        Ember.set(_this, 'model.namespaceId', _this.namespace.id);
        return sup.apply.apply(sup, [self].concat(_toConsumableArray(_arguments)));
      }).catch(function (err) {
        Ember.set(_this, 'errors', [_errors.default.stringify(err)]);
      });
    },
    doSave: function doSave(opt) {
      var _this2 = this;

      var clone = this.primaryResource.clone();
      var filteredHttp = [];

      if (Ember.get(clone, 'gateways.length') === 0) {
        delete clone['gateways'];
      }

      if (Ember.get(clone, 'hosts.length') === 0) {
        delete clone['hosts'];
      }

      (Ember.get(clone, 'http') || []).forEach(function (route) {
        (Ember.get(route, 'route') || []).forEach(function (destination) {
          var subset = Ember.get(destination, 'destination.subset');

          if (!subset) {
            delete destination.destination['subset'];
          }
        });
        var filtered = (0, _util.removeEmpty)(route);
        filtered = (0, _util.removeEmpty)(filtered);
        filtered = (0, _util.removeEmpty)(filtered);
        filteredHttp.pushObject(filtered);
      });
      Ember.set(clone, 'http', filteredHttp);
      opt = opt || {};
      opt.qp = {
        '_replace': 'true'
      };
      return clone.save(opt).then(function (newData) {
        return _this2.mergeResult(newData);
      }).catch(function (err) {
        Ember.set(_this2, 'errors', [_errors.default.stringify(err)]);
      });
    }
  });

  _exports.default = _default;
});
define("istio/components/cru-virtual-service/template", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "QJIT+7ym",
    "block": "{\"symbols\":[\"al\",\"expandFn\",\"route\",\"index\",\"c\",\"row\",\"c\",\"row\"],\"statements\":[[4,\"if\",[[24,[\"isView\"]]],null,{\"statements\":[[0,\"  \"],[7,\"section\",true],[10,\"class\",\"header clearfix\"],[8],[0,\"\\n    \"],[7,\"div\",true],[10,\"class\",\"pull-left\"],[8],[0,\"\\n      \"],[7,\"h1\",true],[8],[0,\"\\n        \"],[1,[28,\"t\",[[28,\"concat\",[\"cruVirtualService.title.\",[24,[\"mode\"]]],null]],[[\"name\"],[[24,[\"model\",\"displayName\"]]]]],false],[0,\"\\n      \"],[9],[0,\"\\n    \"],[9],[0,\"\\n    \"],[7,\"div\",true],[10,\"class\",\"right-buttons\"],[8],[0,\"\\n      \"],[1,[28,\"badge-state\",null,[[\"model\"],[[24,[\"model\"]]]]],false],[0,\"\\n      \"],[1,[28,\"action-menu\",null,[[\"model\",\"showPrimary\",\"classNames\",\"size\"],[[24,[\"model\"]],false,\"ml-10 inline-block\",\"sm\"]]],false],[0,\"\\n    \"],[9],[0,\"\\n  \"],[9],[0,\"\\n\\n  \"],[7,\"div\",true],[10,\"class\",\"row banner bg-info basics\"],[8],[0,\"\\n    \"],[7,\"div\",true],[10,\"class\",\"vertical-middle\"],[8],[0,\"\\n      \"],[7,\"label\",true],[10,\"class\",\"acc-label vertical-middle p-0\"],[8],[0,\"\\n        \"],[1,[28,\"t\",[\"generic.name\"],null],false],[0,\":\\n      \"],[9],[0,\"\\n\"],[4,\"copy-inline\",null,[[\"clipboardText\"],[[24,[\"model\",\"displayName\"]]]],{\"statements\":[[0,\"        \"],[1,[24,[\"model\",\"displayName\"]],false],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"    \"],[9],[0,\"\\n    \"],[7,\"div\",true],[10,\"class\",\"vertical-middle\"],[8],[0,\"\\n      \"],[7,\"label\",true],[10,\"class\",\"acc-label vertical-middle p-0\"],[8],[0,\"\\n        \"],[1,[28,\"t\",[\"servicePage.multistat.namespace\"],null],false],[0,\":\\n      \"],[9],[0,\"\\n\"],[4,\"copy-inline\",null,[[\"clipboardText\"],[[24,[\"model\",\"namespaceId\"]]]],{\"statements\":[[0,\"        \"],[1,[24,[\"model\",\"namespaceId\"]],false],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"    \"],[9],[0,\"\\n    \"],[7,\"div\",true],[10,\"class\",\"vertical-middle\"],[8],[0,\"\\n      \"],[7,\"label\",true],[10,\"class\",\"acc-label vertical-middle p-0\"],[8],[0,\"\\n        \"],[1,[28,\"t\",[\"generic.created\"],null],false],[0,\":\\n      \"],[9],[0,\"\\n      \"],[1,[28,\"date-calendar\",[[24,[\"model\",\"created\"]]],null],false],[0,\"\\n    \"],[9],[0,\"\\n  \"],[9],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[0,\"  \"],[7,\"section\",true],[10,\"class\",\"header clearfix\"],[8],[0,\"\\n    \"],[7,\"h1\",true],[8],[0,\"\\n      \"],[1,[28,\"t\",[[28,\"concat\",[\"cruVirtualService.title.\",[24,[\"mode\"]]],null]],[[\"name\"],[[24,[\"model\",\"displayName\"]]]]],false],[0,\"\\n    \"],[9],[0,\"\\n  \"],[9],[0,\"\\n  \"],[7,\"section\",true],[10,\"class\",\"horizontal-form container-fluid\"],[8],[0,\"\\n    \"],[7,\"div\",true],[10,\"class\",\"row\"],[8],[0,\"\\n      \"],[7,\"div\",true],[10,\"class\",\"col span-6\"],[8],[0,\"\\n        \"],[1,[28,\"form-name-description\",null,[[\"model\",\"namePlaceholder\",\"descriptionShown\",\"nameDisabled\"],[[24,[\"model\"]],\"cruVirtualService.name.placeholder\",false,[24,[\"isEdit\"]]]]],false],[0,\"\\n      \"],[9],[0,\"\\n      \"],[7,\"div\",true],[10,\"class\",\"col span-6\"],[8],[0,\"\\n        \"],[1,[28,\"form-namespace\",null,[[\"namespace\",\"errors\",\"registerHook\",\"editing\"],[[24,[\"namespace\"]],[24,[\"namespaceErrors\"]],[28,\"action\",[[23,0,[]],\"registerHook\"],null],[24,[\"isNew\"]]]]],false],[0,\"\\n      \"],[9],[0,\"\\n    \"],[9],[0,\"\\n  \"],[9],[0,\"\\n\"]],\"parameters\":[]}],[0,\"\\n\"],[7,\"hr\",true],[8],[9],[0,\"\\n\\n\"],[7,\"div\",true],[10,\"class\",\"row\"],[8],[0,\"\\n  \"],[7,\"div\",true],[10,\"class\",\"col span-6\"],[8],[0,\"\\n\"],[4,\"form-value-array\",null,[[\"editing\",\"required\",\"valueLabel\",\"addActionLabel\",\"changed\",\"initialValues\",\"showProTip\",\"addButtonClass\",\"autoAddIfEmpty\",\"defaultValue\"],[[28,\"not\",[[24,[\"isView\"]]],null],true,\"cruVirtualService.hosts.label\",\"cruVirtualService.hosts.add\",[28,\"action\",[[23,0,[]],\"setHosts\"],null],[24,[\"model\",\"hosts\"]],false,\"btn bg-link icon-btn\",true,null]],{\"statements\":[[4,\"input-or-display\",null,[[\"editable\",\"value\"],[[24,[\"editing\"]],[23,8,[\"value\"]]]],{\"statements\":[[0,\"        \"],[1,[28,\"istio-host-select\",null,[[\"showLabel\",\"namespaceId\",\"value\",\"inputClass\"],[false,[24,[\"namespace\",\"id\"]],[23,8,[\"value\"]],\"input-sm\"]]],false],[0,\"\\n\"]],\"parameters\":[]},null]],\"parameters\":[7,8]},null],[0,\"  \"],[9],[0,\"\\n  \"],[7,\"div\",true],[10,\"class\",\"col span-6\"],[8],[0,\"\\n\"],[4,\"form-value-array\",null,[[\"editing\",\"valueLabel\",\"addActionLabel\",\"changed\",\"addButtonClass\",\"initialValues\",\"showProTip\",\"defaultValue\"],[[28,\"not\",[[24,[\"isView\"]]],null],\"cruVirtualService.gateways.label\",\"cruVirtualService.gateways.add\",[28,\"action\",[[23,0,[]],\"setGateways\"],null],\"btn bg-link icon-btn\",[24,[\"model\",\"gateways\"]],false,null]],{\"statements\":[[4,\"input-or-display\",null,[[\"editable\",\"value\"],[[24,[\"editing\"]],[23,6,[\"value\"]]]],{\"statements\":[[0,\"        \"],[1,[28,\"istio-gateway-select\",null,[[\"showLabel\",\"namespaceId\",\"value\",\"inputClass\"],[false,[24,[\"namespace\",\"id\"]],[23,6,[\"value\"]],\"input-sm\"]]],false],[0,\"\\n\"]],\"parameters\":[]},null]],\"parameters\":[5,6]},null],[0,\"  \"],[9],[0,\"\\n\"],[9],[0,\"\\n\\n\"],[7,\"hr\",true],[8],[9],[0,\"\\n\\n\"],[7,\"section\",true],[10,\"class\",\"horizontal-form container-fluid mb-30\"],[8],[0,\"\\n  \"],[7,\"div\",true],[10,\"class\",\"row mt-30 mb-10\"],[8],[0,\"\\n    \"],[7,\"label\",true],[10,\"class\",\"acc-label\"],[8],[0,\"\\n      \"],[1,[28,\"t\",[\"cruVirtualService.http.routes.label\"],null],false],[0,\"\\n    \"],[9],[0,\"\\n  \"],[9],[0,\"\\n\\n\"],[4,\"each\",[[24,[\"httpRoutes\"]]],null,{\"statements\":[[0,\"    \"],[1,[28,\"virtual-service-http-route-row\",null,[[\"editing\",\"isFirst\",\"isLast\",\"route\",\"routes\",\"hosts\",\"isNew\",\"namespace\",\"removeRoute\"],[[24,[\"editing\"]],[28,\"eq\",[[23,3,[]],[24,[\"httpRoutes\",\"firstObject\"]]],null],[28,\"eq\",[[23,3,[]],[24,[\"httpRoutes\",\"lastObject\"]]],null],[23,3,[]],[24,[\"httpRoutes\"]],[24,[\"model\",\"hosts\"]],[24,[\"isNew\"]],[24,[\"namespace\"]],[28,\"action\",[[23,0,[]],\"removeHttpRoute\"],null]]]],false],[0,\"\\n\"]],\"parameters\":[3,4]},{\"statements\":[[0,\"    \"],[7,\"div\",true],[10,\"class\",\"p-20 text-center text-muted\"],[8],[0,\"\\n      \"],[1,[28,\"t\",[\"cruVirtualService.http.routes.noRoutes\"],null],false],[0,\"\\n    \"],[9],[0,\"\\n\"]],\"parameters\":[]}],[0,\"\\n\"],[4,\"if\",[[24,[\"editing\"]]],null,{\"statements\":[[0,\"    \"],[7,\"div\",true],[10,\"class\",\"row\"],[8],[0,\"\\n      \"],[7,\"button\",false],[12,\"class\",\"btn bg-link icon-btn pull-right\"],[3,\"action\",[[23,0,[]],\"addHttpRoute\"]],[8],[0,\"\\n        \"],[7,\"span\",true],[10,\"class\",\"darken\"],[8],[0,\"\\n          \"],[7,\"i\",true],[10,\"class\",\"icon icon-plus text-small\"],[8],[9],[0,\"\\n        \"],[9],[0,\"\\n        \"],[7,\"span\",true],[8],[0,\"\\n          \"],[1,[28,\"t\",[\"cruVirtualService.http.routes.addRouteLabel\"],null],false],[0,\"\\n        \"],[9],[0,\"\\n      \"],[9],[0,\"\\n    \"],[9],[0,\"\\n\"]],\"parameters\":[]},null],[9],[0,\"\\n\\n\"],[4,\"if\",[[24,[\"isView\"]]],null,{\"statements\":[[4,\"accordion-list\",null,null,{\"statements\":[[0,\"    \"],[1,[28,\"config-validation-list\",null,[[\"resourceType\",\"expandAll\",\"expandFn\",\"namespaceId\",\"name\"],[\"virtualservice\",[23,1,[\"expandAll\"]],[23,2,[]],[24,[\"model\",\"namespaceId\"]],[24,[\"model\",\"name\"]]]]],false],[0,\"\\n\\n    \"],[1,[28,\"form-labels-annotations\",null,[[\"classNames\",\"model\",\"editing\",\"expandAll\",\"expandFn\"],[\"accordion-wrapper\",[24,[\"model\"]],[24,[\"editing\"]],[23,1,[\"expandAll\"]],[23,2,[]]]]],false],[0,\"\\n\"]],\"parameters\":[1,2]},null]],\"parameters\":[]},{\"statements\":[[0,\"  \"],[1,[28,\"form-labels-annotations\",null,[[\"classNames\",\"initialLabels\",\"setLabels\",\"model\",\"editing\"],[\"accordion-wrapper\",[24,[\"model\",\"labels\"]],[28,\"action\",[[23,0,[]],\"setLabels\"],null],[24,[\"model\"]],[24,[\"editing\"]]]]],false],[0,\"\\n\"]],\"parameters\":[]}],[0,\"\\n\"],[4,\"if\",[[24,[\"editing\"]]],null,{\"statements\":[[0,\"  \"],[1,[28,\"top-errors\",null,[[\"errors\"],[[24,[\"errors\"]]]]],false],[0,\"\\n  \"],[1,[28,\"save-cancel\",null,[[\"editing\",\"save\",\"cancel\"],[[24,[\"isEdit\"]],[28,\"action\",[[23,0,[]],\"save\"],null],[24,[\"cancel\"]]]]],false],[0,\"\\n\"]],\"parameters\":[]},null]],\"hasEval\":false}",
    "meta": {
      "moduleName": "istio/components/cru-virtual-service/template.hbs"
    }
  });

  _exports.default = _default;
});
define.alias("shared/components/custom-catalog/component", "istio/components/custom-catalog/component");
define("istio/components/destination-rule-row/component", ["exports", "istio/components/destination-rule-row/template"], function (_exports, _template) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Component.extend({
    layout: _template.default,
    model: null,
    tagName: ''
  });

  _exports.default = _default;
});
define("istio/components/destination-rule-row/template", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "W7xSpHu1",
    "block": "{\"symbols\":[],\"statements\":[[7,\"tr\",true],[10,\"class\",\"main-row\"],[8],[0,\"\\n  \"],[7,\"td\",true],[10,\"valign\",\"middle\"],[10,\"class\",\"row-check\"],[10,\"style\",\"padding-top: 2px;\"],[8],[0,\"\\n    \"],[1,[28,\"check-box\",null,[[\"nodeId\"],[[24,[\"model\",\"id\"]]]]],false],[0,\"\\n  \"],[9],[0,\"\\n  \"],[7,\"td\",true],[11,\"data-title\",[29,[[24,[\"dt\",\"state\"]]]]],[10,\"class\",\"state\"],[8],[0,\"\\n    \"],[1,[28,\"badge-state\",null,[[\"model\"],[[24,[\"model\"]]]]],false],[0,\"\\n  \"],[9],[0,\"\\n  \"],[7,\"td\",true],[11,\"data-title\",[29,[[24,[\"dt\",\"name\"]]]]],[10,\"class\",\"clip\"],[8],[0,\"\\n\"],[4,\"link-to\",null,[[\"route\",\"model\"],[\"destination-rule.detail\",[24,[\"model\",\"id\"]]]],{\"statements\":[[0,\"      \"],[1,[24,[\"model\",\"displayName\"]],false],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"  \"],[9],[0,\"\\n  \"],[7,\"td\",true],[11,\"data-title\",[29,[[24,[\"dt\",\"host\"]]]]],[10,\"class\",\"clip\"],[8],[0,\"\\n    \"],[1,[24,[\"model\",\"host\"]],false],[0,\"\\n  \"],[9],[0,\"\\n  \"],[7,\"td\",true],[11,\"data-title\",[29,[[24,[\"dt\",\"subsets\"]]]]],[10,\"class\",\"clip\"],[8],[0,\"\\n\"],[4,\"tooltip-element\",null,[[\"type\",\"tooltipTemplate\",\"model\",\"inlineBlock\"],[\"tooltip-basic\",\"tooltip-multi-lines\",[24,[\"model\",\"displaySubsets\"]],true]],{\"statements\":[[0,\"      \"],[1,[24,[\"model\",\"displaySubsetsString\"]],false],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"  \"],[9],[0,\"\\n  \"],[7,\"td\",true],[11,\"data-title\",[29,[[24,[\"dt\",\"created\"]]]]],[10,\"class\",\"text-right pr-20\"],[8],[0,\"\\n    \"],[1,[28,\"date-calendar\",[[24,[\"model\",\"created\"]]],null],false],[0,\"\\n  \"],[9],[0,\"\\n  \"],[7,\"td\",true],[11,\"data-title\",[29,[[24,[\"dt\",\"actions\"]]]]],[10,\"class\",\"actions\"],[8],[0,\"\\n    \"],[1,[28,\"action-menu\",null,[[\"model\"],[[24,[\"model\"]]]]],false],[0,\"\\n  \"],[9],[0,\"\\n\"],[9]],\"hasEval\":false}",
    "meta": {
      "moduleName": "istio/components/destination-rule-row/template.hbs"
    }
  });

  _exports.default = _default;
});
define("istio/components/destination-rule-subset-row/component", ["exports", "istio/components/destination-rule-subset-row/template"], function (_exports, _template) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Component.extend({
    layout: _template.default,
    editing: true,
    subset: null,
    actions: {
      removeSubset: function removeSubset(subset) {
        if (this.removeSubset) {
          this.removeSubset(subset);
        }
      },
      setLabels: function setLabels(labels) {
        Ember.set(this, 'subset.labels', labels);
      }
    }
  });

  _exports.default = _default;
});
define("istio/components/destination-rule-subset-row/template", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "YapJVMv5",
    "block": "{\"symbols\":[],\"statements\":[[7,\"div\",true],[10,\"class\",\"box mb-10\"],[8],[0,\"\\n\"],[4,\"if\",[[28,\"and\",[[24,[\"editing\"]]],null]],null,{\"statements\":[[0,\"    \"],[7,\"div\",true],[10,\"class\",\"row\"],[8],[0,\"\\n      \"],[7,\"div\",true],[10,\"class\",\"pull-right\"],[8],[0,\"\\n        \"],[7,\"button\",false],[12,\"class\",\"btn bg-transparent text-small vertical-middle\"],[3,\"action\",[[23,0,[]],\"removeSubset\",[24,[\"subset\"]]]],[8],[0,\"\\n          \"],[1,[28,\"t\",[\"cruDestinationRule.subsets.removeSubsetLabel\"],null],false],[0,\"\\n        \"],[9],[0,\"\\n      \"],[9],[0,\"\\n    \"],[9],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"\\n  \"],[7,\"div\",true],[10,\"class\",\"row\"],[8],[0,\"\\n    \"],[7,\"div\",true],[10,\"class\",\"col span-6\"],[8],[0,\"\\n      \"],[7,\"label\",true],[10,\"class\",\"pb-5 acc-label\"],[11,\"for\",[29,[[28,\"concat\",[[24,[\"elementId\"]],\"-input-subsets-name\"],null]]]],[8],[0,\"\\n        \"],[1,[28,\"t\",[\"cruDestinationRule.subsets.name.label\"],null],false],[0,\"\\n\"],[4,\"if\",[[24,[\"editing\"]]],null,{\"statements\":[[0,\"          \"],[1,[22,\"field-required\"],false],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"      \"],[9],[0,\"\\n\"],[4,\"input-or-display\",null,[[\"editable\",\"value\",\"classesForDisplay\"],[[24,[\"editing\"]],[24,[\"subset\",\"name\"]],\"text-muted form-control-static\"]],{\"statements\":[[0,\"        \"],[1,[28,\"input\",null,[[\"id\",\"class\",\"type\",\"value\",\"placeholder\"],[[28,\"concat\",[[24,[\"elementId\"]],\"-input-subsets-name\"],null],\"form-control\",\"text\",[24,[\"subset\",\"name\"]],[28,\"t\",[\"cruDestinationRule.subsets.name.placeholder\"],null]]]],false],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"    \"],[9],[0,\"\\n  \"],[9],[0,\"\\n\\n  \"],[7,\"div\",true],[10,\"class\",\"row\"],[8],[0,\"\\n    \"],[7,\"div\",true],[10,\"class\",\"col span-12\"],[8],[0,\"\\n      \"],[1,[28,\"form-labels\",null,[[\"initialLabels\",\"editing\",\"setLabels\"],[[24,[\"subset\",\"labels\"]],[24,[\"editing\"]],[28,\"action\",[[23,0,[]],\"setLabels\"],null]]]],false],[0,\"\\n    \"],[9],[0,\"\\n  \"],[9],[0,\"\\n\"],[9],[0,\"\\n\"]],\"hasEval\":false}",
    "meta": {
      "moduleName": "istio/components/destination-rule-subset-row/template.hbs"
    }
  });

  _exports.default = _default;
});
define.alias("shared/components/drain-node/component", "istio/components/drain-node/component");
define.alias("ember-flatpickr/components/ember-flatpickr", "istio/components/ember-flatpickr");
define.alias("ember-wormhole/components/ember-wormhole", "istio/components/ember-wormhole");
define.alias("shared/components/empty-table/component", "istio/components/empty-table/component");
define.alias("shared/components/error-sub-row/component", "istio/components/error-sub-row/component");
define.alias("shared/components/field-required/component", "istio/components/field-required/component");
define.alias("shared/components/form-array/component", "istio/components/form-array/component");
define.alias("shared/components/form-auth-cloud-credential/component", "istio/components/form-auth-cloud-credential/component");
define.alias("shared/components/form-certificate-row/component", "istio/components/form-certificate-row/component");
define.alias("shared/components/form-contextual-select-array/component", "istio/components/form-contextual-select-array/component");
define.alias("shared/components/form-count/component", "istio/components/form-count/component");
define.alias("shared/components/form-engine-opts/component", "istio/components/form-engine-opts/component");
define.alias("shared/components/form-gke-taints/component", "istio/components/form-gke-taints/component");
define.alias("shared/components/form-global-resource-roles/component", "istio/components/form-global-resource-roles/component");
define.alias("shared/components/form-ingress-backends/component", "istio/components/form-ingress-backends/component");
define.alias("shared/components/form-ingress-rows/component", "istio/components/form-ingress-rows/component");
define.alias("shared/components/form-ingress-rule/component", "istio/components/form-ingress-rule/component");
define.alias("shared/components/form-key-value/component", "istio/components/form-key-value/component");
define.alias("shared/components/form-labels-annotations/component", "istio/components/form-labels-annotations/component");
define("istio/components/form-labels/component", ["exports", "shared/mixins/manage-labels", "istio/components/form-labels/template", "jquery"], function (_exports, _manageLabels, _template, _jquery) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Component.extend(_manageLabels.default, {
    layout: _template.default,
    classNames: ['accordion-wrapper'],
    detailKey: 'formUserLabels.detail',
    addActionLabel: 'formUserLabels.addAction',
    // Inputs
    initialLabels: null,
    init: function init() {
      this._super.apply(this, arguments);

      this.initLabels(this.get('initialLabels'), 'user', null, this.get('readonlyLabels'));
      this.labelsChanged();
    },
    actions: {
      addUserLabel: function addUserLabel() {
        var _this = this;

        this._super();

        Ember.run.next(function () {
          if (_this.isDestroyed || _this.isDestroying) {
            return;
          }

          (0, _jquery.default)('INPUT.key').last()[0].focus();
        });
      }
    },
    updateLabels: function updateLabels(labels) {
      if (this.setLabels) {
        var out = {};
        labels.forEach(function (label) {
          if (label.value) {
            out[label.key] = label.value;
          }
        });
        this.setLabels(out);
      }
    }
  });

  _exports.default = _default;
});
define("istio/components/form-labels/template", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "qrkJ6J1Q",
    "block": "{\"symbols\":[\"label\"],\"statements\":[[4,\"if\",[[24,[\"editing\"]]],null,{\"statements\":[[4,\"if\",[[24,[\"userLabelArray\",\"length\"]]],null,{\"statements\":[[0,\"    \"],[7,\"table\",true],[10,\"class\",\"table fixed no-lines mt-20\"],[8],[0,\"\\n      \"],[7,\"tr\",true],[10,\"class\",\"hidden-xs hidden-sm\"],[8],[0,\"\\n        \"],[7,\"th\",true],[8],[0,\"\\n          \"],[1,[28,\"t\",[\"formUserLabels.key.label\"],null],false],[1,[22,\"field-required\"],false],[0,\"\\n        \"],[9],[0,\"\\n        \"],[7,\"th\",true],[10,\"width\",\"30\"],[8],[0,\"\\n           \\n        \"],[9],[0,\"\\n        \"],[7,\"th\",true],[8],[0,\"\\n          \"],[1,[28,\"t\",[\"formUserLabels.value.label\"],null],false],[1,[22,\"field-required\"],false],[0,\"\\n        \"],[9],[0,\"\\n        \"],[7,\"th\",true],[10,\"width\",\"40\"],[8],[0,\"\\n           \\n        \"],[9],[0,\"\\n      \"],[9],[0,\"\\n\"],[4,\"each\",[[24,[\"userLabelArray\"]]],null,{\"statements\":[[0,\"        \"],[7,\"tr\",true],[8],[0,\"\\n          \"],[7,\"td\",true],[10,\"data-title\",\"key\"],[8],[0,\"\\n            \"],[1,[28,\"input-paste\",null,[[\"pasted\",\"class\",\"type\",\"value\",\"placeholder\",\"disabled\"],[[28,\"action\",[[23,0,[]],\"pastedLabels\"],null],\"form-control input-sm key\",\"text\",[23,1,[\"key\"]],\"formUserLabels.key.placeholder\",[28,\"eq\",[[23,1,[\"readonly\"]],true],null]]]],false],[0,\"\\n          \"],[9],[0,\"\\n\\n          \"],[7,\"td\",true],[10,\"class\",\"text-center\"],[8],[0,\"\\n            \"],[7,\"p\",true],[10,\"class\",\"input-sm\"],[8],[0,\"\\n              \"],[1,[28,\"t\",[\"formUserLabels.separator\"],null],false],[0,\"\\n            \"],[9],[0,\"\\n          \"],[9],[0,\"\\n\\n          \"],[7,\"td\",true],[10,\"data-title\",\"label\"],[8],[0,\"\\n            \"],[1,[28,\"input\",null,[[\"class\",\"type\",\"value\",\"placeholder\",\"disabled\"],[\"form-control input-sm\",\"text\",[23,1,[\"value\"]],[28,\"t\",[\"formUserLabels.value.placeholder\"],null],[28,\"eq\",[[23,1,[\"readonly\"]],true],null]]]],false],[0,\"\\n          \"],[9],[0,\"\\n\\n          \"],[7,\"td\",true],[10,\"class\",\"text-right\"],[8],[0,\"\\n            \"],[7,\"button\",false],[12,\"class\",\"btn bg-primary btn-sm\"],[12,\"disabled\",[28,\"eq\",[[23,1,[\"readonly\"]],true],null]],[3,\"action\",[[23,0,[]],\"removeLabel\",[23,1,[]]]],[8],[0,\"\\n              \"],[7,\"i\",true],[10,\"class\",\"icon icon-minus\"],[8],[9],[0,\"\\n              \"],[7,\"span\",true],[10,\"class\",\"sr-only\"],[8],[0,\"\\n                \"],[1,[28,\"t\",[\"generic.remove\"],null],false],[0,\"\\n              \"],[9],[0,\"\\n            \"],[9],[0,\"\\n          \"],[9],[0,\"\\n        \"],[9],[0,\"\\n\"]],\"parameters\":[1]},null],[0,\"    \"],[9],[0,\"\\n\\n    \"],[7,\"div\",true],[10,\"class\",\"protip pt-10\"],[8],[0,\"\\n      \"],[1,[28,\"t\",[\"formUserLabels.protip\"],null],false],[0,\"\\n    \"],[9],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"  \"],[7,\"button\",false],[12,\"class\",\"btn bg-link icon-btn\"],[3,\"action\",[[23,0,[]],\"addUserLabel\"]],[8],[0,\"\\n    \"],[7,\"span\",true],[10,\"class\",\"darken\"],[8],[0,\"\\n      \"],[7,\"i\",true],[10,\"class\",\"icon icon-plus text-small\"],[8],[9],[0,\"\\n    \"],[9],[0,\"\\n    \"],[7,\"span\",true],[8],[0,\"\\n      \"],[1,[28,\"t\",[[24,[\"addActionLabel\"]]],null],false],[0,\"\\n    \"],[9],[0,\"\\n  \"],[9],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[0,\"  \"],[1,[28,\"table-labels\",null,[[\"header\",\"model\",\"search\"],[[28,\"t\",[\"formUserLabels.title\"],null],[24,[\"initialLabels\"]],false]]],false],[0,\"\\n\"]],\"parameters\":[]}]],\"hasEval\":false}",
    "meta": {
      "moduleName": "istio/components/form-labels/template.hbs"
    }
  });

  _exports.default = _default;
});
define.alias("shared/components/form-match-expressions/component", "istio/components/form-match-expressions/component");
define.alias("shared/components/form-members-catalog-access/component", "istio/components/form-members-catalog-access/component");
define.alias("shared/components/form-members-global-access/component", "istio/components/form-members-global-access/component");
define.alias("shared/components/form-members/component", "istio/components/form-members/component");
define.alias("shared/components/form-name-description/component", "istio/components/form-name-description/component");
define.alias("shared/components/form-namespace/component", "istio/components/form-namespace/component");
define.alias("shared/components/form-network-config/component", "istio/components/form-network-config/component");
define.alias("shared/components/form-node-taints/component", "istio/components/form-node-taints/component");
define.alias("shared/components/form-project-targets/component", "istio/components/form-project-targets/component");
define.alias("shared/components/form-reservation/component", "istio/components/form-reservation/component");
define.alias("shared/components/form-share-member/component", "istio/components/form-share-member/component");
define.alias("shared/components/form-ssl-rows/component", "istio/components/form-ssl-rows/component");
define.alias("shared/components/form-ssl-termination/component", "istio/components/form-ssl-termination/component");
define.alias("shared/components/form-user-labels/component", "istio/components/form-user-labels/component");
define.alias("shared/components/form-value-array/component", "istio/components/form-value-array/component");
define.alias("shared/components/form-versions/component", "istio/components/form-versions/component");
define("istio/components/gateway-row/component", ["exports", "istio/components/gateway-row/template"], function (_exports, _template) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Component.extend({
    layout: _template.default,
    model: null,
    tagName: ''
  });

  _exports.default = _default;
});
define("istio/components/gateway-row/template", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "9mZ7XMID",
    "block": "{\"symbols\":[\"selector\"],\"statements\":[[7,\"tr\",true],[10,\"class\",\"main-row\"],[8],[0,\"\\n  \"],[7,\"td\",true],[10,\"valign\",\"middle\"],[10,\"class\",\"row-check\"],[10,\"style\",\"padding-top: 2px;\"],[8],[0,\"\\n    \"],[1,[28,\"check-box\",null,[[\"nodeId\"],[[24,[\"model\",\"id\"]]]]],false],[0,\"\\n  \"],[9],[0,\"\\n  \"],[7,\"td\",true],[11,\"data-title\",[29,[[24,[\"dt\",\"state\"]]]]],[10,\"class\",\"state\"],[8],[0,\"\\n    \"],[1,[28,\"badge-state\",null,[[\"model\"],[[24,[\"model\"]]]]],false],[0,\"\\n  \"],[9],[0,\"\\n  \"],[7,\"td\",true],[11,\"data-title\",[29,[[24,[\"dt\",\"name\"]]]]],[10,\"class\",\"clip\"],[8],[0,\"\\n\"],[4,\"link-to\",null,[[\"route\",\"model\"],[\"gateway.detail\",[24,[\"model\",\"id\"]]]],{\"statements\":[[0,\"      \"],[1,[24,[\"model\",\"displayName\"]],false],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"  \"],[9],[0,\"\\n  \"],[7,\"td\",true],[11,\"data-title\",[29,[[24,[\"dt\",\"hosts\"]]]]],[10,\"class\",\"clip\"],[8],[0,\"\\n\"],[4,\"tooltip-element\",null,[[\"type\",\"tooltipTemplate\",\"model\",\"inlineBlock\"],[\"tooltip-basic\",\"tooltip-multi-lines\",[24,[\"model\",\"displayHosts\"]],true]],{\"statements\":[[0,\"      \"],[1,[24,[\"model\",\"displayHostsString\"]],false],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"  \"],[9],[0,\"\\n  \"],[7,\"td\",true],[11,\"data-title\",[29,[[24,[\"dt\",\"created\"]]]]],[10,\"class\",\"text-right pr-20\"],[8],[0,\"\\n    \"],[1,[28,\"date-calendar\",[[24,[\"model\",\"created\"]]],null],false],[0,\"\\n  \"],[9],[0,\"\\n  \"],[7,\"td\",true],[11,\"data-title\",[29,[[24,[\"dt\",\"actions\"]]]]],[10,\"class\",\"actions\"],[8],[0,\"\\n    \"],[1,[28,\"action-menu\",null,[[\"model\"],[[24,[\"model\"]]]]],false],[0,\"\\n  \"],[9],[0,\"\\n\"],[9],[0,\"\\n\\n\"],[4,\"if\",[[24,[\"model\",\"displaySelectorStrings\",\"length\"]]],null,{\"statements\":[[0,\"  \"],[7,\"tr\",true],[10,\"class\",\"sub-row\"],[8],[0,\"\\n    \"],[7,\"td\",true],[10,\"colspan\",\"2\"],[8],[9],[0,\"\\n    \"],[7,\"td\",true],[10,\"colspan\",\"4\"],[8],[0,\"\\n\"],[4,\"each\",[[24,[\"model\",\"displaySelectorStrings\"]]],null,{\"statements\":[[0,\"        \"],[7,\"span\",true],[10,\"class\",\"tag-xs bg-warning mr-5\"],[8],[0,\"\\n          \"],[1,[23,1,[]],false],[0,\"\\n        \"],[9],[0,\"\\n\"]],\"parameters\":[1]},null],[0,\"    \"],[9],[0,\"\\n  \"],[9],[0,\"\\n\"]],\"parameters\":[]},null]],\"hasEval\":false}",
    "meta": {
      "moduleName": "istio/components/gateway-row/template.hbs"
    }
  });

  _exports.default = _default;
});
define("istio/components/gateway-server/component", ["exports", "istio/components/gateway-server/template"], function (_exports, _template) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var TLS_OPTIONS = [{
    label: 'PASSTHROUGH',
    value: 'PASSTHROUGH'
  }, {
    label: 'SIMPLE',
    value: 'SIMPLE'
  }, {
    label: 'MUTUAL',
    value: 'MUTUAL'
  }, {
    label: 'AUTO_PASSTHROUGH',
    value: 'AUTO_PASSTHROUGH'
  }, {
    label: 'ISTIO_MUTUAL',
    value: 'ISTIO_MUTUAL'
  }];
  var PROTOCOLS = [{
    label: 'HTTP',
    value: 'HTTP'
  }, {
    label: 'HTTPS',
    value: 'HTTPS'
  }, {
    label: 'GRPC',
    value: 'GRPC'
  }, {
    label: 'HTTP2',
    value: 'HTTP2'
  }, {
    label: 'MONGO',
    value: 'MONGO'
  }, {
    label: 'TCP',
    value: 'TCP'
  }, {
    label: 'TLS',
    value: 'TLS'
  }];

  var _default = Ember.Component.extend({
    layout: _template.default,
    editing: true,
    server: null,
    protocols: PROTOCOLS,
    tlsOptions: TLS_OPTIONS,
    init: function init() {
      this._super.apply(this, arguments);

      this.initTls();
    },
    actions: {
      removeServer: function removeServer(server) {
        if (this.removeServer) {
          this.removeServer(server);
        }
      },
      setHosts: function setHosts(hosts) {
        Ember.set(this, 'server.hosts', hosts);
      },
      setSubjectAltNames: function setSubjectAltNames(subjectAltNames) {
        Ember.set(this, 'server.tls.subjectAltNames', subjectAltNames);
      }
    },
    initTls: function initTls() {
      if (!Ember.get(this, 'server.tls') && Ember.get(this, 'editing')) {
        Ember.set(this, 'server.tls', {
          httpsRedirect: false
        });
      }
    }
  });

  _exports.default = _default;
});
define("istio/components/gateway-server/template", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "I2ZmEC/q",
    "block": "{\"symbols\":[\"c\",\"row\",\"c\",\"row\"],\"statements\":[[7,\"div\",true],[10,\"class\",\"box mb-10\"],[8],[0,\"\\n\"],[4,\"if\",[[28,\"and\",[[24,[\"editing\"]]],null]],null,{\"statements\":[[0,\"    \"],[7,\"div\",true],[10,\"class\",\"row\"],[8],[0,\"\\n      \"],[7,\"div\",true],[10,\"class\",\"pull-right\"],[8],[0,\"\\n        \"],[7,\"button\",false],[12,\"class\",\"btn bg-transparent text-small vertical-middle\"],[3,\"action\",[[23,0,[]],\"removeServer\",[24,[\"server\"]]]],[8],[0,\"\\n          \"],[1,[28,\"t\",[\"cruGateway.servers.removeServerLabel\"],null],false],[0,\"\\n        \"],[9],[0,\"\\n      \"],[9],[0,\"\\n    \"],[9],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"\\n  \"],[7,\"div\",true],[10,\"class\",\"row\"],[8],[0,\"\\n    \"],[7,\"div\",true],[10,\"class\",\"col span-4\"],[8],[0,\"\\n      \"],[7,\"label\",true],[10,\"class\",\"acc-label\"],[11,\"for\",[29,[[28,\"concat\",[[24,[\"elementId\"]],\"-input-port-number\"],null]]]],[8],[0,\"\\n        \"],[1,[28,\"t\",[\"cruGateway.port.number.label\"],null],false],[0,\"\\n\"],[4,\"if\",[[24,[\"editing\"]]],null,{\"statements\":[[0,\"          \"],[1,[22,\"field-required\"],false],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"      \"],[9],[0,\"\\n\"],[4,\"input-or-display\",null,[[\"editable\",\"value\"],[[24,[\"editing\"]],[24,[\"server\",\"port\",\"number\"]]]],{\"statements\":[[0,\"        \"],[1,[28,\"input-integer\",null,[[\"min\",\"max\",\"id\",\"value\",\"classNames\",\"placeholder\"],[1,65535,[28,\"concat\",[[24,[\"elementId\"]],\"-input-port-number\"],null],[24,[\"server\",\"port\",\"number\"]],\"form-control\",[28,\"t\",[\"cruGateway.port.number.placeholder\"],null]]]],false],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"    \"],[9],[0,\"\\n\\n    \"],[7,\"div\",true],[10,\"class\",\"col span-4\"],[8],[0,\"\\n      \"],[7,\"label\",true],[10,\"class\",\"acc-label\"],[11,\"for\",[29,[[28,\"concat\",[[24,[\"elementId\"]],\"-input-port-name\"],null]]]],[8],[0,\"\\n        \"],[1,[28,\"t\",[\"cruGateway.port.name.label\"],null],false],[0,\"\\n\"],[4,\"if\",[[24,[\"editing\"]]],null,{\"statements\":[[0,\"          \"],[1,[22,\"field-required\"],false],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"      \"],[9],[0,\"\\n\"],[4,\"input-or-display\",null,[[\"editable\",\"value\"],[[24,[\"editing\"]],[24,[\"server\",\"port\",\"name\"]]]],{\"statements\":[[0,\"        \"],[1,[28,\"input\",null,[[\"type\",\"id\",\"value\",\"classNames\",\"placeholder\"],[\"text\",[28,\"concat\",[[24,[\"elementId\"]],\"-input-port-name\"],null],[24,[\"server\",\"port\",\"name\"]],\"form-control\",[28,\"t\",[\"cruGateway.port.name.placeholder\"],null]]]],false],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"    \"],[9],[0,\"\\n\\n    \"],[7,\"div\",true],[10,\"class\",\"col span-4\"],[8],[0,\"\\n      \"],[7,\"label\",true],[10,\"class\",\"acc-label\"],[8],[0,\"\\n        \"],[1,[28,\"t\",[\"cruGateway.port.protocol.label\"],null],false],[0,\"\\n\"],[4,\"if\",[[24,[\"editing\"]]],null,{\"statements\":[[0,\"          \"],[1,[22,\"field-required\"],false],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"      \"],[9],[0,\"\\n\"],[4,\"input-or-display\",null,[[\"editable\",\"value\"],[[24,[\"editing\"]],[24,[\"server\",\"port\",\"protocol\"]]]],{\"statements\":[[0,\"        \"],[1,[28,\"new-select\",null,[[\"classNames\",\"content\",\"value\"],[\"form-control\",[24,[\"protocols\"]],[24,[\"server\",\"port\",\"protocol\"]]]]],false],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"    \"],[9],[0,\"\\n  \"],[9],[0,\"\\n\\n  \"],[7,\"div\",true],[10,\"class\",\"row\"],[8],[0,\"\\n    \"],[7,\"div\",true],[10,\"class\",\"col span-12\"],[8],[0,\"\\n\"],[4,\"form-value-array\",null,[[\"editing\",\"valueLabel\",\"addActionLabel\",\"changed\",\"addButtonClass\",\"initialValues\",\"showProTip\",\"required\"],[[24,[\"editing\"]],\"cruGateway.hosts.label\",\"cruGateway.hosts.add\",[28,\"action\",[[23,0,[]],\"setHosts\"],null],\"btn bg-link icon-btn\",[24,[\"server\",\"hosts\"]],false,true]],{\"statements\":[[4,\"input-or-display\",null,[[\"editable\",\"value\"],[[24,[\"editing\"]],[23,4,[\"value\"]]]],{\"statements\":[[0,\"          \"],[1,[28,\"input\",null,[[\"class\",\"type\",\"value\",\"placeholder\"],[\"form-control input-sm\",\"text\",[23,4,[\"value\"]],[28,\"t\",[\"cruGateway.hosts.placeholder\"],null]]]],false],[0,\"\\n\"]],\"parameters\":[]},null]],\"parameters\":[3,4]},null],[0,\"    \"],[9],[0,\"\\n  \"],[9],[0,\"\\n\\n\"],[4,\"advanced-section\",null,[[\"advanced\"],[[24,[\"advanced\"]]]],{\"statements\":[[0,\"    \"],[7,\"hr\",true],[10,\"class\",\"mt-20\"],[8],[9],[0,\"\\n    \"],[7,\"div\",true],[10,\"class\",\"row\"],[8],[0,\"\\n      \"],[7,\"div\",true],[10,\"class\",\"col span-4\"],[8],[0,\"\\n        \"],[7,\"label\",true],[10,\"class\",\"acc-label\"],[8],[0,\"\\n          \"],[1,[28,\"t\",[\"cruGateway.tls.mode.label\"],null],false],[0,\"\\n        \"],[9],[0,\"\\n\"],[4,\"input-or-display\",null,[[\"editable\",\"value\"],[[24,[\"editing\"]],[24,[\"server\",\"tls\",\"mode\"]]]],{\"statements\":[[0,\"          \"],[1,[28,\"new-select\",null,[[\"classNames\",\"content\",\"value\",\"prompt\",\"localizedPrompt\"],[\"form-control\",[24,[\"tlsOptions\"]],[24,[\"server\",\"tls\",\"mode\"]],\"cruGateway.tls.mode.prompt\",true]]],false],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"      \"],[9],[0,\"\\n\\n      \"],[7,\"div\",true],[10,\"class\",\"col span-4\"],[8],[0,\"\\n        \"],[7,\"label\",true],[10,\"class\",\"acc-label\"],[8],[0,\"\\n          \"],[1,[28,\"t\",[\"cruGateway.tls.httpsRedirect.label\"],null],false],[0,\"\\n        \"],[9],[0,\"\\n\"],[4,\"input-or-display\",null,[[\"editable\",\"value\"],[[24,[\"editing\"]],[24,[\"server\",\"tls\",\"httpsRedirect\"]]]],{\"statements\":[[0,\"          \"],[7,\"div\",true],[10,\"class\",\"radio\"],[8],[0,\"\\n            \"],[7,\"label\",true],[8],[0,\"\\n              \"],[1,[28,\"radio-button\",null,[[\"selection\",\"value\"],[[24,[\"server\",\"tls\",\"httpsRedirect\"]],true]]],false],[0,\"\\n              \"],[1,[28,\"t\",[\"cruGateway.tls.httpsRedirect.enabled\"],null],false],[0,\"\\n            \"],[9],[0,\"\\n          \"],[9],[0,\"\\n          \"],[7,\"div\",true],[10,\"class\",\"radio\"],[8],[0,\"\\n            \"],[7,\"label\",true],[8],[0,\"\\n              \"],[1,[28,\"radio-button\",null,[[\"selection\",\"value\"],[[24,[\"server\",\"tls\",\"httpsRedirect\"]],false]]],false],[0,\"\\n              \"],[1,[28,\"t\",[\"cruGateway.tls.httpsRedirect.disabled\"],null],false],[0,\"\\n            \"],[9],[0,\"\\n          \"],[9],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"      \"],[9],[0,\"\\n\\n      \"],[7,\"div\",true],[10,\"class\",\"col span-4\"],[8],[0,\"\\n        \"],[7,\"label\",true],[10,\"class\",\"acc-label\"],[11,\"for\",[29,[[28,\"concat\",[[24,[\"elementId\"]],\"-input-server-certificate\"],null]]]],[8],[0,\"\\n          \"],[1,[28,\"t\",[\"cruGateway.tls.serverCertificate.label\"],null],false],[0,\"\\n        \"],[9],[0,\"\\n\"],[4,\"input-or-display\",null,[[\"editable\",\"value\"],[[24,[\"editing\"]],[24,[\"server\",\"tls\",\"serverCertificate\"]]]],{\"statements\":[[0,\"          \"],[1,[28,\"input\",null,[[\"type\",\"id\",\"value\",\"classNames\",\"placeholder\"],[\"text\",[28,\"concat\",[[24,[\"elementId\"]],\"-input-server-certificate\"],null],[24,[\"server\",\"tls\",\"serverCertificate\"]],\"form-control\",[28,\"t\",[\"cruGateway.tls.serverCertificate.placeholder\"],null]]]],false],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"      \"],[9],[0,\"\\n    \"],[9],[0,\"\\n    \"],[7,\"div\",true],[10,\"class\",\"row\"],[8],[0,\"\\n      \"],[7,\"div\",true],[10,\"class\",\"col span-4\"],[8],[0,\"\\n        \"],[7,\"label\",true],[10,\"class\",\"acc-label\"],[11,\"for\",[29,[[28,\"concat\",[[24,[\"elementId\"]],\"-input-private-key\"],null]]]],[8],[0,\"\\n          \"],[1,[28,\"t\",[\"cruGateway.tls.privateKey.label\"],null],false],[0,\"\\n        \"],[9],[0,\"\\n\"],[4,\"input-or-display\",null,[[\"editable\",\"value\"],[[24,[\"editing\"]],[24,[\"server\",\"tls\",\"privateKey\"]]]],{\"statements\":[[0,\"          \"],[1,[28,\"input\",null,[[\"type\",\"id\",\"value\",\"classNames\",\"placeholder\"],[\"text\",[28,\"concat\",[[24,[\"elementId\"]],\"-input-private-key\"],null],[24,[\"server\",\"tls\",\"privateKey\"]],\"form-control\",[28,\"t\",[\"cruGateway.tls.privateKey.placeholder\"],null]]]],false],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"      \"],[9],[0,\"\\n      \"],[7,\"div\",true],[10,\"class\",\"col span-4\"],[8],[0,\"\\n        \"],[7,\"label\",true],[10,\"class\",\"acc-label\"],[11,\"for\",[29,[[28,\"concat\",[[24,[\"elementId\"]],\"-input-ca-certificates\"],null]]]],[8],[0,\"\\n          \"],[1,[28,\"t\",[\"cruGateway.tls.caCertificates.label\"],null],false],[0,\"\\n        \"],[9],[0,\"\\n\"],[4,\"input-or-display\",null,[[\"editable\",\"value\"],[[24,[\"editing\"]],[24,[\"server\",\"tls\",\"caCertificates\"]]]],{\"statements\":[[0,\"          \"],[1,[28,\"input\",null,[[\"type\",\"id\",\"value\",\"classNames\",\"placeholder\"],[\"text\",[28,\"concat\",[[24,[\"elementId\"]],\"-input-ca-certificates\"],null],[24,[\"server\",\"tls\",\"caCertificates\"]],\"form-control\",[28,\"t\",[\"cruGateway.tls.caCertificates.placeholder\"],null]]]],false],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"      \"],[9],[0,\"\\n      \"],[7,\"div\",true],[10,\"class\",\"col span-4\"],[8],[0,\"\\n        \"],[7,\"label\",true],[10,\"class\",\"acc-label\"],[11,\"for\",[29,[[28,\"concat\",[[24,[\"elementId\"]],\"-input-credential-name\"],null]]]],[8],[0,\"\\n          \"],[1,[28,\"t\",[\"cruGateway.tls.credentialName.label\"],null],false],[0,\"\\n        \"],[9],[0,\"\\n\"],[4,\"input-or-display\",null,[[\"editable\",\"value\"],[[24,[\"editing\"]],[24,[\"server\",\"tls\",\"credentialName\"]]]],{\"statements\":[[0,\"          \"],[1,[28,\"input\",null,[[\"type\",\"id\",\"value\",\"classNames\",\"placeholder\"],[\"text\",[28,\"concat\",[[24,[\"elementId\"]],\"-input-credential-name\"],null],[24,[\"server\",\"tls\",\"credentialName\"]],\"form-control\",[28,\"t\",[\"cruGateway.tls.credentialName.placeholder\"],null]]]],false],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"      \"],[9],[0,\"\\n    \"],[9],[0,\"\\n\\n    \"],[7,\"div\",true],[10,\"class\",\"row\"],[8],[0,\"\\n      \"],[7,\"div\",true],[10,\"class\",\"col span-12\"],[8],[0,\"\\n\"],[4,\"form-value-array\",null,[[\"editing\",\"valueLabel\",\"addActionLabel\",\"changed\",\"addButtonClass\",\"initialValues\",\"showProTip\"],[[24,[\"editing\"]],\"cruDestinationRule.tls.subjectAltNames.label\",\"cruDestinationRule.tls.subjectAltNames.add\",[28,\"action\",[[23,0,[]],\"setSubjectAltNames\"],null],\"btn bg-link icon-btn\",[24,[\"server\",\"tls\",\"subjectAltNames\"]],false]],{\"statements\":[[4,\"input-or-display\",null,[[\"editable\",\"value\"],[[24,[\"editing\"]],[23,2,[\"value\"]]]],{\"statements\":[[0,\"            \"],[1,[28,\"input\",null,[[\"class\",\"type\",\"value\",\"placeholder\"],[\"form-control input-sm\",\"text\",[23,2,[\"value\"]],[28,\"t\",[\"cruDestinationRule.tls.subjectAltNames.placeholder\"],null]]]],false],[0,\"\\n\"]],\"parameters\":[]},null]],\"parameters\":[1,2]},null],[0,\"      \"],[9],[0,\"\\n    \"],[9],[0,\"\\n\"]],\"parameters\":[]},null],[9],[0,\"\\n\"]],\"hasEval\":false}",
    "meta": {
      "moduleName": "istio/components/gateway-server/template.hbs"
    }
  });

  _exports.default = _default;
});
define.alias("shared/components/gke-access-scope/component", "istio/components/gke-access-scope/component");
define.alias("shared/components/graph-area/component", "istio/components/graph-area/component");
define.alias("shared/components/hook-row/component", "istio/components/hook-row/component");
define.alias("shared/components/host-pod/component", "istio/components/host-pod/component");
define.alias("shared/components/host-template-aliyunecs/component", "istio/components/host-template-aliyunecs/component");
define.alias("shared/components/host-template-amazonec2/component", "istio/components/host-template-amazonec2/component");
define.alias("shared/components/host-template-azure/component", "istio/components/host-template-azure/component");
define.alias("shared/components/host-template-digitalocean/component", "istio/components/host-template-digitalocean/component");
define.alias("shared/components/host-template-exoscale/component", "istio/components/host-template-exoscale/component");
define.alias("shared/components/host-template-list/component", "istio/components/host-template-list/component");
define.alias("shared/components/host-template-other/component", "istio/components/host-template-other/component");
define.alias("shared/components/host-template-packet/component", "istio/components/host-template-packet/component");
define.alias("shared/components/host-template-rackspace/component", "istio/components/host-template-rackspace/component");
define.alias("shared/components/host-template-vmwarevsphere/component", "istio/components/host-template-vmwarevsphere/component");
define.alias("shared/components/hover-dropdown/component", "istio/components/hover-dropdown/component");
define("istio/components/http-route-destination/component", ["exports", "istio/components/http-route-destination/template", "shared/utils/util"], function (_exports, _template, _util) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Component.extend({
    layout: _template.default,
    editing: true,
    httpRouteDestinations: null,
    init: function init() {
      this._super.apply(this, arguments);

      this.initDestinations();
    },
    didInsertElement: function didInsertElement() {
      if (!Ember.get(this, 'route.type') && Ember.get(this, 'httpRouteDestinations.length') === 0) {
        this.send('addDestination');
      }
    },
    actions: {
      addDestination: function addDestination() {
        var destination = Ember.Object.create({
          destination: {
            subset: this.getNewVersion()
          },
          weight: Ember.get(this, 'httpRouteDestinations.length') === 0 ? 100 : 0
        });
        var hosts = Ember.get(this, 'hosts') || [];
        var firstHost = Ember.get(hosts, 'firstObject');

        if (hosts.length === 1 && firstHost && firstHost.indexOf('*') === -1) {
          Ember.set(destination, 'destination.host', firstHost);
        }

        Ember.get(this, 'httpRouteDestinations').pushObject(destination);
      },
      removeDestination: function removeDestination(destination) {
        Ember.get(this, 'httpRouteDestinations').removeObject(destination);
      }
    },
    hostsDidChange: Ember.observer('hosts.[]', function () {
      var hosts = Ember.get(this, 'hosts') || [];
      var firstHost = Ember.get(hosts, 'firstObject');

      if (hosts.length === 1 && firstHost && firstHost.indexOf('*') === -1) {
        (Ember.get(this, 'httpRouteDestinations') || []).forEach(function (destination) {
          Ember.set(destination, 'destination.host', firstHost);
        });
      }
    }),
    inputDidChange: Ember.observer('httpRouteDestinations.@each.{weight,portNumberOrName}', function () {
      var httpRouteDestinations = Ember.get(this, 'httpRouteDestinations') || [];
      httpRouteDestinations.forEach(function (destination) {
        var port = Ember.get(destination, 'portNumberOrName');

        if (port && (0, _util.isNumeric)(port)) {
          Ember.set(destination, 'destination.port', {
            number: parseInt(port, 10)
          });
        } else if (port) {
          Ember.set(destination, 'destination.port', {
            name: port
          });
        } else {
          delete destination.destination['port'];
        }
      });

      if (httpRouteDestinations.length === 2) {
        var _this$getCurrentWeigh = this.getCurrentWeights(),
            weight1 = _this$getCurrentWeigh.weight1,
            weight2 = _this$getCurrentWeigh.weight2;

        if (weight1 === Ember.get(this, 'weight1') && weight2 !== Ember.get(this, 'weight2')) {
          weight1 = 100 - weight2;
          Ember.set(httpRouteDestinations[0], 'weight', weight1);
        } else if (weight1 !== Ember.get(this, 'weight1') && weight2 === Ember.get(this, 'weight2')) {
          weight2 = 100 - weight1;
          Ember.set(httpRouteDestinations[1], 'weight', weight2);
        }

        Ember.setProperties(this, {
          weight1: weight1,
          weight2: weight2
        });
      }
    }),
    getNewVersion: function getNewVersion() {
      var name = Ember.get(this, 'httpRouteDestinations.lastObject.destination.subset');

      if (name) {
        var matches = name.match(/\d+$/);

        if (matches.length > 0) {
          var prefix = name.slice(0, name.length - matches[0].length);
          return "".concat(prefix).concat(parseInt(matches[0], 10) + 1);
        }
      } else {
        return 'v1';
      }

      return '';
    },
    getCurrentWeights: function getCurrentWeights() {
      var httpRouteDestinations = Ember.get(this, 'httpRouteDestinations') || [];
      var weight1 = 0;
      var weight2 = 0;

      if (httpRouteDestinations.length === 2) {
        var dest1 = httpRouteDestinations[0];
        var dest2 = httpRouteDestinations[1];
        weight1 = Ember.get(dest1, 'weight');
        weight2 = Ember.get(dest2, 'weight');

        if (!weight1) {
          weight1 = 0;
        }

        if (!weight2) {
          weight2 = 0;
        }

        weight1 = parseInt(weight1, 10);
        weight2 = parseInt(weight2, 10);
      }

      return {
        weight1: weight1,
        weight2: weight2
      };
    },
    initDestinations: function initDestinations() {
      var httpRouteDestinations = Ember.get(this, 'httpRouteDestinations') || [];
      httpRouteDestinations.forEach(function (destination) {
        var port = Ember.get(destination, 'destination.port');

        if (port) {
          Ember.set(destination, 'portNumberOrName', Ember.get(port, 'name') || Ember.get(port, 'number') || null);
        }
      });

      if (httpRouteDestinations.length === 2) {
        Ember.setProperties(this, this.getCurrentWeights());
      }
    }
  });

  _exports.default = _default;
});
define("istio/components/http-route-destination/template", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "LgrNSxVA",
    "block": "{\"symbols\":[\"destination\"],\"statements\":[[4,\"if\",[[24,[\"httpRouteDestinations\",\"length\"]]],null,{\"statements\":[[0,\"  \"],[7,\"table\",true],[10,\"class\",\"fixed striped mt-20\"],[8],[0,\"\\n    \"],[7,\"thead\",true],[8],[0,\"\\n      \"],[7,\"tr\",true],[8],[0,\"\\n        \"],[7,\"th\",true],[8],[0,\"\\n          \"],[1,[28,\"t\",[\"cruVirtualService.http.routes.destination.host.label\"],null],false],[0,\"\\n\"],[4,\"if\",[[24,[\"editing\"]]],null,{\"statements\":[[0,\"            \"],[1,[22,\"field-required\"],false],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"        \"],[9],[0,\"\\n        \"],[7,\"th\",true],[8],[0,\"\\n          \"],[1,[28,\"t\",[\"cruVirtualService.http.routes.destination.subset.label\"],null],false],[0,\"\\n        \"],[9],[0,\"\\n        \"],[7,\"th\",true],[8],[0,\"\\n          \"],[1,[28,\"t\",[\"cruVirtualService.http.routes.destination.port.label\"],null],false],[0,\"\\n        \"],[9],[0,\"\\n        \"],[7,\"th\",true],[8],[0,\"\\n          \"],[1,[28,\"t\",[\"cruVirtualService.http.routes.destination.weight.label\"],null],false],[0,\"\\n\"],[4,\"if\",[[24,[\"editing\"]]],null,{\"statements\":[[0,\"            \"],[1,[22,\"field-required\"],false],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"        \"],[9],[0,\"\\n\"],[4,\"if\",[[24,[\"editing\"]]],null,{\"statements\":[[0,\"          \"],[7,\"th\",true],[10,\"width\",\"40\"],[8],[0,\" \"],[9],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"      \"],[9],[0,\"\\n    \"],[9],[0,\"\\n\\n    \"],[7,\"tbody\",true],[8],[0,\"\\n\"],[4,\"each\",[[24,[\"httpRouteDestinations\"]]],null,{\"statements\":[[0,\"        \"],[7,\"tr\",true],[8],[0,\"\\n          \"],[7,\"td\",true],[10,\"class\",\"p-5\"],[8],[0,\"\\n\"],[4,\"input-or-display\",null,[[\"editable\",\"value\"],[[24,[\"editing\"]],[23,1,[\"destination\",\"host\"]]]],{\"statements\":[[0,\"              \"],[1,[28,\"istio-host-select\",null,[[\"showLabel\",\"namespaceId\",\"value\",\"inputClass\"],[false,[24,[\"namespace\",\"id\"]],[23,1,[\"destination\",\"host\"]],\"input-sm\"]]],false],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"          \"],[9],[0,\"\\n          \"],[7,\"td\",true],[10,\"class\",\"p-5\"],[8],[0,\"\\n\"],[4,\"input-or-display\",null,[[\"editable\",\"value\"],[[24,[\"editing\"]],[23,1,[\"destination\",\"subset\"]]]],{\"statements\":[[0,\"              \"],[1,[28,\"input\",null,[[\"type\",\"class\",\"value\",\"placeholder\"],[\"text\",\"input-sm\",[23,1,[\"destination\",\"subset\"]],[28,\"t\",[\"cruVirtualService.http.routes.destination.subset.placeholder\"],null]]]],false],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"          \"],[9],[0,\"\\n          \"],[7,\"td\",true],[10,\"class\",\"p-5\"],[8],[0,\"\\n\"],[4,\"input-or-display\",null,[[\"editable\",\"value\"],[[24,[\"editing\"]],[23,1,[\"portNumberOrName\"]]]],{\"statements\":[[0,\"              \"],[1,[28,\"input\",null,[[\"type\",\"class\",\"value\",\"placeholder\"],[\"text\",\"input-sm\",[23,1,[\"portNumberOrName\"]],[28,\"t\",[\"cruVirtualService.http.routes.destination.port.placeholder\"],null]]]],false],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"          \"],[9],[0,\"\\n          \"],[7,\"td\",true],[10,\"class\",\"p-5\"],[8],[0,\"\\n\"],[4,\"input-or-display\",null,[[\"editable\",\"value\"],[[24,[\"editing\"]],[23,1,[\"weight\"]]]],{\"statements\":[[0,\"              \"],[7,\"div\",true],[10,\"class\",\"input-group\"],[8],[0,\"\\n                \"],[1,[28,\"input-integer\",null,[[\"class\",\"min\",\"max\",\"value\",\"placeholder\"],[\"input-sm\",\"0\",\"100\",[23,1,[\"weight\"]],[28,\"t\",[\"cruVirtualService.http.routes.destination.weight.placeholder\"],null]]]],false],[0,\"\\n                \"],[7,\"div\",true],[10,\"class\",\"input-group-addon bg-default\"],[8],[0,\"\\n                  %\\n                \"],[9],[0,\"\\n              \"],[9],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"          \"],[9],[0,\"\\n\\n\"],[4,\"if\",[[24,[\"editing\"]]],null,{\"statements\":[[0,\"            \"],[7,\"td\",true],[10,\"class\",\"text-right\"],[8],[0,\"\\n              \"],[7,\"button\",false],[12,\"class\",\"btn bg-primary btn-sm\"],[3,\"action\",[[23,0,[]],\"removeDestination\",[23,1,[]]]],[8],[0,\"\\n                \"],[7,\"i\",true],[10,\"class\",\"icon icon-minus\"],[8],[9],[0,\"\\n                \"],[7,\"span\",true],[10,\"class\",\"sr-only\"],[8],[0,\"\\n                  \"],[1,[28,\"t\",[\"generic.remove\"],null],false],[0,\"\\n                \"],[9],[0,\"\\n              \"],[9],[0,\"\\n            \"],[9],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"        \"],[9],[0,\"\\n\"]],\"parameters\":[1]},null],[0,\"    \"],[9],[0,\"\\n  \"],[9],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[0,\"  \"],[7,\"div\",true],[10,\"class\",\"row text-center mt-20 mb-20 pt-10\"],[8],[0,\"\\n    \"],[7,\"span\",true],[10,\"class\",\"text-muted\"],[8],[0,\"\\n      \"],[1,[28,\"t\",[\"cruVirtualService.http.routes.destination.noDestinations\"],null],false],[0,\"\\n    \"],[9],[0,\"\\n  \"],[9],[0,\"\\n\"]],\"parameters\":[]}],[4,\"if\",[[24,[\"editing\"]]],null,{\"statements\":[[0,\"  \"],[7,\"div\",true],[10,\"class\",\"row mt-20\"],[8],[0,\"\\n    \"],[7,\"button\",false],[12,\"class\",\"btn bg-link icon-btn pull-left\"],[3,\"action\",[[23,0,[]],\"addDestination\"]],[8],[0,\"\\n      \"],[7,\"span\",true],[10,\"class\",\"darken\"],[8],[0,\"\\n        \"],[7,\"i\",true],[10,\"class\",\"icon icon-plus text-small\"],[8],[9],[0,\"\\n      \"],[9],[0,\"\\n      \"],[7,\"span\",true],[8],[0,\"\\n        \"],[1,[28,\"t\",[\"cruVirtualService.http.routes.destination.addDestinationLabel\"],null],false],[0,\"\\n      \"],[9],[0,\"\\n    \"],[9],[0,\"\\n  \"],[9],[0,\"\\n\"]],\"parameters\":[]},null]],\"hasEval\":false}",
    "meta": {
      "moduleName": "istio/components/http-route-destination/template.hbs"
    }
  });

  _exports.default = _default;
});
define("istio/components/http-route-match/component", ["exports", "istio/components/http-route-match/template"], function (_exports, _template) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var HEADERS = 'headers';
  var EXACT = 'exact';
  var PREFIX = 'prefix';
  var REGEX = 'regex';
  var AUTHORITY = 'authority';
  var METHOD = 'method';
  var URI = 'uri';
  var SCHEME = 'scheme';
  var CONDITIONS = [{
    label: 'cruVirtualService.http.routes.matches.condition.exact',
    value: EXACT
  }, {
    label: 'cruVirtualService.http.routes.matches.condition.prefix',
    value: PREFIX
  }, {
    label: 'cruVirtualService.http.routes.matches.condition.regex',
    value: REGEX
  }];

  function getStringMatch(condition, value) {
    var out = {};
    out[condition] = value;
    return out;
  }

  var _default = Ember.Component.extend({
    layout: _template.default,
    editing: true,
    matches: null,
    route: null,
    conditions: CONDITIONS,
    model: null,
    init: function init() {
      this._super.apply(this, arguments);

      this.initMatches();
    },
    didInsertElement: function didInsertElement() {
      if (Ember.get(this, 'matches.length') === 0) {
        this.send('addMatch');
      }
    },
    actions: {
      addMatch: function addMatch() {
        var match = Ember.Object.create({
          matchType: HEADERS,
          condition: EXACT
        });
        Ember.get(this, 'matches').pushObject(match);
      },
      removeMatch: function removeMatch(match) {
        Ember.get(this, 'matches').removeObject(match);
      },
      removeRouteMatch: function removeRouteMatch(match) {
        if (this.removeMatch) {
          this.removeMatch(match);
        }
      },
      setGateways: function setGateways(gateways) {
        Ember.set(this, 'model.gateways', gateways);
      },
      setSourceLabels: function setSourceLabels(labels) {
        if (Object.keys(labels || {}).length > 0) {
          Ember.set(this, 'model.sourceLabels', labels);
        } else {
          var model = Ember.get(this, 'model');
          delete model['sourceLabels'];
        }
      }
    },
    portDidChange: Ember.observer('model.port', function () {
      var port = Ember.get(this, 'model.port');

      if (port === undefined || port === '') {
        delete Ember.get(this, 'model')['port'];
      }
    }),
    matchesDidChange: Ember.observer('matches.@each.{matchType,key,condition,value}', function () {
      var matches = Ember.get(this, 'matches') || [];
      var model = Ember.get(this, 'model');
      var authority = false;
      var method = false;
      var uri = false;
      var scheme = false;
      matches.filterBy('value').forEach(function (match) {
        switch (match.matchType) {
          case AUTHORITY:
            Ember.set(model, AUTHORITY, getStringMatch(match.condition, match.value));
            authority = true;
            break;

          case URI:
            Ember.set(model, URI, getStringMatch(match.condition, match.value));
            uri = true;
            break;

          case SCHEME:
            Ember.set(model, SCHEME, getStringMatch(match.condition, match.value));
            scheme = true;
            break;

          case METHOD:
            Ember.set(model, METHOD, getStringMatch(match.condition, match.value));
            method = true;
            break;
        }
      });

      if (!authority) {
        delete model[AUTHORITY];
      }

      if (!method) {
        delete model[METHOD];
      }

      if (!uri) {
        delete model[URI];
      }

      if (!scheme) {
        delete model[SCHEME];
      }

      this.setHeaders();
    }),
    setHeaders: function setHeaders() {
      var model = Ember.get(this, 'model');
      var matches = Ember.get(this, 'matches') || [];
      var out = {};
      matches.filter(function (match) {
        return match.key && match.value && match.matchType === HEADERS;
      }).forEach(function (match) {
        Ember.set(out, match.key, getStringMatch(match.condition, match.value));
      });

      if (Object.keys(out).length > 0) {
        Ember.set(model, HEADERS, out);
      } else {
        delete model[HEADERS];
      }
    },
    initMatches: function initMatches() {
      var _this = this;

      var out = [];
      var model = Ember.get(this, 'model') || {};
      var authority = Ember.get(model, AUTHORITY);
      var method = Ember.get(model, METHOD);
      var uri = Ember.get(model, URI);
      var scheme = Ember.get(model, SCHEME);
      var headers = Ember.get(model, HEADERS);

      if (authority) {
        out.pushObjects(this.getMatchArray(AUTHORITY, authority));
      }

      if (method) {
        out.pushObjects(this.getMatchArray(METHOD, method));
      }

      if (uri) {
        out.pushObjects(this.getMatchArray(URI, uri));
      }

      if (scheme) {
        out.pushObjects(this.getMatchArray(SCHEME, scheme));
      }

      if (headers) {
        Object.keys(headers).forEach(function (key) {
          var array = _this.getMatchArray(HEADERS, headers[key]);

          array.forEach(function (item) {
            return Ember.set(item, 'key', key);
          });
          out.pushObjects(array);
        });
      }

      Ember.set(this, 'matches', out);
    },
    getMatchArray: function getMatchArray(type, match) {
      var out = [];

      if (!match) {
        return out;
      }

      var exact = Ember.get(match, EXACT);
      var prefix = Ember.get(match, PREFIX);
      var regex = Ember.get(match, REGEX);

      if (exact) {
        out.push({
          matchType: type,
          condition: EXACT,
          value: exact
        });
      }

      if (prefix) {
        out.push({
          matchType: type,
          condition: PREFIX,
          value: prefix
        });
      }

      if (regex) {
        out.push({
          matchType: type,
          condition: REGEX,
          value: regex
        });
      }

      return out;
    }
  });

  _exports.default = _default;
});
define("istio/components/http-route-match/template", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "bxrYNsZY",
    "block": "{\"symbols\":[\"c\",\"row\",\"match\",\"index\"],\"statements\":[[4,\"if\",[[24,[\"editing\"]]],null,{\"statements\":[[0,\"  \"],[7,\"div\",true],[10,\"class\",\"row\"],[8],[0,\"\\n    \"],[7,\"div\",true],[10,\"class\",\"pull-right\"],[8],[0,\"\\n      \"],[7,\"button\",false],[12,\"class\",\"btn bg-transparent text-small vertical-middle\"],[3,\"action\",[[23,0,[]],\"removeRouteMatch\",[24,[\"model\"]]]],[8],[0,\"\\n        \"],[1,[28,\"t\",[\"cruVirtualService.http.routes.matches.removeLabel\"],null],false],[0,\"\\n      \"],[9],[0,\"\\n    \"],[9],[0,\"\\n  \"],[9],[0,\"\\n\"]],\"parameters\":[]},null],[4,\"if\",[[24,[\"matches\",\"length\"]]],null,{\"statements\":[[0,\"  \"],[7,\"table\",true],[10,\"class\",\"fixed striped mt-20\"],[8],[0,\"\\n    \"],[7,\"thead\",true],[8],[0,\"\\n      \"],[7,\"tr\",true],[8],[0,\"\\n        \"],[7,\"th\",true],[8],[0,\"\\n          \"],[1,[28,\"t\",[\"cruVirtualService.http.routes.matches.type.label\"],null],false],[0,\"\\n        \"],[9],[0,\"\\n        \"],[7,\"th\",true],[8],[0,\"\\n          \"],[1,[28,\"t\",[\"cruVirtualService.http.routes.matches.key.label\"],null],false],[0,\"\\n\"],[4,\"if\",[[24,[\"editing\"]]],null,{\"statements\":[[0,\"            \"],[1,[22,\"field-required\"],false],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"        \"],[9],[0,\"\\n        \"],[7,\"th\",true],[8],[0,\"\\n          \"],[1,[28,\"t\",[\"cruVirtualService.http.routes.matches.condition.label\"],null],false],[0,\"\\n        \"],[9],[0,\"\\n        \"],[7,\"th\",true],[8],[0,\"\\n          \"],[1,[28,\"t\",[\"cruVirtualService.http.routes.matches.value.label\"],null],false],[0,\"\\n\"],[4,\"if\",[[24,[\"editing\"]]],null,{\"statements\":[[0,\"            \"],[1,[22,\"field-required\"],false],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"        \"],[9],[0,\"\\n\"],[4,\"if\",[[24,[\"editing\"]]],null,{\"statements\":[[0,\"          \"],[7,\"th\",true],[10,\"width\",\"40\"],[8],[0,\" \"],[9],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"      \"],[9],[0,\"\\n    \"],[9],[0,\"\\n\\n    \"],[7,\"tbody\",true],[8],[0,\"\\n\"],[4,\"each\",[[24,[\"matches\"]]],null,{\"statements\":[[0,\"        \"],[7,\"tr\",true],[8],[0,\"\\n          \"],[7,\"td\",true],[10,\"class\",\"p-5\"],[8],[0,\"\\n\"],[4,\"input-or-display\",null,[[\"editable\",\"value\"],[[24,[\"editing\"]],[23,3,[\"matchType\"]]]],{\"statements\":[[0,\"              \"],[1,[28,\"match-type-select\",null,[[\"match\",\"matches\",\"index\"],[[23,3,[]],[24,[\"matches\"]],[23,4,[]]]]],false],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"          \"],[9],[0,\"\\n          \"],[7,\"td\",true],[10,\"class\",\"p-5\"],[8],[0,\"\\n\"],[4,\"if\",[[28,\"eq\",[[23,3,[\"matchType\"]],\"headers\"],null]],null,{\"statements\":[[4,\"input-or-display\",null,[[\"editable\",\"value\"],[[24,[\"editing\"]],[23,3,[\"key\"]]]],{\"statements\":[[0,\"                \"],[1,[28,\"input\",null,[[\"type\",\"class\",\"value\",\"placeholder\"],[\"text\",\"input-sm\",[23,3,[\"key\"]],[28,\"t\",[\"cruVirtualService.http.routes.matches.key.placeholder\"],null]]]],false],[0,\"\\n\"]],\"parameters\":[]},null]],\"parameters\":[]},{\"statements\":[[0,\"              \"],[7,\"div\",true],[10,\"class\",\"text-muted\"],[8],[0,\"\\n                \"],[1,[28,\"t\",[\"generic.na\"],null],false],[0,\"\\n              \"],[9],[0,\"\\n\"]],\"parameters\":[]}],[0,\"          \"],[9],[0,\"\\n          \"],[7,\"td\",true],[10,\"class\",\"p-5\"],[8],[0,\"\\n\"],[4,\"input-or-display\",null,[[\"editable\",\"value\"],[[24,[\"editing\"]],[23,3,[\"condition\"]]]],{\"statements\":[[0,\"              \"],[1,[28,\"new-select\",null,[[\"classNames\",\"content\",\"localizedLabel\",\"value\"],[\"form-control\",[24,[\"conditions\"]],true,[23,3,[\"condition\"]]]]],false],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"          \"],[9],[0,\"\\n          \"],[7,\"td\",true],[10,\"class\",\"p-5\"],[8],[0,\"\\n\"],[4,\"input-or-display\",null,[[\"editable\",\"value\"],[[24,[\"editing\"]],[23,3,[\"value\"]]]],{\"statements\":[[0,\"              \"],[1,[28,\"input\",null,[[\"type\",\"class\",\"value\",\"placeholder\"],[\"text\",\"input-sm\",[23,3,[\"value\"]],[28,\"t\",[[28,\"concat\",[\"cruVirtualService.http.routes.matches.value.\",[23,3,[\"matchType\"]],\".\",[23,3,[\"condition\"]]],null]],null]]]],false],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"          \"],[9],[0,\"\\n\\n\"],[4,\"if\",[[24,[\"editing\"]]],null,{\"statements\":[[0,\"            \"],[7,\"td\",true],[10,\"class\",\"text-right\"],[8],[0,\"\\n              \"],[7,\"button\",false],[12,\"class\",\"btn bg-primary btn-sm\"],[3,\"action\",[[23,0,[]],\"removeMatch\",[23,3,[]]]],[8],[0,\"\\n                \"],[7,\"i\",true],[10,\"class\",\"icon icon-minus\"],[8],[9],[0,\"\\n                \"],[7,\"span\",true],[10,\"class\",\"sr-only\"],[8],[0,\"\\n                  \"],[1,[28,\"t\",[\"generic.remove\"],null],false],[0,\"\\n                \"],[9],[0,\"\\n              \"],[9],[0,\"\\n            \"],[9],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"        \"],[9],[0,\"\\n\"]],\"parameters\":[3,4]},null],[0,\"    \"],[9],[0,\"\\n  \"],[9],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[0,\"  \"],[7,\"div\",true],[10,\"class\",\"row text-center mt-20 mb-20 pt-10\"],[8],[0,\"\\n    \"],[7,\"span\",true],[10,\"class\",\"text-muted\"],[8],[0,\"\\n      \"],[1,[28,\"t\",[\"cruVirtualService.http.routes.matches.noMatches\"],null],false],[0,\"\\n    \"],[9],[0,\"\\n  \"],[9],[0,\"\\n\"]],\"parameters\":[]}],[4,\"if\",[[24,[\"editing\"]]],null,{\"statements\":[[0,\"  \"],[7,\"div\",true],[10,\"class\",\"row mt-20\"],[8],[0,\"\\n    \"],[7,\"button\",false],[12,\"class\",\"btn bg-link icon-btn pull-left\"],[3,\"action\",[[23,0,[]],\"addMatch\"]],[8],[0,\"\\n      \"],[7,\"span\",true],[10,\"class\",\"darken\"],[8],[0,\"\\n        \"],[7,\"i\",true],[10,\"class\",\"icon icon-plus text-small\"],[8],[9],[0,\"\\n      \"],[9],[0,\"\\n      \"],[7,\"span\",true],[8],[0,\"\\n        \"],[1,[28,\"t\",[\"cruVirtualService.http.routes.matches.addMatchLabel\"],null],false],[0,\"\\n      \"],[9],[0,\"\\n    \"],[9],[0,\"\\n  \"],[9],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"\\n\"],[4,\"advanced-section\",null,[[\"advanced\"],[[24,[\"advanced\"]]]],{\"statements\":[[0,\"  \"],[7,\"div\",true],[10,\"class\",\"row mt-20\"],[8],[0,\"\\n    \"],[7,\"div\",true],[10,\"class\",\"col span-4\"],[8],[0,\"\\n      \"],[7,\"label\",true],[10,\"class\",\"acc-label\"],[11,\"for\",[29,[[28,\"concat\",[[24,[\"elementId\"]],\"-input-port\"],null]]]],[8],[0,\"\\n        \"],[1,[28,\"t\",[\"cruVirtualService.http.routes.matches.port.label\"],null],false],[0,\"\\n      \"],[9],[0,\"\\n\"],[4,\"input-or-display\",null,[[\"editable\",\"value\"],[[24,[\"editing\"]],[24,[\"model\",\"port\"]]]],{\"statements\":[[0,\"        \"],[1,[28,\"input-integer\",null,[[\"id\",\"min\",\"max\",\"value\",\"classNames\",\"placeholder\"],[[28,\"concat\",[[24,[\"elementId\"]],\"-input-port\"],null],0,65535,[24,[\"model\",\"port\"]],\"form-control\",[28,\"t\",[\"cruVirtualService.http.routes.matches.port.placeholder\"],null]]]],false],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"    \"],[9],[0,\"\\n  \"],[9],[0,\"\\n  \"],[7,\"div\",true],[10,\"class\",\"row mt-20\"],[8],[0,\"\\n    \"],[7,\"div\",true],[10,\"class\",\"col span-6\"],[8],[0,\"\\n      \"],[1,[28,\"form-key-value\",null,[[\"editing\",\"addActionLabel\",\"header\",\"initialMap\",\"changed\"],[[24,[\"editing\"]],\"cruVirtualService.http.routes.matches.sourceLabels.addActionLabel\",[28,\"t\",[\"cruVirtualService.http.routes.matches.sourceLabels.label\"],null],[24,[\"model\",\"sourceLabels\"]],[28,\"action\",[[23,0,[]],\"setSourceLabels\"],null]]]],false],[0,\"\\n    \"],[9],[0,\"\\n    \"],[7,\"div\",true],[10,\"class\",\"col span-6\"],[8],[0,\"\\n\"],[4,\"form-value-array\",null,[[\"editing\",\"valueLabel\",\"addActionLabel\",\"changed\",\"addButtonClass\",\"initialValues\",\"showProTip\"],[[24,[\"editing\"]],\"cruVirtualService.gateways.label\",\"cruVirtualService.gateways.add\",[28,\"action\",[[23,0,[]],\"setGateways\"],null],\"btn bg-link icon-btn\",[24,[\"model\",\"gateways\"]],false]],{\"statements\":[[4,\"input-or-display\",null,[[\"editable\",\"value\"],[[24,[\"editing\"]],[23,2,[\"value\"]]]],{\"statements\":[[0,\"          \"],[1,[28,\"input\",null,[[\"class\",\"type\",\"value\",\"placeholder\"],[\"form-control input-sm\",\"text\",[23,2,[\"value\"]],[28,\"t\",[\"cruVirtualService.gateways.placeholder\"],null]]]],false],[0,\"\\n\"]],\"parameters\":[]},null]],\"parameters\":[1,2]},null],[0,\"    \"],[9],[0,\"\\n  \"],[9],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"\\n\"],[7,\"hr\",true],[10,\"class\",\"mt-30\"],[8],[9]],\"hasEval\":false}",
    "meta": {
      "moduleName": "istio/components/http-route-match/template.hbs"
    }
  });

  _exports.default = _default;
});
define.alias("shared/components/huawei-user-labels/component", "istio/components/huawei-user-labels/component");
define.alias("shared/components/identity-block/component", "istio/components/identity-block/component");
define.alias("liquid-fire/components/illiquid-model", "istio/components/illiquid-model");
define.alias("shared/components/input-answer-row/component", "istio/components/input-answer-row/component");
define.alias("shared/components/input-answers/component", "istio/components/input-answers/component");
define.alias("shared/components/input-custom-answers/component", "istio/components/input-custom-answers/component");
define.alias("shared/components/input-float/component", "istio/components/input-float/component");
define.alias("shared/components/input-identity/component", "istio/components/input-identity/component");
define.alias("shared/components/input-int/component", "istio/components/input-int/component");
define.alias("shared/components/input-integer/component", "istio/components/input-integer/component");
define.alias("shared/components/input-number/component", "istio/components/input-number/component");
define.alias("shared/components/input-or-display/component", "istio/components/input-or-display/component");
define.alias("shared/components/input-paste/component", "istio/components/input-paste/component");
define.alias("shared/components/input-slider/component", "istio/components/input-slider/component");
define.alias("shared/components/input-suggest/component", "istio/components/input-suggest/component");
define.alias("shared/components/input-text-file/component", "istio/components/input-text-file/component");
define.alias("shared/components/input-url/component", "istio/components/input-url/component");
define.alias("shared/components/input-yaml/component", "istio/components/input-yaml/component");
define("istio/components/istio-catalog/component", ["exports", "istio/components/istio-catalog/template", "shared/mixins/crud-catalog", "shared/utils/util", "shared/utils/parse-unit", "shared/mixins/reservation-check", "shared/mixins/catalog-upgrade", "semver"], function (_exports, _template, _crudCatalog, _util, _parseUnit, _reservationCheck, _catalogUpgrade, _semver) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _ANSWER_TO_CONFIG;

  function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  var GATEWAY_TYPE = ['NodePort', 'LoadBalancer'];
  var PERSISTENCE_KEYS = ['existingClaim', 'size', 'storageClass'];
  var DEFAULT_HTTP2_PORT = 31380;
  var DEFAULT_HTTPS_PORT = 31390;
  var GATEWAY_ENABLED = 'gateways.enabled';
  var HTTP2_PORT = 'gateways.istio-ingressgateway.ports[0].nodePort';
  var HTTPS_PORT = 'gateways.istio-ingressgateway.ports[1].nodePort';
  var LB_IP = 'gateways.istio-ingressgateway.loadBalancerIP';
  var LB_SOURCE_RANGES = 'gateways.istio-ingressgateway.loadBalancerSourceRanges';
  var PILOT_REQUEST_CPU = 'pilot.resources.requests.cpu';
  var PILOT_REQUEST_MEM = 'pilot.resources.requests.memory';
  var PILOT_LIMIT_CPU = 'pilot.resources.limits.cpu';
  var PILOT_LIMIT_MEM = 'pilot.resources.limits.memory';
  var PILOT_NODE_SELECTOR_PREFIX = 'pilot.nodeSelector.';
  var PILOT_TOLERATION = 'pilot.tolerations';
  var MIXER_REQUEST_CPU = 'mixer.telemetry.resources.requests.cpu';
  var MIXER_REQUEST_MEM = 'mixer.telemetry.resources.requests.memory';
  var MIXER_LIMIT_CPU = 'mixer.telemetry.resources.limits.cpu';
  var MIXER_LIMIT_MEM = 'mixer.telemetry.resources.limits.memory';
  var MIXER_NODE_SELECTOR_PREFIX = 'mixer.nodeSelector.';
  var MIXER_TOLERATION = 'mixer.tolerations';
  var POLICY_REQUEST_CPU = 'mixer.policy.resources.requests.cpu';
  var POLICY_REQUEST_MEM = 'mixer.policy.resources.requests.memory';
  var POLICY_LIMIT_CPU = 'mixer.policy.resources.limits.cpu';
  var POLICY_LIMIT_MEM = 'mixer.policy.resources.limits.memory';
  var GATEWAY_REQUEST_CPU = 'gateways.istio-ingressgateway.resources.requests.cpu';
  var GATEWAY_REQUEST_MEM = 'gateways.istio-ingressgateway.resources.requests.memory';
  var GATEWAY_LIMIT_CPU = 'gateways.istio-ingressgateway.resources.limits.cpu';
  var GATEWAY_LIMIT_MEM = 'gateways.istio-ingressgateway.resources.limits.memory';
  var GATEWAY_NODE_SELECTOR_PREFIX = 'gateways.istio-ingressgateway.nodeSelector.';
  var GATEWAY_TOLERATION = 'gateways.istio-ingressgateway.tolerations';
  var TRACING_REQUEST_CPU = 'tracing.jaeger.resources.requests.cpu';
  var TRACING_REQUEST_MEM = 'tracing.jaeger.resources.requests.memory';
  var TRACING_LIMIT_CPU = 'tracing.jaeger.resources.limits.cpu';
  var TRACING_LIMIT_MEM = 'tracing.jaeger.resources.limits.memory';
  var TRACING_NODE_SELECTOR_PREFIX = 'tracing.nodeSelector.';
  var TRACING_TOLERATION = 'tracing.tolerations';
  var MEMBERS = 'global.members';
  var MEMBER_USER = 'User';
  var MEMBER_GROUP = 'Group';
  var MEMBER_SYSYTEM = 'system:authenticated';
  var ANSWER_TO_CONFIG = (_ANSWER_TO_CONFIG = {
    'tracing.enabled': 'tracingEnabled'
  }, _defineProperty(_ANSWER_TO_CONFIG, PILOT_REQUEST_CPU, 'pilotRequestCpu'), _defineProperty(_ANSWER_TO_CONFIG, PILOT_REQUEST_MEM, 'pilotRequestMemory'), _defineProperty(_ANSWER_TO_CONFIG, PILOT_LIMIT_MEM, 'pilotLimitMemory'), _defineProperty(_ANSWER_TO_CONFIG, PILOT_LIMIT_CPU, 'pilotLimitCpu'), _defineProperty(_ANSWER_TO_CONFIG, GATEWAY_ENABLED, 'gatewayEnabled'), _defineProperty(_ANSWER_TO_CONFIG, 'gateways.istio-ingressgateway.type', 'gatewayType'), _defineProperty(_ANSWER_TO_CONFIG, LB_IP, 'loadBalancerIP'), _defineProperty(_ANSWER_TO_CONFIG, MIXER_REQUEST_MEM, 'mixerTelemetryRequestMemory'), _defineProperty(_ANSWER_TO_CONFIG, MIXER_LIMIT_MEM, 'mixerTelemetryLimitMemory'), _defineProperty(_ANSWER_TO_CONFIG, MIXER_REQUEST_CPU, 'mixerTelemetryRequestCpu'), _defineProperty(_ANSWER_TO_CONFIG, MIXER_LIMIT_CPU, 'mixerTelemetryLimitCpu'), _defineProperty(_ANSWER_TO_CONFIG, 'pilot.traceSampling', 'traceSampling'), _defineProperty(_ANSWER_TO_CONFIG, 'mixer.policy.enabled', 'mixerPolicyEnabled'), _defineProperty(_ANSWER_TO_CONFIG, 'mtls.enabled', 'mtlsEnabled'), _defineProperty(_ANSWER_TO_CONFIG, TRACING_REQUEST_CPU, 'tracingRequestCpu'), _defineProperty(_ANSWER_TO_CONFIG, TRACING_REQUEST_MEM, 'tracingRequestMemory'), _defineProperty(_ANSWER_TO_CONFIG, TRACING_LIMIT_CPU, 'tracingLimitCpu'), _defineProperty(_ANSWER_TO_CONFIG, TRACING_LIMIT_MEM, 'tracingLimitMemory'), _defineProperty(_ANSWER_TO_CONFIG, GATEWAY_REQUEST_CPU, 'gatewayRequestCpu'), _defineProperty(_ANSWER_TO_CONFIG, GATEWAY_REQUEST_MEM, 'gatewayRequestMemory'), _defineProperty(_ANSWER_TO_CONFIG, GATEWAY_LIMIT_CPU, 'gatewayLimitCpu'), _defineProperty(_ANSWER_TO_CONFIG, GATEWAY_LIMIT_MEM, 'gatewayLimitMemory'), _defineProperty(_ANSWER_TO_CONFIG, POLICY_REQUEST_MEM, 'mixerPolicyRequestMemory'), _defineProperty(_ANSWER_TO_CONFIG, POLICY_LIMIT_MEM, 'mixerPolicyLimitMemory'), _defineProperty(_ANSWER_TO_CONFIG, POLICY_REQUEST_CPU, 'mixerPolicyRequestCpu'), _defineProperty(_ANSWER_TO_CONFIG, POLICY_LIMIT_CPU, 'mixerPolicyLimitCpu'), _ANSWER_TO_CONFIG);
  var HIDDEN_KEYS = {
    'enableCRDs': true,
    'mixer.enabled': true,
    'pilot.enabled': true,
    'security.enabled': true,
    'nodeagent.enabled': false,
    'istio_cni.enabled': false,
    'istiocoredns.enabled': false,
    'sidecarInjectorWebhook.enabled': true,
    'kiali.enabled': true,
    'galley.enabled': true,
    'certmanager.enabled': false,
    'global.rancher.domain': '',
    'global.rancher.clusterId': '',
    'global.monitoring.type': 'cluster-monitoring'
  };
  var NODE_PORT_KEYS = {
    'gateways.istio-ingressgateway.ports[0].name': 'http2',
    'gateways.istio-ingressgateway.ports[0].port': 80,
    'gateways.istio-ingressgateway.ports[1].name': 'https',
    'gateways.istio-ingressgateway.ports[1].port': 443
  };
  var WORKLOADS = ['mixerTelemetry', 'tracing', 'gateway', 'pilot', 'mixerPolicy'];
  var ISTIO_TEMPLATE = 'system-library-rancher-istio';
  var NODE_EXPORTER_CPU = 100;
  var NODE_EXPORTER_MEMORY = 30;
  var MONITORING_MIN_CPU = 650;
  var MONITORING_MIN_MEMORY = 650;
  var PROMETHEUS_DEFAULT_CPU = 750;
  var PROMETHEUS_DEFAULT_MEMORY = 750;
  var MONITORING_CLUSTER_CPU = PROMETHEUS_DEFAULT_CPU + MONITORING_MIN_CPU;
  var MONITORING_CLUSTER_MEMORY = PROMETHEUS_DEFAULT_MEMORY + MONITORING_MIN_MEMORY;
  var ISTIO_CLUSTER_CPU = 500;
  var ISTIO_CLUSTER_MEMORY = 500;
  var ISTIO_BREAKING_VERSION = '1.4.2';

  var _default = Ember.Component.extend(_crudCatalog.default, _reservationCheck.default, _catalogUpgrade.default, {
    scope: Ember.inject.service(),
    intl: Ember.inject.service(),
    grafana: Ember.inject.service(),
    modalService: Ember.inject.service('modal'),
    layout: _template.default,
    answers: null,
    appName: 'cluster-istio',
    nsName: 'istio-system',
    templateId: ISTIO_TEMPLATE,
    templateName: 'rancher-istio',
    level: Ember.computed.alias('scope.currentPageScope'),
    cluster: Ember.computed.alias('scope.currentCluster'),
    enableClusterMonitoring: Ember.computed.alias('scope.currentCluster.enableClusterMonitoring'),
    init: function init() {
      this._super.apply(this, arguments);

      this.initConfig();
      this.initWorkloads();

      if (Ember.get(this, 'enabled')) {
        this.initAnswers();
      }
    },
    actions: {
      save: function save(cb) {
        var _this = this;

        if (!Ember.get(this, 'enableClusterMonitoring')) {
          this.enableMonitoring();
        }

        Ember.set(this, 'errors', []);
        var errors = this.validate() || [];

        if (errors.length > 0) {
          Ember.set(this, 'errors', errors);
          cb();
          return;
        }

        var answers = _objectSpread({}, HIDDEN_KEYS, {
          'global.rancher.domain': window.location.host,
          'global.rancher.clusterId': Ember.get(this, 'cluster.id')
        });

        var answerKeys = Object.keys(ANSWER_TO_CONFIG) || [];
        answerKeys.map(function (key) {
          var value = Ember.get(_this, "config.".concat(ANSWER_TO_CONFIG[key]));

          if (value === undefined || value === '') {
            return;
          }

          switch (key) {
            case PILOT_REQUEST_CPU:
            case PILOT_LIMIT_CPU:
            case MIXER_REQUEST_CPU:
            case MIXER_LIMIT_CPU:
            case TRACING_REQUEST_CPU:
            case TRACING_LIMIT_CPU:
            case GATEWAY_REQUEST_CPU:
            case GATEWAY_LIMIT_CPU:
            case POLICY_REQUEST_CPU:
            case POLICY_LIMIT_CPU:
              answers[key] = "".concat(value, "m");
              break;

            case PILOT_REQUEST_MEM:
            case PILOT_LIMIT_MEM:
            case MIXER_REQUEST_MEM:
            case MIXER_LIMIT_MEM:
            case TRACING_REQUEST_MEM:
            case TRACING_LIMIT_MEM:
            case GATEWAY_REQUEST_MEM:
            case GATEWAY_LIMIT_MEM:
            case POLICY_REQUEST_MEM:
            case POLICY_LIMIT_MEM:
              answers[key] = "".concat(value, "Mi");
              break;

            default:
              answers[key] = value;
          }
        });
        ['tracing', 'gateway', 'pilot', 'mixer'].map(function (component) {
          (Ember.get(_this, "".concat(component, "NodeSelectors")) || []).map(function (selector) {
            var key = selector.key,
                value = selector.value;

            if (key.includes('.')) {
              key = key.replace(/\./g, '\\.');
            }

            if (component === 'gateway') {
              answers["gateways.istio-ingressgateway.nodeSelector.".concat(key)] = value;
            } else {
              answers["".concat(component, ".nodeSelector.").concat(key)] = value;
            }
          });
        });

        if (Ember.get(this, 'config.gatewayEnabled') && Ember.get(this, 'config.gatewayType') === 'LoadBalancer') {
          (Ember.get(this, 'loadBalancerSourceRanges') || []).map(function (value, idx) {
            answers["".concat(LB_SOURCE_RANGES, "[").concat(idx, "]")] = value;
          });
        }

        if (Ember.get(this, 'config.gatewayEnabled') && Ember.get(this, 'config.gatewayType') === 'NodePort') {
          (Object.keys(NODE_PORT_KEYS) || []).map(function (key) {
            answers[key] = NODE_PORT_KEYS[key];
          });
          answers[HTTP2_PORT] = Ember.get(this, 'config.http2Port');
          answers[HTTPS_PORT] = Ember.get(this, 'config.httpsPort');
        }

        var users = Ember.get(this, 'globalStore').all('user');

        if (Ember.get(this, 'allowSystemGroup')) {
          answers["".concat(MEMBERS, "[0].kind")] = MEMBER_GROUP;
          answers["".concat(MEMBERS, "[0].name")] = MEMBER_SYSYTEM;
        } else {
          (Ember.get(this, 'members') || []).map(function () {
            var m = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
            var idx = arguments.length > 1 ? arguments[1] : undefined;
            var principalType = m.principalType,
                id = m.id;
            var name = id;

            if (principalType === 'user') {
              var filtered = users.filter(function () {
                var u = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
                return u.principalIds.includes(id);
              }).get('firstObject');

              if (filtered) {
                name = Ember.get(filtered, 'id');
              } else {
                return;
              }
            }

            answers["".concat(MEMBERS, "[").concat(idx, "].kind")] = (0, _util.ucFirst)(principalType);
            answers["".concat(MEMBERS, "[").concat(idx, "].name")] = name;
          });
        }

        ['gateway', 'pilot', 'mixer', 'tracing'].map(function (component) {
          (Ember.get(_this, "".concat(component, "Tolerations")) || []).map(function (t, index) {
            Object.keys(t).map(function (key) {
              if (t[key]) {
                if (component === 'gateway') {
                  answers["gateways.istio-ingressgateway.tolerations[".concat(index, "].").concat(key)] = t[key];
                } else {
                  answers["".concat(component, ".tolerations[").concat(index, "].").concat(key)] = t[key];
                }
              }
            });
          });
        });
        this.save(cb, answers);
      },
      addAuthorizedPrincipal: function addAuthorizedPrincipal(principal) {
        if (principal) {
          var _this$members = this.members,
              members = _this$members === void 0 ? [] : _this$members,
              globalStore = this.globalStore;
          members.pushObject(globalStore.createRecord(principal));
          Ember.set(this, 'members', members);
        }
      },
      removeMember: function removeMember(member) {
        var _this$members2 = this.members,
            members = _this$members2 === void 0 ? [] : _this$members2;
        members.removeObject(member);
      },
      disable: function disable() {
        var app = this.app,
            modalService = this.modalService;
        modalService.toggleModal('modal-delete-istio', {
          escToClose: true,
          istioApp: app
        });
      }
    },
    workloadEnabledChange: Ember.observer('config.tracingEnabled', 'config.gatewayEnabled', 'config.mixerPolicyEnabled', function () {
      var _this2 = this;

      ['tracing', 'gateway'].map(function (w) {
        if (!Ember.get(_this2, "config.".concat(w, "Enabled"))) {
          Ember.set(_this2, "".concat(w, "NodeSelectors"), []);
        }
      });
      this.notifyPropertyChange('requestsCpu');
      this.notifyPropertyChange('requestsMemory');
      this.notifyPropertyChange('saveDisabled');
    }),
    gatewayTypeContent: Ember.computed(function () {
      return GATEWAY_TYPE.map(function (value) {
        return {
          label: value,
          value: value
        };
      });
    }),
    kialiUrl: Ember.computed('cluster.id', 'templateVersion', function () {
      var clusterId = this.cluster.id,
          templateVersion = this.templateVersion;
      var kialiPort = '-http:80';

      if (!Ember.isEmpty(templateVersion) && _semver.default.gte(templateVersion, ISTIO_BREAKING_VERSION)) {
        kialiPort = ':20001';
      }

      return "/k8s/clusters/".concat(clusterId, "/api/v1/namespaces/istio-system/services/http:kiali").concat(kialiPort, "/proxy/");
    }),
    jaegerUrl: Ember.computed('cluster.id', function () {
      return "/k8s/clusters/".concat(Ember.get(this, 'cluster.id'), "/api/v1/namespaces/istio-system/services/http:tracing:80/proxy/jaeger/search");
    }),
    prometheusUrl: Ember.computed('cluster.id', function () {
      return "/k8s/clusters/".concat(Ember.get(this, 'cluster.id'), "/api/v1/namespaces/cattle-prometheus/services/http:access-prometheus:80/proxy/");
    }),
    saveDisabled: Ember.computed('mixerTelemetryWarning', 'enabled', 'istioWarning', 'pilotWarning', 'tracingWarning', 'gatewayWarning', 'mixerPolicyWarning', 'mixerWarning', function () {
      var _this3 = this;

      return [].concat(WORKLOADS, ['mixer']).reduce(function (out, w) {
        if (['gateway', 'tracing', 'mixerPolicy'].includes(w) && !Ember.get(_this3, "config.".concat(w, "Enabled"))) {
          return out || Ember.get(_this3, "".concat(w, "Warning")) || false;
        } else if (w === 'mixerTelemetry') {
          return out || Ember.get(_this3, 'mixerTelemetryWarning') || false || Ember.get(_this3, 'mixerWarning');
        } else {
          return out || Ember.get(_this3, "".concat(w, "Warning")) || false;
        }
      }, false) || Ember.get(this, 'istioWarning') || false;
    }),
    canReuse: Ember.computed('monitoringApp.externalIdInfo.version', function () {
      var version = Ember.get(this, 'monitoringApp.externalIdInfo.version');
      var cannotReuseVersion = '0.0.3';
      return _semver.default.gt(_semver.default.coerce(version), _semver.default.coerce(cannotReuseVersion));
    }),
    istioWarning: Ember.computed('insufficientCpu', 'insufficientMemory', function () {
      var insufficientCpu = this.insufficientCpu,
          insufficientMemory = this.insufficientMemory,
          intl = this.intl,
          minCpu = this.minCpu,
          minMemory = this.minMemory,
          enabled = this.enabled;
      var prefix = 'clusterIstioPage.insufficientSize.total';
      var action = enabled ? 'update' : 'enable';

      if (insufficientCpu && insufficientMemory) {
        return intl.t("".concat(prefix, ".all"), {
          minCpu: minCpu,
          minMemory: minMemory,
          action: action
        });
      } else if (insufficientCpu) {
        return intl.t("".concat(prefix, ".cpu"), {
          minCpu: minCpu,
          action: action
        });
      } else if (insufficientMemory) {
        return intl.t("".concat(prefix, ".memory"), {
          minMemory: minMemory,
          action: action
        });
      }
    }),
    enabled: Ember.computed('app.state', function () {
      return !!Ember.get(this, 'app') && Ember.get(this, 'app.state') !== 'removing';
    }),
    nsNeedMove: Ember.computed('namespace.projectId', 'project.id', function () {
      var _this$namespace = this.namespace,
          namespace = _this$namespace === void 0 ? {} : _this$namespace,
          _this$project = this.project,
          project = _this$project === void 0 ? {} : _this$project;
      return namespace.projectId !== project.id;
    }),
    requestsCpu: Ember.computed('config.mixerTelemetryRequestCpu', 'config.pilotRequestCpu', 'config.gatewayRequestCpu', 'config.tracingRequestCpu', 'config.mixerPolicyRequestCpu', function () {
      var _this4 = this;

      return WORKLOADS.filter(function (w) {
        if (['gateway', 'tracing', 'mixerPolicy'].includes(w) && !Ember.get(_this4, "config.".concat(w, "Enabled"))) {
          return false;
        }

        return true;
      }).reduce(function (all, w) {
        return all + parseInt(Ember.get(_this4, "config.".concat(w, "RequestCpu")) || 0);
      }, 0);
    }),
    requestsMemory: Ember.computed('config.mixerTelemetryRequestMemory', 'config.pilotRequestMemory', 'config.gatewayRequestMemory', 'config.tracingRequestMemory', 'config.mixerPolicyRequestMemory', function () {
      var _this5 = this;

      return WORKLOADS.filter(function (w) {
        if (['gateway', 'tracing', 'mixerPolicy'].includes(w) && !Ember.get(_this5, "config.".concat(w, "Enabled"))) {
          return false;
        }

        return true;
      }).reduce(function (all, w) {
        return all + parseInt(Ember.get(_this5, "config.".concat(w, "RequestMemory")) || 0);
      }, 0);
    }),
    mixerSchedulableNodes: Ember.computed('mixerNodeSelectors.[]', 'cluster.nodes.@each.{allocatable,requested}', 'config.mixerPolicyEnabled', function () {
      return this.getSchedulableNodes('mixer');
    }),
    insufficientMixerCpu: Ember.computed('mixerSchedulableNodes.@each.{allocatable,requested}', 'config.mixerPolicyEnabled', 'config.mixerTelemetryRequestCpu', 'config.mixerPolicyRequestCpu', 'cluster.nodes.@each.{allocatable,requested}', function () {
      var reservation;

      if (Ember.get(this, 'config.mixerPolicyEnabled')) {
        reservation = Math.max(parseInt(Ember.get(this, 'config.mixerTelemetryRequestCpu') || '0'), parseInt(Ember.get(this, 'config.mixerPolicyRequestCpu') || '0'));
      } else {
        reservation = parseInt(Ember.get(this, 'config.mixerTelemetryRequestCpu') || '0');
      }

      return this.getComponentInsufficient('mixer', 'cpu', reservation);
    }),
    insufficientMixerMemory: Ember.computed('mixerSchedulableNodes.@each.{allocatable,requested}', 'config.mixerPolicyEnabled', 'config.mixerTelemetryRequestMemory', 'config.mixerPolicyRequestMemory', 'cluster.nodes.@each.{allocatable,requested}', function () {
      var reservation;

      if (Ember.get(this, 'config.mixerPolicyEnabled')) {
        reservation = Math.max(parseInt(Ember.get(this, 'config.mixerTelemetryRequestMemory') || '0'), parseInt(Ember.get(this, 'config.mixerPolicyRequestMemory') || '0'));
      } else {
        reservation = parseInt(Ember.get(this, 'config.mixerTelemetryRequestMemory') || '0');
      }

      return this.getComponentInsufficient('mixer', 'memory', reservation);
    }),
    mixerWarning: Ember.computed('insufficientMixerCpu', 'insufficientMixerMemory', 'insufficientMixerTelemetryMemory', 'insufficientMixerTelemetryCpu', 'mixerNodeSelectors.[]', 'config.mixerPolicyEnabled', function () {
      if ((Ember.get(this, 'mixerNodeSelectors') || []).length === 0) {
        return;
      }

      var displayName = Ember.get(this, 'config.mixerPolicyEnabled') ? Ember.get(this, 'intl').t('clusterIstioPage.telemetryAndPolicy') : undefined;
      var componentCpu;
      var componentMemory;

      if (Ember.get(this, 'config.mixerPolicyEnabled')) {
        componentCpu = Math.max(parseInt(Ember.get(this, 'config.mixerTelemetryRequestCpu') || '0'), parseInt(Ember.get(this, 'config.mixerPolicyRequestCpu') || '0'));
        componentMemory = Math.max(parseInt(Ember.get(this, 'config.mixerTelemetryRequestMemory') || '0'), parseInt(Ember.get(this, 'config.mixerPolicyRequestMemory') || '0'));
      } else {
        componentCpu = parseInt(Ember.get(this, 'config.mixerTelemetryRequestCpu') || '0');
        componentMemory = parseInt(Ember.get(this, 'config.mixerTelemetryRequestMemory') || '0');
      }

      return this.getComponentWarning('mixer', componentCpu, componentMemory, displayName);
    }),
    istioVersions: Ember.computed('availableVersions', 'templateLables', function () {
      var _this$availableVersio = this.availableVersions,
          availableVersions = _this$availableVersio === void 0 ? [] : _this$availableVersio,
          _this$templateLables = this.templateLables,
          templateLables = _this$templateLables === void 0 ? {} : _this$templateLables;
      return availableVersions.map(function (v) {
        var key = "rancher.istio.v".concat(v.value);
        return {
          label: "".concat(v.label, " (Istio ").concat(templateLables[key], ")"),
          value: v.value
        };
      });
    }),
    monitoringApps: Ember.computed('monitoringApp', function () {
      return [Ember.get(this, 'monitoringApp')];
    }),
    clusterLevelMinCpu: Ember.computed('cluster.enableClusterMonitoring', function () {
      if (Ember.get(this, 'enableClusterMonitoring')) {
        return ISTIO_CLUSTER_CPU;
      } else {
        var allNodes = Ember.get(this, 'cluster.nodes') || [];
        var schedulableNodes = allNodes.filterBy('isUnschedulable', false);
        return ISTIO_CLUSTER_CPU + MONITORING_CLUSTER_CPU + Ember.get(schedulableNodes, 'length') * NODE_EXPORTER_CPU;
      }
    }),
    clusterLevelMinMemory: Ember.computed('cluster.enableClusterMonitoring', function () {
      if (Ember.get(this, 'enableClusterMonitoring')) {
        return ISTIO_CLUSTER_MEMORY;
      } else {
        var allNodes = Ember.get(this, 'scope.currentCluster.nodes') || [];
        var schedulableNodes = allNodes.filterBy('isUnschedulable', false);
        return ISTIO_CLUSTER_MEMORY + MONITORING_CLUSTER_MEMORY + Ember.get(schedulableNodes, 'length') * NODE_EXPORTER_MEMORY;
      }
    }),
    canEnable: Ember.computed('cluster.isWindows', function () {
      if (Ember.get(this, 'cluster.isWindows')) {
        return false;
      } else {
        return true;
      }
    }),
    willSavePersistence: function willSavePersistence(answers, component) {
      var _this6 = this;

      PERSISTENCE_KEYS.map(function (k) {
        var key = "".concat(component, ".persistence.").concat(k);
        var useStorageClass = Ember.get(_this6, "use".concat((0, _util.ucFirst)(component), "StorageClass"));

        if (['storageClass', 'size'].includes(k) && useStorageClass) {
          answers[key] = Ember.get(_this6, key);
        }

        if (k === 'existingClaim' && !useStorageClass) {
          answers[key] = Ember.get(_this6, key);
        }
      });
    },
    validate: function validate() {
      var _this7 = this;

      var errors = [];
      ['pilot', 'mixerTelemetry'].map(function (w) {
        errors.pushObjects(_this7.validateLimitAndRequest(w));
      });

      if (Ember.get(this, 'config.gatewayEnabled')) {
        errors.pushObjects(this.validateLimitAndRequest('gateway'));
      }

      if (Ember.get(this, 'config.tracingEnabled')) {
        errors.pushObjects(this.validateLimitAndRequest('tracing'));
      }

      if (Ember.get(this, 'config.mixerPolicyEnabled')) {
        errors.pushObjects(this.validateLimitAndRequest('mixerPolicy'));
      }

      ['traceSampling'].map(function (field) {
        if (!Ember.get(_this7, "config.".concat(field))) {
          errors.pushObject((0, _util.requiredError)("clusterIstioPage.config.".concat(field, ".label")));
        }
      });

      if (Ember.get(this, 'config.gatewayEnabled') && Ember.get(this, 'config.gatewayType') === 'NodePort') {
        ['http2Port', 'httpsPort'].map(function (field) {
          if (!Ember.get(_this7, "config.".concat(field))) {
            errors.pushObject((0, _util.requiredError)("clusterIstioPage.config.".concat(field, ".label")));
          }
        });
      }

      return errors;
    },
    validatePV: function validatePV(component) {
      var intl = this.intl,
          _this$storageClasses = this.storageClasses,
          storageClasses = _this$storageClasses === void 0 ? [] : _this$storageClasses;
      var errors = [];
      var defaultStorageClasses = storageClasses.filter(function (s) {
        return s.annotations && (s.annotations['storageclass.kubernetes.io/is-default-class'] === 'true' || s.annotations['storageclass.beta.kubernetes.io/is-default-class'] === 'true');
      });

      if (Ember.get(this, "use".concat((0, _util.ucFirst)(component), "StorageClass"))) {
        if (defaultStorageClasses.length === 0 && !Ember.get(this, "".concat(component, ".persistence.storageClass"))) {
          var emptyError = intl.t('globalRegistryPage.config.storageClass.emptyError');
          errors.pushObject(emptyError);
        }

        if (!Ember.get(this, "".concat(component, ".persistence.size"))) {
          errors.pushObject(intl.t('globalRegistryPage.config.storageClass.sizeRequired', {
            component: (0, _util.ucFirst)(component)
          }));
        }
      } else if (!Ember.get(this, "".concat(component, ".persistence.existingClaim"))) {
        errors.pushObject((0, _util.requiredError)("clusterIstioPage.existingClaim.label", {
          component: (0, _util.ucFirst)(component)
        }));
      }

      return errors;
    },
    initConfig: function initConfig() {
      var config = {
        tracingEnabled: true,
        kialiEnabled: true,
        autoInject: true,
        mtlsEnabled: false,
        gatewayType: 'NodePort',
        gatewayEnabled: false,
        http2Port: DEFAULT_HTTP2_PORT,
        httpsPort: DEFAULT_HTTPS_PORT,
        mixerTelemetryRequestCpu: 1000,
        mixerTelemetryLimitCpu: 4800,
        mixerTelemetryRequestMemory: 1024,
        mixerTelemetryLimitMemory: 4096,
        traceSampling: 1,
        mixerPolicyEnabled: true,
        pilotRequestCpu: 500,
        pilotRequestMemory: 2048,
        pilotLimitCpu: 1000,
        pilotLimitMemory: 4096,
        gatewayRequestCpu: 100,
        gatewayLimitCpu: 2000,
        gatewayRequestMemory: 128,
        gatewayLimitMemory: 1024,
        tracingRequestCpu: 100,
        tracingLimitCpu: 500,
        tracingRequestMemory: 100,
        tracingLimitMemory: 1024,
        mixerPolicyRequestCpu: 1000,
        mixerPolicyLimitCpu: 4800,
        mixerPolicyRequestMemory: 1024,
        mixerPolicyLimitMemory: 4096
      };
      Ember.setProperties(this, {
        config: config,
        allowSystemGroup: false
      });
    },
    initWorkloads: function initWorkloads() {
      var _this8 = this;

      WORKLOADS.map(function (w) {
        Ember.defineProperty(_this8, "".concat(w, "SchedulableNodes"), Ember.computed("".concat(w, "NodeSelectors.[]"), 'cluster.nodes.@each.{allocatable,requested}', "config.".concat(w, "Enabled"), function () {
          return _this8.getSchedulableNodes(w);
        }));
        Ember.defineProperty(_this8, "insufficient".concat((0, _util.ucFirst)(w), "Cpu"), Ember.computed("".concat(w, "SchedulableNodes.@each.{allocatable,requested}"), "config.".concat(w, "RequestCpu"), 'cluster.nodes.@each.{allocatable,requested}', function () {
          return _this8.getComponentInsufficient(w, 'cpu');
        }));
        Ember.defineProperty(_this8, "insufficient".concat((0, _util.ucFirst)(w), "Memory"), Ember.computed("".concat(w, "SchedulableNodes.@each.{allocatable,requested}"), "config.".concat(w, "RequestMemory"), 'cluster.nodes.@each.{allocatable,requested}', function () {
          return _this8.getComponentInsufficient(w, 'memory');
        }));
        Ember.defineProperty(_this8, "".concat(w, "Warning"), Ember.computed("insufficient".concat((0, _util.ucFirst)(w), "Cpu"), "insufficient".concat((0, _util.ucFirst)(w), "Memory"), function () {
          return _this8.getComponentWarning(w);
        }));
      });
    },
    initAnswers: function initAnswers() {
      var _this9 = this;

      var customAnswers = {};
      var answers = Ember.get(this, 'app.answers') || {};
      var answerKeys = Object.keys(ANSWER_TO_CONFIG) || [];
      var mixerNodeSelector = {};
      var pilotNodeSelector = {};
      var gatewayNodeSelector = {};
      var tracingNodeSelector = {};
      var loadBalancerSourceRanges = [];
      Object.keys(answers).filter(function (key) {
        return key.startsWith(MIXER_NODE_SELECTOR_PREFIX);
      }).map(function (k) {
        var value = answers[k] || '';
        var key = k.replace(MIXER_NODE_SELECTOR_PREFIX, '').replace(/\\\./g, '.');
        mixerNodeSelector[key] = value;
      });
      Object.keys(answers).filter(function (key) {
        return key.startsWith(PILOT_NODE_SELECTOR_PREFIX);
      }).map(function (k) {
        var value = answers[k] || '';
        var key = k.replace(PILOT_NODE_SELECTOR_PREFIX, '').replace(/\\\./g, '.');
        pilotNodeSelector[key] = value;
      });
      Object.keys(answers).filter(function (key) {
        return key.startsWith(GATEWAY_NODE_SELECTOR_PREFIX);
      }).map(function (k) {
        var value = answers[k] || '';
        var key = k.replace(GATEWAY_NODE_SELECTOR_PREFIX, '').replace(/\\\./g, '.');
        gatewayNodeSelector[key] = value;
      });
      Object.keys(answers).filter(function (key) {
        return key.startsWith(TRACING_NODE_SELECTOR_PREFIX);
      }).map(function (k) {
        var value = answers[k] || '';
        var key = k.replace(TRACING_NODE_SELECTOR_PREFIX, '').replace(/\\\./g, '.');
        tracingNodeSelector[key] = value;
      });
      Object.keys(answers).filter(function (key) {
        return key.startsWith("".concat(LB_SOURCE_RANGES, "["));
      }).map(function (k) {
        loadBalancerSourceRanges.pushObject(answers[k]);
      });
      var pilotTolerations = [];
      var mixerTolerations = [];
      var gatewayTolerations = [];
      var tracingTolerations = [];
      var pilotTolerationKeys = Object.keys(answers).filter(function (key) {
        return key.startsWith(PILOT_TOLERATION);
      });
      var pilotTolerationIndexs = pilotTolerationKeys.map(function (k) {
        return k.replace("".concat(PILOT_TOLERATION, "["), '').split('].').get('firstObject');
      }).uniq();
      pilotTolerationIndexs.map(function (idx) {
        pilotTolerations.pushObject({
          key: answers["".concat(PILOT_TOLERATION, "[").concat(idx, "].key")] || '',
          operator: answers["".concat(PILOT_TOLERATION, "[").concat(idx, "].operator")] || '',
          value: answers["".concat(PILOT_TOLERATION, "[").concat(idx, "].value")] || '',
          effect: answers["".concat(PILOT_TOLERATION, "[").concat(idx, "].effect")] || '',
          tolerationSeconds: answers["".concat(PILOT_TOLERATION, "[").concat(idx, "].tolerationSeconds")] || ''
        });
      });
      var mixerTolerationKeys = Object.keys(answers).filter(function (key) {
        return key.startsWith(MIXER_TOLERATION);
      });
      var mixerTolerationIndexs = mixerTolerationKeys.map(function (k) {
        return k.replace("".concat(MIXER_TOLERATION, "["), '').split('].').get('firstObject');
      }).uniq();
      mixerTolerationIndexs.map(function (idx) {
        mixerTolerations.pushObject({
          key: answers["".concat(MIXER_TOLERATION, "[").concat(idx, "].key")] || '',
          operator: answers["".concat(MIXER_TOLERATION, "[").concat(idx, "].operator")] || '',
          value: answers["".concat(MIXER_TOLERATION, "[").concat(idx, "].value")] || '',
          effect: answers["".concat(MIXER_TOLERATION, "[").concat(idx, "].effect")] || '',
          tolerationSeconds: answers["".concat(MIXER_TOLERATION, "[").concat(idx, "].tolerationSeconds")] || ''
        });
      });
      var gatewayTolerationKeys = Object.keys(answers).filter(function (key) {
        return key.startsWith(GATEWAY_TOLERATION);
      });
      var gatewayTolerationIndexs = gatewayTolerationKeys.map(function (k) {
        return k.replace("".concat(GATEWAY_TOLERATION, "["), '').split('].').get('firstObject');
      }).uniq();
      gatewayTolerationIndexs.map(function (idx) {
        gatewayTolerations.pushObject({
          key: answers["".concat(GATEWAY_TOLERATION, "[").concat(idx, "].key")] || '',
          operator: answers["".concat(GATEWAY_TOLERATION, "[").concat(idx, "].operator")] || '',
          value: answers["".concat(GATEWAY_TOLERATION, "[").concat(idx, "].value")] || '',
          effect: answers["".concat(GATEWAY_TOLERATION, "[").concat(idx, "].effect")] || '',
          tolerationSeconds: answers["".concat(GATEWAY_TOLERATION, "[").concat(idx, "].tolerationSeconds")] || ''
        });
      });
      var tracingTolerationKeys = Object.keys(answers).filter(function (key) {
        return key.startsWith(TRACING_TOLERATION);
      });
      var tracingTolerationIndexs = tracingTolerationKeys.map(function (k) {
        return k.replace("".concat(TRACING_TOLERATION, "["), '').split('].').get('firstObject');
      }).uniq();
      tracingTolerationIndexs.map(function (idx) {
        tracingTolerations.pushObject({
          key: answers["".concat(TRACING_TOLERATION, "[").concat(idx, "].key")] || '',
          operator: answers["".concat(TRACING_TOLERATION, "[").concat(idx, "].operator")] || '',
          value: answers["".concat(TRACING_TOLERATION, "[").concat(idx, "].value")] || '',
          effect: answers["".concat(TRACING_TOLERATION, "[").concat(idx, "].effect")] || '',
          tolerationSeconds: answers["".concat(TRACING_TOLERATION, "[").concat(idx, "].tolerationSeconds")] || ''
        });
      });
      this.updateCpuMemoryPreRequest();
      Ember.setProperties(this, {
        mixerNodeSelector: mixerNodeSelector,
        pilotNodeSelector: pilotNodeSelector,
        gatewayNodeSelector: gatewayNodeSelector,
        tracingNodeSelector: tracingNodeSelector,
        loadBalancerSourceRanges: loadBalancerSourceRanges,
        'config.http2Port': answers[HTTP2_PORT] || DEFAULT_HTTP2_PORT,
        'config.httpsPort': answers[HTTPS_PORT] || DEFAULT_HTTPS_PORT,
        pilotTolerations: pilotTolerations,
        mixerTolerations: mixerTolerations,
        gatewayTolerations: gatewayTolerations,
        tracingTolerations: tracingTolerations
      });
      this.initMembers();
      Object.keys(answers).forEach(function () {
        var key = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

        if (key.startsWith(MIXER_NODE_SELECTOR_PREFIX) || key.startsWith("".concat(LB_SOURCE_RANGES, "[")) || key.startsWith(PILOT_NODE_SELECTOR_PREFIX) || key.startsWith(GATEWAY_NODE_SELECTOR_PREFIX) || key.startsWith(TRACING_NODE_SELECTOR_PREFIX) || key.startsWith("".concat(MEMBERS, "[")) || key.startsWith("".concat(PILOT_TOLERATION)) || key.startsWith("".concat(MIXER_TOLERATION)) || key.startsWith("".concat(GATEWAY_TOLERATION)) || key.startsWith("".concat(TRACING_TOLERATION))) {
          return;
        }

        if (Object.keys(HIDDEN_KEYS).includes(key)) {
          return;
        }

        if (Object.keys(NODE_PORT_KEYS).includes(key) || key === HTTP2_PORT || key === HTTPS_PORT) {
          return;
        }

        if (answerKeys.includes(key)) {
          var value;

          switch (key) {
            case PILOT_REQUEST_CPU:
            case MIXER_REQUEST_CPU:
            case MIXER_LIMIT_CPU:
            case PILOT_LIMIT_CPU:
            case TRACING_REQUEST_CPU:
            case TRACING_LIMIT_CPU:
            case GATEWAY_REQUEST_CPU:
            case GATEWAY_LIMIT_CPU:
            case POLICY_REQUEST_CPU:
            case POLICY_LIMIT_CPU:
              value = (0, _util.convertToMillis)(answers[key] || '0');
              break;

            case PILOT_REQUEST_MEM:
            case PILOT_LIMIT_MEM:
            case MIXER_REQUEST_MEM:
            case MIXER_LIMIT_MEM:
            case TRACING_REQUEST_MEM:
            case TRACING_LIMIT_MEM:
            case GATEWAY_REQUEST_MEM:
            case GATEWAY_LIMIT_MEM:
            case POLICY_REQUEST_MEM:
            case POLICY_LIMIT_MEM:
              value = (0, _parseUnit.parseSi)(answers[key] || '0', 1024) / 1048576;
              break;

            default:
              value = answers[key];
          }

          return Ember.set(_this9, "config.".concat(ANSWER_TO_CONFIG[key]), value);
        }

        customAnswers[key] = answers[key];
        Ember.setProperties(_this9, {
          customAnswers: customAnswers
        });
      });
    },
    getEnalbedWorkloads: function getEnalbedWorkloads(answers) {
      var out = [];

      if (answers['pilot.enabled'] === 'true') {
        out.push('pilot');
      }

      if (answers['mixer.enabled'] === 'true') {
        out.push('mixer.telemetry');
      }

      if (answers['mixer.policy.enabled'] === 'true') {
        out.push('mixer.policy');
      }

      if (answers['gateways.enabled'] === 'true') {
        out.push('gateways.istio-ingressgateway');
      }

      if (answers['tracing.enabled'] === 'true') {
        out.push('tracing');
      }

      return out;
    },
    doneSaving: function doneSaving() {
      this.updateCpuMemoryPreRequest();
    },
    initMembers: function initMembers() {
      var _this10 = this;

      var _EmberGet = Ember.get(this, 'app'),
          _EmberGet$answers = _EmberGet.answers,
          answers = _EmberGet$answers === void 0 ? {} : _EmberGet$answers;

      var globalStore = this.globalStore;

      if (answers["".concat(MEMBERS, "[0].name")] === MEMBER_SYSYTEM && answers["".concat(MEMBERS, "[0].kind")] === 'Group') {
        Ember.set(this, 'allowSystemGroup', true);
      } else {
        Ember.set(this, 'allowSystemGroup', false);
        var users = globalStore.all('user');
        var keys = Object.keys(answers).filter(function () {
          var key = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
          return /^global.members\[\d\].name$/g.test(key);
        });
        var members = (keys || []).filter(function (key) {
          var kindKey = key.replace('.name', '.kind');
          var kind = answers[kindKey];
          return !(kind === MEMBER_GROUP && answers[key] === MEMBER_SYSYTEM);
        }).map(function (key) {
          var kindKey = key.replace('.name', '.kind');
          var kind = answers[kindKey];
          var id = answers[key];

          if (kind === MEMBER_USER) {
            var filtered = users.filter(function (u) {
              return (u.principalIds || []).includes("local://".concat(id));
            }).get('firstObject');

            if (filtered && filtered.principalIds) {
              var principalIds = filtered.principalIds || [];

              if (principalIds.length > 1) {
                id = principalIds.filter(function (f) {
                  return f !== "local://".concat(id);
                }).get('firstObject');
              } else {
                id = filtered.principalIds.get('firstObject');
              }
            }
          }

          return Ember.get(_this10, 'globalStore').createRecord({
            type: 'member',
            id: id
          });
        });
        var membersPromises = (members || []).map(function (m) {
          return globalStore.find('principal', m.id);
        });
        Ember.RSVP.allSettled(membersPromises).then(function (res) {
          if (_this10.isDestroyed || _this10.isDestroying) {
            return;
          }

          Ember.set(_this10, 'members', res.map(function (xhr) {
            if (xhr.state === 'fulfilled') {
              return xhr.value;
            }
          }));
        });
      }
    },
    enableMonitoring: function enableMonitoring() {
      var resource = Ember.get(this, 'cluster');
      var answers = {};
      answers['operator-init.enabled'] = 'true';
      answers['exporter-node.enabled'] = 'true';
      answers['exporter-node.ports.metrics.port'] = '9796';
      answers['exporter-kubelets.https'] = "".concat(!(Ember.get(this, 'scope.currentCluster.isGKE') || Ember.get(this, 'scope.currentCluster.isAKS')));
      answers['exporter-node.resources.limits.cpu'] = '200m';
      answers['exporter-node.resources.limits.memory'] = '200Mi';
      answers['operator.resources.limits.memory'] = '500Mi';
      answers['prometheus.retention'] = '12h';
      answers['grafana.persistence.enabled'] = 'false';
      answers['prometheus.persistence.enabled'] = 'false';
      answers['prometheus.persistence.storageClass'] = 'default';
      answers['grafana.persistence.storageClass'] = 'default';
      answers['grafana.persistence.size'] = '10Gi';
      answers['prometheus.persistence.size'] = '50Gi';
      answers['prometheus.resources.core.requests.cpu'] = '750m';
      answers['prometheus.resources.core.limits.cpu'] = '1000m';
      answers['prometheus.resources.core.requests.memory'] = '750Mi';
      answers['prometheus.resources.core.limits.memory'] = '1000Mi';
      answers['prometheus.persistent.useReleaseName'] = 'true';
      return resource.doAction('enableMonitoring', {
        answers: answers
      });
    }
  });

  _exports.default = _default;
});
define("istio/components/istio-catalog/template", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "lQg4FJJD",
    "block": "{\"symbols\":[\"al\",\"expandFn\"],\"statements\":[[7,\"section\",true],[10,\"class\",\"header clearfix\"],[8],[0,\"\\n  \"],[7,\"h1\",true],[10,\"class\",\"pull-left\"],[8],[0,\"\\n    \"],[1,[28,\"t\",[\"clusterIstioPage.header\"],null],false],[0,\"\\n  \"],[9],[0,\"\\n\"],[9],[0,\"\\n\\n\"],[4,\"if\",[[24,[\"canEnable\"]]],null,{\"statements\":[[4,\"if\",[[28,\"and\",[[24,[\"enabled\"]],[24,[\"ready\"]]],null]],null,{\"statements\":[[0,\"    \"],[1,[28,\"banner-message\",null,[[\"color\",\"message\"],[\"bg-info\",[28,\"t\",[\"clusterIstioPage.enabled\"],null]]]],false],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[4,\"if\",[[24,[\"enabled\"]]],null,{\"statements\":[[0,\"    \"],[1,[28,\"banner-message\",null,[[\"color\",\"message\"],[\"bg-warning\",[28,\"t\",[\"clusterIstioPage.notReady\"],null]]]],false],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[0,\"    \"],[1,[28,\"banner-message\",null,[[\"color\",\"message\"],[\"bg-warning\",[28,\"t\",[\"clusterIstioPage.disabled\"],null]]]],false],[0,\"\\n  \"]],\"parameters\":[]}]],\"parameters\":[]}],[0,\"\\n\"],[4,\"if\",[[28,\"and\",[[24,[\"enabled\"]],[24,[\"ready\"]]],null]],null,{\"statements\":[[0,\"    \"],[7,\"div\",true],[10,\"class\",\"row\"],[8],[0,\"\\n      \"],[1,[28,\"istio-component-status\",null,[[\"label\",\"url\",\"logo\"],[\"clusterIstioPage.links.kiali.label\",[24,[\"kialiUrl\"]],\"kiali\"]]],false],[0,\"\\n      \"],[1,[28,\"istio-component-status\",null,[[\"label\",\"url\",\"logo\"],[\"clusterIstioPage.links.jaeger.label\",[24,[\"jaegerUrl\"]],\"jaeger\"]]],false],[0,\"\\n      \"],[1,[28,\"istio-component-status\",null,[[\"label\",\"url\",\"logo\"],[\"clusterIstioPage.links.grafana.label\",[24,[\"grafana\",\"istioUrl\"]],\"grafana\"]]],false],[0,\"\\n      \"],[1,[28,\"istio-component-status\",null,[[\"label\",\"url\",\"logo\"],[\"clusterIstioPage.links.prometheus.label\",[24,[\"prometheusUrl\"]],\"prometheus-icon\"]]],false],[0,\"\\n    \"],[9],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"\\n  \"],[7,\"div\",true],[10,\"class\",\"row mt-10 mb-10\"],[8],[0,\"\\n    \"],[7,\"div\",true],[10,\"class\",\"col span-6\"],[8],[0,\"\\n      \"],[7,\"label\",true],[10,\"class\",\"acc-label\"],[8],[0,\"\\n        \"],[1,[28,\"t\",[\"clusterIstioPage.version\"],null],false],[0,\"\\n\"],[4,\"if\",[[28,\"and\",[[24,[\"enabled\"]],[24,[\"latestVersion\"]],[24,[\"templateVersion\"]],[28,\"not-eq\",[[24,[\"latestVersion\"]],[24,[\"templateVersion\"]]],null]],null]],null,{\"statements\":[[0,\"          \"],[7,\"span\",true],[10,\"class\",\"bg-warning pt-0 pb-0 pl-5 pr-5\"],[8],[0,\"\\n            \"],[1,[28,\"t\",[\"monitoringPage.upgradeAvailable\"],[[\"version\"],[[24,[\"latestVersion\"]]]]],false],[0,\"\\n          \"],[9],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"      \"],[9],[0,\"\\n      \"],[7,\"div\",true],[8],[0,\"\\n        \"],[1,[28,\"new-select\",null,[[\"classNames\",\"content\",\"value\"],[\"form-control\",[24,[\"istioVersions\"]],[24,[\"templateVersion\"]]]]],false],[0,\"\\n      \"],[9],[0,\"\\n    \"],[9],[0,\"\\n  \"],[9],[0,\"\\n  \"],[7,\"div\",true],[10,\"class\",\"row mt-10 mb-10\"],[8],[0,\"\\n\"],[4,\"unless\",[[24,[\"enableClusterMonitoring\"]]],null,{\"statements\":[[0,\"      \"],[7,\"div\",true],[10,\"class\",\"col span-6\"],[8],[0,\"\\n        \"],[7,\"label\",true],[10,\"class\",\"acc-label\"],[8],[0,\"\\n           \\n        \"],[9],[0,\"\\n        \"],[7,\"div\",true],[8],[0,\"\\n          \"],[1,[28,\"input\",null,[[\"type\",\"checked\",\"id\",\"disabled\"],[\"checkbox\",[24,[\"enableMonitoring\"]],\"input-enable-monitoring\",true]]],false],[0,\"\\n          \"],[1,[28,\"t\",[\"clusterIstioPage.enableMonitoring.label\"],null],false],[0,\"\\n\"],[4,\"tooltip-element\",null,[[\"type\",\"model\",\"tooltipTemplate\",\"aria-describedby\",\"baseClass\"],[\"tooltip-basic\",[28,\"t\",[\"clusterIstioPage.goToMonitoring\"],[[\"clusterId\",\"htmlSafe\"],[[24,[\"cluster\",\"id\"]],true]]],\"tooltip-static\",\"tooltip-base\",\"text-left\"]],{\"statements\":[[0,\"            \"],[7,\"span\",true],[8],[0,\"\\n              \"],[7,\"i\",true],[10,\"class\",\"icon icon-help icon-blue\"],[8],[9],[0,\"\\n            \"],[9],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"        \"],[9],[0,\"\\n      \"],[9],[0,\"\\n\"]],\"parameters\":[]},null],[4,\"if\",[[28,\"and\",[[24,[\"enabled\"]],[24,[\"upgradeAvailable\"]]],null]],null,{\"statements\":[[0,\"      \"],[7,\"div\",true],[10,\"class\",\"col span-6\"],[8],[0,\"\\n        \"],[7,\"label\",true],[8],[0,\"\\n          \"],[1,[28,\"input\",null,[[\"type\",\"checked\"],[\"checkbox\",[24,[\"forceUpgrade\"]]]]],false],[0,\"\\n          \"],[1,[28,\"t\",[\"newCatalog.forceUpgrade\"],null],false],[0,\"\\n        \"],[9],[0,\"\\n      \"],[9],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"  \"],[9],[0,\"\\n\\n\"],[4,\"accordion-list\",null,null,{\"statements\":[[4,\"accordion-list-item\",null,[[\"title\",\"detail\",\"expandAll\",\"expand\",\"expandOnInit\"],[[28,\"t\",[\"clusterIstioPage.members.title\"],null],[28,\"t\",[\"clusterIstioPage.members.detail\"],null],[23,1,[\"expandAll\"]],[28,\"action\",[[23,0,[]],[23,2,[]]],null],true]],{\"statements\":[[0,\"      \"],[7,\"div\",true],[10,\"class\",\"radio\"],[8],[0,\"\\n        \"],[7,\"label\",true],[8],[0,\"\\n          \"],[1,[28,\"radio-button\",null,[[\"selection\",\"value\"],[[24,[\"allowSystemGroup\"]],true]]],false],[0,\"\\n          \"],[1,[28,\"t\",[\"clusterIstioPage.allowSystemGroup.true\"],[[\"htmlSafe\"],[true]]],false],[0,\"\\n        \"],[9],[0,\"\\n      \"],[9],[0,\"\\n      \"],[7,\"div\",true],[10,\"class\",\"radio\"],[8],[0,\"\\n        \"],[7,\"label\",true],[8],[0,\"\\n          \"],[1,[28,\"radio-button\",null,[[\"selection\",\"value\"],[[24,[\"allowSystemGroup\"]],false]]],false],[0,\"\\n          \"],[1,[28,\"t\",[\"clusterIstioPage.allowSystemGroup.false\"],[[\"htmlSafe\"],[true]]],false],[0,\"\\n        \"],[9],[0,\"\\n\"],[4,\"unless\",[[24,[\"allowSystemGroup\"]]],null,{\"statements\":[[0,\"          \"],[1,[28,\"form-members-catalog-access\",null,[[\"readOnly\",\"members\",\"addAuthorizedPrincipal\",\"removeMember\",\"searchOnlyGroups\",\"includeLocal\"],[false,[24,[\"members\"]],[28,\"action\",[[23,0,[]],\"addAuthorizedPrincipal\"],null],[28,\"action\",[[23,0,[]],\"removeMember\"],null],true,false]]],false],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"      \"],[9],[0,\"\\n\"]],\"parameters\":[]},null],[4,\"accordion-list-item\",null,[[\"title\",\"detail\",\"expandAll\",\"expand\",\"expandOnInit\"],[[28,\"t\",[\"clusterIstioPage.pilot.title\"],null],[28,\"t\",[\"clusterIstioPage.pilot.detail\"],null],[23,1,[\"expandAll\"]],[28,\"action\",[[23,0,[]],[23,2,[]]],null],false]],{\"statements\":[[0,\"      \"],[1,[28,\"form-reservation\",null,[[\"component\",\"requestCpu\",\"requestMemory\",\"limitCpu\",\"limitMemory\"],[\"Pilot\",[24,[\"config\",\"pilotRequestCpu\"]],[24,[\"config\",\"pilotRequestMemory\"]],[24,[\"config\",\"pilotLimitCpu\"]],[24,[\"config\",\"pilotLimitMemory\"]]]]],false],[0,\"\\n\\n      \"],[7,\"div\",true],[10,\"class\",\"row\"],[8],[0,\"\\n        \"],[7,\"div\",true],[10,\"class\",\"col span-6\"],[8],[0,\"\\n          \"],[7,\"label\",true],[10,\"class\",\"acc-label\"],[10,\"for\",\"input-trace-sampling\"],[8],[0,\"\\n            \"],[1,[28,\"t\",[\"clusterIstioPage.config.traceSampling.label\"],null],false],[0,\"\\n            \"],[1,[22,\"field-required\"],false],[0,\"\\n          \"],[9],[0,\"\\n          \"],[7,\"div\",true],[10,\"class\",\"input-group\"],[8],[0,\"\\n            \"],[1,[28,\"input-float\",null,[[\"min\",\"max\",\"id\",\"value\",\"classNames\",\"placeholder\",\"precision\"],[\"0\",\"100\",\"input-trace-sampling\",[24,[\"config\",\"traceSampling\"]],\"form-control\",[28,\"t\",[\"clusterIstioPage.config.traceSampling.placeholder\"],null],2]]],false],[0,\"\\n            \"],[7,\"div\",true],[10,\"class\",\"input-group-addon bg-default\"],[8],[0,\"\\n              \"],[1,[28,\"t\",[\"units.percent\"],null],false],[0,\"\\n            \"],[9],[0,\"\\n          \"],[9],[0,\"\\n        \"],[9],[0,\"\\n      \"],[9],[0,\"\\n\\n      \"],[7,\"div\",true],[10,\"class\",\"row\"],[8],[0,\"\\n        \"],[7,\"div\",true],[10,\"class\",\"col span-12\"],[8],[0,\"\\n          \"],[7,\"label\",true],[10,\"class\",\"acc-label\"],[8],[0,\"\\n            \"],[1,[28,\"t\",[\"clusterIstioPage.nodeSelector.helpText\"],[[\"component\"],[\"Pilot\"]]],false],[0,\"\\n          \"],[9],[0,\"\\n          \"],[1,[28,\"form-key-value\",null,[[\"changedArray\",\"initialMap\",\"allowEmptyValue\",\"addActionLabel\"],[[28,\"action\",[[23,0,[]],[28,\"mut\",[[24,[\"pilotNodeSelectors\"]]],null]],null],[24,[\"pilotNodeSelector\"]],true,\"clusterIstioPage.nodeSelector.addSelectorLabel\"]]],false],[0,\"\\n        \"],[9],[0,\"\\n      \"],[9],[0,\"\\n      \"],[7,\"div\",true],[10,\"class\",\"row\"],[8],[0,\"\\n        \"],[7,\"div\",true],[10,\"class\",\"col span-12\"],[8],[0,\"\\n          \"],[1,[28,\"scheduling-toleration\",null,[[\"editing\",\"tolerate\",\"title\"],[true,[24,[\"pilotTolerations\"]],[28,\"t\",[\"formScheduling.toleration.workloadTitle\"],[[\"workload\"],[\"Pilot\"]]]]]],false],[0,\"\\n        \"],[9],[0,\"\\n      \"],[9],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"\\n\"],[4,\"accordion-list-item\",null,[[\"title\",\"detail\",\"expandAll\",\"expand\",\"expandOnInit\"],[[28,\"t\",[\"clusterIstioPage.mixer.title\"],null],[28,\"t\",[\"clusterIstioPage.mixer.detail\"],null],[23,1,[\"expandAll\"]],[28,\"action\",[[23,0,[]],[23,2,[]]],null],false]],{\"statements\":[[0,\"      \"],[1,[28,\"form-reservation\",null,[[\"component\",\"requestCpu\",\"requestMemory\",\"limitCpu\",\"limitMemory\"],[\"MixerTelemetry\",[24,[\"config\",\"mixerTelemetryRequestCpu\"]],[24,[\"config\",\"mixerTelemetryRequestMemory\"]],[24,[\"config\",\"mixerTelemetryLimitCpu\"]],[24,[\"config\",\"mixerTelemetryLimitMemory\"]]]]],false],[0,\"\\n\\n      \"],[7,\"div\",true],[10,\"class\",\"row\"],[8],[0,\"\\n        \"],[7,\"div\",true],[10,\"class\",\"col span-6\"],[8],[0,\"\\n          \"],[7,\"label\",true],[10,\"class\",\"acc-label\"],[10,\"for\",\"input-mixer-policy-enabled\"],[8],[0,\"\\n            \"],[1,[28,\"t\",[\"clusterIstioPage.config.mixerPolicyEnabled.label\"],null],false],[0,\"\\n          \"],[9],[0,\"\\n          \"],[1,[28,\"schema/input-boolean\",null,[[\"id\",\"value\",\"classNames\"],[\"input-mixer-policy-enabled\",[24,[\"config\",\"mixerPolicyEnabled\"]],\"form-control\"]]],false],[0,\"\\n        \"],[9],[0,\"\\n      \"],[9],[0,\"\\n\\n\"],[4,\"if\",[[24,[\"config\",\"mixerPolicyEnabled\"]]],null,{\"statements\":[[0,\"        \"],[1,[28,\"form-reservation\",null,[[\"component\",\"requestCpu\",\"requestMemory\",\"limitCpu\",\"limitMemory\"],[\"MixerPolicy\",[24,[\"config\",\"mixerPolicyRequestCpu\"]],[24,[\"config\",\"mixerPolicyRequestMemory\"]],[24,[\"config\",\"mixerPolicyLimitCpu\"]],[24,[\"config\",\"mixerPolicyLimitMemory\"]]]]],false],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"\\n      \"],[7,\"div\",true],[10,\"class\",\"row\"],[8],[0,\"\\n        \"],[7,\"div\",true],[10,\"class\",\"col span-12\"],[8],[0,\"\\n          \"],[7,\"label\",true],[10,\"class\",\"acc-label\"],[8],[0,\"\\n            \"],[1,[28,\"t\",[\"clusterIstioPage.nodeSelector.helpText\"],[[\"component\"],[\"Mixer\"]]],false],[0,\"\\n          \"],[9],[0,\"\\n          \"],[1,[28,\"form-key-value\",null,[[\"changedArray\",\"initialMap\",\"allowEmptyValue\",\"addActionLabel\"],[[28,\"action\",[[23,0,[]],[28,\"mut\",[[24,[\"mixerNodeSelectors\"]]],null]],null],[24,[\"mixerNodeSelector\"]],true,\"clusterIstioPage.nodeSelector.addSelectorLabel\"]]],false],[0,\"\\n        \"],[9],[0,\"\\n      \"],[9],[0,\"\\n      \"],[7,\"div\",true],[10,\"class\",\"row\"],[8],[0,\"\\n        \"],[7,\"div\",true],[10,\"class\",\"col span-12\"],[8],[0,\"\\n          \"],[1,[28,\"scheduling-toleration\",null,[[\"editing\",\"tolerate\",\"title\"],[true,[24,[\"mixerTolerations\"]],[28,\"t\",[\"formScheduling.toleration.workloadTitle\"],[[\"workload\"],[\"Mixer\"]]]]]],false],[0,\"\\n        \"],[9],[0,\"\\n      \"],[9],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"\\n\"],[4,\"accordion-list-item\",null,[[\"title\",\"detail\",\"expandAll\",\"expand\",\"expandOnInit\"],[[28,\"t\",[\"clusterIstioPage.tracing.title\"],null],[28,\"t\",[\"clusterIstioPage.tracing.detail\"],null],[23,1,[\"expandAll\"]],[28,\"action\",[[23,0,[]],[23,2,[]]],null],false]],{\"statements\":[[0,\"      \"],[7,\"div\",true],[10,\"class\",\"row\"],[8],[0,\"\\n        \"],[7,\"div\",true],[10,\"class\",\"col span-6\"],[8],[0,\"\\n          \"],[7,\"label\",true],[10,\"class\",\"acc-label\"],[8],[0,\"\\n            \"],[1,[28,\"t\",[\"clusterIstioPage.config.tracingEnabled.label\"],null],false],[0,\"\\n          \"],[9],[0,\"\\n          \"],[1,[28,\"schema/input-boolean\",null,[[\"value\",\"classNames\"],[[24,[\"config\",\"tracingEnabled\"]],\"form-control\"]]],false],[0,\"\\n        \"],[9],[0,\"\\n      \"],[9],[0,\"\\n\\n\"],[4,\"if\",[[24,[\"config\",\"tracingEnabled\"]]],null,{\"statements\":[[0,\"        \"],[1,[28,\"form-reservation\",null,[[\"component\",\"requestCpu\",\"requestMemory\",\"limitCpu\",\"limitMemory\"],[\"Tracing\",[24,[\"config\",\"tracingRequestCpu\"]],[24,[\"config\",\"tracingRequestMemory\"]],[24,[\"config\",\"tracingLimitCpu\"]],[24,[\"config\",\"tracingLimitMemory\"]]]]],false],[0,\"\\n        \"],[7,\"div\",true],[10,\"class\",\"row\"],[8],[0,\"\\n          \"],[7,\"div\",true],[10,\"class\",\"col span-12\"],[8],[0,\"\\n            \"],[7,\"label\",true],[10,\"class\",\"acc-label\"],[8],[0,\"\\n              \"],[1,[28,\"t\",[\"clusterIstioPage.nodeSelector.helpText\"],[[\"component\"],[\"Tracing\"]]],false],[0,\"\\n            \"],[9],[0,\"\\n            \"],[1,[28,\"form-key-value\",null,[[\"changedArray\",\"initialMap\",\"allowEmptyValue\",\"addActionLabel\"],[[28,\"action\",[[23,0,[]],[28,\"mut\",[[24,[\"tracingNodeSelectors\"]]],null]],null],[24,[\"tracingNodeSelector\"]],true,\"clusterIstioPage.nodeSelector.addSelectorLabel\"]]],false],[0,\"\\n          \"],[9],[0,\"\\n        \"],[9],[0,\"\\n        \"],[7,\"div\",true],[10,\"class\",\"row\"],[8],[0,\"\\n          \"],[7,\"div\",true],[10,\"class\",\"col span-12\"],[8],[0,\"\\n            \"],[1,[28,\"scheduling-toleration\",null,[[\"editing\",\"tolerate\",\"title\"],[true,[24,[\"tracingTolerations\"]],[28,\"t\",[\"formScheduling.toleration.workloadTitle\"],[[\"workload\"],[\"Tracing\"]]]]]],false],[0,\"\\n          \"],[9],[0,\"\\n        \"],[9],[0,\"\\n\"]],\"parameters\":[]},null]],\"parameters\":[]},null],[0,\"\\n\"],[4,\"accordion-list-item\",null,[[\"title\",\"detail\",\"expandAll\",\"expand\",\"expandOnInit\"],[[28,\"t\",[\"clusterIstioPage.ingress.title\"],null],[28,\"t\",[\"clusterIstioPage.ingress.detail\"],null],[23,1,[\"expandAll\"]],[28,\"action\",[[23,0,[]],[23,2,[]]],null],false]],{\"statements\":[[0,\"      \"],[7,\"div\",true],[10,\"class\",\"row\"],[8],[0,\"\\n        \"],[7,\"div\",true],[10,\"class\",\"col span-6\"],[8],[0,\"\\n          \"],[7,\"label\",true],[10,\"class\",\"acc-label\"],[8],[0,\"\\n            \"],[1,[28,\"t\",[\"clusterIstioPage.config.gatewayEnabled.label\"],null],false],[0,\"\\n          \"],[9],[0,\"\\n          \"],[1,[28,\"schema/input-boolean\",null,[[\"value\",\"classNames\"],[[24,[\"config\",\"gatewayEnabled\"]],\"form-control\"]]],false],[0,\"\\n        \"],[9],[0,\"\\n\"],[4,\"if\",[[24,[\"config\",\"gatewayEnabled\"]]],null,{\"statements\":[[0,\"          \"],[7,\"div\",true],[10,\"class\",\"col span-6\"],[8],[0,\"\\n            \"],[7,\"label\",true],[10,\"class\",\"acc-label\"],[10,\"for\",\"input-gateway-type-select\"],[8],[0,\"\\n              \"],[1,[28,\"t\",[\"clusterIstioPage.config.gatewayType.label\"],null],false],[0,\"\\n            \"],[9],[0,\"\\n            \"],[1,[28,\"new-select\",null,[[\"id\",\"class\",\"content\",\"value\"],[\"input-gateway-type-select\",\"form-control\",[24,[\"gatewayTypeContent\"]],[24,[\"config\",\"gatewayType\"]]]]],false],[0,\"\\n          \"],[9],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"      \"],[9],[0,\"\\n\\n\"],[4,\"if\",[[24,[\"config\",\"gatewayEnabled\"]]],null,{\"statements\":[[4,\"if\",[[28,\"eq\",[[24,[\"config\",\"gatewayType\"]],\"NodePort\"],null]],null,{\"statements\":[[0,\"          \"],[7,\"div\",true],[10,\"class\",\"row\"],[8],[0,\"\\n            \"],[7,\"div\",true],[10,\"class\",\"col span-6\"],[8],[0,\"\\n              \"],[7,\"label\",true],[10,\"class\",\"acc-label\"],[10,\"for\",\"input-http2-port\"],[8],[0,\"\\n                \"],[1,[28,\"t\",[\"clusterIstioPage.config.http2Port.label\"],null],false],[0,\"\\n                \"],[1,[22,\"field-required\"],false],[0,\"\\n              \"],[9],[0,\"\\n              \"],[1,[28,\"input-integer\",null,[[\"min\",\"max\",\"step\",\"id\",\"value\",\"classNames\"],[\"30000\",\"32767\",\"1\",\"input-http2-port\",[24,[\"config\",\"http2Port\"]],\"form-control\"]]],false],[0,\"\\n            \"],[9],[0,\"\\n            \"],[7,\"div\",true],[10,\"class\",\"col span-6\"],[8],[0,\"\\n              \"],[7,\"label\",true],[10,\"class\",\"acc-label\"],[10,\"for\",\"input-https-port\"],[8],[0,\"\\n                \"],[1,[28,\"t\",[\"clusterIstioPage.config.httpsPort.label\"],null],false],[0,\"\\n                \"],[1,[22,\"field-required\"],false],[0,\"\\n              \"],[9],[0,\"\\n              \"],[1,[28,\"input-integer\",null,[[\"min\",\"max\",\"step\",\"id\",\"value\",\"classNames\"],[\"30000\",\"32767\",\"1\",\"input-https-port\",[24,[\"config\",\"httpsPort\"]],\"form-control\"]]],false],[0,\"\\n            \"],[9],[0,\"\\n          \"],[9],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[4,\"if\",[[28,\"eq\",[[24,[\"config\",\"gatewayType\"]],\"LoadBalancer\"],null]],null,{\"statements\":[[0,\"          \"],[7,\"div\",true],[10,\"class\",\"row\"],[8],[0,\"\\n            \"],[7,\"div\",true],[10,\"class\",\"col span-6\"],[8],[0,\"\\n              \"],[7,\"label\",true],[10,\"class\",\"acc-label\"],[10,\"for\",\"input-load-balancer-ip\"],[8],[0,\"\\n                \"],[1,[28,\"t\",[\"clusterIstioPage.config.loadBalancerIP.label\"],null],false],[0,\"\\n              \"],[9],[0,\"\\n              \"],[1,[28,\"schema/input-string\",null,[[\"value\",\"id\",\"placeholder\"],[[24,[\"config\",\"loadBalancerIP\"]],\"input-load-balancer-ip\",[28,\"t\",[\"clusterIstioPage.config.loadBalancerIP.placeholder\"],null]]]],false],[0,\"\\n            \"],[9],[0,\"\\n            \"],[7,\"div\",true],[10,\"class\",\"col span-6\"],[8],[0,\"\\n              \"],[1,[28,\"form-value-array\",null,[[\"initialValues\",\"addActionLabel\",\"valueLabel\",\"valuePlaceholder\",\"changed\",\"addButtonClass\"],[[24,[\"loadBalancerSourceRanges\"]],\"editDns.loadBalancerSourceRanges.addActionLabel\",\"editDns.loadBalancerSourceRanges.value\",\"editDns.loadBalancerSourceRanges.placeholder\",[28,\"action\",[[23,0,[]],[28,\"mut\",[[24,[\"loadBalancerSourceRanges\"]]],null]],null],\"btn bg-link icon-btn\"]]],false],[0,\"\\n            \"],[9],[0,\"\\n          \"],[9],[0,\"\\n        \"]],\"parameters\":[]},null]],\"parameters\":[]}],[0,\"\\n        \"],[1,[28,\"form-reservation\",null,[[\"component\",\"requestCpu\",\"requestMemory\",\"limitCpu\",\"limitMemory\"],[\"IngressGateway\",[24,[\"config\",\"gatewayRequestCpu\"]],[24,[\"config\",\"gatewayRequestMemory\"]],[24,[\"config\",\"gatewayLimitCpu\"]],[24,[\"config\",\"gatewayLimitMemory\"]]]]],false],[0,\"\\n\\n        \"],[7,\"div\",true],[10,\"class\",\"row\"],[8],[0,\"\\n          \"],[7,\"div\",true],[10,\"class\",\"col span-12\"],[8],[0,\"\\n            \"],[7,\"label\",true],[10,\"class\",\"acc-label\"],[8],[0,\"\\n              \"],[1,[28,\"t\",[\"clusterIstioPage.nodeSelector.helpText\"],[[\"component\"],[\"Gateway\"]]],false],[0,\"\\n            \"],[9],[0,\"\\n            \"],[1,[28,\"form-key-value\",null,[[\"changedArray\",\"initialMap\",\"allowEmptyValue\",\"addActionLabel\"],[[28,\"action\",[[23,0,[]],[28,\"mut\",[[24,[\"gatewayNodeSelectors\"]]],null]],null],[24,[\"gatewayNodeSelector\"]],true,\"clusterIstioPage.nodeSelector.addSelectorLabel\"]]],false],[0,\"\\n          \"],[9],[0,\"\\n        \"],[9],[0,\"\\n        \"],[7,\"div\",true],[10,\"class\",\"row\"],[8],[0,\"\\n          \"],[7,\"div\",true],[10,\"class\",\"col span-12\"],[8],[0,\"\\n            \"],[1,[28,\"scheduling-toleration\",null,[[\"editing\",\"tolerate\",\"title\"],[true,[24,[\"gatewayTolerations\"]],[28,\"t\",[\"formScheduling.toleration.workloadTitle\"],[[\"workload\"],[[28,\"parse-camelcase\",[\"IngressGateway\"],null]]]]]]],false],[0,\"\\n          \"],[9],[0,\"\\n        \"],[9],[0,\"\\n\"]],\"parameters\":[]},null]],\"parameters\":[]},null],[0,\"\\n\"],[4,\"accordion-list-item\",null,[[\"title\",\"detail\",\"expandAll\",\"expand\",\"expandOnInit\"],[[28,\"t\",[\"clusterIstioPage.customAnswers.title\"],null],[28,\"t\",[\"clusterIstioPage.customAnswers.detail\"],null],[23,1,[\"expandAll\"]],[28,\"action\",[[23,0,[]],[23,2,[]]],null],false]],{\"statements\":[[0,\"      \"],[1,[28,\"form-key-value\",null,[[\"initialMap\",\"changed\",\"allowEmptyValue\",\"addInitialEmptyRow\",\"editing\",\"header\",\"addActionLabel\",\"keyLabel\",\"keyPlaceholder\",\"valueLabel\",\"valuePlaceholder\"],[[24,[\"customAnswers\"]],[28,\"action\",[[23,0,[]],[28,\"mut\",[[24,[\"customAnswers\"]]],null]],null],true,true,true,[28,\"t\",[\"newCatalog.answers.label\"],null],\"newCatalog.answers.addAction\",\"newContainer.environment.keyLabel\",\"newContainer.environment.keyPlaceholder\",\"newContainer.environment.valueLabel\",\"newContainer.environment.valuePlaceholder\"]]],false],[0,\"\\n\"]],\"parameters\":[]},null]],\"parameters\":[1,2]},null],[4,\"if\",[[28,\"or\",[[24,[\"pilotWarning\"]],[24,[\"mixerTelemetryWarning\"]],[24,[\"tracingWarning\"]],[24,[\"gatewayWarning\"]],[28,\"and\",[[24,[\"mixerPolicyWarning\"]],[24,[\"config\",\"mixerPolicyEnabled\"]]],null],[24,[\"mixerWarning\"]],[24,[\"istioWarning\"]]],null]],null,{\"statements\":[[4,\"banner-message\",null,[[\"color\"],[\"bg-warning\"]],{\"statements\":[[4,\"if\",[[24,[\"istioWarning\"]]],null,{\"statements\":[[0,\"        \"],[7,\"p\",true],[8],[1,[22,\"istioWarning\"],false],[9],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[0,\"        \"],[7,\"p\",true],[8],[1,[22,\"pilotWarning\"],false],[9],[0,\"\\n        \"],[7,\"p\",true],[8],[1,[22,\"mixerWarning\"],false],[9],[0,\"\\n        \"],[7,\"p\",true],[8],[1,[22,\"mixerTelemetryWarning\"],false],[9],[0,\"\\n\"],[4,\"if\",[[24,[\"config\",\"tracingEnabled\"]]],null,{\"statements\":[[0,\"          \"],[7,\"p\",true],[8],[1,[22,\"tracingWarning\"],false],[9],[0,\"\\n\"]],\"parameters\":[]},null],[4,\"if\",[[24,[\"config\",\"gatewayEnabled\"]]],null,{\"statements\":[[0,\"          \"],[7,\"p\",true],[8],[1,[22,\"gatewayWarning\"],false],[9],[0,\"\\n\"]],\"parameters\":[]},null],[4,\"if\",[[24,[\"config\",\"mixerPolicyEnabled\"]]],null,{\"statements\":[[0,\"          \"],[7,\"p\",true],[8],[1,[22,\"mixerPolicyWarning\"],false],[9],[0,\"\\n\"]],\"parameters\":[]},null]],\"parameters\":[]}]],\"parameters\":[]},null]],\"parameters\":[]},null],[0,\"\\n  \"],[1,[28,\"top-errors\",null,[[\"errors\"],[[24,[\"errors\"]]]]],false],[0,\"\\n\\n\"],[4,\"if\",[[28,\"and\",[[28,\"not\",[[24,[\"saveDisabled\"]]],null],[28,\"not\",[[24,[\"enabled\"]]],null],[24,[\"enableClusterMonitoring\"]],[28,\"not\",[[24,[\"scope\",\"currentCluster\",\"isMonitoringReady\"]]],null]],null]],null,{\"statements\":[[0,\"    \"],[5,\"banner-message\",[],[[\"@color\",\"@icon\",\"@message\"],[\"bg-warning\",\"icon-alert\",[28,\"t\",[\"clusterIstioPage.monitoringNotDeployed\"],null]]]],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"\\n\"],[4,\"save-cancel\",null,[[\"saveDisabled\",\"editing\",\"createLabel\",\"save\",\"saved\",\"cancelDisabled\"],[[24,[\"saveDisabled\"]],[24,[\"enabled\"]],\"clusterIstioPage.enableActionLabel\",[28,\"action\",[[23,0,[]],\"save\"],null],[24,[\"saved\"]],true]],{\"statements\":[[4,\"if\",[[28,\"and\",[[24,[\"enabled\"]],[24,[\"canEnable\"]]],null]],null,{\"statements\":[[0,\"      \"],[7,\"button\",false],[12,\"class\",\"btn bg-error\"],[3,\"action\",[[23,0,[]],\"disable\"]],[8],[0,\"\\n        \"],[1,[28,\"t\",[\"clusterIstioPage.disable\"],null],false],[0,\"\\n      \"],[9],[0,\"\\n\"]],\"parameters\":[]},null]],\"parameters\":[]},null]],\"parameters\":[]},{\"statements\":[[4,\"if\",[[24,[\"enableClusterMonitoring\"]]],null,{\"statements\":[[4,\"unless\",[[24,[\"canReuse\"]]],null,{\"statements\":[[0,\"      \"],[1,[28,\"banner-message\",null,[[\"color\",\"message\"],[\"bg-warning\",[28,\"t\",[\"clusterIstioPage.upgradeMonitoring\"],[[\"clusterId\",\"htmlSafe\"],[[24,[\"cluster\",\"id\"]],true]]]]]],false],[0,\"\\n\"]],\"parameters\":[]},null]],\"parameters\":[]},null],[4,\"if\",[[24,[\"cluster\",\"isWindows\"]]],null,{\"statements\":[[0,\"    \"],[5,\"banner-message\",[],[[\"@color\",\"@message\"],[\"bg-warning\",[28,\"t\",[\"windowsCluster.istio\"],null]]]],[0,\"\\n\"]],\"parameters\":[]},null]],\"parameters\":[]}]],\"hasEval\":false}",
    "meta": {
      "moduleName": "istio/components/istio-catalog/template.hbs"
    }
  });

  _exports.default = _default;
});
define("istio/components/istio-component-status/component", ["exports", "istio/components/istio-component-status/template"], function (_exports, _template) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Component.extend({
    layout: _template.default,
    classNames: 'col span-3 mt-0 mb-0',
    label: null,
    logo: null,
    url: null
  });

  _exports.default = _default;
});
define("istio/components/istio-component-status/template", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "JZ6efqZu",
    "block": "{\"symbols\":[],\"statements\":[[4,\"banner-message\",null,[[\"color\",\"showIcon\"],[\"bg-success mt-0 mb-0\",false]],{\"statements\":[[0,\"  \"],[7,\"p\",true],[10,\"class\",\"text-left\"],[8],[0,\"\\n    \"],[1,[28,\"t\",[[24,[\"label\"]]],null],false],[0,\"\\n    \"],[7,\"span\",true],[10,\"class\",\"pull-right\"],[10,\"role\",\"button\"],[8],[0,\"\\n      \"],[7,\"a\",true],[11,\"href\",[22,\"url\"]],[10,\"target\",\"_blank\"],[10,\"rel\",\"nofollow noopener noreferrer\"],[8],[0,\"\\n        \"],[7,\"div\",true],[11,\"class\",[22,\"logo\"]],[8],[9],[0,\"\\n      \"],[9],[0,\"\\n    \"],[9],[0,\"\\n  \"],[9],[0,\"\\n\"]],\"parameters\":[]},null]],\"hasEval\":false}",
    "meta": {
      "moduleName": "istio/components/istio-component-status/template.hbs"
    }
  });

  _exports.default = _default;
});
define("istio/components/istio-gateway-select/component", ["exports", "istio/components/istio-gateway-select/template"], function (_exports, _template) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Component.extend({
    layout: _template.default,
    namespaceId: null,
    value: null,
    showLabel: true,
    gateways: null,
    init: function init() {
      this._super.apply(this, arguments);

      Ember.set(this, 'gateways', this.store.all('gateway'));
    },
    gatewayChoices: Ember.computed('gateways.@each.name', 'namespaceId', function () {
      return this.gateways.filterBy('namespaceId', this.namespaceId).map(function (v) {
        var name = v.name;
        return {
          label: name,
          value: name
        };
      }).sortBy('label');
    })
  });

  _exports.default = _default;
});
define("istio/components/istio-gateway-select/template", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "IOWZ/Feu",
    "block": "{\"symbols\":[],\"statements\":[[4,\"if\",[[24,[\"showLabel\"]]],null,{\"statements\":[[0,\"  \"],[7,\"label\",true],[11,\"for\",[29,[[28,\"concat\",[[24,[\"elementId\"]],\"-form-gateway-select\"],null]]]],[10,\"class\",\"acc-label pb-5\"],[8],[0,\"\\n    \"],[1,[28,\"t\",[\"generic.gateway\"],null],false],[0,\"\\n  \"],[9],[0,\"\\n\"]],\"parameters\":[]},null],[1,[28,\"searchable-select\",null,[[\"id\",\"value\",\"content\",\"inputClass\",\"allowCustom\",\"placeholder\",\"prompt\"],[[28,\"concat\",[[24,[\"elementId\"]],\"-form-gateway-select\"],null],[24,[\"value\"]],[24,[\"gatewayChoices\"]],[24,[\"inputClass\"]],true,[28,\"t\",[\"cruVirtualService.gateways.placeholder\"],null],[28,\"t\",[\"cruVirtualService.gateways.prompt\"],null]]]],false]],\"hasEval\":false}",
    "meta": {
      "moduleName": "istio/components/istio-gateway-select/template.hbs"
    }
  });

  _exports.default = _default;
});
define("istio/components/istio-host-select/component", ["exports", "istio/components/istio-host-select/template"], function (_exports, _template) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Component.extend({
    layout: _template.default,
    hostRequired: true,
    namespaceId: null,
    value: null,
    showLabel: true,
    hosts: null,
    init: function init() {
      this._super.apply(this, arguments);

      Ember.set(this, 'hosts', Ember.get(this, 'store').all('service'));
    },
    hostChoices: Ember.computed('hosts.@each.name', 'namespaceId', function () {
      return Ember.get(this, 'hosts').filter(function (host) {
        return Ember.get(host, 'selector.app');
      }).filterBy('namespaceId', Ember.get(this, 'namespaceId')).map(function (v) {
        var name = Ember.get(v, 'name');
        return {
          label: name,
          value: name
        };
      }).sortBy('label');
    })
  });

  _exports.default = _default;
});
define("istio/components/istio-host-select/template", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "MzVkZUN7",
    "block": "{\"symbols\":[],\"statements\":[[4,\"if\",[[24,[\"showLabel\"]]],null,{\"statements\":[[0,\"  \"],[7,\"label\",true],[11,\"for\",[29,[[28,\"concat\",[[24,[\"elementId\"]],\"-form-host-select\"],null]]]],[10,\"class\",\"acc-label pb-5\"],[8],[0,\"\\n    \"],[1,[28,\"t\",[\"generic.host\"],null],false],[4,\"if\",[[24,[\"hostRequired\"]]],null,{\"statements\":[[1,[22,\"field-required\"],false]],\"parameters\":[]},null],[0,\"\\n  \"],[9],[0,\"\\n\"]],\"parameters\":[]},null],[1,[28,\"searchable-select\",null,[[\"id\",\"value\",\"content\",\"inputClass\",\"allowCustom\",\"placeholder\",\"prompt\"],[[28,\"concat\",[[24,[\"elementId\"]],\"-form-host-select\"],null],[24,[\"value\"]],[24,[\"hostChoices\"]],[24,[\"inputClass\"]],true,[28,\"t\",[\"generic.istioHostPlaceholder\"],null],[28,\"t\",[\"formIstioHost.prompt\"],null]]]],false]],\"hasEval\":false}",
    "meta": {
      "moduleName": "istio/components/istio-host-select/template.hbs"
    }
  });

  _exports.default = _default;
});
define("istio/components/istio-nav/component", ["exports", "istio/components/istio-nav/template", "ui/utils/constants"], function (_exports, _template, _constants) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Component.extend({
    scope: Ember.inject.service(),
    grafana: Ember.inject.service(),
    istio: Ember.inject.service(),
    features: Ember.inject.service(),
    layout: _template.default,
    showVirtualServiceUI: false,
    cluster: Ember.computed.alias('scope.currentCluster'),
    project: Ember.computed.alias('scope.currentProject'),
    pageScope: Ember.computed.alias('scope.currentPageScope'),
    init: function init() {
      this._super.apply(this, arguments);

      Ember.set(this, 'showVirtualServiceUI', this.features.isFeatureEnabled(_constants.default.FEATURES.ISTIO_VIRTUAL_SERVICE_UI));
    },
    kialiUrl: Ember.computed('cluster.id', function () {
      var clusterId = this.cluster.id,
          useNewKialiUrl = this.istio.useNewKialiUrl;
      var kialiPort = '-http:80';

      if (useNewKialiUrl) {
        kialiPort = ':20001';
      }

      return "/k8s/clusters/".concat(clusterId, "/api/v1/namespaces/istio-system/services/http:kiali").concat(kialiPort, "/proxy/");
    }),
    jaegerUrl: Ember.computed('cluster.id', function () {
      return "/k8s/clusters/".concat(Ember.get(this, 'cluster.id'), "/api/v1/namespaces/istio-system/services/http:tracing:80/proxy/jaeger/search");
    }),
    grafanaUrl: Ember.computed('cluster.id', 'project.id', function () {
      if (Ember.get(this, 'pageScope') === 'cluster') {
        return Ember.get(this, 'grafana.istioUrl');
      } else if (Ember.get(this, 'pageScope') === 'project') {
        if (Ember.get(this, 'grafana.istioUrl')) {
          return Ember.get(this, 'grafana.istioUrl');
        } else {
          return "/k8s/clusters/".concat(Ember.get(this, 'cluster.id'), "/api/v1/namespaces/cattle-prometheus-").concat((Ember.get(this, 'project.id') || '').split(':').get('lastObject'), "/services/http:access-grafana:80/proxy/");
        }
      }
    }),
    prometheusUrl: Ember.computed('cluster.id', function () {
      if (Ember.get(this, 'pageScope') === 'cluster') {
        return "/k8s/clusters/".concat(Ember.get(this, 'cluster.id'), "/api/v1/namespaces/cattle-prometheus/services/http:access-prometheus:80/proxy/");
      } else if (Ember.get(this, 'pageScope') === 'project') {
        if (Ember.get(this, 'grafana.istioUrl')) {
          return "/k8s/clusters/".concat(Ember.get(this, 'cluster.id'), "/api/v1/namespaces/cattle-prometheus/services/http:access-prometheus:80/proxy/");
        } else {
          return "/k8s/clusters/".concat(Ember.get(this, 'cluster.id'), "/api/v1/namespaces/cattle-prometheus-").concat((Ember.get(this, 'project.id') || '').split(':').get('lastObject'), "/services/http:access-prometheus:80/proxy/");
        }
      }
    })
  });

  _exports.default = _default;
});
define("istio/components/istio-nav/template", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "KebS3mU9",
    "block": "{\"symbols\":[\"&default\"],\"statements\":[[7,\"section\",true],[10,\"class\",\"header has-tabs clearfix p-0\"],[8],[0,\"\\n  \"],[7,\"ul\",true],[10,\"class\",\"tab-nav\"],[8],[0,\"\\n    \"],[7,\"li\",true],[8],[0,\"\\n      \"],[4,\"link-to\",null,[[\"route\"],[\"project-istio.metrics\"]],{\"statements\":[[1,[28,\"t\",[\"istio.nav.metrics\"],null],false]],\"parameters\":[]},null],[0,\"\\n    \"],[9],[0,\"\\n\"],[4,\"unless\",[[24,[\"iconDisabled\"]]],null,{\"statements\":[[0,\"      \"],[7,\"li\",true],[8],[0,\"\\n        \"],[4,\"link-to\",null,[[\"route\"],[\"project-istio.graph\"]],{\"statements\":[[1,[28,\"t\",[\"istio.nav.graph\"],null],false]],\"parameters\":[]},null],[0,\"\\n      \"],[9],[0,\"\\n\"]],\"parameters\":[]},null],[4,\"if\",[[24,[\"showVirtualServiceUI\"]]],null,{\"statements\":[[0,\"      \"],[7,\"li\",true],[8],[0,\"\\n        \"],[4,\"link-to\",null,[[\"route\"],[\"project-istio.gateways\"]],{\"statements\":[[1,[28,\"t\",[\"istio.nav.gateways.label\"],null],false]],\"parameters\":[]},null],[0,\"\\n      \"],[9],[0,\"\\n      \"],[7,\"li\",true],[8],[0,\"\\n        \"],[4,\"link-to\",null,[[\"route\"],[\"project-istio.destination-rules\"]],{\"statements\":[[1,[28,\"t\",[\"istio.nav.destinationRules.label\"],null],false]],\"parameters\":[]},null],[0,\"\\n      \"],[9],[0,\"\\n      \"],[7,\"li\",true],[8],[0,\"\\n        \"],[4,\"link-to\",null,[[\"route\"],[\"project-istio.virtual-services\"]],{\"statements\":[[1,[28,\"t\",[\"istio.nav.virtualServices.label\"],null],false]],\"parameters\":[]},null],[0,\"\\n      \"],[9],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"  \"],[9],[0,\"\\n\\n  \"],[7,\"div\",true],[10,\"class\",\"right-buttons\"],[8],[0,\"\\n    \"],[7,\"div\",true],[10,\"class\",\"inline-block vertical-bottom mr-20\"],[8],[0,\"\\n\"],[4,\"unless\",[[24,[\"iconDisabled\"]]],null,{\"statements\":[[0,\"        \"],[7,\"a\",true],[10,\"class\",\"inline-block\"],[11,\"href\",[22,\"kialiUrl\"]],[10,\"target\",\"_blank\"],[10,\"rel\",\"nofollow noopener noreferrer\"],[8],[0,\"\\n          \"],[7,\"div\",true],[10,\"class\",\"kiali\"],[8],[9],[0,\"\\n        \"],[9],[0,\"\\n\\n        \"],[7,\"a\",true],[10,\"class\",\"inline-block\"],[11,\"href\",[22,\"jaegerUrl\"]],[10,\"target\",\"_blank\"],[10,\"rel\",\"nofollow noopener noreferrer\"],[8],[0,\"\\n          \"],[7,\"div\",true],[10,\"class\",\"jaeger\"],[8],[9],[0,\"\\n        \"],[9],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"\\n\"],[4,\"if\",[[28,\"or\",[[24,[\"grafana\",\"istioUrl\"]],[24,[\"project\",\"enableProjectMonitoring\"]]],null]],null,{\"statements\":[[0,\"        \"],[7,\"a\",true],[10,\"class\",\"inline-block\"],[11,\"href\",[22,\"grafanaUrl\"]],[10,\"target\",\"_blank\"],[10,\"rel\",\"nofollow noopener noreferrer\"],[8],[0,\"\\n          \"],[7,\"div\",true],[10,\"class\",\"grafana\"],[8],[9],[0,\"\\n        \"],[9],[0,\"\\n\\n        \"],[7,\"a\",true],[10,\"class\",\"inline-block\"],[11,\"href\",[22,\"prometheusUrl\"]],[10,\"target\",\"_blank\"],[10,\"rel\",\"nofollow noopener noreferrer\"],[8],[0,\"\\n          \"],[7,\"div\",true],[10,\"class\",\"prometheus-icon\"],[8],[9],[0,\"\\n        \"],[9],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"    \"],[9],[0,\"\\n    \"],[14,1],[0,\"\\n  \"],[9],[0,\"\\n\"],[9],[0,\"\\n\"]],\"hasEval\":false}",
    "meta": {
      "moduleName": "istio/components/istio-nav/template.hbs"
    }
  });

  _exports.default = _default;
});
define("istio/components/istio-rule-row/component", ["exports", "istio/components/istio-rule-row/template"], function (_exports, _template) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Component.extend({
    layout: _template.default,
    model: null,
    tagName: ''
  });

  _exports.default = _default;
});
define("istio/components/istio-rule-row/template", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "UUvI0geA",
    "block": "{\"symbols\":[\"label\"],\"statements\":[[7,\"tr\",true],[10,\"class\",\"main-row\"],[8],[0,\"\\n  \"],[7,\"td\",true],[10,\"valign\",\"middle\"],[10,\"class\",\"row-check\"],[10,\"style\",\"padding-top: 2px;\"],[8],[0,\"\\n    \"],[1,[28,\"check-box\",null,[[\"nodeId\"],[[24,[\"model\",\"id\"]]]]],false],[0,\"\\n  \"],[9],[0,\"\\n\\n  \"],[7,\"td\",true],[11,\"data-title\",[29,[[24,[\"dt\",\"state\"]]]]],[10,\"class\",\"state\"],[8],[0,\"\\n    \"],[1,[28,\"badge-state\",null,[[\"model\"],[[24,[\"model\"]]]]],false],[0,\"\\n  \"],[9],[0,\"\\n\\n  \"],[7,\"td\",true],[11,\"data-title\",[29,[[24,[\"dt\",\"name\"]]]]],[10,\"class\",\"clip\"],[8],[0,\"\\n\"],[4,\"link-to\",null,[[\"route\",\"model\"],[\"project-istio.rule-detail\",[24,[\"model\",\"id\"]]]],{\"statements\":[[0,\"      \"],[1,[24,[\"model\",\"displayName\"]],false],[0,\"\\n\"]],\"parameters\":[]},null],[4,\"if\",[[24,[\"model\",\"description\"]]],null,{\"statements\":[[0,\"      \"],[7,\"p\",true],[10,\"class\",\"text-small text-muted m-0\"],[8],[0,\"\\n        \"],[1,[28,\"linkify\",[[24,[\"model\",\"description\"]]],null],false],[0,\"\\n      \"],[9],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"  \"],[9],[0,\"\\n\\n  \"],[7,\"td\",true],[11,\"data-title\",[29,[[24,[\"dt\",\"template\"]]]]],[10,\"class\",\"clip\"],[8],[0,\"\\n    \"],[1,[24,[\"model\",\"catalogTemplate\",\"name\"]],false],[0,\"\\n    \"],[7,\"div\",true],[10,\"class\",\"text-small text-muted\"],[8],[0,\"\\n      \"],[7,\"span\",true],[8],[0,\"\\n        \"],[1,[24,[\"model\",\"externalIdInfo\",\"version\"]],false],[0,\"\\n      \"],[9],[0,\"\\n    \"],[9],[0,\"\\n  \"],[9],[0,\"\\n\\n  \"],[7,\"td\",true],[11,\"data-title\",[29,[[24,[\"dt\",\"host\"]]]]],[10,\"class\",\"clip\"],[8],[0,\"\\n    \"],[1,[24,[\"model\",\"answers\",\"host\"]],false],[0,\"\\n  \"],[9],[0,\"\\n\\n  \"],[7,\"td\",true],[11,\"data-title\",[29,[[24,[\"dt\",\"created\"]]]]],[10,\"class\",\"text-right pr-20\"],[8],[0,\"\\n    \"],[1,[28,\"date-calendar\",[[24,[\"model\",\"created\"]]],null],false],[0,\"\\n  \"],[9],[0,\"\\n\\n  \"],[7,\"td\",true],[11,\"data-title\",[29,[[24,[\"dt\",\"actions\"]]]]],[10,\"class\",\"actions\"],[8],[0,\"\\n    \"],[1,[28,\"action-menu\",null,[[\"model\"],[[24,[\"model\"]]]]],false],[0,\"\\n  \"],[9],[0,\"\\n\"],[9],[0,\"\\n\\n\"],[4,\"if\",[[24,[\"model\",\"displayAnswerStrings\",\"length\"]]],null,{\"statements\":[[0,\"  \"],[7,\"tr\",true],[10,\"class\",\"sub-row\"],[8],[0,\"\\n    \"],[7,\"td\",true],[10,\"colspan\",\"2\"],[8],[9],[0,\"\\n    \"],[7,\"td\",true],[10,\"colspan\",\"5\"],[8],[0,\"\\n\"],[4,\"each\",[[24,[\"model\",\"displayAnswerStrings\"]]],null,{\"statements\":[[0,\"        \"],[7,\"span\",true],[10,\"class\",\"tag-xs bg-info\"],[8],[1,[23,1,[]],false],[9],[0,\"\\n\"]],\"parameters\":[1]},null],[0,\"    \"],[9],[0,\"\\n  \"],[9],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"\\n\"],[4,\"if\",[[24,[\"model\",\"showTransitioningMessage\"]]],null,{\"statements\":[[0,\"  \"],[1,[28,\"error-sub-row\",null,[[\"fullColspan\",\"model\"],[\"7\",[24,[\"model\"]]]]],false],[0,\"\\n\"]],\"parameters\":[]},null]],\"hasEval\":false}",
    "meta": {
      "moduleName": "istio/components/istio-rule-row/template.hbs"
    }
  });

  _exports.default = _default;
});
define("istio/components/istio-rules-table/component", ["exports", "istio/components/istio-rules-table/template"], function (_exports, _template) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Component.extend({
    scope: Ember.inject.service(),
    layout: _template.default,
    sortBy: 'created',
    headers: [{
      name: 'state',
      sort: ['sortState', 'displayName'],
      searchField: 'displayState',
      translationKey: 'generic.state',
      width: 120
    }, {
      name: 'name',
      sort: ['displayName', 'id'],
      searchField: 'displayName',
      translationKey: 'generic.name'
    }, {
      name: 'template',
      sort: ['catalogTemplate.name', 'id'],
      searchField: 'catalogTemplate.name',
      translationKey: 'istio.table.template'
    }, {
      name: 'host',
      sort: ['answers.host', 'id'],
      searchField: 'answers.host',
      translationKey: 'istio.table.host'
    }, {
      name: 'created',
      sort: ['created', 'id'],
      classNames: 'text-right pr-20',
      searchField: false,
      translationKey: 'generic.created'
    }],
    apps: null,
    rows: Ember.computed('apps.@each.isIstio', function () {
      return (Ember.get(this, 'apps') || []).filterBy('isIstio', true);
    })
  });

  _exports.default = _default;
});
define("istio/components/istio-rules-table/template", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "xr+Tt5Eb",
    "block": "{\"symbols\":[\"sortable\",\"kind\",\"inst\",\"dt\"],\"statements\":[[7,\"section\",true],[10,\"class\",\"pl-0 pr-0\"],[8],[0,\"\\n\"],[4,\"sortable-table\",null,[[\"classNames\",\"body\",\"searchText\",\"sortBy\",\"bulkActions\",\"descending\",\"groupByKey\",\"groupByRef\",\"pagingLabel\",\"headers\"],[\"grid sortable-table\",[24,[\"rows\"]],[24,[\"searchText\"]],[24,[\"sortBy\"]],true,[24,[\"descending\"]],\"namespaceId\",\"namespace\",\"pagination.istioRule\",[24,[\"headers\"]]]],{\"statements\":[[4,\"if\",[[28,\"eq\",[[23,2,[]],\"row\"],null]],null,{\"statements\":[[0,\"      \"],[1,[28,\"istio-rule-row\",null,[[\"model\",\"dt\"],[[23,3,[]],[23,4,[]]]]],false],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[4,\"if\",[[28,\"eq\",[[23,2,[]],\"group\"],null]],null,{\"statements\":[[0,\"      \"],[1,[28,\"namespace-group\",null,[[\"model\",\"fullColspan\"],[[23,3,[\"ref\"]],[23,1,[\"fullColspan\"]]]]],false],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[4,\"if\",[[28,\"eq\",[[23,2,[]],\"nomatch\"],null]],null,{\"statements\":[[0,\"      \"],[7,\"tr\",true],[8],[0,\"\\n        \"],[7,\"td\",true],[11,\"colspan\",[29,[[23,1,[\"fullColspan\"]]]]],[10,\"class\",\"text-center text-muted pt-20 pb-20\"],[8],[0,\"\\n          \"],[1,[28,\"t\",[\"rulesPage.noMatch\"],null],false],[0,\"\\n        \"],[9],[0,\"\\n      \"],[9],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[4,\"if\",[[28,\"eq\",[[23,2,[]],\"norows\"],null]],null,{\"statements\":[[0,\"      \"],[7,\"tr\",true],[8],[0,\"\\n        \"],[7,\"td\",true],[11,\"colspan\",[29,[[23,1,[\"fullColspan\"]]]]],[10,\"class\",\"text-center text-muted pt-20 pb-20\"],[8],[0,\"\\n          \"],[1,[28,\"t\",[\"rulesPage.noData\"],null],false],[0,\"\\n        \"],[9],[0,\"\\n      \"],[9],[0,\"\\n    \"]],\"parameters\":[]},null]],\"parameters\":[]}]],\"parameters\":[]}]],\"parameters\":[]}]],\"parameters\":[1,2,3,4]},null],[9]],\"hasEval\":false}",
    "meta": {
      "moduleName": "istio/components/istio-rules-table/template.hbs"
    }
  });

  _exports.default = _default;
});
define("istio/components/istio-yaml/component", ["exports", "json2yaml", "shared/utils/fetch-yaml"], function (_exports, _json2yaml, _fetchYaml) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var VIRTUAL_SERVICES = 'virtualservices';
  var SERVICE_ENTRIES = 'serviceentries';
  var DESTINATION_RULES = 'destinationrules';
  var GATEWAYS = 'gateways';
  var ENVOY_FILTERS = 'envoyfilters';
  var APP_ID = 'io.cattle.field/appId';
  var OPTIONS = [VIRTUAL_SERVICES, DESTINATION_RULES, GATEWAYS, SERVICE_ENTRIES, ENVOY_FILTERS];

  var _default = Ember.Component.extend({
    scope: Ember.inject.service(),
    growl: Ember.inject.service(),
    options: OPTIONS,
    selectedType: VIRTUAL_SERVICES,
    rule: null,
    loading: false,
    actions: {
      select: function select(type) {
        Ember.set(this, 'selectedType', type);
      }
    },
    selectedTypeDidChange: Ember.on('init', Ember.observer('selectedType', function () {
      this.loadIstioResources(Ember.get(this, 'selectedType'));
    })),
    loadIstioResources: function loadIstioResources(type) {
      var _this = this;

      var appId = Ember.get(this, 'rule.name');
      var namespace = Ember.get(this, 'rule.namespace.id');
      var yamlLink = "/k8s/clusters/".concat(Ember.get(this, 'scope.currentCluster.id'), "/apis/networking.istio.io/v1alpha3/namespaces/").concat(namespace, "/").concat(type);
      Ember.set(this, 'loading', true);
      return (0, _fetchYaml.default)(yamlLink, false).then(function (res) {
        var out = [];
        var data = JSON.parse(res) || {};
        (Ember.get(data, 'items') || []).forEach(function (item) {
          var labels = Ember.get(item, 'metadata.labels') || {};

          if (labels[APP_ID] === appId) {
            out.push(item);
          }
        });
        var yaml = out.length > 0 ? _json2yaml.default.stringify(out) : '';
        Ember.set(_this, 'yaml', yaml);
      }).catch(function (error) {
        Ember.get(_this, 'growl').fromError(Ember.get(error, 'message') || Ember.get(error, 'xhr.responseJSON.message'));
      }).finally(function () {
        Ember.set(_this, 'loading', false);
      });
    }
  });

  _exports.default = _default;
});
define("istio/components/istio-yaml/template", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "3HjiZcVB",
    "block": "{\"symbols\":[\"option\"],\"statements\":[[7,\"section\",true],[10,\"class\",\"header has-tabs clearfix pb-0\"],[8],[0,\"\\n  \"],[7,\"ul\",true],[10,\"class\",\"tab-nav\"],[8],[0,\"\\n\"],[4,\"each\",[[24,[\"options\"]]],null,{\"statements\":[[0,\"      \"],[7,\"button\",false],[12,\"class\",[29,[\"no-outline bg-transparent \",[28,\"if\",[[28,\"eq\",[[23,1,[]],[24,[\"selectedType\"]]],null],\"tab-selected\"],null]]]],[3,\"action\",[[23,0,[]],\"select\",[23,1,[]]]],[8],[0,\"\\n        \"],[7,\"span\",true],[11,\"class\",[29,[[28,\"if\",[[28,\"not-eq\",[[23,1,[]],[24,[\"selectedType\"]]],null],\"text-gray\"],null]]]],[8],[0,\"\\n          \"],[1,[28,\"t\",[[28,\"concat\",[\"ruleDetailPage.rules.\",[23,1,[]]],null]],null],false],[0,\"\\n        \"],[9],[0,\"\\n      \"],[9],[0,\"\\n\"]],\"parameters\":[1]},null],[0,\"  \"],[9],[0,\"\\n\"],[9],[0,\"\\n\\n\"],[7,\"section\",true],[8],[0,\"\\n\"],[4,\"if\",[[28,\"or\",[[24,[\"yaml\"]],[24,[\"loading\"]]],null]],null,{\"statements\":[[0,\"    \"],[1,[28,\"input-yaml\",null,[[\"canChangeName\",\"value\",\"loading\",\"autoResize\",\"readOnly\",\"canUpload\",\"showUpload\",\"showDownload\",\"filename\"],[false,[24,[\"yaml\"]],[24,[\"loading\"]],false,true,false,false,false,[24,[\"filename\"]]]]],false],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[0,\"    \"],[7,\"div\",true],[10,\"class\",\"row mt-20\"],[8],[0,\"\\n      \"],[7,\"div\",true],[10,\"class\",\"text-center text-muted\"],[8],[0,\"\\n        \"],[1,[28,\"t\",[\"modalYaml.noData\"],[[\"name\"],[[24,[\"selectedType\"]]]]],false],[0,\"\\n      \"],[9],[0,\"\\n    \"],[9],[0,\"\\n\"]],\"parameters\":[]}],[9]],\"hasEval\":false}",
    "meta": {
      "moduleName": "istio/components/istio-yaml/template.hbs"
    }
  });

  _exports.default = _default;
});
define.alias("ivy-codemirror/components/ivy-codemirror", "istio/components/ivy-codemirror");
define.alias("shared/components/k3s-cluster-info/component", "istio/components/k3s-cluster-info/component");
define.alias("shared/components/k3s-node-args/component", "istio/components/k3s-node-args/component");
define.alias("shared/components/k3s-node-env-var/component", "istio/components/k3s-node-env-var/component");
define.alias("shared/components/labels-section/component", "istio/components/labels-section/component");
define.alias("shared/components/language-dropdown/component", "istio/components/language-dropdown/component");
define.alias("shared/components/link-to-as-attrs/component", "istio/components/link-to-as-attrs/component");
define.alias("shared/components/link-to-cluster-driver/component", "istio/components/link-to-cluster-driver/component");
define.alias("liquid-fire/components/liquid-bind", "istio/components/liquid-bind");
define.alias("liquid-fire/components/liquid-child", "istio/components/liquid-child");
define.alias("liquid-fire/components/liquid-container", "istio/components/liquid-container");
define.alias("liquid-fire/components/liquid-if", "istio/components/liquid-if");
define.alias("liquid-fire/components/liquid-measured", "istio/components/liquid-measured");
define.alias("liquid-fire/components/liquid-outlet", "istio/components/liquid-outlet");
define.alias("liquid-fire/components/liquid-spacer", "istio/components/liquid-spacer");
define.alias("liquid-fire/components/liquid-sync", "istio/components/liquid-sync");
define.alias("liquid-fire/components/liquid-unless", "istio/components/liquid-unless");
define.alias("liquid-fire/components/liquid-versions", "istio/components/liquid-versions");
define("istio/components/load-balancer/component", ["exports", "istio/components/load-balancer/template"], function (_exports, _template) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var ROUND_ROBIN = 'ROUND_ROBIN';
  var LEAST_CONN = 'LEAST_CONN';
  var RANDOM = 'RANDOM';
  var PASSTHROUGH = 'PASSTHROUGH';
  var SOURCE_IP = 'sourceIp';
  var HEADER = 'header';
  var COOKIE = 'cookie';
  var RING_SIZE = 1024;
  var LB_MODES = [{
    label: 'cruDestinationRule.loadBalancer.simple.roundRobin.label',
    value: ROUND_ROBIN
  }, {
    label: 'cruDestinationRule.loadBalancer.simple.leastConn.label',
    value: LEAST_CONN
  }, {
    label: 'cruDestinationRule.loadBalancer.simple.random.label',
    value: RANDOM
  }, {
    label: 'cruDestinationRule.loadBalancer.simple.passthrough.label',
    value: PASSTHROUGH
  }];

  var _default = Ember.Component.extend({
    layout: _template.default,
    trafficPolicy: null,
    isSimpleMode: true,
    lbModes: LB_MODES,
    consistentHashMode: SOURCE_IP,
    model: Ember.computed.alias('trafficPolicy.loadBalancer'),
    init: function init() {
      this._super.apply(this, arguments);

      this.initLB();
    },
    isSimpleModeDidChange: Ember.observer('isSimpleMode', function () {
      var isSimpleMode = Ember.get(this, 'isSimpleMode');

      if (isSimpleMode) {
        Ember.set(this, 'trafficPolicy.loadBalancer', {
          simple: ROUND_ROBIN
        });
      } else {
        Ember.setProperties(this, {
          'consistentHashMode': SOURCE_IP,
          'trafficPolicy.loadBalancer': {
            consistentHash: {
              useSourceIp: true,
              minimumRingSize: RING_SIZE
            }
          }
        });
      }
    }),
    consistentHashModeDidChange: Ember.observer('consistentHashMode', function () {
      var consistentHashMode = Ember.get(this, 'consistentHashMode');

      if (consistentHashMode === SOURCE_IP) {
        Ember.set(this, 'model', {
          consistentHash: {
            useSourceIp: true,
            minimumRingSize: RING_SIZE
          }
        });
      } else if (consistentHashMode === COOKIE) {
        Ember.set(this, 'model', {
          consistentHash: {
            httpCookie: {
              ttl: '0s',
              name: ''
            },
            minimumRingSize: RING_SIZE
          }
        });
      } else if (consistentHashMode === HEADER) {
        Ember.set(this, 'model', {
          consistentHash: {
            httpHeaderName: '',
            minimumRingSize: RING_SIZE
          }
        });
      }
    }),
    initLB: function initLB() {
      if (!Ember.get(this, 'trafficPolicy.loadBalancer')) {
        Ember.set(this, 'trafficPolicy.loadBalancer', {
          simple: ROUND_ROBIN
        });
      }

      if (Ember.get(this, 'model.consistentHash.useSourceIp')) {
        Ember.setProperties(this, {
          consistentHashMode: SOURCE_IP,
          isSimpleMode: false
        });
      } else if (Ember.get(this, 'model.consistentHash.httpHeaderName')) {
        Ember.setProperties(this, {
          consistentHashMode: HEADER,
          isSimpleMode: false
        });
      } else if (Ember.get(this, 'model.consistentHash.httpCookie.name')) {
        Ember.setProperties(this, {
          consistentHashMode: COOKIE,
          isSimpleMode: false
        });
      }
    }
  });

  _exports.default = _default;
});
define("istio/components/load-balancer/template", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "/IhLn+vC",
    "block": "{\"symbols\":[],\"statements\":[[7,\"div\",true],[10,\"class\",\"radio mb-0\"],[8],[0,\"\\n  \"],[7,\"label\",true],[8],[0,\"\\n\"],[4,\"if\",[[24,[\"editing\"]]],null,{\"statements\":[[0,\"      \"],[1,[28,\"radio-button\",null,[[\"selection\",\"value\"],[[24,[\"isSimpleMode\"]],true]]],false],[0,\"\\n\"]],\"parameters\":[]},null],[4,\"if\",[[28,\"or\",[[24,[\"editing\"]],[28,\"eq\",[[24,[\"isSimpleMode\"]],true],null]],null]],null,{\"statements\":[[0,\"      \"],[1,[28,\"t\",[\"cruDestinationRule.loadBalancer.simple.label\"],null],false],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"  \"],[9],[0,\"\\n\"],[4,\"if\",[[24,[\"isSimpleMode\"]]],null,{\"statements\":[[0,\"    \"],[7,\"div\",true],[10,\"class\",\"mb-10 mt-10\"],[8],[0,\"\\n\"],[4,\"input-or-display\",null,[[\"editable\",\"value\"],[[24,[\"editing\"]],[24,[\"model\",\"simple\"]]]],{\"statements\":[[0,\"        \"],[1,[28,\"new-select\",null,[[\"classNames\",\"content\",\"value\",\"localizedLabel\"],[\"form-control\",[24,[\"lbModes\"]],[24,[\"model\",\"simple\"]],true]]],false],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"    \"],[9],[0,\"\\n\"]],\"parameters\":[]},null],[9],[0,\"\\n\\n\"],[7,\"div\",true],[10,\"class\",\"radio mb-0\"],[8],[0,\"\\n  \"],[7,\"label\",true],[8],[0,\"\\n\"],[4,\"if\",[[24,[\"editing\"]]],null,{\"statements\":[[0,\"      \"],[1,[28,\"radio-button\",null,[[\"selection\",\"value\"],[[24,[\"isSimpleMode\"]],false]]],false],[0,\"\\n\"]],\"parameters\":[]},null],[4,\"if\",[[28,\"or\",[[24,[\"editing\"]],[28,\"eq\",[[24,[\"isSimpleMode\"]],false],null]],null]],null,{\"statements\":[[0,\"      \"],[1,[28,\"t\",[\"cruDestinationRule.loadBalancer.consistentHash.label\"],null],false],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"  \"],[9],[0,\"\\n\"],[9],[0,\"\\n\\n\"],[4,\"unless\",[[24,[\"isSimpleMode\"]]],null,{\"statements\":[[0,\"  \"],[7,\"div\",true],[10,\"class\",\"row box\"],[8],[0,\"\\n    \"],[7,\"div\",true],[10,\"class\",\"col span-4\"],[8],[0,\"\\n      \"],[7,\"label\",true],[10,\"class\",\"acc-label\"],[8],[0,\"\\n        \"],[1,[28,\"t\",[\"cruDestinationRule.loadBalancer.consistentHash.mode.label\"],null],false],[0,\"\\n      \"],[9],[0,\"\\n\"],[4,\"input-or-display\",null,[[\"editable\",\"value\"],[[24,[\"editing\"]],[24,[\"consistentHashMode\"]]]],{\"statements\":[[0,\"        \"],[7,\"div\",true],[10,\"class\",\"radio\"],[8],[0,\"\\n          \"],[7,\"label\",true],[8],[0,\"\\n            \"],[1,[28,\"radio-button\",null,[[\"selection\",\"value\"],[[24,[\"consistentHashMode\"]],\"header\"]]],false],[0,\" \"],[1,[28,\"t\",[\"cruDestinationRule.loadBalancer.consistentHash.mode.header.label\"],null],false],[0,\"\\n          \"],[9],[0,\"\\n        \"],[9],[0,\"\\n        \"],[7,\"div\",true],[10,\"class\",\"radio\"],[8],[0,\"\\n          \"],[7,\"label\",true],[8],[0,\"\\n            \"],[1,[28,\"radio-button\",null,[[\"selection\",\"value\"],[[24,[\"consistentHashMode\"]],\"cookie\"]]],false],[0,\" \"],[1,[28,\"t\",[\"cruDestinationRule.loadBalancer.consistentHash.mode.cookie.label\"],null],false],[0,\"\\n          \"],[9],[0,\"\\n        \"],[9],[0,\"\\n        \"],[7,\"div\",true],[10,\"class\",\"radio\"],[8],[0,\"\\n          \"],[7,\"label\",true],[8],[0,\"\\n            \"],[1,[28,\"radio-button\",null,[[\"selection\",\"value\"],[[24,[\"consistentHashMode\"]],\"sourceIp\"]]],false],[0,\" \"],[1,[28,\"t\",[\"cruDestinationRule.loadBalancer.consistentHash.mode.sourceIp.label\"],null],false],[0,\"\\n          \"],[9],[0,\"\\n        \"],[9],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"    \"],[9],[0,\"\\n\"],[4,\"if\",[[28,\"eq\",[[24,[\"consistentHashMode\"]],\"header\"],null]],null,{\"statements\":[[0,\"      \"],[7,\"div\",true],[10,\"class\",\"col span-4\"],[8],[0,\"\\n        \"],[7,\"label\",true],[10,\"class\",\"acc-label\"],[11,\"for\",[29,[[28,\"concat\",[[24,[\"elementId\"]],\"-input-httpHeaderName\"],null]]]],[8],[0,\"\\n          \"],[1,[28,\"t\",[\"cruDestinationRule.loadBalancer.consistentHash.httpHeaderName.label\"],null],false],[0,\"\\n\"],[4,\"if\",[[24,[\"editing\"]]],null,{\"statements\":[[0,\"            \"],[1,[22,\"field-required\"],false],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"        \"],[9],[0,\"\\n\"],[4,\"input-or-display\",null,[[\"editable\",\"value\"],[[24,[\"editing\"]],[24,[\"model\",\"consistentHash\",\"httpHeaderName\"]]]],{\"statements\":[[0,\"          \"],[1,[28,\"input\",null,[[\"type\",\"value\",\"id\",\"placeholder\"],[\"text\",[24,[\"model\",\"consistentHash\",\"httpHeaderName\"]],[28,\"concat\",[[24,[\"elementId\"]],\"-input-httpHeaderName\"],null],[28,\"t\",[\"cruDestinationRule.loadBalancer.consistentHash.httpHeaderName.placeholder\"],null]]]],false],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"      \"],[9],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[4,\"if\",[[28,\"eq\",[[24,[\"consistentHashMode\"]],\"cookie\"],null]],null,{\"statements\":[[0,\"      \"],[7,\"div\",true],[10,\"class\",\"col span-4\"],[8],[0,\"\\n        \"],[7,\"label\",true],[10,\"class\",\"acc-label\"],[11,\"for\",[29,[[28,\"concat\",[[24,[\"elementId\"]],\"-input-httpCookie-name\"],null]]]],[8],[0,\"\\n          \"],[1,[28,\"t\",[\"cruDestinationRule.loadBalancer.consistentHash.httpCookie.name.label\"],null],false],[0,\"\\n\"],[4,\"if\",[[24,[\"editing\"]]],null,{\"statements\":[[0,\"            \"],[1,[22,\"field-required\"],false],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"        \"],[9],[0,\"\\n\"],[4,\"input-or-display\",null,[[\"editable\",\"value\"],[[24,[\"editing\"]],[24,[\"model\",\"model\",\"consistentHash\",\"httpCookie\",\"name\"]]]],{\"statements\":[[0,\"          \"],[1,[28,\"input\",null,[[\"type\",\"value\",\"id\",\"placeholder\"],[\"text\",[24,[\"model\",\"consistentHash\",\"httpCookie\",\"name\"]],[28,\"concat\",[[24,[\"elementId\"]],\"-input-httpCookie-name\"],null],[28,\"t\",[\"cruDestinationRule.loadBalancer.consistentHash.httpCookie.name.placeholder\"],null]]]],false],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"\\n        \"],[7,\"label\",true],[10,\"class\",\"acc-label pt-20\"],[11,\"for\",[29,[[28,\"concat\",[[24,[\"elementId\"]],\"-input-httpCookie-path\"],null]]]],[8],[0,\"\\n          \"],[1,[28,\"t\",[\"cruDestinationRule.loadBalancer.consistentHash.httpCookie.path.label\"],null],false],[0,\"\\n        \"],[9],[0,\"\\n\"],[4,\"input-or-display\",null,[[\"editable\",\"value\"],[[24,[\"editing\"]],[24,[\"model\",\"consistentHash\",\"httpCookie\",\"path\"]]]],{\"statements\":[[0,\"          \"],[1,[28,\"input\",null,[[\"type\",\"value\",\"id\",\"placeholder\"],[\"text\",[24,[\"model\",\"consistentHash\",\"httpCookie\",\"path\"]],[28,\"concat\",[[24,[\"elementId\"]],\"-input-httpCookie-path\"],null],[28,\"t\",[\"cruDestinationRule.loadBalancer.consistentHash.httpCookie.path.placeholder\"],null]]]],false],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"\\n        \"],[7,\"label\",true],[10,\"class\",\"acc-label pt-20\"],[11,\"for\",[29,[[28,\"concat\",[[24,[\"elementId\"]],\"-input-httpCookie-ttl\"],null]]]],[8],[0,\"\\n          \"],[1,[28,\"t\",[\"cruDestinationRule.loadBalancer.consistentHash.httpCookie.ttl.label\"],null],false],[0,\"\\n\"],[4,\"if\",[[24,[\"editing\"]]],null,{\"statements\":[[0,\"            \"],[1,[22,\"field-required\"],false],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"        \"],[9],[0,\"\\n\"],[4,\"input-or-display\",null,[[\"editable\",\"value\"],[[24,[\"editing\"]],[24,[\"model\",\"consistentHash\",\"httpCookie\",\"ttl\"]]]],{\"statements\":[[0,\"          \"],[1,[28,\"input\",null,[[\"type\",\"value\",\"id\",\"placeholder\"],[\"text\",[24,[\"model\",\"consistentHash\",\"httpCookie\",\"ttl\"]],[28,\"concat\",[[24,[\"elementId\"]],\"-input-httpCookie-ttl\"],null],[28,\"t\",[\"cruDestinationRule.loadBalancer.consistentHash.httpCookie.ttl.placeholder\"],null]]]],false],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"      \"],[9],[0,\"\\n    \"]],\"parameters\":[]},null]],\"parameters\":[]}],[0,\"\\n    \"],[7,\"div\",true],[10,\"class\",\"col span-4\"],[8],[0,\"\\n      \"],[7,\"label\",true],[10,\"class\",\"acc-label\"],[11,\"for\",[29,[[28,\"concat\",[[24,[\"elementId\"]],\"-input-minimumRingSize\"],null]]]],[8],[0,\"\\n        \"],[1,[28,\"t\",[\"cruDestinationRule.loadBalancer.consistentHash.minimumRingSize.label\"],null],false],[0,\"\\n      \"],[9],[0,\"\\n\"],[4,\"input-or-display\",null,[[\"editable\",\"value\"],[[24,[\"editing\"]],[24,[\"model\",\"consistentHash\",\"minimumRingSize\"]]]],{\"statements\":[[0,\"        \"],[1,[28,\"input-integer\",null,[[\"min\",\"value\",\"id\",\"placeholder\"],[0,[24,[\"model\",\"consistentHash\",\"minimumRingSize\"]],[28,\"concat\",[[24,[\"elementId\"]],\"-input-minimumRingSize\"],null],[28,\"t\",[\"cruDestinationRule.loadBalancer.consistentHash.minimumRingSize.placeholder\"],null]]]],false],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"    \"],[9],[0,\"\\n  \"],[9],[0,\"\\n\"]],\"parameters\":[]},null]],\"hasEval\":false}",
    "meta": {
      "moduleName": "istio/components/load-balancer/template.hbs"
    }
  });

  _exports.default = _default;
});
define.alias("shared/components/marked-down/component", "istio/components/marked-down/component");
define("istio/components/match-type-select/component", ["exports", "istio/components/match-type-select/template"], function (_exports, _template) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var AUTHORITY = 'authority';
  var METHOD = 'method';
  var URI = 'uri';
  var SCHEME = 'scheme';
  var HEADERS = 'headers';
  var TYPES = [{
    label: 'cruVirtualService.http.routes.matches.type.uri',
    value: URI
  }, {
    label: 'cruVirtualService.http.routes.matches.type.scheme',
    value: SCHEME
  }, {
    label: 'cruVirtualService.http.routes.matches.type.method',
    value: METHOD
  }, {
    label: 'cruVirtualService.http.routes.matches.type.authority',
    value: AUTHORITY
  }, {
    label: 'cruVirtualService.http.routes.matches.type.headers',
    value: HEADERS
  }];

  var _default = Ember.Component.extend({
    layout: _template.default,
    match: null,
    matcheTypes: TYPES,
    init: function init() {
      this._super.apply(this, arguments);

      this.initMatcheTypes();
    },
    matchesDidChange: Ember.observer('matches.@each.{matchType,key,condition,value}', function () {
      var _this = this;

      Ember.set(this, 'matcheTypes', TYPES.filter(function (choice) {
        return _this.notExist(choice);
      }));
    }),
    notExist: function notExist(choice) {
      var _this2 = this;

      return !(Ember.get(this, 'matches') || []).find(function (m, index) {
        return Ember.get(m, 'matchType') !== HEADERS && Ember.get(m, 'matchType') === Ember.get(choice, 'value') && index !== Ember.get(_this2, 'index');
      });
    },
    initMatcheTypes: function initMatcheTypes() {
      var _this3 = this;

      Ember.set(this, 'matcheTypes', TYPES.filter(function (choice) {
        return _this3.notExist(choice);
      }));
    }
  });

  _exports.default = _default;
});
define("istio/components/match-type-select/template", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "4atFkpHt",
    "block": "{\"symbols\":[],\"statements\":[[1,[28,\"new-select\",null,[[\"classNames\",\"content\",\"localizedLabel\",\"value\"],[\"form-control\",[24,[\"matcheTypes\"]],true,[24,[\"match\",\"matchType\"]]]]],false]],\"hasEval\":false}",
    "meta": {
      "moduleName": "istio/components/match-type-select/template.hbs"
    }
  });

  _exports.default = _default;
});
define.alias("shared/components/metrics-action/component", "istio/components/metrics-action/component");
define.alias("shared/components/metrics-graph/component", "istio/components/metrics-graph/component");
define.alias("shared/components/metrics-summary/component", "istio/components/metrics-summary/component");
define.alias("shared/components/modal-add-custom-roles/component", "istio/components/modal-add-custom-roles/component");
define.alias("shared/components/modal-confirm-deactivate/component", "istio/components/modal-confirm-deactivate/component");
define.alias("shared/components/modal-confirm-yaml-switch/component", "istio/components/modal-confirm-yaml-switch/component");
define.alias("shared/components/modal-container-stop/component", "istio/components/modal-container-stop/component");
define.alias("shared/components/modal-delete-eks-cluster/component", "istio/components/modal-delete-eks-cluster/component");
define("istio/components/modal-delete-istio/component", ["exports", "ui/mixins/modal-base", "istio/components/modal-delete-istio/template", "jquery"], function (_exports, _modalBase, _template, _jquery) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Component.extend(_modalBase.default, {
    settings: Ember.inject.service(),
    intl: Ember.inject.service(),
    scope: Ember.inject.service(),
    growl: Ember.inject.service(),
    layout: _template.default,
    classNames: ['medium-modal'],
    onlyIstio: true,
    istioApp: Ember.computed.alias('modalService.modalOpts.istioApp'),
    cluster: Ember.computed.alias('scope.currentCluster'),
    didRender: function didRender() {
      setTimeout(function () {
        try {
          (0, _jquery.default)('BUTTON')[0].focus();
        } catch (e) {}
      }, 500);
    },
    actions: {
      confirm: function confirm() {
        var _this = this;

        var istioApp = this.istioApp,
            onlyIstio = this.onlyIstio,
            cluster = this.cluster;
        var systemProject = cluster.systemProject;
        var istioSystemNamespace = (systemProject.namespaces || []).findBy('id', 'istio-system');
        Ember.set(this, 'saving', true);
        var promises = [istioApp.delete(), istioSystemNamespace.delete()];

        if (!onlyIstio) {
          promises.pushObject(cluster.doAction('disableMonitoring'));
        }

        Ember.RSVP.all(promises).then(function () {
          setTimeout(function () {
            window.location.href = window.location.href; // eslint-disable-line no-self-assign
          }, 1000);
        }).catch(function (err) {
          Ember.get(_this, 'growl').fromError(Ember.get(err, 'body.message'));
        }).finally(function () {
          Ember.set(_this, 'saving', false);

          _this.send('cancel');
        });
      }
    }
  });

  _exports.default = _default;
});
define("istio/components/modal-delete-istio/template", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "463hgWSz",
    "block": "{\"symbols\":[],\"statements\":[[7,\"h2\",true],[8],[0,\"\\n  \"],[1,[28,\"t\",[\"modalDeleteIstio.title\"],null],false],[0,\"\\n\"],[9],[0,\"\\n\\n\"],[7,\"ul\",true],[10,\"class\",\"list-unstyled pl-30\"],[8],[0,\"\\n  \"],[7,\"li\",true],[8],[0,\"\\n    \"],[7,\"label\",true],[8],[0,\"\\n      \"],[1,[28,\"radio-button\",null,[[\"selection\",\"value\"],[[24,[\"onlyIstio\"]],true]]],false],[0,\"\\n      \"],[7,\"span\",true],[8],[0,\"\\n        \"],[1,[28,\"t\",[\"modalDeleteIstio.onlyIstio.true\"],null],false],[0,\"\\n      \"],[9],[0,\"\\n    \"],[9],[0,\"\\n  \"],[9],[0,\"\\n  \"],[7,\"li\",true],[8],[0,\"\\n    \"],[7,\"label\",true],[8],[0,\"\\n      \"],[1,[28,\"radio-button\",null,[[\"selection\",\"value\"],[[24,[\"onlyIstio\"]],false]]],false],[0,\"\\n      \"],[7,\"span\",true],[8],[0,\"\\n        \"],[1,[28,\"t\",[\"modalDeleteIstio.onlyIstio.false\"],null],false],[0,\"\\n      \"],[9],[0,\"\\n    \"],[9],[0,\"\\n  \"],[9],[0,\"\\n\"],[9],[0,\"\\n\\n\"],[1,[28,\"save-cancel\",null,[[\"editing\",\"saving\",\"editLabel\",\"savingLabel\",\"save\",\"cancel\",\"saveColor\",\"savedColor\",\"savingColor\"],[true,[24,[\"saving\"]],\"modalDeleteIstio.disable\",\"modalDeleteIstio.disabling\",[28,\"action\",[[23,0,[]],\"confirm\"],null],[28,\"action\",[[23,0,[]],\"cancel\"],null],\"bg-error\",\"bg-error\",\"bg-error\"]]],false],[0,\"\\n\"]],\"hasEval\":false}",
    "meta": {
      "moduleName": "istio/components/modal-delete-istio/template.hbs"
    }
  });

  _exports.default = _default;
});
define.alias("shared/components/modal-edit-catalog/component", "istio/components/modal-edit-catalog/component");
define.alias("shared/components/modal-edit-cluster-template/component", "istio/components/modal-edit-cluster-template/component");
define.alias("shared/components/modal-edit-driver/component", "istio/components/modal-edit-driver/component");
define.alias("shared/components/modal-edit-user/component", "istio/components/modal-edit-user/component");
define.alias("shared/components/modal-istio-yaml/component", "istio/components/modal-istio-yaml/component");
define.alias("shared/components/modal-move-namespace/component", "istio/components/modal-move-namespace/component");
define.alias("shared/components/modal-root/component", "istio/components/modal-root/component");
define.alias("shared/components/modal-save-rke-template/component", "istio/components/modal-save-rke-template/component");
define.alias("shared/components/modal-shell/component", "istio/components/modal-shell/component");
define.alias("shared/components/modal-yaml/component", "istio/components/modal-yaml/component");
define.alias("shared/components/multi-container-stats/component", "istio/components/multi-container-stats/component");
define.alias("shared/components/namespace-group/component", "istio/components/namespace-group/component");
define.alias("shared/components/new-select/component", "istio/components/new-select/component");
define.alias("shared/components/node-ip/component", "istio/components/node-ip/component");
define.alias("shared/components/node-pool-row/component", "istio/components/node-pool-row/component");
define.alias("shared/components/node-taints/component", "istio/components/node-taints/component");
define("istio/components/outlier-detection/component", ["exports", "istio/components/outlier-detection/template"], function (_exports, _template) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Component.extend({
    layout: _template.default,
    trafficPolicy: null,
    model: Ember.computed.alias('trafficPolicy.outlierDetection'),
    init: function init() {
      this._super.apply(this, arguments);

      this.initOutlierDetection();
    },
    initOutlierDetection: function initOutlierDetection() {
      if (!Ember.get(this, 'trafficPolicy.outlierDetection') && Ember.get(this, 'editing')) {
        Ember.set(this, 'trafficPolicy.outlierDetection', {
          baseEjectionTime: '30s',
          consecutiveErrors: 5,
          interval: '10s',
          maxEjectionPercent: 10
        });
      }
    }
  });

  _exports.default = _default;
});
define("istio/components/outlier-detection/template", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "cHnWP9Rz",
    "block": "{\"symbols\":[],\"statements\":[[7,\"div\",true],[10,\"class\",\"row\"],[8],[0,\"\\n  \"],[7,\"div\",true],[10,\"class\",\"col span-6\"],[8],[0,\"\\n    \"],[7,\"label\",true],[10,\"class\",\"acc-label\"],[11,\"for\",[29,[[28,\"concat\",[[24,[\"elementId\"]],\"-input-baseEjectionTime\"],null]]]],[8],[0,\"\\n      \"],[1,[28,\"t\",[\"cruDestinationRule.outlierDetection.baseEjectionTime.label\"],null],false],[0,\"\\n    \"],[9],[0,\"\\n\"],[4,\"input-or-display\",null,[[\"editable\",\"value\"],[[24,[\"editing\"]],[24,[\"model\",\"baseEjectionTime\"]]]],{\"statements\":[[0,\"      \"],[1,[28,\"input\",null,[[\"type\",\"value\",\"id\",\"placeholder\"],[\"text\",[24,[\"model\",\"baseEjectionTime\"]],[28,\"concat\",[[24,[\"elementId\"]],\"-input-baseEjectionTime\"],null],[28,\"t\",[\"cruDestinationRule.outlierDetection.baseEjectionTime.placeholder\"],null]]]],false],[0,\"\\n      \"],[7,\"p\",true],[10,\"class\",\"help-block\"],[8],[0,\"\\n        \"],[1,[28,\"t\",[\"cruDestinationRule.outlierDetection.baseEjectionTime.help\"],null],false],[0,\"\\n      \"],[9],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"  \"],[9],[0,\"\\n\\n  \"],[7,\"div\",true],[10,\"class\",\"col span-6\"],[8],[0,\"\\n    \"],[7,\"label\",true],[10,\"class\",\"acc-label\"],[11,\"for\",[29,[[28,\"concat\",[[24,[\"elementId\"]],\"-input-consecutiveErrors\"],null]]]],[8],[0,\"\\n      \"],[1,[28,\"t\",[\"cruDestinationRule.outlierDetection.consecutiveErrors.label\"],null],false],[0,\"\\n    \"],[9],[0,\"\\n\"],[4,\"input-or-display\",null,[[\"editable\",\"value\"],[[24,[\"editing\"]],[24,[\"model\",\"consecutiveErrors\"]]]],{\"statements\":[[0,\"      \"],[1,[28,\"input-integer\",null,[[\"min\",\"value\",\"id\",\"placeholder\"],[0,[24,[\"model\",\"consecutiveErrors\"]],[28,\"concat\",[[24,[\"elementId\"]],\"-input-consecutiveErrors\"],null],[28,\"t\",[\"cruDestinationRule.outlierDetection.consecutiveErrors.placeholder\"],null]]]],false],[0,\"\\n      \"],[7,\"p\",true],[10,\"class\",\"help-block\"],[8],[0,\"\\n        \"],[1,[28,\"t\",[\"cruDestinationRule.outlierDetection.consecutiveErrors.help\"],null],false],[0,\"\\n      \"],[9],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"  \"],[9],[0,\"\\n\"],[9],[0,\"\\n\\n\"],[7,\"div\",true],[10,\"class\",\"row\"],[8],[0,\"\\n  \"],[7,\"div\",true],[10,\"class\",\"col span-6\"],[8],[0,\"\\n    \"],[7,\"label\",true],[10,\"class\",\"acc-label\"],[11,\"for\",[29,[[28,\"concat\",[[24,[\"elementId\"]],\"-input-interval\"],null]]]],[8],[0,\"\\n      \"],[1,[28,\"t\",[\"cruDestinationRule.outlierDetection.interval.label\"],null],false],[0,\"\\n    \"],[9],[0,\"\\n\"],[4,\"input-or-display\",null,[[\"editable\",\"value\"],[[24,[\"editing\"]],[24,[\"model\",\"interval\"]]]],{\"statements\":[[0,\"      \"],[1,[28,\"input\",null,[[\"type\",\"value\",\"id\",\"placeholder\"],[\"text\",[24,[\"model\",\"interval\"]],[28,\"concat\",[[24,[\"elementId\"]],\"-input-interval\"],null],[28,\"t\",[\"cruDestinationRule.outlierDetection.interval.placeholder\"],null]]]],false],[0,\"\\n      \"],[7,\"p\",true],[10,\"class\",\"help-block\"],[8],[0,\"\\n        \"],[1,[28,\"t\",[\"cruDestinationRule.outlierDetection.interval.help\"],null],false],[0,\"\\n      \"],[9],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"  \"],[9],[0,\"\\n\\n  \"],[7,\"div\",true],[10,\"class\",\"col span-6\"],[8],[0,\"\\n    \"],[7,\"label\",true],[10,\"class\",\"acc-label\"],[11,\"for\",[29,[[28,\"concat\",[[24,[\"elementId\"]],\"-input-maxEjectionPercent\"],null]]]],[8],[0,\"\\n      \"],[1,[28,\"t\",[\"cruDestinationRule.outlierDetection.maxEjectionPercent.label\"],null],false],[0,\"\\n    \"],[9],[0,\"\\n\"],[4,\"input-or-display\",null,[[\"editable\",\"value\"],[[24,[\"editing\"]],[24,[\"model\",\"maxEjectionPercent\"]]]],{\"statements\":[[0,\"      \"],[7,\"div\",true],[10,\"class\",\"input-group\"],[8],[0,\"\\n        \"],[1,[28,\"input-integer\",null,[[\"classNames\",\"min\",\"max\",\"value\",\"id\",\"placeholder\"],[\"form-control\",\"0\",\"100\",[24,[\"model\",\"maxEjectionPercent\"]],[28,\"concat\",[[24,[\"elementId\"]],\"-input-maxEjectionPercent\"],null],[28,\"t\",[\"cruDestinationRule.outlierDetection.maxEjectionPercent.placeholder\"],null]]]],false],[0,\"\\n        \"],[7,\"div\",true],[10,\"class\",\"input-group-addon bg-default\"],[8],[0,\"\\n          %\\n        \"],[9],[0,\"\\n      \"],[9],[0,\"\\n      \"],[7,\"p\",true],[10,\"class\",\"help-block\"],[8],[0,\"\\n        \"],[1,[28,\"t\",[\"cruDestinationRule.outlierDetection.maxEjectionPercent.help\"],null],false],[0,\"\\n      \"],[9],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"  \"],[9],[0,\"\\n\"],[9]],\"hasEval\":false}",
    "meta": {
      "moduleName": "istio/components/outlier-detection/template.hbs"
    }
  });

  _exports.default = _default;
});
define.alias("shared/components/outside-click/component", "istio/components/outside-click/component");
define.alias("ember-cli-pagination/components/page-numbers", "istio/components/page-numbers");
define.alias("shared/components/page-numbers/component", "istio/components/page-numbers/component");
define.alias("shared/components/percent-gauge/component", "istio/components/percent-gauge/component");
define("istio/components/port-selector/component", ["exports", "istio/components/port-selector/template", "shared/utils/util"], function (_exports, _template, _util) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Component.extend({
    layout: _template.default,
    editing: true,
    model: null,
    init: function init() {
      this._super.apply(this, arguments);

      this.initPort();
    },
    portNumberOrNameDidChange: Ember.observer('portNumberOrName', function () {
      var port = Ember.get(this, 'portNumberOrName');
      var model = Ember.get(this, 'model');

      if (port && (0, _util.isNumeric)(port)) {
        Ember.set(model, 'port', {
          number: parseInt(port, 10)
        });
      } else if (port) {
        Ember.set(model, 'port', {
          name: port
        });
      } else {
        delete model['port'];
      }
    }),
    initPort: function initPort() {
      var port = Ember.get(this, 'model.port');

      if (port) {
        Ember.set(this, 'portNumberOrName', Ember.get(port, 'name') || Ember.get(port, 'number') || null);
      }
    }
  });

  _exports.default = _default;
});
define("istio/components/port-selector/template", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "kX+4Q70R",
    "block": "{\"symbols\":[],\"statements\":[[7,\"label\",true],[10,\"class\",\"acc-label\"],[11,\"for\",[29,[[28,\"concat\",[[24,[\"elementId\"]],\"-input-port\"],null]]]],[8],[0,\"\\n  \"],[1,[28,\"t\",[\"cruDestinationRule.port.label\"],null],false],[0,\"\\n\"],[9],[0,\"\\n\"],[4,\"input-or-display\",null,[[\"editable\",\"value\"],[[24,[\"editing\"]],[24,[\"portNumberOrName\"]]]],{\"statements\":[[0,\"  \"],[1,[28,\"input\",null,[[\"type\",\"id\",\"value\",\"classNames\",\"placeholder\"],[\"text\",[28,\"concat\",[[24,[\"elementId\"]],\"-input-mirror-port\"],null],[24,[\"portNumberOrName\"]],\"form-control\",[28,\"t\",[\"cruDestinationRule.port.placeholder\"],null]]]],false],[0,\"\\n\"]],\"parameters\":[]},null]],\"hasEval\":false}",
    "meta": {
      "moduleName": "istio/components/port-selector/template.hbs"
    }
  });

  _exports.default = _default;
});
define.alias("shared/components/pretty-json/component", "istio/components/pretty-json/component");
define.alias("shared/components/principal-search/component", "istio/components/principal-search/component");
define.alias("shared/components/progress-bar/component", "istio/components/progress-bar/component");
define.alias("shared/components/project-member-row/component", "istio/components/project-member-row/component");
define("istio/components/project-traffic-metrics/component", ["exports", "shared/mixins/metrics", "istio/components/project-traffic-metrics/template"], function (_exports, _metrics, _template) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Component.extend(_metrics.default, {
    scope: Ember.inject.service(),
    layout: _template.default,
    filters: {
      resourceType: 'istioproject'
    },
    projectScope: true,
    istio: true,
    projectDidChange: Ember.observer('scope.currentProject.id', function () {
      Ember.setProperties(this, {
        'state.noGraphs': true,
        graphs: [],
        single: []
      });
      this.send('query', false);
    })
  });

  _exports.default = _default;
});
define("istio/components/project-traffic-metrics/template", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "DR7yC8Pq",
    "block": "{\"symbols\":[],\"statements\":[[7,\"section\",true],[8],[0,\"\\n  \"],[1,[28,\"metrics-action\",null,[[\"queryAction\",\"allowDetail\",\"state\",\"istio\"],[[28,\"action\",[[23,0,[]],\"query\"],null],false,[24,[\"state\"]],true]]],false],[0,\"\\n  \"],[1,[28,\"metrics-graph\",null,[[\"graphs\",\"loading\",\"noGraphs\"],[[24,[\"graphs\"]],[24,[\"state\",\"loading\"]],[24,[\"state\",\"noGraphs\"]]]]],false],[0,\"\\n\"],[9]],\"hasEval\":false}",
    "meta": {
      "moduleName": "istio/components/project-traffic-metrics/template.hbs"
    }
  });

  _exports.default = _default;
});
define.alias("shared/components/radio-button/component", "istio/components/radio-button/component");
define.alias("shared/components/resource-condition-list/component", "istio/components/resource-condition-list/component");
define.alias("shared/components/resource-event-list/component", "istio/components/resource-event-list/component");
define.alias("shared/components/save-cancel/component", "istio/components/save-cancel/component");
define.alias("shared/components/scheduling-toleration/component", "istio/components/scheduling-toleration/component");
define.alias("shared/components/schema/input-boolean/component", "istio/components/schema/input-boolean/component");
define.alias("shared/components/schema/input-certificate/component", "istio/components/schema/input-certificate/component");
define.alias("shared/components/schema/input-config-map/component", "istio/components/schema/input-config-map/component");
define.alias("shared/components/schema/input-container/component", "istio/components/schema/input-container/component");
define.alias("shared/components/schema/input-date/component", "istio/components/schema/input-date/component");
define.alias("shared/components/schema/input-dns-record/component", "istio/components/schema/input-dns-record/component");
define.alias("shared/components/schema/input-enum/component", "istio/components/schema/input-enum/component");
define.alias("shared/components/schema/input-float/component", "istio/components/schema/input-float/component");
define.alias("shared/components/schema/input-hostname/component", "istio/components/schema/input-hostname/component");
define.alias("shared/components/schema/input-int/component", "istio/components/schema/input-int/component");
define.alias("shared/components/schema/input-istiohost/component", "istio/components/schema/input-istiohost/component");
define.alias("shared/components/schema/input-masked/component", "istio/components/schema/input-masked/component");
define.alias("shared/components/schema/input-multiline/component", "istio/components/schema/input-multiline/component");
define.alias("shared/components/schema/input-password/component", "istio/components/schema/input-password/component");
define.alias("shared/components/schema/input-pvc/component", "istio/components/schema/input-pvc/component");
define.alias("shared/components/schema/input-relative-service/component", "istio/components/schema/input-relative-service/component");
define.alias("shared/components/schema/input-secret/component", "istio/components/schema/input-secret/component");
define.alias("shared/components/schema/input-storageclass/component", "istio/components/schema/input-storageclass/component");
define.alias("shared/components/schema/input-string/component", "istio/components/schema/input-string/component");
define.alias("shared/components/schema/input-workload/component", "istio/components/schema/input-workload/component");
define.alias("shared/components/search-text/component", "istio/components/search-text/component");
define.alias("shared/components/searchable-select/component", "istio/components/searchable-select/component");
define.alias("shared/components/select-value-check/component", "istio/components/select-value-check/component");
define.alias("shared/components/settings/danger-zone/component", "istio/components/settings/danger-zone/component");
define.alias("shared/components/settings/host-registration/component", "istio/components/settings/host-registration/component");
define.alias("shared/components/settings/settings-header/component", "istio/components/settings/settings-header/component");
define.alias("shared/components/share-member-row/component", "istio/components/share-member-row/component");
define.alias("shared/components/shortcut-key/component", "istio/components/shortcut-key/component");
define.alias("shared/components/sortable-table/component", "istio/components/sortable-table/component");
define.alias("shared/components/sortable-thead/component", "istio/components/sortable-thead/component");
define.alias("shared/components/storage-class/provisioner-aws-ebs/component", "istio/components/storage-class/provisioner-aws-ebs/component");
define.alias("shared/components/storage-class/provisioner-azure-disk/component", "istio/components/storage-class/provisioner-azure-disk/component");
define.alias("shared/components/storage-class/provisioner-azure-file/component", "istio/components/storage-class/provisioner-azure-file/component");
define.alias("shared/components/storage-class/provisioner-cinder/component", "istio/components/storage-class/provisioner-cinder/component");
define.alias("shared/components/storage-class/provisioner-gce-pd/component", "istio/components/storage-class/provisioner-gce-pd/component");
define.alias("shared/components/storage-class/provisioner-generic/component", "istio/components/storage-class/provisioner-generic/component");
define.alias("shared/components/storage-class/provisioner-glusterfs/component", "istio/components/storage-class/provisioner-glusterfs/component");
define.alias("shared/components/storage-class/provisioner-local-storage/component", "istio/components/storage-class/provisioner-local-storage/component");
define.alias("shared/components/storage-class/provisioner-longhorn/component", "istio/components/storage-class/provisioner-longhorn/component");
define.alias("shared/components/storage-class/provisioner-portworx-volume/component", "istio/components/storage-class/provisioner-portworx-volume/component");
define.alias("shared/components/storage-class/provisioner-quobyte/component", "istio/components/storage-class/provisioner-quobyte/component");
define.alias("shared/components/storage-class/provisioner-rbd/component", "istio/components/storage-class/provisioner-rbd/component");
define.alias("shared/components/storage-class/provisioner-scaleio/component", "istio/components/storage-class/provisioner-scaleio/component");
define.alias("shared/components/storage-class/provisioner-storageos/component", "istio/components/storage-class/provisioner-storageos/component");
define.alias("shared/components/storage-class/provisioner-vsphere-volume/component", "istio/components/storage-class/provisioner-vsphere-volume/component");
define.alias("shared/components/table-labels/component", "istio/components/table-labels/component");
define.alias("shared/components/textarea-autogrow/component", "istio/components/textarea-autogrow/component");
define.alias("shared/components/tooltip-action-menu/component", "istio/components/tooltip-action-menu/component");
define.alias("shared/components/tooltip-basic/component", "istio/components/tooltip-basic/component");
define.alias("shared/components/tooltip-element/component", "istio/components/tooltip-element/component");
define.alias("shared/components/tooltip-expiring/component", "istio/components/tooltip-expiring/component");
define.alias("shared/components/tooltip-toggle-override/component", "istio/components/tooltip-toggle-override/component");
define.alias("shared/components/tooltip-warning/component", "istio/components/tooltip-warning/component");
define.alias("shared/components/top-errors/component", "istio/components/top-errors/component");
define("istio/components/traffic-monitoring/component", ["exports", "istio/components/traffic-monitoring/template", "jquery"], function (_exports, _template, _jquery) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Component.extend({
    scope: Ember.inject.service(),
    istio: Ember.inject.service(),
    classNames: ['istio-graph'],
    layout: _template.default,
    namespaces: null,
    loading: false,
    intervalAnchor: null,
    willDestroyElement: function willDestroyElement() {
      this.clearInterval();

      this._super();
    },
    actions: {
      refreshGraph: function refreshGraph() {
        document.getElementById('kiali-iframe').contentWindow.location.href = this.getKialiUrl();
        this.namespaceDidChange();
      }
    },
    namespaceDidChange: Ember.observer('namespace', function () {
      var _this = this;

      this.clearInterval();
      Ember.set(this, 'loading', true);
      Ember.set(this, 'url', this.getKialiUrl());
      var intervalAnchor = setInterval(function () {
        if ((0, _jquery.default)('#kiali-iframe').contents().find('#root .login-pf').length === 0 && (0, _jquery.default)('#kiali-iframe').contents().find('#root .pf-c-page').length === 1) {
          Ember.set(_this, 'loading', false);

          _this.clearInterval();
        }
      }, 800);
      Ember.set(this, 'intervalAnchor', intervalAnchor);
    }),
    updateKialiGraph: Ember.on('init', Ember.observer('scope.currentProject.id', 'namespaces', function () {
      if (!Ember.get(this, 'namespace') || !(Ember.get(this, 'namespaces') || []).findBy('id', Ember.get(this, 'namespace'))) {
        Ember.set(this, 'namespace', Ember.get(this, 'namespaces.firstObject.id'));
      }
    })),
    getKialiUrl: function getKialiUrl() {
      var kialiPort = '-http:80';

      if (this.istio.useNewKialiUrl) {
        kialiPort = ':20001';
      }

      return "/k8s/clusters/".concat(Ember.get(this, 'scope.currentCluster.id'), "/api/v1/namespaces/istio-system/services/http:kiali").concat(kialiPort, "/proxy/console/graph/namespaces/?edges=noEdgeLabels&graphType=versionedApp&namespaces=").concat(Ember.get(this, 'namespace'), "&unusedNodes=true&injectServiceNodes=true&layout=dagre");
    },
    clearInterval: function (_clearInterval) {
      function clearInterval() {
        return _clearInterval.apply(this, arguments);
      }

      clearInterval.toString = function () {
        return _clearInterval.toString();
      };

      return clearInterval;
    }(function () {
      var intervalAnchor = Ember.get(this, 'intervalAnchor');

      if (intervalAnchor) {
        clearInterval(intervalAnchor);
        Ember.set(this, 'intervalAnchor', intervalAnchor);
      }
    })
  });

  _exports.default = _default;
});
define("istio/components/traffic-monitoring/template", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "TGcDFeCF",
    "block": "{\"symbols\":[],\"statements\":[[4,\"if\",[[24,[\"namespaces\",\"length\"]]],null,{\"statements\":[[0,\"  \"],[7,\"div\",true],[10,\"class\",\"row text-left mb-5\"],[8],[0,\"\\n    \"],[7,\"div\",true],[10,\"class\",\"pull-left pl-20 pt-0 mr-10\"],[8],[0,\"\\n      \"],[7,\"div\",true],[10,\"class\",\"inline-block\"],[8],[0,\"\\n        \"],[7,\"label\",true],[10,\"class\",\"acc-label\"],[8],[0,\"\\n          \"],[1,[28,\"t\",[\"generic.namespace\"],null],false],[0,\":\\n        \"],[9],[0,\"\\n        \"],[1,[28,\"new-select\",null,[[\"content\",\"classNames\",\"value\",\"optionValuePath\",\"optionLabelPath\"],[[24,[\"namespaces\"]],\"namespace-select text-black\",[24,[\"namespace\"]],\"id\",\"displayName\"]]],false],[0,\"\\n      \"],[9],[0,\"\\n      \"],[7,\"button\",false],[12,\"class\",\"btn btn-sm bg-default\"],[3,\"action\",[[23,0,[]],\"refreshGraph\"]],[8],[0,\"\\n        \"],[1,[28,\"t\",[\"istio.refreshGraph\"],null],false],[0,\"\\n      \"],[9],[0,\"\\n    \"],[9],[0,\"\\n  \"],[9],[0,\"\\n\"],[4,\"if\",[[24,[\"loading\"]]],null,{\"statements\":[[0,\"    \"],[7,\"div\",true],[10,\"class\",\"row mt-20\"],[8],[0,\"\\n      \"],[7,\"div\",true],[10,\"class\",\"text-center\"],[8],[0,\"\\n        \"],[7,\"i\",true],[10,\"class\",\"icon icon-spinner icon-spin icon-3x\"],[8],[9],[0,\"\\n      \"],[9],[0,\"\\n    \"],[9],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"  \"],[7,\"div\",true],[10,\"id\",\"kiali-div\"],[11,\"class\",[29,[[28,\"if\",[[24,[\"loading\"]],\"loading\"],null]]]],[8],[0,\"\\n    \"],[7,\"iframe\",true],[11,\"src\",[22,\"url\"]],[10,\"id\",\"kiali-iframe\"],[10,\"scrolling\",\"no\"],[8],[9],[0,\"\\n  \"],[9],[0,\"\\n\"],[4,\"unless\",[[24,[\"loading\"]]],null,{\"statements\":[[0,\"    \"],[7,\"div\",true],[10,\"class\",\"powered-by-kiali\"],[8],[0,\"\\n      \"],[1,[28,\"t\",[\"istio.kiali\"],null],false],[0,\"\\n      \"],[7,\"span\",true],[10,\"class\",\"pl-5 pull-right\"],[10,\"role\",\"button\"],[8],[0,\"\\n        \"],[7,\"a\",true],[10,\"href\",\"https://www.kiali.io/\"],[10,\"target\",\"_blank\"],[10,\"rel\",\"nofollow noopener noreferrer\"],[8],[0,\"\\n          \"],[7,\"div\",true],[10,\"class\",\"kiali\"],[8],[9],[0,\"\\n        \"],[9],[0,\"\\n      \"],[9],[0,\"\\n    \"],[9],[0,\"\\n\"]],\"parameters\":[]},null]],\"parameters\":[]},{\"statements\":[[0,\"  \"],[7,\"div\",true],[10,\"class\",\"mt-20\"],[8],[0,\"\\n    \"],[7,\"div\",true],[10,\"class\",\"text-center text-muted\"],[8],[0,\"\\n      \"],[1,[28,\"t\",[\"istio.noData\"],null],false],[0,\"\\n    \"],[9],[0,\"\\n  \"],[9],[0,\"\\n\"]],\"parameters\":[]}]],\"hasEval\":false}",
    "meta": {
      "moduleName": "istio/components/traffic-monitoring/template.hbs"
    }
  });

  _exports.default = _default;
});
define("istio/components/traffic-policy-tls/component", ["exports", "istio/components/traffic-policy-tls/template"], function (_exports, _template) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var NONE = 'NONE';
  var ISTIO_MUTUAL = 'ISTIO_MUTUAL';
  var DISABLE = 'DISABLE';
  var SIMPLE = 'SIMPLE';
  var MUTUAL = 'MUTUAL';

  var _default = Ember.Component.extend({
    intl: Ember.inject.service(),
    layout: _template.default,
    tlsMode: NONE,
    trafficPolicy: null,
    errors: null,
    model: Ember.computed.alias('trafficPolicy.tls'),
    init: function init() {
      this._super.apply(this, arguments);

      this.initTls();
    },
    actions: {
      setSubjectAltNames: function setSubjectAltNames(subjectAltNames) {
        Ember.set(this, 'model.subjectAltNames', subjectAltNames);
      }
    },
    tlsModeDidChange: Ember.observer('tlsMode', function () {
      var tlsMode = Ember.get(this, 'tlsMode');
      var trafficPolicy = Ember.get(this, 'trafficPolicy');

      if (tlsMode === NONE) {
        delete trafficPolicy['tls'];
      } else if (tlsMode === ISTIO_MUTUAL) {
        Ember.set(this, 'model', {
          mode: ISTIO_MUTUAL
        });
      } else if (tlsMode === DISABLE) {
        Ember.set(this, 'model', {
          mode: DISABLE
        });
      } else if (tlsMode === SIMPLE) {
        var out = {
          mode: SIMPLE
        };

        if (Ember.get(this, 'model.caCertificates')) {
          Ember.set(out, 'caCertificates', Ember.get(this, 'model.caCertificates'));
        }

        if (Ember.get(this, 'model.sni')) {
          Ember.set(out, 'sni', Ember.get(this, 'model.sni'));
        }

        if (Ember.get(this, 'model.subjectAltNames.length') > 0) {
          Ember.set(out, 'subjectAltNames', Ember.get(this, 'model.subjectAltNames'));
        }

        Ember.set(this, 'model', out);
      } else if (tlsMode === MUTUAL) {
        var _out = {
          mode: MUTUAL
        };

        if (Ember.get(this, 'model.clientCertificate')) {
          Ember.set(_out, 'clientCertificate', Ember.get(this, 'model.clientCertificate'));
        }

        if (Ember.get(this, 'model.privateKey')) {
          Ember.set(_out, 'privateKey', Ember.get(this, 'model.privateKey'));
        }

        if (Ember.get(this, 'model.caCertificates')) {
          Ember.set(_out, 'caCertificates', Ember.get(this, 'model.caCertificates'));
        }

        if (Ember.get(this, 'model.sni')) {
          Ember.set(_out, 'sni', Ember.get(this, 'model.sni'));
        }

        if (Ember.get(this, 'model.subjectAltNames.length') > 0) {
          Ember.set(_out, 'subjectAltNames', Ember.get(this, 'model.subjectAltNames'));
        }

        Ember.set(this, 'model', _out);
      }
    }),
    validate: Ember.observer('tlsMode', 'model.clientCertificate', 'model.privateKey', function () {
      var errors = [];

      if (Ember.get(this, 'tlsMode') === MUTUAL) {
        if (!Ember.get(this, 'model.clientCertificate')) {
          errors.push(Ember.get(this, 'intl').t('cruDestinationRule.tls.clientCertificate.error'));
        }

        if (!Ember.get(this, 'model.privateKey')) {
          errors.push(Ember.get(this, 'intl').t('cruDestinationRule.tls.privateKey.error'));
        }
      }

      Ember.set(this, 'errors', errors);
    }),
    initTls: function initTls() {
      if (!Ember.get(this, 'model') || !Ember.get(this, 'model.mode')) {
        Ember.set(this, 'tlsMode', NONE);
      } else {
        Ember.set(this, 'tlsMode', Ember.get(this, 'model.mode'));
      }
    }
  });

  _exports.default = _default;
});
define("istio/components/traffic-policy-tls/template", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "E/vGuSb9",
    "block": "{\"symbols\":[\"c\",\"row\"],\"statements\":[[7,\"div\",true],[10,\"class\",\"row\"],[8],[0,\"\\n  \"],[7,\"div\",true],[10,\"class\",\"col span-12\"],[8],[0,\"\\n    \"],[7,\"label\",true],[10,\"class\",\"acc-label\"],[8],[0,\"\\n      \"],[1,[28,\"t\",[\"cruDestinationRule.tls.mode.label\"],null],false],[0,\"\\n    \"],[9],[0,\"\\n\"],[4,\"input-or-display\",null,[[\"editable\",\"value\"],[[24,[\"editing\"]],[24,[\"tlsMode\"]]]],{\"statements\":[[0,\"      \"],[7,\"div\",true],[10,\"class\",\"radio\"],[8],[0,\"\\n        \"],[7,\"label\",true],[8],[0,\"\\n          \"],[1,[28,\"radio-button\",null,[[\"selection\",\"value\"],[[24,[\"tlsMode\"]],\"NONE\"]]],false],[0,\" \"],[1,[28,\"t\",[\"cruDestinationRule.tls.mode.none.label\"],null],false],[0,\"\\n        \"],[9],[0,\"\\n      \"],[9],[0,\"\\n      \"],[7,\"div\",true],[10,\"class\",\"radio\"],[8],[0,\"\\n        \"],[7,\"label\",true],[8],[0,\"\\n          \"],[1,[28,\"radio-button\",null,[[\"selection\",\"value\"],[[24,[\"tlsMode\"]],\"ISTIO_MUTUAL\"]]],false],[0,\" \"],[1,[28,\"t\",[\"cruDestinationRule.tls.mode.istio.label\"],null],false],[0,\"\\n        \"],[9],[0,\"\\n      \"],[9],[0,\"\\n      \"],[7,\"div\",true],[10,\"class\",\"radio\"],[8],[0,\"\\n        \"],[7,\"label\",true],[8],[0,\"\\n          \"],[1,[28,\"radio-button\",null,[[\"selection\",\"value\"],[[24,[\"tlsMode\"]],\"DISABLE\"]]],false],[0,\" \"],[1,[28,\"t\",[\"cruDestinationRule.tls.mode.disable.label\"],null],false],[0,\"\\n        \"],[9],[0,\"\\n      \"],[9],[0,\"\\n      \"],[7,\"div\",true],[10,\"class\",\"radio\"],[8],[0,\"\\n        \"],[7,\"label\",true],[8],[0,\"\\n          \"],[1,[28,\"radio-button\",null,[[\"selection\",\"value\"],[[24,[\"tlsMode\"]],\"SIMPLE\"]]],false],[0,\" \"],[1,[28,\"t\",[\"cruDestinationRule.tls.mode.simple.label\"],null],false],[0,\"\\n        \"],[9],[0,\"\\n      \"],[9],[0,\"\\n      \"],[7,\"div\",true],[10,\"class\",\"radio\"],[8],[0,\"\\n        \"],[7,\"label\",true],[8],[0,\"\\n          \"],[1,[28,\"radio-button\",null,[[\"selection\",\"value\"],[[24,[\"tlsMode\"]],\"MUTUAL\"]]],false],[0,\" \"],[1,[28,\"t\",[\"cruDestinationRule.tls.mode.mutual.label\"],null],false],[0,\"\\n        \"],[9],[0,\"\\n      \"],[9],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"  \"],[9],[0,\"\\n\"],[9],[0,\"\\n\\n\"],[4,\"if\",[[28,\"eq\",[[24,[\"tlsMode\"]],\"MUTUAL\"],null]],null,{\"statements\":[[0,\"  \"],[7,\"div\",true],[10,\"class\",\"row\"],[8],[0,\"\\n    \"],[7,\"div\",true],[10,\"class\",\"col span-6 box\"],[8],[0,\"\\n      \"],[7,\"label\",true],[10,\"class\",\"acc-label\"],[11,\"for\",[29,[[28,\"concat\",[[24,[\"elementId\"]],\"-input-clientCertificate\"],null]]]],[8],[0,\"\\n        \"],[1,[28,\"t\",[\"cruDestinationRule.tls.clientCertificate.label\"],null],false],[0,\"\\n\"],[4,\"if\",[[24,[\"editing\"]]],null,{\"statements\":[[0,\"          \"],[1,[22,\"field-required\"],false],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"      \"],[9],[0,\"\\n\"],[4,\"input-or-display\",null,[[\"editable\",\"value\"],[[24,[\"editing\"]],[24,[\"model\",\"clientCertificate\"]]]],{\"statements\":[[0,\"        \"],[1,[28,\"input\",null,[[\"type\",\"value\",\"id\",\"placeholder\"],[\"text\",[24,[\"model\",\"clientCertificate\"]],[28,\"concat\",[[24,[\"elementId\"]],\"-input-clientCertificate\"],null],[28,\"t\",[\"cruDestinationRule.tls.clientCertificate.placeholder\"],null]]]],false],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"    \"],[9],[0,\"\\n\\n    \"],[7,\"div\",true],[10,\"class\",\"col span-6 box\"],[8],[0,\"\\n      \"],[7,\"label\",true],[10,\"class\",\"acc-label\"],[11,\"for\",[29,[[28,\"concat\",[[24,[\"elementId\"]],\"-input-privateKey\"],null]]]],[8],[0,\"\\n        \"],[1,[28,\"t\",[\"cruDestinationRule.tls.privateKey.label\"],null],false],[0,\"\\n\"],[4,\"if\",[[24,[\"editing\"]]],null,{\"statements\":[[0,\"          \"],[1,[22,\"field-required\"],false],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"      \"],[9],[0,\"\\n\"],[4,\"input-or-display\",null,[[\"editable\",\"value\"],[[24,[\"editing\"]],[24,[\"model\",\"privateKey\"]]]],{\"statements\":[[0,\"        \"],[1,[28,\"input\",null,[[\"type\",\"value\",\"id\",\"placeholder\"],[\"text\",[24,[\"model\",\"privateKey\"]],[28,\"concat\",[[24,[\"elementId\"]],\"-input-privateKey\"],null],[28,\"t\",[\"cruDestinationRule.tls.privateKey.placeholder\"],null]]]],false],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"    \"],[9],[0,\"\\n  \"],[9],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"\\n\"],[4,\"if\",[[28,\"or\",[[28,\"eq\",[[24,[\"tlsMode\"]],\"SIMPLE\"],null],[28,\"eq\",[[24,[\"tlsMode\"]],\"MUTUAL\"],null]],null]],null,{\"statements\":[[0,\"  \"],[7,\"div\",true],[10,\"class\",\"row\"],[8],[0,\"\\n    \"],[7,\"div\",true],[10,\"class\",\"col span-6 box\"],[8],[0,\"\\n      \"],[7,\"label\",true],[10,\"class\",\"acc-label\"],[11,\"for\",[29,[[28,\"concat\",[[24,[\"elementId\"]],\"-input-caCertificates\"],null]]]],[8],[0,\"\\n        \"],[1,[28,\"t\",[\"cruDestinationRule.tls.caCertificates.label\"],null],false],[0,\"\\n      \"],[9],[0,\"\\n\"],[4,\"input-or-display\",null,[[\"editable\",\"value\"],[[24,[\"editing\"]],[24,[\"model\",\"caCertificates\"]]]],{\"statements\":[[0,\"        \"],[1,[28,\"input\",null,[[\"type\",\"value\",\"id\",\"placeholder\"],[\"text\",[24,[\"model\",\"caCertificates\"]],[28,\"concat\",[[24,[\"elementId\"]],\"-input-caCertificates\"],null],[28,\"t\",[\"cruDestinationRule.tls.caCertificates.placeholder\"],null]]]],false],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"    \"],[9],[0,\"\\n\\n    \"],[7,\"div\",true],[10,\"class\",\"col span-6 box\"],[8],[0,\"\\n      \"],[7,\"label\",true],[10,\"class\",\"acc-label\"],[11,\"for\",[29,[[28,\"concat\",[[24,[\"elementId\"]],\"-input-sni\"],null]]]],[8],[0,\"\\n        \"],[1,[28,\"t\",[\"cruDestinationRule.tls.sni.label\"],null],false],[0,\"\\n      \"],[9],[0,\"\\n\"],[4,\"input-or-display\",null,[[\"editable\",\"value\"],[[24,[\"editing\"]],[24,[\"model\",\"sni\"]]]],{\"statements\":[[0,\"        \"],[1,[28,\"input\",null,[[\"type\",\"value\",\"id\",\"placeholder\"],[\"text\",[24,[\"model\",\"sni\"]],[28,\"concat\",[[24,[\"elementId\"]],\"-input-sni\"],null],[28,\"t\",[\"cruDestinationRule.tls.sni.placeholder\"],null]]]],false],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"    \"],[9],[0,\"\\n  \"],[9],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"\\n\"],[4,\"if\",[[28,\"or\",[[28,\"eq\",[[24,[\"tlsMode\"]],\"SIMPLE\"],null],[28,\"eq\",[[24,[\"tlsMode\"]],\"MUTUAL\"],null]],null]],null,{\"statements\":[[0,\"  \"],[7,\"div\",true],[10,\"class\",\"row\"],[8],[0,\"\\n    \"],[7,\"div\",true],[10,\"class\",\"col span-12 box\"],[8],[0,\"\\n\"],[4,\"form-value-array\",null,[[\"editing\",\"valueLabel\",\"addActionLabel\",\"changed\",\"addButtonClass\",\"initialValues\",\"showProTip\"],[[24,[\"editing\"]],\"cruDestinationRule.tls.subjectAltNames.label\",\"cruDestinationRule.tls.subjectAltNames.add\",[28,\"action\",[[23,0,[]],\"setSubjectAltNames\"],null],\"btn bg-link icon-btn\",[24,[\"model\",\"subjectAltNames\"]],false]],{\"statements\":[[4,\"input-or-display\",null,[[\"editable\",\"value\"],[[24,[\"editing\"]],[23,2,[\"value\"]]]],{\"statements\":[[0,\"          \"],[1,[28,\"input\",null,[[\"class\",\"type\",\"value\",\"placeholder\"],[\"form-control input-sm\",\"text\",[23,2,[\"value\"]],[28,\"t\",[\"cruDestinationRule.tls.subjectAltNames.placeholder\"],null]]]],false],[0,\"\\n\"]],\"parameters\":[]},null]],\"parameters\":[1,2]},null],[0,\"    \"],[9],[0,\"\\n  \"],[9],[0,\"\\n\"]],\"parameters\":[]},null]],\"hasEval\":false}",
    "meta": {
      "moduleName": "istio/components/traffic-policy-tls/template.hbs"
    }
  });

  _exports.default = _default;
});
define.alias("shared/components/upgrade-btn/component", "istio/components/upgrade-btn/component");
define.alias("shared/components/used-percent-gauge/component", "istio/components/used-percent-gauge/component");
define("istio/components/virtual-service-http-route-row/component", ["exports", "istio/components/virtual-service-http-route-row/template"], function (_exports, _template) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Component.extend({
    layout: _template.default,
    editing: true,
    route: null,
    showMatch: false,
    httpRouteDestinations: Ember.computed.alias('route.route'),
    init: function init() {
      this._super.apply(this, arguments);

      this.initRoute();
    },
    actions: {
      removeRoute: function removeRoute(route) {
        if (this.removeRoute) {
          this.removeRoute(route);
        }
      },
      moveUpRoute: function moveUpRoute(route) {
        var routes = Ember.get(this, 'routes');

        if (routes) {
          var index = routes.indexOf(route);
          routes.removeObject(route);
          routes.insertAt(index - 1, route);
        }
      },
      moveDownRoute: function moveDownRoute(route) {
        var routes = Ember.get(this, 'routes');

        if (routes) {
          var index = routes.indexOf(route);
          routes.removeObject(route);
          routes.insertAt(index + 1, route);
        }
      },
      addMatch: function addMatch() {
        var match = Ember.Object.create({});
        Ember.get(this, 'route.match').pushObject(match);
      },
      removeMatch: function removeMatch(match) {
        Ember.get(this, 'route.match').removeObject(match);

        if (Ember.get(this, 'route.match.length') === 0 && Ember.get(this, 'showMatch')) {
          Ember.set(this, 'showMatch', false);
        }
      }
    },
    showMatchDidChange: Ember.observer('showMatch', function () {
      var showMatch = Ember.get(this, 'showMatch');

      if (showMatch) {
        if (!Ember.get(this, 'route.match')) {
          Ember.set(this, 'route.match', []);
        }

        if (Ember.get(this, 'route.match.length') === 0) {
          this.send('addMatch');
        }

        var routes = Ember.get(this, 'routes');

        if (routes) {
          routes.removeObject(Ember.get(this, 'route'));
          routes.unshiftObject(Ember.get(this, 'route'));
        }
      } else {
        var route = Ember.get(this, 'route');
        delete route['match'];
      }
    }),
    initRoute: function initRoute() {
      if (Ember.get(this, 'route.match.length') > 0) {
        Ember.set(this, 'showMatch', true);
      }

      if (!Ember.get(this, 'httpRouteDestinations')) {
        Ember.set(this, 'route.route', []);
      }

      var route = Ember.get(this, 'route');

      if (!Ember.get(route, 'fault')) {
        Ember.set(route, 'fault', {
          abort: {},
          delay: {}
        });
      } else if (!Ember.get(route, 'fault.abort')) {
        Ember.set(route, 'fault.abort', {});
      } else if (!Ember.get(route, 'fault.delay')) {
        Ember.set(route, 'fault.delay', {});
      }

      if (!Ember.get(route, 'redirect')) {
        Ember.set(route, 'redirect', {});
      }

      if (!Ember.get(route, 'rewrite')) {
        Ember.set(route, 'rewrite', {});
      }

      if (!Ember.get(route, 'mirror')) {
        Ember.set(route, 'mirror', {});
      }

      if (!Ember.get(route, 'retries')) {
        Ember.set(route, 'retries', {});
      }
    }
  });

  _exports.default = _default;
});
define("istio/components/virtual-service-http-route-row/template", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "PrBH03K5",
    "block": "{\"symbols\":[\"match\"],\"statements\":[[7,\"div\",true],[10,\"class\",\"box mb-10\"],[8],[0,\"\\n\"],[4,\"if\",[[28,\"and\",[[24,[\"editing\"]]],null]],null,{\"statements\":[[0,\"    \"],[7,\"div\",true],[10,\"class\",\"row\"],[8],[0,\"\\n      \"],[7,\"div\",true],[10,\"class\",\"pull-right\"],[8],[0,\"\\n        \"],[7,\"button\",false],[12,\"class\",\"btn bg-transparent text-small vertical-middle\"],[3,\"action\",[[23,0,[]],\"removeRoute\",[24,[\"route\"]]]],[8],[0,\"\\n          \"],[1,[28,\"t\",[\"cruVirtualService.http.routes.removeRouteLabel\"],null],false],[0,\"\\n        \"],[9],[0,\"\\n      \"],[9],[0,\"\\n\\n\"],[4,\"unless\",[[24,[\"isFirst\"]]],null,{\"statements\":[[0,\"        \"],[7,\"div\",true],[10,\"class\",\"pull-right\"],[8],[0,\"\\n          \"],[7,\"button\",false],[12,\"class\",\"btn bg-transparent text-small vertical-middle\"],[3,\"action\",[[23,0,[]],\"moveUpRoute\",[24,[\"route\"]]]],[8],[0,\"\\n            \"],[1,[28,\"t\",[\"cruVirtualService.http.routes.moveUp\"],null],false],[0,\"\\n          \"],[9],[0,\"\\n        \"],[9],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"\\n\"],[4,\"unless\",[[24,[\"isLast\"]]],null,{\"statements\":[[0,\"        \"],[7,\"div\",true],[10,\"class\",\"pull-right\"],[8],[0,\"\\n          \"],[7,\"button\",false],[12,\"class\",\"btn bg-transparent text-small vertical-middle\"],[3,\"action\",[[23,0,[]],\"moveDownRoute\",[24,[\"route\"]]]],[8],[0,\"\\n            \"],[1,[28,\"t\",[\"cruVirtualService.http.routes.moveDown\"],null],false],[0,\"\\n          \"],[9],[0,\"\\n        \"],[9],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"    \"],[9],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"\\n  \"],[7,\"div\",true],[10,\"class\",\"checkbox pt-10\"],[8],[0,\"\\n\"],[4,\"if\",[[24,[\"editing\"]]],null,{\"statements\":[[0,\"      \"],[7,\"label\",true],[10,\"class\",\"no-select\"],[8],[0,\"\\n        \"],[1,[28,\"input\",null,[[\"type\",\"checked\"],[\"checkbox\",[24,[\"showMatch\"]]]]],false],[0,\"\\n        \"],[1,[28,\"t\",[\"cruVirtualService.http.routes.matches.showMatch\"],null],false],[0,\"\\n      \"],[9],[0,\"\\n\"]],\"parameters\":[]},null],[4,\"if\",[[28,\"and\",[[24,[\"editing\"]],[24,[\"showMatch\"]]],null]],null,{\"statements\":[[0,\"      \"],[7,\"div\",true],[10,\"class\",\"inline-block\"],[8],[0,\"\\n        \"],[7,\"button\",false],[12,\"class\",\"pt-0 pb-0 btn bg-transparent text-small vertical-middle\"],[3,\"action\",[[23,0,[]],\"addMatch\"]],[8],[0,\"\\n          \"],[1,[28,\"t\",[\"cruVirtualService.http.routes.matches.addLabel\"],null],false],[0,\"\\n        \"],[9],[0,\"\\n      \"],[9],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"  \"],[9],[0,\"\\n\\n\"],[4,\"if\",[[24,[\"showMatch\"]]],null,{\"statements\":[[4,\"each\",[[24,[\"route\",\"match\"]]],null,{\"statements\":[[0,\"      \"],[1,[28,\"http-route-match\",null,[[\"model\",\"editing\",\"removeMatch\"],[[23,1,[]],[24,[\"editing\"]],[28,\"action\",[[23,0,[]],\"removeMatch\"],null]]]],false],[0,\"\\n\"]],\"parameters\":[1]},{\"statements\":[[0,\"      \"],[7,\"div\",true],[10,\"class\",\"row text-center mt-20 mb-20 pt-10\"],[8],[0,\"\\n        \"],[7,\"span\",true],[10,\"class\",\"text-muted\"],[8],[0,\"\\n          \"],[1,[28,\"t\",[\"cruVirtualService.http.routes.matches.noData\"],null],false],[0,\"\\n        \"],[9],[0,\"\\n      \"],[9],[0,\"\\n\"]],\"parameters\":[]}]],\"parameters\":[]},null],[0,\"\\n  \"],[1,[28,\"http-route-destination\",null,[[\"namespace\",\"httpRouteDestinations\",\"hosts\",\"route\",\"isNew\",\"editing\"],[[24,[\"namespace\"]],[24,[\"httpRouteDestinations\"]],[24,[\"hosts\"]],[24,[\"route\"]],[24,[\"isNew\"]],[24,[\"editing\"]]]]],false],[0,\"\\n\\n\"],[4,\"advanced-section\",null,[[\"advanced\"],[[24,[\"advanced\"]]]],{\"statements\":[[0,\"    \"],[7,\"hr\",true],[10,\"class\",\"mt-20\"],[8],[9],[0,\"\\n\\n    \"],[7,\"label\",true],[10,\"class\",\"acc-label pb-5\"],[8],[0,\"\\n      \"],[7,\"span\",true],[10,\"class\",\"text-black\"],[8],[0,\"\\n        \"],[1,[28,\"t\",[\"cruVirtualService.http.routes.redirect.label\"],null],false],[0,\"\\n      \"],[9],[0,\"\\n    \"],[9],[0,\"\\n    \"],[7,\"div\",true],[10,\"class\",\"row\"],[8],[0,\"\\n      \"],[7,\"div\",true],[10,\"class\",\"col span-6\"],[8],[0,\"\\n        \"],[7,\"label\",true],[10,\"class\",\"acc-label\"],[11,\"for\",[29,[[28,\"concat\",[[24,[\"elementId\"]],\"-input-redirect-uri\"],null]]]],[8],[0,\"\\n          \"],[1,[28,\"t\",[\"cruVirtualService.http.routes.redirect.uri.label\"],null],false],[0,\"\\n        \"],[9],[0,\"\\n\"],[4,\"input-or-display\",null,[[\"editable\",\"value\"],[[24,[\"editing\"]],[24,[\"route\",\"redirect\",\"uri\"]]]],{\"statements\":[[0,\"          \"],[1,[28,\"input\",null,[[\"type\",\"id\",\"value\",\"classNames\",\"placeholder\"],[\"text\",[28,\"concat\",[[24,[\"elementId\"]],\"-input-redirect-uri\"],null],[24,[\"route\",\"redirect\",\"uri\"]],\"form-control\",[28,\"t\",[\"cruVirtualService.http.routes.redirect.uri.placeholder\"],null]]]],false],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"      \"],[9],[0,\"\\n      \"],[7,\"div\",true],[10,\"class\",\"col span-6\"],[8],[0,\"\\n        \"],[7,\"label\",true],[10,\"class\",\"acc-label\"],[11,\"for\",[29,[[28,\"concat\",[[24,[\"elementId\"]],\"-input-redirect-authority\"],null]]]],[8],[0,\"\\n          \"],[1,[28,\"t\",[\"cruVirtualService.http.routes.redirect.authority.label\"],null],false],[0,\"\\n        \"],[9],[0,\"\\n\"],[4,\"input-or-display\",null,[[\"editable\",\"value\"],[[24,[\"editing\"]],[24,[\"route\",\"redirect\",\"authority\"]]]],{\"statements\":[[0,\"          \"],[1,[28,\"input\",null,[[\"type\",\"id\",\"value\",\"classNames\",\"placeholder\"],[\"text\",[28,\"concat\",[[24,[\"elementId\"]],\"-input-redirect-authority\"],null],[24,[\"route\",\"redirect\",\"authority\"]],\"form-control\",[28,\"t\",[\"cruVirtualService.http.routes.redirect.authority.placeholder\"],null]]]],false],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"      \"],[9],[0,\"\\n    \"],[9],[0,\"\\n\\n    \"],[7,\"hr\",true],[10,\"class\",\"mt-20\"],[8],[9],[0,\"\\n\\n    \"],[7,\"label\",true],[10,\"class\",\"acc-label pb-5\"],[8],[0,\"\\n      \"],[7,\"span\",true],[10,\"class\",\"text-black\"],[8],[0,\"\\n        \"],[1,[28,\"t\",[\"cruVirtualService.http.routes.rewrite.label\"],null],false],[0,\"\\n      \"],[9],[0,\"\\n    \"],[9],[0,\"\\n    \"],[7,\"div\",true],[10,\"class\",\"row\"],[8],[0,\"\\n      \"],[7,\"div\",true],[10,\"class\",\"col span-6\"],[8],[0,\"\\n        \"],[7,\"label\",true],[10,\"class\",\"acc-label\"],[11,\"for\",[29,[[28,\"concat\",[[24,[\"elementId\"]],\"-input-rewrite-uri\"],null]]]],[8],[0,\"\\n          \"],[1,[28,\"t\",[\"cruVirtualService.http.routes.rewrite.uri.label\"],null],false],[0,\"\\n        \"],[9],[0,\"\\n\"],[4,\"input-or-display\",null,[[\"editable\",\"value\"],[[24,[\"editing\"]],[24,[\"route\",\"rewrite\",\"uri\"]]]],{\"statements\":[[0,\"          \"],[1,[28,\"input\",null,[[\"type\",\"id\",\"value\",\"classNames\",\"placeholder\"],[\"text\",[28,\"concat\",[[24,[\"elementId\"]],\"-input-rewrite-uri\"],null],[24,[\"route\",\"rewrite\",\"uri\"]],\"form-control\",[28,\"t\",[\"cruVirtualService.http.routes.rewrite.uri.placeholder\"],null]]]],false],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"      \"],[9],[0,\"\\n      \"],[7,\"div\",true],[10,\"class\",\"col span-6\"],[8],[0,\"\\n        \"],[7,\"label\",true],[10,\"class\",\"acc-label\"],[11,\"for\",[29,[[28,\"concat\",[[24,[\"elementId\"]],\"-input-rewrite-authority\"],null]]]],[8],[0,\"\\n          \"],[1,[28,\"t\",[\"cruVirtualService.http.routes.rewrite.authority.label\"],null],false],[0,\"\\n        \"],[9],[0,\"\\n\"],[4,\"input-or-display\",null,[[\"editable\",\"value\"],[[24,[\"editing\"]],[24,[\"route\",\"rewrite\",\"authority\"]]]],{\"statements\":[[0,\"          \"],[1,[28,\"input\",null,[[\"type\",\"id\",\"value\",\"classNames\",\"placeholder\"],[\"text\",[28,\"concat\",[[24,[\"elementId\"]],\"-input-rewrite-authority\"],null],[24,[\"route\",\"rewrite\",\"authority\"]],\"form-control\",[28,\"t\",[\"cruVirtualService.http.routes.rewrite.authority.placeholder\"],null]]]],false],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"      \"],[9],[0,\"\\n    \"],[9],[0,\"\\n\\n    \"],[7,\"hr\",true],[10,\"class\",\"mt-20\"],[8],[9],[0,\"\\n\\n    \"],[7,\"label\",true],[10,\"class\",\"acc-label pb-5\"],[8],[0,\"\\n      \"],[7,\"span\",true],[10,\"class\",\"text-black\"],[8],[0,\"\\n        \"],[1,[28,\"t\",[\"cruVirtualService.http.routes.timeout.label\"],null],false],[0,\"\\n      \"],[9],[0,\"\\n    \"],[9],[0,\"\\n    \"],[7,\"div\",true],[10,\"class\",\"row\"],[8],[0,\"\\n      \"],[7,\"div\",true],[10,\"class\",\"col span-6\"],[8],[0,\"\\n        \"],[7,\"label\",true],[10,\"class\",\"acc-label\"],[11,\"for\",[29,[[28,\"concat\",[[24,[\"elementId\"]],\"-input-timeout\"],null]]]],[8],[0,\"\\n          \"],[1,[28,\"t\",[\"cruVirtualService.http.routes.timeout.label\"],null],false],[0,\"\\n        \"],[9],[0,\"\\n\"],[4,\"input-or-display\",null,[[\"editable\",\"value\"],[[24,[\"editing\"]],[24,[\"route\",\"timeout\"]]]],{\"statements\":[[0,\"          \"],[1,[28,\"input\",null,[[\"type\",\"id\",\"value\",\"classNames\",\"placeholder\"],[\"text\",[28,\"concat\",[[24,[\"elementId\"]],\"-input-timeout\"],null],[24,[\"route\",\"timeout\"]],\"form-control\",[28,\"t\",[\"cruVirtualService.http.routes.timeout.placeholder\"],null]]]],false],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"      \"],[9],[0,\"\\n    \"],[9],[0,\"\\n\\n    \"],[7,\"hr\",true],[10,\"class\",\"mt-20\"],[8],[9],[0,\"\\n\\n    \"],[7,\"label\",true],[10,\"class\",\"acc-label pb-5\"],[8],[0,\"\\n      \"],[7,\"span\",true],[10,\"class\",\"text-black\"],[8],[0,\"\\n        \"],[1,[28,\"t\",[\"cruVirtualService.http.routes.retries.label\"],null],false],[0,\"\\n      \"],[9],[0,\"\\n    \"],[9],[0,\"\\n    \"],[7,\"div\",true],[10,\"class\",\"row\"],[8],[0,\"\\n      \"],[7,\"div\",true],[10,\"class\",\"col span-6\"],[8],[0,\"\\n        \"],[7,\"label\",true],[10,\"class\",\"acc-label\"],[11,\"for\",[29,[[28,\"concat\",[[24,[\"elementId\"]],\"-input-retries-attempts\"],null]]]],[8],[0,\"\\n          \"],[1,[28,\"t\",[\"cruVirtualService.http.routes.retries.attempts.label\"],null],false],[0,\"\\n        \"],[9],[0,\"\\n\"],[4,\"input-or-display\",null,[[\"editable\",\"value\"],[[24,[\"editing\"]],[24,[\"route\",\"retries\",\"attempts\"]]]],{\"statements\":[[0,\"          \"],[1,[28,\"input-integer\",null,[[\"min\",\"id\",\"value\",\"classNames\",\"placeholder\"],[0,[28,\"concat\",[[24,[\"elementId\"]],\"-input-retries-attempts\"],null],[24,[\"route\",\"retries\",\"attempts\"]],\"form-control\",[28,\"t\",[\"cruVirtualService.http.routes.retries.attempts.placeholder\"],null]]]],false],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"      \"],[9],[0,\"\\n      \"],[7,\"div\",true],[10,\"class\",\"col span-6\"],[8],[0,\"\\n        \"],[7,\"label\",true],[10,\"class\",\"acc-label\"],[11,\"for\",[29,[[28,\"concat\",[[24,[\"elementId\"]],\"-input-retries-perTryTimeout\"],null]]]],[8],[0,\"\\n          \"],[1,[28,\"t\",[\"cruVirtualService.http.routes.retries.perTryTimeout.label\"],null],false],[0,\"\\n        \"],[9],[0,\"\\n\"],[4,\"input-or-display\",null,[[\"editable\",\"value\"],[[24,[\"editing\"]],[24,[\"route\",\"retries\",\"perTryTimeout\"]]]],{\"statements\":[[0,\"          \"],[1,[28,\"input\",null,[[\"type\",\"id\",\"value\",\"classNames\",\"placeholder\"],[\"text\",[28,\"concat\",[[24,[\"elementId\"]],\"-input-retries-perTryTimeout\"],null],[24,[\"route\",\"retries\",\"perTryTimeout\"]],\"form-control\",[28,\"t\",[\"cruVirtualService.http.routes.retries.perTryTimeout.placeholder\"],null]]]],false],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"      \"],[9],[0,\"\\n    \"],[9],[0,\"\\n\\n    \"],[7,\"hr\",true],[10,\"class\",\"mt-20\"],[8],[9],[0,\"\\n\\n    \"],[7,\"label\",true],[10,\"class\",\"acc-label pb-5\"],[8],[0,\"\\n      \"],[7,\"span\",true],[10,\"class\",\"text-black\"],[8],[0,\"\\n        \"],[1,[28,\"t\",[\"cruVirtualService.http.routes.faultInjection.abort.label\"],null],false],[0,\"\\n      \"],[9],[0,\"\\n    \"],[9],[0,\"\\n    \"],[7,\"div\",true],[10,\"class\",\"row\"],[8],[0,\"\\n      \"],[7,\"div\",true],[10,\"class\",\"col span-6\"],[8],[0,\"\\n        \"],[7,\"label\",true],[10,\"class\",\"acc-label\"],[11,\"for\",[29,[[28,\"concat\",[[24,[\"elementId\"]],\"-input-faultInjection-abort-httpStatus\"],null]]]],[8],[0,\"\\n          \"],[1,[28,\"t\",[\"cruVirtualService.http.routes.faultInjection.abort.httpStatus.label\"],null],false],[0,\"\\n        \"],[9],[0,\"\\n\"],[4,\"input-or-display\",null,[[\"editable\",\"value\"],[[24,[\"editing\"]],[24,[\"route\",\"fault\",\"abort\",\"httpStatus\"]]]],{\"statements\":[[0,\"          \"],[1,[28,\"input-integer\",null,[[\"id\",\"value\",\"classNames\",\"placeholder\"],[[28,\"concat\",[[24,[\"elementId\"]],\"-input-faultInjection-abort-httpStatus\"],null],[24,[\"route\",\"fault\",\"abort\",\"httpStatus\"]],\"form-control\",[28,\"t\",[\"cruVirtualService.http.routes.faultInjection.abort.httpStatus.placeholder\"],null]]]],false],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"      \"],[9],[0,\"\\n      \"],[7,\"div\",true],[10,\"class\",\"col span-6\"],[8],[0,\"\\n        \"],[7,\"label\",true],[10,\"class\",\"acc-label\"],[11,\"for\",[29,[[28,\"concat\",[[24,[\"elementId\"]],\"-input-faultInjection-abort-percent\"],null]]]],[8],[0,\"\\n          \"],[1,[28,\"t\",[\"cruVirtualService.http.routes.faultInjection.abort.percent.label\"],null],false],[0,\"\\n        \"],[9],[0,\"\\n\"],[4,\"input-or-display\",null,[[\"editable\",\"value\"],[[24,[\"editing\"]],[24,[\"route\",\"fault\",\"abort\",\"percent\"]]]],{\"statements\":[[0,\"          \"],[7,\"div\",true],[10,\"class\",\"input-group\"],[8],[0,\"\\n            \"],[1,[28,\"input-integer\",null,[[\"classNames\",\"min\",\"max\",\"id\",\"value\",\"placeholder\"],[\"form-control\",\"0\",\"100\",[28,\"concat\",[[24,[\"elementId\"]],\"-input-faultInjection-abort-percent\"],null],[24,[\"route\",\"fault\",\"abort\",\"percent\"]],[28,\"t\",[\"cruVirtualService.http.routes.faultInjection.abort.percent.placeholder\"],null]]]],false],[0,\"\\n            \"],[7,\"div\",true],[10,\"class\",\"input-group-addon bg-default\"],[8],[0,\"\\n              %\\n            \"],[9],[0,\"\\n          \"],[9],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"      \"],[9],[0,\"\\n    \"],[9],[0,\"\\n\\n    \"],[7,\"hr\",true],[10,\"class\",\"mt-20\"],[8],[9],[0,\"\\n\\n    \"],[7,\"label\",true],[10,\"class\",\"acc-label pb-5\"],[8],[0,\"\\n      \"],[7,\"span\",true],[10,\"class\",\"text-black\"],[8],[0,\"\\n        \"],[1,[28,\"t\",[\"cruVirtualService.http.routes.faultInjection.delay.label\"],null],false],[0,\"\\n      \"],[9],[0,\"\\n    \"],[9],[0,\"\\n    \"],[7,\"div\",true],[10,\"class\",\"row\"],[8],[0,\"\\n      \"],[7,\"div\",true],[10,\"class\",\"col span-6\"],[8],[0,\"\\n        \"],[7,\"label\",true],[10,\"class\",\"acc-label\"],[11,\"for\",[29,[[28,\"concat\",[[24,[\"elementId\"]],\"-input-faultInjection-delay-fixedDelay\"],null]]]],[8],[0,\"\\n          \"],[1,[28,\"t\",[\"cruVirtualService.http.routes.faultInjection.delay.fixedDelay.label\"],null],false],[0,\"\\n        \"],[9],[0,\"\\n\"],[4,\"input-or-display\",null,[[\"editable\",\"value\"],[[24,[\"editing\"]],[24,[\"route\",\"fault\",\"delay\",\"fixedDelay\"]]]],{\"statements\":[[0,\"          \"],[1,[28,\"input\",null,[[\"type\",\"id\",\"value\",\"classNames\",\"placeholder\"],[\"text\",[28,\"concat\",[[24,[\"elementId\"]],\"-input-faultInjection-delay-fixedDelay\"],null],[24,[\"route\",\"fault\",\"delay\",\"fixedDelay\"]],\"form-control\",[28,\"t\",[\"cruVirtualService.http.routes.faultInjection.delay.fixedDelay.placeholder\"],null]]]],false],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"      \"],[9],[0,\"\\n      \"],[7,\"div\",true],[10,\"class\",\"col span-6\"],[8],[0,\"\\n        \"],[7,\"label\",true],[10,\"class\",\"acc-label\"],[11,\"for\",[29,[[28,\"concat\",[[24,[\"elementId\"]],\"-input-faultInjection-delay-percent\"],null]]]],[8],[0,\"\\n          \"],[1,[28,\"t\",[\"cruVirtualService.http.routes.faultInjection.delay.percent.label\"],null],false],[0,\"\\n        \"],[9],[0,\"\\n\"],[4,\"input-or-display\",null,[[\"editable\",\"value\"],[[24,[\"editing\"]],[24,[\"route\",\"fault\",\"delay\",\"percent\"]]]],{\"statements\":[[0,\"          \"],[7,\"div\",true],[10,\"class\",\"input-group\"],[8],[0,\"\\n            \"],[1,[28,\"input-integer\",null,[[\"classNames\",\"min\",\"max\",\"id\",\"value\",\"placeholder\"],[\"form-control\",\"0\",\"100\",[28,\"concat\",[[24,[\"elementId\"]],\"-input-faultInjection-delay-percent\"],null],[24,[\"route\",\"fault\",\"delay\",\"percent\"]],[28,\"t\",[\"cruVirtualService.http.routes.faultInjection.delay.percent.placeholder\"],null]]]],false],[0,\"\\n            \"],[7,\"div\",true],[10,\"class\",\"input-group-addon bg-default\"],[8],[0,\"\\n              %\\n            \"],[9],[0,\"\\n          \"],[9],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"      \"],[9],[0,\"\\n    \"],[9],[0,\"\\n\\n    \"],[7,\"hr\",true],[10,\"class\",\"mt-20\"],[8],[9],[0,\"\\n\\n    \"],[7,\"label\",true],[10,\"class\",\"acc-label pb-5\"],[8],[0,\"\\n      \"],[7,\"span\",true],[10,\"class\",\"text-black\"],[8],[0,\"\\n        \"],[1,[28,\"t\",[\"cruVirtualService.http.routes.mirror.label\"],null],false],[0,\"\\n      \"],[9],[0,\"\\n    \"],[9],[0,\"\\n    \"],[7,\"div\",true],[10,\"class\",\"row\"],[8],[0,\"\\n      \"],[7,\"div\",true],[10,\"class\",\"col span-6\"],[8],[0,\"\\n        \"],[7,\"label\",true],[10,\"class\",\"acc-label\"],[11,\"for\",[29,[[28,\"concat\",[[24,[\"elementId\"]],\"-input-mirror-host\"],null]]]],[8],[0,\"\\n          \"],[1,[28,\"t\",[\"cruVirtualService.http.routes.mirror.host.label\"],null],false],[0,\"\\n        \"],[9],[0,\"\\n\"],[4,\"input-or-display\",null,[[\"editable\",\"value\"],[[24,[\"editing\"]],[24,[\"route\",\"mirror\",\"host\"]]]],{\"statements\":[[0,\"          \"],[1,[28,\"istio-host-select\",null,[[\"namespaceId\",\"value\",\"showLabel\"],[[24,[\"namespace\",\"id\"]],[24,[\"route\",\"mirror\",\"host\"]],false]]],false],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"      \"],[9],[0,\"\\n      \"],[7,\"div\",true],[10,\"class\",\"col span-6\"],[8],[0,\"\\n        \"],[7,\"label\",true],[10,\"class\",\"acc-label\"],[11,\"for\",[29,[[28,\"concat\",[[24,[\"elementId\"]],\"-input-mirror-subset\"],null]]]],[8],[0,\"\\n          \"],[1,[28,\"t\",[\"cruVirtualService.http.routes.mirror.subset.label\"],null],false],[0,\"\\n        \"],[9],[0,\"\\n\"],[4,\"input-or-display\",null,[[\"editable\",\"value\"],[[24,[\"editing\"]],[24,[\"route\",\"mirror\",\"subset\"]]]],{\"statements\":[[0,\"          \"],[1,[28,\"input\",null,[[\"type\",\"id\",\"value\",\"classNames\",\"placeholder\"],[\"text\",[28,\"concat\",[[24,[\"elementId\"]],\"-input-mirror-subset\"],null],[24,[\"route\",\"mirror\",\"subset\"]],\"form-control\",[28,\"t\",[\"cruVirtualService.http.routes.mirror.subset.placeholder\"],null]]]],false],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"      \"],[9],[0,\"\\n    \"],[9],[0,\"\\n    \"],[7,\"div\",true],[10,\"class\",\"row\"],[8],[0,\"\\n      \"],[7,\"div\",true],[10,\"class\",\"col span-6\"],[8],[0,\"\\n        \"],[1,[28,\"port-selector\",null,[[\"editing\",\"model\"],[[24,[\"editing\"]],[24,[\"route\",\"mirror\"]]]]],false],[0,\"\\n      \"],[9],[0,\"\\n    \"],[9],[0,\"\\n\"]],\"parameters\":[]},null],[9],[0,\"\\n\"]],\"hasEval\":false}",
    "meta": {
      "moduleName": "istio/components/virtual-service-http-route-row/template.hbs"
    }
  });

  _exports.default = _default;
});
define("istio/components/virtual-service-row/component", ["exports", "istio/components/virtual-service-row/template"], function (_exports, _template) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Component.extend({
    layout: _template.default,
    model: null,
    tagName: ''
  });

  _exports.default = _default;
});
define("istio/components/virtual-service-row/template", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "rBrqw4XK",
    "block": "{\"symbols\":[],\"statements\":[[7,\"tr\",true],[10,\"class\",\"main-row\"],[8],[0,\"\\n  \"],[7,\"td\",true],[10,\"valign\",\"middle\"],[10,\"class\",\"row-check\"],[10,\"style\",\"padding-top: 2px;\"],[8],[0,\"\\n    \"],[1,[28,\"check-box\",null,[[\"nodeId\"],[[24,[\"model\",\"id\"]]]]],false],[0,\"\\n  \"],[9],[0,\"\\n  \"],[7,\"td\",true],[11,\"data-title\",[29,[[24,[\"dt\",\"state\"]]]]],[10,\"class\",\"state\"],[8],[0,\"\\n    \"],[1,[28,\"badge-state\",null,[[\"model\"],[[24,[\"model\"]]]]],false],[0,\"\\n  \"],[9],[0,\"\\n  \"],[7,\"td\",true],[11,\"data-title\",[29,[[24,[\"dt\",\"name\"]]]]],[10,\"class\",\"clip\"],[8],[0,\"\\n\"],[4,\"link-to\",null,[[\"route\",\"model\"],[\"virtual-service.detail\",[24,[\"model\",\"id\"]]]],{\"statements\":[[0,\"      \"],[1,[24,[\"model\",\"displayName\"]],false],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"  \"],[9],[0,\"\\n  \"],[7,\"td\",true],[11,\"data-title\",[29,[[24,[\"dt\",\"hosts\"]]]]],[10,\"class\",\"clip\"],[8],[0,\"\\n\"],[4,\"tooltip-element\",null,[[\"type\",\"tooltipTemplate\",\"model\",\"inlineBlock\"],[\"tooltip-basic\",\"tooltip-multi-lines\",[24,[\"model\",\"hosts\"]],true]],{\"statements\":[[0,\"      \"],[1,[24,[\"model\",\"displayHostsString\"]],false],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"  \"],[9],[0,\"\\n  \"],[7,\"td\",true],[11,\"data-title\",[29,[[24,[\"dt\",\"created\"]]]]],[10,\"class\",\"text-right pr-20\"],[8],[0,\"\\n    \"],[1,[28,\"date-calendar\",[[24,[\"model\",\"created\"]]],null],false],[0,\"\\n  \"],[9],[0,\"\\n  \"],[7,\"td\",true],[11,\"data-title\",[29,[[24,[\"dt\",\"actions\"]]]]],[10,\"class\",\"actions\"],[8],[0,\"\\n    \"],[1,[28,\"action-menu\",null,[[\"model\"],[[24,[\"model\"]]]]],false],[0,\"\\n  \"],[9],[0,\"\\n\"],[9]],\"hasEval\":false}",
    "meta": {
      "moduleName": "istio/components/virtual-service-row/template.hbs"
    }
  });

  _exports.default = _default;
});
define("istio/config/environment", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var config;

  try {
    var metaName = 'istio/config/environment';
    var rawConfig = document.querySelector('meta[name="' + metaName + '"]').getAttribute('content');
    config = JSON.parse(unescape(rawConfig));
  } catch (err) {
    throw new Error('Could not read config from meta tag with name "' + metaName + '" due to error: ' + err);
  }

  var _default = config;
  _exports.default = _default;
});
define.alias("shared/cookies/service", "istio/cookies/service");
define("istio/destination-rule/detail/edit/controller", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Controller.extend({
    actions: {
      back: function back() {
        return this.transitionToRoute('project-istio.destination-rules.index');
      },
      cancel: function cancel() {
        this.send('goToPrevious');
      }
    }
  });

  _exports.default = _default;
});
define("istio/destination-rule/detail/edit/route", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Route.extend({
    model: function model() {
      var original = this.modelFor('destination-rule.detail').destinationRule;
      return Ember.RSVP.hash({
        destinationRule: original.clone()
      });
    }
  });

  _exports.default = _default;
});
define("istio/destination-rule/detail/edit/template", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "g9f8qsxo",
    "block": "{\"symbols\":[],\"statements\":[[1,[28,\"cru-destination-rule\",null,[[\"model\",\"mode\",\"done\",\"cancel\"],[[24,[\"model\",\"destinationRule\"]],\"edit\",[28,\"action\",[[23,0,[]],\"back\"],null],[28,\"action\",[[23,0,[]],\"cancel\"],null]]]],false]],\"hasEval\":false}",
    "meta": {
      "moduleName": "istio/destination-rule/detail/edit/template.hbs"
    }
  });

  _exports.default = _default;
});
define("istio/destination-rule/detail/index/template", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "6unoOHv8",
    "block": "{\"symbols\":[],\"statements\":[[1,[28,\"cru-destination-rule\",null,[[\"model\",\"mode\"],[[24,[\"model\",\"destinationRule\"]],\"view\"]]],false]],\"hasEval\":false}",
    "meta": {
      "moduleName": "istio/destination-rule/detail/index/template.hbs"
    }
  });

  _exports.default = _default;
});
define("istio/destination-rule/detail/route", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Route.extend({
    model: function model(params) {
      var store = Ember.get(this, 'store');
      return Ember.RSVP.hash({
        destinationRule: store.find('destinationrule', params.id)
      });
    }
  });

  _exports.default = _default;
});
define("istio/destination-rule/new/controller", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Controller.extend({
    queryParams: ['id'],
    actions: {
      done: function done() {
        return this.transitionToRoute('project-istio.destination-rules.index');
      },
      cancel: function cancel() {
        this.send('goToPrevious');
      }
    }
  });

  _exports.default = _default;
});
define("istio/destination-rule/new/route", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Route.extend({
    model: function model(params) {
      var store = Ember.get(this, 'store');
      var deps = {};

      if (Ember.get(params, 'id')) {
        deps['existing'] = store.find('destinationrule', params.id);
      }

      return Ember.RSVP.hash(deps, 'Load dependencies').then(function (hash) {
        var destinationRule;
        var namespaceId = params.namespaceId;
        var namespace;

        if (namespaceId) {
          namespace = store.getById('namespace', namespaceId);
        } // If the namespace doesn't exist or isn't set, pick default


        if (!namespace) {
          namespace = store.all('namespace').findBy('isDefault', true);

          if (namespace) {
            namespaceId = Ember.get(namespace, 'id');
          }
        }

        if (hash.existing) {
          destinationRule = hash.existing.cloneForNew();
          delete hash.existing;
        } else {
          destinationRule = store.createRecord({
            type: 'destinationrule',
            namespaceId: namespaceId,
            subsets: []
          });
        }

        hash.destinationRule = destinationRule;
        return hash;
      });
    },
    resetController: function resetController(controller, isExisting) {
      if (isExisting) {
        Ember.setProperties(controller, {
          namespaceId: null,
          id: null
        });
      }
    }
  });

  _exports.default = _default;
});
define("istio/destination-rule/new/template", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "Q4oBcw0L",
    "block": "{\"symbols\":[],\"statements\":[[1,[28,\"cru-destination-rule\",null,[[\"model\",\"mode\",\"done\",\"cancel\"],[[24,[\"model\",\"destinationRule\"]],\"new\",[28,\"action\",[[23,0,[]],\"done\"],null],[28,\"action\",[[23,0,[]],\"cancel\"],null]]]],false]],\"hasEval\":false}",
    "meta": {
      "moduleName": "istio/destination-rule/new/template.hbs"
    }
  });

  _exports.default = _default;
});
define.alias("shared/digital-ocean/service", "istio/digital-ocean/service");
define.alias("shared/endpoint/service", "istio/endpoint/service");
define("istio/engine", ["exports", "ember-engines/engine", "ember-load-initializers", "istio/resolver", "istio/config/environment"], function (_exports, _engine, _emberLoadInitializers, _resolver, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var modulePrefix = _environment.default.modulePrefix;

  var Eng = _engine.default.extend({
    modulePrefix: modulePrefix,
    Resolver: _resolver.default,
    dependencies: {
      services: ['app', 'intl', 'scope', 'session', 'modal', 'store', 'catalog', 'globalStore', 'router', 'clusterStore', 'tooltip'],
      externalRoutes: ['authenticated.cluster.istio.cluster-setting']
    }
  });

  (0, _emberLoadInitializers.default)(Eng, modulePrefix);
  var _default = Eng;
  _exports.default = _default;
});
define.alias("shared/features/service", "istio/features/service");
define("istio/gateway/detail/edit/controller", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Controller.extend({
    actions: {
      back: function back() {
        return this.transitionToRoute('project-istio.gateways.index');
      },
      cancel: function cancel() {
        this.send('goToPrevious');
      }
    }
  });

  _exports.default = _default;
});
define("istio/gateway/detail/edit/route", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Route.extend({
    model: function model() {
      var original = this.modelFor('gateway.detail');
      return original.clone();
    }
  });

  _exports.default = _default;
});
define("istio/gateway/detail/edit/template", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "/p5W0um+",
    "block": "{\"symbols\":[],\"statements\":[[1,[28,\"cru-gateway\",null,[[\"model\",\"mode\",\"done\",\"cancel\"],[[24,[\"model\"]],\"edit\",[28,\"action\",[[23,0,[]],\"back\"],null],[28,\"action\",[[23,0,[]],\"cancel\"],null]]]],false]],\"hasEval\":false}",
    "meta": {
      "moduleName": "istio/gateway/detail/edit/template.hbs"
    }
  });

  _exports.default = _default;
});
define("istio/gateway/detail/index/template", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "VFW0A2+4",
    "block": "{\"symbols\":[],\"statements\":[[1,[28,\"cru-gateway\",null,[[\"model\",\"mode\"],[[24,[\"model\"]],\"view\"]]],false]],\"hasEval\":false}",
    "meta": {
      "moduleName": "istio/gateway/detail/index/template.hbs"
    }
  });

  _exports.default = _default;
});
define("istio/gateway/detail/route", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Route.extend({
    model: function model(params) {
      var store = Ember.get(this, 'store');
      return store.find('gateway', params.id);
    }
  });

  _exports.default = _default;
});
define("istio/gateway/new/controller", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Controller.extend({
    queryParams: ['id'],
    actions: {
      done: function done() {
        return this.transitionToRoute('project-istio.gateways.index');
      },
      cancel: function cancel() {
        this.send('goToPrevious');
      }
    }
  });

  _exports.default = _default;
});
define("istio/gateway/new/route", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Route.extend({
    model: function model(params) {
      var store = Ember.get(this, 'store');
      var deps = {};

      if (Ember.get(params, 'id')) {
        deps['existing'] = store.find('gateway', params.id);
      }

      return Ember.RSVP.hash(deps, 'Load dependencies').then(function (hash) {
        var gateway;
        var namespaceId = params.namespaceId;
        var namespace;

        if (namespaceId) {
          namespace = store.getById('namespace', namespaceId);
        } // If the namespace doesn't exist or isn't set, pick default


        if (!namespace) {
          namespace = store.all('namespace').findBy('isDefault', true);

          if (namespace) {
            namespaceId = Ember.get(namespace, 'id');
          }
        }

        if (hash.existing) {
          gateway = hash.existing.cloneForNew();
          delete hash.existing;
        } else {
          gateway = store.createRecord({
            type: 'gateway',
            servers: [],
            selector: {
              '': ''
            }
          });
        }

        hash.gateway = gateway;
        return hash;
      });
    },
    resetController: function resetController(controller, isExisting) {
      if (isExisting) {
        Ember.setProperties(controller, {
          namespaceId: null,
          id: null
        });
      }
    }
  });

  _exports.default = _default;
});
define("istio/gateway/new/template", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "9nkYFpIG",
    "block": "{\"symbols\":[],\"statements\":[[1,[28,\"cru-gateway\",null,[[\"model\",\"mode\",\"done\",\"cancel\"],[[24,[\"model\",\"gateway\"]],\"new\",[28,\"action\",[[23,0,[]],\"done\"],null],[28,\"action\",[[23,0,[]],\"cancel\"],null]]]],false]],\"hasEval\":false}",
    "meta": {
      "moduleName": "istio/gateway/new/template.hbs"
    }
  });

  _exports.default = _default;
});
define.alias("shared/grafana/service", "istio/grafana/service");
define.alias("shared/growl/service", "istio/growl/service");
define.alias("ember-math-helpers/helpers/abs", "istio/helpers/abs");
define.alias("ember-math-helpers/helpers/acos", "istio/helpers/acos");
define.alias("ember-math-helpers/helpers/acosh", "istio/helpers/acosh");
define.alias("ember-math-helpers/helpers/add", "istio/helpers/add");
define.alias("ember-truth-helpers/helpers/and", "istio/helpers/and");
define.alias("shared/helpers/array-includes", "istio/helpers/array-includes");
define.alias("ember-math-helpers/helpers/asin", "istio/helpers/asin");
define.alias("ember-math-helpers/helpers/asinh", "istio/helpers/asinh");
define.alias("ember-math-helpers/helpers/atan", "istio/helpers/atan");
define.alias("ember-math-helpers/helpers/atan2", "istio/helpers/atan2");
define.alias("ember-math-helpers/helpers/atanh", "istio/helpers/atanh");
define.alias("ember-math-helpers/helpers/cbrt", "istio/helpers/cbrt");
define.alias("ember-math-helpers/helpers/ceil", "istio/helpers/ceil");
define.alias("ember-math-helpers/helpers/clz32", "istio/helpers/clz32");
define.alias("ember-math-helpers/helpers/cos", "istio/helpers/cos");
define.alias("ember-math-helpers/helpers/cosh", "istio/helpers/cosh");
define.alias("shared/helpers/date-calendar", "istio/helpers/date-calendar");
define.alias("shared/helpers/date-from-now", "istio/helpers/date-from-now");
define.alias("shared/helpers/date-recent", "istio/helpers/date-recent");
define.alias("shared/helpers/date-str", "istio/helpers/date-str");
define.alias("shared/helpers/default-str", "istio/helpers/default-str");
define.alias("ember-math-helpers/helpers/div", "istio/helpers/div");
define.alias("shared/helpers/driver-name", "istio/helpers/driver-name");
define.alias("ember-truth-helpers/helpers/equal", "istio/helpers/eq");
define.alias("ember-math-helpers/helpers/exp", "istio/helpers/exp");
define.alias("ember-math-helpers/helpers/expm1", "istio/helpers/expm1");
define.alias("ember-math-helpers/helpers/floor", "istio/helpers/floor");
define.alias("ember-intl/helpers/format-date", "istio/helpers/format-date");
define.alias("shared/helpers/format-ip", "istio/helpers/format-ip");
define.alias("ember-intl/helpers/format-message", "istio/helpers/format-message");
define.alias("shared/helpers/format-mib", "istio/helpers/format-mib");
define.alias("ember-intl/helpers/format-number", "istio/helpers/format-number");
define.alias("ember-intl/helpers/format-relative", "istio/helpers/format-relative");
define.alias("shared/helpers/format-si", "istio/helpers/format-si");
define.alias("ember-intl/helpers/format-time", "istio/helpers/format-time");
define.alias("ember-math-helpers/helpers/fround", "istio/helpers/fround");
define.alias("ember-math-helpers/helpers/gcd", "istio/helpers/gcd");
define.alias("shared/helpers/get-card-class", "istio/helpers/get-card-class");
define.alias("ember-truth-helpers/helpers/gt", "istio/helpers/gt");
define.alias("ember-truth-helpers/helpers/gte", "istio/helpers/gte");
define.alias("shared/helpers/has-override", "istio/helpers/has-override");
define.alias("ember-href-to/helpers/href-to", "istio/helpers/href-to");
define.alias("ember-math-helpers/helpers/hypot", "istio/helpers/hypot");
define.alias("ember-math-helpers/helpers/imul", "istio/helpers/imul");
define.alias("ember-truth-helpers/helpers/is-array", "istio/helpers/is-array");
define.alias("ember-cli-clipboard/helpers/is-clipboard-supported", "istio/helpers/is-clipboard-supported");
define.alias("ember-truth-helpers/helpers/is-empty", "istio/helpers/is-empty");
define.alias("ember-truth-helpers/helpers/is-equal", "istio/helpers/is-equal");
define.alias("shared/helpers/join-array", "istio/helpers/join-array");
define.alias("liquid-fire/helpers/lf-lock-model", "istio/helpers/lf-lock-model");
define.alias("liquid-fire/helpers/lf-or", "istio/helpers/lf-or");
define.alias("shared/helpers/link-ssl-domain", "istio/helpers/link-ssl-domain");
define("istio/helpers/linkify", ["exports", "url-regex", "shared/helpers/linkify"], function (_exports, _urlRegex, _linkify) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _linkify.default;
    }
  });
});
define.alias("ember-math-helpers/helpers/log-e", "istio/helpers/log-e");
define.alias("ember-math-helpers/helpers/log10", "istio/helpers/log10");
define.alias("ember-math-helpers/helpers/log1p", "istio/helpers/log1p");
define.alias("ember-math-helpers/helpers/log2", "istio/helpers/log2");
define.alias("shared/helpers/lower-case", "istio/helpers/lower-case");
define.alias("ember-truth-helpers/helpers/lt", "istio/helpers/lt");
define.alias("ember-truth-helpers/helpers/lte", "istio/helpers/lte");
define.alias("ember-math-helpers/helpers/max", "istio/helpers/max");
define.alias("ember-math-helpers/helpers/min", "istio/helpers/min");
define.alias("ember-math-helpers/helpers/mod", "istio/helpers/mod");
define.alias("ember-math-helpers/helpers/mult", "istio/helpers/mult");
define.alias("shared/helpers/nl-to-br", "istio/helpers/nl-to-br");
define.alias("ember-truth-helpers/helpers/not-equal", "istio/helpers/not-eq");
define.alias("ember-truth-helpers/helpers/not", "istio/helpers/not");
define.alias("ember-truth-helpers/helpers/or", "istio/helpers/or");
define.alias("shared/helpers/parse-camelcase", "istio/helpers/parse-camelcase");
define.alias("ember-math-helpers/helpers/pow", "istio/helpers/pow");
define.alias("shared/helpers/pretty-cron", "istio/helpers/pretty-cron");
define.alias("ember-math-helpers/helpers/random", "istio/helpers/random");
define.alias("shared/helpers/rbac-allows", "istio/helpers/rbac-allows");
define.alias("shared/helpers/rbac-prevents", "istio/helpers/rbac-prevents");
define.alias("ember-math-helpers/helpers/round", "istio/helpers/round");
define.alias("shared/helpers/run-time", "istio/helpers/run-time");
define.alias("ember-math-helpers/helpers/sign", "istio/helpers/sign");
define.alias("ember-math-helpers/helpers/sin", "istio/helpers/sin");
define.alias("ember-math-helpers/helpers/sqrt", "istio/helpers/sqrt");
define.alias("shared/helpers/str-replace", "istio/helpers/str-replace");
define.alias("ember-math-helpers/helpers/sub", "istio/helpers/sub");
define.alias("ember-intl/helpers/t", "istio/helpers/t");
define.alias("ember-math-helpers/helpers/tan", "istio/helpers/tan");
define.alias("ember-math-helpers/helpers/tanh", "istio/helpers/tanh");
define.alias("shared/helpers/to-json", "istio/helpers/to-json");
define.alias("ember-math-helpers/helpers/trunc", "istio/helpers/trunc");
define.alias("shared/helpers/uc-first", "istio/helpers/uc-first");
define.alias("shared/helpers/upper-case", "istio/helpers/upper-case");
define.alias("ember-truth-helpers/helpers/xor", "istio/helpers/xor");
define.alias("shared/host/service", "istio/host/service");
define("istio/index/route", ["exports", "ui/utils/constants"], function (_exports, _constants) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var DEFAULT_ROUTE = 'metrics';
  var VALID_ROUTES = [DEFAULT_ROUTE, 'graph', 'rules', 'virtual-services', 'destination-rules', 'gateways'];

  var _default = Ember.Route.extend({
    session: Ember.inject.service(),
    redirect: function redirect() {
      var route = Ember.get(this, "session.".concat(_constants.default.SESSION.ISTIO_ROUTE));

      if (!VALID_ROUTES.includes(route)) {
        route = DEFAULT_ROUTE;
      }

      this.replaceWith("project-istio.".concat(route));
    }
  });

  _exports.default = _default;
});
define("istio/initializers/app", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.initialize = initialize;
  _exports.default = void 0;

  function initialize(application) {
    application.inject('controller', 'app', 'service:app');
    application.inject('route', 'app', 'service:app');
    application.inject('view', 'app', 'service:app');
    application.inject('component', 'app', 'service:app');
    application.inject('model', 'app', 'service:app');
  }

  var _default = {
    name: 'app',
    initialize: initialize
  };
  _exports.default = _default;
});
define("istio/initializers/ember-api-store", ["exports", "@rancher/ember-api-store/initializers/store"], function (_exports, _store) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = {
    name: 'ember-api-store',
    initialize: (0, _store.default)()
  };
  _exports.default = _default;
});
define("istio/initializers/liquid-fire", ["exports", "liquid-fire/velocity-ext"], function (_exports, _velocityExt) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = {
    name: 'liquid-fire',
    initialize: function initialize() {}
  };
  _exports.default = _default;
});
define("istio/instance-initializers/ember-href-to", ["exports", "ember-href-to/href-to"], function (_exports, _hrefTo) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  function closestLink(el) {
    if (el.closest) {
      return el.closest('a');
    } else {
      el = el.parentElement;

      while (el && el.tagName !== 'A') {
        el = el.parentElement;
      }

      return el;
    }
  }

  var _default = {
    name: 'ember-href-to',
    initialize: function initialize(applicationInstance) {
      // we only want this to run in the browser, not in fastboot
      if (typeof FastBoot === "undefined") {
        var hrefToClickHandler = function _hrefToClickHandler(e) {
          var link = e.target.tagName === 'A' ? e.target : closestLink(e.target);

          if (link) {
            var hrefTo = new _hrefTo.default(applicationInstance, e, link);
            hrefTo.maybeHandle();
          }
        };

        document.body.addEventListener('click', hrefToClickHandler); // Teardown on app destruction: clean up the event listener to avoid
        // memory leaks.

        applicationInstance.reopen({
          willDestroy: function willDestroy() {
            document.body.removeEventListener('click', hrefToClickHandler);
            return this._super.apply(this, arguments);
          }
        });
      }
    }
  };
  _exports.default = _default;
});
define.alias("shared/istio/service", "istio/istio/service");
define.alias("shared/k3s/service", "istio/k3s/service");
define.alias("shared/k8s/service", "istio/k8s/service");
define.alias("shared/linode/service", "istio/linode/service");
define.alias("shared/mixins/cattle-transitioning-resource", "istio/mixins/cattle-transitioning-resource");
define.alias("shared/mixins/console", "istio/mixins/console");
define.alias("shared/mixins/container-choices", "istio/mixins/container-choices");
define.alias("shared/mixins/container-spark-stats", "istio/mixins/container-spark-stats");
define.alias("shared/mixins/endpoint-ports", "istio/mixins/endpoint-ports");
define.alias("shared/mixins/filter-state", "istio/mixins/filter-state");
define.alias("shared/mixins/grafana", "istio/mixins/grafana");
define.alias("shared/mixins/grouped-instances", "istio/mixins/grouped-instances");
define.alias("shared/mixins/intl-placeholder", "istio/mixins/intl-placeholder");
define.alias("shared/mixins/lazy-icon", "istio/mixins/lazy-icon");
define.alias("shared/mixins/manage-labels", "istio/mixins/manage-labels");
define.alias("shared/mixins/metrics", "istio/mixins/metrics");
define.alias("shared/mixins/modal-base", "istio/mixins/modal-base");
define.alias("shared/mixins/new-or-edit", "istio/mixins/new-or-edit");
define.alias("shared/mixins/preload", "istio/mixins/preload");
define.alias("shared/mixins/promise-to-cb", "istio/mixins/promise-to-cb");
define.alias("shared/mixins/safe-style", "istio/mixins/safe-style");
define.alias("shared/mixins/sortable-base", "istio/mixins/sortable-base");
define.alias("shared/mixins/state-counts", "istio/mixins/state-counts");
define.alias("shared/mixins/sticky-table-header", "istio/mixins/sticky-table-header");
define.alias("shared/mixins/store-tweaks", "istio/mixins/store-tweaks");
define.alias("shared/mixins/stripped-name", "istio/mixins/stripped-name");
define.alias("shared/mixins/subscribe", "istio/mixins/subscribe");
define.alias("shared/mixins/throttled-resize", "istio/mixins/throttled-resize");
define.alias("shared/mixins/tooltip", "istio/mixins/tooltip");
define.alias("shared/mixins/upgrade-component", "istio/mixins/upgrade-component");
define.alias("shared/mixins/upload", "istio/mixins/upload");
define.alias("shared/modal/service", "istio/modal/service");
define.alias("shared/oauth/service", "istio/oauth/service");
define.alias("shared/pipeline-github/service", "istio/pipeline-github/service");
define.alias("shared/prefs/service", "istio/prefs/service");
define("istio/project-istio/controller", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Controller.extend({
    scope: Ember.inject.service(),
    router: Ember.inject.service(),
    currentRouteName: Ember.computed.alias('router.currentRouteName')
  });

  _exports.default = _default;
});
define("istio/project-istio/destination-rules/index/controller", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Controller.extend({
    scope: Ember.inject.service(),
    sortBy: 'name',
    headers: [{
      name: 'state',
      sort: ['sortState', 'displayName'],
      searchField: 'displayState',
      translationKey: 'generic.state',
      width: 120
    }, {
      name: 'name',
      searchField: 'displayName',
      translationKey: 'generic.name'
    }, {
      name: 'host',
      searchField: 'host',
      translationKey: 'destinationRulePage.table.host.label',
      width: 200
    }, {
      name: 'subsets',
      searchField: 'displaySubsetsString',
      translationKey: 'destinationRulePage.table.subsets.label',
      width: 200
    }, {
      name: 'created',
      sort: ['created', 'id'],
      classNames: 'text-right pr-20',
      searchField: false,
      translationKey: 'generic.created'
    }],
    rows: Ember.computed.alias('model.data')
  });

  _exports.default = _default;
});
define("istio/project-istio/destination-rules/index/route", ["exports", "ui/utils/constants"], function (_exports, _constants) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  var _default = Ember.Route.extend({
    session: Ember.inject.service(),
    scope: Ember.inject.service(),
    model: function model()
    /* params, transition */
    {
      var store = Ember.get(this, 'store');
      var projectId = Ember.get(this.scope, 'currentProject.id');
      return store.findAll('destinationrule').then(function (data) {
        return {
          data: data,
          supported: true,
          projectId: projectId
        };
      }).catch(function () {
        return {
          data: [],
          supported: false,
          projectId: projectId
        };
      });
    },
    setDefaultRoute: Ember.on('activate', function () {
      var _EmberSetProperties;

      Ember.setProperties(this, (_EmberSetProperties = {}, _defineProperty(_EmberSetProperties, "session.".concat(_constants.default.SESSION.ISTIO_ROUTE), 'destination-rules'), _defineProperty(_EmberSetProperties, "session.".concat(_constants.default.SESSION.PROJECT_ROUTE), 'authenticated.project.istio.project-istio.destination-rules'), _EmberSetProperties));
    })
  });

  _exports.default = _default;
});
define("istio/project-istio/destination-rules/index/template", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "t9jSmq98",
    "block": "{\"symbols\":[\"sortable\",\"kind\",\"inst\",\"dt\"],\"statements\":[[4,\"if\",[[24,[\"model\",\"supported\"]]],null,{\"statements\":[[0,\"  \"],[7,\"section\",true],[10,\"class\",\"pl-0 pr-0\"],[8],[0,\"\\n\"],[4,\"sortable-table\",null,[[\"classNames\",\"body\",\"searchText\",\"sortBy\",\"bulkActions\",\"descending\",\"subRows\",\"groupByKey\",\"groupByRef\",\"pagingLabel\",\"headers\"],[\"grid sortable-table\",[24,[\"rows\"]],[24,[\"searchText\"]],[24,[\"sortBy\"]],true,[24,[\"descending\"]],true,\"namespaceId\",\"namespace\",\"pagination.destinationRules\",[24,[\"headers\"]]]],{\"statements\":[[4,\"if\",[[28,\"eq\",[[23,2,[]],\"row\"],null]],null,{\"statements\":[[0,\"        \"],[1,[28,\"destination-rule-row\",null,[[\"model\",\"searchText\",\"subMatches\",\"fullColspan\",\"dt\"],[[23,3,[]],[24,[\"searchText\"]],[23,1,[\"subMatches\"]],[23,1,[\"fullColspan\"]],[23,4,[]]]]],false],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[4,\"if\",[[28,\"eq\",[[23,2,[]],\"group\"],null]],null,{\"statements\":[[0,\"        \"],[1,[28,\"namespace-group\",null,[[\"model\",\"fullColspan\"],[[23,3,[\"ref\"]],[23,1,[\"fullColspan\"]]]]],false],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[4,\"if\",[[28,\"eq\",[[23,2,[]],\"nomatch\"],null]],null,{\"statements\":[[0,\"        \"],[7,\"tr\",true],[8],[0,\"\\n          \"],[7,\"td\",true],[11,\"colspan\",[29,[[23,1,[\"fullColspan\"]]]]],[10,\"class\",\"text-center text-muted pt-20 pb-20\"],[8],[0,\"\\n            \"],[1,[28,\"t\",[\"destinationRulePage.noMatch\"],null],false],[0,\"\\n          \"],[9],[0,\"\\n        \"],[9],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[4,\"if\",[[28,\"eq\",[[23,2,[]],\"norows\"],null]],null,{\"statements\":[[0,\"        \"],[7,\"tr\",true],[8],[0,\"\\n          \"],[7,\"td\",true],[11,\"colspan\",[29,[[23,1,[\"fullColspan\"]]]]],[10,\"class\",\"text-center text-muted pt-20 pb-20\"],[8],[0,\"\\n            \"],[1,[28,\"t\",[\"destinationRulePage.noData\"],null],false],[0,\"\\n          \"],[9],[0,\"\\n        \"],[9],[0,\"\\n      \"]],\"parameters\":[]},null]],\"parameters\":[]}]],\"parameters\":[]}]],\"parameters\":[]}]],\"parameters\":[1,2,3,4]},null],[0,\"  \"],[9],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[0,\"  \"],[1,[28,\"banner-message\",null,[[\"icon\",\"color\",\"message\"],[\"icon-alert\",\"bg-warning mb-10\",[28,\"t\",[\"destinationRulePage.notSupported\"],[[\"htmlSafe\"],[true]]]]]],false],[0,\"\\n\"]],\"parameters\":[]}]],\"hasEval\":false}",
    "meta": {
      "moduleName": "istio/project-istio/destination-rules/index/template.hbs"
    }
  });

  _exports.default = _default;
});
define("istio/project-istio/gateways/index/controller", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Controller.extend({
    scope: Ember.inject.service(),
    sortBy: 'name',
    headers: [{
      name: 'state',
      sort: ['sortState', 'displayName'],
      searchField: 'displayState',
      translationKey: 'generic.state',
      width: 120
    }, {
      name: 'name',
      searchField: 'displayName',
      translationKey: 'generic.name'
    }, {
      name: 'hosts',
      searchField: 'hosts',
      translationKey: 'gatewayPage.table.hosts.label'
    }, {
      name: 'created',
      sort: ['created', 'id'],
      classNames: 'text-right pr-20',
      searchField: false,
      translationKey: 'generic.created'
    }],
    rows: Ember.computed.alias('model.data')
  });

  _exports.default = _default;
});
define("istio/project-istio/gateways/index/route", ["exports", "ui/utils/constants"], function (_exports, _constants) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  var _default = Ember.Route.extend({
    session: Ember.inject.service(),
    model: function model() {
      var store = this.store;
      var projectId = Ember.get(store, 'currentProject.id');
      return store.findAll('gateway').then(function (data) {
        return {
          data: data,
          supported: true,
          projectId: projectId
        };
      }).catch(function () {
        return {
          data: [],
          supported: false,
          projectId: projectId
        };
      });
    },
    setDefaultRoute: Ember.on('activate', function () {
      var _EmberSetProperties;

      Ember.setProperties(this, (_EmberSetProperties = {}, _defineProperty(_EmberSetProperties, "session.".concat(_constants.default.SESSION.ISTIO_ROUTE), 'gateways'), _defineProperty(_EmberSetProperties, "session.".concat(_constants.default.SESSION.PROJECT_ROUTE), 'authenticated.project.istio.project-istio.gateways'), _EmberSetProperties));
    })
  });

  _exports.default = _default;
});
define("istio/project-istio/gateways/index/template", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "DkuHdF2x",
    "block": "{\"symbols\":[\"sortable\",\"kind\",\"inst\",\"dt\"],\"statements\":[[4,\"if\",[[24,[\"model\",\"supported\"]]],null,{\"statements\":[[0,\"  \"],[7,\"section\",true],[10,\"class\",\"pl-0 pr-0\"],[8],[0,\"\\n\"],[4,\"sortable-table\",null,[[\"classNames\",\"body\",\"searchText\",\"sortBy\",\"bulkActions\",\"descending\",\"subRows\",\"groupByKey\",\"groupByRef\",\"pagingLabel\",\"headers\"],[\"grid sortable-table\",[24,[\"rows\"]],[24,[\"searchText\"]],[24,[\"sortBy\"]],true,[24,[\"descending\"]],true,\"namespaceId\",\"namespace\",\"pagination.gateways\",[24,[\"headers\"]]]],{\"statements\":[[4,\"if\",[[28,\"eq\",[[23,2,[]],\"row\"],null]],null,{\"statements\":[[0,\"        \"],[1,[28,\"gateway-row\",null,[[\"model\",\"searchText\",\"subMatches\",\"fullColspan\",\"dt\"],[[23,3,[]],[24,[\"searchText\"]],[23,1,[\"subMatches\"]],[23,1,[\"fullColspan\"]],[23,4,[]]]]],false],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[4,\"if\",[[28,\"eq\",[[23,2,[]],\"group\"],null]],null,{\"statements\":[[0,\"        \"],[1,[28,\"namespace-group\",null,[[\"model\",\"fullColspan\"],[[23,3,[\"ref\"]],[23,1,[\"fullColspan\"]]]]],false],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[4,\"if\",[[28,\"eq\",[[23,2,[]],\"nomatch\"],null]],null,{\"statements\":[[0,\"        \"],[7,\"tr\",true],[8],[0,\"\\n          \"],[7,\"td\",true],[11,\"colspan\",[29,[[23,1,[\"fullColspan\"]]]]],[10,\"class\",\"text-center text-muted pt-20 pb-20\"],[8],[0,\"\\n            \"],[1,[28,\"t\",[\"gatewayPage.noMatch\"],null],false],[0,\"\\n          \"],[9],[0,\"\\n        \"],[9],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[4,\"if\",[[28,\"eq\",[[23,2,[]],\"norows\"],null]],null,{\"statements\":[[0,\"        \"],[7,\"tr\",true],[8],[0,\"\\n          \"],[7,\"td\",true],[11,\"colspan\",[29,[[23,1,[\"fullColspan\"]]]]],[10,\"class\",\"text-center text-muted pt-20 pb-20\"],[8],[0,\"\\n            \"],[1,[28,\"t\",[\"gatewayPage.noData\"],null],false],[0,\"\\n          \"],[9],[0,\"\\n        \"],[9],[0,\"\\n      \"]],\"parameters\":[]},null]],\"parameters\":[]}]],\"parameters\":[]}]],\"parameters\":[]}]],\"parameters\":[1,2,3,4]},null],[0,\"  \"],[9],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[0,\"  \"],[1,[28,\"banner-message\",null,[[\"icon\",\"color\",\"message\"],[\"icon-alert\",\"bg-warning mb-10\",[28,\"t\",[\"gatewayPage.notSupported\"],[[\"htmlSafe\"],[true]]]]]],false],[0,\"\\n\"]],\"parameters\":[]}]],\"hasEval\":false}",
    "meta": {
      "moduleName": "istio/project-istio/gateways/index/template.hbs"
    }
  });

  _exports.default = _default;
});
define("istio/project-istio/graph/controller", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Controller.extend({
    scope: Ember.inject.service()
  });

  _exports.default = _default;
});
define("istio/project-istio/graph/route", ["exports", "ui/utils/constants"], function (_exports, _constants) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  var _default = Ember.Route.extend({
    clusterStore: Ember.inject.service(),
    globalStore: Ember.inject.service(),
    istio: Ember.inject.service(),
    session: Ember.inject.service(),
    scope: Ember.inject.service(),
    beforeModel: function beforeModel() {
      var clusterId = Ember.get(this.scope, 'currentCluster.id');
      return this.istio.checkKialiUiEndpoint(clusterId);
    },
    model: function model() {
      var projectId = Ember.get(this.scope, 'currentProject.id');
      var namespaces = Ember.get(this, 'clusterStore').findAll('namespace').then(function (data) {
        var namespaces = data.filter(function (ns) {
          if (Ember.get(ns, 'projectId') !== projectId) {
            return false;
          }

          var labels = Ember.get(ns, 'labels') || {};
          return labels['istio-injection'] === 'enabled';
        });
        return namespaces;
      });
      return Ember.RSVP.hash({
        namespaces: namespaces
      }).then(function (_ref) {
        var namespaces = _ref.namespaces;
        return {
          namespaces: namespaces
        };
      });
    },
    setDefaultRoute: Ember.on('activate', function () {
      var _EmberSetProperties;

      Ember.setProperties(this, (_EmberSetProperties = {}, _defineProperty(_EmberSetProperties, "session.".concat(_constants.default.SESSION.ISTIO_ROUTE), 'project-istio.graph'), _defineProperty(_EmberSetProperties, "session.".concat(_constants.default.SESSION.PROJECT_ROUTE), 'authenticated.project.istio.project-istio.graph'), _EmberSetProperties));
    })
  });

  _exports.default = _default;
});
define("istio/project-istio/graph/template", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "cQP3DRM4",
    "block": "{\"symbols\":[],\"statements\":[[1,[28,\"traffic-monitoring\",null,[[\"namespaces\"],[[24,[\"model\",\"namespaces\"]]]]],false]],\"hasEval\":false}",
    "meta": {
      "moduleName": "istio/project-istio/graph/template.hbs"
    }
  });

  _exports.default = _default;
});
define("istio/project-istio/metrics/controller", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Controller.extend({
    scope: Ember.inject.service()
  });

  _exports.default = _default;
});
define("istio/project-istio/metrics/route", ["exports", "ui/utils/constants"], function (_exports, _constants) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  var _default = Ember.Route.extend({
    session: Ember.inject.service(),
    setDefaultRoute: Ember.on('activate', function () {
      var _EmberSetProperties;

      Ember.setProperties(this, (_EmberSetProperties = {}, _defineProperty(_EmberSetProperties, "session.".concat(_constants.default.SESSION.ISTIO_ROUTE), 'project-istio.metrics'), _defineProperty(_EmberSetProperties, "session.".concat(_constants.default.SESSION.PROJECT_ROUTE), 'authenticated.project.istio.project-istio.metrics'), _EmberSetProperties));
    })
  });

  _exports.default = _default;
});
define("istio/project-istio/metrics/template", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "C4Chr7yW",
    "block": "{\"symbols\":[],\"statements\":[[1,[22,\"project-traffic-metrics\"],false]],\"hasEval\":false}",
    "meta": {
      "moduleName": "istio/project-istio/metrics/template.hbs"
    }
  });

  _exports.default = _default;
});
define("istio/project-istio/route", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var GRAPH_ROUTE = 'project-istio.graph';

  var _default = Ember.Route.extend({
    clusterStore: Ember.inject.service(),
    globalStore: Ember.inject.service(),
    istio: Ember.inject.service(),
    session: Ember.inject.service(),
    scope: Ember.inject.service(),
    model: function model() {
      var clusterId = Ember.get(this.scope, 'currentCluster.id');
      return this.istio.checkKialiUiEndpoint(clusterId).then(function () {
        return {
          iconDisabled: false
        };
      }).catch(function () {
        return {
          iconDisabled: true
        };
      });
    },
    afterModel: function afterModel(model, transition) {
      if (model.iconDisabled && (transition.targetName || '').indexOf(GRAPH_ROUTE) > -1) {
        this.transitionTo('project-istio.metrics');
      }
    }
  });

  _exports.default = _default;
});
define("istio/project-istio/rule-detail/route", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Route.extend({
    catalog: Ember.inject.service(),
    beforeModel: function beforeModel() {
      return Ember.get(this, 'catalog').fetchUnScopedCatalogs();
    },
    model: function model(params) {
      var store = Ember.get(this, 'store');
      return store.find('app', Ember.get(params, 'rule_id'));
    },
    afterModel: function afterModel(model) {
      return Ember.get(this, 'catalog').fetchAppTemplates([model]);
    }
  });

  _exports.default = _default;
});
define("istio/project-istio/rule-detail/template", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "kbjX9C6K",
    "block": "{\"symbols\":[\"al\",\"expandFn\"],\"statements\":[[7,\"section\",true],[10,\"class\",\"header clearfix\"],[8],[0,\"\\n  \"],[7,\"div\",true],[10,\"class\",\"pull-left\"],[8],[0,\"\\n    \"],[7,\"h1\",true],[10,\"class\",\"vertical-middle\"],[8],[0,\"\\n      \"],[1,[28,\"t\",[\"ruleDetailPage.header\"],[[\"appName\"],[[24,[\"model\",\"displayName\"]]]]],false],[0,\"\\n    \"],[9],[0,\"\\n  \"],[9],[0,\"\\n  \"],[7,\"div\",true],[10,\"class\",\"vertical-middle\"],[8],[9],[0,\"\\n  \"],[7,\"div\",true],[10,\"class\",\"right-buttons\"],[8],[0,\"\\n    \"],[1,[28,\"badge-state\",null,[[\"model\"],[[24,[\"model\"]]]]],false],[0,\"\\n    \"],[1,[28,\"action-menu\",null,[[\"model\",\"showPrimary\",\"classNames\",\"size\"],[[24,[\"model\"]],false,\"ml-10 pull-right\",\"sm\"]]],false],[0,\"\\n  \"],[9],[0,\"\\n\"],[9],[0,\"\\n\\n\"],[4,\"if\",[[24,[\"model\",\"description\"]]],null,{\"statements\":[[0,\"  \"],[1,[28,\"banner-message\",null,[[\"color\",\"message\"],[\"bg-secondary mb-0 mt-10\",[28,\"linkify\",[[24,[\"model\",\"description\"]]],null]]]],false],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"\\n\"],[4,\"if\",[[24,[\"model\",\"showTransitioningMessage\"]]],null,{\"statements\":[[0,\"  \"],[7,\"div\",true],[11,\"class\",[29,[[24,[\"model\",\"stateColor\"]]]]],[8],[0,\"\\n    \"],[7,\"p\",true],[8],[0,\"\\n      \"],[1,[28,\"uc-first\",[[24,[\"model\",\"transitioningMessage\"]]],null],false],[0,\"\\n    \"],[9],[0,\"\\n  \"],[9],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"\\n\"],[7,\"section\",true],[8],[0,\"\\n  \"],[7,\"div\",true],[10,\"class\",\"row banner bg-info basics mb-0\"],[8],[0,\"\\n    \"],[7,\"div\",true],[10,\"class\",\"vertical-middle\"],[8],[0,\"\\n      \"],[7,\"label\",true],[10,\"class\",\"acc-label vertical-middle p-0\"],[8],[0,\"\\n        \"],[1,[28,\"t\",[\"generic.version\"],null],false],[0,\"\\n      \"],[9],[0,\"\\n      \"],[1,[24,[\"model\",\"externalIdInfo\",\"version\"]],false],[0,\"\\n    \"],[9],[0,\"\\n    \"],[7,\"div\",true],[10,\"class\",\"vertical-middle\"],[8],[0,\"\\n      \"],[7,\"label\",true],[10,\"class\",\"acc-label vertical-middle p-0\"],[8],[0,\"\\n        \"],[1,[28,\"t\",[\"generic.namespace\"],null],false],[0,\"\\n      \"],[9],[0,\"\\n      \"],[1,[24,[\"model\",\"namespace\",\"displayName\"]],false],[0,\" \"],[1,[28,\"copy-to-clipboard\",null,[[\"clipboardText\",\"size\"],[[24,[\"model\",\"namespace\",\"id\"]],\"small\"]]],false],[0,\"\\n    \"],[9],[0,\"\\n    \"],[7,\"div\",true],[10,\"class\",\"vertical-middle\"],[8],[0,\"\\n      \"],[7,\"label\",true],[10,\"class\",\"acc-label vertical-middle p-0\"],[8],[0,\"\\n        \"],[1,[28,\"t\",[\"generic.created\"],null],false],[0,\"\\n      \"],[9],[0,\"\\n      \"],[1,[28,\"date-calendar\",[[24,[\"model\",\"created\"]]],null],false],[0,\"\\n    \"],[9],[0,\"\\n  \"],[9],[0,\"\\n\"],[9],[0,\"\\n\\n\"],[7,\"section\",true],[8],[0,\"\\n\"],[4,\"accordion-list\",null,null,{\"statements\":[[0,\"    \"],[1,[28,\"resource-condition-list\",null,[[\"resourceType\",\"conditions\",\"expandAll\",\"expandFn\",\"expandOnInit\"],[[28,\"t\",[\"generic.istioRule\"],null],[24,[\"model\",\"status\",\"conditions\"]],[23,1,[\"expandAll\"]],[23,2,[]],false]]],false],[0,\"\\n\\n\"],[4,\"accordion-list-item\",null,[[\"title\",\"detail\",\"expandAll\",\"expand\",\"expandOnInit\"],[[28,\"t\",[\"ruleDetailPage.answers.title\"],null],[28,\"t\",[\"ruleDetailPage.answers.detail\"],null],[23,1,[\"expandAll\"]],[28,\"action\",[[23,0,[]],[23,2,[]]],null],false]],{\"statements\":[[0,\"      \"],[1,[28,\"form-key-value\",null,[[\"editing\",\"initialMap\",\"showNoneLabel\",\"keyLabel\"],[false,[24,[\"model\",\"answers\"]],[28,\"not\",[[24,[\"model\",\"valuesYaml\"]]],null],\"ruleDetailPage.answers.variable\"]]],false],[0,\"\\n\"],[4,\"if\",[[24,[\"model\",\"valuesYaml\"]]],null,{\"statements\":[[0,\"        \"],[1,[28,\"code-block\",null,[[\"code\",\"language\"],[[24,[\"model\",\"valuesYaml\"]],\"yaml\"]]],false],[0,\"\\n\"]],\"parameters\":[]},null]],\"parameters\":[]},null]],\"parameters\":[1,2]},null],[9],[0,\"\\n\\n\"],[1,[28,\"istio-yaml\",null,[[\"rule\"],[[24,[\"model\"]]]]],false]],\"hasEval\":false}",
    "meta": {
      "moduleName": "istio/project-istio/rule-detail/template.hbs"
    }
  });

  _exports.default = _default;
});
define("istio/project-istio/rules/controller", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Controller.extend({
    scope: Ember.inject.service()
  });

  _exports.default = _default;
});
define("istio/project-istio/rules/route", ["exports", "ui/utils/constants"], function (_exports, _constants) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  var _default = Ember.Route.extend({
    session: Ember.inject.service(),
    catalog: Ember.inject.service(),
    scope: Ember.inject.service(),
    beforeModel: function beforeModel() {
      return Ember.get(this, 'catalog').fetchUnScopedCatalogs();
    },
    model: function model()
    /* params, transition */
    {
      var projectId = Ember.get(this.scope, 'currentProject.id');
      return Ember.get(this, 'store').findAll('app').then(function (apps) {
        return {
          apps: apps,
          projectId: projectId
        };
      });
    },
    afterModel: function afterModel(model) {
      return Ember.get(this, 'catalog').fetchAppTemplates(Ember.get(model, 'apps'));
    },
    setDefaultRoute: Ember.on('activate', function () {
      var _EmberSetProperties;

      Ember.setProperties(this, (_EmberSetProperties = {}, _defineProperty(_EmberSetProperties, "session.".concat(_constants.default.SESSION.ISTIO_ROUTE), 'project-istio.rules'), _defineProperty(_EmberSetProperties, "session.".concat(_constants.default.SESSION.PROJECT_ROUTE), 'authenticated.project.istio.project-istio.rules'), _EmberSetProperties));
    })
  });

  _exports.default = _default;
});
define("istio/project-istio/rules/template", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "okG781I8",
    "block": "{\"symbols\":[],\"statements\":[[1,[28,\"istio-rules-table\",null,[[\"apps\"],[[24,[\"model\",\"apps\"]]]]],false]],\"hasEval\":false}",
    "meta": {
      "moduleName": "istio/project-istio/rules/template.hbs"
    }
  });

  _exports.default = _default;
});
define("istio/project-istio/template", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "Svb6ghKl",
    "block": "{\"symbols\":[],\"statements\":[[4,\"if\",[[24,[\"scope\",\"currentCluster\",\"istioEnabled\"]]],null,{\"statements\":[[4,\"istio-nav\",null,[[\"iconDisabled\"],[[24,[\"model\",\"iconDisabled\"]]]],{\"statements\":[[0,\"    \"],[7,\"button\",false],[12,\"class\",\"btn btn-sm bg-default mr-10\"],[12,\"disabled\",[28,\"or\",[[28,\"rbac-prevents\",null,[[\"resource\",\"scope\",\"permission\"],[\"virtualservice\",\"project\",\"create\"]]],[28,\"rbac-prevents\",null,[[\"resource\",\"scope\",\"permission\"],[\"destinationrule\",\"project\",\"create\"]]]],null]],[3,\"action\",[[23,0,[]],\"importYaml\"]],[8],[0,\"\\n      \"],[1,[28,\"t\",[\"nav.containers.importCompose\"],null],false],[0,\"\\n    \"],[9],[0,\"\\n\"],[4,\"if\",[[28,\"eq\",[[24,[\"currentRouteName\"]],\"authenticated.project.istio.project-istio.rules\"],null]],null,{\"statements\":[[0,\"      \"],[7,\"a\",true],[10,\"class\",\"btn btn-sm bg-primary mr-10\"],[11,\"href\",[29,[[28,\"href-to\",[\"authenticated.project.project-catalogs\",[24,[\"scope\",\"currentProject\",\"id\"]],[28,\"query-params\",null,[[\"istio\"],[true]]]],null]]]],[8],[0,\"\\n        \"],[7,\"i\",true],[10,\"class\",\"icon icon-gear icon-fw\"],[8],[9],[0,\"\\n        \"],[7,\"span\",true],[8],[1,[28,\"t\",[\"nav.apps.manage\"],null],false],[9],[0,\"\\n      \"],[9],[0,\"\\n\\n      \"],[7,\"a\",true],[10,\"class\",\"btn btn-sm bg-primary\"],[11,\"href\",[29,[[28,\"href-to\",[\"catalog-tab\",[24,[\"scope\",\"currentProject\",\"id\"]],[28,\"query-params\",null,[[\"istio\"],[true]]]],null]]]],[11,\"disabled\",[28,\"rbac-prevents\",null,[[\"resource\",\"scope\",\"permission\"],[\"app\",\"project\",\"create\"]]]],[8],[0,\"\\n        \"],[7,\"span\",true],[8],[1,[28,\"t\",[\"rulesPage.new\"],null],false],[9],[0,\"\\n      \"],[9],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[4,\"if\",[[28,\"eq\",[[24,[\"currentRouteName\"]],\"authenticated.project.istio.project-istio.gateways.index\"],null]],null,{\"statements\":[[4,\"link-to\",null,[[\"class\",\"disabled\",\"route\",\"model\"],[\"btn btn-sm bg-primary\",[28,\"rbac-prevents\",null,[[\"resource\",\"scope\",\"permission\"],[\"gateway\",\"project\",\"create\"]]],\"gateway.new\",[24,[\"scope\",\"currentProject\",\"id\"]]]],{\"statements\":[[0,\"          \"],[1,[28,\"t\",[\"istio.nav.gateways.add\"],null],false],[0,\"\\n\"]],\"parameters\":[]},null]],\"parameters\":[]},{\"statements\":[[4,\"if\",[[28,\"eq\",[[24,[\"currentRouteName\"]],\"authenticated.project.istio.project-istio.destination-rules.index\"],null]],null,{\"statements\":[[4,\"link-to\",null,[[\"class\",\"disabled\",\"route\",\"model\"],[\"btn btn-sm bg-primary\",[28,\"rbac-prevents\",null,[[\"resource\",\"scope\",\"permission\"],[\"destinationrule\",\"project\",\"create\"]]],\"destination-rule.new\",[24,[\"scope\",\"currentProject\",\"id\"]]]],{\"statements\":[[0,\"          \"],[1,[28,\"t\",[\"istio.nav.destinationRules.add\"],null],false],[0,\"\\n\"]],\"parameters\":[]},null]],\"parameters\":[]},{\"statements\":[[4,\"if\",[[28,\"eq\",[[24,[\"currentRouteName\"]],\"authenticated.project.istio.project-istio.virtual-services.index\"],null]],null,{\"statements\":[[4,\"link-to\",null,[[\"class\",\"disabled\",\"route\",\"model\"],[\"btn btn-sm bg-primary\",[28,\"rbac-prevents\",null,[[\"resource\",\"scope\",\"permission\"],[\"virtualservice\",\"project\",\"create\"]]],\"virtual-service.new\",[24,[\"scope\",\"currentProject\",\"id\"]]]],{\"statements\":[[0,\"          \"],[1,[28,\"t\",[\"istio.nav.virtualServices.add\"],null],false],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"    \"]],\"parameters\":[]},null]],\"parameters\":[]}]],\"parameters\":[]}]],\"parameters\":[]}]],\"parameters\":[]},null],[0,\"  \"],[1,[22,\"outlet\"],false],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[4,\"if\",[[24,[\"scope\",\"currentCluster\",\"isWindows\"]]],null,{\"statements\":[[0,\"    \"],[5,\"banner-message\",[],[[\"@color\",\"@message\"],[\"bg-warning\",[28,\"t\",[\"windowsCluster.istio\"],null]]]],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[0,\"    \"],[1,[28,\"banner-message\",null,[[\"color\",\"message\"],[\"bg-info\",[28,\"t\",[[28,\"if\",[[24,[\"scope\",\"currentCluster\",\"systemProject\"]],\"projectIstioPage.info.notEnabled\",\"projectIstioPage.info.notOwner\"],null]],[[\"clusterId\",\"htmlSafe\"],[[24,[\"scope\",\"currentCluster\",\"id\"]],true]]]]]],false],[0,\"\\n\"]],\"parameters\":[]}]],\"parameters\":[]}]],\"hasEval\":false}",
    "meta": {
      "moduleName": "istio/project-istio/template.hbs"
    }
  });

  _exports.default = _default;
});
define("istio/project-istio/virtual-services/index/controller", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Controller.extend({
    scope: Ember.inject.service(),
    sortBy: 'name',
    headers: [{
      name: 'state',
      sort: ['sortState', 'displayName'],
      searchField: 'displayState',
      translationKey: 'generic.state',
      width: 120
    }, {
      name: 'name',
      searchField: 'displayName',
      translationKey: 'generic.name'
    }, {
      name: 'hosts',
      searchField: 'hosts',
      translationKey: 'virtualServicePage.table.hosts.label',
      width: 200
    }, {
      name: 'created',
      sort: ['created', 'id'],
      classNames: 'text-right pr-20',
      searchField: false,
      translationKey: 'generic.created'
    }],
    rows: Ember.computed.alias('model.data')
  });

  _exports.default = _default;
});
define("istio/project-istio/virtual-services/index/route", ["exports", "ui/utils/constants"], function (_exports, _constants) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  var _default = Ember.Route.extend({
    session: Ember.inject.service(),
    scope: Ember.inject.service(),
    model: function model()
    /* params, transition */
    {
      var store = Ember.get(this, 'store');
      var projectId = Ember.get(this.scope, 'currentProject.id');
      return store.findAll('virtualservice').then(function (data) {
        return {
          data: data,
          supported: true,
          projectId: projectId
        };
      }).catch(function () {
        return {
          data: [],
          supported: false,
          projectId: projectId
        };
      });
    },
    setDefaultRoute: Ember.on('activate', function () {
      var _EmberSetProperties;

      Ember.setProperties(this, (_EmberSetProperties = {}, _defineProperty(_EmberSetProperties, "session.".concat(_constants.default.SESSION.ISTIO_ROUTE), 'virtual-services'), _defineProperty(_EmberSetProperties, "session.".concat(_constants.default.SESSION.PROJECT_ROUTE), 'authenticated.project.istio.project-istio.virtual-services'), _EmberSetProperties));
    })
  });

  _exports.default = _default;
});
define("istio/project-istio/virtual-services/index/template", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "H+nrCMMr",
    "block": "{\"symbols\":[\"sortable\",\"kind\",\"inst\",\"dt\"],\"statements\":[[4,\"if\",[[24,[\"model\",\"supported\"]]],null,{\"statements\":[[0,\"  \"],[7,\"section\",true],[10,\"class\",\"pl-0 pr-0\"],[8],[0,\"\\n\"],[4,\"sortable-table\",null,[[\"classNames\",\"body\",\"searchText\",\"sortBy\",\"bulkActions\",\"descending\",\"subRows\",\"groupByKey\",\"groupByRef\",\"pagingLabel\",\"headers\"],[\"grid sortable-table\",[24,[\"rows\"]],[24,[\"searchText\"]],[24,[\"sortBy\"]],true,[24,[\"descending\"]],true,\"namespaceId\",\"namespace\",\"pagination.virtualServices\",[24,[\"headers\"]]]],{\"statements\":[[4,\"if\",[[28,\"eq\",[[23,2,[]],\"row\"],null]],null,{\"statements\":[[0,\"        \"],[1,[28,\"virtual-service-row\",null,[[\"model\",\"searchText\",\"subMatches\",\"fullColspan\",\"dt\"],[[23,3,[]],[24,[\"searchText\"]],[23,1,[\"subMatches\"]],[23,1,[\"fullColspan\"]],[23,4,[]]]]],false],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[4,\"if\",[[28,\"eq\",[[23,2,[]],\"group\"],null]],null,{\"statements\":[[0,\"        \"],[1,[28,\"namespace-group\",null,[[\"model\",\"fullColspan\"],[[23,3,[\"ref\"]],[23,1,[\"fullColspan\"]]]]],false],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[4,\"if\",[[28,\"eq\",[[23,2,[]],\"nomatch\"],null]],null,{\"statements\":[[0,\"        \"],[7,\"tr\",true],[8],[0,\"\\n          \"],[7,\"td\",true],[11,\"colspan\",[29,[[23,1,[\"fullColspan\"]]]]],[10,\"class\",\"text-center text-muted pt-20 pb-20\"],[8],[0,\"\\n            \"],[1,[28,\"t\",[\"virtualServicePage.noMatch\"],null],false],[0,\"\\n          \"],[9],[0,\"\\n        \"],[9],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[4,\"if\",[[28,\"eq\",[[23,2,[]],\"norows\"],null]],null,{\"statements\":[[0,\"        \"],[7,\"tr\",true],[8],[0,\"\\n          \"],[7,\"td\",true],[11,\"colspan\",[29,[[23,1,[\"fullColspan\"]]]]],[10,\"class\",\"text-center text-muted pt-20 pb-20\"],[8],[0,\"\\n            \"],[1,[28,\"t\",[\"virtualServicePage.noData\"],null],false],[0,\"\\n          \"],[9],[0,\"\\n        \"],[9],[0,\"\\n      \"]],\"parameters\":[]},null]],\"parameters\":[]}]],\"parameters\":[]}]],\"parameters\":[]}]],\"parameters\":[1,2,3,4]},null],[0,\"  \"],[9],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[0,\"  \"],[1,[28,\"banner-message\",null,[[\"icon\",\"color\",\"message\"],[\"icon-alert\",\"bg-warning mb-10\",[28,\"t\",[\"virtualServicePage.notSupported\"],[[\"htmlSafe\"],[true]]]]]],false],[0,\"\\n\"]],\"parameters\":[]}]],\"hasEval\":false}",
    "meta": {
      "moduleName": "istio/project-istio/virtual-services/index/template.hbs"
    }
  });

  _exports.default = _default;
});
define("istio/resolver", ["exports", "ember-resolver"], function (_exports, _emberResolver) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = _emberResolver.default;
  _exports.default = _default;
});
define.alias("shared/resource-actions/service", "istio/resource-actions/service");
define.alias("shared/role-template/service", "istio/role-template/service");
define.alias("shared/saml/service", "istio/saml/service");
define.alias("shared/scope/service", "istio/scope/service");
define.alias("shared/security-scan-config/service", "istio/security-scan-config/service");
define.alias("ivy-codemirror/services/code-mirror", "istio/services/code-mirror");
define("istio/services/cookies", ["exports", "ember-cookies/services/cookies"], function (_exports, _cookies) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = _cookies.default;
  _exports.default = _default;
});
define.alias("ember-intl/services/intl", "istio/services/intl");
define("istio/services/liquid-fire-transitions", ["exports", "liquid-fire/transition-map"], function (_exports, _transitionMap) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = _transitionMap.default;
  _exports.default = _default;
});
define.alias("shared/session/service", "istio/session/service");
define.alias("shared/settings/service", "istio/settings/service");
define("istio/shared/tests/addon.lint-test", [], function () {
  "use strict";

  QUnit.module('ESLint | addon');
  QUnit.test('addon/access/service.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/access/service.js should pass ESLint\n\n');
  });
  QUnit.test('addon/all-dns-records/service.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/all-dns-records/service.js should pass ESLint\n\n');
  });
  QUnit.test('addon/all-storage-classes/service.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/all-storage-classes/service.js should pass ESLint\n\n');
  });
  QUnit.test('addon/all-workloads/service.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/all-workloads/service.js should pass ESLint\n\n');
  });
  QUnit.test('addon/azure-ad/service.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/azure-ad/service.js should pass ESLint\n\n');
  });
  QUnit.test('addon/bulk-action-handler/service.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/bulk-action-handler/service.js should pass ESLint\n\n');
  });
  QUnit.test('addon/capabilities/service.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/capabilities/service.js should pass ESLint\n\n');
  });
  QUnit.test('addon/catalog/service.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/catalog/service.js should pass ESLint\n\n');
  });
  QUnit.test('addon/cluster-templates/service.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/cluster-templates/service.js should pass ESLint\n\n');
  });
  QUnit.test('addon/code-mirror/service.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/code-mirror/service.js should pass ESLint\n\n');
  });
  QUnit.test('addon/components/accordion-list-item/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/accordion-list-item/component.js should pass ESLint\n\n');
  });
  QUnit.test('addon/components/accordion-list/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/accordion-list/component.js should pass ESLint\n\n');
  });
  QUnit.test('addon/components/action-menu-item/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/action-menu-item/component.js should pass ESLint\n\n');
  });
  QUnit.test('addon/components/action-menu/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/action-menu/component.js should pass ESLint\n\n');
  });
  QUnit.test('addon/components/advanced-section/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/advanced-section/component.js should pass ESLint\n\n');
  });
  QUnit.test('addon/components/annotations-section/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/annotations-section/component.js should pass ESLint\n\n');
  });
  QUnit.test('addon/components/answer-override-row/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/answer-override-row/component.js should pass ESLint\n\n');
  });
  QUnit.test('addon/components/api-field/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/api-field/component.js should pass ESLint\n\n');
  });
  QUnit.test('addon/components/authorized-endpoint/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/authorized-endpoint/component.js should pass ESLint\n\n');
  });
  QUnit.test('addon/components/badge-state/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/badge-state/component.js should pass ESLint\n\n');
  });
  QUnit.test('addon/components/banner-message/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/banner-message/component.js should pass ESLint\n\n');
  });
  QUnit.test('addon/components/btn-toggle/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/btn-toggle/component.js should pass ESLint\n\n');
  });
  QUnit.test('addon/components/catalog-box/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/catalog-box/component.js should pass ESLint\n\n');
  });
  QUnit.test('addon/components/catalog-index/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/catalog-index/component.js should pass ESLint\n\n');
  });
  QUnit.test('addon/components/catalog-persistence-row/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/catalog-persistence-row/component.js should pass ESLint\n\n');
  });
  QUnit.test('addon/components/check-box/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/check-box/component.js should pass ESLint\n\n');
  });
  QUnit.test('addon/components/check-computed-override/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/check-computed-override/component.js should pass ESLint\n\n');
  });
  QUnit.test('addon/components/check-override-allowed/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/check-override-allowed/component.js should pass ESLint\n\n');
  });
  QUnit.test('addon/components/cluster-driver/driver-aliyunkcs/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/cluster-driver/driver-aliyunkcs/component.js should pass ESLint\n\n');
  });
  QUnit.test('addon/components/cluster-driver/driver-amazoneks/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/cluster-driver/driver-amazoneks/component.js should pass ESLint\n\n');
  });
  QUnit.test('addon/components/cluster-driver/driver-azureaks/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/cluster-driver/driver-azureaks/component.js should pass ESLint\n\n');
  });
  QUnit.test('addon/components/cluster-driver/driver-googlegke/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/cluster-driver/driver-googlegke/component.js should pass ESLint\n\n');
  });
  QUnit.test('addon/components/cluster-driver/driver-huaweicce/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/cluster-driver/driver-huaweicce/component.js should pass ESLint\n\n');
  });
  QUnit.test('addon/components/cluster-driver/driver-import/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/cluster-driver/driver-import/component.js should pass ESLint\n\n');
  });
  QUnit.test('addon/components/cluster-driver/driver-rke/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/cluster-driver/driver-rke/component.js should pass ESLint\n\n');
  });
  QUnit.test('addon/components/cluster-driver/driver-tencenttke/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/cluster-driver/driver-tencenttke/component.js should pass ESLint\n\n');
  });
  QUnit.test('addon/components/cluster-ribbon-nav/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/cluster-ribbon-nav/component.js should pass ESLint\n\n');
  });
  QUnit.test('addon/components/cluster-template-override-toggle/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/cluster-template-override-toggle/component.js should pass ESLint\n\n');
  });
  QUnit.test('addon/components/cluster-template-question-row/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/cluster-template-question-row/component.js should pass ESLint\n\n');
  });
  QUnit.test('addon/components/cluster-template-revision-upgrade-notification/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/cluster-template-revision-upgrade-notification/component.js should pass ESLint\n\n');
  });
  QUnit.test('addon/components/cluster-template-row/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/cluster-template-row/component.js should pass ESLint\n\n');
  });
  QUnit.test('addon/components/cluster-templates-table/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/cluster-templates-table/component.js should pass ESLint\n\n');
  });
  QUnit.test('addon/components/code-block/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/code-block/component.js should pass ESLint\n\n');
  });
  QUnit.test('addon/components/confirm-delete/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/confirm-delete/component.js should pass ESLint\n\n');
  });
  QUnit.test('addon/components/container-shell/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/container-shell/component.js should pass ESLint\n\n');
  });
  QUnit.test('addon/components/containers-header/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/containers-header/component.js should pass ESLint\n\n');
  });
  QUnit.test('addon/components/copy-inline/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/copy-inline/component.js should pass ESLint\n\n');
  });
  QUnit.test('addon/components/copy-to-clipboard/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/copy-to-clipboard/component.js should pass ESLint\n\n');
  });
  QUnit.test('addon/components/cru-cloud-provider/cloud-provider-info.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/cru-cloud-provider/cloud-provider-info.js should pass ESLint\n\n');
  });
  QUnit.test('addon/components/cru-cloud-provider/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/cru-cloud-provider/component.js should pass ESLint\n\n');
  });
  QUnit.test('addon/components/cru-cluster-template-questions/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/cru-cluster-template-questions/component.js should pass ESLint\n\n');
  });
  QUnit.test('addon/components/cru-cluster-template/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/cru-cluster-template/component.js should pass ESLint\n\n');
  });
  QUnit.test('addon/components/cru-cluster/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/cru-cluster/component.js should pass ESLint\n\n');
  });
  QUnit.test('addon/components/cru-node-pools/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/cru-node-pools/component.js should pass ESLint\n\n');
  });
  QUnit.test('addon/components/cru-private-registry/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/cru-private-registry/component.js should pass ESLint\n\n');
  });
  QUnit.test('addon/components/custom-catalog/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/custom-catalog/component.js should pass ESLint\n\n');
  });
  QUnit.test('addon/components/drain-node/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/drain-node/component.js should pass ESLint\n\n');
  });
  QUnit.test('addon/components/empty-table/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/empty-table/component.js should pass ESLint\n\n');
  });
  QUnit.test('addon/components/error-sub-row/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/error-sub-row/component.js should pass ESLint\n\n');
  });
  QUnit.test('addon/components/field-required/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/field-required/component.js should pass ESLint\n\n');
  });
  QUnit.test('addon/components/form-auth-cloud-credential/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/form-auth-cloud-credential/component.js should pass ESLint\n\n');
  });
  QUnit.test('addon/components/form-certificate-row/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/form-certificate-row/component.js should pass ESLint\n\n');
  });
  QUnit.test('addon/components/form-contextual-select-array/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/form-contextual-select-array/component.js should pass ESLint\n\n');
  });
  QUnit.test('addon/components/form-count/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/form-count/component.js should pass ESLint\n\n');
  });
  QUnit.test('addon/components/form-engine-opts/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/form-engine-opts/component.js should pass ESLint\n\n');
  });
  QUnit.test('addon/components/form-gke-taints/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/form-gke-taints/component.js should pass ESLint\n\n');
  });
  QUnit.test('addon/components/form-global-resource-roles/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/form-global-resource-roles/component.js should pass ESLint\n\n');
  });
  QUnit.test('addon/components/form-ingress-backends/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/form-ingress-backends/component.js should pass ESLint\n\n');
  });
  QUnit.test('addon/components/form-ingress-rows/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/form-ingress-rows/component.js should pass ESLint\n\n');
  });
  QUnit.test('addon/components/form-ingress-rule/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/form-ingress-rule/component.js should pass ESLint\n\n');
  });
  QUnit.test('addon/components/form-key-value/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/form-key-value/component.js should pass ESLint\n\n');
  });
  QUnit.test('addon/components/form-labels-annotations/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/form-labels-annotations/component.js should pass ESLint\n\n');
  });
  QUnit.test('addon/components/form-match-expressions/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/form-match-expressions/component.js should pass ESLint\n\n');
  });
  QUnit.test('addon/components/form-members-catalog-access/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/form-members-catalog-access/component.js should pass ESLint\n\n');
  });
  QUnit.test('addon/components/form-members-global-access/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/form-members-global-access/component.js should pass ESLint\n\n');
  });
  QUnit.test('addon/components/form-members/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/form-members/component.js should pass ESLint\n\n');
  });
  QUnit.test('addon/components/form-name-description/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/form-name-description/component.js should pass ESLint\n\n');
  });
  QUnit.test('addon/components/form-namespace/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/form-namespace/component.js should pass ESLint\n\n');
  });
  QUnit.test('addon/components/form-network-config/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/form-network-config/component.js should pass ESLint\n\n');
  });
  QUnit.test('addon/components/form-node-taints/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/form-node-taints/component.js should pass ESLint\n\n');
  });
  QUnit.test('addon/components/form-project-targets/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/form-project-targets/component.js should pass ESLint\n\n');
  });
  QUnit.test('addon/components/form-reservation/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/form-reservation/component.js should pass ESLint\n\n');
  });
  QUnit.test('addon/components/form-share-member/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/form-share-member/component.js should pass ESLint\n\n');
  });
  QUnit.test('addon/components/form-ssl-rows/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/form-ssl-rows/component.js should pass ESLint\n\n');
  });
  QUnit.test('addon/components/form-ssl-termination/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/form-ssl-termination/component.js should pass ESLint\n\n');
  });
  QUnit.test('addon/components/form-user-labels/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/form-user-labels/component.js should pass ESLint\n\n');
  });
  QUnit.test('addon/components/form-value-array/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/form-value-array/component.js should pass ESLint\n\n');
  });
  QUnit.test('addon/components/form-versions/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/form-versions/component.js should pass ESLint\n\n');
  });
  QUnit.test('addon/components/gke-access-scope/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/gke-access-scope/component.js should pass ESLint\n\n');
  });
  QUnit.test('addon/components/graph-area/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/graph-area/component.js should pass ESLint\n\n');
  });
  QUnit.test('addon/components/graph-area/theme.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/graph-area/theme.js should pass ESLint\n\n');
  });
  QUnit.test('addon/components/hover-dropdown/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/hover-dropdown/component.js should pass ESLint\n\n');
  });
  QUnit.test('addon/components/huawei-user-labels/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/huawei-user-labels/component.js should pass ESLint\n\n');
  });
  QUnit.test('addon/components/identity-block/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/identity-block/component.js should pass ESLint\n\n');
  });
  QUnit.test('addon/components/input-answer-row/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/input-answer-row/component.js should pass ESLint\n\n');
  });
  QUnit.test('addon/components/input-answers/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/input-answers/component.js should pass ESLint\n\n');
  });
  QUnit.test('addon/components/input-custom-answers/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/input-custom-answers/component.js should pass ESLint\n\n');
  });
  QUnit.test('addon/components/input-float/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/input-float/component.js should pass ESLint\n\n');
  });
  QUnit.test('addon/components/input-identity/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/input-identity/component.js should pass ESLint\n\n');
  });
  QUnit.test('addon/components/input-int/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/input-int/component.js should pass ESLint\n\n');
  });
  QUnit.test('addon/components/input-integer/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/input-integer/component.js should pass ESLint\n\n');
  });
  QUnit.test('addon/components/input-number/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/input-number/component.js should pass ESLint\n\n');
  });
  QUnit.test('addon/components/input-or-display/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/input-or-display/component.js should pass ESLint\n\n');
  });
  QUnit.test('addon/components/input-paste/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/input-paste/component.js should pass ESLint\n\n');
  });
  QUnit.test('addon/components/input-slider/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/input-slider/component.js should pass ESLint\n\n');
  });
  QUnit.test('addon/components/input-suggest/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/input-suggest/component.js should pass ESLint\n\n');
  });
  QUnit.test('addon/components/input-text-file/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/input-text-file/component.js should pass ESLint\n\n');
  });
  QUnit.test('addon/components/input-url/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/input-url/component.js should pass ESLint\n\n');
  });
  QUnit.test('addon/components/input-yaml/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/input-yaml/component.js should pass ESLint\n\n');
  });
  QUnit.test('addon/components/k3s-cluster-info/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/k3s-cluster-info/component.js should pass ESLint\n\n');
  });
  QUnit.test('addon/components/k3s-node-args/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/k3s-node-args/component.js should pass ESLint\n\n');
  });
  QUnit.test('addon/components/k3s-node-env-var/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/k3s-node-env-var/component.js should pass ESLint\n\n');
  });
  QUnit.test('addon/components/labels-section/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/labels-section/component.js should pass ESLint\n\n');
  });
  QUnit.test('addon/components/language-dropdown/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/language-dropdown/component.js should pass ESLint\n\n');
  });
  QUnit.test('addon/components/link-to-as-attrs/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/link-to-as-attrs/component.js should pass ESLint\n\n');
  });
  QUnit.test('addon/components/link-to-cluster-driver/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/link-to-cluster-driver/component.js should pass ESLint\n\n');
  });
  QUnit.test('addon/components/marked-down/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/marked-down/component.js should pass ESLint\n\n');
  });
  QUnit.test('addon/components/metrics-action/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/metrics-action/component.js should pass ESLint\n\n');
  });
  QUnit.test('addon/components/metrics-graph/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/metrics-graph/component.js should pass ESLint\n\n');
  });
  QUnit.test('addon/components/metrics-summary/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/metrics-summary/component.js should pass ESLint\n\n');
  });
  QUnit.test('addon/components/modal-add-custom-roles/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/modal-add-custom-roles/component.js should pass ESLint\n\n');
  });
  QUnit.test('addon/components/modal-confirm-deactivate/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/modal-confirm-deactivate/component.js should pass ESLint\n\n');
  });
  QUnit.test('addon/components/modal-confirm-yaml-switch/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/modal-confirm-yaml-switch/component.js should pass ESLint\n\n');
  });
  QUnit.test('addon/components/modal-container-stop/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/modal-container-stop/component.js should pass ESLint\n\n');
  });
  QUnit.test('addon/components/modal-delete-eks-cluster/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/modal-delete-eks-cluster/component.js should pass ESLint\n\n');
  });
  QUnit.test('addon/components/modal-edit-catalog/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/modal-edit-catalog/component.js should pass ESLint\n\n');
  });
  QUnit.test('addon/components/modal-edit-cluster-template/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/modal-edit-cluster-template/component.js should pass ESLint\n\n');
  });
  QUnit.test('addon/components/modal-edit-driver/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/modal-edit-driver/component.js should pass ESLint\n\n');
  });
  QUnit.test('addon/components/modal-istio-yaml/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/modal-istio-yaml/component.js should pass ESLint\n\n');
  });
  QUnit.test('addon/components/modal-move-namespace/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/modal-move-namespace/component.js should pass ESLint\n\n');
  });
  QUnit.test('addon/components/modal-root/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/modal-root/component.js should pass ESLint\n\n');
  });
  QUnit.test('addon/components/modal-save-rke-template/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/modal-save-rke-template/component.js should pass ESLint\n\n');
  });
  QUnit.test('addon/components/modal-shell/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/modal-shell/component.js should pass ESLint\n\n');
  });
  QUnit.test('addon/components/modal-yaml/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/modal-yaml/component.js should pass ESLint\n\n');
  });
  QUnit.test('addon/components/multi-container-stats/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/multi-container-stats/component.js should pass ESLint\n\n');
  });
  QUnit.test('addon/components/namespace-group/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/namespace-group/component.js should pass ESLint\n\n');
  });
  QUnit.test('addon/components/new-select/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/new-select/component.js should pass ESLint\n\n');
  });
  QUnit.test('addon/components/node-ip/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/node-ip/component.js should pass ESLint\n\n');
  });
  QUnit.test('addon/components/node-pool-row/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/node-pool-row/component.js should pass ESLint\n\n');
  });
  QUnit.test('addon/components/node-taints/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/node-taints/component.js should pass ESLint\n\n');
  });
  QUnit.test('addon/components/outside-click/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/outside-click/component.js should pass ESLint\n\n');
  });
  QUnit.test('addon/components/page-numbers/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/page-numbers/component.js should pass ESLint\n\n');
  });
  QUnit.test('addon/components/percent-gauge/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/percent-gauge/component.js should pass ESLint\n\n');
  });
  QUnit.test('addon/components/pretty-json/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/pretty-json/component.js should pass ESLint\n\n');
  });
  QUnit.test('addon/components/principal-search/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/principal-search/component.js should pass ESLint\n\n');
  });
  QUnit.test('addon/components/progress-bar/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/progress-bar/component.js should pass ESLint\n\n');
  });
  QUnit.test('addon/components/project-member-row/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/project-member-row/component.js should pass ESLint\n\n');
  });
  QUnit.test('addon/components/radio-button/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/radio-button/component.js should pass ESLint\n\n');
  });
  QUnit.test('addon/components/resource-condition-list/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/resource-condition-list/component.js should pass ESLint\n\n');
  });
  QUnit.test('addon/components/resource-event-list/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/resource-event-list/component.js should pass ESLint\n\n');
  });
  QUnit.test('addon/components/save-cancel/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/save-cancel/component.js should pass ESLint\n\n');
  });
  QUnit.test('addon/components/scheduling-toleration/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/scheduling-toleration/component.js should pass ESLint\n\n');
  });
  QUnit.test('addon/components/schema/input-boolean/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/schema/input-boolean/component.js should pass ESLint\n\n');
  });
  QUnit.test('addon/components/schema/input-certificate/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/schema/input-certificate/component.js should pass ESLint\n\n');
  });
  QUnit.test('addon/components/schema/input-config-map/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/schema/input-config-map/component.js should pass ESLint\n\n');
  });
  QUnit.test('addon/components/schema/input-container/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/schema/input-container/component.js should pass ESLint\n\n');
  });
  QUnit.test('addon/components/schema/input-date/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/schema/input-date/component.js should pass ESLint\n\n');
  });
  QUnit.test('addon/components/schema/input-dns-record/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/schema/input-dns-record/component.js should pass ESLint\n\n');
  });
  QUnit.test('addon/components/schema/input-enum/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/schema/input-enum/component.js should pass ESLint\n\n');
  });
  QUnit.test('addon/components/schema/input-float/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/schema/input-float/component.js should pass ESLint\n\n');
  });
  QUnit.test('addon/components/schema/input-hostname/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/schema/input-hostname/component.js should pass ESLint\n\n');
  });
  QUnit.test('addon/components/schema/input-int/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/schema/input-int/component.js should pass ESLint\n\n');
  });
  QUnit.test('addon/components/schema/input-istiohost/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/schema/input-istiohost/component.js should pass ESLint\n\n');
  });
  QUnit.test('addon/components/schema/input-masked/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/schema/input-masked/component.js should pass ESLint\n\n');
  });
  QUnit.test('addon/components/schema/input-multiline/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/schema/input-multiline/component.js should pass ESLint\n\n');
  });
  QUnit.test('addon/components/schema/input-password/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/schema/input-password/component.js should pass ESLint\n\n');
  });
  QUnit.test('addon/components/schema/input-pvc/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/schema/input-pvc/component.js should pass ESLint\n\n');
  });
  QUnit.test('addon/components/schema/input-relative-service/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/schema/input-relative-service/component.js should pass ESLint\n\n');
  });
  QUnit.test('addon/components/schema/input-secret/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/schema/input-secret/component.js should pass ESLint\n\n');
  });
  QUnit.test('addon/components/schema/input-storageclass/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/schema/input-storageclass/component.js should pass ESLint\n\n');
  });
  QUnit.test('addon/components/schema/input-string/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/schema/input-string/component.js should pass ESLint\n\n');
  });
  QUnit.test('addon/components/schema/input-workload/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/schema/input-workload/component.js should pass ESLint\n\n');
  });
  QUnit.test('addon/components/search-text/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/search-text/component.js should pass ESLint\n\n');
  });
  QUnit.test('addon/components/searchable-select/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/searchable-select/component.js should pass ESLint\n\n');
  });
  QUnit.test('addon/components/select-value-check/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/select-value-check/component.js should pass ESLint\n\n');
  });
  QUnit.test('addon/components/settings/danger-zone/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/settings/danger-zone/component.js should pass ESLint\n\n');
  });
  QUnit.test('addon/components/settings/host-registration/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/settings/host-registration/component.js should pass ESLint\n\n');
  });
  QUnit.test('addon/components/settings/settings-header/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/settings/settings-header/component.js should pass ESLint\n\n');
  });
  QUnit.test('addon/components/share-member-row/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/share-member-row/component.js should pass ESLint\n\n');
  });
  QUnit.test('addon/components/shortcut-key/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/shortcut-key/component.js should pass ESLint\n\n');
  });
  QUnit.test('addon/components/sortable-table/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/sortable-table/component.js should pass ESLint\n\n');
  });
  QUnit.test('addon/components/sortable-thead/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/sortable-thead/component.js should pass ESLint\n\n');
  });
  QUnit.test('addon/components/storage-class/provisioner-aws-ebs/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/storage-class/provisioner-aws-ebs/component.js should pass ESLint\n\n');
  });
  QUnit.test('addon/components/storage-class/provisioner-azure-disk/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/storage-class/provisioner-azure-disk/component.js should pass ESLint\n\n');
  });
  QUnit.test('addon/components/storage-class/provisioner-azure-file/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/storage-class/provisioner-azure-file/component.js should pass ESLint\n\n');
  });
  QUnit.test('addon/components/storage-class/provisioner-cinder/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/storage-class/provisioner-cinder/component.js should pass ESLint\n\n');
  });
  QUnit.test('addon/components/storage-class/provisioner-gce-pd/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/storage-class/provisioner-gce-pd/component.js should pass ESLint\n\n');
  });
  QUnit.test('addon/components/storage-class/provisioner-generic/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/storage-class/provisioner-generic/component.js should pass ESLint\n\n');
  });
  QUnit.test('addon/components/storage-class/provisioner-glusterfs/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/storage-class/provisioner-glusterfs/component.js should pass ESLint\n\n');
  });
  QUnit.test('addon/components/storage-class/provisioner-local-storage/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/storage-class/provisioner-local-storage/component.js should pass ESLint\n\n');
  });
  QUnit.test('addon/components/storage-class/provisioner-longhorn/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/storage-class/provisioner-longhorn/component.js should pass ESLint\n\n');
  });
  QUnit.test('addon/components/storage-class/provisioner-portworx-volume/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/storage-class/provisioner-portworx-volume/component.js should pass ESLint\n\n');
  });
  QUnit.test('addon/components/storage-class/provisioner-quobyte/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/storage-class/provisioner-quobyte/component.js should pass ESLint\n\n');
  });
  QUnit.test('addon/components/storage-class/provisioner-rbd/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/storage-class/provisioner-rbd/component.js should pass ESLint\n\n');
  });
  QUnit.test('addon/components/storage-class/provisioner-scaleio/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/storage-class/provisioner-scaleio/component.js should pass ESLint\n\n');
  });
  QUnit.test('addon/components/storage-class/provisioner-storageos/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/storage-class/provisioner-storageos/component.js should pass ESLint\n\n');
  });
  QUnit.test('addon/components/storage-class/provisioner-vsphere-volume/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/storage-class/provisioner-vsphere-volume/component.js should pass ESLint\n\n');
  });
  QUnit.test('addon/components/table-labels/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/table-labels/component.js should pass ESLint\n\n');
  });
  QUnit.test('addon/components/textarea-autogrow/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/textarea-autogrow/component.js should pass ESLint\n\n');
  });
  QUnit.test('addon/components/tooltip-action-menu/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/tooltip-action-menu/component.js should pass ESLint\n\n');
  });
  QUnit.test('addon/components/tooltip-basic/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/tooltip-basic/component.js should pass ESLint\n\n');
  });
  QUnit.test('addon/components/tooltip-element/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/tooltip-element/component.js should pass ESLint\n\n');
  });
  QUnit.test('addon/components/tooltip-expiring/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/tooltip-expiring/component.js should pass ESLint\n\n');
  });
  QUnit.test('addon/components/tooltip-toggle-override/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/tooltip-toggle-override/component.js should pass ESLint\n\n');
  });
  QUnit.test('addon/components/tooltip-warning/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/tooltip-warning/component.js should pass ESLint\n\n');
  });
  QUnit.test('addon/components/top-errors/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/top-errors/component.js should pass ESLint\n\n');
  });
  QUnit.test('addon/components/upgrade-btn/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/upgrade-btn/component.js should pass ESLint\n\n');
  });
  QUnit.test('addon/components/used-percent-gauge/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/used-percent-gauge/component.js should pass ESLint\n\n');
  });
  QUnit.test('addon/cookies/service.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/cookies/service.js should pass ESLint\n\n');
  });
  QUnit.test('addon/digital-ocean/service.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/digital-ocean/service.js should pass ESLint\n\n');
  });
  QUnit.test('addon/endpoint/service.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/endpoint/service.js should pass ESLint\n\n');
  });
  QUnit.test('addon/features/service.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/features/service.js should pass ESLint\n\n');
  });
  QUnit.test('addon/grafana/service.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/grafana/service.js should pass ESLint\n\n');
  });
  QUnit.test('addon/growl/service.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/growl/service.js should pass ESLint\n\n');
  });
  QUnit.test('addon/helpers/array-includes.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/helpers/array-includes.js should pass ESLint\n\n');
  });
  QUnit.test('addon/helpers/date-calendar.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/helpers/date-calendar.js should pass ESLint\n\n');
  });
  QUnit.test('addon/helpers/date-from-now.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/helpers/date-from-now.js should pass ESLint\n\n');
  });
  QUnit.test('addon/helpers/date-recent.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/helpers/date-recent.js should pass ESLint\n\n');
  });
  QUnit.test('addon/helpers/date-str.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/helpers/date-str.js should pass ESLint\n\n');
  });
  QUnit.test('addon/helpers/default-str.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/helpers/default-str.js should pass ESLint\n\n');
  });
  QUnit.test('addon/helpers/driver-name.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/helpers/driver-name.js should pass ESLint\n\n');
  });
  QUnit.test('addon/helpers/format-ip.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/helpers/format-ip.js should pass ESLint\n\n');
  });
  QUnit.test('addon/helpers/format-mib.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/helpers/format-mib.js should pass ESLint\n\n');
  });
  QUnit.test('addon/helpers/get-card-class.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/helpers/get-card-class.js should pass ESLint\n\n');
  });
  QUnit.test('addon/helpers/has-override.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/helpers/has-override.js should pass ESLint\n\n');
  });
  QUnit.test('addon/helpers/join-array.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/helpers/join-array.js should pass ESLint\n\n');
  });
  QUnit.test('addon/helpers/link-ssl-domain.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/helpers/link-ssl-domain.js should pass ESLint\n\n');
  });
  QUnit.test('addon/helpers/linkify.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/helpers/linkify.js should pass ESLint\n\n');
  });
  QUnit.test('addon/helpers/lower-case.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/helpers/lower-case.js should pass ESLint\n\n');
  });
  QUnit.test('addon/helpers/nl-to-br.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/helpers/nl-to-br.js should pass ESLint\n\n');
  });
  QUnit.test('addon/helpers/parse-camelcase.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/helpers/parse-camelcase.js should pass ESLint\n\n');
  });
  QUnit.test('addon/helpers/pretty-cron.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/helpers/pretty-cron.js should pass ESLint\n\n');
  });
  QUnit.test('addon/helpers/rbac-allows.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/helpers/rbac-allows.js should pass ESLint\n\n');
  });
  QUnit.test('addon/helpers/rbac-prevents.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/helpers/rbac-prevents.js should pass ESLint\n\n');
  });
  QUnit.test('addon/helpers/run-time.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/helpers/run-time.js should pass ESLint\n\n');
  });
  QUnit.test('addon/helpers/str-replace.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/helpers/str-replace.js should pass ESLint\n\n');
  });
  QUnit.test('addon/helpers/to-json.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/helpers/to-json.js should pass ESLint\n\n');
  });
  QUnit.test('addon/helpers/uc-first.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/helpers/uc-first.js should pass ESLint\n\n');
  });
  QUnit.test('addon/helpers/upper-case.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/helpers/upper-case.js should pass ESLint\n\n');
  });
  QUnit.test('addon/istio/service.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/istio/service.js should pass ESLint\n\n');
  });
  QUnit.test('addon/k3s/service.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/k3s/service.js should pass ESLint\n\n');
  });
  QUnit.test('addon/k8s/service.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/k8s/service.js should pass ESLint\n\n');
  });
  QUnit.test('addon/linode/service.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/linode/service.js should pass ESLint\n\n');
  });
  QUnit.test('addon/mixins/catalog-app.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/mixins/catalog-app.js should pass ESLint\n\n');
  });
  QUnit.test('addon/mixins/catalog-upgrade.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/mixins/catalog-upgrade.js should pass ESLint\n\n');
  });
  QUnit.test('addon/mixins/cattle-transitioning-resource.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/mixins/cattle-transitioning-resource.js should pass ESLint\n\n');
  });
  QUnit.test('addon/mixins/child-hook.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/mixins/child-hook.js should pass ESLint\n\n');
  });
  QUnit.test('addon/mixins/cluster-driver.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/mixins/cluster-driver.js should pass ESLint\n\n');
  });
  QUnit.test('addon/mixins/console.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/mixins/console.js should pass ESLint\n\n');
  });
  QUnit.test('addon/mixins/container-choices.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/mixins/container-choices.js should pass ESLint\n\n');
  });
  QUnit.test('addon/mixins/container-spark-stats.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/mixins/container-spark-stats.js should pass ESLint\n\n');
  });
  QUnit.test('addon/mixins/crud-catalog.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/mixins/crud-catalog.js should pass ESLint\n\n');
  });
  QUnit.test('addon/mixins/display-image.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/mixins/display-image.js should pass ESLint\n\n');
  });
  QUnit.test('addon/mixins/endpoint-ports.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/mixins/endpoint-ports.js should pass ESLint\n\n');
  });
  QUnit.test('addon/mixins/filter-state.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/mixins/filter-state.js should pass ESLint\n\n');
  });
  QUnit.test('addon/mixins/grafana.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/mixins/grafana.js should pass ESLint\n\n');
  });
  QUnit.test('addon/mixins/grouped-instances.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/mixins/grouped-instances.js should pass ESLint\n\n');
  });
  QUnit.test('addon/mixins/input-answers.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/mixins/input-answers.js should pass ESLint\n\n');
  });
  QUnit.test('addon/mixins/intl-placeholder.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/mixins/intl-placeholder.js should pass ESLint\n\n');
  });
  QUnit.test('addon/mixins/lazy-icon.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/mixins/lazy-icon.js should pass ESLint\n\n');
  });
  QUnit.test('addon/mixins/manage-labels.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/mixins/manage-labels.js should pass ESLint\n\n');
  });
  QUnit.test('addon/mixins/metrics.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/mixins/metrics.js should pass ESLint\n\n');
  });
  QUnit.test('addon/mixins/modal-base.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/mixins/modal-base.js should pass ESLint\n\n');
  });
  QUnit.test('addon/mixins/new-or-edit.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/mixins/new-or-edit.js should pass ESLint\n\n');
  });
  QUnit.test('addon/mixins/node-driver.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/mixins/node-driver.js should pass ESLint\n\n');
  });
  QUnit.test('addon/mixins/optionally-namespaced.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/mixins/optionally-namespaced.js should pass ESLint\n\n');
  });
  QUnit.test('addon/mixins/preload.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/mixins/preload.js should pass ESLint\n\n');
  });
  QUnit.test('addon/mixins/promise-to-cb.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/mixins/promise-to-cb.js should pass ESLint\n\n');
  });
  QUnit.test('addon/mixins/reservation-check.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/mixins/reservation-check.js should pass ESLint\n\n');
  });
  QUnit.test('addon/mixins/resource-usage.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/mixins/resource-usage.js should pass ESLint\n\n');
  });
  QUnit.test('addon/mixins/safe-style.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/mixins/safe-style.js should pass ESLint\n\n');
  });
  QUnit.test('addon/mixins/sortable-base.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/mixins/sortable-base.js should pass ESLint\n\n');
  });
  QUnit.test('addon/mixins/state-counts.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/mixins/state-counts.js should pass ESLint\n\n');
  });
  QUnit.test('addon/mixins/sticky-table-header.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/mixins/sticky-table-header.js should pass ESLint\n\n');
  });
  QUnit.test('addon/mixins/storage-class-provisioner.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/mixins/storage-class-provisioner.js should pass ESLint\n\n');
  });
  QUnit.test('addon/mixins/store-tweaks.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/mixins/store-tweaks.js should pass ESLint\n\n');
  });
  QUnit.test('addon/mixins/stripped-name.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/mixins/stripped-name.js should pass ESLint\n\n');
  });
  QUnit.test('addon/mixins/subscribe.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/mixins/subscribe.js should pass ESLint\n\n');
  });
  QUnit.test('addon/mixins/throttled-resize.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/mixins/throttled-resize.js should pass ESLint\n\n');
  });
  QUnit.test('addon/mixins/tooltip.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/mixins/tooltip.js should pass ESLint\n\n');
  });
  QUnit.test('addon/mixins/upgrade-component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/mixins/upgrade-component.js should pass ESLint\n\n');
  });
  QUnit.test('addon/mixins/upload.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/mixins/upload.js should pass ESLint\n\n');
  });
  QUnit.test('addon/mixins/view-new-edit.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/mixins/view-new-edit.js should pass ESLint\n\n');
  });
  QUnit.test('addon/mixins/volume-source.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/mixins/volume-source.js should pass ESLint\n\n');
  });
  QUnit.test('addon/modal/service.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/modal/service.js should pass ESLint\n\n');
  });
  QUnit.test('addon/oauth/service.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/oauth/service.js should pass ESLint\n\n');
  });
  QUnit.test('addon/pipeline-github/service.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/pipeline-github/service.js should pass ESLint\n\n');
  });
  QUnit.test('addon/prefs/service.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/prefs/service.js should pass ESLint\n\n');
  });
  QUnit.test('addon/resource-actions/service.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/resource-actions/service.js should pass ESLint\n\n');
  });
  QUnit.test('addon/role-template/service.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/role-template/service.js should pass ESLint\n\n');
  });
  QUnit.test('addon/saml/service.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/saml/service.js should pass ESLint\n\n');
  });
  QUnit.test('addon/scope/service.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/scope/service.js should pass ESLint\n\n');
  });
  QUnit.test('addon/security-scan-config/service.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/security-scan-config/service.js should pass ESLint\n\n');
  });
  QUnit.test('addon/session/service.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/session/service.js should pass ESLint\n\n');
  });
  QUnit.test('addon/settings/service.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/settings/service.js should pass ESLint\n\n');
  });
  QUnit.test('addon/shibboleth-auth/service.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/shibboleth-auth/service.js should pass ESLint\n\n');
  });
  QUnit.test('addon/store-reset/service.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/store-reset/service.js should pass ESLint\n\n');
  });
  QUnit.test('addon/tab-session/service.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/tab-session/service.js should pass ESLint\n\n');
  });
  QUnit.test('addon/tooltip/service.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/tooltip/service.js should pass ESLint\n\n');
  });
  QUnit.test('addon/user-language/service.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/user-language/service.js should pass ESLint\n\n');
  });
  QUnit.test('addon/user-theme/service.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/user-theme/service.js should pass ESLint\n\n');
  });
  QUnit.test('addon/utils/add-view-action.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/utils/add-view-action.js should pass ESLint\n\n');
  });
  QUnit.test('addon/utils/additional-routes.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/utils/additional-routes.js should pass ESLint\n\n');
  });
  QUnit.test('addon/utils/amazon.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/utils/amazon.js should pass ESLint\n\n');
  });
  QUnit.test('addon/utils/azure-choices.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/utils/azure-choices.js should pass ESLint\n\n');
  });
  QUnit.test('addon/utils/browser-storage.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/utils/browser-storage.js should pass ESLint\n\n');
  });
  QUnit.test('addon/utils/calculate-position.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/utils/calculate-position.js should pass ESLint\n\n');
  });
  QUnit.test('addon/utils/constants.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/utils/constants.js should pass ESLint\n\n');
  });
  QUnit.test('addon/utils/convert-yaml.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/utils/convert-yaml.js should pass ESLint\n\n');
  });
  QUnit.test('addon/utils/debounce.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/utils/debounce.js should pass ESLint\n\n');
  });
  QUnit.test('addon/utils/download-files.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/utils/download-files.js should pass ESLint\n\n');
  });
  QUnit.test('addon/utils/errors.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/utils/errors.js should pass ESLint\n\n');
  });
  QUnit.test('addon/utils/evaluate.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/utils/evaluate.js should pass ESLint\n\n');
  });
  QUnit.test('addon/utils/fetch-yaml.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/utils/fetch-yaml.js should pass ESLint\n\n');
  });
  QUnit.test('addon/utils/flat-map.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/utils/flat-map.js should pass ESLint\n\n');
  });
  QUnit.test('addon/utils/headers.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/utils/headers.js should pass ESLint\n\n');
  });
  QUnit.test('addon/utils/intl/missing-message.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/utils/intl/missing-message.js should pass ESLint\n\n');
  });
  QUnit.test('addon/utils/load-script.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/utils/load-script.js should pass ESLint\n\n');
  });
  QUnit.test('addon/utils/multi-stats.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/utils/multi-stats.js should pass ESLint\n\n');
  });
  QUnit.test('addon/utils/navigation-tree.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/utils/navigation-tree.js should pass ESLint\n\n');
  });
  QUnit.test('addon/utils/parse-externalid.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/utils/parse-externalid.js should pass ESLint\n\n');
  });
  QUnit.test('addon/utils/parse-label.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/utils/parse-label.js should pass ESLint\n\n');
  });
  QUnit.test('addon/utils/parse-port.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/utils/parse-port.js should pass ESLint\n\n');
  });
  QUnit.test('addon/utils/parse-target.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/utils/parse-target.js should pass ESLint\n\n');
  });
  QUnit.test('addon/utils/parse-unit.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/utils/parse-unit.js should pass ESLint\n\n');
  });
  QUnit.test('addon/utils/parse-uri.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/utils/parse-uri.js should pass ESLint\n\n');
  });
  QUnit.test('addon/utils/parse-version.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/utils/parse-version.js should pass ESLint\n\n');
  });
  QUnit.test('addon/utils/percent-gauge.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/utils/percent-gauge.js should pass ESLint\n\n');
  });
  QUnit.test('addon/utils/pipeline-constants.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/utils/pipeline-constants.js should pass ESLint\n\n');
  });
  QUnit.test('addon/utils/pipelineStep.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/utils/pipelineStep.js should pass ESLint\n\n');
  });
  QUnit.test('addon/utils/platform.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/utils/platform.js should pass ESLint\n\n');
  });
  QUnit.test('addon/utils/queue.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/utils/queue.js should pass ESLint\n\n');
  });
  QUnit.test('addon/utils/rackspace-choices.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/utils/rackspace-choices.js should pass ESLint\n\n');
  });
  QUnit.test('addon/utils/search-text.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/utils/search-text.js should pass ESLint\n\n');
  });
  QUnit.test('addon/utils/socket.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/utils/socket.js should pass ESLint\n\n');
  });
  QUnit.test('addon/utils/sort.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/utils/sort.js should pass ESLint\n\n');
  });
  QUnit.test('addon/utils/stateful-promise.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/utils/stateful-promise.js should pass ESLint\n\n');
  });
  QUnit.test('addon/utils/subscribe-cluster.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/utils/subscribe-cluster.js should pass ESLint\n\n');
  });
  QUnit.test('addon/utils/subscribe-global.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/utils/subscribe-global.js should pass ESLint\n\n');
  });
  QUnit.test('addon/utils/subscribe-project.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/utils/subscribe-project.js should pass ESLint\n\n');
  });
  QUnit.test('addon/utils/text-width.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/utils/text-width.js should pass ESLint\n\n');
  });
  QUnit.test('addon/utils/used-percent-gauge.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/utils/used-percent-gauge.js should pass ESLint\n\n');
  });
  QUnit.test('addon/utils/util.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/utils/util.js should pass ESLint\n\n');
  });
});
define("istio/shared/tests/app.lint-test", [], function () {
  "use strict";

  QUnit.module('ESLint | app');
  QUnit.test('app/access/service.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/access/service.js should pass ESLint\n\n');
  });
  QUnit.test('app/all-dns-records/service.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/all-dns-records/service.js should pass ESLint\n\n');
  });
  QUnit.test('app/all-storage-classes/service.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/all-storage-classes/service.js should pass ESLint\n\n');
  });
  QUnit.test('app/all-workloads/service.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/all-workloads/service.js should pass ESLint\n\n');
  });
  QUnit.test('app/amazon/util.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/amazon/util.js should pass ESLint\n\n');
  });
  QUnit.test('app/azure-ad/service.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/azure-ad/service.js should pass ESLint\n\n');
  });
  QUnit.test('app/bulk-action-handler/service.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/bulk-action-handler/service.js should pass ESLint\n\n');
  });
  QUnit.test('app/calculate-position/util.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/calculate-position/util.js should pass ESLint\n\n');
  });
  QUnit.test('app/capabilities/service.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/capabilities/service.js should pass ESLint\n\n');
  });
  QUnit.test('app/catalog/service.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/catalog/service.js should pass ESLint\n\n');
  });
  QUnit.test('app/cluster-templates/service.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/cluster-templates/service.js should pass ESLint\n\n');
  });
  QUnit.test('app/code-mirror/service.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/code-mirror/service.js should pass ESLint\n\n');
  });
  QUnit.test('app/components/accordion-list-item/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/accordion-list-item/component.js should pass ESLint\n\n');
  });
  QUnit.test('app/components/accordion-list/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/accordion-list/component.js should pass ESLint\n\n');
  });
  QUnit.test('app/components/action-menu-item/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/action-menu-item/component.js should pass ESLint\n\n');
  });
  QUnit.test('app/components/action-menu/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/action-menu/component.js should pass ESLint\n\n');
  });
  QUnit.test('app/components/advanced-section/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/advanced-section/component.js should pass ESLint\n\n');
  });
  QUnit.test('app/components/annotations-section/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/annotations-section/component.js should pass ESLint\n\n');
  });
  QUnit.test('app/components/answer-override-row/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/answer-override-row/component.js should pass ESLint\n\n');
  });
  QUnit.test('app/components/api-field/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/api-field/component.js should pass ESLint\n\n');
  });
  QUnit.test('app/components/apikey-row/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/apikey-row/component.js should pass ESLint\n\n');
  });
  QUnit.test('app/components/authorized-endpoint/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/authorized-endpoint/component.js should pass ESLint\n\n');
  });
  QUnit.test('app/components/badge-state/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/badge-state/component.js should pass ESLint\n\n');
  });
  QUnit.test('app/components/banner-message/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/banner-message/component.js should pass ESLint\n\n');
  });
  QUnit.test('app/components/btn-toggle/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/btn-toggle/component.js should pass ESLint\n\n');
  });
  QUnit.test('app/components/catalog-box/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/catalog-box/component.js should pass ESLint\n\n');
  });
  QUnit.test('app/components/catalog-index/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/catalog-index/component.js should pass ESLint\n\n');
  });
  QUnit.test('app/components/catalog-persistence-row/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/catalog-persistence-row/component.js should pass ESLint\n\n');
  });
  QUnit.test('app/components/check-box/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/check-box/component.js should pass ESLint\n\n');
  });
  QUnit.test('app/components/check-computed-override/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/check-computed-override/component.js should pass ESLint\n\n');
  });
  QUnit.test('app/components/check-override-allowed/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/check-override-allowed/component.js should pass ESLint\n\n');
  });
  QUnit.test('app/components/cluster-driver/driver-aliyunkcs/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/cluster-driver/driver-aliyunkcs/component.js should pass ESLint\n\n');
  });
  QUnit.test('app/components/cluster-driver/driver-amazoneks/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/cluster-driver/driver-amazoneks/component.js should pass ESLint\n\n');
  });
  QUnit.test('app/components/cluster-driver/driver-azureaks/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/cluster-driver/driver-azureaks/component.js should pass ESLint\n\n');
  });
  QUnit.test('app/components/cluster-driver/driver-googlegke/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/cluster-driver/driver-googlegke/component.js should pass ESLint\n\n');
  });
  QUnit.test('app/components/cluster-driver/driver-huaweicce/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/cluster-driver/driver-huaweicce/component.js should pass ESLint\n\n');
  });
  QUnit.test('app/components/cluster-driver/driver-import/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/cluster-driver/driver-import/component.js should pass ESLint\n\n');
  });
  QUnit.test('app/components/cluster-driver/driver-rke/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/cluster-driver/driver-rke/component.js should pass ESLint\n\n');
  });
  QUnit.test('app/components/cluster-driver/driver-tencenttke/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/cluster-driver/driver-tencenttke/component.js should pass ESLint\n\n');
  });
  QUnit.test('app/components/cluster-options-rke/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/cluster-options-rke/component.js should pass ESLint\n\n');
  });
  QUnit.test('app/components/cluster-ribbon-nav/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/cluster-ribbon-nav/component.js should pass ESLint\n\n');
  });
  QUnit.test('app/components/cluster-template-override-toggle/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/cluster-template-override-toggle/component.js should pass ESLint\n\n');
  });
  QUnit.test('app/components/cluster-template-question-row/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/cluster-template-question-row/component.js should pass ESLint\n\n');
  });
  QUnit.test('app/components/cluster-template-revision-upgrade-notification/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/cluster-template-revision-upgrade-notification/component.js should pass ESLint\n\n');
  });
  QUnit.test('app/components/cluster-template-row/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/cluster-template-row/component.js should pass ESLint\n\n');
  });
  QUnit.test('app/components/cluster-templates-table/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/cluster-templates-table/component.js should pass ESLint\n\n');
  });
  QUnit.test('app/components/code-block/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/code-block/component.js should pass ESLint\n\n');
  });
  QUnit.test('app/components/confirm-delete/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/confirm-delete/component.js should pass ESLint\n\n');
  });
  QUnit.test('app/components/container-shell/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/container-shell/component.js should pass ESLint\n\n');
  });
  QUnit.test('app/components/containers-header/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/containers-header/component.js should pass ESLint\n\n');
  });
  QUnit.test('app/components/copy-inline/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/copy-inline/component.js should pass ESLint\n\n');
  });
  QUnit.test('app/components/copy-to-clipboard/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/copy-to-clipboard/component.js should pass ESLint\n\n');
  });
  QUnit.test('app/components/cru-cloud-provider/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/cru-cloud-provider/component.js should pass ESLint\n\n');
  });
  QUnit.test('app/components/cru-cluster-template-questions/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/cru-cluster-template-questions/component.js should pass ESLint\n\n');
  });
  QUnit.test('app/components/cru-cluster-template/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/cru-cluster-template/component.js should pass ESLint\n\n');
  });
  QUnit.test('app/components/cru-cluster/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/cru-cluster/component.js should pass ESLint\n\n');
  });
  QUnit.test('app/components/cru-node-pools/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/cru-node-pools/component.js should pass ESLint\n\n');
  });
  QUnit.test('app/components/cru-private-registry/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/cru-private-registry/component.js should pass ESLint\n\n');
  });
  QUnit.test('app/components/custom-catalog/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/custom-catalog/component.js should pass ESLint\n\n');
  });
  QUnit.test('app/components/drain-node/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/drain-node/component.js should pass ESLint\n\n');
  });
  QUnit.test('app/components/empty-table/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/empty-table/component.js should pass ESLint\n\n');
  });
  QUnit.test('app/components/error-sub-row/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/error-sub-row/component.js should pass ESLint\n\n');
  });
  QUnit.test('app/components/field-required/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/field-required/component.js should pass ESLint\n\n');
  });
  QUnit.test('app/components/form-array/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/form-array/component.js should pass ESLint\n\n');
  });
  QUnit.test('app/components/form-auth-cloud-credential/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/form-auth-cloud-credential/component.js should pass ESLint\n\n');
  });
  QUnit.test('app/components/form-certificate-row/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/form-certificate-row/component.js should pass ESLint\n\n');
  });
  QUnit.test('app/components/form-contextual-select-array/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/form-contextual-select-array/component.js should pass ESLint\n\n');
  });
  QUnit.test('app/components/form-count/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/form-count/component.js should pass ESLint\n\n');
  });
  QUnit.test('app/components/form-engine-opts/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/form-engine-opts/component.js should pass ESLint\n\n');
  });
  QUnit.test('app/components/form-gke-taints/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/form-gke-taints/component.js should pass ESLint\n\n');
  });
  QUnit.test('app/components/form-global-resource-roles/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/form-global-resource-roles/component.js should pass ESLint\n\n');
  });
  QUnit.test('app/components/form-ingress-backends/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/form-ingress-backends/component.js should pass ESLint\n\n');
  });
  QUnit.test('app/components/form-ingress-rows/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/form-ingress-rows/component.js should pass ESLint\n\n');
  });
  QUnit.test('app/components/form-ingress-rule/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/form-ingress-rule/component.js should pass ESLint\n\n');
  });
  QUnit.test('app/components/form-key-value/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/form-key-value/component.js should pass ESLint\n\n');
  });
  QUnit.test('app/components/form-labels-annotations/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/form-labels-annotations/component.js should pass ESLint\n\n');
  });
  QUnit.test('app/components/form-match-expressions/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/form-match-expressions/component.js should pass ESLint\n\n');
  });
  QUnit.test('app/components/form-members-catalog-access/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/form-members-catalog-access/component.js should pass ESLint\n\n');
  });
  QUnit.test('app/components/form-members-global-access/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/form-members-global-access/component.js should pass ESLint\n\n');
  });
  QUnit.test('app/components/form-members/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/form-members/component.js should pass ESLint\n\n');
  });
  QUnit.test('app/components/form-name-description/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/form-name-description/component.js should pass ESLint\n\n');
  });
  QUnit.test('app/components/form-namespace/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/form-namespace/component.js should pass ESLint\n\n');
  });
  QUnit.test('app/components/form-network-config/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/form-network-config/component.js should pass ESLint\n\n');
  });
  QUnit.test('app/components/form-node-taints/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/form-node-taints/component.js should pass ESLint\n\n');
  });
  QUnit.test('app/components/form-project-targets/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/form-project-targets/component.js should pass ESLint\n\n');
  });
  QUnit.test('app/components/form-reservation/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/form-reservation/component.js should pass ESLint\n\n');
  });
  QUnit.test('app/components/form-share-member/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/form-share-member/component.js should pass ESLint\n\n');
  });
  QUnit.test('app/components/form-ssl-rows/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/form-ssl-rows/component.js should pass ESLint\n\n');
  });
  QUnit.test('app/components/form-ssl-termination/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/form-ssl-termination/component.js should pass ESLint\n\n');
  });
  QUnit.test('app/components/form-user-labels/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/form-user-labels/component.js should pass ESLint\n\n');
  });
  QUnit.test('app/components/form-value-array/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/form-value-array/component.js should pass ESLint\n\n');
  });
  QUnit.test('app/components/form-versions/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/form-versions/component.js should pass ESLint\n\n');
  });
  QUnit.test('app/components/gke-access-scope/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/gke-access-scope/component.js should pass ESLint\n\n');
  });
  QUnit.test('app/components/graph-area/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/graph-area/component.js should pass ESLint\n\n');
  });
  QUnit.test('app/components/hook-row/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/hook-row/component.js should pass ESLint\n\n');
  });
  QUnit.test('app/components/host-pod/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/host-pod/component.js should pass ESLint\n\n');
  });
  QUnit.test('app/components/host-template-aliyunecs/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/host-template-aliyunecs/component.js should pass ESLint\n\n');
  });
  QUnit.test('app/components/host-template-amazonec2/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/host-template-amazonec2/component.js should pass ESLint\n\n');
  });
  QUnit.test('app/components/host-template-azure/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/host-template-azure/component.js should pass ESLint\n\n');
  });
  QUnit.test('app/components/host-template-digitalocean/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/host-template-digitalocean/component.js should pass ESLint\n\n');
  });
  QUnit.test('app/components/host-template-exoscale/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/host-template-exoscale/component.js should pass ESLint\n\n');
  });
  QUnit.test('app/components/host-template-list/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/host-template-list/component.js should pass ESLint\n\n');
  });
  QUnit.test('app/components/host-template-other/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/host-template-other/component.js should pass ESLint\n\n');
  });
  QUnit.test('app/components/host-template-packet/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/host-template-packet/component.js should pass ESLint\n\n');
  });
  QUnit.test('app/components/host-template-rackspace/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/host-template-rackspace/component.js should pass ESLint\n\n');
  });
  QUnit.test('app/components/host-template-vmwarevsphere/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/host-template-vmwarevsphere/component.js should pass ESLint\n\n');
  });
  QUnit.test('app/components/hover-dropdown/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/hover-dropdown/component.js should pass ESLint\n\n');
  });
  QUnit.test('app/components/huawei-user-labels/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/huawei-user-labels/component.js should pass ESLint\n\n');
  });
  QUnit.test('app/components/identity-block/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/identity-block/component.js should pass ESLint\n\n');
  });
  QUnit.test('app/components/input-answer-row/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/input-answer-row/component.js should pass ESLint\n\n');
  });
  QUnit.test('app/components/input-answers/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/input-answers/component.js should pass ESLint\n\n');
  });
  QUnit.test('app/components/input-custom-answers/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/input-custom-answers/component.js should pass ESLint\n\n');
  });
  QUnit.test('app/components/input-float/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/input-float/component.js should pass ESLint\n\n');
  });
  QUnit.test('app/components/input-identity/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/input-identity/component.js should pass ESLint\n\n');
  });
  QUnit.test('app/components/input-int/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/input-int/component.js should pass ESLint\n\n');
  });
  QUnit.test('app/components/input-integer/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/input-integer/component.js should pass ESLint\n\n');
  });
  QUnit.test('app/components/input-number/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/input-number/component.js should pass ESLint\n\n');
  });
  QUnit.test('app/components/input-or-display/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/input-or-display/component.js should pass ESLint\n\n');
  });
  QUnit.test('app/components/input-paste/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/input-paste/component.js should pass ESLint\n\n');
  });
  QUnit.test('app/components/input-slider/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/input-slider/component.js should pass ESLint\n\n');
  });
  QUnit.test('app/components/input-suggest/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/input-suggest/component.js should pass ESLint\n\n');
  });
  QUnit.test('app/components/input-text-file/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/input-text-file/component.js should pass ESLint\n\n');
  });
  QUnit.test('app/components/input-url/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/input-url/component.js should pass ESLint\n\n');
  });
  QUnit.test('app/components/input-yaml/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/input-yaml/component.js should pass ESLint\n\n');
  });
  QUnit.test('app/components/k3s-cluster-info/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/k3s-cluster-info/component.js should pass ESLint\n\n');
  });
  QUnit.test('app/components/k3s-node-args/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/k3s-node-args/component.js should pass ESLint\n\n');
  });
  QUnit.test('app/components/k3s-node-env-var/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/k3s-node-env-var/component.js should pass ESLint\n\n');
  });
  QUnit.test('app/components/labels-section/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/labels-section/component.js should pass ESLint\n\n');
  });
  QUnit.test('app/components/language-dropdown/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/language-dropdown/component.js should pass ESLint\n\n');
  });
  QUnit.test('app/components/link-to-as-attrs/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/link-to-as-attrs/component.js should pass ESLint\n\n');
  });
  QUnit.test('app/components/link-to-cluster-driver/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/link-to-cluster-driver/component.js should pass ESLint\n\n');
  });
  QUnit.test('app/components/marked-down/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/marked-down/component.js should pass ESLint\n\n');
  });
  QUnit.test('app/components/metrics-action/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/metrics-action/component.js should pass ESLint\n\n');
  });
  QUnit.test('app/components/metrics-graph/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/metrics-graph/component.js should pass ESLint\n\n');
  });
  QUnit.test('app/components/metrics-summary/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/metrics-summary/component.js should pass ESLint\n\n');
  });
  QUnit.test('app/components/modal-add-custom-roles/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/modal-add-custom-roles/component.js should pass ESLint\n\n');
  });
  QUnit.test('app/components/modal-confirm-deactivate/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/modal-confirm-deactivate/component.js should pass ESLint\n\n');
  });
  QUnit.test('app/components/modal-confirm-yaml-switch/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/modal-confirm-yaml-switch/component.js should pass ESLint\n\n');
  });
  QUnit.test('app/components/modal-container-stop/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/modal-container-stop/component.js should pass ESLint\n\n');
  });
  QUnit.test('app/components/modal-delete-eks-cluster/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/modal-delete-eks-cluster/component.js should pass ESLint\n\n');
  });
  QUnit.test('app/components/modal-edit-catalog/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/modal-edit-catalog/component.js should pass ESLint\n\n');
  });
  QUnit.test('app/components/modal-edit-cluster-template/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/modal-edit-cluster-template/component.js should pass ESLint\n\n');
  });
  QUnit.test('app/components/modal-edit-driver/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/modal-edit-driver/component.js should pass ESLint\n\n');
  });
  QUnit.test('app/components/modal-edit-user/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/modal-edit-user/component.js should pass ESLint\n\n');
  });
  QUnit.test('app/components/modal-istio-yaml/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/modal-istio-yaml/component.js should pass ESLint\n\n');
  });
  QUnit.test('app/components/modal-move-namespace/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/modal-move-namespace/component.js should pass ESLint\n\n');
  });
  QUnit.test('app/components/modal-root/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/modal-root/component.js should pass ESLint\n\n');
  });
  QUnit.test('app/components/modal-save-rke-template/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/modal-save-rke-template/component.js should pass ESLint\n\n');
  });
  QUnit.test('app/components/modal-shell/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/modal-shell/component.js should pass ESLint\n\n');
  });
  QUnit.test('app/components/modal-yaml/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/modal-yaml/component.js should pass ESLint\n\n');
  });
  QUnit.test('app/components/multi-container-stats/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/multi-container-stats/component.js should pass ESLint\n\n');
  });
  QUnit.test('app/components/namespace-group/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/namespace-group/component.js should pass ESLint\n\n');
  });
  QUnit.test('app/components/new-select/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/new-select/component.js should pass ESLint\n\n');
  });
  QUnit.test('app/components/node-ip/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/node-ip/component.js should pass ESLint\n\n');
  });
  QUnit.test('app/components/node-pool-row/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/node-pool-row/component.js should pass ESLint\n\n');
  });
  QUnit.test('app/components/node-taints/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/node-taints/component.js should pass ESLint\n\n');
  });
  QUnit.test('app/components/outside-click/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/outside-click/component.js should pass ESLint\n\n');
  });
  QUnit.test('app/components/page-numbers/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/page-numbers/component.js should pass ESLint\n\n');
  });
  QUnit.test('app/components/percent-gauge/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/percent-gauge/component.js should pass ESLint\n\n');
  });
  QUnit.test('app/components/pretty-json/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/pretty-json/component.js should pass ESLint\n\n');
  });
  QUnit.test('app/components/principal-search/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/principal-search/component.js should pass ESLint\n\n');
  });
  QUnit.test('app/components/progress-bar/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/progress-bar/component.js should pass ESLint\n\n');
  });
  QUnit.test('app/components/project-member-row/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/project-member-row/component.js should pass ESLint\n\n');
  });
  QUnit.test('app/components/radio-button/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/radio-button/component.js should pass ESLint\n\n');
  });
  QUnit.test('app/components/resource-condition-list/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/resource-condition-list/component.js should pass ESLint\n\n');
  });
  QUnit.test('app/components/resource-event-list/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/resource-event-list/component.js should pass ESLint\n\n');
  });
  QUnit.test('app/components/save-cancel/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/save-cancel/component.js should pass ESLint\n\n');
  });
  QUnit.test('app/components/scheduling-toleration/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/scheduling-toleration/component.js should pass ESLint\n\n');
  });
  QUnit.test('app/components/schema/input-boolean/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/schema/input-boolean/component.js should pass ESLint\n\n');
  });
  QUnit.test('app/components/schema/input-certificate/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/schema/input-certificate/component.js should pass ESLint\n\n');
  });
  QUnit.test('app/components/schema/input-config-map/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/schema/input-config-map/component.js should pass ESLint\n\n');
  });
  QUnit.test('app/components/schema/input-container/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/schema/input-container/component.js should pass ESLint\n\n');
  });
  QUnit.test('app/components/schema/input-date/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/schema/input-date/component.js should pass ESLint\n\n');
  });
  QUnit.test('app/components/schema/input-dns-record/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/schema/input-dns-record/component.js should pass ESLint\n\n');
  });
  QUnit.test('app/components/schema/input-enum/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/schema/input-enum/component.js should pass ESLint\n\n');
  });
  QUnit.test('app/components/schema/input-float/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/schema/input-float/component.js should pass ESLint\n\n');
  });
  QUnit.test('app/components/schema/input-hostname/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/schema/input-hostname/component.js should pass ESLint\n\n');
  });
  QUnit.test('app/components/schema/input-int/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/schema/input-int/component.js should pass ESLint\n\n');
  });
  QUnit.test('app/components/schema/input-istiohost/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/schema/input-istiohost/component.js should pass ESLint\n\n');
  });
  QUnit.test('app/components/schema/input-masked/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/schema/input-masked/component.js should pass ESLint\n\n');
  });
  QUnit.test('app/components/schema/input-multiline/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/schema/input-multiline/component.js should pass ESLint\n\n');
  });
  QUnit.test('app/components/schema/input-password/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/schema/input-password/component.js should pass ESLint\n\n');
  });
  QUnit.test('app/components/schema/input-pvc/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/schema/input-pvc/component.js should pass ESLint\n\n');
  });
  QUnit.test('app/components/schema/input-relative-service/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/schema/input-relative-service/component.js should pass ESLint\n\n');
  });
  QUnit.test('app/components/schema/input-secret/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/schema/input-secret/component.js should pass ESLint\n\n');
  });
  QUnit.test('app/components/schema/input-storageclass/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/schema/input-storageclass/component.js should pass ESLint\n\n');
  });
  QUnit.test('app/components/schema/input-string/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/schema/input-string/component.js should pass ESLint\n\n');
  });
  QUnit.test('app/components/schema/input-workload/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/schema/input-workload/component.js should pass ESLint\n\n');
  });
  QUnit.test('app/components/search-text/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/search-text/component.js should pass ESLint\n\n');
  });
  QUnit.test('app/components/searchable-select/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/searchable-select/component.js should pass ESLint\n\n');
  });
  QUnit.test('app/components/select-value-check/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/select-value-check/component.js should pass ESLint\n\n');
  });
  QUnit.test('app/components/settings/danger-zone/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/settings/danger-zone/component.js should pass ESLint\n\n');
  });
  QUnit.test('app/components/settings/host-registration/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/settings/host-registration/component.js should pass ESLint\n\n');
  });
  QUnit.test('app/components/settings/settings-header/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/settings/settings-header/component.js should pass ESLint\n\n');
  });
  QUnit.test('app/components/share-member-row/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/share-member-row/component.js should pass ESLint\n\n');
  });
  QUnit.test('app/components/shortcut-key/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/shortcut-key/component.js should pass ESLint\n\n');
  });
  QUnit.test('app/components/sortable-table/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/sortable-table/component.js should pass ESLint\n\n');
  });
  QUnit.test('app/components/sortable-thead/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/sortable-thead/component.js should pass ESLint\n\n');
  });
  QUnit.test('app/components/storage-class/provisioner-aws-ebs/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/storage-class/provisioner-aws-ebs/component.js should pass ESLint\n\n');
  });
  QUnit.test('app/components/storage-class/provisioner-azure-disk/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/storage-class/provisioner-azure-disk/component.js should pass ESLint\n\n');
  });
  QUnit.test('app/components/storage-class/provisioner-azure-file/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/storage-class/provisioner-azure-file/component.js should pass ESLint\n\n');
  });
  QUnit.test('app/components/storage-class/provisioner-cinder/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/storage-class/provisioner-cinder/component.js should pass ESLint\n\n');
  });
  QUnit.test('app/components/storage-class/provisioner-gce-pd/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/storage-class/provisioner-gce-pd/component.js should pass ESLint\n\n');
  });
  QUnit.test('app/components/storage-class/provisioner-generic/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/storage-class/provisioner-generic/component.js should pass ESLint\n\n');
  });
  QUnit.test('app/components/storage-class/provisioner-glusterfs/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/storage-class/provisioner-glusterfs/component.js should pass ESLint\n\n');
  });
  QUnit.test('app/components/storage-class/provisioner-local-storage/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/storage-class/provisioner-local-storage/component.js should pass ESLint\n\n');
  });
  QUnit.test('app/components/storage-class/provisioner-longhorn/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/storage-class/provisioner-longhorn/component.js should pass ESLint\n\n');
  });
  QUnit.test('app/components/storage-class/provisioner-portworx-volume/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/storage-class/provisioner-portworx-volume/component.js should pass ESLint\n\n');
  });
  QUnit.test('app/components/storage-class/provisioner-quobyte/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/storage-class/provisioner-quobyte/component.js should pass ESLint\n\n');
  });
  QUnit.test('app/components/storage-class/provisioner-rbd/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/storage-class/provisioner-rbd/component.js should pass ESLint\n\n');
  });
  QUnit.test('app/components/storage-class/provisioner-scaleio/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/storage-class/provisioner-scaleio/component.js should pass ESLint\n\n');
  });
  QUnit.test('app/components/storage-class/provisioner-storageos/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/storage-class/provisioner-storageos/component.js should pass ESLint\n\n');
  });
  QUnit.test('app/components/storage-class/provisioner-vsphere-volume/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/storage-class/provisioner-vsphere-volume/component.js should pass ESLint\n\n');
  });
  QUnit.test('app/components/table-labels/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/table-labels/component.js should pass ESLint\n\n');
  });
  QUnit.test('app/components/textarea-autogrow/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/textarea-autogrow/component.js should pass ESLint\n\n');
  });
  QUnit.test('app/components/tooltip-action-menu/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/tooltip-action-menu/component.js should pass ESLint\n\n');
  });
  QUnit.test('app/components/tooltip-basic/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/tooltip-basic/component.js should pass ESLint\n\n');
  });
  QUnit.test('app/components/tooltip-element/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/tooltip-element/component.js should pass ESLint\n\n');
  });
  QUnit.test('app/components/tooltip-expiring/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/tooltip-expiring/component.js should pass ESLint\n\n');
  });
  QUnit.test('app/components/tooltip-toggle-override/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/tooltip-toggle-override/component.js should pass ESLint\n\n');
  });
  QUnit.test('app/components/tooltip-warning/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/tooltip-warning/component.js should pass ESLint\n\n');
  });
  QUnit.test('app/components/top-errors/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/top-errors/component.js should pass ESLint\n\n');
  });
  QUnit.test('app/components/upgrade-btn/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/upgrade-btn/component.js should pass ESLint\n\n');
  });
  QUnit.test('app/components/used-percent-gauge/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/used-percent-gauge/component.js should pass ESLint\n\n');
  });
  QUnit.test('app/cookies/service.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/cookies/service.js should pass ESLint\n\n');
  });
  QUnit.test('app/digital-ocean/service.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/digital-ocean/service.js should pass ESLint\n\n');
  });
  QUnit.test('app/endpoint/service.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/endpoint/service.js should pass ESLint\n\n');
  });
  QUnit.test('app/features/service.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/features/service.js should pass ESLint\n\n');
  });
  QUnit.test('app/grafana/service.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/grafana/service.js should pass ESLint\n\n');
  });
  QUnit.test('app/growl/service.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/growl/service.js should pass ESLint\n\n');
  });
  QUnit.test('app/helpers/array-includes.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/helpers/array-includes.js should pass ESLint\n\n');
  });
  QUnit.test('app/helpers/date-calendar.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/helpers/date-calendar.js should pass ESLint\n\n');
  });
  QUnit.test('app/helpers/date-from-now.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/helpers/date-from-now.js should pass ESLint\n\n');
  });
  QUnit.test('app/helpers/date-recent.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/helpers/date-recent.js should pass ESLint\n\n');
  });
  QUnit.test('app/helpers/date-str.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/helpers/date-str.js should pass ESLint\n\n');
  });
  QUnit.test('app/helpers/default-str.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/helpers/default-str.js should pass ESLint\n\n');
  });
  QUnit.test('app/helpers/driver-name.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/helpers/driver-name.js should pass ESLint\n\n');
  });
  QUnit.test('app/helpers/format-ip.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/helpers/format-ip.js should pass ESLint\n\n');
  });
  QUnit.test('app/helpers/format-mib.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/helpers/format-mib.js should pass ESLint\n\n');
  });
  QUnit.test('app/helpers/format-si.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/helpers/format-si.js should pass ESLint\n\n');
  });
  QUnit.test('app/helpers/get-card-class.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/helpers/get-card-class.js should pass ESLint\n\n');
  });
  QUnit.test('app/helpers/has-override.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/helpers/has-override.js should pass ESLint\n\n');
  });
  QUnit.test('app/helpers/join-array.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/helpers/join-array.js should pass ESLint\n\n');
  });
  QUnit.test('app/helpers/link-ssl-domain.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/helpers/link-ssl-domain.js should pass ESLint\n\n');
  });
  QUnit.test('app/helpers/linkify.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/helpers/linkify.js should pass ESLint\n\n');
  });
  QUnit.test('app/helpers/lower-case.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/helpers/lower-case.js should pass ESLint\n\n');
  });
  QUnit.test('app/helpers/nl-to-br.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/helpers/nl-to-br.js should pass ESLint\n\n');
  });
  QUnit.test('app/helpers/parse-camelcase.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/helpers/parse-camelcase.js should pass ESLint\n\n');
  });
  QUnit.test('app/helpers/pretty-cron.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/helpers/pretty-cron.js should pass ESLint\n\n');
  });
  QUnit.test('app/helpers/rbac-allows.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/helpers/rbac-allows.js should pass ESLint\n\n');
  });
  QUnit.test('app/helpers/rbac-prevents.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/helpers/rbac-prevents.js should pass ESLint\n\n');
  });
  QUnit.test('app/helpers/run-time.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/helpers/run-time.js should pass ESLint\n\n');
  });
  QUnit.test('app/helpers/str-replace.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/helpers/str-replace.js should pass ESLint\n\n');
  });
  QUnit.test('app/helpers/t.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/helpers/t.js should pass ESLint\n\n');
  });
  QUnit.test('app/helpers/to-json.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/helpers/to-json.js should pass ESLint\n\n');
  });
  QUnit.test('app/helpers/uc-first.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/helpers/uc-first.js should pass ESLint\n\n');
  });
  QUnit.test('app/helpers/upper-case.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/helpers/upper-case.js should pass ESLint\n\n');
  });
  QUnit.test('app/host/service.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/host/service.js should pass ESLint\n\n');
  });
  QUnit.test('app/istio/service.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/istio/service.js should pass ESLint\n\n');
  });
  QUnit.test('app/k3s/service.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/k3s/service.js should pass ESLint\n\n');
  });
  QUnit.test('app/k8s/service.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/k8s/service.js should pass ESLint\n\n');
  });
  QUnit.test('app/linode/service.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/linode/service.js should pass ESLint\n\n');
  });
  QUnit.test('app/mixins/cattle-transitioning-resource.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/mixins/cattle-transitioning-resource.js should pass ESLint\n\n');
  });
  QUnit.test('app/mixins/console.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/mixins/console.js should pass ESLint\n\n');
  });
  QUnit.test('app/mixins/container-choices.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/mixins/container-choices.js should pass ESLint\n\n');
  });
  QUnit.test('app/mixins/container-spark-stats.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/mixins/container-spark-stats.js should pass ESLint\n\n');
  });
  QUnit.test('app/mixins/endpoint-ports.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/mixins/endpoint-ports.js should pass ESLint\n\n');
  });
  QUnit.test('app/mixins/filter-state.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/mixins/filter-state.js should pass ESLint\n\n');
  });
  QUnit.test('app/mixins/grafana.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/mixins/grafana.js should pass ESLint\n\n');
  });
  QUnit.test('app/mixins/grouped-instances.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/mixins/grouped-instances.js should pass ESLint\n\n');
  });
  QUnit.test('app/mixins/intl-placeholder.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/mixins/intl-placeholder.js should pass ESLint\n\n');
  });
  QUnit.test('app/mixins/lazy-icon.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/mixins/lazy-icon.js should pass ESLint\n\n');
  });
  QUnit.test('app/mixins/manage-labels.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/mixins/manage-labels.js should pass ESLint\n\n');
  });
  QUnit.test('app/mixins/metrics.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/mixins/metrics.js should pass ESLint\n\n');
  });
  QUnit.test('app/mixins/modal-base.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/mixins/modal-base.js should pass ESLint\n\n');
  });
  QUnit.test('app/mixins/new-or-edit.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/mixins/new-or-edit.js should pass ESLint\n\n');
  });
  QUnit.test('app/mixins/preload.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/mixins/preload.js should pass ESLint\n\n');
  });
  QUnit.test('app/mixins/promise-to-cb.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/mixins/promise-to-cb.js should pass ESLint\n\n');
  });
  QUnit.test('app/mixins/safe-style.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/mixins/safe-style.js should pass ESLint\n\n');
  });
  QUnit.test('app/mixins/sortable-base.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/mixins/sortable-base.js should pass ESLint\n\n');
  });
  QUnit.test('app/mixins/state-counts.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/mixins/state-counts.js should pass ESLint\n\n');
  });
  QUnit.test('app/mixins/sticky-table-header.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/mixins/sticky-table-header.js should pass ESLint\n\n');
  });
  QUnit.test('app/mixins/store-tweaks.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/mixins/store-tweaks.js should pass ESLint\n\n');
  });
  QUnit.test('app/mixins/stripped-name.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/mixins/stripped-name.js should pass ESLint\n\n');
  });
  QUnit.test('app/mixins/subscribe.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/mixins/subscribe.js should pass ESLint\n\n');
  });
  QUnit.test('app/mixins/throttled-resize.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/mixins/throttled-resize.js should pass ESLint\n\n');
  });
  QUnit.test('app/mixins/tooltip.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/mixins/tooltip.js should pass ESLint\n\n');
  });
  QUnit.test('app/mixins/upgrade-component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/mixins/upgrade-component.js should pass ESLint\n\n');
  });
  QUnit.test('app/mixins/upload.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/mixins/upload.js should pass ESLint\n\n');
  });
  QUnit.test('app/modal/service.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/modal/service.js should pass ESLint\n\n');
  });
  QUnit.test('app/oauth/service.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/oauth/service.js should pass ESLint\n\n');
  });
  QUnit.test('app/pipeline-github/service.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/pipeline-github/service.js should pass ESLint\n\n');
  });
  QUnit.test('app/prefs/service.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/prefs/service.js should pass ESLint\n\n');
  });
  QUnit.test('app/resource-actions/service.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/resource-actions/service.js should pass ESLint\n\n');
  });
  QUnit.test('app/role-template/service.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/role-template/service.js should pass ESLint\n\n');
  });
  QUnit.test('app/saml/service.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/saml/service.js should pass ESLint\n\n');
  });
  QUnit.test('app/scope/service.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/scope/service.js should pass ESLint\n\n');
  });
  QUnit.test('app/security-scan-config/service.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/security-scan-config/service.js should pass ESLint\n\n');
  });
  QUnit.test('app/session/service.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/session/service.js should pass ESLint\n\n');
  });
  QUnit.test('app/settings/service.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/settings/service.js should pass ESLint\n\n');
  });
  QUnit.test('app/shibboleth-auth/service.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/shibboleth-auth/service.js should pass ESLint\n\n');
  });
  QUnit.test('app/store-reset/service.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/store-reset/service.js should pass ESLint\n\n');
  });
  QUnit.test('app/tab-session/service.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/tab-session/service.js should pass ESLint\n\n');
  });
  QUnit.test('app/tooltip/service.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/tooltip/service.js should pass ESLint\n\n');
  });
  QUnit.test('app/user-language/service.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/user-language/service.js should pass ESLint\n\n');
  });
  QUnit.test('app/user-theme/service.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/user-theme/service.js should pass ESLint\n\n');
  });
  QUnit.test('app/utils/add-view-action.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/utils/add-view-action.js should pass ESLint\n\n');
  });
  QUnit.test('app/utils/additional-routes.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/utils/additional-routes.js should pass ESLint\n\n');
  });
  QUnit.test('app/utils/azure-choices.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/utils/azure-choices.js should pass ESLint\n\n');
  });
  QUnit.test('app/utils/browser-storage.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/utils/browser-storage.js should pass ESLint\n\n');
  });
  QUnit.test('app/utils/constants.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/utils/constants.js should pass ESLint\n\n');
  });
  QUnit.test('app/utils/convert-yaml.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/utils/convert-yaml.js should pass ESLint\n\n');
  });
  QUnit.test('app/utils/debounce.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/utils/debounce.js should pass ESLint\n\n');
  });
  QUnit.test('app/utils/download-files.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/utils/download-files.js should pass ESLint\n\n');
  });
  QUnit.test('app/utils/errors.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/utils/errors.js should pass ESLint\n\n');
  });
  QUnit.test('app/utils/fetch-yaml.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/utils/fetch-yaml.js should pass ESLint\n\n');
  });
  QUnit.test('app/utils/flat-map.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/utils/flat-map.js should pass ESLint\n\n');
  });
  QUnit.test('app/utils/group-compound-layout.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/utils/group-compound-layout.js should pass ESLint\n\n');
  });
  QUnit.test('app/utils/intl/missing-message.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/utils/intl/missing-message.js should pass ESLint\n\n');
  });
  QUnit.test('app/utils/load-script.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/utils/load-script.js should pass ESLint\n\n');
  });
  QUnit.test('app/utils/multi-stats.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/utils/multi-stats.js should pass ESLint\n\n');
  });
  QUnit.test('app/utils/navigation-tree.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/utils/navigation-tree.js should pass ESLint\n\n');
  });
  QUnit.test('app/utils/parse-externalid.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/utils/parse-externalid.js should pass ESLint\n\n');
  });
  QUnit.test('app/utils/parse-port.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/utils/parse-port.js should pass ESLint\n\n');
  });
  QUnit.test('app/utils/parse-target.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/utils/parse-target.js should pass ESLint\n\n');
  });
  QUnit.test('app/utils/parse-unit.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/utils/parse-unit.js should pass ESLint\n\n');
  });
  QUnit.test('app/utils/parse-uri.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/utils/parse-uri.js should pass ESLint\n\n');
  });
  QUnit.test('app/utils/parse-version.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/utils/parse-version.js should pass ESLint\n\n');
  });
  QUnit.test('app/utils/percent-gauge.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/utils/percent-gauge.js should pass ESLint\n\n');
  });
  QUnit.test('app/utils/pipeline-constants.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/utils/pipeline-constants.js should pass ESLint\n\n');
  });
  QUnit.test('app/utils/pipelineStep.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/utils/pipelineStep.js should pass ESLint\n\n');
  });
  QUnit.test('app/utils/platform.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/utils/platform.js should pass ESLint\n\n');
  });
  QUnit.test('app/utils/queue.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/utils/queue.js should pass ESLint\n\n');
  });
  QUnit.test('app/utils/rackspace-choices.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/utils/rackspace-choices.js should pass ESLint\n\n');
  });
  QUnit.test('app/utils/search-text.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/utils/search-text.js should pass ESLint\n\n');
  });
  QUnit.test('app/utils/socket.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/utils/socket.js should pass ESLint\n\n');
  });
  QUnit.test('app/utils/sort.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/utils/sort.js should pass ESLint\n\n');
  });
  QUnit.test('app/utils/traffic-renderer.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/utils/traffic-renderer.js should pass ESLint\n\n');
  });
  QUnit.test('app/utils/used-percent-gauge.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/utils/used-percent-gauge.js should pass ESLint\n\n');
  });
  QUnit.test('app/utils/util.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/utils/util.js should pass ESLint\n\n');
  });
});
define("istio/shared/tests/templates.template.lint-test", [], function () {
  "use strict";
});
define.alias("shared/shibboleth-auth/service", "istio/shibboleth-auth/service");
define.alias("shared/store-reset/service", "istio/store-reset/service");
define.alias("shared/tab-session/service", "istio/tab-session/service");
define("istio/templates/application", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "mezJIL8t",
    "block": "{\"symbols\":[],\"statements\":[[1,[22,\"outlet\"],false]],\"hasEval\":false}",
    "meta": {
      "moduleName": "istio/templates/application.hbs"
    }
  });

  _exports.default = _default;
});
define.alias("shared/tooltip/service", "istio/tooltip/service");
define.alias("liquid-fire/transitions/cross-fade", "istio/transitions/cross-fade");
define.alias("liquid-fire/transitions/default", "istio/transitions/default");
define.alias("liquid-fire/transitions/explode", "istio/transitions/explode");
define.alias("liquid-fire/transitions/fade", "istio/transitions/fade");
define.alias("liquid-fire/transitions/flex-grow", "istio/transitions/flex-grow");
define.alias("liquid-fire/transitions/fly-to", "istio/transitions/fly-to");
define.alias("liquid-fire/transitions/move-over", "istio/transitions/move-over");
define.alias("liquid-fire/transitions/scale", "istio/transitions/scale");
define.alias("liquid-fire/transitions/scroll-then", "istio/transitions/scroll-then");
define.alias("liquid-fire/transitions/to-down", "istio/transitions/to-down");
define.alias("liquid-fire/transitions/to-left", "istio/transitions/to-left");
define.alias("liquid-fire/transitions/to-right", "istio/transitions/to-right");
define.alias("liquid-fire/transitions/to-up", "istio/transitions/to-up");
define.alias("liquid-fire/transitions/wait", "istio/transitions/wait");
define.alias("shared/user-language/service", "istio/user-language/service");
define.alias("shared/user-theme/service", "istio/user-theme/service");
define.alias("shared/utils/add-view-action", "istio/utils/add-view-action");
define.alias("shared/utils/additional-routes", "istio/utils/additional-routes");
define.alias("shared/utils/azure-choices", "istio/utils/azure-choices");
define.alias("shared/utils/browser-storage", "istio/utils/browser-storage");
define.alias("shared/utils/constants", "istio/utils/constants");
define.alias("shared/utils/convert-yaml", "istio/utils/convert-yaml");
define.alias("shared/utils/debounce", "istio/utils/debounce");
define.alias("shared/utils/download-files", "istio/utils/download-files");
define.alias("shared/utils/errors", "istio/utils/errors");
define.alias("shared/utils/fetch-yaml", "istio/utils/fetch-yaml");
define("istio/utils/fetch", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = '@rancher/ember-api-store/utils/fetch';
  _exports.default = _default;
});
define.alias("shared/utils/flat-map", "istio/utils/flat-map");
define.alias("shared/utils/group-compound-layout", "istio/utils/group-compound-layout");
define.alias("shared/utils/intl/missing-message", "istio/utils/intl/missing-message");
define.alias("shared/utils/load-script", "istio/utils/load-script");
define.alias("shared/utils/multi-stats", "istio/utils/multi-stats");
define.alias("shared/utils/navigation-tree", "istio/utils/navigation-tree");
define.alias("shared/utils/parse-externalid", "istio/utils/parse-externalid");
define.alias("shared/utils/parse-port", "istio/utils/parse-port");
define.alias("shared/utils/parse-target", "istio/utils/parse-target");
define.alias("shared/utils/parse-unit", "istio/utils/parse-unit");
define.alias("shared/utils/parse-uri", "istio/utils/parse-uri");
define.alias("shared/utils/parse-version", "istio/utils/parse-version");
define.alias("shared/utils/percent-gauge", "istio/utils/percent-gauge");
define.alias("shared/utils/pipelineStep", "istio/utils/pipeline-constants");
define.alias("shared/utils/pipelineStep", "istio/utils/pipelineStep");
define.alias("shared/utils/platform", "istio/utils/platform");
define.alias("shared/utils/queue", "istio/utils/queue");
define.alias("shared/utils/rackspace-choices", "istio/utils/rackspace-choices");
define.alias("shared/utils/search-text", "istio/utils/search-text");
define.alias("shared/utils/socket", "istio/utils/socket");
define.alias("shared/utils/sort", "istio/utils/sort");
define.alias("shared/utils/traffic-renderer", "istio/utils/traffic-renderer");
define.alias("shared/utils/used-percent-gauge", "istio/utils/used-percent-gauge");
define.alias("shared/utils/util", "istio/utils/util");
define("istio/virtual-service/detail/edit/controller", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Controller.extend({
    actions: {
      back: function back() {
        return this.transitionToRoute('project-istio.virtual-services.index');
      },
      cancel: function cancel() {
        this.send('goToPrevious');
      }
    }
  });

  _exports.default = _default;
});
define("istio/virtual-service/detail/edit/route", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Route.extend({
    model: function model() {
      var original = this.modelFor('virtual-service.detail').virtualService;
      return Ember.RSVP.hash({
        virtualService: original.clone()
      });
    }
  });

  _exports.default = _default;
});
define("istio/virtual-service/detail/edit/template", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "OzIo5Dt4",
    "block": "{\"symbols\":[],\"statements\":[[1,[28,\"cru-virtual-service\",null,[[\"model\",\"mode\",\"done\",\"cancel\"],[[24,[\"model\",\"virtualService\"]],\"edit\",[28,\"action\",[[23,0,[]],\"back\"],null],[28,\"action\",[[23,0,[]],\"cancel\"],null]]]],false]],\"hasEval\":false}",
    "meta": {
      "moduleName": "istio/virtual-service/detail/edit/template.hbs"
    }
  });

  _exports.default = _default;
});
define("istio/virtual-service/detail/index/template", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "RquW7ReG",
    "block": "{\"symbols\":[],\"statements\":[[1,[28,\"cru-virtual-service\",null,[[\"model\",\"mode\"],[[24,[\"model\",\"virtualService\"]],\"view\"]]],false]],\"hasEval\":false}",
    "meta": {
      "moduleName": "istio/virtual-service/detail/index/template.hbs"
    }
  });

  _exports.default = _default;
});
define("istio/virtual-service/detail/route", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Route.extend({
    model: function model(params) {
      var store = Ember.get(this, 'store');
      return Ember.RSVP.hash({
        virtualService: store.find('virtualservice', params.id),
        gateways: store.find('gateway')
      });
    }
  });

  _exports.default = _default;
});
define("istio/virtual-service/new/controller", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Controller.extend({
    queryParams: ['id'],
    actions: {
      done: function done() {
        return this.transitionToRoute('project-istio.virtual-services.index');
      },
      cancel: function cancel() {
        this.send('goToPrevious');
      }
    }
  });

  _exports.default = _default;
});
define("istio/virtual-service/new/route", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Route.extend({
    model: function model(params) {
      var store = Ember.get(this, 'store');
      var deps = {
        gateways: store.find('gateway')
      };

      if (Ember.get(params, 'id')) {
        deps['existing'] = store.find('virtualservice', params.id);
      }

      return Ember.RSVP.hash(deps, 'Load dependencies').then(function (hash) {
        var virtualService;
        var namespaceId = params.namespaceId;
        var namespace;

        if (namespaceId) {
          namespace = store.getById('namespace', namespaceId);
        } // If the namespace doesn't exist or isn't set, pick default


        if (!namespace) {
          namespace = store.all('namespace').findBy('isDefault', true);

          if (namespace) {
            namespaceId = Ember.get(namespace, 'id');
          }
        }

        if (hash.existing) {
          virtualService = hash.existing.cloneForNew();
          delete hash.existing;
        } else {
          virtualService = store.createRecord({
            type: 'virtualservice',
            namespaceId: namespaceId,
            http: [],
            gateways: [],
            hosts: []
          });
        }

        hash.virtualService = virtualService;
        return hash;
      });
    },
    resetController: function resetController(controller, isExisting) {
      if (isExisting) {
        Ember.setProperties(controller, {
          namespaceId: null,
          id: null
        });
      }
    }
  });

  _exports.default = _default;
});
define("istio/virtual-service/new/template", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "AyaLRhbp",
    "block": "{\"symbols\":[],\"statements\":[[1,[28,\"cru-virtual-service\",null,[[\"model\",\"mode\",\"done\",\"cancel\"],[[24,[\"model\",\"virtualService\"]],\"new\",[28,\"action\",[[23,0,[]],\"done\"],null],[28,\"action\",[[23,0,[]],\"cancel\"],null]]]],false]],\"hasEval\":false}",
    "meta": {
      "moduleName": "istio/virtual-service/new/template.hbs"
    }
  });

  _exports.default = _default;
});//# sourceMappingURL=engine.map
