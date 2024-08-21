import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Select from "../components/Select";
import Buttons from "../components/Buttons";
import Footer from "../components/Footer";
import TableRecherche from "../components/TableRecherche";
import Form from 'react-bootstrap/Form';
import { useState } from "react";

const VideoJuegos = () => {
    // Utlizando el hook useForm
    // Funcion register, registra los elementos del formulario
    // HandleSubmit
    const { register,
            handleSubmit 
        } = useForm();

    const navigate = useNavigate();
    const onSubmit = (data)=>{
        console.log(data)
        navigate('/home')
    }
    const [buton, setButon] = useState({
        butonBuscar: "Buscar",
        butonSeleccionar: "Seleccionar"
    })
    return <div>
         <Header/>
        <blockquote className="blockquote text-center">
            <p className="mb-4 h1">VideoJuegos</p>
            <footer className="blockquote-footer">Busca tu artículo preferido </footer>
        </blockquote>
        <div className="contenedor">
            <Form onSubmit={handleSubmit(onSubmit)} className="formulario">
                <Form.Group className="mb-3" controlId="articulo" >
                    <Form.Label>Artículo</Form.Label>
                    <Form.Control type="text" placeholder="articulo" {...register('articulo')} />
                </Form.Group>
                <div>

                </div>
                <div className="input-group mb-3">
                    <Select></Select>
                </div>
                <Buttons type="submit" onClick={handleSubmit} value={buton.butonBuscar}></Buttons>
            </Form>
        </div>
        <div className="formulario">
            <TableRecherche></TableRecherche>
            <Buttons type="submit" value={buton.butonSeleccionar}></Buttons>
        </div>
        <div className="formulario">
            <Footer></Footer>

        </div>
       
    </div>

}

export default VideoJuegos;