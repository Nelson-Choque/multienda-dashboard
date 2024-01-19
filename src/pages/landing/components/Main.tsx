import { RefObject } from "react";
import { CardPlain } from "./CardPlain";

export const Main = ({
  planesRef,
}: {
  planesRef: RefObject<HTMLDivElement>;
}) => {
  return (
    <main className="mt-8 bg-slate-50 sm:mt-0">
      <section className="flex items-center min-h-screen">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center">Planes</h2>
          <p className="mt-4 text-2xl text-center">
            ya no hay excusas para no tener tu tienda virtual
          </p>

          <section
            ref={planesRef}
            className="flex flex-wrap justify-center gap-4 p-2 mt-8"
          >
            <CardPlain price={0} title="Plan gratis" maxProducts={"10"} />
            <CardPlain price={10} title="Emprendedor" maxProducts={"100"} />
            <CardPlain price={20} title="Ilimitado" maxProducts={"ilimitado"} />
          </section>
        </div>
      </section>
    </main>
  );
};
