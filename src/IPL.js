function IPL(props){
    console.log(props)
    props.winner="MI"
    return (<div>
      
        IPL 14th season  is starting from 9th of April
        <div>
            ESCN :   {props.winner}
        </div>
    </div>)
}

export default IPL