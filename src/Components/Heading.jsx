import "../style.css";

const Heading = (props) => {
    return ( 
        <>
          <div className="text-left">
            <h1 className="text-primary text-2xl font-bold">{props.title}</h1>
          </div>           
        </>
     );
}
 
export default Heading;
