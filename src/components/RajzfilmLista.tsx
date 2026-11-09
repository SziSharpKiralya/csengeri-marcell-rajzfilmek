import data from "../data/RajzfilmAdatok.json" with { type: "json" };
import type { Rajzfilm } from '../types/Rajzfilm';
import { RajzfilmKartya } from './RajzfilmKartya';

export function RajzfilmekLista() {
  const rajzfilmAdatok: Rajzfilm[] = data;

  const rajzfilmekSzama = data.length;
  const legkorabbiRajzfilm = Math.min(...rajzfilmAdatok.map(o => o.megjelenesEve))
  const legkesobbiRajzfilm = Math.max(...rajzfilmAdatok.map(o => o.megjelenesEve))

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-4 mb-4"><h5 className="text-center">Rajzfilmek száma:</h5> <p className="text-center">{rajzfilmekSzama}</p></div>
          <div className="col-md-4 mb-4"><h5 className="text-center">Legrégebbi rajzfilm:</h5> <p className="text-center">{legkorabbiRajzfilm}</p></div>
          <div className="col-md-4 mb-4"><h5 className="text-center">Legújabb rajzfilm:</h5> <p className="text-center">{legkesobbiRajzfilm}</p></div>
        </div>

        <div className="row">
          {rajzfilmAdatok.map(rajzfilm => (
            <RajzfilmKartya key={rajzfilm.id} rajzfilm={rajzfilm}></RajzfilmKartya>
          ))}
        </div>
      </div>
    </>
  )
}