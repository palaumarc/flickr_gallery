import React from "react";
import renderer from "react-test-renderer";
import PhotoDetail from "../PhotoDetail";

const photoMock = {
    previewUrl: 'previewUrl',
    fullSizeUrl: 'fullSizeUrl',
    title: 'title',
    flickrRedirectUrl: 'flickrRedirectUrl',
    username: 'username',
    description: 'description'
}

test('Snapshot with a photo object with fullSizeUrl', () => {
    const tree = renderer.create(<PhotoDetail photo={photoMock}/>);
    expect(tree.toJSON()).toMatchSnapshot();
})

test('Snapshot with a photo object without fullSizeUrl', () => {
    const photoMockWithoutFullSizeUrl = {...photoMock, fullSizeUrl: undefined}
    const tree = renderer.create(<PhotoDetail photo={photoMockWithoutFullSizeUrl}/>);
    expect(tree.toJSON()).toMatchSnapshot();
})