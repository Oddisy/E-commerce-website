import arrow_icon from "../assets/breadcrum_arrow.png";

const Breadcrum = (product) => {
	return (
		<div className="">
			HOME <img src={arrow_icon} alt="" /> SHOP <img src={arrow_icon} alt="" />{" "}
			{product.category} <img src={arrow_icon} alt="" /> {product.name}{" "}
			<img src={arrow_icon} alt="" />
		</div>
	);
};

export default Breadcrum;
