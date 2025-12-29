import {Row, Col} from 'react-bootstrap'
import {Link} from 'react-router-dom'

export default function Footer(){
    return (
        <div className="footer">
            <h5>Questions? Contact us</h5>
            <Row>
                <Col md={3}>
                    <ul>
                        <li><Link className="link" to="#">FAQ</Link></li>
                        <li><Link className="link" to="#">Investor Relation</Link></li>
                        <li><Link className="link" to="#">Privacy</Link></li>
                        <li><Link className="link" to="#">Speed Test</Link></li>
                    </ul>

                    <select>
                        <option>Language</option>
                        <option>French</option>
                        <option>Arabic</option>
                    </select>

                    <h6>MovieHype Tunisia</h6>
                </Col>

                <Col md={3}>
                   <ul>
                        <li><Link className="link" to="#">Help Center</Link></li>
                        <li><Link className="link" to="#">Jobs</Link></li>
                        <li><Link className="link" to="#">Cookies Preferences</Link></li>
                        <li><Link className="link" to="#">Legal Notices</Link></li>
                    </ul>
                </Col>

                <Col md={3}>
                    <ul>
                        <li><Link className="link" to="#">Account</Link></li>
                        <li><Link className="link" to="#">Ways To Watch</Link></li>
                        <li><Link className="link" to="#">Corporate Informtaion</Link></li>
                        <li><Link className="link" to="#">Netflix Originals</Link></li>
                    </ul>
                </Col>

                <Col md={3}>
                    <ul>
                        <li><Link className="link" to="#">Media Center</Link></li>
                        <li><Link className="link" to="#">Terms of Use</Link></li>
                        <li><Link className="link" to="#">Contact us</Link></li>
                    </ul>
                </Col>
            </Row>
        </div>
    )
}
