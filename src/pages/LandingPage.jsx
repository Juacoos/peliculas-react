import React from 'react'
import Busqueda from '../components/Busqueda'
import { Peliculas } from '../components/Peliculas'
import { useDebounce } from '../hooks/useDebounce';
import { useQuery } from '../hooks/useQuery';

export function LandingPage() {
  const query = useQuery();
  const search = query.get("search");

  const debouncedSearch = useDebounce(search,500)
  return (
    <div>
      <Busqueda/>
      <Peliculas key={debouncedSearch} search={debouncedSearch} />
    </div>
  )
}
