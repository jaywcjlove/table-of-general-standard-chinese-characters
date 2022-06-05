通用规范汉字表
===

![No Dependencies](http://jaywcjlove.github.io/sb/status/no-dependencies.svg)
[![npm package](https://img.shields.io/npm/v/togscc.svg)](https://www.npmjs.com/package/togscc)
[![Coverage Status](https://jaywcjlove.github.io/table-of-general-standard-chinese-characters/badges.svg)](https://jaywcjlove.github.io/table-of-general-standard-chinese-characters/lcov-report/)

最权威的《通用规范汉字表》(**T**able **o**f **G**eneral **S**tandard **C**hinese **C**haracters)，数据来源 2013-06-01 中华人民共和国教育部发布的[《通用规范汉字表》](http://www.moe.gov.cn/jyb_sjzl/ziliao/A19/201306/t20130601_186002.html)。

⚠️ 注意：拼音注音没有找到官方数据来源，数据来源[《维基词典》](https://zh.wiktionary.org/wiki/Appendix:汉语拼音索引/通用规范汉字表)汉语拼音索引。PDF 数据存放在 [@v1.0.0](https://github.com/jaywcjlove/table-of-general-standard-chinese-characters/releases/tag/v1.0.0)

## 安装

```bash
npm install togscc --save
```

## 使用

```js
import data from 'togscc/data/characters.json';
// data 输出 ===>
[
  "一","乙","二","十","丁","厂","七","卜","八","人","入","儿","匕","几",
  // ....
]
```

```js
import characters from 'togscc/dist/characters';
import pinyin from 'togscc/dist/pinyin';
import raw from 'togscc/dist/pinyin.raw';
import togscc from 'togscc';

console.log(togscc['正']) // => ["zhēng","zhèng"]
console.log("你好世界！".split('').map((han) => togscc[han] ? togscc[han] : han))
// => ["nǐ", ["hǎo","hào"], "shì", "jiè", "！"]
```

## 数据说明

| 文件名 | 说明  | 数据说明 |
| ---- | ---- | ---- |
| `characters.txt` | 汉字(8105个汉字)，行号对应字序 | ⚠️ 维护数据 |
| `characters.csv` | 汉字拼音，表格数据 | - |
| `characters.json` | 汉字，JSON 格式，数组顺序对应字序 | - |
| `characters.min.json` | `characters.min.json` 的压缩数据 | - |
| `pinyin.raw.txt` | 拼音 | ⚠️ 维护数据 |
| `pinyin.raw.json` | 拼音，JSON 格式，数组顺序对应字序 | - |
| `pinyin.raw.min.json` | `pinyin.raw.json` 的压缩数据 | - |
| `pinyin.raw.effect.json` | 拼音与文字在一行数组中 | - |
| `pinyin.txt` | 拼音，行号对应 `characters.txt` 行号 | - |
| `pinyin.json` | 拼音，JSON 格式，数组顺序对应 `characters.json` 数组顺序 | - |
| `pinyin.min.json` | `pinyin.json` 的压缩数据 | - |
| `pinyin.duo.json` | 多音汉字数据 | - |
| `pinyin.duo.min.json` | `pinyin.duo.json` 的压缩数据 | - |
| `shendiao.json` | 字母 + 声调数据 | - |
| `shendiao.all.json` | 字母 + 声调 + 非字母声调数据 | - |
| `shendiao.object.json` | 字母 + 声调声调 JSON 数据 | - |

⚠️ 注意：行号（或数组顺序）对应字序，字序遵循《GB13000.1 字符集汉字字序（笔画序）规范》的规定

更多 CDN 数据访问：https://unpkg.com/togscc/


### `characters.txt`

```
一
乙
二
十
....
```

### `characters.json`

```js
[
  "一","乙","二","十","丁","厂","七","卜","八","人","入","儿","匕","几",
  // ....
]
```

### `pinyin.raw.txt`

```
ā 吖 阿 啊 锕 腌
á 啊
ǎ 啊
à 啊
a 啊
āi 哎 哀 埃 挨 唉 锿
ái 挨 皑 癌
ǎi 毐 欸 嗳 矮 蔼 霭
ài 艾 砹 唉 爱 隘 碍 嗳 嗌 嫒 瑷 叆 暧
ān 安 垵 桉 氨 庵 谙 鹌 𩽾 鞍 盦
ǎn 俺 埯 唵 铵
àn 犴 岸 按 胺 案 暗 黯
```

### `pinyin.raw.json`

```js
{
  "ā": [ "吖", "阿", "啊", "锕", "腌" ],
  "á": [ "啊" ],
  "ǎ": [ "啊" ],
  "à": [ "啊" ],
  "a": [ "啊" ],
  // ....
}
```

### `pinyin.raw.effect.json`

```js
[
  [ "ā", "吖", "阿", "啊", "锕", "腌" ],
  [ "á", "啊" ],
  [ "ǎ", "啊" ],
  [ "à", "啊" ],
  [ "a", "啊" ],
  // ....
]
```

### `pinyin.json`

行号对应汉字字序。

```js
[
  "yī",
  "yǐ",
  "èr",
  "shí",
  "dīng",
  "chǎng",
  "qī",
  [
    "bo",
    "bǔ"
  ],
  "bā",
  // ....
]
```

### `pinyin.duo.json`

```js
{
  "卜": [ "bo", "bǔ" ],
  "几": [ "jī", "jǐ" ],
  "了": [ "le", "liǎo" ],
  "干": [ "gān", "gàn" ],
  // ....
}
```

### `shendiao.json`

```json
[
  "ā", "ē", "ī", "ō", "ū",
  "á", "é", "í", "ó", "ú",
  "ǎ", "ě", "ǐ", "ǒ", "ǔ",
  "à", "è", "ì", "ò", "ù",
  "a", "e", "i", "o", "u"
]
```

### `shendiao.object.json`

```json
{
  "ā": "a", "ē": "e", "ī": "i", "ō": "o", "ū": "u",
  "á": "a", "é": "e", "í": "i", "ó": "o", "ú": "u",
  "ǎ": "a", "ě": "e", "ǐ": "i", "ǒ": "o", "ǔ": "u",
  "à": "a", "è": "e", "ì": "i", "ò": "o", "ù": "u"
}
```

### `shendiao.all.json`

```json
[
  "ā", "ɑ̄", "ē", "ī", "ō", "ū", "ǖ", "Ā", "Ē", "Ī", "Ō", "Ū", "Ǖ",
  "á", "ɑ́", "é", "í", "ó", "ú", "ǘ", "Á", "É", "Í", "Ó", "Ú", "Ǘ",
  "ǎ", "ɑ̌", "ě", "ǐ", "ǒ", "ǔ", "ǚ", "Ǎ", "Ě", "Ǐ", "Ǒ", "Ǔ", "Ǚ",
  "à", "ɑ̀", "è", "ì", "ò", "ù", "ǜ", "À", "È", "Ì", "Ò", "Ù", "Ǜ",
  "a", "ɑ", "e", "i", "o", "u", "ü", "A", "E", "I", "O", "U", "Ü"
]
```

## 其它工具

- [province-city-china](https://github.com/uiwjs/province-city-china) 最全最新中国【省、市、区县、乡镇街道】json,csv,sql 数据

## License

Licensed under the MIT License.
