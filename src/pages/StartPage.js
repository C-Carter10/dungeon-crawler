import React from 'react';
import dungeonEntrance from '../images/gaetano-caltabiano-dungeon-s-entrance.jpg';

export function StartPage() {
  return (
    <div style={{ backgroundColor: '#d3d3d3', minHeight: '100vh', margin: 0, padding: 0 }}>
      <div className="container d-flex flex-column justify-content-center align-items-center">
        <h1 className="text-center">DUNGEON DIVER!!!</h1>
        
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="position-relative">
              <img src={dungeonEntrance} alt="" className="img-fluid rounded" style={{ maxWidth: '100%', height: 'auto' }}/>
            </div>
          </div>
        </div>

        <p className='text-center fs-4'>Welcome, Player. Do you have what it takes to survive the search for treasure?</p>

        <div class='mx-auto mt-4'>
            <button className="btn btn-info btn-lg px-5 py-3">
                <a href='/LevelOne' className="text-reset"> Enter the Dungeon</a>
            </button>
        </div>
      </div>
    </div>
  );
}
