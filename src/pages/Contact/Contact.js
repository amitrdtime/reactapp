function Contact(props) {
    let email = 'amit@gmail.com';

    let handleGetEmail = () =>{
        props.emailGet(email);
    }
    return (
        <main className="p-3 box1" >
            <p>This is Contact us page</p>
            <button onClick={handleGetEmail}>Click</button>
        </main> 
    )
}

export default Contact;