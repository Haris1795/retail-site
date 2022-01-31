import React from 'react';


function Card({ img, title, newest, description }) {
  return (
    <div className="card card-bordered w-64">
        <figure>
            <img src={img}/>
        </figure> 
    <div className="card-body ">
      <div className="flex flex-row items-center">
        <h3 className="card-title">{title}</h3>
            <div className="badge mx-2 badge-lg badge-secondary rounded-full w-16 h-16">
              <div className="flex flex-column">
                <h4 className=''><strong>39.99$</strong></h4>
              </div>
            </div>
      </div>
        <p>{description}</p> 
        <div className="flex flex-row card-actions">
          <button className="btn btn-secondary shrink">Add to Shoping Cart</button>
        </div>
    </div>
    </div> 
  )
}


export default Card;