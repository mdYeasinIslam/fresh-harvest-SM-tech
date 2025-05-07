import FormInput from '@/components/FormInput'
import React from 'react'

type LoginProps = { 
    setOpenLoginModal: React.Dispatch<React.SetStateAction<boolean>>
}

const Login = ({setOpenLoginModal}:LoginProps) => {
   
    return (
        <>
            {/* Overlay to freeze background */}
            <div className="fixed inset-0  bg-opacity-50"></div>

            {/* Login Modal */}
            <FormInput setOpenLoginModal={setOpenLoginModal} />
        </>
    )
}

export default Login