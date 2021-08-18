import { expect, test } from "@jest/globals";
import { double } from "./example";

// toBe - 원시형 데이터
// toEqual - 참조형 데이터

// 테스트 그룹
describe("그룹 1", () => {
  beforeAll(() => {
    // 모든 테스트가 시작하기 전, 단 한 번만 실행된다.
    console.log("beforeAll");
  });
  afterAll(() => {
    // 모든 테스트가 실행된 후, 단 한 번만 실행된다.
    console.log("afterAll");
  });
  beforeEach(() => {
    // 각각의 테스트가 동작하기 직전에 실행한다.
    // 작성된 테스트의 개수만큼 실행된다.
    console.log("beforeEach");
  });
  afterEach(() => {
    // 각각의 테스트가 동작하기 이후에 실행한다.
    // 작성된 테스트의 개수만큼 실행된다.
    console.log("afterEach");
  });
  test("첫 테스트", () => {
    console.log("첫 테스트");
    expect(123).toBe(123);
  });

  test("인수가 숫자 데이터입니다", () => {
    console.log("인수가 숫자 데이터입니다");
    expect(double(3)).toBe(6);
    expect(double(10)).toBe(20);
  });

  test("인수가 없습니다", () => {
    console.log("인수가 없습니다");
    expect(double()).toBe(0);
  });
});

const userA = {
  name: "cotton",
  age: 85,
};
const userB = {
  name: "Neo",
  age: 20,
};

test("데이터 일치", () => {
  expect(userA.age).toBe(85);
  expect(userA).toEqual({
    name: "cotton",
    age: 85,
  });
});

test("데이터 불일치", () => {
  expect(userB.name).not.toBe("cotton");
  expect(userB).not.toBe(userA);
  expect(userB).not.toEqual(userA);
});
