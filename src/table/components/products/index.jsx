import axios from "axios";
import React, { useEffect, useMemo, useState } from "react";
import { useGlobalFilter, useSortBy, useTable } from "react-table";
import tw from "twin.macro";
import { GlobalFilter } from "./globalFilter";
import Loading from "../../utils/loading.js";
import Error from "../../utils/error.js";

const Table = tw.table`
  table-fixed
  text-base
  text-gray-900
`;

const TableHead = tw.thead`
  p-2
  bg-green-400
  bg-opacity-30
  rounded-xl
`;

const TableRow = tw.tr`
border-b
border-green-500/25
m-2
`;

const TableHeader = tw.th`
p-2
`;

const TableBody = tw.tbody`

`;

const TableData = tw.td`
p-5
`;

export function Products(props) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    setLoading(true);

    const response = await axios
      // .get("https://gorest.co.in/public/v2/posts")
      // .get("https://gorest.coin/public/v2/users")
      .get("https://fakestoreapi.com/products")
      // .get("https://api.publicapis.org/entries")
      .catch((err) => console.log(err));

    if (response) {
      setLoading(false);
      const products = response.data;

      console.log("Products: ", products);
      setProducts(products);
      // console.log("Products: ", products.entries);
      // setProducts(products.entries);
    } else {
      setLoading(false);
      setError(true);
    }
  };

  // const data = useMemo(
  //   () => [
  //     {
  //       id: 1,
  //       title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
  //       price: 109.95,
  //       description:
  //         "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
  //       category: "men's clothing",
  //       image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
  //       rating: {
  //         rate: 3.9,
  //         count: 120,
  //       },
  //     },
  //     {
  //       id: 1,
  //       title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
  //       price: 109.95,
  //       description:
  //         "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
  //       category: "men's clothing",
  //       image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
  //       rating: {
  //         rate: 3.9,
  //         count: 120,
  //       },
  //     },
  //     {
  //       id: 1,
  //       title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
  //       price: 109.95,
  //       description:
  //         "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
  //       category: "men's clothing",
  //       image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
  //       rating: {
  //         rate: 3.9,
  //         count: 120,
  //       },
  //     },
  //   ],
  //   []
  // );

  // const columns = useMemo(
  //   () => [
  //     {
  //       Header: "Id",
  //       accessor: "id",
  //     },
  //     {
  //       Header: "Price",
  //       accessor: "price",
  //     },
  //     {
  //       Header: "Title",
  //       accessor: "title",
  //     },
  //   ],
  //   []
  // );

  const productsData = useMemo(() => [...products], [products]);

  const productsColumns = useMemo(
    () =>
      products[0]
        ? Object.keys(products[0])
            .filter((key) => key !== "rating")
            .map((key) => {
              if (key === "image")
                return {
                  Header: key,
                  accessor: key,
                  Cell: "image.png",
                  maxWidth: 70,
                };

              return { Header: key, accessor: key };
            })
        : [],
    [products]
  );

  const tableHooks = (hooks) => {
    hooks.visibleColumns.push((columns) => [...columns]);
  };

  const tableInstance = useTable(
    {
      columns: productsColumns,
      data: productsData,
    },
    useGlobalFilter,
    tableHooks,
    useSortBy
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    preGlobalFilteredRows,
    setGlobalFilter,
    state,
  } = tableInstance;

  useEffect(() => {
    fetchProducts();
  }, []);

  // const isEven = (idx) => idx % 2 === 0;

  if (loading) {
    return (
      <main>
        <Loading />
      </main>
    );
  }
  if (error) {
    return (
      <main>
        <Error />
      </main>
    );
  }

  return (
    <>
      <GlobalFilter
        preGlobalFilteredRows={preGlobalFilteredRows}
        setGlobalFilter={setGlobalFilter}
        globalFilter={state.globalFilter}
      />
      <Table {...getTableProps()}>
        <TableHead>
          {headerGroups.map((headerGroup) => (
            <TableRow {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <TableHeader
                  {...column.getHeaderProps(column.getSortByToggleProps())}
                >
                  {column.render("Header")}
                  {column.isSorted ? (column.isSortedDesc ? " ▼" : " ▲") : ""}
                </TableHeader>
              ))}
            </TableRow>
          ))}
        </TableHead>
        <TableBody {...getTableBodyProps()}>
          {rows.map((row, idx) => {
            prepareRow(row);

            return (
              <TableRow
              // {...row.getRowProps()}
              // className={isEven(idx) ? "bg-green-400 bg-opacity-30" : ""}
              >
                {row.cells.map((cell, idx) => (
                  <TableData {...cell.getCellProps()}>
                    {cell.render("Cell")}
                  </TableData>
                ))}
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </>
  );
}
