import { onAuthStateChanged, signOut } from "firebase/auth";
import { NETFLIX_LOGO, USER_ICON } from "../utils/constants";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import type { RootState } from "../utils/appStore";
import { useEffect } from "react";
import { addUser, removeUser } from "../utils/userSlice";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store: RootState) => store.user)
 
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const {uid, email, displayName, photoURL} = user;
        dispatch(addUser({uid: uid, email: email, displayName: displayName, photoURL: photoURL}));
        navigate('/browse')
      } else {
        dispatch(removeUser());
        navigate('/')
      }
    });
    
    //Unsubscribe when component is unmounted
    return () => unsubscribe();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleSignout = () => {
    signOut(auth).then(() => {
      // Sign-out successful.
    }).catch((error) => {
      // An error happened.
      <h1>{error}</h1>
      navigate("/error");
    });
    
  }
  return (
    <div className="absolute w-screen px-18 py-2 bg-gradient-to-b from-black z-10 flex justify-between" >
      <img
        className="w-44"
        src={NETFLIX_LOGO}
        alt="Netflix"
      />

      {user && <div className="flex p-2">
        <img className="w-12 h-12" src={USER_ICON} alt="user" />
        <button className="font-bold text-white m-1 cursor-pointer" onClick={handleSignout}>(Sign out)</button>
      </div>
}
    </div>
  );
};

export default Header;
