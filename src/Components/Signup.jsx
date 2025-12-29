import {useState} from 'react'
import {Modal, Button, Tabs} from 'react-bootstrap'

export const SignUp = () => {

  //Declaring Modal variables==========================
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  
  
  return(
        <>
            <i class="fas fa-user-ninja heart ninja-icon" onClick={handleShow}></i>
            <Modal show={show} onHide={handleClose} animation={false}>
                <Modal.Header closeButton>
                   <Modal.Title>Join us Now!</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    {/* <Tabs
                    id="controlled-tab-example"
                    activeKey={key}
                    onSelect={(k) => setKey(k)}
                    className="mb-3"
                    >
                    <Tab eventKey="home" title="Home">
                        <Sonnet />
                    </Tab>
                    <Tab eventKey="profile" title="Profile">
                        <Sonnet />
                    </Tab>
                    <Tab eventKey="contact" title="Contact" disabled>
                    <Sonnet />
                    </Tab>
                </Tabs> */}
                </Modal.Body>
                {/* <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                <Button variant="primary" onClick={handleClose}>
                    Save Changes
                </Button>
                </Modal.Footer> */}
            </Modal>
        </>
    )
}