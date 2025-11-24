import React from "react";
function Offers({
    bg_img,
    upper_body = "",
    title = "",
    lower_body = "",
    butt_Text = "" }) {
    return (
            <div className="card" style={{
                backgroundImage: `url(${bg_img})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                width: '800px',
                height: '200px',
                marginTop:'20px',
                borderRadius: '10px'
            }}>
                <div className="overlay">
                    <div className="content">
                        {upper_body && <div className="card-upper" style={{
                            color: '#fafafa',
                            padding: '20px  0px 7px 20px',
                            fontSize: '1.1rem'
                        }}>{upper_body}</div>}
                        {title && <div className="card-title" style={{
                            color: '#fafafa',
                            fontSize: '1.5rem',
                            fontWeight: 'bolder',
                            padding: '10px  0px 7px 20px'

                        }}>{title}</div>}
                        {lower_body && <div className="card-lower" style={{
                            color: '#fafafa',
                            padding: '10px  0px 10px 20px',
                            fontSize: '1.1rem'
                        }}>{lower_body}</div>}
                        <button className="card-button" style={{
                            marginLeft: '20px',
                            padding: '15px 10px',
                            backgroundColor:'#0456c8',
                            borderRadius:'10px',
                            color:'#fafafa',
                            fontWeight:'bold',
                            fontFamily:'Segoe UI'
                        }}
                        >{butt_Text}</button>
                    </div>
                </div>
            </div>
    );
}
export default Offers