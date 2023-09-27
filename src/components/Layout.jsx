import { Outlet, Link, useLocation } from "react-router-dom"

function Layout () {
  const location = useLocation()


  return (
    <div className="md:flex md:min-h-screen">
        <aside className="md:w-1/4 bg-indigo-600 px-5 py-10">
          <h2 className="text-4xl font-black text-center text-white">CRM - Clientes</h2>
          <nav className="mt-10">
            <Link 
              to="/" 
              className={`${location.pathname === '/' ? 'text-blue-400' : 'text-white'} text-2xl block text-white hover:text-blue-400`}>Clientes
            </Link>
            <Link 
              to="/clientes/nuevo" 
              className={`${location.pathname === '/clientes/nuevo' ? 'text-blue-400' : 'text-white'} text-2xl block mt-2 text-white hover:text-blue-400`}>Nuevos clientes</Link>
          </nav>
        </aside>
        <main className="md:w-3/4 p-10 md:h-screen overflow-scroll">
          <Outlet />
        </main>
    </div>
  )
}

export default Layout