import { Outlet } from "react-router-dom";
import { Header } from "../Components/Header";

/**
 * Mock Apple Device container.
 * Device used as reference for viewport: iPhone 15 Pro.
 */
export const Device = () => {
  return (
    <>
      <section className="device">
        <main className="page-container">
          <div>
            <img src="/status_bar.png" />
            <Header />
            <Outlet />
          </div>
          <img src="/home_bar.png" />
        </main>
        <img src="/bezel.png" width={430} height={932} className="bezel" />
      </section>
    </>
  );
};
