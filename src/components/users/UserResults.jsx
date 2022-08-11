//import {useEffect, useState} from 'react'
import {useContext} from 'react'
import Spinner from '../layout/Spinner'
import UserItem from './UserItem'
import GithubContext from '../../context/github/GithubContext'

function UserResults() {
    // Now in context
    //const [users, setUsers] = useState([])
    //const [loading, setLoading] = useState(true)

    const {users, loading} = useContext(GithubContext)

    // we will search for Git users, not just load the first 30
    //useEffect( () => {
    //    fetchUsers()
    //}, [])

    // Now in context
    //const fetchUsers = async () => {
    //    const response = await fetch(`${process.env.REACT_APP_GITHUB_URL}/users`)
    //    const data = await response.json()    
    //   setUsers(data)
    //    setLoading(false)
    //}

  
    if (!loading) {
        return (
            <div className='grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2'>
                {users.map((user) => (
                   <UserItem key={user.id} user={user} />
                ))}
            </div>
          )
    } else {
        return <Spinner/>
    }

}

export default UserResults
