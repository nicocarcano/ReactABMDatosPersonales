import { useEffect, useState } from "react"
import { Cliente } from "../../types/Cliente";
import { ClienteService } from "../../services/ClienteService";
import Loader from "../Loader/Loader";
import { Button, Table } from "react-bootstrap";
import { ModalType } from "../../types/ModalType";


const initilizableNewCliente = (): Cliente => {
    return{
    nombre: "",
    apellido: "",
    telefono: 0,
    email: "",
    clave: "",
    fechaNacimiento: "",
    calle: "",
    numero: 0,
    localidad: ""
    };
};

const [cliente, setCliente] = useState <Cliente>(initilizableNewCliente);

const[showModal,setShowModal] = useState(false);
const[modalType,setModalType] = useState<ModalType>(ModalType.NONE);
const[title,setTitle] = useState("");

const handleClick = (newTitle: string, cli: Cliente, modal:ModalType) => {
    setTitle(newTitle);
    setModalType(modal);
    setCliente(cli);
    setShowModal(true);
};

const ClienteTable = () => {
    const [clientes, setClientes] = useState<Cliente[]>([]);
    const[isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        const fetchClientes =async () => {
            const clientes = await ClienteService.getClientes();
            setClientes(clientes);
            setIsLoading(false);
        };

        fetchClientes();

    },[]);

    console.log(JSON.stringify(clientes, null, 2));


  return (
    <>
    <Button onClick={()=> handleClick("Editar datos", initilizableNewCliente(),ModalType.NONE)}>Editar datos</Button>
    {isLoading ? <Loader/> : (
        <Table hover>
            <thead>
                <tr>
                    <th>Nombre</th>
                    <th>Apellido</th>
                    <th>Telefono</th>
                    <th>email</th>
                    <th>clave</th>
                    <th>fechaNacimiento</th>
                    <th>calle</th>
                    <th>numero</th>
                    <th>localidad</th>
                </tr>
            </thead>
            <tbody>
                {
                    clientes.map ( cliente =>(
                        <tr>
                        <td>{cliente.nombre}</td>
                        <td>{cliente.apellido}</td>
                        <td>{cliente.telefono}</td>
                        <td>{cliente.email}</td>
                        <td>{cliente.clave}</td>
                        <td>{cliente.fechaNacimiento}</td>
                        <td>{cliente.calle}</td>
                        <td>{cliente.numero}</td>
                        <td>{cliente.localidad}</td>
                        </tr>
                    ))
                }
            </tbody>




        </Table>




    )

    }
      
    </>
  )
}

export default ClienteTable
