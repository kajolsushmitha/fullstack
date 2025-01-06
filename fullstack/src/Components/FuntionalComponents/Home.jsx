import '../../assets/css/Home.css'
import SimpleForm from './SimpleForm'
var Home=()=>{
    var styling={
        color:"green",
        fontSize:"40px",
    }
    return (
        <header>
            <h1 style ={styling}>NO MATTER WHEN YOU ARE BEGIN</h1>
            <h2 id="idSEg">
                TRY IT!!FOCUS IT!!
            </h2>
            <p className='box-model'>ACHIEVE IT!!</p>
           <SimpleForm/>
        </header>
    )

}
export default Home;