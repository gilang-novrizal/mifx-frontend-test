import { useEffect, useState } from "react";
import "./App.css";
import ProductImagesSlider from "./components/productImageSlider";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import ProductInfo from "./components/productInfo";
import { CircularProgress } from "@mui/material";

function App() {
  const [products, setProducts] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [loading, setLoading] = useState(false);

  const API_URL = "https://fe.dev.dxtr.asia/api";
  const API_TOKEN =
    "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiMDNiZjhkYTRiZTA5YzMzMTAzZjRkMTk1ZmJjMDNjNGMyZjk5OGJmY2ZiYjNmYWRhNmE5NmQyYzFmMDBjZjliMDgyYzMyNmNmOWMwNzVlYTkiLCJpYXQiOjE2NjU0NTA2NzksIm5iZiI6MTY2NTQ1MDY3OSwiZXhwIjoxNjk2OTg2Njc5LCJzdWIiOiI0Iiwic2NvcGVzIjpbXX0.etIkWipvVLVAT8lmH30rK1dEdgtoqMx1E29hVV7ZQt3Fv1SPPY64iVvR_9m2EgrQxapPam6cxTXYQDkUFnTUEoUHoB0pKaWL67D2E5HF9MkBr4DM_AAzLiir02iyVrmxA2XrZVNk94QYTIC2G_zgwfEkIAQfFWqlW80oPDfFH5F2modvvuJlNX8itEtrdmB5EGjpzOijvCnAc5_xjkT6anly9qqapBfzUsM1qOsLYmmYB8Tpcb3MvRtfHOggjDNvIYcGUmXjBTP8bcJKoI1QEaoycuRqSctuJsQEK0OJvlaE1cw54VFBaDROXLI_zMSHtjhoWZi_qa6_wkpfky4fmc4pFgC5ON3zNCUfOHcbzVYS9mZqozr-4o8kGObX1QIWGB_qu3ovDtFIeCd_bj6UCDqFW5mOLkUKL_SI3uhaRk4m5ohkHLpopMVmFWXPG6t_DLubvmn2EPa8Kyb2pCxxRsqoM_l5YQ71N1A47FH38A3qcJCeK8sv96Ay-U2URXMl7YCo2R_GgZumDTd7EIfkpVOkkHEeDegEsa_7x_UdXNCenVy_FqtPVVvHlWioBfJ6JfUDyoNojt6r9RYVp5c1e5zHrunTrEbaZdur_M-FmWHuFRJh_7xLn4JcB5F_mcH-ETQjj5YKmqGT-NRhLAUgMrCXDyfuNf5i67e4g9_QK_c";

  const getData = () => {
    setLoading(true);
    return fetch(API_URL + "/products", {
      method: "GET",
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${API_TOKEN}`,
      },
    })
      .then((res) => {
        setLoading(false);
        return res.json();
      })
      .then((data) => {
        setProducts(data);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="App">
      <div className="page">
        {loading ? (
          <CircularProgress />
        ) : (
          <>
            <ProductImagesSlider
              products={products}
              handleChangeProduct={setActiveIndex}
              activeIndex={activeIndex}
            />
            {products[activeIndex] && (
              <ProductInfo product={products[activeIndex]} />
            )}
          </>
        )}
      </div>
    </div>
  );
}

export default App;
