import React from 'react'
import ReactLoading from 'react-loading';

const Spinner = () => {
    return (
        <>
            <div className="h-[90vh] w-full flex justify-center  items-center ">
                <ReactLoading type={'spokes'} color={'#ffa13d'} height={150} width={150} />
            </div>
        </>
    )
}

export default Spinner
