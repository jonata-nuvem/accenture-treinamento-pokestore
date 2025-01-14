import styled from "styled-components";
import { mixins } from "../../styles/mixins";

const ButtonPrimary = styled.button`
        border: none;
        background: ${mixins.colors.gradient};
        color: ${mixins.colors.white};
        border-radius: 20px;
        width: 178px;
        height: 44px;
        font-size: ${mixins.typograph.paragraph};
        font-family: ${mixins.fonts.semi_bold};
        margin: 2px;
        :hover {
            opacity: 0.9
        }
    `

export const Styled = {
    ButtonPrimary,
    ButtonSecondary: styled(ButtonPrimary)`
        background: none;
        border: 1px solid ${mixins.colors.primary};
        color: ${mixins.colors.text};

        :hover {
            background: ${mixins.colors.gradient};
            color: ${mixins.colors.white};
            border: none;
        }
    `,
    ButtonText: styled(ButtonPrimary)`
    background: none;
    border: none;
    color: ${mixins.colors.text};

    :hover {
        color: ${mixins.colors.primary};
        border: none;
    }
`
}