import Table from "./Table"
function SortableTable(props){
    const {config} = props
    const handleClick = (label)=>{
        console.log(label)
    }
    const updatedConfig = config.map((column)=>{
        console.log(column,"---------")
        if(!column.sortValue){
            return column
        }
        return {
            ...column,
            header:()=>(<th onClick={()=>handleClick(column.label)}>{column.label} is sortable</th>)
        }
    })
    return <Table {...props} config={updatedConfig}/>
}
export default SortableTable