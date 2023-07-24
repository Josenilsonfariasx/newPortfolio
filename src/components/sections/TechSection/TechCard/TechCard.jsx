export const TechCard = ({img, name})=>{
    return (
        <li className="title3">
        <img src={img} alt={name} />
        <h3>{name}</h3>
    </li>
    )
}