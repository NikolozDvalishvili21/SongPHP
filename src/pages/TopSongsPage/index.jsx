import React from "react";
import CollapsibleExample from "../../components/Navbar";
// import Stack from "react-bootstrap/Stack";
import "../TopSongsPage/style.css";
import { Table } from "flowbite-react";

const TopSongsPage = () => {
  return (
    <>
      <CollapsibleExample />
      <div className="overflow-x-auto p-8">
        <Table>
          <Table.Head className="dark:bg-black" style={{ color: "white" }}>
            <Table.HeadCell className="p-6">Song</Table.HeadCell>
            <Table.HeadCell>Album</Table.HeadCell>
            <Table.HeadCell>Duration</Table.HeadCell>
            <Table.HeadCell>
              <span className="sr-only">Edit</span>
            </Table.HeadCell>
          </Table.Head>
          <Table.Body>
            <Table.Row className="dark:bg-white">
              <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-black p-6">
                <div className="song-and-author">
                  <h1>Nights</h1>
                  <p>Frank Ocean</p>
                </div>
              </Table.Cell>
              <Table.Cell>Blond</Table.Cell>
              <Table.Cell>05:07</Table.Cell>
              <Table.Cell>
                <a
                  href="#"
                  className="font-medium text-orange-600 hover:underline"
                >
                  Play
                </a>
              </Table.Cell>
            </Table.Row>
            <Table.Row className="bg-black">
              <Table.Cell className="whitespace-nowrap font-medium text-white p-6">
                <div className="song-and-author">
                  <h1>Fetti</h1>
                  <p>Playboi Carti</p>
                </div>
              </Table.Cell>
              <Table.Cell style={{ color: "white" }}>In Abundance</Table.Cell>
              <Table.Cell style={{ color: "white" }}>05:16</Table.Cell>
              <Table.Cell>
                <a
                  href="#"
                  className="font-medium text-orange-600 hover:underline"
                >
                  Play
                </a>
              </Table.Cell>
            </Table.Row>
            <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
              <Table.Cell className="whitespace-nowrap font-medium p-6">
              <div className="song-and-author">
                  <h1>2 Milli</h1>
                  <p>Soulja Boy</p>
                </div>
              </Table.Cell>
              <Table.Cell>Single</Table.Cell>
              <Table.Cell>04:20</Table.Cell>
              <Table.Cell>
                <a
                  href="#"
                  className="font-medium text-orange-600 hover:underline"
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
