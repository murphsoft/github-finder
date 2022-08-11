import axios from "axios"   // Use to replace native JS "fetch"

const GITHUB_URL = process.env.REACT_APP_GITHUB_URL

// Create an Axios object to perform the HTTP call
const github = axios.create({
    baseURL:  GITHUB_URL,
    // headers:  {Authorization: `token ${GITHUB_TOKEN}`}
    // if I were using the Auth token for Github, which i'm not
})

// Search for users based on "text" entered on the search bar
export const searchUsers = async (text) => {
    //setLoading()
    const params = new URLSearchParams({
        q: text
    })

    // Native JS fetch
    //const response = await fetch(`${GITHUB_URL}/search/users?${params}`)
    const response = await github.get(`/search/users?${params}`)
    return response.data.items

    //const {items} = await response.json()  
    //return items
} 

// Get user and repos
// Promise.all runs multiple queries
export const getUserAndRepos = async (login) => {
    const [user, repos] = await Promise.all([
      github.get(`/users/${login}`),
      github.get(`/users/${login}/repos`),
    ])
  
    return { user: user.data, repos: repos.data }
}








//  DEPRECATED

// Get a single user, selected from a search list (login = username)
export const getUser = async (login) => {

    const response = await fetch(`${GITHUB_URL}/users/${login}`)
    if (response.status === 404) {
        window.location = '/notfound'
    } else {
        const data = await response.json()  
    
        /*dispatch({ 
            type: 'GET_USER',
            payload: data,  
        })*/
        return data
    }

}  
    
    // Get the Repositories array 
export const getUserRepos = async (login) => {
    const response = await fetch(`${GITHUB_URL}/users?${login}/repos`)
    const data = await response.json()  
    return data

}   