"use client";
import { useEffect, useState } from "react";
import Input from "../components/Form/Input";
import Modal from "../layouts/Modal/Modal";
import Label from "../layouts/Form/Label";
import Button from "../components/Form/Button";
import { IoCloseOutline } from "react-icons/io5";
import axios from "axios";
import SearchBar from "../components/SearchBar/SearchBar";

async function getProducts() {
  return await axios
    .get("/api/products")
    .then((response) => response.data)
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
  useEffect(() => {
    async function fetchProducts() {
      const apiProducts = await getProducts();
      setProducts(apiProducts);
    }
    fetchProducts();
    console.log(products);
  }, []);

  const [newProduct, setNewProduct] = useState({
    title: "",
    brand: "",
    life: "",
    quantity: "",
    quantity_type: "ml",
    units: "",
  });

  function handlerInput(e) {
    const targetName = e.target.name;
    const targetValue = e.target.value;

    setNewProduct({
      ...newProduct,
      [targetName]: targetValue,
    });
  }
  return (
    <main className="bg-rose-50  min-h-[100dvh]">
      <Modal isOpenModal={isOpenModal}>
        <form className="grid gap-2 relative bg-white rounded-md p-5 max-w-[500px]">
          <h2 className=" font-semibold text-lg text-center mb-3">
            Nuevo producto
          </h2>
          <IoCloseOutline
            onClick={() => setIsOpenModal(false)}
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
              name="title"
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
              value={newProduct.life}
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
                className=" text-sm border-2 border-blue-50 focus:border-blue-400 h-9 rounded"
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

        <section>
          <h3 className="text-lg font-semibold border-b border-teal-500 py-2">
            Todos los productos
          </h3>
          <section className="grid  md:grid-cols-3 gap-5 mt-4">
            {products.map((product) => {
              return (
                <div
                  key={product.id}
                  onClick={async () => {
                    const productDeleted = await deleteProduct(product.id);
                    if (productDeleted.title) {
                      const productsUpdated = await getProducts();
                      setProducts(productsUpdated);
                    }
                  }}
                  className="shadow-[2px_2px_10px_0_rgba(0,0,0,0.1)]  rounded p-3 min-w-[150px] grid grid-rows-3 place-items-center "
                >
                  <h3 className="text-center">
                    {`${product.title} ${product.brand}
                    ${product.quantity + product.quantity_type}`}
                  </h3>
                  <h3 className="w-max">Cantidad: {product.units}</h3>
                  <h3 className="  text-rose-600 font-semibold">
                    {product.life}
                  </h3>
                </div>
              );
            })}
          </section>
        </section>
      </section>
    </main>
  );
}

export default Home;
