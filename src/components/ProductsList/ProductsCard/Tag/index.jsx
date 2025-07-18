import styled from "styled-components"

const TagContainer = styled.div`
    background-color: ${props => props.color || "#999"};
    border-radius: 8px;
    color: #fff;
    font-weight: 700;
    font-size: 14px;
    padding: 2px 10px;
`

function Tag({label,color}){
    return (
        <TagContainer color={color}>
            {label}
        </TagContainer>
    )
}
Tag.propTypes = {
    label: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired
}

export default Tag