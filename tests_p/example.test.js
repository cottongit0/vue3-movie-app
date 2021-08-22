import { expect, test } from "@jest/globals";
// import { double } from "./example";

// toBe - 원시형 데이터
// toEqual - 참조형 데이터

// 테스트 그룹
// describe("그룹 1", () => {
//   beforeAll(() => {
//     // 모든 테스트가 시작하기 전, 단 한 번만 실행된다.
//     console.log("beforeAll");
//   });
//   afterAll(() => {
//     // 모든 테스트가 실행된 후, 단 한 번만 실행된다.
//     console.log("afterAll");
//   });
//   beforeEach(() => {
//     // 각각의 테스트가 동작하기 직전에 실행한다.
//     // 작성된 테스트의 개수만큼 실행된다.
//     console.log("beforeEach");
//   });
//   afterEach(() => {
//     // 각각의 테스트가 동작하기 이후에 실행한다.
//     // 작성된 테스트의 개수만큼 실행된다.
//     console.log("afterEach");
//   });
//   test("첫 테스트", () => {
//     console.log("첫 테스트");
//     expect(123).toBe(123);
//   });

//   test("인수가 숫자 데이터입니다", () => {
//     console.log("인수가 숫자 데이터입니다");
//     expect(double(3)).toBe(6);
//     expect(double(10)).toBe(20);
//   });

//   test("인수가 없습니다", () => {
//     console.log("인수가 없습니다");
//     expect(double()).toBe(0);
//   });
// });

// const userA = {
//   name: "cotton",
//   age: 85,
// };
// const userB = {
//   name: "Neo",
//   age: 20,
// };

// test("데이터 일치", () => {
//   expect(userA.age).toBe(85);
//   expect(userA).toEqual({
//     name: "cotton",
//     age: 85,
//   });
// });

// test("데이터 불일치", () => {
//   expect(userB.name).not.toBe("cotton");
//   expect(userB).not.toBe(userA);
//   expect(userB).not.toEqual(userA);
// });

// 2. 비동기 테스트
// 주의 ) 테스트 함수는 최대 5초까지 실행된다.

// import { expect, test } from "@jest/globals";
// import { describe } from "yargs";
// import { expect, test } from "@jest/globals";
// import { asyncFn } from "./example";

// describe("비동기 테스트", () => {
//   test("done", (done) => {
//     asyncFn().then((res) => {
//       expect(res).toBe("Done");
//       done(); // 테스트의 종료 지점을 명시함
//     });
//   });

//   test("then", () => {
//     return asyncFn().then((res) => {
//       expect(res).toBe("Done");
//     });
//   });

//   test("resolves", () => expect(asyncFn()).resolves.toBe("Done"));

//   // ***
//   test("async/await", async () => {
//     const res = await asyncFn();
//     expect(res).toBe("Done");
//   });

//   // 만약 6초 이상의 함수를 실행해야하는 경우, 값을 변경할 수 있다.
//   test("timer", async () => {
//     const res = await asyncFn();
//     expect(res).toBe("Done");
//   }, 7000);
// });

// 3. 모의(Monk) 함수
// 테스트에 있어서 시간이 오래 걸리면 안된다. 이때 사용할 수 있는 것이 모의함수이다.

// import { jest } from "@jest/globals";
// import * as example from "./example";

// describe("비동기 테스트", () => {
//   test("timer", async () => {
//     jest.spyOn(example, "asyncFn").mockResolvedValue("Done");
//     const res = await example.asyncFn();
//     expect(res).toBe("Done");
//   }, 7000);
// });

// import { fetchMovieTitle } from "./example";
// import axios from "axios";

// describe("비동기 테스트", () => {
//   test("영화 제목 변환", async () => {
//     axios.get = jest.fn(() => {
//       return new Promise((resolve) => {
//         resolve({
//           data: {
//             Title: "Frozen II",
//           },
//         });
//       });
//     });
//     const title = await fetchMovieTitle();
//     expect(title).toBe("Frozen ii");
//   });
// });

// 4. VTU

import { mount } from "@vue/test-utils";
import Example from "./Example.vue";

test("메시지를 변경합니다.", async () => {
  const wrapper = mount(Example);
  // wrapper.vm === this
  expect(wrapper.vm.msg).toBe("Hello Vue test utils!");

  await wrapper.setData({
    msg: "Hello Cotton?",
  });
  expect(wrapper.vm.msg).toBe("Hello Cotton?");
  expect(wrapper.find("div").text()).toBe("Hello Cotton?");
});
