import './index.css'

const ThumbnailItem = props => {
  const {eachList, updateImageByClick} = props
  const {thumbnailUrl, thumbnailAltText, id} = eachList

  const onClickChange = () => {
    updateImageByClick(id)
  }

  return (
    <div>
      <li>
        <button type="button" onClick={onClickChange}>
          <img src={thumbnailUrl} alt={thumbnailAltText} />
        </button>
      </li>
    </div>
  )
}

export default ThumbnailItem
