import {useState} from 'react'
import {Button, Modal, Form} from 'react-bootstrap'
import axios from 'axios'

export const UpdatedModal = ({element,x, refresh}) => {
    
    //Declaring Update Modal states=========================
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShowUpdated = () => setShow(true);

    //Posting data from db.json================================
    //Declaring form input's state
    const [input, setInput] = useState({
        Poster : element.Poster,
        Title : element.Title,
        Genre : element.Genre
    }) 

    //Handle Change============================================
    const handleChangeUpdate = e => {
        const {name, value} = e.target
        setInput({...input, [name]:value})
        console.log(input)
    }

    //Editing data from db.json================================
    const handleUpdate = async (id) => {
    await axios.put(`https://movieappl-default-rtdb.firebaseio.com/posts/${id}.json`,input)
    .then(response => {console.log('Status:' , response.status)
                       console.log('Data : ', response.data)
                       setInput(response.data)})
    .then(response => {refresh()
                       console.log(response)})
    .catch(error => console.error('something went wrong', error)
    )}
    
  return(
      <>
    <Button variant="info" onClick={handleShowUpdated}><i class="far fa-edit"></i></Button>
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
            <Modal.Title>Edit Movie</Modal.Title>
            </Modal.Header>

            <Modal.Body>
            <Form>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>URL Image</Form.Label>
                    <Form.Control className="form" type="text" placeholder="Enter URL Image"
                    name = "Poster"
                    defaultValue={element.Poster} 
                    onChange={handleChangeUpdate}/>
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Title</Form.Label>
                    <Form.Control className="form" type="text" placeholder="Enter the title" 
                    name="Title"
                    defaultValue={element.Title}
                    onChange={handleChangeUpdate}/>
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Genre</Form.Label>
                    <Form.Control className="form" type="text" placeholder="Enter the genre" 
                    name = "Genre"
                    defaultValue={element.Genre}
                    onChange={handleChangeUpdate}/>
                </Form.Group>
            </Form>
            </Modal.Body>
            
            <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
                Close
            </Button>
            <Button variant="primary" onClick={()=>handleUpdate(x)}>
                Save Changes
            </Button>
            </Modal.Footer>
        </Modal>
        </>
    )
}