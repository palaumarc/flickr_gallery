import React from "react";
import renderer from "react-test-renderer";
import ReactTestUtils from "react-dom/test-utils";

import Gallery from "../Gallery";

// Wrapper component to use renderIntoDocument functional components
class Wrapper extends React.Component {
    render() {
        return this.props.children
    }
}

describe('Component - Gallery', () => {

    test('Snapshot with multiple children', () => {
        const componentToTest = (
            <Gallery>
                <div>First Gallery Child</div>
                <div>Second Gallery Child</div>
            </Gallery>
        );
        
        const tree = renderer.create(componentToTest);
        expect(tree.toJSON()).toMatchSnapshot();
    })

});

describe('Component - Gallery.Photo', () => {

    const photoMock = {
        previewUrl: 'previewUrl',
        title: 'title'
    }

    test('Snapshot', () => {
        const onClick = jest.fn();
        const tree = renderer.create(<Gallery.Photo photo={photoMock} onClick={onClick} />);
        expect(tree.toJSON()).toMatchSnapshot();
    })

    test('The div parent element is clicked. OnClick prop should have been called one time', () => {
        const onClick = jest.fn();
        const tree = ReactTestUtils.renderIntoDocument(<Wrapper><Gallery.Photo photo={photoMock} onClick={onClick} /></Wrapper>);
        //Get all div components
        const divComponents = ReactTestUtils.scryRenderedDOMComponentsWithTag(tree, "div");

        //Get first div, which corresponds to the parent div
        const parentDiv = divComponents[0];

        //Execute onClick
        ReactTestUtils.Simulate.click(parentDiv);

        //Assert
        expect(onClick).toHaveBeenCalledTimes(1);
    })

});
