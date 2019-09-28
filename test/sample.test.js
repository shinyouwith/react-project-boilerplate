import React from "react";
import {mount} from "enzyme";

import Hello from "../src/Hello";

describe("테스트 그룹 예시", () => {
    it("예제 테스트", () => {
        // given
    
        // when
    
        // then
        expect(true).toBe(true);
    }); 

    it("enzyme 렌더링 테스트", () => {
        // given

        // when
        const wrapper = mount(<Hello />);

        // then
    })
});