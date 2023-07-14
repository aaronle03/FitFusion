import react from 'react';
import './Contact.css';

function Contact() {
    return (
        <div className="contact-container">
            hello
        </div>
    );
}

export default Contact;

let navigate = useNavigate();
const routeChange = () => {
  let path = `newPath`;
  navigate(path);
}