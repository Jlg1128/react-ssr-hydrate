import React, { Suspense, lazy } from "react"
import fetchData from "../../fetch-data";
import Post from "../../components/Post";
import { AsyncPost2 } from './AsyncPost2';

const C = lazy(() => import('./C'));

const ServerPost = async () => {
    let result, error;
    // result = await fetchData();
    result = await (new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                title: '我是标题'
            })
        }, 1500);
    }))
    return <>
        {<Post data={result} error={error} />}
        {/* <Suspense fallback={'loading3...'}>
            <div className="rs">
                <AsyncPost2 />
            </div>
        </Suspense> */}

    </>
}

export const AsyncPost = React.memo(ServerPost);
