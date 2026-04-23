import BlogsHero from "../Components/BlogsHero";
import BlogsComingSoon from "../Components/BlogsComingSoon";

function BlogsPage() {
  return (
    <div className="blogs-page-container">
      {/* Decorative Background blobs */}
      <div className="bg-blob blob-1"></div>
      <div className="bg-blob blob-2"></div>

      <h1 className="blogs-heading">Blogs</h1>
      
      {/* <BlogsHero /> */}
      <BlogsComingSoon />
    </div>
  )
}

export default BlogsPage;