(function () {
  /* ── colour palette ─────────────────────────────────────── */
  var C = { knitting: '#FF6B6B', bags: '#00B4D8', quilting: '#9B5DE5' };

  /* ── weekly class schedule (placeholder days / times) ───── */
  /* dow: 1=Mon 2=Tue 3=Wed 4=Thu 5=Fri */
  var SCHEDULE = [
    { dow: 1, time: '6:00 PM',  craft: 'Knitting',   tier: 'Little Leaguer', color: C.knitting },
    { dow: 1, time: '7:30 PM',  craft: 'Quilting',    tier: 'Little Leaguer', color: C.quilting },
    { dow: 2, time: '6:00 PM',  craft: 'Knitting',   tier: 'All-Star',        color: C.knitting },
    { dow: 2, time: '7:30 PM',  craft: 'Bag Making', tier: 'Little Leaguer', color: C.bags     },
    { dow: 3, time: '6:00 PM',  craft: 'Bag Making', tier: 'All-Star',        color: C.bags     },
    { dow: 3, time: '7:30 PM',  craft: 'Quilting',   tier: 'All-Star',        color: C.quilting },
    { dow: 4, time: '6:00 PM',  craft: 'Knitting',   tier: 'GOAT',            color: C.knitting },
    { dow: 4, time: '7:30 PM',  craft: 'Quilting',   tier: 'GOAT',            color: C.quilting },
    { dow: 5, time: '6:00 PM',  craft: 'Bag Making', tier: 'GOAT',            color: C.bags     },
  ];

  /* ── holiday helpers ────────────────────────────────────── */
  function nthDow(year, month, nth, dow) {
    /* nth = 1-4, or -1 for "last"; dow = 0 Sun … 6 Sat; month 0-indexed */
    if (nth === -1) {
      var last = new Date(year, month + 1, 0);
      var diff = (last.getDay() - dow + 7) % 7;
      return new Date(year, month, last.getDate() - diff);
    }
    var first = new Date(year, month, 1);
    var d = (dow - first.getDay() + 7) % 7;
    return new Date(year, month, 1 + d + (nth - 1) * 7);
  }

  function buildHolidayMap(year) {
    var map = {};
    function add(date, name) {
      var k = date.getFullYear() + '-' + date.getMonth() + '-' + date.getDate();
      (map[k] = map[k] || []).push(name);
    }
    /* fixed */
    add(new Date(year,  0,  1), "New Year's Day");
    add(new Date(year,  2, 14), 'Pi Day 🥧');
    add(new Date(year,  3, 22), 'Earth Day 🌍');
    add(new Date(year,  5, 19), 'Juneteenth');
    add(new Date(year,  6,  4), 'Independence Day');
    add(new Date(year, 10, 11), 'Veterans Day');
    add(new Date(year, 11, 25), 'Christmas Day');
    /* variable */
    add(nthDow(year, 0,  3, 1), 'MLK Jr. Day');
    add(nthDow(year, 1,  3, 1), "Presidents' Day");
    add(nthDow(year, 4, -1, 1), 'Memorial Day');
    add(nthDow(year, 8,  1, 1), 'Labor Day');
    add(nthDow(year, 9,  2, 1), 'Columbus Day');
    add(nthDow(year, 10, 4, 4), 'Thanksgiving');
    return map;
  }

  /* ── state ──────────────────────────────────────────────── */
  var MONTHS = ['January','February','March','April','May','June',
                'July','August','September','October','November','December'];
  var DAYS   = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];

  var now  = new Date();
  var curY = now.getFullYear();
  var curM = now.getMonth();
  var todayY = now.getFullYear();
  var todayM = now.getMonth();
  var todayD = now.getDate();

  /* ── render ─────────────────────────────────────────────── */
  function render() {
    var grid  = document.getElementById('cal-grid');
    var title = document.getElementById('cal-title');
    if (!grid || !title) return;

    /* build holiday map for cur year + adjacent (spans month boundaries) */
    var holidays = Object.assign({}, buildHolidayMap(curY), buildHolidayMap(curY + 1));

    title.textContent = MONTHS[curM] + ' ' + curY;
    grid.innerHTML = '';

    /* day-of-week headers */
    DAYS.forEach(function (d) {
      var el = document.createElement('div');
      el.className = 'cal-dow';
      el.textContent = d;
      grid.appendChild(el);
    });

    var firstDow    = new Date(curY, curM, 1).getDay();
    var daysInMonth = new Date(curY, curM + 1, 0).getDate();

    /* leading empty cells */
    for (var i = 0; i < firstDow; i++) {
      var emp = document.createElement('div');
      emp.className = 'cal-day cal-day--empty';
      grid.appendChild(emp);
    }

    /* day cells */
    for (var d = 1; d <= daysInMonth; d++) {
      var date    = new Date(curY, curM, d);
      var dow     = date.getDay();
      var hKey    = curY + '-' + curM + '-' + d;
      var hNames  = holidays[hKey] || null;
      var weekend = dow === 0 || dow === 6;
      var today   = d === todayD && curM === todayM && curY === todayY;

      var cell = document.createElement('div');
      var cls  = 'cal-day';
      if (hNames)   cls += ' cal-day--holiday';
      if (weekend)  cls += ' cal-day--weekend';
      if (today)    cls += ' cal-day--today';
      cell.className = cls;

      /* day number */
      var numEl = document.createElement('div');
      numEl.className = 'cal-day__num';
      numEl.textContent = d;
      cell.appendChild(numEl);

      /* holiday labels */
      if (hNames) {
        hNames.forEach(function (name) {
          var hEl = document.createElement('div');
          hEl.className = 'cal-day__holiday';
          hEl.textContent = name;
          cell.appendChild(hEl);
        });
      }

      /* class chips — only on weekdays without holidays */
      if (!weekend && !hNames) {
        SCHEDULE.filter(function (s) { return s.dow === dow; })
          .forEach(function (s) {
            var cEl = document.createElement('div');
            cEl.className = 'cal-day__class';
            cEl.style.background = s.color;
            cEl.textContent = s.craft + ' · ' + s.tier;
            cell.appendChild(cEl);
          });
      }

      grid.appendChild(cell);
    }
  }

  /* ── init ───────────────────────────────────────────────── */
  function init() {
    var prev = document.getElementById('cal-prev');
    var next = document.getElementById('cal-next');

    if (prev) prev.addEventListener('click', function () {
      curM--;
      if (curM < 0) { curM = 11; curY--; }
      render();
    });
    if (next) next.addEventListener('click', function () {
      curM++;
      if (curM > 11) { curM = 0; curY++; }
      render();
    });

    render();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
