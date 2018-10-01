import React from "react";
import renderer from "react-test-renderer";

import Gallery from "../Gallery";

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
        const tree = renderer.create(<Gallery.Photo photo={photoMock} onClick={onClick} />);

        //Get parent div component
        const parentDiv = tree.root.findByType('div');

        //Execute onClick
        parentDiv.props.onClick();

        //Assert
        expect(onClick).toHaveBeenCalledTimes(1);
    })

});
