// https://jestjs.io/docs/api#testeachtablename-fn-timeout

test.each`
  a    | b    | expected
  ${1} | ${1} | ${2}
  ${1} | ${2} | ${3}
  ${2} | ${1} | ${3}
`('$a + $b은 $expected이 나와야 한다.', ({ a, b, expected }) => {
  expect(a + b).toBe(expected);
});
