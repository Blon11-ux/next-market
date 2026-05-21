import MyPage from "./myPage"

const BASE_URL = process.env.NEXT_PUBLIC_URL || "http://localhost:3000"

export async function generateMetadata(context){
    const { id } = await context.params
    const response = await fetch(`${BASE_URL}/api/item/readsingle/${id}`, {cache: "no-store"})
    const jsonData = await response.json()
    const singleItem = jsonData.singleItem
    return {
        title: singleItem?.title ?? 'Edit Item',
        description: singleItem?.description ?? ''
    }
}

const UpdateItem = (context) => {
    return <MyPage {...context}/>
}

export default UpdateItem