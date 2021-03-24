import { Link } from 'react-router-dom';

const BlogList = ({ blogs }) => {
  return (
    <>
      {
        blogs.map( b => 
          <>
            <Link
              to={{
                pathname: `/blogs/${b.id}`,
                state: { ...b }
              }}>
              {b.title}
            </Link>
            <button>Edit</button>
            <button>Delete</button>
            <br />
          </>
        )
      }
    </>
  )
}

export default BlogList;