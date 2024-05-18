import TableOperations from '../../ui/Table/TableOperations'
import Filter from '../../ui/Filter/Filter'

export default function CabinTableOperations() {
  return (
    <TableOperations>
      <Filter filterField="disount" options={[
        {value: "all", label: "All"},
        {value: "no-discount", label: "No-discount"},
        {value: "with-discount", label: "With discount"}
        ]} 
        />
    </TableOperations>
  )
}
