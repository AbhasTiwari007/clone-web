function TrendDest({ bg_img, hth = "", wth = "", title = "" }) {
  return (
    <div
      style={{
        backgroundImage: `url(${bg_img})`,
        height: hth,
        width: wth,
        backgroundSize: "cover",  
        backgroundPosition: "center",
        borderRadius:'10px'
      }}
    >
      <h1 style={{ color: "#fafafa", paddingTop:'15px',paddingLeft:'10px'}}>{title}</h1>
    </div>
  );
}

export default TrendDest;
