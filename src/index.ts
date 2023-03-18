export function mapEqual<T, E>(map1: Map<T, E>, map2: Map<T, E>): boolean{
  if(map1.size !== map2.size) return false;
  
  console.log(map1.size);
  for (const key1 of map1.keys()) {
    for (const key2 of map2.keys()) {
      if(key1 !== key2) return false;
    }
  }

  return true;
}
