function Contacts() {
    return (<>
    <section id="contact">
    <h2>Contact</h2>
    <form id="contact-form">
      <h4><img title="mobile" src="https://static.vecteezy.com/system/resources/previews/004/956/037/original/phone-call-icon-vector.jpg" width="50px" height="50px"  />        <p style={{display:"inline",width: "150px"}}>6380720250 / 8148932075</p></h4>
      <h4><img title="mail" src="https://static.vecteezy.com/system/resources/previews/020/009/614/non_2x/email-and-mail-icon-black-free-png.png" width="50px" height="50px"  /><p style={{display:"inline",width: "150px"}}>gunasekar17329777557amma@gmail.com</p></h4>
      <input type="text" placeholder="Your Name" required />
      <input type="email" placeholder="Your Email" required />
      <textarea placeholder="Message" required></textarea>
      <button type="submit">Send</button>
    </form>
  </section>
    </>)
}

export default Contacts;