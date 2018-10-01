import React from "react";
import renderer from "react-test-renderer";
import ReactTestUtils from "react-dom/test-utils";

import GalleryContainer from "../GalleryContainer";
import Gallery from "../Gallery";
import InfiniteScroll from "../../utils/InfiniteScroll";
import { fetchPhotos } from '../../../services/ApiCalls';
import Lightbox from "../../utils/Lightbox";

jest.mock('../Gallery');
jest.mock('../PhotoDetail');
jest.mock('../../utils/Carousel');
jest.mock('../../utils/InfiniteScroll');
jest.mock('../../utils/Lightbox');
jest.mock('../../../services/ApiCalls');

const photosMock = [
    { id: 1 },
    { id: 2}
];

describe('Component is rendered.', () => {

    beforeEach(() => {
        jest.clearAllMocks();
    })

    test('Snapshot', async () => {
        const tree = renderer.create(<GalleryContainer />);
        expect(tree.toJSON()).toMatchSnapshot();
    })

    describe('InfiniteScroll triggers loadMore().', () => {

        test('Snapshot', async () => {
            fetchPhotos.mockReturnValue(Promise.resolve(photosMock));
            const tree = renderer.create(<GalleryContainer />);
            await tree.root.findByType(InfiniteScroll).props.loadMore();
            expect(tree.toJSON()).toMatchSnapshot();
        })

        test('FetchPhotos should have been called one time with expected parameters', async () => {
            fetchPhotos.mockReturnValue(Promise.resolve(photosMock));
            const tree = renderer.create(<GalleryContainer />);
            await tree.root.findByType(InfiniteScroll).props.loadMore();

            const expectedFetchPage = 1;
            const expectedFetchPerPage = 15;

            expect(fetchPhotos).toHaveBeenCalledTimes(1);
            expect(fetchPhotos).toHaveBeenCalledWith(expectedFetchPage, expectedFetchPerPage);
        })

        test('InfiniteScroll trigger loadMore() for second time. FetchPhotos should have been called two times with expected parameters', async () => {
            fetchPhotos.mockReturnValue(Promise.resolve(photosMock));
            const tree = renderer.create(<GalleryContainer />);
            await tree.root.findByType(InfiniteScroll).props.loadMore();
            await tree.root.findByType(InfiniteScroll).props.loadMore();

            const expectedFetchPage = 2;
            const expectedFetchPerPage = 15;

            expect(fetchPhotos).toHaveBeenCalledTimes(2);
            expect(fetchPhotos).toHaveBeenLastCalledWith(expectedFetchPage, expectedFetchPerPage);
        })

        describe('Gallery first photo is clicked.', () => {

            test('Snapshot', async () => {
                fetchPhotos.mockReturnValue(Promise.resolve(photosMock));
                const tree = renderer.create(<GalleryContainer />);
                await tree.root.findByType(InfiniteScroll).props.loadMore();
                tree.root.findAllByType(Gallery.Photo)[0].props.onClick();
                expect(tree.toJSON()).toMatchSnapshot();
            })

            describe('Lightbox is close button is clicked.', () => {

                test('Snapshot', async () => {
                    fetchPhotos.mockReturnValue(Promise.resolve(photosMock));
                    const tree = renderer.create(<GalleryContainer />);
                    await tree.root.findByType(InfiniteScroll).props.loadMore();
                    tree.root.findAllByType(Gallery.Photo)[0].props.onClick();
                    tree.root.findByType(Lightbox).props.onClickCloseButton();
                    expect(tree.toJSON()).toMatchSnapshot();
                })

            })

        })

    })

})