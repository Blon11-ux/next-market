import Image from "next/image"  
import Link from "next/link"
import connectDB from "../../../utils/database"
import { ItemModel } from "../../../utils/schemaModels"

const getSingleItem = async(id) => {
    await connectDB()
    const singleItem = await ItemModel.findById(id)
    return JSON.parse(JSON.stringify(singleItem))
}

export async function generateMetadata(context){
    const { id } = await context.params  
    const singleItem = await getSingleItem(id)

    if (!singleItem) return { title: 'Item not found' }  

    return {
        title: singleItem.title,
        description: singleItem.description
    }
}

const ReadSingleItem = async(context) => {
    const {id} = await context.params;
    const singleItem = await getSingleItem(id);
    return (
        <div className="grid-container-si">
            <div>
                <Image src={singleItem.image} width={750} height={500} alt="item-image" priority/>
            </div>
            <div>
                <h1>{singleItem.title}</h1>
                <h2>¥{singleItem.price}</h2>
                <hr/>
                <p>{singleItem.description}</p>
                <div>
                    <Link href={`/item/update/${singleItem._id}`}>アイテム編集</Link>
                    <Link href={`/item/delete/${singleItem._id}`}>アイテム削除</Link>
                </div>
            </div>
        </div>
    )
}

export default ReadSingleItem