import React from "react";
import { create } from "react-test-renderer";
import ProfileStatus from "./ProfileStatus";

describe("ProfileStatus component", () => {
  test("status from props should be in the state", () => {
    const component = create(<ProfileStatus status="hello, world!" />);
    const instance = component.getInstance();
    expect(instance.state.status).toBe("hello, world!");
  });
  test("after creation span with status should be displayed", () => {
    const component = create(<ProfileStatus status="hello, world!" />);
    const root = component.root
    let span = root.findByType("span")
    expect(span).not.toBeNull();
  });
  test("after creation span should correct status", () => {
    const component = create(<ProfileStatus status="hello, world!" />);
    const root = component.root
    let span = root.findByType("span")
    expect(span.children[1]).toBe("hello, world!");
  });
  test("after creation <input> shouldn't be", () => {
    const component = create(<ProfileStatus status="hello, world!" />);
    const root = component.root    
    expect(()=>{input = root.findByType("input")} ).toThrow()
  });
  test("input should be displayed in editMode instead of span", () => {
    const component = create(<ProfileStatus status="hello, world!" />);
    const root = component.root    
    let button = root.findByType("button")
    button.props.onClick()
    let input = root.findByType("input")    
    expect( input.props.value).toBe("hello, world!")
  });
});
