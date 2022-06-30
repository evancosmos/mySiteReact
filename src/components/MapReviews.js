import "./MapReviews.css"

const MapReviews = () => {
  return (
      <div>
          <div className="reviewBox">
            <div className="textReview"> Here are my ratings of some non-chain restraunts I've tried!</div>
            <iframe src="https://www.google.com/maps/d/u/0/embed?mid=1rSnZHmdTc6uY6Bvg4TGqjhzF1M37umAa&ehbc=2E312F" width="640" height="480"></iframe>
          </div>
      </div>
  )
}

export default MapReviews