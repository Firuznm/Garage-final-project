import axios from "axios"


class MyShop{
	constructor(){
		this.lng="az"
		this.baseUrl="https://frontend-api-dypw.onrender.com/api/e14aeb6e-96a5-4a8b-9f3c-74205db5d521";
		this.headers={
			"Content-type":"application/json",
			 "Authorization" :`bearer ${localStorage.getItem("token")}`
		}
	}
	api(){
		return axios.create({
			baseURL:this.baseUrl,
			headers:this.headers
		})
	}
}

const myshop=new MyShop;
export default myshop