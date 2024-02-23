import { useCallback, useEffect, useState } from "react";
import { connect, useSelector } from "react-redux";
import { getCategories } from "../../redux/actions/categoryActions";
import { saveProduct } from "../../redux/actions/productActions";
import ProductDetail from "./ProductDetail";
import { useNavigate, useParams } from "react-router-dom";
import alertify from "alertifyjs";
function AddOrUpdateProduct({ getCategories, saveProduct }) {
	const { productId } = useParams();
	const navigate = useNavigate();
	const products = useSelector((state) => state.productListReducer);
	const categories = useSelector((state) => state.categoryListReducer);

	const [product, setProduct] = useState({});
	const [errors, setErrors] = useState({});
	useEffect(() => {
		if (categories.length === 0) {
			getCategories();
		}

		if (productId && products.length > 0) {
			const productFound = getProductById(products, productId);
			setProduct(productFound || {});
		}else{
            setProduct({productName: "", categoryId: "", unitPrice: "", quantityPerUnit: "", unitsInStock: ""});
        }
	}, [productId, products, categories, getCategories]);
    
	function handleChange(event) {
		const { name, value } = event.target;
		setProduct((previousProduct) => ({
			...previousProduct,
			[name]: name === "categoryId" ? parseInt(value, 10) : value,
		}));
		validate(name, value);
	}
	const validate=useCallback(()=> {
        const newErrors = {};
        if (!product.productName) newErrors.productName = "Ürün adı alanı doldurulmalıdır.";
        if (!product.categoryId) newErrors.categoryId = "Kategori seçilmelidir.";
        if (!product.unitPrice || !/^\d+$/.test(product.unitPrice)) newErrors.unitPrice = "Birim fiyatı sadece sayısal değerler içermelidir.";
        if (!product.quantityPerUnit || !/^\d+$/.test(product.quantityPerUnit)) newErrors.quantityPerUnit = "Birim başına miktar sadece sayısal değerler içermelidir.";
        if (!product.unitsInStock || !/^\d+$/.test(product.unitsInStock)) newErrors.unitsInStock = "Stok adedi sadece sayısal değerler içermelidir.";
    
        setErrors(newErrors);
    },[product,setErrors])
    useEffect(() => {
        validate();
    }, [validate,product]);
    

	function handleSave(event) {
        event.preventDefault();
    
        validate()
        const formIsValid = Object.keys(errors).length === 0;
    
        if (!formIsValid) {
           
            alertify.warning("Formda hatalar var, lütfen düzeltin.");
            return; 
        }
    
      
        saveProduct(product).then(() => {
            alertify.success("Ürün başarıyla kaydedildi.");
            navigate("/");
        });
    }
    

	return (
		<ProductDetail
			categories={categories}
			product={product}
			onSave={handleSave}
			onChange={handleChange}
			errors={errors}
		/>
	);
}

export function getProductById(products, productId) {
	let product = products.find((product) => product.id.toString() === productId);
	return product || null;
}

const mapDispatchToProps = {
	getCategories,
	saveProduct,
};

export default connect(null, mapDispatchToProps)(AddOrUpdateProduct);
