import React from 'react'
import "../assets/Bookmarked.css"
import Header from "./Header.js"
function Bookmarked() {
  
  return (
    <div>
      <Header/>
        <>

  
  <header>
    
    <div className="searchbar">
      <input type="text" placeholder="Search" />
      <div className="searchbtn">
        <img
          src="https://cdn-icons-png.flaticon.com/512/3031/3031293.png"
          className="icn srchicn"
          alt="search-icon"
        />
      </div>
    </div>
    
    
  </header>
  

    <div className="main">
      <div className="searchbar2">
        <input type="text" name="" id="" placeholder="Search" />
        <div className="searchbtn">
          <img
            src="https://media.geeksforgeeks.org/wp-content/uploads/20221210180758/Untitled-design-(28).png"
            className="icn srchicn"
            alt="search-button"
          />
        </div>
      </div>
      <div className="box-container">
        <div className="box box1">
          <div className="text">
            <h2 className="topic-heading">10</h2>
            <h2 className="topic">Books viewed</h2>
          </div>
          <img
            src="https://cdn.iconscout.com/icon/free/png-256/free-view-98-438879.png"
            alt="Views"
          />
        </div>
        <div className="box box2">
          <div className="text">
            <h2 className="topic-heading">5</h2>
            <h2 className="topic">Likes</h2>
          </div>
          <img
            src="https://icon-library.com/images/white-thumbs-up-icon/white-thumbs-up-icon-26.jpg"
            alt="likes"
          />
        </div>
        <div className="box box3">
          <div className="text">
            <h2 className="topic-heading">32</h2>
            <h2 className="topic">Comments</h2>
          </div>
          <img
            src="https://cdn-icons-png.flaticon.com/512/1380/1380338.png"
            alt="comments"
          />
        </div>
        <div className="box box4">
          <div className="text">
            <h2 className="topic-heading">2</h2>
            <h2 className="topic">Completed</h2>
          </div>
          <img
            src="https://o.remove.bg/downloads/4f961b93-92d7-4864-919c-40cdc9a6e874/images-removebg-preview.png"
            alt="completed"
          />
        </div>
      </div>
      <div className="report-container">
        <div className="report-header">
          <h1 className="recent-Articles">Recent Books</h1>
          <button className="view">View All</button>
        </div>
        <div className="report-body">
          <div className="report-topic-heading">
            <h3 className="t-op">Books</h3>
            <h3 className="t-op">Views</h3>
            <h3 className="t-op">Comments</h3>
            <h3 className="t-op">Status</h3>
          </div>
          <div className="items">
            <div className="item1">
              <h3 className="t-op-nextlvl">NCERT</h3>
              <h3 className="t-op-nextlvl">10</h3>
              <h3 className="t-op-nextlvl">2</h3>
              <h3 className="t-op-nextlvl label-tag">Completed</h3>
            </div>
            <div className="item1">
              <h3 className="t-op-nextlvl">JEE</h3>
              <h3 className="t-op-nextlvl">3</h3>
              <h3 className="t-op-nextlvl">1</h3>
              <h3 className="t-op-nextlvl label-tag">Completed</h3>
            </div>
            <div className="item1">
              <h3 className="t-op-nextlvl">TET</h3>
              <h3 className="t-op-nextlvl">15</h3>
              <h3 className="t-op-nextlvl">10</h3>
              <h3 className="t-op-nextlvl label-tag">Completed</h3>
            </div>
            <div className="item1">
              <h3 className="t-op-nextlvl">UPSC</h3>
              <h3 className="t-op-nextlvl">12</h3>
              <h3 className="t-op-nextlvl">19</h3>
              <h3 className="t-op-nextlvl label-tag">Completed</h3>
            </div>
           
          </div>
        </div>
      </div>
    </div>

</>

    </div>
  )
}

export default Bookmarked