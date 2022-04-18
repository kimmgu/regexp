# Regular Expression

정규 표현식 : 일정한 패턴을 가진 문자열의 집합을 표현하기 위해 사용하는 형식 언어(formal language)

## Role

- Search
- Replace
- Extract

## Learn, Build, & Test RegEx

https://regexr.com/

## Generating a Regular Expression

```javascript
// 생성자
new RegExp("표현", "옵션");
new RegExp("[a-z]", "gi") /
  // 리터럴
  표현 /
  옵션 /
  [a - z] /
  gi;
```

## Exercise

```javascript
const str = `
010-1234-5678
mingu@email.com
http://info.cern.ch/
home of the first website
`;
```

## Method

| Method  | Grammar                            | Explanation                                           |
| ------- | ---------------------------------- | ----------------------------------------------------- |
| test    | `정규식.test(문자열)`              | 일치 여부(boolean) 반환                               |
| match   | `문자열.match(정규식)`             | 일치하는 문자열의 배열(array) 반환                    |
| replace | `문자열.replace(정규식, 대체문자)` | 일치하는 문자열을 대체하고 대체된 문자열(string) 반환 |

## Flag (option)

| Flag | Meaning     | Explanation                                              |
| ---- | ----------- | -------------------------------------------------------- |
| `g`  | Global      | 대상 문자열 내에서 패턴과 일치하는 모든 문자열 전역 검색 |
| `i`  | Ignore case | 대소문자를 구별하지 않고 패턴 검색                       |
| `m`  | Multi line  | 문자열의 행이 바뀌더라도 계속 패턴 검색                  |

## Pattern

| Pattern | Explanation                                          |
| ------- | ---------------------------------------------------- |
| ^ab     | 줄(line) 시작에 있는 ab와 일치                       |
| ab$     | 줄(line) 끝에 있는 ab와 일치                         |
| .       | 임의의 한 문자와 일치                                |
| a\|b    | a 또는 b와 일치                                      |
| ab?     | b가 없거나 b와 일치                                  |
| {3}     | 3개 연속 일치                                        |
| {3,}    | 3개 이상 연속 일치                                   |
| {3,5}   | 3개 이상 5개 이하(3~5개) 연속 일치                   |
| [abc]   | a or b or c                                          |
| [a-z]   | a ~ z 사이의 문자 구간에 일치(소문자)                |
| [A-Z]   | A ~ Z 사이의 문자 구간에 일치(대문자)                |
| [0-9]   | 0 ~ 9 사이의 문자 구간에 일치(숫자)                  |
| [가-힣] | 가 ~ 힣 사이의 문자 구간에 일치(한글)                |
| \w      | 63개 문자(word, 대소문자52개 + 숫자10개 + \_)에 일치 |
| \b      | 63개 문자에 일치하지 않는 문자 경계(boundary)        |
| \d      | 숫자(digit)에 일치                                   |
| \s      | 공백(space, tab 등)에 일치                           |
| (?=)    | 앞쪽 일치(lookahead)                                 |
| (?<=)   | 뒤쪽 일치(lookbehind)                                |
