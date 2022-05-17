import CategoryItem from "../category-item/category-item.comp";

const Directory = ({ categories }) => {
  return (
    <div className="directory__container">
      {categories.map(category => (
        <CategoryItem key={category.id} category={category} />
      ))}
    </div>
  );
};

export default Directory;
