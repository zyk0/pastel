/* === === === styled-components === === === */

const styled = styled.default;

const Wrapper = styled.div`
	display: -ms-flexbox; 
    display: flex;
    -ms-flex-wrap: wrap; 
    flex-wrap: wrap;
	margin: 10px 0px 10px 0px;
`;

const Title = styled.div`
	color: white;
	position: left;
	
	-ms-flex: 25%; 
    flex: 25%;
    max-width: 25%;
	
	margin: 10px 0px 0px 0px;
	font-weight: bold;
`;

const Figma = styled.div`
	background-color: #ffa343;
	height: 40px;
	padding: 10px 0px 0px 15px;
	
	:hover{
	background-color: #ff8e00;
	box-shadow: 0 0 5px rgba(0,0,0,0.5);
	text-shadow: 0px 3px #ff8e00;
    }
`;

const Sketch = styled.div`
	background-color: #00cccc;
	height: 40px;
	padding: 10px 0px 0px 15px;
	
	:hover{
	background-color: #00ffff;
	box-shadow: 0 0 5px rgba(0,0,0,0.5);
	text-shadow: 0px 3px #00cccc;
    }
`;

const Zeplin = styled.div`
	background-color: #00a86b;
	height: 40px;
	padding: 10px 0px 0px 15px;
	
	:hover{
	background-color: #00db8b;
	box-shadow: 0 0 5px rgba(0,0,0,0.5);
	text-shadow: 0px 3px #00a86b;
    }
`;

const Adobe = styled.div`
	background-color: #f19cbb;
	height: 40px;
	padding: 10px 0px 0px 15px;
	
	:hover{
	background-color: #ffaacc;
	box-shadow: 0 0 5px rgba(0,0,0,0.5);
	text-shadow: 0px 3px #ff7aaf;
    }
`;

const CopyLink = styled.a`
  align-items: stretch;
  color: #f0ffff;
  text-decoration: none;
  
  :hover{
	color: #e0ffff;
	font-weight: bolder;
  }
  :focus {
    text-decoration: underline;
	
  }
  
@media (max-width: 350px) {
	Wrapper{
		width: 50%;
		display: flex;
		flex-wrap: wrap;
		margin: 10px 20px 10px 20px;
	}
}  
`;

/*  === === === styled-components === === === */