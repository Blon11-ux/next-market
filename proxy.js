import { jwtVerify } from "jose"
import  {NextResponse} from "next/server"

export async function proxy(request){
    // const token = "eyJhbGciOiJIUzI1NiJ9.eyJlbWFpbCI6ImR1bW15QGdtYWlsLmNvbSIsImV4cCI6MTc3ODU1NDQzN30.KiDW666izfxry8T5avK6IngswtKBiV2KnGlcdnpJ_8w"
    const token = await request.headers.get("Authorization")?.split(" ")[1]
    if (!token){
        return NextResponse.json({message:"トークンがありません"})
    }
    try{
        const secretKey = new TextEncoder().encode("next-market-app-book")
        const decodedJwt = await jwtVerify(token, secretKey)
        console.log("decodedJwt:", decodedJwt);
        return NextResponse.next()
    } catch{
        
        return NextResponse.json({message:"トークン正しくないのでログインしてください"})

    }
    return NextResponse.next()
}
export const config = {
    matcher: ["/api/item/create", "/api/item/update/:path*","/api/item/delete/:path*"],
}