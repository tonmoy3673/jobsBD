
const Category = ({category}) => {
    const {logo,category_name,availability}=category
    console.log(category);
    return (
        <div className="bg-sky-100 p-4 rounded-lg">
            <div className="mt-1 lg:mt-2">
                <img src={logo} className="mx-auto bg-sky-50 p-1"/>
            </div>
            <div className="py-2 text-center">
                <h4 className="py-1 text-base lg:text-lg font-semibold">{category_name}</h4>
                <p className="py-1">{availability}</p>
            </div>
        </div>
    );
};

export default Category;