import React, {Suspense} from "react";

const AboutPage = React.lazy(()=>import('./aboutPage'))

const AboutPageAsync = () =>{
    return(
        <div>
            <Suspense fallback={<div>Loading...</div>}>
                <AboutPage/>
            </Suspense>
        </div>
    )
}

export default AboutPageAsync