const reactContentRoot = document.getElementById("root")

const app = () => {
    const myItem = 'Item3'
    return(
        <ul>
        <li>item1</li>
        <li>item2</li>
        <li>{myItem.toUpperCase()}</li>
    </ul>
    )

} 



ReactDOM.render( app(), reactContentRoot)