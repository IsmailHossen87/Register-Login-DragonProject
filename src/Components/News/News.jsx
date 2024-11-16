
import { Link, useLoaderData } from 'react-router-dom';
import Header from '../Header/Header';
import RightNavbar from '../RightNavbar/RightNavbar';

const News = () => {
    const data =useLoaderData()
    const news = data.data[0]
    return (
        <div>
      <header>
        <Header></Header>
      </header>
      <section className="w-11/12 mx-auto grid grid-cols-12 gap-4">
        <div className="col-span-9">
          <div className="card bg-base-100 shadow-xl">
            <figure>
              <img
                src={news?.image_url
                }
                alt="Shoes"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{news?.title}</h2>
              <p>{news?.details}</p>
              <div className="card-actions ">
                <Link to={`/category/${news?.category_id}`} className="btn btn-primary">Back To Category</Link>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-3">
          <RightNavbar></RightNavbar>
        </div>
      </section>
    </div>
    );
};

export default News;