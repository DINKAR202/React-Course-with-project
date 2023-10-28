const App = () => {
    const [products, setProducts] = React.useState([]);

    React.useEffect(() => {
        fetchProducts()
    }, [])

    function fetchProducts() {
        fetch('/api/products')
        .then((res) => res.json())
        .then(data => {
            console.log(data);
            // setProducts
        })
    }
    
    return (
        <ul className="list-group">
             <li className="list-group-item">And a fifth one</li>
        </ul>
    )
} 

ReactDOM.render(<App />, document.getElementById('app'))