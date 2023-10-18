import ModuleList from "./ModuleList";
import {BsThreeDotsVertical} from "react-icons/bs";

function Modules() {
  return (
    
    <div className="row flex-fill me-4 d-flex" style={{minWidth: 470}}>
          <div className="float-end flex-nowrap f-flex">
              <button type="button" className="btn btn-secondary btn-sm ms-1 no-wrap-btn">Collapse All</button>
              <button type="button" className="btn btn-secondary btn-sm ms-1 no-wrap-btn">View Progress</button>

              <span className="dropdown">
                  <button className="btn btn-secondary dropdown-toggle btn-sm ms-1 no-wrap-btn" type="button" data-bs-toggle="dropdown" aria-expanded="false" style={{height: '33px'}}>
                      Publish All
                  </button>

                  <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="#">Publish All</a></li>
                    <li><a className="dropdown-item" href="#">Publish One</a></li>
                    <li><a className="dropdown-item" href="#">Unpublish</a></li>
                  </ul>
              </span>
              <button type="button" className="btn btn-danger btn-sm ms-1 no-wrap-btn">
                  + Modules
              </button>
              <button type="button" class="btn btn-secondary btn-sm ms-1 no-wrap-btn">
                        <BsThreeDotsVertical/>
              </button>
          </div>
          <hr className="mt-3"/>
          <div className="mb-3">
            <ModuleList />
          </div>
      
    </div>
  );
}
export default Modules;