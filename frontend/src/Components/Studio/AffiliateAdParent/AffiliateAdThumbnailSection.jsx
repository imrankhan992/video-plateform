import React from "react";
import AddPhotoAlternateOutlinedIcon from "@mui/icons-material/AddPhotoAlternateOutlined";
import MoreVertOutlinedIcon from "@mui/icons-material/MoreVertOutlined";
import KeyboardTabOutlinedIcon from "@mui/icons-material/KeyboardTabOutlined";
import UndoOutlinedIcon from "@mui/icons-material/UndoOutlined";
import "./AffiliateAdThumbnailSection.css";
const AffiliateAdThumbnailSection = ({
  theme,
  videodata,
  thumbnailImage,
  thumbnailSelected,
  handleThumbnailUpload,
  handleAffiliateLinkClick,
  affiliateLink,
  setAffiliateLink,
  fakeLoading,
  setChanges,
}) => {
  console.log(thumbnailImage, "thumbnailImage");
  return (
    <div className="currentvideo-thumbnailedit">
      <p className={theme ? "" : "text-light-mode"}>Add your product</p>
      <p className={theme ? "" : "text-light-mode2"}>
        You can add ads in your video description that viewers can click to view
        or buy affiliate products. This helps you earn commissions while sharing
        your content with your audience.
      </p>

      <input
        type="text"
        placeholder="Paste your affiliate product link here..."
        value={affiliateLink}
        onChange={(e) => {
          setAffiliateLink(e.target.value);
          setChanges(true);
        }}
        className={
          theme
            ? "currentvid-tagsinp"
            : "currentvid-tagsinp new-light-border text-light-mode"
        }
      />

      <div className="mythumbnails-sectionn ">
        <label
          htmlFor="affiliate-thumbnail-upload"
          className={
            theme
              ? "uploadnew-thumbnaill"
              : "uploadnew-thumbnaill new-light-border2"
          }
        >
          <AddPhotoAlternateOutlinedIcon
            fontSize="medium"
            style={{ color: "#aaa" }}
          />
          <p>Upload Product Thumbnail</p>
        </label>

        <input
          type="file"
          accept="image/*"
          id="affiliate-thumbnail-upload"
          style={{ display: "none" }}
          onChange={handleThumbnailUpload}
        />
        <div className="currentthumbnail-data">
          {fakeLoading ? (
            <div
              className="spin32"
              style={{ position: "relative", left: "50px", top: "10px" }}
            >
              <span className={theme ? "loader2" : "loader2-light"}></span>
            </div>
          ) : (
            <>
              {thumbnailSelected && thumbnailImage  ?(
              <div className="image-grid">
              <div
                className="image-grid-item"
                onClick={handleAffiliateLinkClick}
              >
              
                  <img
                    src={URL.createObjectURL(thumbnailImage)}
                    alt="Thumbnail"
                    className="thumbnail-image"
                  />
              
              </div>
            </div>
              ):(
              <div className="image-grid">
                <div
                  className="image-grid-item"
                  onClick={handleAffiliateLinkClick}
                >
                  <img
                    src={videodata?.productAdsThumbnail || thumbnailImage}
                    alt="Thumbnail"
                    className="thumbnail-image"
                  />
                </div>
              </div>
              )}
            </>
          
          )}
        </div>
      </div>
    </div>
  );
};

export default AffiliateAdThumbnailSection;
