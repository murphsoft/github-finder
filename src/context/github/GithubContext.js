// using reducer instead of state
//import { createContext, useState } from "react";
import { createContext, useReducer } from "react";
import githubReducer from "./GethubReducer";

const GithubContext = createContext()
//const GITHUB_URL = process.env.REACT_APP_GITHUB_URL

export const GithubProvider = ({ children }) => {
    // using reducer instead of state
    //const [users, setUsers] = useState([])
    //const [loading, setLoading] = useState(true)

    const initialState = {
        users: [],
        user: {},   // specific user from a returned search list
        repos: [],   // Github repositories array
        loading: false,
      }

    const [state, dispatch] = useReducer(githubReducer, initialState)      
    
    // Clear users from state
    //const clearUsers = () => dispatch({type: 'CLEAR_USERS'})

    // Set loading
    //const setLoading = () => dispatch({type: 'SET_LOADING'})

    return (
        <GithubContext.Provider 
            value={{ 
                // replaced
                //users: state.users, 
                //loading: state.loading,
                //user: state.user,
                //repos: state.repos,
                // with
                ...state,
                dispatch,
                //searchUsers,
                //clearUsers,
                //getUser,
                //getUserRepos,
            }}
        >
            {children}
        </GithubContext.Provider>
    )    
}

export default GithubContext 
