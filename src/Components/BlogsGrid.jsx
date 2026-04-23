import carousel1 from "../assets/carousel-1.png";
import "../Styles/BlogsGrid.css";

const blogPosts = [
  {
    id: 1,
    title: "Initial Confirmation",
    desc: "We will send a short email notifying you that we successfully received your request and started working on it.",
    img: carousel1,
  },
  {
    id: 2,
    title: "Initial Confirmation",
    desc: "We will send a short email notifying you that we successfully received your request and started working on it.",
    img: carousel1,
  },
  {
    id: 3,
    title: "Initial Confirmation",
    desc: "We will send a short email notifying you that we successfully received your request and started working on it.",
    img: carousel1,
  },
  {
    id: 4,
    title: "Initial Confirmation",
    desc: "We will send a short email notifying you that we successfully received your request and started working on it.",
    img: carousel1,
  },
  {
    id: 5,
    title: "Initial Confirmation",
    desc: "We will send a short email notifying you that we successfully received your request and started working on it.",
    img: carousel1,
  },
  {
    id: 6,
    title: "Initial Confirmation",
    desc: "We will send a short email notifying you that we successfully received your request and started working on it.",
    img: carousel1,
  },
  {
    id: 7,
    title: "Initial Confirmation",
    desc: "We will send a short email notifying you that we successfully received your request and started working on it.",
    img: carousel1,
  },
  {
    id: 8,
    title: "Initial Confirmation",
    desc: "We will send a short email notifying you that we successfully received your request and started working on it.",
    img: carousel1,
  },
  {
    id: 9,
    title: "Initial Confirmation",
    desc: "We will send a short email notifying you that we successfully received your request and started working on it.",
    img: carousel1,
  },
];

function BlogsGrid() {
  return (
    <section className="blogs-grid-section">
      <div className="blogs-grid-shell">
        <div className="blogs-grid">
          {blogPosts.map((post) => (
            <article key={post.id} className="blog-card">
              <div className="blog-card-image">
                <img src={post.img} alt={post.title} />
              </div>
              <div className="blog-card-body">
                <h3 className="blog-card-title">{post.title}</h3>
                <p className="blog-card-desc">{post.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default BlogsGrid;
