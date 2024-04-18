import Link from "next/link"

type Props = {
      params: {
            productId: string
      }
    }
    
export default function ProductDetails({ params }: Props) {
      return (
            <div>
                  <h1>Welcome to Products</h1> 
                  <Link rel="stylesheet" href="3/review_3">reviews</Link>
                  <br></br>
            </div>
      )
}