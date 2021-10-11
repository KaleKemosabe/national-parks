import React from 'react';
import HikesFilter from './HikesFilter';
import HikesList from './HikesList';
import {withHikeConsumer} from '../Context';
import Loading from './Loading';

function HikesContainer({context}) {
    const {loading, sortedHikes, hikes} = context;

    if (loading) {
        return <Loading />;
    }
    return (
        <>
        <HikesFilter hikes={hikes} />
        <HikesList hikes={sortedHikes} />
        </>
    );
}

export default withHikeConsumer(HikesContainer);
