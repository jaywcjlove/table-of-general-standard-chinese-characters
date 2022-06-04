const characters = require('../data/characters.json');
const pinyinDuo = require('../data/pinyin.duo.json');
const pinyin = require('../data/pinyin.json');
const pinyinRaw = require('../data/pinyin.raw.json');
const pinyinRawEffect = require('../data/pinyin.raw.effect.json');

test('汉字字序 test case', () => {
  expect(characters.length).toBe(8105);
  expect(characters.indexOf('一') + 1).toBe(1);
  expect(characters.indexOf('幻') + 1).toBe(189);
  expect(characters.indexOf('柰') + 1).toBe(4139);
  expect(characters.indexOf('𫘝') + 1).toBe(6643);
  expect(characters.indexOf('蠼') + 1).toBe(8105);
});

test('多音汉字 test case', () => {
  expect(Object.keys(pinyinDuo).length).toBe(597);
  expect(pinyinDuo['了']).toEqual([ "le", "liǎo" ]);
  expect(pinyinDuo['正']).toEqual([ "zhēng", "zhèng" ]);
  expect(pinyinDuo['啜']).toEqual([ "chuài", "chuò" ]);
});

test('拼音 test case', () => {
  expect(pinyin.length).toBe(8105);
  expect(pinyin[characters.indexOf('一')]).toBe('yī');
  expect(pinyin[characters.indexOf('幻')]).toBe('huàn');
  expect(pinyin[characters.indexOf('了')]).toEqual([ "le", "liǎo" ]);
  expect(pinyin[characters.indexOf('正')]).toEqual([ "zhēng", "zhèng" ]);
  expect(pinyin[characters.indexOf('啜')]).toEqual([ "chuài", "chuò" ]);
});

test('拼音对应汉字 test case', () => {
  expect(Object.keys(pinyinRaw).length).toBe(1296);
  expect(pinyinRaw['ái']).toEqual([ "挨", "皑", "癌" ]);
  expect(pinyinRaw['báo']).toEqual([ "雹", "薄" ]);
  expect(pinyinRaw['běng']).toEqual([ "绷", "琫" ]);
  expect(pinyinRaw['wáng']).toEqual([ "亡", "王" ]);
});

test('拼音与文字在一行数组中 test case', () => {
  expect(pinyinRawEffect.length).toBe(1296);
  expect(pinyinRawEffect[1]).toEqual([ "á", "啊" ]);
});