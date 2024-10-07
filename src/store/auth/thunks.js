import { loginWithEmailPassword, registerWitEmailPassword, signInWithGoogle } from "../../firebase/providers"
import { cheekingCredentials, logout, login } from "./"

export const checkingAuthentication = ( email, password) => {
    return async( dispatch ) => {

        dispatch( cheekingCredentials() )
    }
}

export const startGoogleSignIn = () => {
    return async( dispatch ) => {

        dispatch( cheekingCredentials() )
        
        const result = await signInWithGoogle();
        if( !result.ok ) return dispatch( logout( result.errorMessage ) );

        dispatch( login( result ) );
    }
}


export const startCreatingUserWithEmailPassword = ({ email, password, displayName }) => {

    return async ( dispatch ) => {

        dispatch( cheekingCredentials() );

        const { ok, uid, photoURL, errorMessage } = await registerWitEmailPassword({ password, email, displayName });


        if( !ok ) return dispatch( logout({ errorMessage }));

        dispatch( login( { uid, displayName, email, photoURL } ) );
    }
}
export const startLoginWithEmailPassword = ({ email, password }) => {
    return async (dispatch) => {
 
        dispatch(cheekingCredentials());
     
        const result = await loginWithEmailPassword({ email, password });
     
        if (!result.ok) return dispatch(logout({ errorMessage: result.errorMessage }));
     
        dispatch(login(result));
     
      };
}