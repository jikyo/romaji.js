# @jikyo/romaji

`romaji` is a converter library to romanize Japanese hiragana/katakana string by standard and IME typing style.
There exists several different romanization systems, so one hiragana/katakana string has so many romanize string.
For example, "ちゃ" can be romanized as "cha", "tya", "chixya", "tixya", "chilya", or "tilya".
`romaji` provides romanized strings as many as possible.

If an input string contained non hiragana/katakana characters (includes kanji), `romaji` return the characters as same as the input.
For example, `romaji` converts the input "お茶の水" to "o茶no水".
If there is a need to romanize the whole string which includes kanji, `romaji` can romaize the readings in the tokens which [kuromoji.js](https://www.npmjs.com/package/kuromoji) tokenizer provides.
`romaji` strongly recommends to use with [kuromoji.js](https://www.npmjs.com/package/kuromoji).

The mapping from hiragana/katakana to romaji is based on common IME's system to input Japanese.
Therefor, `romaji` does not directly implement the standard system like Hepburn, Nihon-shiki or Kunrei-shiki, but includes them.

## Note

**Note:** `romaji` only support **UTF-8** encoding.

## Installation

```sh
npm i @jikyo/romaji
```

## Usage

```js
const romaji = require('@jikyo/romaji');
romaji('僕ドラえもん'); // [僕doraemon, 僕doraemon', 僕doraemonn]
romaji('金閣寺'); // []
```

## License

[MIT](LICENSE)
