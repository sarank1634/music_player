

const AlbumItem = ({image,name,desc,id}) => {
    return(
        <div>
            <div className="min--[180px] p-2 rounded cursor-pointer hover: bg-[#ffffff26]">
                <img className="rounded" src={image} alt="" />
                <p className="font-blod mt-2 mb-1">{name}</p>
            </div>
        </div>
    )
}

export default AlbumItem;