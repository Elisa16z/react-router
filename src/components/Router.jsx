import { Link, Route, Routes } from 'react-router-dom'

function Router() {

    const Home = () => {
        return (
            <div className='container'>
                <h1>Home</h1>
                <p>Welcome to the home page!</p>
            </div>
        )
    }
    const SearchPage = () => {
        return (
            <div className='container'>
                <h1>Search Page</h1>
                <p>Welcome to the search page!</p>
            </div>
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

        </Routes>
       </div>
      </>
    )
  }
  
  export default Router
  