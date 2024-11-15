import useFetch from "./useFetch";
import BlogList  from "./blogList";

const Home = () => {
    const {data: blogs, isPending, error} = useFetch("http://localhost:8000/blogs")

    return ( 
        <div className="home">
            {isPending && <div>Loading..</div>}
            {error && <div>{ error }</div>}
            {blogs && <BlogList blogs={ blogs } title="All Blogs" />}
        </div>
     );
}
 
export default Home;