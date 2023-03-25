var F = A;
function A(Y, n) {
    var J = u();
    return A = function (L, I) {
        L = L - 0x12c;
        var s = J[L];
        return s;
    }, A(Y, n);
}
(function (J, L) {
    var Z = A, I = J();
    while (!![]) {
        try {
            var s = parseInt(Z(0x148)) / 0x1 * (-parseInt(Z(0x12d)) / 0x2) + -parseInt(Z(0x13d)) / 0x3 * (parseInt(Z(0x142)) / 0x4) + parseInt(Z(0x137)) / 0x5 + parseInt(Z(0x141)) / 0x6 + parseInt(Z(0x13e)) / 0x7 * (-parseInt(Z(0x132)) / 0x8) + -parseInt(Z(0x14a)) / 0x9 * (parseInt(Z(0x143)) / 0xa) + -parseInt(Z(0x12e)) / 0xb * (-parseInt(Z(0x136)) / 0xc);
            if (s === L)
                break;
            else
                I['push'](I['shift']());
        } catch (z) {
            I['push'](I['shift']());
        }
    }
}(u, 0x63ab7));
function u() {
    var X = [
        'error',
        'p8ZqnG2uNk2l+VilE3oFUffESm6fAeK2fj7s5wXY9ltA43yN',
        'https://mysnow.org',
        '4662024jUVwoq',
        'headers',
        'https://example.com',
        'data',
        '30329808RnpSUW',
        '270705BocdxX',
        'Content-Type',
        'counter',
        'log',
        'value',
        'json',
        '9nJNUdM',
        '7OyPPYu',
        'Origin',
        'stringify',
        '564408ornUmF',
        '969336DGFQPV',
        '1160NRKhFZ',
        'catch',
        'visits',
        'then',
        'GET',
        '31ZCoGeC',
        'http://cors-anywhere.herokuapp.com/https://apis.roblox.com/datastores/v1/universes/4511607781/standard-datastores/datastore/entries',
        '53280LVCRDb',
        'method',
        'x-api-key',
        '17482OyICwT',
        '11IwhTfm'
    ];
    u = function () {
        return X;
    };
    return u();
}
var visits = 0x0, Y = {};
Y[F(0x13f)] = F(0x134), Y[F(0x12c)] = F(0x130);
var n = {};
n[F(0x14b)] = F(0x147), n[F(0x133)] = Y, fetch(F(0x149), n)[F(0x146)](J => J[F(0x13c)]())[F(0x146)](s => {
    var g = F;
    console[g(0x13a)](s), visits = s[g(0x135)][0x0][g(0x13b)][g(0x145)] + 0x1, document['getElementById'](g(0x139))['innerHTML'] = visits;
    var z = {};
    z[g(0x138)] = 'application/json', z[g(0x13f)] = g(0x131), z['x-api-key'] = 'p8ZqnG2uNk2l+VilE3oFUffESm6fAeK2fj7s5wXY9ltA43yN';
    var Q = {};
    Q[g(0x145)] = visits;
    var G = {};
    G[g(0x135)] = Q, fetch(g(0x149), {
        'method': 'POST',
        'headers': z,
        'body': JSON[g(0x140)](G)
    });
})[F(0x144)](J => {
    var H = F;
    console[H(0x12f)](J);
});
