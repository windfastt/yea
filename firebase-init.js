const a0_0x3f0942 = a0_0x5c29;
(function(_0x436c84, _0x11641e) {
    const _0x402500 = a0_0x5c29
      , _0x505a6d = _0x436c84();
    while (!![]) {
        try {
            const _0x218f0b = -parseInt(_0x402500(0xe7)) / 0x1 + parseInt(_0x402500(0xd4)) / 0x2 * (parseInt(_0x402500(0xe4)) / 0x3) + parseInt(_0x402500(0xd1)) / 0x4 + parseInt(_0x402500(0xce)) / 0x5 * (-parseInt(_0x402500(0xcf)) / 0x6) + -parseInt(_0x402500(0xdd)) / 0x7 + parseInt(_0x402500(0xe3)) / 0x8 + parseInt(_0x402500(0xe9)) / 0x9 * (parseInt(_0x402500(0xd0)) / 0xa);
            if (_0x218f0b === _0x11641e)
                break;
            else
                _0x505a6d['push'](_0x505a6d['shift']());
        } catch (_0x568dba) {
            _0x505a6d['push'](_0x505a6d['shift']());
        }
    }
}(a0_0x4c70, 0x2443d));
function a0_0x5c29(_0x165917, _0x4d8f40) {
    _0x165917 = _0x165917 - 0xca;
    const _0x4c7015 = a0_0x4c70();
    let _0x5c29ca = _0x4c7015[_0x165917];
    return _0x5c29ca;
}
import {initializeApp} from 'https://www.gstatic.com/firebasejs/12.6.0/firebase-app.js';
import {getDatabase, ref, onValue} from 'https://www.gstatic.com/firebasejs/12.6.0/firebase-database.js';
import {getAuth, signInAnonymously} from 'https://www.gstatic.com/firebasejs/12.6.0/firebase-auth.js';
import {getFunctions, httpsCallable} from 'https://www.gstatic.com/firebasejs/12.6.0/firebase-functions.js';
import {initializeAppCheck, ReCaptchaV3Provider} from 'https://www.gstatic.com/firebasejs/12.6.0/firebase-app-check.js';
const a0_0x567506 = {
    'apiKey': a0_0x3f0942(0xde),
    'authDomain': a0_0x3f0942(0xe5),
    'databaseURL': 'https://mouser-e3cf5-default-rtdb.firebaseio.com',
    'projectId': a0_0x3f0942(0xcb),
    'storageBucket': a0_0x3f0942(0xea),
    'messagingSenderId': '842886539734',
    'appId': a0_0x3f0942(0xd8),
    'measurementId': a0_0x3f0942(0xe8)
}
  , a0_0x1b56c2 = a0_0x3f0942(0xca)
  , a0_0x210bee = initializeApp(a0_0x567506);
(location[a0_0x3f0942(0xeb)] === a0_0x3f0942(0xe1) || location['hostname'] === a0_0x3f0942(0xdf)) && (self[a0_0x3f0942(0xdc)] = !![]);
initializeAppCheck(a0_0x210bee, {
    'provider': new ReCaptchaV3Provider(a0_0x3f0942(0xd9)),
    'isTokenAutoRefreshEnabled': !![]
});
const a0_0x2b1cb7 = getDatabase(a0_0x210bee)
  , a0_0x166aaa = getAuth(a0_0x210bee)
  , a0_0x5a52b8 = getFunctions(a0_0x210bee)
  , a0_0x228ee8 = httpsCallable(a0_0x5a52b8, a0_0x3f0942(0xcc))
  , a0_0x264d2b = httpsCallable(a0_0x5a52b8, a0_0x3f0942(0xd5))
  , a0_0x4936c0 = signInAnonymously(a0_0x166aaa)[a0_0x3f0942(0xe0)](_0x2674fe => {
    const _0x190542 = a0_0x3f0942;
    console[_0x190542(0xe2)](_0x190542(0xd2), _0x2674fe);
}
);
let a0_0x231821 = null;
function a0_0x4c70() {
    const _0x31e047 = ['41337XHQlVW', 'mouser-e3cf5.firebasestorage.app', 'hostname', 'America/New_York', 'mouser-e3cf5', 'startRun', 'Could\x20not\x20start\x20run:', '10yXhLCX', '139710aZfeVw', '190BLLmXF', '445736gInTtK', 'Sign-in\x20failed:', 'code', '36xNEzau', 'submitScore', 'warn', 'Score\x20rejected:', '1:842886539734:web:0fa5f3720fc1479b4f9c77', '6LeiSZUtAAAAAN-fWuhtR29WjlLko7hVjJsd7fDA', 'message', 'data', 'FIREBASE_APPCHECK_DEBUG_TOKEN', '997164RrlJGs', 'AIzaSyDGYoH04YIgh0JW6VLHByhFzGkUKqhBohs', 'localhost', 'catch', '127.0.0.1', 'error', '289032qYyrfr', '32229awmoNQ', 'mouser-e3cf5.firebaseapp.com', 'en-CA', '90641AzteFc', 'G-0FEE9YHHWF'];
    a0_0x4c70 = function() {
        return _0x31e047;
    }
    ;
    return a0_0x4c70();
}
function a0_0x45673a() {
    const _0x38d9a9 = a0_0x3f0942;
    return new Date()['toLocaleDateString'](_0x38d9a9(0xe6), {
        'timeZone': a0_0x1b56c2
    });
}
export async function beginGame() {
    const _0x2a4c79 = a0_0x3f0942;
    a0_0x231821 = null;
    try {
        await a0_0x4936c0;
        const _0x1b2e5c = await a0_0x228ee8();
        a0_0x231821 = _0x1b2e5c[_0x2a4c79(0xdb)]['runId'];
    } catch (_0x9660c2) {
        console['error'](_0x2a4c79(0xcd), _0x9660c2['code'], _0x9660c2[_0x2a4c79(0xda)]);
    }
}
export async function endGame(_0x214b9f, _0x53dd6f) {
    const _0x58aed6 = a0_0x3f0942;
    if (!a0_0x231821)
        return console[_0x58aed6(0xd6)]('Score\x20not\x20submitted.'),
        {
            'ok': ![]
        };
    const _0x115608 = a0_0x231821;
    a0_0x231821 = null;
    try {
        const _0x3f2f71 = await a0_0x264d2b({
            'runId': _0x115608,
            'score': _0x214b9f,
            'message': _0x53dd6f ?? ''
        });
        return _0x3f2f71[_0x58aed6(0xdb)];
    } catch (_0x3db398) {
        return console['error'](_0x58aed6(0xd7), _0x3db398[_0x58aed6(0xd3)], _0x3db398[_0x58aed6(0xda)]),
        {
            'ok': ![],
            'error': _0x3db398[_0x58aed6(0xda)]
        };
    }
}
export {a0_0x210bee as app, a0_0x2b1cb7 as database};
