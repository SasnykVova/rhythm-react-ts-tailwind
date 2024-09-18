import React from 'react';

interface WrapperProps{
    children: React.ReactNode
}

const Wrapper: React.FC<WrapperProps> = ({ children }) => {
    return (
        <>
            <div className='mx-auto max-w-[1230px] px-[15px]'><div className='relative'>{children}</div></div>
        </>
    );
}

export default Wrapper;
