import {Table, Button, Modal, Form} from 'react-bootstrap'
import 'react-rater/lib/react-rater.css'
import {useState} from 'react'
import {UpdatedModal} from './UpdatedModal'
import axios from 'axios'


export const Admin = ({movies, searchInput}) => {

  //Declaring Modal add states===============================
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  //Posting data from db.json================================
  //Declaring form input's state
  const [input, setInput] = useState({
      Poster : "",
      Title : "",
      Genre : ""
  }) 
  const refresh = ()=> {
    window.location.reload()
}
  //Posting data to the db.json==============================
  const handleSubmit = async (e) => {
  e.preventDefault()
      await axios.post(`https://movieappl-default-rtdb.firebaseio.com/posts.json`,input)
      .then(response => {console.log(response)
                      console.log(response.data)})
      .then(response => refresh())
      .catch(error => console.log(error))
  }

  

  //Delete data from db.json=================================
  const handleDelete = async (id) => {
    let confirmDelete = window.confirm("Are you sure to delete this movie?")
        if (confirmDelete) {
        await axios.delete(`https://movieappl-default-rtdb.firebaseio.com/posts/${id}.json`)
        .then(response => {console.log(response); console.log(response.data)})
        .then(response => refresh())
        .catch(error => console.log(error))
        } 
  }

  //Delete all the data from db.json=================================
  const handleDeleteAll = async () => {
    let confirmDelete = window.confirm("Are you sure to delete all the movies?")
        if (confirmDelete) {
        await axios.delete(`https://movieappl-default-rtdb.firebaseio.com/posts.json`)
        .then(response => {console.log(response); console.log(response.data)})
        .then(response => refresh())
        .catch(error => console.log(error))
        } 
  }

return (
    <>
     <div className="spacer">
      <div className="buttons">
        <button onClick={handleDeleteAll}>Remove all</button>
        <button onClick={handleShow}><i class="fas fa-plus"></i></button>
      </div>
    
    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
        <Modal.Title>Adding a movie</Modal.Title>
        </Modal.Header>
        
        <Modal.Body>
           <Form onSubmit={handleSubmit}>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>URL Image</Form.Label>
                    <Form.Control className="form" type="text" placeholder="Enter URL Image"
                    name = "Poster"
                    value={input.Poster} 
                    onChange={ e =>setInput({...input, Poster : e.target.value})}/>
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Title</Form.Label>
                    <Form.Control className="form" type="text" placeholder="Enter the title" 
                    name="Title"
                    value={input.Title}
                    onChange={ e =>setInput({...input, Title : e.target.value})}/>
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Genre</Form.Label>
                    <Form.Control className="form" type="text" placeholder="Enter the genre" 
                    name = "Genre"
                    value={input.Genre}
                    onChange={ e =>setInput({...input, Genre : e.target.value})}/>
                </Form.Group>
                
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleClose} type="submit">
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Form>
        </Modal.Body>
      </Modal>


{/*      
     <div className="cards mt-5 pt-5" id="wishlist"> */}
     
        <div className="container">
         <Table bordered hover size="sm" className="thead--movie--table text-center">
             <thead>
                <tr>
                <th>#</th>
                <th>Image</th>
                <th>Title</th>
                <th>Genre</th>
                <th>Edit</th>
                </tr>
             </thead>
    
             <tbody>
           {Object.keys(movies)?.filter( filtredElement => 
           movies[filtredElement]?.Title?.toLowerCase().includes(searchInput)
           )?.map(element => 
                <>
                <tr>
                <td>{movies[element]?.id}</td>
                <td><img src={movies[element]?.Poster} alt={movies[element]?.Title} className="post-size-img"/></td>
                <td>{movies[element]?.Title}</td>
                <td>{movies[element]?.Genre}</td>
                <td>
                   <span>
                   <Button variant="danger" onClick={ () =>handleDelete(element)}><i class="far fa-trash-alt"></i></Button>
                   <UpdatedModal element={movies[element]} x={element} refresh={refresh}/>
                   </span>
                </td>
                </tr>
                </>
                )}
                </tbody>
            </Table>
            </div>
            </div>
    </>
) 
} 
