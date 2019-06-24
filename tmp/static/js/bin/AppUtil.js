var _0x1487 = ["\x68\x72\x65\x66", "\x6C\x6F\x63\x61\x74\x69\x6F\x6E", "\x67\x6F", "\x68\x69\x73\x74\x6F\x72\x79", "\x73\x65\x74\x49\x74\x65\x6D", "\x6B\x65\x79", "\x69\x6E\x64\x65\x78\x4F\x66", "\x67\x65\x74\x49\x74\x65\x6D", ""];
var AppUtil = {
    GoUrl: function (_0x584ex2) {
        var _0x584ex3 = GetWebType();
        if (_0x584ex3 == PCWebType) {
            window[_0x1487[1]][_0x1487[0]] = _0x584ex2
        } else {
            CallApp.GoUrl(_0x584ex2, AppMode.Normal)
        }
    },
    Back: function () {
        var _0x584ex3 = GetWebType();
        if (_0x584ex3 == PCWebType) {
            window[_0x1487[3]][_0x1487[2]](-1)
        } else {
            CallApp.Back()
        }
    },
    PutVar: function (_0x584ex4) {
        var _0x584ex3 = GetWebType();
        console.log(11)
        if (_0x584ex3 == PCWebType) {
            for (var _0x584ex5 in _0x584ex4) {
                var _0x584ex6 = _0x584ex4[_0x584ex5];
                sessionStorage[_0x1487[4]](_0x584ex5, _0x584ex6)
            }
        } else {
            CallApp.WriteValue(_0x584ex4)
        }
    },
    GetVar: function (_0x584ex4, _0x584ex7) {
        var _0x584ex3 = GetWebType();
        if (_0x584ex3 == PCWebType) {
            var _0x584ex8 = {};
            for (var _0x584ex5 in _0x584ex4) {
                if (_0x584ex5[_0x1487[6]](_0x1487[5]) >= 0) {
                    var _0x584ex9 = _0x584ex4[_0x584ex5];
                    var _0x584ex6 = sessionStorage[_0x1487[7]](_0x584ex9);
                    _0x584ex8[_0x584ex9] = _0x584ex6
                }
            };
            if (_0x584ex7 != _0x1487[8]) {
                _0x584ex7(_0x584ex8)
            }
        } else {
            CallApp.ReadValue(_0x584ex4, _0x584ex7)
        }
    }
}