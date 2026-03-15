/* -------------------------------------------------------------------------- */
/*                                DEPENDENCIES                                */
/* -------------------------------------------------------------------------- */
// UI Lib Components
import { Button, Modal } from 'react-bootstrap';

// Styles
import './index.scss';

/* -------------------------------------------------------------------------- */
/*                          CONFIRM DIALOG COMPONENT                          */
/* -------------------------------------------------------------------------- */
function ConfirmDialog({ open, onClose, title, content, action, ...other }) {
/* -------------------------------- RENDRING -------------------------------- */
  return (
    <Modal show={open} onHide={onClose} size="md" centered>
      <Modal.Header closeButton>
        <h4>{title}</h4>
      </Modal.Header>
      {content && <Modal.Body><h4>{content}</h4></Modal.Body> }
      <Modal.Footer>
        {action}
        <Button variant="secondary" aria-label='Cancel' title="Title" onClick={onClose}>Cancel</Button>
      </Modal.Footer>
    </Modal>
  )
};

export default ConfirmDialog;