import "../Styles/BlogsComingSoon.css";

function BlogsComingSoon() {
  return (
    <div className="blogs-coming-soon-container">
      <div className="blogs-wip-card">
        <div className="blogs-dots-container">
          <div className="blogs-dot"></div>
          <div className="blogs-dot"></div>
          <div className="blogs-dot"></div>
        </div>
        
        <div className="blogs-wip-text">Coming Soon</div>
        
        <p className="blogs-wip-subtext">
          Our blog is under development. Get ready for insightful articles, 
          company updates, and industry news delivered straight to you.
        </p>
      </div>
    </div>
  );
}

export default BlogsComingSoon;
