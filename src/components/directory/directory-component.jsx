import CategoriItem from '../category-items/categoty-item.component'
import './directory-styles.scss'

const Directory = ({categories}) => {
    return (
        <div className="directory-container">
        {categories.map((category) => (
          <CategoriItem key={category.id} category={category} />
        ))}
      </div>
    )
}

export default Directory