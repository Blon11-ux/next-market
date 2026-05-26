import MyPage from "./myPage"
import connectDB from "../../../utils/database"
import { ItemModel } from "../../../utils/schemaModels"

export async function generateMetadata(context){
    const { id } = await context.params
    await connectDB()
    const singleItem = await ItemModel.findById(id)
    return {
        title: singleItem?.title ?? 'Edit Item',
        description: singleItem?.description ?? ''
    }
}

const UpdateItem = (context) => {
    return <MyPage {...context}/>
}

export default UpdateItem