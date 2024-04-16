import Link from "next/link";

export default function Blog() {
  return (
      <>
      <div className="col-12">
          <center>
              <h1 className="font-primary font-bold">Blogs</h1>
          </center>
          <div className="mx-auto lg:col-10">
              <center>
              <h4 className="font-primary font-bold">Welcome to my blog</h4>
              </center>
          </div>
          <div>
            <Link rel="stylesheet" href="blogs/first">First Blog</Link>
            <br></br>
            <Link rel="stylesheet" href="blogs/second ">Second Blog</Link>
            </div>
      </div>
      </>
  );
}