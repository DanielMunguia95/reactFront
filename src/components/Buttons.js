import Button from 'react-bootstrap/Button';

function Buttons(props) {
    console.log('pros;', props)
  return (
    <>
         <Button as="input" type="submit" value={props.value} />{' '}
    </>
  );
}

export default Buttons;