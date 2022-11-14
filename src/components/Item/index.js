const Item = ({ children }) => {
    return(
        <a href="/" style={{fontSize: 20, color: '#000', borderRadius: 10, marginBottom: 5}} className="list-group-item list-group-item-action list-group-item-dark">
         {children}
        </a>
    )
}

export default Item;