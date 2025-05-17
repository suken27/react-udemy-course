export interface CoreConceptProps {
  title: string;
  description: string;
  image: string;
}

export default function CoreConcept({image, title, description}: CoreConceptProps) {
  return <li>
    <img src={image} alt="..." />
    <h3>{title}</h3>
    <p>{description}</p>
  </li>
}