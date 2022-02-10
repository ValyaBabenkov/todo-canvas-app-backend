import { createGlobalStyle } from 'styled-components';
import { darkSber} from '@sberdevices/plasma-tokens/themes'; // Или один из списка: darkEva, darkJoy, lightEva, lightJoy, lightSber
import { gradient, text } from '@sberdevices/plasma-tokens';
import { sberBox } from '@sberdevices/plasma-tokens/typo';

const DocumentStyle = createGlobalStyle`
    html {
        ${darkSber[":root"]};
        ${sberBox[":root"]};
        height: 100%;
        background-image: ${gradient};
        padding: 1rem; 
        > div { 
            display: flex; 
            gap: 1rem; 
        }
        color: ${text};
    }
`;
const ThemeStyle = createGlobalStyle(darkSber);

export const GlobalStyle = () => (
    <>
        <DocumentStyle />
        <ThemeStyle />
    </>
);