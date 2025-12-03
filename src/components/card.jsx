function Card({
    title,
    subtitle,
    color
}){
    return(
        <div className="card" style={{borderColor: color}}>
            <h2>{title}</h2>
            <p>{subtitle}</p>
        </div>
    )
}

export default Card