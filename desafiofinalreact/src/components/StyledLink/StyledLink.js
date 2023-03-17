import { Link } from "@material-ui/core";
import { styled } from "@material-ui/core/styles";


const StyledLink = styled(Link)({
    color: "blue",
    textDecoration: "none",
    "&:hover": {
      textDecoration: "underline",
    },
  });

export default StyledLink; 
