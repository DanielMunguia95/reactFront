import { useForm, useController } from "react-hook-form";
import Header from "../components/Header";
import Buttons from "../components/Buttons";
import Footer from "../components/Footer";
import TableRecherche from "../components/TableRecherche";
import Form from 'react-bootstrap/Form';
import { useState } from "react";
import Select from "../components/Select";

const Home = () => {
    const { register, control, handleSubmit } = useForm();
    const { field } = useController ({ name: 'typeOption', control});
    
    const onSubmit = (data) => {
        console.log(data);
    }

    const [buton, setButon] = useState({
        butonBuscar: "Buscar",
        butonSeleccionar: "Seleccionar"
    })

    const handleSelectChange = (option) => {   
        console.log('Entra');
        field.onChange(option.value);
    }

    const typeArticulosOptions = [
        {value: "anime", label:"Anime"},
        {value: "manga", label:"Manga"},
        {value: "video Juegos", label:"Video Juego"}

    ]


    return <div>
        <Header />
        <blockquote className="blockquote text-center">
            <p className="mb-4 h1">Bienvenidos</p>
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
                <Select 
                value={typeArticulosOptions.find(({value}) => value === field.value )}
                onChange={handleSelectChange}
                 options={typeArticulosOptions}
                />
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

export default Home