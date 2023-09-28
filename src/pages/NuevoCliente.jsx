import { useNavigate } from "react-router-dom"
import Formulario from "../components/Formulario";

function NuevoCliente() {

  const navigate = useNavigate();

  return (
    <>
      <h1 className="font-black text-4xl text-blue-900">Nuevo Cliente</h1>
      <p className="mt-3">Llena todos los campos para registrar un nuevo cliente</p>

      <div className="flex justify-end">
        <button
          className="bg-blue-800 hover:bg-blue-900 text-white font-bold py-2 px-4 rounded"
          onClick={() => navigate('/')}
        >
          Volver a Clientes
        </button>
      </div>

      <div className="bg-white shadow rounded-md md:w-3/4 mx-auto px-5 py-10 mt-20">
        <form action="">
          <Formulario/>
          <input 
            type="submit"
            className="bg-indigo-600 hover:bg-indigo-700 w-full mt-5 p-2 text-white uppercase font-bold" 
            value="Registrar Cliente"
          />
        </form>
      </div>
    </>
  )
}

export default NuevoCliente