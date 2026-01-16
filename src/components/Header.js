import {useEffect} from 'react'
import { useSelector } from 'react-redux';
import { signOut } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import  { addUser, removeUser } from '../utils/userSlice';
import { onAuthStateChanged } from 'firebase/auth';
import  { LOGO } from '../utils/contants';

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);

  const handleSignOut = () => {
    signOut(auth).then(() => {
    }).catch((error) => {
      console.log(error);
    });
  }

     useEffect(() => {
       const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                const { uid, email, displayName } = user;
                dispatch(addUser({ uid: uid, email: email, name: displayName, photoURL: user.photoURL }));
                navigate ("/browse");
            } else {
                dispatch(removeUser())
                navigate("/");
            }
        });
        return ()=> unsubscribe();
    }, [])

  return (
    <div className='absolute w-screen px-4 py-2 bg-gradient-to-b from-black z-10 flex justify-between'>
      <div>
        <img src={LOGO}
          alt='logo'
          className='w-44' />
      </div>
      {user &&
        <div className='flex items-center gap-4'>
          <img  src={user?.photoURL}
            alt='user-avatar'
            className='w-10 rounded-md'
          />
          <button onClick={handleSignOut} className="font-bold text-white">Sign Out</button>
        </div>
      }
    </div>

  )
}

export default Header
