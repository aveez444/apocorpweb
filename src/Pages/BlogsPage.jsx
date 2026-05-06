import BlogsHero from "../Components/BlogsHero";
import BlogsComingSoon from "../Components/BlogsComingSoon";

function BlogsPage() {
  return (
    <div className="blogs-page-container">
      <div className="bg-blob blob-1"></div>
      <div className="bg-blob blob-2"></div>

      <h1 className="blogs-heading">Blogs</h1>

      <BlogsComingSoon />
    </div>
  )
}

export default BlogsPage;