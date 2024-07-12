import React from "react";
import styled from "styled-components";

const Nav = styled.div`
        height: 70px;
        background: linear-gradient(170deg ,#1bc059 ,#0d47a1);
        display: flex;
        justify-content: space-between;
        align-items : centre;
        position : relative;
       `;

const Title = styled.div`
        font-size: 30px;
        color : #fff;
        font-weight : 600;
        font-family: 'Times New Roman' ,Times, sans-serif ;
        text-transform: uppercase;
        margin-left : 20px;
        &:hover {color : #17DBE2}
      `;
const CartImg = styled.img`
        height : 48px;
        margin-right : 20px;
      `;
const CartIconContainer = styled.div`
        position :"relative",
        cursor : "pointer"
      `;
const CartCount = styled.div`
        background-color : ${(props) => props.color};
        border-radius : "50%";
        padding : 4px 8px;
        position : "absolute";
        right : 10px;
        top : -5px;
        font-size :12px;
        visibility : ${(props)=> props.show? "visible" : "hidden" };
`;

class Navbar extends React.Component{
    render(){
        const {cartCount} = this.props;
        console.log(this.props)
        return(
            <>
            <Nav>

                <Title>
                    Movie-Flix
                </Title>
                <CartIconContainer>
                    <CartImg alt="cart icon" src="https://cdn-icons-png.flaticon.com/128/726/726496.png" style={styles.cartIcon}/>
                    <CartCount color="yellow" show={true} style={styles.cartCount}>{cartCount}</CartCount>
                </CartIconContainer>

            </Nav>
            </>
        )
    }
}

export default Navbar;

const styles = { 
    nav : { 
        
        height: 70 ,
        background: "#4267b2",
        display : "flex",
        justifyContent: "space-between",
        alignment : "centre",
        position : "relative"

    },

    title : {
        fontSize: 30,
        color : "#fff",
        fontWeight : 600,
        fontFamily: '"Montserrat", sans-serif ',
        marginLeft : 20
    },

    cartContainer :{
        position :"relative",
        cursor : "pointer"
    },
    cartIcon : {
        height : 48,
        marginRight : 20
    },
    cartCount : {
        background : "orange",
        borderRadius : "50%",
        padding : "4px 8px",
        position : "absolute",
        right : 10,
        top : -5,
        fontSize :12
    }
}