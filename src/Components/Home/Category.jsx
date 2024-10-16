
const Category = ({category}) => {
    const {logo,category_name,availability}=category
    console.log(category);
    return (
        <div>
            <div>
                <img src={logo}/>
            </div>
            <div>
                <h4>{category_name}</h4>
                <p>{availability}</p>
            </div>
        </div>
    );
};

export default Category;