import Favorites from './pages/Favorites'
import Login from './pages/Login'
import SignUp from './pages/SignUp'
import Movies from './pages/Movies'
import MoviePage from './pages/MoviePage'
import UserInformation from './pages/UserInformation'
import Error from './pages/Error'

export const allRoutes = [
    { path: '/login', component: Login },
    { path: '/signup', component: SignUp },
    { path: '/favorites', component: Favorites, isPrivate: true },
    { path: '/movies', component: Movies, isPrivate: true },
    { path: '/movies/:id', component: MoviePage, isPrivate: true },
    { path: '/userinformation', component: UserInformation, isPrivate: true },
    { path: '/*', component: Error },
]
