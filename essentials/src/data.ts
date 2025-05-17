import componentsImg from './assets/components.png';
import propsImg from './assets/config.png';
import jsxImgg from './assets/jsx-ui.png';
import stateImg from './assets/state-mgmt.png';
import { CoreConceptProps } from './components/CoreConcept';

export const CORE_CONCEPTS = [
    {
        title: 'Components',
        description: 'The core UI building block.',
        image: componentsImg,
    },
    {
        title: 'Props',
        description: 'The way to pass data to components.',
        image: propsImg,
    },
    {
        title: 'JSX',
        description: 'A syntax extension for JavaScript.',
        image: jsxImgg,
    },
    {
        title: 'State Management',
        description: 'Managing the state of your application.',
        image: stateImg,
    },
] as CoreConceptProps[];