import Link from "next/link"

const NotFound = () => {
  return (
    <div>
      <h1>Not Found</h1>
      <p>Sorry, the page you are looking for is not available.</p>
      <Link href="/">Return Home</Link>
    </div>
  )
}

export default NotFound