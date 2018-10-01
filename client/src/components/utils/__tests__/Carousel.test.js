import React from "react";
import renderer from "react-test-renderer";
import Carousel from "../Carousel";

describe('Component is rendered four children and with prop startIndex 2.', () => {

    const componentToTest = (
        <Carousel startIndex={2}>
            <div>Carousel child 0</div>
            <div>Carousel child 1</div>
            <div>Carousel child 2</div>
            <div>Carousel child 3</div>
        </Carousel>
    );

    test('Snapshot', () => {
        const tree = renderer.create(componentToTest);
        expect(tree.toJSON()).toMatchSnapshot();
    });

    test('Next button is clicked. Snapshot', () => {
        const tree = renderer.create(componentToTest);
        const nextButton = tree.root.find(element => element.children == '>');
        nextButton.props.onClick();
        expect(tree.toJSON()).toMatchSnapshot();
    });

    test('Previous button is clicked. Snapshot', () => {
        const tree = renderer.create(componentToTest);
        const previousButton = tree.root.find(element => element.children == '<');
        previousButton.props.onClick();
        expect(tree.toJSON()).toMatchSnapshot();
    });

}) 

describe('Component is rendered with four children and without prop startIndex', () => {

    const componentToTest = (
        <Carousel>
            <div>Carousel child 0</div>
            <div>Carousel child 1</div>
            <div>Carousel child 2</div>
            <div>Carousel child 3</div>
        </Carousel>
    );

    test('Snapshot', () => {
        const tree = renderer.create(componentToTest);
        expect(tree.toJSON()).toMatchSnapshot();
    });

})