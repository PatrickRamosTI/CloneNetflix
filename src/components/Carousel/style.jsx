import styled from 'styled-components';

export const CarouselContainer = styled.div`
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const CarouselContent = styled.div`
    width: 100%;
    max-width: 800px;
    padding: 20px;
    background-color: #000000;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

export const StyledImage = styled.img`
    width: 100%;
    height: auto;
    border-radius: 8px;
`;

export const InputContainer = styled.div`
    display: flex;
    margin-top: 10px;

    input {
        flex: 1;
        padding: 8px;
        border-radius: 4px;
        border: 1px solid #ccc;
        margin-right: 8px;
    }

    button {
        padding: 8px 12px;
        border-radius: 4px;
        background-color: #007bff;
        color: white;
        border: none;
        cursor: pointer;

        &:hover {
            background-color: #0056b3;
        }
    }
`;

export const CommentList = styled.ul`
    list-style-type: none;
    padding: 0;
    margin-top: 10px;

    li {
        background: #000000;
        padding: 8px;
        border-radius: 4px;
        margin-bottom: 4px;
    }
`;
