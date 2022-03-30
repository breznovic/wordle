import React from 'react'

export function Key({keyVal, bigKey}) {

    return <div className='key' id={bigKey && 'big'}>
        {keyVal}
    </div>
}