import React, {Suspense} from 'react'

const MainPageComponent = React.lazy(()=>import('./mainPage'))

const MainPageAsync = () => {
    return(
        <div>
            <Suspense fallback={<div>Loading...</div>}>
                <MainPageComponent/>
            </Suspense>
        </div>
    )
}

export default MainPageAsync