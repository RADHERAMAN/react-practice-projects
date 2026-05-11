function AvtarCard ({avtar, level = "Rookie" }){
    return (
        <article>
            <div>{avtar.initials}</div>
            <h3>{avtar.name}</h3>
            <p>{avtar.role}</p>
            <p>Level : {level}</p>
        </article>
    )
}
export default AvtarCard;