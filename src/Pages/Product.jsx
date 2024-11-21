import { useEffect } from "react";
import { useState } from "react";

export default function Product() {
  const productData = [
    {
      id: 1,
      productName: "Mawar",
      price: 200000,
      image: "https://i.pinimg.com/564x/9a/75/9f/9a759feb0fb13e3a4813c6ed3fce4599.jpg",
    },
    {
      id: 2,
      productName: "sunflowers ",
      price: 130000,
      image: "https://i.pinimg.com/564x/d1/26/25/d12625738b76ac4adb29e94a790b7d17.jpg",
    },
    {
      id: 3,
      productName: "Tulip",
      price: 125000,
      image: "https://i.pinimg.com/564x/d4/6a/72/d46a723c1452fd1d2d5f43e79d42c26a.jpg",
    },
    {
      id: 4,
      productName: "Mawar Pink Florist",
      price: 210000,
      image: "https://i.pinimg.com/564x/aa/03/93/aa03938e6023df2af48bc9a25fbe8f36.jpg",
    },
    {
      id: 5,
      productName: "Gerbera Florist",
      price: 150000,
      image: "https://i.pinimg.com/564x/23/90/38/239038413ce6c047aecbe517d2c873f6.jpg",
    },
    {
      id: 6,
      productName: "Anyelir Florist",
      price: 120000,
      image: "https://i.pinimg.com/564x/f3/fc/56/f3fc561fa77881ec61f01ec8aca2411e.jpg",
    },
    {
      id: 7,
      productName: "Lili Florist",
      price: 180000,
      image: "https://i.pinimg.com/564x/78/5d/03/785d03ff7ec7e4e8b99a968fc49f521d.jpg",
    },
    {
      id: 8,
      productName: "Dahlia Florist",
      price: 160000,
      image: "https://i.pinimg.com/564x/c9/a7/cd/c9a7cd09f326b725c67f5ff90caf463f.jpg",
    },
    {
      id: 9,
      productName: "Peony Florist",
      price: 220000,
      image: "https://i.pinimg.com/564x/e1/75/b0/e175b04d40acf9445ef02d5fa42cddf3.jpg",
    },
    {
      id: 10,
      productName: "Anggrek Florist",
      price: 250000,
      image: "https://i.pinimg.com/564x/99/f2/df/99f2dfb9c49efaafc08af4cc358d2a28.jpg",
    },
    {
      id: 11,
      productName: "Krisan Florist",
      price: 140000,
      image: "https://i.pinimg.com/564x/5d/fe/30/5dfe30aefa824019f5e767933880bf01.jpg",
    },
    {
      id: 12,
      productName: "Lavender Florist",
      price: 130000,
      image: "https://i.pinimg.com/564x/dd/d1/3a/ddd13a1c9cf83da1531f3e1a558d7178.jpg",
    },
    {
      id: 13,
      productName: "Freesia Florist",
      price: 160000,
      image: "https://i.pinimg.com/564x/f6/ff/9e/f6ff9e74a0d585f8deb844b31156c5e1.jpg",
    },
    {
      id: 14,
      productName: "Zinnia Florist",
      price: 110000,
      image: "https://i.pinimg.com/564x/0c/ab/73/0cab73bf0369fd6e66718477dd24f8ef.jpg",
    },
    {
      id: 15,
      productName: "Kembang Sepatu ",
      price: 145000,
      image: "https://i.pinimg.com/564x/fb/68/0c/fb680cd188e208ecd04d339d2ebd443b.jpg",
    },
    {
      id: 16,
      productName: "Camelia Florist",
      price: 200000,
      image: "https://i.pinimg.com/564x/0b/ad/f8/0badf8397de9245da201880ce5fd077c.jpg",
    },
    {
      id: 17,
      productName: "Bougainvillea Florist",
      price: 180000,
      image: "https://i.pinimg.com/564x/7f/c4/62/7fc462735bd52a8289cd054853813c86.jpg",
    },
    {
      id: 18,
      productName: "Gloriosa Florist",
      price: 190000,
      image: "https://i.pinimg.com/564x/2f/de/b6/2fdeb66c92ee02833db22ea1f2a3ffb4.jpg",
    },
    {
      id: 19,
      productName: "Pansy Florist",
      price: 120000,
      image: "https://i.pinimg.com/564x/2f/de/b6/2fdeb66c92ee02833db22ea1f2a3ffb4.jpg",
    },
    {
      id: 20,
      productName: "Bunga oll Florist",
      price: 140000,
      image: "https://i.pinimg.com/564x/98/2d/50/982d50dbfff956ca7846117c4569ba49.jpg",
    },
    {
      id: 21,
      productName: "Larkspur Florist",
      price: 170000,
      image: "https://i.pinimg.com/564x/b2/ae/59/b2ae592fd4089005724e81bd3570b320.jpg",
    },
  ];
  

  const saveProduct = localStorage.getItem("products");
  const [products, setProducts] = useState(
    saveProduct ? JSON.parse(saveProduct) : productData);
    useEffect(() => {
      localStorage.setItem("products", JSON.stringify(productData));
      setProducts(productData);
    }, []);
        
  // const [products, setProducts] = useState(productData);// untuk menyimpan data produk yg akan ditampilak dikomponen
  const [formData, setformData] = useState(null); // untuk menampung data dari form input sementara sebelum di add/update ke daftar product
  const [isEdit, setIsEdit] = useState(false); // Untuk menentukan apakah form digunakan untuk edit atau add

  // Fungsi untuk menambah produk baru
  function handleAdd() {
    //membuat id baru 
    const newId = products.length > 0 ? Math.max(...products.map((p) => p.id)) + 1 : 1;
    // menyalin array lama dan membuat array baru
    setProducts([...products, { ...formData, id: newId }]);
    setformData(null); // membersihkan data input form 
  }

  // Fungsi untuk memperbarui produk yang ada
  function handleUpdate() {
    setProducts(
      products.map((p) => (p.id === formData.id ? formData : p))
    );
    setformData(null);
    setIsEdit(false);
  }

  return (
    <>
           <div className="container-page">

      <h1 className="title"> C A T A L O G</h1>
      <button className="add-button" onClick={() => {
        setformData({ productName: "", price: "", image: "" });
        setIsEdit(false); // Set mode ke add
      }}>ADD ITEM</button>
      <div className="product-container">
        {products.map((p) => (
          <div key={p.id} className="product-card">
            <img src={p.image} alt="" className="product-image"/>
            <p className="product-name">{p.productName}</p>
            <p className="product-price">{p.price}</p>
            <button className="update-button" onClick={() => {
              setformData(p);
              setIsEdit(true); // Set mode ke edit
            }}>Update</button>
        <button className="delete-button"
        onClick={() => {
            if (window.confirm("Apakah Anda yakin ingin menghapus item ini?")) {
            setProducts(products.filter((item) => item.id !== p.id));
            }}}> Delete </button>
          </div>
        ))}
      </div>

      {formData && (
        <div className="form-container" >
          <form className="form" onSubmit={(e) => {
            e.preventDefault();// untuk mencegah halama reload
            isEdit ? handleUpdate() : handleAdd();
          }}>
            <label>Product Name
              <input
              className="form-input"
                type="text"
                value={formData.productName}
                onChange={(e) => setformData({ ...formData, productName: e.target.value })}
              />
            </label>
            <label>Price
              <input
                className="form-input"
                type="text"
                value={formData.price}
                onChange={(e) => setformData({ ...formData, price: parseFloat(e.target.value) || 0 })}
              />
            </label>
            <label>Image Url
              <input
                 className="form-input"
                type="text"
                value={formData.image}
                onChange={(e) => setformData({ ...formData, image: e.target.value })}
              />
            </label>
            <button type="submit" className="submit-button">{isEdit ? "Update" : "Add"}</button>
            <button type="button" className="cancel-button"  onClick={() => setformData(null)}>Cancel</button>
          </form>
        </div>
      )}
              </div>

    </>
  );
}
