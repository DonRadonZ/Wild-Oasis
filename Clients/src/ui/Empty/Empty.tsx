
type ResourceProps = {
  resourceName: string;
}

function Empty({ resourceName }: ResourceProps) {
    return <p>No {resourceName} could be found.</p>;
  }
  
  export default Empty;