import React,{useState} from 'react'

const Contact = () => {
    // const [user, setUser] = useState({})
    // console.log(user)

    // const handleChange = (e) => {
    //     const name = e.target.name;
    //     const value = e.target.value;
    //     setUser({ ...user, [name]: value });
    //   };
      
    // const handleSubmit = (e) => { 
    //     e.preventDefault()
      
    //     console.log(user)
    //     setUser({name: '', email: '', subject: '', message: ''})
    // }
  return (
    <section className="contact" id="contact">
         <div className="overlay">
             <div className="container">
                <h1 className="text-[3rem] text-slate-400">Let's Talk</h1>
                <p className='text-[1.1rem] text-slate-400'>Send me a message 👨🏽‍💻
                </p>
                
                  <form action="https://formspree.io/f/mlezbrqk" method="POST" >
                        <input type="text" placeholder="Name" name="name" />
                        <input type="email" placeholder="Email" name="email" required />
                      <input type="text" placeholder="Subject" name="subject" required />
                        <textarea rows="10" placeholder="Message" name="message"  required></textarea>
                      <div className='message-btn flex flex-col justify-center items-center'>
                      <button type='submit' className="btn btn-primary bg-gradient-to-r from-cyan-500 to-blue-900 rounded-full">Submit</button>
                      </div>
                    </form>

            
             </div>

         </div>
     </section>
  )
}

export default Contact