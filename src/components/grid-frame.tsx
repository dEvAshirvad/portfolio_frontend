import React from 'react';

function GridFrame() {
    return (
        <div className='w-svw fixed top-0 left-0 h-svh -z-10'>
            <div className="container md:grid hidden grid-cols-5 gap-5 h-full pt-20">
                {
                    Array.from({ length: 5 }).map((_, index) => {
                        return <div className="w-full h-full border-x border-dashed opacity-30 border-muted bg-transparent" key={index}></div>
                    })
                }
            </div>
            <div className="container md:hidden grid grid-cols-2 gap-5 h-full pt-20">
                {
                    Array.from({ length: 2 }).map((_, index) => {
                        return <div className="w-full h-full border-x border-dashed opacity-30 bg-transparent" key={index}></div>
                    })
                }
            </div>
        </div>
    );
}

export default GridFrame;
