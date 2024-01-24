// import style css
import style from "../Dashboard/DashboardStyle/Product.module.scss";
import FileConverter from "../../Helpers/FileConverter";
import { useEffect, useState } from "react";
import { Button, Modal, Space, Table } from "antd";
import { useFormik } from "formik";
import myshop from "../../Helpers/MyShop";
import Loading from "./Components/Loading";
import urls from "../../ApiValues/urls";

export default function Product() {
    const [customModal, setCustomModal] = useState(false);
    const [imgValue, setImageValue] = useState([]);
	const [dashboardProduct, setDashboardProduct]=useState([]);
    const [loading ,setLoading]=useState(true)

    const ModalShowHidden = () => {
        setCustomModal(!customModal);
    };
    const { handleChange, values, handleSubmit, resetForm } = useFormik({
        initialValues: {
            title: "",
            description: "",
            productPrice: "",
            salePrice: "",
            stock: "",
            brandId: "",
            images: "",
        },
        onSubmit: async (values) => {
              values.images = imgValue;
			try {
				 await myshop.api().post(urls.dashboardProductPost, values)
			} catch (error) {
				      console.log(error);
			}
			resetForm();
			ModalShowHidden();
			getDashboardProduct();
        },
    });


	const getDashboardProduct= async ()=>{
       
		try {
			const dashboardProductRes= await myshop.api().get(`${urls.dashboardProductGet}?page=${1}&perPage=${33}&search=${""}`)
			      setDashboardProduct(dashboardProductRes.data.data.product)
                  setLoading(false)
		} catch (error) {
			console.log(error);
		}
	}

    useEffect(()=>{
     getDashboardProduct()   
	},[])
	const { confirm } = Modal;
 

	const ProductDelete = (record) => {
        confirm({
            title: ` Do you want to delete "${record.title} "?`,
            content: 'This action cannot be undone.',
            onOk() {  myshop.api().delete(`${urls.dashboardProductDelete}${record._id}`)
                    .then(() => {
                    getDashboardProduct();
                    })
                    .catch((error) => {
                        console.error(error);
                    });
            }
        });
    };

 

    const columns = [
        {
            title: "title",
            dataIndex: "title",
            key: "title",
        },
        {
            title: "product",
            dataIndex: "images",
            key: "images",
            render: (images) => (images && images[0].url ? <img src={images[0].url} alt="brand" style={{ width: "80px", height: "100px" , objectFit:"cover",borderRadius:"7px"}} /> : null),
        },
		{
            title: "product Price",
            dataIndex: "productPrice",
            key: "productPrice",
        },
        {
            title: "sale Price ",
            dataIndex: "salePrice",
            key: "salePrice",
        },
		{
            title: "stock",
            dataIndex: "stock",
            key: "stock",
        },
		{
            title: 'Actions',
            dataIndex: 'actions',
            key: 'actions',
            render: (text, record) => (
                <>
                    <button  className={style.editBtn}>Edit</button>
                    <button   onClick={() => ProductDelete(record)} className={style.deleteBtn}>Delete</button>
                </>
            ),
        },
        
    ];

    return (
        <>
        {
            loading ? <Loading/> :
            <section id={style.DashProduct}>
            <div className="container">
                <div className={style.DashProductWrapper}>
                    <h2 className={style.title}>Dashboard Product list</h2>
                    <button onClick={ModalShowHidden} className={style.AddBrandsBtn}>
                        Add Products
                    </button>
                    <div>
                        {customModal && (
                            <div className={style.formGroup}>
                                <form onSubmit={handleSubmit}>
                                    <input name="title" placeholder="product title" value={values.title} onChange={handleChange} />
                                    <textarea name="description" placeholder="description" value={values.description} onChange={handleChange} cols="5" rows="5"></textarea>
                                    <input name="productPrice" placeholder="productPrice" value={values.productPrice} onChange={handleChange} />
                                    <input name="salePrice" placeholder="salePrice" value={values.salePrice} onChange={handleChange} />
                                    <input name="stock" placeholder="stock" value={values.stock} onChange={handleChange} />
                                    <input name="brandId" placeholder="brandId" value={values.brandId} onChange={handleChange} />
                                    <input   
                                        name="image"
                                        type="file"
                                        multiple={true}
                                        accept="image/*"
                                        placeholder="Brand image"
                                        value={values.images}
                                        onChange={(e) => {
                                            FileConverter(e).then((res) => {
                                                setImageValue(res);
                                            });
                                        }}
                                    />

                                    <button className={style.sendBtn} type="submit">
                                        Send
                                    </button>
                                </form>

                                <span onClick={ModalShowHidden} className={style.close}>
                                    X
                                </span>
                            </div>
                        )}
                        <Table pagination={{ pageSize: 5 }} dataSource={dashboardProduct} columns={columns} rowKey="_id" />
                    </div>
                </div>
            </div>
       
        </section>
        }
       
        </>
    );
}
