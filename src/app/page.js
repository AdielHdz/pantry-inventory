"use client";
import { useState } from "react";
import Input from "./components/Form/Input";
import Modal from "./layouts/Modal/Modal";
import Label from "./layouts/Form/Label";
import Button from "./components/Form/Button";
import { IoCloseOutline } from "react-icons/io5";

import SearchBar from "./components/SearchBar/SearchBar";
function Home() {
  const [isOpenModal, setIsOpenModal] = useState(false);

  const [products, setProducts] = useState([
    {
      id: 1,
      product: "Leche",
      brand: "Alpura",
      life: "27/02/2024",
      weight: 1,
      typeWeight: "lt",
      amount: 4,
    },
    {
      id: 2,
      product: "Leche",
      brand: "Lala",
      life: "27/10/2024",
      weight: 1,
      typeWeight: "lt",
      amount: 8,
    },
    {
      id: 3,
      product: "Leche",
      brand: "Member´s Mark",
      life: "07/05/2024",
      weight: 1,
      typeWeight: "lt",
      amount: 5,
    },
    {
      id: 4,
      product: "Leche",
      brand: "Member´s Mark",
      life: "07/05/2024",
      weight: 1,
      typeWeight: "lt",
      amount: 5,
    },
    {
      id: 5,
      product: "Leche",
      brand: "Member´s Mark",
      life: "07/05/2024",
      weight: 1,
      typeWeight: "lt",
      amount: 5,
    },
  ]);
  const [newProduct, setNewProduct] = useState({
    id: products[products.length - 1].id + 1,
    product: "",
    brand: "",
    life: "",
    weight: 0,
    typeWeight: "ml",
    amount: 0,
  });

  function handlerInput(e) {
    const targetName = e.target.name;
    const targetValue = e.target.value;

    if (targetName === "weight") {
      console.log("Typing in weight", targetValue);
    }

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
              name="product"
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
                type="text"
                height="h-[40px]"
                handler={handlerInput}
                name="weight"
                value={newProduct.weight}
              />

              <select
                value={newProduct.typeWeight}
                onChange={(e) =>
                  setNewProduct({
                    ...newProduct,
                    typeWeight: e.target.value,
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
              name="amount"
              value={newProduct.amount}
            />
          </Label>

          <div className="w-full flex mt-3">
            <Button
              type="button"
              color="bg-pink-700"
              textColor="text-white-700"
              handler={() => {
                let newProducts = [...products];
                newProducts.push(newProduct);
                setProducts(newProducts);
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
        <SearchBar data={products} />

        <section>
          <h3 className="text-lg font-semibold border-b border-teal-500 py-2">
            Todos los productos
          </h3>
          <section className="grid  md:grid-cols-3 gap-5 mt-4">
            {products.map((product) => {
              return (
                <div
                  key={product.id}
                  className="shadow-[2px_2px_10px_0_rgba(0,0,0,0.1)]  rounded p-3 min-w-[150px] grid grid-rows-3 place-items-center "
                >
                  <h3 className="text-center">
                    {`${product.product} ${product.brand}
                    ${product.weight + product.typeWeight}`}
                  </h3>
                  <h3 className="w-max">Cantidad: {product.amount}</h3>
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
