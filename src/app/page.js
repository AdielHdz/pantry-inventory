"use client";
import { useEffect, useRef, useState } from "react";
import Input from "../components/Form/Input";
import Modal from "../layouts/Modal/Modal";
import Label from "../layouts/Form/Label";
import Button from "../components/Form/Button";
import { IoCloseOutline } from "react-icons/io5";
import axios from "axios";
import SearchBar from "../components/SearchBar/SearchBar";
import Panel from "@/layouts/Panel/Panel";
import ProductCard from "@/components/Cards/ProductCard";
import Table from "@/components/Table/Table";

import useWindowSize from "@/hooks/useWindowSize";

async function getProducts() {
  return await axios
    .get("/api/products")
    .then((response) => {
      console.log(response);
      return response.data;
    })

    .catch((error) => console.log(error));
}

async function createProduct(newProduct) {
  const { quantity, units } = newProduct;

  return await axios
    .post("/api/products", {
      ...newProduct,
      quantity: Number(quantity),
      units: Number(units),
    })
    .then((response) => response.data)
    .catch((error) => console.log(error));
}

async function deleteProduct(id) {
  return await axios
    .delete(`/api/products/${id}`)
    .then((response) => response.data)
    .catch((error) => console.log(error));
}

function Home() {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [products, setProducts] = useState([]);
  const [distributionTable, setDistributionTable] = useState();

  const windowSize = useWindowSize();

  useEffect(() => {
    async function fetchProducts() {
      const apiProducts = await getProducts();
      setProducts(apiProducts);
    }
    fetchProducts();
  }, []);

  useEffect(() => {
    if (windowSize.width < 550) setDistributionTable("column");

    if (windowSize.width >= 550) setDistributionTable("row");
  }, [windowSize.width]);

  const [newProduct, setNewProduct] = useState({
    name: "",
    brand: "",
    life: "",
    quantity: "",
    quantity_type: "ml",
    units: "",
  });

  function handlerInput(e) {
    let targetName = e.target.name;
    let targetValue = e.target.value;

    if (targetName === "life") {
      targetValue = targetValue.split("-").reverse().join().replace(/,/gi, "/");
    }

    setNewProduct({
      ...newProduct,
      [targetName]: targetValue,
    });

    console.log(newProduct);
  }

  return (
    <main className="bg-rose-50  min-h-[100dvh]">
      <Modal isOpenModal={isOpenModal} transitionTime=".1s">
        <form className="grid gap-2 text-sm md:text-base relative bg-white rounded-sm p-5 max-w-[600px]">
          <h2 className=" font-semibold text-lg text-center mb-3">
            Nuevo producto
          </h2>
          <IoCloseOutline
            onClick={() => {
              setIsOpenModal(false);
            }}
            className="absolute bg-pink-100 rounded cursor-pointer top-3 right-3"
            style={{
              width: "20px",
              height: "20px",
            }}
          />
          <Label>
            Producto
            <Input
              type="text"
              height="h-[40px]"
              handler={handlerInput}
              name="name"
              value={newProduct.product}
            />
          </Label>
          <Label>
            Marca
            <Input
              type="text"
              height="h-[40px]"
              handler={handlerInput}
              name="brand"
              value={newProduct.brand}
            />
          </Label>
          <Label>
            Fecha de caducidad
            <Input
              type="date"
              height="h-[40px]"
              handler={handlerInput}
              name="life"
            />
          </Label>

          <Label>
            Peso | Volumen
            <div className="flex gap-2 ">
              <Input
                type="number"
                height="h-[40px]"
                handler={handlerInput}
                name="quantity"
                value={newProduct.quantity}
              />

              <select
                value={newProduct.quantity_type}
                onChange={(e) =>
                  setNewProduct({
                    ...newProduct,
                    quantity_type: e.target.value,
                  })
                }
                className=" text-sm border-2 h-[40px] border-blue-50 focus:border-blue-400 rounded"
              >
                <option value="ml">ml</option>
                <option value="lt">lt</option>
                <option value="gr">gr</option>
                <option value="kg">kg</option>
              </select>
            </div>
          </Label>
          <Label>
            Cantidad
            <Input
              type="number"
              height="h-[40px]"
              handler={handlerInput}
              name="units"
              value={newProduct.units}
            />
          </Label>

          <div className="w-full flex mt-3">
            <Button
              type="button"
              color="bg-pink-700"
              textColor="text-white"
              handler={async () => {
                const productCreated = await createProduct(newProduct);
                const productsUpdated = await getProducts();
                setProducts(productsUpdated);
                setIsOpenModal(false);
              }}
            >
              Guardar
            </Button>
          </div>
        </form>
      </Modal>

      <Button
        handler={() => setIsOpenModal(true)}
        color="bg-teal-500"
        textColor="text-white"
        radius=" rounded-none"
        paddingBlock="py-5"
      >
        Agregar nuevo producto
      </Button>
      <section className="pt-5 min-h-[100dvh] px-5 max-w-[1000px] m-auto bg-white">
        <SearchBar data={[]} />

        <Panel titlePanel="Todos los productos">
          <Table
            columns="5"
            arrTh={[
              "Nombre",
              "Marca",
              "Peso o Volumen",
              "Medida",
              "En existencia",
              "Fecha de vencimiento",
            ]}
            arrData={products}
            distribution={distributionTable}
            borderColor="border-gray-700"
          />
        </Panel>
      </section>
    </main>
  );
}

export default Home;
