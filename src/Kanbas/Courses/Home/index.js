import ModuleList from "../Modules/ModuleList";
import "./index.css";
import {BsThreeDotsVertical} from "react-icons/bs";


function Home() {
  return (
    <div className="row d-flex flex-nowrap me-4">
      <div className="col-9" style={{minWidth: 470}}>
        <div className="float-end flex-nowrap">
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
          <hr className="mt-5"/>
          <div className="mb-3">
              <ModuleList />
          </div>
      </div>
        
        <div className="col-3" style={{width: "220px"}}>
            <div className="flex-column d-flex pe-3">
                  <p className="fs-5">Course Status</p>
                  <div className="flex-row d-flex justify-content-between">
                      <button type="button" class="btn btn-secondary btn-sm d-inline third-side-button">
                          
                          <span class="third-side-fs">Unpublish</span>
                      </button>
                      <button type="button" class="btn btn-success btn-sm d-inline third-side-button">
                          
                          <span class="third-side-fs">Published</span>
                      </button>
                  </div>

                  <div class="list-group mt-2">
                      <a href="#" class="list-group-item list-group-item-action third-side-fs list-group-item-secondary p-2">
                          
                          Import Existing Content
                      </a>
                      <a href="#" class="list-group-item list-group-item-action third-side-fs list-group-item-secondary p-2">Import From Commons</a>
                      <a href="#" class="list-group-item list-group-item-action third-side-fs list-group-item-secondary p-2">Choose Home Page</a>
                      <a href="#" class="list-group-item list-group-item-action third-side-fs list-group-item-secondary p-2">View Course Stream</a>
                      <a href="#" class="list-group-item list-group-item-action third-side-fs list-group-item-secondary p-2">New Annoucement</a>
                      <a href="#" class="list-group-item list-group-item-action third-side-fs list-group-item-secondary p-2">New Analytics</a>
                      <a href="#" class="list-group-item list-group-item-action third-side-fs list-group-item-secondary p-2">View Course Notifications</a>
                  </div>
                  
                  <div class="flex-row mt-3 justify-content-between align-content-center d-flex"><span class="fw-bold third-side-fs">To Do</span></div>

                  <hr class="mt-1 mb-1"/>

                  <div class="flex-column mt-0 mb-3">
                      <span>
                          <span class="badge bg-danger rounded-pill mx-1">1</span>
                          <span class="red-link third-side-fs">
                              <a href="#" class="red-link">Grade A1 - ENV + HTML</a>
                          </span>
                          <p style={{color: "grey"}} class="third-side-fs ms-4 mb-0">120 points / Sep 18 at 11:59pm</p>
                      </span>
                  </div>

                  <div class="flex-row mt-3 justify-content-between align-content-center d-flex">
                      <span class="fw-bold third-side-fs">Coming Up</span>
                      <span class="red-link"><a href="#" class="third-side-fs float-end red-link">View Calendar</a></span>
                  </div>

                  <hr class="mt-1 mb-1"/>

                  <div class="flex-column mt-0 mb-3">
                      <span>
                          
                          <span class="red-link third-side-fs"><a href="#" class="red-link">Lecture</a></span>
                          <p style={{color: "grey"}} class="third-side-fs ms-4 mb-0">CS4550.12631.202410 Sep 7 at 11:45am</p>
                      </span>
                  </div>

                  <div class="flex-column mt-0 mb-3">
                      <span>
                          
                          <span class="red-link third-side-fs"><a href="#" class="red-link">Lecture</a></span>
                          <p style={{color: "grey"}} class="third-side-fs ms-4 mb-0">CS4550.12631.202410 Sep 11 at 11:45am</p>
                      </span>
                  </div>

                  <div class="flex-column mt-0 mb-3">
                      <span>
                          
                          <span class="red-link third-side-fs"><a href="#" class="red-link">CS5610 06 SP23 Lecture</a></span>
                          <p style={{color: "grey"}} class="third-side-fs ms-4 mb-0">CS5610 06 SP23 Lecture Sep 11 at 6pm</p>
                      </span>
                  </div>
                  
              </div>
        </div>
    </div>

  );
}

export default Home;