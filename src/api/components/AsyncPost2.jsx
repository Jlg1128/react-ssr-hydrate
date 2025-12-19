import React, { Suspense } from "react"
import fetchData from "../../fetch-data";
import Post from "../../components/Post";

const ServerPost2 = async () => {
    let result, error;
    // result = await fetchData();
    result  = await (new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                title: '我是标题2'
            })
        }, 2000);
    }))
    return <>
        {<Post data={result} error={error} />}
    </>
}

export const AsyncPost2 = React.memo(ServerPost2);
