
export const Banner = ({title, subTitle}) =>{
    return (
        <div className ="text-bg-dark p-3 text-center">
            <h1>{title}</h1>
            <h2 className="fs-5">{subTitle}</h2>
        </div>
    )
}