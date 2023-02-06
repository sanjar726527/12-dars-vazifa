const { default: styled } = require("styled-components");

const StyledButton = styled.button`
  border-radius: 5px;
  outline: none;
  padding: 12px 20px;
  height: max-content;
  border: 0;
  font-size: 0.875rem;
  line-height: 20px;
  font-weight: 600;
  span {
    background: #ffa;
    color: black;
    border-radius: 5px;
    text-align: center;
    margin-left: 4px;
    padding: 2px 7px;
  }
  ${(props) => {
    switch (props.variant) {
      case "primary":
        return `
        background:#6343d8;
        width:100%;
          color: #fff;
          span{
            background:#FFf;
          };
        `;
      case "white":
        return `
        background: #f0f0f0;
        span{
          background:#ffffff;
        }
        `;
      case "great":
        return `
          background:#754ffe;
          height:50px;
          color: #fff;
          span{
            background:#FFf;
          };
          a{
            color: #fff;
          }
          `;
      case "outline":
        return `
          background: #ffffff; 
          border: 1px solid rgba(0,0,0,0.1); 
          &:hover{
          border: 1px solid rgba(0,0,0,0.2); 
          background: #f1f0f0; 
          } 
        `;
    }
  }};
`;

export default StyledButton;
