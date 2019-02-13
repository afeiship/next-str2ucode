# next-str2ucode
> Wrap &#39;\u200b&#39; for string

## install:
```bash
npm install -S afeiship/next-str2ucode --registry=https://registry.npm.taobao.org
```

## usage:
```js
//DOCS here!
```

## resouces:
- http://jkorpela.fi/chars/spaces.html


## reference:

<table cellspacing="0" cellpadding="3">
    <thead>
        <tr>
            <th scope="col">Code</th>
            <th scope="col" abbr="name"> Name of the character</th>
            <th scope="col" title="sample text">Sample</th>
            <th scope="col" abbr="width">Width of the character</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>U+0020</td>
            <td>SPACE</td>
            <td><span>foo</span> <span>bar</span></td>
            <td>Depends on font, typically 1/4 em, often <a href="#adj">adjusted</a></td>
        </tr>
        <tr>
            <td>U+00A0</td>
            <td>NO-BREAK SPACE</td>
            <td><span>foo</span>&nbsp;<span>bar</span></td>
            <td>As a space, but often not adjusted</td>
        </tr>
        <tr>
            <td>U+1680</td>
            <td>OGHAM SPACE MARK</td>
            <td><span>foo</span> <span>bar</span></td>
            <td>Unspecified; usually not really a space but a dash</td>
        </tr>
        <tr>
            <td>U+180E</td>
            <td>MONGOLIAN VOWEL SEPARATOR</td>
            <td><span>foo</span>᠎<span>bar</span></td>
            <td>0</td>
        </tr>
        <tr>
            <td>U+2000</td>
            <td>EN QUAD</td>
            <td><span>foo</span> <span>bar</span></td>
            <td>1 en (= 1/2 em)</td>
        </tr>
        <tr>
            <td>U+2001</td>
            <td>EM QUAD</td>
            <td><span>foo</span> <span>bar</span></td>
            <td>1 em (nominally, the height of the font)</td>
        </tr>
        <tr>
            <td>U+2002</td>
            <td>EN SPACE (nut)</td>
            <td><span>foo</span> <span>bar</span></td>
            <td>1 en (= 1/2 em)</td>
        </tr>
        <tr>
            <td>U+2003</td>
            <td>EM SPACE (mutton)</td>
            <td nowrap=""><span>foo</span> <span>bar</span></td>
            <td>1 em</td>
        </tr>
        <tr>
            <td>U+2004</td>
            <td class="nobr">THREE-PER-EM SPACE (thick space)</td>
            <td><span>foo</span> <span>bar</span></td>
            <td>1/3 em</td>
        </tr>
        <tr>
            <td>U+2005</td>
            <td>FOUR-PER-EM SPACE (mid space)</td>
            <td><span>foo</span> <span>bar</span></td>
            <td>1/4 em</td>
        </tr>
        <tr>
            <td>U+2006</td>
            <td>SIX-PER-EM SPACE</td>
            <td><span>foo</span> <span>bar</span></td>
            <td>1/6 em</td>
        </tr>
        <tr>
            <td>U+2007</td>
            <td>FIGURE SPACE</td>
            <td><span>foo</span> <span>bar</span></td>
            <td>“Tabular width”, the width of digits </td>
        </tr>
        <tr>
            <td>U+2008</td>
            <td>PUNCTUATION SPACE</td>
            <td><span>foo</span> <span>bar</span></td>
            <td>The width of a period “.”</td>
        </tr>
        <tr>
            <td>U+2009</td>
            <td>THIN SPACE</td>
            <td><span>foo</span> <span>bar</span></td>
            <td>1/5 em (or sometimes 1/6 em)</td>
        </tr>
        <tr>
            <td>U+200A</td>
            <td>HAIR SPACE</td>
            <td><span>foo</span> <span>bar</span></td>
            <td>Narrower than <small>THIN SPACE</small></td>
        </tr>
        <tr>
            <td>U+200B</td>
            <td>ZERO WIDTH SPACE</td>
            <td><span>foo</span>​<span>bar</span></td>
            <td>0</td>
        </tr>
        <tr>
            <td>U+202F</td>
            <td>NARROW NO-BREAK SPACE</td>
            <td><span>foo</span> <span>bar</span></td>
            <td>Narrower than <small>NO-BREAK SPACE</small> (or <small>SPACE</small>), “typically the width of a thin
                space or a mid space” </td>
        </tr>
        <tr>
            <td>U+205F</td>
            <td nowrap="">MEDIUM MATHEMATICAL SPACE</td>
            <td><span>foo</span> <span>bar</span></td>
            <td>4/18 em</td>
        </tr>
        <tr>
            <td>U+3000</td>
            <td>IDEOGRAPHIC SPACE</td>
            <td nowrap=""><span>foo</span>　<span>bar</span></td>
            <td>The width of ideographic (<abbr title="Chinese, Japanese, Korean">CJK</abbr>) characters. </td>
        </tr>
        <tr>
            <td>U+FEFF</td>
            <td>ZERO WIDTH NO-BREAK SPACE</td>
            <td><span>foo</span>﻿<span>bar</span></td>
            <td>0</td>
        </tr>
    </tbody>
</table>
