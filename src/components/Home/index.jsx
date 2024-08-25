import "./home.css"

const Home = () => {
  return (
    <section id='home'>
      <div className="container">
         
         <div className="details">
          <h1>Hello! I am <span className="color__primary">Parfaite Twagiramariya.</span> I'm happy to see you here!</h1>
          <p className=" description" style={{marginTop:"3%", width:"70%", fontSize:"20px"}}>
            I'm a passionate and driven full-stack developer with a strong background in computer science and software engineering. I can help you to implement your idea into a useful software project. I bring both creativity and technical expertise to every project and I'm dedicated to delivering high-quality results that meet your needs.
          </p>
          
         </div>
      </div>
    </section>
  )
}

export default Home