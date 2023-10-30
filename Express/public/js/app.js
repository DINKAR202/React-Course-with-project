const App = () => {
    const [products, setProducts] = React.useState([]);

    React.useEffect(() => {
        fetchProducts()
    }, [])

    function fetchProducts() {
        fetch('/api/products')
        .then((res) => res.json())
        .then(data => {
            setProducts(data);
        })
    }
    
    return (
        <ul className="list-group">
            {
                products.map((product) => {
                        return(
                        <li key={product.id} className="list-group-item">
                            <div>
                                <strong>{product.name}: </strong>
                                ${product.price}
                            </div>
                        </li>
                )
            })
            }
        </ul>
    )
} 

ReactDOM.render(<App />, document.getElementById('app'))