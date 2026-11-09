import type { Rajzfilm } from '../types/Rajzfilm';
import { useState } from 'react'

type Props = {
  key: number
  rajzfilm: Rajzfilm
};

export function RajzfilmKartya(props: Props) {
  const [latahtosag, setLatahtosag] = useState(false)

  return (
    <div className="col-md-3 mb-4">
      <div className="card h-100 shadow-sm">
        <div className="card-body">
          <h2 className="card-title">{props.rajzfilm.cim}</h2>

          <p className="card-text">
            <i>{props.rajzfilm.studio}</i>
          </p>

          <p className="card-text">
            <b>{props.rajzfilm.megjelenesEve}</b>
          </p>

          {props.rajzfilm.megjelenesEve > 2010 ? (
            <p className="text-success">Modern rajzfilm</p>
          ) : props.rajzfilm.megjelenesEve > 2000 ? (
            <p className="text-primary">Régebbi rajzfilm</p>
          ) : (
            <p className="text-secondary">Klasszikus rajzfilm</p>
          )}

          {latahtosag && (
            <p>{props.rajzfilm.premier}</p>
          )}

          <button
            className="btn btn-primary w-100"
            onClick={() => setLatahtosag(!latahtosag)}
          >
            {latahtosag ? "Premier elrejtése" : "Premier megjelenítése"}
          </button>
        </div>
      </div>
    </div>
  );
}