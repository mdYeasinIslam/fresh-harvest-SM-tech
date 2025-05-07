'use client'
import Login from '@/app/(auth)/LogIn';
import Register from '@/app/(auth)/Register';
import { useAppSelector } from '@/redux/hooks';

const ModalManager = () => {
  const { loginModalOpen, registerModalOpen } = useAppSelector(state => state.modal);

  return (
    <>
      {loginModalOpen &&  <div className={`fixed inset-0 z-15 `}> <Login /> </div>}
      {registerModalOpen &&  <div className={`fixed inset-0 z-15 `}> <Register /> </div>}
    </>
  );
};

export default ModalManager;
