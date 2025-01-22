
import './segundo.css'

export function SecondDivBook(props){
    return(
        <>
            <div className='divide'>
                <img 
                src={props.img}
                 alt={props.title} 
                />

                <h2>{props.title}</h2>
                <h4>{props.author}</h4>
            </div>
        </>
    )
}

export default SecondDivBook;