import React from "react";
import CollapsibleExample from "../../components/Navbar";
// import Stack from "react-bootstrap/Stack";
// import "../TopSongsPage/style.css";
import { Table } from "flowbite-react";
import "flowbite/dist/flowbite.min.css";
import "bootstrap/dist/css/bootstrap.min.css";

const TopSongsPage = () => {
  return (
    <>
      <CollapsibleExample />
      <div className="overflow-x-auto p-8">
        <Table style={{ fontSize: "17px" }}>
          <Table.Head>
            <Table.HeadCell style={{ fontSize: "17px" }}>Song</Table.HeadCell>
            <Table.HeadCell style={{ fontSize: "17px" }}>Album</Table.HeadCell>
            <Table.HeadCell style={{ fontSize: "17px" }}>
              Duration
            </Table.HeadCell>
            <Table.HeadCell>
              <span className="sr-only">Play</span>
            </Table.HeadCell>
          </Table.Head>
          <Table.Body className="">
            <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
              <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                <div className="song-author">
                  <h1 style={{ fontWeight: "700" }}>Nights</h1>
                  <h1>Frank Ocean</h1>
                </div>
              </Table.Cell>
              <Table.Cell>Blond</Table.Cell>
              <Table.Cell>05:16</Table.Cell>
              <Table.Cell>
                <a
                  href="#"
                  className="font-medium text-orange-600 hover:underline dark:text-cyan-500"
                >
                  Play
                </a>
              </Table.Cell>
            </Table.Row>
            <Table.Row className="bg-black text-white dark:border-gray-700 dark:bg-gray-800">
              <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                <div className="song-author" style={{color: "white"}}>
                  <h1 style={{ fontWeight: "700" }}>Sicko Mode</h1>
                  <h1>Travis Scott</h1>
                </div>
              </Table.Cell>
              <Table.Cell>Astroworld</Table.Cell>
              <Table.Cell>05:13</Table.Cell>
              <Table.Cell>
                <a
                  href="#"
                  className="font-medium text-orange-600 hover:underline dark:text-cyan-500"
                >
                  Play
                </a>
              </Table.Cell>
            </Table.Row>
            <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
              <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
              <div className="song-author" style={{color: "black"}}>
                  <h1 style={{ fontWeight: "700" }}>Bullet From A Gun</h1>
                  <h1>Skepta</h1>
                </div>
              </Table.Cell>
              <Table.Cell>Ignorance Is Bliss</Table.Cell>
              <Table.Cell>02:52</Table.Cell>
              <Table.Cell>
                <a
                  href="#"
                  className="font-medium text-orange-600 hover:underline dark:text-cyan-500"
                >
                  Play
                </a>
              </Table.Cell>
            </Table.Row>
            <Table.Row className="bg-black text-white dark:border-gray-700 dark:bg-gray-800">
              <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                <div className="song-author" style={{color: "white"}}>
                  <h1 style={{ fontWeight: "700" }}>PRIDE</h1>
                  <h1>Kendrick Lamar</h1>
                </div>
              </Table.Cell>
              <Table.Cell>DAMN.</Table.Cell>
              <Table.Cell>04:36</Table.Cell>
              <Table.Cell>
                <a
                  href="#"
                  className="font-medium text-orange-600 hover:underline dark:text-cyan-500"
                >
                  Play
                </a>
              </Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table>
      </div>
    </>
  );
};

export default TopSongsPage;
