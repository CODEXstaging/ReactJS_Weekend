import { Component } from "react";
import axios from 'axios'
class Home extends Component{

    constructor(props){
        super()
        this.loadProducts()
        this.state={
            products:[]
        }
    }

    loadProducts=()=>{
        axios
.get("https://raw.githubusercontent.com/CODEXstaging/reactjs-products/main/products-react.json")
             .then( resp=>{
                 this.setState({
                     products:resp.data.products
                 })
             })
    }



    render(){
        return(<div>
            we are inside Home Component
            <div>
                { this.state.products.map( prod=>
                    <div>
                        {prod.name} {prod.price} {prod.img} {prod.color}
                    </div>
                    )}
            </div>

            </div>)
        }
}
export default Home