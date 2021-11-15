import Favorites from './pages/Favorites'
import Login from './pages/Login'
import SignUp from './pages/SignUp'
import Movies from './pages/Movies'
import MoviePage from './pages/MoviePage'
import UserInformation from './pages/UserInformation'
import Error from './pages/Error'

export const allRoutes = [
    { path: `${process.env.REACT_APP_REDIRECT_LINK}/login`, component: Login },
    { path: `${process.env.REACT_APP_REDIRECT_LINK}/signup`, component: SignUp },
    { path: `${process.env.REACT_APP_REDIRECT_LINK}/favorites`, component: Favorites, isPrivate: true },
    { path: `${process.env.REACT_APP_REDIRECT_LINK}/movies`, component: Movies, isPrivate: true },
    { path: `${process.env.REACT_APP_REDIRECT_LINK}/movies/:id`, component: MoviePage, isPrivate: true },
    { path: `${process.env.REACT_APP_REDIRECT_LINK}/userinformation`, component: UserInformation, isPrivate: true },
    { path: `${process.env.REACT_APP_REDIRECT_LINK}*`, component: Error },
]
