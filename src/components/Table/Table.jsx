import { useSelector } from "react-redux";

function Table () {
    const airlineList = useSelector(store => store.airlineList);

    return(
        <div>
            <h3>All Airline Logged</h3>
            <table>
                {airlineList.map((list, index) =>
                <tr key={index}>
                    <td>{list.airline}</td>
                </tr>
                )}
            </table>
        </div>
    )
}

export default Table;