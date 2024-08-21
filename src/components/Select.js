import Form from 'react-bootstrap/Form';

function Select(props) {
    
    return (
        
        <Form.Select  aria-label="Default select example">
            <option selected>Select...</option>
            <option value="manga"> Manga </option>
            <option value="Anime"> Anime </option>
            <option value="VideoJuegos"> Video Juegos </option>
        </Form.Select>
        
    );
}

export default Select;