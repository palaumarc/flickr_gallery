import React from "react";
import renderer from "react-test-renderer";
import Spin from "../Spin";

test('Snapshot', () => {
    const tree = renderer.create(<Spin />);
    expect(tree.toJSON()).toMatchSnapshot();
})