// import style css
import style from "./DashboardStyle/Brands.module.scss"
import { useState } from "react";
import { Table } from "antd";
// import useformik
import { useFormik } from "formik";
import myshop from "../../Helpers/MyShop";
import FileConverter from "../../Helpers/FileConverter";

  
export default function Brands() {
	const [customModal, setCustomModal]=useState(false)
	const [imgValue,setImageValue]=useState([])
   
	const ModalShowHidden=()=>{
		setCustomModal(!customModal)
	}
	const {handleChange,values,handleSubmit, resetForm} = useFormik({
		initialValues: {
		  name: '',
		  image: "",
		},
		onSubmit:  async (values,) => {
			values.image=imgValue[0]
			console.log("inpValue",values);
            try {
				await myshop.api().post("/dashboard/brands",values)
			} catch (error) {
				console.log(error);
			}
		  resetForm(); 
		},
	  });

	// ant desigen table
	const dataSource = [
		{
		  key: '1',
		  "Brand Name": 'Tissot',
		  "Brand Id":"1"
		},
		{
			key: '2',
			"Brand Name": 'Chanel',
			"Brand Id":"2"
		  },
		  {
			key: '1',
			"Brand Name": 'Mavi',
			"Brand Id":"3"
		  },
		  {
			key: '1',
			"Brand Name": 'Nike',
			"Brand Id":"4"
		  },
	  ];
	  
	  const columns = [
		{
		  title: 'Brand Name',
		  dataIndex: 'Brand Name',
		  key: 'Brand Name',
		},
		{
			title: 'Brand img',
			dataIndex: 'Brand img',
			key: 'Brand img',
		},
		{
		  title: 'Brand Id',
		  dataIndex: 'Brand Id',
		  key: 'Brand Id',
		},
		{
			title: 'Action',
			key: 'Action',
			render:(text,record)=> 
			<>
			<button onClick={()=>console.log(record["Brand Id"])} className={style.editBtn}>Edit</button>
			<button className={style.deleteBtn}>Delete</button>
			</>
		  },
	  ];
	  
  return (
	<section id={style.brands}>
	<div className="container" style={{backgroundColor:"white"}}>
	 <div className={style.brandsTable}>
		    <h2 className={style.barndsTitle}>Brands Table</h2>
			<button onClick={ModalShowHidden}  className={style.AddBrandsBtn}>Add Brands</button>
			{customModal && 
			<div className={style.formGroup}>
                    <form  onSubmit={handleSubmit}>
                        <input 
                        name='name' 
                        placeholder="Brand title"
						value={values.name}
                        onChange={handleChange}
              />

                       <input
					    name='image'
						type="file"
						multiple={true}
						accept="image/*"
						placeholder="Brand image"
						value={values.image}
						onChange={(e)=>{
							FileConverter(e).then((res)=>{
								setImageValue(res)
							})
						}} />
                   
				  <button className={style.sendBtn} type="submit">Send</button>
			  </form>

				<span onClick={ModalShowHidden} className={style.close}>X</span>
				</div>}
			<Table dataSource={dataSource} columns={columns} rowKey="id" />
	 </div>
	</div>	
	  
	</section>
  )
}
