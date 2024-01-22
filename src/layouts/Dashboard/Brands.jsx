// import style css
import style from "./DashboardStyle/Brands.module.scss";
import { useEffect, useState } from "react";
import { Modal, Table } from "antd";
// import useformik
import { useFormik } from "formik";
import myshop from "../../Helpers/MyShop";
import FileConverter from "../../Helpers/FileConverter";
import Loading from "./Components/Loading";
import urls from "../../ApiValues/urls";

export default function Brands() {
    const [customModal, setCustomModal] = useState(false);
    const [imgValue, setImageValue] = useState([]);
	const [brandsData, setBrandsData]=useState([]);  
    const [loading,setLoading]=useState(true)
          
    const ModalShowHidden = () => {
        setCustomModal(!customModal);
    };
    const { handleChange, values, handleSubmit, resetForm } = useFormik({
        initialValues: {
            name: "",
            image: "",
        },
        onSubmit: async (values) => {
            values.image = imgValue[0];
			try {
				await myshop.api().post(urls.dashboardBrandsPost, values)
			} catch (error) {
				console.log(error);
			}
            resetForm();
			ModalShowHidden();
			getBrandsData();
        },
    });

	const getBrandsData=async()=>{
		try {
			const BrandsDataRes= await myshop.api().get(urls.dashboardBrandsGet)
			       setBrandsData(BrandsDataRes.data.data)
                   setLoading(false)
		} catch (error) {
			console.log(error);
		}
	}

	useEffect(()=>{
      getBrandsData()
	},[])

	const { confirm } = Modal;

	const BrandsDelete = (record) => {
        confirm({
            title: ` Do you want to delete ${record.title}?`,
            content: 'This action cannot be undone.',
            onOk() {  myshop.api().delete(`${urls.dashboardBrandsDelete}${record._id}`)
                    .then(() => {
                      getBrandsData();
                    })
                    .catch((error) => {
                        console.error(error);
                    });
            }
        });
    };

    const columns = [
        {
            title: "Brand Name",
            dataIndex: "name",
            key: "name",
        },
        {
            title: "Brand img",
            dataIndex: "image",
            key: "image",
            render: (image) => (image && image.url ? <img src={image.url} alt="brand" style={{ width: "80px", height: "100px",objectFit:"cover" }} /> : null),
        },
        {
            title: "Brand Id",
            dataIndex: "_id",
            key: "_id",
        },
        {
            title: "Action",
            key: "Action",
            render: (text, record) => (
                <>
                    <button onClick={() => console.log(record["Brand Id"])} className={style.editBtn}>
                        Edit
                    </button>
                    <button onClick={()=>BrandsDelete(record)} className={style.deleteBtn}>Delete</button>
                </>
            ),
        },
    ];

    return (
      <>
        {
            loading ? <Loading/> :
            <section id={style.brands}>
            <div className="container" style={{ backgroundColor: "white" }}>
                <div className={style.brandsTable}>
                    <h2 className={style.barndsTitle}>Brands Table</h2>
                    <button onClick={ModalShowHidden} className={style.AddBrandsBtn}>
                        Add Brands
                    </button>
                   
                    {customModal && (
                        <div className={style.formGroup}>
                            <form onSubmit={handleSubmit}>
                                <input name="name" placeholder="Brand title" value={values.name} onChange={handleChange} />

                                <input
                                    name="image"
                                    type="file"
                                    multiple={true}
                                    accept="image/*"
                                    placeholder="Brand image"
                                    value={values.image}
                                    onChange={(e) => {
                                        FileConverter(e).then((res) => {
                                            setImageValue(res);
                                        });
                                    }}
                                />

                                <button  className={style.sendBtn} type="submit">
                                    Send
                                </button>
                            </form>

                            <span onClick={ModalShowHidden} className={style.close}>
                                X
                            </span>
                        </div>
                    )}
                    <Table dataSource={brandsData} columns={columns} rowKey="_id" />
                </div>
            </div>
        </section>
        }
       
        </>
    );
}
