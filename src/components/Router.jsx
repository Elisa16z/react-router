import { Link, Route, Routes, useParams, Outlet, useLocation } from 'react-router-dom'

function Router() {

    const Home = () => {
        return (
            <div className='container'>
                <h1>Home</h1>
                Welcome to the home page!
            </div>
        )
    }
    const SearchPage = () => {
        const tacos = [
            'Cochinita',
            'Chili',
            'Carnita'
        ]
        return (
            <div className='container'>
                <h1>Search Page</h1>
                <ul>
                {tacos.map(taco => (
                   <li key={taco}><Link to={`/tacos/${taco}`}><h4>{taco}</h4></Link></li> 
                ))}
                </ul>
            </div>
        )
    }
  
    const Tacos = () => {
        const { taco } = useParams()
        const location = useLocation() // Hook para obtener la ruta actual
        return (
            <div className='container-tacos'>
                <h1>Tacos</h1>
                <div className="taco"><h2>{taco}</h2></div>
               
               {/* Mostrar el enlace solo si no estamos en /details */}
               {!location.pathname.includes('/details') && (
                    <Link to={`/tacos/${taco}/details`}><p>Ir a los detalles</p></Link>
                )}
                <Outlet />
            </div>
        )
    }

    const TacoDetails = () => {
        const { taco } = useParams()
        return (
                <h2>Taco Detail {taco}</h2>
        )
    }

    return (
      <>
       <div>
        <header>
            <nav>
                <h1> Miduchollos </h1>
                <ul>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/search-page'>Search Page</Link></li>
                </ul>
            </nav>
        </header>
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/search-page' element={<SearchPage />} />
            <Route path='/tacos/:taco' element={<Tacos />}>
              <Route path='details' element={<TacoDetails />} />
            </Route>
            <Route path='*' element={<h1>Not Found T</h1>}></Route>
        </Routes>
       </div>
      </>
    )
  }
  
  export default Router
  