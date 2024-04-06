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
import { GoPackageDependencies } from "react-icons/go";
import NavBar from "@/components/NavBar";
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
  const [distributionTable, setDistributionTable] = useState("column");

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
  }

  return (
    <main className="min-h-[100dvh] ">
      <Modal isOpenModal={isOpenModal} transitionTime=".1s">
        <section className="bg-white rounded-[4px] p-[10px] grid gap-[10px]">
          <div className="flex gap-[10px]">
            <div className="bg-gray-100 p-[5px] rounded-[5px]">
              <h2 className=" text-sm font-semibold ">Agregar existente</h2>
              <p className="text-xs">
                Busca el producto que deseas agregar, si no lo encuentras puedes
                cambiar al formulario "
                <span className="text-primary underline">Agregar nuevo</span>”
                para guardarlo. Despues de guardarlo una vez ya no necesitaras
                agregarlo nuevamente en el futuro lo podras encontrar en esta
                misma sección.
              </p>
            </div>
            <button
              onClick={() => setIsOpenModal(false)}
              className="min-w-[100px] min-h-[111px] text-[10px] bg-tertiary text-white rounded-[5px]"
            >
              Agregar nuevo
            </button>
          </div>
          <form>
            <input
              placeholder="Leche Alpura, Frijoles La sierra..."
              type="text"
              className=" h-[45px] border border-grayPurple w-full text-xs rounded-5 outline-none shadow-[inset_0_0_10px_0_rgba(0,0,0,0.3)] px-2"
            />
          </form>
        </section>
        {/*  <form className="grid gap-2 text-sm md:text-base relative bg-white rounded-[5px] p-5 max-w-[600px]">
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
        </form> */}
      </Modal>

      <div
        onClick={() => setIsOpenModal(true)}
        className="fixed bottom-3 right-3 w-16 h-16 cursor-pointer bg-rose-600 shadow-[0_0_5px_0_rgba(0,0,0,0.2)] flex items-center justify-center rounded-full"
      >
        <GoPackageDependencies className="w-10 h-10 text-white" />
      </div>

      <NavBar />
      <section className="pt-5 min-h-[100dvh] px-5 max-w-[1000px] m-auto ">
        <SearchBar data={[]} />

        <Panel titlePanel="Todos los productos">
          <section className="grid grid-cols-3 place-items-center gap-3 ">
            {products.map((product) => (
              <ProductCard
                key={product.id}
                name={product.name}
                brand={product.brand}
                quantity={product.quantity}
                quantity_type={product.quantity_type}
                units={product.units}
                life={product.life}
              />
            ))}
          </section>
        </Panel>
      </section>
    </main>
  );
}

export default Home;
