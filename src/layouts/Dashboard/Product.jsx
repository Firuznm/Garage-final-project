// import style css
import style from "../Dashboard/DashboardStyle/Product.module.scss";
import FileConverter from "../../Helpers/FileConverter";
import { API } from "../../Helpers/axios";
import { useEffect, useState } from "react";
import { Button, Modal, Space, Table } from "antd";
import { useFormik } from "formik";

export default function Product() {
    const [customModal, setCustomModal] = useState(false);
    const [imgValue, setImageValue] = useState([])

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
        onSubmit: (values) => {
            values.images = imgValue;
            API.post("/dashboard/products", values).then((res)=>{
				console.log(res)
			})
        },
    });

	const getProducts=()=>API.get("/dashboard/products")


    const [data, setData] = useState([]);
    useEffect(() => {
       getProducts().then((res) => {
            setData(res.data.data.product);
			
        });
    }, []);
	const { confirm } = Modal;

	const handleDelete = (record) => {
        confirm({
            title: ` Do you want to delete "${record.name} "?`,
            content: 'This action cannot be undone.',
            onOk() {
                API.delete(`/dashboard/products/${record._id}`)
                    .then(() => {
                    getProducts();
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
            render: (images) => (images && images[0].url ? <img src={images[0].url} alt="brand" style={{ width: "50px", height: "50px" }} /> : null),
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
                <Space>
                    <Button type="primary"  onClick={() => handleEdit(record)}>Edit</Button>
                    <Button type="danger"  onClick={() => handleDelete(record)}>Delete</Button>
                </Space>
            ),
        },
    ];

    return (
        <section id={style.DashProduct}>
            <div className="container">
                <div className={style.DashProductWrapper}>
                    <h2 className={style.title}>Dashboard Product list</h2>
                    <button onClick={ModalShowHidden} className={style.AddBrandsBtn}>
                        Add Brands
                    </button>
                    <div>
                        {customModal && (
                            <div className={style.formGroup}>
                                <form onSubmit={handleSubmit}>
                                    <input name="title" placeholder="product title" value={values.title} onChange={handleChange} />
                                    <textarea name="description" placeholder="description" value={values.description} onChange={handleChange} cols="5" rows="5"></textarea>
                                    {/* <input name="description" placeholder="descripton" value={values.description} onChange={handleChange}/> */}
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
                        <Table dataSource={data} columns={columns} rowKey="id" />
                    </div>
                </div>
            </div>
        </section>
    );
}
