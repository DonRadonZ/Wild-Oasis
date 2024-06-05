
type ResourceProps = {
  resource: string;
}

function Empty({ resource }: ResourceProps) {
    return <p>No {resource} could be found.</p>;
  }
  
  export default Empty;