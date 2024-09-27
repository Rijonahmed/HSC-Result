import React from 'react';

const FunnyNumber = ({firstNumberCaptcha, secondNumberCaptcha, userSumNumber}) => {
    const sumNumber = firstNumberCaptcha + secondNumberCaptcha;
    
    return (
        <div>
            <h2 className='text-3xl'>tor sorom koren na {firstNumberCaptcha} + {secondNumberCaptcha} = {userSumNumber} hoy na {sumNumber} hoy</h2>
            <a href="/" className="links text-center block">Search Again</a>
        </div>
    );
};

export default FunnyNumber;