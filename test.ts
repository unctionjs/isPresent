/* eslint-disable no-undefined, no-magic-numbers */
import isPresent from "./index";

test("array", () => {
  expect(isPresent([])).toBe(true);
});

test("object", () => {
  expect(isPresent({})).toBe(true);
});

test("string", () => {
  expect(isPresent("")).toBe(true);
});

test("zero", () => {
  expect(isPresent(0)).toBe(true);
});

test("true", () => {
  expect(isPresent(true)).toBe(true);
});

test("false", () => {
  expect(isPresent(false)).toBe(true);
});

test("null", () => {
  expect(isPresent(null)).toBe(false);
});


test("undefined", () => {
  expect(isPresent(undefined)).toBe(false);
});
