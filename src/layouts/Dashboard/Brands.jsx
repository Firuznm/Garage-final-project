// import style css
import style from "./DashboardStyle/Brands.module.scss";
import { useEffect, useState } from "react";
import { Table } from "antd";
// import useformik
import { useFormik } from "formik";
import myshop from "../../Helpers/MyShop";
import FileConverter from "../../Helpers/FileConverter";

export default function Brands() {
    const [customModal, setCustomModal] = useState(false);
    const [imgValue, setImageValue] = useState([]);
	const [brandsData, setBrandsData]=useState([]);
          
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
				await myshop.api().post("/dashboard/brands", values)
			} catch (error) {
				console.log(error);
			}
            resetForm();
        },
    });

    // ant desigen table

	// const getBrands=()=>API.get("/dashboard/brands")


//     const [data, setData] = useState([]);
//     useEffect(() => {
//        getBrands().then((res) => {
//             setData(res.data.data);
			
//         });
//     }, []);
//    console.log(data);
	const getBrandsData=async()=>{
		try {
			const BrandsDataRes= await myshop.api().get("/dashboard/brands")
			       setBrandsData(BrandsDataRes.data.data)
		} catch (error) {
			console.log(error);
		}
	}

	useEffect(()=>{
      getBrandsData()
	},[])

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
            render: (image) => (image && image.url ? <img src={image.url} alt="brand" style={{ width: "50px", height: "50px" }} /> : null),
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
                    <button className={style.deleteBtn}>Delete</button>
                </>
            ),
        },
    ];

    return (
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

                                <button className={style.sendBtn} type="submit">
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
    );
}
