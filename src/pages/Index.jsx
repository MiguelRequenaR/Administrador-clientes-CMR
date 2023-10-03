import { useLoaderData } from "react-router-dom";
import { obtenerClientes } from "../data/clientes";
import Cliente from "../components/Cliente";

export function loader (){
  const clientes = obtenerClientes()
  return clientes
}

function Index () {

  const datos = useLoaderData();

  //Error Boundaries
  //Son componentes de react que obtienen un error


  return (
    <>
      <h1 className='font-black text-4xl text-blue-900'>Clientes</h1>
      <p className='mt-3'>Administra tus clientes</p>

      {datos.length ? (
        <table className="w-full bg-white shadow mt-5 table-auto">
          <thead className="bg-blue-800 text-white">
            <tr>
              <th className="p-2">Clientes</th>
              <th className="p-2">Contacto</th>
              <th className="p-2">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {datos.map(cliente => (
              <Cliente
                cliente={cliente}
                key={cliente.id}
              />
            ))}
          </tbody>
        </table>
      ):(
        <p className='mt-10 text-center text-2xl'>No hay clientes, comienza creando uno</p>
      )}
    </>
  )
}

export default Index