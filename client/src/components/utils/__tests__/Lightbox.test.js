import React from "react";
import renderer from "react-test-renderer";
import Lightbox from "../Lightbox";

describe('Component is rendered with two children.', () => {

    const onClickCloseButton = jest.fn();

    const componentToTest = (
        <Lightbox onClickCloseButton={onClickCloseButton}>
            <div>Lightbox child 1</div>
            <div>Lightbox child 2</div>
        </Lightbox>
    );

    test('Snapshot', () => {
        const tree = renderer.create(componentToTest);
        expect(tree.toJSON()).toMatchSnapshot();
    })

    test('Close button is clicke. OnClickCloseButton prop should have been called one time', () => {
        const tree = renderer.create(componentToTest);
        const allDivs = tree.root.findAllByType('div');
        const closeButtonDiv = allDivs.find(div => div.children == '×');
        closeButtonDiv.props.onClick();

        expect(onClickCloseButton).toHaveBeenCalledTimes(1);
    })

}) 