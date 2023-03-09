/**
 * Parenthesis-less function & Template Literal
 * 
 */

const div = function(s, ...v) {
   // console.log(typeof(s), s instanceof Array, s.length);
   console.log(s, v); 
   //object true 1
    return function(props) {
        return '<div></div>';
    }
}

const StyledDiv = div`
    color: ${(props) =>{props.color ? props.color: '#111'}};
    font-size: 20px;
    ${'hello'}
    font-weight: bold;
`;