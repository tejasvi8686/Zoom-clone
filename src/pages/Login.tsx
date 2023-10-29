import React, { useEffect } from 'react'; // Make sure to import React if it's a React component
import {
  EuiFlexGroup,
  EuiProvider,
  EuiFlexItem,
  EuiImage,
  EuiSpacer,
  EuiText,
  EuiTextColor,
  EuiButton,
  EuiPanel,
} from '@elastic/eui';
import {
  query,
  where,
  getDocs,
  addDoc,
} from 'firebase/firestore';
import animation from '../assets/animation.gif';
import logo from '../assets/logo.png';
import {
  signInWithPopup,
  GoogleAuthProvider,
  Auth,
  onAuthStateChanged,
} from 'firebase/auth';
import { firebaseAuth, userRef } from '../utils/FirebaseConfig';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../app/hooks';
import { setUser } from '../app/slices/AuthSlice';

function Login() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  useEffect(() => {
    onAuthStateChanged(firebaseAuth, (currentUser) => {
      if (currentUser) {
        navigate('/');
      }
    });
  }, []); // Use useEffect to handle side effects

  const login = async () => {
    const provider = new GoogleAuthProvider();
    try {
      const { user } = await signInWithPopup(firebaseAuth, provider);
      const { displayName, email, uid } = user;

      if (email) {
        const firestoreQuery = query(userRef, where('uid', '==', uid));
        const fetchedUsers = await getDocs(firestoreQuery);
        if (fetchedUsers.docs.length === 0) {
          await addDoc(userRef, {
            uid,
            name: displayName,
            email,
          });
        }
      }

      dispatch(setUser({ uid, name: displayName, email }));
      navigate('/');
    } catch (error) {
      console.error('Login failed:', error);
    }
  };

  return (
    <EuiProvider colorMode="dark">
      <EuiFlexGroup
        alignItems="center"
        justifyContent="center"
        style={{ width: '100vw', height: '100vh' }}
      >
        <EuiFlexItem grow={false}>
          <EuiPanel paddingSize="xl">
            <EuiFlexGroup justifyContent="center" alignItems="center">
              <EuiFlexItem>
                <EuiImage src={animation} alt="animation" />
              </EuiFlexItem>
              <EuiFlexItem>
                <EuiImage src={logo} alt="logo" size="230" />
                <EuiSpacer size="xs" />
                <EuiText textAlign="center" grow={false}>
                  <h3>
                    <EuiTextColor>One Platform to</EuiTextColor>
                    <EuiTextColor color="#0b5cff">Connect</EuiTextColor>
                  </h3>
                </EuiText>
                <EuiSpacer size="l" />
                <EuiButton fill onClick={login}>
                  Login With Google
                </EuiButton>
              </EuiFlexItem>
            </EuiFlexGroup>
          </EuiPanel>
        </EuiFlexItem>
      </EuiFlexGroup>
    </EuiProvider>
  );
}

export default Login;
