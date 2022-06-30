import "./MapReviews.css"

const MapReviews = () => {
  return (
      <div>
          <div className="reviewBox">
            <div className="textReview">
              <div>Here are my ratings of some non-chain restraunts I've tried!</div>
              <ul>
                <li>Grey: Avoid</li>
                <li>Black: Only if hungry</li>
                <li>Red: Good if you're in the area</li>  
                <li>Orange: Worth going out of your way</li>  
                <li>Yellow: Worth planning a trip around</li>  
              </ul>
            </div>
            <iframe src="https://www.google.com/maps/d/u/0/embed?mid=1rSnZHmdTc6uY6Bvg4TGqjhzF1M37umAa&ehbc=2E312F" title="Evans food reviews" width="800" height="600"></iframe>
          </div>
      </div>
  )
}

export default MapReviews