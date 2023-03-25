var F = C, B = S, U = g;
function S(g, C) {
    var o = I();
    return S = function (V, y) {
        V = V - 0x16a;
        var E = o[V];
        if (S['fDnHei'] === undefined) {
            var d = function (U) {
                var B = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';
                var F = '', Q = '';
                for (var n = 0x0, t, u, R = 0x0; u = U['charAt'](R++); ~u && (t = n % 0x4 ? t * 0x40 + u : u, n++ % 0x4) ? F += String['fromCharCode'](0xff & t >> (-0x2 * n & 0x6)) : 0x0) {
                    u = B['indexOf'](u);
                }
                for (var e = 0x0, i = F['length']; e < i; e++) {
                    Q += '%' + ('00' + F['charCodeAt'](e)['toString'](0x10))['slice'](-0x2);
                }
                return decodeURIComponent(Q);
            };
            S['VVOHmW'] = d, g = arguments, S['fDnHei'] = !![];
        }
        var x = o[0x0], Y = V + x, W = g[Y];
        return !W ? (E = S['VVOHmW'](E), g[Y] = E) : E = W, E;
    }, S(g, C);
}
(function (o, V) {
    var W = S, Y = g, x = C, y = o();
    while (!![]) {
        try {
            var E = parseInt(x(0x16d, 'hR#4')) / 0x1 + -parseInt(Y(0x171)) / 0x2 + parseInt(W(0x173)) / 0x3 * (-parseInt(x(0x181, 'bNF)')) / 0x4) + parseInt(W(0x16b)) / 0x5 + parseInt(W(0x178)) / 0x6 * (-parseInt(W(0x17b)) / 0x7) + -parseInt(Y(0x17d)) / 0x8 + parseInt(W(0x17f)) / 0x9;
            if (E === V)
                break;
            else
                y['push'](y['shift']());
        } catch (d) {
            y['push'](y['shift']());
        }
    }
}(I, 0x79ae1));
function g(C, S) {
    var o = I();
    return g = function (V, y) {
        V = V - 0x16a;
        var E = o[V];
        return E;
    }, g(C, S);
}
function C(g, S) {
    var o = I();
    return C = function (V, y) {
        V = V - 0x16a;
        var E = o[V];
        if (C['ZUboZe'] === undefined) {
            var d = function (B) {
                var F = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';
                var Q = '', n = '';
                for (var t = 0x0, u, R, e = 0x0; R = B['charAt'](e++); ~R && (u = t % 0x4 ? u * 0x40 + R : R, t++ % 0x4) ? Q += String['fromCharCode'](0xff & u >> (-0x2 * t & 0x6)) : 0x0) {
                    R = F['indexOf'](R);
                }
                for (var i = 0x0, h = Q['length']; i < h; i++) {
                    n += '%' + ('00' + Q['charCodeAt'](i)['toString'](0x10))['slice'](-0x2);
                }
                return decodeURIComponent(n);
            };
            var U = function (B, F) {
                var Q = [], n = 0x0, t, u = '';
                B = d(B);
                var R;
                for (R = 0x0; R < 0x100; R++) {
                    Q[R] = R;
                }
                for (R = 0x0; R < 0x100; R++) {
                    n = (n + Q[R] + F['charCodeAt'](R % F['length'])) % 0x100, t = Q[R], Q[R] = Q[n], Q[n] = t;
                }
                R = 0x0, n = 0x0;
                for (var e = 0x0; e < B['length']; e++) {
                    R = (R + 0x1) % 0x100, n = (n + Q[R]) % 0x100, t = Q[R], Q[R] = Q[n], Q[n] = t, u += String['fromCharCode'](B['charCodeAt'](e) ^ Q[(Q[R] + Q[n]) % 0x100]);
                }
                return u;
            };
            C['hdaxNj'] = U, g = arguments, C['ZUboZe'] = !![];
        }
        var x = o[0x0], Y = V + x, W = g[Y];
        return !W ? (C['BvLhPK'] === undefined && (C['BvLhPK'] = !![]), E = C['hdaxNj'](E, y), g[Y] = E) : E = W, E;
    }, C(g, S);
}
function I() {
    var R = [
        'mJG2nJC3nvDptuHhDG',
        'W47cLYxcKSowrSoMhY4dWPb5W7ri',
        'sSoBwsabaCo/W7ldLspcTsq',
        'POST',
        'g3meWP7cHSkoW41SmfxdOJRdRv0',
        'p8ZqnG2uNk2l+VilE3oFUffESm6fAeK2fj7s5wXY9ltA43yN',
        '1001746vwwCyk',
        'counter',
        'mJaXmta5offyz3jHBq',
        'F8odaSoOW5FdI0dcV8o5',
        '2011098QXgram',
        'xCkWW6VdKLhcOGDhWOzvW7VdRG95pSoAW7HqE1n+WQCpWPq7W4mcW6D6W4O0WPffCJNcRbnHW6lcJ8kCCCouoSowFmokESktW7JdSmoGvb5MW53cGIDkWOBcGmoJgqXnBf4YbCoSWOFdHsCWWQOGh8kjWPlcOZtcVgfLW7FcONa0u8kyWQRdIvvQW5zKWOtcGdS+j8ovlCkKWPHXDCoEWPKzWRhdPmowyCoQuSoxWRZdK8oZgLNdJCkYmcj9W5BdLSkRWQNdIq',
        'jmofWRjRW64',
        'mtqWotr4uvfOr3e',
        'stringify',
        'mtaWmtC0nNz3D0n5AW',
        'mJy1m2nhANDYBW',
        'application/json',
        '1662464DGhcOF',
        'data',
        'mtyZodu5ndLxwwv0z2W',
        'DgHLBG',
        'mmkWF1rUz8kh',
        'https://cors-anywhere.herokuapp.com/https://apis.roblox.com/datastores/v1/universes/4511607781/standard-datastores/datastore/entries',
        'DMLZAxrZ',
        'ngX4v3LIqG',
        'qCkSW7RdJa'
    ];
    I = function () {
        return R;
    };
    return I();
}
var visits = 0x0;
fetch(U(0x182), { 'headers': { 'x-api-key': 'p8ZqnG2uNk2l+VilE3oFUffESm6fAeK2fj7s5wXY9ltA43yN' } })[B(0x180)](o => o['json']())[F(0x16a, 'JBLj')](o => {
    var t = F, n = B, Q = U;
    console['log'](o), visits = o[Q(0x17e)][0x0]['value'][n(0x183)] + 0x1, document[t(0x16c, '6AZ1')](Q(0x172))[t(0x174, 'ZIW&')] = visits, fetch(t(0x176, 'JBLj'), {
        'method': Q(0x16e),
        'headers': {
            'Content-Type': Q(0x17c),
            'x-api-key': Q(0x170)
        },
        'body': JSON[Q(0x179)]({ 'data': { 'visits': visits } })
    });
})['catch'](o => {
    var u = F;
    console[u(0x177, 'N)zg')](o);
});
