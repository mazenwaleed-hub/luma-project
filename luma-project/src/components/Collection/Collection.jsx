import { products } from "../../data/products"
import '../Collection/Collection.css'
export function Collection(){
    return (
        <section className="collection">
            <div className="headerCollection">
            <h1>Our Collection</h1>
            <p>Pieces made to complement everyday living.</p>
            </div>
            <div className="carts">

            {products.map((product) =>{
                return(
                    <div key={product.id} className="cart">
                        <div className="image">
                        <img src={product.image} alt="" width="200px"/>
                        </div>
                        <h3>{product.name}</h3>
                        <p>{product.category}</p>
                    </div> 
                )
            })}
            </div>
        </section>
    )
}