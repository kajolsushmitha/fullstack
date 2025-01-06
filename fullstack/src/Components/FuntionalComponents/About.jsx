const About=(props)=>
{
    var styling={
        fontSize:"40px",
    }
    return(
        <section>
        <h1>
        This is About page  </h1>
        <h2 style={styling}> I am a student in {props.college},perundurai </h2>
        <h2>Other colleges:{props.college1},{props.college2} </h2>
        </section>
            
    )
}
export default About;