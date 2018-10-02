import React from "react";
import renderer from "react-test-renderer";
import PhotoDetail from "../PhotoDetail";

const photoMock = {
    previewUrl: 'previewUrl',
    fullSizeUrl: 'fullSizeUrl',
    title: 'title',
    originalPostUrl: 'originalPostUrl',
    username: 'username',
    description: 'description'
}

global.window.open = jest.fn();

test('Snapshot with a photo object with fullSizeUrl', () => {
    const tree = renderer.create(<PhotoDetail photo={photoMock}/>);
    expect(tree.toJSON()).toMatchSnapshot();
})

test('Snapshot with a photo object without fullSizeUrl', () => {
    const photoMockWithoutFullSizeUrl = {...photoMock, fullSizeUrl: undefined}
    const tree = renderer.create(<PhotoDetail photo={photoMockWithoutFullSizeUrl}/>);
    expect(tree.toJSON()).toMatchSnapshot();
})

test('Username is clicked. Window.open is called one time with expected parameters.', () => {
    const tree = renderer.create(<PhotoDetail photo={photoMock}/>);
    const usernameSpan = tree.root.findByProps({children: photoMock.username});
    usernameSpan.props.onClick();
    expect(global.window.open).toHaveBeenCalledTimes(1);
    expect(global.window.open).toHaveBeenCalledWith(photoMock.originalPostUrl);
})