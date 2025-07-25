import React from 'react'
import './AffiliateAdThumbnailSection.css'
function AffiliateAdThumbnailSection({ theme,user,affiliateLink,
    productAdsThumbnail}) {
  return (
 <div className='affiliate-ad-thumbnail-section-container'>
    <p style={{
  color: theme ? 'white' : 'black',
    }} className='affiliate-ad-thumbnail-title'>
     
         {user?.name} Affiliate Ad
      </p>
     <div className='affiliate-ad-thumbnail-section'>
    <img src={productAdsThumbnail} alt="product ads thumbnail" />
  <div>
    
      <p className='affiliate-ad-thumbnail-section-text'>
     
       Shop the {user?.name} store
      </p>
        <a className='affiliate-ad-thumbnail-section-text link_affiliate' target='_blank' href={affiliateLink}>See Product</a>
  </div>
  </div>
 </div>
  )
}

export default AffiliateAdThumbnailSection