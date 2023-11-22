import { Form, FormControl, FormLabel, Modal } from "react-bootstrap";
import { Cliente } from "../../types/Cliente";
import { ModalType } from "../../types/ModalType";
import * as Yup from "yup";
import { useFormik } from "formik";

type ClienteModalProps = {
    show: boolean;
    onHide:() => void;
    title: string;
    modalType: ModalType;
    cli:Cliente;
}


const ClienteModal = ({show, onHide, title, modalType, cli}: ClienteModalProps) => {

    const validationSchema = () => {
        return Yup.object.shape({
            nombre: Yup.string().required("Es requerido"),
            apellido: Yup.string().required('Es requerido'),
            telefono: Yup.number().required('Es requerido'),
            email: Yup.string().required('Es requerido'),
            calle: Yup.string().required('Es requerido'),
            localidad: Yup.string().required('Es requerido'),
            numero: Yup.number().required('Es requerido'),
            fechaNacimiento: Yup.string().required('Es requerido')
        });
    }

    const formik = useFormik ({
        initialValues: cli,
        validationSchema: validationSchema(),
        validateOnChange: true,
        validateOnBlur: true,
        onSubmit: (obj: Cliente) => handleSaveUpdate(obj),
    })


  return (
    <div>
        {modalType === ModalType.DELETE ? (
            <></>
        ) : (
            <>
            <Modal show={show} onHide={onHide} centered backdrop = "static" className="modal-xl">
                <Modal.Header closeButton>
                    <Modal.Title>{title}</Modal.Title>

                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={formik.handleSubmit}>
                        <Form.Group controlId="formTitulo">
                            <FormLabel>
                                Nombre
                            </FormLabel>
                        <Form.Control
                            name= "nombre"
                            type="text"
                            value={formik.values.nombre || ''}
                            onChange={formik.handleBlur}
                            isInvalid={Boolean(formik.errors.nombre && formik.touched.nombre)}
                            />
                        <Form.Control.Feedback type="invalid">
                            {formik.errors.nombre}
                        </Form.Control.Feedback>
                        <Form.Group/>

                        <Form.Group controlId="formApellido">
                            <FormLabel>
                                Apellido
                            </FormLabel>
                        <Form.Control
                            name= "apellido"
                            type="text"
                            value={formik.values.apellido || ''}
                            onChange={formik.handleBlur}
                            isInvalid={Boolean(formik.errors.nombre && formik.touched.apellido)}
                            />
                        <Form.Control.Feedback type="invalid">
                            {formik.errors.apellido}
                        </Form.Control.Feedback>
                        <Form.Group/>

                        <Form.Group controlId="formTelefono">
                            <FormLabel>
                                Telefono
                            </FormLabel>
                        <Form.Control
                            name= "telefono"
                            type="number"
                            value={formik.values.telefono || ''}
                            onChange={formik.handleBlur}
                            isInvalid={Boolean(formik.errors.nombre && formik.touched.telefono)}
                            />
                        <Form.Control.Feedback type="invalid">
                            {formik.errors.telefono}
                        </Form.Control.Feedback>
                        <Form.Group/>

                        <Form.Group controlId="formEmail">
                            <FormLabel>
                                email
                            </FormLabel>
                        <Form.Control
                            name= "nombre"
                            type="text"
                            value={formik.values.email || ''}
                            onChange={formik.handleBlur}
                            isInvalid={Boolean(formik.errors.nombre && formik.touched.email)}
                            />
                        <Form.Control.Feedback type="invalid">
                            {formik.errors.email}
                        </Form.Control.Feedback>
                        <Form.Group/>

                        <Form.Group controlId="formTitulo">
                            <FormLabel>
                                Contraseña
                            </FormLabel>
                        <Form.Control
                            name= "nombre"
                            type="text"
                            value={formik.values.clave || ''}
                            onChange={formik.handleBlur}
                            isInvalid={Boolean(formik.errors.nombre && formik.touched.clave)}
                            />
                        <Form.Control.Feedback type="invalid">
                            {formik.errors.clave}
                        </Form.Control.Feedback>
                        <Form.Group/>

                        <Form.Group controlId="formFechaNacimiento">
                            <FormLabel>
                                Fecha nacimiento
                            </FormLabel>
                        <Form.Control
                            name= "nombre"
                            type="text"
                            value={formik.values.fechaNacimiento || ''}
                            onChange={formik.handleBlur}
                            isInvalid={Boolean(formik.errors.nombre && formik.touched.fechaNacimiento)}
                            />
                        <Form.Control.Feedback type="invalid">
                            {formik.errors.fechaNacimiento}
                        </Form.Control.Feedback>
                        <Form.Group/>

                        <Form.Group controlId="formCalle">
                            <FormLabel>
                                Calle
                            </FormLabel>
                        <Form.Control
                            name= "nombre"
                            type="text"
                            value={formik.values.calle || ''}
                            onChange={formik.handleBlur}
                            isInvalid={Boolean(formik.errors.calle && formik.touched.calle)}
                            />
                        <Form.Control.Feedback type="invalid">
                            {formik.errors.calle}
                        </Form.Control.Feedback>
                        <Form.Group/>

                        <Form.Group controlId="formNumero">
                            <FormLabel>
                                Numero 
                            </FormLabel>
                        <Form.Control
                            name= "nombre"
                            type="text"
                            value={formik.values.nombre || ''}
                            onChange={formik.handleBlur}
                            isInvalid={Boolean(formik.errors.numero && formik.touched.numero)}
                            />
                        <Form.Control.Feedback type="invalid">
                            {formik.errors.numero}
                        </Form.Control.Feedback>
                        <Form.Group/>

                        <Form.Group controlId="formLocalidad">
                            <FormLabel>
                                Localidad
                            </FormLabel>
                        <Form.Control
                            name= "nombre"
                            type="text"
                            value={formik.values.localidad || ''}
                            onChange={formik.handleBlur}
                            isInvalid={Boolean(formik.errors.localidad && formik.touched.localidad)}
                            />
                        <Form.Control.Feedback type="invalid">
                            {formik.errors.localidad}
                        </Form.Control.Feedback>
                        <Form.Group/>
                        

                        

                        
                    </Form>
                </Modal.Body>



            </Modal>
            
            </>

        )}
      
    </div>
  )
}

export default ClienteModal
