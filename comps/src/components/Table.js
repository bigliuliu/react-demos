function Table({ data, config, keyFn }) {
  const renderHeaders = config.map((column) => {
    return <th key={column.label}>{column.label}</th>;
  });
  const renderedRow = data.map((rowData) => {
    const renderedCells = config.map((column) => {
      return <td key={column.label}>{column.render(rowData)}</td>;
    });
    return (
      <tr className="border-b" key={keyFn(rowData)}>
        {renderedCells}
      </tr>
    );
  });
  return (
    <table className="table-auto border-spacing-2">
      <thead>
        <tr className="border-b-2">{renderHeaders}</tr>
      </thead>
      <tbody>{renderedRow}</tbody>
    </table>
  );
}
export default Table;
