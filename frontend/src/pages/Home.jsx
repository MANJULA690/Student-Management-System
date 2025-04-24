import React from 'react';
import { Assets } from '../Assests/Assets';
import { useNavigate } from 'react-router-dom';
const Home = () => {
  const navigate = useNavigate();
  return (
      <div className=''>
        <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img class="d-block w-100" src={Assets.home1} alt="First slide" style={{ height: '72vh', objectFit: 'cover' }} />
            </div>
            <div class="carousel-item">
              <img class="d-block w-100" src={Assets.home2} alt="Second slide" style={{ height: '72vh', objectFit: 'cover' }} />
            </div>
            <div class="carousel-item">
              <img class="d-block w-100" src={Assets.home3} alt="Third slide"  style={{ height: '72vh', objectFit: 'cover' }}/>
            </div>
          </div>
          <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only"></span>
          </a>
          <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only"></span>
          </a>
        </div>

      <div className="container mt-5 text-center user">
        <h2 className="mb-3">Welcome to CBIT Student Management System</h2>
        <p className="lead">
        Efficiently manage and track student information with ease.
        </p>
      </div>

      <div className="container d-flex flex-column justify-content-center align-items-center  bg-light p-5">
        <h2 className="  fw-bold mb-4">Register Now</h2>

        <div className="d-flex gap-3">
          <button class="btn btn-outline-success" type="submit" onClick={() => navigate('/add')}>Add Student</button>
          <button type="button" className="btn btn-outline-primary" onClick={() => navigate('/students')}>Students List</button>
        </div>
      </div>
    </div>
  );
};

export default Home;
