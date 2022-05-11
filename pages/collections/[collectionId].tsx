import React from 'react';
import { useRouter } from 'next/router';

const Collection = () => {
    const router = useRouter();

    console.log(router.query);
    console.log(router.query.collectionId);
  return (
    <div>
        <h2>Collection</h2>
        <h5>{ router.query.collectionId }</h5>
    </div>
  )
}

export default Collection;